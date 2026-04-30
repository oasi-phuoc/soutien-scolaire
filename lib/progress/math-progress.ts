import {
  MATH_MODULES,
  prerequisitesMet,
  getMathModule,
} from "@/lib/curriculum/math-data";
import type {
  MathModuleProgress,
  StoredProgressV1,
} from "@/lib/curriculum/types";
import {
  PASSING_GRADE,
  MAX_EVAL_ATTEMPTS,
  medalFromPercent,
  percentToSwissGrade,
} from "@/lib/scoring";

export const MATH_PROGRESS_KEY = "soutien-learning-progress-v1";

export function createInitialProgress(): StoredProgressV1 {
  const math: Record<string, MathModuleProgress> = {};
  for (const m of MATH_MODULES) {
    math[m.id] = {
      state: "locked",
      subProgress: 0,
      subTotal: m.submodules.length,
    };
  }
  const next: StoredProgressV1 = {
    version: 1,
    math,
    lastActivityAt: new Date().toISOString(),
    lastQuizGrades: {},
    frenchLevel: "PA",
  };
  return recomputeLocks(next);
}

export function loadProgress(): StoredProgressV1 {
  if (typeof window === "undefined") return createInitialProgress();
  try {
    const raw = localStorage.getItem(MATH_PROGRESS_KEY);
    if (!raw) return createInitialProgress();
    const p = JSON.parse(raw) as StoredProgressV1;
    if (p?.version !== 1 || !p.math) return createInitialProgress();
    for (const m of MATH_MODULES) {
      if (!p.math[m.id]) {
        p.math[m.id] = {
          state: "locked",
          subProgress: 0,
          subTotal: m.submodules.length,
        };
      } else {
        p.math[m.id].subTotal = m.submodules.length;
      }
    }
    return recomputeLocks(p);
  } catch {
    return createInitialProgress();
  }
}

export function saveProgress(p: StoredProgressV1) {
  if (typeof window === "undefined") return;
  localStorage.setItem(MATH_PROGRESS_KEY, JSON.stringify(p));
}

/** Modules considérés validés pour débloquer la suite (≥ 4.0/6 ou déblocage forcé 3 tentatives). */
export function completedPassingIds(p: StoredProgressV1): Set<string> {
  const s = new Set<string>();
  for (const [id, prog] of Object.entries(p.math)) {
    if (prog.state !== "completed") continue;
    if (prog.grade != null && prog.grade >= PASSING_GRADE) {
      s.add(id);
      continue;
    }
    if (
      prog.evaluationAttempts != null &&
      prog.evaluationAttempts >= MAX_EVAL_ATTEMPTS
    ) {
      s.add(id);
    }
  }
  return s;
}

export function recomputeLocks(p: StoredProgressV1): StoredProgressV1 {
  const done = completedPassingIds(p);
  const next = { ...p, math: { ...p.math } };
  for (const m of MATH_MODULES) {
    const cur = next.math[m.id];
    if (!cur) continue;
    if (cur.state === "completed") continue;
    const pre = prerequisitesMet(m, done);
    if (!pre.ok) {
      next.math[m.id] = { ...cur, state: "locked" };
      continue;
    }
    if (cur.state === "locked") {
      next.math[m.id] = { ...cur, state: "available" };
    }
  }
  return next;
}

export function touchActivity(p: StoredProgressV1): StoredProgressV1 {
  return { ...p, lastActivityAt: new Date().toISOString() };
}

export function daysSince(iso: string): number {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return 999;
  return (Date.now() - t) / (1000 * 60 * 60 * 24);
}

export function moduleNeedsEvaluation(
  moduleId: string,
  p: StoredProgressV1,
): boolean {
  const m = getMathModule(moduleId);
  const prog = p.math[moduleId];
  if (!m || !prog) return false;
  if (prog.state === "completed") return false;
  if (prog.subProgress < prog.subTotal) return false;
  const until = p.evaluationSnoozeUntil?.[moduleId];
  if (until && Date.now() < Date.parse(until)) return false;
  if (prog.grade != null && prog.grade >= PASSING_GRADE) return false;
  if (
    prog.evaluationAttempts != null &&
    prog.evaluationAttempts >= MAX_EVAL_ATTEMPTS
  )
    return false;
  return true;
}

export function recordMathEvaluation(
  p: StoredProgressV1,
  moduleId: string,
  percentCorrect: number,
): StoredProgressV1 {
  const cur = p.math[moduleId];
  const m = getMathModule(moduleId);
  if (!cur || !m) return p;
  const grade = percentToSwissGrade(percentCorrect);
  const attempts = (cur.evaluationAttempts ?? 0) + 1;
  const forceUnlock = attempts >= MAX_EVAL_ATTEMPTS;
  const passed = grade >= PASSING_GRADE || forceUnlock;
  const next: StoredProgressV1 = {
    ...p,
    math: { ...p.math },
    lastQuizGrades: { ...p.lastQuizGrades, [moduleId]: grade },
    lastCompletedMathModuleId: moduleId,
  };
  next.math[moduleId] = {
    ...cur,
    grade,
    lastEvalAt: new Date().toISOString(),
    evaluationAttempts: attempts,
    state: passed ? "completed" : cur.state,
    reviewFlag: forceUnlock && grade < PASSING_GRADE,
    medal:
      grade >= PASSING_GRADE
        ? medalFromPercent(percentCorrect)
        : forceUnlock
          ? "bronze"
          : undefined,
  };
  return recomputeLocks(touchActivity(next));
}

function addDays(isoStart: string, days: number): string {
  const d = new Date(isoStart);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

export function snoozeEvaluation(
  p: StoredProgressV1,
  moduleId: string,
  days = 7,
): StoredProgressV1 {
  const until = addDays(new Date().toISOString(), days);
  return {
    ...p,
    evaluationSnoozeUntil: { ...p.evaluationSnoozeUntil, [moduleId]: until },
  };
}

export function advanceSubmodule(
  p: StoredProgressV1,
  moduleId: string,
): StoredProgressV1 {
  const cur = p.math[moduleId];
  if (!cur || cur.state === "locked" || cur.state === "completed") return p;
  let state = cur.state;
  if (state === "available") state = "in_progress";
  const subProgress = Math.min(cur.subProgress + 1, cur.subTotal);
  const next: StoredProgressV1 = {
    ...p,
    math: { ...p.math, [moduleId]: { ...cur, subProgress, state } },
  };
  return touchActivity(recomputeLocks(next));
}

export function openModuleFromList(
  p: StoredProgressV1,
  moduleId: string,
): StoredProgressV1 {
  const cur = p.math[moduleId];
  if (!cur || cur.state !== "available") return touchActivity(p);
  const next: StoredProgressV1 = {
    ...p,
    math: { ...p.math, [moduleId]: { ...cur, state: "in_progress" } },
  };
  return touchActivity(next);
}
