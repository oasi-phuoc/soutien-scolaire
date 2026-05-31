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

// Correction box (amber, wrong then correct)
function Err({ wrong, correct }: { wrong: string; correct: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-xl border border-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-1 text-sm min-w-[4rem] justify-center">
      <span className="text-amber-600 line-through tabular-nums">{wrong || "—"}</span>
      <span className="font-bold text-[var(--color-text-primary)] tabular-nums">{correct}</span>
    </span>
  );
}
const IC = (w: boolean) =>
  `rounded-xl border px-2 py-1 text-sm text-center outline-none transition-colors tabular-nums ${
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
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
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
    onValidated(newWrongs.every(row => row.every(w => !w)));
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Décomposer un nombre décimal</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Décomposez chaque nombre en parties décimales.</p>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
            <span className="text-sm font-mono text-[var(--color-text-primary)]">{item.numStr} =</span>
            {item.parts.map((p, j) => (
              <React.Fragment key={j}>
                {wrongs[i]?.[j]
                  ? <Err wrong={vals[i]?.[j] ?? ""} correct={p} />
                  : <input
                      type="text"
                      value={vals[i]?.[j] ?? ""}
                      disabled={validated}
                      onChange={e => {
                        const v = e.target.value;
                        setVals(prev => prev.map((row, ri) => ri === i ? row.map((c, ci) => ci === j ? v : c) : row));
                      }}
                      className={`${IC(false)} w-16`}
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
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
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
    onValidated(newWrongs.every(w => !w));
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Recomposer un nombre décimal</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Calculez le nombre décimal correspondant.</p>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
            <span className="text-sm font-mono text-[var(--color-text-primary)]">{item.parts.join(" + ")} =</span>
            {wrongs[i]
              ? <Err wrong={vals[i] ?? ""} correct={item.numStr} />
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
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [items] = useState<PlaceItem[]>(genPlaceValue);
  const [selected, setSelected] = useState<(number | null)[]>(() => items.map(() => null));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    onValidated(items.every((item, i) => selected[i] === item.correctPos));
  }, [validated, items, selected, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Valeur d&apos;un chiffre</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Identifiez la position du chiffre coloré.</p>
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
                  })}</span>, le chiffre <span className="font-bold text-[var(--color-accent-alg)]">{item.digitChar}</span> est dans la position des :
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pl-7">
                {POS_LABELS.map((lbl, pi) => {
                  let cls = "rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors ";
                  if (validated) {
                    if (pi === correct && sel !== correct) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                    else if (pi === sel && sel !== correct) cls += "border-amber-500 bg-amber-50 text-amber-600";
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
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
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
    onValidated(w.every(row => row.every(x => !x)));
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Chiffre à un rang donné</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Trouvez le chiffre à chaque rang indiqué.</p>
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
                  ? <Err wrong={vals[i]?.[j] ?? ""} correct={ask.answer} />
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
  while (nums.length < 6) {
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
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
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
    onValidated(w.every(x => !x));
  }, [validated, nums, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Dictée de nombres</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Écoutez et écrivez le nombre entendu.</p>
      </div>
      <div className="space-y-3">
        {nums.map((n, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
            <PlayBtn text={decToFr(n)} />
            {wrongs[i]
              ? <Err wrong={vals[i] ?? ""} correct={n} />
              : <input
                  type="text"
                  value={vals[i] ?? ""}
                  disabled={validated}
                  onChange={e => setVals(prev => prev.map((v, vi) => vi === i ? e.target.value : v))}
                  placeholder="ex: 7,82"
                  className={`${IC(false)} w-24`}
                />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Ex 6 — Tableau de numération ─────────────────────────────────────────────
type TableRow = { d: number; u: number; dx: number; cx: number; answer: string };
function genTable(): TableRow[] {
  const rows: TableRow[] = [];
  while (rows.length < 5) {
    const d = rnd(1, 9), u = rnd(0, 9), dx = rnd(1, 9), cx = rnd(1, 9);
    rows.push({ d, u, dx, cx, answer: `${d * 10 + u},${dx}${cx}` });
  }
  return rows;
}

export function DecReadTableExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [rows] = useState<TableRow[]>(genTable);
  const [vals, setVals] = useState<string[]>(() => rows.map(() => ""));
  const [wrongs, setWrongs] = useState<boolean[]>(() => rows.map(() => false));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = rows.map((r, i) => !acc(r.answer).includes((vals[i] ?? "").trim()));
    setWrongs(w);
    onValidated(w.every(x => !x));
  }, [validated, rows, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Tableau de numération</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Écrivez le nombre décimal correspondant à chaque ligne.</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-[var(--color-accent-alg)]/10">
              {["#", "Dizaines", "Unités", ",", "Dixièmes", "Centièmes", "Nombre"].map((h, i) => (
                <th key={i} className="px-3 py-2 text-center text-xs font-semibold text-[var(--color-accent-alg)]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-[var(--color-border-default)]">
                <td className="px-3 py-2 text-center text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}</td>
                <td className="px-3 py-2 text-center font-mono">{r.d}</td>
                <td className="px-3 py-2 text-center font-mono">{r.u}</td>
                <td className="px-3 py-2 text-center font-mono text-[var(--color-text-secondary)]">,</td>
                <td className="px-3 py-2 text-center font-mono">{r.dx}</td>
                <td className="px-3 py-2 text-center font-mono">{r.cx}</td>
                <td className="px-2 py-1.5">
                  {wrongs[i]
                    ? <Err wrong={vals[i] ?? ""} correct={r.answer} />
                    : <input
                        type="text"
                        value={vals[i] ?? ""}
                        disabled={validated}
                        onChange={e => setVals(prev => prev.map((v, vi) => vi === i ? e.target.value : v))}
                        className={`${IC(false)} w-20`}
                      />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Ex 7 — Comparer ───────────────────────────────────────────────────────────
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
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [pairs] = useState<ComparePair[]>(genCompare);
  const [selected, setSelected] = useState<(string | null)[]>(() => pairs.map(() => null));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    onValidated(pairs.every((p, i) => selected[i] === p.op));
  }, [validated, pairs, selected, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Comparer des décimaux</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Complétez avec &lt;, = ou &gt;.</p>
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
                  if (sym === correct && sym !== sel) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
                  else if (sym === sel && sel !== correct) cls += "border-amber-500 bg-amber-50 text-amber-600";
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
  while (nums.length < 5) {
    const intPart = rnd(1, 9);
    const dec = rnd(1, 9);
    const s = `${intPart},${dec}`;
    if (!nums.includes(s)) nums.push(s);
  }
  return shuffle(nums);
}

export function DecReadOrderExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [chips] = useState<string[]>(genOrder);
  const [slots, setSlots] = useState<(string | null)[]>([null, null, null, null, null]);
  const [validated, setValidated] = useState(false);
  const [slotWrong, setSlotWrong] = useState<boolean[]>([false, false, false, false, false]);

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
    onValidated(w.every(x => !x));
  }, [validated, chips, slots, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const sorted = [...chips].sort((a, b) => parseFloat(a.replace(",", ".")) - parseFloat(b.replace(",", ".")));

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Ordre croissant</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Cliquez les nombres dans l&apos;ordre croissant.</p>
      </div>
      {/* Slots */}
      <div className="flex gap-2 flex-wrap">
        {slots.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs text-[var(--color-text-secondary)]">{i + 1}{i === 0 ? "er" : "ème"}</span>
            <button
              type="button"
              onClick={() => removeSlot(i)}
              className={`h-10 w-16 rounded-xl border text-sm font-mono font-bold transition-colors ${
                s === null
                  ? "border-dashed border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
                  : validated && slotWrong[i]
                    ? "border-amber-500 bg-amber-50 text-amber-600"
                    : "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]"
              }`}
            >
              {s ?? "—"}
            </button>
            {validated && slotWrong[i] && <span className="text-xs font-bold text-[var(--color-accent-alg)]">{sorted[i]}</span>}
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
            className="h-10 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 text-sm font-mono font-bold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent-alg)] disabled:opacity-50"
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
    while (nums.length < 8) {
      const intPart = rnd(lo - 1, hi + 1);
      const dec = rnd(0, 9);
      const val = intPart + dec / 10;
      const s = `${intPart},${dec}`;
      if (!nums.includes(s) && val !== lo && val !== hi) nums.push(s);
    }
    return { threshold: `${lo} et ${hi}`, thresholdVal: lo, nums: shuffle(nums), mode, lo, hi };
  }
  const t = rnd(20, 70) / 10;
  const tStr = t.toFixed(1).replace(".", ",");
  const nums: string[] = [tStr]; // include threshold itself
  while (nums.length < 8) {
    const intPart = Math.floor(t) + rnd(-1, 1);
    if (intPart < 0) continue;
    const dec = rnd(0, 9);
    const s = `${intPart},${dec}`;
    if (!nums.includes(s)) nums.push(s);
  }
  return { threshold: tStr, thresholdVal: t, nums: shuffle(nums), mode };
}

function FilterExercise({ exNum, mode, validateCommand, onValidated }: {
  exNum: number; mode: "gt" | "lt" | "between"; validateCommand: number; onValidated: (ok: boolean) => void;
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
    onValidated(cfg.nums.every(s => {
      const c = isCorrect(s), sel = selected.has(s);
      return (c && sel) || (!c && !sel);
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, cfg, selected, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const title = mode === "gt"
    ? "Nombres supérieurs à x"
    : mode === "lt"
      ? "Nombres inférieurs à x"
      : "Nombres entre x et y";

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — {title}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{consigne}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {cfg.nums.map(s => {
          const sel = selected.has(s);
          const st = chipState[s];
          let cls = "rounded-xl border px-4 py-2 text-sm font-mono font-bold transition-colors ";
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
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  return <FilterExercise exNum={exNum} mode="gt" validateCommand={validateCommand} onValidated={onValidated} />;
}
export function DecReadFilterLtExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  return <FilterExercise exNum={exNum} mode="lt" validateCommand={validateCommand} onValidated={onValidated} />;
}
export function DecReadFilterBetweenExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  return <FilterExercise exNum={exNum} mode="between" validateCommand={validateCommand} onValidated={onValidated} />;
}

// ── Ex 12 — Encadrement ───────────────────────────────────────────────────────
function genEncadrement(): { numStr: string; lo: number; hi: number }[] {
  const items = [];
  while (items.length < 5) {
    const intPart = rnd(1, 19);
    const dec = rnd(1, 9);
    items.push({ numStr: `${intPart},${dec}`, lo: intPart, hi: intPart + 1 });
  }
  return items;
}

export function DecReadEncadrementExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [items] = useState(genEncadrement);
  const [vals, setVals] = useState<{ lo: string; hi: string }[]>(() => items.map(() => ({ lo: "", hi: "" })));
  const [wrongs, setWrongs] = useState<{ lo: boolean; hi: boolean }[]>(() => items.map(() => ({ lo: false, hi: false })));
  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = items.map((item, i) => ({
      lo: (vals[i]?.lo ?? "").trim() !== String(item.lo),
      hi: (vals[i]?.hi ?? "").trim() !== String(item.hi),
    }));
    setWrongs(w);
    onValidated(w.every(x => !x.lo && !x.hi));
  }, [validated, items, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Encadrement entre entiers</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Encadrez chaque nombre entre deux entiers consécutifs.</p>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-[var(--color-accent-alg)] w-5 shrink-0">{i + 1}.</span>
            {wrongs[i]?.lo
              ? <Err wrong={vals[i]?.lo ?? ""} correct={String(item.lo)} />
              : <input type="text" value={vals[i]?.lo ?? ""} disabled={validated}
                  onChange={e => setVals(p => p.map((v, vi) => vi === i ? { ...v, lo: e.target.value } : v))}
                  className={`${IC(false)} w-14`} />}
            <span className="text-sm text-[var(--color-text-secondary)]">&lt;</span>
            <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">{item.numStr}</span>
            <span className="text-sm text-[var(--color-text-secondary)]">&lt;</span>
            {wrongs[i]?.hi
              ? <Err wrong={vals[i]?.hi ?? ""} correct={String(item.hi)} />
              : <input type="text" value={vals[i]?.hi ?? ""} disabled={validated}
                  onChange={e => setVals(p => p.map((v, vi) => vi === i ? { ...v, hi: e.target.value } : v))}
                  className={`${IC(false)} w-14`} />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Ex 13 — Lire une droite numérique ─────────────────────────────────────────
type NLLine = { min: number; max: number; arrows: number[] };
function genNLRead(): NLLine[] {
  const lines: NLLine[] = [];
  while (lines.length < 2) {
    const a = rnd(0, 8);
    const candidates = [1,2,3,4,5,6,7,8,9].map(d => a + d / 10).filter(v => v < a + 1);
    const picked = shuffle(candidates).slice(0, 2).sort((x, y) => x - y);
    lines.push({ min: a, max: a + 1, arrows: picked });
  }
  return lines;
}

export function DecReadNLReadExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
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
    onValidated(w.every(row => row.every(x => !x)));
  }, [validated, lines, vals, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const ML = 40, lineW = 400, lineY = 80, svgH = 110;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Lire une droite numérique</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Écrivez la valeur indiquée par chaque flèche.</p>
      </div>
      <div className="space-y-6">
        {lines.map((line, li) => {
          const range = line.max - line.min;
          const pos = (v: number) => ML + ((v - line.min) / range) * lineW;
          const boxW = 52, boxH = 26;
          return (
            <div key={li} className="rounded-xl border border-[var(--color-border-default)] p-3">
              <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 480 ${svgH}`} width="100%" style={{ display: "block" }}>
                  {/* Main line */}
                  <line x1={ML} y1={lineY} x2={ML + lineW} y2={lineY} stroke="currentColor" strokeWidth="2" />
                  <polygon points={`${ML + lineW + 8},${lineY} ${ML + lineW},${lineY - 4} ${ML + lineW},${lineY + 4}`} fill="currentColor" />
                  {/* Ticks */}
                  {Array.from({ length: 11 }, (_, k) => {
                    const v = line.min + k / 10;
                    const x = pos(v);
                    const major = k === 0 || k === 10;
                    return (
                      <g key={k}>
                        <line x1={x} y1={lineY} x2={x} y2={lineY + (major ? 10 : 5)} stroke="currentColor" strokeWidth={major ? 2 : 1} />
                        {major && <text x={x} y={lineY + 22} textAnchor="middle" fontSize="11" fill="currentColor">{v.toFixed(1).replace(".", ",")}</text>}
                      </g>
                    );
                  })}
                  {/* Arrows with inputs */}
                  {line.arrows.map((v, ai) => {
                    const x = pos(v);
                    const expected = v.toFixed(1).replace(".", ",");
                    const bxOffset = ai === 0 ? -boxW - 4 : 4;
                    const bx = Math.max(ML, Math.min(ML + lineW - boxW, x + bxOffset));
                    const by = 4;
                    const isWrong = wrongs[li]?.[ai];
                    return (
                      <g key={ai}>
                        <line x1={x} y1={by + boxH} x2={x} y2={lineY - 4} stroke="var(--color-accent-alg)" strokeWidth="1.5" strokeDasharray="4,2" />
                        <polygon points={`${x},${lineY - 2} ${x - 4},${lineY - 9} ${x + 4},${lineY - 9}`} fill="var(--color-accent-alg)" />
                        <rect x={bx} y={by} width={boxW} height={boxH} rx="5"
                          fill={isWrong ? "#FEF3C7" : "#DBEAFE"}
                          stroke={isWrong ? "#F59E0B" : "var(--color-accent-alg)"} strokeWidth="1.5" />
                        {validated
                          ? <text x={bx + boxW / 2} y={by + boxH / 2 + 4} textAnchor="middle" fontSize="11" fontWeight="bold"
                              fill={isWrong ? "#D97706" : "currentColor"}>
                              {isWrong ? expected : (vals[li]?.[ai] ?? "")}
                            </text>
                          : <foreignObject x={bx + 2} y={by + 2} width={boxW - 4} height={boxH - 4}>
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

// ── Ex 14 — Placer sur la droite ──────────────────────────────────────────────
type NLPlaceConfig = { min: number; max: number; positions: number[] };
function genNLPlace(): NLPlaceConfig {
  const a = rnd(0, 7);
  const candidates = [1,2,3,4,5,6,7,8,9].map(d => a + d / 10);
  const positions = shuffle(candidates).slice(0, 5).sort((x, y) => x - y);
  return { min: a, max: a + 1, positions };
}

export function DecReadNLPlaceExercise({ exNum, validateCommand, onValidated }: {
  exNum: number; validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  const [cfg] = useState<NLPlaceConfig>(genNLPlace);
  // chips = position values (shuffled for display)
  const chips = useState(() => shuffle([...cfg.positions]))[0];
  // assignments: positionIndex → chipValue (or null)
  const [assignments, setAssignments] = useState<(number | null)[]>(() => cfg.positions.map(() => null));
  const [activeChip, setActiveChip] = useState<number | null>(null); // chip value
  const [validated, setValidated] = useState(false);
  const [posWrong, setPosWrong] = useState<boolean[]>(() => cfg.positions.map(() => false));

  const assignedChips = new Set(assignments.filter(a => a !== null));

  function handleChipClick(v: number) {
    if (validated) return;
    setActiveChip(prev => prev === v ? null : v);
  }
  function handlePosClick(pi: number) {
    if (validated || activeChip === null) return;
    // Unassign if already assigned somewhere
    const newAssignments = assignments.map((a, i) => {
      if (a === activeChip) return null; // remove previous assignment of this chip
      if (i === pi) return activeChip;   // assign to this position
      return a;
    });
    // Also assign to this position (handle both removals and new assignment)
    setAssignments(newAssignments.map((a, i) => i === pi ? activeChip : a));
    setActiveChip(null);
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const w = cfg.positions.map((v, i) => assignments[i] !== v);
    setPosWrong(w);
    onValidated(w.every(x => !x));
  }, [validated, cfg, assignments, onValidated]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const ML = 40, lineW = 400, lineY = 60, svgH = 90;
  const pos = (v: number) => ML + ((v - cfg.min) / (cfg.max - cfg.min)) * lineW;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice {exNum} — Placer sur la droite</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Cliquez un nombre ci-dessous, puis cliquez sa position P sur la droite.
        </p>
      </div>
      {/* Number line SVG */}
      <div className="rounded-xl border border-[var(--color-border-default)] p-3">
        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 480 ${svgH}`} width="100%" style={{ display: "block" }}>
            <line x1={ML} y1={lineY} x2={ML + lineW} y2={lineY} stroke="currentColor" strokeWidth="2" />
            <polygon points={`${ML + lineW + 8},${lineY} ${ML + lineW},${lineY - 4} ${ML + lineW},${lineY + 4}`} fill="currentColor" />
            {Array.from({ length: 11 }, (_, k) => {
              const v = cfg.min + k / 10;
              const x = pos(v);
              const major = k === 0 || k === 10;
              return (
                <g key={k}>
                  <line x1={x} y1={lineY} x2={x} y2={lineY + (major ? 10 : 5)} stroke="currentColor" strokeWidth={major ? 2 : 1} />
                  {major && <text x={x} y={lineY + 22} textAnchor="middle" fontSize="11" fill="currentColor">{v.toFixed(1).replace(".", ",")}</text>}
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
                    <text x={x} y={lineY + 35} textAnchor="middle" fontSize="10" fontWeight="bold"
                      fill={w ? "#D97706" : "var(--color-accent-alg)"}>
                      {w ? `${assigned.toFixed(1).replace(".", ",")}≠${v.toFixed(1).replace(".", ",")}` : assigned.toFixed(1).replace(".", ",")}
                    </text>
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
          const vStr = v.toFixed(1).replace(".", ",");
          const isAssigned = assignedChips.has(v);
          const isActive = activeChip === v;
          let cls = "rounded-xl border px-4 py-2 text-sm font-mono font-bold transition-colors ";
          if (isActive) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white";
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
