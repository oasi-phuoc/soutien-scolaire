"use client";

import React, { useState, useMemo, useEffect } from "react";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { usePrintQuestionLayout } from "@/components/print/PrintExerciseLayoutContext";

import {
  placementRandInt as randInt,
  placementShuffle as shuffle,
  placementRandom,
} from "@/components/math/placement/placement-print-rng";

export interface PlacementExerciseProps {
  exerciseKey: number;
  validated: boolean;
  onValidated: (points: number, maxPoints: number) => void;
  validateTrigger: number;
  /** When true, component is rendered in the print / PDF preview. */
  forPrint?: boolean;
}

// ── Utility helpers ──────────────────────────────────────────────────────────

// randInt / shuffle : aléatoire normal, ou seed d'impression si actif.

/**
 * Classes de la liste de questions : à l'impression elles dérivent du réglage
 * « colonnes » ; à l'écran on garde la mise en page actuelle (fallback).
 */
function placementListClass(
  columns: 1 | 2 | 3,
  fallback: string,
  forPrint: boolean | undefined,
): string {
  if (!forPrint) return fallback;
  if (columns === 2) return "grid grid-cols-2 items-start gap-x-4 gap-y-3";
  if (columns === 3) return "grid grid-cols-3 items-start gap-x-3 gap-y-3";
  return "space-y-3";
}

// Correction-style input display (shows wrong/correct when validated)
function CorrectionInput({
  value,
  onChange,
  correct,
  validated,
  width = "w-16",
}: {
  value: string;
  onChange: (v: string) => void;
  correct: string;
  validated: boolean;
  width?: string;
  placeholder?: string;
}) {
  const norm = (s: string) => s.trim().replace(".", ",");
  const showCorrection = validated && norm(value) !== norm(correct);
  if (showCorrection) {
    return (
      <span className={`${width} inline-flex min-h-9 flex-col items-center justify-center rounded-none border-0 border-b-2 border-amber-500 px-1 text-center font-mono leading-tight`}>
        {value.trim() && <span className="text-[10px] text-[var(--color-text-primary)]">{value}</span>}
        <span className="text-sm font-semibold text-amber-600">{correct}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex flex-col items-center gap-0.5 align-middle">
      <input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9,.]/g, ""))}
        disabled={validated}
        className={`${width} h-9 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 px-1 text-center font-mono text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-alg)] disabled:opacity-80`}
      />
    </span>
  );
}

const INSTRUCTION_TRANSLATIONS: Record<string, Partial<Record<string, string>>> = {
  "Comptez le nombre de formes.": {
    en: "Count the number of shapes.",
    ar: "عُدّ عدد الأشكال.",
    fa: "تعداد شکل‌ها را بشمارید.",
    pt: "Conte o número de formas.",
    so: "Tiri tirada qaababka.",
    ti: "ብዝሒ ቅርጽታት ቁጸሩ።",
    tr: "Şekillerin sayısını sayın.",
    ps: "د شکلونو شمېر وشمېرئ.",
    uk: "Порахуйте кількість фігур.",
  },
  "Posez et effectuez les calculs en colonnes.": {
    en: "Set up and do the calculations in columns.",
    ar: "رتّب العمليات وأنجزها في أعمدة.",
    fa: "محاسبه‌ها را ستونی بنویسید و انجام دهید.",
    pt: "Arme e efetue os cálculos em colunas.",
    so: "Dhig oo samee xisaabaha si tiirar ah.",
    ti: "ነቶም ሒሳባት ብዓምዲ ኣቐምጡን ፈጽሙን።",
    tr: "İşlemleri sütun hâlinde kurun ve yapın.",
    ps: "حسابونه په ستنو کې ولیکئ او ترسره یې کړئ.",
    uk: "Запишіть і виконайте обчислення у стовпчик.",
  },
  "Posez et effectuez les multiplications en colonnes.": {
    en: "Set up and do the multiplications in columns.",
    ar: "رتّب عمليات الضرب وأنجزها في أعمدة.",
    fa: "ضرب‌ها را ستونی بنویسید و انجام دهید.",
    pt: "Arme e efetue as multiplicações em colunas.",
    so: "Dhig oo samee isku dhufashada si tiirar ah.",
    ti: "ነቲ ምብዛሕ ብዓምዲ ኣቐምጡን ፈጽሙን።",
    tr: "Çarpmaları sütun hâlinde kurun ve yapın.",
    ps: "ضربونه په ستنو کې ولیکئ او ترسره یې کړئ.",
    uk: "Запишіть і виконайте множення у стовпчик.",
  },
  "Posez et effectuez les divisions en colonnes.": {
    en: "Set up and do the divisions in columns.",
    ar: "رتّب عمليات القسمة وأنجزها في أعمدة.",
    fa: "تقسیم‌ها را ستونی بنویسید و انجام دهید.",
    pt: "Arme e efetue as divisões em colunas.",
    so: "Dhig oo samee qaybinta si tiirar ah.",
    ti: "ነቲ ምክፋል ብዓምዲ ኣቐምጡን ፈጽሙን።",
    tr: "Bölmeleri sütun hâlinde kurun ve yapın.",
    ps: "تقسیمونه په ستنو کې ولیکئ او ترسره یې کړئ.",
    uk: "Запишіть і виконайте ділення у стовпчик.",
  },
  "Observez les formes coloriées et écrivez la fraction représentée.": {
    en: "Look at the colored shapes and write the fraction shown.",
    ar: "لاحظ الأشكال الملوّنة واكتب الكسر الممثّل.",
    fa: "به شکل‌های رنگی نگاه کنید و کسر نشان‌داده‌شده را بنویسید.",
    pt: "Observe as formas coloridas e escreva a fração representada.",
    so: "Fiiri qaababka la midabeeyay oo qor jajabka la muujiyay.",
    ti: "ነቶም ዝተቐብኡ ቅርጽታት ተዓዘቡ እሞ ዝተወከለ ክፋል ጽሓፉ።",
    tr: "Boyalı şekillere bakın ve gösterilen kesri yazın.",
    ps: "رنګ شوي شکلونه وګورئ او ښودل شوې کسر ولیکئ.",
    uk: "Розгляньте зафарбовані фігури й запишіть відповідний дріб.",
  },
  "Effectuez les calculs.": {
    en: "Do the calculations.",
    ar: "أنجز العمليات الحسابية.",
    fa: "محاسبه‌ها را انجام دهید.",
    pt: "Efetue os cálculos.",
    so: "Samee xisaabaha.",
    ti: "ሒሳባት ፈጽሙ።",
    tr: "Hesaplamaları yapın.",
    ps: "حسابونه ترسره کړئ.",
    uk: "Виконайте обчислення.",
  },
  "Trouvez la valeur de x.": {
    en: "Find the value of x.",
    ar: "أوجد قيمة x.",
    fa: "مقدار x را پیدا کنید.",
    pt: "Encontre o valor de x.",
    so: "Hel qiimaha x.",
    ti: "ዋጋ x ርኸቡ።",
    tr: "x değerini bulun.",
    ps: "د x ارزښت ومومئ.",
    uk: "Знайдіть значення x.",
  },
};

export function PlacementInstruction({ text, className = "text-sm text-[var(--color-text-secondary)]" }: { text: string; className?: string }) {
  const pivot = usePivotLang();
  const { showPivot } = useTranslation();
  const translated = showPivot ? INSTRUCTION_TRANSLATIONS[text]?.[pivot] : undefined;
  const displayLang = translated ? pivot : "fr";
  const isRtl = Boolean(translated) && (pivot === "ar" || pivot === "fa" || pivot === "ps");
  return (
    <p className={className} lang={displayLang} dir={isRtl ? "rtl" : "ltr"}>
      {translated ?? text}
    </p>
  );
}

// ── Exercise 1 — Count shapes ─────────────────────────────────────────────────

type ShapeType = "circle" | "square" | "triangle" | "star";

