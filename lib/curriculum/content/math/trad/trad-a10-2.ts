import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A10_2: SubmoduleTrad = {
  submoduleId: "A10-2",
  title: {
    fr: "Résolution : ax = b",
    en: "Solving: ax = b",
    ar: "الحل: ax = b",
    fa: "حل: ax = b",
    ti: "ምፍታሕ: ax = b",
    uk: "Розв'язання: ax = b",
  },
  blocks: [
    {
      text: {
        fr: "Forme ax = b",
      }
    },
    {
      text: {
        fr: "La forme ax = b se résout en divisant les deux membres par a (avec a ≠ 0) : on isole x.",
      }
    },
    {
      text: {
        fr: "Règle de résolution",
      },
      items: {
        fr: [
            "ax = b  →  x = b ÷ a  (on divise par **a** des deux côtés)",
          ],
      }
    },
    {
      text: {
        fr: "Exemples",
      }
    },
    {
      headers: {
        fr: ["Équation", "Résolution", "Solution", "Vérification"],
      }
    },
    {
      text: {
        fr: "Cas particuliers",
      }
    },
    {
      items: {
        fr: [
            "Si a = 0 et b = 0 : tout nombre est solution (infinité de solutions)",
            "Si a = 0 et b ≠ 0 : aucune solution (l'équation est impossible)",
          ],
      }
    },
    {
      text: {
        fr: "On ne divise jamais par 0. Si a = 0, l'équation ne peut pas être résolue par cette méthode.",
      }
    },
  ],
};
