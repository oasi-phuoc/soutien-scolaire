import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-4",
    submoduleCode: "A9.4",
    theory: {
      title: {
        fr: "Réduction (termes semblables)",
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
  exercisePool: [
    { id: "a9-4-ep01", promptFr: "Réduis 4x + 9x.", type: "short_text", acceptable: ["13x"], hintFr: "4 + 9 = 13, donc 4x + 9x = 13x." },
    { id: "a9-4-ep02", promptFr: "Réduis 8a − 3a.", type: "short_text", acceptable: ["5a"], hintFr: "8 − 3 = 5, donc 8a − 3a = 5a." },
    { id: "a9-4-ep03", promptFr: "Réduis 6x + x.", type: "short_text", acceptable: ["7x"], hintFr: "6x + 1x = 7x." },
    { id: "a9-4-ep04", promptFr: "Réduis 10n − 4n.", type: "short_text", acceptable: ["6n"], hintFr: "10 − 4 = 6, donc 10n − 4n = 6n." },
    { id: "a9-4-ep05", promptFr: "Réduis 3x + 4x + 2x.", type: "short_text", acceptable: ["9x"], hintFr: "3 + 4 + 2 = 9, donc le résultat est 9x." },
    { id: "a9-4-ep06", promptFr: "Réduis 7y − 2y + y.", type: "short_text", acceptable: ["6y"], hintFr: "7 − 2 + 1 = 6, donc le résultat est 6y." },
    { id: "a9-4-ep07", promptFr: "Réduis 5a + 3a − 6a.", type: "short_text", acceptable: ["2a"], hintFr: "5 + 3 − 6 = 2, donc le résultat est 2a." },
    { id: "a9-4-ep08", promptFr: "Réduis 12m − 5m − 4m.", type: "short_text", acceptable: ["3m"], hintFr: "12 − 5 − 4 = 3, donc le résultat est 3m." },
    { id: "a9-4-ep09", promptFr: "Réduis 9b − 9b.", type: "short_text", acceptable: ["0"], hintFr: "9b − 9b = 0." },
    { id: "a9-4-ep10", promptFr: "Réduis 2x + 5 + 3x + 1.", type: "short_text", acceptable: ["5x+6", "5x + 6"], hintFr: "2x + 3x = 5x et 5 + 1 = 6." },
    { id: "a9-4-ep11", promptFr: "Réduis 4a + 3 − 2a + 5.", type: "short_text", acceptable: ["2a+8", "2a + 8"], hintFr: "4a − 2a = 2a et 3 + 5 = 8." },
    { id: "a9-4-ep12", promptFr: "Réduis 6n − 2 + n − 5.", type: "short_text", acceptable: ["7n-7", "7n − 7"], hintFr: "6n + n = 7n et −2 − 5 = −7." },
  ],
  poolSize: 5,
};
