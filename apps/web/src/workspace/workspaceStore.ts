import { useSyncExternalStore } from 'react';
import type { RenderState } from './runtimeBridge.js';

type Listener = () => void;

let snapshot: RenderState | null = null;
let unsubscribeRuntime: (() => void) | undefined;
const listeners = new Set<Listener>();

function publish(next: RenderState | null) {
  if (snapshot?.pageId === next?.pageId && snapshot?.mode === next?.mode && snapshot?.revision === next?.revision) return;
  snapshot = next;
  for (const listener of listeners) listener();
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function syncWorkspaceStore(publishCurrent = true) {
  const runtime = window.__AI_WORKSPACE_RUNTIME__;
  if (!runtime) return publish(null);
  if (!unsubscribeRuntime) unsubscribeRuntime = runtime.subscribe(publish);
  if (publishCurrent) publish(runtime.getRenderState());
}

export function useWorkspaceRenderState() {
  return useSyncExternalStore(subscribe, () => snapshot, () => null);
}
