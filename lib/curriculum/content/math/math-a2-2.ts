import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A2_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "A2-2",
  submoduleCode: "A2.2",
  theory: {
    title: {
      fr: "Soustraction",
      en: "Subtraction",
      ar: "الطرح",
      fa: "تفریق",
      ti: "ምቅናስ",
      uk: "Віднімання",
      pt: "Subtração",
    },

    blocks: [
      {
        type: "plain",
        fr: "La soustraction permet de retirer une quantité d'une autre.",
        pivot: {
          en: "Subtraction removes a quantity from another.",
          ar: "الطرح يزيل كمية من أخرى.",
          fa: "تفریق مقداری را از مقدار دیگری کم می‌کند.",
          ti: "ምቅናስ ሓደ መጠን ካብ ካሊእ ይቀንስ።",
          uk: "Віднімання вилучає одну величину з іншої.",
          pt: "A subtração permite retirar uma quantidade de outra.",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Le signe de la soustraction est le signe « − » « moins »",
          "Les nombres de la soustraction sont les termes.",
          "Le résultat de la soustraction est la différence.",
        ],
      },

      {
        type: "table",
        headersFr: ["8", "−", "3", "=", "5"],
        accentHeader: true,
        rows: [["terme", "moins", "terme", "égale", "différence"]],
      },

      { type: "heading", fr: "Propriétés de la soustraction", black: true },

      {
        type: "highlight",
        fr: "Non-commutativité",
        pivot: {
          en: "Non-commutativity",
          ar: "عدم التبادلية",
          fa: "جابجایی‌ناپذیری",
          ti: "ዘይ ቅደምሰዓባዊ",
          uk: "Некомутативність",
          pt: "Não comutatividade",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "La soustraction n'est PAS commutative.",
          "• 57 − 49 ≠ 49 − 57",
        ],
      },

      { type: "heading", fr: "Soustraction en colonnes", black: true },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Écrivez les nombres en alignant **U** (unités), **D** (dizaines), **C** (centaines).",
          "Commencez par soustraire les **unités**.",
          "Si c'est impossible, faites un **emprunt**.",
          "Continuez avec les dizaines puis les centaines.",
        ],
      },
    ],

    paragraphs: {
      fr: [
        "La soustraction permet de retirer une quantité à une autre.",
        "La soustraction n'est pas commutative.",
        "Soustraction en colonnes avec emprunt.",
      ],
      en: [
        "Subtraction removes one quantity from another.",
        "It is not commutative.",
        "Column subtraction uses borrowing.",
      ],
      ar: [
        "الطرح يزيل كمية من أخرى.",
        "الطرح ليس تبديليًا.",
        "الطرح في الأعمدة مع الاستعارة.",
      ],
      fa: [
        "تفریق مقداری را از مقدار دیگر کم می‌کند.",
        "تفریق جابجایی‌پذیر نیست.",
        "تفریق ستونی با قرض گرفتن.",
      ],
      ti: [
        "ምቅናስ ካብ ሓደ መጠን ይቀንስ።",
      ],
      uk: [
        "Віднімання вилучає значення.",
        "Воно не комутативне.",
        "Використовується позичання.",
      ],
      pt: [
        "A subtração retira uma quantidade de outra.",
        "Não é comutativa.",
        "Usa empréstimo na subtração em colunas.",
      ],
    },
  },

  exercises: [

  ],
  exercisePool: [

  ],
  poolSize: 5,
};
