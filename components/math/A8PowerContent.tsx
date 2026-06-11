"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

const SUPS = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const toSup = (n: number) => String(n).split("").map(d => SUPS[parseInt(d)]).join("");

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type PowerQ = { base: number; exp: number; result: number };

function genPowerQ(): PowerQ {
  const base = rnd(2, 9);
  const exp = rnd(2, 5);
  return { base, exp, result: base ** exp };
}

function checkAns(typed: string, expected: number): boolean {
  return typed.trim() === String(expected);
}

function PurePowerExercise({
  exNum, questions, promptFr, validateCommand, onValidated,
}: {
  exNum: number;
  questions: PowerQ[];
  promptFr?: string;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);

  const inputBase = "w-20 h-9 rounded border px-1 text-center font-mono text-sm outline-none transition-colors";

  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => checkAns(answers[i], q.result));
    setResults(res);
    setValidated(true);
    const correct = res.filter(Boolean).length;
    onValidated(res.every(Boolean), correct, res.length);
  }, [answers, questions, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div
          className="grid items-center justify-items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}
        >
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const ok = validated ? results[i] : null;
            const wrongField = ok === false;

            const inputEl = wrongField ? (
              <div className={`${inputBase} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.result}</span>
              </div>
            ) : (
              <input
                type="text"
                value={val}
                disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputBase} py-1.5 border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
              />
            );

            return (
              <React.Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
                  {q.base}{toSup(q.exp)}
                </span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                {inputEl}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function A8PowerExercise({
  exNum, count, promptFr, validateCommand, onValidated,
}: {
  exNum: number;
  count: number;
  promptFr?: string;
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<PowerQ[]>(() =>
    Array.from({ length: count }, () => genPowerQ())
  );
  return (
    <PurePowerExercise
      exNum={exNum}
      questions={questions}
      promptFr={promptFr}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}
