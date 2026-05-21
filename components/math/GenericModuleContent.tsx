"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { percentToSwissGrade, medalFromPercent } from "@/lib/scoring";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return <>{text}</>;
  return <>{parts.map((p, i) => i % 2 === 1 ? <strong key={i} className="font-bold text-[var(--color-accent-alg)]">{p}</strong> : p)}</>;
}

function formatCompNum(n: number): string {
  const s = n.toString();
  if (s.length <= 3) return s;
  if (s.length <= 6) return s.slice(0, s.length - 3) + " " + s.slice(s.length - 3);
  return s;
}

// ── Step types ──────────────────────────────────────────────────────────────
type TheoryStep      = { kind: "theory";        lesson: MathSubmoduleLesson };
type ExerciseStep    = { kind: "exercise";      lesson: MathSubmoduleLesson; item: MathExerciseItem };
type NumberLineStep  = { kind: "number_line";   lesson: MathSubmoduleLesson; nlConfig: NLConfig };
type ComparisonStep  = { kind: "comparison_ex"; lesson: MathSubmoduleLesson; config: ComparisonConfig };
type EvalStartStep   = { kind: "eval_start";    lesson: MathSubmoduleLesson };
type PassToggleStep  = { kind: "pass_toggle";   lesson: MathSubmoduleLesson };
type FlatStep = TheoryStep | ExerciseStep | NumberLineStep | ComparisonStep | EvalStartStep | PassToggleStep;

// ── Comparison exercise ───────────────────────────────────────────────────────
type ComparisonQ = { a: number; b: number; answer: "<" | "=" | ">" };
type ComparisonConfig = { questions: ComparisonQ[]; level: 1 | 2 };

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genComparisonConfig(level: 1 | 2): ComparisonConfig {
  if (level === 1) {
    const signs: Array<"<" | "=" | ">"> = ["<", "<", ">", ">", "="];
    for (let i = signs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [signs[i], signs[j]] = [signs[j]!, signs[i]!];
    }
    const questions: ComparisonQ[] = signs.map(answer => {
      let a = 0, b = 0;
      if (answer === "=") { a = rnd(1, 99); b = a; }
      else if (answer === ">") { do { a = rnd(1, 99); b = rnd(1, 99); } while (a <= b); }
      else { do { a = rnd(1, 99); b = rnd(1, 99); } while (a >= b); }
      return { a, b, answer };
    });
    return { questions, level };
  }

  // Level 2: 6-digit numbers with guaranteed structure
  // Q1: equal (a === b)
  const eq = rnd(100000, 999999);
  const qEqual: ComparisonQ = { a: eq, b: eq, answer: "=" };

  // Q2: 2 shared leading digits (d1 d2 differ at position 3)
  const d1 = rnd(1, 9), d2 = rnd(0, 9);
  const prefix2 = d1 * 100000 + d2 * 10000;
  let d3a: number, d3b: number;
  do { d3a = rnd(0, 9); d3b = rnd(0, 9); } while (d3a === d3b);
  const tail2a = rnd(0, 999), tail2b = rnd(0, 999);
  const n2a = prefix2 + d3a * 1000 + tail2a;
  const n2b = prefix2 + d3b * 1000 + tail2b;
  const qTwo: ComparisonQ = { a: n2a, b: n2b, answer: n2a < n2b ? "<" : ">" };

  // Q3: 3 or 4 shared leading digits
  const sharedDigits = Math.random() < 0.5 ? 3 : 4;
  const d1b = rnd(1, 9), d2b = rnd(0, 9), d3c = rnd(0, 9), d4 = rnd(0, 9);
  const prefix34 =
    sharedDigits === 3
      ? d1b * 100000 + d2b * 10000 + d3c * 1000
      : d1b * 100000 + d2b * 10000 + d3c * 1000 + d4 * 100;
  const diffMul = sharedDigits === 3 ? 100 : 10;
  let diffA: number, diffB: number;
  do { diffA = rnd(0, 9); diffB = rnd(0, 9); } while (diffA === diffB);
  const rem34a = rnd(0, diffMul - 1), rem34b = rnd(0, diffMul - 1);
  const n34a = prefix34 + diffA * diffMul + rem34a;
  const n34b = prefix34 + diffB * diffMul + rem34b;
  const q34: ComparisonQ = { a: n34a, b: n34b, answer: n34a < n34b ? "<" : ">" };

  // Q4 & Q5: normal random pairs (one < one >)
  let r4a = 0, r4b = 0;
  do { r4a = rnd(100000, 999999); r4b = rnd(100000, 999999); } while (r4a >= r4b);
  const q4: ComparisonQ = { a: r4a, b: r4b, answer: "<" };

  let r5a = 0, r5b = 0;
  do { r5a = rnd(100000, 999999); r5b = rnd(100000, 999999); } while (r5a <= r5b);
  const q5: ComparisonQ = { a: r5a, b: r5b, answer: ">" };

  // Shuffle all 5
  const questions = [qEqual, qTwo, q34, q4, q5];
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j]!, questions[i]!];
  }
  return { questions, level };
}

