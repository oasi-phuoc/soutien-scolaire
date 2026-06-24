import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-6",
    submoduleCode: "A9.6",
    theory: {
      title: {
        fr: "Factorisation simple",
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
    { id: "a9-6-ep01", promptFr: "Factorise 8x + 12.", type: "short_text", acceptable: ["4(2x+3)", "4(2x + 3)"], hintFr: "8 et 12 sont divisibles par 4 : 8x + 12 = 4(2x + 3)." },
    { id: "a9-6-ep02", promptFr: "Factorise 6a − 9.", type: "short_text", acceptable: ["3(2a-3)", "3(2a − 3)"], hintFr: "6 et 9 sont divisibles par 3 : 6a − 9 = 3(2a − 3)." },
    { id: "a9-6-ep03", promptFr: "Factorise 10x + 5.", type: "short_text", acceptable: ["5(2x+1)", "5(2x + 1)"], hintFr: "10 et 5 sont divisibles par 5 : 10x + 5 = 5(2x + 1)." },
    { id: "a9-6-ep04", promptFr: "Factorise 4n − 16.", type: "short_text", acceptable: ["4(n-4)", "4(n − 4)"], hintFr: "4 et 16 sont divisibles par 4 : 4n − 16 = 4(n − 4)." },
    { id: "a9-6-ep05", promptFr: "Factorise 9y + 27.", type: "short_text", acceptable: ["9(y+3)", "9(y + 3)"], hintFr: "9 et 27 sont divisibles par 9 : 9y + 27 = 9(y + 3)." },
    { id: "a9-6-ep06", promptFr: "Factorise 15x − 10.", type: "short_text", acceptable: ["5(3x-2)", "5(3x − 2)"], hintFr: "15 et 10 sont divisibles par 5 : 15x − 10 = 5(3x − 2)." },
    { id: "a9-6-ep07", promptFr: "Factorise 12a + 8.", type: "short_text", acceptable: ["4(3a+2)", "4(3a + 2)"], hintFr: "12 et 8 sont divisibles par 4 : 12a + 8 = 4(3a + 2)." },
    { id: "a9-6-ep08", promptFr: "Factorise 6x − 24.", type: "short_text", acceptable: ["6(x-4)", "6(x − 4)"], hintFr: "6 et 24 sont divisibles par 6 : 6x − 24 = 6(x − 4)." },
    { id: "a9-6-ep09", promptFr: "Factorise 14n + 21.", type: "short_text", acceptable: ["7(2n+3)", "7(2n + 3)"], hintFr: "14 et 21 sont divisibles par 7 : 14n + 21 = 7(2n + 3)." },
    { id: "a9-6-ep10", promptFr: "Factorise 3x + 18.", type: "short_text", acceptable: ["3(x+6)", "3(x + 6)"], hintFr: "3 et 18 sont divisibles par 3 : 3x + 18 = 3(x + 6)." },
    { id: "a9-6-ep11", promptFr: "Factorise 20a − 15.", type: "short_text", acceptable: ["5(4a-3)", "5(4a − 3)"], hintFr: "20 et 15 sont divisibles par 5 : 20a − 15 = 5(4a − 3)." },
    { id: "a9-6-ep12", promptFr: "Factorise 16x + 24.", type: "short_text", acceptable: ["8(2x+3)", "8(2x + 3)"], hintFr: "16 et 24 sont divisibles par 8 : 16x + 24 = 8(2x + 3)." },
  ],
  poolSize: 5,
};
