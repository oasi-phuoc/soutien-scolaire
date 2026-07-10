import type { GridPoint, GridSegment } from "./g7-reproduce-data";
import { pointKey, segmentKey } from "./g7-reproduce-data";
import type { G7SymAxis } from "./g7-reproduce-data";

export type SymmetryReflectTask = {
  id: string;
  label: string;
  width: number;
  height: number;
  axis: G7SymAxis;
  sourceSegments: GridSegment[];
  sourceDots?: GridPoint[];
  hintSegments?: GridSegment[];
  hintDots?: GridPoint[];
};

export function reflectPoint(p: GridPoint, axis: G7SymAxis): GridPoint {
  if (axis.kind === "vertical") return { x: 2 * axis.x - p.x, y: p.y };
  return { x: p.x, y: 2 * axis.y - p.y };
}

export function reflectSegment(s: GridSegment, axis: G7SymAxis): GridSegment {
  const a = reflectPoint({ x: s.x1, y: s.y1 }, axis);
  const b = reflectPoint({ x: s.x2, y: s.y2 }, axis);
  return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
}

export function expectedReflection(task: SymmetryReflectTask): { dots: Set<string>; segments: Set<string> } {
  const segs = task.sourceSegments.map((s) => segmentKey(reflectSegment(s, task.axis)));
  const dots = (task.sourceDots ?? []).map((p) => pointKey(reflectPoint(p, task.axis)));
  return { segments: new Set(segs), dots: new Set(dots) };
}

