"use client";
import React, { useEffect, useState, Fragment } from "react";

type ValidatedProps = {
  validateCommand: number;
  onValidated: (ok: boolean, correct?: number, total?: number) => void;
  exNum: number;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

type FracStatus = "idle" | "correct" | "wrong";

function FracInput({ numVal, denVal, onNum, onDen, status, disabled, correctNum, correctDen }: {
  numVal: string; denVal: string;
  onNum: (v: string) => void; onDen: (v: string) => void;
  status: FracStatus; disabled: boolean;
  correctNum?: string; correctDen?: string;
}) {
  const iCls = (st: FracStatus) => `w-12 h-8 rounded-xl border px-1 text-sm text-center outline-none transition-colors ${
    st === "correct"
      ? "border-green-400 bg-green-50 dark:bg-green-950/20"
      : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"
  }`;
  const wrongBox = (val: string, correct?: string) => (
    <span className="w-12 h-8 rounded-xl border border-amber-400 px-1 flex flex-col items-center justify-center">
      <span className="text-[10px] text-zinc-700 dark:text-zinc-300 tabular-nums leading-none">{val || "—"}</span>
      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tabular-nums leading-none">{correct}</span>
    </span>
  );
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle mx-1">
      {status === "wrong" ? wrongBox(numVal, correctNum) : (
        <input type="text" inputMode="numeric" value={numVal} onChange={e => onNum(e.target.value.replace(/[^0-9]/g, ""))} disabled={disabled} className={iCls(status)} />
      )}
      <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
      {status === "wrong" ? wrongBox(denVal, correctDen) : (
        <input type="text" inputMode="numeric" value={denVal} onChange={e => onDen(e.target.value.replace(/[^0-9]/g, ""))} disabled={disabled} className={iCls(status)} />
      )}
    </span>
  );
}

function VFrac({ n, d }: { n: number; d: number }) {
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle mx-1">
      <span className="h-8 flex items-center justify-center text-sm font-bold tabular-nums text-[var(--color-accent-alg)]">{n}</span>
      <span className="h-[1.5px] w-8 rounded bg-[var(--color-text-primary)]" />
      <span className="h-8 flex items-center justify-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{d}</span>
    </span>
  );
}

function checkFracEquiv(numStr: string, denStr: string, pct: number): boolean {
  const n = parseFloat(numStr.replace(",", "."));
  const d = parseFloat(denStr.replace(",", "."));
  if (!isFinite(n) || !isFinite(d) || d === 0) return false;
  return Math.abs(n / d - pct / 100) < 0.001;
}

