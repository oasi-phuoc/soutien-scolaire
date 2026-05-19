"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { answerMatches } from "@/lib/curriculum/content/math-a1-types";
import type { MathExerciseItem, MathRichBlock, MathSubmoduleLesson } from "@/lib/curriculum/content/math-a1-types";
import { getLessonsForModule } from "@/lib/curriculum/lessons-registry";
import { loadProgress, saveProgress, completeSubmodule } from "@/lib/progress/math-progress";

// ── Step types ─────────────────────────────────────────────────────────────────
type TheoryStep              = { kind: "theory"; lesson: MathSubmoduleLesson };
type FractionToggleStep      = { kind: "fraction_toggle"; lesson: MathSubmoduleLesson };
type DecimalExercisesStep    = { kind: "a4_decimal_exercises" };
type ExerciseStep            = { kind: "exercise"; lesson: MathSubmoduleLesson; item: MathExerciseItem; exNum: number };
type FlatStep = TheoryStep | FractionToggleStep | DecimalExercisesStep | ExerciseStep;

// ── Helpers ────────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}
function shufflePick<T>(arr: T[], n: number): T[] { return shuffle(arr).slice(0, n); }

function fracToDecStr(n: number, d: number): string {
  const val = n / d;
  if (Number.isInteger(val)) return val.toString();
  if (d === 10) return val.toFixed(1).replace(".", ",");
  return val.toFixed(2).replace(".", ",");
}

function buildSteps(lessons: MathSubmoduleLesson[]): FlatStep[] {
  const steps: FlatStep[] = [];
  for (const lesson of lessons) {
    steps.push({ kind: "theory", lesson });
    if (lesson.submoduleId === "A4-1") {
      steps.push({ kind: "fraction_toggle", lesson });
    } else if (lesson.submoduleId === "A4-2") {
      steps.push({ kind: "a4_decimal_exercises" });
    } else {
      const pool = lesson.exercisePool;
      const size = lesson.poolSize ?? 5;
      const exs = pool && pool.length > 0 ? shufflePick(pool, size) : lesson.exercises.slice(0, size);
      exs.forEach((item, i) => steps.push({ kind: "exercise", lesson, item, exNum: i + 1 }));
    }
  }
  return steps;
}

