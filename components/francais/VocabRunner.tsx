"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";
import { markFrenchLessonComplete } from "@/lib/progress/french-progress";
import { linearSwissGrade, LEVEL_PASSING_GRADES, type LevelKey } from "@/lib/scoring";

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
import { EvalRevealContext } from "@/lib/eval-reveal-context";

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
const EVAL_ONLY_STEPS = EVAL_EXERCISE_STEPS.filter((s) => s.isEval);

const VOCAB_EVAL_LABELS = [
  "Article",
  "Lettres manquantes",
  "Phrases à compléter",
  "Mot (image)",
  "Dictée",
  "Phrase libre",
  "Question libre",
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

function getVocabStepHint(stepKey: string): string | undefined {
  if (stepKey.includes("image-match"))    return "Observe les images et associe chaque lettre à l'image correspondante.";
  if (stepKey.includes("article"))        return "Un/une pour l'indéfini, le/la/l' pour le défini, des/les pour le pluriel.";
  if (stepKey.includes("anagram"))        return "Réorganise les lettres pour retrouver le mot. Les mots du thème peuvent t'aider.";
  if (stepKey.includes("missing"))        return "Lis le mot à voix haute. Chaque tiret correspond à une lettre manquante.";
  if (stepKey.includes("masc-fem"))       return "Le féminin se forme souvent en ajoutant -e ou en changeant la terminaison (-eur→-euse, -er→-ère).";
  if (stepKey.includes("definition"))     return "Lis chaque définition et cherche le mot du thème qui correspond au sens.";
  if (stepKey.includes("fill"))           return "Lis la phrase entière avant de choisir. Le sens et le genre/nombre guident le choix.";
  if (stepKey.includes("image-write"))    return "Observe l'image et écris le mot correspondant. Attention à l'orthographe !";
  if (stepKey.includes("dictation"))      return "Écoute attentivement, puis écris ce que tu entends. Relis avant de valider.";
  if (stepKey.includes("word-order"))     return "Lis toutes les cartes. En français : Sujet + Verbe + Complément.";
  if (stepKey.includes("sentence-write")) return "Écris une phrase complète avec le mot. Majuscule au début, point à la fin.";
  if (stepKey.includes("question-write")) return "Réponds à la question en écrivant une phrase complète.";
  return undefined;
}

function VocabHintPopup({ hint, onClose }: { hint: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pb-36 px-4" onClick={onClose}>
      <div className="w-full max-w-xl rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5 shadow-xl" onClick={e => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="Fermer"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <p className="mb-2 text-sm font-bold text-[var(--color-accent-fr)]">💡 Astuce</p>
        <p className="pr-4 text-sm leading-relaxed text-[var(--color-text-primary)]">{hint}</p>
        <button type="button" onClick={onClose}
          className="mt-4 w-full rounded-xl bg-[var(--color-accent-fr)]/10 py-2 text-sm font-semibold text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/20">
          OK
        </button>
      </div>
    </div>
  );
}

export function VocabRunner({ theme }: Props) {
  const router = useRouter();
  const [steps] = useState<StepDef[]>(() => buildSteps(theme));
  const evalAnnounceIdx = steps.findIndex((s) => s.key === "eval-announce");
  const evalExFirst = evalAnnounceIdx + 1;
  const evalExLast = steps.length - 2; // results is last
  const evalTotal = evalExLast - evalExFirst + 1;
  const trainingStepCount = evalAnnounceIdx;
  const _evalExKeys = steps.slice(evalExFirst, evalExLast + 1).map((s) => s.key);

  const [stepIdx, setStepIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [validated, setValidated] = useState(true); // theory step first
  const [validateCommand, setValidateCommand] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [_canValidate, setCanValidate] = useState(false);
  const [evalScores, setEvalScores] = useState<Array<{ correct: number; total: number } | null>>(() => Array(evalTotal).fill(null));
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const [showEvalCancelConfirm, setShowEvalCancelConfirm] = useState(false);
  const [passingGrade] = useState(() => getPassingGrade());
  const [evalValidateCommands, setEvalValidateCommands] = useState<number[]>(() => Array(evalTotal).fill(0));
  const [evalValidated, setEvalValidated] = useState<boolean[]>(() => Array(evalTotal).fill(false));
  const [evalSessionKey, setEvalSessionKey] = useState(0);
  const [selectedResultIdx, setSelectedResultIdx] = useState<number | null>(null);

  const step = steps[stepIdx]!;
  const isLast = stepIdx === steps.length - 1;
  const showExButtons = !step.isTheory;

  const inEvalPhase = stepIdx >= evalAnnounceIdx;
  const isInEvalPhase = stepIdx >= evalExFirst && stepIdx <= evalExLast;
  const evalExIdx = isInEvalPhase ? stepIdx - evalExFirst : -1;
  const allEvalValidated = evalValidated.length > 0 && evalValidated.every(Boolean);

  const totalCorrect = evalScores.reduce((s, e) => s + (e?.correct ?? 0), 0);
  const totalItems = evalScores.reduce((s, e) => s + (e?.total ?? 0), 0);
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

  function handleValidated(_correct: number, _total: number) {
    setValidated(true);
  }

  function handleEvalValidated(idx: number, correct: number, total: number) {
    const newScores = evalScores.map((e, j) => (j === idx ? { correct, total } : e));
    setEvalScores(newScores);
    const newValidated = evalValidated.map((v, j) => (j === idx ? true : v));
    setEvalValidated(newValidated);
    setValidated(true);
    const allDone = newValidated.every(Boolean);
    if (allDone) {
      setStepIdx(steps.length - 1);
    } else {
      for (let i = 1; i <= evalTotal; i++) {
        const next = (idx + i) % evalTotal;
        if (!newValidated[next]) {
          setStepIdx(evalExFirst + next);
          return;
        }
      }
    }
  }

  function goBack() {
    if (isInEvalPhase) {
      for (let i = 1; i <= evalTotal; i++) {
        const idx = (evalExIdx - i + evalTotal) % evalTotal;
        if (!evalValidated[idx]) {
          setStepIdx(evalExFirst + idx);
          return;
        }
      }
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

  function finishResults() {
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
  }

  function goNext() {
    if (isLast) {
      finishResults();
      return;
    }
    if (isInEvalPhase) {
      if (allEvalValidated) {
        setStepIdx(steps.length - 1);
      } else {
        for (let i = 1; i <= evalTotal; i++) {
          const idx = (evalExIdx + i) % evalTotal;
          if (!evalValidated[idx]) {
            setStepIdx(evalExFirst + idx);
            return;
          }
        }
      }
      return;
    }
    const next = steps[stepIdx + 1]!;
    if (stepIdx === evalAnnounceIdx) {
      setEvalTimeLeft(EVAL_DURATION);
      setEvalValidateCommands(Array(evalTotal).fill(0));
      setEvalValidated(Array(evalTotal).fill(false));
      setEvalScores(Array(evalTotal).fill(null));
      setEvalSessionKey((k) => k + 1);
      setSelectedResultIdx(null);
    }
    setStepIdx((s) => s + 1);
    setResetKey((k) => k + 1);
    setValidateCommand(0);
    setValidated(next.isTheory);
    setCanValidate(!next.isTheory);
  }

  function handleValidate() {
    if (isInEvalPhase) {
      setEvalValidateCommands((prev) => prev.map((c, j) => (j === evalExIdx ? c + 1 : c)));
    } else {
      setValidateCommand((c) => c + 1);
    }
  }

  function handleReset() {
    setResetKey((k) => k + 1);
    setValidated(false);
    setCanValidate(true);
    setValidateCommand(0);
  }

  function retryEval() {
    setEvalScores(Array(evalTotal).fill(null));
    setEvalTimeLeft(null);
    setResetKey((k) => k + 1);
    setStepIdx(evalAnnounceIdx);
    setValidated(true);
    setCanValidate(false);
    setEvalValidateCommands(Array(evalTotal).fill(0));
    setEvalValidated(Array(evalTotal).fill(false));
    setEvalSessionKey((k) => k + 1);
    setSelectedResultIdx(null);
  }

  function cancelEval() {
    setShowEvalCancelConfirm(false);
    setEvalScores(Array(evalTotal).fill(null));
    setEvalTimeLeft(null);
    setResetKey((k) => k + 1);
    setStepIdx(evalAnnounceIdx);
    setValidated(true);
    setCanValidate(false);
    setEvalValidateCommands(Array(evalTotal).fill(0));
    setEvalValidated(Array(evalTotal).fill(false));
    setEvalSessionKey((k) => k + 1);
    setSelectedResultIdx(null);
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
        return null;
      default:
        return null;
    }
  }

  function renderEvalExercise(
    exStep: StepDef,
    validateCmd: number,
    onCVC: (v: boolean) => void,
    onValidated: (correct: number, total: number) => void
  ): React.ReactNode {
    switch (exStep.key) {
      case "eval-ex2":
        return <ExArticle theme={theme} validateCommand={validateCmd} onValidated={onValidated} onCanValidateChange={onCVC} isEval evalNumber={exStep.evalNumber} />;
      case "eval-ex4":
        return <ExMissingLetters theme={theme} validateCommand={validateCmd} onValidated={onValidated} onCanValidateChange={onCVC} isEval evalNumber={exStep.evalNumber} />;
      case "eval-ex6":
        return <ExFillSentences theme={theme} validateCommand={validateCmd} onValidated={onValidated} onCanValidateChange={onCVC} isEval evalNumber={exStep.evalNumber} />;
      case "eval-ex7":
        return <ExImageWrite theme={theme} validateCommand={validateCmd} onValidated={onValidated} onCanValidateChange={onCVC} isEval evalNumber={exStep.evalNumber} />;
      case "eval-ex8":
        return <ExDictation theme={theme} validateCommand={validateCmd} onValidated={onValidated} onCanValidateChange={onCVC} isEval evalNumber={exStep.evalNumber} />;
      case "eval-ex9":
        return <ExSentenceWrite theme={theme} validateCommand={validateCmd} onValidated={onValidated} onCanValidateChange={onCVC} isEval evalNumber={exStep.evalNumber} />;
      case "eval-ex10":
        return <ExQuestionWrite theme={theme} validateCommand={validateCmd} onValidated={onValidated} onCanValidateChange={onCVC} isEval evalNumber={exStep.evalNumber} />;
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
        <div className="mb-6" data-no-print>
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

      {/* Eval progress bar — shown only during the 7 timed exercises */}
      {isInEvalPhase && (
        <div className="mb-6" data-no-print>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-correction)]">Évaluation</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{evalTotal - evalValidated.filter(Boolean).length} restant(s)</p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: evalTotal }).map((_, i) => {
              if (evalValidated[i]) return null;
              return (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i === evalExIdx ? "bg-[var(--color-correction)]" : "bg-[var(--color-border-default)]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Hint + PDF buttons — floated right, only on exercise steps */}
      {!step.isTheory && step.key !== "results" && (
        <div className="float-right ml-2 flex gap-1.5" data-no-print>
          {getVocabStepHint(step.key) && (
            <button type="button" onClick={() => setShowHint(true)}
              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--color-accent-fr)] text-xs font-bold text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/10"
              aria-label="Aide">?</button>
          )}
          <button type="button" onClick={() => window.print()}
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--color-accent-fr)] text-[var(--color-accent-fr)] transition-colors hover:bg-[var(--color-accent-fr)]/10"
            aria-label="Imprimer en PDF">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 9V2h12v7"/><rect x="6" y="14" width="12" height="8" rx="1"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <circle cx="18" cy="13" r="0.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
      )}
      {showHint && getVocabStepHint(step.key) && (
        <div data-no-print>
          <VocabHintPopup hint={getVocabStepHint(step.key)!} onClose={() => setShowHint(false)} />
        </div>
      )}

      {/* Step content */}
      <div className="min-h-[280px]">
        {/* Training + announce only (not results, not active eval exercises) */}
        {!isInEvalPhase && step.key !== "results" && renderStep()}

        {/* Eval + Results: score at top, inline exercise expansion */}
        {(isInEvalPhase || step.key === "results") && (
          <div>
            {/* Score header — results only */}
            {step.key === "results" && (
              <div className="mb-6">
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[var(--color-accent-fr)]">Résultats</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center justify-center p-3 text-center">
                    <p className="text-[10px] text-[var(--color-text-secondary)]">Points</p>
                    <p className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {totalCorrect}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/{totalItems}</span>
                    </p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                      <div className={`h-full rounded-full transition-all duration-700 ${passed ? "bg-[var(--color-accent-fr)]" : "bg-red-400"}`} style={{ width: `${totalItems > 0 ? Math.round((totalCorrect / totalItems) * 100) : 0}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 text-center">
                    <p className="text-[10px] text-[var(--color-text-secondary)]">Note</p>
                    <p className="text-2xl font-bold text-[var(--color-text-primary)]">{grade.toFixed(1)}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/6</span></p>
                  </div>
                  <div className={`flex flex-col items-center justify-center rounded-xl border-2 bg-[var(--color-bg-primary)] p-3 text-center ${passed ? "border-green-500" : "border-red-400"}`}>
                    <p className="text-[10px] text-[var(--color-text-secondary)]">Mention</p>
                    <p className={`mt-1 text-sm font-bold ${passed ? "text-green-600" : "text-red-500"}`}>
                      {passed ? "Réussi" : "À améliorer"}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
                  Cliquez sur un exercice pour voir la correction.
                </p>
              </div>
            )}

            {/* Section label */}
            {step.key === "results" && (
              <div className="mb-3">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">Détail des points par exercice</h3>
              </div>
            )}

            {/* Exercise list — each item contains its own expansion panel */}
            <div className={step.key === "results" ? "space-y-2" : ""}>
              {EVAL_ONLY_STEPS.map((exStep, i) => {
                const isActive = isInEvalPhase && evalExIdx === i;
                const isSelectedResult = step.key === "results" && selectedResultIdx === i;
                const score = evalScores[i];
                return (
                  <div key={`eval-${evalSessionKey}-${i}`}
                    className={isInEvalPhase && !isActive ? "hidden" : "space-y-2"}>
                    {/* Row button — results only */}
                    {step.key === "results" && (
                      <button
                        type="button"
                        onClick={() => setSelectedResultIdx(isSelectedResult ? null : i)}
                        className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors ${
                          isSelectedResult
                            ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)]/10"
                            : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] hover:border-[var(--color-accent-fr)]/60"
                        }`}
                      >
                        <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-fr)]">{i + 1}</span>
                        <span className="flex-1 truncate text-xs text-[var(--color-text-secondary)]">{VOCAB_EVAL_LABELS[i] ?? `Exercice ${i + 1}`}</span>
                        {score && (
                          <span className={`shrink-0 text-xs font-bold tabular-nums ${score.correct === score.total ? "text-green-600" : score.correct > 0 ? "text-amber-600" : "text-red-500"}`}>
                            {score.correct}/{score.total}
                          </span>
                        )}
                        <svg className={`h-3 w-3 shrink-0 text-[var(--color-text-secondary)] transition-transform ${isSelectedResult ? "rotate-90" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
                      </button>
                    )}
                    {/* Exercise panel — active during eval, inline under row during results */}
                    <div className={
                      isInEvalPhase && isActive ? "" :
                      (isSelectedResult ? "px-1 py-3 [&_h2]:hidden" : "hidden")
                    }>
                      <EvalRevealContext.Provider value={step.key === "results"}>
                        {renderEvalExercise(
                          exStep,
                          isActive ? (evalValidateCommands[i] ?? 0) : 0,
                          isActive ? setCanValidate : () => {},
                          (correct, total) => handleEvalValidated(i, correct, total)
                        )}
                      </EvalRevealContext.Provider>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Fixed bottom nav */}
      {step.key !== "eval-announce" && <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
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
                  disabled={isInEvalPhase ? evalValidated[evalExIdx] : (inEvalPhase && validated)}
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
              disabled={isInEvalPhase ? false : (inEvalPhase && !validated)}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-fr)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-40"
            >
              {isLast || (isInEvalPhase && allEvalValidated) ? (
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
