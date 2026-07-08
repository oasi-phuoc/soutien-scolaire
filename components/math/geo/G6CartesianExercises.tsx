"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CARTESIAN_PLACE_POOLS,
  LINE_SCENARIOS,
  POLYGON_HALF_TEMPLATES,
  POLYGON_INT_TEMPLATES,
  QUADRANT_READ_POOLS,
  PERP_PARALLEL_SCENARIOS,
  VERTEX_PUZZLES,
  vertexExercisePrompt,
  isValidPerpParallelD,
  isValidPerpParallelE,
  isValidVertexPlacement,
  inCartesianGrid,
  type LabeledPoint,
  type LineScenarioQuestion,
  type SegmentLine,
} from "@/lib/curriculum/content/math/g6-plan-data";

const MATH_TEXT_INPUT_BASE =
  "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 " +
  "text-center font-mono outline-none transition-colors focus:border-[var(--color-accent-alg)] disabled:opacity-70";

const CLS_WRONG = "rounded-none border-0 border-b-2 border-amber-500";
const COORD_CELL_CLS = `h-8 w-10 px-0 text-sm text-center ${MATH_TEXT_INPUT_BASE}`;
const PLACE_CELL_FILL = "color-mix(in srgb, var(--color-accent-alg) 22%, white)";
const PLACE_POINT_FILL = "var(--color-accent-alg)";
const PLACE_CORRECTION_FILL = "#d97706";
const PLACE_PREVIEW_LINE = "#93c5fd";

type ExProps = {
  exNum: number;
  validateCommand: number;
  onValidated: (score: number, max: number) => void;
  consigne?: string;
  consigneLang?: string;
  consigneDir?: "ltr" | "rtl";
};

function G6Consigne({ consigne, consigneLang, consigneDir, fallback }: {
  consigne?: string;
  consigneLang?: string;
  consigneDir?: "ltr" | "rtl";
  fallback: string;
}) {
  return (
    <p className="text-sm text-[var(--color-text-secondary)]" lang={consigneLang} dir={consigneDir ?? "ltr"}>
      {consigne ?? fallback}
    </p>
  );
}

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

function formatXY(x: number, y: number): string {
  const fx = Number.isInteger(x) ? String(x) : String(x).replace(".", ",");
  const fy = Number.isInteger(y) ? String(y) : String(y).replace(".", ",");
  return `(${fx} ; ${fy})`;
}

function toSvg(x: number, y: number, cx: number, cy: number, unit: number): [number, number] {
  return [cx + x * unit, cy - y * unit];
}

