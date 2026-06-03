"use client";

import React, { useState, useMemo, useEffect } from "react";

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
  placeholder = "",
}: {
  value: string;
  onChange: (v: string) => void;
  correct: string;
  validated: boolean;
  width?: string;
  placeholder?: string;
}) {
  const isCorrect = validated && value.trim() === correct;
  const isWrong = validated && value.trim() !== correct;
  if (validated) {
    return (
      <span className={`inline-flex flex-col items-center justify-center ${width}`}>
        {isWrong && (
          <span className="text-[10px] font-medium line-through text-amber-500 leading-tight">{value || "—"}</span>
        )}
        <span
          className={`inline-flex items-center justify-center rounded border px-1 font-mono text-sm font-bold min-w-[2.5rem] ${
            isCorrect
              ? "border-green-300 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400"
              : "border-amber-300 bg-amber-50 text-[var(--color-text-primary)] dark:bg-amber-950/30"
          }`}
        >
          {correct}
        </span>
      </span>
    );
  }
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${width} rounded border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-1 py-0.5 text-center font-mono text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-alg)]`}
    />
  );
}

// ── Exercise 1 — Count shapes ─────────────────────────────────────────────────

type ShapeType = "circle" | "square" | "triangle" | "star";

function makeShapes(count: number, seed: number): Array<{ x: number; y: number; size: number; id: number }> {
  const positions: Array<{ x: number; y: number; size: number; id: number }> = [];
  const used: Array<{ x: number; y: number }> = [];
  let attempts = 0;
  while (positions.length < count && attempts < 1000) {
    attempts++;
    const x = 12 + Math.abs(Math.sin((seed + attempts) * 23.71 + positions.length * 11.3)) * 276;
    const y = 10 + Math.abs(Math.cos((seed + attempts) * 17.13 + positions.length * 7.9)) * 60;
    const tooClose = used.some(u => Math.hypot(u.x - x, u.y - y) < 22);
    if (!tooClose) {
      used.push({ x, y });
      const size = 6 + (seed + positions.length * 13 + attempts * 7) % 4;
      positions.push({ x, y, size, id: positions.length });
    }
  }
  return positions;
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
    <svg viewBox="0 0 300 80" className="h-20 w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]">
      {positions.map(p => (
        <ShapeSvg key={p.id} shape={shape} x={p.x} y={p.y} size={p.size} />
      ))}
    </svg>
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
      <p className="text-sm text-[var(--color-text-secondary)]">Compte le nombre de formes dans chaque cadre.</p>
      {[
        { count: data.count1, shape: data.shape1, seed: data.seed1, ans: ans1, setAns: setAns1 },
        { count: data.count2, shape: data.shape2, seed: data.seed2, ans: ans2, setAns: setAns2 },
      ].map((item, idx) => (
        <div key={idx} className="flex w-full items-center gap-3">
          <div className="flex-1">
            <ShapeFrame count={item.count} shape={item.shape} seed={item.seed} />
          </div>
          <CorrectionInput
            value={item.ans}
            onChange={item.setAns}
            correct={String(item.count)}
            validated={validated}
            width="w-14"
            placeholder="?"
          />
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
  validated,
  selected,
  onSelect,
}: {
  qNum: number;
  a: number;
  b: number;
  validated: boolean;
  selected: CompOp | null;
  onSelect: (op: CompOp) => void;
}) {
  const correct: CompOp = a < b ? "<" : a > b ? ">" : "=";
  const ops: CompOp[] = ["<", "=", ">"];
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{qNum}.</span>
      <span className="font-mono text-base text-[var(--color-text-primary)] w-10 text-right">{a}</span>
      <div className="flex gap-1">
        {ops.map((op) => {
          const isSelected = selected === op;
          const isCorrectOp = op === correct;
          let cls = "flex h-8 w-8 items-center justify-center rounded border font-mono text-sm font-bold transition-colors ";
          if (validated) {
            if (isCorrectOp) cls += "border-amber-400 bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400";
            else if (isSelected) cls += "border-amber-300 bg-amber-50 text-amber-500 dark:bg-amber-950/20";
            else cls += "border-[var(--color-border-default)] text-[var(--color-text-secondary)]";
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
    return Array.from({ length: 4 }, () => {
      const a = randInt(11, 99);
      let b = randInt(11, 99);
      while (b === a) b = randInt(11, 99);
      return { a, b };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<Array<CompOp | null>>([null, null, null, null]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const correct: CompOp = q.a < q.b ? "<" : ">";
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
    <div className="space-y-1">
      <span className="text-xs font-bold text-[var(--color-accent-alg)]">Séquence {qNum}</span>
      <div className="flex items-center gap-1 flex-wrap">
        {values.map((v, i) => {
          const blankIdx: 0 | 1 | -1 = blanks[0] === i ? 0 : blanks[1] === i ? 1 : -1;
          if (blankIdx === 0 || blankIdx === 1) {
            return (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-[var(--color-text-secondary)]">—</span>}
                <CorrectionInput
                  value={answers[blankIdx]}
                  onChange={(val) => onChange(blankIdx, val)}
                  correct={String(v)}
                  validated={validated}
                  width="w-14"
                />
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-[var(--color-text-secondary)]">—</span>}
              <span className="font-mono text-base font-semibold text-[var(--color-text-primary)]">{v}</span>
            </React.Fragment>
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
    // 2 additions
    for (let i = 0; i < 2; i++) {
      const a = randInt(11, 99);
      const b = randInt(11, 99);
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

  const [answers, setAnswers] = useState<string[]>(() => Array(8).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      if (answers[i]?.trim() === String(q.result)) pts++;
    });
    onValidated(pts, 8);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      {questions.map((q, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{i + 1}.</span>
          <span className="font-mono text-base text-[var(--color-text-primary)]">
            {q.a} {q.op} {q.b} =
          </span>
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

function renderMissingOp(q: MissingOpQuestion, ans: string, onChange: (v: string) => void, validated: boolean) {
  const inp = (
    <CorrectionInput
      value={ans}
      onChange={onChange}
      correct={String(q.missing)}
      validated={validated}
      width="w-14"
    />
  );
  let parts: React.ReactNode;
  if (q.format === "x_plus_blank_eq_y") parts = <>{q.x} + {inp} = {q.y}</>;
  else if (q.format === "x_minus_blank_eq_y") parts = <>{q.x} − {inp} = {q.y}</>;
  else if (q.format === "blank_plus_x_eq_y") parts = <>{inp} + {q.x} = {q.y}</>;
  else parts = <>{inp} − {q.x} = {q.y}</>;
  return <span className="flex items-center gap-1 font-mono text-base text-[var(--color-text-primary)]">{parts}</span>;
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
    <div className="space-y-3">
      <p className="text-sm text-[var(--color-text-secondary)]">Trouvez le nombre manquant.</p>
      {questions.map((q, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{i + 1}.</span>
          {renderMissingOp(
            q,
            answers[i] ?? "",
            (v) => setAnswers(prev => { const next = [...prev]; next[i] = v; return next; }),
            validated
          )}
        </div>
      ))}
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

function SimpleColumnGrid({ a, b, op, result, answer, onChange, validated }: {
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

export function Exercise6({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo((): ColArithQuestion[] => {
    const qs: ColArithQuestion[] = [];
    for (let i = 0; i < 2; i++) {
      const a = randInt(99, 999);
      const b = randInt(99, 999);
      qs.push({ a, b, op: "+", result: a + b });
    }
    for (let i = 0; i < 2; i++) {
      let a = randInt(99, 999);
      let b = randInt(99, 999);
      if (b > a) [a, b] = [b, a];
      while (a === b) a = randInt(99, 999);
      qs.push({ a, b, op: "-", result: a - b });
    }
    return qs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(4).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      if (answers[i]?.trim() === String(q.result)) pts++;
    });
    onValidated(pts, 4);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez en colonnes. Inscrivez le résultat.</p>
      <div className="flex flex-wrap gap-4">
        {questions.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <SimpleColumnGrid
              a={q.a} b={q.b} op={q.op} result={q.result}
              answer={answers[i] ?? ""}
              onChange={(v) => setAnswers(prev => { const next = [...prev]; next[i] = v; return next; })}
              validated={validated}
            />
          </div>
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
      const tens = Math.floor(n / 10);
      const units = n % 10;
      return { n, tens, units };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<Array<[string, string]>>(() => [["", ""], ["", ""]]);

  function isCorrectTens(q: { tens: number }, v: string): boolean {
    const trimmed = v.trim();
    return trimmed === String(q.tens) || trimmed === String(q.tens * 10);
  }

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const [t, u] = answers[i] ?? ["", ""];
      if (isCorrectTens(q, t ?? "") && (u ?? "").trim() === String(q.units)) pts++;
    });
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Décomposez chaque nombre en dizaines et unités.</p>
      {questions.map((q, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{i + 1}.</span>
          <span className="font-mono text-base font-semibold text-[var(--color-text-primary)]">{q.n} =</span>
          <CorrectionInput
            value={answers[i]?.[0] ?? ""}
            onChange={(v) => setAnswers(prev => { const next = prev.map(a => [...a] as [string, string]); next[i]![0] = v; return next; })}
            correct={String(q.tens)}
            validated={validated}
            width="w-14"
          />
          <span className="text-sm text-[var(--color-text-secondary)]">diz. +</span>
          <CorrectionInput
            value={answers[i]?.[1] ?? ""}
            onChange={(v) => setAnswers(prev => { const next = prev.map(a => [...a] as [string, string]); next[i]![1] = v; return next; })}
            correct={String(q.units)}
            validated={validated}
            width="w-14"
          />
          <span className="text-sm text-[var(--color-text-secondary)]">unit.</span>
        </div>
      ))}
    </div>
  );
}

// ── Exercise 9 — Compare integers 101–999 ────────────────────────────────────

export function Exercise9({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo(() => {
    return Array.from({ length: 4 }, () => {
      const a = randInt(101, 999);
      let b = randInt(101, 999);
      while (b === a) b = randInt(101, 999);
      return { a, b };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<Array<CompOp | null>>([null, null, null, null]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const correct: CompOp = q.a < q.b ? "<" : ">";
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
  const count = 6;
  const nonAdjacentPairs = [[0, 2], [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 5]];
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

  function renderSeq(values: number[], blanks: [number, number], ans: [string, string], setAns: (a: [string, string]) => void, label: string) {
    return (
      <div className="space-y-1">
        <span className="text-xs font-bold text-[var(--color-accent-alg)]">{label}</span>
        <div className="flex items-center gap-1 flex-wrap">
          {values.map((v, i) => {
            const blankIdx: 0 | 1 | -1 = blanks[0] === i ? 0 : blanks[1] === i ? 1 : -1;
            if (blankIdx === 0 || blankIdx === 1) {
              return (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-[var(--color-text-secondary)]">—</span>}
                  <CorrectionInput
                    value={ans[blankIdx]}
                    onChange={(val) => {
                      const next: [string, string] = [ans[0], ans[1]];
                      next[blankIdx] = val;
                      setAns(next);
                    }}
                    correct={String(v)}
                    validated={validated}
                    width="w-16"
                  />
                </React.Fragment>
              );
            }
            return (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-[var(--color-text-secondary)]">—</span>}
                <span className="font-mono text-base font-semibold text-[var(--color-text-primary)]">{v}</span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez les suites numériques.</p>
      {renderSeq(data.seq1.values, data.seq1.blanks, ans1, setAns1, "Séquence 1")}
      {renderSeq(data.seq2.values, data.seq2.blanks, ans2, setAns2, "Séquence 2")}
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
    const qs: MixedQuestion[] = [];
    // 2 missing operand: one add, one sub
    const formats: MissingFormat[] = shuffle(["x_plus_blank_eq_y", "x_minus_blank_eq_y", "blank_plus_x_eq_y", "blank_minus_x_eq_y"]).slice(0, 2) as MissingFormat[];
    for (const format of formats) {
      let a: number, b: number, result: number;
      if (format === "x_plus_blank_eq_y") {
        a = randInt(75, 450);
        b = randInt(75, 500 - a);
        result = a + b;
      } else if (format === "x_minus_blank_eq_y") {
        b = randInt(75, 425);
        result = randInt(75, 500 - b);
        a = b + result;
      } else if (format === "blank_plus_x_eq_y") {
        b = randInt(75, 425);
        a = randInt(75, 500 - b);
        result = a + b;
      } else {
        b = randInt(75, 425);
        result = randInt(75, 500 - b);
        a = result + b;
      }
      qs.push({ kind: "missing", format, a, b, result });
    }
    // 2 multiplications
    for (let i = 0; i < 2; i++) {
      const a = randInt(3, 12);
      const b = randInt(3, 12);
      qs.push({ kind: "mul", a, b, result: a * b });
    }
    // 2 divisions from multiplication tables
    for (let i = 0; i < 2; i++) {
      const b = randInt(2, 12);
      const result = randInt(2, 12);
      const a = b * result;
      qs.push({ kind: "div", a, b, result });
    }
    return shuffle(qs);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(6).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      const expected = q.kind === "missing" ? q.b : q.result;
      if (answers[i]?.trim() === String(expected)) pts++;
    });
    onValidated(pts, 6);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  function renderQ(q: MixedQuestion, i: number) {
    const ans = answers[i] ?? "";
    const onChange = (v: string) => setAnswers(prev => { const next = [...prev]; next[i] = v; return next; });
    if (q.kind === "mul") {
      return (
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{i + 1}.</span>
          <span className="font-mono text-base text-[var(--color-text-primary)]">{q.a} × {q.b} =</span>
          <CorrectionInput value={ans} onChange={onChange} correct={String(q.result)} validated={validated} width="w-14" />
        </div>
      );
    }
    if (q.kind === "div") {
      return (
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{i + 1}.</span>
          <span className="font-mono text-base text-[var(--color-text-primary)]">{q.a} ÷ {q.b} =</span>
          <CorrectionInput value={ans} onChange={onChange} correct={String(q.result)} validated={validated} width="w-14" />
        </div>
      );
    }
    // missing operand
    const inp = <CorrectionInput value={ans} onChange={onChange} correct={String(q.b)} validated={validated} width="w-16" />;
    const { format, a, result } = q;
    let parts: React.ReactNode;
    if (format === "x_plus_blank_eq_y") parts = <>{a} + {inp} = {result}</>;
    else if (format === "x_minus_blank_eq_y") parts = <>{a} − {inp} = {result}</>;
    else if (format === "blank_plus_x_eq_y") parts = <>{inp} + {a} = {result}</>;
    else parts = <>{inp} − {a} = {result}</>;
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">{i + 1}.</span>
        <span className="flex items-center gap-1 font-mono text-base text-[var(--color-text-primary)]">{parts}</span>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {questions.map((q, i) => (
        <div key={i}>{renderQ(q, i)}</div>
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

  const [ans3, setAns3] = useState<[string, string, string]>(["", "", ""]);
  const [ans4, setAns4] = useState<[string, string, string, string]>(["", "", "", ""]);

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
    // Q1: 3-digit — accept leading digit OR full positional value
    const [a3, b3, c3] = ans3;
    const ok3a = (a3 ?? "").trim() === String(h3) || (a3 ?? "").trim() === String(h3 * 100);
    const ok3b = (b3 ?? "").trim() === String(t3) || (b3 ?? "").trim() === String(t3 * 10);
    const ok3c = (c3 ?? "").trim() === String(u3);
    if (ok3a && ok3b && ok3c) pts++;
    // Q2: 4-digit
    const [a4, b4, c4, d4] = ans4;
    const ok4a = (a4 ?? "").trim() === String(k4) || (a4 ?? "").trim() === String(k4 * 1000);
    const ok4b = (b4 ?? "").trim() === String(h4) || (b4 ?? "").trim() === String(h4 * 100);
    const ok4c = (c4 ?? "").trim() === String(t4) || (c4 ?? "").trim() === String(t4 * 10);
    const ok4d = (d4 ?? "").trim() === String(u4);
    if (ok4a && ok4b && ok4c && ok4d) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Décomposez chaque nombre.</p>
      {/* Q1 */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">1.</span>
        <span className="font-mono text-base font-semibold text-[var(--color-text-primary)]">{data.n3} =</span>
        <CorrectionInput value={ans3[0]} onChange={(v) => setAns3(p => [v, p[1], p[2]])} correct={String(h3)} validated={validated} width="w-14" />
        <span className="text-sm text-[var(--color-text-secondary)]">+</span>
        <CorrectionInput value={ans3[1]} onChange={(v) => setAns3(p => [p[0], v, p[2]])} correct={String(t3)} validated={validated} width="w-14" />
        <span className="text-sm text-[var(--color-text-secondary)]">+</span>
        <CorrectionInput value={ans3[2]} onChange={(v) => setAns3(p => [p[0], p[1], v])} correct={String(u3)} validated={validated} width="w-14" />
      </div>
      {/* Q2 */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold text-[var(--color-accent-alg)] w-4">2.</span>
        <span className="font-mono text-base font-semibold text-[var(--color-text-primary)]">{data.n4} =</span>
        <CorrectionInput value={ans4[0]} onChange={(v) => setAns4(p => [v, p[1], p[2], p[3]])} correct={String(k4)} validated={validated} width="w-14" />
        <span className="text-sm text-[var(--color-text-secondary)]">+</span>
        <CorrectionInput value={ans4[1]} onChange={(v) => setAns4(p => [p[0], v, p[2], p[3]])} correct={String(h4)} validated={validated} width="w-14" />
        <span className="text-sm text-[var(--color-text-secondary)]">+</span>
        <CorrectionInput value={ans4[2]} onChange={(v) => setAns4(p => [p[0], p[1], v, p[3]])} correct={String(t4)} validated={validated} width="w-14" />
        <span className="text-sm text-[var(--color-text-secondary)]">+</span>
        <CorrectionInput value={ans4[3]} onChange={(v) => setAns4(p => [p[0], p[1], p[2], v])} correct={String(u4)} validated={validated} width="w-14" />
      </div>
    </div>
  );
}

// ── Exercise 13 — Column arithmetic 1000–9999 ────────────────────────────────

export function Exercise13({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const questions = useMemo((): ColArithQuestion[] => {
    const qs: ColArithQuestion[] = [];
    for (let i = 0; i < 2; i++) {
      const a = randInt(1000, 9999);
      const b = randInt(1000, 9999);
      qs.push({ a, b, op: "+", result: a + b });
    }
    for (let i = 0; i < 2; i++) {
      let a = randInt(1000, 9999);
      let b = randInt(1000, 9999);
      if (b > a) [a, b] = [b, a];
      while (a === b) a = randInt(1000, 9999);
      qs.push({ a, b, op: "-", result: a - b });
    }
    return qs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [answers, setAnswers] = useState<string[]>(() => Array(4).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    questions.forEach((q, i) => {
      if (answers[i]?.trim() === String(q.result)) pts++;
    });
    onValidated(pts, 4);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Calculez en colonnes. Inscrivez le résultat.</p>
      <div className="flex flex-wrap gap-4">
        {questions.map((q, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[var(--color-accent-alg)]">{i + 1}.</span>
            <SimpleColumnGrid
              a={q.a} b={q.b} op={q.op} result={q.result}
              answer={answers[i] ?? ""}
              onChange={(v) => setAnswers(prev => { const next = [...prev]; next[i] = v; return next; })}
              validated={validated}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Exercise 14 — Column multiplication ──────────────────────────────────────

export function Exercise14({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const a1 = randInt(111, 999);
    const b1 = randInt(2, 9);
    const a2 = randInt(111, 999);
    let b2 = randInt(11, 99);
    while (b2 % 10 === 0) b2 = randInt(11, 99);
    return { a1, b1, r1: a1 * b1, a2, b2, r2: a2 * b2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (ans1.trim() === String(data.r1)) pts++;
    if (ans2.trim() === String(data.r2)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Posez et effectuez les multiplications. Inscrivez le résultat final.</p>
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
          <SimpleColumnGrid
            a={data.a1} b={data.b1} op="×" result={data.r1}
            answer={ans1} onChange={setAns1} validated={validated}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
          <SimpleColumnGrid
            a={data.a2} b={data.b2} op="×" result={data.r2}
            answer={ans2} onChange={setAns2} validated={validated}
          />
        </div>
      </div>
    </div>
  );
}

// ── Exercise 15 — Column division ─────────────────────────────────────────────

function makeExactDiv(minDividend: number, maxDividend: number, minDivisor: number, maxDivisor: number): { dividend: number; divisor: number; quotient: number } {
  let divisor = randInt(minDivisor, maxDivisor);
  const minQ = Math.ceil(minDividend / divisor);
  const maxQ = Math.floor(maxDividend / divisor);
  if (maxQ < minQ) {
    // retry
    divisor = Math.max(minDivisor, Math.floor(maxDividend / 10));
    const q = randInt(Math.ceil(minDividend / divisor), Math.floor(maxDividend / divisor));
    return { dividend: divisor * q, divisor, quotient: q };
  }
  const quotient = randInt(minQ, maxQ);
  return { dividend: divisor * quotient, divisor, quotient };
}

export function Exercise15({ exerciseKey, validated, onValidated, validateTrigger }: PlacementExerciseProps) {
  const data = useMemo(() => {
    const d1 = makeExactDiv(111, 999, 2, 9);
    let d2 = makeExactDiv(1111, 9999, 11, 19);
    // ensure divisor doesn't end in 0
    let attempts = 0;
    while (d2.divisor % 10 === 0 && attempts < 20) {
      d2 = makeExactDiv(1111, 9999, 11, 19);
      attempts++;
    }
    return { d1, d2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey]);

  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (ans1.trim() === String(data.d1.quotient)) pts++;
    if (ans2.trim() === String(data.d2.quotient)) pts++;
    onValidated(pts, 2);
  }, [validateTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  function DivDisplay({ dividend, divisor, quotient, ans, onChange }: {
    dividend: number; divisor: number; quotient: number; ans: string; onChange: (v: string) => void;
  }) {
    return (
      <div className="inline-flex flex-col items-end font-mono text-base border border-[var(--color-border-default)] rounded-lg px-3 py-2 bg-[var(--color-bg-secondary)] gap-1">
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-text-primary)]">{dividend}</span>
          <span className="text-[var(--color-text-secondary)]">÷</span>
          <span className="text-[var(--color-text-primary)]">{divisor}</span>
          <span className="text-[var(--color-text-secondary)]">=</span>
          <CorrectionInput value={ans} onChange={onChange} correct={String(quotient)} validated={validated} width="w-16" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les divisions. Inscrivez le quotient (résultat exact).</p>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">1.</span>
          <DivDisplay {...data.d1} ans={ans1} onChange={setAns1} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-bold text-[var(--color-accent-alg)]">2.</span>
          <DivDisplay {...data.d2} ans={ans2} onChange={setAns2} />
        </div>
      </div>
    </div>
  );
}
