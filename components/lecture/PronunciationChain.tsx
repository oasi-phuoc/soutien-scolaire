"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import { speak } from "@/lib/utils/speech";
import type { PronStep } from "@/lib/curriculum/lecture-data";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

export interface PronunciationChainHandle {
  reset: () => void;
}

interface Props {
  phoneme: string;
  chain: PronStep[];
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

function randomIdx(len: number) {
  return Math.floor(Math.random() * len);
}

export const PronunciationChain = forwardRef<PronunciationChainHandle, Props>(
  function PronunciationChain({ phoneme: _phoneme, chain }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const [idx, setIdx] = useState(() => randomIdx(chain.length));
    const [recState, setRecState] = useState<RecState>("idle");
    const [heard, setHeard] = useState<string>("");
    const recRef = useRef<unknown>(null);

    const step = chain[idx]!;

    const reset = useCallback(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (recRef.current as any)?.abort();
      setIdx(randomIdx(chain.length));
      setRecState("idle");
      setHeard("");
    }, [chain.length]);

    useImperativeHandle(ref, () => ({ reset }), [reset]);

    function startListening() {
      if (recState === "listening") return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
      if (!SR) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rec: any = new SR();
      rec.lang = "fr-CH";
      rec.continuous = false;
      rec.interimResults = false;
      rec.maxAlternatives = 3;

      rec.onstart = () => setRecState("listening");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rec.onresult = (e: any) => {
        let matched = false;
        for (let a = 0; a < e.results[0].length; a++) {
          const transcript: string = e.results[0][a].transcript.trim();
          if (isMatch(transcript, step.word)) {
            matched = true;
            setHeard(transcript);
            break;
          }
        }
        if (!matched) {
          setHeard(e.results[0][0].transcript.trim());
        }
        setRecState(matched ? "correct" : "wrong");
      };

      rec.onerror = () => setRecState("idle");
      rec.onend = () => {
        setRecState((s) => (s === "listening" ? "idle" : s));
      };

      recRef.current = rec;
      rec.start();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const srAvailable = typeof window !== "undefined" && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

    return (
      <section className="space-y-5">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Prononcer le mot</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Prononcez le mot à voix haute
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "sayWordAloud")}
          </p>
        )}

        {/* Word card */}
        <div className={`flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border-2 px-6 py-8 text-center transition-colors ${
          recState === "correct"
            ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
            : recState === "wrong"
              ? "border-red-400 bg-red-50 dark:bg-red-900/20"
              : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
        }`}>
          <span className="text-sm text-[var(--color-text-secondary)]">
            <span className="font-bold" style={{ color: "var(--color-accent-lecture)" }}>{step.phoneme}</span>
            {" → "}
            <span>{step.syllable}</span>
            {" → "}
            <span className="font-bold text-[var(--color-text-primary)]">{step.word}</span>
          </span>
          <span className="mt-1 text-4xl font-bold text-[var(--color-text-primary)]">
            {step.word}
          </span>
          <button
            type="button"
            onClick={() => speak(step.word)}
            className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-text-secondary)]/20 text-[var(--color-text-secondary)] transition-opacity hover:opacity-75"
            aria-label={`Écouter ${step.word}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </button>
        </div>

        {/* Mic button */}
        {srAvailable ? (
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={startListening}
              disabled={recState === "listening"}
              className={`flex h-20 w-20 items-center justify-center rounded-full shadow-md transition-all active:scale-95 ${
                recState === "listening"
                  ? "animate-pulse bg-red-500 text-white"
                  : recState === "correct"
                    ? "bg-[var(--color-accent-lecture)] text-white"
                    : recState === "wrong"
                      ? "bg-red-400 text-white"
                      : "bg-[var(--color-accent-lecture)] text-white hover:opacity-90"
              }`}
              aria-label="Parler"
            >
              {recState === "listening" ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <rect x="9" y="2" width="6" height="12" rx="3" />
                  <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : recState === "correct" ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : recState === "wrong" ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <rect x="9" y="2" width="6" height="12" rx="3" />
                  <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>

            <p className="text-sm text-[var(--color-text-secondary)]">
              {recState === "idle" && <span>{lectureUi(lang, "pressToSpeak")}</span>}
              {recState === "listening" && <span>{lectureUi(lang, "listening")}</span>}
              {recState === "correct" && (
                <span className="font-semibold text-[var(--color-accent-lecture)]">Bravo ! 🎉</span>
              )}
              {recState === "wrong" && heard && (
                <span className="text-red-500">J&apos;ai entendu « {heard} » — réessaie !</span>
              )}
              {recState === "wrong" && !heard && (
                <span className="text-red-500">Je n&apos;ai pas compris — réessaie !</span>
              )}
            </p>
          </div>
        ) : (
          <p className="text-center text-sm text-[var(--color-text-secondary)]">
            La reconnaissance vocale n&apos;est pas disponible sur ce navigateur.
          </p>
        )}
      </section>
    );
  },
);
