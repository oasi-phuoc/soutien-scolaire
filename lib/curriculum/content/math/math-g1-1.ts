import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_1_LESSON: MathSubmoduleLesson = {
  submoduleId: "G1-1",
  submoduleCode: "G1.1",
  theory: {
    title: { fr: "" },
    blocks: [
      { type: "heading", fr: "Les polygones réguliers", black: true },

      {
        type: "plain",
        fr: "Un **polygone** est une figure plane fermée formée de segments appelés **côtés**. Les points de jonction des côtés sont les **sommets**.",
      },

      {
        type: "table",
        headersFr: ["Nom", "Côtés", "Somme des angles"],
        accentHeader: true,
        colAligns: ["left", "center", "center"],
        rows: [
          ["Triangle", "3", "180°"],
          ["Quadrilatère", "4", "360°"],
          ["Pentagone", "5", "540°"],
          ["Hexagone", "6", "720°"],
        ],
      },

      { type: "plain", fr: "" },

      {
        type: "plain",
        fr: "Tous les **côtés sont égaux** et tous les **angles sont égaux**.",
      },

      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <polygon points='40,8 74,72 6,72' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
            captionFr: "Triangle",
          },
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <rect x='12' y='12' width='56' height='56' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
</svg>`,
            captionFr: "Carré",
          },
        ],
      },

      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <rect x='4' y='24' width='72' height='32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
</svg>`,
            captionFr: "Rectangle",
          },
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <polygon points='40,8 72,40 40,72 8,40' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
            captionFr: "Losange",
          },
        ],
      },

      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <polygon points='10,65 70,65 55,15 25,15' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
            captionFr: "Trapèze",
          },
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <polygon points='12,65 58,65 68,15 22,15' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
            captionFr: "Parallélogramme",
          },
        ],
      },

      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <polygon points='40,8 72,32 60,70 20,70 8,32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
            captionFr: "Pentagone",
          },
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <polygon points='40,6 68,22 68,58 40,74 12,58 12,22' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
            captionFr: "Hexagone",
          },
        ],
      },

      { type: "plain", fr: "" },

      { type: "heading", fr: "Le cercle", black: true },

      {
        type: "plain",
        fr: "Un **cercle** est l'ensemble de tous les points situés à la même distance d'un point fixe appelé **centre** (O).",
      },

      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <circle cx='40' cy='40' r='32' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
</svg>`,
            captionFr: "Cercle",
          },
          {
            markup: `<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <path d='M 8,50 A 32,32 0 0,1 72,50 Z' fill='var(--color-accent-alg)' fill-opacity='0.14' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
</svg>`,
            captionFr: "Demi-cercle",
          },
        ],
      },

      { type: "plain", fr: "" },

      { type: "highlight", fr: "Vocabulaire du cercle" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "**Rayon (r)** : distance du centre à n'importe quel point du cercle.",
          "**Diamètre (d)** : segment passant par le centre ; d = 2r.",
        ],
      },

      {
        type: "svg",
        markup: `<svg viewBox='0 0 220 155' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:280px;display:block;margin:0 auto'>
  <circle cx='110' cy='78' r='55' fill='var(--color-accent-alg)' fill-opacity='0.08' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <circle cx='110' cy='78' r='3' fill='var(--color-accent-alg)'/>
  <line x1='110' y1='23' x2='110' y2='133' stroke='var(--color-accent-alg)' stroke-width='2' opacity='0.7'/>
  <text x='116' y='82' font-size='11' fill='var(--color-accent-alg)' opacity='0.9' font-family='sans-serif' font-weight='bold'>d</text>
  <line x1='110' y1='78' x2='165' y2='78' stroke='#f97316' stroke-width='2.5'/>
  <text x='133' y='70' font-size='11' fill='#f97316' font-weight='bold' font-family='sans-serif'>r</text>
</svg>`,
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [
    {
      id: "g1-1-e1",
      promptFr: "Comment s'appelle un polygone à 5 côtés ?",
      type: "short_text",
      acceptable: ["pentagone"],
    },
    {
      id: "g1-1-e2",
      promptFr: "Un cercle a un rayon de 7 cm. Quel est son diamètre (en cm) ?",
      type: "number",
      acceptable: ["14"],
    },
    {
      id: "g1-1-e3",
      promptFr: "Un hexagone a combien de côtés ?",
      type: "number",
      acceptable: ["6"],
    },
    {
      id: "g1-1-e4",
      promptFr: "Un cercle a un diamètre de 10 cm. Quel est son rayon (en cm) ?",
      type: "number",
      acceptable: ["5"],
    },
    {
      id: "g1-1-e5",
      promptFr: "Calcule la somme des angles intérieurs d'un pentagone (en °).",
      type: "number",
      acceptable: ["540"],
    },
  ],
};
