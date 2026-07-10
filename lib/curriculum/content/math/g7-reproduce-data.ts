/** Point de grille (intersection) — coordonnées entières 0…size. */
export type GridPoint = { x: number; y: number };

export type GridSegment = { x1: number; y1: number; x2: number; y2: number };

export type G7SymAxis =
  | { kind: "vertical"; x: number }
  | { kind: "horizontal"; y: number };

export type GridFigure = {
  /** Nombre de cases par côté (intersections de 0 à size). Toujours 12 pour G7.1. */
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
  /** Taille de la grille de travail (cases) — toujours 12. */
  targetSize: number;
  hintDots?: GridPoint[];
  hintSegments?: GridSegment[];
};

export const G7_GRID_SIZE = 12;

export function pointKey(p: GridPoint): string {
  return `${p.x},${p.y}`;
}

export function segmentKey(s: GridSegment): string {
  const a = `${s.x1},${s.y1}`;
  const b = `${s.x2},${s.y2}`;
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

export function scalePoint(p: GridPoint, k: number): GridPoint {
  return { x: Math.round(p.x * k), y: Math.round(p.y * k) };
}

export function scaleSegment(s: GridSegment, k: number): GridSegment {
  const p1 = scalePoint({ x: s.x1, y: s.y1 }, k);
  const p2 = scalePoint({ x: s.x2, y: s.y2 }, k);
  return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
}

export function expectedFromTask(task: ReproduceTask): { dots: Set<string>; segments: Set<string> } {
  const { reference, kind } = task;
  const k = kind === "scale_up" ? 2 : kind === "scale_down" ? 0.5 : 1;
  return {
    dots: new Set(reference.dots.map((p) => pointKey(scalePoint(p, k)))),
    segments: new Set(reference.segments.map((s) => segmentKey(scaleSegment(s, k)))),
  };
}

function fig(segments: GridSegment[], dots: GridPoint[] = []): GridFigure {
  return { size: G7_GRID_SIZE, dots: dedupeDots(dots), segments: dedupeSegments(segments) };
}

function dedupeSegments(segments: GridSegment[]): GridSegment[] {
  const seen = new Set<string>();
  const out: GridSegment[] = [];
  for (const s of segments) {
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

function poly(pts: Array<[number, number]>): GridSegment[] {
  const segs: GridSegment[] = [];
  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i]!;
    const [x2, y2] = pts[(i + 1) % pts.length]!;
    segs.push({ x1, y1, x2, y2 });
  }
  return segs;
}

function line(...pts: Array<[number, number]>): GridSegment[] {
  const segs: GridSegment[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i]!;
    const [x2, y2] = pts[i + 1]!;
    segs.push({ x1, y1, x2, y2 });
  }
  return segs;
}

function rect(x: number, y: number, w: number, h: number): GridSegment[] {
  return poly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]]);
}

// ── 50 figures figuratives sur grille 12×12 ─────────────────────────────────