function ComparisonExercise({
  config,
  answers,
  validated,
  results,
  onAnswer,
}: {
  config: ComparisonConfig;
  answers: Array<"<" | "=" | ">" | null>;
  validated: boolean;
  results: boolean[];
  onAnswer: (i: number, sym: "<" | "=" | ">") => void;
}) {
  const score = results.filter(Boolean).length;

  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-[var(--color-accent-alg)]">
        Exercice {config.level} — Les symboles de comparaison
      </p>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
        <div className="space-y-3">
          {config.questions.map((q, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs font-medium text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="shrink-0 font-mono text-sm text-[var(--color-text-primary)]">{formatCompNum(q.a)}</span>
              <div className="flex shrink-0 gap-1">
                {(["<", "=", ">"] as const).map(sym => {
                  const sel = answers[i] === sym;
                  const isCorrect = sym === q.answer;
                  let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                  if (!validated) {
                    cls += sel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                  } else {
                    cls += isCorrect ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white" : sel ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                  }
                  return <button key={sym} type="button" disabled={validated} onClick={() => onAnswer(i, sym)} className={cls}>{sym}</button>;
                })}
              </div>
              <span className="shrink-0 font-mono text-sm text-[var(--color-text-primary)]">{formatCompNum(q.b)}</span>
            </div>
          ))}
        </div>
      </div>
      {validated && (
        <p className={`text-sm font-medium ${score === 5 ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-secondary)]"}`}>
          {score}/5 bonnes réponses
        </p>
      )}
    </div>
  );
}

// ── Number line ──────────────────────────────────────────────────────────────
type NLConfig = { start: number; end: number; step: number; divCount: number; labelEvery: number; target: number };

function genNLConfig(): NLConfig {
  const presets: Array<{ start: number; end: number; step: number }> = [
    { start: 0, end: 20, step: 1 },
    { start: 0, end: 50, step: 5 },
    { start: 0, end: 100, step: 10 },
    { start: 50, end: 150, step: 5 },
    { start: 100, end: 200, step: 10 },
    { start: 200, end: 400, step: 20 },
    { start: 0, end: 200, step: 10 },
    { start: 0, end: 1000, step: 100 },
    { start: 500, end: 1000, step: 50 },
  ];
  const p = presets[Math.floor(Math.random() * presets.length)]!;
  const divCount = (p.end - p.start) / p.step;
  const labelEvery = divCount <= 5 ? 1 : divCount <= 10 ? 2 : 4;
  const allTicks = Array.from({ length: divCount + 1 }, (_, i) => p.start + i * p.step);
  const unlabeled = allTicks.filter((_, i) => i % labelEvery !== 0 && i > 0 && i < divCount);
  const candidates = unlabeled.length > 0 ? unlabeled : allTicks.slice(1, divCount);
  const target = candidates[Math.floor(Math.random() * candidates.length)]!;
  return { start: p.start, end: p.end, step: p.step, divCount, labelEvery, target };
}

