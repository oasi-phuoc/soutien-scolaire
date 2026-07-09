/**
 * Génère les 25 illustrations CO « situations » en style manga/anime couleur 800×600 webp.
 *
 * Sorties :
 *   public/expression/co/situations/{slug}.webp
 *   public/assets/expression/images/scene/{slug}.webp
 *
 * Usage: node scripts/generate-co-situation-manga.cjs
 */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIRS = [
  path.join(ROOT, "public/expression/co/situations"),
  path.join(ROOT, "public/assets/expression/images/scene"),
];

const SITUATIONS = [
  { slug: "demander-service", label: "Demander un service" },
  { slug: "s-excuser", label: "S'excuser" },
  { slug: "proposer-sortie", label: "Proposer une sortie" },
  { slug: "feliciter", label: "Féliciter quelqu'un" },
  { slug: "confirmer-rdv", label: "Confirmer un rendez-vous" },
  { slug: "horaires", label: "Se renseigner sur les horaires" },
  { slug: "demander-informations", label: "Demander des informations" },
  { slug: "decrire-personne", label: "Décrire une personne" },
  { slug: "prendre-rdv", label: "Prendre un rendez-vous" },
  { slug: "refuser", label: "Refuser une invitation" },
  { slug: "signaler-probleme", label: "Signaler un problème" },
  { slug: "annoncer-nouvelle", label: "Annoncer une nouvelle" },
  { slug: "annuler-rdv", label: "Annuler un rendez-vous" },
  { slug: "conseiller", label: "Donner un conseil" },
  { slug: "commander", label: "Commander quelque chose" },
  { slug: "annoncer-evenement", label: "Annoncer un événement" },
  { slug: "demander-chemin", label: "Demander son chemin" },
  { slug: "donner-impressions", label: "Donner ses impressions" },
  { slug: "demander-nouvelles", label: "Demander des nouvelles" },
  { slug: "exprimer-gouts", label: "Exprimer ses goûts" },
  { slug: "proposer-activite", label: "Proposer une activité" },
  { slug: "proposer-aide", label: "Proposer de l'aide" },
  { slug: "prendre-conge", label: "Prendre congé" },
  { slug: "donner-indications", label: "Donner des indications" },
  { slug: "presenter", label: "Présenter quelqu'un" },
];

