import test from 'node:test';
import assert from 'node:assert/strict';
import { createTaskSchema, workspaceDocumentSchema, updateWorkspaceDocumentSchema, updateTaskSchema } from '../packages/contracts/dist/index.js';

test('任务创建契约拒绝空文本', () => {
  assert.equal(createTaskSchema.safeParse({ scope: 'dailyPlan', text: '   ' }).success, false);
});

test('任务更新契约要求版本号和实际变更', () => {
  assert.equal(updateTaskSchema.safeParse({ version: 0 }).success, false);
  assert.equal(updateTaskSchema.safeParse({ version: 0, done: true }).success, true);
});

test('工作区文档契约要求乐观锁版本', () => {
  assert.equal(workspaceDocumentSchema.safeParse({ data: { tasks: {} }, version: 2 }).success, true);
  assert.equal(updateWorkspaceDocumentSchema.safeParse({ data: { tasks: {} } }).success, false);
});
