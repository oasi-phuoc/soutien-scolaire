import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-4",
    submoduleCode: "G1.4",
    theory: {
      title: {
        fr: "Quadrilatères",
      },
      paragraphs: {
        fr: [
          "Un quadrilatère est un polygone à 4 côtés. La somme de ses angles intérieurs est 360°.",
          "Types de quadrilatères : carré (4 côtés égaux, 4 angles droits) ; rectangle (4 angles droits, côtés opposés égaux) ; losange (4 côtés égaux) ; parallélogramme (côtés opposés parallèles et égaux) ; trapèze (une paire de côtés parallèles).",
          "Diagonales : le carré et le rectangle ont des diagonales de même longueur. Le losange a des diagonales perpendiculaires.",
          "Hiérarchie : le carré est un cas particulier du rectangle qui est un cas particulier du parallélogramme.",
        ],
      },
    },
    exercises: [
      { id: "g1-4-e1", promptFr: "Quel quadrilatère a 4 côtés égaux ET 4 angles droits ?", type: "short_text", acceptable: ["carré"] },
      { id: "g1-4-e2", promptFr: "Un losange a-t-il obligatoirement des angles droits ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g1-4-e3", promptFr: "Quel quadrilatère a exactement une paire de côtés parallèles ?", type: "short_text", acceptable: ["trapèze", "trapeze"] },
      { id: "g1-4-e4", promptFr: "Tous les rectangles sont-ils des carrés ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g1-4-e5", promptFr: "Tous les carrés sont-ils des rectangles ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
