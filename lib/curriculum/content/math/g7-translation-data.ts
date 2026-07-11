import type { GridPoint, GridSegment } from "./g7-reproduce-data";
import { pointKey, segmentKey } from "./g7-reproduce-data";

/** Grille translation G7.4 : 20×20. */
export const G7_TRANSLATION_SIZE = 20;

export type TranslationVector = { dx: number; dy: number };

export type TranslationTask = {
  id: string;
  label: string;
  width: number;
  height: number;
  /** Vecteur de translation (cases). */
  vector: TranslationVector;
  /** Origine de la flèche bleue sur la grille. */
  arrowFrom: GridPoint;
  sourceSegments: GridSegment[];
  sourceDots: GridPoint[];
};

export function translatePoint(p: GridPoint, v: TranslationVector): GridPoint {
  return { x: p.x + v.dx, y: p.y + v.dy };
}

export function translateSegment(s: GridSegment, v: TranslationVector): GridSegment {
  const a = translatePoint({ x: s.x1, y: s.y1 }, v);
  const b = translatePoint({ x: s.x2, y: s.y2 }, v);
  return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
}

export function expectedTranslation(task: TranslationTask): {
  dots: Set<string>;
  segments: Set<string>;
} {
  return {
    segments: new Set(task.sourceSegments.map((s) => segmentKey(translateSegment(s, task.vector)))),
    dots: new Set(task.sourceDots.map((p) => pointKey(translatePoint(p, task.vector)))),
  };
}

/** Zone de dessin : toute la grille sauf les points source verrouillés (géré côté UI). */
export function isDrawSideTranslation(_p: GridPoint, _task: TranslationTask): boolean {
  return true;
}

function task(
  id: string,
  label: string,
  dx: number,
  dy: number,
  arrowFrom: GridPoint,
  segs: GridSegment[],
  dots: GridPoint[] = [],
): TranslationTask {
  return {
    id,
    label,
    width: G7_TRANSLATION_SIZE,
    height: G7_TRANSLATION_SIZE,
    vector: { dx, dy },
    arrowFrom,
    sourceSegments: segs,
    sourceDots: dots,
  };
}

