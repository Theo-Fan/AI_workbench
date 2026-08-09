import { ensureSchema } from './schema.js';
import { closeDatabase } from './client.js';

ensureSchema();
console.log('SQLite schema is ready.');
closeDatabase();
