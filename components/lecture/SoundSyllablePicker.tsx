"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { randomSoundSyllableItems, type SoundSyllableItem } from "@/lib/curriculum/word-pool";
import { getLectureWordImagePath, hasLectureWordImage, playWord } from "@/lib/utils/audio";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";
import { LECTURE_CORRECTION_BORDER, LECTURE_CORRECTION_CARD } from "./lecture-correction";

export interface SoundSyllablePickerHandle {
  reset: () => void;
  validate: () => void;
}

type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";

interface Props {
  phonemes: string[];
  mode: "audio" | "image";
  title?: string;
  fixedItemCount?: number;
  shouldValidate?: boolean;
}

const DESKTOP_MQ = "(min-width: 768px)";

function useItemCount(defaultCount = 9): number {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return defaultCount;
    return window.matchMedia(DESKTOP_MQ).matches ? 12 : defaultCount;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(DESKTOP_MQ);
    const update = () => setCount(mq.matches ? 12 : defaultCount);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [defaultCount]);

  return count;
}

function isCardCorrect(states: CellState[], targets: boolean[]): boolean {
  if (states.some((s) => s === "wrong" || s === "missed")) return false;
  return targets.every((want, i) => {
    const selected = states[i] === "selected" || states[i] === "correct";
    return selected === want;
  });
}

function cardClass(states: CellState[], targets: boolean[], validated: boolean): string {
  const base =
    "flex flex-col items-center gap-1.5 rounded-[var(--radius-lg)] border p-1.5 transition-colors";
  if (!validated) return `${base} border-[var(--color-border-default)]`;
  if (isCardCorrect(states, targets)) {
    return `${base} border-[var(--color-accent-lecture)]`;
  }
  if (states.some((s) => s === "missed")) return `${base} border-amber-400 bg-amber-50`;
  if (states.some((s) => s === "wrong")) return `${base} ${LECTURE_CORRECTION_CARD}`;
  return `${base} border-[var(--color-border-default)]`;
}

function mediaButtonClass(validated: boolean, cardOk: boolean): string {
  const base = "relative aspect-square w-full overflow-hidden rounded-lg border bg-white";
  if (!validated) return `${base} border-[var(--color-accent-lecture)]`;
  if (!cardOk) return `${base} ${LECTURE_CORRECTION_BORDER}`;
  return `${base} border-[var(--color-accent-lecture)]`;
}

function syllableCellClass(state: CellState, validated: boolean): string {
  const base =
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold tabular-nums leading-none transition-colors disabled:opacity-90";
  if (!validated) {
    return state === "selected"
      ? `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]`
      : `${base} border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)]`;
  }
  if (state === "correct") {
    return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]`;
  }
  if (state === "wrong" || state === "missed") {
    return `${base} border-amber-400 bg-amber-50 text-amber-700`;
  }
  return `${base} border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)]`;
}

function SpeakerIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent-lecture)]" aria-hidden>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

function emptyStates(items: SoundSyllableItem[]): CellState[][] {
  return items.map((item) => Array(item.targets.length).fill("idle"));
}

export const SoundSyllablePicker = forwardRef<SoundSyllablePickerHandle, Props>(
  function SoundSyllablePicker(
    { phonemes, mode, title, fixedItemCount, shouldValidate },
    ref,
  ) {
    const lang = usePivotLang();
    const { showPivot } = useTranslation();
    const responsiveCount = useItemCount(9);
    const itemCount = fixedItemCount ?? responsiveCount;
    const [items, setItems] = useState(() => randomSoundSyllableItems(phonemes, itemCount, mode === "image"));
    const [states, setStates] = useState<CellState[][]>(() => emptyStates(items));
    const [validated, setValidated] = useState(false);

    const reset = useCallback(() => {
      const next = randomSoundSyllableItems(phonemes, itemCount, mode === "image");
      setItems(next);
      setStates(emptyStates(next));
      setValidated(false);
    }, [itemCount, mode, phonemes]);

    const validate = useCallback(() => {
      if (validated) return;
      const next = items.map((item, i) =>
        item.targets.map((want, j) => {
          const selected = states[i]?.[j] === "selected";
          if (selected) return want ? "correct" : "wrong";
          if (want) return "missed";
          return "idle";
        }) as CellState[],
      );
      setValidated(true);
      setStates(next);
    }, [validated, items, states]);

    const validateRef = useRef(validate);
    validateRef.current = validate;
    useEffect(() => {
      if (shouldValidate) validateRef.current();
    }, [shouldValidate]);

    useImperativeHandle(ref, () => ({ reset, validate }), [reset, validate]);

    function toggle(cardIdx: number, cellIdx: number) {
      if (validated) return;
      setStates((prev) =>
        prev.map((row, i) => {
          if (i !== cardIdx) return row;
          return row.map((cell, j) => {
            if (j !== cellIdx) return cell;
            return cell === "selected" ? "idle" : "selected";
          });
        }),
      );
    }

    const heading = title ?? (phonemes.length > 1 ? "Entendre les sons" : "Entendre le son");

    return (
      <section className="space-y-3 pb-8">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{heading}</h2>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, phonemes.length > 1 ? "hearTheSounds" : "hearTheSound")}
          </p>
        )}
        <p className="text-sm text-[var(--color-text-secondary)]">
          Cochez la partie de la syllabe où vous entendez le son{" "}
          {phonemes.length > 1 ? (
            <>
              <strong className="text-[var(--color-accent-lecture)]">{phonemes[0]}</strong>
              {" ou "}
              <strong className="text-[var(--color-accent-lecture)]">{phonemes[1]}</strong>
            </>
          ) : (
            <strong className="text-[var(--color-accent-lecture)]">{phonemes[0]}</strong>
          )}
        </p>
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {phonemes.length > 1
              ? lectureUi(lang, "checkSyllableWithSounds", { a: phonemes[0] ?? "", b: phonemes[1] ?? "" })
              : lectureUi(lang, "checkSyllableWithSound", { x: phonemes[0] ?? "" })}
          </p>
        )}
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-4">
          {items.map((item, i) => {
            const row = states[i] ?? [];
            const cardOk = validated && isCardCorrect(row, item.targets);
            const imgSrc = mode === "image" && hasLectureWordImage(item.label)
              ? getLectureWordImagePath(item.label)
              : null;
            return (
              <div
                key={`${item.label}-${i}`}
                className={cardClass(row, item.targets, validated)}
              >
                <button
                  type="button"
                  onClick={() => playWord(item.label)}
                  className={`${mediaButtonClass(validated, cardOk)} ${mode === "audio" ? "flex items-center justify-center" : ""}`}
                  aria-label={`Écouter ${item.label}`}
                >
                  {mode === "image" && imgSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={imgSrc}
                      alt=""
                      className="h-full w-full object-contain p-1"
                    />
                  ) : (
                    <SpeakerIcon />
                  )}
                </button>
                <div className="flex w-full flex-wrap items-center justify-center gap-1">
                  {item.targets.map((_, j) => {
                    const s = row[j] ?? "idle";
                    return (
                      <button
                        key={j}
                        type="button"
                        onClick={() => toggle(i, j)}
                        disabled={validated}
                        aria-pressed={s === "selected" || s === "correct"}
                        aria-label={`Syllabe ${j + 1}`}
                        className={syllableCellClass(s, validated)}
                      >
                        {j + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  },
);
