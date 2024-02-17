import type { Config } from 'drizzle-kit';

export default {
   schema: "./src/db/schema.ts",
   driver: 'pg',
   out: './drizzle',
   dbCredentials: {
      connectionString: "postgres://postgres.idgtncmohkebvkzsmrlz:xh1HxYukMmOXSJJx@aws-0-ap-south-1.pooler.supabase.com:5432/postgres"
   },
} satisfies Config;
