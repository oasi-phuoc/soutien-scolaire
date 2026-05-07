import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_LESSONS: MathSubmoduleLesson[] = [
  {
    submoduleId: "A5-1",
    submoduleCode: "A5.1",
    theory: {
      title: { fr: "Lire et écrire les décimaux", en: "Reading and writing decimals", ar: "قراءة وكتابة الأعداد العشرية", fa: "خواندن و نوشتن اعشار", ti: "ቁጽሪ ቪርጉላ ምንባብ ምጽሓፍ", uk: "Читання і запис десяткових чисел" },
      paragraphs: {
        fr: [
          "Les nombres décimaux contiennent une virgule. Ils servent à représenter des valeurs non entières. Un nombre décimal est composé d'une partie entière (avant la virgule) et d'une partie décimale (après la virgule).",
          "Exemple : 4 321,98 — partie entière : 4 321 (milliers, centaines, dizaines, unités) — partie décimale : 98 (dixièmes, centièmes).",
          "Valeur de position : dans 4 321,98 → le 9 vaut 9 dixièmes (0,9) et le 8 vaut 8 centièmes (0,08).",
          "On peut ajouter des zéros à droite de la virgule sans changer la valeur : 4,2 = 4,20 = 4,200.",
        ],
        en: [
          "Decimal numbers contain a decimal point. They represent non-integer values. A decimal number has an integer part (before the decimal point) and a decimal part (after).",
          "Example: 4 321.98 — integer part: 4 321 (thousands, hundreds, tens, units) — decimal part: 98 (tenths, hundredths).",
          "Place value: in 4 321.98 → the 9 is worth 9 tenths (0.9) and the 8 is worth 8 hundredths (0.08).",
          "Adding zeros to the right of the decimal point does not change the value: 4.2 = 4.20 = 4.200.",
        ],
        ar: [
          "الأعداد العشرية تحتوي على فاصلة. تمثّل قيمًا غير صحيحة. يتكون العدد العشري من جزء صحيح (قبل الفاصلة) وجزء عشري (بعدها).",
          "مثال: 4 321,98 — الجزء الصحيح: 4 321 (آلاف، مئات، عشرات، آحاد) — الجزء العشري: 98 (أعشار، أجزاء من المئة).",
          "قيمة المنزلة: في 4 321,98 → 9 تساوي 9 أعشار (0,9) و 8 تساوي 8 أجزاء من مئة (0,08).",
          "إضافة أصفار يمين الفاصلة لا تغير القيمة: 4,2 = 4,20 = 4,200.",
        ],
        fa: [
          "اعداد اعشاری حاوی ممیز هستند. مقادیر غیرصحیح را نمایش می‌دهند. عدد اعشاری از بخش صحیح (قبل از ممیز) و بخش اعشاری (بعد از آن) تشکیل شده است.",
          "مثال: ۴ ۳۲۱,۹۸ — بخش صحیح: ۴ ۳۲۱ (هزارها، صدها، دهگان‌ها، یکان‌ها) — بخش اعشاری: ۹۸ (دهم، صدم).",
          "ارزش مکانی: در ۴ ۳۲۱,۹۸ → عدد ۹ برابر ۹ دهم (۰,۹) و عدد ۸ برابر ۸ صدم (۰,۰۸) است.",
          "اضافه کردن صفر به راست ممیز مقدار را تغییر نمی‌دهد: ۴,۲ = ۴,۲۰ = ۴,۲۰۰.",
        ],
        ti: [
          "ቁጽሪ ቪርጉላ ቪርጉላ ዘለዎ ቁጽሪ እዩ። ዘይምሉእ ዋጋ ዝገልጽ እዩ። ቁጽሪ ቪርጉላ ምሉእ ክፋል (ቀዲሙ ቪርጉላ) ምስ ቁጽሪ ቪርጉላ ክፋል (ድሕሪ ቪርጉላ) ኣሎ።",
          "ኣብነት: 4 321,98 — ምሉእ ክፋል: 4 321 (ሽሕ, ሚእቲ, ዓሰርተ, ኣሃዱ) — ቁጽሪ ቪርጉላ ክፋል: 98 (ዓሰርተኛ, ሚእቲኛ).",
          "ቦታ ዋጋ: 4 321,98 → 9 9 ዓሰርተኛ (0,9) 8 8 ሚእቲኛ (0,08) ዋጋ ኣለዎ.",
          "ናብ ቀኝ ናይ ቪርጉላ ዜሮ ምወሳኽ ዋጋ ኣይቅይርን: 4,2 = 4,20 = 4,200.",
        ],
        uk: [
          "Десяткові числа містять кому. Вони представляють нецілі значення. Десяткове число складається з цілої частини (перед комою) і десяткової частини (після коми).",
          "Приклад: 4 321,98 — ціла частина: 4 321 (тисячі, сотні, десятки, одиниці) — десяткова: 98 (десяті, соті).",
          "Позиційне значення: у 4 321,98 → 9 коштує 9 десятих (0,9), а 8 — 8 сотих (0,08).",
          "Додавання нулів праворуч від коми не змінює значення: 4,2 = 4,20 = 4,200.",
        ],
      },
    },
    exercises: [
      { id: "a5-1-e1", promptFr: "Dans 3,47, quel est le chiffre des dixièmes ?", type: "number", acceptable: ["4"] },
      { id: "a5-1-e2", promptFr: "Dans 5,82, quel est le chiffre des centièmes ?", type: "number", acceptable: ["2"] },
      { id: "a5-1-e3", promptFr: "4,20 est-il égal à 4,2 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a5-1-e4", promptFr: "Écrivez 3 unités, 5 dixièmes et 7 centièmes sous forme décimale.", type: "short_text", acceptable: ["3,57", "3.57"] },
      { id: "a5-1-e5", promptFr: "Dans 12,345, quel est le chiffre des millièmes ?", type: "number", acceptable: ["5"] },
    ],
  },
  {
    submoduleId: "A5-2",
    submoduleCode: "A5.2",
    theory: {
      title: { fr: "Comparer et ordonner", en: "Comparing and ordering", ar: "المقارنة والترتيب", fa: "مقایسه و مرتب‌سازی", ti: "ምውድዳር ምስ ምስራዕ", uk: "Порівняння та впорядкування" },
      paragraphs: {
        fr: [
          "Pour comparer des nombres décimaux, on utilise les mêmes symboles <, > et =. Commencez par comparer la partie entière.",
          "Exemple : 4,25 > 3,98 car 4 unités est plus grand que 3 unités.",
          "Si les parties entières sont égales, comparez la partie décimale chiffre par chiffre (dixièmes d'abord). Exemple : 4,25 < 4,38 car 2 dixièmes < 3 dixièmes.",
          "On peut ajouter des zéros à droite de la virgule pour faciliter la comparaison : 4,2 = 4,20 ; comparer 4,20 et 4,19 → 20 > 19 → 4,2 > 4,19.",
        ],
        en: [
          "To compare decimals, use <, >, =. Start by comparing the integer part.",
          "Example: 4.25 > 3.98 because 4 > 3.",
          "If integer parts are equal, compare decimal digits from left to right (tenths first). Example: 4.25 < 4.38 because 2 tenths < 3 tenths.",
          "Add zeros on the right to help: 4.2 = 4.20; compare 4.20 and 4.19 → 4.2 > 4.19.",
        ],
        ar: [
          "لمقارنة الأعداد العشرية، نستخدم <، >، =. ابدأ بمقارنة الجزء الصحيح.",
          "مثال: 4,25 > 3,98 لأن 4 > 3.",
          "إذا تساوت الأجزاء الصحيحة، قارن الأجزاء العشرية رقمًا رقمًا (الأعشار أولًا). مثال: 4,25 < 4,38 لأن 2 < 3 أعشارًا.",
          "أضف أصفارًا يمينًا للمساعدة: 4,2 = 4,20؛ قارن 4,20 و4,19 → 4,2 > 4,19.",
        ],
        fa: [
          "برای مقایسه اعداد اعشاری از علائم <، >، = استفاده کنید. با مقایسه بخش صحیح شروع کنید.",
          "مثال: ۴,۲۵ > ۳,۹۸ چون ۴ > ۳.",
          "اگر بخش‌های صحیح برابر باشند، بخش اعشاری را رقم به رقم (از چپ) مقایسه کنید. مثال: ۴,۲۵ < ۴,۳۸ چون ۲ دهم < ۳ دهم.",
          "برای آسان‌تر کردن مقایسه می‌توانید صفر اضافه کنید: ۴,۲ = ۴,۲۰؛ مقایسه ۴,۲۰ و ۴,۱۹ → ۴,۲ > ۴,۱۹.",
        ],
        ti: [
          "ቁጽሪ ቪርጉላ ምውድዳር ንምቅናስ ዝለዓለ <, > ምስ = ምልክታት ምጥቃም ይጥቀም። ካብ ምሉእ ክፋል ጀምር።",
          "ኣብነት: 4,25 > 3,98 ምኽንያቱ 4 > 3.",
          "ምሉእ ክፋላት ማዕረ እንተኾነ ካብ ጸጋም ናብ ቀኝ ቁጽሪ ቪርጉላ ክፋል ወዲዘ ዋጋ ምውድዳር (ዓሰርተኛ ቀዲሙ). ኣብነት: 4,25 < 4,38 ምኽንያቱ 2 ዓሰርተኛ < 3.",
          "ዜሮ ናብ ቀኝ ወሲኽካ ምውድዳር ቀሊል ምግባር ይከኣል: 4,2 = 4,20; 4,20 vs 4,19 → 4,2 > 4,19.",
        ],
        uk: [
          "Для порівняння десяткових чисел використовуємо <, >, =. Починайте з порівняння цілої частини.",
          "Приклад: 4,25 > 3,98, бо 4 > 3.",
          "Якщо цілі частини рівні, порівнюємо десяткові цифри зліва направо (спочатку десяті). Приклад: 4,25 < 4,38, бо 2 десяті < 3 десяті.",
          "Додайте нулі праворуч для зручності: 4,2 = 4,20; порівняйте 4,20 і 4,19 → 4,2 > 4,19.",
        ],
      },
    },
    exercises: [
      { id: "a5-2-e1", promptFr: "Comparez 4,25 et 3,98 avec < ou >.", type: "short_text", acceptable: ["4,25 > 3,98", ">"] },
      { id: "a5-2-e2", promptFr: "Comparez 4,25 et 4,38 avec < ou >.", type: "short_text", acceptable: ["4,25 < 4,38", "<"] },
      { id: "a5-2-e3", promptFr: "Comparez 7,50 et 7,5 avec < ou > ou =.", type: "short_text", acceptable: ["=", "7,50 = 7,5"] },
      { id: "a5-2-e4", promptFr: "Ordonnez du plus petit au plus grand : 3,14 ; 3,1 ; 3,2.", type: "short_text", acceptable: ["3,1 ; 3,14 ; 3,2", "3.1 3.14 3.2"] },
      { id: "a5-2-e5", promptFr: "Comparez 0,09 et 0,1.", type: "short_text", acceptable: ["0,09 < 0,1", "<"] },
    ],
  },
  {
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
  },
  {
    submoduleId: "A5-4",
    submoduleCode: "A5.4",
    theory: {
      title: { fr: "Addition et soustraction de décimaux", en: "Addition and subtraction of decimals", ar: "جمع وطرح الأعداد العشرية", fa: "جمع و تفریق اعشار", ti: "ምደማር ምቅናስ ቁጽሪ ቪርጉላ", uk: "Додавання і віднімання десяткових" },
      paragraphs: {
        fr: [
          "Pour additionner ou soustraire des nombres décimaux en colonnes, on aligne les virgules (et donc les dixièmes, les unités, etc.).",
          "Exemple d'addition : 57,9 + 2,4 → Étape 1 : dixièmes : 9 + 4 = 13 (pose 3, retient 1). Étape 2 : unités + virgule : 1 + 7 + 2 = 10 (pose 0, retient 1). Étape 3 : dizaines : 1 + 5 = 6. Résultat : 60,3.",
          "Exemple de soustraction : on aligne les virgules, on soustrait colonne par colonne. On peut ajouter des zéros si nécessaire (ex. 83,7 − 24,29 → 83,70 − 24,29).",
        ],
        en: [
          "To add or subtract decimals in columns, align the decimal points (and thus the tenths, units, etc.).",
          "Addition example: 57.9 + 2.4 → tenths: 9+4=13 (write 3, carry 1) → units: 1+7+2=10 (write 0, carry 1) → tens: 1+5=6 → result: 60.3.",
          "For subtraction: align decimal points, subtract column by column. Add zeros if needed (e.g. 83.7 − 24.29 → 83.70 − 24.29).",
        ],
        ar: [
          "لجمع أو طرح الأعداد العشرية في أعمدة، نحاذي الفواصل (وبالتالي الأعشار والآحاد…).",
          "مثال جمع: 57,9 + 2,4 → أعشار: 9+4=13 (اكتب 3، احمل 1) → آحاد: 1+7+2=10 (اكتب 0، احمل 1) → عشرات: 1+5=6 → الناتج: 60,3.",
          "للطرح: حاذ الفواصل واطرح عمودًا بعمود. أضف أصفارًا إذا لزم (مثلًا 83,7 − 24,29 → 83,70 − 24,29).",
        ],
        fa: [
          "برای جمع یا تفریق اعداد اعشاری در ستون، ممیزها را تراز کنید (و در نتیجه دهم‌ها، یکان‌ها و...).",
          "مثال جمع: ۵۷,۹ + ۲,۴ → دهم: ۹+۴=۱۳ (بنویس ۳، نقل ۱) → یکان: ۱+۷+۲=۱۰ (بنویس ۰، نقل ۱) → دهگان: ۱+۵=۶ → نتیجه: ۶۰,۳.",
          "برای تفریق: ممیزها را تراز کنید و ستون به ستون تفریق کنید. در صورت نیاز صفر اضافه کنید (مثلاً ۸۳,۷ − ۲۴,۲۹ → ۸۳,۷۰ − ۲۴,۲۹).",
        ],
        ti: [
          "ቁጽሪ ቪርጉላ ኣብ ዓምዲ ምደማር ወይ ምቅናስ ቪርጉላ ምስርዕ (ዓሰርተኛ, ኣሃዱ…) ይሓትት።",
          "ምደማር ኣብነት: 57,9 + 2,4 → ዓሰርተኛ: 9+4=13 (3 ጽሓፍ 1 ሃሊዝ) → ኣሃዱ: 1+7+2=10 (0 ጽሓፍ 1 ሃሊዝ) → ዓሰርተ: 1+5=6 → ውጽኢት: 60,3.",
          "ምቅናስ ዘርፊ: ቪርጉላ ምስርዕ ዓምዲ ብዓምዲ ቀንስ። ዜሮ ምወሳኽ ምስ ደለዮ (ኣብነት 83,7 − 24,29 → 83,70 − 24,29).",
        ],
        uk: [
          "Для додавання або віднімання десяткових у стовпчик вирівнюємо коми (і, відповідно, десяті, одиниці тощо).",
          "Приклад додавання: 57,9 + 2,4 → десяті: 9+4=13 (пишемо 3, переносимо 1) → одиниці: 1+7+2=10 (пишемо 0, переносимо 1) → десятки: 1+5=6 → результат: 60,3.",
          "Для віднімання: вирівнюємо коми, віднімаємо стовпець за стовпцем. Додаємо нулі якщо треба (напр. 83,7 − 24,29 → 83,70 − 24,29).",
        ],
      },
    },
    exercises: [
      { id: "a5-4-e1", promptFr: "Calculez 57,9 + 2,4.", type: "short_text", acceptable: ["60,3", "60.3"] },
      { id: "a5-4-e2", promptFr: "Calculez 83,7 + 24,29.", type: "short_text", acceptable: ["107,99", "107.99"] },
      { id: "a5-4-e3", promptFr: "Calculez 14,6 − 8,35.", type: "short_text", acceptable: ["6,25", "6.25"] },
      { id: "a5-4-e4", promptFr: "Calculez 100 − 34,7.", type: "short_text", acceptable: ["65,3", "65.3"] },
      { id: "a5-4-e5", promptFr: "Calculez 5,09 + 3,8.", type: "short_text", acceptable: ["8,89", "8.89"] },
    ],
  },
  {
    submoduleId: "A5-5",
    submoduleCode: "A5.5",
    theory: {
      title: { fr: "Multiplication de décimaux", en: "Multiplication of decimals", ar: "ضرب الأعداد العشرية", fa: "ضرب اعشار", ti: "ዘርፊ ቁጽሪ ቪርጉላ", uk: "Множення десяткових" },
      paragraphs: {
        fr: [
          "Pour multiplier deux nombres décimaux : 1) Ignorez la virgule et multipliez comme avec des entiers. 2) Comptez le nombre total de chiffres après la virgule dans les deux facteurs. 3) Placez la virgule dans le résultat en comptant ce même nombre de chiffres depuis la droite.",
          "Exemple : 3,14 × 2,5 → Sans virgule : 314 × 25 = 7 850 → Nombre de décimales : 2 (pour 3,14) + 1 (pour 2,5) = 3 → Résultat : 7,850 = 7,85.",
          "Astuce : multiplier par 10 déplace la virgule d'un rang vers la droite. Multiplier par 0,1 déplace d'un rang vers la gauche.",
        ],
        en: [
          "To multiply decimals: 1) Ignore the decimal point and multiply as with integers. 2) Count the total number of decimal digits in both factors. 3) Place the decimal point in the result that many digits from the right.",
          "Example: 3.14 × 2.5 → Without decimal: 314 × 25 = 7 850 → Total decimal digits: 2+1=3 → Result: 7.850 = 7.85.",
          "Tip: multiplying by 10 shifts the decimal one place to the right; by 0.1 shifts it one place to the left.",
        ],
        ar: [
          "لضرب عددين عشريين: 1) أهمل الفاصلة واضرب كما لو كانا صحيحين. 2) احسب مجموع الخانات العشرية في العاملين. 3) ضع الفاصلة في الناتج بعد ذلك العدد من الأرقام من اليمين.",
          "مثال: 3,14 × 2,5 → بدون فاصلة: 314 × 25 = 7 850 → إجمالي الخانات: 2+1=3 → الناتج: 7,850 = 7,85.",
          "نصيحة: الضرب في 10 ينقل الفاصلة منزلة يمينًا؛ الضرب في 0,1 ينقلها يسارًا.",
        ],
        fa: [
          "برای ضرب دو عدد اعشاری: ۱) ممیز را نادیده بگیرید و مثل اعداد صحیح ضرب کنید. ۲) تعداد کل ارقام اعشاری در هر دو عامل را بشمارید. ۳) ممیز را در نتیجه از سمت راست به اندازه همان تعداد ارقام قرار دهید.",
          "مثال: ۳,۱۴ × ۲,۵ → بدون ممیز: ۳۱۴ × ۲۵ = ۷۸۵۰ → کل اعشار: ۲+۱=۳ → نتیجه: ۷,۸۵۰ = ۷,۸۵.",
          "نکته: ضرب در ۱۰ ممیز را یک مکان به راست جابجا می‌کند؛ ضرب در ۰,۱ یک مکان به چپ.",
        ],
        ti: [
          "ክልተ ቁጽሪ ቪርጉላ ምዝርፋፍ: 1) ቪርጉላ ምሕጋ ብምሉኦም ምዝርፋፍ. 2) ናይ ክልቲኦም ካብ ቪርጉላ ዝኾኑ ቁጽሪታት ምቑጻር. 3) ቪርጉላ ካብ ቀኝ ናይ ዉጽኢት ብዝኾነ ቁጽሪ ምቕማጥ.",
          "ኣብነት: 3,14 × 2,5 → ቪርጉላ ዘይብሉ: 314 × 25 = 7850 → ናይ ቪርጉላ: 2+1=3 → ውጽኢት: 7,850 = 7,85.",
          "ሓሳብ: ብ 10 ምዝርፋፍ ቪርጉላ ሓደ ቦታ ናብ ቀኝ ይምቀጣ; ብ 0,1 ናብ ጸጋም.",
        ],
        uk: [
          "Для множення десяткових: 1) Ігноруємо кому і множимо як цілі. 2) Рахуємо загальну кількість десяткових знаків у множниках. 3) Ставимо кому у добутку, відраховуючи стільки цифр від правого краю.",
          "Приклад: 3,14 × 2,5 → без коми: 314 × 25 = 7 850 → десяткових знаків: 2+1=3 → результат: 7,850 = 7,85.",
          "Порада: множення на 10 переміщує кому на один знак вправо; на 0,1 — вліво.",
        ],
      },
    },
    exercises: [
      { id: "a5-5-e1", promptFr: "Calculez 3,14 × 2,5.", type: "short_text", acceptable: ["7,85", "7.85"] },
      { id: "a5-5-e2", promptFr: "Calculez 4,2 × 3.", type: "short_text", acceptable: ["12,6", "12.6"] },
      { id: "a5-5-e3", promptFr: "Calculez 0,5 × 0,5.", type: "short_text", acceptable: ["0,25", "0.25"] },
      { id: "a5-5-e4", promptFr: "Calculez 12,5 × 10.", type: "number", acceptable: ["125"] },
      { id: "a5-5-e5", promptFr: "Calculez 6,7 × 4.", type: "short_text", acceptable: ["26,8", "26.8"] },
    ],
  },
  {
    submoduleId: "A5-6",
    submoduleCode: "A5.6",
    theory: {
      title: { fr: "Division de décimaux", en: "Division of decimals", ar: "قسمة الأعداد العشرية", fa: "تقسیم اعشار", ti: "ክፍፍል ቁጽሪ ቪርጉላ", uk: "Ділення десяткових" },
      paragraphs: {
        fr: [
          "Pour diviser par un nombre décimal, on transforme la division en division par un entier. On multiplie les deux nombres (dividende et diviseur) par la même puissance de 10 pour éliminer la virgule du diviseur.",
          "Exemple : 7,85 ÷ 2,5 → multiplier par 10 : 78,5 ÷ 25. Puis diviser en colonnes : 78,5 ÷ 25 = 3,14.",
          "Pour diviser un décimal par un entier : la virgule du quotient se trouve à la même position que dans le dividende. Exemple : 60,3 ÷ 3 = 20,1.",
        ],
        en: [
          "To divide by a decimal, transform into division by an integer. Multiply both numbers by the same power of 10 to remove the decimal from the divisor.",
          "Example: 7.85 ÷ 2.5 → multiply by 10: 78.5 ÷ 25. Then divide: 78.5 ÷ 25 = 3.14.",
          "To divide a decimal by an integer: the decimal point in the quotient is in the same position as in the dividend. Example: 60.3 ÷ 3 = 20.1.",
        ],
        ar: [
          "لقسمة على عدد عشري، نحوّل القسمة إلى قسمة على عدد صحيح. نضرب العددين (المقسوم والمقسوم عليه) بنفس قوة العشرة لإزالة الفاصلة من المقسوم عليه.",
          "مثال: 7,85 ÷ 2,5 → نضرب في 10: 78,5 ÷ 25. ثم القسمة: 78,5 ÷ 25 = 3,14.",
          "لقسمة عدد عشري على عدد صحيح: الفاصلة في الخارج في نفس موضعها في المقسوم. مثال: 60,3 ÷ 3 = 20,1.",
        ],
        fa: [
          "برای تقسیم بر یک عدد اعشاری، تقسیم را به تقسیم بر عدد صحیح تبدیل کنید. هر دو عدد را با توان یکسانی از ۱۰ ضرب کنید تا ممیز از مقسوم‌علیه حذف شود.",
          "مثال: ۷,۸۵ ÷ ۲,۵ → ضرب در ۱۰: ۷۸,۵ ÷ ۲۵. سپس تقسیم: ۷۸,۵ ÷ ۲۵ = ۳,۱۴.",
          "برای تقسیم عدد اعشاری بر عدد صحیح: ممیز در خارج‌قسمت در همان موقعیت مقسوم قرار می‌گیرد. مثال: ۶۰,۳ ÷ ۳ = ۲۰,۱.",
        ],
        ti: [
          "ብቁጽሪ ቪርጉላ ምካፋፍ ናብ ምሉእ ቁጽሪ ክፍፍል ምቅያር ይሓትት። ክልቲኦም ቁጽርታት ብሓደ ናይ ዓሰርተ ሓይሊ ምዝርፋፍ ቪርጉላ ካብ ካፋሊ ምጥፋእ።",
          "ኣብነት: 7,85 ÷ 2,5 → ብ 10 ዘርፍ: 78,5 ÷ 25. ድሕሪ ካፍሎ: 78,5 ÷ 25 = 3,14.",
          "ቁጽሪ ቪርጉላ ብምሉእ ቁጽሪ ምካፋፍ: ናይ ዉጽኢት ቪርጉላ ናይ ካፋሊ ቪርጉላ ቦታ ብምሓዝ። ኣብነት: 60,3 ÷ 3 = 20,1.",
        ],
        uk: [
          "Для ділення на десятковий дріб перетворюємо на ділення на ціле. Множимо обидва числа на однаковий степінь 10, щоб прибрати кому у дільника.",
          "Приклад: 7,85 ÷ 2,5 → множимо на 10: 78,5 ÷ 25 = 3,14.",
          "Ділення десяткового числа на ціле: кома в частці на тій же позиції, що й у діленому. Приклад: 60,3 ÷ 3 = 20,1.",
        ],
      },
    },
    exercises: [
      { id: "a5-6-e1", promptFr: "Calculez 60,3 ÷ 3.", type: "short_text", acceptable: ["20,1", "20.1"] },
      { id: "a5-6-e2", promptFr: "Calculez 7,85 ÷ 2,5.", type: "short_text", acceptable: ["3,14", "3.14"] },
      { id: "a5-6-e3", promptFr: "Calculez 14,4 ÷ 4.", type: "short_text", acceptable: ["3,6", "3.6"] },
      { id: "a5-6-e4", promptFr: "Calculez 0,96 ÷ 0,8.", type: "short_text", acceptable: ["1,2", "1.2"] },
      { id: "a5-6-e5", promptFr: "Calculez 125 ÷ 0,5.", type: "number", acceptable: ["250"] },
    ],
  },
];
