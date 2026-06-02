"use client";

import { useState, useTransition } from "react";
import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { LECTURE_MODULES } from "@/lib/curriculum/lecture-data";
import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import { PIVOT_LANGS } from "@/lib/pivot-langs";

const LANGUE_LABELS: Record<string, string> = {
  fr: "Français",
  ...Object.fromEntries(PIVOT_LANGS.map(l => [l.code, l.labelFr])),
  other: "Autre",
};
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import {
  changeRoleAction,
  deleteUserAction,
  updateUserProfileAction,
  resetAllElevesAction,
  changePasswordAction,
} from "@/app/actions/admin";

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

const BRANCH_LABELS: Record<string, string> = { algebra: "Algèbre", geometry: "Géométrie", stats: "Stats" };

function mathDetail(data: StoredProgressV1 | null) {
  const branches = ["algebra", "geometry", "stats"] as const;
  return branches.map(branch => {
    const mods = MATH_MODULES.filter(m => m.branch === branch);
    const ids = MATH_SUB_IDS_BY_BRANCH[branch];
    const total = mods.reduce((n, m) => n + m.submodules.length, 0);
    const done = data?.submoduleStates
      ? Object.entries(data.submoduleStates).filter(([id, s]) => ids.has(id) && s === "completed").length
      : mods.reduce((n, m) => n + Math.round((data?.math?.[m.id]?.subProgress ?? 0) * (data?.math?.[m.id]?.subTotal ?? 1)), 0);
    const inProgress = mods.filter(m => data?.math?.[m.id]?.state === "in_progress");
    return { branch, label: BRANCH_LABELS[branch], done, total, inProgress };
  });
}

function frenchDetail(data: StoredProgressV1 | null) {
  const completedSlugs = new Set(Object.keys(data?.frenchLessons ?? {}));
  const vocDone = FRENCH_VOC.filter(t => completedSlugs.has(t.slug)).length;
  const gramDone = FRENCH_GRAM.filter(t => completedSlugs.has(t.slug)).length;
  const commDone = COMM_SUBMODULES.filter(s => !!(data?.commProgress?.[s.id])).length;
  const firstCommSub = COMM_SUBMODULES.find(s => !(data?.commProgress?.[s.id]));
  const commInProgress = firstCommSub ? { code: firstCommSub.code, title: firstCommSub.title } : null;
  return [
    { tab: "vocabulaire", label: "Vocabulaire", done: vocDone, total: FRENCH_VOC.length, inProgress: FRENCH_VOC.find(t => !completedSlugs.has(t.slug)) ?? null as { code: string; title: string } | null },
    { tab: "grammaire", label: "Grammaire", done: gramDone, total: FRENCH_GRAM.length, inProgress: FRENCH_GRAM.find(t => !completedSlugs.has(t.slug)) ?? null as { code: string; title: string } | null },
    { tab: "communication", label: "Communication", done: commDone, total: COMM_SUBMODULES.length, inProgress: commInProgress },
  ];
}

