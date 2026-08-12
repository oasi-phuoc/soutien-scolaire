"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PIVOT_LANGS } from "@/lib/pivot-langs";
import {
  changeRoleAction,
  deleteUserAction,
  updateUserProfileAction,
  setUserPrintAccessAction,
  setUserPlacementAccessAction,
  setUserFreeAccessAction,
  setUserPartialFlagAction,
} from "@/app/actions/admin";
import {
  PARTIAL_FRENCH_COMM_MAX,
  PARTIAL_FRENCH_GRAMMAR_MAX,
  PARTIAL_MATH_A3_MAX,
  PARTIAL_MATH_A8_MAX,
  PARTIAL_MATH_G3_MAX,
} from "@/lib/auth/lesson-access";
import { StudentProgressDetail } from "@/components/suivi/StudentProgressDetail";
import { StudentClasseEditor } from "@/components/suivi/StudentClasseEditor";
import { StudentPasswordEditor } from "@/components/suivi/StudentPasswordEditor";
import { TeacherClassAssignment } from "@/components/suivi/TeacherClassAssignment";
import { AppSelect } from "@/components/ui/AppSelect";
import { APP_SHELL_FULL } from "@/lib/layout/page-shell";
import type { UserRow } from "./AdminTable";

const LANGUE_LABELS: Record<string, string> = {
  fr: "Français",
  ...Object.fromEntries(PIVOT_LANGS.map(l => [l.code, l.labelFr])),
  other: "Autre",
};

const ROLE_LABELS: Record<UserRow["role"], string> = { eleve: "Élève", prof: "Prof", admin: "Admin" };
const ROLE_ORDER: UserRow["role"][] = ["eleve", "prof", "admin"];

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

// ── Icons ───────────────────────────────────────────────────────────────────

function IconEdit() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;
}
function IconTrash() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>;
}
function IconCancel() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>;
}
function IconSave() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>;
}
function Spinner() {
  return <svg className="animate-spin" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>;
}

// ── Edit Modal ──────────────────────────────────────────────────────────────

