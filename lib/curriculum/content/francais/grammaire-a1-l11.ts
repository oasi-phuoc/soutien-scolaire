import type { GrammarLesson } from "../../grammar-data";

const C = "#E8604A"; // orange-red — l'objet / la personne
const T = "#1BA8A8"; // teal — la référence spatiale

const svg = (body: string) =>
  `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto">${body}</svg>`;

const rect = (x: number, y: number, w: number, h: number, r = 3, color = T) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${color}"/>`;

const circle = (cx: number, cy: number, r: number, color = C) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/>`;

const PREPS = [
  // ── Verticals ────────────────────────────────────────────────────────────────
  {
    label: "sur",
    svg: svg(
      rect(12, 46, 56, 18) +
      circle(40, 33, 13)
    ),
  },
  {
    label: "au-dessus de",
    svg: svg(
      rect(12, 54, 56, 14) +
      circle(40, 23, 13)
    ),
  },
  {
    label: "sous",
    svg: svg(
      rect(12, 16, 56, 18) +
      circle(40, 47, 13)
    ),
  },
  {
    label: "en-dessous de",
    svg: svg(
      rect(12, 10, 56, 16) +
      circle(40, 57, 13)
    ),
  },

  // ── Inside / outside ─────────────────────────────────────────────────────────
  {
    label: "dans",
    svg: svg(
      `<rect x="8" y="8" width="64" height="64" rx="4" fill="none" stroke="${T}" stroke-width="5"/>` +
      circle(40, 40, 18)
    ),
  },
  {
    label: "à l'extérieur de",
    svg: svg(
      `<rect x="28" y="10" width="44" height="60" rx="4" fill="none" stroke="${T}" stroke-width="5"/>` +
      circle(12, 40, 10)
    ),
  },

  // ── Front / back ─────────────────────────────────────────────────────────────
  {
    label: "devant",
    svg: svg(
      rect(28, 18, 44, 44) +
      circle(32, 40, 16)
    ),
  },
  {
    label: "derrière",
    svg: svg(
      circle(50, 40, 16) +
      rect(8, 18, 44, 44)
    ),
  },

  // ── Between / among ──────────────────────────────────────────────────────────
  {
    label: "entre",
    svg: svg(
      rect(4, 22, 14, 36) +
      rect(62, 22, 14, 36) +
      circle(40, 40, 14)
    ),
  },
  {
    label: "parmi",
    svg: svg(
      circle(20, 20, 9, T) +
      circle(46, 13, 9, T) +
      circle(65, 22, 9, T) +
      circle(10, 44, 9, T) +
      circle(68, 44, 9, T) +
      circle(18, 65, 9, T) +
      circle(52, 65, 9, T) +
      circle(38, 40, 14)
    ),
  },

  // ── Side / distance ──────────────────────────────────────────────────────────
  {
    label: "à côté de",
    svg: svg(
      rect(40, 18, 34, 44) +
      circle(25, 40, 14)
    ),
  },
  {
    label: "en face de",
    svg: svg(
      circle(16, 40, 13) +
      circle(64, 40, 13, T) +
      `<line x1="31" y1="40" x2="49" y2="40" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="3,3"/>`
    ),
  },
  {
    label: "près de",
    svg: svg(
      rect(46, 20, 28, 40) +
      circle(24, 40, 12)
    ),
  },
  {
    label: "loin de",
    svg: svg(
      rect(56, 28, 20, 24, 2) +
      circle(10, 40, 9) +
      `<line x1="21" y1="40" x2="54" y2="40" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="4,3"/>`
    ),
  },

  // ── Against / at ─────────────────────────────────────────────────────────────
  {
    label: "contre",
    svg: svg(
      rect(40, 15, 32, 50) +
      circle(26, 40, 14)
    ),
  },
  {
    label: "chez (+ personne)",
    svg: svg(
      `<polygon points="8,42 40,12 72,42" fill="${T}"/>` +
      rect(16, 40, 48, 32, 2) +
      circle(40, 55, 11)
    ),
  },
];

export const A1_GR_L11: GrammarLesson = {
  slug: "a1-gr-l11",
  code: "R2.5",
  level: "A1",
  title: "Les prépositions de lieu",
  theory: [
    // ── Titre ────────────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Les prépositions de lieu",
      trans: {
        en: "Prepositions of place",
        ar: "حروف الجر المكانية",
        fa: "حروف اضافه مکانی",
        ti: "ናይ ቦታ ቅድሚ ስም ዝኸዱ ቃላት",
        uk: "Прийменники місця",
      },
    },

    {
      type: "plain_list",
      items: [
        "Les prépositions de lieu indiquent où se trouve quelque chose ou quelqu'un par rapport à un autre objet ou endroit.",
      ],
      transItems: {
        en: ["Prepositions of place indicate where something or someone is located in relation to another object or place."],
        ar: ["حروف الجر المكانية تدل على موقع شيء ما أو شخص ما بالنسبة لشيء آخر أو مكان آخر."],
        fa: ["حروف اضافه مکانی نشان می‌دهند که چیزی یا کسی نسبت به شیء یا مکان دیگری کجا قرار دارد."],
        ti: ["ናይ ቦታ ቅድሚ ስም ዝኸዱ ቃላት ኣበይ ነገር ወይ ሰብ ኣብ ዝኾነ ካልእ ነገር ወይ ቦታ ከምዘሎ ይሕብሩ።"],
        uk: ["Прийменники місця вказують, де знаходиться щось або хтось відносно іншого предмета чи місця."],
      },
    },

    // ── Illustrations ─────────────────────────────────────────────────────────
    { type: "illus_cards", items: PREPS, cols: 4 },

    // ── Exemples ─────────────────────────────────────────────────────────────────
    {
      type: "highlight",
      label: "Exemples en phrases",
      items: [
        "Le livre est {a}sur{/a} la table.",
        "Le chat est {a}sous{/a} la chaise.",
        "Il attend {a}devant{/a} l'école.",
        "Le jardin est {a}derrière{/a} la maison.",
        "La banque est {a}entre{/a} la poste et la pharmacie.",
        "La boulangerie est {a}à côté de{/a} la pharmacie.",
        "L'hôtel est {a}en face de{/a} la gare.",
        "Elle habite {a}chez{/a} ses parents.",
      ],
      transLabel: {
        en: "Example sentences",
        ar: "أمثلة في جمل",
        fa: "مثال‌هایی در جملات",
        ti: "ኣብ ሓሳባት ዝርከቡ ኣብነታት",
        uk: "Приклади речень",
      },
      transItems: {
        en: [
          "The book is {a}on{/a} the table.",
          "The cat is {a}under{/a} the chair.",
          "He waits {a}in front of{/a} the school.",
          "The garden is {a}behind{/a} the house.",
          "The bank is {a}between{/a} the post office and the pharmacy.",
          "The bakery is {a}next to{/a} the pharmacy.",
          "The hotel is {a}opposite{/a} the station.",
          "She lives {a}at{/a} her parents' place.",
        ],
        ar: [
          "الكتاب {a}على{/a} المائدة.",
          "القطة {a}تحت{/a} الكرسي.",
          "ينتظر {a}أمام{/a} المدرسة.",
          "الحديقة {a}خلف{/a} المنزل.",
          "البنك {a}بين{/a} البريد والصيدلية.",
          "المخبز {a}بجانب{/a} الصيدلية.",
          "الفندق {a}في مواجهة{/a} المحطة.",
          "هي تسكن {a}عند{/a} والديها.",
        ],
        fa: [
          "کتاب {a}روی{/a} میز است.",
          "گربه {a}زیر{/a} صندلی است.",
          "او {a}جلوی{/a} مدرسه منتظر است.",
          "باغ {a}پشت{/a} خانه است.",
          "بانک {a}بین{/a} پست و داروخانه است.",
          "نانوایی {a}کنار{/a} داروخانه است.",
          "هتل {a}روبروی{/a} ایستگاه است.",
          "او {a}پیش{/a} پدر و مادرش زندگی می‌کند.",
        ],
        ti: [
          "መጽሓፍ {a}ኣብ ልዕሊ{/a} ሜዳ ኣሎ።",
          "ድሙ {a}ትሕቲ{/a} ወንበር ኣሎ።",
          "{a}ቅድሚ{/a} ቤትትምህርቲ ይጽበ ኣሎ።",
          "ሓርሻ {a}ኣብ ሕቅፈት{/a} ቤቱ ኣሎ።",
          "ባንኪ {a}ኣብ መቐቐ{/a} ፖስጣን ፋርማሲን ኣሎ።",
          "ሓድሽ ዝተሃርዓ {a}ጸጋም{/a} ፋርማሲ ኣሎ።",
          "ሆቴል ምስ ናይ ባቡር ጣቢያ {a}ፊት ንፊት{/a} እዩ።",
          "ኣብ ቤት {a}ናይ{/a} ወለዳ ትቕመጥ ኣላ།",
        ],
        uk: [
          "Книга {a}на{/a} столі.",
          "Кіт {a}під{/a} стільцем.",
          "Він чекає {a}перед{/a} школою.",
          "Сад {a}позаду{/a} будинку.",
          "Банк {a}між{/a} поштою та аптекою.",
          "Пекарня {a}поруч з{/a} аптекою.",
          "Готель {a}навпроти{/a} вокзалу.",
          "Вона живе {a}у{/a} батьків.",
        ],
      },
    },

    // ── Contractions ─────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Articles contractés",
      sub: true,
      trans: {
        en: "Contracted articles",
        ar: "المقاطع المدمجة",
        fa: "حروف تعریف ادغام‌شده",
        ti: "ዝተሓጸሩ ናይ ዓንቀጽ",
        uk: "Злиті артиклі",
      },
    },

    {
      type: "grid",
      headers: ["Contraction", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}à + le → au{/a}", "Je vais {a}au{/a} marché. — L'appartement est {a}au{/a} 2ᵉ étage."],
        ["{a}à + les → aux{/a}", "Je parle {a}aux{/a} enfants. — Nous allons {a}aux{/a} Champs-Élysées."],
        ["{a}de + le → du{/a}", "loin {a}du{/a} centre — Il sort {a}du{/a} magasin."],
        ["{a}de + les → des{/a}", "près {a}des{/a} magasins — à côté {a}des{/a} bureaux."],
      ],
      transHeaders: {
        en: ["Contraction", "Example"],
        ar: ["الإدماج", "مثال"],
        fa: ["ادغام", "مثال"],
        ti: ["ምድምሳስ", "ኣብነት"],
        uk: ["Злиття", "Приклад"],
      },
      transRows: {
        en: [
          ["{a}à + le → au{/a}", "I'm going to the market. — The apartment is on the 2nd floor."],
          ["{a}à + les → aux{/a}", "I'm talking to the children. — We're going to the Champs-Élysées."],
          ["{a}de + le → du{/a}", "far from the centre — He leaves the shop."],
          ["{a}de + les → des{/a}", "near the shops — next to the offices."],
        ],
        ar: [
          ["{a}à + le → au{/a}", "أذهب إلى السوق. — الشقة في الطابق الثاني."],
          ["{a}à + les → aux{/a}", "أتحدث إلى الأطفال. — نذهب إلى الشانزليزيه."],
          ["{a}de + le → du{/a}", "بعيد عن المركز. — يخرج من المتجر."],
          ["{a}de + les → des{/a}", "قريب من المحلات. — بجانب المكاتب."],
        ],
        fa: [
          ["{a}à + le → au{/a}", "به بازار می‌روم. — آپارتمان در طبقه دوم است."],
          ["{a}à + les → aux{/a}", "با بچه‌ها صحبت می‌کنم. — ما به شانزلیزه می‌رویم."],
          ["{a}de + le → du{/a}", "دور از مرکز. — از مغازه خارج می‌شود."],
          ["{a}de + les → des{/a}", "نزدیک مغازه‌ها. — کنار دفاتر."],
        ],
        ti: [
          ["{a}à + le → au{/a}", "ናብ ዕዳጋ ይኸይድ ኣለኹ። — ናይ ካልኣይ ደርቢ እዩ።"],
          ["{a}à + les → aux{/a}", "ምስ ቆልዑ ይዛረብ ኣለኹ። — ናብ ሻምዝሊዝ ንኸይድ።"],
          ["{a}de + le → du{/a}", "ካብ ማእከል ርሒቕ። — ካብ ሱቕ ይወጽእ።"],
          ["{a}de + les → des{/a}", "ቀረባ ሱቓት። — ጸጋም ቤት ጽሕፈታት።"],
        ],
        uk: [
          ["{a}à + le → au{/a}", "Я йду на ринок. — Квартира на другому поверсі."],
          ["{a}à + les → aux{/a}", "Я розмовляю з дітьми. — Ми йдемо на Єлисейські поля."],
          ["{a}de + le → du{/a}", "далеко від центру. — Він виходить з магазину."],
          ["{a}de + les → des{/a}", "поруч з магазинами. — поряд з офісами."],
        ],
      },
    },

    {
      type: "note",
      text: "à + la et de + la ne se contractent pas.\nJe vais à la pharmacie ✅ — à la boulangerie ✅\nJe viens de la gare ✅ — loin de la ville ✅",
    },
  ],
  exercises: [],
};
