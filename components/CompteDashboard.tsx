"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { updateRemotePivotLang, changePasswordAction } from "@/app/actions/account";
import { signOutAction } from "@/app/actions/auth";
import { syncProgressToCloud } from "@/app/actions/progress";
import { OfflineSettings } from "@/components/OfflineSettings";
import { SupabaseConfigHint } from "@/components/SupabaseConfigHint";
import { PIVOT_LANGS, type PivotCode } from "@/lib/pivot-langs";
import { loadProgress, saveProgress, setLevel } from "@/lib/progress/math-progress";
import { LEVEL_LABELS, type LevelKey } from "@/lib/scoring";

const STORAGE_KEY = "soutien:pivot";
const GENRE_KEY = "soutien-genre";
type GenreKey = "f" | "m";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-semibold text-[var(--color-text-primary)]">{children}</h2>
  );
}

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
        className={`flex min-h-12 w-full items-center justify-between rounded-[24px] border bg-white px-4 text-left text-base text-[var(--color-theme)] shadow-sm outline-none transition-colors dark:bg-zinc-950 ${
          open ? "border-[var(--color-theme)] ring-2 ring-[var(--color-theme)]/15" : "border-[var(--color-theme)]/40"
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
        <div className="absolute bottom-full z-20 mb-1 max-h-64 w-full overflow-y-auto rounded-t-[24px] rounded-b-md border border-[var(--color-theme)]/15 bg-white py-2 shadow-lg dark:bg-zinc-950" role="listbox">
          {PIVOT_LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => { onChange(l.code); setOpen(false); }}
              className={`block w-full px-5 py-2 text-left text-sm transition-colors ${
                l.code === value
                  ? "font-semibold text-[var(--color-theme)]"
                  : "text-zinc-700 hover:bg-[var(--color-theme-light)] dark:text-zinc-200 dark:hover:bg-[var(--color-theme)]/10"
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

export function CompteDashboard({ user, profilePivot, supabaseConfigured, isAdmin }: CompteDashboardProps) {
  const [code, setCode] = useState<PivotCode>(
    profilePivot && PIVOT_LANGS.some((l) => l.code === profilePivot) ? profilePivot : "ar",
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
    if (profilePivot && PIVOT_LANGS.some((l) => l.code === profilePivot)) {
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
    if (typeof window !== "undefined") window.dispatchEvent(new Event("soutien-pivot-updated"));
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
    <main className="mx-auto w-full max-w-xl flex-1 space-y-4 px-4 pt-8 pb-32">
      {/* Header */}
      <div className="relative overflow-hidden rounded-[var(--radius-lg)] px-5 py-4" style={{ background: "color-mix(in oklch, var(--color-theme) 11%, white)" }}>
        <div className="pointer-events-none absolute -bottom-3 -right-4 text-[var(--color-theme)]" aria-hidden>
          <svg width="108" height="90" viewBox="0 0 100 85" fill="none">
            <line x1="8" y1="17" x2="92" y2="17" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.2"/>
            <line x1="8" y1="17" x2="58" y2="17" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.45"/>
            <circle cx="58" cy="17" r="9" fill="white" stroke="currentColor" strokeWidth="2.5" opacity="0.68"/>
            <line x1="8" y1="43" x2="92" y2="43" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.2"/>
            <line x1="8" y1="43" x2="32" y2="43" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.45"/>
            <circle cx="32" cy="43" r="9" fill="white" stroke="currentColor" strokeWidth="2.5" opacity="0.68"/>
            <line x1="8" y1="69" x2="92" y2="69" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.2"/>
            <line x1="8" y1="69" x2="72" y2="69" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.45"/>
            <circle cx="72" cy="69" r="9" fill="white" stroke="currentColor" strokeWidth="2.5" opacity="0.68"/>
          </svg>
        </div>
        <div className="relative z-10 flex items-center gap-3">
          <Link
            href="/"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour accueil"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-theme)]">Compte</p>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">Réglages</h1>
          </div>
        </div>
      </div>

      {/* Compte */}
      <Card>
        {supabaseConfigured && user ? (
          <>
            <SectionTitle>Compte connecté</SectionTitle>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{user.email}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {isAdmin && (
                <Link href="/admin" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-theme)] px-4 font-semibold text-white hover:opacity-90">
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
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : syncStatus === "error"
                      ? "border-red-400 bg-red-50 text-red-700"
                      : "border-zinc-300 text-[var(--color-theme)] hover:bg-[var(--color-theme-light)]"
                }`}
              >
                {syncStatus !== "ok" && <IconRefresh spinning={syncStatus === "syncing"} />}
                {syncStatus === "ok" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>}
                {syncStatus === "syncing" ? "Synchronisation…" : syncStatus === "ok" ? "Synchronisé !" : "Sync progression"}
              </button>
              <form action={signOutAction}>
                <button type="submit" className="min-h-11 rounded-xl border border-zinc-300 px-4 font-semibold">
                  Déconnexion
                </button>
              </form>
            </div>
            {syncStatus === "error" && syncError && (
              <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                Erreur sync : {syncError}
              </p>
            )}
          </>
        ) : supabaseConfigured ? (
          <>
            <SectionTitle>Compte</SectionTitle>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Connecte-toi pour retrouver ta session sur cet appareil.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/connexion" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--color-theme)] px-6 font-semibold text-white">
                Connexion
              </Link>
              <Link href="/inscription" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 px-6 font-semibold">
                Créer un compte
              </Link>
            </div>
          </>
        ) : (
          <SupabaseConfigHint />
        )}
      </Card>

      {/* Hors connexion */}
      <Card>
        <OfflineSettings />
      </Card>

      {/* Mot de passe */}
      {supabaseConfigured && user && (
        <Card>
          <button
            type="button"
            onClick={() => { setPwdOpen((v) => !v); setPwdStatus("idle"); setPwdMsg(null); }}
            className="flex w-full items-center justify-between text-left"
          >
            <SectionTitle>Changer le mot de passe</SectionTitle>
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
                <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">Mot de passe</label>
                <input
                  type="password"
                  value={newPwd}
                  onChange={(e) => { setNewPwd(e.target.value); setPwdMsg(null); }}
                  autoComplete="new-password"
                  className="min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-base outline-none focus:border-[var(--color-accent-alg)] focus:ring-2 focus:ring-[var(--color-accent-alg)]/15"
                />
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">Au moins 8 caractères.</p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">Confirmer le mot de passe</label>
                <input
                  type="password"
                  value={confirmPwd}
                  onChange={(e) => { setConfirmPwd(e.target.value); setPwdMsg(null); }}
                  autoComplete="new-password"
                  className={`min-h-12 w-full rounded-xl border bg-white px-4 text-base outline-none focus:ring-2 ${
                    confirmPwd.length > 0 && confirmPwd !== newPwd
                      ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                      : "border-zinc-300 focus:border-[var(--color-accent-alg)] focus:ring-[var(--color-accent-alg)]/15"
                  }`}
                />
                {confirmPwd.length > 0 && confirmPwd !== newPwd && (
                  <p className="mt-1 text-xs text-red-600">Les mots de passe ne correspondent pas.</p>
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
                <p className={`text-sm ${pwdStatus === "ok" ? "text-emerald-700" : "text-red-600"}`} role="status">
                  {pwdMsg}
                </p>
              )}
            </div>
          )}
        </Card>
      )}

      {/* Langue d'aide */}
      <Card>
        <SectionTitle>Langue d&apos;aide</SectionTitle>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Choix enregistré sur cet appareil{user && supabaseConfigured ? " et sur ton profil (cloud)" : ""}.
        </p>
        <HelpLanguageSelect value={code} onChange={(next) => void savePivot(next)} />
        <select value={code} onChange={e => void savePivot(e.target.value as PivotCode)} className="hidden">
          {PIVOT_LANGS.map((l) => (
            <option key={l.code} value={l.code}>{l.labelFr} — {l.label}</option>
          ))}
        </select>
        {saved && <p className="mt-2 text-sm text-emerald-700" role="status">Choix enregistré.</p>}
        {pivotMsg && <p className="mt-2 text-sm text-amber-800" role="status">{pivotMsg}</p>}
      </Card>

      {/* Niveau de validation */}
      <Card>
        <SectionTitle>Niveau de validation</SectionTitle>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Note minimale requise pour valider un sous-module ou module.
        </p>
        <div className="mt-4 flex overflow-hidden rounded-full border border-zinc-200">
          {(["base", "moyen", "avance"] as LevelKey[]).map((lvl, i) => {
            const checked = level === lvl;
            const isLast = i === 2;
            return (
              <button
                key={lvl}
                type="button"
                onClick={() => { setLevelState(lvl); saveProgress(setLevel(loadProgress(), lvl)); }}
                className={`flex-1 px-4 py-2 text-sm font-semibold transition-colors${isLast ? "" : " border-r border-zinc-200"} ${
                  checked ? "bg-[var(--color-theme)] text-white" : "bg-white text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {LEVEL_LABELS[lvl]}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Voix */}
      <Card>
        <SectionTitle>Voix</SectionTitle>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Voix utilisée pour les sons des mots en lecture.
        </p>
        <div className="mt-4 flex overflow-hidden rounded-full border border-zinc-200">
          {([["f", "Féminine"], ["m", "Masculine"]] as [GenreKey, string][]).map(([key, label], i) => {
            const checked = genre === key;
            const isLast = i === 1;
            return (
              <button
                key={key}
                type="button"
                onClick={() => { setGenreState(key); localStorage.setItem(GENRE_KEY, key); }}
                className={`flex-1 px-4 py-2 text-sm font-semibold transition-colors${isLast ? "" : " border-r border-zinc-200"} ${
                  checked ? "bg-[var(--color-theme)] text-white" : "bg-white text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </Card>

      {/* À propos & Conditions */}
      <Card>
        <SectionTitle>À propos</SectionTitle>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Guide d&apos;utilisation, présentation des sections et crédits de l&apos;application.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/avant-propos"
            className="flex flex-1 min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-theme)]/40 bg-[var(--color-theme-light)] px-4 text-sm font-semibold text-[var(--color-theme)] transition-colors hover:bg-[var(--color-theme-muted)]/20"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            Avant-propos
          </Link>
          <Link
            href="/conditions-utilisation"
            className="flex flex-1 min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-theme)]/40 bg-[var(--color-theme-light)] px-4 text-sm font-semibold text-[var(--color-theme)] transition-colors hover:bg-[var(--color-theme-muted)]/20"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <path d="M9 7h6M9 11h6M9 15h4" />
            </svg>
            Conditions d&apos;utilisation
          </Link>
        </div>
      </Card>
    </main>
  );
}
