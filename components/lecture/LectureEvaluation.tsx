"use client";

import { useState, useRef } from "react";
import type { LetterData, PronStep } from "@/lib/curriculum/lecture-data";
import { randomWordsWithLetter, randomSoundItems, wordHasPhoneme } from "@/lib/curriculum/word-pool";
import { linearSwissGrade, LEVEL_PASSING_GRADES, type LevelKey } from "@/lib/scoring";
import { speak } from "@/lib/utils/speech";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  data: LetterData;
  onBack: () => void;
  onDone: (grade: number, passed: boolean, total: number) => void;
}

type EvalStep = "grid" | "words" | "sound-image" | "sound-audio" | "pronounce" | "results";
type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";

const EVAL_STEPS: EvalStep[] = ["grid", "words", "sound-image", "sound-audio", "pronounce", "results"];
const STEP_LABELS: Record<EvalStep, string> = {
  grid: "Reconnaître",
  words: "Repérer",
  "sound-image": "Écouter (images)",
  "sound-audio": "Écouter (sons)",
  pronounce: "Prononcer",
  results: "Résultats",
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
  return shuffle([...targets, ...shuffle(distractors).slice(0, 10)]);
}

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function isMatch(recognized: string, target: string): boolean {
  const r = normalize(recognized);
  const t = normalize(target);
  return r === t || r.includes(t) || t.includes(r);
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

// ─── Shared UI ────────────────────────────────────────────────────────────────

function ScoreBadge({ score, max }: { score: number; max: number }) {
  const color = score === max ? "text-green-600" : score > 0 ? "text-amber-600" : "text-red-500";
  return (
    <div className={`text-center text-sm font-bold ${color}`}>
      {score}/{max} pt{max > 1 ? "s" : ""}
    </div>
  );
}

function ValidateBtn({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <div className="flex justify-center pt-3">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="flex h-11 items-center gap-2 rounded-[var(--radius-lg)] bg-[var(--color-accent-lecture)] px-6 text-sm font-bold text-white disabled:opacity-40"
      >
        <IconCheck /> Valider
      </button>
    </div>
  );
}

// ─── Exercise 1 — Mixed Grid (4 pts, all or nothing) ─────────────────────────

function GridExercise({
  upper, lower, onScore,
}: { upper: string; lower: string; onScore: (s: number) => void }) {
  const [grid] = useState(() => makeMixedGrid(upper, lower));
  const [states, setStates] = useState<CellState[]>(() => Array(16).fill("idle"));
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  function tap(i: number) {
    if (validated) return;
    setStates((prev) => {
      const next = [...prev] as CellState[];
      next[i] = prev[i] === "selected" ? "idle" : "selected";
      return next;
    });
  }

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
    const perfect = !newStates.some((s) => s === "wrong" || s === "missed");
    const pts = perfect ? 4 : 0;
    setScore(pts);
    onScore(pts);
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Reconnaître la lettre</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez toutes les{" "}
        <strong className="text-[var(--color-accent-lecture)]">{upper}</strong> et{" "}
        <strong className="text-[var(--color-accent-lecture)]">{lower}</strong>
      </p>
      <div className="grid grid-cols-4 gap-2">
        {grid.map((cell, i) => {
          const s = states[i]!;
          return (
            <button
              key={i}
              type="button"
              onClick={() => tap(i)}
              disabled={validated}
              className={`flex items-center justify-center rounded-[var(--radius-lg)] border p-3 text-lg font-bold transition-colors ${
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
      {!validated && <ValidateBtn onClick={validate} />}
      {score !== null && <ScoreBadge score={score} max={4} />}
    </section>
  );
}

// ─── Exercise 2 — Word Spotting (1 pt per line × 4 lines) ────────────────────

function WordsExercise({
  letter, letterLower, onScore,
}: { letter: string; letterLower: string; onScore: (s: number) => void }) {
  const [words] = useState(() => {
    const pool = shuffle(randomWordsWithLetter(letterLower, 10)).slice(0, 4);
    return [
      (pool[0] ?? "MAISON").toUpperCase(),
      (pool[1] ?? "BALLON").toUpperCase(),
      (pool[2] ?? "maison").toLowerCase(),
      (pool[3] ?? "ballon").toLowerCase(),
    ];
  });
  const [states, setStates] = useState<Record<string, CellState>>({});
  const [validated, setValidated] = useState(false);
  const [lineScores, setLineScores] = useState<(number | null)[]>([null, null, null, null]);

  function tap(wi: number, ci: number) {
    if (validated) return;
    const key = `${wi}-${ci}`;
    setStates((prev) => ({ ...prev, [key]: prev[key] === "selected" ? "idle" : "selected" }));
  }

  function validate() {
    if (validated) return;
    setValidated(true);
    const newStates: Record<string, CellState> = {};
    const scores: number[] = [];

    words.forEach((word, wi) => {
      const target = wi < 2 ? letter : letterLower;
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
      scores.push(lineOk ? 1 : 0);
    });

    setStates(newStates);
    setLineScores(scores);
    onScore(scores.reduce((a, b) => a + b, 0));
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
          <li key={wi} className="flex items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-2">
            <span className="flex flex-1 flex-wrap gap-0.5">
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
            {lineScores[wi] !== null && (
              <span className={`shrink-0 text-sm font-bold ${lineScores[wi] === 1 ? "text-green-600" : "text-red-500"}`}>
                {lineScores[wi]}/1
              </span>
            )}
          </li>
        ))}
      </ul>
      {!validated && <ValidateBtn onClick={validate} />}
      {validated && (
        <ScoreBadge score={lineScores.reduce<number>((a, b) => a + (b ?? 0), 0)} max={4} />
      )}
    </section>
  );
}

// ─── Exercise 3 — Sound Image (2 pts) ────────────────────────────────────────

function SoundImageExercise({
  phoneme, onScore,
}: { phoneme: string; onScore: (s: number) => void }) {
  const [items] = useState(() => randomSoundItems(phoneme, 4));
  const [cellStates, setCellStates] = useState<CellState[]>(Array(4).fill("idle"));
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  function toggle(i: number) {
    if (validated) return;
    setCellStates((prev) => {
      const next = [...prev] as CellState[];
      next[i] = prev[i] === "selected" ? "idle" : "selected";
      return next;
    });
  }

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
    const pts = perfect ? 2 : half ? 1 : 0;
    setScore(pts);
    onScore(pts);
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
          const imgSrc = `/assets/words/img/${word.label}.jpg`;
          const audioSrc = `/assets/words/son/${word.label}.mp3`;
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
              <img src={imgSrc} alt={word.label} className="absolute inset-0 h-full w-full object-contain p-1" />
              <button
                type="button"
                aria-label={`Écouter ${word.label}`}
                onClick={(e) => { e.stopPropagation(); new Audio(audioSrc).play().catch(() => speak(word.label)); }}
                className="absolute top-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white shadow-sm"
              >
                <IconSpeaker />
              </button>
            </button>
          );
        })}
      </div>
      {!validated && <ValidateBtn onClick={validate} />}
      {score !== null && <ScoreBadge score={score} max={2} />}
    </section>
  );
}

// ─── Exercise 4 — Sound Audio (2 pts) ────────────────────────────────────────

function SoundAudioExercise({
  phoneme, onScore,
}: { phoneme: string; onScore: (s: number) => void }) {
  const [items] = useState(() => randomSoundItems(phoneme, 4));
  const [cellStates, setCellStates] = useState<CellState[]>(Array(4).fill("idle"));
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  function toggle(i: number) {
    if (validated) return;
    const word = items[i]!;
    new Audio(`/assets/words/son/${word.label}.mp3`).play().catch(() => speak(word.label));
    setCellStates((prev) => {
      const next = [...prev] as CellState[];
      next[i] = prev[i] === "selected" ? "idle" : "selected";
      return next;
    });
  }

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
    const pts = perfect ? 2 : half ? 1 : 0;
    setScore(pts);
    onScore(pts);
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
          const audioSrc = `/assets/words/son/${word.label}.mp3`;
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
                onClick={(e) => { e.stopPropagation(); new Audio(audioSrc).play().catch(() => speak(word.label)); }}
                className={`absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full shadow-sm z-10 ${
                  s === "correct" || s === "selected"
                    ? "bg-[var(--color-accent-lecture)] text-white"
                    : s === "wrong" || s === "missed"
                      ? "bg-red-400 text-white"
                      : "bg-[var(--color-accent-lecture)] text-white"
                }`}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
            </button>
          );
        })}
      </div>
      {!validated && <ValidateBtn onClick={validate} />}
      {score !== null && <ScoreBadge score={score} max={2} />}
    </section>
  );
}

// ─── Exercise 5 — Pronounce (3 pts) ──────────────────────────────────────────

function PronounceExercise({
  chain, onScore,
}: { chain: PronStep[]; onScore: (s: number) => void }) {
  const [step] = useState(() => chain[Math.floor(Math.random() * chain.length)]!);
  const [recState, setRecState] = useState<"idle" | "listening" | "correct" | "wrong">("idle");
  const [heard, setHeard] = useState("");
  const recRef = useRef<unknown>(null);
  const [scored, setScored] = useState(false);

  function startListening() {
    if (recState === "listening") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
    if (!SR) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.lang = "fr-FR";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.onstart = () => setRecState("listening");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (e: any) => {
      let matched = false;
      for (let a = 0; a < e.results[0].length; a++) {
        const t: string = e.results[0][a].transcript.trim();
        if (isMatch(t, step.word)) { matched = true; setHeard(t); break; }
      }
      if (!matched) setHeard(e.results[0][0].transcript.trim());
      const result = matched ? "correct" : "wrong";
      setRecState(result);
      if (!scored) {
        setScored(true);
        onScore(matched ? 3 : 0);
      }
    };
    rec.onerror = () => setRecState("idle");
    rec.onend = () => setRecState((s) => s === "listening" ? "idle" : s);
    recRef.current = rec;
    rec.start();
  }

  function manualScore(pts: number) {
    if (!scored) { setScored(true); onScore(pts); }
    setRecState(pts > 0 ? "correct" : "wrong");
  }

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
        <button type="button" onClick={() => speak(step.word)}
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
          <button type="button" onClick={startListening} disabled={recState === "listening"}
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
          <p className="text-sm text-[var(--color-text-secondary)]">
            {recState === "idle" && "Appuyez pour parler"}
            {recState === "listening" && "J&apos;écoute…"}
            {recState === "correct" && <span className="font-semibold text-[var(--color-accent-lecture)]">Bravo ! 🎉</span>}
            {recState === "wrong" && <span className="text-red-500">{heard ? `J'ai entendu « ${heard} »` : "Non reconnu"} — réessaie !</span>}
          </p>
          {scored && <ScoreBadge score={recState === "correct" ? 3 : 0} max={3} />}
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
          {scored && <ScoreBadge score={recState === "correct" ? 3 : 0} max={3} />}
        </div>
      )}
    </section>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────

function ResultsScreen({ scores }: { scores: (number | null)[] }) {
  const rows = [
    { label: "Reconnaître la lettre", max: 4 },
    { label: "Repérer dans les mots", max: 4 },
    { label: "Entendre le son (images)", max: 2 },
    { label: "Entendre le son (audio)", max: 2 },
    { label: "Prononcer", max: 3 },
  ];
  const total = scores.reduce<number>((s, v) => s + (v ?? 0), 0);
  const grade = linearSwissGrade(total, 15);
  const passGrade = getPassGrade();
  const passed = grade >= passGrade;

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Résultats</h2>
      <ul className="space-y-2">
        {rows.map((row, i) => {
          const s = scores[i] ?? 0;
          const color = s === row.max ? "text-green-600" : s > 0 ? "text-amber-600" : "text-red-500";
          return (
            <li key={i} className="flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3">
              <span className="text-sm text-[var(--color-text-primary)]">{row.label}</span>
              <span className={`text-sm font-bold ${color}`}>{s}/{row.max}</span>
            </li>
          );
        })}
      </ul>

      <div className={`rounded-[var(--radius-lg)] border-2 p-6 text-center ${
        passed ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/5" : "border-red-400 bg-red-50 dark:bg-red-900/10"
      }`}>
        <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">Note</p>
        <p className="text-5xl font-bold text-[var(--color-text-primary)]">{grade.toFixed(1)}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">sur 6 · {total}/15 pts</p>
        <p className={`mt-3 text-base font-bold ${passed ? "text-[var(--color-accent-lecture)]" : "text-red-500"}`}>
          {passed ? "✓ Réussi" : "✗ À améliorer"}
        </p>
        <p className="mt-1 text-xs text-[var(--color-text-secondary)]">Seuil de réussite : {passGrade}/6</p>
      </div>
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function LectureEvaluation({ data, onBack, onDone }: Props) {
  const { letter, letterLower, phoneme, pronunciationChain } = data;
  const [stepIdx, setStepIdx] = useState(0);
  const [scores, setScores] = useState<(number | null)[]>([null, null, null, null, null]);
  const [stepScored, setStepScored] = useState(false);

  const step = EVAL_STEPS[stepIdx]!;
  const isResults = step === "results";

  function recordScore(exIdx: number, score: number) {
    setScores((prev) => { const next = [...prev]; next[exIdx] = score; return next; });
    setStepScored(true);
  }

  function goNext() {
    if (isResults) {
      const total = scores.reduce<number>((s, v) => s + (v ?? 0), 0);
      const grade = linearSwissGrade(total, 15);
      onDone(grade, grade >= getPassGrade(), total);
      return;
    }
    setStepIdx((i) => i + 1);
    setStepScored(false);
  }

  function goBackInternal() {
    if (stepIdx === 0) onBack();
    else { setStepIdx((i) => i - 1); setStepScored(false); }
  }

  const exerciseSteps = EVAL_STEPS.filter((s) => s !== "results");
  const progressIdx = isResults ? exerciseSteps.length : stepIdx;

  return (
    <div className="w-full flex-1 pb-32">
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture · Évaluation
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
          {letter} - {letterLower} — {phoneme}
        </h1>
      </header>

      <div className="mb-6 flex gap-1">
        {exerciseSteps.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${
            i < progressIdx ? "bg-[var(--color-accent-lecture)]"
              : i === progressIdx ? "bg-[var(--color-accent-lecture)] opacity-60"
                : "bg-[var(--color-border-default)]"
          }`} />
        ))}
      </div>

      <p className="mb-6 text-xs text-[var(--color-text-secondary)]">
        {isResults ? "Résultats finaux" : `Exercice ${stepIdx + 1} sur 5 — ${STEP_LABELS[step]}`}
      </p>

      <div className="min-h-[280px]">
        {step === "grid" && (
          <GridExercise key={stepIdx} upper={letter} lower={letterLower} onScore={(s) => recordScore(0, s)} />
        )}
        {step === "words" && (
          <WordsExercise key={stepIdx} letter={letter} letterLower={letterLower} onScore={(s) => recordScore(1, s)} />
        )}
        {step === "sound-image" && (
          <SoundImageExercise key={stepIdx} phoneme={phoneme} onScore={(s) => recordScore(2, s)} />
        )}
        {step === "sound-audio" && (
          <SoundAudioExercise key={stepIdx} phoneme={phoneme} onScore={(s) => recordScore(3, s)} />
        )}
        {step === "pronounce" && (
          <PronounceExercise key={stepIdx} chain={pronunciationChain} onScore={(s) => recordScore(4, s)} />
        )}
        {step === "results" && (
          <ResultsScreen scores={scores} />
        )}
      </div>

      <div className="fixed bottom-[68px] left-0 right-0 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)] z-40">
        <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
          <button type="button" onClick={goBackInternal}
            className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]">
            <IconLeft /> Retour
          </button>

          {!isResults && (
            <span className="text-xs text-[var(--color-text-secondary)]">
              {scores.filter((s) => s !== null).length > 0
                ? `${scores.reduce<number>((a, b) => a + (b ?? 0), 0)} / ${scores.filter(s => s !== null).length * 2} pts`
                : ""}
            </span>
          )}

          <button type="button" onClick={goNext}
            disabled={!isResults && !stepScored}
            className={`flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] px-5 text-sm font-bold text-white transition-opacity ${
              isResults || stepScored ? "bg-[var(--color-accent-lecture)] hover:opacity-90" : "bg-[var(--color-accent-lecture)] opacity-40 cursor-not-allowed"
            }`}>
            {isResults ? (<>Terminer <IconCheck /></>) : (<>Suivant <IconRight /></>)}
          </button>
        </div>
      </div>
    </div>
  );
}
