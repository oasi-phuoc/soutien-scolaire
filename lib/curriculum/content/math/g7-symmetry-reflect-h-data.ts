import type { GridFigure, GridPoint, GridSegment } from "./g7-reproduce-data";
import { G7_COPY_FIGURES, pointKey, segmentKey } from "./g7-reproduce-data";

/** Grille réflexion G7.2 ex.3 : 10 colonnes × 20 lignes (symétrie selon l'axe X). */
export const G7_REFLECT_H_WIDTH = 10;
export const G7_REFLECT_H_HEIGHT = 20;
/** Axe horizontal bleu au centre (intersection y=10). */
export const G7_REFLECT_AXIS_Y = 10;

export type ReflectHSide = "top" | "bottom";

export type SymmetryReflectHTask = {
  id: string;
  label: string;
  side: ReflectHSide;
  width: number;
  height: number;
  axisY: number;
  sourceSegments: GridSegment[];
  sourceDots: GridPoint[];
};

export function reflectPointY(p: GridPoint, axisY: number = G7_REFLECT_AXIS_Y): GridPoint {
  return { x: p.x, y: 2 * axisY - p.y };
}

export function reflectSegmentY(s: GridSegment, axisY: number = G7_REFLECT_AXIS_Y): GridSegment {
  const a = reflectPointY({ x: s.x1, y: s.y1 }, axisY);
  const b = reflectPointY({ x: s.x2, y: s.y2 }, axisY);
  return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
}

export function expectedReflectionH(task: SymmetryReflectHTask): {
  dots: Set<string>;
  segments: Set<string>;
} {
  return {
    segments: new Set(task.sourceSegments.map((s) => segmentKey(reflectSegmentY(s, task.axisY)))),
    dots: new Set(task.sourceDots.map((p) => pointKey(reflectPointY(p, task.axisY)))),
  };
}

export function isDrawSideH(p: GridPoint, task: SymmetryReflectHTask): boolean {
  if (p.y === task.axisY) return false;
  return task.side === "top" ? p.y > task.axisY : p.y < task.axisY;
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
  side: ReflectHSide,
  figure: GridFigure,
  dx: number,
  dy: number,
): SymmetryReflectHTask {
  return {
    id,
    label,
    side,
    width: G7_REFLECT_H_WIDTH,
    height: G7_REFLECT_H_HEIGHT,
    axisY: G7_REFLECT_AXIS_Y,
    sourceSegments: figure.segments.map((s) => offsetSeg(s, dx, dy)),
    sourceDots: figure.dots.map((p) => offsetDot(p, dx, dy)),
  };
}

/**
 * Mêmes figures que G7.1 ex.1 (copie 10×10).
 * Alternance haut / bas : source en haut (y 0…10) ou en bas (y 10…20).
 * Grille 10×20 (colonnes × lignes).
 */
const REFLECT_H_TASKS: SymmetryReflectHTask[] = G7_COPY_FIGURES.map(({ id, label, figure }, i) => {
  if (i % 2 === 0) {
    return figureToTask(`H-T-${id}`, label, "top", figure, 0, 0);
  }
  return figureToTask(`H-B-${id}`, label, "bottom", figure, 0, G7_REFLECT_AXIS_Y);
});

if (REFLECT_H_TASKS.length === 0) {
  throw new Error("G7.2 reflect-H pool: aucune figure (G7_COPY_FIGURES vide)");
}

export function pickSymmetryReflectHTask(seed: number): SymmetryReflectHTask {
  return REFLECT_H_TASKS[Math.abs(seed) % REFLECT_H_TASKS.length]!;
}

export function listSymmetryReflectHTasks(): SymmetryReflectHTask[] {
  return [...REFLECT_H_TASKS];
}

export function reflectHConsigne(task: SymmetryReflectHTask): string {
  const side = task.side === "top" ? "haute" : "basse";
  return `Complétez la figure par symétrie axiale. La moitié ${side} est donnée ; l'axe bleu est un axe de symétrie horizontal (axe X). Cliquez deux points du côté libre pour tracer un segment ; deux fois le même point pour un point.`;
}
