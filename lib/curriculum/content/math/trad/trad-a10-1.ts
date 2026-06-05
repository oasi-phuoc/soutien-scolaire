import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A10_1: SubmoduleTrad = {
  submoduleId: "A10-1",
  title: {
    fr: "Principe d'une équation",
    en: "Principle of an equation",
    ar: "مبدأ المعادلة",
    fa: "اصل معادله",
    ti: "ናይ ምዕርርያ መምርሒ",
    uk: "Принцип рівняння",
  },
  blocks: [
    {
      text: {
        fr: "Qu'est-ce qu'une équation ?",
      }
    },
    {
      text: {
        fr: "Une équation est une égalité contenant une inconnue. **Résoudre** une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie.",
      }
    },
    {
      text: {
        fr: "2x + 3 = 11\n→ Quelle valeur de x rend cette égalité vraie ?",
      }
    },
    {
      text: {
        fr: "Principe fondamental d'équivalence",
      }
    },
    {
      text: {
        fr: "On peut effectuer la même opération des deux côtés de l'égalité sans la modifier. C'est comme une **balance** : ce qu'on ajoute à gauche, on l'ajoute aussi à droite.",
      }
    },
    {
      text: {
        fr: "Opérations autorisées (des deux côtés)",
      },
      items: {
        fr: [
            "Additionner (**+**) ou soustraire (**−**) le même nombre",
            "Multiplier ou diviser par le même nombre (≠ 0)",
          ],
      }
    },
    {
      text: {
        fr: "Solution et vérification",
      }
    },
    {
      text: {
        fr: "Exemple complet",
      }
    },
    {
      items: {
        fr: [
            "Équation : 2x **+** 3 = 11",
            "Étape 1 : soustraire 3 des deux côtés → 2x = 8",
            "Étape 2 : diviser par 2 → x = 4",
            "Vérification : 2(4) **+** 3 = 8 **+** 3 = 11 ✓",
          ],
      }
    },
    {
      text: {
        fr: "Une équation du 1ᵉʳ degré (inconnue à la puissance 1) admet exactement une solution. Toujours vérifier la réponse en la substituant dans l'équation originale.",
      }
    },
  ],
};
