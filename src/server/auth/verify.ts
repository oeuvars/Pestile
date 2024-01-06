import { publicProcedure } from "../trpc";
import { db, getUserByEmail, users } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";

const verifySchema = z.object({
   email: z.string().email(),
   oneTimePass: z.number(),
 });

export const verify = publicProcedure.input(verifySchema).mutation(async (opts) => {
   const email = opts.input.email;
   const oneTimePass = opts.input.oneTimePass;
   const user = await getUserByEmail(email);
   const result = user[0];
   if (result && result.otp === oneTimePass) {
     await db.update(users).set({ is_verified: true, otp: null }).where(eq(users.email, email));
     return { sucess: true }
   } else {
     return { success: false }
   }
 })
