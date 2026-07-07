"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CARTESIAN_PLACE_POOLS,
  LINE_SCENARIOS,
  POLYGON_HALF_TEMPLATES,
  POLYGON_INT_TEMPLATES,
  QUADRANT_READ_POOLS,
  VERTEX_PUZZLES,
  type LabeledPoint,
  type LineScenarioQuestion,
  type SegmentLine,
} from "@/lib/curriculum/content/math/g6-plan-data";

const MATH_TEXT_INPUT_BASE =
  "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 " +
  "text-center font-mono outline-none transition-colors focus:border-[var(--color-accent-alg)] disabled:opacity-70";

const CLS_WRONG = "rounded-none border-0 border-b-2 border-amber-500";

type ExProps = {
  exNum: number;
  validateCommand: number;
  onValidated: (score: number, max: number) => void;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function pick1<T>(arr: T[]): T {
  return shuffle(arr)[0]!;
}

function parseXY(raw: string): [number, number] | null {
  const s = raw.trim().replace(/\s+/g, "").replace(/[()]/g, "");
  const parts = s.split(/[;,]/).filter(Boolean);
  if (parts.length !== 2) return null;
  const x = parseFloat(parts[0]!.replace(",", "."));
  const y = parseFloat(parts[1]!.replace(",", "."));
  if (Number.isNaN(x) || Number.isNaN(y)) return null;
  return [x, y];
}

function coordsMatch(got: [number, number] | null, exp: [number, number], tol = 0): boolean {
  if (!got) return false;
  return Math.abs(got[0] - exp[0]) <= tol && Math.abs(got[1] - exp[1]) <= tol;
}

function formatXY(x: number, y: number): string {
  const fx = Number.isInteger(x) ? String(x) : String(x).replace(".", ",");
  const fy = Number.isInteger(y) ? String(y) : String(y).replace(".", ",");
  return `(${fx} ; ${fy})`;
}

function toSvg(x: number, y: number, cx: number, cy: number, unit: number): [number, number] {
  return [cx + x * unit, cy - y * unit];
}

function CartesianPlane({
  xMin,
  xMax,
  yMin,
  yMax,
  unit = 14,
  lines,
  polygon,
  points,
  placedPoints,
  onClick,
  gridStep = 1,
}: {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  unit?: number;
  lines?: SegmentLine[];
  polygon?: LabeledPoint[];
  points?: LabeledPoint[];
  placedPoints?: LabeledPoint[];
  onClick?: (x: number, y: number) => void;
  gridStep?: number;
}) {
  const pad = 28;
  const w = pad * 2 + (xMax - xMin) * unit;
  const h = pad * 2 + (yMax - yMin) * unit;
  const cx = pad - xMin * unit;
  const cy = h - pad + yMin * unit;

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!onClick) return;
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const loc = pt.matrixTransform(ctm.inverse());
    const gx = Math.round((loc.x - cx) / unit);
    const gy = Math.round((cy - loc.y) / unit);
    if (gx >= xMin && gx <= xMax && gy >= yMin && gy <= yMax) onClick(gx, gy);
  };

  return (
    <svg viewBox={`0 0 ${w} ${h}`}
      className={`mx-auto w-full max-w-2xl rounded-lg border border-[var(--color-border-default)] bg-white ${onClick ? "cursor-crosshair" : ""}`}
      onClick={handleClick}
    >
      {Array.from({ length: Math.floor((xMax - xMin) / gridStep) + 1 }, (_, i) => xMin + i * gridStep).map((x) => (
        <line key={`gx-${x}`}
          x1={cx + x * unit} y1={pad - 4}
          x2={cx + x * unit} y2={h - pad + 4}
          stroke={x === 0 ? "none" : "#e2e8f0"} strokeWidth="0.6" />
      ))}
      {Array.from({ length: Math.floor((yMax - yMin) / gridStep) + 1 }, (_, i) => yMin + i * gridStep).map((y) => (
        <line key={`gy-${y}`}
          x1={pad - 4} y1={cy - y * unit}
          x2={w - pad + 4} y2={cy - y * unit}
          stroke={y === 0 ? "none" : "#e2e8f0"} strokeWidth="0.6" />
      ))}
      <line x1={pad - 4} y1={cy} x2={w - pad + 4} y2={cy} stroke="#334155" strokeWidth="2" />
      <line x1={cx} y1={pad - 4} x2={cx} y2={h - pad + 4} stroke="#334155" strokeWidth="2" />
      {Array.from({ length: Math.floor((xMax - xMin) / gridStep) + 1 }, (_, i) => xMin + i * gridStep)
        .filter((x) => x !== 0 && Math.abs(x) <= 12)
        .map((x) => (
          <text key={`tx-${x}`} x={cx + x * unit} y={cy + 16} textAnchor="middle" fontSize="8" fill="#64748b">{x}</text>
        ))}
      {Array.from({ length: Math.floor((yMax - yMin) / gridStep) + 1 }, (_, i) => yMin + i * gridStep)
        .filter((y) => y !== 0 && Math.abs(y) <= 12)
        .map((y) => (
          <text key={`ty-${y}`} x={cx - 10} y={cy - y * unit + 3} textAnchor="middle" fontSize="8" fill="#64748b">{y}</text>
        ))}
      <text x={w - pad + 2} y={cy + 4} fontSize="10" fontWeight="bold" fill="#334155">x</text>
      <text x={cx + 4} y={pad - 6} fontSize="10" fontWeight="bold" fill="#334155">y</text>

      {lines?.map((ln) => {
        const [x1, y1] = toSvg(ln.x1, ln.y1, cx, cy, unit);
        const [x2, y2] = toSvg(ln.x2, ln.y2, cx, cy, unit);
        return <line key={ln.id} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ln.color} strokeWidth="2.5" />;
      })}

      {polygon && polygon.length > 1 && (
        <polygon
          points={polygon.map((p) => toSvg(p.x, p.y, cx, cy, unit).join(",")).join(" ")}
          fill="none" stroke="#3b82f6" strokeWidth="2" />
      )}

      {(points ?? []).map((p) => {
        const [px, py] = toSvg(p.x, p.y, cx, cy, unit);
        return (
          <g key={p.label}>
            <circle cx={px} cy={py} r="4" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
            <text x={px + 6} y={py - 4} fontSize="10" fontWeight="bold" fill="#1e40af">{p.label}</text>
          </g>
        );
      })}

      {(placedPoints ?? []).map((p) => {
        const [px, py] = toSvg(p.x, p.y, cx, cy, unit);
        return (
          <g key={`pl-${p.label}`}>
            <circle cx={px} cy={py} r="4.5" fill="#dc2626" stroke="#fff" strokeWidth="1.2" />
            <text x={px + 6} y={py + 3} fontSize="9" fontWeight="bold" fill="#dc2626">{p.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function CoordInputs({
  points,
  answers,
  validated,
  results,
  onChange,
  allowDecimal,
}: {
  points: LabeledPoint[];
  answers: Record<string, { x: string; y: string }>;
  validated: boolean;
  results: boolean[];
  onChange: (label: string, field: "x" | "y", val: string) => void;
  allowDecimal?: boolean;
}) {
  const filter = allowDecimal ? /[^0-9,.\-]/g : /[^0-9\-]/g;
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {points.map((pt, i) => {
        const a = answers[pt.label] ?? { x: "", y: "" };
        const wrong = validated && !results[i];
        return (
          <div key={pt.label} className="flex flex-wrap items-center gap-1.5 text-sm">
            <span className="w-6 font-bold text-[var(--color-accent-alg)]">{pt.label}</span>
            <span>(</span>
            {wrong ? (
              <>
                <div className={`w-12 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{a.x || "—"}</span>
                  <span className="text-xs font-bold text-amber-600">{pt.x}</span>
                </div>
                <span>;</span>
                <div className={`w-12 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{a.y || "—"}</span>
                  <span className="text-xs font-bold text-amber-600">{pt.y}</span>
                </div>
              </>
            ) : (
              <>
                <input type="text" inputMode="decimal" value={a.x} disabled={validated}
                  onChange={(e) => onChange(pt.label, "x", e.target.value.replace(filter, ""))}
                  className={`w-12 px-0 pb-1 text-sm text-center ${MATH_TEXT_INPUT_BASE}`} />
                <span>;</span>
                <input type="text" inputMode="decimal" value={a.y} disabled={validated}
                  onChange={(e) => onChange(pt.label, "y", e.target.value.replace(filter, ""))}
                  className={`w-12 px-0 pb-1 text-sm text-center ${MATH_TEXT_INPUT_BASE}`} />
              </>
            )}
            <span>)</span>
          </div>
        );
      })}
    </div>
  );
}

function useValidateTrigger(validateCommand: number, doValidate: () => void) {
  const prev = useRef(-1);
  useEffect(() => {
    if (validateCommand > 0 && validateCommand !== prev.current) {
      prev.current = validateCommand;
      doValidate();
    }
  }, [validateCommand, doValidate]);
}

// ── Ex 8 : pentagone coordonnées entières ───────────────────────────────────

export function G6PolygonIntExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [points] = useState(() => pick1(POLYGON_INT_TEMPLATES));
  const [answers, setAnswers] = useState<Record<string, { x: string; y: string }>>(() =>
    Object.fromEntries(points.map((p) => [p.label, { x: "", y: "" }])),
  );
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const bounds = { xMin: -12, xMax: 12, yMin: -12, yMax: 12 };

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = points.map((pt) => {
      const a = answers[pt.label] ?? { x: "", y: "" };
      const x = parseInt(a.x, 10);
      const y = parseInt(a.y, 10);
      return x === pt.x && y === pt.y;
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, points, answers, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Écrivez les coordonnées des points du pentagone.</p>
      <CartesianPlane {...bounds} polygon={points} points={points} />
      <CoordInputs points={points} answers={answers} validated={validated} results={results}
        onChange={(label, field, val) => setAnswers((p) => ({ ...p, [label]: { ...p[label]!, [field]: val } }))} />
    </div>
  );
}

// ── Ex 9 : pentagone demi-unités ────────────────────────────────────────────

export function G6PolygonHalfExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [points] = useState(() => pick1(POLYGON_HALF_TEMPLATES));
  const [answers, setAnswers] = useState<Record<string, { x: string; y: string }>>(() =>
    Object.fromEntries(points.map((p) => [p.label, { x: "", y: "" }])),
  );
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = points.map((pt) => {
      const a = answers[pt.label] ?? { x: "", y: "" };
      const x = parseFloat(a.x.replace(",", "."));
      const y = parseFloat(a.y.replace(",", "."));
      return Math.abs(x - pt.x) < 0.01 && Math.abs(y - pt.y) < 0.01;
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, points, answers, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Graduez les axes de 1 en 1 et écrivez les coordonnées des points.</p>
      <CartesianPlane xMin={-8} xMax={8} yMin={-6} yMax={8} gridStep={1} polygon={points} points={points} />
      <CoordInputs points={points} answers={answers} validated={validated} results={results} allowDecimal
        onChange={(label, field, val) => setAnswers((p) => ({ ...p, [label]: { ...p[label]!, [field]: val } }))} />
    </div>
  );
}

// ── Ex 10 : intersections de droites ────────────────────────────────────────

function LineQuestionBlock({
  q,
  i,
  answer,
  validated,
  wrong,
  onChange,
}: {
  q: LineScenarioQuestion;
  i: number;
  answer: string;
  validated: boolean;
  wrong: boolean;
  onChange: (v: string) => void;
}) {
  if (q.type === "bool") {
    return (
      <div className="space-y-2 rounded-lg border border-[var(--color-border-default)] p-3">
        <p className="text-sm">{i + 1}. {q.prompt}</p>
        <div className="flex gap-4">
          {(["Oui", "Non"] as const).map((opt) => {
            const sel = answer === opt;
            const showWrong = validated && sel && ((opt === "Oui") !== q.answer);
            const showRight = validated && ((opt === "Oui") === q.answer);
            return (
              <label key={opt} className={`flex items-center gap-2 text-sm ${showWrong ? "text-amber-600" : showRight ? "font-semibold text-green-700" : ""}`}>
                <input type="radio" name={`lq-${i}`} disabled={validated} checked={sel}
                  onChange={() => onChange(opt)} />
                {opt}
              </label>
            );
          })}
        </div>
      </div>
    );
  }
  const correct = formatXY(q.answer[0], q.answer[1]);
  return (
    <div className="space-y-2 rounded-lg border border-[var(--color-border-default)] p-3">
      <p className="text-sm">{i + 1}. {q.prompt}</p>
      {wrong ? (
        <div className={`w-32 px-0 pb-1 ${CLS_WRONG} flex flex-col`}>
          <span className="text-[10px] text-[var(--color-text-secondary)]">{answer || "—"}</span>
          <span className="text-xs font-bold text-amber-600">{correct}</span>
        </div>
      ) : (
        <input type="text" inputMode="decimal" value={answer} disabled={validated}
          onChange={(e) => onChange(e.target.value)}
          placeholder="(x ; y)"
          className={`w-32 px-0 pb-1 text-sm ${MATH_TEXT_INPUT_BASE}`} />
      )}
    </div>
  );
}

export function G6LineIntersectExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [scenario] = useState(() => pick1(LINE_SCENARIOS));
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = scenario.questions.map((q, i) => {
      const raw = answers[i] ?? "";
      if (q.type === "bool") {
        const n = raw.trim().toLowerCase();
        return (q.answer && n === "oui") || (!q.answer && n === "non");
      }
      const tol = q.tolerance ?? 0;
      return coordsMatch(parseXY(raw), q.answer, tol);
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, scenario, answers, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Graduez les axes de 1 en 1 et répondez aux questions sur les droites.</p>
      <CartesianPlane
        xMin={scenario.xMin} xMax={scenario.xMax}
        yMin={scenario.yMin} yMax={scenario.yMax}
        lines={scenario.lines}
      />
      <div className="space-y-3">
        {scenario.questions.map((q, i) => (
          <LineQuestionBlock key={i} q={q} i={i}
            answer={answers[i] ?? ""}
            validated={validated}
            wrong={validated && !results[i]}
            onChange={(v) => setAnswers((p) => ({ ...p, [i]: v }))} />
        ))}
      </div>
    </div>
  );
}

// ── Ex 11 : placer des points ─────────────────────────────────────────────────

export function G6CartesianPlaceExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [targets] = useState(() => pick1(CARTESIAN_PLACE_POOLS));
  const [selected, setSelected] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, { x: number; y: number } | null>>(() =>
    Object.fromEntries(targets.map((p) => [p.label, null])),
  );
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const xMin = Math.min(-10, ...targets.map((p) => p.x)) - 1;
  const xMax = Math.max(10, ...targets.map((p) => p.x)) + 1;
  const yMin = Math.min(-10, ...targets.map((p) => p.y)) - 1;
  const yMax = Math.max(10, ...targets.map((p) => p.y)) + 1;

  const onMapClick = (gx: number, gy: number) => {
    if (validated || !selected) return;
    setPlacements((p) => {
      const next = { ...p };
      for (const k of Object.keys(next)) {
        if (next[k]?.x === gx && next[k]?.y === gy) next[k] = null;
      }
      next[selected] = { x: gx, y: gy };
      return next;
    });
    setSelected(null);
  };

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = targets.map((pt) => {
      const p = placements[pt.label];
      return p !== null && p.x === pt.x && p.y === pt.y;
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, targets, placements, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  const placed = targets
    .filter((t) => placements[t.label])
    .map((t) => ({ label: t.label, x: placements[t.label]!.x, y: placements[t.label]!.y }));

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Graduez les axes de 1 en 1 et placez les points sur le plan.</p>
      <CartesianPlane xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} placedPoints={placed} onClick={onMapClick} />
      <div className="space-y-2">
        {targets.map((pt, i) => {
          const isSel = selected === pt.label;
          const ok = validated ? results[i] : null;
          return (
            <button key={pt.label} type="button" disabled={validated}
              onClick={() => setSelected(pt.label)}
              className={`mr-2 rounded-lg border px-2 py-1 text-xs ${
                isSel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10" :
                ok === false ? "border-amber-400" : "border-[var(--color-border-default)]"
              }`}
            >
              {pt.label} est en {formatXY(pt.x, pt.y)}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-[var(--color-text-secondary)]">Cliquez sur un point, puis sur le repère.</p>
    </div>
  );
}

// ── Ex 12 : trouver un sommet manquant ────────────────────────────────────────

export function G6FindVertexExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [puzzle] = useState(() => pick1(VERTEX_PUZZLES));
  const [answer, setAnswer] = useState({ x: "", y: "" });
  const [validated, setValidated] = useState(false);
  const [ok, setOk] = useState(false);

  const allPoints = [...puzzle.points];
  const xMin = Math.min(-15, ...allPoints.map((p) => p.x)) - 1;
  const xMax = Math.max(10, ...allPoints.map((p) => p.x)) + 1;
  const yMin = Math.min(-10, ...allPoints.map((p) => p.y)) - 1;
  const yMax = Math.max(12, ...allPoints.map((p) => p.y)) + 1;

  const doValidate = useCallback(() => {
    if (validated) return;
    const x = parseFloat(answer.x.replace(",", "."));
    const y = parseFloat(answer.y.replace(",", "."));
    const res = Math.abs(x - puzzle.answer.x) < 0.01 && Math.abs(y - puzzle.answer.y) < 0.01;
    setOk(res);
    setValidated(true);
    onValidated(res ? 1 : 0, 1);
  }, [validated, answer, puzzle, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{puzzle.prompt}</p>
      <CartesianPlane xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax}
        polygon={puzzle.points} points={puzzle.points} />
      <div className="flex items-center gap-2 text-sm">
        <span className="font-bold text-[var(--color-accent-alg)]">{puzzle.missing}</span>
        <span>:</span>
        <span>(</span>
        {validated && !ok ? (
          <>
            <div className={`w-14 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{answer.x || "—"}</span>
              <span className="text-xs font-bold text-amber-600">{puzzle.answer.x}</span>
            </div>
            <span>;</span>
            <div className={`w-14 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{answer.y || "—"}</span>
              <span className="text-xs font-bold text-amber-600">{puzzle.answer.y}</span>
            </div>
          </>
        ) : (
          <>
            <input type="text" inputMode="decimal" value={answer.x} disabled={validated}
              onChange={(e) => setAnswer((a) => ({ ...a, x: e.target.value.replace(/[^0-9,.\-]/g, "") }))}
              className={`w-14 px-0 pb-1 text-sm text-center ${MATH_TEXT_INPUT_BASE}`} />
            <span>;</span>
            <input type="text" inputMode="decimal" value={answer.y} disabled={validated}
              onChange={(e) => setAnswer((a) => ({ ...a, y: e.target.value.replace(/[^0-9,.\-]/g, "") }))}
              className={`w-14 px-0 pb-1 text-sm text-center ${MATH_TEXT_INPUT_BASE}`} />
          </>
        )}
        <span>)</span>
      </div>
    </div>
  );
}

// ── Ex 13 : lire des points sur 4 quadrants ─────────────────────────────────

export function G6QuadrantReadExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [points] = useState(() => pick1(QUADRANT_READ_POOLS));
  const [answers, setAnswers] = useState<Record<string, { x: string; y: string }>>(() =>
    Object.fromEntries(points.map((p) => [p.label, { x: "", y: "" }])),
  );
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = points.map((pt) => {
      const a = answers[pt.label] ?? { x: "", y: "" };
      const x = parseFloat(a.x.replace(",", "."));
      const y = parseFloat(a.y.replace(",", "."));
      return Math.abs(x - pt.x) < 0.01 && Math.abs(y - pt.y) < 0.01;
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, points, answers, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Graduez les axes de 1 en 1 et écrivez les coordonnées des points.</p>
      <CartesianPlane xMin={-12} xMax={12} yMin={-12} yMax={12} points={points} />
      <CoordInputs points={points} answers={answers} validated={validated} results={results} allowDecimal
        onChange={(label, field, val) => setAnswers((p) => ({ ...p, [label]: { ...p[label]!, [field]: val } }))} />
    </div>
  );
}
