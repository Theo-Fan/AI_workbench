import { createRoot } from 'react-dom/client';
import { App } from './App.js';
import './styles.css';

// This is the production client/server boundary. The compatibility HTML keeps
// its historical same-origin/local fallback behaviour, while the React entry
// always requires a reachable API and never silently changes persistence mode.
window.__AI_WORKSPACE_CLIENT_CONFIG__ = Object.freeze({
  apiBaseUrl: (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, ''),
  requireApi: true,
});

// React is the only application entry. StrictMode is intentionally omitted:
// the workspace runtime installs document-level listeners exactly once.
createRoot(document.getElementById('root')!).render(
  <App />
);
