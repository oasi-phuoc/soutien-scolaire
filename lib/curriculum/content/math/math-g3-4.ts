import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "G3-4",
  submoduleCode: "G3.4",
  theory: {
    title: { fr: "Aire du parallélogramme" },
    blocks: [
      { type: "heading", fr: "Parallélogramme", black: true },
      {
        type: "plain",
        fr: "L'aire d'un parallélogramme dépend de sa **base (b)** et de sa **hauteur (h)**.",
      },

      { type: "rule", titleFr: "Formule", itemsFr: ["A = b × h"] },

      { type: "highlight", fr: "Attention : hauteur ≠ côté oblique" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "La **hauteur h** est la distance **perpendiculaire** entre les deux bases parallèles.",
          "Ce n'est **pas** la longueur du côté oblique du parallélogramme.",
        ],
      },

      {
        type: "svg",
        markup: `<svg viewBox='0 0 200 110' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:280px;display:block;margin:0 auto'>
  <polygon points='20,85 155,85 175,25 40,25' fill='var(--color-accent-alg)' fill-opacity='0.18' stroke='var(--color-accent-alg)' stroke-width='2.5' stroke-linejoin='round'/>
  <line x1='155' y1='25' x2='155' y2='85' stroke='#f97316' stroke-width='2' stroke-dasharray='5,3'/>
  <rect x='145' y='75' width='10' height='10' fill='none' stroke='#f97316' stroke-width='1.5'/>
  <text x='88' y='100' text-anchor='middle' font-size='13' fill='var(--color-accent-alg)' font-weight='bold' font-family='sans-serif'>b</text>
  <text x='165' y='57' font-size='13' fill='#f97316' font-weight='bold' font-family='sans-serif'>h</text>
</svg>`,
        captionFr: "Parallélogramme — hauteur h perpendiculaire à la base b",
      },

      { type: "highlight", fr: "Exemple" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Parallélogramme base 10 cm, hauteur 4 cm :",
          "A = 10 × 4 = **40 cm²**",
        ],
      },

      { type: "highlight", fr: "Intuition" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On peut couper un triangle à une extrémité et le recoller de l'autre côté pour obtenir un **rectangle** de même base et hauteur.",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [
    { id: "g3-4-e1", promptFr: "Aire d'un parallélogramme : base 7 cm, hauteur 4 cm.", type: "number", acceptable: ["28"] },
    { id: "g3-4-e2", promptFr: "Aire d'un parallélogramme : base 11 cm, hauteur 5 cm.", type: "number", acceptable: ["55"] },
    { id: "g3-4-e3", promptFr: "Parallélogramme d'aire 48 cm² et base 8 cm. Hauteur = ?", type: "number", acceptable: ["6"] },
    { id: "g3-4-e4", promptFr: "Un rectangle est-il un cas particulier de parallélogramme ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    { id: "g3-4-e5", promptFr: "Aire d'un parallélogramme : base 9 cm, hauteur 6 cm.", type: "number", acceptable: ["54"] },
  ],
};
