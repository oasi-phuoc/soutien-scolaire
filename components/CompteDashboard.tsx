"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { updateRemotePivotLang, changePasswordAction } from "@/app/actions/account";
import { signOutAction } from "@/app/actions/auth";
import { syncProgressToCloud } from "@/app/actions/progress";
import { SupabaseConfigHint } from "@/components/SupabaseConfigHint";
import { PIVOT_LANGS, type PivotCode } from "@/lib/pivot-langs";
import { loadProgress, saveProgress, setLevel } from "@/lib/progress/math-progress";
import { LEVEL_LABELS, type LevelKey } from "@/lib/scoring";

const STORAGE_KEY = "soutien:pivot";
const GENRE_KEY = "soutien-genre";
type GenreKey = "f" | "m";

function IconRefresh({ spinning = false }: { spinning?: boolean }) {
  return (
    <svg className={spinning ? "animate-spin" : ""} width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12a9 9 0 0 1-15.5 6.2" />
      <path d="M3 12A9 9 0 0 1 18.5 5.8" />
      <path d="M18 2v4h4" />
      <path d="M6 22v-4H2" />
    </svg>
  );
}

function HelpLanguageSelect({ value, onChange }: { value: PivotCode; onChange: (value: PivotCode) => void }) {
  const [open, setOpen] = useState(false);
  const selected = PIVOT_LANGS.find((l) => l.code === value) ?? PIVOT_LANGS[0]!;

  return (
    <div className="relative mt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex min-h-12 w-full items-center justify-between rounded-[24px] border bg-white px-4 text-left text-base text-[var(--color-accent-alg)] shadow-sm outline-none transition-colors dark:bg-zinc-950 ${
          open ? "border-[var(--color-accent-alg)] ring-2 ring-[var(--color-accent-alg)]/15" : "border-[var(--color-accent-alg)]/40"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected.labelFr} - {selected.label}</span>
        <svg className={`transition-transform ${open ? "rotate-180" : ""}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute bottom-full z-20 mb-1 max-h-64 w-full overflow-y-auto rounded-t-[24px] rounded-b-md border border-[var(--color-accent-alg)]/15 bg-white py-2 shadow-lg dark:bg-zinc-950" role="listbox">
          {PIVOT_LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                onChange(l.code);
                setOpen(false);
              }}
              className={`block w-full px-5 py-2 text-left text-sm transition-colors ${
                l.code === value
                  ? "font-semibold text-[var(--color-accent-alg)]"
                  : "text-zinc-700 hover:bg-blue-50 dark:text-zinc-200 dark:hover:bg-blue-950/30"
              }`}
              role="option"
              aria-selected={l.code === value}
            >
              {l.labelFr} - {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
  const [pwdOpen, setPwdOpen] = useState(false);
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdStatus, setPwdStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [pwdMsg, setPwdMsg] = useState<string | null>(null);

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

  async function handlePasswordChange() {
    setPwdStatus("loading");
    setPwdMsg(null);
    const result = await changePasswordAction(newPwd, confirmPwd);
    if (result.ok) {
      setPwdStatus("ok");
      setPwdMsg("Mot de passe mis à jour.");
      setNewPwd("");
      setConfirmPwd("");
      window.setTimeout(() => { setPwdStatus("idle"); setPwdMsg(null); setPwdOpen(false); }, 2500);
    } else {
      setPwdStatus("error");
      setPwdMsg(result.reason);
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
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {isAdmin && (
                <Link
                  href="/admin"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-4 font-semibold text-white hover:bg-blue-700"
                >
                  Admin
                </Link>
              )}
              <button
                type="button"
                onClick={() => void forceSync()}
                disabled={syncStatus === "syncing"}
                aria-label="Synchroniser la progression"
                title="Synchroniser la progression"
                className={`order-last inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border text-[0px] transition-colors disabled:opacity-60 ${
                  syncStatus === "ok"
                    ? "border-teal-500 bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400"
                    : syncStatus === "error"
                      ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400"
                      : "border-zinc-300 text-[var(--color-accent-alg)] hover:bg-blue-50 dark:border-zinc-600 dark:hover:bg-blue-950/30"
                }`}
              >
                {syncStatus !== "ok" && <IconRefresh spinning={syncStatus === "syncing"} />}
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

        {supabaseConfigured && user && (
          <section aria-labelledby="pwd-heading">
            <button
              type="button"
              onClick={() => { setPwdOpen((v) => !v); setPwdStatus("idle"); setPwdMsg(null); }}
              className="flex w-full items-center justify-between text-left"
            >
              <h2 id="pwd-heading" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Changer le mot de passe
              </h2>
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`shrink-0 text-zinc-400 transition-transform ${pwdOpen ? "rotate-90" : ""}`}
                aria-hidden
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {pwdOpen && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    value={newPwd}
                    onChange={(e) => { setNewPwd(e.target.value); setPwdMsg(null); }}
                    autoComplete="new-password"
                    className="min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-base outline-none focus:border-[var(--color-accent-alg)] focus:ring-2 focus:ring-[var(--color-accent-alg)]/15 dark:border-zinc-600 dark:bg-zinc-900"
                  />
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Au moins 8 caractères.</p>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    value={confirmPwd}
                    onChange={(e) => { setConfirmPwd(e.target.value); setPwdMsg(null); }}
                    autoComplete="new-password"
                    className={`min-h-12 w-full rounded-xl border bg-white px-4 text-base outline-none focus:ring-2 dark:bg-zinc-900 ${
                      confirmPwd.length > 0 && confirmPwd !== newPwd
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                        : "border-zinc-300 focus:border-[var(--color-accent-alg)] focus:ring-[var(--color-accent-alg)]/15 dark:border-zinc-600"
                    }`}
                  />
                  {confirmPwd.length > 0 && confirmPwd !== newPwd && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                      Les mots de passe ne correspondent pas.
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => void handlePasswordChange()}
                  disabled={pwdStatus === "loading" || newPwd.length < 8 || newPwd !== confirmPwd}
                  className="min-h-12 w-full rounded-xl bg-[var(--color-accent-alg)] px-4 text-base font-semibold text-white transition-opacity disabled:opacity-50"
                >
                  {pwdStatus === "loading" ? "Enregistrement…" : "Enregistrer"}
                </button>
                {pwdMsg && (
                  <p
                    className={`text-sm ${pwdStatus === "ok" ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                    role="status"
                  >
                    {pwdMsg}
                  </p>
                )}
              </div>
            )}
          </section>
        )}

        <section aria-labelledby="pivot-heading">
          <h2 id="pivot-heading" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Langue d'aide
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Choix enregistré sur cet appareil
            {user && supabaseConfigured ? " et sur ton profil (cloud)" : ""}.
          </p>
          <HelpLanguageSelect value={code} onChange={(next) => void savePivot(next)} />
          <select
            value={code}
            onChange={e => void savePivot(e.target.value as PivotCode)}
            className="hidden"
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
      </main>
    </>
  );
}
