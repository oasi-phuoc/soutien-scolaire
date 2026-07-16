"use client";
import type { VocabTheme, VocabWord } from "@/lib/curriculum/vocabulary-data";
import {
  vocabAudioFolder,
  vocabAudioPath,
  vocabAudioSlug,
  vocabSpokenText,
} from "@/lib/curriculum/vocab-audio";
import { selectedVoice } from "@/lib/utils/audio";
import { primeSpeechVoices, speak } from "@/lib/utils/speech";

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

export function pickN<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

const PLAY_TIMEOUT_MS = 8000;

async function tryPlayUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const audio = new Audio(url);
    let settled = false;
    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve(ok);
    };
    const timer = window.setTimeout(() => finish(false), PLAY_TIMEOUT_MS);
    audio.addEventListener("error", () => finish(false), { once: true });
    audio.addEventListener("playing", () => finish(true), { once: true });
    void audio.play().catch(() => finish(false));
  });
}

/**
 * Joue l'audio préenregistré du mot (voix choisie → autre voix → TTS).
 * Les formes liées (pays, féminin…) sont dans le même MP3.
 */
export function playWord(
  word: VocabWord | string,
  theme?: { section: string; imageFolder?: string },
) {
  primeSpeechVoices();

  if (typeof word === "string") {
    speak(word);
    return;
  }

  const spoken = vocabSpokenText(word);
  const explicit = word.audio;
  if (explicit) {
    void tryPlayUrl(explicit).then((ok) => {
      if (!ok) speak(spoken);
    });
    return;
  }

  if (!theme) {
    speak(spoken);
    return;
  }

  const folder = vocabAudioFolder(theme);
  const slug = vocabAudioSlug(word);
  const preferred = selectedVoice();
  const other = preferred === "m" ? "f" : "m";
  const candidates = [
    vocabAudioPath(preferred, folder, slug),
    vocabAudioPath(other, folder, slug),
  ];

  void (async () => {
    for (const url of candidates) {
      if (await tryPlayUrl(url)) return;
    }
    speak(spoken);
  })();
}

export function normalizeText(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['']/g, "'")
    .replace(/\s+/g, " ");
}

export interface ExerciseProps {
  theme: VocabTheme;
  validateCommand: number;
  onValidated: (correct: number, total: number) => void;
  onCanValidateChange: (can: boolean) => void;
  isEval?: boolean;
  evalNumber?: number;
  exerciseNumber?: number;
}

export const WRONG_INPUT_CLS =
  "border border-amber-400 bg-amber-50";
export const WRONG_TEXT_CLS = "text-amber-600 line-through";
export const WRONG_ANSWER_CLS = "text-[var(--color-text-primary)] font-semibold";
export const WRONG_BTN_CLS =
  "border-amber-400 bg-amber-50 text-amber-700";

// Correction display: single box (same width as the input it replaces)
// wrong answer strikethrough amber + correct answer normal — no extra column added
export const WRONG_BOX_CLS =
  "inline-flex flex-col items-center justify-center text-center rounded border border-amber-400 bg-amber-50 px-1";
// keep old names so nothing breaks while we migrate
export const WRONG_DISPLAY_INPUT_CLS = "";   // unused — remove from imports
export const CORRECT_DISPLAY_INPUT_CLS = ""; // unused — remove from imports

export function SoundIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
