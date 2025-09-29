import { PrismaClient } from '@prisma/client';

export class DatabaseService {
  private static prisma: PrismaClient;

  static async initialize(): Promise<void> {
    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL not found, skipping database initialization');
      return;
    }

    console.log('Initializing database connection...');
    this.prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error']
    });
    
    try {
      await this.prisma.$connect();
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Failed to connect to database:', error);
      throw error;
    }
  }

  static getPrismaClient(): PrismaClient {
    if (!this.prisma) {
      if (!process.env.DATABASE_URL) {
        throw new Error('Database not available. DATABASE_URL not configured.');
      }
      throw new Error('Database not initialized. Call initialize() first.');
    }
    return this.prisma;
  }

  static async healthCheck(): Promise<boolean> {
    if (!this.prisma) {
      return false;
    }
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('Database health check failed', error);
      return false;
    }
  }

  static async disconnect(): Promise<void> {
    if (this.prisma) {
      await this.prisma.$disconnect();
      console.log('Database disconnected');
    }
  }
}
