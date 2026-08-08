import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_SUPERLATIF: GrammarLesson = {
  slug: "a2-gr-superlatif",
  code: "R8.3",
  level: "A2",
  title: "Le superlatif",
  theory: [
    { type: "heading", text: "Le superlatif", trans: { en: "The superlative", ar: "صيغة التفضيل العليا", fa: "صفت عالی", ti: "ናይ ዝለዓለ ደረጃ ቅርጺ", uk: "Найвищий ступінь" } },
    { { type: "text",
      noBulletItems: [0], items: ["Le superlatif exprime le degré le plus élevé ou le plus bas."],
      transItems: {
        en: ["The superlative expresses the highest or lowest degree."],
        ar: ["صيغة التفضيل العليا تعبّر عن أعلى أو أدنى درجة."],
        fa: ["صفت عالی بالاترین یا پایین‌ترین درجه را بیان می‌کند."],
        ti: ["ናይ ዝለዓለ ደረጃ ቅርጺ ዝለዓለ ወይ ዝተሓተ ደረጃ የመልክት።"],
        uk: ["Найвищий ступінь виражає найвищу або найнижчу межу."],
      },
    },
    { type: "text", label: "Structure", items: ["le / la / les + plus / moins + adjectif"],
      transLabel: { en: "Structure", ar: "البنية", fa: "ساختار", ti: "ቅርጺ", uk: "Структура" },
      transItems: {
        en: ["le / la / les + plus / moins + adjective"],
        ar: ["le / la / les + plus / moins + الصفة"],
        fa: ["le / la / les + plus / moins + صفت"],
        ti: ["le / la / les + plus / moins + ቅጽል"],
        uk: ["le / la / les + plus / moins + прикметник"],
      },
    },
    {
      type: "grid",
      headers: ["Type", "Exemple"],
      rows: [
        ["le/la/les + plus + adj", "C'est le plus beau quartier de la ville."],
        ["le/la/les + moins + adj", "C'est la moins chère des options."],
      ],
      transHeaders: {
        en: ["Type", "Example"],
        ar: ["النوع", "مثال"],
        fa: ["نوع", "مثال"],
        ti: ["ዓይነት", "ኣብነት"],
        uk: ["Тип", "Приклад"],
      },
      transRows: {
        en: [["le/la/les + plus + adj", "C'est le plus beau quartier de la ville. (It's the most beautiful district in the city.)"], ["le/la/les + moins + adj", "C'est la moins chère des options. (It's the least expensive of the options.)"]],
        ar: [["le/la/les + plus + الصفة", "C'est le plus beau quartier de la ville. (إنه أجمل حي في المدينة.)"], ["le/la/les + moins + الصفة", "C'est la moins chère des options. (إنه الخيار الأقل تكلفة.)"]],
        fa: [["le/la/les + plus + صفت", "C'est le plus beau quartier de la ville. (زیباترین محله‌ی شهر است.)"], ["le/la/les + moins + صفت", "C'est la moins chère des options. (ارزان‌ترین گزینه است.)"]],
        ti: [["le/la/les + plus + ቅጽል", "C'est le plus beau quartier de la ville. (እቲ ዝጸበቐ ከባቢ ናይታ ከተማ እዩ።)"], ["le/la/les + moins + ቅጽል", "C'est la moins chère des options. (እቲ ዝሓሰረ ምርጫ እዩ።)"]],
        uk: [["le/la/les + plus + прикм.", "C'est le plus beau quartier de la ville. (Це найкрасивіший район міста.)"], ["le/la/les + moins + прикм.", "C'est la moins chère des options. (Це найдешевший із варіантів.)"]],
      },
    },
    { type: "heading", text: "Formes irrégulières", sub: true, trans: { en: "Irregular forms", ar: "صيغ شاذة", fa: "صورت‌های بی‌قاعده", ti: "ዘይስሩዓት ቅርጽታት", uk: "Неправильні форми" } },
    {
      type: "text",
      items: [
        "bon → comparatif : meilleur (pas : plus bon)",
        "bien → comparatif : mieux (pas : plus bien)",
        "mauvais → comparatif : pire ou plus mauvais",
      ],
      allBullets: true,
      transItems: {
        en: ["bon (good) → comparative: meilleur (better) (not: plus bon)", "bien (well) → comparative: mieux (better) (not: plus bien)", "mauvais (bad) → comparative: pire or plus mauvais (worse)"],
        ar: ["bon (جيد) ← المقارنة: meilleur (أفضل) (وليس: plus bon)", "bien (جيداً) ← المقارنة: mieux (أفضل) (وليس: plus bien)", "mauvais (سيئ) ← المقارنة: pire أو plus mauvais (أسوأ)"],
        fa: ["bon (خوب) ← مقایسه‌ای: meilleur (بهتر) (نه: plus bon)", "bien (خوب/قید) ← مقایسه‌ای: mieux (بهتر) (نه: plus bien)", "mauvais (بد) ← مقایسه‌ای: pire یا plus mauvais (بدتر)"],
        ti: ["bon (ጽቡቕ) → ምውድዳር፦ meilleur (ዝሓሸ) (ኣይኮነን፦ plus bon)", "bien (ጽቡቕ ኣገባብ) → ምውድዳር፦ mieux (ዝሓሸ) (ኣይኮነን፦ plus bien)", "mauvais (ሕማቕ) → ምውድዳር፦ pire ወይ plus mauvais (ዝኸፍአ)"],
        uk: ["bon (хороший) → порівняльний: meilleur (кращий) (не: plus bon)", "bien (добре) → порівняльний: mieux (краще) (не: plus bien)", "mauvais (поганий) → порівняльний: pire або plus mauvais (гірший)"],
      },
    },
    { type: "note", text: "C'est meilleur que ça. / Il va mieux aujourd'hui." },
  ],
  exercises: [],
};