function normDec(s: string): number {
  return parseFloat(s.replace(",", ".").trim());
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// ── Data pools ───────────────────────────────────────────────────────────────

type PctFracItem = { pct: string; num: number; den: number };
const PCT_TO_FRAC_POOL: PctFracItem[] = [
  { pct: "50", num: 1, den: 2 }, { pct: "25", num: 1, den: 4 }, { pct: "75", num: 3, den: 4 },
  { pct: "10", num: 1, den: 10 }, { pct: "20", num: 1, den: 5 }, { pct: "40", num: 2, den: 5 },
  { pct: "60", num: 3, den: 5 }, { pct: "80", num: 4, den: 5 }, { pct: "100", num: 1, den: 1 },
  { pct: "200", num: 2, den: 1 }, { pct: "5", num: 1, den: 20 }, { pct: "30", num: 3, den: 10 },
  { pct: "70", num: 7, den: 10 }, { pct: "90", num: 9, den: 10 }, { pct: "150", num: 3, den: 2 },
];

type PctDecItem = { pct: string; dec: string };
const PCT_TO_DEC_POOL: PctDecItem[] = [
  { pct: "10%", dec: "0,10" }, { pct: "25%", dec: "0,25" }, { pct: "50%", dec: "0,50" },
  { pct: "75%", dec: "0,75" }, { pct: "20%", dec: "0,20" }, { pct: "40%", dec: "0,40" },
  { pct: "60%", dec: "0,60" }, { pct: "80%", dec: "0,80" }, { pct: "100%", dec: "1,00" },
  { pct: "5%", dec: "0,05" }, { pct: "8%", dec: "0,08" }, { pct: "15%", dec: "0,15" },
  { pct: "30%", dec: "0,30" }, { pct: "35%", dec: "0,35" }, { pct: "70%", dec: "0,70" },
  { pct: "90%", dec: "0,90" }, { pct: "120%", dec: "1,20" }, { pct: "150%", dec: "1,50" },
  { pct: "200%", dec: "2,00" }, { pct: "45%", dec: "0,45" },
];

type FracPctItem = { num: number; den: number; pct: number };
const FRAC_TO_PCT_POOL: FracPctItem[] = [
  { num: 1, den: 2, pct: 50 }, { num: 1, den: 4, pct: 25 }, { num: 3, den: 4, pct: 75 },
  { num: 1, den: 10, pct: 10 }, { num: 1, den: 5, pct: 20 }, { num: 2, den: 5, pct: 40 },
  { num: 3, den: 5, pct: 60 }, { num: 4, den: 5, pct: 80 }, { num: 1, den: 1, pct: 100 },
  { num: 2, den: 1, pct: 200 }, { num: 1, den: 20, pct: 5 }, { num: 3, den: 10, pct: 30 },
  { num: 7, den: 10, pct: 70 }, { num: 9, den: 10, pct: 90 }, { num: 3, den: 2, pct: 150 },
];

type DecPctItem = { dec: string; pct: number };
const DEC_TO_PCT_POOL: DecPctItem[] = [
  { dec: "0,25", pct: 25 }, { dec: "0,5", pct: 50 }, { dec: "0,75", pct: 75 },
  { dec: "0,1", pct: 10 }, { dec: "0,2", pct: 20 }, { dec: "0,4", pct: 40 },
  { dec: "0,6", pct: 60 }, { dec: "0,8", pct: 80 }, { dec: "1", pct: 100 },
  { dec: "2", pct: 200 }, { dec: "0,05", pct: 5 }, { dec: "0,08", pct: 8 },
  { dec: "0,3", pct: 30 }, { dec: "0,35", pct: 35 }, { dec: "0,7", pct: 70 },
  { dec: "0,9", pct: 90 }, { dec: "1,2", pct: 120 }, { dec: "1,5", pct: 150 },
  { dec: "0,15", pct: 15 }, { dec: "0,45", pct: 45 },
];

type PctOfNumItem = { pct: number; num: number; ans: number };
const PCT_OF_NUM_POOL: PctOfNumItem[] = [
  { pct: 10, num: 50, ans: 5 }, { pct: 20, num: 150, ans: 30 }, { pct: 25, num: 200, ans: 50 },
  { pct: 50, num: 80, ans: 40 }, { pct: 15, num: 60, ans: 9 }, { pct: 30, num: 90, ans: 27 },
  { pct: 5, num: 60, ans: 3 }, { pct: 40, num: 75, ans: 30 }, { pct: 75, num: 200, ans: 150 },
  { pct: 10, num: 340, ans: 34 }, { pct: 20, num: 45, ans: 9 }, { pct: 25, num: 120, ans: 30 },
  { pct: 50, num: 350, ans: 175 }, { pct: 15, num: 80, ans: 12 }, { pct: 30, num: 120, ans: 36 },
  { pct: 10, num: 250, ans: 25 }, { pct: 20, num: 35, ans: 7 }, { pct: 5, num: 40, ans: 2 },
  { pct: 25, num: 48, ans: 12 }, { pct: 50, num: 130, ans: 65 },
];

type PartToPctItem = { part: number; total: number; pct: number };
const PART_TO_PCT_POOL: PartToPctItem[] = [
  { part: 30, total: 200, pct: 15 }, { part: 75, total: 100, pct: 75 }, { part: 25, total: 50, pct: 50 },
  { part: 18, total: 24, pct: 75 }, { part: 30, total: 120, pct: 25 }, { part: 45, total: 60, pct: 75 },
  { part: 7, total: 20, pct: 35 }, { part: 3, total: 4, pct: 75 }, { part: 6, total: 20, pct: 30 },
  { part: 15, total: 60, pct: 25 }, { part: 12, total: 48, pct: 25 }, { part: 40, total: 80, pct: 50 },
  { part: 36, total: 90, pct: 40 }, { part: 8, total: 40, pct: 20 }, { part: 9, total: 36, pct: 25 },
  { part: 60, total: 150, pct: 40 }, { part: 50, total: 200, pct: 25 },
];

const WRONG_CLS = "w-24 h-9 rounded-xl border border-amber-400 flex flex-col items-center justify-center text-center shrink-0";

const simpleCls = (status: "idle" | "correct" | "wrong") =>
  `w-24 h-9 shrink-0 rounded-xl border px-2 text-sm text-center outline-none transition-colors ${
    status === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20"
    : status === "wrong" ? "border-amber-400 bg-amber-50 text-amber-600 dark:bg-amber-950/20"
    : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"}`;

// ── A6.1 Exercise 1 : % → fraction ──────────────────────────────────────────

export function PctToFracExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => {
    const poolItems = shuffle(PCT_TO_FRAC_POOL).slice(0, 3);
    const used = new Set(poolItems.map(q => q.pct));
    const randoms: PctFracItem[] = [];
    while (randoms.length < 2) {
      const pct = Math.floor(Math.random() * 200) + 1;
      const pctStr = String(pct);
      if (used.has(pctStr)) continue;
      used.add(pctStr);
      const g = gcd(pct, 100);
      randoms.push({ pct: pctStr, num: pct / g, den: 100 / g });
    }
    return [...poolItems, ...randoms];
  });
  type State = { num: string; den: string; status: FracStatus };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ num: "", den: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const ok = checkFracEquiv(s.num, s.den, parseFloat(q.pct));
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  function set(i: number, field: "num" | "den", v: string) {
    setStates(prev => prev.map((s, j) => j === i ? { ...s, [field]: v, status: "idle" } : s));
  }

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Convertissez le pourcentage en fraction.</p>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-4 shrink-0">{i + 1}.</span>
              <span className="text-sm font-semibold text-[var(--color-text-primary)] min-w-[3.5rem]">{q.pct}%</span>
              <span className="text-sm text-[var(--color-text-secondary)]">=</span>
              {s.status === "correct" ? (
                <FracInput numVal={s.num} denVal={s.den} onNum={() => {}} onDen={() => {}} status="correct" disabled />
              ) : s.status === "wrong" ? (
                <FracInput numVal={s.num} denVal={s.den} onNum={() => {}} onDen={() => {}}
                  status="wrong" disabled correctNum={String(q.num)} correctDen={String(q.den)} />
              ) : (
                <FracInput numVal={s.num} denVal={s.den}
                  onNum={v => set(i, "num", v)} onDen={v => set(i, "den", v)}
                  status="idle" disabled={false} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A6.1 Exercise 2 : % → décimal ───────────────────────────────────────────

export function PctToDecExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => {
    const poolItems = shuffle(PCT_TO_DEC_POOL).slice(0, 3);
    const used = new Set(poolItems.map(q => q.pct.replace("%", "")));
    const randoms: PctDecItem[] = [];
    while (randoms.length < 2) {
      const n = Math.floor(Math.random() * 200) + 1;
      const nStr = String(n);
      if (used.has(nStr)) continue;
      used.add(nStr);
      randoms.push({ pct: `${nStr}%`, dec: (n / 100).toFixed(2).replace(".", ",") });
    }
    return [...poolItems, ...randoms];
  });
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const userVal = normDec(s.ans);
      const expected = normDec(q.dec);
      const ok = isFinite(userVal) && Math.abs(userVal - expected) < 0.001;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const inputCls = (status: State["status"]) =>
    `w-24 h-9 shrink-0 rounded-xl border px-2 text-sm text-center outline-none transition-colors ${
      status === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20"
      : status === "wrong" ? "border-amber-400 bg-amber-50 text-amber-600 dark:bg-amber-950/20"
      : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"}`;

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Convertissez le pourcentage en décimal.</p>
      <div className="space-y-3">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-4 shrink-0">{i + 1}.</span>
              <span className="text-sm font-semibold text-[var(--color-text-primary)] min-w-[3.5rem]">{q.pct}</span>
              <span className="text-sm text-[var(--color-text-secondary)]">=</span>
              {s.status === "wrong" ? (
                <div className={WRONG_CLS}>
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.dec}</span>
                </div>
              ) : (
                <input type="text" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value.replace(/[^0-9,.]/g, ""), status: "idle" } : x))}
                  className={inputCls(s.status)} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A6.1 Exercise 3 : fraction → % ──────────────────────────────────────────

