import { serial, text, pgTable, pgSchema, boolean, integer } from "drizzle-orm/pg-core";
import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from "drizzle-orm";

export const users = pgTable('users', {
   id: serial('id').primaryKey(),
   username: text('username').notNull(),
   email: text('email').notNull(),
   password: text('password'),
   is_verified: boolean('is_verified'),
   salt: text('salt'),
   sessiontoken: text('sessiontoken'),
   otp: integer('otp'),
   last_login: text('last_login'),
   created_at: text('created_at'),
   update_at: text('update_at'),
})
neonConfig.fetchConnectionCache = true;

const sql = neon("postgresql://oeuvars:Vtpv42NwcAgI@ep-sweet-brook-15154860-pooler.ap-southeast-1.aws.neon.tech/pestile?sslmode=require"!);

export const db = drizzle(sql);

export const getUserByEmail = async (email: string) =>
    await db.select().from(users).where(eq(users.email, email));


