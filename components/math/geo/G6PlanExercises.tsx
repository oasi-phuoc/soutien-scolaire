"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BIEL_LANDMARKS,
  BIEL_QUESTION_POOL,
  CARTESIAN_FIGURES,
  GENEVA_LANDMARKS,
  GENEVA_QUESTION_POOL,
  GRID_SHAPES,
  MEDIEVAL_ITEMS,
  REBEUVELIER_FOREST_ZONES,
  REBEUVELIER_MAP,
  REBEUVELIER_MAP_LABELS,
  REBEUVELIER_PATHS,
  REBEUVELIER_PLACE_POINTS,
  REBEUVELIER_QUESTION_POOL,
  REBEUVELIER_READ_POINTS,
  Q1_CARTESIAN_FIGURES,
  Q12_CARTESIAN_FIGURES,
  Q34_CARTESIAN_FIGURES,
  Q_ALL_CARTESIAN_FIGURES,
  type GridCell,
  type MapQuestion,
  type Q1CartesianFigure,
  type SignedCartesianFigure,
  type ShapeIcon,
  type TopoQuestion,
  cellKey,
  colIndex,
  formatCell,
  parseCellInput,
} from "@/lib/curriculum/content/math/g6-plan-data";

const MATH_TEXT_INPUT_BASE =
  "rounded-none border-0 border-b-2 border-[var(--color-accent-alg)]/60 " +
  "text-center font-mono outline-none transition-colors focus:border-[var(--color-accent-alg)] disabled:opacity-70";

const CLS_WRONG = "rounded-none border-0 border-b-2 border-amber-500";

type CoordAnswer = { col: string; row: string };
type XYAnswer = { x: string; y: string };

export type G6GridReadSnapshot = {
  kind: "g6_read";
  items: Array<{ shape: ShapeIcon; cell: GridCell; answer: string }>;
  answers: CoordAnswer[];
};

export type G6GridPlaceSnapshot = {
  kind: "g6_place";
  items: Array<{ shape: ShapeIcon; cell: GridCell }>;
  placements: Record<string, GridCell | null>;
};

export type G6Q1FigureSnapshot = {
  kind: "g6_q1_figure";
  figure: Q1CartesianFigure;
  askedPoints: Array<{ label: string; x: number; y: number }>;
  xMax: number;
  yMax: number;
  answers: XYAnswer[];
};

export type G6Q2FigureSnapshot = {
  kind: "g6_q2_figure";
  half: "q12" | "q34";
  figure: SignedCartesianFigure;
  askedPoints: Array<{ label: string; x: number; y: number }>;
  answers: XYAnswer[];
};

export type G6EvalSnapshot = G6GridReadSnapshot | G6GridPlaceSnapshot | G6Q1FigureSnapshot | G6Q2FigureSnapshot;

type ConsigneProps = {
  consigne?: string;
  consigneLang?: string;
  consigneDir?: "ltr" | "rtl";
};

type ExProps = ConsigneProps & {
  exNum: number;
  validateCommand: number;
  onValidated: (score: number, max: number, results?: boolean[], snapshot?: G6EvalSnapshot) => void;
  reviewSnapshot?: G6EvalSnapshot;
};

function G6Consigne({ consigne, consigneLang, consigneDir, fallback }: ConsigneProps & { fallback: string }) {
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

function pickN<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

function normText(s: string): string {
  return s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function randomCells(cols: string[], rows: number[], count: number): GridCell[] {
  const all: GridCell[] = [];
  for (const col of cols) for (const row of rows) all.push({ col, row });
  return pickN(all, count);
}

const SHAPE_FILL = "var(--color-accent-alg)";
const SHAPE_CORRECTION_FILL = "#d97706";

function themedShapeSvg(svg: string, fill: string): string {
  return svg
    .replace(/\sstroke="[^"]*"/g, "")
    .replace(/\sstroke-width="[^"]*"/g, "")
    .replace(/fill="[^"]*"/g, `fill="${fill}"`);
}

function ShapeGlyph({ shape, className, fill = SHAPE_FILL }: { shape: ShapeIcon; className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden>
      <g dangerouslySetInnerHTML={{ __html: themedShapeSvg(shape.svg, fill) }} />
    </svg>
  );
}

const SHAPE_CELL_FILL = "color-mix(in srgb, var(--color-accent-alg) 22%, white)";

function coordAnswerOk(answer: CoordAnswer, cell: GridCell): boolean {
  const col = answer.col.trim().toUpperCase();
  const row = answer.row.trim();
  return col === cell.col.toUpperCase() && row === String(cell.row);
}

function GridCoordFields({
  answer,
  correct,
  validated,
  wrong,
  onChange,
  readOnly = false,
  onAccent = false,
}: {
  answer: CoordAnswer;
  correct: GridCell;
  validated: boolean;
  wrong: boolean;
  onChange: (next: CoordAnswer) => void;
  readOnly?: boolean;
  onAccent?: boolean;
}) {
  const inputCls = `h-8 w-8 px-0 text-sm text-center ${MATH_TEXT_INPUT_BASE}`;
  const displayCls = `flex h-8 w-8 items-center justify-center text-sm font-mono font-semibold ${
    onAccent ? "text-white" : "text-[var(--color-text-primary)]"
  }`;
  const parenCls = onAccent ? "text-white/75" : "text-[var(--color-text-secondary)]";
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className={parenCls}>(</span>
      {readOnly ? (
        <span className={displayCls}>{correct.col.toLowerCase()}</span>
      ) : wrong ? (
        <div className={`${inputCls} ${CLS_WRONG} flex flex-col items-center justify-center`}>
          <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{answer.col || "—"}</span>
          <span className="text-xs font-bold leading-none text-amber-600">{correct.col.toUpperCase()}</span>
        </div>
      ) : (
        <input
          type="text"
          inputMode="text"
          maxLength={1}
          value={answer.col}
          disabled={validated}
          onChange={(e) => onChange({ ...answer, col: e.target.value.replace(/[^a-zA-Z]/g, "").slice(-1) })}
          className={inputCls}
          aria-label="Colonne"
        />
      )}
      <span className={parenCls}>;</span>
      {readOnly ? (
        <span className={displayCls}>{correct.row}</span>
      ) : wrong ? (
        <div className={`${inputCls} ${CLS_WRONG} flex flex-col items-center justify-center`}>
          <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{answer.row || "—"}</span>
          <span className="text-xs font-bold leading-none text-amber-600">{correct.row}</span>
        </div>
      ) : (
        <input
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={answer.row}
          disabled={validated}
          onChange={(e) => onChange({ ...answer, row: e.target.value.replace(/[^0-9]/g, "").slice(-1) })}
          className={inputCls}
          aria-label="Ligne"
        />
      )}
      <span className={parenCls}>)</span>
    </div>
  );
}

function xyAnswerOk(answer: XYAnswer, x: number, y: number): boolean {
  const px = parseInt(answer.x.trim(), 10);
  const py = parseInt(answer.y.trim(), 10);
  return !Number.isNaN(px) && !Number.isNaN(py) && px === x && py === y;
}

const SIGNED_XY_FILTER = /[^0-9\-]/g;
const UNSIGNED_XY_FILTER = /[^0-9]/g;

function GridXYFields({
  label,
  answer,
  correctX,
  correctY,
  validated,
  wrong,
  onChange,
  signed = false,
}: {
  label: string;
  answer: XYAnswer;
  correctX: number;
  correctY: number;
  validated: boolean;
  wrong: boolean;
  onChange: (next: XYAnswer) => void;
  signed?: boolean;
}) {
  const inputCls = `h-8 w-10 px-0 text-sm text-center ${MATH_TEXT_INPUT_BASE}`;
  const filter = signed ? SIGNED_XY_FILTER : UNSIGNED_XY_FILTER;
  const maxLen = signed ? 3 : 2;
  return (
    <div className="flex h-9 items-center gap-2">
      <span className="w-5 shrink-0 text-sm font-bold text-[var(--color-accent-alg)]">{label}</span>
      <div className="flex items-center gap-1 text-sm">
        <span className="text-[var(--color-text-secondary)]">(</span>
        {wrong ? (
          <div className={`${inputCls} ${CLS_WRONG} flex flex-col items-center justify-center`}>
            <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{answer.x || "—"}</span>
            <span className="text-xs font-bold leading-none text-amber-600">{correctX}</span>
          </div>
        ) : (
          <input
            type="text"
            inputMode="numeric"
            maxLength={maxLen}
            value={answer.x}
            disabled={validated}
            onChange={(e) => onChange({ ...answer, x: e.target.value.replace(filter, "") })}
            className={inputCls}
            aria-label={`Abscisse du point ${label}`}
          />
        )}
        <span className="text-[var(--color-text-secondary)]">;</span>
        {wrong ? (
          <div className={`${inputCls} ${CLS_WRONG} flex flex-col items-center justify-center`}>
            <span className="text-[10px] leading-none text-[var(--color-text-secondary)]">{answer.y || "—"}</span>
            <span className="text-xs font-bold leading-none text-amber-600">{correctY}</span>
          </div>
        ) : (
          <input
            type="text"
            inputMode="numeric"
            maxLength={maxLen}
            value={answer.y}
            disabled={validated}
            onChange={(e) => onChange({ ...answer, y: e.target.value.replace(filter, "") })}
            className={inputCls}
            aria-label={`Ordonnée du point ${label}`}
          />
        )}
        <span className="text-[var(--color-text-secondary)]">)</span>
      </div>
    </div>
  );
}

function pickSpacedVerts(vertices: [number, number][], count: number, minGap = 2): [number, number][] {
  const picked: [number, number][] = [];
  for (const v of shuffle(vertices)) {
    if (picked.every((p) => Math.max(Math.abs(p[0] - v[0]), Math.abs(p[1] - v[1])) >= minGap)) {
      picked.push(v);
      if (picked.length >= count) break;
    }
  }
  return picked;
}

function PointLabel({ px, py, label }: { px: number; py: number; label: string }) {
  const tx = px + 6;
  const ty = py - 1;
  const w = 9;
  const h = 11;
  return (
    <g>
      <circle cx={px} cy={py} r="3.5" fill="var(--color-accent-alg)" stroke="#fff" strokeWidth="1" />
      <rect x={tx - 1} y={ty - h + 2} width={w} height={h} fill="white" />
      <text x={tx + 3} y={ty} textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--color-accent-alg)">{label}</text>
    </g>
  );
}

