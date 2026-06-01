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

// Display with parentheses: (+6), (−3), (0)
function dispRel(n: number): string {
  if (n === 0) return "(0)";
  if (n > 0) return `(+${n})`;
  return `(−${Math.abs(n)})`;
}

// Correct answer label without parens: +6, −3, 0
function fmtCorr(n: number): string {
  if (n === 0) return "0";
  return n > 0 ? `+${n}` : `−${Math.abs(n)}`;
}

// Check typed answer (accepts -3 or −3 for negatives, 3 or +3 for positives)
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
};

function genAddSubQ(range: number, missingOperand: boolean): RelQ {
  const a = rnd(-range, range);
  const b = rnd(-range, range);
  const useAdd = Math.random() < 0.5;
  const result = useAdd ? a + b : a - b;
  const missingPos: RelQ["missingPos"] = !missingOperand ? "result"
    : Math.random() < 0.5 ? "a" : "b";
  return { a, b, op: useAdd ? "+" : "−", result, missingPos };
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
  onValidated: (ok: boolean) => void;
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
      return checkAns(answersRef.current[i] ?? "", val);
    });
    setResults(res);
    onValidatedRef.current(res.every(r => r));
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

  const inputBase = "w-16 rounded border px-1 py-1.5 text-center font-mono text-sm outline-none transition-colors";

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
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-3">
        {questions.map((q, i) => {
          const val = answers[i] ?? "";
          const ok = validated ? results[i] : null;
          const wrongField = ok === false;
          const missedVal = q.missingPos === "result" ? q.result : q.missingPos === "a" ? q.a : q.b;

          const inputEl = wrongField
            ? (
              <div className={`${inputBase} ${CLS_WRONG} flex items-center justify-center gap-0.5`}>
                <span className="line-through text-amber-500 text-xs">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold">{fmtCorr(missedVal)}</span>
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
            <div key={i} className="flex min-h-[2.25rem] items-center gap-2 flex-wrap">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              {q.missingPos === "a"
                ? inputEl
                : <span className="font-mono text-sm text-[var(--color-text-primary)] shrink-0">{dispRel(q.a)}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)] shrink-0">{q.op}</span>
              {q.missingPos === "b"
                ? inputEl
                : <span className="font-mono text-sm text-[var(--color-text-primary)] shrink-0">{dispRel(q.b)}</span>}
              <span className="font-mono text-sm text-[var(--color-text-secondary)] shrink-0">=</span>
              {q.missingPos === "result"
                ? inputEl
                : <span className="font-mono text-sm text-[var(--color-text-primary)] shrink-0">{dispRel(q.result)}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function A7RelArithExercise({
  exNum, range, count, missingOperand, timer, validateCommand, onValidated,
}: {
  exNum: number; range: number; count: number; missingOperand: boolean; timer?: number;
  validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<RelQ[]>(() =>
    Array.from({ length: count }, () => genAddSubQ(range, missingOperand))
  );
  return (
    <RelArithExercise exNum={exNum} questions={questions} timer={timer}
      validateCommand={validateCommand} onValidated={onValidated} />
  );
}

export function A7RelMulDivExercise({
  exNum, range, count, missingOperand, timer, validateCommand, onValidated,
}: {
  exNum: number; range: number; count: number; missingOperand: boolean; timer?: number;
  validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<RelQ[]>(() =>
    Array.from({ length: count }, () => genMulDivQ(range, missingOperand))
  );
  return (
    <RelArithExercise exNum={exNum} questions={questions} timer={timer}
      validateCommand={validateCommand} onValidated={onValidated} />
  );
}
