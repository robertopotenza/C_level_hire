#!/usr/bin/env node
const { PrismaClient } = require('@prisma/client');
const { execSync } = require('child_process');

async function initializeDatabase() {
  console.log('🔧 Initializing database...');
  
  try {
    // Generate Prisma client first
    console.log('📦 Generating Prisma client...');
    execSync('npx prisma generate --schema=./prisma/schema.prisma', { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    // Try to connect to database
    const prisma = new PrismaClient();
    
    try {
      console.log('🔌 Testing database connection...');
      await prisma.$connect();
      console.log('✅ Database connection successful');
      
      // Check if tables exist by trying to count users
      try {
        await prisma.user.count();
        console.log('✅ Database tables already exist');
      } catch (error) {
        if (error.code === 'P2021' || error.message.includes('does not exist')) {
          console.log('📋 Tables do not exist, creating them...');
          
          // Use db push to create tables from schema
          execSync('npx prisma db push --schema=./prisma/schema.prisma', { 
            stdio: 'inherit',
            cwd: process.cwd()
          });
          
          console.log('✅ Database tables created successfully');
        } else {
          throw error;
        }
      }
    } finally {
      await prisma.$disconnect();
    }
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error.message);
    // Don't exit - let the app start anyway for health checks
    console.log('⚠️ Continuing with application startup...');
  }
}

// Run initialization
if (require.main === module) {
  initializeDatabase().then(() => {
    console.log('🚀 Database initialization complete, starting application...');
    process.exit(0);
  }).catch(error => {
    console.error('💥 Fatal database error:', error);
    process.exit(1);
  });
}

module.exports = { initializeDatabase };