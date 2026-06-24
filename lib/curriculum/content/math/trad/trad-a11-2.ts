import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_2: SubmoduleTrad = {
  submoduleId: "A11-2",
  title: {
    fr: "Tableau de valeurs",
    en: "Table of values",
    ar: "جدول القيم",
    fa: "جدول مقادیر",
    ti: "ሰሌዳ ዋጋ",
    uk: "Таблиця значень",
  },
  blocks: [
    {
      text: {
        fr: "Construire un tableau de valeurs",
      }
    },
    {
      text: {
        fr: "Un tableau de valeurs liste plusieurs couples (x, f(x)). On choisit des valeurs régulières de x et on calcule f(x) pour chacune.",
      }
    },
    {
      text: {
        fr: "Méthode",
      },
      items: {
        fr: [
            "1. Choisir des valeurs entières de x (souvent symétriques autour de 0)",
            "2. Calculer f(x) pour chaque valeur de x",
            "3. Remplir le tableau ligne par ligne",
            "4. Utiliser ces points pour tracer le graphique",
          ],
      }
    },
    {
      text: {
        fr: "Exemple : f(x) = 2x + 1",
      }
    },
    {
      headers: {
        fr: ["x", "−2", "−1", "0", "1", "2"],
      }
    },
    {
      text: {
        fr: "Exemple : f(x) = x² − 1",
      }
    },
    {
      headers: {
        fr: ["x", "−2", "−1", "0", "1", "2"],
      }
    },
    {
      text: {
        fr: "Conseil : choisir des valeurs symétriques autour de 0 permet de voir la tendance globale de la fonction et de faciliter le tracé du graphique.",
      }
    },
  ],
};
