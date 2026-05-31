"use client";

import React, { useCallback, useEffect, useState } from "react";
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

// ── A5.4 — Decimal Addition (tenths) ─────────────────────────────────────────
function genAddItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const a1 = rnd(1, 99), a2 = rnd(0, 9);
    const b1 = rnd(1, 99), b2 = rnd(0, 9);
    const sumT = a1 * 10 + a2 + (b1 * 10 + b2);
    return {
      label: String(i + 1),
      question: `${a1},${a2} + ${b1},${b2}`,
      answer: tenthsToStr(sumT),
    };
  });
}

export function DecAddExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genAddItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Addition de décimaux"
      consigne="Calculez et écris le résultat (utilise la virgule)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.4 — Decimal Addition (hundredths) ─────────────────────────────────────
function genAddHundredthsItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const aH = rnd(101, 999);
    const bH = rnd(101, 999);
    const sumH = aH + bH;
    return {
      label: String(i + 1),
      question: `${hundredthsToStr(aH)} + ${hundredthsToStr(bH)}`,
      answer: hundredthsToStr(sumH),
    };
  });
}

export function DecAddHundredthsExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genAddHundredthsItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Addition : deux décimales"
      consigne="Calculez et écris le résultat (utilise la virgule, le résultat peut avoir 2 décimales)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.4 — Decimal Addition (missing operand) ─────────────────────────────────
function genAddMissingItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const a1 = rnd(1, 19), a2 = rnd(0, 9);
    const b1 = rnd(1, 19), b2 = rnd(0, 9);
    const sumT = a1 * 10 + a2 + (b1 * 10 + b2);
    if (Math.random() < 0.5) {
      return {
        label: String(i + 1),
        question: `? + ${b1},${b2} = ${tenthsToStr(sumT)}`,
        answer: tenthsToStr(a1 * 10 + a2),
      };
    } else {
      return {
        label: String(i + 1),
        question: `${a1},${a2} + ? = ${tenthsToStr(sumT)}`,
        answer: tenthsToStr(b1 * 10 + b2),
      };
    }
  });
}

export function DecAddMissingExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genAddMissingItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Addition : opérande manquant"
      consigne="Trouvez le nombre manquant (remplace le ?)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.4 — Decimal Subtraction ────────────────────────────────────────────────
function genSubItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const a1 = rnd(10, 99), a2 = rnd(0, 9);
    let b1 = rnd(1, a1 - 1), b2 = rnd(0, 9);
    while (a1 * 10 + a2 <= b1 * 10 + b2) {
      b1 = rnd(1, a1 - 1);
      b2 = rnd(0, 9);
    }
    const diffT = a1 * 10 + a2 - (b1 * 10 + b2);
    return {
      label: String(i + 1),
      question: `${a1},${a2} − ${b1},${b2}`,
      answer: tenthsToStr(diffT),
    };
  });
}

export function DecSubExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genSubItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Soustraction de décimaux"
      consigne="Calculez et écris le résultat (utilise la virgule)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.4 — Decimal Subtraction (hundredths) ───────────────────────────────────
function genSubHundredthsItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    let aH: number, bH: number;
    do {
      aH = rnd(201, 999);
      bH = rnd(101, aH - 1);
    } while (aH <= bH);
    const diffH = aH - bH;
    return {
      label: String(i + 1),
      question: `${hundredthsToStr(aH)} − ${hundredthsToStr(bH)}`,
      answer: hundredthsToStr(diffH),
    };
  });
}

export function DecSubHundredthsExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genSubHundredthsItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Soustraction : deux décimales"
      consigne="Calculez et écris le résultat (le résultat peut avoir 2 décimales)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.4 — Decimal Subtraction (missing operand) ──────────────────────────────
function genSubMissingItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const a1 = rnd(10, 19), a2 = rnd(0, 9);
    let b1 = rnd(1, a1 - 1), b2 = rnd(0, 9);
    while (a1 * 10 + a2 <= b1 * 10 + b2) {
      b1 = rnd(1, a1 - 1);
      b2 = rnd(0, 9);
    }
    const diffT = a1 * 10 + a2 - (b1 * 10 + b2);
    if (Math.random() < 0.5) {
      return {
        label: String(i + 1),
        question: `${a1},${a2} − ? = ${tenthsToStr(diffT)}`,
        answer: tenthsToStr(b1 * 10 + b2),
      };
    } else {
      return {
        label: String(i + 1),
        question: `? − ${b1},${b2} = ${tenthsToStr(diffT)}`,
        answer: tenthsToStr(a1 * 10 + a2),
      };
    }
  });
}

export function DecSubMissingExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genSubMissingItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Soustraction : opérande manquant"
      consigne="Trouvez le nombre manquant (remplace le ?)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.5 — Decimal Multiplication (simple: int × decimal) ────────────────────
function genMulSimpleItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const int = rnd(2, 12);
    const decT = rnd(11, 99); // 1.1–9.9 in tenths
    const d1 = Math.floor(decT / 10), d2 = decT % 10;
    const prodT = int * decT;
    return {
      label: String(i + 1),
      question: `${int} × ${d1},${d2}`,
      answer: tenthsToStr(prodT),
    };
  });
}

export function DecMulSimpleExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genMulSimpleItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Multiplication : entier × décimal"
      consigne="Calculez mentalement ou en colonnes."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.5 — Decimal Multiplication (missing factor) ────────────────────────────
function genMulMissingItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const int = rnd(2, 12);
    const decT = rnd(11, 99);
    const d1 = Math.floor(decT / 10), d2 = decT % 10;
    const prodT = int * decT;
    if (Math.random() < 0.5) {
      return {
        label: String(i + 1),
        question: `? × ${d1},${d2} = ${tenthsToStr(prodT)}`,
        answer: String(int),
      };
    } else {
      return {
        label: String(i + 1),
        question: `${int} × ? = ${tenthsToStr(prodT)}`,
        answer: `${d1},${d2}`,
      };
    }
  });
}

export function DecMulMissingExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genMulMissingItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Multiplication : facteur manquant"
      consigne="Trouvez le facteur manquant (remplace le ?)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
  );
}

// ── A5.5 — Decimal Multiplication (extended: decimal × decimal) ───────────────
function genMulExtItems(): DecQuestion[] {
  return Array.from({ length: 5 }, (_, i) => {
    const aT = rnd(11, 99); // 1.1–9.9
    const bT = rnd(11, 99);
    const prodH = aT * bT; // hundredths
    const a1 = Math.floor(aT / 10), a2 = aT % 10;
    const b1 = Math.floor(bT / 10), b2 = bT % 10;
    return {
      label: String(i + 1),
      question: `${a1},${a2} × ${b1},${b2}`,
      answer: hundredthsToStr(prodH),
    };
  });
}

export function DecMulExtExercise({
  exNum,
  validateCommand,
  onValidated,
}: {
  exNum: number;
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [questions] = useState<DecQuestion[]>(genMulExtItems);
  return (
    <DecExercise
      exNum={exNum}
      title="Multiplication : décimal × décimal"
      consigne="Posez le calcul en colonnes (supprimez les virgules, multipliez, replacez la virgule)."
      questions={questions}
      validateCommand={validateCommand}
      onValidated={onValidated}
    />
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
