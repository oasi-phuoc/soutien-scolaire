import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_3_LESSON: MathSubmoduleLesson = {
  submoduleId: "A7-3",
  submoduleCode: "A7.3",
  theory: {
    title: { fr: "Addition et soustraction des relatifs", en: "Addition and subtraction of relative numbers", ar: "جمع وطرح الأعداد النسبية", fa: "جمع و تفریق اعداد نسبی", ti: "ምደማር ምቅናስ ናይ ኣካባቢ ቁጽርታት", uk: "Додавання та віднімання відносних чисел" },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Addition des relatifs", black: true },
      { type: "highlight", fr: "Mêmes signes → on additionne" },
      { type: "section", labelFr: "Règle", itemsFr: [
        "Additionner les **valeurs absolues** (sans le signe).",
        "Garder le **signe commun** dans le résultat.",
      ] },
      { type: "table",
        headersFr: ["Calcul", "Résultat", "Explication"],
        accentHeader: true,
        rows: [
          ["(**+**6) **+** (**+**3)", "**+**9", "6+3=9, signe +"],
          ["(**−**6) **+** (**−**3)", "**−**9", "6+3=9, signe −"],
        ],
      },
      { type: "plain", fr: "" },
      { type: "highlight", fr: "Signes contraires → on soustrait" },
      { type: "section", labelFr: "Règle", itemsFr: [
        "Soustraire les valeurs absolues.",
        "Le signe du résultat est celui du **plus grand** nombre (en valeur absolue).",
      ] },
      { type: "table",
        headersFr: ["Calcul", "Résultat", "Explication"],
        accentHeader: true,
        rows: [
          ["(**+**6) **+** (**−**3)", "**+**3", "6−3=3, signe + (6 > 3)"],
          ["(**−**6) **+** (**+**3)", "**−**3", "6−3=3, signe − (6 > 3)"],
        ],
      },
      { type: "plain", fr: "" },
      { type: "heading", fr: "Soustraction des relatifs", black: true },
      { type: "rule", titleFr: "Règle", itemsFr: [
        "Soustraire = additionner l'opposé : a **−** b = a **+** (**−**b)",
      ] },
      { type: "section", labelFr: "Exemples", itemsFr: [
        "(**+**6) **−** (**+**3) = (**+**6) **+** (**−**3) = **+**3",
        "(**−**6) **−** (**−**3) = (**−**6) **+** (**+**3) = **−**3",
        "(**+**6) **−** (**−**3) = (**+**6) **+** (**+**3) = **+**9",
        "(**−**6) **−** (**+**3) = (**−**6) **+** (**−**3) = **−**9",
      ] },
    ],
  },
  exercises: [],
  exercisePool: [
    { id: "a7-3-ep01", promptFr: "Calculez (+6) + (+3).", type: "number", acceptable: ["9", "+9"] },
    { id: "a7-3-ep02", promptFr: "Calculez (−6) + (−3).", type: "number", acceptable: ["-9"] },
    { id: "a7-3-ep03", promptFr: "Calculez (+6) + (−3).", type: "number", acceptable: ["3", "+3"] },
    { id: "a7-3-ep04", promptFr: "Calculez (−6) + (+3).", type: "number", acceptable: ["-3"] },
    { id: "a7-3-ep05", promptFr: "Calculez (−8) + (−5).", type: "number", acceptable: ["-13"] },
    { id: "a7-3-ep06", promptFr: "Calculez (+10) + (−4).", type: "number", acceptable: ["6", "+6"] },
    { id: "a7-3-ep07", promptFr: "Calculez (−6) − (−3).", type: "number", acceptable: ["-3"] },
    { id: "a7-3-ep08", promptFr: "Calculez (+6) − (−3).", type: "number", acceptable: ["9", "+9"] },
    { id: "a7-3-ep09", promptFr: "Calculez (−6) − (+3).", type: "number", acceptable: ["-9"] },
    { id: "a7-3-ep10", promptFr: "Calculez −8 + 5.", type: "number", acceptable: ["-3"] },
    { id: "a7-3-ep11", promptFr: "Calculez −4 − (−10).", type: "number", acceptable: ["6", "+6"] },
    { id: "a7-3-ep12", promptFr: "Calculez (+3) + (−9).", type: "number", acceptable: ["-6"] },
  ],
  poolSize: 5,
};
