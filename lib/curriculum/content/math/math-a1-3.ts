import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A1_3_LESSON: MathSubmoduleLesson = {
  submoduleId: "A1-3",
  submoduleCode: "A1.3",

  theory: {
    title: {
      fr: "Qui est le plus grand ?",
      en: "Which is greater?",
      ar: "أيهما أكبر؟",
      fa: "کدام بزرگ‌تر است؟",
      ti: "ኣየናይ እዩ ዓቢ?",
      uk: "Яке число більше?",
      pt: "Qual é o maior?",
    },

    blocks: [
      {
        type: "plain",
        fr: "Comparer des nombres consiste à déterminer lequel est le plus grand, le plus petit ou s'ils sont égaux.",
        pivot: {
          en: "Comparing numbers means determining which is greatest, smallest, or if they are equal.",
          ar: "مقارنة الأعداد تعني تحديد أيها أكبر أو أصغر أو متساوية.",
          fa: "مقایسه اعداد یعنی تعیین بزرگ‌ترین، کوچک‌ترین یا مساوی بودن آن‌ها.",
          ti: "ምወዳዳር ቁጽርታት ማለት ኣየናይ ዓቢ፡ ንእሽቶ ወይ ማዕሪ ምዃኑ ምፍላጥ ማለት እዩ።",
          uk: "Порівняти числа — визначити, яке більше, менше або вони рівні.",
          pt: "Comparar números significa determinar qual é maior, menor ou se são iguais.",
        },
      },

      {
        type: "heading",
        fr: "Les symboles de comparaison",
        black: true,
      },

      {
        type: "plain",
        fr: "La partie de la flèche > qui est ouverte est toujours dirigée vers le plus grand nombre.",
        pivot: {
          en: "The open side of > always points to the greater number.",
          ar: "الجانب المفتوح من > يتجه دائمًا نحو العدد الأكبر.",
          fa: "قسمت باز > همیشه به سمت عدد بزرگ‌تر است.",
          ti: "ክፉት ሸነኽ ናይ > ኩሉ ጊዜ ናብ ዓቢ ቁጽሪ ይምልከት።",
          uk: "Відкритий бік > завжди спрямований до більшого числа.",
          pt: "O lado aberto do símbolo > aponta sempre para o número maior.",
        },
      },

      {
        type: "table",
        headersFr: ["Comparaison", "Symbole", "Exemple"],
        accentHeader: true,
        rows: [
          ["plus petit que", "<", "456 < 462"],
          ["plus grand que", ">", "902 > 890"],
          ["égal à", "=", "789 = 789"],
        ],
      },

      {
        type: "highlight",
        fr: "Règle de comparaison",
        pivot: {
          en: "Comparison rule",
          ar: "قاعدة المقارنة",
          fa: "قانون مقایسه",
          ti: "ሕጊ ምወዳዳር",
          uk: "Правило порівняння",
          pt: "Regra de comparação",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Nombres avec un nombre différent de chiffres",
          "• Le plus long est le plus grand.",
          "Même nombre de chiffres",
          "• Compare chiffre par chiffre depuis la gauche.",
          "• Dès qu'un chiffre est différent, le plus grand chiffre donne le plus grand nombre.",
        ],
      },

      {
        type: "highlight",
        fr: "Exemple",
        pivot: {
          en: "Example",
          ar: "مثال",
          fa: "مثال",
          ti: "ኣብነት",
          uk: "Приклад",
          pt: "Exemplo",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On a deux chiffres 3 456 et 3 421",
          "• même nombre de chiffres",
          "• chiffres des milliers (3=3)",
          "• centaines (4=4)",
          "• dizaines : 5 > 2",
          "• 3 456 > 3 421",
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
        pivot: {
          en: "Principle",
          ar: "المبدأ",
          fa: "اصل",
          ti: "መትከል",
          uk: "Принцип",
          pt: "Princípio",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Quand un nombre est entre deux bornes, cela veut dire :",
          "• La valeur est plus grande que le premier nombre",
          "• La valeur est plus petite que le deuxième nombre.",
        ],
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Petit nombre < Valeur < Grand nombre",
        ],
      },

      {
        type: "highlight",
        fr: "Exemple",
        pivot: {
          en: "Example",
          ar: "مثال",
          fa: "مثال",
          ti: "ኣብነት",
          uk: "Приклад",
          pt: "Exemplo",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Quels nombres sont entre 3 et 8 ?",
          "On cherche les nombres plus grands que 3 et plus petits que 8.",
          "3 < ? < 8",
          "Les nombres possibles sont : 4, 5, 6, 7",
        ],
      },
    ],

    paragraphs: {
      fr: [
        "Pour comparer deux nombres, on compare chiffre par chiffre en commençant par les milliers.",
        "Si les chiffres des milliers sont égaux, on compare les centaines, puis les dizaines, puis les unités.",
        "On utilise < (plus petit que), > (plus grand que) ou = (égal à).",
      ],

      en: [
        "To compare two numbers, compare digit by digit starting with thousands.",
        "If thousands digits are equal, compare hundreds, then tens, then units.",
        "Use < (less than), > (greater than) or = (equal to).",
      ],

      ar: [
        "لمقارنة عددين، نقارن رقماً برقم بدءاً من الآلاف.",
        "إذا تساوت أرقام الآلاف، نقارن المئات ثم العشرات ثم الوحدات.",
        "نستخدم < أو > أو =.",
      ],

      fa: [
        "برای مقایسه دو عدد، رقم به رقم از هزارگان شروع می‌کنیم.",
        "اگر هزارگان برابر باشد، صدگان، سپس ده‌تاها، سپس یکان را مقایسه می‌کنیم.",
        "از < یا > یا = استفاده می‌کنیم.",
      ],

      ti: [
        "ክልተ ቁጽርታት ንምወዳዳር፡ ካብ ሽሕ ጀሚርና ኣሃዝ ብኣሃዝ ንወዳደር።",
        "ናይ ሽሕ ኣሃዝ እንተ ማዕሪዮም፡ ሚእቲ ድሕሪኡ ዓሰርተ ድሕሪኡ ውልቂ ንወዳደር።",
        "< ወይ > ወይ = ንጥቀም።",
      ],

      uk: [
        "Щоб порівняти два числа, порівнюємо цифру за цифрою, починаючи з тисяч.",
        "Якщо тисячі рівні, порівнюємо сотні, потім десятки, потім одиниці.",
        "Використовуємо < або > або =.",
      ],

      pt: [
        "Para comparar dois números, comparamos algarismo por algarismo começando pelos milhares.",
        "Se os milhares forem iguais, comparamos as centenas, depois as dezenas e depois as unidades.",
        "Usamos < (menor que), > (maior que) ou = (igual a).",
      ],
    },
  },

  exercises: [
    {
      id: "a13-1",
      promptFr: "Quel signe mettre ? 456 □ 462",

      promptPivot: {
        en: "Which sign? 456 □ 462",
        ar: "ما الرمز المناسب؟ 456 □ 462",
        fa: "کدام علامت؟ 456 □ 462",
        ti: "ኣየናይ ምልክት? 456 □ 462",
        uk: "Який знак? 456 □ 462",
        pt: "Qual sinal? 456 □ 462",
      },

      type: "short_text",
      acceptable: ["<"],
    },

    {
      id: "a13-2",
      promptFr: "Quel signe mettre ? 789 □ 789",

      promptPivot: {
        en: "Which sign? 789 □ 789",
        ar: "ما الرمز المناسب؟ 789 □ 789",
        fa: "کدام علامت؟ 789 □ 789",
        ti: "ኣየናይ ምልክት? 789 □ 789",
        uk: "Який знак? 789 □ 789",
        pt: "Qual sinal? 789 □ 789",
      },

      type: "short_text",
      acceptable: ["="],
    },

    {
      id: "a13-3",
      promptFr: "Quel signe mettre ? 902 □ 890",

      promptPivot: {
        en: "Which sign? 902 □ 890",
        ar: "ما الرمز المناسب؟ 902 □ 890",
        fa: "کدام علامت؟ 902 □ 890",
        ti: "ኣየናይ ምልክት? 902 □ 890",
        uk: "Який знак? 902 □ 890",
        pt: "Qual sinal? 902 □ 890",
      },

      type: "short_text",
      acceptable: [">"],
    },
  ],

  exercisePool: [
    { id: "a13-p1", promptFr: "Quel signe ? 456 □ 462", type: "short_text", acceptable: ["<"] },
    { id: "a13-p2", promptFr: "Quel signe ? 789 □ 789", type: "short_text", acceptable: ["="] },
    { id: "a13-p3", promptFr: "Quel signe ? 902 □ 890", type: "short_text", acceptable: [">"] },
    { id: "a13-p4", promptFr: "Quel signe ? 1 245 □ 995", type: "short_text", acceptable: [">"] },
    { id: "a13-p5", promptFr: "Quel signe ? 3 456 □ 3 421", type: "short_text", acceptable: [">"] },
    { id: "a13-p6", promptFr: "Quel signe ? 7 000 □ 6 999", type: "short_text", acceptable: [">"] },
    { id: "a13-p7", promptFr: "Quel signe ? 512 □ 521", type: "short_text", acceptable: ["<"] },
    { id: "a13-p8", promptFr: "Quel signe ? 4 300 □ 4 300", type: "short_text", acceptable: ["="] },
    { id: "a13-p9", promptFr: "Quel signe ? 88 □ 880", type: "short_text", acceptable: ["<"] },
    { id: "a13-p10", promptFr: "Quel signe ? 2 074 □ 2 740", type: "short_text", acceptable: ["<"] },
    { id: "a13-p11", promptFr: "Quel signe ? 999 □ 1 000", type: "short_text", acceptable: ["<"] },
    { id: "a13-p12", promptFr: "Quel signe ? 5 800 □ 5 080", type: "short_text", acceptable: [">"] },
    { id: "a13-p13", promptFr: "Quel est le plus grand : 637 ou 673 ? (écris le nombre)", type: "number", acceptable: ["673"] },
    { id: "a13-p14", promptFr: "Quel est le plus petit : 4 832 ou 4 382 ? (écris le nombre)", type: "number", acceptable: ["4382"] },
  ],

  poolSize: 5,
};
