import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A12-3",
    submoduleCode: "A12.3",
    theory: {
      title: {
        fr: "Problèmes à deux inconnues",
        en: "Problems with two unknowns",
        ar: "مسائل بمجهولين",
        fa: "مسائل با دو مجهول",
        ti: "ጸገማት ምስ ክልተ ዘይፍለጥ",
        uk: "Задачі з двома невідомими",
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
    exercisePool: [
      { id: "a12-3-ep01", promptFr: "Un stylo coûte 2 € et un cahier coûte 4 €. 3 stylos + 1 cahier = ? €", type: "number", acceptable: ["10"] },
      { id: "a12-3-ep02", promptFr: "2 adultes (8 €) et 3 enfants paient 31 € au total. Quel est le prix d'une entrée enfant ?", type: "number", acceptable: ["5"] },
      { id: "a12-3-ep03", promptFr: "La somme de deux nombres est 20 et leur différence est 4. Quel est le plus grand nombre ?", type: "number", acceptable: ["12"] },
      { id: "a12-3-ep04", promptFr: "La somme de deux nombres est 20 et leur différence est 4. Quel est le plus petit nombre ?", type: "number", acceptable: ["8"] },
      { id: "a12-3-ep05", promptFr: "Paul a 3 fois l'âge de Léa. Ensemble ils ont 40 ans. Quel est l'âge de Paul ?", type: "number", acceptable: ["30"] },
      { id: "a12-3-ep06", promptFr: "Paul a 3 fois l'âge de Léa. Ensemble ils ont 40 ans. Quel est l'âge de Léa ?", type: "number", acceptable: ["10"] },
      { id: "a12-3-ep07", promptFr: "2 pizzas + 1 salade = 21 €. 1 pizza + 1 salade = 14 €. Combien coûte une pizza ?", type: "number", acceptable: ["7"] },
      { id: "a12-3-ep08", promptFr: "2 pizzas + 1 salade = 21 €. 1 pizza + 1 salade = 14 €. Combien coûte la salade ?", type: "number", acceptable: ["7"] },
      { id: "a12-3-ep09", promptFr: "Le double d'un nombre plus un autre vaut 12. La somme des deux vaut 9. Quel est le premier nombre ?", type: "number", acceptable: ["3"] },
      { id: "a12-3-ep10", promptFr: "Le double d'un nombre plus un autre vaut 12. La somme des deux vaut 9. Quel est le deuxième nombre ?", type: "number", acceptable: ["6"] },
    ],
    poolSize: 5,
  };
