"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import type { ComplexSoundLessonData, ConsonantData, PronStep, VowelData } from "@/lib/curriculum/lecture-data";
import { randomWordsWithLetter, randomSoundItems, wordHasPhoneme } from "@/lib/curriculum/word-pool";
import { linearSwissGrade, LEVEL_PASSING_GRADES, type LevelKey } from "@/lib/scoring";
import { getWordAssetSlug, playWord } from "@/lib/utils/audio";
import {
  complexTargets,
  makeComplexGrid,
  makeComplexSyllables,
  normalizeGraph,
  splitComplexWord,
} from "@/lib/utils/complex-grapheme";
import { useRegisterEvalGuard } from "@/components/EvalNavGuard";
import { EvalAnnounceScreen } from "@/components/ui/EvalAnnounceScreen";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  data: VowelData | ConsonantData | ComplexSoundLessonData;
  onBack: () => void;
  onDone: (grade: number, passed: boolean, total: number) => void;
  onEvalStepChange?: (idx: number, total: number, validated: boolean[], isResults: boolean) => void;
  onEvalTimeChange?: (timeLeft: number | null) => void;
  onEvalNavigateReady?: (navigate: (index: number) => void) => void;
}

type EvalStep = "grid" | "words" | "sound-image" | "sound-audio" | "syllables-mixed" | "pronounce" | "results";
type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";
type RecState = "idle" | "listening" | "correct" | "wrong";

type EvalSnapshot =
  | { kind: "grid"; grid: string[]; states: CellState[]; upper: string; lower: string }
  | { kind: "words"; words: string[]; states: Record<string, CellState>; letter: string; letterLower: string }
  | { kind: "sound-image" | "sound-audio"; labels: string[]; targets: boolean[]; states: CellState[] }
  | { kind: "syllables-mixed"; syllables: string[]; states: RecState[]; heard: string[]; score: number }
  | { kind: "pronounce"; phoneme: string; syllable: string; word: string; score: number };

type ValidatedHandler = (score: number, snapshot: EvalSnapshot) => void;

const BASE_EVAL_STEPS: EvalStep[] = ["grid", "words", "sound-image", "sound-audio", "pronounce", "results"];
const CONSONANT_EVAL_STEPS: EvalStep[] = ["grid", "words", "sound-image", "sound-audio", "syllables-mixed", "pronounce", "results"];
// L7 complex sounds reuse the same set of exercises as consonants.
const COMPLEX_EVAL_STEPS: EvalStep[] = ["grid", "words", "sound-image", "sound-audio", "syllables-mixed", "pronounce", "results"];

