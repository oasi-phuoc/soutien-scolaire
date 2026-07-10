/**
 * Génère un aperçu HTML des 50 figures G7.1 (exercice 1 — copie).
 * Usage: npx tsx scripts/preview-g7-figures.ts
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { listReproduceTasks, type GridFigure } from "../lib/curriculum/content/math/g7-reproduce-data";

const CELL = 14;
const MARGIN = 10;

function figureSvg(fig: GridFigure, label: string, index: number): string {
  const size = fig.size;
  const w = MARGIN * 2 + size * CELL;
  const h = MARGIN * 2 + size * CELL;
  const lines: string[] = [];
  for (let i = 0; i <= size; i++) {
    const x = MARGIN + i * CELL;
    const y = MARGIN + i * CELL;
    lines.push(`<line x1="${x}" y1="${MARGIN}" x2="${x}" y2="${MARGIN + size * CELL}" stroke="#e2e8f0" stroke-width="1"/>`);
    lines.push(`<line x1="${MARGIN}" y1="${y}" x2="${MARGIN + size * CELL}" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>`);
  }
  for (const s of fig.segments) {
    lines.push(
      `<line x1="${MARGIN + s.x1 * CELL}" y1="${MARGIN + s.y1 * CELL}" x2="${MARGIN + s.x2 * CELL}" y2="${MARGIN + s.y2 * CELL}" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>`,
    );
  }
  for (const d of fig.dots) {
    lines.push(
      `<circle cx="${MARGIN + d.x * CELL}" cy="${MARGIN + d.y * CELL}" r="3" fill="#1e293b"/>`,
    );
  }
  return `<div class="card">
  <div class="label">${index + 1}. ${label}</div>
  <svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${lines.join("")}</svg>
</div>`;
}

function main() {
  const tasks = listReproduceTasks(1);
  const cards = tasks.map((t, i) => figureSvg(t.reference, t.label, i)).join("\n");
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8"/>
<title>G7.1 — 50 figures (exercice 1)</title>
<style>
  body { margin: 0; padding: 24px; font-family: system-ui, sans-serif; background: #f8fafc; color: #0f172a; }
  h1 { font-size: 20px; margin: 0 0 8px; }
  p { margin: 0 0 20px; color: #64748b; font-size: 14px; }
  .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
  .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; }
  .label { font-size: 11px; font-weight: 600; margin-bottom: 4px; color: #334155; }
</style>
</head>
<body>
  <h1>G7.1 — Pool exercice 1 : ${tasks.length} figures (grille 10×10)</h1>
  <p>Figures de reproduction à l'identique</p>
  <div class="grid">
${cards}
  </div>
</body>
</html>`;

  const outDir = "/opt/cursor/artifacts";
  mkdirSync(outDir, { recursive: true });
  const htmlPath = join(outDir, "g7-50-figures.html");
  writeFileSync(htmlPath, html);
  console.log(`Wrote ${htmlPath} (${tasks.length} figures)`);
}

main();
