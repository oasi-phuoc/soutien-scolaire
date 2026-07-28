"use client";

import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EvalProgressBar from "@/components/math/EvalProgressBar";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { lectureUi } from "@/lib/i18n/lecture-ui";
import type { LetterData } from "@/lib/curriculum/lecture-data";
import { getLectureModule, lessonPhonemeLabel } from "@/lib/curriculum/lecture-data";
import { DiscoverSound } from "./DiscoverSound";
import { LetterGrid, type LetterGridHandle } from "./LetterGrid";
import {
  WordSpotter,
  type WordSpotterHandle,
  useWordSpotterItemCount,
  useIsDesktopMd,
  DESKTOP_WORD_SPOTTER_COUNT,
} from "./WordSpotter";
import { SoundPicker, type SoundPickerHandle } from "./SoundPicker";
import { SyllableGrid } from "./SyllableGrid";
import { LetterPronounce, type LetterPronounceHandle } from "./LetterPronounce";
import { ComplexGraphemePronounce, type ComplexGraphemePronounceHandle } from "./ComplexGraphemePronounce";
import {
  loadLectureProgress,
  saveLectureProgress,
  markSubmoduleCompleted,
  saveEvaluationResult,
} from "@/lib/progress/lecture-progress";
import { LectureEvaluation } from "./LectureEvaluation";
import { playWord, playSyllable } from "@/lib/utils/audio";
import {
  normalizeGraph,
  complexTargets,
  makeComplexGrid,
  splitComplexWord,
  usesGraphemeVowelSyllables,
} from "@/lib/utils/complex-grapheme";
import { matchesSpokenWord, matchesSyllable } from "@/lib/utils/french-speech-match";
import { useRegisterEvalGuard, useEvalNavGuard } from "@/components/EvalNavGuard";
import { EvalAnnounceScreen } from "@/components/ui/EvalAnnounceScreen";
import { EvalFinishButton } from "@/components/ui/EvalFinishButton";
import {
  ALL_TOOL_WORDS,
  monosyllablePool,
  multisyllablePool,
  randomWordsWithGrapheme,
  wordsPoolForLessonGrid,
} from "@/lib/curriculum/word-pool";
import { useLectureWordMaxLength } from "@/lib/hooks/useLectureWordMaxLength";
import { linearSwissGrade, LEVEL_PASSING_GRADES, type LevelKey } from "@/lib/scoring";
import { useContentEditor } from "@/components/content-editor/ContentEditorProvider";
import { ContentEditorPanel } from "@/components/content-editor/ContentEditorPanel";
import { LectureLetterFields } from "@/components/content-editor/LectureLetterFields";
import { lectureLetterKey } from "@/lib/content-editor/keys";

interface Props {
  data: LetterData;
  moduleId: string;
}

type Step = { key: string; label: string };
type CellState = "idle" | "selected" | "correct" | "wrong" | "missed";
type ResetHandle = { reset: () => void };
type WordPronounceGridHandle = ResetHandle & { validate?: () => void };

function getPassGrade(): number {
  if (typeof window === "undefined") return 4;
  try {
    const level = (localStorage.getItem("soutien-level") ?? "base") as LevelKey;
    return LEVEL_PASSING_GRADES[level] ?? 4;
  } catch {
    return 4;
  }
}

function getSteps(data: LetterData): Step[] {
  if (data.type === "complex-sound") {
    return [
      { key: "discover-complex", label: "Découverte" },
      { key: "complex-grid-upper", label: "Majuscules" },
      { key: "complex-grid-lower", label: "Minuscules" },
      { key: "complex-word-upper", label: "Mots (MAJ)" },
      { key: "complex-word-lower", label: "Mots (min)" },
      { key: "sound-audio", label: "Audio" },
      { key: "sound-image", label: "Images" },
      {
        key: "complex-syllables-cv",
        label: usesGraphemeVowelSyllables(data.letterLower) ? "Son complexe + voyelle" : "Syllabes",
      },
      { key: "pronounce-complex", label: "Prononcer" },
      { key: "eval", label: "Évaluation" },
    ];
  }
  if (data.type === "syllable") {
    // L5: CV (consonne+voyelle) majuscules/minuscules, lecture rapide CV,
    // VC (voyelle+consonne) majuscules/minuscules, lecture rapide VC, évaluation.
    const labelOf = (key: string) => data.grids.find((g) => g.key === key)?.label ?? key;
    return [
      { key: "cv-upper", label: labelOf("cv-upper") },
      { key: "cv-lower", label: labelOf("cv-lower") },
      { key: "cv2", label: "2 syllabes" },
      { key: "cv-timed", label: "Lecture rapide" },
      { key: "vc-upper", label: labelOf("vc-upper") },
      { key: "vc-lower", label: labelOf("vc-lower") },
      { key: "vc2", label: "2 syllabes" },
      { key: "vc-timed", label: "Lecture rapide" },
      { key: "word-eval", label: "Évaluation" },
    ];
  }
  if (data.type === "monosyllable" || data.type === "multisyllable") {
    const gridSteps = data.grids.map((grid) => ({ key: grid.key, label: grid.label }));
    // L8 ends with a timed word evaluation (25 words in 5 minutes).
    if (data.type === "multisyllable") gridSteps.push({ key: "word-eval", label: "Évaluation" });
    // L6 (mots-outils / mots courants): add a timed reading step then an evaluation.
    if (data.type === "monosyllable") {
      gridSteps.push({ key: "ms-review", label: "Lecture rapide" });
      gridSteps.push({ key: "word-eval", label: "Évaluation" });
    }
    return gridSteps;
  }
  if (data.type === "vowel") {
    return [
      { key: "discover", label: "Découverte" },
      { key: "grid-upper", label: "Majuscules" },
      { key: "grid-lower", label: "Minuscules" },
      { key: "word-upper", label: "Mots (MAJ)" },
      { key: "word-lower", label: "Mots (min)" },
      { key: "sound-audio", label: "Audio" },
      { key: "sound-image", label: "Images" },
      { key: "pronounce", label: "Prononcer" },
      { key: "eval", label: "Évaluation" },
    ];
  }
  const isC = data.letterLower === "c";
  return [
    { key: "discover", label: "Découverte" },
    // La lettre C a deux sons (/k/ et /s/) : explication + son /s/ supplémentaire.
    ...(isC ? [{ key: "c-sounds", label: "Les 2 sons" }] : []),
    { key: "grid-upper", label: "Majuscules" },
    { key: "grid-lower", label: "Minuscules" },
    { key: "word-upper-1", label: "Mots 1" },
    { key: "word-lower", label: "Mots (min)" },
    { key: "sound-audio", label: "Audio" },
    { key: "sound-image", label: "Images" },
    ...(isC ? [
      { key: "sound-audio-s", label: "Audio /s/" },
      { key: "sound-image-s", label: "Images /s/" },
    ] : []),
    { key: "syllables-cv", label: "Syllabes" },
    { key: "syllables-vc", label: "Syllabes inverses" },
    { key: "syll-2", label: "2 syllabes" },
    { key: "syll-timed", label: "Lecture rapide" },
    { key: "pronounce", label: "Prononcer" },
    { key: "eval", label: "Évaluation" },
  ];
}

