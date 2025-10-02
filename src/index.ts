import express, { Application } from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './api/routes/auth.routes';
import platformRoutes from './api/routes/platform.routes';
import agentRoutes from './api/routes/agent.routes';
import professionalRoutes from './api/routes/professional.routes';
import autoApplyRoutes from './api/routes/autoapply.routes';

// Import services
import { AgentOrchestrator } from './agent/core/AgentOrchestrator';
import { DatabaseService } from './services/Database.service';

// Initialize Express app
const app: Application = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Health check endpoint for Railway
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    pricing: '0.1% of target salary per week',
    database: 'unknown',
    environment: process.env.NODE_ENV || 'development'
  };

  // Check database connection if DATABASE_URL is available
  if (process.env.DATABASE_URL) {
    try {
      const dbHealthy = await DatabaseService.healthCheck();
      health.database = dbHealthy ? 'connected' : 'disconnected';
    } catch (error) {
      health.database = 'error';
    }
  } else {
    health.database = 'not_configured';
  }

  res.json(health);
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/platform', platformRoutes);
app.use('/api/agent', agentRoutes);
app.use('/api/autoapply', autoApplyRoutes);
app.use('/', professionalRoutes);

// Root endpoint - serve the main HTML interface
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// API info endpoint (for programmatic access)
app.get('/api', (req, res) => {
  res.json({
    name: 'C-Level Hire AI Agent',
    version: '2.0.0',
    message: 'Democratizing executive job search tools',
    pricing: '0.1% of target salary per week',
    endpoints: {
      health: '/health',
      auth: '/api/auth/*',
      platform: '/api/platform/*',
      agent: '/api/agent/*'
    }
  });
});

// Socket.IO for real-time updates
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join_user_room', (userId: string) => {
    socket.join(`user_${userId}`);
    console.log(`User ${userId} joined their room`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Graceful shutdown
const gracefulShutdown = async () => {
  console.log('Starting graceful shutdown...');
  
  httpServer.close(async () => {
    console.log('HTTP server closed');
    
    try {
      await DatabaseService.disconnect();
      console.log('Database disconnected');
      process.exit(0);
    } catch (error) {
      console.error('Error during shutdown:', error);
      process.exit(1);
    }
  });

  // Force exit after 10 seconds
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start server
const PORT = process.env.PORT || 3000;

async function startServer() {
  console.log('================================================');
  console.log('🚀 C-Level Hire AI Agent Platform');
  console.log(`📍 Starting on port: ${PORT}`);
  console.log(`💰 Pricing: 0.1% of target salary per week`);
  console.log(`🌐 URL: ${process.env.PLATFORM_URL}`);
  console.log('================================================');

  let dbInitialized = false;
  let orchestratorStarted = false;
  let orchestrator: AgentOrchestrator | null = null;

  // Try to initialize database
  if (process.env.DATABASE_URL) {
    try {
      await DatabaseService.initialize();
      console.log('✅ Database initialized');
      dbInitialized = true;
    } catch (error: any) {
      console.error('⚠️  Database initialization failed:', error?.message || error);
      console.log('🔧 Continuing without database - some features may be limited');
    }
  } else {
    console.warn('⚠️  DATABASE_URL not found, some features may be limited');
  }

  // Try to start AI agent orchestrator (only if database is working)
  if (dbInitialized) {
    try {
      orchestrator = new AgentOrchestrator();
      await orchestrator.startAllAgents();
      console.log('✅ AI Agent orchestrator started');
      orchestratorStarted = true;
    } catch (error: any) {
      console.error('⚠️  Agent orchestrator failed:', error?.message || error);
      console.log('🤖 Continuing without AI agents - manual mode only');
    }
  } else {
    console.log('🤖 Skipping AI agent orchestrator (no database)');
  }

  // Always start the HTTP server for health checks
  try {
    httpServer.listen(Number(PORT), '0.0.0.0', () => {
      if (orchestratorStarted) {
        console.log('✅ Started 0 agents');
        console.log('✅ AI Agent orchestrator started');
      } else {
        console.log('⚠️  AI Agent orchestrator not started');
      }
      console.log('✅ All systems operational');
      console.log(`🌍 Server running on port ${PORT}`);
    });
  } catch (error: any) {
    console.error('❌ Failed to start HTTP server:', error?.message || error);
    process.exit(1);
  }
}

// Start the application
startServer();

// Export for testing
export { app, io };
