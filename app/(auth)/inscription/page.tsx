import Link from "next/link";
import { signUpWithPasswordAction } from "@/app/actions/auth";

type Props = {
  searchParams?: Promise<{ erreur?: string; msg?: string }>;
};

export default async function InscriptionPage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};

  return (
    <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Créer un compte
      </h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        Après inscription, vérifie ton e-mail si la confirmation est activée dans Supabase.
      </p>
      {q.erreur ? (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          {q.erreur}
        </p>
      ) : null}
      {q.msg ? (
        <p className="mt-4 rounded-lg bg-teal-50 px-3 py-2 text-sm text-teal-900 dark:bg-teal-950/40 dark:text-teal-100">
          {q.msg}
        </p>
      ) : null}
      <form action={signUpWithPasswordAction} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base dark:border-zinc-600 dark:bg-zinc-950"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Mot de passe
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
          <p className="mt-1 text-xs text-zinc-500">Au moins 8 caractères.</p>
        </div>
        <button
          type="submit"
          className="min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white dark:bg-teal-600"
        >
          M’inscrire
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Déjà un compte ?{" "}
        <Link href="/connexion" className="font-semibold text-teal-800 underline dark:text-teal-400">
          Connexion
        </Link>
      </p>
    </main>
  );
}
