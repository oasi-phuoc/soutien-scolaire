import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A5_3: SubmoduleTrad = {
  submoduleId: "A5-3",
  title: {
    fr: "Arrondir les décimaux",
    en: "Rounding decimals",
    ar: "تقريب الأعداد العشرية",
    fa: "گرد کردن اعداد اعشاری",
    ti: "ዲሲማል ቁጽርታት ምቕራብ",
    uk: "Округлення десяткових чисел",
    pt: "Arredondar números decimais",
    so: "Wareejinta tirooyinka tobanle",
    tr: "Ondalık sayıları yuvarlama",
    ps: "اعشاري عددونه ګردول",
  },
  blocks: [
    {
      text: {
        fr: "Comment arrondir",
        en: "How to round",
        ar: "كيف نقرّب",
        fa: "چگونه گرد کنیم",
        ti: "ብኸመይ ነቕርብ",
        uk: "Як округлювати",
        pt: "Como arredondar",
        so: "Sida loo wareejiyo",
        tr: "Nasıl yuvarlanır",
        ps: "څنګه ګرد کړو",
      },
    },
    {
      text: {
        fr: "**1.** Repérer la **position d'arrondi** (unité, dixième, centième…).",
        en: "**1.** Identify the **rounding position** (unit, tenth, hundredth…).",
        ar: "**1.** نحدد **منزلة التقريب** (وحدة، عُشر، جزء من مئة…).",
        fa: "**1.** **جایگاه گرد کردن** را مشخص کن (یکان، دهم، صدم…).",
        ti: "**1.** **ቦታ ምቕራብ** ነለሊ (ሓደት፣ ዓስራይ፣ ሚእታይ…).",
        uk: "**1.** Визначити **розряд округлення** (одиниці, десяті, соті…).",
        pt: "**1.** Identificar a **posição de arredondamento** (unidade, décimo, centésimo…).",
        so: "**1.** Ogoow **meesha la wareejinayo** (halbeeg, toban-meelood, boqol-meelood…).",
        tr: "**1.** **Yuvarlama basamağını** belirle (birler, onda birler, yüzde birler…).",
        ps: "**1.** د **ګردولو ځای** معلوم کړه (یوګان، لسمه، سلمې…).",
      },
    },
    {
      text: {
        fr: "**2.** Regarder le chiffre **juste après** cette position.",
        en: "**2.** Look at the digit **just after** that position.",
        ar: "**2.** ننظر إلى الرقم **مباشرة بعد** هذه المنزلة.",
        fa: "**2.** رقم **درست بعد از** آن جایگاه را نگاه کن.",
        ti: "**2.** ድሕሪ እታ ቦታ **ብቐጥታ** ዘሎ ኣሃዝ ንርኢ።",
        uk: "**2.** Подивитися на цифру **одразу після** цього розряду.",
        pt: "**2.** Observar o algarismo **logo a seguir** a essa posição.",
        so: "**2.** Fiiri lambarka **si toos ah uga dambeeya** meeshaas.",
        tr: "**2.** Bu basamaktan **hemen sonraki** rakama bak.",
        ps: "**2.** د هغه ځای **سمدستي وروسته** رقم وګوره.",
      },
    },
    {
      items: {
        fr: [
          "Chiffre **≥ 5** → arrondir vers le **HAUT** (augmenter d'un)",
          "Chiffre **< 5** → arrondir vers le **BAS** (laisser tel quel)",
        ],
        en: [
          "Digit **≥ 5** → round **UP** (increase by one)",
          "Digit **< 5** → round **DOWN** (leave unchanged)",
        ],
        ar: [
          "إذا كان الرقم **≥ 5** → نقرّب إلى **الأعلى** (نزيد واحدًا)",
          "إذا كان الرقم **< 5** → نقرّب إلى **الأسفل** (نتركه كما هو)",
        ],
        fa: [
          "رقم **≥ 5** → به **بالا** گرد کن (یک واحد اضافه کن)",
          "رقم **< 5** → به **پایین** گرد کن (همان‌طور بگذار)",
        ],
        ti: [
          "ኣሃዝ **≥ 5** → ናብ **ላዕሊ** ነቕርብ (ሓደ ንውስኽ)",
          "ኣሃዝ **< 5** → ናብ **ታሕቲ** ነቕርብ (ከም ዘሎ ንገድፎ)",
        ],
        uk: [
          "Цифра **≥ 5** → округлюємо **вгору** (збільшуємо на один)",
          "Цифра **< 5** → округлюємо **вниз** (залишаємо як є)",
        ],
        pt: [
          "Algarismo **≥ 5** → arredondar para **CIMA** (aumentar um)",
          "Algarismo **< 5** → arredondar para **BAIXO** (deixar como está)",
        ],
        so: [
          "Lambar **≥ 5** → u wareeji **KOR** (hal ku kordhi)",
          "Lambar **< 5** → u wareeji **HOOSE** (sidiisa u daa)",
        ],
        tr: [
          "Rakam **≥ 5** → **YUKARI** yuvarla (bir artır)",
          "Rakam **< 5** → **AŞAĞI** yuvarla (olduğu gibi bırak)",
        ],
        ps: [
          "رقم **≥ 5** → **پورته** ګرد کړه (یو زیات کړه)",
          "رقم **< 5** → **ښکته** ګرد کړه (هماغسې پرېږده)",
        ],
      },
    },
    { text: { fr: "", en: "", ar: "", fa: "", ti: "", uk: "", pt: "", so: "", tr: "", ps: "" } },
    {
      headers: {
        fr: ["Nombre", "Arrondi à", "Chiffre suivant", "Résultat"],
        en: ["Number", "Rounded to", "Next digit", "Result"],
        ar: ["العدد", "التقريب إلى", "الرقم التالي", "النتيجة"],
        fa: ["عدد", "گرد شده تا", "رقم بعدی", "نتیجه"],
        ti: ["ቁጽሪ", "ዝቐርበሉ", "ዝቕጽል ኣሃዝ", "ውጽኢት"],
        uk: ["Число", "Округлення до", "Наступна цифра", "Результат"],
        pt: ["Número", "Arredondado a", "Algarismo seguinte", "Resultado"],
        so: ["Tiro", "Loo wareejiyo", "Lambarka xiga", "Natiijo"],
        tr: ["Sayı", "Yuvarlanan basamak", "Sonraki rakam", "Sonuç"],
        ps: ["عدد", "ګردول تر", "راتلونکی رقم", "پایله"],
      },
    },
    {
      text: {
        fr: "Astuce",
        en: "Tip",
        ar: "نصيحة",
        fa: "نکته",
        ti: "ምኽሪ",
        uk: "Порада",
        pt: "Dica",
        so: "Talo",
        tr: "İpucu",
        ps: "لارښوونه",
      },
    },
    {
      items: {
        fr: ["Après l'arrondi, on supprime les chiffres après la position arrondie."],
        en: ["After rounding, we remove the digits after the rounded position."],
        ar: ["بعد التقريب، نحذف الأرقام بعد منزلة التقريب."],
        fa: ["بعد از گرد کردن، رقم‌های بعد از جایگاه گرد شده را حذف می‌کنیم."],
        ti: ["ድሕሪ ምቕራብ፣ ድሕሪ እታ ዝቐረበት ቦታ ዘለዉ ኣሃዛት ነልግሶም።"],
        uk: ["Після округлення прибираємо цифри після розряду округлення."],
        pt: ["Depois do arredondamento, eliminamos os algarismos após a posição arredondada."],
        so: ["Ka dib wareejinta, waxaan ka saarnaa lambarrada ka dambeeya meesha la wareejiyay."],
        tr: ["Yuvarlamadan sonra yuvarlanan basamaktan sonraki rakamları sileriz."],
        ps: ["له ګردولو وروسته، د ګرد شوي ځای نه وروسته رقمونه لرې کوو."],
      },
    },
  ],
};
