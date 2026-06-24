import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-4",
    submoduleCode: "A10.4",
    theory: {
      title: {
        fr: "Méthode d'addition / soustraction",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Méthode d'élimination",
          black: true,
        },
        {
          type: "plain",
          fr: "La méthode d'élimination (combinaison linéaire) consiste à additionner ou soustraire les deux équations membre à membre pour faire disparaître une inconnue.",
        },
        {
          type: "rule",
          titleFr: "Les 4 étapes",
          itemsFr: [
            "1. Si nécessaire, multiplier une équation (ou les deux) pour que les coefficients d'une inconnue soient opposés",
            "2. Additionner les deux équations membre à membre",
            "3. Résoudre l'équation à une inconnue obtenue",
            "4. Substituer pour trouver la deuxième inconnue, puis vérifier",
          ],
        },
        {
          type: "heading",
          fr: "Exemple : élimination directe",
          black: true,
        },
        {
          type: "highlight",
          fr: "Système",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "{ 2x **+** 3y = 12",
            "{ 2x **−** y = 4",
          ],
        },
        {
          type: "highlight",
          fr: "Résolution",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Soustraction membre à membre : (2x **+** 3y) **−** (2x **−** y) = 12 **−** 4",
            "→ 4y = 8  →  y = 2",
            "Substitution : 2x **+** 6 = 12  →  2x = 6  →  x = 3",
            "**Solution : (3, 2)**",
          ],
        },
        {
          type: "heading",
          fr: "Exemple : multiplication préalable",
          black: true,
        },
        {
          type: "highlight",
          fr: "Système",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "{ 3x **+** 2y = 7",
            "{ x **−** y = 1",
          ],
        },
        {
          type: "highlight",
          fr: "Résolution",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Multiplier la 2ᵉ équation par 2 : 2x **−** 2y = 2",
            "Addition : (3x **+** 2y) **+** (2x **−** 2y) = 7 **+** 2",
            "→ 5x = 9  →  x = 9/5 = 1,8",
            "Puis y = x **−** 1 = 0,8",
          ],
        },
      ],
    },
  exercises: [],
  exercisePool: [],
  poolSize: 5,
};
