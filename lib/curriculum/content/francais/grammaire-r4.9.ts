import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L01: ConjLesson = {
  slug: "a2-conj-l01",
  code: "RX.9",
  level: "A2",
  title: "Les verbes en -er — révision et particularités",
  theory: [
    { type: "heading", text: "Révision : terminaisons des verbes en -er", trans: { en: "Review: endings of -er verbs", ar: "مراجعة: نهايات أفعال -er", fa: "مرور: پایانه‌های افعال -er", ti: "ምክለሳ፦ መወዳእታታት ናይ -er ግሲታት", uk: "Повторення: закінчення дієслів на -er" } },
    {
      type: "grid",
      headers: ["Pronom", "Terminaison", "Exemple (parler)"],
      boldFirstCol: true,
      transHeaders: {
        en: ["Pronoun", "Ending", "Example (parler)"],
        ar: ["الضمير", "النهاية", "مثال (parler)"],
        fa: ["ضمیر", "پایانه", "مثال (parler)"],
        ti: ["ጸጋ ቃል", "መወዳእታ", "ኣብነት (parler)"],
        uk: ["Займенник", "Закінчення", "Приклад (parler)"],
      },
      rows: [
        ["je", "{a}-e{/a}", "parl{a}e{/a}"],
        ["tu", "{a}-es{/a}", "parl{a}es{/a}"],
        ["il / elle / on", "{a}-e{/a}", "parl{a}e{/a}"],
        ["nous", "{a}-ons{/a}", "parl{a}ons{/a}"],
        ["vous", "{a}-ez{/a}", "parl{a}ez{/a}"],
        ["ils / elles", "{a}-ent{/a}", "parl{a}ent{/a}"],
      ],
    },
    { type: "heading", text: "Cas particuliers : orthographe", sub: true, accent: true, trans: { en: "Special cases: spelling", ar: "حالات خاصة: الإملاء", fa: "موارد ویژه: املا", ti: "ፍሉያት ጉዳያት፦ ኣጻሕፋ", uk: "Особливі випадки: правопис" } },
    {
      type: "grid",
      headers: ["Type de verbe", "Règle", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Verbes en {a}-ger{/a}", "Ajouter {a}e{/a} avant -ons (son [ʒ])", "nous mang{a}e{/a}ons"],
        ["Verbes en {a}-cer{/a}", "Remplacer c par {a}ç{/a} avant -ons", "nous commen{a}ç{/a}ons"],
      ],
      transHeaders: {
        en: ["Verb type", "Rule", "Example"],
        ar: ["نوع الفعل", "القاعدة", "مثال"],
        fa: ["نوع فعل", "قاعده", "مثال"],
        ti: ["ዓይነት ግሲ", "ሕጊ", "ኣብነት"],
        uk: ["Тип дієслова", "Правило", "Приклад"],
      },
      transRows: {
        en: [["Verbs in {a}-ger{/a}", "Add {a}e{/a} before -ons (sound [ʒ])", "nous mang{a}e{/a}ons"], ["Verbs in {a}-cer{/a}", "Replace c with {a}ç{/a} before -ons", "nous commen{a}ç{/a}ons"]],
        ar: [["الأفعال المنتهية بـ {a}-ger{/a}", "أضف {a}e{/a} قبل -ons (الصوت [ʒ])", "nous mang{a}e{/a}ons"], ["الأفعال المنتهية بـ {a}-cer{/a}", "استبدل c بـ {a}ç{/a} قبل -ons", "nous commen{a}ç{/a}ons"]],
        fa: [["افعال {a}-ger{/a}", "افزودن {a}e{/a} پیش از -ons (صدای [ʒ])", "nous mang{a}e{/a}ons"], ["افعال {a}-cer{/a}", "جایگزینی c با {a}ç{/a} پیش از -ons", "nous commen{a}ç{/a}ons"]],
        ti: [["ግሲታት ብ{a}-ger{/a}", "ቅድሚ -ons {a}e{/a} ወስኽ (ድምጺ [ʒ])", "nous mang{a}e{/a}ons"], ["ግሲታት ብ{a}-cer{/a}", "ቅድሚ -ons c ብ{a}ç{/a} ተክእ", "nous commen{a}ç{/a}ons"]],
        uk: [["Дієслова на {a}-ger{/a}", "Додати {a}e{/a} перед -ons (звук [ʒ])", "nous mang{a}e{/a}ons"], ["Дієслова на {a}-cer{/a}", "Замінити c на {a}ç{/a} перед -ons", "nous commen{a}ç{/a}ons"]],
      },
    },
    { type: "heading", text: "Verbes à deux bases (radical qui change)", sub: true, accent: true, trans: { en: "Two-stem verbs (the stem changes)", ar: "أفعال بجذرين (الجذر يتغير)", fa: "افعال دو ریشه‌ای (ریشه تغییر می‌کند)", ti: "ክልተ-መሰረት ግሲታት (እቲ መሰረት ይቕየር)", uk: "Дієслова з двома основами (основа змінюється)" } },
    {
      type: "table",
      tables: [
        {
          verb: "préférer — è / é",
          accentForms: true,
          rows: [
            { pronoun: "je / tu / il", form: "préfère" },
            { pronoun: "nous / vous", form: "préférons / préférez" },
            { pronoun: "ils / elles", form: "préfèrent" },
          ],
        },
        {
          verb: "appeler — ll / l",
          accentForms: true,
          rows: [
            { pronoun: "j' / tu / il", form: "appelle" },
            { pronoun: "nous / vous", form: "appelons / appelez" },
            { pronoun: "ils / elles", form: "appellent" },
          ],
        },
        {
          verb: "acheter — è / e",
          accentForms: true,
          rows: [
            { pronoun: "j' / tu / il", form: "achète" },
            { pronoun: "nous / vous", form: "achetons / achetez" },
            { pronoun: "ils / elles", form: "achètent" },
          ],
        },
        {
          verb: "payer — i / y (optionnel)",
          accentForms: true,
          rows: [
            { pronoun: "je / tu / il", form: "paie (ou paye)" },
            { pronoun: "nous / vous", form: "payons / payez" },
            { pronoun: "ils / elles", form: "paient (ou payent)" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Règle des deux bases",
      items: [
        "Le radical fort (avec accent ou consonne double) s'utilise avec {a}je, tu, il, ils{/a}.",
        "Le radical faible (forme originale) s'utilise avec {a}nous, vous{/a}.",
        "Cette alternance est régulière pour toute la famille de ces verbes.",
      ],
      transLabel: { en: "The two-stem rule", ar: "قاعدة الجذرين", fa: "قاعده‌ی دو ریشه", ti: "ሕጊ ናይ ክልተ መሰረት", uk: "Правило двох основ" },
      transItems: {
        en: ["The strong stem (with accent or double consonant) is used with {a}je, tu, il, ils{/a}.", "The weak stem (original form) is used with {a}nous, vous{/a}.", "This alternation is regular for the whole family of these verbs."],
        ar: ["الجذر القوي (بحركة أو حرف ساكن مزدوج) يُستخدم مع {a}je, tu, il, ils{/a}.", "الجذر الضعيف (الشكل الأصلي) يُستخدم مع {a}nous, vous{/a}.", "هذا التناوب منتظم لكل عائلة هذه الأفعال."],
        fa: ["ریشه‌ی قوی (با تشدید یا حرف بی‌صدای مضاعف) با {a}je, tu, il, ils{/a} به کار می‌رود.", "ریشه‌ی ضعیف (شکل اصلی) با {a}nous, vous{/a} به کار می‌رود.", "این تناوب برای کل خانواده‌ی این افعال منظم است."],
        ti: ["እቲ ሓያል መሰረት (ብኣክሰንት ወይ ድርብ ተነባቢ) ምስ {a}je, tu, il, ils{/a} ይጥቀም።", "እቲ ድኹም መሰረት (ናይ መጀመርታ ቅርጺ) ምስ {a}nous, vous{/a} ይጥቀም።", "እዚ ምልውዋጥ ንኹሉ ስድራ ናይዞም ግሲታት ስሩዕ እዩ።"],
        uk: ["Сильна основа (з акцентом або подвоєним приголосним) вживається з {a}je, tu, il, ils{/a}.", "Слабка основа (початкова форма) вживається з {a}nous, vous{/a}.", "Це чергування регулярне для всієї родини цих дієслів."],
      },
    },
  ],
  exercises: [],
};
