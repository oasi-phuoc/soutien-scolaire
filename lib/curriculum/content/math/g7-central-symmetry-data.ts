import type { GridPoint, GridSegment } from "./g7-reproduce-data";
import { pointKey, segmentKey } from "./g7-reproduce-data";

/** Grille symétrie centrale G7.3 : 20×20. */
export const G7_CENTRAL_WIDTH = 20;
export const G7_CENTRAL_HEIGHT = 20;
/** Centre de symétrie (point bleu). */
export const G7_CENTRAL_ORIGIN: GridPoint = { x: 10, y: 10 };

export type CentralSymmetryTask = {
  id: string;
  label: string;
  /** Fenêtre de la figure complète centrée sur O (5…13). */
  figureSize: number;
  width: number;
  height: number;
  origin: GridPoint;
  sourceSegments: GridSegment[];
  sourceDots: GridPoint[];
  /** Point d'exemple (côté source) — son image est affichée et reliée en pointillés. */
  examplePoint: GridPoint;
};

export function centralPoint(p: GridPoint, origin: GridPoint = G7_CENTRAL_ORIGIN): GridPoint {
  return { x: 2 * origin.x - p.x, y: 2 * origin.y - p.y };
}

export function centralSegment(s: GridSegment, origin: GridPoint = G7_CENTRAL_ORIGIN): GridSegment {
  const a = centralPoint({ x: s.x1, y: s.y1 }, origin);
  const b = centralPoint({ x: s.x2, y: s.y2 }, origin);
  return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
}

/** Côté « source » : au-dessus du centre, ou sur la ligne y=10 à gauche de O. */
export function isSourceSide(p: GridPoint, origin: GridPoint = G7_CENTRAL_ORIGIN): boolean {
  if (p.x === origin.x && p.y === origin.y) return false;
  if (p.y < origin.y) return true;
  if (p.y > origin.y) return false;
  return p.x < origin.x;
}

/** L'élève dessine le côté image (opposé au côté source). */
export function isDrawSideCentral(p: GridPoint, origin: GridPoint = G7_CENTRAL_ORIGIN): boolean {
  if (p.x === origin.x && p.y === origin.y) return false;
  return !isSourceSide(p, origin);
}

export function expectedCentral(task: CentralSymmetryTask): {
  dots: Set<string>;
  segments: Set<string>;
} {
  const origin = task.origin;
  const exampleImg = pointKey(centralPoint(task.examplePoint, origin));
  const dots = new Set(
    task.sourceDots
      .map((p) => pointKey(centralPoint(p, origin)))
      .filter((k) => k !== exampleImg),
  );
  return {
    segments: new Set(task.sourceSegments.map((s) => segmentKey(centralSegment(s, origin)))),
    dots,
  };
}

function task(
  id: string,
  label: string,
  figureSize: number,
  segs: GridSegment[],
  dots: GridPoint[],
  examplePoint: GridPoint,
): CentralSymmetryTask {
  return {
    id,
    label,
    figureSize,
    width: G7_CENTRAL_WIDTH,
    height: G7_CENTRAL_HEIGHT,
    origin: G7_CENTRAL_ORIGIN,
    sourceSegments: segs,
    sourceDots: dots,
    examplePoint,
  };
}

