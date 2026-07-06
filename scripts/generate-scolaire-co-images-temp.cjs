/**
 * Illustrations manga CO scolaire (exercices 1–9) → public/assets/expression/images-temp/
 * Objets : fond blanc. Situations : décor coloré.
 * Usage: node scripts/generate-scolaire-co-images-temp.cjs
 */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const outDir = path.join(process.cwd(), "public/assets/expression/images-temp");

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
    <ellipse cx="${x - 20}" cy="${y + 98}" rx="7" ry="11" fill="#263238"/>
    <ellipse cx="${x + 24}" cy="${y + 98}" rx="7" ry="11" fill="#263238"/>
    <path d="M${x - 18} ${y + 128} Q${x + 4} ${y + 145} ${x + 28} ${y + 126}" fill="none" stroke="#a64b5d" stroke-width="4" stroke-linecap="round"/>
  `;
}

function objectScene(slug, seed) {
  switch (slug) {
    case "piano":
      return `<rect x="220" y="180" width="360" height="260" rx="12" fill="#1f2937" stroke="#40313a" stroke-width="8"/><rect x="250" y="420" width="300" height="55" rx="8" fill="#92400e"/><rect x="260" y="200" width="280" height="28" fill="#f8fafc"/>`;
    case "guitare":
      return `<ellipse cx="400" cy="360" rx="120" ry="145" fill="#d97706" stroke="#40313a" stroke-width="8"/><rect x="385" y="120" width="30" height="250" rx="10" fill="#78350f"/><circle cx="400" cy="360" r="42" fill="#111827"/>`;
    case "violon":
      return `<ellipse cx="400" cy="330" rx="95" ry="130" fill="#b45309" stroke="#40313a" stroke-width="7"/><path d="M400 200 L400 120" stroke="#40313a" stroke-width="10"/><path d="M360 420 Q400 470 440 420" fill="none" stroke="#40313a" stroke-width="8"/>`;
    case "ballon":
      return `<circle cx="400" cy="310" r="150" fill="#f8fafc" stroke="#111827" stroke-width="10"/><path d="M400 460 L400 520 M370 520 H430" stroke="#40313a" stroke-width="8" stroke-linecap="round"/><path d="M250 250 Q400 120 550 250" fill="none" stroke="#111827" stroke-width="6"/>`;
    case "eau":
      return `<rect x="310" y="160" width="180" height="320" rx="40" fill="#bae6fd" stroke="#0369a1" stroke-width="8"/><rect x="350" y="120" width="100" height="60" rx="20" fill="#0ea5e9" stroke="#0369a1" stroke-width="6"/>`;
    case "casquette":
      return `<ellipse cx="400" cy="360" rx="170" ry="45" fill="#1d4ed8" stroke="#40313a" stroke-width="7"/><path d="M280 360 Q400 180 520 360 Z" fill="#2563eb" stroke="#40313a" stroke-width="7"/>`;
    case "glace":
      return `<path d="M360 420 L400 160 L440 420 Z" fill="#f9a8d4" stroke="#40313a" stroke-width="7"/><circle cx="400" cy="150" r="55" fill="#fda4af" stroke="#40313a" stroke-width="6"/>`;
    case "pizza":
      return `<path d="M400 140 L560 430 H240 Z" fill="#fbbf24" stroke="#40313a" stroke-width="8"/><circle cx="350" cy="320" r="22" fill="#ef4444"/><circle cx="430" cy="290" r="18" fill="#ef4444"/><circle cx="460" cy="360" r="20" fill="#ef4444"/>`;
    case "sandwich":
      return `<rect x="250" y="220" width="300" height="200" rx="35" fill="#fde68a" stroke="#40313a" stroke-width="8"/><rect x="270" y="250" width="260" height="30" rx="8" fill="#84cc16"/><rect x="270" y="300" width="260" height="30" rx="8" fill="#f87171"/>`;
    case "gateau":
      return `<rect x="260" y="280" width="280" height="160" rx="20" fill="#fbbf24" stroke="#40313a" stroke-width="7"/><circle cx="330" cy="340" r="18" fill="#ef4444"/><circle cx="400" cy="320" r="20" fill="#f472b6"/><circle cx="470" cy="345" r="16" fill="#22c55e"/>`;
    case "frere":
    case "soeur":
    case "cousin":
    case "pere":
    case "mere":
    case "cousine":
      return person(400, 120, color(seed, 1), color(seed, 3), slug === "pere" ? 1 : 0);
    case "volleyball":
      return `<circle cx="400" cy="280" r="95" fill="#f8fafc" stroke="#1d4ed8" stroke-width="8"/><path d="M320 200 Q400 120 480 200" fill="none" stroke="#1d4ed8" stroke-width="5"/>`;
    case "basketball":
      return `<circle cx="400" cy="300" r="110" fill="#f97316" stroke="#7c2d12" stroke-width="8"/><path d="M290 220 Q400 360 510 220 M290 380 Q400 240 510 380" fill="none" stroke="#111827" stroke-width="5"/>`;
    case "baskets":
      return `<ellipse cx="340" cy="360" rx="70" ry="40" fill="#2563eb" stroke="#40313a" stroke-width="6"/><ellipse cx="460" cy="360" rx="70" ry="40" fill="#facc15" stroke="#40313a" stroke-width="6"/>`;
    case "pates":
      return `<ellipse cx="400" cy="330" rx="180" ry="90" fill="#fde68a" stroke="#40313a" stroke-width="7"/><path d="M250 300 Q320 250 400 290 T550 300" fill="none" stroke="#f59e0b" stroke-width="10" stroke-linecap="round"/>`;
    case "bottes":
      return `<path d="M300 420 H500 M310 420 V280 Q330 220 360 220 H440 Q470 220 490 280 V420" fill="#1e3a8a" stroke="#40313a" stroke-width="7"/><rect x="300" y="360" width="90" height="60" rx="10" fill="#f8fafc" stroke="#40313a" stroke-width="5"/>`;
    case "creme-solaire":
      return `<rect x="330" y="180" width="140" height="260" rx="35" fill="#fff7ed" stroke="#40313a" stroke-width="7"/><rect x="350" y="140" width="100" height="50" rx="15" fill="#fb923c"/><circle cx="400" cy="300" r="35" fill="#facc15"/>`;
    case "parapluie":
      return `<path d="M220 320 Q400 120 580 320" fill="#facc15" stroke="#40313a" stroke-width="7"/><path d="M400 320 V480" stroke="#92400e" stroke-width="10" stroke-linecap="round"/>`;
    case "livre":
      return `<rect x="280" y="180" width="240" height="300" rx="12" fill="#dc2626" stroke="#40313a" stroke-width="7"/><path d="M400 180 V480" stroke="#fef3c7" stroke-width="4"/>`;
    case "television":
      return `<rect x="220" y="200" width="360" height="220" rx="20" fill="#111827" stroke="#40313a" stroke-width="8"/><rect x="250" y="230" width="300" height="160" fill="#60a5fa"/><rect x="360" y="430" width="80" height="20" fill="#64748b"/>`;
    case "train":
      return `<rect x="140" y="250" width="520" height="140" rx="30" fill="#3b82f6" stroke="#40313a" stroke-width="8"/><rect x="200" y="280" width="90" height="60" rx="8" fill="#dbeafe"/><circle cx="260" cy="410" r="30" fill="#111827"/><circle cx="540" cy="410" r="30" fill="#111827"/>`;
    case "voiture":
      return `<rect x="200" y="300" width="400" height="110" rx="40" fill="#ef4444" stroke="#40313a" stroke-width="8"/><circle cx="290" cy="410" r="40" fill="#111827"/><circle cx="510" cy="410" r="40" fill="#111827"/><rect x="280" y="250" width="240" height="70" rx="20" fill="#93c5fd"/>`;
    case "cadeau":
      return `<rect x="280" y="250" width="240" height="180" rx="12" fill="#22c55e" stroke="#40313a" stroke-width="7"/><rect x="390" y="250" width="20" height="180" fill="#ef4444"/><path d="M280 310 H520" stroke="#ef4444" stroke-width="16"/>`;
    case "saxophone":
      return `<path d="M280 420 Q320 300 360 220 Q400 160 440 220 Q480 300 520 420" fill="#d97706" stroke="#40313a" stroke-width="8"/><ellipse cx="360" cy="200" rx="45" ry="30" fill="#fbbf24" stroke="#40313a" stroke-width="6"/>`;
    case "cahier":
      return `<rect x="280" y="170" width="240" height="300" rx="8" fill="#2563eb" stroke="#40313a" stroke-width="7"/><path d="M320 170 V470 M360 170 V470 M400 170 V470" stroke="#fff" stroke-width="3" opacity=".5"/>`;
    case "regle":
      return `<rect x="220" y="280" width="360" height="50" rx="6" fill="#22c55e" stroke="#40313a" stroke-width="6"/><text x="400" y="315" font-family="Arial" font-size="28" text-anchor="middle" fill="#fff">cm</text>`;
    case "geographie":
      return `<circle cx="400" cy="300" r="130" fill="#38bdf8" stroke="#40313a" stroke-width="7"/><path d="M250 320 Q320 220 400 280 T550 320 Q480 380 400 350 T250 320" fill="#22c55e"/>`;
    case "francais":
      return `<rect x="280" y="200" width="240" height="280" rx="12" fill="#fef3c7" stroke="#40313a" stroke-width="7"/><text x="400" y="360" font-family="serif" font-size="96" font-weight="700" text-anchor="middle" fill="#dc2626">é</text>`;
    case "mathematiques":
      return `<rect x="260" y="220" width="280" height="200" rx="16" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><text x="400" y="340" font-family="Arial" font-size="72" font-weight="700" text-anchor="middle" fill="#2563eb">2+2</text>`;
    case "dessin":
      return `<rect x="300" y="250" width="200" height="160" rx="8" fill="#fff7ed" stroke="#40313a" stroke-width="6"/><circle cx="360" cy="310" r="25" fill="#ef4444"/><path d="M420 280 L480 340" stroke="#111827" stroke-width="8" stroke-linecap="round"/>`;
    case "salade":
      return `<ellipse cx="400" cy="340" rx="150" ry="90" fill="#86efac" stroke="#40313a" stroke-width="7"/><circle cx="350" cy="310" r="22" fill="#ef4444"/><circle cx="430" cy="300" r="18" fill="#f97316"/>`;
    case "anglais":
      return `<rect x="260" y="200" width="280" height="220" rx="16" fill="#1d4ed8" stroke="#40313a" stroke-width="7"/><text x="400" y="340" font-family="Arial" font-size="88" font-weight="700" text-anchor="middle" fill="#fff">EN</text>`;
    case "appareil-photo":
      return `<rect x="300" y="240" width="200" height="150" rx="24" fill="#1f2937" stroke="#40313a" stroke-width="7"/><circle cx="400" cy="315" r="52" fill="#374151" stroke="#94a3b8" stroke-width="8"/><circle cx="400" cy="315" r="28" fill="#60a5fa"/><rect x="360" y="210" width="80" height="40" rx="10" fill="#111827"/>`;
    case "musee":
      return `<rect x="220" y="220" width="360" height="200" rx="12" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><rect x="260" y="260" width="90" height="110" fill="#bae6fd"/><rect x="370" y="260" width="90" height="110" fill="#fde68a"/><rect x="480" y="260" width="60" height="110" fill="#fca5a5"/>`;
    case "bateau":
      return `<path d="M180 380 H620 L560 280 H240 Z" fill="#2563eb" stroke="#40313a" stroke-width="7"/><rect x="340" y="220" width="120" height="70" rx="8" fill="#f8fafc" stroke="#40313a" stroke-width="5"/><path d="M400 220 V180" stroke="#92400e" stroke-width="8"/>`;
    case "billet":
      return `<rect x="260" y="220" width="280" height="160" rx="16" fill="#fef3c7" stroke="#40313a" stroke-width="7"/><path d="M320 220 V380 M480 220 V380" stroke="#94a3b8" stroke-width="4" stroke-dasharray="8 6"/><text x="400" y="310" font-family="Arial" font-size="42" font-weight="700" text-anchor="middle" fill="#2563eb">SNCF</text>`;
    case "magazines":
      return `<rect x="280" y="200" width="90" height="120" rx="6" fill="#ef4444" stroke="#40313a" stroke-width="5"/><rect x="355" y="190" width="90" height="130" rx="6" fill="#2563eb" stroke="#40313a" stroke-width="5"/><rect x="430" y="205" width="90" height="115" rx="6" fill="#22c55e" stroke="#40313a" stroke-width="5"/>`;
    case "chocolat":
      return `<rect x="300" y="250" width="200" height="120" rx="12" fill="#78350f" stroke="#40313a" stroke-width="7"/><path d="M310 250 H490" stroke="#fbbf24" stroke-width="4"/><rect x="330" y="270" width="160" height="8" fill="#92400e"/>`;
    case "biscuit":
      return `<circle cx="400" cy="310" r="90" fill="#d97706" stroke="#40313a" stroke-width="7"/><circle cx="360" cy="280" r="10" fill="#92400e"/><circle cx="430" cy="290" r="10" fill="#92400e"/><circle cx="400" cy="340" r="10" fill="#92400e"/>`;
    case "manteau":
      return `<path d="M280 220 L400 170 L520 220 V430 H280 Z" fill="#dc2626" stroke="#40313a" stroke-width="7"/><path d="M320 220 V430 M480 220 V430" stroke="#991b1b" stroke-width="5"/><rect x="360" y="200" width="80" height="40" rx="12" fill="#7f1d1d"/>`;
    case "sac-a-dos":
      return `<rect x="300" y="220" width="200" height="240" rx="30" fill="#7f1d1d" stroke="#40313a" stroke-width="7"/><path d="M340 220 Q400 160 460 220" fill="none" stroke="#92400e" stroke-width="10"/><rect x="350" y="300" width="100" height="60" rx="8" fill="#991b1b"/><rect x="330" y="380" width="140" height="20" rx="6" fill="#92400e"/>`;
    case "programme":
      return `<rect x="280" y="180" width="240" height="300" rx="12" fill="#f97316" stroke="#40313a" stroke-width="7"/><circle cx="400" cy="300" r="70" fill="#facc15"/><text x="400" y="315" font-family="Arial" font-size="28" font-weight="700" text-anchor="middle" fill="#fff">PROGRAMME</text>`;
    case "girafe":
      return `<ellipse cx="400" cy="360" rx="70" ry="50" fill="#fbbf24" stroke="#40313a" stroke-width="6"/><rect x="385" y="180" width="30" height="180" rx="12" fill="#fbbf24" stroke="#40313a" stroke-width="5"/><circle cx="400" cy="170" r="35" fill="#fbbf24" stroke="#40313a" stroke-width="5"/><circle cx="385" cy="155" r="8" fill="#92400e"/><circle cx="415" cy="155" r="8" fill="#92400e"/>`;
    case "tigre":
      return `<ellipse cx="400" cy="340" rx="110" ry="80" fill="#f97316" stroke="#40313a" stroke-width="7"/><circle cx="400" cy="220" r="55" fill="#f97316" stroke="#40313a" stroke-width="6"/><path d="M330 300 H470 M350 260 H450 M340 380 H460" stroke="#111827" stroke-width="6" stroke-linecap="round"/><circle cx="380" cy="210" r="8" fill="#111827"/><circle cx="420" cy="210" r="8" fill="#111827"/>`;
    case "vache":
      return `<ellipse cx="400" cy="340" rx="120" ry="80" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><circle cx="400" cy="230" r="50" fill="#f8fafc" stroke="#40313a" stroke-width="6"/><ellipse cx="350" cy="310" rx="25" ry="18" fill="#111827"/><ellipse cx="450" cy="320" rx="22" ry="16" fill="#111827"/><circle cx="380" cy="220" r="6" fill="#111827"/><circle cx="420" cy="220" r="6" fill="#111827"/>`;
    case "t-shirt":
      return `<path d="M300 240 L360 200 H440 L500 240 V430 H300 Z" fill="#7c3aed" stroke="#40313a" stroke-width="7"/><path d="M300 240 L250 300 H290 L320 260 M500 240 L550 300 H510 L480 260" fill="#7c3aed" stroke="#40313a" stroke-width="6"/>`;
    case "bouquet":
      return `<circle cx="350" cy="280" r="28" fill="#ef4444"/><circle cx="400" cy="250" r="32" fill="#f472b6"/><circle cx="450" cy="285" r="26" fill="#facc15"/><circle cx="380" cy="320" r="22" fill="#a855f7"/><rect x="385" y="340" width="30" height="120" rx="8" fill="#22c55e" stroke="#40313a" stroke-width="5"/>`;
    case "jus-d-orange":
      return `<rect x="310" y="160" width="180" height="320" rx="40" fill="#f97316" stroke="#c2410c" stroke-width="7" opacity=".85"/><rect x="350" y="120" width="100" height="60" rx="20" fill="#fb923c"/><ellipse cx="400" cy="300" rx="60" ry="100" fill="#fdba74" opacity=".6"/>`;
    case "bol-cereales":
      return `<ellipse cx="400" cy="360" rx="140" ry="50" fill="#e2e8f0" stroke="#40313a" stroke-width="7"/><ellipse cx="400" cy="320" rx="120" ry="80" fill="#fde68a" stroke="#40313a" stroke-width="6"/><circle cx="360" cy="300" r="16" fill="#ef4444"/><circle cx="420" cy="290" r="14" fill="#2563eb"/><circle cx="450" cy="310" r="12" fill="#ef4444"/>`;
    case "tartine-confiture":
      return `<rect x="280" y="280" width="240" height="140" rx="20" fill="#d97706" stroke="#40313a" stroke-width="7"/><path d="M300 300 H500 M310 330 H490 M300 360 H480" stroke="#991b1b" stroke-width="18" stroke-linecap="round"/>`;
    case "fraises":
      return `<ellipse cx="340" cy="310" rx="55" ry="45" fill="#ef4444" stroke="#40313a" stroke-width="5"/><ellipse cx="430" cy="300" rx="50" ry="40" fill="#dc2626" stroke="#40313a" stroke-width="5"/><circle cx="370" cy="280" r="14" fill="#ef4444"/><circle cx="450" cy="275" r="12" fill="#dc2626"/><path d="M340 265 Q350 230 360 265 M430 260 Q440 225 450 260" fill="#22c55e"/>`;
    case "peches":
      return `<circle cx="340" cy="300" r="55" fill="#fdba74" stroke="#40313a" stroke-width="6"/><circle cx="460" cy="310" r="50" fill="#fb923c" stroke="#40313a" stroke-width="6"/><path d="M310 270 Q300 230 330 250 M430 270 Q420 230 450 245" fill="#22c55e" stroke="#15803d" stroke-width="4"/>`;
    case "pommes-poires":
      return `<circle cx="330" cy="300" r="48" fill="#ef4444" stroke="#40313a" stroke-width="6"/><circle cx="420" cy="290" r="44" fill="#ef4444" stroke="#40313a" stroke-width="6"/><ellipse cx="500" cy="310" rx="40" ry="52" fill="#84cc16" stroke="#40313a" stroke-width="6"/>`;
    case "espagnol":
      return `<rect x="260" y="200" width="280" height="220" rx="16" fill="#dc2626" stroke="#40313a" stroke-width="7"/><rect x="260" y="310" width="280" height="55" fill="#facc15"/><text x="400" y="330" font-family="Arial" font-size="72" font-weight="700" text-anchor="middle" fill="#1d4ed8">ES</text>`;
    case "italien":
      return `<rect x="260" y="200" width="93" height="220" fill="#22c55e"/><rect x="353" y="200" width="94" height="220" fill="#f8fafc" stroke="#40313a" stroke-width="2"/><rect x="447" y="200" width="93" height="220" fill="#ef4444"/><text x="400" y="330" font-family="Arial" font-size="56" font-weight="700" text-anchor="middle" fill="#1f2937">IT</text>`;
    case "allemand":
      return `<rect x="260" y="200" width="280" height="73" fill="#111827"/><rect x="260" y="273" width="280" height="74" fill="#dc2626"/><rect x="260" y="347" width="280" height="73" fill="#facc15"/><text x="400" y="330" font-family="Arial" font-size="56" font-weight="700" text-anchor="middle" fill="#fff">DE</text>`;
    case "chinois":
      return `<rect x="260" y="200" width="280" height="220" rx="16" fill="#dc2626" stroke="#40313a" stroke-width="7"/><text x="400" y="330" font-family="Arial" font-size="72" font-weight="700" text-anchor="middle" fill="#facc15">中</text>`;
    case "japonais":
      return `<rect x="280" y="220" width="240" height="180" rx="12" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><circle cx="400" cy="310" r="55" fill="#dc2626"/>`;
    default:
      return `<circle cx="400" cy="300" r="120" fill="${color(seed, 2)}" opacity=".5"/>`;
  }
}

function situationScene(slug, seed) {
  switch (slug) {
    case "cinema":
      return `${person(180, 110, color(seed, 2), "#5b341d", 0)}<rect x="300" y="150" width="380" height="220" rx="20" fill="#111827"/><rect x="330" y="180" width="320" height="160" fill="#60a5fa"/>`;
    case "concert":
      return `<rect x="120" y="380" width="560" height="120" rx="20" fill="#312e81"/><circle cx="280" cy="200" r="40" fill="#facc15"/><circle cx="400" cy="170" r="50" fill="#f472b6"/><circle cx="520" cy="200" r="40" fill="#38bdf8"/>${person(400, 90, color(seed, 4), "#7c2d12", 2)}`;
    case "football":
      return `<ellipse cx="400" cy="430" rx="280" ry="70" fill="#22c55e"/><circle cx="400" cy="300" r="55" fill="#f8fafc" stroke="#111827" stroke-width="6"/>${person(250, 120, color(seed, 1), "#4b2e1f", 0)}${person(550, 130, color(seed, 3), "#b45309", 1)}`;
    case "magasins":
      return `<rect x="100" y="140" width="600" height="280" rx="30" fill="#fef3c7" stroke="#40313a" stroke-width="7"/>${Array.from({ length: 6 }, (_, i) => `<rect x="${150 + i * 90}" y="200" width="60" height="140" rx="10" fill="${color(seed, i)}"/>`).join("")}${person(200, 100, color(seed, 2), "#5b341d", 0)}`;
    case "restaurant":
      return `<rect x="150" y="180" width="500" height="220" rx="25" fill="#fff7ed" stroke="#40313a" stroke-width="7"/><circle cx="320" cy="290" r="50" fill="#f87171"/><circle cx="480" cy="290" r="55" fill="#fbbf24"/>${person(620, 110, color(seed, 1), "#7c2d12", 1)}`;
    case "sport-au-parc":
      return `<ellipse cx="400" cy="450" rx="300" ry="80" fill="#86efac"/><rect x="180" y="250" width="40" height="180" fill="#854d0e"/><circle cx="200" cy="230" r="70" fill="#22c55e" opacity=".7"/>${person(420, 110, color(seed, 2), "#5b341d", 2)}`;
    case "se-reposer":
      return `<rect x="180" y="320" width="440" height="90" rx="20" fill="#38bdf8" opacity=".35"/>${person(400, 180, color(seed, 1), "#4b2e1f", 0)}`;
    case "gouter":
      return `<rect x="250" y="350" width="300" height="30" rx="10" fill="#92400e"/><circle cx="330" cy="310" r="35" fill="#fbbf24"/><circle cx="470" cy="300" r="40" fill="#fb923c"/>${person(400, 100, color(seed, 3), "#b45309", 1)}`;
    case "bus":
      return `<rect x="120" y="220" width="560" height="170" rx="40" fill="#facc15" stroke="#40313a" stroke-width="8"/><circle cx="240" cy="400" r="35" fill="#1f2937"/><circle cx="560" cy="400" r="35" fill="#1f2937"/>`;
    case "cours":
      return `<rect x="120" y="140" width="560" height="300" rx="25" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><rect x="180" y="190" width="200" height="120" fill="#dbeafe"/>${person(500, 100, color(seed, 2), "#5b341d", 0)}`;
    case "metro":
      return `<rect x="100" y="280" width="600" height="120" rx="20" fill="#94a3b8"/><rect x="180" y="200" width="440" height="90" rx="30" fill="#ef4444" stroke="#40313a" stroke-width="6"/><text x="400" y="260" font-family="Arial" font-size="42" font-weight="700" text-anchor="middle" fill="#fff">M</text>`;
    case "apprentissage":
      return `<rect x="220" y="200" width="360" height="240" rx="20" fill="#fef3c7" stroke="#40313a" stroke-width="6"/><path d="M260 260 H540 M260 310 H500 M260 360 H520" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>${person(400, 80, color(seed, 1), "#4b2e1f", 0)}`;
    case "couloir":
      return `<rect x="280" y="120" width="240" height="380" fill="#e2e8f0"/><rect x="320" y="160" width="80" height="120" fill="#bfdbfe"/><rect x="420" y="160" width="80" height="120" fill="#bbf7d0"/>`;
    case "maison":
      return `<path d="M400 120 L580 260 V430 H220 V260 Z" fill="#fde68a" stroke="#40313a" stroke-width="8"/><rect x="350" y="320" width="100" height="110" fill="#92400e"/>`;
    case "campagne":
      return `<ellipse cx="400" cy="470" rx="320" ry="70" fill="#86efac"/><rect x="300" y="220" width="200" height="150" rx="10" fill="#fef3c7" stroke="#40313a" stroke-width="6"/><path d="M400 220 L470 280 H330 Z" fill="#dc2626"/>`;
    case "mer":
      return `<rect x="0" y="320" width="800" height="280" fill="#38bdf8"/><path d="M0 360 Q200 300 400 360 T800 360 V600 H0Z" fill="#0ea5e9"/><rect x="280" y="240" width="240" height="120" rx="8" fill="#fff7ed" stroke="#40313a" stroke-width="6"/>`;
    case "montagne":
      return `<path d="M120 450 L280 180 L400 320 L520 150 L680 450 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="6"/><rect x="330" y="300" width="140" height="110" fill="#92400e" stroke="#40313a" stroke-width="5"/><ellipse cx="400" cy="470" rx="280" ry="50" fill="#fff" opacity=".8"/>`;
    case "promenade":
      return `<ellipse cx="400" cy="460" rx="300" ry="60" fill="#bbf7d0"/>${person(400, 150, color(seed, 2), "#5b341d", 1)}<circle cx="180" cy="250" r="50" fill="#22c55e" opacity=".6"/>`;
    case "prof-dessin":
      return `${person(300, 110, color(seed, 1), "#7c2d12", 0)}<rect x="430" y="220" width="220" height="160" rx="12" fill="#fff7ed" stroke="#40313a" stroke-width="6"/><path d="M460 300 Q520 240 580 320" fill="none" stroke="#dc2626" stroke-width="8" stroke-linecap="round"/>`;
    case "directrice":
      return `${person(400, 100, color(seed, 3), "#4b2e1f", 2)}<rect x="250" y="360" width="300" height="120" rx="15" fill="#f8fafc" stroke="#40313a" stroke-width="6"/>`;
    case "secretaire":
      return `${person(350, 110, color(seed, 2), "#b45309", 1)}<rect x="480" y="280" width="180" height="100" rx="10" fill="#e2e8f0" stroke="#40313a" stroke-width="5"/><rect x="500" y="300" width="140" height="20" fill="#94a3b8"/>`;
    case "malade":
      return `${person(400, 140, color(seed, 1), "#5b341d", 0)}<rect x="320" y="360" width="160" height="90" rx="20" fill="#fecaca" stroke="#ef4444" stroke-width="5"/><text x="400" y="420" font-family="Arial" font-size="48" text-anchor="middle" fill="#ef4444">+</text>`;
    case "absente":
      return `<rect x="150" y="160" width="500" height="280" rx="25" fill="#f1f5f9" stroke="#40313a" stroke-width="7"/><text x="400" y="320" font-family="Arial" font-size="72" font-weight="700" text-anchor="middle" fill="#94a3b8">?</text>`;
    case "vacances":
      return `<circle cx="620" cy="160" r="70" fill="#facc15"/><path d="M100 380 Q250 300 400 360 T700 340" fill="#38bdf8" opacity=".5"/>${person(380, 120, color(seed, 4), "#d97706", 2)}`;
    case "cours-sport":
      return `<ellipse cx="400" cy="450" rx="280" ry="70" fill="#22c55e"/>${person(300, 130, color(seed, 1), "#4b2e1f", 0)}${person(500, 140, color(seed, 3), "#b45309", 1)}<circle cx="400" cy="300" r="40" fill="#f97316"/>`;
    case "piscine":
      return `<rect x="160" y="260" width="480" height="180" rx="20" fill="#38bdf8" stroke="#0369a1" stroke-width="8"/><path d="M200 320 Q280 280 360 320 T520 320" fill="none" stroke="#fff" stroke-width="6" opacity=".6"/>`;
    case "bibliotheque":
      return `<rect x="180" y="150" width="440" height="320" rx="20" fill="#92400e" stroke="#40313a" stroke-width="7"/>${Array.from({ length: 5 }, (_, i) => `<rect x="${220 + i * 70}" y="190" width="40" height="220" fill="#fef3c7"/>`).join("")}`;
    case "ecole":
      return `<rect x="220" y="200" width="360" height="220" rx="12" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><path d="M400 120 L580 200 H220 Z" fill="#dc2626"/><rect x="350" y="280" width="100" height="140" fill="#64748b"/>`;
    case "hopital":
      return `<rect x="200" y="180" width="400" height="260" rx="20" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><rect x="360" y="230" width="80" height="80" fill="#ef4444"/><path d="M380 250 H420 M400 230 V270" stroke="#fff" stroke-width="12" stroke-linecap="round"/>`;
    case "fete-fin-annee":
      return `<rect x="120" y="360" width="560" height="100" rx="20" fill="#312e81"/>${Array.from({ length: 8 }, (_, i) => `<circle cx="${160 + i * 70}" cy="${180 + (i % 3) * 40}" r="18" fill="${color(seed, i)}"/>`).join("")}${person(400, 100, color(seed, 2), "#5b341d", 1)}`;
    case "anniversaire":
      return `<rect x="300" y="320" width="200" height="120" rx="12" fill="#fbbf24" stroke="#40313a" stroke-width="6"/>${Array.from({ length: 5 }, (_, i) => `<rect x="${330 + i * 28}" y="${220 - i * 8}" width="12" height="${40 + i * 12}" fill="${color(seed, i)}" rx="4"/>`).join("")}`;
    case "jeux":
      return `<rect x="250" y="280" width="120" height="120" rx="16" fill="#f472b6" stroke="#40313a" stroke-width="6"/><circle cx="480" cy="340" r="55" fill="#60a5fa" stroke="#40313a" stroke-width="6"/><circle cx="400" cy="260" r="35" fill="#facc15"/>`;
    case "musique":
      return `<circle cx="320" cy="300" r="70" fill="#111827"/><rect x="390" y="220" width="24" height="180" fill="#111827"/><circle cx="500" cy="280" r="55" fill="#ef4444"/>`;
    case "professeur-de-francais":
      return `${person(320, 110, color(seed, 1), "#7c2d12", 0)}<text x="520" y="320" font-family="serif" font-size="72" font-weight="700" fill="#dc2626">é</text>`;
    case "professeur-de-maths":
      return `${person(320, 110, color(seed, 3), "#4b2e1f", 1)}<text x="500" y="330" font-family="Arial" font-size="64" font-weight="700" fill="#2563eb">π</text>`;
    case "devoirs":
      return `<rect x="260" y="220" width="280" height="200" rx="12" fill="#fff7ed" stroke="#40313a" stroke-width="7"/><path d="M290 270 H510 M290 320 H480 M290 370 H500" stroke="#64748b" stroke-width="6" stroke-linecap="round"/>`;
    case "dormir":
      return `${person(400, 200, color(seed, 2), "#5b341d", 0)}<text x="520" y="200" font-family="Arial" font-size="56" text-anchor="middle" fill="#64748b">Zzz</text>`;
    case "repas":
      return `<ellipse cx="400" cy="360" rx="180" ry="70" fill="#e2e8f0" stroke="#40313a" stroke-width="6"/><circle cx="340" cy="330" r="35" fill="#f87171"/><circle cx="430" cy="320" r="30" fill="#fbbf24"/>${person(180, 120, color(seed, 1), "#b45309", 2)}`;
    case "theatre":
      return `<rect x="120" y="300" width="560" height="140" rx="12" fill="#7c2d12"/><path d="M120 300 Q400 120 680 300" fill="#991b1b" stroke="#40313a" stroke-width="6"/>${person(400, 80, color(seed, 4), "#d97706", 2)}`;
    case "mairie":
      return `<rect x="240" y="220" width="320" height="220" rx="10" fill="#e2e8f0" stroke="#40313a" stroke-width="7"/><path d="M400 150 L560 220 H240 Z" fill="#dc2626"/><rect x="360" y="300" width="80" height="140" fill="#64748b"/><circle cx="400" cy="190" r="28" fill="#f8fafc" stroke="#40313a" stroke-width="4"/>`;
    case "caisse":
      return `<rect x="180" y="260" width="440" height="160" rx="20" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><rect x="220" y="300" width="360" height="50" rx="8" fill="#22c55e"/><rect x="500" y="220" width="80" height="60" rx="8" fill="#94a3b8"/>${person(300, 110, color(seed, 2), "#5b341d", 1)}`;
    case "attendre":
      return `<rect x="120" y="180" width="200" height="280" rx="12" fill="#fef3c7" stroke="#40313a" stroke-width="6"/>${person(420, 130, color(seed, 1), "#4b2e1f", 0)}${person(560, 150, color(seed, 3), "#b45309", 2)}<path d="M500 420 H680" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>`;
    case "pique-nique":
      return `<ellipse cx="400" cy="470" rx="300" ry="60" fill="#86efac"/><rect x="280" y="340" width="240" height="20" rx="8" fill="#92400e"/>${person(320, 150, color(seed, 2), color(seed, 4), 1)}${person(480, 160, color(seed, 1), "#5b341d", 0)}<path d="M620 180 L650 120 L680 180 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="4"/>`;
    case "visite-touristique":
      return `<path d="M360 420 L400 160 L440 420 Z" fill="#f8fafc" stroke="#40313a" stroke-width="6"/><ellipse cx="400" cy="470" rx="280" ry="50" fill="#bbf7d0"/>${person(250, 180, color(seed, 2), "#5b341d", 2)}${person(550, 190, color(seed, 3), "#b45309", 1)}<rect x="360" y="200" width="80" height="60" rx="6" fill="#dc2626"/>`;
    case "jeu-de-societe":
      return `<rect x="250" y="280" width="300" height="200" rx="16" fill="#22c55e" stroke="#40313a" stroke-width="7"/><circle cx="330" cy="360" r="28" fill="#facc15"/><circle cx="400" cy="330" r="32" fill="#ef4444"/><circle cx="470" cy="370" r="24" fill="#60a5fa"/>${person(400, 90, color(seed, 1), "#7c2d12", 0)}`;
    case "cantine":
      return `<rect x="150" y="200" width="500" height="220" rx="20" fill="#fff7ed" stroke="#40313a" stroke-width="7"/><rect x="200" y="260" width="400" height="40" rx="8" fill="#e2e8f0"/>${person(280, 100, color(seed, 2), "#5b341d", 1)}${person(520, 110, color(seed, 4), "#d97706", 2)}`;
    case "gymnase":
      return `<ellipse cx="400" cy="450" rx="280" ry="70" fill="#22c55e"/><rect x="300" y="180" width="200" height="120" rx="10" fill="#f8fafc" stroke="#40313a" stroke-width="6"/>${person(400, 90, color(seed, 3), "#b45309", 2)}<ellipse cx="400" cy="320" rx="40" ry="25" fill="#f97316"/>`;
    case "yoga":
      return `<rect x="160" y="300" width="480" height="40" rx="12" fill="#38bdf8" opacity=".5"/>${person(320, 180, color(seed, 1), "#4b2e1f", 0)}${person(480, 190, color(seed, 2), "#5b341d", 1)}<path d="M300 360 Q340 300 380 360" fill="none" stroke="#40313a" stroke-width="6"/>`;
    case "jeu-video":
      return `<rect x="220" y="200" width="360" height="220" rx="20" fill="#111827" stroke="#40313a" stroke-width="8"/><rect x="250" y="230" width="300" height="160" fill="#60a5fa"/>${person(620, 110, color(seed, 2), "#5b341d", 1)}`;
    case "rentree-scolaire":
      return `<rect x="220" y="200" width="360" height="220" rx="12" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><path d="M400 120 L580 200 H220 Z" fill="#dc2626"/>${person(300, 130, color(seed, 2), "#5b341d", 1)}${person(500, 140, color(seed, 4), "#d97706", 2)}<rect x="320" y="280" width="60" height="80" fill="#2563eb"/><rect x="420" y="280" width="60" height="80" fill="#22c55e"/>`;
    case "bar":
      return `<rect x="150" y="200" width="500" height="220" rx="20" fill="#7c2d12" stroke="#40313a" stroke-width="7"/><rect x="220" y="260" width="360" height="50" rx="8" fill="#92400e"/>${person(400, 90, color(seed, 1), "#4b2e1f", 0)}<circle cx="320" cy="285" r="25" fill="#fbbf24"/><circle cx="480" cy="285" r="25" fill="#60a5fa"/>`;
    case "accueil":
      return `<rect x="180" y="220" width="440" height="180" rx="16" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><rect x="320" y="260" width="160" height="60" rx="8" fill="#dbeafe"/>${person(400, 100, color(seed, 3), "#b45309", 2)}<text x="400" y="300" font-family="Arial" font-size="28" font-weight="700" text-anchor="middle" fill="#2563eb">Info</text>`;
    case "porte-1":
      return `<rect x="280" y="140" width="240" height="360" rx="8" fill="#92400e" stroke="#40313a" stroke-width="7"/><circle cx="480" cy="320" r="12" fill="#facc15"/><text x="400" y="340" font-family="Arial" font-size="96" font-weight="700" text-anchor="middle" fill="#fef3c7">1</text>`;
    case "devant-entree":
      return `<rect x="200" y="180" width="400" height="280" rx="16" fill="#e2e8f0" stroke="#40313a" stroke-width="7"/><rect x="340" y="300" width="120" height="160" fill="#64748b"/>${person(300, 120, color(seed, 2), "#5b341d", 1)}${person(500, 130, color(seed, 4), "#d97706", 2)}`;
    case "1er-etage":
      return `<rect x="220" y="120" width="360" height="380" rx="12" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><rect x="260" y="160" width="280" height="80" fill="#dbeafe"/><text x="400" y="215" font-family="Arial" font-size="42" font-weight="700" text-anchor="middle" fill="#2563eb">1er</text><path d="M400 240 V420" stroke="#94a3b8" stroke-width="8" stroke-dasharray="12 8"/>`;
    case "manger":
      return `${person(400, 110, color(seed, 1), color(seed, 3), 0)}<path d="M360 420 L400 160 L440 420 Z" fill="#fbbf24" stroke="#40313a" stroke-width="6"/><circle cx="380" cy="350" r="14" fill="#ef4444"/><circle cx="420" cy="340" r="12" fill="#ef4444"/>`;
    case "telephoner":
      return `${person(400, 110, color(seed, 2), "#5b341d", 1)}<rect x="470" y="250" width="50" height="90" rx="10" fill="#1f2937" stroke="#40313a" stroke-width="5"/><rect x="478" y="260" width="34" height="50" rx="4" fill="#60a5fa"/>`;
    case "vestiaire":
      return `<rect x="160" y="160" width="480" height="320" rx="20" fill="#e2e8f0" stroke="#40313a" stroke-width="7"/>${Array.from({ length: 6 }, (_, i) => `<rect x="${200 + i * 70}" y="200" width="50" height="220" rx="6" fill="#94a3b8"/><circle cx="${225 + i * 70}" cy="230" r="14" fill="#64748b"/>`).join("")}`;
    case "sortie":
      return `<rect x="300" y="160" width="200" height="320" rx="8" fill="#64748b" stroke="#40313a" stroke-width="7"/><rect x="340" y="200" width="120" height="200" fill="#38bdf8" opacity=".4"/><text x="400" y="420" font-family="Arial" font-size="36" font-weight="700" text-anchor="middle" fill="#fff">SORTIE</text>`;
    case "travaux":
      return `<rect x="120" y="360" width="560" height="80" fill="#94a3b8"/><path d="M200 360 L240 280 H320 L360 360 Z" fill="#facc15" stroke="#40313a" stroke-width="5"/><rect x="420" y="300" width="180" height="60" rx="8" fill="#f97316"/><text x="510" y="340" font-family="Arial" font-size="28" font-weight="700" text-anchor="middle" fill="#fff">TRAVAUX</text>`;
    case "accident":
      return `<rect x="200" y="300" width="400" height="120" rx="12" fill="#64748b"/><rect x="280" y="240" width="240" height="80" rx="20" fill="#ef4444" stroke="#40313a" stroke-width="6"/><path d="M340 280 H460 M400 240 V320" stroke="#fff" stroke-width="10" stroke-linecap="round"/>`;
    case "manifestation":
      return `${person(250, 130, color(seed, 1), "#4b2e1f", 0)}${person(400, 120, color(seed, 3), "#b45309", 2)}${person(550, 140, color(seed, 2), "#5b341d", 1)}<rect x="300" y="360" width="200" height="50" rx="8" fill="#f8fafc" stroke="#40313a" stroke-width="5"/><text x="400" y="395" font-family="Arial" font-size="22" font-weight="700" text-anchor="middle" fill="#dc2626">MANIF</text>`;
    case "bonnet-et-lunettes":
      return `<ellipse cx="340" cy="300" rx="55" ry="30" fill="#dc2626" stroke="#40313a" stroke-width="5"/><path d="M310 300 Q340 220 370 300 Z" fill="#ef4444" stroke="#40313a" stroke-width="5"/><ellipse cx="480" cy="310" rx="70" ry="25" fill="#60a5fa" stroke="#0369a1" stroke-width="6"/><path d="M420 310 H540" stroke="#0369a1" stroke-width="5"/>`;
    case "nuages":
      return `<ellipse cx="320" cy="300" rx="90" ry="55" fill="#e2e8f0" stroke="#94a3b8" stroke-width="6"/><ellipse cx="420" cy="280" rx="110" ry="65" fill="#f1f5f9" stroke="#94a3b8" stroke-width="6"/><ellipse cx="500" cy="310" rx="80" ry="50" fill="#e2e8f0" stroke="#94a3b8" stroke-width="6"/>`;
    case "vent":
      return `<path d="M220 260 H520 M240 320 H500 M260 380 H480" stroke="#64748b" stroke-width="10" stroke-linecap="round"/><path d="M500 250 L540 260 L500 270 M480 310 L520 320 L480 330 M460 370 L500 380 L460 390" fill="#94a3b8"/>`;
    case "fete-des-meres":
      return `${person(350, 120, color(seed, 2), "#5b341d", 1)}${person(480, 130, color(seed, 4), "#d97706", 0)}<circle cx="400" cy="360" r="45" fill="#f472b6"/><path d="M380 340 Q400 300 420 340" fill="#22c55e" stroke="#15803d" stroke-width="4"/>`;
    case "soldes":
      return `<rect x="180" y="200" width="440" height="260" rx="20" fill="#fef3c7" stroke="#40313a" stroke-width="7"/><text x="400" y="320" font-family="Arial" font-size="56" font-weight="700" text-anchor="middle" fill="#dc2626">SOLDES</text><text x="400" y="380" font-family="Arial" font-size="36" font-weight="700" text-anchor="middle" fill="#2563eb">-50%</text>`;
    case "cours-peinture":
      return `${person(300, 110, color(seed, 1), "#7c2d12", 0)}<rect x="420" y="240" width="200" height="150" rx="12" fill="#fff7ed" stroke="#40313a" stroke-width="6"/><circle cx="470" cy="300" r="25" fill="#ef4444"/><circle cx="530" cy="320" r="20" fill="#2563eb"/><rect x="500" y="270" width="80" height="12" rx="4" fill="#92400e"/>`;
    case "visite-guidee":
      return `${person(280, 110, color(seed, 3), "#b45309", 2)}${person(420, 130, color(seed, 1), "#4b2e1f", 0)}${person(520, 120, color(seed, 4), "#d97706", 1)}<rect x="200" y="360" width="400" height="20" rx="6" fill="#92400e"/><rect x="220" y="180" width="120" height="160" fill="#fde68a" stroke="#40313a" stroke-width="4"/>`;
    case "nuit-des-musees":
      return `<rect x="220" y="200" width="360" height="220" rx="12" fill="#1e293b" stroke="#40313a" stroke-width="7"/><circle cx="620" cy="160" r="50" fill="#facc15"/><text x="400" y="320" font-family="Arial" font-size="28" font-weight="700" text-anchor="middle" fill="#fff">NUIT DES MUSÉES</text>`;
    case "fete-de-la-musique":
      return `<circle cx="320" cy="300" r="60" fill="#111827"/><rect x="390" y="220" width="20" height="160" fill="#111827"/><circle cx="500" cy="280" r="50" fill="#ef4444"/>${person(400, 90, color(seed, 2), "#5b341d", 1)}`;
    case "journee-du-livre":
      return `<rect x="300" y="200" width="200" height="260" rx="12" fill="#2563eb" stroke="#40313a" stroke-width="7"/><path d="M400 200 V460" stroke="#fef3c7" stroke-width="4"/><circle cx="500" cy="180" r="40" fill="#facc15"/>`;
    case "courriel":
      return `<rect x="240" y="220" width="320" height="220" rx="16" fill="#f8fafc" stroke="#40313a" stroke-width="7"/><path d="M240 220 L400 340 L560 220" fill="none" stroke="#2563eb" stroke-width="8" stroke-linejoin="round"/><rect x="290" y="300" width="220" height="12" rx="4" fill="#94a3b8"/><rect x="290" y="330" width="180" height="12" rx="4" fill="#cbd5e1"/>`;
    case "sms":
      return `<rect x="280" y="180" width="240" height="320" rx="30" fill="#1f2937" stroke="#40313a" stroke-width="7"/><rect x="310" y="260" width="180" height="80" rx="16" fill="#22c55e"/><text x="400" y="310" font-family="Arial" font-size="28" font-weight="700" text-anchor="middle" fill="#fff">SMS</text>`;
    case "film":
      return `<rect x="220" y="200" width="360" height="220" rx="20" fill="#111827" stroke="#40313a" stroke-width="8"/><rect x="250" y="230" width="300" height="160" fill="#60a5fa"/><polygon points="370,310 370,270 410,290" fill="#fff"/>`;
    case "parc":
      return `<ellipse cx="400" cy="470" rx="300" ry="60" fill="#86efac"/><circle cx="250" cy="280" r="60" fill="#22c55e" opacity=".7"/><circle cx="550" cy="300" r="50" fill="#22c55e" opacity=".6"/><path d="M300 360 Q400 280 500 360" fill="none" stroke="#92400e" stroke-width="8"/>`;
    case "boutique-sport":
      return `<rect x="180" y="200" width="440" height="260" rx="20" fill="#2563eb" stroke="#40313a" stroke-width="7"/><rect x="220" y="260" width="100" height="120" fill="#f8fafc"/><circle cx="400" cy="320" r="45" fill="#f97316"/><rect x="480" y="260" width="100" height="120" fill="#22c55e"/>`;
    case "salle-de-sport":
      return `<rect x="160" y="180" width="480" height="280" rx="20" fill="#e2e8f0" stroke="#40313a" stroke-width="7"/>${person(300, 110, color(seed, 1), "#4b2e1f", 0)}${person(500, 120, color(seed, 3), "#b45309", 2)}<rect x="220" y="360" width="360" height="30" rx="8" fill="#64748b"/>`;
    case "cours-fitness":
      return `${person(350, 110, color(seed, 2), "#5b341d", 1)}<ellipse cx="500" cy="360" rx="50" ry="25" fill="#f97316"/>${person(500, 200, color(seed, 4), "#d97706", 0)}<rect x="200" y="360" width="120" height="20" rx="6" fill="#94a3b8"/>`;
    case "librairie":
      return `<rect x="180" y="180" width="440" height="280" rx="20" fill="#92400e" stroke="#40313a" stroke-width="7"/>${Array.from({ length: 5 }, (_, i) => `<rect x="${220 + i * 75}" y="220" width="50" height="180" fill="${color(seed, i)}"/>`).join("")}${person(400, 90, color(seed, 2), "#5b341d", 1)}`;
    case "conte":
      return `${person(280, 130, color(seed, 3), "#b45309", 2)}<rect x="360" y="280" width="80" height="100" rx="8" fill="#22c55e" stroke="#40313a" stroke-width="4"/>${person(450, 200, color(seed, 1), "#4b2e1f", 0)}${person(520, 210, color(seed, 4), "#d97706", 1)}`;
    case "danse":
      return `${person(320, 140, color(seed, 2), "#5b341d", 1)}${person(480, 150, color(seed, 1), "#7c2d12", 0)}<circle cx="400" cy="120" r="22" fill="#f472b6"/><circle cx="430" cy="90" r="18" fill="#60a5fa"/><circle cx="370" cy="85" r="16" fill="#facc15"/>`;
    case "ecrivain":
      return `${person(400, 100, color(seed, 1), "#4b2e1f", 2)}<rect x="280" y="320" width="240" height="160" rx="12" fill="#fff7ed" stroke="#40313a" stroke-width="6"/><path d="M310 370 H490 M310 410 H460 M310 450 H480" stroke="#64748b" stroke-width="6" stroke-linecap="round"/>`;
    case "cours-ecriture":
      return `<rect x="220" y="240" width="360" height="200" rx="16" fill="#fef3c7" stroke="#40313a" stroke-width="7"/>${person(300, 110, color(seed, 2), "#5b341d", 1)}${person(500, 120, color(seed, 4), "#d97706", 0)}<path d="M260 300 H540 M260 340 H500 M260 380 H520" stroke="#64748b" stroke-width="6" stroke-linecap="round"/>`;
    case "internet":
      return `<rect x="240" y="200" width="320" height="220" rx="16" fill="#1f2937" stroke="#40313a" stroke-width="7"/><rect x="270" y="230" width="260" height="160" fill="#60a5fa"/><text x="400" y="320" font-family="Arial" font-size="36" font-weight="700" text-anchor="middle" fill="#fff">www</text>`;
    case "sortie-droite":
      return `<rect x="120" y="300" width="560" height="120" rx="12" fill="#7c2d12"/><rect x="200" y="180" width="400" height="140" fill="#f8fafc" stroke="#40313a" stroke-width="5"/><rect x="560" y="320" width="60" height="80" fill="#2563eb"/><path d="M500 360 L580 360" stroke="#ef4444" stroke-width="10" marker-end="url(#arrow)"/>`;
    case "sortie-gauche":
      return `<rect x="120" y="300" width="560" height="120" rx="12" fill="#7c2d12"/><rect x="200" y="180" width="400" height="140" fill="#f8fafc" stroke="#40313a" stroke-width="5"/><rect x="180" y="320" width="60" height="80" fill="#2563eb"/><path d="M260 360 L180 360" stroke="#ef4444" stroke-width="10"/>`;
    case "sortie-milieu":
      return `<rect x="120" y="300" width="560" height="120" rx="12" fill="#7c2d12"/><rect x="200" y="180" width="400" height="140" fill="#f8fafc" stroke="#40313a" stroke-width="5"/><rect x="370" y="320" width="60" height="80" fill="#2563eb"/><path d="M400 300 L400 380" stroke="#ef4444" stroke-width="10"/>`;
    case "etiquette":
      return `<rect x="300" y="240" width="200" height="120" rx="12" fill="#fef3c7" stroke="#40313a" stroke-width="6"/><path d="M320 270 H480 M320 300 H450 M320 330 H420" stroke="#64748b" stroke-width="5" stroke-linecap="round"/><rect x="340" y="180" width="120" height="50" rx="6" fill="#94a3b8"/>`;
    default:
      return objectScene(slug, seed);
  }
}

