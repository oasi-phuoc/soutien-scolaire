import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-5",
    submoduleCode: "A9.5",
    theory: {
      title: {
        fr: "Développement",
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
          type: "highlight",
          fr: "Propriété distributive",
        },
        {
          type: "section",
          labelFr: "",
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
          type: "plain",
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
        {
          type: "heading",
          fr: "Les identités remarquables",
          black: true,
        },
        {
          type: "plain",
          fr: "Certains développements reviennent souvent : on les apprend par cœur pour aller plus vite.",
        },
        {
          type: "section",
          labelFr: "Carrés",
          itemsFr: [
            "**Carré d'une somme** : (a + b)² = a² + 2ab + b²",
            "**Carré d'une différence** : (a − b)² = a² − 2ab + b²",
            "**Différence de deux carrés** : a² − b² = (a − b)(a + b)",
          ],
        },
        {
          type: "section",
          labelFr: "Cubes",
          itemsFr: [
            "**Cube d'une somme** : (a + b)³ = a³ + 3a²b + 3ab² + b³",
            "**Cube d'une différence** : (a − b)³ = a³ − 3a²b + 3ab² − b³",
            "**Somme de deux cubes** : a³ + b³ = (a + b)(a² − ab + b²)",
            "**Différence de deux cubes** : a³ − b³ = (a − b)(a² + ab + b²)",
          ],
        },
        {
          type: "section",
          labelFr: "Trois termes",
          itemsFr: [
            "**Carré de trois termes** : (a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc",
          ],
        },
        {
          type: "example",
          fr: "(x + 3)² = x² + 2 × x × 3 + 3² = x² + 6x + 9",
        },
      ],
    },
  exercises: [],
  exercisePool: [
    { id: "a9-5-ep01", promptFr: "Développe 3(x + 5).", type: "short_text", acceptable: ["3x+15", "3x + 15"], hintFr: "3 × x + 3 × 5 = ?" },
    { id: "a9-5-ep02", promptFr: "Développe 4(a − 3).", type: "short_text", acceptable: ["4a-12", "4a − 12"], hintFr: "4 × a − 4 × 3 = ?" },
    { id: "a9-5-ep03", promptFr: "Développe 2(3x + 4).", type: "short_text", acceptable: ["6x+8", "6x + 8"], hintFr: "2 × 3x + 2 × 4 = ?" },
    { id: "a9-5-ep04", promptFr: "Développe 5(2n − 1).", type: "short_text", acceptable: ["10n-5", "10n − 5"], hintFr: "5 × 2n − 5 × 1 = ?" },
    { id: "a9-5-ep05", promptFr: "Développe 6(x + 2).", type: "short_text", acceptable: ["6x+12", "6x + 12"], hintFr: "6 × x + 6 × 2 = ?" },
    { id: "a9-5-ep06", promptFr: "Développe 3(4a − 5).", type: "short_text", acceptable: ["12a-15", "12a − 15"], hintFr: "3 × 4a − 3 × 5 = ?" },
    { id: "a9-5-ep07", promptFr: "Développe 7(2x + 3).", type: "short_text", acceptable: ["14x+21", "14x + 21"], hintFr: "7 × 2x + 7 × 3 = ?" },
    { id: "a9-5-ep08", promptFr: "Développe 4(3n − 7).", type: "short_text", acceptable: ["12n-28", "12n − 28"], hintFr: "4 × 3n − 4 × 7 = ?" },
    { id: "a9-5-ep09", promptFr: "Développe 8(x − 4).", type: "short_text", acceptable: ["8x-32", "8x − 32"], hintFr: "8 × x − 8 × 4 = ?" },
    { id: "a9-5-ep10", promptFr: "Développe 2(5x + 9).", type: "short_text", acceptable: ["10x+18", "10x + 18"], hintFr: "2 × 5x + 2 × 9 = ?" },
    { id: "a9-5-ep11", promptFr: "Développe 9(3a − 2).", type: "short_text", acceptable: ["27a-18", "27a − 18"], hintFr: "9 × 3a − 9 × 2 = ?" },
    { id: "a9-5-ep12", promptFr: "Développe 5(4x + 6).", type: "short_text", acceptable: ["20x+30", "20x + 30"], hintFr: "5 × 4x + 5 × 6 = ?" },
  ],
  poolSize: 5,
};
