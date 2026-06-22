import type { GrammarLesson } from "../../grammar-data";
import {
  ADJECTIFS_QUALIFICATIFS_GENERALITES,
  ADJECTIFS_QUALIFICATIFS_PLACE,
} from "./adjectifs-qualificatifs-theory";

export const A1_GR_L23: GrammarLesson = {
  slug: "a1-gr-l23",
  code: "R3.7",
  level: "A1",
  title: "Les adjectifs qualificatifs",
  theory: [
    ...ADJECTIFS_QUALIFICATIFS_GENERALITES,
    ...ADJECTIFS_QUALIFICATIFS_PLACE,
    { type: "heading", text: "Accord en genre", trans: { en: "Agreement in gender", ar: "المطابقة في الجنس", fa: "مطابقت در جنس", ti: "ምስምማዕ ብጾታ", uk: "Узгодження за родом" } },
    {
      type: "plain_list",
      items: [
        "L'adjectif s'accorde en {a}genre{/a} et en {a}nombre{/a} avec le nom.",
      ],
      transItems: {
        en: ["The adjective agrees in {a}gender{/a} and {a}number{/a} with the noun."],
        ar: ["تتطابق الصفة في {a}الجنس{/a} و{a}العدد{/a} مع الاسم."],
        fa: ["صفت در {a}جنس{/a} و {a}شمار{/a} با اسم مطابقت می‌کند."],
        ti: ["እቲ ቅጽል ምስቲ ስም ብ{a}ጾታ{/a}ን ብ{a}ቁጽሪ{/a}ን ይሰማማዕ።"],
        uk: ["Прикметник узгоджується з іменником за {a}родом{/a} і {a}числом{/a}."],
      },
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin", "Règle"],
      rows: [
        ["grand", "grand{a}e{/a}", "+ e"],
        ["petit", "petit{a}e{/a}", "+ e"],
        ["français", "français{a}e{/a}", "+ e"],
        ["sympa", "sympa", "invariable (déjà en -a)"],
        ["moderne", "moderne", "invariable (déjà en -e)"],
        ["beau", "bell{a}e{/a}", "irrégulier"],
        ["nouveau", "nouvell{a}e{/a}", "irrégulier"],
        ["vieux", "vieil{a}le{/a}", "irrégulier"],
      ],
      transHeaders: {
        en: ["Masculine", "Feminine", "Rule"],
        ar: ["مذكر", "مؤنث", "القاعدة"],
        fa: ["مذکر", "مؤنث", "قاعده"],
        ti: ["ተባዕታይ", "ኣንስታይ", "ሕጊ"],
        uk: ["Чоловічий", "Жіночий", "Правило"],
      },
      transRows: {
        en: [["grand", "grand{a}e{/a}", "+ e"], ["petit", "petit{a}e{/a}", "+ e"], ["français", "français{a}e{/a}", "+ e"], ["sympa", "sympa", "invariable (already -a)"], ["moderne", "moderne", "invariable (already -e)"], ["beau", "bell{a}e{/a}", "irregular"], ["nouveau", "nouvell{a}e{/a}", "irregular"], ["vieux", "vieil{a}le{/a}", "irregular"]],
        ar: [["grand", "grand{a}e{/a}", "+ e"], ["petit", "petit{a}e{/a}", "+ e"], ["français", "français{a}e{/a}", "+ e"], ["sympa", "sympa", "ثابت (ينتهي بـ -a)"], ["moderne", "moderne", "ثابت (ينتهي بـ -e)"], ["beau", "bell{a}e{/a}", "شاذ"], ["nouveau", "nouvell{a}e{/a}", "شاذ"], ["vieux", "vieil{a}le{/a}", "شاذ"]],
        fa: [["grand", "grand{a}e{/a}", "+ e"], ["petit", "petit{a}e{/a}", "+ e"], ["français", "français{a}e{/a}", "+ e"], ["sympa", "sympa", "بدون تغییر (با -a تمام می‌شود)"], ["moderne", "moderne", "بدون تغییر (با -e تمام می‌شود)"], ["beau", "bell{a}e{/a}", "بی‌قاعده"], ["nouveau", "nouvell{a}e{/a}", "بی‌قاعده"], ["vieux", "vieil{a}le{/a}", "بی‌قاعده"]],
        ti: [["grand", "grand{a}e{/a}", "+ e"], ["petit", "petit{a}e{/a}", "+ e"], ["français", "français{a}e{/a}", "+ e"], ["sympa", "sympa", "ዘይቕየር (ብ-a ይውዳእ)"], ["moderne", "moderne", "ዘይቕየር (ብ-e ይውዳእ)"], ["beau", "bell{a}e{/a}", "ዘይስሩዕ"], ["nouveau", "nouvell{a}e{/a}", "ዘይስሩዕ"], ["vieux", "vieil{a}le{/a}", "ዘይስሩዕ"]],
        uk: [["grand", "grand{a}e{/a}", "+ e"], ["petit", "petit{a}e{/a}", "+ e"], ["français", "français{a}e{/a}", "+ e"], ["sympa", "sympa", "незмінний (вже на -a)"], ["moderne", "moderne", "незмінний (вже на -e)"], ["beau", "bell{a}e{/a}", "неправильний"], ["nouveau", "nouvell{a}e{/a}", "неправильний"], ["vieux", "vieil{a}le{/a}", "неправильний"]],
      },
    },
    { type: "heading", text: "Accord en nombre", sub: true, trans: { en: "Agreement in number", ar: "المطابقة في العدد", fa: "مطابقت در شمار", ti: "ምስምማዕ ብቁጽሪ", uk: "Узгодження за числом" } },
    {
      type: "grid",
      headers: ["Singulier", "Pluriel", "Règle"],
      rows: [
        ["grand", "grand{a}s{/a}", "+ s"],
        ["grande", "grande{a}s{/a}", "+ s"],
        ["beau", "beau{a}x{/a}", "-eau → -eaux"],
        ["nouveau", "nouveau{a}x{/a}", "-eau → -eaux"],
        ["gros", "gros", "déjà en -s : invariable"],
      ],
      transHeaders: {
        en: ["Singular", "Plural", "Rule"],
        ar: ["مفرد", "جمع", "القاعدة"],
        fa: ["مفرد", "جمع", "قاعده"],
        ti: ["ነጠላ", "ብዙሕ", "ሕጊ"],
        uk: ["Однина", "Множина", "Правило"],
      },
      transRows: {
        en: [["grand", "grand{a}s{/a}", "+ s"], ["grande", "grande{a}s{/a}", "+ s"], ["beau", "beau{a}x{/a}", "-eau → -eaux"], ["nouveau", "nouveau{a}x{/a}", "-eau → -eaux"], ["gros", "gros", "already -s: invariable"]],
        ar: [["grand", "grand{a}s{/a}", "+ s"], ["grande", "grande{a}s{/a}", "+ s"], ["beau", "beau{a}x{/a}", "-eau ← -eaux"], ["nouveau", "nouveau{a}x{/a}", "-eau ← -eaux"], ["gros", "gros", "ينتهي بـ -s: ثابت"]],
        fa: [["grand", "grand{a}s{/a}", "+ s"], ["grande", "grande{a}s{/a}", "+ s"], ["beau", "beau{a}x{/a}", "-eau ← -eaux"], ["nouveau", "nouveau{a}x{/a}", "-eau ← -eaux"], ["gros", "gros", "با -s تمام می‌شود: بدون تغییر"]],
        ti: [["grand", "grand{a}s{/a}", "+ s"], ["grande", "grande{a}s{/a}", "+ s"], ["beau", "beau{a}x{/a}", "-eau → -eaux"], ["nouveau", "nouveau{a}x{/a}", "-eau → -eaux"], ["gros", "gros", "ብ-s ይውዳእ፦ ዘይቕየር"]],
        uk: [["grand", "grand{a}s{/a}", "+ s"], ["grande", "grande{a}s{/a}", "+ s"], ["beau", "beau{a}x{/a}", "-eau → -eaux"], ["nouveau", "nouveau{a}x{/a}", "-eau → -eaux"], ["gros", "gros", "вже на -s: незмінний"]],
      },
    },
    { type: "heading", text: "Place de l'adjectif", sub: true, trans: { en: "Position of the adjective", ar: "موضع الصفة", fa: "جایگاه صفت", ti: "ቦታ ናይቲ ቅጽል", uk: "Місце прикметника" } },
    {
      type: "plain_list",
      items: [
        "En général, l'adjectif se place {a}après{/a} le nom.",
        "Certains adjectifs courts et courants se placent {a}avant{/a} le nom ({a}BAGS{/a}).",
      ],
      transItems: {
        en: ["Usually, the adjective is placed {a}after{/a} the noun.", "Some short, common adjectives are placed {a}before{/a} the noun ({a}BAGS{/a})."],
        ar: ["عموماً، توضع الصفة {a}بعد{/a} الاسم.", "بعض الصفات القصيرة والشائعة توضع {a}قبل{/a} الاسم ({a}BAGS{/a})."],
        fa: ["معمولاً، صفت {a}بعد{/a} از اسم قرار می‌گیرد.", "برخی صفات کوتاه و پرکاربرد {a}پیش{/a} از اسم قرار می‌گیرند ({a}BAGS{/a})."],
        ti: ["ብሓፈሻ፣ እቲ ቅጽል {a}ድሕሪ{/a} ስም ይቕመጥ።", "ገለ ሓጸርትን ልሙዳትን ቅጽላት {a}ቅድሚ{/a} ስም ይቕመጡ ({a}BAGS{/a})።"],
        uk: ["Зазвичай прикметник ставиться {a}після{/a} іменника.", "Деякі короткі поширені прикметники ставляться {a}перед{/a} іменником ({a}BAGS{/a})."],
      },
    },
    {
      type: "highlight",
      label: "BAGS — adjectifs avant le nom",
      items: [
        "{a}B{/a}eauté : beau, joli",
        "{a}A{/a}ge : vieux, jeune, nouveau",
        "{a}G{/a}randeur : grand, petit, gros, long",
        "{a}S{/a}entiment/bonté : bon, mauvais, gentil",
      ],
      transLabel: { en: "BAGS — adjectives before the noun", ar: "BAGS — صفات قبل الاسم", fa: "BAGS — صفات پیش از اسم", ti: "BAGS — ቅድሚ ስም ዝመጹ ቅጽላት", uk: "BAGS — прикметники перед іменником" },
      transItems: {
        en: ["{a}B{/a}eauty: beau (beautiful), joli (pretty)", "{a}A{/a}ge: vieux (old), jeune (young), nouveau (new)", "{a}G{/a}oodness of size: grand (big), petit (small), gros (fat), long (long)", "{a}S{/a}entiment/kindness: bon (good), mauvais (bad), gentil (kind)"],
        ar: ["{a}B{/a} الجمال: beau (جميل)، joli (لطيف)", "{a}A{/a} العمر: vieux (عجوز)، jeune (شاب)، nouveau (جديد)", "{a}G{/a} الحجم: grand (كبير)، petit (صغير)، gros (سمين)، long (طويل)", "{a}S{/a} الشعور/الطيبة: bon (جيد)، mauvais (سيئ)، gentil (لطيف)"],
        fa: ["{a}B{/a} زیبایی: beau (زیبا)، joli (قشنگ)", "{a}A{/a} سن: vieux (پیر)، jeune (جوان)، nouveau (نو)", "{a}G{/a} اندازه: grand (بزرگ)، petit (کوچک)، gros (چاق)، long (بلند)", "{a}S{/a} احساس/مهربانی: bon (خوب)، mauvais (بد)، gentil (مهربان)"],
        ti: ["{a}B{/a} ጽባቐ፦ beau (ጽቡቕ)፣ joli (ምልኩዕ)", "{a}A{/a} ዕድመ፦ vieux (ኣረጊት)፣ jeune (መንእሰይ)፣ nouveau (ሓድሽ)", "{a}G{/a} ዓቐን፦ grand (ዓቢ)፣ petit (ንእሽቶ)፣ gros (ረጒድ)፣ long (ነዊሕ)", "{a}S{/a} ስምዒት/ሕያውነት፦ bon (ጽቡቕ)፣ mauvais (ሕማቕ)፣ gentil (ሕያዋይ)"],
        uk: ["{a}B{/a} Краса: beau (гарний), joli (милий)", "{a}A{/a} Вік: vieux (старий), jeune (молодий), nouveau (новий)", "{a}G{/a} Розмір: grand (великий), petit (малий), gros (товстий), long (довгий)", "{a}S{/a} Почуття/доброта: bon (хороший), mauvais (поганий), gentil (добрий)"],
      },
    },
    {
      type: "grid",
      headers: ["Avant le nom (BAGS)", "Après le nom (autres)"],
      rows: [
        ["un {a}beau{/a} film", "un film {a}intéressant{/a}"],
        ["une {a}petite{/a} ville", "une ville {a}moderne{/a}"],
        ["un {a}bon{/a} restaurant", "un restaurant {a}français{/a}"],
        ["un {a}jeune{/a} homme", "un homme {a}sympa{/a}"],
      ],
      transHeaders: {
        en: ["Before the noun (BAGS)", "After the noun (others)"],
        ar: ["قبل الاسم (BAGS)", "بعد الاسم (الباقي)"],
        fa: ["پیش از اسم (BAGS)", "بعد از اسم (بقیه)"],
        ti: ["ቅድሚ ስም (BAGS)", "ድሕሪ ስም (ካልኦት)"],
        uk: ["Перед іменником (BAGS)", "Після іменника (інші)"],
      },
      transRows: {
        en: [["un {a}beau{/a} film (a beautiful film)", "un film {a}intéressant{/a} (an interesting film)"], ["une {a}petite{/a} ville (a small town)", "une ville {a}moderne{/a} (a modern town)"], ["un {a}bon{/a} restaurant (a good restaurant)", "un restaurant {a}français{/a} (a French restaurant)"], ["un {a}jeune{/a} homme (a young man)", "un homme {a}sympa{/a} (a nice man)"]],
        ar: [["un {a}beau{/a} film (فيلم جميل)", "un film {a}intéressant{/a} (فيلم مشوّق)"], ["une {a}petite{/a} ville (مدينة صغيرة)", "une ville {a}moderne{/a} (مدينة حديثة)"], ["un {a}bon{/a} restaurant (مطعم جيد)", "un restaurant {a}français{/a} (مطعم فرنسي)"], ["un {a}jeune{/a} homme (رجل شاب)", "un homme {a}sympa{/a} (رجل لطيف)"]],
        fa: [["un {a}beau{/a} film (یک فیلم زیبا)", "un film {a}intéressant{/a} (یک فیلم جالب)"], ["une {a}petite{/a} ville (یک شهر کوچک)", "une ville {a}moderne{/a} (یک شهر مدرن)"], ["un {a}bon{/a} restaurant (یک رستوران خوب)", "un restaurant {a}français{/a} (یک رستوران فرانسوی)"], ["un {a}jeune{/a} homme (یک مرد جوان)", "un homme {a}sympa{/a} (یک مرد خوش‌برخورد)"]],
        ti: [["un {a}beau{/a} film (ጽቡቕ ፊልም)", "un film {a}intéressant{/a} (ዘገድስ ፊልም)"], ["une {a}petite{/a} ville (ንእሽቶ ከተማ)", "une ville {a}moderne{/a} (ዘመናዊት ከተማ)"], ["un {a}bon{/a} restaurant (ጽቡቕ ቤት መግቢ)", "un restaurant {a}français{/a} (ፈረንሳዊ ቤት መግቢ)"], ["un {a}jeune{/a} homme (መንእሰይ ሰብኣይ)", "un homme {a}sympa{/a} (ሕያዋይ ሰብኣይ)"]],
        uk: [["un {a}beau{/a} film (гарний фільм)", "un film {a}intéressant{/a} (цікавий фільм)"], ["une {a}petite{/a} ville (маленьке місто)", "une ville {a}moderne{/a} (сучасне місто)"], ["un {a}bon{/a} restaurant (хороший ресторан)", "un restaurant {a}français{/a} (французький ресторан)"], ["un {a}jeune{/a} homme (молодий чоловік)", "un homme {a}sympa{/a} (приємний чоловік)"]],
      },
    },
  ],
  exercises: [],
};
