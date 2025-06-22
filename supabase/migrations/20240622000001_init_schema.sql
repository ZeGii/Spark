
-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create custom types
CREATE TYPE "ProfileType" AS ENUM ('ENTREPRENEUR', 'INVESTOR', 'PRODUCT_MANAGER', 'BUSINESS_ANALYST');
CREATE TYPE "TopicStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'QUALIFIED', 'CONVERTED', 'COMPLETED');
CREATE TYPE "SubscriptionPlan" AS ENUM ('FREE', 'PRO');
CREATE TYPE "ResearchStatus" AS ENUM ('QUEUED', 'DRAFT', 'IN_REVIEW', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED');
CREATE TYPE "ResearchDocumentType" AS ENUM ('MARKET_DATA', 'COMPETITIVE_ANALYSIS', 'POU_ANALYSIS', 'MARKET_DISCOVERY_REPORT', 'PRESENTATION_PDF');
CREATE TYPE "AIProcessingStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'SUSPENDED');

-- Create tables (following the existing schema structure)
-- Users table
CREATE TABLE "users" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileType" "ProfileType" NOT NULL,
    "industry" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- Sessions table
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- Topics table
CREATE TABLE "topics" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "status" "TopicStatus" NOT NULL DEFAULT 'PENDING',
    "voteCount" INTEGER NOT NULL DEFAULT 0,
    "voteThreshold" INTEGER,
    "approvalDate" TIMESTAMP(3),
    "deadline" TIMESTAMP(3),
    "rejectionReason" TEXT,
    "convertedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "proposedById" TEXT NOT NULL,
    "approvedById" TEXT,

    CONSTRAINT "topics_pkey" PRIMARY KEY ("id")
);

-- Votes table
CREATE TABLE "votes" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
    "topicId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "votedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "votes_pkey" PRIMARY KEY ("id")
);

-- Research table
CREATE TABLE "research" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
    "title" TEXT NOT NULL,
    "brief" TEXT NOT NULL,
    "executiveSummary" TEXT NOT NULL,
    "methodology" TEXT NOT NULL,
    "keyFindings" TEXT[],
    "country" TEXT,
    "industry" TEXT,
    "marketSize" TEXT,
    "growthRate" TEXT,
    "competitorCount" INTEGER,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "status" "ResearchStatus" NOT NULL DEFAULT 'QUEUED',
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "aiProcessingStatus" "AIProcessingStatus" NOT NULL DEFAULT 'PENDING',
    "aiProcessingMetadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "topicId" TEXT NOT NULL,

    CONSTRAINT "research_pkey" PRIMARY KEY ("id")
);

-- Continue with other tables...
-- (Additional tables would be created here following the same pattern)

-- Create unique constraints
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");
CREATE UNIQUE INDEX "votes_topicId_userId_key" ON "votes"("topicId", "userId");
CREATE UNIQUE INDEX "research_topicId_key" ON "research"("topicId");

-- Create foreign key constraints
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "topics" ADD CONSTRAINT "topics_proposedById_fkey" FOREIGN KEY ("proposedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "topics" ADD CONSTRAINT "topics_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "votes" ADD CONSTRAINT "votes_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "votes" ADD CONSTRAINT "votes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "research" ADD CONSTRAINT "research_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Create indexes for performance
CREATE INDEX "sessions_userId_idx" ON "sessions"("userId");
CREATE INDEX "topics_proposedById_idx" ON "topics"("proposedById");
CREATE INDEX "topics_status_idx" ON "topics"("status");
CREATE INDEX "votes_topicId_idx" ON "votes"("topicId");
CREATE INDEX "votes_userId_idx" ON "votes"("userId");
CREATE INDEX "research_topicId_idx" ON "research"("topicId");

-- Enable Row Level Security
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "sessions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "topics" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "votes" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "research" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (basic examples - adjust based on your security requirements)
CREATE POLICY "Users can view their own data" ON "users" FOR SELECT USING (auth.uid()::text = id);
CREATE POLICY "Users can update their own data" ON "users" FOR UPDATE USING (auth.uid()::text = id);
