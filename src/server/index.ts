import { router } from "./trpc";
import { register } from "./auth/register";
import { login } from "./auth/login";
import { verify } from "./auth/verify";

export const appRouter = router({
  register: register,
  login: login,
  verify: verify
});

export type AppRouter = typeof appRouter;
