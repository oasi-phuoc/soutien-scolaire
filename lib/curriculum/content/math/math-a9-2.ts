import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-2",
    submoduleCode: "A9.2",
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
  exercisePool: [
    { id: "a9-2-ep01", promptFr: "Dans 7x + 4, quel est le coefficient de x ?", type: "number", acceptable: ["7"], hintFr: "Le coefficient est le nombre multiplié devant x." },
    { id: "a9-2-ep02", promptFr: "Dans 9y − 1, quel est le coefficient de y ?", type: "number", acceptable: ["9"], hintFr: "Le coefficient est le nombre devant la variable." },
    { id: "a9-2-ep03", promptFr: "Dans 5x² + 2x − 3, combien y a-t-il de termes ?", type: "number", acceptable: ["3"], hintFr: "Compte les termes séparés par + ou −." },
    { id: "a9-2-ep04", promptFr: "Dans 4n + 11, quelle est la constante ?", type: "number", acceptable: ["11"], hintFr: "La constante est le terme sans variable." },
    { id: "a9-2-ep05", promptFr: "Dans x + 9, quel est le coefficient de x ?", type: "number", acceptable: ["1"], hintFr: "Sans nombre devant x, le coefficient vaut 1." },
    { id: "a9-2-ep06", promptFr: "Dans 3a − 8, quelle est la constante ?", type: "number", acceptable: ["-8"], hintFr: "La constante est −8 (terme sans variable)." },
    { id: "a9-2-ep07", promptFr: "Dans 6m² − 4m + 7, combien y a-t-il de termes ?", type: "number", acceptable: ["3"], hintFr: "Compte les termes séparés par + ou −." },
    { id: "a9-2-ep08", promptFr: "Dans 8t, quel est le coefficient de t ?", type: "number", acceptable: ["8"], hintFr: "Le coefficient est le nombre qui multiplie t." },
    { id: "a9-2-ep09", promptFr: "Dans 3x − 5, quelle est la constante ?", type: "number", acceptable: ["-5"], hintFr: "La constante est −5 (terme sans variable)." },
    { id: "a9-2-ep10", promptFr: "Dans 2x + 5x − 3, combien y a-t-il de termes avant réduction ?", type: "number", acceptable: ["3"], hintFr: "Avant réduction : 2x, 5x, et −3 sont trois termes." },
    { id: "a9-2-ep11", promptFr: "Dans 12a + 7, quel est le coefficient de a ?", type: "number", acceptable: ["12"], hintFr: "Le coefficient de a est 12." },
    { id: "a9-2-ep12", promptFr: "Dans x² + 3x − 7 + 2, combien y a-t-il de termes ?", type: "number", acceptable: ["4"], hintFr: "Compte : x², 3x, −7, et +2 → 4 termes." },
  ],
  poolSize: 5,
};
