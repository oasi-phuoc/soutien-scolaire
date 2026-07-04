import {
  PLACEMENT_LEVEL_FACTOR,
  type PlacementFrenchSession,
  type PlacementLevel,
  type PlacementMathAttempt,
  type PlacementProfile,
  type PlacementZone,
} from "./types";

export const PLACEMENT_ZONES: Array<{ zone: PlacementZone; min: number; max: number; label: string }> = [
  { zone: "CSC", min: 0, max: 50, label: "Débutant" },
  { zone: "CFR", min: 51, max: 100, label: "Élémentaire" },
  { zone: "CAF", min: 101, max: 150, label: "Intermédiaire" },
  { zone: "CAP", min: 151, max: 200, label: "Avancé" },
];

export function zoneFromTotal(total: number): PlacementZone {
  if (total >= 151) return "CAP";
  if (total >= 101) return "CAF";
  if (total >= 51) return "CFR";
  return "CSC";
}

export function frenchRawTotal(session: Pick<PlacementFrenchSession, "ce" | "co" | "pe" | "po">): number {
  return session.ce + session.co + (session.pe ?? 0) + (session.po ?? 0);
}

export function frenchPendingPoints(session: Pick<PlacementFrenchSession, "pe" | "po" | "peSent" | "poSent">): number {
  let pending = 0;
  if (session.peSent && session.pe === null) pending += 25;
  if (session.poSent && session.po === null) pending += 25;
  return pending;
}

export function roundToHalf(value: number): number {
  return Math.round(value * 2) / 2;
}

export function frenchCountedTotal(session: Pick<PlacementFrenchSession, "ce" | "co" | "pe" | "po" | "level" | "kind" | "progressive">): number {
  const raw = frenchRawTotal(session);
  if (session.kind === "training") return roundToHalf(raw);
  return roundToHalf(raw);
}

export function buildFrenchSession(
  input: Omit<PlacementFrenchSession, "rawTotal" | "countedTotal" | "status"> &
    Partial<Pick<PlacementFrenchSession, "rawTotal" | "countedTotal" | "status">>,
): PlacementFrenchSession {
  const rawTotal = input.rawTotal ?? frenchRawTotal(input);
  const countedTotal = input.countedTotal ?? frenchCountedTotal({ ...input, ce: input.ce, co: input.co, pe: input.pe, po: input.po, level: input.level });
  const status =
    input.status ??
    (input.pe !== null && input.po !== null ? "complete" : input.peSent || input.poSent || input.ce > 0 || input.co > 0 ? "partial" : "in_progress");
  return { ...input, rawTotal, countedTotal, status };
}

export function pickBestFrenchSession(sessions: PlacementFrenchSession[]): PlacementFrenchSession | null {
  const placementSessions = sessions.filter((s) => s.kind !== "training");
  if (placementSessions.length === 0) return null;
  return placementSessions.reduce((best, current) => (current.countedTotal > best.countedTotal ? current : best));
}

export function buildPlacementProfile(
  mathHistory: PlacementMathAttempt[],
  frenchSessions: PlacementFrenchSession[],
): PlacementProfile {
  const mathLatest = mathHistory.length > 0 ? mathHistory[mathHistory.length - 1]! : null;
  const frenchBest = pickBestFrenchSession(frenchSessions);
  const mathCounted = mathLatest?.points ?? 0;
  const frenchCounted = frenchBest?.countedTotal ?? 0;
  const total = roundToHalf(mathCounted + frenchCounted);
  const pendingFrench = frenchBest ? frenchPendingPoints(frenchBest) : 0;

  return {
    mathLatest,
    frenchBest,
    mathCounted,
    frenchCounted,
    total,
    pendingFrench,
    zone: zoneFromTotal(total),
    updatedAt: new Date().toISOString(),
  };
}

export function updateFrenchSessionScore(
  session: PlacementFrenchSession,
  skill: "pe" | "po",
  points: number,
): PlacementFrenchSession {
  const next = {
    ...session,
    [skill]: points,
  } as PlacementFrenchSession;
  return buildFrenchSession(next);
}

export function levelFromPlacementLabel(label: PlacementLevel): string {
  return PLACEMENT_LEVEL_FACTOR[label] === 0.6 ? "A1" : PLACEMENT_LEVEL_FACTOR[label] === 0.8 ? "A2" : "B1";
}
