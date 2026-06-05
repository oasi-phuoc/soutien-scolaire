import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A4_6: SubmoduleTrad = {
  submoduleId: "A4-6",
  title: {
    fr: "Division de fractions",
    en: "Division of fractions",
    ar: "قسمة الكسور",
    fa: "تقسیم کسرها",
    ti: "ምክፍፋል ክፍሊታት",
    uk: "Ділення дробів",
  },
  blocks: [
    {
      text: {
        fr: "Diviser des fractions consiste à multiplier par l’inverse de la deuxième fraction.",
      }
    },
    {
      text: {
        fr: "Règle de division",
      }
    },
    {
      items: {
        fr: [
          "On garde la première fraction.",
          "On remplace la division par une multiplication.",
          "On inverse la deuxième fraction.",
          "On multiplie comme dans les multiplications de fractions.",
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
        fr: "[[frac:2/3]] ÷ [[frac:4/5]]",
      }
    },
    {
      items: {
        fr: [
          "On transforme la division en multiplication : [[frac:2/3]] × [[frac:5/4]]",
          "On multiplie : 2 × 5 = 10 et 3 × 4 = 12",
          "Résultat : [[frac:10/12]]",
          "On simplifie : [[frac:10/12]] = [[frac:5/6]]",
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
        fr: "[[frac:6/10]] ÷ [[frac:3/5]]",
      }
    },
    {
      items: {
        fr: [
          "On transforme : [[frac:6/10]] × [[frac:5/3]]",
          "On simplifie avant de calculer : 6 et 3 → 2 et 1, 5 et 10 → 1 et 2",
          "On obtient : [[frac:2/2]] × [[frac:1/1]]",
          "Résultat : 1",
        ],
      }
    },
    {
      text: {
        fr: "À retenir",
      }
    },
    {
      items: {
        fr: [
          "Diviser par une fraction = multiplier par son inverse.",
          "Toujours simplifier si possible avant ou après le calcul.",
        ],
      }
    },
  ],
};
