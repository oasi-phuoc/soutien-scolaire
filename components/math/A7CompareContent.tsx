"use client";

import React, { useEffect, useRef, useState } from "react";

const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fmtRel(n: number): string {
  if (n === 0) return "0";
  if (n > 0) return `+${n}`;
  return `−${Math.abs(n)}`;
}

type RelCompQ = { a: number; b: number; answer: "<" | "=" | ">" };

function genQuestions(level: 1 | 2): RelCompQ[] {
  const signs: Array<"<" | "=" | ">"> = ["<", "<", ">", ">", "="];
  for (let i = signs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [signs[i], signs[j]] = [signs[j]!, signs[i]!];
  }
  const range = level === 1 ? 6 : 20;
  return signs.map(answer => {
    let a = 0, b = 0;
    if (answer === "=") {
      do { a = rnd(-range, range); } while (false);
      b = a;
    } else if (answer === ">") {
      do { a = rnd(-range, range); b = rnd(-range, range); } while (a <= b);
    } else {
      do { a = rnd(-range, range); b = rnd(-range, range); } while (a >= b);
    }
    return { a, b, answer };
  });
}

export function A7CompareExercise({
  exNum,
  level,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  level: 1 | 2;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<RelCompQ[]>(() => genQuestions(level));
  const [answers, setAnswers] = useState<Array<"<" | "=" | ">" | null>>(Array(5).fill(null));
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        setValidated(true);
        const ok = questions.every((q, i) => answers[i] === q.answer);
        onValidated(ok);
      }
    }
  }, [validateCommand, validated, questions, answers, onValidated]);

  const maxAbs = Math.max(...questions.flatMap(q => [Math.abs(q.a), Math.abs(q.b)]));
  const numW = maxAbs >= 10 ? "4ch" : "3ch";

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Comparez les deux nombres.</p>
      <div className="space-y-3">
        {questions.map((q, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex items-center shrink-0">
              <span className="w-5 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="shrink-0 text-right font-mono text-sm text-[var(--color-text-primary)]" style={{ width: numW }}>{fmtRel(q.a)}</span>
            </div>
            <div className="flex shrink-0 gap-1">
              {(["<", "=", ">"] as const).map(sym => {
                const sel = answers[i] === sym;
                const isCorrect = sym === q.answer;
                let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                if (!validated) {
                  cls += sel
                    ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                    : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                } else if (sel) {
                  cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                } else if (isCorrect) {
                  cls += CLS_WRONG;
                } else {
                  cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                }
                return (
                  <button
                    key={sym}
                    type="button"
                    disabled={validated}
                    onClick={() => setAnswers(prev => { const next = [...prev]; next[i] = sym; return next; })}
                    className={cls}
                  >
                    {sym}
                  </button>
                );
              })}
            </div>
            <span className="shrink-0 font-mono text-sm text-[var(--color-text-primary)]">{fmtRel(q.b)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
