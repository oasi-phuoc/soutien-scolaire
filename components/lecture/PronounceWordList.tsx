"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import type { PronStep } from "@/lib/curriculum/lecture-data";
import { playWord } from "@/lib/utils/audio";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";
import { LECTURE_CORRECTION_BORDER } from "./lecture-correction";
import { matchesSpokenWord } from "@/lib/utils/french-speech-match";
import {
  abortLectureSpeech,
  getLectureSpeechRecognition,
  patchLectureRecCell,
  startLecturePronounceListen,
} from "@/lib/utils/lecture-speech-recognition";

export interface PronounceWordListHandle {
  reset: () => void;
  validate: () => void;
}

type RecState = "idle" | "listening" | "correct" | "wrong";

interface Props {
  steps: PronStep[];
  onValidated?: (score: number, max: number, states?: RecState[]) => void;
  shouldValidate?: boolean;
  title?: string;
  consigne?: string;
  /** Syllabes sur une ligne, flèche + mot entier en dessous (révision étape 8). */
  twoLineText?: boolean;
}

function rowClass(state: RecState, twoLineText = false): string {
  const base = twoLineText
    ? "grid grid-cols-[auto_1fr_auto] items-center gap-x-3 rounded-[var(--radius-md)] border px-3 py-2 transition-colors"
    : "grid grid-cols-[auto_minmax(5.5rem,auto)_1.5rem_minmax(5.5rem,auto)_auto] items-center gap-x-3 rounded-[var(--radius-md)] border px-3 py-2 transition-colors";
  if (state === "correct") {
    return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10`;
  }
  if (state === "wrong") return `${base} ${LECTURE_CORRECTION_BORDER}`;
  return `${base} border-[var(--color-border-default)]`;
}

export const PronounceWordList = forwardRef<PronounceWordListHandle, Props>(
  function PronounceWordList(
    { steps, onValidated, shouldValidate, title, consigne, twoLineText = false },
    ref,
  ) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const [recStates, setRecStates] = useState<RecState[]>(() => steps.map(() => "idle"));
    const [validated, setValidated] = useState(false);
    const recRef = useRef<unknown>(null);

    useEffect(() => {
      setRecStates(steps.map(() => "idle"));
      setValidated(false);
    }, [steps]);

    const reset = useCallback(() => {
      abortLectureSpeech(recRef.current);
      setRecStates(steps.map(() => "idle"));
      setValidated(false);
    }, [steps]);

    const validate = useCallback(() => {
      if (validated) return;
      abortLectureSpeech(recRef.current);
      setValidated(true);
      const score = recStates.filter((s) => s === "correct").length;
      onValidated?.(score, steps.length, recStates);
    }, [validated, recStates, steps.length, onValidated]);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    useEffect(() => {
      if (shouldValidate) validateRef.current();
    }, [shouldValidate]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function startListening(index: number) {
      if (validated || recStates[index] === "listening" || recStates[index] === "correct") return;
      startLecturePronounceListen({
        recRef,
        match: (transcript) => matchesSpokenWord(transcript, steps[index]!.word),
        onListening: () => {
          setRecStates((prev) => patchLectureRecCell(prev, index, "listening"));
        },
        onOutcome: (matched) => {
          setRecStates((prev) => patchLectureRecCell(prev, index, matched ? "correct" : "wrong"));
        },
        onCancel: () => {
          setRecStates((prev) => prev.map((s, i) => (i === index && s === "listening" ? "idle" : s)));
        },
      });
    }

    const srAvailable = !!getLectureSpeechRecognition();

    return (
      <section className="space-y-3 pb-8">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          {title ?? "Prononcer les mots"}
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {consigne ?? "Prononcez chaque mot à voix haute."}
        </p>
        {showPivot && (
          <p
            className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]"
            dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"}
            lang={lang}
          >
            {lectureUi(lang, "pronounceWords")}
          </p>
        )}
        <div className="space-y-2">
          {steps.map((step, i) => {
            const state = recStates[i]!;
            return (
              <div key={`${step.word}-${i}`} className={rowClass(state, twoLineText)}>
                {srAvailable ? (
                  <button
                    type="button"
                    onClick={() => startListening(i)}
                    disabled={validated || state === "listening" || state === "correct"}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-transform active:scale-95 disabled:opacity-40 disabled:active:scale-100 ${
                      state === "listening"
                        ? "animate-pulse bg-red-500"
                        : state === "wrong"
                          ? "bg-amber-500"
                          : "bg-[var(--color-accent-lecture)]"
                    }`}
                    aria-label={`Prononcer ${step.word}`}
                  >
                    {state === "correct" ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : state === "wrong" ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <rect x="9" y="2" width="6" height="12" rx="3" />
                        <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                  </button>
                ) : (
                  <span className="h-11 w-11 shrink-0" aria-hidden />
                )}
                {twoLineText ? (
                  <div className="flex min-w-0 flex-col gap-0.5 py-0.5">
                    <span className="text-left text-xl font-normal leading-tight text-[var(--color-text-primary)]">
                      {step.syllable}
                    </span>
                    <span className="flex items-center gap-2 text-left leading-tight">
                      <span className="text-base text-[var(--color-text-secondary)]">→</span>
                      <span className="text-xl font-bold text-[var(--color-text-primary)]">
                        {step.word}
                      </span>
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="text-left text-xl font-normal leading-none text-[var(--color-text-primary)]">
                      {step.syllable}
                    </span>
                    <span className="text-center text-base leading-none text-[var(--color-text-secondary)]">→</span>
                    <span className="text-left text-xl font-bold leading-none text-[var(--color-text-primary)]">
                      {step.word}
                    </span>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => playWord(step.word)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-accent-lecture)] shadow-sm active:scale-95"
                  aria-label={`Écouter ${step.word}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
        {!srAvailable && (
          <p className="text-center text-sm text-[var(--color-text-secondary)]">
            La reconnaissance vocale n&apos;est pas disponible sur ce navigateur.
          </p>
        )}
      </section>
    );
  },
);
