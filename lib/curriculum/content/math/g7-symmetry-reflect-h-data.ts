import type { GridPoint, GridSegment } from "./g7-reproduce-data";
import { pointKey, segmentKey } from "./g7-reproduce-data";

/** Grille réflexion G7.2 ex.3 : 20 colonnes × 20 lignes. */
export const G7_REFLECT_H_WIDTH = 20;
export const G7_REFLECT_H_HEIGHT = 20;
/** Axe horizontal bleu au centre (10ᵉ ligne / intersection y=10). */
export const G7_REFLECT_AXIS_Y = 10;

export type ReflectHSide = "top" | "bottom";

export type SymmetryReflectHTask = {
  id: string;
  label: string;
  /** Côté où se trouve la moitié donnée. */
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

/** L'élève dessine du côté opposé à la figure donnée. */
export function isDrawSideH(p: GridPoint, task: SymmetryReflectHTask): boolean {
  if (p.y === task.axisY) return false;
  return task.side === "top" ? p.y > task.axisY : p.y < task.axisY;
}

function L(...pts: Array<[number, number]>): GridSegment[] {
  const segs: GridSegment[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i]!;
    const [x2, y2] = pts[i + 1]!;
    if (x1 === x2 && y1 === y2) continue;
    segs.push({ x1, y1, x2, y2 });
  }
  return segs;
}

function poly(...pts: Array<[number, number]>): GridSegment[] {
  const segs = L(...pts);
  if (pts.length >= 2) {
    const [x1, y1] = pts[pts.length - 1]!;
    const [x2, y2] = pts[0]!;
    if (!(x1 === x2 && y1 === y2)) segs.push({ x1, y1, x2, y2 });
  }
  return segs;
}

function D(...pts: Array<[number, number]>): GridPoint[] {
  return pts.map(([x, y]) => ({ x, y }));
}

function assertSide(id: string, side: ReflectHSide, segs: GridSegment[], dots: GridPoint[]) {
  const axis = G7_REFLECT_AXIS_Y;
  for (const s of segs) {
    for (const y of [s.y1, s.y2]) {
      if (side === "top" && y > axis) throw new Error(`${id}: point bas y=${y}`);
      if (side === "bottom" && y < axis) throw new Error(`${id}: point haut y=${y}`);
      if (y < 0 || y > G7_REFLECT_H_HEIGHT) throw new Error(`${id}: y hors grille ${y}`);
    }
    for (const x of [s.x1, s.x2]) {
      if (x < 0 || x > G7_REFLECT_H_WIDTH) throw new Error(`${id}: x hors grille ${x}`);
    }
  }
  for (const d of dots) {
    if (side === "top" && d.y > axis) throw new Error(`${id}: dot bas`);
    if (side === "bottom" && d.y < axis) throw new Error(`${id}: dot haut`);
    if (d.x < 0 || d.x > G7_REFLECT_H_WIDTH || d.y < 0 || d.y > G7_REFLECT_H_HEIGHT) {
      throw new Error(`${id}: dot hors grille`);
    }
  }
  if (segs.length === 0 && dots.length === 0) throw new Error(`${id}: vide`);
}

function task(
  id: string,
  label: string,
  side: ReflectHSide,
  segs: GridSegment[],
  dots: GridPoint[] = [],
): SymmetryReflectHTask {
  assertSide(id, side, segs, dots);
  return {
    id,
    label,
    side,
    width: G7_REFLECT_H_WIDTH,
    height: G7_REFLECT_H_HEIGHT,
    axisY: G7_REFLECT_AXIS_Y,
    sourceSegments: segs,
    sourceDots: dots,
  };
}

// ── 25 figures en HAUT (y ≤ 10) ────────────────────────────────────────────

