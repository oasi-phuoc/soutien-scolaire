"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { isEmailFormat, isPhoneFormat, normalizePhone } from "@/lib/auth/identifier";

function parseIdentifier(raw: string): { type: "email" | "phone"; value: string } | null {
  const s = raw.trim();
  if (isEmailFormat(s)) return { type: "email", value: s };
  if (isPhoneFormat(s)) return { type: "phone", value: normalizePhone(s) };
  return null;
}

export async function signInAction(formData: FormData) {
  const raw = String(formData.get("identifier") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const parsed = parseIdentifier(raw);

  if (!parsed) {
    redirect("/connexion?erreur=" + encodeURIComponent("Entrez un e-mail ou un numéro de téléphone valide."));
  }

  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/connexion?erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  if (parsed.type === "phone") {
    const { error } = await supabase.auth.signInWithOtp({ phone: parsed.value });
    if (error) {
      redirect("/connexion?erreur=" + encodeURIComponent(error.message));
    }
    redirect("/verification-otp?phone=" + encodeURIComponent(parsed.value));
  }

  const { error } = await supabase.auth.signInWithPassword({ email: parsed.value, password });
  if (error) {
    redirect("/connexion?erreur=" + encodeURIComponent(error.message));
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signUpAction(formData: FormData) {
  const raw = String(formData.get("identifier") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const parsed = parseIdentifier(raw);

  if (!parsed) {
    redirect("/inscription?erreur=" + encodeURIComponent("Entrez un e-mail ou un numéro de téléphone valide."));
  }

  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/inscription?erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  if (parsed.type === "phone") {
    const { error } = await supabase.auth.signInWithOtp({ phone: parsed.value });
    if (error) {
      redirect("/inscription?erreur=" + encodeURIComponent(error.message));
    }
    redirect("/verification-otp?phone=" + encodeURIComponent(parsed.value));
  }

  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  const emailRedirect = site.length > 0 ? `${site}/auth/callback?next=/compte` : undefined;

  const { data, error } = await supabase.auth.signUp({
    email: parsed.value,
    password,
    options: emailRedirect != null ? { emailRedirectTo: emailRedirect } : undefined,
  });

  if (error) {
    redirect("/inscription?erreur=" + encodeURIComponent(error.message));
  }

  revalidatePath("/", "layout");
  if (data.session) {
    redirect("/");
  }
  redirect(
    "/inscription?msg=" +
      encodeURIComponent(
        "Compte créé ! Si la confirmation par e-mail est activée, vérifie ta boîte de réception avant de te connecter.",
      ),
  );
}

export async function verifyOtpAction(formData: FormData) {
  const phone = String(formData.get("phone") ?? "").trim();
  const token = String(formData.get("token") ?? "").trim();

  if (!phone || !token) {
    redirect("/verification-otp?phone=" + encodeURIComponent(phone) + "&erreur=" + encodeURIComponent("Code manquant."));
  }

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
