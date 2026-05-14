export const LECTURE_PROGRESS_KEY = "soutien-lecture-v2";

export type ItemState = "locked" | "available" | "completed";
export type ModuleState = "locked" | "available" | "in_progress" | "completed";

export type LectureProgressV2 = {
  version: 2;
  modules: Record<string, ModuleState>;
  submodules: Record<string, ItemState>;
};

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

export function markSubmoduleCompleted(
  p: LectureProgressV2,
  moduleId: string,
  letterId: string,
): LectureProgressV2 {
  const next: LectureProgressV2 = {
    version: 2,
    modules: { ...p.modules },
    submodules: { ...p.submodules },
  };

  next.submodules[subKey(moduleId, letterId)] = "completed";

  const idx = SUBMODULE_SEQUENCE.findIndex(
    (s) => s.moduleId === moduleId && s.letterId === letterId,
  );

  if (idx >= 0 && idx < SUBMODULE_SEQUENCE.length - 1) {
    const nx = SUBMODULE_SEQUENCE[idx + 1]!;
    next.submodules[subKey(nx.moduleId, nx.letterId)] = "available";
    if (nx.moduleId !== moduleId) {
      next.modules[nx.moduleId] = "available";
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
}

export function computeLecturePercent(p: LectureProgressV2): number {
  const completed = Object.values(p.submodules).filter((s) => s === "completed").length;
  return TOTAL_LETTERS > 0 ? Math.round((completed / TOTAL_LETTERS) * 100) : 0;
}
