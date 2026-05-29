"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";
import { markFrenchLessonComplete } from "@/lib/progress/french-progress";
import { linearSwissGrade, LEVEL_PASSING_GRADES, type LevelKey } from "@/lib/scoring";
import EvalProgressBar from "@/components/math/EvalProgressBar";
import { VocabCards } from "./vocab/VocabCards";
import { ExImageMatch } from "./vocab/ExImageMatch";
import { ExArticle } from "./vocab/ExArticle";
import { ExAnagram } from "./vocab/ExAnagram";
import { ExMissingLetters } from "./vocab/ExMissingLetters";
import { ExDefinitionMatch } from "./vocab/ExDefinitionMatch";
import { ExFillSentences } from "./vocab/ExFillSentences";
import { ExImageWrite } from "./vocab/ExImageWrite";
import { ExDictation } from "./vocab/ExDictation";
import { ExSentenceWrite } from "./vocab/ExSentenceWrite";
import { ExQuestionWrite } from "./vocab/ExQuestionWrite";
import { EvalAnnounce } from "./vocab/EvalAnnounce";
import { VocabResults } from "./vocab/VocabResults";

interface Props {
  theme: VocabTheme;
}

type StepDef = { key: string; label: string; isTheory: boolean; isEval?: boolean; evalNumber?: number };

const STEPS: StepDef[] = [
  { key: "vocab-cards",           label: "Vocabulaire",  isTheory: true },
  { key: "ex1-image-match",       label: "Ex. 1",        isTheory: false },
  { key: "ex2-article",           label: "Ex. 2",        isTheory: false },
  { key: "ex3-anagram",           label: "Ex. 3",        isTheory: false },
  { key: "ex4-missing-letters",   label: "Ex. 4",        isTheory: false },
  { key: "ex5-definition-match",  label: "Ex. 5",        isTheory: false },
  { key: "ex6-fill-sentences",    label: "Ex. 6",        isTheory: false },
  { key: "ex7-image-write",       label: "Ex. 7",        isTheory: false },
  { key: "ex8-dictation",         label: "Ex. 8",        isTheory: false },
  { key: "ex9-sentence-write",    label: "Ex. 9",        isTheory: false },
  { key: "ex10-question-write",   label: "Ex. 10",       isTheory: false },
  { key: "eval-announce",         label: "Évaluation",   isTheory: true },
  { key: "eval-ex2",              label: "Éval. 1",      isTheory: false, isEval: true, evalNumber: 1 },
  { key: "eval-ex4",              label: "Éval. 2",      isTheory: false, isEval: true, evalNumber: 2 },
  { key: "eval-ex6",              label: "Éval. 3",      isTheory: false, isEval: true, evalNumber: 3 },
  { key: "eval-ex7",              label: "Éval. 4",      isTheory: false, isEval: true, evalNumber: 4 },
  { key: "eval-ex8",              label: "Éval. 5",      isTheory: false, isEval: true, evalNumber: 5 },
  { key: "eval-ex9",              label: "Éval. 6",      isTheory: false, isEval: true, evalNumber: 6 },
  { key: "eval-ex10",             label: "Éval. 7",      isTheory: false, isEval: true, evalNumber: 7 },
  { key: "results",               label: "Résultats",    isTheory: true },
];

const TRAINING_STEPS = 11; // steps 0–10
const EVAL_START_IDX = 11; // eval-announce
const EVAL_EX_FIRST = 12;  // first eval exercise
const EVAL_EX_LAST = 18;   // last eval exercise (eval-ex10)
const EVAL_TOTAL = 7;

const EVAL_EXERCISE_KEYS = ["eval-ex2","eval-ex4","eval-ex6","eval-ex7","eval-ex8","eval-ex9","eval-ex10"];
const EVAL_DURATION = 10 * 60; // 10 minutes

function getPassingGrade(): number {
  if (typeof window === "undefined") return 4;
  try {
    const level = (localStorage.getItem("soutien-level") ?? "base") as LevelKey;
    return LEVEL_PASSING_GRADES[level] ?? 4;
  } catch {
    return 4;
  }
}