function makeShapes(count: number, seed: number): Array<{ x: number; y: number; size: number; id: number }> {
  const pad = 5;
  const maxSize = 8;
  const minX = pad + maxSize;
  const maxX = 300 - pad - maxSize;
  const minY = pad + maxSize;
  const maxY = 110 - pad - maxSize;
  const cols = Math.ceil(Math.sqrt(count * 2.8));
  const rows = Math.ceil(count / cols);
  const cells = Array.from({ length: cols * rows }, (_, i) => i)
    .sort((a, b) => Math.sin((a + seed) * 12.9898) - Math.sin((b + seed) * 12.9898));

  return cells.slice(0, count).map((cell, id) => {
    const col = cell % cols;
    const row = Math.floor(cell / cols);
    const baseX = cols === 1 ? (minX + maxX) / 2 : minX + (col / (cols - 1)) * (maxX - minX);
    const baseY = rows === 1 ? (minY + maxY) / 2 : minY + (row / (rows - 1)) * (maxY - minY);
    const jitterX = Math.sin((seed + id * 31) * 1.73) * 5;
    const jitterY = Math.cos((seed + id * 37) * 1.91) * 5;
    const size = 6 + Math.abs((seed + id * 13) % 3);
    return {
      x: Math.min(maxX, Math.max(minX, baseX + jitterX)),
      y: Math.min(maxY, Math.max(minY, baseY + jitterY)),
      size,
      id,
    };
  });
}

function ShapeSvg({ shape, x, y, size = 7 }: { shape: ShapeType; x: number; y: number; size?: number }) {
  const accent = "var(--color-accent-alg)";
  if (shape === "circle")
    return <circle cx={x} cy={y} r={size} fill={accent} fillOpacity={0.7} />;
  if (shape === "square")
    return <rect x={x - size} y={y - size} width={size * 2} height={size * 2} fill={accent} fillOpacity={0.7} />;
  if (shape === "triangle")
    return <polygon points={`${x},${y - size * 1.2} ${x - size},${y + size * 0.7} ${x + size},${y + size * 0.7}`} fill={accent} fillOpacity={0.7} />;
  // star
  const pts = Array.from({ length: 5 }, (_, i) => {
    const outer = { x: x + size * 1.1 * Math.sin((i * 72 - 90) * Math.PI / 180), y: y - size * 1.1 * Math.cos((i * 72 - 90) * Math.PI / 180) };
    const inner = { x: x + size * 0.5 * Math.sin(((i * 72 + 36) - 90) * Math.PI / 180), y: y - size * 0.5 * Math.cos(((i * 72 + 36) - 90) * Math.PI / 180) };
    return `${outer.x},${outer.y} ${inner.x},${inner.y}`;
  }).join(" ");
  return <polygon points={pts} fill={accent} fillOpacity={0.7} />;
}

function ShapeFrame({ count, shape, seed }: { count: number; shape: ShapeType; seed: number }) {
  const positions = useMemo(() => makeShapes(count, seed), [count, seed]);
  return (
    <div className="h-28 w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] p-[5px]">
      <svg viewBox="0 0 300 110" className="h-full w-full">
        {positions.map(p => (
          <ShapeSvg key={p.id} shape={shape} x={p.x} y={p.y} size={p.size} />
        ))}
      </svg>
    </div>
  );
}

