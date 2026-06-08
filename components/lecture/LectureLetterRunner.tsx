"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EvalProgressBar from "@/components/math/EvalProgressBar";
import type { LetterData } from "@/lib/curriculum/lecture-data";
import { DiscoverSound } from "./DiscoverSound";
import { VowelRecall } from "./VowelRecall";
import { LetterGrid, type LetterGridHandle } from "./LetterGrid";
import { WordSpotter, type WordSpotterHandle } from "./WordSpotter";
import { SoundPicker, type SoundPickerHandle } from "./SoundPicker";
import { SyllableGrid } from "./SyllableGrid";
import { PronunciationChain, type PronunciationChainHandle } from "./PronunciationChain";
import {
  loadLectureProgress,
  saveLectureProgress,
  markSubmoduleCompleted,
  saveEvaluationResult,
} from "@/lib/progress/lecture-progress";
import { LectureEvaluation } from "./LectureEvaluation";

interface Props {
  data: LetterData;
  moduleId: string;
}

type Step = { key: string; label: string };

function getSteps(data: LetterData): Step[] {
  if (data.type === "vowel") {
    return [
      { key: "discover", label: "Découverte" },
      { key: "grid-upper", label: "Majuscules" },
      { key: "grid-lower", label: "Minuscules" },
      { key: "word-upper", label: "Mots (MAJ)" },
      { key: "word-lower", label: "Mots (min)" },
      { key: "sound-image", label: "Images" },
      { key: "sound-audio", label: "Audio" },
      { key: "pronounce", label: "Prononcer" },
      { key: "eval", label: "Évaluation" },
    ];
  }
  return [
    { key: "discover", label: "Découverte" },
    { key: "vowel-recall", label: "Voyelles" },
    { key: "grid-upper", label: "Majuscules" },
    { key: "grid-lower", label: "Minuscules" },
    { key: "word-upper-1", label: "Mots 1" },
    { key: "word-upper-2", label: "Mots 2" },
    { key: "word-lower", label: "Mots (min)" },
    { key: "sound-image", label: "Images" },
    { key: "sound-audio", label: "Audio" },
    { key: "syllables", label: "Syllabes" },
    { key: "pronounce", label: "Prononcer" },
    { key: "eval", label: "Évaluation" },
  ];
}

