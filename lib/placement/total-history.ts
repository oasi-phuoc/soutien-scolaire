import type { PlacementProfile, PlacementTotalSnapshot, PlacementZone } from "./types";

export const PLACEMENT_TOTAL_HISTORY_LIMIT = 10;

const ZONES: PlacementZone[] = ["CSC", "CFR", "CAF", "CAP"];

export function snapshotKey(snapshot: PlacementTotalSnapshot): string {
  return `${snapshot.date}|${snapshot.total}|${snapshot.mathCounted}|${snapshot.frenchCounted}|${snapshot.zone}`;
}

export function profileToSnapshot(profile: PlacementProfile): PlacementTotalSnapshot {
  return {
    date: profile.updatedAt,
    total: profile.total,
    mathCounted: profile.mathCounted,
    frenchCounted: profile.frenchCounted,
    zone: profile.zone,
  };
}

export function snapshotsMatch(a: PlacementTotalSnapshot, b: PlacementTotalSnapshot): boolean {
  return a.total === b.total
    && a.mathCounted === b.mathCounted
    && a.frenchCounted === b.frenchCounted
    && a.zone === b.zone;
}

export function parseTotalHistory(raw: unknown): PlacementTotalSnapshot[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
    .map((item) => ({
      date: String(item.date ?? ""),
      total: Number(item.total ?? 0),
      mathCounted: Number(item.mathCounted ?? 0),
      frenchCounted: Number(item.frenchCounted ?? 0),
      zone: (ZONES.includes(String(item.zone) as PlacementZone) ? item.zone : "CSC") as PlacementZone,
    }))
    .filter((item) => item.date.length > 0);
}

export function mergeTotalHistories(
  ...lists: PlacementTotalSnapshot[][]
): PlacementTotalSnapshot[] {
  const byKey = new Map<string, PlacementTotalSnapshot>();
  for (const list of lists) {
    for (const item of list) {
      byKey.set(snapshotKey(item), item);
    }
  }
  return [...byKey.values()]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-PLACEMENT_TOTAL_HISTORY_LIMIT);
}

export function appendTotalSnapshot(
  history: PlacementTotalSnapshot[],
  profile: PlacementProfile,
): PlacementTotalSnapshot[] {
  const last = history[history.length - 1];
  const next = profileToSnapshot(profile);
  if (last && snapshotsMatch(last, next)) return history;
  return [...history, next].slice(-PLACEMENT_TOTAL_HISTORY_LIMIT);
}

export function historyDiffersFromCloud(
  merged: PlacementTotalSnapshot[],
  cloud: PlacementTotalSnapshot[],
): boolean {
  if (merged.length !== cloud.length) return true;
  const cloudKeys = new Set(cloud.map(snapshotKey));
  return merged.some((item) => !cloudKeys.has(snapshotKey(item)));
}