const FIGURES: Array<{ id: string; label: string; figure: GridFigure }> = [
  {
    id: "house",
    label: "Maison",
    figure: fig([
      ...poly([[2, 6], [6, 2], [10, 6]]),
      ...rect(3, 6, 6, 5),
      ...rect(5, 8, 2, 3),
      ...rect(4, 7, 1, 1),
      ...rect(7, 7, 1, 1),
    ]),
  },
  {
    id: "rocket",
    label: "Fusée",
    figure: fig([
      ...poly([[6, 1], [4, 4], [8, 4]]),
      ...rect(4, 4, 4, 5),
      ...line([4, 9], [2, 11]),
      ...line([8, 9], [10, 11]),
      ...line([4, 9], [8, 9]),
      ...rect(5, 5, 2, 2),
    ], [{ x: 6, y: 6 }]),
  },
  {
    id: "cat",
    label: "Chat",
    figure: fig([
      ...poly([[3, 5], [4, 2], [5, 5], [7, 5], [8, 2], [9, 5], [10, 7], [9, 10], [3, 10], [2, 7]]),
      ...line([5, 8], [6, 9], [7, 8]),
      ...line([4, 10], [4, 11]),
      ...line([8, 10], [8, 11]),
    ], [{ x: 4, y: 6 }, { x: 8, y: 6 }]),
  },
  {
    id: "fish",
    label: "Poisson",
    figure: fig([
      ...poly([[2, 6], [5, 3], [9, 4], [11, 6], [9, 8], [5, 9]]),
      ...poly([[11, 6], [12, 4], [12, 8]]),
      ...line([5, 5], [6, 6], [5, 7]),
    ], [{ x: 4, y: 5 }]),
  },
  {
    id: "tree",
    label: "Arbre",
    figure: fig([
      ...poly([[6, 1], [2, 5], [4, 5], [1, 8], [11, 8], [8, 5], [10, 5]]),
      ...rect(5, 8, 2, 3),
      ...line([4, 11], [8, 11]),
    ]),
  },
  {
    id: "car",
    label: "Voiture",
    figure: fig([
      ...poly([[1, 7], [3, 4], [8, 4], [10, 7], [11, 7], [11, 9], [1, 9]]),
      ...line([3, 4], [3, 7]),
      ...line([8, 4], [8, 7]),
      ...rect(3, 5, 2, 1),
      ...rect(6, 5, 2, 1),
    ], [{ x: 3, y: 10 }, { x: 9, y: 10 }]),
  },
  {
    id: "bird",
    label: "Oiseau",
    figure: fig([
      ...poly([[2, 6], [4, 3], [7, 2], [10, 4], [11, 6], [9, 8], [6, 9], [3, 8]]),
      ...poly([[10, 4], [12, 3], [11, 6]]),
      ...line([5, 9], [5, 11]),
      ...line([7, 9], [7, 11]),
      ...rect(7, 4, 1, 1),
    ], [{ x: 7, y: 4 }]),
  },
  {
    id: "boat",
    label: "Bateau",
    figure: fig([
      ...poly([[2, 8], [4, 10], [10, 10], [11, 8]]),
      ...line([6, 8], [6, 2]),
      ...poly([[6, 2], [10, 7], [6, 7]]),
      ...line([1, 11], [11, 11]),
    ]),
  },
  {
    id: "flower",
    label: "Fleur",
    figure: fig([
      ...poly([[6, 1], [5, 3], [6, 4], [7, 3]]),
      ...poly([[6, 4], [4, 3], [3, 5], [5, 5]]),
      ...poly([[6, 4], [8, 3], [9, 5], [7, 5]]),
      ...poly([[6, 4], [4, 6], [5, 8], [7, 8], [8, 6]]),
      ...line([6, 8], [6, 11]),
      ...line([6, 10], [3, 9]),
      ...line([6, 10], [9, 9]),
    ], [{ x: 6, y: 5 }]),
  },
  {
    id: "dog",
    label: "Chien",
    figure: fig([
      ...poly([[3, 5], [5, 3], [7, 3], [8, 5], [8, 7], [3, 7]]),
      ...poly([[8, 5], [11, 4], [11, 6], [8, 7]]),
      ...line([4, 7], [4, 10]),
      ...line([7, 7], [7, 10]),
      ...line([3, 6], [1, 5]),
      ...line([3, 6], [1, 7]),
    ], [{ x: 10, y: 5 }]),
  },
  {
    id: "castle",
    label: "Château",
    figure: fig([
      ...rect(2, 5, 8, 6),
      ...line([2, 5], [2, 3], [3, 3], [3, 5]),
      ...line([5, 5], [5, 2], [7, 2], [7, 5]),
      ...line([9, 5], [9, 3], [10, 3], [10, 5]),
      ...poly([[5, 2], [6, 0], [7, 2]]),
      ...rect(5, 8, 2, 3),
      ...rect(3, 6, 1, 1),
      ...rect(8, 6, 1, 1),
    ]),
  },
  {
    id: "umbrella",
    label: "Parapluie",
    figure: fig([
      ...poly([[1, 5], [6, 1], [11, 5]]),
      ...line([1, 5], [11, 5]),
      ...line([3, 5], [3, 4]),
      ...line([6, 5], [6, 3]),
      ...line([9, 5], [9, 4]),
      ...line([6, 5], [6, 10], [8, 11]),
    ]),
  },
  {
    id: "butterfly",
    label: "Papillon",
    figure: fig([
      ...poly([[6, 3], [2, 1], [1, 4], [3, 6], [6, 5]]),
      ...poly([[6, 3], [10, 1], [11, 4], [9, 6], [6, 5]]),
      ...poly([[6, 5], [3, 7], [2, 10], [5, 9], [6, 7]]),
      ...poly([[6, 5], [9, 7], [10, 10], [7, 9], [6, 7]]),
      ...line([6, 3], [6, 9]),
    ], [{ x: 6, y: 2 }]),
  },
  {
    id: "airplane",
    label: "Avion",
    figure: fig([
      ...poly([[2, 6], [5, 5], [9, 5], [11, 6], [9, 7], [5, 7]]),
      ...line([6, 5], [3, 2]),
      ...line([6, 7], [3, 10]),
      ...line([6, 5], [6, 7]),
      ...line([9, 5], [10, 3]),
      ...line([9, 7], [10, 9]),
      ...poly([[11, 6], [12, 5], [12, 7]]),
    ]),
  },
  {
    id: "star",
    label: "Étoile",
    figure: fig(poly([
      [6, 1], [7, 4], [11, 4], [8, 6], [9, 10], [6, 8], [3, 10], [4, 6], [1, 4], [5, 4],
    ])),
  },
  {
    id: "heart",
    label: "Cœur",
    figure: fig(poly([
      [6, 11], [1, 6], [1, 3], [3, 1], [6, 3], [9, 1], [11, 3], [11, 6],
    ])),
  },
  {
    id: "mushroom",
    label: "Champignon",
    figure: fig([
      ...poly([[2, 5], [6, 1], [10, 5]]),
      ...line([2, 5], [10, 5]),
      ...rect(4, 5, 4, 5),
      ...line([3, 10], [9, 10]),
    ], [{ x: 4, y: 3 }, { x: 7, y: 3 }, { x: 6, y: 4 }]),
  },
  {
    id: "snail",
    label: "Escargot",
    figure: fig([
      ...poly([[4, 4], [7, 2], [10, 4], [10, 7], [7, 9], [4, 7]]),
      ...line([7, 2], [7, 9]),
      ...line([4, 4], [10, 7]),
      ...line([10, 4], [4, 7]),
      ...line([4, 7], [2, 8], [1, 10], [3, 11], [8, 11], [10, 10]),
      ...line([2, 8], [1, 6], [2, 5]),
    ], [{ x: 2, y: 5 }]),
  },
  {
    id: "robot",
    label: "Robot",
    figure: fig([
      ...rect(4, 1, 4, 3),
      ...rect(3, 4, 6, 5),
      ...line([3, 6], [1, 5], [1, 8], [3, 7]),
      ...line([9, 6], [11, 5], [11, 8], [9, 7]),
      ...line([5, 9], [5, 11]),
      ...line([7, 9], [7, 11]),
      ...rect(5, 5, 1, 1),
      ...rect(7, 5, 1, 1),
      ...line([5, 7], [8, 7]),
    ], [{ x: 5, y: 2 }, { x: 7, y: 2 }]),
  },
  {
    id: "crown",
    label: "Couronne",
    figure: fig([
      ...poly([[2, 8], [2, 4], [4, 6], [6, 2], [8, 6], [10, 4], [10, 8]]),
      ...line([2, 8], [10, 8]),
      ...line([3, 8], [3, 9], [9, 9], [9, 8]),
    ], [{ x: 4, y: 5 }, { x: 6, y: 4 }, { x: 8, y: 5 }]),
  },
  {
    id: "key",
    label: "Clé",
    figure: fig([
      ...poly([[3, 2], [5, 2], [6, 3], [6, 5], [5, 6], [3, 6], [2, 5], [2, 3]]),
      ...line([5, 4], [11, 4]),
      ...line([11, 4], [11, 6]),
      ...line([9, 4], [9, 6]),
      ...line([3, 2], [3, 6]),
    ]),
  },
  {
    id: "anchor",
    label: "Ancre",
    figure: fig([
      ...poly([[5, 1], [7, 1], [7, 3], [5, 3]]),
      ...line([6, 3], [6, 10]),
      ...line([2, 7], [10, 7]),
      ...poly([[2, 7], [1, 9], [3, 10], [4, 8]]),
      ...poly([[10, 7], [11, 9], [9, 10], [8, 8]]),
      ...line([5, 10], [7, 10]),
    ]),
  },
  {
    id: "lamp",
    label: "Lampe",
    figure: fig([
      ...poly([[4, 1], [8, 1], [9, 4], [3, 4]]),
      ...line([6, 4], [6, 8]),
      ...rect(4, 8, 4, 2),
      ...line([3, 10], [9, 10]),
      ...line([4, 2], [8, 2]),
    ]),
  },
  {
    id: "ice-cream",
    label: "Glace",
    figure: fig([
      ...poly([[4, 5], [6, 1], [8, 5]]),
      ...poly([[3, 5], [9, 5], [6, 11]]),
      ...line([4, 5], [5, 3], [7, 3], [8, 5]),
    ], [{ x: 5, y: 3 }, { x: 7, y: 3 }]),
  },
  {
    id: "turtle",
    label: "Tortue",
    figure: fig([
      ...poly([[3, 4], [6, 2], [9, 4], [10, 7], [6, 9], [2, 7]]),
      ...line([6, 2], [6, 9]),
      ...line([3, 4], [9, 7]),
      ...line([9, 4], [3, 7]),
      ...poly([[9, 5], [11, 4], [12, 6], [10, 7]]),
      ...line([3, 7], [1, 8]),
      ...line([4, 9], [3, 11]),
      ...line([8, 9], [9, 11]),
    ], [{ x: 11, y: 5 }]),
  },
  {
    id: "guitar",
    label: "Guitare",
    figure: fig([
      ...poly([[4, 5], [6, 4], [8, 5], [9, 8], [6, 11], [3, 8]]),
      ...line([6, 4], [6, 1]),
      ...line([5, 1], [7, 1]),
      ...line([5, 2], [7, 2]),
      ...rect(5, 6, 2, 2),
    ], [{ x: 6, y: 7 }]),
  },
  {
    id: "mountain",
    label: "Montagnes",
    figure: fig([
      ...poly([[1, 10], [4, 3], [7, 10]]),
      ...poly([[5, 10], [8, 2], [11, 10]]),
      ...line([1, 10], [11, 10]),
      ...line([4, 3], [5, 5], [3, 5], [4, 3]),
      ...line([8, 2], [9, 4], [7, 4], [8, 2]),
    ]),
  },
  {
    id: "sun",
    label: "Soleil",
    figure: fig([
      ...poly([[4, 4], [6, 3], [8, 4], [9, 6], [8, 8], [6, 9], [4, 8], [3, 6]]),
      ...line([6, 3], [6, 1]),
      ...line([6, 9], [6, 11]),
      ...line([3, 6], [1, 6]),
      ...line([9, 6], [11, 6]),
      ...line([4, 4], [2, 2]),
      ...line([8, 4], [10, 2]),
      ...line([4, 8], [2, 10]),
      ...line([8, 8], [10, 10]),
    ]),
  },
  {
    id: "moon",
    label: "Lune",
    figure: fig([
      ...poly([[7, 1], [4, 2], [2, 5], [2, 8], [4, 11], [7, 11], [5, 9], [4, 6], [5, 3], [7, 2]]),
    ], [{ x: 8, y: 3 }, { x: 9, y: 5 }, { x: 8, y: 7 }]),
  },
  {
    id: "cup",
    label: "Tasse",
    figure: fig([
      ...poly([[3, 3], [9, 3], [8, 9], [4, 9]]),
      ...line([9, 4], [11, 4], [11, 7], [9, 7]),
      ...line([3, 10], [9, 10]),
      ...line([4, 3], [4, 9]),
      ...line([8, 3], [8, 9]),
    ]),
  },
  {
    id: "hat",
    label: "Chapeau",
    figure: fig([
      ...poly([[4, 6], [4, 2], [8, 2], [8, 6]]),
      ...line([1, 6], [11, 6]),
      ...line([1, 6], [1, 7], [11, 7], [11, 6]),
      ...line([4, 4], [8, 4]),
    ]),
  },
  {
    id: "leaf",
    label: "Feuille",
    figure: fig([
      ...poly([[6, 1], [3, 3], [2, 6], [4, 9], [6, 11], [8, 9], [10, 6], [9, 3]]),
      ...line([6, 1], [6, 11]),
      ...line([6, 4], [3, 3]),
      ...line([6, 4], [9, 3]),
      ...line([6, 7], [2, 6]),
      ...line([6, 7], [10, 6]),
      ...line([6, 9], [4, 9]),
      ...line([6, 9], [8, 9]),
    ]),
  },
  {
    id: "fox",
    label: "Renard",
    figure: fig([
      ...poly([[2, 3], [4, 1], [5, 3], [7, 3], [8, 1], [10, 3], [11, 6], [9, 10], [3, 10], [1, 6]]),
      ...poly([[5, 6], [6, 8], [7, 6]]),
      ...line([4, 10], [4, 11]),
      ...line([8, 10], [8, 11]),
    ], [{ x: 4, y: 5 }, { x: 8, y: 5 }]),
  },
  {
    id: "truck",
    label: "Camion",
    figure: fig([
      ...rect(1, 4, 7, 5),
      ...poly([[8, 6], [10, 6], [11, 8], [11, 9], [8, 9]]),
      ...rect(8, 7, 1, 1),
      ...line([1, 9], [11, 9]),
    ], [{ x: 3, y: 10 }, { x: 6, y: 10 }, { x: 9, y: 10 }]),
  },
  {
    id: "tent",
    label: "Tente",
    figure: fig([
      ...poly([[1, 10], [6, 2], [11, 10]]),
      ...line([1, 10], [11, 10]),
      ...line([6, 2], [6, 10]),
      ...line([4, 10], [4, 7], [8, 7], [8, 10]),
    ]),
  },
  {
    id: "candle",
    label: "Bougie",
    figure: fig([
      ...rect(5, 4, 2, 6),
      ...poly([[5, 4], [6, 1], [7, 4]]),
      ...line([4, 10], [8, 10]),
      ...line([3, 11], [9, 11]),
      ...line([6, 2], [6, 3]),
    ]),
  },
  {
    id: "bee",
    label: "Abeille",
    figure: fig([
      ...poly([[3, 5], [6, 3], [9, 5], [9, 8], [6, 10], [3, 8]]),
      ...line([5, 3], [5, 10]),
      ...line([7, 3], [7, 10]),
      ...poly([[3, 5], [1, 3], [1, 6], [3, 7]]),
      ...poly([[9, 5], [11, 3], [11, 6], [9, 7]]),
      ...line([6, 10], [6, 11]),
    ], [{ x: 5, y: 5 }, { x: 7, y: 5 }]),
  },
  {
    id: "ladder",
    label: "Échelle",
    figure: fig([
      ...line([3, 1], [3, 11]),
      ...line([9, 1], [9, 11]),
      ...line([3, 2], [9, 2]),
      ...line([3, 4], [9, 4]),
      ...line([3, 6], [9, 6]),
      ...line([3, 8], [9, 8]),
      ...line([3, 10], [9, 10]),
    ]),
  },
  {
    id: "bridge",
    label: "Pont",
    figure: fig([
      ...line([1, 8], [3, 5], [6, 3], [9, 5], [11, 8]),
      ...line([1, 8], [11, 8]),
      ...line([3, 8], [3, 5]),
      ...line([6, 8], [6, 3]),
      ...line([9, 8], [9, 5]),
      ...line([1, 9], [1, 11]),
      ...line([11, 9], [11, 11]),
      ...line([1, 10], [11, 10]),
    ]),
  },
  {
    id: "windmill",
    label: "Moulin",
    figure: fig([
      ...poly([[4, 6], [6, 4], [8, 6], [8, 11], [4, 11]]),
      ...line([6, 4], [6, 1]),
      ...line([6, 4], [2, 2]),
      ...line([6, 4], [10, 2]),
      ...line([6, 4], [3, 7]),
      ...line([6, 4], [9, 7]),
      ...rect(5, 8, 2, 3),
    ]),
  },
  {
    id: "apple",
    label: "Pomme",
    figure: fig([
      ...poly([[6, 3], [3, 4], [2, 7], [3, 10], [6, 11], [9, 10], [10, 7], [9, 4]]),
      ...line([6, 3], [6, 1], [8, 2]),
      ...line([6, 3], [5, 2]),
    ]),
  },
  {
    id: "kite",
    label: "Cerf-volant",
    figure: fig([
      ...poly([[6, 1], [9, 5], [6, 9], [3, 5]]),
      ...line([6, 1], [6, 9]),
      ...line([3, 5], [9, 5]),
      ...line([6, 9], [5, 11], [7, 10], [6, 11]),
    ]),
  },
  {
    id: "clock",
    label: "Horloge",
    figure: fig([
      ...poly([[4, 2], [8, 2], [10, 4], [10, 8], [8, 10], [4, 10], [2, 8], [2, 4]]),
      ...line([6, 6], [6, 3]),
      ...line([6, 6], [8, 7]),
      ...line([6, 2], [6, 1]),
      ...line([6, 10], [6, 11]),
      ...line([2, 6], [1, 6]),
      ...line([10, 6], [11, 6]),
    ], [{ x: 6, y: 6 }]),
  },
  {
    id: "sword",
    label: "Épée",
    figure: fig([
      ...poly([[5, 1], [7, 1], [7, 7], [5, 7]]),
      ...line([3, 7], [9, 7]),
      ...line([3, 7], [3, 8], [9, 8], [9, 7]),
      ...rect(5, 8, 2, 2),
      ...line([5, 10], [7, 10], [6, 11], [5, 10]),
    ]),
  },
  {
    id: "dragon",
    label: "Dragon",
    figure: fig([
      ...poly([[1, 7], [3, 4], [5, 5], [7, 2], [9, 4], [11, 3], [10, 6], [11, 8], [8, 9], [6, 8], [4, 10], [2, 9]]),
      ...line([7, 2], [8, 1]),
      ...line([9, 4], [10, 2]),
      ...line([4, 10], [3, 11]),
      ...line([6, 8], [7, 11]),
    ], [{ x: 4, y: 5 }, { x: 8, y: 5 }]),
  },
  {
    id: "bicycle",
    label: "Vélo",
    figure: fig([
      ...poly([[2, 7], [4, 5], [4, 9], [2, 9]]),
      ...poly([[8, 7], [10, 5], [10, 9], [8, 9]]),
      ...line([4, 7], [6, 4], [8, 7]),
      ...line([6, 4], [6, 3], [5, 3]),
      ...line([4, 7], [7, 7]),
      ...line([6, 4], [7, 7]),
    ], [{ x: 3, y: 7 }, { x: 9, y: 7 }]),
  },
  {
    id: "owl",
    label: "Hibou",
    figure: fig([
      ...poly([[3, 4], [4, 1], [5, 3], [7, 3], [8, 1], [9, 4], [10, 7], [8, 11], [4, 11], [2, 7]]),
      ...poly([[4, 5], [5, 4], [6, 5], [5, 6]]),
      ...poly([[6, 5], [7, 4], [8, 5], [7, 6]]),
      ...line([5, 8], [6, 9], [7, 8]),
      ...line([4, 11], [4, 12]),
      ...line([8, 11], [8, 12]),
    ], [{ x: 5, y: 5 }, { x: 7, y: 5 }]),
  },
  {
    id: "lighthouse",
    label: "Phare",
    figure: fig([
      ...poly([[4, 10], [5, 3], [7, 3], [8, 10]]),
      ...rect(4, 1, 4, 2),
      ...line([6, 1], [6, 0]),
      ...line([3, 10], [9, 10]),
      ...line([2, 11], [10, 11]),
      ...rect(5, 5, 2, 1),
      ...rect(5, 7, 2, 1),
    ]),
  },
  {
    id: "crab",
    label: "Crabe",
    figure: fig([
      ...poly([[3, 5], [5, 3], [7, 3], [9, 5], [9, 8], [7, 9], [5, 9], [3, 8]]),
      ...line([3, 5], [1, 3]),
      ...line([3, 6], [1, 5]),
      ...line([9, 5], [11, 3]),
      ...line([9, 6], [11, 5]),
      ...line([4, 9], [3, 11]),
      ...line([5, 9], [5, 11]),
      ...line([7, 9], [7, 11]),
      ...line([8, 9], [9, 11]),
    ], [{ x: 5, y: 5 }, { x: 7, y: 5 }]),
  },
  {
    id: "present",
    label: "Cadeau",
    figure: fig([
      ...rect(2, 4, 8, 7),
      ...line([6, 4], [6, 11]),
      ...line([2, 7], [10, 7]),
      ...poly([[4, 4], [5, 2], [6, 4], [7, 2], [8, 4]]),
    ]),
  },
];