function NumberLineSVG({ config }: { config: NLConfig }) {
  const W = 320, H = 68;
  const PL = 26, PR = 26;
  const lineW = W - PL - PR;
  const lineY = 38;
  const labelY = 60;
  const fs = config.end >= 1000 ? 7 : config.end >= 100 ? 8 : 10;
  const ticks = Array.from({ length: config.divCount + 1 }, (_, i) => {
    const val = config.start + i * config.step;
    const x = PL + (i / config.divCount) * lineW;
    const labeled = i % config.labelEvery === 0;
    return { val, x, labeled, isTarget: val === config.target };
  });
  const tx = PL + ((config.target - config.start) / (config.end - config.start)) * lineW;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }} aria-label="Droite numérique">
      <line x1={PL} y1={lineY} x2={W - PR} y2={lineY} stroke="currentColor" strokeWidth="1.5" />
      <polygon points={`${PL - 2},${lineY - 4} ${PL - 2},${lineY + 4} ${PL - 9},${lineY}`} fill="currentColor" />
      <polygon points={`${W - PR + 2},${lineY - 4} ${W - PR + 2},${lineY + 4} ${W - PR + 9},${lineY}`} fill="currentColor" />
      {ticks.map((t) => (
        <g key={t.val}>
          <line x1={t.x} y1={t.labeled ? lineY - 6 : lineY - 3} x2={t.x} y2={t.labeled ? lineY + 6 : lineY + 3}
            stroke="currentColor" strokeWidth={t.labeled ? 1.5 : 1} />
          {t.labeled && !t.isTarget && (
            <text x={t.x} y={labelY} textAnchor="middle" fontSize={fs} fill="currentColor">{t.val}</text>
          )}
        </g>
      ))}
      <line x1={tx} y1={6} x2={tx} y2={lineY - 12} stroke="var(--color-accent-alg)" strokeWidth="2" />
      <polygon points={`${tx - 5},${lineY - 13} ${tx + 5},${lineY - 13} ${tx},${lineY - 6}`} fill="var(--color-accent-alg)" />
      <text x={tx} y={12} textAnchor="middle" fontSize="10" fill="var(--color-accent-alg)" fontWeight="bold">?</text>
    </svg>
  );
}

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
    if (lesson.submoduleId === "A1-4") {
      steps.push({ kind: "number_line", lesson, nlConfig: genNLConfig() });
    }
    if (lesson.submoduleId === "A1-3") {
      steps.push({ kind: "comparison_ex", lesson, config: genComparisonConfig(1) });
      steps.push({ kind: "comparison_ex", lesson, config: genComparisonConfig(2) });
    }
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
      if (!block.fr) return <div className="h-3" />;
      return (
        <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{renderBold(block.fr)}</p>
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
        <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.fr}</p>
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
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
          <table className="w-full text-sm">
            <thead>
              <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/15" : "bg-[var(--color-bg-secondary)]"}>
                {block.headersFr.map((h, i) => (
                  <th key={i} className={`px-3 py-2 text-center text-xs font-bold ${block.accentHeader ? "uppercase tracking-wide text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]/40"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-center text-sm text-[var(--color-text-primary)]">
                      {cell}
                    </td>
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
                  {renderBold(item)}
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

  // Comparison exercise lifted state
  const [compAnswers, setCompAnswers] = useState<Array<"<" | "=" | ">" | null>>(() => Array(5).fill(null));
  const [compValidated, setCompValidated] = useState(false);
  const [compResults, setCompResults] = useState<boolean[]>(() => Array(5).fill(false));
  const [compOverrideConfigs, setCompOverrideConfigs] = useState<Record<number, ComparisonConfig>>({});

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
    setCompAnswers(Array(5).fill(null));
    setCompValidated(false);
    setCompResults(Array(5).fill(false));
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
  let stepCanValidate = true;

  const activeCompConfig = currentStep?.kind === "comparison_ex"
    ? (compOverrideConfigs[stepIdx] ?? currentStep.config)
    : null;

  if ((currentStep?.kind === "exercise" || currentStep?.kind === "number_line") && exStatus !== "correct") {
    stepCanValidate = answer.trim().length > 0;
    stepValidate = () => {
      if (!currentStep) return;
      let ok: boolean;
      if (currentStep.kind === "exercise") {
        ok = answerMatches(answer, currentStep.item.acceptable);
      } else {
        ok = parseInt(answer.trim(), 10) === currentStep.nlConfig.target;
      }
      setExStatus(ok ? "correct" : "wrong");
      setExAttempts((a) => a + 1);
    };
    stepReset = () => { setAnswer(""); setExStatus("idle"); setExAttempts(0); };
  }

  if (currentStep?.kind === "comparison_ex" && !compValidated) {
    const compAllAnswered = compAnswers.every(a => a !== null);
    stepCanValidate = compAllAnswered;
    stepValidate = () => {
      if (!activeCompConfig) return;
      setCompResults(activeCompConfig.questions.map((q, i) => compAnswers[i] === q.answer));
      setCompValidated(true);
    };
    stepReset = () => {
      const step = currentStep as ComparisonStep;
      setCompOverrideConfigs(prev => ({ ...prev, [stepIdx]: genComparisonConfig(step.config.level) }));
      setCompAnswers(Array(5).fill(null));
      setCompValidated(false);
      setCompResults(Array(5).fill(false));
    };
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
                ? "border-[var(--color-accent-alg)] bg-blue-50 dark:bg-blue-950/20"
                : exStatus === "wrong"
                  ? "border-red-400 bg-red-50 dark:bg-red-950/20"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"
            }`}
          />
          {exStatus === "correct" && (
            <p className="text-xs font-medium text-[var(--color-accent-alg)]">✓ Correct !</p>
          )}
          {exStatus === "wrong" && (
            <p className="text-xs font-medium text-red-500">
              {exAttempts >= 2 ? `Réponse : ${currentStep.item.acceptable[0]}` : "Essayez encore…"}
            </p>
          )}
        </div>
      )}

      {/* Number line exercise */}
      {currentStep?.kind === "number_line" && (
        <div className="space-y-4">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            Quel est le nombre indiqué par la flèche ?
          </p>
          <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
            <NumberLineSVG config={currentStep.nlConfig} />
          </div>
          <input
            type="number"
            inputMode="numeric"
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") stepValidate?.(); }}
            placeholder="Votre réponse…"
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
              exStatus === "correct"
                ? "border-[var(--color-accent-alg)] bg-blue-50 dark:bg-blue-950/20"
                : exStatus === "wrong"
                  ? "border-red-400 bg-red-50 dark:bg-red-950/20"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"
            }`}
          />
          {exStatus === "correct" && (
            <p className="text-xs font-medium text-[var(--color-accent-alg)]">✓ Correct !</p>
          )}
          {exStatus === "wrong" && (
            <p className="text-xs font-medium text-red-500">
              {exAttempts >= 2 ? `Réponse : ${currentStep.nlConfig.target}` : "Essayez encore…"}
            </p>
          )}
        </div>
      )}

      {/* Comparison exercise */}
      {currentStep?.kind === "comparison_ex" && activeCompConfig && (
        <ComparisonExercise
          config={activeCompConfig}
          answers={compAnswers}
          validated={compValidated}
          results={compResults}
          onAnswer={(i, sym) => setCompAnswers(prev => prev.map((a, j) => j === i ? sym : a))}
        />
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
                    disabled={!stepCanValidate}
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
