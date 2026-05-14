"use client";

import { speak } from "@/lib/utils/speech";

interface Props {
  phoneme: string;
  letter: string;
  letterLower: string;
  exampleWord: string;
  exampleImagePath?: string;
  exampleAudioPath?: string;
}

function HighlightedWord({ word, letter, letterLower }: { word: string; letter: string; letterLower: string }) {
  return (
    <span>
      {word.split("").map((char, i) =>
        char === letter || char === letterLower ? (
          <strong key={i} className="font-bold" style={{ color: "var(--color-accent-lecture)" }}>
            {char}
          </strong>
        ) : (
          <span key={i}>{char}</span>
        ),
      )}
    </span>
  );
}

export function DiscoverSound({ letter, letterLower, exampleWord, exampleImagePath, exampleAudioPath }: Props) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Découverte du son</h2>
      <div className="relative flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-6 py-8">
        <button
          type="button"
          aria-label="Écouter"
          onClick={() => {
            if (exampleAudioPath) {
              new Audio(exampleAudioPath).play();
            } else {
              speak(exampleWord);
            }
          }}
          className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm active:opacity-80"
        >
          <SpeakerIcon />
        </button>
        <p className="text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
          {letter}{letterLower}
        </p>
        {exampleImagePath && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={exampleImagePath}
            alt={exampleWord}
            className="max-h-48 w-auto object-contain border-0 outline-none"
          />
        )}
        <p className="text-base text-[var(--color-text-secondary)]">
          <HighlightedWord
            word={`${letter} comme dans ${exampleWord.toLowerCase()}`}
            letter={letter}
            letterLower={letterLower}
          />
        </p>
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
