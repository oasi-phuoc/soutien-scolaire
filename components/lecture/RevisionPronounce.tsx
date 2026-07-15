"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { playWord } from "@/lib/utils/audio";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

export interface RevisionPronounceHandle {
  reset: () => void;
  validate: () => void;
}

interface Props {
  words: { letter: string; word: string }[];
  /** Nombre de mots à prononcer (éval : 4). */
  wordCount?: number;
  onValidated?: (score: number, max: number) => void;
  shouldValidate?: boolean;
}

type RecState = "idle" | "listening" | "correct" | "wrong";

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function isMatch(recognized: string, target: string): boolean {
  const r = normalize(recognized);
  const t = normalize(target);
  return r === t || r.includes(t) || t.includes(r);
}

function pickOnePerLetter(words: { letter: string; word: string }[]): { letter: string; word: string }[] {
  const seen = new Set<string>();
  const result: { letter: string; word: string }[] = [];
  const byLetter: Record<string, { letter: string; word: string }[]> = {};
  for (const w of words) {
    if (!byLetter[w.letter]) byLetter[w.letter] = [];
    byLetter[w.letter]!.push(w);
  }
  for (const letter of Object.keys(byLetter)) {
    if (seen.has(letter)) continue;
    seen.add(letter);
    const pool = byLetter[letter]!;
    result.push(pool[Math.floor(Math.random() * pool.length)]!);
  }
  return result;
}

function pickWords(words: { letter: string; word: string }[], count?: number): { letter: string; word: string }[] {
  const byLetter: Record<string, { letter: string; word: string }[]> = {};
  for (const w of words) {
    if (!byLetter[w.letter]) byLetter[w.letter] = [];
    byLetter[w.letter]!.push(w);
  }
  const letters = Object.keys(byLetter);
  if (!count) return pickOnePerLetter(words);
  const perLetter = Math.ceil(count / letters.length);
  const picked: { letter: string; word: string }[] = [];
  for (const letter of letters) {
    const pool = [...byLetter[letter]!];
    for (let i = 0; i < perLetter && pool.length > 0 && picked.length < count; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      picked.push(pool.splice(idx, 1)[0]!);
    }
  }
  return picked.slice(0, count);
}

export const RevisionPronounce = forwardRef<RevisionPronounceHandle, Props>(
  function RevisionPronounce({ words, wordCount, onValidated, shouldValidate }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const [selected] = useState(() => pickWords(words, wordCount));
    const [recStates, setRecStates] = useState<RecState[]>(() => selected.map(() => "idle"));
    const [validated, setValidated] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recRef = useRef<any>(null);

    const reset = useCallback(() => {
      recRef.current?.abort();
      setRecStates(selected.map(() => "idle"));
      setValidated(false);
    }, [selected]);

    const validate = useCallback(() => {
      if (validated) return;
      recRef.current?.abort();
      setValidated(true);
      const score = recStates.filter((s) => s === "correct").length;
      onValidated?.(score, selected.length);
    }, [validated, recStates, selected.length, onValidated]);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    useEffect(() => {
      if (shouldValidate) validateRef.current();
    }, [shouldValidate]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function startListening(wordIdx: number) {
      if (validated || recStates[wordIdx] === "listening") return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
      if (!SR) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rec: any = new SR();
      rec.lang = "fr-CH";
      rec.continuous = false;
      rec.interimResults = false;
      rec.maxAlternatives = 3;
      rec.onstart = () => setRecStates((prev) => { const n = [...prev] as RecState[]; n[wordIdx] = "listening"; return n; });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rec.onresult = (e: any) => {
        let matched = false;
        const target = selected[wordIdx]!.word;
        for (let a = 0; a < e.results[0].length; a++) {
          const transcript: string = e.results[0][a].transcript.trim();
          if (isMatch(transcript, target)) { matched = true; break; }
        }
        setRecStates((prev) => { const n = [...prev] as RecState[]; n[wordIdx] = matched ? "correct" : "wrong"; return n; });
      };
      rec.onerror = () => setRecStates((prev) => { const n = [...prev] as RecState[]; n[wordIdx] = "idle"; return n; });
      rec.onend = () => setRecStates((prev) => { const n = [...prev] as RecState[]; if (n[wordIdx] === "listening") n[wordIdx] = "idle"; return n; });
      recRef.current = rec;
      rec.start();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const srAvailable = typeof window !== "undefined" && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

    return (
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Prononcer les mots</h2>
      {showPivot && (
        <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
          {lectureUi(lang, "pronounceWords")}
        </p>
      )}

        {selected.map((entry, wi) => {
          const recState = recStates[wi]!;
          return (
            <div key={wi} className={`flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border-2 px-4 py-5 text-center transition-colors ${
              recState === "correct" ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
                : recState === "wrong" ? "border-red-400 bg-red-50 dark:bg-red-900/20"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-[var(--color-text-primary)]">{entry.word}</span>
                <button type="button" onClick={() => playWord(entry.word)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm transition-opacity hover:opacity-90 active:scale-95"
                  aria-label={`Écouter ${entry.word}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
              </div>

              {srAvailable && (
                <button type="button" onClick={() => startListening(wi)} disabled={validated || recState === "listening"}
                  className={`flex h-14 w-14 items-center justify-center rounded-full shadow-md transition-all active:scale-95 ${
                    recState === "listening" ? "animate-pulse bg-red-500 text-white"
                      : recState === "correct" ? "bg-[var(--color-accent-lecture)] text-white"
                        : recState === "wrong" ? "bg-red-400 text-white"
                          : "bg-[var(--color-accent-lecture)] text-white hover:opacity-90"
                  }`} aria-label="Parler">
                  {recState === "correct"
                    ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                    : recState === "wrong"
                      ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
                      : <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" /></svg>
                  }
                </button>
              )}
            </div>
          );
        })}
      </section>
    );
  },
);