export function LectureLetterRunner({ data, moduleId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const steps = getSteps(data);
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    if (searchParams.get("eval") === "1") {
      setStepIdx(steps.length - 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [resetKey, setResetKey] = useState(0);
  const [evalSubStep, setEvalSubStep] = useState<{ idx: number; total: number } | null>(null);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const gridRef = useRef<LetterGridHandle>(null);
  const wordRef = useRef<WordSpotterHandle>(null);
  const soundImageRef = useRef<SoundPickerHandle>(null);
  const pronounceRef = useRef<PronunciationChainHandle>(null);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === steps.length - 1;
  const step = steps[stepIdx]!;
  const isGridStep = step.key === "grid-upper" || step.key === "grid-lower";
  const isWordStep = ["word-upper", "word-upper-1", "word-upper-2", "word-lower"].includes(step.key);
  const isSoundImageStep = step.key === "sound-image";
  const isSoundAudioStep = step.key === "sound-audio";
  const isPronounceStep = step.key === "pronounce";
  const isEvalStep = step.key === "eval";
  const showExerciseButtons = isGridStep || isWordStep || isSoundImageStep || isSoundAudioStep;

  function exerciseReset() {
    if (isGridStep) gridRef.current?.reset();
    else if (isWordStep) wordRef.current?.reset();
    else if (isSoundImageStep || isSoundAudioStep) soundImageRef.current?.reset();
    else if (isPronounceStep) pronounceRef.current?.reset();
  }
  function exerciseValidate() {
    if (isGridStep) gridRef.current?.validate();
    else if (isWordStep) wordRef.current?.validate();
    else if (isSoundImageStep || isSoundAudioStep) soundImageRef.current?.validate();
  }

  function goBack() {
    if (isFirst) {
      router.push("/lecture");
    } else {
      setStepIdx((s) => s - 1);
      setResetKey((k) => k + 1);
    }
  }

  function goNext() {
    if (isLast) {
      const prog = loadLectureProgress();
      const next = markSubmoduleCompleted(prog, moduleId, data.letterLower);
      saveLectureProgress(next);
      router.push("/lecture");
    } else {
      setStepIdx((s) => s + 1);
      setResetKey((k) => k + 1);
    }
  }

  function handleEvalDone(grade: number, passed: boolean, total: number) {
    try {
      const prog = loadLectureProgress();
      const withEval = saveEvaluationResult(prog, moduleId, data.letterLower, { grade, passed, total });
      const final = passed
        ? markSubmoduleCompleted(withEval, moduleId, data.letterLower)
        : withEval;
      saveLectureProgress(final);
    } catch {
      // ignore storage errors
    }
    window.location.href = "/lecture";
  }

  function renderStep() {
    const k = `${step.key}-${resetKey}`;
    switch (step.key) {
      case "discover":
        return (
          <DiscoverSound
            key={k}
            phoneme={data.phoneme}
            letter={data.letter}
            letterLower={data.letterLower}
            exampleWord={data.exampleWord}
            exampleImagePath={data.exampleImagePath}
            exampleAudioPath={data.exampleAudioPath}
          />
        );
      case "vowel-recall":
        return <VowelRecall key={k} />;
      case "grid-upper":
        return (
          <LetterGrid key={k} ref={gridRef} target={data.letter} isUppercase={true} />
        );
      case "grid-lower":
        return (
          <LetterGrid key={k} ref={gridRef} target={data.letterLower} isUppercase={false} />
        );
      case "word-upper":
        if (data.type !== "vowel") return null;
        return <WordSpotter key={k} ref={wordRef} target={data.letter} isUppercase={true} />;
      case "word-upper-1":
        if (data.type !== "consonant") return null;
        return <WordSpotter key={k} ref={wordRef} target={data.letter} isUppercase={true} />;
      case "word-upper-2":
        if (data.type !== "consonant") return null;
        return <WordSpotter key={k} ref={wordRef} target={data.letter} isUppercase={true} />;
      case "word-lower":
        return <WordSpotter key={k} ref={wordRef} target={data.letterLower} isUppercase={false} />;
      case "sound-image":
        return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="image" />;
      case "sound-audio":
        return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="audio" />;
      case "syllables":
        if (data.type !== "consonant") return null;
        return <SyllableGrid key={k} syllables={data.syllableGrid} />;
      case "pronounce":
        return <PronunciationChain key={k} ref={pronounceRef} phoneme={data.phoneme} chain={data.pronunciationChain} />;
      case "eval":
        return (
          <LectureEvaluation
            key={k}
            data={data}
            onBack={goBack}
            onDone={handleEvalDone}
            onEvalStepChange={(idx, total) => setEvalSubStep({ idx, total })}
            onEvalTimeChange={(t) => setEvalTimeLeft(t)}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-56">
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture · {isEvalStep ? "Évaluation" : data.type === "vowel" ? "Voyelle" : "Consonne"}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goBack}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-lecture)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour à la lecture"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {data.letter} - {data.letterLower} — {data.phoneme}
          </h1>
        </div>
      </header>

      {/* Training progress bar — hidden during eval */}
      {!isEvalStep && (
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-lecture)]">Entraînement</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{stepIdx + 1} / {steps.length - 1}</p>
          </div>
          <div className="flex gap-1">
            {steps.slice(0, -1).map((s, i) => (
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

      {/* Eval progress bar with timer — shown only during eval step */}
      {isEvalStep && (
        <EvalProgressBar
          current={evalSubStep?.idx ?? 0}
          total={evalSubStep?.total ?? 5}
          timeLeft={evalTimeLeft}
        />
      )}

      <div className="min-h-[280px]">{renderStep()}</div>

      {/* Fixed nav bar — hidden on eval step (LectureEvaluation has its own) */}
      {!isEvalStep && <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-bg-primary)] z-40">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={goBack}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Retour
            </button>

            {(showExerciseButtons || isPronounceStep) && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
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
              onClick={goNext}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-lecture)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
            >
              {isLast ? (
                <>
                  Terminer
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
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
        {/* Spacer covers main nav area so scrolled content can't show through */}
        <div className="h-[72px]" />
      </div>}
    </div>
  );
}
