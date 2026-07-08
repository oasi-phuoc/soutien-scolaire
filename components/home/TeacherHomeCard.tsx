"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  getClassStudentsSuiviAction,
  getSuiviContextAction,
  type ClassStudentSuiviRow,
  type SuiviContext,
} from "@/app/actions/suivi";

const ACCENT = "var(--color-theme)";
const PROGRESS_COL_W = "w-[5.5rem]";

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

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function ProgressCell({
  done,
  total,
  pct,
  color,
}: {
  done: number;
  total: number;
  pct: number;
  color: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${PROGRESS_COL_W}`}>
      <span className="text-[10px] font-semibold tabular-nums text-zinc-800 dark:text-zinc-200">
        {done}/{total}
      </span>
      <ProgressBar pct={pct} color={color} />
    </div>
  );
}

function ClassSelect({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full sm:w-52">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex h-10 w-full items-center justify-between rounded-[22px] border bg-white px-4 text-left text-sm shadow-sm outline-none transition-colors dark:bg-zinc-900 ${
          open ? "border-[var(--color-theme)] ring-2 ring-[var(--color-theme)]/20" : "border-[var(--color-theme-muted)]/40 dark:border-[var(--color-theme)]/40"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate text-zinc-800 dark:text-zinc-100">{value}</span>
        <svg className={`shrink-0 text-[var(--color-theme)] transition-transform ${open ? "rotate-180" : ""}`} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 z-30 mt-1 max-h-72 w-full overflow-y-auto rounded-b-[22px] rounded-t-md bg-white py-2 shadow-lg ring-1 ring-[var(--color-theme)]/15 dark:bg-zinc-900 dark:ring-[var(--color-theme)]/30" role="listbox">
          {options.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                onChange(c);
                setOpen(false);
              }}
              className={`block w-full px-5 py-2 text-left text-sm ${value === c ? "font-semibold text-[var(--color-theme)]" : "text-zinc-700 hover:bg-[var(--color-theme-light)] dark:text-zinc-200 dark:hover:bg-[var(--color-theme)]/10"}`}
              role="option"
              aria-selected={value === c}
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function StudentsTable({
  students,
  classLabel,
  totalInClass,
}: {
  students: ClassStudentSuiviRow[];
  classLabel: string;
  totalInClass: number;
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
      <table className="w-full min-w-[32rem] text-sm">
        <thead>
          <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
            {["Prénom, Nom", "Dernier accès", "Maths", "Français", "Lecture"].map((h) => (
              <th key={h} className="whitespace-nowrap px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
          {students.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-3 py-6 text-center text-sm text-zinc-400">
                Aucun élève dans cette classe.
              </td>
            </tr>
          ) : (
            students.map((s) => {
              const fullName = [s.prenom, s.nom].filter(Boolean).join(" ") || "—";
              return (
                <tr key={s.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                  <td className="max-w-[9rem] px-3 py-2.5">
                    <span className="block truncate font-medium text-zinc-800 dark:text-zinc-200">{fullName}</span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {lastSeen(s.progress_updated_at)}
                  </td>
                  <td className="px-3 py-2.5">
                    <ProgressCell done={s.math_done} total={s.math_total} pct={s.math_pct} color="bg-blue-500" />
                  </td>
                  <td className="px-3 py-2.5">
                    <ProgressCell done={s.french_done} total={s.french_total} pct={s.french_pct} color="bg-emerald-500" />
                  </td>
                  <td className="px-3 py-2.5">
                    <ProgressCell done={s.lecture_done} total={s.lecture_total} pct={s.lecture_pct} color="bg-amber-500" />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {totalInClass > students.length && (
        <p className="border-t border-zinc-100 px-3 py-2 text-xs text-zinc-500 dark:border-zinc-800">
          {students.length} élève{students.length !== 1 ? "s" : ""} affiché{students.length !== 1 ? "s" : ""} sur {totalInClass} —{" "}
          <Link href={`/suivi/classes/${encodeURIComponent(classLabel)}`} className="font-semibold hover:underline" style={{ color: ACCENT }}>
            voir tout
          </Link>
        </p>
      )}
    </div>
  );
}

export function TeacherHomeCard() {
  const [ctx, setCtx] = useState<SuiviContext | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [students, setStudents] = useState<ClassStudentSuiviRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [studentsLoading, setStudentsLoading] = useState(false);

  const loadStudents = useCallback(async (label: string) => {
    setStudentsLoading(true);
    const result = await getClassStudentsSuiviAction(label, 20);
    if (result.ok) setStudents(result.students);
    else setStudents([]);
    setStudentsLoading(false);
  }, []);

  useEffect(() => {
    void (async () => {
      const context = await getSuiviContextAction();
      setCtx(context);
      if (context?.hasAccess && context.classes.length > 0) {
        const initial =
          context.primaryClassLabel
          ?? context.classes.find((c) => c.is_primary)?.label
          ?? context.classes[0]?.label
          ?? null;
        if (initial) {
          setSelectedLabel(initial);
          await loadStudents(initial);
        }
      }
      setLoading(false);
    })();
  }, [loadStudents]);

  async function onClassChange(label: string) {
    setSelectedLabel(label);
    await loadStudents(label);
  }

  if (loading) {
    return (
      <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] animate-pulse">
        <div className="px-4 py-3" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
          <div className="h-3 w-28 rounded bg-[var(--color-theme)]/20" />
          <div className="mt-2 h-10 w-48 rounded bg-zinc-200 dark:bg-zinc-700" />
        </div>
        <div className="space-y-2 px-4 py-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 rounded bg-zinc-200/80 dark:bg-zinc-700/80" />
          ))}
        </div>
      </section>
    );
  }

  if (!ctx) {
    return (
      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>Suivi pédagogique</p>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Connexion ou configuration requise.</p>
        <Link href="/suivi" className="mt-3 inline-flex text-xs font-semibold hover:underline" style={{ color: ACCENT }}>
          Ouvrir le suivi →
        </Link>
      </section>
    );
  }

  if (!ctx.hasAccess && ctx.role === "prof") {
    return null;
  }

  if (ctx.classes.length === 0) {
    return (
      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>Suivi pédagogique</p>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Aucune classe enregistrée pour le moment.
        </p>
        <Link href="/suivi" className="mt-3 inline-flex text-xs font-semibold hover:underline" style={{ color: ACCENT }}>
          Ouvrir le suivi →
        </Link>
      </section>
    );
  }

  const classOptions = ctx.classes.map((c) => c.label);
  const activeLabel = selectedLabel ?? classOptions[0]!;
  const activeClass = ctx.classes.find((c) => c.label === activeLabel);
  const totalInClass = activeClass?.student_count ?? students.length;

  return (
    <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
      <div className="px-4 py-3" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
        <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
          Suivi pédagogique
        </p>
        <div className="mt-2">
          <ClassSelect value={activeLabel} options={classOptions} onChange={(v) => void onClassChange(v)} />
        </div>
      </div>

      <div className="px-4 pb-3 pt-2">
        {studentsLoading ? (
          <div className="space-y-2 py-2 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 rounded bg-zinc-200/80 dark:bg-zinc-700/80" />
            ))}
          </div>
        ) : (
          <StudentsTable students={students} classLabel={activeLabel} totalInClass={totalInClass} />
        )}
      </div>

      <Link
        href={`/suivi/classes/${encodeURIComponent(activeLabel)}`}
        className="flex items-center justify-between border-t border-[var(--color-border-default)] px-4 py-2.5 transition-colors hover:bg-[var(--color-bg-secondary)]"
      >
        <span className="text-xs text-[var(--color-text-secondary)]">Détail</span>
        <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: ACCENT }}>
          Voir le suivi détaillé
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
      </Link>
    </section>
  );
}
