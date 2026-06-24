import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-1",
    submoduleCode: "A9.1",
    theory: {
      title: {
        fr: "Variable et inconnue",
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
    { id: "a9-1-ep01", promptFr: "Calcule 3x pour x = 5.", type: "number", acceptable: ["15"], hintFr: "Remplace x par 5 : 3 × 5 = ?" },
    { id: "a9-1-ep02", promptFr: "Calcule 2a + 1 pour a = 6.", type: "number", acceptable: ["13"], hintFr: "Remplace a par 6 : 2 × 6 + 1 = ?" },
    { id: "a9-1-ep03", promptFr: "Calcule 5n − 3 pour n = 4.", type: "number", acceptable: ["17"], hintFr: "Remplace n par 4 : 5 × 4 − 3 = ?" },
    { id: "a9-1-ep04", promptFr: "Calcule 4y pour y = 8.", type: "number", acceptable: ["32"], hintFr: "Remplace y par 8 : 4 × 8 = ?" },
    { id: "a9-1-ep05", promptFr: "Calcule 7m − 2 pour m = 3.", type: "number", acceptable: ["19"], hintFr: "Remplace m par 3 : 7 × 3 − 2 = ?" },
    { id: "a9-1-ep06", promptFr: "Calcule 6t + 4 pour t = 2.", type: "number", acceptable: ["16"], hintFr: "Remplace t par 2 : 6 × 2 + 4 = ?" },
    { id: "a9-1-ep07", promptFr: "Calcule 9 − 2k pour k = 4.", type: "number", acceptable: ["1"], hintFr: "Remplace k par 4 : 9 − 2 × 4 = ?" },
    { id: "a9-1-ep08", promptFr: "Calcule x² pour x = 4.", type: "number", acceptable: ["16"], hintFr: "Remplace x par 4 : 4² = 4 × 4 = ?" },
    { id: "a9-1-ep09", promptFr: "Calcule 3n + 5 pour n = 7.", type: "number", acceptable: ["26"], hintFr: "Remplace n par 7 : 3 × 7 + 5 = ?" },
    { id: "a9-1-ep10", promptFr: "Calcule 2x − 7 pour x = 6.", type: "number", acceptable: ["5"], hintFr: "Remplace x par 6 : 2 × 6 − 7 = ?" },
    { id: "a9-1-ep11", promptFr: "Calcule 4a + 3 pour a = 9.", type: "number", acceptable: ["39"], hintFr: "Remplace a par 9 : 4 × 9 + 3 = ?" },
    { id: "a9-1-ep12", promptFr: "Calcule 8 − 3y pour y = 2.", type: "number", acceptable: ["2"], hintFr: "Remplace y par 2 : 8 − 3 × 2 = ?" },
  ],
  poolSize: 5,
};
