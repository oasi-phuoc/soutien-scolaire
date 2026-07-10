/**
 * Audit G7.1 exercices 1–3 — tailles de grille et échelles.
 * Ex1 : modèle 10×10 → cible 10×10 (copie)
 * Ex2 : modèle 10×10 (coords paires) → cible 5×5 (÷2)
 * Ex3 : modèle 5×5 → cible 10×10 (×2)
 * Usage: npx tsx scripts/audit-g7-scale-figures.ts
 */
import {
  pickReproduceTask,
  expectedFromTask,
  segmentKey,
  pointKey,
  G7_GRID_SIZE,
  G7_HALF_SIZE,
  type ReproduceTask,
  type GridSegment,
} from "../lib/curriculum/content/math/g7-reproduce-data";

type Issue = { id: string; kind: string; msg: string };
const issues: Issue[] = [];

function collectPool(variant: 1 | 2 | 3): ReproduceTask[] {
  const seen = new Map<string, ReproduceTask>();
  for (let i = 0; i < 500; i++) {
    const t = pickReproduceTask(variant, i);
    if (!seen.has(t.id)) seen.set(t.id, t);
  }
  return [...seen.values()];
}

function auditTask(t: ReproduceTask) {
  const { reference: fig, kind, id, targetSize } = t;
  const add = (msg: string) => issues.push({ id, kind, msg });

  const expectedRefSize =
    kind === "scale_up" ? G7_HALF_SIZE : G7_GRID_SIZE;
  const expectedTargetSize =
    kind === "scale_down" ? G7_HALF_SIZE : G7_GRID_SIZE;

  if (fig.size !== expectedRefSize) {
    add(`reference.size=${fig.size} (attendu ${expectedRefSize})`);
  }
  if (targetSize !== expectedTargetSize) {
    add(`targetSize=${targetSize} (attendu ${expectedTargetSize})`);
  }
  if (fig.segments.length === 0 && fig.dots.length === 0) add("figure vide");

  const coords: number[] = [];
  for (const s of fig.segments) {
    coords.push(s.x1, s.y1, s.x2, s.y2);
    if (s.x1 === s.x2 && s.y1 === s.y2) add(`segment dégénéré ${s.x1},${s.y1}`);
  }
  for (const d of fig.dots) coords.push(d.x, d.y);

  for (const v of coords) {
    if (!Number.isInteger(v)) add(`coord non entière ${v}`);
    if (v < 0 || v > fig.size) add(`coord hors 0..${fig.size}: ${v}`);
  }

  if (kind === "scale_down") {
    for (const v of coords) {
      if (v % 2 !== 0) add(`coord impaire (÷2 impossible): ${v}`);
    }
  }
  if (kind === "scale_up") {
    for (const v of coords) {
      if (v < 0 || v > G7_HALF_SIZE) add(`coord hors 0..${G7_HALF_SIZE} pour ×2: ${v}`);
    }
  }

  if (fig.dots.length < 1) add("aucun point dans la figure (au moins 1 requis)");

  const segSet = new Set<string>();
  for (const s of fig.segments) {
    const k = segmentKey(s);
    if (segSet.has(k)) add(`segment dupliqué ${k}`);
    segSet.add(k);
  }
  const dotSet = new Set<string>();
  for (const d of fig.dots) {
    const k = pointKey(d);
    if (dotSet.has(k)) add(`point dupliqué ${k}`);
    dotSet.add(k);
  }

  const exp = expectedFromTask(t);
  const factor = kind === "scale_up" ? 2 : kind === "scale_down" ? 0.5 : 1;

  for (const key of exp.segments) {
    for (const part of key.split("|")) {
      const [x, y] = part.split(",").map(Number) as [number, number];
      if (!Number.isInteger(x) || !Number.isInteger(y)) {
        add(`attendu non entier après ×${factor}: ${key}`);
      }
      if (x < 0 || y < 0 || x > targetSize || y > targetSize) {
        add(`attendu hors grille ${targetSize}×${targetSize}: ${key}`);
      }
    }
  }
  for (const key of exp.dots) {
    const [x, y] = key.split(",").map(Number) as [number, number];
    if (!Number.isInteger(x) || !Number.isInteger(y)) add(`point attendu non entier: ${key}`);
    if (x < 0 || y < 0 || x > targetSize || y > targetSize) {
      add(`point attendu hors grille ${targetSize}×${targetSize}: ${key}`);
    }
  }

  if (fig.segments.length > 0 && exp.segments.size === 0) add("segments attendus vides après échelle");
  if (exp.segments.size < fig.segments.length) {
    add(`perte de segments après échelle: ${fig.segments.length} → ${exp.segments.size}`);
  }
  if (exp.dots.size < fig.dots.length) {
    add(`perte de points après échelle: ${fig.dots.length} → ${exp.dots.size}`);
  }

  const expCoords: number[] = [];
  for (const key of exp.segments) {
    for (const part of key.split("|")) {
      const [x, y] = part.split(",").map(Number) as [number, number];
      expCoords.push(x, y);
    }
  }
  if (expCoords.length >= 4) {
    const xs = expCoords.filter((_, i) => i % 2 === 0);
    const ys = expCoords.filter((_, i) => i % 2 === 1);
    const dx = Math.max(...xs) - Math.min(...xs);
    const dy = Math.max(...ys) - Math.min(...ys);
    if (dx === 0 && dy === 0) add("figure attendue réduite à un point");
    if (dx + dy < 2) add(`figure attendue trop petite (dx=${dx}, dy=${dy})`);
  }

  if (kind === "scale_down") {
    for (const s of fig.segments) {
      const scaled: GridSegment = {
        x1: Math.round(s.x1 * 0.5),
        y1: Math.round(s.y1 * 0.5),
        x2: Math.round(s.x2 * 0.5),
        y2: Math.round(s.y2 * 0.5),
      };
      const back: GridSegment = {
        x1: scaled.x1 * 2,
        y1: scaled.y1 * 2,
        x2: scaled.x2 * 2,
        y2: scaled.y2 * 2,
      };
      if (segmentKey(back) !== segmentKey(s)) {
        add(`round-trip ÷2×2 échoue pour ${JSON.stringify(s)} → ${JSON.stringify(back)}`);
      }
      if (!exp.segments.has(segmentKey(scaled))) {
        add(`segment attendu manquant après ÷2: ${segmentKey(scaled)}`);
      }
    }
  }
  if (kind === "scale_up") {
    for (const s of fig.segments) {
      const scaled: GridSegment = {
        x1: s.x1 * 2,
        y1: s.y1 * 2,
        x2: s.x2 * 2,
        y2: s.y2 * 2,
      };
      if (scaled.x1 > G7_GRID_SIZE || scaled.y1 > G7_GRID_SIZE || scaled.x2 > G7_GRID_SIZE || scaled.y2 > G7_GRID_SIZE) {
        add(`×2 dépasse ${G7_GRID_SIZE}: ${JSON.stringify(s)} → ${JSON.stringify(scaled)}`);
      }
      if (!exp.segments.has(segmentKey(scaled))) {
        add(`segment attendu manquant après ×2: ${segmentKey(scaled)}`);
      }
    }
  }
}

