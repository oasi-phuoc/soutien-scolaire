"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isPivotCode } from "@/lib/pivot-langs";

/** Enregistre la langue pivot dans `profiles` (RLS + utilisateur connecté). */
export async function updateRemotePivotLang(lang: string) {
  if (!isPivotCode(lang)) {
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
