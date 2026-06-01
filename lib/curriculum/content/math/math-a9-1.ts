import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-1",
    submoduleCode: "A9.1",
    theory: {
      title: {
        fr: "Variable et inconnue",
        en: "Variable and unknown",
        ar: "المتغير والمجهول",
        fa: "متغیر و مجهول",
        ti: "ተለዋዋጢ ቁጽርን ዘይፍለጥ ቁጽርን",
        uk: "Змінна і невідома",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Les lettres en algèbre",
          black: true,
        },
        {
          type: "plain",
          fr: "En algèbre, une lettre peut représenter un nombre. On l'appelle une **variable** ou une **inconnue** selon le contexte.",
        },
        {
          type: "table",
          headersFr: ["Terme", "Définition", "Exemple"],
          accentHeader: true,
          rows: [
            ["Variable", "Nombre qui peut changer de valeur", "x = longueur d'un rectangle"],
            ["Inconnue", "Nombre fixe mais inconnu, à trouver", "x dans 3x **+** 5 = 20"],
          ],
        },
        {
          type: "heading",
          fr: "Différence entre variable et inconnue",
          black: true,
        },
        {
          type: "highlight",
          fr: "Variable",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Dans l'expression 3x **+** 5, x est une **variable** : elle peut prendre n'importe quelle valeur.",
            "On peut calculer la valeur de l'expression pour différentes valeurs de x.",
          ],
        },
        {
          type: "highlight",
          fr: "Inconnue",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Dans l'équation 3x **+** 5 = 20, x est une **inconnue** : il y a une valeur précise à trouver.",
            "Ici, x = 5 est la seule valeur qui vérifie l'équation.",
          ],
        },
        {
          type: "rule",
          titleFr: "Convention d'écriture",
          itemsFr: [
            "x, y, z → utilisés pour les variables et inconnues",
            "a, b, c → utilisés pour les constantes (valeurs fixes connues)",
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a9-1-ep01", promptFr: "Calcule 3x pour x = 4.", type: "number", acceptable: ["12"] },
      { id: "a9-1-ep02", promptFr: "Calcule 2a + 1 pour a = 5.", type: "number", acceptable: ["11"] },
      { id: "a9-1-ep03", promptFr: "Calcule 5n − 3 pour n = 2.", type: "number", acceptable: ["7"] },
      { id: "a9-1-ep04", promptFr: "Calcule x² pour x = 3.", type: "number", acceptable: ["9"] },
      { id: "a9-1-ep05", promptFr: "Calcule 4y pour y = 7.", type: "number", acceptable: ["28"] },
      { id: "a9-1-ep06", promptFr: "Calcule 3m + 2 pour m = 0.", type: "number", acceptable: ["2"] },
      { id: "a9-1-ep07", promptFr: "Calcule 6t pour t = 5.", type: "number", acceptable: ["30"] },
      { id: "a9-1-ep08", promptFr: "Calcule n² + 1 pour n = 4.", type: "number", acceptable: ["17"] },
      { id: "a9-1-ep09", promptFr: "Calcule 2x − 3 pour x = 5.", type: "number", acceptable: ["7"] },
      { id: "a9-1-ep10", promptFr: "Calcule 8 − 2k pour k = 3.", type: "number", acceptable: ["2"] },
    ],
    poolSize: 5,
  };
