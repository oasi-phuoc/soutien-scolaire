import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A12-2",
    submoduleCode: "A12.2",
    theory: {
      title: {
        fr: "",
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
  exercisePool: [
    { id: "a12-2-ep01", promptFr: "Système : 3x + y = 11 et 3x − y = 7. Quelle est la valeur de x ?", type: "number", acceptable: ["3"], hintFr: "Additionne les deux équations : 6x = 18, donc x = 3." },
    { id: "a12-2-ep02", promptFr: "Système : 3x + y = 11 et 3x − y = 7. Quelle est la valeur de y ?", type: "number", acceptable: ["2"], hintFr: "x = 3, puis y = 11 − 9 = 2." },
    { id: "a12-2-ep03", promptFr: "Système : x + 2y = 13 et x − y = 4. Quelle est la valeur de y ?", type: "number", acceptable: ["3"], hintFr: "Soustrait : 3y = 9, donc y = 3." },
    { id: "a12-2-ep04", promptFr: "Système : x + 2y = 13 et x − y = 4. Quelle est la valeur de x ?", type: "number", acceptable: ["7"], hintFr: "y = 3, puis x = 4 + 3 = 7." },
    { id: "a12-2-ep05", promptFr: "Système : 4x + y = 15 et 2x + y = 9. Quelle est la valeur de x ?", type: "number", acceptable: ["3"], hintFr: "Soustrait les deux équations : 2x = 6, donc x = 3." },
    { id: "a12-2-ep06", promptFr: "Système : 4x + y = 15 et 2x + y = 9. Quelle est la valeur de y ?", type: "number", acceptable: ["3"], hintFr: "x = 3, puis 2 × 3 + y = 9, y = 3." },
    { id: "a12-2-ep07", promptFr: "Système : 5x + y = 14 et 3x + y = 10. Quelle est la valeur de x ?", type: "number", acceptable: ["2"], hintFr: "Soustrait : 2x = 4, donc x = 2." },
    { id: "a12-2-ep08", promptFr: "Système : 5x + y = 14 et 3x + y = 10. Quelle est la valeur de y ?", type: "number", acceptable: ["4"], hintFr: "x = 2, puis 3 × 2 + y = 10, y = 4." },
    { id: "a12-2-ep09", promptFr: "Système : 2x + 3y = 16 et 2x + y = 8. Quelle est la valeur de y ?", type: "number", acceptable: ["4"], hintFr: "Soustrait : 2y = 8, donc y = 4." },
    { id: "a12-2-ep10", promptFr: "Système : 2x + 3y = 16 et 2x + y = 8. Quelle est la valeur de x ?", type: "number", acceptable: ["2"], hintFr: "y = 4, puis 2x + 4 = 8, donc 2x = 4, x = 2." },
    { id: "a12-2-ep11", promptFr: "Système : 6x + y = 19 et 2x + y = 11. Quelle est la valeur de x ?", type: "number", acceptable: ["2"], hintFr: "Soustrait : 4x = 8, donc x = 2." },
    { id: "a12-2-ep12", promptFr: "Système : 6x + y = 19 et 2x + y = 11. Quelle est la valeur de y ?", type: "number", acceptable: ["7"], hintFr: "x = 2, puis 2 × 2 + y = 11, y = 7." },
  ],
  poolSize: 5,
};
