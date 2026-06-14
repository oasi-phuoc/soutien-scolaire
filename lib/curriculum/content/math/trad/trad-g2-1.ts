import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_G2_1: SubmoduleTrad = {
  submoduleId: "G2-1",
  title: S(
    "Unités de longueur, d'aire et de volume",
    "Units of length, area and volume",
    "وحدات الطول والمساحة والحجم",
    "واحدهای طول، مساحت و حجم",
    "ሓደ፣ ስፍሓትን ዕቅምን ናይ ዜሮ",
    "Одиниці довжини, площі та об'єму",
    "Unidades de comprimento, área e volume",
    "Cutubka dhererka, aagga iyo mugga",
    "Uzunluk, alan ve hacim birimleri",
    "د اوږدوالي، سطحې او حجم واحدونه"
  ),
  blocks: [
    { text: S("Unités de longueur", "Units of length", "وحدات الطول", "واحدهای طول", "ሓደ ዜሮ", "Одиниці довжини", "Unidades de comprimento", "Cutubka dhererka", "Uzunluk birimleri", "د اوږدوالي واحدونه") },
    { text: S(
      "Les unités de longueur sont organisées autour du **mètre (m)**. Chaque unité est **10 fois** plus grande que la suivante.",
      "Length units are organised around the **metre (m)**. Each unit is **10 times** larger than the next.",
      "وحدات الطول منظمة حول **المتر (m)**. كل وحدة **أكبر بـ 10 مرات** من التالية.",
      "واحدهای طول حول **متر (m)** سازمان‌یافته‌اند. هر واحد **10 برابر** بزرگ‌تر از بعدی است.",
      "ናይ ሓደ ዜሮ ምፍናው ኣብ **ሜትር (m)** ዝተሰርሔ እዩ። ነፍሲ ወከፍ ሓደ ዜሮ **10 ግዜ** ካብ ዝቕጽሎ ዝዓቢ እዩ።",
      "Одиниці довжини організовані навколо **метра (m)**. Кожна одиниця **в 10 разів** більша за наступну.",
      "As unidades de comprimento organizam-se em torno do **metro (m)**. Cada unidade é **10 vezes** maior que a seguinte.",
      "Cutubka dhererka waxaa lagu qaabeeyey **mitir (m)**. Mid kasta waa **10 jeer** ka weyn kan xiga.",
      "Uzunluk birimleri **metre (m)** etrafında düzenlenir. Her birim bir sonrakinin **10 katıdır**.",
      "د اوږدوالي واحدونه **متر (m)** شاوخوا تنظيم شوي دي. هر واحد د راتلونکي **10 چنده** لوی دی."
    ) },
    { headers: A(
      ["km", "hm", "dam", "m", "dm", "cm", "mm"],
      ["km", "hm", "dam", "m", "dm", "cm", "mm"],
      ["كم", "هم", "دام", "م", "دم", "سم", "مم"],
      ["کیلومتر", "هکتومتر", "دکامتر", "متر", "دسیمتر", "سانتیمتر", "میلیمتر"],
      ["km", "hm", "dam", "m", "dm", "cm", "mm"],
      ["км", "гм", "дам", "м", "дм", "см", "мм"],
      ["km", "hm", "dam", "m", "dm", "cm", "mm"],
      ["km", "hm", "dam", "m", "dm", "cm", "mm"],
      ["km", "hm", "dam", "m", "dm", "cm", "mm"],
      ["km", "hm", "dam", "m", "dm", "cm", "mm"]
    ) },
    { label: S("Règle de conversion — longueur", "Conversion rule — length", "قاعدة التحويل — الطول", "قانون تبدیل — طول", "ሕጊ ለውጢ — ሓደ ዜሮ", "Правило переведення — довжина", "Regra de conversão — comprimento", "Xeerka rogaalcelinta — dhererkа", "Dönüşüm kuralı — uzunluk", "د بدلون قاعده — اوږدوالی"),
      items: A(
        ["Vers la droite → × 10 (ex. 3 m = 30 dm = 300 cm = 3 000 mm)", "Vers la gauche → ÷ 10 (ex. 5 000 m = 500 dam = 50 hm = 5 km)"],
        ["To the right → × 10 (e.g. 3 m = 30 dm = 300 cm = 3,000 mm)", "To the left → ÷ 10 (e.g. 5,000 m = 500 dam = 50 hm = 5 km)"],
        ["نحو اليمين → × 10 (مثال: 3 م = 30 دم = 300 سم = 3000 مم)", "نحو اليسار → ÷ 10 (مثال: 5000 م = 500 دام = 50 هم = 5 كم)"],
        ["به سمت راست → × 10 (مثال: 3 m = 30 dm = 300 cm = 3000 mm)", "به سمت چپ → ÷ 10 (مثال: 5000 m = 500 dam = 50 hm = 5 km)"],
        ["ናብ የማን → × 10 (ኣብነት፦ 3 m = 30 dm = 300 cm = 3000 mm)", "ናብ ጸጋም → ÷ 10 (ኣብነት፦ 5000 m = 500 dam = 50 hm = 5 km)"],
        ["Вправо → × 10 (напр. 3 м = 30 дм = 300 см = 3 000 мм)", "Вліво → ÷ 10 (напр. 5 000 м = 500 дам = 50 гм = 5 км)"],
        ["Para a direita → × 10 (ex. 3 m = 30 dm = 300 cm = 3 000 mm)", "Para a esquerda → ÷ 10 (ex. 5 000 m = 500 dam = 50 hm = 5 km)"],
        ["Midig → × 10 (tusaale: 3 m = 30 dm = 300 cm = 3000 mm)", "Bidix → ÷ 10 (tusaale: 5000 m = 500 dam = 50 hm = 5 km)"],
        ["Sağa → × 10 (örn. 3 m = 30 dm = 300 cm = 3.000 mm)", "Sola → ÷ 10 (örn. 5.000 m = 500 dam = 50 hm = 5 km)"],
        ["ښي خوا → × 10 (بېلګه: 3 m = 30 dm = 300 cm = 3000 mm)", "کيڼ خوا → ÷ 10 (بېلګه: 5000 m = 500 dam = 50 hm = 5 km)"]
      )
    },
    { text: S("Unités d'aire (surface)", "Units of area (surface)", "وحدات المساحة", "واحدهای مساحت", "ናይ ስፍሓት ሓደ ዜሮ", "Одиниці площі", "Unidades de área (superfície)", "Cutubka aagga", "Alan birimleri (yüzey)", "د سطحې واحدونه") },
    { text: S(
      "Les unités d'aire dérivent du mètre carré **(m²)**. Chaque unité est **100 fois** plus grande que la suivante.",
      "Area units derive from the square metre **(m²)**. Each unit is **100 times** larger than the next.",
      "وحدات المساحة مشتقة من المتر المربع **(م²)**. كل وحدة **أكبر بـ 100 مرة** من التالية.",
      "واحدهای مساحت از متر مربع **(m²)** مشتق می‌شوند. هر واحد **100 برابر** بزرگ‌تر از بعدی است.",
      "ናይ ስፍሓት ሓደ ዜሮ ካብ ሜትር ስኩዌር **(m²)** ዝምጽኡ እዮም። ነፍሲ ወከፍ **100 ግዜ** ካብ ዝቕጽሎ ዝዓቢ እዩ።",
      "Одиниці площі походять від квадратного метра **(м²)**. Кожна одиниця **в 100 разів** більша за наступну.",
      "As unidades de área derivam do metro quadrado **(m²)**. Cada unidade é **100 vezes** maior que a seguinte.",
      "Cutubka aagga waxaa laga soo qaataa mitir laba jibbaaran **(m²)**. Mid kasta waa **100 jeer** ka weyn kan xiga.",
      "Alan birimleri metrekareden **(m²)** türetilir. Her birim bir sonrakinin **100 katıdır**.",
      "د مساحت واحدونه د مربع متر **(m²)** نه اخستل شوي دي. هر واحد د راتلونکي **100 چنده** لوی دی."
    ) },
    { label: S("Règle de conversion — aire", "Conversion rule — area", "قاعدة التحويل — المساحة", "قانون تبدیل — مساحت", "ሕጊ ለውጢ — ስፍሓት", "Правило переведення — площа", "Regra de conversão — área", "Xeerka rogaalcelinta — aagga", "Dönüşüm kuralı — alan", "د بدلون قاعده — مساحت"),
      items: A(
        ["Vers la droite → × 100 à chaque rang", "Vers la gauche → ÷ 100 à chaque rang", "Ex. 3 m² = 300 dm² = 30 000 cm²"],
        ["To the right → × 100 per rank", "To the left → ÷ 100 per rank", "E.g. 3 m² = 300 dm² = 30,000 cm²"],
        ["نحو اليمين → × 100 في كل رتبة", "نحو اليسار → ÷ 100 في كل رتبة", "مثال: 3 م² = 300 دم² = 30000 سم²"],
        ["به سمت راست → × 100 در هر رتبه", "به سمت چپ → ÷ 100 در هر رتبه", "مثال: 3 m² = 300 dm² = 30000 cm²"],
        ["ናብ የማን → × 100 ኣብ ነፍሲ ወከፍ ደረጃ", "ናብ ጸጋም → ÷ 100 ኣብ ነፍሲ ወከፍ ደረጃ", "ኣብነት፦ 3 m² = 300 dm² = 30000 cm²"],
        ["Вправо → × 100 на кожен розряд", "Вліво → ÷ 100 на кожен розряд", "Напр. 3 м² = 300 дм² = 30 000 см²"],
        ["Para a direita → × 100 por cada nível", "Para a esquerda → ÷ 100 por cada nível", "Ex. 3 m² = 300 dm² = 30 000 cm²"],
        ["Midig → × 100 heer kasta", "Bidix → ÷ 100 heer kasta", "Tusaale: 3 m² = 300 dm² = 30000 cm²"],
        ["Sağa → her sıra için × 100", "Sola → her sıra için ÷ 100", "Örn. 3 m² = 300 dm² = 30.000 cm²"],
        ["ښي خوا → × 100 هر درجه", "کيڼ خوا → ÷ 100 هر درجه", "بېلګه: 3 m² = 300 dm² = 30000 cm²"]
      )
    },
    { text: S("Unités de volume (solides)", "Units of volume (solids)", "وحدات الحجم (المجسمات)", "واحدهای حجم (اجسام)", "ናይ ዕቅም ሓደ ዜሮ (ጽሑፋዊ)", "Одиниці об'єму (тіла)", "Unidades de volume (sólidos)", "Cutubka mugga (walxaha)", "Hacim birimleri (katılar)", "د حجم واحدونه (جامدات)") },
    { label: S("Règle de conversion — volume", "Conversion rule — volume", "قاعدة التحويل — الحجم", "قانون تبدیل — حجم", "ሕጊ ለውጢ — ዕቅም", "Правило переведення — об'єм", "Regra de conversão — volume", "Xeerka rogaalcelinta — mugga", "Dönüşüm kuralı — hacim", "د بدلون قاعده — حجم"),
      items: A(
        ["Vers la droite → × 1 000 à chaque rang", "Vers la gauche → ÷ 1 000 à chaque rang", "Ex. 2 m³ = 2 000 dm³ = 2 000 000 cm³", "Lien : 1 dm³ = 1 L"],
        ["To the right → × 1,000 per rank", "To the left → ÷ 1,000 per rank", "E.g. 2 m³ = 2,000 dm³ = 2,000,000 cm³", "Link: 1 dm³ = 1 L"],
        ["نحو اليمين → × 1000 في كل رتبة", "نحو اليسار → ÷ 1000 في كل رتبة", "مثال: 2 م³ = 2000 دم³ = 2000000 سم³", "صلة: 1 دم³ = 1 لتر"],
        ["به سمت راست → × 1000 در هر رتبه", "به سمت چپ → ÷ 1000 در هر رتبه", "مثال: 2 m³ = 2000 dm³ = 2000000 cm³", "ارتباط: 1 dm³ = 1 L"],
        ["ናብ የማን → × 1000 ኣብ ነፍሲ ወከፍ ደረጃ", "ናብ ጸጋም → ÷ 1000 ኣብ ነፍሲ ወከፍ ደረጃ", "ኣብነት፦ 2 m³ = 2000 dm³", "ምትእስሳር፦ 1 dm³ = 1 L"],
        ["Вправо → × 1 000 на кожен розряд", "Вліво → ÷ 1 000 на кожен розряд", "Напр. 2 м³ = 2 000 дм³ = 2 000 000 см³", "Зв'язок: 1 дм³ = 1 л"],
        ["Para a direita → × 1 000 por cada nível", "Para a esquerda → ÷ 1 000 por cada nível", "Ex. 2 m³ = 2 000 dm³ = 2 000 000 cm³", "Ligação: 1 dm³ = 1 L"],
        ["Midig → × 1000 heer kasta", "Bidix → ÷ 1000 heer kasta", "Tusaale: 2 m³ = 2000 dm³", "Xiriir: 1 dm³ = 1 L"],
        ["Sağa → her sıra için × 1.000", "Sola → her sıra için ÷ 1.000", "Örn. 2 m³ = 2.000 dm³ = 2.000.000 cm³", "Bağlantı: 1 dm³ = 1 L"],
        ["ښي خوا → × 1000 هر درجه", "کيڼ خوا → ÷ 1000 هر درجه", "بېلګه: 2 m³ = 2000 dm³", "تړاو: 1 dm³ = 1 L"]
      )
    },
  ],
};
