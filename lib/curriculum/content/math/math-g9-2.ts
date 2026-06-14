import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-2",
    submoduleCode: "G9.2",
    theory: {
      title: {
        fr: "Patrons de solides",
      },
      paragraphs: {
        fr: [
          "Un patron est une figure plane que l'on peut découper et replier pour former un solide. Il montre toutes les faces du solide à plat.",
          "Patron d'un cube : 6 carrés disposés en croix (ou autres configurations valides). Il en existe 11 différents.",
          "Patron d'un cylindre : deux cercles + un rectangle (la hauteur × la circonférence).",
          "Patron d'une pyramide à base carrée : un carré central + 4 triangles isocèles.",
        ],
      },
    },
    exercises: [
      { id: "g8-2-e1", promptFr: "Un patron de cube comporte combien de carrés ?", type: "number", acceptable: ["6"] },
      { id: "g8-2-e2", promptFr: "Le patron d'un cylindre contient combien de cercles ?", type: "number", acceptable: ["2"] },
      { id: "g8-2-e3", promptFr: "Le patron d'une pyramide à base carrée comporte combien de triangles ?", type: "number", acceptable: ["4"] },
      { id: "g8-2-e4", promptFr: "Combien de patrons différents peut-on faire pour un cube ?", type: "number", acceptable: ["11"] },
      { id: "g8-2-e5", promptFr: "Le patron d'un prisme triangulaire comporte combien de rectangles ?", type: "number", acceptable: ["3"] },
    ],
  };
