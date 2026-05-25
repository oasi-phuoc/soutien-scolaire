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
      { type: "heading", fr: "Arrondi", black: true },

      {
        type: "plain",
        fr: "L'arrondi consiste à remplacer un nombre par un nombre **proche** mais plus simple.",
        pivot: {
          en: "Rounding replaces a number with a nearby simpler number.",
          ar: "التقريب يعني استبدال عدد بعدد قريب وأسهل.",
          fa: "گرد کردن یعنی جایگزینی عدد با عددی نزدیک و ساده‌تر.",
          ti: "ምልካዕ ቁጽሪ ብቀረቡ ቀሊል ቁጽሪ ምቅያር እዩ።",
          uk: "Округлення замінює число на близьке простіше.",
          pt: "Arredondar é substituir um número por outro mais simples e próximo.",
        },
      },

      {
        type: "highlight",
        fr: "Règle d'arrondi",
        pivot: {
          en: "Rounding rule",
          ar: "قاعدة التقريب",
          fa: "قانون گرد کردن",
          ti: "ሕጊ ምልካዕ",
          uk: "Правило округлення",
          pt: "Regra de arredondamento",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Regarde le chiffre qui suit la position d'arrondi.",
          "Si ce chiffre est **≥ 5** → arrondi vers le **haut**.",
          "Si ce chiffre est **< 5** → arrondi vers le **bas**.",
        ],
      },

      {
        type: "table",
        headersFr: ["Nombre", "Arrondi à la centaine", "Pourquoi ?"],
        accentHeader: true,
        rows: [
          ["347", "300", "chiffre des dizaines = 4 < 5\n→ vers le bas"],
          ["4 682", "4 700", "chiffre des dizaines = 8 ≥ 5\n→ vers le haut"],
        ],
      },

      { type: "heading", fr: "Estimation", black: true },

      {
        type: "plain",
        fr: "Une estimation consiste à trouver une valeur approximative d'un nombre ou d'un calcul. On ne cherche pas la réponse exacte, mais une réponse proche et rapide.",
        pivot: {
          en: "Estimation gives a quick approximate value without an exact calculation.",
          ar: "التقدير يعطي قيمة تقريبية سريعة دون حساب دقيق.",
          fa: "تخمین مقدار تقریبی سریع بدون محاسبه دقیق می‌دهد.",
          ti: "ቅምሻ ብዘይ ትኽክለኛ ሕሳብ ፈጣን ቅርብ ውጽኢት ይህብ።",
          uk: "Оцінювання дає швидке наближене значення без точного обчислення.",
          pt: "A estimativa dá um valor aproximado rápido sem cálculo exato.",
        },
      },

      {
        type: "highlight",
        fr: "Exemple",
        pivot: { en: "Example", ar: "مثال", fa: "مثال", ti: "ኣብነት", uk: "Приклад", pt: "Exemplo" },
      },

      {
        type: "plain",
        fr: "198 + 305",
      },

      {
        type: "plain",
        fr: "On arrondit :",
        pivot: {
          en: "We round:",
          ar: "نقرّب:",
          fa: "گرد می‌کنیم:",
          ti: "ንምልክት:",
          uk: "Округлюємо:",
          pt: "Arredondamos:",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: ["198 → 200", "305 → 300"],
      },

      {
        type: "plain",
        fr: "Calcul estimé :",
        pivot: {
          en: "Estimated calculation:",
          ar: "الحساب التقديري:",
          fa: "محاسبه تقریبی:",
          ti: "ናይ ቅምሻ ሕሳብ:",
          uk: "Орієнтовний розрахунок:",
          pt: "Cálculo estimado:",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: ["200 + 300 = 500"],
      },

      {
        type: "plain",
        fr: "La réponse exacte est 503. L'estimation 500 est donc proche.",
        pivot: {
          en: "The exact answer is 503. The estimate 500 is close.",
          ar: "الجواب الدقيق هو 503. التقدير 500 قريب جداً.",
          fa: "پاسخ دقیق 503 است. تخمین 500 نزدیک است.",
          ti: "ትኽክለኛ ውጽኢት 503 እዩ። ቅምሻ 500 ቀሪቡ ኣሎ።",
          uk: "Точна відповідь — 503. Оцінка 500 дуже близька.",
          pt: "A resposta exata é 503. A estimativa 500 está muito próxima.",
        },
      },
    ],

    paragraphs: { fr: [ ] },
  },

  exercises: [],
  exercisePool: [
    { id: "a2-3-ep01", promptFr: "Arrondissez 347 à la centaine la plus proche.", type: "number", acceptable: ["300"] },
    { id: "a2-3-ep02", promptFr: "Arrondissez 4 682 à la centaine la plus proche.", type: "number", acceptable: ["4700"] },
    { id: "a2-3-ep03", promptFr: "Arrondissez 256 à la dizaine la plus proche.", type: "number", acceptable: ["260"] },
    { id: "a2-3-ep04", promptFr: "Arrondissez 8 945 à la dizaine la plus proche.", type: "number", acceptable: ["8950"] },
    { id: "a2-3-ep05", promptFr: "Arrondissez 3 149 au millier le plus proche.", type: "number", acceptable: ["3000"] },
    { id: "a2-3-ep06", promptFr: "Arrondissez 7 500 au millier le plus proche.", type: "number", acceptable: ["8000"] },
    { id: "a2-3-ep07", promptFr: "Estimez 198 + 305 en arrondissant à la centaine. Quel est le résultat estimé ?", type: "number", acceptable: ["500"] },
    { id: "a2-3-ep08", promptFr: "Estimez 48 × 51 en arrondissant à la dizaine (50 × 50). Quel est le résultat estimé ?", type: "number", acceptable: ["2500"] },
    { id: "a2-3-ep09", promptFr: "Arrondissez 6 754 à la centaine la plus proche.", type: "number", acceptable: ["6800"] },
    { id: "a2-3-ep10", promptFr: "Arrondissez 1 450 au millier le plus proche.", type: "number", acceptable: ["1000"] },
    { id: "a2-3-ep11", promptFr: "Arrondissez 9 960 à la centaine la plus proche.", type: "number", acceptable: ["10000"] },
    { id: "a2-3-ep12", promptFr: "Estimez 397 + 612 en arrondissant (400 + 600). Quel est le résultat estimé ?", type: "number", acceptable: ["1000"] },
  ],
  poolSize: 5,
};
