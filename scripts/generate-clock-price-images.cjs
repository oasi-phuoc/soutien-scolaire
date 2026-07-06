/**
 * Generate accurate CLOCK images (times) and PRICE images for the CO image
 * answers, programmatically (SVG → 800x600 webp). AI models render clock hands
 * and exact amounts unreliably, so these are drawn deterministically.
 *
 * Output → public/assets/words/lecture/<canonical-slug>.webp
 *   times : horloge-HHhMM   (analog clock)
 *   prices: prix-<montant>-<eur|fr>[-ht]  (price tag showing the amount)
 *
 * The canonical slug MUST match lib/curriculum/word-image-resolver.ts
 * (parseTime / parsePrice) so the resolver can find them.
 *
 * Usage: node scripts/generate-clock-price-images.cjs
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();
const commDir = "lib/curriculum/content/communication";
const outDir = path.join(root, "public/assets/words/lecture");

function read(rel) { return fs.readFileSync(path.join(root, rel), "utf8"); }

// ---- parsers (mirror of word-image-resolver.ts) ---------------------------
function parseTime(raw) {
  let t = raw.trim().toLowerCase().replace(/^à\s+/, "");
  if (t === "midi") return { h: 12, m: 0 };
  if (t === "minuit") return { h: 0, m: 0 };
  if (/^midi\s+et\s+quart$/.test(t)) return { h: 12, m: 15 };
  if (/^midi\s+et\s+demie?$/.test(t)) return { h: 12, m: 30 };
  let m = t.match(/^(\d{1,2})\s*h\s*(\d{1,2})?$/) || t.match(/^(\d{1,2})h(\d{2})?$/);
  if (!m) return null;
  const h = parseInt(m[1], 10);
  const mn = m[2] ? parseInt(m[2], 10) : 0;
  if (h > 23 || mn > 59) return null;
  return { h, m: mn };
}
function timeSlug(h, m) { return `horloge-${String(h).padStart(2, "0")}h${String(m).padStart(2, "0")}`; }

function parsePrice(raw) {
  const t = raw.trim();
  const m = t.match(/^(\d+(?:[.,]\d+)?)\s*(€|euros?|francs?|chf)(\s*ht)?$/i);
  if (!m) return null;
  const cur = /€|euro/i.test(m[2]) ? "eur" : /franc/i.test(m[2]) ? "fr" : "chf";
  const ht = !!m[3];
  const slug = `prix-${m[1].replace(/[.,]/g, "-")}-${cur}${ht ? "-ht" : ""}`;
  const display = t.replace(/\s+/g, " ");
  return { slug, display };
}

// ---- SVG builders ---------------------------------------------------------
function clockSvg(h, m) {
  const cx = 400, cy = 300, r = 225;
  const ticks = [];
  for (let i = 0; i < 12; i++) {
    const a = (i * 30) * Math.PI / 180;
    const x1 = cx + (r - 10) * Math.sin(a), y1 = cy - (r - 10) * Math.cos(a);
    const x2 = cx + (r - 32) * Math.sin(a), y2 = cy - (r - 32) * Math.cos(a);
    ticks.push(`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#222" stroke-width="${i % 3 === 0 ? 10 : 4}" stroke-linecap="round"/>`);
  }
  const minA = (m * 6) * Math.PI / 180;
  const hourA = ((h % 12) * 30 + m * 0.5) * Math.PI / 180;
  const hx = cx + (r * 0.55) * Math.sin(hourA), hy = cy - (r * 0.55) * Math.cos(hourA);
  const mx = cx + (r * 0.82) * Math.sin(minA), my = cy - (r * 0.82) * Math.cos(minA);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
<rect width="800" height="600" fill="#ffffff"/>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" stroke="#222" stroke-width="12"/>
${ticks.join("\n")}
<line x1="${cx}" y1="${cy}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="#111" stroke-width="16" stroke-linecap="round"/>
<line x1="${cx}" y1="${cy}" x2="${mx.toFixed(1)}" y2="${my.toFixed(1)}" stroke="#c0392b" stroke-width="10" stroke-linecap="round"/>
<circle cx="${cx}" cy="${cy}" r="16" fill="#111"/>
</svg>`;
}

function priceSvg(display) {
  const cx = 400, cy = 300;
  const fontSize = display.length > 8 ? 96 : 128;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
<rect width="800" height="600" fill="#ffffff"/>
<g transform="rotate(-8 ${cx} ${cy})">
<rect x="150" y="200" width="500" height="200" rx="28" fill="#fdf3d8" stroke="#e0a83e" stroke-width="10"/>
<circle cx="205" cy="255" r="22" fill="#ffffff" stroke="#e0a83e" stroke-width="8"/>
<text x="430" y="${cy + fontSize * 0.34}" font-family="DejaVu Sans, Arial, sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle" fill="#8a5a12">${display.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</text>
</g>
</svg>`;
}

// ---- collect distinct labels from CO pools + CE image MCQ ---------------
const CO_FILES = ["co-questions-base-messages.ts","co-questions-base-other.ts","co-questions-moyen.ts","co-questions-avance.ts","co-questions-avance-extra.ts"];

function distinctLabelsFromCo() {
  const set = new Set();
  for (const file of CO_FILES) {
    const src = read(`${commDir}/${file}`);
    for (const m of src.matchAll(/\bimg:\s*\[([^\]]*)\]/g)) {
      for (const s of m[1].matchAll(/"([^"]*)"/g)) set.add(s[1]);
    }
  }
  return [...set];
}

function distinctLabelsFromCe() {
  const set = new Set();
  const src = read("components/communication/ComprehensionEcritRunner.tsx");
  for (const m of src.matchAll(/choices:\s*\[([^\]]*)\]/g)) {
    for (const s of m[1].matchAll(/label:\s*"([^"]+)"/g)) set.add(s[1]);
  }
  return [...set];
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const labels = [...new Set([...distinctLabelsFromCo(), ...distinctLabelsFromCe()])];

  const clocks = new Map(); // slug -> {h,m}
  const prices = new Map(); // slug -> display
  const skipped = [];
  for (const label of labels) {
    const t = parseTime(label);
    if (t) { clocks.set(timeSlug(t.h, t.m), t); continue; }
    const p = parsePrice(label);
    if (p) { if (!prices.has(p.slug)) prices.set(p.slug, p.display); continue; }
  }

  let made = 0;
  for (const [slug, { h, m }] of clocks) {
    await sharp(Buffer.from(clockSvg(h, m))).webp({ quality: 90 }).toFile(path.join(outDir, `${slug}.webp`));
    made++;
  }
  for (const [slug, display] of prices) {
    await sharp(Buffer.from(priceSvg(display))).webp({ quality: 90 }).toFile(path.join(outDir, `${slug}.webp`));
    made++;
  }

  console.log(`Distinct CO+CE labels scanned: ${labels.length}`);
  console.log(`Clock images: ${clocks.size}`);
  console.log(`Price images: ${prices.size}`);
  console.log(`Total generated: ${made} → ${path.relative(root, outDir)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
