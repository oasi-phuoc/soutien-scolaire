import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "G1-2",
  submoduleCode: "G1.2",
  theory: {
    title: {
      fr: "Propriétés et symétrie",
    },
    blocks: [
      { type: "heading", fr: "Angles intérieurs d'un polygone", black: true },

      {
        type: "plain",
        fr: "La **somme des angles intérieurs** d'un polygone à n côtés est donnée par la formule :",
      },

      {
        type: "rule",
        titleFr: "Formule",
        itemsFr: ["Somme = (n − 2) × 180°"],
      },

      {
        type: "table",
        headersFr: ["Polygone", "n", "Calcul", "Somme"],
        accentHeader: true,
        colAligns: ["left", "center", "left", "center"],
        rows: [
          ["Triangle", "3", "(3 − 2) × 180°", "180°"],
          ["Quadrilatère", "4", "(4 − 2) × 180°", "360°"],
          ["Pentagone", "5", "(5 − 2) × 180°", "540°"],
          ["Hexagone", "6", "(6 − 2) × 180°", "720°"],
        ],
      },

      { type: "heading", fr: "Symétrie axiale", black: true },

      {
        type: "plain",
        fr: "Une figure possède un **axe de symétrie** si on peut la plier le long d'une droite et que les deux moitiés se superposent exactement.",
      },

      {
        type: "table",
        headersFr: ["Forme", "Axes de symétrie"],
        accentHeader: true,
        colAligns: ["left", "center"],
        rows: [
          ["Triangle équilatéral", "3"],
          ["Triangle isocèle", "1"],
          ["Triangle scalène", "0"],
          ["Rectangle", "2"],
          ["Carré", "4"],
          ["Losange", "2"],
          ["Cercle", "∞ (infinité)"],
        ],
      },

      {
        type: "svg",
        markup: `<svg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:180px;display:block;margin:0 auto'>
  <rect x='20' y='20' width='80' height='80' fill='var(--color-accent-alg)' fill-opacity='0.10' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <line x1='5' y1='60' x2='115' y2='60' stroke='#f97316' stroke-width='1.5' stroke-dasharray='5,3'/>
  <line x1='60' y1='5' x2='60' y2='115' stroke='#f97316' stroke-width='1.5' stroke-dasharray='5,3'/>
  <line x1='12' y1='12' x2='108' y2='108' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='5,3'/>
  <line x1='108' y1='12' x2='12' y2='108' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='5,3'/>
</svg>`,
        captionFr: "Le carré possède 4 axes de symétrie",
      },

      { type: "highlight", fr: "À retenir" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Un carré est un **quadrilatère régulier** : 4 côtés égaux et 4 angles droits.",
          "Un triangle équilatéral a 3 **côtés égaux** et 3 **angles de 60°** chacun.",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [
    {
      id: "g1-2-e1",
      promptFr: "Combien d'axes de symétrie a un carré ?",
      type: "number",
      acceptable: ["4"],
    },
    {
      id: "g1-2-e2",
      promptFr: "Combien d'axes de symétrie a un rectangle (non carré) ?",
      type: "number",
      acceptable: ["2"],
    },
    {
      id: "g1-2-e3",
      promptFr: "Combien d'axes de symétrie a un triangle équilatéral ?",
      type: "number",
      acceptable: ["3"],
    },
    {
      id: "g1-2-e4",
      promptFr: "Une figure avec 0 axe de symétrie est-elle symétrique ? (oui/non)",
      type: "short_text",
      acceptable: ["non"],
    },
    {
      id: "g1-2-e5",
      promptFr: "Combien d'axes de symétrie a un cercle ? (beaucoup/infini/zéro)",
      type: "short_text",
      acceptable: ["infini", "infinité"],
    },
  ],
};