function q1ToSvg(x: number, y: number, cx: number, cy: number, unit: number): [number, number] {
  return [cx + x * unit, cy - y * unit];
}

function Q1FigurePlane({
  xMax = 20,
  yMax = 20,
  polygons,
  points,
  unit = 10,
  labelStep = 5,
}: {
  xMax?: number;
  yMax?: number;
  polygons: Array<{ points: [number, number][] }>;
  points: Array<{ label: string; x: number; y: number }>;
  unit?: number;
  labelStep?: number;
}) {
  const pad = 22;
  const w = pad * 2 + xMax * unit;
  const h = pad * 2 + yMax * unit;
  const cx = pad;
  const cy = h - pad;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto w-full max-w-md rounded-lg border border-[var(--color-border-default)] bg-white">
      {Array.from({ length: xMax + 1 }, (_, i) => i).map((x) => (
        <line key={`gx-${x}`}
          x1={cx + x * unit} y1={pad - 2}
          x2={cx + x * unit} y2={cy + 2}
          stroke={x % labelStep === 0 ? "#e2e8f0" : "#f1f5f9"}
          strokeWidth={x === 0 ? 0 : x % labelStep === 0 ? 0.5 : 0.25} />
      ))}
      {Array.from({ length: yMax + 1 }, (_, i) => i).map((y) => (
        <line key={`gy-${y}`}
          x1={pad - 2} y1={cy - y * unit}
          x2={cx + xMax * unit + 2} y2={cy - y * unit}
          stroke={y % labelStep === 0 ? "#e2e8f0" : "#f1f5f9"}
          strokeWidth={y === 0 ? 0 : y % labelStep === 0 ? 0.5 : 0.25} />
      ))}
      <line x1={pad - 2} y1={cy} x2={cx + xMax * unit + 2} y2={cy} stroke="#334155" strokeWidth="1.5" />
      <line x1={cx} y1={pad - 2} x2={cx} y2={cy + 2} stroke="#334155" strokeWidth="1.5" />
      <text x={cx - 6} y={cy + 10} textAnchor="middle" dominantBaseline="hanging" fontSize="7" fill="#64748b">0</text>
      {Array.from({ length: Math.floor(xMax / labelStep) + 1 }, (_, i) => i * labelStep)
        .filter((x) => x > 0)
        .map((x) => (
          <text key={`tx-${x}`} x={cx + x * unit} y={cy + 10} textAnchor="middle" dominantBaseline="hanging" fontSize="7" fill="#64748b">{x}</text>
        ))}
      {Array.from({ length: Math.floor(yMax / labelStep) + 1 }, (_, i) => i * labelStep)
        .filter((y) => y > 0)
        .map((y) => (
          <text key={`ty-${y}`} x={cx - 8} y={cy - y * unit} textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#64748b">{y}</text>
        ))}

      {polygons.map((poly, i) => (
        <polygon
          key={i}
          points={poly.points.map(([x, y]) => q1ToSvg(x, y, cx, cy, unit).join(",")).join(" ")}
          fill="none"
          stroke="#334155"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ))}

      {points.map((p) => {
        const [px, py] = q1ToSvg(p.x, p.y, cx, cy, unit);
        return <PointLabel key={p.label} px={px} py={py} label={p.label} />;
      })}
    </svg>
  );
}

function genQ1FigureExercise() {
  const pool = Q1_CARTESIAN_FIGURES.filter((f) => pickSpacedVerts(f.vertices, 4, 2).length >= 4);
  const figure = pickN(pool, 1)[0]!;
  const verts = pickSpacedVerts(figure.vertices, 4, 2);
  const askedPoints = (["a", "b", "c", "d"] as const).map((label, i) => ({
    label,
    x: verts[i]![0],
    y: verts[i]![1],
  }));
  return { figure, askedPoints, xMax: 20, yMax: 20 };
}

const signedToSvg = q1ToSvg;

