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
  const [questions] = useState<PowerQ[]>(() => Array.from({ length: count }, () => genPowerQ()));
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
  const [questions] = useState<MissingExpQ[]>(() => Array.from({ length: count }, () => genMissingExpQ()));
  return <PureMissingExpExercise exNum={exNum} questions={questions} promptFr={promptFr}
    validateCommand={validateCommand} onValidated={onValidated} />;
}

// ── Ex3: Find the missing base ────────────────────────────────────────────────
type MissingBaseQ = { base: number; exp: number; result: number };
function genMissingBaseQ(): MissingBaseQ {
  const exp = rnd(2, 4); const base = rnd(2, 9);
  return { base, exp, result: base ** exp };
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
  const [questions] = useState<MissingBaseQ[]>(() => Array.from({ length: count }, () => genMissingBaseQ()));
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
