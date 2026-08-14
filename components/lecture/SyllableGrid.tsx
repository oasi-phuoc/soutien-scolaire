"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { playSyllable } from "@/lib/utils/audio";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";
import { useWordSpotterItemCount } from "./WordSpotter";
import { complexTargets, makeComplexSyllables } from "@/lib/utils/complex-grapheme";
import { matchesSyllable } from "@/lib/utils/french-speech-match";
import {
  abortLectureSpeech,
  patchLectureRecCell,
  startLecturePronounceListen,
} from "@/lib/utils/lecture-speech-recognition";

export interface SyllableGridHandle {
  reset: () => void;
}

interface Props {
  baseLetter?: string;
  /** Label du graphème (sons complexes L7) — remplace baseLetter. */
  graphemeLabel?: string;
  mode?: "cv" | "vc" | "mixed" | "graph-vowel";
  /** Liste personnalisée (édition contenu) — sinon génération auto. */
  items?: string[];
  /** Nombre fixe de syllabes (évaluation) — sinon 6 mobile / 12 bureau. */
  fixedSyllableCount?: number;
  shouldValidate?: boolean;
  onEvalValidated?: (syllables: string[], states: RecState[], heard: string[], correctCount: number) => void;
}

type RecState = "idle" | "listening" | "correct" | "wrong";

const VOWELS = ["a", "e", "i", "o", "u", "y"];
const MOBILE_SYLLABLE_COUNT = 6;
const DESKTOP_SYLLABLE_COUNT = 12;

const ROW_CLASS =
  "grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-[var(--radius-md)] border-2 px-3 py-2 transition-colors md:gap-2 md:px-2 md:py-1.5";
const MIC_CLASS =
  "flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-transform active:scale-95 disabled:opacity-40 disabled:active:scale-100 md:h-9 md:w-9";
const SYLLABLE_CLASS =
  "min-h-12 px-4 text-left text-xl font-bold leading-[3rem] text-[var(--color-text-primary)] md:min-h-8 md:px-2 md:text-base md:leading-normal";
const PLAY_CLASS =
  "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-accent-lecture)] shadow-sm active:scale-95 md:h-8 md:w-8";

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j]!, next[i]!];
  }
  return next;
}

function applyBalancedCase(items: string[]): string[] {
  const upperFlags = shuffle([true, true, true, false, false, false]);
  return items.map((item, index) => (upperFlags[index] ? item.toUpperCase() : item.toLowerCase()));
}

function makeSyllables(baseLetter: string, mode: NonNullable<Props["mode"]>, count: number): string[] {
  const letter = baseLetter.toLowerCase();
  if (mode === "cv") {
    const base = shuffle(VOWELS).map((vowel) => `${letter}${vowel}`);
    if (count <= MOBILE_SYLLABLE_COUNT) return applyBalancedCase(base);
    return [...base.map((s) => s.toUpperCase()), ...base.map((s) => s.toLowerCase())];
  }
  if (mode === "vc") {
    const base = shuffle(VOWELS).map((vowel) => `${vowel}${letter}`);
    if (count <= MOBILE_SYLLABLE_COUNT) return applyBalancedCase(base);
    return [...base.map((s) => s.toUpperCase()), ...base.map((s) => s.toLowerCase())];
  }

  const patterns = [
    (a: string, b: string) => `${a}${letter}${b}`,
    (a: string, _b: string) => `${letter}${a}${letter}`,
    (a: string, b: string) => `${letter}${a}${letter}${b}`,
    (a: string, b: string) => `${a}${letter}${b}${letter}`,
  ];
  const vowels = shuffle(VOWELS);
  const syllables = Array.from({ length: 6 }, (_, index) => {
    const first = vowels[index % vowels.length]!;
    const second = vowels[(index + 2) % vowels.length]!;
    return patterns[index % patterns.length]!(first, second);
  });
  return applyBalancedCase(syllables);
}

function expandCustomItems(custom: string[], count: number): string[] {
  if (custom.length >= count) return custom.slice(0, count);
  if (count === DESKTOP_SYLLABLE_COUNT && custom.length === MOBILE_SYLLABLE_COUNT) {
    return [...custom.map((s) => s.toUpperCase()), ...custom.map((s) => s.toLowerCase())];
  }
  return custom;
}

function makeComplexSyllableList(
  graphemeLabel: string,
  mode: NonNullable<Props["mode"]>,
  count: number,
): string[] {
  const targets = complexTargets(graphemeLabel);
  const base = makeComplexSyllables(targets, mode);
  if (count <= MOBILE_SYLLABLE_COUNT) return applyBalancedCase(base);
  return [...base.map((s) => s.toUpperCase()), ...base.map((s) => s.toLowerCase())];
}

