import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-6",
    submoduleCode: "G1.6",
    theory: {
      title: {
        fr: "Angles particuliers",
      },
      paragraphs: {
        fr: [
          "Angles formés par deux droites parallèles coupées par une sécante (transversale) : on définit plusieurs paires d'angles remarquables.",
          "Angles alternes-internes : de part et d'autre de la transversale, entre les parallèles. Ils sont égaux.",
          "Angles correspondants : même position par rapport à la transversale, de même côté des parallèles. Ils sont égaux.",
          "Angles co-internes (ou conjugués) : entre les parallèles, du même côté de la transversale. Leur somme est 180°.",
        ],
      },
    },
    exercises: [
      { id: "g1-6-e1", promptFr: "Deux droites parallèles coupées par une transversale. Un angle correspond est 65°. L'angle correspondant vaut ?", type: "number", acceptable: ["65"] },
      { id: "g1-6-e2", promptFr: "Deux droites parallèles. Les angles alternes-internes sont-ils égaux ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g1-6-e3", promptFr: "Deux co-internes : l'un est 70°. L'autre vaut ?", type: "number", acceptable: ["110"] },
      { id: "g1-6-e4", promptFr: "Les angles correspondants sont-ils égaux ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g1-6-e5", promptFr: "Dans un triangle, deux angles sont 60° et 80°. Le troisième vaut ?", type: "number", acceptable: ["40"] },
    ],
  };
