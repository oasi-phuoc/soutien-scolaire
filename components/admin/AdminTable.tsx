"use client";

import { useState, useTransition } from "react";
import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { LECTURE_MODULES } from "@/lib/curriculum/lecture-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import {
  toggleAdminAction,
  deleteUserAction,
  updateUserProfileAction,
} from "@/app/actions/admin";

export type UserRow = {
  id: string;
  email: string;
  nom: string | null;
  prenom: string | null;
  classe: string | null;
  adresse: string | null;
  npa: string | null;
  localite: string | null;
  telephone: string | null;
  progress_data: StoredProgressV1 | null;
  progress_updated_at: string | null;
  is_admin: boolean;
};

const TOTAL_MATH = MATH_MODULES.length;
const TOTAL_FRENCH = FRENCH_THEMES.length;
const TOTAL_LECTURE = LECTURE_MODULES.length;

function mathPct(data: StoredProgressV1 | null) {
  const done = data?.math ? Object.values(data.math).filter(m => m.state === "completed").length : 0;
  return { done, total: TOTAL_MATH, pct: Math.round((done / TOTAL_MATH) * 100) };
}

function frenchPct(data: StoredProgressV1 | null) {
  const done = data?.frenchLessons ? Object.keys(data.frenchLessons).length : 0;
  return { done, total: TOTAL_FRENCH, pct: Math.round((done / TOTAL_FRENCH) * 100) };
}

function lecturePct(data: StoredProgressV1 | null) {
  const modules = data?.lectureProgress?.modules ?? {};
  const done = Object.values(modules).filter(v => v === "completed").length;
  return { done, total: TOTAL_LECTURE, pct: Math.round((done / TOTAL_LECTURE) * 100) };
}

