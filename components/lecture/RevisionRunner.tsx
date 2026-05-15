"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { RevisionData } from "@/lib/curriculum/lecture-data";
import { RevisionLetterGrid, type RevisionLetterGridHandle } from "./RevisionLetterGrid";
import { RevisionWordSpotter, type RevisionWordSpotterHandle } from "./RevisionWordSpotter";
import { RevisionSoundStep, type RevisionSoundStepHandle } from "./RevisionSoundStep";
import { RevisionPronounce, type RevisionPronounceHandle } from "./RevisionPronounce";
import {
  loadLectureProgress,
  saveLectureProgress,
  markRevisionCompleted,
} from "@/lib/progress/lecture-progress";

interface Props {
  data: RevisionData;
}

type Step = { key: string; label: string };

const STEPS: Step[] = [
  { key: "grid-upper", label: "MAJ" },
  { key: "grid-lower", label: "min" },
  { key: "word-upper", label: "Mots MAJ" },
  { key: "word-lower", label: "Mots min" },
  { key: "sound", label: "Sons" },
  { key: "pronounce", label: "Prononcer" },
];

export function RevisionRunner({ data }: Props) {
  const router = useRouter();
  const [stepIdx, setStepIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const gridRef = useRef<RevisionLetterGridHandle>(null);
  const wordRef = useRef<RevisionWordSpotterHandle>(null);
  const soundRef = useRef<RevisionSoundStepHandle>(null);
  const pronounceRef = useRef<RevisionPronounceHandle>(null);

  const step = STEPS[stepIdx]!;
  const isFirst = stepIdx === 0;
  const isLast = stepIdx === STEPS.length - 1;

  const isGridStep = step.key === "grid-upper" || step.key === "grid-lower";
  const isWordStep = step.key === "word-upper" || step.key === "word-lower";
  const isSoundStep = step.key === "sound";
  const isPronounceStep = step.key === "pronounce";
  const showExerciseButtons = isGridStep || isWordStep || isSoundStep || isPronounceStep;

  function exerciseReset() {
    if (isGridStep) gridRef.current?.reset();
    else if (isWordStep) wordRef.current?.reset();
    else if (isSoundStep) soundRef.current?.reset();
    else if (isPronounceStep) pronounceRef.current?.reset();
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

  function goNext() {
    if (isLast) {
      const prog = loadLectureProgress();
      saveLectureProgress(markRevisionCompleted(prog, data.pair));
      router.push("/lecture");
    } else {
      setStepIdx((s) => s + 1);
      setResetKey((k) => k + 1);
    }
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
      case "sound":
        return (
          <RevisionSoundStep
            key={k}
            ref={soundRef}
            phonemeA={data.phonemeA}
            phonemeB={data.phonemeB}
            words={data.soundWords}
          />
        );
      case "pronounce":
        return <RevisionPronounce key={k} ref={pronounceRef} words={data.readWords} />;
      default:
        return null;
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-44">
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture · Révision
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
          {data.title}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {data.phonemeA} · {data.phonemeB}
        </p>
      </header>

      {/* Progress bar */}
      <div className="mb-6 flex gap-1">
        {STEPS.map((s, i) => (
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

      <div className="min-h-[280px]">{renderStep()}</div>

      {/* Fixed nav bar */}
      <div className="fixed bottom-[68px] left-0 right-0 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)] z-40">
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

          {showExerciseButtons && (
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
    </div>
  );
}
