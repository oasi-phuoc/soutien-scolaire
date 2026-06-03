"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise8,
  Exercise9,
  Exercise10,
  Exercise11,
  Exercise12,
  Exercise13,
  Exercise14,
  Exercise15,
} from "@/components/math/placement/PlacementExercises1to15";
import type { PlacementExerciseProps } from "@/components/math/placement/PlacementExercises1to15";
import {
  Exercise16,
  Exercise17,
  Exercise18,
  Exercise19,
  Exercise20,
  Exercise21,
  Exercise22,
  Exercise23,
  Exercise24,
  Exercise25,
  Exercise26,
  Exercise27,
} from "@/components/math/placement/PlacementExercises16to27";
import {
  Exercise28,
  Exercise29,
  Exercise30,
  Exercise31,
  Exercise32,
  Exercise33,
  Exercise34,
  Exercise35,
  Exercise36,
  Exercise37,
  Exercise38,
} from "@/components/math/placement/PlacementExercises28to38";

// ── Exercise registry ─────────────────────────────────────────────────────────

interface ExerciseMeta {
  id: number;
  label: string;
  maxPoints: number;
  component: React.ComponentType<PlacementExerciseProps>;
}

const EXERCISES: ExerciseMeta[] = [
  { id: 1, label: "Compter les formes", maxPoints: 2, component: Exercise1 },
  { id: 2, label: "Comparer (11–99)", maxPoints: 2, component: Exercise2 },
  { id: 3, label: "Suites numériques", maxPoints: 2, component: Exercise3 },
  { id: 4, label: "Additions et soustractions", maxPoints: 2, component: Exercise4 },
  { id: 5, label: "Opérande manquant", maxPoints: 4, component: Exercise5 },
  { id: 6, label: "Calcul en colonnes (99–999)", maxPoints: 4, component: Exercise6 },
  { id: 8, label: "Dizaines et unités", maxPoints: 2, component: Exercise8 },
  { id: 9, label: "Comparer (101–999)", maxPoints: 2, component: Exercise9 },
  { id: 10, label: "Grandes suites", maxPoints: 2, component: Exercise10 },
  { id: 11, label: "Calcul mixte", maxPoints: 3, component: Exercise11 },
  { id: 12, label: "Décomposition", maxPoints: 2, component: Exercise12 },
  { id: 13, label: "Colonnes (1000–9999)", maxPoints: 3, component: Exercise13 },
  { id: 14, label: "Multiplication en colonnes", maxPoints: 2, component: Exercise14 },
  { id: 15, label: "Division en colonnes", maxPoints: 2, component: Exercise15 },
  { id: 16, label: "Rectangle", maxPoints: 2, component: Exercise16 },
  { id: 17, label: "Suites (grands nombres)", maxPoints: 3, component: Exercise17 },
  { id: 18, label: "Trier des nombres", maxPoints: 2, component: Exercise18 },
  { id: 19, label: "Additions et soustrations décimales", maxPoints: 4, component: Exercise19 },
  { id: 20, label: "Multiplication décimale", maxPoints: 2, component: Exercise20 },
  { id: 21, label: "Division décimale", maxPoints: 2, component: Exercise21 },
  { id: 22, label: "Colorier les fractions", maxPoints: 2, component: Exercise22 },
  { id: 23, label: "Conversions de longueur", maxPoints: 4, component: Exercise23 },
  { id: 24, label: "Calculs décimaux", maxPoints: 4, component: Exercise24 },
  { id: 25, label: "Parallélogramme", maxPoints: 2, component: Exercise25 },
  { id: 26, label: "Triangle rectangle", maxPoints: 2, component: Exercise26 },
  { id: 27, label: "Losange", maxPoints: 2, component: Exercise27 },
  { id: 28, label: "Puissances et racines", maxPoints: 4, component: Exercise28 },
  { id: 29, label: "Priorité des opérations", maxPoints: 2, component: Exercise29 },
  { id: 30, label: "Nombres relatifs", maxPoints: 4, component: Exercise30 },
  { id: 31, label: "Fractions", maxPoints: 4, component: Exercise31 },
  { id: 32, label: "Pourcentages et règle de trois", maxPoints: 2, component: Exercise32 },
  { id: 33, label: "Simplification algébrique", maxPoints: 2, component: Exercise33 },
  { id: 34, label: "Évaluer des expressions", maxPoints: 2, component: Exercise34 },
  { id: 35, label: "Résoudre des équations", maxPoints: 2, component: Exercise35 },
  { id: 36, label: "Conversions d'unités", maxPoints: 4, component: Exercise36 },
  { id: 37, label: "Trapèze", maxPoints: 2, component: Exercise37 },
  { id: 38, label: "Cercle", maxPoints: 2, component: Exercise38 },
];

