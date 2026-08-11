import type { FastifyInstance } from 'fastify';

export async function healthRoutes(app: FastifyInstance) {
  const db = app.db;
  app.get('/health', async () => ({
    status: 'ok',
    service: 'ai-workspace-api',
    database: db.open ? 'open' : 'closed',
    timestamp: new Date().toISOString()
  }));
  app.get('/ready', async (_request, reply) => {
    if (!db.open) return reply.code(503).send({ status: 'not_ready', database: 'closed' });
    try {
      db.prepare('SELECT 1').get();
      return { status: 'ready', database: 'open', timestamp: new Date().toISOString() };
    } catch {
      return reply.code(503).send({ status: 'not_ready', database: 'unavailable' });
    }
  });
}
