#!/usr/bin/env node
import { spawn, spawnSync } from 'node:child_process';
import { delimiter, dirname } from 'node:path';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
// `npm exec node@22` changes the current executable, but npm scripts spawned
// from here otherwise fall back to the machine's default Node.js.  Keep every
// child (tsx, Vite, native addons) on exactly the same runtime.
const childEnv = {
  ...process.env,
  PATH: `${dirname(process.execPath)}${delimiter}${process.env.PATH || ''}`
};
const nodeMajor = Number.parseInt(process.versions.node.split('.')[0], 10);
if (nodeMajor !== 22) {
  console.error(`项目固定使用 Node.js 22.x，当前为 ${process.versions.node}。请先执行 nvm use，或运行 npm run dev:node22。`);
  process.exit(1);
}
const portOwners = [
  { port: 3001, service: 'API' },
  { port: 5173, service: 'Web' }
];

async function assertPortsAvailable() {
  const checks = await Promise.all(portOwners.map(async ({ port, service }) => {
    try {
      await fetch(`http://127.0.0.1:${port}/${service === 'API' ? 'health' : ''}`, { signal: AbortSignal.timeout(800) });
      return `${service}（${port}）`;
    } catch { return null; }
  }));
  const active = checks.filter(Boolean);
  if (active.length) {
    console.error(`检测到已有开发服务占用端口：${active.join('、')}。请先停止旧的 npm run dev 进程，避免前端代理到过期 API。`);
    process.exit(1);
  }
}

await assertPortsAvailable();
const contractsBuild = spawnSync(npmCommand, ['run', 'build', '-w', '@ai-workspace/contracts'], { stdio: 'inherit', shell: false, env: childEnv });
if (contractsBuild.error) throw contractsBuild.error;
if (contractsBuild.status !== 0) process.exit(contractsBuild.status || 1);
const children = [
  spawn(npmCommand, ['run', 'dev:api'], { stdio: 'inherit', shell: false, env: childEnv }),
  spawn(npmCommand, ['--workspace', 'apps/web', 'exec', 'vite', '--', '--host', '127.0.0.1'], { stdio: 'inherit', shell: false, env: childEnv })
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
