"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { answerMatches } from "@/lib/curriculum/content/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math-a1-types";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";

// ── Step types ────────────────────────────────────────────────────────────────

type TheoryStep        = { kind: "theory";          lesson: MathSubmoduleLesson };
type FractionToggleStep = { kind: "fraction_toggle"; lesson: MathSubmoduleLesson };
type ExerciseStep      = { kind: "exercise";         lesson: MathSubmoduleLesson; item: MathExerciseItem; exNum: number };
type FlatStep = TheoryStep | FractionToggleStep | ExerciseStep;

function shufflePick<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

function buildSteps(lessons: MathSubmoduleLesson[]): FlatStep[] {
  const steps: FlatStep[] = [];
  for (const lesson of lessons) {
    steps.push({ kind: "theory", lesson });
    if (lesson.submoduleId === "A4-1") {
      steps.push({ kind: "fraction_toggle", lesson });
    } else {
      const pool = lesson.exercisePool;
      const size = lesson.poolSize ?? 5;
      const exs = pool && pool.length > 0 ? shufflePick(pool, size) : lesson.exercises.slice(0, size);
      exs.forEach((item, i) => steps.push({ kind: "exercise", lesson, item, exNum: i + 1 }));
    }
  }
  return steps;
}

// ── Block renderer (theory) ───────────────────────────────────────────────────

