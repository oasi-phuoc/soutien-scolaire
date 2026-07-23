"use client";

import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useEvalReveal } from "@/lib/eval-reveal-context";

const CLS_WRONG = "border-amber-400 bg-amber-50 text-amber-700";

const SUPS = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const toSup = (n: number) => String(n).split("").map(d => SUPS[parseInt(d)]).join("");

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const inputBase = "w-20 h-9 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 px-1 text-center font-mono text-sm outline-none transition-colors focus:border-[var(--color-accent-alg)]";
const inputSmall = "w-10 h-7 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 px-0.5 text-center font-mono text-xs outline-none transition-colors focus:border-[var(--color-accent-alg)]";

// ── Ex1: Calculate the power ──────────────────────────────────────────────────
type PowerQ = { base: number; exp: number; result: number };
function genPowerQ(): PowerQ {
  const base = rnd(2, 9); const exp = rnd(2, 5);
  return { base, exp, result: base ** exp };
}

function PurePowerExercise({ exNum, questions, promptFr, validateCommand, onValidated }: {
  exNum: number; questions: PowerQ[]; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.result));
    setResults(res); setValidated(true);
    const correct = res.filter(Boolean).length;
    onValidated(res.every(Boolean), correct, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center justify-items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const inputEl = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.result}</span>
              </div>
            ) : (
              <input type="text" inputMode="decimal" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9,.]/g, ""); return n; })}
                className={`${inputBase} py-1.5`}
              />
            );
            return (
              <React.Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.base}{toSup(q.exp)}</span>
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

export function A8PowerExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<PowerQ[]>(() => {
    const seen = new Set<string>();
    const qs: PowerQ[] = [];
    let attempts = 0;
    while (qs.length < count && attempts < 200) {
      attempts++;
      const q = genPowerQ();
      const key = `${q.base}^${q.exp}`;
      if (!seen.has(key)) { seen.add(key); qs.push(q); }
    }
    return qs;
  });
  return <PurePowerExercise exNum={exNum} questions={questions} promptFr={promptFr}
    validateCommand={validateCommand} onValidated={onValidated} />;
}

// ── Ex2: Find the missing exponent ────────────────────────────────────────────
type MissingExpQ = { base: number; exp: number; result: number };
function genMissingExpQ(): MissingExpQ {
  const base = rnd(2, 9); const exp = rnd(2, 5);
  return { base, exp, result: base ** exp };
}

