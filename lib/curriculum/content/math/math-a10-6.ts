import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-6",
    submoduleCode: "A10.6",
    theory: {
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
          type: "heading",
          fr: "Démarche de mise en équation",
          black: true,
        },
        {
          type: "rule",
          titleFr: "4 étapes à suivre",
          itemsFr: [
            "1. **Nommer l'inconnue** : « Soit x … »",
            "2. **Traduire l'énoncé** en équation mathématique",
            "3. **Résoudre** l'équation",
            "4. **Répondre** à la question posée",
          ],
        },
        {
          type: "heading",
          fr: "Exemple : problème d'âge",
          black: true,
        },
        {
          type: "highlight",
          fr: "Énoncé",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Lucie a 8 ans de plus que son frère. La somme de leurs âges est 30. Quel est l'âge du frère ?",
          ],
        },
        {
          type: "highlight",
          fr: "Résolution",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Soit x = âge du frère",
            "Âge de Lucie = x **+** 8",
            "Équation : x **+** (x **+** 8) = 30",
            "→ 2x **+** 8 = 30",
            "→ 2x = 22",
            "→ x = 11 ans  (âge du frère)",
          ],
        },
        {
          type: "heading",
          fr: "Exemple : problème de périmètre",
          black: true,
        },
        {
          type: "highlight",
          fr: "Énoncé",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Un rectangle a un périmètre de 36 cm. La longueur est le double de la largeur. Trouve la largeur.",
          ],
        },
        {
          type: "highlight",
          fr: "Résolution",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Soit x = largeur",
            "Longueur = 2x",
            "Périmètre : 2(x **+** 2x) = 36",
            "→ 2 × 3x = 36",
            "→ 6x = 36",
            "→ x = 6 cm  (largeur)",
          ],
        },
        {
          type: "note",
          fr: "Après avoir résolu, relire l'énoncé pour vérifier que la réponse est cohérente (unités correctes, valeur positive si attendu, etc.).",
        },
      ],
    },
    exercises: [],
    exercisePool: [],
    poolSize: 0,
  };
