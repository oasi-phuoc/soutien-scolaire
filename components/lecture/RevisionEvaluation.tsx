"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { RevisionData } from "@/lib/curriculum/lecture-data";
import { lectureRevisionSoundWords } from "@/lib/curriculum/word-pool";
import { linearSwissGrade, LEVEL_PASSING_GRADES, type LevelKey } from "@/lib/scoring";
import { useRegisterEvalGuard } from "@/components/EvalNavGuard";
import EvalProgressBar from "@/components/math/EvalProgressBar";
import { EvalAnnounceScreen } from "@/components/ui/EvalAnnounceScreen";
import { EvalFinishButton } from "@/components/ui/EvalFinishButton";
import {
  EvalExerciseResultList,
  EvalExerciseResultRow,
  EvalResultsHint,
  EvalResultsSummary,
} from "@/components/ui/EvalResultsUI";
import { RevisionLetterGrid } from "./RevisionLetterGrid";
import { RevisionWordSpotter } from "./RevisionWordSpotter";
import { RevisionSoundStep } from "./RevisionSoundStep";
import { RevisionPronounce } from "./RevisionPronounce";

interface Props {
  data: RevisionData;
  onBack: () => void;
  onDone: (grade: number, passed: boolean, total: number) => void;
  onEvalStepChange?: (idx: number, total: number, validated: boolean[], isResults: boolean) => void;
  onEvalTimeChange?: (timeLeft: number | null) => void;
  onEvalNavigateReady?: (navigate: (index: number) => void) => void;
}

type EvalStep = "grid-mixed" | "words-mixed" | "sound-audio" | "sound-image" | "pronounce" | "results";

const EVAL_STEPS: EvalStep[] = ["grid-mixed", "words-mixed", "sound-audio", "sound-image", "pronounce", "results"];
const EVAL_SOUND_COUNT = 8;
const EVAL_PRONOUNCE_COUNT = 4;
const EVAL_MINUTES = 5;

const RESULT_LABELS: Record<Exclude<EvalStep, "results">, string> = {
  "grid-mixed": "Reconnaître les lettres",
  "words-mixed": "Repérer dans les mots",
  "sound-audio": "Entendre les sons (audio)",
  "sound-image": "Entendre les sons (images)",
  pronounce: "Prononcer les mots",
};

