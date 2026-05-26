"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { isPhoneFormat, normalizePhone } from "@/lib/auth/identifier";

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/connexion?erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    redirect("/connexion?erreur=" + encodeURIComponent(error.message));
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signUpAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const rawPhone = String(formData.get("phone") ?? "").trim();

  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/inscription?erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  // Validate phone format if provided
  if (rawPhone && !isPhoneFormat(rawPhone)) {
    redirect("/inscription?erreur=" + encodeURIComponent("Format de téléphone invalide. Utilisez le format international, ex : +41791234567"));
  }

  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  const emailRedirect = site.length > 0 ? `${site}/auth/callback?next=/compte` : undefined;

  const userData = rawPhone ? { phone: normalizePhone(rawPhone) } : undefined;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      ...(emailRedirect != null ? { emailRedirectTo: emailRedirect } : {}),
      ...(userData ? { data: userData } : {}),
    },
  });

  if (error) {
    redirect("/inscription?erreur=" + encodeURIComponent(error.message));
  }

  revalidatePath("/", "layout");
  if (data.session) {
    redirect("/");
  }
  redirect("/inscription?confirmed=1&email=" + encodeURIComponent(email));
}

export async function resendConfirmationAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/inscription?confirmed=1&email=" + encodeURIComponent(email) + "&erreur=" + encodeURIComponent("Supabase non configuré"));
  }
  await supabase.auth.resend({ type: "signup", email });
  redirect("/inscription?confirmed=1&email=" + encodeURIComponent(email) + "&msg=" + encodeURIComponent("E-mail renvoyé."));
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
