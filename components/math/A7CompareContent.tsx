"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { useEvalReveal } from "@/lib/eval-reveal-context";
import {
  printQuestionsListClass,
  usePrintColumns,
  usePrintQuestionCount,
} from "@/components/print/PrintExerciseLayoutContext";

const CLS_WRONG = "border-amber-400 bg-amber-50 text-amber-700";

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}
function fmtRel(n: number): string {
  if (n === 0) return "0";
  if (n > 0) return `+${n}`;
  return `−${Math.abs(n)}`;
}
function fmtRelDec(n: number): string {
  if (n === 0) return "0";
  const abs = Math.abs(n);
  const str = (Math.round(abs * 10) / 10).toFixed(1).replace(".", ",");
  return n > 0 ? `+${str}` : `−${str}`;
}
function normRel(s: string): number {
  return parseFloat(s.trim().replace(",", ".").replace("−", "-").replace("–", "-").replace(/^\+/, ""));
}

// ── Ex1: Compare ──────────────────────────────────────────────────────────────

type RelCompQ = { a: number; b: number; answer: "<" | "=" | ">" };

function genQuestions(level: 1 | 2, count: number): RelCompQ[] {
  const signsBase: Array<"<" | "=" | ">"> = ["<", "<", ">", ">", "="];
  const signs: Array<"<" | "=" | ">"> = Array.from({ length: count }, (_, i) => signsBase[i % signsBase.length]!);
  for (let i = signs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [signs[i], signs[j]] = [signs[j]!, signs[i]!];
  }
  const range = level === 1 ? 6 : 20;
  return signs.map(answer => {
    let a = 0, b = 0;
    if (answer === "=") { a = rnd(-range, range); b = a; }
    else if (answer === ">") { do { a = rnd(-range, range); b = rnd(-range, range); } while (a <= b); }
    else { do { a = rnd(-range, range); b = rnd(-range, range); } while (a >= b); }
    return { a, b, answer };
  });
}

