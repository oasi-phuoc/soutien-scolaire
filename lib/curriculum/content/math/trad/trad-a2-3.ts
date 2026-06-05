import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A2_3: SubmoduleTrad = {
  submoduleId: "A2-3",
  title: {
    fr: "Estimation et arrondi",
    en: "Estimation and rounding",
    ar: "التقدير والتقريب",
    fa: "تخمین و گرد کردن",
    pt: "Estimativa e arredondamento",
    ti: "ቅምሻ ምግምጋም",
    uk: "Оцінювання та округлення",
  },
  blocks: [
    {
      text: {
        fr: "Arrondi",
      }
    },
    {
      text: {
        fr: "L'arrondi consiste à remplacer un nombre par un nombre **proche** mais plus simple.",
        en: "Rounding replaces a number with a nearby simpler number.",
        ar: "التقريب يعني استبدال عدد بعدد قريب وأسهل.",
        fa: "گرد کردن یعنی جایگزینی عدد با عددی نزدیک و ساده‌تر.",
        pt: "Arredondar é substituir um número por outro mais simples e próximo.",
        ti: "ምልካዕ ቁጽሪ ብቀረቡ ቀሊል ቁጽሪ ምቅያር እዩ።",
        uk: "Округлення замінює число на близьке простіше.",
      }
    },
    {
      text: {
        fr: "Règle d'arrondi",
        en: "Rounding rule",
        ar: "قاعدة التقريب",
        fa: "قانون گرد کردن",
        pt: "Regra de arredondamento",
        ti: "ሕጊ ምልካዕ",
        uk: "Правило округлення",
      }
    },
    {
      items: {
        fr: [
          "Regarde le chiffre qui suit la position d'arrondi.",
          "Si ce chiffre est **≥ 5** → arrondi vers le **haut**.",
          "Si ce chiffre est **< 5** → arrondi vers le **bas**.",
        ],
      }
    },
    {
      headers: {
        fr: ["Nombre", "Arrondi à la centaine", "Pourquoi ?"],
      }
    },
    {
      text: {
        fr: "Estimation",
      }
    },
    {
      text: {
        fr: "Une estimation consiste à trouver une **valeur approximative** d'un nombre ou d'un calcul. On ne cherche pas la réponse exacte, mais une réponse rapide et proche du nombre.",
        en: "Estimation gives a quick approximate value without an exact calculation.",
        ar: "التقدير يعطي قيمة تقريبية سريعة دون حساب دقيق.",
        fa: "تخمین مقدار تقریبی سریع بدون محاسبه دقیق می‌دهد.",
        pt: "A estimativa dá um valor aproximado rápido sem cálculo exato.",
        ti: "ቅምሻ ብዘይ ትኽክለኛ ሕሳብ ፈጣን ቅርብ ውጽኢት ይህብ።",
        uk: "Оцінювання дає швидке наближене значення без точного обчислення.",
      }
    },
    {
      text: {
        fr: "Exemple",
        en: "Example",
        ar: "مثال",
        fa: "مثال",
        pt: "Exemplo",
        ti: "ኣብነት",
        uk: "Приклад",
      }
    },
    {
      text: {
        fr: "198 + 305",
      }
    },
    {
      text: {
        fr: "On arrondit :",
        en: "We round:",
        ar: "نقرّب:",
        fa: "گرد می‌کنیم:",
        pt: "Arredondamos:",
        ti: "ንምልክት:",
        uk: "Округлюємо:",
      }
    },
    {
      items: {
        fr: ["198 → 200", "305 → 300"],
      }
    },
    {
      text: {
        fr: "Calcul estimé :",
        en: "Estimated calculation:",
        ar: "الحساب التقديري:",
        fa: "محاسبه تقریبی:",
        pt: "Cálculo estimado:",
        ti: "ናይ ቅምሻ ሕሳብ:",
        uk: "Орієнтовний розрахунок:",
      }
    },
    {
      items: {
        fr: ["200 + 300 = 500"],
      }
    },
    {
      text: {
        fr: "La réponse exacte est 503. L'estimation 500 est donc proche.",
        en: "The exact answer is 503. The estimate 500 is close.",
        ar: "الجواب الدقيق هو 503. التقدير 500 قريب جداً.",
        fa: "پاسخ دقیق 503 است. تخمین 500 نزدیک است.",
        pt: "A resposta exata é 503. A estimativa 500 está muito próxima.",
        ti: "ትኽክለኛ ውጽኢት 503 እዩ። ቅምሻ 500 ቀሪቡ ኣሎ።",
        uk: "Точна відповідь — 503. Оцінка 500 дуже близька.",
      }
    },
  ],
};
