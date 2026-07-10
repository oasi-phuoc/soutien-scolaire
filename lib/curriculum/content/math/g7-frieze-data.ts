import type { GridPoint, GridSegment } from "./g7-reproduce-data";
import { pointKey, segmentKey } from "./g7-reproduce-data";

export type FriezeTask = {
  id: string;
  label: string;
  width: number;
  height: number;
  starterSegments: GridSegment[];
  starterDots?: GridPoint[];
  expectedSegments: GridSegment[];
  expectedDots?: GridPoint[];
};

function sq(x: number, y: number, s: number): GridSegment[] {
  return [
    { x1: x, y1: y, x2: x + s, y2: y },
    { x1: x + s, y1: y, x2: x + s, y2: y + s },
    { x1: x + s, y1: y + s, x2: x, y2: y + s },
    { x1: x, y1: y + s, x2: x, y2: y },
  ];
}

function translateSegs(segs: GridSegment[], dx: number, dy: number): GridSegment[] {
  return segs.map((s) => ({
    x1: s.x1 + dx,
    y1: s.y1 + dy,
    x2: s.x2 + dx,
    y2: s.y2 + dy,
  }));
}

const L_BLOCK: GridSegment[] = [
  { x1: 0, y1: 0, x2: 0, y2: 3 },
  { x1: 0, y1: 3, x2: 1, y2: 3 },
  { x1: 1, y1: 3, x2: 1, y2: 1 },
  { x1: 1, y1: 1, x2: 2, y2: 0 },
  { x1: 2, y1: 0, x2: 0, y2: 0 },
];

const TRI_MOTIF: GridSegment[] = [
  { x1: 0, y1: 5, x2: 0, y2: 0 },
  { x1: 0, y1: 5, x2: 2, y2: 5 },
  { x1: 0, y1: 0, x2: 2, y2: 5 },
  { x1: 1, y1: 5, x2: 1, y2: 0 },
  { x1: 2, y1: 5, x2: 4, y2: 5 },
  { x1: 2, y1: 0, x2: 4, y2: 5 },
  { x1: 2, y1: 5, x2: 4, y2: 0 },
];

