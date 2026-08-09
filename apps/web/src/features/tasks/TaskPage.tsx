import { FormEvent, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { taskScopeSchema, type Task } from '@ai-workspace/contracts';
import { createTask, deleteTask, listTasks, updateTask } from './api.js';

const scopeLabels: Record<Task['scope'], string> = {
  dashboard: '首页任务', dailyPlan: '每日计划', aiLearn: 'AI 学习', english: '英语学习', comicStoryboard: 'AI 漫剧', researchPapers: '科研文献', researchTodo: '科研待办'
};
const scopes = taskScopeSchema.options;

export function TaskPage() {
  const queryClient = useQueryClient();
  const [scope, setScope] = useState<Task['scope']>('dailyPlan');
  const [slot, setSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [text, setText] = useState('');
  const tasks = useQuery({ queryKey: ['tasks', scope], queryFn: () => listTasks(scope) });
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['tasks'] });
  const create = useMutation({ mutationFn: createTask, onSuccess: () => { setText(''); invalidate(); } });
  const update = useMutation({ mutationFn: ({ id, input }: { id: string; input: Parameters<typeof updateTask>[1] }) => updateTask(id, input), onSuccess: invalidate });
  const remove = useMutation({ mutationFn: deleteTask, onSuccess: invalidate });
  const error = tasks.error || create.error || update.error || remove.error;
  const grouped = useMemo(() => ({ open: (tasks.data || []).filter(task => !task.done), done: (tasks.data || []).filter(task => task.done) }), [tasks.data]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const normalized = text.trim();
    if (!normalized) return;
    create.mutate({ scope, slot: scope === 'dailyPlan' ? slot : null, text: normalized, dueDate: new Date().toISOString().slice(0, 10) });
  };

  const toggle = (task: Task) => update.mutate({ id: task.id, input: { done: !task.done, version: task.version } });

  return <main className="shell task-shell">
    <div className="eyebrow">TASKS · SQLITE API</div>
    <h1>任务管理</h1>
    <p>任务数据来自 Fastify API，并持久化到 SQLite。写入使用版本号防止静默覆盖。</p>
    <div className="scope-tabs" role="tablist" aria-label="任务范围">
      {scopes.map(item => <button key={item} type="button" role="tab" aria-selected={scope === item} className={scope === item ? 'active' : ''} onClick={() => setScope(item)}>{scopeLabels[item]}</button>)}
    </div>
    <form className="task-form" onSubmit={submit}>
      <input value={text} onChange={event => setText(event.target.value)} maxLength={2000} placeholder="输入一项清晰、可执行的任务" aria-label="任务内容" />
      {scope === 'dailyPlan' && <select value={slot} onChange={event => setSlot(event.target.value as typeof slot)} aria-label="计划时段"><option value="morning">早晨</option><option value="afternoon">下午</option><option value="evening">晚间</option></select>}
      <button type="submit" disabled={create.isPending}>{create.isPending ? '添加中…' : '添加任务'}</button>
    </form>
    {error && <div className="error-card" role="alert">{error.message}</div>}
    {tasks.isLoading ? <p>正在加载任务…</p> : <TaskSection title="待完成" tasks={grouped.open} pending={update.isPending || remove.isPending} onToggle={toggle} onDelete={task => remove.mutate(task.id)} />}
    {!tasks.isLoading && <TaskSection title="已完成" tasks={grouped.done} pending={update.isPending || remove.isPending} onToggle={toggle} onDelete={task => remove.mutate(task.id)} />}
  </main>;
}

function TaskSection({ title, tasks, pending, onToggle, onDelete }: { title: string; tasks: Task[]; pending: boolean; onToggle(task: Task): void; onDelete(task: Task): void }) {
  return <section className="task-section"><h2>{title}<small>{tasks.length}</small></h2>{tasks.length === 0 ? <p className="empty">暂无任务</p> : <ul>{tasks.map(task => <li key={task.id} className={task.done ? 'done' : ''}>
    <button type="button" className="check" aria-label={`${task.done ? '取消完成' : '完成'}：${task.text}`} aria-pressed={task.done} onClick={() => onToggle(task)} disabled={pending}>{task.done ? '✓' : ''}</button>
    <span>{task.text}{task.slot && <small>{task.slot === 'morning' ? '早晨' : task.slot === 'afternoon' ? '下午' : '晚间'}</small>}</span>
    <button type="button" className="delete" onClick={() => onDelete(task)} disabled={pending} aria-label={`删除任务：${task.text}`}>删除</button>
  </li>)}</ul>}</section>;
}
