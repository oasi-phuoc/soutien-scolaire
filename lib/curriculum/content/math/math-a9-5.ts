import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-5",
    submoduleCode: "A9.5",
    theory: {
      title: {
        fr: "Développement simple",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Développer une expression",
          black: true,
        },
        {
          type: "plain",
          fr: "Développer signifie supprimer les parenthèses en distribuant la multiplication sur chaque terme à l'intérieur.",
        },
        {
          type: "rule",
          titleFr: "Propriété distributive",
          itemsFr: [
            "a(b **+** c) = ab **+** ac",
            "a(b **−** c) = ab **−** ac",
          ],
        },
        {
          type: "heading",
          fr: "Exemples fondamentaux",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Expression", "Développement", "Résultat"],
          accentHeader: true,
          rows: [
            ["3(x **+** 4)", "3 × x **+** 3 × 4", "3x **+** 12"],
            ["2(a **−** 5)", "2 × a **−** 2 × 5", "2a **−** 10"],
            ["**−**3(2x **+** 1)", "**−**3 × 2x **+** (**−**3) × 1", "**−**6x **−** 3"],
          ],
        },
        {
          type: "heading",
          fr: "Facteur négatif devant une parenthèse",
          black: true,
        },
        {
          type: "note",
          fr: "Quand le facteur est négatif, tous les signes à l'intérieur de la parenthèse s'inversent.",
        },
        {
          type: "section",
          labelFr: "Exemples avec facteur négatif",
          itemsFr: [
            "**−**2(x **−** 3) = **−**2x **+** 6  (le **−** × **−** donne **+**)",
            "**−**(x **−** 5) = **−**x **+** 5",
            "**−**(2x **+** 7) = **−**2x **−** 7",
          ],
        },
        {
          type: "heading",
          fr: "Double distribution",
          black: true,
        },
        {
          type: "rule",
          titleFr: "(a + b)(c + d)",
          itemsFr: [
            "(a **+** b)(c **+** d) = ac **+** ad **+** bc **+** bd",
          ],
        },
        {
          type: "example",
          fr: "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a9-5-ep01", promptFr: "Développe 2(x + 3).", type: "short_text", acceptable: ["2x+6"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep02", promptFr: "Développe 3(a − 2).", type: "short_text", acceptable: ["3a-6"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep03", promptFr: "Développe 4(2x + 1).", type: "short_text", acceptable: ["8x+4"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep04", promptFr: "Développe 5(n − 3).", type: "short_text", acceptable: ["5n-15"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep05", promptFr: "Développe 2(4x + 3).", type: "short_text", acceptable: ["8x+6"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep06", promptFr: "Développe 3(2a − 5).", type: "short_text", acceptable: ["6a-15"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep07", promptFr: "Développe 6(x − 1).", type: "short_text", acceptable: ["6x-6"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep08", promptFr: "Développe 4(3n + 2).", type: "short_text", acceptable: ["12n+8"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep09", promptFr: "Développe 5(2x − 3).", type: "short_text", acceptable: ["10x-15"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
      { id: "a9-5-ep10", promptFr: "Développe 7(a + 4).", type: "short_text", acceptable: ["7a+28"], hintFr: "Distribue le facteur extérieur à chaque terme entre les parenthèses."},
    ],
    poolSize: 5,
  };