// Stable empty array so a missing `words` prop keeps the same reference across
// renders (avoids re-running the sampling effect in WordPronounceGrid).
const EMPTY_WORDS: string[] = [];

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j]!, next[i]!];
  }
  return next;
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
                    ? "border-amber-400 bg-amber-50 text-amber-700"
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

const ComplexWordSpotter = forwardRef<WordSpotterHandle, { target: string; isUppercase: boolean }>(
  function ComplexWordSpotter({ target, isUppercase }, ref) {
  const lang = usePivotLang();
  const { showPivot } = useTranslation();
  const targets = complexTargets(target);
  const maxLength = useLectureWordMaxLength();
  const wordCount = useWordSpotterItemCount(8, DESKTOP_WORD_SPOTTER_COUNT);
  const prevWordCount = useRef(wordCount);
  const buildWords = () =>
    randomWordsWithGrapheme(target, wordCount * 4, maxLength)
      .slice(0, wordCount)
      .map((word) => (isUppercase ? word.toUpperCase() : word.toLowerCase()));
  const [selectedWords, setSelectedWords] = useState(buildWords);
  const displayedWords = selectedWords;
  const [states, setStates] = useState<Record<string, CellState>>({});
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (prevWordCount.current === wordCount) return;
    prevWordCount.current = wordCount;
    setSelectedWords(buildWords());
    setStates({});
    setValidated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordCount, target, isUppercase, maxLength]);

  function reset() {
    setSelectedWords(buildWords());
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
        {showPivot && (
          <p className="border-l-2 border-[var(--color-accent-lecture)]/40 pl-2 text-xs italic text-[var(--color-text-secondary)]" dir={lang === "ar" || lang === "fa" ? "rtl" : "ltr"} lang={lang}>
            {lectureUi(lang, "spotInWords")}
          </p>
        )}
        <p className="text-sm text-[var(--color-text-secondary)]">
        Touchez le graphème{" "}
        <strong className="text-[var(--color-accent-lecture)]">{target}</strong>{" "}
        dans chaque mot.
      </p>
      <ul className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
        {displayedWords.map((word, wordIndex) => (
          <li
            key={`${word}-${wordIndex}`}
            className="flex flex-wrap items-center justify-center gap-0.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-2 py-3 md:px-2 md:py-2"
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
                  className={`flex h-8 min-w-7 shrink-0 items-center justify-center rounded-lg border px-1 text-base font-bold transition-colors md:h-6 md:min-w-5 md:px-0.5 md:text-xs ${
                    state === "correct"
                      ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                      : state === "wrong" || state === "missed"
                        ? "border-amber-400 bg-amber-100 text-amber-600"
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

// Word pronunciation grid — same mic/word/audio row layout as the syllable step,
// syllable step, but driven by a fixed word list (used for the L6.1 tool words).
const WordPronounceGrid = forwardRef<WordPronounceGridHandle, {
  words?: string[];
  timerSeconds?: number;
  sampleSize?: number;
  // Compose the shown items from several sub-pools (e.g. 10 uppercase + 10
  // lowercase); each pool is shuffled and `n` items are taken, then combined.
  sampleSpec?: { pool: string[]; n: number }[];
  isEval?: boolean;
  /** Lesson title shown on the evaluation announcement screen. */
  evalLessonTitle?: string;
  /** L6/L8 word-eval: validate button, results screen, auto-validate on timer. */
  evalWithResults?: boolean;
  title?: string;
  consigne?: string;
  // Which audio folder the play button targets (words vs syllables).
  kind?: "mots" | "syllable";
  /** Desktop (md+): 2 columns × 6 rows with optional alternate sample spec. */
  desktopTwoColumn?: boolean;
  desktopSampleSpec?: { pool: string[]; n: number }[];
  onTimeChange?: (t: number | null) => void;
  onEvalStateChange?: (state: { isResults: boolean; canValidate: boolean; started: boolean }) => void;
  onValidated?: (correct: number, total: number) => void;
  onFinish?: () => void;
}>(
  function WordPronounceGrid({ words = EMPTY_WORDS, timerSeconds, sampleSize, sampleSpec, isEval, evalLessonTitle, evalWithResults, title, consigne, kind = "mots", desktopTwoColumn, desktopSampleSpec, onTimeChange, onEvalStateChange, onValidated, onFinish }, ref) {
  const isDesktop = useIsDesktopMd();
  const activeSpec = desktopTwoColumn && isDesktop && desktopSampleSpec ? desktopSampleSpec : sampleSpec;
  // Stable content keys so the sampling effect below runs once per step (and
  // not on every render — a fresh array prop would otherwise loop forever).
  const wordsKey = words.join("");
  const specKey = activeSpec ? activeSpec.map((s) => `${s.n}:${s.pool.join(",")}`).join("|") : "";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const unique = useMemo(() => Array.from(new Set(words)), [wordsKey]);
  const count = activeSpec
    ? activeSpec.reduce((sum, s) => sum + Math.min(s.n, new Set(s.pool).size), 0)
    : sampleSize
      ? Math.min(sampleSize, unique.length)
      : unique.length;
  const buildItems = () =>
    activeSpec
      ? shuffle(activeSpec.flatMap((s) => shuffle(Array.from(new Set(s.pool))).slice(0, s.n)))
      : shuffle(unique).slice(0, count);
  // Items start empty and are sampled on the client only — this avoids a
  // server/client hydration mismatch (the random order would differ), which
  // otherwise made the list "auto-refresh" right after the page loaded.
  const [items, setItems] = useState<string[]>([]);
  const [states, setStates] = useState<("idle" | "listening" | "correct" | "wrong")[]>([]);
  const [heard, setHeard] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(timerSeconds ?? 0);
  // Evaluations show an announcement screen first; the timer only starts on "Commencer".
  const [started, setStarted] = useState<boolean>(!isEval);
  const [finished, setFinished] = useState(false);
  const [evalCorrect, setEvalCorrect] = useState(0);
  const recRef = useRef<unknown>(null);

  // Sample the words once, on mount (client only). Depends on stable content
  // keys only, so it does not re-run (and re-shuffle) on every render.
  useEffect(() => {
    setItems(buildItems());
    setStates(Array(count).fill("idle"));
    setHeard(Array(count).fill(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsKey, specKey, count]);

  // Countdown timer (timed steps only). Stops at 0; reset restarts it.
  useEffect(() => {
    if (!timerSeconds || !started || timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => (t <= 1 ? 0 : t - 1)), 1000);
    return () => clearInterval(id);
  }, [timerSeconds, started, timeLeft]);

  const timeUp = !!timerSeconds && started && timeLeft <= 0;
  const remaining = states.filter((s) => s !== "correct").length;
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  // Report the remaining time to the parent (so it can show it in the main
  // progress bar), and clear it on unmount.
  useEffect(() => {
    onTimeChange?.(timerSeconds && started ? timeLeft : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, started, timerSeconds]);
  useEffect(() => () => onTimeChange?.(null), []); // eslint-disable-line react-hooks/exhaustive-deps

  // Report eval state to parent (L6/L8 word-eval nav buttons).
  useEffect(() => {
    if (!evalWithResults || !onEvalStateChange) return;
    onEvalStateChange({
      isResults: finished,
      canValidate: started && !finished,
      started,
    });
  }, [evalWithResults, finished, started, onEvalStateChange]);

  // While the evaluation is running, guard against leaving via the main nav.
  useRegisterEvalGuard(!!evalWithResults && started && !finished);

  function doValidate() {
    if (!evalWithResults || finished) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    recRef.current = null;
    const correct = states.filter((s) => s === "correct").length;
    setEvalCorrect(correct);
    setFinished(true);
    onValidated?.(correct, items.length);
  }

  function reset() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (recRef.current as any)?.abort?.();
    recRef.current = null;
    setItems(buildItems());
    setStates(Array(count).fill("idle"));
    setHeard(Array(count).fill(""));
    setFinished(false);
    setEvalCorrect(0);
    if (timerSeconds) setTimeLeft(timerSeconds);
    if (isEval) setStarted(false);
  }

  useImperativeHandle(ref, () => ({ reset, validate: doValidate }));

  // Auto-validate when the timer reaches zero (L6/L8 eval — no toast).
  useEffect(() => {
    if (!evalWithResults || !started || !timeUp || finished) return;
    doValidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evalWithResults, started, timeUp, finished]);

  // Announcement screen for evaluations (shared design), shown before starting.
  if (isEval && !started) {
    return (
      <EvalAnnounceScreen
        accent="var(--color-accent-lecture)"
        lessonTitle={evalLessonTitle}
        exerciseCount={1}
        minutes={Math.round((timerSeconds ?? 0) / 60)}
        onStart={() => setStarted(true)}
      />
    );
  }


  function startListening(index: number) {
    // Une fois juste : verrouillé (comme l'étape Prononcer) — pas de refaire.
    if (typeof window === "undefined" || (timeUp && !evalWithResults) || finished || states[index] === "listening" || states[index] === "correct") return;
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
      const want = items[index]!;
      const matchFn = kind === "syllable" ? matchesSyllable : matchesSpokenWord;
      for (let alt = 0; alt < event.results[0].length; alt++) {
        const transcript = event.results[0][alt].transcript.trim();
        if (matchFn(transcript, want)) {
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

  const passGrade = getPassGrade();
  const grade = linearSwissGrade(evalCorrect, items.length || 1);
  const passed = grade >= passGrade;

  if (evalWithResults && finished) {
    return (
      <section className="space-y-4">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--color-correction)]">Résultats</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <p className="text-[10px] text-[var(--color-text-secondary)]">Mots lus</p>
            <p className="text-2xl font-bold text-[var(--color-text-primary)]">
              {evalCorrect}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/{items.length}</span>
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
              <div
                className={`h-full rounded-full ${passed ? "bg-[var(--color-accent-lecture)]" : "bg-amber-500"}`}
                style={{ width: `${Math.round((evalCorrect / Math.max(items.length, 1)) * 100)}%` }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <p className="text-[10px] text-[var(--color-text-secondary)]">Note</p>
            <p className="text-2xl font-bold text-[var(--color-text-primary)]">
              {grade.toFixed(1)}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/6</span>
            </p>
          </div>
          <div className={`flex flex-col items-center justify-center rounded-xl border-2 bg-[var(--color-bg-primary)] p-3 text-center ${passed ? "border-green-500" : "border-amber-400"}`}>
            <p className="text-[10px] text-[var(--color-text-secondary)]">Mention</p>
            <p className={`mt-1 text-sm font-bold ${passed ? "text-green-600" : "text-amber-600"}`}>{passed ? "Réussi" : "À améliorer"}</p>
          </div>
        </div>
        <ul className="space-y-2">
          {items.map((word, i) => {
            const ok = states[i] === "correct";
            return (
              <li
                key={`${word}-${i}`}
                className={`flex items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-2 ${
                  ok ? "border-green-300 bg-green-50/50" : "border-amber-400 bg-amber-50/50"
                }`}
              >
                <span className="w-5 text-sm font-bold text-[var(--color-accent-lecture)]">{i + 1}.</span>
                <span className="flex-1 text-base font-bold text-[var(--color-text-primary)]">{word}</span>
                <span className={`text-sm font-bold ${ok ? "text-green-600" : "text-amber-600"}`}>{ok ? "✓" : "✗"}</span>
              </li>
            );
          })}
        </ul>
        {onFinish && <EvalFinishButton onClick={onFinish} accent="var(--color-accent-lecture)" />}
      </section>
    );
  }

  return (
    <section className="space-y-3">
      {/* Title + consigne */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{title ?? "Lire les mots"}</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">{consigne ?? "Prononcez chaque mot à voix haute."}</p>
      </div>

      {/* Timed steps: word-progress bar. The eval has no main bar, so it shows
          its own timer here; the timed training step shows the timer in the
          main progress bar (via onTimeChange). The "restant" count sits below. */}
      {timerSeconds && (
        <div>
          {isEval && !evalWithResults && (
            <div className="mb-1 flex items-center justify-end">
              <span className={`rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${
                timeUp ? "bg-red-100 text-amber-600" : "bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
              }`}>
                {fmt(timeLeft)}
              </span>
            </div>
          )}
          <div className="flex gap-1">
            {items.map((_, i) => (
              states[i] === "correct" ? null : (
                <div key={i} className="h-1.5 flex-1 rounded-full bg-[var(--color-border-default)]" />
              )
            ))}
          </div>
          <p className="mt-1 text-right text-xs text-[var(--color-text-secondary)]">{remaining} restant(s)</p>
        </div>
      )}
      {timeUp && !evalWithResults && (
        <p className="rounded-[var(--radius-md)] bg-red-50 px-3 py-2 text-sm font-semibold text-amber-600">
          Temps écoulé ! Appuyez sur recommencer pour réessayer.
        </p>
      )}
      <div className={desktopTwoColumn ? "space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0" : "space-y-2"}>
        {items.map((word, i) => {
          const state = states[i]!;
          return (
            <div
              key={`${word}-${i}`}
              className={`grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-[var(--radius-md)] border-2 px-3 py-2 transition-colors ${
                desktopTwoColumn ? "md:gap-2 md:px-2 md:py-1.5" : ""
              } ${
                state === "correct"
                  ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10"
                  : state === "wrong"
                    ? "border-amber-400 bg-[var(--color-bg-primary)]"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)]"
              }`}
            >
              <span className={`w-5 text-sm font-bold text-[var(--color-accent-lecture)]${desktopTwoColumn ? " md:w-4 md:text-xs" : ""}`}>{i + 1}.</span>
              <button
                type="button"
                onClick={() => startListening(i)}
                disabled={state === "listening" || state === "correct" || (timeUp && !evalWithResults) || finished}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-transform active:scale-95 disabled:opacity-40 disabled:active:scale-100 ${
                  desktopTwoColumn ? "md:h-9 md:w-9" : ""
                } ${
                  state === "listening"
                    ? "animate-pulse bg-red-500"
                    : state === "wrong"
                      ? "bg-amber-500"
                      : "bg-[var(--color-accent-lecture)]"
                }`}
                aria-label="Parler"
              >
                {state === "correct" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={desktopTwoColumn ? "md:h-4 md:w-4" : ""} aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                ) : state === "wrong" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={desktopTwoColumn ? "md:h-4 md:w-4" : ""} aria-hidden><path d="M18 6L6 18M6 6l12 12" /></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={desktopTwoColumn ? "md:h-4 md:w-4" : ""} aria-hidden>
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </button>
              <span className={`min-h-12 px-4 text-left text-xl font-bold leading-[3rem] text-[var(--color-text-primary)]${
                desktopTwoColumn ? " md:min-h-8 md:px-2 md:text-base md:leading-normal" : ""
              }`}>
                {word}
              </span>
              <button
                type="button"
                onClick={() => (kind === "syllable" ? playSyllable(word) : playWord(word))}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-accent-lecture)] shadow-sm active:scale-95${
                  desktopTwoColumn ? " md:h-8 md:w-8" : ""
                }`}
                aria-label={`Écouter ${word}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={desktopTwoColumn ? "md:h-3 md:w-3" : ""} aria-hidden>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
              {state === "wrong" && heard[i] && (
                <p className={`col-span-4 pl-8 text-xs text-amber-600${desktopTwoColumn ? " md:pl-6 md:text-[10px]" : ""}`}>J&apos;ai entendu: {heard[i]}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
});

