import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const workspaceRoute = (page: string) => `/workspace.html#${page}`;
function WorkspaceRedirect({ page }: { page: string }) {
  useEffect(() => { window.location.replace(workspaceRoute(page)); }, [page]);
  return null;
}

export function App() {
  return <Routes>
      <Route path="/" element={<WorkspaceRedirect page="dashboard" />} />
      <Route path="/tasks" element={<WorkspaceRedirect page="daily-plan" />} />
      <Route path="/fitness" element={<WorkspaceRedirect page="fitness" />} />
      <Route path="/research" element={<WorkspaceRedirect page="research" />} />
      <Route path="/learning" element={<WorkspaceRedirect page="ai-learn" />} />
      <Route path="/content" element={<WorkspaceRedirect page="inspiration" />} />
      <Route path="/integrations" element={<WorkspaceRedirect page="settings" />} />
      <Route path="*" element={<WorkspaceRedirect page="dashboard" />} />
  </Routes>;
}
