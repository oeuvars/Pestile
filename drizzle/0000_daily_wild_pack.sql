CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text,
	"is_verified" boolean,
	"otp" integer,
	"last_login" text,
	"created_at" text,
	"updated_at" text
);
