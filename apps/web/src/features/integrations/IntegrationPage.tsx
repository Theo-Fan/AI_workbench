import { useQuery } from '@tanstack/react-query';
async function getZotero() { const response = await fetch('/zotero-agent/api/zotero/health'); const body = await response.json(); if (!response.ok) throw new Error(body.error || 'Zotero Agent 未启动'); return body; }
export function IntegrationPage() {
  const status = useQuery({ queryKey: ['zotero-agent'], queryFn: getZotero, retry: false });
  const message = status.isLoading ? '正在检查 Zotero Agent…'
    : status.isSuccess ? 'Zotero Agent 已连接（只读）'
      : `Zotero 暂不可用：${status.error instanceof Error ? status.error.message : '请启动 npm run dev:zotero-agent，并确认 Zotero 本机 API 已启用'}`;
  return <main className="shell"><div className="eyebrow">INTEGRATIONS</div><h1>本机集成</h1><p>Zotero 保持在本机 Agent 中读取；工作台 API 不直接访问用户电脑上的 Zotero 数据库。</p><section className="status-card"><span className={status.isSuccess ? 'dot ok' : 'dot'} />{message}</section><p>连接后，Agent 通过本机 API 提供收藏夹、文献、笔记与知识图谱数据；正式工作台数据仍保存在 SQLite。</p></main>;
}
