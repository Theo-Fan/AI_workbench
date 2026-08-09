#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const run = (args) => {
  const result = spawnSync(npmCommand, args, { stdio: 'inherit', shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
};

const major = Number.parseInt(process.versions.node.split('.')[0], 10);
if (major < 20) {
  console.error(`需要 Node.js 20 或更高版本，当前为 ${process.versions.node}。`);
  process.exit(1);
}

console.log('正在初始化 SQLite 数据库…');
run(['run', 'db:migrate']);
if (existsSync('data/workspace.json')) {
  console.log('检测到 data/workspace.json，正在幂等导入旧版数据…');
  run(['run', 'db:import']);
} else {
  console.log('未检测到旧版 JSON；首次打开工作台时会自动创建示例数据。');
}
console.log('初始化完成。运行 npm run dev 启动工作台。');
