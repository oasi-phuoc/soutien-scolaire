import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "S1-2",
    submoduleCode: "S1.2",
    theory: {
      title: {
        fr: "Moyenne",
      },
      paragraphs: {
        fr: [
          "La moyenne (ou moyenne arithmétique) est la valeur centrale d'une série de données. Elle se calcule en additionnant toutes les valeurs et en divisant par le nombre de valeurs.",
          "Formule : moyenne = (somme de toutes les valeurs) / (nombre de valeurs) = Σxᵢ / n.",
          "Exemple : notes 10, 12, 14, 16, 18 → somme = 70 → moyenne = 70 / 5 = 14.",
          "Moyenne pondérée : si chaque valeur a un poids (effectif), on multiplie chaque valeur par son poids, on additionne, puis on divise par la somme des poids. Formule : x̄ = Σ(xᵢ × nᵢ) / Σnᵢ.",
          "Attention : la moyenne est sensible aux valeurs extrêmes (très grandes ou très petites). Une seule valeur aberrante peut la déplacer considérablement.",
        ],
      },
    },
    exercises: [
      {
        id: "s1-2-e1",
        promptFr: "Calcule la moyenne des notes suivantes : 8, 10, 12, 14, 16.",
        type: "number",
        acceptable: ["12"],
      },
      {
        id: "s1-2-e2",
        promptFr: "Un élève a obtenu 15 en math (coeff. 4) et 9 en français (coeff. 2). Calcule sa moyenne pondérée.",
        type: "number",
        acceptable: ["13"],
      },
      {
        id: "s1-2-e3",
        promptFr: "La moyenne de 5 nombres est 8. Quelle est leur somme ?",
        type: "number",
        acceptable: ["40"],
      },
      {
        id: "s1-2-e4",
        promptFr: "On ajoute la valeur 20 à la série 4, 6, 8, 10. Quelle est la nouvelle moyenne ?",
        type: "number",
        acceptable: ["9,6", "9.6"],
      },
      {
        id: "s1-2-e5",
        promptFr: "Dans une classe, 10 élèves ont eu 14 et 10 élèves ont eu 18. Quelle est la moyenne de la classe ?",
        type: "number",
        acceptable: ["16"],
      },
    ],
  };
