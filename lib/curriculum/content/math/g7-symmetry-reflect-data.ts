import type { GridPoint, GridSegment } from "./g7-reproduce-data";
import { pointKey, segmentKey } from "./g7-reproduce-data";

/** Grille réflexion G7.2 ex.2 : 20 colonnes × 10 lignes. */
export const G7_REFLECT_WIDTH = 20;
export const G7_REFLECT_HEIGHT = 10;
/** Axe vertical bleu au centre (10ᵉ colonne / intersection x=10). */
export const G7_REFLECT_AXIS_X = 10;

export type ReflectSide = "left" | "right";

export type SymmetryReflectTask = {
  id: string;
  label: string;
  /** Côté où se trouve la moitié donnée. */
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

/** L'élève dessine du côté opposé à la figure donnée. */
export function isDrawSide(p: GridPoint, task: SymmetryReflectTask): boolean {
  if (p.x === task.axisX) return false;
  return task.side === "left" ? p.x > task.axisX : p.x < task.axisX;
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

function assertSide(id: string, side: ReflectSide, segs: GridSegment[], dots: GridPoint[]) {
  const axis = G7_REFLECT_AXIS_X;
  const vals: number[] = [];
  for (const s of segs) vals.push(s.x1, s.y1, s.x2, s.y2);
  for (const d of dots) vals.push(d.x, d.y);
  for (const v of vals) {
    if (!Number.isInteger(v)) throw new Error(`${id}: non entier ${v}`);
  }
  for (const s of segs) {
    for (const x of [s.x1, s.x2]) {
      if (side === "left" && x > axis) throw new Error(`${id}: point droite x=${x}`);
      if (side === "right" && x < axis) throw new Error(`${id}: point gauche x=${x}`);
      if (x < 0 || x > G7_REFLECT_WIDTH) throw new Error(`${id}: x hors grille ${x}`);
    }
    for (const y of [s.y1, s.y2]) {
      if (y < 0 || y > G7_REFLECT_HEIGHT) throw new Error(`${id}: y hors grille ${y}`);
    }
  }
  for (const d of dots) {
    if (side === "left" && d.x > axis) throw new Error(`${id}: dot droite`);
    if (side === "right" && d.x < axis) throw new Error(`${id}: dot gauche`);
    if (d.x < 0 || d.x > G7_REFLECT_WIDTH || d.y < 0 || d.y > G7_REFLECT_HEIGHT) {
      throw new Error(`${id}: dot hors grille`);
    }
  }
  if (segs.length === 0 && dots.length === 0) throw new Error(`${id}: vide`);
}

function task(
  id: string,
  label: string,
  side: ReflectSide,
  segs: GridSegment[],
  dots: GridPoint[] = [],
): SymmetryReflectTask {
  assertSide(id, side, segs, dots);
  return {
    id,
    label,
    side,
    width: G7_REFLECT_WIDTH,
    height: G7_REFLECT_HEIGHT,
    axisX: G7_REFLECT_AXIS_X,
    sourceSegments: segs,
    sourceDots: dots,
  };
}

// ── 25 figures à GAUCHE (x ≤ 10) ───────────────────────────────────────────

const LEFT_FIGURES: SymmetryReflectTask[] = [
  task("L-church", "Clocher", "left", [
    ...poly([6, 9], [10, 9], [10, 5], [6, 5]),
    ...L([8, 5], [8, 2]),
    ...poly([6, 2], [8, 0], [10, 2]),
    ...L([8, 6], [8, 8]),
  ], D([8, 3])),
  task("L-flag", "Drapeau", "left", [
    ...L([10, 9], [10, 1]),
    ...poly([6, 1], [10, 1], [10, 4], [6, 4]),
    ...L([7, 2], [9, 2], [9, 3], [7, 3], [7, 2]),
  ], D([8, 2])),
  task("L-stairs", "Escalier", "left", [
    ...L([4, 9], [6, 9], [6, 7], [8, 7], [8, 5], [10, 5], [10, 9], [4, 9]),
  ], D([5, 8])),
  task("L-antenna", "Antenne", "left", [
    ...L([10, 9], [10, 3]),
    ...L([7, 3], [10, 3]),
    ...L([7, 3], [5, 1]),
    ...L([7, 3], [5, 5]),
    ...L([8, 3], [8, 1]),
  ], D([5, 1])),
  task("L-window", "Fenêtre", "left", [
    ...poly([5, 2], [10, 2], [10, 8], [5, 8]),
    ...L([5, 5], [10, 5]),
    ...L([7, 2], [7, 8]),
  ], D([6, 3], [8, 6])),
  task("L-sail", "Voile", "left", [
    ...L([10, 9], [10, 1]),
    ...poly([10, 1], [4, 7], [10, 7]),
    ...L([3, 9], [10, 9]),
  ], D([7, 5])),
  task("L-ladder", "Échelle", "left", [
    ...L([6, 1], [6, 9]),
    ...L([9, 1], [9, 9]),
    ...L([6, 2], [9, 2]),
    ...L([6, 4], [9, 4]),
    ...L([6, 6], [9, 6]),
    ...L([6, 8], [9, 8]),
  ], D([7, 5])),
  task("L-arrow", "Flèche", "left", [
    ...L([3, 5], [8, 5]),
    ...poly([8, 3], [10, 5], [8, 7]),
    ...L([3, 4], [3, 6]),
  ], D([5, 5])),
  task("L-arch", "Arche", "left", [
    ...L([5, 9], [5, 4], [7, 2], [10, 2]),
    ...L([10, 2], [10, 9]),
    ...L([5, 9], [10, 9]),
  ], D([7, 5])),
  task("L-crane", "Grue", "left", [
    ...L([8, 9], [8, 3]),
    ...L([4, 3], [10, 3]),
    ...L([4, 3], [4, 5]),
    ...L([6, 9], [10, 9]),
  ], D([4, 4])),
  task("L-bottle", "Bouteille", "left", [
    ...poly([6, 4], [10, 4], [10, 9], [6, 9]),
    ...L([7, 4], [7, 2], [9, 2], [9, 4]),
    ...L([7, 1], [9, 1]),
  ], D([8, 6])),
  task("L-chair", "Chaise", "left", [
    ...L([5, 9], [5, 5], [10, 5]),
    ...L([5, 5], [5, 2]),
    ...L([10, 5], [10, 9]),
    ...L([7, 5], [7, 9]),
  ], D([6, 3])),
  task("L-ramp", "Rampe", "left", [
    ...L([3, 9], [10, 9]),
    ...L([3, 9], [10, 4]),
    ...L([10, 4], [10, 9]),
    ...L([5, 9], [5, 7]),
  ], D([6, 7])),
  task("L-tower", "Tourelle", "left", [
    ...poly([6, 9], [10, 9], [10, 4], [6, 4]),
    ...L([6, 4], [6, 2], [8, 2], [8, 4]),
    ...poly([6, 2], [8, 0], [10, 2]),
  ], D([8, 6])),
  task("L-hook", "Crochet", "left", [
    ...L([10, 1], [10, 8], [7, 8], [7, 6]),
    ...L([8, 1], [10, 1]),
  ], D([8, 7])),
  task("L-zigzag", "Zigzag", "left", [
    ...L([10, 1], [7, 3], [10, 5], [7, 7], [10, 9]),
  ], D([8, 4])),
  task("L-gate", "Portail", "left", [
    ...L([5, 9], [5, 3], [10, 3]),
    ...L([5, 9], [10, 9]),
    ...L([7, 3], [7, 9]),
    ...L([5, 6], [10, 6]),
  ], D([6, 4])),
  task("L-fan", "Éventail", "left", [
    ...L([10, 8], [5, 3]),
    ...L([10, 8], [6, 2]),
    ...L([10, 8], [8, 1]),
    ...L([10, 8], [10, 2]),
  ], D([10, 8])),
  task("L-bench", "Banc", "left", [
    ...L([4, 7], [10, 7]),
    ...L([4, 7], [4, 9]),
    ...L([10, 7], [10, 9]),
    ...L([4, 5], [4, 7]),
    ...L([4, 5], [10, 5]),
  ], D([7, 6])),
  task("L-spike", "Pointe", "left", [
    ...poly([10, 9], [5, 9], [5, 5], [10, 2]),
  ], D([7, 7])),
  task("L-bracket", "Équerre", "left", [
    ...L([5, 2], [5, 9], [10, 9]),
    ...L([5, 2], [8, 2]),
    ...L([7, 9], [7, 6]),
  ], D([6, 5])),
  task("L-dome", "Dôme", "left", [
    ...L([5, 9], [5, 5], [7, 3], [10, 3]),
    ...L([10, 3], [10, 9]),
    ...L([5, 9], [10, 9]),
    ...L([7, 5], [10, 5]),
  ], D([8, 4])),
  task("L-fork", "Fourche", "left", [
    ...L([10, 9], [10, 5]),
    ...L([6, 2], [10, 5]),
    ...L([8, 1], [10, 5]),
    ...L([10, 5], [10, 2]),
  ], D([8, 3])),
  task("L-panel", "Panneau", "left", [
    ...poly([6, 2], [10, 2], [10, 7], [6, 7]),
    ...L([8, 7], [8, 9]),
    ...L([7, 9], [9, 9]),
  ], D([8, 4])),
  task("L-corner", "Coin", "left", [
    ...L([3, 3], [10, 3], [10, 9]),
    ...L([3, 3], [3, 6]),
    ...L([6, 3], [6, 7], [10, 7]),
  ], D([8, 5])),
];

// ── 25 figures à DROITE (x ≥ 10) ───────────────────────────────────────────

const RIGHT_FIGURES: SymmetryReflectTask[] = [
  task("R-lantern", "Lanterne", "right", [
    ...poly([10, 8], [14, 8], [14, 5], [10, 5]),
    ...L([11, 5], [11, 3], [13, 3], [13, 5]),
    ...poly([10, 3], [12, 1], [14, 3]),
  ], D([12, 6])),
  task("R-duck", "Canard", "right", [
    ...L([10, 5], [13, 3], [17, 3], [18, 5], [15, 5], [10, 5]),
    ...L([15, 3], [15, 4], [16, 4], [16, 3]),
  ], D([16, 3])),
  task("R-crane2", "Grue portuaire", "right", [
    ...L([12, 9], [12, 3]),
    ...L([10, 3], [18, 3]),
    ...L([18, 3], [18, 5]),
    ...L([10, 9], [14, 9]),
  ], D([18, 4])),
  task("R-slide", "Toboggan", "right", [
    ...L([10, 2], [10, 9], [16, 9]),
    ...L([10, 2], [16, 7]),
    ...L([14, 9], [14, 8]),
  ], D([12, 5])),
  task("R-shelf", "Étagère", "right", [
    ...L([10, 2], [10, 9], [16, 9]),
    ...L([10, 4], [15, 4]),
    ...L([10, 6], [15, 6]),
    ...L([10, 8], [15, 8]),
  ], D([12, 3])),
  task("R-rocket-fin", "Aileron", "right", [
    ...L([10, 1], [10, 9]),
    ...poly([10, 6], [14, 8], [14, 9], [10, 9]),
    ...L([10, 3], [13, 1]),
  ], D([11, 5])),
  task("R-bridge", "Passerelle", "right", [
    ...L([10, 7], [18, 7]),
    ...L([12, 7], [12, 4], [16, 4], [16, 7]),
    ...L([10, 9], [18, 9]),
  ], D([14, 5])),
  task("R-sign", "Panneau route", "right", [
    ...poly([11, 2], [17, 2], [17, 6], [11, 6]),
    ...L([14, 6], [14, 9]),
    ...L([13, 9], [15, 9]),
  ], D([14, 4])),
  task("R-hammer", "Marteau", "right", [
    ...poly([10, 3], [15, 3], [15, 5], [10, 5]),
    ...L([12, 5], [12, 9]),
  ], D([12, 4])),
  task("R-ramp2", "Plan incliné", "right", [
    ...L([10, 9], [18, 9], [18, 4]),
    ...L([10, 9], [18, 4]),
    ...L([14, 9], [14, 7]),
  ], D([15, 6])),
  task("R-nest", "Nid", "right", [
    ...poly([11, 6], [16, 6], [17, 8], [10, 8]),
    ...L([13, 6], [13, 4], [15, 4]),
  ], D([14, 5])),
  task("R-pulpit", "Pupitre", "right", [
    ...L([10, 9], [10, 5], [16, 4]),
    ...L([16, 4], [16, 9]),
    ...L([10, 9], [16, 9]),
  ], D([13, 6])),
  task("R-comb", "Peigne", "right", [
    ...L([10, 3], [18, 3]),
    ...L([11, 3], [11, 7]),
    ...L([13, 3], [13, 7]),
    ...L([15, 3], [15, 7]),
    ...L([17, 3], [17, 7]),
  ], D([14, 3])),
  task("R-booth", "Cabine", "right", [
    ...poly([10, 4], [15, 4], [15, 9], [10, 9]),
    ...L([10, 4], [12, 2], [15, 4]),
    ...L([12, 6], [13, 6], [13, 8], [12, 8], [12, 6]),
  ], D([12, 3])),
  task("R-wave", "Vague", "right", [
    ...L([10, 6], [12, 4], [14, 6], [16, 4], [18, 6]),
    ...L([10, 8], [18, 8]),
  ], D([14, 5])),
  task("R-pillar", "Pilier", "right", [
    ...poly([11, 2], [14, 2], [14, 9], [11, 9]),
    ...L([10, 2], [15, 2]),
    ...L([10, 9], [15, 9]),
  ], D([12, 5])),
  task("R-hook2", "Anse", "right", [
    ...L([10, 2], [14, 2], [14, 7], [12, 7]),
    ...L([10, 2], [10, 4]),
  ], D([13, 4])),
  task("R-steps", "Marches", "right", [
    ...L([10, 9], [12, 9], [12, 7], [14, 7], [14, 5], [16, 5], [16, 3], [18, 3]),
    ...L([10, 9], [10, 3], [18, 3]),
  ], D([11, 6])),
  task("R-kite-half", "Demi-cerf-volant", "right", [
    ...poly([10, 5], [14, 2], [18, 5], [14, 8]),
    ...L([14, 8], [14, 10]),
  ], D([14, 5])),
  task("R-frame", "Cadre", "right", [
    ...poly([11, 2], [17, 2], [17, 8], [11, 8]),
    ...poly([12, 3], [16, 3], [16, 7], [12, 7]),
  ], D([14, 5])),
  task("R-spike2", "Éperon", "right", [
    ...poly([10, 2], [16, 5], [10, 8]),
    ...L([10, 5], [13, 5]),
  ], D([12, 5])),
  task("R-balcony", "Balcon", "right", [
    ...L([10, 5], [16, 5], [16, 8], [10, 8]),
    ...L([12, 5], [12, 8]),
    ...L([14, 5], [14, 8]),
    ...L([10, 5], [10, 3]),
  ], D([13, 6])),
  task("R-y-shape", "Fourche Y", "right", [
    ...L([10, 9], [13, 5]),
    ...L([13, 5], [16, 2]),
    ...L([13, 5], [18, 5]),
  ], D([13, 5])),
  task("R-box", "Coffre", "right", [
    ...poly([11, 5], [17, 5], [17, 9], [11, 9]),
    ...L([11, 5], [14, 3], [17, 5]),
    ...L([14, 5], [14, 9]),
  ], D([14, 7])),
  task("R-corner2", "Angle", "right", [
    ...L([10, 3], [17, 3], [17, 9]),
    ...L([10, 3], [10, 6]),
    ...L([13, 3], [13, 7], [17, 7]),
  ], D([15, 5])),
];

const REFLECT_TASKS: SymmetryReflectTask[] = [...LEFT_FIGURES, ...RIGHT_FIGURES];

if (LEFT_FIGURES.length !== 25 || RIGHT_FIGURES.length !== 25) {
  throw new Error(`G7.2 reflect pool: left=${LEFT_FIGURES.length} right=${RIGHT_FIGURES.length}`);
}
if (REFLECT_TASKS.length !== 50) {
  throw new Error(`G7.2 reflect pool: attendu 50, got ${REFLECT_TASKS.length}`);
}

export function pickSymmetryReflectTask(seed: number): SymmetryReflectTask {
  return REFLECT_TASKS[Math.abs(seed) % REFLECT_TASKS.length]!;
}

export function listSymmetryReflectTasks(): SymmetryReflectTask[] {
  return [...REFLECT_TASKS];
}

export function reflectConsigne(task: SymmetryReflectTask): string {
  const side = task.side === "left" ? "gauche" : "droite";
  return `Complétez la figure par symétrie axiale. La moitié ${side} est donnée ; l'axe bleu est un axe de symétrie vertical. Cliquez deux points du côté libre pour tracer un segment ; deux fois le même point pour un point.`;
}
