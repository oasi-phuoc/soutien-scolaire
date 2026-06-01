import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A11_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A11-2",
    submoduleCode: "A11.2",
    theory: {
      title: {
        fr: "Résolution d'inéquations simples",
        en: "Solving simple inequalities",
        ar: "حل المتباينات البسيطة",
        fa: "حل نامعادلات ساده",
        ti: "ምፍታሕ ቀሊል ዘይምዕርርያ",
        uk: "Розв'язання простих нерівностей",
      },
      blocks: [
        {
          type: "heading",
          fr: "Résoudre une inéquation",
          black: true,
        },
        {
          type: "plain",
          fr: "On résout une inéquation comme une équation, en effectuant les mêmes opérations des deux côtés. Il y a cependant une exception fondamentale.",
        },
        {
          type: "rule",
          titleFr: "RÈGLE IMPORTANTE",
          itemsFr: [
            "Quand on multiplie ou divise les deux membres par un nombre **négatif**, le sens de l'inégalité s'**inverse**.",
            "< devient >,  > devient <,  ≤ devient ≥,  ≥ devient ≤",
          ],
        },
        {
          type: "heading",
          fr: "Exemples de résolution",
          black: true,
        },
        {
          type: "highlight",
          fr: "Exemple standard (diviseur positif)",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2x **+** 3 < 11",
            "→ 2x < 8  (on soustrait 3)",
            "→ x < 4  (on divise par **+**2 : signe inchangé)",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple standard (autre sens)",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "3x **−** 5 ≥ 7",
            "→ 3x ≥ 12",
            "→ x ≥ 4",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple avec diviseur négatif (inversion du signe !)",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "**−**2x > 6",
            "→ x < **−**3  (on divise par **−**2 : le signe s'inverse !)",
          ],
        },
        {
          type: "note",
          fr: "Toujours noter la solution sous forme d'intervalle ou sur la droite numérique. Par exemple : x < 4 s'écrit ]−∞ ; 4[.",
        },
      ],
    },
    exercises: [],
    exercisePool: [],
    poolSize: 0,
  };