function hash(value) {
  let h = 2166136261;
  for (const char of value) {
    h ^= char.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function color(seed, offset = 0) {
  const h = (seed + offset * 53) % 360;
  return `hsl(${h} 78% 62%)`;
}

function xml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function person(x, y, shirt, hair, pose = 0) {
  const armLeft = pose % 2 === 0 ? `${x - 58},${y + 178} ${x - 116},${y + 128}` : `${x - 58},${y + 168} ${x - 118},${y + 198}`;
  const armRight = pose % 3 === 0 ? `${x + 58},${y + 178} ${x + 126},${y + 130}` : `${x + 58},${y + 168} ${x + 116},${y + 198}`;
  return `
    <g stroke="#40313a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M${x - 38} ${y + 395} Q${x - 52} ${y + 505} ${x - 86} ${y + 570}" fill="none"/>
      <path d="M${x + 38} ${y + 395} Q${x + 52} ${y + 505} ${x + 86} ${y + 570}" fill="none"/>
      <path d="M${x - 74} ${y + 572} h58" />
      <path d="M${x + 36} ${y + 572} h58" />
      <path d="M${armLeft}" />
      <path d="M${armRight}" />
    </g>
    <path d="M${x - 78} ${y + 170} Q${x} ${y + 120} ${x + 78} ${y + 170} L${x + 58} ${y + 395} Q${x} ${y + 430} ${x - 58} ${y + 395} Z" fill="${shirt}" stroke="#40313a" stroke-width="5"/>
    <ellipse cx="${x}" cy="${y + 92}" rx="55" ry="62" fill="#ffd1a7" stroke="#40313a" stroke-width="5"/>
    <path d="M${x - 56} ${y + 83} Q${x - 34} ${y - 5} ${x + 42} ${y + 24} Q${x + 82} ${y + 46} ${x + 48} ${y + 90} Q${x + 10} ${y + 54} ${x - 56} ${y + 83}Z" fill="${hair}" stroke="#40313a" stroke-width="5"/>
    <ellipse cx="${x - 20}" cy="${y + 98}" rx="9" ry="14" fill="#263238"/>
    <ellipse cx="${x + 24}" cy="${y + 98}" rx="9" ry="14" fill="#263238"/>
    <circle cx="${x - 16}" cy="${y + 92}" r="4" fill="#fff"/>
    <circle cx="${x + 28}" cy="${y + 92}" r="4" fill="#fff"/>
    <path d="M${x - 18} ${y + 128} Q${x + 4} ${y + 145} ${x + 28} ${y + 126}" fill="none" stroke="#a64b5d" stroke-width="4" stroke-linecap="round"/>
    <circle cx="${x - 23}" cy="${y + 118}" r="8" fill="#ff9caf" opacity=".35"/>
    <circle cx="${x + 32}" cy="${y + 118}" r="8" fill="#ff9caf" opacity=".35"/>
  `;
}

function bubble(x, y, w, h, text) {
  return `
    <ellipse cx="${x}" cy="${y}" rx="${w}" ry="${h}" fill="#fff" stroke="#40313a" stroke-width="5"/>
    <path d="M${x - 20} ${y + h - 5} L${x - 45} ${y + h + 35} L${x + 5} ${y + h}" fill="#fff" stroke="#40313a" stroke-width="5"/>
    <text x="${x}" y="${y + 8}" font-family="Arial,sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#334155">${xml(text)}</text>
  `;
}

function sceneBody(slug, seed) {
  const c1 = color(seed, 0);
  const c2 = color(seed, 2);
  const c3 = color(seed, 4);
  switch (slug) {
    case "demander-service":
      return `
        ${person(220, 100, c1, "#5b341d", 0)}
        ${person(580, 90, c2, "#b45309", 1)}
        <rect x="130" y="340" width="90" height="110" rx="10" fill="#92400e" stroke="#40313a" stroke-width="6"/>
        <path d="M175 340 V280" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>
        ${bubble(420, 180, 95, 55, "...?")}
      `;
    case "s-excuser":
      return `
        ${person(400, 130, c1, "#4b2e1f", 2)}
        <path d="M320 420 Q400 480 480 420" fill="none" stroke="#40313a" stroke-width="5"/>
        <path d="M350 350 L400 390 L450 350" fill="none" stroke="#40313a" stroke-width="6" stroke-linecap="round"/>
        ${bubble(560, 200, 80, 50, "Pardon")}
      `;
    case "proposer-sortie":
      return `
        <rect x="480" y="150" width="180" height="220" rx="12" fill="#1e293b" stroke="#40313a" stroke-width="6"/>
        <rect x="500" y="170" width="140" height="90" fill="#60a5fa"/>
        ${person(220, 100, c1, "#7c2d12", 0)}
        ${person(580, 100, c2, "#5b341d", 1)}
        ${bubble(380, 170, 100, 55, "Sortie ?")}
      `;
    case "feliciter":
      return `
        ${person(250, 100, c1, "#5b341d", 0)}
        ${person(550, 90, c2, "#d97706", 1)}
        <text x="400" y="200" font-size="80" text-anchor="middle">🎉</text>
        ${bubble(400, 280, 110, 50, "Bravo !")}
      `;
    case "confirmer-rdv":
      return `
        <rect x="280" y="180" width="240" height="200" rx="16" fill="#fff" stroke="#40313a" stroke-width="6"/>
        <path d="M320 280 L370 330 L480 230" fill="none" stroke="#22c55e" stroke-width="14" stroke-linecap="round"/>
        ${person(200, 110, c1, "#4b2e1f", 0)}
        ${person(600, 110, c2, "#b45309", 1)}
      `;
    case "horaires":
      return `
        <circle cx="400" cy="280" r="120" fill="#fff7e8" stroke="#40313a" stroke-width="8"/>
        <path d="M400 280 L400 210" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>
        <path d="M400 280 L460 300" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>
        ${person(620, 100, c1, "#5b341d", 1)}
        ${bubble(220, 200, 90, 50, "Quelle heure ?")}
      `;
    case "demander-informations":
      return `
        <rect x="300" y="160" width="200" height="120" rx="14" fill="#2563eb" stroke="#40313a" stroke-width="6"/>
        <text x="400" y="235" font-family="Arial" font-size="72" font-weight="900" text-anchor="middle" fill="#fff">i</text>
        ${person(220, 100, c1, "#7c2d12", 0)}
        ${person(580, 100, c2, "#5b341d", 1)}
      `;
    case "decrire-personne":
      return `
        ${person(180, 120, c1, "#5b341d", 0)}
        ${person(620, 120, c2, "#b45309", 1)}
        <ellipse cx="400" cy="300" rx="55" ry="70" fill="#cbd5e1" stroke="#40313a" stroke-width="5" opacity=".6"/>
        <path d="M200 250 L360 280" stroke="#40313a" stroke-width="6" stroke-linecap="round" marker-end="url(#arrow)"/>
      `;
    case "prendre-rdv":
      return `
        <rect x="270" y="170" width="260" height="220" rx="14" fill="#fff" stroke="#40313a" stroke-width="6"/>
        ${Array.from({ length: 5 }, (_, r) => Array.from({ length: 7 }, (_, c) =>
          `<rect x="${300 + c * 32}" y="${210 + r * 32}" width="26" height="26" rx="4" fill="${(r + c) % 3 === 0 ? c3 : "#f1f5f9"}" stroke="#cbd5e1" stroke-width="2"/>`
        ).join("")).join("")}
        ${person(580, 100, c1, "#4b2e1f", 0)}
      `;
    case "refuser":
      return `
        ${person(400, 110, c1, "#5b341d", 2)}
        <path d="M330 250 L470 350 M470 250 L330 350" stroke="#ef4444" stroke-width="16" stroke-linecap="round"/>
        ${bubble(560, 190, 80, 45, "Non")}
      `;
    case "signaler-probleme":
      return `
        <rect x="290" y="200" width="220" height="160" rx="12" fill="#334155" stroke="#40313a" stroke-width="6"/>
        <text x="400" y="310" font-size="64" text-anchor="middle" fill="#ef4444">!</text>
        ${person(580, 100, c1, "#7c2d12", 1)}
        ${bubble(220, 180, 100, 50, "Problème")}
      `;
    case "annoncer-nouvelle":
      return `
        ${person(400, 100, c1, "#d97706", 0)}
        ${bubble(400, 260, 130, 60, "Bonne nouvelle !")}
        <path d="M120 140 L200 180 M680 140 L600 180" stroke="#facc15" stroke-width="8" stroke-linecap="round"/>
      `;
    case "annuler-rdv":
      return `
        <rect x="280" y="180" width="240" height="200" rx="14" fill="#fff" stroke="#40313a" stroke-width="6"/>
        <path d="M310 210 L490 390 M490 210 L310 390" stroke="#ef4444" stroke-width="12" stroke-linecap="round"/>
        ${person(580, 100, c2, "#5b341d", 1)}
        <rect x="180" y="320" width="60" height="100" rx="10" fill="#334155" stroke="#40313a" stroke-width="5"/>
      `;
    case "conseiller":
      return `
        <rect x="280" y="200" width="240" height="180" rx="12" fill="#eff6ff" stroke="#40313a" stroke-width="6"/>
        <path d="M395 240 v90 M350 285 h90" stroke="#22c55e" stroke-width="28" stroke-linecap="round"/>
        ${person(220, 100, "#fff", "#c2410c", 1)}
        ${person(580, 100, c1, "#4b2e1f", 0)}
      `;
    case "commander":
      return `
        <rect x="250" y="320" width="300" height="24" rx="4" fill="#92400e"/>
        ${person(220, 100, c1, "#5b341d", 0)}
        ${person(580, 90, "#fff", "#7c2d12", 1)}
        <rect x="320" y="220" width="160" height="90" rx="8" fill="#fef3c7" stroke="#40313a" stroke-width="5"/>
        <path d="M340 250 H460 M340 275 H430" stroke="#64748b" stroke-width="4"/>
        ${bubble(400, 160, 90, 45, "Menu")}
      `;
    case "annoncer-evenement":
      return `
        <rect x="240" y="150" width="320" height="200" rx="10" fill="#fef3c7" stroke="#40313a" stroke-width="7"/>
        <text x="400" y="240" font-family="Arial" font-size="36" font-weight="900" text-anchor="middle" fill="#dc2626">ÉVÉNEMENT</text>
        ${person(580, 100, c1, "#b45309", 1)}
        <path d="M180 120 L220 160 M620 120 L580 160" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
      `;
    case "demander-chemin":
      return `
        <path d="M300 105 L450 95 L565 170 L610 300 L555 435 L420 505 L270 470 L190 350 L210 210 Z" fill="#cbd5e1" stroke="#475569" stroke-width="7"/>
        <text x="400" y="320" font-size="48" font-weight="900" text-anchor="middle" fill="#ef4444">?</text>
        ${person(620, 100, c1, "#5b341d", 1)}
        ${bubble(220, 180, 90, 50, "Où ?")}
      `;
    case "donner-impressions":
      return `
        ${person(250, 100, c1, "#5b341d", 0)}
        ${person(550, 100, c2, "#d97706", 1)}
        <rect x="340" y="260" width="120" height="160" rx="8" fill="#f8fafc" stroke="#40313a" stroke-width="5"/>
        ${Array.from({ length: 5 }, (_, i) => `<polygon points="${360 + i * 22},250 ${370 + i * 22},230 ${380 + i * 22},250" fill="#facc15"/>`).join("")}
      `;
    case "demander-nouvelles":
      return `
        <ellipse cx="400" cy="380" rx="180" ry="40" fill="#92400e"/>
        <rect x="280" y="280" width="240" height="24" rx="4" fill="#d97706"/>
        ${person(250, 100, c1, "#4b2e1f", 0)}
        ${person(550, 100, c2, "#b45309", 1)}
        ${bubble(400, 190, 120, 55, "Des nouvelles ?")}
      `;
    case "exprimer-gouts":
      return `
        <ellipse cx="330" cy="360" rx="70" ry="35" fill="#fb923c" stroke="#40313a" stroke-width="5"/>
        <ellipse cx="470" cy="360" rx="70" ry="35" fill="#22c55e" stroke="#40313a" stroke-width="5"/>
        ${person(400, 90, c1, "#7c2d12", 0)}
        ${bubble(560, 220, 80, 45, "J'aime")}
      `;
    case "proposer-activite":
      return `
        <circle cx="400" cy="340" r="55" fill="#f97316" stroke="#40313a" stroke-width="6"/>
        <path d="M370 340 H430 M400 310 V370" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
        ${person(250, 100, c1, "#5b341d", 0)}
        ${person(550, 100, c2, "#d97706", 1)}
        ${bubble(400, 180, 110, 50, "On joue ?")}
      `;
    case "proposer-aide":
      return `
        ${person(580, 90, c1, "#b45309", 1)}
        ${person(220, 100, c2, "#5b341d", 0)}
        <rect x="300" y="300" width="80" height="100" rx="8" fill="#dc2626" stroke="#40313a" stroke-width="5"/>
        <path d="M520 250 L380 320" stroke="#40313a" stroke-width="6" stroke-linecap="round"/>
        ${bubble(450, 180, 90, 45, "Aide ?")}
      `;
    case "prendre-conge":
      return `
        <rect x="450" y="120" width="120" height="280" rx="8" fill="#d97706" stroke="#40313a" stroke-width="6"/>
        ${person(280, 100, c1, "#4b2e1f", 0)}
        <path d="M230 220 Q280 180 330 220" fill="none" stroke="#40313a" stroke-width="6" stroke-linecap="round"/>
        ${bubble(350, 280, 100, 50, "Au revoir")}
      `;
    case "donner-indications":
      return `
        <path d="M200 400 H600" stroke="#64748b" stroke-width="14" stroke-linecap="round"/>
        <path d="M520 360 L580 400 L520 440" fill="#2563eb" stroke="#40313a" stroke-width="5"/>
        ${person(320, 100, c1, "#5b341d", 1)}
        ${person(580, 100, c2, "#7c2d12", 0)}
      `;
    case "presenter":
      return `
        ${person(400, 110, c1, "#d97706", 0)}
        ${person(220, 130, c2, "#5b341d", 0)}
        ${person(580, 130, c3, "#4b2e1f", 1)}
        ${bubble(400, 280, 100, 50, "Voici…")}
      `;
    default:
      return `
        ${person(250, 100, c1, "#5b341d", 0)}
        ${person(550, 100, c2, "#b45309", 1)}
      `;
  }
}

function svgFor(label, slug) {
  const seed = hash(slug);
  const c1 = color(seed, 0);
  const c2 = color(seed, 4);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img" aria-label="${xml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${c1}" stop-opacity=".25"/>
      <stop offset="100%" stop-color="${c2}" stop-opacity=".38"/>
    </linearGradient>
    <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#1f2937" flood-opacity=".15"/>
    </filter>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#40313a"/>
    </marker>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <circle cx="115" cy="105" r="80" fill="#fff" opacity=".45"/>
  <circle cx="700" cy="90" r="105" fill="#fff" opacity=".25"/>
  <path d="M0 505 C150 450 260 540 410 495 C560 450 650 495 800 450 V600 H0Z" fill="#f8fafc" opacity=".82"/>
  <g filter="url(#soft)">
    ${sceneBody(slug, seed)}
  </g>
</svg>`;
}

async function writeWebp(svg, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(Buffer.from(svg), { density: 150 })
    .resize(800, 600, { fit: "cover", position: "center" })
    .webp({ quality: 85 })
    .toFile(dest);
}

async function main() {
  for (const dir of OUT_DIRS) fs.mkdirSync(dir, { recursive: true });
  for (const { slug, label } of SITUATIONS) {
    const svg = svgFor(label, slug);
    for (const dir of OUT_DIRS) {
      const dest = path.join(dir, `${slug}.webp`);
      await writeWebp(svg, dest);
      console.log("→", path.relative(ROOT, dest));
    }
  }
  console.log(`Done — ${SITUATIONS.length} manga scenes × ${OUT_DIRS.length} dirs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
