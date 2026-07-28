"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { LECTURE_MODULES } from "@/lib/curriculum/lecture-data";
import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import { resetAllElevesAction, setPlacementModuleEnabledAction, purgePreviousSchoolYearMessagesAction } from "@/app/actions/admin";
import { AppSelect } from "@/components/ui/AppSelect";
import {
  currentSchoolYearLabel,
  currentSchoolYearStart,
  previousSchoolYearLabel,
} from "@/lib/school-year";

export type UserRow = {
  id: string;
  email: string;
  login_id: string | null;
  nom: string | null;
  prenom: string | null;
  classe: string | null;
  adresse: string | null;
  npa: string | null;
  localite: string | null;
  telephone: string | null;
  langue: string | null;
  progress_data: StoredProgressV1 | null;
  progress_updated_at: string | null;
  is_admin: boolean;
  role: "eleve" | "prof" | "admin";
  /** Accès hub Impression (élèves / profs). Les admins y ont toujours accès. */
  can_print: boolean;
  placement_test_best: { points: number; maxPoints: number; percent: number } | null;
  placement_combined: { total: number; zone: string; mathCounted: number; frenchCounted: number; pendingFrench?: number } | null;
};

const COMM_SUBMODULES = COMM_MODULES.flatMap(m => m.submodules).filter(s => s.available);
const FRENCH_VOC = FRENCH_THEMES.filter(t => t.tab === "vocabulaire");
const FRENCH_GRAM = FRENCH_THEMES.filter(t => t.tab === "grammaire" || t.tab === "conjugaison");
const MATH_SUB_IDS_BY_BRANCH = {
  algebra: new Set(MATH_MODULES.filter(m => m.branch === "algebra").flatMap(m => m.submodules.map(s => s.id))),
  geometry: new Set(MATH_MODULES.filter(m => m.branch === "geometry").flatMap(m => m.submodules.map(s => s.id))),
  stats: new Set(MATH_MODULES.filter(m => m.branch === "stats").flatMap(m => m.submodules.map(s => s.id))),
};
const TOTAL_MATH_SUBS = MATH_MODULES.reduce((n, m) => n + m.submodules.length, 0);


function mathPct(data: StoredProgressV1 | null) {
  const allIds = new Set([...MATH_SUB_IDS_BY_BRANCH.algebra, ...MATH_SUB_IDS_BY_BRANCH.geometry, ...MATH_SUB_IDS_BY_BRANCH.stats]);
  const done = data?.submoduleStates
    ? Object.entries(data.submoduleStates).filter(([id, s]) => allIds.has(id) && s === "completed").length
    : data?.math
      ? Object.values(data.math).reduce((n, m) => n + Math.round((m.subProgress ?? 0) * (m.subTotal ?? 1)), 0)
      : 0;
  return { done, total: TOTAL_MATH_SUBS, pct: Math.round((done / TOTAL_MATH_SUBS) * 100) };
}

