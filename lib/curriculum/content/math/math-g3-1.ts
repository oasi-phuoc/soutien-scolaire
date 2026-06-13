import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_1_LESSON: MathSubmoduleLesson = {
  submoduleId: "G3-1",
  submoduleCode: "G3.1",
  theory: {
    title: { fr: "Aire du carré" },
    blocks: [
      { type: "heading", fr: "Qu'est-ce que l'aire ?", black: true },
      {
        type: "plain",
        fr: "L'**aire** mesure la **surface intérieure** d'une figure. Elle s'exprime en unités carrées : cm², m², km²…",
      },

      { type: "heading", fr: "Carré", black: true },
      {
        type: "plain",
        fr: "Pour un carré de côté c, l'aire est :",
      },

      { type: "rule", titleFr: "Formule", itemsFr: ["A = c × c = c²"] },

      {
        type: "svg",
        markup: `<svg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:180px;display:block;margin:0 auto'>
  <rect x='20' y='20' width='100' height='100' fill='var(--color-accent-alg)' fill-opacity='0.20' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <line x1='45' y1='20' x2='45' y2='120' stroke='var(--color-accent-alg)' stroke-width='0.6' opacity='0.4'/>
  <line x1='70' y1='20' x2='70' y2='120' stroke='var(--color-accent-alg)' stroke-width='0.6' opacity='0.4'/>
  <line x1='95' y1='20' x2='95' y2='120' stroke='var(--color-accent-alg)' stroke-width='0.6' opacity='0.4'/>
  <line x1='20' y1='45' x2='120' y2='45' stroke='var(--color-accent-alg)' stroke-width='0.6' opacity='0.4'/>
  <line x1='20' y1='70' x2='120' y2='70' stroke='var(--color-accent-alg)' stroke-width='0.6' opacity='0.4'/>
  <line x1='20' y1='95' x2='120' y2='95' stroke='var(--color-accent-alg)' stroke-width='0.6' opacity='0.4'/>
  <text x='70' y='13' text-anchor='middle' font-size='13' fill='#f97316' font-weight='bold' font-family='sans-serif'>c</text>
  <text x='12' y='74' text-anchor='middle' font-size='13' fill='#f97316' font-weight='bold' font-family='sans-serif'>c</text>
</svg>`,
        captionFr: "Carré de côté c — l'aire est la surface colorée",
      },

      { type: "highlight", fr: "Exemple" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["Carré de côté 6 cm :", "A = 6² = **36 cm²**"],
      },

      { type: "highlight", fr: "Retrouver le côté" },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["Si on connaît l'aire : c = √A", "Exemple : A = 49 cm² → c = √49 = **7 cm**"],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [],
};