export function Exercise1({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo(() => {
    const shapes: ShapeType[] = ["circle", "square", "triangle", "star"];
    const shuffled = shuffle([...shapes]);
    return Array.from({ length: questionCount }, (_, i) => ({
      shape: shuffled[i % shuffled.length]!,
      count: i % 2 === 0 ? randInt(10, 15) : randInt(15, 25),
      seed: randInt(1, 9999) + i * 10000,
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    const pts = questions.reduce((s, q, i) => s + ((answers[i] ?? "").trim() === String(q.count) ? 1 : 0), 0);
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <PlacementInstruction text="Comptez le nombre de formes." />
      <div className={placementListClass(columns, "space-y-3", forPrint)}>
        {questions.map((q, idx) => (
          <div key={idx} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
            <div className="flex w-24 shrink-0 items-center gap-2">
              <span className="w-5 text-sm font-semibold text-[var(--color-accent-alg)]">{idx + 1}.</span>
              <CorrectionInput
                value={answers[idx] ?? ""}
                onChange={(v) => setAnswers(prev => prev.map((a, j) => j === idx ? v : a))}
                correct={String(q.count)}
                validated={validated}
                width="w-16"
                placeholder="?"
              />
            </div>
            <ShapeFrame count={q.count} shape={q.shape} seed={q.seed} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 2 — Compare integers 11–99 ──────────────────────────────────────

type CompOp = "<" | "=" | ">";

function CompareQuestion({
  qNum,
  a,
  b,
  correct,
  validated,
  selected,
  onSelect,
}: {
  qNum: number;
  a: number;
  b: number;
  correct: CompOp;
  validated: boolean;
  selected: CompOp | null;
  onSelect: (op: CompOp) => void;
}) {
  const ops: CompOp[] = ["<", "=", ">"];
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{qNum}.</span>
      <span className="font-mono text-base text-[var(--color-text-primary)] w-10 text-right">{a}</span>
      <div className="flex gap-1">
        {ops.map((op) => {
          const isSelected = selected === op;
          const isCorrect = correct === op;
          let cls = "flex h-8 w-8 items-center justify-center rounded border font-mono text-sm font-bold transition-colors ";
          if (validated) {
            if (isCorrect) cls += "border-amber-500 bg-amber-50 text-amber-600";
            else if (isSelected) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
            else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] opacity-40";
          } else {
            if (isSelected) cls += "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10 text-[var(--color-accent-alg)]";
            else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-alg)]/50";
          }
          return (
            <button key={op} type="button" disabled={validated} onClick={() => onSelect(op)} className={cls}>
              {op}
            </button>
          );
        })}
      </div>
      <span className="font-mono text-base text-[var(--color-text-primary)] w-10">{b}</span>
    </div>
  );
}

export function Exercise2({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const questions = useMemo(() => {
    function mkLt() { const a = randInt(11, 98); const b = randInt(a + 1, 99); return { a, b, correct: "<" as CompOp }; }
    function mkGt() { const b = randInt(11, 98); const a = randInt(b + 1, 99); return { a, b, correct: ">" as CompOp }; }
    function mkEq() { const a = randInt(11, 99); return { a, b: a, correct: "=" as CompOp }; }
    function mkRnd() { const r = placementRandom(); return r < 1/3 ? mkLt() : r < 2/3 ? mkGt() : mkEq(); }
    const fixed = shuffle([mkLt(), mkGt(), mkEq()]).slice(0, questionCount);
    while (fixed.length < questionCount) fixed.push(mkRnd());
    return shuffle(fixed);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<Array<CompOp | null>>(() => Array(questions.length).fill(null));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) pts += 0.5;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Choisissez le bon signe de comparaison.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <CompareQuestion
            key={i}
            qNum={i + 1}
            a={q.a}
            b={q.b}
            correct={q.correct}
            validated={validated}
            selected={answers[i] ?? null}
            onSelect={(op) => setAnswers(prev => { const next = [...prev]; next[i] = op; return next; })}
          />
        ))}
      </div>
    </div>
  );
}

// ── Exercise 3 — Number sequences ────────────────────────────────────────────

function SeqQuestion({
  qNum,
  values,
  blanks,
  validated,
  answers,
  onChange,
}: {
  qNum: number;
  values: number[];
  blanks: [number, number];
  validated: boolean;
  answers: [string, string];
  onChange: (idx: 0 | 1, v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-4 shrink-0 text-sm font-semibold text-[var(--color-accent-alg)]">{qNum}.</span>
      <div className="flex items-center gap-1.5 flex-wrap">
        {values.map((v, i) => {
          const blankIdx: 0 | 1 | -1 = blanks[0] === i ? 0 : blanks[1] === i ? 1 : -1;
          if (blankIdx === 0 || blankIdx === 1) {
            return (
              <CorrectionInput
                key={i}
                value={answers[blankIdx]}
                onChange={(val) => onChange(blankIdx, val)}
                correct={String(v)}
                validated={validated}
                width="h-9 w-14 px-1 rounded-full"
              />
            );
          }
          return (
            <div key={i} className="inline-flex h-9 w-14 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] font-mono text-sm font-semibold text-[var(--color-text-primary)]">{v}</div>
          );
        })}
      </div>
    </div>
  );
}

export function Exercise3({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo(() => {
    const dir0: "asc" | "desc" = placementRandom() < 0.5 ? "asc" : "desc";
    return Array.from({ length: questionCount }, (_, i) => {
      const gap = i % 2 === 0 ? randInt(2, 9) : randInt(11, 19);
      const dir: "asc" | "desc" = i % 2 === 0 ? dir0 : dir0 === "asc" ? "desc" : "asc";
      const start = dir === "asc" ? randInt(1, 99 - gap * 4) : randInt(gap * 4 + 1, 99);
      const values = Array.from({ length: 5 }, (_, j) => dir === "asc" ? start + j * gap : start - j * gap);
      return { values, blanks: [1, 3] as [number, number] };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<[string, string][]>(() => questions.map(() => ["", ""]));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const a = answers[i] ?? ["", ""];
      const ca = String(q.values[q.blanks[0]]);
      const cb = String(q.values[q.blanks[1]]);
      if (a[0].trim() === ca && a[1].trim() === cb) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites numériques.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <SeqQuestion
            key={i}
            qNum={i + 1}
            values={q.values}
            blanks={q.blanks}
            validated={validated}
            answers={answers[i] ?? ["", ""]}
            onChange={(idx, v) => setAnswers(prev => prev.map((a, j) => {
              if (j !== i) return a;
              const next: [string, string] = [a[0], a[1]];
              next[idx] = v;
              return next;
            }))}
          />
        ))}
      </div>
    </div>
  );
}

// ── Exercise 4 — Arithmetic results ──────────────────────────────────────────

interface ArithQuestion {
  a: number;
  b: number;
  op: "+" | "-";
  result: number;
}

export function Exercise4({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const questions = useMemo((): ArithQuestion[] => {
    const qs: ArithQuestion[] = [];
    // Moitié additions (20–50)
    const nAdd = Math.ceil(questionCount / 2);
    for (let i = 0; i < nAdd; i++) {
      const a = randInt(20, 50);
      const b = randInt(20, 50);
      qs.push({ a, b, op: "+", result: a + b });
    }
    // Moitié soustractions (result > 0)
    for (let i = nAdd; i < questionCount; i++) {
      let a = randInt(11, 99);
      let b = randInt(11, 99);
      if (b > a) [a, b] = [b, a];
      while (a === b) { a = randInt(11, 99); }
      qs.push({ a, b, op: "-", result: a - b });
    }
    return shuffle(qs);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      if (answers[i]?.trim() === String(q.result)) pts += 0.5;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les calculs.</p>
      <div className={`${placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)} text-base`}>
        {questions.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-4 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <span className="font-mono text-[var(--color-text-primary)]">{q.a}</span>
            <span className="font-mono text-[var(--color-text-secondary)]">{q.op}</span>
            <span className="font-mono text-[var(--color-text-primary)]">{q.b}</span>
            <span className="text-[var(--color-text-secondary)]">=</span>
            <CorrectionInput
              value={answers[i] ?? ""}
              onChange={(v) => setAnswers(prev => { const next = [...prev]; next[i] = v; return next; })}
              correct={String(q.result)}
              validated={validated}
              width="w-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 5 — Missing operand ─────────────────────────────────────────────

type MissingFormat = "x_plus_blank_eq_y" | "x_minus_blank_eq_y" | "blank_plus_x_eq_y" | "blank_minus_x_eq_y";

interface MissingOpQuestion {
  format: MissingFormat;
  x: number;
  y: number;
  missing: number;
}

function renderMissingOpRow(q: MissingOpQuestion, ans: string, onChange: (v: string) => void, validated: boolean) {
  const inp = (
    <CorrectionInput value={ans} onChange={onChange} correct={String(q.missing)} validated={validated} width="w-14" />
  );
  const num = (n: number) => <span className="inline-flex h-9 w-14 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{n}</span>;
  const op = (s: string) => <span className="w-5 text-center font-mono text-base text-[var(--color-text-secondary)]">{s}</span>;
  const eq = <span className="w-5 text-center font-mono text-base text-[var(--color-text-secondary)]">=</span>;

  if (q.format === "x_plus_blank_eq_y") return <>{num(q.x)}{op("+")}{inp}{eq}{num(q.y)}</>;
  if (q.format === "x_minus_blank_eq_y") return <>{num(q.x)}{op("−")}{inp}{eq}{num(q.y)}</>;
  if (q.format === "blank_plus_x_eq_y") return <>{inp}{op("+")}{num(q.x)}{eq}{num(q.y)}</>;
  return <>{inp}{op("−")}{num(q.x)}{eq}{num(q.y)}</>;
}

export function Exercise5({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const questions = useMemo((): MissingOpQuestion[] => {
    const formats: MissingFormat[] = shuffle(["x_plus_blank_eq_y", "x_minus_blank_eq_y", "blank_plus_x_eq_y", "blank_minus_x_eq_y"]);
    return Array.from({ length: questionCount }, (_, i) => formats[i % formats.length]!).map(format => {
      let x: number, y: number, missing: number;
      if (format === "x_plus_blank_eq_y") {
        // x + missing = y => missing = y - x
        x = randInt(11, 88);
        missing = randInt(11, 99 - x);
        y = x + missing;
      } else if (format === "x_minus_blank_eq_y") {
        // x - missing = y => missing = x - y
        missing = randInt(11, 88);
        y = randInt(11, 99 - missing);
        x = missing + y;
      } else if (format === "blank_plus_x_eq_y") {
        // missing + x = y
        x = randInt(11, 88);
        missing = randInt(11, 99 - x);
        y = missing + x;
      } else {
        // missing - x = y => missing = y + x
        x = randInt(11, 88);
        y = randInt(11, 99 - x);
        missing = y + x;
      }
      return { format, x, y, missing };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      if (answers[i]?.trim() === String(q.missing)) pts++;
    });
    onValidated(pts, 4);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Trouvez le nombre manquant.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {renderMissingOpRow(
              q,
              answers[i] ?? "",
              (v) => setAnswers(prev => { const next = [...prev]; next[i] = v; return next; }),
              validated
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 6 — Column arithmetic (99–999) ───────────────────────────────────

interface ColArithQuestion {
  a: number;
  b: number;
  op: "+" | "-" | "×" | "÷";
  result: number;
}

function _SimpleColumnGrid({ a, b, op, result, answer, onChange, validated }: {
  a: number; b: number; op: "+" | "-" | "×" | "÷"; result: number;
  answer: string; onChange: (v: string) => void; validated: boolean;
}) {
  const aStr = String(a).padStart(4, " ");
  const bStr = String(b).padStart(4, " ");
  return (
    <div className="inline-flex flex-col items-end font-mono text-base border border-[var(--color-border-default)] rounded-lg px-3 py-2 bg-[var(--color-bg-secondary)]">
      <span className="text-[var(--color-text-primary)] whitespace-pre">{aStr}</span>
      <div className="flex items-center gap-1 w-full">
        <span className="text-[var(--color-text-secondary)] mr-0.5">{op}</span>
        <span className="text-[var(--color-text-primary)] flex-1 text-right whitespace-pre">{bStr.trim()}</span>
      </div>
      <div className="w-full h-px bg-[var(--color-text-primary)] my-1" />
      <CorrectionInput
        value={answer}
        onChange={onChange}
        correct={String(result)}
        validated={validated}
        width="w-20"
      />
    </div>
  );
}

// ── Placement Column Card (M/C/D/U grid for Exercise 6) ──────────────────────

const COL_HDRS_MCDU = ["M", "C", "D", "U"] as const;

function d4(n: number): [number, number, number, number] {
  return [Math.floor(n / 1000), Math.floor((n % 1000) / 100), Math.floor((n % 100) / 10), n % 10];
}

/** Retenues attendues (index 0 = M … 3 = U), null = pas de retenue à cette colonne. */
function computeColCarries(a: number, b: number, op: "+" | "-" | "×" | "÷"): (number | null)[] {
  const row: (number | null)[] = [null, null, null, null];
  const ad = d4(a), bd = d4(b);
  if (op === "+") {
    let c = 0;
    for (let i = 3; i >= 0; i--) {
      const s = ad[i]! + bd[i]! + c;
      c = Math.floor(s / 10);
      if (i > 0 && c > 0) row[i - 1] = c;
    }
  } else if (op === "×") {
    let c = 0;
    for (let i = 3; i >= 0; i--) {
      const prod = ad[i]! * b + c;
      c = Math.floor(prod / 10);
      if (i > 0 && c > 0) row[i - 1] = c;
    }
  } else if (op === "-") {
    let borrow = 0;
    for (let i = 3; i >= 0; i--) {
      const d = ad[i]! - bd[i]! - borrow;
      if (d < 0) { borrow = 1; if (i > 0) row[i - 1] = ad[i - 1]! > 0 ? ad[i - 1]! - 1 : 9; }
      else { borrow = 0; }
    }
  }
  return row;
}

function PlacementColCard({ a, b, op, result, answers, carries, onChange, onCarryChange, validated, noCard = false, showCarryCorrection = false }: {
  a: number; b: number; op: "+" | "-" | "×" | "÷";
  result: number; answers: string[]; carries: string[];
  onChange: (col: number, val: string) => void;
  onCarryChange: (col: number, val: string) => void;
  validated: boolean; noCard?: boolean;
  /** Au corrigé, affiche la valeur attendue de chaque retenue (ambre). */
  showCarryCorrection?: boolean;
}) {
  const aD = d4(a), bD = d4(b), rD = d4(result);
  const aFz = aD.findIndex(x => x !== 0);
  const bFz = bD.findIndex(x => x !== 0);
  const rFzRaw = rD.findIndex(x => x !== 0);
  const rFz = rFzRaw === -1 ? 3 : rFzRaw;
  const showCarry = op !== "÷";
  const carryLabel = op === "-" ? "E" : "R";
  const expectedCarries = showCarryCorrection ? computeColCarries(a, b, op) : null;

  const carryCell = (col: number) => {
    const val = carries[col] ?? "";
    const expected = expectedCarries?.[col] ?? null;
    if (validated && expectedCarries && expected !== null && val.trim() !== String(expected)) {
      return (
        <div className="flex h-5 w-8 flex-col items-center justify-center border-amber-400">
          <span className="text-[8px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
          <span className="text-[8px] font-bold leading-none text-amber-600">{expected}</span>
        </div>
      );
    }
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val}
        disabled={validated}
        onChange={e => onCarryChange(col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
        className="h-5 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/30 text-center font-mono text-[10px] text-orange-500 outline-none focus:border-orange-400 disabled:opacity-40"
      />
    );
  };

  const digitInput = (col: number) => {
    const correct = String(rD[col]);
    const value = answers[col] ?? "";
    const optionalLeadingZero = col < rFz && rD[col] === 0;
    if (validated && optionalLeadingZero && value.trim() === "") {
      return (
        <span className="inline-flex h-9 w-8 items-center justify-center rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 px-1 text-center font-mono text-sm" />
      );
    }
    return (
      <CorrectionInput
        value={value}
        onChange={v => onChange(col, v.replace(/[^0-9]/g, "").slice(-1))}
        correct={correct}
        validated={validated}
        width="w-8"
      />
    );
  };

  const inner = (
    <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <td className="w-6" />
            {COL_HDRS_MCDU.map(h => (
              <th key={h} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {showCarry && (
            <tr>
              <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">{carryLabel}</td>
              {[0, 1, 2, 3].map(col => (
                <td key={col} className="p-0.5 text-center">
                  {carryCell(col)}
                </td>
              ))}
            </tr>
          )}
          <tr>
            <td />
            {aD.map((d, col) => (
              <td key={col} className="p-0.5 text-center">
                <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{col < aFz ? "" : d}</div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="pr-1 text-right font-mono text-sm text-[var(--color-text-secondary)]">{op}</td>
            {bD.map((d, col) => (
              <td key={col} className="p-0.5 text-center">
                <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{col < bFz ? "" : d}</div>
              </td>
            ))}
          </tr>
          <tr><td colSpan={5}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td />
            {rD.map((_, col) => <td key={col} className="p-0.5 text-center">{digitInput(col)}</td>)}
          </tr>
        </tbody>
      </table>
  );
  return noCard ? inner : <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">{inner}</div>;
}

export function Exercise6({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo((): ColArithQuestion[] => {
    return Array.from({ length: questionCount }, (_, i): ColArithQuestion => {
      if (i % 2 === 0) {
        const a = randInt(99, 999);
        const b = randInt(99, 999);
        return { a, b, op: "+", result: a + b };
      }
      let a = randInt(99, 999);
      let b = randInt(99, 999);
      if (b > a) [a, b] = [b, a];
      while (a === b) a = randInt(99, 999);
      return { a, b, op: "-", result: a - b };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[][]>(() => questions.map(() => ["", "", "", ""]));
  const [carries, setCarries] = useState<string[][]>(() => questions.map(() => ["", "", "", ""]));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const d = answers[i] ?? [];
      const reconstructed =
        (parseInt(d[0] || "0") || 0) * 1000 +
        (parseInt(d[1] || "0") || 0) * 100 +
        (parseInt(d[2] || "0") || 0) * 10 +
        (parseInt(d[3] || "0") || 0);
      if (reconstructed === q.result) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les calculs en colonnes.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <div key={i} className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <PlacementColCard
              a={q.a} b={q.b} op={q.op as "+" | "-"} result={q.result}
              answers={answers[i] ?? ["", "", "", ""]}
              carries={carries[i] ?? ["", "", "", ""]}
              onChange={(col, v) => setAnswers(prev => { const next = prev.map(a => [...a]); next[i]![col] = v; return next; })}
              onCarryChange={(col, v) => setCarries(prev => { const next = prev.map(a => [...a]); next[i]![col] = v; return next; })}
              validated={validated} noCard
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PlaceValueCard — A1.2 Ex6 style decompose card ──────────────────────────

function PlaceValueCard({ n, cols, answers, onChange, validated }: {
  n: number;
  cols: { label: string; accept: (v: string) => boolean; correct: string }[];
  answers: string[];
  onChange: (col: number, val: string) => void;
  validated: boolean;
}) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
      <div className="flex items-start gap-1 text-sm font-medium text-[var(--color-text-primary)]">
        <span className="mt-[7px] shrink-0 text-2xl font-bold tabular-nums text-[var(--color-text-primary)]">
          {n.toLocaleString("fr-CH")}
        </span>
        <span className="mt-[7px] shrink-0">=</span>
        {cols.map((col, ci) => (
          <React.Fragment key={ci}>
            {ci > 0 && <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>}
            <div className="flex flex-1 flex-col items-center gap-0.5">
              <CorrectionInput
                value={answers[ci] ?? ""}
                onChange={v => onChange(ci, v.replace(/[^0-9]/g, ""))}
                correct={col.correct}
                validated={validated}
                width="w-full"
              />
              <span className="text-xs text-[var(--color-text-secondary)]">{col.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 8 — Decompose into tens + units ──────────────────────────────────

export function Exercise8({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo(() => {
    return Array.from({ length: questionCount }, () => {
      let n = randInt(11, 99);
      while (n % 10 === 0) n = randInt(11, 99);
      const d = Math.floor(n / 10), u = n % 10;
      return { n, d, u };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[][]>(() => questions.map(() => ["", ""]));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const [dAns, uAns] = answers[i] ?? ["", ""];
      const dOk = (dAns ?? "").trim() === String(q.d) || (dAns ?? "").trim() === String(q.d * 10);
      const uOk = (uAns ?? "").trim() === String(q.u);
      if (dOk && uOk) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Décomposez chaque nombre en dizaines et unités.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 gap-4", forPrint)}>
        {questions.map((q, i) => (
          <PlaceValueCard key={i} n={q.n}
            cols={[
              { label: "dizaine", accept: v => v === String(q.d) || v === String(q.d * 10), correct: String(q.d) },
              { label: "unité",   accept: v => v === String(q.u), correct: String(q.u) },
            ]}
            answers={answers[i] ?? []}
            onChange={(col, val) => setAnswers(prev => { const n = prev.map(r => [...r]); n[i]![col] = val; return n; })}
            validated={validated}
          />
        ))}
      </div>
    </div>
  );
}

// ── Exercise 9 — Compare integers 101–999 ────────────────────────────────────

function makeEx9Pair(op: CompOp, struct: "first2" | "last2" | "free"): { a: number; b: number } {
  if (op === "=") {
    const v = randInt(101, 999);
    return { a: v, b: v };
  }
  if (struct === "first2") {
    // same hundreds and tens, units differ
    const h = randInt(1, 9);
    const dt = randInt(0, 9);
    let u1: number, u2: number;
    if (op === "<") {
      u1 = randInt(0, 8); u2 = randInt(u1 + 1, 9);
    } else {
      u2 = randInt(0, 8); u1 = randInt(u2 + 1, 9);
    }
    return { a: h * 100 + dt * 10 + u1, b: h * 100 + dt * 10 + u2 };
  }
  if (struct === "last2") {
    // same tens and units, hundreds differ
    const h1 = randInt(1, 8);
    const h2 = randInt(h1 + 1, 9);
    const dt = randInt(0, 9);
    const u = randInt(0, 9);
    if (op === "<") return { a: h1 * 100 + dt * 10 + u, b: h2 * 100 + dt * 10 + u };
    return { a: h2 * 100 + dt * 10 + u, b: h1 * 100 + dt * 10 + u };
  }
  // free
  let a = randInt(101, 999);
  let b = randInt(101, 999);
  while (b === a) b = randInt(101, 999);
  if (op === "<" && a > b) [a, b] = [b, a];
  if (op === ">" && a < b) [a, b] = [b, a];
  return { a, b };
}

export function Exercise9({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(4);
  const questions = useMemo(() => {
    // 1 <, 1 >, 1 =, puis aléatoire
    const base: CompOp[] = ["<", ">", "="];
    const ops: CompOp[] = Array.from({ length: questionCount }, (_, i) =>
      i < base.length ? base[i]! : (["<", ">", "="] as CompOp[])[randInt(0, 2)]!);
    const shuffledOps = shuffle(ops);
    // 2 contraintes structurelles + le reste libre, mélangé
    const structBase = ["first2", "last2"] as const;
    const structs = shuffle(Array.from({ length: questionCount }, (_, i): "first2" | "last2" | "free" =>
      i < structBase.length ? structBase[i]! : "free"));
    return shuffledOps.map((op, i) => ({ ...makeEx9Pair(op, structs[i]!), op }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<Array<CompOp | null>>(() => Array(questions.length).fill(null));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const correct: CompOp = q.a < q.b ? "<" : q.a > q.b ? ">" : "=";
      if (answers[i] === correct) pts += 0.5;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Choisissez le bon signe de comparaison.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <CompareQuestion
            key={i}
            qNum={i + 1}
            a={q.a}
            b={q.b}
            correct={q.a < q.b ? "<" : q.a > q.b ? ">" : "="}
            validated={validated}
            selected={answers[i] ?? null}
            onSelect={(op) => setAnswers(prev => { const next = [...prev]; next[i] = op; return next; })}
          />
        ))}
      </div>
    </div>
  );
}

// ── Exercise 10 — Number sequences large numbers ──────────────────────────────

interface LargeSeqData {
  values: number[];
  blanks: [number, number];
}

function makeLargeSeq(gap: number, ascending: boolean, minVal: number, maxVal: number): LargeSeqData {
  const count = 5;
  const nonAdjacentPairs = [[0, 2], [0, 3], [0, 4], [1, 3], [1, 4], [2, 4]];
  const pair = nonAdjacentPairs[randInt(0, nonAdjacentPairs.length - 1)]! as [number, number];
  let start: number;
  const totalSpan = gap * (count - 1);
  if (ascending) {
    start = randInt(minVal, maxVal - totalSpan);
  } else {
    start = randInt(minVal + totalSpan, maxVal);
  }
  const values = Array.from({ length: count }, (_, i) => ascending ? start + i * gap : start - i * gap);
  return { values, blanks: pair };
}

export function Exercise10({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo(() => {
    const asc0 = placementRandom() < 0.5;
    return Array.from({ length: questionCount }, (_, i) => {
      const asc = i % 2 === 0 ? asc0 : !asc0;
      const gap = i % 2 === 0
        ? randInt(5, 19) * 5 // multiple de 5, 25–95
        : randInt(5, 39) * 25; // multiple de 25, 125–975
      return makeLargeSeq(gap, asc, 100, 9999);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<[string, string][]>(() => questions.map(() => ["", ""]));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((seq, i) => {
      const a = answers[i] ?? ["", ""];
      const ca = String(seq.values[seq.blanks[0]]);
      const cb = String(seq.values[seq.blanks[1]]);
      if (a[0].trim() === ca && a[1].trim() === cb) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  function renderSeq(values: number[], blanks: [number, number], ans: [string, string], setAns: (a: [string, string]) => void, qNum: number) {
    return (
      <div className="flex items-center gap-2">
        <span className="w-4 shrink-0 text-sm font-semibold text-[var(--color-accent-alg)]">{qNum}.</span>
        <div className="flex items-center gap-1">
          {values.map((v, i) => {
            const blankIdx: 0 | 1 | -1 = blanks[0] === i ? 0 : blanks[1] === i ? 1 : -1;
            if (blankIdx === 0 || blankIdx === 1) {
              return (
                <CorrectionInput
                  key={i}
                  value={ans[blankIdx]}
                  onChange={(val) => {
                    const next: [string, string] = [ans[0], ans[1]];
                    next[blankIdx] = val;
                    setAns(next);
                  }}
                  correct={String(v)}
                  validated={validated}
                  width="h-9 w-[60px] px-1 rounded-full"
                />
              );
            }
            return (
              <div key={i} className="inline-flex h-9 w-[60px] items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] font-mono text-sm font-semibold text-[var(--color-text-primary)]">{v}</div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites numériques.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((seq, i) => (
          <React.Fragment key={i}>
            {renderSeq(
              seq.values,
              seq.blanks,
              answers[i] ?? ["", ""],
              (a) => setAnswers(prev => prev.map((prevA, j) => j === i ? a : prevA)),
              i + 1,
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 11 — Mixed arithmetic ───────────────────────────────────────────

interface MixedQuestion {
  kind: "missing" | "mul" | "div";
  format?: MissingFormat;
  a: number;
  b: number;
  result: number;
}

export function Exercise11({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(6);
  const questions = useMemo((): MixedQuestion[] => {
    function mkAdd(): MixedQuestion {
      const format = (placementRandom() < 0.5 ? "x_plus_blank_eq_y" : "blank_plus_x_eq_y") as MissingFormat;
      if (format === "x_plus_blank_eq_y") {
        const a = randInt(75, 450); const b = randInt(75, 500 - a);
        return { kind: "missing", format, a, b, result: a + b };
      }
      const b = randInt(75, 425); const a = randInt(75, 500 - b);
      return { kind: "missing", format, a, b, result: a + b };
    }
    function mkSub(): MixedQuestion {
      const format = (placementRandom() < 0.5 ? "x_minus_blank_eq_y" : "blank_minus_x_eq_y") as MissingFormat;
      if (format === "x_minus_blank_eq_y") {
        const b = randInt(75, 425); const result = randInt(75, 500 - b);
        return { kind: "missing", format, a: b + result, b, result };
      }
      const b = randInt(75, 425); const result = randInt(75, 500 - b);
      return { kind: "missing", format, a: result + b, b, result };
    }
    function mkMul67(): MixedQuestion {
      const b = ([6, 7] as const)[randInt(0, 1)]!;
      const a = randInt(3, 12);
      return { kind: "mul", a, b, result: a * b };
    }
    function mkMul89(): MixedQuestion {
      const b = ([8, 9] as const)[randInt(0, 1)]!;
      const a = randInt(3, 12);
      return { kind: "mul", a, b, result: a * b };
    }
    function mkDiv345(): MixedQuestion {
      const b = ([3, 4, 5] as const)[randInt(0, 2)]!;
      const result = randInt(2, 12);
      return { kind: "div", a: b * result, b, result };
    }
    function mkDiv1112(): MixedQuestion {
      const b = ([11, 12] as const)[randInt(0, 1)]!;
      const result = randInt(2, 9);
      return { kind: "div", a: b * result, b, result };
    }
    // Fixed order: +, −, ×(6|7), ×(8|9), ÷(3|4|5), ÷(11|12) — cycle au-delà de 6
    const makers = [mkAdd, mkSub, mkMul67, mkMul89, mkDiv345, mkDiv1112];
    return Array.from({ length: questionCount }, (_, i) => makers[i % makers.length]!());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const expected = q.kind === "missing" ? q.b : q.result;
      if (answers[i]?.trim() === String(expected)) pts += 0.5;
    });
    onValidated(pts, 3);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const num = (n: number) => (
    <span className="inline-flex h-9 w-16 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{n}</span>
  );
  const opSpan = (s: string) => (
    <span className="w-6 text-center font-mono text-base text-[var(--color-text-secondary)]">{s}</span>
  );
  const eqSpan = <span className="w-6 text-center font-mono text-base text-[var(--color-text-secondary)]">=</span>;

  function renderQ(q: MixedQuestion, i: number) {
    const ans = answers[i] ?? "";
    const onChange = (v: string) => setAnswers(prev => { const next = [...prev]; next[i] = v; return next; });
    const inp = <CorrectionInput value={ans} onChange={onChange} correct={String(q.kind === "missing" ? q.b : q.result)} validated={validated} width="w-16" />;

    if (q.kind === "mul") return <>{num(q.a)}{opSpan("×")}{num(q.b)}{eqSpan}{inp}</>;
    if (q.kind === "div") return <>{num(q.a)}{opSpan("÷")}{num(q.b)}{eqSpan}{inp}</>;
    const { format, a, result } = q;
    if (format === "x_plus_blank_eq_y") return <>{num(a)}{opSpan("+")}{inp}{eqSpan}{num(result)}</>;
    if (format === "x_minus_blank_eq_y") return <>{num(a)}{opSpan("−")}{inp}{eqSpan}{num(result)}</>;
    if (format === "blank_plus_x_eq_y") return <>{inp}{opSpan("+")}{num(a)}{eqSpan}{num(result)}</>;
    return <>{inp}{opSpan("−")}{num(a)}{eqSpan}{num(result)}</>;
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les calculs.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            {renderQ(q, i)}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 12 — Decompose 3-digit and 4-digit numbers ──────────────────────

/** Colonnes de décomposition (label, chiffre, multiplicateur) d'un nombre 3 ou 4 chiffres. */
function decomposeCols(n: number, digits: 3 | 4): Array<{ label: string; digit: number; multi: number }> {
  const u = n % 10;
  const t = Math.floor((n % 100) / 10);
  const h = Math.floor((n % 1000) / 100);
  const cols: Array<{ label: string; digit: number; multi: number }> = [];
  if (digits === 4) cols.push({ label: "millier", digit: Math.floor(n / 1000), multi: 1000 });
  cols.push({ label: "centaine", digit: h, multi: 100 });
  cols.push({ label: "dizaine", digit: t, multi: 10 });
  cols.push({ label: "unité", digit: u, multi: 1 });
  return cols;
}

export function Exercise12({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo(() => {
    return Array.from({ length: questionCount }, (_, i) => {
      if (i % 2 === 0) {
        let n = randInt(111, 999);
        while (n % 10 === 0) n = randInt(111, 999);
        return { n, digits: 3 as const };
      }
      let n = randInt(1111, 9999);
      while (n % 10 === 0) n = randInt(1111, 9999);
      return { n, digits: 4 as const };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[][]>(() => questions.map(q => Array(q.digits).fill("")));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const a = answers[i] ?? [];
      const ok = decomposeCols(q.n, q.digits).every((col, ci) => {
        const s = (a[ci] ?? "").trim();
        return col.multi === 1
          ? s === String(col.digit)
          : s === String(col.digit) || s === String(col.digit * col.multi);
      });
      if (ok) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Décomposez chaque nombre.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 gap-4", forPrint)}>
        {questions.map((q, i) => (
          <PlaceValueCard key={i} n={q.n}
            cols={decomposeCols(q.n, q.digits).map(col => ({
              label: col.label,
              accept: (v: string) => col.multi === 1
                ? v === String(col.digit)
                : v === String(col.digit) || v === String(col.digit * col.multi),
              correct: String(col.digit),
            }))}
            answers={answers[i] ?? []}
            onChange={(col, val) => setAnswers(prev => { const n = prev.map(r => [...r]); n[i]![col] = val; return n; })}
            validated={validated}
          />
        ))}
      </div>
    </div>
  );
}

// ── Exercise 13 — Column arithmetic 1000–9999 (6 operations) ────────────────

type Ex13Question = { a: number; b: number; op: "+" | "-" | "×" | "÷"; result: number };

function hasAdditionCarry(a: number, b: number): boolean {
  let carry = 0;
  for (let i = 0; i < 4; i++) {
    const sum = (a % 10) + (b % 10) + carry;
    if (sum >= 10) return true;
    carry = Math.floor(sum / 10);
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }
  return false;
}

export function Exercise13({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo((): Ex13Question[] => {
    return Array.from({ length: questionCount }, (_, i): Ex13Question => {
      if (i % 2 === 0) {
        let a = randInt(1000, 8999);
        let b = randInt(1000, 9999 - a);
        while (!hasAdditionCarry(a, b)) {
          a = randInt(1000, 8999);
          b = randInt(1000, 9999 - a);
        }
        return { a, b, op: "+", result: a + b };
      }
      const a = randInt(1001, 9999); let b = randInt(1000, a - 1);
      while (b >= a) b = randInt(1000, a - 1);
      return { a, b, op: "-", result: a - b };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  const [answers, setAnswers] = useState<string[][]>(() => questions.map(() => ["","","",""]));
  const [carries, setCarries] = useState<string[][]>(() => questions.map(() => ["","","",""]));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const d = answers[i] ?? [];
      const rec = (parseInt(d[0]||"0")||0)*1000 + (parseInt(d[1]||"0")||0)*100 +
        (parseInt(d[2]||"0")||0)*10 + (parseInt(d[3]||"0")||0);
      if (rec === q.result) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les calculs en colonnes.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <div key={i} className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <PlacementColCard
              a={q.a} b={q.b} op={q.op} result={q.result}
              answers={answers[i] ?? ["","","",""]}
              carries={carries[i] ?? ["","","",""]}
              onChange={(col, v) => setAnswers(prev => { const next = prev.map(a => [...a]); next[i]![col] = v; return next; })}
              onCarryChange={(col, v) => setCarries(prev => { const next = prev.map(a => [...a]); next[i]![col] = v; return next; })}
              validated={validated} noCard showCarryCorrection
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PlacementMulCard2 — 2-digit multiplier (A3.2 ex3 / Mul2DigitCard style) ──

function d5(n: number): [number,number,number,number,number] {
  return [Math.floor(n/10000)%10, Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10];
}

/** Retenues attendues de a × chiffre (espace 5 colonnes), null = pas de retenue. */
function computeMulCarries5(a: number, bDigit: number): (number | null)[] {
  const ad = d5(a);
  const row: (number | null)[] = [null, null, null, null, null];
  let c = 0;
  for (let i = 4; i >= 0; i--) {
    const prod = ad[i]! * bDigit + c;
    c = Math.floor(prod / 10);
    if (i > 0 && c > 0) row[i - 1] = c;
  }
  return row;
}

function PlacementMulCard2({ a, b, result, answers, carries, onChange, onCarryChange, validated, noCard = false }: {
  a: number; b: number; result: number;
  answers: string[]; carries: string[];
  onChange: (idx: number, val: string) => void;
  onCarryChange: (idx: number, val: string) => void;
  validated: boolean; noCard?: boolean;
}) {
  const bUnits = b % 10, bTens = Math.floor(b / 10);
  const partial1 = a * bUnits, partial2 = a * bTens;
  const ad = d5(a), bd = d5(b), rd = d5(result);
  const p1d = d5(partial1), p2d = d5(partial2);
  const aFz = ad.findIndex(x => x !== 0);
  const bFz = bd.findIndex(x => x !== 0);
  const numCols = result > 9999 ? 5 : 4;
  const colStart = 5 - numCols;
  const cols = Array.from({ length: numCols }, (_, i) => colStart + i);
  const hdrs = (result > 9999 ? ["DM","M","C","D","U"] : ["M","C","D","U"]) as string[];

  const carries1Exp = computeMulCarries5(a, bUnits);
  const carries2Exp = computeMulCarries5(a, bTens);

  const carryIn = (idx: number, expected: number | null) => {
    const val = carries[idx] ?? "";
    if (validated && expected !== null && val.trim() !== String(expected)) {
      return (
        <div className="flex h-5 w-8 flex-col items-center justify-center border-amber-400">
          <span className="text-[8px] leading-none text-[var(--color-text-primary)]">{val || "—"}</span>
          <span className="text-[8px] font-bold leading-none text-amber-600">{expected}</span>
        </div>
      );
    }
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val}
        disabled={validated}
        onChange={e => onCarryChange(idx, e.target.value.replace(/[^0-9]/g,"").slice(-1))}
        className="h-5 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/30 text-center font-mono text-[10px] text-orange-500 outline-none focus:border-orange-400 disabled:opacity-40"
      />
    );
  };
  const digitIn = (idx: number, correct?: number | null) => (
    correct == null ? (
      <input type="text" inputMode="numeric" maxLength={1} value={answers[idx] ?? ""}
        disabled={validated}
        onChange={e => onChange(idx, e.target.value.replace(/[^0-9]/g,"").slice(-1))}
        className="h-8 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 text-center font-mono text-base outline-none focus:border-[var(--color-accent-alg)] disabled:opacity-60"
      />
    ) : (
      <CorrectionInput
        value={answers[idx] ?? ""}
        onChange={v => onChange(idx, v.replace(/[^0-9]/g,"").slice(-1))}
        correct={String(correct)}
        validated={validated}
        width="w-8"
      />
    )
  );
  const pre = (d: number, isL: boolean) => (
    <div className="flex h-8 w-8 items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{isL ? "" : d}</div>
  );
  // p2 shifted: col i → p2d[i+1], col 4 = fixed 0
  const p2Digit = (col: number) => col === 4 ? null : p2d[col + 1]!;

  const inner = (
    <table className="mx-auto border-collapse">
        <thead>
          <tr>
            <td className="w-6" />
            {hdrs.map(h => <th key={h} className="w-8 text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R2</td>
            {cols.map(col => <td key={col} className="p-0.5 text-center">{carryIn(5 + col, carries2Exp[col] ?? null)}</td>)}
          </tr>
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
            {cols.map(col => <td key={col} className="p-0.5 text-center">{carryIn(col, carries1Exp[col] ?? null)}</td>)}
          </tr>
          <tr>
            <td />
            {cols.map(col => <td key={col} className="p-0.5 text-center">{pre(ad[col]!, col < aFz)}</td>)}
          </tr>
          <tr>
            <td className="pr-1 text-right font-mono text-sm text-[var(--color-text-secondary)]">×</td>
            {cols.map(col => <td key={col} className="p-0.5 text-center">{pre(bd[col]!, col < bFz)}</td>)}
          </tr>
          <tr><td colSpan={numCols + 1}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td />
            {cols.map(col => <td key={col} className="p-0.5 text-center">{digitIn(col, p1d[col])}</td>)}
          </tr>
          <tr>
            <td className="pr-1 text-right font-mono text-sm text-[var(--color-text-primary)]">+</td>
            {cols.map(col => (
              <td key={col} className="p-0.5 text-center">
                {col === 4
                  ? <div className="flex h-8 w-8 items-center justify-center font-mono text-base font-bold text-[var(--color-accent-alg)] opacity-60">0</div>
                  : digitIn(5 + col, p2d[col + 1])
                }
              </td>
            ))}
          </tr>
          <tr><td colSpan={numCols + 1}><div className="my-1 h-px bg-[var(--color-text-primary)]" /></td></tr>
          <tr>
            <td />
            {cols.map(col => <td key={col} className="p-0.5 text-center">{digitIn(10 + col, rd[col])}</td>)}
          </tr>
        </tbody>
      </table>
  );
  const wrapper = <>{inner}<div className="sr-only">{void [p1d, p2Digit, rd]}</div></>;
  return noCard ? wrapper : <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">{wrapper}</div>;
}

// ── Exercise 14 — Column multiplication (A3.2 ex1 + ex3 style) ───────────────

type Ex14Question = { kind: "single" | "double"; a: number; b: number; r: number };

export function Exercise14({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo((): Ex14Question[] => {
    return Array.from({ length: questionCount }, (_, i): Ex14Question => {
      if (i % 2 === 0) {
        const a = randInt(100, 999), b = randInt(2, 9);
        return { kind: "single", a, b, r: a * b };
      }
      const a = randInt(12, 999); let b = randInt(11, 99);
      while (b % 10 === 0) b = randInt(11, 99);
      return { kind: "double", a, b, r: a * b };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, questionCount]);

  // single: PlacementColCard (4 carries + 4 result) / double: PlacementMulCard2 (10 carries + 15 answers)
  const [answers, setAnswers] = useState<string[][]>(() =>
    questions.map(q => Array(q.kind === "single" ? 4 : 15).fill("")));
  const [carries, setCarries] = useState<string[][]>(() =>
    questions.map(q => Array(q.kind === "single" ? 4 : 10).fill("")));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const ans = answers[i] ?? [];
      if (q.kind === "single") {
        const rec = (parseInt(ans[0]||"0")||0)*1000 + (parseInt(ans[1]||"0")||0)*100 +
          (parseInt(ans[2]||"0")||0)*10 + (parseInt(ans[3]||"0")||0);
        if (rec === q.r) pts++;
        return;
      }
      // double : résultat aux indices 10-14 (5 colonnes), colonnes utiles seulement
      const numCols = q.r > 9999 ? 5 : 4;
      const colStart = 5 - numCols;
      const rD = d5(q.r);
      let ok = true;
      for (let c = colStart; c < 5; c++) {
        const val = parseInt(ans[10 + c]||"0")||0;
        if (val !== rD[c]) { ok = false; break; }
      }
      if (ok) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const setAns = (i: number) => (idx: number, v: string) =>
    setAnswers(prev => prev.map((row, j) => j === i ? row.map((c, k) => k === idx ? v : c) : row));
  const setCar = (i: number) => (idx: number, v: string) =>
    setCarries(prev => prev.map((row, j) => j === i ? row.map((c, k) => k === idx ? v : c) : row));

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les multiplications en colonnes.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <p className="text-center font-mono text-sm font-bold text-[var(--color-text-primary)]">
              {q.a} × {q.b}
            </p>
            {q.kind === "single" ? (
              <PlacementColCard
                a={q.a} b={q.b} op="×" result={q.r}
                answers={answers[i] ?? []} carries={carries[i] ?? []}
                onChange={setAns(i)}
                onCarryChange={setCar(i)}
                validated={validated} noCard showCarryCorrection
              />
            ) : (
              <PlacementMulCard2
                a={q.a} b={q.b} result={q.r}
                answers={answers[i] ?? []} carries={carries[i] ?? []}
                onChange={setAns(i)}
                onCarryChange={setCar(i)}
                validated={validated} noCard
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PlacementDivCard — Column division (A3.4 style) ───────────────────────────

function computePlaceDivSteps(dividend: number, divisor: number): Array<{ partialDiv: number; product: number; colEnd: number }> {
  const digits = dividend.toString().split("").map(Number);
  const steps: Array<{ partialDiv: number; product: number; colEnd: number }> = [];
  let current = 0;
  for (let i = 0; i < digits.length; i++) {
    current = current * 10 + digits[i]!;
    if (current < divisor && i < digits.length - 1) continue;
    const qd = Math.floor(current / divisor);
    const prod = qd * divisor;
    steps.push({ partialDiv: current, product: prod, colEnd: i });
    current = current - prod;
  }
  return steps;
}

function DivWorkRow({ numStr, colEnd, dividendCols, workFlat, si, onWorkChange, validated }: {
  numStr: string; colEnd: number; dividendCols: number;
  workFlat: string[]; si: number;
  onWorkChange: (step: number, col: number, val: string) => void;
  validated: boolean;
}) {
  const CW = 32;
  const startCol = colEnd - numStr.length + 1;
  return (
    <>
      {Array.from({ length: dividendCols }, (_, col) => {
        const relIdx = col - startCol;
        const hasDigit = relIdx >= 0 && relIdx < numStr.length;
        const flatIdx = si * dividendCols + relIdx;
        const val = hasDigit ? (workFlat[flatIdx] ?? "") : "";
        const correct = hasDigit ? (numStr[relIdx] ?? "") : "";
        const wrong = validated && hasDigit && val.trim() !== correct;
        return (
          <td key={col} style={{ width: CW, padding: 2 }} className="align-middle text-center">
            {hasDigit ? (
              validated ? (
                <div className={`flex h-8 w-8 items-center justify-center rounded-none border-0 border-b-2 text-center font-mono ${
                  wrong
                    ? "border-amber-500"
                    : "border-[var(--color-accent-alg)]/60 text-[var(--color-text-primary)]"
                }`}>
                  {wrong ? (
                    <div className="flex flex-col leading-tight">
                      {val.trim() && <span className="text-[9px] text-[var(--color-text-secondary)] line-through">{val}</span>}
                      <span className="text-sm font-semibold text-amber-600">{correct}</span>
                    </div>
                  ) : (
                    <span>{val || correct}</span>
                  )}
                </div>
              ) : (
                <input type="text" inputMode="numeric" maxLength={1} value={val}
                  onChange={e => onWorkChange(si, relIdx, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
                  className="h-8 w-8 rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 text-center font-mono text-base outline-none focus:border-[var(--color-accent-alg)]"
                />
              )
            ) : (
              <div className="h-8 w-8" />
            )}
          </td>
        );
      })}
    </>
  );
}

function PlacementDivCard({ dividend, divisor, quotient, dividendCols, divisorCols,
  quotientInputs, remainderInput, workFlat,
  onQuotientChange, onRemainderChange, onWorkChange, validated }: {
  dividend: number; divisor: number; quotient: number;
  dividendCols: number; divisorCols: number;
  quotientInputs: string[]; remainderInput: string;
  workFlat: string[]; // index = step*dividendCols + col
  onQuotientChange: (qi: number, val: string) => void;
  onRemainderChange: (val: string) => void;
  onWorkChange: (step: number, col: number, val: string) => void;
  validated: boolean;
}) {
  const steps = computePlaceDivSteps(dividend, divisor);
  const quotientStr = quotient.toString();
  const dividendStr = dividend.toString().padStart(dividendCols, "0");
  const divisorStr = divisor.toString();
  const quotientCols = steps.length;
  const BSEP: React.CSSProperties = { borderLeft: "2px solid var(--color-text-primary)" };
  const colLabels = dividendCols === 4 ? ["M","C","D","U"] : ["DM","M","C","D","U"];
  const CW = 32;

  const preCell = (ch: string, hide?: boolean) => (
    <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{hide ? "" : ch}</div>
  );
  const emptyCell = () => <div className="h-8 w-8" />;

  return (
    <div className="overflow-x-auto">
      <table className="mx-auto border-collapse table-fixed">
        <tbody>
          <tr>
            <td style={{ width: 20, padding: 0 }} />
            {colLabels.map((lbl, i) => (
              <td key={i} style={{ width: CW, padding: 0 }} className="text-center text-[10px] font-bold text-[var(--color-accent-alg)]">{lbl}</td>
            ))}
            {Array.from({ length: quotientCols }, (_, i) => (
              <td key={i} style={{ width: CW, padding: 0, ...(i === 0 ? BSEP : {}) }} />
            ))}
          </tr>
          <tr>
            <td style={{ padding: 0 }} />
            {Array.from({ length: dividendCols }, (_, i) => {
              const isLeading = i < dividendCols - dividend.toString().length;
              return (
                <td key={i} style={{ width: CW, padding: 2 }} className="align-middle text-center">
                  {preCell(dividendStr[i]!, isLeading)}
                </td>
              );
            })}
            {Array.from({ length: quotientCols }, (_, i) => {
              const isDivCol = i < divisorCols;
              const isLeading = isDivCol && i < divisorCols - divisor.toString().length;
              return (
                <td key={i} style={{ width: CW, padding: 2, ...(i === 0 ? BSEP : {}), ...(isDivCol ? { borderBottom: "2px solid var(--color-text-primary)" } : {}) }} className="align-middle text-center">
                  {isDivCol ? preCell(divisorStr[i]!, isLeading) : null}
                </td>
              );
            })}
          </tr>
          <tr>
            <td style={{ padding: 0 }} />
            {Array.from({ length: dividendCols }, (_, i) => <td key={i} style={{ width: CW, padding: 0 }} />)}
            {Array.from({ length: quotientCols }, (_, qi) => (
              <td key={qi} style={{ width: CW, padding: 2, ...(qi === 0 ? BSEP : {}) }} className="align-middle text-center">
                {qi < quotientStr.length
                  ? <CorrectionInput
                      value={quotientInputs[qi] ?? ""}
                      onChange={v => onQuotientChange(qi, v.replace(/[^0-9]/g, "").slice(-1))}
                      correct={quotientStr[qi] ?? ""}
                      validated={validated}
                      width="w-8"
                    />
                  : emptyCell()
                }
              </td>
            ))}
          </tr>
          {steps.map((step, si) => {
            const prStr = step.product.toString();
            const prStart = step.colEnd - prStr.length + 1;
            return (
              <React.Fragment key={si}>
                <tr>
                  <td style={{ padding: 0, textAlign: "center", verticalAlign: "middle", fontSize: 14, color: "var(--color-text-secondary)" }}>−</td>
                  <DivWorkRow numStr={prStr} colEnd={step.colEnd} dividendCols={dividendCols}
                    workFlat={workFlat} si={si} onWorkChange={onWorkChange} validated={validated} />
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
                <tr>
                  <td style={{ padding: 0 }} />
                  {Array.from({ length: dividendCols }, (_, col) => (
                    <td key={col} style={{ padding: 0, width: CW }}>
                      {col >= prStart && col <= step.colEnd
                        ? <div className="h-px bg-[var(--color-text-primary)] opacity-50 my-1" />
                        : null}
                    </td>
                  ))}
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
              </React.Fragment>
            );
          })}
          <tr>
            <td colSpan={dividendCols} style={{ padding: "4px 6px 4px 0", textAlign: "right", verticalAlign: "middle", fontSize: 12, color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
              Reste :
            </td>
            <td style={{ width: CW, padding: 2 }} className="align-middle text-center">
              <CorrectionInput
                value={remainderInput}
                onChange={v => onRemainderChange(v.replace(/[^0-9]/g,"").slice(0,2))}
                correct={String(dividend % divisor)}
                validated={validated}
                width="w-8"
              />
            </td>
            <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ── Exercise 15 — Column division (A3.4 ex1 + ex2 style) ─────────────────────

function makeDiv15Q(dividendCols: number, divisorCols: number): {
  dividend: number; divisor: number; quotient: number; remainder: number;
  dividendCols: number; divisorCols: number;
} {
  for (;;) {
    let dividend: number, divisor: number;
    if (dividendCols === 4 && divisorCols === 1) {
      dividend = randInt(1000, 9999); divisor = randInt(4, 9);
    } else {
      dividend = randInt(1000, 9999); let d = randInt(11, 99);
      while (d % 10 === 0) d = randInt(11, 99);
      divisor = d;
    }
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    if (quotient === 0) continue;
    if (quotient.toString().length > 4) continue;
    return { dividend, divisor, quotient, remainder, dividendCols, divisorCols };
  }
}

export function Exercise15({ exerciseKey, validated, onValidated, validateTrigger, forPrint }: PlacementExerciseProps) {
  const { questionCount, columns } = usePrintQuestionLayout(2);
  const questions = useMemo(
    () => Array.from({ length: questionCount }, (_, i) => makeDiv15Q(4, i % 2 === 0 ? 1 : 2)),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [exerciseKey, questionCount]);

  // Chaque question : quotient (4 cases), reste (1), travail à plat (4 étapes × 4 cols = 16)
  const [quots, setQuots] = useState<string[][]>(() => questions.map(() => Array(4).fill("")));
  const [rems, setRems] = useState<string[]>(() => questions.map(() => ""));
  const [works, setWorks] = useState<string[][]>(() => questions.map(() => Array(16).fill("")));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const qStr = q.quotient.toString();
      const quot = quots[i] ?? [];
      if (qStr.split("").every((ch, j) => (quot[j] ?? "") === ch)) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les divisions en colonnes.</p>
      <div className={placementListClass(columns, "grid grid-cols-2 items-start gap-x-4 gap-y-3", forPrint)}>
        {questions.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <p className="text-center font-mono text-sm font-bold text-[var(--color-text-primary)]">
              {q.dividend} ÷ {q.divisor}
            </p>
            <PlacementDivCard
              {...q}
              quotientInputs={quots[i] ?? []} remainderInput={rems[i] ?? ""} workFlat={works[i] ?? []}
              onQuotientChange={(qi, v) => setQuots(prev => prev.map((row, j) => j === i ? row.map((c, k) => k === qi ? v : c) : row))}
              onRemainderChange={(v) => setRems(prev => prev.map((r, j) => j === i ? v : r))}
              onWorkChange={(step, col, val) => setWorks(prev => prev.map((row, j) => {
                if (j !== i) return row;
                const idx = step * q.dividendCols + col;
                return row.map((c, k) => k === idx ? val : c);
              }))}
              validated={validated}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
