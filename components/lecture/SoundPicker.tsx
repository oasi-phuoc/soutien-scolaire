"use client";

import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { speak } from "@/lib/utils/speech";
import { randomSoundItems, wordHasPhoneme } from "@/lib/curriculum/word-pool";

export interface SoundPickerHandle {
  reset: () => void;
  validate: () => void;
}

interface AudioProps {
  phoneme: string;
  mode: "audio";
}

interface ImageProps {
  phoneme: string;
  mode: "image";
}

type Props = AudioProps | ImageProps;

type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";

export const SoundPicker = forwardRef<SoundPickerHandle, Props>(
  function SoundPicker(props, ref) {
    if (props.mode === "audio") {
      return <AudioPicker phoneme={props.phoneme} ref={ref} />;
    }
    return <ImagePicker phoneme={props.phoneme} ref={ref} />;
  },
);

// ── ImagePicker ───────────────────────────────────────────────────────────────

const ImagePicker = forwardRef<SoundPickerHandle, { phoneme: string }>(
  function ImagePicker({ phoneme }, ref) {
    const [items, setItems] = useState(() => randomSoundItems(phoneme, 16));
    const [states, setStates] = useState<CellState[]>(() => Array(16).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setItems(randomSoundItems(phoneme, 16));
      setStates(Array(16).fill("idle"));
      setValidated(false);
    }, [phoneme]);

    const validate = useCallback(() => {
      if (validated) return;
      setValidated(true);
      setStates((prev) =>
        prev.map((s, i) => {
          const isCorrect = wordHasPhoneme(items[i]!, phoneme);
          if (s === "selected") return isCorrect ? "correct" : "wrong";
          if (isCorrect) return "missed";
          return "idle";
        }),
      );
    }, [validated, items, phoneme]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function toggle(i: number) {
      if (validated) return;
      setStates((prev) => {
        const next = [...prev] as CellState[];
        next[i] = prev[i] === "selected" ? "idle" : "selected";
        return next;
      });
    }

    return (
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Touchez les images où vous entendez{" "}
          <strong className="text-[var(--color-accent-lecture)]">{phoneme}</strong>
        </p>
        <div className="grid grid-cols-4 gap-2">
          {items.map((word, i) => {
            const s = states[i]!;
            const imgSrc = `/assets/words/img/${word.label}.jpg`;
            const audioSrc = `/assets/words/son/${word.label}.mp3`;
            return (
              <button
                key={`${word.label}-${i}`}
                type="button"
                onClick={() => toggle(i)}
                disabled={validated}
                className={`relative aspect-square overflow-hidden rounded-[var(--radius-lg)] border-2 bg-[var(--color-bg-primary)] transition-colors ${
                  s === "correct"
                    ? "border-[var(--color-accent-lecture)]"
                    : s === "wrong" || s === "missed"
                      ? "border-red-400"
                      : s === "selected"
                        ? "border-[var(--color-accent-lecture)]"
                        : "border-[var(--color-border-default)]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={word.label}
                  className="absolute inset-0 h-full w-full object-contain p-1"
                />
                <button
                  type="button"
                  aria-label={`Écouter ${word.label}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    new Audio(audioSrc).play().catch(() => speak(word.label));
                  }}
                  className="absolute top-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm z-10"
                >
                  <SmallSpeakerIcon />
                </button>
              </button>
            );
          })}
        </div>
      </section>
    );
  },
);

// ── AudioPicker ───────────────────────────────────────────────────────────────

const AudioPicker = forwardRef<SoundPickerHandle, { phoneme: string }>(
  function AudioPicker({ phoneme }, ref) {
    const [items, setItems] = useState(() => randomSoundItems(phoneme, 16));
    const [states, setStates] = useState<CellState[]>(() => Array(16).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setItems(randomSoundItems(phoneme, 16));
      setStates(Array(16).fill("idle"));
      setValidated(false);
    }, [phoneme]);

    const validate = useCallback(() => {
      if (validated) return;
      setValidated(true);
      setStates((prev) =>
        prev.map((s, i) => {
          const isCorrect = wordHasPhoneme(items[i]!, phoneme);
          if (s === "selected") return isCorrect ? "correct" : "wrong";
          if (isCorrect) return "missed";
          return "idle";
        }),
      );
    }, [validated, items, phoneme]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function toggle(i: number) {
      if (validated) return;
      const word = items[i]!;
      new Audio(`/assets/words/son/${word.label}.mp3`).play().catch(() => speak(word.label));
      setStates((prev) => {
        const next = [...prev] as CellState[];
        next[i] = prev[i] === "selected" ? "idle" : "selected";
        return next;
      });
    }

    return (
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Écoutez et touchez ceux où vous entendez{" "}
          <strong className="text-[var(--color-accent-lecture)]">{phoneme}</strong>
        </p>
        <div className="grid grid-cols-4 gap-2">
          {items.map((word, i) => {
            const s = states[i]!;
            const audioSrc = `/assets/words/son/${word.label}.mp3`;
            return (
              <button
                key={`${word.label}-${i}`}
                type="button"
                onClick={() => toggle(i)}
                disabled={validated}
                className={`relative aspect-square overflow-hidden rounded-[var(--radius-lg)] border-2 transition-colors ${
                  s === "correct"
                    ? "border-[var(--color-accent-lecture)]"
                    : s === "wrong" || s === "missed"
                      ? "border-red-400"
                      : s === "selected"
                        ? "border-[var(--color-accent-lecture)]"
                        : "border-[var(--color-border-default)]"
                }`}
              >
                <button
                  type="button"
                  aria-label={`Écouter`}
                  onClick={(e) => {
                    e.stopPropagation();
                    new Audio(audioSrc).play().catch(() => speak(word.label));
                  }}
                  className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm z-10"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
              </button>
            );
          })}
        </div>
      </section>
    );
  },
);

function SmallSpeakerIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
