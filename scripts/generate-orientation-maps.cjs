/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Génère les mini-cartes CE orientation (style uniforme) en SVG puis WebP.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT_DIR = path.join(__dirname, "..", "public", "expression", "ce", "base", "orientation");

const BLOCK = "#b8d4e8";
const STREET = "#ffffff";
const ROUTE = "#22c55e";
const PIN = "#ef4444";
const METRO = "#22c55e";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function svgWrap(inner) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="240" height="180">
  <rect width="240" height="180" fill="#f1f5f9"/>
  ${inner}
</svg>`;
}

/** Carte rue : blocs bleus + rues blanches. */
function streetMap({ blocks, streets, route, pin, metro, label }) {
  const blockEls = blocks
    .map((b) => `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" fill="${BLOCK}" rx="2"/>`)
    .join("\n  ");
  const streetEls = streets
    .map((s) => `<line x1="${s.x1}" y1="${s.y1}" x2="${s.x2}" y2="${s.y2}" stroke="${STREET}" stroke-width="${s.w ?? 10}" stroke-linecap="round"/>`)
    .join("\n  ");
  const routeEl = route
    ? `<polyline points="${route}" fill="none" stroke="${ROUTE}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
    : "";
  const metroEl = metro
    ? `<circle cx="${metro.x}" cy="${metro.y}" r="10" fill="${METRO}"/><text x="${metro.x}" y="${metro.y + 4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold" font-family="Arial,sans-serif">M</text>`
    : "";
  const pinEl = pin
    ? `<path d="M ${pin.x} ${pin.y} c -5 -8 -10 -4 -10 2 a 10 10 0 0 0 20 0 c 0 -6 -5 -10 -10 -2 z" fill="${PIN}"/><circle cx="${pin.x}" cy="${pin.y - 2}" r="3" fill="#fff"/>`
    : "";
  const labelEl = label
    ? `<text x="${label.x}" y="${label.y}" text-anchor="middle" fill="#475569" font-size="8" font-family="Arial,sans-serif">${label.text}</text>`
    : "";
  return svgWrap(`${blockEls}\n  ${streetEls}\n  ${routeEl}\n  ${metroEl}\n  ${pinEl}\n  ${labelEl}`);
}

/** Carte centre commercial : grille 3×3 colorée. */
function mallMap({ route, pin, entrance = true }) {
  const colors = ["#f97316", "#a855f7", "#0ea5e9", "#ec4899", "#22c55e", "#14b8a6", "#ef4444", "#38bdf8", "#eab308"];
  const cells = [];
  let ci = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const x = 30 + col * 60;
      const y = 40 + row * 40;
      cells.push(`<rect x="${x}" y="${y}" width="52" height="32" fill="${colors[ci++]}" rx="3"/>`);
    }
  }
  const entranceEl = entrance
    ? `<rect x="102" y="8" width="28" height="20" fill="#0ea5e9" rx="2"/><text x="116" y="21" text-anchor="middle" fill="#fff" font-size="7" font-family="Arial,sans-serif">⛶</text>`
    : "";
  const infoEl = `<circle cx="178" cy="96" r="8" fill="#64748b"/><text x="178" y="99" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold" font-family="Arial,sans-serif">i</text>`;
  const routeEl = `<polyline points="${route}" fill="none" stroke="${ROUTE}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
  const pinEl = `<path d="M ${pin.x} ${pin.y} c -4 -6 -8 -3 -8 2 a 8 8 0 0 0 16 0 c 0 -5 -4 -8 -8 -2 z" fill="${PIN}"/><circle cx="${pin.x}" cy="${pin.y - 1}" r="2.5" fill="#fff"/>`;
  return svgWrap(`<rect x="20" y="30" width="200" height="130" fill="#e2e8f0" rx="6"/>\n  ${cells.join("\n  ")}\n  ${entranceEl}\n  ${infoEl}\n  ${routeEl}\n  ${pinEl}`);
}

/** Carte fête foraine : blocs 3D simplifiés. */
function fairMap({ route, pin, cameraCell, fountainCell }) {
  const layout = [
    { x: 40, y: 30, w: 50, h: 28, c: "#22c55e", skew: true },
    { x: 100, y: 25, w: 40, h: 35, c: "#1e3a8a" },
    { x: 150, y: 28, w: 45, h: 30, c: "#38bdf8" },
    { x: 35, y: 70, w: 42, h: 32, c: "#ec4899" },
    { x: 90, y: 68, w: 48, h: 34, c: "#92400e" },
    { x: 150, y: 72, w: 44, h: 30, c: "#eab308" },
    { x: 50, y: 115, w: 28, h: 28, c: "#f97316", round: true },
    { x: 95, y: 118, w: 50, h: 26, c: "#ef4444" },
    { x: 155, y: 116, w: 40, h: 28, c: "#f97316" },
  ];
  const blocks = layout
    .map((b) => {
      if (b.round) return `<ellipse cx="${b.x + b.w / 2}" cy="${b.y + b.h / 2}" rx="${b.w / 2}" ry="${b.h / 2}" fill="${b.c}"/>`;
      return `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" fill="${b.c}" rx="3"/>`;
    })
    .join("\n  ");
  const cam = layout[cameraCell];
  const fout = layout[fountainCell];
  const icons = [
    `<text x="${cam.x + cam.w / 2}" y="${cam.y + cam.h / 2 + 4}" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial">📷</text>`,
    `<text x="${fout.x + fout.w / 2}" y="${fout.y + fout.h / 2 + 4}" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial">⛲</text>`,
  ].join("\n  ");
  const gate = `<rect x="108" y="152" width="24" height="12" fill="#ef4444" rx="1"/><rect x="110" y="154" width="20" height="8" fill="#eab308"/>`;
  return svgWrap(`${blocks}\n  ${icons}\n  ${gate}\n  <polyline points="${route}" fill="none" stroke="${ROUTE}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n  <path d="M ${pin.x} ${pin.y} c -4 -6 -8 -3 -8 2 a 8 8 0 0 0 16 0 c 0 -5 -4 -8 -8 -2 z" fill="${PIN}"/>`);
}

