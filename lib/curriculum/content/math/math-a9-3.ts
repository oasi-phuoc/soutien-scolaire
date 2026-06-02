import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-3",
    submoduleCode: "A9.3",
    theory: {
      title: {
        fr: "Substitution (évaluation)",
        en: "Substitution (evaluation)",
        ar: "الإحلال (التقييم)",
        fa: "جایگذاری (ارزیابی)",
        ti: "ምትካእ (ምምዛን)",
        uk: "Підстановка (обчислення значення)",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Évaluer une expression",
          black: true,
        },
        {
          type: "plain",
          fr: "Évaluer une expression algébrique signifie remplacer les variables par des valeurs numériques, puis calculer le résultat en respectant les priorités opératoires.",
        },
        {
          type: "rule",
          titleFr: "Méthode",
          itemsFr: [
            "1. Repérer toutes les variables dans l'expression",
            "2. Remplacer chaque variable par sa valeur (entre parenthèses)",
            "3. Calculer en respectant l'ordre : parenthèses → puissances → × et ÷ → **+** et **−**",
          ],
        },
        {
          type: "heading",
          fr: "Exemples",
          black: true,
        },
        {
          type: "highlight",
          fr: "Exemple à une variable",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Évalue 3x² **−** 2x **+** 1 pour x = 3",
            "→ 3(3)² **−** 2(3) **+** 1",
            "→ 3 × 9 **−** 6 **+** 1",
            "→ 27 **−** 6 **+** 1 = **22**",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple à deux variables",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Évalue a² **+** b pour a = 4 et b = **−**3",
            "→ (4)² **+** (**−**3)",
            "→ 16 **+** (**−**3) = **13**",
          ],
        },
        {
          type: "note",
          fr: "Toujours mettre la valeur entre parenthèses lors de la substitution. Cela évite les erreurs de signe, surtout avec les valeurs négatives.",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a9-3-ep01", promptFr: "Évalue 2x + 3 pour x = 4.", type: "number", acceptable: ["11"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep02", promptFr: "Évalue 3x − 5 pour x = 3.", type: "number", acceptable: ["4"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep03", promptFr: "Évalue x² − 2 pour x = 5.", type: "number", acceptable: ["23"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep04", promptFr: "Évalue 4a + 2 pour a = 3.", type: "number", acceptable: ["14"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep05", promptFr: "Évalue 2x² pour x = 3.", type: "number", acceptable: ["18"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep06", promptFr: "Évalue 5n − n² pour n = 3.", type: "number", acceptable: ["6"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep07", promptFr: "Évalue x³ pour x = 2.", type: "number", acceptable: ["8"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep08", promptFr: "Évalue 10 − 3x pour x = 2.", type: "number", acceptable: ["4"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep09", promptFr: "Évalue 3x + 2y pour x = 2, y = 4.", type: "number", acceptable: ["14"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
      { id: "a9-3-ep10", promptFr: "Évalue (x + 1)² pour x = 3.", type: "number", acceptable: ["16"], hintFr: "Remplace x par la valeur donnée et calcule en suivant l'ordre des opérations."},
    ],
    poolSize: 5,
  };
