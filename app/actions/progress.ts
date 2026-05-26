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

export async function syncProgressToCloud(progressData: StoredProgressV1): Promise<void> {
  try {
    const supabase = await createSupabaseActionClient();
    if (!supabase) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        progress_data: progressData,
        progress_updated_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }, { onConflict: "id" });
  } catch {
    /* silent — sync is best-effort */
  }
}
