import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A8_2: SubmoduleTrad = {
  submoduleId: "A8-2",
  title: {
    fr: "Calcul de puissances",
    en: "Computing powers",
    ar: "حساب الأس",
    fa: "محاسبه توان",
    ti: "ኣሰላልፋ ሓይሊ",
    uk: "Обчислення степенів",
  },
  blocks: [
    {
      text: {
        fr: "Comment calculer une puissance",
      }
    },
    {
      text: {
        fr: "Pour calculer une puissance, on multiplie la base par elle-même autant de fois que l'indique l'exposant.",
      }
    },
    {
      headers: {
        fr: ["Puissance", "Développement", "Résultat"],
      }
    },
    {
      text: {
        fr: "Propriétés des puissances (même base)",
      }
    },
    {
      text: {
        fr: "Règles de calcul",
      },
      items: {
        fr: [
            "aⁿ × aᵐ = aⁿ⁺ᵐ  (on **additionne** les exposants)",
            "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (on **soustrait** les exposants)",
          ],
      }
    },
    {
      text: {
        fr: "Exemples d'application",
      }
    },
    {
      items: {
        fr: [
            "2³ × 2² = 2³⁺² = 2⁵ = 32",
            "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27",
            "5⁴ × 5¹ = 5⁵ = 3 125",
          ],
      }
    },
    {
      text: {
        fr: "Ces règles ne s'appliquent que lorsque les bases sont identiques. On ne peut pas simplifier 2³ × 3² directement avec ces règles.",
      }
    },
  ],
};
