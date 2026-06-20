import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_MARQUEURS_CHRONOLOGIQUES: GrammarLesson = {
  slug: "a1-gr-marqueurs-chronologiques",
  code: "R5.7",
  level: "A1",
  title: "Les marqueurs chronologiques",
  theory: [
    { type: "heading", text: "Les marqueurs chronologiques", trans: { en: "Time markers", ar: "أدوات الترتيب الزمني", fa: "نشانگرهای زمانی", ti: "ናይ ግዜ መፈለይታት", uk: "Часові маркери" } },
    {
      type: "grid",
      headers: ["Marqueur", "Emploi", "Exemple"],
      rows: [
        ["depuis", "action commencée dans le passé et toujours en cours", "J'habite ici depuis 2020."],
        ["il y a", "moment situé dans le passé", "Je suis arrivé il y a deux jours."],
        ["pendant", "durée complète", "J'ai étudié pendant trois heures."],
        ["dans", "moment situé dans le futur", "Je pars dans dix minutes."],
        ["pour", "durée prévue", "Je pars pour une semaine."],
      ],
      boldFirstCol: true,
      transHeaders: {
        en: ["Marker", "Use", "Example"],
        ar: ["الأداة", "الاستخدام", "مثال"],
        fa: ["نشانگر", "کاربرد", "مثال"],
        ti: ["መፈለዪ", "ኣጠቓቕማ", "ኣብነት"],
        uk: ["Маркер", "Вживання", "Приклад"],
      },
      transRows: {
        en: [["depuis (since/for)", "action started in the past and still ongoing", "J'habite ici depuis 2020. (I have lived here since 2020.)"], ["il y a (ago)", "a moment in the past", "Je suis arrivé il y a deux jours. (I arrived two days ago.)"], ["pendant (during/for)", "a complete duration", "J'ai étudié pendant trois heures. (I studied for three hours.)"], ["dans (in)", "a moment in the future", "Je pars dans dix minutes. (I'm leaving in ten minutes.)"], ["pour (for)", "a planned duration", "Je pars pour une semaine. (I'm leaving for a week.)"]],
        ar: [["depuis (منذ)", "فعل بدأ في الماضي ولا يزال مستمراً", "J'habite ici depuis 2020. (أسكن هنا منذ 2020.)"], ["il y a (منذ)", "لحظة في الماضي", "Je suis arrivé il y a deux jours. (وصلت منذ يومين.)"], ["pendant (خلال)", "مدة كاملة", "J'ai étudié pendant trois heures. (درست لمدة ثلاث ساعات.)"], ["dans (بعد)", "لحظة في المستقبل", "Je pars dans dix minutes. (سأغادر بعد عشر دقائق.)"], ["pour (لمدة)", "مدة مقررة", "Je pars pour une semaine. (سأغادر لمدة أسبوع.)"]],
        fa: [["depuis (از/به‌مدت)", "عملی که در گذشته آغاز شده و هنوز ادامه دارد", "J'habite ici depuis 2020. (از سال ۲۰۲۰ اینجا زندگی می‌کنم.)"], ["il y a (پیش)", "لحظه‌ای در گذشته", "Je suis arrivé il y a deux jours. (دو روز پیش رسیدم.)"], ["pendant (در طول)", "مدت کامل", "J'ai étudié pendant trois heures. (سه ساعت درس خواندم.)"], ["dans (بعد از)", "لحظه‌ای در آینده", "Je pars dans dix minutes. (ده دقیقه‌ی دیگر می‌روم.)"], ["pour (برای)", "مدت برنامه‌ریزی‌شده", "Je pars pour une semaine. (برای یک هفته می‌روم.)"]],
        ti: [["depuis (ካብ)", "ኣብ ሕሉፍ ዝጀመረን ክሳብ ሕጂ ዝቕጽልን ተግባር", "J'habite ici depuis 2020. (ካብ 2020 ኣብዚ እቕመጥ።)"], ["il y a (ቅድሚ)", "ኣብ ሕሉፍ ዘሎ ግዜ", "Je suis arrivé il y a deux jours. (ቅድሚ ክልተ መዓልቲ ኣቲየ።)"], ["pendant (ኣብ ውሽጢ)", "ምሉእ ግዜ", "J'ai étudié pendant trois heures. (ንሰለስተ ሰዓታት ኣጽኒዐ።)"], ["dans (ድሕሪ)", "ኣብ መጻኢ ዘሎ ግዜ", "Je pars dans dix minutes. (ድሕሪ ዓሰርተ ደቓይቕ ክኸይድ እየ።)"], ["pour (ንግዜ)", "ዝተመደበ ግዜ", "Je pars pour une semaine. (ንሓደ ሰሙን ክኸይድ እየ።)"]],
        uk: [["depuis (з/протягом)", "дія почалася в минулому і досі триває", "J'habite ici depuis 2020. (Я живу тут з 2020 року.)"], ["il y a (тому)", "момент у минулому", "Je suis arrivé il y a deux jours. (Я прибув два дні тому.)"], ["pendant (протягом)", "повна тривалість", "J'ai étudié pendant trois heures. (Я вчився протягом трьох годин.)"], ["dans (через)", "момент у майбутньому", "Je pars dans dix minutes. (Я йду через десять хвилин.)"], ["pour (на)", "запланована тривалість", "Je pars pour une semaine. (Я їду на тиждень.)"]],
      },
    },
    {
      type: "highlight",
      label: "À retenir",
      items: [
        "{a}Depuis{/a} répond à « depuis quand ? » et continue jusqu'au présent.",
        "{a}Il y a{/a} regarde vers le passé ; {a}dans{/a} regarde vers le futur.",
        "{a}Pendant{/a} indique une durée réalisée ; {a}pour{/a} une durée prévue.",
      ],
      transLabel: { en: "Remember", ar: "للتذكّر", fa: "به یاد داشته باشید", ti: "ዘክር", uk: "Запам'ятайте" },
      transItems: {
        en: ["{a}Depuis{/a} answers «since when?» and continues up to the present.", "{a}Il y a{/a} looks to the past; {a}dans{/a} looks to the future.", "{a}Pendant{/a} indicates a completed duration; {a}pour{/a} a planned one."],
        ar: ["{a}Depuis{/a} يجيب على «منذ متى؟» ويستمر حتى الحاضر.", "{a}Il y a{/a} ينظر إلى الماضي؛ {a}dans{/a} ينظر إلى المستقبل.", "{a}Pendant{/a} يشير إلى مدة منتهية؛ {a}pour{/a} إلى مدة مقررة."],
        fa: ["{a}Depuis{/a} به «از کِی؟» پاسخ می‌دهد و تا حال ادامه دارد.", "{a}Il y a{/a} به گذشته نگاه می‌کند؛ {a}dans{/a} به آینده.", "{a}Pendant{/a} مدت انجام‌شده را نشان می‌دهد؛ {a}pour{/a} مدت برنامه‌ریزی‌شده را."],
        ti: ["{a}Depuis{/a} ን«ካብ መዓስ?» ይምልስ ክሳብ ሕጂ ይቕጽል።", "{a}Il y a{/a} ናብ ሕሉፍ ይርኢ፤ {a}dans{/a} ናብ መጻኢ ይርኢ።", "{a}Pendant{/a} ዝተፈጸመ ግዜ የመልክት፤ {a}pour{/a} ዝተመደበ ግዜ።"],
        uk: ["{a}Depuis{/a} відповідає на «відколи?» і триває до теперішнього.", "{a}Il y a{/a} дивиться в минуле; {a}dans{/a} дивиться в майбутнє.", "{a}Pendant{/a} вказує на завершену тривалість; {a}pour{/a} — на заплановану."],
      },
    },
  ],
  exercises: [],
};
