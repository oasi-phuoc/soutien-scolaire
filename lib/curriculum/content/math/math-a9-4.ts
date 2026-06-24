import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-4",
    submoduleCode: "A9.4",
    theory: {
      title: {
        fr: "",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Termes semblables",
          black: true,
        },
        {
          type: "plain",
          fr: "Des termes semblables (ou termes similaires) sont des termes qui ont la même variable portée au même exposant. On peut les additionner ou soustraire en regroupant leurs coefficients.",
        },
        {
          type: "rule",
          titleFr: "Règle de réduction",
          itemsFr: [
            "Pour additionner des termes semblables : on additionne leurs **coefficients**",
            "Les termes constants (sans variable) se regroupent entre eux",
          ],
        },
        {
          type: "heading",
          fr: "Exemples de réduction",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Expression", "Réduction", "Résultat"],
          accentHeader: true,
          rows: [
            ["3x **+** 5x", "(**+**3 **+** 5)x", "8x"],
            ["7a **−** 2a", "(7 **−** 2)a", "5a"],
            ["4x **+** 3 **+** 2x **−** 1", "(4 **+** 2)x **+** (3 **−** 1)", "6x **+** 2"],
          ],
        },
        {
          type: "heading",
          fr: "Ce qui n'est PAS semblable",
          black: true,
        },
        {
          type: "note",
          fr: "3x et 3x² ne sont PAS des termes semblables (exposants différents). 3x et 3y ne le sont pas non plus (variables différentes). On ne peut pas les regrouper.",
        },
        {
          type: "bullets",
          labelFr: "Termes semblables → peuvent se regrouper",
          itemsFr: [
            "5x et 3x (même variable x, même exposant 1)",
            "4a² et **−**2a² (même variable a, même exposant 2)",
            "7 et **−**3 (deux termes constants)",
          ],
        },
        {
          type: "bullets",
          labelFr: "Termes NON semblables → ne peuvent pas se regrouper",
          itemsFr: [
            "3x et 3x² (exposants différents)",
            "4x et 4y (variables différentes)",
            "5a et 5 (l'un a une variable, l'autre non)",
          ],
        },
      ],
    },
  exercises: [],
  exercisePool: [],
  poolSize: 5,
};
