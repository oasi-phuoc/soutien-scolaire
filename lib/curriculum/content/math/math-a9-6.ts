import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-6",
    submoduleCode: "A9.6",
    theory: {
      title: {
        fr: "Factorisation simple",
        en: "Simple factoring",
        ar: "التحليل البسيط",
        fa: "فاکتورگیری ساده",
        ti: "ቀሊል ምፍራድ",
        uk: "Просте винесення за дужки",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce que factoriser ?",
          black: true,
        },
        {
          type: "plain",
          fr: "Factoriser est l'opération inverse du développement : on met un facteur commun en évidence. On passe d'une somme à un produit.",
        },
        {
          type: "rule",
          titleFr: "Méthode de factorisation",
          itemsFr: [
            "1. Identifier le plus grand facteur commun (PGCD) de tous les termes",
            "2. Le placer devant une parenthèse",
            "3. Écrire à l'intérieur ce qui reste après division par ce facteur",
            "4. Vérifier en développant",
          ],
        },
        {
          type: "heading",
          fr: "Exemples",
          black: true,
        },
        {
          type: "table",
          headersFr: ["Expression", "Facteur commun", "Forme factorisée"],
          accentHeader: true,
          rows: [
            ["6x **+** 9", "3", "3(2x **+** 3)"],
            ["10a **−** 15", "5", "5(2a **−** 3)"],
            ["4x² **+** 8x", "4x", "4x(x **+** 2)"],
            ["12y **−** 18", "6", "6(2y **−** 3)"],
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
            "3(2x **+** 3) = 6x **+** 9 ✓",
            "5(2a **−** 3) = 10a **−** 15 ✓",
            "4x(x **+** 2) = 4x² **+** 8x ✓",
          ],
        },
        {
          type: "note",
          fr: "La vérification est indispensable : en développant le résultat factorisé, on doit retrouver exactement l'expression de départ.",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a9-6-ep01", promptFr: "Factorise 6x + 9.", type: "short_text", acceptable: ["3(2x+3)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep02", promptFr: "Factorise 4a + 8.", type: "short_text", acceptable: ["4(a+2)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep03", promptFr: "Factorise 5x − 15.", type: "short_text", acceptable: ["5(x-3)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep04", promptFr: "Factorise 3n + 12.", type: "short_text", acceptable: ["3(n+4)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep05", promptFr: "Factorise 8y − 4.", type: "short_text", acceptable: ["4(2y-1)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep06", promptFr: "Factorise 10x + 15.", type: "short_text", acceptable: ["5(2x+3)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep07", promptFr: "Factorise 6a − 18.", type: "short_text", acceptable: ["6(a-3)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep08", promptFr: "Factorise 2x + 6.", type: "short_text", acceptable: ["2(x+3)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep09", promptFr: "Factorise 9n − 3.", type: "short_text", acceptable: ["3(3n-1)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
      { id: "a9-6-ep10", promptFr: "Factorise 4b + 12.", type: "short_text", acceptable: ["4(b+3)"], hintFr: "Cherche le facteur commun à tous les termes, puis mets-le en évidence."},
    ],
    poolSize: 5,
  };
