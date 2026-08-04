import { loadProgress, saveProgress } from "./math-progress";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

export function getCompletedFrenchLessons(): Set<string> {
  if (typeof window === "undefined") return new Set();
  const p = loadProgress();
  return new Set(Object.keys(p.frenchLessons ?? {}));
}

export function markFrenchLessonComplete(slug: string): void {
  if (typeof window === "undefined") return;
  const p = loadProgress();
  const pending = { ...(p.frenchEvalPending ?? {}) };
  delete pending[slug];
  saveProgress({
    ...p,
    frenchLessons: { ...(p.frenchLessons ?? {}), [slug]: "completed" },
    frenchEvalPending: Object.keys(pending).length > 0 ? pending : undefined,
  });
  window.dispatchEvent(new CustomEvent("soutien-french-lesson-complete", { detail: { slug } }));
}

export type FrenchEvalPending = NonNullable<StoredProgressV1["frenchEvalPending"]>[string];

export function setFrenchEvalPending(slug: string, data: FrenchEvalPending): void {
  if (typeof window === "undefined") return;
  const p = loadProgress();
  saveProgress({
    ...p,
    frenchEvalPending: { ...(p.frenchEvalPending ?? {}), [slug]: data },
  });
}

export function clearFrenchEvalPending(slug: string): void {
  if (typeof window === "undefined") return;
  const p = loadProgress();
  const pending = { ...(p.frenchEvalPending ?? {}) };
  if (!(slug in pending)) return;
  delete pending[slug];
  saveProgress({
    ...p,
    frenchEvalPending: Object.keys(pending).length > 0 ? pending : undefined,
  });
}

export function getFrenchEvalPending(slug: string): FrenchEvalPending | null {
  if (typeof window === "undefined") return null;
  return loadProgress().frenchEvalPending?.[slug] ?? null;
}
