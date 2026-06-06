import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-3",
    submoduleCode: "G3.3",
    theory: {
      title: {
        fr: "Aire du triangle",
      },
      paragraphs: {
        fr: [
          "Formule : A = (base × hauteur) ÷ 2.",
          "La hauteur est la distance perpendiculaire entre la base et le sommet opposé (pas nécessairement un côté).",
          "Exemple : triangle base 10 cm, hauteur 6 cm → A = (10 × 6) ÷ 2 = 30 cm².",
          "Intuition : le triangle occupe exactement la moitié du rectangle de même base et hauteur.",
        ],
      },
    },
    exercises: [
      { id: "g3-3-e1", promptFr: "Aire d'un triangle : base 8 cm, hauteur 5 cm.", type: "number", acceptable: ["20"] },
      { id: "g3-3-e2", promptFr: "Aire d'un triangle : base 12 cm, hauteur 9 cm.", type: "number", acceptable: ["54"] },
      { id: "g3-3-e3", promptFr: "Triangle d'aire 30 cm² et base 10 cm. Hauteur = ?", type: "number", acceptable: ["6"] },
      { id: "g3-3-e4", promptFr: "Aire d'un triangle rectangle : cathètes 6 et 8 cm.", type: "number", acceptable: ["24"] },
      { id: "g3-3-e5", promptFr: "Triangle équilatéral de côté 6 cm et hauteur 5,2 cm. Aire ≈ ?", type: "number", acceptable: ["15,6", "15.6"] },
    ],
  };
