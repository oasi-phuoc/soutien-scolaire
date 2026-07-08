"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getClassDashboardFullAction,
  getClassStudentsSuiviAction,
  type ClassDashboardFull,
  type ClassStudentSuiviRow,
} from "@/app/actions/suivi";

function formatDuration(sec: number): string {
  if (sec < 60) return `${sec} s`;
  const m = Math.floor(sec / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h} h ${m % 60} min`;
  return `${m} min`;
}

function lastSeen(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("fr-CH", { day: "numeric", month: "short" });
}

export function SuiviClassDashboard({ classLabel }: { classLabel: string }) {
  const [stats, setStats] = useState<ClassDashboardFull | null>(null);
  const [students, setStudents] = useState<ClassStudentSuiviRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void Promise.all([
      getClassDashboardFullAction(classLabel),
      getClassStudentsSuiviAction(classLabel),
    ]).then(([dash, list]) => {
      if (!dash.ok) setError(dash.error ?? "Erreur");
      else setStats(dash.stats);
      if (list.ok) setStudents(list.students);
    });
  }, [classLabel]);

  if (error) return <p className="text-sm text-red-500">{error}</p>;

  return (
    <div className="space-y-6">
      {stats && (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {[
              { label: "Élèves", value: String(stats.student_count) },
              { label: "Maths (moy.)", value: `${stats.avg_math_pct}%` },
              { label: "Français (moy.)", value: `${stats.avg_french_pct}%` },
              { label: "Lecture (moy.)", value: `${stats.avg_lecture_pct}%` },
              { label: "Placement (moy.)", value: stats.avg_placement != null ? `${stats.avg_placement}/200` : "—" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-200 bg-white p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{item.label}</p>
                <p className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-50">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Devoirs en cours", value: String(stats.pending_tasks) },
              { label: "Devoirs faits", value: String(stats.done_tasks) },
              { label: "À temps (%)", value: stats.tasks_on_time_pct != null ? `${stats.tasks_on_time_pct}%` : "—" },
              { label: "Temps total", value: formatDuration(stats.total_time_sec) },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-[10px] text-zinc-500">{item.label}</p>
                <p className="mt-1 text-lg font-bold text-zinc-800 dark:text-zinc-100">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-500">{stats.active_last_7d} élève(s) actif(s) sur 7 jours</p>
        </>
      )}

      <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-zinc-50 text-left text-[10px] uppercase tracking-wide text-zinc-500 dark:bg-zinc-900">
            <tr>
              <th className="px-3 py-2">Élève</th>
              <th className="px-3 py-2 text-center">Maths</th>
              <th className="px-3 py-2 text-center">FR</th>
              <th className="px-3 py-2 text-center">Lecture</th>
              <th className="px-3 py-2 text-center">Placement</th>
              <th className="px-3 py-2 text-center">Devoirs à temps</th>
              <th className="px-3 py-2 text-center">Temps 7j</th>
              <th className="px-3 py-2">Activité</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t border-zinc-100 dark:border-zinc-800">
                <td className="px-3 py-2">
                  <Link
                    href={`/suivi/classes/${encodeURIComponent(classLabel)}/eleves/${s.id}`}
                    className="font-medium text-[var(--color-theme)] hover:underline"
                  >
                    {[s.prenom, s.nom].filter(Boolean).join(" ") || "—"}
                  </Link>
                </td>
                <td className="px-3 py-2 text-center tabular-nums">{s.math_pct}%</td>
                <td className="px-3 py-2 text-center tabular-nums">{s.french_pct}%</td>
                <td className="px-3 py-2 text-center tabular-nums">{s.lecture_pct}%</td>
                <td className="px-3 py-2 text-center tabular-nums text-violet-600">
                  {s.placement_total != null ? `${s.placement_total}/200` : "—"}
                </td>
                <td className="px-3 py-2 text-center tabular-nums">
                  {s.tasks_on_time_pct != null ? `${s.tasks_on_time_pct}%` : "—"}
                </td>
                <td className="px-3 py-2 text-center tabular-nums">{formatDuration(s.time_7d_sec)}</td>
                <td className="px-3 py-2 text-zinc-500">{lastSeen(s.progress_updated_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
