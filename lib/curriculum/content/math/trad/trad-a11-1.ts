import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_1: SubmoduleTrad = {
  submoduleId: "A11-1",
  title: {
    fr: "Symboles et droite numérique",
    en: "Symbols and number line",
    ar: "الرموز والمحور العددي",
    fa: "نمادها و محور اعداد",
    ti: "ምልክታትን ቁጽሪ ሕርምን",
    uk: "Символи та числова пряма",
  },
  blocks: [
    {
      text: {
        fr: "Qu'est-ce qu'une inéquation ?",
      }
    },
    {
      text: {
        fr: "Une inéquation est une inégalité contenant une inconnue. Sa solution est un ensemble de nombres (un intervalle), et non une valeur unique.",
      }
    },
    {
      text: {
        fr: "Les quatre symboles d'inégalité",
      }
    },
    {
      headers: {
        fr: ["Symbole", "Se lit", "Exemple", "Signification"],
      }
    },
    {
      text: {
        fr: "Représentation sur la droite numérique",
      }
    },
    {
      text: {
        fr: "Conventions graphiques",
      },
      items: {
        fr: [
            "Cercle **plein** ● pour ≤ ou ≥ → la valeur est **incluse** dans la solution",
            "Cercle **vide** ○ pour < ou > → la valeur est **exclue** de la solution",
            "Flèche vers la droite → solutions plus grandes",
            "Flèche vers la gauche → solutions plus petites",
          ],
      }
    },
    {
      headers: {
        fr: ["Inéquation", "Cercle en x₀", "Direction de la flèche"],
      }
    },
  ],
};
