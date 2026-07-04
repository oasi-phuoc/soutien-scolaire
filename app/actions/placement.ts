"use server";

import { createSupabaseActionClient } from "@/lib/supabase/server";
import { buildPlacementProfile, buildFrenchSession } from "@/lib/placement/scoring";
import type { PlacementFrenchSession, PlacementMathAttempt, PlacementProfile } from "@/lib/placement/types";
import type { PlacementTestAttempt } from "@/app/actions/progress";

export type CloudPlacementData = {
  mathHistory: PlacementMathAttempt[];
  frenchSessions: PlacementFrenchSession[];
  profile: PlacementProfile;
  frenchDraft: unknown | null;
};

export async function loadPlacementFromCloudAction(): Promise<{ ok: boolean; data: CloudPlacementData | null; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, data: null, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, data: null, error: "not_authenticated" };

    const { data, error } = await supabase
      .from("profiles")
      .select("placement_test_history, placement_french_history, placement_combined_profile, placement_french_draft")
      .eq("id", user.id)
      .maybeSingle();
    if (error) return { ok: false, data: null, error: error.message };

    const mathHistory = Array.isArray(data?.placement_test_history)
      ? data.placement_test_history as PlacementMathAttempt[]
      : [];
    const frenchSessions = Array.isArray(data?.placement_french_history)
      ? data.placement_french_history as PlacementFrenchSession[]
      : [];
    const profile = (data?.placement_combined_profile as PlacementProfile | null) ?? buildPlacementProfile(mathHistory, frenchSessions);

    return {
      ok: true,
      data: {
        mathHistory,
        frenchSessions,
        profile,
        frenchDraft: data?.placement_french_draft ?? null,
      },
    };
  } catch (e) {
    return { ok: false, data: null, error: e instanceof Error ? e.message : "unknown" };
  }
}

export async function savePlacementToCloudAction(input: {
  mathHistory?: PlacementMathAttempt[];
  frenchSessions?: PlacementFrenchSession[];
  frenchDraft?: unknown | null;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, error: "not_authenticated" };

    const mathHistory = input.mathHistory ?? [];
    const frenchSessions = input.frenchSessions ?? [];
    const profile = buildPlacementProfile(mathHistory, frenchSessions);
    const now = new Date().toISOString();
    const lastMath = mathHistory.length > 0 ? mathHistory[mathHistory.length - 1] : null;

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      placement_test_history: mathHistory as unknown as Record<string, unknown>[],
      placement_test_last: lastMath as unknown as Record<string, unknown> | null,
      placement_test_updated_at: lastMath ? now : undefined,
      placement_french_history: frenchSessions as unknown as Record<string, unknown>[],
      placement_combined_profile: profile as unknown as Record<string, unknown>,
      placement_french_draft: input.frenchDraft ?? null,
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

    const { data, error: readError } = await supabase
      .from("profiles")
      .select("placement_test_history, placement_french_history")
      .eq("id", user.id)
      .maybeSingle();
    if (readError) return { ok: false, error: readError.message };

    const history = Array.isArray(data?.placement_test_history)
      ? data.placement_test_history as PlacementMathAttempt[]
      : [];
    const frenchSessions = Array.isArray(data?.placement_french_history)
      ? data.placement_french_history as PlacementFrenchSession[]
      : [];
    const nextHistory = [...history, attempt as PlacementMathAttempt].slice(-10);
    const profile = buildPlacementProfile(nextHistory, frenchSessions);
    const now = new Date().toISOString();

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      placement_test_last: attempt as unknown as Record<string, unknown>,
      placement_test_history: nextHistory as unknown as Record<string, unknown>[],
      placement_test_updated_at: now,
      placement_combined_profile: profile as unknown as Record<string, unknown>,
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

    const { data, error: readError } = await supabase
      .from("profiles")
      .select("placement_test_history, placement_french_history")
      .eq("id", user.id)
      .maybeSingle();
    if (readError) return { ok: false, error: readError.message };

    const mathHistory = Array.isArray(data?.placement_test_history)
      ? data.placement_test_history as PlacementMathAttempt[]
      : [];
    const sessions = Array.isArray(data?.placement_french_history)
      ? data.placement_french_history as PlacementFrenchSession[]
      : [];

    const idx = sessions.findIndex((s) => s.id === input.sessionId);
    if (idx < 0) return { ok: false, error: "session_not_found" };

    const current = sessions[idx]!;
    const updated = buildFrenchSession({
      ...current,
      [input.skill]: input.points,
      [`${input.skill}SubmissionId`]: input.submissionId,
    });
    const nextSessions = sessions.map((s, i) => (i === idx ? updated : s));
    const profile = buildPlacementProfile(mathHistory, nextSessions);
    const now = new Date().toISOString();

    const { error } = await supabase.from("profiles").update({
      placement_french_history: nextSessions as unknown as Record<string, unknown>[],
      placement_combined_profile: profile as unknown as Record<string, unknown>,
      placement_updated_at: now,
      updated_at: now,
    }).eq("id", user.id);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}