function lectureDetail(data: StoredProgressV1 | null) {
  const subs = data?.lectureProgress?.submodules ?? {};
  return LECTURE_MODULES.map(m => {
    const subDone = m.letters.filter(l => subs[`${m.id}-${l.letterLower}`] === "completed").length;
    const inProgress = m.letters.filter(l => subs[`${m.id}-${l.letterLower}`] === "in_progress");
    const currentLetter = subDone > 0 && subDone < m.letters.length
      ? (m.letters.find(l => subs[`${m.id}-${l.letterLower}`] !== "completed") ?? null)
      : null;
    return { ...m, state: data?.lectureProgress?.modules?.[m.id] ?? null, subDone, subTotal: m.letters.length, inProgress, currentLetter };
  });
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

function Spinner() {
  return (
    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

const ROLE_LABELS: Record<UserRow["role"], string> = { eleve: "Élève", prof: "Prof", admin: "Admin" };
const ROLE_ORDER: UserRow["role"][] = ["eleve", "prof", "admin"];

// ── Detail Modal ────────────────────────────────────────────────────────────

function PasswordSection({ userId }: { userId: string }) {
  const [pwd, setPwd] = useState("");
  const [pending, startTransition] = useTransition();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  function submit() {
    if (!pwd) return;
    setMsg(null);
    startTransition(async () => {
      const r = await changePasswordAction(userId, pwd);
      if (r.ok) { setMsg({ ok: true, text: "Mot de passe mis à jour." }); setPwd(""); }
      else setMsg({ ok: false, text: r.reason ?? "Erreur" });
    });
  }

  return (
    <div className="mb-4 space-y-2 rounded-xl border border-zinc-200 p-3 dark:border-zinc-700">
      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Modifier le mot de passe</p>
      <div className="flex gap-2">
        <input
          type="password"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
          placeholder="Nouveau mot de passe (8+ car.)"
          className="min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
        />
        <button
          type="button"
          onClick={submit}
          disabled={pending || pwd.length < 8}
          className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {pending ? "…" : "OK"}
        </button>
      </div>
      {msg && (
        <p className={`text-xs ${msg.ok ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
          {msg.text}
        </p>
      )}
    </div>
  );
}

function DetailModal({
  user,
  currentUserId,
  currentUserRole,
  onClose,
  onEdit,
  onDelete,
  onChangeRole,
}: {
  user: UserRow;
  currentUserId: string;
  currentUserRole: "admin" | "prof";
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onChangeRole: (role: "eleve" | "prof" | "admin") => void;
}) {
  const fullName = [user.prenom, user.nom].filter(Boolean).join(" ") || "—";
  const location = [user.npa, user.localite].filter(Boolean).join(" ") || null;
  const math = mathPct(user.progress_data);
  const french = frenchPct(user.progress_data);
  const lecture = lecturePct(user.progress_data);
  const activity = user.progress_updated_at ?? user.progress_data?.lastActivityAt ?? null;
  const mathBranches = mathDetail(user.progress_data);
  const frenchTabs = frenchDetail(user.progress_data);
  const lectureItems = lectureDetail(user.progress_data);

  const [mathOpen, setMathOpen] = useState(false);
  const [frenchOpen, setFrenchOpen] = useState(false);
  const [lectureOpen, setLectureOpen] = useState(false);

  const isSelf = user.id === currentUserId;
  const canDelete = currentUserRole === "admin" && !isSelf && user.role !== "admin";
  const canChangeRole = currentUserRole === "admin" && !isSelf;

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
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                user.role === "admin" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                : user.role === "prof" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}>
                {ROLE_LABELS[user.role]}
              </span>
            </div>
            {user.classe && (
              <span className="mt-1 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                {user.classe}
              </span>
            )}
          </div>
          <button onClick={onClose} className="shrink-0 rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Info */}
        <div className="mb-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <p className="font-mono text-sm font-semibold text-teal-700 dark:text-teal-400">
            {user.login_id ?? user.email.replace(/@soutien\.local$/, "")}
          </p>
          {user.langue && (
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              🌐 {LANGUE_LABELS[user.langue] ?? user.langue}
            </p>
          )}
          {user.adresse && <p>{user.adresse}</p>}
          {location && <p>{location}</p>}
          {user.telephone && <p>{user.telephone}</p>}
          <p className="pt-1 text-xs text-zinc-400 dark:text-zinc-500">Dernier accès : {lastSeen(activity)}</p>
        </div>

        {/* Progress */}
        <div className="mb-4 space-y-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">

          {/* Maths */}
          <div>
            <button onClick={() => setMathOpen(o => !o)} className="mb-1 flex w-full items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${mathOpen ? "rotate-90" : ""}`}><path d="m9 18 6-6-6-6" /></svg>
                Maths
              </span>
              <span>{math.done}/{math.total}</span>
            </button>
            <Bar pct={math.pct} color="bg-blue-500" />
            {mathOpen && (
              <div className="mt-2 space-y-1">
                {mathBranches.map(b => (
                  <div key={b.branch}>
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                      <span className="font-medium">{b.label}</span>
                      <span>{b.done}/{b.total}</span>
                    </div>
                    {b.inProgress.map(m => (
                      <p key={m.id} className="ml-2 text-[11px] text-blue-600 dark:text-blue-400">
                        ↳ {m.code} – {m.title}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Français */}
          <div>
            <button onClick={() => setFrenchOpen(o => !o)} className="mb-1 flex w-full items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${frenchOpen ? "rotate-90" : ""}`}><path d="m9 18 6-6-6-6" /></svg>
                Français
              </span>
              <span>{french.done}/{french.total}</span>
            </button>
            <Bar pct={french.pct} color="bg-emerald-500" />
            {frenchOpen && (
              <div className="mt-2 space-y-1">
                {frenchTabs.map(t => (
                  <div key={t.tab}>
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                      <span className="font-medium">{t.label}</span>
                      <span className={t.done > 0 ? "font-semibold text-zinc-700 dark:text-zinc-200" : ""}>{t.done}/{t.total}</span>
                    </div>
                    {t.inProgress && (
                      <p className="ml-2 text-[11px] text-emerald-600 dark:text-emerald-400">
                        ↳ {t.inProgress.code} – {t.inProgress.title}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Lecture */}
          <div>
            <button onClick={() => setLectureOpen(o => !o)} className="mb-1 flex w-full items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${lectureOpen ? "rotate-90" : ""}`}><path d="m9 18 6-6-6-6" /></svg>
                Lecture
              </span>
              <span>{lecture.done}/{lecture.total}</span>
            </button>
            <Bar pct={lecture.pct} color="bg-amber-500" />
            {lectureOpen && (
              <div className="mt-2 space-y-1">
                {lectureItems.map(m => (
                  <div key={m.id}>
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                      <span className="font-medium">{m.code} – {m.title}</span>
                      <span>{m.subDone}/{m.subTotal}</span>
                    </div>
                    {m.inProgress.length > 0
                      ? m.inProgress.map(l => (
                          <p key={l.letterLower} className="ml-2 text-[11px] text-amber-600 dark:text-amber-400">
                            ↳ Lettre {l.letter}
                          </p>
                        ))
                      : m.currentLetter && (
                          <p className="ml-2 text-[11px] text-amber-600 dark:text-amber-400">
                            ↳ Lettre {m.currentLetter.letter}
                          </p>
                        )
                    }
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Password change */}
        {user.role !== "admin" && <PasswordSection userId={user.id} />}

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onEdit}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-400 dark:hover:bg-blue-900/60"
            aria-label="Modifier"
          >
            <IconEdit />
          </button>

          {canDelete && (
            <button
              onClick={onDelete}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/40 dark:text-red-400 dark:hover:bg-red-900/60"
              aria-label="Supprimer"
            >
              <IconTrash />
            </button>
          )}

          {canChangeRole && (
            <div className="ml-auto flex overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
              {ROLE_ORDER.map(r => (
                <button
                  key={r}
                  onClick={() => user.role !== r && onChangeRole(r)}
                  className={`px-3 py-2 text-xs font-semibold transition-colors ${
                    user.role === r
                      ? r === "admin" ? "bg-blue-600 text-white"
                        : r === "prof" ? "bg-emerald-600 text-white"
                        : "bg-zinc-700 text-white dark:bg-zinc-600"
                      : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {ROLE_LABELS[r]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Edit Modal ──────────────────────────────────────────────────────────────

function EditModal({ user, onClose, onSaved }: { user: UserRow; onClose: () => void; onSaved: (updated: Partial<UserRow>) => void }) {
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  const parsedClasse = user.classe?.split(" ") ?? [];
  const [form, setForm] = useState({
    prenom: user.prenom ?? "", nom: user.nom ?? "",
    classeType: parsedClasse[0] ?? "", classeNum: parsedClasse[1] ?? "",
    adresse: user.adresse ?? "", npa: user.npa ?? "", localite: user.localite ?? "", telephone: user.telephone ?? "",
    langue: user.langue ?? "en",
  });
  const LANGUES_OPTIONS = [...PIVOT_LANGS.map(l => ({ code: l.code, label: l.labelFr })), { code: "other", label: "Autre" }];

  const field = (key: keyof typeof form, label: string, opts?: { placeholder?: string }) => (
    <div>
      <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">{label}</label>
      <input
        type="text" placeholder={opts?.placeholder} value={form[key]}
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
      />
    </div>
  );

  function submit() {
    setErr(null);
    startTransition(async () => {
      const classe = form.classeType && form.classeNum ? `${form.classeType} ${form.classeNum}` : undefined;
      const r = await updateUserProfileAction(user.id, {
        prenom: form.prenom || undefined, nom: form.nom || undefined, classe,
        adresse: form.adresse || undefined, npa: form.npa || undefined,
        localite: form.localite || undefined, telephone: form.telephone || undefined,
        langue: form.langue || undefined,
      });
      if (!r.ok) { setErr(r.reason ?? "Erreur"); return; }
      onSaved({ ...form, classe: classe ?? null, langue: form.langue || null });
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900" onClick={e => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-50">Modifier le profil</h2>
          <button onClick={onClose} className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">{field("prenom", "Prénom")}{field("nom", "Nom")}</div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Classe</label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={form.classeType}
                onChange={e => setForm(f => ({ ...f, classeType: e.target.value }))}
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
              >
                <option value="">Filière</option>
                {["CSC", "CFR", "EPL", "CPR"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input
                type="number" min={1} max={20} placeholder="1–20"
                value={form.classeNum}
                onChange={e => setForm(f => ({ ...f, classeNum: e.target.value }))}
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
          </div>
          {field("adresse", "Adresse")}
          <div className="grid grid-cols-2 gap-3">{field("npa", "NPA", { placeholder: "1234" })}{field("localite", "Localité")}</div>
          {field("telephone", "Téléphone", { placeholder: "+41 79 …" })}
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Langue parlée</label>
            <select
              value={form.langue}
              onChange={e => setForm(f => ({ ...f, langue: e.target.value }))}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
            >
              {LANGUES_OPTIONS.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
          </div>
        </div>
        {err && <p className="mt-3 text-sm text-red-600">{err}</p>}
        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onClose} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700" aria-label="Annuler"><IconCancel /></button>
          <button onClick={submit} disabled={pending} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60" aria-label="Enregistrer">
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
        <button
          onClick={() => setConfirmed(c => !c)}
          className={`mb-4 flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
            confirmed
              ? "border-red-300 bg-red-50 text-red-700 dark:border-red-700 dark:bg-red-950/30 dark:text-red-400"
              : "border-zinc-200 bg-zinc-50 text-zinc-500 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-400"
          }`}
        >
          <span className={`flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${confirmed ? "bg-red-500" : "bg-zinc-300 dark:bg-zinc-600"}`}>
            <span className={`ml-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${confirmed ? "translate-x-4" : "translate-x-0"}`} />
          </span>
          Je confirme la suppression définitive
        </button>
        {err && <p className="mb-3 text-sm text-red-600">{err}</p>}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700" aria-label="Annuler"><IconCancel /></button>
          <button onClick={confirm} disabled={!confirmed || pending} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Supprimer">
            {pending ? <Spinner /> : <IconTrash />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Reset All Eleves Confirm ────────────────────────────────────────────────

function ResetElevesConfirm({ eleveCount, onClose, onReset }: { eleveCount: number; onClose: () => void; onReset: () => void }) {
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);

  function confirm() {
    startTransition(async () => {
      const r = await resetAllElevesAction();
      if (!r.ok) { setErr(r.reason ?? "Erreur"); return; }
      onReset();
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900" onClick={e => e.stopPropagation()}>
        <h2 className="mb-2 text-base font-bold text-zinc-900 dark:text-zinc-50">Supprimer tous les comptes élèves</h2>
        <p className="mb-1 text-sm text-zinc-600 dark:text-zinc-400">
          Cette action supprimera définitivement <strong>{eleveCount} compte{eleveCount !== 1 ? "s" : ""} élève{eleveCount !== 1 ? "s" : ""}</strong> ainsi que toutes leurs données de progression.
        </p>
        <p className="mb-4 text-sm font-semibold text-red-600 dark:text-red-400">Cette action est irréversible.</p>
        {err && <p className="mb-3 text-sm text-red-600">{err}</p>}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700" aria-label="Annuler"><IconCancel /></button>
          <button onClick={confirm} disabled={pending} className="flex items-center gap-2 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60">
            {pending ? <Spinner /> : <IconTrash />}
            {pending ? "Suppression…" : "Tout supprimer"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export function AdminTable({
  initialRows,
  currentUserId,
  currentUserRole,
}: {
  initialRows: UserRow[];
  currentUserId: string;
  currentUserRole: "admin" | "prof";
}) {
  const [rows, setRows] = useState<UserRow[]>(initialRows);
  const [tab, setTab] = useState<"eleves" | "classes">("eleves");
  const [filterClasse, setFilterClasse] = useState<string>("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "math" | "francais" | "lecture">("name");
  const [sortOpen, setSortOpen] = useState(false);
  const [selected, setSelected] = useState<UserRow | null>(null);
  const [editing, setEditing] = useState<UserRow | null>(null);
  const [confirming, setConfirming] = useState<UserRow | null>(null);
  const [resetConfirming, setResetConfirming] = useState(false);
  const [, startTransition] = useTransition();

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
    const na = [a.prenom, a.nom].filter(Boolean).join(" ").toLowerCase();
    const nb = [b.prenom, b.nom].filter(Boolean).join(" ").toLowerCase();
    return na.localeCompare(nb, "fr");
  });

  function handleChangeRole(user: UserRow, newRole: "eleve" | "prof" | "admin") {
    startTransition(async () => {
      const r = await changeRoleAction(user.id, newRole);
      if (r.ok) {
        setRows(rs => rs.map(r2 => r2.id === user.id ? { ...r2, role: newRole, is_admin: newRole === "admin" } : r2));
        setSelected(s => s?.id === user.id ? { ...s, role: newRole, is_admin: newRole === "admin" } : s);
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
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="relative flex-1 max-w-sm">
            <input
              type="search"
              autoComplete="off"
              placeholder="Rechercher un élève…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {classes.length > 0 && (
            <select value={filterClasse} onChange={e => setFilterClasse(e.target.value)}
              className="h-9 rounded-full border border-zinc-200 bg-white px-4 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
              <option value="">Toutes les classes</option>
              {classes.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          )}

          <div className={`flex overflow-hidden rounded-full p-0.5 border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800`}>
            <button onClick={() => setSortOpen(o => !o)} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${sortOpen ? "bg-violet-600 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}>Trier</button>
            {sortOpen && (
              <>
                {([["name", "Nom A→Z"], ["math", "Maths"], ["francais", "Français"], ["lecture", "Lecture"]] as const).map(([val, label]) => (
                  <button key={val} onClick={() => { setSortBy(val); setSortOpen(false); }} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${sortBy === val ? "text-violet-600 dark:text-violet-400" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}>{label}</button>
                ))}
              </>
            )}
          </div>

          <span className="text-sm text-zinc-500">{sorted.length} élève{sorted.length !== 1 ? "s" : ""}</span>

          {currentUserRole === "admin" && (
            <button
              onClick={() => setResetConfirming(true)}
              className="ml-auto flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 dark:border-red-800/50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40"
            >
              <IconTrash />
              Réinitialiser les élèves
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-violet-700 bg-violet-600 dark:border-violet-800 dark:bg-violet-700">
              {["Statut", "Élève", "Classe", "Dernier accès", "Maths", "Français", "Lecture", ""].map((h, i) => (
                <th key={i} className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-violet-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {sorted.length === 0 ? (
              <tr><td colSpan={8} className="px-4 py-8 text-center text-zinc-400">Aucun utilisateur.</td></tr>
            ) : sorted.map(row => {
              const fullName = [row.prenom, row.nom].filter(Boolean).join(" ") || "—";
              const math = mathPct(row.progress_data);
              const french = frenchPct(row.progress_data);
              const lecture = lecturePct(row.progress_data);
              const activity = row.progress_updated_at ?? row.progress_data?.lastActivityAt ?? null;
              return (
                <tr key={row.id} className="bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900">
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      row.role === "admin" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                      : row.role === "prof" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                      : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}>
                      {ROLE_LABELS[row.role]}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{fullName}</span>
                  </td>
                  <td className="px-4 py-3">
                    {row.classe ? <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{row.classe}</span> : <span className="text-zinc-400">—</span>}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-zinc-500 dark:text-zinc-400">{lastSeen(activity)}</td>
                  <td className="w-28 px-4 py-3"><ProgressCell {...math} color="bg-blue-500" /></td>
                  <td className="w-28 px-4 py-3"><ProgressCell {...french} color="bg-emerald-500" /></td>
                  <td className="w-28 px-4 py-3"><ProgressCell {...lecture} color="bg-amber-500" /></td>
                  <td className="px-4 py-3">
                    <button onClick={() => setSelected(row)} className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300" aria-label="Voir détails">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selected && !editing && !confirming && (
        <DetailModal
          user={selected}
          currentUserId={currentUserId}
          currentUserRole={currentUserRole}
          onClose={() => setSelected(null)}
          onEdit={() => setEditing(selected)}
          onDelete={() => setConfirming(selected)}
          onChangeRole={role => handleChangeRole(selected, role)}
        />
      )}
      {editing && <EditModal user={editing} onClose={() => setEditing(null)} onSaved={data => handleSaved(editing.id, data)} />}
      {confirming && <DeleteConfirm user={confirming} onClose={() => setConfirming(null)} onDeleted={() => handleDeleted(confirming.id)} />}
      {resetConfirming && (
        <ResetElevesConfirm
          eleveCount={rows.filter(r => r.role === "eleve").length}
          onClose={() => setResetConfirming(false)}
          onReset={() => {
            setRows(rs => rs.filter(r => r.role !== "eleve"));
            setResetConfirming(false);
            setSelected(null);
          }}
        />
      )}
    </>
  );
}
