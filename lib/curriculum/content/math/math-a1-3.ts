Voici ta version avec **le portugais (pt)** ajouté partout de manière cohérente :

```ts
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
        { type: "plain", fr: "Comparer des nombres consiste à déterminer lequel est le plus grand, le plus petit ou s'ils sont égaux.", pivot: { en: "Comparing numbers means determining which is greatest, smallest, or equal.", ar: "مقارنة الأعداد تعني تحديد أيها أكبر أو أصغر أو متساوية.", fa: "مقایسه اعداد یعنی تعیین بزرگ‌ترین، کوچک‌ترین یا مساوی بودن آن‌ها.", ti: "ምወዳዳር ቁጽርታት ማለት ኣየናይ ዓቢ ፡ ንእሽቶ ወይ ማዕሪ ምዃኑ ምፍላጥ ማለት እዩ።", uk: "Порівняти числа — визначити, яке більше, менше або рівні.", pt: "Comparar números significa determinar qual é maior, menor ou se são iguais." } },

        { type: "heading", fr: "Les symboles de comparaison", black: true },

        { type: "plain", fr: "La partie de la flèche > qui est ouverte est toujours dirigée vers le plus grand nombre.", pivot: { en: "The open side of > points to the greater number.", ar: "الجانب المفتوح من > يتجه نحو العدد الأكبر.", fa: "قسمت باز > به سمت عدد بزرگ‌تر است.", ti: "ክፉት ሸነኽ ናይ > ኩሉ ጊዜ ናብ ዓቢ ቁጽሪ ይምልከት።", uk: "Відкрита сторона > спрямована до більшого числа.", pt: "O lado aberto de > aponta sempre para o número maior." } },

        { type: "table", headersFr: ["Comparaison", "Symbole", "Exemple"], accentHeader: true, rows: [
          ["plus petit que", "<", "456 < 462"],
          ["plus grand que", ">", "902 > 890"],
          ["égal à", "=", "789 = 789"],
        ] },

        { type: "highlight", fr: "Règle de comparaison", pivot: { en: "Comparison rule", ar: "قاعدة المقارنة", fa: "قانون مقایسه", ti: "ሕጊ ምወዳዳር", uk: "Правило порівняння", pt: "Regra de comparação" } },

        { type: "section", labelFr: "", itemsFr: [
          "Nombres avec un nombre différent de chiffres",
          "• Le plus long est le plus grand.",
          "Même nombre de chiffres",
          "• Compare chiffre par chiffre depuis la gauche.",
          "• Le premier chiffre différent décide.",
        ] },

        { type: "highlight", fr: "Exemple", pivot: { en: "Example", ar: "مثال", fa: "مثال", ti: "ኣብነት", uk: "Приклад", pt: "Exemplo" } },

        { type: "section", labelFr: "", itemsFr: [
          "3 456 et 3 421",
          "• même nombre de chiffres",
          "• milliers égaux",
          "• centaines égales",
          "• dizaines : 5 > 2",
          "• 3 456 > 3 421",
        ] },

        { type: "heading", fr: "Valeur entre deux bornes", black: true },

        { type: "highlight", fr: "Principe", pivot: { en: "Principle", ar: "المبدأ", fa: "اصل", ti: "መትከል", uk: "Принцип", pt: "Princípio" } },

        { type: "section", labelFr: "", itemsFr: [
          "Un nombre entre deux bornes signifie :",
          "• plus grand que le premier",
          "• plus petit que le second",
        ] },

        { type: "section", labelFr: "", itemsFr: [
          "Petit nombre < Valeur < Grand nombre",
        ] },

        { type: "highlight", fr: "Exemple", pivot: { en: "Example", ar: "مثال", fa: "مثال", ti: "ኣብነት", uk: "Приклад", pt: "Exemplo" } },

        { type: "section", labelFr: "", itemsFr: [
          "Nombres entre 3 et 8",
          "3 < ? < 8",
          "Résultat : 4, 5, 6, 7",
        ] },
      ],

      paragraphs: {
        fr: [
          "Comparer des nombres signifie déterminer lequel est le plus grand ou le plus petit.",
          "On compare chiffre par chiffre en commençant par la gauche.",
          "On utilise <, > ou =.",
        ],
        en: [
          "Compare numbers digit by digit starting from the left.",
          "If digits are equal, continue to the next position.",
          "Use <, > or =.",
        ],
        ar: [
          "نقارن الأعداد بدءاً من اليسار.",
          "إذا تساوت الأرقام ننتقل إلى التالية.",
          "نستخدم < أو > أو =.",
        ],
        fa: [
          "اعداد را از سمت چپ مقایسه می‌کنیم.",
          "اگر برابر باشند، به رقم بعدی می‌رویم.",
          "از < یا > یا = استفاده می‌کنیم.",
        ],
        ti: [
          "ካብ ጸጋም ንጀምር ንወዳደር።",
          "እንተ ማዕሪዮም ዝቕጽል ንምወዳደር።",
          "< ወይ > ወይ = ንጥቀም።",
        ],
        uk: [
          "Порівнюємо числа зліва направо.",
          "Якщо цифри однакові, переходимо далі.",
          "Використовуємо <, > або =.",
        ],
        pt: [
          "Comparamos números da esquerda para a direita.",
          "Se os dígitos forem iguais, continuamos.",
          "Usamos <, > ou =.",
        ],
      },
    },

    exercises: [
      { id: "a13-1", promptFr: "456 □ 462", promptPivot: { en: "Which sign? 456 □ 462", pt: "Qual sinal? 456 □ 462" }, type: "short_text", acceptable: ["<"] },
      { id: "a13-2", promptFr: "789 □ 789", promptPivot: { en: "Which sign? 789 □ 789", pt: "Qual sinal? 789 □ 789" }, type: "short_text", acceptable: ["="] },
      { id: "a13-3", promptFr: "902 □ 890", promptPivot: { en: "Which sign? 902 □ 890", pt: "Qual sinal? 902 □ 890" }, type: "short_text", acceptable: [">"] },
    ],

    exercisePool: [
      { id: "a13-p1", promptFr: "456 □ 462", type: "short_text", acceptable: ["<"] },
      { id: "a13-p2", promptFr: "789 □ 789", type: "short_text", acceptable: ["="] },
      { id: "a13-p3", promptFr: "902 □ 890", type: "short_text", acceptable: [">"] },
      { id: "a13-p4", promptFr: "1 245 □ 995", type: "short_text", acceptable: [">"] },
      { id: "a13-p5", promptFr: "3 456 □ 3 421", type: "short_text", acceptable: [">"] },
    ],

    poolSize: 5,
};
