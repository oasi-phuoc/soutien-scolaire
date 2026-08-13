/**
 * Isolation de la progression par compte sur un même appareil.
 *
 * Les clés « working copy » (maths, lecture, comm, etc.) restent globales pour
 * le reste de l'app. Ce module snapshot / restore ces clés par userId, et
 * refuse de donner la copie de travail d'un compte à un autre.
 */

import {
  createInitialProgress,
  MATH_PROGRESS_KEY,
  saveProgress,
} from "@/lib/progress/math-progress";
import {
  createInitialProgress as createInitialLectureProgress,
  LECTURE_PROGRESS_KEY,
} from "@/lib/progress/lecture-progress";
import { COMM_PROGRESS_KEY } from "@/lib/progress/communication-progress";
import {
  LEGACY_MATH_HISTORY_KEY,
  PLACEMENT_FRENCH_DRAFT_KEY,
  PLACEMENT_FRENCH_SESSIONS_KEY,
  PLACEMENT_FRENCH_TRAINING_DRAFT_KEY,
  PLACEMENT_MATH_HISTORY_KEY,
  PLACEMENT_MATH_TRAINING_DRAFT_KEY,
  PLACEMENT_PENDING_KEY,
  PLACEMENT_PROFILE_KEY,
  PLACEMENT_TOTAL_HISTORY_KEY,
} from "@/lib/placement/storage";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

export const PENDING_SYNC_KEY = "soutien-pending-cloud-sync-v1";
export const VOCAB_EVAL_KEY = "soutien-vocab-eval-v1";
export const A1_POS_KEY = "soutien:a1-pos";
export const SOUTIEN_LEVEL_KEY = "soutien-level";

const ACTIVE_USER_KEY = "soutien-active-progress-user";
const SNAPSHOT_PREFIX = "soutien-user-snapshot:";

const CORE_KEYS = [
  MATH_PROGRESS_KEY,
  LECTURE_PROGRESS_KEY,
  COMM_PROGRESS_KEY,
  PENDING_SYNC_KEY,
] as const;

const EXTRA_KEYS = [
  VOCAB_EVAL_KEY,
  A1_POS_KEY,
  SOUTIEN_LEVEL_KEY,
  PLACEMENT_MATH_HISTORY_KEY,
  LEGACY_MATH_HISTORY_KEY,
  PLACEMENT_FRENCH_SESSIONS_KEY,
  PLACEMENT_PROFILE_KEY,
  PLACEMENT_FRENCH_DRAFT_KEY,
  PLACEMENT_FRENCH_TRAINING_DRAFT_KEY,
  PLACEMENT_MATH_TRAINING_DRAFT_KEY,
  PLACEMENT_PENDING_KEY,
  PLACEMENT_TOTAL_HISTORY_KEY,
] as const;

const WORKING_KEYS = [...CORE_KEYS, ...EXTRA_KEYS];

type DeviceSnapshot = {
  version: 1;
  userId: string;
  savedAt: string;
  keys: Record<string, string>;
};

function snapshotStorageKey(userId: string): string {
  return `${SNAPSHOT_PREFIX}${userId}`;
}

export function getActiveProgressUser(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACTIVE_USER_KEY);
}

export function setActiveProgressUser(userId: string | null) {
  if (typeof window === "undefined") return;
  if (userId) localStorage.setItem(ACTIVE_USER_KEY, userId);
  else localStorage.removeItem(ACTIVE_USER_KEY);
}

function readWorkingKeys(): Record<string, string> {
  const keys: Record<string, string> = {};
  for (const key of WORKING_KEYS) {
    const value = localStorage.getItem(key);
    if (value !== null) keys[key] = value;
  }
  return keys;
}

export function snapshotWorkingCopy(userId: string) {
  if (typeof window === "undefined" || !userId) return;
  const snapshot: DeviceSnapshot = {
    version: 1,
    userId,
    savedAt: new Date().toISOString(),
    keys: readWorkingKeys(),
  };
  try {
    localStorage.setItem(snapshotStorageKey(userId), JSON.stringify(snapshot));
  } catch (error) {
    console.error("[ProgressIsolation] snapshot failed:", error);
  }
}

export function loadUserSnapshot(userId: string): DeviceSnapshot | null {
  if (typeof window === "undefined" || !userId) return null;
  try {
    const raw = localStorage.getItem(snapshotStorageKey(userId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DeviceSnapshot;
    if (!parsed?.keys || parsed.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function progressFromSnapshot(snapshot: DeviceSnapshot): StoredProgressV1 {
  const raw = snapshot.keys[MATH_PROGRESS_KEY];
  if (!raw) return createInitialProgress();
  try {
    const parsed = JSON.parse(raw) as StoredProgressV1;
    if (!parsed?.math) return createInitialProgress();
    return parsed;
  } catch {
    return createInitialProgress();
  }
}

export function restoreProgressSubKeys(p: StoredProgressV1) {
  if (typeof window === "undefined") return;
  if (p.commProgress) {
    localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify(p.commProgress));
  } else {
    localStorage.removeItem(COMM_PROGRESS_KEY);
  }
  if (p.lectureProgress) {
    localStorage.setItem(LECTURE_PROGRESS_KEY, JSON.stringify(p.lectureProgress));
  } else {
    localStorage.setItem(
      LECTURE_PROGRESS_KEY,
      JSON.stringify(createInitialLectureProgress()),
    );
  }
}

function writeKeys(keys: Record<string, string>, allowed: readonly string[]) {
  for (const key of allowed) {
    const value = keys[key];
    if (value === undefined) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  }
}

export function applySnapshot(snapshot: DeviceSnapshot) {
  if (typeof window === "undefined") return;
  writeKeys(snapshot.keys, WORKING_KEYS);
  const main = progressFromSnapshot(snapshot);
  restoreProgressSubKeys(main);
}

/** Restaure vocab / placement / position A1 de CE compte, sans toucher maths/lecture/comm. */
export function applySnapshotExtras(snapshot: DeviceSnapshot | null) {
  if (typeof window === "undefined") return;
  writeKeys(snapshot?.keys ?? {}, EXTRA_KEYS);
}

export function applyFreshProgress() {
  if (typeof window === "undefined") return;
  const lecture = createInitialLectureProgress();
  const main: StoredProgressV1 = {
    ...createInitialProgress(),
    lectureProgress: lecture,
    commProgress: {},
  };
  localStorage.setItem(MATH_PROGRESS_KEY, JSON.stringify(main));
  localStorage.setItem(LECTURE_PROGRESS_KEY, JSON.stringify(lecture));
  localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify({}));
  for (const key of EXTRA_KEYS) localStorage.removeItem(key);
  localStorage.removeItem(PENDING_SYNC_KEY);
}

export function applyCloudProgress(merged: StoredProgressV1) {
  if (typeof window === "undefined") return;
  saveProgress(merged);
  restoreProgressSubKeys(merged);
  localStorage.removeItem(PENDING_SYNC_KEY);
}
