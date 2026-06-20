import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L02: ConjLesson = {
  slug: "a2-conj-l02",
  code: "R2.5",
  level: "A2",
  title: "Les verbes en -ir (2e et 3e groupes)",
  theory: [
    { type: "heading", text: "Deux groupes de verbes en -ir", trans: { en: "Two groups of -ir verbs", ar: "مجموعتان من أفعال -ir", fa: "دو گروه از افعال -ir", ti: "ክልተ ጉጅለታት ናይ -ir ግሲታት", uk: "Дві групи дієслів на -ir" } },
    {
      type: "grid",
      headers: ["Groupe", "Caractéristique", "Exemples"],
      boldFirstCol: true,
      rows: [
        ["{a}2e groupe{/a}", "Radical + {a}-iss-{/a} aux formes plurielles", "finir, choisir, grandir, rougir"],
        ["{a}3e groupe{/a}", "Radical court ou irrégulier", "partir, sortir, dormir, ouvrir, venir"],
      ],
      transHeaders: {
        en: ["Group", "Feature", "Examples"],
        ar: ["المجموعة", "الخاصية", "أمثلة"],
        fa: ["گروه", "ویژگی", "مثال‌ها"],
        ti: ["ጉጅለ", "ባህሪ", "ኣብነታት"],
        uk: ["Група", "Особливість", "Приклади"],
      },
      transRows: {
        en: [["{a}2nd group{/a}", "Stem + {a}-iss-{/a} in the plural forms", "finir, choisir, grandir, rougir"], ["{a}3rd group{/a}", "Short or irregular stem", "partir, sortir, dormir, ouvrir, venir"]],
        ar: [["{a}المجموعة 2{/a}", "الجذر + {a}-iss-{/a} في صيغ الجمع", "finir, choisir, grandir, rougir"], ["{a}المجموعة 3{/a}", "جذر قصير أو شاذ", "partir, sortir, dormir, ouvrir, venir"]],
        fa: [["{a}گروه دوم{/a}", "ریشه + {a}-iss-{/a} در صورت‌های جمع", "finir, choisir, grandir, rougir"], ["{a}گروه سوم{/a}", "ریشه‌ی کوتاه یا بی‌قاعده", "partir, sortir, dormir, ouvrir, venir"]],
        ti: [["{a}2ይ ጉጅለ{/a}", "መሰረት + {a}-iss-{/a} ኣብ ብዙሕ ቅርጽታት", "finir, choisir, grandir, rougir"], ["{a}3ይ ጉጅለ{/a}", "ሓጺር ወይ ዘይስሩዕ መሰረት", "partir, sortir, dormir, ouvrir, venir"]],
        uk: [["{a}2-га група{/a}", "Основа + {a}-iss-{/a} у формах множини", "finir, choisir, grandir, rougir"], ["{a}3-тя група{/a}", "Коротка або неправильна основа", "partir, sortir, dormir, ouvrir, venir"]],
      },
    },
    { type: "heading", text: "2e groupe : finir", sub: true, accent: true, trans: { en: "2nd group: finir", ar: "المجموعة 2: finir", fa: "گروه دوم: finir", ti: "2ይ ጉጅለ፦ finir", uk: "2-га група: finir" } },
    {
      type: "table",
      tables: [
        {
          verb: "finir (2e groupe)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "finis" },
            { pronoun: "tu", form: "finis" },
            { pronoun: "il / elle / on", form: "finit" },
            { pronoun: "nous", form: "finissons" },
            { pronoun: "vous", form: "finissez" },
            { pronoun: "ils / elles", form: "finissent" },
          ],
        },
      ],
    },
    {
      type: "plain_list",
      items: [
        "2e groupe : ajouter {a}-iss-{/a} pour nous/vous/ils → finissons, finissez, finissent.",
        "Autres verbes 2e groupe : choisir, obéir, réussir, grandir, rougir, maigrir, grossir.",
      ],
      transItems: {
        en: ["2nd group: add {a}-iss-{/a} for nous/vous/ils → finissons, finissez, finissent.", "Other 2nd group verbs: choisir, obéir, réussir, grandir, rougir, maigrir, grossir."],
        ar: ["المجموعة 2: أضف {a}-iss-{/a} لـ nous/vous/ils ← finissons, finissez, finissent.", "أفعال أخرى من المجموعة 2: choisir, obéir, réussir, grandir, rougir, maigrir, grossir."],
        fa: ["گروه دوم: افزودن {a}-iss-{/a} برای nous/vous/ils ← finissons, finissez, finissent.", "افعال دیگر گروه دوم: choisir, obéir, réussir, grandir, rougir, maigrir, grossir."],
        ti: ["2ይ ጉጅለ፦ ንnous/vous/ils {a}-iss-{/a} ወስኽ → finissons, finissez, finissent።", "ካልኦት ናይ 2ይ ጉጅለ ግሲታት፦ choisir, obéir, réussir, grandir, rougir, maigrir, grossir።"],
        uk: ["2-га група: додати {a}-iss-{/a} для nous/vous/ils → finissons, finissez, finissent.", "Інші дієслова 2-ї групи: choisir, obéir, réussir, grandir, rougir, maigrir, grossir."],
      },
    },
    { type: "heading", text: "3e groupe : verbes en -ir irréguliers", sub: true, accent: true, trans: { en: "3rd group: irregular -ir verbs", ar: "المجموعة 3: أفعال -ir الشاذة", fa: "گروه سوم: افعال بی‌قاعده‌ی -ir", ti: "3ይ ጉጅለ፦ ዘይስሩዓት ናይ -ir ግሲታት", uk: "3-тя група: неправильні дієслова на -ir" } },
    {
      type: "table",
      tables: [
        {
          verb: "partir (pars / partons)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "pars" },
            { pronoun: "tu", form: "pars" },
            { pronoun: "il / elle / on", form: "part" },
            { pronoun: "nous", form: "partons" },
            { pronoun: "vous", form: "partez" },
            { pronoun: "ils / elles", form: "partent" },
          ],
        },
        {
          verb: "dormir (dors / dormons)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "dors" },
            { pronoun: "tu", form: "dors" },
            { pronoun: "il / elle / on", form: "dort" },
            { pronoun: "nous", form: "dormons" },
            { pronoun: "vous", form: "dormez" },
            { pronoun: "ils / elles", form: "dorment" },
          ],
        },
        {
          verb: "ouvrir (comme les -er !)",
          accentForms: true,
          rows: [
            { pronoun: "j'", form: "ouvre" },
            { pronoun: "tu", form: "ouvres" },
            { pronoun: "il / elle / on", form: "ouvre" },
            { pronoun: "nous", form: "ouvrons" },
            { pronoun: "vous", form: "ouvrez" },
            { pronoun: "ils / elles", form: "ouvrent" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Attention : ouvrir, couvrir, offrir, souffrir",
      items: [
        "Ces verbes en -ir se conjuguent comme des verbes en {a}-er{/a} (terminaisons -e, -es, -e…).",
        "j'ouvre, tu ouvres, il ouvre — comme je parle, tu parles, il parle.",
      ],
      noBulletItems: [0],
      transLabel: { en: "Warning: ouvrir, couvrir, offrir, souffrir", ar: "انتباه: ouvrir, couvrir, offrir, souffrir", fa: "توجه: ouvrir, couvrir, offrir, souffrir", ti: "ኣቓልቦ፦ ouvrir, couvrir, offrir, souffrir", uk: "Увага: ouvrir, couvrir, offrir, souffrir" },
      transItems: {
        en: ["These -ir verbs are conjugated like {a}-er{/a} verbs (endings -e, -es, -e…).", "j'ouvre, tu ouvres, il ouvre — like je parle, tu parles, il parle."],
        ar: ["هذه الأفعال المنتهية بـ -ir تُصرّف مثل أفعال {a}-er{/a} (النهايات -e, -es, -e…).", "j'ouvre, tu ouvres, il ouvre — مثل je parle, tu parles, il parle."],
        fa: ["این افعال -ir مانند افعال {a}-er{/a} صرف می‌شوند (پایانه‌های -e, -es, -e…).", "j'ouvre, tu ouvres, il ouvre — مانند je parle, tu parles, il parle."],
        ti: ["እዞም ናይ -ir ግሲታት ከም ናይ {a}-er{/a} ግሲታት ይጻረዩ (መወዳእታታት -e, -es, -e…)።", "j'ouvre, tu ouvres, il ouvre — ከም je parle, tu parles, il parle።"],
        uk: ["Ці дієслова на -ir відмінюються як дієслова на {a}-er{/a} (закінчення -e, -es, -e…).", "j'ouvre, tu ouvres, il ouvre — як je parle, tu parles, il parle."],
      },
    },
  ],
  exercises: [],
};
