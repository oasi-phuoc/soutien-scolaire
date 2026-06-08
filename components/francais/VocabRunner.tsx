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
import { ExMascFem } from "./vocab/ExMascFem";
import { ExImageWrite } from "./vocab/ExImageWrite";
import { ExDictation } from "./vocab/ExDictation";
import { ExWordOrder } from "./vocab/ExWordOrder";
import { ExSentenceWrite } from "./vocab/ExSentenceWrite";
import { ExQuestionWrite } from "./vocab/ExQuestionWrite";
import { EvalAnnounce } from "./vocab/EvalAnnounce";
import { VocabResults } from "./vocab/VocabResults";

interface Props {
  theme: VocabTheme;
}

type StepDef = { key: string; label: string; isTheory: boolean; isEval?: boolean; evalNumber?: number };

const EVAL_EXERCISE_STEPS: StepDef[] = [
  { key: "eval-announce", label: "Évaluation", isTheory: true },
  { key: "eval-ex2",  label: "Éval. 1", isTheory: false, isEval: true, evalNumber: 1 },
  { key: "eval-ex4",  label: "Éval. 2", isTheory: false, isEval: true, evalNumber: 2 },
  { key: "eval-ex6",  label: "Éval. 3", isTheory: false, isEval: true, evalNumber: 3 },
  { key: "eval-ex7",  label: "Éval. 4", isTheory: false, isEval: true, evalNumber: 4 },
  { key: "eval-ex8",  label: "Éval. 5", isTheory: false, isEval: true, evalNumber: 5 },
  { key: "eval-ex9",  label: "Éval. 6", isTheory: false, isEval: true, evalNumber: 6 },
  { key: "eval-ex10", label: "Éval. 7", isTheory: false, isEval: true, evalNumber: 7 },
  { key: "results",   label: "Résultats", isTheory: true },
];

function buildSteps(theme: { words: Array<{ feminine?: string }> }): StepDef[] {
  const hasMF = theme.words.filter((w) => !!w.feminine).length >= 5;
  const n = (base: number) => hasMF ? base + 1 : base;
  const training: StepDef[] = [
    { key: "vocab-cards",          label: "Vocabulaire",      isTheory: true },
    { key: "ex1-image-match",      label: "Ex. 1",            isTheory: false },
    { key: "ex2-article",          label: "Ex. 2",            isTheory: false },
    { key: "ex4-missing-letters",  label: "Ex. 3",            isTheory: false },
    { key: "ex3-anagram",          label: "Ex. 4",            isTheory: false },
    { key: "ex5-definition-match", label: "Ex. 5",            isTheory: false },
    { key: "ex6-fill-sentences",   label: "Ex. 6",            isTheory: false },
    ...(hasMF ? [{ key: "ex-masc-fem",    label: "Ex. 7",            isTheory: false }] : []),
    { key: "ex7-image-write",      label: `Ex. ${n(7)}`,      isTheory: false },
    { key: "ex8-dictation",        label: `Ex. ${n(8)}`,      isTheory: false },
    { key: "ex-word-order",        label: `Ex. ${n(9)}`,      isTheory: false },
    { key: "ex9-sentence-write",   label: `Ex. ${n(10)}`,     isTheory: false },
    { key: "ex10-question-write",  label: `Ex. ${n(11)}`,     isTheory: false },
  ];
  return [...training, ...EVAL_EXERCISE_STEPS];
}

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
  const [steps] = useState<StepDef[]>(() => buildSteps(theme));
  const evalAnnounceIdx = steps.findIndex((s) => s.key === "eval-announce");
  const evalExFirst = evalAnnounceIdx + 1;
  const evalExLast = steps.length - 2; // results is last
  const evalTotal = evalExLast - evalExFirst + 1;
  const trainingStepCount = evalAnnounceIdx;
  const evalExKeys = steps.slice(evalExFirst, evalExLast + 1).map((s) => s.key);

  const [stepIdx, setStepIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [validated, setValidated] = useState(true); // theory step first
  const [validateCommand, setValidateCommand] = useState(0);
  const [canValidate, setCanValidate] = useState(false);
  const [evalScores, setEvalScores] = useState<Array<{ correct: number; total: number }>>([]);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const [showEvalCancelConfirm, setShowEvalCancelConfirm] = useState(false);
  const [passingGrade] = useState(() => getPassingGrade());

  const step = steps[stepIdx]!;
  const isLast = stepIdx === steps.length - 1;
  const showExButtons = !step.isTheory;

  const inEvalPhase = stepIdx >= evalAnnounceIdx;
  const isInEvalPhase = stepIdx >= evalExFirst && stepIdx <= evalExLast;

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
    setStepIdx(steps.length - 1);
    setValidated(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evalTimeLeft]);

  function handleValidated(correct: number, total: number) {
    if (evalExKeys.includes(step.key)) {
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
      const prev = steps[stepIdx - 1]!;
      setStepIdx((s) => s - 1);
      setResetKey((k) => k + 1);
      setValidateCommand(0);
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
      const next = steps[stepIdx + 1]!;
      if (stepIdx === evalAnnounceIdx) setEvalTimeLeft(EVAL_DURATION);
      setStepIdx((s) => s + 1);
      setResetKey((k) => k + 1);
      setValidateCommand(0);
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
    setStepIdx(evalAnnounceIdx);
    setValidated(true);
    setCanValidate(false);
  }

  function cancelEval() {
    setShowEvalCancelConfirm(false);
    setEvalScores([]);
    setEvalTimeLeft(null);
    setResetKey((k) => k + 1);
    setStepIdx(evalAnnounceIdx);
    setValidated(true);
    setCanValidate(false);
  }

  const componentKey = `${step.key}-${resetKey}`;

  function renderStep() {
    const exNum = stepIdx; // vocab-cards=0, ex1=1, ex2=2, ...
    switch (step.key) {
      case "vocab-cards":
        return <VocabCards key={componentKey} theme={theme} onCanValidateChange={setCanValidate} />;
      case "ex1-image-match":
        return <ExImageMatch key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex2-article":
        return <ExArticle key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex3-anagram":
        return <ExAnagram key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex4-missing-letters":
        return <ExMissingLetters key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex5-definition-match":
        return <ExDefinitionMatch key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex6-fill-sentences":
        return <ExFillSentences key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex-masc-fem":
        return <ExMascFem key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex7-image-write":
        return <ExImageWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex8-dictation":
        return <ExDictation key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex-word-order":
        return <ExWordOrder key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex9-sentence-write":
        return <ExSentenceWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "ex10-question-write":
        return <ExQuestionWrite key={componentKey} theme={theme} validateCommand={validateCommand} onValidated={handleValidated} onCanValidateChange={setCanValidate} exerciseNumber={exNum} />;
      case "eval-announce":
        return <EvalAnnounce key={componentKey} theme={theme} onCanValidateChange={setCanValidate} onStart={goNext} />;
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
          Français · Vocabulaire · {theme.code}
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
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-fr)]">Entraînement</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{stepIdx + 1} / {trainingStepCount}</p>
          </div>
          <div className="flex gap-1">
            {steps.slice(0, trainingStepCount).map((s, i) => (
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
          current={stepIdx - evalExFirst}
          total={evalTotal}
          timeLeft={evalTimeLeft}
        />
      )}

      {/* Step content */}
      <div className="min-h-[280px]">{renderStep()}</div>

      {/* Fixed bottom nav */}
      {step.key !== "eval-announce" && <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
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
                  disabled={(inEvalPhase && validated) || !canValidate}
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
              disabled={inEvalPhase && !validated}
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
        <div className="h-[72px]" />
      </div>}
    </div>
  );
}