const FRIEZE_TASKS: FriezeTask[] = [
  {
    id: "frieze-squares",
    label: "Frise de carrés",
    width: 14,
    height: 8,
    starterSegments: [...sq(1, 4, 2), ...sq(3, 2, 2)],
    expectedSegments: [...sq(1, 4, 2), ...sq(3, 2, 2), ...sq(5, 4, 2), ...sq(7, 2, 2), ...sq(9, 4, 2)],
  },
  {
    id: "frieze-l-block",
    label: "Frise de blocs en L",
    width: 14,
    height: 6,
    starterSegments: [...translateSegs(L_BLOCK, 1, 1), ...translateSegs(L_BLOCK, 4, 1)],
    expectedSegments: [
      ...translateSegs(L_BLOCK, 1, 1),
      ...translateSegs(L_BLOCK, 4, 1),
      ...translateSegs(L_BLOCK, 7, 1),
      ...translateSegs(L_BLOCK, 10, 1),
    ],
  },
  {
    id: "frieze-vlines",
    label: "Frise de lignes verticales",
    width: 16,
    height: 10,
    starterSegments: [
      { x1: 1, y1: 0, x2: 1, y2: 6 },
      { x1: 2, y1: 2, x2: 2, y2: 10 },
      { x1: 3, y1: 4, x2: 3, y2: 7 },
      { x1: 4, y1: 1, x2: 4, y2: 9 },
      { x1: 5, y1: 0, x2: 5, y2: 6 },
      { x1: 6, y1: 2, x2: 6, y2: 10 },
      { x1: 7, y1: 4, x2: 7, y2: 7 },
    ],
    expectedSegments: [
      { x1: 1, y1: 0, x2: 1, y2: 6 },
      { x1: 2, y1: 2, x2: 2, y2: 10 },
      { x1: 3, y1: 4, x2: 3, y2: 7 },
      { x1: 4, y1: 1, x2: 4, y2: 9 },
      { x1: 5, y1: 0, x2: 5, y2: 6 },
      { x1: 6, y1: 2, x2: 6, y2: 10 },
      { x1: 7, y1: 4, x2: 7, y2: 7 },
      { x1: 8, y1: 1, x2: 8, y2: 9 },
      { x1: 9, y1: 0, x2: 9, y2: 6 },
      { x1: 10, y1: 2, x2: 10, y2: 10 },
      { x1: 11, y1: 4, x2: 11, y2: 7 },
      { x1: 12, y1: 1, x2: 12, y2: 9 },
    ],
  },
  {
    id: "frieze-zigzag",
    label: "Frise en dents de scie",
    width: 16,
    height: 6,
    starterSegments: [
      { x1: 0, y1: 5, x2: 1, y2: 5 },
      { x1: 1, y1: 5, x2: 2, y2: 1 },
      { x1: 2, y1: 1, x2: 3, y2: 5 },
      { x1: 3, y1: 5, x2: 4, y2: 5 },
      { x1: 4, y1: 5, x2: 5, y2: 2 },
      { x1: 5, y1: 2, x2: 6, y2: 5 },
      { x1: 6, y1: 5, x2: 7, y2: 5 },
      { x1: 7, y1: 5, x2: 8, y2: 3 },
    ],
    expectedSegments: [
      { x1: 0, y1: 5, x2: 1, y2: 5 },
      { x1: 1, y1: 5, x2: 2, y2: 1 },
      { x1: 2, y1: 1, x2: 3, y2: 5 },
      { x1: 3, y1: 5, x2: 4, y2: 5 },
      { x1: 4, y1: 5, x2: 5, y2: 2 },
      { x1: 5, y1: 2, x2: 6, y2: 5 },
      { x1: 6, y1: 5, x2: 7, y2: 5 },
      { x1: 7, y1: 5, x2: 8, y2: 3 },
      { x1: 8, y1: 3, x2: 9, y2: 5 },
      { x1: 9, y1: 5, x2: 10, y2: 5 },
      { x1: 10, y1: 5, x2: 11, y2: 1 },
      { x1: 11, y1: 1, x2: 12, y2: 5 },
      { x1: 12, y1: 5, x2: 13, y2: 5 },
      { x1: 13, y1: 5, x2: 14, y2: 2 },
      { x1: 14, y1: 2, x2: 15, y2: 5 },
      { x1: 15, y1: 5, x2: 16, y2: 5 },
    ],
  },
  {
    id: "frieze-triangles",
    label: "Frise de triangles",
    width: 16,
    height: 6,
    starterSegments: translateSegs(TRI_MOTIF, 1, 0),
    expectedSegments: [...translateSegs(TRI_MOTIF, 1, 0), ...translateSegs(TRI_MOTIF, 9, 0)],
  },
];

export function pickFriezeTask(seed: number): FriezeTask {
  return FRIEZE_TASKS[Math.abs(seed) % FRIEZE_TASKS.length]!;
}

export function expectedFriezeCompletion(task: FriezeTask): { dots: Set<string>; segments: Set<string> } {
  const starterS = new Set(task.starterSegments.map(segmentKey));
  const starterD = new Set((task.starterDots ?? []).map(pointKey));
  const expS = new Set(task.expectedSegments.map(segmentKey));
  const expD = new Set((task.expectedDots ?? []).map(pointKey));
  return {
    segments: new Set([...expS].filter((k) => !starterS.has(k))),
    dots: new Set([...expD].filter((k) => !starterD.has(k))),
  };
}

export function friezeConsigne(): string {
  return "Complétez la frise en prolongeant le motif. Les traits gris sont déjà tracés. Cliquez deux points pour ajouter un segment.";
}