const OBJECTS = [
  "piano", "guitare", "violon", "ballon", "eau", "casquette", "glace", "pizza", "sandwich", "gateau",
  "frere", "soeur", "cousin", "pere", "mere", "cousine",
  "volleyball", "basketball", "baskets", "pates", "bottes", "creme-solaire", "parapluie",
  "livre", "television", "train", "voiture", "cadeau", "saxophone", "cahier", "regle",
  "geographie", "francais", "mathematiques", "dessin", "salade",
  "anglais", "appareil-photo", "musee", "bateau", "billet", "magazines", "chocolat", "biscuit",
  "manteau", "sac-a-dos", "programme", "girafe", "tigre", "vache", "t-shirt", "bouquet",
  "jus-d-orange", "bol-cereales", "tartine-confiture", "fraises", "peches", "pommes-poires",
  "espagnol", "italien", "allemand", "chinois", "japonais",
];

const SITUATIONS = [
  "cinema", "concert", "football", "magasins", "restaurant", "sport-au-parc", "se-reposer",
  "gouter", "bus", "cours", "metro", "apprentissage", "couloir", "maison",
  "campagne", "mer", "montagne", "promenade", "prof-dessin", "directrice", "secretaire",
  "malade", "absente", "vacances", "cours-sport", "piscine",
  "bibliotheque", "ecole", "hopital", "fete-fin-annee", "anniversaire", "jeux", "musique",
  "professeur-de-francais", "professeur-de-maths", "devoirs", "dormir", "repas", "theatre",
  "mairie", "caisse", "attendre", "pique-nique", "visite-touristique", "jeu-de-societe",
  "cantine", "gymnase", "yoga", "jeu-video",
  "rentree-scolaire", "bar", "accueil", "sortie-droite", "sortie-gauche", "sortie-milieu", "etiquette",
  "porte-1", "devant-entree", "1er-etage", "manger", "telephoner", "vestiaire", "sortie", "travaux",
  "accident", "manifestation", "bonnet-et-lunettes",
  "nuages", "vent", "fete-des-meres", "soldes", "cours-peinture", "visite-guidee",
  "nuit-des-musees", "fete-de-la-musique", "journee-du-livre", "courriel", "sms", "film", "parc",
  "boutique-sport", "salle-de-sport", "cours-fitness", "librairie", "conte", "danse",
  "ecrivain", "cours-ecriture", "internet",
];

