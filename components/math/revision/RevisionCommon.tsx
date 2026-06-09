"use client";

import React, { useEffect, useMemo, useState } from "react";

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
      <span className={`${width} inline-flex min-h-9 flex-col items-center justify-center rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 px-1 text-center font-mono leading-tight`}>
        {value.trim() && <span className="text-[10px] text-[var(--color-text-primary)]">{value}</span>}
        <span className="text-sm font-semibold text-amber-600">{correct}</span>
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
