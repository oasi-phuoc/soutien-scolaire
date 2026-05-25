import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { PASSING_GRADE } from "@/lib/scoring";

function pickRicherModule(
  a: StoredProgressV1["math"][string],
  b: StoredProgressV1["math"][string],
): StoredProgressV1["math"][string] {
  if (!a) return b!;
  if (!b) return a;
  const rank = { locked: 0, available: 1, in_progress: 2, completed: 3 } as const;
  const ra = rank[a.state] ?? 0;
  const rb = rank[b.state] ?? 0;
  if (ra !== rb) return ra > rb ? a : b;
  if (a.subProgress !== b.subProgress) return a.subProgress > b.subProgress ? a : b;
  const ga = a.grade ?? -1;
  const gb = b.grade ?? -1;
  return ga >= gb ? { ...b, ...a } : { ...a, ...b };
}

/** Merge two StoredProgressV1, taking the richer data for each field. */
export function mergeProgress(
  local: StoredProgressV1,
  cloud: StoredProgressV1,
): StoredProgressV1 {
  // Merge module-level
  const mergedMath: StoredProgressV1["math"] = { ...cloud.math };
  for (const id of Object.keys(local.math)) {
    mergedMath[id] = pickRicherModule(local.math[id]!, cloud.math[id]);
  }

  // Merge submodule states: "completed" wins
  const localStates = local.submoduleStates ?? {};
  const cloudStates = cloud.submoduleStates ?? {};
  const mergedStates: Record<string, "completed"> = {} as Record<string, "completed">;
  for (const [k, v] of Object.entries(cloudStates)) {
    if (v === "completed") mergedStates[k] = "completed";
  }
  for (const [k, v] of Object.entries(localStates)) {
    if (v === "completed") mergedStates[k] = v;
  }

  // Merge submodule scores: take the higher grade
  const localScores = local.submoduleScores ?? {};
  const cloudScores = cloud.submoduleScores ?? {};
  const mergedScores: StoredProgressV1["submoduleScores"] = { ...cloudScores };
  for (const [k, v] of Object.entries(localScores)) {
    const existing = mergedScores?.[k];
    if (!existing || v.grade > existing.grade) mergedScores![k] = v;
  }

  // Take the most recent lastActivityAt
  const localTime = local.lastActivityAt ? Date.parse(local.lastActivityAt) : 0;
  const cloudTime = cloud.lastActivityAt ? Date.parse(cloud.lastActivityAt) : 0;
  const lastActivityAt = localTime >= cloudTime ? local.lastActivityAt : cloud.lastActivityAt;

  return {
    ...cloud,
    ...local,
    math: mergedMath,
    submoduleStates: mergedStates,
    submoduleScores: mergedScores,
    lastActivityAt,
    version: 2,
  };
}

/** Count completed submodules for heuristic comparison. */
export function countCompleted(p: StoredProgressV1): number {
  return Object.values(p.submoduleStates ?? {}).filter(v => v === "completed").length;
}

void PASSING_GRADE; // keep import alive for future use
