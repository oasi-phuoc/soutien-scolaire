import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A1_3_LESSON: MathSubmoduleLesson = {
  submoduleId: "A1-3",
  submoduleCode: "A1.3",

  theory: {
    title: {
      fr: "Comparer les nombres",
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
      
      { type: "plain", fr: "" },
      
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
          "Dès qu'un chiffre est différent, le plus grand chiffre donne le plus grand nombre.",
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
          "• milliers égaux",
          "• centaines égales",
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

      { type: "plain", fr: "Quand un nombre est entre deux bornes, cela veut dire :" },
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
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
    paragraphs: { fr: [] },
  },

  exercises: [

  ],

  exercisePool: [
    
  ],

  poolSize: 5,
};
