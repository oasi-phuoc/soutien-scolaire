"use client";

import { Fragment, useEffect, useState } from "react";
import {
  getClassStudentsSuiviAction,
  type ClassStudentSuiviRow,
} from "@/app/actions/suivi";
import { StudentProgressDetail } from "@/components/suivi/StudentProgressDetail";

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

function IconLoupe({ active }: { active?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : "text-zinc-400"}
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function SuiviClassDashboard({ classLabel }: { classLabel: string }) {
  const [students, setStudents] = useState<ClassStudentSuiviRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    void getClassStudentsSuiviAction(classLabel).then((result) => {
      if (!result.ok) setError(result.error ?? "Erreur");
      else {
        setStudents(result.students);
        setError(null);
      }
      setLoading(false);
    });
  }, [classLabel]);

  if (loading) {
    return (
      <div className="space-y-2 py-4 animate-pulse">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-10 rounded-lg bg-zinc-200/80 dark:bg-zinc-700/80" />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-sm text-red-500">{error}</p>;

  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
      <table className="w-full min-w-[36rem] text-sm">
        <thead>
          <tr className="border-b border-[var(--color-theme)] bg-[var(--color-theme)]">
            <th className="w-10 px-2 py-2.5" aria-label="Détail" />
            {["Prénom, Nom", "Dernier accès", "Maths", "Français", "Lecture"].map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-white"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
          {students.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-3 py-8 text-center text-sm text-zinc-400">
                Aucun élève dans cette classe.
              </td>
            </tr>
          ) : (
            students.map((s) => {
              const fullName = [s.prenom, s.nom].filter(Boolean).join(" ") || "—";
              const isExpanded = expandedId === s.id;
              return (
                <Fragment key={s.id}>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                    <td className="px-2 py-2.5">
                      <button
                        type="button"
                        onClick={() => setExpandedId((id) => (id === s.id ? null : s.id))}
                        className="inline-flex rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        aria-label={isExpanded ? "Masquer le détail" : "Voir le détail"}
                        aria-expanded={isExpanded}
                      >
                        <IconLoupe active={isExpanded} />
                      </button>
                    </td>
                    <td className="max-w-[12rem] px-3 py-2.5">
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
                  {isExpanded && (
                    <tr className="bg-zinc-50 dark:bg-zinc-900/50">
                      <td colSpan={6} className="px-4 py-4">
                        <StudentProgressDetail userId={s.id} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })
          )}
        </tbody>
      </table>
      {students.length > 0 && (
        <p className="border-t border-zinc-100 px-3 py-2 text-xs text-zinc-500 dark:border-zinc-800">
          {students.length} élève{students.length !== 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
}
