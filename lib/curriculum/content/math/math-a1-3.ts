import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A1_3_LESSON: MathSubmoduleLesson = {
  submoduleId: "A1-3",
  submoduleCode: "A1.3",

  theory: {
    title: {
      fr: "Comparer les nombres",
    },

    blocks: [
      {
        type: "plain",
        fr: "Comparer des nombres consiste à déterminer lequel est le plus **grand**, le plus **petit** ou s'ils sont **égaux**.",
      },

      {
        type: "heading",
        fr: "Les symboles de comparaison",
        black: true,
      },

      {
        type: "plain",
        fr: "La partie de la flèche **>** qui est ouverte est toujours dirigée **vers le plus grand** nombre.",
      },

      {
        type: "table",
        headersFr: ["Comparaison", "Symbole", "Exemple"],
        accentHeader: true,
        rows: [
          ["plus petit que", "**<**", "456 **<** 462"],
          ["plus grand que", "**>**", "902 **>** 890"],
          ["égal à", "**=**", "789 **=** 789"],
        ],
      },
      
      { type: "plain", fr: "" },
      
      {
        type: "highlight",
        fr: "Règle de comparaison",
      },

      {
        type: "plain",
        fr: "Nombres avec un nombre différent de chiffres",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Le plus long est le plus grand.",
        ],
      },

      {
        type: "plain",
        fr: "Même nombre de chiffres"
      },
  
          
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Compare chiffre par chiffre depuis la gauche.",
          "Dès qu'un chiffre est différent, on regarde le plus grand chiffre.",
        ],
      },
      
      {
        type: "highlight",
        fr: "Exemple",
      },

      { type: "plain", fr: "On a deux chiffres 3 456 et 3 421" },
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Même nombre de chiffres",
          "Les milliers sont égaux",
          "Les entaines sont égales",
          "Les dizaines : 5 > 2",
          "Donc 3 456 > 3 421",
        ],
      },

      { type: "plain", fr: "" },

      {
        type: "heading",
        fr: "Valeur entre deux bornes",
        black: true,
      },

      {
        type: "highlight",
        fr: "Principe",
      },

      { type: "plain", fr: "Quand une valeur est entre deux nombres, cela veut dire :" },
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "La valeur est plus grande que le premier nombre",
          "La valeur est plus petite que le deuxième nombre.",
        ],
      },

      {
        type: "highlight",
        fr: "Exemple",
      },

      { type: "plain", fr: "Quels nombres sont entre 3 et 8 ?" },
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On cherche les nombres plus grands que 3 et plus petits que 8. (3 < ? < 8)",
          "Les nombres possibles sont : 4, 5, 6, 7",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [

  ],

  exercisePool: [
    
  ],

  poolSize: 5,
};
