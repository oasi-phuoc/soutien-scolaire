import type { GrammarLesson } from "../../grammar-data";

/** G16.4 — Le subjonctif présent, enrichi avec G19.32 */
export const A1_GR_SUBJONCTIF_PRESENT: GrammarLesson = {
  slug: "a1-gr-subjonctif-present",
  code: "G16.4",
  level: "A1",
  title: "Le subjonctif présent",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Mode verbal souvent après un verbe ou une expression + {a}que{/a}, pour exprimer une subjectivité.",
        "Indicatif (fait) : Aucun vaccin n'est nécessaire.",
        "Subjonctif (réaction) : Je suis surpris qu'aucun vaccin ne soit nécessaire.",
        "Exemple : Il faut que nous prenions un permis international ; j'étais surpris qu'aucun vaccin ne soit nécessaire.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formation régulière",
    },
    {
      type: "text",
      items: [
        "Radical du {a}ils{/a} du présent + {a}-e, -es, -e, -ions, -iez, -ent{/a}.",
        "Si {a}nous/vous{/a} ont un autre radical à l'indicatif, on le garde au subjonctif pour {a}nous/vous{/a} (deux radicaux).",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["", "parler", "prendre"],
      boldFirstCol: true,
      rows: [
        ["que je / j'", "parle", "prenne"],
        ["que tu", "parles", "prennes"],
        ["qu'il / elle / on", "parle", "prenne"],
        ["que nous", "parlions", "prenions"],
        ["que vous", "parliez", "preniez"],
        ["qu'ils / elles", "parlent", "prennent"],
      ],
    },
    {
      type: "heading",
      text: "Conjugaisons irrégulières",
    },
    {
      type: "grid",
      headers: ["", "être", "avoir", "aller", "faire", "pouvoir", "vouloir", "savoir"],
      boldFirstCol: true,
      rows: [
        ["je / j'", "sois", "aie", "aille", "fasse", "puisse", "veuille", "sache"],
        ["tu", "sois", "aies", "ailles", "fasses", "puisses", "veuilles", "saches"],
        ["il / elle / on", "soit", "ait", "aille", "fasse", "puisse", "veuille", "sache"],
        ["nous", "soyons", "ayons", "allions", "fassions", "puissions", "voulions", "sachions"],
        ["vous", "soyez", "ayez", "alliez", "fassiez", "puissiez", "vouliez", "sachiez"],
        ["ils / elles", "soient", "aient", "aillent", "fassent", "puissent", "veuillent", "sachent"],
      ],
    },
    {
      type: "heading",
      text: "Des utilisations du subjonctif",
    },
    {
      type: "text",
      label: "Nécessité / obligation",
      items: [
        "Il faut que nous prenions contact… ; Il est nécessaire que les objets soient bien protégés.",
      ],
    },
    {
      type: "text",
      label: "Sentiment",
      items: [
        "Je suis heureux que nous déménagions. ; C'est dommage que vous ne puissiez pas venir. ; Nous avons peur qu'elle se sente seule.",
      ],
    },
    {
      type: "text",
      label: "Jugement / appréciation",
      items: [
        "C'est bien qu'il ait une promotion. ; Je trouve incroyable qu'il prenne sa décision si rapidement.",
      ],
    },
    {
      type: "text",
      label: "Volonté / souhait",
      items: [
        "Je veux que tout soit prêt. ; J'aimerais que vous soyez présents.",
      ],
    },
    {
      type: "text",
      label: "Possibilité",
      items: [
        "Il est possible que nous ayons une augmentation. ; Il se peut qu'elle ne veuille pas.",
      ],
    },
    {
      type: "note",
      text: "Pas de subjonctif après {a}espérer{/a}. → J'espère que vous aimez votre nouvel appartement.",
    },
    {
      type: "note",
      text: "Subjonctif seulement si les sujets sont différents ; sinon infinitif. → Je souhaite partir. (pas : Je souhaite que je parte.)",
    },
    {
      type: "note",
      text: "Aussi après certaines conjonctions. → Je l'appelle avant qu'il parte.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      text: "Ne pas confondre {a}avoir{/a} et {a}aller{/a} : que tu aies un visa ≠ que tu ailles au consulat.",
    },
    {
      type: "heading",
      text: "Le subjonctif présent",
      trans: { en: "The present subjunctive", ar: "الفعل المنصوب (سوبجونكتيف)", fa: "وجه التزامی حال", ti: "ህሉው ሰብጄክቲቭ", uk: "Теперішній суб'юнктив" },
    },
    {
      type: "text",
      text: "Formation : radical de {a}ils{/a} au présent + terminaisons {a}-e / -es / -e / -ions / -iez / -ent{/a}",
      transText: {
        en: "Formation: {a}ils{/a} stem in the present + endings {a}-e / -es / -e / -ions / -iez / -ent{/a}",
        ar: "التكوين: جذر {a}ils{/a} في المضارع + النهايات {a}-e / -es / -e / -ions / -iez / -ent{/a}",
        fa: "ساختار: ریشه‌ی {a}ils{/a} در حال + پایانه‌های {a}-e / -es / -e / -ions / -iez / -ent{/a}",
        ti: "ኣፈጣጥራ፦ መሰረት {a}ils{/a} ኣብ ህሉው + መወዳእታታት {a}-e / -es / -e / -ions / -iez / -ent{/a}",
        uk: "Утворення: основа {a}ils{/a} у теперішньому часі + закінчення {a}-e / -es / -e / -ions / -iez / -ent{/a}",
      },
      items: [
        "Exemple : ils parl{a}ent{/a} → que je parl{a}e{/a}, que tu parl{a}es{/a}…",
      ],
      transItems: {
        en: [
          "Example: ils parl{a}ent{/a} → que je parl{a}e{/a}, que tu parl{a}es{/a}…",
        ],
        ar: [
          "مثال: ils parl{a}ent{/a} → que je parl{a}e{/a}, que tu parl{a}es{/a}…",
        ],
        fa: [
          "مثال: ils parl{a}ent{/a} → que je parl{a}e{/a}, que tu parl{a}es{/a}…",
        ],
        ti: [
          "ኣብነት፦ ils parl{a}ent{/a} → que je parl{a}e{/a}, que tu parl{a}es{/a}…",
        ],
        uk: [
          "Приклад: ils parl{a}ent{/a} → que je parl{a}e{/a}, que tu parl{a}es{/a}…",
        ],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (subjonctif présent)",
          accentForms: true,
          rows: [
            { pronoun: "que je", form: "parle" },
            { pronoun: "que tu", form: "parles" },
            { pronoun: "qu'il / elle / on", form: "parle" },
            { pronoun: "que nous", form: "parlions" },
            { pronoun: "que vous", form: "parliez" },
            { pronoun: "qu'ils / elles", form: "parlent" },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Verbes irréguliers",
      sub: true,
      accent: true,
      trans: { en: "Irregular verbs", ar: "الأفعال الشاذة", fa: "افعال بی‌قاعده", ti: "ዘይስሩዓት ግሲታት", uk: "Неправильні дієслова" },
    },
    {
      type: "grid",
      headers: ["Infinitif", "que je…", "que nous…"],
      boldFirstCol: true,
      rows: [
        ["être", "{a}sois{/a}", "{a}soyons{/a}"],
        ["avoir", "{a}aie{/a}", "{a}ayons{/a}"],
        ["aller", "{a}aille{/a}", "{a}allions{/a}"],
        ["faire", "{a}fasse{/a}", "{a}fassions{/a}"],
        ["pouvoir", "{a}puisse{/a}", "{a}puissions{/a}"],
        ["savoir", "{a}sache{/a}", "{a}sachions{/a}"],
        ["vouloir", "{a}veuille{/a}", "{a}voulions{/a}"],
        ["venir", "{a}vienne{/a}", "{a}venions{/a}"],
      ],
      transHeaders: {
        en: ["Infinitive", "que je…", "que nous…"],
        ar: ["المصدر", "que je…", "que nous…"],
        fa: ["مصدر", "que je…", "que nous…"],
        ti: ["ኢንፊኒቲቭ", "que je…", "que nous…"],
        uk: ["Інфінітив", "que je…", "que nous…"],
      },
    },
    {
      type: "heading",
      text: "Emplois du subjonctif",
      trans: { en: "Uses of the subjunctive", ar: "استخدامات الفعل المنصوب", fa: "کاربردهای وجه التزامی", ti: "ኣጠቓቕማ ሰብጄክቲቭ", uk: "Вживання суб'юнктива" },
    },
    {
      type: "text",
      text: "Le subjonctif s'utilise {a}après que{/a} et exprime un doute, une volonté, un sentiment ou une nécessité.",
      transText: {
        en: "The subjunctive is used {a}after que{/a} and expresses doubt, will, feeling or necessity.",
        ar: "يُستخدم الفعل المنصوب {a}بعد que{/a} ويعبّر عن شك أو إرادة أو مشاعر أو ضرورة.",
        fa: "وجه التزامی {a}بعد از que{/a} به‌کار می‌رود و شک، اراده، احساس یا ضرورت را بیان می‌کند.",
        ti: "ሰብጄክቲቭ {a}ድሕሪ que{/a} ይጥቀም፣ ጥርጣሬ፣ ድሌት፣ ስሜት ወይ ኣድላይነት የርኢ።",
        uk: "Суб'юнктив вживається {a}після que{/a} і виражає сумнів, бажання, почуття або необхідність.",
      },
    },
    {
      type: "grid",
      headers: ["Déclencheur", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["vouloir / souhaiter / aimer que", "Je veux qu'il {a}vienne{/a}."],
        ["il faut que / il est nécessaire que", "Il faut que tu {a}finisses{/a} ton travail."],
        ["douter / ne pas croire que", "Je doute qu'il {a}ait{/a} raison."],
        ["être content / triste / surpris que", "Je suis content que tu {a}sois{/a} là."],
        ["bien que / quoique (concession)", "Bien qu'il {a}fasse{/a} froid, elle sort."],
        ["pour que / afin que (but)", "Je t'explique pour que tu {a}comprennes{/a}."],
        ["avant que (temps)", "Pars avant qu'il {a}arrive{/a}."],
        ["à moins que (condition négative)", "Je viendrai à moins qu'il ne {a}pleuve{/a}."],
      ],
      transHeaders: {
        en: ["Trigger", "Example"],
        ar: ["المُفعِّل", "مثال"],
        fa: ["محرک", "مثال"],
        ti: ["ኣስጋጋሪ", "ኣብነት"],
        uk: ["Тригер", "Приклад"],
      },
      transRows: {
        en: [
          ["vouloir / souhaiter / aimer que (want / wish / like that)", "Je veux qu'il {a}vienne{/a}. (I want him to come.)"],
          ["il faut que / il est nécessaire que (it is necessary that)", "Il faut que tu {a}finisses{/a} ton travail. (You must finish your work.)"],
          ["douter / ne pas croire que (to doubt / not believe that)", "Je doute qu'il {a}ait{/a} raison. (I doubt he is right.)"],
          ["être content / triste / surpris que (to be glad / sad / surprised that)", "Je suis content que tu {a}sois{/a} là. (I am glad you are here.)"],
          ["bien que / quoique (even though)", "Bien qu'il {a}fasse{/a} froid, elle sort. (Even though it is cold, she goes out.)"],
          ["pour que / afin que (so that)", "Je t'explique pour que tu {a}comprennes{/a}. (I explain so that you understand.)"],
          ["avant que (before)", "Pars avant qu'il {a}arrive{/a}. (Leave before he arrives.)"],
          ["à moins que (unless)", "Je viendrai à moins qu'il ne {a}pleuve{/a}. (I will come unless it rains.)"],
        ],
        ar: [
          ["vouloir / souhaiter / aimer que (أريد / أتمنى / أحب أن)", "Je veux qu'il {a}vienne{/a}. (أريده أن يأتي.)"],
          ["il faut que / il est nécessaire que (يجب أن)", "Il faut que tu {a}finisses{/a} ton travail. (يجب أن تنهي عملك.)"],
          ["douter / ne pas croire que (أشك / لا أظن أن)", "Je doute qu'il {a}ait{/a} raison. (أشك في أنه على صواب.)"],
          ["être content / triste / surpris que (يسعدني / يحزنني / يفاجئني أن)", "Je suis content que tu {a}sois{/a} là. (يسعدني أنك هنا.)"],
          ["bien que / quoique (رغم أن)", "Bien qu'il {a}fasse{/a} froid, elle sort. (رغم البرد، تخرج.)"],
          ["pour que / afin que (حتى / لكي)", "Je t'explique pour que tu {a}comprennes{/a}. (أشرح لك حتى تفهم.)"],
          ["avant que (قبل أن)", "Pars avant qu'il {a}arrive{/a}. (اذهب قبل أن يصل.)"],
          ["à moins que (ما لم)", "Je viendrai à moins qu'il ne {a}pleuve{/a}. (سآتي ما لم تمطر السماء.)"],
        ],
        fa: [
          ["vouloir / souhaiter / aimer que (می‌خواهم / آرزو دارم / دوست دارم که)", "Je veux qu'il {a}vienne{/a}. (می‌خواهم او بیاید.)"],
          ["il faut que / il est nécessaire que (لازم است که)", "Il faut que tu {a}finisses{/a} ton travail. (باید کارت را تمام کنی.)"],
          ["douter / ne pas croire que (شک دارم / باور ندارم که)", "Je doute qu'il {a}ait{/a} raison. (شک دارم او حق داشته باشد.)"],
          ["être content / triste / surpris que (خوشحالم / ناراحتم / متعجبم که)", "Je suis content que tu {a}sois{/a} là. (خوشحالم که اینجایی.)"],
          ["bien que / quoique (اگرچه)", "Bien qu'il {a}fasse{/a} froid, elle sort. (اگرچه سرد است، بیرون می‌رود.)"],
          ["pour que / afin que (تا اینکه)", "Je t'explique pour que tu {a}comprennes{/a}. (توضیح می‌دهم تا بفهمی.)"],
          ["avant que (قبل از اینکه)", "Pars avant qu'il {a}arrive{/a}. (قبل از اینکه او برسد برو.)"],
          ["à moins que (مگر اینکه)", "Je viendrai à moins qu'il ne {a}pleuve{/a}. (می‌آیم مگر اینکه باران ببارد.)"],
        ],
        ti: [
          ["vouloir / souhaiter / aimer que (ደሊ / ምነዋ / ፈቲዌ ክኸውን)", "Je veux qu'il {a}vienne{/a}. (ክመጽእ ደሊ.)"],
          ["il faut que / il est nécessaire que (ኣድላዪ እዩ ከ-)", "Il faut que tu {a}finisses{/a} ton travail. (ስርሕካ ክትዛዝም ኣለካ.)"],
          ["douter / ne pas croire que (ይጠርጥር / ኣይኣምንን ከ-)", "Je doute qu'il {a}ait{/a} raison. (ቅኑዕ ምዃኑ ይጠርጥሮ.)"],
          ["être content / triste / surpris que (ሕጉስ / ሕዙን / ዝደነቀ ከ-)", "Je suis content que tu {a}sois{/a} là. (ኣሎኻ ስለ ዘሎኻ ሕጉስ እየ.)"],
          ["bien que / quoique (ኣምሲ)", "Bien qu'il {a}fasse{/a} froid, elle sort. (ምሕቓቕ ምስ ዝህሉ ከሎ፣ ትወጽእ.)"],
          ["pour que / afin que (ምእንቲ ከ-)", "Je t'explique pour que tu {a}comprennes{/a}. (ምእንቲ ክትርደኦ ይሓብረካ.)"],
          ["avant que (ቅድሚ ከ-)", "Pars avant qu'il {a}arrive{/a}. (ቅድሚ ምምጽኡ ኪድ.)"],
          ["à moins que (ተወሲኹ ዘይ-)", "Je viendrai à moins qu'il ne {a}pleuve{/a}. (ዘይደሙ እንተ ዘይሃለወ ክመጽእ እየ.)"],
        ],
        uk: [
          ["vouloir / souhaiter / aimer que (хотіти / бажати / любити щоб)", "Je veux qu'il {a}vienne{/a}. (Я хочу, щоб він прийшов.)"],
          ["il faut que / il est nécessaire que (потрібно, щоб)", "Il faut que tu {a}finisses{/a} ton travail. (Тобі треба закінчити роботу.)"],
          ["douter / ne pas croire que (сумніватися / не вірити, що)", "Je doute qu'il {a}ait{/a} raison. (Я сумніваюся, що він правий.)"],
          ["être content / triste / surpris que (радіти / сумувати / дивуватися, що)", "Je suis content que tu {a}sois{/a} là. (Я радий, що ти тут.)"],
          ["bien que / quoique (хоча)", "Bien qu'il {a}fasse{/a} froid, elle sort. (Хоча холодно, вона виходить.)"],
          ["pour que / afin que (щоб)", "Je t'explique pour que tu {a}comprennes{/a}. (Я пояснюю, щоб ти зрозумів.)"],
          ["avant que (перш ніж)", "Pars avant qu'il {a}arrive{/a}. (Іди, перш ніж він прийде.)"],
          ["à moins que (якщо тільки не)", "Je viendrai à moins qu'il ne {a}pleuve{/a}. (Я прийду, якщо тільки не піде дощ.)"],
        ],
      },
    },
    {
      type: "text",
      label: "Indicatif ou subjonctif ?",
      items: [
        "{a}Indicatif{/a} → certitude, réalité : Je sais qu'il {a}vient{/a}. / Je pense qu'il {a}a{/a} raison.",
        "{a}Subjonctif{/a} → doute, volonté, sentiment : Je doute qu'il {a}vienne{/a}. / Je veux qu'il {a}soit{/a} là.",
        "Après {a}espérer que{/a} : indicatif. J'espère qu'il {a}viendra{/a}. ✓",
      ],
      transLabel: { en: "Indicative or subjunctive?", ar: "المضارع أم المنصوب؟", fa: "اخباری یا التزامی؟", ti: "ኢንዲካቲቭ ወይ ሰብጄክቲቭ?", uk: "Дійсний чи умовний?" },
      transItems: {
        en: ["{a}Indicative{/a} → certainty, reality: Je sais qu'il {a}vient{/a}. / Je pense qu'il {a}a{/a} raison. (I know he is coming. / I think he is right.)", "{a}Subjunctive{/a} → doubt, will, feeling: Je doute qu'il {a}vienne{/a}. / Je veux qu'il {a}soit{/a} là. (I doubt he will come. / I want him to be here.)", "After {a}espérer que{/a}: indicative. J'espère qu'il {a}viendra{/a}. ✓ (I hope he will come.)"],
        ar: ["{a}الإخباري{/a} → يقين وواقع: Je sais qu'il {a}vient{/a}. / Je pense qu'il {a}a{/a} raison. (أعلم أنه قادم. / أظن أنه على صواب.)", "{a}المنصوب{/a} → شك وإرادة وشعور: Je doute qu'il {a}vienne{/a}. / Je veux qu'il {a}soit{/a} là. (أشك في قدومه. / أريده أن يكون هنا.)", "بعد {a}espérer que{/a}: الإخباري. J'espère qu'il {a}viendra{/a}. ✓ (أتمنى أن يأتي.)"],
        fa: ["{a}اخباری{/a} → یقین، واقعیت: Je sais qu'il {a}vient{/a}. / Je pense qu'il {a}a{/a} raison. (می‌دانم که می‌آید. / فکر می‌کنم حق دارد.)", "{a}التزامی{/a} → شک، اراده، احساس: Je doute qu'il {a}vienne{/a}. / Je veux qu'il {a}soit{/a} là. (شک دارم که بیاید. / می‌خواهم آنجا باشد.)", "بعد از {a}espérer que{/a}: اخباری. J'espère qu'il {a}viendra{/a}. ✓ (امیدوارم بیاید.)"],
        ti: ["{a}ኢንዲካቲቭ{/a} → ርግጸኛነት፣ ሓቂ፦ Je sais qu'il {a}vient{/a}. / Je pense qu'il {a}a{/a} raison. (ክመጽእ ምዃኑ ፈሊጠ። / ቅኑዕ ምዃኑ ይሓስብ ኣለኹ.)", "{a}ሰብጄክቲቭ{/a} → ጥርጣሬ፣ ድሌት፣ ስሜት፦ Je doute qu'il {a}vienne{/a}. / Je veux qu'il {a}soit{/a} là. (ክመጽእ ምዃኑ ይጠርጥሮ። / ኣሎ ክኸውን ደሊ.)", "ድሕሪ {a}espérer que{/a}፦ ኢንዲካቲቭ. J'espère qu'il {a}viendra{/a}. ✓ (ክመጽእ ተስፋ ይገብር.)"],
        uk: ["{a}Дійсний{/a} → впевненість, реальність: Je sais qu'il {a}vient{/a}. / Je pense qu'il {a}a{/a} raison. (Я знаю, що він іде. / Я думаю, він правий.)", "{a}Суб'юнктив{/a} → сумнів, бажання, почуття: Je doute qu'il {a}vienne{/a}. / Je veux qu'il {a}soit{/a} là. (Я сумніваюся, що він прийде. / Я хочу, щоб він був тут.)", "Після {a}espérer que{/a}: дійсний. J'espère qu'il {a}viendra{/a}. ✓ (Я сподіваюся, що він прийде.)"],
      },
    },
  ],
  exercises: [],
};
