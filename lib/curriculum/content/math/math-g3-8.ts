import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_8_LESSON: MathSubmoduleLesson = {
  submoduleId: "G3-8",
  submoduleCode: "G3.8",
  theory: {
    title: { fr: "Figures composées" },
    blocks: [
      { type: "heading", fr: "Figures composées", black: true },
      {
        type: "plain",
        fr: "Une **figure composée** est formée de plusieurs figures simples assemblées. On calcule son aire en **additionnant** les aires de chaque partie.",
      },

      { type: "rule", titleFr: "Méthode", itemsFr: ["A_totale = A₁ + A₂ + A₃ + …"] },

      { type: "highlight", fr: "Démarche" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "**1.** Identifier et dessiner les figures simples qui composent la figure.",
          "**2.** Calculer l'aire de chaque partie séparément.",
          "**3.** Additionner toutes les aires.",
        ],
      },

      {
        type: "svg",
        markup: `<svg viewBox='0 0 180 165' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:240px;display:block;margin:0 auto'>
  <rect x='30' y='85' width='120' height='70' fill='var(--color-accent-alg)' fill-opacity='0.18' stroke='var(--color-accent-alg)' stroke-width='2.5'/>
  <polygon points='30,85 150,85 90,20' fill='#f97316' fill-opacity='0.18' stroke='#f97316' stroke-width='2.5' stroke-linejoin='round'/>
  <text x='90' y='130' text-anchor='middle' font-size='11' fill='var(--color-accent-alg)' font-weight='bold' font-family='sans-serif'>Rectangle</text>
  <text x='90' y='62' text-anchor='middle' font-size='11' fill='#f97316' font-weight='bold' font-family='sans-serif'>Triangle</text>
</svg>`,
        captionFr: "Maison = rectangle + triangle → A = A_rect + A_tri",
      },

      { type: "highlight", fr: "Exemple" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Rectangle 6 × 4 cm + triangle base 6, hauteur 3 cm :",
          "A_rect = 6 × 4 = 24 cm²",
          "A_tri = (6 × 3) ÷ 2 = 9 cm²",
          "A_totale = 24 + 9 = **33 cm²**",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [
    { id: "g3-8-e1", promptFr: "Figure : rectangle 6×4 cm + triangle base 6 cm hauteur 3 cm. Aire totale = ?", type: "number", acceptable: ["33"] },
    { id: "g3-8-e2", promptFr: "Demi-disque de rayon 5 cm (π ≈ 3,14). Aire = ?", type: "number", acceptable: ["39,25", "39.25"] },
    { id: "g3-8-e3", promptFr: "Carré 8×8 cm + demi-cercle de diamètre 8 cm (π ≈ 3,14). Aire totale ≈ ?", type: "number", acceptable: ["89,12", "89.12"] },
    { id: "g3-8-e4", promptFr: "Deux rectangles 5×3 cm et 4×2 cm côte à côte. Aire totale = ?", type: "number", acceptable: ["23"] },
    { id: "g3-8-e5", promptFr: "Rectangle 10×6 cm avec triangle intérieur de base 10 et hauteur 4 coupé. Aire restante = ?", type: "number", acceptable: ["40"] },
  ],
};
