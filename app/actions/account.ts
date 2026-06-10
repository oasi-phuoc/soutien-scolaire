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

export async function changePasswordAction(oldPassword: string, newPassword: string, confirmPassword: string) {
  if (!oldPassword || !newPassword || !confirmPassword) {
    return { ok: false as const, reason: "Tous les champs sont requis." };
  }
  if (newPassword !== confirmPassword) {
    return { ok: false as const, reason: "Les mots de passe ne correspondent pas." };
  }
  if (newPassword.length < 6) {
    return { ok: false as const, reason: "Le nouveau mot de passe doit contenir au moins 6 caractères." };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false as const, reason: "Supabase non configuré." };

  const { data: { user }, error: userErr } = await supabase.auth.getUser();
  if (userErr || !user?.email) return { ok: false as const, reason: "Non connecté." };

  // Verify old password by re-signing in
  const { error: signInErr } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: oldPassword,
  });
  if (signInErr) return { ok: false as const, reason: "Ancien mot de passe incorrect." };

  const { error: updateErr } = await supabase.auth.updateUser({ password: newPassword });
  if (updateErr) return { ok: false as const, reason: updateErr.message };

  return { ok: true as const };
}
