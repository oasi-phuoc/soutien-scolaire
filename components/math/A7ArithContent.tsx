"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rndNonZero(range: number): number {
  let n = 0;
  while (n === 0) n = rnd(-range, range);
  return n;
}

function dispRel(n: number): string {
  if (n === 0) return "(0)";
  if (n > 0) return `(+${n})`;
  return `(−${Math.abs(n)})`;
}

function fmtCorr(n: number): string {
  if (n === 0) return "0";
  return n > 0 ? `+${n}` : `−${Math.abs(n)}`;
}

function checkAns(typed: string, expected: number): boolean {
  const t = typed.trim().replace("−", "-");
  if (expected === 0) return t === "0";
  if (expected > 0) return t === String(expected) || t === `+${expected}`;
  return t === String(expected);
}

type RelQ = {
  a: number;
  b: number;
  op: "+" | "−" | "×" | "÷";
  result: number;
  missingPos: "result" | "a" | "b";
  decimals?: number;
};

function dispRelQ(q: RelQ, n: number): string {
  if (q.decimals !== undefined) {
    const abs = Math.abs(n).toFixed(q.decimals);
    if (n === 0) return `(0.${"0".repeat(q.decimals)})`;
    return n > 0 ? `(+${abs})` : `(−${abs})`;
  }
  return dispRel(n);
}

function fmtCorrQ(q: RelQ, n: number): string {
  if (q.decimals !== undefined) {
    const abs = Math.abs(n).toFixed(q.decimals);
    if (n === 0) return `0.${"0".repeat(q.decimals)}`;
    return n > 0 ? `+${abs}` : `−${abs}`;
  }
  return fmtCorr(n);
}

function checkAnsQ(typed: string, expected: number, q: RelQ): boolean {
  if (q.decimals !== undefined) {
    const t = typed.trim().replace("−", "-").replace(",", ".");
    const parsed = parseFloat(t);
    if (isNaN(parsed)) return false;
    return Math.abs(parsed - expected) < 0.5 * Math.pow(10, -q.decimals);
  }
  return checkAns(typed, expected);
}

function genAddSubQ(range: number, missingOperand: boolean, forceAdd?: boolean): RelQ {
  const a = rnd(-range, range);
  const b = rnd(-range, range);
  const useAdd = forceAdd !== undefined ? forceAdd : Math.random() < 0.5;
  const result = useAdd ? a + b : a - b;
  const missingPos: RelQ["missingPos"] = !missingOperand ? "result"
    : Math.random() < 0.5 ? "a" : "b";
  return { a, b, op: useAdd ? "+" : "−", result, missingPos };
}

function genBalancedAddSubQuestions(range: number, count: number, missingOperand: boolean): RelQ[] {
  const addCount = count <= 4 ? Math.floor(count / 2) : (Math.random() < 0.5 ? 2 : 3);
  const subCount = count - addCount;
  const qs: RelQ[] = [];
  for (let i = 0; i < addCount; i++) qs.push(genAddSubQ(range, missingOperand, true));
  for (let i = 0; i < subCount; i++) qs.push(genAddSubQ(range, missingOperand, false));
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qs[i], qs[j]] = [qs[j]!, qs[i]!];
  }
  return qs;
}

function genEx5Questions(range: number): RelQ[] {
  function makeQ(aSign: 1 | -1, bSign: 1 | -1): RelQ {
    const a = aSign * rnd(1, range);
    const b = bSign * rnd(1, range);
    const useAdd = Math.random() < 0.5;
    return { a, b, op: useAdd ? "+" : "−", result: useAdd ? a + b : a - b, missingPos: "result" };
  }
  const qs: RelQ[] = [makeQ(1, 1), makeQ(-1, -1), makeQ(1, -1), makeQ(-1, 1), genAddSubQ(range, false)];
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qs[i], qs[j]] = [qs[j]!, qs[i]!];
  }
  return qs;
}

function genDecimalQ(missingOperand: boolean): RelQ {
  const decimals = Math.random() < 0.5 ? 1 : 2;
  const scale = Math.pow(10, decimals);
  function rndDec(): number {
    let raw = 0;
    while (raw === 0) raw = rnd(-10 * scale, 10 * scale);
    return raw / scale;
  }
  const a = rndDec();
  const b = rndDec();
  const useAdd = Math.random() < 0.5;
  const result = Math.round((useAdd ? a + b : a - b) * scale) / scale;
  const missingPos: RelQ["missingPos"] = !missingOperand ? "result"
    : Math.random() < 0.5 ? "a" : "b";
  return { a, b, op: useAdd ? "+" : "−", result, missingPos, decimals };
}

