"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";

// ── Helpers ───────────────────────────────────────────────────────────────────
function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Format a value stored in tenths (integer) as a French decimal string
function tenthsToStr(t: number): string {
  if (t % 10 === 0) return String(t / 10);
  return `${Math.floor(t / 10)},${t % 10}`;
}

// Format a value in hundredths
function hundredthsToStr(h: number): string {
  if (h % 100 === 0) return String(h / 100);
  if (h % 10 === 0) return `${Math.floor(h / 100)},${(h % 100) / 10}`;
  return `${Math.floor(h / 100)},${String(h % 100).padStart(2, "0")}`;
}

// Accept both comma and dot forms
function acceptable(ans: string): string[] {
  return [ans, ans.replace(",", ".")];
}

// Inline correction box (same style as A4 exercises)
function CorrectionBox({ wrong, correct }: { wrong: string; correct: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-1 text-sm min-w-[3.5rem] justify-center">
      <span className="text-amber-600 line-through tabular-nums">{wrong || "—"}</span>
      <span className="font-bold text-[var(--color-text-primary)] tabular-nums">{correct}</span>
    </span>
  );
}

const inputCls = (wrong: boolean) =>
  `w-20 rounded-xl border px-2 py-1 text-sm text-center outline-none transition-colors ${
    wrong
      ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20"
      : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"
  }`;

// ── Generic decimal exercise (list of N questions) ───────────────────────────
interface DecQuestion {
  label: string;
  question: string;
  answer: string; // French comma form
}

