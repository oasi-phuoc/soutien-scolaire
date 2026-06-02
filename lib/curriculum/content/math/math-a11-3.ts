import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A11-3",
    submoduleCode: "A11.3",
    theory: {
      title: {
        fr: "Représentation graphique des solutions",
        en: "Graphical representation of solutions",
        ar: "التمثيل البياني للحلول",
        fa: "نمایش گرافیکی جواب‌ها",
        ti: "ስዕላዊ ምርኣይ ናይ ፍትሒ",
        uk: "Графічне зображення розв'язків",
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
      { id: "a11-3-ep01", promptFr: "Résous x + 2 ≤ 7. Donne la borne de l'intervalle.", type: "number", acceptable: ["5"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep02", promptFr: "Résous 2x > 8. Donne la borne stricte.", type: "number", acceptable: ["4"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep03", promptFr: "Résous x − 1 < 5. Donne la borne stricte.", type: "number", acceptable: ["6"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep04", promptFr: "Résous 3x ≤ 15. Donne la borne.", type: "number", acceptable: ["5"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep05", promptFr: "Résous 2x + 1 < 9. Donne la borne stricte.", type: "number", acceptable: ["4"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep06", promptFr: "Résous 4x ≥ 20. Donne la borne.", type: "number", acceptable: ["5"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep07", promptFr: "Résous x + 5 > 12. Donne la borne stricte.", type: "number", acceptable: ["7"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep08", promptFr: "Résous 3x − 3 ≤ 12. Donne la borne.", type: "number", acceptable: ["5"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep09", promptFr: "Résous 5x < 35. Donne la borne stricte.", type: "number", acceptable: ["7"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
      { id: "a11-3-ep10", promptFr: "Résous 2x − 4 ≤ 6. Donne la borne.", type: "number", acceptable: ["5"], hintFr: "Résous l'inégalité, puis note la solution sous forme d'intervalle [ ou ] selon les bornes."},
    ],
    poolSize: 5,
  };
