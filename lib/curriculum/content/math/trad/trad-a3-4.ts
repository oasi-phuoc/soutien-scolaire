import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A3_4: SubmoduleTrad = {
  submoduleId: "A3-4",
  title: {
    fr: "Division en colonnes",
  },
  blocks: [
    {
      text: {
        fr: "La division en colonne permet de diviser de grands nombres en organisant les calculs étape par étape.",
      }
    },
    {
      text: {
        fr: "Principe",
      }
    },
    {
      items: {
        fr: [
          "On divise les chiffres du dividende de gauche à droite.",
          "À chaque étape : on cherche combien de fois le diviseur entre dans la valeur courante.",
          "On soustrait le produit et on abaisse le chiffre suivant.",
          "**Rappel :** dividende = diviseur × quotient + reste  (reste < diviseur)",
        ],
      }
    },
    {
      text: {
        fr: "Division à 1 chiffre",
      }
    },
    {
      text: {
        fr: "6 385 ÷ 4",
      }
    },
    {},
  ],
};
