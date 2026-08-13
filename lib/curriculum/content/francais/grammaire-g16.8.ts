import type { GrammarLesson } from "../../grammar-data";

/** G16.8 — Le conditionnel présent */
export const A1_GR_CONDITIONNEL_PRESENT: GrammarLesson = {
  slug: "a1-gr-conditionnel-present",
  code: "G16.8",
  level: "A1",
  title: "Le conditionnel présent",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      allBullets: true,
      label: "Demander un service poliment",
      items: [
        "Je {a}voudrais{/a} deux baguettes… ; Vous {a}pourriez{/a} m'apporter de l'eau…",
        "{a}Auriez{/a}-vous l'heure ? ; {a}Sauriez{/a}-vous comment on va à Giverny ?",
      ],
    },
    {
      type: "text",
      allBullets: true,
      label: "Exprimer un souhait, un désir",
      items: [
        "On {a}voudrait{/a} déménager. ; Tu {a}aimerais{/a} aller où ?",
        "Je {a}préférerais{/a} une bouteille… ; Vous {a}souhaiteriez{/a} vivre au bord de la mer ?",
      ],
    },
    {
      type: "text",
      allBullets: true,
      label: "Suggestion / conseil",
      items: [
        "Ce soir, si tu veux, on {a}pourrait{/a} aller au cinéma.",
        "Tu {a}devrais{/a} te renseigner… ; Si j'étais toi / À ta place, je me {a}renseignerais{/a}.",
      ],
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "text",
      items: [
        "Radical du futur simple + terminaisons de l'imparfait ({a}-ais, -ais, -ait, -ions, -iez, -aient{/a}).",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: [
        "",
        "aimer",
        "préférer",
        "souhaiter",
      ],
      boldFirstCol: true,
      rows: [
        [
          "je / j'",
          "aimerais",
          "préférerais",
          "souhaiterais",
        ],
        [
          "tu",
          "aimerais",
          "préférerais",
          "souhaiterais",
        ],
        [
          "il / elle / on",
          "aimerait",
          "préférerait",
          "souhaiterait",
        ],
        [
          "nous",
          "aimerions",
          "préférerions",
          "souhaiterions",
        ],
        [
          "vous",
          "aimeriez",
          "préféreriez",
          "souhaiteriez",
        ],
        [
          "ils / elles",
          "aimeraient",
          "préféreraient",
          "souhaiteraient",
        ],
      ],
    },
    {
      type: "note",
      text: "Les verbes irréguliers au futur le sont aussi au conditionnel. → À ta place, j'{a}irais{/a} chez le médecin. ; À ma place, vous {a}feriez{/a} quoi ?",
    },
    {
      type: "heading",
      text: "Le conditionnel présent",
      trans: {
        en: "The present conditional",
        ar: "الشرطي الحاضر",
        fa: "وجه شرطی حال",
        ti: "ህሉው ቅድመ-ኩነታዊ",
        uk: "Теперішній умовний спосіб",
      },
    },
    {
      type: "text",
      allBullets: true,
      text: "Formation : {a}infinitif (ou base du futur){/a} + terminaisons de l'imparfait",
      transText: {
        en: "Formation: {a}infinitive (or future stem){/a} + imperfect endings",
        ar: "التكوين: {a}المصدر (أو جذر المستقبل){/a} + نهايات الماضي الناقص",
        fa: "ساختار: {a}مصدر (یا ریشه‌ی آینده){/a} + پایانه‌های ماضی استمراری",
        ti: "ኣፈጣጥራ፦ {a}ኢንፊኒቲቭ (ወይ መሰረት መጻኢ){/a} + መወዳእታታት ሕሉፍ ቀጻሊ",
        uk: "Утворення: {a}інфінітив (або основа майбутнього){/a} + закінчення imparfait",
      },
      items: [
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
      ],
      transItems: {
        en: [
          "Endings: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
        ar: [
          "النهايات: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
        fa: [
          "پایانه‌ها: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
        ti: [
          "መወዳእታታት፦ {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
        uk: [
          "Закінчення: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (conditionnel présent)",
          accentForms: true,
          rows: [
            {
              pronoun: "je",
              form: "parlerais",
            },
            {
              pronoun: "tu",
              form: "parlerais",
            },
            {
              pronoun: "il / elle / on",
              form: "parlerait",
            },
            {
              pronoun: "nous",
              form: "parlerions",
            },
            {
              pronoun: "vous",
              form: "parleriez",
            },
            {
              pronoun: "ils / elles",
              form: "parleraient",
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Bases irrégulières",
      sub: true,
      accent: true,
      trans: {
        en: "Irregular stems",
        ar: "الجذور الشاذة",
        fa: "ریشه‌های بی‌قاعده",
        ti: "ዘይስሩዓት መሰረታት",
        uk: "Неправильні основи",
      },
    },
    {
      type: "grid",
      headers: [
        "Infinitif",
        "Base",
        "Exemple",
      ],
      boldFirstCol: true,
      rows: [
        [
          "être",
          "{a}ser-{/a}",
          "je serais",
        ],
        [
          "avoir",
          "{a}aur-{/a}",
          "j'aurais",
        ],
        [
          "aller",
          "{a}ir-{/a}",
          "j'irais",
        ],
        [
          "faire",
          "{a}fer-{/a}",
          "je ferais",
        ],
        [
          "pouvoir",
          "{a}pourr-{/a}",
          "je pourrais",
        ],
        [
          "vouloir",
          "{a}voudr-{/a}",
          "je voudrais",
        ],
        [
          "venir",
          "{a}viendr-{/a}",
          "je viendrais",
        ],
        [
          "devoir",
          "{a}devr-{/a}",
          "je devrais",
        ],
        [
          "savoir",
          "{a}saur-{/a}",
          "je saurais",
        ],
      ],
      transHeaders: {
        en: [
          "Infinitive",
          "Stem",
          "Example",
        ],
        ar: [
          "المصدر",
          "الجذر",
          "مثال",
        ],
        fa: [
          "مصدر",
          "ریشه",
          "مثال",
        ],
        ti: [
          "ኢንፊኒቲቭ",
          "መሰረት",
          "ኣብነት",
        ],
        uk: [
          "Інфінітив",
          "Основа",
          "Приклад",
        ],
      },
    },
    {
      type: "heading",
      text: "Le conditionnel passé",
      trans: {
        en: "The past conditional",
        ar: "الشرطي الماضي",
        fa: "وجه شرطی گذشته",
        ti: "ዝሓለፈ ቅድመ-ኩነታዊ",
        uk: "Минулий умовний спосіб",
      },
    },
    {
      type: "text",
      allBullets: true,
      text: "Formation : {a}avoir ou être au conditionnel présent{/a} + participe passé",
      transText: {
        en: "Formation: {a}avoir or être in the present conditional{/a} + past participle",
        ar: "التكوين: {a}avoir أو être بالشرطي الحاضر{/a} + المتحوّل الماضي",
        fa: "ساختار: {a}avoir یا être در وجه شرطی حال{/a} + اسم مفعول گذشته",
        ti: "ኣፈጣጥራ፦ {a}avoir ወይ être ኣብ ህሉው ቅድመ-ኩነታዊ{/a} + ዝሓለፈ ተሳታፊ",
        uk: "Утворення: {a}avoir або être у теперішньому умовному{/a} + дієприкметник минулого часу",
      },
      items: [
        "Même choix d'auxiliaire qu'au passé composé.",
      ],
      transItems: {
        en: [
          "Same auxiliary choice as with the passé composé.",
        ],
        ar: [
          "نفس اختيار الفعل المساعد كما في الماضي المركّب.",
        ],
        fa: [
          "همان انتخاب فعل کمکی مثل گذشته‌ی مرکب.",
        ],
        ti: [
          "ሓደ ኣይነት ምርጫ ናይ ሓጋዚ ዝበሃል ከም passé composé።",
        ],
        uk: [
          "Той самий вибір допоміжного дієслова, що й у passé composé.",
        ],
      },
    },
    {
      type: "grid",
      headers: [
        "Verbe",
        "Conditionnel passé",
        "Sens",
      ],
      boldFirstCol: true,
      rows: [
        [
          "parler",
          "j'{a}aurais parlé{/a}",
          "I would have spoken",
        ],
        [
          "partir",
          "je {a}serais parti(e){/a}",
          "I would have left",
        ],
        [
          "se lever",
          "je me {a}serais levé(e){/a}",
          "I would have got up",
        ],
      ],
      transHeaders: {
        en: [
          "Verb",
          "Past conditional",
          "Meaning",
        ],
        ar: [
          "الفعل",
          "الشرطي الماضي",
          "المعنى",
        ],
        fa: [
          "فعل",
          "شرطی گذشته",
          "معنا",
        ],
        ti: [
          "ግሲ",
          "ዝሓለፈ ቅድመ-ኩነታዊ",
          "ትርጉም",
        ],
        uk: [
          "Дієслово",
          "Минулий умовний",
          "Значення",
        ],
      },
    },
    {
      type: "heading",
      text: "Les phrases hypothétiques avec si",
      trans: {
        en: "Hypothetical sentences with si",
        ar: "الجمل الافتراضية مع si",
        fa: "جملات فرضی با si",
        ti: "ግምታዊ ዓረፍተ-ነገር ምስ si",
        uk: "Гіпотетичні речення з si",
      },
    },
    {
      type: "grid",
      headers: [
        "Type",
        "Si + …",
        "Résultat",
        "Exemple",
      ],
      boldFirstCol: true,
      equalCols: true,
      rows: [
        [
          "Probable",
          "{a}présent{/a}",
          "futur simple",
          "Si tu viens, nous {a}irons{/a} au cinéma.",
        ],
        [
          "Improbable",
          "{a}imparfait{/a}",
          "conditionnel présent",
          "Si j'avais le temps, je {a}voyagerais{/a}.",
        ],
        [
          "Impossible (passé)",
          "{a}plus-que-parfait{/a}",
          "conditionnel passé",
          "Si j'avais étudié, j'{a}aurais réussi{/a}.",
        ],
      ],
      transHeaders: {
        en: [
          "Type",
          "Si + …",
          "Result",
          "Example",
        ],
        ar: [
          "النوع",
          "si + …",
          "النتيجة",
          "مثال",
        ],
        fa: [
          "نوع",
          "si + …",
          "نتیجه",
          "مثال",
        ],
        ti: [
          "ዓይነት",
          "Si + …",
          "ውጽኢት",
          "ኣብነት",
        ],
        uk: [
          "Тип",
          "Si + …",
          "Результат",
          "Приклад",
        ],
      },
      transRows: {
        en: [
          [
            "Likely",
            "{a}present{/a}",
            "simple future",
            "Si tu viens, nous {a}irons{/a} au cinéma. (If you come, we will go to the cinema.)",
          ],
          [
            "Unlikely",
            "{a}imperfect{/a}",
            "present conditional",
            "Si j'avais le temps, je {a}voyagerais{/a}. (If I had time, I would travel.)",
          ],
          [
            "Impossible (past)",
            "{a}pluperfect{/a}",
            "past conditional",
            "Si j'avais étudié, j'{a}aurais réussi{/a}. (If I had studied, I would have succeeded.)",
          ],
        ],
        ar: [
          [
            "محتمل",
            "{a}المضارع{/a}",
            "المستقبل البسيط",
            "Si tu viens, nous {a}irons{/a} au cinéma. (إذا جئت، سنذهب إلى السينما.)",
          ],
          [
            "مستبعد",
            "{a}الماضي الناقص{/a}",
            "الشرطي الحاضر",
            "Si j'avais le temps, je {a}voyagerais{/a}. (لو كان لديّ وقت، كنت سأسافر.)",
          ],
          [
            "مستحيل (ماضٍ)",
            "{a}الماضي التام{/a}",
            "الشرطي الماضي",
            "Si j'avais étudié, j'{a}aurais réussi{/a}. (لو درست، كنت لقد نجحت.)",
          ],
        ],
        fa: [
          [
            "محتمل",
            "{a}حال{/a}",
            "آینده‌ی ساده",
            "Si tu viens, nous {a}irons{/a} au cinéma. (اگر بیایی، می‌رویم سینما.)",
          ],
          [
            "بعید",
            "{a}ماضی استمراری{/a}",
            "شرطی حال",
            "Si j'avais le temps, je {a}voyagerais{/a}. (اگر وقت داشتم، سفر می‌کردم.)",
          ],
          [
            "غیرممکن (گذشته)",
            "{a}ماضی بعید{/a}",
            "شرطی گذشته",
            "Si j'avais étudié, j'{a}aurais réussi{/a}. (اگر درس خوانده بودم، موفق می‌شدم.)",
          ],
        ],
        ti: [
          [
            "ዝኽሰት",
            "{a}ህሉው{/a}",
            "ቀሊል መጻኢ",
            "Si tu viens, nous {a}irons{/a} au cinéma. (እንተ መጺእካ፣ ናብ ሲነማ ንኸይድ።)",
          ],
          [
            "ዘይኽሰት",
            "{a}ሕሉፍ ቀጻሊ{/a}",
            "ህሉው ቅድመ-ኩነታዊ",
            "Si j'avais le temps, je {a}voyagerais{/a}. (ግዜ እንተዝህልወኒ፣ ምገሸኹ።)",
          ],
          [
            "ዘይከኣለ (ሕሉፍ)",
            "{a}ዝሓለፈ ዝሰዓበ{/a}",
            "ዝሓለፈ ቅድመ-ኩነታዊ",
            "Si j'avais étudié, j'{a}aurais réussi{/a}. (እንተዝምሃርኩ ዝነበርኩ፣ ምዓወትኩ።)",
          ],
        ],
        uk: [
          [
            "Ймовірне",
            "{a}теперішній{/a}",
            "майбутній простий",
            "Si tu viens, nous {a}irons{/a} au cinéma. (Якщо ти прийдеш, ми підемо в кіно.)",
          ],
          [
            "Малоймовірне",
            "{a}imparfait{/a}",
            "теперішній умовний",
            "Si j'avais le temps, je {a}voyagerais{/a}. (Якби я мав час, я б подорожував.)",
          ],
          [
            "Неможливе (минуле)",
            "{a}plus-que-parfait{/a}",
            "минулий умовний",
            "Si j'avais étudié, j'{a}aurais réussi{/a}. (Якби я вчився, я б досяг успіху.)",
          ],
        ],
      },
    },
    {
      type: "text",
      allBullets: true,
      label: "Règle clé",
      items: [
        "Jamais de conditionnel dans la proposition avec {a}si{/a}.",
        "Si + présent → futur ; Si + imparfait → conditionnel présent ; Si + plus-que-parfait → conditionnel passé.",
      ],
      transLabel: {
        en: "Key rule",
        ar: "القاعدة الأساسية",
        fa: "قانون کلیدی",
        ti: "ቀንዲ ሕጊ",
        uk: "Ключове правило",
      },
      transItems: {
        en: [
          "Never use the conditional in the clause with {a}si{/a}.",
          "Si + present → future; Si + imperfect → present conditional; Si + pluperfect → past conditional.",
        ],
        ar: [
          "لا تستخدم أبداً الشرطي في الجملة مع {a}si{/a}.",
          "si + المضارع → المستقبل؛ si + الماضي الناقص → الشرطي الحاضر؛ si + الماضي التام → الشرطي الماضي.",
        ],
        fa: [
          "هرگز از وجه شرطی در بند با {a}si{/a} استفاده نکنید.",
          "si + حال → آینده؛ si + ماضی استمراری → شرطی حال؛ si + ماضی بعید → شرطی گذشته.",
        ],
        ti: [
          "ኣብ ሓሳብ ምስ {a}si{/a} ቅድመ-ኩነታዊ ፈጺምካ ኣይትጠቀም።",
          "si + ህሉው → መጻኢ፤ si + ሕሉፍ ቀጻሊ → ህሉው ቅድመ-ኩነታዊ፤ si + ዝሓለፈ ዝሰዓበ → ዝሓለፈ ቅድመ-ኩነታዊ።",
        ],
        uk: [
          "Ніколи не використовуйте умовний спосіб у реченні з {a}si{/a}.",
          "si + теперішній → майбутній; si + imparfait → теперішній умовний; si + plus-que-parfait → минулий умовний.",
        ],
      },
    },
    {
      type: "heading",
      text: "Entraînement conjugaison",
    },
    {
      type: "heading",
      text: "Le conditionnel présent",
      trans: {
        en: "The present conditional",
        ar: "الشرطي الحاضر",
        fa: "وجه شرطی حال",
        ti: "ህሉው ቅድመ-ኩነታዊ",
        uk: "Теперішній умовний спосіб",
      },
    },
    {
      type: "text",
      allBullets: true,
      text: "Le conditionnel exprime une action {a}hypothétique, souhaitée ou polie{/a}.",
      transText: {
        en: "The conditional expresses a {a}hypothetical, wished-for or polite{/a} action.",
        ar: "الشرطي يعبّر عن فعل {a}افتراضي أو مرغوب أو مؤدّب{/a}.",
        fa: "وجه شرطی بیانگر عملی {a}فرضی، خواسته‌شده یا مودبانه{/a} است.",
        ti: "ቅድመ-ኩነታዊ {a}ግምታዊ፣ ዝድለ ወይ ኣኽብሮታዊ{/a} ተግባር የመልክት።",
        uk: "Умовний спосіб виражає {a}гіпотетичну, бажану або ввічливу{/a} дію.",
      },
      items: [
        "Formation : {a}base du futur{/a} + terminaisons de l'imparfait",
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
      ],
      transItems: {
        en: [
          "Formation: {a}future stem{/a} + imperfect endings",
          "Endings: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
        ar: [
          "التكوين: {a}جذر المستقبل{/a} + نهايات الماضي الناقص",
          "النهايات: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
        fa: [
          "ساختن: {a}ریشه‌ی آینده{/a} + پایانه‌های ماضی استمراری",
          "پایانه‌ها: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
        ti: [
          "ኣፈጣጥራ፦ {a}መሰረት ናይ መጻኢ{/a} + መወዳእታታት ናይ ሕሉፍ ቀጻሊ",
          "መወዳእታታት፦ {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
        uk: [
          "Утворення: {a}основа майбутнього{/a} + закінчення imparfait",
          "Закінчення: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        ],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "aimer (conditionnel)",
          accentForms: true,
          rows: [
            {
              pronoun: "j'",
              form: "aimerais",
            },
            {
              pronoun: "tu",
              form: "aimerais",
            },
            {
              pronoun: "il / elle / on",
              form: "aimerait",
            },
            {
              pronoun: "nous",
              form: "aimerions",
            },
            {
              pronoun: "vous",
              form: "aimeriez",
            },
            {
              pronoun: "ils / elles",
              form: "aimeraient",
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Bases irrégulières au conditionnel",
      sub: true,
      accent: true,
      trans: {
        en: "Irregular stems in the conditional",
        ar: "جذور شاذة في الشرطي",
        fa: "ریشه‌های بی‌قاعده در وجه شرطی",
        ti: "ዘይስሩዓት መሰረታት ኣብ ቅድመ-ኩነታዊ",
        uk: "Неправильні основи в умовному способі",
      },
    },
    {
      type: "grid",
      headers: [
        "Infinitif",
        "Base conditionnel",
        "Exemple",
      ],
      boldFirstCol: true,
      rows: [
        [
          "être",
          "{a}ser-{/a}",
          "je serais",
        ],
        [
          "avoir",
          "{a}aur-{/a}",
          "j'aurais",
        ],
        [
          "aller",
          "{a}ir-{/a}",
          "j'irais",
        ],
        [
          "faire",
          "{a}fer-{/a}",
          "je ferais",
        ],
        [
          "pouvoir",
          "{a}pourr-{/a}",
          "je pourrais",
        ],
        [
          "vouloir",
          "{a}voudr-{/a}",
          "je voudrais",
        ],
        [
          "venir",
          "{a}viendr-{/a}",
          "je viendrais",
        ],
        [
          "devoir",
          "{a}devr-{/a}",
          "je devrais",
        ],
        [
          "savoir",
          "{a}saur-{/a}",
          "je saurais",
        ],
      ],
      transHeaders: {
        en: [
          "Infinitive",
          "Conditional stem",
          "Example",
        ],
        ar: [
          "المصدر",
          "جذر الشرطي",
          "مثال",
        ],
        fa: [
          "مصدر",
          "ریشه‌ی شرطی",
          "مثال",
        ],
        ti: [
          "መሰረታዊ ግሲ",
          "መሰረት ቅድመ-ኩነታዊ",
          "ኣብነት",
        ],
        uk: [
          "Інфінітив",
          "Основа умовного способу",
          "Приклад",
        ],
      },
    },
    {
      type: "heading",
      text: "Emplois du conditionnel",
      sub: true,
      accent: true,
      trans: {
        en: "Uses of the conditional",
        ar: "استخدامات الشرطي",
        fa: "کاربردهای وجه شرطی",
        ti: "ኣጠቓቕማ ቅድመ-ኩነታዊ",
        uk: "Вживання умовного способу",
      },
    },
    {
      type: "grid",
      headers: [
        "Usage",
        "Exemple",
      ],
      boldFirstCol: true,
      rows: [
        [
          "Demande polie",
          "Je {a}voudrais{/a} un café, s'il vous plaît.",
        ],
        [
          "Conseil",
          "Tu {a}devrais{/a} consulter un médecin.",
        ],
        [
          "Souhait",
          "J'{a}aimerais{/a} voyager en Italie.",
        ],
        [
          "Hypothèse (si + imparfait)",
          "Si j'avais le temps, je {a}ferais{/a} du sport.",
        ],
        [
          "Information non confirmée",
          "Il {a}serait{/a} malade. (selon la rumeur)",
        ],
      ],
      transHeaders: {
        en: [
          "Use",
          "Example",
        ],
        ar: [
          "الاستخدام",
          "مثال",
        ],
        fa: [
          "کاربرد",
          "مثال",
        ],
        ti: [
          "ኣጠቓቕማ",
          "ኣብነት",
        ],
        uk: [
          "Вживання",
          "Приклад",
        ],
      },
      transRows: {
        en: [
          [
            "Polite request",
            "Je {a}voudrais{/a} un café, s'il vous plaît. (I would like a coffee, please.)",
          ],
          [
            "Advice",
            "Tu {a}devrais{/a} consulter un médecin. (You should see a doctor.)",
          ],
          [
            "Wish",
            "J'{a}aimerais{/a} voyager en Italie. (I would like to travel to Italy.)",
          ],
          [
            "Hypothesis (si + imperfect)",
            "Si j'avais le temps, je {a}ferais{/a} du sport. (If I had time, I would do sport.)",
          ],
          [
            "Unconfirmed information",
            "Il {a}serait{/a} malade. (He is said to be ill.) (according to rumour)",
          ],
        ],
        ar: [
          [
            "طلب مؤدّب",
            "Je {a}voudrais{/a} un café, s'il vous plaît. (أريد قهوة من فضلك.)",
          ],
          [
            "نصيحة",
            "Tu {a}devrais{/a} consulter un médecin. (ينبغي أن ترى طبيباً.)",
          ],
          [
            "أمنية",
            "J'{a}aimerais{/a} voyager en Italie. (أودّ السفر إلى إيطاليا.)",
          ],
          [
            "افتراض (si + الماضي الناقص)",
            "Si j'avais le temps, je {a}ferais{/a} du sport. (لو كان لديّ وقت، لمارست الرياضة.)",
          ],
          [
            "معلومة غير مؤكدة",
            "Il {a}serait{/a} malade. (يُقال إنه مريض.) (حسب الإشاعة)",
          ],
        ],
        fa: [
          [
            "درخواست مودبانه",
            "Je {a}voudrais{/a} un café, s'il vous plaît. (یک قهوه می‌خواهم، لطفاً.)",
          ],
          [
            "نصیحت",
            "Tu {a}devrais{/a} consulter un médecin. (باید به پزشک مراجعه کنی.)",
          ],
          [
            "آرزو",
            "J'{a}aimerais{/a} voyager en Italie. (دوست دارم به ایتالیا سفر کنم.)",
          ],
          [
            "فرض (si + ماضی استمراری)",
            "Si j'avais le temps, je {a}ferais{/a} du sport. (اگر وقت داشتم، ورزش می‌کردم.)",
          ],
          [
            "اطلاعات تأیید‌نشده",
            "Il {a}serait{/a} malade. (گفته می‌شود او بیمار است.) (بر اساس شایعه)",
          ],
        ],
        ti: [
          [
            "ኣኽብሮታዊ ሕቶ",
            "Je {a}voudrais{/a} un café, s'il vous plaît. (በጃኹም ሓደ ቡን እደሊ።)",
          ],
          [
            "ምኽሪ",
            "Tu {a}devrais{/a} consulter un médecin. (ሓኪም ክትርኢ ኣለካ።)",
          ],
          [
            "ድሌት",
            "J'{a}aimerais{/a} voyager en Italie. (ናብ ኢጣልያ ክገይሽ እደሊ።)",
          ],
          [
            "ግምት (si + ሕሉፍ ቀጻሊ)",
            "Si j'avais le temps, je {a}ferais{/a} du sport. (ግዜ እንተዝህልወኒ፣ ስፖርት ምገበርኩ።)",
          ],
          [
            "ዘይተረጋገጸ ሓበሬታ",
            "Il {a}serait{/a} malade. (ሓሚሙ ይብሃል።) (ከም ወረ)",
          ],
        ],
        uk: [
          [
            "Ввічливе прохання",
            "Je {a}voudrais{/a} un café, s'il vous plaît. (Я хотів би каву, будь ласка.)",
          ],
          [
            "Порада",
            "Tu {a}devrais{/a} consulter un médecin. (Тобі варто звернутися до лікаря.)",
          ],
          [
            "Бажання",
            "J'{a}aimerais{/a} voyager en Italie. (Я хотів би поїхати до Італії.)",
          ],
          [
            "Гіпотеза (si + imparfait)",
            "Si j'avais le temps, je {a}ferais{/a} du sport. (Якби я мав час, я б займався спортом.)",
          ],
          [
            "Непідтверджена інформація",
            "Il {a}serait{/a} malade. (Кажуть, він хворий.) (за чутками)",
          ],
        ],
      },
    },
    {
      type: "text",
      allBullets: true,
      label: "Politesse : impératif vs conditionnel",
      items: [
        "{a}Impératif{/a} (direct) : Donnez-moi un café !",
        "{a}Conditionnel{/a} (poli) : Je voudrais un café, s'il vous plaît.",
        "En contexte formel ou professionnel, privilégiez toujours le conditionnel.",
      ],
      transLabel: {
        en: "Politeness: imperative vs conditional",
        ar: "التأدّب: الأمر مقابل الشرطي",
        fa: "ادب: امری در برابر شرطی",
        ti: "ምኽባር፦ ትእዛዝ ኣንጻር ቅድመ-ኩነታዊ",
        uk: "Ввічливість: наказовий проти умовного",
      },
      transItems: {
        en: [
          "{a}Imperative{/a} (direct): Donnez-moi un café ! (Give me a coffee!)",
          "{a}Conditional{/a} (polite): Je voudrais un café, s'il vous plaît. (I would like a coffee, please.)",
          "In a formal or professional context, always prefer the conditional.",
        ],
        ar: [
          "{a}الأمر{/a} (مباشر): Donnez-moi un café ! (أعطني قهوة!)",
          "{a}الشرطي{/a} (مؤدّب): Je voudrais un café, s'il vous plaît. (أريد قهوة من فضلك.)",
          "في السياق الرسمي أو المهني، فضّل دائماً الشرطي.",
        ],
        fa: [
          "{a}امری{/a} (مستقیم): Donnez-moi un café ! (به من یک قهوه بده!)",
          "{a}شرطی{/a} (مودبانه): Je voudrais un café, s'il vous plaît. (یک قهوه می‌خواهم، لطفاً.)",
          "در بافت رسمی یا حرفه‌ای، همیشه شرطی را ترجیح دهید.",
        ],
        ti: [
          "{a}ትእዛዝ{/a} (ቀጥታዊ)፦ Donnez-moi un café ! (ሓደ ቡን ሃበኒ!)",
          "{a}ቅድመ-ኩነታዊ{/a} (ኣኽብሮታዊ)፦ Je voudrais un café, s'il vous plaît. (በጃኹም ሓደ ቡን እደሊ።)",
          "ኣብ ወግዓዊ ወይ ሞያዊ ኩነት፣ ኩሉ ግዜ ንቅድመ-ኩነታዊ ኣቐድሞ።",
        ],
        uk: [
          "{a}Наказовий{/a} (прямий): Donnez-moi un café ! (Дайте мені каву!)",
          "{a}Умовний{/a} (ввічливий): Je voudrais un café, s'il vous plaît. (Я хотів би каву, будь ласка.)",
          "У формальному чи професійному контексті завжди надавайте перевагу умовному способу.",
        ],
      },
    },
  ],
  exercises: [],
};
