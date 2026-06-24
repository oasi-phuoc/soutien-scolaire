import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_5: SubmoduleTrad = {
  submoduleId: "A11-5",
  title: {
    fr: "Fonction affine f(x) = ax + b",
    en: "Affine function f(x) = ax + b",
    ar: "الدالة الانتسابية f(x) = ax + b",
    fa: "تابع آفین f(x) = ax + b",
    ti: "ናይ ኣፊን ስራሕ f(x) = ax + b",
    uk: "Лінійна функція f(x) = ax + b",
  },
  blocks: [
    {
      text: {
        fr: "La fonction affine",
      }
    },
    {
      text: {
        fr: "Une fonction affine a la forme f(x) = ax **+** b. Son graphique est une **droite** (pas nécessairement par l'origine).",
      }
    },
    {
      text: {
        fr: "Les deux paramètres",
      },
      items: {
        fr: [
            "**a** = pente (coefficient directeur) : mesure l'inclinaison de la droite",
            "**b** = ordonnée à l'origine : valeur de y quand x = 0, point où la droite coupe l'axe y",
          ],
      }
    },
    {
      text: {
        fr: "Méthode pour tracer la droite",
      }
    },
    {
      text: {
        fr: "2 points suffisent",
      },
      items: {
        fr: [
            "1. Calculer le point (0, b) : l'ordonnée à l'origine (x = 0)",
            "2. Calculer un second point (ex. x = 1 ou x = 2)",
            "3. Tracer la droite passant par ces deux points",
          ],
      }
    },
    {
      text: {
        fr: "Exemple : f(x) = 2x + 3",
      }
    },
    {
      headers: {
        fr: ["x", "0", "1", "2", "**−**1"],
      },
      caption: {
        fr: "Point A(0 ; 3) : ordonnée à l'origine. Point B(2 ; 7) : second point.",
      }
    },
    {
      text: {
        fr: "Identifier a et b dans f(x) = ax + b",
      }
    },
    {
      items: {
        fr: [
            "f(x) = 2x **+** 3  →  a = 2, b = 3",
            "f(x) = **−**x **+** 5  →  a = **−**1, b = 5",
            "f(x) = 3x **−** 7  →  a = 3, b = **−**7",
          ],
      }
    },
  ],
};
