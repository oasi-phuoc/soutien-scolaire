"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getClassDashboardFullAction,
  getSuiviContextAction,
  type ClassDashboardFull,
  type SuiviContext,
} from "@/app/actions/suivi";

function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h} h ${m % 60} min`;
  return `${m} min`;
}

function TeacherHomeShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[var(--radius-lg)] border border-[var(--color-theme)]/25 bg-[var(--color-theme-light)] p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-theme)]">Suivi pédagogique</p>
      <h2 className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-50">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p> : null}
      {children}
    </section>
  );
}

function TeacherHomeLinks({ role, classCount }: { role: "admin" | "prof"; classCount: number }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <Link
        href="/suivi"
        className="inline-flex items-center justify-center rounded-xl bg-[var(--color-theme)] px-5 py-2.5 text-sm font-bold text-white hover:opacity-90"
      >
        {classCount > 0 ? "Voir mes classes" : "Ouvrir le suivi"}
      </Link>
      {role === "admin" && (
        <Link
          href="/admin"
          className="inline-flex items-center justify-center rounded-xl border border-[var(--color-theme)] px-5 py-2.5 text-sm font-semibold text-[var(--color-theme)] hover:bg-white/60"
        >
          Gérer les comptes
        </Link>
      )}
    </div>
  );
}

export function TeacherHomeCard() {
  const [ctx, setCtx] = useState<SuiviContext | null>(null);
  const [stats, setStats] = useState<ClassDashboardFull | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      const context = await getSuiviContextAction();
      setCtx(context);
      if (context?.primaryClassLabel) {
        const dash = await getClassDashboardFullAction(context.primaryClassLabel);
        if (dash.ok) setStats(dash.stats);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <section className="rounded-[var(--radius-lg)] border border-[var(--color-theme)]/25 bg-[var(--color-theme-light)] p-5 animate-pulse">
        <div className="h-3 w-24 rounded bg-[var(--color-theme)]/20" />
        <div className="mt-3 h-7 w-40 rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-14 rounded-lg bg-zinc-200/80 dark:bg-zinc-700/80" />
          ))}
        </div>
      </section>
    );
  }

  if (!ctx) {
    return (
      <TeacherHomeShell title="Espace enseignant" subtitle="Connexion ou configuration requise.">
        <TeacherHomeLinks role="admin" classCount={0} />
      </TeacherHomeShell>
    );
  }

  if (!ctx.hasAccess && ctx.role === "prof") {
    return null;
  }

  if (!ctx.primaryClassLabel) {
    return (
      <TeacherHomeShell
        title={ctx.role === "admin" ? "Toutes les classes" : "Mes classes"}
        subtitle={
          ctx.classes.length === 0
            ? "Aucune classe enregistrée pour le moment. Les classes apparaissent à partir des profils élèves."
            : "Choisissez une classe principale dans le suivi pour l'afficher ici."
        }
      >
        <TeacherHomeLinks role={ctx.role} classCount={ctx.classes.length} />
      </TeacherHomeShell>
    );
  }

  const label = ctx.primaryClassLabel;

  return (
    <TeacherHomeShell title={label} subtitle="Classe principale">
      {stats ? (
        <>
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
        </>
      ) : null}

      <Link
        href={`/suivi/classes/${encodeURIComponent(label)}`}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-theme)] py-2.5 text-sm font-bold text-white hover:opacity-90 sm:w-auto sm:px-6"
      >
        Voir le suivi détaillé →
      </Link>
      <Link href="/suivi" className="mt-2 block text-center text-xs font-semibold text-[var(--color-theme)] hover:underline sm:text-left">
        Toutes mes classes
      </Link>
      {ctx.role === "admin" && (
        <Link href="/admin" className="mt-1 block text-center text-xs font-semibold text-zinc-500 hover:underline sm:text-left">
          Gérer les comptes
        </Link>
      )}
    </TeacherHomeShell>
  );
}
