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
if (major !== 22) {
  console.error(`项目固定使用 Node.js 22.x，当前为 ${process.versions.node}。请先执行 nvm use。`);
  process.exit(1);
}

console.log('正在初始化 SQLite 数据库…');
run(['run', 'db:migrate']);
if (existsSync('data/workspace.json')) {
  console.log('检测到 data/workspace.json，正在幂等导入旧版数据…');
  run(['run', 'db:import']);
} else {
  console.log('未检测到旧版 JSON；将在空工作区中安装脱敏默认模板。');
}
run(['run', 'db:seed']);
console.log('初始化完成。运行 npm run dev 启动工作台。');
