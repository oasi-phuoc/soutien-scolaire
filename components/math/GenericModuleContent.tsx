"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math-a1-types";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";

// ── Step types ──────────────────────────────────────────────────────────────
type TheoryStep = { kind: "theory"; lesson: MathSubmoduleLesson };
type ExerciseStep = { kind: "exercise"; lesson: MathSubmoduleLesson; item: MathExerciseItem };
type FlatStep = TheoryStep | ExerciseStep;

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
    const pool = lesson.exercisePool;
    const size = lesson.poolSize ?? 5;
    const exercises =
      pool && pool.length > 0 ? shufflePick(pool, size) : lesson.exercises.slice(0, size);
    for (const item of exercises) {
      steps.push({ kind: "exercise", lesson, item });
    }
  }
  return steps;
}

// ── Rich block renderer ──────────────────────────────────────────────────────
function BlockView({ block }: { block: MathRichBlock }) {
  switch (block.type) {
    case "heading":
      return block.black ? (
        <h3 className="mt-3 mb-1 text-sm font-bold text-[var(--color-text-primary)]">{block.fr}</h3>
      ) : (
        <h3 className="mt-4 mb-1 text-sm font-bold uppercase tracking-wide text-[var(--color-accent-alg)]">{block.fr}</h3>
      );
    case "plain":
      return (
        <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{block.fr}</p>
      );
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
        <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3 space-y-2">
          <p className="text-xs font-bold text-[var(--color-text-primary)]">{block.titleFr}</p>
          <ul className="list-disc space-y-1 pl-4">
            {block.itemsFr.map((it, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)]">
                {it}
              </li>
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
                  <th
                    key={i}
                    className={`px-3 py-2 text-left font-semibold ${block.accentHeader ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-[var(--color-border-default)]">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-[var(--color-text-secondary)]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.captionFr && (
            <p className="px-3 py-1 text-[10px] text-[var(--color-text-secondary)]">
              {block.captionFr}
            </p>
          )}
        </div>
      );
    case "svg":
      return block.noFrame ? (
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      ) : (
        <div className="my-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    case "section":
      return (
        <div className="space-y-1.5">
          <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent-alg)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case "svg_row":
      return (
        <div className="flex gap-3">
          {block.items.map((item, ii) => (
            <div key={ii} className="flex-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
              <div dangerouslySetInnerHTML={{ __html: item.markup }} />
              {item.captionFr && (
                <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{item.captionFr}</p>
              )}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

// ── Theory view ──────────────────────────────────────────────────────────────
function TheoryView({ lesson }: { lesson: MathSubmoduleLesson }) {
  const { theory, submoduleCode } = lesson;
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
          {submoduleCode}
        </p>
        <h2 className="mt-0.5 text-lg font-bold text-[var(--color-text-primary)]">
          {theory.title.fr}
        </h2>
      </div>
      {theory.blocks && theory.blocks.length > 0 ? (
        <div className="space-y-3">
          {theory.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {theory.paragraphs.fr.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)]">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export function GenericModuleContent({ moduleId, startSubmoduleId }: { moduleId: string; startSubmoduleId?: string }) {
  const router = useRouter();
  const allLessons = getLessonsForModule(moduleId);
  const lessons = startSubmoduleId && allLessons
    ? allLessons.filter((l) => l.submoduleId === startSubmoduleId)
    : allLessons;

  // Build steps once on mount (randomized pool)
  const [steps] = useState<FlatStep[]>(() =>
    lessons && lessons.length > 0 ? buildSteps(lessons) : [],
  );

  const [stepIdx, setStepIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);

  const currentStep = steps[stepIdx];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;

  const goTo = useCallback(
    (idx: number) => {
      setStepIdx(idx);
      setAnswer("");
      setExStatus("idle");
      setExAttempts(0);
    },
    [],
  );

  const goBack = useCallback(() => {
    if (!isFirstStep) goTo(stepIdx - 1);
  }, [isFirstStep, stepIdx, goTo]);

  const goNext = useCallback(() => {
    if (isLastStep) {
      // Mark complete if on the last exercise of a lesson
      if (currentStep?.kind === "exercise" && exStatus === "correct") {
        const p = loadProgress();
        saveProgress(completeSubmodule(p, moduleId, currentStep.lesson.submoduleId));
      }
      router.push("/mathematiques");
    } else {
      // Mark submodule complete when leaving the last exercise of a lesson
      if (currentStep?.kind === "exercise") {
        const nextStep = steps[stepIdx + 1];
        const isLastExOfLesson =
          !nextStep || nextStep.kind !== "exercise" || nextStep.lesson.submoduleId !== currentStep.lesson.submoduleId;
        if (isLastExOfLesson && exStatus === "correct") {
          const p = loadProgress();
          saveProgress(completeSubmodule(p, moduleId, currentStep.lesson.submoduleId));
        }
      }
      goTo(stepIdx + 1);
    }
  }, [isLastStep, currentStep, steps, stepIdx, exStatus, moduleId, goTo, router]);

  // Nav action computation
  let stepValidate: (() => void) | undefined;
  let stepReset: (() => void) | undefined;
  let stepValidateDisabled = false;

  if (currentStep?.kind === "exercise" && exStatus !== "correct") {
    stepValidate = () => {
      const ok = answerMatches(answer, currentStep.item.acceptable);
      setExStatus(ok ? "correct" : "wrong");
      setExAttempts((a) => a + 1);
    };
    stepValidateDisabled = false;
    if (exStatus === "wrong") {
      stepReset = () => {
        setAnswer("");
        setExStatus("idle");
      };
    }
  }

  const nextDisabled = false;

  if (!lessons || lessons.length === 0 || steps.length === 0) {
    return (
      <p className="text-sm text-[var(--color-text-secondary)]">
        Contenu non disponible pour ce module.
      </p>
    );
  }

  return (
    <div className="pb-40">
      {/* Step-segment progress bar */}
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

      {/* Step content */}
      {currentStep?.kind === "theory" && <TheoryView lesson={currentStep.lesson} />}

      {currentStep?.kind === "exercise" && (
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              {currentStep.lesson.submoduleCode}
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
              {currentStep.item.promptFr}
            </p>
          </div>

          <input
            type={currentStep.item.type === "number" ? "number" : "text"}
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              if (exStatus !== "idle") setExStatus("idle");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && answer.trim() && exStatus !== "correct") {
                stepValidate?.();
              }
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
              {exAttempts >= 2
                ? `Réponse : ${currentStep.item.acceptable[0]}`
                : "Essayez encore…"}
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
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
            >
              ← Retour
            </button>

            {stepReset || stepValidate ? (
              <div className="flex items-center gap-2">
                {stepReset && (
                  <button
                    type="button"
                    onClick={stepReset}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
                    aria-label="Réinitialiser"
                  >
                    ↺
                  </button>
                )}
                {stepValidate && (
                  <button
                    type="button"
                    onClick={stepValidate}
                    disabled={stepValidateDisabled}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-alg)] text-white transition-opacity disabled:opacity-30"
                    aria-label="Valider"
                  >
                    ✓
                  </button>
                )}
              </div>
            ) : (
              <span />
            )}

            <button
              type="button"
              onClick={goNext}
              disabled={nextDisabled}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl bg-[var(--color-accent-alg)] px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
            >
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </button>
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
    </div>
  );
}