function svgFor(slug, whiteBg) {
  const seed = hash(slug);
  const body = whiteBg ? objectScene(slug, seed) : situationScene(slug, seed);
  const bg = whiteBg
    ? `<rect width="800" height="600" fill="#ffffff"/>`
    : `<defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="${color(seed, 0)}" stop-opacity=".25"/><stop offset="100%" stop-color="${color(seed, 4)}" stop-opacity=".4"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg)"/><path d="M0 505 C150 450 260 540 410 495 C560 450 650 495 800 450 V600 H0Z" fill="#f8fafc" opacity=".75"/>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img" aria-label="${xml(slug)}">
  ${bg}
  <g>${body}</g>
</svg>`;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  let made = 0;
  for (const slug of OBJECTS) {
    const out = path.join(outDir, `${slug}.webp`);
    await sharp(Buffer.from(svgFor(slug, true))).resize(800, 600).webp({ quality: 85 }).toFile(out);
    made++;
  }
  for (const slug of SITUATIONS) {
    const out = path.join(outDir, `${slug}.webp`);
    await sharp(Buffer.from(svgFor(slug, false))).resize(800, 600).webp({ quality: 85 }).toFile(out);
    made++;
  }
  console.log(`Generated ${made} images → ${path.relative(process.cwd(), outDir)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