function getPassGrade(): number {
  if (typeof window === "undefined") return 4;
  try {
    const level = (localStorage.getItem("soutien-level") ?? "base") as LevelKey;
    return LEVEL_PASSING_GRADES[level] ?? 4;
  } catch {
    return 4;
  }
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function IconLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function IconRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function RevisionEvaluation({
  data,
  onBack,
  onDone,
  onEvalStepChange,
  onEvalTimeChange,
  onEvalNavigateReady,
}: Props) {
  const exerciseSteps = useMemo(
    () => EVAL_STEPS.filter((entry): entry is Exclude<EvalStep, "results"> => entry !== "results"),
    [],
  );
  const [evalWordCount] = useState(() => 2 + Math.floor(Math.random() * 2));
  const maxScores = useMemo(
    () => [0, evalWordCount, EVAL_SOUND_COUNT, EVAL_SOUND_COUNT, EVAL_PRONOUNCE_COUNT],
    [evalWordCount],
  );

  const soundAudioWords = useMemo(
    () => lectureRevisionSoundWords(data.phonemeA, data.phonemeB, EVAL_SOUND_COUNT, false),
    [data.phonemeA, data.phonemeB],
  );
  const soundImageWords = useMemo(
    () => lectureRevisionSoundWords(data.phonemeA, data.phonemeB, EVAL_SOUND_COUNT, true, EVAL_SOUND_COUNT),
    [data.phonemeA, data.phonemeB],
  );

  const makeEmptyScores = () => exerciseSteps.map(() => null) as (number | null)[];
  const makeEmptyMaxScores = () => [...maxScores];
  const makeEmptyValidated = () => exerciseSteps.map(() => false);

  const [stepIdx, setStepIdx] = useState(0);
  const [scores, setScores] = useState<(number | null)[]>(() => makeEmptyScores());
  const [rowMaxScores, setRowMaxScores] = useState<number[]>(() => makeEmptyMaxScores());
  const [validated, setValidated] = useState<boolean[]>(() => makeEmptyValidated());
  const validatedRef = useRef(validated);
  const [validateTarget, setValidateTarget] = useState<number | null>(null);
  const [evalStarted, setEvalStarted] = useState(false);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const step = EVAL_STEPS[stepIdx]!;
  const isResults = step === "results";
  const showValidateBtn = evalStarted && !isResults && !validated[stepIdx];

  useRegisterEvalGuard(evalStarted && !isResults);

  useEffect(() => {
    if (!evalStarted || isResults || evalTimeLeft === null || evalTimeLeft <= 0) return;
    const id = setTimeout(() => setEvalTimeLeft((t) => Math.max(0, (t ?? 1) - 1)), 1000);
    return () => clearTimeout(id);
  }, [evalStarted, isResults, evalTimeLeft]);

  useEffect(() => {
    if (evalTimeLeft !== 0 || isResults) return;
    setValidateTarget(-1);
  }, [evalTimeLeft, isResults]);

  useEffect(() => {
    onEvalTimeChange?.(evalStarted ? evalTimeLeft : null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evalTimeLeft, evalStarted]);

  function findRemaining(from: number, direction: 1 | -1, flags = validated) {
    for (let offset = 1; offset <= exerciseSteps.length; offset++) {
      const candidate = (from + direction * offset + exerciseSteps.length) % exerciseSteps.length;
      if (!flags[candidate]) return candidate;
    }
    return null;
  }

  function goNext() {
    if (isResults) {
      const total = scores.reduce<number>((s, v) => s + (v ?? 0), 0);
      const maxTotal = rowMaxScores.reduce((s, v) => s + v, 0);
      const grade = linearSwissGrade(total, maxTotal);
      onDone(grade, grade >= getPassGrade(), total);
      return;
    }
    const next = findRemaining(stepIdx, 1);
    if (next !== null) setStepIdx(next);
  }

  function goPrevious() {
    if (isResults) return;
    const previous = findRemaining(stepIdx, -1);
    if (previous !== null) setStepIdx(previous);
  }

  useEffect(() => {
    onEvalNavigateReady?.((index) => {
      if (index >= 0 && index < exerciseSteps.length && !validated[index]) setStepIdx(index);
    });
  }, [onEvalNavigateReady, validated, exerciseSteps.length]);

  function recordScore(exIdx: number, score: number, max: number) {
    setScores((prev) => { const next = [...prev]; next[exIdx] = score; return next; });
    setRowMaxScores((prev) => { const next = [...prev]; next[exIdx] = max; return next; });
    const nextValidated = validatedRef.current.map((done, i) => done || i === exIdx);
    validatedRef.current = nextValidated;
    setValidated(nextValidated);
    setValidateTarget(null);
    const next = findRemaining(exIdx, 1, nextValidated);
    setStepIdx(next ?? EVAL_STEPS.length - 1);
  }

  const progressIdx = isResults ? exerciseSteps.length : stepIdx;
  const maxTotal = rowMaxScores.reduce((s, v) => s + v, 0);
  const totalScore = scores.reduce<number>((s, v) => s + (v ?? 0), 0);

  useEffect(() => {
    if (!evalStarted) {
      onEvalStepChange?.(0, exerciseSteps.length, validated, false);
    } else {
      onEvalStepChange?.(progressIdx, exerciseSteps.length, validated, isResults);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressIdx, exerciseSteps.length, evalStarted, validated, isResults]);

  return (
    <div className="w-full flex-1 pb-56">
      {showCancelConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
          <div className="mx-4 w-full max-w-sm space-y-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] p-6 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Annuler l&apos;évaluation ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Votre progression sera perdue. Vous pourrez recommencer depuis le début.</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setEvalStarted(false);
                  setEvalTimeLeft(null);
                  setStepIdx(0);
                  const emptyValidated = makeEmptyValidated();
                  setScores(makeEmptyScores());
                  setRowMaxScores(makeEmptyMaxScores());
                  setValidated(emptyValidated);
                  validatedRef.current = emptyValidated;
                  setValidateTarget(null);
                  setShowCancelConfirm(false);
                }}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="flex h-11 flex-1 items-center justify-center rounded-xl px-4 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--color-accent-lecture)" }}
              >
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-[280px]">
        {!evalStarted && !isResults && (
          <EvalAnnounceScreen
            accent="var(--color-accent-lecture)"
            lessonTitle={data.title}
            exerciseCount={exerciseSteps.length}
            minutes={EVAL_MINUTES}
            onStart={() => { setEvalStarted(true); setEvalTimeLeft(EVAL_MINUTES * 60); }}
          />
        )}

        {evalStarted && (
          <>
            <div hidden={isResults || stepIdx !== 0}>
              <RevisionLetterGrid
                letterA={data.letterA}
                letterB={data.letterB}
                isUppercase={true}
                mixedCase
                onValidated={(score, max) => recordScore(0, score, max)}
                shouldValidate={validateTarget === 0 || validateTarget === -1}
              />
            </div>
            <div hidden={isResults || stepIdx !== 1}>
              <RevisionWordSpotter
                letterA={data.letterA}
                letterB={data.letterB}
                isUppercase={true}
                mixedCase
                wordCount={evalWordCount}
                onValidated={(score, max) => recordScore(1, score, max)}
                shouldValidate={validateTarget === 1 || validateTarget === -1}
              />
            </div>
            <div hidden={isResults || stepIdx !== 2}>
              <RevisionSoundStep
                phonemeA={data.phonemeA}
                phonemeB={data.phonemeB}
                words={soundAudioWords}
                mode="audio"
                onValidated={(score, max) => recordScore(2, score, max)}
                shouldValidate={validateTarget === 2 || validateTarget === -1}
              />
            </div>
            <div hidden={isResults || stepIdx !== 3}>
              <RevisionSoundStep
                phonemeA={data.phonemeA}
                phonemeB={data.phonemeB}
                words={soundImageWords}
                mode="image"
                onValidated={(score, max) => recordScore(3, score, max)}
                shouldValidate={validateTarget === 3 || validateTarget === -1}
              />
            </div>
            <div hidden={isResults || stepIdx !== 4}>
              <RevisionPronounce
                words={data.readWords}
                wordCount={EVAL_PRONOUNCE_COUNT}
                onValidated={(score, max) => recordScore(4, score, max)}
                shouldValidate={validateTarget === 4 || validateTarget === -1}
              />
            </div>
          </>
        )}

        {isResults && (
          <>
            <section className="space-y-4">
              <EvalResultsSummary
                accent="var(--color-accent-lecture)"
                points={totalScore}
                maxPoints={maxTotal}
                grade={linearSwissGrade(totalScore, maxTotal)}
                passed={linearSwissGrade(totalScore, maxTotal) >= getPassGrade()}
              />
              <EvalResultsHint />
              <EvalExerciseResultList>
                {exerciseSteps.map((key, i) => {
                  const s = scores[i] ?? 0;
                  const max = rowMaxScores[i] ?? 0;
                  return (
                    <EvalExerciseResultRow
                      key={key}
                      index={i}
                      correct={s}
                      total={max}
                      accent="var(--color-accent-lecture)"
                      isSelected={false}
                      onToggle={() => {}}
                    >
                      <p className="text-sm text-[var(--color-text-secondary)]">{RESULT_LABELS[key]}</p>
                    </EvalExerciseResultRow>
                  );
                })}
              </EvalExerciseResultList>
            </section>
            <EvalFinishButton onClick={goNext} accent="var(--color-accent-lecture)" />
          </>
        )}
      </div>

      <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="app-shell-bar flex items-center justify-between py-3">
            <button
              type="button"
              onClick={() => {
                if (evalStarted && !isResults) goPrevious();
                else onBack();
              }}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <IconLeft /> Retour
            </button>

            <div className="flex items-center gap-2">
              {evalStarted && showValidateBtn && (
                <button
                  type="button"
                  onClick={() => setValidateTarget(stepIdx)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90"
                  aria-label="Valider"
                >
                  <IconCheck />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={!isResults && !evalStarted}
              className={`flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] px-5 text-sm font-bold text-white transition-opacity ${
                isResults || evalStarted ? "bg-[var(--color-accent-lecture)] hover:opacity-90" : "bg-[var(--color-accent-lecture)] opacity-40 cursor-not-allowed"
              }`}
            >
              {isResults ? (<>Terminer <IconCheck /></>) : (<>Suivant <IconRight /></>)}
            </button>
          </div>
        </div>
        <div className="h-[72px]" />
      </div>
    </div>
  );
}