// ── Block renderer ─────────────────────────────────────────────────────────────
function BlockView({ block }: { block: MathRichBlock }) {
  switch (block.type) {
    case "heading":
      return block.black ? (
        <h3 className="mt-3 mb-1 text-sm font-bold text-[var(--color-text-primary)]">{block.fr}</h3>
      ) : (
        <h3 className="mt-4 mb-1 text-sm font-bold uppercase tracking-wide text-[var(--color-accent-alg)]">{block.fr}</h3>
      );
    case "plain":
      return <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{block.fr}</p>;
    case "note":
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300">
          {block.fr}
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl bg-[var(--color-bg-secondary)] px-4 py-3 font-mono text-xs text-[var(--color-text-primary)]">
          {block.fr}
        </div>
      );
    case "highlight":
      return (
        <div className="rounded-xl border border-[var(--color-accent-alg)]/30 bg-[var(--color-accent-alg)]/8 px-4 py-3 text-sm font-semibold text-[var(--color-text-primary)]">
          {block.fr}
        </div>
      );
    case "rule":
      return (
        <div className="space-y-2 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3">
          <p className="text-xs font-bold text-[var(--color-text-primary)]">{block.titleFr}</p>
          <ul className="list-disc space-y-1 pl-4">
            {block.itemsFr.map((it, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)]">{it}</li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border-default)]">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="bg-[var(--color-bg-secondary)]">
                {block.headersFr.map((h, i) => (
                  <th key={i} className={`px-3 py-2 text-left font-semibold ${block.accentHeader ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-[var(--color-border-default)]">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-[var(--color-text-secondary)]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.captionFr && (
            <p className="px-3 py-1 text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    case "svg":
      return block.noFrame ? (
        <div className="my-2">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      ) : (
        <div className="my-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
          <div dangerouslySetInnerHTML={{ __html: block.markup }} />
          {block.captionFr && (
            <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{block.captionFr}</p>
          )}
        </div>
      );
    case "section":
      return (
        <div className="space-y-1.5">
          <p className="text-sm font-bold text-[var(--color-accent-alg)]">{block.labelFr}</p>
          {block.itemsFr.length > 0 && (
            <ul className="space-y-1 border-l-2 border-[var(--color-accent-alg)]/30 pl-3">
              {block.itemsFr.map((item, ii) => (
                <li key={ii} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent-alg)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case "svg_row":
      return (
        <div className="flex gap-3">
          {block.items.map((item, ii) => (
            <div key={ii} className="flex-1 overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white p-3">
              <div dangerouslySetInnerHTML={{ __html: item.markup }} />
              {item.captionFr && (
                <p className="mt-1 text-center text-[10px] text-[var(--color-text-secondary)]">{item.captionFr}</p>
              )}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function TheoryView({ lesson }: { lesson: MathSubmoduleLesson }) {
  const { theory, submoduleCode } = lesson;
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">{submoduleCode}</p>
        <h2 className="mt-0.5 text-lg font-bold text-[var(--color-text-primary)]">{theory.title.fr}</h2>
      </div>
      {theory.blocks && theory.blocks.length > 0 ? (
        <div className="space-y-3">
          {theory.blocks.map((block, i) => <BlockView key={i} block={block} />)}
        </div>
      ) : (
        <div className="space-y-3">
          {theory.paragraphs.fr.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[var(--color-text-primary)]">{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Fraction display (vertical) ────────────────────────────────────────────────
function FractionDisplay({ numerator, denominator, highlightPart }: {
  numerator: number; denominator: number; highlightPart: "num" | "den";
}) {
  return (
    <span className="inline-flex flex-col items-center gap-1 py-1">
      <span className={`text-3xl font-bold leading-none tabular-nums ${highlightPart === "num" ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>
        {numerator}
      </span>
      <span className="h-[3px] w-10 rounded bg-[var(--color-text-primary)]" />
      <span className={`text-3xl font-bold leading-none tabular-nums ${highlightPart === "den" ? "text-[var(--color-accent-alg)]" : "text-[var(--color-text-primary)]"}`}>
        {denominator}
      </span>
    </span>
  );
}

// Small inline fraction (for matching/conversion rows)
function FracInline({ frac }: { frac: string }) {
  const parts = frac.split("/");
  const n = parts[0] ?? "";
  const d = parts[1] ?? "";
  return (
    <span className="inline-flex flex-col items-center leading-none gap-0.5">
      <span className="text-sm font-bold text-[var(--color-accent-alg)]">{n}</span>
      <span className="h-[1.5px] w-5 rounded bg-[var(--color-text-primary)]" />
      <span className="text-sm font-bold text-[var(--color-text-primary)]">{d}</span>
    </span>
  );
}

// ── Shape renderer (rect or grid) ─────────────────────────────────────────────
type ShapeKind = "rect" | "grid";

function FractionShape({ kind, d, colored, onToggle }: {
  kind: ShapeKind;
  d: number;
  colored: Set<number>;
  onToggle?: (i: number) => void;
}) {
  if (kind === "grid") {
    const cols = 10, cellW = 13, cellH = 10;
    const W = cols * cellW, H = 10 * cellH;
    return (
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
        {Array.from({ length: 100 }, (_, i) => {
          const r = Math.floor(i / cols), c = i % cols;
          return (
            <rect key={i} x={c * cellW} y={r * cellH} width={cellW} height={cellH}
              fill={colored.has(i) ? "#3b82f6" : "#eff6ff"}
              stroke="#93c5fd" strokeWidth={0.5}
              style={onToggle ? { cursor: "pointer" } : {}}
              onClick={onToggle ? () => onToggle(i) : undefined}
            />
          );
        })}
        <rect x={0} y={0} width={W} height={H} fill="none" stroke="#2563eb" strokeWidth={1.5} />
      </svg>
    );
  }
  // rect: d horizontal cells
  const W = 200, H = 48;
  const cellW = W / d;
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="mx-auto block">
      {Array.from({ length: d }, (_, i) => {
        const x = Math.round(i * cellW);
        const w = Math.round((i + 1) * cellW) - x;
        return (
          <rect key={i} x={x} y={0} width={w} height={H}
            fill={colored.has(i) ? "#3b82f6" : "#eff6ff"}
            stroke="#2563eb" strokeWidth={1}
            style={onToggle ? { cursor: "pointer" } : {}}
            onClick={onToggle ? () => onToggle(i) : undefined}
          />
        );
      })}
    </svg>
  );
}

// ── Exercise 1 — Fraction toggle ───────────────────────────────────────────────
type FractionItem = { numerator: number; denominator: number; highlight: "num" | "den" };

function generateFractionItems(): FractionItem[] {
  const pairs: { n: number; d: number }[] = [];
  const used = new Set<string>();
  while (pairs.length < 5) {
    const n = Math.floor(Math.random() * 9) + 1;
    const d = Math.floor(Math.random() * 9) + 1;
    if (n !== d && !used.has(`${n}-${d}`)) { pairs.push({ n, d }); used.add(`${n}-${d}`); }
  }
  return pairs.map(({ n, d }, i) => ({ numerator: n, denominator: d, highlight: (i % 2 === 0 ? "num" : "den") as "num" | "den" }));
}

function FractionToggleExercise({ validateCommand, onValidated }: {
  validateCommand: number;
  onValidated: (ok: boolean) => void;
}) {
  const [items] = useState<FractionItem[]>(generateFractionItems);
  const [selected, setSelected] = useState<(string | null)[]>(() => Array(5).fill(null));
  const [validated, setValidated] = useState(false);

  function select(i: number, choice: "num" | "den") {
    if (validated) return;
    setSelected(prev => { const n = [...prev]; n[i] = choice; return n; });
  }

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    onValidated(items.every((item, i) => selected[i] === item.highlight));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, items, selected]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  const mkCls = (chosen: boolean, isCorrect: boolean, isRight: boolean) => {
    let cls = `flex-1 py-2.5 text-sm font-medium text-center transition-colors `;
    if (isRight) cls += "border-l border-[var(--color-border-default)] ";
    if (!validated) {
      cls += chosen ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]" : "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]";
    } else {
      cls += chosen ? "bg-[var(--color-accent-alg)]/15 text-[var(--color-accent-alg)]"
        : isCorrect ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
        : "bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-50";
    }
    return cls;
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 1 — Identifie numérateur et dénominateur</h2>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Le nombre en bleu est-il le numérateur ou le dénominateur ?</p>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => {
          const numSel = selected[i] === "num", denSel = selected[i] === "den";
          const numCorrect = item.highlight === "num", denCorrect = item.highlight === "den";
          return (
            <div key={i} className="flex items-center gap-3">
              <p className="w-6 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{i + 1}.</p>
              <FractionDisplay numerator={item.numerator} denominator={item.denominator} highlightPart={item.highlight} />
              <div className="flex flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
                <button type="button" className={mkCls(numSel, numCorrect, false)} onClick={() => select(i, "num")} disabled={validated}>numérateur</button>
                <button type="button" className={mkCls(denSel, denCorrect, true)} onClick={() => select(i, "den")} disabled={validated}>dénominateur</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Generators for combined exercise ──────────────────────────────────────────
interface ColoringSpec { label: string; kind: ShapeKind; d: number; n: number; desc: string; }
interface FracReadSpec { label: string; kind: ShapeKind; d: number; n: number; answer: string; }
interface MatchPair { frac: string; dec: string; }
interface DecConvItem { label: string; frac: string; answer: string; }
interface FracConvItem { label: string; decStr: string; answer: string; denominator: number; }

function generateColoringItems(): ColoringSpec[] {
  const d1 = ([2, 4, 8] as const)[Math.floor(Math.random() * 3)]!;
  const n1 = Math.floor(Math.random() * (d1 - 1)) + 1;
  const n2 = Math.floor(Math.random() * 9) + 1;
  const n3 = Math.floor(Math.random() * 15) + 1;
  return [
    { label: "a", kind: "rect", d: d1, n: n1, desc: `${n1}/${d1} d'un rectangle partagé en ${d1} parties égales` },
    { label: "b", kind: "rect", d: 10, n: n2, desc: `${n2}/10 d'une bande partagée en 10 parties égales` },
    { label: "c", kind: "grid", d: 100, n: n3, desc: `${n3}/100 d'une grille de 100 cases` },
  ];
}

function generateFractionReadItems(): FracReadSpec[] {
  const d1 = ([2, 4, 8] as const)[Math.floor(Math.random() * 3)]!;
  const n1 = Math.floor(Math.random() * (d1 - 1)) + 1;
  const n2 = Math.floor(Math.random() * 9) + 1;
  const n3 = Math.floor(Math.random() * 15) + 1;
  return [
    { label: "a", kind: "rect", d: d1, n: n1, answer: `${n1}/${d1}` },
    { label: "b", kind: "rect", d: 10, n: n2, answer: `${n2}/10` },
    { label: "c", kind: "grid", d: 100, n: n3, answer: `${n3}/100` },
  ];
}

function generateMatchPairs(): MatchPair[] {
  const tens: number[] = [];
  while (tens.length < 2) { const n = Math.floor(Math.random() * 18) + 1; if (!tens.includes(n)) tens.push(n); }
  const hundreds: number[] = [];
  while (hundreds.length < 2) { const n = Math.floor(Math.random() * 9) + 1; if (!hundreds.includes(n)) hundreds.push(n); }
  return shuffle([
    ...tens.map(n => ({ frac: `${n}/10`, dec: fracToDecStr(n, 10) })),
    ...hundreds.map(n => ({ frac: `${n}/100`, dec: fracToDecStr(n, 100) })),
  ]);
}

function generateDecConvItems(): DecConvItem[] {
  const n1 = Math.floor(Math.random() * 9) + 1;
  const n2 = Math.floor(Math.random() * 20) + 11;
  const n3 = Math.floor(Math.random() * 9) + 1;
  const n4 = Math.floor(Math.random() * 100) + 100;
  return [
    { label: "a", frac: `${n1}/10`, answer: fracToDecStr(n1, 10) },
    { label: "b", frac: `${n2}/10`, answer: fracToDecStr(n2, 10) },
    { label: "c", frac: `${n3}/100`, answer: fracToDecStr(n3, 100) },
    { label: "d", frac: `${n4}/100`, answer: fracToDecStr(n4, 100) },
  ];
}

function generateFracConvItems(): FracConvItem[] {
  const n1 = Math.floor(Math.random() * 9) + 1;
  const n2 = Math.floor(Math.random() * 99) + 1;
  const n3 = Math.floor(Math.random() * 20) + 11;
  const n4 = Math.floor(Math.random() * 100) + 100;
  return [
    { label: "a", decStr: fracToDecStr(n1, 10), answer: n1.toString(), denominator: 10 },
    { label: "b", decStr: fracToDecStr(n2, 100), answer: n2.toString(), denominator: 100 },
    { label: "c", decStr: fracToDecStr(n3, 10), answer: n3.toString(), denominator: 10 },
    { label: "d", decStr: fracToDecStr(n4, 100), answer: n4.toString(), denominator: 100 },
  ];
}

// ── Combined Decimal Exercises (A4.2 — single step) ───────────────────────────
function CombinedDecimalExercise({ validateCommand, onValidated }: {
  validateCommand: number; onValidated: (ok: boolean) => void;
}) {
  // Ex 2 — Coloring
  const [colorItems] = useState(generateColoringItems);
  const [colored, setColored] = useState<Set<number>[]>(() => colorItems.map(() => new Set<number>()));
  const [colorResults, setColorResults] = useState<boolean[]>([]);

  // Ex 3 — Fraction read
  const [readItems] = useState(generateFractionReadItems);
  const [readAnswers, setReadAnswers] = useState<string[]>(() => Array(3).fill(""));
  const [readStatuses, setReadStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(3).fill("idle"));

  // Ex 4 — Matching
  const [pairs] = useState(generateMatchPairs);
  const [shuffledDecs] = useState(() => shuffle(pairs.map(p => p.dec)));
  const [selectedFrac, setSelectedFrac] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [matchResults, setMatchResults] = useState<boolean[]>([]);

  // Ex 5 — Decimal conv
  const [decItems] = useState(generateDecConvItems);
  const [decAnswers, setDecAnswers] = useState<string[]>(() => Array(4).fill(""));
  const [decStatuses, setDecStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(4).fill("idle"));

  // Ex 6 — Fraction conv
  const [fracItems] = useState(generateFracConvItems);
  const [fracAnswers, setFracAnswers] = useState<string[]>(() => Array(4).fill(""));
  const [fracStatuses, setFracStatuses] = useState<("idle" | "correct" | "wrong")[]>(() => Array(4).fill("idle"));

  const [validated, setValidated] = useState(false);

  const doValidate = useCallback(() => {
    if (validated) return;
    setValidated(true);
    const colorRes = colorItems.map((item, i) => colored[i]!.size === item.n);
    setColorResults(colorRes);
    const readSts = readItems.map((item, i) => (answerMatches(readAnswers[i]!, [item.answer]) ? "correct" : "wrong")) as ("correct" | "wrong")[];
    setReadStatuses(readSts);
    const matchRes = pairs.map((pair, fi) => matches[fi] !== undefined && shuffledDecs[matches[fi]!] === pair.dec);
    setMatchResults(matchRes);
    const decSts = decItems.map((item, i) => (answerMatches(decAnswers[i]!, [item.answer]) ? "correct" : "wrong")) as ("correct" | "wrong")[];
    setDecStatuses(decSts);
    const fracSts = fracItems.map((item, i) => (answerMatches(fracAnswers[i]!, [item.answer]) ? "correct" : "wrong")) as ("correct" | "wrong")[];
    setFracStatuses(fracSts);
    onValidated(
      colorRes.every(Boolean) &&
      readSts.every(s => s === "correct") &&
      matchRes.every(Boolean) &&
      decSts.every(s => s === "correct") &&
      fracSts.every(s => s === "correct"),
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validated, colorItems, colored, readItems, readAnswers, pairs, shuffledDecs, matches, decItems, decAnswers, fracItems, fracAnswers]);

  useEffect(() => { if (validateCommand > 0) doValidate(); }, [validateCommand, doValidate]);

  function toggleColor(itemIdx: number, cellIdx: number) {
    if (validated) return;
    setColored(prev => {
      const next = prev.map(s => new Set(s));
      if (next[itemIdx]!.has(cellIdx)) next[itemIdx]!.delete(cellIdx);
      else next[itemIdx]!.add(cellIdx);
      return next;
    });
  }

  function handleFracClick(fi: number) {
    if (validated) return;
    if (selectedFrac === fi) { setSelectedFrac(null); return; }
    if (matches[fi] !== undefined) setMatches(prev => { const n = { ...prev }; delete n[fi]; return n; });
    setSelectedFrac(fi);
  }

  function handleDecClick(di: number) {
    if (validated || selectedFrac === null) return;
    const existing = Object.entries(matches).find(([, v]) => v === di);
    if (existing) setMatches(prev => { const n = { ...prev }; delete n[parseInt(existing[0])]; return n; });
    setMatches(prev => ({ ...prev, [selectedFrac]: di }));
    setSelectedFrac(null);
  }

  const fracCls = (fi: number) => {
    const sel = selectedFrac === fi;
    const matched = matches[fi] !== undefined;
    if (validated && matched) {
      return matchResults[fi]
        ? "border-green-400 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
        : "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400";
    }
    if (validated) return "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400";
    if (sel) return "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
    if (matched) return "border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/5 text-[var(--color-text-primary)]";
    return "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]";
  };

  const decCls = (di: number) => {
    const matchedEntry = Object.entries(matches).find(([, v]) => v === di);
    if (validated && matchedEntry) {
      const fi = parseInt(matchedEntry[0]);
      return matchResults[fi]
        ? "border-green-400 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
        : "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400";
    }
    if (matchedEntry) return "border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/5 text-[var(--color-text-primary)]";
    if (selectedFrac !== null && !validated) return "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-alg)]/5 cursor-pointer";
    return "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)]";
  };

  return (
    <div className="space-y-8">
      {/* Exercise 2 — Coloring */}
      <div className="space-y-5">
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 2 — Colorie la fraction demandée</h2>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Touche les cases pour les colorier.</p>
        </div>
        <div className="space-y-5">
          {colorItems.map((item, i) => (
            <div key={i} className={`rounded-xl border p-3 ${validated ? (colorResults[i] ? "border-green-400 bg-green-50/30 dark:bg-green-900/10" : "border-red-400 bg-red-50/30 dark:bg-red-900/10") : "border-[var(--color-border-default)]"}`}>
              <div className="mb-3 flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{item.label})</span>
                <p className="text-sm text-[var(--color-text-primary)]">{item.desc}</p>
              </div>
              <FractionShape kind={item.kind} d={item.d} colored={colored[i]!} onToggle={validated ? undefined : (ci) => toggleColor(i, ci)} />
              {validated && (
                <p className={`mt-2 text-xs font-medium ${colorResults[i] ? "text-green-600 dark:text-green-400" : "text-red-500"}`}>
                  {colorResults[i] ? `✓ Correct ! (${item.n} case${item.n > 1 ? "s" : ""})` : `Il fallait colorier ${item.n} case${item.n > 1 ? "s" : ""} sur ${item.d}.`}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 3 — Fraction read */}
      <div className="space-y-5">
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 3 — Observe et écris la fraction</h2>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Observe le dessin et écris la fraction correspondante.</p>
        </div>
        <div className="space-y-5">
          {readItems.map((item, i) => {
            const preColored = new Set(Array.from({ length: item.n }, (_, k) => k));
            return (
              <div key={i}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{item.label})</span>
                </div>
                <FractionShape kind={item.kind} d={item.d} colored={preColored} />
                <input
                  type="text"
                  value={readAnswers[i]}
                  onChange={(e) => { if (!validated) setReadAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }}
                  placeholder="ex. 3/4"
                  className={`mt-2 w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors ${readStatuses[i] === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20" : readStatuses[i] === "wrong" ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"}`}
                />
                {readStatuses[i] === "correct" && <p className="mt-1 text-xs font-medium text-green-600 dark:text-green-400">✓ Correct !</p>}
                {readStatuses[i] === "wrong" && <p className="mt-1 text-xs font-medium text-red-500">Réponse : {item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Exercise 4 — Matching */}
      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 4 — Relie chaque fraction à son écriture décimale</h2>
          {selectedFrac !== null && !validated && (
            <p className="mt-1 text-xs text-[var(--color-accent-alg)]">Sélectionne maintenant l&apos;écriture décimale correspondante →</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-3">
            {pairs.map((pair, fi) => (
              <button key={fi} type="button" onClick={() => handleFracClick(fi)}
                className={`flex w-full items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${fracCls(fi)}`}>
                <span className="w-4 shrink-0 text-xs font-bold text-[var(--color-text-secondary)]">{fi + 1}.</span>
                <FracInline frac={pair.frac} />
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {shuffledDecs.map((dec, di) => (
              <button key={di} type="button" onClick={() => handleDecClick(di)}
                className={`w-full rounded-xl border px-3 py-3 text-sm font-bold transition-colors ${decCls(di)}`}>
                {dec}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exercise 5 — Decimal conv */}
      <div className="space-y-5">
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 5 — Écris sous forme décimale</h2>
        </div>
        <div className="space-y-3">
          {decItems.map((item, i) => (
            <div key={i} className="flex flex-wrap items-center gap-2">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{item.label})</span>
              <FracInline frac={item.frac} />
              <span className="text-sm text-[var(--color-text-primary)]">=</span>
              <input
                type="text"
                value={decAnswers[i]}
                onChange={(e) => { if (!validated) setDecAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }}
                placeholder="…"
                className={`w-24 rounded-xl border px-3 py-2 text-sm outline-none transition-colors ${decStatuses[i] === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20" : decStatuses[i] === "wrong" ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"}`}
              />
              {decStatuses[i] === "correct" && <span className="text-xs font-medium text-green-600 dark:text-green-400">✓</span>}
              {decStatuses[i] === "wrong" && <span className="text-xs font-medium text-red-500">{item.answer}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 6 — Fraction conv */}
      <div className="space-y-5">
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">Exercice 6 — Écris sous forme de fraction</h2>
        </div>
        <div className="space-y-3">
          {fracItems.map((item, i) => (
            <div key={i} className="flex flex-wrap items-center gap-2">
              <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{item.label})</span>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">{item.decStr} =</span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  value={fracAnswers[i]}
                  onChange={(e) => { if (!validated) setFracAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; }); }}
                  placeholder="…"
                  className={`w-20 rounded-xl border px-3 py-2 text-sm outline-none transition-colors ${fracStatuses[i] === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20" : fracStatuses[i] === "wrong" ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"}`}
                />
                <span className="text-sm font-medium text-[var(--color-text-primary)]">/{item.denominator}</span>
              </div>
              {fracStatuses[i] === "correct" && <span className="text-xs font-medium text-green-600 dark:text-green-400">✓</span>}
              {fracStatuses[i] === "wrong" && <span className="text-xs font-medium text-red-500">{item.answer}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export function A4ModuleContent() {
  const router = useRouter();
  const lessons = getLessonsForModule("A4");
  const [steps] = useState<FlatStep[]>(() => (lessons ? buildSteps(lessons) : []));
  const [stepIdx, setStepIdx] = useState(0);
  const [exerciseKey, setExerciseKey] = useState(0);
  const [validateCommand, setValidateCommand] = useState(0);
  const [canValidate, setCanValidate] = useState(true);

  // For generic text exercises (A4.2+)
  const [answer, setAnswer] = useState("");
  const [exStatus, setExStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [exAttempts, setExAttempts] = useState(0);

  const currentStep = steps[stepIdx];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === steps.length - 1;
  const isExercise = currentStep !== undefined && currentStep.kind !== "theory";

  const goTo = useCallback((idx: number) => {
    setStepIdx(idx);
    setAnswer("");
    setExStatus("idle");
    setExAttempts(0);
    setValidateCommand(0);
    setCanValidate(true);
    setExerciseKey(k => k + 1);
  }, []);

  function goBack() { if (!isFirstStep) goTo(stepIdx - 1); }

  function goNext() {
    if (isLastStep) { router.push("/mathematiques"); }
    else { goTo(stepIdx + 1); }
  }

  function refresh() {
    setAnswer(""); setExStatus("idle"); setExAttempts(0);
    setValidateCommand(0); setCanValidate(true);
    setExerciseKey(k => k + 1);
  }

  function handleCustomValidated(ok: boolean) {
    setCanValidate(false);
    if (currentStep?.kind === "fraction_toggle") {
      const p = loadProgress();
      saveProgress(completeSubmodule(p, "A4", currentStep.lesson.submoduleId));
    } else if (currentStep?.kind === "a4_decimal_exercises") {
      const p = loadProgress();
      saveProgress(completeSubmodule(p, "A4", "A4-2"));
    }
    void ok;
  }

  function validateText() {
    if (currentStep?.kind !== "exercise") return;
    const ok = answerMatches(answer, currentStep.item.acceptable);
    setExStatus(ok ? "correct" : "wrong");
    setExAttempts(a => a + 1);
    if (ok) {
      setCanValidate(false);
      const nextStep = steps[stepIdx + 1];
      const isLastOfLesson = !nextStep || nextStep.kind !== "exercise" || nextStep.lesson.submoduleId !== currentStep.lesson.submoduleId;
      if (isLastOfLesson) { const p = loadProgress(); saveProgress(completeSubmodule(p, "A4", currentStep.lesson.submoduleId)); }
    }
  }

  const isCustomA4 = currentStep !== undefined && currentStep.kind !== "theory" && currentStep.kind !== "exercise";
  const validateDisabled = currentStep?.kind === "exercise" ? exStatus === "correct" : !canValidate;

  if (!lessons || steps.length === 0) {
    return <p className="text-sm text-[var(--color-text-secondary)]">Contenu non disponible.</p>;
  }

  return (
    <div className="pb-40">
      {/* Progress bar */}
      <div className="mb-6 flex gap-1">
        {steps.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < stepIdx ? "bg-[var(--color-accent-alg)]" : i === stepIdx ? "bg-[var(--color-accent-alg)] opacity-60" : "bg-[var(--color-border-default)]"}`} />
        ))}
      </div>

      {/* Content */}
      {currentStep?.kind === "theory" && <TheoryView lesson={currentStep.lesson} />}

      {currentStep?.kind === "fraction_toggle" && (
        <FractionToggleExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}
      {currentStep?.kind === "a4_decimal_exercises" && (
        <CombinedDecimalExercise key={exerciseKey} validateCommand={validateCommand} onValidated={handleCustomValidated} />
      )}

      {currentStep?.kind === "exercise" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-[var(--color-text-primary)]">
              Exercice {currentStep.exNum} — {currentStep.lesson.submoduleCode}
            </h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
              {currentStep.item.promptFr}
            </p>
          </div>
          <input
            key={exerciseKey}
            type={currentStep.item.type === "number" ? "number" : "text"}
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); if (exStatus !== "idle") setExStatus("idle"); }}
            onKeyDown={(e) => { if (e.key === "Enter" && answer.trim() && exStatus !== "correct") validateText(); }}
            placeholder="Votre réponse…"
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${exStatus === "correct" ? "border-green-400 bg-green-50 dark:bg-green-950/20" : exStatus === "wrong" ? "border-red-400 bg-red-50 dark:bg-red-950/20" : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] focus:border-[var(--color-accent-alg)]"}`}
          />
          {exStatus === "correct" && <p className="text-xs font-medium text-green-600 dark:text-green-400">✓ Correct !</p>}
          {exStatus === "wrong" && <p className="text-xs font-medium text-red-500">{exAttempts >= 2 ? `Réponse : ${currentStep.item.acceptable[0]}` : "Essayez encore…"}</p>}
        </div>
      )}

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button type="button" onClick={goBack} disabled={isFirstStep}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
              Retour
            </button>

            {isExercise && (
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Recommencer" onClick={refresh}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" /></svg>
                </button>
                <button type="button" aria-label="Valider"
                  onClick={() => { if (isCustomA4) setValidateCommand(c => c + 1); else validateText(); }}
                  disabled={validateDisabled}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-90 active:scale-90 disabled:cursor-not-allowed disabled:opacity-30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                </button>
              </div>
            )}

            <button type="button" onClick={goNext}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80">
              {isLastStep ? (
                <>Terminer <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg></>
              ) : (
                <>Suivant <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6" /></svg></>
              )}
            </button>
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
    </div>
  );
}
