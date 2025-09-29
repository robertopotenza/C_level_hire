const { spawn, execSync } = require('child_process');

console.log('🚀 Starting C-Level Hire AI Agent Platform...');

// Function to wait for DATABASE_URL
function waitForDatabaseUrl() {
  return new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      if (process.env.DATABASE_URL) {
        clearInterval(checkInterval);
        console.log('✅ DATABASE_URL found');
        resolve();
      } else {
        console.log('⏳ Waiting for DATABASE_URL to be available...');
      }
    }, 2000);
  });
}

// Function to run migrations
async function runMigrations() {
  try {
    console.log('🗄️ Running database migrations...');
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    console.log('✅ Database migrations completed');
    return true;
  } catch (error) {
    console.error('❌ Database migration failed:', error.message);
    return false;
  }
}

// Function to start the main application
function startApplication() {
  console.log('🌍 Starting the application...');
  const app = spawn('npm', ['start'], { stdio: 'inherit' });
  
  app.on('close', (code) => {
    console.log(`Application exited with code ${code}`);
    process.exit(code);
  });
  
  app.on('error', (error) => {
    console.error('Failed to start application:', error);
    process.exit(1);
  });
}

// Main startup sequence
async function startup() {
  try {
    // Wait for DATABASE_URL
    await waitForDatabaseUrl();
    
    // Run migrations
    const migrationSuccess = await runMigrations();
    if (!migrationSuccess) {
      process.exit(1);
    }
    
    // Start application
    startApplication();
    
  } catch (error) {
    console.error('Startup failed:', error);
    process.exit(1);
  }
}

// Handle process signals
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  process.exit(0);
});

// Start the process
startup();