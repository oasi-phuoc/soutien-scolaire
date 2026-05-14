"use client";

import { speak } from "@/lib/utils/speech";
import type { PronStep } from "@/lib/curriculum/lecture-data";

interface Props {
  phoneme: string;
  chain: PronStep[];
  accentColor?: string;
}

export function PronunciationChain({ phoneme, chain, accentColor = "var(--color-accent-lecture)" }: Props) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Prononcer le son</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Lisez le son <strong style={{ color: accentColor }}>{phoneme}</strong>, puis la syllabe, puis le mot
      </p>
      <ul className="space-y-2">
        {chain.map((step, i) => (
          <li
            key={i}
            className="flex items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3"
          >
            <span className="w-5 text-center text-base font-bold" style={{ color: accentColor }}>
              {step.phoneme}
            </span>
            <span className="text-[var(--color-text-secondary)]">→</span>
            <span className="text-sm text-[var(--color-text-secondary)]">{step.syllable}</span>
            <span className="text-[var(--color-text-secondary)]">→</span>
            <span className="text-sm font-bold text-[var(--color-text-primary)]">{step.word}</span>
            <button
              type="button"
              onClick={() => speak(step.word)}
              className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-primary)] text-white active:opacity-75"
              aria-label={`Écouter ${step.word}`}
            >
              <SpeakerIcon />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SpeakerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
