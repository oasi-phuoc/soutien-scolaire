"use client";

import { useState } from "react";
import Link from "next/link";
import { signUpAction } from "@/app/actions/auth";
import { getIdentifierStatus } from "@/lib/auth/identifier";

export function InscriptionForm({ error, msg }: { error?: string; msg?: string }) {
  const [identifier, setIdentifier] = useState("");
  const status = getIdentifierStatus(identifier);
  const isPhone = status === "phone";
  const isInvalid = status === "invalid";
  const canSubmit = status === "email" || status === "phone";

  const inputCls = isInvalid
    ? "border-red-400 bg-red-50 dark:bg-red-950/10 focus:border-red-400"
    : canSubmit
      ? "border-teal-400 bg-white dark:bg-zinc-950 focus:border-teal-500"
      : "border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950 focus:border-teal-500";

  return (
    <>
      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          {error}
        </p>
      )}
      {msg && (
        <p className="mt-4 rounded-lg bg-teal-50 px-3 py-2 text-sm text-teal-900 dark:bg-teal-950/40 dark:text-teal-100">
          {msg}
        </p>
      )}

      <form action={signUpAction} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="identifier" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            E-mail ou numéro de téléphone
          </label>
          <input
            id="identifier"
            name="identifier"
            type="text"
            inputMode="email"
            autoComplete="email tel"
            required
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
            placeholder="exemple@email.com ou +41791234567"
            className={`mt-1 min-h-12 w-full rounded-xl border px-3 text-base outline-none transition-colors ${inputCls}`}
          />
          {isInvalid && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">
              Entrez un e-mail valide ou un numéro international (ex : +41 79 123 45 67)
            </p>
          )}
          {status === "phone" && (
            <p className="mt-1 text-xs text-teal-700 dark:text-teal-400">
              Numéro valide ✓ — un code SMS vous sera envoyé pour confirmer
            </p>
          )}
        </div>

        {!isPhone && (
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
              className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base outline-none focus:border-teal-500 dark:border-zinc-600 dark:bg-zinc-950"
            />
            <p className="mt-1 text-xs text-zinc-500">Au moins 8 caractères.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          className="min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white transition-opacity disabled:opacity-40 dark:bg-teal-600"
        >
          {isPhone ? "Continuer avec ce numéro" : "M'inscrire"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Déjà un compte ?{" "}
        <Link href="/connexion" className="font-semibold text-teal-800 underline dark:text-teal-400">
          Connexion
        </Link>
      </p>
    </>
  );
}
