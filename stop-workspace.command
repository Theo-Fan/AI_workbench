#!/bin/zsh

set -u

PROJECT_DIR="${0:A:h}"
WORKSPACE_PORTS=(3001 5173)
TARGET_PIDS=()

cd "$PROJECT_DIR" || exit 1

if ! command -v lsof >/dev/null 2>&1; then
  echo "Unable to stop AI Workspace: lsof is not available."
  echo "Press Enter to close this window."
  read -r
  exit 1
fi

for port in "${WORKSPACE_PORTS[@]}"; do
  for pid in $(lsof -tiTCP:"$port" -sTCP:LISTEN 2>/dev/null); do
    process_cwd=$(lsof -a -p "$pid" -d cwd -Fn 2>/dev/null | sed -n 's/^n//p')
    if [[ "$process_cwd" == "$PROJECT_DIR"* ]] && [[ " ${TARGET_PIDS[*]} " != *" $pid "* ]]; then
      TARGET_PIDS+=("$pid")
    fi
  done
done

if (( ${#TARGET_PIDS[@]} == 0 )); then
  echo "AI Workspace is already stopped."
  exit 0
fi

if [[ "${WORKSPACE_STOP_DRY_RUN:-0}" == "1" ]]; then
  echo "AI Workspace processes detected: ${TARGET_PIDS[*]}"
  exit 0
fi

echo "Stopping AI Workspace…"
for pid in "${TARGET_PIDS[@]}"; do
  kill -TERM "$pid" 2>/dev/null || true
done

for attempt in {1..40}; do
  still_running=0
  for pid in "${TARGET_PIDS[@]}"; do
    if kill -0 "$pid" 2>/dev/null; then
      still_running=1
      break
    fi
  done
  (( still_running == 0 )) && break
  sleep 0.25
done

for pid in "${TARGET_PIDS[@]}"; do
  if kill -0 "$pid" 2>/dev/null; then
    echo "A workspace process did not stop normally (PID $pid)."
    echo "Return to the startup terminal and press Ctrl+C."
    echo "Press Enter to close this window."
    read -r
    exit 1
  fi
done

echo "AI Workspace has stopped."
