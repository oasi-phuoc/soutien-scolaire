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
        en: "Subtraction removes a quantity from another.",
        ar: "الطرح يزيل كمية من أخرى.",
        fa: "تفریق مقداری را از مقدار دیگری کم می‌کند.",
        ti: "ምቅናስ ሓደ መጠን ካብ ካሊእ ይቀንስ።",
        uk: "Віднімання вилучає одну величину з іншої.",
        pt: "A subtração permite retirar uma quantidade de outra.",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Le signe de la soustraction est le signe « − » « moins »",
          "Les nombres de la soustraction sont les termes.",
          "Le résultat de la soustraction est la différence.",
        ],
        itemsEn: [
          "The subtraction sign is « − » (minus).",
          "The numbers are called terms.",
          "The result is called the difference.",
        ],
        itemsAr: [
          "علامة الطرح هي « − » (ناقص).",
          "الأعداد تسمى الحدود.",
          "الناتج يسمى الفرق.",
        ],
        itemsFa: [
          "علامت تفریق « − » است.",
          "اعداد جملات نام دارند.",
          "نتیجه تفریق «تفاضل» است.",
        ],
        itemsTi: [
          "ምልክት ምቅናስ « − » እዩ።",
          "ቁጽሪታት ሓደስሓደ ይብሃሉ።",
          "ውጽኢት ፍልልይ ይብሃል።",
        ],
        itemsUk: [
          "Знак віднімання « − ».",
          "Числа — доданки.",
          "Результат — різниця.",
        ],
        itemsPt: [
          "O sinal da subtração é « − » (menos).",
          "Os números são chamados de termos.",
          "O resultado é a diferença.",
        ],
      },

      {
        type: "table",
        headersFr: ["8", "−", "3", "=", "5"],
        accentHeader: true,
        rows: [["terme", "moins", "terme", "égale", "différence"]],
      },

      {
        type: "heading",
        fr: "Propriétés de la soustraction",
        en: "Properties of subtraction",
        ar: "خصائص الطرح",
        fa: "ویژگی‌های تفریق",
        ti: "ባህሪታት ምቅናስ",
        uk: "Властивості віднімання",
        pt: "Propriedades da subtração",
        black: true,
      },

      {
        type: "highlight",
        fr: "Non-commutativité",
        en: "Non-commutativity",
        ar: "عدم التبادلية",
        fa: "جابجایی‌ناپذیری",
        ti: "ዘይ ቅደምሰዓባዊ",
        uk: "Некомутативність",
        pt: "Não comutatividade",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "La soustraction n'est PAS commutative.",
          "• 57 − 49 ≠ 49 − 57",
        ],
        itemsEn: [
          "Subtraction is NOT commutative.",
          "• 57 − 49 ≠ 49 − 57",
        ],
        itemsAr: [
          "الطرح ليس تبديليًا.",
          "• 57 − 49 ≠ 49 − 57",
        ],
        itemsFa: [
          "تفریق جابجایی‌پذیر نیست.",
          "• 57 − 49 ≠ 49 − 57",
        ],
        itemsTi: [
          "ምቅናስ ቅደምሰዓባዊ ኣይኮነን።",
        ],
        itemsUk: [
          "Віднімання не є комутативним.",
        ],
        itemsPt: [
          "A subtração não é comutativa.",
        ],
      },

      {
        type: "heading",
        fr: "Soustraction en colonnes",
        en: "Column subtraction",
        ar: "الطرح في الأعمدة",
        fa: "تفریق ستونی",
        ti: "ብዓምዲ ምቅናስ",
        uk: "Віднімання в стовпчик",
        pt: "Subtração em colunas",
        black: true,
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Écrivez les nombres en alignant **U** (unités), **D** (dizaines), **C** (centaines).",
          "Commencez par soustraire les **unités**.",
          "Si c'est impossible, faites un **emprunt**.",
          "Continuez avec les dizaines puis les centaines.",
        ],
        itemsEn: [
          "Align units, tens, hundreds.",
          "Start with units.",
          "Borrow if necessary.",
          "Continue with tens then hundreds.",
        ],
        itemsAr: [
          "رتّب الآحاد والعشرات والمئات.",
          "ابدأ بالآحاد.",
          "استعر إذا لزم الأمر.",
          "ثم العشرات ثم المئات.",
        ],
        itemsFa: [
          "یکان، دهگان، صدگان را تراز کنید.",
          "از یکان شروع کنید.",
          "در صورت نیاز قرض بگیرید.",
          "سپس دهگان و صدگان.",
        ],
        itemsTi: [
          "ኣሃዱ፡ ዓሰርተ፡ ሚእቲ ምስልሳልና።",
        ],
        itemsUk: [
          "Вирівняйте розряди.",
          "Почніть з одиниць.",
          "Позичайте за потреби.",
        ],
        itemsPt: [
          "Alinhe unidades, dezenas e centenas.",
          "Comece pelas unidades.",
          "Faça empréstimo se necessário.",
          "Depois dezenas e centenas.",
        ],
      },
    ],
  },

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
};
