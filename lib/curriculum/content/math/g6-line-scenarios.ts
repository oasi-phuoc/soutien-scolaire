/** Générateur des 20 situations de droites pour G6.2 exercice 4 */

export type SegmentLine = {
  id: string;
  color: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
};

export type LineScenarioQuestion =
  | { type: "coord"; prompt: string; answer: [number, number] }
  | { type: "color_pair"; prompt: string; point: [number, number]; answer: [string, string] }
  | { type: "bool"; prompt: string; answer: boolean }
  | { type: "parallel_to"; prompt: string; lineId: string; answer: string };

export type LineScenario = {
  id: string;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  lines: SegmentLine[];
  questions: LineScenarioQuestion[];
};

const GRID = { xMin: -10, xMax: 10, yMin: -10, yMax: 10 };

type RawLine = { id: string; color: string; label: string; x1: number; y1: number; x2: number; y2: number };

function intersect(l1: RawLine, l2: RawLine): [number, number] | null {
  const { x1: x1, y1: y1, x2: x2, y2: y2 } = l1;
  const { x1: x3, y1: y3, x2: x4, y2: y4 } = l2;
  const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (Math.abs(denom) < 1e-9) return null;
  const px = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
  const py = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;
  return [Math.round(px * 2) / 2, Math.round(py * 2) / 2];
}

function isParallel(l1: RawLine, l2: RawLine): boolean {
  const dx1 = l1.x2 - l1.x1;
  const dy1 = l1.y2 - l1.y1;
  const dx2 = l2.x2 - l2.x1;
  const dy2 = l2.y2 - l2.y1;
  return Math.abs(dx1 * dy2 - dy1 * dx2) < 1e-6;
}

function isPerpendicular(l1: RawLine, l2: RawLine): boolean {
  const dx1 = l1.x2 - l1.x1;
  const dy1 = l1.y2 - l1.y1;
  const dx2 = l2.x2 - l2.x1;
  const dy2 = l2.y2 - l2.y1;
  return Math.abs(dx1 * dx2 + dy1 * dy2) < 1e-6;
}

function parallelTarget(l: RawLine): "axis_x" | "axis_y" | string | null {
  const dx = l.x2 - l.x1;
  const dy = l.y2 - l.y1;
  if (Math.abs(dy) < 1e-6) return "axis_x";
  if (Math.abs(dx) < 1e-6) return "axis_y";
  return null;
}

function inGrid([x, y]: [number, number]): boolean {
  return x >= GRID.xMin && x <= GRID.xMax && y >= GRID.yMin && y <= GRID.yMax;
}

function fmtCoord(x: number, y: number): string {
  const fx = Number.isInteger(x) ? String(x) : String(x).replace(".", ",");
  const fy = Number.isInteger(y) ? String(y) : String(y).replace(".", ",");
  return `(${fx} ; ${fy})`;
}

function lineLabel(id: string, lines: RawLine[]): string {
  return lines.find((l) => l.id === id)?.label ?? id;
}