function frenchPct(data: StoredProgressV1 | null) {
  const completedSlugs = new Set(Object.keys(data?.frenchLessons ?? {}));
  const vocDone = FRENCH_VOC.filter(t => completedSlugs.has(t.slug)).length;
  const gramDone = FRENCH_GRAM.filter(t => completedSlugs.has(t.slug)).length;
  const commDone = COMM_SUBMODULES.filter(s => !!(data?.commProgress?.[s.id])).length;
  const done = vocDone + gramDone + commDone;
  const total = FRENCH_VOC.length + FRENCH_GRAM.length + COMM_SUBMODULES.length;
  return { done, total, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
}

function lecturePct(data: StoredProgressV1 | null) {
  const subs = data?.lectureProgress?.submodules ?? {};
  const total = LECTURE_MODULES.reduce((sum, m) => sum + m.letters.length, 0);
  const done = LECTURE_MODULES.reduce((sum, m) =>
    sum + m.letters.filter(l => subs[`${m.id}-${l.letterLower}`] === "completed").length, 0);
  return { done, total, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
}

function lastSeen(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  const now = new Date();
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
  if (diff < 60) return "À l'instant";
  if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)} h`;
  const days = Math.floor(diff / 86400);
  if (days < 30) return `Il y a ${days} j`;
  return d.toLocaleDateString("fr-CH", { day: "2-digit", month: "short", year: "numeric" });
}

/** Date compacte JJ.MM pour la colonne Accès (mobile). */
function lastSeenDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}`;
}

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-[3px] w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function ProgressCell({ done, total, pct, color }: { done: number; total: number; pct: number; color: string }) {
  return (
    <div className="flex w-8 flex-col gap-0.5 sm:w-14" title={`${done}/${total} (${pct} %)`}>
      <span className="hidden text-[10px] font-semibold tabular-nums leading-none text-zinc-800 sm:block dark:text-zinc-200">{done}/{total}</span>
      <Bar pct={pct} color={color} />
    </div>
  );
}

// ── Icons ───────────────────────────────────────────────────────────────────

function IconTrash() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function IconArchive() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="4" rx="1" />
      <path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  );
}

/** Icône clipboard / test — module TCF·TCM (placement). */
function IconPlacement() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function IconCancel() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

const ROLE_LABELS: Record<UserRow["role"], string> = { eleve: "Élève", prof: "Prof", admin: "Admin" };

