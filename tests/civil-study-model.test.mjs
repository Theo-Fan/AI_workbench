import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const source = fs.readFileSync(new URL('../apps/web/src/workspace/civil/studyModel.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } });
const { studyMetrics, recordSession, undoSession, toggleStudyTask, reviewMistake, shiftDay } = await import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'));

function fixture() {
  return { profile: { targetDate: '2026-09-10' }, totalMinutes: 100, studyHistory: [{ date: '2026-08-30', minutes: 100, completed: 4 }], subjects: [{ id: 'data', progress: 40 }], sessions: [], mistakes: [] };
}
const session = { id: 'a', subjectId: 'data', date: '2026-09-05', minutes: 30, questions: 20, correct: 15 };

test('learning logs and undo preserve legacy totals and use weighted accuracy', () => {
  const study = fixture();
  assert.equal(recordSession(study, session), true);
  assert.equal(recordSession(study, session), false);
  recordSession(study, { ...session, id: 'b', questions: 80, correct: 40 });
  assert.equal(studyMetrics(study, session.date).accuracy, 55);
  assert.equal(studyMetrics(study, session.date).todayMinutes, 60);
  assert.equal(studyMetrics(study, session.date).weeklyCompleted, 2);
  assert.equal(study.totalMinutes, 160);
  assert.equal(study.subjects[0].progress, 40);
  assert.equal(undoSession(study, 'a'), true);
  assert.equal(undoSession(study, 'a'), false);
  assert.equal(study.totalMinutes, 130);
  assert.equal(studyMetrics(study, session.date).accuracy, 50);
  undoSession(study, 'b');
  assert.equal(study.totalMinutes, 100);
  assert.equal(studyMetrics(study, session.date).accuracy, null);
});

test('invalid practice counts are rejected without mutating the record', () => {
  for (const change of [{ minutes: 0 }, { minutes: 2.5 }, { minutes: NaN }, { correct: 21 }, { questions: -1 }, { correct: -1 }, { subjectId: 'missing' }]) {
    const study = fixture();
    const before = structuredClone(study);
    assert.throws(() => recordSession(study, { ...session, ...change }));
    assert.deepEqual(study, before);
  }
});

test('weekly rollover, stale streaks, today and yesterday are date based', () => {
  const study = fixture();
  study.studyHistory.push({ date: '2026-08-31', minutes: 25, completed: 1 });
  assert.equal(studyMetrics(study, '2026-08-31').weeklyCompleted, 1);
  assert.equal(studyMetrics(study, '2026-08-31').streak, 2);
  assert.equal(studyMetrics(study, '2026-09-01').streak, 2);
  assert.equal(studyMetrics(study, '2026-09-02').streak, 0);
  assert.equal(studyMetrics(study, '2026-09-07').weeklyCompleted, 0);
  assert.equal(studyMetrics(study, '2026-09-05').daysLeft, 5);
  study.profile.targetDate = '';
  assert.equal(studyMetrics(study, '2026-09-05').daysLeft, null);
});

test('task toggling is symmetric and does not create study logs', () => {
  const task = { id: 't', title: 'Review', done: false };
  toggleStudyTask(task, '2026-09-05T08:00:00Z');
  assert.equal(task.done, true);
  assert.ok(task.completedAt);
  toggleStudyTask(task, '2026-09-05T08:00:00Z');
  assert.deepEqual(task, { id: 't', title: 'Review', done: false });
});

test('spaced review schedules intervals and prevents duplicate same-day credit', () => {
  const mistake = { nextReview: '2026-09-05', reviewStep: -1 };
  assert.equal(reviewMistake(mistake, true, '2026-09-05'), true);
  assert.equal(mistake.nextReview, '2026-09-06');
  assert.equal(reviewMistake(mistake, true, '2026-09-05'), false);
  reviewMistake(mistake, true, '2026-09-06');
  assert.equal(mistake.nextReview, '2026-09-09');
  reviewMistake(mistake, true, '2026-09-09');
  assert.equal(mistake.nextReview, '2026-09-16');
  reviewMistake(mistake, false, '2026-09-16');
  assert.equal(mistake.nextReview, '2026-09-17');
  assert.equal(shiftDay('2026-12-31', 1), '2027-01-01');
});
