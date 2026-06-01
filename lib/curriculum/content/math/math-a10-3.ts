import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-3",
    submoduleCode: "A10.3",
    theory: {
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
          type: "heading",
          fr: "Méthode en deux étapes",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Étapes de résolution",
          itemsFr: [
            "1. Isoler le terme en x : soustraire ou additionner b des deux membres",
            "2. Diviser les deux membres par le coefficient a",
            "3. Vérifier la solution dans l'équation originale",
          ],
        },
        {
          type: "highlight",
          fr: "Exemple standard",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2x **+** 5 = 13",
            "→ 2x = 13 **−** 5 = 8",
            "→ x = 8 ÷ 2 = 4",
            "Vérification : 2(4) **+** 5 = 13 ✓",
          ],
        },
        {
          type: "heading",
          fr: "Termes en x des deux côtés",
          black: true,
        },
        {
          type: "plain",
          fr: "Quand des termes en x apparaissent des deux côtés de l'équation, on les regroupe d'un côté avant de résoudre.",
        },
        {
          type: "highlight",
          fr: "Exemple avec x des deux côtés",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "3x **+** 2 = x **+** 10",
            "→ 3x **−** x = 10 **−** 2",
            "→ 2x = 8",
            "→ x = 4",
            "Vérification : 3(4) **+** 2 = 14 et (4) **+** 10 = 14 ✓",
          ],
        },
        {
          type: "note",
          fr: "Toujours vérifier en substituant la valeur trouvée dans l'équation originale (pas dans une étape intermédiaire).",
        },
      ],
    },
    exercises: [],
    exercisePool: [],
    poolSize: 0,
  };
