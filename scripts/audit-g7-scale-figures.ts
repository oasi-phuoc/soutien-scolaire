/**
 * Audit G7.1 exercices 2 (÷2) et 3 (×2) — figures sur grille 12×12.
 * Usage: npx tsx scripts/audit-g7-scale-figures.ts
 */
import {
  pickReproduceTask,
  expectedFromTask,
  segmentKey,
  pointKey,
  G7_GRID_SIZE,
  type ReproduceTask,
  type GridSegment,
} from "../lib/curriculum/content/math/g7-reproduce-data";

type Issue = { id: string; kind: string; msg: string };
const issues: Issue[] = [];

function collectPool(variant: 2 | 3): ReproduceTask[] {
  const seen = new Map<string, ReproduceTask>();
  for (let i = 0; i < 500; i++) {
    const t = pickReproduceTask(variant, i);
    if (!seen.has(t.id)) seen.set(t.id, t);
  }
  return [...seen.values()];
}

function auditTask(t: ReproduceTask) {
  const { reference: fig, kind, id } = t;
  const add = (msg: string) => issues.push({ id, kind, msg });

  if (fig.size !== G7_GRID_SIZE) add(`reference.size=${fig.size} (attendu ${G7_GRID_SIZE})`);
  if (t.targetSize !== G7_GRID_SIZE) add(`targetSize=${t.targetSize} (attendu ${G7_GRID_SIZE})`);
  if (fig.segments.length === 0 && fig.dots.length === 0) add("figure vide");

  const coords: number[] = [];
  for (const s of fig.segments) {
    coords.push(s.x1, s.y1, s.x2, s.y2);
    if (s.x1 === s.x2 && s.y1 === s.y2) add(`segment dégénéré ${s.x1},${s.y1}`);
  }
  for (const d of fig.dots) coords.push(d.x, d.y);

  for (const v of coords) {
    if (!Number.isInteger(v)) add(`coord non entière ${v}`);
    if (v < 0 || v > G7_GRID_SIZE) add(`coord hors 0..${G7_GRID_SIZE}: ${v}`);
  }

  if (kind === "scale_down") {
    for (const v of coords) {
      if (v % 2 !== 0) add(`coord impaire (÷2 impossible): ${v}`);
    }
  }
  if (kind === "scale_up") {
    for (const v of coords) {
      if (v < 0 || v > 6) add(`coord hors 0..6 pour ×2: ${v}`);
    }
  }

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
      if (x < 0 || y < 0 || x > G7_GRID_SIZE || y > G7_GRID_SIZE) {
        add(`attendu hors grille 12×12: ${key}`);
      }
    }
  }
  for (const key of exp.dots) {
    const [x, y] = key.split(",").map(Number) as [number, number];
    if (!Number.isInteger(x) || !Number.isInteger(y)) add(`point attendu non entier: ${key}`);
    if (x < 0 || y < 0 || x > G7_GRID_SIZE || y > G7_GRID_SIZE) {
      add(`point attendu hors grille: ${key}`);
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

  // Round-trip: source → scale → scale inverse should recover (for even/small figures)
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
      if (scaled.x1 > 12 || scaled.y1 > 12 || scaled.x2 > 12 || scaled.y2 > 12) {
        add(`×2 dépasse 12: ${JSON.stringify(s)} → ${JSON.stringify(scaled)}`);
      }
      if (!exp.segments.has(segmentKey(scaled))) {
        add(`segment attendu manquant après ×2: ${segmentKey(scaled)}`);
      }
    }
  }
}

function main() {
  const down = collectPool(2);
  const up = collectPool(3);
  console.log(`Pool ex2 (÷2): ${down.length} | Pool ex3 (×2): ${up.length} | GRID=${G7_GRID_SIZE}`);

  for (const t of down) auditTask(t);
  for (const t of up) auditTask(t);

  const downIds = new Set(down.map((t) => t.id));
  const upIds = new Set(up.map((t) => t.id));
  for (const id of downIds) {
    if (upIds.has(id)) issues.push({ id, kind: "overlap", msg: "id présent dans les deux pools" });
  }

  if (down.length !== 50) issues.push({ id: "pool", kind: "scale_down", msg: `attendu 50, got ${down.length}` });
  if (up.length !== 50) issues.push({ id: "pool", kind: "scale_up", msg: `attendu 50, got ${up.length}` });

  // Kind consistency
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
  console.log("\nEx2 stats:", stats(down));
  console.log("Ex3 stats:", stats(up));

  if (issues.length > 0) {
    process.exitCode = 1;
  } else {
    console.log("\n✓ Audit OK — 50+50 figures valides pour ÷2 et ×2 sur grille 12×12.");
  }
}

main();
