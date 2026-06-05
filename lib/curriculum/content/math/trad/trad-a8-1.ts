import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A8_1: SubmoduleTrad = {
  submoduleId: "A8-1",
  title: {
    fr: "Notation puissance",
    en: "Power notation",
    ar: "رمز الأس",
    fa: "نمادگذاری توان",
    ti: "ምልክት ሓይሊ",
    uk: "Позначення степеня",
  },
  blocks: [
    {
      text: {
        fr: "Qu'est-ce qu'une puissance ?",
      }
    },
    {
      text: {
        fr: "Une puissance est une façon rapide d'écrire une multiplication répétée. Elle est composée de deux éléments : la **base** et l'**exposant**.",
      }
    },
    {
      text: {
        fr: "Notation puissance",
      },
      items: {
        fr: [
            "aⁿ = a × a × a × … × a  (n fois)",
            "**Base** = le nombre qu'on répète",
            "**Exposant** = le nombre de fois qu'on multiplie la base par elle-même",
          ],
      }
    },
    {
      text: {
        fr: "2³ = 2 × 2 × 2 = 8\nOn lit : « 2 exposant 3 » ou « 2 à la puissance 3 »",
      }
    },
    {
      text: {
        fr: "Cas particuliers importants",
      }
    },
    {
      label: {
        fr: "À retenir",
      },
      items: {
        fr: [
            "Tout nombre à la puissance 1 est lui-même : 5¹ = 5",
            "Tout nombre (≠ 0) à la puissance 0 vaut 1 : 7⁰ = 1",
          ],
      }
    },
    {
      text: {
        fr: "Attention : 2³ ≠ 2 × 3. La puissance est une multiplication répétée, pas une multiplication simple. 2³ = 8, mais 2 × 3 = 6.",
      }
    },
    {
      headers: {
        fr: ["Expression", "Développement", "Résultat"],
      }
    },
    {
      text: {
        fr: "Table des puissances (exposants 1 à 5)",
      }
    },
    {},
  ],
};
