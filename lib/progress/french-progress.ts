import { loadProgress, saveProgress } from "./math-progress";

export function getCompletedFrenchLessons(): Set<string> {
  if (typeof window === "undefined") return new Set();
  const p = loadProgress();
  return new Set(Object.keys(p.frenchLessons ?? {}));
}

export function markFrenchLessonComplete(slug: string): void {
  if (typeof window === "undefined") return;
  const p = loadProgress();
  saveProgress({ ...p, frenchLessons: { ...(p.frenchLessons ?? {}), [slug]: "completed" } });
  window.dispatchEvent(new CustomEvent("soutien-french-lesson-complete", { detail: { slug } }));
}
