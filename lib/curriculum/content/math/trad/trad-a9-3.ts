import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A9_3: SubmoduleTrad = {
  submoduleId: "A9-3",
  title: {
    fr: "Substitution (évaluation)",
    en: "Substitution (evaluation)",
    ar: "الإحلال (التقييم)",
    fa: "جایگذاری (ارزیابی)",
    ti: "ምትካእ (ምምዛን)",
    uk: "Підстановка (обчислення значення)",
  },
  blocks: [
    {
      text: {
        fr: "Évaluer une expression",
      }
    },
    {
      text: {
        fr: "Évaluer une expression algébrique signifie remplacer les variables par des valeurs numériques, puis calculer le résultat en respectant les priorités opératoires.",
      }
    },
    {
      text: {
        fr: "Méthode",
      },
      items: {
        fr: [
            "1. Repérer toutes les variables dans l'expression",
            "2. Remplacer chaque variable par sa valeur (entre parenthèses)",
            "3. Calculer en respectant l'ordre : parenthèses → puissances → × et ÷ → **+** et **−**",
          ],
      }
    },
    {
      text: {
        fr: "Exemples",
      }
    },
    {
      text: {
        fr: "Exemple à une variable",
      }
    },
    {
      items: {
        fr: [
            "Évalue 3x² **−** 2x **+** 1 pour x = 3",
            "→ 3(3)² **−** 2(3) **+** 1",
            "→ 3 × 9 **−** 6 **+** 1",
            "→ 27 **−** 6 **+** 1 = **22**",
          ],
      }
    },
    {
      text: {
        fr: "Exemple à deux variables",
      }
    },
    {
      items: {
        fr: [
            "Évalue a² **+** b pour a = 4 et b = **−**3",
            "→ (4)² **+** (**−**3)",
            "→ 16 **+** (**−**3) = **13**",
          ],
      }
    },
    {
      text: {
        fr: "Toujours mettre la valeur entre parenthèses lors de la substitution. Cela évite les erreurs de signe, surtout avec les valeurs négatives.",
      }
    },
  ],
};
