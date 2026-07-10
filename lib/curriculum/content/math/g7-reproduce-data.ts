/** Point de grille (intersection) — coordonnées entières 0…size. */
export type GridPoint = { x: number; y: number };

export type GridSegment = { x1: number; y1: number; x2: number; y2: number };

export type GridFigure = {
  /** Nombre de cases par côté (intersections de 0 à size). */
  size: number;
  dots: GridPoint[];
  segments: GridSegment[];
};

export type ReproduceTaskKind = "copy" | "scale_up" | "scale_down";

export type ReproduceTask = {
  id: string;
  kind: ReproduceTaskKind;
  label: string;
  reference: GridFigure;
  /** Taille de la grille de travail (cases). */
  targetSize: number;
  /** Indices déjà tracés sur la grille cible (aide). */
  hintDots?: GridPoint[];
  hintSegments?: GridSegment[];
};

export function pointKey(p: GridPoint): string {
  return `${p.x},${p.y}`;
}

export function segmentKey(s: GridSegment): string {
  const a = `${s.x1},${s.y1}`;
  const b = `${s.x2},${s.y2}`;
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

export function scalePoint(p: GridPoint, fromSize: number, toSize: number): GridPoint {
  if (fromSize === toSize) return { ...p };
  const k = toSize / fromSize;
  return { x: Math.round(p.x * k), y: Math.round(p.y * k) };
}

export function scaleSegment(s: GridSegment, fromSize: number, toSize: number): GridSegment {
  const p1 = scalePoint({ x: s.x1, y: s.y1 }, fromSize, toSize);
  const p2 = scalePoint({ x: s.x2, y: s.y2 }, fromSize, toSize);
  return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
}

export function expectedFromTask(task: ReproduceTask): { dots: Set<string>; segments: Set<string> } {
  const { reference, targetSize, kind } = task;
  const from = reference.size;
  const to = targetSize;
  const mapDots = reference.dots.map((p) => pointKey(scalePoint(p, from, kind === "scale_down" ? to : kind === "scale_up" ? to : from)));
  const mapSegs = reference.segments.map((s) => segmentKey(scaleSegment(s, from, kind === "copy" ? from : to)));
  return { dots: new Set(mapDots), segments: new Set(mapSegs) };
}

// ── Figures de référence (style manuel CFR) ─────────────────────────────────

const FIG_ROCKET: GridFigure = {
  size: 6,
  dots: [{ x: 3, y: 2 }],
  segments: [
    { x1: 3, y1: 0, x2: 2, y2: 2 },
    { x1: 3, y1: 0, x2: 4, y2: 2 },
    { x1: 2, y1: 2, x2: 4, y2: 2 },
    { x1: 2, y1: 2, x2: 2, y2: 5 },
    { x1: 4, y1: 2, x2: 4, y2: 5 },
    { x1: 2, y1: 5, x2: 4, y2: 5 },
    { x1: 2, y1: 5, x2: 1, y2: 6 },
    { x1: 4, y1: 5, x2: 5, y2: 6 },
  ],
};

const FIG_DIAMOND: GridFigure = {
  size: 6,
  dots: [],
  segments: [
    { x1: 3, y1: 1, x2: 1, y2: 3 },
    { x1: 1, y1: 3, x2: 3, y2: 5 },
    { x1: 3, y1: 5, x2: 5, y2: 3 },
    { x1: 5, y1: 3, x2: 3, y2: 1 },
  ],
};

const FIG_TREE: GridFigure = {
  size: 8,
  dots: [{ x: 4, y: 2 }, { x: 3, y: 4 }],
  segments: [
    { x1: 4, y1: 0, x2: 2, y2: 4 },
    { x1: 4, y1: 0, x2: 6, y2: 4 },
    { x1: 2, y1: 4, x2: 6, y2: 4 },
    { x1: 4, y1: 4, x2: 4, y2: 7 },
    { x1: 3, y1: 7, x2: 5, y2: 7 },
  ],
};

const FIG_DOTS_ROW: GridFigure = {
  size: 8,
  dots: [{ x: 1, y: 4 }, { x: 3, y: 4 }, { x: 5, y: 4 }, { x: 7, y: 4 }],
  segments: [],
};

const FIG_FOX: GridFigure = {
  size: 6,
  dots: [{ x: 2, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 4 }],
  segments: [
    { x1: 1, y1: 5, x2: 3, y2: 1 },
    { x1: 5, y1: 5, x2: 3, y2: 1 },
    { x1: 1, y1: 5, x2: 5, y2: 5 },
    { x1: 2, y1: 0, x2: 1, y2: 2 },
    { x1: 4, y1: 0, x2: 5, y2: 2 },
  ],
};

const FIG_CAR: GridFigure = {
  size: 8,
  dots: [{ x: 2, y: 6 }, { x: 6, y: 6 }],
  segments: [
    { x1: 1, y1: 5, x2: 3, y2: 3 },
    { x1: 3, y1: 3, x2: 7, y2: 3 },
    { x1: 1, y1: 5, x2: 7, y2: 5 },
    { x1: 1, y1: 5, x2: 1, y2: 6 },
    { x1: 7, y1: 5, x2: 7, y2: 6 },
  ],
};

const FIG_ARROW: GridFigure = {
  size: 6,
  dots: [],
  segments: [
    { x1: 1, y1: 3, x2: 4, y2: 3 },
    { x1: 4, y1: 3, x2: 4, y2: 1 },
    { x1: 4, y1: 1, x2: 6, y2: 3 },
    { x1: 4, y1: 3, x2: 6, y2: 5 },
  ],
};

const COPY_TASKS: ReproduceTask[] = [
  { id: "copy-rocket", kind: "copy", label: "Fusée", reference: FIG_ROCKET, targetSize: 6 },
  { id: "copy-diamond", kind: "copy", label: "Losange", reference: FIG_DIAMOND, targetSize: 6 },
  { id: "copy-tree", kind: "copy", label: "Arbre", reference: FIG_TREE, targetSize: 8 },
  { id: "copy-dots", kind: "copy", label: "Points alignés", reference: FIG_DOTS_ROW, targetSize: 8 },
  { id: "copy-fox", kind: "copy", label: "Renard", reference: FIG_FOX, targetSize: 6 },
  { id: "copy-car", kind: "copy", label: "Voiture", reference: FIG_CAR, targetSize: 8, hintSegments: [{ x1: 3, y1: 3, x2: 7, y2: 3 }] },
  { id: "copy-arrow", kind: "copy", label: "Flèche", reference: FIG_ARROW, targetSize: 6 },
];

const SCALE_TASKS: ReproduceTask[] = [
  {
    id: "scale-diamond-up",
    kind: "scale_up",
    label: "Losange agrandi",
    reference: { ...FIG_DIAMOND, size: 4 },
    targetSize: 8,
    hintSegments: [{ x1: 6, y1: 2, x2: 2, y2: 6 }],
  },
  {
    id: "scale-rocket-up",
    kind: "scale_up",
    label: "Fusée agrandie",
    reference: { ...FIG_ROCKET, size: 4 },
    targetSize: 8,
    hintDots: [{ x: 6, y: 4 }],
  },
  {
    id: "scale-tree-down",
    kind: "scale_down",
    label: "Arbre réduit",
    reference: FIG_TREE,
    targetSize: 4,
    hintSegments: [{ x1: 2, y1: 3, x2: 2, y2: 4 }],
  },
  {
    id: "scale-diamond-down",
    kind: "scale_down",
    label: "Losange réduit",
    reference: FIG_DIAMOND,
    targetSize: 3,
  },
  {
    id: "scale-arrow-up",
    kind: "scale_up",
    label: "Flèche agrandie",
    reference: { ...FIG_ARROW, size: 3 },
    targetSize: 6,
  },
];

export function pickReproduceTask(variant: 1 | 2, seed: number): ReproduceTask {
  const pool = variant === 1 ? COPY_TASKS : SCALE_TASKS;
  return pool[Math.abs(seed) % pool.length]!;
}

export function taskConsigne(task: ReproduceTask): string {
  if (task.kind === "copy") {
    return "Reproduisez la figure à l'identique sur le quadrillage de droite. Cliquez deux points pour tracer un segment ; cliquez deux fois le même point pour placer un point.";
  }
  if (task.kind === "scale_up") {
    return "Reproduisez la figure en plus grand sur le quadrillage de droite (même forme, taille doublée).";
  }
  return "Reproduisez la figure en plus petit sur le quadrillage de droite.";
}
