"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { randomSoundItems, wordHasPhoneme } from "@/lib/curriculum/word-pool";
import { getLectureWordImagePath, playWord } from "@/lib/utils/audio";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";

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

const DESKTOP_MQ = "(min-width: 768px)";

function useSoundPickerItemCount(defaultCount = 16): number {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return defaultCount;
    return window.matchMedia(DESKTOP_MQ).matches ? 20 : defaultCount;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(DESKTOP_MQ);
    const update = () => setCount(mq.matches ? 20 : defaultCount);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [defaultCount]);

  return count;
}

export const SoundPicker = forwardRef<SoundPickerHandle, Props>(
  function SoundPicker(props, ref) {
    if (props.mode === "audio") {
      return <AudioPicker phoneme={props.phoneme} ref={ref} />;
    }
    return <ImagePicker phoneme={props.phoneme} ref={ref} />;
  },
);

function ouiNonLabel(state: CellState): "Oui" | "Non" {
  return state === "selected" || state === "correct" || state === "wrong" ? "Oui" : "Non";
}

function ouiNonButtonClass(state: CellState, validated: boolean, hasPhoneme: boolean): string {
  const base =
    "rounded-full border px-3 py-1 text-xs font-semibold transition-colors disabled:opacity-70";
  if (!validated) {
    return state === "selected"
      ? `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]`
      : `${base} border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]`;
  }
  if (state === "correct") {
    return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]`;
  }
  if (state === "wrong") {
    return `${base} border-red-400 bg-red-50 text-red-700`;
  }
  if (state === "missed") {
    return `${base} border-amber-400 bg-amber-50 text-amber-700`;
  }
  if (hasPhoneme) {
    return `${base} border-amber-400 bg-amber-50 text-amber-700`;
  }
  return `${base} border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]`;
}

const OUI_NON_NEUTRAL_CLASS =
  "rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-1 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors disabled:opacity-70";

function imageCardClass(state: CellState, validated: boolean, hasPhoneme: boolean): string {
  const base =
    "flex flex-col items-center gap-1.5 rounded-[var(--radius-lg)] border p-1.5 transition-colors";
  if (!validated) {
    return `${base} border-[var(--color-border-default)]`;
  }
  if (state === "correct") {
    return `${base} border-[var(--color-accent-lecture)]`;
  }
  if (state === "wrong") {
    return `${base} border-red-400 bg-red-50`;
  }
  if (state === "missed") {
    return `${base} border-amber-400 bg-amber-50`;
  }
  if (hasPhoneme) {
    return `${base} border-amber-400 bg-amber-50`;
  }
  return `${base} border-[var(--color-border-default)]`;
}

function audioCardClass(state: CellState, validated: boolean, hasPhoneme: boolean): string {
  const base =
    "flex flex-col items-center gap-1.5 rounded-[var(--radius-lg)] border p-1.5 transition-colors";
  if (!validated) {
    return `${base} border-[var(--color-border-default)]`;
  }
  if (state === "correct") {
    return `${base} border-[var(--color-accent-lecture)]`;
  }
  if (state === "wrong") {
    return `${base} border-red-400 bg-red-50`;
  }
  if (state === "missed") {
    return `${base} border-amber-400 bg-amber-50`;
  }
  if (hasPhoneme) {
    return `${base} border-amber-400 bg-amber-50`;
  }
  return `${base} border-[var(--color-border-default)]`;
}

function OuiNonButton({
  state,
  validated,
  hasPhoneme,
  onClick,
  neutral = false,
}: {
  state: CellState;
  validated: boolean;
  hasPhoneme: boolean;
  onClick: () => void;
  neutral?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={validated}
      className={neutral ? OUI_NON_NEUTRAL_CLASS : ouiNonButtonClass(state, validated, hasPhoneme)}
      aria-pressed={ouiNonLabel(state) === "Oui"}
    >
      {ouiNonLabel(state)}
    </button>
  );
}

// ── ImagePicker ───────────────────────────────────────────────────────────────

const ImagePicker = forwardRef<SoundPickerHandle, { phoneme: string }>(
  function ImagePicker({ phoneme }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const itemCount = useSoundPickerItemCount(16);
    const [items, setItems] = useState(() => randomSoundItems(phoneme, itemCount, true));
    const [states, setStates] = useState<CellState[]>(() => Array(itemCount).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setItems(randomSoundItems(phoneme, itemCount, true));
      setStates(Array(itemCount).fill("idle"));
      setValidated(false);
    }, [itemCount, phoneme]);

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
      <section className="space-y-3 pb-8">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Touchez les images où vous entendez{" "}
          <strong className="text-[var(--color-accent-lecture)]">{phoneme}</strong>
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "tapImagesWithSound", { x: phoneme })}
          </p>
        )}
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-4">
          {items.map((word, i) => {
            const s = states[i]!;
            const hasPhoneme = wordHasPhoneme(word, phoneme);
            const imgSrc = getLectureWordImagePath(word.label);
            return (
              <div
                key={`${word.label}-${i}`}
                className={imageCardClass(s, validated, hasPhoneme)}
              >
                <button
                  type="button"
                  onClick={() => playWord(word.label)}
                  className="relative aspect-square w-full overflow-hidden rounded-lg border border-[var(--color-accent-lecture)] bg-white"
                  aria-label={`Écouter ${word.label}`}
                >
                  {imgSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={imgSrc}
                      alt={word.label}
                      className="h-full w-full object-contain p-1"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center px-1 text-center text-xs font-semibold text-[var(--color-text-primary)]">
                      {word.label}
                    </span>
                  )}
                </button>
                <div className="flex w-full justify-center">
                  <OuiNonButton
                    state={s}
                    validated={validated}
                    hasPhoneme={hasPhoneme}
                    onClick={() => toggle(i)}
                  />
                </div>
              </div>
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
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const itemCount = useSoundPickerItemCount(16);
    const [items, setItems] = useState(() => randomSoundItems(phoneme, itemCount));
    const [states, setStates] = useState<CellState[]>(() => Array(itemCount).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setItems(randomSoundItems(phoneme, itemCount));
      setStates(Array(itemCount).fill("idle"));
      setValidated(false);
    }, [itemCount, phoneme]);

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
      <section className="space-y-3 pb-8">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Écoutez et touchez ceux où vous entendez{" "}
          <strong className="text-[var(--color-accent-lecture)]">{phoneme}</strong>
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "listenTapWithSound", { x: phoneme })}
          </p>
        )}
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-4">
          {items.map((word, i) => {
            const s = states[i]!;
            const hasPhoneme = wordHasPhoneme(word, phoneme);
            return (
              <div
                key={`${word.label}-${i}`}
                className={audioCardClass(s, validated, hasPhoneme)}
              >
                <button
                  type="button"
                  onClick={() => playWord(word.label)}
                  className="flex aspect-square w-full items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]"
                  aria-label={`Écouter ${word.label}`}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent-lecture)]" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
                <OuiNonButton
                  state={s}
                  validated={validated}
                  hasPhoneme={hasPhoneme}
                  onClick={() => toggle(i)}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  },
);