const TRANSLATION_TASKS: TranslationTask[] = [
  task("T01-maison", "Maison (+4 ; +0)", 4, 0, { x: 16, y: 20 }, [{ x1: 0, y1: 3, x2: 2, y2: 0 }, { x1: 2, y1: 0, x2: 4, y2: 3 }, { x1: 4, y1: 3, x2: 4, y2: 6 }, { x1: 4, y1: 6, x2: 0, y2: 6 }, { x1: 0, y1: 6, x2: 0, y2: 3 }, { x1: 1, y1: 6, x2: 1, y2: 4 }, { x1: 1, y1: 4, x2: 3, y2: 4 }, { x1: 3, y1: 4, x2: 3, y2: 6 }, { x1: 2, y1: 0, x2: 2, y2: 3 }], [{ x: 2, y: 2 }]),
  task("T02-fleche", "Flèche (+0 ; +4)", 0, 4, { x: 20, y: 16 }, [{ x1: 2, y1: 0, x2: 2, y2: 5 }, { x1: 0, y1: 2, x2: 2, y2: 0 }, { x1: 2, y1: 0, x2: 4, y2: 2 }, { x1: 4, y1: 2, x2: 0, y2: 2 }, { x1: 1, y1: 5, x2: 3, y2: 5 }, { x1: 3, y1: 5, x2: 3, y2: 6 }, { x1: 3, y1: 6, x2: 1, y2: 6 }], [{ x: 2, y: 3 }]),
  task("T03-escalier", "Escalier (+5 ; +2)", 5, 2, { x: 15, y: 18 }, [{ x1: 0, y1: 6, x2: 0, y2: 4 }, { x1: 0, y1: 4, x2: 2, y2: 4 }, { x1: 2, y1: 4, x2: 2, y2: 2 }, { x1: 2, y1: 2, x2: 4, y2: 2 }, { x1: 4, y1: 2, x2: 4, y2: 0 }, { x1: 4, y1: 0, x2: 6, y2: 0 }], [{ x: 2, y: 4 }]),
  task("T04-triangle", "Triangle (+3 ; +3)", 3, 3, { x: 17, y: 17 }, [{ x1: 0, y1: 5, x2: 3, y2: 0 }, { x1: 3, y1: 0, x2: 6, y2: 5 }, { x1: 6, y1: 5, x2: 0, y2: 5 }, { x1: 1, y1: 4, x2: 5, y2: 4 }], [{ x: 3, y: 2 }]),
  task("T05-croix", "Croix (+6 ; +1)", 6, 1, { x: 14, y: 19 }, [{ x1: 2, y1: 0, x2: 2, y2: 6 }, { x1: 0, y1: 2, x2: 4, y2: 2 }, { x1: 1, y1: 0, x2: 3, y2: 0 }, { x1: 1, y1: 6, x2: 3, y2: 6 }, { x1: 0, y1: 1, x2: 0, y2: 3 }, { x1: 4, y1: 1, x2: 4, y2: 3 }], [{ x: 2, y: 2 }]),
  task("T06-u", "U (-4 ; +0)", -4, 0, { x: 20, y: 20 }, [{ x1: 4, y1: 0, x2: 4, y2: 5 }, { x1: 4, y1: 5, x2: 9, y2: 5 }, { x1: 9, y1: 5, x2: 9, y2: 0 }, { x1: 5, y1: 5, x2: 5, y2: 1 }, { x1: 5, y1: 1, x2: 8, y2: 1 }, { x1: 8, y1: 1, x2: 8, y2: 5 }], [{ x: 6, y: 3 }]),
  task("T07-losange", "Losange (+0 ; -4)", 0, -4, { x: 20, y: 20 }, [{ x1: 3, y1: 4, x2: 6, y2: 7 }, { x1: 6, y1: 7, x2: 3, y2: 10 }, { x1: 3, y1: 10, x2: 0, y2: 7 }, { x1: 0, y1: 7, x2: 3, y2: 4 }, { x1: 3, y1: 4, x2: 3, y2: 10 }], [{ x: 3, y: 7 }]),
  task("T08-te", "Té (-3 ; +2)", -3, 2, { x: 20, y: 18 }, [{ x1: 3, y1: 0, x2: 9, y2: 0 }, { x1: 6, y1: 0, x2: 6, y2: 6 }, { x1: 4, y1: 2, x2: 8, y2: 2 }, { x1: 5, y1: 6, x2: 7, y2: 6 }], [{ x: 6, y: 2 }]),
  task("T09-zigzag", "Zigzag (+4 ; -3)", 4, -3, { x: 16, y: 20 }, [{ x1: 0, y1: 3, x2: 2, y2: 6 }, { x1: 2, y1: 6, x2: 4, y2: 3 }, { x1: 4, y1: 3, x2: 6, y2: 6 }, { x1: 6, y1: 6, x2: 6, y2: 8 }, { x1: 6, y1: 8, x2: 0, y2: 8 }], [{ x: 3, y: 5 }]),
  task("T10-cadre", "Cadre (-5 ; -2)", -5, -2, { x: 20, y: 20 }, [{ x1: 5, y1: 2, x2: 10, y2: 2 }, { x1: 10, y1: 2, x2: 10, y2: 7 }, { x1: 10, y1: 7, x2: 5, y2: 7 }, { x1: 5, y1: 7, x2: 5, y2: 2 }, { x1: 6, y1: 3, x2: 9, y2: 3 }, { x1: 9, y1: 3, x2: 9, y2: 6 }, { x1: 9, y1: 6, x2: 6, y2: 6 }, { x1: 6, y1: 6, x2: 6, y2: 3 }, { x1: 5, y1: 2, x2: 6, y2: 3 }, { x1: 10, y1: 7, x2: 9, y2: 6 }], [{ x: 7, y: 4 }]),
  task("T11-bateau", "Bateau (+7 ; +0)", 7, 0, { x: 13, y: 20 }, [{ x1: 0, y1: 3, x2: 1, y2: 5 }, { x1: 1, y1: 5, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 6, y2: 3 }, { x1: 6, y1: 3, x2: 0, y2: 3 }, { x1: 3, y1: 3, x2: 3, y2: 0 }, { x1: 3, y1: 0, x2: 5, y2: 2 }, { x1: 5, y1: 2, x2: 3, y2: 2 }], [{ x: 3, y: 1 }]),
  task("T12-etoile", "Étoile (+0 ; +6)", 0, 6, { x: 20, y: 14 }, [{ x1: 3, y1: 0, x2: 3, y2: 6 }, { x1: 0, y1: 3, x2: 6, y2: 3 }, { x1: 1, y1: 1, x2: 5, y2: 5 }, { x1: 5, y1: 1, x2: 1, y2: 5 }], [{ x: 3, y: 3 }]),
  task("T13-l", "L (+5 ; -4)", 5, -4, { x: 15, y: 20 }, [{ x1: 0, y1: 4, x2: 0, y2: 10 }, { x1: 0, y1: 10, x2: 4, y2: 10 }, { x1: 1, y1: 4, x2: 1, y2: 9 }, { x1: 1, y1: 9, x2: 4, y2: 9 }, { x1: 0, y1: 4, x2: 1, y2: 4 }, { x1: 4, y1: 9, x2: 4, y2: 10 }], [{ x: 1, y: 7 }]),
  task("T14-pentagone", "Pentagone (-4 ; +5)", -4, 5, { x: 20, y: 15 }, [{ x1: 7, y1: 0, x2: 10, y2: 2 }, { x1: 10, y1: 2, x2: 9, y2: 5 }, { x1: 9, y1: 5, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 4, y2: 2 }, { x1: 4, y1: 2, x2: 7, y2: 0 }], [{ x: 7, y: 2 }]),
  task("T15-flecheh", "FlècheH (+3 ; -5)", 3, -5, { x: 17, y: 20 }, [{ x1: 0, y1: 7, x2: 4, y2: 7 }, { x1: 4, y1: 5, x2: 6, y2: 7 }, { x1: 6, y1: 7, x2: 4, y2: 9 }, { x1: 4, y1: 9, x2: 4, y2: 5 }, { x1: 0, y1: 6, x2: 0, y2: 8 }], [{ x: 2, y: 7 }]),
  task("T16-trapeze", "Trapèze (+8 ; +2)", 8, 2, { x: 12, y: 18 }, [{ x1: 1, y1: 0, x2: 5, y2: 0 }, { x1: 5, y1: 0, x2: 6, y2: 4 }, { x1: 6, y1: 4, x2: 0, y2: 4 }, { x1: 0, y1: 4, x2: 1, y2: 0 }, { x1: 2, y1: 2, x2: 4, y2: 2 }], [{ x: 3, y: 1 }]),
  task("T17-fusee", "Fusée (-6 ; +3)", -6, 3, { x: 20, y: 17 }, [{ x1: 8, y1: 0, x2: 10, y2: 2 }, { x1: 10, y1: 2, x2: 10, y2: 5 }, { x1: 10, y1: 5, x2: 8, y2: 5 }, { x1: 8, y1: 5, x2: 6, y2: 2 }, { x1: 6, y1: 2, x2: 8, y2: 0 }, { x1: 7, y1: 5, x2: 7, y2: 6 }, { x1: 7, y1: 6, x2: 9, y2: 6 }, { x1: 9, y1: 6, x2: 9, y2: 5 }, { x1: 8, y1: 2, x2: 8, y2: 4 }], [{ x: 8, y: 3 }]),
  task("T18-pont", "Pont (+2 ; +7)", 2, 7, { x: 18, y: 13 }, [{ x1: 0, y1: 4, x2: 0, y2: 2 }, { x1: 0, y1: 2, x2: 2, y2: 0 }, { x1: 2, y1: 0, x2: 4, y2: 0 }, { x1: 4, y1: 0, x2: 6, y2: 2 }, { x1: 6, y1: 2, x2: 6, y2: 4 }, { x1: 0, y1: 4, x2: 6, y2: 4 }, { x1: 2, y1: 4, x2: 2, y2: 2 }, { x1: 4, y1: 4, x2: 4, y2: 2 }], [{ x: 3, y: 1 }]),
  task("T19-maison", "Maison (-2 ; -6)", -2, -6, { x: 20, y: 20 }, [{ x1: 2, y1: 9, x2: 4, y2: 6 }, { x1: 4, y1: 6, x2: 6, y2: 9 }, { x1: 6, y1: 9, x2: 6, y2: 12 }, { x1: 6, y1: 12, x2: 2, y2: 12 }, { x1: 2, y1: 12, x2: 2, y2: 9 }, { x1: 3, y1: 12, x2: 3, y2: 10 }, { x1: 3, y1: 10, x2: 5, y2: 10 }, { x1: 5, y1: 10, x2: 5, y2: 12 }, { x1: 4, y1: 6, x2: 4, y2: 9 }], [{ x: 4, y: 8 }]),
  task("T20-fleche", "Flèche (+6 ; +6)", 6, 6, { x: 14, y: 14 }, [{ x1: 2, y1: 0, x2: 2, y2: 5 }, { x1: 0, y1: 2, x2: 2, y2: 0 }, { x1: 2, y1: 0, x2: 4, y2: 2 }, { x1: 4, y1: 2, x2: 0, y2: 2 }, { x1: 1, y1: 5, x2: 3, y2: 5 }, { x1: 3, y1: 5, x2: 3, y2: 6 }, { x1: 3, y1: 6, x2: 1, y2: 6 }], [{ x: 2, y: 3 }]),
  task("T21-escalier", "Escalier (-7 ; -1)", -7, -1, { x: 7, y: 20 }, [{ x1: 7, y1: 7, x2: 7, y2: 5 }, { x1: 7, y1: 5, x2: 9, y2: 5 }, { x1: 9, y1: 5, x2: 9, y2: 3 }, { x1: 9, y1: 3, x2: 11, y2: 3 }, { x1: 11, y1: 3, x2: 11, y2: 1 }, { x1: 11, y1: 1, x2: 13, y2: 1 }], [{ x: 9, y: 5 }]),
  task("T22-triangle", "Triangle (+4 ; +5)", 4, 5, { x: 16, y: 15 }, [{ x1: 0, y1: 5, x2: 3, y2: 0 }, { x1: 3, y1: 0, x2: 6, y2: 5 }, { x1: 6, y1: 5, x2: 0, y2: 5 }, { x1: 1, y1: 4, x2: 5, y2: 4 }], [{ x: 3, y: 2 }]),
  task("T23-croix", "Croix (-5 ; +4)", -5, 4, { x: 20, y: 16 }, [{ x1: 7, y1: 0, x2: 7, y2: 6 }, { x1: 5, y1: 2, x2: 9, y2: 2 }, { x1: 6, y1: 0, x2: 8, y2: 0 }, { x1: 6, y1: 6, x2: 8, y2: 6 }, { x1: 5, y1: 1, x2: 5, y2: 3 }, { x1: 9, y1: 1, x2: 9, y2: 3 }], [{ x: 7, y: 2 }]),
  task("T24-u", "U (+1 ; -7)", 1, -7, { x: 19, y: 20 }, [{ x1: 0, y1: 7, x2: 0, y2: 12 }, { x1: 0, y1: 12, x2: 5, y2: 12 }, { x1: 5, y1: 12, x2: 5, y2: 7 }, { x1: 1, y1: 12, x2: 1, y2: 8 }, { x1: 1, y1: 8, x2: 4, y2: 8 }, { x1: 4, y1: 8, x2: 4, y2: 12 }], [{ x: 2, y: 10 }]),
  task("T25-losange", "Losange (+9 ; +0)", 9, 0, { x: 11, y: 20 }, [{ x1: 3, y1: 0, x2: 6, y2: 3 }, { x1: 6, y1: 3, x2: 3, y2: 6 }, { x1: 3, y1: 6, x2: 0, y2: 3 }, { x1: 0, y1: 3, x2: 3, y2: 0 }, { x1: 3, y1: 0, x2: 3, y2: 6 }], [{ x: 3, y: 3 }]),
  task("T26-te", "Té (+4 ; +0)", 4, 0, { x: 16, y: 20 }, [{ x1: 0, y1: 0, x2: 6, y2: 0 }, { x1: 3, y1: 0, x2: 3, y2: 6 }, { x1: 1, y1: 2, x2: 5, y2: 2 }, { x1: 2, y1: 6, x2: 4, y2: 6 }], [{ x: 3, y: 2 }]),
  task("T27-zigzag", "Zigzag (+0 ; +4)", 0, 4, { x: 20, y: 16 }, [{ x1: 0, y1: 0, x2: 2, y2: 3 }, { x1: 2, y1: 3, x2: 4, y2: 0 }, { x1: 4, y1: 0, x2: 6, y2: 3 }, { x1: 6, y1: 3, x2: 6, y2: 5 }, { x1: 6, y1: 5, x2: 0, y2: 5 }], [{ x: 3, y: 2 }]),
  task("T28-cadre", "Cadre (+5 ; +2)", 5, 2, { x: 15, y: 18 }, [{ x1: 0, y1: 0, x2: 5, y2: 0 }, { x1: 5, y1: 0, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 0, y2: 5 }, { x1: 0, y1: 5, x2: 0, y2: 0 }, { x1: 1, y1: 1, x2: 4, y2: 1 }, { x1: 4, y1: 1, x2: 4, y2: 4 }, { x1: 4, y1: 4, x2: 1, y2: 4 }, { x1: 1, y1: 4, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 5, y1: 5, x2: 4, y2: 4 }], [{ x: 2, y: 2 }]),
  task("T29-bateau", "Bateau (+3 ; +3)", 3, 3, { x: 17, y: 17 }, [{ x1: 0, y1: 3, x2: 1, y2: 5 }, { x1: 1, y1: 5, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 6, y2: 3 }, { x1: 6, y1: 3, x2: 0, y2: 3 }, { x1: 3, y1: 3, x2: 3, y2: 0 }, { x1: 3, y1: 0, x2: 5, y2: 2 }, { x1: 5, y1: 2, x2: 3, y2: 2 }], [{ x: 3, y: 1 }]),
  task("T30-etoile", "Étoile (+6 ; +1)", 6, 1, { x: 14, y: 19 }, [{ x1: 3, y1: 0, x2: 3, y2: 6 }, { x1: 0, y1: 3, x2: 6, y2: 3 }, { x1: 1, y1: 1, x2: 5, y2: 5 }, { x1: 5, y1: 1, x2: 1, y2: 5 }], [{ x: 3, y: 3 }]),
  task("T31-l", "L (-4 ; +0)", -4, 0, { x: 20, y: 20 }, [{ x1: 4, y1: 0, x2: 4, y2: 6 }, { x1: 4, y1: 6, x2: 8, y2: 6 }, { x1: 5, y1: 0, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 8, y2: 5 }, { x1: 4, y1: 0, x2: 5, y2: 0 }, { x1: 8, y1: 5, x2: 8, y2: 6 }], [{ x: 5, y: 3 }]),
  task("T32-pentagone", "Pentagone (+0 ; -4)", 0, -4, { x: 20, y: 20 }, [{ x1: 3, y1: 4, x2: 6, y2: 6 }, { x1: 6, y1: 6, x2: 5, y2: 9 }, { x1: 5, y1: 9, x2: 1, y2: 9 }, { x1: 1, y1: 9, x2: 0, y2: 6 }, { x1: 0, y1: 6, x2: 3, y2: 4 }], [{ x: 3, y: 6 }]),
  task("T33-flecheh", "FlècheH (-3 ; +2)", -3, 2, { x: 20, y: 18 }, [{ x1: 3, y1: 2, x2: 7, y2: 2 }, { x1: 7, y1: 0, x2: 9, y2: 2 }, { x1: 9, y1: 2, x2: 7, y2: 4 }, { x1: 7, y1: 4, x2: 7, y2: 0 }, { x1: 3, y1: 1, x2: 3, y2: 3 }], [{ x: 5, y: 2 }]),
  task("T34-trapeze", "Trapèze (+4 ; -3)", 4, -3, { x: 16, y: 20 }, [{ x1: 1, y1: 3, x2: 5, y2: 3 }, { x1: 5, y1: 3, x2: 6, y2: 7 }, { x1: 6, y1: 7, x2: 0, y2: 7 }, { x1: 0, y1: 7, x2: 1, y2: 3 }, { x1: 2, y1: 5, x2: 4, y2: 5 }], [{ x: 3, y: 4 }]),
  task("T35-fusee", "Fusée (-5 ; -2)", -5, -2, { x: 20, y: 20 }, [{ x1: 7, y1: 2, x2: 9, y2: 4 }, { x1: 9, y1: 4, x2: 9, y2: 7 }, { x1: 9, y1: 7, x2: 7, y2: 7 }, { x1: 7, y1: 7, x2: 5, y2: 4 }, { x1: 5, y1: 4, x2: 7, y2: 2 }, { x1: 6, y1: 7, x2: 6, y2: 8 }, { x1: 6, y1: 8, x2: 8, y2: 8 }, { x1: 8, y1: 8, x2: 8, y2: 7 }, { x1: 7, y1: 4, x2: 7, y2: 6 }], [{ x: 7, y: 5 }]),
  task("T36-pont", "Pont (+7 ; +0)", 7, 0, { x: 13, y: 20 }, [{ x1: 0, y1: 4, x2: 0, y2: 2 }, { x1: 0, y1: 2, x2: 2, y2: 0 }, { x1: 2, y1: 0, x2: 4, y2: 0 }, { x1: 4, y1: 0, x2: 6, y2: 2 }, { x1: 6, y1: 2, x2: 6, y2: 4 }, { x1: 0, y1: 4, x2: 6, y2: 4 }, { x1: 2, y1: 4, x2: 2, y2: 2 }, { x1: 4, y1: 4, x2: 4, y2: 2 }], [{ x: 3, y: 1 }]),
  task("T37-maison", "Maison (+0 ; +6)", 0, 6, { x: 20, y: 14 }, [{ x1: 0, y1: 3, x2: 2, y2: 0 }, { x1: 2, y1: 0, x2: 4, y2: 3 }, { x1: 4, y1: 3, x2: 4, y2: 6 }, { x1: 4, y1: 6, x2: 0, y2: 6 }, { x1: 0, y1: 6, x2: 0, y2: 3 }, { x1: 1, y1: 6, x2: 1, y2: 4 }, { x1: 1, y1: 4, x2: 3, y2: 4 }, { x1: 3, y1: 4, x2: 3, y2: 6 }, { x1: 2, y1: 0, x2: 2, y2: 3 }], [{ x: 2, y: 2 }]),
  task("T38-fleche", "Flèche (+5 ; -4)", 5, -4, { x: 15, y: 20 }, [{ x1: 2, y1: 4, x2: 2, y2: 9 }, { x1: 0, y1: 6, x2: 2, y2: 4 }, { x1: 2, y1: 4, x2: 4, y2: 6 }, { x1: 4, y1: 6, x2: 0, y2: 6 }, { x1: 1, y1: 9, x2: 3, y2: 9 }, { x1: 3, y1: 9, x2: 3, y2: 10 }, { x1: 3, y1: 10, x2: 1, y2: 10 }], [{ x: 2, y: 7 }]),
  task("T39-escalier", "Escalier (-4 ; +5)", -4, 5, { x: 20, y: 15 }, [{ x1: 4, y1: 6, x2: 4, y2: 4 }, { x1: 4, y1: 4, x2: 6, y2: 4 }, { x1: 6, y1: 4, x2: 6, y2: 2 }, { x1: 6, y1: 2, x2: 8, y2: 2 }, { x1: 8, y1: 2, x2: 8, y2: 0 }, { x1: 8, y1: 0, x2: 10, y2: 0 }], [{ x: 6, y: 4 }]),
  task("T40-triangle", "Triangle (+3 ; -5)", 3, -5, { x: 17, y: 20 }, [{ x1: 0, y1: 10, x2: 3, y2: 5 }, { x1: 3, y1: 5, x2: 6, y2: 10 }, { x1: 6, y1: 10, x2: 0, y2: 10 }, { x1: 1, y1: 9, x2: 5, y2: 9 }], [{ x: 3, y: 7 }]),
  task("T41-croix", "Croix (+8 ; +2)", 8, 2, { x: 12, y: 18 }, [{ x1: 2, y1: 0, x2: 2, y2: 6 }, { x1: 0, y1: 2, x2: 4, y2: 2 }, { x1: 1, y1: 0, x2: 3, y2: 0 }, { x1: 1, y1: 6, x2: 3, y2: 6 }, { x1: 0, y1: 1, x2: 0, y2: 3 }, { x1: 4, y1: 1, x2: 4, y2: 3 }], [{ x: 2, y: 2 }]),
  task("T42-u", "U (-6 ; +3)", -6, 3, { x: 20, y: 17 }, [{ x1: 6, y1: 0, x2: 6, y2: 5 }, { x1: 6, y1: 5, x2: 11, y2: 5 }, { x1: 11, y1: 5, x2: 11, y2: 0 }, { x1: 7, y1: 5, x2: 7, y2: 1 }, { x1: 7, y1: 1, x2: 10, y2: 1 }, { x1: 10, y1: 1, x2: 10, y2: 5 }], [{ x: 8, y: 3 }]),
  task("T43-losange", "Losange (+2 ; +7)", 2, 7, { x: 18, y: 13 }, [{ x1: 3, y1: 0, x2: 6, y2: 3 }, { x1: 6, y1: 3, x2: 3, y2: 6 }, { x1: 3, y1: 6, x2: 0, y2: 3 }, { x1: 0, y1: 3, x2: 3, y2: 0 }, { x1: 3, y1: 0, x2: 3, y2: 6 }], [{ x: 3, y: 3 }]),
  task("T44-te", "Té (-2 ; -6)", -2, -6, { x: 20, y: 20 }, [{ x1: 2, y1: 6, x2: 8, y2: 6 }, { x1: 5, y1: 6, x2: 5, y2: 12 }, { x1: 3, y1: 8, x2: 7, y2: 8 }, { x1: 4, y1: 12, x2: 6, y2: 12 }], [{ x: 5, y: 8 }]),
  task("T45-zigzag", "Zigzag (+6 ; +6)", 6, 6, { x: 14, y: 14 }, [{ x1: 0, y1: 0, x2: 2, y2: 3 }, { x1: 2, y1: 3, x2: 4, y2: 0 }, { x1: 4, y1: 0, x2: 6, y2: 3 }, { x1: 6, y1: 3, x2: 6, y2: 5 }, { x1: 6, y1: 5, x2: 0, y2: 5 }], [{ x: 3, y: 2 }]),
  task("T46-cadre", "Cadre (-7 ; -1)", -7, -1, { x: 20, y: 20 }, [{ x1: 7, y1: 1, x2: 12, y2: 1 }, { x1: 12, y1: 1, x2: 12, y2: 6 }, { x1: 12, y1: 6, x2: 7, y2: 6 }, { x1: 7, y1: 6, x2: 7, y2: 1 }, { x1: 8, y1: 2, x2: 11, y2: 2 }, { x1: 11, y1: 2, x2: 11, y2: 5 }, { x1: 11, y1: 5, x2: 8, y2: 5 }, { x1: 8, y1: 5, x2: 8, y2: 2 }, { x1: 7, y1: 1, x2: 8, y2: 2 }, { x1: 12, y1: 6, x2: 11, y2: 5 }], [{ x: 9, y: 3 }]),
  task("T47-bateau", "Bateau (+4 ; +5)", 4, 5, { x: 16, y: 15 }, [{ x1: 0, y1: 3, x2: 1, y2: 5 }, { x1: 1, y1: 5, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 6, y2: 3 }, { x1: 6, y1: 3, x2: 0, y2: 3 }, { x1: 3, y1: 3, x2: 3, y2: 0 }, { x1: 3, y1: 0, x2: 5, y2: 2 }, { x1: 5, y1: 2, x2: 3, y2: 2 }], [{ x: 3, y: 1 }]),
  task("T48-etoile", "Étoile (-5 ; +4)", -5, 4, { x: 20, y: 16 }, [{ x1: 8, y1: 0, x2: 8, y2: 6 }, { x1: 5, y1: 3, x2: 11, y2: 3 }, { x1: 6, y1: 1, x2: 10, y2: 5 }, { x1: 10, y1: 1, x2: 6, y2: 5 }], [{ x: 8, y: 3 }]),
  task("T49-l", "L (+1 ; -7)", 1, -7, { x: 19, y: 20 }, [{ x1: 0, y1: 7, x2: 0, y2: 13 }, { x1: 0, y1: 13, x2: 4, y2: 13 }, { x1: 1, y1: 7, x2: 1, y2: 12 }, { x1: 1, y1: 12, x2: 4, y2: 12 }, { x1: 0, y1: 7, x2: 1, y2: 7 }, { x1: 4, y1: 12, x2: 4, y2: 13 }], [{ x: 1, y: 10 }]),
  task("T50-pentagone", "Pentagone (+9 ; +0)", 9, 0, { x: 11, y: 20 }, [{ x1: 3, y1: 0, x2: 6, y2: 2 }, { x1: 6, y1: 2, x2: 5, y2: 5 }, { x1: 5, y1: 5, x2: 1, y2: 5 }, { x1: 1, y1: 5, x2: 0, y2: 2 }, { x1: 0, y1: 2, x2: 3, y2: 0 }], [{ x: 3, y: 2 }]),
];

if (TRANSLATION_TASKS.length !== 50) {
  throw new Error(`G7.4 translation pool: attendu 50, got ${TRANSLATION_TASKS.length}`);
}

export function pickTranslationTask(seed: number): TranslationTask {
  return TRANSLATION_TASKS[Math.abs(seed) % TRANSLATION_TASKS.length]!;
}

export function listTranslationTasks(): TranslationTask[] {
  return [...TRANSLATION_TASKS];
}

export function translationConsigne(task: TranslationTask): string {
  const { dx, dy } = task.vector;
  const sx = dx > 0 ? `+${dx}` : `${dx}`;
  const sy = dy > 0 ? `+${dy}` : `${dy}`;
  return `Complétez la figure par translation. La flèche bleue indique le vecteur de translation (${sx} ; ${sy}). Cliquez deux points pour tracer un segment ; deux fois le même point pour un point.`;
}
