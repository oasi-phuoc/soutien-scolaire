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
    exercisePool: [],
    poolSize: 0,
  };
