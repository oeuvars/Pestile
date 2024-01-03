CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text,
	"is_verified" boolean,
	"salt" text,
	"sessiontoken" text,
	"otp" integer,
	"last_login" text,
	"created_at" text,
	"update_at" text
);
