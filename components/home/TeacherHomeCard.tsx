"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPrimaryClassSummaryAction } from "@/app/actions/suivi";

function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h} h ${m % 60} min`;
  return `${m} min`;
}

export function TeacherHomeCard() {
  const [label, setLabel] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<{
    student_count: number;
    avg_math_pct: number;
    avg_french_pct: number;
    avg_lecture_pct: number;
    avg_placement: number | null;
    pending_tasks: number;
    tasks_on_time_pct: number | null;
    active_last_7d: number;
    total_time_sec: number;
  } | null>(null);

  useEffect(() => {
    void getPrimaryClassSummaryAction().then((res) => {
      setLoading(false);
      if (res.ok && res.label && res.stats) {
        setLabel(res.label);
        setStats(res.stats);
      }
    });
  }, []);

  if (loading) return null;
  if (!label || !stats) return null;

  return (
    <section className="rounded-[var(--radius-lg)] border border-[var(--color-theme)]/25 bg-[var(--color-theme-light)] p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-theme)]">Suivi — Classe principale</p>
      <h2 className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-50">{label}</h2>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div>
          <p className="text-[10px] text-zinc-500">Élèves</p>
          <p className="text-lg font-bold">{stats.student_count}</p>
        </div>
        <div>
          <p className="text-[10px] text-zinc-500">Maths</p>
          <p className="text-lg font-bold">{stats.avg_math_pct}%</p>
        </div>
        <div>
          <p className="text-[10px] text-zinc-500">Français</p>
          <p className="text-lg font-bold">{stats.avg_french_pct}%</p>
        </div>
        <div>
          <p className="text-[10px] text-zinc-500">Lecture</p>
          <p className="text-lg font-bold">{stats.avg_lecture_pct}%</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
        {stats.avg_placement != null && <span>Placement moy. {stats.avg_placement}/200</span>}
        <span>{stats.pending_tasks} devoir(s) en cours</span>
        {stats.tasks_on_time_pct != null && <span>{stats.tasks_on_time_pct}% à temps</span>}
        <span>{stats.active_last_7d} actif(s) · 7j</span>
        <span>{formatDuration(stats.total_time_sec)} au total</span>
      </div>

      <Link
        href={`/suivi/classes/${encodeURIComponent(label)}`}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-theme)] py-2.5 text-sm font-bold text-white hover:opacity-90 sm:w-auto sm:px-6"
      >
        Voir le suivi détaillé →
      </Link>
      <Link href="/suivi" className="mt-2 block text-center text-xs font-semibold text-[var(--color-theme)] hover:underline sm:text-left">
        Toutes mes classes
      </Link>
    </section>
  );
}
