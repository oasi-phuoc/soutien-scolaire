import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-1",
    submoduleCode: "A13.1",
    theory: {
      title: {
        fr: "Notion de fonction",
        en: "Notion of function",
        ar: "مفهوم الدالة",
        fa: "مفهوم تابع",
        ti: "ናይ ስራሕ ሓሳብ",
        uk: "Поняття функції",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce qu'une fonction ?",
          black: true,
        },
        {
          type: "plain",
          fr: "Une fonction est une règle qui associe à chaque valeur d'entrée x **une et une seule** valeur de sortie y. On note f(x) = expression en x.",
        },
        {
          type: "rule",
          titleFr: "Vocabulaire essentiel",
          itemsFr: [
            "**x** = valeur d'entrée (antécédent)",
            "**f(x)** = valeur de sortie (image de x)",
            "**Domaine** = ensemble des valeurs d'entrée autorisées",
          ],
        },
        {
          type: "heading",
          fr: "Comment utiliser une fonction",
          black: true,
        },
        {
          type: "highlight",
          fr: "Calculer f(x) pour une valeur donnée",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "f(x) = 2x **+** 3",
            "Pour x = 4 : f(4) = 2 × 4 **+** 3 = 8 **+** 3 = **11**",
            "On dit : « l'image de 4 par f est 11 »",
          ],
        },
        {
          type: "heading",
          fr: "Formes de représentation",
          black: true,
        },
        {
          type: "bullets",
          labelFr: "Une fonction peut être représentée par :",
          itemsFr: [
            "Une **formule** : f(x) = 2x **+** 3",
            "Un **tableau de valeurs** : liste de couples (x, f(x))",
            "Un **graphique** : courbe dans un repère cartésien",
          ],
        },
        {
          type: "table",
          headersFr: ["x", "0", "1", "2", "3", "4"],
          accentHeader: true,
          rows: [
            ["f(x) = 2x **+** 3", "3", "5", "7", "9", "11"],
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a13-1-ep01", promptFr: "f(x) = 2x + 1. Calcule f(3).", type: "number", acceptable: ["7"] },
      { id: "a13-1-ep02", promptFr: "f(x) = 3x − 2. Calcule f(4).", type: "number", acceptable: ["10"] },
      { id: "a13-1-ep03", promptFr: "f(x) = x². Calcule f(5).", type: "number", acceptable: ["25"] },
      { id: "a13-1-ep04", promptFr: "f(x) = 2x + 3. Calcule f(0).", type: "number", acceptable: ["3"] },
      { id: "a13-1-ep05", promptFr: "f(x) = x + 4. Calcule f(7).", type: "number", acceptable: ["11"] },
      { id: "a13-1-ep06", promptFr: "f(x) = 4x − 5. Calcule f(3).", type: "number", acceptable: ["7"] },
      { id: "a13-1-ep07", promptFr: "f(x) = x² + 1. Calcule f(4).", type: "number", acceptable: ["17"] },
      { id: "a13-1-ep08", promptFr: "f(x) = 5x. Calcule f(6).", type: "number", acceptable: ["30"] },
      { id: "a13-1-ep09", promptFr: "f(x) = 2x + 3. Calcule f(−1).", type: "number", acceptable: ["1"] },
      { id: "a13-1-ep10", promptFr: "f(x) = x² − 4. Calcule f(3).", type: "number", acceptable: ["5"] },
    ],
    poolSize: 5,
  };
