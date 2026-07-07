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
  type GridCell,
  type MapQuestion,
  type ShapeIcon,
  cellKey,
  colIndex,
  formatCell,
  parseCellInput,
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

// ── Grille lettres/chiffres ───────────────────────────────────────────────────

function LetterGrid({
  cols,
  rows,
  cellSize = 40,
  placements,
  highlight,
  onCellClick,
  selectedShape,
  showLabels = true,
}: {
  cols: string[];
  rows: number[];
  cellSize?: number;
  placements?: Array<{ cell: GridCell; shape: ShapeIcon }>;
  highlight?: GridCell[];
  onCellClick?: (cell: GridCell) => void;
  selectedShape?: string | null;
  showLabels?: boolean;
}) {
  const w = 28 + cols.length * cellSize;
  const h = 24 + rows.length * cellSize;
  const placementMap = new Map(
    (placements ?? []).map((p) => [cellKey(p.cell), p.shape]),
  );
  const highlightSet = new Set((highlight ?? []).map(cellKey));

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
          const shape = placementMap.get(key);
          const isHi = highlightSet.has(key);
          return (
            <g key={key}>
              <rect
                x={x + 1} y={y + 1} width={cellSize - 2} height={cellSize - 2}
                fill={isHi ? "#fef08a" : shape ? "#f1f5f9" : "#fff"}
                stroke={onCellClick ? (selectedShape ? "var(--color-accent-alg)" : "#cbd5e1") : "#cbd5e1"}
                strokeWidth={onCellClick ? 1.5 : 1}
                className={onCellClick ? "cursor-pointer" : undefined}
                onClick={() => onCellClick?.(cell)}
              />
              {shape && (
                <g transform={`translate(${x}, ${y}) scale(${(cellSize - 4) / 72})`}>
                  <g dangerouslySetInnerHTML={{ __html: shape.svg }} />
                </g>
              )}
            </g>
          );
        }),
      )}
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

export function G6GridReadExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [items] = useState(() => genReadItems());
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
      <p className="text-sm text-[var(--color-text-secondary)]">Écris le code de chaque forme (colonne ; ligne).</p>
      <LetterGrid
        cols={["a", "b", "c", "d", "e", "f"]}
        rows={[1, 2, 3, 4, 5, 6]}
        placements={items.map((it) => ({ cell: it.cell, shape: it.shape }))}
      />
      <div className="space-y-2">
        {items.map((it, i) => {
          const v = answers[i] ?? "";
          const wrong = validated && !results[i];
          return (
            <div key={it.shape.id} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-slate-100">
                <svg viewBox="0 0 72 72" className="h-6 w-6" dangerouslySetInnerHTML={{ __html: it.shape.svg }} />
              </span>
              <span className="text-sm">(</span>
              {wrong ? (
                <div className={`w-20 px-0 pb-1 ${CLS_WRONG} flex flex-col items-center`}>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{v || "—"}</span>
                  <span className="text-xs font-bold text-amber-600">{formatCell(it.cell)}</span>
                </div>
              ) : (
                <input type="text" inputMode="text" value={v} disabled={validated}
                  onChange={(e) => setAnswers((p) => p.map((a, j) => j === i ? e.target.value : a))}
                  className={`w-20 px-0 pb-1 text-sm ${MATH_TEXT_INPUT_BASE}`} />
              )}
              <span className="text-sm">)</span>
            </div>
          );
        })}
      </div>
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

export function G6GridPlaceExercise({ exNum, validateCommand, onValidated }: ExProps) {
  const [items] = useState(() => genPlaceItems());
  const [selected, setSelected] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, GridCell | null>>(() =>
    Object.fromEntries(items.map((it) => [it.shape.id, null])),
  );
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const prev = useRef(-1);

  const onCellClick = (cell: GridCell) => {
    if (validated || !selected) return;
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
    if (validated) return;
    const res = items.map((it) => {
      const p = placements[it.shape.id];
      return p !== null && cellKey(p) === cellKey(it.cell);
    });
    setResults(res);
    setValidated(true);
    onValidated(res.filter(Boolean).length, res.length);
  }, [validated, items, placements, onValidated]);

  useEffect(() => { if (validateCommand > 0 && validateCommand !== prev.current) { prev.current = validateCommand; doValidate(); } }, [validateCommand, doValidate]);

  const displayPlacements = items
    .filter((it) => placements[it.shape.id])
    .map((it) => ({ cell: placements[it.shape.id]!, shape: it.shape }));

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exNum}</h2>
      <p className="text-sm text-[var(--color-text-secondary)]">Dessine les formes dans les bonnes cases. Clique sur une forme, puis sur la case.</p>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="space-y-2 md:w-40">
          {items.map((it) => {
            const isSel = selected === it.shape.id;
            const ok = validated ? results[items.indexOf(it)] : null;
            return (
              <button key={it.shape.id} type="button" disabled={validated}
                onClick={() => setSelected(it.shape.id)}
                className={`flex w-full items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-sm transition-colors ${
                  isSel ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10" :
                  ok === false ? "border-amber-400" : "border-[var(--color-border-default)]"
                }`}
              >
                <svg viewBox="0 0 72 72" className="h-6 w-6 shrink-0" dangerouslySetInnerHTML={{ __html: it.shape.svg }} />
                <span>({formatCell(it.cell)})</span>
              </button>
            );
          })}
        </div>
        <div className="flex-1">
          <LetterGrid
            cols={["a", "b", "c", "d", "e", "f"]}
            rows={[1, 2, 3, 4, 5, 6]}
            placements={displayPlacements}
            onCellClick={onCellClick}
            selectedShape={selected}
          />
        </div>
      </div>
      {validated && results.some((r) => !r) && (
        <p className="text-xs text-amber-600">Les bonnes cases sont indiquées à gauche.</p>
      )}
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

// ── Exercice 4 : coordonnées sur figure ──────────────────────────────────────

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
