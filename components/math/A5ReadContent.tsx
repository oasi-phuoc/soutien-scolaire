"use client";

import React, { useCallback, useEffect, useState } from "react";

// ── Helpers ───────────────────────────────────────────────────────────────────
function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle<T>(a: T[]): T[] {
  const c = [...a];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j]!, c[i]!];
  }
  return c;
}

const FR_U = ["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf",
  "dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
function intToFr(n: number): string {
  if (n < 20) return FR_U[n] ?? String(n);
  const d = Math.floor(n / 10), u = n % 10;
  const tens = ["","","vingt","trente","quarante","cinquante","soixante"];
  if (d < 7) {
    if (u === 0) return tens[d]!;
    if (u === 1) return `${tens[d]}-et-un`;
    return `${tens[d]}-${FR_U[u]!}`;
  }
  if (d === 7) return `soixante-${FR_U[10 + u]!}`;
  if (d === 8) { if (u === 0) return "quatre-vingts"; return `quatre-vingt-${FR_U[u]!}`; }
  return `quatre-vingt-${FR_U[10 + u]!}`;
}
function decToFr(s: string): string {
  const [a, b] = s.split(",");
  const intText = intToFr(parseInt(a ?? "0"));
  if (!b || b === "0") return intText;
  return `${intText} virgule ${intToFr(parseInt(b))}`;
}
function speakFr(text: string) {
  if (typeof window === "undefined") return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR"; u.rate = 0.85;
  window.speechSynthesis.speak(u);
}
function acc(s: string): string[] { return [s, s.replace(",", ".")]; }
function fmtNum(v: number): string {
  const s = v.toFixed(2);
  return s.endsWith("0") ? v.toFixed(1).replace(".", ",") : s.replace(".", ",");
}

// Correction box (amber, stacked wrong/correct)
function Err({ wrong, correct, className = "" }: { wrong: string; correct: string; className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center justify-center rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 h-9 ${className}`}>
      <span className="text-xs text-amber-600 line-through tabular-nums leading-none">{wrong || "—"}</span>
      <span className="text-sm font-bold text-[var(--color-text-primary)] tabular-nums leading-none">{correct}</span>
    </span>
  );
}
const IC = (w: boolean) =>
  `rounded-xl border px-2 py-1 text-sm text-center outline-none transition-colors tabular-nums h-9 ${
    w
      ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20"
      : "border-[var(--color-accent-alg)]/40 bg-blue-50 dark:bg-blue-950/20 focus:border-[var(--color-accent-alg)]"
  }`;

function PlayBtn({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <button
      type="button"
      onClick={() => { speakFr(text); setPlaying(true); setTimeout(() => setPlaying(false), 2500); }}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity active:opacity-70"
    >
      {playing
        ? <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg>
        : <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z"/></svg>}
    </button>
  );
}

// ── Ex 1 — Décomposer ─────────────────────────────────────────────────────────
type DecompItem = { numStr: string; parts: string[] };
function genDecompose(): DecompItem[] {
  const items: DecompItem[] = [];
  while (items.length < 5) {
    const tens = rnd(1, 9) * 10;
    const units = rnd(1, 9);
    const tenths = rnd(1, 9);
    const hundredths = rnd(1, 9);
    const numStr = `${tens + units},${tenths}${hundredths}`;
    const parts = [
      `${tens}`,
      `${units}`,
      `0,${tenths}`,
      `0,0${hundredths}`,
    ];
    items.push({ numStr, parts });
  }
  return items;
}

export function DecReadDecomposeExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [items] = useState<DecompItem[]>(genDecompose);
  const [vals, setVals] = useState<string[][]>(() => items.map(() => ["", "", "", ""]));
  const [wrongs, setWrongs] = useState<boolean[][]>(() => items.map(() => [false, false, false, false]));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const newWrongs = items.map((item, i) =>
      item.parts.map((p, j) => !acc(p).includes((vals[i]?.[j] ?? "").trim()))
    );
    setWrongs(newWrongs);
    const correctCount = newWrongs.filter(row => row.every(w => !w)).length;
    onValidated(newWrongs.every(row => row.every(w => !w)), correctCount, items.length);
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
            <span className="text-sm font-mono shrink-0 text-[var(--color-text-primary)]">{item.numStr} =</span>
            {item.parts.map((p, j) => (
              <React.Fragment key={j}>
                {wrongs[i]?.[j]
                  ? <Err wrong={vals[i]?.[j] ?? ""} correct={p} className="w-10" />
                  : <input
                      type="text"
                      value={vals[i]?.[j] ?? ""}
                      disabled={validated}
                      onChange={e => {
                        const v = e.target.value;
                        setVals(prev => prev.map((row, ri) => ri === i ? row.map((c, ci) => ci === j ? v : c) : row));
                      }}
                      className={`${IC(false)} w-10`}
                    />}
                {j < item.parts.length - 1 && <span className="text-sm text-[var(--color-text-secondary)]">+</span>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Ex 2 — Recomposer ─────────────────────────────────────────────────────────
export function DecReadRecomposeExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [items] = useState<DecompItem[]>(genDecompose);
  const [vals, setVals] = useState<string[]>(() => items.map(() => ""));
  const [wrongs, setWrongs] = useState<boolean[]>(() => items.map(() => false));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const newWrongs = items.map((item, i) => !acc(item.numStr).includes((vals[i] ?? "").trim()));
    setWrongs(newWrongs);
    onValidated(newWrongs.every(w => !w), newWrongs.filter(w => !w).length, newWrongs.length);
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
            <span className="text-sm font-mono text-[var(--color-text-primary)]">{item.parts.join(" + ")} =</span>
            {wrongs[i]
              ? <Err wrong={vals[i] ?? ""} correct={item.numStr} className="w-20" />
              : <input
                  type="text"
                  value={vals[i] ?? ""}
                  disabled={validated}
                  onChange={e => setVals(prev => prev.map((v, vi) => vi === i ? e.target.value : v))}
                  className={`${IC(false)} w-20`}
                />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Ex 3 — Valeur d'un chiffre ────────────────────────────────────────────────
type PlaceItem = { numStr: string; digitChar: string; digitIdx: number; correctPos: number };
const POS_LABELS = ["dizaines", "unités", "dixièmes", "centièmes"];
function genPlaceValue(): PlaceItem[] {
  const items: PlaceItem[] = [];
  const positions = shuffle([0, 1, 2, 3, 0, 1, 2, 3]).slice(0, 5);
  for (const pos of positions) {
    const tens = rnd(1, 9) * 10;
    const units = rnd(1, 9);
    const tenths = rnd(1, 9);
    const hundredths = rnd(1, 9);
    const numStr = `${tens + units},${tenths}${hundredths}`;
    const digits = [String(tens / 10), String(units), String(tenths), String(hundredths)];
    items.push({ numStr, digitChar: digits[pos]!, digitIdx: pos, correctPos: pos });
  }
  return items;
}

export function DecReadPlaceValueExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [items] = useState<PlaceItem[]>(genPlaceValue);
  const [selected, setSelected] = useState<(number | null)[]>(() => items.map(() => null));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const correctCount = items.filter((item, i) => selected[i] === item.correctPos).length;
    onValidated(correctCount === items.length, correctCount, items.length);
  }, [validated, items, selected, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      <div className="space-y-5">
        {items.map((item, i) => {
          const sel = selected[i];
          const correct = item.correctPos;
          return (
            <div key={i} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
                <span className="text-sm text-[var(--color-text-primary)]">
                  Dans <span className="font-mono">{item.numStr.split("").map((ch, ci) => {
                    const [intPart] = item.numStr.split(",");
                    const charInInt = item.digitIdx < 2 ? item.digitIdx : -1;
                    const charInDec = item.digitIdx >= 2 ? item.digitIdx - 2 : -1;
                    const isTarget = ch !== "," && (
                      (ci < (intPart?.length ?? 0) && ci === charInInt) ||
                      (ci > (intPart?.length ?? 0) && (ci - (intPart?.length ?? 0) - 1) === charInDec)
                    );
                    return <span key={ci} className={isTarget ? "font-bold text-[var(--color-accent-alg)]" : ""}>{ch}</span>;
                  })}</span> le chiffre <span className="font-bold text-[var(--color-accent-alg)]">{item.digitChar}</span> est dans la position des :
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pl-7">
                {POS_LABELS.map((lbl, pi) => {
                  let cls = "rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors ";
                  if (validated) {
                    if (pi === correct && sel !== correct) cls += "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";
                    else if (pi === sel) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                    else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)]";
                  } else {
                    cls += sel === pi
                      ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                      : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] cursor-pointer";
                  }
                  return (
                    <button key={pi} type="button" className={cls}
                      onClick={() => { if (!validated) setSelected(prev => prev.map((s, si) => si === i ? pi : s)); }}>
                      {lbl}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex 4 — Chiffre à un rang ──────────────────────────────────────────────────
type DigitAtItem = { numStr: string; asks: { label: string; answer: string }[] };
function genDigitAt(): DigitAtItem[] {
  const RANKS = [
    { label: "dixièmes", idx: 0 },
    { label: "centièmes", idx: 1 },
    { label: "millièmes", idx: 2 },
    { label: "unités", idx: -1 },
  ];
  const items: DigitAtItem[] = [];
  while (items.length < 5) {
    const units = rnd(1, 9);
    const d0 = rnd(1, 9), d1 = rnd(1, 9), d2 = rnd(1, 9);
    const numStr = `${units},${d0}${d1}${d2}`;
    const pool = shuffle(RANKS).slice(0, 2);
    const asks = pool.map(r => ({
      label: r.label,
      answer: r.idx === -1 ? String(units) : [d0, d1, d2][r.idx] !== undefined ? String([d0, d1, d2][r.idx]) : String(d0),
    }));
    items.push({ numStr, asks });
  }
  return items;
}

export function DecReadDigitAtExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [items] = useState<DigitAtItem[]>(genDigitAt);
  const [vals, setVals] = useState<string[][]>(() => items.map(() => ["", ""]));
  const [wrongs, setWrongs] = useState<boolean[][]>(() => items.map(() => [false, false]));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = items.map((item, i) =>
      item.asks.map((a, j) => (vals[i]?.[j] ?? "").trim() !== a.answer)
    );
    setWrongs(w);
    const correctCount = w.filter(row => row.every(x => !x)).length;
    onValidated(w.every(row => row.every(x => !x)), correctCount, w.length);
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
              <span className="text-sm font-mono text-[var(--color-text-primary)]">Dans {item.numStr} :</span>
            </div>
            {item.asks.map((ask, j) => (
              <div key={j} className="flex items-center gap-2 pl-7">
                <span className="text-sm text-[var(--color-text-secondary)] min-w-[10rem]">chiffre des {ask.label} :</span>
                {wrongs[i]?.[j]
                  ? <Err wrong={vals[i]?.[j] ?? ""} correct={ask.answer} className="w-14" />
                  : <input
                      type="text"
                      value={vals[i]?.[j] ?? ""}
                      disabled={validated}
                      onChange={e => setVals(prev => prev.map((row, ri) => ri === i ? row.map((c, ci) => ci === j ? e.target.value : c) : row))}
                      className={`${IC(false)} w-14`}
                    />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Ex 5 — Dictée ─────────────────────────────────────────────────────────────
function genDictation(): string[] {
  const nums: string[] = [];
  while (nums.length < 5) {
    const intPart = rnd(1, 49);
    const kind = Math.random() < 0.5 ? 1 : 2;
    const decPart = kind === 1 ? String(rnd(1, 9)) : String(rnd(11, 99)).replace(/^.0/, s => s[0] + "0").padStart(2,"0");
    const parsed = parseInt(decPart);
    if (parsed === 0) continue;
    nums.push(`${intPart},${decPart}`);
  }
  return nums;
}

export function DecReadDictationExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [nums] = useState<string[]>(genDictation);
  const [vals, setVals] = useState<string[]>(() => nums.map(() => ""));
  const [wrongs, setWrongs] = useState<boolean[]>(() => nums.map(() => false));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = nums.map((n, i) => !acc(n).includes((vals[i] ?? "").trim()));
    setWrongs(w);
    onValidated(w.every(x => !x), w.filter(x => !x).length, w.length);
  }, [validated, nums, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      <div className="space-y-3">
        {nums.map((n, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
            <PlayBtn text={decToFr(n)} />
            {wrongs[i]
              ? <Err wrong={vals[i] ?? ""} correct={n} className="w-24" />
              : <input
                  type="text"
                  value={vals[i] ?? ""}
                  disabled={validated}
                  onChange={e => setVals(prev => prev.map((v, vi) => vi === i ? e.target.value : v))}
                  className={`${IC(false)} w-24`}
                />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Ex 6 — Comparer ───────────────────────────────────────────────────────────
type ComparePair = { a: string; b: string; op: "<" | "=" | ">" };
function genCompare(): ComparePair[] {
  const pairs: ComparePair[] = [];
  // Force at least one equal pair
  const forcedEqual: ComparePair = (() => {
    const v = rnd(10, 90) / 10;
    const aStr = v.toFixed(1).replace(".", ",");
    const bStr = v.toFixed(2).replace(".", ",");
    return { a: aStr, b: bStr, op: "=" };
  })();
  pairs.push(forcedEqual);
  while (pairs.length < 5) {
    const aInt = rnd(1, 9), bInt = rnd(1, 9);
    const aDec = rnd(0, 9), bDec = rnd(0, 9);
    const aFull = rnd(0, 9), bFull = rnd(0, 9);
    const aVal = aInt + aDec / 10 + aFull / 100;
    const bVal = bInt + bDec / 10 + bFull / 100;
    if (Math.abs(aVal - bVal) < 0.001) continue;
    const aStr = `${aInt},${aDec}${aFull}`;
    const bStr = `${bInt},${bDec}${bFull}`;
    const op = aVal < bVal ? "<" : ">";
    pairs.push({ a: aStr, b: bStr, op });
  }
  return shuffle(pairs).slice(0, 5);
}

export function DecReadCompareExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [pairs] = useState<ComparePair[]>(genCompare);
  const [selected, setSelected] = useState<(string | null)[]>(() => pairs.map(() => null));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const correctCount = pairs.filter((p, i) => selected[i] === p.op).length;
    onValidated(correctCount === pairs.length, correctCount, pairs.length);
  }, [validated, pairs, selected, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      <div className="space-y-4">
        {pairs.map((pair, i) => {
          const sel = selected[i];
          const correct = pair.op;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
              <span className="font-mono text-sm text-[var(--color-text-primary)] min-w-[3.5rem] text-right">{pair.a}</span>
              {(["<", "=", ">"] as const).map(sym => {
                let cls = "w-10 h-8 rounded border text-sm font-bold transition-colors ";
                if (validated) {
                  if (sym === correct && sym !== sel) cls += "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";
                  else if (sym === sel) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
                  else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)]";
                } else {
                  cls += sel === sym
                    ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
                    : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] cursor-pointer";
                }
                return <button key={sym} type="button" className={cls}
                  onClick={() => { if (!validated) setSelected(prev => prev.map((s, si) => si === i ? sym : s)); }}>{sym}</button>;
              })}
              <span className="font-mono text-sm text-[var(--color-text-primary)] min-w-[3.5rem]">{pair.b}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex 8 — Ordre croissant ────────────────────────────────────────────────────
function genOrder(): string[] {
  const nums: string[] = [];
  while (nums.length < 4) {
    const intPart = rnd(1, 9);
    const s = Math.random() < 0.5
      ? `${intPart},${rnd(1, 9)}`
      : `${intPart},${rnd(1, 9)}${rnd(1, 9)}`;
    if (!nums.includes(s)) nums.push(s);
  }
  return shuffle(nums);
}

export function DecReadOrderExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [chips] = useState<string[]>(genOrder);
  const [slots, setSlots] = useState<(string | null)[]>([null, null, null, null]);
  const [validated, setValidated] = useState(false);
  const [slotWrong, setSlotWrong] = useState<boolean[]>([false, false, false, false]);

  const placed = new Set(slots.filter(Boolean));
  const remaining = chips.filter(c => !placed.has(c));

  function placeChip(chip: string) {
    if (validated) return;
    const nextEmpty = slots.findIndex(s => s === null);
    if (nextEmpty === -1) return;
    setSlots(prev => prev.map((s, i) => i === nextEmpty ? chip : s));
  }
  function removeSlot(idx: number) {
    if (validated) return;
    setSlots(prev => prev.map((s, i) => i === idx ? null : s));
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const sorted = [...chips].sort((a, b) => parseFloat(a.replace(",", ".")) - parseFloat(b.replace(",", ".")));
    const w = slots.map((s, i) => s !== sorted[i]);
    setSlotWrong(w);
    onValidated(w.every(x => !x), w.filter(x => !x).length, w.length);
  }, [validated, chips, slots, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const sorted = [...chips].sort((a, b) => parseFloat(a.replace(",", ".")) - parseFloat(b.replace(",", ".")));

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      {/* Slots */}
      <div className="flex gap-2 flex-wrap">
        {slots.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs text-[var(--color-text-secondary)]">{i + 1}{i === 0 ? "er" : "ème"}</span>
            <button
              type="button"
              onClick={() => removeSlot(i)}
              className={`h-10 w-20 rounded-xl border text-sm font-mono font-bold transition-colors flex flex-col items-center justify-center ${
                s === null
                  ? "border-dashed border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
                  : validated && slotWrong[i]
                    ? "border-amber-500 bg-amber-50 dark:bg-amber-950/20"
                    : "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]"
              }`}
            >
              {validated && slotWrong[i]
                ? <>
                    <span className="text-xs text-amber-600 line-through leading-none">{s}</span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)] leading-none">{sorted[i]}</span>
                  </>
                : <span>{s ?? "—"}</span>
              }
            </button>
          </div>
        ))}
      </div>
      {/* Chips */}
      <div className="flex gap-2 flex-wrap">
        {remaining.map(chip => (
          <button
            key={chip}
            type="button"
            onClick={() => placeChip(chip)}
            disabled={validated}
            className="h-10 w-20 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-sm font-mono font-bold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent-alg)] disabled:opacity-50"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Ex 9 — Nombres > x ────────────────────────────────────────────────────────
type FilterConfig = { threshold: string; thresholdVal: number; nums: string[]; mode: "gt" | "lt" | "between"; lo?: number; hi?: number };
function genFilter(mode: "gt" | "lt" | "between"): FilterConfig {
  if (mode === "between") {
    const lo = rnd(2, 7);
    const hi = lo + rnd(2, 3);
    const nums: string[] = [];
    while (nums.length < 15) {
      const intPart = rnd(lo - 1, hi + 1);
      const s = Math.random() < 0.5
        ? `${intPart},${rnd(0, 9)}`
        : `${intPart},${rnd(0, 9)}${rnd(1, 9)}`;
      const val = parseFloat(s.replace(",", "."));
      if (!nums.includes(s) && val !== lo && val !== hi) nums.push(s);
    }
    return { threshold: `${lo} et ${hi}`, thresholdVal: lo, nums: shuffle(nums), mode, lo, hi };
  }
  const t = rnd(20, 70) / 10;
  const tStr = t.toFixed(1).replace(".", ",");
  const nums: string[] = [tStr];
  while (nums.length < 15) {
    const intPart = Math.floor(t) + rnd(-1, 1);
    if (intPart < 0) continue;
    const s = Math.random() < 0.5
      ? `${intPart},${rnd(0, 9)}`
      : `${intPart},${rnd(0, 9)}${rnd(1, 9)}`;
    if (!nums.includes(s)) nums.push(s);
  }
  return { threshold: tStr, thresholdVal: t, nums: shuffle(nums), mode };
}

function FilterExercise({ exNum, mode, validateCommand, onValidated }: {
  exNum: number; mode: "gt" | "lt" | "between"; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [cfg] = useState<FilterConfig>(() => genFilter(mode));
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [validated, setValidated] = useState(false);
  const [chipState, setChipState] = useState<Record<string, "correct" | "missed" | "wrong" | "idle">>({});

  const consigne = mode === "gt"
    ? `Sélectionnez tous les nombres strictement supérieurs à ${cfg.threshold}.`
    : mode === "lt"
      ? `Sélectionnez tous les nombres strictement inférieurs à ${cfg.threshold}.`
      : `Sélectionnez tous les nombres strictement entre ${cfg.threshold}.`;

  function isCorrect(s: string): boolean {
    const v = parseFloat(s.replace(",", "."));
    if (cfg.mode === "gt") return v > cfg.thresholdVal;
    if (cfg.mode === "lt") return v < cfg.thresholdVal;
    return v > (cfg.lo ?? 0) && v < (cfg.hi ?? 10);
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const states: Record<string, "correct" | "missed" | "wrong" | "idle"> = {};
    for (const s of cfg.nums) {
      const correct = isCorrect(s);
      const sel = selected.has(s);
      if (correct && sel) states[s] = "correct";
      else if (correct && !sel) states[s] = "missed";
      else if (!correct && sel) states[s] = "wrong";
      else states[s] = "idle";
    }
    setChipState(states);
    const correct = cfg.nums.filter(s => {
      const c = isCorrect(s), sel = selected.has(s);
      return (c && sel) || (!c && !sel);
    }).length;
    onValidated(correct === cfg.nums.length, correct, cfg.nums.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, cfg, selected, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {cfg.nums.map(s => {
          const sel = selected.has(s);
          const st = chipState[s];
          let cls = "min-w-[4rem] text-center rounded-xl border px-3 py-2 text-sm font-mono font-bold transition-colors ";
          if (validated) {
            if (st === "wrong") cls += "border-amber-500 bg-amber-50 text-amber-600";
            else if (st === "missed") cls += "border-amber-500 bg-amber-50 text-amber-600";
            else if (st === "correct") cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
            else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)]";
          } else {
            cls += sel
              ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
              : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] cursor-pointer";
          }
          return (
            <button key={s} type="button" className={cls}
              onClick={() => {
                if (validated) return;
                setSelected(prev => { const n = new Set(prev); if (n.has(s)) n.delete(s); else n.add(s); return n; });
              }}>
              {s}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DecReadFilterGtExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  return <FilterExercise exNum={exNum} mode="gt" validateCommand={validateCommand} onValidated={onValidated} />;
}
export function DecReadFilterLtExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  return <FilterExercise exNum={exNum} mode="lt" validateCommand={validateCommand} onValidated={onValidated} />;
}
export function DecReadFilterBetweenExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  return <FilterExercise exNum={exNum} mode="between" validateCommand={validateCommand} onValidated={onValidated} />;
}

// ── Ex 11 — Encadrement ───────────────────────────────────────────────────────
type EncadrItem = { numStr: string; lo: string; hi: string; dir: "lt" | "gt" };
function genEncadrement(): EncadrItem[] {
  const numGt = rnd(2, 3);
  const dirs = shuffle([...Array(5 - numGt).fill("lt") as "lt"[], ...Array(numGt).fill("gt") as "gt"[]]);
  const items: EncadrItem[] = [];
  while (items.length < 5) {
    const caseType = rnd(0, 2);
    const intPart = rnd(1, 19);
    let numStr: string, lo: string, hi: string;
    if (caseType === 0) {
      numStr = `${intPart},${rnd(1, 9)}`;
      lo = String(intPart); hi = String(intPart + 1);
    } else if (caseType === 1) {
      numStr = `${intPart},${rnd(1, 9)}${rnd(1, 9)}`;
      lo = String(intPart); hi = String(intPart + 1);
    } else {
      const loT = rnd(1, 8), d2 = rnd(1, 9);
      numStr = `${intPart},${loT}${d2}`;
      lo = `${intPart},${loT}`; hi = `${intPart},${loT + 1}`;
    }
    items.push({ numStr, lo, hi, dir: dirs[items.length]! });
  }
  return items;
}

export function DecReadEncadrementExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [items] = useState(genEncadrement);
  const [vals, setVals] = useState<string[]>(() => items.map(() => ""));
  const [wrongs, setWrongs] = useState<boolean[]>(() => items.map(() => false));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = items.map((item, i) => !acc(item.numStr).includes((vals[i] ?? "").trim()));
    setWrongs(w);
    const correctCount = w.filter(x => !x).length;
    onValidated(w.every(x => !x), correctCount, w.length);
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Trouvez le nombre décimal encadré.</p>
      </div>
      <div className="grid grid-cols-[1.5rem_3.5rem_1.25rem_5rem_1.25rem_3.5rem] items-center gap-x-2 gap-y-3">
        {items.map((item, i) => {
          const isGt = item.dir === "gt";
          const firstVal = isGt ? item.hi : item.lo;
          const secondVal = isGt ? item.lo : item.hi;
          const sym = isGt ? ">" : "<";
          return (
            <React.Fragment key={i}>
              <span className="text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
              <span className="font-mono text-sm text-right text-[var(--color-text-primary)]">{firstVal}</span>
              <span className="text-sm text-[var(--color-text-secondary)] text-center">{sym}</span>
              {wrongs[i]
                ? <Err wrong={vals[i] ?? ""} correct={item.numStr} className="w-20" />
                : <input type="text" value={vals[i] ?? ""} disabled={validated}
                    onChange={e => setVals(p => p.map((v, vi) => vi === i ? e.target.value : v))}
                    className={`${IC(false)} w-20`} />}
              <span className="text-sm text-[var(--color-text-secondary)] text-center">{sym}</span>
              <span className="font-mono text-sm text-[var(--color-text-primary)]">{secondVal}</span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex 12 — Encadrement à l'unité près ───────────────────────────────────────
function genEncadrementUnite(): { numStr: string; lo: number; hi: number }[] {
  const items: { numStr: string; lo: number; hi: number }[] = [];
  while (items.length < 5) {
    const intPart = rnd(1, 19);
    const tenths = rnd(1, 9);
    const hundredths = rnd(0, 9);
    const numStr = hundredths === 0 ? `${intPart},${tenths}` : `${intPart},${tenths}${hundredths}`;
    items.push({ numStr, lo: intPart, hi: intPart + 1 });
  }
  return items;
}

export function DecReadEncadrementUniteExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [items] = useState(genEncadrementUnite);
  const [vals, setVals] = useState<[string, string][]>(() => items.map(() => ["", ""]));
  const [wrongs, setWrongs] = useState<[boolean, boolean][]>(() => items.map(() => [false, false]));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = items.map((item, i) => [
      (vals[i]?.[0] ?? "").trim() !== String(item.lo),
      (vals[i]?.[1] ?? "").trim() !== String(item.hi),
    ] as [boolean, boolean]);
    setWrongs(w);
    onValidated(w.every(row => row.every(x => !x)));
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Encadrez chaque nombre à l&apos;unité près.</p>
      </div>
      <div className="grid grid-cols-[1.5rem_5rem_1.25rem_minmax(3rem,max-content)_1.25rem_5rem] items-center gap-x-2 gap-y-3">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span className="text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {wrongs[i]?.[0]
              ? <Err wrong={vals[i]?.[0] ?? ""} correct={String(item.lo)} className="w-16" />
              : <input type="text" value={vals[i]?.[0] ?? ""} disabled={validated}
                  onChange={e => setVals(p => p.map((v, vi) => vi === i ? [e.target.value, v[1]!] as [string, string] : v))}
                  className={`${IC(false)} w-16`} />}
            <span className="text-sm text-[var(--color-text-secondary)] text-center">&lt;</span>
            <span className="font-mono text-sm font-bold text-[var(--color-accent-alg)]">{item.numStr}</span>
            <span className="text-sm text-[var(--color-text-secondary)] text-center">&lt;</span>
            {wrongs[i]?.[1]
              ? <Err wrong={vals[i]?.[1] ?? ""} correct={String(item.hi)} className="w-16" />
              : <input type="text" value={vals[i]?.[1] ?? ""} disabled={validated}
                  onChange={e => setVals(p => p.map((v, vi) => vi === i ? [v[0]!, e.target.value] as [string, string] : v))}
                  className={`${IC(false)} w-16`} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── Ex 12 — Lire une droite numérique ─────────────────────────────────────────
type NLLine = { min: number; max: number; step: number; numDivs: number; arrows: number[] };
function genNLRead(): NLLine[] {
  const divChoices1 = [10, 15];
  const divChoices2 = [20, 25, 30, 35, 40, 45, 50];
  return [divChoices1, divChoices2].map(opts => {
    const numDivs = opts[rnd(0, opts.length - 1)]!;
    const step = 0.1;
    const min = rnd(0, 9);
    const max = +(min + numDivs * step).toFixed(1);
    const candidates: number[] = [];
    for (let k = 1; k < numDivs; k++) {
      if (k % 5 === 0) continue;
      candidates.push(+(min + k * step).toFixed(1));
    }
    const arrows = shuffle(candidates).slice(0, 2).sort((a, b) => a - b);
    return { min, max, step, numDivs, arrows };
  });
}

export function DecReadNLReadExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [lines] = useState<NLLine[]>(genNLRead);
  const [vals, setVals] = useState<string[][]>(() => lines.map(l => l.arrows.map(() => "")));
  const [wrongs, setWrongs] = useState<boolean[][]>(() => lines.map(l => l.arrows.map(() => false)));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = lines.map((l, li) =>
      l.arrows.map((v, ai) => {
        const expected = v.toFixed(1).replace(".", ",");
        return !acc(expected).includes((vals[li]?.[ai] ?? "").trim());
      })
    );
    setWrongs(w);
    const flat = w.flat();
    onValidated(w.every(row => row.every(x => !x)), flat.filter(x => !x).length, flat.length);
  }, [validated, lines, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const ML = 40, lineW = 400, lineY = 80, svgH = 115;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      <div className="space-y-6">
        {lines.map((line, li) => {
          const pos = (v: number) => ML + ((v - line.min) / (line.numDivs * line.step)) * lineW;
          return (
            <div key={li} className="rounded-xl border border-[var(--color-border-default)] p-3">
              <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 490 ${svgH}`} width="100%" style={{ display: "block" }}>
                  {/* Main line — extends 30px past last tick */}
                  <line x1={ML} y1={lineY} x2={ML + lineW + 28} y2={lineY} stroke="currentColor" strokeWidth="2" />
                  <polygon points={`${ML + lineW + 36},${lineY} ${ML + lineW + 28},${lineY - 4} ${ML + lineW + 28},${lineY + 4}`} fill="currentColor" />
                  {/* Ticks — bigger every 5 */}
                  {Array.from({ length: line.numDivs + 1 }, (_, k) => {
                    const v = +(line.min + k * line.step).toFixed(1);
                    const x = ML + (k / line.numDivs) * lineW;
                    const major = k % 5 === 0;
                    return (
                      <g key={k}>
                        <line x1={x} y1={lineY} x2={x} y2={lineY + (major ? 10 : 5)} stroke="currentColor" strokeWidth={major ? 1.5 : 1} />
                        {major && <text x={x} y={lineY + 22} textAnchor="middle" fontSize="11" fill="currentColor">{v.toFixed(1).replace(".", ",")}</text>}
                      </g>
                    );
                  })}
                  {/* Arrows with input */}
                  {line.arrows.map((v, ai) => {
                    const x = pos(v);
                    const expected = v.toFixed(1).replace(".", ",");
                    const isWrong = wrongs[li]?.[ai];
                    const lineColor = validated && isWrong ? "#F59E0B" : "var(--color-accent-alg)";
                    const ulY = 28;
                    return (
                      <g key={ai}>
                        <line x1={x} y1={ulY} x2={x} y2={lineY - 4} stroke={lineColor} strokeWidth="1.5" strokeDasharray="4,2" />
                        <polygon points={`${x},${lineY - 2} ${x - 4},${lineY - 9} ${x + 4},${lineY - 9}`} fill={lineColor} />
                        {validated
                          ? isWrong
                            ? <text x={x} textAnchor="middle" fontSize="9">
                                <tspan y={16} fill="#D97706" textDecoration="line-through">{vals[li]?.[ai] || "—"}</tspan>
                                <tspan x={x} y={26} fontSize="11" fontWeight="bold" fill="currentColor">{expected}</tspan>
                              </text>
                            : <text x={x} y={20} textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--color-accent-alg)">
                                {vals[li]?.[ai] ?? ""}
                              </text>
                          : <foreignObject x={x - 22} y={4} width={44} height={22}>
                              <input
                                type="text"
                                value={vals[li]?.[ai] ?? ""}
                                onChange={e => setVals(p => p.map((row, ri) => ri === li ? row.map((c, ci) => ci === ai ? e.target.value : c) : row))}
                                style={{ width: "100%", height: "100%", textAlign: "center", fontSize: "11px", background: "transparent", border: "none", outline: "none" }}
                              />
                            </foreignObject>}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ex 13 — Placer sur la droite ──────────────────────────────────────────────
type NLPlaceConfig = { min: number; max: number; step: number; numDivs: number; positions: number[] };
function genNLPlace(): NLPlaceConfig {
  const options = [
    { numDivs: 10, step: 0.1 },
    { numDivs: 15, step: 0.1 },
    { numDivs: 20, step: 0.05 },
    { numDivs: 25, step: 0.04 },
    { numDivs: 50, step: 0.02 },
  ];
  const { numDivs, step } = options[rnd(0, options.length - 1)]!;
  const min = rnd(0, 9);
  const max = +(min + numDivs * step).toFixed(2);
  const candidates: number[] = [];
  for (let k = 1; k < numDivs; k++) {
    if (k % 5 === 0) continue;
    candidates.push(+(min + k * step).toFixed(2));
  }
  const positions = shuffle(candidates).slice(0, 5).sort((a, b) => a - b);
  return { min, max, step, numDivs, positions };
}

export function DecReadNLPlaceExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean, correct?: number, total?: number) => void;
}) {
  const [cfg] = useState<NLPlaceConfig>(genNLPlace);
  const chips = useState(() => shuffle([...cfg.positions]))[0];
  const [assignments, setAssignments] = useState<(number | null)[]>(() => cfg.positions.map(() => null));
  const [activeChip, setActiveChip] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);
  const [posWrong, setPosWrong] = useState<boolean[]>(() => cfg.positions.map(() => false));

  const assignedChips = new Set(assignments.filter(a => a !== null));

  function handleChipClick(v: number) {
    if (validated) return;
    setActiveChip(prev => prev === v ? null : v);
  }
  function handlePosClick(pi: number) {
    if (validated || activeChip === null) return;
    setAssignments(prev => prev.map((a, i) => {
      if (a === activeChip) return null;
      if (i === pi) return activeChip;
      return a;
    }).map((a, i) => i === pi ? activeChip : a));
    setActiveChip(null);
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = cfg.positions.map((v, i) => assignments[i] !== v);
    setPosWrong(w);
    onValidated(w.every(x => !x), w.filter(x => !x).length, w.length);
  }, [validated, cfg, assignments, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const ML = 40, lineW = 400, lineY = 56, svgH = 115;
  const pos = (v: number) => ML + ((v - cfg.min) / (cfg.numDivs * cfg.step)) * lineW;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      </div>
      <div className="rounded-xl border border-[var(--color-border-default)] p-3">
        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 490 ${svgH}`} width="100%" style={{ display: "block" }}>
            {/* Main line — extends past last tick */}
            <line x1={ML} y1={lineY} x2={ML + lineW + 28} y2={lineY} stroke="currentColor" strokeWidth="2" />
            <polygon points={`${ML + lineW + 36},${lineY} ${ML + lineW + 28},${lineY - 4} ${ML + lineW + 28},${lineY + 4}`} fill="currentColor" />
            {/* Ticks — bigger every 5 */}
            {Array.from({ length: cfg.numDivs + 1 }, (_, k) => {
              const v = +(cfg.min + k * cfg.step).toFixed(2);
              const x = ML + (k / cfg.numDivs) * lineW;
              const major = k % 5 === 0;
              return (
                <g key={k}>
                  <line x1={x} y1={lineY} x2={x} y2={lineY + (major ? 10 : 5)} stroke="currentColor" strokeWidth={major ? 1.5 : 1} />
                  {major && <text x={x} y={lineY + 22} textAnchor="middle" fontSize="11" fill="currentColor">{fmtNum(v)}</text>}
                </g>
              );
            })}
            {/* Position markers */}
            {cfg.positions.map((v, pi) => {
              const x = pos(v);
              const assigned = assignments[pi];
              const w = posWrong[pi];
              const fillColor = w ? "#FEF3C7" : assigned !== null ? "#DBEAFE" : "#F3F4F6";
              const strokeColor = w ? "#F59E0B" : assigned !== null ? "var(--color-accent-alg)" : "#9CA3AF";
              return (
                <g key={pi} style={{ cursor: validated ? "default" : "pointer" }} onClick={() => handlePosClick(pi)}>
                  <circle cx={x} cy={lineY} r="6" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
                  <text x={x} y={lineY - 12} textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--color-accent-alg)">P{pi + 1}</text>
                  {assigned !== null && (
                    w ? (
                      <text x={x} textAnchor="middle" fontSize="9">
                        <tspan y={lineY + 30} fill="#D97706" textDecoration="line-through">{fmtNum(assigned)}</tspan>
                        <tspan x={x} y={lineY + 42} fontSize="10" fontWeight="bold" fill="currentColor">{fmtNum(v)}</tspan>
                      </text>
                    ) : (
                      <text x={x} y={lineY + 34} textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--color-accent-alg)">
                        {fmtNum(assigned)}
                      </text>
                    )
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {chips.map(v => {
          const vStr = fmtNum(v);
          const isAssigned = assignedChips.has(v);
          const isActive = activeChip === v;
          let cls = "h-10 w-20 rounded-xl border text-sm font-mono font-bold transition-colors ";
          if (isActive) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]";
          else if (isAssigned) cls += "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] opacity-50";
          else cls += "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-alg)] cursor-pointer";
          return (
            <button key={v} type="button" className={cls} onClick={() => handleChipClick(v)} disabled={validated}>
              {vStr}
            </button>
          );
        })}
      </div>
    </div>
  );
}
