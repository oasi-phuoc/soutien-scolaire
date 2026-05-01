"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createSupabaseActionClient } from "@/lib/supabase/server";

export async function signInWithPasswordAction(formData: FormData) {
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

export async function signUpWithPasswordAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect("/inscription?erreur=" + encodeURIComponent("Supabase non configuré"));
  }

  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  const emailRedirect =
    site.length > 0 ? `${site}/auth/callback?next=/compte` : undefined;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options:
      emailRedirect != null ? { emailRedirectTo: emailRedirect } : undefined,
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
        "Si la confirmation par e-mail est activée dans Supabase, ouvre ton message et valide avant de te connecter.",
      ),
  );
}

export async function signOutAction() {
  const supabase = await createSupabaseActionClient();
  if (supabase) {
    await supabase.auth.signOut();
  }
  (await cookies()).delete("guest_mode");
  revalidatePath("/", "layout");
  redirect("/connexion");
}

export async function continueAsGuestAction() {
  (await cookies()).set("guest_mode", "1", {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });
  redirect("/");
}

/** Lien envoyé par e-mail — redirectTo passe par `/auth/callback`. */
export async function forgotPasswordAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect(
      "/mot-de-passe-oublie?erreur=" +
        encodeURIComponent("Supabase non configuré"),
    );
  }

  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  if (!site) {
    redirect(
      "/mot-de-passe-oublie?erreur=" +
        encodeURIComponent(
          "Ajoute NEXT_PUBLIC_SITE_URL dans .env.local (URL publique du site).",
        ),
    );
  }

  const nextPath = "/reinitialiser-mot-de-passe";
  const redirectTo = `${site}/auth/callback?next=${encodeURIComponent(nextPath)}`;

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  });

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
    redirect(
      "/reinitialiser-mot-de-passe?erreur=" +
        encodeURIComponent(
          "Les deux champs doivent être identiques ; au moins 8 caractères.",
        ),
    );
  }

  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    redirect(
      "/reinitialiser-mot-de-passe?erreur=" +
        encodeURIComponent("Supabase non configuré"),
    );
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    redirect(
      "/reinitialiser-mot-de-passe?erreur=" +
        encodeURIComponent(error.message),
    );
  }

  revalidatePath("/", "layout");
  redirect("/?msg=" + encodeURIComponent("Mot de passe mis à jour."));
}
