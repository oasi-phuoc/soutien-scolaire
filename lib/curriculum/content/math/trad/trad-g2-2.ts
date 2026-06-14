import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_G2_2: SubmoduleTrad = {
  submoduleId: "G2-2",
  title: S(
    "Unités de capacité, de masse et de temps",
    "Units of capacity, mass and time",
    "وحدات السعة والكتلة والزمن",
    "واحدهای ظرفیت، جرم و زمان",
    "ናይ ዓቕሚ፣ ብዝሒን ግዜን ሓደ ዜሮ",
    "Одиниці об'єму, маси та часу",
    "Unidades de capacidade, massa e tempo",
    "Cutubka awoodda, miisaanka iyo wakhtiga",
    "Hacim, kütle ve zaman birimleri",
    "د ظرفيت، وزن او وخت واحدونه"
  ),
  blocks: [
    { text: S("Unités de capacité (liquides)", "Units of capacity (liquids)", "وحدات السعة (السوائل)", "واحدهای ظرفیت (مایعات)", "ናይ ዓቕሚ ሓደ ዜሮ (ፈሳሲ)", "Одиниці місткості (рідини)", "Unidades de capacidade (líquidos)", "Cutubka awoodda (dareeraha)", "Kapasite birimleri (sıvılar)", "د ظرفيت واحدونه (مايعات)") },
    { text: S(
      "Les unités de capacité sont organisées autour du **litre (L)**. Chaque unité est **10 fois** plus grande que la suivante.",
      "Capacity units are organised around the **litre (L)**. Each unit is **10 times** larger than the next.",
      "وحدات السعة منظمة حول **اللتر (L)**. كل وحدة **أكبر بـ 10 مرات** من التالية.",
      "واحدهای ظرفیت حول **لیتر (L)** سازمان‌یافته‌اند. هر واحد **10 برابر** بزرگ‌تر از بعدی است.",
      "ናይ ዓቕሚ ሓደ ዜሮ ኣብ **ሊትር (L)** ዝተሰርሔ እዩ። ነፍሲ ወከፍ **10 ግዜ** ካብ ዝቕጽሎ ዝዓቢ እዩ።",
      "Одиниці місткості організовані навколо **літра (L)**. Кожна одиниця **в 10 разів** більша за наступну.",
      "As unidades de capacidade organizam-se em torno do **litro (L)**. Cada unidade é **10 vezes** maior que a seguinte.",
      "Cutubka awoodda waxaa lagu qaabeeyey **litir (L)**. Mid kasta waa **10 jeer** ka weyn kan xiga.",
      "Kapasite birimleri **litre (L)** etrafında düzenlenir. Her birim bir sonrakinin **10 katıdır**.",
      "د ظرفيت واحدونه **ليتر (L)** شاوخوا تنظيم شوي دي. هر واحد د راتلونکي **10 چنده** لوی دی."
    ) },
    { headers: A(
      ["kL", "hL", "daL", "L", "dL", "cL", "mL"],
      ["kL", "hL", "daL", "L", "dL", "cL", "mL"],
      ["كل", "هل", "دال", "ل", "دل", "سل", "مل"],
      ["کیلولیتر", "هکتولیتر", "دکالیتر", "لیتر", "دسیلیتر", "سانتیلیتر", "میلیلیتر"],
      ["kL", "hL", "daL", "L", "dL", "cL", "mL"],
      ["кл", "гл", "дал", "л", "дл", "сл", "мл"],
      ["kL", "hL", "daL", "L", "dL", "cL", "mL"],
      ["kL", "hL", "daL", "L", "dL", "cL", "mL"],
      ["kL", "hL", "daL", "L", "dL", "cL", "mL"],
      ["kL", "hL", "daL", "L", "dL", "cL", "mL"]
    ) },
    { label: S("Règle de conversion — capacité", "Conversion rule — capacity", "قاعدة التحويل — السعة", "قانون تبدیل — ظرفیت", "ሕጊ ለውጢ — ዓቕሚ", "Правило переведення — місткість", "Regra de conversão — capacidade", "Xeerka rogaalcelinta — awoodda", "Dönüşüm kuralı — kapasite", "د بدلون قاعده — ظرفيت"),
      items: A(
        ["Vers la droite → × 10 à chaque rang", "Vers la gauche → ÷ 10 à chaque rang", "Ex. 3,5 L = 35 dL = 350 cL = 3 500 mL", "Lien : 1 L = 1 dm³ et 1 mL = 1 cm³"],
        ["To the right → × 10 per rank", "To the left → ÷ 10 per rank", "E.g. 3.5 L = 35 dL = 350 cL = 3,500 mL", "Link: 1 L = 1 dm³ and 1 mL = 1 cm³"],
        ["نحو اليمين → × 10 في كل رتبة", "نحو اليسار → ÷ 10 في كل رتبة", "مثال: 3,5 ل = 35 دل = 350 سل = 3500 مل", "صلة: 1 ل = 1 دم³ و 1 مل = 1 سم³"],
        ["به سمت راست → × 10 در هر رتبه", "به سمت چپ → ÷ 10 در هر رتبه", "مثال: 3,5 L = 35 dL = 350 cL = 3500 mL", "ارتباط: 1 L = 1 dm³ و 1 mL = 1 cm³"],
        ["ናብ የማን → × 10 ኣብ ነፍሲ ወከፍ ደረጃ", "ናብ ጸጋም → ÷ 10 ኣብ ነፍሲ ወከፍ ደረጃ", "ኣብነት፦ 3,5 L = 35 dL = 350 cL = 3500 mL", "ምትእስሳር፦ 1 L = 1 dm³"],
        ["Вправо → × 10 на кожен розряд", "Вліво → ÷ 10 на кожен розряд", "Напр. 3,5 л = 35 дл = 350 сл = 3 500 мл", "Зв'язок: 1 л = 1 дм³ і 1 мл = 1 см³"],
        ["Para a direita → × 10 por nível", "Para a esquerda → ÷ 10 por nível", "Ex. 3,5 L = 35 dL = 350 cL = 3 500 mL", "Ligação: 1 L = 1 dm³ e 1 mL = 1 cm³"],
        ["Midig → × 10 heer kasta", "Bidix → ÷ 10 heer kasta", "Tusaale: 3,5 L = 35 dL = 350 cL = 3500 mL", "Xiriir: 1 L = 1 dm³"],
        ["Sağa → her sıra için × 10", "Sola → her sıra için ÷ 10", "Örn. 3,5 L = 35 dL = 350 cL = 3.500 mL", "Bağlantı: 1 L = 1 dm³ ve 1 mL = 1 cm³"],
        ["ښي خوا → × 10 هر درجه", "کيڼ خوا → ÷ 10 هر درجه", "بېلګه: 3,5 L = 35 dL = 350 cL = 3500 mL", "تړاو: 1 L = 1 dm³"]
      )
    },
    { text: S("Unités de masse", "Units of mass", "وحدات الكتلة", "واحدهای جرم", "ናይ ብዝሒ ሓደ ዜሮ", "Одиниці маси", "Unidades de massa", "Cutubka miisaanka", "Kütle birimleri", "د وزن واحدونه") },
    { text: S(
      "Les unités de masse sont organisées autour du **gramme (g)**. En pratique : tonne (t), kilogramme (kg) et gramme (g).",
      "Mass units are organised around the **gram (g)**. In practice: tonne (t), kilogram (kg) and gram (g).",
      "وحدات الكتلة منظمة حول **الغرام (g)**. عملياً: طن (t)، كيلوغرام (kg)، غرام (g).",
      "واحدهای جرم حول **گرم (g)** سازمان‌یافته‌اند. در عمل: تن (t)، کیلوگرم (kg) و گرم (g).",
      "ናይ ብዝሒ ሓደ ዜሮ ኣብ **ግራም (g)** ዝተሰርሔ እዩ። ብተግባር፦ ቶን (t)፣ ኪሎ (kg)፣ ግራም (g)።",
      "Одиниці маси організовані навколо **грама (g)**. На практиці: тонна (t), кілограм (kg) і грам (g).",
      "As unidades de massa organizam-se em torno do **grama (g)**. Na prática: tonelada (t), quilograma (kg) e grama (g).",
      "Cutubka miisaanka waxaa lagu qaabeeyey **garaam (g)**. Dhaqsaha: tan (t), kilogaraam (kg), garaam (g).",
      "Kütle birimleri **gram (g)** etrafında düzenlenir. Pratikte: ton (t), kilogram (kg) ve gram (g).",
      "د وزن واحدونه **ګرام (g)** شاوخوا تنظيم شوي دي. عملي توګه: ټن (t)، کيلوګرام (kg)، ګرام (g)."
    ) },
    { label: S("Conversions clés — masse", "Key conversions — mass", "التحويلات الأساسية — الكتلة", "تبدیل‌های کلیدی — جرم", "መሰረታዊ ለውጢ — ብዝሒ", "Ключові переведення — маса", "Conversões principais — massa", "Rogaalcelinta muhiimka ah — miisaanka", "Temel dönüşümler — kütle", "کليدي بدلونونه — وزن"),
      items: A(
        ["1 t = 1 000 kg = 1 000 000 g", "1 kg = 1 000 g", "Vers la droite → × 10. Vers la gauche → ÷ 10.", "Ex. 2,5 kg = 2 500 g  |  750 g = 0,75 kg"],
        ["1 t = 1,000 kg = 1,000,000 g", "1 kg = 1,000 g", "To the right → × 10. To the left → ÷ 10.", "E.g. 2.5 kg = 2,500 g  |  750 g = 0.75 kg"],
        ["1 ط = 1000 كغ = 1000000 غ", "1 كغ = 1000 غ", "نحو اليمين → × 10. نحو اليسار → ÷ 10.", "مثال: 2,5 كغ = 2500 غ  |  750 غ = 0,75 كغ"],
        ["1 t = 1000 kg = 1000000 g", "1 kg = 1000 g", "به سمت راست → × 10. به سمت چپ → ÷ 10.", "مثال: 2,5 kg = 2500 g  |  750 g = 0,75 kg"],
        ["1 t = 1000 kg = 1000000 g", "1 kg = 1000 g", "ናብ የማን → × 10። ናብ ጸጋም → ÷ 10።", "ኣብነት፦ 2,5 kg = 2500 g  |  750 g = 0,75 kg"],
        ["1 т = 1 000 кг = 1 000 000 г", "1 кг = 1 000 г", "Вправо → × 10. Вліво → ÷ 10.", "Напр. 2,5 кг = 2 500 г  |  750 г = 0,75 кг"],
        ["1 t = 1 000 kg = 1 000 000 g", "1 kg = 1 000 g", "Para a direita → × 10. Para a esquerda → ÷ 10.", "Ex. 2,5 kg = 2 500 g  |  750 g = 0,75 kg"],
        ["1 t = 1000 kg = 1000000 g", "1 kg = 1000 g", "Midig → × 10. Bidix → ÷ 10.", "Tusaale: 2,5 kg = 2500 g  |  750 g = 0,75 kg"],
        ["1 t = 1.000 kg = 1.000.000 g", "1 kg = 1.000 g", "Sağa → × 10. Sola → ÷ 10.", "Örn. 2,5 kg = 2.500 g  |  750 g = 0,75 kg"],
        ["1 t = 1000 kg = 1000000 g", "1 kg = 1000 g", "ښي خوا → × 10. کيڼ خوا → ÷ 10.", "بېلګه: 2,5 kg = 2500 g  |  750 g = 0,75 kg"]
      )
    },
    { text: S("Unités de temps", "Units of time", "وحدات الزمن", "واحدهای زمان", "ናይ ግዜ ሓደ ዜሮ", "Одиниці часу", "Unidades de tempo", "Cutubka wakhtiga", "Zaman birimleri", "د وخت واحدونه") },
    { text: S(
      "Contrairement aux autres unités, le temps **ne se divise pas en 10** mais en 60 (minutes/secondes) et 24 (heures/jours).",
      "Unlike other units, time is **not divided by 10** but by 60 (minutes/seconds) and 24 (hours/days).",
      "على خلاف الوحدات الأخرى، الزمن **لا يُقسَّم إلى 10** بل إلى 60 (دقائق/ثواني) و24 (ساعات/أيام).",
      "برخلاف واحدهای دیگر، زمان **به 10 تقسیم نمی‌شود** بلکه به 60 (دقیقه/ثانیه) و 24 (ساعت/روز).",
      "ካልኦት ሓደ ዜሮ ብዘይኮነ፣ ግዜ **ብ10 ኣይፈርስን** ብ60 (ደቓይቕ/ካልኢት) ብ24 (ሰዓት/መዓልቲ) ግን ይፈርስ።",
      "На відміну від інших одиниць, час **не ділиться на 10**, а на 60 (хвилини/секунди) і 24 (години/дні).",
      "Ao contrário das outras unidades, o tempo **não se divide em 10** mas em 60 (minutos/segundos) e 24 (horas/dias).",
      "Kaga duwan cutubka kale, wakhtiga **kuma qaybsamto 10** laakiin 60 (daqiiqado/ilbiriqsi) iyo 24 (saacadood/maalmood).",
      "Diğer birimlerden farklı olarak, zaman **10'a bölünmez**; 60'a (dakika/saniye) ve 24'e (saat/gün) bölünür.",
      "د نورو واحدونو برعکس، وخت **10 ته نه ويشل کېږي** بلکه 60 ته (دقيقې/ثانيې) او 24 ته (ساعتونه/ورځې)."
    ) },
    { label: S("Conversions clés — temps", "Key conversions — time", "التحويلات الأساسية — الزمن", "تبدیل‌های کلیدی — زمان", "መሰረታዊ ለውጢ — ግዜ", "Ключові переведення — час", "Conversões principais — tempo", "Rogaalcelinta muhiimka ah — wakhtiga", "Temel dönüşümler — zaman", "کليدي بدلونونه — وخت"),
      items: A(
        ["1 h = 60 min = 3 600 s", "1 min = 60 s", "1 jour = 24 h = 1 440 min", "1 an = 365 jours (366 années bissextiles)"],
        ["1 h = 60 min = 3,600 s", "1 min = 60 s", "1 day = 24 h = 1,440 min", "1 year = 365 days (366 in leap years)"],
        ["1 ساعة = 60 دقيقة = 3600 ثانية", "1 دقيقة = 60 ثانية", "1 يوم = 24 ساعة = 1440 دقيقة", "1 سنة = 365 يومًا (366 في السنوات الكبيسة)"],
        ["1 h = 60 min = 3600 s", "1 min = 60 s", "1 روز = 24 h = 1440 min", "1 سال = 365 روز (366 در سال کبیسه)"],
        ["1 ሰዓት = 60 ደቒቕ = 3600 ካልኢት", "1 ደቒቕ = 60 ካልኢት", "1 መዓልቲ = 24 ሰዓት = 1440 ደቒቕ", "1 ዓመት = 365 መዓልቲ (366 ዓመት ዝናብ)"],
        ["1 год = 60 хв = 3 600 с", "1 хв = 60 с", "1 день = 24 год = 1 440 хв", "1 рік = 365 днів (366 у високосні роки)"],
        ["1 h = 60 min = 3 600 s", "1 min = 60 s", "1 dia = 24 h = 1 440 min", "1 ano = 365 dias (366 nos anos bissextos)"],
        ["1 saac = 60 daqiiqo = 3600 ilbiriqsi", "1 daqiiqo = 60 ilbiriqsi", "1 maalin = 24 saac = 1440 daqiiqo", "1 sanad = 365 maalmood (366 sannadaha kaabiyada)"],
        ["1 sa = 60 dk = 3.600 sn", "1 dk = 60 sn", "1 gün = 24 sa = 1.440 dk", "1 yıl = 365 gün (artık yıllarda 366)"],
        ["1 ساعت = 60 دقيقه = 3600 ثانيه", "1 دقيقه = 60 ثانيه", "1 ورځ = 24 ساعت = 1440 دقيقه", "1 کال = 365 ورځې (366 کبيسه کالونو کې)"]
      )
    },
  ],
};
