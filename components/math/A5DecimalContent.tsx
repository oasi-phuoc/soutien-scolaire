"use client";

import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { answerMatches } from "@/lib/curriculum/content/math/math-a1-types";
import { useEvalReveal } from "@/lib/eval-reveal-context";

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
    <span className="inline-flex flex-col items-center rounded-none border-0 border-b-2 border-amber-500 px-0 py-1 min-w-[3.5rem] justify-center">
      <span className="text-xs text-[var(--color-text-primary)] tabular-nums leading-tight">{wrong || "—"}</span>
      <span className="text-xs font-bold text-amber-600 tabular-nums leading-tight">{correct}</span>
    </span>
  );
}

const inputCls = (_wrong: boolean) =>
  `w-20 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 px-0 py-1 text-sm text-center outline-none transition-colors focus:border-[var(--color-accent-alg)]`;

const MATH_TEXT_INPUT_BASE = "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 text-center font-mono outline-none transition-colors focus:border-[var(--color-accent-alg)] disabled:opacity-70";
const CELL_W = 32;

// ── Generic decimal exercise (list of N questions) ───────────────────────────
interface DecQuestion {
  label: string;
  question: string;
  answer: string; // French comma form
}

function DecExercise({
  exNum,
  title: _title,
  consigne,
  questions,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  title?: string;
  consigne: string;
  questions: DecQuestion[];
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [vals, setVals] = useState<string[]>(() => Array(questions.length).fill(""));
  const [statuses, setStatuses] = useState<("idle" | "correct" | "wrong")[]>(() =>
    Array(questions.length).fill("idle")
  );
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sts = questions.map((q, i) =>
      answerMatches(vals[i] ?? "", acceptable(q.answer)) ? "correct" : "wrong"
    ) as ("correct" | "wrong")[];
    setStatuses(sts);
    const correctCount = sts.filter(s => s === "correct").length;
    onValidated(sts.every(s => s === "correct"), correctCount, sts.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, questions, vals]);

  useEffect(() => {
    if (validateCommand > 0) doValidate();
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">
          Exercice {exNum}
        </h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      </div>
      <div className="grid items-center gap-x-3 gap-y-2" style={{ gridTemplateColumns: "1.5rem max-content auto" }}>
        {questions.map((q, i) => {
          const isWrong = revealCorrection && statuses[i] === "wrong";
          return (
            <Fragment key={i}>
              <span className="text-sm font-bold text-[var(--color-accent-alg)] justify-self-start">
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
                  inputMode="decimal"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!validated)
                      setVals((prev: string[]) => {
                        const n = [...prev];
                        n[i] = e.target.value.replace(/[^0-9,.]/g, "");
                        return n;
                      });
                  }}
                  className={inputCls(isWrong)}
                  disabled={validated}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ── A5.4 / A5.5 — DecArithGroupExercise ───────────────────────────────────────

type ArithOp = "+" | "-" | "×";
// "tenths_small" = 0.1–9.9 (1 decimal only); "small" = 0.01–10 (hundredths 1–999); "large" = 10–100 (tenths 100–999 or hundredths 1000–9999, random)
type ArithPrecision = "tenths" | "hundredths" | "extended" | "tenths_small" | "small" | "large" | "special_mul";
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

function thousandthsToStr(t: number): string {
  if (t % 1000 === 0) return String(t / 1000);
  const dec = String(t % 1000).padStart(3, "0").replace(/0+$/, "");
  return `${Math.floor(t / 1000)},${dec}`;
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
      if (precision === "tenths_small") {
        // 0.1–9.9: 1 decimal only, sum ≤ 19.8
        const aT = rnd(1, 49); const bT = rnd(1, 49);
        aStr = tenthsToStr(aT); bStr = tenthsToStr(bT); resultStr = tenthsToStr(aT + bT);
      } else if (precision === "small") {
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
      if (precision === "tenths_small") {
        // 0.1–9.9: 1 decimal only
        const aT = rnd(10, 99); const bT = rnd(1, aT - 1);
        aStr = tenthsToStr(aT); bStr = tenthsToStr(bT); resultStr = tenthsToStr(aT - bT);
      } else if (precision === "small") {
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
      if (precision === "special_mul") {
        const FACTORS = [
          { str: "0,5",   idx: 0 },
          { str: "0,25",  idx: 1 },
          { str: "0,2",   idx: 2 },
          { str: "0,125", idx: 3 },
          { str: "0,1",   idx: 4 },
          { str: "0,01",  idx: 5 },
          { str: "0,001", idx: 6 },
        ];
        const f = FACTORS[rnd(0, 6)]!;
        let a: number;
        let resultStr2: string;
        switch (f.idx) {
          case 0: a = rnd(1, 40) * 2;  resultStr2 = String(a / 2); break;          // × 0,5
          case 1: a = rnd(1, 20) * 4;  resultStr2 = String(a / 4); break;          // × 0,25
          case 2: a = rnd(1, 20) * 5;  resultStr2 = String(a / 5); break;          // × 0,2
          case 3: a = rnd(1, 12) * 8;  resultStr2 = String(a / 8); break;          // × 0,125
          case 4: a = rnd(1, 100);     resultStr2 = tenthsToStr(a); break;         // × 0,1
          case 5: a = rnd(1, 100);     resultStr2 = hundredthsToStr(a); break;     // × 0,01
          default: a = rnd(1, 100);   resultStr2 = thousandthsToStr(a); break;     // × 0,001
        }
        aStr = String(a); bStr = f.str; resultStr = resultStr2;
        if (!missingOperand) {
          missingPos = "result";
        } else {
          missingPos = Math.random() < 0.5 ? "a" : "b";
        }
        const answer2 = missingPos === "a" ? aStr : missingPos === "b" ? bStr : resultStr;
        return { aStr, bStr, resultStr, missingPos, answer: answer2 };
      } else if (precision === "extended") {
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

const inputBaseArith = "w-16 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 px-0 pb-1.5 text-center font-mono text-sm outline-none transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
const numCls = "w-16 text-center font-mono text-sm text-[var(--color-text-primary)]";

export function DecArithGroupExercise({
  exNum,
  op,
  missingOperand,
  timer,
  precision,
  mixed,
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
  mixed?: boolean;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
  onTimeUpdate?: (t: number) => void;
  hideTimerDisplay?: boolean;
}) {
  const count = mixed ? 4 : timer !== undefined ? 8 : 5;
  const [questions] = useState<ArithQuestion[]>(() => {
    if (mixed) {
      return [...genArithQuestions("+", false, precision, 2),
               ...genArithQuestions("-", false, precision, 2)];
    }
    return genArithQuestions(op, missingOperand, precision, count);
  });
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>(() => Array(count).fill(false));
  const [timeLeft, setTimeLeft] = useState<number | null>(() =>
    timer !== undefined ? timer : null
  );
  const revealCorrection = useEvalReveal();

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
      const correctCount = res.filter((r: boolean) => r).length;
      onValidatedRef.current(res.every((r: boolean) => r), correctCount, res.length);
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
                ? "bg-red-100 text-red-600"
                : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
              : "invisible"
          }`}>
            {timeLeft !== null ? formatTime(timeLeft) : "00:00"}
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      <div className="space-y-3">
        {questions.map((q: ArithQuestion, i: number) => {
          const v = answers[i] ?? "";
          const ok = validated && revealCorrection ? results[i] : null;
          const wrongField = ok === false;

          const inputEl = (_pos: MissingPos) => {
            if (wrongField) {
              return (
                <div className="w-16 h-8 rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center">
                  <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{v || "—"}</span>
                  <span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span>
                </div>
              );
            }
            return (
              <input
                type="text"
                inputMode="decimal"
                value={v}
                disabled={validated}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const val = e.target.value.replace(/[^0-9,.\-]/g, "");
                  setAnswers((prev: string[]) => {
                    const n = [...prev];
                    n[i] = val;
                    return n;
                  });
                }}
                className={`${inputBaseArith} focus:border-[var(--color-accent-alg)]`}
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

const DEC_COL_LABELS = ["D", "U", ",", "dx"] as const;

function DecMulColCard({
  q,
  cardIdx,
  carryInputs,
  operandInputs,
  resultInputs,
  validated,
  preFilledOperands,
  revealCorrection,
  onChange,
}: {
  q: DecMulColQ;
  cardIdx: number;
  carryInputs: string[];   // [0]=D carry, [1]=U carry
  operandInputs: string[]; // [0]=aD, [1]=aU (dx not shown as input since aD is always 0), [2]=aDx, and [3]=b
  resultInputs: string[];  // [0]=rD, [1]=rU, [2]=rDx
  validated: boolean;
  preFilledOperands: boolean;
  revealCorrection: boolean;
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
    const carryWrong = validated && revealCorrection && parseInt(val.trim() || "0", 10) !== expected;
    if (carryWrong) {
      return (
        <div className={"h-8 w-8 rounded border border-amber-400 flex flex-col items-center justify-center"}>
          <span className="text-[8px] text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
          <span className="text-[8px] font-bold text-amber-600 leading-none">{expected}</span>
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
        className="h-8 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 text-center font-mono text-xs outline-none transition-colors text-orange-500 focus:border-[var(--color-accent-alg)]"
      />
    );
  };

  // Digit cell for operand (h-8 w-8)
  const operandCell = (opIdx: number, expected: number) => {
    const val = operandInputs[opIdx] ?? "";
    const opWrong = validated && revealCorrection && parseInt(val.trim() || "0", 10) !== expected;
    if (opWrong) {
      return (
        <div className={"h-8 w-8 rounded-none border border-amber-400 flex flex-col items-center justify-center"}>
          <span className="text-[9px] text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
          <span className="text-[9px] font-bold text-amber-600 leading-none">{expected}</span>
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
        className="h-8 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 text-center font-mono text-base outline-none transition-colors focus:border-[var(--color-accent-alg)]"
      />
    );
  };

  // Result cell (h-8 w-8)
  const resultCell = (resIdx: number, expected: number) => {
    const val = resultInputs[resIdx] ?? "";
    const resWrong = validated && revealCorrection && parseInt(val.trim() || "0", 10) !== expected;
    if (resWrong) {
      return (
        <div className={"h-8 w-8 rounded-none border border-amber-400 flex flex-col items-center justify-center"}>
          <span className="text-[9px] text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
          <span className="text-[9px] font-bold text-amber-600 leading-none">{expected}</span>
        </div>
      );
    }
    const ok = validated && revealCorrection && parseInt(val.trim() || "0", 10) === expected;
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
        className={`h-8 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 text-center font-mono text-base outline-none transition-colors ${
          ok
            ? "text-[var(--color-accent-alg)] font-bold"
            : "focus:border-[var(--color-accent-alg)]"
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
      {!preFilledOperands && (
        <p className="mb-2 text-center text-xs text-[var(--color-text-secondary)]">
          {q.aU},{q.aDx} × {q.b}
        </p>
      )}
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
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
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
  const revealCorrection = useEvalReveal();

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
      const correctCount = res.filter((r: boolean) => r).length;
      onValidatedRef.current(res.every((r: boolean) => r), correctCount, res.length);
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
            revealCorrection={revealCorrection}
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

function computeDecCarries(q: DecColQ): (number | null)[] {
  const [ac, ad, au, adx, acx] = hToDigits(q.aH);
  const [bc, bd, bu, bdx, bcx] = hToDigits(q.bH);
  const aD = [ac, ad, au, adx, acx];
  const bD = [bc, bd, bu, bdx, bcx];
  const row: (number | null)[] = [null, null, null, null, null];
  if (q.op === "+") {
    let c = 0;
    for (let i = 4; i >= 0; i--) {
      const s = aD[i]! + bD[i]! + c;
      c = Math.floor(s / 10);
      if (i > 0 && c > 0) row[i - 1] = c;
    }
  } else {
    let borrow = 0;
    for (let i = 4; i >= 0; i--) {
      const d = aD[i]! - bD[i]! - borrow;
      if (d < 0) {
        borrow = 1;
        if (i > 0) row[i - 1] = aD[i - 1]! > 0 ? aD[i - 1]! - 1 : 9;
      } else {
        borrow = 0;
      }
    }
  }
  return row;
}

// ── Decimal column addition/subtraction (A5.4 Ex7, Ex8) ──────────────────────
// Numbers stored as hundredths (integer). Display columns: D, U, ",", dx, cx

function hToDigits(h: number): [number, number, number, number, number] {
  const cx = h % 10;
  const dx = Math.floor(h / 10) % 10;
  const u  = Math.floor(h / 100) % 10;
  const d  = Math.floor(h / 1000) % 10;
  const c  = Math.floor(h / 10000) % 10;
  return [c, d, u, dx, cx];
}

interface DecColQ {
  aH: number; bH: number; rH: number; op: "+" | "-";
  is2Dec: boolean;
}

function genDecColQs(op: "+" | "-", count: number): DecColQ[] {
  return Array.from({ length: count }, () => {
    const is2Dec = Math.random() < 0.5;
    if (op === "+") {
      // Integer parts 100–499 so sum ≤ 999
      const aInt = rnd(100, 499); const bInt = rnd(100, 499);
      const adx = rnd(1, 9); const acx = is2Dec ? rnd(1, 9) : 0;
      const bdx = rnd(1, 9); const bcx = is2Dec ? rnd(1, 9) : 0;
      const aH = aInt * 100 + adx * 10 + acx;
      const bH = bInt * 100 + bdx * 10 + bcx;
      return { aH, bH, rH: aH + bH, op, is2Dec };
    } else {
      // Integer parts 200–999 (a) and 100–aInt-1 (b) so result ≥ 100
      const aInt = rnd(200, 999); const bInt = rnd(100, aInt - 1);
      const adx = rnd(1, 9); const acx = is2Dec ? rnd(1, 9) : 0;
      const bdx = rnd(1, 9); const bcx = is2Dec ? rnd(1, 9) : 0;
      const aH = aInt * 100 + adx * 10 + acx;
      const bH = bInt * 100 + bdx * 10 + bcx;
      return { aH, bH, rH: aH - bH, op, is2Dec };
    }
  });
}

function DecColCard({ q, cardIdx, cellAnswers, validated, cardCorrect, revealCorrection, onChange }: {
  q: DecColQ; cardIdx: number; cellAnswers: string[]; validated: boolean; cardCorrect: boolean;
  revealCorrection: boolean;
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
}) {
  const [ac, ad, au, adx, acx] = hToDigits(q.aH);
  const [bc, bd, bu, bdx, bcx] = hToDigits(q.bH);
  const [rc, rd, ru, rdx, rcx] = hToDigits(q.rH);
  const rExpected = [rc, rd, ru, rdx, rcx];
  const carryRow = computeDecCarries(q);
  const labels = ["C", "D", "U", ",", "dx", "cx"];

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

  function carryInputCell(carrySlot: number) {
    const carryIdx = 5 + carrySlot;
    const expectedCarry = carryRow[carrySlot] ?? null;
    const val = cellAnswers[carryIdx] ?? "";
    const carryWrong = validated && revealCorrection && expectedCarry !== null && val.trim() !== String(expectedCarry);
    if (carryWrong) {
      return (
        <td key={carrySlot} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
          <div className="h-5 w-8 border border-amber-400 flex flex-col items-center justify-center">
            <span className="text-[8px] text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
            <span className="text-[8px] font-bold text-amber-600 leading-none">{expectedCarry}</span>
          </div>
        </td>
      );
    }
    return (
      <td key={carrySlot} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
        <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(cardIdx, carryIdx, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          onKeyDown={tabNav}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
          className={`h-5 w-8 px-0 text-[10px] text-orange-500 ${MATH_TEXT_INPUT_BASE}`} />
      </td>
    );
  }

  function cell(colIdx: number, digit: number | null, isInput: boolean, inputIdx: number) {
    if (digit === null) return <td key={colIdx} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center" />;
    if (!isInput) {
      return (
        <td key={colIdx} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
          <div className="h-8 w-8 flex items-center justify-center font-mono text-sm text-[var(--color-text-primary)]">
            {digit === 0 && colIdx === 0 ? "" : digit}
          </div>
        </td>
      );
    }
    const val = cellAnswers[inputIdx] ?? "";
    const expected = rExpected[inputIdx]!;
    const ok = validated && revealCorrection ? (val.trim() === String(expected)) : null;
    if (ok === false) {
      return (
        <td key={colIdx} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
          <div className="h-8 w-8 border border-amber-400 flex flex-col items-center justify-center">
            <span className="text-[9px] text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
            <span className="text-[9px] font-bold text-amber-600 leading-none">{expected}</span>
          </div>
        </td>
      );
    }
    return (
      <td key={colIdx} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
        <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(cardIdx, inputIdx, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          onKeyDown={tabNav}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
          className={`h-8 w-8 px-0 text-sm ${MATH_TEXT_INPUT_BASE}`} />
      </td>
    );
  }

  void cardCorrect;
  const opRows = [
    [ac, ad, au, null, adx, q.is2Dec ? acx : null], // operand a — col 3 is null for comma; cx null when 1-decimal
    [bc, bd, bu, null, bdx, q.is2Dec ? bcx : null], // operand b
  ];

  return (
    <div data-dec-card className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
      <table className="mx-auto border-collapse table-fixed">
        <thead>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {labels.map((l, i) => (
              <th key={i} style={{ width: CELL_W, padding: 0 }} className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{l}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Carry row (R) */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R</td>
            {carryInputCell(0)}
            {carryInputCell(1)}
            {carryInputCell(2)}
            <td style={{ width: CELL_W, padding: 2 }} />
            {carryInputCell(3)}
            {q.is2Dec ? carryInputCell(4) : <td style={{ width: CELL_W, padding: 2 }} />}
          </tr>
          {opRows.map((row, ri) => (
            <tr key={ri}>
              <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">
                {ri === 0 ? "" : q.op}
              </td>
              {row.map((digit, ci) => {
                if (ci === 3) {
                  return (
                    <td key={ci} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                      <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-text-secondary)]">,</div>
                    </td>
                  );
                }
                const actualDigit = digit as number;
                const isLeading = (ci === 0 && actualDigit === 0) || (ci === 1 && actualDigit === 0 && (row[0] as number) === 0);
                return (
                  <td key={ci} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                    <div className="h-8 w-8 flex items-center justify-center font-mono text-sm text-[var(--color-text-primary)]">
                      {isLeading ? "" : actualDigit}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
          <tr><td colSpan={7}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {/* C column */}
            {cell(0, rc, true, 0)}
            {/* D column */}
            {cell(1, rd, true, 1)}
            {/* U column */}
            {cell(2, ru, true, 2)}
            {/* comma */}
            <td style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
              <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-text-secondary)]">,</div>
            </td>
            {/* dx column */}
            {cell(4, rdx, true, 3)}
            {/* cx column */}
            {q.is2Dec ? cell(5, rcx, true, 4) : <td key={5} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center" />}
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
  const [questions] = useState<DecColQ[]>(() => genDecColQs(op, 2));
  const [answers, setAnswers] = useState<string[][]>(() => Array.from({ length: 2 }, () => Array(10).fill("")));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>(() => Array(2).fill(false));
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    const res: boolean[] = questions.map((q: DecColQ, qi: number) => {
      const [rc, rd, ru, rdx, rcx] = hToDigits(q.rH);
      const expected = q.is2Dec ? [rc, rd, ru, rdx, rcx] : [rc, rd, ru, rdx];
      const resultOk = expected.every((exp: number, ci: number) => (answers[qi]?.[ci] ?? "").trim() === String(exp));
      if (!resultOk) return false;
      const carryRow = computeDecCarries(q);
      return carryRow.every((exp: number | null, ci: number) => {
        if (exp === null) return true;
        return (answers[qi]?.[5 + ci] ?? "").trim() === String(exp);
      });
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
      <div className="grid grid-cols-1 gap-4">
        {questions.map((q: DecColQ, qi: number) => (
          <DecColCard key={qi} q={q} cardIdx={qi}
            cellAnswers={answers[qi]!}
            validated={validated}
            cardCorrect={results[qi] ?? false}
            revealCorrection={revealCorrection}
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

// ── Decimal column — full input (A5.4 Ex9) ───────────────────────────────────

function DecColCardFull({ q, cardIdx, cellAnswers, validated, revealCorrection, onChange }: {
  q: DecColQ; cardIdx: number; cellAnswers: string[]; validated: boolean;
  revealCorrection: boolean;
  onChange: (cardIdx: number, cellIdx: number, val: string) => void;
}) {
  const [ac, ad, au, adx, acx] = hToDigits(q.aH);
  const [bc, bd, bu, bdx, bcx] = hToDigits(q.bH);
  const [rc, rd, ru, rdx, rcx] = hToDigits(q.rH);
  const aDigits = [ac, ad, au, adx, acx];
  const bDigits = [bc, bd, bu, bdx, bcx];
  const rDigits = [rc, rd, ru, rdx, rcx];
  const firstNzA = aDigits.findIndex(d => d !== 0);
  const firstNzB = bDigits.findIndex(d => d !== 0);
  const firstNzR = rDigits.findIndex(d => d !== 0);
  const labels = ["C", "D", "U", ",", "dx", "cx"];

  function tabNav(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const card = (e.currentTarget as HTMLElement).closest("[data-dec-card-full]");
    if (!card) return;
    const inputs = Array.from(card.querySelectorAll("input:not(:disabled)")) as HTMLInputElement[];
    const idx = inputs.indexOf(e.currentTarget);
    const next = e.shiftKey ? inputs[idx - 1] : inputs[idx + 1];
    if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
  }

  function inputCell(inputIdx: number, expected: number, isLeading: boolean) {
    const val = cellAnswers[inputIdx] ?? "";
    const ok = validated && revealCorrection
      ? (val.trim() === String(expected) || (isLeading && expected === 0 && (val.trim() === "" || val.trim() === "0")))
      : null;
    if (ok === false) {
      return (
        <td key={inputIdx} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
          <div className="h-8 w-8 border border-amber-400 flex flex-col items-center justify-center">
            <span className="text-[9px] text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
            <span className="text-[9px] font-bold text-amber-600 leading-none">{expected}</span>
          </div>
        </td>
      );
    }
    return (
      <td key={inputIdx} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
        <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(cardIdx, inputIdx, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          onKeyDown={tabNav}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
          className={`h-8 w-8 px-0 text-sm ${MATH_TEXT_INPUT_BASE}`} />
      </td>
    );
  }

  const commaCell = (key: string) => (
    <td key={key} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
      <div className="h-8 w-8 flex items-center justify-center font-mono text-base font-bold text-[var(--color-text-secondary)]">,</div>
    </td>
  );

  function carryCell(carryIdx: number) {
    const val = cellAnswers[15 + carryIdx] ?? "";
    return (
      <td key={carryIdx} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
        <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(cardIdx, 15 + carryIdx, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
          onKeyDown={tabNav}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
          className={`h-5 w-8 px-0 text-[10px] text-orange-500 ${MATH_TEXT_INPUT_BASE}`} />
      </td>
    );
  }

  return (
    <div data-dec-card-full className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
      <p className="mb-2 text-center text-xs text-[var(--color-text-secondary)]">
        {hundredthsToStr(q.aH)} {q.op} {hundredthsToStr(q.bH)}
      </p>
      <table className="mx-auto border-collapse table-fixed">
        <thead>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {labels.map((l, i) => (
              <th key={i} style={{ width: CELL_W, padding: 0 }} className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{l}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Carry row */}
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R</td>
            {carryCell(0)}{carryCell(1)}{carryCell(2)}
            <td style={{ width: CELL_W, padding: 2 }} />
            {carryCell(3)}{carryCell(4)}
          </tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {inputCell(0, ac, 0 < firstNzA)}
            {inputCell(1, ad, 1 < firstNzA)}
            {inputCell(2, au, 2 < firstNzA)}
            {commaCell("a-comma")}
            {inputCell(3, adx, false)}
            {inputCell(4, acx, false)}
          </tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">{q.op}</td>
            {inputCell(5, bc, 0 < firstNzB)}
            {inputCell(6, bd, 1 < firstNzB)}
            {inputCell(7, bu, 2 < firstNzB)}
            {commaCell("b-comma")}
            {inputCell(8, bdx, false)}
            {inputCell(9, bcx, false)}
          </tr>
          <tr><td colSpan={7}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {inputCell(10, rc, 0 < firstNzR)}
            {inputCell(11, rd, 1 < firstNzR)}
            {inputCell(12, ru, 2 < firstNzR)}
            {commaCell("r-comma")}
            {inputCell(13, rdx, false)}
            {inputCell(14, rcx, false)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function DecColArithFullExercise({ exNum, validateCommand, onValidated }: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<DecColQ[]>(() => {
    const [q1] = genDecColQs("+", 1);
    const [q2] = genDecColQs("-", 1);
    return [q1!, q2!];
  });
  const [answers, setAnswers] = useState<string[][]>(() => Array.from({ length: 2 }, () => Array(20).fill("")));
  const [validated, setValidated] = useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;
    const res: boolean[] = questions.map((q: DecColQ, qi: number) => {
      const [ac, ad, au, adx, acx] = hToDigits(q.aH);
      const [bc, bd, bu, bdx, bcx] = hToDigits(q.bH);
      const [rc, rd, ru, rdx, rcx] = hToDigits(q.rH);
      const aDigits = [ac, ad, au, adx, acx];
      const bDigits = [bc, bd, bu, bdx, bcx];
      const rDigits = [rc, rd, ru, rdx, rcx];
      const firstNzA = aDigits.findIndex(d => d !== 0);
      const firstNzB = bDigits.findIndex(d => d !== 0);
      const firstNzR = rDigits.findIndex(d => d !== 0);
      const expected = [...aDigits, ...bDigits, ...rDigits];
      const firstNzs = [firstNzA, firstNzB, firstNzR];
      return expected.every((exp: number, ci: number) => {
        const val = (answers[qi]?.[ci] ?? "").trim();
        if (val === String(exp)) return true;
        const row = Math.floor(ci / 5);
        const posInRow = ci % 5;
        const fn = firstNzs[row]!;
        return exp === 0 && posInRow < fn && (val === "" || val === "0");
      });
    });
    setValidated(true);
    onValidated(res.every((r: boolean) => r), res.filter((r: boolean) => r).length, res.length);
  }, [validated, questions, answers, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Posez et effectuez les calculs en colonnes (tous les chiffres sont à saisir).</p>
      <div className="grid grid-cols-1 gap-4">
        {questions.map((q: DecColQ, qi: number) => (
          <DecColCardFull key={qi} q={q} cardIdx={qi}
            cellAnswers={answers[qi]!}
            validated={validated}
            revealCorrection={revealCorrection}
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

// ── Decimal expression comparison (A5.4 Ex10 — A2.1 Ex9 style) ───────────────
interface DecExprCompQ {
  laH: number; lop: "+" | "-"; lcH: number;
  raH: number; rop: "+" | "-"; rcH: number;
  answer: "<" | "=" | ">";
  lval: number; rval: number;
}

function genDecExprCompQs(count: number): DecExprCompQ[] {
  // rndDec: 0.1–9.9 in tenths, always with non-zero decimal digit (never multiple of 10)
  const rndDec = (): number =>
    Math.floor(Math.random() * 10) * 10 + Math.floor(Math.random() * 9) + 1;
  return Array.from({ length: count }, () => {
    for (let attempt = 0; attempt < 200; attempt++) {
      const lop: "+" | "-" = Math.random() < 0.6 ? "+" : "-";
      const rop: "+" | "-" = Math.random() < 0.6 ? "+" : "-";
      const laH = rndDec();
      const raH = rndDec();
      let lcH = rndDec();
      let rcH = rndDec();
      if (lop === "-") {
        if (laH <= 1) continue;
        let tries = 0;
        while (lcH >= laH && tries < 20) { lcH = rndDec(); tries++; }
        if (lcH >= laH) continue;
      }
      if (rop === "-") {
        if (raH <= 1) continue;
        let tries = 0;
        while (rcH >= raH && tries < 20) { rcH = rndDec(); tries++; }
        if (rcH >= raH) continue;
      }
      const lval = lop === "+" ? laH + lcH : laH - lcH;
      const rval = rop === "+" ? raH + rcH : raH - rcH;
      if (lval < 0 || rval < 0) continue;
      const answer: "<" | "=" | ">" = lval < rval ? "<" : lval > rval ? ">" : "=";
      return { laH, lop, lcH, raH, rop, rcH, answer, lval, rval };
    }
    return { laH: 15, lop: "+", lcH: 23, raH: 47, rop: "-", rcH: 16, answer: "<", lval: 38, rval: 31 };
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
  const revealCorrection = useEvalReveal();

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

  const CLS_WRONG = "rounded-none border-0 border-b-2 border-amber-500";

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Comparez les expressions. Choisissez &lt;, = ou &gt;.</p>
      </div>
      <div className="grid items-center gap-y-4" style={{ gridTemplateColumns: "1.5rem 1fr auto 1fr" }}>
        {questions.map((q: DecExprCompQ, i: number) => {
          const st = revealCorrection ? statuses[i]! : "idle";
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
            <React.Fragment key={i}>
              <span className="text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="text-right font-mono text-sm text-[var(--color-text-primary)] pr-2">
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
              <span className="font-mono text-sm text-[var(--color-text-primary)] pl-2">
                {tenthsToFrStr(q.raH)} {q.rop} {tenthsToFrStr(q.rcH)}
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ── Decimal × 2-digit column multiplication (A5.5 Ex7) ────────────────────────
interface DecMul2Q {
  aStr: string;
  bStr: string;
  aInt: number;
  bInt: number;
  totalDecimals: number;
  partial1: number;
  partial2: number;
  intResult: number;
  resultStr: string;
  carries1: (number | null)[];
  carries2: (number | null)[];
}

function formatDecResult(intResult: number, decimals: number): string {
  const s = String(intResult);
  if (decimals <= 0) return s;
  const padded = s.padStart(decimals + 1, "0");
  const intPart = padded.slice(0, padded.length - decimals) || "0";
  const decPart = padded.slice(padded.length - decimals).replace(/0+$/, "");
  return decPart ? `${intPart},${decPart}` : intPart;
}

function computeCarries5Dec(a: number, bDigit: number): (number | null)[] {
  const ad = [
    Math.floor(a / 10000) % 10,
    Math.floor(a / 1000) % 10,
    Math.floor(a / 100) % 10,
    Math.floor(a / 10) % 10,
    a % 10,
  ];
  const row: (number | null)[] = [null, null, null, null, null];
  let c = 0;
  for (let i = 4; i >= 0; i--) {
    const prod = ad[i]! * bDigit + c;
    c = Math.floor(prod / 10);
    if (i > 0 && c > 0) row[i - 1] = c;
  }
  return row;
}

function genDecMul2Questions(): DecMul2Q[] {
  return Array.from({ length: 2 }, () => {
    const aDecimals = Math.random() < 0.5 ? 1 : 2;
    const bDecimals = 1;
    const totalDecimals = aDecimals + bDecimals;
    let bInt: number;
    do { bInt = rnd(11, 39); } while (bInt % 10 === 0);
    const aInt = rnd(100, 499);
    const bUnits = bInt % 10;
    const bTens = Math.floor(bInt / 10);
    const partial1 = aInt * bUnits;
    const partial2 = aInt * bTens;
    const intResult = aInt * bInt;
    const resultStr = formatDecResult(intResult, totalDecimals);
    const aFormatted = formatDecResult(aInt, aDecimals);
    const bFormatted = formatDecResult(bInt, bDecimals);
    return {
      aStr: aFormatted,
      bStr: bFormatted,
      aInt,
      bInt,
      totalDecimals,
      partial1,
      partial2,
      intResult,
      resultStr,
      carries1: computeCarries5Dec(aInt, bUnits),
      carries2: computeCarries5Dec(aInt, bTens),
    };
  });
}

function DecMul2ColCard({ q, cardIdx, carryInputs, cellAnswers, decResult, validated, revealCorrection,
  onCarryChange, onCellChange, onDecResultChange,
}: {
  q: DecMul2Q; cardIdx: number; carryInputs: string[]; cellAnswers: string[];
  decResult: string; validated: boolean; revealCorrection: boolean;
  onCarryChange: (ci: number, idx: number, val: string) => void;
  onCellChange: (ci: number, idx: number, val: string) => void;
  onDecResultChange: (ci: number, val: string) => void;
}) {
  function getD5(n: number): number[] {
    return [
      Math.floor(n / 10000) % 10,
      Math.floor(n / 1000) % 10,
      Math.floor(n / 100) % 10,
      Math.floor(n / 10) % 10,
      n % 10,
    ];
  }
  const ad = getD5(q.aInt), bd = getD5(q.bInt);
  const p1d = getD5(q.partial1), p2d = getD5(q.partial2), rd = getD5(q.intResult);
  const firstNzA = ad.findIndex(d => d !== 0);
  const firstNzP1 = p1d.findIndex(d => d !== 0);
  const firstNzR = rd.findIndex(d => d !== 0);
  const firstNzP2s = [0,1,2,3].findIndex(c => p2d[c+1] !== 0);
  const numCols = q.intResult > 9999 ? 5 : 4;
  const colStart = 5 - numCols;
  const visibleCols = Array.from({ length: numCols }, (_, i) => colStart + i);
  const COL5_LABELS = ["DM", "M", "C", "D", "U"];
  const colLabels = COL5_LABELS.slice(colStart);
  const totalSpan = numCols + 1;

  function tabNav(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const card = (e.currentTarget as HTMLElement).closest("[data-decmul2-card]");
    if (!card) return;
    const inputs = Array.from(card.querySelectorAll("input:not(:disabled)")) as HTMLInputElement[];
    const idx = inputs.indexOf(e.currentTarget);
    const next = e.shiftKey ? inputs[idx - 1] : inputs[idx + 1];
    if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
  }

  const cellInput = (base: number, col: number, expected: number, firstNz: number) => {
    const idx = base + col;
    const val = cellAnswers[idx] ?? "";
    const isLeading = expected === 0 && col < firstNz;
    const ok = validated && revealCorrection ? (isLeading ? (val.trim() === "" || val.trim() === "0") : val.trim() === String(expected)) : null;
    if (ok === false) {
      return (
        <div className="h-8 w-8 border border-amber-400 flex flex-col items-center justify-center">
          <span className="text-[9px] text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
          <span className="text-[9px] font-bold text-amber-600 leading-none">{expected}</span>
        </div>
      );
    }
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { const v = e.target.value.replace(/[^0-9]/g,"").slice(-1); onCellChange(cardIdx, idx, v); }}
        onKeyDown={tabNav}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-8 w-8 px-0 text-base ${MATH_TEXT_INPUT_BASE}`}
      />
    );
  };

  const carryCell = (rowBase: number, col: number, expectedCarries: (number|null)[]) => {
    const idx = rowBase + col;
    const val = carryInputs[idx] ?? "";
    const expected = expectedCarries[col];
    if (validated && revealCorrection && expected !== null && val.trim() !== String(expected)) {
      return (
        <div className="h-5 w-8 border border-amber-400 flex flex-col items-center justify-center">
          <span className="text-[8px] text-[var(--color-text-primary)] leading-none">{val || "—"}</span>
          <span className="text-[8px] font-bold text-amber-600 leading-none">{expected}</span>
        </div>
      );
    }
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val} disabled={validated}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { const v = e.target.value.replace(/[^0-9]/g,"").slice(-1); onCarryChange(cardIdx, idx, v); }}
        onKeyDown={tabNav}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
        className={`h-5 w-8 px-0 text-[10px] text-orange-500 ${MATH_TEXT_INPUT_BASE}`}
      />
    );
  };

  const Prefilled = ({ digit, isLeading }: { digit: number; isLeading: boolean }) => (
    <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">
      {isLeading ? "" : digit}
    </div>
  );

  const decWrong = validated && revealCorrection && decResult.trim().replace(".", ",") !== q.resultStr;

  return (
    <div data-decmul2-card className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3 space-y-3">
      <p className="text-center text-xs text-[var(--color-text-secondary)]">
        {q.aStr} × {q.bStr}
      </p>
      <table className="mx-auto border-collapse table-fixed">
        <thead>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {colLabels.map(h => (
              <th key={h} style={{ width: CELL_W, padding: 0 }} className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R2</td>
            {visibleCols.map(col => <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{carryCell(5, col, q.carries2)}</td>)}
          </tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
            {visibleCols.map(col => <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{carryCell(0, col, q.carries1)}</td>)}
          </tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                <Prefilled digit={ad[col]!} isLeading={col < firstNzA} />
              </td>
            ))}
          </tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-secondary)]">×</td>
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                <Prefilled digit={bd[col]!} isLeading={col < (bd.findIndex(d => d !== 0))} />
              </td>
            ))}
          </tr>
          <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{cellInput(0, col, p1d[col]!, firstNzP1)}</td>
            ))}
          </tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} className="pr-1 text-center font-mono text-sm text-[var(--color-text-primary)]">+</td>
            {visibleCols.map(col => {
              if (col === 4) return (
                <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">
                  <div className="flex h-8 w-8 items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)] opacity-60">0</div>
                </td>
              );
              const expected = p2d[col + 1]!;
              const fNz2 = firstNzP2s < 0 ? 5 : firstNzP2s;
              return <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{cellInput(5, col, expected, fNz2)}</td>;
            })}
          </tr>
          <tr><td colSpan={totalSpan}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td style={{ width: 24, padding: 0 }} />
            {visibleCols.map(col => (
              <td key={col} style={{ width: CELL_W, padding: 2 }} className="align-middle text-center">{cellInput(10, col, rd[col]!, firstNzR)}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs text-[var(--color-text-secondary)] shrink-0">Résultat :</span>
        {decWrong ? (
          <span className="inline-flex flex-col items-center rounded-none border-0 border-b-2 border-amber-500 px-0 py-1 min-w-[5rem] justify-center">
            <span className="text-xs text-[var(--color-text-primary)] tabular-nums leading-none">{decResult || "—"}</span>
            <span className="text-xs font-bold text-amber-600 tabular-nums leading-none">{q.resultStr}</span>
          </span>
        ) : (
          <input type="text" inputMode="decimal" value={decResult} disabled={validated}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onDecResultChange(cardIdx, e.target.value.replace(/[^0-9,.]/g, ""))}
            placeholder={`ex. ${q.resultStr}`}
            className="w-28 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 px-0 py-1 text-sm text-center outline-none transition-colors focus:border-[var(--color-accent-alg)]"
          />
        )}
      </div>
    </div>
  );
}

export function DecMul2ColExercise({ exNum, validateCommand, onValidated }: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = React.useState<DecMul2Q[]>(genDecMul2Questions);
  const [carryInputs, setCarryInputs] = React.useState<string[][]>(() =>
    Array.from({ length: 2 }, () => Array(10).fill(""))
  );
  const [cellAnswers, setCellAnswers] = React.useState<string[][]>(() =>
    Array.from({ length: 2 }, () => Array(15).fill(""))
  );
  const [decResults, setDecResults] = React.useState<string[]>(() => Array(2).fill(""));
  const [validated, setValidated] = React.useState(false);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    if (validated) return;

    function getD5(n: number): number[] {
      return [
        Math.floor(n / 10000) % 10,
        Math.floor(n / 1000) % 10,
        Math.floor(n / 100) % 10,
        Math.floor(n / 10) % 10,
        n % 10,
      ];
    }

    const res = questions.map((q: DecMul2Q, qi: number) => {
      const p1d = getD5(q.partial1);
      const p2d = getD5(q.partial2);
      const rd = getD5(q.intResult);
      const cells = cellAnswers[qi] ?? [];
      const firstNzP1 = p1d.findIndex(x => x !== 0);
      const p1Ok = p1d.every((d, i) => {
        const v = (cells[i] ?? "").trim();
        return v === String(d) || (d === 0 && i < firstNzP1 && (v === "" || v === "0"));
      });
      const fNz2 = [0,1,2,3].findIndex(c => p2d[c+1] !== 0);
      const p2Ok = [0,1,2,3,4].every(i => {
        if (i === 4) return true; // fixed 0
        const expected = p2d[i + 1]!;
        const v = (cells[5 + i] ?? "").trim();
        return v === String(expected) || (expected === 0 && i < fNz2 && (v === "" || v === "0"));
      });
      const firstNzR = rd.findIndex(x => x !== 0);
      const rOk = rd.every((d, i) => {
        const v = (cells[10 + i] ?? "").trim();
        return v === String(d) || (d === 0 && i < firstNzR && (v === "" || v === "0"));
      });
      const decAnswerNorm = (decResults[qi] ?? "").trim().replace(".", ",");
      const decOk = decAnswerNorm === q.resultStr;
      return p1Ok && p2Ok && rOk && decOk;
    });

    setValidated(true);
    onValidated(res.every((r: boolean) => r), res.filter((r: boolean) => r).length, res.length);
  }, [validated, questions, cellAnswers, decResults, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Posez et effectuez les multiplications en colonnes (méthode des entiers + virgule).
      </p>
      <div className="flex flex-col gap-6">
        {questions.map((q: DecMul2Q, qi: number) => (
          <DecMul2ColCard
            key={qi}
            q={q}
            cardIdx={qi}
            carryInputs={carryInputs[qi]!}
            cellAnswers={cellAnswers[qi]!}
            decResult={decResults[qi]!}
            validated={validated}
            revealCorrection={revealCorrection}
            onCarryChange={(ci: number, idx: number, val: string) => setCarryInputs((prev: string[][]) => {
              const next = prev.map((r: string[]) => [...r]);
              next[ci]![idx] = val;
              return next;
            })}
            onCellChange={(ci: number, idx: number, val: string) => setCellAnswers((prev: string[][]) => {
              const next = prev.map((r: string[]) => [...r]);
              next[ci]![idx] = val;
              return next;
            })}
            onDecResultChange={(ci: number, val: string) => setDecResults((prev: string[]) => {
              const next = [...prev];
              next[ci] = val;
              return next;
            })}
          />
        ))}
      </div>
    </div>
  );
}
