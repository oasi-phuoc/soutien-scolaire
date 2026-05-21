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
        fr: "Une suite de nombres est une liste ordonnée où chaque terme est obtenu en appliquant la même règle. On ajoute ou enlève toujours le même nombre.",
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
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "5 ; 8 ; 11 ; 14",
          "On ajoute toujours 3.",
          "• La règle pour trouver le nombre suivant est : nombre + 3",
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
        itemsFr: ["Les nombres augmentent.", "Exemple : 1 ; 3 ; 5 ; 7"],
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
        itemsFr: ["Les nombres diminuent.", "Exemple : 20 ; 15 ; 10 ; 5"],
      },
    ],
    paragraphs: {
      fr: [
        "Une **suite de nombres** est une liste ordonnée où chaque terme est obtenu en appliquant la même règle.",
        "Pour trouver la règle, calcule la différence entre deux termes consécutifs : c'est le **pas** (ou saut).",
        "Le pas peut être positif (suite croissante) ou négatif (suite décroissante).",
        "Exemple croissant : **2, 5, 8, 11, ?** → pas = +3 → terme suivant = **14**",
        "Exemple décroissant : **100, 90, 80, ?** → pas = −10 → terme suivant = **70**",
      ],
      en: [
        "A **number sequence** is an ordered list where each term is found by applying the same rule.",
        "To find the rule, calculate the difference between two consecutive terms — that is the **step**.",
        "The step can be positive (increasing sequence) or negative (decreasing sequence).",
        "Increasing example: **2, 5, 8, 11, ?** → step = +3 → next term = **14**",
        "Decreasing example: **100, 90, 80, ?** → step = −10 → next term = **70**",
      ],
      ar: [
        "**المتتالية العددية** قائمة مرتبة تُحسب فيها كل حلقة بتطبيق نفس القاعدة.",
        "لإيجاد القاعدة، احسب الفرق بين حلقتين متتاليتين — هذا هو **الخطوة**.",
        "يمكن أن تكون الخطوة موجبة (متتالية تصاعدية) أو سالبة (تنازلية).",
        "مثال تصاعدي: **2, 5, 8, 11, ?** → خطوة = +3 → الحد التالي = **14**",
        "مثال تنازلي: **100, 90, 80, ?** → خطوة = −10 → الحد التالي = **70**",
      ],
      fa: [
        "**دنباله عددی** فهرستی مرتب است که در آن هر جمله با اعمال همان قانون به دست می‌آید.",
        "برای یافتن قانون، تفاوت بین دو جملهٔ پشت‌سرهم را حساب کن — این **گام** است.",
        "گام می‌تواند مثبت (دنبالهٔ صعودی) یا منفی (دنبالهٔ نزولی) باشد.",
        "مثال صعودی: **2, 5, 8, 11, ?** → گام = +3 → جملهٔ بعدی = **14**",
        "مثال نزولی: **100, 90, 80, ?** → گام = −10 → جملهٔ بعدی = **70**",
      ],
      ti: [
        "**ተኸታታሊ ቁጽሪ** ስርዓታዊ ዝርዝር ኣኃዝቲ እዩ፤ ነፍሲ ወከፍ ቁጽሪ ብሓደ ሕጊ ይርከብ።",
        "ሕጊ ንምርካብ፡ ኣብ ክልተ ተኸታተምቲ ናይ ደገ ኣኃዝቲ ፍልልይ ሓስብ — ንሱ **ስጉምቲ** ይበሃል።",
        "ስጉምቲ ኣወንታዊ (ዝዓቢ ተኸታታሊ) ወይ ኣሉታዊ (ዝነኪ ተኸታታሊ) ክኸውን ይኽእል።",
        "ኣወንታዊ ኣብነት: **2, 5, 8, 11, ?** → ስጉምቲ = +3 → ዝቕጽል ቁጽሪ = **14**",
        "ኣሉታዊ ኣብነት: **100, 90, 80, ?** → ስጉምቲ = −10 → ዝቕጽል ቁጽሪ = **70**",
      ],
      uk: [
        "**Числова послідовність** — це впорядкований список, де кожен член отримується за однаковим правилом.",
        "Щоб знайти правило, обчисли різницю між двома сусідніми членами — це **крок**.",
        "Крок може бути позитивним (зростаюча послідовність) або від'ємним (спадаюча).",
        "Приклад зростаючої: **2, 5, 8, 11, ?** → крок = +3 → наступний член = **14**",
        "Приклад спадаючої: **100, 90, 80, ?** → крок = −10 → наступний член = **70**",
      ],
      pt: [
        "Uma **sequência numérica** é uma lista ordenada em que cada termo é obtido aplicando a mesma regra.",
        "Para encontrar a regra, calcula a diferença entre dois termos consecutivos — isso é o **passo**.",
        "O passo pode ser positivo (sequência crescente) ou negativo (sequência decrescente).",
        "Exemplo crescente: **2, 5, 8, 11, ?** → passo = +3 → próximo termo = **14**",
        "Exemplo decrescente: **100, 90, 80, ?** → passo = −10 → próximo termo = **70**",
      ],
    },
  },
  exercises: [

  ],
  exercisePool: [

  ],
  poolSize: 5,
};
