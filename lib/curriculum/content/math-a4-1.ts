import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_1_LESSON: MathSubmoduleLesson = {
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
  };
