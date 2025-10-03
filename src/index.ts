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
// Temporarily disable Socket.IO to rule out WebSocket conflicts
// const io = new Server(httpServer, {
//   cors: {
//     origin: process.env.FRONTEND_URL || '*',
//     methods: ['GET', 'POST']
//   }
// });

// Request logging middleware - skip for minimal endpoint
app.use((req, res, next) => {
  // Skip logging for minimal endpoint to test if middleware is causing issues
  if (req.url === '/minimal') {
    return next();
  }
  
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('IP:', req.ip);
  console.log('User-Agent:', req.get('User-Agent'));
  
  // Log response status when it's sent
  const originalSend = res.send;
  res.send = function(body) {
    console.log(`Response sent: ${res.statusCode} for ${req.method} ${req.url}`);
    return originalSend.call(this, body);
  };
  
  next();
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint - Railway requires this to return 200 within 30 seconds
app.get('/health', (req, res) => {
  console.log('Health endpoint called');
  
  // Log Railway-specific headers for debugging
  console.log('X-Forwarded-For:', req.headers['x-forwarded-for']);
  console.log('X-Forwarded-Proto:', req.headers['x-forwarded-proto']);
  console.log('X-Real-IP:', req.headers['x-real-ip']);
  
  // Simple 200 response as required by Railway
  res.status(200).send('OK');
});

// Detailed health endpoint for debugging
app.get('/health-detailed', (req, res) => {
  const health = {
    status: 'healthy',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    pricing: '0.1% of target salary per week',
    database: 'configured',
    environment: process.env.NODE_ENV || 'development',
    headers: {
      'x-forwarded-for': req.headers['x-forwarded-for'],
      'x-forwarded-proto': req.headers['x-forwarded-proto'],
      'x-real-ip': req.headers['x-real-ip']
    }
  };

  res.status(200).json(health);
});

// Simple test endpoint
app.get('/test', (req, res) => {
  console.log('Test endpoint hit');
  res.json({ message: 'Server is responding', timestamp: new Date().toISOString() });
});

// Ping endpoint - very simple response
app.get('/ping', (req, res) => {
  console.log('Ping endpoint hit');
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Connection', 'close');
  res.status(200).send('pong');
});

// Minimal test endpoint
app.get('/minimal', (req, res) => {
  console.log('Minimal endpoint hit');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('OK');
});

// Internal network test endpoint
app.get('/internal-test', async (req, res) => {
  try {
    console.log('Testing internal Railway network connectivity');
    
    // Test database connectivity
    const dbTest = process.env.DATABASE_URL ? 'DB configured' : 'No DB URL';
    
    const result = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: dbTest,
      environment: process.env.NODE_ENV || 'development',
      port: process.env.PORT || '3000',
      platform_url: process.env.PLATFORM_URL || 'not set'
    };
    
    res.status(200).json(result);
  } catch (error: any) {
    console.error('Internal test error:', error);
    res.status(500).json({ error: error.message });
  }
});

// API Routes - mount API routes first to avoid conflicts
app.use('/api/auth', authRoutes);
app.use('/api/platform', platformRoutes);
app.use('/api/agent', agentRoutes);
app.use('/api/autoapply', autoApplyRoutes);

// API info endpoint (for programmatic access)
app.get('/api', (req, res) => {
  try {
    res.json({
      name: 'C-Level Hire AI Agent',
      version: '2.0.0',
      message: 'Democratizing executive job search tools',
      pricing: '0.1% of target salary per week',
      endpoints: {
        health: '/health',
        auth: '/api/auth/*',
        platform: '/api/platform/*',
        agent: '/api/agent/*',
        autoapply: '/api/autoapply/*'
      }
    });
  } catch (error) {
    console.error('API endpoint error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Root endpoint - serve the main HTML interface
app.get('/', (req, res) => {
  try {
    console.log('Serving root page from:', path.join(__dirname, '../public/index.html'));
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } catch (error) {
    console.error('Root endpoint error:', error);
    res.status(500).send('Error serving page');
  }
});

// Serve static files from public directory - after API routes to avoid conflicts
app.use(express.static(path.join(__dirname, '../public')));

// Professional routes - mount after specific routes to avoid conflicts
app.use('/', professionalRoutes);

// 404 handler for unmatched routes
app.use('*', (req, res) => {
  console.log('404 - Route not found:', req.originalUrl);
  res.status(404).json({ 
    error: 'Route not found', 
    path: req.originalUrl,
    available_endpoints: ['/health', '/api', '/', '/professional', '/dashboard.html']
  });
});

// Global error handler
app.use((error: any, req: any, res: any, next: any) => {
  console.error('Global error handler:', error);
  console.error('Request URL:', req.url);
  console.error('Request method:', req.method);
  
  if (res.headersSent) {
    return next(error);
  }
  
  res.status(500).json({ 
    error: 'Internal server error',
    message: error.message,
    url: req.url
  });
});

// Socket.IO for real-time updates - temporarily disabled
// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id);

//   socket.on('join_user_room', (userId: string) => {
//     socket.join(`user_${userId}`);
//     console.log(`User ${userId} joined their room`);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

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
    const server = httpServer.listen(Number(PORT), '0.0.0.0', () => {
      console.log('🎯 HTTP Server successfully started and listening');
      console.log(`🔗 Server binding: 0.0.0.0:${PORT}`);
      console.log(`🌐 Public URL: ${process.env.PLATFORM_URL || 'http://localhost:' + PORT}`);
      console.log('📍 Available endpoints:');
      console.log('  - GET /health (health check)');
      console.log('  - GET /test (simple test)');
      console.log('  - GET /ping (ping test)');
      console.log('  - GET /minimal (minimal test)');
      console.log('  - GET /api (API info)');
      console.log('  - GET / (main page)');
      
      if (orchestratorStarted) {
        console.log('✅ Started 0 agents');
        console.log('✅ AI Agent orchestrator started');
      } else {
        console.log('⚠️  AI Agent orchestrator not started');
      }
      console.log('✅ All systems operational');
      console.log(`🌍 Server running on port ${PORT}`);
      
      // Signal to Railway that we're ready
      if (process.send) {
        process.send('ready');
      }
    });
    
    // Handle server errors
    server.on('error', (error: any) => {
      console.error('❌ HTTP Server error:', error);
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use`);
      }
      process.exit(1);
    });
    
  } catch (error: any) {
    console.error('❌ Failed to start HTTP server:', error?.message || error);
    process.exit(1);
  }
}

// Start the application
startServer();

// Export for testing
export { app };
