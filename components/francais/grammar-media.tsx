"use client";

import { useState } from "react";
import { getLectureWordImagePath, playWord } from "@/lib/utils/audio";
import { speak } from "@/lib/utils/speech";

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Joue un mot (mp3 lecture) ou une phrase (TTS). */
export function playGrammarAudio(text: string): void {
  const t = text.trim();
  if (!t) return;
  if (!/\s/.test(t) && t.length <= 24) {
    playWord(t);
    return;
  }
  speak(t);
}

export function GrammarAudioButton({
  text,
  label = "Écouter",
}: {
  text?: string;
  label?: string;
}) {
  if (!text) return null;
  return (
    <button
      type="button"
      onClick={() => playGrammarAudio(text)}
      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--color-accent-fr)] hover:bg-[var(--color-accent-fr)]/20"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" />
      </svg>
      {label}
    </button>
  );
}

export function GrammarWordImage({
  word,
  svg,
  src,
  alt,
  size = "md",
}: {
  word?: string;
  svg?: string;
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}) {
  const [failed, setFailed] = useState(false);
  const path = src ?? (word ? getLectureWordImagePath(word) : undefined);
  const dim = size === "sm" ? "h-14 w-14" : size === "lg" ? "h-28 w-28" : "h-20 w-20";
  const box = `shrink-0 overflow-hidden rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] ${dim}`;

  if (svg) {
    return (
      <div
        className={`${box} p-1 [&>svg]:h-full [&>svg]:w-full`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  }

  if (path && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={path}
        alt={alt ?? word ?? ""}
        className={`${box} object-contain p-1`}
        onError={() => setFailed(true)}
      />
    );
  }

  if (!word && !alt) return null;
  return (
    <div className={`${box} flex items-center justify-center p-1 text-center text-[10px] font-medium text-[var(--color-text-secondary)]`}>
      {alt ?? word}
    </div>
  );
}
