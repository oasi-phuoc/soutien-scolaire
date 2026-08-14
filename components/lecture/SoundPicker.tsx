"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { randomSoundItems, wordHasPhoneme } from "@/lib/curriculum/word-pool";
import { getLectureWordImagePath, playWord } from "@/lib/utils/audio";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";
import { LECTURE_CORRECTION_BUTTON, LECTURE_CORRECTION_BORDER, LECTURE_CORRECTION_CARD } from "./lecture-correction";

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

type Props = (AudioProps | ImageProps) & {
  fixedItemCount?: number;
  shouldValidate?: boolean;
  onEvalValidated?: (labels: string[], targets: boolean[], states: CellState[]) => void;
};

type PickerEvalProps = {
  fixedItemCount?: number;
  shouldValidate?: boolean;
  onEvalValidated?: (labels: string[], targets: boolean[], states: CellState[]) => void;
};

export const SoundPicker = forwardRef<SoundPickerHandle, Props>(
  function SoundPicker(props, ref) {
    const evalProps: PickerEvalProps = {
      fixedItemCount: props.fixedItemCount,
      shouldValidate: props.shouldValidate,
      onEvalValidated: props.onEvalValidated,
    };
    if (props.mode === "audio") {
      return <AudioPicker phoneme={props.phoneme} ref={ref} {...evalProps} />;
    }
    return <ImagePicker phoneme={props.phoneme} ref={ref} {...evalProps} />;
  },
);

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

type OuiNonChoice = "oui" | "non" | null;

