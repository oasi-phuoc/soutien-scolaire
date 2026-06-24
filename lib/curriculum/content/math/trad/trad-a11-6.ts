import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A11_6: SubmoduleTrad = {
  submoduleId: "A11-6",
  title: {
    fr: "Pente et ordonnée à l'origine",
    en: "Slope and y-intercept",
    ar: "الميل ونقطة القطع مع المحور y",
    fa: "شیب و عرض از مبدأ",
    ti: "ሃፍን ናይ y ሕርሚ ምቁራጽን",
    uk: "Кутовий коефіцієнт і початкова ордината",
  },
  blocks: [
    {
      text: {
        fr: "La pente (coefficient directeur)",
      }
    },
    {
      text: {
        fr: "La pente a mesure la variation de y pour chaque unité d'augmentation de x. Elle indique l'inclinaison et le sens de la droite.",
      }
    },
    {
      text: {
        fr: "Formule de la pente",
      },
      items: {
        fr: [
            "a = Δy / Δx = (y₂ **−** y₁) / (x₂ **−** x₁)",
            "avec deux points distincts A(x₁, y₁) et B(x₂, y₂)",
          ],
      }
    },
    {
      text: {
        fr: "Droite passant par A(1, 3) et B(3, 7) :\na = (7 − 3) / (3 − 1) = 4 / 2 = 2",
      }
    },
    {
      text: {
        fr: "Interprétation de la pente",
      }
    },
    {
      headers: {
        fr: ["Signe de a", "Type de droite", "Signification"],
      }
    },
    {
      text: {
        fr: "L'ordonnée à l'origine",
      }
    },
    {
      text: {
        fr: "L'ordonnée à l'origine b est la valeur de y lorsque x = 0. Elle se lit directement sur le graphique au point d'intersection avec l'axe y.",
      }
    },
    {
      text: {
        fr: "Trouver a et b depuis deux points",
      }
    },
    {
      items: {
        fr: [
            "1. Calculer a = (y₂ **−** y₁) / (x₂ **−** x₁)",
            "2. Écrire f(x) = ax **+** b",
            "3. Substituer un des points pour trouver b : b = y₁ **−** a × x₁",
          ],
      }
    },
    {
      text: {
        fr: "Points A(0, 4) et B(3, 7) :\na = (7 − 4) / (3 − 0) = 3/3 = 1\nb = 4 (ordonnée de A, car x₁ = 0)\nDonc : f(x) = x + 4",
      }
    },
  ],
};
