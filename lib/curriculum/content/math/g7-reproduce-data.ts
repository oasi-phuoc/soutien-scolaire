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

/** Ex. 2 — quatre points légèrement incurvés (colonne). */
const FIG_DOTS_CURVE: GridFigure = {
  size: 6,
  dots: [{ x: 2, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4 }],
  segments: [],
};

/** Ex. 2 — deux points (yeux) sur la moitié supérieure. */
const FIG_EYES: GridFigure = {
  size: 6,
  dots: [{ x: 2, y: 2 }, { x: 4, y: 2 }],
  segments: [],
};

/** Ex. 2 — sapin de Noël avec points marqués. */
const FIG_XMAS_TREE: GridFigure = {
  size: 8,
  dots: [{ x: 4, y: 1 }, { x: 3, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 5 }],
  segments: [
    { x1: 4, y1: 0, x2: 2, y2: 4 },
    { x1: 4, y1: 0, x2: 6, y2: 4 },
    { x1: 2, y1: 4, x2: 6, y2: 4 },
    { x1: 3, y1: 4, x2: 4, y2: 6 },
    { x1: 5, y1: 4, x2: 4, y2: 6 },
    { x1: 2, y1: 4, x2: 3, y2: 6 },
    { x1: 6, y1: 4, x2: 5, y2: 6 },
    { x1: 3, y1: 6, x2: 5, y2: 6 },
    { x1: 4, y1: 6, x2: 4, y2: 8 },
    { x1: 3, y1: 8, x2: 5, y2: 8 },
  ],
};

/** Ex. 2 — suite de triangles inversés + crochet. */
const FIG_TRIANGLES_HOOK: GridFigure = {
  size: 10,
  dots: [{ x: 1, y: 3 }, { x: 3, y: 3 }, { x: 5, y: 3 }, { x: 7, y: 3 }, { x: 9, y: 3 }],
  segments: [
    { x1: 0, y1: 4, x2: 2, y2: 4 },
    { x1: 1, y1: 4, x2: 1, y2: 2 },
    { x1: 0, y1: 4, x2: 1, y2: 2 },
    { x1: 2, y1: 4, x2: 1, y2: 2 },
    { x1: 2, y1: 4, x2: 4, y2: 4 },
    { x1: 3, y1: 4, x2: 3, y2: 2 },
    { x1: 2, y1: 4, x2: 3, y2: 2 },
    { x1: 4, y1: 4, x2: 3, y2: 2 },
    { x1: 4, y1: 4, x2: 6, y2: 4 },
    { x1: 5, y1: 4, x2: 5, y2: 2 },
    { x1: 4, y1: 4, x2: 5, y2: 2 },
    { x1: 6, y1: 4, x2: 5, y2: 2 },
    { x1: 6, y1: 4, x2: 8, y2: 4 },
    { x1: 7, y1: 4, x2: 7, y2: 2 },
    { x1: 6, y1: 4, x2: 7, y2: 2 },
    { x1: 8, y1: 4, x2: 7, y2: 2 },
    { x1: 8, y1: 4, x2: 10, y2: 4 },
    { x1: 9, y1: 4, x2: 9, y2: 2 },
    { x1: 8, y1: 4, x2: 9, y2: 2 },
    { x1: 10, y1: 4, x2: 9, y2: 2 },
    { x1: 8, y1: 4, x2: 10, y2: 6 },
    { x1: 10, y1: 6, x2: 10, y2: 8 },
    { x1: 8, y1: 6, x2: 10, y2: 8 },
  ],
};

/** Ex. 3 — maison (reproduction partielle type fenêtre). */
const FIG_HOUSE: GridFigure = {
  size: 8,
  dots: [{ x: 4, y: 5 }],
  segments: [
    { x1: 2, y1: 5, x2: 4, y2: 2 },
    { x1: 4, y1: 2, x2: 6, y2: 5 },
    { x1: 2, y1: 5, x2: 6, y2: 5 },
    { x1: 2, y1: 5, x2: 2, y2: 7 },
    { x1: 6, y1: 5, x2: 6, y2: 7 },
    { x1: 2, y1: 7, x2: 6, y2: 7 },
    { x1: 3, y1: 7, x2: 3, y2: 5 },
    { x1: 5, y1: 7, x2: 5, y2: 5 },
  ],
};

/** Ex. 4 — couronne / montagne (agrandissement). */
const FIG_CROWN: GridFigure = {
  size: 6,
  dots: [],
  segments: [
    { x1: 3, y1: 0, x2: 1, y2: 2 },
    { x1: 3, y1: 0, x2: 5, y2: 2 },
    { x1: 1, y1: 2, x2: 5, y2: 2 },
    { x1: 1, y1: 2, x2: 2, y2: 4 },
    { x1: 2, y1: 4, x2: 3, y2: 3 },
    { x1: 3, y1: 3, x2: 4, y2: 4 },
    { x1: 4, y1: 4, x2: 5, y2: 2 },
    { x1: 1, y1: 4, x2: 5, y2: 4 },
  ],
};

