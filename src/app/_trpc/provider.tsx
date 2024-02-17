"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/react-query";
import React, { useState } from "react";

import { trpc } from "./client";

export default function Provider({ children }: { children: React.ReactNode }) {
   const [queryClient] = useState(() => new QueryClient({}));
   const [trpcClient] = useState(() =>
      trpc.createClient({
         links: [
            httpBatchLink({
               url: `{${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc}`,
            }),
         ],
      })
   );
   return (
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
         <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </trpc.Provider>
   )
}
