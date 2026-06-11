"use client";

import React, { Fragment, useEffect, useMemo, useState } from "react";

export interface RevisionExerciseProps {
  exerciseKey: number;
  validated: boolean;
  onValidated: (points: number, maxPoints: number) => void;
  validateTrigger: number;
}

export interface RevisionExerciseMeta {
  id: number;
  label: string;
  maxPoints: number;
  component: React.ComponentType<RevisionExerciseProps>;
}

export interface PoolQuestion {
  id?: string;
  promptFr: string;
  acceptable: string[];
}

export function makeRng(seed: number) {
  let s = ((seed * 1664525) + 1013904223) | 0;
  return {
    next(): number {
      s = ((s * 1664525) + 1013904223) | 0;
      return (s >>> 0) / 0x100000000;
    },
    int(min: number, max: number): number {
      s = ((s * 1664525) + 1013904223) | 0;
      return min + ((s >>> 0) % (max - min + 1));
    },
  };
}

export function seededShuffle<T>(arr: readonly T[], seed: number): T[] {
  const a = [...arr];
  let s = ((seed * 1664525) + 1013904223) | 0;
  for (let i = a.length - 1; i > 0; i--) {
    s = ((s * 1664525) + 1013904223) | 0;
    const j = (s >>> 0) % (i + 1);
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

export function normalizeAns(s: string): string {
  return s.trim().replace(".", ",").toLowerCase().replace(/\s+/g, " ");
}

export function checkAnswer(input: string, acceptable: string[]): boolean {
  const n = normalizeAns(input);
  return acceptable.some(a => normalizeAns(a) === n);
}

export function CorrectionInput({
  value,
  onChange,
  correct,
  acceptable,
  validated,
  width = "w-20",
}: {
  value: string;
  onChange: (v: string) => void;
  correct: string;
  acceptable?: string[];
  validated: boolean;
  width?: string;
}) {
  const acceptList = acceptable ?? [correct];
  const isRight = validated && checkAnswer(value, acceptList);
  const showCorrection = validated && !isRight;

  if (showCorrection) {
    return (
      <span className={`${width} inline-flex min-h-9 flex-col items-center justify-center rounded border border-amber-400 px-1 text-center font-mono leading-tight`}>
        <span className="text-xs text-[var(--color-text-primary)] leading-none">{value.trim() || "—"}</span>
        <span className="text-xs font-bold text-amber-600 leading-none">{correct}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex flex-col items-center gap-0.5 align-middle">
      <input
        type="text"
        inputMode="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={validated}
        className={`${width} h-9 rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 text-center font-mono text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:border-[var(--color-accent-alg)] focus:ring-[var(--color-accent-alg)]/20 disabled:opacity-80`}
      />
    </span>
  );
}

export function OrderingChips({
  numbers, selected, onToggle, validated, desc = false, numberLabel,
}: {
  numbers: number[]; selected: number[];
  onToggle: (n: number) => void; validated: boolean;
  desc?: boolean; numberLabel?: string;
}) {
  const available = numbers.filter(n => !selected.includes(n));
  const chipCls = "w-20 flex h-10 items-center justify-center rounded-lg border px-1.5 text-sm font-mono font-bold transition-colors ";
  return (
    <div className="space-y-3">
      {available.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {available.map((n, ni) => (
            <button key={ni} type="button" disabled={validated} onClick={() => onToggle(n)}
              className={chipCls + (validated
                ? "cursor-default border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40"
                : "cursor-pointer border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]")}>
              {n}
            </button>
          ))}
        </div>
      )}
      <div className="flex min-h-[48px] flex-wrap items-center gap-1.5 border-b-2 border-[var(--color-accent-alg)] pb-1">
        {numberLabel && (
          <span className="shrink-0 mr-1 text-xs font-bold text-[var(--color-accent-alg)]">{numberLabel}</span>
        )}
        {selected.map((n, si) => (
          <Fragment key={si}>
            <button type="button" disabled={validated} onClick={() => onToggle(n)}
              className={chipCls + (validated ? "cursor-default" : "cursor-pointer") + " border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"}>
              {n}
            </button>
            {si < selected.length - 1 && (
              <span className="text-sm font-bold text-[var(--color-text-secondary)]">{desc ? ">" : "<"}</span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function PoolExercise({
  exerciseKey,
  validated,
  onValidated,
  validateTrigger,
  pool,
  count,
}: RevisionExerciseProps & {
  pool: readonly PoolQuestion[];
  count: number;
}) {
  const selected = useMemo(
    () => seededShuffle(pool, exerciseKey).slice(0, count),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exerciseKey],
  );
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    selected.forEach((q, i) => {
      if (checkAnswer(answers[i] ?? "", q.acceptable)) pts++;
    });
    onValidated(pts, count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      {selected.map((q, i) => (
        <div key={q.id ?? i} className="space-y-2">
          <p className="whitespace-pre-wrap text-sm text-[var(--color-text-primary)]">{q.promptFr}</p>
          <CorrectionInput
            value={answers[i] ?? ""}
            onChange={v =>
              setAnswers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={q.acceptable[0]!}
            acceptable={q.acceptable}
            validated={validated}
            width="w-28"
          />
        </div>
      ))}
    </div>
  );
}
