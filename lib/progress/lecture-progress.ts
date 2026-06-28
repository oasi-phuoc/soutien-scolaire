export const LECTURE_PROGRESS_KEY = "soutien-lecture-v2";

export type ItemState = "locked" | "available" | "completed";
export type ModuleState = "locked" | "available" | "in_progress" | "completed";

export type EvalResult = {
  grade: number;
  passed: boolean;
  total: number;
  date: string;
};

export type LectureProgressV2 = {
  version: 2;
  modules: Record<string, ModuleState>;
  submodules: Record<string, ItemState>;
  evaluations?: Record<string, EvalResult>;
  revisions?: Record<string, ItemState>;
};

export type RevisionCheckpoint = {
  afterModuleId: string;
  afterLetterId: string;
  pair: string;
};

export const REVISION_CHECKPOINTS: RevisionCheckpoint[] = [
  { afterModuleId: "l1", afterLetterId: "o", pair: "a-o" },
  { afterModuleId: "l1", afterLetterId: "u", pair: "i-u" },
  { afterModuleId: "l1", afterLetterId: "y", pair: "e-y" },
  { afterModuleId: "l2", afterLetterId: "c", pair: "b-c" },
  { afterModuleId: "l2", afterLetterId: "g", pair: "d-g" },
  { afterModuleId: "l2", afterLetterId: "p", pair: "k-p" },
  { afterModuleId: "l2", afterLetterId: "t", pair: "q-t" },
  { afterModuleId: "l3", afterLetterId: "j", pair: "f-j" },
  { afterModuleId: "l3", afterLetterId: "n", pair: "l-m" },
  { afterModuleId: "l3", afterLetterId: "s", pair: "r-s" },
  { afterModuleId: "l3", afterLetterId: "z", pair: "v-z" },
  { afterModuleId: "l4", afterLetterId: "x", pair: "w-x" },
];

type SubEntry = { moduleId: string; letterId: string };

export const SUBMODULE_SEQUENCE: SubEntry[] = [
  // L1 — Voyelles
  { moduleId: "l1", letterId: "a" },
  { moduleId: "l1", letterId: "o" },
  { moduleId: "l1", letterId: "i" },
  { moduleId: "l1", letterId: "u" },
  { moduleId: "l1", letterId: "e" },
  { moduleId: "l1", letterId: "y" },
  // L2 — Consonnes qui claquent
  { moduleId: "l2", letterId: "b" },
  { moduleId: "l2", letterId: "c" },
  { moduleId: "l2", letterId: "d" },
  { moduleId: "l2", letterId: "g" },
  { moduleId: "l2", letterId: "k" },
  { moduleId: "l2", letterId: "p" },
  { moduleId: "l2", letterId: "q" },
  { moduleId: "l2", letterId: "t" },
  // L3 — Consonnes qui sifflent
  { moduleId: "l3", letterId: "f" },
  { moduleId: "l3", letterId: "j" },
  { moduleId: "l3", letterId: "l" },
  { moduleId: "l3", letterId: "m" },
  { moduleId: "l3", letterId: "n" },
  { moduleId: "l3", letterId: "r" },
  { moduleId: "l3", letterId: "s" },
  { moduleId: "l3", letterId: "v" },
  { moduleId: "l3", letterId: "z" },
  // L4 — Consonnes spéciales
  { moduleId: "l4", letterId: "w" },
  { moduleId: "l4", letterId: "x" },
  { moduleId: "l4", letterId: "h" },
  // L5 — Syllabes simples
  { moduleId: "l5", letterId: "a" },
  { moduleId: "l5", letterId: "o" },
  { moduleId: "l5", letterId: "i" },
  { moduleId: "l5", letterId: "e" },
  { moduleId: "l5", letterId: "u" },
  { moduleId: "l5", letterId: "y" },
  // L6 — Mots monosyllabes
  { moduleId: "l6", letterId: "mots" },
  // L7 — Sons complexes
  { moduleId: "l7", letterId: "ou" },
  { moduleId: "l7", letterId: "an-en" },
  { moduleId: "l7", letterId: "in-ain" },
  { moduleId: "l7", letterId: "on" },
  { moduleId: "l7", letterId: "au-eau" },
  { moduleId: "l7", letterId: "oi" },
  { moduleId: "l7", letterId: "ch" },
  { moduleId: "l7", letterId: "ph" },
  // L8 — Mots de plusieurs syllabes
  { moduleId: "l8", letterId: "multi" },
];

export const TOTAL_LETTERS = SUBMODULE_SEQUENCE.length;

function subKey(moduleId: string, letterId: string): string {
  return `${moduleId}-${letterId}`;
}

export function createInitialProgress(): LectureProgressV2 {
  const modules: Record<string, ModuleState> = {
    l1: "available",
    l2: "locked",
    l3: "locked",
    l4: "locked",
    l5: "locked",
    l6: "locked",
    l7: "locked",
    l8: "locked",
  };
  const submodules: Record<string, ItemState> = {};
  for (const { moduleId, letterId } of SUBMODULE_SEQUENCE) {
    submodules[subKey(moduleId, letterId)] = "locked";
  }
  submodules["l1-a"] = "available";
  return { version: 2, modules, submodules };
}

export function getSubmoduleState(
  p: LectureProgressV2,
  moduleId: string,
  letterId: string,
): ItemState {
  return p.submodules[subKey(moduleId, letterId)] ?? "locked";
}

export function getModuleState(p: LectureProgressV2, moduleId: string): ModuleState {
  return p.modules[moduleId] ?? "locked";
}

