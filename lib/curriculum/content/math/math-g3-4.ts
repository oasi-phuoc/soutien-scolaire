import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-4",
    submoduleCode: "G3.4",
    theory: {
      title: {
        fr: "Aire du parallélogramme",
      },
      paragraphs: {
        fr: [
          "Formule : A = base × hauteur.",
          "La hauteur est la distance perpendiculaire entre deux côtés parallèles (pas la longueur du côté oblique).",
          "Exemple : parallélogramme de base 10 cm et hauteur 4 cm → A = 10 × 4 = 40 cm².",
          "Astuce : le parallélogramme peut être transformé en rectangle de même base et hauteur (en découpant un triangle et le déplaçant).",
        ],
      },
    },
    exercises: [
      { id: "g3-4-e1", promptFr: "Aire d'un parallélogramme : base 7 cm, hauteur 4 cm.", type: "number", acceptable: ["28"] },
      { id: "g3-4-e2", promptFr: "Aire d'un parallélogramme : base 11 cm, hauteur 5 cm.", type: "number", acceptable: ["55"] },
      { id: "g3-4-e3", promptFr: "Parallélogramme d'aire 48 cm² et base 8 cm. Hauteur = ?", type: "number", acceptable: ["6"] },
      { id: "g3-4-e4", promptFr: "Un rectangle est-il un cas particulier de parallélogramme ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g3-4-e5", promptFr: "Aire d'un parallélogramme : base 9 cm, hauteur 6 cm.", type: "number", acceptable: ["54"] },
    ],
  };
