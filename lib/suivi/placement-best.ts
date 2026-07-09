import type { PlacementFrenchSession, PlacementMathAttempt } from "@/lib/placement/types";

const LAST_ATTEMPTS = 5;
const MAX_POINTS = 100;

/** Best math placement score among the last 5 attempts (TCM). */
export function bestMathPlacementFromLast5(history: PlacementMathAttempt[] | null | undefined): number | null {
  const rows = Array.isArray(history) ? history.slice(-LAST_ATTEMPTS) : [];
  if (rows.length === 0) return null;
  return Math.max(...rows.map((a) => Number(a.points ?? 0)));
}

/** Best french placement score among the last 5 placement sessions (TCF). */
export function bestFrenchPlacementFromLast5(
  sessions: PlacementFrenchSession[] | null | undefined,
): number | null {
  const placement = (Array.isArray(sessions) ? sessions : []).filter((s) => s.kind !== "training");
  const rows = placement.slice(-LAST_ATTEMPTS);
  if (rows.length === 0) return null;
  return Math.max(...rows.map((s) => Number(s.countedTotal ?? 0)));
}

export function formatPlacementScore(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

export { MAX_POINTS as PLACEMENT_SUBJECT_MAX };