export function FracToPctExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => {
    const poolItems = shuffle(FRAC_TO_PCT_POOL).slice(0, 3);
    const used = new Set(poolItems.map(q => q.pct));
    const randoms: FracPctItem[] = [];
    while (randoms.length < 2) {
      const num = Math.floor(Math.random() * 250) + 1;
      if (used.has(num)) continue;
      used.add(num);
      randoms.push({ num, den: 100, pct: num });
    }
    return [...poolItems, ...randoms];
  });
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const userVal = normDec(s.ans.replace("%", "").trim());
      const ok = isFinite(userVal) && Math.abs(userVal - q.pct) < 0.1;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const inputCls = (status: State["status"]) =>
    `w-24 h-9 shrink-0 rounded-xl border px-2 text-sm text-center outline-none transition-colors ${
      status === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20"
      : status === "wrong" ? "border-amber-400 bg-amber-50 text-amber-600 dark:bg-amber-950/20"
      : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"}`;

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Convertissez la fraction en pourcentage.</p>
      <div className="space-y-3">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-4 shrink-0">{i + 1}.</span>
              <VFrac n={q.num} d={q.den} />
              <span className="text-sm text-[var(--color-text-secondary)]">=</span>
              {s.status === "wrong" ? (
                <div className={WRONG_CLS}>
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.pct}%</span>
                </div>
              ) : (
                <input type="text" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value.replace(/[^0-9,.%]/g, ""), status: "idle" } : x))}
                  placeholder="%" className={inputCls(s.status)} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A6.1 Exercise 4 : décimal → % ───────────────────────────────────────────

export function DecToPctExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => {
    const poolItems = shuffle(DEC_TO_PCT_POOL).slice(0, 3);
    const used = new Set(poolItems.map(q => q.pct));
    const randoms: DecPctItem[] = [];
    while (randoms.length < 2) {
      const n = Math.floor(Math.random() * 100) + 1; // 1–100 → dec 0.01–1
      if (used.has(n)) continue;
      used.add(n);
      randoms.push({ dec: (n / 100).toString().replace(".", ","), pct: n });
    }
    return [...poolItems, ...randoms];
  });
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const userVal = normDec(s.ans.replace("%", "").trim());
      const ok = isFinite(userVal) && Math.abs(userVal - q.pct) < 0.1;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const inputCls = (status: State["status"]) =>
    `w-24 h-9 shrink-0 rounded-xl border px-2 text-sm text-center outline-none transition-colors ${
      status === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20"
      : status === "wrong" ? "border-amber-400 bg-amber-50 text-amber-600 dark:bg-amber-950/20"
      : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"}`;

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Convertissez le décimal en pourcentage.</p>
      <div className="space-y-3">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-4 shrink-0">{i + 1}.</span>
              <span className="text-sm font-semibold text-[var(--color-text-primary)] min-w-[3.5rem]">{q.dec}</span>
              <span className="text-sm text-[var(--color-text-secondary)]">=</span>
              {s.status === "wrong" ? (
                <div className={WRONG_CLS}>
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.pct}%</span>
                </div>
              ) : (
                <input type="text" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value.replace(/[^0-9,.%]/g, ""), status: "idle" } : x))}
                  placeholder="%" className={inputCls(s.status)} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A6.2 Exercise 1 : p% de N = ? ───────────────────────────────────────────

export function PctOfNumExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => shuffle(PCT_OF_NUM_POOL).slice(0, 5));
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const userVal = normDec(s.ans);
      const ok = isFinite(userVal) && Math.abs(userVal - q.ans) < 0.01;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Calculez la valeur correspondant au pourcentage indiqué.</p>
      <div className="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-2 gap-y-3 w-fit">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <Fragment key={i}>
              <span className="text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="text-sm text-[var(--color-text-primary)]">{q.pct}% de {q.num}</span>
              <span className="text-sm text-[var(--color-text-primary)]">=</span>
              {s.status === "wrong" ? (
                <div className={WRONG_CLS}>
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.ans}</span>
                </div>
              ) : (
                <input type="text" inputMode="decimal" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value.replace(/[^0-9,.]/g, ""), status: "idle" } : x))}
                  className={simpleCls(s.status)} />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ── A6.3 Exercise 4 : complete the table ─────────────────────────────────────