const RESULT_ROW_BY_STEP: Record<Exclude<EvalStep, "results">, { label: string; max: number }> = {
  grid: { label: "Reconnaître la lettre", max: 4 },
  words: { label: "Repérer dans les mots", max: 4 },
  "sound-image": { label: "Entendre le son (images)", max: 2 },
  "sound-audio": { label: "Entendre le son (audio)", max: 2 },
  "syllables-mixed": { label: "Lire les syllabes", max: 3 },
  pronounce: { label: "Prononcer", max: 3 },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function makeMixedGrid(upper: string, lower: string): string[] {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const distractors: string[] = [];
  for (const c of alpha) {
    if (c !== upper) {
      distractors.push(c);
      distractors.push(c.toLowerCase());
    }
  }
  const targets = [upper, upper, upper, lower, lower, lower];
  return shuffle([...targets, ...shuffle(distractors).slice(0, 19)]);
}

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function isMatch(recognized: string, target: string): boolean {
  const r = normalize(recognized);
  const t = normalize(target);
  return r === t || r.includes(t) || t.includes(r);
}

const SIMPLE_VOWELS = ["a", "e", "i", "o", "u", "y"] as const;

function applyBalancedCase(items: string[]): string[] {
  const upperFlags = shuffle([true, true, true, false, false, false]);
  return items.map((item, index) => (upperFlags[index] ? item.toUpperCase() : item.toLowerCase()));
}

function makeMixedSyllables(baseLetter: string): string[] {
  const letter = baseLetter.toLowerCase();
  const vowels = shuffle([...SIMPLE_VOWELS]);
  const patterns = [
    (a: string, b: string) => `${a}${letter}${b}`,
    (a: string, _b: string) => `${letter}${a}${letter}`,
    (a: string, b: string) => `${letter}${a}${letter}${b}`,
    (a: string, b: string) => `${a}${letter}${b}${letter}`,
  ];
  const syllables = Array.from({ length: 6 }, (_, index) => {
    const first = vowels[index % vowels.length]!;
    const second = vowels[(index + 2) % vowels.length]!;
    return patterns[index % patterns.length]!(first, second);
  });
  return applyBalancedCase(syllables);
}

function matchesSyllable(transcript: string, target: string): boolean {
  const heard = normalize(transcript).replace(/\s+/gu, "");
  const wanted = normalize(target).replace(/\s+/gu, "");
  const aliases = new Set([wanted, wanted.replace(/y/gu, "i")]);
  return Array.from(aliases).some((alias) => heard === alias || heard.includes(alias));
}

function getPassGrade(): number {
  if (typeof window === "undefined") return 4;
  try {
    const level = (localStorage.getItem("soutien-level") ?? "base") as LevelKey;
    return LEVEL_PASSING_GRADES[level] ?? 4;
  } catch {
    return 4;
  }
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function IconLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function IconRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function IconSpeaker() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

// ─── Exercise 1 — Mixed Grid (4 pts or 2 pts partial) ────────────────────────

function GridExercise({
  upper, lower, onValidated, shouldValidate,
}: { upper: string; lower: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const [grid] = useState(() => makeMixedGrid(upper, lower));
  const [states, setStates] = useState<CellState[]>(() => Array(25).fill("idle"));
  const [validated, setValidated] = useState(false);

  function validate() {
    if (validated) return;
    setValidated(true);
    const newStates = states.map((s, i) => {
      const isT = grid[i] === upper || grid[i] === lower;
      if (s === "selected") return isT ? "correct" : "wrong";
      if (isT) return "missed" as CellState;
      return "idle" as CellState;
    });
    setStates(newStates);
    const correctCount = newStates.filter((s) => s === "correct").length;
    const wrongCount = newStates.filter((s) => s === "wrong").length;
    const missedCount = newStates.filter((s) => s === "missed").length;
    const perfect = wrongCount === 0 && missedCount === 0;
    const halfPassed = correctCount >= 3 && wrongCount === 0; // 3 = half of 6 targets
    onValidated(perfect ? 4 : halfPassed ? 2 : 0, { kind: "grid", grid, states: newStates, upper, lower });
  }

  const validateRef = useRef(validate);
  validateRef.current = validate;
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  function tap(i: number) {
    if (validated) return;
    setStates((prev) => {
      const next = [...prev] as CellState[];
      next[i] = prev[i] === "selected" ? "idle" : "selected";
      return next;
    });
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Reconnaître la lettre</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez toutes les{" "}
        <strong className="text-[var(--color-accent-lecture)]">{upper}</strong> et{" "}
        <strong className="text-[var(--color-accent-lecture)]">{lower}</strong>
      </p>
      <div className="grid grid-cols-5 gap-2">
        {grid.map((cell, i) => {
          const s = states[i]!;
          return (
            <button
              key={i}
              type="button"
              onClick={() => tap(i)}
              disabled={validated}
              className={`flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border text-lg font-bold transition-colors ${
                s === "correct" || s === "selected"
                  ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]"
                  : s === "wrong" || s === "missed"
                    ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] active:scale-95"
              }`}
            >
              {cell}
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ─── Exercise 2 — Word Spotting (1 pt per line × 4 lines) ────────────────────

function WordsExercise({
  letter, letterLower, onValidated, shouldValidate,
}: { letter: string; letterLower: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const [words] = useState(() => {
    const raw = randomWordsWithLetter(letterLower, 20);
    const pool = shuffle(raw.filter((w) => w.length <= 9)).slice(0, 4);
    return [
      (pool[0] ?? "MAISON").toUpperCase(),
      (pool[1] ?? "maison").toLowerCase(),
      (pool[2] ?? "BALLON").toUpperCase(),
      (pool[3] ?? "ballon").toLowerCase(),
    ];
  });
  const [states, setStates] = useState<Record<string, CellState>>({});
  const [validated, setValidated] = useState(false);

  function validate() {
    if (validated) return;
    setValidated(true);
    const newStates: Record<string, CellState> = {};
    let total = 0;

    words.forEach((word, wi) => {
      const target = wi % 2 === 0 ? letter : letterLower;
      let lineOk = true;
      word.split("").forEach((char, ci) => {
        const key = `${wi}-${ci}`;
        const isT = char === target;
        const s = states[key] ?? "idle";
        if (isT) {
          newStates[key] = s === "selected" ? "correct" : "missed";
          if (s !== "selected") lineOk = false;
        } else {
          if (s === "selected") { newStates[key] = "wrong"; lineOk = false; }
        }
      });
      if (lineOk) total++;
    });

    setStates(newStates);
    onValidated(total, { kind: "words", words, states: newStates, letter, letterLower });
  }

  const validateRef = useRef(validate);
  validateRef.current = validate;
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  function tap(wi: number, ci: number) {
    if (validated) return;
    const key = `${wi}-${ci}`;
    setStates((prev) => ({ ...prev, [key]: prev[key] === "selected" ? "idle" : "selected" }));
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Repérer dans les mots</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez la lettre{" "}
        <strong className="text-[var(--color-accent-lecture)]">{letter}</strong> ou{" "}
        <strong className="text-[var(--color-accent-lecture)]">{letterLower}</strong> dans chaque mot
      </p>
      <ul className="space-y-2">
        {words.map((word, wi) => (
          <li key={wi} className="flex items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-2">
            <span className="flex flex-wrap justify-center gap-0.5">
              {word.split("").map((char, ci) => {
                const key = `${wi}-${ci}`;
                const s = states[key] ?? "idle";
                return (
                  <button
                    key={ci}
                    type="button"
                    disabled={validated}
                    onClick={() => tap(wi, ci)}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-base font-bold transition-colors ${
                      s === "correct" || s === "selected"
                        ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                        : s === "wrong" || s === "missed"
                          ? "border-red-400 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                          : "border-transparent text-[var(--color-text-primary)]"
                    }`}
                  >
                    {char}
                  </button>
                );
              })}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ─── Exercise 3 — Sound Image (2 pts) ────────────────────────────────────────

function SoundImageExercise({
  phoneme, onValidated, shouldValidate,
}: { phoneme: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const [items] = useState(() => randomSoundItems(phoneme, 4));
  const [cellStates, setCellStates] = useState<CellState[]>(Array(4).fill("idle"));
  const [validated, setValidated] = useState(false);

  function validate() {
    if (validated) return;
    setValidated(true);
    const isTarget = items.map((w) => wordHasPhoneme(w, phoneme));
    const newStates = cellStates.map((s, i) => {
      if (s === "selected") return isTarget[i] ? "correct" : "wrong";
      if (isTarget[i]) return "missed" as CellState;
      return "idle" as CellState;
    });
    setCellStates(newStates);
    const perfect = !newStates.some((s) => s === "wrong" || s === "missed");
    const half =
      newStates.filter((s) => s === "correct").length >= Math.ceil(isTarget.filter(Boolean).length * 0.5) &&
      newStates.filter((s) => s === "wrong").length <= 1;
    onValidated(perfect ? 2 : half ? 1 : 0, {
      kind: "sound-image", labels: items.map((item) => item.label), targets: isTarget, states: newStates,
    });
  }

  const validateRef = useRef(validate);
  validateRef.current = validate;
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  function toggle(i: number) {
    if (validated) return;
    setCellStates((prev) => {
      const next = [...prev] as CellState[];
      next[i] = prev[i] === "selected" ? "idle" : "selected";
      return next;
    });
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son — images</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez les images où vous entendez{" "}
        <strong className="text-[var(--color-accent-lecture)]">{phoneme}</strong>
      </p>
      <div className="grid grid-cols-4 gap-2">
        {items.map((word, i) => {
          const s = cellStates[i]!;
          const imgSrc = `/assets/words/img/${getWordAssetSlug(word.label)}.webp`;
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              disabled={validated}
              className={`relative aspect-square overflow-hidden rounded-[var(--radius-lg)] border-2 bg-[var(--color-bg-primary)] transition-colors ${
                s === "correct" || s === "selected"
                  ? "border-[var(--color-accent-lecture)]"
                  : s === "wrong" || s === "missed"
                    ? "border-red-400"
                    : "border-[var(--color-border-default)]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgSrc} alt={word.label} className="absolute inset-0 h-full w-full object-contain p-1 rounded-[var(--radius-md)]" />
              <button
                type="button"
                aria-label={`Écouter ${word.label}`}
                onClick={(e) => { e.stopPropagation(); playWord(word.label); }}
                className="absolute top-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm"
              >
                <IconSpeaker />
              </button>
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ─── Exercise 4 — Sound Audio (2 pts) ────────────────────────────────────────

function SoundAudioExercise({
  phoneme, onValidated, shouldValidate,
}: { phoneme: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const [items] = useState(() => randomSoundItems(phoneme, 4));
  const [cellStates, setCellStates] = useState<CellState[]>(Array(4).fill("idle"));
  const [validated, setValidated] = useState(false);

  function validate() {
    if (validated) return;
    setValidated(true);
    const isTarget = items.map((w) => wordHasPhoneme(w, phoneme));
    const newStates = cellStates.map((s, i) => {
      if (s === "selected") return isTarget[i] ? "correct" : "wrong";
      if (isTarget[i]) return "missed" as CellState;
      return "idle" as CellState;
    });
    setCellStates(newStates);
    const perfect = !newStates.some((s) => s === "wrong" || s === "missed");
    const half =
      newStates.filter((s) => s === "correct").length >= Math.ceil(isTarget.filter(Boolean).length * 0.5) &&
      newStates.filter((s) => s === "wrong").length <= 1;
    onValidated(perfect ? 2 : half ? 1 : 0, {
      kind: "sound-audio", labels: items.map((item) => item.label), targets: isTarget, states: newStates,
    });
  }

  const validateRef = useRef(validate);
  validateRef.current = validate;
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  function toggle(i: number) {
    if (validated) return;
    const word = items[i]!;
    playWord(word.label);
    setCellStates((prev) => {
      const next = [...prev] as CellState[];
      next[i] = prev[i] === "selected" ? "idle" : "selected";
      return next;
    });
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Entendre le son — audio</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Écoutez et touchez ceux où vous entendez{" "}
        <strong className="text-[var(--color-accent-lecture)]">{phoneme}</strong>
      </p>
      <div className="grid grid-cols-4 gap-2">
        {items.map((word, i) => {
          const s = cellStates[i]!;
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              disabled={validated}
              className={`relative aspect-square overflow-hidden rounded-[var(--radius-lg)] border-2 transition-colors ${
                s === "correct" || s === "selected"
                  ? "border-[var(--color-accent-lecture)]"
                  : s === "wrong" || s === "missed"
                    ? "border-red-400"
                    : "border-[var(--color-border-default)]"
              }`}
            >
              <button
                type="button"
                aria-label="Écouter"
                onClick={(e) => { e.stopPropagation(); playWord(word.label); }}
                className={`absolute inset-0 m-auto flex h-7 w-7 items-center justify-center rounded-full shadow-sm z-10 ${
                  s === "correct" || s === "selected"
                    ? "bg-[var(--color-accent-lecture)] text-white"
                    : s === "wrong" || s === "missed"
                      ? "bg-red-400 text-white"
                      : "bg-[var(--color-accent-lecture)] text-white"
                }`}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ─── Exercise 5 — Pronounce (3 pts) ──────────────────────────────────────────

function SyllablesMixedExercise({
  letter, onValidated, shouldValidate,
}: { letter: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const [syllables] = useState(() => makeMixedSyllables(letter));
  const [recStates, setRecStates] = useState<RecState[]>(() => syllables.map(() => "idle"));
  const [heard, setHeard] = useState<string[]>(() => syllables.map(() => ""));
  const [scored, setScored] = useState<boolean[]>(() => syllables.map(() => false));
  const [validated, setValidated] = useState(false);
  const recRef = useRef<unknown>(null);

  function startListening(index: number) {
    if (validated || recStates[index] === "listening") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "fr-CH";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    setRecStates((prev) => {
      const next = [...prev] as RecState[];
      next[index] = "listening";
      return next;
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      let transcript = "";
      let matched = false;
      for (let a = 0; a < event.results[0].length; a++) {
        transcript = event.results[0][a].transcript.trim();
        if (matchesSyllable(transcript, syllables[index]!)) {
          matched = true;
          break;
        }
      }
      setHeard((prev) => {
        const next = [...prev];
        next[index] = transcript;
        return next;
      });
      setScored((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
      setRecStates((prev) => {
        const next = [...prev] as RecState[];
        next[index] = matched ? "correct" : "wrong";
        return next;
      });
    };
    rec.onerror = () => setRecStates((prev) => {
      const next = [...prev] as RecState[];
      next[index] = "idle";
      return next;
    });
    rec.onend = () => setRecStates((prev) => {
      const next = [...prev] as RecState[];
      if (next[index] === "listening") next[index] = "idle";
      return next;
    });
    recRef.current = rec;
    rec.start();
  }

  const validateRef = useRef(() => {});
  validateRef.current = () => {
    if (validated) return;
    setValidated(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    const score = Math.min(3, recStates.filter((state) => state === "correct").length);
    onValidated(score, { kind: "syllables-mixed", syllables, states: recStates, heard, score });
  };
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const srAvailable = typeof window !== "undefined" && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Lire les syllabes</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Prononcez les syllabes affichées.</p>
      <div className="space-y-2">
        {syllables.map((syllable, index) => {
          const state = recStates[index]!;
          return (
            <div key={`${syllable}-${index}`} className={`flex min-h-16 items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-3 transition-colors ${
              state === "correct" ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
                : state === "wrong" ? "border-red-400 bg-red-50"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
            }`}>
              <span className="w-7 text-sm font-bold text-[var(--color-accent-lecture)]">{index + 1}.</span>
              <span className="flex-1 text-center text-2xl font-bold text-[var(--color-text-primary)]">{syllable}</span>
              <button
                type="button"
                onClick={() => startListening(index)}
                disabled={!srAvailable || validated || state === "listening"}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all active:scale-95 ${
                  state === "listening" ? "animate-pulse bg-red-500" : "bg-[var(--color-accent-lecture)]"
                } disabled:opacity-40`}
                aria-label={`Prononcer ${syllable}`}
              >
                {state === "correct"
                  ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                  : state === "wrong"
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" /></svg>
                }
              </button>
              {!srAvailable && !scored[index] && (
                <button
                  type="button"
                  disabled={validated}
                  onClick={() => {
                    setRecStates((prev) => {
                      const next = [...prev] as RecState[];
                      next[index] = "correct";
                      return next;
                    });
                    setScored((prev) => {
                      const next = [...prev];
                      next[index] = true;
                      return next;
                    });
                  }}
                  className="rounded-full border border-[var(--color-accent-lecture)] px-3 py-1 text-xs font-bold text-[var(--color-accent-lecture)]"
                >
                  OK
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PronounceExercise({
  chain, onValidated, shouldValidate,
}: { chain: PronStep[]; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const [step] = useState(() => chain[Math.floor(Math.random() * chain.length)]!);
  const [recState, setRecState] = useState<"idle" | "listening" | "correct" | "wrong">("idle");
  const recRef = useRef<unknown>(null);
  const [scored, setScored] = useState(false);
  const [pendingScore, setPendingScore] = useState(0);
  const [validated, setValidated] = useState(false);

  function startListening() {
    if (recState === "listening") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "fr-CH";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.onstart = () => setRecState("listening");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (e: any) => {
      let matched = false;
      for (let a = 0; a < e.results[0].length; a++) {
        const t: string = e.results[0][a].transcript.trim();
        if (isMatch(t, step.word)) { matched = true; break; }
      }
      setRecState("idle");
      if (!scored) { setScored(true); setPendingScore(matched ? 3 : 0); }
    };
    rec.onerror = () => setRecState("idle");
    rec.onend = () => setRecState((s) => s === "listening" ? "idle" : s);
    recRef.current = rec;
    rec.start();
  }

  function manualScore(pts: number) {
    if (!scored) { setScored(true); setPendingScore(pts); }
    setRecState("idle");
  }

  const validateRef = useRef(() => {});
  validateRef.current = () => {
    if (validated) return;
    setValidated(true);
    onValidated(pendingScore, {
      kind: "pronounce", phoneme: step.phoneme, syllable: step.syllable, word: step.word, score: pendingScore,
    });
  };
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const srAvailable = typeof window !== "undefined" && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  return (
    <section className="space-y-5">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Prononcer le mot</h2>
      <div className={`flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border-2 px-6 py-6 text-center transition-colors ${
        recState === "correct" ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
          : recState === "wrong" ? "border-red-400 bg-red-50 dark:bg-red-900/20"
            : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
      }`}>
        <span className="text-sm text-[var(--color-text-secondary)]">
          <span className="font-bold" style={{ color: "var(--color-accent-lecture)" }}>{step.phoneme}</span>
          {" → "}{step.syllable}{" → "}
          <span className="font-bold text-[var(--color-text-primary)]">{step.word}</span>
        </span>
        <span className="text-4xl font-bold text-[var(--color-text-primary)]">{step.word}</span>
        <button type="button" onClick={() => playWord(step.word)}
          className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-text-secondary)]/20 text-[var(--color-text-secondary)]"
          aria-label={`Écouter ${step.word}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        </button>
      </div>

      {srAvailable ? (
        <div className="flex flex-col items-center gap-3">
          <button type="button" onClick={startListening} disabled={recState === "listening" || validated}
            className={`flex h-20 w-20 items-center justify-center rounded-full shadow-md transition-all active:scale-95 ${
              recState === "listening" ? "animate-pulse bg-red-500 text-white"
                : recState === "correct" ? "bg-[var(--color-accent-lecture)] text-white"
                  : recState === "wrong" ? "bg-red-400 text-white"
                    : "bg-[var(--color-accent-lecture)] text-white hover:opacity-90"
            }`} aria-label="Parler">
            {recState === "correct"
              ? <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
              : recState === "wrong"
                ? <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
                : <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" /></svg>
            }
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-[var(--color-text-secondary)]">Auto-évaluation — as-tu réussi à prononcer le mot ?</p>
          <div className="flex gap-3">
            <button type="button" onClick={() => manualScore(3)} disabled={scored}
              className="flex h-11 items-center gap-2 rounded-[var(--radius-lg)] bg-[var(--color-accent-lecture)] px-5 text-sm font-bold text-white disabled:opacity-50">
              Oui ✓
            </button>
            <button type="button" onClick={() => manualScore(0)} disabled={scored}
              className="flex h-11 items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-5 text-sm font-medium text-[var(--color-text-secondary)] disabled:opacity-50">
              Non ✗
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── Complex-sound variants (L7) ─────────────────────────────────────────────

// Grapheme grid (4 pts / 2 pts partial) — like GridExercise but with multi-letter
// graphemes (OU, GN, TION…) mixed among syllable distractors.
function ComplexGridExercise({
  label, onValidated, shouldValidate,
}: { label: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const targets = useMemo(() => complexTargets(label), [label]);
  const [isUpper] = useState(() => Math.random() > 0.5);
  const [grid] = useState(() => makeComplexGrid(targets, isUpper));
  const [states, setStates] = useState<CellState[]>(() => Array(25).fill("idle"));
  const [validated, setValidated] = useState(false);

  function validate() {
    if (validated) return;
    setValidated(true);
    const newStates = states.map((s, i) => {
      const isT = targets.includes(normalizeGraph(grid[i]!));
      if (s === "selected") return isT ? "correct" : "wrong";
      if (isT) return "missed" as CellState;
      return "idle" as CellState;
    });
    setStates(newStates);
    const correctCount = newStates.filter((s) => s === "correct").length;
    const wrongCount = newStates.filter((s) => s === "wrong").length;
    const missedCount = newStates.filter((s) => s === "missed").length;
    const targetTotal = correctCount + missedCount;
    const perfect = wrongCount === 0 && missedCount === 0;
    const halfPassed = correctCount >= Math.ceil(targetTotal / 2) && wrongCount === 0;
    const display = isUpper ? label.toUpperCase() : label.toLowerCase();
    onValidated(perfect ? 4 : halfPassed ? 2 : 0, { kind: "grid", grid, states: newStates, upper: display, lower: display });
  }

  const validateRef = useRef(validate);
  validateRef.current = validate;
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  function tap(i: number) {
    if (validated) return;
    setStates((prev) => {
      const next = [...prev] as CellState[];
      next[i] = prev[i] === "selected" ? "idle" : "selected";
      return next;
    });
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Reconnaître le graphème</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez toutes les cases{" "}
        <strong className="text-[var(--color-accent-lecture)]">{isUpper ? label.toUpperCase() : label.toLowerCase()}</strong>
      </p>
      <div className="grid grid-cols-5 gap-2">
        {grid.map((cell, i) => {
          const s = states[i]!;
          return (
            <button
              key={i}
              type="button"
              onClick={() => tap(i)}
              disabled={validated}
              className={`flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border text-lg font-bold transition-colors ${
                s === "correct" || s === "selected"
                  ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]"
                  : s === "wrong" || s === "missed"
                    ? "border-red-400 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] active:scale-95"
              }`}
            >
              {cell}
            </button>
          );
        })}
      </div>
    </section>
  );
}

// Spot the grapheme inside words (1 pt per fully-correct line × 4 lines).
function ComplexWordsExercise({
  label, upperWords, lowerWords, onValidated, shouldValidate,
}: { label: string; upperWords: string[]; lowerWords: string[]; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const targets = useMemo(() => complexTargets(label), [label]);
  const [words] = useState(() => {
    const up = shuffle(upperWords.filter((w) => w.length <= 10));
    const low = shuffle(lowerWords.filter((w) => w.length <= 10));
    return [
      (up[0] ?? label).toUpperCase(),
      (low[0] ?? label.toLowerCase()).toLowerCase(),
      (up[1] ?? label).toUpperCase(),
      (low[1] ?? label.toLowerCase()).toLowerCase(),
    ];
  });
  const [states, setStates] = useState<Record<string, CellState>>({});
  const [validated, setValidated] = useState(false);

  function validate() {
    if (validated) return;
    setValidated(true);
    const newStates: Record<string, CellState> = {};
    let total = 0;
    words.forEach((word, wi) => {
      const parts = splitComplexWord(word, targets);
      let lineOk = true;
      parts.forEach((part, ci) => {
        const key = `${wi}-${ci}`;
        const s = states[key] ?? "idle";
        if (part.hit) {
          newStates[key] = s === "selected" ? "correct" : "missed";
          if (s !== "selected") lineOk = false;
        } else if (s === "selected") {
          newStates[key] = "wrong";
          lineOk = false;
        }
      });
      if (lineOk) total++;
    });
    setStates(newStates);
    onValidated(total, { kind: "words", words, states: newStates, letter: label, letterLower: label.toLowerCase() });
  }

  const validateRef = useRef(validate);
  validateRef.current = validate;
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  function tap(wi: number, ci: number) {
    if (validated) return;
    const key = `${wi}-${ci}`;
    setStates((prev) => ({ ...prev, [key]: prev[key] === "selected" ? "idle" : "selected" }));
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Repérer dans les mots</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez le graphème{" "}
        <strong className="text-[var(--color-accent-lecture)]">{label}</strong> dans chaque mot
      </p>
      <ul className="space-y-2">
        {words.map((word, wi) => (
          <li key={wi} className="flex flex-nowrap items-center justify-center gap-0.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-2 py-2">
            {splitComplexWord(word, targets).map((part, ci) => {
              const key = `${wi}-${ci}`;
              const s = states[key] ?? "idle";
              return (
                <button
                  key={ci}
                  type="button"
                  disabled={validated}
                  onClick={() => tap(wi, ci)}
                  className={`flex h-8 min-w-7 shrink-0 items-center justify-center rounded-lg border px-1 text-base font-bold transition-colors ${
                    s === "correct" || s === "selected"
                      ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                      : s === "wrong" || s === "missed"
                        ? "border-red-400 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                        : "border-transparent text-[var(--color-text-primary)]"
                  }`}
                >
                  {part.text}
                </button>
              );
            })}
          </li>
        ))}
      </ul>
    </section>
  );
}

// Read grapheme syllables aloud (3 pts) — like SyllablesMixedExercise.
function ComplexSyllablesExercise({
  label, onValidated, shouldValidate,
}: { label: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const targets = useMemo(() => complexTargets(label), [label]);
  const [syllables] = useState(() => makeComplexSyllables(targets, "mixed"));
  const [recStates, setRecStates] = useState<RecState[]>(() => syllables.map(() => "idle"));
  const [heard, setHeard] = useState<string[]>(() => syllables.map(() => ""));
  const [scored, setScored] = useState<boolean[]>(() => syllables.map(() => false));
  const [validated, setValidated] = useState(false);
  const recRef = useRef<unknown>(null);

  function startListening(index: number) {
    if (validated || recStates[index] === "listening") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "fr-CH";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    setRecStates((prev) => { const next = [...prev] as RecState[]; next[index] = "listening"; return next; });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      let transcript = "";
      let matched = false;
      const want = normalizeGraph(syllables[index]!).replace(/\s+/gu, "");
      for (let a = 0; a < event.results[0].length; a++) {
        transcript = event.results[0][a].transcript.trim();
        const norm = normalizeGraph(transcript).replace(/\s+/gu, "");
        if (norm === want || norm.includes(want) || want.includes(norm)) { matched = true; break; }
      }
      setHeard((prev) => { const next = [...prev]; next[index] = transcript; return next; });
      setScored((prev) => { const next = [...prev]; next[index] = true; return next; });
      setRecStates((prev) => { const next = [...prev] as RecState[]; next[index] = matched ? "correct" : "wrong"; return next; });
    };
    rec.onerror = () => setRecStates((prev) => { const next = [...prev] as RecState[]; next[index] = "idle"; return next; });
    rec.onend = () => setRecStates((prev) => { const next = [...prev] as RecState[]; if (next[index] === "listening") next[index] = "idle"; return next; });
    recRef.current = rec;
    rec.start();
  }

  const validateRef = useRef(() => {});
  validateRef.current = () => {
    if (validated) return;
    setValidated(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    const score = Math.min(3, recStates.filter((state) => state === "correct").length);
    onValidated(score, { kind: "syllables-mixed", syllables, states: recStates, heard, score });
  };
  useEffect(() => { if (shouldValidate) validateRef.current(); }, [shouldValidate]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const srAvailable = typeof window !== "undefined" && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Lire les syllabes</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Prononcez les syllabes affichées.</p>
      <div className="space-y-2">
        {syllables.map((syllable, index) => {
          const state = recStates[index]!;
          return (
            <div key={`${syllable}-${index}`} className={`flex min-h-16 items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-3 transition-colors ${
              state === "correct" ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
                : state === "wrong" ? "border-red-400 bg-red-50"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
            }`}>
              <span className="w-7 text-sm font-bold text-[var(--color-accent-lecture)]">{index + 1}.</span>
              <span className="flex-1 text-center text-2xl font-bold text-[var(--color-text-primary)]">{syllable}</span>
              <button
                type="button"
                onClick={() => startListening(index)}
                disabled={!srAvailable || validated || state === "listening"}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all active:scale-95 ${
                  state === "listening" ? "animate-pulse bg-red-500" : "bg-[var(--color-accent-lecture)]"
                } disabled:opacity-40`}
                aria-label={`Prononcer ${syllable}`}
              >
                {state === "correct"
                  ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                  : state === "wrong"
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" /></svg>
                }
              </button>
              {!srAvailable && !scored[index] && (
                <button
                  type="button"
                  disabled={validated}
                  onClick={() => {
                    setRecStates((prev) => { const next = [...prev] as RecState[]; next[index] = "correct"; return next; });
                    setScored((prev) => { const next = [...prev]; next[index] = true; return next; });
                  }}
                  className="rounded-full border border-[var(--color-accent-lecture)] px-3 py-1 text-xs font-bold text-[var(--color-accent-lecture)]"
                >
                  OK
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────

type ResultRow = { label: string; max: number };

function correctionStateClass(state: CellState) {
  if (state === "correct" || state === "missed") return "border-[var(--color-correction)] text-[var(--color-correction)]";
  if (state === "wrong") return "border-[var(--color-border-default)] text-sm text-[var(--color-text-primary)] line-through opacity-70";
  return "border-[var(--color-border-default)] text-[var(--color-text-primary)]";
}

function ReviewDetail({ snapshot }: { snapshot?: EvalSnapshot }) {
  if (!snapshot) return <p className="text-xs italic text-[var(--color-text-secondary)]">Aucune réponse enregistrée.</p>;
  if (snapshot.kind === "grid") {
    return <div className="grid grid-cols-5 gap-2">{snapshot.grid.map((cell, i) => (
      <div key={i} className={`flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border font-bold ${correctionStateClass(snapshot.states[i]!)}`}>{cell}</div>
    ))}</div>;
  }
  if (snapshot.kind === "words") {
    return <ul className="space-y-2">{snapshot.words.map((word, wi) => (
      <li key={wi} className="flex justify-center rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-3 py-2">
        {word.split("").map((char, ci) => {
          const state = snapshot.states[`${wi}-${ci}`] ?? "idle";
          return <span key={ci} className={`flex h-8 w-8 items-center justify-center rounded-lg border font-bold ${correctionStateClass(state)}`}>{char}</span>;
        })}
      </li>
    ))}</ul>;
  }
  if (snapshot.kind === "sound-image" || snapshot.kind === "sound-audio") {
    return <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{snapshot.labels.map((label, i) => (
      <div key={`${label}-${i}`} className={`flex min-h-24 flex-col items-center justify-center rounded-[var(--radius-lg)] border-2 p-2 ${correctionStateClass(snapshot.states[i]!)}`}>
        {snapshot.kind === "sound-image" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/assets/words/img/${getWordAssetSlug(label)}.webp`} alt={label} className="h-16 w-full object-contain" />
        )}
        <span className={snapshot.states[i] === "wrong" ? "text-xs line-through" : "text-xs"}>{label}</span>
        {snapshot.targets[i] && <span className="mt-1 text-center text-xs font-bold text-[var(--color-correction)]">Bonne réponse</span>}
      </div>
    ))}</div>;
  }
  if (snapshot.kind === "syllables-mixed") {
    return <ul className="space-y-2">{snapshot.syllables.map((syllable, i) => {
      const state = snapshot.states[i]!;
      const heard = snapshot.heard[i];
      return (
        <li key={`${syllable}-${i}`} className={`rounded-[var(--radius-lg)] border px-4 py-3 text-center ${
          state === "correct" ? "border-[var(--color-correction)] text-[var(--color-correction)]"
            : state === "wrong" ? "border-red-300 text-red-600"
              : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"
        }`}>
          {state === "wrong" && heard && <p className="text-xs line-through opacity-70">{heard}</p>}
          <p className="text-lg font-bold">{syllable}</p>
        </li>
      );
    })}</ul>;
  }
  if (snapshot.kind !== "pronounce") return null;
  return <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] p-4 text-center">
    <p className="text-sm text-[var(--color-text-secondary)]">{snapshot.phoneme} → {snapshot.syllable}</p>
    <p className="text-2xl font-bold text-[var(--color-correction)]">{snapshot.word}</p>
    <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{snapshot.score > 0 ? "Prononciation réussie" : "Prononciation à retravailler"}</p>
  </div>;
}

function ResultsScreen({ scores, snapshots, rows, maxScore }: { scores: (number | null)[]; snapshots: (EvalSnapshot | null)[]; rows: ResultRow[]; maxScore: number }) {
  const [selectedResultIdx, setSelectedResultIdx] = useState<number | null>(null);
  const total = scores.reduce<number>((s, v) => s + (v ?? 0), 0);
  const grade = linearSwissGrade(total, maxScore);
  const passGrade = getPassGrade();
  const passed = grade >= passGrade;

  return (
    <section className="space-y-4">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--color-correction)]">Résultats</p>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center justify-center p-3 text-center">
          <p className="text-[10px] text-[var(--color-text-secondary)]">Points</p>
          <p className="text-2xl font-bold text-[var(--color-text-primary)]">{total}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/{maxScore}</span></p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]"><div className={`h-full rounded-full ${passed ? "bg-[var(--color-accent-lecture)]" : "bg-red-400"}`} style={{ width: `${Math.round((total / maxScore) * 100)}%` }} /></div>
        </div>
        <div className="flex flex-col items-center justify-center p-3 text-center">
          <p className="text-[10px] text-[var(--color-text-secondary)]">Note</p>
          <p className="text-2xl font-bold text-[var(--color-text-primary)]">{grade.toFixed(1)}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/6</span></p>
        </div>
        <div className={`flex flex-col items-center justify-center rounded-xl border-2 bg-[var(--color-bg-primary)] p-3 text-center ${passed ? "border-green-500" : "border-red-400"}`}>
          <p className="text-[10px] text-[var(--color-text-secondary)]">Mention</p>
          <p className={`mt-1 text-sm font-bold ${passed ? "text-green-600" : "text-red-500"}`}>{passed ? "Réussi" : "À améliorer"}</p>
        </div>
      </div>
      <p className="text-center text-xs text-[var(--color-text-secondary)]">Cliquez sur un exercice pour voir la correction.</p>
      <ul className="space-y-2">
        {rows.map((row, i) => {
          const s = scores[i] ?? 0;
          const color = s === row.max ? "text-green-600" : s > 0 ? "text-amber-600" : "text-red-500";
          const isSelected = selectedResultIdx === i;
          return (
            <li key={i}>
              <button type="button" onClick={() => setSelectedResultIdx(isSelected ? null : i)} className={`flex min-h-11 w-full items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-3 text-left transition-colors ${isSelected ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"}`}>
                <span className="flex-1 text-sm text-[var(--color-text-primary)]">{row.label}</span>
                <span className={`text-sm font-bold ${color}`}>{s}/{row.max}</span>
                <svg className={`h-3 w-3 text-[var(--color-text-secondary)] transition-transform ${isSelected ? "rotate-90" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
              </button>
              {isSelected && <div className="px-1 py-3"><ReviewDetail snapshot={snapshots[i] ?? undefined} /></div>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function LectureEvaluation({ data, onBack, onDone, onEvalStepChange, onEvalTimeChange, onEvalNavigateReady }: Props) {
  const { letter, letterLower, phoneme, pronunciationChain } = data;
  const isComplex = data.type === "complex-sound";
  const evalSteps = useMemo(
    () => (data.type === "complex-sound" ? COMPLEX_EVAL_STEPS : data.type === "consonant" ? CONSONANT_EVAL_STEPS : BASE_EVAL_STEPS),
    [data.type],
  );
  // Word pools for the complex-sound spotting exercise (single grapheme lessons).
  const complexUpperWords = data.type === "complex-sound" ? data.upperWords : [];
  const complexLowerWords = data.type === "complex-sound" ? data.lowerWords : [];
  const exerciseSteps = useMemo(
    () => evalSteps.filter((entry): entry is Exclude<EvalStep, "results"> => entry !== "results"),
    [evalSteps],
  );
  const resultRows = useMemo(() => exerciseSteps.map((entry) => RESULT_ROW_BY_STEP[entry]), [exerciseSteps]);
  const maxScore = resultRows.reduce((sum, row) => sum + row.max, 0);
  const makeEmptyScores = () => exerciseSteps.map(() => null) as (number | null)[];
  const makeEmptySnapshots = () => exerciseSteps.map(() => null) as (EvalSnapshot | null)[];
  const makeEmptyValidated = () => exerciseSteps.map(() => false);
  const [stepIdx, setStepIdx] = useState(0);
  const [scores, setScores] = useState<(number | null)[]>(() => makeEmptyScores());
  const [snapshots, setSnapshots] = useState<(EvalSnapshot | null)[]>(() => makeEmptySnapshots());
  const [validated, setValidated] = useState<boolean[]>(() => makeEmptyValidated());
  const validatedRef = useRef(validated);
  const [validateTarget, setValidateTarget] = useState<number | null>(null);
  const [evalStarted, setEvalStarted] = useState(false);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const step = evalSteps[stepIdx]!;
  const isResults = step === "results";
  const showValidateBtn = evalStarted && !isResults && !validated[stepIdx];

  // Guard against leaving the evaluation (in progress) via the main nav.
  useRegisterEvalGuard(evalStarted && !isResults);

  // Timer
  useEffect(() => {
    if (!evalStarted || isResults || evalTimeLeft === null || evalTimeLeft <= 0) return;
    const id = setTimeout(() => setEvalTimeLeft((t) => Math.max(0, (t ?? 1) - 1)), 1000);
    return () => clearTimeout(id);
  }, [evalStarted, isResults, evalTimeLeft]);

  // End the evaluation when the timer reaches zero. Unvalidated exercises score zero.
  useEffect(() => {
    if (evalTimeLeft !== 0 || isResults) return;
    setValidateTarget(-1);
  }, [evalTimeLeft, isResults]);

  // Propagate timer to parent for display in progress bar
  useEffect(() => {
    onEvalTimeChange?.(evalStarted ? evalTimeLeft : null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evalTimeLeft, evalStarted]);

  function findRemaining(from: number, direction: 1 | -1, flags = validated) {
    for (let offset = 1; offset <= exerciseSteps.length; offset++) {
      const candidate = (from + direction * offset + exerciseSteps.length) % exerciseSteps.length;
      if (!flags[candidate]) return candidate;
    }
    return null;
  }

  function goNext() {
    if (isResults) {
      const total = scores.reduce<number>((s, v) => s + (v ?? 0), 0);
      const grade = linearSwissGrade(total, maxScore);
      onDone(grade, grade >= getPassGrade(), total);
      return;
    }
    const next = findRemaining(stepIdx, 1);
    if (next !== null) setStepIdx(next);
  }

  function goPrevious() {
    if (isResults) return;
    const previous = findRemaining(stepIdx, -1);
    if (previous !== null) setStepIdx(previous);
  }

  useEffect(() => {
    onEvalNavigateReady?.((index) => {
      if (index >= 0 && index < exerciseSteps.length && !validated[index]) setStepIdx(index);
    });
  }, [onEvalNavigateReady, validated, exerciseSteps.length]);

  function recordScore(exIdx: number, score: number, snapshot: EvalSnapshot) {
    setScores((prev) => { const next = [...prev]; next[exIdx] = score; return next; });
    setSnapshots((prev) => { const next = [...prev]; next[exIdx] = snapshot; return next; });
    const nextValidated = validatedRef.current.map((done, i) => done || i === exIdx);
    validatedRef.current = nextValidated;
    setValidated(nextValidated);
    setValidateTarget(null);
    const next = findRemaining(exIdx, 1, nextValidated);
    setStepIdx(next ?? evalSteps.length - 1);
  }

  const progressIdx = isResults ? exerciseSteps.length : stepIdx;

  useEffect(() => {
    if (!evalStarted) {
      onEvalStepChange?.(0, exerciseSteps.length, validated, false);
    } else {
      onEvalStepChange?.(progressIdx, exerciseSteps.length, validated, isResults);
    }
  }, [progressIdx, exerciseSteps.length, onEvalStepChange, evalStarted, validated, isResults]);

  return (
    <div className="w-full flex-1 pb-56">
      {/* Cancel confirmation dialog */}
      {showCancelConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
          <div className="bg-[var(--color-bg-primary)] rounded-[var(--radius-lg)] p-6 mx-4 max-w-sm w-full space-y-4 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Annuler l&apos;évaluation ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Votre progression sera perdue. Vous pourrez recommencer depuis le début.</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                Continuer l&apos;évaluation
              </button>
              <button
                type="button"
                onClick={() => {
                  setEvalStarted(false);
                  setEvalTimeLeft(null);
                  setStepIdx(0);
                  const emptyScores = makeEmptyScores();
                  const emptySnapshots = makeEmptySnapshots();
                  const emptyValidated = makeEmptyValidated();
                  setScores(emptyScores);
                  setSnapshots(emptySnapshots);
                  setValidated(emptyValidated);
                  validatedRef.current = emptyValidated;
                  setValidateTarget(null);
                  setShowCancelConfirm(false);
                }}
                className="flex-1 rounded-[var(--radius-lg)] bg-red-500 px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-[280px]">
        {/* Start screen */}
        {!evalStarted && !isResults && (
          <EvalAnnounceScreen
            accent="var(--color-accent-lecture)"
            minutes={5}
            onStart={() => { setEvalStarted(true); setEvalTimeLeft(5 * 60); }}
          />
        )}

        {/* Exercises (shown only when started) */}
        {evalStarted && (
          <>
            <div hidden={isResults || stepIdx !== 0}>
              {isComplex
                ? <ComplexGridExercise label={letter} onValidated={(s, snapshot) => recordScore(0, s, snapshot)} shouldValidate={validateTarget === 0 || validateTarget === -1} />
                : <GridExercise upper={letter} lower={letterLower} onValidated={(s, snapshot) => recordScore(0, s, snapshot)} shouldValidate={validateTarget === 0 || validateTarget === -1} />}
            </div>
            <div hidden={isResults || stepIdx !== 1}>
              {isComplex
                ? <ComplexWordsExercise label={letter} upperWords={complexUpperWords} lowerWords={complexLowerWords} onValidated={(s, snapshot) => recordScore(1, s, snapshot)} shouldValidate={validateTarget === 1 || validateTarget === -1} />
                : <WordsExercise letter={letter} letterLower={letterLower} onValidated={(s, snapshot) => recordScore(1, s, snapshot)} shouldValidate={validateTarget === 1 || validateTarget === -1} />}
            </div>
            <div hidden={isResults || stepIdx !== 2}><SoundImageExercise phoneme={phoneme} onValidated={(s, snapshot) => recordScore(2, s, snapshot)} shouldValidate={validateTarget === 2 || validateTarget === -1} /></div>
            <div hidden={isResults || stepIdx !== 3}><SoundAudioExercise phoneme={phoneme} onValidated={(s, snapshot) => recordScore(3, s, snapshot)} shouldValidate={validateTarget === 3 || validateTarget === -1} /></div>
            {data.type === "consonant" || isComplex ? (
              <>
                <div hidden={isResults || stepIdx !== 4}>
                  {isComplex
                    ? <ComplexSyllablesExercise label={letter} onValidated={(s, snapshot) => recordScore(4, s, snapshot)} shouldValidate={validateTarget === 4 || validateTarget === -1} />
                    : <SyllablesMixedExercise letter={letterLower} onValidated={(s, snapshot) => recordScore(4, s, snapshot)} shouldValidate={validateTarget === 4 || validateTarget === -1} />}
                </div>
                <div hidden={isResults || stepIdx !== 5}><PronounceExercise chain={pronunciationChain} onValidated={(s, snapshot) => recordScore(5, s, snapshot)} shouldValidate={validateTarget === 5 || validateTarget === -1} /></div>
              </>
            ) : (
              <div hidden={isResults || stepIdx !== 4}><PronounceExercise chain={pronunciationChain} onValidated={(s, snapshot) => recordScore(4, s, snapshot)} shouldValidate={validateTarget === 4 || validateTarget === -1} /></div>
            )}
          </>
        )}

        {/* Results (always visible when reached) */}
        {isResults && (
          <ResultsScreen scores={scores} snapshots={snapshots} rows={resultRows} maxScore={maxScore} />
        )}
      </div>

      <div className="hidden fixed bottom-0 left-0 right-0 bg-[var(--color-bg-primary)] z-40">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={() => {
                if (evalStarted && !isResults) goPrevious();
                else onBack();
              }}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]">
              <IconLeft /> Retour
            </button>

            <div className="flex items-center gap-2">
              {evalStarted && showValidateBtn && (
                <button type="button" onClick={() => setValidateTarget(stepIdx)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90"
                  aria-label="Valider">
                  <IconCheck />
                </button>
              )}
              <button type="button" onClick={() => import("@/lib/utils/print").then(m => m.triggerPrint())} data-no-print
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--color-accent-lecture)] text-[var(--color-accent-lecture)] transition-colors hover:bg-[var(--color-accent-lecture)]/10"
                aria-label="Imprimer en PDF">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9V2h12v7"/><rect x="6" y="14" width="12" height="8" rx="1"/>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                  <circle cx="18" cy="13" r="0.5" fill="currentColor"/>
                </svg>
              </button>
            </div>

            <button type="button" onClick={goNext}
              disabled={!isResults && !evalStarted}
              className={`flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] px-5 text-sm font-bold text-white transition-opacity ${
                isResults || evalStarted ? "bg-[var(--color-accent-lecture)] hover:opacity-90" : "bg-[var(--color-accent-lecture)] opacity-40 cursor-not-allowed"
              }`}>
              {isResults ? (<>Terminer <IconCheck /></>) : (<>Suivant <IconRight /></>)}
            </button>
          </div>
        </div>
        {/* Spacer covers the main nav area so scrolled content can't show through */}
        <div className="h-[72px]" />
      </div>
    </div>
  );
}
