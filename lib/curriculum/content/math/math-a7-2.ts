import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "A7-2",
  submoduleCode: "A7.2",
  theory: {
    title: { fr: "Comparer les relatifs", en: "Comparing relative numbers", ar: "مقارنة الأعداد النسبية", fa: "مقایسه اعداد نسبی", ti: "ናይ ኣካባቢ ቁጽርታት ምውድዳር", uk: "Порівняння відносних чисел" },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Comparer deux nombres relatifs", black: true },
      { type: "rule", titleFr: "", itemsFr: [
        "Tout nombre **négatif** est toujours plus petit qu'un nombre **positif**.",
        "Entre deux négatifs : le **plus grand** est le plus proche de 0.",
      ] },
      { type: "plain", fr: "" },
      { type: "heading", fr: "Exemples" },
      { type: "table",
        headersFr: ["Comparaison", "Résultat", "Raison"],
        accentHeader: true,
        rows: [
          ["**−**2 et +3", "**−**2 < +3", "négatif < positif"],
          ["**−**452 et +1", "**−**452 < +1", "négatif < positif"],
          ["**−**5 et **−**2", "**−**5 < **−**2", "−2 est plus proche de 0"],
          ["**−**517 et **−**14", "**−**517 < **−**14", "−14 est plus proche de 0"],
        ],
      },
      { type: "plain", fr: "" },
      { type: "heading", fr: "Sur la droite numérique", black: true },
      { type: "section", labelFr: "", itemsFr: [
        "Un nombre est **plus grand** que tous les nombres à sa gauche.",
        "Un nombre est **plus petit** que tous les nombres à sa droite.",
      ] },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