type PercTableItem = { init: number; final: number; variationNum: number; missing: "init" | "final" | "variation" };
const PERC_TABLE_POOL: PercTableItem[] = [
  { init: 240, final: 300, variationNum: 25,  missing: "variation" },
  { init: 100, final: 80,  variationNum: -20, missing: "variation" },
  { init: 200, final: 250, variationNum: 25,  missing: "variation" },
  { init: 500, final: 600, variationNum: 20,  missing: "variation" },
  { init: 400, final: 360, variationNum: -10, missing: "variation" },
  { init: 150, final: 180, variationNum: 20,  missing: "variation" },
  { init: 360, final: 450, variationNum: 25,  missing: "init"      },
  { init: 200, final: 220, variationNum: 10,  missing: "init"      },
  { init: 400, final: 300, variationNum: -25, missing: "init"      },
  { init: 120, final: 150, variationNum: 25,  missing: "init"      },
  { init: 500, final: 450, variationNum: -10, missing: "init"      },
  { init: 160, final: 200, variationNum: 25,  missing: "init"      },
  { init: 600, final: 510, variationNum: -15, missing: "final"     },
  { init: 200, final: 240, variationNum: 20,  missing: "final"     },
  { init: 80,  final: 60,  variationNum: -25, missing: "final"     },
  { init: 300, final: 330, variationNum: 10,  missing: "final"     },
  { init: 100, final: 150, variationNum: 50,  missing: "final"     },
  { init: 250, final: 200, variationNum: -20, missing: "final"     },
];

