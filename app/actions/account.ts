"use server";

import { createClient } from "@supabase/supabase-js";
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

/** Vérifie l'ancien mot de passe puis met à jour avec le nouveau. */
export async function changePasswordAction(
  oldPassword: string,
  newPassword: string,
  confirmPassword: string,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (newPassword.length < 8)
    return { ok: false, reason: "Le nouveau mot de passe doit contenir au moins 8 caractères." };
  if (newPassword !== confirmPassword)
    return { ok: false, reason: "Les deux mots de passe ne correspondent pas." };

  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false, reason: "Supabase non configuré." };

  const { data: { user }, error: userErr } = await supabase.auth.getUser();
  if (userErr || !user?.email) return { ok: false, reason: "Vous devez être connecté." };

  // Verify old password using an independent (non-session) client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return { ok: false, reason: "Configuration manquante." };
  const verifyClient = createClient(url, anon, { auth: { autoRefreshToken: false, persistSession: false } });
  const { error: verifyErr } = await verifyClient.auth.signInWithPassword({
    email: user.email,
    password: oldPassword,
  });
  if (verifyErr) return { ok: false, reason: "Ancien mot de passe incorrect." };

  const { error: updateErr } = await supabase.auth.updateUser({ password: newPassword });
  if (updateErr) return { ok: false, reason: updateErr.message };

  return { ok: true };
}
