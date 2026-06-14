import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-1",
    submoduleCode: "G9.1",
    theory: {
      title: {
        fr: "Reconnaître les solides",
      },
      paragraphs: {
        fr: [
          "Les solides (ou polyèdres) sont des figures à trois dimensions. Les principaux : cube, pavé droit (cuboid), prisme, pyramide, cylindre, cône, sphère.",
          "Cube : 6 faces carrées égales, 8 sommets, 12 arêtes. Pavé droit : 6 faces rectangulaires, 8 sommets, 12 arêtes.",
          "Cylindre : deux bases circulaires et une surface latérale courbe. Cône : une base circulaire et un apex. Sphère : surface courbe équidistante d'un centre.",
          "Prisme : deux bases polygonales parallèles reliées par des rectangles. Pyramide : une base polygonale et des triangles convergeant en un sommet.",
        ],
      },
    },
    exercises: [
      { id: "g8-1-e1", promptFr: "Combien de faces a un cube ?", type: "number", acceptable: ["6"] },
      { id: "g8-1-e2", promptFr: "Quel solide a une base circulaire et un apex ?", type: "short_text", acceptable: ["cône", "cone"] },
      { id: "g8-1-e3", promptFr: "Combien d'arêtes a un cube ?", type: "number", acceptable: ["12"] },
      { id: "g8-1-e4", promptFr: "Quel solide a toute sa surface équidistante d'un centre ?", type: "short_text", acceptable: ["sphère", "sphere"] },
      { id: "g8-1-e5", promptFr: "Un prisme triangulaire a combien de faces au total ?", type: "number", acceptable: ["5"] },
    ],
  };
