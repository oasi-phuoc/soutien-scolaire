import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A5-2",
    submoduleCode: "A5.2",
    theory: {
      title: { fr: "Suite de nombres à virgule", en: "Sequences of decimal numbers", ar: "متتالية أعداد عشرية", fa: "دنباله اعداد اعشاری", ti: "ተኸታተልቲ ቁጽሪ ቪርጉላ", uk: "Послідовності десяткових чисел" },
      blocks: [
        { type: "heading", fr: "Trouver le pas d'une suite", black: true },
        { type: "highlight", fr: "Principe" },
        {
          type: "section", labelFr: "", itemsFr: [
            "1. Repérer si la suite est **croissante** (augmente) ou **décroissante** (diminue).",
            "2. Calculer le **pas** (écart entre deux termes consécutifs).",
            "3. Appliquer le pas pour trouver les termes manquants.",
          ],
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Cas 1 — Deux termes consécutifs connus", black: false },
        { type: "highlight", fr: "Suite croissante" },
        {
          type: "section", labelFr: "", itemsFr: [
            "Pas = terme suivant − terme précédent",
            "Terme manquant = terme connu + pas",
          ],
        },
        { type: "example", fr: "2,5 ; ___ ; 3,5 ; 4  →  pas = 4 − 3,5 = 0,5  →  terme manquant = 2,5 + 0,5 = 3,0" },
        { type: "highlight", fr: "Suite décroissante" },
        {
          type: "section", labelFr: "", itemsFr: [
            "Pas = terme précédent − terme suivant",
            "Terme manquant = terme connu − pas",
          ],
        },
        { type: "example", fr: "7,25 ; 7 ; ___ ; 6,5  →  pas = 7,25 − 7 = 0,25  →  terme manquant = 7 − 0,25 = 6,75" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Cas 2 — Pas de termes consécutifs", black: false },
        {
          type: "section", labelFr: "", itemsFr: [
            "Soustraire les deux termes connus : grand − petit = écart total",
            "Diviser par le nombre d'espaces entre eux = pas",
          ],
        },
        { type: "example", fr: "___ ; 7,2 ; ___ ; 9,6  →  (9,6 − 7,2) ÷ 2 = 1,2  →  termes : 6,0 et 8,4" },
        { type: "note", fr: "Le nombre d'espaces = nombre de termes manquants + 1" },
      ],
      paragraphs: { fr: [] },
    },
    exercises: [],
    exercisePool: [],
    poolSize: 5,
  };
