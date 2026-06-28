import { normalizeCommunicationProgress } from "@/lib/curriculum/communication-data";
import { loadProgress, saveProgress } from "@/lib/progress/math-progress";

export const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";

export function markCommunicationLessonComplete(lessonId: string): Record<string, boolean> {
  if (typeof window === "undefined") return {};

  const raw = localStorage.getItem(COMM_PROGRESS_KEY);
  const progress = normalizeCommunicationProgress(raw ? JSON.parse(raw) : {});
  progress[lessonId] = true;
  localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify(progress));

  const main = loadProgress();
  saveProgress({
    ...main,
    commProgress: progress,
    lastActivityAt: new Date().toISOString(),
  });

  return progress;
}