function SignedFigurePlane({
  xMin,
  xMax,
  yMin,
  yMax,
  polygons,
  points,
  unit = 11,
  labelStep = 5,
}: {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  polygons: Array<{ points: [number, number][] }>;
  points: Array<{ label: string; x: number; y: number }>;
  unit?: number;
  labelStep?: number;
}) {
  const pad = 24;
  const w = pad * 2 + (xMax - xMin) * unit;
  const h = pad * 2 + (yMax - yMin) * unit;
  const cx = pad - xMin * unit;
  const cy = h - pad + yMin * unit;

  const xLines = Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i);
  const yLines = Array.from({ length: yMax - yMin + 1 }, (_, i) => yMin + i);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto w-full max-w-lg rounded-lg border border-[var(--color-border-default)] bg-white">
      {xLines.map((x) => (
        <line key={`gx-${x}`}
          x1={cx + x * unit} y1={pad - 2}
          x2={cx + x * unit} y2={h - pad + 2}
          stroke={x % labelStep === 0 ? "#e2e8f0" : "#f1f5f9"}
          strokeWidth={x === 0 ? 0 : x % labelStep === 0 ? 0.5 : 0.25} />
      ))}
      {yLines.map((y) => (
        <line key={`gy-${y}`}
          x1={pad - 2} y1={cy - y * unit}
          x2={w - pad + 2} y2={cy - y * unit}
          stroke={y % labelStep === 0 ? "#e2e8f0" : "#f1f5f9"}
          strokeWidth={y === 0 ? 0 : y % labelStep === 0 ? 0.5 : 0.25} />
      ))}
      <line x1={pad - 2} y1={cy} x2={w - pad + 2} y2={cy} stroke="#334155" strokeWidth="1.5" />
      <line x1={cx} y1={pad - 2} x2={cx} y2={h - pad + 2} stroke="#334155" strokeWidth="1.5" />
      <text x={cx - 6} y={cy + (yMin < 0 ? -4 : 10)} textAnchor="middle" dominantBaseline={yMin < 0 ? "auto" : "hanging"} fontSize="7" fill="#64748b">0</text>
      {xLines.filter((x) => x !== 0 && x % labelStep === 0).map((x) => (
        <text key={`tx-${x}`} x={cx + x * unit} y={cy + (yMin < 0 ? -6 : 10)} textAnchor="middle" dominantBaseline={yMin < 0 ? "auto" : "hanging"} fontSize="7" fill="#64748b">{x}</text>
      ))}
      {yLines.filter((y) => y !== 0 && y % labelStep === 0).map((y) => (
        <text key={`ty-${y}`} x={cx - 10} y={cy - y * unit} textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#64748b">{y}</text>
      ))}

      {polygons.map((poly, i) => (
        <polygon
          key={i}
          points={poly.points.map(([x, y]) => signedToSvg(x, y, cx, cy, unit).join(",")).join(" ")}
          fill="none"
          stroke="#334155"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ))}

      {points.map((p) => {
        const [px, py] = signedToSvg(p.x, p.y, cx, cy, unit);
        return <PointLabel key={p.label} px={px} py={py} label={p.label} />;
      })}
    </svg>
  );
}

function genQ2FigureExercise(half: "q12" | "q34") {
  const pool = (half === "q12" ? Q12_CARTESIAN_FIGURES : Q34_CARTESIAN_FIGURES)
    .filter((f) => pickSpacedVerts(f.vertices, 4, 2).length >= 4);
  const figure = pickN(pool, 1)[0]!;
  const verts = pickSpacedVerts(figure.vertices, 4, 2);
  const askedPoints = (["a", "b", "c", "d"] as const).map((label, i) => ({
    label,
    x: verts[i]![0],
    y: verts[i]![1],
  }));
  return { figure, askedPoints, half };
}

function genQAllFigureExercise() {
  const pool = Q_ALL_CARTESIAN_FIGURES.filter((f) => pickSpacedVerts(f.vertices, 4, 2).length >= 4);
  const figure = pickN(pool, 1)[0]!;
  const verts = pickSpacedVerts(figure.vertices, 4, 2);
  const askedPoints = (["a", "b", "c", "d"] as const).map((label, i) => ({
    label,
    x: verts[i]![0],
    y: verts[i]![1],
  }));
  return { figure, askedPoints };
}

// ── Exercice 3 (G6.2) : coordonnées sur figure — 4 quadrants ────────────────

export function G6QAllFigureCoordsExercise({ exNum, validateCommand, onValidated, consigne, consigneLang, consigneDir }: ExProps) {
  const [{ figure, askedPoints }] = useState(() => genQAllFigureExercise());
  const bounds = { xMin: -10, xMax: 10, yMin: -10, yMax: 10 };
  const [answers, setAnswers] = useState<XYAnswer[]>(() => askedPoints.map(() => ({ x: "", y: "" })));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prev = useRef(-1);

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = askedPoints.map((pt, i) => xyAnswerOk(answers[i] ?? { x: "", y: "" }, pt.x, pt.y));
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, askedPoints, answers, onValidated]);

  useEffect(() => { if (validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Notez les coordonnées des points." />
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {askedPoints.map((pt, i) => {
          const answer = answers[i] ?? { x: "", y: "" };
          const wrong = validated && !results[i];
          return (
            <GridXYFields
              key={pt.label}
              label={pt.label}
              answer={answer}
              correctX={pt.x}
              correctY={pt.y}
              validated={validated}
              wrong={wrong}
              signed
              onChange={(next) => setAnswers((p) => p.map((a, j) => (j === i ? next : a)))}
            />
          );
        })}
      </div>
      <SignedFigurePlane
        xMin={bounds.xMin}
        xMax={bounds.xMax}
        yMin={bounds.yMin}
        yMax={bounds.yMax}
        polygons={figure.polygons}
        points={askedPoints}
      />
    </div>
  );
}

// ── Grille lettres/chiffres ───────────────────────────────────────────────────

type GridPlacement = { cell: GridCell; shape: ShapeIcon; fill?: string; key?: string };

function LetterGrid({
  cols,
  rows,
  cellSize = 40,
  placements,
  correctionPlacements,
  wrongCells,
  highlight,
  onCellClick,
  selectedShape,
  showLabels = true,
}: {
  cols: string[];
  rows: number[];
  cellSize?: number;
  placements?: GridPlacement[];
  correctionPlacements?: GridPlacement[];
  wrongCells?: GridCell[];
  highlight?: GridCell[];
  onCellClick?: (cell: GridCell) => void;
  selectedShape?: string | null;
  showLabels?: boolean;
}) {
  const w = 28 + cols.length * cellSize;
  const h = 24 + rows.length * cellSize;
  const placementMap = new Map(
    (placements ?? []).map((p) => [cellKey(p.cell), p]),
  );
  const highlightSet = new Set((highlight ?? []).map(cellKey));
  const wrongSet = new Set((wrongCells ?? []).map(cellKey));

  const renderShape = (placement: GridPlacement, x: number, y: number) => (
    <svg
      key={placement.key ?? `${cellKey(placement.cell)}-${placement.shape.id}`}
      x={x + 1}
      y={y + 1}
      width={cellSize - 2}
      height={cellSize - 2}
      viewBox="0 0 72 72"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <g dangerouslySetInnerHTML={{ __html: themedShapeSvg(placement.shape.svg, placement.fill ?? SHAPE_FILL) }} />
    </svg>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      {showLabels && cols.map((c, i) => (
        <text key={`c-${c}`} x={28 + i * cellSize + cellSize / 2} y={16}
          textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--color-accent-alg)">{c}</text>
      ))}
      {showLabels && rows.map((r, i) => (
        <text key={`r-${r}`} x={14} y={24 + i * cellSize + cellSize / 2 + 4}
          textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--color-accent-alg)">{r}</text>
      ))}
      {rows.map((row, ri) =>
        cols.map((col, ci) => {
          const cell = { col, row };
          const key = cellKey(cell);
          const x = 28 + ci * cellSize;
          const y = 24 + ri * cellSize;
          const placement = placementMap.get(key);
          const isHi = highlightSet.has(key);
          const isWrong = wrongSet.has(key);
          return (
            <g key={key}>
              <rect
                x={x + 1} y={y + 1} width={cellSize - 2} height={cellSize - 2}
                fill={isHi ? "#fef08a" : placement ? SHAPE_CELL_FILL : "#fff"}
                stroke={onCellClick ? (selectedShape ? "var(--color-accent-alg)" : "#cbd5e1") : "#cbd5e1"}
                strokeWidth={onCellClick ? 1.5 : 1}
                className={onCellClick ? "cursor-pointer" : undefined}
                onClick={() => onCellClick?.(cell)}
              />
              {placement && renderShape(placement, x, y)}
              {isWrong && (
                <text
                  x={x + cellSize / 2}
                  y={y + cellSize / 2 + 5}
                  textAnchor="middle"
                  fontSize="22"
                  fontWeight="bold"
                  fill="#dc2626"
                  pointerEvents="none"
                >
                  ×
                </text>
              )}
            </g>
          );
        }),
      )}
      {(correctionPlacements ?? []).map((placement) => {
        const ci = cols.findIndex((c) => c.toLowerCase() === placement.cell.col.toLowerCase());
        const ri = rows.indexOf(placement.cell.row);
        if (ci < 0 || ri < 0) return null;
        const x = 28 + ci * cellSize;
        const y = 24 + ri * cellSize;
        return renderShape({ ...placement, fill: placement.fill ?? SHAPE_CORRECTION_FILL, key: `corr-${placement.shape.id}` }, x, y);
      })}
    </svg>
  );
}

