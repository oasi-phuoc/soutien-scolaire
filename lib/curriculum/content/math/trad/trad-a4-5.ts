import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A4_5: SubmoduleTrad = {
  submoduleId: "A4-5",
  title: {
    fr: "Multiplication de fractions",
    en: "Multiplication of fractions",
    ar: "ضرب الكسور",
    fa: "ضرب کسرها",
    ti: "ምብዛሕ ክፍሊታት",
    uk: "Множення дробів",
  },
  blocks: [
    {
      text: {
        fr: "Multiplier des fractions consiste à multiplier les numérateurs entre eux et les dénominateurs entre eux.",
      }
    },
    {
      text: {
        fr: "Règle de multiplication",
      }
    },
    {
      items: {
        fr: [
          "On multiplie les numérateurs entre eux.",
          "On multiplie les dénominateurs entre eux.",
          "On simplifie le résultat si possible.",
        ],
      }
    },
    {
      text: {
        fr: "Exemple",
      }
    },
    {
      text: {
        fr: "[[frac:2/3]] × [[frac:4/5]]",
      }
    },
    {
      items: {
        fr: [
          "On multiplie les numérateurs : 2 × 4 = 8",
          "On multiplie les dénominateurs : 3 × 5 = 15",
          "Résultat : [[frac:8/15]]",
        ],
      }
    },
    {
      text: {
        fr: "Exemple avec simplification",
      }
    },
    {
      text: {
        fr: "[[frac:3/4]] × [[frac:8/9]]",
      }
    },
    {
      items: {
        fr: [
          "On multiplie : 3 × 8 = 24 et 4 × 9 = 36",
          "On obtient : [[frac:24/36]]",
          "On simplifie : [[frac:24/36]] = [[frac:2/3]]",
        ],
      }
    },
    {
      text: {
        fr: "Exemple avec simplification avant calcul",
      }
    },
    {
      text: {
        fr: "[[frac:6/10]] × [[frac:5/3]]",
      }
    },
    {
      items: {
        fr: [
          "On simplifie avant de multiplier : 6 et 3 → 2 et 1, 5 et 10 → 1 et 2",
          "On calcule : [[frac:2/2]] × [[frac:1/1]] = [[frac:2/2]]",
          "Résultat : [[frac:1/1]] = 1",
        ],
      }
    },
  ],
};
