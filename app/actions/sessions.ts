"use server";

import { createSupabaseActionClient } from "@/lib/supabase/server";

export async function startLearningSessionAction(meta: {
  subject: string;
  moduleId?: string;
  lessonId?: string;
  lessonPath?: string;
}): Promise<{ ok: boolean; sessionId?: string; error?: string }> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, error: "supabase_not_configured" };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "not_authenticated" };

  const { data, error } = await supabase
    .from("learning_sessions")
    .insert({
      user_id: user.id,
      subject: meta.subject,
      module_id: meta.moduleId ?? null,
      lesson_id: meta.lessonId ?? null,
      lesson_path: meta.lessonPath ?? null,
      source: "web",
    })
    .select("id")
    .single();

  if (error || !data) return { ok: false, error: error?.message ?? "insert_failed" };
  return { ok: true, sessionId: data.id as string };
}

export async function endLearningSessionAction(
  sessionId: string,
  durationSec: number,
  finalize = true,
): Promise<{ ok: boolean }> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false };

  const updates: Record<string, unknown> = { duration_sec: Math.max(0, durationSec) };
  if (finalize) updates.ended_at = new Date().toISOString();

  await supabase
    .from("learning_sessions")
    .update(updates)
    .eq("id", sessionId)
    .eq("user_id", user.id);

  return { ok: true };
}

export async function getUserTimeStatsAction(userId: string): Promise<{
  ok: boolean;
  totalSec: number;
  last7DaysSec: number;
  sessions: Array<{ subject: string; duration_sec: number; started_at: string; lesson_path: string | null }>;
}> {
  const supabase = await createSupabaseActionClient();
  if (!supabase) return { ok: false, totalSec: 0, last7DaysSec: 0, sessions: [] };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, totalSec: 0, last7DaysSec: 0, sessions: [] };

  const { data: role } = await supabase.rpc("get_my_role");
  const canRead = user.id === userId || role === "admin" || role === "prof";
  if (!canRead) return { ok: false, totalSec: 0, last7DaysSec: 0, sessions: [] };

  const { data } = await supabase
    .from("learning_sessions")
    .select("subject, duration_sec, started_at, lesson_path")
    .eq("user_id", userId)
    .not("duration_sec", "is", null)
    .order("started_at", { ascending: false })
    .limit(100);

  const sessions = (data ?? []).map((s) => ({
    subject: s.subject as string,
    duration_sec: Number(s.duration_sec ?? 0),
    started_at: s.started_at as string,
    lesson_path: (s.lesson_path as string | null) ?? null,
  }));

  const totalSec = sessions.reduce((sum, s) => sum + s.duration_sec, 0);
  const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const last7DaysSec = sessions
    .filter((s) => new Date(s.started_at).getTime() >= cutoff)
    .reduce((sum, s) => sum + s.duration_sec, 0);

  return { ok: true, totalSec, last7DaysSec, sessions };
}
