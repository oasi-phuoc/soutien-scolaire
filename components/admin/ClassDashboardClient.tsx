"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getClassDashboardAction,
  getClassStudentsAction,
  type ClassDashboardStats,
  type ClassStudentRow,
} from "@/app/actions/classes";

function formatDuration(sec: number): string {
  if (sec < 60) return `${sec} s`;
  const m = Math.floor(sec / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h} h ${m % 60} min`;
  return `${m} min`;
}

export function ClassDashboardClient({ classLabel }: { classLabel: string }) {
  const [stats, setStats] = useState<ClassDashboardStats | null>(null);
  const [students, setStudents] = useState<ClassStudentRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void Promise.all([
      getClassDashboardAction(classLabel),
      getClassStudentsAction(classLabel),
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Élèves", value: String(stats.student_count) },
            { label: "Devoirs en cours", value: String(stats.pending_tasks) },
            { label: "Devoirs faits", value: String(stats.done_tasks) },
            { label: "Temps total", value: formatDuration(stats.total_time_sec) },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{item.label}</p>
              <p className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-zinc-500">
        {stats?.active_last_7d ?? 0} élève(s) actif(s) sur les 7 derniers jours
      </p>

      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead className="bg-zinc-50 text-left text-xs uppercase tracking-wide text-zinc-500 dark:bg-zinc-900">
            <tr>
              <th className="px-4 py-3">Élève</th>
              <th className="px-4 py-3">Devoirs</th>
              <th className="px-4 py-3">Temps</th>
              <th className="px-4 py-3">Dernière activité</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t border-zinc-100 dark:border-zinc-800">
                <td className="px-4 py-3">
                  <Link href={`/admin/eleves/${s.id}`} className="font-medium text-[var(--color-theme)] hover:underline">
                    {[s.prenom, s.nom].filter(Boolean).join(" ") || "—"}
                  </Link>
                </td>
                <td className="px-4 py-3 tabular-nums">{s.pending_tasks} en cours</td>
                <td className="px-4 py-3 tabular-nums">{formatDuration(s.total_time_sec)}</td>
                <td className="px-4 py-3 text-zinc-500">
                  {s.progress_updated_at
                    ? new Date(s.progress_updated_at).toLocaleDateString("fr-CH")
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
