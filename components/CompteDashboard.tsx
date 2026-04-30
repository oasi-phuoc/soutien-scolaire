"use client";

import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { mergeLocalProgressPayload, updateRemotePivotLang } from "@/app/actions/progress";
import { signOutAction } from "@/app/actions/auth";
import { SupabaseConfigHint } from "@/components/SupabaseConfigHint";
import { collectLocalProgressSnapshot } from "@/lib/progress-local";
import { PIVOT_LANGS, type PivotCode } from "@/lib/pivot-langs";

const STORAGE_KEY = "soutien:pivot";

export type CompteDashboardProps = {
  user: { id: string; email: string } | null;
  profilePivot: PivotCode | null;
  supabaseConfigured: boolean;
};

export function CompteDashboard({
  user,
  profilePivot,
  supabaseConfigured,
}: CompteDashboardProps) {
  const [code, setCode] = useState<PivotCode>(
    profilePivot && PIVOT_LANGS.some((l) => l.code === profilePivot)
      ? profilePivot
      : "ar",
  );
  const [saved, setSaved] = useState(false);
  const [syncMsg, setSyncMsg] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (
      profilePivot &&
      PIVOT_LANGS.some((l) => l.code === profilePivot)
    ) {
      setCode(profilePivot);
      localStorage.setItem(STORAGE_KEY, profilePivot);
      return;
    }
    const v = localStorage.getItem(STORAGE_KEY) as PivotCode | null;
    if (v && PIVOT_LANGS.some((l) => l.code === v)) setCode(v);
  }, [profilePivot]);

  function savePivotLocal(next: PivotCode) {
    setCode(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  async function savePivot(next: PivotCode) {
    savePivotLocal(next);
    if (user && supabaseConfigured) {
      const r = await updateRemotePivotLang(next);
      setSaved(true);
      if (!r.ok) setSyncMsg(r.reason ?? "Erreur enregistrement pivot");
      else setSyncMsg(null);
      window.setTimeout(() => setSaved(false), 2000);
    } else {
      setSaved(true);
      window.setTimeout(() => setSaved(false), 2000);
    }
  }

  function syncNow() {
    setSyncMsg(null);
    startTransition(async () => {
      const snap = collectLocalProgressSnapshot();
      const r = await mergeLocalProgressPayload(snap);
      if (r.ok) {
        setSyncMsg(`Synchronisation envoyée (${r.importedQuizzes} tentative(s) quiz importées).`);
      } else {
        const reasons: Record<string, string> = {
          no_supabase: "Supabase non configuré.",
          unauthenticated: "Connecte-toi d’abord.",
        };
        setSyncMsg(reasons[r.reason ?? ""] ?? r.reason ?? "Erreur inconnue");
      }
    });
  }

  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 space-y-8 px-4 py-6">
        <div className="flex items-center gap-3 pb-4">
          <Link
            href="/"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Retour accueil"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Réglages</h1>
        </div>
        {supabaseConfigured && user ? (
          <section aria-labelledby="compte-connected">
            <h2 id="compte-connected" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Compte connecté
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{user.email}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="min-h-11 rounded-xl border border-zinc-300 px-4 font-semibold dark:border-zinc-600"
                >
                  Déconnexion
                </button>
              </form>
              <button
                type="button"
                disabled={pending}
                onClick={syncNow}
                className="min-h-11 rounded-xl bg-teal-700 px-4 font-semibold text-white disabled:opacity-60 dark:bg-teal-600"
              >
                {pending ? "Envoi…" : "Synchroniser cette progression (mémo locale)"}
              </button>
            </div>
            {syncMsg && !saved ? (
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300" role="status">
                {syncMsg}
              </p>
            ) : null}
          </section>
        ) : supabaseConfigured ? (
          <section>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Compte</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Connecte-toi pour garder quiz et progression sur plusieurs appareils.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/connexion"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-6 font-semibold text-white dark:bg-teal-600"
              >
                Connexion
              </Link>
              <Link
                href="/inscription"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-6 font-semibold dark:border-zinc-600"
              >
                Créer un compte
              </Link>
            </div>
          </section>
        ) : (
          <div>
            <SupabaseConfigHint />
          </div>
        )}

        <section aria-labelledby="pivot-heading">
          <h2 id="pivot-heading" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Langue d’aide (pivot)
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Enregistré sur cet appareil
            {user && supabaseConfigured ? " et sur ton compte" : ""}. Les textes dans chaque langue pourront être ajoutés
            ensuite dans les modules.
          </p>
          <ul className="mt-4 space-y-2">
            {PIVOT_LANGS.map((l) => {
              const checked = code === l.code;
              const dir = l.code === "ar" || l.code === "fa" ? "rtl" : "ltr";
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    onClick={() => void savePivot(l.code)}
                    className={`flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 text-left transition-colors ${
                      checked
                        ? "border-teal-600 bg-teal-50 dark:border-teal-500 dark:bg-teal-950/40"
                        : "border-zinc-200 hover:border-teal-300 dark:border-zinc-700 dark:hover:border-teal-800"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                        checked ? "border-teal-600 bg-teal-600" : "border-zinc-400"
                      }`}
                      aria-hidden
                    >
                      {checked ? <span className="block h-2 w-2 rounded-full bg-white" /> : null}
                    </span>
                    <span dir={dir} lang={l.code} className="min-w-0 flex-1 text-lg">
                      {l.label}
                    </span>
                    <span className="shrink-0 text-sm text-zinc-500">{l.labelFr}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          {saved ? (
            <p className="mt-2 text-sm text-teal-700 dark:text-teal-400" role="status">
              Choix langue pivot enregistré.
            </p>
          ) : null}
        </section>
      </main>
    </>
  );
}
