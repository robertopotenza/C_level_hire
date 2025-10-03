-- Migration: Implement comprehensive schema from working Apply Autonomously project
-- This migration replaces the simple User/Profile structure with comprehensive models

-- Drop existing tables if they exist (be careful in production)
DROP TABLE IF EXISTS "Application" CASCADE;
DROP TABLE IF EXISTS "AutoApplySettings" CASCADE;
DROP TABLE IF EXISTS "Subscription" CASCADE;
DROP TABLE IF EXISTS "Profile" CASCADE;
DROP TABLE IF EXISTS "Job" CASCADE;
DROP TABLE IF EXISTS "JobApplication" CASCADE;

-- Rename existing User table columns and update structure
ALTER TABLE "User" 
  RENAME COLUMN "id" TO "user_id";
  
ALTER TABLE "User" 
  RENAME TO "users";

-- Add new columns to users table
ALTER TABLE "users" 
  ADD COLUMN IF NOT EXISTS "password_hash" TEXT,
  ADD COLUMN IF NOT EXISTS "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN IF NOT EXISTS "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Remove old columns that are no longer needed
ALTER TABLE "users" 
  DROP COLUMN IF EXISTS "firstName",
  DROP COLUMN IF EXISTS "lastName",
  DROP COLUMN IF EXISTS "targetSalary",
  DROP COLUMN IF EXISTS "weeklyRate",
  DROP COLUMN IF EXISTS "createdAt",
  DROP COLUMN IF EXISTS "updatedAt";

-- Make passwordHash nullable since we're using magic links
ALTER TABLE "users" 
  ALTER COLUMN "password_hash" DROP NOT NULL;

-- Create magic_link_tokens table
CREATE TABLE "magic_link_tokens" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "token" TEXT UNIQUE NOT NULL,
  "expiresAt" TIMESTAMP NOT NULL,
  "usedAt" TIMESTAMP,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "magic_link_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE CASCADE
);

-- Create job_preferences table
CREATE TABLE "job_preferences" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT UNIQUE NOT NULL,
  "desired_roles" TEXT[],
  "experience_level" TEXT,
  "salary_min" INTEGER,
  "salary_max" INTEGER,
  "location_preference" TEXT,
  "preferred_locations" TEXT[],
  "willing_to_relocate" BOOLEAN NOT NULL DEFAULT FALSE,
  "visa_sponsorship" BOOLEAN NOT NULL DEFAULT FALSE,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "job_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE CASCADE
);

-- Create profiles table
CREATE TABLE "profiles" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT UNIQUE NOT NULL,
  "first_name" TEXT,
  "last_name" TEXT,
  "phone" TEXT,
  "address" TEXT,
  "linkedin_url" TEXT,
  "website_url" TEXT,
  "current_title" TEXT,
  "current_company" TEXT,
  "years_experience" INTEGER,
  "resume_url" TEXT,
  "cover_letter_template" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE CASCADE
);

-- Create eligibility table
CREATE TABLE "eligibility" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT UNIQUE NOT NULL,
  "work_authorization" TEXT,
  "security_clearance" TEXT,
  "felony_conviction" BOOLEAN NOT NULL DEFAULT FALSE,
  "drug_test_willing" BOOLEAN NOT NULL DEFAULT TRUE,
  "background_check_willing" BOOLEAN NOT NULL DEFAULT TRUE,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "eligibility_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE CASCADE
);

-- Create screening_answers table
CREATE TABLE "screening_answers" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "question" TEXT NOT NULL,
  "answer" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "screening_answers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE CASCADE
);

-- Create indexes
CREATE INDEX "screening_answers_userId_idx" ON "screening_answers"("userId");

-- Create unique indexes
CREATE UNIQUE INDEX "magic_link_tokens_token_key" ON "magic_link_tokens"("token");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");