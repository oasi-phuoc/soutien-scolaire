import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-6",
    submoduleCode: "A10.6",
    theory: {
      title: {
        fr: "Problèmes concrets (mise en équation)",
      },
      paragraphs: { fr: [] },
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
    exercisePool: [
      { id: "a10-6-ep01", promptFr: "Un nombre augmenté de 7 donne 19. Quel est ce nombre ?", type: "number", acceptable: ["12"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep02", promptFr: "Le double d'un nombre diminué de 3 vaut 11. Quel est ce nombre ?", type: "number", acceptable: ["7"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep03", promptFr: "Paul a 5 ans de plus que Marie. Ensemble ils ont 31 ans. Quel est l'âge de Marie ?", type: "number", acceptable: ["13"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep04", promptFr: "Un rectangle a un périmètre de 24 cm. Sa longueur est le double de sa largeur. Quelle est la largeur ?", type: "number", acceptable: ["4"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep05", promptFr: "Le triple d'un nombre vaut 45. Quel est ce nombre ?", type: "number", acceptable: ["15"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep06", promptFr: "Un nombre diminué de 8 donne 14. Quel est ce nombre ?", type: "number", acceptable: ["22"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep07", promptFr: "Le triple d'un nombre augmenté de 4 vaut 25. Quel est ce nombre ?", type: "number", acceptable: ["7"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep08", promptFr: "Deux fois un nombre plus 5 vaut 29. Quel est ce nombre ?", type: "number", acceptable: ["12"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep09", promptFr: "Ana est 3 fois plus âgée que son frère. Ensemble ils ont 20 ans. Quel est l'âge du frère ?", type: "number", acceptable: ["5"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
      { id: "a10-6-ep10", promptFr: "Un livre coûte 4 € de plus qu'un stylo. Les deux ensemble coûtent 14 €. Combien coûte le stylo ?", type: "number", acceptable: ["5"], hintFr: "Pose une équation avec x = valeur inconnue, traduis l'énoncé en équation, puis résous."},
    ],
    poolSize: 5,
  };
