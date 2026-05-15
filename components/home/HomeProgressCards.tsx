"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppProgressBar } from "@/components/ui/AppProgressBar";
import {
  loadLectureProgress,
  computeLecturePercent,
  getSubmoduleState,
  SUBMODULE_SEQUENCE,
  TOTAL_LETTERS,
} from "@/lib/progress/lecture-progress";
import {
  loadProgress,
} from "@/lib/progress/math-progress";
import {
  MATH_ALGEBRA_ORDER,
  MATH_GEOMETRY_TAB_ORDER,
  getMathModule,
  MATH_MODULES,
} from "@/lib/curriculum/math-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import type { LectureProgressV2 } from "@/lib/progress/lecture-progress";

const FRENCH_LEVEL_LABELS: Record<string, string> = {
  PA: "Pré-alpha",
  ALPHA: "Alpha",
  A0: "A0 — Débutant",
  A1: "A1 — Découverte",
  A2: "A2 — Élémentaire",
  B1: "B1 — Autonomie",
  B2: "B2 — Avancé",
};

function CardShell({
  href,
  accentColor,
  icon,
  label,
  title,
  stat,
  pct,
  continuePath,
  continueLabel,
}: {
  href: string;
  accentColor: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  stat: string;
  pct: number;
  continuePath?: string | null;
  continueLabel?: string | null;
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
      <Link
        href={href}
        className="block px-4 py-4 transition-colors hover:bg-[var(--color-bg-secondary)]/40"
      >
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{ background: `${accentColor}18` }}
          >
            <span style={{ color: accentColor }}>{icon}</span>
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: accentColor }}>
              {label}
            </p>
            <p className="truncate text-sm font-bold text-[var(--color-text-primary)]">{title}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{stat}</p>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--color-text-secondary)]" aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <div className="mt-3">
          <AppProgressBar value={pct} color={accentColor} height={4} />
          <p className="mt-1 text-right text-[10px] text-[var(--color-text-secondary)]">{pct}%</p>
        </div>
      </Link>

      {continuePath && continueLabel && (
        <Link
          href={continuePath}
          className="flex items-center justify-between border-t border-[var(--color-border-default)] px-4 py-2.5 transition-colors hover:bg-[var(--color-bg-secondary)]"
        >
          <span className="text-xs text-[var(--color-text-secondary)]">Continuer</span>
          <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: accentColor }}>
            {continueLabel}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
}

export function HomeProgressCards() {
  const [lectureP, setLectureP] = useState<LectureProgressV2 | null>(null);
  const [mathP, setMathP] = useState<StoredProgressV1 | null>(null);

  useEffect(() => {
    setLectureP(loadLectureProgress());
    setMathP(loadProgress());
  }, []);

  // ── Lecture ──
  const lectureCompleted = lectureP
    ? Object.values(lectureP.submodules).filter((s) => s === "completed").length
    : 0;
  const lecturePct = lectureP ? computeLecturePercent(lectureP) : 0;

  const lectureNext = lectureP
    ? SUBMODULE_SEQUENCE.find((s) => getSubmoduleState(lectureP, s.moduleId, s.letterId) === "available")
    : null;
  const lectureContinuePath = lectureNext
    ? `/lecture/${lectureNext.moduleId}/${lectureNext.letterId}`
    : null;
  const lectureContinueLabel = lectureNext
    ? `${lectureNext.moduleId.toUpperCase()} — ${lectureNext.letterId.toUpperCase()} / ${lectureNext.letterId}`
    : null;

  // ── Maths ──
  const totalMath = MATH_MODULES.length;
  const completedMath = mathP
    ? Object.values(mathP.math).filter((m) => m.state === "completed").length
    : 0;
  const mathPct = totalMath > 0 ? Math.round((completedMath / totalMath) * 100) : 0;

  const allMathOrder = [...MATH_ALGEBRA_ORDER, ...MATH_GEOMETRY_TAB_ORDER];
  const mathNextId = mathP
    ? (allMathOrder.find((id) => mathP.math[id]?.state === "in_progress") ??
       allMathOrder.find((id) => mathP.math[id]?.state === "available"))
    : null;
  const mathNextModule = mathNextId ? getMathModule(mathNextId) : null;
  const mathContinuePath = mathNextModule ? `/mathematiques/${mathNextModule.id}` : null;
  const mathContinueLabel = mathNextModule
    ? `${mathNextModule.code} — ${mathNextModule.title}`
    : null;

  // ── Français ──
  const frLevel = mathP?.frenchLevel ?? "A0";
  const frLabel = FRENCH_LEVEL_LABELS[frLevel] ?? frLevel;
  const FR_PCT: Record<string, number> = { PA: 0, ALPHA: 5, A0: 10, A1: 25, A2: 45, B1: 70, B2: 100 };
  const frPct = FR_PCT[frLevel] ?? 10;

  return (
    <div className="space-y-3">
      <CardShell
        href="/lecture"
        accentColor="var(--color-accent-lecture)"
        icon={<BookIcon />}
        label="Lecture"
        title="Alphabétisation"
        stat={`${lectureCompleted} / ${TOTAL_LETTERS} lettres`}
        pct={lecturePct}
        continuePath={lectureContinuePath}
        continueLabel={lectureContinueLabel}
      />
      <CardShell
        href="/francais"
        accentColor="var(--color-accent-fr)"
        icon={<FrIcon />}
        label="Français"
        title={frLabel}
        stat="PA → B2 · 36 thèmes"
        pct={frPct}
      />
      <CardShell
        href="/mathematiques"
        accentColor="var(--color-accent-alg)"
        icon={<MathIcon />}
        label="Mathématiques"
        title={`${completedMath} module${completedMath !== 1 ? "s" : ""} terminé${completedMath !== 1 ? "s" : ""}`}
        stat={`sur ${totalMath} modules · algèbre, géométrie`}
        pct={mathPct}
        continuePath={mathContinuePath}
        continueLabel={mathContinueLabel}
      />
    </div>
  );
}

function BookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function FrIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16M4 12h10M4 18h14" />
    </svg>
  );
}

function MathIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8v8M12 8v8M16 8v8M8 12h8" />
    </svg>
  );
}
