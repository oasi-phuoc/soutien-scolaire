import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A10_4: SubmoduleTrad = {
  submoduleId: "A10-4",
  title: {
    fr: "Équations avec parenthèses",
    en: "Equations with parentheses",
    ar: "معادلات بالأقواس",
    fa: "معادلات با پرانتز",
    ti: "ምዕርርያ ምስ ቅርሕ",
    uk: "Рівняння з дужками",
  },
  blocks: [
    {
      text: {
        fr: "Démarche générale",
      }
    },
    {
      text: {
        fr: "Étapes avec parenthèses",
      },
      items: {
        fr: [
            "1. Développer toutes les parenthèses",
            "2. Réduire les termes semblables",
            "3. Résoudre l'équation obtenue",
            "4. Vérifier la solution",
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
        fr: "Exemple simple",
      }
    },
    {
      items: {
        fr: [
            "3(2x **+** 1) = 21",
            "→ 6x **+** 3 = 21",
            "→ 6x = 18",
            "→ x = 3",
          ],
      }
    },
    {
      text: {
        fr: "Exemple avec plusieurs parenthèses",
      }
    },
    {
      items: {
        fr: [
            "2(x **+** 3) **−** (x **−** 1) = 8",
            "→ 2x **+** 6 **−** x **+** 1 = 8",
            "→ x **+** 7 = 8",
            "→ x = 1",
          ],
      }
    },
    {
      text: {
        fr: "Piège : le signe − devant une parenthèse",
      }
    },
    {
      text: {
        fr: "Le signe − devant une parenthèse inverse tous les signes à l'intérieur.",
      }
    },
    {
      label: {
        fr: "Exemples de développement",
      },
      items: {
        fr: [
            "**−**(x **−** 5) = **−**x **+** 5",
            "**−**(2x **+** 3) = **−**2x **−** 3",
            "**−**(a **−** b) = **−**a **+** b",
          ],
      }
    },
  ],
};