function EditModal({ user, onClose, onSaved }: { user: UserRow; onClose: () => void; onSaved: (data: Partial<UserRow>) => void }) {
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  const LANGUES_OPTIONS = [...PIVOT_LANGS.map(l => ({ code: l.code, label: l.labelFr })), { code: "other", label: "Autre" }];
  const [form, setForm] = useState({
    prenom: user.prenom ?? "", nom: user.nom ?? "",
    adresse: user.adresse ?? "", npa: user.npa ?? "", localite: user.localite ?? "",
    telephone: user.telephone ?? "", langue: user.langue ?? "en",
  });

  const inputCls = "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-theme)] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50";

  function submit(e?: React.MouseEvent) {
    e?.stopPropagation();
    e?.preventDefault();
    setErr(null);
    startTransition(async () => {
      const r = await updateUserProfileAction(user.id, {
        prenom: form.prenom || undefined,
        nom: form.nom || undefined,
        adresse: form.adresse || undefined,
        npa: form.npa || undefined,
        localite: form.localite || undefined,
        telephone: form.telephone || undefined,
        langue: form.langue || undefined,
      });
      if (!r.ok) { setErr(r.reason ?? "Erreur"); return; }
      onSaved({ ...form, langue: form.langue || null });
    });
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-eleve-title"
        className="relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-zinc-100 px-6 py-4 dark:border-zinc-800">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Fermer"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h2 id="edit-eleve-title" className="text-base font-bold text-zinc-900 dark:text-zinc-50">Modifier les données</h2>
        </div>
        <div className="space-y-3 overflow-y-auto px-6 py-4">
          <div className="grid grid-cols-2 gap-3">
            <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Prénom</label><input type="text" value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))} className={inputCls} /></div>
            <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Nom</label><input type="text" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} className={inputCls} /></div>
          </div>
          <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Adresse</label><input type="text" value={form.adresse} onChange={e => setForm(f => ({ ...f, adresse: e.target.value }))} className={inputCls} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">NPA</label><input type="text" placeholder="1234" value={form.npa} onChange={e => setForm(f => ({ ...f, npa: e.target.value }))} className={inputCls} /></div>
            <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Localité</label><input type="text" value={form.localite} onChange={e => setForm(f => ({ ...f, localite: e.target.value }))} className={inputCls} /></div>
          </div>
          <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Téléphone</label><input type="text" placeholder="+41 79 …" value={form.telephone} onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))} className={inputCls} /></div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Langue parlée</label>
            <AppSelect
              value={form.langue}
              onChange={(v) => setForm((f) => ({ ...f, langue: v }))}
              options={LANGUES_OPTIONS.map((l) => ({ value: l.code, label: l.label }))}
              className="w-full"
              placement="top"
            />
          </div>
          {err && <p className="text-sm text-red-600">{err}</p>}
        </div>
        <div className="flex justify-end gap-2 border-t border-zinc-100 px-6 py-4 dark:border-zinc-800">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Annuler"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"
          >
            <IconCancel />
          </button>
          <button
            type="button"
            onClick={submit}
            disabled={pending}
            aria-label="Enregistrer"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-theme)] text-white hover:opacity-90 disabled:opacity-60"
          >
            {pending ? <Spinner /> : <IconSave />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Delete Confirm ──────────────────────────────────────────────────────────

function DeleteConfirm({ user, onClose, onDeleted }: { user: UserRow; onClose: () => void; onDeleted: () => void }) {
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
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
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900" onClick={e => e.stopPropagation()}>
        <h2 className="mb-2 text-base font-bold text-zinc-900 dark:text-zinc-50">Supprimer le compte</h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">Supprimer définitivement <strong>{fullName}</strong> ? Cette action est irréversible.</p>
        <button onClick={() => setConfirmed(c => !c)} className={`mb-4 flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${confirmed ? "border-red-300 bg-red-50 text-red-700 dark:border-red-700 dark:bg-red-950/30 dark:text-red-400" : "border-zinc-200 bg-zinc-50 text-zinc-500 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-400"}`}>
          <span className={`flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${confirmed ? "bg-red-500" : "bg-zinc-300 dark:bg-zinc-600"}`}>
            <span className={`ml-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${confirmed ? "translate-x-4" : "translate-x-0"}`} />
          </span>
          Je confirme la suppression définitive
        </button>
        {err && <p className="mb-3 text-sm text-red-600">{err}</p>}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"><IconCancel /></button>
          <button onClick={confirm} disabled={!confirmed || pending} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40">
            {pending ? <Spinner /> : <IconTrash />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page Component ─────────────────────────────────────────────────────

export function EleveDetailPage({
  user: initialUser,
  currentUserId,
  currentUserRole,
  context = "admin",
  backHref,
}: {
  user: UserRow;
  currentUserId: string;
  currentUserRole: "admin" | "prof";
  context?: "admin" | "suivi";
  backHref?: string;
}) {
  const router = useRouter();
  const [user, setUser] = useState(initialUser);
  const [editing, setEditing] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [, startTransition] = useTransition();

  const fullName = [user.prenom, user.nom].filter(Boolean).join(" ") || "—";
  const location = [user.npa, user.localite].filter(Boolean).join(" ") || null;
  const activity = user.progress_updated_at ?? user.progress_data?.lastActivityAt ?? null;

  const isSuivi = context === "suivi";
  const isSelf = user.id === currentUserId;
  const canDelete = !isSuivi && currentUserRole === "admin" && !isSelf && user.role !== "admin";
  const canChangeRole = !isSuivi && currentUserRole === "admin" && !isSelf;
  // Admin : tous les comptes (admin + suivi). Prof : élèves de ses classes.
  const canEditAccount =
    currentUserRole === "admin" ||
    (currentUserRole === "prof" && user.role === "eleve");
  const canTogglePrint = !isSuivi && currentUserRole === "admin" && user.role !== "admin";
  const canTogglePlacement = !isSuivi && currentUserRole === "admin" && user.role === "eleve";
  const showTeacherAssignment = !isSuivi && currentUserRole === "admin" && user.role === "prof";

  function handleChangeRole(newRole: "eleve" | "prof" | "admin") {
    startTransition(async () => {
      const r = await changeRoleAction(user.id, newRole);
      if (r.ok) setUser(u => ({ ...u, role: newRole, is_admin: newRole === "admin" }));
    });
  }

  function handleTogglePrint(next: boolean) {
    startTransition(async () => {
      const prev = user.can_print;
      setUser(u => ({ ...u, can_print: next }));
      const r = await setUserPrintAccessAction(user.id, next);
      if (!r.ok) setUser(u => ({ ...u, can_print: prev }));
    });
  }

  function handleTogglePlacement(next: boolean) {
    startTransition(async () => {
      const prev = user.can_placement;
      setUser((u) => ({ ...u, can_placement: next }));
      const r = await setUserPlacementAccessAction(user.id, next);
      if (!r.ok) setUser((u) => ({ ...u, can_placement: prev }));
    });
  }

  function handleToggleFreeAccess(next: boolean) {
    startTransition(async () => {
      const prev = {
        can_free_access: user.can_free_access,
        can_partial_french_grammar: user.can_partial_french_grammar,
        can_partial_french_comm: user.can_partial_french_comm,
        can_partial_math_a3: user.can_partial_math_a3,
        can_partial_math_a8: user.can_partial_math_a8,
        can_partial_math_g3: user.can_partial_math_g3,
      };
      setUser((u) => ({
        ...u,
        can_free_access: next,
        ...(next
          ? {
              can_partial_french_grammar: false,
              can_partial_french_comm: false,
              can_partial_math_a3: false,
              can_partial_math_a8: false,
              can_partial_math_g3: false,
            }
          : {}),
      }));
      const r = await setUserFreeAccessAction(user.id, next);
      if (!r.ok) setUser((u) => ({ ...u, ...prev }));
    });
  }

  function handleTogglePartialFlag(
    key:
      | "can_partial_french_grammar"
      | "can_partial_french_comm"
      | "can_partial_math_a3"
      | "can_partial_math_a8"
      | "can_partial_math_g3",
    flag:
      | "french_grammar"
      | "french_comm"
      | "math_a3"
      | "math_a8"
      | "math_g3",
    next: boolean,
  ) {
    startTransition(async () => {
      const prev = user[key];
      setUser((u) => ({ ...u, [key]: next }));
      const r = await setUserPartialFlagAction(user.id, flag, next);
      if (!r.ok) setUser((u) => ({ ...u, [key]: prev }));
    });
  }

  function AccessSwitch({
    checked,
    disabled,
    label,
    description,
    ariaLabel,
    onToggle,
  }: {
    checked: boolean;
    disabled?: boolean;
    label: string;
    description?: string;
    ariaLabel: string;
    onToggle: () => void;
  }) {
    return (
      <label className={`flex items-center justify-between gap-4 select-none ${disabled ? "opacity-50" : "cursor-pointer"}`}>
        <span className="text-sm text-zinc-700 dark:text-zinc-300">
          {label}
          {description ? (
            <span className="mt-0.5 block text-xs text-zinc-500 dark:text-zinc-400">{description}</span>
          ) : null}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={ariaLabel}
          disabled={disabled}
          onClick={onToggle}
          className={`flex h-7 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors disabled:cursor-not-allowed ${
            checked ? "bg-[var(--color-theme)]" : "bg-zinc-300 dark:bg-zinc-600"
          }`}
        >
          <span
            className={`block h-6 w-6 rounded-full bg-white shadow transition-transform ${
              checked ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </button>
      </label>
    );
  }

  return (
    <main className={`${APP_SHELL_FULL} flex-1 py-8 pb-28`}>

      {/* Back button + Header */}
      <div className="mb-6">
        <button
          onClick={() => (backHref ? router.push(backHref) : router.back())}
          className="mb-4 flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6" /></svg>
          {isSuivi ? "Retour à la classe" : "Retour à la liste"}
        </button>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{fullName}</h1>
              <span className="rounded-full bg-[var(--color-theme-light)] px-2.5 py-0.5 text-xs font-bold text-[var(--color-theme-muted)]">
                {ROLE_LABELS[user.role]}
              </span>
              {user.classe && (
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {user.classe}
                </span>
              )}
            </div>
            <p className="mt-1 font-mono text-sm font-semibold text-teal-700 dark:text-teal-400">
              {user.login_id ?? user.email?.replace(/@soutien\.local$/, "") ?? "—"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {canEditAccount && (
              <button onClick={() => setEditing(true)} className="flex items-center gap-1.5 rounded-xl bg-[var(--color-theme-light)] px-3 py-2 text-sm font-semibold text-[var(--color-theme)] hover:opacity-90 dark:bg-[var(--color-theme)]/20 dark:text-[var(--color-theme-muted)]">
                <IconEdit /> Modifier
              </button>
            )}
            {canDelete && (
              <button onClick={() => setConfirming(true)} className="flex items-center gap-1.5 rounded-xl bg-red-100 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-200 dark:bg-red-900/40 dark:text-red-300">
                <IconTrash /> Supprimer
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left column — Info */}
        <div className="space-y-5">

          {/* Info card */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Informations</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="w-28 shrink-0 text-zinc-400">Classe</dt>
                <dd className="font-medium text-zinc-700 dark:text-zinc-300">
                  {user.classe || "—"}
                </dd>
              </div>
              {user.langue && (
                <div className="flex gap-2">
                  <dt className="w-28 shrink-0 text-zinc-400">Langue</dt>
                  <dd className="font-medium text-zinc-700 dark:text-zinc-300">{LANGUE_LABELS[user.langue] ?? user.langue}</dd>
                </div>
              )}
              {user.adresse && (
                <div className="flex gap-2">
                  <dt className="w-28 shrink-0 text-zinc-400">Adresse</dt>
                  <dd className="text-zinc-700 dark:text-zinc-300">{user.adresse}</dd>
                </div>
              )}
              {location && (
                <div className="flex gap-2">
                  <dt className="w-28 shrink-0 text-zinc-400">NPA / Localité</dt>
                  <dd className="text-zinc-700 dark:text-zinc-300">{location}</dd>
                </div>
              )}
              {user.telephone && (
                <div className="flex gap-2">
                  <dt className="w-28 shrink-0 text-zinc-400">Téléphone</dt>
                  <dd className="text-zinc-700 dark:text-zinc-300">{user.telephone}</dd>
                </div>
              )}
              <div className="flex gap-2">
                <dt className="w-28 shrink-0 text-zinc-400">Dernier accès</dt>
                <dd className={`font-medium ${lastSeen(activity) === "—" ? "text-zinc-400" : "text-amber-600 dark:text-amber-400"}`}>
                  {lastSeen(activity)}
                </dd>
              </div>
            </dl>
          </div>

          {canEditAccount && user.role === "eleve" && (
            <StudentClasseEditor
              studentId={user.id}
              classe={user.classe}
              onSaved={(newClasse) => {
                const prevClasse = user.classe;
                setUser((u) => ({ ...u, classe: newClasse }));
                if (isSuivi && newClasse !== prevClasse) {
                  router.replace(`/suivi/classes/${encodeURIComponent(newClasse)}`);
                }
              }}
            />
          )}

          {user.role !== "admin" && canEditAccount && (
            <StudentPasswordEditor studentId={user.id} />
          )}

          {/* Role change */}
          {showTeacherAssignment && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Classes affectées</h2>
              <TeacherClassAssignment teacherId={user.id} />
            </div>
          )}

          {canChangeRole && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Rôle</h2>
              <div className="flex overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
                {ROLE_ORDER.map(r => (
                  <button key={r} onClick={() => user.role !== r && handleChangeRole(r)}
                    className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                      user.role === r
                        ? "bg-[var(--color-theme)] text-white"
                        : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}>
                    {ROLE_LABELS[r]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {(canTogglePrint || user.role === "admin") && canEditAccount && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Impression</h2>
              {user.role === "admin" ? (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Les comptes admin ont toujours accès au hub Impression.
                </p>
              ) : (
                <label className="flex cursor-pointer items-center justify-between gap-4 select-none">
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    Autoriser l&apos;accès à l&apos;impression
                    <span className="mt-0.5 block text-xs text-zinc-500 dark:text-zinc-400">
                      Active ce bouton pour autoriser l&apos;ouverture du menu Impression et l&apos;impression des documents d&apos;exercice.
                    </span>
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={user.can_print}
                    aria-label="Accès impression"
                    onClick={() => handleTogglePrint(!user.can_print)}
                    className={`flex h-7 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors ${
                      user.can_print ? "bg-[var(--color-theme)]" : "bg-zinc-300 dark:bg-zinc-600"
                    }`}
                  >
                    <span
                      className={`block h-6 w-6 rounded-full bg-white shadow transition-transform ${
                        user.can_print ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </label>
              )}
            </div>
          )}

          {canTogglePlacement && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Test de placement</h2>
              <label className="flex cursor-pointer items-center justify-between gap-4 select-none">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  Autoriser l&apos;accès au test de placement
                  <span className="mt-0.5 block text-xs text-zinc-500 dark:text-zinc-400">
                    Active ce bouton pour laisser cet élève ouvrir le test de placement même si le module est désactivé pour tous.
                  </span>
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={user.can_placement}
                  aria-label="Accès test de placement"
                  onClick={() => handleTogglePlacement(!user.can_placement)}
                  className={`flex h-7 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors ${
                    user.can_placement ? "bg-[var(--color-theme)]" : "bg-zinc-300 dark:bg-zinc-600"
                  }`}
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white shadow transition-transform ${
                      user.can_placement ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </label>
            </div>
          )}

          {(canTogglePrint || user.role === "admin" || user.role === "prof") && canEditAccount && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Accès aux leçons</h2>
              {user.role === "admin" || user.role === "prof" ? (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Les comptes admin et prof ont déjà accès à toutes les leçons.
                </p>
              ) : (
                <div className="space-y-4">
                  <AccessSwitch
                    checked={user.can_free_access}
                    label="Accès complet"
                    description="Active ce bouton pour débloquer toutes les leçons sans devoir réussir l'évaluation précédente."
                    ariaLabel="Accès complet"
                    onToggle={() => handleToggleFreeAccess(!user.can_free_access)}
                  />
                  <div className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
                      Accès partiel — Français
                    </p>
                    <div className="space-y-3">
                      <AccessSwitch
                        checked={user.can_partial_french_grammar}
                        disabled={user.can_free_access}
                        label={`Grammaire - ${PARTIAL_FRENCH_GRAMMAR_MAX}`}
                        ariaLabel="Accès partiel grammaire G7.1"
                        onToggle={() =>
                          handleTogglePartialFlag(
                            "can_partial_french_grammar",
                            "french_grammar",
                            !user.can_partial_french_grammar,
                          )
                        }
                      />
                      <AccessSwitch
                        checked={user.can_partial_french_comm}
                        disabled={user.can_free_access}
                        label={`Communication - ${PARTIAL_FRENCH_COMM_MAX}`}
                        ariaLabel="Accès partiel communication E9.1"
                        onToggle={() =>
                          handleTogglePartialFlag(
                            "can_partial_french_comm",
                            "french_comm",
                            !user.can_partial_french_comm,
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
                      Accès partiel — Mathématiques
                    </p>
                    <div className="space-y-3">
                      <AccessSwitch
                        checked={user.can_partial_math_a3}
                        disabled={user.can_free_access}
                        label={`Algèbre ${PARTIAL_MATH_A3_MAX}`}
                        ariaLabel="Accès partiel maths A3.1"
                        onToggle={() =>
                          handleTogglePartialFlag(
                            "can_partial_math_a3",
                            "math_a3",
                            !user.can_partial_math_a3,
                          )
                        }
                      />
                      <AccessSwitch
                        checked={user.can_partial_math_a8}
                        disabled={user.can_free_access}
                        label={`Algèbre ${PARTIAL_MATH_A8_MAX}`}
                        ariaLabel="Accès partiel maths A8.1"
                        onToggle={() =>
                          handleTogglePartialFlag(
                            "can_partial_math_a8",
                            "math_a8",
                            !user.can_partial_math_a8,
                          )
                        }
                      />
                      <AccessSwitch
                        checked={user.can_partial_math_g3}
                        disabled={user.can_free_access}
                        label={`Géométrie ${PARTIAL_MATH_G3_MAX}`}
                        ariaLabel="Accès partiel maths G3.1"
                        onToggle={() =>
                          handleTogglePartialFlag(
                            "can_partial_math_g3",
                            "math_g3",
                            !user.can_partial_math_g3,
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right column — Progress */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-400">Progression</h2>
          <StudentProgressDetail userId={user.id} progressData={user.progress_data} />
        </div>
      </div>

      {editing && (
        <EditModal
          user={user}
          onClose={() => setEditing(false)}
          onSaved={(data) => {
            const prevClasse = user.classe;
            setUser((u) => ({ ...u, ...data }));
            setEditing(false);
            if (
              isSuivi &&
              data.classe &&
              data.classe !== prevClasse
            ) {
              router.replace(`/suivi/classes/${encodeURIComponent(data.classe)}`);
            }
          }}
        />
      )}
      {confirming && (
        <DeleteConfirm
          user={user}
          onClose={() => setConfirming(false)}
          onDeleted={() => router.replace(isSuivi ? "/suivi" : "/admin")}
        />
      )}
    </main>
  );
}
