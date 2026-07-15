"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { getLectureWordImagePath, playWord } from "@/lib/utils/audio";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

export interface RevisionSoundStepHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  phonemeA: string;
  phonemeB: string;
  words: { word: string; answer: "A" | "B" | "AB" }[];
  mode: "image" | "audio";
  onValidated?: (score: number, max: number) => void;
  shouldValidate?: boolean;
}

type CardSelection = { A: boolean; B: boolean };

function isCardCorrect(sel: CardSelection, answer: "A" | "B" | "AB"): boolean {
  const wantsA = answer === "A" || answer === "AB";
  const wantsB = answer === "B" || answer === "AB";
  return sel.A === wantsA && sel.B === wantsB;
}

function revisionCardClass(
  sel: CardSelection,
  answer: "A" | "B" | "AB",
  validated: boolean,
): string {
  const base =
    "flex flex-col items-center gap-1.5 rounded-[var(--radius-lg)] border p-1.5 transition-colors";

  if (!validated) {
    return `${base} border-[var(--color-border-default)]`;
  }

  if (isCardCorrect(sel, answer)) {
    return `${base} border-[var(--color-accent-lecture)]`;
  }

  const wantsA = answer === "A" || answer === "AB";
  const wantsB = answer === "B" || answer === "AB";
  const missedA = wantsA && !sel.A;
  const missedB = wantsB && !sel.B;
  const wrongA = !wantsA && sel.A;
  const wrongB = !wantsB && sel.B;

  if (missedA || missedB) {
    return `${base} border-amber-400 bg-amber-50`;
  }
  if (wrongA || wrongB) {
    return `${base} border-red-400 bg-red-50`;
  }
  return `${base} border-[var(--color-border-default)]`;
}

function revisionPhonemeButtonClass(
  isSelected: boolean,
  validated: boolean,
  isCorrect: boolean,
): string {
  const base =
    "rounded-full border px-3 py-1 text-xs font-semibold transition-colors disabled:opacity-70";
  if (!validated) {
    return isSelected
      ? `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]`
      : `${base} border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]`;
  }
  if (isSelected && isCorrect) {
    return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]`;
  }
  if (isSelected && !isCorrect) {
    return `${base} border-red-400 bg-red-50 text-red-700`;
  }
  if (!isSelected && isCorrect) {
    return `${base} border-amber-400 bg-amber-50 text-amber-700`;
  }
  return `${base} border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]`;
}

export const RevisionSoundStep = forwardRef<RevisionSoundStepHandle, Props>(
  function RevisionSoundStep({ phonemeA, phonemeB, words, mode, onValidated, shouldValidate }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const [selections, setSelections] = useState<CardSelection[]>(() =>
      words.map(() => ({ A: false, B: false }))
    );
    const [validated, setValidated] = useState(false);

    useEffect(() => {
      setSelections(words.map(() => ({ A: false, B: false })));
      setValidated(false);
    }, [words]);

    const reset = useCallback(() => {
      setSelections(words.map(() => ({ A: false, B: false })));
      setValidated(false);
    }, [words]);

    const validate = useCallback(() => {
      if (validated) return;
      setValidated(true);
      if (onValidated) {
        const score = words.reduce((sum, { answer }, i) => (
          sum + (isCardCorrect(selections[i]!, answer) ? 1 : 0)
        ), 0);
        onValidated(score, words.length);
      }
    }, [validated, selections, words, onValidated]);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    useEffect(() => {
      if (shouldValidate) validateRef.current();
    }, [shouldValidate]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function toggle(i: number, phoneme: "A" | "B") {
      if (validated) return;
      setSelections((prev) => {
        const next = [...prev] as CardSelection[];
        next[i] = { ...next[i]!, [phoneme]: !next[i]![phoneme] };
        return next;
      });
    }

    function playAudio(word: string) {
      playWord(word);
    }

    return (
      <section className="space-y-3 pb-8">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre les sons</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Touchez le ou les sons que vous entendez
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "tapSoundsYouHear")}
          </p>
        )}
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-4">
          {words.map(({ word, answer }, i) => {
            const sel = selections[i]!;
            const isCorrectA = answer === "A" || answer === "AB";
            const isCorrectB = answer === "B" || answer === "AB";

            return (
              <div
                key={i}
                className={revisionCardClass(sel, answer, validated)}
              >
                {mode === "image" ? (
                  <button
                    type="button"
                    onClick={() => playAudio(word)}
                    className="relative aspect-square w-full overflow-hidden rounded-lg border border-[var(--color-accent-lecture)] bg-white"
                    aria-label={`Écouter ${word}`}
                  >
                    {(() => {
                      const imgSrc = getLectureWordImagePath(word);
                      return imgSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={imgSrc}
                          alt={word}
                          className="h-full w-full object-contain p-1"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center px-1 text-center text-xs font-semibold text-[var(--color-text-primary)]">
                          {word}
                        </span>
                      );
                    })()}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => playAudio(word)}
                    className="flex aspect-square w-full items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]"
                    aria-label={`Écouter ${word}`}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent-lecture)]" aria-hidden>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  </button>
                )}

                <div className={`flex gap-2${mode === "image" ? " justify-center w-full" : ""}`}>
                  {(["A", "B"] as const).map((opt) => {
                    const isSelected = sel[opt];
                    const isCorrect = opt === "A" ? isCorrectA : isCorrectB;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggle(i, opt)}
                        disabled={validated}
                        aria-pressed={isSelected}
                        className={revisionPhonemeButtonClass(isSelected, validated, isCorrect)}
                      >
                        {opt === "A" ? phonemeA : phonemeB}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  },
);
