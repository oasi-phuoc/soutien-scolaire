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
    { id: "a2-2-e1", promptFr: "Quel est le résultat de 57 − 49 ?",               type: "number",     acceptable: ["8"] },
    { id: "a2-2-e2", promptFr: "Calculez 863 − 427.",                              type: "number",     acceptable: ["436"] },
    { id: "a2-2-e3", promptFr: "Comment appelle-t-on le résultat d'une soustraction ?", type: "short_text", acceptable: ["différence", "la différence"] },
    { id: "a2-2-e4", promptFr: "Calculez 1005 − 348.",                             type: "number",     acceptable: ["657"] },
    { id: "a2-2-e5", promptFr: "Calculez 700 − 256.",                              type: "number",     acceptable: ["444"] },
  ],
  exercisePool: [
    { id: "a22-p1",  promptFr: "Calculez 57 − 49.",          type: "number", acceptable: ["8"] },
    { id: "a22-p2",  promptFr: "Calculez 863 − 427.",        type: "number", acceptable: ["436"] },
    { id: "a22-p3",  promptFr: "Calculez 700 − 256.",        type: "number", acceptable: ["444"] },
    { id: "a22-p4",  promptFr: "Calculez 1 005 − 348.",      type: "number", acceptable: ["657"] },
    { id: "a22-p5",  promptFr: "Calculez 500 − 173.",        type: "number", acceptable: ["327"] },
    { id: "a22-p6",  promptFr: "Calculez 824 − 367.",        type: "number", acceptable: ["457"] },
    { id: "a22-p7",  promptFr: "Calculez 1 000 − 456.",      type: "number", acceptable: ["544"] },
    { id: "a22-p8",  promptFr: "Calculez 403 − 158.",        type: "number", acceptable: ["245"] },
    { id: "a22-p9",  promptFr: "Calculez 2 135 − 1 523.",    type: "number", acceptable: ["612"] },
    { id: "a22-p10", promptFr: "Calculez 611 − 157.",        type: "number", acceptable: ["454"] },
    { id: "a22-p11", promptFr: "Quel terme manque ? ? − 48 = 52", type: "number", acceptable: ["100"] },
    { id: "a22-p12", promptFr: "Quel terme manque ? 300 − ? = 127", type: "number", acceptable: ["173"] },
    { id: "a22-p13", promptFr: "Calculez 900 − 350.",        type: "number", acceptable: ["550"] },
    { id: "a22-p14", promptFr: "Calculez 3 000 − 1 245.",    type: "number", acceptable: ["1755"] },
    { id: "a22-p15", promptFr: "Calculez 741 − 286.",        type: "number", acceptable: ["455"] },
    { id: "a22-p16", promptFr: "Calculez 5 000 − 2 738.",    type: "number", acceptable: ["2262"] },
  ],
  poolSize: 5,
};
