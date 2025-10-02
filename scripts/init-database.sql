-- C-Level Hire AI Agent Database Schema
-- This script creates all required tables for the unified autoapply platform

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS "User" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    "passwordHash" VARCHAR(255) NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "targetSalary" INTEGER,
    "weeklyRate" DECIMAL(10,2),
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Profile table
CREATE TABLE IF NOT EXISTS "Profile" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "userId" UUID UNIQUE NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    phone VARCHAR(50),
    location VARCHAR(255),
    "linkedinUrl" VARCHAR(500),
    "portfolioUrl" VARCHAR(500),
    summary TEXT,
    skills TEXT[],
    experience JSONB,
    education JSONB,
    certifications JSONB,
    "preferredRoles" TEXT[],
    "salaryExpectation" INTEGER,
    availability VARCHAR(100),
    "remotePreference" VARCHAR(50),
    "jobTitle" VARCHAR(255),
    "currentSalary" INTEGER,
    "yearsExperience" INTEGER,
    "resumeUrl" VARCHAR(500),
    "coverLetterTemplate" TEXT,
    "autoApplyEnabled" BOOLEAN DEFAULT false,
    "profileCompletionScore" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- AutoApplySettings table
CREATE TABLE IF NOT EXISTS "AutoApplySettings" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "userId" UUID UNIQUE NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    enabled BOOLEAN DEFAULT false,
    "jobTitles" TEXT[],
    locations TEXT[],
    "salaryMin" INTEGER,
    "salaryMax" INTEGER,
    "experienceLevel" VARCHAR(50),
    "remoteOnly" BOOLEAN DEFAULT false,
    "companySizes" TEXT[],
    "jobTypes" TEXT[],
    "excludedCompanies" TEXT[],
    "keywords" TEXT[],
    "blacklistKeywords" TEXT[],
    "maxApplicationsPerDay" INTEGER DEFAULT 10,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Job table
CREATE TABLE IF NOT EXISTS "Job" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    description TEXT,
    requirements TEXT,
    salary VARCHAR(255),
    "jobType" VARCHAR(100),
    "experienceLevel" VARCHAR(100),
    "applicationUrl" VARCHAR(500),
    "sourceUrl" VARCHAR(500),
    "externalId" VARCHAR(255),
    source VARCHAR(100),
    "postedDate" TIMESTAMP,
    "scrapedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Application table
CREATE TABLE IF NOT EXISTS "Application" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "userId" UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    "jobId" UUID NOT NULL REFERENCES "Job"(id) ON DELETE CASCADE,
    status VARCHAR(50) DEFAULT 'pending',
    "appliedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "coverLetter" TEXT,
    "customResume" TEXT,
    "applicationData" JSONB,
    "responseReceived" BOOLEAN DEFAULT false,
    "responseDate" TIMESTAMP,
    "responseType" VARCHAR(100),
    notes TEXT,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subscription table
CREATE TABLE IF NOT EXISTS "Subscription" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "userId" UUID UNIQUE NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    "stripeCustomerId" VARCHAR(255),
    "stripeSubscriptionId" VARCHAR(255),
    plan VARCHAR(100) NOT NULL DEFAULT 'free',
    status VARCHAR(50) DEFAULT 'active',
    "currentPeriodStart" TIMESTAMP,
    "currentPeriodEnd" TIMESTAMP,
    "cancelAtPeriodEnd" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "idx_user_email" ON "User"(email);
CREATE INDEX IF NOT EXISTS "idx_profile_userId" ON "Profile"("userId");
CREATE INDEX IF NOT EXISTS "idx_autoapply_userId" ON "AutoApplySettings"("userId");
CREATE INDEX IF NOT EXISTS "idx_application_userId" ON "Application"("userId");
CREATE INDEX IF NOT EXISTS "idx_application_jobId" ON "Application"("jobId");
CREATE INDEX IF NOT EXISTS "idx_job_company" ON "Job"(company);
CREATE INDEX IF NOT EXISTS "idx_job_location" ON "Job"(location);
CREATE INDEX IF NOT EXISTS "idx_subscription_userId" ON "Subscription"("userId");

-- Insert default data
INSERT INTO "User" (id, email, "passwordHash", "firstName", "lastName", "targetSalary") 
VALUES (
    uuid_generate_v4(),
    'test@example.com', 
    '$2b$10$example.hash.for.testing.purposes.only', 
    'Test', 
    'User', 
    150000
) ON CONFLICT (email) DO NOTHING;

COMMENT ON TABLE "User" IS 'Main user accounts for the platform';
COMMENT ON TABLE "Profile" IS 'Extended user profile information for job applications';
COMMENT ON TABLE "AutoApplySettings" IS 'User preferences for automated job applications';
COMMENT ON TABLE "Job" IS 'Job postings scraped from various sources';
COMMENT ON TABLE "Application" IS 'Track job applications submitted by users';
COMMENT ON TABLE "Subscription" IS 'User subscription and billing information';