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

  if (error) {
    if (error.code === "23514" && error.message.includes("preferred_pivot_lang")) {
      return {
        ok: false as const,
        reason: "La liste des langues du profil cloud doit être mise à jour dans Supabase.",
      };
    }
    return { ok: false as const, reason: "La langue est enregistrée sur cet appareil, mais la synchronisation cloud a échoué." };
  }
  revalidatePath("/compte");
  return { ok: true as const };
}

/** Met à jour le mot de passe de l'utilisateur connecté. */
export async function changePasswordAction(
  newPassword: string,
  confirmPassword: string,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (newPassword.length < 8)
    return { ok: false, reason: "Le mot de passe doit contenir au moins 8 caractères." };
  if (newPassword !== confirmPassword)
    return { ok: false, reason: "Les mots de passe ne correspondent pas." };

  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false, reason: "Supabase non configuré." };

  const { data: { user }, error: userErr } = await supabase.auth.getUser();
  if (userErr || !user) return { ok: false, reason: "Vous devez être connecté." };

  const { error: updateErr } = await supabase.auth.updateUser({ password: newPassword });
  if (updateErr) return { ok: false, reason: updateErr.message };

  return { ok: true };
}
