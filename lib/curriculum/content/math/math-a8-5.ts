import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-5",
    submoduleCode: "A8.5",
    theory: {
      title: {
        fr: "Priorité des opérations",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Qu'est-ce que la priorité des opérations ?",
          black: true,
        },
        {
          type: "plain",
          fr: "Lorsqu'un calcul contient plusieurs opérations, il faut les effectuer dans un ordre précis.",
        },
        { type: "highlight", fr: "Ordre des priorités" },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "**1.** Parenthèses ( )",
            "**2.** Puissances et racines carrées",
            "**3.** Multiplications × et divisions ÷ (de gauche à droite)",
            "**4.** Additions + et soustractions − (de gauche à droite)",
          ],
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Exemples", black: true },
        {
          type: "plain",
          fr: "3 + 4 × 2",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "On effectue d'abord la multiplication : 4 × 2 = 8",
            "Puis l'addition : 3 + 8 = **11**",
          ],
        },
        { type: "plain", fr: "" },
        {
          type: "plain",
          fr: "(3 + 4) × 2",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "On effectue d'abord les parenthèses : 3 + 4 = 7",
            "Puis la multiplication : 7 × 2 = **14**",
          ],
        },
        { type: "plain", fr: "" },
        {
          type: "plain",
          fr: "2² + 3 × 4 − 1",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Puissance : 2² = 4",
            "Multiplication : 3 × 4 = 12",
            "De gauche à droite : 4 + 12 − 1 = **15**",
          ],
        },
        { type: "plain", fr: "" },
        { type: "highlight", fr: "Attention" },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "Les parenthèses changent toujours le résultat.",
            "Multiplication et division ont la même priorité : on opère de gauche à droite.",
            "Addition et soustraction ont la même priorité : on opère de gauche à droite.",
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a8-5-ep01", promptFr: "√2 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["1"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep02", promptFr: "√5 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["2"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep03", promptFr: "√7 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["2"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep04", promptFr: "√10 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["3"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep05", promptFr: "√15 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["3"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep06", promptFr: "√20 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["4"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep07", promptFr: "√30 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["5"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep08", promptFr: "√40 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["6"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep09", promptFr: "√50 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["7"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
      { id: "a8-5-ep10", promptFr: "√3 est comprise entre □ et □+1. Donne le plus petit entier.", type: "number", acceptable: ["1"], hintFr: "Cherche l'entier k tel que k² ≤ n < (k+1)². Alors √n est entre k et k+1."},
    ],
    poolSize: 5,
  };
