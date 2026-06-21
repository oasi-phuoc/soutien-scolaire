import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_CONDITIONNEL: GrammarLesson = {
  slug: "a2-gr-conditionnel",
  code: "R6.2",
  level: "A2",
  title: "Le conditionnel",
  theory: [
    {
      type: "heading",
      text: "Le conditionnel présent",
      trans: { en: "The present conditional", ar: "الشرطي الحاضر", fa: "وجه شرطی حال", ti: "ህሉው ቅድመ-ኩነታዊ", uk: "Теперішній умовний спосіб" },
    },
    {
      type: "plain_list",
      items: [
        "Formation : {a}infinitif (ou base du futur){/a} + terminaisons de l'imparfait",
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
      ],
      transItems: {
        en: ["Formation: {a}infinitive (or future stem){/a} + imperfect endings", "Endings: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
        ar: ["التكوين: {a}المصدر (أو جذر المستقبل){/a} + نهايات الماضي الناقص", "النهايات: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
        fa: ["ساختار: {a}مصدر (یا ریشه‌ی آینده){/a} + پایانه‌های ماضی استمراری", "پایانه‌ها: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
        ti: ["ኣፈጣጥራ፦ {a}ኢንፊኒቲቭ (ወይ መሰረት መጻኢ){/a} + መወዳእታታት ሕሉፍ ቀጻሊ", "መወዳእታታት፦ {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
        uk: ["Утворення: {a}інфінітив (або основа майбутнього){/a} + закінчення imparfait", "Закінчення: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}"],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (conditionnel présent)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "parlerais" },
            { pronoun: "tu", form: "parlerais" },
            { pronoun: "il / elle / on", form: "parlerait" },
            { pronoun: "nous", form: "parlerions" },
            { pronoun: "vous", form: "parleriez" },
            { pronoun: "ils / elles", form: "parleraient" },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Bases irrégulières",
      sub: true,
      accent: true,
      trans: { en: "Irregular stems", ar: "الجذور الشاذة", fa: "ریشه‌های بی‌قاعده", ti: "ዘይስሩዓት መሰረታት", uk: "Неправильні основи" },
    },
    {
      type: "grid",
      headers: ["Infinitif", "Base", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["être", "{a}ser-{/a}", "je serais"],
        ["avoir", "{a}aur-{/a}", "j'aurais"],
        ["aller", "{a}ir-{/a}", "j'irais"],
        ["faire", "{a}fer-{/a}", "je ferais"],
        ["pouvoir", "{a}pourr-{/a}", "je pourrais"],
        ["vouloir", "{a}voudr-{/a}", "je voudrais"],
        ["venir", "{a}viendr-{/a}", "je viendrais"],
        ["devoir", "{a}devr-{/a}", "je devrais"],
        ["savoir", "{a}saur-{/a}", "je saurais"],
      ],
      transHeaders: {
        en: ["Infinitive", "Stem", "Example"],
        ar: ["المصدر", "الجذر", "مثال"],
        fa: ["مصدر", "ریشه", "مثال"],
        ti: ["ኢንፊኒቲቭ", "መሰረት", "ኣብነት"],
        uk: ["Інфінітив", "Основа", "Приклад"],
      },
    },
    {
      type: "heading",
      text: "Le conditionnel passé",
      trans: { en: "The past conditional", ar: "الشرطي الماضي", fa: "وجه شرطی گذشته", ti: "ዝሓለፈ ቅድመ-ኩነታዊ", uk: "Минулий умовний спосіб" },
    },
    {
      type: "plain_list",
      items: [
        "Formation : {a}avoir ou être au conditionnel présent{/a} + participe passé",
        "Même choix d'auxiliaire qu'au passé composé.",
      ],
      transItems: {
        en: ["Formation: {a}avoir or être in the present conditional{/a} + past participle", "Same auxiliary choice as with the passé composé."],
        ar: ["التكوين: {a}avoir أو être بالشرطي الحاضر{/a} + المتحوّل الماضي", "نفس اختيار الفعل المساعد كما في الماضي المركّب."],
        fa: ["ساختار: {a}avoir یا être در وجه شرطی حال{/a} + اسم مفعول گذشته", "همان انتخاب فعل کمکی مثل گذشته‌ی مرکب."],
        ti: ["ኣፈጣጥራ፦ {a}avoir ወይ être ኣብ ህሉው ቅድመ-ኩነታዊ{/a} + ዝሓለፈ ተሳታፊ", "ሓደ ኣይነት ምርጫ ናይ ሓጋዚ ዝበሃል ከም passé composé።"],
        uk: ["Утворення: {a}avoir або être у теперішньому умовному{/a} + дієприкметник минулого часу", "Той самий вибір допоміжного дієслова, що й у passé composé."],
      },
    },
    {
      type: "grid",
      headers: ["Verbe", "Conditionnel passé", "Sens"],
      boldFirstCol: true,
      rows: [
        ["parler", "j'{a}aurais parlé{/a}", "I would have spoken"],
        ["partir", "je {a}serais parti(e){/a}", "I would have left"],
        ["se lever", "je me {a}serais levé(e){/a}", "I would have got up"],
      ],
      transHeaders: {
        en: ["Verb", "Past conditional", "Meaning"],
        ar: ["الفعل", "الشرطي الماضي", "المعنى"],
        fa: ["فعل", "شرطی گذشته", "معنا"],
        ti: ["ግሲ", "ዝሓለፈ ቅድመ-ኩነታዊ", "ትርጉም"],
        uk: ["Дієслово", "Минулий умовний", "Значення"],
      },
    },
    {
      type: "heading",
      text: "Les phrases hypothétiques avec si",
      trans: { en: "Hypothetical sentences with si", ar: "الجمل الافتراضية مع si", fa: "جملات فرضی با si", ti: "ግምታዊ ዓረፍተ-ነገር ምስ si", uk: "Гіпотетичні речення з si" },
    },
    {
      type: "grid",
      headers: ["Type", "Si + …", "Résultat", "Exemple"],
      boldFirstCol: true,
      equalCols: true,
      rows: [
        ["Probable", "{a}présent{/a}", "futur simple", "Si tu viens, nous {a}irons{/a} au cinéma."],
        ["Improbable", "{a}imparfait{/a}", "conditionnel présent", "Si j'avais le temps, je {a}voyagerais{/a}."],
        ["Impossible (passé)", "{a}plus-que-parfait{/a}", "conditionnel passé", "Si j'avais étudié, j'{a}aurais réussi{/a}."],
      ],
      transHeaders: {
        en: ["Type", "Si + …", "Result", "Example"],
        ar: ["النوع", "si + …", "النتيجة", "مثال"],
        fa: ["نوع", "si + …", "نتیجه", "مثال"],
        ti: ["ዓይነት", "Si + …", "ውጽኢት", "ኣብነት"],
        uk: ["Тип", "Si + …", "Результат", "Приклад"],
      },
      transRows: {
        en: [
          ["Likely", "{a}present{/a}", "simple future", "Si tu viens, nous {a}irons{/a} au cinéma. (If you come, we will go to the cinema.)"],
          ["Unlikely", "{a}imperfect{/a}", "present conditional", "Si j'avais le temps, je {a}voyagerais{/a}. (If I had time, I would travel.)"],
          ["Impossible (past)", "{a}pluperfect{/a}", "past conditional", "Si j'avais étudié, j'{a}aurais réussi{/a}. (If I had studied, I would have succeeded.)"],
        ],
        ar: [
          ["محتمل", "{a}المضارع{/a}", "المستقبل البسيط", "Si tu viens, nous {a}irons{/a} au cinéma. (إذا جئت، سنذهب إلى السينما.)"],
          ["مستبعد", "{a}الماضي الناقص{/a}", "الشرطي الحاضر", "Si j'avais le temps, je {a}voyagerais{/a}. (لو كان لديّ وقت، كنت سأسافر.)"],
          ["مستحيل (ماضٍ)", "{a}الماضي التام{/a}", "الشرطي الماضي", "Si j'avais étudié, j'{a}aurais réussi{/a}. (لو درست، كنت لقد نجحت.)"],
        ],
        fa: [
          ["محتمل", "{a}حال{/a}", "آینده‌ی ساده", "Si tu viens, nous {a}irons{/a} au cinéma. (اگر بیایی، می‌رویم سینما.)"],
          ["بعید", "{a}ماضی استمراری{/a}", "شرطی حال", "Si j'avais le temps, je {a}voyagerais{/a}. (اگر وقت داشتم، سفر می‌کردم.)"],
          ["غیرممکن (گذشته)", "{a}ماضی بعید{/a}", "شرطی گذشته", "Si j'avais étudié, j'{a}aurais réussi{/a}. (اگر درس خوانده بودم، موفق می‌شدم.)"],
        ],
        ti: [
          ["ዝኽሰት", "{a}ህሉው{/a}", "ቀሊል መጻኢ", "Si tu viens, nous {a}irons{/a} au cinéma. (እንተ መጺእካ፣ ናብ ሲነማ ንኸይድ።)"],
          ["ዘይኽሰት", "{a}ሕሉፍ ቀጻሊ{/a}", "ህሉው ቅድመ-ኩነታዊ", "Si j'avais le temps, je {a}voyagerais{/a}. (ግዜ እንተዝህልወኒ፣ ምገሸኹ።)"],
          ["ዘይከኣለ (ሕሉፍ)", "{a}ዝሓለፈ ዝሰዓበ{/a}", "ዝሓለፈ ቅድመ-ኩነታዊ", "Si j'avais étudié, j'{a}aurais réussi{/a}. (እንተዝምሃርኩ ዝነበርኩ፣ ምዓወትኩ።)"],
        ],
        uk: [
          ["Ймовірне", "{a}теперішній{/a}", "майбутній простий", "Si tu viens, nous {a}irons{/a} au cinéma. (Якщо ти прийдеш, ми підемо в кіно.)"],
          ["Малоймовірне", "{a}imparfait{/a}", "теперішній умовний", "Si j'avais le temps, je {a}voyagerais{/a}. (Якби я мав час, я б подорожував.)"],
          ["Неможливе (минуле)", "{a}plus-que-parfait{/a}", "минулий умовний", "Si j'avais étudié, j'{a}aurais réussi{/a}. (Якби я вчився, я б досяг успіху.)"],
        ],
      },
    },
    {
      type: "highlight",
      label: "Règle clé",
      items: [
        "Jamais de conditionnel dans la proposition avec {a}si{/a}.",
        "Si + présent → futur ; Si + imparfait → conditionnel présent ; Si + plus-que-parfait → conditionnel passé.",
      ],
      transLabel: { en: "Key rule", ar: "القاعدة الأساسية", fa: "قانون کلیدی", ti: "ቀንዲ ሕጊ", uk: "Ключове правило" },
      transItems: {
        en: ["Never use the conditional in the clause with {a}si{/a}.", "Si + present → future; Si + imperfect → present conditional; Si + pluperfect → past conditional."],
        ar: ["لا تستخدم أبداً الشرطي في الجملة مع {a}si{/a}.", "si + المضارع → المستقبل؛ si + الماضي الناقص → الشرطي الحاضر؛ si + الماضي التام → الشرطي الماضي."],
        fa: ["هرگز از وجه شرطی در بند با {a}si{/a} استفاده نکنید.", "si + حال → آینده؛ si + ماضی استمراری → شرطی حال؛ si + ماضی بعید → شرطی گذشته."],
        ti: ["ኣብ ሓሳብ ምስ {a}si{/a} ቅድመ-ኩነታዊ ፈጺምካ ኣይትጠቀም።", "si + ህሉው → መጻኢ፤ si + ሕሉፍ ቀጻሊ → ህሉው ቅድመ-ኩነታዊ፤ si + ዝሓለፈ ዝሰዓበ → ዝሓለፈ ቅድመ-ኩነታዊ።"],
        uk: ["Ніколи не використовуйте умовний спосіб у реченні з {a}si{/a}.", "si + теперішній → майбутній; si + imparfait → теперішній умовний; si + plus-que-parfait → минулий умовний."],
      },
    },
  ],
  exercises: [],
};
