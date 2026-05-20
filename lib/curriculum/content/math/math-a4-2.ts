import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_2_LESSON: MathSubmoduleLesson = {
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
        { type: "heading", fr: "Comment lire une fraction", black: true },
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
  <line x1='52' y1='25' x2='88' y2='25' stroke='#0f172a' stroke-width='2.5' stroke-linecap='round'/>
  <text x='70' y='42' text-anchor='middle' font-size='18' font-weight='700' fill='#0f172a' font-family='Century Schoolbook,Georgia,serif'>10</text>
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
  <line x1='46' y1='25' x2='94' y2='25' stroke='#0f172a' stroke-width='2.5' stroke-linecap='round'/>
  <text x='70' y='42' text-anchor='middle' font-size='18' font-weight='700' fill='#0f172a' font-family='Century Schoolbook,Georgia,serif'>100</text>
  <rect x='10' y='52' width='120' height='60' fill='#eff6ff' stroke='#2563eb' stroke-width='1.5'/>
  <rect x='10' y='52' width='120' height='6' fill='#3b82f6'/>
  <rect x='10' y='58' width='108' height='6' fill='#3b82f6'/>
  <line x1='22' y1='52' x2='22' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='34' y1='52' x2='34' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='46' y1='52' x2='46' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='58' y1='52' x2='58' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='70' y1='52' x2='70' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='82' y1='52' x2='82' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='94' y1='52' x2='94' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='106' y1='52' x2='106' y2='112' stroke='#93c5fd' stroke-width='0.5'/><line x1='118' y1='52' x2='118' y2='112' stroke='#93c5fd' stroke-width='0.5'/>
  <line x1='10' y1='58' x2='130' y2='58' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='64' x2='130' y2='64' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='70' x2='130' y2='70' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='76' x2='130' y2='76' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='82' x2='130' y2='82' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='88' x2='130' y2='88' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='94' x2='130' y2='94' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='100' x2='130' y2='100' stroke='#93c5fd' stroke-width='0.5'/><line x1='10' y1='106' x2='130' y2='106' stroke='#93c5fd' stroke-width='0.5'/>
  <rect x='10' y='52' width='120' height='60' fill='none' stroke='#2563eb' stroke-width='1.5'/>
</svg>`,
              captionFr: "19 parts sur 100",
            },
            {
              markup: `<svg viewBox='0 0 140 105' xmlns='http://www.w3.org/2000/svg' style='width:100%;display:block;margin:0 auto'>
  <text x='70' y='20' text-anchor='middle' font-size='18' font-weight='700' fill='#1d4ed8' font-family='Century Schoolbook,Georgia,serif'>62</text>
  <line x1='46' y1='25' x2='94' y2='25' stroke='#0f172a' stroke-width='2.5' stroke-linecap='round'/>
  <text x='70' y='42' text-anchor='middle' font-size='18' font-weight='700' fill='#0f172a' font-family='Century Schoolbook,Georgia,serif'>10</text>
  <rect x='10' y='52' width='120' height='40' fill='#3b82f6' stroke='#2563eb' stroke-width='1.5'/>
  <line x1='22' y1='52' x2='22' y2='92' stroke='white' stroke-width='1'/><line x1='34' y1='52' x2='34' y2='92' stroke='white' stroke-width='1'/><line x1='46' y1='52' x2='46' y2='92' stroke='white' stroke-width='1'/><line x1='58' y1='52' x2='58' y2='92' stroke='white' stroke-width='1'/><line x1='70' y1='52' x2='70' y2='92' stroke='white' stroke-width='1'/><line x1='82' y1='52' x2='82' y2='92' stroke='white' stroke-width='1'/><line x1='94' y1='52' x2='94' y2='92' stroke='white' stroke-width='1'/><line x1='106' y1='52' x2='106' y2='92' stroke='white' stroke-width='1'/><line x1='118' y1='52' x2='118' y2='92' stroke='white' stroke-width='1'/>
  <rect x='10' y='52' width='120' height='40' fill='none' stroke='#2563eb' stroke-width='1.5'/>
  <text x='70' y='100' text-anchor='middle' font-size='9' fill='#1d4ed8' font-family='system-ui'>= 6,2 (plus d'1 unité)</text>
</svg>`,
              captionFr: "62 parts sur 10",
            },
          ],
        },
      ],
    },
    exercises: [],
  };
