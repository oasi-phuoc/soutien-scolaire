"use client";

import Link from "next/link";
import { useState } from "react";
import { signInAction } from "@/app/actions/auth";

/* ── Phone mockup wrapper ─────────────────────────────────────────── */
function Phone({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width="68" height="114" viewBox="0 0 68 114" fill="none">
        <rect x="0.75" y="0.75" width="66.5" height="112.5" rx="9" fill="white" stroke="#e4e4e7" strokeWidth="1.5"/>
        <rect x="0.75" y="0.75" width="66.5" height="14" rx="9" fill="#f4f4f5"/>
        <rect x="0.75" y="7.75" width="66.5" height="7" fill="#f4f4f5"/>
        <circle cx="34" cy="7.5" r="2" fill="#d4d4d8"/>
        {children}
      </svg>
      <p className="w-[72px] text-center text-[9px] leading-tight text-zinc-400">{label}</p>
    </div>
  );
}

function StepArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mb-5 shrink-0">
      <path d="M2 8h12M9 4l4 4-4 4" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Step 1 screens ───────────────────────────────────────────────── */
function ScreenParametres() {
  return (
    <>
      <text x="10" y="25" fontSize={7} fontWeight="600" fill="#09090b" fontFamily="sans-serif">Paramètres</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      <circle cx="12" cy="39" r="4" fill="#e4e4e7"/>
      <rect x="20" y="36.5" width="22" height="3" rx="1.5" fill="#e4e4e7"/>
      <circle cx="12" cy="52" r="4" fill="#e4e4e7"/>
      <rect x="20" y="49.5" width="17" height="3" rx="1.5" fill="#e4e4e7"/>
      <circle cx="12" cy="65" r="4" fill="#e4e4e7"/>
      <rect x="20" y="62.5" width="12" height="3" rx="1.5" fill="#e4e4e7"/>
      {/* Applications highlighted */}
      <rect x="3" y="73" width="62" height="16" rx="3" fill="#dcfce7"/>
      <circle cx="12" cy="81" r="4" fill="#16a34a"/>
      <rect x="20" y="78.5" width="27" height="3" rx="1.5" fill="#16a34a"/>
      <path d="M57 79.5l3 2.5-3 2.5" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </>
  );
}

function ScreenApplications() {
  return (
    <>
      <path d="M9 21l-3 3 3 3" stroke="#09090b" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="16" y="25" fontSize={6.5} fontWeight="600" fill="#09090b" fontFamily="sans-serif">Applications</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      <rect x="7" y="33" width="8" height="8" rx="2" fill="#93c5fd"/>
      <rect x="19" y="35" width="22" height="3" rx="1.5" fill="#e4e4e7"/>
      <rect x="7" y="46" width="8" height="8" rx="2" fill="#fdba74"/>
      <rect x="19" y="48" width="16" height="3" rx="1.5" fill="#e4e4e7"/>
      {/* Mon fichier highlighted */}
      <rect x="3" y="58" width="62" height="16" rx="3" fill="#dcfce7"/>
      <rect x="7" y="62" width="8" height="8" rx="2" fill="#16a34a"/>
      <rect x="19" y="64.5" width="24" height="3" rx="1.5" fill="#16a34a"/>
      <path d="M57 65l3 2.5-3 2.5" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="7" y="79" width="8" height="8" rx="2" fill="#c4b5fd"/>
      <rect x="19" y="81" width="18" height="3" rx="1.5" fill="#e4e4e7"/>
    </>
  );
}

function ScreenToggleOff() {
  return (
    <>
      <path d="M9 21l-3 3 3 3" stroke="#09090b" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="16" y="25" fontSize={6} fontWeight="600" fill="#09090b" fontFamily="sans-serif">Mon fichier</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      <text x="8" y="39" fontSize={5} fill="#a1a1aa" fontFamily="sans-serif">AUTORISATION</text>
      <line x1="4" y1="42" x2="64" y2="42" stroke="#f4f4f5" strokeWidth="1"/>
      <rect x="3" y="44" width="62" height="26" rx="3" fill="white" stroke="#f4f4f5" strokeWidth="1"/>
      <text x="8" y="54" fontSize={5.5} fontWeight="500" fill="#3f3f46" fontFamily="sans-serif">Sources inconnues</text>
      <text x="8" y="63" fontSize={4.5} fill="#a1a1aa" fontFamily="sans-serif">Autoriser les install.</text>
      <rect x="46" y="51" width="14" height="8" rx="4" fill="#d4d4d8"/>
      <circle cx="50.5" cy="55" r="3" fill="white"/>
    </>
  );
}

