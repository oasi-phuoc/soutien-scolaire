import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-4",
    submoduleCode: "A10.4",
    theory: {
      title: {
        fr: "",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Démarche générale",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Étapes avec parenthèses",
          itemsFr: [
            "1. Développer toutes les parenthèses",
            "2. Réduire les termes semblables",
            "3. Résoudre l'équation obtenue",
            "4. Vérifier la solution",
          ],
        },
        {
          type: "heading",
          fr: "Exemples",
          black: true,
        },
        {
          type: "highlight",
          fr: "Exemple simple",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "3(2x **+** 1) = 21",
            "→ 6x **+** 3 = 21",
            "→ 6x = 18",
            "→ x = 3",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple avec plusieurs parenthèses",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2(x **+** 3) **−** (x **−** 1) = 8",
            "→ 2x **+** 6 **−** x **+** 1 = 8",
            "→ x **+** 7 = 8",
            "→ x = 1",
          ],
        },
        {
          type: "heading",
          fr: "Piège : le signe − devant une parenthèse",
          black: true,
        },
        {
          type: "note",
          fr: "Le signe − devant une parenthèse inverse tous les signes à l'intérieur.",
        },
        {
          type: "section",
          labelFr: "Exemples de développement",
          itemsFr: [
            "**−**(x **−** 5) = **−**x **+** 5",
            "**−**(2x **+** 3) = **−**2x **−** 3",
            "**−**(a **−** b) = **−**a **+** b",
          ],
        },
      ],
    },
  exercises: [],
  exercisePool: [],
  poolSize: 5,
};
