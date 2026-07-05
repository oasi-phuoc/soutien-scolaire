const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const LEVELS = ["base", "moyen", "avance"];

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function hash(value) {
  let h = 2166136261;
  for (const char of value) {
    h ^= char.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function norm(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
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
    <ellipse cx="${x - 20}" cy="${y + 98}" rx="7" ry="11" fill="#263238"/>
    <ellipse cx="${x + 24}" cy="${y + 98}" rx="7" ry="11" fill="#263238"/>
    <path d="M${x - 18} ${y + 128} Q${x + 4} ${y + 145} ${x + 28} ${y + 126}" fill="none" stroke="#a64b5d" stroke-width="4" stroke-linecap="round"/>
    <circle cx="${x - 23}" cy="${y + 118}" r="8" fill="#ff9caf" opacity=".35"/>
    <circle cx="${x + 32}" cy="${y + 118}" r="8" fill="#ff9caf" opacity=".35"/>
  `;
}

function clock(seed) {
  const a = (seed % 12) * 30 - 90;
  const b = ((seed >> 4) % 12) * 30 - 90;
  const p1 = polar(400, 285, 115, a);
  const p2 = polar(400, 285, 78, b);
  return `
    <circle cx="400" cy="285" r="155" fill="#fff7e8" stroke="#40313a" stroke-width="8"/>
    <circle cx="400" cy="285" r="12" fill="#40313a"/>
    <path d="M400 285 L${p1.x} ${p1.y}" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>
    <path d="M400 285 L${p2.x} ${p2.y}" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>
    ${Array.from({ length: 12 }, (_, i) => {
      const p = polar(400, 285, 132, i * 30 - 90);
      return `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#40313a"/>`;
    }).join("")}
  `;
}

function polar(cx, cy, r, deg) {
  const rad = (deg * Math.PI) / 180;
  return { x: Math.round(cx + Math.cos(rad) * r), y: Math.round(cy + Math.sin(rad) * r) };
}

function transport(kind, seed) {
  const plane = kind === "plane";
  const train = kind === "train";
  if (plane) {
    return `
      <path d="M120 425 C250 330 520 250 705 170" stroke="#dbeafe" stroke-width="120" stroke-linecap="round"/>
      <path d="M180 360 L630 170 L670 210 L470 360 L565 495 L510 520 L380 410 L210 470 Z" fill="#f8fafc" stroke="#334155" stroke-width="7"/>
      <circle cx="560" cy="220" r="16" fill="#60a5fa"/><circle cx="510" cy="246" r="14" fill="#60a5fa"/>
      ${person(185, 120, color(seed, 2), "#5b341d", 1)}
    `;
  }
  return `
    <rect x="95" y="198" width="610" height="190" rx="45" fill="${train ? "#60a5fa" : "#34d399"}" stroke="#334155" stroke-width="8"/>
    <rect x="150" y="230" width="120" height="78" rx="12" fill="#e0f2fe"/>
    <rect x="305" y="230" width="120" height="78" rx="12" fill="#e0f2fe"/>
    <rect x="460" y="230" width="120" height="78" rx="12" fill="#e0f2fe"/>
    <circle cx="220" cy="395" r="38" fill="#1f2937"/><circle cx="580" cy="395" r="38" fill="#1f2937"/>
    <path d="M70 455 H730" stroke="#64748b" stroke-width="12" stroke-linecap="round"/>
    ${person(650, 60, color(seed, 2), "#7c2d12", 0)}
  `;
}

function food(seed) {
  return `
    <ellipse cx="400" cy="395" rx="245" ry="58" fill="#b45309"/>
    <ellipse cx="400" cy="345" rx="185" ry="92" fill="#fff7ed" stroke="#40313a" stroke-width="7"/>
    <circle cx="325" cy="330" r="38" fill="#facc15"/>
    <circle cx="392" cy="350" r="42" fill="#fb923c"/>
    <circle cx="465" cy="328" r="36" fill="#ef4444"/>
    <path d="M245 270 C315 225 485 225 555 270" fill="none" stroke="#22c55e" stroke-width="18" stroke-linecap="round"/>
    ${person(170, 65, color(seed, 1), "#4b2e1f", 0)}
    ${person(630, 65, color(seed, 4), "#d97706", 1)}
  `;
}

function classroom(seed) {
  return `
    <rect x="80" y="115" width="640" height="335" rx="28" fill="#f8fafc" stroke="#334155" stroke-width="7"/>
    <rect x="130" y="160" width="235" height="145" rx="16" fill="#dbeafe"/>
    <rect x="435" y="160" width="235" height="145" rx="16" fill="#dcfce7"/>
    <path d="M120 440 H690" stroke="#8b5a2b" stroke-width="38" stroke-linecap="round"/>
    <path d="M185 390 h155 M460 390 h155" stroke="#334155" stroke-width="14" stroke-linecap="round"/>
    ${person(250, 90, color(seed, 2), "#5b341d", 2)}
    ${person(550, 90, color(seed, 5), "#b45309", 0)}
  `;
}

function shop(seed) {
  return `
    <rect x="90" y="130" width="620" height="300" rx="35" fill="#fef3c7" stroke="#40313a" stroke-width="7"/>
    ${Array.from({ length: 7 }, (_, i) => `<path d="M${150 + i * 80} 168 v210" stroke="${color(seed, i)}" stroke-width="28" stroke-linecap="round"/>`).join("")}
    <ellipse cx="405" cy="430" rx="210" ry="48" fill="#92400e"/>
    <path d="M320 360 C350 295 455 295 490 360 Z" fill="${color(seed, 3)}" stroke="#40313a" stroke-width="6"/>
    ${person(190, 115, color(seed, 1), "#a34118", 0)}
    ${person(610, 115, color(seed, 4), "#3f2a1d", 1)}
  `;
}

function medical(seed) {
  return `
    <rect x="118" y="135" width="565" height="330" rx="38" fill="#eff6ff" stroke="#334155" stroke-width="7"/>
    <path d="M395 190 v130 M330 255 h130" stroke="#22c55e" stroke-width="35" stroke-linecap="round"/>
    <rect x="245" y="380" width="310" height="50" rx="16" fill="#dbeafe"/>
    ${person(220, 105, "#ffffff", "#c2410c", 1)}
    ${person(600, 115, color(seed, 2), "#4b2e1f", 0)}
  `;
}

function media(seed) {
  return `
    <rect x="150" y="135" width="500" height="300" rx="25" fill="#111827" stroke="#334155" stroke-width="9"/>
    <circle cx="400" cy="285" r="95" fill="${color(seed, 2)}" opacity=".75"/>
    <circle cx="400" cy="285" r="48" fill="#f8fafc"/>
    <rect x="300" y="448" width="200" height="32" rx="12" fill="#334155"/>
    ${person(165, 105, color(seed, 4), "#5b341d", 0)}
    ${person(630, 105, color(seed, 1), "#b45309", 1)}
  `;
}

function weather(seed) {
  return `
    <circle cx="585" cy="165" r="86" fill="#facc15"/>
    <path d="M150 315 C185 230 285 225 330 295 C370 235 500 250 522 338 C605 344 652 410 620 470 H145 C80 452 82 338 150 315Z" fill="#e0f2fe" stroke="#334155" stroke-width="7"/>
    ${Array.from({ length: 9 }, (_, i) => `<path d="M${160 + i * 55} 505 l-18 42" stroke="${color(seed, i)}" stroke-width="8" stroke-linecap="round"/>`).join("")}
  `;
}

function mapScene(seed) {
  return `
    <path d="M300 105 L450 95 L565 170 L610 300 L555 435 L420 505 L270 470 L190 350 L210 210 Z" fill="#cbd5e1" stroke="#475569" stroke-width="7"/>
    <path d="M330 295 L420 260 L510 320 L480 405 L365 410 Z" fill="${color(seed, 2)}" stroke="#f97316" stroke-width="5"/>
    <circle cx="415" cy="335" r="34" fill="#fb923c"/>
  `;
}

function generic(seed) {
  return `
    <rect x="110" y="145" width="580" height="305" rx="40" fill="#fff7ed" stroke="#40313a" stroke-width="7"/>
    <circle cx="405" cy="285" r="120" fill="${color(seed, 2)}" opacity=".35"/>
    ${person(250, 100, color(seed, 1), "#5b341d", 0)}
    ${person(555, 100, color(seed, 4), "#d97706", 1)}
  `;
}

function sceneFor(label) {
  const n = norm(label);
  const seed = hash(label);
  if (/\b(h|heure|minute|second|matin|midi|soir|janv|mars|avril|mai|juin|juil|oct|dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)\b/.test(n) || /\d/.test(n)) return clock(seed);
  if (/avion|aeroport|vol|embarquement|air france|porte/.test(n)) return transport("plane", seed);
  if (/train|gare|quai|voie|sncf|cff/.test(n)) return transport("train", seed);
  if (/bus|tram|metro|ligne|transport|arret/.test(n)) return transport("bus", seed);
  if (/cafe|restaurant|menu|plat|eau|jus|tarte|sandwich|poulet|poisson|glace|pates|pizza|quiche|fondue|raclette|gateau|pain|fromage|boisson|fruit|legume|recette|cuisine|salade|croissant|viennoiserie|chocolat|frites/.test(n)) return food(seed);
  if (/medecin|dent|sante|pharm|malade|hopital|ordonnance|vaccin|assurance|consultation|patient/.test(n)) return medical(seed);
  if (/ecole|cours|examen|devoir|professeur|eleve|etudiant|classe|salle|bibliotheque|livre|roman|bd|dictionnaire|cahier|papier|stylo|lecture/.test(n)) return classroom(seed);
  if (/magasin|vetement|robe|pantalon|manteau|chaussure|casquette|bijou|beaute|parfum|solde|centre commercial|boutique|achat|prix|carte bancaire|ticket/.test(n)) return shop(seed);
  if (/ordinateur|telephone|photo|camera|television|dvd|cinema|film|appareil|ecran|radio|site|internet/.test(n)) return media(seed);
  if (/concert|musique|danse|fete|anniversaire|mariage|theatre|spectacle|olympia|disco/.test(n)) return media(seed);
  if (/pluie|soleil|neige|meteo|temperature|froid|hiver|vent|chaleur/.test(n)) return weather(seed);
  if (/france|suisse|belgique|paris|berlin|nice|lyon|nantes|geneve|lausanne|sion|sierre|berne|montpellier|perpignan|bruxelles|zurich|europe|normandie|bretagne|valais|vaud|tessin|grisons/.test(n)) return mapScene(seed);
  return generic(seed);
}

function svg(label, key) {
  const seed = hash(`${key}:${label}`);
  const c1 = color(seed, 0);
  const c2 = color(seed, 4);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img" aria-label="${xml(label)}">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${c1}" stop-opacity=".22"/>
      <stop offset="100%" stop-color="${c2}" stop-opacity=".34"/>
    </linearGradient>
    <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#1f2937" flood-opacity=".15"/>
    </filter>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <circle cx="115" cy="105" r="80" fill="#fff" opacity=".45"/>
  <circle cx="700" cy="90" r="105" fill="#fff" opacity=".25"/>
  <path d="M0 505 C150 450 260 540 410 495 C560 450 650 495 800 450 V600 H0Z" fill="#f8fafc" opacity=".82"/>
  <g filter="url(#soft)">
    ${sceneFor(label)}
  </g>
</svg>
`;
}

function writeAsset(publicPath, label) {
  const target = path.join(PUBLIC_DIR, publicPath.replace(/^\//, ""));
  ensureDir(target);
  fs.writeFileSync(target, svg(label, publicPath));
}

function collectCE() {
  const src = fs.readFileSync(path.join(ROOT, "components/communication/ComprehensionEcritRunner.tsx"), "utf8");
  const paths = new Map();
  for (const match of src.matchAll(/\/expression\/ce\/([^`"' )]+\.svg)/g)) {
    const rel = match[1];
    if (!rel.includes("${")) paths.set(rel, rel.replace(/\.svg$/, "").replace(/[-/]/g, " "));
  }
  for (let i = 1; i <= 10; i += 1) {
    for (let j = 1; j <= 3; j += 1) {
      paths.set(`instruction-${i}-${j}.svg`, `instruction ${i} ${j}`);
      paths.set(`article-${i}-${j}.svg`, `article ${i} ${j}`);
    }
  }
  for (const level of LEVELS) {
    for (const [rel, label] of paths) {
      writeAsset(`/expression/ce/${level}/${rel}`, label);
    }
  }
  return paths.size * LEVELS.length;
}

function parseStringArray(value) {
  const out = [];
  for (const match of value.matchAll(/"((?:\\"|[^"])*)"/g)) {
    out.push(match[1].replace(/\\"/g, '"'));
  }
  return out;
}

function findMatching(source, start, open, close) {
  let depth = 0;
  let quote = null;
  for (let i = start; i < source.length; i += 1) {
    const ch = source[i];
    const prev = source[i - 1];
    if (quote) {
      if (ch === quote && prev !== "\\") quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      quote = ch;
      continue;
    }
    if (ch === open) depth += 1;
    if (ch === close) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function collectCO() {
  const dir = path.join(ROOT, "lib/curriculum/content/communication");
  const files = fs.readdirSync(dir).filter((name) => /^co-questions.*\.ts$/.test(name));
  let count = 0;
  for (const file of files) {
    const source = fs.readFileSync(path.join(dir, file), "utf8");
    let idx = 0;
    while ((idx = source.indexOf("buildPool(", idx)) !== -1) {
      const head = source.slice(idx, idx + 160);
      const args = head.match(/buildPool\(\s*"([^"]+)"\s*,\s*"([^"]+)"/);
      if (!args) {
        idx += 10;
        continue;
      }
      const level = args[1];
      const slug = args[2];
      const arrayStart = source.indexOf("[", idx);
      if (arrayStart === -1) {
        idx += 10;
        continue;
      }
      const arrayEnd = findMatching(source, arrayStart, "[", "]");
      if (arrayEnd === -1) {
        idx += 10;
        continue;
      }
      const body = source.slice(arrayStart + 1, arrayEnd);
      for (const item of body.matchAll(/id:\s*"([^"]+)"[\s\S]*?img:\s*\[([^\]]+)\]/g)) {
        const qId = item[1];
        const labels = parseStringArray(item[2]);
        labels.slice(0, 3).forEach((label, index) => {
          const suffix = ["a", "b", "c"][index];
          writeAsset(`/expression/co/${level}/${slug}/${qId}-${suffix}.svg`, label);
          count += 1;
        });
      }
      idx = arrayEnd + 1;
    }
  }
  return count;
}

const ceCount = collectCE();
const coCount = collectCO();
console.log(`Generated ${ceCount} CE images and ${coCount} CO images.`);
