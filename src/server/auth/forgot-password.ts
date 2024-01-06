import { db, getUserByEmail, users } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { publicProcedure } from "../trpc";
import { sendMail } from "../helpers/sendMail";
import { generateOTP } from "../helpers/generateOTP";

const forgotPasswordSchema = z.object({
   email: z.string().email(),
 })

const JWT_SECRET = process.env.JWT_SECRET!;
const randomOTP = generateOTP();
const mailSubject = "Pestile | OTP Verification";

const content = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  <html lang="en">

    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet">
    </head>

    <body style="background-color:#ffffff;font-family:HelveticaNeue,Helvetica,Arial,sans-serif">
      <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;background-color:#ffffff;border:1px solid #eee;border-radius:5px;box-shadow:0 5px 10px rgba(20,50,70,.2);margin-top:20px;width:360px;margin:0 auto;padding:68px 0 130px">
        <tr style="width:100%">
          <td><img src="https://i.ibb.co/chf2qJV/pestile.png" alt="pestile" width="full" height="60" style="display:block;object-fit:cover;outline:none;border:none;text-decoration:none;margin:0 auto" />
            <p style="font-size:11px;line-height:16px;margin:16px 8px 8px 8px;color:#444;font-weight:600;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;height:16px;letter-spacing:0;text-align:center">Verify Your Identity</p>
            <h1 style="color:#1E1B13;display:inline-block;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;line-height:24px;margin-bottom:0;margin-top:0;text-align:center">Enter the following code to update your password.</h1>
            <table style="background:rgba(0,0,0,.05);border-radius:4px;margin:36px auto 36px;vertical-align:middle;width:full" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
              <tbody>
                <tr>
                  <td>
                    <p style="font-family:'Playfair Display',serif;font-size:32px;line-height:30px;margin:auto;color:#1E1B13;display:inline-block;font-family:HelveticaNeue-Medium;font-weight:700;letter-spacing:2px;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">${randomOTP}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:15px;line-height:23px;margin:0;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center">Not expecting this email?</p>
            <p style="font-size:15px;line-height:23px;margin:0;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center">Contact <a target="_blank" style="color:#444;text-decoration:underline" href="mailto:support@pestile.com">support@plaid.com</a> if you did not request this code.</p>
          </td>
        </tr>
      </table>
      <p style="font-size:12px;line-height:23px;margin:0;color:#000;font-weight:700;letter-spacing:0;margin-top:20px;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;text-align:center">Securely powered by Pestile.</p>
    </body>

  </html>`;

export const forgotPassword = publicProcedure.input(forgotPasswordSchema).mutation(async (opts) => {
   const { email } = opts.input;
   const user = await getUserByEmail(email);
   const result = user[0];
   if (result.email && result.is_verified === true ) {
      sendMail(email, mailSubject, content)
      const otpUpadted = await db.update(users).set({ otp: randomOTP }).where(eq(users.email, email));
      const token = jwt.sign({ email: email }, JWT_SECRET, {expiresIn: '1h'});
      if (otpUpadted) {
         return { message: "Verified", token: token };
      } else {
         return { message: "Error", token: null };
      }
   } else {
      return { message: "User not verified or registered", token: null };
   }

 })
