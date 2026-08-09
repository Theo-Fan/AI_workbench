import type { FastifyInstance } from 'fastify';
import { db } from '../../db/client.js';

export async function healthRoutes(app: FastifyInstance) {
  app.get('/health', async () => ({
    status: 'ok',
    service: 'ai-workspace-api',
    database: db.open ? 'open' : 'closed',
    timestamp: new Date().toISOString()
  }));
}
