"use client";

import React, { useState, useMemo, useEffect } from "react";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";

export interface PlacementExerciseProps {
  exerciseKey: number;
  validated: boolean;
  onValidated: (points: number, maxPoints: number) => void;
  validateTrigger: number;
}

// ── Utility helpers ──────────────────────────────────────────────────────────

function randInt(min: number, max: number): number {
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
  const showCorrection = validated && value.trim() !== correct.trim();
  if (showCorrection) {
    return (
      <span className={`${width} inline-flex min-h-9 flex-col items-center justify-center rounded border border-amber-400 bg-amber-50 px-1 text-center font-mono leading-tight`}>
        {value.trim() && <span className="text-[10px] text-[var(--color-text-secondary)] line-through">{value}</span>}
        <span className="text-sm font-semibold text-amber-700">{correct}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex flex-col items-center gap-0.5 align-middle">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={validated}
        className={`${width} h-9 rounded border px-1 text-center font-mono text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-1 disabled:opacity-80 ${
          showCorrection
            ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200"
            : "border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 focus:border-[var(--color-accent-alg)] focus:ring-[var(--color-accent-alg)]/20"
        }`}
      />
      {showCorrection && <span className="text-[10px] font-semibold text-green-600">✓ {correct}</span>}
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
  return <p className={className} lang={showPivot ? pivot : "fr"} dir={pivot === "ar" || pivot === "fa" || pivot === "ps" ? "rtl" : "ltr"}>{translated ?? text}</p>;
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

export function Exercise1({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const shapes: ShapeType[] = ["circle", "square", "triangle", "star"];
    const shuffled = shuffle([...shapes]);
    const shape1 = shuffled[0]!;
    const shape2 = shuffled[1]!;
    const count1 = randInt(10, 15);
    const count2 = randInt(15, 25);
    return { shape1, shape2, count1, count2, seed1: randInt(1, 9999), seed2: randInt(10000, 19999) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    const pts = (ans1.trim() === String(data.count1) ? 1 : 0) + (ans2.trim() === String(data.count2) ? 1 : 0);
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <PlacementInstruction text="Comptez le nombre de formes." />
      {[
        { count: data.count1, shape: data.shape1, seed: data.seed1, ans: ans1, setAns: setAns1 },
        { count: data.count2, shape: data.shape2, seed: data.seed2, ans: ans2, setAns: setAns2 },
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="flex w-24 shrink-0 items-center gap-2">
            <span className="w-5 text-sm font-semibold text-[var(--color-accent-alg)]">{idx + 1}.</span>
            <CorrectionInput
              value={item.ans}
              onChange={item.setAns}
              correct={String(item.count)}
              validated={validated}
              width="w-16"
              placeholder="?"
            />
          </div>
          <ShapeFrame count={item.count} shape={item.shape} seed={item.seed} />
        </div>
      ))}
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
            if (isCorrect) cls += "border-amber-400 bg-amber-50 text-amber-700";
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

export function Exercise2({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo(() => {
    function mkLt() { const a = randInt(11, 98); const b = randInt(a + 1, 99); return { a, b, correct: "<" as CompOp }; }
    function mkGt() { const b = randInt(11, 98); const a = randInt(b + 1, 99); return { a, b, correct: ">" as CompOp }; }
    function mkEq() { const a = randInt(11, 99); return { a, b: a, correct: "=" as CompOp }; }
    function mkRnd() { const r = Math.random(); return r < 1/3 ? mkLt() : r < 2/3 ? mkGt() : mkEq(); }
    const fixed = shuffle([mkLt(), mkGt(), mkEq()]);
    return shuffle([...fixed, mkRnd()]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<Array<CompOp | null>>([null, null, null, null]);

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

export function Exercise3({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const gap1 = randInt(2, 9);
    const dir1: "asc" | "desc" = Math.random() < 0.5 ? "asc" : "desc";
    const dir2: "asc" | "desc" = dir1 === "asc" ? "desc" : "asc";
    const gap2 = randInt(11, 19);

    // Build seq1 (5 values, all 1–99)
    let start1: number;
    if (dir1 === "asc") {
      start1 = randInt(1, 99 - gap1 * 4);
    } else {
      start1 = randInt(gap1 * 4 + 1, 99);
    }
    const seq1 = Array.from({ length: 5 }, (_, i) => dir1 === "asc" ? start1 + i * gap1 : start1 - i * gap1);

    let start2: number;
    if (dir2 === "asc") {
      start2 = randInt(1, 99 - gap2 * 4);
    } else {
      start2 = randInt(gap2 * 4 + 1, 99);
    }
    const seq2 = Array.from({ length: 5 }, (_, i) => dir2 === "asc" ? start2 + i * gap2 : start2 - i * gap2);

    return { seq1, seq2, blanks1: [1, 3] as [number, number], blanks2: [1, 3] as [number, number] };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ans1, setAns1] = useState<[string, string]>(["", ""]);
  const [ans2, setAns2] = useState<[string, string]>(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const correct1a = String(data.seq1[data.blanks1[0]]);
    const correct1b = String(data.seq1[data.blanks1[1]]);
    if (ans1[0].trim() === correct1a && ans1[1].trim() === correct1b) pts++;
    const correct2a = String(data.seq2[data.blanks2[0]]);
    const correct2b = String(data.seq2[data.blanks2[1]]);
    if (ans2[0].trim() === correct2a && ans2[1].trim() === correct2b) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites numériques.</p>
      <SeqQuestion
        qNum={1}
        values={data.seq1}
        blanks={data.blanks1}
        validated={validated}
        answers={ans1}
        onChange={(idx, v) => setAns1(prev => { const next: [string, string] = [prev[0], prev[1]]; next[idx] = v; return next; })}
      />
      <SeqQuestion
        qNum={2}
        values={data.seq2}
        blanks={data.blanks2}
        validated={validated}
        answers={ans2}
        onChange={(idx, v) => setAns2(prev => { const next: [string, string] = [prev[0], prev[1]]; next[idx] = v; return next; })}
      />
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

export function Exercise4({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo((): ArithQuestion[] => {
    const qs: ArithQuestion[] = [];
    // 2 additions (20–50)
    for (let i = 0; i < 2; i++) {
      const a = randInt(20, 50);
      const b = randInt(20, 50);
      qs.push({ a, b, op: "+", result: a + b });
    }
    // 2 subtractions (result > 0)
    for (let i = 0; i < 2; i++) {
      let a = randInt(11, 99);
      let b = randInt(11, 99);
      if (b > a) [a, b] = [b, a];
      while (a === b) { a = randInt(11, 99); }
      qs.push({ a, b, op: "-", result: a - b });
    }
    return shuffle(qs);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(4).fill(""));

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
      <div className="grid items-center gap-x-2 gap-y-3 text-base" style={{ gridTemplateColumns: "max-content max-content max-content max-content max-content max-content" }}>
      {questions.map((q, i) => (
        <React.Fragment key={i}>
          <span className="w-4 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
          <span className="justify-self-end font-mono text-[var(--color-text-primary)]">{q.a}</span>
          <span className="justify-self-center font-mono text-[var(--color-text-secondary)]">{q.op}</span>
          <span className="justify-self-start font-mono text-[var(--color-text-primary)]">{q.b}</span>
          <span className="justify-self-center text-[var(--color-text-secondary)]">=</span>
          <CorrectionInput
            value={answers[i] ?? ""}
            onChange={(v) => setAnswers(prev => { const next = [...prev]; next[i] = v; return next; })}
            correct={String(q.result)}
            validated={validated}
            width="w-16"
          />
        </React.Fragment>
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

export function Exercise5({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo((): MissingOpQuestion[] => {
    const formats: MissingFormat[] = shuffle(["x_plus_blank_eq_y", "x_minus_blank_eq_y", "blank_plus_x_eq_y", "blank_minus_x_eq_y"]);
    return formats.map(format => {
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
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(4).fill(""));

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
      <div className="space-y-3">
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

function PlacementColCard({ a, b, op, result, answers, carries, onChange, onCarryChange, validated, noCard = false }: {
  a: number; b: number; op: "+" | "-" | "×" | "÷";
  result: number; answers: string[]; carries: string[];
  onChange: (col: number, val: string) => void;
  onCarryChange: (col: number, val: string) => void;
  validated: boolean; noCard?: boolean;
}) {
  const aD = d4(a), bD = d4(b), rD = d4(result);
  const aFz = aD.findIndex(x => x !== 0);
  const bFz = bD.findIndex(x => x !== 0);
  const showCarry = op !== "÷";
  const carryLabel = op === "-" ? "E" : "R";

  const digitInput = (col: number) => (
    <CorrectionInput
      value={answers[col] ?? ""}
      onChange={v => onChange(col, v.replace(/[^0-9]/g, "").slice(-1))}
      correct={String(rD[col])}
      validated={validated}
      width="w-8"
    />
  );

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
                  <input type="text" inputMode="numeric" maxLength={1} value={carries[col] ?? ""}
                    disabled={validated}
                    onChange={e => onCarryChange(col, e.target.value.replace(/[^0-9]/g, "").slice(-1))}
                    className="h-5 w-8 rounded border border-[var(--color-accent-alg)]/30 bg-[var(--color-accent-alg)]/5 text-center font-mono text-[10px] text-orange-500 outline-none focus:border-orange-400 disabled:opacity-40"
                  />
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

export function Exercise6({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo((): ColArithQuestion[] => {
    const a1 = randInt(99, 999);
    const b1 = randInt(99, 999);
    let a2 = randInt(99, 999);
    let b2 = randInt(99, 999);
    if (b2 > a2) [a2, b2] = [b2, a2];
    while (a2 === b2) a2 = randInt(99, 999);
    return [
      { a: a1, b: b1, op: "+", result: a1 + b1 },
      { a: a2, b: b2, op: "-", result: a2 - b2 },
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[][]>(() => Array(2).fill(null).map(() => ["", "", "", ""]));
  const [carries, setCarries] = useState<string[][]>(() => Array(2).fill(null).map(() => ["", "", "", ""]));

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
      <div className="space-y-3">
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
      <div className="mb-3 flex justify-center">
        <span className="text-2xl font-bold tabular-nums text-[var(--color-text-primary)]">
          {n.toLocaleString("fr-CH")}
        </span>
      </div>
      <div className="flex items-start gap-1 text-sm font-medium text-[var(--color-text-primary)]">
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

export function Exercise8({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo(() => {
    return Array.from({ length: 2 }, () => {
      let n = randInt(11, 99);
      while (n % 10 === 0) n = randInt(11, 99);
      const d = Math.floor(n / 10), u = n % 10;
      return { n, d, u };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[][]>(() => [["", ""], ["", ""]]);

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

export function Exercise9({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo(() => {
    // exactly 1 <, 1 >, 1 =, 1 random
    const ops: CompOp[] = ["<", ">", "=", (["<", ">", "="] as CompOp[])[randInt(0, 2)]!];
    const shuffledOps = shuffle(ops);
    // 2 structural constraints + 2 free, shuffled
    const structs = shuffle(["first2", "last2", "free", "free"] as const);
    return shuffledOps.map((op, i) => ({ ...makeEx9Pair(op, structs[i]!), op }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<Array<CompOp | null>>([null, null, null, null]);

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

export function Exercise10({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const asc1 = Math.random() < 0.5;
    const asc2 = !asc1;
    const gap1 = randInt(5, 19) * 5; // multiple of 5, 25–95
    const gap2 = randInt(5, 39) * 25; // multiple of 25, 125–975
    const seq1 = makeLargeSeq(gap1, asc1, 100, 9999);
    const seq2 = makeLargeSeq(gap2, asc2, 100, 9999);
    return { seq1, seq2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ans1, setAns1] = useState<[string, string]>(["", ""]);
  const [ans2, setAns2] = useState<[string, string]>(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const { seq1, seq2 } = data;
    const c1a = String(seq1.values[seq1.blanks[0]]);
    const c1b = String(seq1.values[seq1.blanks[1]]);
    if (ans1[0].trim() === c1a && ans1[1].trim() === c1b) pts++;
    const c2a = String(seq2.values[seq2.blanks[0]]);
    const c2b = String(seq2.values[seq2.blanks[1]]);
    if (ans2[0].trim() === c2a && ans2[1].trim() === c2b) pts++;
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
      {renderSeq(data.seq1.values, data.seq1.blanks, ans1, setAns1, 1)}
      {renderSeq(data.seq2.values, data.seq2.blanks, ans2, setAns2, 2)}
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

export function Exercise11({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo((): MixedQuestion[] => {
    function mkAdd(): MixedQuestion {
      const format = (Math.random() < 0.5 ? "x_plus_blank_eq_y" : "blank_plus_x_eq_y") as MissingFormat;
      if (format === "x_plus_blank_eq_y") {
        const a = randInt(75, 450); const b = randInt(75, 500 - a);
        return { kind: "missing", format, a, b, result: a + b };
      }
      const b = randInt(75, 425); const a = randInt(75, 500 - b);
      return { kind: "missing", format, a, b, result: a + b };
    }
    function mkSub(): MixedQuestion {
      const format = (Math.random() < 0.5 ? "x_minus_blank_eq_y" : "blank_minus_x_eq_y") as MissingFormat;
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
    // Fixed order: +, −, ×(6|7), ×(8|9), ÷(3|4|5), ÷(11|12)
    return [mkAdd(), mkSub(), mkMul67(), mkMul89(), mkDiv345(), mkDiv1112()];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(6).fill(""));

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
      {questions.map((q, i) => (
        <div key={i} className="flex items-center gap-1">
          <span className="w-5 shrink-0 text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
          {renderQ(q, i)}
        </div>
      ))}
    </div>
  );
}

// ── Exercise 12 — Decompose 3-digit and 4-digit numbers ──────────────────────

export function Exercise12({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    let n3 = randInt(111, 999);
    while (n3 % 10 === 0) n3 = randInt(111, 999);
    let n4 = randInt(1111, 9999);
    while (n4 % 10 === 0) n4 = randInt(1111, 9999);
    return { n3, n4 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ans3, setAns3] = useState<string[]>(["", "", ""]);
  const [ans4, setAns4] = useState<string[]>(["", "", "", ""]);

  const h3 = Math.floor(data.n3 / 100);
  const t3 = Math.floor((data.n3 % 100) / 10);
  const u3 = data.n3 % 10;
  const k4 = Math.floor(data.n4 / 1000);
  const h4 = Math.floor((data.n4 % 1000) / 100);
  const t4 = Math.floor((data.n4 % 100) / 10);
  const u4 = data.n4 % 10;

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const chk = (v: string, digit: number, multi: number) => {
      const s = v.trim();
      return s === String(digit) || s === String(digit * multi);
    };
    if (chk(ans3[0] ?? "", h3, 100) && chk(ans3[1] ?? "", t3, 10) && (ans3[2] ?? "").trim() === String(u3)) pts++;
    if (chk(ans4[0] ?? "", k4, 1000) && chk(ans4[1] ?? "", h4, 100) && chk(ans4[2] ?? "", t4, 10) && (ans4[3] ?? "").trim() === String(u4)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Décomposez chaque nombre.</p>
      <PlaceValueCard n={data.n3}
        cols={[
          { label: "centaine", accept: v => v === String(h3) || v === String(h3 * 100), correct: String(h3) },
          { label: "dizaine",  accept: v => v === String(t3) || v === String(t3 * 10), correct: String(t3) },
          { label: "unité",    accept: v => v === String(u3), correct: String(u3) },
        ]}
        answers={ans3}
        onChange={(col, val) => setAns3(prev => { const n = [...prev]; n[col] = val; return n; })}
        validated={validated}
      />
      <PlaceValueCard n={data.n4}
        cols={[
          { label: "millier",  accept: v => v === String(k4) || v === String(k4 * 1000), correct: String(k4) },
          { label: "centaine", accept: v => v === String(h4) || v === String(h4 * 100), correct: String(h4) },
          { label: "dizaine",  accept: v => v === String(t4) || v === String(t4 * 10), correct: String(t4) },
          { label: "unité",    accept: v => v === String(u4), correct: String(u4) },
        ]}
        answers={ans4}
        onChange={(col, val) => setAns4(prev => { const n = [...prev]; n[col] = val; return n; })}
        validated={validated}
      />
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

export function Exercise13({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo((): Ex13Question[] => {
    let a1 = randInt(1000, 8999);
    let b1 = randInt(1000, 9999 - a1);
    while (!hasAdditionCarry(a1, b1)) {
      a1 = randInt(1000, 8999);
      b1 = randInt(1000, 9999 - a1);
    }
    const a2 = randInt(1001, 9999); let b2 = randInt(1000, a2 - 1);
    while (b2 >= a2) b2 = randInt(1000, a2 - 1);
    return [
      { a: a1, b: b1, op: "+", result: a1 + b1 },
      { a: a2, b: b2, op: "-", result: a2 - b2 },
    ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[][]>(() => Array(2).fill(null).map(() => ["","","",""]));
  const [carries, setCarries] = useState<string[][]>(() => Array(2).fill(null).map(() => ["","","",""]));

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
      <div className="space-y-3">
        {questions.map((q, i) => (
          <div key={i} className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <PlacementColCard
              a={q.a} b={q.b} op={q.op} result={q.result}
              answers={answers[i] ?? ["","","",""]}
              carries={carries[i] ?? ["","","",""]}
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

// ── PlacementMulCard2 — 2-digit multiplier (A3.2 ex3 / Mul2DigitCard style) ──

function d5(n: number): [number,number,number,number,number] {
  return [Math.floor(n/10000)%10, Math.floor(n/1000)%10, Math.floor(n/100)%10, Math.floor(n/10)%10, n%10];
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

  const carryIn = (idx: number) => (
    <input type="text" inputMode="numeric" maxLength={1} value={carries[idx] ?? ""}
      disabled={validated}
      onChange={e => onCarryChange(idx, e.target.value.replace(/[^0-9]/g,"").slice(-1))}
      className="h-5 w-8 rounded border border-[var(--color-accent-alg)]/30 bg-[var(--color-accent-alg)]/5 text-center font-mono text-[10px] text-orange-500 outline-none focus:border-orange-400 disabled:opacity-40"
    />
  );
  const digitIn = (idx: number, correct?: number | null) => (
    correct == null ? (
      <input type="text" inputMode="numeric" maxLength={1} value={answers[idx] ?? ""}
        disabled={validated}
        onChange={e => onChange(idx, e.target.value.replace(/[^0-9]/g,"").slice(-1))}
        className="h-8 w-8 rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 text-center font-mono text-base outline-none focus:border-[var(--color-accent-alg)] disabled:opacity-60"
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
            {cols.map(col => <td key={col} className="p-0.5 text-center">{carryIn(5 + col)}</td>)}
          </tr>
          <tr>
            <td className="pr-1 text-right text-[9px] font-bold text-orange-400 leading-none align-middle">R1</td>
            {cols.map(col => <td key={col} className="p-0.5 text-center">{carryIn(col)}</td>)}
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

export function Exercise14({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const a1 = randInt(100, 999), b1 = randInt(2, 9);
    const a2 = randInt(12, 999); let b2 = randInt(11, 99);
    while (b2 % 10 === 0) b2 = randInt(11, 99);
    return { a1, b1, r1: a1 * b1, a2, b2, r2: a2 * b2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  // Q1: PlacementColCard state (4 carries + 4 result)
  const [q1Carries, setQ1Carries] = useState<string[]>(() => ["","","",""]);
  const [q1Ans, setQ1Ans] = useState<string[]>(() => ["","","",""]);
  // Q2: PlacementMulCard2 state (10 carries + 15 answers)
  const [q2Carries, setQ2Carries] = useState<string[]>(() => Array(10).fill(""));
  const [q2Ans, setQ2Ans] = useState<string[]>(() => Array(15).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const r1rec = (parseInt(q1Ans[0]||"0")||0)*1000 + (parseInt(q1Ans[1]||"0")||0)*100 +
      (parseInt(q1Ans[2]||"0")||0)*10 + (parseInt(q1Ans[3]||"0")||0);
    if (r1rec === data.r1) pts++;
    // Q2 result in indices 10-14 (5-wide), take relevant cols
    const numCols = data.r2 > 9999 ? 5 : 4;
    const colStart = 5 - numCols;
    const rD = d5(data.r2);
    let r2ok = true;
    for (let c = colStart; c < 5; c++) {
      const idx = 10 + c;
      const val = parseInt(q2Ans[idx]||"0")||0;
      if (val !== rD[c]) { r2ok = false; break; }
    }
    if (r2ok) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les multiplications en colonnes.</p>
      <div className="space-y-3">
        <div className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
          <PlacementColCard
            a={data.a1} b={data.b1} op="×" result={data.r1}
            answers={q1Ans} carries={q1Carries}
            onChange={(col, v) => setQ1Ans(p => { const n=[...p]; n[col]=v; return n; })}
            onCarryChange={(col, v) => setQ1Carries(p => { const n=[...p]; n[col]=v; return n; })}
            validated={validated} noCard
          />
        </div>
        <div className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
          <PlacementMulCard2
            a={data.a2} b={data.b2} result={data.r2}
            answers={q2Ans} carries={q2Carries}
            onChange={(idx, v) => setQ2Ans(p => { const n=[...p]; n[idx]=v; return n; })}
            onCarryChange={(idx, v) => setQ2Carries(p => { const n=[...p]; n[idx]=v; return n; })}
            validated={validated} noCard
          />
        </div>
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

function PlacementDivCard({ dividend, divisor, quotient, dividendCols, divisorCols,
  quotientInputs, remainderInput, workFlat,
  onQuotientChange, onRemainderChange, onWorkChange, validated }: {
  dividend: number; divisor: number; quotient: number;
  dividendCols: number; divisorCols: number;
  quotientInputs: string[]; remainderInput: string;
  workFlat: string[]; // index = step*2*dividendCols + type*dividendCols + col
  onQuotientChange: (qi: number, val: string) => void;
  onRemainderChange: (val: string) => void;
  onWorkChange: (step: number, type: 0|1, col: number, val: string) => void;
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

  const digIn = (val: string, correct: string, onChange: (v: string) => void) => {
    const wrong = validated && val.trim() !== correct;
    if (validated) {
      return (
        <div className={`flex h-8 w-8 items-center justify-center rounded border text-center font-mono ${
          wrong
            ? "border-amber-400 bg-amber-50 text-amber-700"
            : "border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 text-[var(--color-text-primary)]"
        }`}>
          {wrong ? (
            <div className="flex flex-col leading-tight">
              {val.trim() && <span className="text-[9px] text-[var(--color-text-secondary)] line-through">{val}</span>}
              <span className="text-sm font-semibold">{correct}</span>
            </div>
          ) : (
            <span>{val || correct}</span>
          )}
        </div>
      );
    }
    return (
      <input type="text" inputMode="numeric" maxLength={1} value={val}
        onChange={e => onChange(e.target.value.replace(/[^0-9]/g,"").slice(-1))}
        className="h-8 w-8 rounded border border-[var(--color-accent-alg)]/40 bg-[var(--color-accent-alg)]/10 text-center font-mono text-base outline-none focus:border-[var(--color-accent-alg)]"
      />
    );
  };
  const preCell = (ch: string, hide?: boolean) => (
    <div className="h-8 w-8 flex items-center justify-center font-mono text-base text-[var(--color-text-primary)]">{hide ? "" : ch}</div>
  );
  const emptyCell = () => <div className="h-8 w-8" />;

  function WorkRow({ numStr, colEnd, si, type }: { numStr: string; colEnd: number; si: number; type: 0|1 }) {
    const startCol = colEnd - numStr.length + 1;
    return (
      <>
        {Array.from({ length: dividendCols }, (_, col) => {
          const relIdx = col - startCol;
          const hasDigit = relIdx >= 0 && relIdx < numStr.length;
          const flatIdx = si * 2 * dividendCols + type * dividendCols + relIdx;
          const val = hasDigit ? (workFlat[flatIdx] ?? "") : "";
          return (
            <td key={col} style={{ width: CW, padding: 2 }} className="align-middle text-center">
              {hasDigit ? digIn(val, numStr[relIdx]!, v => onWorkChange(si, type, relIdx, v)) : emptyCell()}
            </td>
          );
        })}
      </>
    );
  }

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
          {steps.map((step, si) => {
            const pdStr = step.partialDiv.toString();
            const prStr = step.product.toString();
            const pdStart = step.colEnd - pdStr.length + 1;
            const prStart = step.colEnd - prStr.length + 1;
            const lineStart = Math.min(pdStart, prStart);
            return (
              <React.Fragment key={si}>
                <tr>
                  <td style={{ padding: 0 }} />
                  <WorkRow numStr={pdStr} colEnd={step.colEnd} si={si} type={0} />
                  {si === 0
                    ? Array.from({ length: quotientCols }, (_, qi) => (
                        <td key={qi} style={{ width: CW, padding: 2, ...(qi === 0 ? BSEP : {}) }} className="align-middle text-center">
                          {qi < quotientStr.length
                            ? <CorrectionInput
                                value={quotientInputs[qi] ?? ""}
                                onChange={v => onQuotientChange(qi, v.replace(/[^0-9]/g,"").slice(-1))}
                                correct={quotientStr[qi] ?? ""}
                                validated={validated}
                                width="w-8"
                              />
                            : emptyCell()
                          }
                        </td>
                      ))
                    : <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                  }
                </tr>
                <tr>
                  <td style={{ padding: 0, textAlign: "center", verticalAlign: "middle", fontSize: 14, color: "var(--color-text-secondary)" }}>−</td>
                  <WorkRow numStr={prStr} colEnd={step.colEnd} si={si} type={1} />
                  <td colSpan={quotientCols} style={{ padding: 0, ...BSEP }} />
                </tr>
                <tr>
                  <td style={{ padding: 0 }} />
                  {Array.from({ length: dividendCols }, (_, col) => (
                    <td key={col} style={{ padding: 0, width: CW }}>
                      {col >= lineStart && col <= step.colEnd
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

export function Exercise15({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => ({
    q1: makeDiv15Q(4, 1),
    q2: makeDiv15Q(4, 2),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [exerciseKey]);

  // Each question: quotient (4 cells), remainder (1), work flat (4 steps × 2 types × 4 cols = 32)
  const [q1Quot, setQ1Quot] = useState<string[]>(() => Array(4).fill(""));
  const [q1Rem, setQ1Rem] = useState("");
  const [q1Work, setQ1Work] = useState<string[]>(() => Array(32).fill(""));
  const [q2Quot, setQ2Quot] = useState<string[]>(() => Array(4).fill(""));
  const [q2Rem, setQ2Rem] = useState("");
  const [q2Work, setQ2Work] = useState<string[]>(() => Array(32).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const checkQ = (q: { quotient: number }, quot: string[]) => {
      const qStr = q.quotient.toString();
      return qStr.split("").every((ch, i) => (quot[i] ?? "") === ch);
    };
    if (checkQ(data.q1, q1Quot)) pts++;
    if (checkQ(data.q2, q2Quot)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const makeWorkChange = (setter: React.Dispatch<React.SetStateAction<string[]>>, dCols: number) =>
    (step: number, type: 0|1, col: number, val: string) => {
      const idx = step * 2 * dCols + type * dCols + col;
      setter(prev => { const n=[...prev]; n[idx]=val; return n; });
    };

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les divisions en colonnes.</p>
      <div className="space-y-3">
        {([
          { q: data.q1, quot: q1Quot, rem: q1Rem, work: q1Work, setQuot: setQ1Quot, setRem: setQ1Rem, setWork: setQ1Work },
          { q: data.q2, quot: q2Quot, rem: q2Rem, work: q2Work, setQuot: setQ2Quot, setRem: setQ2Rem, setWork: setQ2Work },
        ] as const).map(({ q, quot, rem, work, setQuot, setRem, setWork }, i) => (
          <div key={i} className="flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <PlacementDivCard
              {...q}
              quotientInputs={quot} remainderInput={rem} workFlat={work}
              onQuotientChange={(qi, v) => setQuot(p => { const n=[...p]; n[qi]=v; return n; })}
              onRemainderChange={setRem}
              onWorkChange={makeWorkChange(setWork, q.dividendCols)}
              validated={validated}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
