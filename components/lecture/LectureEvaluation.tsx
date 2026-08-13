"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";
import type { ComplexSoundLessonData, ConsonantData, PronStep, VowelData } from "@/lib/curriculum/lecture-data";
import { randomWordsWithLetter, randomWordsWithGrapheme } from "@/lib/curriculum/word-pool";
import { useLectureWordMaxLength } from "@/lib/hooks/useLectureWordMaxLength";
import { linearSwissGrade, LEVEL_PASSING_GRADES, type LevelKey } from "@/lib/scoring";
import { getLectureWordImagePath } from "@/lib/utils/audio";
import { SoundPicker } from "./SoundPicker";
import { SyllableGrid } from "./SyllableGrid";
import { PronounceWordList } from "./PronounceWordList";
import {
  complexTargets,
  makeComplexGrid,
  normalizeGraph,
  splitComplexWord,
} from "@/lib/utils/complex-grapheme";
import { useRegisterEvalGuard } from "@/components/EvalNavGuard";
import { EvalAnnounceScreen } from "@/components/ui/EvalAnnounceScreen";
import { EvalFinishButton } from "@/components/ui/EvalFinishButton";
import {
  EvalExerciseResultList,
  EvalExerciseResultRow,
  EvalResultsHint,
  EvalResultsSummary,
} from "@/components/ui/EvalResultsUI";

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
  | { kind: "pronounce"; phoneme: string; syllable: string; word: string; score: number; words?: string[]; states?: RecState[] };

type ValidatedHandler = (score: number, snapshot: EvalSnapshot) => void;

const BASE_EVAL_STEPS: EvalStep[] = ["grid", "words", "sound-audio", "sound-image", "pronounce", "results"];
const CONSONANT_EVAL_STEPS: EvalStep[] = ["grid", "words", "sound-audio", "sound-image", "syllables-mixed", "pronounce", "results"];
// L7 complex sounds reuse the same set of exercises as consonants.
const COMPLEX_EVAL_STEPS: EvalStep[] = ["grid", "words", "sound-audio", "sound-image", "syllables-mixed", "pronounce", "results"];

const EVAL_SOUND_ITEM_COUNT = 8;
const EVAL_PRONOUNCE_WORD_COUNT = 2;
const EVAL_SYLLABLE_COUNT = 6;

function soundEvalScore(states: CellState[], targets: boolean[]): number {
  const perfect = !states.some((s) => s === "wrong" || s === "missed");
  const half =
    states.filter((s) => s === "correct").length >= Math.ceil(targets.filter(Boolean).length * 0.5) &&
    states.filter((s) => s === "wrong").length <= 1;
  return perfect ? 2 : half ? 1 : 0;
}

function gridCellClass(state: CellState, textSize = "text-4xl md:text-2xl"): string {
  const base = `flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border font-bold transition-colors ${textSize}`;
  if (state === "correct") {
    return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]`;
  }
  if (state === "wrong" || state === "missed") {
    return `${base} border-amber-400 bg-amber-50 text-amber-700`;
  }
  if (state === "selected") {
    return `${base} border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]`;
  }
  return `${base} border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] active:scale-95`;
}

function pickPronSteps(chain: PronStep[], count: number): PronStep[] {
  return shuffle([...chain]).slice(0, Math.min(count, chain.length));
}

function pronounceEvalScore(correctCount: number, wordCount: number): number {
  if (wordCount <= 1) return correctCount > 0 ? 3 : 0;
  if (correctCount >= 2) return 3;
  if (correctCount === 1) return 2;
  return 0;
}

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

// ─── Exercise 1 — Mixed Grid (4 pts or 2 pts partial) ────────────────────────

function GridExercise({
  upper, lower, onValidated, shouldValidate,
}: { upper: string; lower: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const lang = usePivotLang();
  const { showPivot } = useTranslation();
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
      {showPivot && (
        <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
          {lectureUi(lang, "recognizeLetter")}
        </p>
      )}
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez toutes les{" "}
        <strong className="text-[var(--color-accent-lecture)]">{upper}</strong> et{" "}
        <strong className="text-[var(--color-accent-lecture)]">{lower}</strong>
      </p>
      <div className="grid grid-cols-5 gap-2 md:grid-cols-8 md:gap-1.5">
        {grid.map((cell, i) => {
          const s = states[i]!;
          return (
            <button
              key={i}
              type="button"
              onClick={() => tap(i)}
              disabled={validated}
              className={gridCellClass(s)}
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
  const lang = usePivotLang();
  const { showPivot } = useTranslation();
  const maxLength = useLectureWordMaxLength(9);
  const [words] = useState(() => {
    const raw = randomWordsWithLetter(letterLower, 20, maxLength);
    const pool = shuffle(raw.filter((w) => w.length <= maxLength)).slice(0, 4);
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
      {showPivot && (
        <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
          {lectureUi(lang, "spotInWords")}
        </p>
      )}
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez la lettre{" "}
        <strong className="text-[var(--color-accent-lecture)]">{letter}</strong> ou{" "}
        <strong className="text-[var(--color-accent-lecture)]">{letterLower}</strong> dans chaque mot
      </p>
      <ul className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
        {words.map((word, wi) => (
          <li key={wi} className="flex flex-wrap items-center justify-center gap-0.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-3 md:px-2 md:py-2">
            {word.split("").map((char, ci) => {
              const key = `${wi}-${ci}`;
              const s = states[key] ?? "idle";
              return (
                <button
                  key={ci}
                  type="button"
                  disabled={validated}
                  onClick={() => tap(wi, ci)}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-base font-bold transition-colors md:h-6 md:w-6 md:text-xs ${
                    s === "correct"
                      ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                      : s === "wrong" || s === "missed"
                        ? "border-amber-400 bg-amber-100 text-amber-600"
                        : s === "selected"
                          ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                          : "border-transparent text-[var(--color-text-primary)]"
                  }`}
                >
                  {char}
                </button>
              );
            })}
          </li>
        ))}
      </ul>
    </section>
  );
}

