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
        fr: "Sur une droite numérique, les nombres sont placés dans l'ordre croissant de gauche à droite. L'espacement entre deux nombres consécutifs peut être 1, 2, 5, 10, 100… selon l'échelle.",
        pivot: {
          en: "On a number line, numbers go in increasing order left to right. The gap between consecutive numbers can be 1, 2, 5, 10, 100… depending on the scale.",
          ar: "على المستقيم العددي، توضع الأعداد في ترتيب تصاعدي من اليسار إلى اليمين. الفجوة بين عددين متتاليين يمكن أن تكون 1، 2، 5، 10، 100… حسب المقياس.",
          fa: "روی خط اعداد، اعداد به ترتیب صعودی از چپ به راست قرار می‌گیرند. فاصله بین دو عدد متوالی می‌تواند ۱، ۲، ۵، ۱۰، ۱۰۰… باشد.",
          ti: "ኣብ ቁጽሪ ቀጽሪ፡ ቁጽርታት ካብ ጸጋም ናብ የማን ብቅርርቦ ይስደርዑ። ርሕቀት 1፡ 2፡ 5፡ 10፡ 100... ክኸውን ይኽእል።",
          uk: "На числовій прямій числа розташовані у зростаючому порядку зліва направо. Проміжок між двома числами може бути 1, 2, 5, 10, 100… залежно від масштабу.",
          pt: "Numa reta numérica, os números são colocados em ordem crescente da esquerda para a direita. O intervalo entre dois números consecutivos pode ser 1, 2, 5, 10, 100… dependendo da escala.",
        },
      },

      {
        type: "heading",
        fr: "Nombres pairs et impairs",
        black: true,
      },

      {
        type: "plain",
        fr: "Pour savoir si un nombre est pair ou impair, on regarde seulement le dernier chiffre.",
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
          "Il se termine par 0, 2, 4, 6 ou 8.",
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
          "Il se termine par 1, 3, 5, 7 ou 9.",
          "3, 17, 45, 99…",
        ],
      },
    ],

    paragraphs: {
      fr: [
        "Sur une droite numérique, les nombres sont placés dans l'ordre croissant de gauche à droite. L'espacement entre deux nombres consécutifs peut être 5, 10, 100… selon l'échelle.",
        "Pour trouver un nombre « entre » deux autres, on lit l'échelle : par exemple entre 450 et 460 avec un pas de 5 unités, on peut placer 455.",
        "Un nombre est **pair** s'il se termine par 0, 2, 4, 6 ou 8. Il peut être partagé en deux groupes égaux. Exemples : 4, 12, 38.",
        "Un nombre est **impair** s'il se termine par 1, 3, 5, 7 ou 9. Il ne peut pas être partagé en deux groupes égaux. Exemples : 3, 17, 45.",
      ],

      en: [
        "On a number line, numbers are placed in increasing order from left to right. The gap between two neighbours can be 5, 10, 100… depending on the scale.",
        "To find a number between two others, read the scale: for example between 450 and 460 with a step of 5 units, you can place 455.",
        "A number is **even** if it ends in 0, 2, 4, 6 or 8. It can be split into two equal groups. Examples: 4, 12, 38.",
        "A number is **odd** if it ends in 1, 3, 5, 7 or 9. It cannot be split into two equal groups. Examples: 3, 17, 45.",
      ],

      ar: [
        "على المستقيم العددي توضع الأعداد تصاعديًا من اليسار إلى اليمين. المسافة بين عددين متتاليين قد تكون 5 أو 10 أو 100 حسب المقياس.",
        "لإيجاد عدد بين عددين آخرين نقرأ المقياس: مثلًا بين 450 و 460 بخطوة 5 وحدات نضع 455.",
        "العدد **زوجي** إذا انتهى بـ 0 أو 2 أو 4 أو 6 أو 8، ويمكن تقسيمه إلى مجموعتين متساويتين. أمثلة: 4، 12، 38.",
        "العدد **فردي** إذا انتهى بـ 1 أو 3 أو 5 أو 7 أو 9، ولا يمكن تقسيمه إلى مجموعتين متساويتين. أمثلة: 3، 17، 45.",
      ],

      fa: [
        "روی خط اعداد، اعداد به ترتیب صعودی از چپ به راست قرار می‌گیرند. فاصلهٔ گام می‌تواند ۵، ۱۰ یا ۱۰۰ باشد.",
        "برای یافتن عدد بین دو عدد، مقیاس را می‌خوانیم؛ مثلاً بین ۴۵۰ و ۴۶۰ با گام ۵ واحد، عدد ۴۵۵ جای می‌گیرد.",
        "عدد **زوج** است اگر به ۰، ۲، ۴، ۶ یا ۸ ختم شود. می‌توان آن را به دو گروه مساوی تقسیم کرد. مثال: ۴، ۱۲، ۳۸.",
        "عدد **فرد** است اگر به ۱، ۳، ۵، ۷ یا ۹ ختم شود. نمی‌توان آن را به دو گروه مساوی تقسیم کرد. مثال: ۳، ۱۷، ۴۵.",
      ],

      ti: [
        "ኣኃዝቲ ኣብ ቀጽሪ ቁፅሪ ካብ ንደቓይቕ ክሳዕ የማን ብትሑትስነት ይውሰኩ። ርሕቀት መእተዊ 1፡ 10፡ 100 ክኸውን ይኽእል።",
        "ኣብ መንካይ ክልተ ኣኃዝቲ ናይ መስፈሪ ንንበብ፡ ንኣብነት 450ን 460 ዝኣክል 455 እዩ።",
        "ቁጽሪ **ዝተፈጥዎ (pair)** እዩ ምስ 0፡ 2፡ 4፡ 6 ወይ 8 ዝዛዘም። ምሳሌ: 4፡ 12፡ 38.",
        "ቁጽሪ **ዘይተፈጥዎ (impair)** እዩ ምስ 1፡ 3፡ 5፡ 7 ወይ 9 ዝዛዘም። ምሳሌ: 3፡ 17፡ 45.",
      ],

      uk: [
        "На числовій прямій числа розташовують у порядку зростання зліва направо. Крок може бути 5, 10, 100 тощо.",
        "Щоб знайти число «між» двома, читаємо масштаб: між 450 і 460 з кроком 5 одиниць буде, наприклад, 455.",
        "Число **парне**, якщо закінчується на 0, 2, 4, 6 або 8. Його можна поділити на дві рівні групи. Приклади: 4, 12, 38.",
        "Число **непарне**, якщо закінчується на 1, 3, 5, 7 або 9. Його не можна поділити на дві рівні групи. Приклади: 3, 17, 45.",
      ],

      pt: [
        "Numa reta numérica, os números são colocados em ordem crescente da esquerda para a direita. O intervalo entre dois números consecutivos pode ser 5, 10, 100… dependendo da escala.",
        "Para encontrar um número entre dois outros, lemos a escala: por exemplo, entre 450 e 460 com um passo de 5 unidades, podemos colocar 455.",
        "Um número é **par** se termina em 0, 2, 4, 6 ou 8. Pode ser dividido em dois grupos iguais. Exemplos: 4, 12, 38.",
        "Um número é **ímpar** se termina em 1, 3, 5, 7 ou 9. Não pode ser dividido em dois grupos iguais. Exemplos: 3, 17, 45.",
      ],
    },
  },

  exercises: [

  ],

  poolSize: 5,
};
