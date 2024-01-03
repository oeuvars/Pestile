import type { Config } from 'drizzle-kit';

export default {
   schema: "./src/db/schema.ts",
   driver: 'pg',
   out: './drizzle',
   dbCredentials: {
      connectionString: "postgresql://oeuvars:Vtpv42NwcAgI@ep-sweet-brook-15154860-pooler.ap-southeast-1.aws.neon.tech/pestile?sslmode=require"
   },
}satisfies Config;
