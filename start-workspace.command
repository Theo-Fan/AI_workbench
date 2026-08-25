#!/bin/zsh

set -u

PROJECT_DIR="${0:A:h}"
WORKSPACE_URL="http://127.0.0.1:5173/"

cd "$PROJECT_DIR" || exit 1

pause_on_error() {
  echo
  echo "启动失败：$1"
  echo "按回车键关闭窗口。"
  read -r
  exit 1
}

open_workspace() {
  if [[ "${WORKSPACE_NO_OPEN:-0}" != "1" ]]; then
    open "$WORKSPACE_URL"
  fi
}

if curl -fsS --max-time 2 "$WORKSPACE_URL" >/dev/null 2>&1; then
  echo "AI 工作台已在运行：$WORKSPACE_URL"
  open_workspace
  exit 0
fi

command -v npm >/dev/null 2>&1 || pause_on_error "未找到 npm，请先安装 Node.js。"
NPM_CLI="$(npm root -g)/npm/bin/npm-cli.js"
[[ -f "$NPM_CLI" ]] || pause_on_error "无法定位 npm CLI，请重新安装 Node.js。"

if [[ ! -d node_modules ]]; then
  echo "首次运行，正在安装项目依赖…"
  npm install || pause_on_error "依赖安装失败。"
fi

if ! npm exec --yes node@22 -- -e "const Database = require('better-sqlite3'); new Database(':memory:').close()" >/dev/null 2>&1; then
  echo "正在修复 Node.js 22 的 SQLite 原生依赖…"
  npm exec --yes --package=node@22 -- node "$NPM_CLI" rebuild better-sqlite3 || pause_on_error "SQLite 原生依赖修复失败。"
fi

echo "正在启动 AI 工作台…"
echo "工作台地址：$WORKSPACE_URL"
echo "需要停止时，在此窗口按 Ctrl+C。"
echo

(
  for attempt in {1..120}; do
    if curl -fsS --max-time 2 "$WORKSPACE_URL" >/dev/null 2>&1; then
      open_workspace
      exit 0
    fi
    sleep 0.5
  done
  echo "工作台启动超时，请查看当前窗口中的错误信息。"
) &
WATCHER_PID=$!

cleanup() {
  kill "$WATCHER_PID" >/dev/null 2>&1 || true
}
trap cleanup EXIT INT TERM

npm run dev:node22 || pause_on_error "开发服务未能正常启动。"