function ScreenToggleOn() {
  return (
    <>
      <path d="M9 21l-3 3 3 3" stroke="#09090b" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="16" y="25" fontSize={6} fontWeight="600" fill="#09090b" fontFamily="sans-serif">Mon fichier</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      <text x="8" y="39" fontSize={5} fill="#a1a1aa" fontFamily="sans-serif">AUTORISATION</text>
      <line x1="4" y1="42" x2="64" y2="42" stroke="#f4f4f5" strokeWidth="1"/>
      <rect x="3" y="44" width="62" height="26" rx="3" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"/>
      <text x="8" y="54" fontSize={5.5} fontWeight="500" fill="#15803d" fontFamily="sans-serif">Sources inconnues</text>
      <text x="8" y="63" fontSize={4.5} fill="#16a34a" fontFamily="sans-serif">Autorisé ✓</text>
      <rect x="46" y="51" width="14" height="8" rx="4" fill="#16a34a"/>
      <circle cx="55.5" cy="55" r="3" fill="white"/>
    </>
  );
}

/* ── Step 3 screens ───────────────────────────────────────────────── */
function ScreenFolderDownloads() {
  return (
    <>
      <path d="M9 21l-3 3 3 3" stroke="#09090b" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="16" y="25" fontSize={6.5} fontWeight="600" fill="#09090b" fontFamily="sans-serif">Mon fichier</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      {/* Images folder */}
      <rect x="7" y="33" width="10" height="8" rx="2" fill="#fde68a"/>
      <rect x="19" y="35" width="18" height="3" rx="1.5" fill="#e4e4e7"/>
      {/* Documents folder */}
      <rect x="7" y="46" width="10" height="8" rx="2" fill="#fde68a"/>
      <rect x="19" y="48" width="22" height="3" rx="1.5" fill="#e4e4e7"/>
      {/* Téléchargements – highlighted */}
      <rect x="3" y="58" width="62" height="16" rx="3" fill="#dcfce7"/>
      <rect x="7" y="62" width="10" height="8" rx="2" fill="#16a34a"/>
      <rect x="21" y="64.5" width="26" height="3" rx="1.5" fill="#16a34a"/>
      <path d="M57 65l3 2.5-3 2.5" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </>
  );
}

function ScreenApkFile() {
  return (
    <>
      <path d="M9 21l-3 3 3 3" stroke="#09090b" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="16" y="25" fontSize={6} fontWeight="600" fill="#09090b" fontFamily="sans-serif">Téléchargements</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      {/* Other file */}
      <rect x="7" y="33" width="9" height="11" rx="1.5" fill="#e4e4e7"/>
      <rect x="13" y="31" width="4" height="4" rx="0.5" fill="#d4d4d8"/>
      <rect x="19" y="36" width="20" height="3" rx="1.5" fill="#e4e4e7"/>
      {/* APK file – highlighted */}
      <rect x="3" y="49" width="62" height="18" rx="3" fill="#dcfce7"/>
      <rect x="7" y="53" width="9" height="11" rx="1.5" fill="#16a34a"/>
      <text x="8.5" y="61" fontSize={4} fontWeight="700" fill="white" fontFamily="sans-serif">APK</text>
      <rect x="20" y="55" width="30" height="3" rx="1.5" fill="#16a34a"/>
      <text x="20" y="65" fontSize={4.5} fill="#16a34a" fontFamily="sans-serif">soutien-scolaire.apk</text>
    </>
  );
}

function ScreenInstaller() {
  return (
    <>
      <text x="34" y="24" fontSize={6} fontWeight="600" fill="#09090b" fontFamily="sans-serif" textAnchor="middle">Installer ?</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      {/* App icon */}
      <rect x="24" y="33" width="20" height="20" rx="5" fill="#16a34a"/>
      <text x="34" y="47" fontSize={10} fill="white" fontFamily="sans-serif" textAnchor="middle">L</text>
      <text x="34" y="63" fontSize={5.5} fontWeight="600" fill="#09090b" fontFamily="sans-serif" textAnchor="middle">LearnUp</text>
      <text x="34" y="71" fontSize={4.5} fill="#a1a1aa" fontFamily="sans-serif" textAnchor="middle">Voulez-vous installer ?</text>
      {/* Buttons */}
      <rect x="6" y="80" width="24" height="10" rx="3" fill="#f4f4f5"/>
      <text x="18" y="87" fontSize={5} fill="#71717a" fontFamily="sans-serif" textAnchor="middle">Annuler</text>
      <rect x="34" y="80" width="28" height="10" rx="3" fill="#16a34a"/>
      <text x="48" y="87" fontSize={5} fontWeight="600" fill="white" fontFamily="sans-serif" textAnchor="middle">Installer</text>
    </>
  );
}