/** 20 configurations de droites (points de passage entiers ou demi-entiers) */
const RAW_CONFIGS: RawLine[][] = [
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -8, y1: -6, x2: 6, y2: 8 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -6, y1: 8, x2: 8, y2: -6 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -10, y1: 2, x2: 10, y2: 2 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -10, y1: -5, x2: 10, y2: 9 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -9, y1: 4, x2: 5, y2: -8 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: 2, y1: -10, x2: 2, y2: 10 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -8, y1: -2, x2: 8, y2: 6 },
    { id: "jaune", color: "#ca8a04", label: "jaune", x1: -10, y1: 6, x2: 10, y2: -8 },
  ],
  [
    { id: "violette", color: "#9333ea", label: "violette", x1: -4, y1: -10, x2: 6, y2: 10 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: -4, x2: 10, y2: 6 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -3, y1: -10, x2: 5, y2: 10 },
    { id: "orange", color: "#ea580c", label: "orange", x1: 8, y1: -10, x2: -4, y2: 10 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: 6, x2: 10, y2: 6 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -6, y1: -10, x2: 4, y2: 10 },
    { id: "orange", color: "#ea580c", label: "orange", x1: 6, y1: -10, x2: 6, y2: 10 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -10, y1: -6, x2: 10, y2: 4 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -8, y1: 2, x2: 8, y2: 2 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -2, y1: -10, x2: -2, y2: 10 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -10, y1: -6, x2: 10, y2: 4 },
    { id: "jaune", color: "#ca8a04", label: "jaune", x1: 4, y1: -10, x2: 4, y2: 10 },
  ],
  [
    { id: "orange", color: "#ea580c", label: "orange", x1: -10, y1: 8, x2: 8, y2: -10 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -8, y1: -8, x2: 8, y2: 8 },
    { id: "violette", color: "#9333ea", label: "violette", x1: 4, y1: -10, x2: 4, y2: 10 },
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: -3, x2: 10, y2: 5 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -6, y1: 10, x2: 8, y2: -4 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -10, y1: 4, x2: 10, y2: -2 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -3, y1: -10, x2: -3, y2: 10 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -10, y1: 8, x2: 10, y2: -6 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: -8, x2: 10, y2: 2 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 4, x2: 10, y2: -6 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -10, y1: -2, x2: 10, y2: -2 },
    { id: "violette", color: "#9333ea", label: "violette", x1: 7, y1: -10, x2: 7, y2: 10 },
  ],
  [
    { id: "violette", color: "#9333ea", label: "violette", x1: -8, y1: -10, x2: 2, y2: 10 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -2, y1: -10, x2: 8, y2: 10 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 6, x2: 10, y2: 6 },
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: -8, x2: 10, y2: 2 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: 3, y1: -10, x2: 3, y2: 10 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 7, x2: 10, y2: -3 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -10, y1: -5, x2: 10, y2: 5 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -8, y1: -10, x2: 8, y2: 10 },
  ],
  [
    { id: "orange", color: "#ea580c", label: "orange", x1: -10, y1: 10, x2: 10, y2: -10 },
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: -10, x2: 10, y2: 10 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 4, x2: 10, y2: -4 },
    { id: "verte", color: "#16a34a", label: "verte", x1: 4, y1: -10, x2: 4, y2: 10 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -4, y1: -10, x2: -4, y2: 10 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 3, x2: 10, y2: 3 },
    { id: "violette", color: "#9333ea", label: "violette", x1: -10, y1: -7, x2: 10, y2: 3 },
    { id: "jaune", color: "#ca8a04", label: "jaune", x1: 6, y1: -10, x2: 6, y2: 10 },
  ],
  [
    { id: "verte", color: "#16a34a", label: "verte", x1: -10, y1: 8, x2: 6, y2: -8 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -6, y1: 8, x2: 10, y2: -8 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: -4, x2: 10, y2: -4 },
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -2, y1: -10, x2: -2, y2: 10 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: 2, x2: 10, y2: 2 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: 5, y1: -10, x2: 5, y2: 10 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -10, y1: -8, x2: 10, y2: 2 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -10, y1: 6, x2: 10, y2: -6 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -8, y1: 10, x2: 8, y2: -2 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -10, y1: -6, x2: 10, y2: 4 },
    { id: "violette", color: "#9333ea", label: "violette", x1: -10, y1: 4, x2: 10, y2: 4 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: 2, y1: -10, x2: 2, y2: 10 },
  ],
  [
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 10, x2: 10, y2: -2 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -10, y1: -10, x2: 10, y2: 2 },
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -8, y1: -10, x2: -8, y2: 10 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -10, y1: -4, x2: 10, y2: 8 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: 5, x2: 10, y2: 5 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: -3, x2: 10, y2: 9 },
    { id: "orange", color: "#ea580c", label: "orange", x1: -2, y1: -10, x2: -2, y2: 10 },
    { id: "verte", color: "#16a34a", label: "verte", x1: 8, y1: -10, x2: -6, y2: 10 },
  ],
  [
    { id: "violette", color: "#9333ea", label: "violette", x1: -10, y1: -8, x2: 10, y2: 8 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 8, x2: 10, y2: -8 },
    { id: "verte", color: "#16a34a", label: "verte", x1: 6, y1: -10, x2: 6, y2: 10 },
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: 2, x2: 10, y2: 2 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: -4, x2: 10, y2: 8 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 8, x2: 10, y2: -4 },
    { id: "orange", color: "#ea580c", label: "orange", x1: 5, y1: -10, x2: 5, y2: 10 },
    { id: "jaune", color: "#ca8a04", label: "jaune", x1: -10, y1: -6, x2: 10, y2: 6 },
  ],
  [
    { id: "rouge", color: "#dc2626", label: "rouge", x1: -10, y1: -3, x2: 10, y2: 5 },
    { id: "bleue", color: "#2563eb", label: "bleue", x1: -10, y1: 6, x2: 10, y2: -6 },
    { id: "verte", color: "#16a34a", label: "verte", x1: -6, y1: -10, x2: 6, y2: 10 },
    { id: "violette", color: "#9333ea", label: "violette", x1: -10, y1: -8, x2: 10, y2: 2 },
  ],
];

