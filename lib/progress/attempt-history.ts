import type { StoredProgressV1 } from "@/lib/curriculum/types";

export type AttemptRecord = {
  subject: string;
  moduleId?: string;
  lessonId?: string;
  lessonKey: string;
  score: number;
  maxScore: number;
  grade?: number;
  attemptNumber: number;
  at: string;
  proofData?: Record<string, unknown>;
};

export type AttemptHistoryStore = {
  version: 1;
  attempts: AttemptRecord[];
};

const MAX_LOCAL_ATTEMPTS = 200;

export function getAttemptHistory(progress: StoredProgressV1): AttemptRecord[] {
  const raw = (progress as StoredProgressV1 & { attemptHistory?: AttemptHistoryStore }).attemptHistory;
  return raw?.attempts ?? [];
}

export function appendAttempt(
  progress: StoredProgressV1,
  record: Omit<AttemptRecord, "at" | "attemptNumber"> & { at?: string },
): StoredProgressV1 {
  const existing = getAttemptHistory(progress);
  const sameLesson = existing.filter((a) => a.lessonKey === record.lessonKey);
  const attemptNumber = sameLesson.length + 1;
  const entry: AttemptRecord = {
    ...record,
    attemptNumber,
    at: record.at ?? new Date().toISOString(),
  };
  const attempts = [entry, ...existing].slice(0, MAX_LOCAL_ATTEMPTS);
  return {
    ...progress,
    attemptHistory: { version: 1, attempts },
  } as StoredProgressV1;
}

export function attemptsForLesson(progress: StoredProgressV1, lessonKey: string): AttemptRecord[] {
  return getAttemptHistory(progress).filter((a) => a.lessonKey === lessonKey);
}

export function attemptsForUser(progress: StoredProgressV1, limit = 50): AttemptRecord[] {
  return getAttemptHistory(progress).slice(0, limit);
}