export function PctTableExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => {
    const varItems   = shuffle(PERC_TABLE_POOL.filter(q => q.missing === "variation"));
    const initItems  = shuffle(PERC_TABLE_POOL.filter(q => q.missing === "init"));
    const finalItems = shuffle(PERC_TABLE_POOL.filter(q => q.missing === "final"));
    const rest = shuffle([...varItems.slice(1), ...initItems.slice(1), ...finalItems.slice(1)]);
    return shuffle([varItems[0]!, initItems[0]!, finalItems[0]!, ...rest.slice(0, 2)]);
  });
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      let ok = false;
      if (q.missing === "variation") {
        const v = normDec(s.ans.replace(/%/g, ""));
        ok = isFinite(v) && Math.abs(v - q.variationNum) < 0.1;
      } else {
        const target = q.missing === "init" ? q.init : q.final;
        const v = normDec(s.ans);
        ok = isFinite(v) && Math.abs(v - target) < 0.01;
      }
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  const fmtVar = (v: number) => v > 0 ? `+${v}%` : `${v}%`;

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Complétez les valeurs manquantes.</p>
      <div className="grid grid-cols-[auto_auto_auto_auto] items-center justify-items-center gap-x-[10px] gap-y-3 w-fit">
        <span />
        <span className="text-xs font-bold text-[var(--color-accent-alg)] pb-1">Valeur initiale</span>
        <span className="text-xs font-bold text-[var(--color-accent-alg)] pb-1">Valeur finale</span>
        <span className="text-xs font-bold text-[var(--color-accent-alg)] pb-1">Variation</span>
        {questions.map((q, i) => {
          const s = states[i]!;
          const ansStr = q.missing === "init" ? String(q.init)
                       : q.missing === "final" ? String(q.final)
                       : fmtVar(q.variationNum);
          const cell = (col: "init" | "final" | "variation") => {
            if (q.missing === col) {
              return s.status === "wrong" ? (
                <div className={WRONG_CLS}>
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{ansStr}</span>
                </div>
              ) : (
                <input type="text" inputMode={col === "variation" ? "text" : "decimal"} value={s.ans}
                  disabled={s.status === "correct"}
                  onChange={e => {
                    const filtered = col === "variation" ? e.target.value.replace(/[^0-9,.%+\-]/g, "") : e.target.value.replace(/[^0-9,.]/g, "");
                    setStates(prev => prev.map((x, j) => j === i ? { ans: filtered, status: "idle" } : x));
                  }}
                  className={simpleCls(s.status)} />
              );
            }
            const display = col === "init" ? String(q.init) : col === "final" ? String(q.final) : fmtVar(q.variationNum);
            return <span className="text-sm text-[var(--color-text-primary)]">{display}</span>;
          };
          return (
            <Fragment key={i}>
              <span className="text-sm font-bold text-[var(--color-accent-alg)] justify-self-start">{i + 1}.</span>
              {cell("init")}
              {cell("final")}
              {cell("variation")}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ── A6.3 shared pool ─────────────────────────────────────────────────────────

type PctChangeItem = { base: number; op: "+" | "-"; pct: number; ans: number; diff: number };
const PCT_CHANGE_POOL: PctChangeItem[] = [
  { base: 100, op: "+", pct: 10, ans: 110, diff: 10  }, { base: 100, op: "+", pct: 20, ans: 120, diff: 20  },
  { base: 100, op: "+", pct: 50, ans: 150, diff: 50  }, { base: 200, op: "+", pct: 10, ans: 220, diff: 20  },
  { base: 200, op: "+", pct: 25, ans: 250, diff: 50  }, { base: 80,  op: "+", pct: 25, ans: 100, diff: 20  },
  { base: 150, op: "+", pct: 20, ans: 180, diff: 30  }, { base: 50,  op: "+", pct: 20, ans: 60,  diff: 10  },
  { base: 400, op: "+", pct: 5,  ans: 420, diff: 20  }, { base: 160, op: "+", pct: 25, ans: 200, diff: 40  },
  { base: 100, op: "-", pct: 10, ans: 90,  diff: 10  }, { base: 100, op: "-", pct: 20, ans: 80,  diff: 20  },
  { base: 200, op: "-", pct: 25, ans: 150, diff: 50  }, { base: 200, op: "-", pct: 50, ans: 100, diff: 100 },
  { base: 80,  op: "-", pct: 25, ans: 60,  diff: 20  }, { base: 150, op: "-", pct: 20, ans: 120, diff: 30  },
  { base: 50,  op: "-", pct: 10, ans: 45,  diff: 5   }, { base: 400, op: "-", pct: 5,  ans: 380, diff: 20  },
  { base: 300, op: "-", pct: 30, ans: 210, diff: 90  }, { base: 160, op: "-", pct: 25, ans: 120, diff: 40  },
];

function pickMixed(pool: PctChangeItem[]): PctChangeItem[] {
  const plus  = shuffle(pool.filter(q => q.op === "+"));
  const minus = shuffle(pool.filter(q => q.op === "-"));
  const nPlus = Math.random() < 0.5 ? 3 : 2;
  return shuffle([...plus.slice(0, nPlus), ...minus.slice(0, 5 - nPlus)]);
}

function A63Grid({ questions, states, setStates, ansKey }: {
  questions: PctChangeItem[];
  states: { ans: string; status: "idle" | "correct" | "wrong" }[];
  setStates: React.Dispatch<React.SetStateAction<{ ans: string; status: "idle" | "correct" | "wrong" }[]>>;
  ansKey: "ans" | "diff";
}) {
  return (
    <div className="grid grid-cols-[auto_auto_auto_auto_auto_auto] items-center gap-x-2 gap-y-4 w-fit">
      {questions.map((q, i) => {
        const s = states[i]!;
        const correct = q[ansKey];
        return (
          <Fragment key={i}>
            <span className="text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="text-sm text-[var(--color-text-primary)]">{q.base}</span>
            <span className="text-sm text-[var(--color-text-primary)]">{q.op}</span>
            <span className="text-sm text-[var(--color-text-primary)]">{q.pct}%</span>
            <span className="text-sm text-[var(--color-text-primary)]">=</span>
            {s.status === "wrong" ? (
              <div className={WRONG_CLS}>
                <span className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-none">{s.ans || "—"}</span>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{correct}</span>
              </div>
            ) : (
              <input type="text" inputMode="decimal" value={s.ans} disabled={s.status === "correct"}
                onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value.replace(/[^0-9,.]/g, ""), status: "idle" } : x))}
                className={simpleCls(s.status)} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

// ── A6.3 Exercise 1 : de combien la valeur change ? ──────────────────────────

export function PctDiffExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => pickMixed(PCT_CHANGE_POOL));
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const userVal = normDec(s.ans);
      const ok = isFinite(userVal) && Math.abs(userVal - q.diff) < 0.01;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">De combien la valeur augmente ou diminue ?</p>
      <A63Grid questions={questions} states={states} setStates={setStates} ansKey="diff" />
    </div>
  );
}

// ── A6.3 Exercise 2 : valeur finale ──────────────────────────────────────────

export function PctChangeExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => pickMixed(PCT_CHANGE_POOL));
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const userVal = normDec(s.ans);
      const ok = isFinite(userVal) && Math.abs(userVal - q.ans) < 0.01;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Calculez les valeurs finales.</p>
      <A63Grid questions={questions} states={states} setStates={setStates} ansKey="ans" />
    </div>
  );
}

// ── A6.3 Exercise 3 : quel coefficient ? ─────────────────────────────────────

type PctMultBase = { dir: "+" | "-"; pct: number };
const PCT_MULT_POOL: PctMultBase[] = [
  { dir: "+", pct: 5 }, { dir: "+", pct: 10 }, { dir: "+", pct: 15 }, { dir: "+", pct: 20 },
  { dir: "+", pct: 25 }, { dir: "+", pct: 30 }, { dir: "+", pct: 40 }, { dir: "+", pct: 50 },
  { dir: "-", pct: 5 }, { dir: "-", pct: 10 }, { dir: "-", pct: 15 }, { dir: "-", pct: 20 },
  { dir: "-", pct: 25 }, { dir: "-", pct: 30 }, { dir: "-", pct: 40 }, { dir: "-", pct: 50 },
];

type PctMultItem = PctMultBase & { correct: string; options: string[] };
type MultState = { choice: string | null; status: "idle" | "correct" | "wrong" };

export function PctMultiplierExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const fmt = (n: number) => n.toFixed(2).replace(".", ",").replace(/0+$/, "").replace(/,$/, "");
  const [questions] = useState((): PctMultItem[] => {
    const plus  = shuffle(PCT_MULT_POOL.filter(q => q.dir === "+"));
    const minus = shuffle(PCT_MULT_POOL.filter(q => q.dir === "-"));
    const nPlus = Math.random() < 0.5 ? 3 : 2;
    const selected = shuffle([...plus.slice(0, nPlus), ...minus.slice(0, 5 - nPlus)]);
    return selected.map(({ dir, pct }) => {
      const cPlus  = 1 + pct / 100;
      const cMinus = 1 - pct / 100;
      const correct = dir === "+" ? `× ${fmt(cPlus)}` : `× ${fmt(cMinus)}`;
      const wrong1  = `× ${fmt(pct / 100)}`;
      const wrong2  = dir === "+" ? `× ${fmt(cMinus)}` : `× ${fmt(cPlus)}`;
      const wrong3  = dir === "+" ? `÷ ${fmt(cPlus)}`  : `÷ ${fmt(cMinus)}`;
      return { dir, pct, correct, options: shuffle([correct, wrong1, wrong2, wrong3]) };
    });
  });
  const [states, setStates] = useState<MultState[]>(() => questions.map(() => ({ choice: null, status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const ok = s.choice === q.correct;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as MultState;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Quelle opération faut-il effectuer ?</p>
      <div className="grid grid-cols-[auto_1fr] items-start gap-x-3 gap-y-4">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <Fragment key={i}>
              <span className="text-sm font-bold text-[var(--color-accent-alg)] pt-0.5">{i + 1}.</span>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-[var(--color-text-primary)]">
                  La valeur {q.dir === "+" ? "augmente" : "diminue"} de {q.pct}%
                </span>
                <div className="flex gap-2 flex-wrap">
                  {q.options.map(opt => {
                    const isSel = s.choice === opt;
                    const isCor = opt === q.correct;
                    let cls = "w-20 text-center py-1 rounded-xl text-sm border transition-colors ";
                    if (s.status === "idle") {
                      cls += isSel
                        ? "border-[var(--color-accent-alg)] bg-blue-100 dark:bg-blue-950/40"
                        : "border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 cursor-pointer hover:border-[var(--color-accent-alg)]/60";
                    } else if (s.status === "correct") {
                      cls += isSel
                        ? "border-green-400 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400"
                        : "border-zinc-200 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-400";
                    } else {
                      if (isSel)       cls += "border-[var(--color-accent-alg)] bg-blue-100 dark:bg-blue-950/40";
                      else if (isCor)  cls += "border-amber-400 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 font-bold";
                      else             cls += "border-zinc-200 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-400";
                    }
                    return (
                      <button key={opt} disabled={s.status !== "idle"}
                        onClick={() => setStates(prev => prev.map((x, j) => j === i ? { choice: opt, status: "idle" } : x))}
                        className={cls}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ── A6.3 Exercise 5 : word problems ──────────────────────────────────────────

const rnd = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]!;

const T1_PAIRS: [number, number][] = [
  [100,10],[100,20],[100,25],[100,50],[200,10],[200,20],[200,25],[200,50],
  [80,25],[80,50],[120,25],[120,50],[150,20],[150,40],[40,25],[60,50],
  [300,10],[400,25],[500,20],[250,40],[160,25],[240,25],[50,20],[50,40],
];
const T2_COMBOS: [number, number][] = [
  [25,100],[50,100],[75,100],[30,120],[15,60],[40,200],[20,80],[24,120],
  [10,40],[12,48],[45,180],[16,80],[35,140],[6,24],[18,90],[80,400],
  [25,50],[12,60],[9,45],[30,75],[45,60],[14,56],[60,240],[15,75],
];

type WordProbResult = { text: string; ans: number; pctAnswer: boolean };
const WORD_TEMPLATES: Array<{ pType: 1|2|3|4; gen: () => WordProbResult }> = [
  // ── Type 1 simple ──
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une classe a ${N} élèves. ${p}% mangent à la cantine. Combien d'élèves mangent à la cantine ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Dans un panier de ${N} fruits, ${p}% sont des pommes. Combien y a-t-il de pommes ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Dans une classe de ${N} élèves, ${p}% ont eu la moyenne. Combien d'élèves ont eu la moyenne ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un magasin a ${N} articles. ${p}% sont en promotion. Combien d'articles sont en promotion ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un quiz contient ${N} questions. Tu réponds correctement à ${p}% des questions. Combien de bonnes réponses as-tu ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une bibliothèque a ${N} livres. ${p}% sont des romans. Combien de romans y a-t-il ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un parking a ${N} places. ${p}% sont occupées. Combien de places sont occupées ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une équipe a ${N} joueurs. ${p}% sont blessés. Combien de joueurs sont blessés ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un article coûte ${N} CHF. La réduction est de ${p}%. Quel est le montant de la réduction en CHF ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une piscine contient ${N} litres. ${p}% de l'eau s'est évaporée. Combien de litres se sont évaporés ?`, ans:N*p/100, pctAnswer:false }; } },
  // ── Type 1 complex ──
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un restaurant a servi ${N} repas cette semaine. ${p}% étaient des pizzas, le reste des pâtes. Combien de pizzas ont été servies ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Le budget mensuel d'une famille est de ${N} CHF. Ils dépensent ${p}% en loyer. Quel est le montant du loyer ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une forêt couvre ${N} hectares. ${p}% ont été touchés par un incendie. Quelle superficie a brûlé ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une usine produit ${N} pièces par jour. En raison d'une panne, ${p}% des pièces sont défectueuses. Combien de pièces sont défectueuses ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`L'école compte ${N} élèves. ${p}% participent au club de sport après les cours. Combien d'élèves font du sport ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une ville a reçu ${N} touristes cet été. ${p}% venaient de France. Combien de touristes venaient de France ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un commerce a réalisé ${N} ventes ce mois. ${p}% ont été payées par carte. Combien de ventes ont été payées par carte ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un jardin couvre ${N} m². ${p}% est consacré aux fleurs. Quelle surface en m² est consacrée aux fleurs ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`La bibliothèque a commandé ${N} nouveaux livres. ${p}% sont des livres de science. Combien de livres de science ont été commandés ?`, ans:N*p/100, pctAnswer:false }; } },
  { pType:1, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une ville a ${N} habitants. ${p}% travaillent dans l'industrie. Combien d'habitants travaillent dans l'industrie ?`, ans:N*p/100, pctAnswer:false }; } },
  // ── Type 2 simple ──
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`${part} élèves sur ${total} ont réussi l'examen. Quel pourcentage d'élèves ont réussi ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Dans un panier de ${total} fruits, ${part} sont des pommes. Quel pourcentage représentent les pommes ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Tu as répondu à ${part} questions sur ${total}. Quel pourcentage de questions as-tu traitées ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Dans une classe de ${total} élèves, ${part} sont des filles. Quel est le pourcentage de filles ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Tu as lu ${part} pages sur ${total} dans un livre. Quel pourcentage as-tu lu ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Il a plu ${part} jours sur ${total} jours ce mois. Quel pourcentage de jours a-t-il plu ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`${part} équipes sur ${total} ont gagné leur match. Quel pourcentage d'équipes ont gagné ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Sur ${total} voitures dans un parking, ${part} sont rouges. Quel pourcentage sont rouges ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`${part} élèves sur ${total} étaient absents aujourd'hui. Quel pourcentage étaient absents ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Tu as réussi ${part} exercices sur ${total}. Quel pourcentage as-tu réussi ?`, ans:pct, pctAnswer:true }; } },
  // ── Type 2 complex ──
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Un magasin a vendu ${part} articles bio sur un total de ${total} articles. Quel pourcentage des ventes sont des articles bio ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Une association a collecté ${part} signatures sur les ${total} nécessaires. Quel pourcentage de l'objectif a-t-elle atteint ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Un employé a travaillé ${part} jours sur les ${total} jours ouvrables du mois. Quel pourcentage des jours a-t-il travaillé ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Une école a ${total} élèves. ${part} participent à des activités parascolaires. Quel pourcentage participent ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Un train a ${total} sièges. ${part} sièges sont occupés. Quel est le taux d'occupation en % ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Sur ${total} commandes passées, ${part} ont été livrées dans les délais. Quel pourcentage a été livré à temps ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Une forêt de ${total} hectares. ${part} hectares ont été replantés. Quel pourcentage a été replanté ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Un sondage de ${total} personnes : ${part} sont favorables au projet. Quel pourcentage sont favorables ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Une production mensuelle de ${total} unités : ${part} ont passé le contrôle qualité. Quel pourcentage est conforme ?`, ans:pct, pctAnswer:true }; } },
  { pType:2, gen:()=>{ const [part,total]=rnd(T2_COMBOS); const pct=Math.round(part/total*100); return { text:`Un club sportif a ${total} membres. ${part} ont renouvelé leur abonnement. Quel pourcentage a renouvelé ?`, ans:pct, pctAnswer:true }; } },
  // ── Type 3 simple ──
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un salaire de ${N} CHF est augmenté de ${p}%. Quel est le nouveau salaire ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un prix de ${N} CHF augmente de ${p}%. Quel est le nouveau prix ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une population de ${N} habitants augmente de ${p}%. Quelle est la nouvelle population ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un effectif de ${N} employés augmente de ${p}%. Quel est le nouvel effectif ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`La production d'une usine est de ${N} unités. Elle augmente de ${p}%. Quelle est la nouvelle production ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un loyer de ${N} CHF est augmenté de ${p}%. Quel est le nouveau loyer ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un article vaut ${N} CHF hors taxes. La TVA est de ${p}%. Quel est le prix TTC ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un capital de ${N} CHF est augmenté de ${p}%. Quel est le nouveau capital ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`${N} membres dans un club. L'année suivante, le nombre augmente de ${p}%. Combien de membres y a-t-il ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une recette pour ${N} personnes est augmentée de ${p}%. Pour combien de personnes est-elle prévue maintenant ?`, ans:N+N*p/100, pctAnswer:false }; } },
  // ── Type 3 complex ──
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Le chiffre d'affaires d'une entreprise est de ${N} CHF. Il augmente de ${p}% l'année suivante. Quel sera le chiffre d'affaires ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une école a ${N} élèves. Suite à une nouvelle politique, les inscriptions augmentent de ${p}%. Combien d'élèves y aura-t-il ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un appartement est loué ${N} CHF par mois. Le propriétaire augmente le loyer de ${p}%. Quel sera le nouveau loyer ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une ville a ${N} habitants. Sa population augmente de ${p}% en dix ans. Quelle sera sa population ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une forêt couvre ${N} hectares. Des reboisements augmentent sa superficie de ${p}%. Quelle sera sa superficie ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Le budget d'un club sportif est de ${N} CHF. La mairie l'augmente de ${p}%. Quel sera le nouveau budget ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un producteur vend ses fruits ${N} CHF la caisse. En raison de la demande, il augmente son prix de ${p}%. Quel est le nouveau prix ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un hôtel a ${N} chambres. Il en construit ${p}% de plus. Combien de chambres aura-t-il ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`La valeur d'un terrain est de ${N} CHF. Elle augmente de ${p}% en un an. Quelle est la nouvelle valeur ?`, ans:N+N*p/100, pctAnswer:false }; } },
  { pType:3, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un employé gagne ${N} CHF par mois. Après sa promotion, son salaire augmente de ${p}%. Quel sera son nouveau salaire ?`, ans:N+N*p/100, pctAnswer:false }; } },
  // ── Type 4 simple ──
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un article à ${N} CHF est soldé à ${p}% de réduction. Quel est le prix final ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un salaire de ${N} CHF est réduit de ${p}%. Quel est le nouveau salaire ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une population de ${N} habitants diminue de ${p}%. Quelle est la nouvelle population ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un effectif de ${N} employés diminue de ${p}%. Quel est le nouvel effectif ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`La production d'une usine est de ${N} unités. Elle diminue de ${p}%. Quelle est la nouvelle production ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une facture de ${N} CHF bénéficie d'une réduction de ${p}%. Quel est le montant à payer ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`${N} participants s'étaient inscrits. ${p}% ont annulé. Combien sont finalement présents ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un stock de ${N} produits est réduit de ${p}%. Combien de produits reste-t-il ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un loyer de ${N} CHF est négocié à la baisse de ${p}%. Quel est le nouveau loyer ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un trajet de ${N} km est raccourci de ${p}% grâce à un nouveau chemin. Quelle est la nouvelle distance ?`, ans:N-N*p/100, pctAnswer:false }; } },
  // ── Type 4 complex ──
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un magasin pratique une remise de ${p}% sur tous ses articles. Un article coûte ${N} CHF. Quel est son nouveau prix ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une entreprise de ${N} employés licencie ${p}% de son personnel. Combien d'employés restent ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un billet de train coûte ${N} CHF. Avec une carte de réduction de ${p}%, quel est le prix payé ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une ville de ${N} habitants perd ${p}% de sa population. Quelle est la nouvelle population ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un budget de ${N} CHF est diminué de ${p}% par décision administrative. Quel est le nouveau budget ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`La valeur d'une voiture est de ${N} CHF. Elle perd ${p}% de sa valeur la première année. Quelle est sa nouvelle valeur ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un producteur fabrique ${N} unités. Suite à une panne, sa production diminue de ${p}%. Combien d'unités produit-il ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Un abonnement coûte ${N} CHF par an. Une réduction de ${p}% est accordée pour engagement longue durée. Quel est le prix ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une forêt de ${N} hectares est touchée par une maladie qui détruit ${p}% des arbres. Sur combien d'hectares les arbres sont-ils sains ?`, ans:N-N*p/100, pctAnswer:false }; } },
  { pType:4, gen:()=>{ const [N,p]=rnd(T1_PAIRS); return { text:`Une épreuve notée sur ${N} points est pénalisée de ${p}% pour des fautes de présentation. Quel est le score final ?`, ans:N-N*p/100, pctAnswer:false }; } },
];

export function PctWordExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [questions] = useState(() => {
    const types = shuffle([1, 2, 3, 4] as const).slice(0, 2) as [1|2|3|4, 1|2|3|4];
    return types.map(t => shuffle(WORD_TEMPLATES.filter(tmpl => tmpl.pType === t))[0]!.gen());
  });
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const v = normDec(s.ans.replace(/%/g, ""));
      const ok = isFinite(v) && Math.abs(v - q.ans) < 0.01;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Résolvez les problèmes.</p>
      <div className="space-y-5">
        {questions.map((q, i) => {
          const s = states[i]!;
          const ansDisplay = q.pctAnswer ? `${q.ans}%` : String(q.ans);
          return (
            <div key={i} className="flex items-start gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] shrink-0 pt-0.5">{i + 1}.</span>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-[var(--color-text-primary)]">{q.text}</span>
                {s.status === "wrong" ? (
                  <div className={WRONG_CLS}>
                    <span className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-none">{s.ans || "—"}</span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{ansDisplay}</span>
                  </div>
                ) : (
                  <input type="text" inputMode="decimal" value={s.ans} disabled={s.status === "correct"}
                    onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value.replace(/[^0-9,.%]/g, ""), status: "idle" } : x))}
                    placeholder={q.pctAnswer ? "%" : ""}
                    className={simpleCls(s.status)} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A6.2 Exercise 2 : X sur Y = ?% ──────────────────────────────────────────

export function PartToPctExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => shuffle(PART_TO_PCT_POOL).slice(0, 5));
  type State = { ans: string; status: "idle" | "correct" | "wrong" };
  const [states, setStates] = useState<State[]>(() => questions.map(() => ({ ans: "", status: "idle" })));

  useEffect(() => {
    if (validateCommand === 0) return;
    let correct = 0;
    const next = questions.map((q, i) => {
      const s = states[i]!;
      const userVal = normDec(s.ans.replace("%", "").trim());
      const ok = isFinite(userVal) && Math.abs(userVal - q.pct) < 0.1;
      if (ok) correct++;
      return { ...s, status: ok ? "correct" : "wrong" } as State;
    });
    setStates(next);
    onValidated(correct === questions.length, correct, questions.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateCommand]);

  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</p>
      <p className="mb-4 text-xs text-[var(--color-text-secondary)]">Déterminez quelle part en pourcentage représente la valeur indiquée.</p>
      <div className="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-2 gap-y-3 w-fit">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <Fragment key={i}>
              <span className="text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="text-sm text-[var(--color-text-primary)]">{q.part} sur {q.total}</span>
              <span className="text-sm text-[var(--color-text-primary)]">=</span>
              {s.status === "wrong" ? (
                <div className={WRONG_CLS}>
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.pct}%</span>
                </div>
              ) : (
                <input type="text" inputMode="decimal" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value.replace(/[^0-9,.%]/g, ""), status: "idle" } : x))}
                  placeholder="%" className={simpleCls(s.status)} />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
