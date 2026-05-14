"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { LetterData } from "@/lib/curriculum/lecture-data";
import { DiscoverSound } from "./DiscoverSound";
import { VowelRecall } from "./VowelRecall";
import { LetterGrid } from "./LetterGrid";
import { WordSpotter } from "./WordSpotter";
import { SoundPicker } from "./SoundPicker";
import { SyllableGrid } from "./SyllableGrid";
import { PronunciationChain } from "./PronunciationChain";
import {
  loadLectureProgress,
  saveLectureProgress,
  markSubmoduleCompleted,
} from "@/lib/progress/lecture-progress";

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
  ];
}

export function LectureLetterRunner({ data, moduleId }: Props) {
  const router = useRouter();
  const steps = getSteps(data);
  const [stepIdx, setStepIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === steps.length - 1;
  const step = steps[stepIdx]!;

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
          />
        );
      case "vowel-recall":
        return <VowelRecall key={k} />;
      case "grid-upper":
        return (
          <LetterGrid key={k} target={data.letter} grid={data.upperGrid} isUppercase={true} />
        );
      case "grid-lower":
        return (
          <LetterGrid key={k} target={data.letterLower} grid={data.lowerGrid} isUppercase={false} />
        );
      case "word-upper":
        if (data.type !== "vowel") return null;
        return (
          <WordSpotter key={k} target={data.letter} words={data.upperWords} isUppercase={true} />
        );
      case "word-upper-1":
        if (data.type !== "consonant") return null;
        return (
          <WordSpotter key={k} target={data.letter} words={data.upperWordsSet1} isUppercase={true} />
        );
      case "word-upper-2":
        if (data.type !== "consonant") return null;
        return (
          <WordSpotter key={k} target={data.letter} words={data.upperWordsSet2} isUppercase={true} />
        );
      case "word-lower":
        return (
          <WordSpotter key={k} target={data.letterLower} words={data.lowerWords} isUppercase={false} />
        );
      case "sound-image":
        return <SoundPicker key={k} phoneme={data.phoneme} items={data.soundItems} mode="image" />;
      case "sound-audio":
        return <SoundPicker key={k} phoneme={data.phoneme} items={data.soundItems} mode="audio" />;
      case "syllables":
        if (data.type !== "consonant") return null;
        return <SyllableGrid key={k} syllables={data.syllableGrid} />;
      case "pronounce":
        return <PronunciationChain key={k} phoneme={data.phoneme} chain={data.pronunciationChain} />;
      default:
        return null;
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture · {data.type === "vowel" ? "Voyelle" : "Consonne"}
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
          {data.letter} / {data.letterLower} — {data.phoneme}
        </h1>
      </header>

      {/* Step progress bar */}
      <div className="mb-6 flex gap-1">
        {steps.map((s, i) => (
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

      <p className="mb-6 text-xs text-[var(--color-text-secondary)]">
        Étape {stepIdx + 1} sur {steps.length} — {step.label}
      </p>

      <div className="min-h-[280px]">{renderStep()}</div>

      {/* Fixed nav bar */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
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

          <span className="text-xs font-medium text-[var(--color-text-secondary)]">
            {stepIdx + 1} / {steps.length}
          </span>

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
