"use client";

import type { CSSProperties, ReactNode } from "react";
import { CORRECTION_ACCENT, CORRECTION_BORDER, CORRECTION_TEXT_STRONG } from "@/components/correction-styles";

const SCORE_INCOMPLETE_CLASS = "text-amber-600";

export function isEvalScoreComplete(correct: number, total: number): boolean {
  return total > 0 && correct >= total - 1e-6;
}

/** Masque les titres « Exercice N » répétés dans le panneau de correction déroulé. */
export const EVAL_RESULT_DETAIL_CLASS =
  "[&_h2]:hidden [&_.eval-exercise-title]:hidden";

export function evalExerciseScoreClass(correct: number, total: number): string {
  return isEvalScoreComplete(correct, total) ? "" : SCORE_INCOMPLETE_CLASS;
}

export function evalExerciseScoreStyle(
  correct: number,
  total: number,
  accent: string,
): CSSProperties | undefined {
  return isEvalScoreComplete(correct, total) ? { color: accent } : undefined;
}

export function EvalResultsSummary({
  accent,
  points,
  maxPoints,
  grade,
  passed,
  pointsLabel = "Points",
  mentionPass = "Réussi",
  mentionFail = "À améliorer",
  mentionOverride,
}: {
  accent: string;
  points: number;
  maxPoints: number;
  grade: number;
  passed: boolean;
  pointsLabel?: string;
  mentionPass?: string;
  mentionFail?: string;
  mentionOverride?: string;
}) {
  const pct = maxPoints > 0 ? Math.round((points / maxPoints) * 100) : 0;

  return (
    <div className="space-y-4">
      <p className="text-center text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
        Résultats
      </p>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center justify-center p-3 text-center">
          <p className="text-[10px] text-[var(--color-text-secondary)]">{pointsLabel}</p>
          <p className="text-2xl font-bold text-[var(--color-text-primary)]">
            {points}
            <span className="text-sm font-normal text-[var(--color-text-secondary)]">/{maxPoints}</span>
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${pct}%`,
                background: passed ? accent : CORRECTION_ACCENT,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-3 text-center">
          <p className="text-[10px] text-[var(--color-text-secondary)]">Note</p>
          <p className="text-2xl font-bold text-[var(--color-text-primary)]">
            {mentionOverride ? "—" : grade.toFixed(1)}
            <span className="text-sm font-normal text-[var(--color-text-secondary)]">/6</span>
          </p>
        </div>
        <div
          className={`flex flex-col items-center justify-center rounded-xl border-2 bg-[var(--color-bg-primary)] p-3 text-center ${
            mentionOverride ? "border-[var(--color-border-default)]" : passed ? "border-green-500" : CORRECTION_BORDER
          }`}
        >
          <p className="text-[10px] text-[var(--color-text-secondary)]">Mention</p>
          <p
            className={`mt-1 text-sm font-bold ${
              mentionOverride
                ? "text-[var(--color-text-secondary)]"
                : passed
                  ? "text-green-600"
                  : CORRECTION_TEXT_STRONG
            }`}
            style={mentionOverride ? { color: accent } : undefined}
          >
            {mentionOverride ?? (passed ? mentionPass : mentionFail)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function EvalResultsHint() {
  return (
    <p className="text-xs text-center text-[var(--color-text-secondary)]">
      Cliquez sur un exercice pour voir la correction.
    </p>
  );
}

export function EvalExerciseResultList({ children }: { children: ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

export function EvalExerciseResultButton({
  index,
  correct,
  total,
  accent,
  isSelected,
  onToggle,
  scoreLabel,
}: {
  index: number;
  correct: number;
  total: number;
  accent: string;
  isSelected: boolean;
  onToggle: () => void;
  scoreLabel?: string;
}) {
  const complete = isEvalScoreComplete(correct, total);
  const label = scoreLabel ?? `${correct}/${total}`;

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex w-full min-h-[44px] items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors ${
        isSelected
          ? ""
          : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] hover:opacity-95"
      }`}
      style={
        isSelected
          ? {
              borderColor: accent,
              background: `color-mix(in srgb, ${accent} 10%, var(--color-bg-primary))`,
            }
          : undefined
      }
    >
      <span className="flex-1 text-sm font-bold" style={{ color: accent }}>
        Exercice {index + 1}
      </span>
      <span
        className={`shrink-0 text-sm font-bold tabular-nums ${complete ? "" : SCORE_INCOMPLETE_CLASS}`}
        style={complete ? { color: accent } : undefined}
      >
        {label}
      </span>
      <svg
        className={`h-3 w-3 shrink-0 text-[var(--color-text-secondary)] transition-transform ${isSelected ? "rotate-90" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

export function EvalExerciseResultDetail({
  children,
  hidden,
  hideTitle = false,
}: {
  children: ReactNode;
  hidden?: boolean;
  hideTitle?: boolean;
}) {
  return (
    <div className={`${hideTitle ? `px-1 py-3 ${EVAL_RESULT_DETAIL_CLASS}` : ""} ${hidden ? "hidden" : ""}`}>
      {children}
    </div>
  );
}

export function EvalExerciseResultRow({
  index,
  correct,
  total,
  accent,
  isSelected,
  onToggle,
  scoreLabel,
  children,
}: {
  index: number;
  correct: number;
  total: number;
  accent: string;
  isSelected: boolean;
  onToggle: () => void;
  scoreLabel?: string;
  children?: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <EvalExerciseResultButton
        index={index}
        correct={correct}
        total={total}
        accent={accent}
        isSelected={isSelected}
        onToggle={onToggle}
        scoreLabel={scoreLabel}
      />
      {children != null && (
        <EvalExerciseResultDetail hidden={!isSelected} hideTitle>
          {children}
        </EvalExerciseResultDetail>
      )}
    </div>
  );
}
