import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_TIME_EXPRESSIONS: GrammarLesson = {
  slug: "a1-gr-expressions-temps",
  code: "R4.2",
  level: "A1",
  title: "Les expressions de temps",
  theory: [
    {
      type: "heading",
      text: "Les expressions de temps",
      trans: {
        en: "Time expressions",
        ar: "تعبيرات الزمن",
        fa: "عبارت‌های زمانی",
        ti: "ናይ ግዜ መግለጺታት",
        uk: "Вирази часу",
      },
    },
    {
      type: "text",
      noBulletItems: [0],
      items: [
        "Elles permettent de situer une action dans le présent, le passé ou le futur.",
      ],
      transItems: {
        en: ["They place an action in the present, past or future."],
        ar: ["تُستخدم لتحديد زمن الحدث في الحاضر أو الماضي أو المستقبل."],
        fa: ["آن‌ها زمان یک عمل را در حال، گذشته یا آینده مشخص می‌کنند."],
        ti: ["ሓደ ተግባር ኣብ ሕጂ፣ ዝሓለፈ ወይ መጻኢ ግዜ የቐምጣ።"],
        uk: ["Вони вказують, коли відбувається дія: тепер, у минулому чи в майбутньому."],
      },
    },
    {
      type: "grid",
      headers: ["Moment", "Expressions"],
      rows: [
        ["Présent", "aujourd'hui, maintenant, en ce moment"],
        ["Futur proche", "demain, après-demain, ce soir"],
        ["Futur plus éloigné", "la semaine prochaine, le mois prochain, l'année prochaine"],
      ],
      boldFirstCol: true,
    },
    {
      type: "text",
      label: "Exemples",
      items: [
        "{a}Aujourd'hui{/a}, je travaille.",
        "{a}Demain{/a}, je vais étudier.",
        "{a}La semaine prochaine{/a}, nous allons voyager.",
      ],
    },
  ],
  exercises: [],
};
