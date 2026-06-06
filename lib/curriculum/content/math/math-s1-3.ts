import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "S1-3",
    submoduleCode: "S1.3",
    theory: {
      title: {
        fr: "Médiane",
      },
      paragraphs: {
        fr: [
          "La médiane est la valeur qui partage une série ordonnée en deux moitiés égales : autant de valeurs en dessous qu'au-dessus.",
          "Méthode : 1) Trie les données par ordre croissant. 2) Si n est impair, la médiane est la valeur du rang (n+1)/2. 3) Si n est pair, la médiane est la moyenne des valeurs des rangs n/2 et n/2+1.",
          "Exemple (n=5) : 3, 7, 9, 12, 15 → rang 3 → médiane = 9. Exemple (n=6) : 3, 7, 9, 12, 15, 20 → moyenne de 9 et 12 → médiane = 10,5.",
          "Avantage de la médiane : elle est robuste aux valeurs extrêmes. Si une valeur aberrante est présente, la médiane reste représentative alors que la moyenne est déformée.",
          "Comparaison : si la moyenne > médiane, la distribution est asymétrique vers la droite (données élevées). Si moyenne < médiane, elle est asymétrique vers la gauche.",
        ],
      },
    },
    exercises: [
      {
        id: "s1-3-e1",
        promptFr: "Trouve la médiane de la série : 3, 7, 9, 12, 15.",
        type: "number",
        acceptable: ["9"],
      },
      {
        id: "s1-3-e2",
        promptFr: "Trouve la médiane de la série : 4, 8, 10, 14, 20, 22.",
        type: "number",
        acceptable: ["12"],
      },
      {
        id: "s1-3-e3",
        promptFr: "Trouve la médiane de la série (non triée) : 15, 3, 9, 7, 12.",
        type: "number",
        acceptable: ["9"],
      },
      {
        id: "s1-3-e4",
        promptFr: "Une série a 7 valeurs triées. À quel rang se trouve la médiane ?",
        type: "number",
        acceptable: ["4"],
      },
      {
        id: "s1-3-e5",
        promptFr: "La moyenne d'une série est 20 et la médiane est 15. La distribution est-elle asymétrique vers la droite ou vers la gauche ?",
        type: "short_text",
        acceptable: ["droite", "vers la droite", "à droite"],
      },
    ],
  };
