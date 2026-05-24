import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A4-2",
    submoduleCode: "A4.2",
    theory: {
      title: { fr: "Fractions équivalentes", en: "Equivalent fractions", ar: "الكسور المكافئة", fa: "کسرهای معادل", ti: "ፍርቂ ምፍላጥ", uk: "Еквівалентні дроби" },
      paragraphs: {
        fr: [
          "Deux fractions sont équivalentes lorsqu’elles représentent la même quantité, même si les nombres sont différents.",
        ],
        
      },
      
      blocks: [      
      { type: "plain", fr: "Deux fractions sont équivalentes lorsqu’elles représentent la même quantité, même si les nombres sont différents." },
      { type: "highlight", fr: "Exemple"},

      { type: "plain", fr: "Ces fractions sont différentes, mais elles ont la même valeur." },

      {
          type: "section",
          labelFr: "",
          itemsFr: [
            "[[frac:1/2]] = [[frac:2/4]] = [[frac:3/6]]",
          ],
        },

      { type: "heading", fr: "Simplifier une fraction", black: true },
      { type: "plain", fr: "Simplifier une fraction signifie écrire une fraction équivalente plus simple." },
      
      {
          type: "highlight",
          fr: "Exemple",
        },

      { type: "plain", fr: "La fraction simplifiée de [[frac:12/18]] = est donc [[frac:2/3]]." },

      {
          type: "section",
          labelFr: "",
          itemsFr: [
            "[[frac:12/18]] = [[frac:12÷6/18÷6]] = [[frac:2/3]].",
          ],
        },

      { type: "heading", fr: "Vérifier si les fractions sont équivalentes", black: true },
      { type: "plain", fr: "On compare les produits en croix pour vérifier si les fractions sont équivalentes." },
      
      {
          type: "highlight",
          fr: "Exemple",
        },

      { type: "plain", fr: "Les fractions [[frac:12/18]] et [[frac:2/3]] sont équivalentes car : " },

      {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2 × 18 = 36 et 3 × 12 = 36.",
          ],
        },
      ],
    },


    exercises: [

    ],
  };