function ouiNonCircleClass(picked: boolean, isAnswer: boolean, validated: boolean): string {
  const base =
    "flex h-8 min-w-[2.6rem] items-center justify-center rounded-md border px-2 text-[11px] font-semibold leading-none transition-colors disabled:opacity-90";
  if (!validated) {
    return picked
      ? `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]`
      : `${base} border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)]`;
  }
  if (isAnswer && picked) {
    return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]`;
  }
  if (isAnswer && !picked) {
    return `${base} border-amber-400 bg-amber-50 text-amber-700`;
  }
  if (!isAnswer && picked) {
    return `${base} ${LECTURE_CORRECTION_BUTTON}`;
  }
  return `${base} border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)]`;
}

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
    return `${base} ${LECTURE_CORRECTION_CARD}`;
  }
  if (state === "missed") {
    return `${base} border-amber-400 bg-amber-50`;
  }
  if (hasPhoneme) {
    return `${base} border-amber-400 bg-amber-50`;
  }
  return `${base} border-[var(--color-border-default)]`;
}

function imageButtonClass(state: CellState, validated: boolean): string {
  const base =
    "relative aspect-square w-full overflow-hidden rounded-lg border bg-white";
  if (!validated) return `${base} border-[var(--color-accent-lecture)]`;
  if (state === "wrong" || state === "missed") return `${base} ${LECTURE_CORRECTION_BORDER}`;
  return `${base} border-[var(--color-accent-lecture)]`;
}

function audioButtonClass(state: CellState, validated: boolean): string {
  const base =
    "flex aspect-square w-full items-center justify-center rounded-lg border bg-white";
  if (!validated) return `${base} border-[var(--color-accent-lecture)]`;
  if (state === "wrong" || state === "missed") return `${base} ${LECTURE_CORRECTION_BORDER}`;
  return `${base} border-[var(--color-accent-lecture)]`;
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
    return `${base} ${LECTURE_CORRECTION_CARD}`;
  }
  if (state === "missed") {
    return `${base} border-amber-400 bg-amber-50`;
  }
  if (hasPhoneme) {
    return `${base} border-amber-400 bg-amber-50`;
  }
  return `${base} border-[var(--color-border-default)]`;
}

function OuiNonPair({
  choice,
  validated,
  hasPhoneme,
  onPick,
}: {
  choice: OuiNonChoice;
  validated: boolean;
  hasPhoneme: boolean;
  onPick: (value: "oui" | "non") => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {(["oui", "non"] as const).map((value) => {
        const label = value === "oui" ? "Oui" : "Non";
        const isAnswer = value === "oui" ? hasPhoneme : !hasPhoneme;
        const isPicked = choice === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => onPick(value)}
            disabled={validated}
            aria-pressed={isPicked}
            aria-label={label}
            className={ouiNonCircleClass(isPicked, isAnswer, validated)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

// ── ImagePicker ───────────────────────────────────────────────────────────────

const ImagePicker = forwardRef<SoundPickerHandle, {
  phoneme: string;
  fixedItemCount?: number;
  shouldValidate?: boolean;
  onEvalValidated?: (labels: string[], targets: boolean[], states: CellState[]) => void;
}>(
  function ImagePicker({ phoneme, fixedItemCount, shouldValidate, onEvalValidated }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const responsiveCount = useSoundPickerItemCount(16);
    const itemCount = fixedItemCount ?? responsiveCount;
    const [items, setItems] = useState(() => randomSoundItems(phoneme, itemCount, true));
    const [choices, setChoices] = useState<OuiNonChoice[]>(() => Array(itemCount).fill(null));
    const [states, setStates] = useState<CellState[]>(() => Array(itemCount).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setItems(randomSoundItems(phoneme, itemCount, true));
      setChoices(Array(itemCount).fill(null));
      setStates(Array(itemCount).fill("idle"));
      setValidated(false);
    }, [itemCount, phoneme]);

    const validate = useCallback(() => {
      if (validated) return;
      const newStates = items.map((word, i) => {
        const isCorrect = wordHasPhoneme(word, phoneme);
        const choice = choices[i];
        if (choice === "oui") return isCorrect ? "correct" : "wrong";
        if (isCorrect) return "missed";
        return "idle";
      }) as CellState[];
      setValidated(true);
      setStates(newStates);
      if (onEvalValidated) {
        const labels = items.map((w) => w.label);
        const targets = items.map((w) => wordHasPhoneme(w, phoneme));
        onEvalValidated(labels, targets, newStates);
      }
    }, [validated, items, phoneme, choices, onEvalValidated]);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    useEffect(() => {
      if (shouldValidate) validateRef.current();
    }, [shouldValidate]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function pick(i: number, value: "oui" | "non") {
      if (validated) return;
      setChoices((prev) => prev.map((c, j) => (j === i ? (c === value ? null : value) : c)));
    }

    return (
      <section className="space-y-3 pb-8">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son</h2>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "hearTheSound")}
          </p>
        )}
        <p className="text-sm text-[var(--color-text-secondary)]">
          Cochez si vous entendez le son{" "}
          <strong className="text-[var(--color-accent-lecture)]">{phoneme}</strong>
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "tapImagesWithSound", { x: phoneme })}
          </p>
        )}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
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
                  className={imageButtonClass(s, validated)}
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
                <OuiNonPair
                  choice={choices[i] ?? null}
                  validated={validated}
                  hasPhoneme={hasPhoneme}
                  onPick={(value) => pick(i, value)}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  },
);

// ── AudioPicker ───────────────────────────────────────────────────────────────

const AudioPicker = forwardRef<SoundPickerHandle, {
  phoneme: string;
  fixedItemCount?: number;
  shouldValidate?: boolean;
  onEvalValidated?: (labels: string[], targets: boolean[], states: CellState[]) => void;
}>(
  function AudioPicker({ phoneme, fixedItemCount, shouldValidate, onEvalValidated }, ref) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const responsiveCount = useSoundPickerItemCount(16);
    const itemCount = fixedItemCount ?? responsiveCount;
    const [items, setItems] = useState(() => randomSoundItems(phoneme, itemCount));
    const [choices, setChoices] = useState<OuiNonChoice[]>(() => Array(itemCount).fill(null));
    const [states, setStates] = useState<CellState[]>(() => Array(itemCount).fill("idle"));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      setItems(randomSoundItems(phoneme, itemCount));
      setChoices(Array(itemCount).fill(null));
      setStates(Array(itemCount).fill("idle"));
      setValidated(false);
    }, [itemCount, phoneme]);

    const validate = useCallback(() => {
      if (validated) return;
      const newStates = items.map((word, i) => {
        const isCorrect = wordHasPhoneme(word, phoneme);
        const choice = choices[i];
        if (choice === "oui") return isCorrect ? "correct" : "wrong";
        if (isCorrect) return "missed";
        return "idle";
      }) as CellState[];
      setValidated(true);
      setStates(newStates);
      if (onEvalValidated) {
        const labels = items.map((w) => w.label);
        const targets = items.map((w) => wordHasPhoneme(w, phoneme));
        onEvalValidated(labels, targets, newStates);
      }
    }, [validated, items, phoneme, choices, onEvalValidated]);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    useEffect(() => {
      if (shouldValidate) validateRef.current();
    }, [shouldValidate]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function pick(i: number, value: "oui" | "non") {
      if (validated) return;
      setChoices((prev) => prev.map((c, j) => (j === i ? (c === value ? null : value) : c)));
    }

    return (
      <section className="space-y-3 pb-8">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son</h2>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "hearTheSound")}
          </p>
        )}
        <p className="text-sm text-[var(--color-text-secondary)]">
          Cochez si vous entendez le son{" "}
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
                  className={audioButtonClass(s, validated)}
                  aria-label={`Écouter ${word.label}`}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent-lecture)]" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
                <OuiNonPair
                  choice={choices[i] ?? null}
                  validated={validated}
                  hasPhoneme={hasPhoneme}
                  onPick={(value) => pick(i, value)}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  },
);
