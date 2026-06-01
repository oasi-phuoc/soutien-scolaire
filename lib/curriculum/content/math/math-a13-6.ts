import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-6",
    submoduleCode: "A13.6",
    theory: {
      title: {
        fr: "Pente et ordonnée à l'origine",
        en: "Slope and y-intercept",
        ar: "الميل ونقطة القطع مع المحور y",
        fa: "شیب و عرض از مبدأ",
        ti: "ሃፍን ናይ y ሕርሚ ምቁራጽን",
        uk: "Кутовий коефіцієнт і початкова ордината",
      },
      blocks: [
        {
          type: "heading",
          fr: "La pente (coefficient directeur)",
          black: true,
        },
        {
          type: "plain",
          fr: "La pente a mesure la variation de y pour chaque unité d'augmentation de x. Elle indique l'inclinaison et le sens de la droite.",
        },
        {
          type: "rule",
          titleFr: "Formule de la pente",
          itemsFr: [
            "a = Δy / Δx = (y₂ **−** y₁) / (x₂ **−** x₁)",
            "avec deux points distincts A(x₁, y₁) et B(x₂, y₂)",
          ],
        },
        {
          type: "example",
          fr: "Droite passant par A(1, 3) et B(3, 7) :\na = (7 − 3) / (3 − 1) = 4 / 2 = 2",
        },
        {
          type: "heading",
          fr: "Interprétation de la pente",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Signe de a", "Type de droite", "Signification"],
          accentHeader: true,
          rows: [
            ["a **>** 0", "Croissante", "y augmente quand x augmente"],
            ["a **<** 0", "Décroissante", "y diminue quand x augmente"],
            ["a = 0", "Horizontale", "y ne change pas"],
          ],
        },
        {
          type: "heading",
          fr: "L'ordonnée à l'origine",
          black: true,
        },
        {
          type: "plain",
          fr: "L'ordonnée à l'origine b est la valeur de y lorsque x = 0. Elle se lit directement sur le graphique au point d'intersection avec l'axe y.",
        },
        {
          type: "highlight",
          fr: "Trouver a et b depuis deux points",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "1. Calculer a = (y₂ **−** y₁) / (x₂ **−** x₁)",
            "2. Écrire f(x) = ax **+** b",
            "3. Substituer un des points pour trouver b : b = y₁ **−** a × x₁",
          ],
        },
        {
          type: "example",
          fr: "Points A(0, 4) et B(3, 7) :\na = (7 − 4) / (3 − 0) = 3/3 = 1\nb = 4 (ordonnée de A, car x₁ = 0)\nDonc : f(x) = x + 4",
        },
      ],
    },
    exercises: [],
    exercisePool: [],
    poolSize: 0,
  };
