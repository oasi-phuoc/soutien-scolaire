"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { RevisionData } from "@/lib/curriculum/lecture-data";
import EvalProgressBar from "@/components/math/EvalProgressBar";
import { RevisionLetterGrid, type RevisionLetterGridHandle } from "./RevisionLetterGrid";
import { RevisionWordSpotter, type RevisionWordSpotterHandle } from "./RevisionWordSpotter";
import { RevisionSoundStep, type RevisionSoundStepHandle } from "./RevisionSoundStep";
import { RevisionPronounce, type RevisionPronounceHandle } from "./RevisionPronounce";
import { RevisionEvaluation } from "./RevisionEvaluation";
import {
  loadLectureProgress,
  saveLectureProgress,
  markRevisionCompleted,
} from "@/lib/progress/lecture-progress";
import {
  randomRevisionSoundWords,
  randomRevisionPronounceSteps,
  randomRevisionLongPronounceSteps,
} from "@/lib/curriculum/word-pool";

interface Props {
  data: RevisionData;
}

type Step = { key: string; label: string };
const DESKTOP_MQ = "(min-width: 768px)";

const TRAINING_STEPS: Step[] = [
  { key: "grid-upper", label: "MAJ" },
  { key: "grid-lower", label: "min" },
  { key: "word-upper", label: "Mots MAJ" },
  { key: "word-lower", label: "Mots min" },
  { key: "sound-audio", label: "Audio" },
  { key: "sound-image", label: "Images" },
  { key: "pronounce", label: "Prononcer" },
  { key: "pronounce-long", label: "Prononcer 3-4" },
];

const STEPS: Step[] = [...TRAINING_STEPS, { key: "eval", label: "Évaluation" }];

