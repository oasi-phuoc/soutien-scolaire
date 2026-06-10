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

function normDec(s: string): number {
  return parseFloat(s.replace(",", ".").trim());
}

const WRONG_CLS = "rounded-xl border border-amber-400 bg-amber-50 dark:bg-amber-950/20 px-2 py-1 flex flex-col items-center justify-center min-w-[3.5rem] text-center";

const inputCls = (status: "idle" | "correct" | "wrong") =>
  `w-24 rounded-xl border px-2 py-1.5 text-sm text-center outline-none transition-colors ${
    status === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20"
    : status === "wrong" ? "border-amber-400 bg-amber-50 text-amber-600 dark:bg-amber-950/20"
    : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"}`;

// ── Data pools ───────────────────────────────────────────────────────────────

type PctOfNumItem = { pct: number; num: number; ans: number };
const PCT_OF_NUM_POOL: PctOfNumItem[] = [
  { pct: 10, num: 50, ans: 5 },
  { pct: 20, num: 150, ans: 30 },
  { pct: 25, num: 200, ans: 50 },
  { pct: 50, num: 80, ans: 40 },
  { pct: 15, num: 60, ans: 9 },
  { pct: 30, num: 90, ans: 27 },
  { pct: 5, num: 60, ans: 3 },
  { pct: 40, num: 75, ans: 30 },
  { pct: 75, num: 200, ans: 150 },
  { pct: 10, num: 340, ans: 34 },
  { pct: 20, num: 45, ans: 9 },
  { pct: 25, num: 120, ans: 30 },
  { pct: 50, num: 350, ans: 175 },
  { pct: 15, num: 80, ans: 12 },
  { pct: 30, num: 120, ans: 36 },
  { pct: 10, num: 250, ans: 25 },
  { pct: 20, num: 35, ans: 7 },
  { pct: 5, num: 40, ans: 2 },
  { pct: 25, num: 48, ans: 12 },
  { pct: 50, num: 130, ans: 65 },
];

type PartToPctItem = { part: number; total: number; pct: number };
const PART_TO_PCT_POOL: PartToPctItem[] = [
  { part: 30, total: 200, pct: 15 },
  { part: 75, total: 100, pct: 75 },
  { part: 25, total: 50, pct: 50 },
  { part: 18, total: 24, pct: 75 },
  { part: 30, total: 120, pct: 25 },
  { part: 45, total: 60, pct: 75 },
  { part: 7, total: 20, pct: 35 },
  { part: 3, total: 4, pct: 75 },
  { part: 6, total: 20, pct: 30 },
  { part: 15, total: 60, pct: 25 },
  { part: 12, total: 48, pct: 25 },
  { part: 40, total: 80, pct: 50 },
  { part: 36, total: 90, pct: 40 },
  { part: 8, total: 40, pct: 20 },
  { part: 9, total: 36, pct: 25 },
  { part: 60, total: 150, pct: 40 },
  { part: 50, total: 200, pct: 25 },
];

// ── Exercise 1 : p% de N = ? ─────────────────────────────────────────────────

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
      <div className="space-y-3">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <div key={i} className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-4 shrink-0">{i + 1}.</span>
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">{q.pct}% de {q.num} =</span>
              {s.status === "wrong" ? (
                <div className={WRONG_CLS}>
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 line-through leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.ans}</span>
                </div>
              ) : (
                <input type="text" inputMode="decimal" value={s.ans} disabled={s.status === "correct"}
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

// ── Exercise 2 : X sur Y = ?% ────────────────────────────────────────────────

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
      <div className="space-y-3">
        {questions.map((q, i) => {
          const s = states[i]!;
          return (
            <div key={i} className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-4 shrink-0">{i + 1}.</span>
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">{q.part} sur {q.total} =</span>
              {s.status === "wrong" ? (
                <div className={WRONG_CLS}>
                  <span className="text-[10px] text-zinc-700 dark:text-zinc-300 line-through leading-none">{s.ans || "—"}</span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 leading-none">{q.pct}%</span>
                </div>
              ) : (
                <input type="text" inputMode="decimal" value={s.ans} disabled={s.status === "correct"}
                  onChange={e => setStates(prev => prev.map((x, j) => j === i ? { ans: e.target.value, status: "idle" } : x))}
                  className={inputCls(s.status)} />
              )}
              {s.status !== "wrong" && <span className="text-sm text-[var(--color-text-secondary)]">%</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