export const SyllableGrid = forwardRef<SyllableGridHandle, Props>(
  function SyllableGrid({ baseLetter = "", graphemeLabel, mode = "cv", items, fixedSyllableCount, shouldValidate, onEvalValidated }, ref) {
  const lang = usePivotLang();
  const { showPivot } = useTranslation();
  const recRef = useRef<unknown>(null);
  const responsiveCount = useWordSpotterItemCount(MOBILE_SYLLABLE_COUNT, DESKTOP_SYLLABLE_COUNT);
  const syllableCount = fixedSyllableCount ?? responsiveCount;
  const prevSyllableCount = useRef(syllableCount);

  function resolveSyllables(count: number) {
    const custom = (items ?? []).map((s) => s.trim()).filter(Boolean);
    if (custom.length > 0) return expandCustomItems(custom, count);
    if (graphemeLabel) return makeComplexSyllableList(graphemeLabel, mode, count);
    return makeSyllables(baseLetter, mode, count);
  }

  const [syllables, setSyllables] = useState<string[]>(() => resolveSyllables(syllableCount));
  const [states, setStates] = useState<RecState[]>(() =>
    Array(resolveSyllables(syllableCount).length).fill("idle"),
  );
  const [heard, setHeard] = useState<string[]>(() =>
    Array(resolveSyllables(syllableCount).length).fill(""),
  );

  useEffect(() => {
    if (prevSyllableCount.current === syllableCount) return;
    prevSyllableCount.current = syllableCount;
    const next = resolveSyllables(syllableCount);
    setSyllables(next);
    setStates(Array(next.length).fill("idle"));
    setHeard(Array(next.length).fill(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [syllableCount, baseLetter, graphemeLabel, mode, items]);

  // Refresh: regenerate a fresh sequence of syllables and clear the state.
  function reset() {
    abortLectureSpeech(recRef.current);
    recRef.current = null;
    const next = resolveSyllables(syllableCount);
    setSyllables(next);
    setStates(Array(next.length).fill("idle"));
    setHeard(Array(next.length).fill(""));
  }

  useImperativeHandle(ref, () => ({ reset }));

  const validateEval = useCallback(() => {
    abortLectureSpeech(recRef.current);
    const correctCount = Math.min(3, states.filter((state) => state === "correct").length);
    onEvalValidated?.(syllables, states, heard, correctCount);
  }, [syllables, states, heard, onEvalValidated]);

  const validateEvalRef = useRef(validateEval);
  validateEvalRef.current = validateEval;
  useEffect(() => {
    if (shouldValidate) validateEvalRef.current();
  }, [shouldValidate]);

  function startListening(index: number) {
    // Une fois juste : verrouillé (comme l'étape Prononcer) — pas de refaire.
    if (typeof window === "undefined" || states[index] === "listening" || states[index] === "correct") return;
    startLecturePronounceListen({
      recRef,
      match: (transcript) => matchesSyllable(transcript, syllables[index]!),
      onListening: () => {
        setStates((prev) => patchLectureRecCell(prev, index, "listening"));
        setHeard((prev) => prev.map((value, i) => (i === index ? "" : value)));
      },
      onOutcome: (matched, best) => {
        setHeard((prev) => prev.map((value, i) => (i === index ? best : value)));
        setStates((prev) => patchLectureRecCell(prev, index, matched ? "correct" : "wrong"));
      },
      onCancel: () => {
        setStates((prev) => prev.map((state, i) => (i === index && state === "listening" ? "idle" : state)));
      },
    });
  }

  const isGraphVowel = mode === "graph-vowel";
  const heading = graphemeLabel && isGraphVowel
    ? "Son complexe + voyelle"
    : "Lire les syllabes";
  const consigne = graphemeLabel && isGraphVowel
    ? `Prononcez chaque syllabe à voix haute. Exemples : ${
        graphemeLabel.toLowerCase().includes("ph") ? "phi, phu, phe" : "cha, chu, cho"
      }.`
    : "Écoutez et répétez les syllabes.";

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{heading}</h2>
      {showPivot && !isGraphVowel && (
        <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
          {lectureUi(lang, "readSyllables")}
        </p>
      )}
      <p className="text-sm text-[var(--color-text-secondary)]">
        {consigne}
      </p>
      {showPivot && (
        <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
          {lectureUi(lang, "tapSyllableAloud")}
        </p>
      )}
      <div className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
        {syllables.map((syl, i) => {
          const state = states[i]!;
          return (
            <div
              key={`${syl}-${i}`}
              className={`${ROW_CLASS} ${
                state === "correct"
                  ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
                  : state === "wrong"
                    ? "border-amber-400 bg-[var(--color-bg-primary)]"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
              }`}
            >
              <span className="w-5 text-sm font-bold text-[var(--color-accent-lecture)] md:w-4 md:text-xs">{i + 1}.</span>
              <button
                type="button"
                onClick={() => startListening(i)}
                disabled={state === "listening" || state === "correct"}
                className={`${MIC_CLASS} ${
                  state === "listening"
                    ? "animate-pulse bg-red-500"
                    : state === "correct"
                      ? "bg-[var(--color-accent-lecture)]"
                      : state === "wrong"
                        ? "bg-amber-500"
                        : "bg-[var(--color-accent-lecture)]"
                }`}
                aria-label="Parler"
              >
                {state === "correct" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="md:h-4 md:w-4" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : state === "wrong" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="md:h-4 md:w-4" aria-hidden>
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="md:h-4 md:w-4" aria-hidden>
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </button>
              <span className={SYLLABLE_CLASS}>
                {syl}
              </span>
              <button
                type="button"
                onClick={() => playSyllable(syl)}
                className={PLAY_CLASS}
                aria-label={`Ecouter ${syl}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:h-3 md:w-3" aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
              {state === "wrong" && heard[i] && (
                <p className="col-span-4 pl-8 text-xs text-amber-600 md:pl-6 md:text-[10px]">J&apos;ai entendu: {heard[i]}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
});
