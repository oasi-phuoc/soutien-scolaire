"use client";

import { useEffect } from "react";
import { flushPlacementPendingSubmissions } from "@/lib/placement/pending-submissions";
import { loadFrenchSessions, recomputePlacementProfile, saveFrenchSession } from "@/lib/placement/storage";
import { applyPlacementTeacherScoreAction } from "@/app/actions/placement";
import { buildFrenchSession } from "@/lib/placement/scoring";

async function syncReviewedScores() {
  // Recompute local profile after pending flush
  recomputePlacementProfile();
}

export function PlacementPendingSync() {
  useEffect(() => {
    async function flush() {
      await flushPlacementPendingSubmissions();
      await syncReviewedScores();
    }
    void flush();
    const onOnline = () => { void flush(); };
    window.addEventListener("app-online", onOnline);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("app-online", onOnline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  return null;
}

export function updateLocalFrenchTeacherScore(
  sessionId: string,
  skill: "pe" | "po",
  points: number,
  submissionId: string,
) {
  const sessions = loadFrenchSessions();
  const idx = sessions.findIndex((s) => s.id === sessionId);
  if (idx < 0) return;
  const current = sessions[idx]!;
  const updated = buildFrenchSession({
    ...current,
    [skill]: points,
    [`${skill}SubmissionId`]: submissionId,
  });
  saveFrenchSession(updated);
  void applyPlacementTeacherScoreAction({ sessionId, skill, points, submissionId });
}
