import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-2",
    submoduleCode: "A9.2",
    theory: {
      title: {
        fr: "Lire et écrire une expression algébrique",
        en: "Reading and writing an algebraic expression",
        ar: "قراءة وكتابة تعبير جبري",
        fa: "خواندن و نوشتن عبارت جبری",
        ti: "ናይ ኣልጀብራ ኣዝማሪ ምንባብን ምጽሓፍን",
        uk: "Читання та запис алгебраїчного виразу",
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
      { id: "a9-2-ep01", promptFr: "Dans 5x + 3, quel est le coefficient de x ?", type: "number", acceptable: ["5"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep02", promptFr: "Dans 7a − 2b, quel est le coefficient de a ?", type: "number", acceptable: ["7"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep03", promptFr: "Dans 3x² − 4x + 2, combien y a-t-il de termes ?", type: "number", acceptable: ["3"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep04", promptFr: "Dans 2x + 5, quelle est la constante ?", type: "number", acceptable: ["5"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep05", promptFr: "Dans 4x − 3, quel est le coefficient de x ?", type: "number", acceptable: ["4"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep06", promptFr: "Dans x + 7, quel est le coefficient de x ?", type: "number", acceptable: ["1"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep07", promptFr: "Dans 6n, quel est le coefficient de n ?", type: "number", acceptable: ["6"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep08", promptFr: "Dans 2a² + 3a − 5, combien y a-t-il de termes ?", type: "number", acceptable: ["3"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep09", promptFr: "Dans 9y − 4, quelle est la constante ?", type: "number", acceptable: ["-4"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
      { id: "a9-2-ep10", promptFr: "Dans 3x + 2x − 7, combien y a-t-il de termes ?", type: "number", acceptable: ["3"], hintFr: "Le coefficient est le nombre devant la variable. Le terme constant est le nombre sans variable."},
    ],
    poolSize: 5,
  };
