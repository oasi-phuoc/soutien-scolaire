import { submitExpressionAction } from "@/app/actions/expression";
import { submitOralAction } from "@/app/actions/oral";
import { PLACEMENT_PENDING_KEY } from "./storage";
import type { PendingPlacementSubmission } from "./types";

function readQueue(): PendingPlacementSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(PLACEMENT_PENDING_KEY);
    return raw ? (JSON.parse(raw) as PendingPlacementSubmission[]) : [];
  } catch {
    return [];
  }
}

function writeQueue(items: PendingPlacementSubmission[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PLACEMENT_PENDING_KEY, JSON.stringify(items));
}

function isRetryablePlacementSubmit(reason?: string): boolean {
  if (typeof navigator !== "undefined" && !navigator.onLine) return true;
  if (!reason) return false;
  return /fetch|network|timeout|failed to fetch|econnreset/i.test(reason);
}

export function isRetryablePlacementSubmitError(reason?: string): boolean {
  return isRetryablePlacementSubmit(reason);
}

export function queuePlacementSubmission(item: PendingPlacementSubmission) {
  const queue = readQueue().filter((q) => !(q.sessionId === item.sessionId && q.kind === item.kind));
  queue.push(item);
  writeQueue(queue);
}

export function removePlacementSubmission(id: string) {
  writeQueue(readQueue().filter((q) => q.id !== id));
}

export function pendingPlacementCount(): number {
  return readQueue().length;
}

export async function flushPlacementPendingSubmissions(): Promise<{ sent: number; failed: number }> {
  if (typeof window === "undefined" || !navigator.onLine) return { sent: 0, failed: 0 };
  const queue = readQueue();
  if (queue.length === 0) return { sent: 0, failed: 0 };

  let sent = 0;
  let failed = 0;

  for (const item of queue) {
    try {
      if (item.kind === "pe") {
        const result = await submitExpressionAction({
          teacherId: item.teacherId,
          lessonCode: item.lessonCode,
          level: item.level,
          prompt: item.prompt,
          text: item.text,
          aiFeedback: item.aiFeedback,
          placementSessionId: item.sessionId,
        });
        if (result.ok) {
          removePlacementSubmission(item.id);
          sent += 1;
        } else {
          failed += 1;
        }
      } else {
        const result = await submitOralAction({
          teacherId: item.teacherId,
          lessonCode: item.lessonCode,
          level: item.level,
          prompt: {
            ...item.prompt,
            themes: [
              { word: item.prompt.themes[0]?.word ?? "", example: item.prompt.themes[0]?.example ?? "" },
              { word: item.prompt.themes[1]?.word ?? "", example: item.prompt.themes[1]?.example ?? "" },
              { word: item.prompt.themes[2]?.word ?? "", example: item.prompt.themes[2]?.example ?? "" },
            ],
          },
          dialogue: item.dialogue,
          aiFeedback: item.aiFeedback as never[],
          placementSessionId: item.sessionId,
        });
        if (result.ok) {
          removePlacementSubmission(item.id);
          sent += 1;
        } else {
          failed += 1;
        }
      }
    } catch {
      failed += 1;
    }
  }

  return { sent, failed };
}
