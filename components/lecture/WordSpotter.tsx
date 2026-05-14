"use client";

import { useState } from "react";
import { speak } from "@/lib/utils/speech";

interface Props {
  target: string;
  words: string[];
  isUppercase: boolean;
}

export function WordSpotter({ target, words, isUppercase }: Props) {
  const [tapped, setTapped] = useState<Set<string>>(() => new Set());

  function tap(wi: number, li: number, letter: string) {
    const key = `${wi}-${li}`;
    if (tapped.has(key)) return;
    speak(letter);
    setTapped((prev) => new Set(prev).add(key));
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Repérer dans les mots</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez la lettre{" "}
        <strong className="text-[var(--color-accent-lecture)]">
          {isUppercase ? target.toUpperCase() : target.toLowerCase()}
        </strong>{" "}
        dans chaque mot
      </p>
      <ul className="space-y-2">
        {words.map((word, wi) => (
          <li
            key={wi}
            className="flex items-center justify-center gap-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3"
          >
            {word.split("").map((letter, li) => {
              const key = `${wi}-${li}`;
              const isTapped = tapped.has(key);
              const isTarget = letter === target;
              return (
                <button
                  key={li}
                  type="button"
                  onClick={() => tap(wi, li, letter)}
                  className={`min-w-[1.25rem] text-center text-base font-semibold tracking-widest transition-colors ${
                    isTapped && isTarget
                      ? "text-[var(--color-accent-lecture)] underline underline-offset-4"
                      : isTapped && !isTarget
                        ? "text-[var(--color-text-secondary)] line-through"
                        : "text-[var(--color-text-primary)]"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </li>
        ))}
      </ul>
    </section>
  );
}
