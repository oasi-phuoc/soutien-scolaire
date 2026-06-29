"use client";

import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EvalProgressBar from "@/components/math/EvalProgressBar";
import type { LetterData, ReadingGrid } from "@/lib/curriculum/lecture-data";
import { DiscoverSound } from "./DiscoverSound";
import { VowelRecall } from "./VowelRecall";
import { LetterGrid, type LetterGridHandle } from "./LetterGrid";
import { WordSpotter, type WordSpotterHandle } from "./WordSpotter";
import { SoundPicker, type SoundPickerHandle } from "./SoundPicker";
import { SyllableGrid } from "./SyllableGrid";
import { PronunciationChain, type PronunciationChainHandle } from "./PronunciationChain";
import {
  loadLectureProgress,
  saveLectureProgress,
  markSubmoduleCompleted,
  saveEvaluationResult,
} from "@/lib/progress/lecture-progress";
import { LectureEvaluation } from "./LectureEvaluation";
import { speak } from "@/lib/utils/speech";
import { getWordAudioPath } from "@/lib/utils/audio";

interface Props {
  data: LetterData;
  moduleId: string;
}

type Step = { key: string; label: string };
type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";

function getSteps(data: LetterData): Step[] {
  if (data.type === "complex-sound") {
    return [
      { key: "discover-complex", label: "Découverte" },
      { key: "complex-grid-upper", label: "Majuscules" },
      { key: "complex-grid-lower", label: "Minuscules" },
      { key: "complex-word-upper", label: "Mots (MAJ)" },
      { key: "complex-word-lower", label: "Mots (min)" },
      { key: "sound-image", label: "Images" },
      { key: "sound-audio", label: "Audio" },
      { key: "complex-syllables-cv", label: "Syllabes" },
      { key: "pronounce-complex", label: "Prononcer" },
    ];
  }
  if (data.type === "syllable" || data.type === "monosyllable" || data.type === "multisyllable") {
    return data.grids.map((grid) => ({ key: grid.key, label: grid.label }));
  }
  if (data.type === "vowel") {
    return [
      { key: "discover", label: "Découverte" },
      { key: "grid-upper", label: "Majuscules" },
      { key: "grid-lower", label: "Minuscules" },
      { key: "word-upper", label: "Mots (MAJ)" },
      { key: "word-lower", label: "Mots (min)" },
      { key: "sound-image", label: "Images" },
      { key: "sound-audio", label: "Audio" },
      { key: "pronounce", label: "Prononcer" },
      { key: "eval", label: "Évaluation" },
    ];
  }
  return [
    { key: "discover", label: "Découverte" },
    { key: "vowel-recall", label: "Voyelles" },
    { key: "grid-upper", label: "Majuscules" },
    { key: "grid-lower", label: "Minuscules" },
    { key: "word-upper-1", label: "Mots 1" },
    { key: "word-lower", label: "Mots (min)" },
    { key: "sound-image", label: "Images" },
    { key: "sound-audio", label: "Audio" },
    { key: "syllables-cv", label: "Syllabes" },
    { key: "syllables-vc", label: "Syllabes inverses" },
    { key: "syllables-mixed", label: "Syllabes mixtes" },
    { key: "pronounce", label: "Prononcer" },
    { key: "eval", label: "Évaluation" },
  ];
}

function ReadingGridView({ grid }: { grid: ReadingGrid }) {
  const [resetSeed, setResetSeed] = useState(0);
  const items = useMemo(() => {
    void resetSeed;
    return shuffle(grid.items).slice(0, 25);
  }, [grid.items, resetSeed]);

  function playItem(item: string) {
    const spoken = item.replaceAll("-", "");
    new Audio(getWordAudioPath(spoken)).play().catch(() => speak(spoken));
  }

  return (
    <section className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-lecture)]">{grid.label}</p>
          <h2 className="mt-1 text-xl font-bold text-[var(--color-text-primary)]">Lisez chaque mot.</h2>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Touchez une carte pour écouter le mot.</p>
        </div>
        <button
          type="button"
          aria-label="Recommencer"
          onClick={() => setResetSeed((value) => value + 1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-white text-[var(--color-text-secondary)] active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M1 4v6h6" />
            <path d="M3.51 15a9 9 0 1 0 .49-4" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {items.map((item, index) => (
          <button
            type="button"
            key={`${item}-${index}-${resetSeed}`}
            onClick={() => playItem(item)}
            className="flex aspect-square items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-1 text-center text-lg font-bold text-[var(--color-text-primary)] shadow-sm active:scale-95"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

type SyllableRecState = "idle" | "listening" | "correct" | "wrong";

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j]!, next[i]!];
  }
  return next;
}

function randomCaseText(text: string): string {
  return Math.random() > 0.5 ? text.toUpperCase() : text.toLowerCase();
}

function makeDynamicSyllables(items: string[]) {
  return shuffle(items).slice(0, 25).map(randomCaseText);
}

function normalizeSpeechText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .replace(/\s+/gu, "")
    .toLowerCase();
}