const TOTAL_EXERCISES = EXERCISES.length;
const TOTAL_MAX_POINTS = EXERCISES.reduce((s, e) => s + e.maxPoints, 0);
const TIMER_SECONDS = 90 * 60; // 90 minutes

// ── Timer formatter ───────────────────────────────────────────────────────────

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ── Progress bar ──────────────────────────────────────────────────────────────

interface PlacementProgressBarProps {
  current: number;
  total: number;
  timeLeft: number;
  validated: boolean[];
  hasInput: boolean[];
  onSegmentClick: (idx: number) => void;
  totalPoints: number;
  maxPoints: number;
}

function PlacementProgressBar({
  current,
  total,
  timeLeft,
  validated,
  hasInput,
  onSegmentClick,
  totalPoints,
  maxPoints,
}: PlacementProgressBarProps) {
  const remaining = validated.filter(v => !v).length;
  return (
    <div className="mb-5">
      <div className="mb-1.5 flex items-center justify-between">
        <p className="text-xs font-bold tabular-nums text-amber-600">{totalPoints} / {maxPoints} pts</p>
        <div className="flex items-center gap-3">
          <span className={`rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${
            timeLeft <= 300
              ? "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400"
              : "bg-amber-100 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400"
          }`}>
            {formatTime(timeLeft)}
          </span>
          <p className="text-xs text-[var(--color-text-secondary)]">{remaining} exercice{remaining !== 1 ? "s" : ""} restant{remaining !== 1 ? "s" : ""}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: total }).map((_, i) => {
          const isValidated = validated[i] ?? false;
          const isCurrent = i === current;
          const hasTyped = hasInput[i] ?? false;

          if (isValidated) return null;

          let cls = "h-2 flex-1 rounded-full transition-colors cursor-pointer ";
          if (isCurrent) {
            cls += "bg-amber-500";
          } else if (hasTyped) {
            cls += "bg-blue-400";
          } else {
            cls += "bg-[var(--color-border-default)]";
          }

          return (
            <div
              key={i}
              className={cls}
              onClick={() => onSegmentClick(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSegmentClick(i)}
              aria-label={`Exercice ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// ── Results screen ────────────────────────────────────────────────────────────

interface ResultsScreenProps {
  scores: Array<{ points: number; maxPoints: number } | null>;
  exercises: ExerciseMeta[];
  onBack: () => void;
}

function ResultsScreen({ scores, exercises, onBack }: ResultsScreenProps) {
  const totalPoints = scores.reduce((s, sc) => s + (sc?.points ?? 0), 0);
  const maxPoints = exercises.reduce((s, e) => s + e.maxPoints, 0);
  const pct = maxPoints > 0 ? Math.round((totalPoints / maxPoints) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600">Résultats</p>
        <p className="text-3xl font-bold text-[var(--color-text-primary)]">
          {totalPoints} <span className="text-xl text-[var(--color-text-secondary)]">/ {maxPoints}</span>
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">{pct}%</p>
      </div>

      {/* Score bar */}
      <div className="h-3 rounded-full bg-[var(--color-bg-secondary)] overflow-hidden">
        <div
          className="h-full rounded-full bg-amber-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Per-exercise list */}
      <div className="space-y-2">
        {exercises.map((ex, i) => {
          const sc = scores[i];
          const pts = sc?.points ?? 0;
          const max = ex.maxPoints;
          const exPct = max > 0 ? Math.round((pts / max) * 100) : 0;
          return (
            <div key={ex.id} className="flex items-center gap-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-2">
              <span className="text-xs font-bold text-[var(--color-accent-alg)] w-5">{ex.id}</span>
              <span className="flex-1 text-xs text-[var(--color-text-secondary)] truncate">{ex.label}</span>
              <span className="text-xs font-bold text-[var(--color-text-primary)] tabular-nums">{pts} / {max}</span>
              <div className="w-16 h-1.5 rounded-full bg-[var(--color-bg-secondary)] overflow-hidden">
                <div
                  className={`h-full rounded-full ${exPct >= 60 ? "bg-amber-500" : "bg-red-400"}`}
                  style={{ width: `${exPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onBack}
        className="w-full rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
      >
        Retour aux modules
      </button>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

type TestPhase = "idle" | "running" | "results";

export function PlacementTestClient() {
  const router = useRouter();
  const [phase, setPhase] = useState<TestPhase>("idle");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [validated, setValidated] = useState<boolean[]>(() => Array(TOTAL_EXERCISES).fill(false));
  const [scores, setScores] = useState<Array<{ points: number; maxPoints: number } | null>>(() => Array(TOTAL_EXERCISES).fill(null));
  const [validateTriggers, setValidateTriggers] = useState<number[]>(() => Array(TOTAL_EXERCISES).fill(0));
  const [hasInput, _setHasInput] = useState<boolean[]>(() => Array(TOTAL_EXERCISES).fill(false));
  const [sessionKey, setSessionKey] = useState(1);
  const exerciseKeys = useMemo(() => EXERCISES.map((_, i) => sessionKey * 100 + i), [sessionKey]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Timer ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) return 0;
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  // Auto-validate all when timer hits 0
  useEffect(() => {
    if (phase !== "running" || timeLeft > 0) return;
    // Trigger validation for all non-validated exercises
    setValidateTriggers(prev => prev.map((t, i) => (!validated[i] ? t + 1 : t)));
  }, [timeLeft, phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Navigation helpers ─────────────────────────────────────────────────────

  function findNextNonValidated(from: number, direction: 1 | -1): number {
    let idx = from + direction;
    while (idx >= 0 && idx < TOTAL_EXERCISES) {
      if (!validated[idx]) return idx;
      idx += direction;
    }
    return -1; // all validated in that direction
  }

  const goTo = useCallback((idx: number) => {
    setCurrentIdx(idx);
  }, []);

  function goNext() {
    // Skip validated exercises
    const next = findNextNonValidated(currentIdx, 1);
    if (next >= 0) {
      goTo(next);
    } else {
      // All remaining exercises validated → show results
      setPhase("results");
    }
  }

  function goPrev() {
    const prev = findNextNonValidated(currentIdx, -1);
    if (prev >= 0) goTo(prev);
  }

  function handleSegmentClick(idx: number) {
    setCurrentIdx(idx);
  }

  // ── Validation ─────────────────────────────────────────────────────────────

  function triggerValidate() {
    setValidateTriggers(prev => {
      const next = [...prev];
      next[currentIdx] = (next[currentIdx] ?? 0) + 1;
      return next;
    });
  }

  function handleValidated(exIdx: number, points: number, maxPoints: number) {
    setValidated(prev => { const n = [...prev]; n[exIdx] = true; return n; });
    setScores(prev => { const n = [...prev]; n[exIdx] = { points, maxPoints }; return n; });
    // Auto-advance to next non-validated after short delay
    setTimeout(() => {
      setCurrentIdx(cur => {
        const next = findNextNonValidatedFrom(cur, 1, exIdx);
        if (next >= 0) return next;
        // Check if all validated
        return cur;
      });
    }, 600);
  }

  function findNextNonValidatedFrom(from: number, direction: 1 | -1, justValidated: number): number {
    // Use the latest validated state (including the just-validated one)
    let idx = from + direction;
    while (idx >= 0 && idx < TOTAL_EXERCISES) {
      if (idx !== justValidated && !(validated[idx])) return idx;
      idx += direction;
    }
    return -1;
  }

  // Check if all exercises validated → show results
  const allValidated = useMemo(() => validated.every(v => v), [validated]);
  const totalPoints = useMemo(() => scores.reduce((s, sc) => s + (sc?.points ?? 0), 0), [scores]);
  useEffect(() => {
    if (phase === "running" && allValidated) {
      setPhase("results");
    }
  }, [allValidated, phase]);

  // ── Start screen ───────────────────────────────────────────────────────────

  if (phase === "idle") {
    return (
      <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
          Retour
        </button>

        <div className="space-y-6">
          <header className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-amber-600">Mathématiques</p>
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Test de placement</h1>
          </header>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Informations</p>
              <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span><strong className="text-[var(--color-text-primary)]">{TOTAL_EXERCISES} exercices</strong> couvrant l&apos;algèbre du primaire au secondaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span><strong className="text-[var(--color-text-primary)]">90 minutes</strong> pour compléter le test</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>Validez chaque exercice individuellement et naviguez librement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>Score maximum : <strong className="text-[var(--color-text-primary)]">{TOTAL_MAX_POINTS} points</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSessionKey(k => k + 1);
              setValidated(Array(TOTAL_EXERCISES).fill(false));
              setScores(Array(TOTAL_EXERCISES).fill(null));
              setValidateTriggers(Array(TOTAL_EXERCISES).fill(0));
              setCurrentIdx(0);
              setTimeLeft(TIMER_SECONDS);
              setPhase("running");
            }}
            className="w-full rounded-[var(--radius-lg)] bg-amber-500 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
          >
            Commencer le test
          </button>
        </div>
      </div>
    );
  }

  // ── Results screen ─────────────────────────────────────────────────────────

  if (phase === "results") {
    if (timerRef.current) clearInterval(timerRef.current);
    return (
      <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
        <ResultsScreen
          scores={scores}
          exercises={EXERCISES}
          onBack={() => router.push("/mathematiques")}
        />
      </div>
    );
  }

  // ── Running phase ──────────────────────────────────────────────────────────

  const ex = EXERCISES[currentIdx]!;
  const isCurrentValidated = validated[currentIdx] ?? false;

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-6 pb-40">
      {/* Page header */}
      <div className="mb-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPhase("idle")}
          aria-label="Retour"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-80"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Test de placement</h1>
      </div>

      {/* Progress bar */}
      <PlacementProgressBar
        current={currentIdx}
        total={TOTAL_EXERCISES}
        timeLeft={timeLeft}
        validated={validated}
        hasInput={hasInput}
        onSegmentClick={handleSegmentClick}
        totalPoints={totalPoints}
        maxPoints={TOTAL_MAX_POINTS}
      />

      {/* Exercise header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {ex.id}</h2>
        <span className="text-xs text-[var(--color-text-secondary)]">{ex.maxPoints} pt{ex.maxPoints > 1 ? "s" : ""}</span>
      </div>

      {/* All exercises mounted simultaneously — only current is visible */}
      {EXERCISES.map((exercise, i) => {
        const Comp = exercise.component;
        return (
          <div key={i} className={i !== currentIdx ? "hidden" : ""}>
            <Comp
              exerciseKey={exerciseKeys[i]!}
              validated={validated[i] ?? false}
              onValidated={(pts, max) => handleValidated(i, pts, max)}
              validateTrigger={validateTriggers[i] ?? 0}
            />
          </div>
        );
      })}

      {/* Navigation bar (fixed bottom) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={findNextNonValidated(currentIdx, -1) < 0}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
              Retour
            </button>

            {!isCurrentValidated && (
              <button
                type="button"
                onClick={triggerValidate}
                aria-label="Valider"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-white transition-opacity hover:opacity-90 active:scale-90"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5"/></svg>
              </button>
            )}

            <button
              type="button"
              onClick={goNext}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
            >
              Suivant
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
    </div>
  );
}
