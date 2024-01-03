import { publicProcedure, router } from "./trpc";
import { db, getUserByEmail, users } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { sendMail } from "@/helpers/sendMail";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET = "ztamHqj7MAOe8p8n";

const userSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

const verifySchema = z.object({
  email: z.string().email(),
  oneTimePass: z.number(),
});

function generateToken() {
  const randomNum = Math.random() * 9000;
  return Math.floor(1000 + randomNum);
}
const randomOTP = generateToken();

const date = new Date();
let currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

export const appRouter = router({
  signUp: publicProcedure.input(userSchema).mutation(async (opts) => {
    const existingUser = await getUserByEmail(opts.input.email);
    if (existingUser && existingUser.length > 0) {
      const isUserVerified = existingUser[0].is_verified;
      if (isUserVerified === false) {
        await db.update(users).set({ otp: randomOTP, created_at: currentDate }).where(eq(users.email, opts.input.email));
        const mailSubject = "Mail Verification";
        const content = `<h3>Hi ${opts.input.username}, Your sign up verification OTP is: ${randomOTP}</h3>`;
        sendMail(opts.input.email, mailSubject, content);
        const emailOldToken = jwt.sign({ email: opts.input.email }, JWT_SECRET, { expiresIn: "24h" });
        return { message: "User updated successfully", emailOldToken };
      } else {
        return { message: "User already exists" };
      }
    } else {
      bcrypt.hash(opts.input.password, 10, async (err, hash) => {
        if(err) {
          return { status: 409, message: err };
        } else {
          const user = await db.insert(users).values({ username: opts.input.username, email: opts.input.email, password: hash, is_verified: false });
          if (user) {
            await db.update(users).set({ otp: randomOTP, created_at: currentDate }).where(eq(users.email, opts.input.email));
            const mailSubject = "Mail Verification";
            const content = `<h3>Hi ${opts.input.username}, Your sign up verification OTP is: ${randomOTP}</h3>`;
            sendMail(opts.input.email, mailSubject, content);
            const emailNewToken = jwt.sign({ email: opts.input.email }, JWT_SECRET, { expiresIn: "24h" });
            return { message: "User created successfully", emailNewToken };
          } else {
            return { message: "Can't create user" };
          }
        }
      });
    }
  }),

  verify: publicProcedure.input(verifySchema).mutation(async (opts) => {
    const email = opts.input.email;
    const oneTimePass = opts.input.oneTimePass;
    const user = await getUserByEmail(email);
    const result = user[0];
    if (result && result.otp === oneTimePass) {
      await db.update(users).set({ is_verified: true, otp: null }).where(eq(users.email, email));
      return { sucess: true }
    } else {
      return { success: true }
    }
  }),
});

export type AppRouter = typeof appRouter;
