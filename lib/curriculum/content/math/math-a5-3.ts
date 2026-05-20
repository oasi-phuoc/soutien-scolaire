import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A5-3",
    submoduleCode: "A5.3",
    theory: {
      title: { fr: "Arrondir les décimaux", en: "Rounding decimals", ar: "تقريب الأعداد العشرية", fa: "گرد کردن اعشار", ti: "ቁጽሪ ቪርጉላ ምልካዕ", uk: "Округлення десяткових" },
      paragraphs: {
        fr: [
          "Arrondir un décimal signifie le remplacer par une valeur plus simple. On peut arrondir à l'unité, au dixième, au centième, etc.",
          "Règle : regardez le chiffre qui suit la position d'arrondi. S'il est ≥ 5, on arrondit vers le haut (on augmente d'un). S'il est < 5, on arrondit vers le bas (on garde la position).",
          "Exemples : 3,47 arrondi au dixième → 3,5 (car 7 ≥ 5). 3,42 arrondi au dixième → 3,4 (car 2 < 5). 3,479 arrondi au centième → 3,48 (car 9 ≥ 5).",
        ],
        en: [
          "Rounding a decimal means replacing it with a simpler value. We can round to the nearest unit, tenth, hundredth, etc.",
          "Rule: look at the digit following the rounding position. If ≥ 5, round up. If < 5, round down.",
          "Examples: 3.47 rounded to the tenth → 3.5 (7 ≥ 5). 3.42 to the tenth → 3.4 (2 < 5). 3.479 to the hundredth → 3.48 (9 ≥ 5).",
        ],
        ar: [
          "تقريب عدد عشري يعني استبداله بقيمة أبسط. يمكن التقريب للوحدة أو للعشر أو للمئة…",
          "القاعدة: انظر إلى الرقم الذي يلي منزلة التقريب. إذا كان ≥ 5، قرّب للأعلى. إذا كان < 5، قرّب للأسفل.",
          "أمثلة: 3,47 مقرّب للعشر ← 3,5 (لأن 7 ≥ 5). 3,42 مقرّب للعشر ← 3,4 (لأن 2 < 5). 3,479 مقرّب للمئة ← 3,48 (لأن 9 ≥ 5).",
        ],
        fa: [
          "گرد کردن عدد اعشاری یعنی جایگزین کردن آن با مقدار ساده‌تر. می‌توان به نزدیک‌ترین واحد، دهم، صدم و... گرد کرد.",
          "قانون: به رقم بعد از موقعیت گردکردن نگاه کنید. اگر ≥ ۵ باشد، به بالا گرد کنید. اگر < ۵ باشد، به پایین.",
          "مثال‌ها: ۳,۴۷ گرد شده به دهم ← ۳,۵ (چون ۷ ≥ ۵). ۳,۴۲ به دهم ← ۳,۴ (چون ۲ < ۵). ۳,۴۷۹ به صدم ← ۳,۴۸ (چون ۹ ≥ ۵).",
        ],
        ti: [
          "ቁጽሪ ቪርጉላ ምልካዕ ቀሊል ዋጋ ብምቅዳሕ ምቕያር ማለት እዩ። ናብ ኣሃዱ, ዓሰርተኛ, ሚእቲኛ ምልካዕ ይከኣል።",
          "ሕጊ: ናይ ምልካዕ ቦታ ዝስዕብ ቁጽሪ ርኣ። ≥ 5 እንተኾነ ዓቢ ኣቅጣጫ ምልካዕ ጥቀም። < 5 እንተኾነ ንታሕቲ.",
          "ኣብነት: 3,47 ናብ ዓሰርተኛ ← 3,5 (7 ≥ 5). 3,42 ናብ ዓሰርተኛ ← 3,4 (2 < 5). 3,479 ናብ ሚእቲኛ ← 3,48 (9 ≥ 5).",
        ],
        uk: [
          "Округлення десяткового числа — заміна його простішим значенням. Округляємо до одиниць, десятих, сотих тощо.",
          "Правило: дивимося на цифру після позиції округлення. Якщо ≥ 5 — округляємо вгору. Якщо < 5 — вниз.",
          "Приклади: 3,47 до десятих → 3,5 (бо 7 ≥ 5). 3,42 до десятих → 3,4 (бо 2 < 5). 3,479 до сотих → 3,48 (бо 9 ≥ 5).",
        ],
      },
    },
    exercises: [
      { id: "a5-3-e1", promptFr: "Arrondissez 3,47 au dixième.", type: "short_text", acceptable: ["3,5", "3.5"] },
      { id: "a5-3-e2", promptFr: "Arrondissez 3,42 au dixième.", type: "short_text", acceptable: ["3,4", "3.4"] },
      { id: "a5-3-e3", promptFr: "Arrondissez 5,678 au centième.", type: "short_text", acceptable: ["5,68", "5.68"] },
      { id: "a5-3-e4", promptFr: "Arrondissez 12,351 à l'unité.", type: "number", acceptable: ["12"] },
      { id: "a5-3-e5", promptFr: "Arrondissez 9,95 au dixième.", type: "short_text", acceptable: ["10,0", "10"] },
    ],
  };
