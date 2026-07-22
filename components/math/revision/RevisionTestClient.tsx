"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  EvalExerciseResultButton,
  EvalExerciseResultDetail,
  EvalResultsHint,
  EvalResultsSummary,
} from "@/components/ui/EvalResultsUI";
import { linearSwissGrade } from "@/lib/scoring";
import type { RevisionExerciseMeta } from "./RevisionCommon";

const TIMER_SECONDS = 30 * 60;

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function RevisionProgressBar({
  current,
  total,
  timeLeft,
  validated,
  onSegmentClick,
  totalPoints,
  maxPoints,
}: {
  current: number;
  total: number;
  timeLeft: number;
  validated: boolean[];
  onSegmentClick: (idx: number) => void;
  totalPoints: number;
  maxPoints: number;
}) {
  const remaining = validated.filter(v => !v).length;
  return (
    <div className="mb-5">
      <div className="mb-1.5 flex items-center justify-between">
        <p className="text-xs font-bold tabular-nums text-[var(--color-correction)]">
          {totalPoints} / {maxPoints} pts
        </p>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[var(--color-correction-soft)] px-2 py-0.5 text-xs font-bold tabular-nums text-[var(--color-correction)]">
            {formatTime(timeLeft)}
          </span>
          <p className="text-xs text-[var(--color-text-secondary)]">
            {remaining} ex. restant{remaining !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: total }).map((_, i) => {
          const isValidated = validated[i] ?? false;
          const isCurrent = i === current;
          if (isValidated) return null;
          const cls =
            "h-2 flex-1 rounded-full transition-colors cursor-pointer " +
            (isCurrent ? "bg-[var(--color-correction)]" : "bg-[var(--color-border-default)]");
          return (
            <div
              key={i}
              className={cls}
              onClick={() => onSegmentClick(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && onSegmentClick(i)}
              aria-label={`Exercice ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

function ResultsScreen({
  scores,
  exercises,
}: {
  scores: Array<{ points: number; maxPoints: number } | null>;
  exercises: RevisionExerciseMeta[];
}) {
  const totalPoints = scores.reduce((s, sc) => s + (sc?.points ?? 0), 0);
  const maxPoints = exercises.reduce((s, e) => s + e.maxPoints, 0);
  const grade = linearSwissGrade(totalPoints, maxPoints);
  const passed = grade >= 4;

  return (
    <div className="space-y-4">
      <EvalResultsSummary
        accent="var(--color-accent-alg)"
        points={totalPoints}
        maxPoints={maxPoints}
        grade={grade}
        passed={passed}
      />
      <EvalResultsHint />
    </div>
  );
}

type TestPhase = "idle" | "running" | "results";

interface RevisionTestClientProps {
  exercises: RevisionExerciseMeta[];
  moduleId: string;
  moduleCode: string;
  moduleTitle: string;
}

export function RevisionTestClient({
  exercises,
  moduleId: _moduleId,
  moduleCode,
  moduleTitle: _moduleTitle,
}: RevisionTestClientProps) {
  const router = useRouter();
  const TOTAL_EXERCISES = exercises.length;
  const TOTAL_MAX_POINTS = exercises.reduce((s, e) => s + e.maxPoints, 0);

  const [phase, setPhase] = useState<TestPhase>("idle");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [validated, setValidated] = useState<boolean[]>(() =>
    Array(TOTAL_EXERCISES).fill(false),
  );
  const [scores, setScores] = useState<Array<{ points: number; maxPoints: number } | null>>(
    () => Array(TOTAL_EXERCISES).fill(null),
  );
  const [validateTriggers, setValidateTriggers] = useState<number[]>(() =>
    Array(TOTAL_EXERCISES).fill(0),
  );
  const [sessionKey, setSessionKey] = useState(1);
  const [selectedResultIdx, setSelectedResultIdx] = useState(0);

  const exerciseKeys = useMemo(
    () => exercises.map((_, i) => sessionKey * 100 + i),
    [sessionKey, exercises],
  );
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => (t <= 1 ? 0 : t - 1));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "running" || timeLeft > 0) return;
    setValidateTriggers(prev => prev.map((t, i) => (!validated[i] ? t + 1 : t)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase]);

  function findOpenExercise(from: number, direction: 1 | -1, list = validated): number {
    if (list.every(Boolean)) return -1;
    let idx = (from + direction + TOTAL_EXERCISES) % TOTAL_EXERCISES;
    while (idx !== from) {
      if (!list[idx]) return idx;
      idx = (idx + direction + TOTAL_EXERCISES) % TOTAL_EXERCISES;
    }
    if (!list[from]) return from;
    return -1;
  }

  const goTo = useCallback((idx: number) => setCurrentIdx(idx), []);

  function goNext() {
    const next = findOpenExercise(currentIdx, 1);
    if (next >= 0) goTo(next);
  }

  function goPrev() {
    const prev = findOpenExercise(currentIdx, -1);
    if (prev >= 0) goTo(prev);
  }

  function triggerValidate() {
    setValidateTriggers(prev => {
      const next = [...prev];
      next[currentIdx] = (next[currentIdx] ?? 0) + 1;
      return next;
    });
  }

  function handleValidated(exIdx: number, points: number, maxPoints: number) {
    setValidated(prev => {
      const n = [...prev];
      n[exIdx] = true;
      const next = findOpenExercise(exIdx, 1, n);
      const prevOpen = findOpenExercise(exIdx, -1, n);
      if (next >= 0) setCurrentIdx(next);
      else if (prevOpen >= 0) setCurrentIdx(prevOpen);
      else setPhase("results");
      return n;
    });
    setScores(prev => {
      const n = [...prev];
      n[exIdx] = { points, maxPoints };
      return n;
    });
  }

  const allValidated = useMemo(() => validated.every(v => v), [validated]);
  const totalPoints = useMemo(
    () => scores.reduce((s, sc) => s + (sc?.points ?? 0), 0),
    [scores],
  );

  useEffect(() => {
    if (phase === "running" && allValidated) setPhase("results");
  }, [allValidated, phase]);

  function startTest() {
    setSessionKey(k => k + 1);
    setValidated(Array(TOTAL_EXERCISES).fill(false));
    setScores(Array(TOTAL_EXERCISES).fill(null));
    setValidateTriggers(Array(TOTAL_EXERCISES).fill(0));
    setCurrentIdx(0);
    setSelectedResultIdx(0);
    setTimeLeft(TIMER_SECONDS);
    setPhase("running");
  }

  if (phase === "idle") {
    return (
      <div className="space-y-6">
        <div className="space-y-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">Informations</p>
            <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                <span>
                  <strong className="text-[var(--color-text-primary)]">
                    {TOTAL_EXERCISES} exercices
                  </strong>{" "}
                  couvrant les sous-modules de {moduleCode}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                <span>
                  <strong className="text-[var(--color-text-primary)]">30 minutes</strong> pour
                  compléter l&apos;évaluation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                <span>Validez chaque exercice individuellement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                <span>
                  Score maximum :{" "}
                  <strong className="text-[var(--color-text-primary)]">
                    {TOTAL_MAX_POINTS} points
                  </strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          onClick={startTest}
          className="w-full rounded-[var(--radius-lg)] bg-amber-500 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
        >
          Commencer l&apos;évaluation
        </button>
      </div>
    );
  }

  if (phase === "results" && timerRef.current) clearInterval(timerRef.current);

  const ex = exercises[currentIdx]!;
  const isCurrentValidated = validated[currentIdx] ?? false;
  const previousOpenIdx = findOpenExercise(currentIdx, -1);
  const nextOpenIdx = findOpenExercise(currentIdx, 1);
  const displayExerciseIdx = phase === "results" ? selectedResultIdx : currentIdx;

  return (
    <div className={`app-shell flex-1 ${phase === "results" ? "py-2 pb-8" : "py-2 pb-40"}`}>
      {phase === "results" ? (
        <ResultsScreen scores={scores} exercises={exercises} />
      ) : (
        <>
          <div data-no-print>
            <RevisionProgressBar
              current={currentIdx}
              total={TOTAL_EXERCISES}
              timeLeft={timeLeft}
              validated={validated}
              onSegmentClick={idx => {
                if (!validated[idx]) setCurrentIdx(idx);
              }}
              totalPoints={totalPoints}
              maxPoints={TOTAL_MAX_POINTS}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-[var(--color-accent-alg)]">
              Exercice {ex.id}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--color-text-secondary)]">
                {ex.maxPoints} pt{ex.maxPoints > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </>
      )}

      <div className={phase === "results" ? "mt-2 space-y-2" : ""}>
        {exercises.map((exercise, i) => {
          const Comp = exercise.component;
          const pts = scores[i]?.points ?? 0;
          const max = exercise.maxPoints;
          const isSelected = i === selectedResultIdx;
          return (
            <div
              key={exercise.id}
              className={phase === "results" ? "space-y-2" : i !== displayExerciseIdx ? "hidden" : ""}
            >
              {phase === "results" && (
                <EvalExerciseResultButton
                  index={i}
                  correct={pts}
                  total={max}
                  accent="var(--color-accent-alg)"
                  isSelected={isSelected}
                  onToggle={() => setSelectedResultIdx(i)}
                />
              )}
              <EvalExerciseResultDetail hidden={phase === "results" && !isSelected} hideTitle={phase === "results"}>
                <Comp
                  key={`${i}-${sessionKey}`}
                  exerciseKey={exerciseKeys[i]!}
                  validated={phase === "results" || (validated[i] ?? false)}
                  onValidated={(p, m) => handleValidated(i, p, m)}
                  validateTrigger={validateTriggers[i] ?? 0}
                />
              </EvalExerciseResultDetail>
            </div>
          );
        })}
      </div>

      {phase === "results" && (
        <button
          type="button"
          onClick={() => router.push("/mathematiques")}
          className="mt-6 w-full rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          Terminer
        </button>
      )}

      {phase !== "results" && (
        <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
          <div className="border-t border-[var(--color-border-default)]">
            <div className="app-shell-bar flex items-center justify-between py-3">
              <button
                type="button"
                onClick={goPrev}
                disabled={previousOpenIdx < 0}
                className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Retour
              </button>
              {!isCurrentValidated && (
                <button
                  type="button"
                  onClick={triggerValidate}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-white transition-opacity hover:opacity-90 active:scale-90"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </button>
              )}
              <button
                type="button"
                onClick={goNext}
                disabled={nextOpenIdx < 0}
                className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Suivant
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <div style={{ height: 72 }} />
        </div>
      )}
    </div>
  );
}
