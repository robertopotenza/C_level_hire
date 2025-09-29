#!/bin/bash

# Production startup script for Railway
echo "🚀 Starting C-Level Hire AI Agent Platform..."

# Wait for DATABASE_URL to be available
echo "⏳ Waiting for DATABASE_URL..."
while [ -z "$DATABASE_URL" ]; do
  echo "DATABASE_URL not yet available, waiting 2 seconds..."
  sleep 2
done

echo "✅ DATABASE_URL found: ${DATABASE_URL:0:50}..."

# Run Prisma migrations
echo "🗄️ Running database migrations..."
npx prisma migrate deploy

if [ $? -ne 0 ]; then
  echo "❌ Database migration failed"
  exit 1
fi

echo "✅ Database migrations completed"

# Start the application
echo "🌍 Starting the application..."
npm start