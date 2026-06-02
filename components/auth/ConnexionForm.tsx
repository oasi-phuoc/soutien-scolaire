"use client";

import Link from "next/link";
import { signInAction } from "@/app/actions/auth";

export function ConnexionForm({ error, msg }: { error?: string; msg?: string }) {
  return (
    <>
      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          {error}
        </p>
      )}
      {msg && (
        <p className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-900 dark:bg-green-950/40 dark:text-green-100">
          {msg}
        </p>
      )}

      <form action={signInAction} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="identifier" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Identifiant
          </label>
          <input
            id="identifier"
            name="identifier"
            type="text"
            required
            autoComplete="username"
            placeholder="prenom.nom"
            className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 font-mono text-base outline-none focus:border-green-500 dark:border-zinc-600 dark:bg-zinc-950"
          />
        </div>

        <div>
          <div className="flex flex-wrap items-end justify-between gap-2">
            <label htmlFor="password" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Mot de passe
            </label>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base outline-none focus:border-green-500 dark:border-zinc-600 dark:bg-zinc-950"
          />
        </div>

        <button
          type="submit"
          className="min-h-12 rounded-xl bg-green-700 text-base font-semibold text-white dark:bg-green-600"
        >
          Se connecter
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="font-semibold text-green-800 underline dark:text-green-400">
          Créer un compte
        </Link>
      </p>
    </>
  );
}