function currentActiveLessons(data: StoredProgressV1 | null): { label: string; name: string }[] {
  if (!data) return [];
  const results: { label: string; name: string }[] = [];

  if (data.math) {
    const entry = Object.entries(data.math).find(([, v]) => v.state === "in_progress");
    if (entry) {
      const mod = MATH_MODULES.find(m => m.id === entry[0]);
      if (mod) results.push({ label: "Maths", name: `${mod.code} – ${mod.title}` });
    }
  }

  if (data.frenchLevel && data.frenchLevel !== "PA") {
    const lastSlug = data.frenchLessons ? Object.keys(data.frenchLessons).at(-1) : null;
    const theme = lastSlug ? FRENCH_THEMES.find(t => t.slug === lastSlug) : null;
    if (theme) results.push({ label: "Français", name: `${theme.code} – ${theme.title}` });
  }

  if (data.lectureProgress?.modules) {
    const entry = Object.entries(data.lectureProgress.modules).find(([, v]) => v !== "completed");
    if (entry) {
      const mod = LECTURE_MODULES.find(m => m.id === entry[0]);
      if (mod) results.push({ label: "Lecture", name: `${mod.code} – ${mod.title}` });
    }
  }

  return results;
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

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function ProgressCell({ done, total, pct, color }: { done: number; total: number; pct: number; color: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{done}/{total}</span>
      <Bar pct={pct} color={color} />
    </div>
  );
}

// ── Icons ───────────────────────────────────────────────────────────────────

function IconEdit() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

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

function IconCancel() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function IconSave() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

// ── Detail Modal ────────────────────────────────────────────────────────────

function DetailModal({
  user,
  onClose,
  onEdit,
  onDelete,
  onToggleAdmin,
}: {
  user: UserRow;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onToggleAdmin: () => void;
}) {
  const fullName = [user.prenom, user.nom].filter(Boolean).join(" ") || "—";
  const location = [user.npa, user.localite].filter(Boolean).join(" ") || null;
  const math = mathPct(user.progress_data);
  const french = frenchPct(user.progress_data);
  const lecture = lecturePct(user.progress_data);
  const activity = user.progress_updated_at ?? user.progress_data?.lastActivityAt ?? null;
  const activeLessons = currentActiveLessons(user.progress_data);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      <div
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{fullName}</h2>
            </div>
            {user.classe && (
              <span className="mt-1 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                {user.classe}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Fermer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Info */}
        <div className="mb-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <p>{user.email}</p>
          {user.adresse && <p>{user.adresse}</p>}
          {location && <p>{location}</p>}
          {user.telephone && <p>{user.telephone}</p>}
          <p className="pt-1 text-xs text-zinc-400 dark:text-zinc-500">
            Dernier accès : {lastSeen(activity)}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-3 space-y-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <span>Maths</span><span>{math.done}/{math.total}</span>
            </div>
            <Bar pct={math.pct} color="bg-blue-500" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <span>Français</span><span>{french.done}/{french.total}</span>
            </div>
            <Bar pct={french.pct} color="bg-emerald-500" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <span>Lecture</span><span>{lecture.done}/{lecture.total}</span>
            </div>
            <Bar pct={lecture.pct} color="bg-amber-500" />
          </div>
        </div>

        {/* Current lessons */}
        {activeLessons.length > 0 && (
          <div className="mb-4 space-y-1.5 rounded-xl bg-zinc-50 px-4 py-3 dark:bg-zinc-800/50">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">En cours</p>
            {activeLessons.map((l, i) => (
              <p key={i} className="text-xs text-zinc-600 dark:text-zinc-300">
                <span className="font-semibold text-zinc-500 dark:text-zinc-400">{l.label} : </span>
                {l.name}
              </p>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Edit icon button */}
          <button
            onClick={onEdit}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-400 dark:hover:bg-blue-900/60"
            aria-label="Modifier"
          >
            <IconEdit />
          </button>

          {/* Delete icon button */}
          <button
            onClick={onDelete}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/40 dark:text-red-400 dark:hover:bg-red-900/60"
            aria-label="Supprimer"
          >
            <IconTrash />
          </button>

          {/* Admin / Utilisateur toggle */}
          <div className="ml-auto flex overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
            <button
              onClick={!user.is_admin ? onToggleAdmin : undefined}
              className={`px-3 py-2 text-xs font-semibold transition-colors ${user.is_admin ? "bg-blue-600 text-white" : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
            >
              Admin
            </button>
            <button
              onClick={user.is_admin ? onToggleAdmin : undefined}
              className={`px-3 py-2 text-xs font-semibold transition-colors ${!user.is_admin ? "bg-zinc-700 text-white dark:bg-zinc-600" : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
            >
              Utilisateur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Edit Modal ──────────────────────────────────────────────────────────────

function EditModal({
  user,
  onClose,
  onSaved,
}: {
  user: UserRow;
  onClose: () => void;
  onSaved: (updated: Partial<UserRow>) => void;
}) {
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  const [form, setForm] = useState({
    prenom: user.prenom ?? "",
    nom: user.nom ?? "",
    classe: user.classe ?? "",
    adresse: user.adresse ?? "",
    npa: user.npa ?? "",
    localite: user.localite ?? "",
    telephone: user.telephone ?? "",
  });

  const field = (key: keyof typeof form, label: string, opts?: { placeholder?: string }) => (
    <div>
      <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">{label}</label>
      <input
        type="text"
        placeholder={opts?.placeholder}
        value={form[key]}
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
      />
    </div>
  );

  function submit() {
    setErr(null);
    startTransition(async () => {
      const r = await updateUserProfileAction(user.id, {
        prenom: form.prenom || undefined,
        nom: form.nom || undefined,
        classe: form.classe || undefined,
        adresse: form.adresse || undefined,
        npa: form.npa || undefined,
        localite: form.localite || undefined,
        telephone: form.telephone || undefined,
      });
      if (!r.ok) { setErr(r.reason ?? "Erreur"); return; }
      onSaved(form);
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      <div
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
        onClick={e => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-50">Modifier le profil</h2>
          <button onClick={onClose} className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {field("prenom", "Prénom")}
            {field("nom", "Nom")}
          </div>
          {field("classe", "Classe", { placeholder: "ex : 7H" })}
          {field("adresse", "Adresse")}
          <div className="grid grid-cols-2 gap-3">
            {field("npa", "NPA", { placeholder: "1234" })}
            {field("localite", "Localité")}
          </div>
          {field("telephone", "Téléphone", { placeholder: "+41 79 …" })}
        </div>

        {err && <p className="mt-3 text-sm text-red-600">{err}</p>}

        {/* Save / Cancel icon buttons */}
        <div className="mt-5 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            aria-label="Annuler"
          >
            <IconCancel />
          </button>
          <button
            onClick={submit}
            disabled={pending}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
            aria-label="Enregistrer"
          >
            {pending ? (
              <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            ) : <IconSave />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Delete Confirm ──────────────────────────────────────────────────────────

function DeleteConfirm({
  user,
  onClose,
  onDeleted,
}: {
  user: UserRow;
  onClose: () => void;
  onDeleted: () => void;
}) {
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  const fullName = [user.prenom, user.nom].filter(Boolean).join(" ") || user.email;

  function confirm() {
    startTransition(async () => {
      const r = await deleteUserAction(user.id);
      if (!r.ok) { setErr(r.reason ?? "Erreur"); return; }
      onDeleted();
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      <div
        className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="mb-2 text-base font-bold text-zinc-900 dark:text-zinc-50">Supprimer le compte</h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Supprimer définitivement <strong>{fullName}</strong> ? Cette action est irréversible.
        </p>
        {err && <p className="mb-3 text-sm text-red-600">{err}</p>}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            aria-label="Annuler"
          >
            <IconCancel />
          </button>
          <button
            onClick={confirm}
            disabled={pending}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white hover:bg-red-700 disabled:opacity-60"
            aria-label="Supprimer"
          >
            {pending ? (
              <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            ) : <IconTrash />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export function AdminTable({ initialRows }: { initialRows: UserRow[] }) {
  const [rows, setRows] = useState<UserRow[]>(initialRows);
  const [tab, setTab] = useState<"eleves" | "classes">("eleves");
  const [filterClasse, setFilterClasse] = useState<string>("");
  const [sortBy, setSortBy] = useState<"name" | "math" | "francais" | "lecture">("name");
  const [sortOpen, setSortOpen] = useState(false);
  const [selected, setSelected] = useState<UserRow | null>(null);
  const [editing, setEditing] = useState<UserRow | null>(null);
  const [confirming, setConfirming] = useState<UserRow | null>(null);
  const [, startTransition] = useTransition();

  const classes = Array.from(new Set(rows.map(r => r.classe).filter(Boolean) as string[])).sort();

  const filtered = rows.filter(r => tab === "eleves" || !filterClasse || r.classe === filterClasse);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "math") return mathPct(b.progress_data).pct - mathPct(a.progress_data).pct;
    if (sortBy === "francais") return frenchPct(b.progress_data).pct - frenchPct(a.progress_data).pct;
    if (sortBy === "lecture") return lecturePct(b.progress_data).pct - lecturePct(a.progress_data).pct;
    const na = [a.prenom, a.nom].filter(Boolean).join(" ").toLowerCase();
    const nb = [b.prenom, b.nom].filter(Boolean).join(" ").toLowerCase();
    return na.localeCompare(nb, "fr");
  });

  function handleToggleAdmin(user: UserRow) {
    startTransition(async () => {
      const r = await toggleAdminAction(user.id, user.is_admin);
      if (r.ok) {
        setRows(rs => rs.map(r2 => r2.id === user.id ? { ...r2, is_admin: !user.is_admin } : r2));
        setSelected(s => s?.id === user.id ? { ...s, is_admin: !user.is_admin } : s);
      }
    });
  }

  function handleDeleted(userId: string) {
    setRows(rs => rs.filter(r => r.id !== userId));
    setConfirming(null);
    setSelected(null);
  }

  function handleSaved(userId: string, data: Partial<UserRow>) {
    setRows(rs => rs.map(r => r.id === userId ? { ...r, ...data } : r));
    setSelected(s => s?.id === userId ? { ...s, ...data } : s);
    setEditing(null);
  }

  return (
    <>
      {/* Filters */}
      <div className="mb-4 space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          {/* Élèves / Classes pill toggle */}
          <div className="flex overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 p-0.5 dark:border-zinc-700 dark:bg-zinc-800">
            <button
              onClick={() => setTab("eleves")}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${tab === "eleves" ? "bg-violet-600 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}
            >
              Élèves
            </button>
            <button
              onClick={() => { setTab("classes"); if (!filterClasse && classes[0]) setFilterClasse(classes[0]); }}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${tab === "classes" ? "bg-violet-600 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}
            >
              Classes
            </button>
          </div>

          {/* Sort expandable pill */}
          <div className={`flex items-center overflow-hidden rounded-full transition-all duration-200 ${sortOpen ? "border border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/30" : "border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"}`}>
            <button
              onClick={() => setSortOpen(o => !o)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${sortOpen ? "bg-violet-600 text-white" : "text-zinc-600 dark:text-zinc-300"}`}
            >
              Trier
            </button>
            {sortOpen && (
              <div className="flex items-center gap-1 pr-2">
                {([["name", "Nom A→Z"], ["math", "Maths"], ["francais", "Français"], ["lecture", "Lecture"]] as const).map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => { setSortBy(val); setSortOpen(false); }}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${sortBy === val ? "text-violet-700 dark:text-violet-400" : "text-violet-500/70 hover:text-violet-700 dark:text-violet-500 dark:hover:text-violet-300"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="ml-auto text-sm text-zinc-500">{sorted.length} élève{sorted.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Class dropdown — visible only when Classes tab active */}
        {tab === "classes" && (
          <select
            value={filterClasse}
            onChange={e => setFilterClasse(e.target.value)}
            className="w-56 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="">Choisir une classe</option>
            {classes.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
              {["Élève", "Classe", "Dernier accès", "Maths", "Français", "Lecture", ""].map((h, i) => (
                <th key={i} className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-zinc-400">Aucun utilisateur.</td>
              </tr>
            ) : sorted.map(row => {
              const fullName = [row.prenom, row.nom].filter(Boolean).join(" ") || "—";
              const math = mathPct(row.progress_data);
              const french = frenchPct(row.progress_data);
              const lecture = lecturePct(row.progress_data);
              const activity = row.progress_updated_at ?? row.progress_data?.lastActivityAt ?? null;

              return (
                <tr key={row.id} className="bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900">
                  <td className="px-4 py-3">
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{fullName}</span>
                  </td>
                  <td className="px-4 py-3">
                    {row.classe ? (
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {row.classe}
                      </span>
                    ) : <span className="text-zinc-400">—</span>}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-zinc-500 dark:text-zinc-400">
                    {lastSeen(activity)}
                  </td>
                  <td className="w-28 px-4 py-3">
                    <ProgressCell {...math} color="bg-blue-500" />
                  </td>
                  <td className="w-28 px-4 py-3">
                    <ProgressCell {...french} color="bg-emerald-500" />
                  </td>
                  <td className="w-28 px-4 py-3">
                    <ProgressCell {...lecture} color="bg-amber-500" />
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelected(row)}
                      className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                      aria-label="Voir détails"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {selected && !editing && !confirming && (
        <DetailModal
          user={selected}
          onClose={() => setSelected(null)}
          onEdit={() => setEditing(selected)}
          onDelete={() => setConfirming(selected)}
          onToggleAdmin={() => handleToggleAdmin(selected)}
        />
      )}
      {editing && (
        <EditModal
          user={editing}
          onClose={() => setEditing(null)}
          onSaved={data => handleSaved(editing.id, data)}
        />
      )}
      {confirming && (
        <DeleteConfirm
          user={confirming}
          onClose={() => setConfirming(null)}
          onDeleted={() => handleDeleted(confirming.id)}
        />
      )}
    </>
  );
}