function genMulDivQ(range: number, missingOperand: boolean): RelQ {
  const useMul = Math.random() < 0.5;
  const missingPos: RelQ["missingPos"] = !missingOperand ? "result"
    : Math.random() < 0.5 ? "a" : "b";
  if (useMul) {
    const a = rndNonZero(range);
    const b = rndNonZero(range);
    return { a, b, op: "×", result: a * b, missingPos };
  } else {
    const quotient = rndNonZero(range);
    const divisor = rndNonZero(range);
    return { a: quotient * divisor, b: divisor, op: "÷", result: quotient, missingPos };
  }
}

function RelArithExercise({
  exNum, questions, timer: timerProp, validateCommand, onValidated,
}: {
  exNum: number;
  questions: RelQ[];
  timer?: number;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>(() => Array(questions.length).fill(false));
  const [timeLeft, setTimeLeft] = useState<number | null>(() => timerProp ?? null);
  const prevCmd = useRef(0);
  const onValidatedRef = useRef(onValidated);
  onValidatedRef.current = onValidated;
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const validatedRef = useRef(validated);
  validatedRef.current = validated;

  const doValidate = useCallback(() => {
    if (validatedRef.current) return;
    validatedRef.current = true;
    setValidated(true);
    const res = questions.map((q, i) => {
      const val = q.missingPos === "result" ? q.result : q.missingPos === "a" ? q.a : q.b;
      return checkAnsQ(answersRef.current[i] ?? "", val, q);
    });
    setResults(res);
    const correctCount = res.filter(r => r).length;
    onValidatedRef.current(res.every(r => r), correctCount, res.length);
  }, [questions]);

  useEffect(() => {
    if (!timerProp) return;
    setTimeLeft(timerProp);
    const id = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === null || prev <= 1) { clearInterval(id); doValidate(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerProp]);

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const inputBase = "w-20 rounded border px-1 py-1.5 text-center font-mono text-sm outline-none transition-colors";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {timerProp !== undefined && (
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
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div
          className="grid items-center justify-items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto auto auto" }}
        >
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const ok = validated ? results[i] : null;
            const wrongField = ok === false;
            const missedVal = q.missingPos === "result" ? q.result : q.missingPos === "a" ? q.a : q.b;

            const inputEl = wrongField
              ? (
                <div className={`${inputBase} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                  <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
                  <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{fmtCorrQ(q, missedVal)}</span>
                </div>
              ) : (
                <input
                  type="text"
                  value={val}
                  disabled={validated}
                  onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                  className={`${inputBase} border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
                />
              );

            return (
              <React.Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                {q.missingPos === "a"
                  ? inputEl
                  : <span className="font-mono text-sm text-[var(--color-text-primary)]">{dispRelQ(q, q.a)}</span>}
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">{q.op}</span>
                {q.missingPos === "b"
                  ? inputEl
                  : <span className="font-mono text-sm text-[var(--color-text-primary)]">{dispRelQ(q, q.b)}</span>}
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                {q.missingPos === "result"
                  ? inputEl
                  : <span className="font-mono text-sm text-[var(--color-text-primary)]">{dispRelQ(q, q.result)}</span>}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function A7RelArithExercise({
  exNum, range, count, missingOperand, timer, questionMode, validateCommand, onValidated,
}: {
  exNum: number; range: number; count: number; missingOperand: boolean; timer?: number;
  questionMode?: "balanced" | "ex5" | "decimal";
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<RelQ[]>(() => {
    if (questionMode === "decimal") return Array.from({ length: count }, () => genDecimalQ(missingOperand));
    if (questionMode === "balanced") return genBalancedAddSubQuestions(range, count, missingOperand);
    if (questionMode === "ex5") return genEx5Questions(range);
    return Array.from({ length: count }, () => genAddSubQ(range, missingOperand));
  });
  return (
    <RelArithExercise exNum={exNum} questions={questions} timer={timer}
      validateCommand={validateCommand} onValidated={onValidated} />
  );
}

export function A7RelMulDivExercise({
  exNum, range, count, missingOperand, timer, validateCommand, onValidated,
}: {
  exNum: number; range: number; count: number; missingOperand: boolean; timer?: number;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<RelQ[]>(() =>
    Array.from({ length: count }, () => genMulDivQ(range, missingOperand))
  );
  return (
    <RelArithExercise exNum={exNum} questions={questions} timer={timer}
      validateCommand={validateCommand} onValidated={onValidated} />
  );
}
