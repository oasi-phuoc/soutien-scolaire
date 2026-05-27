import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A1_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "A1-4",
  submoduleCode: "A1.4",

  theory: {
    title: {
      fr: "Droite numérique",
      en: "Number line",
      ar: "المستقيم العددي",
      fa: "خط اعداد",
      ti: "ቁፅሪ ቁጽሪ ቀጽሪ",
      uk: "Числова пряма",
      pt: "Reta numérica",
    },

    blocks: [
      {
        type: "plain",
        fr: "Sur une droite numérique, les nombres sont placés dans l'ordre du plus petit au plus grand, de gauche à droite. L'espacement entre deux nombres consécutifs peut être 1, 2, 5, 10, 100… selon l'échelle.",
        pivot: {
          en: "On a number line, numbers are placed in increasing order from left to right. The gap between two neighbours can be 1, 2, 5, 10, 100… depending on the scale.",
          ar: "على المستقيم العددي توضع الأعداد تصاعديًا من اليسار إلى اليمين. المسافة بين عددين متتاليين قد تكون 1 أو 2 أو 5 أو 10 أو 100 حسب المقياس.",
          fa: "روی خط اعداد، اعداد به ترتیب صعودی از چپ به راست قرار می‌گیرند. فاصله بین دو عدد متوالی می‌تواند ۱، ۲، ۵، ۱۰، ۱۰۰ و غیره باشد.",
          ti: "ኣብ ቁፅሪ ቀጽሪ ኣኃዝቲ ካብ ንደቓይቕ ክሳዕ የማን ብትሑትስነት ይውሰኩ። ርሕቀት መእተዊ 1፡ 2፡ 5፡ 10፡ 100 ክኸውን ይኽእል።",
          uk: "На числовой прямой числа расположены в порядке возрастания слева направо. Расстояние между соседними числами может быть 1, 2, 5, 10, 100… в зависимости от масштаба.",
          pt: "Em uma reta numérica, os números são colocados em ordem crescente da esquerda para a direita. O espaço entre dois números consecutivos pode ser 1, 2, 5, 10, 100… dependendo da escala.",
        },
      },

      {
        type: "heading",
        fr: "Nombres pairs et impairs",
        black: true,
      },

      {
        type: "plain",
        fr: "Pour savoir si un nombre est **pair** ou **impair**, on regarde seulement le dernier chiffre.",
        pivot: {
          en: "To know if a number is even or odd, look only at the last digit.",
          ar: "لمعرفة ما إذا كان عدد زوجياً أم فردياً، ننظر إلى الرقم الأخير فقط.",
          fa: "برای دانستن اینکه عددی زوج است یا فرد، فقط به آخرین رقم نگاه می‌کنیم.",
          ti: "ቁጽሪ ዝተፈጥዎ ወይ ዘይተፈጥዎ ምዃኑ ንምፍላጥ፡ ናይ መወዳእታ ኣሃዝ ጥራይ ንርኢ።",
          uk: "Щоб дізнатись, чи є число парним або непарним, дивимось лише на останню цифру.",
          pt: "Para saber se um número é par ou ímpar, olhamos apenas para o último algarismo.",
        },
      },

      {
        type: "highlight",
        fr: "Pair",
        pivot: {
          en: "Even",
          ar: "زوجي",
          fa: "زوج",
          ti: "ዝተፈጥዎ",
          uk: "Парне",
          pt: "Par",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Un nombre pair peut être partagé en 2 parts égales.",
          "Il se termine par **0**, **2**, **4**, **6** ou **8**.",
          "4, 12, 38, 100…",
        ],
      },

      {
        type: "highlight",
        fr: "Impair",
        pivot: {
          en: "Odd",
          ar: "فردي",
          fa: "فرد",
          ti: "ዘይተፈጥዎ",
          uk: "Непарне",
          pt: "Ímpar",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Un nombre impair ne peut pas être partagé en 2 parts exactement égales.",
          "Il se termine par **1**, **3**, **5**, **7** ou **9**.",
          "3, 17, 45, 99…",
        ],
      },
    ],

    paragraphs: {
      fr: [
      ],
    },
  },

  exercises: [

  ],

  poolSize: 5,
};