function clipLineToRect(
  ax: number, ay: number, bx: number, by: number,
  xMin: number, xMax: number, yMin: number, yMax: number,
): [number, number, number, number] | null {
  const dx = bx - ax;
  const dy = by - ay;
  if (Math.abs(dx) < 1e-9 && Math.abs(dy) < 1e-9) return null;
  const pts: [number, number][] = [];
  const add = (x: number, y: number) => {
    if (x >= xMin - 1e-6 && x <= xMax + 1e-6 && y >= yMin - 1e-6 && y <= yMax + 1e-6) {
      const k = `${Math.round(x * 1000)}:${Math.round(y * 1000)}`;
      if (!pts.some(([px, py]) => `${Math.round(px * 1000)}:${Math.round(py * 1000)}` === k)) pts.push([x, y]);
    }
  };
  if (Math.abs(dx) < 1e-9) {
    if (ax >= xMin && ax <= xMax) return [ax, yMin, ax, yMax];
    return null;
  }
  if (Math.abs(dy) < 1e-9) {
    if (ay >= yMin && ay <= yMax || by >= yMin && by <= yMax) return [xMin, ay, xMax, ay];
    return null;
  }
  for (const x of [xMin, xMax]) {
    const t = (x - ax) / dx;
    add(x, ay + t * dy);
  }
  for (const y of [yMin, yMax]) {
    const t = (y - ay) / dy;
    add(ax + t * dx, y);
  }
  if (pts.length < 2) return null;
  return [pts[0]![0], pts[0]![1], pts[pts.length - 1]![0], pts[pts.length - 1]![1]];
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
  wrongPlacements,
  correctionPoints,
  onClick,
  gridStep = 1,
  labelStep = 1,
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
  wrongPlacements?: LabeledPoint[];
  correctionPoints?: LabeledPoint[];
  onClick?: (x: number, y: number) => void;
  gridStep?: number;
  labelStep?: number;
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
      {Array.from({ length: Math.floor((xMax - xMin) / labelStep) + 1 }, (_, i) => xMin + i * labelStep)
        .filter((x) => x !== 0)
        .map((x) => (
          <text key={`tx-${x}`} x={cx + x * unit} y={cy + 10} textAnchor="middle" dominantBaseline="hanging" fontSize="8" fill="#64748b">{x}</text>
        ))}
      {Array.from({ length: Math.floor((yMax - yMin) / labelStep) + 1 }, (_, i) => yMin + i * labelStep)
        .filter((y) => y !== 0)
        .map((y) => (
          <text key={`ty-${y}`} x={cx - 10} y={cy - y * unit} textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="#64748b">{y}</text>
        ))}
      <text x={w - pad + 6} y={cy} textAnchor="start" dominantBaseline="middle" fontSize="10" fontWeight="bold" fill="#334155">x</text>
      <text x={cx} y={pad - 8} textAnchor="middle" dominantBaseline="auto" fontSize="10" fontWeight="bold" fill="#334155">y</text>

      {lines?.map((ln) => {
        const clipped = clipLineToRect(ln.x1, ln.y1, ln.x2, ln.y2, xMin, xMax, yMin, yMax);
        if (!clipped) return null;
        const [sx1, sy1, sx2, sy2] = clipped;
        const [px1, py1] = toSvg(sx1, sy1, cx, cy, unit);
        const [px2, py2] = toSvg(sx2, sy2, cx, cy, unit);
        return <line key={ln.id} x1={px1} y1={py1} x2={px2} y2={py2} stroke={ln.color} strokeWidth="2.5" />;
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
            <circle cx={px} cy={py} r="4.5" fill={PLACE_POINT_FILL} stroke="#fff" strokeWidth="1.2" />
            <text x={px + 6} y={py + 3} fontSize="9" fontWeight="bold" fill={PLACE_POINT_FILL}>{p.label}</text>
          </g>
        );
      })}

      {(wrongPlacements ?? []).map((p) => {
        const [px, py] = toSvg(p.x, p.y, cx, cy, unit);
        return (
          <g key={`wr-${p.label}`} pointerEvents="none">
            <circle cx={px} cy={py} r="4.5" fill={PLACE_POINT_FILL} stroke="#fff" strokeWidth="1.2" opacity="0.35" />
            <text x={px} y={py + 5} textAnchor="middle" fontSize="16" fontWeight="bold" fill="#dc2626">×</text>
          </g>
        );
      })}

      {(correctionPoints ?? []).map((p) => {
        const [px, py] = toSvg(p.x, p.y, cx, cy, unit);
        return (
          <g key={`corr-${p.label}`} pointerEvents="none">
            <circle cx={px} cy={py} r="4.5" fill={PLACE_CORRECTION_FILL} stroke="#fff" strokeWidth="1.2" />
            <text x={px + 6} y={py + 3} fontSize="9" fontWeight="bold" fill={PLACE_CORRECTION_FILL}>{p.label}</text>
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

const LINE_SELECT_CLS = "rounded border border-[var(--color-border-default)] bg-white px-2 py-1 text-sm";
const LINE_SELECT_WRONG = "rounded border border-amber-500 bg-white px-2 py-1 text-sm font-semibold text-amber-600";

function LineQNum({ n }: { n: number }) {
  return <span className="w-5 shrink-0 font-bold text-[var(--color-accent-alg)]">{n}.</span>;
}

function LineQuestionLayout({
  n,
  head,
  body,
}: {
  n: number;
  head: React.ReactNode;
  body: React.ReactNode;
}) {
  return (
    <div className="flex gap-2 text-sm">
      <LineQNum n={n} />
      <div className="min-w-0 flex-1">
        <div>{head}</div>
        <div className="mt-1">{body}</div>
      </div>
    </div>
  );
}

function LineQuestionBlock({
  q,
  i,
  answer,
  validated,
  wrong,
  onChange,
  lines,
}: {
  q: LineScenarioQuestion;
  i: number;
  answer: string;
  validated: boolean;
  wrong: boolean;
  onChange: (v: string) => void;
  lines: SegmentLine[];
}) {
  if (q.type === "bool") {
    const userAns = answer.trim();
    const correctAns = q.answer ? "Oui" : "Non";
    return (
      <LineQuestionLayout
        n={i + 1}
        head={<span>{q.prompt}</span>}
        body={(
          validated && wrong ? (
            <div className={`h-8 w-14 ${CLS_WRONG} flex flex-col items-center justify-center`}>
              <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{userAns || "—"}</span>
              <span className="text-xs font-bold leading-none text-amber-600">{correctAns}</span>
            </div>
          ) : (
            <div className="flex gap-4">
              {(["Oui", "Non"] as const).map((opt) => {
                const isCorrect = (opt === "Oui") === q.answer;
                const checked = validated ? isCorrect : answer === opt;
                return (
                  <label
                    key={opt}
                    className={`flex items-center gap-2 ${validated && isCorrect ? "font-semibold" : ""}`}
                  >
                    <input
                      type="radio"
                      name={`lq-${i}`}
                      disabled={validated}
                      checked={checked}
                      onChange={() => onChange(opt)}
                    />
                    {opt}
                  </label>
                );
              })}
            </div>
          )
        )}
      />
    );
  }

  if (q.type === "color_pair") {
    const [a1 = "", a2 = ""] = answer.split("|");
    const options = [
      ...lines.map((l) => ({ id: l.id, label: `la droite ${l.label}` })),
      { id: "axis_x", label: "l'axe des X" },
      { id: "axis_y", label: "l'axe des Y" },
    ];
    const setPart = (idx: 0 | 1, val: string) => {
      const parts = answer.split("|");
      parts[idx] = val;
      onChange(parts.join("|"));
    };
    const display1 = validated && wrong ? q.answer[0]! : a1;
    const display2 = validated && wrong ? q.answer[1]! : a2;
    const selectCls = validated && wrong ? LINE_SELECT_WRONG : LINE_SELECT_CLS;
    return (
      <LineQuestionLayout
        n={i + 1}
        head={(
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <select disabled={validated} value={display1} onChange={(e) => setPart(0, e.target.value)} className={selectCls}>
              <option value="">—</option>
              {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
            <span>et</span>
            <select disabled={validated} value={display2} onChange={(e) => setPart(1, e.target.value)} className={selectCls}>
              <option value="">—</option>
              {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          </div>
        )}
        body={<span>{q.prompt}</span>}
      />
    );
  }

  if (q.type === "parallel_to" || q.type === "perpendicular_to") {
    const otherLines = lines.filter((l) => l.id !== q.lineId);
    const options = [
      ...otherLines.map((l) => ({ id: l.id, label: `la droite ${l.label}` })),
      { id: "axis_x", label: "l'axe des X" },
      { id: "axis_y", label: "l'axe des Y" },
    ];
    const display = validated && wrong ? q.answer : answer;
    const selectCls = validated && wrong ? LINE_SELECT_WRONG : LINE_SELECT_CLS;
    return (
      <LineQuestionLayout
        n={i + 1}
        head={<span>{q.prompt}</span>}
        body={(
          <select disabled={validated} value={display} onChange={(e) => onChange(e.target.value)} className={selectCls}>
            <option value="">—</option>
            {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
        )}
      />
    );
  }

  return (
    <LineQuestionLayout
      n={i + 1}
      head={<span>{q.prompt}</span>}
      body={(
        <div className="flex h-9 items-center gap-1">
          <span>(</span>
          {wrong ? (
            <>
              <div className={`${COORD_CELL_CLS} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{(answer.split("|")[0] ?? "") || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.answer[0]}</span>
              </div>
              <span>;</span>
              <div className={`${COORD_CELL_CLS} ${CLS_WRONG} flex flex-col items-center justify-center`}>
                <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{(answer.split("|")[1] ?? "") || "—"}</span>
                <span className="text-xs font-bold leading-none text-amber-600">{q.answer[1]}</span>
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                inputMode="numeric"
                value={answer.split("|")[0] ?? ""}
                disabled={validated}
                onChange={(e) => {
                  const parts = answer.split("|");
                  parts[0] = e.target.value.replace(/[^0-9,\.\-]/g, "");
                  onChange(parts.join("|"));
                }}
                className={COORD_CELL_CLS}
              />
              <span>;</span>
              <input
                type="text"
                inputMode="numeric"
                value={answer.split("|")[1] ?? ""}
                disabled={validated}
                onChange={(e) => {
                  const parts = answer.split("|");
                  parts[1] = e.target.value.replace(/[^0-9,\.\-]/g, "");
                  onChange(parts.join("|"));
                }}
                className={COORD_CELL_CLS}
              />
            </>
          )}
          <span>)</span>
        </div>
      )}
    />
  );
}

function checkLineAnswer(q: LineScenarioQuestion, raw: string): boolean {
  if (q.type === "bool") {
    const n = raw.trim().toLowerCase();
    return (q.answer && n === "oui") || (!q.answer && n === "non");
  }
  if (q.type === "color_pair") {
    const [g1, g2] = raw.split("|");
    if (!g1 || !g2) return false;
    return [g1, g2].sort().join("|") === [...q.answer].sort().join("|");
  }
  if (q.type === "parallel_to" || q.type === "perpendicular_to") {
    return raw === q.answer;
  }
  const [xRaw, yRaw] = raw.split("|");
  const x = parseFloat((xRaw ?? "").replace(",", "."));
  const y = parseFloat((yRaw ?? "").replace(",", "."));
  if (Number.isNaN(x) || Number.isNaN(y)) return false;
  return Math.abs(x - q.answer[0]) < 0.01 && Math.abs(y - q.answer[1]) < 0.01;
}

export function G6LineIntersectExercise({ exNum, validateCommand, onValidated, consigne, consigneLang, consigneDir }: ExProps) {
  const [scenario] = useState(() => pick1(LINE_SCENARIOS));
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = scenario.questions.map((q, i) => checkLineAnswer(q, answers[i] ?? ""));
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, scenario, answers, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Observe les droites sur le repère et réponds aux questions." />
      <CartesianPlane
        xMin={scenario.xMin} xMax={scenario.xMax}
        yMin={scenario.yMin} yMax={scenario.yMax}
        lines={scenario.lines}
        gridStep={1}
        labelStep={2}
      />
      <div className="space-y-4">
        {scenario.questions.map((q, i) => (
          <LineQuestionBlock key={i} q={q} i={i}
            answer={answers[i] ?? ""}
            validated={validated}
            wrong={validated && !results[i]}
            lines={scenario.lines}
            onChange={(v) => setAnswers((p) => ({ ...p, [i]: v }))} />
        ))}
      </div>
    </div>
  );
}

// ── Ex 11 : placer des points ─────────────────────────────────────────────────

export function G6CartesianPlaceExercise({ exNum, validateCommand, onValidated, consigne, consigneLang, consigneDir }: ExProps) {
  const [targets] = useState(() => pick1(CARTESIAN_PLACE_POOLS));
  const [selected, setSelected] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, { x: number; y: number } | null>>(() =>
    Object.fromEntries(targets.map((p) => [p.label, null])),
  );
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const xMin = -10;
  const xMax = 10;
  const yMin = -10;
  const yMax = 10;

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
    .filter((t, i) => placements[t.label] && (!validated || results[i]))
    .map((t) => ({ label: t.label, x: placements[t.label]!.x, y: placements[t.label]!.y }));

  const wrongPlacements = validated
    ? targets
        .filter((t, i) => !results[i] && placements[t.label])
        .map((t) => ({ label: t.label, x: placements[t.label]!.x, y: placements[t.label]!.y }))
    : [];

  const correctionPoints = validated
    ? targets
        .filter((t, i) => !results[i])
        .map((t) => ({ label: t.label, x: t.x, y: t.y }))
    : [];

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Placez les points sur le plan." />
      <div className="flex flex-wrap items-center gap-1.5">
        {targets.map((pt, i) => {
          const isSel = selected === pt.label;
          const ok = validated ? results[i] : null;
          const placedOnGrid = placements[pt.label] !== null;
          const onAccent = placedOnGrid && !isSel && ok !== false;
          return (
            <button
              key={pt.label}
              type="button"
              disabled={validated}
              onClick={() => setSelected(pt.label)}
              className={`flex h-8 items-center gap-1 rounded-lg border px-1.5 text-xs font-mono transition-colors ${
                isSel
                  ? `border-[var(--color-accent-alg)] ${PLACE_CELL_FILL}`
                  : ok === false
                    ? "border-amber-400 bg-white"
                    : placedOnGrid
                      ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]"
                      : "border-[var(--color-border-default)] bg-white"
              }`}
            >
              <span className={`w-4 shrink-0 font-bold ${onAccent ? "text-white" : "text-[var(--color-accent-alg)]"}`}>
                {pt.label}
              </span>
              <span className={onAccent ? "text-white" : "text-[var(--color-text-primary)]"}>
                {formatXY(pt.x, pt.y)}
              </span>
            </button>
          );
        })}
      </div>
      <CartesianPlane
        xMin={xMin}
        xMax={xMax}
        yMin={yMin}
        yMax={yMax}
        unit={12}
        labelStep={2}
        placedPoints={placed}
        wrongPlacements={wrongPlacements}
        correctionPoints={correctionPoints}
        onClick={onMapClick}
      />
    </div>
  );
}

// ── Ex 12 : trouver un sommet manquant ────────────────────────────────────────

export function G6FindVertexExercise({ exNum, validateCommand, onValidated, consigneLang, consigneDir }: ExProps) {
  const [puzzle] = useState(() => pick1(VERTEX_PUZZLES));
  const [selected, setSelected] = useState<string>("D");
  const [placement, setPlacement] = useState<{ x: number; y: number } | null>(null);
  const [validated, setValidated] = useState(false);
  const [ok, setOk] = useState(false);

  const [a, b, c] = puzzle.points;
  const openSides: SegmentLine[] = [
    { id: "ab", x1: a!.x, y1: a!.y, x2: b!.x, y2: b!.y, color: PLACE_POINT_FILL, label: "AB" },
    { id: "bc", x1: b!.x, y1: b!.y, x2: c!.x, y2: c!.y, color: PLACE_POINT_FILL, label: "BC" },
  ];

  const onMapClick = (gx: number, gy: number) => {
    if (validated || selected !== "D") return;
    setPlacement({ x: gx, y: gy });
    setSelected("D");
  };

  const doValidate = useCallback(() => {
    if (validated) return;
    const d = placement;
    const res = d !== null
      && inCartesianGrid(d.x, d.y)
      && isValidVertexPlacement(puzzle.type, a!, b!, c!, d);
    setOk(res);
    setValidated(true);
    onValidated(res ? 1 : 0, 1);
  }, [validated, placement, puzzle, a, b, c, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  const placed = placement && (!validated || ok)
    ? [{ label: "D", x: placement.x, y: placement.y }]
    : [];

  const wrongPlacements = validated && !ok && placement
    ? [{ label: "D", x: placement.x, y: placement.y }]
    : [];

  const correctionPoints = validated && !ok
    ? [{ label: "D", x: puzzle.answer.x, y: puzzle.answer.y }]
    : [];

  const previewLines: SegmentLine[] = [];
  if (placement) {
    previewLines.push(
      { id: "cd", x1: c!.x, y1: c!.y, x2: placement.x, y2: placement.y, color: PLACE_PREVIEW_LINE, label: "CD" },
      { id: "da", x1: placement.x, y1: placement.y, x2: a!.x, y2: a!.y, color: PLACE_PREVIEW_LINE, label: "DA" },
    );
  }

  const correctionLines: SegmentLine[] = validated && !ok
    ? [
        { id: "cd-corr", x1: c!.x, y1: c!.y, x2: puzzle.answer.x, y2: puzzle.answer.y, color: PLACE_CORRECTION_FILL, label: "CD" },
        { id: "da-corr", x1: puzzle.answer.x, y1: puzzle.answer.y, x2: a!.x, y2: a!.y, color: PLACE_CORRECTION_FILL, label: "DA" },
      ]
    : [];

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne
        consigne={consigneLang ? vertexExercisePrompt(puzzle.type, consigneLang) : undefined}
        consigneLang={consigneLang}
        consigneDir={consigneDir}
        fallback={vertexExercisePrompt(puzzle.type)}
      />
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={validated}
          onClick={() => setSelected("D")}
          className={`flex h-9 min-w-[3rem] items-center justify-center rounded-lg border px-4 text-sm font-bold transition-colors ${
            selected === "D" && !validated
              ? `border-[var(--color-accent-alg)] ${PLACE_CELL_FILL} text-[var(--color-accent-alg)]`
              : validated && !ok
                ? "border-amber-400 bg-white text-[var(--color-accent-alg)]"
                : placement
                  ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"
                  : "border-[var(--color-border-default)] bg-white text-[var(--color-accent-alg)]"
          }`}
        >
          D
        </button>
      </div>
      <CartesianPlane
        xMin={-10}
        xMax={10}
        yMin={-10}
        yMax={10}
        unit={12}
        labelStep={2}
        lines={[...openSides, ...previewLines, ...correctionLines]}
        points={puzzle.points}
        placedPoints={placed}
        wrongPlacements={wrongPlacements}
        correctionPoints={correctionPoints}
        onClick={onMapClick}
      />
    </div>
  );
}

// ── Ex 13 : perpendiculaire / parallèle — placer D et E ─────────────────────

const PERP_PARALLEL_TARGETS = ["D", "E"] as const;

export function G6PerpParallelPlaceExercise({ exNum, validateCommand, onValidated, consigne, consigneLang, consigneDir }: ExProps) {
  const [scenario] = useState(() => pick1(PERP_PARALLEL_SCENARIOS));
  const [selected, setSelected] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, { x: number; y: number } | null>>({
    D: null,
    E: null,
  });
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const fixedPoints = [scenario.a, scenario.b, scenario.c];

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
    const { a, b, c } = scenario;
    const dPt = placements.D;
    const ePt = placements.E;
    const res = [
      dPt !== null && isValidPerpParallelD(a, b, c, dPt),
      ePt !== null && isValidPerpParallelE(a, b, c, ePt),
    ];
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, placements, scenario, onValidated]);

  useValidateTrigger(validateCommand, doValidate);

  const placed = PERP_PARALLEL_TARGETS
    .filter((label, i) => placements[label] && (!validated || results[i]))
    .map((label) => ({ label, x: placements[label]!.x, y: placements[label]!.y }));

  const wrongPlacements = validated
    ? PERP_PARALLEL_TARGETS
        .filter((label, i) => !results[i] && placements[label])
        .map((label) => ({ label, x: placements[label]!.x, y: placements[label]!.y }))
    : [];

  const correctionPoints = validated
    ? PERP_PARALLEL_TARGETS
        .filter((label, i) => !results[i])
        .map((label) => {
          const pt = label === "D" ? scenario.d : scenario.e;
          return { label, x: pt.x, y: pt.y };
        })
    : [];

  const abLine: SegmentLine = {
    id: "ab",
    x1: scenario.a.x,
    y1: scenario.a.y,
    x2: scenario.b.x,
    y2: scenario.b.y,
    color: PLACE_POINT_FILL,
    label: "AB",
  };

  const previewLines: SegmentLine[] = [];
  const c = scenario.c;
  if (placements.D) {
    const d = placements.D;
    previewLines.push({ id: "cd", x1: c.x, y1: c.y, x2: d.x, y2: d.y, color: PLACE_PREVIEW_LINE, label: "CD" });
  }
  if (placements.E) {
    const e = placements.E;
    previewLines.push({ id: "ce", x1: c.x, y1: c.y, x2: e.x, y2: e.y, color: PLACE_PREVIEW_LINE, label: "CE" });
  }

  const correctionLines: SegmentLine[] = validated
    ? PERP_PARALLEL_TARGETS
        .filter((label, i) => !results[i])
        .map((label) => {
          const t = label === "D" ? scenario.d : scenario.e;
          return {
            id: label === "D" ? "cd-corr" : "ce-corr",
            x1: c.x,
            y1: c.y,
            x2: t.x,
            y2: t.y,
            color: PLACE_CORRECTION_FILL,
            label,
          };
        })
    : [];

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Placez D et E sur le plan." />
      <ol className="list-inside list-decimal space-y-1 text-sm text-[var(--color-text-secondary)]">
        <li>[CD] doit être perpendiculaire à [AB].</li>
        <li>[CE] doit être parallèle à [AB].</li>
      </ol>
      <div className="flex flex-wrap gap-2">
        {PERP_PARALLEL_TARGETS.map((label, i) => {
          const isSel = selected === label;
          const ok = validated ? results[i] : null;
          const placedOnGrid = placements[label] !== null;
          const onAccent = placedOnGrid && !isSel && ok !== false;
          return (
            <button
              key={label}
              type="button"
              disabled={validated}
              onClick={() => setSelected(label)}
              className={`flex h-9 min-w-[3rem] items-center justify-center rounded-lg border px-4 text-sm font-bold transition-colors ${
                isSel
                  ? `border-[var(--color-accent-alg)] ${PLACE_CELL_FILL} text-[var(--color-accent-alg)]`
                  : ok === false
                    ? "border-amber-400 bg-white text-[var(--color-accent-alg)]"
                    : placedOnGrid
                      ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)] text-white"
                      : "border-[var(--color-border-default)] bg-white text-[var(--color-accent-alg)]"
              }`}
            >
              <span className={onAccent ? "text-white" : undefined}>{label}</span>
            </button>
          );
        })}
      </div>
      <CartesianPlane
        xMin={-10}
        xMax={10}
        yMin={-10}
        yMax={10}
        unit={12}
        labelStep={2}
        lines={[abLine, ...previewLines, ...correctionLines]}
        points={fixedPoints}
        placedPoints={placed}
        wrongPlacements={wrongPlacements}
        correctionPoints={correctionPoints}
        onClick={onMapClick}
      />
      <p className="text-xs text-[var(--color-text-secondary)]">Cliquez sur une pastille, puis sur le repère.</p>
    </div>
  );
}

// ── Ex 14 : lire des points sur 4 quadrants ─────────────────────────────────

export function G6QuadrantReadExercise({ exNum, validateCommand, onValidated, consigne, consigneLang, consigneDir }: ExProps) {
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
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Graduez les axes de 1 en 1 et écrivez les coordonnées des points." />
      <CartesianPlane xMin={-12} xMax={12} yMin={-12} yMax={12} points={points} />
      <CoordInputs points={points} answers={answers} validated={validated} results={results} allowDecimal
        onChange={(label, field, val) => setAnswers((p) => ({ ...p, [label]: { ...p[label]!, [field]: val } }))} />
    </div>
  );
}