export function VocabRunner({ theme }: Props) {
  const router = useRouter();
  const [stepIdx, setStepIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [validated, setValidated] = useState(true); // theory step first
  const [validateCommand, setValidateCommand] = useState(0);
  const [_canValidate, setCanValidate] = useState(false);
  const [evalScores, setEvalScores] = useState<Array<{ correct: number; total: number }>>([]);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const [showEvalCancelConfirm, setShowEvalCancelConfirm] = useState(false);
  const [passingGrade] = useState(() => getPassingGrade());

  const step = STEPS[stepIdx]!;
  const isLast = stepIdx === STEPS.length - 1;
  const showExButtons = !step.isTheory;

  // inEvalPhase: on or past eval-announce (step 11)
  const inEvalPhase = stepIdx >= EVAL_START_IDX;
  // isInEvalPhase: on one of the 7 timed eval exercises
  const isInEvalPhase = stepIdx >= EVAL_EX_FIRST && stepIdx <= EVAL_EX_LAST;

  const totalCorrect = evalScores.reduce((s, e) => s + e.correct, 0);
  const totalItems = evalScores.reduce((s, e) => s + e.total, 0);
  const grade = linearSwissGrade(totalCorrect, totalItems);
  const passed = grade >= passingGrade;

  // Timer countdown
  useEffect(() => {
    if (!isInEvalPhase || evalTimeLeft === null || evalTimeLeft <= 0) return;
    const id = setInterval(() => setEvalTimeLeft((t) => (t ?? 1) - 1), 1000);
    return () => clearInterval(id);
  }, [isInEvalPhase, evalTimeLeft]);

  // Auto-advance to results when timer expires
  useEffect(() => {
    if (evalTimeLeft !== 0 || !isInEvalPhase) return;
    setStepIdx(STEPS.length - 1);
    setValidated(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evalTimeLeft]);

  function handleValidated(correct: number, total: number) {
    if (EVAL_EXERCISE_KEYS.includes(step.key)) {
      setEvalScores((prev) => [...prev, { correct, total }]);
    }
    setValidated(true);
  }

  function goBack() {
    if (isInEvalPhase) {
      setShowEvalCancelConfirm(true);
      return;
    }
    if (stepIdx === 0) {
      router.push("/francais");
    } else {
      const prev = STEPS[stepIdx - 1]!;
      setStepIdx((s) => s - 1);
      setResetKey((k) => k + 1);
      setValidated(prev.isTheory);
      setCanValidate(!prev.isTheory);
    }
  }

  function goNext() {
    if (isLast) {
      try {
        const stored = JSON.parse(localStorage.getItem("soutien-vocab-eval-v1") ?? "{}");
        stored[theme.slug] = { score: grade, passed, date: new Date().toISOString() };
        localStorage.setItem("soutien-vocab-eval-v1", JSON.stringify(stored));
      } catch {}
      if (passed) {
        markFrenchLessonComplete(theme.slug);
        window.dispatchEvent(new CustomEvent("soutien-french-lesson-complete"));
      }
      router.push("/francais");
    } else {
      const next = STEPS[stepIdx + 1]!;
      if (stepIdx === EVAL_START_IDX) setEvalTimeLeft(EVAL_DURATION); // start timer on leaving eval-announce
      setStepIdx((s) => s + 1);
      setResetKey((k) => k + 1);
      setValidated(next.isTheory);
      setCanValidate(!next.isTheory);
    }
  }

  function handleValidate() {
    setValidateCommand((c) => c + 1);
  }

  function handleReset() {
    setResetKey((k) => k + 1);
    setValidated(false);
    setCanValidate(true);
    setValidateCommand(0);
  }

  function retryEval() {
    setEvalScores([]);
    setEvalTimeLeft(null);
    setResetKey((k) => k + 1);
    setStepIdx(EVAL_START_IDX);
    setValidated(true);
    setCanValidate(false);
  }

  function cancelEval() {
    setShowEvalCancelConfirm(false);
    setEvalScores([]);
    setEvalTimeLeft(null);
    setResetKey((k) => k + 1);
    setStepIdx(EVAL_START_IDX);
    setValidated(true);
    setCanValidate(false);
  }

  const componentKey = `${step.key}-${resetKey}`;

  function renderStep() {
    switch (step.key) {
      case "vocab-cards":
        return <VocabCards key={componentKey} theme={theme} onCanValidateChange={setCanValidate} />;
      case "ex1-image-match":
        return <ExImageMatch key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex2-article":
        return <ExArticle key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex3-anagram":
        return <ExAnagram key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex4-missing-letters":
        return <ExMissingLetters key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex5-definition-match":
        return <ExDefinitionMatch key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex6-fill-sentences":
        return <ExFillSentences key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex7-image-write":
        return <ExImageWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex8-dictation":
        return <ExDictation key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex9-sentence-write":
        return <ExSentenceWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "ex10-question-write":
        return <ExQuestionWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} />;
      case "eval-announce":
        return <EvalAnnounce key={componentKey} theme={theme} onCanValidateChange={setCanValidate} />;
      case "eval-ex2":
        return <ExArticle key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} isEval evalNumber={step.evalNumber} />;
      case "eval-ex4":
        return <ExMissingLetters key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} isEval evalNumber={step.evalNumber} />;
      case "eval-ex6":
        return <ExFillSentences key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} isEval evalNumber={step.evalNumber} />;
      case "eval-ex7":
        return <ExImageWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} isEval evalNumber={step.evalNumber} />;
      case "eval-ex8":
        return <ExDictation key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} isEval evalNumber={step.evalNumber} />;
      case "eval-ex9":
        return <ExSentenceWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} isEval evalNumber={step.evalNumber} />;
      case "eval-ex10":
        return <ExQuestionWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} isEval evalNumber={step.evalNumber} />;
      case "results":
        return <VocabResults key={componentKey} evalScores={evalScores} grade={grade} passingGrade={passingGrade} />;
      default:
        return null;
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-56">

      {/* Cancel eval confirmation dialog */}
      {showEvalCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mx-4 w-full max-w-sm space-y-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] p-6 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Annuler l&apos;évaluation ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Ta progression dans l&apos;évaluation sera perdue.</p>
            <div className="flex gap-3">
              <button type="button" onClick={cancelEval}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]">
                Annuler
              </button>
              <button type="button" onClick={() => setShowEvalCancelConfirm(false)}
                className="flex-1 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-fr)]">
          Français · Vocabulaire · {theme.section}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/francais"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-fr)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour au français"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {theme.title}
          </h1>
        </div>
      </header>

      {/* Training progress bar — hidden during eval */}
      {!inEvalPhase && (
        <div className="mb-6 flex items-center gap-2">
          <span className="w-24 shrink-0 text-right text-[9px] font-medium uppercase tracking-wide text-[var(--color-text-tertiary)]">
            Entraînement
          </span>
          <div className="flex flex-1 gap-0.5">
            {STEPS.slice(0, TRAINING_STEPS).map((s, i) => (
              <div
                key={s.key}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  stepIdx > i
                    ? "bg-[var(--color-accent-fr)]"
                    : stepIdx === i
                      ? "bg-[var(--color-accent-fr)] opacity-60"
                      : "bg-[var(--color-border-default)]"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Eval progress bar with timer — shown only during the 7 timed exercises */}
      {isInEvalPhase && (
        <EvalProgressBar
          current={stepIdx - EVAL_EX_FIRST}
          total={EVAL_TOTAL}
          timeLeft={evalTimeLeft}
        />
      )}

      {/* Step content */}
      <div className="min-h-[280px]">{renderStep()}</div>

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">

            {/* Back — or Retry on results */}
            {isLast ? (
              <button
                type="button"
                onClick={retryEval}
                className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" />
                </svg>
                Refaire
              </button>
            ) : (
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
            )}

            {/* Reset + Validate (exercise steps only; no reset during eval) */}
            {showExButtons && (
              <div className="flex items-center gap-2">
                {!step.isEval && (
                  <button
                    type="button"
                    aria-label="Recommencer"
                    onClick={handleReset}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M1 4v6h6" />
                      <path d="M3.51 15a9 9 0 1 0 .49-4" />
                    </svg>
                  </button>
                )}
                <button
                  type="button"
                  aria-label="Valider"
                  onClick={handleValidate}
                  disabled={validated}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-fr)] text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90 disabled:opacity-40"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </button>
              </div>
            )}

            {/* Next / Terminer */}
            <button
              type="button"
              onClick={goNext}
              disabled={!validated}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-40"
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
        <div className="h-[68px]" />
      </div>
    </div>
  );
}
