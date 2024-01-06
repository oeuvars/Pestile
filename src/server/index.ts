import { router } from "./trpc";
import { register } from "./auth/register";
import { login } from "./auth/login";
import { verify } from "./auth/verify";
import { forgotPassword } from "./auth/forgot-password";
import { updatePassword } from "./auth/update-password";

export const appRouter = router({
  register: register,
  login: login,
  verify: verify,
  "forgot-password": forgotPassword,
  "update-password": updatePassword
});

export type AppRouter = typeof appRouter;
