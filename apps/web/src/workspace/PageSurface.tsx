import { useEffect, useMemo } from 'react';
import { ReactMarkupPage } from './ReactMarkupPage.js';
import type { RenderState } from './runtimeBridge.js';

const loadingSkeletonMarkup = `<div class="card-grid">
  <div class="skel-card"><div class="skel skel-title"></div><div class="skel skel-line"></div><div class="skel skel-line"></div><div class="skel skel-line" style="width:70%"></div></div>
  <div class="skel-card"><div class="skel skel-title"></div><div class="skel skel-line"></div><div class="skel skel-line" style="width:60%"></div><div class="skel skel-line"></div></div>
  <div class="skel-card"><div class="skel skel-title"></div><div class="skel skel-line" style="width:80%"></div><div class="skel skel-line"></div><div class="skel skel-line" style="width:55%"></div></div>
  <div class="skel-card"><div class="skel skel-title"></div><div class="skel skel-line"></div><div class="skel skel-line" style="width:75%"></div><div class="skel skel-line"></div></div>
  <div class="skel-card"><div class="skel skel-title"></div><div class="skel skel-line" style="width:65%"></div><div class="skel skel-line"></div><div class="skel skel-line"></div></div>
  <div class="skel-card"><div class="skel skel-title"></div><div class="skel skel-line"></div><div class="skel skel-line" style="width:70%"></div><div class="skel skel-line" style="width:50%"></div></div>
</div>`;

export function PageSurface({ state }: { state: RenderState | null }) {
  const markup = useMemo(() => {
    if (!state) return null;
    return window.__AI_WORKSPACE_RUNTIME__?.getPageMarkup() || null;
  }, [state]);

  useEffect(() => {
    if (state) window.__AI_WORKSPACE_RUNTIME__?.notifyCommitted();
  }, [state]);

  return <main className="main" id="mainContent" role="main"><ReactMarkupPage key={state?.revision ?? 'loading'} markup={markup || loadingSkeletonMarkup} /></main>;
}
