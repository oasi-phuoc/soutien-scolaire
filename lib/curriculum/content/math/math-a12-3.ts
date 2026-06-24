import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A12-3",
    submoduleCode: "A12.3",
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
    { id: "a12-3-ep01", promptFr: "Un crayon coûte 2 € et un cahier coûte 5 €. Marc achète 3 crayons et 2 cahiers. Combien paye-t-il ?", type: "number", acceptable: ["16"], hintFr: "3 × 2 + 2 × 5 = 6 + 10 = ?" },
    { id: "a12-3-ep02", promptFr: "3 adultes (10 €/entrée) et 2 enfants paient 46 € au total. Quel est le prix d'une entrée enfant ?", type: "number", acceptable: ["8"], hintFr: "2 × enfant = 46 − 3 × 10 = 16." },
    { id: "a12-3-ep03", promptFr: "La somme de deux nombres est 25 et leur différence est 7. Quel est le plus grand ?", type: "number", acceptable: ["16"], hintFr: "Grand = (25 + 7) ÷ 2 = ?" },
    { id: "a12-3-ep04", promptFr: "La somme de deux nombres est 25 et leur différence est 7. Quel est le plus petit ?", type: "number", acceptable: ["9"], hintFr: "Petit = (25 − 7) ÷ 2 = ?" },
    { id: "a12-3-ep05", promptFr: "Tom a 4 fois l'âge de sa sœur. Ensemble ils ont 35 ans. Quel est l'âge de Tom ?", type: "number", acceptable: ["28"], hintFr: "Sœur = x, Tom = 4x. x + 4x = 35, x = 7." },
    { id: "a12-3-ep06", promptFr: "Tom a 4 fois l'âge de sa sœur. Ensemble ils ont 35 ans. Quel est l'âge de la sœur ?", type: "number", acceptable: ["7"], hintFr: "5x = 35, donc x = 7 (l'âge de la sœur)." },
    { id: "a12-3-ep07", promptFr: "3 sandwichs + 2 boissons = 23 €. 1 sandwich + 2 boissons = 13 €. Combien coûte un sandwich ?", type: "number", acceptable: ["5"], hintFr: "Soustrait : 2 sandwichs = 10 €, donc 1 sandwich = 5 €." },
    { id: "a12-3-ep08", promptFr: "3 sandwichs + 2 boissons = 23 €. 1 sandwich + 2 boissons = 13 €. Combien coûte une boisson ?", type: "number", acceptable: ["4"], hintFr: "Sandwich = 5 €, puis 5 + 2 boissons = 13, boisson = 4." },
    { id: "a12-3-ep09", promptFr: "La somme de deux nombres est 18. L'un est le double de l'autre. Quel est le plus grand ?", type: "number", acceptable: ["12"], hintFr: "x + 2x = 18, donc x = 6. Le plus grand = 2x = 12." },
    { id: "a12-3-ep10", promptFr: "La somme de deux nombres est 18. L'un est le double de l'autre. Quel est le plus petit ?", type: "number", acceptable: ["6"], hintFr: "3x = 18, donc x = 6 (le plus petit)." },
    { id: "a12-3-ep11", promptFr: "2 billets adulte + 3 billets enfant coûtent 32 €. 1 billet adulte coûte 10 €. Combien coûte un billet enfant ?", type: "number", acceptable: ["4"], hintFr: "2 × 10 + 3 × enfant = 32, donc 3 × enfant = 12." },
    { id: "a12-3-ep12", promptFr: "Le périmètre d'un rectangle est 38 cm. Sa longueur est 5 cm de plus que sa largeur. Quelle est la largeur ?", type: "number", acceptable: ["7"], hintFr: "2(l + l+5) = 38, donc 2(2l+5) = 38, l = 7." },
  ],
  poolSize: 5,
};