const TOP_FIGURES: SymmetryReflectHTask[] = [
  task("T-mountain", "Sommet", "top", [
    ...poly([4, 10], [10, 3], [16, 10]),
    ...L([8, 6], [10, 4], [12, 6]),
  ], D([10, 5])),
  task("T-crown", "Diadème", "top", [
    ...L([5, 10], [5, 6], [8, 8], [10, 4], [12, 8], [15, 6], [15, 10]),
    ...L([5, 10], [15, 10]),
  ], D([10, 6])),
  task("T-arch", "Voûte", "top", [
    ...L([4, 10], [4, 6], [7, 3], [13, 3], [16, 6], [16, 10]),
    ...L([7, 6], [13, 6]),
  ], D([10, 4])),
  task("T-tree", "Sapinette", "top", [
    ...poly([10, 1], [14, 5], [12, 5], [16, 8], [4, 8], [8, 5], [6, 5]),
    ...L([9, 8], [11, 8], [11, 10], [9, 10]),
  ], D([10, 3])),
  task("T-antenna", "Mât", "top", [
    ...L([10, 10], [10, 2]),
    ...L([6, 4], [10, 2], [14, 4]),
    ...L([7, 6], [10, 4], [13, 6]),
  ], D([10, 2])),
  task("T-roof", "Toiture", "top", [
    ...poly([3, 10], [10, 4], [17, 10]),
    ...L([6, 10], [6, 8], [14, 8], [14, 10]),
  ], D([10, 6])),
  task("T-fountain", "Fontaine", "top", [
    ...L([10, 10], [10, 5]),
    ...poly([6, 5], [14, 5], [12, 3], [8, 3]),
    ...L([7, 7], [13, 7]),
  ], D([10, 4])),
  task("T-bridge", "Pont haut", "top", [
    ...L([2, 10], [5, 6], [10, 4], [15, 6], [18, 10]),
    ...L([5, 10], [5, 6]),
    ...L([15, 10], [15, 6]),
  ], D([10, 5])),
  task("T-arrow-up", "Flèche montante", "top", [
    ...poly([10, 2], [14, 6], [12, 6], [12, 10], [8, 10], [8, 6], [6, 6]),
  ], D([10, 4])),
  task("T-castle", "Donjon", "top", [
    ...poly([6, 10], [6, 5], [14, 5], [14, 10]),
    ...L([6, 5], [6, 3], [8, 3], [8, 5]),
    ...L([12, 5], [12, 3], [14, 3], [14, 5]),
    ...poly([8, 3], [10, 1], [12, 3]),
  ], D([10, 7])),
  task("T-fan", "Éventail haut", "top", [
    ...L([10, 10], [4, 4]),
    ...L([10, 10], [7, 3]),
    ...L([10, 10], [10, 2]),
    ...L([10, 10], [13, 3]),
    ...L([10, 10], [16, 4]),
  ], D([10, 10])),
  task("T-ladder", "Échelle haute", "top", [
    ...L([7, 2], [7, 10]),
    ...L([13, 2], [13, 10]),
    ...L([7, 3], [13, 3]),
    ...L([7, 5], [13, 5]),
    ...L([7, 7], [13, 7]),
    ...L([7, 9], [13, 9]),
  ], D([10, 6])),
  task("T-bell", "Cloche", "top", [
    ...poly([7, 4], [10, 2], [13, 4], [14, 8], [6, 8]),
    ...L([6, 8], [14, 8]),
    ...L([10, 8], [10, 10]),
  ], D([10, 5])),
  task("T-kite", "Cerf-volant haut", "top", [
    ...poly([10, 1], [14, 5], [10, 9], [6, 5]),
    ...L([10, 9], [10, 10]),
  ], D([10, 5])),
  task("T-steps", "Gradins", "top", [
    ...L([4, 10], [6, 10], [6, 8], [8, 8], [8, 6], [10, 6], [10, 4], [12, 4], [12, 6], [14, 6], [14, 8], [16, 8], [16, 10]),
    ...L([4, 10], [16, 10]),
  ], D([10, 7])),
  task("T-window", "Baie", "top", [
    ...poly([5, 3], [15, 3], [15, 10], [5, 10]),
    ...L([5, 6], [15, 6]),
    ...L([10, 3], [10, 10]),
  ], D([7, 4], [13, 7])),
  task("T-spike", "Flèche clocher", "top", [
    ...poly([8, 10], [10, 2], [12, 10]),
    ...L([9, 7], [11, 7]),
  ], D([10, 4])),
  task("T-gate", "Portique", "top", [
    ...L([5, 10], [5, 4], [15, 4], [15, 10]),
    ...L([5, 10], [15, 10]),
    ...L([8, 4], [8, 10]),
    ...L([12, 4], [12, 10]),
  ], D([10, 6])),
  task("T-umbrella", "Parasol", "top", [
    ...poly([4, 6], [10, 2], [16, 6]),
    ...L([4, 6], [16, 6]),
    ...L([10, 6], [10, 10]),
  ], D([10, 4])),
  task("T-zigzag", "Zigzag haut", "top", [
    ...L([4, 10], [7, 6], [10, 9], [13, 5], [16, 10]),
  ], D([10, 7])),
  task("T-bowl", "Coupe", "top", [
    ...poly([6, 5], [14, 5], [13, 9], [7, 9]),
    ...L([10, 5], [10, 3]),
    ...L([8, 3], [12, 3]),
  ], D([10, 7])),
  task("T-crane", "Grue haute", "top", [
    ...L([8, 10], [8, 4]),
    ...L([4, 4], [16, 4]),
    ...L([16, 4], [16, 6]),
    ...L([6, 10], [12, 10]),
  ], D([16, 5])),
  task("T-panel", "Panneau haut", "top", [
    ...poly([6, 3], [14, 3], [14, 8], [6, 8]),
    ...L([10, 8], [10, 10]),
    ...L([8, 10], [12, 10]),
  ], D([10, 5])),
  task("T-fork", "Fourche haute", "top", [
    ...L([10, 10], [10, 6]),
    ...L([5, 3], [10, 6]),
    ...L([15, 3], [10, 6]),
    ...L([10, 6], [10, 2]),
  ], D([10, 4])),
  task("T-dome", "Coupole", "top", [
    ...L([5, 10], [5, 6], [8, 3], [12, 3], [15, 6], [15, 10]),
    ...L([5, 10], [15, 10]),
    ...L([8, 6], [12, 6]),
  ], D([10, 4])),
];

