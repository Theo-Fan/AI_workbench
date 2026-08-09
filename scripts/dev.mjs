#!/usr/bin/env node
import { spawn } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const children = [
  spawn(npmCommand, ['run', 'dev:api'], { stdio: 'inherit', shell: false }),
  spawn(npmCommand, ['--workspace', 'apps/web', 'exec', 'vite', '--', '--host', '127.0.0.1'], { stdio: 'inherit', shell: false })
];
let stopping = false;
const stop = (code = 0) => {
  if (stopping) return;
  stopping = true;
  for (const child of children) child.kill('SIGINT');
  setTimeout(() => process.exit(code), 250);
};
for (const child of children) child.once('exit', (code, signal) => {
  if (!stopping && (code ?? 0) !== 0 && signal !== 'SIGINT') stop(code || 1);
});
process.once('SIGINT', () => stop(0));
process.once('SIGTERM', () => stop(0));
