"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppProgressBar } from "@/components/ui/AppProgressBar";
import {
  loadLectureProgress,
  computeLecturePercent,
  getSubmoduleState,
  getRevisionState,
  SUBMODULE_SEQUENCE,
  REVISION_CHECKPOINTS,
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
import { FRENCH_THEMES } from "@/lib/curriculum/french-data";
import { COMM_MODULES } from "@/lib/curriculum/communication-data";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import type { LectureProgressV2 } from "@/lib/progress/lecture-progress";

// ── French data helpers ──────────────────────────────────────────────────────
const FRENCH_VOC = FRENCH_THEMES.filter((t) => t.tab === "vocabulaire");
const FRENCH_GRAM = FRENCH_THEMES.filter((t) => t.tab === "grammaire" || t.tab === "conjugaison");
const COMM_AVAILABLE = COMM_MODULES.flatMap((m) => m.submodules).filter((s) => s.available);

// ── Math data helpers ─────────────────────────────────────────────────────────
const MATH_ALG_MODULES = MATH_MODULES.filter((m) => m.branch === "algebra");
const MATH_GEO_MODULES = MATH_MODULES.filter((m) => m.branch === "geometry");

// ── Sub-progress mini bars ────────────────────────────────────────────────────
function SubProgressRow({
  label,
  done,
  total,
  color,
}: {
  label: string;
  done: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 shrink-0 text-[10px] text-[var(--color-text-secondary)]">{label}</span>
      <div className="flex-1 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800" style={{ height: 4 }}>
        <div
          className="h-full rounded-full transition-all"
          style={{ background: color, width: `${pct}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-right text-[10px] tabular-nums text-[var(--color-text-secondary)]">
        {done}/{total}
      </span>
    </div>
  );
}

// ── Card shell ────────────────────────────────────────────────────────────────
function CardShell({
  href,
  accentColor,
  icon,
  label,
  title,
  completedText,
  totalText,
  pct,
  continuePath,
  continueLabel,
  subProgress,
  illustration,
}: {
  href: string;
  accentColor: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  completedText: string;
  totalText: string;
  pct: number;
  continuePath?: string | null;
  continueLabel?: string | null;
  subProgress?: Array<{ label: string; done: number; total: number }>;
  illustration?: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
      <Link href={href} className="block transition-colors hover:bg-[var(--color-bg-secondary)]/40">
        {/* Header section with colored fill */}
        <div className="relative overflow-hidden px-4 py-3" style={{ background: `color-mix(in oklch, ${accentColor} 10%, transparent)` }}>
          {illustration && (
            <div className="pointer-events-none absolute -bottom-3 -right-3" style={{ color: accentColor }} aria-hidden>
              {illustration}
            </div>
          )}
          <div className="relative z-10 flex items-center gap-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${accentColor}22` }}
            >
              <span style={{ color: accentColor }}>{icon}</span>
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: accentColor }}>
                {label}
              </p>
              <p className="truncate text-sm font-bold text-[var(--color-text-primary)]">{title}</p>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0" style={{ color: accentColor }} aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>{/* end header */}
        {/* Progress section */}
        <div className="px-4 pb-3 pt-2">
          <AppProgressBar value={pct} color={accentColor} height={4} />
          <p className="mt-1.5 text-sm font-bold text-[var(--color-text-primary)]">{completedText}</p>
          <p className="text-xs text-[var(--color-text-secondary)]">{totalText}</p>
          {subProgress && subProgress.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {subProgress.map((sp) => (
                <SubProgressRow
                  key={sp.label}
                  label={sp.label}
                  done={sp.done}
                  total={sp.total}
                  color={accentColor}
                />
              ))}
            </div>
          )}
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

  const lectureNextEntry = (() => {
    if (!lectureP) return null;
    const avail = SUBMODULE_SEQUENCE.find(
      (s) => getSubmoduleState(lectureP, s.moduleId, s.letterId) === "available",
    );
    if (avail) return avail;
    const pendingRev = REVISION_CHECKPOINTS.find(
      (r) => getRevisionState(lectureP, r.pair) === "available",
    );
    if (pendingRev) {
      const idx = SUBMODULE_SEQUENCE.findIndex(
        (s) => s.moduleId === pendingRev.afterModuleId && s.letterId === pendingRev.afterLetterId,
      );
      if (idx >= 0 && idx < SUBMODULE_SEQUENCE.length - 1) return SUBMODULE_SEQUENCE[idx + 1]!;
    }
    return null;
  })();

  const lectureContinuePath = lectureNextEntry
    ? `/lecture/${lectureNextEntry.moduleId}/${lectureNextEntry.letterId}`
    : null;
  const lectureContinueLabel = (() => {
    if (!lectureNextEntry) return null;
    const moduleLetters = SUBMODULE_SEQUENCE.filter((s) => s.moduleId === lectureNextEntry.moduleId);
    const pos = moduleLetters.findIndex((s) => s.letterId === lectureNextEntry.letterId) + 1;
    return `${lectureNextEntry.moduleId.toUpperCase()}.${pos} — ${lectureNextEntry.letterId.toUpperCase()} / ${lectureNextEntry.letterId}`;
  })();

  // ── Français ──
  const completedSlugs = new Set(Object.keys(mathP?.frenchLessons ?? {}));
  const vocDone = FRENCH_VOC.filter((t) => completedSlugs.has(t.slug)).length;
  const gramDone = FRENCH_GRAM.filter((t) => completedSlugs.has(t.slug)).length;
  const parlerDone = COMM_AVAILABLE.filter((s) => !!(mathP?.commProgress?.[s.id])).length;
  const frTotal = FRENCH_VOC.length + FRENCH_GRAM.length + COMM_AVAILABLE.length;
  const frDone = vocDone + gramDone + parlerDone;
  const frPct = frTotal > 0 ? Math.round((frDone / frTotal) * 100) : 0;

  // ── Maths ──
  const totalMath = MATH_MODULES.length;
  const completedMath = mathP
    ? Object.values(mathP.math).filter((m) => m.state === "completed").length
    : 0;
  const mathPct = totalMath > 0 ? Math.round((completedMath / totalMath) * 100) : 0;

  const algDone = mathP
    ? MATH_ALG_MODULES.filter((m) => mathP.math[m.id]?.state === "completed").length
    : 0;
  const geoDone = mathP
    ? MATH_GEO_MODULES.filter((m) => mathP.math[m.id]?.state === "completed").length
    : 0;

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

  return (
    <div className="space-y-3">
      <CardShell
        href="/lecture"
        accentColor="var(--color-accent-lecture)"
        icon={<BookIcon />}
        illustration={<LectureIllus />}
        label="Lecture"
        title="Alphabétisation"
        completedText={`${lectureCompleted} lettres`}
        totalText={`sur ${TOTAL_LETTERS} lettres`}
        pct={lecturePct}
        continuePath={lectureContinuePath}
        continueLabel={lectureContinueLabel}
      />
      <CardShell
        href="/francais"
        accentColor="var(--color-accent-fr)"
        icon={<FrIcon />}
        illustration={<FrancaisIllus />}
        label="Français"
        title="Compréhension et expression"
        completedText={`${frDone} leçon${frDone !== 1 ? "s" : ""} terminée${frDone !== 1 ? "s" : ""}`}
        totalText={`sur ${frTotal} leçons`}
        pct={frPct}
        subProgress={[
          { label: "Vocabulaire", done: vocDone, total: FRENCH_VOC.length },
          { label: "Grammaire", done: gramDone, total: FRENCH_GRAM.length },
          { label: "Parler", done: parlerDone, total: Math.max(COMM_AVAILABLE.length, 1) },
        ]}
      />
      <CardShell
        href="/mathematiques"
        accentColor="var(--color-accent-alg)"
        icon={<MathIcon />}
        illustration={<MathsIllus />}
        label="Mathématiques"
        title="Algèbre & Géométrie"
        completedText={`${completedMath} leçon${completedMath !== 1 ? "s" : ""} terminée${completedMath !== 1 ? "s" : ""}`}
        totalText={`sur ${totalMath} leçons`}
        pct={mathPct}
        continuePath={mathContinuePath}
        continueLabel={mathContinueLabel}
        subProgress={[
          { label: "Algèbre", done: algDone, total: MATH_ALG_MODULES.length },
          { label: "Géométrie", done: geoDone, total: MATH_GEO_MODULES.length },
        ]}
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

function LectureIllus() {
  return (
    <svg width="88" height="80" viewBox="0 0 110 100" fill="none">
      <path d="M55 20 C40 16 20 18 8 24 L8 80 C20 74 40 72 55 76 Z" fill="currentColor" opacity="0.22"/>
      <path d="M55 20 C70 16 90 18 102 24 L102 80 C90 74 70 72 55 76 Z" fill="currentColor" opacity="0.32"/>
      <line x1="55" y1="20" x2="55" y2="76" stroke="currentColor" strokeWidth="2" opacity="0.38"/>
      <line x1="18" y1="36" x2="48" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
      <line x1="18" y1="47" x2="48" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
      <line x1="18" y1="58" x2="38" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
      <line x1="63" y1="36" x2="93" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
      <line x1="63" y1="47" x2="93" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
      <line x1="63" y1="58" x2="80" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
    </svg>
  );
}

function FrancaisIllus() {
  return (
    <svg width="84" height="84" viewBox="0 0 100 100" fill="none">
      <rect x="10" y="10" width="60" height="76" rx="8" fill="currentColor" opacity="0.18"/>
      <rect x="10" y="10" width="60" height="76" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.28"/>
      <line x1="22" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>
      <line x1="22" y1="42" x2="58" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>
      <line x1="22" y1="54" x2="50" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>
      <line x1="22" y1="66" x2="55" y2="66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.38"/>
      <path d="M70 76 L88 20 L96 28 Z" fill="currentColor" opacity="0.48"/>
      <path d="M68 79 L72 73 L88 20 L82 14 Z" fill="currentColor" opacity="0.32"/>
    </svg>
  );
}

function MathsIllus() {
  return (
    <svg width="84" height="84" viewBox="0 0 100 100" fill="none">
      <circle cx="76" cy="28" r="20" fill="currentColor" opacity="0.18"/>
      <circle cx="76" cy="28" r="13" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.35"/>
      <path d="M10 88 L38 38 L66 88 Z" fill="currentColor" opacity="0.18"/>
      <path d="M10 88 L38 38 L66 88 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.35"/>
      <line x1="78" y1="62" x2="78" y2="88" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.48"/>
      <line x1="65" y1="75" x2="91" y2="75" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.48"/>
    </svg>
  );
}