function DecExercise({
  exNum,
  title,
  consigne,
  questions,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  title: string;
  consigne: string;
  questions: DecQuestion[];
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [vals, setVals] = useState<string[]>(() => Array(questions.length).fill(""));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() =>
    Array(questions.length).fill("idle")
  );
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = questions.map((q, i) =>
      answerMatches(vals[i] ?? "", acceptable(q.answer)) ? "correct" : "wrong"
    ) as ("correct" | "wrong")[];
    setStatuses(sts);
    onValidated(sts.every((s) => s === "correct"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, questions, vals]);

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">
          Exercice {exNum} — {title}
        </h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const isWrong = statuses[i] === "wrong";
          return (
            <div key={i} className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">
                {q.label}.
              </span>
              <span className="text-sm font-mono text-[var(--color-text-primary)]">
                {q.question} =
              </span>
              {isWrong ? (
                <CorrectionBox wrong={vals[i] ?? ""} correct={q.answer} />
              ) : (
                <input
                  type="text"
                  value={vals[i]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!validated)
                      setVals((prev: string[]) => {
                        const n = [...prev];
                        n[i] = e.target.value;
                        return n;
                      });
                  }}
                  className={inputCls(isWrong)}
                  disabled={validated}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A5.4 / A5.5 — DecArithGroupExercise ───────────────────────────────────────

type ArithOp = "+" | "-" | "×";
// "small" = 0.01–10 (hundredths 1–999); "large" = 10–100 (tenths 100–999 or hundredths 1000–9999, random)
type ArithPrecision = "tenths" | "hundredths" | "extended" | "small" | "large";
type MissingPos = "a" | "b" | "result";

interface ArithQuestion {
  aStr: string;
  bStr: string;
  resultStr: string;
  missingPos: MissingPos;
  answer: string;
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function genArithQuestions(
  op: ArithOp,
  missingOperand: boolean,
  precision: ArithPrecision,
  count: number
): ArithQuestion[] {
  return Array.from({ length: count }, () => {
    let aStr: string, bStr: string, resultStr: string;
    let missingPos: MissingPos;

    if (op === "+") {
      if (precision === "small") {
        // 0.01–10: use hundredths 1–499 so sum ≤ 9.98
        const aH = rnd(1, 499); const bH = rnd(1, 499);
        aStr = hundredthsToStr(aH); bStr = hundredthsToStr(bH); resultStr = hundredthsToStr(aH + bH);
      } else if (precision === "large") {
        // 10–100: randomly 1 or 2 decimal places
        if (Math.random() < 0.5) {
          const aT = rnd(100, 499); const bT = rnd(100, 499); // 10.0–49.9, sum ≤ 99.8
          aStr = tenthsToStr(aT); bStr = tenthsToStr(bT); resultStr = tenthsToStr(aT + bT);
        } else {
          const aH = rnd(1000, 4999); const bH = rnd(1000, 4999); // 10.00–49.99, sum ≤ 99.98
          aStr = hundredthsToStr(aH); bStr = hundredthsToStr(bH); resultStr = hundredthsToStr(aH + bH);
        }
      } else if (precision === "hundredths") {
        const aH = rnd(101, 999);
        const bH = rnd(101, 999);
        const rH = aH + bH;
        aStr = hundredthsToStr(aH);
        bStr = hundredthsToStr(bH);
        resultStr = hundredthsToStr(rH);
      } else {
        // tenths
        const aT = rnd(10, 199);
        const bT = rnd(10, 199);
        const rT = aT + bT;
        aStr = tenthsToStr(aT);
        bStr = tenthsToStr(bT);
        resultStr = tenthsToStr(rT);
      }
    } else if (op === "-") {
      if (precision === "small") {
        // 0.01–10: use hundredths
        const aH = rnd(100, 999); const bH = rnd(1, aH - 1);
        aStr = hundredthsToStr(aH); bStr = hundredthsToStr(bH); resultStr = hundredthsToStr(aH - bH);
      } else if (precision === "large") {
        if (Math.random() < 0.5) {
          const aT = rnd(200, 999); const bT = rnd(100, aT - 1); // 20.0–99.9
          aStr = tenthsToStr(aT); bStr = tenthsToStr(bT); resultStr = tenthsToStr(aT - bT);
        } else {
          const aH = rnd(2000, 9999); const bH = rnd(1000, aH - 1); // 20.00–99.99
          aStr = hundredthsToStr(aH); bStr = hundredthsToStr(bH); resultStr = hundredthsToStr(aH - bH);
        }
      } else if (precision === "hundredths") {
        let aH: number, bH: number;
        do {
          aH = rnd(201, 999);
          bH = rnd(101, aH - 1);
        } while (aH <= bH);
        const rH = aH - bH;
        aStr = hundredthsToStr(aH);
        bStr = hundredthsToStr(bH);
        resultStr = hundredthsToStr(rH);
      } else {
        // tenths
        const aT = rnd(50, 999);
        const bT = rnd(10, aT - 1);
        const rT = aT - bT;
        aStr = tenthsToStr(aT);
        bStr = tenthsToStr(bT);
        resultStr = tenthsToStr(rT);
      }
    } else {
      // ×
      if (precision === "extended") {
        // decimal × decimal: aT ∈ [11,99], bT ∈ [11,99]
        const aT = rnd(11, 99);
        const bT = rnd(11, 99);
        const rH = aT * bT;
        aStr = tenthsToStr(aT);
        bStr = tenthsToStr(bT);
        resultStr = hundredthsToStr(rH);
      } else {
        // tenths: int × decimal
        const intVal = rnd(2, 12);
        const decT = rnd(11, 99);
        const rT = intVal * decT;
        aStr = tenthsToStr(decT);
        bStr = String(intVal);
        resultStr = tenthsToStr(rT);
      }
    }

    if (!missingOperand) {
      missingPos = "result";
    } else {
      missingPos = Math.random() < 0.5 ? "a" : "b";
    }

    const answer = missingPos === "a" ? aStr : missingPos === "b" ? bStr : resultStr;

    return { aStr, bStr, resultStr, missingPos, answer };
  });
}

const CLS_WRONG_ARITH = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";
const inputBaseArith = "w-16 rounded border px-1 py-1.5 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
const numCls = "w-16 text-center font-mono text-sm text-[var(--color-text-primary)]";

export function DecArithGroupExercise({
  exNum,
  op,
  missingOperand,
  timer,
  precision,
  validateCommand,
  onValidated,
  onTimeUpdate,
  hideTimerDisplay,
}: {
  exNum: number;
  op: ArithOp;
  missingOperand: boolean;
  timer?: number;
  precision: ArithPrecision;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
  onTimeUpdate?: (t: number) => void;
  hideTimerDisplay?: boolean;
}) {
  const count = timer !== undefined ? 8 : 5;
  const [questions] = useState<ArithQuestion[]>(() =>
    genArithQuestions(op, missingOperand, precision, count)
  );
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>(() => Array(count).fill(false));
  const [timeLeft, setTimeLeft] = useState<number | null>(() =>
    timer !== undefined ? timer : null
  );

  const onValidatedRef = useRef(onValidated);
  onValidatedRef.current = onValidated;
  const onTimeUpdateRef = useRef(onTimeUpdate);
  onTimeUpdateRef.current = onTimeUpdate;

  const doValidate = useCallback(() => {
    setValidated((prev: boolean) => {
      if (prev) return prev;
      const res = questions.map((q: ArithQuestion, i: number) => {
        const v = answers[i] ?? "";
        return v.trim() === q.answer || v.trim() === q.answer.replace(",", ".");
      });
      setResults(res);
      onValidatedRef.current(res.every((r: boolean) => r));
      return true;
    });
  }, [questions, answers]);

  // Timer
  useEffect(() => {
    if (timer === undefined || validated) return;
    setTimeLeft(timer);
    onTimeUpdateRef.current?.(timer);
    const id = setInterval(() => {
      setTimeLeft((prev: number | null) => {
        const next = prev === null || prev <= 1 ? 0 : prev - 1;
        onTimeUpdateRef.current?.(next);
        if (next === 0) {
          clearInterval(id);
          doValidate();
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  // External validate command
  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  // Consigne
  let consigne: string;
  if (op === "+") {
    consigne = missingOperand ? "Trouvez la valeur manquante." : "Effectuez les additions.";
  } else if (op === "-") {
    consigne = missingOperand ? "Trouvez la valeur manquante." : "Effectuez les soustractions.";
  } else {
    consigne = missingOperand ? "Trouvez le facteur manquant." : "Effectuez les multiplications.";
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {timer !== undefined && !hideTimerDisplay && (
          <span className={`rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${
            timeLeft !== null && !validated
              ? timeLeft <= 15
                ? "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400"
                : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
              : "invisible"
          }`}>
            {timeLeft !== null ? formatTime(timeLeft) : "00:00"}
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-3">
        {questions.map((q: ArithQuestion, i: number) => {
          const v = answers[i] ?? "";
          const ok = validated ? results[i] : null;
          const wrongField = ok === false;

          const inputEl = (_pos: MissingPos) => {
            if (wrongField) {
              return (
                <div className={`${inputBaseArith} ${CLS_WRONG_ARITH} flex items-center justify-center gap-0.5`}>
                  <span className="line-through text-amber-500 text-xs">{v || "—"}</span>
                  <span className="text-[var(--color-text-primary)] text-xs font-bold">{q.answer}</span>
                </div>
              );
            }
            return (
              <input
                type="text"
                value={v}
                disabled={validated}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const val = e.target.value;
                  setAnswers((prev: string[]) => {
                    const n = [...prev];
                    n[i] = val;
                    return n;
                  });
                }}
                className={`${inputBaseArith} ${
                  ok === null
                    ? "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"
                    : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/20"
                }`}
              />
            );
          };

          return (
            <div key={i} className="flex min-h-[2.25rem] items-center gap-1.5">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              {q.missingPos === "a" ? inputEl("a") : <span className={numCls}>{q.aStr}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">{op}</span>
              {q.missingPos === "b" ? inputEl("b") : <span className={numCls}>{q.bStr}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
              {q.missingPos === "result" ? inputEl("result") : <span className={numCls}>{q.resultStr}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A5.5 — DecMulColGridExercise ──────────────────────────────────────────────

interface DecMulColQ {
  aT: number;   // tenths integer for decimal operand (11..99 → 1.1..9.9)
  b: number;    // single digit integer multiplier (2..9)
  rT: number;   // product in tenths
  aD: number;   // digit at D position (always 0 for aT < 100)
  aU: number;   // digit at U position
  aDx: number;  // digit at dx position
  rD: number;   // result digit at D
  rU: number;   // result digit at U
  rDx: number;  // result digit at dx
  carryU: number; // carry from dx to U
  carryD: number; // carry from U to D
}

function genDecMulColQuestions(): DecMulColQ[] {
  return Array.from({ length: 4 }, () => {
    const aT = rnd(11, 99);
    const b = rnd(2, 9);
    const rT = aT * b;
    const aU = Math.floor(aT / 10) % 10;
    const aDx = aT % 10;
    const rD = Math.floor(rT / 100) % 10;
    const rU = Math.floor(rT / 10) % 10;
    const rDx = rT % 10;
    const carryU = Math.floor(aDx * b / 10);
    const carryD = Math.floor((aU * b + carryU) / 10);
    return { aT, b, rT, aD: 0, aU, aDx, rD, rU, rDx, carryU, carryD };
  });
}

const CLS_WRONG_GRID = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";
const DEC_COL_LABELS = ["D", "U", ",", "dx"] as const;

function DecMulColCard({
  q,
  cardIdx,
  carryInputs,
  operandInputs,
  resultInputs,
  validated,
  preFilledOperands,
  onChange,
}: {
  q: DecMulColQ;
  cardIdx: number;
  carryInputs: string[];   // [0]=D carry, [1]=U carry
  operandInputs: string[]; // [0]=aD, [1]=aU (dx not shown as input since aD is always 0), [2]=aDx, and [3]=b
  resultInputs: string[];  // [0]=rD, [1]=rU, [2]=rDx
  validated: boolean;
  preFilledOperands: boolean;
  onChange: (cardIdx: number, kind: "carry" | "operand" | "result", idx: number, val: string) => void;
}) {
  function tabNav(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const card = e.currentTarget.closest("[data-decmul-card]");
    if (!card) return;
    const inputs = Array.from(card.querySelectorAll("input:not(:disabled)")) as HTMLInputElement[];
    const idx = inputs.indexOf(e.currentTarget);
    const next = e.shiftKey ? inputs[idx - 1] : inputs[idx + 1];
    if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
  }

  // Carry cell (small, orange)
  const carryCell = (colIdx: number, expected: number) => {
    const val = carryInputs[colIdx] ?? "";
    const carryWrong = validated && parseInt(val.trim() || "0", 10) !== expected;
    if (carryWrong) {
      return (
        <div className={`h-5 w-8 rounded border flex flex-col items-center justify-center ${CLS_WRONG_GRID}`}>
          <span className="line-through text-amber-500 text-[8px] leading-none">{val || "—"}</span>
          <span className="text-[var(--color-text-primary)] text-[8px] font-bold leading-none">{expected}</span>
        </div>
      );
    }
    return (
      <input
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={val}
        disabled={validated}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const v = e.target.value.replace(/[^0-9]/g, "").slice(-1);
          onChange(cardIdx, "carry", colIdx, v);
        }}
        onKeyDown={tabNav}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className="h-5 w-8 rounded border text-center font-mono text-[10px] outline-none transition-colors bg-blue-50 dark:bg-blue-950/30 border-[var(--color-border-default)] text-orange-500 focus:border-[var(--color-accent-alg)]"
      />
    );
  };

  // Digit cell for operand (h-8 w-8)
  const operandCell = (opIdx: number, expected: number) => {
    const val = operandInputs[opIdx] ?? "";
    const opWrong = validated && parseInt(val.trim() || "0", 10) !== expected;
    if (opWrong) {
      return (
        <div className={`h-8 w-8 rounded border flex flex-col items-center justify-center ${CLS_WRONG_GRID}`}>
          <span className="line-through text-amber-500 text-[9px] leading-none">{val || "—"}</span>
          <span className="text-[var(--color-text-primary)] text-[9px] font-bold leading-none">{expected}</span>
        </div>
      );
    }
    return (
      <input
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={val}
        disabled={validated}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const v = e.target.value.replace(/[^0-9]/g, "").slice(-1);
          onChange(cardIdx, "operand", opIdx, v);
        }}
        onKeyDown={tabNav}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className="h-8 w-8 rounded border text-center font-mono text-base outline-none transition-colors bg-blue-50 dark:bg-blue-950/30 border-[var(--color-border-default)] focus:border-[var(--color-accent-alg)]"
      />
    );
  };

  // Result cell (h-8 w-8)
  const resultCell = (resIdx: number, expected: number) => {
    const val = resultInputs[resIdx] ?? "";
    const resWrong = validated && parseInt(val.trim() || "0", 10) !== expected;
    if (resWrong) {
      return (
        <div className={`h-8 w-8 rounded border flex flex-col items-center justify-center ${CLS_WRONG_GRID}`}>
          <span className="line-through text-amber-500 text-[9px] leading-none">{val || "—"}</span>
          <span className="text-[var(--color-text-primary)] text-[9px] font-bold leading-none">{expected}</span>
        </div>
      );
    }
    const ok = validated && parseInt(val.trim() || "0", 10) === expected;
    return (
      <input
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={val}
        disabled={validated}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const v = e.target.value.replace(/[^0-9]/g, "").slice(-1);
          onChange(cardIdx, "result", resIdx, v);
        }}
        onKeyDown={tabNav}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-8 w-8 rounded border text-center font-mono text-base outline-none transition-colors ${
          ok
            ? "border-[var(--color-border-default)] text-[var(--color-accent-alg)] font-bold bg-blue-50 dark:bg-blue-950/20"
            : "border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]"
        }`}
      />
    );
  };

  const Prefilled = ({ digit }: { digit: number | string }) => (
    <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
      {digit}
    </div>
  );

  return (
    <div data-decmul-card className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
      <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <td className="w-6" />
            {DEC_COL_LABELS.map((lbl, i) => (
              <th key={i} style={{ width: lbl === "," ? 24 : 32 }}
                className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">
                {lbl === "," ? "" : lbl}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Carry row: D=carryD, U=carryU, comma=empty, dx=empty */}
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R</td>
            {/* D carry */}
            <td className="text-center">{carryCell(0, q.carryD)}</td>
            {/* U carry */}
            <td className="text-center">{carryCell(1, q.carryU)}</td>
            {/* comma column — empty */}
            <td style={{ width: 24 }} />
            {/* dx — no carry */}
            <td className="text-center">
              <div className="h-5 w-8" />
            </td>
          </tr>

          {/* Operand a row: D=0(leading, hidden), U=aU, comma, dx=aDx */}
          <tr>
            <td />
            {/* D col — leading zero, always empty shown */}
            <td className="text-center">
              {preFilledOperands
                ? <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]"></div>
                : operandCell(0, q.aD)}
            </td>
            {/* U col */}
            <td className="text-center">
              {preFilledOperands
                ? <Prefilled digit={q.aU} />
                : operandCell(1, q.aU)}
            </td>
            {/* comma */}
            <td style={{ width: 24 }} className="text-center">
              <div className="flex h-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
            </td>
            {/* dx */}
            <td className="text-center">
              {preFilledOperands
                ? <Prefilled digit={q.aDx} />
                : operandCell(2, q.aDx)}
            </td>
          </tr>

          {/* Operand b row: × symbol, b in U column only */}
          <tr>
            <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">×</td>
            {/* D — empty */}
            <td className="text-center"><div className="h-8 w-8" /></td>
            {/* U — b value */}
            <td className="text-center">
              {preFilledOperands
                ? <Prefilled digit={q.b} />
                : operandCell(3, q.b)}
            </td>
            {/* comma — empty (no comma in multiplier) */}
            <td style={{ width: 24 }} />
            {/* dx — empty */}
            <td className="text-center"><div className="h-8 w-8" /></td>
          </tr>

          {/* Separator */}
          <tr>
            <td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td>
          </tr>

          {/* Result row: D=rD, U=rU, comma, dx=rDx */}
          <tr>
            <td />
            {/* D */}
            <td className="text-center">{resultCell(0, q.rD)}</td>
            {/* U */}
            <td className="text-center">{resultCell(1, q.rU)}</td>
            {/* comma */}
            <td style={{ width: 24 }} className="text-center">
              <div className="flex h-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">,</div>
            </td>
            {/* dx */}
            <td className="text-center">{resultCell(2, q.rDx)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function DecMulColGridExercise({
  exNum,
  preFilledOperands,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  preFilledOperands: boolean;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecMulColQ[]>(genDecMulColQuestions);

  // carryInputs[cardIdx][colIdx] — 0=D carry, 1=U carry
  const [carryInputs, setCarryInputs] = useState<string[][]>(() =>
    Array.from({ length: 4 }, () => ["", ""])
  );
  // operandInputs[cardIdx] — [0]=aD, [1]=aU, [2]=aDx, [3]=b
  const [operandInputs, setOperandInputs] = useState<string[][]>(() =>
    Array.from({ length: 4 }, () => ["", "", "", ""])
  );
  // resultInputs[cardIdx] — [0]=rD, [1]=rU, [2]=rDx
  const [resultInputs, setResultInputs] = useState<string[][]>(() =>
    Array.from({ length: 4 }, () => ["", "", ""])
  );
  const [validated, setValidated] = useState<boolean>(false);
  const [_results, setResults] = useState<boolean[]>([false, false, false, false]);

  const onValidatedRef = useRef(onValidated);
  onValidatedRef.current = onValidated;

  const doValidate = useCallback(() => {
    setValidated((prev: boolean) => {
      if (prev) return prev;

      const res = questions.map((q: DecMulColQ, ci: number) => {
        const carries = carryInputs[ci] ?? [];
        const operands = operandInputs[ci] ?? [];
        const results2 = resultInputs[ci] ?? [];

        // Check carries
        const carryDOk = parseInt((carries[0] ?? "").trim() || "0", 10) === q.carryD;
        const carryUOk = parseInt((carries[1] ?? "").trim() || "0", 10) === q.carryU;

        // Check result digits
        const rDOk = parseInt((results2[0] ?? "").trim() || "0", 10) === q.rD;
        const rUOk = parseInt((results2[1] ?? "").trim() || "0", 10) === q.rU;
        const rDxOk = parseInt((results2[2] ?? "").trim() || "0", 10) === q.rDx;

        if (preFilledOperands) {
          return carryDOk && carryUOk && rDOk && rUOk && rDxOk;
        } else {
          // Also check operand inputs
          const aUOk = parseInt((operands[1] ?? "").trim() || "0", 10) === q.aU;
          const aDxOk = parseInt((operands[2] ?? "").trim() || "0", 10) === q.aDx;
          const bOk = parseInt((operands[3] ?? "").trim() || "0", 10) === q.b;
          return carryDOk && carryUOk && aUOk && aDxOk && bOk && rDOk && rUOk && rDxOk;
        }
      });

      setResults(res);
      onValidatedRef.current(res.every((r: boolean) => r));
      return true;
    });
  }, [questions, carryInputs, operandInputs, resultInputs, preFilledOperands]);

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  function handleChange(
    cardIdx: number,
    kind: "carry" | "operand" | "result",
    idx: number,
    val: string
  ) {
    if (validated) return;
    if (kind === "carry") {
      setCarryInputs((prev: string[][]) => {
        const next = prev.map((row: string[]) => [...row]);
        if (next[cardIdx]) next[cardIdx]![idx] = val;
        return next;
      });
    } else if (kind === "operand") {
      setOperandInputs((prev: string[][]) => {
        const next = prev.map((row: string[]) => [...row]);
        if (next[cardIdx]) next[cardIdx]![idx] = val;
        return next;
      });
    } else {
      setResultInputs((prev: string[][]) => {
        const next = prev.map((row: string[]) => [...row]);
        if (next[cardIdx]) next[cardIdx]![idx] = val;
        return next;
      });
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Posez le calcul en colonnes et complétez.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {questions.map((q: DecMulColQ, qi: number) => (
          <DecMulColCard
            key={qi}
            q={q}
            cardIdx={qi}
            carryInputs={(carryInputs[qi] ?? []) as string[]}
            operandInputs={(operandInputs[qi] ?? []) as string[]}
            resultInputs={(resultInputs[qi] ?? []) as string[]}
            validated={validated as boolean}
            preFilledOperands={preFilledOperands}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

// ── A5.6 — Decimal Division (simple: small quotient) ─────────────────────────
function genDivSimpleItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const quotT = rnd(11, 99); // quotient 1.1–9.9 in tenths
    const divisor = rnd(2, 9);
    const dividT = quotT * divisor;
    const q1 = Math.floor(quotT / 10), q2 = quotT % 10;
    return {
      label: String(i + 1),
      question: `${tenthsToStr(dividT)} ÷ ${divisor}`,
      answer: `${q1},${q2}`,
    };
  });
}

export function DecDivSimpleExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genDivSimpleItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Division : décimal ÷ entier"
      consigne="Calculez (le quotient a 1 décimale)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.6 — Decimal Division (missing operand) ─────────────────────────────────
function genDivMissingItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const quotT = rnd(11, 99);
    const divisor = rnd(2, 9);
    const dividT = quotT * divisor;
    const q1 = Math.floor(quotT / 10), q2 = quotT % 10;
    if (Math.random() < 0.5) {
      return {
        label: String(i + 1),
        question: `? ÷ ${divisor} = ${q1},${q2}`,
        answer: tenthsToStr(dividT),
      };
    } else {
      return {
        label: String(i + 1),
        question: `${tenthsToStr(dividT)} ÷ ? = ${q1},${q2}`,
        answer: String(divisor),
      };
    }
  });
}

export function DecDivMissingExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genDivMissingItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Division : opérande manquant"
      consigne="Trouvez le nombre manquant (remplace le ?)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.6 — Decimal Division (extended: 2-decimal quotient) ───────────────────
function genDivExtItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const quotH = rnd(101, 999); // quotient 1.01–9.99 in hundredths
    const divisor = rnd(2, 9);
    const dividH = quotH * divisor;
    return {
      label: String(i + 1),
      question: `${hundredthsToStr(dividH)} ÷ ${divisor}`,
      answer: hundredthsToStr(quotH),
    };
  });
}

export function DecDivExtExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genDivExtItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Division : grand décimal ÷ entier"
      consigne="Posez le calcul en colonnes (le quotient peut avoir 2 décimales)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── Decimal column addition/subtraction (A5.4 Ex7, Ex8) ──────────────────────
// Numbers stored as hundredths (integer). Display columns: D, U, ",", dx, cx

function hToDigits(h: number): [number, number, number, number] {
  const cx = h % 10;
  const dx = Math.floor(h / 10) % 10;
  const u = Math.floor(h / 100) % 10;
  const d = Math.floor(h / 1000) % 10;
  return [d, u, dx, cx];
}

interface DecColQ {
  aH: number; bH: number; rH: number; op: "+" | "-";
}

function genDecColQs(op: "+" | "-", count: number): DecColQ[] {
  return Array.from({ length: count }, () => {
    if (op === "+") {
      const aH = rnd(100, 499); // 1.00–4.99
      const bH = rnd(100, 499);
      return { aH, bH, rH: aH + bH, op };
    } else {
      const aH = rnd(200, 999); // 2.00–9.99
      const bH = rnd(100, aH - 1);
      return { aH, bH, rH: aH - bH, op };
    }
  });
}

function DecColCard({ q, cardIdx, cellAnswers, validated, cardCorrect, onChange }: {
  q: DecColQ; cardIdx: number; cellAnswers: string[]; validated: boolean; cardCorrect: boolean;
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
}) {
  const [ad, au, adx, acx] = hToDigits(q.aH);
  const [bd, bu, bdx, bcx] = hToDigits(q.bH);
  const [rd, ru, rdx, rcx] = hToDigits(q.rH);
  const rExpected = [rd, ru, rdx, rcx];
  const labels = ["D", "U", ",", "dx", "cx"];

  function tabNav(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const card = (e.currentTarget as HTMLElement).closest("[data-dec-card]");
    if (!card) return;
    const inputs = Array.from(card.querySelectorAll("input:not(:disabled)")) as HTMLInputElement[];
    const idx = inputs.indexOf(e.currentTarget);
    const next = e.shiftKey ? inputs[idx - 1] : inputs[idx + 1];
    if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
  }

  function cell(colIdx: number, digit: number | null, isInput: boolean, inputIdx: number) {
    if (digit === null) return <td key={colIdx} className="w-8 text-center" />;
    if (!isInput) {
      return (
        <td key={colIdx} className="w-8 text-center">
          <div className="h-8 w-8 flex items-center justify-center font-mono text-sm text-[var(--color-text-primary)]">
            {digit === 0 && colIdx === 0 ? "" : digit}
          </div>
        </td>
      );
    }
    const val = cellAnswers[inputIdx] ?? "";
    const expected = rExpected[inputIdx]!;
    const ok = validated ? (val.trim() === String(expected)) : null;
    if (ok === false) {
      return (
        <td key={colIdx} className="w-8 text-center">
          <div className="h-8 w-8 rounded border border-amber-500 bg-amber-50 dark:bg-amber-950/20 flex flex-col items-center justify-center">
            <span className="line-through text-amber-500 text-[9px] leading-none">{val || "—"}</span>
            <span className="text-[var(--color-text-primary)] text-[9px] font-bold leading-none">{expected}</span>
          </div>
        </td>
      );
    }
    return (
      <td key={colIdx} className="w-8 text-center">
        <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(cardIdx, inputIdx, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          onKeyDown={tabNav}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
          className="h-8 w-8 rounded border text-center font-mono text-sm outline-none transition-colors bg-blue-50 dark:bg-blue-950/30 border-[var(--color-border-default)] focus:border-[var(--color-accent-alg)]" />
      </td>
    );
  }

  void cardCorrect;
  const opRows = [
    [ad, au, null, adx, acx], // operand a — col 2 is null for comma display
    [bd, bu, null, bdx, bcx], // operand b
  ];

  return (
    <div data-dec-card className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
      <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <td className="w-6" />
            {labels.map((l, i) => (
              <th key={i} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{l}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {opRows.map((row, ri) => (
            <tr key={ri}>
              <td className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">
                {ri === 0 ? "" : q.op}
              </td>
              {row.map((digit, ci) => {
                if (ci === 2) {
                  return (
                    <td key={ci} className="w-8 text-center">
                      <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-text-secondary)]">,</div>
                    </td>
                  );
                }
                // Adjust for the comma column offset: cols 0,1 map to d,u; cols 3,4 map to dx,cx
                const actualDigit = digit as number;
                const isLeading = ci === 0 && actualDigit === 0;
                return (
                  <td key={ci} className="w-8 text-center">
                    <div className="h-8 w-8 flex items-center justify-center font-mono text-sm text-[var(--color-text-primary)]">
                      {isLeading ? "" : actualDigit}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
          <tr><td colSpan={6}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td />
            {/* D column */}
            {cell(0, rd, true, 0)}
            {/* U column */}
            {cell(1, ru, true, 1)}
            {/* comma */}
            <td className="w-8 text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-text-secondary)]">,</div>
            </td>
            {/* dx column */}
            {cell(3, rdx, true, 2)}
            {/* cx column */}
            {cell(4, rcx, true, 3)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function DecColArithExercise({ exNum, op, validateCommand, onValidated }: {
  exNum: number; op: "+" | "-";
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<DecColQ[]>(() => genDecColQs(op, 4));
  const [answers, setAnswers] = useState<string[][]>(() => Array.from({ length: 4 }, () => Array(4).fill("")));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>(() => Array(4).fill(false));

  const doValidate = useCallback(() => {
    if (validated) return;
    const res: boolean[] = questions.map((q: DecColQ, qi: number) => {
      const [rd, ru, rdx, rcx] = hToDigits(q.rH);
      const expected = [rd, ru, rdx, rcx];
      return expected.every((exp: number, ci: number) => (answers[qi]?.[ci] ?? "").trim() === String(exp));
    });
    setResults(res);
    setValidated(true);
    onValidated(res.every((r: boolean) => r), res.filter((r: boolean) => r).length, res.length);
  }, [validated, questions, answers, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const consigne = op === "+"
    ? "Effectuez les additions en colonnes."
    : "Effectuez les soustractions en colonnes.";

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      <div className="grid grid-cols-2 gap-3">
        {questions.map((q: DecColQ, qi: number) => (
          <DecColCard key={qi} q={q} cardIdx={qi}
            cellAnswers={answers[qi]!}
            validated={validated}
            cardCorrect={results[qi] ?? false}
            onChange={(ci: number, cellIdx: number, val: string) => setAnswers((prev: string[][]) => {
              const next = prev.map((r: string[]) => [...r]);
              next[ci]![cellIdx] = val;
              return next;
            })} />
        ))}
      </div>
    </div>
  );
}

// ── Decimal expression comparison (A5.4 Ex9 — A2.1 Ex9 style) ────────────────
interface DecExprCompQ {
  laH: number; lop: "+" | "-"; lcH: number;
  raH: number; rop: "+" | "-"; rcH: number;
  answer: "<" | "=" | ">";
  lval: number; rval: number;
}

function genDecExprCompQs(count: number): DecExprCompQ[] {
  return Array.from({ length: count }, () => {
    for (let attempt = 0; attempt < 200; attempt++) {
      const lop: "+" | "-" = Math.random() < 0.6 ? "+" : "-";
      const rop: "+" | "-" = Math.random() < 0.6 ? "+" : "-";
      const laH = rnd(10, 990); // 0.1–99.0 in tenths
      const lcH = lop === "+" ? rnd(10, 990) : rnd(10, laH - 1);
      const raH = rnd(10, 990);
      const rcH = rop === "+" ? rnd(10, 990) : rnd(10, raH - 1);
      const lval = lop === "+" ? laH + lcH : laH - lcH;
      const rval = rop === "+" ? raH + rcH : raH - rcH;
      if (lval < 0 || rval < 0) continue;
      const answer: "<" | "=" | ">" = lval < rval ? "<" : lval > rval ? ">" : "=";
      return { laH, lop, lcH, raH, rop, rcH, answer, lval, rval };
    }
    return { laH: 15, lop: "+", lcH: 25, raH: 50, rop: "-", rcH: 10, answer: "<", lval: 40, rval: 40 };
  });
}

function tenthsToFrStr(t: number): string {
  if (t % 10 === 0) return String(t / 10);
  return `${Math.floor(t / 10)},${t % 10}`;
}

export function DecExprCompExercise({ exNum, validateCommand, onValidated }: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<DecExprCompQ[]>(() => genDecExprCompQs(5));
  const [selected, setSelected] = useState<(string | null)[]>(() => Array(5).fill(null));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(5).fill("idle"));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts: ("correct" | "wrong")[] = questions.map((q: DecExprCompQ, i: number) =>
      selected[i] === q.answer ? "correct" : "wrong"
    );
    setStatuses(sts);
    onValidated(sts.every((s: string) => s === "correct"), sts.filter((s: string) => s === "correct").length, sts.length);
  }, [validated, questions, selected, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Comparez les expressions. Choisissez &lt;, = ou &gt;.</p>
      </div>
      <div className="space-y-4">
        {questions.map((q: DecExprCompQ, i: number) => {
          const st = statuses[i]!;
          const sel = selected[i];
          const btnCls = (sym: "<" | "=" | ">") => {
            const isSelected = sel === sym;
            const isCorrect = sym === q.answer;
            if (!validated) {
              return `w-10 py-2 text-sm font-bold rounded-xl border transition-colors ${
                isSelected
                  ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)] border-[var(--color-accent-alg)]/30"
                  : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              }`;
            }
            if (st === "wrong" && (isSelected || isCorrect)) {
              return `w-10 py-2 text-sm font-bold rounded-xl border transition-colors ${CLS_WRONG}`;
            }
            return `w-10 py-2 text-sm font-bold rounded-xl border transition-colors ${
              isSelected
                ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)] border-[var(--color-accent-alg)]/30"
                : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-40"
            }`;
          };
          return (
            <div key={i} className="flex items-center gap-2 flex-wrap">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono text-sm text-[var(--color-text-primary)]">
                {tenthsToFrStr(q.laH)} {q.lop} {tenthsToFrStr(q.lcH)}
              </span>
              <div className="flex gap-1.5">
                {(["<", "=", ">"] as const).map(sym => (
                  <button key={sym} type="button"
                    onClick={() => { if (!validated) setSelected((prev: (string | null)[]) => { const n = [...prev]; n[i] = sym; return n; }); }}
                    className={btnCls(sym)}>
                    {sym}
                  </button>
                ))}
              </div>
              <span className="font-mono text-sm text-[var(--color-text-primary)]">
                {tenthsToFrStr(q.raH)} {q.rop} {tenthsToFrStr(q.rcH)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
