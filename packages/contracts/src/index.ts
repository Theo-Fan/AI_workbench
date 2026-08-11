import { z } from 'zod';

export const taskScopeSchema = z.enum([
  'dashboard', 'dailyPlan', 'aiLearn', 'english', 'comicStoryboard', 'researchPapers', 'researchTodo'
]);

export const taskSchema = z.object({
  id: z.string().min(1),
  workspaceId: z.string().min(1),
  scope: taskScopeSchema,
  slot: z.enum(['morning', 'afternoon', 'evening']).nullable().optional(),
  text: z.string().trim().min(1).max(2000),
  done: z.boolean(),
  canonicalId: z.string().nullable().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  completedAt: z.string().datetime().nullable(),
  dueDate: z.string().date().nullable(),
  version: z.number().int().nonnegative()
});

export const createTaskSchema = z.object({
  scope: taskScopeSchema,
  slot: z.enum(['morning', 'afternoon', 'evening']).nullable().optional(),
  text: z.string().trim().min(1).max(2000),
  dueDate: z.string().date().nullable().optional(),
  canonicalId: z.string().min(1).max(200).nullable().optional()
});

export const updateTaskSchema = z.object({
  text: z.string().trim().min(1).max(2000).optional(),
  done: z.boolean().optional(),
  dueDate: z.string().date().nullable().optional(),
  version: z.number().int().nonnegative()
}).refine(value => value.text !== undefined || value.done !== undefined || value.dueDate !== undefined, {
  message: '至少提供一个需要更新的字段'
});

export const workspaceSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  schemaVersion: z.number().int().positive(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const apiErrorSchema = z.object({
  error: z.object({ code: z.string(), message: z.string(), details: z.unknown().optional() })
});

export const checkinSchema = z.object({
  id: z.string().min(1), workspaceId: z.string().min(1), icon: z.string(), name: z.string().min(1), done: z.boolean(), updatedAt: z.string().datetime()
});
export const toggleCheckinSchema = z.object({ done: z.boolean() });
export const workspaceDocumentSchema = z.object({
  data: z.record(z.string(), z.unknown()),
  version: z.number().int().nonnegative()
});
export const updateWorkspaceDocumentSchema = z.object({
  data: z.record(z.string(), z.unknown()),
  expectedVersion: z.number().int().nonnegative()
});
export const fitnessTypeSchema = z.object({ id: z.string(), icon: z.string(), name: z.string(), unit: z.string() });
export const fitnessPlanSchema = z.object({ id: z.string(), workspaceId: z.string(), day: z.string(), typeId: z.string(), target: z.string(), done: z.boolean(), version: z.number().int().nonnegative() });
export const workoutLogSchema = z.object({ id: z.string(), workspaceId: z.string(), date: z.string().date(), typeId: z.string(), duration: z.number().nonnegative(), calories: z.number().nonnegative(), note: z.string(), createdAt: z.string().datetime() });

export type Task = z.infer<typeof taskSchema>;
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
export type Workspace = z.infer<typeof workspaceSchema>;
export type Checkin = z.infer<typeof checkinSchema>;
export type WorkspaceDocument = z.infer<typeof workspaceDocumentSchema>;
export type UpdateWorkspaceDocumentInput = z.infer<typeof updateWorkspaceDocumentSchema>;
export type FitnessType = z.infer<typeof fitnessTypeSchema>;
export type FitnessPlan = z.infer<typeof fitnessPlanSchema>;
export type WorkoutLog = z.infer<typeof workoutLogSchema>;
