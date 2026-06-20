import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L22: GrammarLesson = {
  slug: "a1-gr-l22",
  code: "R4.3",
  level: "A1",
  title: "Les adverbes de fréquence",
  theory: [
    { type: "heading", text: "Les adverbes de fréquence", trans: { en: "Adverbs of frequency", ar: "ظروف التكرار", fa: "قیدهای تکرار", ti: "ናይ ድግግሞሽ ተወሳኺ ቃላት", uk: "Прислівники частоти" } },
    {
      type: "plain_list",
      items: [
        "Les adverbes de fréquence indiquent {a}combien de fois{/a} une action se produit.",
        "Ils se placent généralement {a}après le verbe{/a}.",
      ],
      transItems: {
        en: ["Adverbs of frequency tell {a}how often{/a} an action happens.", "They are usually placed {a}after the verb{/a}."],
        ar: ["ظروف التكرار تبيّن {a}كم مرة{/a} يحدث الفعل.", "توضع عادةً {a}بعد الفعل{/a}."],
        fa: ["قیدهای تکرار نشان می‌دهند {a}چند بار{/a} یک عمل رخ می‌دهد.", "معمولاً {a}بعد از فعل{/a} قرار می‌گیرند."],
        ti: ["ናይ ድግግሞሽ ተወሳኺ ቃላት ሓደ ተግባር {a}ክንደይ ግዜ{/a} ከም ዝፍጸም የመልክቱ።", "መብዛሕትኡ ግዜ {a}ድሕሪ ግሲ{/a} ይቕመጡ።"],
        uk: ["Прислівники частоти показують, {a}як часто{/a} відбувається дія.", "Зазвичай вони ставляться {a}після дієслова{/a}."],
      },
    },
    {
      type: "grid",
      headers: ["Adverbe", "Fréquence", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}toujours{/a}", "100%", "Il mange toujours à midi."],
        ["{a}souvent{/a}", "~75%", "Elle va souvent au cinéma."],
        ["{a}parfois / quelquefois{/a}", "~50%", "Nous mangeons parfois au restaurant."],
        ["{a}rarement{/a}", "~25%", "Je prends rarement le bus."],
        ["{a}ne … jamais{/a}", "0%", "Il ne fume jamais."],
      ],
      transHeaders: {
        en: ["Adverb", "Frequency", "Example"],
        ar: ["الظرف", "التكرار", "مثال"],
        fa: ["قید", "تکرار", "مثال"],
        ti: ["ተወሳኺ ቃል", "ድግግሞሽ", "ኣብነት"],
        uk: ["Прислівник", "Частота", "Приклад"],
      },
      transRows: {
        en: [["{a}toujours{/a} (always)", "100%", "Il mange toujours à midi. (He always eats at noon.)"], ["{a}souvent{/a} (often)", "~75%", "Elle va souvent au cinéma. (She often goes to the cinema.)"], ["{a}parfois / quelquefois{/a} (sometimes)", "~50%", "Nous mangeons parfois au restaurant. (We sometimes eat out.)"], ["{a}rarement{/a} (rarely)", "~25%", "Je prends rarement le bus. (I rarely take the bus.)"], ["{a}ne … jamais{/a} (never)", "0%", "Il ne fume jamais. (He never smokes.)"]],
        ar: [["{a}toujours{/a} (دائماً)", "100%", "Il mange toujours à midi. (يأكل دائماً ظهراً.)"], ["{a}souvent{/a} (غالباً)", "~75%", "Elle va souvent au cinéma. (تذهب غالباً إلى السينما.)"], ["{a}parfois / quelquefois{/a} (أحياناً)", "~50%", "Nous mangeons parfois au restaurant. (نأكل أحياناً في المطعم.)"], ["{a}rarement{/a} (نادراً)", "~25%", "Je prends rarement le bus. (نادراً ما آخذ الحافلة.)"], ["{a}ne … jamais{/a} (أبداً)", "0%", "Il ne fume jamais. (لا يدخّن أبداً.)"]],
        fa: [["{a}toujours{/a} (همیشه)", "100%", "Il mange toujours à midi. (همیشه ظهر غذا می‌خورد.)"], ["{a}souvent{/a} (اغلب)", "~75%", "Elle va souvent au cinéma. (اغلب به سینما می‌رود.)"], ["{a}parfois / quelquefois{/a} (گاهی)", "~50%", "Nous mangeons parfois au restaurant. (گاهی در رستوران غذا می‌خوریم.)"], ["{a}rarement{/a} (به‌ندرت)", "~25%", "Je prends rarement le bus. (به‌ندرت اتوبوس سوار می‌شوم.)"], ["{a}ne … jamais{/a} (هرگز)", "0%", "Il ne fume jamais. (هرگز سیگار نمی‌کشد.)"]],
        ti: [["{a}toujours{/a} (ኩሉ ግዜ)", "100%", "Il mange toujours à midi. (ኩሉ ግዜ ፋዱስ ይበልዕ።)"], ["{a}souvent{/a} (ብዙሕ ግዜ)", "~75%", "Elle va souvent au cinéma. (ብዙሕ ግዜ ናብ ሲነማ ትኸይድ።)"], ["{a}parfois / quelquefois{/a} (ሓሓሊፉ)", "~50%", "Nous mangeons parfois au restaurant. (ሓሓሊፉ ኣብ ቤት መግቢ ንበልዕ።)"], ["{a}rarement{/a} (ሳሕቲ)", "~25%", "Je prends rarement le bus. (ሳሕቲ ኣውቶቡስ እወስድ።)"], ["{a}ne … jamais{/a} (ፈጺሙ)", "0%", "Il ne fume jamais. (ፈጺሙ ኣየትክኽን።)"]],
        uk: [["{a}toujours{/a} (завжди)", "100%", "Il mange toujours à midi. (Він завжди їсть опівдні.)"], ["{a}souvent{/a} (часто)", "~75%", "Elle va souvent au cinéma. (Вона часто ходить у кіно.)"], ["{a}parfois / quelquefois{/a} (іноді)", "~50%", "Nous mangeons parfois au restaurant. (Ми іноді їмо в ресторані.)"], ["{a}rarement{/a} (рідко)", "~25%", "Je prends rarement le bus. (Я рідко їжджу автобусом.)"], ["{a}ne … jamais{/a} (ніколи)", "0%", "Il ne fume jamais. (Він ніколи не палить.)"]],
      },
    },
    { type: "heading", text: "Place de l'adverbe", sub: true, trans: { en: "Position of the adverb", ar: "موضع الظرف", fa: "جایگاه قید", ti: "ቦታ ናይቲ ተወሳኺ ቃል", uk: "Місце прислівника" } },
    {
      type: "grid",
      headers: ["Temps", "Position", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Présent", "après le verbe", "Je travaille {a}souvent{/a} le soir."],
        ["Passé composé", "entre auxiliaire et participe", "J'ai {a}souvent{/a} voyagé."],
      ],
      transHeaders: {
        en: ["Tense", "Position", "Example"],
        ar: ["الزمن", "الموضع", "مثال"],
        fa: ["زمان", "جایگاه", "مثال"],
        ti: ["ጊዜ", "ቦታ", "ኣብነት"],
        uk: ["Час", "Місце", "Приклад"],
      },
      transRows: {
        en: [["Present", "after the verb", "Je travaille {a}souvent{/a} le soir. (I often work in the evening.)"], ["Passé composé", "between auxiliary and participle", "J'ai {a}souvent{/a} voyagé. (I have often travelled.)"]],
        ar: [["المضارع", "بعد الفعل", "Je travaille {a}souvent{/a} le soir. (غالباً أعمل مساءً.)"], ["الماضي المركّب", "بين الفعل المساعد واسم المفعول", "J'ai {a}souvent{/a} voyagé. (سافرت كثيراً.)"]],
        fa: [["حال", "بعد از فعل", "Je travaille {a}souvent{/a} le soir. (اغلب عصرها کار می‌کنم.)"], ["گذشته‌ی نقلی", "بین فعل کمکی و اسم مفعول", "J'ai {a}souvent{/a} voyagé. (اغلب سفر کرده‌ام.)"]],
        ti: [["ህሉው ግዜ", "ድሕሪ ግሲ", "Je travaille {a}souvent{/a} le soir. (ብዙሕ ግዜ ምሸት እሰርሕ።)"], ["ሕሉፍ ግዜ", "ኣብ መንጎ ሓጋዚ ግሲን ክፍሊ-ግሲን", "J'ai {a}souvent{/a} voyagé. (ብዙሕ ግዜ ተጓዒዘ።)"]],
        uk: [["Теперішній", "після дієслова", "Je travaille {a}souvent{/a} le soir. (Я часто працюю ввечері.)"], ["Passé composé", "між допоміжним дієсловом і дієприкметником", "J'ai {a}souvent{/a} voyagé. (Я часто подорожував.)"]],
      },
    },
    {
      type: "highlight",
      label: "Ne … jamais",
      items: [
        "{a}jamais{/a} s'utilise avec {a}ne{/a} pour la négation totale.",
        "Je {a}ne{/a} fais {a}jamais{/a} de sport.",
        "Elle {a}n'{/a}est {a}jamais{/a} en retard.",
      ],
      noBulletItems: [0],
      transLabel: { en: "Ne … jamais (never)", ar: "Ne … jamais (أبداً)", fa: "Ne … jamais (هرگز)", ti: "Ne … jamais (ፈጺሙ)", uk: "Ne … jamais (ніколи)" },
      transItems: {
        en: ["{a}jamais{/a} is used with {a}ne{/a} for total negation.", "Je {a}ne{/a} fais {a}jamais{/a} de sport. (I never do sport.)", "Elle {a}n'{/a}est {a}jamais{/a} en retard. (She is never late.)"],
        ar: ["{a}jamais{/a} يُستخدم مع {a}ne{/a} للنفي التام.", "Je {a}ne{/a} fais {a}jamais{/a} de sport. (لا أمارس الرياضة أبداً.)", "Elle {a}n'{/a}est {a}jamais{/a} en retard. (لا تتأخر أبداً.)"],
        fa: ["{a}jamais{/a} با {a}ne{/a} برای نفی کامل به کار می‌رود.", "Je {a}ne{/a} fais {a}jamais{/a} de sport. (هرگز ورزش نمی‌کنم.)", "Elle {a}n'{/a}est {a}jamais{/a} en retard. (هرگز دیر نمی‌کند.)"],
        ti: ["{a}jamais{/a} ምስ {a}ne{/a} ንምሉእ ኣሉታ ይጥቀም።", "Je {a}ne{/a} fais {a}jamais{/a} de sport. (ፈጺመ ስፖርት ኣይገብርን።)", "Elle {a}n'{/a}est {a}jamais{/a} en retard. (ፈጺማ ኣይትደንጒን።)"],
        uk: ["{a}jamais{/a} вживається з {a}ne{/a} для повного заперечення.", "Je {a}ne{/a} fais {a}jamais{/a} de sport. (Я ніколи не займаюся спортом.)", "Elle {a}n'{/a}est {a}jamais{/a} en retard. (Вона ніколи не запізнюється.)"],
      },
    },
    {
      type: "highlight",
      label: "Expressions de fréquence",
      items: [
        "{a}tous les jours{/a} / {a}chaque jour{/a} → every day",
        "{a}une fois par semaine{/a} → once a week",
        "{a}deux fois par mois{/a} → twice a month",
        "{a}de temps en temps{/a} → from time to time",
      ],
      transLabel: { en: "Frequency expressions", ar: "تعبيرات التكرار", fa: "عبارات تکرار", ti: "ናይ ድግግሞሽ መግለጺታት", uk: "Вирази частоти" },
      transItems: {
        en: ["{a}tous les jours{/a} / {a}chaque jour{/a} → every day", "{a}une fois par semaine{/a} → once a week", "{a}deux fois par mois{/a} → twice a month", "{a}de temps en temps{/a} → from time to time"],
        ar: ["{a}tous les jours{/a} / {a}chaque jour{/a} ← كل يوم", "{a}une fois par semaine{/a} ← مرة في الأسبوع", "{a}deux fois par mois{/a} ← مرتين في الشهر", "{a}de temps en temps{/a} ← من حين لآخر"],
        fa: ["{a}tous les jours{/a} / {a}chaque jour{/a} ← هر روز", "{a}une fois par semaine{/a} ← هفته‌ای یک بار", "{a}deux fois par mois{/a} ← ماهی دو بار", "{a}de temps en temps{/a} ← گاه‌به‌گاه"],
        ti: ["{a}tous les jours{/a} / {a}chaque jour{/a} → ኩሉ መዓልቲ", "{a}une fois par semaine{/a} → ኣብ ሰሙን ሓደ ግዜ", "{a}deux fois par mois{/a} → ኣብ ወርሒ ክልተ ግዜ", "{a}de temps en temps{/a} → ሓሓሊፉ"],
        uk: ["{a}tous les jours{/a} / {a}chaque jour{/a} → щодня", "{a}une fois par semaine{/a} → раз на тиждень", "{a}deux fois par mois{/a} → двічі на місяць", "{a}de temps en temps{/a} → час від часу"],
      },
    },
  ],
  exercises: [],
};
