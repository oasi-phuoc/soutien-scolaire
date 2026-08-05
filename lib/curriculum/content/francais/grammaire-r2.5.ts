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
  code: "R3.3",
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

    // ── Tableau des prépositions ──────────────────────────────────────────────────
    {
      type: "grid",
      headers: ["Préposition", "Sens", "Exemple"],
      transHeaders: {
        en: ["Preposition", "Meaning", "Example"],
        ar: ["حرف الجر", "المعنى", "مثال"],
        fa: ["حرف اضافه", "معنا", "مثال"],
        ti: ["መስተዋድድ", "ትርጉም", "ኣብነት"],
        uk: ["Прийменник", "Значення", "Приклад"],
      },
      boldFirstCol: true,
      rows: [
        ["{a}dans{/a}", "à l'intérieur", "Le chat est {a}dans{/a} la boîte."],
        ["{a}sur{/a}", "en contact avec la surface", "Le livre est {a}sur{/a} la table."],
        ["{a}sous{/a}", "en dessous", "Les clés sont {a}sous{/a} le canapé."],
        ["{a}devant{/a}", "en avant de", "Il attend {a}devant{/a} l'entrée."],
        ["{a}derrière{/a}", "en arrière de", "Le jardin est {a}derrière{/a} la maison."],
        ["{a}entre{/a}", "au milieu de deux éléments", "La banque est {a}entre{/a} la boulangerie et la pharmacie."],
        ["{a}en face de{/a}", "vis-à-vis", "La mairie est {a}en face de{/a} l'église."],
        ["{a}à côté de{/a}", "à proximité immédiate", "L'arrêt est {a}à côté de{/a} la gare."],
        ["{a}près de{/a}", "à courte distance", "L'hôtel est {a}près de{/a} la plage."],
        ["{a}loin de{/a}", "à grande distance", "La gare est {a}loin du{/a} centre."],
        ["{a}au-dessus de{/a}", "plus haut que", "L'appartement est {a}au-dessus de{/a} la boulangerie."],
        ["{a}au-dessous de{/a}", "plus bas que", "La cave est {a}au-dessous de{/a} l'appartement."],
      ],
      transRows: {
        en: [["{a}dans{/a}", "inside", "Le chat est {a}dans{/a} la boîte. (The cat is in the box.)"], ["{a}sur{/a}", "in contact with the surface", "Le livre est {a}sur{/a} la table. (The book is on the table.)"], ["{a}sous{/a}", "underneath", "Les clés sont {a}sous{/a} le canapé. (The keys are under the sofa.)"], ["{a}devant{/a}", "in front of", "Il attend {a}devant{/a} l'entrée. (He waits in front of the entrance.)"], ["{a}derrière{/a}", "behind", "Le jardin est {a}derrière{/a} la maison. (The garden is behind the house.)"], ["{a}entre{/a}", "in the middle of two elements", "La banque est {a}entre{/a} la boulangerie et la pharmacie. (The bank is between the bakery and the pharmacy.)"], ["{a}en face de{/a}", "opposite", "La mairie est {a}en face de{/a} l'église. (The town hall is opposite the church.)"], ["{a}à côté de{/a}", "right next to", "L'arrêt est {a}à côté de{/a} la gare. (The stop is next to the station.)"], ["{a}près de{/a}", "a short distance from", "L'hôtel est {a}près de{/a} la plage. (The hotel is near the beach.)"], ["{a}loin de{/a}", "a long distance from", "La gare est {a}loin du{/a} centre. (The station is far from the centre.)"], ["{a}au-dessus de{/a}", "higher than", "L'appartement est {a}au-dessus de{/a} la boulangerie. (The flat is above the bakery.)"], ["{a}au-dessous de{/a}", "lower than", "La cave est {a}au-dessous de{/a} l'appartement. (The cellar is below the flat.)"]],
        ar: [["{a}dans{/a}", "في الداخل", "Le chat est {a}dans{/a} la boîte. (القطة في الصندوق.)"], ["{a}sur{/a}", "ملامس للسطح", "Le livre est {a}sur{/a} la table. (الكتاب على الطاولة.)"], ["{a}sous{/a}", "تحت", "Les clés sont {a}sous{/a} le canapé. (المفاتيح تحت الأريكة.)"], ["{a}devant{/a}", "أمام", "Il attend {a}devant{/a} l'entrée. (ينتظر أمام المدخل.)"], ["{a}derrière{/a}", "خلف", "Le jardin est {a}derrière{/a} la maison. (الحديقة خلف المنزل.)"], ["{a}entre{/a}", "بين عنصرين", "La banque est {a}entre{/a} la boulangerie et la pharmacie. (المصرف بين المخبز والصيدلية.)"], ["{a}en face de{/a}", "مقابل", "La mairie est {a}en face de{/a} l'église. (البلدية مقابل الكنيسة.)"], ["{a}à côté de{/a}", "بجانب مباشرة", "L'arrêt est {a}à côté de{/a} la gare. (الموقف بجانب المحطة.)"], ["{a}près de{/a}", "على مسافة قريبة", "L'hôtel est {a}près de{/a} la plage. (الفندق قرب الشاطئ.)"], ["{a}loin de{/a}", "على مسافة بعيدة", "La gare est {a}loin du{/a} centre. (المحطة بعيدة عن المركز.)"], ["{a}au-dessus de{/a}", "أعلى من", "L'appartement est {a}au-dessus de{/a} la boulangerie. (الشقة فوق المخبز.)"], ["{a}au-dessous de{/a}", "أسفل من", "La cave est {a}au-dessous de{/a} l'appartement. (القبو تحت الشقة.)"]],
        fa: [["{a}dans{/a}", "در داخل", "Le chat est {a}dans{/a} la boîte. (گربه داخل جعبه است.)"], ["{a}sur{/a}", "در تماس با سطح", "Le livre est {a}sur{/a} la table. (کتاب روی میز است.)"], ["{a}sous{/a}", "زیر", "Les clés sont {a}sous{/a} le canapé. (کلیدها زیر مبل هستند.)"], ["{a}devant{/a}", "جلوی", "Il attend {a}devant{/a} l'entrée. (جلوی ورودی منتظر است.)"], ["{a}derrière{/a}", "پشت", "Le jardin est {a}derrière{/a} la maison. (باغ پشت خانه است.)"], ["{a}entre{/a}", "میان دو عنصر", "La banque est {a}entre{/a} la boulangerie et la pharmacie. (بانک بین نانوایی و داروخانه است.)"], ["{a}en face de{/a}", "روبه‌رو", "La mairie est {a}en face de{/a} l'église. (شهرداری روبه‌روی کلیساست.)"], ["{a}à côté de{/a}", "درست کنار", "L'arrêt est {a}à côté de{/a} la gare. (ایستگاه کنار راه‌آهن است.)"], ["{a}près de{/a}", "در فاصله کوتاه", "L'hôtel est {a}près de{/a} la plage. (هتل نزدیک ساحل است.)"], ["{a}loin de{/a}", "در فاصله دور", "La gare est {a}loin du{/a} centre. (ایستگاه دور از مرکز است.)"], ["{a}au-dessus de{/a}", "بالاتر از", "L'appartement est {a}au-dessus de{/a} la boulangerie. (آپارتمان بالای نانوایی است.)"], ["{a}au-dessous de{/a}", "پایین‌تر از", "La cave est {a}au-dessous de{/a} l'appartement. (زیرزمین پایین آپارتمان است.)"]],
        ti: [["{a}dans{/a}", "ኣብ ውሽጢ", "Le chat est {a}dans{/a} la boîte. (እታ ድሙ ኣብ ሳጹን ኣላ።)"], ["{a}sur{/a}", "ምስ ላዕለዋይ ገጽ ብምትንኻፍ", "Le livre est {a}sur{/a} la table. (እቲ መጽሓፍ ኣብ ጣውላ ኣሎ።)"], ["{a}sous{/a}", "ኣብ ትሕቲ", "Les clés sont {a}sous{/a} le canapé. (እቶም መፍትሕ ኣብ ትሕቲ መንበር ኣለዉ።)"], ["{a}devant{/a}", "ኣብ ቅድሚ", "Il attend {a}devant{/a} l'entrée. (ኣብ ቅድሚ መእተዊ ይጽበ ኣሎ።)"], ["{a}derrière{/a}", "ኣብ ድሕሪ", "Le jardin est {a}derrière{/a} la maison. (እቲ ጀርዲን ኣብ ድሕሪ እቲ ገዛ ኣሎ።)"], ["{a}entre{/a}", "ኣብ ማእከል ክልተ ነገራት", "La banque est {a}entre{/a} la boulangerie et la pharmacie. (እቲ ባንክ ኣብ መንጎ ባንኬት ቤትን ፋርማሲን ኣሎ።)"], ["{a}en face de{/a}", "ፊትንፊት", "La mairie est {a}en face de{/a} l'église. (እቲ ምምሕዳር ኣብ ፊትንፊት እታ ቤተክርስቲያን ኣሎ።)"], ["{a}à côté de{/a}", "ቀረባ ጥቓ", "L'arrêt est {a}à côté de{/a} la gare. (እቲ ፌርማታ ኣብ ጥቓ እታ ጣብያ ኣሎ።)"], ["{a}près de{/a}", "ኣብ ሓጺር ርሕቀት", "L'hôtel est {a}près de{/a} la plage. (እቲ ሆቴል ኣብ ጥቓ እቲ ገምገም ባሕሪ ኣሎ።)"], ["{a}loin de{/a}", "ኣብ ርሑቕ ርሕቀት", "La gare est {a}loin du{/a} centre. (እታ ጣብያ ካብቲ ማእከል ርሒቓ ኣላ።)"], ["{a}au-dessus de{/a}", "ካብኡ ላዕሊ", "L'appartement est {a}au-dessus de{/a} la boulangerie. (እቲ ኣፓርትመንት ኣብ ልዕሊ እቲ ባንኬት ቤት ኣሎ።)"], ["{a}au-dessous de{/a}", "ካብኡ ታሕቲ", "La cave est {a}au-dessous de{/a} l'appartement. (እቲ መዓሙቕ ኣብ ትሕቲ እቲ ኣፓርትመንት ኣሎ።)"]],
        uk: [["{a}dans{/a}", "усередині", "Le chat est {a}dans{/a} la boîte. (Кіт у коробці.)"], ["{a}sur{/a}", "у контакті з поверхнею", "Le livre est {a}sur{/a} la table. (Книга на столі.)"], ["{a}sous{/a}", "під", "Les clés sont {a}sous{/a} le canapé. (Ключі під диваном.)"], ["{a}devant{/a}", "перед", "Il attend {a}devant{/a} l'entrée. (Він чекає перед входом.)"], ["{a}derrière{/a}", "позаду", "Le jardin est {a}derrière{/a} la maison. (Сад позаду будинку.)"], ["{a}entre{/a}", "посередині двох елементів", "La banque est {a}entre{/a} la boulangerie et la pharmacie. (Банк між пекарнею та аптекою.)"], ["{a}en face de{/a}", "навпроти", "La mairie est {a}en face de{/a} l'église. (Мерія навпроти церкви.)"], ["{a}à côté de{/a}", "поруч із", "L'arrêt est {a}à côté de{/a} la gare. (Зупинка поруч із вокзалом.)"], ["{a}près de{/a}", "на короткій відстані", "L'hôtel est {a}près de{/a} la plage. (Готель біля пляжу.)"], ["{a}loin de{/a}", "на великій відстані", "La gare est {a}loin du{/a} centre. (Вокзал далеко від центру.)"], ["{a}au-dessus de{/a}", "вище ніж", "L'appartement est {a}au-dessus de{/a} la boulangerie. (Квартира над пекарнею.)"], ["{a}au-dessous de{/a}", "нижче ніж", "La cave est {a}au-dessous de{/a} l'appartement. (Підвал під квартирою.)"]],
      },
    },

    // ── Contractions obligatoires avec de ────────────────────────────────────────
    {
      type: "highlight",
      label: "Contractions obligatoires avec de",
      items: [
        "{a}de + le{/a} → {a}du{/a} : loin {a}du{/a} centre (pas de le)",
        "{a}de + les{/a} → {a}des{/a} : près {a}des{/a} magasins (pas de les)",
        "{a}de + la{/a} → de la : à côté {a}de la{/a} gare (pas de contraction)",
        "{a}de + l'{/a} → de l' : en face {a}de l'{/a}école (pas de contraction)",
      ],
      transLabel: { en: "Mandatory contractions with de", ar: "الإدغامات الإلزامية مع de", fa: "ادغام‌های اجباری با de", ti: "ግዴታዊ ምጥባቕ ምስ de", uk: "Обов'язкові злиття з de" },
      transItems: {
        en: ["{a}de + le{/a} → {a}du{/a}: loin {a}du{/a} centre (not de le)", "{a}de + les{/a} → {a}des{/a}: près {a}des{/a} magasins (not de les)", "{a}de + la{/a} → de la: à côté {a}de la{/a} gare (no contraction)", "{a}de + l'{/a} → de l': en face {a}de l'{/a}école (no contraction)"],
        ar: ["{a}de + le{/a} ← {a}du{/a}: loin {a}du{/a} centre (وليس de le)", "{a}de + les{/a} ← {a}des{/a}: près {a}des{/a} magasins (وليس de les)", "{a}de + la{/a} ← de la: à côté {a}de la{/a} gare (بدون إدغام)", "{a}de + l'{/a} ← de l': en face {a}de l'{/a}école (بدون إدغام)"],
        fa: ["{a}de + le{/a} ← {a}du{/a}: loin {a}du{/a} centre (نه de le)", "{a}de + les{/a} ← {a}des{/a}: près {a}des{/a} magasins (نه de les)", "{a}de + la{/a} ← de la: à côté {a}de la{/a} gare (بدون ادغام)", "{a}de + l'{/a} ← de l': en face {a}de l'{/a}école (بدون ادغام)"],
        ti: ["{a}de + le{/a} ← {a}du{/a}: loin {a}du{/a} centre (de le ኣይኮነን)", "{a}de + les{/a} ← {a}des{/a}: près {a}des{/a} magasins (de les ኣይኮነን)", "{a}de + la{/a} ← de la: à côté {a}de la{/a} gare (ምጥባቕ የለን)", "{a}de + l'{/a} ← de l': en face {a}de l'{/a}école (ምጥባቕ የለን)"],
        uk: ["{a}de + le{/a} → {a}du{/a}: loin {a}du{/a} centre (не de le)", "{a}de + les{/a} → {a}des{/a}: près {a}des{/a} magasins (не de les)", "{a}de + la{/a} → de la: à côté {a}de la{/a} gare (без злиття)", "{a}de + l'{/a} → de l': en face {a}de l'{/a}école (без злиття)"],
      },
    },

    // ── Prépositions avec les villes et pays ──────────────────────────────────────
    { type: "heading", text: "Prépositions avec les villes et pays", sub: true, accent: true, trans: { en: "Prepositions with cities and countries", ar: "حروف الجر مع المدن والبلدان", fa: "حروف اضافه با شهرها و کشورها", ti: "መስተዋድድ ምስ ከተማታትን ሃገራትን", uk: "Прийменники з містами та країнами" } },
    {
      type: "grid",
      headers: ["Type", "Préposition", "Exemple"],
      transHeaders: {
        en: ["Type", "Preposition", "Example"],
        ar: ["النوع", "حرف الجر", "مثال"],
        fa: ["نوع", "حرف اضافه", "مثال"],
        ti: ["ዓይነት", "መስተዋድድ", "ኣብነት"],
        uk: ["Тип", "Прийменник", "Приклад"],
      },
      boldFirstCol: true,
      rows: [
        ["Ville", "{a}à{/a}", "Je suis {a}à{/a} Paris."],
        ["Pays féminin", "{a}en{/a}", "Je suis {a}en{/a} France."],
        ["Pays masculin", "{a}au{/a}", "Je suis {a}au{/a} Maroc."],
        ["Pays pluriel", "{a}aux{/a}", "Je suis {a}aux{/a} États-Unis."],
        ["Île / région", "{a}à / en{/a}", "à Madagascar / en Corse"],
      ],
      transRows: {
        en: [["City", "{a}à{/a}", "Je suis {a}à{/a} Paris. (I am in Paris.)"], ["Feminine country", "{a}en{/a}", "Je suis {a}en{/a} France. (I am in France.)"], ["Masculine country", "{a}au{/a}", "Je suis {a}au{/a} Maroc. (I am in Morocco.)"], ["Plural country", "{a}aux{/a}", "Je suis {a}aux{/a} États-Unis. (I am in the United States.)"], ["Island / region", "{a}à / en{/a}", "à Madagascar / en Corse"]],
        ar: [["مدينة", "{a}à{/a}", "Je suis {a}à{/a} Paris. (أنا في باريس.)"], ["بلد مؤنث", "{a}en{/a}", "Je suis {a}en{/a} France. (أنا في فرنسا.)"], ["بلد مذكر", "{a}au{/a}", "Je suis {a}au{/a} Maroc. (أنا في المغرب.)"], ["بلد جمع", "{a}aux{/a}", "Je suis {a}aux{/a} États-Unis. (أنا في الولايات المتحدة.)"], ["جزيرة / منطقة", "{a}à / en{/a}", "à Madagascar / en Corse"]],
        fa: [["شهر", "{a}à{/a}", "Je suis {a}à{/a} Paris. (من در پاریس هستم.)"], ["کشور مؤنث", "{a}en{/a}", "Je suis {a}en{/a} France. (من در فرانسه هستم.)"], ["کشور مذکر", "{a}au{/a}", "Je suis {a}au{/a} Maroc. (من در مراکش هستم.)"], ["کشور جمع", "{a}aux{/a}", "Je suis {a}aux{/a} États-Unis. (من در ایالات متحده هستم.)"], ["جزیره / منطقه", "{a}à / en{/a}", "à Madagascar / en Corse"]],
        ti: [["ከተማ", "{a}à{/a}", "Je suis {a}à{/a} Paris. (ኣብ ፓሪስ ኣለኹ።)"], ["ኣንስታይ ሃገር", "{a}en{/a}", "Je suis {a}en{/a} France. (ኣብ ፈረንሳ ኣለኹ።)"], ["ተባዕታይ ሃገር", "{a}au{/a}", "Je suis {a}au{/a} Maroc. (ኣብ ሞሮኮ ኣለኹ።)"], ["ብዙሕ ሃገር", "{a}aux{/a}", "Je suis {a}aux{/a} États-Unis. (ኣብ ሕቡራት መንግስታት ኣለኹ።)"], ["ደሴት / ዞባ", "{a}à / en{/a}", "à Madagascar / en Corse"]],
        uk: [["Місто", "{a}à{/a}", "Je suis {a}à{/a} Paris. (Я в Парижі.)"], ["Жіноча країна", "{a}en{/a}", "Je suis {a}en{/a} France. (Я у Франції.)"], ["Чоловіча країна", "{a}au{/a}", "Je suis {a}au{/a} Maroc. (Я в Марокко.)"], ["Країна у множині", "{a}aux{/a}", "Je suis {a}aux{/a} États-Unis. (Я у США.)"], ["Острів / регіон", "{a}à / en{/a}", "à Madagascar / en Corse"]],
      },
    },
  ],
  exercises: [
    // ── Exercice 1 — QCM + SVG : 3 images, 3 choix en toggle vertical ────────
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Quelle préposition est illustrée ?",
      transInstruction: { en: "Which preposition is illustrated?", ar: "أي حرف جر يُوضَّح؟", fa: "کدام حرف اضافه نشان داده شده است؟", ti: "እቲ ዝተረኣየ ቅድመ-ስም እንታይ እዩ?", uk: "Який прийменник ілюструється?" },
      svgChoiceLayout: "stacked",
      items: [],
      pool: [
        { svg: PREPS[0].svg,  sentence: "", choices: ["sur",             "sous",          "au-dessus de"],   correctIdx: 0 },
        { svg: PREPS[1].svg,  sentence: "", choices: ["au-dessus de",    "sur",           "en-dessous de"],  correctIdx: 0 },
        { svg: PREPS[2].svg,  sentence: "", choices: ["sous",            "sur",           "dans"],            correctIdx: 0 },
        { svg: PREPS[3].svg,  sentence: "", choices: ["en-dessous de",   "sous",          "au-dessus de"],   correctIdx: 0 },
        { svg: PREPS[4].svg,  sentence: "", choices: ["dans",            "à l'extérieur de","devant"],        correctIdx: 0 },
        { svg: PREPS[5].svg,  sentence: "", choices: ["à l'extérieur de","dans",          "devant"],          correctIdx: 0 },
        { svg: PREPS[6].svg,  sentence: "", choices: ["devant",          "derrière",      "dans"],            correctIdx: 0 },
        { svg: PREPS[7].svg,  sentence: "", choices: ["derrière",        "devant",        "dans"],            correctIdx: 0 },
        { svg: PREPS[8].svg,  sentence: "", choices: ["entre",           "parmi",         "à côté de"],       correctIdx: 0 },
        { svg: PREPS[9].svg,  sentence: "", choices: ["parmi",           "entre",         "dans"],            correctIdx: 0 },
        { svg: PREPS[10].svg, sentence: "", choices: ["à côté de",       "en face de",    "entre"],           correctIdx: 0 },
        { svg: PREPS[11].svg, sentence: "", choices: ["en face de",      "à côté de",     "contre"],          correctIdx: 0 },
        { svg: PREPS[12].svg, sentence: "", choices: ["près de",         "loin de",       "contre"],          correctIdx: 0 },
        { svg: PREPS[13].svg, sentence: "", choices: ["loin de",         "près de",       "en face de"],      correctIdx: 0 },
        { svg: PREPS[14].svg, sentence: "", choices: ["contre",          "à côté de",     "près de"],         correctIdx: 0 },
        { svg: PREPS[15].svg, sentence: "", choices: ["chez",            "dans",          "devant"],          correctIdx: 0 },
      ],
      poolSize: 4,
    },

    // ── Exercice 2 — Associez définition ↔ préposition (letterSelect) ─────────
    {
      type: "fill_select",
      title: "Exercice 2",
      instruction: "Associez chaque définition à la bonne préposition. Choisissez la lettre correspondante.",
      transInstruction: { en: "Match each definition to the correct preposition. Choose the corresponding letter.", ar: "اربط كل تعريف بالحرف الجر الصحيح. اختر الحرف المناسب.", fa: "هر تعریف را با حرف اضافه‌ی درست مطابقت دهید. حرف مربوطه را انتخاب کنید.", ti: "ነፍሲ ወከፍ ትርጉም ምስ ቅኑዕ ቅድመ-ስም ኣሰማማዕ። እቲ ተዛማዲ ፊደል ምረጽ።", uk: "Поєднайте кожне визначення з правильним прийменником. Оберіть відповідну літеру." },
      letterSelect: true,
      wordBank: ["sur", "sous", "dans", "devant", "derrière", "entre", "à côté de", "en face de"],
      items: [],
      pool: [
        { sentence: "contact avec la surface supérieure",          hint: "", answer: "sur" },
        { sentence: "contact avec la surface inférieure",          hint: "", answer: "sous" },
        { sentence: "à l'intérieur d'un espace",                  hint: "", answer: "dans" },
        { sentence: "face avant d'un objet ou lieu",               hint: "", answer: "devant" },
        { sentence: "face arrière d'un objet ou lieu",             hint: "", answer: "derrière" },
        { sentence: "au milieu de deux ou plusieurs éléments",     hint: "", answer: "entre" },
        { sentence: "côte à côte avec quelque chose",              hint: "", answer: "à côté de" },
        { sentence: "face à face avec quelque chose",              hint: "", answer: "en face de" },
      ],
      poolSize: 5,
    },

    // ── Exercice 3 — Articles contractés avec "de" ───────────────────────────
    {
      type: "fill_select",
      title: "Exercice 3",
      instruction: "Complétez les phrases avec le bon article (du, de la, de l', des).",
      transInstruction: { en: "Complete the sentences with the correct article (du, de la, de l', des).", ar: "أكمل الجمل بالأداة الصحيحة (du, de la, de l', des).", fa: "جمله‌ها را با حرف تعریف درست کامل کنید (du, de la, de l', des).", ti: "ሓሳባት ብቅኑዕ ዓንቀጽ ምላእ (du, de la, de l', des).", uk: "Доповніть речення правильним артиклем (du, de la, de l', des)." },
      hideWordBank: true,
      wordBank: ["du", "de la", "de l'", "des"],
      items: [],
      pool: [
        // A1 — articles contractés fréquents, lieu simple
        { sentence: "Le café est loin ___ centre-ville.",          hint: "de + le",  answer: "du" },
        { sentence: "Il sort ___ magasin avec des sacs.",          hint: "de + le",  answer: "du" },
        { sentence: "La pharmacie est près ___ boulangerie.",      hint: "de + la",  answer: "de la" },
        { sentence: "La boulangerie est à côté ___ poste.",        hint: "de + la",  answer: "de la" },
        { sentence: "Elle habite loin ___ université.",            hint: "de + l'",  answer: "de l'" },
        { sentence: "Elle sort ___ hôpital en bonne santé.",       hint: "de + l'",  answer: "de l'" },
        { sentence: "Elle revient ___ cours de français.",         hint: "de + les", answer: "des" },
        { sentence: "Le parc est à côté ___ écoles.",             hint: "de + les", answer: "des" },
        { sentence: "Elle vient ___ supermarché.",                 hint: "de + le",  answer: "du" },
        { sentence: "Il parle ___ enfants de la classe.",          hint: "de + les", answer: "des" },
        // A2 — contexte quotidien, vocabulaire courant
        { sentence: "Il vient ___ marché du quartier.",            hint: "de + le",  answer: "du" },
        { sentence: "Il revient ___ bureau à 18h.",                hint: "de + le",  answer: "du" },
        { sentence: "Il rentre ___ cinéma très tard.",             hint: "de + le",  answer: "du" },
        { sentence: "La gare est loin ___ campagne.",              hint: "de + la",  answer: "de la" },
        { sentence: "Elle sort ___ bibliothèque avec des livres.", hint: "de + la",  answer: "de la" },
        { sentence: "Elle vient ___ mairie avec ses papiers.",     hint: "de + la",  answer: "de la" },
        { sentence: "Il revient ___ école en courant.",            hint: "de + l'",  answer: "de l'" },
        { sentence: "La pharmacie est près ___ arrêt de bus.",     hint: "de + l'",  answer: "de l'" },
        { sentence: "La maison est loin ___ magasins.",            hint: "de + les", answer: "des" },
        { sentence: "Je reviens ___ courses du marché.",           hint: "de + les", answer: "des" },
        // B1 — thèmes d'intégration, vocabulaire précis
        { sentence: "Il revient ___ travail épuisé après sa longue journée.", hint: "de + le",  answer: "du" },
        { sentence: "La salle d'attente est à côté ___ cabinet médical.",     hint: "de + le",  answer: "du" },
        { sentence: "Le centre de formation est près ___ préfecture.",        hint: "de + la",  answer: "de la" },
        { sentence: "Il revient ___ formation professionnelle avec de nouvelles compétences.", hint: "de + la", answer: "de la" },
        { sentence: "Elle vient ___ ambassade avec tous ses documents.",      hint: "de + l'",  answer: "de l'" },
        { sentence: "Le bureau est au rez-de-chaussée ___ immeuble.",         hint: "de + l'",  answer: "de l'" },
        { sentence: "Elle est sortie ___ entretien d'embauche avec le sourire.", hint: "de + l'", answer: "de l'" },
        { sentence: "Elle est sortie ___ cours de formation à 20h.",          hint: "de + les", answer: "des" },
        { sentence: "Il s'éloigne progressivement ___ difficultés du début.", hint: "de + les", answer: "des" },
        { sentence: "Elle habite à deux minutes ___ arrêts de tramway.",      hint: "de + les", answer: "des" },
      ],
      poolSize: 5,
    },

    // ── Exercice 4 — Vrai ou Faux sur image de description ───────────────────
    {
      type: "trueFalse",
      title: "Exercice 4",
      instruction: "Regardez l'image et sélectionnez Vrai ou Faux.",
      transInstruction: { en: "Look at the image and select True or False.", ar: "انظر إلى الصورة واختر صحيح أو خطأ.", fa: "به تصویر نگاه کنید و درست یا نادرست را انتخاب کنید.", ti: "ነቲ ምስሊ ርአ ትክክል ወይ ሓሶት ምረጽ።", uk: "Подивіться на зображення та оберіть Правда або Неправда." },
      items: [],
      poolSize: 5,
      imagePool: [
        {
          image: "/gram/images/R2/description-1.webp",
          items: [
            // sac à main / chaise
            { statement: "Le sac à main est sur la chaise.",          answer: true  },
            { statement: "Le sac à main est sous la chaise.",         answer: false },
            { statement: "Le sac à main est dans la chaise.",         answer: false },
            { statement: "Le sac à main est devant la chaise.",       answer: false },
            { statement: "Le sac à main est derrière la chaise.",     answer: false },
            { statement: "Le sac à main est à côté de la chaise.",    answer: false },
            // lampe / table
            { statement: "La lampe est sur la table.",                answer: true  },
            { statement: "La lampe est sous la table.",               answer: false },
            { statement: "La lampe est dans la table.",               answer: false },
            { statement: "La lampe est devant la table.",             answer: false },
            { statement: "La lampe est derrière la table.",           answer: false },
            { statement: "La lampe est à côté de la table.",          answer: false },
            // livres / sol
            { statement: "Les livres sont sur le sol.",               answer: true  },
            { statement: "Les livres sont sous le sol.",              answer: false },
            { statement: "Les livres sont sur la table.",             answer: false },
            { statement: "Les livres sont devant la table.",          answer: false },
            { statement: "Les livres sont derrière la table.",        answer: false },
            // boîte jaune / table
            { statement: "La boîte jaune est sous la table.",         answer: true  },
            { statement: "La boîte jaune est sur la table.",          answer: false },
            { statement: "La boîte jaune est dans la table.",         answer: false },
            { statement: "La boîte jaune est devant la table.",       answer: false },
            { statement: "La boîte jaune est derrière la table.",     answer: false },
            { statement: "La boîte jaune est à côté de la table.",    answer: false },
            // parapluie / table
            { statement: "Le parapluie est devant la table.",         answer: true  },
            { statement: "Le parapluie est derrière la table.",       answer: false },
            { statement: "Le parapluie est sur la table.",            answer: false },
            { statement: "Le parapluie est sous la table.",           answer: false },
            { statement: "Le parapluie est à côté de la table.",      answer: false },
            { statement: "Le parapluie est en face de la table.",     answer: false },
            // lampe / boîte jaune
            { statement: "La lampe est au-dessus de la boîte jaune.", answer: true  },
            { statement: "La lampe est sous la boîte jaune.",         answer: false },
            { statement: "La lampe est devant la boîte jaune.",       answer: false },
            { statement: "La lampe est derrière la boîte jaune.",     answer: false },
            { statement: "La lampe est à côté de la boîte jaune.",    answer: false },
            // chaise / table
            { statement: "La chaise est à gauche de la table.",       answer: true  },
            { statement: "La chaise est à droite de la table.",       answer: false },
            { statement: "La chaise est devant la table.",            answer: false },
            { statement: "La chaise est derrière la table.",          answer: false },
            { statement: "La chaise est en face de la table.",        answer: false },
            // plante / table
            { statement: "La plante est à droite de la table.",       answer: true  },
            { statement: "La plante est à gauche de la table.",       answer: false },
            { statement: "La plante est devant la table.",            answer: false },
            { statement: "La plante est derrière la table.",          answer: false },
            { statement: "La plante est en face de la table.",        answer: false },
            // lapin / livres
            { statement: "Le lapin est près des livres.",             answer: true  },
            { statement: "Le lapin est loin des livres.",             answer: false },
            { statement: "Le lapin est sur les livres.",              answer: false },
            { statement: "Le lapin est sous les livres.",             answer: false },
            { statement: "Le lapin est devant les livres.",           answer: false },
          ],
        },
        {
          image: "/gram/images/R2/description-2.webp",
          items: [
            // appareil photo / chaise
            { statement: "L'appareil photo est sur la chaise.",       answer: true  },
            { statement: "L'appareil photo est sous la chaise.",      answer: false },
            { statement: "L'appareil photo est dans la chaise.",      answer: false },
            { statement: "L'appareil photo est devant la chaise.",    answer: false },
            { statement: "L'appareil photo est derrière la chaise.",  answer: false },
            { statement: "L'appareil photo est à côté de la chaise.", answer: false },
            // réveil / étagère
            { statement: "Le réveil est sur l'étagère.",              answer: true  },
            { statement: "Le réveil est sous l'étagère.",             answer: false },
            { statement: "Le réveil est dans l'étagère.",             answer: false },
            { statement: "Le réveil est devant l'étagère.",           answer: false },
            { statement: "Le réveil est derrière l'étagère.",         answer: false },
            { statement: "Le réveil est à côté de l'étagère.",        answer: false },
            // tasse / tabouret
            { statement: "La tasse est sur le tabouret.",             answer: true  },
            { statement: "La tasse est sous le tabouret.",            answer: false },
            { statement: "La tasse est dans le tabouret.",            answer: false },
            { statement: "La tasse est devant le tabouret.",          answer: false },
            { statement: "La tasse est derrière le tabouret.",        answer: false },
            { statement: "La tasse est à côté du tabouret.",          answer: false },
            // valise / chaise
            { statement: "La valise est sous la chaise.",             answer: true  },
            { statement: "La valise est sur la chaise.",              answer: false },
            { statement: "La valise est dans la chaise.",             answer: false },
            { statement: "La valise est devant la chaise.",           answer: false },
            { statement: "La valise est derrière la chaise.",         answer: false },
            { statement: "La valise est à côté de la chaise.",        answer: false },
            // ballon / tabouret
            { statement: "Le ballon est sous le tabouret.",           answer: true  },
            { statement: "Le ballon est sur le tabouret.",            answer: false },
            { statement: "Le ballon est dans le tabouret.",           answer: false },
            { statement: "Le ballon est devant le tabouret.",         answer: false },
            { statement: "Le ballon est derrière le tabouret.",       answer: false },
            { statement: "Le ballon est à côté du tabouret.",         answer: false },
            // valise / étagère
            { statement: "La valise est devant l'étagère.",           answer: true  },
            { statement: "La valise est derrière l'étagère.",         answer: false },
            { statement: "La valise est sur l'étagère.",              answer: false },
            { statement: "La valise est sous l'étagère.",             answer: false },
            { statement: "La valise est à côté de l'étagère.",        answer: false },
            { statement: "La valise est en face de l'étagère.",       answer: false },
            // chaise / étagère
            { statement: "La chaise est à gauche de l'étagère.",      answer: true  },
            { statement: "La chaise est à droite de l'étagère.",      answer: false },
            { statement: "La chaise est devant l'étagère.",           answer: false },
            { statement: "La chaise est derrière l'étagère.",         answer: false },
            { statement: "La chaise est en face de l'étagère.",       answer: false },
            // tabouret / étagère
            { statement: "Le tabouret est à droite de l'étagère.",    answer: true  },
            { statement: "Le tabouret est à gauche de l'étagère.",    answer: false },
            { statement: "Le tabouret est devant l'étagère.",         answer: false },
            { statement: "Le tabouret est derrière l'étagère.",       answer: false },
            { statement: "Le tabouret est en face de l'étagère.",     answer: false },
            // valise / chapeau
            { statement: "La valise est près du chapeau.",            answer: true  },
            { statement: "La valise est loin du chapeau.",            answer: false },
            { statement: "La valise est sur le chapeau.",             answer: false },
            { statement: "La valise est sous le chapeau.",            answer: false },
            { statement: "La valise est devant le chapeau.",          answer: false },
            // réveil / plante verte
            { statement: "Le réveil est au-dessus de la plante verte.", answer: true  },
            { statement: "Le réveil est sous la plante verte.",       answer: false },
            { statement: "Le réveil est devant la plante verte.",     answer: false },
            { statement: "Le réveil est derrière la plante verte.",   answer: false },
            { statement: "Le réveil est à côté de la plante verte.",  answer: false },
          ],
        },
        {
          image: "/gram/images/R2/description-3.webp",
          items: [
            // lampe / étagère
            { statement: "La lampe est sur l'étagère.",               answer: true  },
            { statement: "La lampe est sous l'étagère.",              answer: false },
            { statement: "La lampe est dans l'étagère.",              answer: false },
            { statement: "La lampe est devant l'étagère.",            answer: false },
            { statement: "La lampe est derrière l'étagère.",          answer: false },
            { statement: "La lampe est à côté de l'étagère.",         answer: false },
            // chapeau / fauteuil
            { statement: "Le chapeau est sur le fauteuil.",           answer: true  },
            { statement: "Le chapeau est sous le fauteuil.",          answer: false },
            { statement: "Le chapeau est dans le fauteuil.",          answer: false },
            { statement: "Le chapeau est devant le fauteuil.",        answer: false },
            { statement: "Le chapeau est derrière le fauteuil.",      answer: false },
            { statement: "Le chapeau est à côté du fauteuil.",        answer: false },
            // bol bleu / table basse
            { statement: "Le bol bleu est sur la table basse.",       answer: true  },
            { statement: "Le bol bleu est sous la table basse.",      answer: false },
            { statement: "Le bol bleu est dans la table basse.",      answer: false },
            { statement: "Le bol bleu est devant la table basse.",    answer: false },
            { statement: "Le bol bleu est derrière la table basse.",  answer: false },
            { statement: "Le bol bleu est à côté de la table basse.", answer: false },
            // livres / lampe
            { statement: "Les livres sont sous la lampe.",            answer: true  },
            { statement: "Les livres sont sur la lampe.",             answer: false },
            { statement: "Les livres sont dans la lampe.",            answer: false },
            { statement: "Les livres sont devant la lampe.",          answer: false },
            { statement: "Les livres sont derrière la lampe.",        answer: false },
            { statement: "Les livres sont à côté de la lampe.",       answer: false },
            // boîte verte / table basse
            { statement: "La boîte verte est sous la table basse.",   answer: true  },
            { statement: "La boîte verte est sur la table basse.",    answer: false },
            { statement: "La boîte verte est dans la table basse.",   answer: false },
            { statement: "La boîte verte est devant la table basse.", answer: false },
            { statement: "La boîte verte est derrière la table basse.", answer: false },
            { statement: "La boîte verte est à côté de la table basse.", answer: false },
            // table basse / étagère
            { statement: "La table basse est devant l'étagère.",      answer: true  },
            { statement: "La table basse est derrière l'étagère.",    answer: false },
            { statement: "La table basse est sur l'étagère.",         answer: false },
            { statement: "La table basse est sous l'étagère.",        answer: false },
            { statement: "La table basse est à côté de l'étagère.",   answer: false },
            { statement: "La table basse est en face de l'étagère.",  answer: false },
            // plante / étagère
            { statement: "La plante est à gauche de l'étagère.",      answer: true  },
            { statement: "La plante est à droite de l'étagère.",      answer: false },
            { statement: "La plante est devant l'étagère.",           answer: false },
            { statement: "La plante est derrière l'étagère.",         answer: false },
            { statement: "La plante est en face de l'étagère.",       answer: false },
            // fauteuil / étagère
            { statement: "Le fauteuil est à droite de l'étagère.",    answer: true  },
            { statement: "Le fauteuil est à gauche de l'étagère.",    answer: false },
            { statement: "Le fauteuil est devant l'étagère.",         answer: false },
            { statement: "Le fauteuil est derrière l'étagère.",       answer: false },
            { statement: "Le fauteuil est en face de l'étagère.",     answer: false },
            // cactus / bol
            { statement: "Le cactus est près du bol.",                answer: true  },
            { statement: "Le cactus est loin du bol.",                answer: false },
            { statement: "Le cactus est sur le bol.",                 answer: false },
            { statement: "Le cactus est sous le bol.",                answer: false },
            { statement: "Le cactus est devant le bol.",              answer: false },
            // sac à dos / fauteuil
            { statement: "Le sac à dos est loin du fauteuil.",        answer: true  },
            { statement: "Le sac à dos est près du fauteuil.",        answer: false },
            { statement: "Le sac à dos est sur le fauteuil.",         answer: false },
            { statement: "Le sac à dos est sous le fauteuil.",        answer: false },
            { statement: "Le sac à dos est devant le fauteuil.",      answer: false },
            // lampe / livres
            { statement: "La lampe est au-dessus des livres.",        answer: true  },
            { statement: "La lampe est sous les livres.",             answer: false },
            { statement: "La lampe est devant les livres.",           answer: false },
            { statement: "La lampe est derrière les livres.",         answer: false },
            { statement: "La lampe est à côté des livres.",           answer: false },
          ],
        },
      ],
    },

    // ── Exercice 5 — Remettre les mots dans le bon ordre ─────────────────────
    {
      type: "word_order",
      title: "Exercice 5",
      instruction: "Remettez les mots dans le bon ordre.",
      transInstruction: { en: "Put the words back in the correct order.", ar: "أعد ترتيب الكلمات.", fa: "کلمات را به ترتیب صحیح بگذارید.", ti: "ቃላት ናብ ቅኑዕ ቅደም-ሰዓብ ምለሶም።", uk: "Розставте слова в правильному порядку." },
      items: [],
      pool: [
        // A1 — prépositions simples, objets courants
        { sentence: "Le livre est sur la table.", words: ["Le", "livre", "est", "sur", "la", "table."] },
        { sentence: "Le chat dort sous le lit.", words: ["Le", "chat", "dort", "sous", "le", "lit."] },
        { sentence: "Les clés sont dans le sac.", words: ["Les", "clés", "sont", "dans", "le", "sac."] },
        { sentence: "La voiture est devant la maison.", words: ["La", "voiture", "est", "devant", "la", "maison."] },
        { sentence: "Le jardin est derrière la maison.", words: ["Le", "jardin", "est", "derrière", "la", "maison."] },
        { sentence: "Le stylo est sous le cahier.", words: ["Le", "stylo", "est", "sous", "le", "cahier."] },
        { sentence: "Le chien est devant la porte.", words: ["Le", "chien", "est", "devant", "la", "porte."] },
        { sentence: "Les enfants jouent devant l'école.", words: ["Les", "enfants", "jouent", "devant", "l'école."] },
        { sentence: "Le chat est sous la chaise.", words: ["Le", "chat", "est", "sous", "la", "chaise."] },
        { sentence: "Le pain est dans le sac.", words: ["Le", "pain", "est", "dans", "le", "sac."] },
        // A2 — lieu dans la ville, prépositions composées
        { sentence: "La pharmacie est à côté de la boulangerie.", words: ["La", "pharmacie", "est", "à", "côté", "de", "la", "boulangerie."] },
        { sentence: "La banque est entre la poste et la pharmacie.", words: ["La", "banque", "est", "entre", "la", "poste", "et", "la", "pharmacie."] },
        { sentence: "L'hôtel est en face de la gare.", words: ["L'hôtel", "est", "en", "face", "de", "la", "gare."] },
        { sentence: "La poste est en face du café.", words: ["La", "poste", "est", "en", "face", "du", "café."] },
        { sentence: "Le supermarché est à côté de la pharmacie.", words: ["Le", "supermarché", "est", "à", "côté", "de", "la", "pharmacie."] },
        { sentence: "L'école est loin du centre-ville.", words: ["L'école", "est", "loin", "du", "centre-ville."] },
        { sentence: "Le bus s'arrête devant la mairie.", words: ["Le", "bus", "s'arrête", "devant", "la", "mairie."] },
        { sentence: "Mon appartement est près de la gare.", words: ["Mon", "appartement", "est", "près", "de", "la", "gare."] },
        { sentence: "Le parc est derrière l'école.", words: ["Le", "parc", "est", "derrière", "l'école."] },
        { sentence: "La bibliothèque est entre le café et la poste.", words: ["La", "bibliothèque", "est", "entre", "le", "café", "et", "la", "poste."] },
        // B1 — thèmes d'intégration, vocabulaire précis
        { sentence: "Le centre de formation est en face de la préfecture.", words: ["Le", "centre", "de", "formation", "est", "en", "face", "de", "la", "préfecture."] },
        { sentence: "La mairie se trouve à côté du tribunal.", words: ["La", "mairie", "se", "trouve", "à", "côté", "du", "tribunal."] },
        { sentence: "L'ambassade est loin de mon quartier.", words: ["L'ambassade", "est", "loin", "de", "mon", "quartier."] },
        { sentence: "La salle d'attente est entre les deux cabinets.", words: ["La", "salle", "d'attente", "est", "entre", "les", "deux", "cabinets."] },
        { sentence: "Mon voisin habite en face de la boulangerie.", words: ["Mon", "voisin", "habite", "en", "face", "de", "la", "boulangerie."] },
        { sentence: "Le service social se trouve au rez-de-chaussée.", words: ["Le", "service", "social", "se", "trouve", "au", "rez-de-chaussée."] },
        { sentence: "L'arrêt de bus est devant le supermarché.", words: ["L'arrêt", "de", "bus", "est", "devant", "le", "supermarché."] },
        { sentence: "La bibliothèque se trouve entre la poste et la mairie.", words: ["La", "bibliothèque", "se", "trouve", "entre", "la", "poste", "et", "la", "mairie."] },
        { sentence: "L'école de français est à côté de l'hôtel de ville.", words: ["L'école", "de", "français", "est", "à", "côté", "de", "l'hôtel", "de", "ville."] },
        { sentence: "Le cabinet médical est en face du parc.", words: ["Le", "cabinet", "médical", "est", "en", "face", "du", "parc."] },
      ],
      poolSize: 5,
    },

    // ── Exercice 6 — Production écrite sur image de description ──────────────
    {
      type: "write",
      title: "Exercice 6",
      instruction: "Regardez l'image. Écrivez une phrase complète qui décrit la position des deux objets.\nLa phrase commence par une majuscule et se termine par un point.",
      transInstruction: { en: "Look at the image. Write a complete sentence describing the position of the two objects.\nThe sentence starts with a capital letter and ends with a full stop.", ar: "انظر إلى الصورة. اكتب جملة كاملة تصف موضع الشيئين.\nتبدأ الجملة بحرف كبير وتنتهي بنقطة.", fa: "به تصویر نگاه کنید. یک جمله‌ی کامل بنویسید که موقعیت دو شیء را توصیف کند.\nجمله با حرف بزرگ شروع و با نقطه تمام می‌شود.", ti: "ነቲ ምስሊ ርአ። ነቲ ኣቀማምጣ ክልተ ኣቕሑት ዝገልጽ ሙሉእ ሓሳብ ጽሓፍ።\nእቲ ሓሳብ ብዓብዪ ፊደል ይጅምር ብነጥቢ ይውዳእ።", uk: "Подивіться на зображення. Напишіть повне речення, що описує положення двох предметів.\nРечення починається з великої літери і закінчується крапкою." },
      promptLayout: "stacked",
      promptPoolSize: 5,
      imagePool: [
        {
          image: "/gram/images/R2/description-4.webp",
          promptPool: [
            "la chaise / le coussin",
            "la lampe / la table",
            "le vase / les fleurs",
            "le sac / la chaise",
            "le coffre / la couverture",
            "le ballon / le tabouret",
            "le réveil / la table",
            "le panier / la chaise",
            "la casquette / la chaise",
            "le tabouret / la table",
            "le coussin / le tabouret",
            "la lampe / le tabouret",
            "le sac / la table",
            "le coffre / la chaise",
          ],
        },
        {
          image: "/gram/images/R2/description-5.webp",
          promptPool: [
            "la chaise / le coussin",
            "le chien / la chaise",
            "la lampe / la table",
            "le vase / les fleurs",
            "la tasse / la table",
            "la boîte / la table",
            "l'ordinateur / la table",
            "la peluche / la chaise",
            "le ballon / la table",
            "le sac / la chaise",
            "le chien / la peluche",
            "la tasse / l'ordinateur",
            "le coussin / la chaise",
            "la boîte / le sac",
          ],
        },
        {
          image: "/gram/images/R2/description-6.webp",
          promptPool: [
            "le chat / la chaise",
            "la lampe / la table",
            "le livre / la table",
            "la plante / le pot",
            "la boîte / la table",
            "le sac / la chaise",
            "le ballon / la table",
            "le chat / le livre",
            "la plante / la table",
            "le pot / la table",
            "le livre / la chaise",
            "la boîte / la chaise",
          ],
        },
      ],
    },
  ],

  evalExercises: [
    {
      type: "qcm",
      title: "Évaluation — Question 1",
      instruction: "Choisissez la bonne préposition de lieu.",
      transInstruction: { en: "Choose the correct preposition of place.", ar: "اختر حرف الجر الصحيح للمكان.", fa: "حرف اضافه‌ی مکانی درست را انتخاب کنید.", ti: "ቅኑዕ ናይ ቦታ ቅድመ-ስም ምረጽ።", uk: "Оберіть правильний прийменник місця." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le livre est ___ la table.",          choices: ["sur", "sous", "dans"],   correctIdx: 0 },
        { sentence: "Le chat est ___ le lit.",             choices: ["sous", "sur", "dans"],   correctIdx: 0 },
        { sentence: "Les stylos sont ___ la trousse.",     choices: ["dans", "sur", "sous"], correctIdx: 0 },
        { sentence: "La voiture est ___ la maison.",       choices: ["devant", "derrière", "dans"],      correctIdx: 0 },
        { sentence: "Le jardin est ___ la maison.",        choices: ["derrière", "devant", "dans"],     correctIdx: 0 },
        { sentence: "La pharmacie est ___ la boulangerie.",choices: ["à côté de", "devant", "derrière"],     correctIdx: 0 },
        { sentence: "L'école est ___ ici.",                choices: ["près de", "loin de", "dans"],      correctIdx: 0 },
        { sentence: "Le parc est ___ la mairie.",          choices: ["en face de", "à côté de", "dans"],      correctIdx: 0 },
        { sentence: "Je suis assis ___ Paul et Marie.",    choices: ["entre", "devant", "derrière"],      correctIdx: 0 },
        { sentence: "Le chat est caché ___ le canapé.",    choices: ["derrière", "devant", "dans"],      correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Évaluation — Question 2",
      instruction: "Complétez avec la bonne préposition de lieu.",
      transInstruction: { en: "Complete with the correct preposition of place.", ar: "أكمل بحرف الجر الصحيح للمكان.", fa: "با حرف اضافه‌ی مکانی درست کامل کنید.", ti: "ብቅኑዕ ናይ ቦታ ቅድመ-ስም ምላእ።", uk: "Доповніть правильним прийменником місця." },
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le livre est ___ la table.",               hint: "contact / dessus",    answer: "sur"       },
        { sentence: "Le chat dort ___ le lit.",                 hint: "contact / dessous",   answer: "sous"      },
        { sentence: "Les clés sont ___ le sac.",                hint: "à l'intérieur",       answer: "dans"      },
        { sentence: "La voiture est garée ___ l'immeuble.",     hint: "face avant",          answer: "devant"    },
        { sentence: "Le garage est ___ la maison.",             hint: "face arrière",        answer: "derrière"  },
        { sentence: "La poste est ___ la gare.",                hint: "face à face",         answer: "en face de"},
        { sentence: "Mon école est ___ chez moi.",              hint: "distance faible",     answer: "près de"   },
        { sentence: "Je suis assis ___ deux amis.",             hint: "au milieu",           answer: "entre"     },
        { sentence: "Le supermarché est ___ la pharmacie.",     hint: "côte à côte",         answer: "à côté de" },
        { sentence: "La bibliothèque est ___ ici.",             hint: "distance grande",     answer: "loin de"   },
      ],
    },
  ],
};
