import Link from "next/link";
import { forgotPasswordAction } from "@/app/actions/auth";

type Props = { searchParams?: Promise<{ erreur?: string }> };

export default async function MotDePasseOubliePage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};

  return (
    <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Mot de passe oublié
      </h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        Indique ton e-mail : nous enverrons un lien pour créer un nouveau mot de passe (vérifie
        aussi les spams).
      </p>
      {q.erreur ? (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          {q.erreur}
        </p>
      ) : null}
      <form action={forgotPasswordAction} className="mt-6 flex flex-col gap-4">
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
        <button
          type="submit"
          className="min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white dark:bg-teal-600"
        >
          Envoyer le lien
        </button>
      </form>
      <p className="mt-6 text-center text-sm">
        <Link href="/connexion" className="font-semibold text-teal-800 underline dark:text-teal-400">
          Retour à la connexion
        </Link>
      </p>
    </main>
  );
}
