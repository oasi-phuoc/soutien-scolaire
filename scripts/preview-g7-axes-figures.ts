/**
 * Aperçu HTML des 30 figures G7.2 (axes de symétrie).
 * Usage: npx tsx scripts/preview-g7-axes-figures.ts
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import {
  G7_AXES_GRID,
  axisSpan,
  listSymmetryAxesTasks,
  type SymmetryAxesTask,
} from "../lib/curriculum/content/math/g7-symmetry-data";

const CELL = 12;
const MARGIN = 8;
const SIZE = G7_AXES_GRID;

function figureSvg(task: SymmetryAxesTask, index: number): string {
  const w = MARGIN * 2 + SIZE * CELL;
  const h = MARGIN * 2 + SIZE * CELL;
  const lines: string[] = [];
  for (let i = 0; i <= SIZE; i++) {
    const x = MARGIN + i * CELL;
    const y = MARGIN + i * CELL;
    lines.push(`<line x1="${x}" y1="${MARGIN}" x2="${x}" y2="${MARGIN + SIZE * CELL}" stroke="#e2e8f0" stroke-width="1"/>`);
    lines.push(`<line x1="${MARGIN}" y1="${y}" x2="${MARGIN + SIZE * CELL}" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>`);
  }
  for (const poly of task.polygons) {
    const pts = poly.map((p) => `${MARGIN + p.x * CELL},${MARGIN + p.y * CELL}`).join(" ");
    lines.push(`<polygon points="${pts}" fill="#7dd3fc" stroke="#0284c8" stroke-width="1.5" stroke-linejoin="round"/>`);
  }
  for (const axis of task.axes) {
    const s = axisSpan(axis, SIZE);
    lines.push(
      `<line x1="${MARGIN + s.x1 * CELL}" y1="${MARGIN + s.y1 * CELL}" x2="${MARGIN + s.x2 * CELL}" y2="${MARGIN + s.y2 * CELL}" stroke="#dc262680" stroke-width="2"/>`,
    );
  }
  const nAxes = task.axes.length;
  return `<div class="card">
  <div class="label">${index + 1}. ${task.label} <span class="axes">(${nAxes} axe${nAxes === 1 ? "" : "s"})</span></div>
  <svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${lines.join("")}</svg>
</div>`;
}

function main() {
  const tasks = listSymmetryAxesTasks();
  const cards = tasks.map((t, i) => figureSvg(t, i)).join("\n");
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8"/>
<title>G7.2 — 30 figures (axes de symétrie)</title>
<style>
  body { margin: 0; padding: 24px; font-family: system-ui, sans-serif; background: #f8fafc; color: #0f172a; }
  h1 { font-size: 20px; margin: 0 0 8px; }
  p { margin: 0 0 20px; color: #64748b; font-size: 14px; }
  .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
  .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; }
  .label { font-size: 11px; font-weight: 600; margin-bottom: 4px; color: #334155; }
  .axes { font-weight: 400; color: #64748b; }
</style>
</head>
<body>
  <h1>G7.2 — Pool exercice 1 : ${tasks.length} figures (grille 10×10)</h1>
  <p>Axes de symétrie indiqués en rouge semi-transparent (aperçu) — dont figures à 4 axes</p>
  <div class="grid">
${cards}
  </div>
</body>
</html>`;

  const outDir = "/opt/cursor/artifacts";
  mkdirSync(outDir, { recursive: true });
  const htmlPath = join(outDir, "g7-30-axes-figures.html");
  writeFileSync(htmlPath, html);
  console.log(`Wrote ${htmlPath} (${tasks.length} figures)`);
}

main();
