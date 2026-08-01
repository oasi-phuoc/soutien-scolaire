/**
 * Renomme les audios communication :
 *   A1/piste001.mp3 → A1/001.mp3
 *   A2/piste_001.mp3 → A2/001.mp3
 *
 * Usage: node scripts/rename-communication-audios.cjs
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const base = path.join(root, "public/assets/expression/communication");

function renameLevel(level) {
  const dir = path.join(base, level);
  if (!fs.existsSync(dir)) {
    console.warn("Dossier manquant:", dir);
    return 0;
  }

  const files = fs.readdirSync(dir).filter((f) => /\.mp3$/i.test(f));
  /** @type {{ from: string, to: string }[]} */
  const plan = [];

  for (const file of files) {
    const m = file.match(/^(?:piste_?|piste)?(\d+)\.mp3$/i) || file.match(/(\d+)\.mp3$/i);
    if (!m) {
      console.warn("Ignoré (pas de numéro):", level, file);
      continue;
    }
    const num = String(Number(m[1])).padStart(3, "0");
    const dest = `${num}.mp3`;
    if (file === dest) continue;
    plan.push({ from: file, to: dest });
  }

  // collisions destination
  const destCount = new Map();
  for (const p of plan) destCount.set(p.to, (destCount.get(p.to) || 0) + 1);
  // aussi fichiers déjà au bon nom
  for (const file of files) {
    if (/^\d{3}\.mp3$/i.test(file) && !plan.some((p) => p.from === file)) {
      destCount.set(file, (destCount.get(file) || 0) + 1);
    }
  }
  const collisions = [...destCount.entries()].filter(([, n]) => n > 1);
  if (collisions.length) {
    console.error(level, "collisions:", collisions.slice(0, 10));
    process.exit(1);
  }

  // phase 1 → tmp
  const phase1 = [];
  for (let i = 0; i < plan.length; i++) {
    const p = plan[i];
    const src = path.join(dir, p.from);
    const tmp = path.join(dir, `__ren_${i}.mp3`);
    fs.renameSync(src, tmp);
    phase1.push({ ...p, tmp });
  }

  // phase 2 → 001.mp3
  for (const p of phase1) {
    const dest = path.join(dir, p.to);
    if (fs.existsSync(dest)) {
      console.error("Collision finale:", level, p.to);
      process.exit(1);
    }
    fs.renameSync(p.tmp, dest);
  }

  console.log(`${level}: ${phase1.length} renommage(s)`);
  return phase1.length;
}

const n1 = renameLevel("A1");
const n2 = renameLevel("A2");
console.log("Total:", n1 + n2);