// ── Exercice 1 : lire les coordonnées ────────────────────────────────────────

type ReadItem = { shape: ShapeIcon; cell: GridCell; answer: string };

function genReadItems(): ReadItem[] {
  const cols = ["a", "b", "c", "d", "e", "f"];
  const rows = [1, 2, 3, 4, 5, 6];
  const cells = randomCells(cols, rows, 4);
  return pickN(GRID_SHAPES, 4).map((shape, i) => ({
    shape,
    cell: cells[i]!,
    answer: formatCell(cells[i]!),
  }));
}

export function G6GridReadExercise({ exNum, validateCommand, onValidated, reviewSnapshot, consigne, consigneLang, consigneDir }: ExProps) {
  const readOnly = reviewSnapshot?.kind === "g6_read";
  const [items] = useState(() => (readOnly ? reviewSnapshot.items : genReadItems()));
  const [answers, setAnswers] = useState<CoordAnswer[]>(() =>
    readOnly ? reviewSnapshot.answers : items.map(() => ({ col: "", row: "" })),
  );
  const [validated, setValidated] = useState(readOnly);
  const [results, setResults] = useState<boolean[]>(() =>
    readOnly ? items.map((it, i) => coordAnswerOk(answers[i] ?? { col: "", row: "" }, it.cell)) : [],
  );
  const prev = useRef(-1);

  const doValidate = useCallback(() => {
    if (validated || readOnly) return;
    const res = items.map((it, i) => coordAnswerOk(answers[i] ?? { col: "", row: "" }, it.cell));
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length, res, { kind: "g6_read", items, answers });
  }, [validated, readOnly, items, answers, onValidated]);

  useEffect(() => { if (!readOnly && validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [readOnly, validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Notez les coordonnées des points." />
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {items.map((it, i) => {
          const answer = answers[i] ?? { col: "", row: "" };
          const wrong = validated && !results[i];
          return (
            <div key={it.shape.id} className="flex h-9 items-center gap-3">
              <ShapeGlyph shape={it.shape} className="h-9 w-9 shrink-0" />
              <GridCoordFields
                answer={answer}
                correct={it.cell}
                validated={validated}
                wrong={wrong}
                onChange={(next) => setAnswers((p) => p.map((a, j) => (j === i ? next : a)))}
              />
            </div>
          );
        })}
      </div>
      <LetterGrid
        cols={["a", "b", "c", "d", "e", "f"]}
        rows={[1, 2, 3, 4, 5, 6]}
        placements={items.map((it) => ({ cell: it.cell, shape: it.shape }))}
      />
    </div>
  );
}

// ── Exercice 2 : placer les formes ───────────────────────────────────────────

type PlaceItem = { shape: ShapeIcon; cell: GridCell };

function genPlaceItems(): PlaceItem[] {
  const cols = ["a", "b", "c", "d", "e", "f"];
  const rows = [1, 2, 3, 4, 5, 6];
  const cells = randomCells(cols, rows, 4);
  return pickN(GRID_SHAPES, 4).map((shape, i) => ({ shape, cell: cells[i]! }));
}

export function G6GridPlaceExercise({ exNum, validateCommand, onValidated, reviewSnapshot, consigne, consigneLang, consigneDir }: ExProps) {
  const readOnly = reviewSnapshot?.kind === "g6_place";
  const [items] = useState(() => (readOnly ? reviewSnapshot.items : genPlaceItems()));
  const [selected, setSelected] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, GridCell | null>>(() =>
    readOnly
      ? reviewSnapshot.placements
      : Object.fromEntries(items.map((it) => [it.shape.id, null])),
  );
  const [validated, setValidated] = useState(readOnly);
  const [results, setResults] = useState<boolean[]>(() =>
    readOnly
      ? items.map((it) => {
          const p = placements[it.shape.id];
          return p !== null && cellKey(p) === cellKey(it.cell);
        })
      : [],
  );
  const prev = useRef(-1);

  const onCellClick = (cell: GridCell) => {
    if (readOnly || validated || !selected) return;
    setPlacements((p) => {
      const next = { ...p };
      for (const k of Object.keys(next)) {
        if (next[k] && cellKey(next[k]!) === cellKey(cell)) next[k] = null;
      }
      next[selected] = cell;
      return next;
    });
    setSelected(null);
  };

  const doValidate = useCallback(() => {
    if (validated || readOnly) return;
    const res = items.map((it) => {
      const p = placements[it.shape.id];
      return p !== null && cellKey(p) === cellKey(it.cell);
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length, res, { kind: "g6_place", items, placements });
  }, [validated, readOnly, items, placements, onValidated]);

  useEffect(() => { if (!readOnly && validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [readOnly, validateCommand, doValidate]);

  const displayPlacements: GridPlacement[] = items
    .filter((it) => placements[it.shape.id])
    .map((it) => ({ cell: placements[it.shape.id]!, shape: it.shape }));

  const correctionPlacements: GridPlacement[] = validated
    ? items
        .filter((it, i) => !results[i])
        .map((it) => ({ cell: it.cell, shape: it.shape, fill: SHAPE_CORRECTION_FILL }))
    : [];

  const wrongCells: GridCell[] = validated
    ? items
        .filter((it, i) => !results[i] && placements[it.shape.id])
        .map((it) => placements[it.shape.id]!)
    : [];

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Cliquez sur les formes et placez-les dans les coordonnées indiquées." />
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {items.map((it, i) => {
          const isSel = selected === it.shape.id;
          const ok = validated ? results[i] : null;
          const placed = placements[it.shape.id] !== null;
          const onAccent = placed && !isSel && ok !== false;
          return (
            <button
              key={it.shape.id}
              type="button"
              disabled={validated}
              onClick={() => setSelected(it.shape.id)}
              className={`flex h-9 items-center gap-2 rounded-lg border px-2 transition-colors ${
                isSel
                  ? `border-[var(--color-accent-alg)] ${SHAPE_CELL_FILL}`
                  : ok === false
                    ? "border-amber-400 bg-white"
                    : placed
                      ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]"
                      : "border-[var(--color-border-default)] bg-white"
              }`}
            >
              <ShapeGlyph
                shape={it.shape}
                className="h-8 w-8 shrink-0"
                fill={onAccent ? "#fff" : SHAPE_FILL}
              />
              <GridCoordFields
                answer={{ col: "", row: "" }}
                correct={it.cell}
                validated={validated}
                wrong={false}
                onChange={() => {}}
                readOnly
                onAccent={onAccent}
              />
            </button>
          );
        })}
      </div>
      <LetterGrid
        cols={["a", "b", "c", "d", "e", "f"]}
        rows={[1, 2, 3, 4, 5, 6]}
        placements={displayPlacements}
        correctionPlacements={correctionPlacements}
        wrongCells={wrongCells}
        onCellClick={onCellClick}
        selectedShape={selected}
      />
    </div>
  );
}

// ── Exercice 3 : Où sont-ils ? (grille A–G) ─────────────────────────────────

function genMedievalItems(): Array<{ item: ShapeIcon; cell: GridCell }> {
  const cols = ["A", "B", "C", "D", "E", "F", "G"];
  const rows = [1, 2, 3, 4, 5, 6, 7];
  const cells = randomCells(cols, rows, 3);
  return MEDIEVAL_ITEMS.map((item, i) => ({ item, cell: cells[i]! }));
}

export function G6MedievalLocateExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [items] = useState(() => genMedievalItems());
  const [answers, setAnswers] = useState<string[]>(() => Array(items.length).fill(""));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prev = useRef(-1);

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = items.map((it, i) => parseCellInput(answers[i] ?? "") === cellKey(it.cell));
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, items, answers, onValidated]);

  useEffect(() => { if (validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm font-semibold text-[var(--color-text-primary)]">Où sont-ils ?</p>
      <LetterGrid
        cols={["A", "B", "C", "D", "E", "F", "G"]}
        rows={[1, 2, 3, 4, 5, 6, 7]}
        placements={items.map((it) => ({ cell: it.cell, shape: it.item }))}
      />
      <div className="space-y-3">
        {items.map((it, i) => {
          const v = answers[i] ?? "";
          const wrong = validated && !results[i];
          return (
            <div key={it.item.id} className="flex flex-wrap items-center gap-2 text-sm">
              <span>{it.item.label}</span>
              <span>est sur le point</span>
              {wrong ? (
                <div className={`w-16 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{v || "—"}</span>
                  <span className="text-xs font-bold text-amber-600">{formatCell(it.cell)}</span>
                </div>
              ) : (
                <input type="text" inputMode="text" value={v} disabled={validated}
                  onChange={(e) => setAnswers((p) => p.map((a, j) => j === i ? e.target.value : a))}
                  className={`w-16 px-0 pb-1 text-sm ${MATH_TEXT_INPUT_BASE}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Exercice 3 (G6.1) : coordonnées sur figure — 1er quadrant ───────────────

export function G6Q1FigureCoordsExercise({ exNum, validateCommand, onValidated, reviewSnapshot, consigne, consigneLang, consigneDir }: ExProps) {
  const readOnly = reviewSnapshot?.kind === "g6_q1_figure";
  const [{ figure, askedPoints, xMax, yMax }] = useState(() =>
    readOnly
      ? {
          figure: reviewSnapshot.figure,
          askedPoints: reviewSnapshot.askedPoints,
          xMax: reviewSnapshot.xMax,
          yMax: reviewSnapshot.yMax,
        }
      : genQ1FigureExercise(),
  );
  const [answers, setAnswers] = useState<XYAnswer[]>(() =>
    readOnly ? reviewSnapshot.answers : askedPoints.map(() => ({ x: "", y: "" })),
  );
  const [validated, setValidated] = useState(readOnly);
  const [results, setResults] = useState<boolean[]>(() =>
    readOnly
      ? askedPoints.map((pt, i) => xyAnswerOk(answers[i] ?? { x: "", y: "" }, pt.x, pt.y))
      : [],
  );
  const prev = useRef(-1);

  const doValidate = useCallback(() => {
    if (validated || readOnly) return;
    const res = askedPoints.map((pt, i) => xyAnswerOk(answers[i] ?? { x: "", y: "" }, pt.x, pt.y));
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length, res, {
      kind: "g6_q1_figure",
      figure,
      askedPoints,
      xMax,
      yMax,
      answers,
    });
  }, [validated, readOnly, askedPoints, answers, onValidated, figure, xMax, yMax]);

  useEffect(() => { if (!readOnly && validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [readOnly, validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Notez les coordonnées des points." />
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {askedPoints.map((pt, i) => {
          const answer = answers[i] ?? { x: "", y: "" };
          const wrong = validated && !results[i];
          return (
            <GridXYFields
              key={pt.label}
              label={pt.label}
              answer={answer}
              correctX={pt.x}
              correctY={pt.y}
              validated={validated}
              wrong={wrong}
              onChange={(next) => setAnswers((p) => p.map((a, j) => (j === i ? next : a)))}
            />
          );
        })}
      </div>
      <Q1FigurePlane xMax={xMax} yMax={yMax} polygons={figure.polygons} points={askedPoints} />
    </div>
  );
}

// ── Exercices G6.2 : coordonnées sur figure — cadrants 1–2 ou 3–4 ─────────

type Q2ExProps = ExProps & {
  half: "q12" | "q34";
};

export function G6Q2FigureCoordsExercise({ exNum, validateCommand, onValidated, reviewSnapshot, half, consigne, consigneLang, consigneDir }: Q2ExProps) {
  const readOnly = reviewSnapshot?.kind === "g6_q2_figure";
  const [{ figure, askedPoints, half: activeHalf }] = useState(() =>
    readOnly
      ? {
          figure: reviewSnapshot.figure,
          askedPoints: reviewSnapshot.askedPoints,
          half: reviewSnapshot.half,
        }
      : genQ2FigureExercise(half),
  );
  const bounds = activeHalf === "q12"
    ? { xMin: -10, xMax: 10, yMin: 0, yMax: 10 }
    : { xMin: -10, xMax: 10, yMin: -10, yMax: 0 };
  const [answers, setAnswers] = useState<XYAnswer[]>(() =>
    readOnly ? reviewSnapshot.answers : askedPoints.map(() => ({ x: "", y: "" })),
  );
  const [validated, setValidated] = useState(readOnly);
  const [results, setResults] = useState<boolean[]>(() =>
    readOnly
      ? askedPoints.map((pt, i) => xyAnswerOk(answers[i] ?? { x: "", y: "" }, pt.x, pt.y))
      : [],
  );
  const prev = useRef(-1);

  const doValidate = useCallback(() => {
    if (validated || readOnly) return;
    const res = askedPoints.map((pt, i) => xyAnswerOk(answers[i] ?? { x: "", y: "" }, pt.x, pt.y));
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length, res, {
      kind: "g6_q2_figure",
      half: activeHalf,
      figure,
      askedPoints,
      answers,
    });
  }, [validated, readOnly, askedPoints, answers, onValidated, figure, activeHalf]);

  useEffect(() => { if (!readOnly && validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [readOnly, validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <G6Consigne consigne={consigne} consigneLang={consigneLang} consigneDir={consigneDir}
        fallback="Notez les coordonnées des points." />
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {askedPoints.map((pt, i) => {
          const answer = answers[i] ?? { x: "", y: "" };
          const wrong = validated && !results[i];
          return (
            <GridXYFields
              key={pt.label}
              label={pt.label}
              answer={answer}
              correctX={pt.x}
              correctY={pt.y}
              validated={validated}
              wrong={wrong}
              signed
              onChange={(next) => setAnswers((p) => p.map((a, j) => (j === i ? next : a)))}
            />
          );
        })}
      </div>
      <SignedFigurePlane
        xMin={bounds.xMin}
        xMax={bounds.xMax}
        yMin={bounds.yMin}
        yMax={bounds.yMax}
        polygons={figure.polygons}
        points={askedPoints}
      />
    </div>
  );
}

// ── Exercice 4 (G6.2) : coordonnées sur figure — repère large ────────────────

function parseCoord(raw: string): [number, number] | null {
  const s = raw.trim().replace(/\s+/g, "").replace(/[()]/g, "");
  const parts = s.split(/[;,]/).filter(Boolean);
  if (parts.length !== 2) return null;
  const x = parseInt(parts[0]!, 10);
  const y = parseInt(parts[1]!, 10);
  if (Number.isNaN(x) || Number.isNaN(y)) return null;
  return [x, y];
}

export function G6CartesianCoordsExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [figure] = useState(() => pickN(CARTESIAN_FIGURES, 1)[0]!);
  const [points] = useState(() => pickN(figure.labeledPoints, Math.min(6, figure.labeledPoints.length)));
  const [answers, setAnswers] = useState<string[]>(() => Array(points.length).fill(""));
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prev = useRef(-1);

  const maxX = Math.max(...figure.labeledPoints.map((p) => p.x)) + 2;
  const maxY = Math.max(...figure.labeledPoints.map((p) => p.y)) + 2;
  const unitPx = 4;
  const svgW = 48 + maxX * unitPx;
  const svgH = 48 + maxY * unitPx;

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = points.map((pt, i) => {
      const parsed = parseCoord(answers[i] ?? "");
      return parsed !== null && parsed[0] === pt.x && parsed[1] === pt.y;
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, points, answers, onValidated]);

  useEffect(() => { if (validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Je note les coordonnées des points (x ; y). Chaque petit carré = 2 unités.</p>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} className="mx-auto w-full max-w-lg border border-[var(--color-border-default)] rounded-lg bg-white">
        {Array.from({ length: Math.floor(maxX / 2) + 1 }, (_, i) => i * 2).map((v) => (
          <g key={`gx-${v}`}>
            <line x1={40 + v * unitPx} y1={20} x2={40 + v * unitPx} y2={svgH - 10} stroke="#e2e8f0" strokeWidth={v % 10 === 0 ? 1.2 : 0.5} />
            {v % 10 === 0 && v > 0 && (
              <text x={40 + v * unitPx} y={14} textAnchor="middle" fontSize="9" fill="#64748b">{v}</text>
            )}
          </g>
        ))}
        {Array.from({ length: Math.floor(maxY / 2) + 1 }, (_, i) => i * 2).map((v) => (
          <g key={`gy-${v}`}>
            <line x1={30} y1={svgH - 10 - v * unitPx} x2={svgW - 10} y2={svgH - 10 - v * unitPx} stroke="#e2e8f0" strokeWidth={v % 10 === 0 ? 1.2 : 0.5} />
            {v % 10 === 0 && v > 0 && (
              <text x={18} y={svgH - 6 - v * unitPx} textAnchor="middle" fontSize="9" fill="#64748b">{v}</text>
            )}
          </g>
        ))}
        <line x1={40} y1={svgH - 10} x2={svgW - 10} y2={svgH - 10} stroke="#334155" strokeWidth="1.5" />
        <line x1={40} y1={20} x2={40} y2={svgH - 10} stroke="#334155" strokeWidth="1.5" />
        {figure.polygons.map((poly, i) => (
          <polygon key={i}
            points={poly.points.map(([x, y]) => `${40 + x * unitPx},${svgH - 10 - y * unitPx}`).join(" ")}
            fill={poly.fill} fillOpacity="0.85" stroke="#1e293b" strokeWidth="1" />
        ))}
        {figure.labeledPoints.map((pt) => (
          <text key={pt.label} x={40 + pt.x * unitPx + 4} y={svgH - 10 - pt.y * unitPx - 4}
            fontSize="11" fontWeight="bold" fill="var(--color-accent-alg)">{pt.label}</text>
        ))}
      </svg>
      <div className="grid gap-2 sm:grid-cols-2">
        {points.map((pt, i) => {
          const v = answers[i] ?? "";
          const wrong = validated && !results[i];
          const correct = `(${pt.x} ; ${pt.y})`;
          return (
            <div key={pt.label} className="flex items-center gap-2 text-sm">
              <span className="w-6 font-bold text-[var(--color-accent-alg)]">{pt.label}</span>
              {wrong ? (
                <div className={`w-24 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{v || "—"}</span>
                  <span className="text-xs font-bold text-amber-600">{correct}</span>
                </div>
              ) : (
                <input type="text" inputMode="text" value={v} disabled={validated}
                  onChange={(e) => setAnswers((p) => p.map((a, j) => j === i ? e.target.value : a))}
                  placeholder="(x ; y)"
                  className={`w-24 px-0 pb-1 text-sm ${MATH_TEXT_INPUT_BASE}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Carte avec repères ───────────────────────────────────────────────────────

function MapGrid({
  cols,
  rows,
  landmarks,
  title,
}: {
  cols: string[];
  rows: number[];
  landmarks: typeof GENEVA_LANDMARKS;
  title: string;
}) {
  const cellSize = 36;
  const w = 28 + cols.length * cellSize;
  const h = 44 + rows.length * cellSize;

  return (
    <div className="space-y-2">
      <p className="text-center text-sm font-semibold text-[var(--color-text-primary)]">{title}</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto w-full max-w-2xl border border-[var(--color-border-default)] rounded-lg bg-sky-50/30">
        {cols.map((c, i) => (
          <text key={c} x={28 + i * cellSize + cellSize / 2} y={18}
            textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--color-accent-alg)">{c}</text>
        ))}
        {rows.map((r, i) => (
          <text key={r} x={14} y={36 + i * cellSize + cellSize / 2}
            textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--color-accent-alg)">{r}</text>
        ))}
        {rows.map((row, ri) =>
          cols.map((col, ci) => (
            <rect key={`${col}${row}`}
              x={28 + ci * cellSize + 1} y={28 + ri * cellSize + 1}
              width={cellSize - 2} height={cellSize - 2}
              fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
          )),
        )}
        {landmarks.map((lm) => {
          const ci = colIndex(lm.cell.col);
          const ri = lm.cell.row - 1;
          const cx = 28 + ci * cellSize + cellSize / 2;
          const cy = 28 + ri * cellSize + cellSize / 2;
          return (
            <g key={lm.name}>
              <circle cx={cx} cy={cy} r="3" fill="#1e293b" />
              <text x={cx + 5} y={cy - 2} fontSize="7" fill="#b91c1c" fontWeight="600">{lm.name}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function checkMapAnswer(q: MapQuestion, raw: string): boolean {
  const v = raw.trim();
  if (q.type === "locate") return parseCellInput(v) === q.answer;
  if (q.type === "what_at") {
    const n = normText(v);
    return q.answers.some((a) => normText(a) === n || n.includes(normText(a)) || normText(a).includes(n));
  }
  if (q.type === "distance" || q.type === "distance_h") {
    const n = parseInt(v.replace(/\D/g, ""), 10);
    return n === q.answer;
  }
  if (q.type === "yes_no") {
    const n = normText(v);
    return (q.answer && (n === "oui" || n === "o" || n === "yes" || n === "vrai")) ||
      (!q.answer && (n === "non" || n === "n" || n === "no" || n === "faux"));
  }
  return false;
}

function MapPoolExercise({
  exNum,
  title,
  landmarks,
  pool,
  questionCount,
  validateCommand,
  onValidated,
}: ExProps & {
  title: string;
  landmarks: typeof GENEVA_LANDMARKS;
  pool: MapQuestion[];
  questionCount: number;
}) {
  const [questions] = useState(() => pickN(pool, questionCount).map((q) =>
    q.type === "mcq_at" ? { ...q, options: shuffle(q.options) } : q,
  ));
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [mcqSelected, setMcqSelected] = useState<Record<number, string>>({});
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prev = useRef(-1);

  const cols = useMemo(() => {
    const max = Math.max(...landmarks.map((l) => colIndex(l.cell.col)));
    return Array.from({ length: max + 1 }, (_, i) => String.fromCharCode(65 + i));
  }, [landmarks]);
  const rows = useMemo(() => {
    const max = Math.max(...landmarks.map((l) => l.cell.row));
    return Array.from({ length: max }, (_, i) => i + 1);
  }, [landmarks]);

  const doValidate = useCallback(() => {
    if (validated) return;
    const res = questions.map((q, i) => {
      if (q.type === "mcq_at") return mcqSelected[i] === q.correct;
      return checkMapAnswer(q, answers[i] ?? "");
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, questions, answers, mcqSelected, onValidated]);

  useEffect(() => { if (validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [validateCommand, doValidate]);

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <MapGrid cols={cols} rows={rows} landmarks={landmarks} title={title} />
      <p className="text-sm text-[var(--color-text-secondary)]">Répondez aux questions ci-dessous :</p>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const wrong = validated && !results[i];
          return (
            <div key={i} className="space-y-2 rounded-lg border border-[var(--color-border-default)] p-3">
              <p className="text-sm font-medium">{i + 1}. {q.prompt}</p>
              {q.type === "mcq_at" ? (
                <div className="space-y-1">
                  {q.type === "mcq_at" && q.options.map((opt) => {
                    const sel = mcqSelected[i] === opt;
                    const showWrong = validated && sel && opt !== q.correct;
                    const showRight = validated && opt === q.correct;
                    return (
                      <label key={opt} className={`flex items-center gap-2 text-sm ${showWrong ? "text-amber-600" : showRight ? "text-green-700 font-semibold" : ""}`}>
                        <input type="radio" name={`mcq-${i}`} disabled={validated}
                          checked={sel}
                          onChange={() => setMcqSelected((p) => ({ ...p, [i]: opt }))} />
                        {opt}
                      </label>
                    );
                  })}
                </div>
              ) : wrong ? (
                <div className={`w-full max-w-xs px-0 pb-1 ${CLS_WRONG} flex flex-col`}>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{answers[i] || "—"}</span>
                  <span className="text-xs font-bold text-amber-600">
                    {q.type === "locate" ? q.answer :
                     q.type === "what_at" ? q.answers[0] :
                     q.type === "distance" || q.type === "distance_h" ? String(q.answer) :
                     q.answer ? "Oui" : "Non"}
                  </span>
                </div>
              ) : (
                <input type="text" inputMode="text" value={answers[i] ?? ""} disabled={validated}
                  onChange={(e) => setAnswers((p) => ({ ...p, [i]: e.target.value }))}
                  className={`w-full max-w-xs px-0 pb-1 text-sm ${MATH_TEXT_INPUT_BASE}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function G6MapGenevaExercise(props: ExProps) {
  return (
    <MapPoolExercise
      {...props}
      title="Carte de Genève"
      landmarks={GENEVA_LANDMARKS}
      pool={GENEVA_QUESTION_POOL}
      questionCount={6}
    />
  );
}

export function G6MapBielExercise(props: ExProps) {
  return (
    <MapPoolExercise
      {...props}
      title="Carte de Biel/Bienne"
      landmarks={BIEL_LANDMARKS}
      pool={BIEL_QUESTION_POOL}
      questionCount={6}
    />
  );
}

// ── Exercice 7 : carte topographique Rebeuvelier ─────────────────────────────

function topoToSvg(x: number, y: number, cell: number, padL: number, padB: number, mapH: number): [number, number] {
  return [padL + x * cell, mapH - padB - y * cell];
}

function checkTopoAnswer(q: TopoQuestion, raw: string): boolean {
  const v = raw.trim();
  if (q.type === "yes_no_at") {
    const n = normText(v);
    return (q.answer && (n === "oui" || n === "o" || n === "vrai")) ||
      (!q.answer && (n === "non" || n === "n" || n === "faux"));
  }
  const n = normText(v);
  return q.answers.some((a) => {
    const na = normText(a);
    return n === na || n.includes(na) || na.includes(n);
  });
}

export function G6RebeuvelierExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const cell = 22;
  const padL = 28;
  const padB = 24;
  const padT = 12;
  const mapH = padT + REBEUVELIER_MAP.maxY * cell + padB;

  const [selected, setSelected] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, { x: number; y: number } | null>>(() =>
    Object.fromEntries(REBEUVELIER_PLACE_POINTS.map((p) => [p.label, null])),
  );
  const [readAnswers, setReadAnswers] = useState<Record<string, { x: string; y: string }>>(() =>
    Object.fromEntries(REBEUVELIER_READ_POINTS.map((p) => [p.label, { x: "", y: "" }])),
  );
  const [questions] = useState(() => pickN(REBEUVELIER_QUESTION_POOL, 6));
  const [poolAnswers, setPoolAnswers] = useState<Record<number, string>>({});
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prev = useRef(-1);

  const onMapClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (validated || !selected) return;
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const loc = pt.matrixTransform(ctm.inverse());
    const gx = Math.round((loc.x - padL) / cell);
    const gy = Math.round((mapH - padB - loc.y) / cell);
    if (gx < 0 || gx > REBEUVELIER_MAP.maxX || gy < 0 || gy > REBEUVELIER_MAP.maxY) return;
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
    const res: boolean[] = [];
    for (const pt of REBEUVELIER_PLACE_POINTS) {
      const p = placements[pt.label];
      res.push(p !== null && p.x === pt.x && p.y === pt.y);
    }
    for (const pt of REBEUVELIER_READ_POINTS) {
      const a = readAnswers[pt.label] ?? { x: "", y: "" };
      const x = parseInt(a.x.trim(), 10);
      const y = parseInt(a.y.trim(), 10);
      res.push(x === pt.x && y === pt.y);
    }
    questions.forEach((q, i) => {
      res.push(checkTopoAnswer(q, poolAnswers[i] ?? ""));
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, placements, readAnswers, questions, poolAnswers, onValidated]);

  useEffect(() => { if (validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [validateCommand, doValidate]);

  const placedDisplay = REBEUVELIER_PLACE_POINTS
    .filter((p) => placements[p.label])
    .map((p) => ({ label: p.label, x: placements[p.label]!.x, y: placements[p.label]!.y }));

  let ri = 0;
  const placeResults = REBEUVELIER_PLACE_POINTS.map(() => results[ri++] ?? false);
  const readResults = REBEUVELIER_READ_POINTS.map(() => results[ri++] ?? false);

  return (
    <div className="space-y-6">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">{REBEUVELIER_MAP.title} — repère (x ; y), origine en bas à gauche.</p>

      <div className="cursor-crosshair" onClick={() => {}}>
        <svg viewBox={`0 0 ${padL + REBEUVELIER_MAP.maxX * cell + 12} ${mapH}`}
          className="mx-auto w-full max-w-2xl rounded-lg border border-[var(--color-border-default)] bg-[#f5f0e6]"
          onClick={onMapClick}
        >
          {Array.from({ length: REBEUVELIER_MAP.maxX + 1 }, (_, x) => (
            <line key={`vx-${x}`} x1={padL + x * cell} y1={padT} x2={padL + x * cell} y2={mapH - padB}
              stroke="#d4c4a8" strokeWidth={x % 5 === 0 ? 1 : 0.4} />
          ))}
          {Array.from({ length: REBEUVELIER_MAP.maxY + 1 }, (_, y) => (
            <line key={`hy-${y}`} x1={padL} y1={mapH - padB - y * cell} x2={padL + REBEUVELIER_MAP.maxX * cell + 8} y2={mapH - padB - y * cell}
              stroke="#d4c4a8" strokeWidth={y % 5 === 0 ? 1 : 0.4} />
          ))}
          {Array.from({ length: REBEUVELIER_MAP.maxX + 1 }, (_, x) => (
            <text key={`tx-${x}`} x={padL + x * cell} y={mapH - 6} textAnchor="middle" fontSize="8" fill="#78716c">{x}</text>
          ))}
          {Array.from({ length: REBEUVELIER_MAP.maxY + 1 }, (_, y) => (
            <text key={`ty-${y}`} x={padL - 8} y={mapH - padB - y * cell + 3} textAnchor="middle" fontSize="8" fill="#78716c">{y}</text>
          ))}
          {REBEUVELIER_FOREST_ZONES.map((z, i) => {
            const [x1, y1] = topoToSvg(z.x, z.y + z.h, cell, padL, padB, mapH);
            return <rect key={`f-${i}`} x={x1} y={y1} width={z.w * cell} height={z.h * cell} fill="#86efac" fillOpacity="0.35" />;
          })}
          {REBEUVELIER_PATHS.map((path, i) => (
            <polyline key={`p-${i}`}
              points={path.map(([x, y]) => topoToSvg(x, y, cell, padL, padB, mapH).join(",")).join(" ")}
              fill="none" stroke="#a8a29e" strokeWidth="1" strokeDasharray="3 2" />
          ))}
          {REBEUVELIER_MAP_LABELS.map((lb, i) => {
            const [cx, cy] = topoToSvg(lb.x, lb.y, cell, padL, padB, mapH);
            return <text key={`lb-${i}`} x={cx} y={cy} fontSize={lb.size ?? 7} fill={lb.forest ? "#166534" : "#57534e"}>{lb.text}</text>;
          })}
          {REBEUVELIER_READ_POINTS.map((pt) => {
            const [cx, cy] = topoToSvg(pt.x, pt.y, cell, padL, padB, mapH);
            return (
              <g key={pt.label}>
                <circle cx={cx} cy={cy} r="4" fill="#dc2626" stroke="#fff" strokeWidth="1" />
                <text x={cx + 6} y={cy - 4} fontSize="9" fontWeight="bold" fill="#dc2626">{pt.label}</text>
              </g>
            );
          })}
          {placedDisplay.map((pt) => {
            const [cx, cy] = topoToSvg(pt.x, pt.y, cell, padL, padB, mapH);
            const isDA = pt.label === "D" || pt.label === "A";
            return (
              <g key={`pl-${pt.label}`}>
                <circle cx={cx} cy={cy} r="4.5" fill={isDA ? "#2563eb" : "#dc2626"} stroke="#fff" strokeWidth="1.2" />
                <text x={cx + 6} y={cy + 3} fontSize="9" fontWeight="bold" fill={isDA ? "#2563eb" : "#dc2626"}>{pt.label}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold">Placez sur la carte le départ D, l&apos;arrivée A et les postes P1, P3, P4 et P6.</p>
        <div className="flex flex-wrap gap-2">
          {REBEUVELIER_PLACE_POINTS.map((pt, i) => {
            const isSel = selected === pt.label;
            const ok = validated ? placeResults[i] : null;
            return (
              <button key={pt.label} type="button" disabled={validated}
                onClick={() => setSelected(pt.label)}
                className={`rounded-lg border px-2 py-1 text-xs transition-colors ${
                  isSel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10" :
                  ok === false ? "border-amber-400" : "border-[var(--color-border-default)]"
                }`}
              >
                {pt.label} ({pt.x} ; {pt.y})
              </button>
            );
          })}
        </div>
        <p className="text-xs text-[var(--color-text-secondary)]">Cliquez sur un point, puis sur la carte à l&apos;intersection voulue.</p>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold">Complétez les coordonnées des postes P2, P5, P7 et P8.</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {REBEUVELIER_READ_POINTS.map((pt, i) => {
            const a = readAnswers[pt.label] ?? { x: "", y: "" };
            const wrong = validated && !readResults[i];
            return (
              <div key={pt.label} className="flex items-center gap-2 text-sm">
                <span className="w-8 font-bold text-[var(--color-accent-alg)]">{pt.label}</span>
                <span>(</span>
                {wrong ? (
                  <div className={`w-10 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
                    <span className="text-[10px] text-[var(--color-text-secondary)]">{a.x || "—"}</span>
                    <span className="text-xs font-bold text-amber-600">{pt.x}</span>
                  </div>
                ) : (
                  <input type="text" inputMode="numeric" value={a.x} disabled={validated}
                    onChange={(e) => setReadAnswers((p) => ({ ...p, [pt.label]: { ...a, x: e.target.value.replace(/[^0-9\-]/g, "") } }))}
                    className={`w-10 px-0 pb-1 text-sm text-center ${MATH_TEXT_INPUT_BASE}`} />
                )}
                <span>;</span>
                {wrong ? (
                  <div className={`w-10 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
                    <span className="text-[10px] text-[var(--color-text-secondary)]">{a.y || "—"}</span>
                    <span className="text-xs font-bold text-amber-600">{pt.y}</span>
                  </div>
                ) : (
                  <input type="text" inputMode="numeric" value={a.y} disabled={validated}
                    onChange={(e) => setReadAnswers((p) => ({ ...p, [pt.label]: { ...a, y: e.target.value.replace(/[^0-9\-]/g, "") } }))}
                    className={`w-10 px-0 pb-1 text-sm text-center ${MATH_TEXT_INPUT_BASE}`} />
                )}
                <span>)</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold">Questions sur la carte</p>
        {questions.map((q, i) => {
          const wrong = validated && !results[REBEUVELIER_PLACE_POINTS.length + REBEUVELIER_READ_POINTS.length + i];
          const correctAns = q.type === "yes_no_at" ? (q.answer ? "Oui" : "Non") : q.answers[0];
          return (
            <div key={i} className="space-y-1 rounded-lg border border-[var(--color-border-default)] p-3">
              <p className="text-sm">{i + 1}. {q.prompt}</p>
              {wrong ? (
                <div className={`w-full max-w-xs px-0 pb-1 ${CLS_WRONG} flex flex-col`}>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{poolAnswers[i] || "—"}</span>
                  <span className="text-xs font-bold text-amber-600">{correctAns}</span>
                </div>
              ) : (
                <input type="text" inputMode="text" value={poolAnswers[i] ?? ""} disabled={validated}
                  onChange={(e) => setPoolAnswers((p) => ({ ...p, [i]: e.target.value }))}
                  className={`w-full max-w-xs px-0 pb-1 text-sm ${MATH_TEXT_INPUT_BASE}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