function PureMissingExpExercise({ exNum, questions, promptFr, validateCommand, onValidated }: {
  exNum: number; questions: MissingExpQ[]; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.exp));
    setResults(res); setValidated(true);
    const correct = res.filter(Boolean).length;
    onValidated(res.every(Boolean), correct, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const expInput = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-10 h-7 flex flex-col items-center justify-center`}
                style={{ position: "relative", top: "-6px" }}>
                <span className="text-[10px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-[10px] font-bold leading-none text-amber-600">{q.exp}</span>
              </div>
            ) : (
              <input type="text" inputMode="numeric" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9\-]/g, ""); return n; })}
                className={`${inputSmall}`}
                style={{ position: "relative", top: "-6px" }}
              />
            );
            return (
              <React.Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="inline-flex items-center font-mono text-sm text-[var(--color-text-primary)]">
                  {q.base}{expInput}
                </span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.result}</span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function A8MissingExpExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<MissingExpQ[]>(() => {
    const seen = new Set<string>();
    const qs: MissingExpQ[] = [];
    let attempts = 0;
    while (qs.length < count && attempts < 200) {
      attempts++;
      const q = genMissingExpQ();
      const key = `${q.base}^${q.exp}`;
      if (!seen.has(key)) { seen.add(key); qs.push(q); }
    }
    return qs;
  });
  return <PureMissingExpExercise exNum={exNum} questions={questions} promptFr={promptFr}
    validateCommand={validateCommand} onValidated={onValidated} />;
}

// ── Ex3: Find the missing base ────────────────────────────────────────────────
type MissingBaseQ = { base: number; exp: number; result: number };
function genMissingBaseQ(): MissingBaseQ {
  const exp = rnd(2, 4); const base = rnd(2, 9);
  return { base, exp, result: base ** exp };
}
function genMissingBaseQuestions(count: number): MissingBaseQ[] {
  const usedResults = new Set<number>();
  const qs: MissingBaseQ[] = [];
  let attempts = 0;
  while (qs.length < count && attempts < 200) {
    attempts++;
    const q = genMissingBaseQ();
    if (!usedResults.has(q.result)) {
      usedResults.add(q.result);
      qs.push(q);
    }
  }
  return qs;
}

function PureMissingBaseExercise({ exNum, questions, promptFr, validateCommand, onValidated }: {
  exNum: number; questions: MissingBaseQ[]; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.base));
    setResults(res); setValidated(true);
    const correct = res.filter(Boolean).length;
    onValidated(res.every(Boolean), correct, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const baseInput = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.base}</span>
              </div>
            ) : (
              <input type="text" inputMode="numeric" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9]/g, ""); return n; })}
                className={`${inputBase} py-1.5`}
              />
            );
            return (
              <React.Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="inline-flex items-start font-mono text-sm text-[var(--color-text-primary)]">
                  {baseInput}
                  <span className="font-bold text-[10px] text-[var(--color-accent-alg)]"
                    style={{ position: "relative", top: "-6px", marginLeft: "1px" }}>{q.exp}</span>
                </span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.result}</span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function A8MissingBaseExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<MissingBaseQ[]>(() => genMissingBaseQuestions(count));
  return <PureMissingBaseExercise exNum={exNum} questions={questions} promptFr={promptFr}
    validateCommand={validateCommand} onValidated={onValidated} />;
}

// ── Ex4: Compare powers ───────────────────────────────────────────────────────
type PowerCmpQ = { base1: number; exp1: number; base2: number; exp2: number; answer: "<" | "=" | ">" };

function genPowerCmpQuestions(count: number): PowerCmpQ[] {
  return Array.from({ length: count }, () => {
    let base1: number, exp1: number, base2: number, exp2: number;
    do {
      base1 = rnd(2, 6); exp1 = rnd(2, 4);
      base2 = rnd(2, 6); exp2 = rnd(2, 4);
    } while (base1 === base2 && exp1 === exp2);
    const v1 = base1 ** exp1, v2 = base2 ** exp2;
    const answer: "<" | "=" | ">" = v1 < v2 ? "<" : v1 > v2 ? ">" : "=";
    return { base1, exp1, base2, exp2, answer };
  });
}

export function A8PowerCompareExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<PowerCmpQ[]>(() => genPowerCmpQuestions(count));
  const [answers, setAnswers] = useState<Array<"<" | "=" | ">" | null>>(() => Array(count).fill(null));
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        const res = questions.map((q, i) => answers[i] === q.answer);
        setValidated(true);
        const correct = res.filter(Boolean).length;
        onValidated(res.every(Boolean), correct, res.length);
      }
    }
  }, [validateCommand, validated, questions, answers, onValidated]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-3">
        {questions.map((q, i) => {
          const sel = answers[i];
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="shrink-0 font-mono text-sm text-[var(--color-text-primary)]">
                {q.base1}{toSup(q.exp1)}
              </span>
              <div className="flex shrink-0 gap-1">
                {(["<", "=", ">"] as const).map(sym => {
                  const isSelected = sel === sym;
                  const isCorrect = sym === q.answer;
                  let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                  if (!validated || !revealCorrection) {
                    cls += isSelected
                      ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                      : "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]";
                  } else if (isSelected) {
                    cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                  } else if (isCorrect) {
                    cls += CLS_WRONG;
                  } else {
                    cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                  }
                  return (
                    <button key={sym} type="button" disabled={validated}
                      onClick={() => setAnswers(prev => prev.map((a, j) => j === i ? sym : a))}
                      className={cls}>{sym}</button>
                  );
                })}
              </div>
              <span className="shrink-0 font-mono text-sm text-[var(--color-text-primary)]">
                {q.base2}{toSup(q.exp2)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex5: Order powers ─────────────────────────────────────────────────────────
type PowerItem = { base: number; exp: number; value: number };

function genPowerOrderGroup(): { powers: PowerItem[] } {
  const seen = new Set<number>();
  const powers: PowerItem[] = [];
  let attempts = 0;
  while (powers.length < 4 && attempts < 100) {
    attempts++;
    const base = rnd(2, 5); const exp = rnd(2, 4);
    const value = base ** exp;
    if (!seen.has(value)) { seen.add(value); powers.push({ base, exp, value }); }
  }
  for (let i = powers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [powers[i], powers[j]] = [powers[j]!, powers[i]!];
  }
  return { powers };
}

export function A8PowerOrderExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [groups] = useState(() => Array.from({ length: count }, () => genPowerOrderGroup()));
  const [selected, setSelected] = useState<number[][]>(() => groups.map(() => []));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>(() => groups.map(() => false));
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const toggle = (gi: number, value: number) => {
    if (validated) return;
    setSelected(prev => {
      const next = prev.map(a => [...a]);
      const cur = next[gi] ?? [];
      next[gi] = cur.includes(value) ? cur.filter(x => x !== value) : [...cur, value];
      return next;
    });
  };

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        const res = groups.map((g, gi) => {
          const sorted = [...g.powers].sort((a, b) => a.value - b.value).map(p => p.value);
          const sel = selected[gi] ?? [];
          return sel.length === sorted.length && sel.every((v, idx) => v === sorted[idx]);
        });
        setResults(res); setValidated(true);
        const correct = res.filter(Boolean).length;
        onValidated(res.every(Boolean), correct, res.length);
      }
    }
  }, [validateCommand, validated, groups, selected, onValidated]);

  const chipBase = "flex h-10 items-center justify-center rounded-lg border px-3 text-sm font-mono font-bold transition-colors ";

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="space-y-6">
        {groups.map((g, gi) => {
          const sel = selected[gi] ?? [];
          const available = g.powers.filter(p => !sel.includes(p.value));
          const sorted = [...g.powers].sort((a, b) => a.value - b.value);
          const ok = validated && revealCorrection ? results[gi] : null;
          return (
            <div key={gi} className="space-y-3">
              {available.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {available.map((p, pi) => (
                    <button key={pi} type="button" disabled={validated} onClick={() => toggle(gi, p.value)}
                      className={chipBase + (validated
                        ? "cursor-default border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40"
                        : "cursor-pointer border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]")}>
                      {p.base}{toSup(p.exp)}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex min-h-[48px] flex-wrap items-center gap-1.5 border-b-2 border-[var(--color-accent-alg)] pb-1">
                <span className="shrink-0 mr-1 text-xs font-bold text-[var(--color-accent-alg)]">{gi + 1}.</span>
                {sel.map((value, si) => {
                  const p = g.powers.find(x => x.value === value)!;
                  return (
                    <Fragment key={si}>
                      <button type="button" disabled={validated} onClick={() => toggle(gi, value)}
                        className={chipBase + (validated ? "cursor-default " : "cursor-pointer ") + "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"}>
                        {p.base}{toSup(p.exp)}
                      </button>
                      {si < sel.length - 1 && <span className="text-sm font-bold text-[var(--color-text-secondary)]">{"<"}</span>}
                    </Fragment>
                  );
                })}
              </div>
              {validated && ok === false && (
                <div className="flex flex-wrap items-center gap-1">
                  <span className="text-xs font-bold text-amber-600 mr-1">Ordre correct :</span>
                  {sorted.map((p, si) => (
                    <Fragment key={si}>
                      <span className="font-mono text-sm font-bold text-amber-700">{p.base}{toSup(p.exp)}</span>
                      {si < sorted.length - 1 && <span className="text-amber-500 text-xs">{"<"}</span>}
                    </Fragment>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A8.2 shared helpers ───────────────────────────────────────────────────────

// Base in primary color, exponent in accent color
function PowSpan({ b, e }: { b: number | string; e: number }) {
  return (
    <>
      <span className="text-[var(--color-text-primary)]">{b}</span>
      <span className="text-[var(--color-accent-alg)]">{toSup(e)}</span>
    </>
  );
}

// Generic 4-col grid exercise reused by all A8.2 exercises
function PureCalcExercise<Q extends { result: number }>({
  exNum, questions, promptFr, validateCommand, onValidated, renderExpr,
}: {
  exNum: number; questions: Q[]; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
  renderExpr: (q: Q) => React.ReactNode;
}) {
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.result));
    setResults(res); setValidated(true);
    const correct = res.filter(Boolean).length;
    onValidated(res.every(Boolean), correct, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const inputEl = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.result}</span>
              </div>
            ) : (
              <input type="text" inputMode="decimal" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9,.]/g, ""); return n; })}
                className={`${inputBase} py-1.5`}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm">{renderExpr(q)}</span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                {inputEl}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Ex: Multiply same base (aⁿ × aᵐ = aⁿ⁺ᵐ) ──────────────────────────────
type MultQ = { base: number; exp1: number; exp2: number; result: number };
function genMultQ(): MultQ {
  let base = 2, exp1 = 1, exp2 = 1;
  do { base = rnd(2, 6); exp1 = rnd(1, 3); exp2 = rnd(1, 3); }
  while (base ** (exp1 + exp2) > 1000);
  return { base, exp1, exp2, result: base ** (exp1 + exp2) };
}
export function A8MultExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<MultQ[]>(() => Array.from({ length: count }, genMultQ));
  return (
    <PureCalcExercise
      exNum={exNum} questions={questions} promptFr={promptFr}
      validateCommand={validateCommand} onValidated={onValidated}
      renderExpr={q => <><PowSpan b={q.base} e={q.exp1} />{" × "}<PowSpan b={q.base} e={q.exp2} /></>}
    />
  );
}

// ── Ex: Divide same base (aⁿ ÷ aᵐ = aⁿ⁻ᵐ) ────────────────────────────────
type DivQ = { base: number; exp1: number; exp2: number; result: number };
function genDivQ(): DivQ {
  const base = rnd(2, 6);
  const exp1 = rnd(2, 3);
  const exp2 = rnd(1, exp1 - 1);
  return { base, exp1, exp2, result: base ** (exp1 - exp2) };
}
export function A8DivExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<DivQ[]>(() => Array.from({ length: count }, genDivQ));
  return (
    <PureCalcExercise
      exNum={exNum} questions={questions} promptFr={promptFr}
      validateCommand={validateCommand} onValidated={onValidated}
      renderExpr={q => <><PowSpan b={q.base} e={q.exp1} />{" ÷ "}<PowSpan b={q.base} e={q.exp2} /></>}
    />
  );
}

// ── Ex: Power of a power ((aⁿ)ᵐ = aⁿˣᵐ) ──────────────────────────────────
type PowPowQ = { base: number; exp1: number; exp2: number; result: number };
function genPowPowQ(): PowPowQ {
  let base = 2, exp1 = 2, exp2 = 2;
  do { base = rnd(2, 4); exp1 = rnd(2, 3); exp2 = rnd(2, 3); }
  while (base ** (exp1 * exp2) > 1000);
  return { base, exp1, exp2, result: base ** (exp1 * exp2) };
}
export function A8PowPowExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<PowPowQ[]>(() => Array.from({ length: count }, genPowPowQ));
  return (
    <PureCalcExercise
      exNum={exNum} questions={questions} promptFr={promptFr}
      validateCommand={validateCommand} onValidated={onValidated}
      renderExpr={q => (
        <><span className="text-[var(--color-text-primary)]">(</span>
        <PowSpan b={q.base} e={q.exp1} />
        <span className="text-[var(--color-text-primary)]">)</span>
        <span className="text-[var(--color-accent-alg)]">{toSup(q.exp2)}</span></>
      )}
    />
  );
}

// ── Ex: Mixed calculations ─────────────────────────────────────────────────
type MixedQ =
  | { type: "mult_div"; base: number; n: number; m: number; p: number; result: number }
  | { type: "pow_div"; base: number; n: number; m: number; p: number; result: number };
function genMixedQ(): MixedQ {
  if (Math.random() < 0.5) {
    let base = 2, n = 2, m = 1, p = 1;
    do { base = rnd(2, 4); n = rnd(2, 3); m = rnd(1, 2); p = rnd(1, n + m - 1); }
    while (base ** (n + m - p) > 500);
    return { type: "mult_div", base, n, m, p, result: base ** (n + m - p) };
  } else {
    let base = 2, n = 2, m = 2, p = 1;
    do { base = rnd(2, 3); n = rnd(2, 3); m = rnd(2, 3); p = rnd(1, n * m - 1); }
    while (base ** (n * m - p) > 500);
    return { type: "pow_div", base, n, m, p, result: base ** (n * m - p) };
  }
}
export function A8MixedExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<MixedQ[]>(() => Array.from({ length: count }, genMixedQ));
  return (
    <PureCalcExercise
      exNum={exNum} questions={questions} promptFr={promptFr}
      validateCommand={validateCommand} onValidated={onValidated}
      renderExpr={q => q.type === "mult_div" ? (
        <><span className="text-[var(--color-text-primary)]">(</span>
        <PowSpan b={q.base} e={q.n} />
        <span className="text-[var(--color-text-primary)]"> × </span>
        <PowSpan b={q.base} e={q.m} />
        <span className="text-[var(--color-text-primary)]">) ÷ </span>
        <PowSpan b={q.base} e={q.p} /></>
      ) : (
        <><span className="text-[var(--color-text-primary)]">(</span>
        <PowSpan b={q.base} e={q.n} />
        <span className="text-[var(--color-text-primary)]">)</span>
        <span className="text-[var(--color-accent-alg)]">{toSup(q.m)}</span>
        <span className="text-[var(--color-text-primary)]"> ÷ </span>
        <PowSpan b={q.base} e={q.p} /></>
      )}
    />
  );
}

// ── A8.2 Ex5: Complétez les égalités (missing exponent in equality) ───────────
type EqQ =
  | { type: "mult"; base: number; known: number; result: number; answer: number }
  | { type: "div"; base: number; lhs: number; result: number; answer: number }
  | { type: "pow"; base: number; inner: number; resultExp: number; answer: number };
function genEqQuestions(count: number): EqQ[] {
  const cycle: Array<"mult" | "div" | "pow"> = ["mult", "div", "pow", "mult", "div"];
  return Array.from({ length: count }, (_, i) => {
    const t = cycle[i % cycle.length];
    if (t === "mult") {
      const base = rnd(2, 7); const known = rnd(1, 4); const answer = rnd(1, 4);
      return { type: "mult" as const, base, known, result: known + answer, answer };
    } else if (t === "div") {
      const base = rnd(2, 7); const lhs = rnd(3, 7); const answer = rnd(1, lhs - 1);
      return { type: "div" as const, base, lhs, result: lhs - answer, answer };
    } else {
      const base = rnd(2, 5); const inner = rnd(2, 3); const answer = rnd(2, 4);
      return { type: "pow" as const, base, inner, resultExp: inner * answer, answer };
    }
  });
}
export function A8EqCompleteExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<EqQ[]>(() => genEqQuestions(count));
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.answer));
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const expInput = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-10 h-7 inline-flex flex-col items-center justify-center`}
                style={{ position: "relative", top: "-6px" }}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span>
              </div>
            ) : (
              <input type="text" inputMode="numeric" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9\-]/g, ""); return n; })}
                className={`${inputSmall}`}
                style={{ position: "relative", top: "-6px" }}
              />
            );
            const lhsNode = q.type === "mult" ? (
              <span className="font-mono text-sm">
                <PowSpan b={q.base} e={q.known} />
                <span className="text-[var(--color-text-primary)]"> × </span>
                <span className="text-[var(--color-text-primary)]">{q.base}</span>{expInput}
              </span>
            ) : q.type === "div" ? (
              <span className="font-mono text-sm">
                <PowSpan b={q.base} e={q.lhs} />
                <span className="text-[var(--color-text-primary)]"> ÷ </span>
                <span className="text-[var(--color-text-primary)]">{q.base}</span>{expInput}
              </span>
            ) : (
              <span className="font-mono text-sm">
                <span className="text-[var(--color-text-primary)]">(</span>
                <PowSpan b={q.base} e={q.inner} />
                <span className="text-[var(--color-text-primary)]">)</span>{expInput}
              </span>
            );
            const rhsExp = q.type === "pow" ? q.resultExp : q.result;
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                {lhsNode}
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm"><PowSpan b={q.base} e={rhsExp} /></span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── A8.3 Exercises ─────────────────────────────────────────────────────────────

