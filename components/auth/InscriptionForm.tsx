"use client";

import { useState } from "react";
import Link from "next/link";
import { signUpAction } from "@/app/actions/auth";
import { isPhoneFormat } from "@/lib/auth/identifier";

export function InscriptionForm({ error, msg }: { error?: string; msg?: string }) {
  const [phone, setPhone] = useState("");
  const phoneClean = phone.replace(/[\s\-\.\(\)]/g, "");
  const phoneValid = phone === "" || isPhoneFormat(phone);
  const phoneInvalid = phone !== "" && !isPhoneFormat(phone);

  const phoneBorderCls = phoneInvalid
    ? "border-red-400 bg-red-50 dark:bg-red-950/10 focus:border-red-400"
    : phoneClean && phoneValid
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
          <label htmlFor="email" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base outline-none focus:border-teal-500 dark:border-zinc-600 dark:bg-zinc-950"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Numéro de téléphone{" "}
            <span className="font-normal text-zinc-400 dark:text-zinc-500">(optionnel)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+41 79 123 45 67"
            className={`mt-1 min-h-12 w-full rounded-xl border px-3 text-base outline-none transition-colors ${phoneBorderCls}`}
          />
          {phoneInvalid && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">
              Format invalide. Utilisez le format international, ex : +41 79 123 45 67
            </p>
          )}
          {phoneValid && phone !== "" && (
            <p className="mt-1 text-xs text-teal-700 dark:text-teal-400">Numéro valide ✓</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Mot de passe <span className="text-red-500">*</span>
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

        <button
          type="submit"
          className="min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white dark:bg-teal-600"
        >
          M&apos;inscrire
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