const COPY_TASKS: ReproduceTask[] = FIGURES.map(({ id, label, figure }) => ({
  id: `copy-${id}`,
  kind: "copy" as const,
  label,
  reference: figure,
  targetSize: G7_GRID_SIZE,
}));

/**
 * Exercice 2 — 50 figures distinctes, toutes les coordonnées paires (0,2,…,12)
 * pour une réduction exacte 2:1 (÷2 sans demi-case).
 */
function efig(segments: GridSegment[], dots: GridPoint[] = []): GridFigure {
  return { size: G7_GRID_SIZE, dots: dedupeDots(dots), segments: dedupeSegments(segments) };
}

function assertEvenFigure(id: string, figure: GridFigure) {
  const vals: number[] = [];
  for (const s of figure.segments) vals.push(s.x1, s.y1, s.x2, s.y2);
  for (const d of figure.dots) vals.push(d.x, d.y);
  const bad = vals.filter((v) => v % 2 !== 0 || v < 0 || v > 12);
  if (bad.length) throw new Error(`Figure ${id}: coords non paires ou hors grille: ${bad.join(",")}`);
}

const SCALE_FIGURES: Array<{ id: string; label: string; figure: GridFigure }> = [
  {
    id: "cabin",
    label: "Cabane",
    figure: efig([
      ...poly([[2, 6], [6, 2], [10, 6]]),
      ...rect(2, 6, 8, 4),
      ...rect(4, 8, 2, 2),
      ...rect(8, 8, 2, 2),
    ]),
  },
  {
    id: "shuttle",
    label: "Navette",
    figure: efig([
      ...poly([[6, 0], [4, 4], [8, 4]]),
      ...rect(4, 4, 4, 4),
      ...line([4, 8], [2, 12]),
      ...line([8, 8], [10, 12]),
      ...line([4, 8], [8, 8]),
      ...rect(4, 4, 4, 2),
    ], [{ x: 6, y: 6 }]),
  },
  {
    id: "wolf",
    label: "Loup",
    figure: efig([
      ...poly([[2, 4], [4, 0], [6, 4], [8, 4], [10, 0], [12, 4], [10, 8], [8, 10], [4, 10], [2, 8]]),
      ...line([4, 10], [4, 12]),
      ...line([8, 10], [8, 12]),
      ...poly([[4, 6], [6, 8], [8, 6]]),
    ], [{ x: 4, y: 4 }, { x: 8, y: 4 }]),
  },
  {
    id: "whale",
    label: "Baleine",
    figure: efig([
      ...poly([[0, 6], [4, 2], [10, 2], [12, 6], [10, 8], [4, 8]]),
      ...poly([[12, 6], [12, 2], [10, 4]]),
      ...poly([[12, 6], [12, 10], [10, 8]]),
      ...line([2, 8], [0, 10]),
    ], [{ x: 4, y: 4 }]),
  },
  {
    id: "pine",
    label: "Sapin",
    figure: efig([
      ...poly([[6, 0], [2, 4], [4, 4], [0, 8], [12, 8], [8, 4], [10, 4]]),
      ...rect(4, 8, 4, 4),
    ]),
  },
  {
    id: "bus",
    label: "Bus",
    figure: efig([
      ...rect(0, 4, 12, 4),
      ...rect(2, 4, 2, 2),
      ...rect(6, 4, 2, 2),
      ...rect(10, 4, 2, 2),
      ...line([0, 8], [12, 8]),
    ], [{ x: 2, y: 10 }, { x: 6, y: 10 }, { x: 10, y: 10 }]),
  },
  {
    id: "eagle",
    label: "Aigle",
    figure: efig([
      ...poly([[2, 6], [4, 2], [8, 0], [10, 4], [12, 4], [10, 8], [6, 10], [2, 8]]),
      ...poly([[10, 4], [12, 0], [12, 6]]),
      ...line([4, 10], [4, 12]),
      ...line([8, 10], [8, 12]),
    ], [{ x: 8, y: 4 }]),
  },
  {
    id: "sailboat",
    label: "Voilier",
    figure: efig([
      ...poly([[0, 8], [2, 10], [10, 10], [12, 8]]),
      ...line([6, 8], [6, 0]),
      ...poly([[6, 0], [10, 6], [6, 6]]),
      ...poly([[6, 2], [2, 6], [6, 6]]),
    ]),
  },
  {
    id: "rose",
    label: "Rose",
    figure: efig([
      ...poly([[6, 0], [4, 2], [6, 4], [8, 2]]),
      ...poly([[6, 4], [2, 2], [2, 6], [6, 6]]),
      ...poly([[6, 4], [10, 2], [10, 6], [6, 6]]),
      ...poly([[6, 6], [2, 8], [4, 10], [8, 10], [10, 8]]),
      ...line([6, 10], [6, 12]),
      ...line([6, 10], [2, 10]),
      ...line([6, 10], [10, 10]),
    ], [{ x: 6, y: 6 }]),
  },
  {
    id: "horse",
    label: "Cheval",
    figure: efig([
      ...poly([[2, 4], [4, 2], [8, 2], [10, 4], [10, 8], [2, 8]]),
      ...poly([[10, 4], [12, 2], [12, 6], [10, 6]]),
      ...line([4, 8], [4, 12]),
      ...line([8, 8], [8, 12]),
      ...line([2, 6], [0, 4]),
      ...line([12, 2], [12, 0]),
    ], [{ x: 12, y: 4 }]),
  },
  {
    id: "fortress",
    label: "Forteresse",
    figure: efig([
      ...rect(2, 4, 8, 6),
      ...line([2, 4], [2, 2], [4, 2], [4, 4]),
      ...line([8, 4], [8, 2], [10, 2], [10, 4]),
      ...poly([[4, 4], [6, 0], [8, 4]]),
      ...rect(4, 8, 4, 2),
      ...rect(2, 6, 2, 2),
      ...rect(8, 6, 2, 2),
    ]),
  },
  {
    id: "parasol",
    label: "Parasol",
    figure: efig([
      ...poly([[0, 6], [6, 0], [12, 6]]),
      ...line([0, 6], [12, 6]),
      ...line([2, 6], [2, 4]),
      ...line([6, 6], [6, 2]),
      ...line([10, 6], [10, 4]),
      ...line([6, 6], [6, 12]),
    ]),
  },
  {
    id: "moth",
    label: "Papillon de nuit",
    figure: efig([
      ...poly([[6, 2], [0, 0], [0, 4], [4, 6], [6, 4]]),
      ...poly([[6, 2], [12, 0], [12, 4], [8, 6], [6, 4]]),
      ...poly([[6, 4], [2, 8], [0, 12], [4, 10], [6, 8]]),
      ...poly([[6, 4], [10, 8], [12, 12], [8, 10], [6, 8]]),
      ...line([6, 2], [6, 10]),
    ]),
  },
  {
    id: "jet",
    label: "Jet",
    figure: efig([
      ...poly([[0, 6], [4, 4], [10, 4], [12, 6], [10, 8], [4, 8]]),
      ...line([6, 4], [2, 0]),
      ...line([6, 8], [2, 12]),
      ...line([10, 4], [12, 0]),
      ...line([10, 8], [12, 12]),
    ]),
  },
  {
    id: "diamond-star",
    label: "Étoile losange",
    figure: efig(poly([
      [6, 0], [8, 4], [12, 4], [8, 6], [10, 12], [6, 8], [2, 12], [4, 6], [0, 4], [4, 4],
    ])),
  },
  {
    id: "shield",
    label: "Bouclier",
    figure: efig([
      ...poly([[2, 0], [10, 0], [12, 4], [6, 12], [0, 4]]),
      ...line([6, 0], [6, 12]),
      ...line([2, 0], [6, 4], [10, 0]),
    ]),
  },
  {
    id: "toadstool",
    label: "Amanite",
    figure: efig([
      ...poly([[0, 6], [6, 0], [12, 6]]),
      ...line([0, 6], [12, 6]),
      ...rect(4, 6, 4, 4),
      ...line([2, 10], [10, 10]),
    ], [{ x: 2, y: 2 }, { x: 6, y: 2 }, { x: 10, y: 2 }, { x: 4, y: 4 }, { x: 8, y: 4 }]),
  },
  {
    id: "shell",
    label: "Coquillage",
    figure: efig([
      ...poly([[2, 4], [6, 0], [10, 4], [10, 8], [6, 12], [2, 8]]),
      ...line([6, 0], [6, 12]),
      ...line([2, 4], [10, 8]),
      ...line([10, 4], [2, 8]),
      ...line([4, 2], [8, 2]),
      ...line([2, 6], [10, 6]),
    ]),
  },
  {
    id: "android",
    label: "Androïde",
    figure: efig([
      ...rect(4, 0, 4, 2),
      ...rect(2, 2, 8, 6),
      ...line([2, 4], [0, 2], [0, 8], [2, 6]),
      ...line([10, 4], [12, 2], [12, 8], [10, 6]),
      ...line([4, 8], [4, 12]),
      ...line([8, 8], [8, 12]),
      ...rect(4, 4, 2, 2),
      ...rect(6, 4, 2, 2),
    ], [{ x: 4, y: 0 }, { x: 8, y: 0 }]),
  },
  {
    id: "tiara",
    label: "Tiare",
    figure: efig([
      ...poly([[0, 8], [0, 4], [2, 6], [4, 2], [6, 6], [8, 2], [10, 6], [12, 4], [12, 8]]),
      ...line([0, 8], [12, 8]),
      ...line([2, 8], [2, 10], [10, 10], [10, 8]),
    ], [{ x: 4, y: 4 }, { x: 8, y: 4 }]),
  },
  {
    id: "skeleton-key",
    label: "Passe-partout",
    figure: efig([
      ...poly([[2, 0], [6, 0], [8, 2], [8, 4], [6, 6], [2, 6], [0, 4], [0, 2]]),
      ...line([6, 2], [12, 2]),
      ...line([12, 2], [12, 6]),
      ...line([8, 2], [8, 6]),
      ...line([10, 2], [10, 4]),
    ]),
  },
  {
    id: "mooring",
    label: "Ancre marine",
    figure: efig([
      ...rect(4, 0, 4, 2),
      ...line([6, 2], [6, 10]),
      ...line([0, 6], [12, 6]),
      ...poly([[0, 6], [0, 10], [2, 12], [4, 8]]),
      ...poly([[12, 6], [12, 10], [10, 12], [8, 8]]),
      ...line([4, 10], [8, 10]),
    ]),
  },
  {
    id: "desk-lamp",
    label: "Lampe de bureau",
    figure: efig([
      ...poly([[2, 0], [10, 0], [12, 4], [0, 4]]),
      ...line([6, 4], [6, 8]),
      ...rect(2, 8, 8, 2),
      ...line([0, 10], [12, 10]),
    ]),
  },
  {
    id: "cone",
    label: "Cornet",
    figure: efig([
      ...poly([[2, 4], [6, 0], [10, 4]]),
      ...poly([[0, 4], [12, 4], [6, 12]]),
      ...line([2, 4], [4, 2], [8, 2], [10, 4]),
    ], [{ x: 4, y: 2 }, { x: 8, y: 2 }]),
  },
  {
    id: "tortoise",
    label: "Tortue marine",
    figure: efig([
      ...poly([[2, 4], [6, 0], [10, 4], [12, 6], [10, 8], [6, 10], [2, 8], [0, 6]]),
      ...line([6, 0], [6, 10]),
      ...line([2, 4], [10, 8]),
      ...line([10, 4], [2, 8]),
      ...poly([[10, 4], [12, 2], [12, 6]]),
      ...line([2, 8], [0, 10]),
      ...line([4, 10], [2, 12]),
      ...line([8, 10], [10, 12]),
    ], [{ x: 12, y: 4 }]),
  },
  {
    id: "violin",
    label: "Violon",
    figure: efig([
      ...poly([[2, 4], [4, 2], [8, 2], [10, 4], [10, 8], [8, 12], [4, 12], [2, 8]]),
      ...line([6, 2], [6, 0]),
      ...line([4, 0], [8, 0]),
      ...rect(4, 6, 4, 2),
    ], [{ x: 6, y: 8 }]),
  },
  {
    id: "peaks",
    label: "Sommets",
    figure: efig([
      ...poly([[0, 12], [2, 4], [6, 12]]),
      ...poly([[4, 12], [8, 0], [12, 12]]),
      ...line([0, 12], [12, 12]),
      ...line([2, 4], [4, 6], [0, 6], [2, 4]),
      ...line([8, 0], [10, 4], [6, 4], [8, 0]),
    ]),
  },
  {
    id: "sunrise",
    label: "Soleil levant",
    figure: efig([
      ...poly([[2, 4], [4, 2], [8, 2], [10, 4], [10, 8], [8, 10], [4, 10], [2, 8]]),
      ...line([6, 2], [6, 0]),
      ...line([6, 10], [6, 12]),
      ...line([2, 6], [0, 6]),
      ...line([10, 6], [12, 6]),
      ...line([2, 4], [0, 2]),
      ...line([10, 4], [12, 2]),
      ...line([2, 8], [0, 10]),
      ...line([10, 8], [12, 10]),
    ]),
  },
  {
    id: "crescent",
    label: "Croissant",
    figure: efig([
      ...poly([[8, 0], [4, 0], [0, 4], [0, 8], [4, 12], [8, 12], [4, 10], [2, 6], [4, 2], [8, 2]]),
    ], [{ x: 10, y: 2 }, { x: 12, y: 4 }, { x: 12, y: 8 }, { x: 10, y: 10 }]),
  },
  {
    id: "mug",
    label: "Mug",
    figure: efig([
      ...poly([[2, 2], [8, 2], [8, 10], [2, 10]]),
      ...line([8, 4], [12, 4], [12, 8], [8, 8]),
      ...line([0, 12], [10, 12]),
      ...line([2, 2], [2, 10]),
      ...line([6, 2], [6, 10]),
    ]),
  },
  {
    id: "top-hat",
    label: "Haut-de-forme",
    figure: efig([
      ...rect(2, 2, 8, 6),
      ...line([0, 8], [12, 8]),
      ...line([0, 8], [0, 10], [12, 10], [12, 8]),
      ...line([2, 4], [10, 4]),
    ]),
  },
  {
    id: "maple",
    label: "Érable",
    figure: efig([
      ...poly([[6, 0], [2, 2], [0, 6], [2, 8], [4, 10], [6, 12], [8, 10], [10, 8], [12, 6], [10, 2]]),
      ...line([6, 0], [6, 12]),
      ...line([6, 4], [2, 2]),
      ...line([6, 4], [10, 2]),
      ...line([6, 8], [0, 6]),
      ...line([6, 8], [12, 6]),
    ]),
  },
  {
    id: "lynx",
    label: "Lynx",
    figure: efig([
      ...poly([[0, 2], [2, 0], [4, 2], [8, 2], [10, 0], [12, 2], [12, 6], [10, 10], [2, 10], [0, 6]]),
      ...poly([[4, 6], [6, 8], [8, 6]]),
      ...line([2, 10], [2, 12]),
      ...line([10, 10], [10, 12]),
    ], [{ x: 2, y: 4 }, { x: 10, y: 4 }]),
  },
  {
    id: "lorry",
    label: "Camion benne",
    figure: efig([
      ...rect(0, 2, 8, 6),
      ...poly([[8, 4], [10, 4], [12, 6], [12, 8], [8, 8]]),
      ...rect(8, 4, 2, 2),
    ], [{ x: 2, y: 10 }, { x: 6, y: 10 }, { x: 10, y: 10 }]),
  },
  {
    id: "teepee",
    label: "Tipi",
    figure: efig([
      ...poly([[0, 12], [6, 0], [12, 12]]),
      ...line([0, 12], [12, 12]),
      ...line([6, 0], [6, 12]),
      ...line([2, 12], [2, 8], [10, 8], [10, 12]),
    ]),
  },
  {
    id: "torch",
    label: "Torche",
    figure: efig([
      ...rect(4, 4, 4, 6),
      ...poly([[4, 4], [6, 0], [8, 4]]),
      ...line([2, 10], [10, 10]),
      ...line([0, 12], [12, 12]),
    ]),
  },
  {
    id: "wasp",
    label: "Guêpe",
    figure: efig([
      ...poly([[2, 4], [6, 0], [10, 4], [10, 8], [6, 12], [2, 8]]),
      ...line([4, 0], [4, 12]),
      ...line([8, 0], [8, 12]),
      ...poly([[2, 4], [0, 0], [0, 6], [2, 6]]),
      ...poly([[10, 4], [12, 0], [12, 6], [10, 6]]),
    ], [{ x: 4, y: 4 }, { x: 8, y: 4 }]),
  },
  {
    id: "rungs",
    label: "Échelle double",
    figure: efig([
      ...line([2, 0], [2, 12]),
      ...line([10, 0], [10, 12]),
      ...line([2, 0], [10, 0]),
      ...line([2, 2], [10, 2]),
      ...line([2, 4], [10, 4]),
      ...line([2, 6], [10, 6]),
      ...line([2, 8], [10, 8]),
      ...line([2, 10], [10, 10]),
      ...line([2, 12], [10, 12]),
    ]),
  },
  {
    id: "arch",
    label: "Arche",
    figure: efig([
      ...line([0, 10], [2, 4], [6, 0], [10, 4], [12, 10]),
      ...line([0, 10], [12, 10]),
      ...line([2, 10], [2, 4]),
      ...line([6, 10], [6, 0]),
      ...line([10, 10], [10, 4]),
      ...line([0, 12], [0, 10]),
      ...line([12, 12], [12, 10]),
    ]),
  },
  {
    id: "mill",
    label: "Moulin à vent",
    figure: efig([
      ...poly([[2, 6], [6, 2], [10, 6], [10, 12], [2, 12]]),
      ...line([6, 2], [6, 0]),
      ...line([6, 2], [0, 0]),
      ...line([6, 2], [12, 0]),
      ...line([6, 2], [0, 6]),
      ...line([6, 2], [12, 6]),
      ...rect(4, 8, 4, 4),
    ]),
  },
  {
    id: "pear",
    label: "Poire",
    figure: efig([
      ...poly([[6, 2], [2, 4], [0, 8], [2, 12], [6, 12], [10, 12], [12, 8], [10, 4]]),
      ...line([6, 2], [6, 0], [8, 0]),
      ...line([6, 2], [4, 0]),
    ]),
  },
  {
    id: "diamond-kite",
    label: "Cerf-volant losange",
    figure: efig([
      ...poly([[6, 0], [10, 4], [6, 10], [2, 4]]),
      ...line([6, 0], [6, 10]),
      ...line([2, 4], [10, 4]),
      ...line([6, 10], [4, 12], [8, 12], [6, 10]),
    ]),
  },
  {
    id: "watch",
    label: "Montre",
    figure: efig([
      ...poly([[2, 2], [10, 2], [12, 4], [12, 8], [10, 10], [2, 10], [0, 8], [0, 4]]),
      ...line([6, 6], [6, 2]),
      ...line([6, 6], [10, 6]),
      ...line([6, 2], [6, 0]),
      ...line([6, 10], [6, 12]),
      ...line([0, 6], [2, 6]),
      ...line([10, 6], [12, 6]),
    ], [{ x: 6, y: 6 }]),
  },
  {
    id: "dagger",
    label: "Dague",
    figure: efig([
      ...poly([[4, 0], [8, 0], [8, 6], [4, 6]]),
      ...line([0, 6], [12, 6]),
      ...line([0, 6], [0, 8], [12, 8], [12, 6]),
      ...rect(4, 8, 4, 2),
      ...poly([[4, 10], [8, 10], [6, 12]]),
    ]),
  },
  {
    id: "serpent",
    label: "Serpent",
    figure: efig([
      ...poly([[0, 6], [2, 2], [6, 4], [8, 0], [12, 2], [10, 6], [12, 8], [8, 10], [4, 8], [2, 12], [0, 8]]),
      ...line([8, 0], [10, 0]),
    ], [{ x: 4, y: 4 }, { x: 10, y: 4 }]),
  },
  {
    id: "scooter",
    label: "Trottinette",
    figure: efig([
      ...poly([[0, 6], [2, 4], [2, 8], [0, 8]]),
      ...poly([[8, 6], [10, 4], [10, 8], [8, 8]]),
      ...line([2, 6], [6, 2], [8, 6]),
      ...line([6, 2], [6, 0], [4, 0]),
      ...line([2, 6], [8, 6]),
    ], [{ x: 0, y: 6 }, { x: 8, y: 6 }]),
  },
  {
    id: "barn-owl",
    label: "Chouette",
    figure: efig([
      ...poly([[2, 2], [4, 0], [6, 2], [8, 0], [10, 2], [12, 6], [10, 12], [2, 12], [0, 6]]),
      ...poly([[2, 4], [4, 2], [6, 4], [4, 6]]),
      ...poly([[6, 4], [8, 2], [10, 4], [8, 6]]),
      ...line([4, 8], [6, 10], [8, 8]),
    ], [{ x: 4, y: 4 }, { x: 8, y: 4 }]),
  },
  {
    id: "beacon",
    label: "Balise",
    figure: efig([
      ...poly([[2, 10], [4, 2], [8, 2], [10, 10]]),
      ...rect(2, 0, 8, 2),
      ...line([6, 0], [6, 2]),
      ...line([0, 10], [12, 10]),
      ...line([0, 12], [12, 12]),
      ...rect(4, 4, 4, 2),
      ...rect(4, 6, 4, 2),
    ]),
  },
  {
    id: "lobster",
    label: "Homard",
    figure: efig([
      ...poly([[2, 4], [4, 2], [8, 2], [10, 4], [10, 8], [8, 10], [4, 10], [2, 8]]),
      ...line([2, 4], [0, 0]),
      ...line([2, 6], [0, 4]),
      ...line([10, 4], [12, 0]),
      ...line([10, 6], [12, 4]),
      ...line([4, 10], [2, 12]),
      ...line([4, 10], [4, 12]),
      ...line([8, 10], [8, 12]),
      ...line([8, 10], [10, 12]),
    ], [{ x: 4, y: 4 }, { x: 8, y: 4 }]),
  },
  {
    id: "gift-box",
    label: "Paquet-cadeau",
    figure: efig([
      ...rect(0, 2, 12, 8),
      ...line([6, 2], [6, 10]),
      ...line([0, 6], [12, 6]),
      ...poly([[2, 2], [4, 0], [6, 2], [8, 0], [10, 2]]),
    ]),
  },
];

