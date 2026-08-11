import type Database from 'better-sqlite3';
import type { AppConfig } from '../config.js';

declare module 'fastify' {
  interface FastifyInstance {
    /** Database connection owned by the application factory. */
    db: Database.Database;
    config: AppConfig;
  }
}
