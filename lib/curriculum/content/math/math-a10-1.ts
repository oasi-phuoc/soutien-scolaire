import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-1",
    submoduleCode: "A10.1",
    theory: {
      title: {
        fr: "Principe d'une équation",
        en: "Principle of an equation",
        ar: "مبدأ المعادلة",
        fa: "اصل معادله",
        ti: "ናይ ምዕርርያ መምርሒ",
        uk: "Принцип рівняння",
      },
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
    exercisePool: [],
    poolSize: 0,
  };
