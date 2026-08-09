import { useQuery } from '@tanstack/react-query';
import type { FitnessPlan, FitnessType, WorkoutLog } from '@ai-workspace/contracts';

type FitnessData = { types: FitnessType[]; plans: FitnessPlan[]; logs: WorkoutLog[] };
async function getFitness(): Promise<FitnessData> { const response = await fetch('/api/v1/workspaces/default/fitness'); const body = await response.json(); if (!response.ok) throw new Error(body.error?.message || '无法读取健身数据'); return body.data; }

export function FitnessPage() {
  const fitness = useQuery({ queryKey: ['fitness'], queryFn: getFitness });
  const typeName = (id: string) => fitness.data?.types.find(type => type.id === id)?.name || '其他';
  return <main className="shell"><div className="eyebrow">FITNESS · SQLITE API</div><h1>健身打卡</h1><p>训练计划和训练日志已从旧版 JSON 迁移到 SQLite。</p>{fitness.isLoading && <p>正在加载健身数据…</p>}{fitness.error && <div className="error-card" role="alert">{fitness.error.message}</div>}{fitness.data && <><div className="metrics"><div><strong>{fitness.data.plans.length}</strong><span>计划项目</span></div><div><strong>{fitness.data.logs.length}</strong><span>历史训练</span></div><div><strong>{fitness.data.logs.reduce((total, log) => total + log.duration, 0)}</strong><span>累计分钟</span></div></div><section className="checkin-card"><h2>训练计划</h2>{fitness.data.plans.length ? fitness.data.plans.map(plan => <div className="fitness-row" key={plan.id}><span>{plan.day}</span><strong>{typeName(plan.typeId)}</strong><small>{plan.target || '按计划完成'}</small></div>) : <p className="empty">暂无训练计划</p>}</section><section className="checkin-card"><h2>最近训练</h2>{fitness.data.logs.slice(0, 8).map(log => <div className="fitness-row" key={log.id}><span>{log.date}</span><strong>{typeName(log.typeId)}</strong><small>{log.duration} 分钟 · {log.calories} kcal</small></div>)}</section></>}</main>;
}
