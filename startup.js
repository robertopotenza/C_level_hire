const { spawn, execSync } = require('child_process');

console.log('🚀 Starting C-Level Hire AI Agent Platform...');

// Function to wait for DATABASE_URL with timeout
function waitForDatabaseUrl(timeoutMs = 60000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const checkInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      if (process.env.DATABASE_URL) {
        clearInterval(checkInterval);
        console.log('✅ DATABASE_URL found');
        resolve();
      } else if (elapsed > timeoutMs) {
        clearInterval(checkInterval);
        console.log('⚠️ DATABASE_URL not found within timeout, starting without database');
        resolve(); // Don't reject, just continue without DB
      } else {
        console.log(`⏳ Waiting for DATABASE_URL... (${Math.round((timeoutMs - elapsed) / 1000)}s remaining)`);
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
    // Wait for DATABASE_URL (with timeout)
    await waitForDatabaseUrl(30000); // 30 second timeout
    
    // Run migrations only if DATABASE_URL is available
    if (process.env.DATABASE_URL) {
      console.log('🗄️ DATABASE_URL available, running migrations...');
      const migrationSuccess = await runMigrations();
      if (!migrationSuccess) {
        console.log('⚠️ Migrations failed, but continuing to start server...');
      }
    } else {
      console.log('⚠️ No DATABASE_URL found, starting server without database features');
    }
    
    // Start application regardless of database status
    startApplication();
    
  } catch (error) {
    console.error('Startup failed:', error);
    console.log('🚀 Attempting to start server anyway...');
    startApplication();
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