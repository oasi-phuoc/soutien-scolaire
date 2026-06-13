"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { getMathModule } from "@/lib/curriculum/math-data";
import { getLessonBySubmoduleId, getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";
import { linearSwissGrade, PASSING_GRADE } from "@/lib/scoring";
import { FractionToggleExercise, FractionColoringExercise, FractionReadExercise, FractionMultiColoringExercise, FractionMultiReadExercise, FractionEquivExercise, FractionSimplifyExercise, FractionCompareExercise, FracOpCompareExercise, FracToDecExercise, DecToFracExercise } from "@/components/math/A4ModuleContent";
import { FractionOpsExercise, type FracOpMode } from "@/components/math/A4FractionOpsContent";
import { DecArithGroupExercise, DecMulColGridExercise, DecDivSimpleExercise, DecDivMissingExercise, DecDivExtExercise, DecColArithExercise, DecColArithFullExercise, DecExprCompExercise, DecMul2ColExercise } from "@/components/math/A5DecimalContent";
import { PctToFracExercise, PctToDecExercise, FracToPctExercise, DecToPctExercise } from "@/components/math/A6PercentContent";
import { DecReadDecomposeExercise, DecReadRecomposeExercise, DecReadPlaceValueExercise, DecReadDigitAtExercise, DecReadDictationExercise, DecReadCompareExercise, DecReadOrderExercise, DecReadFilterGtExercise, DecReadFilterLtExercise, DecReadFilterBetweenExercise, DecReadEncadrementExercise, DecReadEncadrementUniteExercise, DecReadNLReadExercise, DecReadNLPlaceExercise } from "@/components/math/A5ReadContent";
import { A7NLReadMixedExercise, A7NLPlaceMixedExercise, A7NLReadNegExercise, A7NLPlaceNegExercise } from "@/components/math/A7NLContent";
import { A7CompareExercise, A7RelNumberSelectExercise, A7RelEncadrementExercise, A7RelOrderingExercise, A7RelSeqCompleteExercise } from "@/components/math/A7CompareContent";
import { A7RelArithExercise, A7RelMulDivExercise } from "@/components/math/A7ArithContent";
import { A8PowerExercise, A8MissingExpExercise, A8MissingBaseExercise, A8PowerCompareExercise, A8PowerOrderExercise, A8MultExercise, A8DivExercise, A8PowPowExercise, A8MixedExercise, A8EqCompleteExercise, A8Pow10CalcExercise, A8ToPow10Exercise, A8Pow10ExpExercise, A8SciCalcExercise, A8SciWriteExercise, A8SqrtTrueFalseExercise, A8SqrtExercise, A8SqrtMissingExercise, A8OpSimpleExercise, A8OpParenExercise, A8OpBracketExercise, A8OpFillExercise, A8OpPowSqrtExercise, A8OpComplexExercise } from "@/components/math/A8PowerContent";
import { PctOfNumExercise, PartToPctExercise, PctChangeExercise, PctDiffExercise, PctMultiplierExercise, PctTableExercise, PctWordExercise } from "@/components/math/A6PercentContent";
import { A1ModuleContent } from "@/components/math/A1ModuleContent";
import { GenericModuleContent } from "@/components/math/GenericModuleContent";
import EvalProgressBar from "@/components/math/EvalProgressBar";
import TrainingProgressBar from "@/components/math/TrainingProgressBar";

type WorkspaceStep =
  | { kind: "theory" }
  | { kind: "fraction_toggle" }
  | { kind: "fraction_coloring" }
  | { kind: "fraction_read" }
  | { kind: "fraction_multi_coloring" }
  | { kind: "dec_arith_group"; exNum: number; op: "+" | "-" | "×"; missingOperand: boolean; timer?: number; precision: "tenths" | "hundredths" | "extended" | "tenths_small" | "small" | "large" | "special_mul"; mixed?: boolean }
  | { kind: "dec_mul2_col"; exNum: number }
  | { kind: "dec_mul_col"; exNum: number; preFilledOperands: boolean }
  | { kind: "dec_div_simple"; exNum: number }
  | { kind: "dec_div_missing"; exNum: number }
  | { kind: "dec_div_ext"; exNum: number }
  | { kind: "dec_col_arith"; exNum: number; op: "+" | "-" }
  | { kind: "dec_col_arith_full"; exNum: number }
  | { kind: "dec_expr_comp"; exNum: number }
  | { kind: "fraction_multi_read" }
  | { kind: "fraction_equiv" }
  | { kind: "fraction_simplify" }
  | { kind: "fraction_compare"; exNum: number; mode: "same-den" | "same-num" | "diff-both" }
  | { kind: "frac_op_compare"; exNum: number; opMode: "add-sub" | "mul" | "div" }
  | { kind: "frac_to_dec"; exNum: number; variant: "basic" | "extended" }
  | { kind: "dec_to_frac"; exNum: number; variant: "basic" | "extended" }
  | { kind: "frac_ops"; exType: 1|2|3|4|5|6|7|8|9; opMode: FracOpMode; count?: number; displayExNum?: number }
  | { kind: "dec_read_decompose"; exNum: number }
  | { kind: "dec_read_recompose"; exNum: number }
  | { kind: "dec_read_place_value"; exNum: number }
  | { kind: "dec_read_digit_at"; exNum: number }
  | { kind: "dec_read_dictation"; exNum: number }
  | { kind: "dec_read_compare"; exNum: number }
  | { kind: "dec_read_order"; exNum: number }
  | { kind: "dec_read_filter_gt"; exNum: number }
  | { kind: "dec_read_filter_lt"; exNum: number }
  | { kind: "dec_read_filter_between"; exNum: number }
  | { kind: "dec_read_encadrement"; exNum: number }
  | { kind: "dec_read_encadrement_unite"; exNum: number }
  | { kind: "dec_read_nl_read"; exNum: number }
  | { kind: "dec_read_nl_place"; exNum: number }
  | { kind: "a7_nl_read_mixed"; exNum: number }
  | { kind: "a7_nl_place_mixed"; exNum: number }
  | { kind: "a7_nl_read_neg"; exNum: number }
  | { kind: "a7_nl_place_neg"; exNum: number }
  | { kind: "a7_compare_ex"; exNum: number; level: 1 | 2 }
  | { kind: "a7_rel_num_select"; exNum: number; mode: "gt" | "lt" | "between" }
  | { kind: "a7_rel_encadrement"; exNum: number }
  | { kind: "a7_rel_ordering"; exNum: number }
  | { kind: "a7_rel_seq_complete"; exNum: number; isDecimal: boolean }
  | { kind: "a7_rel_arith"; exNum: number; range: number; count: number; missingOperand: boolean; timer?: number; questionMode?: "balanced" | "ex5" | "decimal" }
  | { kind: "a7_rel_mul_div"; exNum: number; range: number; count: number; missingOperand: boolean; timer?: number; questionMode?: "standard" | "mixed_dec" }
  | { kind: "a8_power_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_missing_exp_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_missing_base_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_power_cmp_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_power_order_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_mult_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_div_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_pow_pow_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_mixed_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_eq_complete_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_pow10_calc_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_to_pow10_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_pow10_exp_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_sci_calc_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_sci_write_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_sqrt_tf_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_sqrt_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_sqrt_missing_ex"; exNum: number; count: number; promptFr: string }
  | { kind: "a8_op_simple_ex"; exNum: number; promptFr: string }
  | { kind: "a8_op_paren_ex"; exNum: number; promptFr: string }
  | { kind: "a8_op_bracket_ex"; exNum: number; promptFr: string }
  | { kind: "a8_op_fill_ex"; exNum: number; promptFr: string }
  | { kind: "a8_op_powsqrt_ex"; exNum: number; promptFr: string }
  | { kind: "a8_op_complex_ex"; exNum: number; promptFr: string }
  | { kind: "pct_to_frac_ex"; exNum: number }
  | { kind: "pct_to_dec_ex"; exNum: number }
  | { kind: "frac_to_pct_ex"; exNum: number }
  | { kind: "dec_to_pct_ex"; exNum: number }
  | { kind: "pct_of_num_ex"; exNum: number }
  | { kind: "part_to_pct_ex"; exNum: number }
  | { kind: "pct_diff_ex"; exNum: number }
  | { kind: "pct_change_ex"; exNum: number }
  | { kind: "pct_multiplier_ex"; exNum: number }
  | { kind: "pct_table_ex"; exNum: number }
  | { kind: "pct_word_ex"; exNum: number }
  | { kind: "exercise"; item: MathExerciseItem; exNum: number }
  | { kind: "eval_start" }
  | { kind: "pass_toggle" }
  | { kind: "results" };

const EVAL_PHASE_KINDS = new Set(["eval_start", "pass_toggle", "results"] as const);
type EvalPhaseKind = "eval_start" | "pass_toggle" | "results";
function isEvalPhaseKind(k: string): k is EvalPhaseKind { return EVAL_PHASE_KINDS.has(k as EvalPhaseKind); }
function notInBar(s: WorkspaceStep) { return isEvalPhaseKind(s.kind); }

const STEP_DEFAULT_TOTALS: Record<string, number> = {
  fraction_toggle: 5, fraction_coloring: 4, fraction_read: 4,
  fraction_multi_coloring: 4, fraction_multi_read: 4,
  fraction_equiv: 5, fraction_simplify: 5, fraction_compare: 5,
  frac_op_compare: 5,
  frac_to_dec: 5, dec_to_frac: 5,
  dec_col_arith: 4, dec_col_arith_full: 2, dec_expr_comp: 5,
  dec_mul2_col: 2,
};

function stepExpectedTotal(step: WorkspaceStep | undefined, stored: { c: number; t: number } | undefined): number {
  if (!step) return stored?.t ?? 1;
  if ("count" in step && typeof (step as { count?: number }).count === "number") {
    return (step as { count: number }).count;
  }
  return STEP_DEFAULT_TOTALS[step.kind] ?? stored?.t ?? 1;
}

function shufflePick<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

function getParentModuleForRevision(submoduleId: string): string | null {
  const ra = submoduleId.match(/^RA-(\d+)$/i);
  if (ra) return `A${ra[1]}`;
  const rg = submoduleId.match(/^RG-(\d+)$/i);
  if (rg) return `G${rg[1]}`;
  return null;
}

function buildRevisionEvalSteps(parentModuleId: string): WorkspaceStep[] {
  const lessons = getLessonsForModule(parentModuleId);
  if (!lessons) return [];
  const nonRev = lessons.filter(l =>
    !l.submoduleId.startsWith("RA-") && !l.submoduleId.startsWith("RG-")
  );
  const result: WorkspaceStep[] = [];
  let exCounter = 1;
  for (const sub of nonRev) {
    const subSteps = buildSteps(sub);
    const esi = subSteps.findIndex(s => s.kind === "eval_start");
    if (esi < 0) continue;
    const endi = subSteps.findIndex((s, i) => i > esi && (s.kind === "pass_toggle" || s.kind === "results"));
    const evalSlice = endi >= 0 ? subSteps.slice(esi + 1, endi) : subSteps.slice(esi + 1);
    if (evalSlice.length > 0) {
      result.push(...evalSlice);
    } else {
      // pool-only lesson: include up to 3 exercises in scored mode
      const pool = sub.exercisePool;
      const src = pool && pool.length > 0
        ? shufflePick(pool, Math.min(3, pool.length))
        : sub.exercises.slice(0, 3);
      src.forEach(item => result.push({ kind: "exercise", item, exNum: exCounter++ }));
    }
  }
  return result;
}

function buildSteps(lesson: MathSubmoduleLesson): WorkspaceStep[] {
  // Revision lessons (RA/RG): skip training, go directly to eval
  const parentModuleId = getParentModuleForRevision(lesson.submoduleId);
  if (parentModuleId !== null) {
    const evalSteps = buildRevisionEvalSteps(parentModuleId);
    return [
      { kind: "eval_start" },
      ...evalSteps,
      evalSteps.length > 0 ? { kind: "results" } : { kind: "pass_toggle" },
    ];
  }

  const steps: WorkspaceStep[] = [{ kind: "theory" }];
  if (lesson.submoduleId === "A4-1") {
    // Training
    steps.push({ kind: "fraction_toggle" });
    steps.push({ kind: "fraction_coloring" });
    steps.push({ kind: "fraction_read" });
    steps.push({ kind: "fraction_multi_coloring" });
    steps.push({ kind: "fraction_multi_read" });
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
  } else if (lesson.submoduleId === "A5-1") {
    // Training: 13 exercises
    steps.push({ kind: "dec_read_decompose", exNum: 1 });
    steps.push({ kind: "dec_read_recompose", exNum: 2 });
    steps.push({ kind: "dec_read_place_value", exNum: 3 });
    steps.push({ kind: "dec_read_digit_at", exNum: 4 });
    steps.push({ kind: "dec_read_dictation", exNum: 5 });
    steps.push({ kind: "dec_read_compare", exNum: 6 });
    steps.push({ kind: "dec_read_order", exNum: 7 });
    steps.push({ kind: "dec_read_filter_gt", exNum: 8 });
    steps.push({ kind: "dec_read_filter_lt", exNum: 9 });
    steps.push({ kind: "dec_read_filter_between", exNum: 10 });
    steps.push({ kind: "dec_read_encadrement", exNum: 11 });
    steps.push({ kind: "dec_read_encadrement_unite", exNum: 12 });
    steps.push({ kind: "dec_read_nl_read", exNum: 13 });
    steps.push({ kind: "dec_read_nl_place", exNum: 14 });
    // Evaluation: 6 exercises
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "dec_read_decompose", exNum: 1 });
    steps.push({ kind: "dec_read_place_value", exNum: 2 });
    steps.push({ kind: "dec_read_dictation", exNum: 3 });
    steps.push({ kind: "dec_read_compare", exNum: 4 });
    steps.push({ kind: "dec_read_encadrement", exNum: 5 });
    steps.push({ kind: "dec_read_nl_read", exNum: 6 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A7-1") {
    steps.push({ kind: "a7_nl_read_mixed", exNum: 1 });
    steps.push({ kind: "a7_nl_place_mixed", exNum: 2 });
    steps.push({ kind: "a7_nl_read_neg", exNum: 3 });
    steps.push({ kind: "a7_nl_place_neg", exNum: 4 });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a7_nl_read_mixed", exNum: 1 });
    steps.push({ kind: "a7_nl_place_mixed", exNum: 2 });
    steps.push({ kind: "a7_nl_read_neg", exNum: 3 });
    steps.push({ kind: "a7_nl_place_neg", exNum: 4 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A7-2") {
    steps.push({ kind: "a7_compare_ex", exNum: 1, level: 2 });
    steps.push({ kind: "a7_rel_num_select", exNum: 2, mode: "gt" });
    steps.push({ kind: "a7_rel_num_select", exNum: 3, mode: "lt" });
    steps.push({ kind: "a7_rel_num_select", exNum: 4, mode: "between" });
    steps.push({ kind: "a7_rel_encadrement", exNum: 5 });
    steps.push({ kind: "a7_rel_ordering", exNum: 6 });
    steps.push({ kind: "a7_rel_seq_complete", exNum: 7, isDecimal: false });
    steps.push({ kind: "a7_rel_seq_complete", exNum: 8, isDecimal: true });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a7_compare_ex", exNum: 1, level: 2 });
    steps.push({ kind: "a7_rel_num_select", exNum: 2, mode: "gt" });
    steps.push({ kind: "a7_rel_num_select", exNum: 3, mode: "lt" });
    steps.push({ kind: "a7_rel_num_select", exNum: 4, mode: "between" });
    steps.push({ kind: "a7_rel_encadrement", exNum: 5 });
    steps.push({ kind: "a7_rel_ordering", exNum: 6 });
    steps.push({ kind: "a7_rel_seq_complete", exNum: 7, isDecimal: false });
    steps.push({ kind: "a7_rel_seq_complete", exNum: 8, isDecimal: true });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A7-3") {
    steps.push({ kind: "a7_rel_arith", exNum: 1, range: 6, count: 5, missingOperand: false, questionMode: "balanced" });
    steps.push({ kind: "a7_rel_arith", exNum: 2, range: 6, count: 5, missingOperand: false, questionMode: "balanced", timer: 60 });
    steps.push({ kind: "a7_rel_arith", exNum: 3, range: 6, count: 5, missingOperand: true, questionMode: "balanced" });
    steps.push({ kind: "a7_rel_arith", exNum: 4, range: 100, count: 5, missingOperand: false, questionMode: "balanced" });
    steps.push({ kind: "a7_rel_arith", exNum: 5, range: 0, count: 5, missingOperand: false, questionMode: "decimal" });
    steps.push({ kind: "a7_rel_arith", exNum: 6, range: 100, count: 5, missingOperand: true, questionMode: "balanced" });
    steps.push({ kind: "a7_rel_arith", exNum: 7, range: 0, count: 5, missingOperand: true, questionMode: "decimal" });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a7_rel_arith", exNum: 1, range: 6, count: 5, missingOperand: false, questionMode: "balanced" });
    steps.push({ kind: "a7_rel_arith", exNum: 2, range: 6, count: 5, missingOperand: true, questionMode: "balanced" });
    steps.push({ kind: "a7_rel_arith", exNum: 3, range: 100, count: 5, missingOperand: false, questionMode: "balanced" });
    steps.push({ kind: "a7_rel_arith", exNum: 4, range: 0, count: 5, missingOperand: false, questionMode: "decimal" });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A7-4") {
    steps.push({ kind: "a7_rel_mul_div", exNum: 1, range: 6, count: 5, missingOperand: false });
    steps.push({ kind: "a7_rel_mul_div", exNum: 2, range: 6, count: 8, missingOperand: false, timer: 60 });
    steps.push({ kind: "a7_rel_mul_div", exNum: 3, range: 6, count: 5, missingOperand: true });
    steps.push({ kind: "a7_rel_mul_div", exNum: 4, range: 6, count: 8, missingOperand: true, timer: 60 });
    steps.push({ kind: "a7_rel_mul_div", exNum: 5, range: 0, count: 5, missingOperand: false, questionMode: "mixed_dec" });
    steps.push({ kind: "a7_rel_mul_div", exNum: 6, range: 0, count: 5, missingOperand: true, questionMode: "mixed_dec" });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a7_rel_mul_div", exNum: 1, range: 6, count: 5, missingOperand: false });
    steps.push({ kind: "a7_rel_mul_div", exNum: 2, range: 6, count: 5, missingOperand: false });
    steps.push({ kind: "a7_rel_mul_div", exNum: 3, range: 6, count: 5, missingOperand: true });
    steps.push({ kind: "a7_rel_mul_div", exNum: 4, range: 6, count: 5, missingOperand: true });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A5-4") {
    // Training: Ex1–3 (0.01–10), Ex4 (10–100), Ex5–6 (0.01–10 with timer), Ex6 (10–100), Ex7–8 col, Ex9 compare
    steps.push({ kind: "dec_arith_group", exNum: 1, op: "+", missingOperand: false, precision: "tenths_small" });
    steps.push({ kind: "dec_arith_group", exNum: 2, op: "+", missingOperand: false, timer: 60, precision: "tenths_small" });
    steps.push({ kind: "dec_arith_group", exNum: 3, op: "+", missingOperand: true, precision: "tenths_small" });
    steps.push({ kind: "dec_arith_group", exNum: 4, op: "+", missingOperand: false, precision: "large" });
    steps.push({ kind: "dec_arith_group", exNum: 5, op: "-", missingOperand: false, timer: 60, precision: "small" });
    steps.push({ kind: "dec_arith_group", exNum: 6, op: "-", missingOperand: true, precision: "large" });
    steps.push({ kind: "dec_col_arith", exNum: 7, op: "+" });
    steps.push({ kind: "dec_col_arith", exNum: 8, op: "-" });
    steps.push({ kind: "dec_col_arith_full", exNum: 9 });
    steps.push({ kind: "dec_expr_comp", exNum: 10 });
    // Evaluation: 6 exercises
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "dec_arith_group", exNum: 1, op: "+", missingOperand: false, precision: "small" });
    steps.push({ kind: "dec_arith_group", exNum: 2, op: "+", missingOperand: true, precision: "small" });
    steps.push({ kind: "dec_arith_group", exNum: 3, op: "-", missingOperand: false, precision: "small" });
    steps.push({ kind: "dec_arith_group", exNum: 4, op: "-", missingOperand: true, precision: "large" });
    steps.push({ kind: "dec_col_arith", exNum: 5, op: "+" });
    steps.push({ kind: "dec_expr_comp", exNum: 6 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A5-5") {
    steps.push({ kind: "dec_arith_group", exNum: 1, op: "×", missingOperand: false, precision: "special_mul" });
    steps.push({ kind: "dec_arith_group", exNum: 2, op: "×", missingOperand: false, timer: 60, precision: "special_mul" });
    steps.push({ kind: "dec_arith_group", exNum: 3, op: "×", missingOperand: true, precision: "special_mul" });
    steps.push({ kind: "dec_arith_group", exNum: 4, op: "×", missingOperand: true, timer: 60, precision: "special_mul" });
    steps.push({ kind: "dec_mul_col", exNum: 5, preFilledOperands: true });
    steps.push({ kind: "dec_mul_col", exNum: 6, preFilledOperands: false });
    steps.push({ kind: "dec_mul2_col", exNum: 7 });
    // Evaluation
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "dec_arith_group", exNum: 1, op: "×", missingOperand: false, precision: "special_mul" });
    steps.push({ kind: "dec_arith_group", exNum: 2, op: "×", missingOperand: true, precision: "special_mul" });
    steps.push({ kind: "dec_mul_col", exNum: 3, preFilledOperands: true });
    steps.push({ kind: "dec_mul2_col", exNum: 4 });
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
  } else if (lesson.submoduleId === "A6-2") {
    steps.push({ kind: "pct_of_num_ex", exNum: 1 });
    steps.push({ kind: "part_to_pct_ex", exNum: 2 });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "pct_of_num_ex", exNum: 1 });
    steps.push({ kind: "part_to_pct_ex", exNum: 2 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A6-3") {
    steps.push({ kind: "pct_diff_ex", exNum: 1 });
    steps.push({ kind: "pct_change_ex", exNum: 2 });
    steps.push({ kind: "pct_multiplier_ex", exNum: 3 });
    steps.push({ kind: "pct_table_ex", exNum: 4 });
    steps.push({ kind: "pct_word_ex", exNum: 5 });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "pct_diff_ex", exNum: 1 });
    steps.push({ kind: "pct_change_ex", exNum: 2 });
    steps.push({ kind: "pct_multiplier_ex", exNum: 3 });
    steps.push({ kind: "pct_table_ex", exNum: 4 });
    steps.push({ kind: "pct_word_ex", exNum: 5 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A4-4" || lesson.submoduleId === "A4-5" || lesson.submoduleId === "A4-6") {
    const opMode: FracOpMode = lesson.submoduleId === "A4-4" ? "add-sub" : lesson.submoduleId === "A4-5" ? "mul" : "div";
    const cmpMode = opMode;
    // Training: Ex1-5, Ex6 (comparison), then Ex9 (as Ex7)
    for (let ex = 1; ex <= 5; ex++) {
      steps.push({ kind: "frac_ops", exType: ex as 1|2|3|4|5, opMode });
    }
    steps.push({ kind: "frac_op_compare", exNum: 6, opMode: cmpMode });
    steps.push({ kind: "frac_ops", exType: 9, opMode, displayExNum: 7 });
    // Evaluation: Ex1-4 + comparison (Ex5) + Ex9 (Ex6)
    steps.push({ kind: "eval_start" });
    for (let ex = 1; ex <= 4; ex++) {
      steps.push({ kind: "frac_ops", exType: ex as 1|2|3|4, opMode, count: 4 });
    }
    steps.push({ kind: "frac_op_compare", exNum: 5, opMode: cmpMode });
    steps.push({ kind: "frac_ops", exType: 9, opMode, count: 4, displayExNum: 6 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A6-1") {
    steps.push({ kind: "pct_to_frac_ex", exNum: 1 });
    steps.push({ kind: "pct_to_dec_ex", exNum: 2 });
    steps.push({ kind: "frac_to_pct_ex", exNum: 3 });
    steps.push({ kind: "dec_to_pct_ex", exNum: 4 });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "pct_to_frac_ex", exNum: 1 });
    steps.push({ kind: "pct_to_dec_ex", exNum: 2 });
    steps.push({ kind: "frac_to_pct_ex", exNum: 3 });
    steps.push({ kind: "dec_to_pct_ex", exNum: 4 });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A8-1") {
    steps.push({ kind: "a8_power_ex", exNum: 1, count: 5, promptFr: "Calculez la puissance des nombres." });
    steps.push({ kind: "a8_missing_exp_ex", exNum: 2, count: 5, promptFr: "Complétez avec la puissance." });
    steps.push({ kind: "a8_missing_base_ex", exNum: 3, count: 5, promptFr: "Retrouvez la base." });
    steps.push({ kind: "a8_power_cmp_ex", exNum: 4, count: 5, promptFr: "Comparez les puissances." });
    steps.push({ kind: "a8_power_order_ex", exNum: 5, count: 2, promptFr: "Classez les puissances par ordre croissant." });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a8_power_ex", exNum: 1, count: 5, promptFr: "Calculez la puissance des nombres." });
    steps.push({ kind: "a8_missing_exp_ex", exNum: 2, count: 5, promptFr: "Complétez avec la puissance." });
    steps.push({ kind: "a8_missing_base_ex", exNum: 3, count: 5, promptFr: "Retrouvez la base." });
    steps.push({ kind: "a8_power_cmp_ex", exNum: 4, count: 5, promptFr: "Comparez les puissances." });
    steps.push({ kind: "a8_power_order_ex", exNum: 5, count: 2, promptFr: "Classez les puissances par ordre croissant." });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A8-2") {
    steps.push({ kind: "a8_mult_ex", exNum: 1, count: 5, promptFr: "Effectuez les multiplications de puissances de même base." });
    steps.push({ kind: "a8_div_ex", exNum: 2, count: 5, promptFr: "Effectuez les divisions de puissances de même base." });
    steps.push({ kind: "a8_pow_pow_ex", exNum: 3, count: 5, promptFr: "Effectuez les puissances de puissances." });
    steps.push({ kind: "a8_mixed_ex", exNum: 4, count: 5, promptFr: "Effectuez les calculs." });
    steps.push({ kind: "a8_eq_complete_ex", exNum: 5, count: 5, promptFr: "Complétez les égalités." });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a8_mult_ex", exNum: 1, count: 5, promptFr: "Effectuez les multiplications de puissances de même base." });
    steps.push({ kind: "a8_div_ex", exNum: 2, count: 5, promptFr: "Effectuez les divisions de puissances de même base." });
    steps.push({ kind: "a8_pow_pow_ex", exNum: 3, count: 5, promptFr: "Effectuez les puissances de puissances." });
    steps.push({ kind: "a8_mixed_ex", exNum: 4, count: 5, promptFr: "Effectuez les calculs." });
    steps.push({ kind: "a8_eq_complete_ex", exNum: 5, count: 5, promptFr: "Complétez les égalités." });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A8-4") {
    steps.push({ kind: "a8_sqrt_tf_ex", exNum: 1, count: 5, promptFr: "Sélectionner si c'est vrai ou faux." });
    steps.push({ kind: "a8_sqrt_ex", exNum: 2, count: 5, promptFr: "Calculez les racines carrées." });
    steps.push({ kind: "a8_sqrt_missing_ex", exNum: 3, count: 5, promptFr: "Trouvez le nombre manquant." });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a8_sqrt_tf_ex", exNum: 1, count: 5, promptFr: "Sélectionner si c'est vrai ou faux." });
    steps.push({ kind: "a8_sqrt_ex", exNum: 2, count: 5, promptFr: "Calculez les racines carrées." });
    steps.push({ kind: "a8_sqrt_missing_ex", exNum: 3, count: 5, promptFr: "Trouvez le nombre manquant." });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A8-5") {
    steps.push({ kind: "a8_op_simple_ex",  exNum: 1, promptFr: "Calculez les résultats." });
    steps.push({ kind: "a8_op_paren_ex",   exNum: 2, promptFr: "Calculez les résultats." });
    steps.push({ kind: "a8_op_bracket_ex", exNum: 3, promptFr: "Calculez les résultats." });
    steps.push({ kind: "a8_op_fill_ex",    exNum: 4, promptFr: "Complétez avec les valeurs manquantes." });
    steps.push({ kind: "a8_op_powsqrt_ex", exNum: 5, promptFr: "Calculez les résultats." });
    steps.push({ kind: "a8_op_complex_ex", exNum: 6, promptFr: "Calculez les résultats." });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a8_op_simple_ex",  exNum: 1, promptFr: "Calculez les résultats." });
    steps.push({ kind: "a8_op_paren_ex",   exNum: 2, promptFr: "Calculez les résultats." });
    steps.push({ kind: "a8_op_bracket_ex", exNum: 3, promptFr: "Calculez les résultats." });
    steps.push({ kind: "a8_op_fill_ex",    exNum: 4, promptFr: "Complétez avec les valeurs manquantes." });
    steps.push({ kind: "a8_op_powsqrt_ex", exNum: 5, promptFr: "Calculez les résultats." });
    steps.push({ kind: "a8_op_complex_ex", exNum: 6, promptFr: "Calculez les résultats." });
    steps.push({ kind: "results" });
  } else if (lesson.submoduleId === "A8-3") {
    steps.push({ kind: "a8_pow10_calc_ex", exNum: 1, count: 5, promptFr: "Calculez la puissance de 10." });
    steps.push({ kind: "a8_to_pow10_ex", exNum: 2, count: 5, promptFr: "Écrivez le nombre comme puissance de 10." });
    steps.push({ kind: "a8_pow10_exp_ex", exNum: 3, count: 5, promptFr: "Complétez l'exposant." });
    steps.push({ kind: "a8_sci_calc_ex", exNum: 4, count: 5, promptFr: "Calculez." });
    steps.push({ kind: "a8_sci_write_ex", exNum: 5, count: 5, promptFr: "Écrivez en notation scientifique." });
    steps.push({ kind: "eval_start" });
    steps.push({ kind: "a8_pow10_calc_ex", exNum: 1, count: 5, promptFr: "Calculez la puissance de 10." });
    steps.push({ kind: "a8_to_pow10_ex", exNum: 2, count: 5, promptFr: "Écrivez le nombre comme puissance de 10." });
    steps.push({ kind: "a8_pow10_exp_ex", exNum: 3, count: 5, promptFr: "Complétez l'exposant." });
    steps.push({ kind: "a8_sci_calc_ex", exNum: 4, count: 5, promptFr: "Calculez." });
    steps.push({ kind: "a8_sci_write_ex", exNum: 5, count: 5, promptFr: "Écrivez en notation scientifique." });
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

// Parses [[frac:N/D]], **bold**, and \n line-break markers and renders them inline
function renderFracText(text: string): React.ReactNode {
  if (text.includes("\n")) {
    const lines = text.split("\n");
    return (
      <>
        {lines.map((line, li) => (
          <React.Fragment key={li}>
            {li > 0 && <br />}
            {renderFracText(line)}
          </React.Fragment>
        ))}
      </>
    );
  }
  const parts = text.split(/(\[\[frac:[^/\]]+\/[^\]]+\]\]|\*\*[^*]+\*\*)/);
  if (parts.length === 1) return text;
  const nodes: React.ReactNode[] = [];
  parts.forEach((part, i) => {
    const fracM = part.match(/^\[\[frac:([^/\]]+)\/([^\]]+)\]\]$/);
    if (fracM) {
      nodes.push(
        <span key={i} className="inline-flex flex-col items-center leading-none gap-0.5 mx-0.5 align-middle">
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">{fracM[1]}</span>
          <span className="h-[1.5px] self-stretch rounded bg-[var(--color-text-primary)]" />
          <span className="text-xs font-bold text-[var(--color-text-primary)]">{fracM[2]}</span>
        </span>
      );
      return;
    }
    const boldM = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldM) {
      nodes.push(<strong key={i} className="font-bold text-[var(--color-accent-alg)]">{boldM[1]}</strong>);
      return;
    }
    if (part) nodes.push(part);
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

function AddDemoGrid({ colLabels, op, carryLabel = "R", a, b, carries, result, prevCarries, prevResult, aDisplay }: {
  colLabels: string[];
  op: string;
  carryLabel?: string;
  a: (number | null)[];
  b: (number | null)[];
  carries: (number | null)[];
  result: (number | null)[];
  prevCarries?: (number | null)[] | null;
  prevResult?: (number | null)[] | null;
  aDisplay?: (number | string | null)[] | null;
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
          {a.map((d, di) => {
            const overrideVal = aDisplay?.[di];
            const displayVal = overrideVal !== undefined && overrideVal !== null ? overrideVal : (d !== null ? d : "");
            const isOverride = overrideVal !== undefined && overrideVal !== null;
            return (
              <td key={di} className="text-center">
                {isComma(di)
                  ? <div style={{ width: 14 }} className="h-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
                  : <div className={`h-8 w-8 flex items-center justify-center font-mono text-base ${isOverride ? "font-bold text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>{displayVal}</div>
                }
              </td>
            );
          })}
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

function AddSubToggleCards({ block }: { block: Extract<MathRichBlock, { type: "add_sub_toggle_cards" }> }) {
  const [mode, setMode] = React.useState<"add" | "sub">("add");
  const isAdd = mode === "add";
  const colLabels = isAdd ? block.addColLabels : block.subColLabels;
  const a = isAdd ? block.addA : block.subA;
  const b = isAdd ? block.addB : block.subB;
  const steps = isAdd ? block.addSteps : block.subSteps;
  const _noteFr = isAdd ? block.addNoteFr : block.subNoteFr;
  const op = isAdd ? "+" : "−";
  const carryLabel = isAdd ? "R" : "E";

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["add", "sub"] as const).map(m => (
          <button key={m} type="button" onClick={() => setMode(m)}
            className={`flex-1 px-4 py-2 rounded-lg text-base font-bold transition-colors ${
              mode === m
                ? "border border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                : "border border-[var(--color-accent-alg)]/30 text-[var(--color-accent-alg)] hover:bg-[var(--color-accent-alg)]/10"
            }`}>
            {m === "add" ? "Addition" : "Soustraction"}
          </button>
        ))}
      </div>
      <p className="text-base font-bold text-[var(--color-text-primary)]">Comment effectuer le calcul</p>
      <div className="space-y-6">
        {steps.map((step, si) => {
          const prev = si > 0 ? steps[si - 1] : null;
          return (
            <div key={`${mode}-${si}`} className="space-y-2">
              <p className="text-sm font-bold text-[var(--color-accent-alg)]">{step.numFr}</p>
              <div className="border-l-2 border-[var(--color-accent-alg)] pl-3 space-y-0.5">
                {step.textsFr.map((t, ti) => (
                  <p key={ti} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{renderFracText(t)}</p>
                ))}
              </div>
              <AddDemoGrid
                colLabels={colLabels}
                op={op}
                carryLabel={carryLabel}
                a={a}
                b={b}
                carries={step.carries}
                result={step.result}
                prevCarries={prev?.carries ?? null}
                prevResult={prev?.result ?? null}
                aDisplay={step.aDisplay ?? null}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TheoryTabs({ block }: { block: Extract<MathRichBlock, { type: "theory_tabs" }> }) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const activeBlocks = block.tabs[activeIdx]?.blocks ?? [];
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {block.tabs.map((tab, i) => (
          <button key={i} type="button" onClick={() => setActiveIdx(i)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
              activeIdx === i
                ? "border border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                : "border border-[var(--color-accent-alg)]/30 text-[var(--color-accent-alg)] hover:bg-[var(--color-accent-alg)]/10"
            }`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {activeBlocks.map((b, i) => <BlockView key={`tab${activeIdx}-${i}`} block={b} />)}
      </div>
    </div>
  );
}

function TheoryToggle({ block }: { block: Extract<MathRichBlock, { type: "theory_toggle" }> }) {
  const [tab, setTab] = React.useState<"a" | "b">("a");
  const activeBlocks = tab === "a" ? block.blocksA : block.blocksB;
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["a", "b"] as const).map(t => (
          <button key={t} type="button" onClick={() => setTab(t)}
            className={`flex-1 px-4 py-2 rounded-lg text-base font-bold transition-colors ${
              tab === t
                ? "border border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                : "border border-[var(--color-accent-alg)]/30 text-[var(--color-accent-alg)] hover:bg-[var(--color-accent-alg)]/10"
            }`}>
            {t === "a" ? block.labelA : block.labelB}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {activeBlocks.map((b, i) => <BlockView key={`${tab}-${i}`} block={b} />)}
      </div>
    </div>
  );
}

function ShapeExplorer({ block }: { block: Extract<MathRichBlock, { type: "shape_explorer" }> }) {
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const selectedShape = block.shapes[selectedIdx];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2">
        {block.shapes.map((shape, i) => (
          <button
            key={shape.id}
            type="button"
            onClick={() => setSelectedIdx(i)}
            className={`aspect-square rounded-xl border-2 p-1.5 transition-all ${
              selectedIdx === i
                ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15"
                : "border-[var(--color-border-default)] bg-white dark:bg-zinc-900 hover:border-[var(--color-accent-alg)]/60"
            }`}
          >
            <div className="pointer-events-none w-full h-full" dangerouslySetInnerHTML={{ __html: shape.svg }} />
          </button>
        ))}
      </div>
      {selectedShape && (
        <div className="space-y-6">
          {selectedShape.tabs.map((tab, ti) => (
            <div key={`${selectedIdx}-${ti}`}>
              <p className="mb-2 text-sm font-bold text-[var(--color-accent-alg)] uppercase tracking-wide">{tab.label}</p>
              <div className="space-y-3">
                {tab.blocks.map((b, bi) => (
                  <BlockView key={`s${selectedIdx}-t${ti}-b${bi}`} block={b} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
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
              <li key={i} className="text-xs text-[var(--color-text-secondary)]">{renderFracText(it)}</li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
          <table className="min-w-full text-sm">
            {block.headersFr.length > 0 && (
              <thead>
                <tr className={block.accentHeader ? "bg-[var(--color-accent-alg)]/10" : "bg-[var(--color-bg-secondary)]"}>
                  {block.headersFr.map((h, i) => (
                    <th key={i} className={`px-3 py-2 text-center font-semibold ${block.accentHeader ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri > 0 || block.headersFr.length > 0 ? "border-t border-[var(--color-border-default)]" : ""}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-3 py-2 ${block.colAligns?.[ci] === "left" ? "text-left" : "text-center"} text-[var(--color-text-secondary)]`}>{renderFracText(cell)}</td>
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
    case "add_sub_toggle_cards":
      return <AddSubToggleCards block={block} />;
    case "theory_toggle":
      return <TheoryToggle block={block} />;
    case "theory_tabs":
      return <TheoryTabs block={block} />;
    case "shape_explorer":
      return <ShapeExplorer block={block} />;
    default:
      return null;
  }
}

// ── Hint popup + button ──────────────────────────────────────────────────────
function HintPopup({ hint, onClose }: { hint: string; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-2xl bg-[var(--color-bg-primary)] p-5 shadow-xl dark:shadow-black/50 border border-[var(--color-border-default)]" onClick={e => e.stopPropagation()}>
        <button type="button" onClick={onClose}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Fermer">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <p className="mb-2 text-sm font-bold text-[var(--color-accent-alg)]">💡 Astuce</p>
        <p className="text-sm leading-relaxed text-[var(--color-text-primary)] pr-4">{hint}</p>
        <button type="button" onClick={onClose}
          className="mt-4 w-full rounded-xl py-2 text-sm font-semibold text-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 hover:bg-[var(--color-accent-alg)]/20 transition-colors">
          OK
        </button>
      </div>
    </div>
  );
}

function HintButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--color-accent-alg)] text-xs font-bold text-[var(--color-accent-alg)] transition-colors hover:bg-[var(--color-accent-alg)]/10"
      aria-label="Aide">
      ?
    </button>
  );
}

function getWorkspaceStepHint(step: WorkspaceStep | undefined): string | undefined {
  if (!step) return undefined;
  if (step.kind === "exercise") return step.item.hintFr;
  if (step.kind === "fraction_toggle" || step.kind === "fraction_coloring" || step.kind === "fraction_read" || step.kind === "fraction_multi_coloring" || step.kind === "fraction_multi_read")
    return "Le numérateur (en haut) indique les parties colorées. Le dénominateur (en bas) indique le total de parts égales.";
  if (step.kind === "fraction_equiv")
    return "Deux fractions sont équivalentes si on multiplie ou divise numérateur ET dénominateur par le même nombre.";
  if (step.kind === "fraction_simplify")
    return "Trouve le PGCD du numérateur et du dénominateur, puis divise les deux par ce nombre.";
  if (step.kind === "fraction_compare" || step.kind === "frac_op_compare")
    return "Pour comparer, réduis au même dénominateur, puis compare les numérateurs.";
  if (step.kind === "frac_to_dec")
    return "Pour convertir une fraction en décimal, divise le numérateur par le dénominateur.";
  if (step.kind === "dec_to_frac")
    return "Pour convertir un décimal en fraction, écris le chiffre sur la puissance de 10 correspondante (10, 100…).";
  if (step.kind === "frac_ops")
    return "Addition/soustraction : réduis au même dénominateur. Multiplication : numérateur × numérateur, dénominateur × dénominateur. Division : multiplie par l'inverse.";
  if (step.kind === "dec_arith_group") {
    if (step.op === "+") return "Additionne en alignant la virgule. Retiens 1 si la somme d'une colonne dépasse 9.";
    if (step.op === "-") return "Soustrait en alignant la virgule. Emprunte à la colonne suivante si nécessaire.";
    if (step.op === "×") return "Multiplie comme des entiers, puis place la virgule en comptant les décimales des deux facteurs.";
  }
  if (step.kind === "dec_mul_col")
    return "Multiplie comme des entiers, puis place la virgule en comptant les décimales totales des deux facteurs.";
  if (step.kind === "dec_div_simple" || step.kind === "dec_div_missing" || step.kind === "dec_div_ext")
    return "Divise comme des entiers. Place la virgule dans le quotient quand tu arrives à la virgule du dividende.";
  if (step.kind === "dec_col_arith")
    return "Aligne les virgules des deux nombres avant de calculer colonne par colonne.";
  if (step.kind === "dec_expr_comp")
    return "Calcule chaque expression séparément, puis compare les résultats.";
  if (step.kind === "dec_read_decompose" || step.kind === "dec_read_recompose")
    return "Identifie chaque position : unités, dixièmes (÷10), centièmes (÷100), millièmes (÷1000).";
  if (step.kind === "dec_read_place_value" || step.kind === "dec_read_digit_at")
    return "Repère la position du chiffre demandé : unités, dixièmes, centièmes, millièmes…";
  if (step.kind === "dec_read_dictation")
    return "Écris le nombre décimal en chiffres en respectant la position de chaque chiffre.";
  if (step.kind === "dec_read_compare" || step.kind === "dec_read_order")
    return "Compare les chiffres position par position : entiers d'abord, puis dixièmes, centièmes…";
  if (step.kind === "dec_read_filter_gt" || step.kind === "dec_read_filter_lt" || step.kind === "dec_read_filter_between")
    return "Compare chaque nombre à la valeur cible en regardant les chiffres position par position.";
  if (step.kind === "dec_read_encadrement" || step.kind === "dec_read_encadrement_unite")
    return "Cherche les deux décimaux consécutifs (à la position demandée) entre lesquels se trouve le nombre.";
  if (step.kind === "dec_read_nl_read" || step.kind === "dec_read_nl_place")
    return "Lis la valeur de chaque graduation en comptant par intervalles réguliers décimaux.";
  if (step.kind === "a7_nl_read_mixed" || step.kind === "a7_nl_place_mixed")
    return "Lis la valeur de chaque graduation en comptant par intervalles réguliers. Les négatifs sont à gauche du zéro.";
  if (step.kind === "a7_nl_read_neg" || step.kind === "a7_nl_place_neg")
    return "Sur la droite numérique, les nombres négatifs sont à gauche du zéro. Plus on va à gauche, plus le nombre est petit.";
  if (step.kind === "a7_compare_ex")
    return "Compare d'abord les signes (positif/négatif), puis les valeurs absolues. Les négatifs sont toujours plus petits que les positifs.";
  if (step.kind === "a7_rel_num_select" && step.mode === "gt") return "Tout positif est plus grand que 0, et 0 est plus grand que tout négatif.";
  if (step.kind === "a7_rel_num_select" && step.mode === "lt") return "Tout négatif est plus petit que 0. Entre deux négatifs, le plus grand est le plus proche de 0.";
  if (step.kind === "a7_rel_num_select" && step.mode === "between") return "Un nombre est entre A et B s'il est à la fois plus grand que A et plus petit que B.";
  if (step.kind === "a7_rel_encadrement") return "Pour encadrer à la dizaine : cherche les deux multiples de 10 qui entourent le nombre.";
  if (step.kind === "a7_rel_ordering") return "Classe d'abord les négatifs (du plus petit au plus grand), puis 0, puis les positifs.";
  if (step.kind === "a7_rel_seq_complete") return "Calcule la différence entre deux termes consécutifs pour trouver la règle (+ ou − combien).";
  if (step.kind === "a7_rel_arith")
    return "Pour additionner des nombres relatifs, regarde les signes : même signe → additionne les valeurs, signes différents → soustrait la plus petite de la plus grande.";
  if (step.kind === "a7_rel_mul_div")
    return "Même signe → résultat positif. Signes différents → résultat négatif. Calcule ensuite la valeur absolue normalement.";
  if (step.kind === "pct_of_num_ex")
    return "Pour calculer un pourcentage d'une quantité : Pourcentage × Quantité ÷ 100";
  if (step.kind === "part_to_pct_ex")
    return "Pour trouver le pourcentage représenté : Partie ÷ Total × 100 = Pourcentage (%)";
  if (step.kind === "pct_diff_ex")
    return "La variation = Base × Pourcentage ÷ 100";
  if (step.kind === "pct_change_ex")
    return "Valeur finale = Base × (1 + p/100) pour une augmentation, ou Base × (1 − p/100) pour une réduction";
  if (step.kind === "pct_multiplier_ex")
    return "Augmentation de p% → coefficient × (1 + p/100). Réduction de p% → coefficient × (1 − p/100)";
  if (step.kind === "pct_word_ex")
    return "Lisez bien le problème : s'agit-il de calculer p% d'un nombre, d'exprimer une partie en %, d'augmenter ou de réduire ?";
  return undefined;
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

export function MathSubmoduleWorkspace({ submoduleId, moduleId, startAtEval, directRevisionMode }: { submoduleId?: string; moduleId: string; startAtEval?: boolean; directRevisionMode?: boolean }) {
  const router = useRouter();
  const lesson = getLessonBySubmoduleId(submoduleId ?? "");

  const [steps] = useState<WorkspaceStep[]>(() => {
    if (directRevisionMode) {
      const evalSteps = buildRevisionEvalSteps(moduleId);
      return [
        { kind: "eval_start" },
        ...evalSteps,
        evalSteps.length > 0 ? { kind: "results" as const } : { kind: "pass_toggle" as const },
      ];
    }
    return lesson ? buildSteps(lesson) : [];
  });

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
  const [evalScores, setEvalScores] = useState<Record<number, { c: number; t: number }>>({});
  const [evalKey, setEvalKey] = useState(0);
  const [trainingTimerLeft, setTrainingTimerLeft] = useState<number | null>(null);
  const [evalTimeLeft, setEvalTimeLeft] = useState<number | null>(null);
  const [revTimerLeft, setRevTimerLeft] = useState<number | null>(null);
  const [showEvalCancelConfirm, setShowEvalCancelConfirm] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isRevisionLesson = !!directRevisionMode || /^(RA|RG)-\d+$/i.test(submoduleId ?? "");

  const goTo = useCallback((idx: number) => {
    setStepIdx(idx);
    setShowHint(false);
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setValidateCommand(0);
    setCanValidate(true);
    setExerciseKey(k => k + 1);
    setToggleAnswer(null);
  }, []);

  useEffect(() => { setTrainingTimerLeft(null); }, [stepIdx]);

  // Eval 5-minute countdown
  useEffect(() => {
    if (evalTimeLeft === null || evalTimeLeft <= 0) return;
    const id = setInterval(() => setEvalTimeLeft((t) => (t ?? 1) - 1), 1000);
    return () => clearInterval(id);
  }, [evalTimeLeft]);

  // Revision 30-minute countdown
  useEffect(() => {
    if (!isRevisionLesson || revTimerLeft === null || revTimerLeft <= 0) return;
    const id = setInterval(() => setRevTimerLeft((t) => (t ?? 1) - 1), 1000);
    return () => clearInterval(id);
  }, [isRevisionLesson, revTimerLeft]);

  // Auto-jump to end when revision timer hits 0
  useEffect(() => {
    if (!isRevisionLesson || revTimerLeft !== 0) return;
    const endIdx = steps.findLastIndex((s: WorkspaceStep) => s.kind === "results" || s.kind === "pass_toggle");
    if (endIdx >= 0 && stepIdx !== endIdx) {
      setRevTimerLeft(null);
      goTo(endIdx);
    }
  }, [isRevisionLesson, revTimerLeft, steps, stepIdx, goTo]);

  function startEval() {
    if (isRevisionLesson) {
      setRevTimerLeft(30 * 60);
    } else {
      setEvalTimeLeft(5 * 60);
    }
    setEvalScores({});
    setEvalKey(k => k + 1);
    goTo(stepIdx + 1);
  }

  // A1-1 and A1-2 use the rich A1ModuleContent; A1-3+ use GenericModuleContent with toggle
  if (moduleId === "A1") {
    if (submoduleId === "A1-1" || submoduleId === "A1-2") {
      return <A1ModuleContent startSubmoduleId={submoduleId} startAtEval={startAtEval} />;
    }
    return <GenericModuleContent moduleId={moduleId} startSubmoduleId={submoduleId} startAtEval={startAtEval} />;
  }

  // Non-A4 modules with lessons use GenericModuleContent per submodule
  // Exception: A5-4, A5-5, A5-6 have custom decimal exercises handled below
  // Exception: RA/RG revision lessons — route to GenericModuleContent (revisionMode) for GenericModuleContent parents;
  //            keep workspace step builder only for A4 and A7 parents (custom step types).
  const isCustomA5 = submoduleId === "A5-1" || submoduleId === "A5-4" || submoduleId === "A5-5" || submoduleId === "A5-6" || submoduleId === "A7-1" || submoduleId === "A7-2" || submoduleId === "A7-3" || submoduleId === "A7-4" || submoduleId?.startsWith("A6-") || submoduleId === "A8-1" || submoduleId === "A8-2" || submoduleId === "A8-3" || submoduleId === "A8-4" || submoduleId === "A8-5";
  const isRevision = /^(RA|RG)-\d+$/i.test(submoduleId ?? "");
  if (isRevision) {
    const revParent = getParentModuleForRevision(submoduleId ?? "");
    if (revParent && revParent !== "A4" && revParent !== "A5" && revParent !== "A7") {
      return <GenericModuleContent moduleId={revParent} revisionMode={true} />;
    }
  }
  if (!directRevisionMode && moduleId !== "A4" && !isCustomA5 && !isRevision) {
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
  const A51_KINDS = new Set(["dec_read_decompose","dec_read_recompose","dec_read_place_value","dec_read_digit_at","dec_read_dictation","dec_read_compare","dec_read_order","dec_read_filter_gt","dec_read_filter_lt","dec_read_filter_between","dec_read_encadrement","dec_read_encadrement_unite","dec_read_nl_read","dec_read_nl_place"]);
  const A71_KINDS = new Set(["a7_nl_read_mixed","a7_nl_place_mixed","a7_nl_read_neg","a7_nl_place_neg","a7_compare_ex","a7_rel_arith","a7_rel_mul_div","a7_rel_num_select","a7_rel_encadrement","a7_rel_ordering","a7_rel_seq_complete"]);
  const isCustom = A51_KINDS.has(currentStep?.kind ?? "") || A71_KINDS.has(currentStep?.kind ?? "") || currentStep?.kind === "a8_power_ex" || currentStep?.kind === "a8_missing_exp_ex" || currentStep?.kind === "a8_missing_base_ex" || currentStep?.kind === "a8_power_cmp_ex" || currentStep?.kind === "a8_power_order_ex" || currentStep?.kind === "a8_mult_ex" || currentStep?.kind === "a8_div_ex" || currentStep?.kind === "a8_pow_pow_ex" || currentStep?.kind === "a8_mixed_ex" || currentStep?.kind === "a8_eq_complete_ex" || currentStep?.kind === "a8_pow10_calc_ex" || currentStep?.kind === "a8_to_pow10_ex" || currentStep?.kind === "a8_pow10_exp_ex" || currentStep?.kind === "a8_sci_calc_ex" || currentStep?.kind === "a8_sci_write_ex" || currentStep?.kind === "a8_sqrt_tf_ex" || currentStep?.kind === "a8_sqrt_ex" || currentStep?.kind === "a8_sqrt_missing_ex" || currentStep?.kind === "a8_op_simple_ex" || currentStep?.kind === "a8_op_paren_ex" || currentStep?.kind === "a8_op_bracket_ex" || currentStep?.kind === "a8_op_fill_ex" || currentStep?.kind === "a8_op_powsqrt_ex" || currentStep?.kind === "a8_op_complex_ex" || currentStep?.kind === "fraction_toggle" || currentStep?.kind === "fraction_coloring" || currentStep?.kind === "fraction_read" || currentStep?.kind === "fraction_multi_coloring" || currentStep?.kind === "fraction_multi_read" || currentStep?.kind === "fraction_equiv" || currentStep?.kind === "fraction_simplify" || currentStep?.kind === "fraction_compare" || currentStep?.kind === "frac_op_compare" || currentStep?.kind === "frac_ops" || currentStep?.kind === "frac_to_dec" || currentStep?.kind === "dec_to_frac" || currentStep?.kind === "dec_arith_group" || currentStep?.kind === "dec_mul_col" || currentStep?.kind === "dec_div_simple" || currentStep?.kind === "dec_div_missing" || currentStep?.kind === "dec_div_ext" || currentStep?.kind === "dec_col_arith" || currentStep?.kind === "dec_col_arith_full" || currentStep?.kind === "dec_expr_comp" || currentStep?.kind === "dec_mul2_col" || currentStep?.kind === "pct_to_frac_ex" || currentStep?.kind === "pct_to_dec_ex" || currentStep?.kind === "frac_to_pct_ex" || currentStep?.kind === "dec_to_pct_ex" || currentStep?.kind === "pct_of_num_ex" || currentStep?.kind === "part_to_pct_ex" || currentStep?.kind === "pct_diff_ex" || currentStep?.kind === "pct_change_ex" || currentStep?.kind === "pct_multiplier_ex" || currentStep?.kind === "pct_table_ex" || currentStep?.kind === "pct_word_ex";
  const inEvalPhase = currentStep?.kind === "eval_start" || currentStep?.kind === "pass_toggle" || currentStep?.kind === "results";
  const revisionTitle = isRevisionLesson ? (getMathModule(moduleId)?.title ?? null) : null;

  function goBack() {
    if (isInEvalExercises) { setShowEvalCancelConfirm(true); return; }
    if (!isFirstStep) goTo(stepIdx - 1);
  }

  function cancelEval() {
    setShowEvalCancelConfirm(false);
    setEvalScores({});
    setEvalKey(k => k + 1);
    setEvalTimeLeft(null);
    setRevTimerLeft(null);
    goTo(evalStartIdx >= 0 ? evalStartIdx : 0);
  }

  function finishEval(passed: boolean, correct?: number, total?: number) {
    if (directRevisionMode || !lesson) { router.push("/mathematiques"); return; }
    if (!isRevisionLesson) {
      const c = correct ?? (passed ? 1 : 0);
      const t = total ?? 1;
      const grade = linearSwissGrade(c, t);
      const p = loadProgress();
      saveProgress(completeSubmodule(p, moduleId, lesson.submoduleId, c, t, grade));
    }
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
      const correct = exIndices.reduce((s: number, i: number) => s + (evalScores[i]?.c ?? 0), 0);
      const total = exIndices.reduce((s: number, i: number) => s + stepExpectedTotal(steps[i], evalScores[i]), 0);
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

  function handleCustomValidated(ok: boolean, correct?: number, total?: number) {
    const c = correct ?? (ok ? 1 : 0);
    const t = total ?? 1;
    setEvalScores((prev) => ({ ...prev, [stepIdx]: { c, t } }));
    setCanValidate(false);
  }

  function validateText() {
    if (currentStep?.kind !== "exercise") return;
    const ok = answerMatches(answer, currentStep.item.acceptable);
    setExStatus(ok ? "correct" : "wrong");
    setExAttempts(a => a + 1);
    if (ok) setCanValidate(false);
    const inEval = evalStartIdx >= 0 && stepIdx > evalStartIdx;
    if (inEval) {
      setEvalScores(prev => ({ ...prev, [stepIdx]: { c: ok ? 1 : 0, t: 1 } }));
    }
  }

  const validateDisabled = currentStep?.kind === "exercise"
    ? exStatus === "correct"
    : !canValidate;

  if ((!lesson && !directRevisionMode) || steps.length === 0) {
    return <p className="text-sm text-[var(--color-text-secondary)]">Contenu non disponible.</p>;
  }

  const resultsIdx = steps.findIndex((s: WorkspaceStep) => s.kind === "results");
  const isInEvalExercises = evalStartIdx >= 0 && stepIdx > evalStartIdx &&
    currentStep?.kind !== "results" && currentStep?.kind !== "eval_start" && currentStep?.kind !== "pass_toggle";
  const evalExerciseOffset = isInEvalExercises ? stepIdx - evalStartIdx - 1 : 0;
  const evalExerciseTotal = resultsIdx >= 0 ? resultsIdx - evalStartIdx - 1 : 0;

  const exKey: string | number = isInEvalExercises ? `eval-${evalKey}-${stepIdx}` : exerciseKey;

  const trainingSteps = evalStartIdx >= 0 ? steps.slice(0, evalStartIdx) : steps.filter((s: WorkspaceStep) => !notInBar(s));
  const trainingStepIdx = Math.min(stepIdx, trainingSteps.length);
  const showTrainingBar = !inEvalPhase && !isInEvalExercises;

  return (
    <div className="pb-40">
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
                className="flex-1 rounded-[var(--radius-lg)] bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Training progress bar */}
      {showTrainingBar && (
        <TrainingProgressBar current={trainingStepIdx} total={trainingSteps.length} timeLeft={trainingTimerLeft} />
      )}
      {/* Eval progress bar */}
      {isInEvalExercises && (
        <EvalProgressBar current={evalExerciseOffset} total={evalExerciseTotal} timeLeft={isRevisionLesson ? revTimerLeft : evalTimeLeft} />
      )}

      {/* Hint button — floated right, aligns with exercise title */}
      {!inEvalPhase && !isInEvalExercises && currentStep && currentStep.kind !== "theory" && getWorkspaceStepHint(currentStep) && (
        <div className="float-right ml-2">
          <HintButton onClick={() => setShowHint(true)} />
        </div>
      )}
      {showHint && getWorkspaceStepHint(currentStep) && (
        <HintPopup hint={getWorkspaceStepHint(currentStep)!} onClose={() => setShowHint(false)} />
      )}

      {/* Theory */}
      {currentStep?.kind === "theory" && lesson && <TheoryView lesson={lesson} />}

      {/* A4-1 custom exercises */}
      {currentStep?.kind === "fraction_toggle" && (
        <FractionToggleExercise key={exKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_coloring" && (
        <FractionColoringExercise key={exKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_read" && (
        <FractionReadExercise key={exKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_multi_coloring" && (
        <FractionMultiColoringExercise key={exKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_multi_read" && (
        <FractionMultiReadExercise key={exKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A4-2 exercises */}
      {currentStep?.kind === "fraction_equiv" && (
        <FractionEquivExercise key={exKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_simplify" && (
        <FractionSimplifyExercise key={exKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "fraction_compare" && (
        <FractionCompareExercise key={exKey} exNum={currentStep.exNum} mode={currentStep.mode} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "frac_op_compare" && (
        <FracOpCompareExercise key={exKey} exNum={currentStep.exNum} opMode={currentStep.opMode} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "frac_to_dec" && (
        <FracToDecExercise key={exKey} exNum={currentStep.exNum} variant={currentStep.variant} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_to_frac" && (
        <DecToFracExercise key={exKey} exNum={currentStep.exNum} variant={currentStep.variant} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A5.4 / A5.5 decimal arithmetic exercises */}
      {currentStep?.kind === "dec_arith_group" && (
        <DecArithGroupExercise
          key={exKey}
          exNum={currentStep.exNum}
          op={currentStep.op}
          missingOperand={currentStep.missingOperand}
          timer={currentStep.timer}
          precision={currentStep.precision}
          mixed={currentStep.mixed}
          validateCommand={validateCommand}
          onValidated={handleCustomValidated}
          onTimeUpdate={!isInEvalExercises ? setTrainingTimerLeft : undefined}
          hideTimerDisplay={!isInEvalExercises}
        />
      )}
      {currentStep?.kind === "dec_mul_col" && (
        <DecMulColGridExercise
          key={exKey}
          exNum={currentStep.exNum}
          preFilledOperands={currentStep.preFilledOperands}
          validateCommand={validateCommand}
          onValidated={handleCustomValidated}
        />
      )}
      {currentStep?.kind === "dec_div_simple" && (
        <DecDivSimpleExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_div_missing" && (
        <DecDivMissingExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_div_ext" && (
        <DecDivExtExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_col_arith" && (
        <DecColArithExercise key={exKey} exNum={currentStep.exNum} op={currentStep.op} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_col_arith_full" && (
        <DecColArithFullExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_mul2_col" && (
        <DecMul2ColExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_expr_comp" && (
        <DecExprCompExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A5-1 reading/rounding exercises */}
      {currentStep?.kind === "dec_read_decompose" && (
        <DecReadDecomposeExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_recompose" && (
        <DecReadRecomposeExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_place_value" && (
        <DecReadPlaceValueExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_digit_at" && (
        <DecReadDigitAtExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_dictation" && (
        <DecReadDictationExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
{currentStep?.kind === "dec_read_compare" && (
        <DecReadCompareExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_order" && (
        <DecReadOrderExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_filter_gt" && (
        <DecReadFilterGtExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_filter_lt" && (
        <DecReadFilterLtExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_filter_between" && (
        <DecReadFilterBetweenExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_encadrement" && (
        <DecReadEncadrementExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_encadrement_unite" && (
        <DecReadEncadrementUniteExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_nl_read" && (
        <DecReadNLReadExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_read_nl_place" && (
        <DecReadNLPlaceExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A7-1 number line exercises */}
      {currentStep?.kind === "a7_nl_read_mixed" && (
        <A7NLReadMixedExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a7_nl_place_mixed" && (
        <A7NLPlaceMixedExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a7_nl_read_neg" && (
        <A7NLReadNegExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a7_nl_place_neg" && (
        <A7NLPlaceNegExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A7-2 comparison exercises */}
      {currentStep?.kind === "a7_compare_ex" && (
        <A7CompareExercise key={exKey} exNum={currentStep.exNum} level={currentStep.level} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a7_rel_num_select" && (
        <A7RelNumberSelectExercise key={exKey} exNum={currentStep.exNum} mode={currentStep.mode} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a7_rel_encadrement" && (
        <A7RelEncadrementExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a7_rel_ordering" && (
        <A7RelOrderingExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a7_rel_seq_complete" && (
        <A7RelSeqCompleteExercise key={exKey} exNum={currentStep.exNum} isDecimal={currentStep.isDecimal} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A7-3 relative addition/subtraction exercises */}
      {currentStep?.kind === "a7_rel_arith" && (
        <A7RelArithExercise key={exKey} exNum={currentStep.exNum} range={currentStep.range} count={currentStep.count} missingOperand={currentStep.missingOperand} timer={currentStep.timer} questionMode={currentStep.questionMode} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A7-4 relative multiplication/division exercises */}
      {currentStep?.kind === "a7_rel_mul_div" && (
        <A7RelMulDivExercise key={exKey} exNum={currentStep.exNum} range={currentStep.range} count={currentStep.count} missingOperand={currentStep.missingOperand} timer={currentStep.timer} questionMode={currentStep.questionMode} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A8-1 power exercises */}
      {currentStep?.kind === "a8_power_ex" && (
        <A8PowerExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_missing_exp_ex" && (
        <A8MissingExpExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_missing_base_ex" && (
        <A8MissingBaseExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_power_cmp_ex" && (
        <A8PowerCompareExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_power_order_ex" && (
        <A8PowerOrderExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_mult_ex" && (
        <A8MultExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_div_ex" && (
        <A8DivExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_pow_pow_ex" && (
        <A8PowPowExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_mixed_ex" && (
        <A8MixedExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_eq_complete_ex" && (
        <A8EqCompleteExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A8-3 powers of 10 exercises */}
      {currentStep?.kind === "a8_pow10_calc_ex" && (
        <A8Pow10CalcExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_to_pow10_ex" && (
        <A8ToPow10Exercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_pow10_exp_ex" && (
        <A8Pow10ExpExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_sci_calc_ex" && (
        <A8SciCalcExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_sci_write_ex" && (
        <A8SciWriteExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A8-4 square root exercises */}
      {currentStep?.kind === "a8_sqrt_tf_ex" && (
        <A8SqrtTrueFalseExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_sqrt_ex" && (
        <A8SqrtExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_sqrt_missing_ex" && (
        <A8SqrtMissingExercise key={exKey} exNum={currentStep.exNum} count={currentStep.count} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A8-5 operations priority exercises */}
      {currentStep?.kind === "a8_op_simple_ex" && (
        <A8OpSimpleExercise key={exKey} exNum={currentStep.exNum} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_op_paren_ex" && (
        <A8OpParenExercise key={exKey} exNum={currentStep.exNum} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_op_bracket_ex" && (
        <A8OpBracketExercise key={exKey} exNum={currentStep.exNum} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_op_fill_ex" && (
        <A8OpFillExercise key={exKey} exNum={currentStep.exNum} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_op_powsqrt_ex" && (
        <A8OpPowSqrtExercise key={exKey} exNum={currentStep.exNum} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a8_op_complex_ex" && (
        <A8OpComplexExercise key={exKey} exNum={currentStep.exNum} promptFr={currentStep.promptFr} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A6-2 percentage exercises */}
      {currentStep?.kind === "pct_of_num_ex" && (
        <PctOfNumExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "part_to_pct_ex" && (
        <PartToPctExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A6-3 percentage increase/decrease exercises */}
      {currentStep?.kind === "pct_diff_ex" && (
        <PctDiffExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_change_ex" && (
        <PctChangeExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_multiplier_ex" && (
        <PctMultiplierExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_table_ex" && (
        <PctTableExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_word_ex" && (
        <PctWordExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A6-2 percentage exercises */}
      {currentStep?.kind === "pct_of_num_ex" && (
        <PctOfNumExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "part_to_pct_ex" && (
        <PartToPctExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A6-3 percentage increase/decrease exercises */}
      {currentStep?.kind === "pct_diff_ex" && (
        <PctDiffExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_change_ex" && (
        <PctChangeExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_multiplier_ex" && (
        <PctMultiplierExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_table_ex" && (
        <PctTableExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_word_ex" && (
        <PctWordExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* A4-4/5/6 fraction operations exercises */}
      {currentStep?.kind === "frac_ops" && (
        <FractionOpsExercise key={exKey} exType={currentStep.exType} opMode={currentStep.opMode} count={currentStep.count} displayExNum={currentStep.displayExNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {/* Generic text exercise */}
      {currentStep?.kind === "pct_to_frac_ex" && (
        <PctToFracExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "pct_to_dec_ex" && (
        <PctToDecExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "frac_to_pct_ex" && (
        <FracToPctExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "dec_to_pct_ex" && (
        <DecToPctExercise key={exKey} exNum={currentStep.exNum} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

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
            key={exKey}
            type="text"
            inputMode={currentStep.item.type === "number" ? "decimal" : "text"}
            value={answer}
            onChange={(e) => { const val = currentStep.item.type === "number" ? e.target.value.replace(/[^0-9,.\-]/g, "") : e.target.value; setAnswer(val); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") validateText(); }}
            placeholder="Votre réponse…"
            className={`w-full rounded-none border-0 border-b-2 px-4 py-3 text-sm outline-none transition-colors ${exStatus === "correct" ? "border-[var(--color-accent-alg)]/60" : exStatus === "wrong" ? "border-amber-500" : "border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]"}`}
          />
          {exStatus === "wrong" && <p>{exAttempts >= 2 ? <><span className="text-xs text-[var(--color-text-primary)] leading-none block">{answer}</span><span className="text-xs font-bold text-amber-600 leading-none block">{currentStep.item.acceptable[0]}</span></> : <span className="text-xs text-amber-500">Essayez encore…</span>}</p>}
        </div>
      )}

      {/* Eval start screen */}
      {currentStep?.kind === "eval_start" && (
        <div className="flex flex-col gap-8 py-8">
          <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-accent-alg)]/10">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-alg)" strokeWidth="1.5" aria-hidden>
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-alg)]">Évaluation</p>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">{revisionTitle ?? lesson?.theory.title.fr}</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Évalue ta maîtrise de ce module.</p>
            <p className="text-sm text-[var(--color-text-secondary)]">L&apos;évaluation est chronométrée. Tu as {isRevisionLesson ? "30 minutes" : "5 minutes"} pour compléter l&apos;évaluation.</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Les exercices apparaîtront au démarrage du chronomètre.</p>
          </div>
          <button
            type="button"
            onClick={startEval}
            className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-6 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
          >
            Commencer
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          </div>
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
                  ? "border-2 border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)] shadow-sm"
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
        const correct = exIndices.reduce((s: number, i: number) => s + (evalScores[i]?.c ?? 0), 0);
        const total = exIndices.reduce((s: number, i: number) => s + stepExpectedTotal(steps[i], evalScores[i]), 0);
        const grade = linearSwissGrade(correct, total);
        const passed = grade >= PASSING_GRADE;
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Résultats de l&apos;évaluation</h2>
            <ul className="space-y-2">
              {exIndices.map((idx, i) => {
                const sc = evalScores[idx];
                const c = sc?.c ?? 0;
                const t = stepExpectedTotal(steps[idx], sc);
                const color = c === t ? "text-green-600" : c > 0 ? "text-amber-600" : "text-red-500";
                return (
                  <li key={i} className="flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3">
                    <span className="text-sm text-[var(--color-text-primary)]">Exercice {i + 1}</span>
                    <span className={`text-sm font-bold ${color}`}>{c}/{t}</span>
                  </li>
                );
              })}
            </ul>
            <div className={`rounded-[var(--radius-lg)] border-2 p-6 text-center ${passed ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/5" : "border-red-400 bg-red-50 dark:bg-red-900/10"}`}>
              <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">Note</p>
              <p className="text-5xl font-bold text-[var(--color-text-primary)]">{grade.toFixed(1)}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">sur 6</p>
              <p className={`mt-3 text-base font-bold ${passed ? "text-[var(--color-accent-alg)]" : "text-red-500"}`}>
                {passed ? "✓ Réussi" : "✗ À améliorer"}
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">Seuil de réussite : {PASSING_GRADE}/6</p>
            </div>
          </div>
        );
      })()}

      {/* Fixed bottom nav — hidden on eval_start announcement */}
      {currentStep?.kind !== "eval_start" && <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button type="button" onClick={goBack}
              disabled={isFirstStep || currentStep?.kind === "pass_toggle" || currentStep?.kind === "results"}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
              Retour
            </button>

            {isExercise ? (
              <div className="flex items-center gap-2">
                {!isInEvalExercises && (
                  <button type="button" aria-label="Recommencer" onClick={refresh}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" /></svg>
                  </button>
                )}
                <button type="button" aria-label="Valider"
                  onClick={() => { if (isCustom) setValidateCommand(c => c + 1); else validateText(); }}
                  disabled={validateDisabled}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-90 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                </button>
              </div>
            ) : <span />}

            <button type="button" onClick={goNext}
              disabled={
                (currentStep?.kind === "pass_toggle" && toggleAnswer === null) ||
                (isInEvalExercises && evalScores[stepIdx] === undefined)
              }
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-30">
              {currentStep?.kind === "pass_toggle" || currentStep?.kind === "results" || isLastStep ? (
                <>Terminer <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg></>
              ) : (
                <>Suivant <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6" /></svg></>
              )}
            </button>
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>}
    </div>
  );
}
