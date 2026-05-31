"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getLessonBySubmoduleId } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { percentToSwissGrade } from "@/lib/scoring";
import { FractionToggleExercise, FractionColoringExercise, FractionReadExercise, FractionMultiColoringExercise, FractionMultiReadExercise, FractionEquivExercise, FractionSimplifyExercise, FractionCompareExercise, FracToDecExercise, DecToFracExercise } from "@/components/math/A4ModuleContent";
import { FractionOpsExercise, type FracOpMode } from "@/components/math/A4FractionOpsContent";
import { DecAddExercise, DecAddMissingExercise, DecAddHundredthsExercise, DecSubExercise, DecSubMissingExercise, DecSubHundredthsExercise, DecMulSimpleExercise, DecMulMissingExercise, DecMulExtExercise, DecDivSimpleExercise, DecDivMissingExercise, DecDivExtExercise } from "@/components/math/A5DecimalContent";
import { A1ModuleContent } from "@/components/math/A1ModuleContent";
import { GenericModuleContent } from "@/components/math/GenericModuleContent";

type WorkspaceStep =
  | { kind: "theory" }
  | { kind: "fraction_toggle" }
  | { kind: "fraction_coloring" }
  | { kind: "fraction_read" }
  | { kind: "fraction_multi_coloring" }
  | { kind: "dec_add"; exNum: number }
  | { kind: "dec_add_missing"; exNum: number }
  | { kind: "dec_add_hundredths"; exNum: number }
  | { kind: "dec_sub"; exNum: number }
  | { kind: "dec_sub_missing"; exNum: number }
  | { kind: "dec_sub_hundredths"; exNum: number }
  | { kind: "dec_mul_simple"; exNum: number }
  | { kind: "dec_mul_missing"; exNum: number }
  | { kind: "dec_mul_ext"; exNum: number }
  | { kind: "dec_div_simple"; exNum: number }
  | { kind: "dec_div_missing"; exNum: number }
  | { kind: "dec_div_ext"; exNum: number }
  | { kind: "fraction_multi_read" }
  | { kind: "fraction_equiv" }
  | { kind: "fraction_simplify" }
  | { kind: "fraction_compare"; exNum: number; mode: "same-den" | "same-num" | "diff-both" }
  | { kind: "frac_to_dec"; exNum: number; variant: "basic" | "extended" }
  | { kind: "dec_to_frac"; exNum: number; variant: "basic" | "extended" }
  | { kind: "frac_ops"; exType: 1|2|3|4|5|6|7|8|9; opMode: FracOpMode }
  | { kind: "exercise"; item: MathExerciseItem; exNum: number }
  | { kind: "eval_start" }
  | { kind: "pass_toggle" }
  | { kind: "results" };

