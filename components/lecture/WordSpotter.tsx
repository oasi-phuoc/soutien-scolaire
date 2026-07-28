"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { randomWordsWithLetter } from "@/lib/curriculum/word-pool";
import { useLectureWordMaxLength } from "@/lib/hooks/useLectureWordMaxLength";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

export interface WordSpotterHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  target: string;
  isUppercase: boolean;
}

type CharState = "idle" | "selected" | "correct" | "wrong" | "missed";

export const DESKTOP_MQ = "(min-width: 768px)";
export const MOBILE_WORD_SPOTTER_COUNT = 5;
export const DESKTOP_WORD_SPOTTER_COUNT = 12;

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export function useIsDesktopMd(): boolean {
  return useMediaQuery(DESKTOP_MQ);
}

export function useWordSpotterItemCount(
  mobileCount = MOBILE_WORD_SPOTTER_COUNT,
  desktopCount = DESKTOP_WORD_SPOTTER_COUNT,
): number {
  const isDesktop = useIsDesktopMd();
  return isDesktop ? desktopCount : mobileCount;
}

function buildWords(
  target: string,
  isUppercase: boolean,
  maxLength: number,
  wordCount: number,
): string[] {
  const raw = randomWordsWithLetter(target.toLowerCase(), wordCount * 4, maxLength);
  const filtered = raw.filter((w) => w.length <= maxLength).slice(0, wordCount);
  return filtered.map((w) => (isUppercase ? w.toUpperCase() : w.toLowerCase()));
}

export const WordSpotter = forwardRef<WordSpotterHandle, Props>(
  function WordSpotter({ target, isUppercase }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const maxLength = useLectureWordMaxLength(9);
    const wordCount = useWordSpotterItemCount();
    const prevWordCount = useRef(wordCount);
    const [words, setWords] = useState(() => buildWords(target, isUppercase, maxLength, wordCount));
    // states keyed by "wi-li"
    const [states, setStates] = useState<Record<string, CharState>>({});
    const [validated, setValidated] = useState(false);

    useEffect(() => {
      if (prevWordCount.current === wordCount) return;
      prevWordCount.current = wordCount;
      setWords(buildWords(target, isUppercase, maxLength, wordCount));
      setStates({});
      setValidated(false);
    }, [wordCount, target, isUppercase, maxLength]);

    const reset = useCallback(() => {
      setWords(buildWords(target, isUppercase, maxLength, wordCount));
      setStates({});
      setValidated(false);
    }, [target, isUppercase, maxLength, wordCount]);

    const validate = useCallback(() => {
      if (validated) return;
      setValidated(true);
      setStates((prev) => {
        const next: Record<string, CharState> = {};
        words.forEach((word, wi) => {
          word.split("").forEach((char, li) => {
            const key = `${wi}-${li}`;
            const isTarget = char === target;
            const s = prev[key] ?? "idle";
            if (s === "selected") {
              next[key] = isTarget ? "correct" : "wrong";
            } else if (isTarget) {
              next[key] = "missed";
            }
            // non-target, unselected chars keep no state (idle)
          });
        });
        return next;
      });
    }, [validated, words, target]);

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
          Touchez la lettre{" "}
          <strong className="text-[var(--color-accent-lecture)]">{target}</strong>{" "}
          dans chaque mot
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "tapLetterInWords", { x: target })}
          </p>
        )}
        <ul className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
          {words.map((word, wi) => (
            <li
              key={wi}
              className="flex flex-wrap items-center justify-center gap-0.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-3 md:px-2 md:py-2"
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
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-base font-bold transition-colors md:h-6 md:w-6 md:text-xs ${
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
