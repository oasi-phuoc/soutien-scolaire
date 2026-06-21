import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L05: ConjLesson = {
  slug: "a2-conj-l05",
  code: "R6.3",
  level: "A2",
  title: "L'impératif",
  theory: [
    { type: "heading", text: "L'impératif présent", trans: { en: "The present imperative", ar: "صيغة الأمر الحاضرة", fa: "وجه امری حال", ti: "ናይ ሕጂ ትእዛዝ", uk: "Наказовий спосіб теперішнього часу" } },
    {
      type: "plain_list",
      items: [
        "L'impératif exprime un {a}ordre, un conseil, une interdiction ou une invitation{/a}.",
        "Il n'a que 3 personnes : {a}tu, nous, vous{/a} — sans pronom sujet.",
        "Formation : présent de l'indicatif, sans le pronom.",
      ],
      transItems: {
        en: [
          "The imperative expresses an {a}order, advice, a prohibition or an invitation{/a}.",
          "It has only 3 persons: {a}tu, nous, vous{/a} — without a subject pronoun.",
          "Formation: present indicative, without the pronoun.",
        ],
        ar: [
          "تعبّر صيغة الأمر عن {a}أمر أو نصيحة أو منع أو دعوة{/a}.",
          "لها 3 ضمائر فقط: {a}tu, nous, vous{/a} — بدون ضمير الفاعل.",
          "التكوين: زمن المضارع، بدون الضمير.",
        ],
        fa: [
          "وجه امری بیانگر {a}دستور، توصیه، منع یا دعوت{/a} است.",
          "فقط ۳ شخص دارد: {a}tu, nous, vous{/a} — بدون ضمیر فاعلی.",
          "ساخت: حال اخباری، بدون ضمیر.",
        ],
        ti: [
          "ትእዛዝ {a}ትእዛዝ፣ ምኽሪ፣ ክልከላ ወይ ዕድመ{/a} የመልክት።",
          "3 መድረኻት ጥራይ ኣለዎ፦ {a}tu, nous, vous{/a} — ብዘይ ናይ ባዕሉ ቃል።",
          "ኣፈጣጥራ፦ ናይ ሕጂ ኢንዲካቲቭ፣ ብዘይ ቃል።",
        ],
        uk: [
          "Наказовий спосіб виражає {a}наказ, пораду, заборону або запрошення{/a}.",
          "Він має лише 3 особи: {a}tu, nous, vous{/a} — без займенника-підмета.",
          "Утворення: теперішній час дійсного способу, без займенника.",
        ],
      },
    },
    {
      type: "grid",
      headers: ["Personne", "Verbes en -er (parler)", "Verbes en -ir 2e (finir)", "Verbes en -ir 3e (partir)"],
      transHeaders: {
        en: ["Person", "Verbs in -er (parler)", "Verbs in -ir 2nd (finir)", "Verbs in -ir 3rd (partir)"],
        ar: ["الضمير", "أفعال -er (parler)", "أفعال -ir المجموعة 2 (finir)", "أفعال -ir المجموعة 3 (partir)"],
        fa: ["شخص", "افعال -er (parler)", "افعال -ir گروه ۲ (finir)", "افعال -ir گروه ۳ (partir)"],
        ti: ["መድረኽ", "ግሲታት -er (parler)", "ግሲታት -ir 2ይ (finir)", "ግሲታት -ir 3ይ (partir)"],
        uk: ["Особа", "Дієслова на -er (parler)", "Дієслова на -ir 2-ї гр. (finir)", "Дієслова на -ir 3-ї гр. (partir)"],
      },
      boldFirstCol: true,
      rows: [
        ["tu", "{a}Parle !{/a} (pas de -s)", "{a}Finis !{/a}", "{a}Pars !{/a}"],
        ["nous", "{a}Parlons !{/a}", "{a}Finissons !{/a}", "{a}Partons !{/a}"],
        ["vous", "{a}Parlez !{/a}", "{a}Finissez !{/a}", "{a}Partez !{/a}"],
      ],
      transRows: {
        en: [["tu", "{a}Parle !{/a} (no -s)", "{a}Finis !{/a}", "{a}Pars !{/a}"], ["nous", "{a}Parlons !{/a}", "{a}Finissons !{/a}", "{a}Partons !{/a}"], ["vous", "{a}Parlez !{/a}", "{a}Finissez !{/a}", "{a}Partez !{/a}"]],
        ar: [["tu", "{a}Parle !{/a} (بدون -s)", "{a}Finis !{/a}", "{a}Pars !{/a}"], ["nous", "{a}Parlons !{/a}", "{a}Finissons !{/a}", "{a}Partons !{/a}"], ["vous", "{a}Parlez !{/a}", "{a}Finissez !{/a}", "{a}Partez !{/a}"]],
        fa: [["tu", "{a}Parle !{/a} (بدون -s)", "{a}Finis !{/a}", "{a}Pars !{/a}"], ["nous", "{a}Parlons !{/a}", "{a}Finissons !{/a}", "{a}Partons !{/a}"], ["vous", "{a}Parlez !{/a}", "{a}Finissez !{/a}", "{a}Partez !{/a}"]],
        ti: [["tu", "{a}Parle !{/a} (ብዘይ -s)", "{a}Finis !{/a}", "{a}Pars !{/a}"], ["nous", "{a}Parlons !{/a}", "{a}Finissons !{/a}", "{a}Partons !{/a}"], ["vous", "{a}Parlez !{/a}", "{a}Finissez !{/a}", "{a}Partez !{/a}"]],
        uk: [["tu", "{a}Parle !{/a} (без -s)", "{a}Finis !{/a}", "{a}Pars !{/a}"], ["nous", "{a}Parlons !{/a}", "{a}Finissons !{/a}", "{a}Partons !{/a}"], ["vous", "{a}Parlez !{/a}", "{a}Finissez !{/a}", "{a}Partez !{/a}"]],
      },
    },
    {
      type: "highlight",
      label: "Attention : verbes en -er → pas de -s à la 2e personne du singulier",
      items: [
        "Parle ! (pas Parles !)",
        "Mange ! (pas Manges !)",
        "Exception : va-s-y, manges-en (devant -y et -en, on garde le -s pour la liaison).",
      ],
      noBulletItems: [0],
      transLabel: { en: "Warning: -er verbs → no -s in the 2nd person singular", ar: "انتباه: أفعال -er ← بدون -s في المفرد المخاطب", fa: "توجه: افعال -er ← بدون -s در دوم‌شخص مفرد", ti: "ኣቓልቦ፦ ግሲታት -er ← ኣብ 2ይ ብዙሕነት ብዘይ -s", uk: "Увага: дієслова на -er → без -s у 2-й особі однини" },
      transItems: {
        en: ["Parle ! (not Parles !)", "Mange ! (not Manges !)", "Exception: va-s-y, manges-en (before -y and -en, the -s is kept for liaison)."],
        ar: ["Parle ! (وليس Parles !)", "Mange ! (وليس Manges !)", "استثناء: va-s-y, manges-en (قبل -y و -en نحتفظ بـ -s للوصل)."],
        fa: ["Parle ! (نه Parles !)", "Mange ! (نه Manges !)", "استثنا: va-s-y, manges-en (پیش از -y و -en، حرف -s برای پیوند حفظ می‌شود)."],
        ti: ["Parle ! (Parles ! ኣይኮነን)", "Mange ! (Manges ! ኣይኮነን)", "ፍሉይ፦ va-s-y, manges-en (ቅድሚ -y ከምኡውን -en፣ -s ንምትእስሳር ይዕቀብ)።"],
        uk: ["Parle ! (не Parles !)", "Mange ! (не Manges !)", "Виняток: va-s-y, manges-en (перед -y та -en зберігається -s для зв'язку)."],
      },
    },
    { type: "heading", text: "Impératifs irréguliers", sub: true, accent: true, trans: { en: "Irregular imperatives", ar: "صيغ الأمر الشاذة", fa: "وجه امری بی‌قاعده", ti: "ዘይስሩዓት ትእዛዛት", uk: "Неправильні форми наказового способу" } },
    {
      type: "grid",
      headers: ["Infinitif", "tu", "nous", "vous"],
      transHeaders: {
        en: ["Infinitive", "tu", "nous", "vous"],
        ar: ["المصدر", "tu", "nous", "vous"],
        fa: ["مصدر", "tu", "nous", "vous"],
        ti: ["መሰረታዊ ግሲ", "tu", "nous", "vous"],
        uk: ["Інфінітив", "tu", "nous", "vous"],
      },
      boldFirstCol: true,
      rows: [
        ["être", "{a}sois{/a}", "{a}soyons{/a}", "{a}soyez{/a}"],
        ["avoir", "{a}aie{/a}", "{a}ayons{/a}", "{a}ayez{/a}"],
        ["aller", "{a}va{/a}", "{a}allons{/a}", "{a}allez{/a}"],
        ["savoir", "{a}sache{/a}", "{a}sachons{/a}", "{a}sachez{/a}"],
        ["vouloir", "{a}veuille{/a}", "—", "{a}veuillez{/a} (poli)"],
      ],
      transRows: {
        en: [["être", "{a}sois{/a}", "{a}soyons{/a}", "{a}soyez{/a}"], ["avoir", "{a}aie{/a}", "{a}ayons{/a}", "{a}ayez{/a}"], ["aller", "{a}va{/a}", "{a}allons{/a}", "{a}allez{/a}"], ["savoir", "{a}sache{/a}", "{a}sachons{/a}", "{a}sachez{/a}"], ["vouloir", "{a}veuille{/a}", "—", "{a}veuillez{/a} (polite)"]],
        ar: [["être", "{a}sois{/a}", "{a}soyons{/a}", "{a}soyez{/a}"], ["avoir", "{a}aie{/a}", "{a}ayons{/a}", "{a}ayez{/a}"], ["aller", "{a}va{/a}", "{a}allons{/a}", "{a}allez{/a}"], ["savoir", "{a}sache{/a}", "{a}sachons{/a}", "{a}sachez{/a}"], ["vouloir", "{a}veuille{/a}", "—", "{a}veuillez{/a} (مهذّب)"]],
        fa: [["être", "{a}sois{/a}", "{a}soyons{/a}", "{a}soyez{/a}"], ["avoir", "{a}aie{/a}", "{a}ayons{/a}", "{a}ayez{/a}"], ["aller", "{a}va{/a}", "{a}allons{/a}", "{a}allez{/a}"], ["savoir", "{a}sache{/a}", "{a}sachons{/a}", "{a}sachez{/a}"], ["vouloir", "{a}veuille{/a}", "—", "{a}veuillez{/a} (مؤدبانه)"]],
        ti: [["être", "{a}sois{/a}", "{a}soyons{/a}", "{a}soyez{/a}"], ["avoir", "{a}aie{/a}", "{a}ayons{/a}", "{a}ayez{/a}"], ["aller", "{a}va{/a}", "{a}allons{/a}", "{a}allez{/a}"], ["savoir", "{a}sache{/a}", "{a}sachons{/a}", "{a}sachez{/a}"], ["vouloir", "{a}veuille{/a}", "—", "{a}veuillez{/a} (ኣኽብሮታዊ)"]],
        uk: [["être", "{a}sois{/a}", "{a}soyons{/a}", "{a}soyez{/a}"], ["avoir", "{a}aie{/a}", "{a}ayons{/a}", "{a}ayez{/a}"], ["aller", "{a}va{/a}", "{a}allons{/a}", "{a}allez{/a}"], ["savoir", "{a}sache{/a}", "{a}sachons{/a}", "{a}sachez{/a}"], ["vouloir", "{a}veuille{/a}", "—", "{a}veuillez{/a} (ввічливо)"]],
      },
    },
    { type: "heading", text: "Forme négative", sub: true, accent: true, trans: { en: "Negative form", ar: "صيغة النفي", fa: "شکل منفی", ti: "ኣሉታዊ ቅርጺ", uk: "Заперечна форма" } },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      transHeaders: {
        en: ["Affirmative", "Negative"],
        ar: ["إثبات", "نفي"],
        fa: ["مثبت", "منفی"],
        ti: ["ኣወንታዊ", "ኣሉታዊ"],
        uk: ["Стверджувальна", "Заперечна"],
      },
      rows: [
        ["Parle !", "{a}Ne{/a} parle {a}pas{/a} !"],
        ["Mangez !", "{a}Ne{/a} mangez {a}pas{/a} !"],
        ["Soyons patients !", "{a}Ne{/a} soyons {a}pas{/a} impatients !"],
      ],
      transRows: {
        en: [["Parle !", "{a}Ne{/a} parle {a}pas{/a} !"], ["Mangez !", "{a}Ne{/a} mangez {a}pas{/a} !"], ["Soyons patients !", "{a}Ne{/a} soyons {a}pas{/a} impatients !"]],
        ar: [["Parle !", "{a}Ne{/a} parle {a}pas{/a} !"], ["Mangez !", "{a}Ne{/a} mangez {a}pas{/a} !"], ["Soyons patients !", "{a}Ne{/a} soyons {a}pas{/a} impatients !"]],
        fa: [["Parle !", "{a}Ne{/a} parle {a}pas{/a} !"], ["Mangez !", "{a}Ne{/a} mangez {a}pas{/a} !"], ["Soyons patients !", "{a}Ne{/a} soyons {a}pas{/a} impatients !"]],
        ti: [["Parle !", "{a}Ne{/a} parle {a}pas{/a} !"], ["Mangez !", "{a}Ne{/a} mangez {a}pas{/a} !"], ["Soyons patients !", "{a}Ne{/a} soyons {a}pas{/a} impatients !"]],
        uk: [["Parle !", "{a}Ne{/a} parle {a}pas{/a} !"], ["Mangez !", "{a}Ne{/a} mangez {a}pas{/a} !"], ["Soyons patients !", "{a}Ne{/a} soyons {a}pas{/a} impatients !"]],
      },
    },
    { type: "heading", text: "Impératif + pronoms", sub: true, accent: true, trans: { en: "Imperative + pronouns", ar: "صيغة الأمر + الضمائر", fa: "وجه امری + ضمایر", ti: "ትእዛዝ + ቃላት", uk: "Наказовий спосіб + займенники" } },
    {
      type: "grid",
      headers: ["Structure", "Exemple"],
      transHeaders: {
        en: ["Structure", "Example"],
        ar: ["البنية", "مثال"],
        fa: ["ساختار", "مثال"],
        ti: ["ቅርጺ", "ኣብነት"],
        uk: ["Структура", "Приклад"],
      },
      boldFirstCol: true,
      rows: [
        ["Affirmatif : verbe + pronom (après)", "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !"],
        ["Négatif : pronom avant le verbe", "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !"],
      ],
      transRows: {
        en: [["Affirmative: verb + pronoun (after)", "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !"], ["Negative: pronoun before the verb", "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !"]],
        ar: [["إثبات: الفعل + الضمير (بعده)", "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !"], ["نفي: الضمير قبل الفعل", "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !"]],
        fa: [["مثبت: فعل + ضمیر (بعد از فعل)", "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !"], ["منفی: ضمیر پیش از فعل", "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !"]],
        ti: [["ኣወንታዊ፦ ግሲ + ቃል (ድሕሪኡ)", "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !"], ["ኣሉታዊ፦ ቃል ቅድሚ ግሲ", "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !"]],
        uk: [["Стверджувальна: дієслово + займенник (після)", "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !"], ["Заперечна: займенник перед дієсловом", "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !"]],
      },
    },
  ],
  exercises: [],
};