function ScreenInstallerQuandMeme() {
  return (
    <>
      <text x="34" y="24" fontSize={5.5} fontWeight="600" fill="#09090b" fontFamily="sans-serif" textAnchor="middle">Avertissement</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      {/* Warning icon */}
      <text x="34" y="44" fontSize={14} fontFamily="sans-serif" textAnchor="middle">⚠️</text>
      <text x="34" y="56" fontSize={4.5} fill="#71717a" fontFamily="sans-serif" textAnchor="middle">Source non vérifiée</text>
      <text x="34" y="63" fontSize={4.5} fill="#71717a" fontFamily="sans-serif" textAnchor="middle">par Google Play.</text>
      {/* Buttons */}
      <rect x="4" y="74" width="28" height="10" rx="3" fill="#f4f4f5"/>
      <text x="18" y="81" fontSize={4.5} fill="#71717a" fontFamily="sans-serif" textAnchor="middle">Annuler</text>
      <rect x="36" y="74" width="28" height="10" rx="3" fill="#16a34a"/>
      <text x="50" y="81" fontSize={4} fontWeight="600" fill="white" fontFamily="sans-serif" textAnchor="middle">Installer qd même</text>
    </>
  );
}

function ScreenOuvrir() {
  return (
    <>
      <text x="34" y="24" fontSize={5.5} fontWeight="600" fill="#15803d" fontFamily="sans-serif" textAnchor="middle">Installé ! ✓</text>
      <line x1="4" y1="29" x2="64" y2="29" stroke="#f4f4f5" strokeWidth="1"/>
      {/* Success icon */}
      <circle cx="34" cy="52" r="16" fill="#dcfce7"/>
      <path d="M26 52l5 5 9-10" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="34" y="78" fontSize={4.5} fill="#71717a" fontFamily="sans-serif" textAnchor="middle">Installation terminée</text>
      {/* Ouvrir button */}
      <rect x="14" y="84" width="40" height="12" rx="3" fill="#16a34a"/>
      <text x="34" y="92" fontSize={5.5} fontWeight="600" fill="white" fontFamily="sans-serif" textAnchor="middle">Ouvrir</text>
    </>
  );
}

/* ── Install modal ────────────────────────────────────────────────── */
function InstallModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl dark:bg-zinc-900 sm:rounded-3xl"
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
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* ── STEP 1 ── */}
        <div className="mb-5">
          <div className="mb-3 flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">1</span>
            <div>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Autoriser les sources inconnues</p>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">Suis ces étapes dans les Paramètres Android :</p>
            </div>
          </div>
          <div className="overflow-x-auto pb-1">
            <div className="flex items-center gap-2 px-1" style={{ minWidth: "max-content" }}>
              <Phone label="Paramètres → Applications"><ScreenParametres /></Phone>
              <StepArrow />
              <Phone label="Choisir Mon fichier"><ScreenApplications /></Phone>
              <StepArrow />
              <Phone label="Sources inconnues (OFF)"><ScreenToggleOff /></Phone>
              <StepArrow />
              <Phone label="Activer → Autorisé ✓"><ScreenToggleOn /></Phone>
            </div>
          </div>
        </div>

        {/* ── STEP 2 ── */}
        <div className="mb-5">
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">2</span>
            <div>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Télécharger le fichier</p>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                Appuie sur le bouton <strong className="font-bold text-green-700">&ldquo;Télécharger l&apos;APK Android&rdquo;</strong> ci-dessous.<br />
                Le fichier <code className="rounded bg-zinc-100 px-1 text-[10px] dark:bg-zinc-800">soutien-scolaire.apk</code> se télécharge dans tes Téléchargements.
              </p>
            </div>
          </div>
        </div>

        {/* ── STEP 3 ── */}
        <div className="mb-5">
          <div className="mb-3 flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">3</span>
            <div>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Installer l&apos;application</p>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">Ouvre Mon fichier et suis ces étapes :</p>
            </div>
          </div>
          <div className="overflow-x-auto pb-1">
            <div className="flex items-center gap-2 px-1" style={{ minWidth: "max-content" }}>
              <Phone label="Téléchargements"><ScreenFolderDownloads /></Phone>
              <StepArrow />
              <Phone label="Ouvrir l'APK"><ScreenApkFile /></Phone>
              <StepArrow />
              <Phone label="Appuyer Installer"><ScreenInstaller /></Phone>
              <StepArrow />
              <Phone label="Installer quand même"><ScreenInstallerQuandMeme /></Phone>
              <StepArrow />
              <Phone label="Appuyer Ouvrir"><ScreenOuvrir /></Phone>
            </div>
          </div>
        </div>

        {/* Note iOS – red */}
        <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700 dark:bg-red-950/30 dark:text-red-400">
          ❌ <strong>Ne fonctionne pas pour iOS.</strong>
        </p>

        {/* Download button */}
        <a
          href="/app.apk"
          download="soutien-scolaire.apk"
          type="application/vnd.android.package-archive"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-700 text-base font-semibold text-white transition-opacity active:opacity-80 dark:bg-green-600"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Télécharger l&apos;APK Android
        </a>
      </div>
    </div>
  );
}

/* ── Login form ───────────────────────────────────────────────────── */
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
          <label htmlFor="password" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Mot de passe
          </label>
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

      <div className="mt-6 border-t border-zinc-100 pt-5 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => setShowInstall(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3"/>
          </svg>
          Télécharger l&apos;application Android
        </button>
      </div>
    </>
  );
}