function syllableMatches(transcript: string, target: string) {
  const heard = normalizeSpeechText(transcript);
  const wanted = normalizeSpeechText(target);
  const aliases = new Set([wanted, wanted.replace(/y/gu, "i")]);
  return Array.from(aliases).some((alias) => heard === alias || heard.includes(alias));
}

function SyllableReadingGridView({ grid }: { grid: ReadingGrid }) {
  const [resetSeed, setResetSeed] = useState(0);
  const syllables = useMemo(() => {
    void resetSeed;
    return makeDynamicSyllables(grid.items);
  }, [grid.items, resetSeed]);
  const [states, setStates] = useState<SyllableRecState[]>(() => Array(25).fill("idle"));
  const [heard, setHeard] = useState<string[]>(() => Array(25).fill(""));
  const recRef = useRef<unknown>(null);

  function reset() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    setResetSeed((value) => value + 1);
    setStates(Array(25).fill("idle"));
    setHeard(Array(25).fill(""));
  }

  function startListening(index: number) {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "fr-CH";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;

    rec.onstart = () => {
      setStates((prev) => prev.map((state, i) => (i === index ? "listening" : state)));
      setHeard((prev) => prev.map((value, i) => (i === index ? "" : value)));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      let best = event.results[0]?.[0]?.transcript?.trim?.() ?? "";
      let matched = false;
      for (let alt = 0; alt < event.results[0].length; alt++) {
        const transcript = event.results[0][alt].transcript.trim();
        if (syllableMatches(transcript, syllables[index]!)) {
          best = transcript;
          matched = true;
          break;
        }
      }
      setHeard((prev) => prev.map((value, i) => (i === index ? best : value)));
      setStates((prev) => prev.map((state, i) => (i === index ? (matched ? "correct" : "wrong") : state)));
    };
    rec.onerror = () => setStates((prev) => prev.map((state, i) => (i === index ? "idle" : state)));
    rec.onend = () => setStates((prev) => prev.map((state, i) => (i === index && state === "listening" ? "idle" : state)));

    recRef.current = rec;
    rec.start();
  }

  return (
    <section className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Lire les syllabes</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Lisez chaque syllabe puis prononcez-la.</p>
        </div>
        <button
          type="button"
          aria-label="Recommencer"
          onClick={reset}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M1 4v6h6" />
            <path d="M3.51 15a9 9 0 1 0 .49-4" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {syllables.map((syllable, index) => {
          const state = states[index]!;
          return (
            <div
              key={`${syllable}-${index}-${resetSeed}`}
              className={`relative flex aspect-square flex-col items-center justify-center rounded-[var(--radius-lg)] border bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors ${
                state === "correct"
                  ? "border-[var(--color-accent-lecture)] text-[var(--color-accent-lecture)]"
                  : state === "wrong"
                    ? "border-red-400 text-red-600"
                    : "border-[var(--color-border-default)]"
              }`}
            >
              <button
                type="button"
                onClick={() => speak(syllable)}
                className="flex h-full w-full items-center justify-center rounded-[var(--radius-lg)] text-xl font-bold active:scale-95"
              >
                {syllable}
              </button>
              <button
                type="button"
                onClick={() => startListening(index)}
                disabled={state === "listening"}
                className={`absolute bottom-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-white shadow-sm ${
                  state === "listening"
                    ? "animate-pulse bg-red-500"
                    : state === "correct"
                      ? "bg-[var(--color-accent-lecture)]"
                      : state === "wrong"
                        ? "bg-red-400"
                        : "bg-[var(--color-accent-lecture)]"
                }`}
                aria-label="Parler"
              >
                {state === "correct" ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : state === "wrong" ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </button>
              {state === "wrong" && heard[index] && (
                <span className="sr-only">J&apos;ai entendu {heard[index]}</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function normalizeGraph(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase();
}

function complexTargets(label: string) {
  const key = normalizeGraph(label);
  if (key.includes("an") || key.includes("en")) return ["an", "en", "am", "em"];
  if (key.includes("in") || key.includes("ain")) return ["in", "ain", "ein", "im", "aim"];
  if (key.includes("on")) return ["on", "om"];
  if (key.includes("au") || key.includes("eau")) return ["au", "eau"];
  if (key.includes("ou")) return ["ou"];
  if (key.includes("oi")) return ["oi"];
  if (key.includes("ch")) return ["ch"];
  if (key.includes("ph")) return ["ph"];
  return key.split(/\s*\/\s*/u).map((entry) => entry.replace(/[^a-z]/gu, "")).filter(Boolean);
}

function makeComplexGrid(targets: string[], isUppercase: boolean) {
  const distractors = ["la", "ri", "ma", "to", "be", "su", "fe", "po", "di", "ve", "ra", "mi", "lo", "te", "nu"]
    .filter((entry) => !targets.includes(entry));
  const targetCount = 6 + Math.floor(Math.random() * 4);
  const cells = [
    ...Array.from({ length: targetCount }, (_, i) => targets[i % targets.length]!),
    ...Array.from({ length: 25 - targetCount }, () => distractors[Math.floor(Math.random() * distractors.length)]!),
  ];
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j]!, cells[i]!];
  }
  return cells.map((cell) => (isUppercase ? cell.toUpperCase() : cell.toLowerCase()));
}

const SYLLABLE_CONSONANTS = ["b", "d", "f", "l", "m", "n", "p", "r", "s", "t", "v"];

function makeComplexSyllables(targets: string[], mode: "cv" | "vc" | "mixed"): string[] {
  const cons = shuffle([...SYLLABLE_CONSONANTS]);
  const result: string[] = [];
  for (let i = 0; i < 6; i++) {
    const c1 = cons[i % cons.length]!;
    const c2 = cons[(i + 4) % cons.length]!;
    const g = targets[i % targets.length]!;
    const syl = mode === "cv" ? `${c1}${g}` : mode === "vc" ? `${g}${c1}` : `${c1}${g}${c2}`;
    result.push(Math.random() > 0.5 ? syl.toUpperCase() : syl.toLowerCase());
  }
  return shuffle(result);
}

const ComplexGraphemeGrid = forwardRef<LetterGridHandle, {
  target: string;
  isUppercase: boolean;
}>(function ComplexGraphemeGrid({
  target,
  isUppercase,
}, ref) {
  const targets = complexTargets(target);
  const [grid, setGrid] = useState(() => makeComplexGrid(targets, isUppercase));
  const [states, setStates] = useState<CellState[]>(() => Array(25).fill("idle"));
  const [validated, setValidated] = useState(false);

  function reset() {
    setGrid(makeComplexGrid(targets, isUppercase));
    setStates(Array(25).fill("idle"));
    setValidated(false);
  }

  function validate() {
    if (validated) return;
    setValidated(true);
    setStates((prev) =>
      prev.map((state, index) => {
        const isTarget = targets.includes(normalizeGraph(grid[index]!));
        if (state === "selected") return isTarget ? "correct" : "wrong";
        if (isTarget) return "missed";
        return "idle";
      }),
    );
  }

  useImperativeHandle(ref, () => ({ reset, validate }));

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Reconnaître le graphème</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez chaque{" "}
        <strong className="text-[var(--color-accent-lecture)]">
          {isUppercase ? target.toUpperCase() : target.toLowerCase()}
        </strong>
      </p>
      <div className="grid grid-cols-5 gap-2">
        {grid.map((cell, index) => {
          const state = states[index]!;
          return (
            <button
              key={`${cell}-${index}`}
              type="button"
              onClick={() => {
                if (validated) return;
                setStates((prev) => {
                  const next = [...prev];
                  next[index] = prev[index] === "selected" ? "idle" : "selected";
                  return next;
                });
              }}
              disabled={validated}
              className={`flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border text-xl font-bold transition-colors ${
                state === "correct"
                  ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]"
                  : state === "wrong" || state === "missed"
                    ? "border-red-400 bg-red-50 text-red-700"
                    : state === "selected"
                      ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]"
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
});

function splitComplexWord(word: string, targets: string[]) {
  const sorted = [...targets].sort((a, b) => b.length - a.length);
  const chunks: Array<{ text: string; hit: boolean }> = [];
  for (let i = 0; i < word.length;) {
    const rest = normalizeGraph(word.slice(i));
    const found = sorted.find((target) => rest.startsWith(target));
    if (found) {
      for (let offset = 0; offset < found.length; offset++) {
        chunks.push({ text: word.slice(i + offset, i + offset + 1), hit: true });
      }
      i += found.length;
    } else {
      chunks.push({ text: word.slice(i, i + 1), hit: false });
      i += 1;
    }
  }
  return chunks;
}

const ComplexWordSpotter = forwardRef<WordSpotterHandle, { words: string[]; target: string; isUppercase: boolean }>(
  function ComplexWordSpotter({ words, target, isUppercase }, ref) {
  const targets = complexTargets(target);
  const VISIBLE = Math.min(8, words.length);
  const [selectedWords, setSelectedWords] = useState(() => shuffle(words).slice(0, VISIBLE));
  const displayedWords = selectedWords.map((word) => (isUppercase ? word.toUpperCase() : word.toLowerCase()));
  const [states, setStates] = useState<Record<string, CellState>>({});
  const [validated, setValidated] = useState(false);

  function reset() {
    setSelectedWords(shuffle(words).slice(0, VISIBLE));
    setStates({});
    setValidated(false);
  }

  function validate() {
    if (validated) return;
    setValidated(true);
    const next: Record<string, CellState> = {};
    displayedWords.forEach((word, wordIndex) => {
      splitComplexWord(word, targets).forEach((part, partIndex) => {
        const key = `${wordIndex}-${partIndex}`;
        const state = states[key] ?? "idle";
        if (state === "selected") next[key] = part.hit ? "correct" : "wrong";
        else if (part.hit) next[key] = "missed";
      });
    });
    setStates(next);
  }

  useImperativeHandle(ref, () => ({ reset, validate }));

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Repérer dans les mots</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez le graphème{" "}
        <strong className="text-[var(--color-accent-lecture)]">{target}</strong>{" "}
        dans chaque mot.
      </p>
      <ul className="space-y-2">
        {displayedWords.map((word, wordIndex) => (
          <li
            key={`${word}-${wordIndex}`}
            className="flex flex-wrap items-center justify-center gap-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-3"
          >
            {splitComplexWord(word, targets).map((part, partIndex) => {
              const key = `${wordIndex}-${partIndex}`;
              const state = states[key] ?? "idle";
              return (
                <button
                  key={key}
                  type="button"
                  disabled={validated}
                  onClick={() => {
                    if (validated) return;
                    setStates((prev) => ({
                      ...prev,
                      [key]: prev[key] === "selected" ? "idle" : "selected",
                    }));
                  }}
                  className={`flex min-h-8 min-w-8 items-center justify-center rounded-lg border px-1.5 text-base font-bold transition-colors ${
                    state === "correct"
                      ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                      : state === "wrong" || state === "missed"
                        ? "border-red-400 bg-red-100 text-red-600"
                        : state === "selected"
                          ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
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
  },
);

function ComplexSyllableGrid({ target, mode }: { target: string; mode: "cv" | "vc" | "mixed" }) {
  const targets = complexTargets(target);
  const [syllables, setSyllables] = useState(() => makeComplexSyllables(targets, mode));
  const [states, setStates] = useState<("idle" | "listening" | "correct" | "wrong")[]>(() => Array(6).fill("idle"));
  const [heard, setHeard] = useState<string[]>(() => Array(6).fill(""));
  const recRef = useRef<unknown>(null);

  function reset() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    recRef.current = null;
    setSyllables(makeComplexSyllables(complexTargets(target), mode));
    setStates(Array(6).fill("idle"));
    setHeard(Array(6).fill(""));
  }

  function startListening(index: number) {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "fr-CH";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.onstart = () => {
      setStates((prev) => prev.map((s, i) => (i === index ? "listening" : s)));
      setHeard((prev) => prev.map((v, i) => (i === index ? "" : v)));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      let best = event.results[0]?.[0]?.transcript?.trim?.() ?? "";
      let matched = false;
      for (let alt = 0; alt < event.results[0].length; alt++) {
        const transcript = event.results[0][alt].transcript.trim();
        const norm = normalizeGraph(transcript).replace(/\s+/gu, "");
        const want = normalizeGraph(syllables[index]!).replace(/\s+/gu, "");
        if (norm === want || norm.includes(want)) {
          best = transcript;
          matched = true;
          break;
        }
      }
      setHeard((prev) => prev.map((v, i) => (i === index ? best : v)));
      setStates((prev) => prev.map((s, i) => (i === index ? (matched ? "correct" : "wrong") : s)));
    };
    rec.onerror = () => setStates((prev) => prev.map((s, i) => (i === index ? "idle" : s)));
    rec.onend = () => setStates((prev) => prev.map((s, i) => (i === index && s === "listening" ? "idle" : s)));
    recRef.current = rec;
    rec.start();
  }

  return (
    <section className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Lire les syllabes</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">Prononcez chaque syllabe à voix haute.</p>
        </div>
        <button type="button" aria-label="Recommencer" onClick={reset}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] active:scale-95">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" />
          </svg>
        </button>
      </div>
      <div className="space-y-2">
        {syllables.map((syl, i) => {
          const state = states[i]!;
          return (
            <div
              key={`${syl}-${i}`}
              className={`grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-[var(--radius-md)] border-2 px-3 py-2 transition-colors ${
                state === "correct"
                  ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
                  : state === "wrong"
                    ? "border-red-300 bg-[var(--color-bg-primary)]"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
              }`}
            >
              <span className="w-5 text-sm font-bold text-[var(--color-accent-lecture)]">{i + 1}.</span>
              <button
                type="button"
                onClick={() => startListening(i)}
                disabled={state === "listening"}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-transform active:scale-95 ${
                  state === "listening"
                    ? "animate-pulse bg-red-500"
                    : state === "correct"
                      ? "bg-[var(--color-accent-lecture)]"
                      : state === "wrong"
                        ? "bg-red-400"
                        : "bg-[var(--color-accent-lecture)]"
                }`}
                aria-label="Parler"
              >
                {state === "correct" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                ) : state === "wrong" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </button>
              <span className="min-h-12 px-4 text-left text-xl font-bold leading-[3rem] text-[var(--color-text-primary)]">
                {syl}
              </span>
              <button
                type="button"
                onClick={() => speak(syl)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-secondary)]/15 text-[var(--color-text-secondary)] transition-opacity hover:opacity-75 active:scale-95"
                aria-label={`Écouter ${syl}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
              {state === "wrong" && heard[i] && (
                <p className="col-span-4 pl-8 text-xs text-red-500">J&apos;ai entendu: {heard[i]}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Word pronunciation grid — same mic/word/audio row layout as the complex-sound
// syllable step, but driven by a fixed word list (used for the L6.1 tool words).
function WordPronounceGrid({ words, timerSeconds }: { words: string[]; timerSeconds?: number }) {
  const unique = useMemo(() => Array.from(new Set(words)), [words]);
  const [items, setItems] = useState<string[]>(() => shuffle(unique));
  const [states, setStates] = useState<("idle" | "listening" | "correct" | "wrong")[]>(() => Array(unique.length).fill("idle"));
  const [heard, setHeard] = useState<string[]>(() => Array(unique.length).fill(""));
  const [timeLeft, setTimeLeft] = useState<number>(timerSeconds ?? 0);
  const recRef = useRef<unknown>(null);

  // Countdown timer (timed steps only). Stops at 0; reset restarts it.
  useEffect(() => {
    if (!timerSeconds || timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => (t <= 1 ? 0 : t - 1)), 1000);
    return () => clearInterval(id);
  }, [timerSeconds, timeLeft]);

  const timeUp = !!timerSeconds && timeLeft <= 0;

  function reset() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    recRef.current = null;
    setItems(shuffle(unique));
    setStates(Array(unique.length).fill("idle"));
    setHeard(Array(unique.length).fill(""));
    if (timerSeconds) setTimeLeft(timerSeconds);
  }

  function playWord(word: string) {
    new Audio(getWordAudioPath(word)).play().catch(() => speak(word));
  }

  function startListening(index: number) {
    if (typeof window === "undefined" || timeUp) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "fr-CH";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.onstart = () => {
      setStates((prev) => prev.map((s, i) => (i === index ? "listening" : s)));
      setHeard((prev) => prev.map((v, i) => (i === index ? "" : v)));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      let best = event.results[0]?.[0]?.transcript?.trim?.() ?? "";
      let matched = false;
      const want = normalizeGraph(items[index]!).replace(/\s+/gu, "");
      for (let alt = 0; alt < event.results[0].length; alt++) {
        const transcript = event.results[0][alt].transcript.trim();
        const norm = normalizeGraph(transcript).replace(/\s+/gu, "");
        if (norm === want || norm.includes(want) || want.includes(norm)) {
          best = transcript;
          matched = true;
          break;
        }
      }
      setHeard((prev) => prev.map((v, i) => (i === index ? best : v)));
      setStates((prev) => prev.map((s, i) => (i === index ? (matched ? "correct" : "wrong") : s)));
    };
    rec.onerror = () => setStates((prev) => prev.map((s, i) => (i === index ? "idle" : s)));
    rec.onend = () => setStates((prev) => prev.map((s, i) => (i === index && s === "listening" ? "idle" : s)));
    recRef.current = rec;
    rec.start();
  }

  return (
    <section className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Lire les mots</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {timerSeconds ? "Lisez les 10 mots avant la fin du temps." : "Prononcez chaque mot à voix haute."}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {timerSeconds ? (
            <span className={`rounded-full px-2.5 py-1 text-sm font-bold tabular-nums ${
              timeUp ? "bg-red-100 text-red-600" : "bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
            }`}>
              {`${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`}
            </span>
          ) : null}
          <button type="button" aria-label="Recommencer" onClick={reset}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] active:scale-95">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" />
            </svg>
          </button>
        </div>
      </div>
      {timeUp && (
        <p className="rounded-[var(--radius-md)] bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/20">
          Temps écoulé ! Appuyez sur recommencer pour réessayer.
        </p>
      )}
      <div className="space-y-2">
        {items.map((word, i) => {
          const state = states[i]!;
          return (
            <div
              key={`${word}-${i}`}
              className={`grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-[var(--radius-md)] border-2 px-3 py-2 transition-colors ${
                state === "correct"
                  ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
                  : state === "wrong"
                    ? "border-red-300 bg-[var(--color-bg-primary)]"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
              }`}
            >
              <span className="w-5 text-sm font-bold text-[var(--color-accent-lecture)]">{i + 1}.</span>
              <button
                type="button"
                onClick={() => startListening(i)}
                disabled={state === "listening" || (timeUp && state !== "correct")}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-transform active:scale-95 disabled:opacity-40 ${
                  state === "listening"
                    ? "animate-pulse bg-red-500"
                    : state === "wrong"
                      ? "bg-red-400"
                      : "bg-[var(--color-accent-lecture)]"
                }`}
                aria-label="Parler"
              >
                {state === "correct" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                ) : state === "wrong" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </button>
              <span className="min-h-12 px-4 text-left text-xl font-bold leading-[3rem] text-[var(--color-text-primary)]">
                {word}
              </span>
              <button
                type="button"
                onClick={() => playWord(word)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-text-secondary)]/15 text-[var(--color-text-secondary)] transition-opacity hover:opacity-75 active:scale-95"
                aria-label={`Écouter ${word}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
              {state === "wrong" && heard[i] && (
                <p className="col-span-4 pl-8 text-xs text-red-500">J&apos;ai entendu: {heard[i]}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function LectureLetterRunner({ data, moduleId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const steps = getSteps(data);
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    if (searchParams.get("eval") === "1") {
      setStepIdx(steps.length - 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [resetKey, setResetKey] = useState(0);
  const [evalSubStep, setEvalSubStep] = useState<{ idx: number; total: number; validated: boolean[]; isResults: boolean } | null>(null);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const evalNavigateRef = useRef<(index: number) => void>(() => {});
  const gridRef = useRef<LetterGridHandle>(null);
  const wordRef = useRef<WordSpotterHandle>(null);
  const soundImageRef = useRef<SoundPickerHandle>(null);
  const pronounceRef = useRef<PronunciationChainHandle>(null);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === steps.length - 1;
  const step = steps[stepIdx]!;
  const hasEvalStep = steps.some((s) => s.key === "eval");
  const trainingSteps = hasEvalStep ? steps.slice(0, -1) : steps;
  const isGridStep = step.key === "grid-upper" || step.key === "grid-lower";
  const isWordStep = ["word-upper", "word-upper-1", "word-upper-2", "word-lower"].includes(step.key);
  const isComplexGridStep = step.key === "complex-grid-upper" || step.key === "complex-grid-lower";
  const isComplexWordStep = step.key === "complex-word-upper" || step.key === "complex-word-lower";
  const isSoundImageStep = step.key === "sound-image";
  const isSoundAudioStep = step.key === "sound-audio";
  const isPronounceStep = step.key === "pronounce";
  const isEvalStep = step.key === "eval";
  const showExerciseButtons = isGridStep || isWordStep || isComplexGridStep || isComplexWordStep || isSoundImageStep || isSoundAudioStep;

  function exerciseReset() {
    if (isGridStep || isComplexGridStep) gridRef.current?.reset();
    else if (isWordStep || isComplexWordStep) wordRef.current?.reset();
    else if (isSoundImageStep || isSoundAudioStep) soundImageRef.current?.reset();
    else if (isPronounceStep) pronounceRef.current?.reset();
  }
  function exerciseValidate() {
    if (isGridStep || isComplexGridStep) gridRef.current?.validate();
    else if (isWordStep || isComplexWordStep) wordRef.current?.validate();
    else if (isSoundImageStep || isSoundAudioStep) soundImageRef.current?.validate();
  }

  function goBack() {
    if (isFirst) {
      router.push("/lecture");
    } else {
      setStepIdx((s) => s - 1);
      setResetKey((k) => k + 1);
    }
  }

  // Quit the lesson entirely and return to the lecture tab it belongs to.
  function goExit() {
    router.push("/lecture");
  }

  function goNext() {
    if (isLast) {
      const prog = loadLectureProgress();
      const next = markSubmoduleCompleted(prog, moduleId, data.letterLower);
      saveLectureProgress(next);
      router.push("/lecture");
    } else {
      setStepIdx((s) => s + 1);
      setResetKey((k) => k + 1);
    }
  }

  function handleEvalDone(grade: number, passed: boolean, total: number) {
    try {
      const prog = loadLectureProgress();
      const withEval = saveEvaluationResult(prog, moduleId, data.letterLower, { grade, passed, total });
      const final = passed
        ? markSubmoduleCompleted(withEval, moduleId, data.letterLower)
        : withEval;
      saveLectureProgress(final);
    } catch {
      // ignore storage errors
    }
    window.location.href = "/lecture";
  }

  function renderStep() {
    const k = `${step.key}-${resetKey}`;
    if (data.type === "syllable" || data.type === "monosyllable" || data.type === "multisyllable") {
      const grid = data.grids.find((entry) => entry.key === step.key) ?? data.grids[0]!;
      if (data.type === "syllable") return <SyllableReadingGridView key={k} grid={grid} />;
      // L6.1 tool words and L8 multisyllable words use the mic/word/audio rows.
      // L8 step 4 ("review") is timed: 2 minutes to read the 10 words.
      if (data.letterLower === "outils" || data.type === "multisyllable") {
        const timed = data.type === "multisyllable" && grid.key === "review";
        return <WordPronounceGrid key={k} words={grid.items} timerSeconds={timed ? 120 : undefined} />;
      }
      return <ReadingGridView key={k} grid={grid} />;
    }
    if (data.type === "complex-sound") {
      switch (step.key) {
        case "discover-complex":
          return (
            <DiscoverSound
              key={k}
              phoneme={data.phoneme}
              letter={data.letter}
              letterLower=""
              exampleWord={data.exampleWord}
              exampleImagePath={data.exampleImagePath}
            />
          );
        case "complex-grid-upper":
          return <ComplexGraphemeGrid key={k} ref={gridRef} target={data.letter} isUppercase={true} />;
        case "complex-grid-lower":
          return <ComplexGraphemeGrid key={k} ref={gridRef} target={data.letter} isUppercase={false} />;
        case "complex-word-upper":
          return <ComplexWordSpotter key={k} ref={wordRef} words={data.upperWords} target={data.letter} isUppercase={true} />;
        case "complex-word-lower":
          return <ComplexWordSpotter key={k} ref={wordRef} words={data.lowerWords} target={data.letter} isUppercase={false} />;
        case "sound-image":
          return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="image" />;
        case "sound-audio":
          return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="audio" />;
        case "complex-syllables-cv":
          return <ComplexSyllableGrid key={k} target={data.letter} mode="cv" />;
        case "pronounce-complex":
          return <PronunciationChain key={k} ref={pronounceRef} phoneme={data.phoneme} chain={data.pronunciationChain} />;
        default:
          return null;
      }
    }
    switch (step.key) {
      case "discover":
        return (
          <DiscoverSound
            key={k}
            phoneme={data.phoneme}
            letter={data.letter}
            letterLower={data.letterLower}
            exampleWord={data.exampleWord}
            exampleImagePath={data.exampleImagePath}
            exampleAudioPath={data.exampleAudioPath}
          />
        );
      case "vowel-recall":
        return <VowelRecall key={k} />;
      case "grid-upper":
        return (
          <LetterGrid key={k} ref={gridRef} target={data.letter} isUppercase={true} />
        );
      case "grid-lower":
        return (
          <LetterGrid key={k} ref={gridRef} target={data.letterLower} isUppercase={false} />
        );
      case "word-upper":
        if (data.type !== "vowel") return null;
        return <WordSpotter key={k} ref={wordRef} target={data.letter} isUppercase={true} />;
      case "word-upper-1":
        if (data.type !== "consonant") return null;
        return <WordSpotter key={k} ref={wordRef} target={data.letter} isUppercase={true} />;
      case "word-upper-2":
        if (data.type !== "consonant") return null;
        return <WordSpotter key={k} ref={wordRef} target={data.letter} isUppercase={true} />;
      case "word-lower":
        return <WordSpotter key={k} ref={wordRef} target={data.letterLower} isUppercase={false} />;
      case "sound-image":
        return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="image" />;
      case "sound-audio":
        return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="audio" />;
      case "syllables-cv":
        if (data.type !== "consonant") return null;
        return <SyllableGrid key={k} baseLetter={data.letterLower} mode="cv" />;
      case "syllables-vc":
        if (data.type !== "consonant") return null;
        return <SyllableGrid key={k} baseLetter={data.letterLower} mode="vc" />;
      case "syllables-mixed":
        if (data.type !== "consonant") return null;
        return <SyllableGrid key={k} baseLetter={data.letterLower} mode="mixed" />;
      case "pronounce":
        return <PronunciationChain key={k} ref={pronounceRef} phoneme={data.phoneme} chain={data.pronunciationChain} />;
      case "eval":
        return (
          <LectureEvaluation
            key={k}
            data={data}
            onBack={goBack}
            onDone={handleEvalDone}
            onEvalStepChange={(idx, total, validated, isResults) => setEvalSubStep({ idx, total, validated, isResults })}
            onEvalTimeChange={(t) => setEvalTimeLeft(t)}
            onEvalNavigateReady={(navigate) => { evalNavigateRef.current = navigate; }}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-56">
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture · {isEvalStep ? "Évaluation" : data.type === "vowel" ? "Voyelle" : data.type === "consonant" ? "Consonne" : "Lecture"}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goExit}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-lecture)] text-white transition-opacity hover:opacity-80"
            aria-label="Quitter la leçon"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {data.type === "syllable" || data.type === "monosyllable" || data.type === "multisyllable" || data.type === "complex-sound" ? data.title : `${data.letter} - ${data.letterLower} — ${data.phoneme}`}
          </h1>
        </div>
      </header>

      {/* Training progress bar — hidden during eval */}
      {!isEvalStep && (
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-lecture)]">Entraînement</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{stepIdx + 1} / {trainingSteps.length}</p>
          </div>
          <div className="flex gap-1">
            {trainingSteps.map((s, i) => (
              <div
                key={s.key}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < stepIdx
                    ? "bg-[var(--color-accent-lecture)]"
                    : i === stepIdx
                      ? "bg-[var(--color-accent-lecture)] opacity-60"
                      : "bg-[var(--color-border-default)]"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Eval progress bar with timer — shown only during eval step */}
      {isEvalStep && !evalSubStep?.isResults && (
        <EvalProgressBar
          current={evalSubStep?.idx ?? 0}
          total={evalSubStep?.total ?? 5}
          timeLeft={evalTimeLeft}
          validated={evalSubStep?.validated}
          onNavigate={(index) => evalNavigateRef.current(index)}
        />
      )}

      <div className="min-h-[280px]">{renderStep()}</div>

      {/* Fixed nav bar — hidden on eval step (LectureEvaluation has its own) */}
      {!isEvalStep && <div className="hidden fixed bottom-0 left-0 right-0 bg-[var(--color-bg-primary)] z-40">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={goBack}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Retour
            </button>

            {(showExerciseButtons || isPronounceStep) && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Recommencer"
                  onClick={exerciseReset}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M1 4v6h6" />
                    <path d="M3.51 15a9 9 0 1 0 .49-4" />
                  </svg>
                </button>
                {!isPronounceStep && (
                  <button
                    type="button"
                    aria-label="Valider"
                    onClick={exerciseValidate}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </button>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={goNext}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-lecture)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
            >
              {isLast ? (
                <>
                  Terminer
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </>
              ) : (
                <>
                  Suivant
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
        {/* Spacer covers main nav area so scrolled content can't show through */}
        <div className="h-[72px]" />
      </div>}
    </div>
  );
}
