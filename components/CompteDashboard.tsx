"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { updateRemotePivotLang } from "@/app/actions/account";
import { signOutAction } from "@/app/actions/auth";
import { syncProgressToCloud } from "@/app/actions/progress";
import { OfflineSettings } from "@/components/OfflineSettings";
import { SupabaseConfigHint } from "@/components/SupabaseConfigHint";
import { AppSelect } from "@/components/ui/AppSelect";
import { PIVOT_LANGS, type PivotCode } from "@/lib/pivot-langs";
import { loadProgress, saveProgress, setLevel } from "@/lib/progress/math-progress";
import { LEVEL_LABELS, type LevelKey } from "@/lib/scoring";

const STORAGE_KEY = "soutien:pivot";

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

function IconLogOut() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

export type CompteDashboardProps = {
  user: { id: string; email: string; loginId?: string | null; createdAt?: string | null } | null;
  profilePivot: PivotCode | null;
  supabaseConfigured: boolean;
  isAdmin?: boolean;
  hasSuiviAccess?: boolean;
};

export function CompteDashboard({ user, profilePivot, supabaseConfigured, isAdmin, hasSuiviAccess }: CompteDashboardProps) {
  const [code, setCode] = useState<PivotCode>(
    profilePivot && PIVOT_LANGS.some((l) => l.code === profilePivot) ? profilePivot : "ar",
  );
  const [saved, setSaved] = useState(false);
  const [pivotMsg, setPivotMsg] = useState<string | null>(null);
  const [level, setLevelState] = useState<LevelKey>("base");
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "ok" | "error">("idle");
  const [syncError, setSyncError] = useState<string | null>(null);

  useEffect(() => {
    const prog = loadProgress();
    setLevelState(prog.level ?? "base");
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

  async function savePivot(next: PivotCode) {
    setPivotMsg(null);
    savePivotLocal(next);
    if (user && supabaseConfigured) {
      const r = await updateRemotePivotLang(next);
      if (!r.ok) {
        setSaved(false);
        setPivotMsg(r.reason ?? "La synchronisation cloud a échoué.");
      } else {
        setSaved(true);
        setPivotMsg(null);
        window.setTimeout(() => setSaved(false), 2000);
      }
    } else {
      setSaved(true);
      window.setTimeout(() => setSaved(false), 2000);
    }
  }

  return (
    <main className="app-shell flex-1 space-y-4 pt-8 pb-32 lg:pb-28">
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
            {user.loginId && (
              <p className="mt-1 font-mono text-sm font-semibold text-[var(--color-theme)]">{user.loginId}</p>
            )}
            <p className={`${user.loginId ? "" : "mt-1 "}text-sm text-[var(--color-text-secondary)]`}>{user.email}</p>
            {user.createdAt && (
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                Créé le {new Date(user.createdAt).toLocaleDateString("fr-CH", { day: "2-digit", month: "long", year: "numeric" })}
              </p>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/compte/mon-compte"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-theme)] px-4 font-semibold text-white hover:opacity-90"
              >
                Mon compte
              </Link>
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
                <button
                  type="submit"
                  aria-label="Déconnexion"
                  title="Déconnexion"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-300 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
                >
                  <IconLogOut />
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

      {supabaseConfigured && user && (isAdmin || hasSuiviAccess) && (
        <Card>
          <SectionTitle>Gestion</SectionTitle>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Outils réservés aux enseignants et administrateurs.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {isAdmin && (
              <>
                <Link
                  href="/admin"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-theme)] px-4 font-semibold text-white hover:opacity-90"
                >
                  Admin
                </Link>
                <Link
                  href="/admin/contenu"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-theme)] px-4 font-semibold text-white hover:opacity-90"
                >
                  Édition
                </Link>
              </>
            )}
            {hasSuiviAccess && (
              <Link
                href="/suivi"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-theme)] px-4 font-semibold text-white hover:opacity-90"
              >
                Suivi
              </Link>
            )}
          </div>
        </Card>
      )}

      {/* Hors connexion */}
      <Card>
        <OfflineSettings />
      </Card>

      {/* Langue d'aide */}
      <Card>
        <SectionTitle>Langue d&apos;aide</SectionTitle>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Choix enregistré sur cet appareil{user && supabaseConfigured ? " et sur ton profil (cloud)" : ""}.
        </p>
        <AppSelect
          value={code}
          onChange={(next) => void savePivot(next as PivotCode)}
          options={PIVOT_LANGS.map((l) => ({ value: l.code, label: `${l.labelFr} - ${l.label}` }))}
          placement="top"
          className="mt-4 w-full"
        />
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

      {/* À propos & Conditions */}
      <Card>
        <SectionTitle>À propos</SectionTitle>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Guide d&apos;utilisation, présentation des sections et crédits de l&apos;application.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/avant-propos"
            className="flex flex-1 min-h-11 items-center justify-center rounded-xl bg-[var(--color-theme)] px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            À propos
          </Link>
          <Link
            href="/conditions-utilisation"
            className="flex flex-1 min-h-11 items-center justify-center rounded-xl bg-[var(--color-theme)] px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Conditions
          </Link>
        </div>
      </Card>
    </main>
  );
}