const toNegSup = (n: number) => (n < 0 ? "⁻" + toSup(-n) : toSup(n));

// Ex1: Calculate 10^n
type Pow10Q = { exp: number; result: string };
function genPow10Qs(count: number): Pow10Q[] {
  const pool = [1, 2, 3, 4, 5, 6, -1, -2, -3];
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count).map(exp => ({
    exp,
    result: exp >= 0 ? String(10 ** exp) : (10 ** exp).toFixed(-exp),
  }));
}
export function A8Pow10CalcExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<Pow10Q[]>(() => genPow10Qs(count));
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => {
      const a = (answers[i] ?? "").trim().replace(",", ".");
      return a === q.result || a === q.result.replace(".", ",");
    });
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const inputEl = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.result}</span>
              </div>
            ) : (
              <input type="text" inputMode="decimal" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9,.]/g, ""); return n; })}
                className={`${inputBase} py-1.5`}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm">
                  <span className="text-[var(--color-text-primary)]">10</span>
                  <span className="text-[var(--color-accent-alg)]">{toNegSup(q.exp)}</span>
                </span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                {inputEl}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Ex2 & Ex3 share data — value ↔ exponent of 10
type ToPow10Q = { value: string; exp: number };
function genToPow10Qs(count: number): ToPow10Q[] {
  const pool: ToPow10Q[] = [
    { value: "10", exp: 1 }, { value: "100", exp: 2 }, { value: "1 000", exp: 3 },
    { value: "10 000", exp: 4 }, { value: "100 000", exp: 5 },
    { value: "0,1", exp: -1 }, { value: "0,01", exp: -2 }, { value: "0,001", exp: -3 },
  ];
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}
function ExpInput({ val, correct, validated, wrong, onChange }: {
  val: string; correct: number; validated: boolean; wrong: boolean;
  onChange: (v: string) => void;
}) {
  return wrong ? (
    <div className={`rounded-none border-0 border-b-2 border-amber-500 w-10 h-7 inline-flex flex-col items-center justify-center`}
      style={{ position: "relative", top: "-6px" }}>
      <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
      <span className="text-xs font-bold leading-none text-amber-600">{correct}</span>
    </div>
  ) : (
    <input type="text" value={val} disabled={validated}
      onChange={e => onChange(e.target.value.replace(/[^0-9\-]/g, ""))}
      className={`${inputSmall}`}
      style={{ position: "relative", top: "-6px" }}
    />
  );
}
export function A8ToPow10Exercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<ToPow10Q[]>(() => genToPow10Qs(count));
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.exp));
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => (
            <Fragment key={i}>
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.value}</span>
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
              <span className="font-mono text-sm">
                <span className="text-[var(--color-text-primary)]">10</span>
                <ExpInput val={answers[i] ?? ""} correct={q.exp} validated={validated}
                  wrong={validated && revealCorrection && !results[i]}
                  onChange={v => setAnswers(prev => { const n = [...prev]; n[i] = v; return n; })} />
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
export function A8Pow10ExpExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<ToPow10Q[]>(() => genToPow10Qs(count));
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.exp));
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => (
            <Fragment key={i}>
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono text-sm">
                <span className="text-[var(--color-text-primary)]">10</span>
                <ExpInput val={answers[i] ?? ""} correct={q.exp} validated={validated}
                  wrong={validated && revealCorrection && !results[i]}
                  onChange={v => setAnswers(prev => { const n = [...prev]; n[i] = v; return n; })} />
              </span>
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
              <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.value}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

