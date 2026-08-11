import Fastify, { type FastifyInstance, type FastifyServerOptions } from 'fastify';
import cors from '@fastify/cors';
import type Database from 'better-sqlite3';
import { config, type AppConfig } from './config.js';
import { openDatabase } from './db/client.js';
import { ensureSchema, ensureDefaultWorkspace } from './db/schema.js';
import { healthRoutes } from './modules/health/health.route.js';
import { taskRoutes } from './modules/tasks/task.route.js';
import { workspaceRoutes } from './modules/workspaces/workspace.route.js';
import { checkinRoutes } from './modules/checkins/checkin.route.js';
import { fitnessRoutes } from './modules/fitness/fitness.route.js';
import { dashboardRoutes } from './modules/dashboard/dashboard.route.js';
import { researchRoutes } from './modules/research/research.route.js';
import { learningRoutes } from './modules/learning/learning.route.js';
import { contentRoutes } from './modules/content/content.route.js';
import { dataProtectionRoutes } from './modules/data-protection/data.route.js';
import { workspaceDocumentRoutes } from './modules/workspace-document/document.route.js';
import { weatherRoutes } from './modules/weather/weather.route.js';
import { ccfddlRoutes } from './modules/research/ccfddl.route.js';
import { workspaceIdFrom, assertWorkspaceExists } from './modules/shared/request.js';

export type BuildAppOptions = {
  config?: AppConfig;
  logger?: FastifyServerOptions['logger'];
  /** Inject a connection for tests/embedders; the default is owned by this app. */
  database?: Database.Database;
};

function errorStatus(error: unknown) {
  if ((error as { name?: string })?.name === 'ZodError') return 400;
  return Number((error as { statusCode?: number })?.statusCode) || 500;
}

function errorCode(error: unknown, statusCode: number) {
  if ((error as { name?: string })?.name === 'ZodError') return 'VALIDATION_ERROR';
  return (error as { code?: string })?.code || (statusCode >= 500 ? 'INTERNAL_ERROR' : 'REQUEST_ERROR');
}

export async function buildApp(options: BuildAppOptions = {}): Promise<FastifyInstance> {
  const runtimeConfig = options.config || config;
  const database = options.database || openDatabase(runtimeConfig.dbPath);
  try {
    ensureSchema(database);
    ensureDefaultWorkspace(database);
  } catch (error) {
    if (!options.database && database.open) database.close();
    throw error;
  }

  const app = Fastify({
    logger: options.logger ?? (runtimeConfig.logLevel === 'silent' ? false : { level: runtimeConfig.logLevel }),
    bodyLimit: runtimeConfig.bodyLimitBytes,
    requestTimeout: runtimeConfig.requestTimeoutMs,
    // Keep malformed/oversized requests from tying up the process indefinitely.
    connectionTimeout: runtimeConfig.requestTimeoutMs,
  });
  app.decorate('db', database);
  app.decorate('config', runtimeConfig);
  await app.register(cors, { origin: runtimeConfig.corsOrigin, credentials: true, methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'] });

  app.setErrorHandler((error, request, reply) => {
    const statusCode = errorStatus(error);
    const code = errorCode(error, statusCode);
    if (statusCode >= 500) request.log.error({ err: error }, 'Unhandled API error');
    else request.log.warn({ err: error, statusCode }, 'API request rejected');
    const validationDetails = (error as { issues?: unknown[] })?.issues;
    reply.code(statusCode).send({ error: { code, message: statusCode >= 500 ? '服务器内部错误' : (error instanceof Error ? error.message : String(error)), ...(validationDetails ? { details: validationDetails } : {}) } });
  });

  // Every workspace-scoped endpoint shares the same boundary checks. Keeping
  // this in one hook prevents handlers from accidentally querying another
  // workspace or turning a missing workspace into an opaque SQLite error.
  app.addHook('preHandler', async request => {
    if ((request.params as { workspaceId?: unknown } | undefined)?.workspaceId !== undefined) {
      assertWorkspaceExists(database, workspaceIdFrom(request));
    }
  });

  await app.register(healthRoutes);
  await app.register(workspaceRoutes);
  await app.register(taskRoutes);
  await app.register(checkinRoutes);
  await app.register(fitnessRoutes);
  await app.register(dashboardRoutes);
  await app.register(researchRoutes);
  await app.register(learningRoutes);
  await app.register(contentRoutes);
  await app.register(dataProtectionRoutes);
  await app.register(workspaceDocumentRoutes);
  await app.register(weatherRoutes);
  await app.register(ccfddlRoutes);

  app.addHook('onClose', async () => {
    // The default process connection is owned by the app factory. Injected
    // connections belong to the caller and remain open after app.close().
    if (!options.database && database.open) database.close();
  });
  return app;
}
