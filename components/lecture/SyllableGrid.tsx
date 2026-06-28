"use client";

import { useMemo, useRef, useState } from "react";
import { speak } from "@/lib/utils/speech";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

interface Props {
  baseLetter: string;
  mode?: "cv" | "vc" | "mixed";
}

type RecState = "idle" | "listening" | "correct" | "wrong";

const VOWELS = ["a", "e", "i", "o", "u", "y"];

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j]!, next[i]!];
  }
  return next;
}

function randomCase(text: string): string {
  return Math.random() > 0.5 ? text.toUpperCase() : text.toLowerCase();
}

function makeSyllables(baseLetter: string, mode: NonNullable<Props["mode"]>): string[] {
  const letter = baseLetter.toLowerCase();
  if (mode === "cv") {
    return shuffle(VOWELS).map((vowel) => randomCase(`${letter}${vowel}`));
  }
  if (mode === "vc") {
    return shuffle(VOWELS).map((vowel) => randomCase(`${vowel}${letter}`));
  }

  const patterns = [
    (a: string, b: string) => `${a}${letter}${b}`,
    (a: string, _b: string) => `${letter}${a}${letter}`,
    (a: string, b: string) => `${letter}${a}${letter}${b}`,
    (a: string, b: string) => `${a}${letter}${b}${letter}`,
  ];
  const vowels = shuffle(VOWELS);
  return Array.from({ length: 6 }, (_, index) => {
    const first = vowels[index % vowels.length]!;
    const second = vowels[(index + 2) % vowels.length]!;
    return randomCase(patterns[index % patterns.length]!(first, second));
  });
}

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .replace(/\s+/gu, "")
    .toLowerCase();
}

function matchesSyllable(transcript: string, target: string): boolean {
  const heard = normalize(transcript);
  const wanted = normalize(target);
  const aliases = new Set([wanted, wanted.replace(/y/gu, "i")]);
  return Array.from(aliases).some((alias) => heard === alias || heard.includes(alias));
}

export function SyllableGrid({ baseLetter, mode = "cv" }: Props) {
  const lang = usePivotLang();
  const { showPivot } = useTranslation();
  const recRef = useRef<unknown>(null);
  const [states, setStates] = useState<RecState[]>(() => Array(6).fill("idle"));
  const [heard, setHeard] = useState<string[]>(() => Array(6).fill(""));
  const syllables = useMemo(
    () => makeSyllables(baseLetter, mode),
    [baseLetter, mode],
  );

  function startListening(index: number) {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "fr-CH";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;

    rec.onstart = () => {
      setStates((prev) => prev.map((state, i) => (i === index ? "listening" : state)));
      setHeard((prev) => prev.map((value, i) => (i === index ? "" : value)));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      let best = event.results[0]?.[0]?.transcript?.trim?.() ?? "";
      let matched = false;
      for (let alt = 0; alt < event.results[0].length; alt++) {
        const transcript = event.results[0][alt].transcript.trim();
        if (matchesSyllable(transcript, syllables[index]!)) {
          best = transcript;
          matched = true;
          break;
        }
      }
      setHeard((prev) => prev.map((value, i) => (i === index ? best : value)));
      setStates((prev) => prev.map((state, i) => (i === index ? (matched ? "correct" : "wrong") : state)));
    };

    rec.onerror = () => {
      setStates((prev) => prev.map((state, i) => (i === index ? "idle" : state)));
    };
    rec.onend = () => {
      setStates((prev) => prev.map((state, i) => (i === index && state === "listening" ? "idle" : state)));
    };

    recRef.current = rec;
    rec.start();
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Lire les syllabes</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Prononcez chaque syllabe a voix haute.
      </p>
      {showPivot && (
        <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
          {lectureUi(lang, "tapSyllableAloud")}
        </p>
      )}
      <div className="space-y-2">
        {syllables.map((syl, i) => {
          const state = states[i]!;
          return (
            <div
              key={`${syl}-${i}`}
              className={`grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-[var(--radius-md)] border bg-[var(--color-bg-primary)] px-3 py-2 ${
                state === "correct"
                  ? "border-[var(--color-accent-lecture)]"
                  : state === "wrong"
                    ? "border-red-300"
                    : "border-[var(--color-border-default)]"
              }`}
            >
              <span className="w-5 text-sm font-bold text-[var(--color-accent-lecture)]">{i + 1}.</span>
              <button
                type="button"
                onClick={() => startListening(i)}
                disabled={state === "listening"}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-transform active:scale-95 ${
                  state === "listening"
                    ? "animate-pulse bg-red-500"
                    : state === "correct"
                      ? "bg-[var(--color-accent-lecture)]"
                      : state === "wrong"
                        ? "bg-red-400"
                        : "bg-[var(--color-accent-lecture)]"
                }`}
                aria-label="Parler"
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
              <span className="min-h-12 px-4 text-left text-xl font-bold leading-[3rem] text-[var(--color-text-primary)]">
                {syl}
              </span>
              <button
                type="button"
                onClick={() => speak(syl)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-accent-lecture)] shadow-sm active:scale-95"
                aria-label={`Ecouter ${syl}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
              {state === "wrong" && heard[i] && (
                <p className="col-span-4 pl-8 text-xs text-red-500">J&apos;ai entendu: {heard[i]}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
