export const LECTURE_PROGRESS_KEY = "soutien-lecture-v1";

export type ItemState = "locked" | "available" | "completed";

export type LectureProgress = {
  letters: Record<string, ItemState>;
  revisions: Record<string, ItemState>;
  evaluation: ItemState;
};

type SequenceItem =
  | { type: "letter"; id: string }
  | { type: "revision"; id: string }
  | { type: "evaluation"; id: "voyelles" };

export const SEQUENCE: SequenceItem[] = [
  { type: "letter", id: "a" },
  { type: "letter", id: "o" },
  { type: "revision", id: "a-o" },
  { type: "letter", id: "i" },
  { type: "letter", id: "u" },
  { type: "revision", id: "i-u" },
  { type: "letter", id: "e" },
  { type: "letter", id: "y" },
  { type: "revision", id: "e-y" },
  { type: "evaluation", id: "voyelles" },
  { type: "letter", id: "b" },
  { type: "letter", id: "c" },
  { type: "revision", id: "b-c" },
  { type: "letter", id: "d" },
  { type: "letter", id: "g" },
  { type: "revision", id: "d-g" },
  { type: "letter", id: "k" },
  { type: "letter", id: "p" },
  { type: "revision", id: "k-p" },
  { type: "letter", id: "q" },
  { type: "letter", id: "t" },
  { type: "revision", id: "q-t" },
  { type: "letter", id: "f" },
  { type: "letter", id: "j" },
  { type: "revision", id: "f-j" },
  { type: "letter", id: "l" },
  { type: "letter", id: "m" },
  { type: "revision", id: "l-m" },
  { type: "letter", id: "n" },
  { type: "letter", id: "r" },
  { type: "revision", id: "n-r" },
  { type: "letter", id: "s" },
  { type: "letter", id: "v" },
  { type: "revision", id: "s-v" },
  { type: "letter", id: "z" },
  { type: "letter", id: "w" },
  { type: "revision", id: "z-w" },
  { type: "letter", id: "x" },
  { type: "letter", id: "h" },
  { type: "revision", id: "x-h" },
];

export const TOTAL_LETTERS = SEQUENCE.filter((s) => s.type === "letter").length;

export function createInitialProgress(): LectureProgress {
  const letters: Record<string, ItemState> = {};
  const revisions: Record<string, ItemState> = {};
  for (const item of SEQUENCE) {
    if (item.type === "letter") letters[item.id] = "locked";
    else if (item.type === "revision") revisions[item.id] = "locked";
  }
  letters["a"] = "available";
  return { letters, revisions, evaluation: "locked" };
}

export function getItemState(
  p: LectureProgress,
  type: SequenceItem["type"],
  id: string,
): ItemState {
  if (type === "letter") return p.letters[id] ?? "locked";
  if (type === "revision") return p.revisions[id] ?? "locked";
  return p.evaluation;
}

export function markCompleted(
  p: LectureProgress,
  type: SequenceItem["type"],
  id: string,
): LectureProgress {
  const next: LectureProgress = {
    letters: { ...p.letters },
    revisions: { ...p.revisions },
    evaluation: p.evaluation,
  };

  if (type === "letter") next.letters[id] = "completed";
  else if (type === "revision") next.revisions[id] = "completed";
  else next.evaluation = "completed";

  const idx = SEQUENCE.findIndex((s) => s.type === type && s.id === id);
  if (idx >= 0 && idx < SEQUENCE.length - 1) {
    const nx = SEQUENCE[idx + 1]!;
    if (nx.type === "letter") next.letters[nx.id] = "available";
    else if (nx.type === "revision") next.revisions[nx.id] = "available";
    else next.evaluation = "available";
  }

  return next;
}

export function loadLectureProgress(): LectureProgress {
  if (typeof window === "undefined") return createInitialProgress();
  try {
    const raw = localStorage.getItem(LECTURE_PROGRESS_KEY);
    if (!raw) return createInitialProgress();
    const parsed = JSON.parse(raw) as LectureProgress;
    if (!parsed.letters) return createInitialProgress();
    return parsed;
  } catch {
    return createInitialProgress();
  }
}

export function saveLectureProgress(p: LectureProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LECTURE_PROGRESS_KEY, JSON.stringify(p));
}

export function computeLecturePercent(p: LectureProgress): number {
  const completed = Object.values(p.letters).filter((s) => s === "completed").length;
  return TOTAL_LETTERS > 0 ? Math.round((completed / TOTAL_LETTERS) * 100) : 0;
}
