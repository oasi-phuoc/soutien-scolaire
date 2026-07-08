"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getClassDashboardFullAction,
  getSuiviContextAction,
  type ClassDashboardFull,
  type SuiviContext,
} from "@/app/actions/suivi";

const ACCENT = "var(--color-theme)";

function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h} h ${m % 60} min`;
  return `${m} min`;
}

function SuiviIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 5-6" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0" style={{ color: ACCENT }} aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function TeacherCardShell({
  title,
  subtitle,
  href,
  children,
  footerHref,
  footerLabel,
}: {
  title: string;
  subtitle?: string;
  href?: string;
  children?: React.ReactNode;
  footerHref?: string;
  footerLabel?: string;
}) {
  const header = (
    <div className="relative overflow-hidden px-4 py-3" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `${ACCENT}22`, color: ACCENT }}
        >
          <SuiviIcon />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
            Suivi pédagogique
          </p>
          <p className="truncate text-sm font-bold text-[var(--color-text-primary)]">{title}</p>
          {subtitle ? (
            <p className="truncate text-xs text-[var(--color-text-secondary)]">{subtitle}</p>
          ) : null}
        </div>
        {href ? <Chevron /> : null}
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
      {href ? (
        <Link href={href} className="block transition-colors hover:bg-[var(--color-bg-secondary)]/40">
          {header}
        </Link>
      ) : (
        header
      )}
      {children ? <div className="px-4 pb-3 pt-2">{children}</div> : null}
      {footerHref && footerLabel ? (
        <Link
          href={footerHref}
          className="flex items-center justify-between border-t border-[var(--color-border-default)] px-4 py-2.5 transition-colors hover:bg-[var(--color-bg-secondary)]"
        >
          <span className="text-xs text-[var(--color-text-secondary)]">Détail</span>
          <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: ACCENT }}>
            {footerLabel}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </Link>
      ) : null}
    </div>
  );
}

function CompactStats({ stats }: { stats: ClassDashboardFull }) {
  const meta: string[] = [];
  if (stats.avg_placement != null) meta.push(`Placement moy. ${stats.avg_placement}/200`);
  meta.push(`${stats.pending_tasks} devoir(s) en cours`);
  if (stats.tasks_on_time_pct != null) meta.push(`${stats.tasks_on_time_pct}% à temps`);
  meta.push(`${stats.active_last_7d} actif(s) · 7j`);
  meta.push(`${formatDuration(stats.total_time_sec)} au total`);

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Élèves", value: String(stats.student_count) },
          { label: "Maths", value: `${stats.avg_math_pct}%` },
          { label: "Français", value: `${stats.avg_french_pct}%` },
          { label: "Lecture", value: `${stats.avg_lecture_pct}%` },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-[10px] text-[var(--color-text-secondary)]">{item.label}</p>
            <p className="text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{item.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-secondary)]">{meta.join(" · ")}</p>
    </>
  );
}

function SecondaryLinks({ ctx }: { ctx: SuiviContext }) {
  return (
    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
      <Link href="/suivi" className="font-semibold hover:underline" style={{ color: ACCENT }}>
        {ctx.role === "admin" ? "Toutes les classes" : "Toutes mes classes"}
      </Link>
      {ctx.role === "admin" && (
        <Link href="/admin" className="font-semibold text-[var(--color-text-secondary)] hover:underline">
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
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] animate-pulse">
        <div className="px-4 py-3" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-[var(--color-theme)]/20" />
            <div className="flex-1 space-y-2">
              <div className="h-2.5 w-20 rounded bg-[var(--color-theme)]/20" />
              <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-700" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 px-4 pb-3 pt-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 rounded bg-zinc-200/80 dark:bg-zinc-700/80" />
          ))}
        </div>
      </div>
    );
  }

  if (!ctx) {
    return (
      <TeacherCardShell title="Espace enseignant" subtitle="Connexion ou configuration requise.">
        <Link
          href="/suivi"
          className="inline-flex items-center text-xs font-semibold hover:underline"
          style={{ color: ACCENT }}
        >
          Ouvrir le suivi →
        </Link>
      </TeacherCardShell>
    );
  }

  if (!ctx.hasAccess && ctx.role === "prof") {
    return null;
  }

  if (!ctx.primaryClassLabel) {
    const isAdmin = ctx.role === "admin";
    return (
      <div className="space-y-2">
        <TeacherCardShell
          title={isAdmin ? "Toutes les classes" : "Mes classes"}
          subtitle={
            ctx.classes.length === 0
              ? "Aucune classe enregistrée pour le moment."
              : `${ctx.classes.length} classe${ctx.classes.length !== 1 ? "s" : ""}`
          }
          href="/suivi"
          footerHref="/suivi"
          footerLabel={isAdmin ? "Voir les classes" : "Ouvrir le suivi"}
        >
          {ctx.classes.length > 0 && (
            <ul className="space-y-1">
              {ctx.classes.slice(0, 4).map((cls) => (
                <li key={cls.class_id}>
                  <Link
                    href={`/suivi/classes/${encodeURIComponent(cls.label)}`}
                    className="flex items-center justify-between rounded-lg px-2 py-1.5 text-xs font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                  >
                    <span className="truncate">{cls.label}</span>
                    <span className="shrink-0 text-[var(--color-text-secondary)]">{cls.student_count} él.</span>
                  </Link>
                </li>
              ))}
              {ctx.classes.length > 4 && (
                <li className="px-2 text-xs text-[var(--color-text-secondary)]">
                  +{ctx.classes.length - 4} autre{ctx.classes.length - 4 !== 1 ? "s" : ""}
                </li>
              )}
            </ul>
          )}
        </TeacherCardShell>
        <SecondaryLinks ctx={ctx} />
      </div>
    );
  }

  const label = ctx.primaryClassLabel;
  const detailHref = `/suivi/classes/${encodeURIComponent(label)}`;

  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
        <Link href={detailHref} className="block transition-colors hover:bg-[var(--color-bg-secondary)]/40">
          <div className="relative overflow-hidden px-4 py-3" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: `${ACCENT}22`, color: ACCENT }}
              >
                <SuiviIcon />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
                  Suivi pédagogique
                </p>
                <p className="truncate text-sm font-bold text-[var(--color-text-primary)]">{label}</p>
                <p className="truncate text-xs text-[var(--color-text-secondary)]">Classe principale</p>
              </div>
              <Chevron />
            </div>
          </div>
          {stats ? (
            <div className="px-4 pb-3 pt-2">
              <CompactStats stats={stats} />
            </div>
          ) : null}
        </Link>
        <Link
          href={detailHref}
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
      </div>
      <SecondaryLinks ctx={ctx} />
    </div>
  );
}
