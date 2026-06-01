import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-2",
    submoduleCode: "A13.2",
    theory: {
      title: {
        fr: "Tableau de valeurs",
        en: "Table of values",
        ar: "جدول القيم",
        fa: "جدول مقادیر",
        ti: "ሰሌዳ ዋጋ",
        uk: "Таблиця значень",
      },
      blocks: [
        {
          type: "heading",
          fr: "Construire un tableau de valeurs",
          black: true,
        },
        {
          type: "plain",
          fr: "Un tableau de valeurs liste plusieurs couples (x, f(x)). On choisit des valeurs régulières de x et on calcule f(x) pour chacune.",
        },
        {
          type: "rule",
          titleFr: "Méthode",
          itemsFr: [
            "1. Choisir des valeurs entières de x (souvent symétriques autour de 0)",
            "2. Calculer f(x) pour chaque valeur de x",
            "3. Remplir le tableau ligne par ligne",
            "4. Utiliser ces points pour tracer le graphique",
          ],
        },
        {
          type: "heading",
          fr: "Exemple : f(x) = 2x + 1",
          black: true,
        },
        {
          type: "table",
          headersFr: ["x", "−2", "−1", "0", "1", "2"],
          accentHeader: true,
          rows: [
            ["Calcul", "2(**−**2)**+**1", "2(**−**1)**+**1", "2(0)**+**1", "2(1)**+**1", "2(2)**+**1"],
            ["f(x)", "**−**3", "**−**1", "1", "3", "5"],
          ],
        },
        {
          type: "heading",
          fr: "Exemple : f(x) = x² − 1",
          black: true,
        },
        {
          type: "table",
          headersFr: ["x", "−2", "−1", "0", "1", "2"],
          accentHeader: true,
          rows: [
            ["Calcul", "(**−**2)²**−**1", "(**−**1)²**−**1", "0²**−**1", "1²**−**1", "2²**−**1"],
            ["f(x)", "3", "0", "**−**1", "0", "3"],
          ],
        },
        {
          type: "note",
          fr: "Conseil : choisir des valeurs symétriques autour de 0 permet de voir la tendance globale de la fonction et de faciliter le tracé du graphique.",
        },
      ],
    },
    exercises: [],
    exercisePool: [],
    poolSize: 0,
  };
