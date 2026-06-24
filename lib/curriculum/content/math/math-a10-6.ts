import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-6",
    submoduleCode: "A10.6",
    theory: {
      title: {
        fr: "",
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
    { id: "a10-6-ep01", promptFr: "Un nombre augmenté de 9 donne 23. Quel est ce nombre ?", type: "number", acceptable: ["14"], hintFr: "Pose x + 9 = 23, puis x = 23 − 9." },
    { id: "a10-6-ep02", promptFr: "Le triple d'un nombre diminué de 4 vaut 20. Quel est ce nombre ?", type: "number", acceptable: ["8"], hintFr: "Pose 3x − 4 = 20, puis 3x = 24." },
    { id: "a10-6-ep03", promptFr: "Sophie a 6 ans de plus que Luc. Ensemble ils ont 28 ans. Quel est l'âge de Luc ?", type: "number", acceptable: ["11"], hintFr: "Luc = x, Sophie = x + 6. x + (x+6) = 28." },
    { id: "a10-6-ep04", promptFr: "Un carré a un périmètre de 36 cm. Quelle est la longueur d'un côté ?", type: "number", acceptable: ["9"], hintFr: "Périmètre = 4 × côté. 4x = 36." },
    { id: "a10-6-ep05", promptFr: "Le quintuple d'un nombre vaut 60. Quel est ce nombre ?", type: "number", acceptable: ["12"], hintFr: "Pose 5x = 60, puis x = 60 ÷ 5." },
    { id: "a10-6-ep06", promptFr: "Un nombre diminué de 11 donne 17. Quel est ce nombre ?", type: "number", acceptable: ["28"], hintFr: "Pose x − 11 = 17, puis x = 17 + 11." },
    { id: "a10-6-ep07", promptFr: "Le double d'un nombre plus 8 vaut 34. Quel est ce nombre ?", type: "number", acceptable: ["13"], hintFr: "Pose 2x + 8 = 34, puis 2x = 26." },
    { id: "a10-6-ep08", promptFr: "Trois fois un nombre moins 6 vaut 21. Quel est ce nombre ?", type: "number", acceptable: ["9"], hintFr: "Pose 3x − 6 = 21, puis 3x = 27." },
    { id: "a10-6-ep09", promptFr: "Eva a 4 fois l'âge de sa sœur. Ensemble elles ont 25 ans. Quel est l'âge de la sœur ?", type: "number", acceptable: ["5"], hintFr: "Sœur = x, Eva = 4x. x + 4x = 25." },
    { id: "a10-6-ep10", promptFr: "Un livre coûte 6 € de plus qu'un stylo. Les deux ensemble coûtent 20 €. Combien coûte le stylo ?", type: "number", acceptable: ["7"], hintFr: "Stylo = x, livre = x+6. x + (x+6) = 20." },
    { id: "a10-6-ep11", promptFr: "Un rectangle a une longueur de 3 fois sa largeur. Son périmètre est 48 cm. Quelle est la largeur ?", type: "number", acceptable: ["6"], hintFr: "2(l + 3l) = 48, donc 2 × 4l = 48, soit l = 6." },
    { id: "a10-6-ep12", promptFr: "4 fois un nombre plus 7 vaut 43. Quel est ce nombre ?", type: "number", acceptable: ["9"], hintFr: "Pose 4x + 7 = 43, puis 4x = 36." },
  ],
  poolSize: 5,
};