/** Ex. 4 — botte (réduction). */
const FIG_BOOT: GridFigure = {
  size: 12,
  dots: [],
  segments: [
    { x1: 5, y1: 2, x2: 5, y2: 7 },
    { x1: 5, y1: 2, x2: 7, y2: 2 },
    { x1: 7, y1: 2, x2: 7, y2: 6 },
    { x1: 5, y1: 7, x2: 7, y2: 6 },
    { x1: 5, y1: 7, x2: 4, y2: 7 },
    { x1: 4, y1: 7, x2: 4, y2: 9 },
    { x1: 4, y1: 9, x2: 10, y2: 9 },
    { x1: 10, y1: 9, x2: 10, y2: 8 },
    { x1: 10, y1: 8, x2: 6, y2: 8 },
    { x1: 6, y1: 8, x2: 6, y2: 7 },
  ],
};

/** Ex. 5 — oiseau (réduction). */
const FIG_BIRD: GridFigure = {
  size: 10,
  dots: [{ x: 6, y: 3 }],
  segments: [
    { x1: 2, y1: 5, x2: 3, y2: 3 },
    { x1: 3, y1: 3, x2: 6, y2: 2 },
    { x1: 6, y1: 2, x2: 9, y2: 4 },
    { x1: 9, y1: 4, x2: 8, y2: 7 },
    { x1: 8, y1: 7, x2: 5, y2: 8 },
    { x1: 5, y1: 8, x2: 2, y2: 5 },
    { x1: 6, y1: 3, x2: 7, y2: 3 },
    { x1: 7, y1: 3, x2: 7, y2: 4 },
    { x1: 7, y1: 4, x2: 6, y2: 4 },
    { x1: 6, y1: 4, x2: 6, y2: 3 },
    { x1: 9, y1: 4, x2: 10, y2: 3 },
    { x1: 5, y1: 8, x2: 5, y2: 10 },
    { x1: 7, y1: 8, x2: 7, y2: 10 },
  ],
};

/** Ex. 5 — fleur (agrandissement). */
const FIG_FLOWER: GridFigure = {
  size: 6,
  dots: [{ x: 3, y: 2 }],
  segments: [
    { x1: 3, y1: 0, x2: 2, y2: 1 },
    { x1: 3, y1: 0, x2: 4, y2: 1 },
    { x1: 2, y1: 1, x2: 4, y2: 1 },
    { x1: 2, y1: 1, x2: 1, y2: 2 },
    { x1: 4, y1: 1, x2: 5, y2: 2 },
    { x1: 1, y1: 2, x2: 5, y2: 2 },
    { x1: 2, y1: 1, x2: 3, y2: 2 },
    { x1: 4, y1: 1, x2: 3, y2: 2 },
    { x1: 3, y1: 2, x2: 3, y2: 5 },
    { x1: 3, y1: 4, x2: 1, y2: 5 },
    { x1: 3, y1: 4, x2: 5, y2: 5 },
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
  { id: "copy-dots-curve", kind: "copy", label: "Points incurvés", reference: FIG_DOTS_CURVE, targetSize: 6 },
  { id: "copy-eyes", kind: "copy", label: "Deux points", reference: FIG_EYES, targetSize: 6 },
  { id: "copy-xmas-tree", kind: "copy", label: "Sapin", reference: FIG_XMAS_TREE, targetSize: 8 },
  { id: "copy-triangles-hook", kind: "copy", label: "Triangles et crochet", reference: FIG_TRIANGLES_HOOK, targetSize: 10 },
  { id: "copy-house", kind: "copy", label: "Maison", reference: FIG_HOUSE, targetSize: 8, hintDots: [{ x: 4, y: 5 }] },
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
  {
    id: "scale-crown-up",
    kind: "scale_up",
    label: "Couronne agrandie",
    reference: { ...FIG_CROWN, size: 4 },
    targetSize: 8,
    hintSegments: [{ x1: 6, y1: 2, x2: 2, y2: 6 }],
  },
  {
    id: "scale-boot-down",
    kind: "scale_down",
    label: "Botte réduite",
    reference: FIG_BOOT,
    targetSize: 6,
    hintSegments: [{ x1: 2, y1: 4, x2: 2, y2: 5 }, { x1: 2, y1: 5, x2: 4, y2: 5 }],
  },
  {
    id: "scale-bird-down",
    kind: "scale_down",
    label: "Oiseau réduit",
    reference: FIG_BIRD,
    targetSize: 5,
    hintSegments: [{ x1: 1, y1: 4, x2: 2, y2: 2 }],
  },
  {
    id: "scale-flower-up",
    kind: "scale_up",
    label: "Fleur agrandie",
    reference: { ...FIG_FLOWER, size: 3 },
    targetSize: 6,
    hintDots: [{ x: 6, y: 4 }],
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