export function getRevisionState(p: LectureProgressV2, pair: string): ItemState {
  const stored = p.revisions?.[pair];
  if (stored === "completed") return "completed";
  const checkpoint = REVISION_CHECKPOINTS.find((r) => r.pair === pair);
  if (checkpoint) {
    const prevState = getSubmoduleState(p, checkpoint.afterModuleId, checkpoint.afterLetterId);
    if (prevState === "completed") return "available";
  }
  return stored ?? "locked";
}

export function markRevisionCompleted(p: LectureProgressV2, pair: string): LectureProgressV2 {
  const nextRevisions = { ...p.revisions, [pair]: "completed" as ItemState };
  const checkpoint = REVISION_CHECKPOINTS.find((r) => r.pair === pair);
  if (!checkpoint) return { ...p, revisions: nextRevisions };

  const idx = SUBMODULE_SEQUENCE.findIndex(
    (s) => s.moduleId === checkpoint.afterModuleId && s.letterId === checkpoint.afterLetterId,
  );
  if (idx < 0 || idx >= SUBMODULE_SEQUENCE.length - 1) {
    return { ...p, revisions: nextRevisions };
  }

  const nx = SUBMODULE_SEQUENCE[idx + 1]!;
  const nextSubmodules = { ...p.submodules };
  const nextModules = { ...p.modules };

  if (nextSubmodules[subKey(nx.moduleId, nx.letterId)] !== "completed") {
    nextSubmodules[subKey(nx.moduleId, nx.letterId)] = "available";
  }
  if (nx.moduleId !== checkpoint.afterModuleId) {
    const ms = nextModules[nx.moduleId];
    if (ms !== "in_progress" && ms !== "completed") {
      nextModules[nx.moduleId] = "available";
    }
  }

  return { ...p, revisions: nextRevisions, submodules: nextSubmodules, modules: nextModules };
}

export function markSubmoduleCompleted(
  p: LectureProgressV2,
  moduleId: string,
  letterId: string,
): LectureProgressV2 {
  const next: LectureProgressV2 = {
    version: 2,
    modules: { ...p.modules },
    submodules: { ...p.submodules },
    evaluations: { ...p.evaluations },
    revisions: { ...p.revisions },
  };

  next.submodules[subKey(moduleId, letterId)] = "completed";

  const revCheckpoint = REVISION_CHECKPOINTS.find(
    (r) => r.afterModuleId === moduleId && r.afterLetterId === letterId,
  );
  const revAlreadyDone = revCheckpoint
    ? (next.revisions ?? {})[revCheckpoint.pair] === "completed"
    : false;

  if (revCheckpoint && !revAlreadyDone) {
    // Revision gates the next letter — only unlock the revision for now
    next.revisions = { ...(next.revisions ?? {}), [revCheckpoint.pair]: "available" };
  } else {
    // No revision checkpoint (or already done) — unlock next letter directly
    const idx = SUBMODULE_SEQUENCE.findIndex(
      (s) => s.moduleId === moduleId && s.letterId === letterId,
    );
    if (idx >= 0 && idx < SUBMODULE_SEQUENCE.length - 1) {
      const nx = SUBMODULE_SEQUENCE[idx + 1]!;
      if (next.submodules[subKey(nx.moduleId, nx.letterId)] !== "completed") {
        next.submodules[subKey(nx.moduleId, nx.letterId)] = "available";
      }
      if (nx.moduleId !== moduleId) {
        const ms = next.modules[nx.moduleId];
        if (ms !== "in_progress" && ms !== "completed") {
          next.modules[nx.moduleId] = "available";
        }
      }
    }
  }

  const moduleLetters = SUBMODULE_SEQUENCE.filter((s) => s.moduleId === moduleId);
  const allDone = moduleLetters.every(
    (s) => next.submodules[subKey(s.moduleId, s.letterId)] === "completed",
  );
  next.modules[moduleId] = allDone ? "completed" : "in_progress";

  return next;
}

export function loadLectureProgress(): LectureProgressV2 {
  if (typeof window === "undefined") return createInitialProgress();
  try {
    const raw = localStorage.getItem(LECTURE_PROGRESS_KEY);
    if (!raw) return createInitialProgress();
    const parsed = JSON.parse(raw) as { version?: number };
    if (!parsed.version || parsed.version < 2) return createInitialProgress();
    return parsed as LectureProgressV2;
  } catch {
    return createInitialProgress();
  }
}

export function saveLectureProgress(p: LectureProgressV2): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LECTURE_PROGRESS_KEY, JSON.stringify(p));
  // Also embed in main progress blob so ProgressSyncProvider can sync to cloud
  try {
    const MAIN_KEY = "soutien-learning-progress-v1";
    const raw = localStorage.getItem(MAIN_KEY);
    if (raw) {
      const main = JSON.parse(raw) as Record<string, unknown>;
      main.lectureProgress = p;
      localStorage.setItem(MAIN_KEY, JSON.stringify(main));
      window.dispatchEvent(new CustomEvent("progress-saved", { detail: main }));
    }
  } catch { /* ignore */ }
}

export function saveEvaluationResult(
  p: LectureProgressV2,
  moduleId: string,
  letterId: string,
  result: Omit<EvalResult, "date">,
): LectureProgressV2 {
  const key = subKey(moduleId, letterId);
  return {
    ...p,
    evaluations: {
      ...p.evaluations,
      [key]: { ...result, date: new Date().toISOString() },
    },
  };
}

export function getEvaluationResult(
  p: LectureProgressV2,
  moduleId: string,
  letterId: string,
): EvalResult | undefined {
  return p.evaluations?.[subKey(moduleId, letterId)];
}

export function computeLecturePercent(p: LectureProgressV2): number {
  const completed = Object.values(p.submodules).filter((s) => s === "completed").length;
  return TOTAL_LETTERS > 0 ? Math.round((completed / TOTAL_LETTERS) * 100) : 0;
}
