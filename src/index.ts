import express, { Application } from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './api/routes/auth.routes';
import platformRoutes from './api/routes/platform.routes';
import agentRoutes from './api/routes/agent.routes';

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

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    pricing: '0.1% of target salary per week'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/platform', platformRoutes);
app.use('/api/agent', agentRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'C-Level Hire AI Agent',
    version: '2.0.0',
    message: 'Democratizing executive job search tools',
    pricing: '0.1% of target salary per week',
    documentation: '/api/docs'
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

// Start server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, async () => {
  console.log('================================================');
  console.log('🚀 C-Level Hire AI Agent Platform');
  console.log(`📍 Running on port: ${PORT}`);
  console.log(`💰 Pricing: 0.1% of target salary per week`);
  console.log(`🌐 URL: ${process.env.PLATFORM_URL}`);
  console.log('================================================');

  // Initialize database
  await DatabaseService.initialize();

  // Start AI agent orchestrator
  const orchestrator = new AgentOrchestrator();
  await orchestrator.startAllAgents();

  console.log('✅ All systems operational');
});

// Export for testing
export { app, io };
