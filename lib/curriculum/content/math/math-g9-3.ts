import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-3",
    submoduleCode: "G9.3",
    theory: {
      title: {
        fr: "Aires latérale et totale",
      },
      paragraphs: {
        fr: [
          "L'aire latérale est la somme des faces latérales (sans les bases). L'aire totale inclut également les bases.",
          "Pavé droit (L × l × h) : Aire totale = 2(Ll + Lh + lh).",
          "Cylindre (r, h) : Aire latérale = 2πrh. Aire totale = 2πr² + 2πrh = 2πr(r + h).",
          "Prisme (base B, périmètre p, hauteur h) : Aire latérale = p × h. Aire totale = p × h + 2B.",
        ],
      },
    },
    exercises: [
      { id: "g8-3-e1", promptFr: "Pavé droit 3×4×5 cm. Aire totale = 2(3×4 + 3×5 + 4×5) = ?", type: "number", acceptable: ["94"] },
      { id: "g8-3-e2", promptFr: "Cube de côté 4 cm. Aire totale = ?", type: "number", acceptable: ["96"] },
      { id: "g8-3-e3", promptFr: "Cylindre r=3 cm, h=5 cm. Aire latérale = 2π×3×5 ≈ ? (π≈3,14)", type: "number", acceptable: ["94,2", "94.2"] },
      { id: "g8-3-e4", promptFr: "Cylindre r=2 cm, h=6 cm. Aire totale = 2π×2×(2+6) ≈ ? (π≈3,14)", type: "number", acceptable: ["100,48", "100.48"] },
      { id: "g8-3-e5", promptFr: "Prisme triangulaire : aire de la base 6 cm², périmètre base 12 cm, hauteur 5 cm. Aire totale = ?", type: "number", acceptable: ["72"] },
    ],
  };
