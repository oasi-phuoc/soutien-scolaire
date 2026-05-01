import Link from "next/link";
import { signInWithPasswordAction, continueAsGuestAction } from "@/app/actions/auth";

type Props = { searchParams?: Promise<{ erreur?: string; msg?: string }> };

export default async function ConnexionPage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};

  return (
    <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Connexion
      </h1>
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
      <form action={signInWithPasswordAction} className="mt-6 flex flex-col gap-4">
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
          <div className="flex flex-wrap items-end justify-between gap-2">
            <label htmlFor="password" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Mot de passe
            </label>
            <Link
              href="/mot-de-passe-oublie"
              className="text-xs font-medium text-teal-700 underline underline-offset-2 dark:text-teal-400"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base dark:border-zinc-600 dark:bg-zinc-950"
          />
        </div>
        <button
          type="submit"
          className="min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white dark:bg-teal-600"
        >
          Se connecter
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="font-semibold text-teal-800 underline dark:text-teal-400">
          Créer un compte
        </Link>
      </p>

      <div className="mt-5 border-t border-zinc-200 pt-5 text-center dark:border-zinc-700">
        <form action={continueAsGuestAction}>
          <button
            type="submit"
            className="text-sm text-zinc-400 underline underline-offset-2 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            Continuer sans compte →
          </button>
        </form>
      </div>
    </main>
  );
}
