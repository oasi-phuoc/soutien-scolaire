/**
 * Génère les illustrations W/X/Y/Z manquantes dans public/assets/words/temps/
 * Style : illustration vectorielle claire, fond blanc, 800×600 (4:3).
 *
 * Usage: node scripts/generate-wxyz-temps-images.cjs
 */
const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch {
  sharp = require(path.join(process.cwd(), "node_modules/next/node_modules/sharp"));
}

const OUT = path.join(process.cwd(), "public/assets/words/temps");
const LECTURE = path.join(process.cwd(), "public/assets/words/lecture");
const W = 800;
const H = 600;

function norm(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function existsInLecture(word) {
  if (!fs.existsSync(LECTURE)) return false;
  const n = norm(word);
  return fs.readdirSync(LECTURE).some((f) => norm(f.replace(/\.webp$/i, "")) === n);
}

function wrap(svg) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="#ffffff"/>
${svg}
</svg>`;
}

function numberSvg(digit) {
  const fontSize = 280;
  return wrap(`<text x="400" y="320" text-anchor="middle" dominant-baseline="central" font-family="Arial,Helvetica,sans-serif" font-size="${fontSize}" font-weight="700" fill="#1a1a1a">${digit}</text>`);
}

function animal(body, extra = "") {
  return wrap(`${extra}<g transform="translate(400,310)">${body}</g>`);
}

function object(shape) {
  return wrap(`<g transform="translate(400,300)">${shape}</g>`);
}

/** @type {Record<string, () => string>} */
const DRAW = {
  wapiti: () => animal(`
    <ellipse cx="0" cy="40" rx="120" ry="55" fill="#8B5A2B"/>
    <ellipse cx="-95" cy="15" rx="35" ry="28" fill="#A0522D"/>
    <circle cx="-115" cy="0" r="22" fill="#A0522D"/>
    <path d="M-130,-8 L-155,-25 L-140,-5 Z" fill="#5D3A1A"/>
    <path d="M-130,8 L-155,25 L-140,5 Z" fill="#5D3A1A"/>
    <rect x="-40" y="70" width="18" height="70" rx="6" fill="#6B4423"/>
    <rect x="20" y="70" width="18" height="70" rx="6" fill="#6B4423"/>
    <rect x="60" y="70" width="18" height="65" rx="6" fill="#6B4423"/>
    <rect x="100" y="70" width="18" height="65" rx="6" fill="#6B4423"/>
    <path d="M90,20 Q130,-30 150,10" fill="none" stroke="#5D3A1A" stroke-width="8" stroke-linecap="round"/>
  `),
  wombat: () => animal(`
    <ellipse cx="0" cy="30" rx="100" ry="65" fill="#6B5344"/>
    <ellipse cx="-80" cy="10" rx="40" ry="35" fill="#7A6352"/>
    <circle cx="-105" cy="0" r="8" fill="#1a1a1a"/>
    <ellipse cx="-95" cy="12" rx="10" ry="7" fill="#F5C6A5"/>
    <ellipse cx="60" cy="50" rx="25" ry="20" fill="#5C4838"/>
    <rect x="-50" y="75" width="22" height="45" rx="10" fill="#4A3828"/>
    <rect x="10" y="75" width="22" height="45" rx="10" fill="#4A3828"/>
    <rect x="50" y="75" width="22" height="40" rx="10" fill="#4A3828"/>
    <rect x="85" y="75" width="22" height="40" rx="10" fill="#4A3828"/>
  `),
  walrus: () => animal(`
    <ellipse cx="0" cy="20" rx="130" ry="75" fill="#8B7355"/>
    <ellipse cx="-100" cy="0" rx="50" ry="45" fill="#9C8468"/>
    <circle cx="-120" cy="-10" r="10" fill="#1a1a1a"/>
    <circle cx="-85" cy="-10" r="10" fill="#1a1a1a"/>
    <ellipse cx="-102" cy="25" rx="35" ry="20" fill="#C4A882"/>
    <path d="M-135,30 L-155,80 L-125,45 Z" fill="#EEE8DC"/>
    <path d="M-70,30 L-50,80 L-80,45 Z" fill="#EEE8DC"/>
    <ellipse cx="80" cy="60" rx="40" ry="25" fill="#7A6348"/>
  `),
  wallaby: () => animal(`
    <ellipse cx="0" cy="35" rx="75" ry="50" fill="#C4956A"/>
    <ellipse cx="-65" cy="10" rx="30" ry="28" fill="#D4A574"/>
    <circle cx="-78" cy="2" r="7" fill="#1a1a1a"/>
    <ellipse cx="50" cy="40" rx="55" ry="35" fill="#B8895E"/>
    <path d="M95,25 Q140,-20 120,50" fill="#B8895E"/>
    <rect x="-25" y="70" width="14" height="55" rx="5" fill="#8B6342"/>
    <rect x="15" y="70" width="14" height="55" rx="5" fill="#8B6342"/>
    <rect x="70" y="70" width="12" height="50" rx="5" fill="#8B6342"/>
    <rect x="100" y="70" width="12" height="50" rx="5" fill="#8B6342"/>
  `),
  wok: () => object(`
    <ellipse cx="0" cy="30" rx="160" ry="40" fill="#2a2a2a"/>
    <path d="M-160,30 Q0,-120 160,30 Z" fill="#1f1f1f" stroke="#444" stroke-width="4"/>
    <ellipse cx="0" cy="25" rx="120" ry="25" fill="#333"/>
    <path d="M160,20 L220,0" stroke="#555" stroke-width="10" stroke-linecap="round"/>
  `),
  wifi: () => object(`
    <rect x="-60" y="-80" width="120" height="160" rx="16" fill="#e8e8e8" stroke="#bbb" stroke-width="4"/>
    <circle cx="0" cy="40" r="12" fill="#22c55e"/>
    <path d="M-50,-20 Q0,-70 50,-20" fill="none" stroke="#3b82f6" stroke-width="12" stroke-linecap="round"/>
    <path d="M-35,0 Q0,-35 35,0" fill="none" stroke="#3b82f6" stroke-width="12" stroke-linecap="round"/>
    <path d="M-18,20 Q0,0 18,20" fill="none" stroke="#3b82f6" stroke-width="12" stroke-linecap="round"/>
  `),
  "week-end": () => object(`
    <rect x="-140" y="-100" width="280" height="200" rx="12" fill="#fff" stroke="#334155" stroke-width="6"/>
    <text x="0" y="-55" text-anchor="middle" font-family="Arial" font-size="28" font-weight="700" fill="#334155">SAM</text>
    <text x="0" y="0" text-anchor="middle" font-family="Arial" font-size="28" font-weight="700" fill="#334155">DIM</text>
    <rect x="-120" y="-75" width="240" height="45" rx="8" fill="#dbeafe"/>
    <rect x="-120" y="-20" width="240" height="45" rx="8" fill="#dcfce7"/>
    <circle cx="-80" cy="70" r="25" fill="#fbbf24"/>
    <path d="M60,70 L90,40 L120,70 L90,100 Z" fill="#22c55e"/>
  `),
  western: () => object(`
    <ellipse cx="0" cy="80" rx="140" ry="25" fill="#d4a574"/>
    <rect x="-30" y="-20" width="60" height="80" rx="8" fill="#1e3a5f"/>
    <circle cx="0" cy="-50" r="28" fill="#fcd9b6"/>
    <ellipse cx="0" cy="-58" rx="50" ry="12" fill="#8B4513"/>
    <rect x="-55" y="-65" width="110" height="8" rx="4" fill="#5D3A1A"/>
    <ellipse cx="80" cy="30" rx="70" ry="45" fill="#8B4513"/>
    <rect x="50" y="60" width="16" height="40" rx="4" fill="#5D3A1A"/>
    <rect x="95" y="60" width="16" height="40" rx="4" fill="#5D3A1A"/>
  `),
  "water-polo": () => object(`
    <rect x="-180" y="-40" width="360" height="120" rx="20" fill="#38bdf8"/>
    <ellipse cx="0" cy="20" rx="160" ry="35" fill="#0ea5e9" opacity=".5"/>
    <circle cx="0" cy="-30" r="45" fill="#facc15" stroke="#ca8a04" stroke-width="4"/>
    <path d="M-30,-30 L30,-30 M0,-60 L0,0" stroke="#1a1a1a" stroke-width="3"/>
  `),
  windsurf: () => object(`
    <path d="M-120,60 Q0,80 120,60 L100,40 Q0,55 -100,40 Z" fill="#38bdf8"/>
    <rect x="-10" y="-80" width="20" height="140" fill="#f59e0b"/>
    <polygon points="10,-80 120,-140 10,-40" fill="#ef4444"/>
    <rect x="-80" y="20" width="160" height="12" rx="4" fill="#f8fafc" stroke="#64748b" stroke-width="3"/>
  `),
  wakeboard: () => object(`
    <path d="M-140,40 Q0,60 140,40 L120,20 Q0,35 -120,20 Z" fill="#38bdf8"/>
    <rect x="-90" y="0" width="180" height="18" rx="8" fill="#1e293b"/>
    <rect x="-30" y="-60" width="60" height="60" rx="8" fill="#3b82f6"/>
    <line x1="0" y1="-60" x2="0" y2="0" stroke="#64748b" stroke-width="4"/>
  `),
  walkman: () => object(`
    <rect x="-100" y="-50" width="200" height="100" rx="16" fill="#1e293b"/>
    <rect x="-70" y="-25" width="80" height="50" rx="6" fill="#334155"/>
    <circle cx="60" cy="0" r="30" fill="#475569"/>
    <circle cx="60" cy="0" r="18" fill="#64748b"/>
    <path d="M120,-30 C160,-60 180,0 160,40 C140,70 120,30 120,-30" fill="none" stroke="#1e293b" stroke-width="8"/>
    <ellipse cx="165" cy="5" rx="25" ry="35" fill="#374151"/>
  `),
  webcam: () => object(`
    <ellipse cx="0" cy="0" rx="80" ry="70" fill="#1e293b"/>
    <circle cx="0" cy="0" r="45" fill="#0f172a" stroke="#475569" stroke-width="6"/>
    <circle cx="0" cy="0" r="25" fill="#1e40af"/>
    <circle cx="0" cy="0" r="12" fill="#60a5fa"/>
    <rect x="-20" y="65" width="40" height="30" fill="#334155"/>
    <rect x="-50" y="90" width="100" height="12" rx="4" fill="#475569"/>
  `),
  wigwam: () => object(`
    <polygon points="0,-120 130,100 -130,100" fill="#d97706" stroke="#92400e" stroke-width="4"/>
    <line x1="0" y1="-120" x2="0" y2="100" stroke="#78350f" stroke-width="3"/>
    <line x1="-65" y1="-10" x2="65" y2="-10" stroke="#78350f" stroke-width="3"/>
    <line x1="-100" y1="40" x2="100" y2="40" stroke="#78350f" stroke-width="3"/>
    <rect x="-35" y="60" width="70" height="40" rx="4" fill="#451a03"/>
  `),
  wagonnet: () => object(`
    <rect x="-120" y="-30" width="200" height="70" rx="8" fill="#6B5344" stroke="#4a3728" stroke-width="4"/>
    <rect x="-100" y="-15" width="160" height="40" rx="4" fill="#8B7355"/>
    <circle cx="-70" cy="55" r="22" fill="#1a1a1a"/><circle cx="-70" cy="55" r="10" fill="#666"/>
    <circle cx="50" cy="55" r="22" fill="#1a1a1a"/><circle cx="50" cy="55" r="10" fill="#666"/>
    <rect x="80" y="0" width="60" height="8" fill="#555"/>
  `),
  sandwich: () => object(`
    <ellipse cx="0" cy="50" rx="130" ry="25" fill="#d4a574"/>
    <path d="M-120,40 Q0,-60 120,40 Z" fill="#F5DEB3" stroke="#DEB887" stroke-width="3"/>
    <path d="M-100,10 Q0,-30 100,10" fill="#86efac"/>
    <path d="M-90,-10 Q0,-45 90,-10" fill="#fca5a5"/>
    <path d="M-110,25 Q0,-5 110,25" fill="#fde68a"/>
  `),
  "cow-boy": () => object(`
    <circle cx="0" cy="-60" r="35" fill="#fcd9b6"/>
    <ellipse cx="0" cy="-75" rx="55" ry="15" fill="#8B4513"/>
    <rect x="-40" y="-25" width="80" height="90" rx="10" fill="#1e40af"/>
    <rect x="-50" y="60" width="30" height="50" rx="6" fill="#5D3A1A"/>
    <rect x="20" y="60" width="30" height="50" rx="6" fill="#5D3A1A"/>
    <ellipse cx="0" cy="-50" rx="12" ry="8" fill="#ef4444"/>
    <path d="M60,-40 Q120,-80 100,-20" fill="none" stroke="#8B4513" stroke-width="5"/>
  `),
  sweat: () => object(`
    <path d="M-100,-80 L100,-80 L120,80 L-120,80 Z" fill="#94a3b8" stroke="#64748b" stroke-width="4"/>
    <path d="M-40,-80 Q0,-20 40,-80" fill="none" stroke="#cbd5e1" stroke-width="20" stroke-linecap="round"/>
    <ellipse cx="-70" cy="20" rx="35" ry="45" fill="#64748b"/>
    <ellipse cx="70" cy="20" rx="35" ry="45" fill="#64748b"/>
  `),
  bungalow: () => object(`
    <rect x="-100" y="-20" width="200" height="100" fill="#fcd34d" stroke="#d97706" stroke-width="4"/>
    <polygon points="0,-90 -130,-20 130,-20" fill="#dc2626"/>
    <rect x="-30" y="30" width="60" height="50" fill="#78350f"/>
    <rect x="50" y="-5" width="35" height="35" fill="#7dd3fc"/>
    <ellipse cx="-120" cy="40" rx="25" ry="60" fill="#22c55e"/>
    <ellipse cx="120" cy="40" rx="25" ry="60" fill="#22c55e"/>
  `),
  hawai: () => object(`
    <path d="M-180,60 Q0,20 180,60 L180,100 L-180,100 Z" fill="#fbbf24"/>
    <path d="M-180,60 Q0,30 180,60" fill="#38bdf8" stroke="#0ea5e9" stroke-width="2"/>
    <rect x="-15" y="-100" width="30" height="160" fill="#8B4513"/>
    <ellipse cx="0" cy="-110" rx="70" ry="30" fill="#22c55e"/>
    <ellipse cx="-50" cy="-95" rx="50" ry="22" fill="#16a34a"/>
    <ellipse cx="50" cy="-95" rx="50" ry="22" fill="#16a34a"/>
    <circle cx="120" cy="-60" r="35" fill="#fbbf24"/>
  `),
  edelweiss: () => object(`
    <rect x="-20" y="0" width="40" height="100" fill="#6B8E4E"/>
    <ellipse cx="0" cy="-40" rx="15" ry="40" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
    <ellipse cx="-35" cy="-20" rx="15" ry="35" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" transform="rotate(-40)"/>
    <ellipse cx="35" cy="-20" rx="15" ry="35" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" transform="rotate(40)"/>
    <ellipse cx="-25" cy="-55" rx="12" ry="30" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" transform="rotate(-70)"/>
    <ellipse cx="25" cy="-55" rx="12" ry="30" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" transform="rotate(70)"/>
    <circle cx="0" cy="-35" r="12" fill="#fbbf24"/>
  `),
  wasabi: () => object(`
    <rect x="-80" y="40" width="160" height="20" rx="4" fill="#e5e7eb"/>
    <ellipse cx="0" cy="10" rx="70" ry="25" fill="#f8fafc" stroke="#d1d5db" stroke-width="3"/>
    <ellipse cx="0" cy="-20" rx="35" ry="20" fill="#22c55e"/>
    <path d="M-60,-50 Q0,-80 60,-50" fill="none" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>
  `),
  bowling: () => object(`
    <circle cx="-60" cy="40" r="40" fill="#1e293b" stroke="#334155" stroke-width="3"/>
    <circle cx="-60" cy="40" r="12" fill="#475569"/>
    <circle cx="30" cy="20" r="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
    <circle cx="55" cy="35" r="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
    <circle cx="80" cy="50" r="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
    <circle cx="42" cy="50" r="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
    <circle cx="67" cy="65" r="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
    <rect x="-180" y="70" width="360" height="30" rx="8" fill="#d97706"/>
  `),
  clown: () => object(`
    <circle cx="0" cy="-50" r="50" fill="#fcd9b6"/>
    <circle cx="-18" cy="-58" r="10" fill="#fff"/><circle cx="-18" cy="-58" r="5" fill="#1a1a1a"/>
    <circle cx="18" cy="-58" r="10" fill="#fff"/><circle cx="18" cy="-58" r="5" fill="#1a1a1a"/>
    <circle cx="0" cy="-40" r="14" fill="#ef4444"/>
    <path d="M-25,-25 Q0,-5 25,-25" fill="none" stroke="#a64b5d" stroke-width="4"/>
    <ellipse cx="-55" cy="-30" rx="20" ry="12" fill="#ef4444"/>
    <ellipse cx="55" cy="-30" rx="20" ry="12" fill="#ef4444"/>
    <rect x="-50" y="10" width="100" height="80" rx="20" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
    <circle cx="-30" cy="40" r="12" fill="#fff"/><circle cx="30" cy="40" r="12" fill="#fff"/>
  `),
  boxe: () => object(`
    <ellipse cx="-70" cy="0" rx="55" ry="70" fill="#dc2626" stroke="#991b1b" stroke-width="4"/>
    <ellipse cx="70" cy="0" rx="55" ry="70" fill="#dc2626" stroke="#991b1b" stroke-width="4"/>
    <rect x="-95" y="-60" width="50" height="40" rx="10" fill="#fef2f2"/>
    <rect x="45" y="-60" width="50" height="40" rx="10" fill="#fef2f2"/>
  `),
  lynx: () => animal(`
    <ellipse cx="0" cy="30" rx="90" ry="50" fill="#c4a882"/>
    <ellipse cx="-70" cy="0" rx="40" ry="38" fill="#d4b896"/>
    <path d="M-95,-30 L-105,-55 L-80,-35 Z" fill="#d4b896"/>
    <path d="M-45,-30 L-35,-55 L-60,-35 Z" fill="#d4b896"/>
    <circle cx="-82" cy="-5" r="8" fill="#1a1a1a"/>
    <path d="M-95,10 Q-75,25 -55,10" fill="none" stroke="#8B6342" stroke-width="3"/>
    <ellipse cx="40" cy="40" rx="30" ry="18" fill="#b89968"/>
    <rect x="-30" y="65" width="16" height="50" rx="5" fill="#8B6342"/>
    <rect x="15" y="65" width="16" height="50" rx="5" fill="#8B6342"/>
    <rect x="50" y="65" width="14" height="45" rx="5" fill="#8B6342"/>
    <rect x="75" y="65" width="14" height="45" rx="5" fill="#8B6342"/>
  `),
  sphinx: () => object(`
    <ellipse cx="0" cy="60" rx="150" ry="40" fill="#d4a574"/>
    <path d="M-100,60 L-60,-40 L60,-40 L100,60 Z" fill="#d4a574"/>
    <ellipse cx="0" cy="-60" rx="45" ry="55" fill="#e8c49a"/>
    <path d="M-30,-90 Q0,-110 30,-90" fill="#1a1a1a"/>
    <ellipse cx="-15" cy="-65" rx="8" ry="12" fill="#1a1a1a"/>
    <ellipse cx="15" cy="-65" rx="8" ry="12" fill="#1a1a1a"/>
    <path d="M-80,60 Q-40,20 0,60 Q40,20 80,60" fill="#c4956a"/>
  `),
  noix: () => object(`
    <ellipse cx="-40" cy="0" rx="55" ry="65" fill="#8B4513" stroke="#5D3A1A" stroke-width="3"/>
    <path d="M-40,-60 Q-10,-20 -40,60" fill="none" stroke="#5D3A1A" stroke-width="4"/>
    <ellipse cx="40" cy="0" rx="55" ry="65" fill="#A0522D" stroke="#5D3A1A" stroke-width="3"/>
    <path d="M40,-60 Q10,-20 40,60" fill="none" stroke="#5D3A1A" stroke-width="4"/>
  `),
  houx: () => object(`
    <rect x="-8" y="-40" width="16" height="140" fill="#5D3A1A"/>
    <ellipse cx="-40" cy="-20" rx="35" ry="22" fill="#166534" transform="rotate(-30)"/>
    <ellipse cx="40" cy="-20" rx="35" ry="22" fill="#166534" transform="rotate(30)"/>
    <ellipse cx="-50" cy="20" rx="32" ry="20" fill="#15803d" transform="rotate(-20)"/>
    <ellipse cx="50" cy="20" rx="32" ry="20" fill="#15803d" transform="rotate(20)"/>
    <circle cx="-35" cy="-10" r="10" fill="#dc2626"/>
    <circle cx="35" cy="-10" r="10" fill="#dc2626"/>
    <circle cx="-20" cy="25" r="10" fill="#dc2626"/>
    <circle cx="25" cy="15" r="10" fill="#dc2626"/>
  `),
  perdrix: () => animal(`
    <ellipse cx="0" cy="30" rx="80" ry="45" fill="#78716c" stroke="#57534e" stroke-width="3"/>
    <circle cx="-55" cy="0" r="28" fill="#a8a29e"/>
    <circle cx="-68" cy="-5" r="8" fill="#1a1a1a"/>
    <path d="M-80,5 L-100,10 L-85,15 Z" fill="#f59e0b"/>
    <path d="M20,-20 L40,-50 L30,-10 Z" fill="#78716c"/>
    <ellipse cx="30" cy="40" rx="35" ry="22" fill="#a8a29e"/>
    <rect x="-20" y="65" width="12" height="35" fill="#f59e0b"/>
    <rect x="10" y="65" width="12" height="35" fill="#f59e0b"/>
  `),
  oryx: () => animal(`
    <ellipse cx="0" cy="35" rx="85" ry="40" fill="#f5f5f4" stroke="#d6d3d1" stroke-width="3"/>
    <ellipse cx="-65" cy="5" rx="32" ry="30" fill="#fff"/>
    <path d="M-85,-25 L-90,-70 L-75,-30 Z" fill="#e7e5e4"/>
    <path d="M-55,-25 L-50,-70 L-65,-30 Z" fill="#e7e5e4"/>
    <circle cx="-75" cy="0" r="7" fill="#1a1a1a"/>
    <rect x="-25" y="65" width="12" height="55" fill="#d6d3d1"/>
    <rect x="15" y="65" width="12" height="55" fill="#d6d3d1"/>
    <rect x="50" y="65" width="12" height="50" fill="#d6d3d1"/>
    <rect x="75" y="65" width="12" height="50" fill="#d6d3d1"/>
    <path d="M70,10 L100,-20" stroke="#78716c" stroke-width="4"/>
  `),
  axe: () => object(`
    <rect x="-8" y="-80" width="16" height="180" rx="6" fill="#8B4513"/>
    <path d="M8,-60 L80,-100 L80,-20 L8,-40 Z" fill="#94a3b8" stroke="#64748b" stroke-width="3"/>
    <path d="M8,-55 L75,-90 L75,-30 L8,-45 Z" fill="#cbd5e1"/>
  `),
  mixeur: () => object(`
    <rect x="-50" y="-60" width="100" height="120" rx="20" fill="#ef4444"/>
    <rect x="-35" y="-40" width="70" height="50" rx="8" fill="#1e293b" opacity=".3"/>
    <rect x="-20" y="20" width="40" height="60" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
    <ellipse cx="0" cy="95" rx="35" ry="12" fill="#e2e8f0"/>
    <circle cx="35" cy="-30" r="12" fill="#1e293b"/>
  `),
  klaxon: () => object(`
    <circle cx="-40" cy="0" r="50" fill="#1e293b" stroke="#fbbf24" stroke-width="8"/>
    <text x="-40" y="8" text-anchor="middle" font-family="Arial" font-size="28" font-weight="700" fill="#fbbf24">!</text>
    <path d="M10,-20 L80,-50 L80,50 L10,20 Z" fill="#374151"/>
    <path d="M85,-30 L120,-50 M85,0 L130,0 M85,30 L120,50" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
  `),
  six: () => numberSvg("6"),
  dix: () => numberSvg("10"),
  deux: () => numberSvg("2"),
  paix: () => object(`
    <ellipse cx="0" cy="20" rx="60" ry="30" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
    <path d="M-50,0 Q0,-80 50,0 Q0,40 -50,0" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="-15" cy="-20" r="6" fill="#1a1a1a"/>
    <path d="M0,-10 L30,20" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <path d="M-30,-50 L-20,-70 M20,-50 L30,-70 M0,-60 L0,-85" stroke="#22c55e" stroke-width="5" stroke-linecap="round"/>
  `),
  croix: () => object(`
    <rect x="-25" y="-100" width="50" height="200" rx="8" fill="#dc2626"/>
    <rect x="-100" y="-25" width="200" height="50" rx="8" fill="#dc2626"/>
    <rect x="-18" y="-92" width="36" height="184" rx="6" fill="#ef4444"/>
    <rect x="-92" y="-18" width="184" height="36" rx="6" fill="#ef4444"/>
  `),
  tyrannosaure: () => animal(`
    <ellipse cx="0" cy="40" rx="110" ry="55" fill="#4d7c0f" stroke="#365314" stroke-width="4"/>
    <ellipse cx="-90" cy="-10" rx="55" ry="50" fill="#65a30d" stroke="#365314" stroke-width="3"/>
    <circle cx="-115" cy="-25" r="14" fill="#1a1a1a"/>
    <path d="M-140,-15 L-175,5 L-145,5 Z" fill="#f8fafc"/>
    <path d="M-140,5 L-175,25 L-145,20 Z" fill="#f8fafc"/>
    <rect x="-40" y="80" width="22" height="60" rx="8" fill="#365314"/>
    <rect x="20" y="80" width="22" height="60" rx="8" fill="#365314"/>
    <path d="M60,20 L120,-10 L100,40 Z" fill="#65a30d"/>
    <path d="M80,30 L140,50" stroke="#365314" stroke-width="6" stroke-linecap="round"/>
  `),
  yak: () => animal(`
    <ellipse cx="0" cy="30" rx="100" ry="55" fill="#44403c"/>
    <ellipse cx="-80" cy="0" rx="45" ry="40" fill="#57534e"/>
    <path d="M-110,-20 L-125,-50 L-100,-25 Z" fill="#44403c"/>
    <path d="M-60,-20 L-45,-50 L-70,-25 Z" fill="#44403c"/>
    <circle cx="-95" cy="-5" r="8" fill="#1a1a1a"/>
    <path d="M-120,10 Q-90,30 -60,10" fill="none" stroke="#78716c" stroke-width="6"/>
    <rect x="-30" y="70" width="18" height="55" fill="#292524"/>
    <rect x="20" y="70" width="18" height="55" fill="#292524"/>
    <rect x="60" y="70" width="16" height="50" fill="#292524"/>
    <rect x="90" y="70" width="16" height="50" fill="#292524"/>
  `),
  yacht: () => object(`
    <path d="M-140,40 L140,40 L100,10 L-100,10 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="4"/>
    <rect x="-8" y="-100" width="16" height="110" fill="#8B4513"/>
    <polygon points="8,-100 90,-80 8,-50" fill="#ef4444"/>
    <path d="M-180,40 Q0,55 180,40 L180,60 L-180,60 Z" fill="#38bdf8"/>
  `),
  yeux: () => object(`
    <ellipse cx="-55" cy="0" rx="50" ry="35" fill="#fff" stroke="#94a3b8" stroke-width="4"/>
    <ellipse cx="55" cy="0" rx="50" ry="35" fill="#fff" stroke="#94a3b8" stroke-width="4"/>
    <circle cx="-55" cy="0" r="22" fill="#60a5fa"/>
    <circle cx="55" cy="0" r="22" fill="#60a5fa"/>
    <circle cx="-48" cy="-6" r="10" fill="#1a1a1a"/>
    <circle cx="62" cy="-6" r="10" fill="#1a1a1a"/>
    <path d="M-100,-30 Q-55,-55 -10,-30" fill="none" stroke="#57534e" stroke-width="5" stroke-linecap="round"/>
    <path d="M10,-30 Q55,-55 100,-30" fill="none" stroke="#57534e" stroke-width="5" stroke-linecap="round"/>
  `),
  poney: () => animal(`
    <ellipse cx="0" cy="35" rx="75" ry="45" fill="#a16207"/>
    <ellipse cx="-60" cy="5" rx="35" ry="32" fill="#ca8a04"/>
    <circle cx="-75" cy="-2" r="8" fill="#1a1a1a"/>
    <path d="M-90,10 L-110,15 L-95,18 Z" fill="#713f12"/>
    <ellipse cx="40" cy="40" rx="30" ry="20" fill="#ca8a04"/>
    <rect x="-20" y="70" width="12" height="45" fill="#713f12"/>
    <rect x="15" y="70" width="12" height="45" fill="#713f12"/>
    <rect x="45" y="70" width="10" height="40" fill="#713f12"/>
    <rect x="65" y="70" width="10" height="40" fill="#713f12"/>
    <path d="M50,15 L70,-15" stroke="#713f12" stroke-width="5"/>
  `),
  cyclone: () => object(`
    <path d="M0,-100 Q80,-80 60,0 Q100,80 0,100 Q-100,80 -60,0 Q-80,-80 0,-100" fill="none" stroke="#64748b" stroke-width="16" stroke-linecap="round"/>
    <path d="M0,-70 Q50,-55 40,0 Q65,55 0,70 Q-65,55 -40,0 Q-50,-55 0,-70" fill="none" stroke="#94a3b8" stroke-width="12"/>
    <path d="M0,-40 Q25,-30 20,0 Q32,30 0,40 Q-32,30 -20,0 Q-25,-30 0,-40" fill="none" stroke="#cbd5e1" stroke-width="8"/>
  `),
  cycle: () => object(`
    <circle cx="-60" cy="40" r="55" fill="none" stroke="#1e293b" stroke-width="10"/>
    <circle cx="60" cy="40" r="55" fill="none" stroke="#1e293b" stroke-width="10"/>
    <path d="M-60,40 L0,-30 L60,40" fill="none" stroke="#1e293b" stroke-width="8"/>
    <rect x="-15" y="-50" width="30" height="20" rx="6" fill="#3b82f6"/>
    <line x1="0" y1="-30" x2="0" y2="10" stroke="#1e293b" stroke-width="6"/>
  `),
  gymnase: () => object(`
    <path d="M-160,-60 L0,-120 L160,-60 L160,80 L-160,80 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="5"/>
    <rect x="-140" y="20" width="280" height="60" fill="#f97316"/>
    <line x1="-140" y1="20" x2="140" y2="20" stroke="#fff" stroke-width="4"/>
    <line x1="0" y1="20" x2="0" y2="80" stroke="#fff" stroke-width="4"/>
    <circle cx="0" cy="-20" r="25" fill="#fbbf24"/>
  `),
  joyau: () => object(`
    <polygon points="0,-70 -50,-20 0,60 50,-20" fill="#60a5fa" stroke="#2563eb" stroke-width="4"/>
    <polygon points="0,-70 -25,-20 0,10 25,-20" fill="#93c5fd"/>
    <ellipse cx="0" cy="80" rx="55" ry="20" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>
    <circle cx="0" cy="55" r="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
  `),
  noyau: () => object(`
    <ellipse cx="0" cy="-30" rx="70" ry="65" fill="#fca5a5" stroke="#ef4444" stroke-width="4"/>
    <ellipse cx="0" cy="-25" rx="55" ry="50" fill="#fbbf24"/>
    <ellipse cx="0" cy="40" rx="35" ry="30" fill="#8B4513" stroke="#5D3A1A" stroke-width="3"/>
    <path d="M0,15 Q15,30 0,55 Q-15,30 0,15" fill="#A0522D"/>
  `),
  coyote: () => animal(`
    <ellipse cx="0" cy="35" rx="90" ry="45" fill="#a8a29e"/>
    <ellipse cx="-70" cy="0" rx="40" ry="35" fill="#d6d3d1"/>
    <path d="M-95,-25 L-105,-50 L-80,-30 Z" fill="#d6d3d1"/>
    <path d="M-50,-25 L-40,-50 L-65,-30 Z" fill="#d6d3d1"/>
    <circle cx="-82" cy="-5" r="8" fill="#1a1a1a"/>
    <ellipse cx="50" cy="40" rx="35" ry="22" fill="#d6d3d1"/>
    <rect x="-25" y="70" width="14" height="50" fill="#78716c"/>
    <rect x="15" y="70" width="14" height="50" fill="#78716c"/>
    <rect x="55" y="70" width="12" height="45" fill="#78716c"/>
    <rect x="80" y="70" width="12" height="45" fill="#78716c"/>
  `),
  hyène: () => animal(`
    <ellipse cx="0" cy="35" rx="95" ry="48" fill="#a8a29e" stroke="#78716c" stroke-width="3"/>
    <ellipse cx="-75" cy="0" rx="42" ry="38" fill="#d6d3d1"/>
    <circle cx="-92" cy="-8" r="9" fill="#1a1a1a"/>
    <path d="M-105,15 Q-80,35 -55,15" fill="none" stroke="#57534e" stroke-width="4"/>
    <path d="M-70,-30 L-75,-55 L-55,-35 Z" fill="#d6d3d1"/>
    <path d="M-40,-30 L-35,-55 L-55,-35 Z" fill="#d6d3d1"/>
    <rect x="-30" y="70" width="16" height="50" fill="#57534e"/>
    <rect x="15" y="70" width="16" height="50" fill="#57534e"/>
    <rect x="55" y="70" width="14" height="45" fill="#57534e"/>
    <rect x="80" y="70" width="14" height="45" fill="#57534e"/>
    <path d="M70,25 Q110,10 120,40" fill="none" stroke="#a8a29e" stroke-width="8"/>
  `),
  rayon: () => object(`
    <circle cx="0" cy="0" r="55" fill="#fbbf24" stroke="#f59e0b" stroke-width="4"/>
    <line x1="0" y1="-80" x2="0" y2="-130" stroke="#fbbf24" stroke-width="10" stroke-linecap="round"/>
    <line x1="57" y1="-57" x2="92" y2="-92" stroke="#fbbf24" stroke-width="10" stroke-linecap="round"/>
    <line x1="80" y1="0" x2="130" y2="0" stroke="#fbbf24" stroke-width="10" stroke-linecap="round"/>
    <line x1="57" y1="57" x2="92" y2="92" stroke="#fbbf24" stroke-width="10" stroke-linecap="round"/>
    <line x1="0" y1="80" x2="0" y2="130" stroke="#fbbf24" stroke-width="10" stroke-linecap="round"/>
    <line x1="-57" y1="57" x2="-92" y2="92" stroke="#fbbf24" stroke-width="10" stroke-linecap="round"/>
    <line x1="-80" y1="0" x2="-130" y2="0" stroke="#fbbf24" stroke-width="10" stroke-linecap="round"/>
    <line x1="-57" y1="-57" x2="-92" y2="-92" stroke="#fbbf24" stroke-width="10" stroke-linecap="round"/>
  `),
  tuyau: () => object(`
    <path d="M-120,40 Q-60,-60 0,-40 Q60,-20 120,40" fill="none" stroke="#22c55e" stroke-width="28" stroke-linecap="round"/>
    <ellipse cx="-120" cy="40" rx="18" ry="22" fill="#16a34a"/>
    <path d="M110,30 L150,10 L150,50 Z" fill="#94a3b8"/>
    <circle cx="-80" cy="-10" r="8" fill="#38bdf8" opacity=".7"/>
    <circle cx="-20" cy="-35" r="8" fill="#38bdf8" opacity=".7"/>
    <circle cx="40" cy="-25" r="8" fill="#38bdf8" opacity=".7"/>
  `),
  foyer: () => object(`
    <rect x="-120" y="-40" width="240" height="120" fill="#78716c" stroke="#57534e" stroke-width="5"/>
    <rect x="-80" y="0" width="160" height="80" fill="#1a1a1a"/>
    <path d="M-40,0 Q0,-60 40,0 Q20,30 0,10 Q-20,30 -40,0" fill="#f97316"/>
    <path d="M-20,5 Q0,-25 20,5 Q10,20 0,12 Q-10,20 -20,5" fill="#fbbf24"/>
    <rect x="-130" y="75" width="260" height="15" fill="#a8a29e"/>
  `),
  voyage: () => object(`
    <rect x="-60" y="-20" width="120" height="90" rx="12" fill="#3b82f6" stroke="#1d4ed8" stroke-width="4"/>
    <rect x="-45" y="-5" width="90" height="15" fill="#60a5fa"/>
    <path d="M80,-40 L160,-10 L140,30 L60,0 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
    <path d="M100,-30 L150,-10 L135,15 L85,-5 Z" fill="#38bdf8" opacity=".5"/>
    <circle cx="-80" cy="60" r="18" fill="#1e293b"/>
    <circle cx="80" cy="60" r="18" fill="#1e293b"/>
  `),
  labyrinthe: () => object(`
    <rect x="-130" y="-90" width="260" height="180" rx="8" fill="#86efac" stroke="#22c55e" stroke-width="5"/>
    <path d="M-100,-60 H60 V-20 H-40 V20 H80 V60 H-100" fill="none" stroke="#166534" stroke-width="12" stroke-linecap="square"/>
    <circle cx="90" cy="45" r="15" fill="#fbbf24"/>
    <circle cx="-90" cy="-45" r="12" fill="#ef4444"/>
  `),
  gazelle: () => animal(`
    <ellipse cx="0" cy="35" rx="80" ry="40" fill="#d4a574"/>
    <ellipse cx="-65" cy="0" rx="35" ry="32" fill="#e8c49a"/>
    <circle cx="-80" cy="-5" r="7" fill="#1a1a1a"/>
    <path d="M-95,-20 L-100,-45 L-85,-25 Z" fill="#e8c49a"/>
    <path d="M-55,-20 L-50,-45 L-65,-25 Z" fill="#e8c49a"/>
    <rect x="-20" y="65" width="10" height="55" fill="#a16207"/>
    <rect x="10" y="65" width="10" height="55" fill="#a16207"/>
    <rect x="40" y="65" width="8" height="50" fill="#a16207"/>
    <rect x="60" y="65" width="8" height="50" fill="#a16207"/>
    <path d="M70,15 L95,-25" stroke="#d4a574" stroke-width="5"/>
  `),
  zone: () => object(`
    <polygon points="0,-90 78,-30 50,75 -50,75 -78,-30" fill="#fbbf24" stroke="#1a1a1a" stroke-width="6"/>
    <text x="0" y="15" text-anchor="middle" font-family="Arial" font-size="52" font-weight="900" fill="#1a1a1a">Z</text>
    <rect x="-130" y="90" width="260" height="12" fill="#94a3b8"/>
  `),
  "zéro": () => numberSvg("0"),
  gazon: () => object(`
    <rect x="-180" y="20" width="360" height="80" fill="#4ade80"/>
    <path d="M-150,20 L-140,-40 M-100,20 L-90,-50 M-50,20 L-40,-35 M0,20 L10,-55 M50,20 L60,-40 M100,20 L110,-50 M150,20 L160,-35" stroke="#22c55e" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="-80" cy="30" rx="40" ry="15" fill="#16a34a"/>
    <ellipse cx="60" cy="35" rx="50" ry="18" fill="#16a34a"/>
  `),
  gaz: () => object(`
    <rect x="-80" y="-40" width="160" height="100" rx="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="4"/>
    <circle cx="0" cy="10" r="35" fill="#1e293b"/>
    <circle cx="0" cy="10" r="25" fill="#374151"/>
    <ellipse cx="0" cy="5" rx="15" ry="20" fill="#60a5fa" opacity=".8"/>
    <ellipse cx="-8" cy="0" rx="8" ry="15" fill="#93c5fd" opacity=".9"/>
  `),
  bronze: () => object(`
    <circle cx="0" cy="-20" r="70" fill="#d97706" stroke="#92400e" stroke-width="5"/>
    <text x="0" y="-5" text-anchor="middle" font-family="Arial" font-size="48" font-weight="700" fill="#fff">3</text>
    <rect x="-60" y="55" width="120" height="25" rx="6" fill="#b45309"/>
    <path d="M-30,80 L-40,120 M30,80 L40,120" stroke="#d97706" stroke-width="8" stroke-linecap="round"/>
    <rect x="-50" y="115" width="100" height="12" rx="4" fill="#92400e"/>
  `),
  trapeze: () => object(`
    <line x1="-100" y1="-90" x2="100" y2="-90" stroke="#57534e" stroke-width="8"/>
    <line x1="-60" y1="-90" x2="-40" y2="30" stroke="#78716c" stroke-width="4"/>
    <line x1="60" y1="-90" x2="40" y2="30" stroke="#78716c" stroke-width="4"/>
    <rect x="-70" y="25" width="140" height="10" rx="4" fill="#f59e0b"/>
    <circle cx="0" cy="5" r="18" fill="#fcd9b6"/>
    <rect x="-12" y="20" width="24" height="30" rx="6" fill="#ef4444"/>
  `),
  quetzal: () => animal(`
    <ellipse cx="0" cy="30" rx="55" ry="30" fill="#15803d"/>
    <circle cx="-40" cy="5" r="22" fill="#22c55e"/>
    <circle cx="-52" cy="0" r="6" fill="#1a1a1a"/>
    <path d="M-58,8 L-72,12 L-60,14 Z" fill="#f59e0b"/>
    <path d="M40,20 Q100,0 120,40 Q80,60 40,35" fill="#166534"/>
    <path d="M50,25 Q90,15 110,35" fill="#22c55e"/>
    <rect x="-15" y="50" width="8" height="25" fill="#14532d"/>
    <rect x="5" y="50" width="8" height="25" fill="#14532d"/>
  `),
  bulldozer: () => object(`
    <rect x="-80" y="-20" width="140" height="60" rx="8" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>
    <rect x="60" y="-40" width="50" height="80" fill="#94a3b8" stroke="#64748b" stroke-width="3"/>
    <rect x="-140" y="0" width="70" height="40" fill="#78716c"/>
    <circle cx="-60" cy="50" r="28" fill="#1a1a1a"/><circle cx="-60" cy="50" r="12" fill="#666"/>
    <circle cx="30" cy="50" r="28" fill="#1a1a1a"/><circle cx="30" cy="50" r="12" fill="#666"/>
    <circle cx="80" cy="50" r="22" fill="#1a1a1a"/><circle cx="80" cy="50" r="10" fill="#666"/>
    <rect x="-30" y="-50" width="40" height="30" rx="4" fill="#60a5fa"/>
  `),
  jazz: () => object(`
    <path d="M-30,-80 L-30,60" stroke="#1a1a1a" stroke-width="8" stroke-linecap="round"/>
    <path d="M-30,60 Q40,80 50,20 Q60,-40 -10,-20" fill="none" stroke="#1a1a1a" stroke-width="8"/>
    <ellipse cx="-50" cy="-70" rx="22" ry="16" fill="#fbbf24" stroke="#1a1a1a" stroke-width="3"/>
    <ellipse cx="10" cy="-50" rx="22" ry="16" fill="#fbbf24" stroke="#1a1a1a" stroke-width="3"/>
    <ellipse cx="50" cy="-20" rx="22" ry="16" fill="#fbbf24" stroke="#1a1a1a" stroke-width="3"/>
    <path d="M60,-80 Q90,-100 100,-60" fill="none" stroke="#64748b" stroke-width="3"/>
  `),
  zeste: () => object(`
    <ellipse cx="-30" cy="20" rx="55" ry="45" fill="#fbbf24" stroke="#f59e0b" stroke-width="4"/>
    <ellipse cx="-30" cy="25" rx="40" ry="32" fill="#fde68a"/>
    <path d="M30,-40 Q80,-60 90,0 Q70,50 40,20" fill="none" stroke="#fbbf24" stroke-width="14" stroke-linecap="round"/>
    <path d="M35,-35 Q75,-50 82,0" fill="none" stroke="#fde68a" stroke-width="6"/>
  `),
  zinnia: () => object(`
    <rect x="-6" y="0" width="12" height="100" fill="#22c55e"/>
    <ellipse cx="0" cy="-30" rx="18" ry="35" fill="#ec4899" transform="rotate(0)"/>
    <ellipse cx="0" cy="-30" rx="18" ry="35" fill="#f472b6" transform="rotate(45)"/>
    <ellipse cx="0" cy="-30" rx="18" ry="35" fill="#ec4899" transform="rotate(90)"/>
    <ellipse cx="0" cy="-30" rx="18" ry="35" fill="#f472b6" transform="rotate(135)"/>
    <circle cx="0" cy="-30" r="15" fill="#fbbf24"/>
  `),
  zodiaque: () => object(`
    <circle cx="0" cy="0" r="100" fill="#1e1b4b" stroke="#fbbf24" stroke-width="5"/>
    <circle cx="0" cy="-70" r="12" fill="#fbbf24"/>
    <circle cx="60" cy="-35" r="12" fill="#fbbf24"/>
    <circle cx="60" cy="35" r="12" fill="#fbbf24"/>
    <circle cx="0" cy="70" r="12" fill="#fbbf24"/>
    <circle cx="-60" cy="35" r="12" fill="#fbbf24"/>
    <circle cx="-60" cy="-35" r="12" fill="#fbbf24"/>
    <line x1="0" y1="-70" x2="60" y2="-35" stroke="#fbbf24" stroke-width="2" opacity=".5"/>
    <line x1="60" y1="-35" x2="60" y2="35" stroke="#fbbf24" stroke-width="2" opacity=".5"/>
    <text x="0" y="8" text-anchor="middle" font-family="Arial" font-size="22" fill="#fde68a">♈♉♊</text>
  `),
  zinc: () => object(`
    <rect x="-100" y="-50" width="200" height="100" rx="6" fill="#94a3b8" stroke="#64748b" stroke-width="4"/>
    <line x1="-70" y1="-30" x2="70" y2="30" stroke="#cbd5e1" stroke-width="3" opacity=".6"/>
    <line x1="-70" y1="0" x2="70" y2="0" stroke="#cbd5e1" stroke-width="2" opacity=".4"/>
    <line x1="-70" y1="30" x2="70" y2="-30" stroke="#cbd5e1" stroke-width="3" opacity=".6"/>
  `),
  zombie: () => object(`
    <circle cx="0" cy="-50" r="45" fill="#86efac" stroke="#22c55e" stroke-width="4"/>
    <circle cx="-15" cy="-58" r="12" fill="#fff"/><circle cx="-15" cy="-58" r="6" fill="#1a1a1a"/>
    <circle cx="20" cy="-55" r="14" fill="#fff"/><circle cx="22" cy="-55" r="7" fill="#1a1a1a"/>
    <rect x="-40" y="0" width="80" height="90" rx="12" fill="#6b7280" stroke="#374151" stroke-width="3"/>
    <path d="M-50,20 L-80,60 M50,20 L80,60" stroke="#86efac" stroke-width="10" stroke-linecap="round"/>
    <path d="M-20,80 L-30,120 M20,80 L30,120" stroke="#4b5563" stroke-width="12" stroke-linecap="round"/>
  `),
  zorro: () => object(`
    <circle cx="0" cy="-50" r="42" fill="#fcd9b6"/>
    <rect x="-55" y="-65" width="110" height="20" rx="4" fill="#1a1a1a"/>
    <rect x="-40" y="-55" width="80" height="12" fill="#1a1a1a"/>
    <ellipse cx="0" cy="-45" rx="35" ry="10" fill="#1a1a1a"/>
    <rect x="-35" y="0" width="70" height="85" rx="10" fill="#1a1a1a"/>
    <path d="M40,30 L120,10" stroke="#94a3b8" stroke-width="5"/>
    <text x="0" y="50" text-anchor="middle" font-family="Arial" font-size="36" font-weight="900" fill="#fff">Z</text>
  `),
  blizzard: () => object(`
    <rect x="-180" y="40" width="360" height="80" fill="#f1f5f9"/>
    <path d="M-150,30 Q0,0 150,30" fill="#e2e8f0"/>
    <circle cx="-100" cy="-20" r="6" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="-40" cy="-50" r="8" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="30" cy="-30" r="6" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="90" cy="-60" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="120" cy="-10" r="5" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
    <path d="M-120,-40 L-100,-80 M-35,-55 L-15,-95 M85,-65 L105,-105" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  `),
  gazouillis: () => animal(`
    <ellipse cx="0" cy="20" rx="35" ry="28" fill="#38bdf8"/>
    <circle cx="-15" cy="10" r="20" fill="#38bdf8"/>
    <circle cx="-25" cy="5" r="6" fill="#1a1a1a"/>
    <path d="M-32,12 L-42,14 L-34,16 Z" fill="#f59e0b"/>
    <path d="M25,5 L45,-15 L40,10 Z" fill="#0ea5e9"/>
    <rect x="-8" y="40" width="5" height="20" fill="#f59e0b"/>
    <rect x="5" y="40" width="5" height="20" fill="#f59e0b"/>
    <path d="M40,-30 Q60,-50 80,-30" fill="none" stroke="#64748b" stroke-width="3"/>
    <text x="55" y="-40" font-family="Arial" font-size="20" fill="#64748b">♪</text>
  `),
  horizon: () => object(`
    <rect x="-180" y="10" width="360" height="90" fill="#4ade80"/>
    <path d="M-180,10 Q-60,-30 60,10 Q120,30 180,10" fill="#22c55e"/>
    <circle cx="60" cy="-40" r="45" fill="#fbbf24"/>
    <path d="M-180,-80 L-180,10 L180,10 L180,-40 Q100,-70 0,-50 Q-100,-70 -180,-40 Z" fill="#fdba74" opacity=".6"/>
    <path d="M-180,10 L180,10" stroke="#16a34a" stroke-width="3"/>
  `),
  buzz: () => animal(`
    <ellipse cx="0" cy="10" rx="40" ry="30" fill="#fbbf24" stroke="#f59e0b" stroke-width="3"/>
    <ellipse cx="0" cy="5" rx="28" ry="22" fill="#1a1a1a" opacity=".15"/>
    <ellipse cx="-25" cy="-15" rx="22" ry="18" fill="#fff" opacity=".6"/>
    <ellipse cx="25" cy="-15" rx="22" ry="18" fill="#fff" opacity=".6"/>
    <circle cx="-8" cy="5" r="6" fill="#1a1a1a"/>
    <circle cx="12" cy="5" r="6" fill="#1a1a1a"/>
    <path d="M-50,-5 L-75,0 M50,-5 L75,0" stroke="#fde68a" stroke-width="6" stroke-linecap="round" opacity=".8"/>
    <path d="M-30,-40 Q0,-55 30,-40" fill="none" stroke="#64748b" stroke-width="2"/>
    <text x="55" y="-45" font-family="Arial" font-size="22" fill="#64748b">buzz</text>
  `),
};

/** filename → draw key */
const FILES = [
  // W 1-25 + bonus
  ["wapiti", "wapiti"], ["wombat", "wombat"], ["walrus", "walrus"], ["wallaby", "wallaby"],
  ["wok", "wok"], ["wifi", "wifi"], ["week-end", "week-end"], ["western", "western"],
  ["water-polo", "water-polo"], ["windsurf", "windsurf"], ["wakeboard", "wakeboard"],
  ["walkman", "walkman"], ["webcam", "webcam"], ["wigwam", "wigwam"], ["wagonnet", "wagonnet"],
  ["sandwich", "sandwich"], ["cow-boy", "cow-boy"], ["sweat", "sweat"], ["bungalow", "bungalow"],
  ["hawaï", "hawai"], ["edelweiss", "edelweiss"], ["wasabi", "wasabi"],
  ["bowling", "bowling"], ["clown", "clown"],
  // X 1-21, 30
  ["boxe", "boxe"], ["lynx", "lynx"], ["sphinx", "sphinx"], ["noix", "noix"], ["houx", "houx"],
  ["perdrix", "perdrix"], ["oryx", "oryx"], ["axe", "axe"], ["mixeur", "mixeur"], ["klaxon", "klaxon"],
  ["six", "six"], ["dix", "dix"], ["deux", "deux"], ["paix", "paix"], ["croix", "croix"],
  ["tyrannosaure", "tyrannosaure"],
  // Y 1-30 (skip existing in lecture)
  ["yak", "yak"], ["yacht", "yacht"], ["yeux", "yeux"], ["poney", "poney"],
  ["cyclone", "cyclone"], ["cycle", "cycle"], ["gymnase", "gymnase"], ["joyau", "joyau"],
  ["noyau", "noyau"], ["coyote", "coyote"], ["hyène", "hyène"], ["rayon", "rayon"],
  ["tuyau", "tuyau"], ["foyer", "foyer"], ["voyage", "voyage"], ["labyrinthe", "labyrinthe"],
  // Z
  ["gazelle", "gazelle"], ["zone", "zone"], ["zéro", "zéro"], ["gazon", "gazon"], ["gaz", "gaz"],
  ["bronze", "bronze"], ["trapèze", "trapeze"], ["quetzal", "quetzal"], ["bulldozer", "bulldozer"],
  ["jazz", "jazz"], ["zeste", "zeste"], ["zinnia", "zinnia"], ["zodiaque", "zodiaque"],
  ["zinc", "zinc"], ["zombie", "zombie"], ["zorro", "zorro"], ["blizzard", "blizzard"],
  ["gazouillis", "gazouillis"], ["horizon", "horizon"], ["buzz", "buzz"],
];

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  let created = 0;
  let skipped = 0;
  for (const [filename, key] of FILES) {
    if (existsInLecture(filename)) {
      console.log(`skip (lecture): ${filename}`);
      skipped++;
      continue;
    }
    const draw = DRAW[key];
    if (!draw) {
      console.warn(`no draw: ${filename} (${key})`);
      continue;
    }
    const dest = path.join(OUT, `${filename}.webp`);
    if (fs.existsSync(dest)) {
      console.log(`skip (exists): ${filename}`);
      skipped++;
      continue;
    }
    const svg = draw();
    await sharp(Buffer.from(svg))
      .resize(W, H, { fit: "contain", background: "#ffffff" })
      .webp({ quality: 90 })
      .toFile(dest);
    console.log(`→ ${path.relative(process.cwd(), dest)}`);
    created++;
  }
  console.log(`Done: ${created} created, ${skipped} skipped`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
