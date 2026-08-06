import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_BON_BIEN: GrammarLesson = {
  slug: "a2-gr-bon-bien-meilleur-mieux",
  code: "R8.2",
  level: "A2",
  title: "Bon ou bien, meilleur ou mieux ?",
  theory: [
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
    { type: "highlight", label: "Exemples", items: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}.", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}.", "C'est la {a}pire{/a} erreur."],
      transLabel: { en: "Examples", ar: "أمثلة", fa: "مثال‌ها", ti: "ኣብነታት", uk: "Приклади" },
      transItems: {
        en: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (It's a good book, but this one is better.)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (She sings well, but her sister sings better.)", "C'est la {a}pire{/a} erreur. (It's the worst mistake.)"],
        ar: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (إنه كتاب جيد، لكن هذا أفضل.)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (هي تغني جيداً، لكن أختها تغني أفضل.)", "C'est la {a}pire{/a} erreur. (إنه أسوأ خطأ.)"],
        fa: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (این کتاب خوبی است، اما این یکی بهتر است.)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (او خوب می‌خواند، اما خواهرش بهتر می‌خواند.)", "C'est la {a}pire{/a} erreur. (این بدترین اشتباه است.)"],
        ti: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (ጽቡቕ መጽሓፍ እዩ፣ ግን እዚ ዝሓሸ እዩ።)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (ጽቡቕ ትዝምር፣ ግን ሓብታ ዝሓሸ ትዝምር።)", "C'est la {a}pire{/a} erreur. (እቲ ዝኸፍአ ጌጋ እዩ።)"],
        uk: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}. (Це хороша книга, але ця краща.)", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}. (Вона добре співає, але її сестра співає краще.)", "C'est la {a}pire{/a} erreur. (Це найгірша помилка.)"],
      },
    },
  ],
  exercises: [],
};
