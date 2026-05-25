"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getLessonBySubmoduleId } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { percentToSwissGrade } from "@/lib/scoring";
import { FractionToggleExercise, CombinedDecimalExercise } from "@/components/math/A4ModuleContent";
import { A1ModuleContent } from "@/components/math/A1ModuleContent";
import { GenericModuleContent } from "@/components/math/GenericModuleContent";

type WorkspaceStep =
  | { kind: "theory" }
  | { kind: "fraction_toggle" }
  | { kind: "decimal_exercises" }
  | { kind: "exercise"; item: MathExerciseItem; exNum: number }
  | { kind: "eval_start" }
  | { kind: "pass_toggle" };

function shufflePick<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

function buildSteps(lesson: MathSubmoduleLesson): WorkspaceStep[] {
  const steps: WorkspaceStep[] = [{ kind: "theory" }];
  if (lesson.submoduleId === "A4-1") {
    steps.push({ kind: "fraction_toggle" });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "pass_toggle" });
  } else if (lesson.submoduleId === "A4-2") {
    steps.push({ kind: "decimal_exercises" });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "pass_toggle" });
  } else {
    const pool = lesson.exercisePool;
    const size = lesson.poolSize ?? 5;
    const exercises = pool && pool.length > 0
      ? shufflePick(pool, size)
      : lesson.exercises.slice(0, size);
    exercises.forEach((item, i) =>
      steps.push({ kind: "exercise", item, exNum: i + 1 }),
    );
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "pass_toggle" });
  }
  return steps;
}

// Parses [[frac:N/D]] markers and renders vertical inline fractions
function renderFracText(text: string): React.ReactNode {
  const parts = text.split(/(\[\[frac:[^/\]]+\/[^\]]+\]\])/);
  if (parts.length === 1) return text;
  const nodes: React.ReactNode[] = [];
  parts.forEach((part, i) => {
    const m = part.match(/^\[\[frac:([^/\]]+)\/([^\]]+)\]\]$/);
    if (m) {
      nodes.push(
        <span key={i} className="inline-flex flex-col items-center leading-none gap-0.5 mx-0.5 align-middle">
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">{m[1]}</span>
          <span className="h-[1.5px] self-stretch rounded bg-[var(--color-text-primary)]" />
          <span className="text-xs font-bold text-[var(--color-text-primary)]">{m[2]}</span>
        </span>
      );
    } else if (part) {
      nodes.push(part);
    }
  });
  return <>{nodes}</>;
}

