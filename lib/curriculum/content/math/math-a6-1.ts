import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-1",
    submoduleCode: "A6.1",
    theory: {
      title: { fr: "Notion de pourcentage", en: "Concept of percentage", ar: "مفهوم النسبة المئوية", fa: "مفهوم درصد", ti: "ናይ ሚእቲ ክፋል ፍላጠ", uk: "Поняття відсотка" },
      paragraphs: {
        fr: [
          "Un pourcentage est une fraction dont le dénominateur est 100. Le symbole est %. Exemple : 35% = 35/100 = 0,35.",
          "On utilise les pourcentages pour comparer des quantités sur une même base de 100. Exemple : 75% de réussite signifie 75 élèves sur 100 ont réussi.",
          "Conversion : fraction → % : multiplier par 100. Exemple : 3/4 × 100 = 75%. Décimal → % : multiplier par 100. Exemple : 0,6 × 100 = 60%.",
        ],
        en: [
          "A percentage is a fraction with denominator 100. The symbol is %. Example: 35% = 35/100 = 0.35.",
          "Percentages are used to compare quantities on a common base of 100. Example: 75% success rate means 75 out of 100 students passed.",
          "Conversion: fraction → %: multiply by 100. Example: 3/4 × 100 = 75%. Decimal → %: multiply by 100. Example: 0.6 × 100 = 60%.",
        ],
        ar: [
          "النسبة المئوية كسر مقامه 100. رمزها %. مثال: 35% = 35/100 = 0,35.",
          "تُستخدم النسب المئوية للمقارنة على أساس 100. مثال: نسبة نجاح 75% تعني نجاح 75 طالبًا من كل 100.",
          "تحويل: كسر → %: اضرب في 100. مثال: 3/4 × 100 = 75%. عشري → %: اضرب في 100. مثال: 0,6 × 100 = 60%.",
        ],
        fa: [
          "درصد یک کسر با مخرج ۱۰۰ است. نماد آن % است. مثال: ۳۵٪ = ۳۵/۱۰۰ = ۰,۳۵.",
          "درصدها برای مقایسه مقادیر بر پایه ۱۰۰ استفاده می‌شوند. مثال: نرخ موفقیت ۷۵٪ یعنی ۷۵ نفر از ۱۰۰ موفق شدند.",
          "تبدیل: کسر → ٪: ضرب در ۱۰۰. مثال: ۳/۴ × ۱۰۰ = ۷۵٪. اعشاری → ٪: ضرب در ۱۰۰. مثال: ۰,۶ × ۱۰۰ = ۶۰٪.",
        ],
        ti: [
          "ናይ ሚእቲ ክፋል ሚዛን ቁጽሪ ሚእቲ ዘለዎ ፍርቂ እዩ። ምልክቱ % እዩ። ኣብነት: 35% = 35/100 = 0,35.",
          "ናይ ሚእቲ ክፋላት ኩሉ ዘርዕ ናይ 100 ሚዛን ናይ ቁጽርታት ምምዛዝ ይጥቀሙ። ኣብነት: 75% ምዕሊ ዓወት 100 ካብ 75 ተምሃሮ ዝሓለፉ ማለት እዩ።",
          "ምቅያር: ፍርቂ → %: ብ 100 ዘርፍ. ኣብነት: 3/4 × 100 = 75%. ቁጽሪ ቪርጉላ → %: ብ 100 ዘርፍ. ኣብነት: 0,6 × 100 = 60%.",
        ],
        uk: [
          "Відсоток — дріб зі знаменником 100. Символ %. Приклад: 35% = 35/100 = 0,35.",
          "Відсотки використовують для порівняння на основі 100. Приклад: 75% успішності означає 75 з 100 учнів успішні.",
          "Перетворення: дріб → %: множимо на 100. Приклад: 3/4 × 100 = 75%. Десятковий → %: множимо на 100. Приклад: 0,6 × 100 = 60%.",
        ],
      },
      blocks: [
        { type: "heading", fr: "Introduction aux pourcentages", black: true },
        { type: "plain", fr: "Un **pourcentage** exprime une partie sur cent. Le symbole **%** signifie « pour cent ». On utilise les pourcentages pour comparer des quantités sur une même base de 100." },
        { type: "rule", titleFr: "Définition", itemsFr: [
          "**p%** signifie p parties sur 100",
          "**p%** = p/100 (fraction) = p ÷ 100 (décimal)",
          "Exemple : 35% = 35/100 = 0,35",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Points de repère essentiels" },
        { type: "bullets", labelFr: "Valeurs à retenir", itemsFr: [
          "**0%** → rien du tout (la quantité est nulle)",
          "**50%** → la moitié (la quantité est divisée par 2)",
          "**100%** → la totalité (toute la quantité)",
          "**200%** → le double (deux fois la quantité)",
        ]},
        { type: "plain", fr: "" },
        { type: "heading", fr: "Conversions : pourcentage, fraction, décimal" },
        { type: "table", headersFr: ["Pourcentage", "Fraction", "Décimal"], accentHeader: true,
          rows: [
            ["10%", "1/10", "0,10"],
            ["25%", "1/4", "0,25"],
            ["50%", "1/2", "0,50"],
            ["75%", "3/4", "0,75"],
            ["100%", "1", "1,00"],
          ]
        },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Convertir une fraction en pourcentage" },
        { type: "section", labelFr: "Méthode", itemsFr: [
          "**Étape 1** — Diviser le numérateur par le dénominateur",
          "**Étape 2** — Multiplier le résultat par 100",
        ]},
        { type: "example", fr: "3/4 → 3 ÷ 4 = 0,75 → 0,75 × 100 = 75%" },
        { type: "example", fr: "1/5 → 1 ÷ 5 = 0,20 → 0,20 × 100 = 20%" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Convertir un décimal en pourcentage" },
        { type: "section", labelFr: "Méthode", itemsFr: [
          "Multiplier le nombre décimal par 100",
        ]},
        { type: "example", fr: "0,6 × 100 = 60%   |   0,08 × 100 = 8%   |   1,2 × 100 = 120%" },
        { type: "note", fr: "Un pourcentage peut dépasser 100% ! Par exemple, 120% signifie 1,2 fois la quantité de départ. 75% de réussite signifie 75 élèves sur 100 ont réussi." },
      ],
    },
    exercises: [
      { id: "a6-1-e1", promptFr: "Convertissez 35% en décimal.", type: "short_text", acceptable: ["0,35", "0.35"] },
      { id: "a6-1-e2", promptFr: "Convertissez 3/4 en pourcentage.", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-1-e3", promptFr: "Convertissez 0,08 en pourcentage.", type: "short_text", acceptable: ["8%", "8"] },
      { id: "a6-1-e4", promptFr: "Convertissez 120% en décimal.", type: "short_text", acceptable: ["1,2", "1.2"] },
      { id: "a6-1-e5", promptFr: "Convertissez 1/5 en pourcentage.", type: "short_text", acceptable: ["20%", "20"] },
    ],
  };
