"use server";

import { createSupabaseActionClient } from "@/lib/supabase/server";
import { buildPlacementProfile, buildFrenchSession } from "@/lib/placement/scoring";
import {
  appendTotalSnapshot,
  mergeTotalHistories,
  parseTotalHistory,
} from "@/lib/placement/total-history";
import type {
  PlacementFrenchSession,
  PlacementMathAttempt,
  PlacementProfile,
  PlacementTotalSnapshot,
} from "@/lib/placement/types";
import type { PlacementTestAttempt } from "@/app/actions/progress";

export type CloudPlacementData = {
  mathHistory: PlacementMathAttempt[];
  frenchSessions: PlacementFrenchSession[];
  profile: PlacementProfile;
  frenchDraft: unknown | null;
  totalHistory: PlacementTotalSnapshot[];
};

async function readPlacementRow(supabase: NonNullable<Awaited<ReturnType<typeof createSupabaseActionClient>>>, userId: string) {
  return supabase
    .from("profiles")
    .select("placement_test_history, placement_french_history, placement_combined_profile, placement_french_draft, placement_total_history")
    .eq("id", userId)
    .maybeSingle();
}

function buildCloudPlacementData(data: {
  placement_test_history?: unknown;
  placement_french_history?: unknown;
  placement_combined_profile?: unknown;
  placement_french_draft?: unknown;
  placement_total_history?: unknown;
} | null): CloudPlacementData {
  const mathHistory = Array.isArray(data?.placement_test_history)
    ? data.placement_test_history as PlacementMathAttempt[]
    : [];
  const frenchSessions = Array.isArray(data?.placement_french_history)
    ? data.placement_french_history as PlacementFrenchSession[]
    : [];
  const profile = (data?.placement_combined_profile as PlacementProfile | null)
    ?? buildPlacementProfile(mathHistory, frenchSessions);
  const totalHistory = parseTotalHistory(data?.placement_total_history);

  return {
    mathHistory,
    frenchSessions,
    profile,
    frenchDraft: data?.placement_french_draft ?? null,
    totalHistory,
  };
}

function resolveTotalHistory(
  cloudHistory: PlacementTotalSnapshot[],
  inputHistory: PlacementTotalSnapshot[] | undefined,
  profile: PlacementProfile,
): PlacementTotalSnapshot[] {
  const merged = mergeTotalHistories(cloudHistory, inputHistory ?? []);
  return appendTotalSnapshot(merged, profile);
}

export async function loadPlacementFromCloudAction(): Promise<{ ok: boolean; data: CloudPlacementData | null; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, data: null, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, data: null, error: "not_authenticated" };

    const { data, error } = await readPlacementRow(supabase, user.id);
    if (error) return { ok: false, data: null, error: error.message };

    return { ok: true, data: buildCloudPlacementData(data) };
  } catch (e) {
    return { ok: false, data: null, error: e instanceof Error ? e.message : "unknown" };
  }
}

export async function savePlacementToCloudAction(input: {
  mathHistory?: PlacementMathAttempt[];
  frenchSessions?: PlacementFrenchSession[];
  frenchDraft?: unknown | null;
  totalHistory?: PlacementTotalSnapshot[];
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, error: "not_authenticated" };

    const { data: existing, error: readError } = await readPlacementRow(supabase, user.id);
    if (readError) return { ok: false, error: readError.message };

    const current = buildCloudPlacementData(existing);
    const mathHistory = input.mathHistory ?? current.mathHistory;
    const frenchSessions = input.frenchSessions ?? current.frenchSessions;
    const profile = buildPlacementProfile(mathHistory, frenchSessions);
    const totalHistory = resolveTotalHistory(current.totalHistory, input.totalHistory, profile);
    const now = new Date().toISOString();
    const lastMath = mathHistory.length > 0 ? mathHistory[mathHistory.length - 1] : null;

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      placement_test_history: mathHistory as unknown as Record<string, unknown>[],
      placement_test_last: lastMath as unknown as Record<string, unknown> | null,
      placement_test_updated_at: lastMath ? now : undefined,
      placement_french_history: frenchSessions as unknown as Record<string, unknown>[],
      placement_combined_profile: profile as unknown as Record<string, unknown>,
      placement_total_history: totalHistory as unknown as Record<string, unknown>[],
      placement_french_draft: input.frenchDraft !== undefined ? input.frenchDraft : current.frenchDraft,
      placement_updated_at: now,
      progress_updated_at: now,
      updated_at: now,
    }, { onConflict: "id" });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}

export async function saveMathPlacementAttemptAction(attempt: PlacementTestAttempt): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, error: "not_authenticated" };

    const { data, error: readError } = await readPlacementRow(supabase, user.id);
    if (readError) return { ok: false, error: readError.message };

    const current = buildCloudPlacementData(data);
    const nextHistory = [...current.mathHistory, attempt as PlacementMathAttempt].slice(-10);
    const profile = buildPlacementProfile(nextHistory, current.frenchSessions);
    const totalHistory = appendTotalSnapshot(current.totalHistory, profile);
    const now = new Date().toISOString();

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      placement_test_last: attempt as unknown as Record<string, unknown>,
      placement_test_history: nextHistory as unknown as Record<string, unknown>[],
      placement_test_updated_at: now,
      placement_combined_profile: profile as unknown as Record<string, unknown>,
      placement_total_history: totalHistory as unknown as Record<string, unknown>[],
      placement_updated_at: now,
      progress_updated_at: now,
      updated_at: now,
    }, { onConflict: "id" });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}

export async function applyPlacementTeacherScoreAction(input: {
  sessionId: string;
  skill: "pe" | "po";
  points: number;
  submissionId: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, error: "not_authenticated" };

    const { data, error: readError } = await readPlacementRow(supabase, user.id);
    if (readError) return { ok: false, error: readError.message };

    const current = buildCloudPlacementData(data);
    const idx = current.frenchSessions.findIndex((s) => s.id === input.sessionId);
    if (idx < 0) return { ok: false, error: "session_not_found" };

    const session = current.frenchSessions[idx]!;
    const updated = buildFrenchSession({
      ...session,
      [input.skill]: input.points,
      [`${input.skill}SubmissionId`]: input.submissionId,
    });
    const nextSessions = current.frenchSessions.map((s, i) => (i === idx ? updated : s));
    const profile = buildPlacementProfile(current.mathHistory, nextSessions);
    const totalHistory = appendTotalSnapshot(current.totalHistory, profile);
    const now = new Date().toISOString();

    const { error } = await supabase.from("profiles").update({
      placement_french_history: nextSessions as unknown as Record<string, unknown>[],
      placement_combined_profile: profile as unknown as Record<string, unknown>,
      placement_total_history: totalHistory as unknown as Record<string, unknown>[],
      placement_updated_at: now,
      updated_at: now,
    }).eq("id", user.id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}
