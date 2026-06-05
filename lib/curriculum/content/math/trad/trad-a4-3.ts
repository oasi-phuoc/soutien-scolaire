import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A4_3: SubmoduleTrad = {
  submoduleId: "A4-3",
  title: {
    fr: "Comparaison de fractions",
    en: "Comparing fractions",
    ar: "مقارنة الكسور",
    fa: "مقایسه کسرها",
    ti: "መقارنة ፍርቂ",
    uk: "Порівняння дробів",
  },
  blocks: [
    {
      text: {
        fr: "Comparer des fractions signifie déterminer si une fraction est plus grande, plus petite ou égale à une autre fraction.",
      }
    },
    {
      text: {
        fr: "Même dénominateur",
      }
    },
    {
      text: {
        fr: "Quand les dénominateurs sont identiques, on compare seulement les numérateurs. La fraction avec le plus grand numérateur est la plus grande.",
      }
    },
    {
      text: {
        fr: "Exemple",
      }
    },
    {
      text: {
        fr: "La fraction [[frac:3/5]] est plus grande que la fraction [[frac:2/5]].",
      }
    },
    {
      items: {
        fr: [
            "[[frac:3/5]] > [[frac:2/5]] , car 3 > 2.",
          ],
      }
    },
    {
      text: {
        fr: "Même numérateur",
      }
    },
    {
      text: {
        fr: "Quand les numérateurs sont identiques, on compare seulement les dénominateurs. La fraction avec le plus petit dénominateur est la plus grande.",
      }
    },
    {
      text: {
        fr: "Exemple",
      }
    },
    {
      text: {
        fr: "La fraction [[frac:3/4]] est plus grande que la fraction [[frac:3/6]].",
      }
    },
    {
      items: {
        fr: [
            "[[frac:3/4]] > [[frac:3/6]] , car 4 < 6.",
          ],
      }
    },
    {
      text: {
        fr: "Cas général",
      }
    },
    {
      text: {
        fr: "Quand les fractions sont différentes, on utilise le produit en croix. La fraction avec le plus grand produit est la plus grande.",
      }
    },
    {
      text: {
        fr: "Exemple",
      }
    },
    {
      text: {
        fr: "La fraction [[frac:2/3]] est plus grande que la fraction [[frac:3/5]].",
      }
    },
    {
      items: {
        fr: [
            "[[frac:2/3]] > [[frac:3/6]] , car 2 × 5 = 10 et 3 × 3 = 9.",
          ],
      }
    },
  ],
};
