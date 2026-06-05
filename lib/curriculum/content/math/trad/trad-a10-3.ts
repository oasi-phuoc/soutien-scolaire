import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A10_3: SubmoduleTrad = {
  submoduleId: "A10-3",
  title: {
    fr: "Résolution : ax + b = c",
    en: "Solving: ax + b = c",
    ar: "الحل: ax + b = c",
    fa: "حل: ax + b = c",
    ti: "ምፍታሕ: ax + b = c",
    uk: "Розв'язання: ax + b = c",
  },
  blocks: [
    {
      text: {
        fr: "Méthode en deux étapes",
      }
    },
    {
      text: {
        fr: "Étapes de résolution",
      },
      items: {
        fr: [
            "1. Isoler le terme en x : soustraire ou additionner b des deux membres",
            "2. Diviser les deux membres par le coefficient a",
            "3. Vérifier la solution dans l'équation originale",
          ],
      }
    },
    {
      text: {
        fr: "Exemple standard",
      }
    },
    {
      items: {
        fr: [
            "2x **+** 5 = 13",
            "→ 2x = 13 **−** 5 = 8",
            "→ x = 8 ÷ 2 = 4",
            "Vérification : 2(4) **+** 5 = 13 ✓",
          ],
      }
    },
    {
      text: {
        fr: "Termes en x des deux côtés",
      }
    },
    {
      text: {
        fr: "Quand des termes en x apparaissent des deux côtés de l'équation, on les regroupe d'un côté avant de résoudre.",
      }
    },
    {
      text: {
        fr: "Exemple avec x des deux côtés",
      }
    },
    {
      items: {
        fr: [
            "3x **+** 2 = x **+** 10",
            "→ 3x **−** x = 10 **−** 2",
            "→ 2x = 8",
            "→ x = 4",
            "Vérification : 3(4) **+** 2 = 14 et (4) **+** 10 = 14 ✓",
          ],
      }
    },
    {
      text: {
        fr: "Toujours vérifier en substituant la valeur trouvée dans l'équation originale (pas dans une étape intermédiaire).",
      }
    },
  ],
};
