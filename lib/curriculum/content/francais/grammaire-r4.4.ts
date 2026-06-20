import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L29: ConjLesson = {
  slug: "a1-conj-l29",
  code: "R5.2",
  level: "A1",
  title: "Passé composé avec avoir",
  theory: [
    { type: "heading", text: "Le passé composé avec avoir", trans: { en: "The passé composé with «avoir»", ar: "الماضي المركّب مع «avoir»", fa: "گذشته‌ی نقلی با «avoir»", ti: "ሕሉፍ ግዜ ምስ «avoir»", uk: "Passé composé з «avoir»" } },
    {
      type: "plain_list",
      items: [
        "Le passé composé exprime une action {a}terminée dans le passé{/a}.",
        "Structure : {a}avoir{/a} (présent) + {a}participe passé{/a}",
      ],
      transItems: {
        en: ["The passé composé expresses an action {a}completed in the past{/a}.", "Structure: {a}avoir{/a} (present) + {a}past participle{/a}"],
        ar: ["الماضي المركّب يعبّر عن فعل {a}منتهٍ في الماضي{/a}.", "البنية: {a}avoir{/a} (المضارع) + {a}اسم المفعول{/a}"],
        fa: ["گذشته‌ی نقلی بیانگر عملی {a}پایان‌یافته در گذشته{/a} است.", "ساختار: {a}avoir{/a} (حال) + {a}اسم مفعول{/a}"],
        ti: ["ሕሉፍ ግዜ {a}ኣብ ሕሉፍ ዝተወድአ{/a} ተግባር የመልክት።", "ቅርጺ፦ {a}avoir{/a} (ህሉው) + {a}ክፍሊ-ግሲ{/a}"],
        uk: ["Passé composé виражає дію, {a}завершену в минулому{/a}.", "Структура: {a}avoir{/a} (теперішній) + {a}дієприкметник минулого часу{/a}"],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "avoir (auxiliaire)",
          accentForms: true,
          rows: [
            { pronoun: "j'", form: "ai" },
            { pronoun: "tu", form: "as" },
            { pronoun: "il / elle / on", form: "a" },
            { pronoun: "nous", form: "avons" },
            { pronoun: "vous", form: "avez" },
            { pronoun: "ils / elles", form: "ont" },
          ],
        },
      ],
    },
    { type: "heading", text: "Formation du participe passé", sub: true, accent: true, trans: { en: "Forming the past participle", ar: "تكوين اسم المفعول", fa: "ساختن اسم مفعول", ti: "ኣፈጣጥራ ክፍሊ-ግሲ", uk: "Утворення дієприкметника минулого часу" } },
    {
      type: "grid",
      headers: ["Infinitif", "Terminaison", "Participe passé", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["verbes en -er", "-er → {a}-é{/a}", "parler → {a}parlé{/a}", "J'ai parlé."],
        ["verbes en -ir (2e groupe)", "-ir → {a}-i{/a}", "finir → {a}fini{/a}", "Tu as fini."],
        ["verbes en -re", "-re → {a}-u{/a}", "vendre → {a}vendu{/a}", "Il a vendu."],
      ],
      transHeaders: {
        en: ["Infinitive", "Ending", "Past participle", "Example"],
        ar: ["المصدر", "النهاية", "اسم المفعول", "مثال"],
        fa: ["مصدر", "پایانه", "اسم مفعول", "مثال"],
        ti: ["መሰረታዊ ግሲ", "መወዳእታ", "ክፍሊ-ግሲ", "ኣብነት"],
        uk: ["Інфінітив", "Закінчення", "Дієприкметник", "Приклад"],
      },
      transRows: {
        en: [["verbs in -er", "-er → {a}-é{/a}", "parler → {a}parlé{/a}", "J'ai parlé. (I spoke.)"], ["verbs in -ir (2nd group)", "-ir → {a}-i{/a}", "finir → {a}fini{/a}", "Tu as fini. (You finished.)"], ["verbs in -re", "-re → {a}-u{/a}", "vendre → {a}vendu{/a}", "Il a vendu. (He sold.)"]],
        ar: [["الأفعال المنتهية بـ -er", "-er ← {a}-é{/a}", "parler ← {a}parlé{/a}", "J'ai parlé. (تكلمتُ.)"], ["الأفعال المنتهية بـ -ir (المجموعة 2)", "-ir ← {a}-i{/a}", "finir ← {a}fini{/a}", "Tu as fini. (أنهيتَ.)"], ["الأفعال المنتهية بـ -re", "-re ← {a}-u{/a}", "vendre ← {a}vendu{/a}", "Il a vendu. (باع.)"]],
        fa: [["افعال -er", "-er ← {a}-é{/a}", "parler ← {a}parlé{/a}", "J'ai parlé. (صحبت کردم.)"], ["افعال -ir (گروه دوم)", "-ir ← {a}-i{/a}", "finir ← {a}fini{/a}", "Tu as fini. (تمام کردی.)"], ["افعال -re", "-re ← {a}-u{/a}", "vendre ← {a}vendu{/a}", "Il a vendu. (فروخت.)"]],
        ti: [["ግሲታት ብ-er", "-er → {a}-é{/a}", "parler → {a}parlé{/a}", "J'ai parlé. (ተዛሪበ።)"], ["ግሲታት ብ-ir (2ይ ጉጅለ)", "-ir → {a}-i{/a}", "finir → {a}fini{/a}", "Tu as fini. (ወዲእካ።)"], ["ግሲታት ብ-re", "-re → {a}-u{/a}", "vendre → {a}vendu{/a}", "Il a vendu. (ሸይጡ።)"]],
        uk: [["дієслова на -er", "-er → {a}-é{/a}", "parler → {a}parlé{/a}", "J'ai parlé. (Я говорив.)"], ["дієслова на -ir (2-га група)", "-ir → {a}-i{/a}", "finir → {a}fini{/a}", "Tu as fini. (Ти закінчив.)"], ["дієслова на -re", "-re → {a}-u{/a}", "vendre → {a}vendu{/a}", "Il a vendu. (Він продав.)"]],
      },
    },
    {
      type: "highlight",
      label: "Participes passés irréguliers à mémoriser",
      items: [
        "avoir → {a}eu{/a}    |    être → {a}été{/a}    |    faire → {a}fait{/a}",
        "dire → {a}dit{/a}    |    écrire → {a}écrit{/a}    |    lire → {a}lu{/a}",
        "prendre → {a}pris{/a}    |    voir → {a}vu{/a}    |    vouloir → {a}voulu{/a}",
        "pouvoir → {a}pu{/a}    |    savoir → {a}su{/a}    |    mettre → {a}mis{/a}",
      ],
      transLabel: { en: "Irregular past participles to memorize", ar: "أسماء مفعول شاذة يجب حفظها", fa: "اسم‌های مفعول بی‌قاعده برای حفظ", ti: "ዘይስሩዓት ክፍሊ-ግሲታት ንምሕፋዝ", uk: "Неправильні дієприкметники для запам'ятовування" },
      transItems: {
        en: ["avoir → {a}eu{/a}    |    être → {a}été{/a}    |    faire → {a}fait{/a}", "dire → {a}dit{/a}    |    écrire → {a}écrit{/a}    |    lire → {a}lu{/a}", "prendre → {a}pris{/a}    |    voir → {a}vu{/a}    |    vouloir → {a}voulu{/a}", "pouvoir → {a}pu{/a}    |    savoir → {a}su{/a}    |    mettre → {a}mis{/a}"],
        ar: ["avoir → {a}eu{/a}    |    être → {a}été{/a}    |    faire → {a}fait{/a}", "dire → {a}dit{/a}    |    écrire → {a}écrit{/a}    |    lire → {a}lu{/a}", "prendre → {a}pris{/a}    |    voir → {a}vu{/a}    |    vouloir → {a}voulu{/a}", "pouvoir → {a}pu{/a}    |    savoir → {a}su{/a}    |    mettre → {a}mis{/a}"],
        fa: ["avoir → {a}eu{/a}    |    être → {a}été{/a}    |    faire → {a}fait{/a}", "dire → {a}dit{/a}    |    écrire → {a}écrit{/a}    |    lire → {a}lu{/a}", "prendre → {a}pris{/a}    |    voir → {a}vu{/a}    |    vouloir → {a}voulu{/a}", "pouvoir → {a}pu{/a}    |    savoir → {a}su{/a}    |    mettre → {a}mis{/a}"],
        ti: ["avoir → {a}eu{/a}    |    être → {a}été{/a}    |    faire → {a}fait{/a}", "dire → {a}dit{/a}    |    écrire → {a}écrit{/a}    |    lire → {a}lu{/a}", "prendre → {a}pris{/a}    |    voir → {a}vu{/a}    |    vouloir → {a}voulu{/a}", "pouvoir → {a}pu{/a}    |    savoir → {a}su{/a}    |    mettre → {a}mis{/a}"],
        uk: ["avoir → {a}eu{/a}    |    être → {a}été{/a}    |    faire → {a}fait{/a}", "dire → {a}dit{/a}    |    écrire → {a}écrit{/a}    |    lire → {a}lu{/a}", "prendre → {a}pris{/a}    |    voir → {a}vu{/a}    |    vouloir → {a}voulu{/a}", "pouvoir → {a}pu{/a}    |    savoir → {a}su{/a}    |    mettre → {a}mis{/a}"],
      },
    },
    { type: "heading", text: "Forme négative", sub: true, accent: true, trans: { en: "Negative form", ar: "صيغة النفي", fa: "صورت منفی", ti: "ኣሉታዊ ቅርጺ", uk: "Заперечна форма" } },
    {
      type: "plain_list",
      items: [
        "{a}ne … pas{/a} encadre l'auxiliaire {a}avoir{/a}.",
      ],
      transItems: {
        en: ["{a}ne … pas{/a} surrounds the auxiliary {a}avoir{/a}."],
        ar: ["{a}ne … pas{/a} يحيط بالفعل المساعد {a}avoir{/a}."],
        fa: ["{a}ne … pas{/a} فعل کمکی {a}avoir{/a} را احاطه می‌کند."],
        ti: ["{a}ne … pas{/a} ነቲ ሓጋዚ ግሲ {a}avoir{/a} የጠቓልሎ።"],
        uk: ["{a}ne … pas{/a} обрамлює допоміжне дієслово {a}avoir{/a}."],
      },
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["J'ai mangé.", "Je {a}n'{/a}ai {a}pas{/a} mangé."],
        ["Tu as fini.", "Tu {a}n'{/a}as {a}pas{/a} fini."],
        ["Il a vu.", "Il {a}n'{/a}a {a}pas{/a} vu."],
      ],
      transHeaders: {
        en: ["Affirmative", "Negative"],
        ar: ["مثبت", "منفي"],
        fa: ["مثبت", "منفی"],
        ti: ["ኣረጋጋጺ", "ኣሉታዊ"],
        uk: ["Стверджувальний", "Заперечний"],
      },
      transRows: {
        en: [["J'ai mangé. (I ate.)", "Je {a}n'{/a}ai {a}pas{/a} mangé. (I didn't eat.)"], ["Tu as fini. (You finished.)", "Tu {a}n'{/a}as {a}pas{/a} fini. (You didn't finish.)"], ["Il a vu. (He saw.)", "Il {a}n'{/a}a {a}pas{/a} vu. (He didn't see.)"]],
        ar: [["J'ai mangé. (أكلتُ.)", "Je {a}n'{/a}ai {a}pas{/a} mangé. (لم آكل.)"], ["Tu as fini. (أنهيتَ.)", "Tu {a}n'{/a}as {a}pas{/a} fini. (لم تنتهِ.)"], ["Il a vu. (رأى.)", "Il {a}n'{/a}a {a}pas{/a} vu. (لم يرَ.)"]],
        fa: [["J'ai mangé. (غذا خوردم.)", "Je {a}n'{/a}ai {a}pas{/a} mangé. (غذا نخوردم.)"], ["Tu as fini. (تمام کردی.)", "Tu {a}n'{/a}as {a}pas{/a} fini. (تمام نکردی.)"], ["Il a vu. (دید.)", "Il {a}n'{/a}a {a}pas{/a} vu. (ندید.)"]],
        ti: [["J'ai mangé. (በሊዐ።)", "Je {a}n'{/a}ai {a}pas{/a} mangé. (ኣይበላዕኩን።)"], ["Tu as fini. (ወዲእካ።)", "Tu {a}n'{/a}as {a}pas{/a} fini. (ኣይወዳእካን።)"], ["Il a vu. (ርእዩ።)", "Il {a}n'{/a}a {a}pas{/a} vu. (ኣይረኣየን።)"]],
        uk: [["J'ai mangé. (Я поїв.)", "Je {a}n'{/a}ai {a}pas{/a} mangé. (Я не їв.)"], ["Tu as fini. (Ти закінчив.)", "Tu {a}n'{/a}as {a}pas{/a} fini. (Ти не закінчив.)"], ["Il a vu. (Він побачив.)", "Il {a}n'{/a}a {a}pas{/a} vu. (Він не бачив.)"]],
      },
    },
    {
      type: "highlight",
      label: "Accord du participe passé avec avoir",
      items: [
        "Avec avoir, le participe passé {a}ne s'accorde PAS{/a} avec le sujet.",
        "Exception : si le COD est placé AVANT le verbe → accord obligatoire.",
        "Exemple : La lettre qu'il a écrite. (que = COD féminin → écrite)",
      ],
      noBulletItems: [0],
      transLabel: { en: "Agreement of the past participle with «avoir»", ar: "مطابقة اسم المفعول مع «avoir»", fa: "مطابقت اسم مفعول با «avoir»", ti: "ምስምማዕ ክፍሊ-ግሲ ምስ «avoir»", uk: "Узгодження дієприкметника з «avoir»" },
      transItems: {
        en: ["With avoir, the past participle {a}does NOT agree{/a} with the subject.", "Exception: if the direct object is placed BEFORE the verb → agreement is required.", "Example: La lettre qu'il a écrite. (que = feminine direct object → écrite)"],
        ar: ["مع avoir، اسم المفعول {a}لا يطابق{/a} الفاعل.", "استثناء: إذا وُضع المفعول به المباشر قبل الفعل ← المطابقة إلزامية.", "مثال: La lettre qu'il a écrite. (que = مفعول به مؤنث ← écrite)"],
        fa: ["با avoir، اسم مفعول با فاعل {a}مطابقت نمی‌کند{/a}.", "استثنا: اگر مفعول مستقیم پیش از فعل بیاید ← مطابقت الزامی است.", "مثال: La lettre qu'il a écrite. (que = مفعول مستقیم مؤنث ← écrite)"],
        ti: ["ምስ avoir፣ እቲ ክፍሊ-ግሲ ምስ ርእሲ {a}ኣይሰማማዕን{/a}።", "ብዘይካ፦ እቲ ቀጥታዊ ተሳላፊ ቅድሚ ግሲ ምስ ዝቕመጥ → ምስምማዕ ግዴታ እዩ።", "ኣብነት፦ La lettre qu'il a écrite. (que = ኣንስታይ ቀጥታዊ ተሳላፊ → écrite)"],
        uk: ["З avoir дієприкметник {a}НЕ узгоджується{/a} з підметом.", "Виняток: якщо прямий додаток стоїть ПЕРЕД дієсловом → узгодження обов'язкове.", "Приклад: La lettre qu'il a écrite. (que = прямий додаток жіночого роду → écrite)"],
      },
    },
  ],
  exercises: [],
};
