import type { GrammarLesson } from "../../grammar-data";

/** Unité 49 — Le superlatif (G10.3) */
export const A1_GR_SUPERLATIF: GrammarLesson = {
  slug: "a1-gr-superlatif",
  code: "G10.3",
  level: "A1",
  title: "Le superlatif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Le superlatif exprime le degré maximum ou minimum d'une intensité, d'une quantité ou d'une qualité.",
        "C'est le meilleur pâtissier de France. (= il n'y a pas de pâtissier meilleur que lui.)",
        "C'est l'émission qui a le plus de spectateurs.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      items: [
        "Avec un adjectif : C'est la région la moins visitée.",
        "Avec un adverbe : C'est l'émission qui dure le plus longtemps.",
        "Avec un nom : C'est la région où il y a le plus de soleil.",
        "Avec un verbe : C'est la région où il pleut le moins.",
        "Complément introduit par {a}de / de la / de l' / du / des{/a}. → La plus belle région de France. ; Le plus grand cabaret du monde.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Remarques",
    },
    {
      type: "text",
      items: [
        "Adjectif après le nom : on répète l'article. → C'est le programme le moins intéressant de la soirée.",
        "Adjectif avant le nom : deux possibilités. → C'est la région la plus belle de France. / C'est la plus belle région de France.",
        "✗ le plus bon → ✓ {a}le / la / les meilleur(e)(s){/a}. → Ce cuisinier est le meilleur.",
        "✗ le plus bien → ✓ {a}le mieux{/a}. → C'est lui qui cuisine le mieux.",
        "Pour un aspect négatif : {a}le / la / les pire(s){/a}. → C'est la pire émission de la semaine.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      text: "Quand {a}plus{/a} est le dernier mot de la phrase, on prononce généralement le {a}s{/a}. → C'est le programme qui intéresse le plus !",
    },
    { type: "heading", text: "Adjectif ou adverbe ?", trans: { en: "Adjective or adverb?", ar: "صفة أم ظرف؟", fa: "صفت یا قید؟", ti: "ቅጽል ወይ ተወሳኺ ቃል?", uk: "Прикметник чи прислівник?" } },
    {
      type: "grid",
      headers: ["Mot", "Nature et emploi", "Comparatif", "Superlatif"],
      rows: [
        ["bon, bonne, bons, bonnes", "adjectif : accompagne un nom", "meilleur(e)(s)", "le/la/les meilleur(e)(s)"],
        ["bien", "adverbe : accompagne un verbe", "mieux", "le mieux"],
        ["mauvais", "adjectif", "pire ou plus mauvais", "le pire ou le plus mauvais"],
      ],
      boldFirstCol: true,
      transHeaders: {
        en: ["Word", "Nature and use", "Comparative", "Superlative"],
        ar: ["الكلمة", "النوع والاستخدام", "المقارنة", "التفضيل"],
        fa: ["کلمه", "نوع و کاربرد", "مقایسه‌ای", "عالی"],
        ti: ["ቃል", "ባህርን ኣጠቓቕማን", "ምውድዳር", "ዝለዓለ ደረጃ"],
        uk: ["Слово", "Природа та вживання", "Порівняльний", "Найвищий"],
      },
      transRows: {
        en: [["bon, bonne, bons, bonnes", "adjective: accompanies a noun", "meilleur(e)(s)", "le/la/les meilleur(e)(s)"], ["bien", "adverb: accompanies a verb", "mieux", "le mieux"], ["mauvais", "adjective", "pire or plus mauvais", "le pire or le plus mauvais"]],
        ar: [["bon, bonne, bons, bonnes", "صفة: ترافق اسماً", "meilleur(e)(s)", "le/la/les meilleur(e)(s)"], ["bien", "ظرف: يرافق فعلاً", "mieux", "le mieux"], ["mauvais", "صفة", "pire أو plus mauvais", "le pire أو le plus mauvais"]],
        fa: [["bon, bonne, bons, bonnes", "صفت: همراه اسم می‌آید", "meilleur(e)(s)", "le/la/les meilleur(e)(s)"], ["bien", "قید: همراه فعل می‌آید", "mieux", "le mieux"], ["mauvais", "صفت", "pire یا plus mauvais", "le pire یا le plus mauvais"]],
        ti: [["bon, bonne, bons, bonnes", "ቅጽል፦ ንስም ይስዕብ", "meilleur(e)(s)", "le/la/les meilleur(e)(s)"], ["bien", "ተወሳኺ ቃል፦ ንግሲ ይስዕብ", "mieux", "le mieux"], ["mauvais", "ቅጽል", "pire ወይ plus mauvais", "le pire ወይ le plus mauvais"]],
        uk: [["bon, bonne, bons, bonnes", "прикметник: супроводжує іменник", "meilleur(e)(s)", "le/la/les meilleur(e)(s)"], ["bien", "прислівник: супроводжує дієслово", "mieux", "le mieux"], ["mauvais", "прикметник", "pire або plus mauvais", "le pire або le plus mauvais"]],
      },
    },
    { type: "text", label: "Exemples", items: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}.", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}.", "C'est la {a}pire{/a} erreur."],
      transLabel: { en: "Examples", ar: "أمثلة", fa: "مثال‌ها", ti: "ኣብነታት", uk: "Приклади" },
      transItems: {
        en: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (It's a good book, but this one is better.)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (She sings well, but her sister sings better.)", "C'est la {a}pire{/a} erreur. (It's the worst mistake.)"],
        ar: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (إنه كتاب جيد، لكن هذا أفضل.)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (هي تغني جيداً، لكن أختها تغني أفضل.)", "C'est la {a}pire{/a} erreur. (إنه أسوأ خطأ.)"],
        fa: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (این کتاب خوبی است، اما این یکی بهتر است.)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (او خوب می‌خواند، اما خواهرش بهتر می‌خواند.)", "C'est la {a}pire{/a} erreur. (این بدترین اشتباه است.)"],
        ti: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (ጽቡቕ መጽሓፍ እዩ፣ ግን እዚ ዝሓሸ እዩ።)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (ጽቡቕ ትዝምር፣ ግን ሓብታ ዝሓሸ ትዝምር።)", "C'est la {a}pire{/a} erreur. (እቲ ዝኸፍአ ጌጋ እዩ።)"],
        uk: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (Це хороша книга, але ця краща.)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (Вона добре співає, але її сестра співає краще.)", "C'est la {a}pire{/a} erreur. (Це найгірша помилка.)"],
      },
    },
    { type: "heading", text: "Le superlatif", trans: { en: "The superlative", ar: "صيغة التفضيل العليا", fa: "صفت عالی", ti: "ናይ ዝለዓለ ደረጃ ቅርጺ", uk: "Найвищий ступінь" } },
    {
      type: "text",
      text: "Le superlatif exprime le degré le plus élevé ou le plus bas.",
      transText: {
        en: "The superlative expresses the highest or lowest degree.",
        ar: "صيغة التفضيل العليا تعبّر عن أعلى أو أدنى درجة.",
        fa: "صفت عالی بالاترین یا پایین‌ترین درجه را بیان می‌کند.",
        ti: "ናይ ዝለዓለ ደረጃ ቅርጺ ዝለዓለ ወይ ዝተሓተ ደረጃ የመልክት።",
        uk: "Найвищий ступінь виражає найвищу або найнижчу межу.",
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
