import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A4-3",
    submoduleCode: "A4.3",
    theory: {
      title: { fr: "Comparaison de fractions", en: "Comparing fractions", ar: "مقارنة الكسور", fa: "مقایسه کسرها", ti: "መقارنة ፍርቂ", uk: "Порівняння дробів" },
      paragraphs: {
        fr: [
          "Comparer des fractions signifie déterminer si une fraction est plus grande, plus petite ou égale à une autre fraction.",
        ],
      },
      blocks: [
      { type: "plain", fr: "Comparer des fractions signifie déterminer si une fraction est plus grande, plus petite ou égale à une autre fraction." },

      { type: "heading", fr: "Même dénominateur", black: true },
      { type: "plain", fr: "Quand les dénominateurs sont identiques, on compare seulement les numérateurs. La fraction avec le plus grand numérateur est la plus grande." },

      {
          type: "highlight",
          fr: "Exemple",
        },

      { type: "plain", fr: "La fraction [[frac:3/5]] est plus grande que la fraction [[frac:2/5]]." },

      {
          type: "section",
          labelFr: "",
          itemsFr: [
            "[[frac:3/5]] > [[frac:2/5]] , car 3 > 2.",
          ],
        },
      
      { type: "heading", fr: "Même numérateur", black: true },
      { type: "plain", fr: "Quand les numérateurs sont identiques, on compare seulement les dénominateurs. La fraction avec le plus petit dénominateur est la plus grande." },

      {
          type: "highlight",
          fr: "Exemple",
        },

      { type: "plain", fr: "La fraction [[frac:3/4]] est plus grande que la fraction [[frac:3/6]]." },

      {
          type: "section",
          labelFr: "",
          itemsFr: [
            "[[frac:3/4]] > [[frac:3/6]] , car 4 < 6.",
          ],
        },
      
      { type: "heading", fr: "Cas général", black: true },
      { type: "plain", fr: "Quand les fractions sont différentes, on utilise le produit en croix. La fraction avec le plus grand produit est la plus grande." },

      {
          type: "highlight",
          fr: "Exemple",
        },

      { type: "plain", fr: "La fraction [[frac:2/3]] est plus grande que la fraction [[frac:3/5]]." },

      {
          type: "section",
          labelFr: "",
          itemsFr: [
            "[[frac:2/3]] > [[frac:3/6]] , car 2 × 5 = 10 et 3 × 3 = 9.",
          ],
        },
      ],
    },


    exercises: [

    ],
  };