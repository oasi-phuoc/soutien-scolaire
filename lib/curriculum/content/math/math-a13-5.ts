import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-5",
    submoduleCode: "A13.5",
    theory: {
      title: {
        fr: "Fonction affine f(x) = ax + b",
        en: "Affine function f(x) = ax + b",
        ar: "الدالة الانتسابية f(x) = ax + b",
        fa: "تابع آفین f(x) = ax + b",
        ti: "ናይ ኣፊን ስራሕ f(x) = ax + b",
        uk: "Лінійна функція f(x) = ax + b",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "La fonction affine",
          black: true,
        },
        {
          type: "plain",
          fr: "Une fonction affine a la forme f(x) = ax **+** b. Son graphique est une **droite** (pas nécessairement par l'origine).",
        },
        {
          type: "rule",
          titleFr: "Les deux paramètres",
          itemsFr: [
            "**a** = pente (coefficient directeur) : mesure l'inclinaison de la droite",
            "**b** = ordonnée à l'origine : valeur de y quand x = 0, point où la droite coupe l'axe y",
          ],
        },
        {
          type: "heading",
          fr: "Méthode pour tracer la droite",
          black: true,
        },
        {
          type: "rule",
          titleFr: "2 points suffisent",
          itemsFr: [
            "1. Calculer le point (0, b) : l'ordonnée à l'origine (x = 0)",
            "2. Calculer un second point (ex. x = 1 ou x = 2)",
            "3. Tracer la droite passant par ces deux points",
          ],
        },
        {
          type: "heading",
          fr: "Exemple : f(x) = 2x + 3",
          black: true,
        },
        {
          type: "table",
          headersFr: ["x", "0", "1", "2", "**−**1"],
          accentHeader: true,
          rows: [
            ["f(x) = 2x **+** 3", "3", "5", "7", "1"],
          ],
          captionFr: "Point A(0 ; 3) : ordonnée à l'origine. Point B(2 ; 7) : second point.",
        },
        {
          type: "highlight",
          fr: "Identifier a et b dans f(x) = ax + b",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "f(x) = 2x **+** 3  →  a = 2, b = 3",
            "f(x) = **−**x **+** 5  →  a = **−**1, b = 5",
            "f(x) = 3x **−** 7  →  a = 3, b = **−**7",
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a13-5-ep01", promptFr: "f(x) = 2x + 3. Quel est le coefficient directeur (pente) ?", type: "number", acceptable: ["2"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep02", promptFr: "f(x) = 2x + 3. Quelle est l'ordonnée à l'origine ?", type: "number", acceptable: ["3"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep03", promptFr: "f(x) = −3x + 5. Quel est le coefficient directeur ?", type: "number", acceptable: ["-3"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep04", promptFr: "f(x) = −3x + 5. Quelle est l'ordonnée à l'origine ?", type: "number", acceptable: ["5"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep05", promptFr: "f(x) = 4x − 7. Calcule f(2).", type: "number", acceptable: ["1"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep06", promptFr: "f(x) = 4x − 7. Calcule f(0).", type: "number", acceptable: ["-7"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep07", promptFr: "f(x) = x + 8. Quel est le coefficient directeur ?", type: "number", acceptable: ["1"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep08", promptFr: "f(x) = x + 8. Quelle est l'ordonnée à l'origine ?", type: "number", acceptable: ["8"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep09", promptFr: "f(x) = 5x − 2. Calcule f(3).", type: "number", acceptable: ["13"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
      { id: "a13-5-ep10", promptFr: "f(x) = −x + 9. Calcule f(4).", type: "number", acceptable: ["5"], hintFr: "Dans f(x) = ax + b, a est la pente (coefficient directeur) et b est l'ordonnée à l'origine."},
    ],
    poolSize: 5,
  };
