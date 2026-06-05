import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A10_5: SubmoduleTrad = {
  submoduleId: "A10-5",
  title: {
    fr: "Équations avec fractions",
    en: "Equations with fractions",
    ar: "معادلات بالكسور",
    fa: "معادلات با کسر",
    ti: "ምዕርርያ ምስ ምምቅቅዮ",
    uk: "Рівняння з дробами",
  },
  blocks: [
    {
      text: {
        fr: "Éliminer les fractions",
      }
    },
    {
      text: {
        fr: "Pour résoudre une équation contenant des fractions, on commence par éliminer les dénominateurs en multipliant tous les termes par le dénominateur commun (ou le PPCM des dénominateurs).",
      }
    },
    {
      text: {
        fr: "Méthode",
      },
      items: {
        fr: [
            "1. Trouver le PPCM de tous les dénominateurs",
            "2. Multiplier chaque terme des deux membres par ce PPCM",
            "3. Simplifier : les fractions disparaissent",
            "4. Résoudre l'équation entière obtenue",
            "5. Vérifier la solution",
          ],
      }
    },
    {
      text: {
        fr: "Exemples",
      }
    },
    {
      text: {
        fr: "Exemple avec un seul dénominateur",
      }
    },
    {
      items: {
        fr: [
            "x/2 **+** 3 = 7",
            "→ Multiplier par 2 : x **+** 6 = 14",
            "→ x = 8",
            "Vérification : 8/2 **+** 3 = 4 **+** 3 = 7 ✓",
          ],
      }
    },
    {
      text: {
        fr: "Exemple avec deux dénominateurs différents",
      }
    },
    {
      items: {
        fr: [
            "x/3 **+** x/6 = 5",
            "→ PPCM(3, 6) = 6",
            "→ Multiplier par 6 : 2x **+** x = 30",
            "→ 3x = 30  →  x = 10",
            "Vérification : 10/3 **+** 10/6 = 3,33 **+** 1,67 = 5 ✓",
          ],
      }
    },
    {
      text: {
        fr: "La vérification est indispensable : après avoir trouvé la solution, la substituer dans l'équation originale (avec les fractions) pour valider.",
      }
    },
  ],
};
