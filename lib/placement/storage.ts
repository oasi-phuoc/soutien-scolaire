import { buildPlacementProfile, buildFrenchSession } from "./scoring";
import type {
  PlacementFrenchDraft,
  PlacementFrenchSession,
  PlacementMathAttempt,
  PlacementProfile,
} from "./types";

export const PLACEMENT_MATH_HISTORY_KEY = "placement-math-history";
export const LEGACY_MATH_HISTORY_KEY = "tp-math-history";
export const PLACEMENT_FRENCH_SESSIONS_KEY = "placement-french-sessions";
export const PLACEMENT_PROFILE_KEY = "placement-profile";
export const PLACEMENT_FRENCH_DRAFT_KEY = "placement-french-draft";
export const PLACEMENT_PENDING_KEY = "placement-pending-submissions";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writePlacementJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

function writeJson<T>(key: string, value: T) {
  writePlacementJson(key, value);
}

export function migrateLegacyMathHistory(): PlacementMathAttempt[] {
  const current = readJson<PlacementMathAttempt[]>(PLACEMENT_MATH_HISTORY_KEY, []);
  if (current.length > 0) return current;
  const legacy = readJson<Array<{ date: string; points: number; maxPoints: number }>>(LEGACY_MATH_HISTORY_KEY, []);
  if (legacy.length === 0) return [];
  const migrated: PlacementMathAttempt[] = legacy.map((item) => ({
    date: item.date,
    points: item.points,
    maxPoints: item.maxPoints,
    percent: item.maxPoints > 0 ? Math.round((item.points / item.maxPoints) * 100) : 0,
    scores: [],
  }));
  writeJson(PLACEMENT_MATH_HISTORY_KEY, migrated);
  return migrated;
}

export function loadMathHistory(): PlacementMathAttempt[] {
  return migrateLegacyMathHistory();
}

export function saveMathAttempt(attempt: PlacementMathAttempt) {
  const history = loadMathHistory();
  const next = [...history, attempt].slice(-10);
  writeJson(PLACEMENT_MATH_HISTORY_KEY, next);
  writeJson(LEGACY_MATH_HISTORY_KEY, next.map((a) => ({ date: a.date.slice(0, 10), points: a.points, maxPoints: a.maxPoints })));
  recomputePlacementProfile();
  return next;
}

export function loadFrenchSessions(): PlacementFrenchSession[] {
  return readJson<PlacementFrenchSession[]>(PLACEMENT_FRENCH_SESSIONS_KEY, []);
}

export function saveFrenchSession(session: PlacementFrenchSession) {
  const sessions = loadFrenchSessions();
  const idx = sessions.findIndex((s) => s.id === session.id);
  const next = idx >= 0 ? sessions.map((s, i) => (i === idx ? session : s)) : [...sessions, session];
  writeJson(PLACEMENT_FRENCH_SESSIONS_KEY, next.slice(-10));
  recomputePlacementProfile();
  return next;
}

export function upsertFrenchSessionById(session: PlacementFrenchSession) {
  return saveFrenchSession(buildFrenchSession(session));
}

export function loadPlacementProfile(): PlacementProfile {
  const cached = readJson<PlacementProfile | null>(PLACEMENT_PROFILE_KEY, null);
  if (cached) return cached;
  return recomputePlacementProfile();
}

export function recomputePlacementProfile(): PlacementProfile {
  const profile = buildPlacementProfile(loadMathHistory(), loadFrenchSessions());
  writeJson(PLACEMENT_PROFILE_KEY, profile);
  return profile;
}

export function loadFrenchDraft(): PlacementFrenchDraft | null {
  return readJson<PlacementFrenchDraft | null>(PLACEMENT_FRENCH_DRAFT_KEY, null);
}

export function saveFrenchDraft(draft: PlacementFrenchDraft | null) {
  if (!draft) {
    if (typeof window !== "undefined") localStorage.removeItem(PLACEMENT_FRENCH_DRAFT_KEY);
    return;
  }
  writeJson(PLACEMENT_FRENCH_DRAFT_KEY, draft);
}

export function createFrenchSessionId(): string {
  return `fr-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
