"use client";
import type { VocabTheme, VocabWord } from "@/lib/curriculum/vocabulary-data";
import { speak } from "@/lib/utils/speech";

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

export function playWord(word: VocabWord | string) {
  const text = typeof word === "string" ? word : word.word;
  const audioPath = typeof word === "object" ? word.audio : undefined;
  if (audioPath) {
    new Audio(audioPath).play().catch(() => speakFr(text));
  } else {
    speakFr(text);
  }
}

function speakFr(text: string) {
  speak(text);
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
