"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSuiviContextAction, type SuiviContext } from "@/app/actions/suivi";
import { SuiviLevelBlocks } from "@/components/suivi/SuiviLevelBlocks";

const ACCENT = "var(--color-theme)";

function SuiviHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function TeacherHomeCard() {
  const [ctx, setCtx] = useState<SuiviContext | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void getSuiviContextAction().then((context) => {
      setCtx(context);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] animate-pulse">
        <div className="px-4 py-4" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
          <div className="h-6 w-48 rounded bg-[var(--color-theme)]/20" />
        </div>
        <div className="space-y-2 px-4 py-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-12 rounded-xl bg-zinc-200/80 dark:bg-zinc-700/80" />
          ))}
        </div>
      </section>
    );
  }

  if (!ctx) {
    return (
      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4">
        <p className="text-xl font-bold uppercase tracking-wide" style={{ color: ACCENT }}>Suivi pédagogique</p>
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
      <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
        <div className="flex items-center justify-between gap-3 px-4 py-4" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
          <p className="text-xl font-bold uppercase tracking-wide" style={{ color: ACCENT }}>Suivi pédagogique</p>
          <Link
            href="/suivi"
            aria-label="Ouvrir le suivi pédagogique"
            title="Suivi pédagogique"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-theme)]/35 text-[var(--color-theme)] transition-colors hover:bg-[var(--color-theme-light)]"
          >
            <SuiviHubIcon />
          </Link>
        </div>
        <p className="px-4 pb-4 text-sm text-[var(--color-text-secondary)]">
          Aucune classe enregistrée pour le moment.
        </p>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
      <div className="flex items-center justify-between gap-3 px-4 py-4" style={{ background: `color-mix(in oklch, ${ACCENT} 10%, transparent)` }}>
        <p className="text-xl font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
          Suivi pédagogique
        </p>
        <Link
          href="/suivi"
          aria-label="Ouvrir le suivi pédagogique"
          title="Suivi pédagogique"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-theme)]/35 text-[var(--color-theme)] transition-colors hover:bg-[var(--color-theme-light)]"
        >
          <SuiviHubIcon />
        </Link>
      </div>

      <div className="px-4 pb-4 pt-3">
        <SuiviLevelBlocks
          classes={ctx.classes.map((c) => ({
            label: c.label,
            student_count: c.student_count,
          }))}
          levels={["CSC", "CFR", "EPL", "CPR"]}
        />
      </div>
    </section>
  );
}
