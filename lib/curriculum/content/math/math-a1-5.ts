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
      ti: "ቁፅሪ ቀጽሪ",
      uk: "Числова пряма",
      pt: "Reta numérica",
    },
    blocks: [
      {
        type: "plain",
        fr: "Sur une droite numérique, les nombres sont placés dans l'ordre croissant de gauche à droite. L'espacement entre deux nombres consécutifs peut être 1, 2, 5, 10, 100… selon l'échelle.",
        en: "On a number line, numbers are placed in increasing order from left to right. The spacing between consecutive numbers can be 1, 2, 5, 10, 100… depending on the scale.",
        ar: "على المستقيم العددي، توضع الأعداد في ترتيب تصاعدي من اليسار إلى اليمين. يمكن أن تكون المسافة بين عددين متتاليين 1 أو 2 أو 5 أو 10 أو 100 حسب المقياس.",
        fa: "روی خط اعداد، اعداد از چپ به راست به ترتیب صعودی قرار می‌گیرند. فاصله بین دو عدد می‌تواند ۱، ۲، ۵، ۱۰، ۱۰۰… باشد.",
        ti: "ኣብ ቁጽሪ ቀጽሪ ቁጽርታት ካብ ጸጋም ናብ የማን ብተደጋጋሚ ይሰደዱ። ርሕቀት 1፡ 2፡ 5፡ 10፡ 100… ክኸውን ይኽእል።",
        uk: "На числовій прямій числа розташовуються у зростаючому порядку зліва направо. Відстань може бути 1, 2, 5, 10, 100… залежно від масштабу.",
        pt: "Na reta numérica, os números são colocados em ordem crescente da esquerda para a direita. O espaçamento pode ser 1, 2, 5, 10, 100… dependendo da escala.",
      },

      {
        type: "heading",
        fr: "Nombres pairs et impairs",
        en: "Even and odd numbers",
        ar: "الأعداد الزوجية والفردية",
        fa: "اعداد زوج و فرد",
        ti: "ዝተፈጥዎን ዘይተፈጥዎን ቁጽርታት",
        uk: "Парні та непарні числа",
        pt: "Números pares e ímpares",
        black: true,
      },

      {
        type: "plain",
        fr: "Pour savoir si un nombre est pair ou impair, on regarde seulement le dernier chiffre.",
        en: "To know if a number is even or odd, look only at the last digit.",
        ar: "لمعرفة ما إذا كان العدد زوجياً أو فردياً ننظر إلى الرقم الأخير فقط.",
        fa: "برای تشخیص زوج یا فرد بودن عدد فقط به رقم آخر نگاه می‌کنیم.",
        ti: "ቁጽሪ ዝተፈጥዎ ወይ ዘይተፈጥዎ ንምፍላጥ ናይ መወዳእታ ኣሃዝ ጥራይ ንርኢ።",
        uk: "Щоб визначити парне чи непарне число, дивимось лише на останню цифру.",
        pt: "Para saber se um número é par ou ímpar, olha-se apenas o último algarismo.",
      },

      {
        type: "highlight",
        fr: "Pair",
        en: "Even",
        ar: "زوجي",
        fa: "زوج",
        ti: "ዝተፈጥዎ",
        uk: "Парне",
        pt: "Par",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Un nombre pair peut être partagé en 2 parts égales.",
          "Il se termine par 0, 2, 4, 6 ou 8.",
          "Exemples : 4, 12, 38, 100",
        ],
      },

      {
        type: "highlight",
        fr: "Impair",
        en: "Odd",
        ar: "فردي",
        fa: "فرد",
        ti: "ዘይተፈጥዎ",
        uk: "Непарне",
        pt: "Ímpar",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Un nombre impair ne peut pas être partagé en 2 parts égales.",
          "Il se termine par 1, 3, 5, 7 ou 9.",
          "Exemples : 3, 17, 45, 99",
        ],
      },
    ],

    paragraphs: {
      fr: [
        "Sur une droite numérique, les nombres sont placés de gauche à droite.",
        "On peut utiliser différents espacements selon l’échelle.",
        "Un nombre pair se termine par 0, 2, 4, 6 ou 8.",
        "Un nombre impair se termine par 1, 3, 5, 7 ou 9.",
      ],
      en: [
        "On a number line, numbers go from left to right.",
        "Different scales can be used.",
        "Even numbers end in 0, 2, 4, 6 or 8.",
        "Odd numbers end in 1, 3, 5, 7 or 9.",
      ],
      ar: [
        "على المستقيم العددي توضع الأعداد من اليسار إلى اليمين.",
        "يمكن استخدام مقاييس مختلفة.",
        "العدد الزوجي ينتهي بـ 0 أو 2 أو 4 أو 6 أو 8.",
        "العدد الفردي ينتهي بـ 1 أو 3 أو 5 أو 7 أو 9.",
      ],
      fa: [
        "روی خط اعداد، اعداد از چپ به راست قرار می‌گیرند.",
        "می‌توان از مقیاس‌های مختلف استفاده کرد.",
        "عدد زوج به ۰، ۲، ۴، ۶ یا ۸ ختم می‌شود.",
        "عدد فرد به ۱، ۳، ۵، ۷ یا ۹ ختم می‌شود.",
      ],
      ti: [
        "ኣብ ቁጽሪ ቀጽሪ ቁጽርታት ካብ ጸጋም ናብ የማን ይሰደዱ።",
        "ዝተፈላለየ መስፈሪ ክጥቀም ይኽእል።",
        "ዝተፈጥዎ ቁጽሪ ብ 0፡2፡4፡6፡8 ይዛዘም።",
        "ዘይተፈጥዎ ቁጽሪ ብ 1፡3፡5፡7፡9 ይዛዘም።",
      ],
      uk: [
        "На числовій прямій числа йдуть зліва направо.",
        "Можуть використовуватись різні масштаби.",
        "Парні числа закінчуються на 0, 2, 4, 6 або 8.",
        "Непарні числа закінчуються на 1, 3, 5, 7 або 9.",
      ],
      pt: [
        "Na reta numérica, os números vão da esquerda para a direita.",
        "Podem ser usadas diferentes escalas.",
        "Números pares terminam em 0, 2, 4, 6 ou 8.",
        "Números ímpares terminam em 1, 3, 5, 7 ou 9.",
      ],
    },
  },

  exercises: [
    {
      id: "a14-1",
      promptFr: "Quel nombre vient après 899 ?",
      promptPivot: { en: "Which number comes after 899?" },
      type: "number",
      acceptable: ["900"],
    },
    {
      id: "a14-2",
      promptFr: "Quel nombre est entre 12 et 14 ?",
      promptPivot: { en: "Which number is between 12 and 14?" },
      type: "number",
      acceptable: ["13"],
    },
    {
      id: "a14-3",
      promptFr: "On compte de 100 en 100 : 300, 400, ?",
      promptPivot: { en: "Count by 100: 300, 400, ?" },
      type: "number",
      acceptable: ["500"],
    },
    {
      id: "a14-4",
      promptFr: "46 est-il pair ou impair ?",
      promptPivot: { en: "Is 46 even or odd?" },
      type: "short_text",
      acceptable: ["pair", "even"],
    },
    {
      id: "a14-5",
      promptFr: "35 est-il pair ou impair ?",
      promptPivot: { en: "Is 35 even or odd?" },
      type: "short_text",
      acceptable: ["impair", "odd"],
    },
  ],

  exercisePool: [],
  poolSize: 5,
};