function BlockView({ block }: { block: MathRichBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="mt-4 mb-1 text-sm font-bold uppercase tracking-wide text-[var(--color-accent-alg)]">
          {block.fr}
        </h3>
      );
    case "plain":
      return <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{block.fr}</p>;
    case "note":
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300">
          {block.fr}
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl bg-[var(--color-bg-secondary)] px-4 py-3 font-mono text-xs text-[var(--color-text-primary)]">
          {block.fr}
        </div>
      );
    case "highlight":
      return (
        <div className="rounded-xl border border-[var(--color-accent-alg)]/30 bg-[var(--color-accent-alg)]/8 px-4 py-3 text-sm font-semibold text-[var(--color-text-primary)]">
          {block.fr}
        </div>
      );
    case "rule":
      return (
        <div className="space-y-2 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3">
          <p className="text-xs font-bold text-[var(--color-text-primary)]">{block.titleFr}</p>
          <ul className="list-disc space-y-1 pl-4">
            {block.itemsFr.map((it, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)]">{it}</li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-[var(--color-bg-secondary)]">
                {block.headersFr.map((h, i) => (
                  <th key={i} className="px-3 py-2 text-left font-semibold text-[var(--color-text-primary)]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-[var(--color-border-default)]">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-[var(--color-text-secondary)]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.captionFr && (
            <p className="px-3 py-1 text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    case "svg":
      return (
        <div className="my-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    default:
      return null;
  }
}

function TheoryView({ lesson }: { lesson: MathSubmoduleLesson }) {
  const { theory, submoduleCode } = lesson;
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
          {submoduleCode}
        </p>
        <h2 className="mt-0.5 text-lg font-bold text-[var(--color-text-primary)]">{theory.title.fr}</h2>
      </div>
      {theory.blocks && theory.blocks.length > 0 ? (
        <div className="space-y-3">
          {theory.blocks.map((block, i) => <BlockView key={i} block={block} />)}
        </div>
      ) : (
        <div className="space-y-3">
          {theory.paragraphs.fr.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Fraction display ──────────────────────────────────────────────────────────

function FractionDisplay({
  numerator,
  denominator,
  highlightPart,
}: {
  numerator: number;
  denominator: number;
  highlightPart: "num" | "den";
}) {
  return (
    <span className="inline-flex flex-col items-center gap-1 py-1">
      <span
        className={`text-3xl font-bold leading-none tabular-nums ${
          highlightPart === "num"
            ? "text-[var(--color-accent-alg)]"
            : "text-[var(--color-text-primary)]"
        }`}
      >
        {numerator}
      </span>
      <span className="h-[3px] w-10 rounded bg-[var(--color-text-primary)]" />
      <span
        className={`text-3xl font-bold leading-none tabular-nums ${
          highlightPart === "den"
            ? "text-[var(--color-accent-alg)]"
            : "text-[var(--color-text-primary)]"
        }`}
      >
        {denominator}
      </span>
    </span>
  );
}

// ── Fraction toggle exercise ──────────────────────────────────────────────────

type FractionItem = { numerator: number; denominator: number; highlight: "num" | "den" };

function generateFractionItems(): FractionItem[] {
  const pairs: { n: number; d: number }[] = [];
  const used = new Set<string>();
  while (pairs.length < 5) {
    const n = Math.floor(Math.random() * 9) + 1;
    const d = Math.floor(Math.random() * 9) + 1;
    if (n !== d && !used.has(`${n}-${d}`)) {
      pairs.push({ n, d });
      used.add(`${n}-${d}`);
    }
  }
  return pairs.map(({ n, d }, i) => ({
    numerator: n,
    denominator: d,
    highlight: (i % 2 === 0 ? "num" : "den") as "num" | "den",
  }));
}

function FractionToggleExercise({
  validateCommand,
  onValidated,
}: {
  validateCommand: number;
  onValidated: (allCorrect: boolean) => void;
}) {
  const [items] = useState<FractionItem[]>(generateFractionItems);
  const [selected, setSelected] = useState<(string | null)[]>(() => Array(5).fill(null));
  const [validated, setValidated] = useState(false);

  function select(i: number, choice: "num" | "den") {
    if (validated) return;
    setSelected((prev) => {
      const next = [...prev];
      next[i] = choice;
      return next;
    });
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const allOk = items.every((item, i) => selected[i] === item.highlight);
    onValidated(allOk);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, items, selected]);

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const mkCls = (chosen: boolean, isCorrect: boolean, isRight: boolean) => {
    let cls = `flex-1 py-2.5 text-sm font-medium text-center transition-colors `;
    if (isRight) cls += "border-l border-[var(--color-border-default)] ";
    if (!validated) {
      cls += chosen
        ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
        : "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]";
    } else {
      cls += chosen
        ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
        : isCorrect
          ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
          : "bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-50";
    }
    return cls;
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">
          Exercice 1 — Identifie numérateur et dénominateur
        </h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Le nombre en bleu est-il le numérateur ou le dénominateur ?
        </p>
      </div>

      <div className="space-y-5">
        {items.map((item, i) => {
          const numSel = selected[i] === "num";
          const denSel = selected[i] === "den";
          const numCorrect = item.highlight === "num";
          const denCorrect = item.highlight === "den";

          return (
            <div key={i} className="space-y-2">
              <p className="text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</p>
              <div className="flex items-center gap-4">
                <FractionDisplay
                  numerator={item.numerator}
                  denominator={item.denominator}
                  highlightPart={item.highlight}
                />
                <div className="flex flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
                  <button
                    type="button"
                    className={mkCls(numSel, numCorrect, false)}
                    onClick={() => select(i, "num")}
                    disabled={validated}
                  >
                    numérateur
                  </button>
                  <button
                    type="button"
                    className={mkCls(denSel, denCorrect, true)}
                    onClick={() => select(i, "den")}
                    disabled={validated}
                  >
                    dénominateur
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function A4ModuleContent() {
  const router = useRouter();
  const lessons = getLessonsForModule("A4");
  const [steps] = useState<FlatStep[]>(() => (lessons ? buildSteps(lessons) : []));
  const [stepIdx, setStepIdx] = useState(0);
  const [exerciseKey, setExerciseKey] = useState(0);
  const [validateCommand, setValidateCommand] = useState(0);
  const [canValidate, setCanValidate] = useState(true);

  // For generic text exercises (A4.2+)
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);

  const currentStep = steps[stepIdx];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;
  const isExercise = currentStep?.kind === "exercise" || currentStep?.kind === "fraction_toggle";

  const goTo = useCallback((idx: number) => {
    setStepIdx(idx);
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setValidateCommand(0);
    setCanValidate(true);
    setExerciseKey((k) => k + 1);
  }, []);

  function goBack() {
    if (!isFirstStep) goTo(stepIdx - 1);
  }

  function goNext() {
    if (isLastStep) {
      router.push("/mathematiques");
    } else {
      goTo(stepIdx + 1);
    }
  }

  function refresh() {
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setValidateCommand(0);
    setCanValidate(true);
    setExerciseKey((k) => k + 1);
  }

  function handleFractionValidated(allCorrect: boolean) {
    setCanValidate(false);
    if (currentStep?.kind === "fraction_toggle") {
      const p = loadProgress();
      saveProgress(completeSubmodule(p, "A4", currentStep.lesson.submoduleId));
    }
    void allCorrect;
  }

  function validateText() {
    if (currentStep?.kind !== "exercise") return;
    const ok = answerMatches(answer, currentStep.item.acceptable);
    setExStatus(ok ? "correct" : "wrong");
    setExAttempts((a) => a + 1);
    if (ok) {
      setCanValidate(false);
      const nextStep = steps[stepIdx + 1];
      const isLastOfLesson =
        !nextStep ||
        nextStep.kind !== "exercise" ||
        nextStep.lesson.submoduleId !== currentStep.lesson.submoduleId;
      if (isLastOfLesson) {
        const p = loadProgress();
        saveProgress(completeSubmodule(p, "A4", currentStep.lesson.submoduleId));
      }
    }
  }

  const validateDisabled =
    currentStep?.kind === "fraction_toggle" ? !canValidate : exStatus === "correct";

  if (!lessons || steps.length === 0) {
    return <p className="text-sm text-[var(--color-text-secondary)]">Contenu non disponible.</p>;
  }

  return (
    <div className="pb-40">
      {/* Progress bar */}
      <div className="mb-6 flex gap-1">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < stepIdx
                ? "bg-[var(--color-accent-alg)]"
                : i === stepIdx
                  ? "bg-[var(--color-accent-alg)] opacity-60"
                  : "bg-[var(--color-border-default)]"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      {currentStep?.kind === "theory" && <TheoryView lesson={currentStep.lesson} />}

      {currentStep?.kind === "fraction_toggle" && (
        <FractionToggleExercise
          key={exerciseKey}
          validateCommand={validateCommand}
          onValidated={handleFractionValidated}
        />
      )}

      {currentStep?.kind === "exercise" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-[var(--color-text-primary)]">
              Exercice {currentStep.exNum} — {currentStep.lesson.submoduleCode}
            </h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
              {currentStep.item.promptFr}
            </p>
          </div>

          <input
            key={exerciseKey}
            type={currentStep.item.type === "number" ? "number" : "text"}
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              if (exStatus !== "idle") setExStatus("idle");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && answer.trim() && exStatus !== "correct") validateText();
            }}
            placeholder="Votre réponse…"
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
              exStatus === "correct"
                ? "border-green-400 bg-green-50 dark:bg-green-950/20"
                : exStatus === "wrong"
                  ? "border-red-400 bg-red-50 dark:bg-red-950/20"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"
            }`}
          />

          {exStatus === "correct" && (
            <p className="text-xs font-medium text-green-600 dark:text-green-400">✓ Correct !</p>
          )}
          {exStatus === "wrong" && (
            <p className="text-xs font-medium text-red-500">
              {exAttempts >= 2 ? `Réponse : ${currentStep.item.acceptable[0]}` : "Essayez encore…"}
            </p>
          )}
        </div>
      )}

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={goBack}
              disabled={isFirstStep}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Retour
            </button>

            {isExercise && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Recommencer l'exercice"
                  onClick={refresh}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M1 4v6h6" />
                    <path d="M3.51 15a9 9 0 1 0 .49-4" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Valider l'exercice"
                  onClick={() => {
                    if (currentStep?.kind === "fraction_toggle") {
                      setValidateCommand((c) => c + 1);
                    } else {
                      validateText();
                    }
                  }}
                  disabled={validateDisabled}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-90 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={goNext}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
            >
              {isLastStep ? (
                <>Terminer <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg></>
              ) : (
                <>Suivant <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6" /></svg></>
              )}
            </button>
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
    </div>
  );
}
