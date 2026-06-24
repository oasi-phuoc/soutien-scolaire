import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-1",
    submoduleCode: "A9.1",
    theory: {
      title: {
        fr: "",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce qu'une expression algébrique ?",
          black: true,
        },
        {
          type: "plain",
          fr: "Une expression algébrique est une combinaison de nombres, de variables et d'opérations (**+**, **−**, ×, ÷).",
        },
        {
          type: "section",
          labelFr: "Exemples d'expressions",
          itemsFr: [
            "3x **+** 2",
            "5a **−** b",
            "x² **+** 4x **−** 7",
          ],
        },
        {
          type: "heading",
          fr: "Vocabulaire essentiel",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Terme", "Définition", "Exemple dans 4x² − 3x + 7"],
          accentHeader: true,
          rows: [
            ["Terme", "Partie séparée par **+** ou **−**", "4x², **−**3x, 7"],
            ["Coefficient", "Nombre devant la variable", "4 et **−**3"],
            ["Terme constant", "Terme sans variable", "7"],
          ],
        },
        {
          type: "heading",
          fr: "Conventions d'écriture",
          black: true,
        },
        {
          type: "bullets",
          labelFr: "",
          itemsFr: [
            "On omet le signe × entre un nombre et une variable : 3x signifie 3 × x",
            "Le coefficient s'écrit toujours **avant** la variable : 5x (pas x5)",
            "Le coefficient 1 est omis : 1x s'écrit simplement x",
            "Le coefficient **−**1 s'écrit **−**x (sans le 1)",
          ],
        },
        {
          type: "example",
          fr: "Dans 4x² − 3x + 7 :\n• Termes : 4x²,  −3x,  7\n• Coefficients : 4 et −3\n• Terme constant : 7",
        },
      ],
    },
  exercises: [],
  exercisePool: [],
  poolSize: 5,
};
