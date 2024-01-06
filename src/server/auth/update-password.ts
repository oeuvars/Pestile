import bcrypt from "bcrypt";
import { db, users } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { publicProcedure } from "../trpc";

const updatePasswordSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const updatePassword = publicProcedure.input(updatePasswordSchema).mutation(async (opts) => {
    const { email, password } = opts.input;
    const hashedPassword: string = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 7, (err, hash) => {
        if (err) reject(err);
        else resolve(hash);
      });
    });
   const user = await db.update(users).set({ password: hashedPassword }).where(eq(users.email, email));
   if (user) {
      await db.update(users).set({ updated_at: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}) }).where(eq(users.email, email));
      return { message: "Password updated succesfully" };
   } else {
      return { message: "Could not update password" };
   }
});
