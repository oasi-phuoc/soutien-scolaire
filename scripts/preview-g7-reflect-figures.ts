/**
 * Aperçu HTML des 50 figures G7.2 ex.2 (réflexion).
 * Usage: npx tsx scripts/preview-g7-reflect-figures.ts
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import {
  G7_REFLECT_AXIS_X,
  G7_REFLECT_HEIGHT,
  G7_REFLECT_WIDTH,
  listSymmetryReflectTasks,
  type SymmetryReflectTask,
} from "../lib/curriculum/content/math/g7-symmetry-reflect-data";

const CELL = 10;
const MARGIN = 6;

function figureSvg(task: SymmetryReflectTask, index: number): string {
  const w = MARGIN * 2 + G7_REFLECT_WIDTH * CELL;
  const h = MARGIN * 2 + G7_REFLECT_HEIGHT * CELL;
  const lines: string[] = [];
  for (let i = 0; i <= G7_REFLECT_WIDTH; i++) {
    lines.push(`<line x1="${MARGIN + i * CELL}" y1="${MARGIN}" x2="${MARGIN + i * CELL}" y2="${MARGIN + G7_REFLECT_HEIGHT * CELL}" stroke="#e2e8f0" stroke-width="1"/>`);
  }
  for (let i = 0; i <= G7_REFLECT_HEIGHT; i++) {
    lines.push(`<line x1="${MARGIN}" y1="${MARGIN + i * CELL}" x2="${MARGIN + G7_REFLECT_WIDTH * CELL}" y2="${MARGIN + i * CELL}" stroke="#e2e8f0" stroke-width="1"/>`);
  }
  // axis blue
  lines.push(`<line x1="${MARGIN + G7_REFLECT_AXIS_X * CELL}" y1="${MARGIN}" x2="${MARGIN + G7_REFLECT_AXIS_X * CELL}" y2="${MARGIN + G7_REFLECT_HEIGHT * CELL}" stroke="#2563eb" stroke-width="2"/>`);
  for (const s of task.sourceSegments) {
    lines.push(`<line x1="${MARGIN + s.x1 * CELL}" y1="${MARGIN + s.y1 * CELL}" x2="${MARGIN + s.x2 * CELL}" y2="${MARGIN + s.y2 * CELL}" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>`);
  }
  for (const d of task.sourceDots) {
    lines.push(`<circle cx="${MARGIN + d.x * CELL}" cy="${MARGIN + d.y * CELL}" r="2" fill="#1e293b"/>`);
  }
  return `<div class="card">
  <div class="label">${index + 1}. ${task.label} <span>(${task.side === "left" ? "G" : "D"})</span></div>
  <svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${lines.join("")}</svg>
</div>`;
}

function main() {
  const tasks = listSymmetryReflectTasks();
  const cards = tasks.map((t, i) => figureSvg(t, i)).join("\n");
  const html = `<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8"/>
<title>G7.2 — 50 figures réflexion</title>
<style>
body{margin:0;padding:24px;font-family:system-ui,sans-serif;background:#f8fafc;color:#0f172a}
h1{font-size:20px;margin:0 0 8px}p{margin:0 0 16px;color:#64748b;font-size:14px}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.card{background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:8px;text-align:center}
.label{font-size:11px;font-weight:600;margin-bottom:4px}span{font-weight:400;color:#64748b}
</style></head><body>
<h1>G7.2 — Exercice 2 : ${tasks.length} figures (grille 20×10)</h1>
<p>Axe bleu vertical au centre (x=10) · G = moitié gauche · D = moitié droite</p>
<div class="grid">${cards}</div>
</body></html>`;
  const outDir = "/opt/cursor/artifacts";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "g7-50-reflect-figures.html"), html);
  console.log(`Wrote ${tasks.length} figures`);
}

main();
