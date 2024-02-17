import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";

export const serverClient = appRouter.createCaller({
   links: [
      httpBatchLink({
         url: `{${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc}`,
         fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: 'include',
            });
          },
      })
   ]
})
