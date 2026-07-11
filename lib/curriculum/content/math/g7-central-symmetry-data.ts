/**
 * G7.3 — Symétrie centrale.
 * Figures dessinées (style G7.1) placées entièrement au-dessus du centre O(10,10).
 */
import type { GridPoint, GridSegment } from "./g7-reproduce-data";
import { pointKey, segmentKey } from "./g7-reproduce-data";

export const G7_CENTRAL_WIDTH = 20;
export const G7_CENTRAL_HEIGHT = 20;
export const G7_CENTRAL_ORIGIN: GridPoint = { x: 10, y: 10 };

export type CentralSymmetryTask = {
  id: string;
  label: string;
  width: number;
  height: number;
  origin: GridPoint;
  sourceSegments: GridSegment[];
  sourceDots: GridPoint[];
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

/** Côté source : au-dessus de O, ou sur y=10 à gauche de O. */
export function isSourceSide(p: GridPoint, origin: GridPoint = G7_CENTRAL_ORIGIN): boolean {
  if (p.x === origin.x && p.y === origin.y) return false;
  if (p.y < origin.y) return true;
  if (p.y > origin.y) return false;
  return p.x < origin.x;
}

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

function poly(pts: Array<[number, number]>): GridSegment[] {
  const out: GridSegment[] = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i]!;
    const b = pts[(i + 1) % pts.length]!;
    out.push({ x1: a[0], y1: a[1], x2: b[0], y2: b[1] });
  }
  return out;
}

function line(...pts: Array<[number, number]>): GridSegment[] {
  const out: GridSegment[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i]!;
    const b = pts[i + 1]!;
    out.push({ x1: a[0], y1: a[1], x2: b[0], y2: b[1] });
  }
  return out;
}

function rect(x: number, y: number, w: number, h: number): GridSegment[] {
  return poly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]]);
}

function dedupeSegs(segs: GridSegment[]): GridSegment[] {
  const seen = new Set<string>();
  const out: GridSegment[] = [];
  for (const s of segs) {
    if (s.x1 === s.x2 && s.y1 === s.y2) continue;
    const k = segmentKey(s);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(s);
  }
  return out;
}

function dedupeDots(dots: GridPoint[]): GridPoint[] {
  const seen = new Set<string>();
  const out: GridPoint[] = [];
  for (const d of dots) {
    const k = pointKey(d);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(d);
  }
  return out;
}

function assertSource(id: string, segs: GridSegment[], dots: GridPoint[]) {
  const pts: GridPoint[] = [...dots];
  for (const s of segs) {
    pts.push({ x: s.x1, y: s.y1 }, { x: s.x2, y: s.y2 });
  }
  for (const p of pts) {
    if (!isSourceSide(p) && !(p.x === 10 && p.y === 10)) {
      throw new Error(`${id}: point hors côté source (${p.x},${p.y})`);
    }
    if (p.x < 0 || p.x > 20 || p.y < 0 || p.y > 20) {
      throw new Error(`${id}: hors grille (${p.x},${p.y})`);
    }
  }
}

function fig(
  id: string,
  label: string,
  segs: GridSegment[],
  dots: GridPoint[],
  examplePoint: GridPoint,
): CentralSymmetryTask {
  const sourceSegments = dedupeSegs(segs);
  const sourceDots = dedupeDots(dots);
  assertSource(id, sourceSegments, [...sourceDots, examplePoint]);
  return {
    id,
    label,
    width: G7_CENTRAL_WIDTH,
    height: G7_CENTRAL_HEIGHT,
    origin: G7_CENTRAL_ORIGIN,
    sourceSegments,
    sourceDots,
    examplePoint,
  };
}

/**
 * Dessins reconnaissables dans la moitié haute (y ≤ 9), centrés autour de x=10.
 * Style G7.1 : maisons, animaux, objets — pas de zigzags / peignes abstraits.
 */
