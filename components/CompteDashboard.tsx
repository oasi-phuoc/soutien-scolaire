"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { updateRemotePivotLang } from "@/app/actions/account";
import { signOutAction } from "@/app/actions/auth";
import { syncProgressToCloud } from "@/app/actions/progress";
import { SupabaseConfigHint } from "@/components/SupabaseConfigHint";
import { PIVOT_LANGS, type PivotCode } from "@/lib/pivot-langs";
import { loadProgress, saveProgress, setLevel } from "@/lib/progress/math-progress";
import { LEVEL_LABELS, type LevelKey } from "@/lib/scoring";

const STORAGE_KEY = "soutien:pivot";
const GENRE_KEY = "soutien-genre";
type GenreKey = "f" | "m";

export type CompteDashboardProps = {
  user: { id: string; email: string } | null;
  profilePivot: PivotCode | null;
  supabaseConfigured: boolean;
  isAdmin?: boolean;
};

export function CompteDashboard({
  user,
  profilePivot,
  supabaseConfigured,
  isAdmin,
}: CompteDashboardProps) {
  const [code, setCode] = useState<PivotCode>(
    profilePivot && PIVOT_LANGS.some((l) => l.code === profilePivot)
      ? profilePivot
      : "ar",
  );
  const [saved, setSaved] = useState(false);
  const [pivotMsg, setPivotMsg] = useState<string | null>(null);
  const [level, setLevelState] = useState<LevelKey>("base");
  const [genre, setGenreState] = useState<GenreKey>("f");
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "ok" | "error">("idle");
  const [syncError, setSyncError] = useState<string | null>(null);

  useEffect(() => {
    const prog = loadProgress();
    setLevelState(prog.level ?? "base");
    const g = localStorage.getItem(GENRE_KEY) as GenreKey | null;
    if (g === "f" || g === "m") setGenreState(g);
  }, []);

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
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("soutien-pivot-updated"));
    }
  }

  async function forceSync() {
    setSyncStatus("syncing");
    setSyncError(null);
    try {
      const progress = loadProgress();
      const result = await syncProgressToCloud(progress);
      if (result.ok) {
        setSyncStatus("ok");
        window.setTimeout(() => setSyncStatus("idle"), 3000);
      } else {
        setSyncStatus("error");
        setSyncError(result.error ?? "Erreur inconnue");
      }
    } catch (e) {
      setSyncStatus("error");
      setSyncError(e instanceof Error ? e.message : "Erreur inconnue");
    }
  }

  async function savePivot(next: PivotCode) {
    setPivotMsg(null);
    savePivotLocal(next);
    if (user && supabaseConfigured) {
      const r = await updateRemotePivotLang(next);
      setSaved(true);
      if (!r.ok) setPivotMsg(r.reason ?? "Erreur enregistrement langue");
      else setPivotMsg(null);
      window.setTimeout(() => setSaved(false), 2000);
    } else {
      setSaved(true);
      window.setTimeout(() => setSaved(false), 2000);
    }
  }

  return (
    <>
      <main className="mx-auto w-full max-w-xl flex-1 space-y-8 px-4 py-6 pb-32">
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
            <div className="mt-4 flex flex-wrap gap-3">
              {isAdmin && (
                <Link
                  href="/admin"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-4 font-semibold text-white hover:bg-blue-700"
                >
                  Tableau de bord admin
                </Link>
              )}
              <button
                type="button"
                onClick={() => void forceSync()}
                disabled={syncStatus === "syncing"}
                className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 font-semibold transition-colors disabled:opacity-60 ${
                  syncStatus === "ok"
                    ? "border-teal-500 bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400"
                    : syncStatus === "error"
                      ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400"
                      : "border-zinc-300 dark:border-zinc-600"
                }`}
              >
                {syncStatus === "syncing" && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
                {syncStatus === "ok" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>}
                {syncStatus === "syncing" ? "Synchronisation…" : syncStatus === "ok" ? "Synchronisé !" : "Sync progression"}
              </button>
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="min-h-11 rounded-xl border border-zinc-300 px-4 font-semibold dark:border-zinc-600"
                >
                  Déconnexion
                </button>
              </form>
            </div>
            {syncStatus === "error" && syncError && (
              <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-400">
                Erreur sync : {syncError}
              </p>
            )}
          </section>
        ) : supabaseConfigured ? (
          <section>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Compte</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Connecte-toi pour retrouver ta session sur cet appareil.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/connexion"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-700 px-6 font-semibold text-white dark:bg-green-600"
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

        <section aria-labelledby="level-heading">
          <h2 id="level-heading" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Niveau de validation
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Note minimale requise pour valider un sous-module ou module.
          </p>
          <div className="mt-4 flex overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
            {(["base", "moyen", "avance"] as LevelKey[]).map((lvl, i) => {
              const checked = level === lvl;
              const isLast = i === 2;
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    setLevelState(lvl);
                    const prog = loadProgress();
                    saveProgress(setLevel(prog, lvl));
                  }}
                  className={`flex-1 px-4 py-2 text-sm font-semibold transition-colors${isLast ? "" : " border-r border-zinc-200 dark:border-zinc-700"} ${
                    checked
                      ? "bg-[var(--color-accent-alg)] text-white"
                      : "bg-white text-zinc-500 hover:text-zinc-700 dark:bg-zinc-900 dark:hover:text-zinc-300"
                  }`}
                >
                  {LEVEL_LABELS[lvl]}
                </button>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="genre-heading">
          <h2 id="genre-heading" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Voix
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Voix utilisée pour les sons des mots en lecture.
          </p>
          <div className="mt-4 flex overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
            {([["f", "Féminine"], ["m", "Masculine"]] as [GenreKey, string][]).map(([key, label], i) => {
              const checked = genre === key;
              const isLast = i === 1;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setGenreState(key);
                    localStorage.setItem(GENRE_KEY, key);
                  }}
                  className={`flex-1 px-4 py-2 text-sm font-semibold transition-colors${isLast ? "" : " border-r border-zinc-200 dark:border-zinc-700"} ${
                    checked
                      ? "bg-[var(--color-accent-alg)] text-white"
                      : "bg-white text-zinc-500 hover:text-zinc-700 dark:bg-zinc-900 dark:hover:text-zinc-300"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="pivot-heading">
          <h2 id="pivot-heading" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Langue d’aide
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Choix enregistré sur cet appareil
            {user && supabaseConfigured ? " et sur ton profil (cloud)" : ""}.
          </p>
          <select
            value={code}
            onChange={e => void savePivot(e.target.value as PivotCode)}
            className="mt-4 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base outline-none focus:border-green-500 dark:border-zinc-600 dark:bg-zinc-950"
          >
            {PIVOT_LANGS.map((l) => (
              <option key={l.code} value={l.code}>{l.labelFr} — {l.label}</option>
            ))}
          </select>
          {saved ? (
            <p className="mt-2 text-sm text-green-700 dark:text-green-400" role="status">
              Choix enregistré.
            </p>
          ) : null}
          {pivotMsg ? (
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-200" role="status">
              {pivotMsg}
            </p>
          ) : null}
        </section>
      </main>
    </>
  );
}
