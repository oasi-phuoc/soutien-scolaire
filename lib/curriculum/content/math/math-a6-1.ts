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
    },
    exercises: [
      { id: "a6-1-e1", promptFr: "Convertissez 35% en décimal.", type: "short_text", acceptable: ["0,35", "0.35"] },
      { id: "a6-1-e2", promptFr: "Convertissez 3/4 en pourcentage.", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-1-e3", promptFr: "Convertissez 0,08 en pourcentage.", type: "short_text", acceptable: ["8%", "8"] },
      { id: "a6-1-e4", promptFr: "Convertissez 120% en décimal.", type: "short_text", acceptable: ["1,2", "1.2"] },
      { id: "a6-1-e5", promptFr: "Convertissez 1/5 en pourcentage.", type: "short_text", acceptable: ["20%", "20"] },
    ],
  };