// Explains the two sounds of the letter C (/k/ and /s/). Tap a word to hear it.
function CSoundsExplain() {
  const groups: { sound: string; rows: { syl: string; word: string }[] }[] = [
    { sound: "/k/", rows: [
      { syl: "C + A", word: "carotte" },
      { syl: "C + O", word: "cochon" },
      { syl: "C + U", word: "cube" },
    ] },
    { sound: "/s/", rows: [
      { syl: "C + E", word: "cerise" },
      { syl: "C + I", word: "citron" },
      { syl: "C + Y", word: "cycle" },
      { syl: "Ç", word: "garçon" },
    ] },
  ];
  const play = (word: string) => playWord(word);
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">La lettre C se prononce de 2 façons</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">Touchez un mot pour l&apos;entendre.</p>
      </div>
      {groups.map((g) => (
        <div key={g.sound} className="space-y-2">
          <p className="text-xl font-bold text-[var(--color-accent-lecture)]">{g.sound}</p>
          <div className="space-y-2">
            {g.rows.map((r, i) => (
              <button
                key={r.word}
                type="button"
                onClick={() => play(r.word)}
                className="flex w-full items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 py-2 text-left transition-colors hover:border-[var(--color-accent-lecture)]/50 active:scale-[0.99]"
              >
                <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-lecture)]">{i + 1}.</span>
                <span className="w-16 shrink-0 text-lg font-bold text-[var(--color-text-primary)]">{r.syl}</span>
                <span className="shrink-0 text-xs text-[var(--color-text-secondary)]">comme dans</span>
                <span className="flex-1 text-base font-bold uppercase text-[var(--color-text-primary)]">{r.word}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-accent-lecture)] shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function LectureLetterRunner({ data: baseData, moduleId }: Props) {
  const router = useRouter();
  const evalGuard = useEvalNavGuard();
  const searchParams = useSearchParams();
  const { resolve } = useContentEditor();
  const contentKey = lectureLetterKey(baseData.letterLower);
  const data = resolve(contentKey, baseData);
  const steps = getSteps(data);
  const [stepIdx, setStepIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [wordTimerLeft, setWordTimerLeft] = useState<number | null>(null);
  const [evalSubStep, setEvalSubStep] = useState<{ idx: number; total: number; validated: boolean[]; isResults: boolean } | null>(null);
  const [wordEvalState, setWordEvalState] = useState<{ isResults: boolean; canValidate: boolean; started: boolean } | null>(null);
  const [wordEvalResult, setWordEvalResult] = useState<{ grade: number; passed: boolean; total: number } | null>(null);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (searchParams.get("eval") === "1") {
      setStepIdx(steps.length - 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setWordEvalState(null);
    setWordEvalResult(null);
    setWordTimerLeft(null);
  }, [stepIdx, resetKey]);
  const evalNavigateRef = useRef<(index: number) => void>(() => {});
  const gridRef = useRef<LetterGridHandle>(null);
  const wordRef = useRef<WordSpotterHandle>(null);
  const soundImageRef = useRef<SoundPickerHandle>(null);
  const pronounceRef = useRef<LetterPronounceHandle | ComplexGraphemePronounceHandle>(null);
  const pronounceGridRef = useRef<{ reset: () => void; validate?: () => void }>(null);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === steps.length - 1;
  const step = steps[stepIdx]!;
  const hasEvalStep = steps.some((s) => s.key === "eval" || s.key === "word-eval");
  const trainingSteps = hasEvalStep ? steps.slice(0, -1) : steps;
  const isWordEvalStep = step.key === "word-eval";
  const isTimedReview =
    (data.type === "multisyllable" && step.key === "review") ||
    step.key === "ms-review" ||
    step.key === "cv-timed" ||
    step.key === "vc-timed" ||
    step.key === "syll-timed";
  const isGridStep = step.key === "grid-upper" || step.key === "grid-lower";
  const isWordStep = ["word-upper", "word-upper-1", "word-upper-2", "word-lower"].includes(step.key);
  const isComplexGridStep = step.key === "complex-grid-upper" || step.key === "complex-grid-lower";
  const isComplexWordStep = step.key === "complex-word-upper" || step.key === "complex-word-lower";
  const isSoundImageStep = step.key === "sound-image" || step.key === "sound-image-s";
  const isSoundAudioStep = step.key === "sound-audio" || step.key === "sound-audio-s";
  const isPronounceStep = step.key === "pronounce" || step.key === "pronounce-complex";
  const isEvalStep = step.key === "eval";
  const isWordEvalL6L8 = isWordEvalStep && (data.type === "monosyllable" || data.type === "multisyllable");
  // Steps rendered with the mic/word/audio grids (SyllableGrid / WordPronounceGrid):
  // these auto-validate on correct speech, so they only need a refresh action.
  const isPronounceGridStep =
    step.key === "complex-syllables-cv" ||
    step.key === "syllables-cv" ||
    step.key === "syllables-vc" ||
    step.key === "syll-2" ||
    step.key === "syll-timed" ||
    (isWordEvalStep && !isWordEvalL6L8) ||
    data.type === "syllable" ||
    (data.type === "multisyllable" && !isWordEvalL6L8) ||
    (data.type === "monosyllable" && !isWordEvalL6L8);
  const showExerciseButtons = isGridStep || isWordStep || isComplexGridStep || isComplexWordStep || isSoundImageStep || isSoundAudioStep;
  const showRefreshButton =
    showExerciseButtons || isPronounceStep || isPronounceGridStep;

  function exerciseReset() {
    if (isGridStep || isComplexGridStep) gridRef.current?.reset();
    else if (isWordStep || isComplexWordStep) wordRef.current?.reset();
    else if (isSoundImageStep || isSoundAudioStep) soundImageRef.current?.reset();
    else if (isPronounceStep) pronounceRef.current?.reset();
    else if (isPronounceGridStep) pronounceGridRef.current?.reset();
  }
  function exerciseValidate() {
    if (isGridStep || isComplexGridStep) gridRef.current?.validate();
    else if (isWordStep || isComplexWordStep) wordRef.current?.validate();
    else if (isSoundImageStep || isSoundAudioStep) soundImageRef.current?.validate();
    else if (isWordEvalL6L8) pronounceGridRef.current?.validate?.();
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
  // During an evaluation this routes through the guard so the user is warned first.
  function goExit() {
    if (evalGuard) evalGuard.requestNavigate(() => router.push("/lecture"));
    else router.push("/lecture");
  }

  function goNext() {
    if (isWordEvalL6L8 && wordEvalState?.isResults && wordEvalResult) {
      handleEvalDone(wordEvalResult.grade, wordEvalResult.passed, wordEvalResult.total);
      return;
    }
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
    if (data.type === "syllable") {
      // L5 syllable lesson: CV / VC reading, two timed steps and an evaluation,
      // all using the mic/word/audio rows (same style as L8).
      const itemsOf = (key: string) => data.grids.find((g) => g.key === key)?.items ?? [];
      const cvUpper = itemsOf("cv-upper");
      const cvLower = itemsOf("cv-lower");
      const vcUpper = itemsOf("vc-upper");
      const vcLower = itemsOf("vc-lower");
      if (step.key === "word-eval") {
        // 30 syllables: 8+7 from CV (upper/lower) and 8+7 from VC (upper/lower).
        return (
          <WordPronounceGrid
            key={k}
            ref={pronounceGridRef}
            kind="syllable"
            sampleSpec={[
              { pool: cvUpper, n: 8 }, { pool: cvLower, n: 7 },
              { pool: vcUpper, n: 8 }, { pool: vcLower, n: 7 },
            ]}
            timerSeconds={300}
            isEval
            evalLessonTitle={data.title}
          />
        );
      }
      if (step.key === "cv2" || step.key === "vc2") {
        // Two-syllable reading: 8 uppercase + 7 lowercase sequences built from
        // the CV (consonne+voyelle, e.g. "coto") or VC (e.g. "ocot") syllables.
        const base = step.key === "cv2" ? cvLower : vcLower;
        const combos: string[] = [];
        for (const a of base) for (const b of base) if (a !== b) combos.push(a + b);
        return (
          <WordPronounceGrid
            key={k}
            ref={pronounceGridRef}
            kind="syllable"
            sampleSpec={[
              { pool: combos.map((c) => c.toUpperCase()), n: 8 },
              { pool: combos, n: 7 },
            ]}
            title="Lecture de 2 syllabes"
            consigne="Lisez chaque suite de 2 syllabes à voix haute."
          />
        );
      }
      if (step.key === "cv-timed" || step.key === "vc-timed") {
        // Timed reading: 10 two-syllable sequences (5 uppercase + 5 lowercase)
        // built from the same CV/VC combos used in the previous 2-syllable step.
        const base = step.key === "cv-timed" ? cvLower : vcLower;
        const combos: string[] = [];
        for (const a of base) for (const b of base) if (a !== b) combos.push(a + b);
        return (
          <WordPronounceGrid
            key={k}
            ref={pronounceGridRef}
            kind="syllable"
            sampleSpec={[
              { pool: combos.map((c) => c.toUpperCase()), n: 5 },
              { pool: combos, n: 5 },
            ]}
            timerSeconds={120}
            title="Lecture rapide chronométré"
            consigne="Lisez chaque suite de 2 syllabes à voix haute le plus vite possible avant la fin du temps."
            onTimeChange={setWordTimerLeft}
          />
        );
      }
      const grid = data.grids.find((entry) => entry.key === step.key) ?? data.grids[0]!;
      return (
        <WordPronounceGrid
          key={k}
          ref={pronounceGridRef}
          kind="syllable"
          words={grid.items}
          title="Lecture des syllabes"
          consigne="Prononcez chaque syllabe à voix haute."
        />
      );
    }
    if (data.type === "monosyllable" || data.type === "multisyllable") {
      const isMulti = data.type === "multisyllable";
      const evalPool = isMulti
        ? multisyllablePool(2, null)
        : data.letterLower === "outils"
          ? ALL_TOOL_WORDS
          : monosyllablePool();
      // Evaluation step. Multisyllable (L8): 25 words / 5 min. Monosyllable (L6): 30 words / 5 min.
      if (step.key === "word-eval") {
        return (
          <WordPronounceGrid
            key={k}
            ref={pronounceGridRef}
            words={evalPool}
            timerSeconds={300}
            sampleSize={isMulti ? 25 : 30}
            isEval
            evalLessonTitle={data.title}
            evalWithResults
            onTimeChange={setWordTimerLeft}
            onEvalStateChange={setWordEvalState}
            onValidated={(correct, total) => {
              const grade = linearSwissGrade(correct, total);
              setWordEvalResult({ grade, passed: grade >= getPassGrade(), total: correct });
            }}
            onFinish={() => {
              if (wordEvalResult) {
                handleEvalDone(wordEvalResult.grade, wordEvalResult.passed, wordEvalResult.total);
              } else {
                goNext();
              }
            }}
          />
        );
      }
      // Monosyllable timed reading step (L6): 15 words / 2 min.
      if (step.key === "ms-review") {
        const pool = data.letterLower === "outils" ? ALL_TOOL_WORDS : monosyllablePool();
        return (
          <WordPronounceGrid
            key={k}
            ref={pronounceGridRef}
            words={pool}
            timerSeconds={120}
            sampleSize={15}
            title="Lecture rapide chronométré"
            consigne="Prononcez chaque mot à voix haute le plus vite possible avant la fin du temps."
            onTimeChange={setWordTimerLeft}
          />
        );
      }
      const grid = data.grids.find((entry) => entry.key === step.key) ?? data.grids[0]!;
      const pool = wordsPoolForLessonGrid(data.type, data.letterLower, grid.key);
      // L6 (monosyllable) and L8 (multisyllable) word steps use the mic/word/audio rows.
      // L8 grids sample 10 random words; the "review" grid is also timed (2 min).
      // L6 grids show each unique word once (refresh re-shuffles the order).
      const timed = isMulti && grid.key === "review";
      const MS_TITLES: Record<string, string> = {
        two: "Lecture des mots à 2 syllabes",
        three: "Lecture des mots à 3 syllabes",
        four: "Lecture des mots à 4 syllabes et plus",
        review: "Lecture rapide chronométré",
      };
      const title = isMulti ? MS_TITLES[grid.key] : grid.label;
      const consigne = timed
        ? "Prononcez chaque mot à voix haute le plus vite possible avant la fin du temps."
        : "Prononcez chaque mot à voix haute.";
      return (
        <WordPronounceGrid
          key={k}
          ref={pronounceGridRef}
          words={pool}
          timerSeconds={timed ? 120 : undefined}
          sampleSize={isMulti ? 10 : undefined}
          title={title}
          consigne={consigne}
          onTimeChange={timed ? setWordTimerLeft : undefined}
        />
      );
    }
    if (data.type === "complex-sound") {
      switch (step.key) {
        case "eval":
          // L7 evaluation: same exercises as the letter lessons (grapheme grid,
          // word spotting, sound image/audio, syllables, pronunciation).
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
          return <ComplexWordSpotter key={k} ref={wordRef} target={data.letter} isUppercase={true} />;
        case "complex-word-lower":
          return <ComplexWordSpotter key={k} ref={wordRef} target={data.letter} isUppercase={false} />;
        case "sound-image":
          return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="image" />;
        case "sound-audio":
          return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="audio" />;
        case "complex-syllables-cv":
          return (
            <SyllableGrid
              key={k}
              ref={pronounceGridRef}
              graphemeLabel={data.letter}
              mode={usesGraphemeVowelSyllables(data.letterLower) ? "graph-vowel" : "cv"}
            />
          );
        case "pronounce-complex":
          return (
            <ComplexGraphemePronounce
              key={k}
              ref={pronounceRef}
              graphemeLabel={data.letter}
            />
          );
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
      case "c-sounds":
        return <CSoundsExplain key={k} />;
      case "sound-image":
        return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="image" />;
      case "sound-audio":
        return <SoundPicker key={k} ref={soundImageRef} phoneme={data.phoneme} mode="audio" />;
      case "sound-image-s":
        return <SoundPicker key={k} ref={soundImageRef} phoneme="/s/" mode="image" />;
      case "sound-audio-s":
        return <SoundPicker key={k} ref={soundImageRef} phoneme="/s/" mode="audio" />;
      case "syllables-cv":
        if (data.type !== "consonant") return null;
        return (
          <SyllableGrid
            key={k}
            ref={pronounceGridRef}
            baseLetter={data.letterLower}
            mode="cv"
            items={(data as { cvSyllables?: string[] }).cvSyllables}
          />
        );
      case "syllables-vc":
        if (data.type !== "consonant") return null;
        return (
          <SyllableGrid
            key={k}
            ref={pronounceGridRef}
            baseLetter={data.letterLower}
            mode="vc"
            items={(data as { vcSyllables?: string[] }).vcSyllables}
          />
        );
      case "syll-2": {
        if (data.type !== "consonant") return null;
        const customSyll2 = ((data as { syll2Items?: string[] }).syll2Items ?? [])
          .map((s) => s.trim())
          .filter(Boolean);
        // 2-syllable reading built from the consonant's CV syllables (e.g. "caco").
        const vowels = ["a", "o", "i", "e", "u", "y"];
        const cvLower = vowels.map((v) => `${data.letterLower}${v}`);
        const combos: string[] = [];
        for (const a of cvLower) for (const b of cvLower) if (a !== b) combos.push(a + b);
        const poolUpper = customSyll2.length
          ? customSyll2.map((c) => c.toUpperCase())
          : combos.map((c) => c.toUpperCase());
        const poolLower = customSyll2.length ? customSyll2 : combos;
        return (
          <WordPronounceGrid
            key={k}
            ref={pronounceGridRef}
            kind="syllable"
            desktopTwoColumn
            sampleSpec={[
              { pool: poolUpper, n: Math.min(8, poolUpper.length) },
              { pool: poolLower, n: Math.min(7, poolLower.length) },
            ]}
            desktopSampleSpec={[
              { pool: poolUpper, n: Math.min(6, poolUpper.length) },
              { pool: poolLower, n: Math.min(6, poolLower.length) },
            ]}
            title="Lecture de 2 syllabes"
            consigne="Lisez chaque suite de 2 syllabes à voix haute."
          />
        );
      }
      case "syll-timed": {
        if (data.type !== "consonant") return null;
        // Timed rapid reading — 6 single syllables (3 upper + 3 lower), CV and VC mixed.
        const vowels = ["a", "o", "i", "e", "u", "y"];
        const cv = vowels.map((v) => `${data.letterLower}${v}`);
        const vc = vowels.map((v) => `${v}${data.letterLower}`);
        const upper = [...cv, ...vc].map((s) => s.toUpperCase());
        const lower = [...cv, ...vc];
        return (
          <WordPronounceGrid
            key={k}
            ref={pronounceGridRef}
            kind="syllable"
            desktopTwoColumn
            sampleSpec={[
              { pool: upper, n: 3 },
              { pool: lower, n: 3 },
            ]}
            desktopSampleSpec={[
              { pool: upper, n: 6 },
              { pool: lower, n: 6 },
            ]}
            timerSeconds={120}
            title="Lecture rapide chronométré"
            consigne="Prononcez chaque syllabe à voix haute le plus vite possible avant la fin du temps."
            onTimeChange={setWordTimerLeft}
          />
        );
      }
      case "pronounce":
        return <LetterPronounce key={k} ref={pronounceRef} letterLower={data.letterLower} />;
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

  // Breadcrumb eyebrow (like français "Français · Vocabulaire · V1.1").
  const lectureModule = getLectureModule(moduleId);
  const lessonIndex = lectureModule ? lectureModule.letters.findIndex((l) => l.letterLower === data.letterLower) : -1;
  const lessonNumber = lectureModule ? `${lectureModule.code}.${lessonIndex >= 0 ? lessonIndex + 1 : 1}` : "";
  const lessonCategory =
    data.type === "syllable" || data.type === "complex-sound"
      ? "Syllabe"
      : data.type === "monosyllable" || data.type === "multisyllable"
        ? "Mot"
        : data.type === "vowel"
          ? "Voyelle"
          : "Consonne";

  return (
    <div className="app-shell flex-1 py-8 pb-56">
      <ContentEditorPanel
        contentKey={contentKey}
        label={`Lecture — ${baseData.letterLower}`}
        baseValue={baseData}
      >
        {({ value, setValue }) => (
          <LectureLetterFields value={value} setValue={setValue} />
        )}
      </ContentEditorPanel>
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture · {lessonCategory}{lessonNumber ? ` · ${lessonNumber}` : ""}
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
            {data.type === "syllable" || data.type === "monosyllable" || data.type === "multisyllable" || data.type === "complex-sound" ? data.title : `${data.letter} - ${data.letterLower} — ${lessonPhonemeLabel(data.letterLower, data.phoneme)}`}
          </h1>
        </div>
      </header>

      {/* Training progress bar — hidden during eval */}
      {!isEvalStep && !isWordEvalStep && (
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-lecture)]">Entraînement</p>
            <div className="flex items-center gap-3">
              {isTimedReview && wordTimerLeft != null && (
                <span className={`rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${
                  wordTimerLeft <= 0 ? "bg-red-100 text-amber-600" : "bg-[var(--color-accent-lecture)]/15 text-[var(--color-accent-lecture)]"
                }`}>
                  {`${Math.floor(wordTimerLeft / 60)}:${String(wordTimerLeft % 60).padStart(2, "0")}`}
                </span>
              )}
              <p className="text-xs text-[var(--color-text-secondary)]">{stepIdx + 1} / {trainingSteps.length}</p>
            </div>
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

      {/* Eval progress bar with timer — letter eval or L6/L8 word eval */}
      {isEvalStep && !evalSubStep?.isResults && (
        <EvalProgressBar
          current={evalSubStep?.idx ?? 0}
          total={evalSubStep?.total ?? 5}
          timeLeft={evalTimeLeft}
          validated={evalSubStep?.validated}
          onNavigate={(index) => evalNavigateRef.current(index)}
        />
      )}
      {isWordEvalL6L8 && wordEvalState?.started && !wordEvalState?.isResults && (
        <EvalProgressBar
          current={0}
          total={1}
          timeLeft={wordTimerLeft}
          validated={[false]}
        />
      )}

      <div className="min-h-[280px]">{renderStep()}</div>

      {/* Fixed nav bar — hidden on eval step (LectureEvaluation has its own) */}
      {!isEvalStep && <div className="hidden fixed bottom-0 left-0 right-0 bg-[var(--color-bg-primary)] z-40">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="app-shell-bar flex items-center justify-between py-3">
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

            {(showExerciseButtons || isPronounceStep || isPronounceGridStep || isWordEvalL6L8) && (
              <div className="flex items-center gap-2">
                {showRefreshButton && (
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
                )}
                {(showExerciseButtons || (isWordEvalL6L8 && wordEvalState?.canValidate)) && (
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
              disabled={isWordEvalL6L8 && !!wordEvalState?.started && !wordEvalState?.isResults}
              className={`flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] px-5 text-sm font-bold text-white transition-opacity ${
                isWordEvalL6L8 && wordEvalState?.started && !wordEvalState?.isResults
                  ? "bg-[var(--color-accent-lecture)] opacity-40 cursor-not-allowed"
                  : "bg-[var(--color-accent-lecture)] hover:opacity-90 active:opacity-80"
              }`}
            >
              {isWordEvalL6L8 && wordEvalState?.isResults ? (
                <>
                  Terminer
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </>
              ) : isLast ? (
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
