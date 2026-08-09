import type { CreateTaskInput, Task, UpdateTaskInput } from '@ai-workspace/contracts';

const workspaceId = 'default';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) }
  });
  if (response.status === 204) return undefined as T;
  const body = await response.json() as { data?: T; error?: { message?: string } };
  if (!response.ok) throw new Error(body.error?.message || '请求失败');
  return body.data as T;
}

export function listTasks(scope?: Task['scope']) {
  const search = scope ? `?scope=${encodeURIComponent(scope)}` : '';
  return request<Task[]>(`/api/v1/workspaces/${workspaceId}/tasks${search}`);
}

export function createTask(input: CreateTaskInput) {
  return request<Task>(`/api/v1/workspaces/${workspaceId}/tasks`, { method: 'POST', body: JSON.stringify(input) });
}

export function updateTask(id: string, input: UpdateTaskInput) {
  return request<Task>(`/api/v1/workspaces/${workspaceId}/tasks/${id}`, { method: 'PATCH', body: JSON.stringify(input) });
}

export function deleteTask(id: string) {
  return request<void>(`/api/v1/workspaces/${workspaceId}/tasks/${id}`, { method: 'DELETE' });
}
