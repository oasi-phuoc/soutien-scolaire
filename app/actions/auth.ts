"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { buildLoginId, loginIdToEmail } from "@/lib/auth/identifier";
import { buildEleveClasse } from "@/lib/eleve-classe-types";

function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function signInAction(formData: FormData) {
  const identifier = String(formData.get("identifier") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/connexion?erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  // Try synthetic email first (new accounts), then raw identifier (existing accounts with real email)
  const synthEmail = loginIdToEmail(identifier);
  const { error: err1 } = await supabase.auth.signInWithPassword({ email: synthEmail, password });
  if (err1) {
    const isRealEmail = identifier.includes("@");
    if (isRealEmail) {
      const { error: err2 } = await supabase.auth.signInWithPassword({ email: identifier, password });
      if (err2) {
        redirect("/connexion?erreur=" + encodeURIComponent("Identifiant ou mot de passe incorrect."));
      }
    } else {
      redirect("/connexion?erreur=" + encodeURIComponent("Identifiant ou mot de passe incorrect."));
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signUpAction(
  formData: FormData,
): Promise<{ ok: true; loginId: string } | { ok: false; reason: string }> {
  const password = String(formData.get("password") ?? "");
  const nom = String(formData.get("nom") ?? "").trim();
  const prenom = String(formData.get("prenom") ?? "").trim();
  const classeType = String(formData.get("classe_type") ?? "").trim();
  const classeSuffix = String(formData.get("classe_num") ?? "").trim();
  const classe = classeType === "ancien"
    ? "Ancien élève"
    : buildEleveClasse(classeType, classeSuffix) ?? "";
  const adresse = String(formData.get("adresse") ?? "").trim();
  const npa = String(formData.get("npa") ?? "").trim();
  const localite = String(formData.get("localite") ?? "").trim();
  const telephone = String(formData.get("telephone") ?? "").trim();
  const langue = String(formData.get("langue") ?? "en").trim() || "en";

  if (!nom) return { ok: false, reason: "Le nom est obligatoire." };
  if (!prenom) return { ok: false, reason: "Le prénom est obligatoire." };
  if (!classe) return { ok: false, reason: "La classe est obligatoire." };
  if (!password || password.length < 8) return { ok: false, reason: "Le mot de passe doit contenir au moins 8 caractères." };

  const svc = createServiceClient();
  if (!svc) return { ok: false, reason: "Service role non configuré" };

  // Reject duplicate prénom + nom + classe
  const { data: existing } = await svc
    .from("profiles")
    .select("id")
    .ilike("nom", nom)
    .ilike("prenom", prenom)
    .eq("classe", classe)
    .limit(1);
  if (existing && existing.length > 0) {
    return { ok: false, reason: `Un compte avec le prénom « ${prenom} », le nom « ${nom} » et la classe « ${classe} » existe déjà. Contactez votre enseignant si c'est une erreur.` };
  }

  const baseId = buildLoginId(prenom, nom);
  if (!baseId) return { ok: false, reason: "Impossible de générer un identifiant à partir de ce prénom/nom." };

  // Find a unique loginId by trying baseId, baseId2, baseId3, ...
  let loginId = baseId;
  let email = loginIdToEmail(loginId);
  let created = false;

  for (let attempt = 0; attempt < 20; attempt++) {
    const { error } = await svc.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        nom,
        prenom,
        classe,
        langue,
        login_id: loginId,
        ...(adresse ? { adresse } : {}),
        ...(npa ? { npa } : {}),
        ...(localite ? { localite } : {}),
        ...(telephone ? { telephone } : {}),
      },
    });

    if (!error) {
      created = true;
      break;
    }

    const msg = error.message?.toLowerCase() ?? "";
    if (msg.includes("already") || msg.includes("duplicate") || error.status === 422) {
      const suffix = attempt + 2;
      loginId = `${baseId}${suffix}`;
      email = loginIdToEmail(loginId);
    } else {
      return { ok: false, reason: error.message };
    }
  }

  if (!created) return { ok: false, reason: "Cet identifiant est déjà utilisé, veuillez contacter l'administrateur." };

  return { ok: true, loginId };
}

export async function signOutAction() {
  const supabase = await createSupabaseActionClient();
  if (supabase) {
    await supabase.auth.signOut();
  }
  revalidatePath("/", "layout");
  redirect("/connexion");
}

export async function forgotPasswordAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/mot-de-passe-oublie?erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  if (!site) {
    redirect("/mot-de-passe-oublie?erreur=" + encodeURIComponent("Ajoute NEXT_PUBLIC_SITE_URL dans .env.local (URL publique du site)."));
  }

  const nextPath = "/reinitialiser-mot-de-passe";
  const redirectTo = `${site}/auth/callback?next=${encodeURIComponent(nextPath)}`;

  await supabase.auth.resetPasswordForEmail(email, { redirectTo });

  redirect(
    "/connexion?msg=" +
      encodeURIComponent(
        "Si cet e-mail correspond à un compte, tu recevras un lien pour choisir un nouveau mot de passe.",
      ),
  );
}

export async function updatePasswordAfterRecoveryAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  if (password !== confirm || password.length < 8) {
    redirect("/reinitialiser-mot-de-passe?erreur=" + encodeURIComponent("Les deux champs doivent être identiques ; au moins 8 caractères."));
  }

  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/reinitialiser-mot-de-passe?erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    redirect("/reinitialiser-mot-de-passe?erreur=" + encodeURIComponent(error.message));
  }

  revalidatePath("/", "layout");
  redirect("/?msg=" + encodeURIComponent("Mot de passe mis à jour."));
}

export async function verifyOtpAction(formData: FormData) {
  const phone = String(formData.get("phone") ?? "").trim();
  const token = String(formData.get("token") ?? "").trim();

  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/verification-otp?phone=" + encodeURIComponent(phone) + "&erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  const { error } = await supabase.auth.verifyOtp({ phone, token, type: "sms" });
  if (error) {
    redirect("/verification-otp?phone=" + encodeURIComponent(phone) + "&erreur=" + encodeURIComponent(error.message));
  }

  revalidatePath("/", "layout");
  redirect("/");
}
