"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import { playSyllable, playWord } from "@/lib/utils/audio";
import { LECTURE_CORRECTION_BUTTON, LECTURE_CORRECTION_CARD } from "./lecture-correction";

export interface AudioMatchLinkerHandle {
  reset: () => void;
  validate: () => void;
}

type PairMap = Record<number, number>;

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j]!, next[i]!];
  }
  return next;
}

function pickFive(pool: string[]): string[] {
  return shuffle(pool).slice(0, Math.min(5, pool.length));
}

function circleClass(active: boolean, paired: boolean, ok: boolean | null): string {
  const base =
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors";
  if (ok === true) return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/20`;
  if (ok === false) return `${base} border-amber-500 bg-amber-50`;
  if (active) return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/25`;
  if (paired) return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10`;
  return `${base} border-[var(--color-border-default)] bg-white`;
}

export const AudioMatchLinker = forwardRef<
  AudioMatchLinkerHandle,
  {
    items: string[];
    kind: "syllable" | "word";
    title: string;
    consigne: string;
  }
>(function AudioMatchLinker({ items, kind, title, consigne }, ref) {
  const [left, setLeft] = useState(() => pickFive(items));
  const [right, setRight] = useState(() => shuffle(left));
  const [pairs, setPairs] = useState<PairMap>({});
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rightRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [, setLineTick] = useState(0);

  useLayoutEffect(() => {
    setLineTick((n) => n + 1);
  }, [pairs, right, left, validated]);

  useEffect(() => {
    const root = rootRef.current;
    const onResize = () => setLineTick((n) => n + 1);
    window.addEventListener("resize", onResize);
    const ro = typeof ResizeObserver !== "undefined" && root ? new ResizeObserver(onResize) : null;
    if (root && ro) ro.observe(root);
    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, []);

  const reset = useCallback(() => {
    const next = pickFive(items);
    setLeft(next);
    setRight(shuffle(next));
    setPairs({});
    setSelectedLeft(null);
    setValidated(false);
  }, [items]);

  const validate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    setSelectedLeft(null);
  }, [validated]);

  useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

  function play(label: string) {
    if (kind === "syllable") playSyllable(label);
    else playWord(label);
  }

  function pairResult(leftIdx: number): boolean | null {
    if (!validated) return null;
    const rightIdx = pairs[leftIdx];
    if (rightIdx == null) return false;
    return left[leftIdx]?.toLowerCase() === right[rightIdx]?.toLowerCase();
  }

  function onLeftCircle(i: number) {
    if (validated) return;
    if (pairs[i] != null) {
      const next = { ...pairs };
      delete next[i];
      setPairs(next);
      setSelectedLeft(null);
      return;
    }
    setSelectedLeft(i);
  }

  function onRightCircle(j: number) {
    if (validated) return;
    const takenBy = Object.entries(pairs).find(([, v]) => v === j)?.[0];
    if (takenBy != null) {
      const next = { ...pairs };
      delete next[Number(takenBy)];
      setPairs(next);
    }
    if (selectedLeft == null) return;
    setPairs((prev) => ({ ...prev, [selectedLeft]: j }));
    setSelectedLeft(null);
  }

  const lines = Object.entries(pairs).map(([ls, rs]) => {
    const li = Number(ls);
    const ri = Number(rs);
    const a = leftRefs.current[li]?.getBoundingClientRect();
    const b = rightRefs.current[ri]?.getBoundingClientRect();
    const root = rootRef.current?.getBoundingClientRect();
    if (!a || !b || !root) return null;
    return {
      key: `${li}-${ri}`,
      x1: a.left + a.width / 2 - root.left,
      y1: a.top + a.height / 2 - root.top,
      x2: b.left + b.width / 2 - root.left,
      y2: b.top + b.height / 2 - root.top,
      ok: pairResult(li),
    };
  });

  return (
    <section className="space-y-3 pb-8">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{title}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      <div ref={rootRef} className="relative grid grid-cols-2 items-stretch gap-4 sm:gap-8">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          {lines.map(
            (line) =>
              line && (
                <line
                  key={line.key}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke={
                    line.ok === false
                      ? "#d97706"
                      : "var(--color-accent-lecture)"
                  }
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              ),
          )}
        </svg>
        <ul className="space-y-2">
          {left.map((label, i) => {
            const ok = pairResult(i);
            return (
              <li
                key={`L-${label}-${i}`}
                className={`flex items-center gap-2 rounded-[var(--radius-lg)] border px-2 py-1.5 ${
                  ok === false ? LECTURE_CORRECTION_CARD : "border-[var(--color-border-default)] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => play(label)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--color-accent-lecture)] bg-white text-[var(--color-accent-lecture)]"
                  aria-label="Écouter"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
                <button
                  ref={(el) => {
                    leftRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => onLeftCircle(i)}
                  disabled={validated}
                  className={circleClass(selectedLeft === i, pairs[i] != null, ok)}
                  aria-label={`Relier l'audio ${i + 1}`}
                />
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2">
          {right.map((label, j) => {
            const leftIdx = Number(
              Object.entries(pairs).find(([, v]) => v === j)?.[0] ?? NaN,
            );
            const paired = Number.isFinite(leftIdx);
            const ok = paired ? pairResult(leftIdx) : null;
            return (
              <li
                key={`R-${label}-${j}`}
                className={`flex items-center gap-2 rounded-[var(--radius-lg)] border px-2 py-1.5 ${
                  ok === false ? LECTURE_CORRECTION_CARD : "border-[var(--color-border-default)] bg-white"
                }`}
              >
                <button
                  ref={(el) => {
                    rightRefs.current[j] = el;
                  }}
                  type="button"
                  onClick={() => onRightCircle(j)}
                  disabled={validated}
                  className={circleClass(false, paired, ok)}
                  aria-label={`Syllabe ${label}`}
                />
                <span
                  className={`flex-1 rounded-full border-2 px-3 py-1 text-center text-base font-bold tracking-wide ${
                    ok === false ? LECTURE_CORRECTION_BUTTON : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"
                  }`}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
});
