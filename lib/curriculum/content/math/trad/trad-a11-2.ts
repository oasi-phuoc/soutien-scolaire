import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_2: SubmoduleTrad = {
  submoduleId: "A11-2",
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
      text: {
        fr: "Résoudre une inéquation",
      }
    },
    {
      text: {
        fr: "On résout une inéquation comme une équation, en effectuant les mêmes opérations des deux côtés. Il y a cependant une exception fondamentale.",
      }
    },
    {
      text: {
        fr: "RÈGLE IMPORTANTE",
      },
      items: {
        fr: [
            "Quand on multiplie ou divise les deux membres par un nombre **négatif**, le sens de l'inégalité s'**inverse**.",
            "< devient >,  > devient <,  ≤ devient ≥,  ≥ devient ≤",
          ],
      }
    },
    {
      text: {
        fr: "Exemples de résolution",
      }
    },
    {
      text: {
        fr: "Exemple standard (diviseur positif)",
      }
    },
    {
      items: {
        fr: [
            "2x **+** 3 < 11",
            "→ 2x < 8  (on soustrait 3)",
            "→ x < 4  (on divise par **+**2 : signe inchangé)",
          ],
      }
    },
    {
      text: {
        fr: "Exemple standard (autre sens)",
      }
    },
    {
      items: {
        fr: [
            "3x **−** 5 ≥ 7",
            "→ 3x ≥ 12",
            "→ x ≥ 4",
          ],
      }
    },
    {
      text: {
        fr: "Exemple avec diviseur négatif (inversion du signe !)",
      }
    },
    {
      items: {
        fr: [
            "**−**2x > 6",
            "→ x < **−**3  (on divise par **−**2 : le signe s'inverse !)",
          ],
      }
    },
    {
      text: {
        fr: "Toujours noter la solution sous forme d'intervalle ou sur la droite numérique. Par exemple : x < 4 s'écrit ]−∞ ; 4[.",
      }
    },
  ],
};
