import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_4: SubmoduleTrad = {
  submoduleId: "A11-4",
  title: {
    fr: "Fonction linéaire f(x) = ax",
    en: "Linear function f(x) = ax",
    ar: "الدالة الخطية f(x) = ax",
    fa: "تابع خطی f(x) = ax",
    ti: "ናይ ቐጥታ ስራሕ f(x) = ax",
    uk: "Лінійна функція f(x) = ax",
  },
  blocks: [
    {
      text: {
        fr: "La fonction linéaire",
      }
    },
    {
      text: {
        fr: "Une fonction linéaire a la forme f(x) = ax, où a est une constante appelée **pente** (ou coefficient directeur). Son graphique est toujours une **droite passant par l'origine (0, 0)**.",
      }
    },
    {
      text: {
        fr: "Propriété fondamentale",
      },
      items: {
        fr: [
            "f(0) = a × 0 = 0  → la droite passe toujours par l'origine",
          ],
      }
    },
    {
      text: {
        fr: "Influence de la pente a",
      }
    },
    {
      headers: {
        fr: ["Valeur de a", "Comportement de la droite", "Exemple"],
      }
    },
    {
      text: {
        fr: "Exemples",
      }
    },
    {
      headers: {
        fr: ["Fonction", "x = 1", "x = 2", "x = **−**1", "Passe par (0,0) ?"],
      }
    },
  ],
};