export function A7CompareExercise({
  exNum, level, validateCommand, onValidated,
}: {
  exNum: number; level: 1 | 2; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const questionCount = usePrintQuestionCount(5);
  const columns = usePrintColumns();
  const [questions] = useState<RelCompQ[]>(() => genQuestions(level, questionCount));
  const [answers, setAnswers] = useState<Array<"<" | "=" | ">" | null>>(() => Array(questionCount).fill(null));
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        setValidated(true);
        onValidated(questions.every((q, i) => answers[i] === q.answer));
      }
    }
  }, [validateCommand, validated, questions, answers, onValidated]);

  const maxAbs = Math.max(...questions.flatMap(q => [Math.abs(q.a), Math.abs(q.b)]));
  const numW = maxAbs >= 10 ? "4ch" : "3ch";

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Comparez les deux nombres.</p>
      <div className={printQuestionsListClass(columns, "space-y-3")}>
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
                if (!validated || !revealCorrection) {
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
                  <button key={sym} type="button" disabled={validated}
                    onClick={() => setAnswers(prev => { const next = [...prev]; next[i] = sym; return next; })}
                    className={cls}>{sym}</button>
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

// ── Ex2/3/4: Number select (gt / lt / between) ────────────────────────────────

type RelNSMode = "gt" | "lt" | "between";

function genRelNS(mode: RelNSMode) {
  let threshold: number, threshold2: number | undefined;
  if (mode === "between") {
    threshold = rnd(-15, 12);
    threshold2 = threshold + rnd(4, 8);
  } else {
    threshold = rnd(-18, 18);
  }
  const all = Array.from({ length: 41 }, (_, i) => i - 20);
  const correct = all.filter(n =>
    mode === "gt" ? n > threshold : mode === "lt" ? n < threshold : n > threshold && n < threshold2!
  );
  const wrong = all.filter(n =>
    mode === "gt" ? n <= threshold : mode === "lt" ? n >= threshold : n <= threshold || n >= threshold2!
  );
  const nC = Math.min(rnd(5, 9), correct.length);
  return {
    threshold, threshold2,
    numbers: shuffle([...shuffle(correct).slice(0, nC), ...shuffle(wrong).slice(0, 15 - nC)]),
  };
}

export function A7RelNumberSelectExercise({
  exNum, mode, validateCommand, onValidated,
}: {
  exNum: number; mode: RelNSMode; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [cfg] = useState(() => genRelNS(mode));
  const [sel, setSel] = useState<boolean[]>(() => Array(15).fill(false));
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        setValidated(true);
        const { threshold: t, threshold2: t2, numbers } = cfg;
        const ok = numbers.every((n, i) => {
          const should = mode === "gt" ? n > t : mode === "lt" ? n < t : n > t && n < t2!;
          return (sel[i] ?? false) === should;
        });
        onValidated(ok);
      }
    }
  }, [validateCommand, validated, cfg, sel, mode, onValidated]);

  const { threshold: t, threshold2: t2, numbers } = cfg;
  const consigne =
    mode === "gt" ? `Sélectionnez les nombres plus grands que ${fmtRel(t)}.` :
    mode === "lt" ? `Sélectionnez les nombres plus petits que ${fmtRel(t)}.` :
    `Sélectionnez les nombres compris entre ${fmtRel(t)} et ${fmtRel(t2!)}.`;

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      <div className="grid grid-cols-5 gap-2">
        {numbers.map((n, i) => {
          const isSelected = sel[i] ?? false;
          const should = mode === "gt" ? n > t : mode === "lt" ? n < t : n > t && n < t2!;
          let cls = "rounded-lg border px-2 py-2.5 text-center text-sm font-mono font-bold transition-colors ";
          if (!validated || !revealCorrection) {
            cls += isSelected
              ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
              : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)]";
          } else {
            if (isSelected && should) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
            else if (isSelected && !should) cls += CLS_WRONG;
            else if (!isSelected && should) cls += CLS_WRONG;
            else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-50";
          }
          return (
            <button key={i} type="button" disabled={validated}
              onClick={() => setSel(prev => prev.map((v, j) => j === i ? !v : v))}
              className={cls}>
              {fmtRel(n)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex5: Encadrement (à la dizaine) ──────────────────────────────────────────

type RelEncQ = { n: number; lo: number; hi: number; dir: "<" | ">" };

function genRelEnc(count: number): RelEncQ[] {
  const qs: RelEncQ[] = [];
  for (let i = 0; i < count; i++) {
    let n: number;
    do { n = rnd(-50, 50); } while (n % 10 === 0);
    const lo = Math.floor(n / 10) * 10;
    qs.push({ n, lo, hi: lo + 10, dir: Math.random() < 0.5 ? "<" : ">" });
  }
  return qs;
}

export function A7RelEncadrementExercise({
  exNum, validateCommand, onValidated,
}: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const questionCount = usePrintQuestionCount(5);
  const columns = usePrintColumns();
  const [questions] = useState(() => genRelEnc(questionCount));
  const [answers, setAnswers] = useState<Array<{ lo: string; hi: string }>>(() => questions.map(() => ({ lo: "", hi: "" })));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>(() => questions.map(() => false));
  const prevCmd = useRef(0);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        setValidated(true);
        const res = questions.map((q, i) => normRel(answers[i]!.lo) === q.lo && normRel(answers[i]!.hi) === q.hi);
        setResults(res);
        onValidated(res.every(r => r));
      }
    }
  }, [validateCommand, validated, questions, answers, onValidated]);

  const inpBase = "w-20 px-2 py-1.5 text-sm text-center font-mono rounded-none border-0 border-b-2 outline-none h-[2.125rem] ";
  const inpIdle = inpBase + "border-[var(--color-border-default)] focus:border-[var(--color-accent-alg)]";

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Encadrez chaque nombre à la dizaine près.</p>
      <div className={printQuestionsListClass(columns, "space-y-3")}>
        {questions.map((q, i) => {
          const a = answers[i]!;
          const wrong = validated && revealCorrection && !results[i];
          const { dir } = q;
          const fstKey = dir === "<" ? "lo" as const : "hi" as const;
          const sndKey = dir === "<" ? "hi" as const : "lo" as const;
          const fstExp = dir === "<" ? q.lo : q.hi;
          const sndExp = dir === "<" ? q.hi : q.lo;
          const mkInput = (key: "lo" | "hi", exp: number) =>
            wrong ? (
              <div className={`${inpBase} rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                <span className="text-xs text-[var(--color-text-primary)] leading-none">{a[key] || "—"}</span>
                <span className="text-xs font-bold text-amber-600 leading-none">{fmtRel(exp)}</span>
              </div>
            ) : (
              <input type="text" inputMode="decimal" value={a[key]} disabled={validated}
                onChange={e => setAnswers(prev => prev.map((v, j) => j === i ? { ...v, [key]: e.target.value.replace(/[^0-9,.\-]/g, "") } : v))}
                className={inpIdle} />
            );
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              {mkInput(fstKey, fstExp)}
              <span className="shrink-0 text-sm font-bold text-[var(--color-text-secondary)]">{dir}</span>
              <span className="w-14 shrink-0 text-center font-mono text-sm text-[var(--color-text-primary)]">{fmtRel(q.n)}</span>
              <span className="shrink-0 text-sm font-bold text-[var(--color-text-secondary)]">{dir}</span>
              {mkInput(sndKey, sndExp)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex6: Ordering (1 série entiers, 1 série décimaux) ─────────────────────────

export function A7RelOrderingExercise({
  exNum, validateCommand, onValidated,
}: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const columns = usePrintColumns();
  const [groups] = useState(() => {
    const posI = shuffle(Array.from({ length: 20 }, (_, i) => i + 1)).slice(0, 2);
    const negI = shuffle(Array.from({ length: 20 }, (_, i) => -(i + 1))).slice(0, 2);
    const ints = shuffle([...posI, ...negI]);
    const posD = shuffle(Array.from({ length: 19 }, (_, i) => Math.round((i + 1) * 5) / 10)).slice(0, 2);
    const negD = shuffle(Array.from({ length: 19 }, (_, i) => -Math.round((i + 1) * 5) / 10)).slice(0, 2);
    const decs = shuffle([...posD, ...negD]);
    return [{ nums: ints, isDec: false }, { nums: decs, isDec: true }];
  });
  const [selected, setSelected] = useState<number[][]>(() => groups.map(() => []));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>(() => groups.map(() => false));
  const prevCmd = useRef(0);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        setValidated(true);
        const res = groups.map((g, gi) => {
          const sorted = [...g.nums].sort((a, b) => a - b);
          const s = selected[gi] ?? [];
          return s.length === sorted.length && s.every((n, i) => Math.abs(n - sorted[i]!) < 0.001);
        });
        setResults(res);
        onValidated(res.every(r => r));
      }
    }
  }, [validateCommand, validated, groups, selected, onValidated]);

  const chipBase = "w-16 flex h-10 items-center justify-center rounded-lg border px-1 text-sm font-mono font-bold transition-colors ";

  const toggle = (gi: number, n: number) => {
    if (validated) return;
    setSelected(prev => {
      const next = prev.map(a => [...a]);
      const cur = next[gi] ?? [];
      next[gi] = cur.some(x => Math.abs(x - n) < 0.001) ? cur.filter(x => Math.abs(x - n) >= 0.001) : [...cur, n];
      return next;
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Classez les nombres dans l&apos;ordre croissant (du plus petit au plus grand).</p>
      <div className={printQuestionsListClass(columns, "space-y-6")}>
        {groups.map((g, gi) => {
          const s = selected[gi] ?? [];
          const available = g.nums.filter(n => !s.some(x => Math.abs(x - n) < 0.001));
          const sorted = [...g.nums].sort((a, b) => a - b);
          const fmt = (n: number) => g.isDec ? fmtRelDec(n) : fmtRel(n);
          const ok = validated && revealCorrection ? results[gi] : null;
          return (
            <div key={gi} className="space-y-3">
              {available.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {available.map((n, ni) => (
                    <button key={ni} type="button" disabled={validated} onClick={() => toggle(gi, n)}
                      className={chipBase + "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] cursor-pointer"}>
                      {fmt(n)}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex min-h-[48px] flex-wrap items-center gap-1.5 border-b-2 border-[var(--color-accent-alg)] pb-1">
                <span className="shrink-0 mr-1 text-xs font-bold text-[var(--color-accent-alg)]">{gi + 1}.</span>
                {s.map((n, si) => (
                  <Fragment key={si}>
                    <button type="button" disabled={validated} onClick={() => toggle(gi, n)}
                      className={chipBase + "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white cursor-pointer"}>
                      {fmt(n)}
                    </button>
                    {si < s.length - 1 && <span className="text-sm font-bold text-[var(--color-text-secondary)]">{"<"}</span>}
                  </Fragment>
                ))}
              </div>
              {validated && ok === false && (
                <div className="flex flex-wrap items-center gap-1">
                  <span className="text-xs font-bold text-amber-600 mr-1">Ordre correct :</span>
                  {sorted.map((n, si) => (
                    <Fragment key={si}>
                      <span className="font-mono text-sm font-bold text-amber-700">{fmt(n)}</span>
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

// ── Ex7/8: Seq complete (entiers / décimaux) ──────────────────────────────────

type RelSeqQ = { allNums: number[]; blankIdxs: number[] };

function genRelSeqInt(count: number): RelSeqQ[] {
  return Array.from({ length: count }, () => {
    const step = rnd(1, 5) * (Math.random() < 0.5 ? 1 : -1);
    const start = rnd(-25, 25);
    const allNums = Array.from({ length: 5 }, (_, i) => start + i * step);
    return { allNums, blankIdxs: shuffle([1, 2, 3, 4]).slice(0, rnd(2, 3)).sort((a, b) => a - b) };
  });
}

function genRelSeqDec(count: number): RelSeqQ[] {
  return Array.from({ length: count }, () => {
    const stepAbs = Math.random() < 0.5 ? 0.5 : 1.0;
    const step = stepAbs * (Math.random() < 0.5 ? 1 : -1);
    const start = rnd(-20, 20) * 0.5;
    const allNums = Array.from({ length: 5 }, (_, i) => Math.round((start + i * step) * 10) / 10);
    return { allNums, blankIdxs: shuffle([1, 2, 3, 4]).slice(0, rnd(2, 3)).sort((a, b) => a - b) };
  });
}

export function A7RelSeqCompleteExercise({
  exNum, isDecimal, validateCommand, onValidated,
}: {
  exNum: number; isDecimal: boolean; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const questionCount = usePrintQuestionCount(5);
  const columns = usePrintColumns();
  const [questions] = useState<RelSeqQ[]>(() => isDecimal ? genRelSeqDec(questionCount) : genRelSeqInt(questionCount));
  const [answers, setAnswers] = useState<string[][]>(() => questions.map(q => q.blankIdxs.map(() => "")));
  const [validated, setValidated] = useState(false);
  const prevCmd = useRef(0);
  const revealCorrection = useEvalReveal();

  useEffect(() => {
    if (validateCommand > prevCmd.current) {
      prevCmd.current = validateCommand;
      if (!validated) {
        setValidated(true);
        onValidated(questions.every((q, qi) =>
          q.blankIdxs.every((bi, ii) => Math.abs(normRel(answers[qi]?.[ii] ?? "") - q.allNums[bi]!) < 0.001)
        ));
      }
    }
  }, [validateCommand, validated, questions, answers, onValidated]);

  const fmt = (n: number) => isDecimal ? fmtRelDec(n) : fmtRel(n);
  const cellW = "w-14 shrink-0 h-9";
  const inpCls = `${cellW} px-0.5 text-xs text-center font-mono rounded-none border-0 border-b-2 border-[var(--color-border-default)] outline-none focus:border-[var(--color-accent-alg)]`;

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites de nombres.</p>
      <div className={printQuestionsListClass(columns, "space-y-5")}>
        {questions.map((q, qi) => {
          let bc = 0;
          return (
            <div key={qi} className="flex items-center gap-1 flex-wrap">
              <span className="shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{qi + 1}.</span>
              {q.allNums.map((n, ni) => {
                const blankIdx = q.blankIdxs.indexOf(ni);
                if (blankIdx !== -1) {
                  const bIdx = bc++;
                  const v = answers[qi]?.[bIdx] ?? "";
                  const wrong = validated && revealCorrection && Math.abs(normRel(v) - n) >= 0.001;
                  return wrong ? (
                    <div key={ni} className={`${cellW} rounded-none border-0 border-b-2 border-amber-500 flex flex-col items-center justify-center`}>
                      <span className="text-xs text-[var(--color-text-primary)] leading-none">{v || "—"}</span>
                      <span className="text-xs font-bold text-amber-600 leading-none">{fmt(n)}</span>
                    </div>
                  ) : (
                    <input key={ni} type="text" inputMode="decimal" value={v} disabled={validated}
                      onChange={e => setAnswers(prev => {
                        const next = prev.map(r => [...r]);
                        if (!next[qi]) next[qi] = [];
                        next[qi]![bIdx] = e.target.value.replace(/[^0-9,.\-]/g, "");
                        return next;
                      })}
                      className={inpCls} />
                  );
                }
                return (
                  <span key={ni} className={`${cellW} flex items-center justify-center rounded-lg border border-[var(--color-border-default)] font-mono text-xs font-bold text-[var(--color-text-primary)]`}>
                    {fmt(n)}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
