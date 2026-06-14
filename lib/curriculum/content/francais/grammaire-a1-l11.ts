import type { GrammarLesson } from "../../grammar-data";

const C = "#E8604A"; // orange-red — l'objet / la personne
const T = "#1BA8A8"; // teal — la référence spatiale

const svg = (body: string) =>
  `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto">${body}</svg>`;

const rect = (x: number, y: number, w: number, h: number, r = 3, color = T) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${color}"/>`;

const circle = (cx: number, cy: number, r: number, color = C) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/>`;

const PREPS = [
  // ── Verticals ────────────────────────────────────────────────────────────────
  {
    label: "sur",
    svg: svg(
      rect(12, 46, 56, 18) +
      circle(40, 33, 13)
    ),
  },
  {
    label: "au-dessus de",
    svg: svg(
      rect(12, 54, 56, 14) +
      circle(40, 23, 13)
    ),
  },
  {
    label: "sous",
    svg: svg(
      rect(12, 16, 56, 18) +
      circle(40, 47, 13)
    ),
  },
  {
    label: "en-dessous de",
    svg: svg(
      rect(12, 10, 56, 16) +
      circle(40, 57, 13)
    ),
  },

  // ── Inside / outside ─────────────────────────────────────────────────────────
  {
    label: "dans",
    svg: svg(
      `<rect x="8" y="8" width="64" height="64" rx="4" fill="none" stroke="${T}" stroke-width="5"/>` +
      circle(40, 40, 18)
    ),
  },
  {
    label: "à l'extérieur de",
    svg: svg(
      `<rect x="28" y="10" width="44" height="60" rx="4" fill="none" stroke="${T}" stroke-width="5"/>` +
      circle(12, 40, 10)
    ),
  },

  // ── Front / back ─────────────────────────────────────────────────────────────
  {
    label: "devant",
    svg: svg(
      rect(28, 18, 44, 44) +
      circle(32, 40, 16)
    ),
  },
  {
    label: "derrière",
    svg: svg(
      circle(50, 40, 16) +
      rect(8, 18, 44, 44)
    ),
  },

  // ── Between / among ──────────────────────────────────────────────────────────
  {
    label: "entre",
    svg: svg(
      rect(4, 22, 14, 36) +
      rect(62, 22, 14, 36) +
      circle(40, 40, 14)
    ),
  },
  {
    label: "parmi",
    svg: svg(
      circle(20, 20, 9, T) +
      circle(46, 13, 9, T) +
      circle(65, 22, 9, T) +
      circle(10, 44, 9, T) +
      circle(68, 44, 9, T) +
      circle(18, 65, 9, T) +
      circle(52, 65, 9, T) +
      circle(38, 40, 14)
    ),
  },

  // ── Side / distance ──────────────────────────────────────────────────────────
  {
    label: "à côté de",
    svg: svg(
      rect(40, 18, 34, 44) +
      circle(25, 40, 14)
    ),
  },
  {
    label: "en face de",
    svg: svg(
      circle(16, 40, 13) +
      circle(64, 40, 13, T) +
      `<line x1="31" y1="40" x2="49" y2="40" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="3,3"/>`
    ),
  },
  {
    label: "près de",
    svg: svg(
      rect(46, 20, 28, 40) +
      circle(24, 40, 12)
    ),
  },
  {
    label: "loin de",
    svg: svg(
      rect(56, 28, 20, 24, 2) +
      circle(10, 40, 9) +
      `<line x1="21" y1="40" x2="54" y2="40" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="4,3"/>`
    ),
  },

  // ── Against / at ─────────────────────────────────────────────────────────────
  {
    label: "contre",
    svg: svg(
      rect(40, 15, 32, 50) +
      circle(26, 40, 14)
    ),
  },
  {
    label: "chez (+ personne)",
    svg: svg(
      `<polygon points="8,42 40,12 72,42" fill="${T}"/>` +
      rect(16, 40, 48, 32, 2) +
      circle(40, 55, 11)
    ),
  },
];

export const A1_GR_L11: GrammarLesson = {
  slug: "a1-gr-l11",
  code: "R2.5",
  level: "A1",
  title: "Les prépositions de lieu",
  theory: [
    // ── Titre ────────────────────────────────────────────────────────────────────
    { type: "heading", text: "Les prépositions de lieu" },

    {
      type: "plain_list",
      items: [
        "Les prépositions de lieu indiquent où se trouve quelque chose ou quelqu'un par rapport à un autre objet ou endroit.",
      ],
    },

    // ── Illustrations ─────────────────────────────────────────────────────────
    { type: "illus_cards", items: PREPS, cols: 4 },

    // ── Exemples ─────────────────────────────────────────────────────────────────
    {
      type: "highlight",
      label: "Exemples en phrases",
      items: [
        "Le livre est {a}sur{/a} la table.",
        "Le chat est {a}sous{/a} la chaise.",
        "Il attend {a}devant{/a} l'école.",
        "Le jardin est {a}derrière{/a} la maison.",
        "La banque est {a}entre{/a} la poste et la pharmacie.",
        "La boulangerie est {a}à côté de{/a} la pharmacie.",
        "L'hôtel est {a}en face de{/a} la gare.",
        "Elle habite {a}chez{/a} ses parents.",
      ],
    },

    // ── Contractions ─────────────────────────────────────────────────────────────
    { type: "heading", text: "Articles contractés", sub: true },

    {
      type: "grid",
      headers: ["Contraction", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}à + le → au{/a}", "Je vais {a}au{/a} cinéma."],
        ["{a}à + les → aux{/a}", "Je parle {a}aux{/a} enfants."],
        ["{a}de + le → du{/a}", "Je viens {a}du{/a} marché. (loin {a}du{/a} centre)"],
        ["{a}de + les → des{/a}", "près {a}des{/a} magasins"],
      ],
    },

    {
      type: "note",
      text: "à + la et de + la ne se contractent pas.\nJe vais à la pharmacie ✅ — à la boulangerie ✅\nJe viens de la gare ✅ — loin de la ville ✅",
    },
  ],
  exercises: [],
};
