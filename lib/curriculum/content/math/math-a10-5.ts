import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-5",
    submoduleCode: "A10.5",
    theory: {
      title: {
        fr: "Problèmes",
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
          titleFr: "4 étapes pour résoudre un problème à deux inconnues",
          itemsFr: [
            "1. Nommer x et y les deux quantités cherchées (préciser clairement ce qu'ils représentent)",
            "2. Traduire les deux conditions de l'énoncé en deux équations",
            "3. Résoudre le système (par substitution ou par élimination)",
            "4. Répondre à la question et vérifier",
          ],
        },
        {
          type: "heading",
          fr: "Exemple : billets de spectacle",
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
            "Des billets d'adulte coûtent 8 € et d'enfant 5 €.",
            "10 personnes paient ensemble 68 €. Combien d'adultes ?",
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
            "Soit x = nombre d'adultes, y = nombre d'enfants",
            "Équation 1 (total personnes) : x **+** y = 10",
            "Équation 2 (total argent) : 8x **+** 5y = 68",
            "Substitution : x = 10 **−** y → 8(10 **−** y) **+** 5y = 68",
            "→ 80 **−** 8y **+** 5y = 68  →  **−**3y = **−**12  →  y = 4",
            "→ x = 10 **−** 4 = 6",
            "**Réponse : 6 adultes et 4 enfants.**",
          ],
        },
        {
          type: "heading",
          fr: "Exemple : prix d'articles",
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
            "2 stylos **+** 3 cahiers = 8,50 €",
            "4 stylos **+** 1 cahier = 9 €",
            "Trouver le prix d'un stylo et d'un cahier.",
          ],
        },
        {
          type: "highlight",
          fr: "Mise en système",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Soit x = prix d'un stylo, y = prix d'un cahier",
            "Système : { 2x **+** 3y = 8,50",
            "           { 4x **+** y = 9",
            "→ Résoudre par élimination ou substitution",
          ],
        },
        {
          type: "note",
          fr: "Toujours définir clairement x et y avant de poser les équations. Une définition imprécise mène souvent à des erreurs de traduction.",
        },
      ],
    },
  exercises: [],
  exercisePool: [],
  poolSize: 5,
};
