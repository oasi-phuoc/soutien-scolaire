import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_7_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-7",
    submoduleCode: "G3.7",
    theory: {
      title: {
        fr: "Figures composées",
      },
      paragraphs: {
        fr: [
          "Une figure composée est formée de plusieurs figures simples. On calcule son aire en additionnant les aires des parties.",
          "Méthode : (1) identifier les figures simples qui composent la figure ; (2) calculer l'aire de chaque partie ; (3) additionner.",
          "Exemple : un stade (rectangle + deux demi-cercles) = rectangle + disque complet.",
          "Astuce : dessiner les figures simples séparément pour éviter les erreurs.",
        ],
      },
    },
    exercises: [
      { id: "g3-7-e1", promptFr: "Figure : rectangle 6×4 cm + triangle base 6 cm hauteur 3 cm. Aire totale = ?", type: "number", acceptable: ["33"] },
      { id: "g3-7-e2", promptFr: "Demi-disque de rayon 5 cm (π ≈ 3,14). Aire = ?", type: "number", acceptable: ["39,25", "39.25"] },
      { id: "g3-7-e3", promptFr: "Carré 8×8 cm + demi-cercle de diamètre 8 cm (π ≈ 3,14). Aire totale ≈ ?", type: "number", acceptable: ["89,12", "89.12"] },
      { id: "g3-7-e4", promptFr: "Deux rectangles 5×3 cm et 4×2 cm côte à côte. Aire totale = ?", type: "number", acceptable: ["23"] },
      { id: "g3-7-e5", promptFr: "Rectangle 10×6 cm avec triangle intérieur de base 10 et hauteur 4 coupé. Aire restante = ?", type: "number", acceptable: ["40"] },
    ],
  };
