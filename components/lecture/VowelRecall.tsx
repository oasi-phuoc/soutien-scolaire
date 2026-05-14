"use client";

import { speak } from "@/lib/utils/speech";

const VOWELS = [
  { letter: "A", phoneme: "/a/" },
  { letter: "O", phoneme: "/o/" },
  { letter: "I", phoneme: "/i/" },
  { letter: "U", phoneme: "/y/" },
  { letter: "E", phoneme: "/e/" },
  { letter: "Y", phoneme: "/i/" },
];

export function VowelRecall() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Rappel des sons déjà vus</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Touchez chaque lettre pour entendre son son.</p>
      <div className="grid grid-cols-3 gap-2">
        {VOWELS.map(({ letter, phoneme }) => (
          <button
            key={letter}
            type="button"
            onClick={() => speak(letter)}
            className="flex flex-col items-center justify-center gap-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] py-4 active:scale-95 transition-transform"
          >
            <span className="text-2xl font-bold text-[var(--color-text-primary)]">{letter}</span>
            <span className="text-xs text-[var(--color-accent-alg)]">{phoneme}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
