import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-4",
    submoduleCode: "A13.4",
    theory: {
      title: {
        fr: "Fonction linéaire f(x) = ax",
        en: "Linear function f(x) = ax",
        ar: "الدالة الخطية f(x) = ax",
        fa: "تابع خطی f(x) = ax",
        ti: "ናይ ቐጥታ ስራሕ f(x) = ax",
        uk: "Лінійна функція f(x) = ax",
      },
      blocks: [
        {
          type: "heading",
          fr: "La fonction linéaire",
          black: true,
        },
        {
          type: "plain",
          fr: "Une fonction linéaire a la forme f(x) = ax, où a est une constante appelée **pente** (ou coefficient directeur). Son graphique est toujours une **droite passant par l'origine (0, 0)**.",
        },
        {
          type: "rule",
          titleFr: "Propriété fondamentale",
          itemsFr: [
            "f(0) = a × 0 = 0  → la droite passe toujours par l'origine",
          ],
        },
        {
          type: "heading",
          fr: "Influence de la pente a",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Valeur de a", "Comportement de la droite", "Exemple"],
          accentHeader: true,
          rows: [
            ["a **>** 0", "Croissante (monte de gauche à droite)", "f(x) = 2x"],
            ["a **<** 0", "Décroissante (descend de gauche à droite)", "f(x) = **−**x"],
            ["a = 0", "Horizontale (droite y = 0)", "f(x) = 0"],
            ["|a| grand", "Droite très inclinée (raide)", "f(x) = 5x"],
            ["|a| petit", "Droite peu inclinée (douce)", "f(x) = 0,5x"],
          ],
        },
        {
          type: "heading",
          fr: "Exemples",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Fonction", "x = 1", "x = 2", "x = **−**1", "Passe par (0,0) ?"],
          accentHeader: true,
          rows: [
            ["f(x) = 2x", "2", "4", "**−**2", "Oui"],
            ["f(x) = **−**x", "**−**1", "**−**2", "1", "Oui"],
            ["f(x) = 0,5x", "0,5", "1", "**−**0,5", "Oui"],
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [],
    poolSize: 0,
  };