// ─── Exercise 3 — Sound Audio (2 pts) ────────────────────────────────────────

function SoundAudioExercise({
  phoneme, onValidated, shouldValidate,
}: { phoneme: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  return (
    <SoundPicker
      mode="audio"
      phoneme={phoneme}
      fixedItemCount={EVAL_SOUND_ITEM_COUNT}
      shouldValidate={shouldValidate}
      onEvalValidated={(labels, targets, states) => {
        onValidated(soundEvalScore(states, targets), {
          kind: "sound-audio",
          labels,
          targets,
          states,
        });
      }}
    />
  );
}

// ─── Exercise 4 — Sound Image (2 pts) ────────────────────────────────────────

function SoundImageExercise({
  phoneme, onValidated, shouldValidate,
}: { phoneme: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  return (
    <SoundPicker
      mode="image"
      phoneme={phoneme}
      fixedItemCount={EVAL_SOUND_ITEM_COUNT}
      shouldValidate={shouldValidate}
      onEvalValidated={(labels, targets, states) => {
        onValidated(soundEvalScore(states, targets), {
          kind: "sound-image",
          labels,
          targets,
          states,
        });
      }}
    />
  );
}

// ─── Exercise 5 — Syllables (3 pts) ──────────────────────────────────────────

function SyllablesMixedExercise({
  letter, onValidated, shouldValidate,
}: { letter: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  return (
    <SyllableGrid
      baseLetter={letter}
      mode="mixed"
      fixedSyllableCount={EVAL_SYLLABLE_COUNT}
      shouldValidate={shouldValidate}
      onEvalValidated={(syllables, states, heard, score) => {
        onValidated(score, { kind: "syllables-mixed", syllables, states, heard, score });
      }}
    />
  );
}

function PronounceExercise({
  chain, onValidated, shouldValidate, wordCount = 1,
}: { chain: PronStep[]; onValidated: ValidatedHandler; shouldValidate: boolean; wordCount?: number }) {
  const [steps] = useState(() => (wordCount > 1
    ? pickPronSteps(chain, wordCount)
    : [chain[Math.floor(Math.random() * chain.length)]!]));

  return (
    <PronounceWordList
      steps={steps}
      shouldValidate={shouldValidate}
      title="Prononcer les mots"
      consigne="Prononcez chaque mot à voix haute."
      onValidated={(correct, _max, states) => {
        const score = wordCount > 1
          ? pronounceEvalScore(correct, wordCount)
          : (correct > 0 ? 3 : 0);
        const first = steps[0]!;
        onValidated(score, wordCount > 1
          ? {
              kind: "pronounce",
              phoneme: first.phoneme,
              syllable: first.syllable,
              word: first.word,
              score,
              words: steps.map((step) => step.word),
              states,
            }
          : {
              kind: "pronounce",
              phoneme: first.phoneme,
              syllable: first.syllable,
              word: first.word,
              score,
            });
      }}
    />
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
              className={gridCellClass(s, "text-xl")}
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
  label, onValidated, shouldValidate,
}: { label: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  const lang = usePivotLang();
  const { showPivot } = useTranslation();
  const targets = useMemo(() => complexTargets(label), [label]);
  const maxLength = useLectureWordMaxLength();
  const [words] = useState(() => {
    const raw = randomWordsWithGrapheme(label, 20, maxLength);
    const up = shuffle(raw).slice(0, 2);
    const low = shuffle(raw).slice(2, 4);
    return [
      (up[0] ?? label).toUpperCase(),
      (low[0] ?? label).toLowerCase(),
      (up[1] ?? label).toUpperCase(),
      (low[1] ?? label).toLowerCase(),
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
      {showPivot && (
        <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
          {lectureUi(lang, "spotInWords")}
        </p>
      )}
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez le graphème{" "}
        <strong className="text-[var(--color-accent-lecture)]">{label}</strong> dans chaque mot
      </p>
      <ul className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
        {words.map((word, wi) => (
          <li key={wi} className="flex flex-wrap items-center justify-center gap-0.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-2 py-3 md:px-2 md:py-2">
            {splitComplexWord(word, targets).map((part, ci) => {
              const key = `${wi}-${ci}`;
              const s = states[key] ?? "idle";
              return (
                <button
                  key={ci}
                  type="button"
                  disabled={validated}
                  onClick={() => tap(wi, ci)}
                  className={`flex h-8 min-w-7 shrink-0 items-center justify-center rounded-lg border px-1 text-base font-bold transition-colors md:h-6 md:min-w-5 md:px-0.5 md:text-xs ${
                    s === "correct"
                      ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                      : s === "wrong" || s === "missed"
                        ? "border-amber-400 bg-amber-100 text-amber-600"
                        : s === "selected"
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
}

// Read grapheme syllables aloud (3 pts) — même UI que l'entraînement.
function ComplexSyllablesExercise({
  label, onValidated, shouldValidate,
}: { label: string; onValidated: ValidatedHandler; shouldValidate: boolean }) {
  return (
    <SyllableGrid
      graphemeLabel={label}
      mode="mixed"
      fixedSyllableCount={EVAL_SYLLABLE_COUNT}
      shouldValidate={shouldValidate}
      onEvalValidated={(syllables, states, heard, score) => {
        onValidated(score, { kind: "syllables-mixed", syllables, states, heard, score });
      }}
    />
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
    return <div className="grid grid-cols-4 gap-2">{snapshot.labels.map((label, i) => (
      <div key={`${label}-${i}`} className={`flex min-h-24 flex-col items-center justify-center rounded-[var(--radius-lg)] border-2 p-2 ${correctionStateClass(snapshot.states[i]!)}`}>
        {snapshot.kind === "sound-image" && (() => {
          const imgSrc = getLectureWordImagePath(label);
          return imgSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imgSrc} alt={label} className="h-16 w-full object-contain" />
          ) : null;
        })()}
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
            : state === "wrong" ? "border-amber-400 text-amber-600"
              : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"
        }`}>
          {state === "wrong" && heard && <p className="text-xs line-through opacity-70">{heard}</p>}
          <p className="text-lg font-bold">{syllable}</p>
        </li>
      );
    })}</ul>;
  }
  if (snapshot.kind !== "pronounce") return null;
  if (snapshot.words && snapshot.states) {
    return <ul className="space-y-2">{snapshot.words.map((word, i) => {
      const state = snapshot.states![i]!;
      return (
        <li key={`${word}-${i}`} className={`rounded-[var(--radius-lg)] border px-4 py-3 text-center ${
          state === "correct" ? "border-[var(--color-correction)] text-[var(--color-correction)]"
            : state === "wrong" ? "border-amber-400 text-amber-600"
              : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"
        }`}>
          <p className="text-lg font-bold">{word}</p>
        </li>
      );
    })}</ul>;
  }
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
      <EvalResultsSummary
        accent="var(--color-accent-lecture)"
        points={total}
        maxPoints={maxScore}
        grade={grade}
        passed={passed}
      />
      <EvalResultsHint />
      <EvalExerciseResultList>
        {rows.map((row, i) => {
          const s = scores[i] ?? 0;
          const isSelected = selectedResultIdx === i;
          return (
            <EvalExerciseResultRow
              key={i}
              index={i}
              correct={s}
              total={row.max}
              accent="var(--color-accent-lecture)"
              isSelected={isSelected}
              onToggle={() => setSelectedResultIdx(isSelected ? null : i)}
            >
              <ReviewDetail snapshot={snapshots[i] ?? undefined} />
            </EvalExerciseResultRow>
          );
        })}
      </EvalExerciseResultList>
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function LectureEvaluation({ data, onBack, onDone, onEvalStepChange, onEvalTimeChange, onEvalNavigateReady }: Props) {
  const { letter, letterLower, phoneme, pronunciationChain } = data;
  const isComplex = data.type === "complex-sound";
  const [complexPronChain] = useState(() =>
    data.type === "complex-sound"
      ? randomWordsWithGrapheme(data.letter, 8).map((word) => ({
          phoneme: data.letter,
          syllable: word,
          word,
        }))
      : [],
  );
  const evalSteps = useMemo(
    () => (data.type === "complex-sound" ? COMPLEX_EVAL_STEPS : data.type === "consonant" ? CONSONANT_EVAL_STEPS : BASE_EVAL_STEPS),
    [data.type],
  );
  // Word pools for the complex-sound spotting exercise (single grapheme lessons).
  const pronounceChain = isComplex ? complexPronChain : pronunciationChain;
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
    // `onEvalStepChange` is an inline parent callback (new identity every render);
    // excluding it keeps this effect from re-running forever (the parent sets
    // state from it, which would re-create the callback → infinite render loop).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressIdx, exerciseSteps.length, evalStarted, validated, isResults]);

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
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="flex h-11 flex-1 items-center justify-center rounded-xl px-4 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--color-accent-lecture)" }}
              >
                Continuer
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
            lessonTitle={data.type === "complex-sound" ? data.title : `la lettre ${letter}`}
            exerciseCount={exerciseSteps.length}
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
                ? <ComplexWordsExercise label={letter} onValidated={(s, snapshot) => recordScore(1, s, snapshot)} shouldValidate={validateTarget === 1 || validateTarget === -1} />
                : <WordsExercise letter={letter} letterLower={letterLower} onValidated={(s, snapshot) => recordScore(1, s, snapshot)} shouldValidate={validateTarget === 1 || validateTarget === -1} />}
            </div>
            <div hidden={isResults || stepIdx !== 2}><SoundAudioExercise phoneme={phoneme} onValidated={(s, snapshot) => recordScore(2, s, snapshot)} shouldValidate={validateTarget === 2 || validateTarget === -1} /></div>
            <div hidden={isResults || stepIdx !== 3}><SoundImageExercise phoneme={phoneme} onValidated={(s, snapshot) => recordScore(3, s, snapshot)} shouldValidate={validateTarget === 3 || validateTarget === -1} /></div>
            {data.type === "consonant" || isComplex ? (
              <>
                <div hidden={isResults || stepIdx !== 4}>
                  {isComplex
                    ? <ComplexSyllablesExercise label={letter} onValidated={(s, snapshot) => recordScore(4, s, snapshot)} shouldValidate={validateTarget === 4 || validateTarget === -1} />
                    : <SyllablesMixedExercise letter={letterLower} onValidated={(s, snapshot) => recordScore(4, s, snapshot)} shouldValidate={validateTarget === 4 || validateTarget === -1} />}
                </div>
                <div hidden={isResults || stepIdx !== 5}><PronounceExercise chain={pronounceChain} wordCount={EVAL_PRONOUNCE_WORD_COUNT} onValidated={(s, snapshot) => recordScore(5, s, snapshot)} shouldValidate={validateTarget === 5 || validateTarget === -1} /></div>
              </>
            ) : (
              <div hidden={isResults || stepIdx !== 4}><PronounceExercise chain={pronunciationChain} onValidated={(s, snapshot) => recordScore(4, s, snapshot)} shouldValidate={validateTarget === 4 || validateTarget === -1} /></div>
            )}
          </>
        )}

        {/* Results (always visible when reached) */}
        {isResults && (
          <>
            <ResultsScreen scores={scores} snapshots={snapshots} rows={resultRows} maxScore={maxScore} />
            <EvalFinishButton onClick={goNext} accent="var(--color-accent-lecture)" />
          </>
        )}
      </div>

      <div className="hidden fixed bottom-0 left-0 right-0 bg-[var(--color-bg-primary)] z-40">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="app-shell-bar flex items-center justify-between py-3">
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