// ── 25 figures en BAS (y ≥ 10) ─────────────────────────────────────────────

const BOTTOM_FIGURES: SymmetryReflectHTask[] = [
  task("B-boat", "Coque", "bottom", [
    ...poly([3, 10], [5, 14], [15, 14], [17, 10]),
    ...L([10, 10], [10, 12]),
  ], D([10, 12])),
  task("B-roots", "Racines", "bottom", [
    ...L([10, 10], [10, 14]),
    ...L([10, 14], [5, 18]),
    ...L([10, 14], [8, 17]),
    ...L([10, 14], [12, 17]),
    ...L([10, 14], [15, 18]),
  ], D([10, 14])),
  task("B-stairs", "Escalier bas", "bottom", [
    ...L([4, 10], [6, 10], [6, 12], [8, 12], [8, 14], [10, 14], [10, 16], [12, 16], [12, 18], [16, 18], [16, 10]),
  ], D([7, 11])),
  task("B-anchor", "Ancre basse", "bottom", [
    ...L([10, 10], [10, 17]),
    ...L([5, 14], [15, 14]),
    ...poly([5, 14], [4, 17], [7, 18], [8, 15]),
    ...poly([15, 14], [16, 17], [13, 18], [12, 15]),
  ], D([10, 11])),
  task("B-table", "Table", "bottom", [
    ...L([4, 12], [16, 12]),
    ...L([5, 12], [5, 18]),
    ...L([15, 12], [15, 18]),
    ...L([4, 18], [16, 18]),
  ], D([10, 12])),
  task("B-arrow-down", "Flèche descendante", "bottom", [
    ...poly([10, 18], [6, 14], [8, 14], [8, 10], [12, 10], [12, 14], [14, 14]),
  ], D([10, 16])),
  task("B-basket", "Panier", "bottom", [
    ...poly([5, 12], [15, 12], [14, 18], [6, 18]),
    ...L([5, 12], [7, 10], [13, 10], [15, 12]),
  ], D([10, 14])),
  task("B-ramp", "Descente", "bottom", [
    ...L([3, 10], [17, 10], [17, 16]),
    ...L([3, 10], [17, 16]),
    ...L([8, 10], [8, 12]),
  ], D([12, 13])),
  task("B-swing", "Balançoire", "bottom", [
    ...L([5, 10], [5, 16]),
    ...L([15, 10], [15, 16]),
    ...L([5, 16], [15, 16]),
    ...L([8, 16], [8, 18], [12, 18], [12, 16]),
  ], D([10, 17])),
  task("B-well", "Puits", "bottom", [
    ...poly([7, 12], [13, 12], [13, 18], [7, 18]),
    ...L([6, 12], [14, 12]),
    ...L([10, 10], [10, 12]),
  ], D([10, 15])),
  task("B-comb", "Peigne bas", "bottom", [
    ...L([4, 12], [16, 12]),
    ...L([5, 12], [5, 17]),
    ...L([8, 12], [8, 17]),
    ...L([12, 12], [12, 17]),
    ...L([15, 12], [15, 17]),
  ], D([10, 12])),
  task("B-hook", "Crochet bas", "bottom", [
    ...L([10, 10], [10, 16], [14, 16], [14, 14]),
    ...L([8, 10], [12, 10]),
  ], D([12, 15])),
  task("B-valley", "Vallée", "bottom", [
    ...L([2, 10], [6, 14], [10, 12], [14, 16], [18, 10]),
    ...L([2, 10], [18, 10]),
  ], D([10, 13])),
  task("B-podium", "Podium", "bottom", [
    ...poly([4, 16], [8, 16], [8, 14], [12, 14], [12, 12], [16, 12], [16, 18], [4, 18]),
  ], D([10, 15])),
  task("B-nest", "Nid bas", "bottom", [
    ...poly([6, 14], [14, 14], [15, 17], [5, 17]),
    ...L([9, 14], [9, 12], [11, 12]),
  ], D([10, 15])),
  task("B-pillar", "Colonne", "bottom", [
    ...poly([8, 10], [12, 10], [12, 18], [8, 18]),
    ...L([7, 10], [13, 10]),
    ...L([7, 18], [13, 18]),
  ], D([10, 14])),
  task("B-wave", "Onde", "bottom", [
    ...L([2, 12], [5, 15], [8, 12], [11, 15], [14, 12], [17, 15]),
    ...L([2, 17], [17, 17]),
  ], D([10, 14])),
  task("B-chair", "Siège", "bottom", [
    ...L([6, 10], [6, 14], [14, 14]),
    ...L([6, 14], [6, 18]),
    ...L([14, 14], [14, 18]),
    ...L([10, 14], [10, 18]),
  ], D([8, 12])),
  task("B-frame", "Cadre bas", "bottom", [
    ...poly([5, 12], [15, 12], [15, 18], [5, 18]),
    ...poly([7, 13], [13, 13], [13, 17], [7, 17]),
  ], D([10, 15])),
  task("B-y", "Fourche Y bas", "bottom", [
    ...L([10, 10], [10, 14]),
    ...L([10, 14], [5, 18]),
    ...L([10, 14], [15, 18]),
  ], D([10, 14])),
  task("B-box", "Coffre bas", "bottom", [
    ...poly([5, 13], [15, 13], [15, 18], [5, 18]),
    ...L([5, 13], [10, 11], [15, 13]),
    ...L([10, 13], [10, 18]),
  ], D([10, 15])),
  task("B-spike", "Éperon bas", "bottom", [
    ...poly([10, 10], [16, 14], [10, 18], [4, 14]),
    ...L([10, 10], [10, 14]),
  ], D([10, 14])),
  task("B-balcony", "Balustrade", "bottom", [
    ...L([4, 12], [16, 12], [16, 16], [4, 16]),
    ...L([7, 12], [7, 16]),
    ...L([10, 12], [10, 16]),
    ...L([13, 12], [13, 16]),
    ...L([4, 12], [4, 10]),
  ], D([10, 14])),
  task("B-funnel", "Entonnoir", "bottom", [
    ...poly([4, 10], [16, 10], [13, 16], [7, 16]),
    ...L([8, 16], [8, 18], [12, 18], [12, 16]),
  ], D([10, 13])),
  task("B-corner", "Angle bas", "bottom", [
    ...L([4, 10], [16, 10], [16, 18]),
    ...L([4, 10], [4, 14]),
    ...L([8, 10], [8, 15], [16, 15]),
  ], D([12, 12])),
];

const REFLECT_H_TASKS: SymmetryReflectHTask[] = [...TOP_FIGURES, ...BOTTOM_FIGURES];

if (TOP_FIGURES.length !== 25 || BOTTOM_FIGURES.length !== 25) {
  throw new Error(`G7.2 reflect-H pool: top=${TOP_FIGURES.length} bottom=${BOTTOM_FIGURES.length}`);
}
if (REFLECT_H_TASKS.length !== 50) {
  throw new Error(`G7.2 reflect-H pool: attendu 50, got ${REFLECT_H_TASKS.length}`);
}

export function pickSymmetryReflectHTask(seed: number): SymmetryReflectHTask {
  return REFLECT_H_TASKS[Math.abs(seed) % REFLECT_H_TASKS.length]!;
}

export function listSymmetryReflectHTasks(): SymmetryReflectHTask[] {
  return [...REFLECT_H_TASKS];
}

export function reflectHConsigne(task: SymmetryReflectHTask): string {
  const side = task.side === "top" ? "haute" : "basse";
  return `Complétez la figure par symétrie axiale. La moitié ${side} est donnée ; l'axe bleu est un axe de symétrie horizontal. Cliquez deux points du côté libre pour tracer un segment ; deux fois le même point pour un point.`;
}
