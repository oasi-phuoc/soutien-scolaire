"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { randomWordsWithLetter } from "@/lib/curriculum/word-pool";
import { useLectureWordMaxLength } from "@/lib/hooks/useLectureWordMaxLength";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

export interface RevisionWordSpotterHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  letterA: string;
  letterB: string;
  isUppercase: boolean;
  /** Éval : majuscules et minuscules mélangées (50/50 aléatoire). */
  mixedCase?: boolean;
  wordCount?: number;
  onValidated?: (score: number, max: number) => void;
  shouldValidate?: boolean;
}

type CharState = "idle" | "selected" | "correct" | "wrong" | "missed";

const WORD_COUNT = 5;

function buildWords(
  letterA: string,
  letterB: string,
  isUppercase: boolean,
  maxLength: number,
  mixedCase = false,
  wordCount = WORD_COUNT,
): string[] {
  const a = letterA.toLowerCase();
  const b = letterB.toLowerCase();
  const rawA = randomWordsWithLetter(a, 15, maxLength);
  const rawB = randomWordsWithLetter(b, 15, maxLength);
  const merged = [...new Set([...rawA, ...rawB])].slice(0, wordCount);
  return merged.map((w) => {
    if (mixedCase) return Math.random() < 0.5 ? w.toUpperCase() : w.toLowerCase();
    return isUppercase ? w.toUpperCase() : w.toLowerCase();
  });
}

function targetSet(letterA: string, letterB: string, isUppercase: boolean, mixedCase: boolean): Set<string> {
  if (mixedCase) {
    return new Set([letterA, letterA.toLowerCase(), letterB, letterB.toLowerCase()]);
  }
  const a = isUppercase ? letterA : letterA.toLowerCase();
  const b = isUppercase ? letterB : letterB.toLowerCase();
  return new Set([a, b]);
}

export const RevisionWordSpotter = forwardRef<RevisionWordSpotterHandle, Props>(
  function RevisionWordSpotter(
    { letterA, letterB, isUppercase, mixedCase = false, wordCount = WORD_COUNT, onValidated, shouldValidate },
    ref,
  ) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const maxLength = useLectureWordMaxLength(9);
    const a = mixedCase ? `${letterA}/${letterA.toLowerCase()}` : isUppercase ? letterA : letterA.toLowerCase();
    const b = mixedCase ? `${letterB}/${letterB.toLowerCase()}` : isUppercase ? letterB : letterB.toLowerCase();

    const [words, setWords] = useState(() => buildWords(letterA, letterB, isUppercase, maxLength, mixedCase, wordCount));
    const [states, setStates] = useState<Record<string, CharState>>({});
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setWords(buildWords(letterA, letterB, isUppercase, maxLength, mixedCase, wordCount));
      setStates({});
      setValidated(false);
    }, [letterA, letterB, isUppercase, maxLength, mixedCase, wordCount]);

    const validate = useCallback(() => {
      if (validated) return;
      const targets = targetSet(letterA, letterB, isUppercase, mixedCase);
      const newStates: Record<string, CharState> = {};
      let score = 0;
      words.forEach((word, wi) => {
        let lineOk = true;
        word.split("").forEach((char, li) => {
          const key = `${wi}-${li}`;
          const isTarget = targets.has(char);
          const s = states[key] ?? "idle";
          if (s === "selected") {
            newStates[key] = isTarget ? "correct" : "wrong";
            if (!isTarget) lineOk = false;
          } else if (isTarget) {
            newStates[key] = "missed";
            lineOk = false;
          }
        });
        if (lineOk) score++;
      });
      setValidated(true);
      setStates(newStates);
      onValidated?.(score, words.length);
    }, [validated, words, letterA, letterB, isUppercase, mixedCase, states, onValidated]);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    useEffect(() => {
      if (shouldValidate) validateRef.current();
    }, [shouldValidate]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function tap(wi: number, li: number) {
      if (validated) return;
      const key = `${wi}-${li}`;
      setStates((prev) => {
        const next = { ...prev };
        next[key] = prev[key] === "selected" ? "idle" : "selected";
        return next;
      });
    }

    return (
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Repérer dans les mots</h2>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "spotInWords")}
          </p>
        )}
        <p className="text-sm text-[var(--color-text-secondary)]">
          Touchez les lettres{" "}
          <strong className="text-[var(--color-accent-lecture)]">{a}</strong>
          {" "}et{" "}
          <strong className="text-[var(--color-accent-lecture)]">{b}</strong>
          {" "}dans chaque mot
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "tapLettersAandBInWords", { a, b })}
          </p>
        )}
        <ul className="space-y-2">
          {words.map((word, wi) => (
            <li
              key={wi}
              className="flex flex-wrap items-center justify-center gap-0.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-3 md:px-4"
            >
              {word.split("").map((char, li) => {
                const key = `${wi}-${li}`;
                const s = states[key] ?? "idle";
                return (
                  <button
                    key={li}
                    type="button"
                    disabled={validated}
                    onClick={() => tap(wi, li)}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-base font-bold transition-colors md:h-7 md:w-7 md:text-sm ${
                      s === "correct"
                        ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                        : s === "wrong" || s === "missed"
                          ? "border-amber-400 bg-amber-100 text-amber-600"
                          : s === "selected"
                            ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                            : "border-transparent text-[var(--color-text-primary)]"
                    }`}
                  >
                    {char}
                  </button>
                );
              })}
            </li>
          ))}
        </ul>
      </section>
    );
  },
);
