"use client";

import { useState } from "react";
import { speak } from "@/lib/utils/speech";
import type { SoundItem } from "@/lib/curriculum/lecture-data";

interface Props {
  phoneme: string;
  items: SoundItem[];
  mode: "image" | "audio";
  externalValidated?: boolean;
}

export function SoundPicker({ phoneme, items, mode, externalValidated }: Props) {
  const [selected, setSelected] = useState<Set<number>>(() => new Set());
  const [revealed, setRevealed] = useState(false);

  const isRevealed = revealed || externalValidated;

  function toggle(i: number) {
    if (isRevealed) return;
    speak(items[i]!.label);
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  function reset() {
    setSelected(new Set());
    setRevealed(false);
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        {mode === "image"
          ? "Touchez les images où vous entendez "
          : "Écoutez et touchez ceux où vous entendez "}
        <strong className="text-[var(--color-accent-lecture)]">{phoneme}</strong>
      </p>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, i) => {
          const isSelected = selected.has(i);
          const isCorrect = item.hasSound;
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className={`flex min-h-20 flex-col items-center justify-center gap-2 rounded-[var(--radius-lg)] border p-4 transition-colors ${
                isRevealed
                  ? isSelected && isCorrect
                    ? "border-blue-500 bg-blue-100 dark:bg-blue-900/30"
                    : isSelected && !isCorrect
                      ? "border-amber-400 bg-amber-50 dark:bg-amber-900/20"
                      : !isSelected && isCorrect
                        ? "border-blue-300 bg-blue-50 dark:bg-blue-900/10 opacity-70"
                        : "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]"
                  : isSelected
                    ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
              }`}
            >
              {mode === "image" ? (
                <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                  {item.label}
                </span>
              ) : (
                <SpeakerIcon />
              )}
              {isRevealed && isSelected && isCorrect && (
                <span className="text-xs font-bold text-blue-600">✓</span>
              )}
              {isRevealed && isSelected && !isCorrect && (
                <span className="text-xs font-bold text-amber-600">✗</span>
              )}
            </button>
          );
        })}
      </div>
      {!externalValidated && (
        !isRevealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="w-full rounded-[var(--radius-lg)] border border-[var(--color-border-default)] py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
          >
            Vérifier
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="w-full rounded-[var(--radius-lg)] border border-[var(--color-border-default)] py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
          >
            Recommencer
          </button>
        )
      )}
    </section>
  );
}

function SpeakerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-text-secondary)]" aria-hidden>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
