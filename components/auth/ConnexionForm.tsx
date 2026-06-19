"use client";

import Link from "next/link";
import { useState } from "react";
import { signInAction } from "@/app/actions/auth";

const STEPS = [
  {
    num: "1",
    title: "Autoriser les sources inconnues",
    body: "Paramètres → Applications → Mon fichier (ou Chrome) → Autoriser depuis cette source.",
  },
  {
    num: "2",
    title: "Télécharger le fichier",
    body: 'Appuie sur le bouton ci-dessous. Le fichier "app.apk" se télécharge dans le dossier Téléchargements.',
  },
  {
    num: "3",
    title: "Installer l'application",
    body: "Ouvre Mon fichier → Téléchargements → app.apk → Installer → Installer quand même → Ouvrir.",
  },
];

function InstallModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl dark:bg-zinc-900 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📱</span>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Installer l&apos;application</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Steps */}
        <ol className="mb-6 space-y-4">
          {STEPS.map((s) => (
            <li key={s.num} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                {s.num}
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{s.title}</p>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Note iOS */}
        <p className="mb-5 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700 dark:bg-amber-950/30 dark:text-amber-400">
          ⚠️ Android uniquement. Sur iPhone, utilise l&apos;application via Safari.
        </p>

        {/* Download button */}
        <a
          href="/api/download-app"
          download="soutien-scolaire.apk"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-700 text-base font-semibold text-white active:scale-95 dark:bg-green-600"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Télécharger l&apos;APK
        </a>
      </div>
    </div>
  );
}

export function ConnexionForm({ error, msg }: { error?: string; msg?: string }) {
  const [showInstall, setShowInstall] = useState(false);

  return (
    <>
      {showInstall && <InstallModal onClose={() => setShowInstall(false)} />}

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

      {/* Download app button */}
      <div className="mt-6 border-t border-zinc-100 pt-5 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => setShowInstall(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" />
          </svg>
          Télécharger l&apos;application Android
        </button>
      </div>
    </>
  );
}
