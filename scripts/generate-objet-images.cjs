/**
 * Illustrations objets CE/CO → public/assets/expression/images-temp/
 * 1 objet, fond blanc, couleur (Twemoji), 800×600 — pas de scène manga.
 * Usage: node scripts/generate-objet-images.cjs
 */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const https = require("https");
const sharp = require("sharp");

const outDir = path.join(process.cwd(), "public/assets/expression/images-temp");
const pickFile = path.join(process.cwd(), "lib/curriculum/content/communication/co-questions-objet-pick.ts");

const TWEMOJI = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg";

/** slug → codepoint Twemoji (ou "custom") */
const EMOJI = {
  lampe: "1f4a1",
  poubelle: "1f5d1",
  fleur: "1f339",
  table: "custom",
  cle: "1f511",
  guitare: "1f3b8",
  piano: "1f3b9",
  sac: "1f45c",
  robe: "1f457",
  talon: "1f460",
  "carte-detudiant": "1f393",
  passeport: "1f4c3",
  photo: "1f5bc",
  "carte-de-credit": "1f4b3",
  "carte-didentite": "1faaa",
  cahier: "1f4d3",
  surligneur: "1f58d",
  stylo: "1f58a",
  regle: "1f4cf",
  carte: "1f5fa",
  voiture: "1f697",
  avion: "2708",
  "etats-unis": "1f1fa-1f1f8",
  helicoptere: "1f681",
  "appareil-photo": "1f4f7",
  scotch: "custom",
  feuille: "1f4c4",
  ciseaux: "2702",
  colle: "custom",
  "crayon-de-couleur": "1f58d",
  gateau: "1f382",
  poulet: "1f357",
  radis: "custom",
  salade: "1f957",
  gratin: "custom",
  chaise: "1fa91",
  bureau: "custom",
  lunettes: "1f453",
  medicament: "1f48a",
  ordinateur: "1f4bb",
  plume: "1fab6",
  cheval: "1f434",
  page: "1f4c4",
  corde: "custom",
  livre: "1f4d6",
  pizza: "1f355",
  macaron: "1f36a",
  jus: "1f9c3",
  fromage: "1f9c0",
  fruit: "1f347",
  cadeau: "1f381",
  seau: "1faa3",
  elastique: "custom",
  tapis: "custom",
  haltere: "custom",
  "sac-a-dos": "1f392",
  veste: "1f9e5",
  chips: "1f35f",
  pomme: "1f34e",
  "salade-de-fruits": "1f347",
  "jeu-de-societe": "1f3b2",
  "chaussures-de-sport": "1f45f",
  casquette: "1f9e2",
  sandwich: "1f96a",
  "bouteille-deau": "1f4a7",
  "post-it": "1f4dd",
  peinture: "1f3a8",
};

const S = "#334155";
const W = 2;