function main() {
  const copy = collectPool(1);
  const down = collectPool(2);
  const up = collectPool(3);
  console.log(
    `Pool ex1 (copie): ${copy.length} | ex2 (÷2): ${down.length} | ex3 (×2): ${up.length}` +
      ` | ref/cible: 10→10 / 10→5 / 5→10`,
  );

  for (const t of copy) auditTask(t);
  for (const t of down) auditTask(t);
  for (const t of up) auditTask(t);

  if (copy.length !== 50) issues.push({ id: "pool", kind: "copy", msg: `attendu 50, got ${copy.length}` });
  if (down.length !== 50) issues.push({ id: "pool", kind: "scale_down", msg: `attendu 50, got ${down.length}` });
  if (up.length !== 50) issues.push({ id: "pool", kind: "scale_up", msg: `attendu 50, got ${up.length}` });

  for (const t of copy) {
    if (t.kind !== "copy") issues.push({ id: t.id, kind: t.kind, msg: "ex1 doit être copy" });
  }
  for (const t of down) {
    if (t.kind !== "scale_down") issues.push({ id: t.id, kind: t.kind, msg: "ex2 doit être scale_down" });
  }
  for (const t of up) {
    if (t.kind !== "scale_up") issues.push({ id: t.id, kind: t.kind, msg: "ex3 doit être scale_up" });
  }

  console.log(`\nIssues: ${issues.length}`);
  for (const i of issues) console.log(`- [${i.kind}] ${i.id}: ${i.msg}`);

  const stats = (tasks: ReproduceTask[]) => {
    const segs = tasks.map((t) => t.reference.segments.length);
    const dots = tasks.map((t) => t.reference.dots.length);
    const avg = (a: number[]) => (a.reduce((s, x) => s + x, 0) / a.length).toFixed(1);
    return `segs ${Math.min(...segs)}–${Math.max(...segs)} (moy ${avg(segs)}), dots ${Math.min(...dots)}–${Math.max(...dots)} (moy ${avg(dots)})`;
  };
  console.log("\nEx1 stats:", stats(copy));
  console.log("Ex2 stats:", stats(down));
  console.log("Ex3 stats:", stats(up));

  if (issues.length > 0) {
    process.exitCode = 1;
  } else {
    console.log("\n✓ Audit OK — grilles ex1 10→10, ex2 10→5, ex3 5→10 (≥1 point chacune).");
  }
}

main();
