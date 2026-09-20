export type StudySession = { id: string; subjectId: string; date: string; minutes: number; questions: number; correct: number; note?: string; voided?: boolean };
export type StudyMistake = { nextReview: string; reviewStep?: number; lastReviewed?: string };
export type StudyState = { profile: { targetDate?: string }; studyHistory: { date: string; minutes: number; completed: number }[]; totalMinutes: number; subjects: { id: string }[]; sessions: StudySession[]; mistakes: StudyMistake[]; lastStudyDate?: string; weeklyCompleted?: number; streak?: number };

// Date keys are local calendar dates; UTC arithmetic avoids DST-length days.
export function shiftDay(date: string, amount: number) {
  const value = new Date(date + 'T12:00:00Z');
  value.setUTCDate(value.getUTCDate() + amount);
  return value.toISOString().slice(0, 10);
}

export function studyMetrics(study: StudyState, today: string) {
  const weekday = new Date(today + 'T12:00:00Z').getUTCDay();
  const weekStart = shiftDay(today, -((weekday + 6) % 7));
  const history = study.studyHistory || [];
  const todayMinutes = history.filter(r => r.date === today).reduce((n, r) => n + r.minutes, 0);
  const weeklyCompleted = history.filter(r => r.date >= weekStart && r.date <= today).reduce((n, r) => n + r.completed, 0);
  const activeDates = new Set(history.filter(r => r.minutes > 0 && r.date <= today).map(r => r.date));
  let date = activeDates.has(today) ? today : shiftDay(today, -1);
  let streak = 0;
  while (activeDates.has(date)) { streak++; date = shiftDay(date, -1); }
  const sessions = (study.sessions || []).filter(r => !r.voided && r.date <= today);
  const questions = sessions.reduce((n, r) => n + r.questions, 0);
  const correct = sessions.reduce((n, r) => n + r.correct, 0);
  const due = (study.mistakes || []).filter(r => r.nextReview <= today);
  const targetDate = study.profile.targetDate;
  const daysLeft = /^\d{4}-\d{2}-\d{2}$/.test(targetDate || '') ? Math.round((Date.parse(targetDate + 'T12:00:00Z') - Date.parse(today + 'T12:00:00Z')) / 86400000) : null;
  return { todayMinutes, weeklyCompleted, streak, questions, accuracy: questions ? Math.round(correct / questions * 100) : null, due, daysLeft };
}

export function recordSession(study: StudyState, session: StudySession) {
  const { minutes, questions, correct } = session;
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 1440) throw new Error('学习时长需为 1–1440 分钟的整数');
  if (!Number.isInteger(questions) || questions < 0 || questions > 1000 || !Number.isInteger(correct) || correct < 0 || correct > questions) throw new Error('正确题数不能超过总题数，题数需为 0–1000 的整数');
  if (!study.subjects.some(s => s.id === session.subjectId)) throw new Error('请选择有效科目');
  study.sessions ||= [];
  if (study.sessions.some(r => r.id === session.id)) return false;
  study.sessions.push({ ...session });
  let day = study.studyHistory.find(r => r.date === session.date);
  if (!day) { day = { date: session.date, minutes: 0, completed: 0 }; study.studyHistory.push(day); }
  day.minutes += minutes;
  day.completed++;
  study.totalMinutes += minutes;
  study.lastStudyDate = session.date;
  const stats = studyMetrics(study, session.date);
  study.weeklyCompleted = stats.weeklyCompleted;
  study.streak = stats.streak;
  return true;
}

export function undoSession(study: StudyState, id: string) {
  const session = study.sessions.find(r => r.id === id && !r.voided);
  if (!session) return false;
  session.voided = true;
  const day = study.studyHistory.find(r => r.date === session.date);
  if (day) { day.minutes = Math.max(0, day.minutes - session.minutes); day.completed = Math.max(0, day.completed - 1); }
  study.totalMinutes = Math.max(0, study.totalMinutes - session.minutes);
  return true;
}

export function toggleStudyTask(task: { done: boolean; completedAt?: string }, timestamp: string) {
  task.done = !task.done;
  if (task.done) task.completedAt = timestamp;
  else delete task.completedAt;
}

export function reviewMistake(mistake: StudyMistake, remembered: boolean, today: string) {
  if (mistake.nextReview > today) return false;
  const intervals = [1, 3, 7, 14, 30];
  mistake.reviewStep = remembered ? Math.min(4, (mistake.reviewStep ?? -1) + 1) : 0;
  mistake.nextReview = shiftDay(today, remembered ? intervals[mistake.reviewStep] : 1);
  mistake.lastReviewed = today;
  return true;
}
