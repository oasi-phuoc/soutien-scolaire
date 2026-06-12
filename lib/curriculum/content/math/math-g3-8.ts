import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_8_LESSON: MathSubmoduleLesson = {
  submoduleId: "G3-8",
  submoduleCode: "G3.8",
  theory: {
    title: { fr: "Figures à trous" },
    blocks: [
      { type: "heading", fr: "Figures à trous", black: true },
      {
        type: "plain",
        fr: "Une **figure à trou** est une grande figure dont on a **retiré** une figure intérieure. On calcule l'aire en **soustrayant**.",
      },

      { type: "rule", titleFr: "Formule", itemsFr: ["A = A_grande − A_trou"] },

      {
        type: "svg_row",
        items: [
          {
            markup: `<svg viewBox='0 0 120 100' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <path d='M 10,10 L 110,10 L 110,90 L 10,90 Z M 35,30 L 85,30 L 85,70 L 35,70 Z' fill='var(--color-accent-alg)' fill-opacity='0.20' fill-rule='evenodd' stroke='var(--color-accent-alg)' stroke-width='2'/>
</svg>`,
            captionFr: "Cadre rectangulaire",
          },
          {
            markup: `<svg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <circle cx='60' cy='60' r='50' fill='var(--color-accent-alg)' fill-opacity='0.20' stroke='var(--color-accent-alg)' stroke-width='2'/>
  <circle cx='60' cy='60' r='25' fill='white' stroke='var(--color-accent-alg)' stroke-width='2'/>
</svg>`,
            captionFr: "Anneau circulaire",
          },
        ],
      },

      { type: "highlight", fr: "Exemple 1 — cadre rectangulaire" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Extérieur 12 × 8 cm, intérieur 8 × 4 cm :",
          "A = (12 × 8) − (8 × 4) = 96 − 32 = **64 cm²**",
        ],
      },

      { type: "highlight", fr: "Exemple 2 — anneau" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Grand disque r = 6 cm, trou r = 3 cm :",
          "A = π × 6² − π × 3² = π(36 − 9) = 27π ≈ **84,8 cm²**",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [
    { id: "g3-8-e1", promptFr: "Cadre : extérieur 10×8 cm, intérieur 6×4 cm. Aire du cadre = ?", type: "number", acceptable: ["56"] },
    { id: "g3-8-e2", promptFr: "Carré 10×10 cm avec trou carré 4×4 cm. Aire restante = ?", type: "number", acceptable: ["84"] },
    { id: "g3-8-e3", promptFr: "Anneau : rayon extérieur 5 cm, rayon intérieur 3 cm (π ≈ 3,14). Aire ≈ ?", type: "number", acceptable: ["50,24", "50.24"] },
    { id: "g3-8-e4", promptFr: "Rectangle 12×7 cm avec disque de rayon 2 cm découpé (π ≈ 3,14). Aire ≈ ?", type: "number", acceptable: ["71,44", "71.44"] },
    { id: "g3-8-e5", promptFr: "Grand rectangle 20×10 cm, trou rectangle 5×4 cm. Aire = ?", type: "number", acceptable: ["180"] },
  ],
};
