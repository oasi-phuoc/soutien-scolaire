import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_LESSONS: MathSubmoduleLesson[] = [
  {
    submoduleId: "A8-1",
    submoduleCode: "A8.1",
    theory: {
      title: {
        fr: "Notation puissance",
        en: "Power notation",
        ar: "رمز الأس",
        fa: "نمادگذاری توان",
        ti: "ምልክት ሓይሊ",
        uk: "Позначення степеня",
      },
      paragraphs: {
        fr: [
          "Une puissance est une façon rapide d'écrire une multiplication répétée. Elle est composée de deux éléments : la base (le nombre qu'on répète) et l'exposant (le nombre de fois qu'on multiplie la base par elle-même).",
          "Exemple : 2³ = 2 × 2 × 2 = 8. On lit « 2 exposant 3 » ou « 2 à la puissance 3 ».",
          "Cas particuliers : tout nombre à la puissance 1 est lui-même (5¹ = 5) ; tout nombre (≠ 0) à la puissance 0 vaut 1 (7⁰ = 1).",
          "Attention : 2³ ≠ 2 × 3. La puissance est une multiplication répétée, pas une multiplication simple.",
        ],
        en: [
          "A power is a quick way to write repeated multiplication. It has two parts: the base (the repeated number) and the exponent (how many times the base is multiplied by itself).",
          "Example: 2³ = 2 × 2 × 2 = 8. Read as 'two to the power of three'.",
          "Special cases: any number to the power of 1 equals itself (5¹ = 5); any non-zero number to the power of 0 equals 1 (7⁰ = 1).",
          "Warning: 2³ ≠ 2 × 3. A power means repeated multiplication, not simple multiplication.",
        ],
        ar: [
          "الأس طريقة سريعة لكتابة ضرب متكرر. يتكون من جزأين: القاعدة (العدد المتكرر) والأس (عدد مرات الضرب).",
          "مثال: 2³ = 2 × 2 × 2 = 8. تُقرأ «2 أس 3».",
          "حالات خاصة: أي عدد أس 1 يساوي نفسه؛ أي عدد غير صفر أس 0 يساوي 1.",
          "تحذير: 2³ ≠ 2 × 3. الأس يعني الضرب المتكرر وليس الضرب البسيط.",
        ],
        fa: [
          "توان روشی سریع برای نوشتن ضرب تکراری است. از دو بخش تشکیل می‌شود: پایه (عددی که تکرار می‌شود) و نما (تعداد دفعات ضرب).",
          "مثال: 2³ = 2 × 2 × 2 = 8. خوانده می‌شود «2 به توان 3».",
          "حالات خاص: هر عدد به توان 1 برابر خودش است؛ هر عدد غیرصفر به توان 0 برابر 1 است.",
          "هشدار: 2³ ≠ 2 × 3. توان یعنی ضرب تکراری، نه ضرب ساده.",
        ],
        ti: [
          "ሓይሊ ቁጽሪ ዝኾነ ድግምድግም ምርባሕ ናብ ሓጺር ምጽሓፍ ናይ ምርባሕ ዘፍቅድ ኣፈፃፅማ ዩ። ካብ ክልተ ክፋል ዝቖምሉ: ሰረት (ዝድገም ቁጽሪ) ካብ ኣስፋፊሐ (ቁጽሪ ናይ ምርባሕ).",
          "ናይ ምሳሌ: 2³ = 2 × 2 × 2 = 8. «2 ናይ ሓይሊ 3» ኢሉ ዝንበብ.",
          "ፍሉይ ኩነታት: ዝኾነ ቁጽሪ ናብ ሓይሊ 1 ንባዕሉ ዩ; ዝኾነ ዜሮ ዘይኮነ ቁጽሪ ናብ ሓይሊ 0 = 1.",
          "ጥንቃቐ: 2³ ≠ 2 × 3. ሓይሊ ዘምልክት ድግምድግም ምርባሕ ዩ ናይ ቀሊል ምርባሕ ዘይኮነ.",
        ],
        uk: [
          "Степінь — це скорочений спосіб запису повторного множення. Він складається з двох частин: основи (числа, яке повторюється) та показника (кількості множень).",
          "Приклад: 2³ = 2 × 2 × 2 = 8. Читається «два в кубі» або «два в степені трьох».",
          "Особливі випадки: будь-яке число в степені 1 дорівнює собі (5¹ = 5); будь-яке ненульове число в степені 0 дорівнює 1 (7⁰ = 1).",
          "Увага: 2³ ≠ 2 × 3. Степінь означає повторне множення, а не просте.",
        ],
      },
    },
    exercises: [
      { id: "a8-1-e1", promptFr: "Écris 5 × 5 × 5 sous forme de puissance.", type: "short_text", acceptable: ["5³", "5^3"] },
      { id: "a8-1-e2", promptFr: "Calcule 3².", type: "number", acceptable: ["9"] },
      { id: "a8-1-e3", promptFr: "Quelle est la base dans 4⁵ ?", type: "number", acceptable: ["4"] },
      { id: "a8-1-e4", promptFr: "Quel est l'exposant dans 7³ ?", type: "number", acceptable: ["3"] },
      { id: "a8-1-e5", promptFr: "Calcule 10⁰.", type: "number", acceptable: ["1"] },
    ],
  },
  {
    submoduleId: "A8-2",
    submoduleCode: "A8.2",
    theory: {
      title: {
        fr: "Calcul de puissances",
        en: "Computing powers",
        ar: "حساب الأس",
        fa: "محاسبه توان",
        ti: "ኣሰላልፋ ሓይሊ",
        uk: "Обчислення степенів",
      },
      paragraphs: {
        fr: [
          "Pour calculer une puissance, on multiplie la base par elle-même autant de fois que l'indique l'exposant.",
          "Exemples : 2⁴ = 2 × 2 × 2 × 2 = 16 ; 3³ = 27 ; 5² = 25.",
          "Propriétés des puissances (même base) : aⁿ × aᵐ = aⁿ⁺ᵐ et aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "Exemple : 2³ × 2² = 2⁵ = 32 ; 3⁵ ÷ 3² = 3³ = 27.",
        ],
        en: [
          "To compute a power, multiply the base by itself as many times as the exponent indicates.",
          "Examples: 2⁴ = 2 × 2 × 2 × 2 = 16; 3³ = 27; 5² = 25.",
          "Properties (same base): aⁿ × aᵐ = aⁿ⁺ᵐ and aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "Example: 2³ × 2² = 2⁵ = 32; 3⁵ ÷ 3² = 3³ = 27.",
        ],
        ar: [
          "لحساب أس، نضرب القاعدة في نفسها بعدد مرات يشير إليه الأس.",
          "أمثلة: 2⁴ = 16؛ 3³ = 27؛ 5² = 25.",
          "خصائص (نفس القاعدة): aⁿ × aᵐ = aⁿ⁺ᵐ وaⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "مثال: 2³ × 2² = 2⁵ = 32.",
        ],
        fa: [
          "برای محاسبه توان، پایه را به اندازه نما در خودش ضرب می‌کنیم.",
          "مثال‌ها: 2⁴ = 16؛ 3³ = 27؛ 5² = 25.",
          "خاصیت‌ها (پایه یکسان): aⁿ × aᵐ = aⁿ⁺ᵐ و aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "مثال: 2³ × 2² = 2⁵ = 32.",
        ],
        ti: [
          "ሓይሊ ቁጽሪ ክትሰልፍ ሰረቱ ብናይ ኣስፋፊሐ ቁጽሪ ናብ ናዕቤ ምርባሕ ዩ.",
          "ምሳሌ: 2⁴ = 16; 3³ = 27; 5² = 25.",
          "ንብረታት (ሓደ ሰረት): aⁿ × aᵐ = aⁿ⁺ᵐ ከምኡ aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "ምሳሌ: 2³ × 2² = 2⁵ = 32.",
        ],
        uk: [
          "Для обчислення степеня основу множать на себе стільки разів, скільки вказує показник.",
          "Приклади: 2⁴ = 16; 3³ = 27; 5² = 25.",
          "Властивості (однакова основа): aⁿ × aᵐ = aⁿ⁺ᵐ та aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "Приклад: 2³ × 2² = 2⁵ = 32.",
        ],
      },
    },
    exercises: [
      { id: "a8-2-e1", promptFr: "Calcule 2⁵.", type: "number", acceptable: ["32"] },
      { id: "a8-2-e2", promptFr: "Calcule 4³.", type: "number", acceptable: ["64"] },
      { id: "a8-2-e3", promptFr: "Calcule 6².", type: "number", acceptable: ["36"] },
      { id: "a8-2-e4", promptFr: "2³ × 2⁴ = 2^?", type: "number", acceptable: ["7"] },
      { id: "a8-2-e5", promptFr: "3⁶ ÷ 3² = 3^?", type: "number", acceptable: ["4"] },
    ],
  },
  {
    submoduleId: "A8-3",
    submoduleCode: "A8.3",
    theory: {
      title: {
        fr: "Puissances de 10",
        en: "Powers of 10",
        ar: "قوى العشرة",
        fa: "توان‌های 10",
        ti: "ሓይሊ 10",
        uk: "Степені числа 10",
      },
      paragraphs: {
        fr: [
          "Les puissances de 10 facilitent l'écriture des grands et petits nombres : 10¹ = 10, 10² = 100, 10³ = 1 000, 10⁴ = 10 000.",
          "Une puissance de 10 s'obtient en plaçant autant de zéros que l'exposant après le 1 : 10⁵ = 100 000.",
          "Les puissances de 10 négatives : 10⁻¹ = 0,1 ; 10⁻² = 0,01 ; 10⁻³ = 0,001.",
          "Notation scientifique : 4 700 000 = 4,7 × 10⁶ ; 0,000 035 = 3,5 × 10⁻⁵.",
        ],
        en: [
          "Powers of 10 simplify writing large and small numbers: 10¹ = 10, 10² = 100, 10³ = 1,000.",
          "A power of 10 is written as 1 followed by as many zeros as the exponent: 10⁵ = 100,000.",
          "Negative powers: 10⁻¹ = 0.1; 10⁻² = 0.01; 10⁻³ = 0.001.",
          "Scientific notation: 4,700,000 = 4.7 × 10⁶; 0.000035 = 3.5 × 10⁻⁵.",
        ],
        ar: [
          "قوى العشرة تسهّل كتابة الأعداد الكبيرة والصغيرة: 10¹ = 10، 10² = 100، 10³ = 1000.",
          "قوة العشرة تُكتب كـ 1 متبوعة بعدد من الأصفار يساوي الأس: 10⁵ = 100000.",
          "الأسس السالبة: 10⁻¹ = 0,1؛ 10⁻² = 0,01.",
          "الصيغة العلمية: 4 700 000 = 4,7 × 10⁶.",
        ],
        fa: [
          "توان‌های 10 نوشتن اعداد بزرگ و کوچک را آسان می‌کنند: 10² = 100، 10³ = 1000.",
          "توان 10 به صورت یک 1 با همان تعداد صفر نوشته می‌شود: 10⁵ = 100000.",
          "توان‌های منفی: 10⁻¹ = 0.1؛ 10⁻² = 0.01.",
          "نمادگذاری علمی: 4,700,000 = 4.7 × 10⁶.",
        ],
        ti: [
          "ሓይሊ 10 ንዓበይቲን ንኣሽቱን ቁጽርታት ቀሊሉ ኣቀማምጥ ዩ: 10² = 100, 10³ = 1000.",
          "ሓይሊ 10 ብ 1 ድሕሪ ብቁጽሪ ናይ ኣስፋፊሐ ዝኾኑ ዜሮታት ዝጸሓፍ ዩ.",
          "ኣሉታዊ ኣስፋፊሓት: 10⁻¹ = 0.1; 10⁻² = 0.01.",
          "ሳይንሳዊ ምልክት: 4 700 000 = 4.7 × 10⁶.",
        ],
        uk: [
          "Степені числа 10 спрощують запис великих і малих чисел: 10² = 100, 10³ = 1 000.",
          "Ступінь 10 — це одиниця з кількістю нулів, що дорівнює показнику: 10⁵ = 100 000.",
          "Від'ємні степені: 10⁻¹ = 0,1; 10⁻² = 0,01.",
          "Науковий запис: 4 700 000 = 4,7 × 10⁶.",
        ],
      },
    },
    exercises: [
      { id: "a8-3-e1", promptFr: "Calcule 10³.", type: "number", acceptable: ["1000"] },
      { id: "a8-3-e2", promptFr: "Écris 100 000 comme puissance de 10.", type: "short_text", acceptable: ["10⁵", "10^5"] },
      { id: "a8-3-e3", promptFr: "Combien de zéros a 10⁷ ?", type: "number", acceptable: ["7"] },
      { id: "a8-3-e4", promptFr: "Écris 4 500 en notation scientifique (coefficient × 10^n, donne n).", type: "number", acceptable: ["3"] },
      { id: "a8-3-e5", promptFr: "10⁻² vaut combien ?", type: "short_text", acceptable: ["0,01", "0.01"] },
    ],
  },
  {
    submoduleId: "A8-4",
    submoduleCode: "A8.4",
    theory: {
      title: {
        fr: "Racine carrée (carrés parfaits)",
        en: "Square root (perfect squares)",
        ar: "الجذر التربيعي (مربعات تامة)",
        fa: "جذر مربع (مربعات کامل)",
        ti: "ስርወ-ካሬ (ፍጹም ካሬታት)",
        uk: "Квадратний корінь (точні квадрати)",
      },
      paragraphs: {
        fr: [
          "La racine carrée est l'opération inverse de la puissance 2. √a est le nombre positif tel que (√a)² = a.",
          "Question : quel nombre multiplié par lui-même donne ce nombre ? Exemple : √9 = 3 car 3 × 3 = 9.",
          "Carrés parfaits courants : √1 = 1, √4 = 2, √9 = 3, √16 = 4, √25 = 5, √36 = 6, √49 = 7, √64 = 8, √81 = 9, √100 = 10.",
          "Propriété : √(a × b) = √a × √b. Exemple : √36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6.",
        ],
        en: [
          "The square root is the inverse of squaring. √a is the positive number such that (√a)² = a.",
          "Question: which number, multiplied by itself, gives this number? Example: √9 = 3 because 3 × 3 = 9.",
          "Common perfect squares: √1=1, √4=2, √9=3, √16=4, √25=5, √36=6, √49=7, √64=8, √81=9, √100=10.",
          "Property: √(a × b) = √a × √b. Example: √36 = √4 × √9 = 2 × 3 = 6.",
        ],
        ar: [
          "الجذر التربيعي هو العملية العكسية للتربيع. √a هو العدد الموجب الذي (√a)² = a.",
          "السؤال: أي عدد مضروب في نفسه يعطي هذا العدد؟ مثال: √9 = 3 لأن 3 × 3 = 9.",
          "مربعات تامة شائعة: √1=1, √4=2, √9=3, √16=4, √25=5.",
          "الخاصية: √(a × b) = √a × √b.",
        ],
        fa: [
          "جذر مربع عملیات معکوس توان دوم است. √a عدد مثبتی است که (√a)² = a.",
          "سوال: کدام عدد ضربدر خودش این عدد را می‌دهد؟ مثال: √9 = 3 چون 3 × 3 = 9.",
          "مربعات کامل رایج: √1=1، √4=2، √9=3، √16=4، √25=5.",
          "ویژگی: √(a × b) = √a × √b.",
        ],
        ti: [
          "ስርወ-ካሬ ናይ ካሬ ድርብ ተቃራኒ ስራሕ ዩ. √a ናይ ኣወንታ ቁጽሪ ዩ ክኸውን ዘለዎ (√a)² = a.",
          "ሕቶ: ናብ ናዕቤ ዝምልስ ቁጽሪ ምስ ናዕቤ ዝኸውን ዩ? ምሳሌ: √9 = 3 ምክንያቱ 3 × 3 = 9.",
          "ናይ ፍጹም ካሬ ቁጽርታት: √1=1, √4=2, √9=3, √16=4, √25=5.",
          "ንብረት: √(a × b) = √a × √b.",
        ],
        uk: [
          "Квадратний корінь — операція, обернена до зведення в квадрат. √a — це додатне число таке, що (√a)² = a.",
          "Питання: яке число, помножене саме на себе, дає це число? Приклад: √9 = 3, бо 3 × 3 = 9.",
          "Поширені точні квадрати: √1=1, √4=2, √9=3, √16=4, √25=5, √36=6, √49=7, √64=8, √81=9, √100=10.",
          "Властивість: √(a × b) = √a × √b.",
        ],
      },
    },
    exercises: [
      { id: "a8-4-e1", promptFr: "Calcule √25.", type: "number", acceptable: ["5"] },
      { id: "a8-4-e2", promptFr: "Calcule √81.", type: "number", acceptable: ["9"] },
      { id: "a8-4-e3", promptFr: "Calcule √49.", type: "number", acceptable: ["7"] },
      { id: "a8-4-e4", promptFr: "√(4 × 25) = √4 × √25 = ?", type: "number", acceptable: ["10"] },
      { id: "a8-4-e5", promptFr: "Quel est le plus petit carré parfait supérieur à 50 ?", type: "number", acceptable: ["64"] },
    ],
  },
  {
    submoduleId: "A8-5",
    submoduleCode: "A8.5",
    theory: {
      title: {
        fr: "Valeur approchée d'une racine",
        en: "Approximate value of a root",
        ar: "القيمة التقريبية لجذر",
        fa: "مقدار تقریبی جذر",
        ti: "ናይ ስርወ ቀረባ ዋጋ",
        uk: "Наближене значення кореня",
      },
      paragraphs: {
        fr: [
          "Quand un nombre n'est pas un carré parfait, sa racine carrée est irrationnelle (elle n'a pas de valeur exacte décimale finie).",
          "On peut l'encadrer : √7 est entre 2 (car 2² = 4) et 3 (car 3² = 9), donc 2 < √7 < 3. Valeur approchée : √7 ≈ 2,646.",
          "Méthode : trouver les deux carrés parfaits qui encadrent le nombre, puis utiliser la calculatrice pour la valeur décimale.",
          "Exemples : √2 ≈ 1,414 ; √3 ≈ 1,732 ; √5 ≈ 2,236.",
        ],
        en: [
          "When a number is not a perfect square, its square root is irrational (no exact finite decimal).",
          "We can bound it: √7 is between 2 (since 2²=4) and 3 (since 3²=9), so 2 < √7 < 3. Approximate value: √7 ≈ 2.646.",
          "Method: find the two perfect squares bounding the number, then use a calculator for the decimal value.",
          "Examples: √2 ≈ 1.414; √3 ≈ 1.732; √5 ≈ 2.236.",
        ],
        ar: [
          "عندما لا يكون العدد مربعاً تاماً، جذره التربيعي غير نسبي.",
          "يمكن تأطيره: √7 بين 2 (إذ 2²=4) و3 (إذ 3²=9)، أي 2 < √7 < 3. قيمة تقريبية: √7 ≈ 2,646.",
          "الطريقة: ابحث عن المربعين التامين المحيطين بالعدد ثم استخدم الآلة الحاسبة.",
          "أمثلة: √2 ≈ 1,414؛ √3 ≈ 1,732.",
        ],
        fa: [
          "وقتی عددی مربع کامل نیست، جذر مربعش گویا نیست.",
          "می‌توانیم محدوده‌اش را پیدا کنیم: √7 بین 2 (چون 2²=4) و 3 (چون 3²=9)، پس 2 < √7 < 3. مقدار تقریبی: √7 ≈ 2.646.",
          "روش: دو مربع کامل محیط عدد را پیدا کن، سپس با ماشین حساب مقدار دقیق بگیر.",
          "مثال‌ها: √2 ≈ 1.414؛ √3 ≈ 1.732.",
        ],
        ti: [
          "ቁጽሪ ፍጹም ካሬ ዘይኮነ ምስ ዝኸውን ስርወ-ካሬ ናቱ ኢሬሽናል ዩ.",
          "ንኸነቕርቦ ንኽእል: √7 ካብ 2 (ምክንያቱ 2²=4) ክሳዕ 3 (ምክንያቱ 3²=9). √7 ≈ 2.646.",
          "ኣፈጻጽማ: ክልተ ፍጹም ካሬ ዘቕርቦ ቁጽሪ ብምርካብ ካብ ካልኩሌተር ናይ ዓሰርተ ዋጋ ምርካብ.",
          "ምሳሌ: √2 ≈ 1.414; √3 ≈ 1.732.",
        ],
        uk: [
          "Якщо число не є точним квадратом, його квадратний корінь ірраціональний (немає точного скінченного десяткового запису).",
          "Можна оцінити: √7 між 2 (бо 2²=4) і 3 (бо 3²=9), тобто 2 < √7 < 3. Наближено: √7 ≈ 2,646.",
          "Метод: знайти два точних квадрати, між якими знаходиться число, потім скористатися калькулятором.",
          "Приклади: √2 ≈ 1,414; √3 ≈ 1,732; √5 ≈ 2,236.",
        ],
      },
    },
    exercises: [
      { id: "a8-5-e1", promptFr: "√2 est entre quels entiers consécutifs ? (donne le plus petit)", type: "number", acceptable: ["1"] },
      { id: "a8-5-e2", promptFr: "√50 est entre quels entiers consécutifs ? (donne le plus petit)", type: "number", acceptable: ["7"] },
      { id: "a8-5-e3", promptFr: "Arrondi à l'unité : √30 ≈ ?", type: "number", acceptable: ["5"] },
      { id: "a8-5-e4", promptFr: "Est-ce que √2 a une valeur décimale exacte finie ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "a8-5-e5", promptFr: "√10 est plus proche de 3 ou de 4 ? (réponds par le bon entier)", type: "number", acceptable: ["3"] },
    ],
  },
];
