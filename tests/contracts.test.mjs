import test from 'node:test';
import assert from 'node:assert/strict';
import { createTaskSchema, newsItemSchema, workspaceDocumentSchema, updateWorkspaceDocumentSchema, updateTaskSchema } from '../packages/contracts/dist/index.js';

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

test('新闻契约保留来源、时间、热度与分类', () => {
  assert.equal(newsItemSchema.safeParse({
    id: 'news-1', sourceId: 'douyin-hot', sourceName: '抖音热榜', category: 'hot',
    title: '热点', summary: '摘要', url: 'https://www.douyin.com/hot', author: '', imageUrl: '',
    publishedAt: null, fetchedAt: new Date().toISOString(), hotScore: 100, rank: 1, metadata: {}
  }).success, true);
  assert.equal(newsItemSchema.safeParse({ id: 'bad', category: 'unknown' }).success, false);
});
