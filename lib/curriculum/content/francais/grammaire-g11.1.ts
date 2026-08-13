import type { GrammarLesson } from "../../grammar-data";

/** Unité 50 — L'expression du temps : moment précis ou habitude (G11.1) */
export const A1_GR_EXPRESSION_TEMPS_MOMENT: GrammarLesson = {
  slug: "a1-gr-expression-temps-moment",
  code: "G11.1",
  level: "A1",
  title: "L'expression du temps : moment précis ou habitude",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "On utilise des expressions de temps pour indiquer le moment précis d'une action ou pour parler d'une habitude.",
        "Exemple : Rendez-vous à la gare du Nord, le 22 mars à 17 heures 15.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Moment précis",
    },
    {
      type: "grid",
      headers: ["", "Préposition / forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["une heure", "à", "Il arrive à 9 heures."],
        ["un jour", "nom sans article", "Nous avons une réunion lundi."],
        ["une date", "le", "On est le 25 mai."],
        ["un mois, une année", "en", "On est en mars, en 2015."],
        ["une saison", "au / en", "au printemps ; en été ; en automne ; en hiver"],
        ["un siècle", "au", "Nous sommes au XXIe siècle."],
      ],
    },
    {
      type: "text",
      text: "Période liée au moment présent : adjectif démonstratif {a}ce, cet, cette, ces{/a}. → ce matin ; cet après-midi ; cette semaine ; ces jours-ci.",
    },
    {
      type: "heading",
      text: "Habitude",
    },
    {
      type: "text",
      items: [
        "Articles {a}le, la, l', les{/a} avec les jours et les moments de la journée.",
        "Le samedi, je vais à la piscine. (= tous les samedis)",
        "Je ne travaille pas la nuit. ; J'ai beaucoup de réunions l'après-midi. ; Je travaille souvent les jours fériés.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      text: "Liaison avec {a}en{/a} devant mois ou saisons en voyelle ou {a}h{/a} muet. → en avril ; en août ; en octobre ; en été ; en automne ; en hiver.",
    },
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
      text: "Elles permettent de situer une action dans le présent, le passé ou le futur.",
      transText: {
        en: "They place an action in the present, past or future.",
        ar: "تُستخدم لتحديد زمن الحدث في الحاضر أو الماضي أو المستقبل.",
        fa: "آن‌ها زمان یک عمل را در حال، گذشته یا آینده مشخص می‌کنند.",
        ti: "ሓደ ተግባር ኣብ ሕጂ፣ ዝሓለፈ ወይ መጻኢ ግዜ የቐምጣ።",
        uk: "Вони вказують, коли відбувається дія: тепер, у минулому чи в майбутньому.",
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
      allBullets: true,
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
