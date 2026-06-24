import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A12-1",
    submoduleCode: "A12.1",
    theory: {
      title: {
        fr: "Méthode de substitution",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Système de deux équations",
          black: true,
        },
        {
          type: "plain",
          fr: "Un système de deux équations à deux inconnues admet généralement une solution unique (x, y). La méthode de substitution exprime une inconnue en fonction de l'autre, puis substitue.",
        },
        {
          type: "rule",
          titleFr: "Les 5 étapes de la méthode",
          itemsFr: [
            "1. Choisir l'équation la plus simple pour exprimer x (ou y)",
            "2. Exprimer x en fonction de y (ou y en fonction de x)",
            "3. Substituer cette expression dans l'autre équation",
            "4. Résoudre l'équation à une inconnue obtenue",
            "5. Trouver la deuxième inconnue, puis vérifier dans les deux équations",
          ],
        },
        {
          type: "heading",
          fr: "Exemple détaillé",
          black: true,
        },
        {
          type: "highlight",
          fr: "Système à résoudre",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "{ x **+** y = 7",
            "{ 2x **−** y = 2",
          ],
        },
        {
          type: "highlight",
          fr: "Résolution pas à pas",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "De la 1ʳᵉ équation : x = 7 **−** y",
            "Substitution dans la 2ᵉ : 2(7 **−** y) **−** y = 2",
            "→ 14 **−** 2y **−** y = 2",
            "→ 14 **−** 3y = 2",
            "→ 3y = 12  →  y = 4",
            "Puis : x = 7 **−** 4 = 3",
            "**Solution : (x, y) = (3, 4)**",
          ],
        },
        {
          type: "highlight",
          fr: "Vérification",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Équation 1 : 3 **+** 4 = 7 ✓",
            "Équation 2 : 2(3) **−** 4 = 6 **−** 4 = 2 ✓",
          ],
        },
      ],
    },
  exercises: [],
  exercisePool: [
    { id: "a12-1-ep01", promptFr: "Système : x + y = 10 et y = 3. Quelle est la valeur de x ?", type: "number", acceptable: ["7"], hintFr: "Remplace y par 3 : x + 3 = 10, donc x = 7." },
    { id: "a12-1-ep02", promptFr: "Système : x + y = 12 et x = 5. Quelle est la valeur de y ?", type: "number", acceptable: ["7"], hintFr: "Remplace x par 5 : 5 + y = 12, donc y = 7." },
    { id: "a12-1-ep03", promptFr: "Système : 3x + y = 14 et y = 2. Quelle est la valeur de x ?", type: "number", acceptable: ["4"], hintFr: "3x + 2 = 14, donc 3x = 12." },
    { id: "a12-1-ep04", promptFr: "Système : x + y = 11 et x − y = 3. Quelle est la valeur de x ?", type: "number", acceptable: ["7"], hintFr: "Additionne les deux équations : 2x = 14." },
    { id: "a12-1-ep05", promptFr: "Système : x + y = 11 et x − y = 3. Quelle est la valeur de y ?", type: "number", acceptable: ["4"], hintFr: "x = 7, puis y = 11 − 7 = 4." },
    { id: "a12-1-ep06", promptFr: "Système : 2x + y = 13 et x = 4. Quelle est la valeur de y ?", type: "number", acceptable: ["5"], hintFr: "2 × 4 + y = 13, donc 8 + y = 13, y = 5." },
    { id: "a12-1-ep07", promptFr: "Système : x + 4y = 17 et y = 3. Quelle est la valeur de x ?", type: "number", acceptable: ["5"], hintFr: "x + 4 × 3 = 17, donc x + 12 = 17." },
    { id: "a12-1-ep08", promptFr: "Système : x + y = 9 et 3x − y = 7. Quelle est la valeur de x ?", type: "number", acceptable: ["4"], hintFr: "Additionne les deux équations : 4x = 16." },
    { id: "a12-1-ep09", promptFr: "Système : x + y = 9 et 3x − y = 7. Quelle est la valeur de y ?", type: "number", acceptable: ["5"], hintFr: "x = 4, puis y = 9 − 4 = 5." },
    { id: "a12-1-ep10", promptFr: "Système : 4x − y = 7 et x = 3. Quelle est la valeur de y ?", type: "number", acceptable: ["5"], hintFr: "4 × 3 − y = 7, donc 12 − y = 7, y = 5." },
    { id: "a12-1-ep11", promptFr: "Système : x + 2y = 16 et y = 4. Quelle est la valeur de x ?", type: "number", acceptable: ["8"], hintFr: "x + 2 × 4 = 16, donc x + 8 = 16." },
    { id: "a12-1-ep12", promptFr: "Système : 5x + y = 18 et y = 3. Quelle est la valeur de x ?", type: "number", acceptable: ["3"], hintFr: "5x + 3 = 18, donc 5x = 15." },
  ],
  poolSize: 5,
};