// Ex4: Calculate a × 10^n
type SciCalcQ = { display: string; result: string };
const SCI_CALC_POOL: SciCalcQ[] = [
  { display: "3 × 10²", result: "300" },
  { display: "5 × 10³", result: "5 000" },
  { display: "2 × 10⁵", result: "200 000" },
  { display: "7 × 10¹", result: "70" },
  { display: "4 × 10⁴", result: "40 000" },
  { display: "6 × 10²", result: "600" },
  { display: "9 × 10³", result: "9 000" },
  { display: "2 × 10⁻²", result: "0,02" },
  { display: "5 × 10⁻¹", result: "0,5" },
  { display: "3 × 10⁻³", result: "0,003" },
  { display: "4 × 10⁻²", result: "0,04" },
  { display: "7 × 10⁻¹", result: "0,7" },
];
export function A8SciCalcExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<SciCalcQ[]>(() =>
    [...SCI_CALC_POOL].sort(() => Math.random() - 0.5).slice(0, count)
  );
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => {
      const a = (answers[i] ?? "").trim().replace(/\s/g, "").replace(",", ".");
      const e = q.result.replace(/\s/g, "").replace(",", ".");
      return a === e;
    });
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const inputEl = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.result}</span>
              </div>
            ) : (
              <input type="text" inputMode="decimal" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9,.]/g, ""); return n; })}
                className={`${inputBase} py-1.5`}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.display}</span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                {inputEl}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Ex5: Write number in scientific notation — value = [coeff_input] × 10[exp_input]