const CENTRAL_TASKS: CentralSymmetryTask[] = [
  task("C01-fleche", "Flèche 5×5", 5, [{ x1: 10, y1: 8, x2: 8, y2: 9 }, { x1: 8, y1: 9, x2: 9, y2: 9 }, { x1: 9, y1: 9, x2: 11, y2: 9 }, { x1: 11, y1: 9, x2: 12, y2: 9 }, { x1: 12, y1: 9, x2: 10, y2: 8 }], [{ x: 10, y: 8 }], { x: 10, y: 8 }),
  task("C02-toit", "Toit 6×6", 6, [{ x1: 7, y1: 9, x2: 10, y2: 7 }, { x1: 10, y1: 7, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 7, y2: 9 }, { x1: 9, y1: 9, x2: 9, y2: 8 }, { x1: 9, y1: 8, x2: 11, y2: 8 }, { x1: 11, y1: 8, x2: 11, y2: 9 }], [{ x: 10, y: 8 }], { x: 10, y: 7 }),
  task("C03-equerre", "Équerre 7×7", 7, [{ x1: 7, y1: 7, x2: 7, y2: 9 }, { x1: 7, y1: 9, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 13, y2: 8 }, { x1: 13, y1: 8, x2: 8, y2: 8 }, { x1: 8, y1: 8, x2: 8, y2: 7 }, { x1: 8, y1: 7, x2: 7, y2: 7 }], [{ x: 7, y: 8 }], { x: 7, y: 7 }),
  task("C04-zigzag", "Zigzag 8×8", 8, [{ x1: 6, y1: 6, x2: 7, y2: 9 }, { x1: 7, y1: 9, x2: 9, y2: 6 }, { x1: 9, y1: 6, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 11, y2: 6 }, { x1: 11, y1: 6, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 14, y2: 6 }], [{ x: 10, y: 9 }], { x: 6, y: 6 }),
  task("C05-triangle", "Triangle 9×9", 9, [{ x1: 6, y1: 9, x2: 10, y2: 6 }, { x1: 10, y1: 6, x2: 14, y2: 9 }, { x1: 14, y1: 9, x2: 6, y2: 9 }, { x1: 7, y1: 7, x2: 13, y2: 7 }], [{ x: 10, y: 7 }], { x: 10, y: 6 }),
  task("C06-u", "U 10×10", 10, [{ x1: 5, y1: 5, x2: 5, y2: 9 }, { x1: 5, y1: 9, x2: 15, y2: 9 }, { x1: 15, y1: 9, x2: 15, y2: 5 }, { x1: 6, y1: 9, x2: 6, y2: 6 }, { x1: 6, y1: 6, x2: 14, y2: 6 }, { x1: 14, y1: 6, x2: 14, y2: 9 }], [{ x: 10, y: 9 }], { x: 5, y: 5 }),
  task("C07-escalier", "Escalier 11×11", 11, [{ x1: 5, y1: 9, x2: 7, y2: 9 }, { x1: 7, y1: 9, x2: 7, y2: 8 }, { x1: 7, y1: 8, x2: 9, y2: 8 }, { x1: 9, y1: 8, x2: 9, y2: 7 }, { x1: 9, y1: 7, x2: 11, y2: 7 }, { x1: 11, y1: 7, x2: 11, y2: 6 }, { x1: 11, y1: 6, x2: 13, y2: 6 }, { x1: 13, y1: 6, x2: 13, y2: 5 }, { x1: 13, y1: 5, x2: 15, y2: 5 }], [{ x: 15, y: 5 }], { x: 5, y: 9 }),
  task("C08-losange", "Losange 12×12", 12, [{ x1: 10, y1: 4, x2: 16, y2: 6 }, { x1: 16, y1: 6, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 4, y2: 6 }, { x1: 4, y1: 6, x2: 10, y2: 4 }, { x1: 10, y1: 4, x2: 10, y2: 9 }], [{ x: 10, y: 6 }], { x: 10, y: 4 }),
  task("C09-fourche", "Fourche 13×13", 13, [{ x1: 10, y1: 9, x2: 10, y2: 6 }, { x1: 4, y1: 4, x2: 10, y2: 6 }, { x1: 10, y1: 6, x2: 16, y2: 4 }], [{ x: 10, y: 6 }], { x: 4, y: 4 }),
  task("C10-cadre", "Cadre 5×5", 5, [{ x1: 8, y1: 8, x2: 12, y2: 8 }, { x1: 12, y1: 8, x2: 12, y2: 9 }, { x1: 12, y1: 9, x2: 8, y2: 9 }, { x1: 8, y1: 9, x2: 8, y2: 8 }, { x1: 8, y1: 8, x2: 12, y2: 9 }], [{ x: 10, y: 8 }], { x: 8, y: 8 }),
  task("C11-arche", "Arche 6×6", 6, [{ x1: 7, y1: 9, x2: 7, y2: 8 }, { x1: 7, y1: 8, x2: 8, y2: 7 }, { x1: 8, y1: 7, x2: 10, y2: 7 }, { x1: 10, y1: 7, x2: 12, y2: 7 }, { x1: 12, y1: 7, x2: 13, y2: 8 }, { x1: 13, y1: 8, x2: 13, y2: 9 }], [{ x: 10, y: 7 }], { x: 10, y: 7 }),
  task("C12-te", "Té 7×7", 7, [{ x1: 7, y1: 7, x2: 13, y2: 7 }, { x1: 10, y1: 7, x2: 10, y2: 9 }, { x1: 8, y1: 8, x2: 12, y2: 8 }], [{ x: 10, y: 8 }], { x: 10, y: 9 }),
  task("C13-v", "V 8×8", 8, [{ x1: 6, y1: 6, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 14, y2: 6 }], [{ x: 10, y: 7 }], { x: 10, y: 9 }),
  task("C14-peigne", "Peigne 9×9", 9, [{ x1: 6, y1: 9, x2: 14, y2: 9 }, { x1: 6, y1: 9, x2: 6, y2: 6 }, { x1: 10, y1: 9, x2: 10, y2: 6 }, { x1: 14, y1: 9, x2: 14, y2: 6 }, { x1: 8, y1: 9, x2: 8, y2: 7 }, { x1: 12, y1: 9, x2: 12, y2: 7 }], [{ x: 10, y: 7 }], { x: 6, y: 6 }),
  task("C15-trapeze", "Trapèze 10×10", 10, [{ x1: 6, y1: 5, x2: 14, y2: 5 }, { x1: 14, y1: 5, x2: 15, y2: 9 }, { x1: 15, y1: 9, x2: 5, y2: 9 }, { x1: 5, y1: 9, x2: 6, y2: 5 }], [{ x: 10, y: 7 }], { x: 10, y: 5 }),
  task("C16-fleche", "Flèche 11×11", 11, [{ x1: 10, y1: 5, x2: 5, y2: 9 }, { x1: 5, y1: 9, x2: 9, y2: 9 }, { x1: 9, y1: 9, x2: 11, y2: 9 }, { x1: 11, y1: 9, x2: 15, y2: 9 }, { x1: 15, y1: 9, x2: 10, y2: 5 }, { x1: 10, y1: 6, x2: 10, y2: 9 }], [{ x: 10, y: 7 }], { x: 10, y: 5 }),
  task("C17-toit", "Toit 12×12", 12, [{ x1: 4, y1: 9, x2: 10, y2: 4 }, { x1: 10, y1: 4, x2: 16, y2: 9 }, { x1: 16, y1: 9, x2: 4, y2: 9 }, { x1: 9, y1: 9, x2: 9, y2: 5 }, { x1: 9, y1: 5, x2: 11, y2: 5 }, { x1: 11, y1: 5, x2: 11, y2: 9 }], [{ x: 10, y: 6 }], { x: 10, y: 4 }),
  task("C18-equerre", "Équerre 13×13", 13, [{ x1: 4, y1: 4, x2: 4, y2: 9 }, { x1: 4, y1: 9, x2: 16, y2: 9 }, { x1: 16, y1: 9, x2: 16, y2: 8 }, { x1: 16, y1: 8, x2: 5, y2: 8 }, { x1: 5, y1: 8, x2: 5, y2: 4 }, { x1: 5, y1: 4, x2: 4, y2: 4 }], [{ x: 4, y: 6 }], { x: 4, y: 4 }),
  task("C19-zigzag", "Zigzag 5×5", 5, [{ x1: 8, y1: 8, x2: 9, y2: 9 }, { x1: 9, y1: 9, x2: 10, y2: 8 }, { x1: 10, y1: 8, x2: 11, y2: 9 }, { x1: 11, y1: 9, x2: 12, y2: 8 }], [{ x: 10, y: 8 }], { x: 8, y: 8 }),
  task("C20-triangle", "Triangle 6×6", 6, [{ x1: 7, y1: 9, x2: 10, y2: 7 }, { x1: 10, y1: 7, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 7, y2: 9 }, { x1: 8, y1: 8, x2: 12, y2: 8 }], [{ x: 10, y: 8 }], { x: 10, y: 7 }),
  task("C21-u", "U 7×7", 7, [{ x1: 7, y1: 7, x2: 7, y2: 9 }, { x1: 7, y1: 9, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 13, y2: 7 }, { x1: 8, y1: 9, x2: 8, y2: 8 }, { x1: 8, y1: 8, x2: 12, y2: 8 }, { x1: 12, y1: 8, x2: 12, y2: 9 }], [{ x: 10, y: 9 }], { x: 7, y: 7 }),
  task("C22-escalier", "Escalier 8×8", 8, [{ x1: 6, y1: 9, x2: 8, y2: 9 }, { x1: 8, y1: 9, x2: 8, y2: 8 }, { x1: 8, y1: 8, x2: 10, y2: 8 }, { x1: 10, y1: 8, x2: 10, y2: 7 }, { x1: 10, y1: 7, x2: 12, y2: 7 }, { x1: 12, y1: 7, x2: 12, y2: 6 }, { x1: 12, y1: 6, x2: 14, y2: 6 }], [{ x: 14, y: 6 }], { x: 6, y: 9 }),
  task("C23-losange", "Losange 9×9", 9, [{ x1: 10, y1: 6, x2: 14, y2: 7 }, { x1: 14, y1: 7, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 6, y2: 7 }, { x1: 6, y1: 7, x2: 10, y2: 6 }, { x1: 10, y1: 6, x2: 10, y2: 9 }], [{ x: 10, y: 7 }], { x: 10, y: 6 }),
  task("C24-fourche", "Fourche 10×10", 10, [{ x1: 10, y1: 9, x2: 10, y2: 7 }, { x1: 5, y1: 5, x2: 10, y2: 7 }, { x1: 10, y1: 7, x2: 15, y2: 5 }], [{ x: 10, y: 7 }], { x: 5, y: 5 }),
  task("C25-cadre", "Cadre 11×11", 11, [{ x1: 5, y1: 5, x2: 15, y2: 5 }, { x1: 15, y1: 5, x2: 15, y2: 9 }, { x1: 15, y1: 9, x2: 5, y2: 9 }, { x1: 5, y1: 9, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 15, y2: 9 }], [{ x: 10, y: 7 }], { x: 5, y: 5 }),
  task("C26-arche", "Arche 12×12", 12, [{ x1: 4, y1: 9, x2: 4, y2: 6 }, { x1: 4, y1: 6, x2: 7, y2: 4 }, { x1: 7, y1: 4, x2: 10, y2: 4 }, { x1: 10, y1: 4, x2: 13, y2: 4 }, { x1: 13, y1: 4, x2: 16, y2: 6 }, { x1: 16, y1: 6, x2: 16, y2: 9 }], [{ x: 10, y: 4 }], { x: 10, y: 4 }),
  task("C27-te", "Té 13×13", 13, [{ x1: 4, y1: 4, x2: 16, y2: 4 }, { x1: 10, y1: 4, x2: 10, y2: 9 }, { x1: 7, y1: 6, x2: 13, y2: 6 }], [{ x: 10, y: 6 }], { x: 10, y: 9 }),
  task("C28-v", "V 5×5", 5, [{ x1: 8, y1: 8, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 12, y2: 8 }], [{ x: 10, y: 8 }], { x: 10, y: 9 }),
  task("C29-peigne", "Peigne 6×6", 6, [{ x1: 7, y1: 9, x2: 13, y2: 9 }, { x1: 7, y1: 9, x2: 7, y2: 7 }, { x1: 10, y1: 9, x2: 10, y2: 7 }, { x1: 13, y1: 9, x2: 13, y2: 7 }, { x1: 8, y1: 9, x2: 8, y2: 8 }, { x1: 12, y1: 9, x2: 12, y2: 8 }], [{ x: 10, y: 8 }], { x: 7, y: 7 }),
  task("C30-trapeze", "Trapèze 7×7", 7, [{ x1: 8, y1: 7, x2: 12, y2: 7 }, { x1: 12, y1: 7, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 7, y2: 9 }, { x1: 7, y1: 9, x2: 8, y2: 7 }], [{ x: 10, y: 8 }], { x: 10, y: 7 }),
  task("C31-fleche", "Flèche 8×8", 8, [{ x1: 10, y1: 6, x2: 6, y2: 9 }, { x1: 6, y1: 9, x2: 9, y2: 9 }, { x1: 9, y1: 9, x2: 11, y2: 9 }, { x1: 11, y1: 9, x2: 14, y2: 9 }, { x1: 14, y1: 9, x2: 10, y2: 6 }, { x1: 10, y1: 7, x2: 10, y2: 9 }], [{ x: 10, y: 7 }], { x: 10, y: 6 }),
  task("C32-toit", "Toit 9×9", 9, [{ x1: 6, y1: 9, x2: 10, y2: 6 }, { x1: 10, y1: 6, x2: 14, y2: 9 }, { x1: 14, y1: 9, x2: 6, y2: 9 }, { x1: 9, y1: 9, x2: 9, y2: 7 }, { x1: 9, y1: 7, x2: 11, y2: 7 }, { x1: 11, y1: 7, x2: 11, y2: 9 }], [{ x: 10, y: 7 }], { x: 10, y: 6 }),
  task("C33-equerre", "Équerre 10×10", 10, [{ x1: 5, y1: 5, x2: 5, y2: 9 }, { x1: 5, y1: 9, x2: 15, y2: 9 }, { x1: 15, y1: 9, x2: 15, y2: 8 }, { x1: 15, y1: 8, x2: 6, y2: 8 }, { x1: 6, y1: 8, x2: 6, y2: 5 }, { x1: 6, y1: 5, x2: 5, y2: 5 }], [{ x: 5, y: 7 }], { x: 5, y: 5 }),
  task("C34-zigzag", "Zigzag 11×11", 11, [{ x1: 5, y1: 5, x2: 7, y2: 9 }, { x1: 7, y1: 9, x2: 8, y2: 5 }, { x1: 8, y1: 5, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 12, y2: 5 }, { x1: 12, y1: 5, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 15, y2: 5 }], [{ x: 10, y: 9 }], { x: 5, y: 5 }),
  task("C35-triangle", "Triangle 12×12", 12, [{ x1: 4, y1: 9, x2: 10, y2: 4 }, { x1: 10, y1: 4, x2: 16, y2: 9 }, { x1: 16, y1: 9, x2: 4, y2: 9 }, { x1: 5, y1: 6, x2: 15, y2: 6 }], [{ x: 10, y: 6 }], { x: 10, y: 4 }),
  task("C36-u", "U 13×13", 13, [{ x1: 4, y1: 4, x2: 4, y2: 9 }, { x1: 4, y1: 9, x2: 16, y2: 9 }, { x1: 16, y1: 9, x2: 16, y2: 4 }, { x1: 5, y1: 9, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 15, y2: 5 }, { x1: 15, y1: 5, x2: 15, y2: 9 }], [{ x: 10, y: 9 }], { x: 4, y: 4 }),
  task("C37-escalier", "Escalier 5×5", 5, [{ x1: 8, y1: 9, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 10, y2: 8 }, { x1: 10, y1: 8, x2: 12, y2: 8 }], [{ x: 12, y: 8 }], { x: 8, y: 9 }),
  task("C38-losange", "Losange 6×6", 6, [{ x1: 10, y1: 7, x2: 13, y2: 8 }, { x1: 13, y1: 8, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 7, y2: 8 }, { x1: 7, y1: 8, x2: 10, y2: 7 }, { x1: 10, y1: 7, x2: 10, y2: 9 }], [{ x: 10, y: 8 }], { x: 10, y: 7 }),
  task("C39-fourche", "Fourche 7×7", 7, [{ x1: 10, y1: 9, x2: 10, y2: 8 }, { x1: 7, y1: 7, x2: 10, y2: 8 }, { x1: 10, y1: 8, x2: 13, y2: 7 }], [{ x: 10, y: 8 }], { x: 7, y: 7 }),
  task("C40-cadre", "Cadre 8×8", 8, [{ x1: 6, y1: 6, x2: 14, y2: 6 }, { x1: 14, y1: 6, x2: 14, y2: 9 }, { x1: 14, y1: 9, x2: 6, y2: 9 }, { x1: 6, y1: 9, x2: 6, y2: 6 }, { x1: 6, y1: 6, x2: 14, y2: 9 }], [{ x: 10, y: 7 }], { x: 6, y: 6 }),
  task("C41-arche", "Arche 9×9", 9, [{ x1: 6, y1: 9, x2: 6, y2: 7 }, { x1: 6, y1: 7, x2: 8, y2: 6 }, { x1: 8, y1: 6, x2: 10, y2: 6 }, { x1: 10, y1: 6, x2: 12, y2: 6 }, { x1: 12, y1: 6, x2: 14, y2: 7 }, { x1: 14, y1: 7, x2: 14, y2: 9 }], [{ x: 10, y: 6 }], { x: 10, y: 6 }),
  task("C42-te", "Té 10×10", 10, [{ x1: 5, y1: 5, x2: 15, y2: 5 }, { x1: 10, y1: 5, x2: 10, y2: 9 }, { x1: 7, y1: 7, x2: 13, y2: 7 }], [{ x: 10, y: 7 }], { x: 10, y: 9 }),
  task("C43-v", "V 11×11", 11, [{ x1: 5, y1: 5, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 15, y2: 5 }], [{ x: 10, y: 7 }], { x: 10, y: 9 }),
  task("C44-peigne", "Peigne 12×12", 12, [{ x1: 4, y1: 9, x2: 16, y2: 9 }, { x1: 4, y1: 9, x2: 4, y2: 4 }, { x1: 10, y1: 9, x2: 10, y2: 4 }, { x1: 16, y1: 9, x2: 16, y2: 4 }, { x1: 7, y1: 9, x2: 7, y2: 6 }, { x1: 13, y1: 9, x2: 13, y2: 6 }], [{ x: 10, y: 6 }], { x: 4, y: 4 }),
  task("C45-trapeze", "Trapèze 13×13", 13, [{ x1: 5, y1: 4, x2: 15, y2: 4 }, { x1: 15, y1: 4, x2: 16, y2: 9 }, { x1: 16, y1: 9, x2: 4, y2: 9 }, { x1: 4, y1: 9, x2: 5, y2: 4 }], [{ x: 10, y: 6 }], { x: 10, y: 4 }),
  task("C46-fleche", "Flèche 5×5", 5, [{ x1: 10, y1: 8, x2: 8, y2: 9 }, { x1: 8, y1: 9, x2: 9, y2: 9 }, { x1: 9, y1: 9, x2: 11, y2: 9 }, { x1: 11, y1: 9, x2: 12, y2: 9 }, { x1: 12, y1: 9, x2: 10, y2: 8 }], [{ x: 10, y: 8 }], { x: 10, y: 8 }),
  task("C47-toit", "Toit 6×6", 6, [{ x1: 7, y1: 9, x2: 10, y2: 7 }, { x1: 10, y1: 7, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 7, y2: 9 }, { x1: 9, y1: 9, x2: 9, y2: 8 }, { x1: 9, y1: 8, x2: 11, y2: 8 }, { x1: 11, y1: 8, x2: 11, y2: 9 }], [{ x: 10, y: 8 }], { x: 10, y: 7 }),
  task("C48-equerre", "Équerre 7×7", 7, [{ x1: 7, y1: 7, x2: 7, y2: 9 }, { x1: 7, y1: 9, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 13, y2: 8 }, { x1: 13, y1: 8, x2: 8, y2: 8 }, { x1: 8, y1: 8, x2: 8, y2: 7 }, { x1: 8, y1: 7, x2: 7, y2: 7 }], [{ x: 7, y: 8 }], { x: 7, y: 7 }),
  task("C49-zigzag", "Zigzag 8×8", 8, [{ x1: 6, y1: 6, x2: 7, y2: 9 }, { x1: 7, y1: 9, x2: 9, y2: 6 }, { x1: 9, y1: 6, x2: 10, y2: 9 }, { x1: 10, y1: 9, x2: 11, y2: 6 }, { x1: 11, y1: 6, x2: 13, y2: 9 }, { x1: 13, y1: 9, x2: 14, y2: 6 }], [{ x: 10, y: 9 }], { x: 6, y: 6 }),
  task("C50-triangle", "Triangle 9×9", 9, [{ x1: 6, y1: 9, x2: 10, y2: 6 }, { x1: 10, y1: 6, x2: 14, y2: 9 }, { x1: 14, y1: 9, x2: 6, y2: 9 }, { x1: 7, y1: 7, x2: 13, y2: 7 }], [{ x: 10, y: 7 }], { x: 10, y: 6 }),
];

if (CENTRAL_TASKS.length !== 50) {
  throw new Error(`G7.3 central pool: attendu 50, got ${CENTRAL_TASKS.length}`);
}

export function pickCentralSymmetryTask(seed: number): CentralSymmetryTask {
  return CENTRAL_TASKS[Math.abs(seed) % CENTRAL_TASKS.length]!;
}

export function listCentralSymmetryTasks(): CentralSymmetryTask[] {
  return [...CENTRAL_TASKS];
}

export function centralConsigne(_task: CentralSymmetryTask): string {
  return "Complétez la figure par symétrie centrale. Le point bleu est le centre O. Un exemple (trait en pointillés) montre comment un point et son image sont alignés avec O. Cliquez deux points du côté libre pour tracer un segment ; deux fois le même point pour un point.";
}
