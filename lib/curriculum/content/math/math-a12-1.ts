import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A12-1",
    submoduleCode: "A12.1",
    theory: {
      title: {
        fr: "Méthode de substitution",
        en: "Substitution method",
        ar: "طريقة الإحلال",
        fa: "روش جایگذاری",
        ti: "ኣፈጻጽማ ምትካእ",
        uk: "Метод підстановки",
      },
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
    exercisePool: [],
    poolSize: 0,
  };
