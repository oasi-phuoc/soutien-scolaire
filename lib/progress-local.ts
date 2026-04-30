/** Clés localStorage — à remplacer par Supabase quand les comptes seront actifs. */

export type QuizStored = {
  score: number;
  max: number;
  passed: boolean;
  at?: string;
};

const PREFIX_QUIZ = "soutien:quiz:";
const STORAGE_LAST = "soutien:lastModuleSlug";
const STORAGE_PROGRESS = "soutien:lastProgress";

export function getLastActivity(): { slug: string | null; progress: number } {
  if (typeof window === "undefined") return { slug: null, progress: 0 };
  const slug = localStorage.getItem(STORAGE_LAST);
  const p = localStorage.getItem(STORAGE_PROGRESS);
  return {
    slug,
    progress: p ? Math.min(100, Math.max(0, Number(p))) : 0,
  };
}

export function persistLastActivity(slug: string, progressPercent: number) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_LAST, slug);
  localStorage.setItem(
    STORAGE_PROGRESS,
    String(Math.min(100, Math.max(0, progressPercent))),
  );
}

export function readQuizStored(slug: string): QuizStored | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PREFIX_QUIZ + slug);
    if (!raw) return null;
    const o = JSON.parse(raw) as QuizStored;
    if (typeof o.score !== "number" || typeof o.max !== "number") return null;
    return o;
  } catch {
    return null;
  }
}

/** Enregistre le résultat du quiz et met à jour « dernière activité ». */
export function writeQuizStored(
  slug: string,
  score: number,
  max: number,
  passingPercent: number,
) {
  if (typeof window === "undefined") return;
  const pct = max > 0 ? Math.round((score / max) * 100) : 0;
  const passed = pct >= passingPercent;
  const data: QuizStored = {
    score,
    max,
    passed,
    at: new Date().toISOString(),
  };
  localStorage.setItem(PREFIX_QUIZ + slug, JSON.stringify(data));

  const progress = passed ? 100 : Math.min(95, Math.max(25, pct));
  persistLastActivity(slug, progress);
}

/** Snapshot envoyé au serveur pour import (compte Supabase connecté). */
export type LocalProgressSnapshot = {
  lastActivity: { slug: string | null; progress: number };
  quizzes: Array<{
    slug: string;
    score: number;
    max: number;
    passed: boolean;
    at: string;
  }>;
};

export function collectLocalProgressSnapshot(): LocalProgressSnapshot {
  const lastActivity = getLastActivity();
  const quizzes: LocalProgressSnapshot["quizzes"] = [];
  if (typeof window === "undefined") {
    return { lastActivity, quizzes };
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(PREFIX_QUIZ)) continue;
    const slug = key.slice(PREFIX_QUIZ.length);
    const raw = localStorage.getItem(key);
    if (!raw) continue;
    try {
      const o = JSON.parse(raw) as QuizStored & { at?: string };
      if (
        typeof o.score === "number" &&
        typeof o.max === "number" &&
        typeof o.passed === "boolean"
      ) {
        quizzes.push({
          slug,
          score: o.score,
          max: o.max,
          passed: o.passed,
          at: typeof o.at === "string" ? o.at : new Date().toISOString(),
        });
      }
    } catch {
      /* ignorer entrée invalide */
    }
  }

  return { lastActivity, quizzes };
}
