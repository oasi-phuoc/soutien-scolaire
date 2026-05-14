"use client";

import { speak } from "@/lib/utils/speech";

interface Props {
  phoneme: string;
  letter: string;
  letterLower: string;
  exampleWord: string;
}

export function DiscoverSound({ phoneme, letter, letterLower, exampleWord }: Props) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Découverte du son</h2>
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-6 py-8">
        <p className="text-base font-medium text-[var(--color-accent-alg)]">{phoneme}</p>
        <p className="text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
          {letter}{letterLower}
        </p>
        <p className="text-base text-[var(--color-text-secondary)]">{exampleWord}</p>
        <button
          type="button"
          onClick={() => speak(exampleWord)}
          className="flex items-center gap-2 rounded-full bg-[var(--color-text-primary)] px-6 py-2.5 text-sm font-semibold text-white active:opacity-80"
        >
          <SpeakerIcon />
          Écouter
        </button>
      </div>
    </section>
  );
}

function SpeakerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
