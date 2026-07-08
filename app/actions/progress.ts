"use server";

import { createSupabaseActionClient } from "@/lib/supabase/server";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { syncTaskProofFromProgressAction } from "@/app/actions/tasks";

export async function loadProgressFromCloud(): Promise<StoredProgressV1 | null> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return null;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data } = await supabase
      .from("profiles")
      .select("progress_data")
      .eq("id", user.id)
      .single();
    return (data?.progress_data as StoredProgressV1) ?? null;
  } catch {
    return null;
  }
}

export async function touchActivityAction(): Promise<void> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase
      .from("profiles")
      .update({ progress_updated_at: new Date().toISOString() })
      .eq("id", user.id);
  } catch {
    /* silent */
  }
}

export async function syncProgressToCloud(progressData: StoredProgressV1): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, error: "not_authenticated" };
    const { error } = await supabase
      .from("profiles")
      .update({
        progress_data: progressData as unknown as Record<string, unknown>,
        progress_updated_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);
    if (error) return { ok: false, error: error.message };
    await syncTaskProofFromProgressAction(progressData).catch(() => {});
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}

export type PlacementTestAttempt = {
  date: string;
  points: number;
  maxPoints: number;
  percent: number;
  scores: Array<{ exerciseId: number; label: string; points: number; maxPoints: number }>;
};

export async function savePlacementTestResultAction(attempt: PlacementTestAttempt): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, error: "not_authenticated" };

    const { data, error: readError } = await supabase
      .from("profiles")
      .select("placement_test_history")
      .eq("id", user.id)
      .maybeSingle();
    if (readError) return { ok: false, error: readError.message };

    const history = Array.isArray(data?.placement_test_history)
      ? data.placement_test_history as PlacementTestAttempt[]
      : [];
    const nextHistory = [...history, attempt].slice(-10);
    const now = new Date().toISOString();

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        placement_test_last: attempt as unknown as Record<string, unknown>,
        placement_test_history: nextHistory as unknown as Record<string, unknown>[],
        placement_test_updated_at: now,
        progress_updated_at: now,
        updated_at: now,
      }, { onConflict: "id" });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}

export async function loadPlacementTestHistoryAction(): Promise<{ ok: boolean; history: PlacementTestAttempt[]; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, history: [], error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, history: [], error: "not_authenticated" };

    const { data, error } = await supabase
      .from("profiles")
      .select("placement_test_history")
      .eq("id", user.id)
      .maybeSingle();
    if (error) return { ok: false, history: [], error: error.message };

    return {
      ok: true,
      history: Array.isArray(data?.placement_test_history)
        ? data.placement_test_history as PlacementTestAttempt[]
        : [],
    };
  } catch (e) {
    return { ok: false, history: [], error: e instanceof Error ? e.message : "unknown" };
  }
}

export type EvalAttemptInput = {
  subject: string;
  moduleId?: string;
  lessonId?: string;
  lessonKey: string;
  score: number;
  maxScore: number;
  grade?: number;
  proofData?: Record<string, unknown>;
};

export async function saveEvalAttemptAction(
  attempt: EvalAttemptInput,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, error: "not_authenticated" };

    const { count } = await supabase
      .from("eval_attempts")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("lesson_key", attempt.lessonKey);

    const attemptNumber = (count ?? 0) + 1;

    const { error } = await supabase.from("eval_attempts").insert({
      user_id: user.id,
      subject: attempt.subject,
      module_id: attempt.moduleId ?? null,
      lesson_id: attempt.lessonId ?? null,
      lesson_key: attempt.lessonKey,
      score: attempt.score,
      max_score: attempt.maxScore,
      grade: attempt.grade ?? null,
      attempt_number: attemptNumber,
      proof_data: attempt.proofData ?? null,
    });

    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "unknown" };
  }
}

export async function getEvalAttemptsForUserAction(userId: string): Promise<{
  ok: boolean;
  attempts: Array<{
    id: string;
    subject: string;
    module_id: string | null;
    lesson_id: string | null;
    lesson_key: string;
    score: number;
    max_score: number;
    grade: number | null;
    attempt_number: number;
    created_at: string;
  }>;
  error?: string;
}> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return { ok: false, attempts: [], error: "supabase_not_configured" };
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ok: false, attempts: [], error: "not_authenticated" };

    const { data: role } = await supabase.rpc("get_my_role");
    if (user.id !== userId && role !== "admin" && role !== "prof") {
      return { ok: false, attempts: [], error: "forbidden" };
    }

    const { data, error } = await supabase
      .from("eval_attempts")
      .select("id, subject, module_id, lesson_id, lesson_key, score, max_score, grade, attempt_number, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) return { ok: false, attempts: [], error: error.message };
    return {
      ok: true,
      attempts: (data ?? []).map((row) => ({
        id: row.id as string,
        subject: row.subject as string,
        module_id: (row.module_id as string | null) ?? null,
        lesson_id: (row.lesson_id as string | null) ?? null,
        lesson_key: row.lesson_key as string,
        score: Number(row.score),
        max_score: Number(row.max_score),
        grade: row.grade != null ? Number(row.grade) : null,
        attempt_number: Number(row.attempt_number),
        created_at: row.created_at as string,
      })),
    };
  } catch (e) {
    return { ok: false, attempts: [], error: e instanceof Error ? e.message : "unknown" };
  }
}