const EVAL_PHASE_KINDS = new Set(["eval_start", "pass_toggle", "results"] as const);
type EvalPhaseKind = "eval_start" | "pass_toggle" | "results";
function isEvalPhaseKind(k: string): k is EvalPhaseKind { return EVAL_PHASE_KINDS.has(k as EvalPhaseKind); }
function notInBar(s: WorkspaceStep) { return isEvalPhaseKind(s.kind); }

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
    // Training
    steps.push({ kind: "fraction_toggle" });
    steps.push({ kind: "fraction_coloring" });
    steps.push({ kind: "fraction_read" });
    steps.push({ kind: "fraction_multi_coloring" });
    // Evaluation
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "fraction_toggle" });
    steps.push({ kind: "fraction_coloring" });
    steps.push({ kind: "fraction_read" });
    steps.push({ kind: "fraction_multi_coloring" });
    steps.push({ kind: "fraction_multi_read" });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A4-2") {
    // Training
    steps.push({ kind: "fraction_equiv" });
    steps.push({ kind: "fraction_simplify" });
    // Evaluation
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "fraction_equiv" });
    steps.push({ kind: "fraction_simplify" });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A4-3") {
    // Training
    steps.push({ kind: "fraction_compare", exNum: 1, mode: "same-den" });
    steps.push({ kind: "fraction_compare", exNum: 2, mode: "same-num" });
    steps.push({ kind: "fraction_compare", exNum: 3, mode: "diff-both" });
    // Evaluation
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "fraction_compare", exNum: 1, mode: "same-den" });
    steps.push({ kind: "fraction_compare", exNum: 2, mode: "same-num" });
    steps.push({ kind: "fraction_compare", exNum: 3, mode: "diff-both" });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A4-7") {
    // Training
    steps.push({ kind: "frac_to_dec", exNum: 1, variant: "basic" });
    steps.push({ kind: "dec_to_frac", exNum: 2, variant: "basic" });
    steps.push({ kind: "frac_to_dec", exNum: 3, variant: "extended" });
    steps.push({ kind: "dec_to_frac", exNum: 4, variant: "extended" });
    // Evaluation
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "frac_to_dec", exNum: 1, variant: "basic" });
    steps.push({ kind: "dec_to_frac", exNum: 2, variant: "basic" });
    steps.push({ kind: "frac_to_dec", exNum: 3, variant: "extended" });
    steps.push({ kind: "dec_to_frac", exNum: 4, variant: "extended" });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A5-4") {
    // Training: 8 exercises matching A2.1 (add) + A2.2 (sub) variety
    steps.push({ kind: "dec_add", exNum: 1 });
    steps.push({ kind: "dec_add_missing", exNum: 2 });
    steps.push({ kind: "dec_add_hundredths", exNum: 3 });
    steps.push({ kind: "dec_add_missing", exNum: 4 });
    steps.push({ kind: "dec_sub", exNum: 5 });
    steps.push({ kind: "dec_sub_missing", exNum: 6 });
    steps.push({ kind: "dec_sub_hundredths", exNum: 7 });
    steps.push({ kind: "dec_sub_missing", exNum: 8 });
    // Evaluation: 5 exercises
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "dec_add", exNum: 1 });
    steps.push({ kind: "dec_add_missing", exNum: 2 });
    steps.push({ kind: "dec_sub", exNum: 3 });
    steps.push({ kind: "dec_sub_missing", exNum: 4 });
    steps.push({ kind: "dec_add_hundredths", exNum: 5 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A5-5") {
    // Training: 8 exercises matching A3.1 (mul tables) + A3.2 (col mul) variety
    steps.push({ kind: "dec_mul_simple", exNum: 1 });
    steps.push({ kind: "dec_mul_simple", exNum: 2 });
    steps.push({ kind: "dec_mul_missing", exNum: 3 });
    steps.push({ kind: "dec_mul_missing", exNum: 4 });
    steps.push({ kind: "dec_mul_ext", exNum: 5 });
    steps.push({ kind: "dec_mul_ext", exNum: 6 });
    steps.push({ kind: "dec_mul_simple", exNum: 7 });
    steps.push({ kind: "dec_mul_missing", exNum: 8 });
    // Evaluation: 4 exercises
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "dec_mul_simple", exNum: 1 });
    steps.push({ kind: "dec_mul_missing", exNum: 2 });
    steps.push({ kind: "dec_mul_ext", exNum: 3 });
    steps.push({ kind: "dec_mul_missing", exNum: 4 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A5-6") {
    // Training: 8 exercises matching A3.3 (div tables) + A3.4 (col div) variety
    steps.push({ kind: "dec_div_simple", exNum: 1 });
    steps.push({ kind: "dec_div_simple", exNum: 2 });
    steps.push({ kind: "dec_div_missing", exNum: 3 });
    steps.push({ kind: "dec_div_missing", exNum: 4 });
    steps.push({ kind: "dec_div_ext", exNum: 5 });
    steps.push({ kind: "dec_div_ext", exNum: 6 });
    steps.push({ kind: "dec_div_simple", exNum: 7 });
    steps.push({ kind: "dec_div_missing", exNum: 8 });
    // Evaluation: 4 exercises
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "dec_div_simple", exNum: 1 });
    steps.push({ kind: "dec_div_missing", exNum: 2 });
    steps.push({ kind: "dec_div_ext", exNum: 3 });
    steps.push({ kind: "dec_div_ext", exNum: 4 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A4-4" || lesson.submoduleId === "A4-5" || lesson.submoduleId === "A4-6") {
    const opMode: FracOpMode = lesson.submoduleId === "A4-4" ? "add-sub" : lesson.submoduleId === "A4-5" ? "mul" : "div";
    // Training: exercise types 1-5
    for (let ex = 1; ex <= 5; ex++) {
      steps.push({ kind: "frac_ops", exType: ex as 1|2|3|4|5|6|7|8|9, opMode });
    }
    // Evaluation: all 9 types (new random questions)
    steps.push({ kind: "eval_start" });
    for (let ex = 1; ex <= 9; ex++) {
      steps.push({ kind: "frac_ops", exType: ex as 1|2|3|4|5|6|7|8|9, opMode });
    }
    steps.push({ kind: "results" });
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

function MulDemoGrid({ a, b, op, carries, result, prevCarries, prevResult }: {
  a: number[]; b: number[]; op: string;
  carries: (number | null)[]; result: (number | null)[];
  prevCarries?: (number | null)[] | null;
  prevResult?: (number | null)[] | null;
}) {
  const COL_LABELS = ["M", "C", "D", "U"];
  const firstNzA = a.findIndex(d => d !== 0);
  const firstNzB = b.findIndex(d => d !== 0);
  const isNewC = (i: number) => carries[i] !== null && (prevCarries == null || prevCarries[i] === null);
  const isNewR = (i: number) => result[i] !== null && (prevResult == null || prevResult[i] === null);
  return (
    <table className="border-collapse shrink-0">
      <thead>
        <tr>
          <td className="w-6" />
          {COL_LABELS.map(h => (
            <th key={h} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Carry row */}
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R</td>
          {carries.map((c, ci) => (
            <td key={ci} className="text-center">
              <div className={`h-5 w-8 flex items-center justify-center font-mono text-[10px] font-bold ${isNewC(ci) ? "text-orange-500" : "text-orange-300"}`}>
                {c !== null ? c : ""}
              </div>
            </td>
          ))}
        </tr>
        {/* Operand 1 */}
        <tr>
          <td />
          {a.map((d, di) => (
            <td key={di} className="text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
                {di < firstNzA ? "" : d}
              </div>
            </td>
          ))}
        </tr>
        {/* Operand 2 */}
        <tr>
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{op}</td>
          {b.map((d, di) => (
            <td key={di} className="text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
                {di < firstNzB ? "" : d}
              </div>
            </td>
          ))}
        </tr>
        {/* Separator */}
        <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
        {/* Result */}
        <tr>
          <td />
          {result.map((d, di) => (
            <td key={di} className="text-center">
              <div className={`h-8 w-8 flex items-center justify-center font-mono text-base rounded border ${
                d !== null
                  ? isNewR(di)
                    ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold"
                    : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
                  : "border-dashed border-[var(--color-border-default)] text-transparent"
              }`}>
                {d !== null ? d : "0"}
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

function Mul2DemoGrid({ a, b, result: totalResult, carries1, carries2, p1, p2shifted, res,
  prevCarries1, prevCarries2, prevP1, prevP2shifted, prevRes }: {
  a: number[]; b: number[]; result: number;
  carries1: (number | null)[];
  carries2: (number | null)[];
  p1: (number | null)[];
  p2shifted: (number | null)[];
  res: (number | null)[];
  prevCarries1?: (number | null)[] | null;
  prevCarries2?: (number | null)[] | null;
  prevP1?: (number | null)[] | null;
  prevP2shifted?: (number | null)[] | null;
  prevRes?: (number | null)[] | null;
}) {
  const numCols = totalResult > 9999 ? 5 : 4;
  const colStart = 5 - numCols;
  const visibleCols = Array.from({length: numCols}, (_, i) => colStart + i);
  const COL5 = ["DM","M","C","D","U"];
  const colLabels = COL5.slice(colStart);
  const totalSpan = numCols + 1;
  const firstNzA = a.findIndex(d => d !== 0);
  const firstNzB = b.findIndex(d => d !== 0);

  const isNew = (arr: (number|null)[], prev: (number|null)[]|null|undefined, col: number) =>
    arr[col] !== null && (prev == null || prev[col] === null);

  const staticCell = (val: number | null, isNewFlag?: boolean) => (
    <div className={`h-8 w-8 flex items-center justify-center font-mono text-base rounded border ${
      val !== null
        ? isNewFlag
          ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold"
          : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
        : "border-transparent text-transparent"
    }`}>
      {val !== null ? val : ""}
    </div>
  );

  const carryCell = (val: number | null, isNewFlag?: boolean) => (
    <div className={`h-5 w-8 flex items-center justify-center font-mono text-[10px] font-bold ${isNewFlag ? "text-orange-500" : "text-orange-300"}`}>
      {val !== null ? val : ""}
    </div>
  );

  return (
    <table className="border-collapse shrink-0">
      <thead>
        <tr>
          <td className="w-6" />
          {colLabels.map(h => (
            <th key={h} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* R2 */}
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R2</td>
          {visibleCols.map(col => <td key={col} className="text-center">{carryCell(carries2[col] ?? null, isNew(carries2, prevCarries2, col))}</td>)}
        </tr>
        {/* R1 */}
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
          {visibleCols.map(col => <td key={col} className="text-center">{carryCell(carries1[col] ?? null, isNew(carries1, prevCarries1, col))}</td>)}
        </tr>
        {/* Operand a */}
        <tr>
          <td />
          {visibleCols.map(col => (
            <td key={col} className="text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
                {col < firstNzA ? "" : a[col]}
              </div>
            </td>
          ))}
        </tr>
        {/* Operand b */}
        <tr>
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">×</td>
          {visibleCols.map(col => (
            <td key={col} className="text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
                {col < firstNzB ? "" : b[col]}
              </div>
            </td>
          ))}
        </tr>
        {/* Separator 1 */}
        <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
        {/* p1 */}
        <tr>
          <td />
          {visibleCols.map(col => <td key={col} className="text-center">{staticCell(p1[col] ?? null, isNew(p1, prevP1, col))}</td>)}
        </tr>
        {/* p2shifted */}
        <tr>
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-primary)]">+</td>
          {visibleCols.map(col => {
            if (col === 4) {
              return (
                <td key={col} className="text-center">
                  <div className="flex h-8 w-8 items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)] opacity-60">0</div>
                </td>
              );
            }
            return <td key={col} className="text-center">{staticCell(p2shifted[col] ?? null, isNew(p2shifted, prevP2shifted, col))}</td>;
          })}
        </tr>
        {/* Separator 2 */}
        <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
        {/* Result */}
        <tr>
          <td />
          {visibleCols.map(col => <td key={col} className="text-center">{staticCell(res[col] ?? null, isNew(res, prevRes, col))}</td>)}
        </tr>
      </tbody>
    </table>
  );
}

function DivDemoGrid({ dividend, divisor, stepsComplete }: {
  dividend: number; divisor: number; stepsComplete: number;
}) {
  const COL4 = ["M","C","D","U"];
  const BSEP: React.CSSProperties = { borderLeft: "2px solid var(--color-text-primary)" };
  const CW = 32;
  const dividendCols = 4;
  const quotientCols = 4;

  const dividendStr = dividend.toString().padStart(dividendCols, "0");
  const divisorStr  = divisor.toString();

  // Inline computeDivSteps
  type DS = { partialDiv:number; product:number; partRemainder:number; colEnd:number };
  const divSteps: DS[] = [];
  {
    const digits = dividend.toString().split("").map(Number);
    let cur = 0;
    for (let i = 0; i < digits.length; i++) {
      cur = cur * 10 + digits[i]!;
      if (cur < divisor && i < digits.length - 1) continue;
      const qd = Math.floor(cur / divisor);
      const prod = qd * divisor;
      const rem  = cur - prod;
      divSteps.push({ partialDiv: cur, product: prod, partRemainder: rem, colEnd: i });
      cur = rem;
    }
  }

  const quotient      = Math.floor(dividend / divisor);
  const remainder     = dividend % divisor;
  const quotientStr   = quotient.toString();
  const quotientLen   = quotientStr.length;

  const showCell = (val: string | number, accent?: boolean) => (
    <div className={`h-8 w-8 flex items-center justify-center font-mono text-base ${
      accent ? "font-bold text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"
    }`}>{String(val)}</div>
  );
  const emptyCell = () => <div className="h-8 w-8" />;
  const showCellNew = (val: string | number) => (
    <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)]">{String(val)}</div>
  );
  const showCellOld = (val: string | number) => (
    <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-secondary)]">{String(val)}</div>
  );

  function StaticWorkRow({ numStr, colEnd, fresh }: { numStr: string; colEnd: number; fresh?: boolean }) {
    const startCol = colEnd - numStr.length + 1;
    return (
      <>
        {Array.from({ length: dividendCols }, (_, col) => {
          const ri = col - startCol;
          const has = ri >= 0 && ri < numStr.length;
          return (
            <td key={col} style={{ width: CW, padding: 2 }} className="align-middle text-center">
              {has ? (fresh ? showCellNew(numStr[ri]!) : showCellOld(numStr[ri]!)) : emptyCell()}
            </td>
          );
        })}
      </>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse table-fixed mx-auto">
        <tbody>
          {/* Row 0: column headers */}
          <tr>
            <td style={{ width: 20, padding: 0 }} />
            {COL4.map((lbl, i) => (
              <td key={i} style={{ width: CW, padding: 0 }}
                className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{lbl}</td>
            ))}
            {Array.from({ length: quotientCols }, (_, i) => (
              <td key={i} style={{ width: CW, padding: 0, ...(i === 0 ? BSEP : {}) }} />
            ))}
          </tr>

          {/* Row 1: dividend | divisor (with underline below divisor) */}
          <tr>
            <td style={{ padding: 0 }} />
            {Array.from({ length: dividendCols }, (_, i) => {
              const isLeading = i < dividendCols - dividend.toString().length;
              return (
                <td key={i} style={{ width: CW, padding: 2 }} className="align-middle text-center">
                  {isLeading ? emptyCell() : showCell(dividendStr[i]!)}
                </td>
              );
            })}
            {Array.from({ length: quotientCols }, (_, i) => {
              const isDivCol = i < divisorStr.length;
              return (
                <td key={i} style={{
                  width: CW, padding: 2,
                  ...(i === 0 ? BSEP : {}),
                  ...(isDivCol ? { borderBottom: "2px solid var(--color-text-primary)" } : {}),
                }} className="align-middle text-center">
                  {isDivCol ? showCell(divisorStr[i]!) : null}
                </td>
              );
            })}
          </tr>

          {/* Work rows, revealed up to stepsComplete */}
          {divSteps.slice(0, stepsComplete).map((step, si) => {
            const pdStr  = step.partialDiv.toString();
            const prStr  = step.product.toString();
            const lineStart = Math.min(step.colEnd - pdStr.length + 1, step.colEnd - prStr.length + 1);
            const lineEnd   = step.colEnd;
            const fresh = si === stepsComplete - 1;
            return (
              <React.Fragment key={si}>
                {/* Partial-dividend row | quotient cells (si===0 only) */}
                <tr>
                  <td style={{ padding: 0 }} />
                  <StaticWorkRow numStr={pdStr} colEnd={step.colEnd} fresh={fresh} />
                  {si === 0
                    ? Array.from({ length: quotientCols }, (_, qi) => {
                        const revealed = qi < stepsComplete && qi < quotientLen;
                        const isEmpty  = qi >= quotientLen;
                        const isNewQ   = qi === stepsComplete - 1 && qi < quotientLen;
                        return (
                          <td key={qi} style={{ width: CW, padding: 2, ...(qi === 0 ? BSEP : {}) }}
                            className="align-middle text-center">
                            {isEmpty ? emptyCell() : revealed
                              ? (isNewQ ? showCellNew(quotientStr[qi]!) : showCellOld(quotientStr[qi]!))
                              : emptyCell()}
                          </td>
                        );
                      })
                    : <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                  }
                </tr>
                {/* Product row */}
                <tr>
                  <td style={{ padding: 0, textAlign:"center", verticalAlign:"middle", fontSize:14, color:"var(--color-text-secondary)" }}>−</td>
                  <StaticWorkRow numStr={prStr} colEnd={step.colEnd} fresh={fresh} />
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
                {/* Separator line */}
                <tr>
                  <td style={{ padding: 0 }} />
                  {Array.from({ length: dividendCols }, (_, col) => (
                    <td key={col} style={{ padding: 0, width: CW }}>
                      {col >= lineStart && col <= lineEnd
                        ? <div className="h-px bg-[var(--color-text-primary)] opacity-50 my-1" />
                        : null}
                    </td>
                  ))}
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
              </React.Fragment>
            );
          })}

          {/* Remainder row (when all steps done) */}
          {stepsComplete >= divSteps.length && divSteps.length > 0 && (
            <tr>
              <td colSpan={dividendCols} style={{ padding:"4px 6px 4px 0", textAlign:"right", verticalAlign:"middle", fontSize:12, color:"var(--color-text-secondary)", whiteSpace:"nowrap" }}>
                Reste :
              </td>
              <td style={{ width: CW, padding: 2 }} className="align-middle text-center">
                {showCell(remainder, true)}
              </td>
              <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function AddDemoGrid({ colLabels, op, carryLabel = "R", a, b, carries, result, prevCarries, prevResult }: {
  colLabels: string[];
  op: string;
  carryLabel?: string;
  a: (number | null)[];
  b: (number | null)[];
  carries: (number | null)[];
  result: (number | null)[];
  prevCarries?: (number | null)[] | null;
  prevResult?: (number | null)[] | null;
}) {
  const isComma = (i: number) => colLabels[i] === ",";
  const isNewC = (i: number) => !isComma(i) && carries[i] !== null && (prevCarries == null || prevCarries[i] === null);
  const isNewR = (i: number) => !isComma(i) && result[i] !== null && (prevResult == null || prevResult[i] === null);
  return (
    <table className="border-collapse shrink-0">
      <thead>
        <tr>
          <td className="w-6" />
          {colLabels.map((lbl, i) => (
            <th key={i} style={{ width: lbl === "," ? 14 : 32 }}
              className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">
              {lbl === "," ? "" : lbl}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Carry/borrow row */}
        <tr>
          <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">{carryLabel}</td>
          {carries.map((c, ci) => (
            <td key={ci} className="text-center">
              {isComma(ci) ? <div style={{ width: 14 }} /> : (
                <div className={`h-5 w-8 flex items-center justify-center font-mono text-[10px] font-bold ${isNewC(ci) ? "text-orange-500" : "text-orange-300"}`}>
                  {c !== null ? c : ""}
                </div>
              )}
            </td>
          ))}
        </tr>
        {/* Operand a */}
        <tr>
          <td />
          {a.map((d, di) => (
            <td key={di} className="text-center">
              {isComma(di)
                ? <div style={{ width: 14 }} className="h-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
                : <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{d !== null ? d : ""}</div>
              }
            </td>
          ))}
        </tr>
        {/* Operand b with operator */}
        <tr>
          <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{op}</td>
          {b.map((d, di) => (
            <td key={di} className="text-center">
              {isComma(di)
                ? <div style={{ width: 14 }} className="h-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
                : <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{d !== null ? d : ""}</div>
              }
            </td>
          ))}
        </tr>
        {/* Separator */}
        <tr>
          <td colSpan={colLabels.length + 1}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td>
        </tr>
        {/* Result */}
        <tr>
          <td />
          {result.map((d, di) => (
            <td key={di} className="text-center">
              {isComma(di)
                ? <div style={{ width: 14 }} className="h-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
                : <div className={`h-8 w-8 flex items-center justify-center font-mono text-base rounded border ${
                    d !== null
                      ? isNewR(di)
                        ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold"
                        : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
                      : "border-dashed border-[var(--color-border-default)] text-transparent"
                  }`}>
                    {d !== null ? d : "0"}
                  </div>
              }
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
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
    case "bullets":
      return (
        <div className="space-y-1.5">
          {block.labelFr && <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>}
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 pl-1">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  <span className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-alg)]" />
                  <span>{renderFracText(item)}</span>
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
    case "mul_step_cards":
      return (
        <div className="space-y-6">
          {block.steps.map((step, si) => {
            const prev = si > 0 ? block.steps[si - 1] : null;
            return (
              <div key={si} className="space-y-2">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
                <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                  {step.textsFr.map((t, ti) => (
                    <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{t}</p>
                  ))}
                </div>
                <MulDemoGrid
                  a={block.a} b={block.b} op={block.op}
                  carries={step.carries} result={step.result}
                  prevCarries={prev?.carries ?? null}
                  prevResult={prev?.result ?? null}
                />
              </div>
            );
          })}
        </div>
      );
    case "mul2_step_cards":
      return (
        <div className="space-y-6">
          {block.steps.map((step, si) => {
            const prev = si > 0 ? block.steps[si - 1] : null;
            return (
              <div key={si} className="space-y-2">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
                <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                  {step.textsFr.map((t, ti) => (
                    <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{t}</p>
                  ))}
                </div>
                <Mul2DemoGrid
                  a={block.a} b={block.b} result={block.result}
                  carries1={step.carries1} carries2={step.carries2}
                  p1={step.p1} p2shifted={step.p2shifted} res={step.res}
                  prevCarries1={prev?.carries1 ?? null}
                  prevCarries2={prev?.carries2 ?? null}
                  prevP1={prev?.p1 ?? null}
                  prevP2shifted={prev?.p2shifted ?? null}
                  prevRes={prev?.res ?? null}
                />
              </div>
            );
          })}
        </div>
      );
    case "div_step_cards":
      return (
        <div className="space-y-6">
          {block.steps.map((step, si) => (
            <div key={si} className="space-y-2">
              <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
              <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                {step.textsFr.map((t, ti) => (
                  <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{t}</p>
                ))}
              </div>
              <DivDemoGrid
                dividend={block.dividend} divisor={block.divisor}
                stepsComplete={step.stepsComplete}
              />
            </div>
          ))}
        </div>
      );
    case "add_step_cards":
      return (
        <div className="space-y-6">
          {block.steps.map((step, si) => {
            const prev = si > 0 ? block.steps[si - 1] : null;
            return (
              <div key={si} className="space-y-2">
                <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
                <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                  {step.textsFr.map((t, ti) => (
                    <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{t}</p>
                  ))}
                </div>
                <AddDemoGrid
                  colLabels={block.colLabels}
                  op={block.op}
                  carryLabel={block.carryLabel}
                  a={block.a}
                  b={block.b}
                  carries={step.carries}
                  result={step.result}
                  prevCarries={prev?.carries ?? null}
                  prevResult={prev?.result ?? null}
                />
              </div>
            );
          })}
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
  const initialIdx = startAtEval && evalStartIdx >= 0 ? evalStartIdx : 0;

  const [stepIdx, setStepIdx] = useState(initialIdx);
  const [exerciseKey, setExerciseKey] = useState(0);
  const [validateCommand, setValidateCommand] = useState(0);
  const [canValidate, setCanValidate] = useState(true);
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);
  const [toggleAnswer, setToggleAnswer] = useState<"oui" | "non" | null>(null);
  const [evalScores, setEvalScores] = useState<Record<number, boolean>>({});

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
  // Exception: A5-4, A5-5, A5-6 have custom decimal exercises handled below
  const isCustomA5 = submoduleId === "A5-4" || submoduleId === "A5-5" || submoduleId === "A5-6";
  if (moduleId !== "A4" && !isCustomA5) {
    return <GenericModuleContent moduleId={moduleId} startSubmoduleId={submoduleId} startAtEval={startAtEval} />;
  }

  const currentStep = steps[stepIdx];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;
  const isExercise = currentStep !== undefined &&
    currentStep.kind !== "theory" &&
    currentStep.kind !== "eval_start" &&
    currentStep.kind !== "pass_toggle" &&
    currentStep.kind !== "results";
  const isCustom = currentStep?.kind === "fraction_toggle" || currentStep?.kind === "fraction_coloring" || currentStep?.kind === "fraction_read" || currentStep?.kind === "fraction_multi_coloring" || currentStep?.kind === "fraction_multi_read" || currentStep?.kind === "fraction_equiv" || currentStep?.kind === "fraction_simplify" || currentStep?.kind === "fraction_compare" || currentStep?.kind === "frac_ops" || currentStep?.kind === "frac_to_dec" || currentStep?.kind === "dec_to_frac" || currentStep?.kind === "dec_add" || currentStep?.kind === "dec_add_missing" || currentStep?.kind === "dec_add_hundredths" || currentStep?.kind === "dec_sub" || currentStep?.kind === "dec_sub_missing" || currentStep?.kind === "dec_sub_hundredths" || currentStep?.kind === "dec_mul_simple" || currentStep?.kind === "dec_mul_missing" || currentStep?.kind === "dec_mul_ext" || currentStep?.kind === "dec_div_simple" || currentStep?.kind === "dec_div_missing" || currentStep?.kind === "dec_div_ext";
  const inEvalPhase = currentStep?.kind === "eval_start" || currentStep?.kind === "pass_toggle" || currentStep?.kind === "results";

  function goBack() { if (!isFirstStep) goTo(stepIdx - 1); }

  function finishEval(passed: boolean, correct?: number, total?: number) {
    if (!lesson) { router.push("/mathematiques"); return; }
    const c = correct ?? (passed ? 1 : 0);
    const t = total ?? 1;
    const grade = percentToSwissGrade((c / t) * 100);
    const p = loadProgress();
    saveProgress(completeSubmodule(p, moduleId, lesson.submoduleId, c, t, grade));
    router.push("/mathematiques");
  }

  function goNext() {
    if (currentStep?.kind === "pass_toggle") {
      finishEval(toggleAnswer === "oui");
      return;
    }
    if (currentStep?.kind === "results") {
      const evalStartI = steps.findIndex((s: WorkspaceStep) => s.kind === "eval_start");
      const resultsI = steps.findIndex((s: WorkspaceStep) => s.kind === "results");
      const exIndices = Array.from({ length: resultsI - evalStartI - 1 }, (_: unknown, j: number) => evalStartI + 1 + j);
      const correct = exIndices.filter((i: number) => evalScores[i] === true).length;
      const total = exIndices.length;
      finishEval(total === 0 || correct / total >= 0.6, correct, total);
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
    setEvalScores((prev: Record<number, boolean>) => ({ ...prev, [stepIdx]: ok }));
    setCanValidate(false);
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

  const visibleSteps = steps.filter((s: WorkspaceStep) => !notInBar(s));
  const visibleIdx = steps.slice(0, stepIdx).filter((s: WorkspaceStep) => !notInBar(s)).length;

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

      {/* A4-1 custom exercises */}
      {currentStep?.kind === "fraction_toggle" && (
        <FractionToggleExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_coloring" && (
        <FractionColoringExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_read" && (
        <FractionReadExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_multi_coloring" && (
        <FractionMultiColoringExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_multi_read" && (
        <FractionMultiReadExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A4-2 exercises */}
      {currentStep?.kind === "fraction_equiv" && (
        <FractionEquivExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_simplify" && (
        <FractionSimplifyExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_compare" && (
        <FractionCompareExercise key={exerciseKey} exNum={currentStep.exNum} mode={currentStep.mode} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "frac_to_dec" && (
        <FracToDecExercise key={exerciseKey} exNum={currentStep.exNum} variant={currentStep.variant} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_to_frac" && (
        <DecToFracExercise key={exerciseKey} exNum={currentStep.exNum} variant={currentStep.variant} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A5 decimal exercises */}
      {currentStep?.kind === "dec_add" && (
        <DecAddExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_add_missing" && (
        <DecAddMissingExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_add_hundredths" && (
        <DecAddHundredthsExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_sub" && (
        <DecSubExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_sub_missing" && (
        <DecSubMissingExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_sub_hundredths" && (
        <DecSubHundredthsExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_mul_simple" && (
        <DecMulSimpleExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_mul_missing" && (
        <DecMulMissingExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_mul_ext" && (
        <DecMulExtExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_div_simple" && (
        <DecDivSimpleExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_div_missing" && (
        <DecDivMissingExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_div_ext" && (
        <DecDivExtExercise key={exerciseKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A4-4/5/6 fraction operations exercises */}
      {currentStep?.kind === "frac_ops" && (
        <FractionOpsExercise key={exerciseKey} exType={currentStep.exType} opMode={currentStep.opMode} validateCommand={validateCommand} onValidated={handleCustomValidated} />
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

      {/* Pass toggle (A2/A3/other modules) */}
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

      {/* Results page (A4/A5 scored modules) */}
      {currentStep?.kind === "results" && (() => {
        const evalStartI = steps.findIndex((s: WorkspaceStep) => s.kind === "eval_start");
        const resultsI = steps.findIndex((s: WorkspaceStep) => s.kind === "results");
        const exIndices = Array.from({ length: resultsI - evalStartI - 1 }, (_: unknown, j: number) => evalStartI + 1 + j);
        const correct = exIndices.filter((i: number) => evalScores[i] === true).length;
        const total = exIndices.length;
        const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
        const passed = pct >= 60;
        return (
          <div className="flex flex-col items-center gap-8 py-8 text-center">
            <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${passed ? "bg-[var(--color-accent-alg)]/10" : "bg-amber-100 dark:bg-amber-900/20"}`}>
              {passed ? (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-alg)" strokeWidth="1.5" aria-hidden>
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              ) : (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              )}
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">Résultats</p>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">{lesson.theory.title.fr}</h2>
              <p className="text-4xl font-bold text-[var(--color-text-primary)]">
                {correct}
                <span className="text-xl font-normal text-[var(--color-text-secondary)]">/{total}</span>
              </p>
              <p className="text-lg font-semibold text-[var(--color-text-secondary)]">{pct} %</p>
              <div className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold ${passed ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]" : "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"}`}>
                {passed ? "Module réussi ✓" : "À retravailler"}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {currentStep?.kind !== "eval_start" ? (
              <button type="button" onClick={goBack}
                disabled={isFirstStep || currentStep?.kind === "pass_toggle" || currentStep?.kind === "results"}
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
                {currentStep?.kind === "pass_toggle" || currentStep?.kind === "results" || isLastStep ? (
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
