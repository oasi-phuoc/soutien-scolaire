import type { GridFigure, GridPoint, GridSegment } from "./g7-reproduce-data";
import { G7_COPY_FIGURES, pointKey, segmentKey } from "./g7-reproduce-data";

/** Grille réflexion G7.2 ex.2 : 20 colonnes × 10 lignes (symétrie selon l'axe Y). */
export const G7_REFLECT_WIDTH = 20;
export const G7_REFLECT_HEIGHT = 10;
/** Axe vertical bleu au centre (intersection x=10). */
export const G7_REFLECT_AXIS_X = 10;

export type ReflectSide = "left" | "right";

export type SymmetryReflectTask = {
  id: string;
  label: string;
  side: ReflectSide;
  width: number;
  height: number;
  axisX: number;
  sourceSegments: GridSegment[];
  sourceDots: GridPoint[];
};

export function reflectPointX(p: GridPoint, axisX: number = G7_REFLECT_AXIS_X): GridPoint {
  return { x: 2 * axisX - p.x, y: p.y };
}

export function reflectSegmentX(s: GridSegment, axisX: number = G7_REFLECT_AXIS_X): GridSegment {
  const a = reflectPointX({ x: s.x1, y: s.y1 }, axisX);
  const b = reflectPointX({ x: s.x2, y: s.y2 }, axisX);
  return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
}

export function expectedReflection(task: SymmetryReflectTask): {
  dots: Set<string>;
  segments: Set<string>;
} {
  return {
    segments: new Set(task.sourceSegments.map((s) => segmentKey(reflectSegmentX(s, task.axisX)))),
    dots: new Set(task.sourceDots.map((p) => pointKey(reflectPointX(p, task.axisX)))),
  };
}

export function isDrawSide(p: GridPoint, task: SymmetryReflectTask): boolean {
  if (p.x === task.axisX) return false;
  return task.side === "left" ? p.x > task.axisX : p.x < task.axisX;
}

function offsetSeg(s: GridSegment, dx: number, dy: number): GridSegment {
  return { x1: s.x1 + dx, y1: s.y1 + dy, x2: s.x2 + dx, y2: s.y2 + dy };
}

function offsetDot(p: GridPoint, dx: number, dy: number): GridPoint {
  return { x: p.x + dx, y: p.y + dy };
}

function figureToTask(
  id: string,
  label: string,
  side: ReflectSide,
  figure: GridFigure,
  dx: number,
  dy: number,
): SymmetryReflectTask {
  return {
    id,
    label,
    side,
    width: G7_REFLECT_WIDTH,
    height: G7_REFLECT_HEIGHT,
    axisX: G7_REFLECT_AXIS_X,
    sourceSegments: figure.segments.map((s) => offsetSeg(s, dx, dy)),
    sourceDots: figure.dots.map((p) => offsetDot(p, dx, dy)),
  };
}

/**
 * Mêmes figures que G7.1 ex.1 (copie 10×10).
 * Alternance gauche / droite : source à gauche (x 0…10) ou à droite (x 10…20).
 */
const REFLECT_TASKS: SymmetryReflectTask[] = G7_COPY_FIGURES.map(({ id, label, figure }, i) => {
  if (i % 2 === 0) {
    return figureToTask(`V-L-${id}`, label, "left", figure, 0, 0);
  }
  return figureToTask(`V-R-${id}`, label, "right", figure, G7_REFLECT_AXIS_X, 0);
});

if (REFLECT_TASKS.length === 0) {
  throw new Error("G7.2 reflect pool: aucune figure (G7_COPY_FIGURES vide)");
}

export function pickSymmetryReflectTask(seed: number): SymmetryReflectTask {
  return REFLECT_TASKS[Math.abs(seed) % REFLECT_TASKS.length]!;
}

export function listSymmetryReflectTasks(): SymmetryReflectTask[] {
  return [...REFLECT_TASKS];
}

export function reflectConsigne(task: SymmetryReflectTask): string {
  const side = task.side === "left" ? "gauche" : "droite";
  return `Complétez la figure par symétrie axiale. La moitié ${side} est donnée ; l'axe bleu est un axe de symétrie vertical (axe Y). Cliquez deux points du côté libre pour tracer un segment ; deux fois le même point pour un point.`;
}
