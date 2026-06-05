import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-5",
    submoduleCode: "A8.5",
    theory: {
      title: {
        fr: "Valeur approchée d'une racine",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Racines irrationnelles",
          black: true,
        },
        {
          type: "plain",
          fr: "Quand un nombre n'est pas un carré parfait, sa racine carrée est un nombre irrationnel : elle n'a pas de valeur décimale exacte et finie.",
        },
        {
          type: "note",
          fr: "√2, √3, √5, √7 sont des nombres irrationnels. On ne peut les écrire qu'avec le signe √ ou par une valeur approchée.",
        },
        {
          type: "heading",
          fr: "Encadrement d'une racine",
          black: true,
        },
        {
          type: "plain",
          fr: "Pour encadrer √n, on cherche les deux carrés parfaits consécutifs qui encadrent n.",
        },
        {
          type: "rule",
          titleFr: "Méthode d'encadrement",
          itemsFr: [
            "1. Trouver deux entiers a et b tels que a² < n < b²",
            "2. Alors : a < √n < b",
            "3. Utiliser la calculatrice pour la valeur décimale approchée",
          ],
        },
        {
          type: "example",
          fr: "Encadrer √7 :\n2² = 4 < 7 < 9 = 3²\nDonc : 2 < √7 < 3\nValeur approchée : √7 ≈ 2,646",
        },
        {
          type: "table",
          headersFr: ["Racine", "Encadrement", "Valeur approchée"],
          accentHeader: true,
          rows: [
            ["√2", "1 < √2 < 2", "≈ 1,414"],
            ["√3", "1 < √3 < 2", "≈ 1,732"],
            ["√5", "2 < √5 < 3", "≈ 2,236"],
            ["√7", "2 < √7 < 3", "≈ 2,646"],
            ["√10", "3 < √10 < 4", "≈ 3,162"],
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
