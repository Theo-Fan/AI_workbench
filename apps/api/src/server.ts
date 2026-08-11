import { buildApp } from './app.js';
import { config } from './config.js';

const app = await buildApp();
let shuttingDown = false;

const shutdown = async (signal: string) => {
  if (shuttingDown) return;
  shuttingDown = true;
  app.log.info({ signal }, 'Shutting down API');
  try {
    await app.close();
  } catch (error) {
    app.log.error({ err: error }, 'Unable to close API cleanly');
    process.exitCode = 1;
  }
};

process.once('SIGINT', () => { void shutdown('SIGINT'); });
process.once('SIGTERM', () => { void shutdown('SIGTERM'); });

try {
  await app.listen({ host: config.host, port: config.port });
} catch (error) {
  app.log.error({ err: error }, 'Unable to start API');
  await shutdown('startup-failure');
  process.exitCode = 1;
}
