import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-1",
    submoduleCode: "A10.1",
    theory: {
      title: {
        fr: "",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce qu'une équation ?",
          black: true,
        },
        {
          type: "plain",
          fr: "Une équation est une égalité contenant une inconnue. **Résoudre** une équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie.",
        },
        {
          type: "example",
          fr: "2x + 3 = 11\n→ Quelle valeur de x rend cette égalité vraie ?",
        },
        {
          type: "heading",
          fr: "Principe fondamental d'équivalence",
          black: true,
        },
        {
          type: "plain",
          fr: "On peut effectuer la même opération des deux côtés de l'égalité sans la modifier. C'est comme une **balance** : ce qu'on ajoute à gauche, on l'ajoute aussi à droite.",
        },
        {
          type: "rule",
          titleFr: "Opérations autorisées (des deux côtés)",
          itemsFr: [
            "Additionner (**+**) ou soustraire (**−**) le même nombre",
            "Multiplier ou diviser par le même nombre (≠ 0)",
          ],
        },
        {
          type: "heading",
          fr: "Solution et vérification",
          black: true,
        },
        {
          type: "highlight",
          fr: "Exemple complet",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Équation : 2x **+** 3 = 11",
            "Étape 1 : soustraire 3 des deux côtés → 2x = 8",
            "Étape 2 : diviser par 2 → x = 4",
            "Vérification : 2(4) **+** 3 = 8 **+** 3 = 11 ✓",
          ],
        },
        {
          type: "note",
          fr: "Une équation du 1ᵉʳ degré (inconnue à la puissance 1) admet exactement une solution. Toujours vérifier la réponse en la substituant dans l'équation originale.",
        },
      ],
    },
  exercises: [],
  exercisePool: [
    { id: "a10-1-ep01", promptFr: "3x + 4 = 16. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["4"], hintFr: "3x = 16 − 4 = 12, puis x = 12 ÷ 3." },
    { id: "a10-1-ep02", promptFr: "5x − 3 = 17. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["4"], hintFr: "5x = 17 + 3 = 20, puis x = 20 ÷ 5." },
    { id: "a10-1-ep03", promptFr: "x + 8 = 15. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["7"], hintFr: "x = 15 − 8 = ?" },
    { id: "a10-1-ep04", promptFr: "4x = 24. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["6"], hintFr: "x = 24 ÷ 4 = ?" },
    { id: "a10-1-ep05", promptFr: "2x + 7 = 19. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["6"], hintFr: "2x = 19 − 7 = 12, puis x = 12 ÷ 2." },
    { id: "a10-1-ep06", promptFr: "x − 9 = 4. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["13"], hintFr: "x = 4 + 9 = ?" },
    { id: "a10-1-ep07", promptFr: "6x + 1 = 25. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["4"], hintFr: "6x = 25 − 1 = 24, puis x = 24 ÷ 6." },
    { id: "a10-1-ep08", promptFr: "3x + 9 = 24. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["5"], hintFr: "3x = 24 − 9 = 15, puis x = 15 ÷ 3." },
    { id: "a10-1-ep09", promptFr: "x ÷ 3 = 8. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["24"], hintFr: "x = 8 × 3 = ?" },
    { id: "a10-1-ep10", promptFr: "7x − 6 = 29. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["5"], hintFr: "7x = 29 + 6 = 35, puis x = 35 ÷ 7." },
    { id: "a10-1-ep11", promptFr: "4x + 2 = 30. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["7"], hintFr: "4x = 30 − 2 = 28, puis x = 28 ÷ 4." },
    { id: "a10-1-ep12", promptFr: "9x − 3 = 33. Quelle valeur de x vérifie cette équation ?", type: "number", acceptable: ["4"], hintFr: "9x = 33 + 3 = 36, puis x = 36 ÷ 9." },
  ],
  poolSize: 5,
};
