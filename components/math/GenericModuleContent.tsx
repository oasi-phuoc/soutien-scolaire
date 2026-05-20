"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { percentToSwissGrade, medalFromPercent } from "@/lib/scoring";

// ── Step types ──────────────────────────────────────────────────────────────
type TheoryStep    = { kind: "theory";       lesson: MathSubmoduleLesson };
type ExerciseStep  = { kind: "exercise";     lesson: MathSubmoduleLesson; item: MathExerciseItem };
type EvalStartStep = { kind: "eval_start";   lesson: MathSubmoduleLesson };
type PassToggleStep = { kind: "pass_toggle"; lesson: MathSubmoduleLesson };
type FlatStep = TheoryStep | ExerciseStep | EvalStartStep | PassToggleStep;

function shufflePick<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

function buildSteps(lessons: MathSubmoduleLesson[], withEval: boolean): FlatStep[] {
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
  if (withEval && lessons.length > 0) {
    const lastLesson = lessons[lessons.length - 1]!;
    steps.push({ kind: "eval_start", lesson: lastLesson });
    steps.push({ kind: "pass_toggle", lesson: lastLesson });
  }
  return steps;
}

// ── Rich block renderer ──────────────────────────────────────────────────────
function BlockView({ block }: { block: MathRichBlock }) {
  switch (block.type) {
    case "heading":
      return block.black ? (
        <h3 className="mt-3 mb-1 text-base font-bold text-[var(--color-text-primary)]">{block.fr}</h3>
      ) : (
        <h3 className="mt-4 mb-1 text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</h3>
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
              <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/10" : "bg-[var(--color-bg-secondary)]"}>
                {block.headersFr.map((h, i) => (
                  <th
                    key={i}
                    className={`px-3 py-2 text-center font-semibold ${block.accentHeader ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}
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
                    <td key={ci} className="px-3 py-2 text-center text-[var(--color-text-secondary)]">
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
          {block.labelFr && <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>}
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
  const { theory } = lesson;
  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-text-primary)]">
        {theory.title.fr}
      </h2>
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
export function GenericModuleContent({
  moduleId,
  startSubmoduleId,
  startAtEval,
}: {
  moduleId: string;
  startSubmoduleId?: string;
  startAtEval?: boolean;
}) {
  const router = useRouter();
  const allLessons = getLessonsForModule(moduleId);
  const lessons = startSubmoduleId && allLessons
    ? allLessons.filter((l) => l.submoduleId === startSubmoduleId)
    : allLessons;

  const withEval = !!startSubmoduleId;

  const [steps] = useState<FlatStep[]>(() =>
    lessons && lessons.length > 0 ? buildSteps(lessons, withEval) : [],
  );

  const evalStartIdx = steps.findIndex((s) => s.kind === "eval_start");
  const initialIdx = startAtEval && evalStartIdx >= 0 ? evalStartIdx : 0;

  const [stepIdx, setStepIdx] = useState(initialIdx);
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);
  const [toggleAnswer, setToggleAnswer] = useState<"oui" | "non" | null>(null);

  const currentStep = steps[stepIdx];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;
  const inEvalPhase =
    currentStep?.kind === "eval_start" || currentStep?.kind === "pass_toggle";

  const goTo = useCallback((idx: number) => {
    setStepIdx(idx);
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setToggleAnswer(null);
  }, []);

  const goBack = useCallback(() => {
    if (!isFirstStep) goTo(stepIdx - 1);
  }, [isFirstStep, stepIdx, goTo]);

  function finishEval(correct: boolean) {
    if (!startSubmoduleId) { router.push("/mathematiques"); return; }
    const pct = correct ? 100 : 0;
    const grade = percentToSwissGrade(pct);
    const medal = correct ? medalFromPercent(pct) : undefined;
    const p = loadProgress();
    saveProgress(completeSubmodule(p, moduleId, startSubmoduleId, correct ? 1 : 0, 1, grade));
    void medal;
    router.push("/mathematiques");
  }

  const goNext = useCallback(() => {
    if (currentStep?.kind === "pass_toggle") {
      finishEval(toggleAnswer === "oui");
      return;
    }
    if (isLastStep) {
      if (currentStep?.kind === "exercise" && exStatus === "correct") {
        const p = loadProgress();
        saveProgress(completeSubmodule(p, moduleId, currentStep.lesson.submoduleId));
      }
      router.push("/mathematiques");
    } else {
      if (currentStep?.kind === "exercise") {
        const nextStep = steps[stepIdx + 1];
        const isLastExOfLesson =
          !nextStep ||
          nextStep.kind !== "exercise" ||
          nextStep.lesson.submoduleId !== currentStep.lesson.submoduleId;
        if (isLastExOfLesson && exStatus === "correct") {
          const p = loadProgress();
          saveProgress(completeSubmodule(p, moduleId, currentStep.lesson.submoduleId));
        }
      }
      goTo(stepIdx + 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastStep, currentStep, steps, stepIdx, exStatus, moduleId, goTo, router, startSubmoduleId, toggleAnswer]);

  let stepValidate: (() => void) | undefined;
  let stepReset: (() => void) | undefined;

  if (currentStep?.kind === "exercise" && exStatus !== "correct") {
    stepValidate = () => {
      if (!currentStep || currentStep.kind !== "exercise") return;
      const ok = answerMatches(answer, currentStep.item.acceptable);
      setExStatus(ok ? "correct" : "wrong");
      setExAttempts((a) => a + 1);
    };
    if (exStatus === "wrong") {
      stepReset = () => { setAnswer(""); setExStatus("idle"); };
    }
  }

  if (!lessons || lessons.length === 0 || steps.length === 0) {
    return (
      <p className="text-sm text-[var(--color-text-secondary)]">
        Contenu non disponible pour ce module.
      </p>
    );
  }

  // Eval-phase steps don't count in the progress bar
  const visibleSteps = steps.filter(
    (s) => s.kind !== "eval_start" && s.kind !== "pass_toggle",
  );
  const visibleIdx = Math.min(stepIdx, visibleSteps.length);

  return (
    <div className="pb-40">
      {/* Progress bar — lesson steps only */}
      {!inEvalPhase && (
        <div className="mb-6 flex gap-1">
          {visibleSteps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i < visibleIdx
                  ? "bg-[var(--color-accent-alg)]"
                  : i === visibleIdx
                    ? "bg-[var(--color-accent-alg)] opacity-60"
                    : "bg-[var(--color-border-default)]"
              }`}
            />
          ))}
        </div>
      )}

      {/* Theory */}
      {currentStep?.kind === "theory" && <TheoryView lesson={currentStep.lesson} />}

      {/* Exercise */}
      {currentStep?.kind === "exercise" && (
        <div className="space-y-4">
          <p className="text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
            {currentStep.item.promptFr}
          </p>
          <input
            type={currentStep.item.type === "number" ? "number" : "text"}
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") stepValidate?.(); }}
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

      {/* Eval start screen */}
      {currentStep?.kind === "eval_start" && (
        <div className="flex flex-col items-center gap-8 py-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-accent-alg)]/10">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-alg)" strokeWidth="1.5" aria-hidden>
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">
              Évaluation
            </p>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
              {currentStep.lesson.theory.title.fr}
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Évalue ta maîtrise de ce module.
            </p>
          </div>
          <button
            type="button"
            onClick={() => goTo(stepIdx + 1)}
            className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-6 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
          >
            Commencer
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      {/* Pass toggle */}
      {currentStep?.kind === "pass_toggle" && (
        <div className="flex flex-col items-center gap-8 py-4 text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">
              Évaluation
            </p>
            <h2 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
              Passer le module ?
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              As-tu compris et maîtrisé ce module ?
            </p>
          </div>
          <div className="flex w-full gap-3">
            <button
              type="button"
              onClick={() => setToggleAnswer("oui")}
              className={`flex-1 rounded-xl py-5 text-base font-bold transition-all ${
                toggleAnswer === "oui"
                  ? "bg-green-500 text-white shadow-sm"
                  : "border-2 border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-950/20"
              }`}
            >
              Oui
            </button>
            <button
              type="button"
              onClick={() => setToggleAnswer("non")}
              className={`flex-1 rounded-xl py-5 text-base font-bold transition-all ${
                toggleAnswer === "non"
                  ? "bg-red-400 text-white shadow-sm"
                  : "border-2 border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/20"
              }`}
            >
              Non
            </button>
          </div>
        </div>
      )}

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back button — hidden on eval start */}
            {currentStep?.kind !== "eval_start" ? (
              <button
                type="button"
                onClick={goBack}
                disabled={isFirstStep || currentStep?.kind === "pass_toggle"}
                className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
              >
                ← Retour
              </button>
            ) : (
              <span />
            )}

            {/* Validate (exercises only) */}
            {(stepReset || stepValidate) ? (
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
                    disabled={!answer.trim()}
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

            {/* Next / Finish */}
            {currentStep?.kind !== "eval_start" && (
              <button
                type="button"
                onClick={goNext}
                disabled={currentStep?.kind === "pass_toggle" && toggleAnswer === null}
                className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl bg-[var(--color-accent-alg)] px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
              >
                {currentStep?.kind === "pass_toggle" || isLastStep
                  ? "Terminer ✓"
                  : "Suivant →"}
              </button>
            )}
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
    </div>
  );
}
