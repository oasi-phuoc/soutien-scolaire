import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A10_6: SubmoduleTrad = {
  submoduleId: "A10-6",
  title: {
    fr: "Problèmes concrets (mise en équation)",
    en: "Concrete problems (setting up equations)",
    ar: "مسائل ملموسة (إنشاء المعادلة)",
    fa: "مسائل ملموس (تشکیل معادله)",
    ti: "ናይ ሓቂ ዓለም ጸገማት (ምዕርርያ ምትእትታው)",
    uk: "Прикладні задачі (складання рівняння)",
  },
  blocks: [
    {
      text: {
        fr: "Démarche de mise en équation",
      }
    },
    {
      text: {
        fr: "4 étapes à suivre",
      },
      items: {
        fr: [
            "1. **Nommer l'inconnue** : « Soit x … »",
            "2. **Traduire l'énoncé** en équation mathématique",
            "3. **Résoudre** l'équation",
            "4. **Répondre** à la question posée",
          ],
      }
    },
    {
      text: {
        fr: "Exemple : problème d'âge",
      }
    },
    {
      text: {
        fr: "Énoncé",
      }
    },
    {
      items: {
        fr: [
            "Lucie a 8 ans de plus que son frère. La somme de leurs âges est 30. Quel est l'âge du frère ?",
          ],
      }
    },
    {
      text: {
        fr: "Résolution",
      }
    },
    {
      items: {
        fr: [
            "Soit x = âge du frère",
            "Âge de Lucie = x **+** 8",
            "Équation : x **+** (x **+** 8) = 30",
            "→ 2x **+** 8 = 30",
            "→ 2x = 22",
            "→ x = 11 ans  (âge du frère)",
          ],
      }
    },
    {
      text: {
        fr: "Exemple : problème de périmètre",
      }
    },
    {
      text: {
        fr: "Énoncé",
      }
    },
    {
      items: {
        fr: [
            "Un rectangle a un périmètre de 36 cm. La longueur est le double de la largeur. Trouve la largeur.",
          ],
      }
    },
    {
      text: {
        fr: "Résolution",
      }
    },
    {
      items: {
        fr: [
            "Soit x = largeur",
            "Longueur = 2x",
            "Périmètre : 2(x **+** 2x) = 36",
            "→ 2 × 3x = 36",
            "→ 6x = 36",
            "→ x = 6 cm  (largeur)",
          ],
      }
    },
    {
      text: {
        fr: "Après avoir résolu, relire l'énoncé pour vérifier que la réponse est cohérente (unités correctes, valeur positive si attendu, etc.).",
      }
    },
  ],
};
