/**
 * G7.5 — Rotation sur quadrillage.
 * Modèle : trait bleu à gauche. Cible : trait bleu en haut / droite / bas
 * = rotation du « papier » de 90° / 180° / 270° dans le sens horaire.
 */
import {
  G7_COPY_FIGURES,
  G7_GRID_SIZE,
  pointKey,
  segmentKey,
  type GridFigure,
  type GridPoint,
  type GridSegment,
} from "./g7-reproduce-data";

export type RotationSide = "top" | "right" | "bottom";

export type RotationTask = {
  id: string;
  label: string;
  /** Orientation du trait bleu sur la grille cible. */
  targetSide: RotationSide;
  /** Angle horaire correspondant (90 / 180 / 270). */
  angleCw: 90 | 180 | 270;
  reference: GridFigure;
  size: number;
};

const SIDES: RotationSide[] = ["top", "right", "bottom"];

/** Rotation horaire du papier — origine en haut-gauche, n = taille (intersections 0…n). */
export function rotatePointCw(p: GridPoint, n: number, angleCw: 90 | 180 | 270): GridPoint {
  const { x, y } = p;
  if (angleCw === 90) return { x: n - y, y: x };
  if (angleCw === 180) return { x: n - x, y: n - y };
  return { x: y, y: n - x };
}

export function rotateSegmentCw(s: GridSegment, n: number, angleCw: 90 | 180 | 270): GridSegment {
  const a = rotatePointCw({ x: s.x1, y: s.y1 }, n, angleCw);
  const b = rotatePointCw({ x: s.x2, y: s.y2 }, n, angleCw);
  return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
}

export function sideToAngle(side: RotationSide): 90 | 180 | 270 {
  if (side === "top") return 90;
  if (side === "right") return 180;
  return 270;
}

export function expectedFromRotation(task: RotationTask): { dots: Set<string>; segments: Set<string> } {
  const n = task.size;
  const angle = task.angleCw;
  return {
    dots: new Set(task.reference.dots.map((p) => pointKey(rotatePointCw(p, n, angle)))),
    segments: new Set(task.reference.segments.map((s) => segmentKey(rotateSegmentCw(s, n, angle)))),
  };
}

/** 50 figures (pool copie G7.1) × 3 orientations = tâches possibles. */
const ROTATION_FIGURES = G7_COPY_FIGURES.slice(0, 50);

export function pickRotationTask(seed: number): RotationTask {
  const figIdx = Math.abs(seed) % ROTATION_FIGURES.length;
  const sideIdx = Math.abs(Math.floor(seed / 17) + seed * 3) % SIDES.length;
  const { id, label, figure } = ROTATION_FIGURES[figIdx]!;
  const targetSide = SIDES[sideIdx]!;
  const angleCw = sideToAngle(targetSide);
  return {
    id: `rot-${id}-${targetSide}`,
    label,
    targetSide,
    angleCw,
    reference: figure,
    size: G7_GRID_SIZE,
  };
}

export function rotationConsigne(task: RotationTask, lang?: string): string {
  const sideFr =
    task.targetSide === "top" ? "en haut"
      : task.targetSide === "right" ? "à droite"
        : "en bas";
  if (lang === "en") {
    const sideEn =
      task.targetSide === "top" ? "at the top"
        : task.targetSide === "right" ? "on the right"
          : "at the bottom";
    return `The blue mark is on the left of the model. On the empty grid it is ${sideEn}. Redraw the figure after the matching rotation (${task.angleCw}° clockwise).`;
  }
  if (lang === "ar") {
    return `العلامة الزرقاء على يسار النموذج. على الشبكة الفارغة هي ${sideFr}. أعد رسم الشكل بعد الدوران المناسب (${task.angleCw}° باتجاه عقارب الساعة).`;
  }
  if (lang === "fa") {
    return `علامت آبی در سمت چپ مدل است. روی شبکه خالی ${sideFr} است. شکل را پس از چرخش متناظر (${task.angleCw}° ساعت‌گرد) دوباره بکشید.`;
  }
  return `Le trait bleu est à gauche du modèle. Sur la grille vide, il est ${sideFr}. Reproduisez la figure après la rotation correspondante (${task.angleCw}° dans le sens horaire).`;
}

export function listRotationFigures(): Array<{ id: string; label: string }> {
  return ROTATION_FIGURES.map(({ id, label }) => ({ id, label }));
}