function BlockView({ block }: { block: MathRichBlock }) {
  switch (block.type) {
    case "heading":
      return block.black ? (
        <h3 className="mt-3 mb-1 text-base font-bold text-[var(--color-text-primary)]">{block.fr}</h3>
      ) : (
        <h3 className="mt-4 mb-1 text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</h3>
      );
    case "plain":
      if (!block.fr) return <div className="h-3" />;
      return <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{renderFracText(block.fr)}</p>;
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
        <p className="text-sm font-bold text-[var(--color-accent-alg)]">{renderFracText(block.fr)}</p>
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
              <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/10" : "bg-[var(--color-bg-secondary)]"}>
                {block.headersFr.map((h, i) => (
                  <th key={i} className={`px-3 py-2 text-center font-semibold ${block.accentHeader ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-[var(--color-border-default)]">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-center text-[var(--color-text-secondary)]">{cell}</td>
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
                <li key={ii} className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {renderFracText(item)}
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

function TheoryView({ lesson }: { lesson: MathSubmoduleLesson }) {
  const { theory } = lesson;
  return (
    <div className="space-y-4">
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

export function MathSubmoduleWorkspace({ submoduleId, moduleId, startAtEval }: { submoduleId: string; moduleId: string; startAtEval?: boolean }) {
  const router = useRouter();
  const lesson = getLessonBySubmoduleId(submoduleId);

  const [steps] = useState<WorkspaceStep[]>(() => (lesson ? buildSteps(lesson) : []));

  const evalStartIdx = steps.findIndex((s) => s.kind === "eval_start");
  // For A4-1/A4-2 startAtEval means start at their custom exercise (index 1)
  const customEvalIdx = (submoduleId === "A4-1" || submoduleId === "A4-2") ? 1 : -1;
  const initialIdx = startAtEval
    ? (evalStartIdx >= 0 ? evalStartIdx : customEvalIdx >= 0 ? customEvalIdx : 0)
    : 0;

  const [stepIdx, setStepIdx] = useState(initialIdx);
  const [exerciseKey, setExerciseKey] = useState(0);
  const [validateCommand, setValidateCommand] = useState(0);
  const [canValidate, setCanValidate] = useState(true);
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);
  const [toggleAnswer, setToggleAnswer] = useState<"oui" | "non" | null>(null);

  const goTo = useCallback((idx: number) => {
    setStepIdx(idx);
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setValidateCommand(0);
    setCanValidate(true);
    setExerciseKey(k => k + 1);
    setToggleAnswer(null);
  }, []);

  // A1-1 and A1-2 use the rich A1ModuleContent; A1-3+ use GenericModuleContent with toggle
  if (moduleId === "A1") {
    if (submoduleId === "A1-1" || submoduleId === "A1-2") {
      return <A1ModuleContent startSubmoduleId={submoduleId} startAtEval={startAtEval} />;
    }
    return <GenericModuleContent moduleId={moduleId} startSubmoduleId={submoduleId} startAtEval={startAtEval} />;
  }

  // Non-A4 modules with lessons use GenericModuleContent per submodule
  if (moduleId !== "A4") {
    return <GenericModuleContent moduleId={moduleId} startSubmoduleId={submoduleId} startAtEval={startAtEval} />;
  }

  const currentStep = steps[stepIdx];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;
  const isExercise = currentStep !== undefined &&
    currentStep.kind !== "theory" &&
    currentStep.kind !== "eval_start" &&
    currentStep.kind !== "pass_toggle";
  const isCustom = currentStep?.kind === "fraction_toggle" || currentStep?.kind === "decimal_exercises";
  const inEvalPhase = currentStep?.kind === "eval_start" || currentStep?.kind === "pass_toggle";

  function goBack() { if (!isFirstStep) goTo(stepIdx - 1); }

  function finishEval(correct: boolean) {
    if (!lesson) { router.push("/mathematiques"); return; }
    const grade = percentToSwissGrade(correct ? 100 : 0);
    const p = loadProgress();
    saveProgress(completeSubmodule(p, moduleId, lesson.submoduleId, correct ? 1 : 0, 1, grade));
    router.push("/mathematiques");
  }

  function goNext() {
    if (currentStep?.kind === "pass_toggle") {
      finishEval(toggleAnswer === "oui");
      return;
    }
    if (isLastStep) {
      router.push("/mathematiques");
    } else {
      goTo(stepIdx + 1);
    }
  }

  function refresh() {
    setAnswer(""); setExStatus("idle"); setExAttempts(0);
    setValidateCommand(0); setCanValidate(true);
    setExerciseKey(k => k + 1);
  }

  function handleCustomValidated(ok: boolean) {
    void ok;
    setCanValidate(false);
    // Completion is deferred to finishEval after the pass_toggle
  }

  function validateText() {
    if (currentStep?.kind !== "exercise") return;
    const ok = answerMatches(answer, currentStep.item.acceptable);
    setExStatus(ok ? "correct" : "wrong");
    setExAttempts(a => a + 1);
    if (ok) setCanValidate(false);
  }

  const validateDisabled = currentStep?.kind === "exercise"
    ? exStatus === "correct"
    : !canValidate;

  if (!lesson || steps.length === 0) {
    return <p className="text-sm text-[var(--color-text-secondary)]">Contenu non disponible.</p>;
  }

  const visibleSteps = steps.filter(s => s.kind !== "eval_start" && s.kind !== "pass_toggle");
  const visibleIdx = Math.min(stepIdx, visibleSteps.length);

  return (
    <div className="pb-40">
      {/* Progress bar — lesson steps only */}
      {!inEvalPhase && (
        <div className="mb-6 flex gap-1">
          {visibleSteps.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < visibleIdx ? "bg-[var(--color-accent-alg)]" : i === visibleIdx ? "bg-[var(--color-accent-alg)] opacity-60" : "bg-[var(--color-border-default)]"}`} />
          ))}
        </div>
      )}

      {/* Theory */}
      {currentStep?.kind === "theory" && <TheoryView lesson={lesson} />}

      {/* A4-1 custom exercise */}
      {currentStep?.kind === "fraction_toggle" && (
        <FractionToggleExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A4-2 custom exercise */}
      {currentStep?.kind === "decimal_exercises" && (
        <CombinedDecimalExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* Generic text exercise */}
      {currentStep?.kind === "exercise" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-[var(--color-text-primary)]">
              Exercice {currentStep.exNum}
            </h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
              {currentStep.item.promptFr}
            </p>
          </div>
          <input
            key={exerciseKey}
            type={currentStep.item.type === "number" ? "number" : "text"}
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") validateText(); }}
            placeholder="Votre réponse…"
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${exStatus === "correct" ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20" : exStatus === "wrong" ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"}`}
          />
          {exStatus === "wrong" && <p className="text-xs font-medium text-amber-600 dark:text-amber-400">{exAttempts >= 2 ? <><span className="line-through">{answer}</span> <span className="font-bold text-[var(--color-text-primary)]">{currentStep.item.acceptable[0]}</span></> : "Essayez encore…"}</p>}
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
              {lesson.theory.title.fr}
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
                  ? "bg-[var(--color-accent-alg)] text-white shadow-sm"
                  : "border-2 border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] hover:bg-blue-50 dark:hover:bg-blue-950/20"
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
            {currentStep?.kind !== "eval_start" ? (
              <button type="button" onClick={goBack}
                disabled={isFirstStep || currentStep?.kind === "pass_toggle"}
                className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
                Retour
              </button>
            ) : <span />}

            {isExercise ? (
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Recommencer" onClick={refresh}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" /></svg>
                </button>
                <button type="button" aria-label="Valider"
                  onClick={() => { if (isCustom) setValidateCommand(c => c + 1); else validateText(); }}
                  disabled={validateDisabled}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-90 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                </button>
              </div>
            ) : <span />}

            {currentStep?.kind !== "eval_start" && (
              <button type="button" onClick={goNext}
                disabled={currentStep?.kind === "pass_toggle" && toggleAnswer === null}
                className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-30">
                {currentStep?.kind === "pass_toggle" || isLastStep ? (
                  <>Terminer <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg></>
                ) : (
                  <>Suivant <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6" /></svg></>
                )}
              </button>
            )}
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
    </div>
  );
}
