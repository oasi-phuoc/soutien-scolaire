import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A2_3_LESSON: MathSubmoduleLesson = {
  submoduleId: "A2-3",
  submoduleCode: "A2.3",
  theory: {
    title: {
      fr: "Estimation et arrondi",
      en: "Estimation and rounding",
      ar: "التقدير والتقريب",
      fa: "تخمین و گرد کردن",
      ti: "ቅምሻ ምግምጋም",
      uk: "Оцінювання та округлення",
      pt: "Estimativa e arredondamento",
    },

    blocks: [
      {
        type: "heading",
        fr: "Arrondi",
        en: "Rounding",
        ar: "التقريب",
        fa: "گرد کردن",
        ti: "ምልካዕ",
        uk: "Округлення",
        pt: "Arredondamento",
        black: true,
      },

      {
        type: "plain",
        fr: "L'arrondi consiste à remplacer un nombre par un nombre « proche » mais plus simple.",
        en: "Rounding replaces a number with a nearby simpler number.",
        ar: "التقريب يعني استبدال عدد بعدد قريب وأسهل.",
        fa: "گرد کردن یعنی جایگزینی عدد با عددی نزدیک و ساده‌تر.",
        ti: "ምልካዕ ቁጽሪ ብቀረቡ ቀሊል ቁጽሪ ምቅያር እዩ።",
        uk: "Округлення замінює число на близьке простіше.",
        pt: "Arredondar é substituir um número por outro mais simples e próximo.",
      },

      {
        type: "highlight",
        fr: "Règle d'arrondi",
        en: "Rounding rule",
        ar: "قاعدة التقريب",
        fa: "قانون گرد کردن",
        ti: "ሕጊ ምልካዕ",
        uk: "Правило округлення",
        pt: "Regra de arredondamento",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Regarde le chiffre suivant.",
          "Si ≥ 5 → on arrondit vers le haut.",
          "Si < 5 → on arrondit vers le bas.",
        ],
        itemsEn: [
          "Look at the next digit.",
          "If ≥ 5 → round up.",
          "If < 5 → round down.",
        ],
        itemsAr: [
          "انظر إلى الرقم التالي.",
          "إذا ≥ 5 نقرب للأعلى.",
          "إذا < 5 نقرب للأسفل.",
        ],
        itemsFa: [
          "به رقم بعدی نگاه کن.",
          "اگر ≥ ۵ → به بالا گرد کن.",
          "اگر < ۵ → به پایین.",
        ],
        itemsTi: [
          "ዝቕጽል ቁጽሪ ርአ።",
          "≥ 5 → ዓቢ ምልካዕ።",
          "< 5 → ታሕቲ ምልካዕ።",
        ],
        itemsUk: [
          "Подивіться на наступну цифру.",
          "≥ 5 → округлення вгору.",
          "< 5 → вниз.",
        ],
        itemsPt: [
          "Observe o próximo dígito.",
          "Se ≥ 5 → arredonda para cima.",
          "Se < 5 → arredonda para baixo.",
        ],
      },

      {
        type: "heading",
        fr: "Estimation",
        en: "Estimation",
        ar: "التقدير",
        fa: "تخمین",
        ti: "ቅምሻ",
        uk: "Оцінювання",
        pt: "Estimativa",
        black: true,
      },

      {
        type: "plain",
        fr: "L'estimation donne une valeur approximative rapide.",
        en: "Estimation gives a quick approximate value.",
        ar: "التقدير يعطي قيمة تقريبية سريعة.",
        fa: "تخمین مقدار تقریبی سریع می‌دهد.",
        ti: "ቅምሻ ፈጣን ቅርብ ውጽኢት ይህብ።",
        uk: "Оцінювання дає швидке наближене значення.",
        pt: "A estimativa dá um valor aproximado rápido.",
      },

      {
        type: "highlight",
        fr: "Exemple",
        en: "Example",
        ar: "مثال",
        fa: "مثال",
        ti: "ኣብነት",
        uk: "Приклад",
        pt: "Exemplo",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: ["198 → 200", "305 → 300"],
        itemsEn: ["198 → 200", "305 → 300"],
        itemsAr: ["198 → 200", "305 → 300"],
        itemsFa: ["198 → 200", "305 → 300"],
        itemsTi: ["198 → 200", "305 → 300"],
        itemsUk: ["198 → 200", "305 → 300"],
        itemsPt: ["198 → 200", "305 → 300"],
      },

      {
        type: "plain",
        fr: "198 + 305 ≈ 500",
        en: "198 + 305 ≈ 500",
        ar: "198 + 305 ≈ 500",
        fa: "198 + 305 ≈ 500",
        ti: "198 + 305 ≈ 500",
        uk: "198 + 305 ≈ 500",
        pt: "198 + 305 ≈ 500",
      },

      {
        type: "plain",
        fr: "La valeur exacte est 503.",
        en: "The exact value is 503.",
        ar: "القيمة الدقيقة هي 503.",
        fa: "مقدار دقیق 503 است.",
        ti: "ትኽክለኛ ውጽኢት 503 እዩ።",
        uk: "Точне значення: 503.",
        pt: "O valor exato é 503.",
      },
    ],
  },

  paragraphs: {
    fr: [
      "L'arrondi simplifie les calculs.",
      "Règle : ≥5 on arrondit vers le haut, sinon vers le bas.",
      "L'estimation donne un résultat approximatif.",
    ],
    en: [
      "Rounding simplifies calculations.",
      "Rule: ≥5 round up, otherwise down.",
      "Estimation gives an approximate result.",
    ],
    ar: [
      "التقريب يسهل الحساب.",
      "إذا ≥5 نقرب للأعلى وإلا للأسفل.",
      "التقدير يعطي نتيجة تقريبية.",
    ],
    fa: [
      "گرد کردن محاسبه را ساده می‌کند.",
      "اگر ≥۵ بالا، در غیر این صورت پایین.",
      "تخمین نتیجه تقریبی می‌دهد.",
    ],
    ti: [
      "ምልካዕ ሕሳብ ይቐልል።",
      "≥5 ዓቢ እንተኾነ ምልካዕ።",
      "ቅምሻ ቅርብ ውጽኢት ይህብ።",
    ],
    uk: [
      "Округлення спрощує обчислення.",
      "≥5 округлюємо вгору, інакше вниз.",
      "Оцінювання дає наближений результат.",
    ],
    pt: [
      "O arredondamento simplifica cálculos.",
      "≥5 arredonda para cima, senão para baixo.",
      "A estimativa dá um resultado aproximado.",
    ],
  },
};
