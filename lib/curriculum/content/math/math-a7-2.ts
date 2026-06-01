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
  exercisePool: [
    { id: "a7-2-ep01", promptFr: "Comparez −2 et +3 avec < ou >.", type: "short_text", acceptable: ["<"] },
    { id: "a7-2-ep02", promptFr: "Comparez −5 et −2 avec < ou >.", type: "short_text", acceptable: ["<"] },
    { id: "a7-2-ep03", promptFr: "Quel est le plus grand : −100 ou −10 ?", type: "number", acceptable: ["-10"] },
    { id: "a7-2-ep04", promptFr: "Comparez −7 et 0 avec < ou >.", type: "short_text", acceptable: ["<"] },
    { id: "a7-2-ep05", promptFr: "Comparez +3 et −3 avec < ou >.", type: "short_text", acceptable: [">"] },
    { id: "a7-2-ep06", promptFr: "Quel est le plus grand : −1 ou −50 ?", type: "number", acceptable: ["-1"] },
    { id: "a7-2-ep07", promptFr: "Quel est le plus petit : +2 ou −8 ?", type: "number", acceptable: ["-8"] },
    { id: "a7-2-ep08", promptFr: "Comparez −0,5 et −1 avec < ou > (−0,5 est plus proche de 0).", type: "short_text", acceptable: [">"] },
    { id: "a7-2-ep09", promptFr: "Classez du plus petit au plus grand : −3 ; +2 ; 0. Écrivez les séparés par des points-virgules.", type: "short_text", acceptable: ["-3 ; 0 ; 2", "-3;0;2", "-3 ; 0 ; +2"] },
    { id: "a7-2-ep10", promptFr: "Comparez −20 et −5 avec < ou >.", type: "short_text", acceptable: ["<"] },
    { id: "a7-2-ep11", promptFr: "Le nombre −4 est-il plus grand ou plus petit que −10 ?", type: "short_text", acceptable: ["plus grand", "grand"] },
    { id: "a7-2-ep12", promptFr: "Quel est le plus grand : −200 ou +1 ?", type: "number", acceptable: ["1", "+1"] },
  ],
  poolSize: 5,
};