const SYM_TASKS: SymmetryReflectTask[] = [
  {
    id: "sym-church",
    label: "Église",
    width: 12,
    height: 10,
    axis: { kind: "vertical", x: 6 },
    sourceSegments: [
      { x1: 8, y1: 8, x2: 10, y2: 8 },
      { x1: 8, y1: 8, x2: 8, y2: 5 },
      { x1: 10, y1: 8, x2: 10, y2: 5 },
      { x1: 8, y1: 5, x2: 10, y2: 5 },
      { x1: 9, y1: 5, x2: 9, y2: 3 },
      { x1: 8, y1: 3, x2: 10, y2: 3 },
      { x1: 8, y1: 3, x2: 9, y2: 1 },
      { x1: 9, y1: 1, x2: 10, y2: 3 },
      { x1: 9, y1: 6, x2: 9, y2: 8 },
    ],
  },
  {
    id: "sym-duck",
    label: "Canard",
    width: 12,
    height: 10,
    axis: { kind: "horizontal", y: 5 },
    sourceSegments: [
      { x1: 2, y1: 5, x2: 4, y2: 2 },
      { x1: 4, y1: 2, x2: 8, y2: 2 },
      { x1: 8, y1: 2, x2: 10, y2: 4 },
      { x1: 10, y1: 4, x2: 8, y2: 5 },
      { x1: 8, y1: 5, x2: 4, y2: 5 },
      { x1: 4, y1: 5, x2: 2, y2: 5 },
      { x1: 6, y1: 3, x2: 7, y2: 3 },
      { x1: 7, y1: 3, x2: 7, y2: 4 },
      { x1: 7, y1: 4, x2: 6, y2: 4 },
      { x1: 6, y1: 4, x2: 6, y2: 3 },
    ],
    hintSegments: [{ x1: 4, y1: 5, x2: 4, y2: 7 }],
  },
  {
    id: "sym-lantern",
    label: "Lanterne",
    width: 12,
    height: 10,
    axis: { kind: "vertical", x: 9 },
    sourceSegments: [
      { x1: 2, y1: 8, x2: 6, y2: 8 },
      { x1: 2, y1: 8, x2: 2, y2: 6 },
      { x1: 6, y1: 8, x2: 6, y2: 6 },
      { x1: 2, y1: 6, x2: 6, y2: 6 },
      { x1: 3, y1: 6, x2: 5, y2: 6 },
      { x1: 3, y1: 6, x2: 3, y2: 3 },
      { x1: 5, y1: 6, x2: 5, y2: 3 },
      { x1: 3, y1: 3, x2: 5, y2: 3 },
      { x1: 2, y1: 3, x2: 4, y2: 1 },
      { x1: 4, y1: 1, x2: 6, y2: 3 },
      { x1: 3, y1: 1, x2: 5, y2: 1 },
      { x1: 4, y1: 4, x2: 5, y2: 4 },
      { x1: 5, y1: 4, x2: 5, y2: 5 },
      { x1: 5, y1: 5, x2: 4, y2: 5 },
      { x1: 4, y1: 5, x2: 4, y2: 4 },
    ],
  },
  {
    id: "sym-bar",
    label: "Barre dentelée",
    width: 12,
    height: 8,
    axis: { kind: "horizontal", y: 4 },
    sourceSegments: [
      { x1: 2, y1: 5, x2: 10, y2: 5 },
      { x1: 3, y1: 5, x2: 3, y2: 6 },
      { x1: 5, y1: 5, x2: 5, y2: 6 },
      { x1: 7, y1: 5, x2: 7, y2: 6 },
      { x1: 9, y1: 5, x2: 9, y2: 6 },
    ],
  },
  {
    id: "sym-castle",
    label: "Château",
    width: 14,
    height: 8,
    axis: { kind: "horizontal", y: 4 },
    sourceSegments: [
      { x1: 1, y1: 4, x2: 1, y2: 1 },
      { x1: 1, y1: 1, x2: 3, y2: 1 },
      { x1: 3, y1: 1, x2: 3, y2: 3 },
      { x1: 3, y1: 3, x2: 5, y2: 3 },
      { x1: 5, y1: 3, x2: 5, y2: 1 },
      { x1: 5, y1: 1, x2: 7, y2: 1 },
      { x1: 7, y1: 1, x2: 7, y2: 2 },
      { x1: 7, y1: 2, x2: 9, y2: 2 },
      { x1: 9, y1: 2, x2: 9, y2: 1 },
      { x1: 9, y1: 1, x2: 11, y2: 1 },
      { x1: 11, y1: 1, x2: 11, y2: 4 },
      { x1: 1, y1: 4, x2: 11, y2: 4 },
    ],
  },
  {
    id: "sym-shapes",
    label: "Formes géométriques",
    width: 12,
    height: 10,
    axis: { kind: "vertical", x: 6 },
    sourceSegments: [
      { x1: 8, y1: 2, x2: 8, y2: 5 },
      { x1: 8, y1: 5, x2: 10, y2: 5 },
      { x1: 10, y1: 5, x2: 10, y2: 7 },
      { x1: 8, y1: 7, x2: 10, y2: 7 },
      { x1: 8, y1: 7, x2: 8, y2: 2 },
      { x1: 9, y1: 8, x2: 11, y2: 6 },
      { x1: 11, y1: 6, x2: 11, y2: 8 },
      { x1: 9, y1: 8, x2: 11, y2: 8 },
      { x1: 7, y1: 1, x2: 9, y2: 1 },
      { x1: 9, y1: 1, x2: 10, y2: 3 },
      { x1: 10, y1: 3, x2: 8, y2: 3 },
      { x1: 8, y1: 3, x2: 7, y2: 1 },
    ],
  },
];

export function pickSymmetryTask(seed: number): SymmetryReflectTask {
  return SYM_TASKS[Math.abs(seed) % SYM_TASKS.length]!;
}

export function symmetryConsigne(task: SymmetryReflectTask): string {
  const axisLabel = task.axis.kind === "vertical"
    ? "vertical (trait rouge)"
    : "horizontal (trait rouge)";
  return `Complétez le dessin par symétrie axiale. Le trait rouge est un axe de symétrie ${axisLabel}. Cliquez deux points pour tracer un segment.`;
}

export function isTargetSide(p: GridPoint, axis: G7SymAxis): boolean {
  if (axis.kind === "vertical") return p.x < axis.x;
  return p.y > axis.y;
}
