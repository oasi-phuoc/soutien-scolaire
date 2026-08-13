"use client";

import { speak } from "@/lib/utils/speech";
import { LectureConsigne } from "./LectureConsigne";

interface Props {
  words: { letter: string; word: string }[];
}

export function RevisionWordRead({ words }: Props) {
  return (
    <section className="space-y-3">
      <LectureConsigne className="justify-center text-center">
        Lisez chaque mot à voix haute, puis écoutez
      </LectureConsigne>
      <ul className="space-y-2">
        {words.map(({ letter, word }, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3"
          >
            <span className="w-4 text-center text-base font-bold text-[var(--color-accent-lecture)]">
              {letter}
            </span>
            <span className="flex-1 text-sm font-medium text-[var(--color-text-primary)]">{word}</span>
            <button
              type="button"
              onClick={() => speak(word)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-primary)] text-white active:opacity-75"
              aria-label={`Écouter ${word}`}
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
