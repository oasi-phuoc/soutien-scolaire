"use client";

import { useEffect, useState } from "react";
import { getEvalAttemptsForUserAction } from "@/app/actions/progress";
import { getUserTimeStatsAction } from "@/app/actions/sessions";
import { getAttemptHistory } from "@/lib/progress/attempt-history";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h} h ${m % 60} min`;
  return `${m} min`;
}

export function EleveEngagementPanel({
  userId,
  progress,
}: {
  userId: string;
  progress: StoredProgressV1 | null;
}) {
  const [attempts, setAttempts] = useState<Awaited<ReturnType<typeof getEvalAttemptsForUserAction>>["attempts"]>([]);
  const [timeStats, setTimeStats] = useState<{ totalSec: number; last7DaysSec: number } | null>(null);

  useEffect(() => {
    void getEvalAttemptsForUserAction(userId).then((res) => {
      if (res.ok) setAttempts(res.attempts);
    });
    void getUserTimeStatsAction(userId).then((res) => {
      if (res.ok) setTimeStats({ totalSec: res.totalSec, last7DaysSec: res.last7DaysSec });
    });
  }, [userId]);

  const submoduleScores = Object.entries(progress?.submoduleScores ?? {});
  const localAttempts = getAttemptHistory(progress ?? { version: 2, math: {}, lastActivityAt: "", lastQuizGrades: {}, frenchLevel: "A1" });
  const allAttempts = [
    ...attempts.map((a) => ({
      id: a.id,
      lesson: a.lesson_id ?? a.lesson_key,
      attemptNumber: a.attempt_number,
      score: a.score,
      maxScore: a.max_score,
      grade: a.grade,
      at: a.created_at,
    })),
    ...localAttempts.map((a, i) => ({
      id: `local-${i}`,
      lesson: a.lessonId ?? a.lessonKey,
      attemptNumber: a.attemptNumber,
      score: a.score,
      maxScore: a.maxScore,
      grade: a.grade ?? null,
      at: a.at,
    })),
  ].sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime());

  return (
    <div className="space-y-4">
      {timeStats && (
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-zinc-100 p-3 dark:border-zinc-800">
            <p className="text-[10px] uppercase tracking-wide text-zinc-400">Temps total</p>
            <p className="text-lg font-bold text-zinc-800 dark:text-zinc-100">{formatDuration(timeStats.totalSec)}</p>
          </div>
          <div className="rounded-lg border border-zinc-100 p-3 dark:border-zinc-800">
            <p className="text-[10px] uppercase tracking-wide text-zinc-400">7 derniers jours</p>
            <p className="text-lg font-bold text-zinc-800 dark:text-zinc-100">{formatDuration(timeStats.last7DaysSec)}</p>
          </div>
        </div>
      )}

      {submoduleScores.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Scores par leçon (maths)</p>
          <ul className="max-h-48 space-y-1 overflow-y-auto text-xs">
            {submoduleScores.map(([key, sc]) => (
              <li key={key} className="flex justify-between rounded bg-zinc-50 px-2 py-1 dark:bg-zinc-900">
                <span className="font-mono">{key}</span>
                <span className="font-semibold tabular-nums">{sc.score}/{sc.max} — {sc.grade.toFixed(1)}/6</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {allAttempts.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Historique des tentatives</p>
          <ul className="max-h-56 space-y-1 overflow-y-auto text-xs">
            {allAttempts.map((a) => (
              <li key={a.id} className="rounded border border-zinc-100 px-2 py-1.5 dark:border-zinc-800">
                <div className="flex justify-between gap-2">
                  <span className="font-medium">{a.lesson}</span>
                  <span className="tabular-nums text-zinc-500">#{a.attemptNumber}</span>
                </div>
                <div className="mt-0.5 flex justify-between text-zinc-500">
                  <span>{a.score}/{a.maxScore}{a.grade != null ? ` — ${a.grade.toFixed(1)}/6` : ""}</span>
                  <span>{new Date(a.at).toLocaleDateString("fr-CH")}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {submoduleScores.length === 0 && allAttempts.length === 0 && !timeStats && (
        <p className="text-xs text-zinc-400">Aucune donnée d&apos;engagement pour le moment.</p>
      )}
    </div>
  );
}