type SciWriteQ = { display: string; coeff: string; exp: number };
const SCI_WRITE_POOL: SciWriteQ[] = [
  { display: "4 700 000", coeff: "4,7", exp: 6 },
  { display: "300 000", coeff: "3", exp: 5 },
  { display: "0,000 035", coeff: "3,5", exp: -5 },
  { display: "1 200", coeff: "1,2", exp: 3 },
  { display: "0,04", coeff: "4", exp: -2 },
  { display: "7 000 000", coeff: "7", exp: 6 },
  { display: "0,005", coeff: "5", exp: -3 },
  { display: "250", coeff: "2,5", exp: 2 },
  { display: "80 000", coeff: "8", exp: 4 },
  { display: "0,0009", coeff: "9", exp: -4 },
];
export function A8SciWriteExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<SciWriteQ[]>(() =>
    [...SCI_WRITE_POOL].sort(() => Math.random() - 0.5).slice(0, count)
  );
  const [coeffAns, setCoeffAns] = useState<string[]>(() => Array(count).fill(""));
  const [expAns, setExpAns] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => {
      const ca = (coeffAns[i] ?? "").trim().replace(",", ".");
      const ea = (expAns[i] ?? "").trim();
      return ca === q.coeff.replace(",", ".") && ea === String(q.exp);
    });
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [coeffAns, expAns, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const cv = coeffAns[i] ?? ""; const ev = expAns[i] ?? "";
            const wrong = validated && revealCorrection && !results[i];
            const coeffEl = wrong ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{cv || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.coeff}</span>
              </div>
            ) : (
              <input type="text" inputMode="decimal" value={cv} disabled={validated}
                onChange={e => setCoeffAns(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9,.]/g, ""); return n; })}
                className={`${inputBase} py-1.5`}
              />
            );
            const expEl = wrong ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-10 h-7 inline-flex flex-col items-center justify-center`}
                style={{ position: "relative", top: "-6px" }}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{ev || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.exp}</span>
              </div>
            ) : (
              <input type="text" inputMode="numeric" value={ev} disabled={validated}
                onChange={e => setExpAns(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9\-]/g, ""); return n; })}
                className={`${inputSmall}`}
                style={{ position: "relative", top: "-6px" }}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.display}</span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm inline-flex items-baseline gap-0.5">
                  {coeffEl}
                  <span className="text-[var(--color-text-primary)] mx-1">× 10</span>
                  {expEl}
                </span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── A8.4 Exercise 1: Vrai / Faux ─────────────────────────────────────────────
type SqrtTFQ = { expr: string; answer: boolean };
const SQRT_TF_POOL: SqrtTFQ[] = [
  { expr: "√1 = 1",   answer: true  },
  { expr: "√4 = 2",   answer: true  },
  { expr: "√9 = 3",   answer: true  },
  { expr: "√16 = 4",  answer: true  },
  { expr: "√25 = 5",  answer: true  },
  { expr: "√36 = 6",  answer: true  },
  { expr: "√49 = 7",  answer: true  },
  { expr: "√64 = 8",  answer: true  },
  { expr: "√81 = 9",  answer: true  },
  { expr: "√100 = 10", answer: true },
  { expr: "√4 = 3",   answer: false },
  { expr: "√9 = 4",   answer: false },
  { expr: "√16 = 5",  answer: false },
  { expr: "√25 = 4",  answer: false },
  { expr: "√36 = 7",  answer: false },
  { expr: "√49 = 6",  answer: false },
  { expr: "√64 = 7",  answer: false },
  { expr: "√81 = 8",  answer: false },
  { expr: "√100 = 9", answer: false },
  { expr: "√25 = 6",  answer: false },
];
export function A8SqrtTrueFalseExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<SqrtTFQ[]>(() => {
    const trues  = SQRT_TF_POOL.filter(q => q.answer).sort(() => Math.random() - 0.5);
    const falses = SQRT_TF_POOL.filter(q => !q.answer).sort(() => Math.random() - 0.5);
    const half = Math.floor(count / 2);
    const mixed = [...trues.slice(0, count - half), ...falses.slice(0, half)];
    return mixed.sort(() => Math.random() - 0.5);
  });
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => Array(count).fill(null));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        const res = questions.map((q, i) => answers[i] === q.answer);
        setResults(res); setValidated(true);
        onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
      }
    }
  }, [validateCommand, validated, questions, answers, onValidated]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-3 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const sel = answers[i];
            const isWrong = validated && revealCorrection && !results[i];
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.expr}</span>
                <span className="inline-flex gap-1">
                  {(["Vrai", "Faux"] as const).map(label => {
                    const val = label === "Vrai";
                    const isSelected = sel === val;
                    let cls = "px-3 py-1 rounded-lg border text-xs font-bold transition-colors ";
                    if (validated && revealCorrection) {
                      if (val === q.answer && isSelected) cls += "border-green-500 bg-green-50 text-green-700";
                      else if (val === q.answer && !isSelected) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                      else if (isSelected && isWrong) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                      else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
                    } else {
                      cls += isSelected
                        ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                        : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
                    }
                    return (
                      <button key={label} type="button" disabled={validated}
                        onClick={() => setAnswers(prev => { const n = [...prev]; n[i] = val; return n; })}
                        className={cls}>
                        {label}
                      </button>
                    );
                  })}
                </span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── A8.4 Exercise 2: Calculate √n ────────────────────────────────────────────
const SQRT_POOL = [
  { n: 1, sqrt: 1 }, { n: 4, sqrt: 2 }, { n: 9, sqrt: 3 },
  { n: 16, sqrt: 4 }, { n: 25, sqrt: 5 }, { n: 36, sqrt: 6 },
  { n: 49, sqrt: 7 }, { n: 64, sqrt: 8 }, { n: 81, sqrt: 9 },
  { n: 100, sqrt: 10 }, { n: 121, sqrt: 11 }, { n: 144, sqrt: 12 },
];
type SqrtQ = { n: number; result: number };
export function A8SqrtExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<SqrtQ[]>(() =>
    [...SQRT_POOL].sort(() => Math.random() - 0.5).slice(0, count).map(q => ({ n: q.n, result: q.sqrt }))
  );
  return (
    <PureCalcExercise
      exNum={exNum} questions={questions} promptFr={promptFr}
      validateCommand={validateCommand} onValidated={onValidated}
      renderExpr={q => <span className="font-mono text-sm text-[var(--color-text-primary)]">√{q.n}</span>}
    />
  );
}

// ── A8.4 Exercise 3: Find the missing radicand (√□ = n) ──────────────────────
type SqrtMissingQ = { sqrt: number; result: number };
export function A8SqrtMissingExercise({ exNum, count, promptFr, validateCommand, onValidated }: {
  exNum: number; count: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<SqrtMissingQ[]>(() =>
    [...SQRT_POOL].sort(() => Math.random() - 0.5).slice(0, count).map(q => ({ sqrt: q.sqrt, result: q.n }))
  );
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();
  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.result));
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [answers, questions, onValidated]);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const inputEl = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.result}</span>
              </div>
            ) : (
              <input type="text" inputMode="decimal" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9,.]/g, ""); return n; })}
                className={`${inputBase} py-1.5`}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm inline-flex items-center gap-0.5">
                  <span className="text-[var(--color-text-primary)]">√</span>
                  {inputEl}
                </span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm font-bold text-[var(--color-accent-alg)]">{q.sqrt}</span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// A8.5 — Priorité des opérations exercises
// ═══════════════════════════════════════════════════════════════════════════════

type OpCalcQ = { id: string; expr: string; answer: number };

function A8OpCalcGrid({ exNum, promptFr, questions, validateCommand, onValidated }: {
  exNum: number; promptFr?: string; questions: OpCalcQ[];
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const count = questions.length;
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    const res = questions.map((q, i) => (answers[i] ?? "").trim() === String(q.answer));
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [answers, questions, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const rightField = validated && revealCorrection && results[i];
            const inputEl = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span>
              </div>
            ) : (
              <input type="text" inputMode="numeric" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9]/g, ""); return n; })}
                style={{ width: 80, height: 36 }}
                className={`rounded-none border-0 border-b-2 px-1 text-center font-mono text-sm outline-none transition-colors ${rightField ? "border-green-500 text-green-700" : "border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]"}`}
              />
            );
            return (
              <Fragment key={q.id}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.expr}</span>
                <span className="text-sm text-[var(--color-text-secondary)]">=</span>
                {inputEl}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Ex1: Simple (no parentheses) ─────────────────────────────────────────────
const OP_EX1: OpCalcQ[] = [
  { id: "op1-1", expr: "8 + 3 × 2",   answer: 14 },
  { id: "op1-2", expr: "15 − 4 × 3",  answer: 3  },
  { id: "op1-3", expr: "20 ÷ 5 + 7",  answer: 11 },
  { id: "op1-4", expr: "10 + 12 ÷ 4", answer: 13 },
];
export function A8OpSimpleExercise(props: {
  exNum: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  return <A8OpCalcGrid {...props} questions={OP_EX1} />;
}

// ── Ex2: Parentheses (pool of 8 → 5 random) ──────────────────────────────────
const OP_EX2_POOL: OpCalcQ[] = [
  { id: "op2-1", expr: "(8 + 3) × 2",             answer: 22 },
  { id: "op2-2", expr: "5 × (12 − 4)",            answer: 40 },
  { id: "op2-3", expr: "(20 ÷ 5) + 7",            answer: 11 },
  { id: "op2-4", expr: "30 − (8 + 5)",            answer: 17 },
  { id: "op2-5", expr: "(8 + 2) × (5 − 3)",       answer: 20 },
  { id: "op2-6", expr: "(12 − 4) × (7 + 1)",      answer: 64 },
  { id: "op2-7", expr: "(15 + 5) ÷ (8 − 4) × 5", answer: 25 },
  { id: "op2-8", expr: "(9 + 3) × (10 − 6) + 5", answer: 53 },
];
export function A8OpParenExercise(props: {
  exNum: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<OpCalcQ[]>(() =>
    [...OP_EX2_POOL].sort(() => Math.random() - 0.5).slice(0, 5)
  );
  return <A8OpCalcGrid {...props} questions={questions} />;
}

// ── Ex3: Brackets [ ] ─────────────────────────────────────────────────────────
const OP_EX3: OpCalcQ[] = [
  { id: "op3-1", expr: "2 × [3 + (4 × 5)]",   answer: 46 },
  { id: "op3-2", expr: "40 − [10 + (8 − 3)]", answer: 25 },
  { id: "op3-3", expr: "[20 − (4 + 6)] × 2",  answer: 20 },
  { id: "op3-4", expr: "5 × [3 + (8 ÷ 2)]",  answer: 35 },
];
export function A8OpBracketExercise(props: {
  exNum: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  return <A8OpCalcGrid {...props} questions={OP_EX3} />;
}

// ── Ex4: Fill in the blank □ ──────────────────────────────────────────────────
type OpFillQ = { id: string; before: string; after: string; result: number; answer: number };
const OP_EX4: OpFillQ[] = [
  { id: "op4-1", before: "5 + ",  after: " × 2",      result: 15, answer: 5  },
  { id: "op4-2", before: "",      after: " × 4 + 3",  result: 19, answer: 4  },
  { id: "op4-3", before: "(",     after: " + 2) × 3", result: 21, answer: 5  },
  { id: "op4-4", before: "20 − ", after: " ÷ 2",      result: 14, answer: 12 },
];
export function A8OpFillExercise({ exNum, promptFr, validateCommand, onValidated }: {
  exNum: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const count = OP_EX4.length;
  const [answers, setAnswers] = useState<string[]>(() => Array(count).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(-1);
  const revealCorrection = useEvalReveal();

  const doValidate = useCallback(() => {
    const res = OP_EX4.map((q, i) => (answers[i] ?? "").trim() === String(q.answer));
    setResults(res); setValidated(true);
    onValidated(res.every(Boolean), res.filter(Boolean).length, res.length);
  }, [answers, onValidated]);

  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prevCmd.current) {
      prevCmd.current = validateCommand; doValidate();
    }
  }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto auto auto", justifyContent: "start" }}>
          {OP_EX4.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && revealCorrection && !results[i];
            const rightField = validated && revealCorrection && results[i];
            const inputEl = wrongField ? (
              <div className={`rounded-none border-0 border-b-2 border-amber-500 w-20 h-9 flex flex-col items-center justify-center`}>
                <span className="text-xs leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.answer}</span>
              </div>
            ) : (
              <input type="text" inputMode="numeric" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value.replace(/[^0-9]/g, ""); return n; })}
                style={{ width: 80, height: 36 }}
                className={`rounded-none border-0 border-b-2 px-1 text-center font-mono text-sm outline-none transition-colors ${rightField ? "border-green-500 text-green-700" : "border-[var(--color-accent-alg)]/60 focus:border-[var(--color-accent-alg)]"}`}
              />
            );
            return (
              <Fragment key={q.id}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.before}</span>
                {inputEl}
                <span className="font-mono text-sm text-[var(--color-text-primary)]">{q.after}</span>
                <span className="text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm font-bold text-[var(--color-accent-alg)]">{q.result}</span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Ex5: Powers and square roots ──────────────────────────────────────────────
const OP_EX5: OpCalcQ[] = [
  { id: "op5-1", expr: "5 + (12 − 4) × 3",    answer: 29 },
  { id: "op5-2", expr: "100 − (18 ÷ 3 + 4²)", answer: 78 },
  { id: "op5-3", expr: "(8 + 7) × (20 − 16)", answer: 60 },
  { id: "op5-4", expr: "√144 + 3² × 2",       answer: 30 },
];
export function A8OpPowSqrtExercise(props: {
  exNum: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  return <A8OpCalcGrid {...props} questions={OP_EX5} />;
}

// ── Ex6: Complex brackets + many terms (pool of 10 → 5 random) ───────────────
const OP_EX6_POOL: OpCalcQ[] = [
  { id: "op6-1",  expr: "[3 + (2 × 4)] × 5 − 2",        answer: 53 },
  { id: "op6-2",  expr: "20 − [5 + (3 × 2)] + 4",       answer: 13 },
  { id: "op6-3",  expr: "2 + [(8 − 3) × 4] ÷ 2 + 6",   answer: 18 },
  { id: "op6-4",  expr: "3 × [7 − (4 − 1)] + 5 − 2",   answer: 15 },
  { id: "op6-5",  expr: "(5 + 3) × [2 + (9 ÷ 3)] − 4", answer: 36 },
  { id: "op6-6",  expr: "4 + [(12 − 4) × 3] ÷ 6 + 2",  answer: 10 },
  { id: "op6-7",  expr: "50 − [(4 + 6) × 3] + 2 × 5",  answer: 30 },
  { id: "op6-8",  expr: "[2 × (3 + 5)] − (4 + 6) ÷ 2", answer: 11 },
  { id: "op6-9",  expr: "3 × [(9 − 5) + (6 ÷ 3)] + 4", answer: 22 },
  { id: "op6-10", expr: "[(15 − 5) ÷ 2] × 4 + 6 − 1",  answer: 25 },
];
export function A8OpComplexExercise(props: {
  exNum: number; promptFr?: string;
  validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [questions] = useState<OpCalcQ[]>(() =>
    [...OP_EX6_POOL].sort(() => Math.random() - 0.5).slice(0, 5)
  );
  return <A8OpCalcGrid {...props} questions={questions} />;
}