function buildQuestions(lines: RawLine[], seed: number): LineScenarioQuestion[] {
  const pairs: Array<[RawLine, RawLine, [number, number]]> = [];
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      const pt = intersect(lines[i]!, lines[j]!);
      if (pt && inGrid(pt)) pairs.push([lines[i]!, lines[j]!, pt]);
    }
  }
  const p1 = pairs[seed % pairs.length] ?? pairs[0]!;
  const p2 = pairs[(seed + 1) % pairs.length] ?? pairs[0]!;

  const q1: LineScenarioQuestion = {
    type: "coord",
    prompt: `Les droites ${p1[0].label} et ${p1[1].label} se croisent en`,
    answer: p1[2],
  };

  const q2: LineScenarioQuestion = {
    type: "color_pair",
    prompt: `se croisent en ${fmtCoord(p2[2][0], p2[2][1])}.`,
    point: p2[2],
    answer: [p2[0].id, p2[1].id],
  };

  const relPairs: [RawLine, RawLine][] = [];
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) relPairs.push([lines[i]!, lines[j]!]);
  }
  const relPair = relPairs[seed % relPairs.length]!;
  const askParallel = seed % 2 === 0;
  const q3: LineScenarioQuestion = askParallel
    ? {
        type: "bool",
        prompt: `Les droites ${relPair[0].label} et ${relPair[1].label} sont parallèles.`,
        answer: isParallel(relPair[0], relPair[1]),
      }
    : {
        type: "bool",
        prompt: `Les droites ${relPair[0].label} et ${relPair[1].label} sont perpendiculaires.`,
        answer: isPerpendicular(relPair[0], relPair[1]),
      };

  const focus = lines[seed % lines.length]!;
  const askParallelTo = seed % 2 === 0;
  let q4: LineScenarioQuestion;
  if (askParallelTo) {
    const axisTarget = parallelTarget(focus);
    const other = lines.find((l) => l.id !== focus.id && isParallel(focus, l));
    const answer = axisTarget ?? other?.id ?? "axis_x";
    q4 = {
      type: "parallel_to",
      prompt: `La droite ${focus.label} est parallèle à`,
      lineId: focus.id,
      answer,
    };
  } else {
    const relPairQ4 = relPairs[(seed + 1) % relPairs.length]!;
    const askParallelQ4 = (seed >> 1) % 2 === 0;
    q4 = askParallelQ4
      ? {
          type: "bool",
          prompt: `Les droites ${relPairQ4[0].label} et ${relPairQ4[1].label} sont parallèles.`,
          answer: isParallel(relPairQ4[0], relPairQ4[1]),
        }
      : {
          type: "bool",
          prompt: `Les droites ${relPairQ4[0].label} et ${relPairQ4[1].label} sont perpendiculaires.`,
          answer: isPerpendicular(relPairQ4[0], relPairQ4[1]),
        };
  }

  return [q1, q2, q3, q4];
}

export const LINE_SCENARIOS: LineScenario[] = RAW_CONFIGS.map((lines, i) => ({
  id: `line-${i + 1}`,
  ...GRID,
  lines,
  questions: buildQuestions(lines, i),
}));

export function parallelToLabel(answer: string, lines: SegmentLine[]): string {
  if (answer === "axis_x") return "l'axe des X";
  if (answer === "axis_y") return "l'axe des Y";
  return `la droite ${lineLabel(answer, lines)}`;
}
