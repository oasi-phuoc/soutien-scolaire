"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isPivotCode } from "@/lib/pivot-langs";

export type MyProfile = {
  id: string;
  email: string;
  loginId: string | null;
  role: "eleve" | "prof" | "admin";
  prenom: string | null;
  nom: string | null;
  classe: string | null;
  adresse: string | null;
  npa: string | null;
  localite: string | null;
  telephone: string | null;
  langue: string | null;
};

export type MyProfileInput = {
  prenom?: string;
  nom?: string;
  classe?: string;
  adresse?: string;
  npa?: string;
  localite?: string;
  telephone?: string;
  langue?: string;
};

/** Charge le profil de l'utilisateur connecté. */
export async function getMyProfileAction(): Promise<{ ok: true; profile: MyProfile } | { ok: false; reason: string }> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false, reason: "Supabase non configuré." };

  const { data: { user }, error: userErr } = await supabase.auth.getUser();
  if (userErr || !user) return { ok: false, reason: "Vous devez être connecté." };

  const [{ data: profile, error }, { data: role }] = await Promise.all([
    supabase
      .from("profiles")
      .select("login_id, prenom, nom, classe, adresse, npa, localite, telephone, langue, role")
      .eq("id", user.id)
      .maybeSingle(),
    supabase.rpc("get_my_role"),
  ]);

  if (error) return { ok: false, reason: error.message };

  const resolvedRole = role === "admin" || role === "prof" ? role : "eleve";

  return {
    ok: true,
    profile: {
      id: user.id,
      email: user.email ?? "",
      loginId: profile?.login_id ?? null,
      role: resolvedRole,
      prenom: profile?.prenom ?? null,
      nom: profile?.nom ?? null,
      classe: profile?.classe ?? null,
      adresse: profile?.adresse ?? null,
      npa: profile?.npa ?? null,
      localite: profile?.localite ?? null,
      telephone: profile?.telephone ?? null,
      langue: profile?.langue ?? null,
    },
  };
}

/** Met à jour le profil de l'utilisateur connecté (RLS). */
export async function updateMyProfileAction(
  data: MyProfileInput,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { ok: false, reason: "Supabase non configuré." };

  const { data: { user }, error: userErr } = await supabase.auth.getUser();
  if (userErr || !user) return { ok: false, reason: "Vous devez être connecté." };

  const payload: Record<string, string | null> = {};
  if (data.prenom !== undefined) payload.prenom = data.prenom.trim() || null;
  if (data.nom !== undefined) payload.nom = data.nom.trim() || null;
  if (data.classe !== undefined) payload.classe = data.classe.trim() || null;
  if (data.adresse !== undefined) payload.adresse = data.adresse.trim() || null;
  if (data.npa !== undefined) payload.npa = data.npa.trim() || null;
  if (data.localite !== undefined) payload.localite = data.localite.trim() || null;
  if (data.telephone !== undefined) payload.telephone = data.telephone.trim() || null;
  if (data.langue !== undefined) payload.langue = data.langue.trim() || null;

  if (Object.keys(payload).length === 0) return { ok: true };

  const { error } = await supabase
    .from("profiles")
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq("id", user.id);

  if (error) return { ok: false, reason: error.message };

  revalidatePath("/compte");
  revalidatePath("/compte/mon-compte");
  return { ok: true };
}

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

  revalidatePath("/compte/mon-compte");
  return { ok: true };
}