function ResetElevesConfirm({ eleveCount, onClose, onReset, onArchive }: { eleveCount: number; onClose: () => void; onReset: () => void; onArchive: () => void }) {
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  const [okMsg, setOkMsg] = useState<string | null>(null);
  const [deleteChecked, setDeleteChecked] = useState(false);
  const [archiveChecked, setArchiveChecked] = useState(false);
  const [purgeMessagesChecked, setPurgeMessagesChecked] = useState(false);
  const [deletePhrase, setDeletePhrase] = useState("");
  const [finalDeleteConfirm, setFinalDeleteConfirm] = useState(false);
  const requiredPhrase = "Supprimé tous les élèves";

  const schoolStart = currentSchoolYearStart();
  const schoolStartLabel = schoolStart.toLocaleDateString("fr-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const prevYearLabel = previousSchoolYearLabel();
  const currYearLabel = currentSchoolYearLabel();

  async function runPurgeMessages(): Promise<boolean> {
    const r = await purgePreviousSchoolYearMessagesAction();
    if (!r.ok) {
      setErr(r.reason ?? "Erreur lors de la purge des messages.");
      return false;
    }
    const total = (r.expressionDeleted ?? 0) + (r.taskDeleted ?? 0);
    setOkMsg(
      `${total} message${total !== 1 ? "s" : ""} supprimé${total !== 1 ? "s" : ""} ` +
        `(PE/PO : ${r.expressionDeleted ?? 0}, devoirs : ${r.taskDeleted ?? 0}) — antérieurs au ${schoolStartLabel}.`,
    );
    return true;
  }

  function confirmDelete() {
    setErr(null);
    setOkMsg(null);
    startTransition(async () => {
      if (purgeMessagesChecked) {
        const ok = await runPurgeMessages();
        if (!ok) return;
      }
      const r = await resetAllElevesAction("delete");
      if (!r.ok) { setErr(r.reason ?? "Erreur"); return; }
      onReset();
    });
  }

  function confirmArchive() {
    setErr(null);
    setOkMsg(null);
    startTransition(async () => {
      if (purgeMessagesChecked) {
        const ok = await runPurgeMessages();
        if (!ok) return;
      }
      const r = await resetAllElevesAction("archive");
      if (!r.ok) { setErr(r.reason ?? "Erreur"); return; }
      onArchive();
    });
  }

  function confirmPurgeMessages() {
    setErr(null);
    setOkMsg(null);
    startTransition(async () => {
      const ok = await runPurgeMessages();
      if (ok) setPurgeMessagesChecked(false);
    });
  }

  const canDelete = deleteChecked && deletePhrase === requiredPhrase && finalDeleteConfirm;
  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900" onClick={e => e.stopPropagation()}>
        <h2 className="mb-2 text-base font-bold text-zinc-900 dark:text-zinc-50">Réinitialiser les élèves</h2>
        <p className="mb-1 text-sm text-zinc-600 dark:text-zinc-400">
          Cette action concerne <strong>{eleveCount} compte{eleveCount !== 1 ? "s" : ""} élève{eleveCount !== 1 ? "s" : ""}</strong>.
        </p>
        <div className="my-4 space-y-3 rounded-xl border border-zinc-200 p-3 dark:border-zinc-700">
          <label className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <input type="checkbox" checked={archiveChecked} onChange={e => { setArchiveChecked(e.target.checked); if (e.target.checked) setDeleteChecked(false); }} className="mt-1" />
            <span>Changer tous les élèves en classe <strong>ancien {currentYear}</strong>.</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-teal-800 dark:text-teal-300">
            <input
              type="checkbox"
              checked={purgeMessagesChecked}
              onChange={e => setPurgeMessagesChecked(e.target.checked)}
              className="mt-1"
            />
            <span>
              Supprimer tous les messages de messagerie (PE, PO, devoirs) de <strong>tous les comptes</strong>{" "}
              antérieurs au début de l&apos;année scolaire <strong>{currYearLabel}</strong>{" "}
              (avant le <strong>{schoolStartLabel}</strong>) — année précédente {prevYearLabel} et plus anciennes.
            </span>
          </label>
          <label className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
            <input type="checkbox" checked={deleteChecked} onChange={e => { setDeleteChecked(e.target.checked); if (e.target.checked) setArchiveChecked(false); }} className="mt-1" />
            <span>Supprimer définitivement tous les comptes élèves et leurs données.</span>
          </label>
          {deleteChecked && (
            <div className="space-y-2 border-t border-red-100 pt-3 dark:border-red-900/50">
              <label className="block text-xs font-semibold text-red-700 dark:text-red-300">
                Écrivez exactement : <span className="font-mono">{requiredPhrase}</span>
              </label>
              <input value={deletePhrase} onChange={e => setDeletePhrase(e.target.value)}
                className="w-full rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm outline-none dark:border-red-900 dark:bg-red-950/20" />
              <label className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                <input type="checkbox" checked={finalDeleteConfirm} onChange={e => setFinalDeleteConfirm(e.target.checked)} className="mt-1" />
                <span>Je confirme une troisième fois que je veux supprimer les comptes élèves.</span>
              </label>
            </div>
          )}
        </div>
        {err && <p className="mb-3 text-sm text-red-600" role="alert">{err}</p>}
        {okMsg && <p className="mb-3 text-sm text-teal-700 dark:text-teal-400" role="status">{okMsg}</p>}
        <div className="flex flex-wrap justify-end gap-2">
          <button onClick={onClose} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700" aria-label="Annuler"><IconCancel /></button>
          <button
            onClick={confirmPurgeMessages}
            disabled={pending || !purgeMessagesChecked || archiveChecked || deleteChecked}
            className="rounded-2xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 disabled:opacity-40"
          >
            {pending && purgeMessagesChecked && !archiveChecked && !deleteChecked ? "Purge…" : "Purger messages"}
          </button>
          <button onClick={confirmArchive} disabled={pending || !archiveChecked} className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 disabled:opacity-40">
            Valider archivage
          </button>
          <button onClick={confirmDelete} disabled={pending || !canDelete} className="flex items-center gap-2 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-40">
            {pending ? <Spinner /> : <IconTrash />}
            {pending ? "Suppression…" : "Tout supprimer"}
          </button>
        </div>
      </div>
    </div>
  );
}

