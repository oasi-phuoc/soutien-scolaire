import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A11-3",
    submoduleCode: "A11.3",
    theory: {
      title: {
        fr: "",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Notation par intervalles",
          black: true,
        },
        {
          type: "plain",
          fr: "La solution d'une inéquation à une variable s'écrit sous forme d'intervalle. Les crochets indiquent si les bornes sont incluses ou exclues.",
        },
        {
          type: "rule",
          titleFr: "Convention des crochets",
          itemsFr: [
            "Crochet fermé [ ou ] → borne **incluse** (correspond à ≤ ou ≥)",
            "Crochet ouvert ] ou [ → borne **exclue** (correspond à < ou >)",
          ],
        },
        {
          type: "table",
          headersFr: ["Inéquation", "Notation intervalle", "Droite numérique"],
          accentHeader: true,
          rows: [
            ["x < 3", "]**−**∞ ; 3[", "○ en 3, flèche gauche"],
            ["x ≤ 3", "]**−**∞ ; 3]", "● en 3, flèche gauche"],
            ["x > 2", "]2 ; **+**∞[", "○ en 2, flèche droite"],
            ["x ≥ 2", "[2 ; **+**∞[", "● en 2, flèche droite"],
            ["1 ≤ x < 5", "[1 ; 5[", "● en 1, ○ en 5, segment"],
          ],
        },
        {
          type: "heading",
          fr: "Exemple complet",
          black: true,
        },
        {
          type: "highlight",
          fr: "Résoudre et représenter",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2x **−** 4 ≤ 6",
            "→ 2x ≤ 10",
            "→ x ≤ 5",
            "Intervalle solution : ]**−**∞ ; 5]",
            "Droite numérique : ● en 5, flèche vers la gauche",
          ],
        },
        {
          type: "heading",
          fr: "Inéquation double",
          black: true,
        },
        {
          type: "plain",
          fr: "Une inéquation double encadre x entre deux valeurs. Sa solution est un segment sur la droite numérique.",
        },
        {
          type: "example",
          fr: "1 ≤ x + 2 < 6\n→ 1 − 2 ≤ x < 6 − 2\n→ −1 ≤ x < 4\nIntervalle : [−1 ; 4[\nDroite : ● en −1, ○ en 4, segment entre les deux",
        },
      ],
    },
  exercises: [],
  exercisePool: [
    { id: "a11-3-ep01", promptFr: "Résous x + 3 ≤ 10. Quelle est la borne de l'intervalle ?", type: "number", acceptable: ["7"], hintFr: "x ≤ 10 − 3 = 7." },
    { id: "a11-3-ep02", promptFr: "Résous 3x > 12. Quelle est la borne stricte ?", type: "number", acceptable: ["4"], hintFr: "x > 12 ÷ 3 = 4." },
    { id: "a11-3-ep03", promptFr: "Résous x − 4 < 8. Quelle est la borne stricte ?", type: "number", acceptable: ["12"], hintFr: "x < 8 + 4 = 12." },
    { id: "a11-3-ep04", promptFr: "Résous 5x ≤ 30. Quelle est la borne ?", type: "number", acceptable: ["6"], hintFr: "x ≤ 30 ÷ 5 = 6." },
    { id: "a11-3-ep05", promptFr: "Résous 2x + 4 < 14. Quelle est la borne stricte ?", type: "number", acceptable: ["5"], hintFr: "2x < 10, puis x < 5." },
    { id: "a11-3-ep06", promptFr: "Résous 6x ≥ 30. Quelle est la borne ?", type: "number", acceptable: ["5"], hintFr: "x ≥ 30 ÷ 6 = 5." },
    { id: "a11-3-ep07", promptFr: "Résous x + 4 > 11. Quelle est la borne stricte ?", type: "number", acceptable: ["7"], hintFr: "x > 11 − 4 = 7." },
    { id: "a11-3-ep08", promptFr: "Résous 4x − 8 ≤ 16. Quelle est la borne ?", type: "number", acceptable: ["6"], hintFr: "4x ≤ 24, puis x ≤ 6." },
    { id: "a11-3-ep09", promptFr: "Résous 7x < 42. Quelle est la borne stricte ?", type: "number", acceptable: ["6"], hintFr: "x < 42 ÷ 7 = 6." },
    { id: "a11-3-ep10", promptFr: "Résous 3x − 6 ≤ 9. Quelle est la borne ?", type: "number", acceptable: ["5"], hintFr: "3x ≤ 15, puis x ≤ 5." },
    { id: "a11-3-ep11", promptFr: "Résous 2x + 1 > 9. Quelle est la borne stricte ?", type: "number", acceptable: ["4"], hintFr: "2x > 8, puis x > 4." },
    { id: "a11-3-ep12", promptFr: "Résous 4x + 3 ≤ 23. Quelle est la borne ?", type: "number", acceptable: ["5"], hintFr: "4x ≤ 20, puis x ≤ 5." },
  ],
  poolSize: 5,
};
