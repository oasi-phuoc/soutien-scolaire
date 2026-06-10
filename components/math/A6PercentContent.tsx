"use client";
import { useEffect, useState } from "react";

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

// ── Fraction input widget ────────────────────────────────────────────────────

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
    <span className="w-12 h-8 rounded-xl border border-amber-400 bg-amber-50 dark:bg-amber-950/20 px-1 flex flex-col items-center justify-center">
      <span className="text-[10px] text-zinc-700 dark:text-zinc-300 line-through tabular-nums leading-none">{val || "—"}</span>
      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tabular-nums leading-none">{correct}</span>
    </span>
  );
  return (
    <span className="inline-flex flex-col items-center gap-[2px] align-middle mx-1">
      {status === "wrong" ? wrongBox(numVal, correctNum) : (
        <input type="text" inputMode="numeric" value={numVal} onChange={e => onNum(e.target.value)} disabled={disabled} className={iCls(status)} />
      )}
      <span className="h-[1.5px] w-12 rounded bg-[var(--color-text-primary)]" />
      {status === "wrong" ? wrongBox(denVal, correctDen) : (
        <input type="text" inputMode="numeric" value={denVal} onChange={e => onDen(e.target.value)} disabled={disabled} className={iCls(status)} />
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

const WRONG_CLS = "rounded-xl border border-amber-400 bg-amber-50 dark:bg-amber-950/20 px-2 py-1 flex flex-col items-center justify-center min-w-[3.5rem] text-center";

// ── Exercise 1 : % → fraction ────────────────────────────────────────────────

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

// ── Exercise 2 : % → décimal ─────────────────────────────────────────────────

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
    `w-24 rounded-xl border px-2 py-1.5 text-sm text-center outline-none transition-colors ${
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
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 line-through leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.dec}</span>
                </div>
              ) : (
                <input type="text" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value, status: "idle" } : x))}
                  className={inputCls(s.status)} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercise 3 : fraction → % ────────────────────────────────────────────────

export function FracToPctExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => shuffle(FRAC_TO_PCT_POOL).slice(0, 5));
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
    `w-24 rounded-xl border px-2 py-1.5 text-sm text-center outline-none transition-colors ${
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
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 line-through leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.pct}%</span>
                </div>
              ) : (
                <input type="text" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value, status: "idle" } : x))}
                  placeholder="%" className={inputCls(s.status)} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercise 4 : décimal → % ─────────────────────────────────────────────────

export function DecToPctExercise({ validateCommand, onValidated, exNum }: ValidatedProps) {
  const [questions] = useState(() => shuffle(DEC_TO_PCT_POOL).slice(0, 5));
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
    `w-24 rounded-xl border px-2 py-1.5 text-sm text-center outline-none transition-colors ${
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
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 line-through leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.pct}%</span>
                </div>
              ) : (
                <input type="text" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value, status: "idle" } : x))}
                  placeholder="%" className={inputCls(s.status)} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
