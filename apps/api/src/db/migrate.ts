import { ensureSchema } from './schema.js';
import { closeDatabase, openDatabase } from './client.js';

const database = openDatabase();
try {
  ensureSchema(database);
  console.log('SQLite schema is ready.');
} finally {
  closeDatabase(database);
}
