import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A5_4: SubmoduleTrad = {
  submoduleId: "A5-4",
  title: {
    fr: "Addition et soustraction de décimaux",
    en: "Addition and subtraction of decimals",
    ar: "جمع وطرح الأعداد العشرية",
    fa: "جمع و تفریق اعشار",
    ti: "ምደማር ምቅናስ ቁጽሪ ቪርጉላ",
    uk: "Додавання і віднімання десяткових",
  },
  blocks: [
    {
      text: {
        fr: "Addition en colonnes",
      }
    },
    {
      text: {
        fr: "Règle fondamentale",
      }
    },
    {
      items: {
        fr: [
            "**Aligner les virgules** : chaque chiffre doit être dans sa colonne.",
            "Additionner de droite à gauche (dixièmes → unités → dizaines).",
            "Si la somme ≥ 10 → poser les unités et **retenir 1**.",
          ],
      }
    },
    {
      text: {
        fr: "Soustraction en colonnes",
      }
    },
    {
      text: {
        fr: "Règle de l'emprunt",
      }
    },
    {
      items: {
        fr: [
            "Si soustraction impossible (ex. 3 − 8) → **emprunter 1** à la colonne de gauche.",
            "La colonne empruntée est réduite de 1. La colonne courante gagne 10.",
          ],
      }
    },
    {},
  ],
};
