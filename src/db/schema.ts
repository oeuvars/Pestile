import { serial, text, pgTable, boolean, integer, timestamp } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

export const users = pgTable('users', {
   id: serial('id').primaryKey(),
   username: text('username').notNull(),
   email: text('email').notNull(),
   password: text('password'),
   is_verified: boolean('is_verified'),
   otp: integer('otp'),
   last_login: timestamp('last_login'),
   created_at: timestamp('created_at'),
   updated_at: timestamp('updated_at'),
})
const connectionString = process.env.DATABASE_URL!

const client = postgres(connectionString)
export const db = drizzle(client);

export const getUserByEmail = async (email: string) =>
    await db.select().from(users).where(eq(users.email, email));


