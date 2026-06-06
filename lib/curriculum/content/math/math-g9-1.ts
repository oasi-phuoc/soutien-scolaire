import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-1",
    submoduleCode: "G9.1",
    theory: {
      title: {
        fr: "Repère cartésien",
      },
      paragraphs: {
        fr: [
          "Le repère cartésien est formé de deux axes perpendiculaires : l'axe des abscisses (Ox, horizontal) et l'axe des ordonnées (Oy, vertical). Ils se croisent en O(0,0).",
          "Les quadrants : quadrant I (x>0, y>0) ; quadrant II (x<0, y>0) ; quadrant III (x<0, y<0) ; quadrant IV (x>0, y<0).",
          "Chaque point est représenté par ses coordonnées (x ; y). L'abscisse x est lue en premier (horizontal), l'ordonnée y en second (vertical).",
          "L'unité de mesure doit être la même sur les deux axes pour ne pas déformer les figures.",
        ],
      },
    },
    exercises: [
      { id: "g9-1-e1", promptFr: "Quelle est l'abscisse du point (4 ; −3) ?", type: "number", acceptable: ["4"] },
      { id: "g9-1-e2", promptFr: "Quelle est l'ordonnée du point (−2 ; 7) ?", type: "number", acceptable: ["7"] },
      { id: "g9-1-e3", promptFr: "Le point (−3 ; 5) est dans quel quadrant ? (I/II/III/IV)", type: "short_text", acceptable: ["II"] },
      { id: "g9-1-e4", promptFr: "Le point (2 ; −4) est dans quel quadrant ?", type: "short_text", acceptable: ["IV"] },
      { id: "g9-1-e5", promptFr: "L'origine O a quelles coordonnées ?", type: "short_text", acceptable: ["(0;0)", "(0 ; 0)"] },
    ],
  };
