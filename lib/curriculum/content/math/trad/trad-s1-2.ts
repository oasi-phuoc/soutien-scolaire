import type { SubmoduleTrad } from "./trad-types";

export const TRAD_S1_2: SubmoduleTrad = {
  submoduleId: "S1-2",
  title: {
    fr: "Moyenne",
    en: "Mean",
    ar: "المتوسط الحسابي",
    fa: "میانگین",
    ti: "ማእከላይ",
    uk: "Середнє значення",
  },
  paragraphs: {
    fr: [
          "La moyenne (ou moyenne arithmétique) est la valeur centrale d'une série de données. Elle se calcule en additionnant toutes les valeurs et en divisant par le nombre de valeurs.",
          "Formule : moyenne = (somme de toutes les valeurs) / (nombre de valeurs) = Σxᵢ / n.",
          "Exemple : notes 10, 12, 14, 16, 18 → somme = 70 → moyenne = 70 / 5 = 14.",
          "Moyenne pondérée : si chaque valeur a un poids (effectif), on multiplie chaque valeur par son poids, on additionne, puis on divise par la somme des poids. Formule : x̄ = Σ(xᵢ × nᵢ) / Σnᵢ.",
          "Attention : la moyenne est sensible aux valeurs extrêmes (très grandes ou très petites). Une seule valeur aberrante peut la déplacer considérablement.",
        ],
    en: [
          "The mean (or arithmetic mean) is the central value of a data set. It is calculated by adding all values and dividing by the number of values.",
          "Formula: mean = (sum of all values) / (number of values) = Σxᵢ / n.",
          "Example: scores 10, 12, 14, 16, 18 → sum = 70 → mean = 70 / 5 = 14.",
          "Weighted mean: if each value has a weight (frequency), multiply each value by its weight, sum them, then divide by the total weight. Formula: x̄ = Σ(xᵢ × nᵢ) / Σnᵢ.",
          "Note: the mean is sensitive to extreme values. A single outlier can shift it considerably.",
        ],
    ar: [
          "المتوسط الحسابي هو القيمة المركزية لمجموعة بيانات. يُحسَب بجمع جميع القيم وقسمتها على عددها.",
          "الصيغة: المتوسط = مجموع القيم / عددها = Σxᵢ / n.",
          "مثال: الدرجات 10، 12، 14، 16، 18 → المجموع = 70 → المتوسط = 14.",
          "المتوسط الموزون: إذا كان لكل قيمة وزن (تكرار)، اضرب كل قيمة في وزنها، ثم قسِّم على مجموع الأوزان.",
          "تنبيه: المتوسط حساس للقيم المتطرفة. قيمة شاذة واحدة قد تغيره كثيرًا.",
        ],
    fa: [
          "میانگین (حسابی) مقدار مرکزی یک مجموعه داده است. با جمع همه مقادیر و تقسیم بر تعداد آن‌ها محاسبه می‌شود.",
          "فرمول: میانگین = مجموع مقادیر / تعداد = Σxᵢ / n.",
          "مثال: نمرات ۱۰، ۱۲، ۱۴، ۱۶، ۱۸ → مجموع = ۷۰ → میانگین = ۱۴.",
          "میانگین وزنی: اگر هر مقدار وزنی (فراوانی) داشته باشد، هر مقدار را در وزنش ضرب کن، جمع کن، سپس بر مجموع وزن‌ها تقسیم کن.",
          "توجه: میانگین به مقادیر افراطی حساس است. یک مقدار پرت می‌تواند آن را زیاد تغییر دهد.",
        ],
    ti: [
          "ማእከላይ (ወይ ሒሳባዊ ማእከላይ) ናይ ዳታ ጉጅለ ማእከላዊ ክብሪ እዩ። ብምድማር ዘለው ክብርታትን ብዓዲ ምምቓልን ይሕሰብ።",
          "ቅጥዒ: ማእከላይ = ድምር ክብርታት / ዓዲ = Σxᵢ / n.",
          "ኣብነት: 10፣ 12፣ 14፣ 16፣ 18 → ድምር = 70 → ማእከላይ = 14.",
          "ዝካዓለ ማእከላይ: ነፍሲ ወከፍ ክብሪ ዓቐን (ድርጊት) ምስ ዝህሉ፣ ነፍሲ ወከፍ ክብሪ ብዓቐኑ ኣባዝሕ፣ ድምርዎ፣ ብጠቅላላ ዓቐናት ኣካፈሎ።",
          "ምልከታ: ማእከላይ ናብ ጽንፈ ዝኾኑ ክብርታት ስሱዕ እዩ። ሓደ ዝወጸ ክብሪ ኣዝዩ ዘዛውሮ ይኽእል።",
        ],
    uk: [
          "Середнє значення (або середнє арифметичне) — це центральне значення набору даних. Обчислюється як сума всіх значень, поділена на їхню кількість.",
          "Формула: середнє = (сума всіх значень) / (кількість значень) = Σxᵢ / n.",
          "Приклад: оцінки 10, 12, 14, 16, 18 → сума = 70 → середнє = 70 / 5 = 14.",
          "Середньозважене значення: якщо кожне значення має вагу (частоту), множимо кожне значення на вагу, підсумовуємо та ділимо на суму ваг.",
          "Увага: середнє чутливе до екстремальних значень. Одне викидне значення може суттєво його змінити.",
        ],
  },
};