export function RevisionRunner({ data }: Props) {
  const router = useRouter();
  const [stepIdx, setStepIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [soundRefreshSeed, setSoundRefreshSeed] = useState(0);
  const [pronounceRefreshSeed, setPronounceRefreshSeed] = useState(0);
  const [soundItemCount, setSoundItemCount] = useState(() => {
    if (typeof window === "undefined") return 9;
    return window.matchMedia(DESKTOP_MQ).matches ? 12 : 9;
  });
  const [evalSubStep, setEvalSubStep] = useState<{
    idx: number;
    total: number;
    validated: boolean[];
    isResults: boolean;
  } | null>(null);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const evalNavigateRef = useRef<(index: number) => void>(() => {});

  const gridRef = useRef<RevisionLetterGridHandle>(null);
  const wordRef = useRef<RevisionWordSpotterHandle>(null);
  const soundRef = useRef<RevisionSoundStepHandle>(null);
  const pronounceRef = useRef<RevisionPronounceHandle>(null);

  const step = STEPS[stepIdx]!;
  const isFirst = stepIdx === 0;
  const isEvalStep = step.key === "eval";

  const isGridStep = step.key === "grid-upper" || step.key === "grid-lower";
  const isWordStep = step.key === "word-upper" || step.key === "word-lower";
  const isSoundStep = step.key === "sound-image" || step.key === "sound-audio";
  const isPronounceStep = step.key === "pronounce" || step.key === "pronounce-long";
  const showExerciseButtons = isGridStep || isWordStep || isSoundStep || isPronounceStep;

  const soundAudioWords = useMemo(() => {
    void soundRefreshSeed;
    return randomRevisionSoundWords(data.letterA, data.phonemeA, data.letterB, data.phonemeB, soundItemCount, false);
  }, [data.letterA, data.phonemeA, data.letterB, data.phonemeB, soundItemCount, soundRefreshSeed]);
  const soundImageWords = useMemo(() => {
    void soundRefreshSeed;
    return randomRevisionSoundWords(data.letterA, data.phonemeA, data.letterB, data.phonemeB, soundItemCount, true);
  }, [data.letterA, data.phonemeA, data.letterB, data.phonemeB, soundItemCount, soundRefreshSeed]);
  const pronounceSteps = useMemo(() => {
    void pronounceRefreshSeed;
    return randomRevisionPronounceSteps(data.letterA, data.letterB, 5);
  }, [data.letterA, data.letterB, pronounceRefreshSeed]);
  const pronounceLongSteps = useMemo(() => {
    void pronounceRefreshSeed;
    return randomRevisionLongPronounceSteps(data.letterA, data.letterB, 5);
  }, [data.letterA, data.letterB, pronounceRefreshSeed]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(DESKTOP_MQ);
    const update = () => setSoundItemCount(mq.matches ? 12 : 9);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  function exerciseReset() {
    if (isGridStep) gridRef.current?.reset();
    else if (isWordStep) wordRef.current?.reset();
    else if (isSoundStep) {
      setSoundRefreshSeed((s) => s + 1);
      setResetKey((k) => k + 1);
    } else if (isPronounceStep) {
      setPronounceRefreshSeed((s) => s + 1);
      setResetKey((k) => k + 1);
    }
  }

  function exerciseValidate() {
    if (isGridStep) gridRef.current?.validate();
    else if (isWordStep) wordRef.current?.validate();
    else if (isSoundStep) soundRef.current?.validate();
  }

  function goBack() {
    if (isFirst) {
      router.push("/lecture");
    } else {
      setStepIdx((s) => s - 1);
      setResetKey((k) => k + 1);
    }
  }

  function goExit() {
    router.push("/lecture");
  }

  function goNext() {
    if (isEvalStep) return;
    setStepIdx((s) => s + 1);
    setResetKey((k) => k + 1);
  }

  function handleEvalDone(_grade: number, passed: boolean, _total: number) {
    if (passed) {
      const prog = loadLectureProgress();
      saveLectureProgress(markRevisionCompleted(prog, data.pair));
    }
    router.push("/lecture");
  }

  function renderStep() {
    const k = `${step.key}-${resetKey}`;
    switch (step.key) {
      case "grid-upper":
        return (
          <RevisionLetterGrid
            key={k}
            ref={gridRef}
            letterA={data.letterA}
            letterB={data.letterB}
            isUppercase={true}
            sessionKey={k}
          />
        );
      case "grid-lower":
        return (
          <RevisionLetterGrid
            key={k}
            ref={gridRef}
            letterA={data.letterA}
            letterB={data.letterB}
            isUppercase={false}
            sessionKey={k}
          />
        );
      case "word-upper":
        return (
          <RevisionWordSpotter
            key={k}
            ref={wordRef}
            letterA={data.letterA}
            letterB={data.letterB}
            isUppercase={true}
          />
        );
      case "word-lower":
        return (
          <RevisionWordSpotter
            key={k}
            ref={wordRef}
            letterA={data.letterA}
            letterB={data.letterB}
            isUppercase={false}
          />
        );
      case "sound-audio":
        return (
          <RevisionSoundStep
            key={k}
            ref={soundRef}
            phonemeA={data.phonemeA}
            phonemeB={data.phonemeB}
            words={soundAudioWords}
            mode="audio"
          />
        );
      case "sound-image":
        return (
          <RevisionSoundStep
            key={k}
            ref={soundRef}
            phonemeA={data.phonemeA}
            phonemeB={data.phonemeB}
            words={soundImageWords}
            mode="image"
          />
        );
      case "pronounce":
        return (
          <RevisionPronounce
            key={`${k}-${pronounceRefreshSeed}`}
            ref={pronounceRef}
            steps={pronounceSteps}
          />
        );
      case "pronounce-long":
        return (
          <RevisionPronounce
            key={`${k}-${pronounceRefreshSeed}`}
            ref={pronounceRef}
            steps={pronounceLongSteps}
          />
        );
      case "eval":
        return (
          <RevisionEvaluation
            key={k}
            data={data}
            onBack={goBack}
            onDone={handleEvalDone}
            onEvalStepChange={(idx, total, validated, isResults) =>
              setEvalSubStep({ idx, total, validated, isResults })
            }
            onEvalTimeChange={(t) => setEvalTimeLeft(t)}
            onEvalNavigateReady={(navigate) => { evalNavigateRef.current = navigate; }}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="app-shell flex-1 py-8 pb-56">
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture · Révision
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goExit}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-lecture)] text-white transition-opacity hover:opacity-80"
            aria-label="Quitter la leçon"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {data.title}
          </h1>
        </div>
      </header>

      {!isEvalStep && (
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-lecture)]">Entraînement</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{stepIdx + 1} / {TRAINING_STEPS.length}</p>
          </div>
          <div className="flex gap-1">
            {TRAINING_STEPS.map((s, i) => (
              <div
                key={s.key}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < stepIdx
                    ? "bg-[var(--color-accent-lecture)]"
                    : i === stepIdx
                      ? "bg-[var(--color-accent-lecture)] opacity-60"
                      : "bg-[var(--color-border-default)]"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {isEvalStep && !evalSubStep?.isResults && (
        <EvalProgressBar
          current={evalSubStep?.idx ?? 0}
          total={evalSubStep?.total ?? 5}
          timeLeft={evalTimeLeft}
          validated={evalSubStep?.validated}
          onNavigate={(index) => evalNavigateRef.current(index)}
        />
      )}

      <div className="min-h-[280px]">{renderStep()}</div>

      {!isEvalStep && (
        <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
          <div className="border-t border-[var(--color-border-default)]">
            <div className="app-shell-bar flex items-center justify-between py-3">
              <button
                type="button"
                data-nav-action="back"
                onClick={goBack}
                className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Retour
              </button>

              {showExerciseButtons && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    data-nav-action="refresh"
                    aria-label="Recommencer"
                    onClick={exerciseReset}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M1 4v6h6" />
                      <path d="M3.51 15a9 9 0 1 0 .49-4" />
                    </svg>
                  </button>
                  {!isPronounceStep && (
                    <button
                      type="button"
                      data-nav-action="validate"
                      aria-label="Valider"
                      onClick={exerciseValidate}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </button>
                  )}
                </div>
              )}

              <button
                type="button"
                data-nav-action="next"
                data-nav-label={stepIdx === TRAINING_STEPS.length - 1 ? "Évaluation" : undefined}
                onClick={goNext}
                className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-lecture)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
              >
                {stepIdx === TRAINING_STEPS.length - 1 ? (
                  <>
                    Évaluation
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </>
                ) : (
                  <>
                    Suivant
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="h-[72px]" />
        </div>
      )}
    </div>
  );
}

