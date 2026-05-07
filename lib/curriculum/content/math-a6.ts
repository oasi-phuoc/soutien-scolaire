import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_LESSONS: MathSubmoduleLesson[] = [
  {
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
  },
  {
    submoduleId: "A6-2",
    submoduleCode: "A6.2",
    theory: {
      title: { fr: "Pourcentage d'un nombre", en: "Percentage of a number", ar: "نسبة مئوية من عدد", fa: "درصدی از یک عدد", ti: "ቁጽሪ ናይ ሚእቲ ክፋል", uk: "Відсоток від числа" },
      paragraphs: {
        fr: [
          "Pour calculer p% d'un nombre N, on multiplie N par p/100 (ou par le décimal équivalent).",
          "Formule : p% de N = N × p/100 = N × (p ÷ 100).",
          "Exemples : 20% de 150 = 150 × 20/100 = 150 × 0,2 = 30. 15% de 80 = 80 × 0,15 = 12.",
        ],
        en: [
          "To calculate p% of a number N, multiply N by p/100 (or by the decimal equivalent).",
          "Formula: p% of N = N × p/100 = N × (p ÷ 100).",
          "Examples: 20% of 150 = 150 × 0.2 = 30. 15% of 80 = 80 × 0.15 = 12.",
        ],
        ar: [
          "لحساب ص% من عدد ن، نضرب ن في ص/100 (أو في المكافئ العشري).",
          "الصيغة: ص% من ن = ن × ص/100.",
          "أمثلة: 20% من 150 = 150 × 0,2 = 30. 15% من 80 = 80 × 0,15 = 12.",
        ],
        fa: [
          "برای محاسبه p٪ از عدد N، عدد N را در p/100 ضرب کنید.",
          "فرمول: p٪ از N = N × p/100.",
          "مثال‌ها: ۲۰٪ از ۱۵۰ = ۱۵۰ × ۰,۲ = ۳۰. ۱۵٪ از ۸۰ = ۸۰ × ۰,۱۵ = ۱۲.",
        ],
        ti: [
          "ናይ ሓደ ቁጽሪ N p% ምሕሳብ N ብ p/100 ምዝርፋፍ ማለት እዩ።",
          "ቅጥዒ: p% ናይ N = N × p/100.",
          "ኣብነት: 20% ናይ 150 = 150 × 0,2 = 30. 15% ናይ 80 = 80 × 0,15 = 12.",
        ],
        uk: [
          "Щоб обчислити p% від числа N, множимо N на p/100.",
          "Формула: p% від N = N × p/100.",
          "Приклади: 20% від 150 = 150 × 0,2 = 30. 15% від 80 = 80 × 0,15 = 12.",
        ],
      },
    },
    exercises: [
      { id: "a6-2-e1", promptFr: "Calculez 20% de 150.", type: "number", acceptable: ["30"] },
      { id: "a6-2-e2", promptFr: "Calculez 15% de 80.", type: "number", acceptable: ["12"] },
      { id: "a6-2-e3", promptFr: "Calculez 25% de 200.", type: "number", acceptable: ["50"] },
      { id: "a6-2-e4", promptFr: "Calculez 10% de 340.", type: "number", acceptable: ["34"] },
      { id: "a6-2-e5", promptFr: "Calculez 5% de 60.", type: "number", acceptable: ["3"] },
    ],
  },
  {
    submoduleId: "A6-3",
    submoduleCode: "A6.3",
    theory: {
      title: { fr: "Trouver le pourcentage", en: "Finding the percentage", ar: "إيجاد النسبة المئوية", fa: "یافتن درصد", ti: "ናይ ሚእቲ ክፋል ምርካብ", uk: "Знаходження відсотка" },
      paragraphs: {
        fr: [
          "Pour trouver quel pourcentage représente une partie par rapport à un total, on divise la partie par le total et on multiplie par 100.",
          "Formule : % = (partie / total) × 100.",
          "Exemple : 18 élèves sur 24 ont réussi → % de réussite = (18/24) × 100 = 0,75 × 100 = 75%.",
        ],
        en: [
          "To find what percentage a part represents of a total, divide the part by the total and multiply by 100.",
          "Formula: % = (part / total) × 100.",
          "Example: 18 out of 24 students passed → % passing = (18/24) × 100 = 75%.",
        ],
        ar: [
          "لإيجاد النسبة المئوية لجزء من إجمالي، نقسم الجزء على الإجمالي ونضرب في 100.",
          "الصيغة: % = (الجزء / الإجمالي) × 100.",
          "مثال: 18 طالبًا من 24 نجحوا → % النجاح = (18/24) × 100 = 75%.",
        ],
        fa: [
          "برای یافتن درصد یک بخش نسبت به کل، بخش را بر کل تقسیم و در ۱۰۰ ضرب کنید.",
          "فرمول: ٪ = (بخش / کل) × ۱۰۰.",
          "مثال: ۱۸ از ۲۴ دانش‌آموز قبول شدند → ٪ قبولی = (۱۸/۲۴) × ۱۰۰ = ۷۵٪.",
        ],
        ti: [
          "ናይ ሓደ ምሉእ ክፋል ናይ ሚእቲ ክፋል ምርካብ ክፋሉ ብምሉኡ ኣካፊልካ ብ 100 ምዝርፋፍ ማለት እዩ።",
          "ቅጥዒ: % = (ክፋሉ / ምሉኡ) × 100.",
          "ኣብነት: 24 ካብ 18 ተምሃሮ ሓሊፎም → % ናይ ምሕላፍ = (18/24) × 100 = 75%.",
        ],
        uk: [
          "Щоб знайти, яким відсотком є частина від цілого, ділимо частину на ціле і множимо на 100.",
          "Формула: % = (частина / ціле) × 100.",
          "Приклад: 18 з 24 учнів склали → % = (18/24) × 100 = 75%.",
        ],
      },
    },
    exercises: [
      { id: "a6-3-e1", promptFr: "18 élèves sur 24 ont réussi. Quel est le pourcentage de réussite ?", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-3-e2", promptFr: "45 sur 60. Quel pourcentage ?", type: "short_text", acceptable: ["75%", "75"] },
      { id: "a6-3-e3", promptFr: "30 sur 120. Quel pourcentage ?", type: "short_text", acceptable: ["25%", "25"] },
      { id: "a6-3-e4", promptFr: "7 sur 20. Quel pourcentage ?", type: "short_text", acceptable: ["35%", "35"] },
      { id: "a6-3-e5", promptFr: "3 sur 4. Quel pourcentage ?", type: "short_text", acceptable: ["75%", "75"] },
    ],
  },
  {
    submoduleId: "A6-4",
    submoduleCode: "A6.4",
    theory: {
      title: { fr: "Augmentation / réduction en %", en: "Increase / decrease in %", ar: "الزيادة / التخفيض بنسبة %", fa: "افزایش / کاهش درصدی", ti: "ምብዛሕ / ምጉዳል ናይ %", uk: "Збільшення / зменшення на %" },
      paragraphs: {
        fr: [
          "Augmenter de p% : multiplier par (1 + p/100). Exemple : augmenter 200 de 15% → 200 × 1,15 = 230.",
          "Diminuer de p% : multiplier par (1 − p/100). Exemple : diminuer 200 de 20% → 200 × 0,80 = 160.",
          "Coefficient multiplicateur : 1,15 correspond à une augmentation de 15% ; 0,80 à une réduction de 20%.",
        ],
        en: [
          "Increase by p%: multiply by (1 + p/100). Example: increase 200 by 15% → 200 × 1.15 = 230.",
          "Decrease by p%: multiply by (1 − p/100). Example: decrease 200 by 20% → 200 × 0.80 = 160.",
          "Multiplier: 1.15 corresponds to a 15% increase; 0.80 to a 20% decrease.",
        ],
        ar: [
          "الزيادة بنسبة ص%: اضرب في (1 + ص/100). مثال: زيادة 200 بنسبة 15% → 200 × 1,15 = 230.",
          "التخفيض بنسبة ص%: اضرب في (1 − ص/100). مثال: تخفيض 200 بنسبة 20% → 200 × 0,80 = 160.",
          "معامل الضرب: 1,15 يوافق زيادة 15%؛ 0,80 يوافق تخفيضًا 20%.",
        ],
        fa: [
          "افزایش p٪: ضرب در (۱ + p/100). مثال: افزایش ۲۰۰ به مقدار ۱۵٪ → ۲۰۰ × ۱,۱۵ = ۲۳۰.",
          "کاهش p٪: ضرب در (۱ − p/100). مثال: کاهش ۲۰۰ به مقدار ۲۰٪ → ۲۰۰ × ۰,۸۰ = ۱۶۰.",
          "ضریب: ۱,۱۵ مربوط به افزایش ۱۵٪ است؛ ۰,۸۰ مربوط به کاهش ۲۰٪.",
        ],
        ti: [
          "ብ p% ምብዛሕ: ብ (1 + p/100) ዘርፍ. ኣብነት: 200 ብ 15% ምብዛሕ → 200 × 1,15 = 230.",
          "ብ p% ምጉዳል: ብ (1 − p/100) ዘርፍ. ኣብነት: 200 ብ 20% ምጉዳል → 200 × 0,80 = 160.",
          "ምዝርፋፍ ዘርፊ: 1,15 15% ምብዛሕ ዘርዕ; 0,80 20% ምጉዳል ዘርዕ.",
        ],
        uk: [
          "Збільшення на p%: множимо на (1 + p/100). Приклад: збільшити 200 на 15% → 200 × 1,15 = 230.",
          "Зменшення на p%: множимо на (1 − p/100). Приклад: зменшити 200 на 20% → 200 × 0,80 = 160.",
          "Коефіцієнт: 1,15 відповідає збільшенню на 15%; 0,80 — зменшенню на 20%.",
        ],
      },
    },
    exercises: [
      { id: "a6-4-e1", promptFr: "Augmentez 200 de 15%.", type: "number", acceptable: ["230"] },
      { id: "a6-4-e2", promptFr: "Diminuez 200 de 20%.", type: "number", acceptable: ["160"] },
      { id: "a6-4-e3", promptFr: "Un article coûte 80 CHF. Réduction de 25%. Nouveau prix ?", type: "number", acceptable: ["60"] },
      { id: "a6-4-e4", promptFr: "Salaire de 3 200 CHF augmenté de 5%. Nouveau salaire ?", type: "number", acceptable: ["3360"] },
      { id: "a6-4-e5", promptFr: "Prix de 150 CHF avec une réduction de 10%. Prix final ?", type: "number", acceptable: ["135"] },
    ],
  },
  {
    submoduleId: "A6-5",
    submoduleCode: "A6.5",
    theory: {
      title: { fr: "Tableau de proportionnalité", en: "Proportionality table", ar: "جدول التناسب", fa: "جدول تناسب", ti: "ሰንጠረዥ ናይ ምቅዳድ", uk: "Таблиця пропорційності" },
      paragraphs: {
        fr: [
          "Deux grandeurs sont proportionnelles si leur rapport est constant. Dans un tableau de proportionnalité, on peut passer d'une ligne à l'autre en multipliant ou divisant par le même nombre (coefficient de proportionnalité).",
          "Exemple : si 3 stylos coûtent 6 CHF, alors 1 stylo coûte 2 CHF (coefficient = 2), et 7 stylos coûtent 14 CHF.",
          "Pour vérifier la proportionnalité : les produits en croix doivent être égaux. Si a/b = c/d, alors a × d = b × c.",
        ],
        en: [
          "Two quantities are proportional if their ratio is constant. In a proportionality table, you can move from one row to another by multiplying or dividing by the same number.",
          "Example: if 3 pens cost 6 CHF, then 1 pen costs 2 CHF (coefficient = 2), and 7 pens cost 14 CHF.",
          "To verify proportionality: cross products must be equal. If a/b = c/d, then a × d = b × c.",
        ],
        ar: [
          "كميتان تتناسبان إذا كانت نسبتهما ثابتة. في جدول التناسب، يمكن الانتقال من سطر لآخر بضرب أو قسمة العدد نفسه.",
          "مثال: إذا كانت 3 أقلام تكلف 6 فرنك، فقلم واحد يكلف 2 فرنك (المعامل = 2)، و7 أقلام تكلف 14 فرنكًا.",
          "للتحقق من التناسب: الضرب الأفقي يجب أن يكون متساويًا. إذا كان a/b = c/d، فـ a × d = b × c.",
        ],
        fa: [
          "دو کمیت متناسبند اگر نسبتشان ثابت باشد. در جدول تناسب می‌توان از یک سطر به سطر دیگر با ضرب یا تقسیم یک عدد ثابت رفت.",
          "مثال: اگر ۳ قلم ۶ فرانک باشد، یک قلم ۲ فرانک است (ضریب = ۲)، و ۷ قلم ۱۴ فرانک.",
          "برای بررسی تناسب: حاصل‌ضرب‌های ضربدری باید برابر باشند. اگر a/b = c/d، پس a × d = b × c.",
        ],
        ti: [
          "ክልተ ዓቐናት ምቅዳድ ናይ ቈጸታኦም ዝተጸበየ ምስ ዝኾነ ምቅዳዳዊ ይብሃሉ። ናይ ምቅዳድ ሰንጠረዥ ሓደ ሰሪ ካብ ካሊኡ ብሓደ ዘርፊ ምስ ምካፋፍ ምቅዳዳዊ ኮይኑ ይቕጽል።",
          "ኣብነት: 3 ቃሊም 6 CHF ዋጋ ዘለዎ እንተኾነ 1 ቃሊም 2 CHF (ዘርፊ = 2) 7 ቃሊም ድማ 14 CHF።",
          "ምቅዳድ ምርጋጸ: ናይ ሳጻሊ ዘርፊ ማዕረ ኣብ ምምጻኡ። a/b = c/d ምስ ዝኾነ a × d = b × c.",
        ],
        uk: [
          "Дві величини пропорційні, якщо їх відношення постійне. У таблиці пропорційності від одного рядка до іншого переходять множенням або діленням на одне й те саме число.",
          "Приклад: якщо 3 ручки коштують 6 CHF, то 1 ручка — 2 CHF (коефіцієнт = 2), а 7 ручок — 14 CHF.",
          "Перевірка пропорційності: добутки навхрест рівні. Якщо a/b = c/d, то a × d = b × c.",
        ],
      },
    },
    exercises: [
      { id: "a6-5-e1", promptFr: "3 stylos coûtent 6 CHF. Combien coûtent 7 stylos ?", type: "number", acceptable: ["14"] },
      { id: "a6-5-e2", promptFr: "Quel est le coefficient de proportionnalité si 5 m de tissu coûtent 20 CHF ?", type: "number", acceptable: ["4"] },
      { id: "a6-5-e3", promptFr: "Si 4 kg coûtent 12 CHF, combien coûtent 9 kg ?", type: "number", acceptable: ["27"] },
      { id: "a6-5-e4", promptFr: "Est-ce proportionnel : 2/6 = 3/9 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a6-5-e5", promptFr: "Un robinet remplit 3 litres en 5 minutes. Combien de litres en 20 minutes ?", type: "number", acceptable: ["12"] },
    ],
  },
  {
    submoduleId: "A6-6",
    submoduleCode: "A6.6",
    theory: {
      title: { fr: "Règle de trois", en: "Rule of three", ar: "قاعدة الثلاثة", fa: "قانون سه", ti: "ሕጊ ሰለስተ", uk: "Правило трьох" },
      paragraphs: {
        fr: [
          "La règle de trois (ou produit en croix) permet de trouver une valeur inconnue dans une proportion. Si a/b = c/x, alors x = (b × c) / a.",
          "Étapes : 1) Identifiez les 3 valeurs connues et la valeur x inconnue. 2) Écrivez la proportion. 3) Multipliez en croix. 4) Divisez par le nombre restant.",
          "Exemple : Si 2 pommes coûtent 4 CHF, combien coûtent 6 pommes ? → 2/4 = 6/x → x = (4 × 6) / 2 = 24 / 2 = 12 CHF.",
        ],
        en: [
          "The rule of three (cross multiplication) finds an unknown value in a proportion. If a/b = c/x, then x = (b × c) / a.",
          "Steps: 1) Identify the 3 known values and unknown x. 2) Write the proportion. 3) Cross-multiply. 4) Divide by the remaining number.",
          "Example: 2 apples cost 4 CHF, how much for 6? → x = (4 × 6) / 2 = 12 CHF.",
        ],
        ar: [
          "قاعدة الثلاثة (الضرب المتقاطع) تجد قيمة مجهولة في تناسب. إذا a/b = c/x فـ x = (b × c) / a.",
          "الخطوات: 1) حدّد القيم الثلاث المعروفة والمجهول x. 2) اكتب التناسب. 3) اضرب تقاطعيًا. 4) اقسم على العدد المتبقي.",
          "مثال: 2 تفاحات بـ 4 فرنك، كم تكلف 6؟ → x = (4 × 6) / 2 = 12 فرنك.",
        ],
        fa: [
          "قانون سه (ضربدر) مقدار مجهول در یک تناسب را می‌یابد. اگر a/b = c/x پس x = (b × c) / a.",
          "مراحل: ۱) سه مقدار معلوم و مجهول x را شناسایی کنید. ۲) تناسب را بنویسید. ۳) ضربدر بزنید. ۴) بر عدد باقیمانده تقسیم کنید.",
          "مثال: ۲ سیب ۴ فرانک، ۶ سیب چند؟ → x = (۴ × ۶) / ۲ = ۱۲ فرانک.",
        ],
        ti: [
          "ሕጊ ሰለስተ (ናይ ሳጻሊ ዘርፊ) ናይ ዘይፍለጥ ዋጋ ምቅዳድ ምርካብ ዘፍቅድ ሕጊ እዩ። a/b = c/x ምስ ዝኾነ x = (b × c) / a.",
          "ስጉምቲ: 1) ሰለስተ ዝፍለጡ ዋጋ ምስ x ዘይፍለጥ ዋጋ ርኸቦ. 2) ምቅዳድ ጽሓፍ. 3) ናይ ሳጻሊ ዘርፍ. 4) ዝተረፈ ቁጽሪ ብምካፋፍ.",
          "ኣብነት: 2 ፖም 4 CHF ዋጋ ዘለዎ 6 ፖም ክንደይ? → x = (4 × 6) / 2 = 12 CHF.",
        ],
        uk: [
          "Правило трьох (перехресне множення) знаходить невідоме значення в пропорції. Якщо a/b = c/x, то x = (b × c) / a.",
          "Кроки: 1) Визначте три відомих і невідоме x. 2) Запишіть пропорцію. 3) Перехресно помножте. 4) Поділіть на число, що залишилось.",
          "Приклад: 2 яблука коштують 4 CHF, 6 яблук — скільки? → x = (4 × 6) / 2 = 12 CHF.",
        ],
      },
    },
    exercises: [
      { id: "a6-6-e1", promptFr: "2 pommes coûtent 4 CHF. Combien coûtent 6 pommes ?", type: "number", acceptable: ["12"] },
      { id: "a6-6-e2", promptFr: "5 livres pèsent 2 kg. Combien pèsent 15 livres ?", type: "number", acceptable: ["6"] },
      { id: "a6-6-e3", promptFr: "Un train roule 150 km en 2h. En 5h, quelle distance ?", type: "number", acceptable: ["375"] },
      { id: "a6-6-e4", promptFr: "3 chemises coûtent 45 CHF. Combien pour 7 chemises ?", type: "number", acceptable: ["105"] },
      { id: "a6-6-e5", promptFr: "4 ouvriers font un travail en 6 jours. Combien de jours pour 8 ouvriers ?", type: "number", acceptable: ["3"] },
    ],
  },
  {
    submoduleId: "A6-7",
    submoduleCode: "A6.7",
    theory: {
      title: { fr: "Échelles", en: "Scales", ar: "المقاييس", fa: "مقیاس‌ها", ti: "ሜዛን", uk: "Масштаби" },
      paragraphs: {
        fr: [
          "Une échelle est un rapport entre la dimension sur le plan (ou la carte) et la dimension réelle. Échelle 1:1000 signifie que 1 cm sur le plan représente 1000 cm = 10 m en réalité.",
          "Distance réelle = distance sur le plan × dénominateur de l'échelle.",
          "Distance sur le plan = distance réelle / dénominateur de l'échelle.",
          "Exemple : sur un plan à l'échelle 1:500, un couloir mesure 3,4 cm. Distance réelle : 3,4 × 500 = 1 700 cm = 17 m.",
        ],
        en: [
          "A scale is a ratio between the dimension on the plan and the real dimension. Scale 1:1000 means 1 cm on the plan represents 1000 cm = 10 m in reality.",
          "Real distance = map distance × scale denominator.",
          "Map distance = real distance ÷ scale denominator.",
          "Example: on a 1:500 scale plan, a corridor is 3.4 cm. Real distance: 3.4 × 500 = 1 700 cm = 17 m.",
        ],
        ar: [
          "المقياس هو نسبة بين البُعد على الخريطة والبُعد الحقيقي. مقياس 1:1000 يعني أن 1 سم على الخريطة يمثل 1000 سم = 10 م في الواقع.",
          "المسافة الحقيقية = المسافة على الخريطة × مقام المقياس.",
          "المسافة على الخريطة = المسافة الحقيقية ÷ مقام المقياس.",
          "مثال: على مخطط بمقياس 1:500، يبلغ ممر 3,4 سم. المسافة الحقيقية: 3,4 × 500 = 1 700 سم = 17 م.",
        ],
        fa: [
          "مقیاس نسبتی است بین اندازه روی نقشه و اندازه واقعی. مقیاس ۱:۱۰۰۰ یعنی ۱ سانتیمتر روی نقشه نشان‌دهنده ۱۰۰۰ سانتیمتر = ۱۰ متر در واقعیت است.",
          "فاصله واقعی = فاصله روی نقشه × مخرج مقیاس.",
          "فاصله روی نقشه = فاصله واقعی ÷ مخرج مقیاس.",
          "مثال: در نقشه‌ای با مقیاس ۱:۵۰۰، یک راهرو ۳,۴ سانتیمتر است. فاصله واقعی: ۳,۴ × ۵۰۰ = ۱۷۰۰ سانتیمتر = ۱۷ متر.",
        ],
        ti: [
          "ሜዛን ናይ ፕላን ቁጽሪ ምስ ናይ ሓቂ ቁጽሪ ጥምርናቶም እዩ። ሜዛን 1:1000 1 ሳ.ሜ. ናይ ፕላን 1000 ሳ.ሜ. = 10 ሜ. ሓቂ ዘርዕ ማለት እዩ።",
          "ሓቂ ምርቀት = ፕላን ምርቀት × ናይ ሜዛን ሚዛን ቁጽሪ.",
          "ፕላን ምርቀት = ሓቂ ምርቀት ÷ ናይ ሜዛን ሚዛን ቁጽሪ.",
          "ኣብነት: ፕላን ናይ 1:500 ሜዛን ቆፎ 3,4 ሳ.ሜ. ዘለዎ ሓቂ ምርቀት: 3,4 × 500 = 1 700 ሳ.ሜ. = 17 ሜ.",
        ],
        uk: [
          "Масштаб — це відношення розміру на плані до реального розміру. Масштаб 1:1000 означає, що 1 см на плані відповідає 1000 см = 10 м у реальності.",
          "Реальна відстань = відстань на плані × знаменник масштабу.",
          "Відстань на плані = реальна відстань ÷ знаменник масштабу.",
          "Приклад: на плані 1:500 коридор 3,4 см. Реальна відстань: 3,4 × 500 = 1 700 см = 17 м.",
        ],
      },
    },
    exercises: [
      { id: "a6-7-e1", promptFr: "Échelle 1:500. Sur le plan : 3,4 cm. Distance réelle en m ?", type: "number", acceptable: ["17"] },
      { id: "a6-7-e2", promptFr: "Échelle 1:1000. Sur le plan : 5 cm. Distance réelle en m ?", type: "number", acceptable: ["50"] },
      { id: "a6-7-e3", promptFr: "Échelle 1:100. Distance réelle : 8 m = 800 cm. Distance sur le plan en cm ?", type: "number", acceptable: ["8"] },
      { id: "a6-7-e4", promptFr: "Échelle 1:25 000. Sur la carte : 4 cm. Distance réelle en km ?", type: "number", acceptable: ["1"] },
      { id: "a6-7-e5", promptFr: "Quelle est l'unité d'échelle la plus agrandie : 1:10 ou 1:1000 ?", type: "short_text", acceptable: ["1:10"] },
    ],
  },
];
