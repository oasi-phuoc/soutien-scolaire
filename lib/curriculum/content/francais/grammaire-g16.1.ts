import type { GrammarLesson } from "../../grammar-data";

/** G16.1 — L'impératif */
export const A1_GR_IMPERATIF: GrammarLesson = {
  slug: "a1-gr-imperatif",
  code: "G4.37",
  level: "A1",
  title: "L'impératif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Ordre ou consigne : Ne faites pas de bruit ! Éteignez vos portables !",
        "Conseil : Restons ici, c'est mieux !",
        "Souhait : Passe une bonne soirée !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "text",
      items: [
        "Trois personnes seulement : {a}tu, nous, vous{/a} ; pas de pronom sujet. → Entre ! Entrons ! Entrez !",
        "Verbes en {a}-er{/a} : pas de {a}-s{/a} à la 2e personne du singulier, sauf devant {a}en{/a} ou {a}y{/a}. → Réserve des places ! ; Réserves-en trois ! ; Va à l'opéra ! ; Vas-y !",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: [
        "Verbe",
        "tu",
        "nous",
        "vous",
      ],
      boldFirstCol: true,
      rows: [
        [
          "être",
          "sois",
          "soyons",
          "soyez",
        ],
        [
          "avoir",
          "aie",
          "ayons",
          "ayez",
        ],
        [
          "savoir",
          "sache",
          "sachons",
          "sachez",
        ],
      ],
    },
    {
      type: "note",
      text: "{a}Vouloir{/a} : forme de politesse {a}Veuillez{/a}. → Veuillez vous asseoir. ; Veuillez agréer…",
    },
    {
      type: "note",
      text: "À l'écrit, souvent un point d'exclamation.",
    },
    {
      type: "heading",
      text: "Impératif et pronoms",
    },
    {
      type: "text",
      items: [
        "Affirmatif : pronoms après le verbe, avec trait d'union ; {a}moi / toi{/a} (pas me / te). → Regarde-moi ! ; Assieds-toi ! ; Appelez-les !",
        "Négatif : pronoms devant le verbe. → Ne me regarde pas ! ; Ne t'assieds pas ! ; Ne les appelez pas !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Intonation",
    },
    {
      type: "text",
      items: [
        "L'intonation varie selon l'ordre, la consigne, le conseil ou le souhait.",
      ],
      noBulletItems: [
        0,
      ],
    },
    {
      type: "heading",
      text: "Entraînement conjugaison",
    },
    {
      type: "heading",
      text: "L'impératif présent",
      trans: {
        en: "The present imperative",
        ar: "صيغة الأمر الحاضرة",
        fa: "وجه امری حال",
        ti: "ናይ ሕጂ ትእዛዝ",
        uk: "Наказовий спосіб теперішнього часу",
      },
    },
    {
      type: "text",
      text: "L'impératif exprime un {a}ordre, un conseil, une interdiction ou une invitation{/a}.",
      transText: {
        en: "The imperative expresses an {a}order, advice, a prohibition or an invitation{/a}.",
        ar: "تعبّر صيغة الأمر عن {a}أمر أو نصيحة أو منع أو دعوة{/a}.",
        fa: "وجه امری بیانگر {a}دستور، توصیه، منع یا دعوت{/a} است.",
        ti: "ትእዛዝ {a}ትእዛዝ፣ ምኽሪ፣ ክልከላ ወይ ዕድመ{/a} የመልክት።",
        uk: "Наказовий спосіб виражає {a}наказ, пораду, заборону або запрошення{/a}.",
      },
      items: [
        "Il n'a que 3 personnes : {a}tu, nous, vous{/a} — sans pronom sujet.",
        "Formation : présent de l'indicatif, sans le pronom.",
      ],
      transItems: {
        en: [
          "It has only 3 persons: {a}tu, nous, vous{/a} — without a subject pronoun.",
          "Formation: present indicative, without the pronoun.",
        ],
        ar: [
          "لها 3 ضمائر فقط: {a}tu, nous, vous{/a} — بدون ضمير الفاعل.",
          "التكوين: زمن المضارع، بدون الضمير.",
        ],
        fa: [
          "فقط ۳ شخص دارد: {a}tu, nous, vous{/a} — بدون ضمیر فاعلی.",
          "ساخت: حال اخباری، بدون ضمیر.",
        ],
        ti: [
          "3 መድረኻት ጥራይ ኣለዎ፦ {a}tu, nous, vous{/a} — ብዘይ ናይ ባዕሉ ቃል።",
          "ኣፈጣጥራ፦ ናይ ሕጂ ኢንዲካቲቭ፣ ብዘይ ቃል።",
        ],
        uk: [
          "Він має лише 3 особи: {a}tu, nous, vous{/a} — без займенника-підмета.",
          "Утворення: теперішній час дійсного способу, без займенника.",
        ],
      },
    },
    {
      type: "grid",
      headers: [
        "Personne",
        "Verbes en -er (parler)",
        "Verbes en -ir 2e (finir)",
        "Verbes en -ir 3e (partir)",
      ],
      transHeaders: {
        en: [
          "Person",
          "Verbs in -er (parler)",
          "Verbs in -ir 2nd (finir)",
          "Verbs in -ir 3rd (partir)",
        ],
        ar: [
          "الضمير",
          "أفعال -er (parler)",
          "أفعال -ir المجموعة 2 (finir)",
          "أفعال -ir المجموعة 3 (partir)",
        ],
        fa: [
          "شخص",
          "افعال -er (parler)",
          "افعال -ir گروه ۲ (finir)",
          "افعال -ir گروه ۳ (partir)",
        ],
        ti: [
          "መድረኽ",
          "ግሲታት -er (parler)",
          "ግሲታት -ir 2ይ (finir)",
          "ግሲታት -ir 3ይ (partir)",
        ],
        uk: [
          "Особа",
          "Дієслова на -er (parler)",
          "Дієслова на -ir 2-ї гр. (finir)",
          "Дієслова на -ir 3-ї гр. (partir)",
        ],
      },
      boldFirstCol: true,
      rows: [
        [
          "tu",
          "{a}Parle !{/a} (pas de -s)",
          "{a}Finis !{/a}",
          "{a}Pars !{/a}",
        ],
        [
          "nous",
          "{a}Parlons !{/a}",
          "{a}Finissons !{/a}",
          "{a}Partons !{/a}",
        ],
        [
          "vous",
          "{a}Parlez !{/a}",
          "{a}Finissez !{/a}",
          "{a}Partez !{/a}",
        ],
      ],
      transRows: {
        en: [
          [
            "tu",
            "{a}Parle !{/a} (no -s)",
            "{a}Finis !{/a}",
            "{a}Pars !{/a}",
          ],
          [
            "nous",
            "{a}Parlons !{/a}",
            "{a}Finissons !{/a}",
            "{a}Partons !{/a}",
          ],
          [
            "vous",
            "{a}Parlez !{/a}",
            "{a}Finissez !{/a}",
            "{a}Partez !{/a}",
          ],
        ],
        ar: [
          [
            "tu",
            "{a}Parle !{/a} (بدون -s)",
            "{a}Finis !{/a}",
            "{a}Pars !{/a}",
          ],
          [
            "nous",
            "{a}Parlons !{/a}",
            "{a}Finissons !{/a}",
            "{a}Partons !{/a}",
          ],
          [
            "vous",
            "{a}Parlez !{/a}",
            "{a}Finissez !{/a}",
            "{a}Partez !{/a}",
          ],
        ],
        fa: [
          [
            "tu",
            "{a}Parle !{/a} (بدون -s)",
            "{a}Finis !{/a}",
            "{a}Pars !{/a}",
          ],
          [
            "nous",
            "{a}Parlons !{/a}",
            "{a}Finissons !{/a}",
            "{a}Partons !{/a}",
          ],
          [
            "vous",
            "{a}Parlez !{/a}",
            "{a}Finissez !{/a}",
            "{a}Partez !{/a}",
          ],
        ],
        ti: [
          [
            "tu",
            "{a}Parle !{/a} (ብዘይ -s)",
            "{a}Finis !{/a}",
            "{a}Pars !{/a}",
          ],
          [
            "nous",
            "{a}Parlons !{/a}",
            "{a}Finissons !{/a}",
            "{a}Partons !{/a}",
          ],
          [
            "vous",
            "{a}Parlez !{/a}",
            "{a}Finissez !{/a}",
            "{a}Partez !{/a}",
          ],
        ],
        uk: [
          [
            "tu",
            "{a}Parle !{/a} (без -s)",
            "{a}Finis !{/a}",
            "{a}Pars !{/a}",
          ],
          [
            "nous",
            "{a}Parlons !{/a}",
            "{a}Finissons !{/a}",
            "{a}Partons !{/a}",
          ],
          [
            "vous",
            "{a}Parlez !{/a}",
            "{a}Finissez !{/a}",
            "{a}Partez !{/a}",
          ],
        ],
      },
    },
    {
      type: "text",
      label: "Attention : verbes en -er → pas de -s à la 2e personne du singulier",
      items: [
        "Parle ! (pas Parles !)",
        "Mange ! (pas Manges !)",
        "Exception : va-s-y, manges-en (devant -y et -en, on garde le -s pour la liaison).",
      ],
      noBulletItems: [
        0,
      ],
      transLabel: {
        en: "Warning: -er verbs → no -s in the 2nd person singular",
        ar: "انتباه: أفعال -er ← بدون -s في المفرد المخاطب",
        fa: "توجه: افعال -er ← بدون -s در دوم‌شخص مفرد",
        ti: "ኣቓልቦ፦ ግሲታት -er ← ኣብ 2ይ ብዙሕነት ብዘይ -s",
        uk: "Увага: дієслова на -er → без -s у 2-й особі однини",
      },
      transItems: {
        en: [
          "Parle ! (not Parles !)",
          "Mange ! (not Manges !)",
          "Exception: va-s-y, manges-en (before -y and -en, the -s is kept for liaison).",
        ],
        ar: [
          "Parle ! (وليس Parles !)",
          "Mange ! (وليس Manges !)",
          "استثناء: va-s-y, manges-en (قبل -y و -en نحتفظ بـ -s للوصل).",
        ],
        fa: [
          "Parle ! (نه Parles !)",
          "Mange ! (نه Manges !)",
          "استثنا: va-s-y, manges-en (پیش از -y و -en، حرف -s برای پیوند حفظ می‌شود).",
        ],
        ti: [
          "Parle ! (Parles ! ኣይኮነን)",
          "Mange ! (Manges ! ኣይኮነን)",
          "ፍሉይ፦ va-s-y, manges-en (ቅድሚ -y ከምኡውን -en፣ -s ንምትእስሳር ይዕቀብ)።",
        ],
        uk: [
          "Parle ! (не Parles !)",
          "Mange ! (не Manges !)",
          "Виняток: va-s-y, manges-en (перед -y та -en зберігається -s для зв'язку).",
        ],
      },
    },
    {
      type: "heading",
      text: "Impératifs irréguliers",
      sub: true,
      accent: true,
      trans: {
        en: "Irregular imperatives",
        ar: "صيغ الأمر الشاذة",
        fa: "وجه امری بی‌قاعده",
        ti: "ዘይስሩዓት ትእዛዛት",
        uk: "Неправильні форми наказового способу",
      },
    },
    {
      type: "grid",
      headers: [
        "Infinitif",
        "tu",
        "nous",
        "vous",
      ],
      transHeaders: {
        en: [
          "Infinitive",
          "tu",
          "nous",
          "vous",
        ],
        ar: [
          "المصدر",
          "tu",
          "nous",
          "vous",
        ],
        fa: [
          "مصدر",
          "tu",
          "nous",
          "vous",
        ],
        ti: [
          "መሰረታዊ ግሲ",
          "tu",
          "nous",
          "vous",
        ],
        uk: [
          "Інфінітив",
          "tu",
          "nous",
          "vous",
        ],
      },
      boldFirstCol: true,
      rows: [
        [
          "être",
          "{a}sois{/a}",
          "{a}soyons{/a}",
          "{a}soyez{/a}",
        ],
        [
          "avoir",
          "{a}aie{/a}",
          "{a}ayons{/a}",
          "{a}ayez{/a}",
        ],
        [
          "aller",
          "{a}va{/a}",
          "{a}allons{/a}",
          "{a}allez{/a}",
        ],
        [
          "savoir",
          "{a}sache{/a}",
          "{a}sachons{/a}",
          "{a}sachez{/a}",
        ],
        [
          "vouloir",
          "{a}veuille{/a}",
          "—",
          "{a}veuillez{/a} (poli)",
        ],
      ],
      transRows: {
        en: [
          [
            "être",
            "{a}sois{/a}",
            "{a}soyons{/a}",
            "{a}soyez{/a}",
          ],
          [
            "avoir",
            "{a}aie{/a}",
            "{a}ayons{/a}",
            "{a}ayez{/a}",
          ],
          [
            "aller",
            "{a}va{/a}",
            "{a}allons{/a}",
            "{a}allez{/a}",
          ],
          [
            "savoir",
            "{a}sache{/a}",
            "{a}sachons{/a}",
            "{a}sachez{/a}",
          ],
          [
            "vouloir",
            "{a}veuille{/a}",
            "—",
            "{a}veuillez{/a} (polite)",
          ],
        ],
        ar: [
          [
            "être",
            "{a}sois{/a}",
            "{a}soyons{/a}",
            "{a}soyez{/a}",
          ],
          [
            "avoir",
            "{a}aie{/a}",
            "{a}ayons{/a}",
            "{a}ayez{/a}",
          ],
          [
            "aller",
            "{a}va{/a}",
            "{a}allons{/a}",
            "{a}allez{/a}",
          ],
          [
            "savoir",
            "{a}sache{/a}",
            "{a}sachons{/a}",
            "{a}sachez{/a}",
          ],
          [
            "vouloir",
            "{a}veuille{/a}",
            "—",
            "{a}veuillez{/a} (مهذّب)",
          ],
        ],
        fa: [
          [
            "être",
            "{a}sois{/a}",
            "{a}soyons{/a}",
            "{a}soyez{/a}",
          ],
          [
            "avoir",
            "{a}aie{/a}",
            "{a}ayons{/a}",
            "{a}ayez{/a}",
          ],
          [
            "aller",
            "{a}va{/a}",
            "{a}allons{/a}",
            "{a}allez{/a}",
          ],
          [
            "savoir",
            "{a}sache{/a}",
            "{a}sachons{/a}",
            "{a}sachez{/a}",
          ],
          [
            "vouloir",
            "{a}veuille{/a}",
            "—",
            "{a}veuillez{/a} (مؤدبانه)",
          ],
        ],
        ti: [
          [
            "être",
            "{a}sois{/a}",
            "{a}soyons{/a}",
            "{a}soyez{/a}",
          ],
          [
            "avoir",
            "{a}aie{/a}",
            "{a}ayons{/a}",
            "{a}ayez{/a}",
          ],
          [
            "aller",
            "{a}va{/a}",
            "{a}allons{/a}",
            "{a}allez{/a}",
          ],
          [
            "savoir",
            "{a}sache{/a}",
            "{a}sachons{/a}",
            "{a}sachez{/a}",
          ],
          [
            "vouloir",
            "{a}veuille{/a}",
            "—",
            "{a}veuillez{/a} (ኣኽብሮታዊ)",
          ],
        ],
        uk: [
          [
            "être",
            "{a}sois{/a}",
            "{a}soyons{/a}",
            "{a}soyez{/a}",
          ],
          [
            "avoir",
            "{a}aie{/a}",
            "{a}ayons{/a}",
            "{a}ayez{/a}",
          ],
          [
            "aller",
            "{a}va{/a}",
            "{a}allons{/a}",
            "{a}allez{/a}",
          ],
          [
            "savoir",
            "{a}sache{/a}",
            "{a}sachons{/a}",
            "{a}sachez{/a}",
          ],
          [
            "vouloir",
            "{a}veuille{/a}",
            "—",
            "{a}veuillez{/a} (ввічливо)",
          ],
        ],
      },
    },
    {
      type: "heading",
      text: "Forme négative",
      sub: true,
      accent: true,
      trans: {
        en: "Negative form",
        ar: "صيغة النفي",
        fa: "شکل منفی",
        ti: "ኣሉታዊ ቅርጺ",
        uk: "Заперечна форма",
      },
    },
    {
      type: "grid",
      headers: [
        "Affirmatif",
        "Négatif",
      ],
      transHeaders: {
        en: [
          "Affirmative",
          "Negative",
        ],
        ar: [
          "إثبات",
          "نفي",
        ],
        fa: [
          "مثبت",
          "منفی",
        ],
        ti: [
          "ኣወንታዊ",
          "ኣሉታዊ",
        ],
        uk: [
          "Стверджувальна",
          "Заперечна",
        ],
      },
      rows: [
        [
          "Parle !",
          "{a}Ne{/a} parle {a}pas{/a} !",
        ],
        [
          "Mangez !",
          "{a}Ne{/a} mangez {a}pas{/a} !",
        ],
        [
          "Soyons patients !",
          "{a}Ne{/a} soyons {a}pas{/a} impatients !",
        ],
      ],
      transRows: {
        en: [
          [
            "Parle !",
            "{a}Ne{/a} parle {a}pas{/a} !",
          ],
          [
            "Mangez !",
            "{a}Ne{/a} mangez {a}pas{/a} !",
          ],
          [
            "Soyons patients !",
            "{a}Ne{/a} soyons {a}pas{/a} impatients !",
          ],
        ],
        ar: [
          [
            "Parle !",
            "{a}Ne{/a} parle {a}pas{/a} !",
          ],
          [
            "Mangez !",
            "{a}Ne{/a} mangez {a}pas{/a} !",
          ],
          [
            "Soyons patients !",
            "{a}Ne{/a} soyons {a}pas{/a} impatients !",
          ],
        ],
        fa: [
          [
            "Parle !",
            "{a}Ne{/a} parle {a}pas{/a} !",
          ],
          [
            "Mangez !",
            "{a}Ne{/a} mangez {a}pas{/a} !",
          ],
          [
            "Soyons patients !",
            "{a}Ne{/a} soyons {a}pas{/a} impatients !",
          ],
        ],
        ti: [
          [
            "Parle !",
            "{a}Ne{/a} parle {a}pas{/a} !",
          ],
          [
            "Mangez !",
            "{a}Ne{/a} mangez {a}pas{/a} !",
          ],
          [
            "Soyons patients !",
            "{a}Ne{/a} soyons {a}pas{/a} impatients !",
          ],
        ],
        uk: [
          [
            "Parle !",
            "{a}Ne{/a} parle {a}pas{/a} !",
          ],
          [
            "Mangez !",
            "{a}Ne{/a} mangez {a}pas{/a} !",
          ],
          [
            "Soyons patients !",
            "{a}Ne{/a} soyons {a}pas{/a} impatients !",
          ],
        ],
      },
    },
    {
      type: "heading",
      text: "Impératif + pronoms",
      sub: true,
      accent: true,
      trans: {
        en: "Imperative + pronouns",
        ar: "صيغة الأمر + الضمائر",
        fa: "وجه امری + ضمایر",
        ti: "ትእዛዝ + ቃላት",
        uk: "Наказовий спосіб + займенники",
      },
    },
    {
      type: "grid",
      headers: [
        "Structure",
        "Exemple",
      ],
      transHeaders: {
        en: [
          "Structure",
          "Example",
        ],
        ar: [
          "البنية",
          "مثال",
        ],
        fa: [
          "ساختار",
          "مثال",
        ],
        ti: [
          "ቅርጺ",
          "ኣብነት",
        ],
        uk: [
          "Структура",
          "Приклад",
        ],
      },
      boldFirstCol: true,
      rows: [
        [
          "Affirmatif : verbe + pronom (après)",
          "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !",
        ],
        [
          "Négatif : pronom avant le verbe",
          "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !",
        ],
      ],
      transRows: {
        en: [
          [
            "Affirmative: verb + pronoun (after)",
            "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !",
          ],
          [
            "Negative: pronoun before the verb",
            "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !",
          ],
        ],
        ar: [
          [
            "إثبات: الفعل + الضمير (بعده)",
            "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !",
          ],
          [
            "نفي: الضمير قبل الفعل",
            "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !",
          ],
        ],
        fa: [
          [
            "مثبت: فعل + ضمیر (بعد از فعل)",
            "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !",
          ],
          [
            "منفی: ضمیر پیش از فعل",
            "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !",
          ],
        ],
        ti: [
          [
            "ኣወንታዊ፦ ግሲ + ቃል (ድሕሪኡ)",
            "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !",
          ],
          [
            "ኣሉታዊ፦ ቃል ቅድሚ ግሲ",
            "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !",
          ],
        ],
        uk: [
          [
            "Стверджувальна: дієслово + займенник (після)",
            "Donne-{a}le{/a}-moi ! / Dis-{a}lui{/a} !",
          ],
          [
            "Заперечна: займенник перед дієсловом",
            "Ne {a}le{/a} mange pas ! / Ne {a}lui{/a} parle pas !",
          ],
        ],
      },
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Impératif",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        {
          sentence: "___ vos portables !",
          choices: [
            "Éteignez",
            "Éteignez-vous",
            "Éteindre",
          ],
          correctIdx: 0,
        },
        {
          sentence: "___ ici, c'est mieux !",
          choices: [
            "Restons",
            "Restons-nous",
            "Nous restons",
          ],
          correctIdx: 0,
        },
        {
          sentence: "___ des places ! (tu, réserver)",
          choices: [
            "Réserve",
            "Réserves",
            "Réservez-tu",
          ],
          correctIdx: 0,
        },
        {
          sentence: "___ -en trois !",
          choices: [
            "Réserves",
            "Réserve",
            "Réservez",
          ],
          correctIdx: 0,
        },
        {
          sentence: "___ -y !",
          choices: [
            "Vas",
            "Va",
            "Allez",
          ],
          correctIdx: 0,
        },
        {
          sentence: "___ les bienvenus. (être, vous)",
          choices: [
            "Soyez",
            "Êtes",
            "Sois",
          ],
          correctIdx: 0,
        },
        {
          sentence: "___ vous asseoir.",
          choices: [
            "Veuillez",
            "Voulez",
            "Veux",
          ],
          correctIdx: 0,
        },
        {
          sentence: "___ -moi !",
          choices: [
            "Regarde",
            "Regarde me",
            "Me regarde",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Ne ___ regarde pas !",
          choices: [
            "me",
            "moi",
            "mon",
          ],
          correctIdx: 0,
        },
        {
          sentence: "___ -toi !",
          choices: [
            "Assieds",
            "Assieds-te",
            "T'assieds",
          ],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez la forme à l'impératif ou le pronom.",
      items: [],
      poolSize: 5,
      pool: [
        {
          sentence: "___ ! (entrer, tu)",
          hint: "impératif",
          answer: "Entre",
        },
        {
          sentence: "___ ! (entrer, nous)",
          hint: "impératif",
          answer: "Entrons",
        },
        {
          sentence: "___ ! (entrer, vous)",
          hint: "impératif",
          answer: "Entrez",
        },
        {
          sentence: "___ à l'opéra ! (aller, tu)",
          hint: "sans s",
          answer: "Va",
        },
        {
          sentence: "___ -y !",
          hint: "avec y",
          answer: "Vas",
        },
        {
          sentence: "___ patient ! (être, tu)",
          hint: "irrégulier",
          answer: "Sois",
        },
        {
          sentence: "___ confiance ! (avoir, tu)",
          hint: "irrégulier",
          answer: "Aie",
        },
        {
          sentence: "Téléphone-___ !",
          hint: "à moi",
          answer: "moi",
        },
        {
          sentence: "Ne ___ téléphone pas !",
          hint: "négation",
          answer: "me",
        },
        {
          sentence: "Appelez-___ !",
          hint: "eux",
          answer: "les",
        },
      ],
    },
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Donnez la forme impérative du verbe.",
      transInstruction: {
        en: "Give the imperative form of the verb.",
        ar: "أعطِ صيغة الأمر للفعل.",
        fa: "صورت امری فعل را بنویسید.",
        ti: "ናይ ኢምፔራቲቭ ቅርጺ ናይቲ ግሲ ሃብ።",
        uk: "Напишіть форму imperative дієслова.",
      },
      items: [],
      pool: [
        {
          sentence: "parler → tu : ___",
          hint: "pas de -s pour les verbes en -er",
          answer: "Parle !",
        },
        {
          sentence: "finir → tu : ___",
          hint: "finir → finis",
          answer: "Finis !",
        },
        {
          sentence: "partir → tu : ___",
          hint: "partir → pars",
          answer: "Pars !",
        },
        {
          sentence: "manger → nous : ___",
          hint: "nous mangeons → mangeons",
          answer: "Mangeons !",
        },
        {
          sentence: "finir → nous : ___",
          hint: "nous finissons → finissons",
          answer: "Finissons !",
        },
        {
          sentence: "parler → vous : ___",
          hint: "vous parlez → parlez",
          answer: "Parlez !",
        },
        {
          sentence: "choisir → vous : ___",
          hint: "vous choisissez → choisissez",
          answer: "Choisissez !",
        },
        {
          sentence: "être → tu : ___",
          hint: "irrégulier : sois",
          answer: "Sois !",
        },
        {
          sentence: "avoir → vous : ___",
          hint: "irrégulier : ayez",
          answer: "Ayez !",
        },
        {
          sentence: "aller → tu : ___",
          hint: "irrégulier : va",
          answer: "Va !",
        },
      ],
      poolSize: 7,
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Mettez l'impératif à la forme négative.",
      transInstruction: {
        en: "Put the imperative in the negative form.",
        ar: "حوّل صيغة الأمر إلى صيغة النفي.",
        fa: "حالت امری را به‌صورت منفی بنویسید.",
        ti: "ኢምፔራቲቭ ናብ ኣሉታዊ ቅርጺ ቀይር።",
        uk: "Поставте imperative у заперечній формі.",
      },
      items: [],
      pool: [
        {
          sentence: "Parle ! → ___ !",
          hint: "ne...pas encadre le verbe",
          answer: "Ne parle pas",
        },
        {
          sentence: "Mangez ! → ___ !",
          hint: "ne...pas encadre le verbe",
          answer: "Ne mangez pas",
        },
        {
          sentence: "Soyons patients ! → ___ !",
          hint: "ne...pas encadre le verbe",
          answer: "Ne soyons pas impatients",
        },
        {
          sentence: "Pars ! → ___ !",
          hint: "ne...pas encadre le verbe",
          answer: "Ne pars pas",
        },
        {
          sentence: "Finis ça ! → ___ !",
          hint: "ne...pas encadre le verbe",
          answer: "Ne finis pas ça",
        },
        {
          sentence: "Allez vite ! → ___ !",
          hint: "ne...pas encadre le verbe",
          answer: "N'allez pas vite",
        },
      ],
      poolSize: 5,
    },
    {
      type: "classify",
      title: "Exercice 3",
      instruction: "Classez selon l'usage de l'impératif.",
      transInstruction: {
        en: "Sort according to the use of the imperative.",
        ar: "صنّف حسب استخدام صيغة الأمر.",
        fa: "بر اساس کاربرد حالت امری دسته‌بندی کنید.",
        ti: "ብኣጠቓቕማ ኢምፔራቲቭ ሸነኽ።",
        uk: "Розсортуйте за вживанням imperative.",
      },
      categories: [
        "Ordre / interdiction",
        "Conseil",
        "Invitation",
      ],
      items: [],
      pool: [
        {
          word: "Ne touche pas à ça !",
          categoryIdx: 0,
        },
        {
          word: "Tu devrais travailler plus.",
          categoryIdx: 1,
        },
        {
          word: "Venez dîner chez nous !",
          categoryIdx: 2,
        },
        {
          word: "Arrête de parler !",
          categoryIdx: 0,
        },
        {
          word: "Mange moins de sucre.",
          categoryIdx: 1,
        },
        {
          word: "Entrez, je vous en prie !",
          categoryIdx: 2,
        },
        {
          word: "Ferme la porte !",
          categoryIdx: 0,
        },
        {
          word: "Repose-toi un peu.",
          categoryIdx: 1,
        },
      ],
      poolSize: 6,
    },
    {
      type: "word_order",
      title: "Exercice 4",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase à l'impératif.",
      transInstruction: {
        en: "Put the words back in the correct order to form an imperative sentence.",
        ar: "أعد ترتيب الكلمات لتكوين جملة بصيغة الأمر.",
        fa: "کلمات را به ترتیب درست بچینید تا جمله‌ی امری بسازید.",
        ti: "ነተን ቃላት ቅኑዕ ሓሳብ ኢምፔራቲቭ ንምግባር ብቅኑዕ ስርዓት መድብ።",
        uk: "Розставте слова у правильному порядку, щоб утворити речення в imperative.",
      },
      items: [],
      pool: [
        {
          sentence: "Parle plus lentement !",
          words: [
            "Parle",
            "plus",
            "lentement",
          ],
        },
        {
          sentence: "Ne mangez pas de sucre !",
          words: [
            "Ne",
            "mangez",
            "pas",
            "de",
            "sucre",
          ],
        },
        {
          sentence: "Soyons patients ensemble !",
          words: [
            "Soyons",
            "patients",
            "ensemble",
          ],
        },
        {
          sentence: "Ne pars pas sans moi !",
          words: [
            "Ne",
            "pars",
            "pas",
            "sans",
            "moi",
          ],
        },
        {
          sentence: "Finissez vos devoirs avant ce soir !",
          words: [
            "Finissez",
            "vos",
            "devoirs",
            "avant",
            "ce",
            "soir",
          ],
        },
      ],
      poolSize: 4,
    },
    {
      type: "color_highlight",
      title: "Exercice 5",
      instruction: "Sélectionnez une couleur, puis identifiez : le verbe à l'impératif (jaune) et la négation ne…pas (rouge).",
      transInstruction: {
        en: "Select a color, then identify: the verb in the imperative (yellow) and the negation ne…pas (red).",
        ar: "اختر لوناً، ثم حدّد: الفعل بصيغة الأمر (أصفر) والنفي ne…pas (أحمر).",
        fa: "یک رنگ انتخاب کنید، سپس مشخص کنید: فعل در حالت امری (زرد) و نفی ne…pas (قرمز).",
        ti: "ሕብሪ ምረጽ፣ ድሕሪኡ ፍለ፦ ግሲ ኢምፔራቲቭ (ብጫ)ን ኣሉታ ne…pas (ቀይሕ)ን።",
        uk: "Виберіть колір, потім визначте: дієслово в imperative (жовтий) і заперечення ne…pas (червоний).",
      },
      colors: [
        "Verbe impératif",
        "Négation",
      ],
      items: [
        {
          words: [
            "Parle",
            "plus",
            "lentement",
          ],
          answers: [
            0,
            null,
            null,
            null,
          ],
        },
        {
          words: [
            "Ne",
            "mange",
            "pas",
            "de",
            "sucre",
          ],
          answers: [
            1,
            0,
            1,
            null,
            null,
            null,
          ],
        },
        {
          words: [
            "Finissez",
            "vos",
            "devoirs",
          ],
          answers: [
            0,
            null,
            null,
            null,
          ],
        },
      ],
    },
    {
      type: "write",
      title: "Exercice 6",
      instruction: "Écrivez un conseil ou un ordre à l'impératif (affirmatif ou négatif).\nUtilisez « tu » ou « vous ».",
      transInstruction: {
        en: "Write a piece of advice or an order in the imperative (affirmative or negative).\nUse « tu » or « vous ».",
        ar: "اكتب نصيحة أو أمراً بصيغة الأمر (إيجابية أو سلبية).\nاستخدم « tu » أو « vous ».",
        fa: "یک توصیه یا دستور در حالت امری (مثبت یا منفی) بنویسید.\nاز « tu » یا « vous » استفاده کنید.",
        ti: "ሓደ ምክር ወይ ትእዛዝ ብኢምፔራቲቭ (ኣረጋግጺ ወይ ኣሉታዊ) ጽሓፍ።\n« tu » ወይ « vous » ተጠቐም።",
        uk: "Напишіть пораду або наказ у imperative (стверджувальній або заперечній формі).\nВикористайте « tu » або « vous ».",
      },
      verbPool: [
        "parler",
        "finir",
        "manger",
        "écouter",
        "travailler",
        "partir",
      ],
      verbPoolSize: 2,
    },
  ],
};