function PlacementModuleButton({
  enabled,
  disabled,
  onChange,
}: {
  enabled: boolean;
  disabled?: boolean;
  onChange: (enabled: boolean) => void;
}) {
  const label = enabled ? "Module TCF / TCM actif — cliquer pour désactiver" : "Module TCF / TCM inactif — cliquer pour activer";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={() => onChange(!enabled)}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
        enabled
          ? "border-[var(--color-theme)]/35 bg-[var(--color-theme-light)] text-[var(--color-theme)] hover:bg-[color-mix(in_oklch,var(--color-theme-light)_70%,white)] dark:border-[var(--color-theme)]/50 dark:bg-[var(--color-theme)]/15 dark:text-[var(--color-theme-muted)] dark:hover:bg-[var(--color-theme)]/25"
          : "border-zinc-200 bg-zinc-50 text-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800"
      }`}
    >
      <IconPlacement />
    </button>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export function AdminTable({
  initialRows,
  currentUserId: _currentUserId,
  currentUserRole,
  initialPlacementEnabled = true,
  accountCount,
}: {
  initialRows: UserRow[];
  currentUserId: string;
  currentUserRole: "admin" | "prof";
  initialPlacementEnabled?: boolean;
  /** Nombre affiché sous le titre (défaut = initialRows.length). */
  accountCount?: number;
}) {
  const [rows, setRows] = useState<UserRow[]>(initialRows);
  const [placementEnabled, setPlacementEnabled] = useState(initialPlacementEnabled);
  const [placementMsg, setPlacementMsg] = useState<string | null>(null);
  const [placementPending, startPlacementTransition] = useTransition();
  const [filterClasse, setFilterClasse] = useState<string>("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "math" | "francais" | "lecture" | "access" | "placement">("name");
  const [sortOpen, setSortOpen] = useState(false);
  const [resetConfirming, setResetConfirming] = useState(false);

  const totalAccounts = accountCount ?? initialRows.length;

  const classes = Array.from(new Set(rows.map(r => r.classe).filter(Boolean) as string[])).sort();
  const searchLc = search.trim().toLowerCase();
  const filtered = rows.filter(r => {
    if (filterClasse && r.classe !== filterClasse) return false;
    if (!searchLc) return true;
    const name = [r.prenom, r.nom].filter(Boolean).join(" ").toLowerCase();
    return name.includes(searchLc) || (r.email ?? "").toLowerCase().includes(searchLc) || (r.classe ?? "").toLowerCase().includes(searchLc);
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "math") return mathPct(b.progress_data).pct - mathPct(a.progress_data).pct;
    if (sortBy === "francais") return frenchPct(b.progress_data).pct - frenchPct(a.progress_data).pct;
    if (sortBy === "lecture") return lecturePct(b.progress_data).pct - lecturePct(a.progress_data).pct;
    if (sortBy === "access") {
      const ta = Date.parse(a.progress_updated_at ?? a.progress_data?.lastActivityAt ?? "") || 0;
      const tb = Date.parse(b.progress_updated_at ?? b.progress_data?.lastActivityAt ?? "") || 0;
      return tb - ta;
    }
    if (sortBy === "placement") {
      const pa = a.placement_combined?.total ?? a.placement_test_best?.points ?? -1;
      const pb = b.placement_combined?.total ?? b.placement_test_best?.points ?? -1;
      return pb - pa;
    }
    const na = [a.prenom, a.nom].filter(Boolean).join(" ").toLowerCase();
    const nb = [b.prenom, b.nom].filter(Boolean).join(" ").toLowerCase();
    return na.localeCompare(nb, "fr");
  });

  function togglePlacementModule(next: boolean) {
    setPlacementMsg(null);
    const prev = placementEnabled;
    setPlacementEnabled(next);
    startPlacementTransition(async () => {
      const res = await setPlacementModuleEnabledAction(next);
      if (!res.ok) {
        setPlacementEnabled(prev);
        setPlacementMsg(res.reason ?? "Erreur lors de la mise à jour.");
      }
    });
  }

  const adminActionButtons = currentUserRole === "admin" ? (
    <>
      <PlacementModuleButton
        enabled={placementEnabled}
        disabled={placementPending}
        onChange={togglePlacementModule}
      />
      <Link
        href="/admin/attribution-professeurs"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-theme)]/30 bg-white text-[var(--color-theme)] shadow-sm transition-colors hover:bg-[var(--color-theme-light)] dark:bg-zinc-900 dark:hover:bg-[var(--color-theme)]/10"
        aria-label="Attribution des professeurs"
        title="Attribution des professeurs"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </Link>
      <button
        type="button"
        onClick={() => setResetConfirming(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-700 transition-colors hover:bg-amber-100 dark:border-amber-800/50 dark:bg-amber-900/20 dark:text-amber-300 dark:hover:bg-amber-900/40"
        aria-label="Archiver les élèves"
        title="Archiver les élèves"
      >
        <IconArchive />
      </button>
    </>
  ) : null;

  return (
    <>
      {/* Titre + actions desktop (alignées à droite) */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2">
          <Link
            href="/compte"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80 lg:hidden"
            aria-label="Retour aux réglages"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Gestion des comptes
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {totalAccounts} compte{totalAccounts !== 1 ? "s" : ""} enregistré{totalAccounts !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {adminActionButtons}
          <Link
            href="/compte"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour aux réglages"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <div className="relative min-w-0 flex-1 max-w-sm">
            <input
              type="search"
              autoComplete="off"
              placeholder="Rechercher un élève…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-[var(--color-theme)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
            />
          </div>
          {classes.length > 0 && (
            <AppSelect
              value={filterClasse}
              onChange={setFilterClasse}
              options={classes}
              placeholder="Classe"
              emptyOption={{ value: "", label: "Toutes les classes" }}
              className="w-52"
              aria-label="Filtrer par classe"
            />
          )}
          {/* Actions admin — mobile uniquement (desktop = dans le titre) */}
          {adminActionButtons && (
            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              {adminActionButtons}
            </div>
          )}
        </div>
        {placementMsg && (
          <p className="mb-2 text-sm text-red-600" role="status">
            {placementMsg}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-2">
          <div className={`flex overflow-hidden rounded-full p-0.5 border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800`}>
            <button onClick={() => {
              if (sortOpen) {
                setSortBy("name");
                setSortOpen(false);
              } else {
                setSortOpen(true);
              }
            }} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${sortOpen ? "bg-[var(--color-theme)] text-white shadow-sm" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}>Trier</button>
            {sortOpen && (
              <>
                {([
                  ["math", "Math", "Maths"],
                  ["francais", "Fr", "Français"],
                  ["lecture", "Lec", "Lecture"],
                  ["access", "Acc", "Accès"],
                  ["placement", "Test", "Test"],
                ] as const).map(([val, shortLabel, fullLabel]) => (
                  <button
                    key={val}
                    onClick={() => { setSortBy(sortBy === val ? "name" : val); setSortOpen(true); }}
                    className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${sortBy === val ? "text-[var(--color-theme)] dark:text-[var(--color-theme-muted)]" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}
                  >
                    <span className="lg:hidden">{shortLabel}</span>
                    <span className="hidden lg:inline">{fullLabel}</span>
                  </button>
                ))}
              </>
            )}
          </div>

          <span className="text-sm text-zinc-500">{sorted.length} élève{sorted.length !== 1 ? "s" : ""}</span>

          {currentUserRole === "admin" && (
            <button
              onClick={() => setResetConfirming(true)}
              className="hidden"
            >
              <IconTrash />
              Réinitialiser les élèves
            </button>
          )}
        </div>
      </div>

      {/* Table unique — en-tête sticky pour garder l’alignement colonnes */}
      <div className="app-table-scroll max-h-[calc(100dvh-14rem)] overflow-y-auto overflow-x-hidden rounded-2xl border border-zinc-200 lg:max-h-[calc(100dvh-12rem)] dark:border-zinc-800">
        <table className="admin-users-table w-full table-fixed text-sm">
          <colgroup>
            <col className="admin-users-table__loupe" />
            <col className="admin-users-table__name" />
            <col className="admin-users-table__statut" />
            <col className="admin-users-table__imp" />
            <col className="admin-users-table__classe" />
            <col className="admin-users-table__acces" />
            <col className="admin-users-table__maths" />
            <col className="admin-users-table__francais" />
            <col className="admin-users-table__lecture" />
            <col className="admin-users-table__test" />
          </colgroup>
          <thead className="sticky top-0 z-20">
            <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
              <th
                className="admin-users-table__loupe bg-[var(--color-theme)]"
                aria-label="Détail"
              />
              <th className="admin-users-table__name bg-[var(--color-theme)] px-1.5 py-2 text-left text-xs font-semibold uppercase tracking-wide text-white sm:px-3 sm:py-3">Prénom, Nom</th>
              <th className="admin-users-table__statut hidden bg-[var(--color-theme)] px-2 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-white sm:table-cell sm:px-2.5 sm:py-3">Statut</th>
              <th className="admin-users-table__imp hidden bg-[var(--color-theme)] px-1.5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-white sm:table-cell sm:px-2 sm:py-3" title="Accès Impression">Imp.</th>
              <th className="admin-users-table__classe hidden bg-[var(--color-theme)] px-2 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white sm:table-cell sm:px-2.5">Classe</th>
              <th className="admin-users-table__acces bg-[var(--color-theme)] px-1 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-white sm:px-2 sm:py-3 sm:text-xs" title="Dernier accès">Accès</th>
              <th className="admin-users-table__maths hidden bg-[var(--color-theme)] px-2 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-white sm:table-cell sm:px-2 sm:py-3">Maths</th>
              <th className="admin-users-table__francais hidden bg-[var(--color-theme)] px-2 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white lg:table-cell">Français</th>
              <th className="admin-users-table__lecture hidden bg-[var(--color-theme)] px-2 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white lg:table-cell">Lecture</th>
              <th className="admin-users-table__test bg-[var(--color-theme)] px-1 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-white sm:px-2 sm:py-3 sm:text-xs" title="Points de test">Test</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {sorted.length === 0 ? (
              <tr><td colSpan={10} className="px-4 py-8 text-center text-zinc-400">Aucun utilisateur.</td></tr>
            ) : sorted.map(row => {
              const fullName = [row.prenom, row.nom].filter(Boolean).join(" ") || "—";
              const math = mathPct(row.progress_data);
              const french = frenchPct(row.progress_data);
              const lecture = lecturePct(row.progress_data);
              const activity = row.progress_updated_at ?? row.progress_data?.lastActivityAt ?? null;
              const hasPrint = row.role === "admin" || row.can_print;
              const testPoints = row.placement_combined?.total ?? row.placement_test_best?.points ?? null;
              const testTitle = row.placement_combined
                ? `${row.placement_combined.total}/200 — ${row.placement_combined.zone}`
                : row.placement_test_best
                  ? `${row.placement_test_best.points}/${row.placement_test_best.maxPoints}`
                  : undefined;
              return (
                <tr key={row.id} className="group bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900">
                  <td
                    className="admin-users-table__loupe sticky left-0 z-10 bg-white shadow-[2px_0_4px_-2px_rgba(0,0,0,0.12)] group-hover:bg-zinc-50 dark:bg-zinc-950 dark:group-hover:bg-zinc-900"
                  >
                    <Link href={`/admin/eleves/${row.id}`} className="inline-flex h-full w-full items-center justify-center py-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300" aria-label="Voir détails">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                    </Link>
                  </td>
                  <td className="admin-users-table__name min-w-0 px-1.5 py-2 sm:px-3 sm:py-3">
                    <span className="block truncate text-xs font-medium text-zinc-800 sm:text-sm dark:text-zinc-200" title={fullName}>{fullName}</span>
                  </td>
                  <td className="admin-users-table__statut hidden px-2 py-2.5 sm:table-cell sm:px-2.5 sm:py-3">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      row.role === "admin" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                      : row.role === "prof" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                      : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}>
                      {ROLE_LABELS[row.role]}
                    </span>
                  </td>
                  <td className="admin-users-table__imp hidden px-1.5 py-2.5 sm:table-cell sm:px-2 sm:py-3">
                    {hasPrint ? (
                      <span
                        className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-1.5 py-0.5 text-[10px] font-bold text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
                        title={row.role === "admin" ? "Admin — accès impression automatique" : "Accès impression activé"}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M6 9V2h12v7" />
                          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                          <path d="M6 14h12v8H6z" />
                        </svg>
                        Oui
                      </span>
                    ) : (
                      <span className="text-xs text-zinc-400">—</span>
                    )}
                  </td>
                  <td className="admin-users-table__classe hidden min-w-0 px-2 py-3 sm:table-cell sm:px-2.5">
                    {row.classe ? (
                      <span className="block truncate text-xs font-medium text-zinc-700 dark:text-zinc-300" title={row.classe}>{row.classe}</span>
                    ) : (
                      <span className="text-zinc-400">—</span>
                    )}
                  </td>
                  <td className="admin-users-table__acces px-1 py-2 text-[11px] tabular-nums text-zinc-500 sm:px-2 sm:py-3 sm:text-xs dark:text-zinc-400" title={lastSeen(activity)}>
                    <span className="sm:hidden">{lastSeenDate(activity)}</span>
                    <span className="hidden truncate sm:inline">{lastSeen(activity)}</span>
                  </td>
                  <td className="admin-users-table__maths hidden px-2 py-2.5 sm:table-cell sm:py-3"><ProgressCell {...math} color="bg-blue-500" /></td>
                  <td className="admin-users-table__francais hidden px-2 py-3 lg:table-cell"><ProgressCell {...french} color="bg-emerald-500" /></td>
                  <td className="admin-users-table__lecture hidden px-2 py-3 lg:table-cell"><ProgressCell {...lecture} color="bg-amber-500" /></td>
                  <td className="admin-users-table__test min-w-0 px-1 py-2 sm:px-2 sm:py-3" title={testTitle}>
                    {testPoints !== null ? (
                      <>
                        <span className="text-[11px] font-bold tabular-nums text-violet-700 sm:hidden dark:text-violet-300">{testPoints}</span>
                        <div className="hidden min-w-0 space-y-0.5 sm:block">
                          {row.placement_combined ? (
                            <>
                              <p className="truncate text-[10px] font-bold tabular-nums text-violet-700 dark:text-violet-300">
                                {row.placement_combined.total}/200
                              </p>
                              <p className="truncate text-[9px] leading-tight text-zinc-500">{row.placement_combined.zone}</p>
                            </>
                          ) : row.placement_test_best ? (
                            <ProgressCell done={row.placement_test_best.points} total={row.placement_test_best.maxPoints} pct={row.placement_test_best.percent} color="bg-violet-500" />
                          ) : null}
                        </div>
                      </>
                    ) : (
                      <span className="text-xs text-zinc-400">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {resetConfirming && (
        <ResetElevesConfirm
          eleveCount={rows.filter(r => r.role === "eleve").length}
          onClose={() => setResetConfirming(false)}
          onReset={() => {
            setRows(rs => rs.filter(r => r.role !== "eleve"));
            setResetConfirming(false);
          }}
          onArchive={() => {
            const year = new Date().getFullYear();
            setRows(rs => rs.map(r => r.role === "eleve" ? { ...r, classe: `ancien ${year}` } : r));
            setResetConfirming(false);
          }}
        />
      )}
    </>
  );
}
