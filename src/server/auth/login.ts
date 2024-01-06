import { db, getUserByEmail, users } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { publicProcedure } from "../trpc";

const loginSchema = z.object({
   email: z.string().email(),
   password: z.string(),
})

const JWT_SECRET = process.env.JWT_SECRET!;

export const login = publicProcedure.input(loginSchema).mutation(async (opts) => {
   const { email, password } = opts.input;
   const result = await getUserByEmail(email);
   const user = result[0]
     if (!result || result.length === 0 || user.is_verified === false) {
       return { success: false, message : "User not verified or registered", token: null }
     }
   else {
     const status: boolean = await new Promise((resolve, reject) => {
       bcrypt.compare(password, user.password! , async (error, result) => {
         if (error) reject(error);
         else resolve(result);
       })
     });
     if(status === true) {
       const loginToken = jwt.sign({ name: user.username, email: user.email }, JWT_SECRET, {expiresIn: '24h'});
       await db.update(users).set({ last_login: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}) }).where(eq(users.email, email));
       return { success: true, message : "User logged in", token: loginToken }
     }
     else {
       return { success: false,message : "Pssword Incorrect", token: null }
     }
   }
 })
