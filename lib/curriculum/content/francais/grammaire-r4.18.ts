import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L12: GrammarLesson = {
  slug: "a2-gr-l12",
  code: "RX.18",
  level: "A2",
  title: "Les adjectifs — cas particuliers et place",
  theory: [
    { type: "heading", text: "Adjectifs à trois formes masculines", trans: { en: "Adjectives with three masculine forms", ar: "صفات بثلاث صيغ مذكرة", fa: "صفت‌هایی با سه شکل مذکر", ti: "ቅጽላት ብሰለስተ ተባዕታይ ቅርጺ", uk: "Прикметники з трьома формами чоловічого роду" } },
    {
      type: "plain_list",
      items: [
        "Certains adjectifs ont une forme masculine spéciale devant une {a}voyelle ou h muet{/a}.",
      ],
      transItems: {
        en: ["Some adjectives have a special masculine form before a {a}vowel or silent h{/a}."],
        ar: ["بعض الصفات لها صيغة مذكرة خاصة قبل {a}حرف علة أو h صامت{/a}."],
        fa: ["برخی صفت‌ها پیش از یک {a}حرف صدادار یا h خاموش{/a} شکل مذکر ویژه‌ای دارند."],
        ti: ["ገለ ቅጽላት ቅድሚ {a}ድምጻዊ ፊደል ወይ ስቕ h{/a} ፍሉይ ተባዕታይ ቅርጺ ኣለዎም።"],
        uk: ["Деякі прикметники мають особливу форму чоловічого роду перед {a}голосною або німим h{/a}."],
      },
    },
    {
      type: "grid",
      headers: ["Masculin devant cons.", "Masculin devant voyelle/h muet", "Féminin", "Pluriel masc."],
      transHeaders: {
        en: ["Masculine before cons.", "Masculine before vowel/silent h", "Feminine", "Masc. plural"],
        ar: ["مذكر قبل ساكن", "مذكر قبل علة/h صامت", "مؤنث", "جمع مذكر"],
        fa: ["مذکر پیش از بی‌صدا", "مذکر پیش از صدادار/h خاموش", "مؤنث", "جمع مذکر"],
        ti: ["ተባዕታይ ቅድሚ ድምጺ-ኣልቦ", "ተባዕታይ ቅድሚ ድምጻዊ/ስቕ h", "ኣንስታይ", "ብዙሕ ተባዕታይ"],
        uk: ["Чол. перед приголосною", "Чол. перед голосною/німим h", "Жіночий", "Чол. множина"],
      },
      rows: [
        ["{a}beau{/a}", "{a}bel{/a}", "belle", "beaux"],
        ["{a}nouveau{/a}", "{a}nouvel{/a}", "nouvelle", "nouveaux"],
        ["{a}vieux{/a}", "{a}vieil{/a}", "vieille", "vieux"],
        ["{a}fou{/a}", "{a}fol{/a}", "folle", "fous"],
        ["{a}mou{/a}", "{a}mol{/a}", "molle", "mous"],
      ],
      transRows: {
        en: [["{a}beau{/a}", "{a}bel{/a}", "belle", "beaux"], ["{a}nouveau{/a}", "{a}nouvel{/a}", "nouvelle", "nouveaux"], ["{a}vieux{/a}", "{a}vieil{/a}", "vieille", "vieux"], ["{a}fou{/a}", "{a}fol{/a}", "folle", "fous"], ["{a}mou{/a}", "{a}mol{/a}", "molle", "mous"]],
        ar: [["{a}beau{/a}", "{a}bel{/a}", "belle", "beaux"], ["{a}nouveau{/a}", "{a}nouvel{/a}", "nouvelle", "nouveaux"], ["{a}vieux{/a}", "{a}vieil{/a}", "vieille", "vieux"], ["{a}fou{/a}", "{a}fol{/a}", "folle", "fous"], ["{a}mou{/a}", "{a}mol{/a}", "molle", "mous"]],
        fa: [["{a}beau{/a}", "{a}bel{/a}", "belle", "beaux"], ["{a}nouveau{/a}", "{a}nouvel{/a}", "nouvelle", "nouveaux"], ["{a}vieux{/a}", "{a}vieil{/a}", "vieille", "vieux"], ["{a}fou{/a}", "{a}fol{/a}", "folle", "fous"], ["{a}mou{/a}", "{a}mol{/a}", "molle", "mous"]],
        ti: [["{a}beau{/a}", "{a}bel{/a}", "belle", "beaux"], ["{a}nouveau{/a}", "{a}nouvel{/a}", "nouvelle", "nouveaux"], ["{a}vieux{/a}", "{a}vieil{/a}", "vieille", "vieux"], ["{a}fou{/a}", "{a}fol{/a}", "folle", "fous"], ["{a}mou{/a}", "{a}mol{/a}", "molle", "mous"]],
        uk: [["{a}beau{/a}", "{a}bel{/a}", "belle", "beaux"], ["{a}nouveau{/a}", "{a}nouvel{/a}", "nouvelle", "nouveaux"], ["{a}vieux{/a}", "{a}vieil{/a}", "vieille", "vieux"], ["{a}fou{/a}", "{a}fol{/a}", "folle", "fous"], ["{a}mou{/a}", "{a}mol{/a}", "molle", "mous"]],
      },
    },
    {
      type: "grid",
      headers: ["Devant consonne", "Devant voyelle / h muet"],
      transHeaders: {
        en: ["Before a consonant", "Before a vowel / silent h"],
        ar: ["قبل ساكن", "قبل علة / h صامت"],
        fa: ["پیش از بی‌صدا", "پیش از صدادار / h خاموش"],
        ti: ["ቅድሚ ድምጺ-ኣልቦ", "ቅድሚ ድምጻዊ / ስቕ h"],
        uk: ["Перед приголосною", "Перед голосною / німим h"],
      },
      rows: [
        ["un {a}beau{/a} film", "un {a}bel{/a} homme"],
        ["un {a}nouveau{/a} livre", "un {a}nouvel{/a} appartement"],
        ["un {a}vieux{/a} bâtiment", "un {a}vieil{/a} arbre"],
      ],
      transRows: {
        en: [["un {a}beau{/a} film", "un {a}bel{/a} homme"], ["un {a}nouveau{/a} livre", "un {a}nouvel{/a} appartement"], ["un {a}vieux{/a} bâtiment", "un {a}vieil{/a} arbre"]],
        ar: [["un {a}beau{/a} film", "un {a}bel{/a} homme"], ["un {a}nouveau{/a} livre", "un {a}nouvel{/a} appartement"], ["un {a}vieux{/a} bâtiment", "un {a}vieil{/a} arbre"]],
        fa: [["un {a}beau{/a} film", "un {a}bel{/a} homme"], ["un {a}nouveau{/a} livre", "un {a}nouvel{/a} appartement"], ["un {a}vieux{/a} bâtiment", "un {a}vieil{/a} arbre"]],
        ti: [["un {a}beau{/a} film", "un {a}bel{/a} homme"], ["un {a}nouveau{/a} livre", "un {a}nouvel{/a} appartement"], ["un {a}vieux{/a} bâtiment", "un {a}vieil{/a} arbre"]],
        uk: [["un {a}beau{/a} film", "un {a}bel{/a} homme"], ["un {a}nouveau{/a} livre", "un {a}nouvel{/a} appartement"], ["un {a}vieux{/a} bâtiment", "un {a}vieil{/a} arbre"]],
      },
    },
    { type: "heading", text: "La place des adjectifs", sub: true, accent: true, trans: { en: "The position of adjectives", ar: "موضع الصفات", fa: "جایگاه صفت‌ها", ti: "ቦታ ቅጽላት", uk: "Місце прикметників" } },
    {
      type: "plain_list",
      items: [
        "En français, la majorité des adjectifs se placent {a}après{/a} le nom.",
        "Mais un groupe d'adjectifs courants se placent {a}avant{/a} le nom.",
      ],
      transItems: {
        en: ["In French, most adjectives are placed {a}after{/a} the noun.", "But a group of common adjectives are placed {a}before{/a} the noun."],
        ar: ["في الفرنسية، توضع معظم الصفات {a}بعد{/a} الاسم.", "لكن مجموعة من الصفات الشائعة توضع {a}قبل{/a} الاسم."],
        fa: ["در فرانسوی، بیشتر صفت‌ها {a}بعد از{/a} اسم قرار می‌گیرند.", "اما گروهی از صفت‌های رایج {a}پیش از{/a} اسم قرار می‌گیرند."],
        ti: ["ብፈረንሳ ቋንቋ፣ መብዛሕትኦም ቅጽላት {a}ድሕሪ{/a} ስም ይቕመጡ።", "ግን ጉጅለ ልሙዳት ቅጽላት {a}ቅድሚ{/a} ስም ይቕመጡ።"],
        uk: ["У французькій мові більшість прикметників ставляться {a}після{/a} іменника.", "Але група поширених прикметників ставляться {a}перед{/a} іменником."],
      },
    },
    {
      type: "grid",
      headers: ["Place", "Catégorie", "Adjectifs"],
      transHeaders: {
        en: ["Position", "Category", "Adjectives"],
        ar: ["الموضع", "الفئة", "الصفات"],
        fa: ["جایگاه", "دسته", "صفت‌ها"],
        ti: ["ቦታ", "ምድብ", "ቅጽላት"],
        uk: ["Місце", "Категорія", "Прикметники"],
      },
      boldFirstCol: true,
      rows: [
        ["{a}Avant{/a} le nom", "beauté / âge / bien / mal / taille", "beau, joli, jeune, vieux, bon, mauvais, grand, petit, gros"],
        ["{a}Après{/a} le nom", "nationalité, couleur, forme, religion", "français, bleu, rond, catholique"],
        ["{a}Après{/a} le nom", "adjectifs longs (participiaux…)", "intéressant, fatigant, extraordinaire"],
      ],
      transRows: {
        en: [["{a}Before{/a} the noun", "beauty / age / good / bad / size", "beau, joli, jeune, vieux, bon, mauvais, grand, petit, gros"], ["{a}After{/a} the noun", "nationality, colour, shape, religion", "français, bleu, rond, catholique"], ["{a}After{/a} the noun", "long adjectives (participial…)", "intéressant, fatigant, extraordinaire"]],
        ar: [["{a}قبل{/a} الاسم", "الجمال / العمر / الخير / السوء / الحجم", "beau, joli, jeune, vieux, bon, mauvais, grand, petit, gros"], ["{a}بعد{/a} الاسم", "الجنسية، اللون، الشكل، الدين", "français, bleu, rond, catholique"], ["{a}بعد{/a} الاسم", "صفات طويلة (اسم المفعول…)", "intéressant, fatigant, extraordinaire"]],
        fa: [["{a}پیش از{/a} اسم", "زیبایی / سن / خوب / بد / اندازه", "beau, joli, jeune, vieux, bon, mauvais, grand, petit, gros"], ["{a}بعد از{/a} اسم", "ملیت، رنگ، شکل، دین", "français, bleu, rond, catholique"], ["{a}بعد از{/a} اسم", "صفت‌های بلند (وجه وصفی…)", "intéressant, fatigant, extraordinaire"]],
        ti: [["{a}ቅድሚ{/a} ስም", "ጽባቐ / ዕድመ / ጽቡቕ / ሕማቕ / ዓቐን", "beau, joli, jeune, vieux, bon, mauvais, grand, petit, gros"], ["{a}ድሕሪ{/a} ስም", "ዜግነት፣ ሕብሪ፣ ቅርጺ፣ ሃይማኖት", "français, bleu, rond, catholique"], ["{a}ድሕሪ{/a} ስም", "ነዊሕ ቅጽላት (ኣካፋዊ…)", "intéressant, fatigant, extraordinaire"]],
        uk: [["{a}Перед{/a} іменником", "краса / вік / добре / погано / розмір", "beau, joli, jeune, vieux, bon, mauvais, grand, petit, gros"], ["{a}Після{/a} іменника", "національність, колір, форма, релігія", "français, bleu, rond, catholique"], ["{a}Після{/a} іменника", "довгі прикметники (дієприкметникові…)", "intéressant, fatigant, extraordinaire"]],
      },
    },
    {
      type: "highlight",
      label: "Adjectifs qui changent de sens selon la place",
      items: [
        "{a}ancien{/a} : un {a}ancien{/a} collègue (= ex-) / un bâtiment {a}ancien{/a} (= vieux)",
        "{a}cher{/a} : un {a}cher{/a} ami (= bien-aimé) / un restaurant {a}cher{/a} (= coûteux)",
        "{a}grand{/a} : un {a}grand{/a} homme (= illustre) / un homme {a}grand{/a} (= de haute taille)",
        "{a}propre{/a} : ma {a}propre{/a} voiture (= à moi) / une voiture {a}propre{/a} (= clean)",
        "{a}pauvre{/a} : ce {a}pauvre{/a} garçon (= à plaindre) / un garçon {a}pauvre{/a} (= sans argent)",
      ],
      transLabel: { en: "Adjectives that change meaning depending on position", ar: "صفات يتغير معناها حسب الموضع", fa: "صفت‌هایی که معنایشان بسته به جایگاه تغییر می‌کند", ti: "ብቦታ ትርጉሞም ዝቕይሩ ቅጽላት", uk: "Прикметники, що змінюють значення залежно від місця" },
      transItems: {
        en: ["{a}ancien{/a}: un {a}ancien{/a} collègue (= former) / un bâtiment {a}ancien{/a} (= old)", "{a}cher{/a}: un {a}cher{/a} ami (= dear) / un restaurant {a}cher{/a} (= expensive)", "{a}grand{/a}: un {a}grand{/a} homme (= great) / un homme {a}grand{/a} (= tall)", "{a}propre{/a}: ma {a}propre{/a} voiture (= my own) / une voiture {a}propre{/a} (= clean)", "{a}pauvre{/a}: ce {a}pauvre{/a} garçon (= to be pitied) / un garçon {a}pauvre{/a} (= penniless)"],
        ar: ["{a}ancien{/a}: un {a}ancien{/a} collègue (= سابق) / un bâtiment {a}ancien{/a} (= قديم)", "{a}cher{/a}: un {a}cher{/a} ami (= عزيز) / un restaurant {a}cher{/a} (= باهظ)", "{a}grand{/a}: un {a}grand{/a} homme (= عظيم) / un homme {a}grand{/a} (= طويل القامة)", "{a}propre{/a}: ma {a}propre{/a} voiture (= خاصتي) / une voiture {a}propre{/a} (= نظيفة)", "{a}pauvre{/a}: ce {a}pauvre{/a} garçon (= يُرثى له) / un garçon {a}pauvre{/a} (= فقير المال)"],
        fa: ["{a}ancien{/a}: un {a}ancien{/a} collègue (= سابق) / un bâtiment {a}ancien{/a} (= کهنه)", "{a}cher{/a}: un {a}cher{/a} ami (= عزیز) / un restaurant {a}cher{/a} (= گران)", "{a}grand{/a}: un {a}grand{/a} homme (= بزرگ‌مرد) / un homme {a}grand{/a} (= بلندقامت)", "{a}propre{/a}: ma {a}propre{/a} voiture (= مال خودم) / une voiture {a}propre{/a} (= تمیز)", "{a}pauvre{/a}: ce {a}pauvre{/a} garçon (= بیچاره) / un garçon {a}pauvre{/a} (= بی‌پول)"],
        ti: ["{a}ancien{/a}: un {a}ancien{/a} collègue (= ቀደም) / un bâtiment {a}ancien{/a} (= ኣረጊት)", "{a}cher{/a}: un {a}cher{/a} ami (= ፍቑር) / un restaurant {a}cher{/a} (= ክቡር ዋጋ)", "{a}grand{/a}: un {a}grand{/a} homme (= ዓቢ ሰብ) / un homme {a}grand{/a} (= ነዊሕ ቁመት)", "{a}propre{/a}: ma {a}propre{/a} voiture (= ናተይ) / une voiture {a}propre{/a} (= ጽሩይ)", "{a}pauvre{/a}: ce {a}pauvre{/a} garçon (= ዘሕዝን) / un garçon {a}pauvre{/a} (= ድኻ)"],
        uk: ["{a}ancien{/a}: un {a}ancien{/a} collègue (= колишній) / un bâtiment {a}ancien{/a} (= старий)", "{a}cher{/a}: un {a}cher{/a} ami (= дорогий/любий) / un restaurant {a}cher{/a} (= дорогий за ціною)", "{a}grand{/a}: un {a}grand{/a} homme (= видатний) / un homme {a}grand{/a} (= високий на зріст)", "{a}propre{/a}: ma {a}propre{/a} voiture (= власна) / une voiture {a}propre{/a} (= чиста)", "{a}pauvre{/a}: ce {a}pauvre{/a} garçon (= нещасний) / un garçon {a}pauvre{/a} (= бідний/без грошей)"],
      },
    },
  ],
  exercises: [],
};
