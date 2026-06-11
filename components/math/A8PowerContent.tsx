"use client";

import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";

const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

const SUPS = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const toSup = (n: number) => String(n).split("").map(d => SUPS[parseInt(d)]).join("");

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const inputBase = "w-20 h-9 rounded border px-1 text-center font-mono text-sm outline-none transition-colors";
const inputSmall = "w-10 h-7 rounded border px-0.5 text-center font-mono text-xs outline-none transition-colors";

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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center justify-items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && !results[i];
            const inputEl = wrongField ? (
              <div className={`${inputBase} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.result}</span>
              </div>
            ) : (
              <input type="text" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputBase} py-1.5 border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
              />
            );
            return (
              <React.Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{q.base}{toSup(q.exp)}</span>
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && !results[i];
            const expInput = wrongField ? (
              <div className={`${inputSmall} ${CLS_WRONG} flex flex-col items-center justify-center`}
                style={{ position: "relative", top: "-6px" }}>
                <span className="line-through text-amber-500 text-[10px] leading-none">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-[10px] font-bold leading-none">{q.exp}</span>
              </div>
            ) : (
              <input type="text" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputSmall} border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
                style={{ position: "relative", top: "-6px" }}
              />
            );
            return (
              <React.Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="inline-flex items-center font-mono text-sm font-bold text-[var(--color-text-primary)]">
                  {q.base}{expInput}
                </span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{q.result}</span>
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && !results[i];
            const baseInput = wrongField ? (
              <div className={`${inputBase} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.base}</span>
              </div>
            ) : (
              <input type="text" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputBase} py-1.5 border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
              />
            );
            return (
              <React.Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="inline-flex items-start font-mono text-sm font-bold text-[var(--color-text-primary)]">
                  {baseInput}
                  <span className="font-bold text-[10px] text-[var(--color-accent-alg)]"
                    style={{ position: "relative", top: "-6px", marginLeft: "1px" }}>{q.exp}</span>
                </span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{q.result}</span>
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4 space-y-3">
        {questions.map((q, i) => {
          const sel = answers[i];
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="shrink-0 font-mono text-sm font-bold text-[var(--color-text-primary)]">
                {q.base1}{toSup(q.exp1)}
              </span>
              <div className="flex shrink-0 gap-1">
                {(["<", "=", ">"] as const).map(sym => {
                  const isSelected = sel === sym;
                  const isCorrect = sym === q.answer;
                  let cls = "h-8 w-8 shrink-0 rounded border text-sm font-bold transition-colors ";
                  if (!validated) {
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
              <span className="shrink-0 font-mono text-sm font-bold text-[var(--color-text-primary)]">
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="space-y-6">
        {groups.map((g, gi) => {
          const sel = selected[gi] ?? [];
          const available = g.powers.filter(p => !sel.includes(p.value));
          const sorted = [...g.powers].sort((a, b) => a.value - b.value);
          const ok = validated ? results[gi] : null;
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && !results[i];
            const inputEl = wrongField ? (
              <div className={`${inputBase} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.result}</span>
              </div>
            ) : (
              <input type="text" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputBase} py-1.5 border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm font-bold">{renderExpr(q)}</span>
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && !results[i];
            const expInput = wrongField ? (
              <div className={`${inputSmall} ${CLS_WRONG} inline-flex flex-col items-center justify-center`}
                style={{ position: "relative", top: "-6px" }}>
                <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.answer}</span>
              </div>
            ) : (
              <input type="text" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputSmall} border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
                style={{ position: "relative", top: "-6px" }}
              />
            );
            const lhsNode = q.type === "mult" ? (
              <span className="font-mono text-sm font-bold">
                <PowSpan b={q.base} e={q.known} />
                <span className="text-[var(--color-text-primary)]"> × </span>
                <span className="text-[var(--color-text-primary)]">{q.base}</span>{expInput}
              </span>
            ) : q.type === "div" ? (
              <span className="font-mono text-sm font-bold">
                <PowSpan b={q.base} e={q.lhs} />
                <span className="text-[var(--color-text-primary)]"> ÷ </span>
                <span className="text-[var(--color-text-primary)]">{q.base}</span>{expInput}
              </span>
            ) : (
              <span className="font-mono text-sm font-bold">
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
                <span className="font-mono text-sm font-bold"><PowSpan b={q.base} e={rhsExp} /></span>
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && !results[i];
            const inputEl = wrongField ? (
              <div className={`${inputBase} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.result}</span>
              </div>
            ) : (
              <input type="text" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputBase} py-1.5 border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm font-bold">
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
    <div className={`${inputSmall} ${CLS_WRONG} inline-flex flex-col items-center justify-center`}
      style={{ position: "relative", top: "-6px" }}>
      <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
      <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{correct}</span>
    </div>
  ) : (
    <input type="text" value={val} disabled={validated}
      onChange={e => onChange(e.target.value)}
      className={`${inputSmall} border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => (
            <Fragment key={i}>
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{q.value}</span>
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
              <span className="font-mono text-sm font-bold">
                <span className="text-[var(--color-text-primary)]">10</span>
                <ExpInput val={answers[i] ?? ""} correct={q.exp} validated={validated}
                  wrong={validated && !results[i]}
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => (
            <Fragment key={i}>
              <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono text-sm font-bold">
                <span className="text-[var(--color-text-primary)]">10</span>
                <ExpInput val={answers[i] ?? ""} correct={q.exp} validated={validated}
                  wrong={validated && !results[i]}
                  onChange={v => setAnswers(prev => { const n = [...prev]; n[i] = v; return n; })} />
              </span>
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
              <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{q.value}</span>
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const val = answers[i] ?? "";
            const wrongField = validated && !results[i];
            const inputEl = wrongField ? (
              <div className={`${inputBase} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="line-through text-amber-500 text-xs leading-none">{val || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.result}</span>
              </div>
            ) : (
              <input type="text" value={val} disabled={validated}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputBase} py-1.5 border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{q.display}</span>
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
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
        {promptFr && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{promptFr}</p>}
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-4">
        <div className="grid items-center gap-x-2 gap-y-3"
          style={{ gridTemplateColumns: "auto auto auto auto", justifyContent: "start" }}>
          {questions.map((q, i) => {
            const cv = coeffAns[i] ?? ""; const ev = expAns[i] ?? "";
            const wrong = validated && !results[i];
            const coeffEl = wrong ? (
              <div className={`${inputBase} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="line-through text-amber-500 text-xs leading-none">{cv || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.coeff}</span>
              </div>
            ) : (
              <input type="text" value={cv} disabled={validated}
                onChange={e => setCoeffAns(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputBase} py-1.5 border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
              />
            );
            const expEl = wrong ? (
              <div className={`${inputSmall} ${CLS_WRONG} inline-flex flex-col items-center justify-center`}
                style={{ position: "relative", top: "-6px" }}>
                <span className="line-through text-amber-500 text-xs leading-none">{ev || "—"}</span>
                <span className="text-[var(--color-text-primary)] text-xs font-bold leading-none">{q.exp}</span>
              </div>
            ) : (
              <input type="text" value={ev} disabled={validated}
                onChange={e => setExpAns(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                className={`${inputSmall} border-[var(--color-border-default)] bg-blue-50 dark:bg-blue-950/30 focus:border-[var(--color-accent-alg)]`}
                style={{ position: "relative", top: "-6px" }}
              />
            );
            return (
              <Fragment key={i}>
                <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
                <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{q.display}</span>
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">=</span>
                <span className="font-mono text-sm font-bold inline-flex items-baseline gap-0.5">
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
