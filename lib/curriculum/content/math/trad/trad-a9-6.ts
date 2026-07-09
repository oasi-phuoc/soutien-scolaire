import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A9_6: SubmoduleTrad = {
  submoduleId: "A9-6",
  title: {
    fr: "Factorisation",
    en: "Simple factoring",
    ar: "التحليل البسيط",
    fa: "فاکتورگیری ساده",
    ti: "ቀሊል ምፍራድ",
    uk: "Просте винесення за дужки",
  },
  blocks: [
    {
      text: {
        fr: "Qu'est-ce que factoriser ?",
      }
    },
    {
      text: {
        fr: "Factoriser est l'opération inverse du développement : on met un facteur commun en évidence. On passe d'une somme à un produit.",
      }
    },
    {
      text: {
        fr: "Méthode de factorisation",
      }
    },
    {
      text: {
        fr: "**1.** Identifier le plus grand facteur commun (PGCD) de tous les termes",
      }
    },
    {
      text: {
        fr: "**2.** Le placer devant une parenthèse",
      }
    },
    {
      text: {
        fr: "**3.** Écrire à l'intérieur ce qui reste après division par ce facteur",
      }
    },
    {
      text: {
        fr: "**4.** Vérifier en développant",
      }
    },
    {
      text: {
        fr: "Exemples",
      }
    },
    {
      headers: {
        fr: ["Expression", "Facteur commun", "Forme factorisée"],
      }
    },
    {
      text: {
        fr: "3(2x **+** 3) = 6x **+** 9 ✓",
      }
    },
    {
      text: {
        fr: "5(2a **−** 3) = 10a **−** 15 ✓",
      }
    },
    {
      text: {
        fr: "4x(x **+** 2) = 4x² **+** 8x ✓",
      }
    },
    {
      text: {
        fr: "La vérification est indispensable : en développant le résultat factorisé, on doit retrouver exactement l'expression de départ.",
      }
    },
  ],
};
