"use server";

import { revalidatePath } from "next/cache";
import type { LocalProgressSnapshot } from "@/lib/progress-local";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { PivotCode } from "@/lib/pivot-langs";

const PIVOT_SET = new Set<PivotCode>(["ar", "fa", "ti", "uk"]);

function statusFromPct(pct: number): "not_started" | "in_progress" | "completed" {
  if (pct >= 100) return "completed";
  if (pct <= 0) return "not_started";
  return "in_progress";
}

/** Fusionne avec le max déjà stocké pour ce module */
export async function upsertRemoteModuleProgress(
  moduleSlug: string,
  progressPercent: number,
) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false as const, reason: "no_supabase" };

  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();
  if (userErr || !user) return { ok: false as const, reason: "unauthenticated" };

  const pct = Math.min(100, Math.max(0, Math.round(progressPercent)));

  const { data: row } = await supabase
    .from("user_module_progress")
    .select("progress_percent")
    .eq("user_id", user.id)
    .eq("module_slug", moduleSlug)
    .maybeSingle();

  const prev =
    typeof row?.progress_percent === "number" ? row.progress_percent : 0;
  const nextPct = Math.max(prev, pct);
  const status = statusFromPct(nextPct);

  const { error } = await supabase.from("user_module_progress").upsert(
    {
      user_id: user.id,
      module_slug: moduleSlug,
      progress_percent: nextPct,
      status,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,module_slug" },
  );

  if (error) return { ok: false as const, reason: error.message };
  return { ok: true as const };
}

export async function recordRemoteQuizAttempt(input: {
  moduleSlug: string;
  score: number;
  maxScore: number;
  passed: boolean;
}) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false as const, reason: "no_supabase" };

  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();
  if (userErr || !user) return { ok: false as const, reason: "unauthenticated" };

  const pct =
    input.maxScore > 0
      ? Math.round((input.score / input.maxScore) * 100)
      : 0;
  const synthetic = input.passed ? 100 : Math.min(95, Math.max(25, pct));

  const { error: insErr } = await supabase.from("quiz_attempts").insert({
    user_id: user.id,
    module_slug: input.moduleSlug,
    score: input.score,
    max_score: input.maxScore,
    passed: input.passed,
  });

  if (insErr) return { ok: false as const, reason: insErr.message };

  await upsertRemoteModuleProgress(input.moduleSlug, synthetic);
  return { ok: true as const };
}

export async function updateRemotePivotLang(lang: string) {
  if (!PIVOT_SET.has(lang as PivotCode)) {
    return { ok: false as const, reason: "invalid_lang" };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false as const, reason: "no_supabase" };

  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();
  if (userErr || !user) return { ok: false as const, reason: "unauthenticated" };

  const { error } = await supabase
    .from("profiles")
    .update({
      preferred_pivot_lang: lang,
      updated_at: new Date().toISOString(),
    })
    .eq("id", user.id);

  if (error) return { ok: false as const, reason: error.message };
  revalidatePath("/compte");
  return { ok: true as const };
}

/** Import des données localStorage (fusion max progression + insert tentatives) */
export async function mergeLocalProgressPayload(payload: LocalProgressSnapshot) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false as const, reason: "no_supabase" };

  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();
  if (userErr || !user) return { ok: false as const, reason: "unauthenticated" };

  const last = payload.lastActivity;
  if (last.slug && typeof last.progress === "number") {
    await upsertRemoteModuleProgress(last.slug, last.progress);
  }

  let count = 0;
  for (const q of payload.quizzes) {
    if (!q.slug || typeof q.score !== "number" || typeof q.max !== "number") {
      continue;
    }
    const { error } = await supabase.from("quiz_attempts").insert({
      user_id: user.id,
      module_slug: q.slug,
      score: q.score,
      max_score: q.max,
      passed: !!q.passed,
    });
    if (!error) count += 1;
    const pct = q.max > 0 ? Math.round((q.score / q.max) * 100) : 0;
    const synthetic = q.passed ? 100 : Math.min(95, Math.max(25, pct));
    await upsertRemoteModuleProgress(q.slug, synthetic);
  }

  revalidatePath("/compte");
  return { ok: true as const, importedQuizzes: count };
}