const CENTRAL_TASKS: CentralSymmetryTask[] = [
  fig("house", "Maison", [
    ...poly([[6, 5], [10, 2], [14, 5]]),
    ...rect(6, 5, 8, 4),
    ...rect(9, 7, 2, 2),
    ...rect(7, 6, 1, 1),
    ...rect(12, 6, 1, 1),
  ], [{ x: 10, y: 6 }], { x: 10, y: 2 }),

  fig("boat", "Bateau", [
    ...poly([[5, 7], [7, 9], [13, 9], [15, 7]]),
    ...line([10, 7], [10, 3]),
    ...poly([[10, 3], [14, 6], [10, 6]]),
  ], [{ x: 10, y: 4 }], { x: 10, y: 3 }),

  fig("fish", "Poisson", [
    ...poly([[4, 5], [8, 3], [12, 4], [15, 5], [12, 7], [8, 8]]),
    ...poly([[15, 5], [17, 3], [17, 7]]),
    ...line([8, 4], [9, 5], [8, 6]),
  ], [{ x: 6, y: 4 }], { x: 6, y: 4 }),

  fig("tree", "Arbre", [
    ...poly([[10, 1], [6, 4], [8, 4], [5, 7], [15, 7], [12, 4], [14, 4]]),
    ...rect(9, 7, 2, 2),
  ], [{ x: 10, y: 3 }], { x: 10, y: 1 }),

  fig("rocket", "Fusée", [
    ...poly([[10, 1], [8, 3], [12, 3]]),
    ...rect(8, 3, 4, 4),
    ...poly([[10, 4], [11, 5], [10, 6], [9, 5]]),
    ...poly([[8, 5], [6, 7], [8, 7]]),
    ...poly([[12, 5], [14, 7], [12, 7]]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 1 }),

  fig("cat", "Chat", [
    ...poly([[6, 4], [7, 2], [8, 4], [12, 4], [13, 2], [14, 4], [15, 6], [14, 8], [6, 8], [5, 6]]),
    ...line([8, 7], [10, 8], [12, 7]),
    ...line([7, 8], [7, 9]),
    ...line([13, 8], [13, 9]),
  ], [{ x: 7, y: 5 }, { x: 13, y: 5 }], { x: 7, y: 2 }),

  fig("bird", "Oiseau", [
    ...poly([[6, 5], [8, 3], [12, 2], [15, 4], [14, 6], [10, 7], [7, 6]]),
    ...poly([[15, 4], [17, 3], [16, 5]]),
    ...line([8, 7], [7, 9]),
    ...line([11, 7], [12, 9]),
  ], [{ x: 13, y: 4 }], { x: 12, y: 2 }),

  fig("flower", "Fleur", [
    ...poly([[10, 2], [9, 3], [10, 4], [11, 3]]),
    ...poly([[10, 4], [7, 3], [6, 5], [9, 5]]),
    ...poly([[10, 4], [13, 3], [14, 5], [11, 5]]),
    ...poly([[10, 4], [7, 6], [9, 8], [11, 8], [13, 6]]),
    ...line([10, 8], [10, 9]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 2 }),

  fig("umbrella", "Parapluie", [
    ...poly([[5, 5], [10, 2], [15, 5]]),
    ...line([5, 5], [15, 5]),
    ...line([7, 5], [7, 4]),
    ...line([10, 5], [10, 3]),
    ...line([13, 5], [13, 4]),
    ...line([10, 5], [10, 8], [12, 9]),
  ], [{ x: 10, y: 4 }], { x: 10, y: 2 }),

  fig("butterfly", "Papillon", [
    ...line([10, 3], [10, 8]),
    ...poly([[10, 3], [14, 2], [16, 4], [13, 5], [16, 7], [13, 8], [10, 7]]),
    ...poly([[10, 3], [6, 2], [4, 4], [7, 5], [4, 7], [7, 8], [10, 7]]),
    ...line([10, 3], [9, 2]),
    ...line([10, 3], [11, 2]),
  ], [{ x: 6, y: 4 }, { x: 14, y: 4 }], { x: 6, y: 2 }),

  fig("star", "Étoile", [
    ...poly([[10, 1], [11, 4], [14, 4], [12, 6], [13, 9], [10, 7], [7, 9], [8, 6], [6, 4], [9, 4]]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 1 }),

  fig("heart", "Cœur", [
    ...poly([[10, 8], [6, 5], [6, 3], [8, 1], [10, 3], [12, 1], [14, 3], [14, 5]]),
  ], [{ x: 10, y: 4 }], { x: 10, y: 3 }),

  fig("crown", "Couronne", [
    ...poly([[5, 7], [5, 4], [7, 6], [10, 2], [13, 6], [15, 4], [15, 7]]),
    ...line([5, 7], [15, 7]),
    ...line([6, 7], [6, 8], [14, 8], [14, 7]),
  ], [{ x: 7, y: 5 }, { x: 10, y: 4 }, { x: 13, y: 5 }], { x: 10, y: 2 }),

  fig("anchor", "Ancre", [
    ...poly([[9, 1], [11, 1], [11, 3], [9, 3]]),
    ...line([10, 3], [10, 8]),
    ...line([5, 6], [15, 6]),
    ...poly([[5, 6], [4, 8], [6, 9], [7, 7]]),
    ...poly([[15, 6], [16, 8], [14, 9], [13, 7]]),
    ...line([9, 8], [11, 8]),
  ], [{ x: 10, y: 2 }], { x: 10, y: 1 }),

  fig("lamp", "Lampe", [
    ...poly([[7, 1], [13, 1], [14, 4], [6, 4]]),
    ...line([10, 4], [10, 7]),
    ...rect(7, 7, 6, 1),
    ...line([6, 8], [14, 8]),
  ], [{ x: 10, y: 3 }], { x: 10, y: 1 }),

  fig("ice-cream", "Glace", [
    ...poly([[7, 4], [10, 1], [13, 4]]),
    ...poly([[6, 4], [14, 4], [10, 9]]),
    ...line([7, 4], [8, 2], [12, 2], [13, 4]),
  ], [{ x: 8, y: 2 }, { x: 12, y: 2 }], { x: 10, y: 1 }),

  fig("guitar", "Guitare", [
    ...poly([[7, 4], [10, 3], [13, 4], [14, 7], [10, 9], [6, 7]]),
    ...line([10, 3], [10, 1]),
    ...line([9, 1], [11, 1]),
    ...rect(9, 5, 2, 2),
  ], [{ x: 10, y: 6 }], { x: 10, y: 1 }),

  fig("mountain", "Montagnes", [
    ...poly([[3, 9], [7, 3], [11, 9]]),
    ...poly([[8, 9], [13, 2], [17, 9]]),
    ...line([3, 9], [17, 9]),
    ...line([7, 3], [8, 5], [6, 5], [7, 3]),
    ...line([13, 2], [14, 4], [12, 4], [13, 2]),
  ], [{ x: 10, y: 6 }], { x: 13, y: 2 }),

  fig("sun", "Soleil", [
    ...poly([[7, 4], [10, 3], [13, 4], [14, 6], [13, 8], [10, 9], [7, 8], [6, 6]]),
    ...line([10, 3], [10, 1]),
    ...line([6, 6], [4, 6]),
    ...line([14, 6], [16, 6]),
    ...line([7, 4], [5, 2]),
    ...line([13, 4], [15, 2]),
    ...line([7, 8], [5, 9]),
    ...line([13, 8], [15, 9]),
  ], [{ x: 10, y: 6 }], { x: 10, y: 1 }),

  fig("moon", "Lune", [
    ...poly([[12, 1], [8, 2], [6, 5], [6, 7], [8, 9], [12, 9], [9, 7], [8, 5], [9, 3], [12, 2]]),
  ], [{ x: 13, y: 3 }, { x: 14, y: 5 }, { x: 13, y: 7 }], { x: 12, y: 1 }),

  fig("cup", "Tasse", [
    ...poly([[6, 3], [13, 3], [12, 8], [7, 8]]),
    ...line([13, 4], [15, 4], [15, 7], [13, 7]),
    ...line([6, 9], [13, 9]),
  ], [{ x: 9, y: 5 }], { x: 9, y: 3 }),

  fig("hat", "Bonnet", [
    ...poly([[10, 1], [11, 2], [10, 3], [9, 2]]),
    ...line([6, 5], [10, 3], [14, 5]),
    ...line([6, 5], [6, 7]),
    ...line([14, 5], [14, 7]),
    ...line([6, 6], [7, 5], [8, 6], [10, 5], [12, 6], [13, 5], [14, 6]),
    ...rect(5, 7, 10, 2),
  ], [{ x: 10, y: 2 }], { x: 10, y: 1 }),

  fig("leaf", "Feuille", [
    ...poly([[10, 1], [6, 3], [5, 6], [8, 8], [10, 9], [12, 8], [15, 6], [14, 3]]),
    ...line([10, 1], [10, 9]),
    ...line([10, 4], [6, 3]),
    ...line([10, 4], [14, 3]),
    ...line([10, 6], [5, 6]),
    ...line([10, 6], [15, 6]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 1 }),

  fig("tent", "Tente", [
    ...poly([[4, 9], [10, 2], [16, 9]]),
    ...line([4, 9], [16, 9]),
    ...line([10, 2], [10, 9]),
    ...line([7, 9], [7, 6], [13, 6], [13, 9]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 2 }),

  fig("windmill", "Moulin", [
    ...poly([[7, 5], [10, 3], [13, 5], [13, 9], [7, 9]]),
    ...line([10, 3], [10, 1]),
    ...line([10, 3], [5, 2]),
    ...line([10, 3], [15, 2]),
    ...line([10, 3], [6, 6]),
    ...line([10, 3], [14, 6]),
    ...rect(9, 6, 2, 3),
  ], [{ x: 10, y: 3 }], { x: 10, y: 1 }),

  fig("apple", "Pomme", [
    ...poly([[10, 3], [6, 4], [5, 7], [6, 9], [10, 9], [14, 9], [15, 7], [14, 4]]),
    ...line([10, 3], [10, 1], [12, 2]),
    ...line([10, 3], [9, 2]),
  ], [{ x: 10, y: 6 }], { x: 10, y: 1 }),

  fig("kite", "Cerf-volant", [
    ...poly([[10, 1], [14, 5], [10, 8], [6, 5]]),
    ...line([10, 1], [10, 8]),
    ...line([6, 5], [14, 5]),
    ...line([10, 8], [9, 9], [11, 9], [10, 8]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 1 }),

  fig("clock", "Horloge", [
    ...poly([[7, 2], [13, 2], [15, 4], [15, 7], [13, 9], [7, 9], [5, 7], [5, 4]]),
    ...line([10, 5], [10, 3]),
    ...line([10, 5], [13, 6]),
    ...line([10, 2], [10, 1]),
    ...line([5, 5], [4, 5]),
    ...line([15, 5], [16, 5]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 1 }),

  fig("owl", "Hibou", [
    ...poly([[6, 4], [7, 1], [8, 3], [12, 3], [13, 1], [14, 4], [15, 6], [13, 9], [7, 9], [5, 6]]),
    ...poly([[7, 5], [8, 4], [9, 5], [8, 6]]),
    ...poly([[11, 5], [12, 4], [13, 5], [12, 6]]),
    ...line([8, 7], [10, 8], [12, 7]),
  ], [{ x: 8, y: 5 }, { x: 12, y: 5 }], { x: 7, y: 1 }),

  fig("lighthouse", "Phare", [
    ...poly([[7, 9], [8, 3], [12, 3], [13, 9]]),
    ...rect(7, 1, 6, 2),
    ...line([6, 9], [14, 9]),
    ...rect(9, 4, 2, 1),
    ...rect(9, 6, 2, 1),
  ], [{ x: 10, y: 2 }], { x: 10, y: 1 }),

  fig("crab", "Crabe", [
    ...poly([[6, 4], [8, 3], [12, 3], [14, 4], [14, 7], [12, 8], [8, 8], [6, 7]]),
    ...line([6, 4], [4, 2]),
    ...line([6, 5], [4, 4]),
    ...line([14, 4], [16, 2]),
    ...line([14, 5], [16, 4]),
    ...line([8, 8], [7, 9]),
    ...line([9, 8], [9, 9]),
    ...line([11, 8], [11, 9]),
    ...line([12, 8], [13, 9]),
  ], [{ x: 8, y: 4 }, { x: 12, y: 4 }], { x: 4, y: 2 }),

  fig("present", "Cadeau", [
    ...rect(5, 4, 10, 5),
    ...line([10, 4], [10, 9]),
    ...line([5, 6], [15, 6]),
    ...poly([[7, 4], [8, 2], [10, 4], [12, 2], [13, 4]]),
  ], [{ x: 10, y: 6 }], { x: 8, y: 2 }),

  fig("fir", "Sapin", [
    ...poly([[10, 1], [13, 3], [12, 3], [15, 5], [14, 5], [16, 8], [4, 8], [6, 5], [5, 5], [8, 3], [7, 3]]),
    ...rect(9, 8, 2, 1),
  ], [{ x: 10, y: 2 }, { x: 7, y: 6 }, { x: 12, y: 6 }], { x: 10, y: 1 }),

  fig("fox", "Renard", [
    ...poly([[5, 3], [6, 1], [8, 3], [12, 3], [14, 1], [15, 3], [16, 5], [14, 8], [6, 8], [4, 5]]),
    ...poly([[8, 6], [10, 7], [12, 6]]),
    ...line([7, 8], [7, 9]),
    ...line([13, 8], [13, 9]),
  ], [{ x: 7, y: 4 }, { x: 13, y: 4 }], { x: 6, y: 1 }),

  fig("sailboat", "Voilier", [
    ...poly([[5, 8], [7, 9], [14, 9], [15, 8]]),
    ...line([10, 8], [10, 2]),
    ...poly([[10, 2], [14, 7], [10, 7]]),
    ...line([10, 2], [7, 6], [10, 6]),
  ], [{ x: 10, y: 4 }], { x: 10, y: 2 }),

  fig("cactus", "Cactus", [
    ...rect(9, 3, 2, 6),
    ...line([9, 5], [6, 5], [6, 7], [7, 7], [7, 6], [9, 6]),
    ...line([11, 4], [14, 4], [14, 6], [13, 6], [13, 5], [11, 5]),
    ...poly([[9, 3], [10, 1], [11, 3]]),
  ], [{ x: 10, y: 2 }], { x: 10, y: 1 }),

  fig("snowman", "Bonhomme de neige", [
    ...poly([[8, 5], [10, 4], [12, 5], [12, 7], [10, 8], [8, 7]]),
    ...poly([[7, 7], [10, 6], [13, 7], [13, 9], [10, 9], [7, 9]]),
    ...poly([[9, 2], [10, 1], [11, 2], [11, 4], [9, 4]]),
    ...line([8, 3], [7, 2]),
    ...line([12, 3], [13, 2]),
  ], [{ x: 9, y: 3 }, { x: 11, y: 3 }], { x: 10, y: 1 }),

  fig("palm", "Palmier", [
    ...line([10, 9], [10, 5]),
    ...poly([[10, 5], [6, 3], [7, 2], [10, 4]]),
    ...poly([[10, 5], [14, 3], [13, 2], [10, 4]]),
    ...poly([[10, 5], [8, 1], [10, 2], [12, 1], [10, 4]]),
    ...line([8, 9], [12, 9]),
  ], [{ x: 10, y: 3 }], { x: 8, y: 1 }),

  fig("submarine", "Sous-marin", [
    ...poly([[4, 6], [6, 4], [14, 4], [16, 6], [14, 8], [6, 8]]),
    ...rect(9, 2, 2, 2),
    ...line([10, 2], [10, 1]),
    ...poly([[16, 6], [18, 5], [18, 7]]),
    ...line([6, 6], [4, 5]),
    ...line([6, 6], [4, 7]),
  ], [{ x: 7, y: 5 }, { x: 12, y: 5 }], { x: 10, y: 1 }),

  fig("helicopter", "Hélicoptère", [
    ...rect(7, 5, 6, 3),
    ...poly([[13, 6], [16, 5], [16, 8], [13, 7]]),
    ...line([10, 5], [10, 3]),
    ...line([5, 3], [15, 3]),
    ...line([8, 8], [8, 9]),
    ...line([12, 8], [12, 9]),
    ...line([7, 9], [13, 9]),
  ], [{ x: 9, y: 6 }, { x: 11, y: 6 }], { x: 5, y: 3 }),

  fig("bell", "Cloche", [
    ...poly([[7, 4], [10, 2], [13, 4], [14, 7], [6, 7]]),
    ...line([6, 7], [14, 7]),
    ...line([10, 2], [10, 1]),
    ...rect(9, 1, 2, 1),
    ...line([10, 7], [10, 8]),
    ...poly([[9, 8], [10, 9], [11, 8]]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 1 }),

  fig("pencil", "Crayon", [
    ...poly([[8, 2], [12, 2], [12, 7], [10, 9], [8, 7]]),
    ...line([8, 4], [12, 4]),
    ...line([8, 7], [12, 7]),
    ...line([10, 7], [10, 9]),
    ...rect(9, 5, 2, 1),
  ], [{ x: 10, y: 3 }], { x: 10, y: 2 }),

  fig("book", "Livre", [
    ...poly([[5, 3], [10, 4], [15, 3], [15, 8], [10, 9], [5, 8]]),
    ...line([10, 4], [10, 9]),
    ...line([5, 5], [10, 6]),
    ...line([10, 6], [15, 5]),
    ...line([5, 7], [10, 8]),
    ...line([10, 8], [15, 7]),
  ], [{ x: 10, y: 6 }], { x: 10, y: 4 }),

  fig("shield", "Bouclier", [
    ...poly([[6, 2], [14, 2], [15, 5], [10, 9], [5, 5]]),
    ...line([10, 2], [10, 9]),
    ...line([6, 2], [10, 5], [14, 2]),
  ], [{ x: 10, y: 5 }], { x: 10, y: 2 }),

  fig("mushroom", "Champignon", [
    ...poly([[5, 5], [10, 2], [15, 5]]),
    ...line([5, 5], [15, 5]),
    ...rect(8, 5, 4, 4),
    ...line([7, 4], [8, 3]),
    ...line([12, 3], [13, 4]),
  ], [{ x: 10, y: 3 }, { x: 7, y: 4 }, { x: 13, y: 4 }], { x: 10, y: 2 }),

  fig("key", "Clé", [
    ...poly([[6, 2], [9, 2], [10, 3], [10, 5], [9, 6], [6, 6], [5, 5], [5, 3]]),
    ...line([10, 3], [15, 3]),
    ...line([15, 3], [15, 6]),
    ...line([13, 3], [13, 5]),
    ...line([14, 3], [14, 5]),
  ], [{ x: 7, y: 4 }], { x: 7, y: 2 }),

  fig("castle", "Château", [
    ...rect(5, 5, 10, 4),
    ...line([5, 5], [5, 3], [6, 3], [6, 5]),
    ...line([9, 5], [9, 2], [11, 2], [11, 5]),
    ...line([14, 5], [14, 3], [15, 3], [15, 5]),
    ...poly([[9, 2], [10, 1], [11, 2]]),
    ...rect(9, 7, 2, 2),
  ], [{ x: 10, y: 6 }], { x: 10, y: 1 }),

  fig("car", "Voiture", [
    ...poly([[4, 6], [6, 4], [12, 4], [15, 6], [15, 8], [4, 8]]),
    ...rect(6, 4, 2, 2),
    ...rect(10, 4, 2, 2),
    ...poly([[5, 8], [6, 7], [7, 8]]),
    ...poly([[12, 8], [13, 7], [14, 8]]),
  ], [{ x: 7, y: 5 }, { x: 11, y: 5 }], { x: 6, y: 4 }),

  fig("plane", "Avion", [
    ...poly([[5, 5], [8, 4], [14, 4], [16, 5], [14, 6], [8, 6]]),
    ...line([10, 4], [6, 2]),
    ...line([10, 6], [6, 8]),
    ...line([14, 4], [16, 2]),
    ...line([14, 6], [16, 8]),
  ], [{ x: 10, y: 5 }], { x: 6, y: 2 }),

  fig("turtle", "Tortue", [
    ...poly([[6, 4], [10, 2], [14, 4], [14, 6], [12, 8], [10, 9], [8, 8], [6, 6]]),
    ...line([10, 2], [10, 9]),
    ...line([6, 4], [12, 7]),
    ...line([14, 4], [8, 7]),
    ...poly([[14, 4], [16, 3], [16, 5]]),
    ...line([8, 8], [7, 9]),
    ...line([12, 8], [13, 9]),
  ], [{ x: 16, y: 4 }], { x: 10, y: 2 }),
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
  return "Complétez la figure par symétrie centrale. Le point bleu est le centre O. Un exemple (trait en pointillés) montre comment un point et son image sont alignés avec O.";
}
