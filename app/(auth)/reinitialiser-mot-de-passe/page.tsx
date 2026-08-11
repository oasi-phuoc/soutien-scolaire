import Link from "next/link";
import { redirect } from "next/navigation";
import { updatePasswordAfterRecoveryAction } from "@/app/actions/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Props = { searchParams?: Promise<{ erreur?: string }> };

export default async function ReinitialiserMotDePassePage({
  searchParams,
}: Props) {
  const q = (await searchParams) ?? {};
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect(
      "/connexion?erreur=" +
        encodeURIComponent("Configuration Supabase manquante."),
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      "/connexion?erreur=" +
        encodeURIComponent(
          "Lien expiré ou déjà utilisé. Redemande un lien depuis « mot de passe oublié ».",
        ),
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-4">
    <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Nouveau mot de passe
      </h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        Choisis un mot de passe solide ; au moins 8 caractères.
      </p>
      {q.erreur ? (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          {q.erreur}
        </p>
      ) : null}
      <form
        action={updatePasswordAfterRecoveryAction}
        className="mt-6 flex flex-col gap-4"
      >
        <div>
          <label htmlFor="password" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Nouveau mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base dark:border-zinc-600 dark:bg-zinc-950"
          />
        </div>
        <div>
          <label htmlFor="confirm" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Confirmer
          </label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base dark:border-zinc-600 dark:bg-zinc-950"
          />
        </div>
        <button
          type="submit"
          className="min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white dark:bg-teal-600"
        >
          Enregistrer
        </button>
      </form>
      <p className="mt-6 text-center text-sm">
        <Link href="/connexion" className="font-semibold text-teal-800 underline dark:text-teal-400">
          Annuler → connexion
        </Link>
      </p>
    </main>
    </div>
  );
}
