import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_LESSONS: MathSubmoduleLesson[] = [
  {
    submoduleId: "A4-1",
    submoduleCode: "A4.1",
    theory: {
      title: { fr: "Notion et représentation", en: "Concept and representation", ar: "المفهوم والتمثيل", fa: "مفهوم و نمایش", ti: "ፍርቂ ምፍላጥ", uk: "Поняття та зображення" },
      paragraphs: {
        fr: [
          "Une fraction représente une ou plusieurs parties d'un tout divisé en parts égales.",
          "Elle est composée d'un numérateur (nombre en haut = parts utilisées) et d'un dénominateur (nombre en bas = nombre total de parts égales).",
          "Les fractions décimales ont pour dénominateur 10 ou 100. Exemples : 3/10, 62/10, 19/100, 184/100.",
          "Un nombre entier s'écrit aussi sous forme de fraction : 3 = 3/1. Et n/n = 1 pour tout n ≠ 0.",
        ],
        en: [
          "A fraction represents one or more parts of a whole divided into equal parts.",
          "It has a numerator (top number — how many parts we have) and a denominator (bottom number — how many equal parts the whole is divided into).",
          "Decimal fractions have 10 or 100 as the denominator. Examples: 3/10, 62/10, 19/100, 184/100.",
          "A whole number can be written as a fraction: 3 = 3/1. Also n/n = 1 for any n ≠ 0.",
        ],
        ar: [
          "الكسر يمثل جزءًا أو أكثر من كل مقسّم إلى أجزاء متساوية.",
          "يتكون من بسط (العدد فوق = كم جزء لدينا) ومقام (العدد أسفل = عدد الأجزاء المتساوية).",
          "الكسور العشرية مقامها 10 أو 100. أمثلة: 3/10، 62/10، 19/100، 184/100.",
          "يمكن كتابة عدد صحيح كسرًا: 3 = 3/1. وأيضًا n/n = 1 لأي n ≠ 0.",
        ],
        fa: [
          "کسر نشان‌دهنده یک یا چند بخش از یک کل است که به بخش‌های مساوی تقسیم شده.",
          "از صورت (عدد بالا = چند بخش داریم) و مخرج (عدد پایین = تعداد بخش‌های مساوی) تشکیل شده است.",
          "کسرهای اعشاری مخرج ۱۰ یا ۱۰۰ دارند. مثال‌ها: ۳/۱۰، ۶۲/۱۰، ۱۹/۱۰۰، ۱۸۴/۱۰۰.",
          "عدد صحیح را می‌توان کسر نوشت: ۳ = ۳/۱. و n/n = ۱ برای هر n ≠ ۰.",
        ],
        ti: [
          "ፍርቂ ናይ ምሉእ ሓደ ወይ ልዕሊ ሓደ ክፋል ዘርዕ ኣሎ።",
          "ካብ ሚዛን ቁጽሪ (ናይ ዝለዓለ — ክንደይ ክፋላት) ምስ ናይ ዝሕደር (ናብ ክንደይ ማዕረ ክፋላት) ዝቖመ ኢዩ።",
          "ፍርቂ ዓሰርተ/ሚእቲ: 3/10, 62/10, 19/100, 184/100.",
          "ምሉእ ቁጽሪ ብ 1 ሚዛን ቁጽሪ: 3 = 3/1. n/n = 1 ንዝኾነ n ≠ 0.",
        ],
        uk: [
          "Дріб показує одну або кілька частин цілого, поділеного на рівні частини.",
          "Складається з чисельника (верхнє число — скільки частин) і знаменника (нижнє число — на скільки рівних частин поділено ціле).",
          "Десяткові дроби мають знаменник 10 або 100. Приклади: 3/10, 62/10, 19/100, 184/100.",
          "Ціле число записується дробом: 3 = 3/1. І n/n = 1 для будь-якого n ≠ 0.",
        ],
      },
      blocks: [
        {
          type: "plain",
          fr: "Une fraction représente une ou plusieurs parties d'un tout divisé en parts égales. Elle s'écrit avec deux nombres séparés par une barre de fraction.",
        },
        {
          type: "svg",
          noFrame: true,
          markup: `<svg viewBox='0 0 360 190' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:360px;display:block;margin:0 auto'>
  <defs>
    <marker id='a41mn' markerWidth='7' markerHeight='6' refX='6' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='#1d4ed8'/></marker>
    <marker id='a41md' markerWidth='7' markerHeight='6' refX='6' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='#dc2626'/></marker>
  </defs>
  <text x='180' y='75' text-anchor='middle' font-size='60' font-weight='700' fill='#1d4ed8' font-family='Century Schoolbook,Georgia,serif'>3</text>
  <line x1='148' y1='95' x2='212' y2='95' stroke='#0f172a' stroke-width='4' stroke-linecap='round'/>
  <text x='180' y='157' text-anchor='middle' font-size='60' font-weight='700' fill='#dc2626' font-family='Century Schoolbook,Georgia,serif'>4</text>
  <text x='8' y='41' font-size='12' font-weight='700' fill='#1d4ed8' font-family='Century Schoolbook,Georgia,serif'>numérateur</text>
  <text x='8' y='54' font-size='11' fill='#475569' font-family='Century Schoolbook,Georgia,serif'>→ nombre en haut</text>
  <text x='8' y='67' font-size='11' fill='#475569' font-family='Century Schoolbook,Georgia,serif'>= parts utilisées</text>
  <line x1='118' y1='54' x2='150' y2='54' stroke='#1d4ed8' stroke-width='1.5' marker-end='url(#a41mn)'/>
  <line x1='212' y1='136' x2='242' y2='136' stroke='#dc2626' stroke-width='1.5' marker-end='url(#a41md)'/>
  <text x='250' y='123' font-size='12' font-weight='700' fill='#dc2626' font-family='Century Schoolbook,Georgia,serif'>dénominateur</text>
  <text x='250' y='136' font-size='11' fill='#475569' font-family='Century Schoolbook,Georgia,serif'>→ nombre en bas</text>
  <text x='250' y='149' font-size='11' fill='#475569' font-family='Century Schoolbook,Georgia,serif'>= parts totales égales</text>
</svg>`,
        },
        {
          type: "section",
          labelFr: "Les deux parties d'une fraction",
          itemsFr: [
            "Le numérateur (en haut) : indique combien de parts sont prises ou utilisées.",
            "Le dénominateur (en bas) : indique en combien de parts égales l'unité entière est divisée.",
            "La barre de fraction signifie « divisé par » : 3/4 = 3 ÷ 4.",
          ],
        },
        { type: "plain", fr: "" },
        {
          type: "section",
          labelFr: "Cas particuliers",
          itemsFr: [
            "Tout nombre entier s'écrit sous forme de fraction avec dénominateur 1 (ex : 3 = [[frac:3/1]]).",
            "Toute fraction n/n est égale à 1 (ex : [[frac:7/7]] = 1, [[frac:100/100]] = 1).",
          ],
        },
      ],
    },
    exercises: [
      { id: "a4-1-e1", promptFr: "Dans la fraction 3/4, quel est le numérateur ?", type: "number", acceptable: ["3"] },
      { id: "a4-1-e2", promptFr: "Dans la fraction 5/8, quel est le dénominateur ?", type: "number", acceptable: ["8"] },
      { id: "a4-1-e3", promptFr: "Écrivez 5 sous forme de fraction (avec dénominateur 1).", type: "short_text", acceptable: ["5/1"] },
      { id: "a4-1-e4", promptFr: "Quelle fraction représente la moitié ?", type: "short_text", acceptable: ["1/2"] },
      { id: "a4-1-e5", promptFr: "7/7 est égal à quel nombre entier ?", type: "number", acceptable: ["1"] },
    ],
  },
  {
    submoduleId: "A4-2",
    submoduleCode: "A4.2",
    theory: {
      title: { fr: "Fractions décimales : dixièmes et centièmes", en: "Decimal fractions: tenths and hundredths", ar: "الكسور العشرية: العشرات والمئات", fa: "کسرهای اعشاری: دهم و صدم", ti: "ፍርቂ ዓሰርቲ/ሚእቲ", uk: "Десяткові дроби: десяті та соті" },
      paragraphs: {
        fr: [
          "Quand le dénominateur est 10 ou 100, on parle de fractions décimales.",
          "3/10 = trois dixièmes = 0,3. 19/100 = dix-neuf centièmes = 0,19.",
        ],
        en: ["When the denominator is 10 or 100, we call them decimal fractions.", "3/10 = three tenths = 0.3. 19/100 = nineteen hundredths = 0.19."],
        ar: ["عندما يكون المقام 10 أو 100، نسمّيها كسوراً عشرية.", "3/10 = ثلاثة أعشار = 0,3. 19/100 = تسعة عشر جزءاً من مئة = 0,19."],
        fa: ["وقتی مخرج ۱۰ یا ۱۰۰ باشد، کسرهای اعشاری نامیده می‌شوند.", "۳/۱۰ = سه دهم = ۰٫۳. ۱۹/۱۰۰ = نوزده صدم = ۰٫۱۹."],
        ti: ["ሚዛን ቁጽሪ 10 ወይ 100 ምስ ዝኸውን ፍርቂ ቪርጉላ ይበሃል።", "3/10 = ሰለስተ ዓሰርቲ = 0,3. 19/100 = ዓሰርተ ትሽዓተ ሚእቲ = 0,19."],
        uk: ["Коли знаменник 10 або 100, говоримо про десяткові дроби.", "3/10 = три десятих = 0,3. 19/100 = дев'ятнадцять сотих = 0,19."],
      },
      blocks: [
        {
          type: "plain",
          fr: "Quand le dénominateur est 10 ou 100, on parle de fractions décimales. L'unité est découpée en 10 ou 100 parts égales.",
        },
        {
          type: "svg",
          captionFr: "1 unité entière — divisée en 10 parts (dixièmes) — divisée en 100 parts (centièmes)",
          markup: `<svg viewBox='0 0 320 125' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:320px;display:block;margin:0 auto'>
  <rect x='10' y='10' width='80' height='80' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/>
  <text x='50' y='57' text-anchor='middle' font-size='22' font-weight='700' fill='#1d4ed8' font-family='system-ui'>1</text>
  <text x='50' y='102' text-anchor='middle' font-size='11' font-weight='600' fill='#1e40af' font-family='system-ui'>1 unité</text>
  <text x='50' y='115' text-anchor='middle' font-size='10' fill='#64748b' font-family='system-ui'>(entier)</text>
  <rect x='120' y='10' width='80' height='80' fill='#f0f9ff' stroke='#2563eb' stroke-width='2'/>
  <line x1='128' y1='10' x2='128' y2='90' stroke='#93c5fd' stroke-width='1'/><line x1='136' y1='10' x2='136' y2='90' stroke='#93c5fd' stroke-width='1'/><line x1='144' y1='10' x2='144' y2='90' stroke='#93c5fd' stroke-width='1'/><line x1='152' y1='10' x2='152' y2='90' stroke='#93c5fd' stroke-width='1'/><line x1='160' y1='10' x2='160' y2='90' stroke='#93c5fd' stroke-width='1'/><line x1='168' y1='10' x2='168' y2='90' stroke='#93c5fd' stroke-width='1'/><line x1='176' y1='10' x2='176' y2='90' stroke='#93c5fd' stroke-width='1'/><line x1='184' y1='10' x2='184' y2='90' stroke='#93c5fd' stroke-width='1'/><line x1='192' y1='10' x2='192' y2='90' stroke='#93c5fd' stroke-width='1'/>
  <text x='160' y='102' text-anchor='middle' font-size='11' font-weight='600' fill='#1e40af' font-family='system-ui'>÷ 10 parts</text>
  <text x='160' y='115' text-anchor='middle' font-size='10' fill='#64748b' font-family='system-ui'>dixièmes</text>
  <rect x='230' y='10' width='80' height='80' fill='#f0f9ff' stroke='#2563eb' stroke-width='2'/>
  <line x1='238' y1='10' x2='238' y2='90' stroke='#93c5fd' stroke-width='0.5'/><line x1='246' y1='10' x2='246' y2='90' stroke='#93c5fd' stroke-width='0.5'/><line x1='254' y1='10' x2='254' y2='90' stroke='#93c5fd' stroke-width='0.5'/><line x1='262' y1='10' x2='262' y2='90' stroke='#93c5fd' stroke-width='0.5'/><line x1='270' y1='10' x2='270' y2='90' stroke='#93c5fd' stroke-width='0.5'/><line x1='278' y1='10' x2='278' y2='90' stroke='#93c5fd' stroke-width='0.5'/><line x1='286' y1='10' x2='286' y2='90' stroke='#93c5fd' stroke-width='0.5'/><line x1='294' y1='10' x2='294' y2='90' stroke='#93c5fd' stroke-width='0.5'/><line x1='302' y1='10' x2='302' y2='90' stroke='#93c5fd' stroke-width='0.5'/>
  <line x1='230' y1='18' x2='310' y2='18' stroke='#93c5fd' stroke-width='0.5'/><line x1='230' y1='26' x2='310' y2='26' stroke='#93c5fd' stroke-width='0.5'/><line x1='230' y1='34' x2='310' y2='34' stroke='#93c5fd' stroke-width='0.5'/><line x1='230' y1='42' x2='310' y2='42' stroke='#93c5fd' stroke-width='0.5'/><line x1='230' y1='50' x2='310' y2='50' stroke='#93c5fd' stroke-width='0.5'/><line x1='230' y1='58' x2='310' y2='58' stroke='#93c5fd' stroke-width='0.5'/><line x1='230' y1='66' x2='310' y2='66' stroke='#93c5fd' stroke-width='0.5'/><line x1='230' y1='74' x2='310' y2='74' stroke='#93c5fd' stroke-width='0.5'/><line x1='230' y1='82' x2='310' y2='82' stroke='#93c5fd' stroke-width='0.5'/>
  <text x='270' y='102' text-anchor='middle' font-size='11' font-weight='600' fill='#1e40af' font-family='system-ui'>÷ 100 parts</text>
  <text x='270' y='115' text-anchor='middle' font-size='10' fill='#64748b' font-family='system-ui'>centièmes</text>
</svg>`,
        },
        {
          type: "section",
          labelFr: "Exemples avec dixièmes et centièmes",
          itemsFr: [],
        },
        {
          type: "svg_row",
          items: [
            {
              markup: `<svg viewBox='0 0 140 105' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <text x='70' y='20' text-anchor='middle' font-size='18' font-weight='700' fill='#1d4ed8' font-family='Century Schoolbook,Georgia,serif'>3</text>
  <line x1='52' y1='25' x2='88' y2='25' stroke='#1d4ed8' stroke-width='2.5' stroke-linecap='round'/>
  <text x='70' y='42' text-anchor='middle' font-size='18' font-weight='700' fill='#1d4ed8' font-family='Century Schoolbook,Georgia,serif'>10</text>
  <rect x='10' y='52' width='120' height='40' fill='#eff6ff' stroke='#2563eb' stroke-width='1.5'/>
  <rect x='10' y='52' width='36' height='40' fill='#3b82f6'/>
  <line x1='22' y1='52' x2='22' y2='92' stroke='white' stroke-width='1'/><line x1='34' y1='52' x2='34' y2='92' stroke='white' stroke-width='1'/><line x1='46' y1='52' x2='46' y2='92' stroke='#93c5fd' stroke-width='1'/><line x1='58' y1='52' x2='58' y2='92' stroke='#93c5fd' stroke-width='1'/><line x1='70' y1='52' x2='70' y2='92' stroke='#93c5fd' stroke-width='1'/><line x1='82' y1='52' x2='82' y2='92' stroke='#93c5fd' stroke-width='1'/><line x1='94' y1='52' x2='94' y2='92' stroke='#93c5fd' stroke-width='1'/><line x1='106' y1='52' x2='106' y2='92' stroke='#93c5fd' stroke-width='1'/><line x1='118' y1='52' x2='118' y2='92' stroke='#93c5fd' stroke-width='1'/>
  <rect x='10' y='52' width='120' height='40' fill='none' stroke='#2563eb' stroke-width='1.5'/>
</svg>`,
              captionFr: "3 parts sur 10",
            },
            {
              markup: `<svg viewBox='0 0 140 115' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <text x='70' y='20' text-anchor='middle' font-size='18' font-weight='700' fill='#1d4ed8' font-family='Century Schoolbook,Georgia,serif'>19</text>
  <line x1='46' y1='25' x2='94' y2='25' stroke='#1d4ed8' stroke-width='2.5' stroke-linecap='round'/>
  <text x='70' y='42' text-anchor='middle' font-size='18' font-weight='700' fill='#1d4ed8' font-family='Century Schoolbook,Georgia,serif'>100</text>
  <rect x='10' y='52' width='120' height='60' fill='#eff6ff' stroke='#2563eb' stroke-width='1.5'/>
  <rect x='10' y='52' width='120' height='6' fill='#3b82f6'/>
  <rect x='10' y='58' width='108' height='6' fill='#3b82f6'/>
  <line x1='22' y1='52' x2='22' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='34' y1='52' x2='34' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='46' y1='52' x2='46' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='58' y1='52' x2='58' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='70' y1='52' x2='70' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='82' y1='52' x2='82' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='94' y1='52' x2='94' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='106' y1='52' x2='106' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='118' y1='52' x2='118' y2='112' stroke='#93c5fd' stroke-width='0.5'/>
  <line x1='10' y1='58' x2='130' y2='58' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='64' x2='130' y2='64' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='70' x2='130' y2='70' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='76' x2='130' y2='76' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='82' x2='130' y2='82' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='88' x2='130' y2='88' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='94' x2='130' y2='94' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='100' x2='130' y2='100' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='106' x2='130' y2='106' stroke='#93c5fd' stroke-width='0.5'/>
  <rect x='10' y='52' width='120' height='60' fill='none' stroke='#2563eb' stroke-width='1.5'/>
</svg>`,
              captionFr: "19 parts sur 100",
            },
          ],
        },
        { type: "heading", fr: "Comment lire une fraction", black: true },
        {
          type: "table",
          headersFr: ["Fraction", "Lecture", "Valeur décimale"],
          rows: [
            ["3/10", "trois dixièmes", "0,3"],
            ["62/10", "soixante-deux dixièmes", "6,2"],
            ["19/100", "dix-neuf centièmes", "0,19"],
            ["184/100", "cent quatre-vingt-quatre centièmes", "1,84"],
          ],
          captionFr: "Les fractions > 1 ont un numérateur plus grand que le dénominateur (ex : 62/10 = 6,2).",
        },
      ],
    },
    exercises: [],
  },
  {
    submoduleId: "A4-3",
    submoduleCode: "A4.3",
    theory: {
      title: { fr: "Fractions équivalentes", en: "Equivalent fractions", ar: "الكسور المتكافئة", fa: "کسرهای معادل", ti: "ማዕረ ፍርቂ", uk: "Рівні дроби" },
      paragraphs: {
        fr: [
          "Deux fractions sont équivalentes si elles ont la même valeur. On peut multiplier ou diviser le numérateur et le dénominateur par le même nombre (non nul) sans changer la valeur.",
          "Exemple d'agrandissement : 1/2 = 2/4 = 3/6 = 4/8 (on multiplie par 2, 3, 4…).",
          "Exemple de réduction : 6/8 = 3/4 (on divise numérateur et dénominateur par 2).",
          "Simplifier une fraction, c'est la réduire au plus petit numérateur et dénominateur possibles en divisant par le PGCD.",
        ],
        en: [
          "Two fractions are equivalent if they have the same value. We can multiply or divide both numerator and denominator by the same nonzero number without changing the value.",
          "Enlarging: 1/2 = 2/4 = 3/6 = 4/8 (multiply by 2, 3, 4…).",
          "Reducing: 6/8 = 3/4 (divide numerator and denominator by 2).",
          "Simplifying means reducing to the smallest possible numerator and denominator by dividing by the GCD.",
        ],
        ar: [
          "كسران متكافئان إذا كانا متساويي القيمة. يمكن ضرب البسط والمقام بنفس العدد أو قسمتهما عليه دون تغيير القيمة.",
          "توسيع: 1/2 = 2/4 = 3/6 = 4/8 (نضرب في 2، 3، 4…).",
          "اختزال: 6/8 = 3/4 (نقسم البسط والمقام على 2).",
          "تبسيط الكسر يعني تحويله إلى أصغر بسط ومقام ممكنين بالقسمة على ق.م.أ.",
        ],
        fa: [
          "دو کسر معادلند اگر مقدار یکسانی داشته باشند. می‌توان صورت و مخرج را با یک عدد غیر صفر ضرب یا تقسیم کرد بدون اینکه مقدار تغییر کند.",
          "بزرگ‌سازی: ۱/۲ = ۲/۴ = ۳/۶ = ۴/۸ (ضرب در ۲، ۳، ۴…).",
          "کوچک‌سازی: ۶/۸ = ۳/۴ (صورت و مخرج را بر ۲ تقسیم کنید).",
          "ساده کردن یعنی رساندن کسر به کوچکترین صورت و مخرج ممکن با تقسیم بر ب.م.م.",
        ],
        ti: [
          "ክልተ ፍርቂ ማዕረ ዋጋ ዘለዎም እንተኾነ ማዕረ ፍርቂ ይብሃሉ። ናይ ዝለዓለ ምስ ዝሕደር ቁጽሪ ብሓደ ቁጽሪ ዘርፍ ወይ ካፍሎ ዋጋ ኣይቀይርን።",
          "ዕቤት: 1/2 = 2/4 = 3/6 = 4/8 (ብ 2, 3, 4… ዘርፍ).",
          "ምጉዳልካ: 6/8 = 3/4 (ናይ ዝለዓለ ምስ ዝሕደር ቁጽሪ ብ 2 ካፍሎ).",
          "ምቅጻር ናይ ፍርቂ ብ PGCD ኣካፊልካ ናብ ዝነኣሰ ቁጽርታት ምምጻእ ማለት እዩ።",
        ],
        uk: [
          "Два дроби рівні, якщо вони мають однакове значення. Можна множити або ділити і чисельник, і знаменник на одне й те саме ненульове число, не змінюючи значення.",
          "Розширення: 1/2 = 2/4 = 3/6 = 4/8 (множимо на 2, 3, 4…).",
          "Скорочення: 6/8 = 3/4 (ділимо чисельник і знаменник на 2).",
          "Спрощення означає приведення до найменших можливих чисельника і знаменника діленням на НСД.",
        ],
      },
    },
    exercises: [
      { id: "a4-3-e1", promptFr: "Simplifiez 6/8.", type: "short_text", acceptable: ["3/4"] },
      { id: "a4-3-e2", promptFr: "Simplifiez 12/16.", type: "short_text", acceptable: ["3/4"] },
      { id: "a4-3-e3", promptFr: "Trouvez une fraction équivalente à 1/3 avec dénominateur 9.", type: "short_text", acceptable: ["3/9"] },
      { id: "a4-3-e4", promptFr: "Simplifiez 10/15.", type: "short_text", acceptable: ["2/3"] },
      { id: "a4-3-e5", promptFr: "Simplifiez 18/24.", type: "short_text", acceptable: ["3/4"] },
    ],
  },
  {
    submoduleId: "A4-4",
    submoduleCode: "A4.4",
    theory: {
      title: { fr: "Comparaison de fractions", en: "Comparing fractions", ar: "مقارنة الكسور", fa: "مقایسه کسرها", ti: "ምውድዳር ፍርቂ", uk: "Порівняння дробів" },
      paragraphs: {
        fr: [
          "Pour comparer deux fractions avec le même dénominateur, il suffit de comparer les numérateurs : la plus grande fraction a le plus grand numérateur. Exemple : 3/7 < 5/7 (car 3 < 5).",
          "Pour comparer deux fractions avec des dénominateurs différents, on les ramène au même dénominateur (dénominateur commun = PPCM). Exemple : comparer 2/3 et 3/4 → PPCM(3,4)=12 → 2/3 = 8/12 et 3/4 = 9/12 → 8/12 < 9/12 → 2/3 < 3/4.",
          "Une fraction est supérieure à 1 si son numérateur est plus grand que son dénominateur. Exemple : 5/4 > 1.",
        ],
        en: [
          "To compare fractions with the same denominator, compare the numerators: the larger fraction has the larger numerator. Example: 3/7 < 5/7.",
          "To compare fractions with different denominators, find a common denominator (LCM). Example: 2/3 vs 3/4 → LCM(3,4)=12 → 8/12 < 9/12 → 2/3 < 3/4.",
          "A fraction is greater than 1 if its numerator is larger than its denominator. Example: 5/4 > 1.",
        ],
        ar: [
          "لمقارنة كسرين بنفس المقام، قارن البسطين: الكسر الأكبر له البسط الأكبر. مثال: 3/7 < 5/7.",
          "لمقارنة كسرين بمقامين مختلفين، حوّل إلى مقام مشترك (م.م.أ). مثال: 2/3 مقابل 3/4 → م.م.أ=12 → 8/12 < 9/12 → 2/3 < 3/4.",
          "الكسر أكبر من 1 إذا كان بسطه أكبر من مقامه. مثال: 5/4 > 1.",
        ],
        fa: [
          "برای مقایسه دو کسر با مخرج یکسان، صورت‌ها را مقایسه کنید: کسر بزرگتر صورت بزرگتری دارد. مثال: ۳/۷ < ۵/۷.",
          "برای مقایسه کسرها با مخرج‌های متفاوت، مخرج مشترک پیدا کنید (ک.م.م). مثال: ۲/۳ در مقابل ۳/۴ → ک.م.م=۱۲ → ۸/۱۲ < ۹/۱۲ → ۲/۳ < ۳/۴.",
          "یک کسر از ۱ بزرگتر است اگر صورت آن از مخرج بزرگتر باشد. مثال: ۵/۴ > ۱.",
        ],
        ti: [
          "ሓደ ሚዛን ዘለዎም ክልተ ፍርቂ ምውድዳር ናይ ዝለዓለ ቁጽርታት ምውድዳር ብቕልጽምነቱ ይኣክል። ዝዓቢ ዝለዓለ ቁጽሪ ዝዓቢ ፍርቂ ይህብ። ኣብነት: 3/7 < 5/7.",
          "ዝተፈላለየ ሚዛን ዘለዎም ፍርቂ ምውድዳር ሓባራዊ ሚዛን ቁጽሪ ምርካብ (PPCM) ይሓትት። ኣብነት: 2/3 vs 3/4 → PPCM=12 → 8/12 < 9/12 → 2/3 < 3/4.",
          "ሚዛን ቁጽሪ ካብ ዝለዓለ ቁጽሪ ዝዓቢ ፍርቂ ካብ 1 ዝዓቢ እዩ። ኣብነት: 5/4 > 1.",
        ],
        uk: [
          "Щоб порівняти дроби з однаковим знаменником, порівняйте чисельники: більший дріб має більший чисельник. Приклад: 3/7 < 5/7.",
          "Щоб порівняти дроби з різними знаменниками, зведіть до спільного знаменника (НСК). Приклад: 2/3 проти 3/4 → НСК=12 → 8/12 < 9/12 → 2/3 < 3/4.",
          "Дріб більший за 1, якщо його чисельник більший за знаменник. Приклад: 5/4 > 1.",
        ],
      },
    },
    exercises: [
      { id: "a4-4-e1", promptFr: "Comparez 3/7 et 5/7 avec < ou >.", type: "short_text", acceptable: ["3/7 < 5/7", "<"] },
      { id: "a4-4-e2", promptFr: "Comparez 2/3 et 3/4 avec < ou >.", type: "short_text", acceptable: ["2/3 < 3/4", "<"] },
      { id: "a4-4-e3", promptFr: "5/4 est-il plus grand que 1 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a4-4-e4", promptFr: "Comparez 5/6 et 7/8 (quel est le plus grand ?)", type: "short_text", acceptable: ["7/8"] },
      { id: "a4-4-e5", promptFr: "Comparez 1/2 et 2/5 avec < ou >.", type: "short_text", acceptable: ["1/2 > 2/5", ">"] },
    ],
  },
  {
    submoduleId: "A4-5",
    submoduleCode: "A4.5",
    theory: {
      title: { fr: "Addition/soustraction même dénominateur", en: "Add/subtract same denominator", ar: "الجمع والطرح بنفس المقام", fa: "جمع/تفریق با مخرج یکسان", ti: "ምደማር/ምቅናስ ሓደ ሚዛን", uk: "Додавання/віднімання однаковий знаменник" },
      paragraphs: {
        fr: [
          "Pour additionner ou soustraire deux fractions qui ont le même dénominateur, on additionne ou soustrait les numérateurs et on garde le même dénominateur.",
          "Exemples : 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (simplifié).",
          "On simplifie le résultat si possible en divisant par le PGCD du numérateur et du dénominateur.",
        ],
        en: [
          "To add or subtract fractions with the same denominator, add or subtract the numerators and keep the same denominator.",
          "Examples: 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (simplified).",
          "Simplify the result if possible by dividing by the GCD of numerator and denominator.",
        ],
        ar: [
          "لجمع أو طرح كسرين بنفس المقام، نجمع أو نطرح البسطين ونحتفظ بنفس المقام.",
          "أمثلة: 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (مبسّط).",
          "نبسّط الناتج إذا أمكن بالقسمة على ق.م.أ للبسط والمقام.",
        ],
        fa: [
          "برای جمع یا تفریق دو کسر با مخرج یکسان، صورت‌ها را جمع یا تفریق کنید و مخرج را نگه دارید.",
          "مثال‌ها: ۳/۷ + ۲/۷ = ۵/۷. ۵/۸ − ۳/۸ = ۲/۸ = ۱/۴ (ساده شده).",
          "در صورت امکان با تقسیم بر ب.م.م صورت و مخرج را ساده کنید.",
        ],
        ti: [
          "ሓደ ሚዛን ናይ ዘለዎም ክልተ ፍርቂ ምደማር ወይ ምቅናስ ናይ ዝለዓለ ቁጽርታት ምደማር ወይ ምቅናስ ብሓደ ሚዛን ቁጽሪ ምሓዝ ማለት እዩ።",
          "ኣብነት: 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (ቅጸ ዝሓሸ).",
          "ናይ PGCD ናይ ዝለዓለ ምስ ሚዛን ቁጽሪ ምቅጻር እንተተኻኢሉ ቅጸ ዝሓሸ.",
        ],
        uk: [
          "Щоб додати або відняти дроби з однаковим знаменником, додайте або відніміть чисельники та збережіть знаменник.",
          "Приклади: 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (спрощено).",
          "Спростіть результат, якщо можливо, поділивши на НСД чисельника і знаменника.",
        ],
      },
    },
    exercises: [
      { id: "a4-5-e1", promptFr: "Calculez 3/7 + 2/7.", type: "short_text", acceptable: ["5/7"] },
      { id: "a4-5-e2", promptFr: "Calculez 5/8 − 3/8 (simplifiez).", type: "short_text", acceptable: ["1/4", "2/8"] },
      { id: "a4-5-e3", promptFr: "Calculez 7/9 − 4/9.", type: "short_text", acceptable: ["3/9", "1/3"] },
      { id: "a4-5-e4", promptFr: "Calculez 2/5 + 4/5 (simplifiez).", type: "short_text", acceptable: ["6/5", "1 1/5"] },
      { id: "a4-5-e5", promptFr: "Calculez 11/12 − 5/12.", type: "short_text", acceptable: ["6/12", "1/2"] },
    ],
  },
  {
    submoduleId: "A4-6",
    submoduleCode: "A4.6",
    theory: {
      title: { fr: "Addition/soustraction dénominateurs différents (PPCM)", en: "Add/subtract different denominators (LCM)", ar: "الجمع والطرح بمقامين مختلفين", fa: "جمع/تفریق با مخرج‌های مختلف", ti: "ምደማር/ምቅናስ ዝተፈላለየ ሚዛን", uk: "Різні знаменники (НСК)" },
      paragraphs: {
        fr: [
          "Pour additionner ou soustraire des fractions avec des dénominateurs différents, il faut d'abord trouver un dénominateur commun (idéalement le PPCM des dénominateurs).",
          "Étapes : 1) Trouver le PPCM des dénominateurs. 2) Transformer chaque fraction en fraction équivalente avec ce dénominateur. 3) Additionner ou soustraire les numérateurs. 4) Simplifier si possible.",
          "Exemple : 1/3 + 1/4 → PPCM(3,4) = 12 → 1/3 = 4/12 et 1/4 = 3/12 → 4/12 + 3/12 = 7/12.",
        ],
        en: [
          "To add or subtract fractions with different denominators, first find a common denominator (ideally the LCM).",
          "Steps: 1) Find LCM of denominators. 2) Convert each fraction to equivalent fraction with that denominator. 3) Add or subtract numerators. 4) Simplify if possible.",
          "Example: 1/3 + 1/4 → LCM(3,4)=12 → 4/12 + 3/12 = 7/12.",
        ],
        ar: [
          "لجمع أو طرح كسور بمقامات مختلفة، ابحث أولًا عن مقام مشترك (م.م.أ للمقامين).",
          "الخطوات: 1) إيجاد م.م.أ. 2) تحويل كل كسر إلى كسر مكافئ بذلك المقام. 3) جمع أو طرح البسطين. 4) تبسيط إن أمكن.",
          "مثال: 1/3 + 1/4 → م.م.أ(3,4)=12 → 4/12 + 3/12 = 7/12.",
        ],
        fa: [
          "برای جمع یا تفریق کسرها با مخرج‌های متفاوت، ابتدا مخرج مشترک پیدا کنید (به طور ایده‌آل ک.م.م).",
          "مراحل: ۱) ک.م.م مخرج‌ها را بیابید. ۲) هر کسر را به کسر معادل با آن مخرج تبدیل کنید. ۳) صورت‌ها را جمع یا تفریق کنید. ۴) در صورت امکان ساده کنید.",
          "مثال: ۱/۳ + ۱/۴ → ک.م.م(۳،۴)=۱۲ → ۴/۱۲ + ۳/۱۲ = ۷/۱۲.",
        ],
        ti: [
          "ዝተፈላለየ ሚዛን ናይ ዘለዎም ፍርቂ ምደማር ወይ ምቅናስ ቅድሚ ሓባራዊ ሚዛን ምርካብ (ዝበለጸ PPCM) ይሓትት።",
          "ስጉምቲ: 1) PPCM ናይ ሚዛን ቁጽርታት ረኽቦ. 2) ነፍሲ ዱ ፍርቂ ናብ ሓደ ሚዛን ማዕረ ፍርቂ ቀይሮ. 3) ናይ ዝለዓለ ቁጽርታት ደምር ወይ ቀንስ. 4) ቅጸ ዝሓሸ ተኻኢሉ.",
          "ኣብነት: 1/3 + 1/4 → PPCM(3,4)=12 → 4/12 + 3/12 = 7/12.",
        ],
        uk: [
          "Щоб додати або відняти дроби з різними знаменниками, спочатку знайдіть спільний знаменник (НСК).",
          "Кроки: 1) Знайти НСК знаменників. 2) Перетворити кожен дріб у рівноцінний з цим знаменником. 3) Додати або відняти чисельники. 4) Спростити якщо можливо.",
          "Приклад: 1/3 + 1/4 → НСК(3,4)=12 → 4/12 + 3/12 = 7/12.",
        ],
      },
    },
    exercises: [
      { id: "a4-6-e1", promptFr: "Calculez 1/3 + 1/4.", type: "short_text", acceptable: ["7/12"] },
      { id: "a4-6-e2", promptFr: "Calculez 1/2 + 1/3.", type: "short_text", acceptable: ["5/6"] },
      { id: "a4-6-e3", promptFr: "Calculez 3/4 − 1/3.", type: "short_text", acceptable: ["5/12"] },
      { id: "a4-6-e4", promptFr: "Calculez 2/5 + 3/10.", type: "short_text", acceptable: ["7/10"] },
      { id: "a4-6-e5", promptFr: "Calculez 5/6 − 1/4.", type: "short_text", acceptable: ["7/12"] },
    ],
  },
  {
    submoduleId: "A4-7",
    submoduleCode: "A4.7",
    theory: {
      title: { fr: "Multiplication de fractions", en: "Multiplication of fractions", ar: "ضرب الكسور", fa: "ضرب کسرها", ti: "ዘርፊ ፍርቂ", uk: "Множення дробів" },
      paragraphs: {
        fr: [
          "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux. (a/b) × (c/d) = (a×c) / (b×d).",
          "Exemple : (2/3) × (3/4) = (2×3)/(3×4) = 6/12 = 1/2 (simplifié).",
          "Avant de multiplier, on peut simplifier en croix : si un numérateur et un dénominateur ont un facteur commun, on les simplifie. Exemple : (2/3) × (3/4) → on peut simplifier 3 en haut et 3 en bas → (2/1) × (1/4) = 2/4 = 1/2.",
        ],
        en: [
          "To multiply two fractions, multiply the numerators and multiply the denominators. (a/b) × (c/d) = (a×c)/(b×d).",
          "Example: (2/3) × (3/4) = 6/12 = 1/2 (simplified).",
          "Before multiplying, you can cross-simplify: if a numerator and denominator share a common factor, simplify them. Example: simplify the 3s → (2/1) × (1/4) = 2/4 = 1/2.",
        ],
        ar: [
          "لضرب كسرين، نضرب البسطين معًا والمقامين معًا. (أ/ب) × (ج/د) = (أ×ج)/(ب×د).",
          "مثال: (2/3) × (3/4) = 6/12 = 1/2 (مبسّط).",
          "قبل الضرب، يمكن التبسيط القطري: إذا تشارك بسط ومقام عاملًا مشتركًا نبسّطهما. مثال: تبسيط 3 في الأعلى و3 في الأسفل → (2/1) × (1/4) = 2/4 = 1/2.",
        ],
        fa: [
          "برای ضرب دو کسر، صورت‌ها را در هم و مخرج‌ها را در هم ضرب کنید. (a/b) × (c/d) = (a×c)/(b×d).",
          "مثال: (۲/۳) × (۳/۴) = ۶/۱۲ = ۱/۲ (ساده شده).",
          "قبل از ضرب، می‌توان ساده‌سازی ضربدری کرد: اگر صورت و مخرج عامل مشترک دارند، ساده کنید. مثال: ساده‌سازی ۳ بالا و ۳ پایین → (۲/۱) × (۱/۴) = ۲/۴ = ۱/۲.",
        ],
        ti: [
          "ክልተ ፍርቂ ምዝርፋፍ ናይ ዝለዓለ ቁጽርታት ምዝርፋፍ ምስ ናይ ሚዛን ቁጽርታት ምዝርፋፍ ማለት እዩ። (a/b) × (c/d) = (a×c)/(b×d).",
          "ኣብነት: (2/3) × (3/4) = 6/12 = 1/2 (ቅጸ ዝሓሸ).",
          "ቅድሚ ምዝርፋፍ ዘርፊ ቀለጣ ምቅጻር ይከኣል። ኣብነት: 3 ዝለዓለ ምስ 3 ሚዛን ምቅጻር → (2/1) × (1/4) = 2/4 = 1/2.",
        ],
        uk: [
          "Щоб помножити два дроби, перемножте чисельники і перемножте знаменники. (a/b) × (c/d) = (a×c)/(b×d).",
          "Приклад: (2/3) × (3/4) = 6/12 = 1/2 (спрощено).",
          "Перед множенням можна скорочувати хрест-навхрест: якщо чисельник і знаменник мають спільний множник, скоротіть. Приклад: скорочуємо 3 — (2/1) × (1/4) = 2/4 = 1/2.",
        ],
      },
    },
    exercises: [
      { id: "a4-7-e1", promptFr: "Calculez (2/3) × (3/4) (simplifiez).", type: "short_text", acceptable: ["1/2", "6/12"] },
      { id: "a4-7-e2", promptFr: "Calculez (3/5) × (5/9) (simplifiez).", type: "short_text", acceptable: ["1/3", "15/45"] },
      { id: "a4-7-e3", promptFr: "Calculez (4/7) × (7/8) (simplifiez).", type: "short_text", acceptable: ["1/2", "4/8"] },
      { id: "a4-7-e4", promptFr: "Calculez (2/5) × (10/3).", type: "short_text", acceptable: ["4/3", "20/15"] },
      { id: "a4-7-e5", promptFr: "Calculez (3/4) × (8/9) (simplifiez).", type: "short_text", acceptable: ["2/3", "24/36"] },
    ],
  },
  {
    submoduleId: "A4-8",
    submoduleCode: "A4.8",
    theory: {
      title: { fr: "Division de fractions (inverse)", en: "Division of fractions (inverse)", ar: "قسمة الكسور (المعكوس)", fa: "تقسیم کسرها (معکوس)", ti: "ክፍፍል ፍርቂ (ተቃራኒ)", uk: "Ділення дробів (обернений дріб)" },
      paragraphs: {
        fr: [
          "L'inverse (ou réciproque) d'une fraction a/b est b/a. On échange numérateur et dénominateur. Exemple : l'inverse de 3/4 est 4/3.",
          "Pour diviser une fraction par une autre, on multiplie par l'inverse du diviseur. (a/b) ÷ (c/d) = (a/b) × (d/c) = (a×d)/(b×c).",
          "Exemple : (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
        ],
        en: [
          "The inverse (reciprocal) of a/b is b/a. Swap numerator and denominator. Example: inverse of 3/4 is 4/3.",
          "To divide one fraction by another, multiply by the reciprocal of the divisor. (a/b) ÷ (c/d) = (a/b) × (d/c).",
          "Example: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
        ],
        ar: [
          "معكوس الكسر a/b هو b/a. نبدّل البسط والمقام. مثال: معكوس 3/4 هو 4/3.",
          "لقسمة كسر على آخر، نضرب في معكوس المقسوم عليه. (a/b) ÷ (c/d) = (a/b) × (d/c).",
          "مثال: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
        ],
        fa: [
          "معکوس کسر a/b عبارت است از b/a. صورت و مخرج را جابجا کنید. مثال: معکوس ۳/۴ عبارت است از ۴/۳.",
          "برای تقسیم یک کسر بر کسر دیگر، در معکوس مقسوم‌علیه ضرب کنید. (a/b) ÷ (c/d) = (a/b) × (d/c).",
          "مثال: (۳/۴) ÷ (۲/۵) = (۳/۴) × (۵/۲) = ۱۵/۸.",
        ],
        ti: [
          "ተቃራኒ ናይ a/b b/a እዩ። ዝለዓለ ምስ ሚዛን ቁጽሪ ቅደም ቅይሮ። ኣብነት: ተቃራኒ ናይ 3/4 4/3 እዩ.",
          "ሓደ ፍርቂ ብካሊእ ምካፋፍ ብተቃራኒ ናይ ካፋሊ ምዝርፋፍ ማለት እዩ። (a/b) ÷ (c/d) = (a/b) × (d/c).",
          "ኣብነት: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
        ],
        uk: [
          "Обернений дріб (обернений) до a/b — це b/a. Міняємо чисельник і знаменник. Приклад: обернений до 3/4 — це 4/3.",
          "Щоб поділити один дріб на інший, множимо на обернений дільник. (a/b) ÷ (c/d) = (a/b) × (d/c).",
          "Приклад: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
        ],
      },
    },
    exercises: [
      { id: "a4-8-e1", promptFr: "Quel est l'inverse de 3/4 ?", type: "short_text", acceptable: ["4/3"] },
      { id: "a4-8-e2", promptFr: "Calculez (3/4) ÷ (2/5).", type: "short_text", acceptable: ["15/8"] },
      { id: "a4-8-e3", promptFr: "Calculez (2/3) ÷ (4/9).", type: "short_text", acceptable: ["3/2", "18/12"] },
      { id: "a4-8-e4", promptFr: "Calculez (5/6) ÷ (5/3).", type: "short_text", acceptable: ["1/2", "15/30"] },
      { id: "a4-8-e5", promptFr: "Calculez (7/8) ÷ (7/4).", type: "short_text", acceptable: ["1/2", "28/56"] },
    ],
  },
  {
    submoduleId: "A4-9",
    submoduleCode: "A4.9",
    theory: {
      title: { fr: "Fractions et décimaux", en: "Fractions and decimals", ar: "الكسور والأعداد العشرية", fa: "کسرها و اعشار", ti: "ፍርቂ ምስ ቁጽሪ ቪርጉላ", uk: "Дроби і десяткові числа" },
      paragraphs: {
        fr: [
          "Pour transformer une fraction en nombre décimal, on divise le numérateur par le dénominateur. Exemple : 3/4 = 3 ÷ 4 = 0,75.",
          "Quelques conversions utiles : 1/2 = 0,5 ; 1/4 = 0,25 ; 3/4 = 0,75 ; 1/3 ≈ 0,333… ; 2/3 ≈ 0,667…",
          "Pour transformer un nombre décimal en fraction, on écrit le nombre sans virgule au numérateur, et une puissance de 10 au dénominateur selon le nombre de décimales. Exemple : 0,75 = 75/100 = 3/4 (simplifié).",
        ],
        en: [
          "To convert a fraction to a decimal, divide the numerator by the denominator. Example: 3/4 = 3 ÷ 4 = 0.75.",
          "Useful conversions: 1/2=0.5; 1/4=0.25; 3/4=0.75; 1/3≈0.333…; 2/3≈0.667…",
          "To convert a decimal to a fraction, write the number without decimal point as the numerator, and a power of 10 as the denominator based on the number of decimal places. Example: 0.75 = 75/100 = 3/4.",
        ],
        ar: [
          "لتحويل كسر إلى عدد عشري، نقسم البسط على المقام. مثال: 3/4 = 3 ÷ 4 = 0,75.",
          "تحويلات مفيدة: 1/2=0,5 ; 1/4=0,25 ; 3/4=0,75 ; 1/3≈0,333… ; 2/3≈0,667…",
          "لتحويل عدد عشري إلى كسر، نكتب العدد بدون فاصلة في البسط وقوة من 10 في المقام حسب عدد الخانات العشرية. مثال: 0,75 = 75/100 = 3/4.",
        ],
        fa: [
          "برای تبدیل کسر به عدد اعشاری، صورت را بر مخرج تقسیم کنید. مثال: ۳/۴ = ۳ ÷ ۴ = ۰٫۷۵.",
          "تبدیل‌های مفید: ۱/۲=۰٫۵؛ ۱/۴=۰٫۲۵؛ ۳/۴=۰٫۷۵؛ ۱/۳≈۰٫۳۳۳…؛ ۲/۳≈۰٫۶۶۷…",
          "برای تبدیل عدد اعشاری به کسر، عدد بدون اعشار را صورت کنید و توانی از ۱۰ را بر اساس تعداد اعشار به عنوان مخرج قرار دهید. مثال: ۰٫۷۵ = ۷۵/۱۰۰ = ۳/۴.",
        ],
        ti: [
          "ፍርቂ ናብ ቁጽሪ ቪርጉላ ምቅያር ዝለዓለ ቁጽሪ ብሚዛን ቁጽሪ ምካፋፍ ማለት እዩ። ኣብነት: 3/4 = 3 ÷ 4 = 0,75.",
          "ጠቃሚ ቅያሮ: 1/2=0,5; 1/4=0,25; 3/4=0,75; 1/3≈0,333…; 2/3≈0,667…",
          "ቁጽሪ ቪርጉላ ናብ ፍርቂ ምቅያር ቪርጉላ ዘይብሉ ቁጽሪ ዝለዓለ ቁጽሪ ናይ ሚዛን ቁጽሪ ናይ ዓሰርተ ሓይሊ ብቁጽሪ ቪርጉላ። ኣብነት: 0,75 = 75/100 = 3/4.",
        ],
        uk: [
          "Щоб перетворити дріб у десятковий дріб, поділіть чисельник на знаменник. Приклад: 3/4 = 3 ÷ 4 = 0,75.",
          "Корисні перетворення: 1/2=0,5; 1/4=0,25; 3/4=0,75; 1/3≈0,333…; 2/3≈0,667…",
          "Щоб перетворити десятковий дріб у звичайний, запишіть число без коми як чисельник, і степінь 10 (за кількістю десяткових знаків) як знаменник. Приклад: 0,75 = 75/100 = 3/4.",
        ],
      },
    },
    exercises: [
      { id: "a4-9-e1", promptFr: "Transformez 3/4 en nombre décimal.", type: "number", acceptable: ["0.75", "0,75"] },
      { id: "a4-9-e2", promptFr: "Transformez 1/2 en nombre décimal.", type: "number", acceptable: ["0.5", "0,5"] },
      { id: "a4-9-e3", promptFr: "Transformez 0,25 en fraction simplifiée.", type: "short_text", acceptable: ["1/4"] },
      { id: "a4-9-e4", promptFr: "Transformez 0,6 en fraction (puis simplifiez).", type: "short_text", acceptable: ["3/5", "6/10"] },
      { id: "a4-9-e5", promptFr: "Transformez 1/5 en nombre décimal.", type: "number", acceptable: ["0.2", "0,2"] },
    ],
  },
];