const MAPS = {
  "musee-01": [
    streetMap({
      blocks: [
        { x: 10, y: 10, w: 70, h: 50 }, { x: 90, y: 10, w: 60, h: 50 }, { x: 160, y: 10, w: 70, h: 50 },
        { x: 10, y: 70, w: 70, h: 50 }, { x: 90, y: 70, w: 60, h: 50 }, { x: 160, y: 70, w: 70, h: 50 },
        { x: 10, y: 130, w: 70, h: 40 }, { x: 90, y: 130, w: 60, h: 40 }, { x: 160, y: 130, w: 70, h: 40 },
      ],
      streets: [
        { x1: 120, y1: 155, x2: 120, y2: 60, w: 12 },
        { x1: 120, y1: 95, x2: 200, y2: 95, w: 12 },
      ],
      metro: { x: 120, y: 155 },
      route: "120,155 120,95 200,95 200,115",
      pin: { x: 200, y: 115 },
      label: { x: 120, y: 88, text: "place Riponne" },
    }),
    streetMap({
      blocks: [
        { x: 10, y: 10, w: 70, h: 50 }, { x: 90, y: 10, w: 60, h: 50 }, { x: 160, y: 10, w: 70, h: 50 },
        { x: 10, y: 70, w: 70, h: 50 }, { x: 90, y: 70, w: 60, h: 50 }, { x: 160, y: 70, w: 70, h: 50 },
        { x: 10, y: 130, w: 70, h: 40 }, { x: 90, y: 130, w: 60, h: 40 }, { x: 160, y: 130, w: 70, h: 40 },
      ],
      streets: [
        { x1: 120, y1: 155, x2: 120, y2: 60, w: 12 },
        { x1: 120, y1: 95, x2: 50, y2: 95, w: 12 },
      ],
      metro: { x: 120, y: 155 },
      route: "120,155 120,95 50,95 50,75",
      pin: { x: 50, y: 75 },
      label: { x: 120, y: 88, text: "place Riponne" },
    }),
    streetMap({
      blocks: [
        { x: 10, y: 10, w: 70, h: 50 }, { x: 90, y: 10, w: 60, h: 50 }, { x: 160, y: 10, w: 70, h: 50 },
        { x: 10, y: 70, w: 70, h: 50 }, { x: 90, y: 70, w: 60, h: 50 }, { x: 160, y: 70, w: 70, h: 50 },
        { x: 10, y: 130, w: 70, h: 40 }, { x: 90, y: 130, w: 60, h: 40 }, { x: 160, y: 130, w: 70, h: 40 },
      ],
      streets: [
        { x1: 120, y1: 155, x2: 120, y2: 60, w: 12 },
        { x1: 120, y1: 95, x2: 200, y2: 95, w: 12 },
      ],
      metro: { x: 120, y: 155 },
      route: "120,155 120,95 200,95 200,75",
      pin: { x: 200, y: 75 },
      label: { x: 120, y: 88, text: "place Riponne" },
    }),
  ],
  "examen-01": [
    streetMap({
      blocks: [
        { x: 20, y: 15, w: 55, h: 45 }, { x: 85, y: 15, w: 50, h: 45 }, { x: 145, y: 15, w: 75, h: 45 },
        { x: 20, y: 70, w: 55, h: 45 }, { x: 85, y: 70, w: 50, h: 45 }, { x: 145, y: 70, w: 75, h: 45 },
        { x: 20, y: 125, w: 55, h: 45 }, { x: 85, y: 125, w: 50, h: 45 }, { x: 145, y: 125, w: 75, h: 45 },
      ],
      streets: [
        { x1: 110, y1: 25, x2: 110, y2: 155, w: 11 },
        { x1: 110, y1: 60, x2: 200, y2: 100, w: 11 },
        { x1: 110, y1: 60, x2: 40, y2: 100, w: 11 },
      ],
      metro: { x: 110, y: 25 },
      route: "110,25 110,60 200,100 210,130",
      pin: { x: 210, y: 130 },
    }),
    streetMap({
      blocks: [
        { x: 20, y: 15, w: 55, h: 45 }, { x: 85, y: 15, w: 50, h: 45 }, { x: 145, y: 15, w: 75, h: 45 },
        { x: 20, y: 70, w: 55, h: 45 }, { x: 85, y: 70, w: 50, h: 45 }, { x: 145, y: 70, w: 75, h: 45 },
        { x: 20, y: 125, w: 55, h: 45 }, { x: 85, y: 125, w: 50, h: 45 }, { x: 145, y: 125, w: 75, h: 45 },
      ],
      streets: [
        { x1: 110, y1: 25, x2: 110, y2: 155, w: 11 },
        { x1: 110, y1: 60, x2: 200, y2: 100, w: 11 },
        { x1: 110, y1: 60, x2: 40, y2: 100, w: 11 },
      ],
      metro: { x: 110, y: 25 },
      route: "110,25 110,60 40,100 35,140",
      pin: { x: 35, y: 140 },
    }),
    streetMap({
      blocks: [
        { x: 20, y: 15, w: 55, h: 45 }, { x: 85, y: 15, w: 50, h: 45 }, { x: 145, y: 15, w: 75, h: 45 },
        { x: 20, y: 70, w: 55, h: 45 }, { x: 85, y: 70, w: 50, h: 45 }, { x: 145, y: 70, w: 75, h: 45 },
        { x: 20, y: 125, w: 55, h: 45 }, { x: 85, y: 125, w: 50, h: 45 }, { x: 145, y: 125, w: 75, h: 45 },
      ],
      streets: [
        { x1: 110, y1: 25, x2: 110, y2: 155, w: 11 },
        { x1: 110, y1: 60, x2: 200, y2: 100, w: 11 },
        { x1: 110, y1: 60, x2: 40, y2: 100, w: 11 },
      ],
      metro: { x: 110, y: 25 },
      route: "110,25 110,60 40,100 35,80",
      pin: { x: 35, y: 80 },
    }),
  ],
  "maladiere-01": [
    mallMap({ route: "116,28 116,56 86,56 86,76", pin: { x: 118, y: 88 } }),
    mallMap({ route: "116,28 116,56 146,56 146,88", pin: { x: 146, y: 88 } }),
    mallMap({ route: "116,28 146,28 146,56", pin: { x: 170, y: 56 } }),
  ],
  "olympique-01": [
    streetMap({
      blocks: [
        { x: 15, y: 20, w: 60, h: 45 }, { x: 85, y: 20, w: 55, h: 45 }, { x: 155, y: 20, w: 70, h: 45 },
        { x: 15, y: 75, w: 60, h: 45 }, { x: 85, y: 75, w: 55, h: 45 }, { x: 155, y: 75, w: 70, h: 45 },
        { x: 15, y: 130, w: 60, h: 40 }, { x: 85, y: 130, w: 55, h: 40 }, { x: 155, y: 130, w: 70, h: 40 },
      ],
      streets: [
        { x1: 45, y1: 155, x2: 45, y2: 40, w: 10 },
        { x1: 45, y1: 100, x2: 130, y2: 55, w: 10 },
        { x1: 130, y1: 55, x2: 190, y2: 55, w: 10 },
      ],
      route: "45,155 45,100 130,55 190,55 190,35",
      pin: { x: 45, y: 155 },
      label: { x: 100, y: 48, text: "av. Mon-Repos" },
    }),
    streetMap({
      blocks: [
        { x: 15, y: 20, w: 60, h: 45 }, { x: 85, y: 20, w: 55, h: 45 }, { x: 155, y: 20, w: 70, h: 45 },
        { x: 15, y: 75, w: 60, h: 45 }, { x: 85, y: 75, w: 55, h: 45 }, { x: 155, y: 75, w: 70, h: 45 },
        { x: 15, y: 130, w: 60, h: 40 }, { x: 85, y: 130, w: 55, h: 40 }, { x: 155, y: 130, w: 70, h: 40 },
      ],
      streets: [
        { x1: 45, y1: 155, x2: 45, y2: 40, w: 10 },
        { x1: 45, y1: 100, x2: 130, y2: 55, w: 10 },
        { x1: 130, y1: 55, x2: 190, y2: 55, w: 10 },
      ],
      route: "45,40 45,100 130,55 190,55 190,35",
      pin: { x: 45, y: 40 },
      label: { x: 100, y: 48, text: "av. Mon-Repos" },
    }),
    streetMap({
      blocks: [
        { x: 15, y: 20, w: 60, h: 45 }, { x: 85, y: 20, w: 55, h: 45 }, { x: 155, y: 20, w: 70, h: 45 },
        { x: 15, y: 75, w: 60, h: 45 }, { x: 85, y: 75, w: 55, h: 45 }, { x: 155, y: 75, w: 70, h: 45 },
        { x: 15, y: 130, w: 60, h: 40 }, { x: 85, y: 130, w: 55, h: 40 }, { x: 155, y: 130, w: 70, h: 40 },
      ],
      streets: [
        { x1: 45, y1: 155, x2: 45, y2: 40, w: 10 },
        { x1: 45, y1: 100, x2: 130, y2: 55, w: 10 },
        { x1: 130, y1: 55, x2: 190, y2: 55, w: 10 },
      ],
      route: "45,155 45,100 130,55 190,55 190,35",
      pin: { x: 190, y: 35 },
      label: { x: 100, y: 48, text: "av. Mon-Repos" },
    }),
  ],
  "bibliotheque-01": [
    streetMap({
      blocks: [
        { x: 20, y: 15, w: 55, h: 40 }, { x: 85, y: 15, w: 50, h: 40 }, { x: 145, y: 15, w: 75, h: 40 },
        { x: 20, y: 65, w: 55, h: 40 }, { x: 85, y: 65, w: 50, h: 40 }, { x: 145, y: 65, w: 75, h: 40 },
        { x: 20, y: 115, w: 55, h: 50 }, { x: 85, y: 115, w: 50, h: 50 }, { x: 145, y: 115, w: 75, h: 50 },
      ],
      streets: [
        { x1: 110, y1: 155, x2: 110, y2: 95, w: 11 },
        { x1: 60, y1: 95, x2: 160, y2: 95, w: 11 },
      ],
      route: "155,120 110,120 110,95 160,95 160,55",
      pin: { x: 155, y: 120 },
      label: { x: 110, y: 88, text: "place Saint-François" },
    }),
    streetMap({
      blocks: [
        { x: 20, y: 15, w: 55, h: 40 }, { x: 85, y: 15, w: 50, h: 40 }, { x: 145, y: 15, w: 75, h: 40 },
        { x: 20, y: 65, w: 55, h: 40 }, { x: 85, y: 65, w: 50, h: 40 }, { x: 145, y: 65, w: 75, h: 40 },
        { x: 20, y: 115, w: 55, h: 50 }, { x: 85, y: 115, w: 50, h: 50 }, { x: 145, y: 115, w: 75, h: 50 },
      ],
      streets: [
        { x1: 110, y1: 155, x2: 110, y2: 95, w: 11 },
        { x1: 60, y1: 95, x2: 160, y2: 95, w: 11 },
      ],
      route: "60,155 110,155 110,95 160,95 160,55",
      pin: { x: 60, y: 155 },
      label: { x: 110, y: 88, text: "place Saint-François" },
    }),
    streetMap({
      blocks: [
        { x: 20, y: 15, w: 55, h: 40 }, { x: 85, y: 15, w: 50, h: 40 }, { x: 145, y: 15, w: 75, h: 40 },
        { x: 20, y: 65, w: 55, h: 40 }, { x: 85, y: 65, w: 50, h: 40 }, { x: 145, y: 65, w: 75, h: 40 },
        { x: 20, y: 115, w: 55, h: 50 }, { x: 85, y: 115, w: 50, h: 50 }, { x: 145, y: 115, w: 75, h: 50 },
      ],
      streets: [
        { x1: 110, y1: 155, x2: 110, y2: 55, w: 11 },
        { x1: 60, y1: 95, x2: 160, y2: 95, w: 11 },
      ],
      route: "60,55 110,55 110,95 60,95",
      pin: { x: 60, y: 55 },
      label: { x: 110, y: 88, text: "place Saint-François" },
    }),
  ],
  "theatre-01": [
    streetMap({
      blocks: [
        { x: 15, y: 20, w: 55, h: 40 }, { x: 80, y: 20, w: 50, h: 40 }, { x: 140, y: 20, w: 85, h: 40 },
        { x: 15, y: 70, w: 55, h: 40 }, { x: 80, y: 70, w: 50, h: 40 }, { x: 140, y: 70, w: 85, h: 40 },
        { x: 15, y: 120, w: 55, h: 50 }, { x: 80, y: 120, w: 50, h: 50 }, { x: 140, y: 120, w: 85, h: 50 },
      ],
      streets: [
        { x1: 40, y1: 25, x2: 40, y2: 155, w: 10 },
        { x1: 40, y1: 70, x2: 120, y2: 120, w: 10 },
        { x1: 120, y1: 70, x2: 200, y2: 120, w: 10 },
      ],
      metro: { x: 40, y: 25 },
      route: "40,25 40,70 80,100 120,130",
      pin: { x: 120, y: 130 },
    }),
    streetMap({
      blocks: [
        { x: 15, y: 20, w: 55, h: 40 }, { x: 80, y: 20, w: 50, h: 40 }, { x: 140, y: 20, w: 85, h: 40 },
        { x: 15, y: 70, w: 55, h: 40 }, { x: 80, y: 70, w: 50, h: 40 }, { x: 140, y: 70, w: 85, h: 40 },
        { x: 15, y: 120, w: 55, h: 50 }, { x: 80, y: 120, w: 50, h: 50 }, { x: 140, y: 120, w: 85, h: 50 },
      ],
      streets: [
        { x1: 40, y1: 25, x2: 40, y2: 155, w: 10 },
        { x1: 40, y1: 70, x2: 120, y2: 120, w: 10 },
        { x1: 120, y1: 70, x2: 200, y2: 120, w: 10 },
      ],
      metro: { x: 40, y: 25 },
      route: "40,25 40,70 120,70 120,130 180,130",
      pin: { x: 180, y: 130 },
    }),
    streetMap({
      blocks: [
        { x: 15, y: 20, w: 55, h: 40 }, { x: 80, y: 20, w: 50, h: 40 }, { x: 140, y: 20, w: 85, h: 40 },
        { x: 15, y: 70, w: 55, h: 40 }, { x: 80, y: 70, w: 50, h: 40 }, { x: 140, y: 70, w: 85, h: 40 },
        { x: 15, y: 120, w: 55, h: 50 }, { x: 80, y: 120, w: 50, h: 50 }, { x: 140, y: 120, w: 85, h: 50 },
      ],
      streets: [
        { x1: 40, y1: 25, x2: 40, y2: 155, w: 10 },
        { x1: 40, y1: 70, x2: 120, y2: 120, w: 10 },
        { x1: 120, y1: 70, x2: 200, y2: 120, w: 10 },
      ],
      metro: { x: 40, y: 25 },
      route: "40,25 40,155 80,155",
      pin: { x: 80, y: 155 },
    }),
  ],
  "gare-01": [
    streetMap({
      blocks: [
        { x: 20, y: 30, w: 50, h: 50 }, { x: 80, y: 30, w: 50, h: 50 }, { x: 140, y: 30, w: 80, h: 50 },
        { x: 20, y: 90, w: 50, h: 50 }, { x: 80, y: 90, w: 50, h: 50 }, { x: 140, y: 90, w: 80, h: 50 },
      ],
      streets: [
        { x1: 35, y1: 100, x2: 200, y2: 100, w: 12 },
        { x1: 130, y1: 100, x2: 130, y2: 30, w: 12 },
      ],
      route: "35,100 130,100 130,55",
      pin: { x: 35, y: 100 },
    }),
    streetMap({
      blocks: [
        { x: 20, y: 30, w: 50, h: 50 }, { x: 80, y: 30, w: 50, h: 50 }, { x: 140, y: 30, w: 80, h: 50 },
        { x: 20, y: 90, w: 50, h: 50 }, { x: 80, y: 90, w: 50, h: 50 }, { x: 140, y: 90, w: 80, h: 50 },
      ],
      streets: [
        { x1: 35, y1: 100, x2: 200, y2: 100, w: 12 },
        { x1: 130, y1: 100, x2: 130, y2: 30, w: 12 },
      ],
      route: "35,100 130,100 130,30",
      pin: { x: 130, y: 30 },
    }),
    streetMap({
      blocks: [
        { x: 20, y: 30, w: 50, h: 50 }, { x: 80, y: 30, w: 50, h: 50 }, { x: 140, y: 30, w: 80, h: 50 },
        { x: 20, y: 90, w: 50, h: 50 }, { x: 80, y: 90, w: 50, h: 50 }, { x: 140, y: 90, w: 80, h: 50 },
      ],
      streets: [
        { x1: 35, y1: 100, x2: 200, y2: 100, w: 12 },
        { x1: 130, y1: 100, x2: 130, y2: 30, w: 12 },
      ],
      route: "35,100 130,100 130,140",
      pin: { x: 130, y: 140 },
    }),
  ],
  "foire-01": [
    fairMap({ route: "120,158 120,130 90,100 56,86", pin: { x: 56, y: 86 }, cameraCell: 3, fountainCell: 4 }),
    fairMap({ route: "120,158 120,130 120,100 56,86", pin: { x: 56, y: 86 }, cameraCell: 3, fountainCell: 4 }),
    fairMap({ route: "120,158 120,130 170,100 170,86", pin: { x: 170, y: 86 }, cameraCell: 3, fountainCell: 4 }),
  ],
};

async function main() {
  ensureDir(OUT_DIR);
  const suffixes = ["a", "b", "c"];
  let count = 0;
  for (const [prefix, variants] of Object.entries(MAPS)) {
    for (let i = 0; i < variants.length; i++) {
      const name = `${prefix}-${suffixes[i]}`;
      const svgPath = path.join(OUT_DIR, `${name}.svg`);
      const webpPath = path.join(OUT_DIR, `${name}.webp`);
      fs.writeFileSync(svgPath, variants[i]);
      await sharp(fs.readFileSync(svgPath), { density: 150 })
        .resize(480, 360, { fit: "inside", withoutEnlargement: false })
        .webp({ quality: 88 })
        .toFile(webpPath);
      fs.unlinkSync(svgPath);
      count++;
    }
  }
  console.log(`Generated ${count} orientation map WebP files in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