function slugify(label) {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          fetchUrl(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`${url} → HTTP ${res.statusCode}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

/** SVG minimal pour objets sans emoji adapté — fond blanc, objet centré. */
const CUSTOM_SVG = {
  table: `<rect x="140" y="250" width="520" height="28" rx="6" fill="#b45309" stroke="${S}" stroke-width="${W}"/><rect x="180" y="278" width="24" height="200" fill="#92400e"/><rect x="596" y="278" width="24" height="200" fill="#92400e"/>`,
  scotch: `<ellipse cx="400" cy="300" rx="110" ry="110" fill="#fef9c3" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="300" rx="52" ry="52" fill="#fff" stroke="${S}" stroke-width="${W}"/><rect x="510" y="265" width="100" height="70" rx="6" fill="#fde047" stroke="${S}" stroke-width="${W}"/>`,
  colle: `<path d="M310 420 H490 L465 190 H335 Z" fill="#fff" stroke="${S}" stroke-width="${W}"/><rect x="345" y="155" width="110" height="45" rx="10" fill="#f97316" stroke="${S}" stroke-width="${W}"/><rect x="365" y="250" width="70" height="120" rx="8" fill="#3b82f6" opacity=".85"/>`,
  radis: `<ellipse cx="400" cy="330" rx="70" ry="85" fill="#f43f5e" stroke="${S}" stroke-width="${W}"/><path d="M360 250 Q400 170 440 250" fill="#22c55e" stroke="${S}" stroke-width="${W}"/><path d="M385 175 L400 130 L415 175" fill="#16a34a" stroke="${S}" stroke-width="${W}"/>`,
  gratin: `<ellipse cx="400" cy="360" rx="170" ry="75" fill="#d4d4d8" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="340" rx="150" ry="55" fill="#fbbf24" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="330" rx="130" ry="40" fill="#fde68a"/>`,
  bureau: `<rect x="120" y="280" width="560" height="26" rx="5" fill="#a16207" stroke="${S}" stroke-width="${W}"/><rect x="150" y="306" width="22" height="170" fill="#78350f"/><rect x="628" y="306" width="22" height="170" fill="#78350f"/><rect x="180" y="170" width="160" height="120" rx="8" fill="#f1f5f9" stroke="${S}" stroke-width="${W}"/><rect x="200" y="195" width="120" height="70" fill="#93c5fd"/>`,
  corde: `<path d="M180 360 Q300 180 420 360 T660 360" fill="none" stroke="#ca8a04" stroke-width="22" stroke-linecap="round"/><path d="M180 390 Q300 210 420 390 T660 390" fill="none" stroke="#a16207" stroke-width="12" stroke-linecap="round"/>`,
  elastique: `<ellipse cx="400" cy="300" rx="160" ry="100" fill="none" stroke="#ec4899" stroke-width="16"/><ellipse cx="400" cy="300" rx="110" ry="65" fill="none" stroke="#f472b6" stroke-width="10"/>`,
  tapis: `<rect x="160" y="260" width="480" height="200" rx="14" fill="#7c3aed" stroke="${S}" stroke-width="${W}"/><path d="M200 310 H600 M200 360 H600 M200 410 H600" stroke="#c4b5fd" stroke-width="4" opacity=".7"/>`,
  haltere: `<rect x="230" y="270" width="60" height="110" rx="10" fill="#64748b" stroke="${S}" stroke-width="${W}"/><rect x="510" y="270" width="60" height="110" rx="10" fill="#64748b" stroke="${S}" stroke-width="${W}"/><rect x="290" y="310" width="220" height="32" rx="8" fill="#94a3b8" stroke="${S}" stroke-width="${W}"/>`,
};

function customSvg(slug) {
  const body = CUSTOM_SVG[slug];
  if (!body) return null;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#ffffff"/>
  <g>${body}</g>
</svg>`;
}

async function twemojiBuffer(codepoint) {
  const url = `${TWEMOJI}/${codepoint}.svg`;
  return fetchUrl(url);
}

async function renderEmoji(codepoint, size = 420) {
  const svg = await twemojiBuffer(codepoint);
  const icon = await sharp(svg).resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: 800, height: 600, channels: 4, background: "#ffffff" } })
    .composite([{ input: icon, gravity: "center" }])
    .webp({ quality: 90 })
    .toBuffer();
}

async function renderCustom(slug) {
  const svg = customSvg(slug);
  if (!svg) throw new Error(`pas de SVG custom pour ${slug}`);
  return sharp(Buffer.from(svg)).resize(800, 600).webp({ quality: 90 }).toBuffer();
}

function collectLabels() {
  const src = fs.readFileSync(pickFile, "utf8");
  const labels = [...src.matchAll(/label:\s*"([^"]+)"/g)].map((m) => m[1]);
  const map = new Map();
  for (const label of labels) map.set(slugify(label), label);
  return map;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const labels = collectLabels();
  let made = 0;

  for (const [slug, label] of labels) {
    const code = EMOJI[slug];
    let webp;
    if (code && code !== "custom") {
      try {
        webp = await renderEmoji(code);
      } catch (e) {
        console.warn(`⚠ Twemoji ${slug} (${code}): ${e.message} → custom`);
        webp = await renderCustom(slug);
      }
    } else if (CUSTOM_SVG[slug]) {
      webp = await renderCustom(slug);
    } else {
      console.warn(`⚠ pas d'illustration : ${label} (${slug})`);
      webp = await sharp({
        create: { width: 800, height: 600, channels: 3, background: "#ffffff" },
      })
        .webp({ quality: 90 })
        .toBuffer();
    }
    fs.writeFileSync(path.join(outDir, `${slug}.webp`), webp);
    made++;
  }

  console.log(`Généré ${made} images objet → ${path.relative(process.cwd(), outDir)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
