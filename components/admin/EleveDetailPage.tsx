"use client";

import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MATH_MODULES } from "@/lib/curriculum/math-data";
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { LECTURE_MODULES } from "@/lib/curriculum/lecture-data";
import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import { PIVOT_LANGS } from "@/lib/pivot-langs";
import {
  changeRoleAction,
  deleteUserAction,
  updateUserProfileAction,
  changePasswordAction,
  getPlacementHistoryForUserAction,
} from "@/app/actions/admin";
import { EleveEngagementPanel } from "@/components/admin/EleveEngagementPanel";
import { TeacherClassAssignment } from "@/components/suivi/TeacherClassAssignment";
import { frenchProgress as frenchProgressSuivi } from "@/lib/suivi/progress-metrics";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import type { UserRow } from "./AdminTable";

const LANGUE_LABELS: Record<string, string> = {
  fr: "Français",
  ...Object.fromEntries(PIVOT_LANGS.map(l => [l.code, l.labelFr])),
  other: "Autre",
};

const ROLE_LABELS: Record<UserRow["role"], string> = { eleve: "Élève", prof: "Prof", admin: "Admin" };
const ROLE_ORDER: UserRow["role"][] = ["eleve", "prof", "admin"];

// ── Progress helpers ────────────────────────────────────────────────────────

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

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function formatPlacementHalf(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function PlacementSubjectBar({
  points,
  fillClass,
  circleClass,
}: {
  points: number;
  fillClass: string;
  circleClass: string;
}) {
  const pct = Math.min(100, Math.max(0, (points / 100) * 100));
  const circleLeft = `clamp(0px, calc(${pct}% - 10px), calc(100% - 20px))`;
  return (
    <div className="relative h-6 flex-1 overflow-visible">
      <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div className={`h-full rounded-full ${fillClass}`} style={{ width: `${pct}%` }} />
      </div>
      <div
        className={`absolute top-1/2 flex h-5 min-w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white px-0.5 text-[7px] font-bold leading-none text-white shadow-sm dark:border-zinc-900 ${circleClass}`}
        style={{ left: circleLeft }}
      >
        {formatPlacementHalf(points)}
      </div>
    </div>
  );
}

type PlacementTotalRow = {
  date: string;
  total: number;
  mathCounted: number;
  frenchCounted: number;
  zone: string;
};

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

// ── Password section ────────────────────────────────────────────────────────

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
    <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
      <p className="mb-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Changer le mot de passe</p>
      <div className="flex gap-2">
        <input
          type="password" value={pwd}
          onChange={e => { setPwd(e.target.value); setMsg(null); }}
          placeholder="Nouveau mot de passe (min. 8 caractères)"
          autoComplete="new-password"
          className="min-h-9 flex-1 rounded-lg border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-[var(--color-theme)] dark:border-zinc-600 dark:bg-zinc-950"
        />
        <button type="button" onClick={submit} disabled={pending || pwd.length < 8}
          className="min-h-9 rounded-lg bg-[var(--color-theme)] px-4 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50">
          {pending ? "…" : "OK"}
        </button>
      </div>
      {msg && <p className={`mt-1.5 text-xs ${msg.ok ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>{msg.text}</p>}
    </div>
  );
}

// ── Progress section ────────────────────────────────────────────────────────

function ProgressSection({ user, suiviMode }: { user: UserRow; suiviMode?: boolean }) {
  const math = mathPct(user.progress_data);
  const french = suiviMode
    ? frenchProgressSuivi(user.progress_data)
    : frenchPct(user.progress_data);
  const lecture = lecturePct(user.progress_data);
  const [mathOpen, setMathOpen] = useState(false);
  const [frenchOpen, setFrenchOpen] = useState(false);
  const [lectureOpen, setLectureOpen] = useState(false);
  const [placementOpen, setPlacementOpen] = useState(false);
  const [totalHistory, setTotalHistory] = useState<PlacementTotalRow[] | null>(null);
  const [combinedProfile, setCombinedProfile] = useState<{ total: number; zone: string; mathCounted: number; frenchCounted: number } | null>(null);

  useEffect(() => {
    getPlacementHistoryForUserAction(user.id).then(res => {
      if (res.ok) {
        setTotalHistory(res.totalHistory);
        setCombinedProfile(res.combinedProfile);
      }
    });
  }, [user.id]);

  const placementRows = totalHistory ? [...totalHistory].reverse().slice(0, 5) : [];
  const placementPct = combinedProfile
    ? Math.round((combinedProfile.total / 200) * 100)
    : 0;

  const rows: { label: string; stat: { done: number; total: number; pct: number }; color: string; open: boolean; toggle: () => void }[] = [
    { label: "Maths", stat: math, color: "bg-blue-500", open: mathOpen, toggle: () => setMathOpen(o => !o) },
    { label: "Français", stat: french, color: "bg-emerald-500", open: frenchOpen, toggle: () => setFrenchOpen(o => !o) },
    { label: "Lecture", stat: lecture, color: "bg-amber-500", open: lectureOpen, toggle: () => setLectureOpen(o => !o) },
  ];

  return (
    <div className="space-y-4">
      {rows.map(({ label, stat, color, open, toggle }) => (
        <div key={label} className="rounded-xl border border-zinc-100 p-4 dark:border-zinc-800">
          <button onClick={toggle} className="mb-2 flex w-full items-center justify-between text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            <span className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${open ? "rotate-90" : ""}`}><path d="m9 18 6-6-6-6" /></svg>
              {label}
            </span>
            <span className="font-mono text-xs">{stat.done}/{stat.total} — {stat.pct}%</span>
          </button>
          <Bar pct={stat.pct} color={color} />
          {open && (
            label === "Maths" ? (
              <EleveEngagementPanel userId={user.id} progress={user.progress_data} />
            ) : (
              <p className="mt-2 text-xs text-zinc-400">Progression : {stat.done}/{stat.total} leçons.</p>
            )
          )}
        </div>
      ))}

      {/* Test de placement */}
      {totalHistory !== null && (
        <div className="rounded-xl border border-zinc-100 p-4 dark:border-zinc-800">
          <div className="mb-2 flex w-full items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setPlacementOpen(o => !o)}
              className="flex min-w-0 items-center gap-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`shrink-0 transition-transform ${placementOpen ? "rotate-90" : ""}`}><path d="m9 18 6-6-6-6" /></svg>
              <span className="truncate">Test de placement</span>
            </button>
            <span className="flex shrink-0 items-center gap-1">
              {combinedProfile ? (
                <span className="font-mono text-xs text-violet-600 dark:text-violet-400">{formatPlacementHalf(combinedProfile.total)}/200 · {combinedProfile.zone}</span>
              ) : totalHistory.length === 0 ? (
                <span className="text-xs text-zinc-400">Aucun résultat</span>
              ) : null}
            </span>
          </div>
          {combinedProfile && (
            <p className="mb-2 text-xs text-zinc-500">
              Total /200 : {formatPlacementHalf(combinedProfile.total)} (maths {formatPlacementHalf(combinedProfile.mathCounted)} + français {formatPlacementHalf(combinedProfile.frenchCounted)}) · zone {combinedProfile.zone}
            </p>
          )}
          {combinedProfile && (
            <Bar pct={placementPct} color="bg-violet-500" />
          )}
          {placementOpen && placementRows.length > 0 && (
            <div className="mt-3 space-y-2">
              <div className="grid grid-cols-[3.5rem_1fr_1fr_3.5rem] items-center gap-2 px-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Date</span>
                <span className="text-center text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Math</span>
                <span className="text-center text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Français</span>
                <span className="text-right text-[10px] font-semibold uppercase tracking-wide text-zinc-400">Total</span>
              </div>
              {placementRows.map((row, i) => {
                const d = new Date(row.date);
                return (
                  <div key={`${row.date}-${i}`} className="grid grid-cols-[3.5rem_1fr_1fr_3.5rem] items-center gap-2">
                    <span className="text-[11px] tabular-nums text-zinc-400">
                      {d.toLocaleDateString("fr-CH", { day: "2-digit", month: "2-digit", year: "2-digit" })}
                    </span>
                    <PlacementSubjectBar
                      points={row.mathCounted}
                      fillClass="bg-blue-400"
                      circleClass="bg-blue-500"
                    />
                    <PlacementSubjectBar
                      points={row.frenchCounted}
                      fillClass="bg-emerald-400"
                      circleClass="bg-emerald-500"
                    />
                    <span className="text-right text-[11px] font-semibold tabular-nums text-zinc-700 dark:text-zinc-200">
                      {formatPlacementHalf(row.total)}/200
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Edit Modal ──────────────────────────────────────────────────────────────

function EditModal({ user, onClose, onSaved }: { user: UserRow; onClose: () => void; onSaved: (data: Partial<UserRow>) => void }) {
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  const parsedClasse = user.classe?.split(" ") ?? [];
  const LANGUES_OPTIONS = [...PIVOT_LANGS.map(l => ({ code: l.code, label: l.labelFr })), { code: "other", label: "Autre" }];
  const [form, setForm] = useState({
    prenom: user.prenom ?? "", nom: user.nom ?? "",
    classeType: parsedClasse[0] ?? "", classeNum: parsedClasse[1] ?? "",
    adresse: user.adresse ?? "", npa: user.npa ?? "", localite: user.localite ?? "",
    telephone: user.telephone ?? "", langue: user.langue ?? "en",
  });

  const inputCls = "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-theme)] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50";

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
        <div className="mb-4 flex items-center gap-2">
          <button onClick={onClose} aria-label="Fermer" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-50">Modifier les données</h2>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Prénom</label><input type="text" value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))} className={inputCls} /></div>
            <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Nom</label><input type="text" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} className={inputCls} /></div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Classe</label>
            <div className="grid grid-cols-2 gap-2">
              <select value={form.classeType} onChange={e => setForm(f => ({ ...f, classeType: e.target.value }))} className={inputCls}>
                <option value="">Filière</option>
                {["CSC", "CFR", "EPL", "CPR"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={form.classeNum} onChange={e => setForm(f => ({ ...f, classeNum: e.target.value }))} className={inputCls}>
                <option value="">N°</option>
                {Array.from({ length: 20 }, (_, i) => <option key={i} value={String(i + 1)}>{String(i + 1).padStart(2, "0")}</option>)}
              </select>
            </div>
          </div>
          <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Adresse</label><input type="text" value={form.adresse} onChange={e => setForm(f => ({ ...f, adresse: e.target.value }))} className={inputCls} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">NPA</label><input type="text" placeholder="1234" value={form.npa} onChange={e => setForm(f => ({ ...f, npa: e.target.value }))} className={inputCls} /></div>
            <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Localité</label><input type="text" value={form.localite} onChange={e => setForm(f => ({ ...f, localite: e.target.value }))} className={inputCls} /></div>
          </div>
          <div><label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Téléphone</label><input type="text" placeholder="+41 79 …" value={form.telephone} onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))} className={inputCls} /></div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Langue parlée</label>
            <select value={form.langue} onChange={e => setForm(f => ({ ...f, langue: e.target.value }))} className={inputCls}>
              {LANGUES_OPTIONS.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
          </div>
        </div>
        {err && <p className="mt-3 text-sm text-red-600">{err}</p>}
        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onClose} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"><IconCancel /></button>
          <button onClick={submit} disabled={pending} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-theme)] text-white hover:opacity-90 disabled:opacity-60">
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
  const canEditAccount = !isSuivi && currentUserRole === "admin";
  const showTeacherAssignment = !isSuivi && currentUserRole === "admin" && user.role === "prof";

  function handleChangeRole(newRole: "eleve" | "prof" | "admin") {
    startTransition(async () => {
      const r = await changeRoleAction(user.id, newRole);
      if (r.ok) setUser(u => ({ ...u, role: newRole, is_admin: newRole === "admin" }));
    });
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 pb-28">

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
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                user.role === "admin" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                : user.role === "prof" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}>
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
              {user.langue && (
                <div className="flex gap-2">
                  <dt className="w-28 shrink-0 text-zinc-400">Langue</dt>
                  <dd className="font-medium text-zinc-700 dark:text-zinc-300">🌐 {LANGUE_LABELS[user.langue] ?? user.langue}</dd>
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

          {/* Password */}
          {user.role !== "admin" && canEditAccount && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Sécurité</h2>
              <PasswordSection userId={user.id} />
            </div>
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
                        ? r === "admin" ? "bg-blue-600 text-white"
                          : r === "prof" ? "bg-emerald-600 text-white"
                          : "bg-zinc-700 text-white dark:bg-zinc-600"
                        : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}>
                    {ROLE_LABELS[r]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column — Progress */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-400">Progression</h2>
          <ProgressSection user={user} suiviMode={isSuivi} />
        </div>
      </div>

      {editing && (
        <EditModal
          user={user}
          onClose={() => setEditing(false)}
          onSaved={data => { setUser(u => ({ ...u, ...data })); setEditing(false); }}
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
