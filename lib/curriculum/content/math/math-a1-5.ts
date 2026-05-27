import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A1_5_LESSON: MathSubmoduleLesson = {
  submoduleId: "A1-5",
  submoduleCode: "A1.5",
  theory: {
    title: {
      fr: "Suites numériques",
      en: "Number sequences",
      ar: "المتتاليات العددية",
      fa: "دنباله‌های عددی",
      ti: "ናይ ቁጽሪ ተኸታታሊ",
      uk: "Числові послідовності",
      pt: "Sequências numéricas",
    },
    blocks: [
      {
        type: "plain",
        fr: "Une suite de nombres est une liste ordonnée où chaque terme est obtenu en appliquant la même règle. On **ajoute** ou **enlève** toujours le **même nombre**.",
        pivot: {
          en: "A number sequence is an ordered list where each term is found by applying the same rule. We always add or subtract the same number.",
          ar: "متتالية الأعداد هي قائمة مرتبة حيث يُحسب كل حد بتطبيق نفس القاعدة. نضيف أو نطرح دائمًا نفس العدد.",
          fa: "دنباله عددی فهرستی مرتب است که در آن هر جمله با اعمال همان قانون به دست می‌آید. همیشه همان عدد را اضافه یا کم می‌کنیم.",
          ti: "ተኸታታሊ ቁጽሪ ስርዓታዊ ዝርዝር እዩ፤ ነፍሲ ወከፍ ቁጽሪ ብሓደ ሕጊ ይርከብ። ኩሉ ጊዜ ሓደ ቁጽሪ ንውስኸሉ ወይ ነቀሉ።",
          uk: "Числова послідовність — це впорядкований список, де кожен член знаходиться за однаковим правилом. Ми завжди додаємо або віднімаємо те саме число.",
          pt: "Uma sequência numérica é uma lista ordenada em que cada termo é obtido aplicando a mesma regra. Sempre adicionamos ou subtraímos o mesmo número.",
        },
      },
      {
        type: "plain",
        fr: "Pour comprendre une suite, on regarde ce qui change entre les nombres.",
        pivot: {
          en: "To understand a sequence, we look at what changes between the numbers.",
          ar: "لفهم متتالية، ننظر إلى ما يتغير بين الأعداد.",
          fa: "برای درک یک دنباله، به آنچه بین اعداد تغییر می‌کند نگاه می‌کنیم.",
          ti: "ተኸታታሊ ንምርዳእ፡ ኣብ መንካይ ቁጽርታት ዝቕየር ነዕዘብ።",
          uk: "Щоб зрозуміти послідовність, дивимось, що змінюється між числами.",
          pt: "Para entender uma sequência, observamos o que muda entre os números.",
        },
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

      { type: "plain", fr: "5 ; 8 ; 11 ; 14" },
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On ajoute toujours 3.",
          "La règle pour trouver le nombre suivant est : nombre actuel + **3**",
        ],
      },
      {
        type: "highlight",
        fr: "Suite croissante",
        pivot: {
          en: "Increasing sequence",
          ar: "متتالية تصاعدية",
          fa: "دنباله صعودی",
          ti: "ዝዓቢ ተኸታታሊ",
          uk: "Зростаюча послідовність",
          pt: "Sequência crescente",
        },
      },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["Les nombres augmentent : 1 ; 3 ; 5 ; 7 ."],
      },
      {
        type: "highlight",
        fr: "Suite décroissante",
        pivot: {
          en: "Decreasing sequence",
          ar: "متتالية تنازلية",
          fa: "دنباله نزولی",
          ti: "ዝነኪ ተኸታታሊ",
          uk: "Спадна послідовність",
          pt: "Sequência decrescente",
        },
      },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["Les nombres diminuent : 20 ; 15 ; 10 ; 5 ."],
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
