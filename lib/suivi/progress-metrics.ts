import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { LECTURE_MODULES } from "@/lib/curriculum/lecture-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

const FRENCH_VOC = FRENCH_THEMES.filter((t) => t.tab === "vocabulaire");
const FRENCH_GRAM = FRENCH_THEMES.filter((t) => t.tab === "grammaire" || t.tab === "conjugaison");
const MATH_SUB_IDS = new Set(
  MATH_MODULES.flatMap((m) => m.submodules.map((s) => s.id)),
);
const TOTAL_MATH_SUBS = MATH_MODULES.reduce((n, m) => n + m.submodules.length, 0);
const TOTAL_FRENCH_LESSONS = FRENCH_VOC.length + FRENCH_GRAM.length;
const TOTAL_LECTURE_LETTERS = LECTURE_MODULES.reduce((sum, m) => sum + m.letters.length, 0);

export type SubjectProgress = { done: number; total: number; pct: number };

export function mathProgress(data: StoredProgressV1 | null): SubjectProgress {
  const done = data?.submoduleStates
    ? Object.entries(data.submoduleStates).filter(([id, s]) => MATH_SUB_IDS.has(id) && s === "completed").length
    : data?.math
      ? Object.values(data.math).reduce((n, m) => n + Math.round((m.subProgress ?? 0) * (m.subTotal ?? 1)), 0)
      : 0;
  return { done, total: TOTAL_MATH_SUBS, pct: TOTAL_MATH_SUBS > 0 ? Math.round((done / TOTAL_MATH_SUBS) * 100) : 0 };
}

/** Français vocab + grammaire/conjugaison uniquement (hors communication). */
export function frenchProgress(data: StoredProgressV1 | null): SubjectProgress {
  const completedSlugs = new Set(Object.keys(data?.frenchLessons ?? {}));
  const vocDone = FRENCH_VOC.filter((t) => completedSlugs.has(t.slug)).length;
  const gramDone = FRENCH_GRAM.filter((t) => completedSlugs.has(t.slug)).length;
  const done = vocDone + gramDone;
  return {
    done,
    total: TOTAL_FRENCH_LESSONS,
    pct: TOTAL_FRENCH_LESSONS > 0 ? Math.round((done / TOTAL_FRENCH_LESSONS) * 100) : 0,
  };
}

export function lectureProgress(data: StoredProgressV1 | null): SubjectProgress {
  const subs = data?.lectureProgress?.submodules ?? {};
  const done = LECTURE_MODULES.reduce(
    (sum, m) => sum + m.letters.filter((l) => subs[`${m.id}-${l.letterLower}`] === "completed").length,
    0,
  );
  return {
    done,
    total: TOTAL_LECTURE_LETTERS,
    pct: TOTAL_LECTURE_LETTERS > 0 ? Math.round((done / TOTAL_LECTURE_LETTERS) * 100) : 0,
  };
}

export function averagePct(rows: SubjectProgress[]): number {
  if (rows.length === 0) return 0;
  return Math.round(rows.reduce((s, r) => s + r.pct, 0) / rows.length);
}