for (const { id, figure } of SCALE_FIGURES) assertEvenFigure(id, figure);

const SCALE_DOWN_TASKS: ReproduceTask[] = SCALE_FIGURES.map(({ id, label, figure }) => ({
  id: `scale-down-${id}`,
  kind: "scale_down" as const,
  label,
  reference: figure,
  targetSize: G7_GRID_SIZE,
}));

/**
 * Exercice 3 — 50 figures compactes (coords 0…6) pour agrandissement exact ×2
 * sur grille 12×12 (6×2 = 12).
 */
function sfig(segments: GridSegment[], dots: GridPoint[] = []): GridFigure {
  return { size: G7_GRID_SIZE, dots: dedupeDots(dots), segments: dedupeSegments(segments) };
}

function assertSmallFigure(id: string, figure: GridFigure) {
  const vals: number[] = [];
  for (const s of figure.segments) vals.push(s.x1, s.y1, s.x2, s.y2);
  for (const d of figure.dots) vals.push(d.x, d.y);
  const bad = vals.filter((v) => !Number.isInteger(v) || v < 0 || v > 6);
  if (bad.length) throw new Error(`Figure ${id}: coords hors 0…6: ${bad.join(",")}`);
}

const SCALE_UP_FIGURES: Array<{ id: string; label: string; figure: GridFigure }> = [
  {
    id: "hut",
    label: "Hutte",
    figure: sfig([
      ...poly([[1, 3], [3, 1], [5, 3]]),
      ...rect(1, 3, 4, 2),
      ...rect(2, 4, 1, 1),
    ]),
  },
  {
    id: "missile",
    label: "Missile",
    figure: sfig([
      ...poly([[3, 0], [2, 2], [4, 2]]),
      ...rect(2, 2, 2, 2),
      ...line([2, 4], [1, 6]),
      ...line([4, 4], [5, 6]),
      ...line([2, 4], [4, 4]),
    ], [{ x: 3, y: 3 }]),
  },
  {
    id: "puppy",
    label: "Chiot",
    figure: sfig([
      ...poly([[1, 2], [2, 1], [4, 1], [5, 2], [5, 4], [1, 4]]),
      ...poly([[5, 2], [6, 1], [6, 3], [5, 3]]),
      ...line([2, 4], [2, 6]),
      ...line([4, 4], [4, 6]),
    ], [{ x: 6, y: 2 }]),
  },
  {
    id: "trout",
    label: "Truite",
    figure: sfig([
      ...poly([[0, 3], [2, 1], [4, 2], [5, 3], [4, 4], [2, 5]]),
      ...poly([[5, 3], [6, 2], [6, 4]]),
    ], [{ x: 2, y: 2 }]),
  },
  {
    id: "fir",
    label: "Sapinette",
    figure: sfig([
      ...poly([[3, 0], [1, 2], [2, 2], [0, 4], [6, 4], [4, 2], [5, 2]]),
      ...rect(2, 4, 2, 2),
    ]),
  },
  {
    id: "van",
    label: "Fourgon",
    figure: sfig([
      ...rect(0, 2, 6, 2),
      ...rect(1, 2, 1, 1),
      ...rect(3, 2, 1, 1),
      ...rect(5, 2, 1, 1),
    ], [{ x: 1, y: 5 }, { x: 3, y: 5 }, { x: 5, y: 5 }]),
  },
  {
    id: "sparrow",
    label: "Moineau",
    figure: sfig([
      ...poly([[1, 3], [2, 1], [4, 0], [5, 2], [6, 2], [5, 4], [3, 5], [1, 4]]),
      ...poly([[5, 2], [6, 0], [6, 3]]),
      ...line([2, 5], [2, 6]),
      ...line([4, 5], [4, 6]),
    ], [{ x: 4, y: 2 }]),
  },
  {
    id: "skiff",
    label: "Skiff",
    figure: sfig([
      ...poly([[0, 4], [1, 5], [5, 5], [6, 4]]),
      ...line([3, 4], [3, 0]),
      ...poly([[3, 0], [5, 3], [3, 3]]),
    ]),
  },
  {
    id: "daisy",
    label: "Marguerite",
    figure: sfig([
      ...poly([[3, 0], [2, 1], [3, 2], [4, 1]]),
      ...poly([[3, 2], [1, 1], [1, 3], [3, 3]]),
      ...poly([[3, 2], [5, 1], [5, 3], [3, 3]]),
      ...poly([[3, 3], [1, 4], [2, 5], [4, 5], [5, 4]]),
      ...line([3, 5], [3, 6]),
    ], [{ x: 3, y: 3 }]),
  },
  {
    id: "pony",
    label: "Poney",
    figure: sfig([
      ...poly([[1, 2], [2, 1], [4, 1], [5, 2], [5, 4], [1, 4]]),
      ...poly([[5, 2], [6, 1], [6, 3], [5, 3]]),
      ...line([2, 4], [2, 6]),
      ...line([4, 4], [4, 6]),
      ...line([1, 3], [0, 2]),
    ], [{ x: 6, y: 2 }]),
  },
  {
    id: "keep",
    label: "Donjon",
    figure: sfig([
      ...rect(1, 2, 4, 3),
      ...line([1, 2], [1, 1], [2, 1], [2, 2]),
      ...line([4, 2], [4, 1], [5, 1], [5, 2]),
      ...poly([[2, 2], [3, 0], [4, 2]]),
      ...rect(2, 4, 2, 1),
    ]),
  },
  {
    id: "brolly",
    label: "Ombrelle",
    figure: sfig([
      ...poly([[0, 3], [3, 0], [6, 3]]),
      ...line([0, 3], [6, 3]),
      ...line([1, 3], [1, 2]),
      ...line([3, 3], [3, 1]),
      ...line([5, 3], [5, 2]),
      ...line([3, 3], [3, 6]),
    ]),
  },
  {
    id: "mothling",
    label: "Petite mite",
    figure: sfig([
      ...poly([[3, 1], [0, 0], [0, 2], [2, 3], [3, 2]]),
      ...poly([[3, 1], [6, 0], [6, 2], [4, 3], [3, 2]]),
      ...poly([[3, 2], [1, 4], [0, 6], [2, 5], [3, 4]]),
      ...poly([[3, 2], [5, 4], [6, 6], [4, 5], [3, 4]]),
      ...line([3, 1], [3, 5]),
    ]),
  },
  {
    id: "glider",
    label: "Planeur",
    figure: sfig([
      ...poly([[0, 3], [2, 2], [5, 2], [6, 3], [5, 4], [2, 4]]),
      ...line([3, 2], [1, 0]),
      ...line([3, 4], [1, 6]),
      ...line([5, 2], [6, 0]),
      ...line([5, 4], [6, 6]),
    ]),
  },
  {
    id: "spark",
    label: "Étincelle",
    figure: sfig(poly([
      [3, 0], [4, 2], [6, 2], [4, 3], [5, 6], [3, 4], [1, 6], [2, 3], [0, 2], [2, 2],
    ])),
  },
  {
    id: "badge",
    label: "Écusson",
    figure: sfig([
      ...poly([[1, 0], [5, 0], [6, 2], [3, 6], [0, 2]]),
      ...line([3, 0], [3, 6]),
      ...line([1, 0], [3, 2], [5, 0]),
    ]),
  },
  {
    id: "toad",
    label: "Crapaud",
    figure: sfig([
      ...poly([[0, 3], [3, 0], [6, 3]]),
      ...line([0, 3], [6, 3]),
      ...rect(2, 3, 2, 2),
      ...line([1, 5], [5, 5]),
    ], [{ x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }]),
  },
  {
    id: "spiral",
    label: "Spirale",
    figure: sfig([
      ...poly([[1, 2], [3, 0], [5, 2], [5, 4], [3, 6], [1, 4]]),
      ...line([3, 0], [3, 6]),
      ...line([1, 2], [5, 4]),
      ...line([5, 2], [1, 4]),
    ]),
  },
  {
    id: "bot",
    label: "Petit robot",
    figure: sfig([
      ...rect(2, 0, 2, 1),
      ...rect(1, 1, 4, 3),
      ...line([1, 2], [0, 1], [0, 4], [1, 3]),
      ...line([5, 2], [6, 1], [6, 4], [5, 3]),
      ...line([2, 4], [2, 6]),
      ...line([4, 4], [4, 6]),
      ...rect(2, 2, 1, 1),
      ...rect(3, 2, 1, 1),
    ]),
  },
  {
    id: "diadem",
    label: "Diadème",
    figure: sfig([
      ...poly([[0, 4], [0, 2], [1, 3], [2, 1], [3, 3], [4, 1], [5, 3], [6, 2], [6, 4]]),
      ...line([0, 4], [6, 4]),
      ...line([1, 4], [1, 5], [5, 5], [5, 4]),
    ], [{ x: 2, y: 2 }, { x: 4, y: 2 }]),
  },
  {
    id: "latchkey",
    label: "Clef",
    figure: sfig([
      ...poly([[1, 0], [3, 0], [4, 1], [4, 2], [3, 3], [1, 3], [0, 2], [0, 1]]),
      ...line([3, 1], [6, 1]),
      ...line([6, 1], [6, 3]),
      ...line([4, 1], [4, 3]),
      ...line([5, 1], [5, 2]),
    ]),
  },
  {
    id: "hook",
    label: "Crochet",
    figure: sfig([
      ...rect(2, 0, 2, 1),
      ...line([3, 1], [3, 5]),
      ...line([0, 3], [6, 3]),
      ...poly([[0, 3], [0, 5], [1, 6], [2, 4]]),
      ...poly([[6, 3], [6, 5], [5, 6], [4, 4]]),
      ...line([2, 5], [4, 5]),
    ]),
  },
  {
    id: "lantern",
    label: "Lanterne",
    figure: sfig([
      ...poly([[1, 0], [5, 0], [6, 2], [0, 2]]),
      ...line([3, 2], [3, 4]),
      ...rect(1, 4, 4, 1),
      ...line([0, 5], [6, 5]),
    ]),
  },
  {
    id: "scoop",
    label: "Cornet glacé",
    figure: sfig([
      ...poly([[1, 2], [3, 0], [5, 2]]),
      ...poly([[0, 2], [6, 2], [3, 6]]),
      ...line([1, 2], [2, 1], [4, 1], [5, 2]),
    ], [{ x: 2, y: 1 }, { x: 4, y: 1 }]),
  },
  {
    id: "terrapin",
    label: "Tortue naine",
    figure: sfig([
      ...poly([[1, 2], [3, 0], [5, 2], [6, 3], [5, 4], [3, 5], [1, 4], [0, 3]]),
      ...line([3, 0], [3, 5]),
      ...line([1, 2], [5, 4]),
      ...line([5, 2], [1, 4]),
      ...poly([[5, 2], [6, 1], [6, 3]]),
      ...line([1, 4], [0, 5]),
      ...line([2, 5], [1, 6]),
      ...line([4, 5], [5, 6]),
    ], [{ x: 6, y: 2 }]),
  },
  {
    id: "uke",
    label: "Ukulélé",
    figure: sfig([
      ...poly([[1, 2], [2, 1], [4, 1], [5, 2], [5, 4], [4, 6], [2, 6], [1, 4]]),
      ...line([3, 1], [3, 0]),
      ...line([2, 0], [4, 0]),
      ...rect(2, 3, 2, 1),
    ], [{ x: 3, y: 4 }]),
  },
  {
    id: "hills",
    label: "Collines",
    figure: sfig([
      ...poly([[0, 6], [1, 2], [3, 6]]),
      ...poly([[2, 6], [4, 0], [6, 6]]),
      ...line([0, 6], [6, 6]),
      ...line([1, 2], [2, 3], [0, 3], [1, 2]),
      ...line([4, 0], [5, 2], [3, 2], [4, 0]),
    ]),
  },
  {
    id: "ray",
    label: "Rayon",
    figure: sfig([
      ...poly([[1, 2], [2, 1], [4, 1], [5, 2], [5, 4], [4, 5], [2, 5], [1, 4]]),
      ...line([3, 1], [3, 0]),
      ...line([3, 5], [3, 6]),
      ...line([1, 3], [0, 3]),
      ...line([5, 3], [6, 3]),
      ...line([1, 2], [0, 1]),
      ...line([5, 2], [6, 1]),
      ...line([1, 4], [0, 5]),
      ...line([5, 4], [6, 5]),
    ]),
  },
  {
    id: "slice",
    label: "Croissant lune",
    figure: sfig([
      ...poly([[4, 0], [2, 0], [0, 2], [0, 4], [2, 6], [4, 6], [2, 5], [1, 3], [2, 1], [4, 1]]),
    ], [{ x: 5, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 4 }, { x: 5, y: 5 }]),
  },
  {
    id: "beaker",
    label: "Gobelet",
    figure: sfig([
      ...poly([[1, 1], [4, 1], [4, 5], [1, 5]]),
      ...line([4, 2], [6, 2], [6, 4], [4, 4]),
      ...line([0, 6], [5, 6]),
      ...line([1, 1], [1, 5]),
      ...line([3, 1], [3, 5]),
    ]),
  },
  {
    id: "bowler",
    label: "Chapeau melon",
    figure: sfig([
      ...rect(1, 1, 4, 3),
      ...line([0, 4], [6, 4]),
      ...line([0, 4], [0, 5], [6, 5], [6, 4]),
      ...line([1, 2], [5, 2]),
    ]),
  },
  {
    id: "fern",
    label: "Fougère",
    figure: sfig([
      ...poly([[3, 0], [1, 1], [0, 3], [1, 4], [2, 5], [3, 6], [4, 5], [5, 4], [6, 3], [5, 1]]),
      ...line([3, 0], [3, 6]),
      ...line([3, 2], [1, 1]),
      ...line([3, 2], [5, 1]),
      ...line([3, 4], [0, 3]),
      ...line([3, 4], [6, 3]),
    ]),
  },
  {
    id: "cub",
    label: "Renardeau",
    figure: sfig([
      ...poly([[0, 1], [1, 0], [2, 1], [4, 1], [5, 0], [6, 1], [6, 3], [5, 5], [1, 5], [0, 3]]),
      ...poly([[2, 3], [3, 4], [4, 3]]),
      ...line([1, 5], [1, 6]),
      ...line([5, 5], [5, 6]),
    ], [{ x: 1, y: 2 }, { x: 5, y: 2 }]),
  },
  {
    id: "pickup",
    label: "Pick-up",
    figure: sfig([
      ...rect(0, 1, 4, 3),
      ...poly([[4, 2], [5, 2], [6, 3], [6, 4], [4, 4]]),
      ...rect(4, 2, 1, 1),
    ], [{ x: 1, y: 5 }, { x: 3, y: 5 }, { x: 5, y: 5 }]),
  },
  {
    id: "wigwam",
    label: "Wigwam",
    figure: sfig([
      ...poly([[0, 6], [3, 0], [6, 6]]),
      ...line([0, 6], [6, 6]),
      ...line([3, 0], [3, 6]),
      ...line([1, 6], [1, 4], [5, 4], [5, 6]),
    ]),
  },
  {
    id: "flare",
    label: "Flambeau",
    figure: sfig([
      ...rect(2, 2, 2, 3),
      ...poly([[2, 2], [3, 0], [4, 2]]),
      ...line([1, 5], [5, 5]),
      ...line([0, 6], [6, 6]),
    ]),
  },
  {
    id: "hornet",
    label: "Frelon",
    figure: sfig([
      ...poly([[1, 2], [3, 0], [5, 2], [5, 4], [3, 6], [1, 4]]),
      ...line([2, 0], [2, 6]),
      ...line([4, 0], [4, 6]),
      ...poly([[1, 2], [0, 0], [0, 3], [1, 3]]),
      ...poly([[5, 2], [6, 0], [6, 3], [5, 3]]),
    ], [{ x: 2, y: 2 }, { x: 4, y: 2 }]),
  },
  {
    id: "steps",
    label: "Marches",
    figure: sfig([
      ...line([1, 0], [1, 6]),
      ...line([5, 0], [5, 6]),
      ...line([1, 0], [5, 0]),
      ...line([1, 1], [5, 1]),
      ...line([1, 2], [5, 2]),
      ...line([1, 3], [5, 3]),
      ...line([1, 4], [5, 4]),
      ...line([1, 5], [5, 5]),
      ...line([1, 6], [5, 6]),
    ]),
  },
  {
    id: "span",
    label: "Passerelle",
    figure: sfig([
      ...line([0, 5], [1, 2], [3, 0], [5, 2], [6, 5]),
      ...line([0, 5], [6, 5]),
      ...line([1, 5], [1, 2]),
      ...line([3, 5], [3, 0]),
      ...line([5, 5], [5, 2]),
      ...line([0, 6], [0, 5]),
      ...line([6, 6], [6, 5]),
    ]),
  },
  {
    id: "turbine",
    label: "Turbine",
    figure: sfig([
      ...poly([[1, 3], [3, 1], [5, 3], [5, 6], [1, 6]]),
      ...line([3, 1], [3, 0]),
      ...line([3, 1], [0, 0]),
      ...line([3, 1], [6, 0]),
      ...line([3, 1], [0, 3]),
      ...line([3, 1], [6, 3]),
      ...rect(2, 4, 2, 2),
    ]),
  },
  {
    id: "plum",
    label: "Prune",
    figure: sfig([
      ...poly([[3, 1], [1, 2], [0, 4], [1, 6], [3, 6], [5, 6], [6, 4], [5, 2]]),
      ...line([3, 1], [3, 0], [4, 0]),
      ...line([3, 1], [2, 0]),
    ]),
  },
  {
    id: "flyer",
    label: "Cerf-volant mini",
    figure: sfig([
      ...poly([[3, 0], [5, 2], [3, 5], [1, 2]]),
      ...line([3, 0], [3, 5]),
      ...line([1, 2], [5, 2]),
      ...line([3, 5], [2, 6], [4, 6], [3, 5]),
    ]),
  },
  {
    id: "timer",
    label: "Chrono",
    figure: sfig([
      ...poly([[1, 1], [5, 1], [6, 2], [6, 4], [5, 5], [1, 5], [0, 4], [0, 2]]),
      ...line([3, 3], [3, 1]),
      ...line([3, 3], [5, 3]),
      ...line([3, 1], [3, 0]),
      ...line([3, 5], [3, 6]),
      ...line([0, 3], [1, 3]),
      ...line([5, 3], [6, 3]),
    ], [{ x: 3, y: 3 }]),
  },
  {
    id: "blade",
    label: "Lame",
    figure: sfig([
      ...poly([[2, 0], [4, 0], [4, 3], [2, 3]]),
      ...line([0, 3], [6, 3]),
      ...line([0, 3], [0, 4], [6, 4], [6, 3]),
      ...rect(2, 4, 2, 1),
      ...poly([[2, 5], [4, 5], [3, 6]]),
    ]),
  },
  {
    id: "viper",
    label: "Vipère",
    figure: sfig([
      ...poly([[0, 3], [1, 1], [3, 2], [4, 0], [6, 1], [5, 3], [6, 4], [4, 5], [2, 4], [1, 6], [0, 4]]),
      ...line([4, 0], [5, 0]),
    ], [{ x: 2, y: 2 }, { x: 5, y: 2 }]),
  },
  {
    id: "kick",
    label: "Trotti",
    figure: sfig([
      ...poly([[0, 3], [1, 2], [1, 4], [0, 4]]),
      ...poly([[4, 3], [5, 2], [5, 4], [4, 4]]),
      ...line([1, 3], [3, 1], [4, 3]),
      ...line([3, 1], [3, 0], [2, 0]),
      ...line([1, 3], [4, 3]),
    ], [{ x: 0, y: 3 }, { x: 4, y: 3 }]),
  },
  {
    id: "owlet",
    label: "Hibouneau",
    figure: sfig([
      ...poly([[1, 1], [2, 0], [3, 1], [4, 0], [5, 1], [6, 3], [5, 6], [1, 6], [0, 3]]),
      ...poly([[1, 2], [2, 1], [3, 2], [2, 3]]),
      ...poly([[3, 2], [4, 1], [5, 2], [4, 3]]),
      ...line([2, 4], [3, 5], [4, 4]),
    ], [{ x: 2, y: 2 }, { x: 4, y: 2 }]),
  },
  {
    id: "tower",
    label: "Tourelle",
    figure: sfig([
      ...poly([[1, 5], [2, 1], [4, 1], [5, 5]]),
      ...rect(1, 0, 4, 1),
      ...line([3, 0], [3, 1]),
      ...line([0, 5], [6, 5]),
      ...line([0, 6], [6, 6]),
      ...rect(2, 2, 2, 1),
      ...rect(2, 3, 2, 1),
    ]),
  },
  {
    id: "claw",
    label: "Pince",
    figure: sfig([
      ...poly([[1, 2], [2, 1], [4, 1], [5, 2], [5, 4], [4, 5], [2, 5], [1, 4]]),
      ...line([1, 2], [0, 0]),
      ...line([1, 3], [0, 2]),
      ...line([5, 2], [6, 0]),
      ...line([5, 3], [6, 2]),
      ...line([2, 5], [1, 6]),
      ...line([2, 5], [2, 6]),
      ...line([4, 5], [4, 6]),
      ...line([4, 5], [5, 6]),
    ], [{ x: 2, y: 2 }, { x: 4, y: 2 }]),
  },
  {
    id: "parcel",
    label: "Colis",
    figure: sfig([
      ...rect(0, 1, 6, 4),
      ...line([3, 1], [3, 5]),
      ...line([0, 3], [6, 3]),
      ...poly([[1, 1], [2, 0], [3, 1], [4, 0], [5, 1]]),
    ]),
  },
];

for (const { id, figure } of SCALE_UP_FIGURES) assertSmallFigure(id, figure);

const SCALE_UP_TASKS: ReproduceTask[] = SCALE_UP_FIGURES.map(({ id, label, figure }) => ({
  id: `scale-up-${id}`,
  kind: "scale_up" as const,
  label,
  reference: figure,
  targetSize: G7_GRID_SIZE,
}));

export function pickReproduceTask(variant: 1 | 2 | 3, seed: number): ReproduceTask {
  const pool = variant === 1 ? COPY_TASKS : variant === 2 ? SCALE_DOWN_TASKS : SCALE_UP_TASKS;
  return pool[Math.abs(seed) % pool.length]!;
}

export function taskConsigne(task: ReproduceTask): string {
  if (task.kind === "copy") {
    return "Reproduisez la figure à l'identique sur le quadrillage de droite. Cliquez deux points pour tracer un segment ; cliquez deux fois le même point pour placer un point.";
  }
  if (task.kind === "scale_up") {
    return "Reproduisez la figure en plus grand (×2) sur le quadrillage de droite.";
  }
  return "Reproduisez la figure en plus petit (rapport 2:1) sur le quadrillage de droite.";
}
