"use server";

import { createSupabaseActionClient } from "@/lib/supabase/server";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

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
