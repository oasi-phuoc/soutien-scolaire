import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A6_5: SubmoduleTrad = {
  submoduleId: "A6-5",
  title: S(
    "Réduction",
    "Decrease",
    "التخفيض بنسبة مئوية",
    "کاهش درصدی",
    "ምጉዳል ብሚእታዊ",
    "Відсоткове зменшення",
    "Redução percentual",
    "Hoos u dhigista boqolleyda",
    "Yüzde düşüşü",
    "سلنيز کمول"
  ),
  paragraphs: A(
    [
      "Réduire une valeur de p% signifie qu'on lui soustrait p% de sa propre valeur.",
      "On utilise un coefficient multiplicateur inférieur à 1 pour calculer en une étape.",
      "Formule : nouvelle valeur = valeur initiale × (1 − p/100).",
    ],
    [
      "Decreasing a value by p% means subtracting p% of its own value from it.",
      "A multiplying coefficient less than 1 is used to calculate in one step.",
      "Formula: new value = initial value × (1 − p/100).",
    ],
    [
      "تخفيض قيمة بنسبة p% يعني طرح p% من قيمتها نفسها.",
      "يُستخدم معامل ضرب أقل من 1 للحساب في خطوة واحدة.",
      "الصيغة: القيمة الجديدة = القيمة الأصلية × (1 − p/100).",
    ],
    [
      "کاهش یک مقدار به اندازه p% یعنی کم کردن p% از آن مقدار.",
      "از ضریب ضربی کمتر از 1 برای محاسبه در یک مرحله استفاده می‌شود.",
      "فرمول: مقدار جدید = مقدار اولیه × (1 − p/100).",
    ],
    [
      "ዋጋ ብ p% ምጉዳል ማለት p% ካብኡ ምጉዳል እዩ።",
      "ካብ 1 ዝንኪ ኮፊሸንት ንሓደ ደረጃ ሕሳብ ንጥቀም።",
      "ቀመር፦ ሓድሽ ዋጋ = መጀመርታ ዋጋ × (1 − p/100)።",
    ],
    [
      "Зменшити значення на p% означає відняти p% від його власного значення.",
      "Для розрахунку за один крок використовують множний коефіцієнт, менший за 1.",
      "Формула: нове значення = початкове значення × (1 − p/100).",
    ],
    [
      "Reduzir um valor de p% significa subtrair p% do seu próprio valor.",
      "Usa-se um coeficiente multiplicador inferior a 1 para calcular numa etapa.",
      "Fórmula: novo valor = valor inicial × (1 − p/100).",
    ],
    [
      "Hoos u dhigida qiimaha p% waxay ka dhigan tahay in laga goynto p% oo ka mid ah qiimihiisa.",
      "Isku-dhufte ka yar 1 waxaa loo isticmaalaa in hal tallaabo xisaab lagu sameeyo.",
      "Qaaciddo: qiimaha cusub = qiimaha hore × (1 − p/100).",
    ],
    [
      "Bir değeri p% azaltmak, ondan kendi değerinin p%'sini çıkarmak demektir.",
      "Tek adımda hesap için 1'den küçük çarpan katsayısı kullanılır.",
      "Formül: yeni değer = başlangıç değeri × (1 − p/100).",
    ],
    [
      "يو ارزښت p% کمول يعنې د هغه ارزښت p% ترې کمول.",
      "د يو ګام حساب لپاره له 1 کوچنی ضربي ضريب کارول کېږي.",
      "فورمول: نوی ارزښت = پيلنی ارزښت × (1 − p/100).",
    ]
  ),
  blocks: [
    { text: S("Réduction en pourcentage", "Percentage decrease", "التخفيض بنسبة مئوية", "کاهش درصدی", "ምጉዳል ብሚእታዊ", "Відсоткове зменшення", "Redução percentual", "Hoos u dhigista boqolleyda", "Yüzde düşüşü", "سلنيز کمول") },
    { text: S(
      "Réduire une valeur de **p%** signifie qu'on lui soustrait p% de sa propre valeur. On utilise un **coefficient multiplicateur** inférieur à 1 pour effectuer ce calcul en une seule étape.",
      "Decreasing a value by **p%** means subtracting p% of its own value. We use a **multiplying coefficient** less than 1 to do this in one step.",
      "تخفيض قيمة بنسبة **p%** يعني طرح p% من قيمتها نفسها. نستخدم **معامل ضرب** أقل من 1 لإجراء الحساب في خطوة واحدة.",
      "کاهش یک مقدار به اندازه **p%** یعنی p% از مقدار خودش را از آن کم می‌کنیم. از یک **ضریب ضربی** کمتر از 1 برای این محاسبه در یک مرحله استفاده می‌کنیم.",
      "ዋጋ ብ **p%** ምጉዳል ማለት p% ካብኡ ምጉዳል እዩ። **መባዝሒ ኮፊሸንት** ካብ 1 ዝንኪ ንሓደ ደረጃ ሕሳብ ንጥቀም።",
      "Зменшити значення на **p%** означає відняти p% від його власного значення. Для цього за один крок використовують **множний коефіцієнт**, менший за 1.",
      "Reduzir um valor de **p%** significa subtrair p% do seu próprio valor. Usamos um **coeficiente multiplicador** inferior a 1 para fazer este cálculo numa etapa.",
      "Hoos u dhigida qiimaha **p%** waxay ka dhigan tahay in laga goynto p% oo ka mid ah qiimihiisa. **Isku-dhuftaha** ka yar 1 waxaan u isticmaalnaa tallaabada hal ahaan ah.",
      "Bir değeri **p%** azaltmak, ondan kendi değerinin p%'sini çıkarmak demektir. Bu hesabı tek adımda yapmak için 1'den küçük bir **çarpan katsayısı** kullanırız.",
      "يو ارزښت **p%** کمول يعنې د هغه ارزښت p% ترې کمول. د يو ګام حساب لپاره له 1 کوچنی **ضربي ضريب** کاروو."
    ) },
    { text: S("Formule — Réduction", "Formula — Decrease", "الصيغة — التخفيض", "فرمول — کاهش", "ቀመር — ምጉዳል", "Формула — зменшення", "Fórmula — redução", "Qaaciddo — hoos u dhigis", "Formül — düşüş", "فورمول — کمول"),
      items: A(
        ["Nouvelle valeur = valeur initiale × (1 − p/100)", "Exemple : −30% sur 200 → 200 × 0,70 = 140"],
        ["New value = initial value × (1 − p/100)", "Example: −30% on 200 → 200 × 0.70 = 140"],
        ["القيمة الجديدة = القيمة الأصلية × (1 − p/100)", "مثال: −30% على 200 → 200 × 0,70 = 140"],
        ["مقدار جدید = مقدار اولیه × (1 − p/100)", "مثال: −30% روی 200 → 200 × 0,70 = 140"],
        ["ሓድሽ ዋጋ = መጀመርታ ዋጋ × (1 − p/100)", "ኣብነት፦ −30% ኣብ 200 → 200 × 0,70 = 140"],
        ["Нове значення = початкове значення × (1 − p/100)", "Приклад: −30% від 200 → 200 × 0,70 = 140"],
        ["Novo valor = valor inicial × (1 − p/100)", "Exemplo: −30% sobre 200 → 200 × 0,70 = 140"],
        ["Qiimaha cusub = qiimaha hore × (1 − p/100)", "Tusaale: −30% oo 200 ah → 200 × 0,70 = 140"],
        ["Yeni değer = başlangıç değeri × (1 − p/100)", "Örnek: 200 üzerine −30% → 200 × 0,70 = 140"],
        ["نوی ارزښت = پيلنی ارزښت × (1 − p/100)", "بېلګه: پر 200 باندې −30% → 200 × 0,70 = 140"]
      )
    },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Le coefficient multiplicateur", "The multiplying coefficient", "معامل الضرب", "ضریب ضربی", "መባዝሒ ኮፊሸንት", "Множний коефіцієнт", "O coeficiente multiplicador", "Isku-dhuftaha", "Çarpan katsayısı", "ضربي ضريب") },
    { label: S("Comment trouver le coefficient", "How to find the coefficient", "كيف نجد المعامل", "چگونه ضریب را پیدا کنیم", "ኮፊሸንት ከመይ ንረኽቦ", "Як знайти коефіцієнт", "Como encontrar o coeficiente", "Sida loo helo isku-dhuftaha", "Katsayı nasıl bulunur", "ضريب څنګه موندل کېږي"),
      items: A(
        ["Pour une réduction de **p%** : coefficient = 1 − p/100", "Réduction de 20% → 1 − 0,20 = **0,80**", "Réduction de 30% → 1 − 0,30 = **0,70**", "Réduction de 10% → 1 − 0,10 = **0,90**"],
        ["For a decrease of **p%**: coefficient = 1 − p/100", "Decrease of 20% → 1 − 0.20 = **0.80**", "Decrease of 30% → 1 − 0.30 = **0.70**", "Decrease of 10% → 1 − 0.10 = **0.90**"],
        ["لتخفيض قدره **p%**: المعامل = 1 − p/100", "تخفيض 20% → 1 − 0,20 = **0,80**", "تخفيض 30% → 1 − 0,30 = **0,70**", "تخفيض 10% → 1 − 0,10 = **0,90**"],
        ["برای کاهش **p%**: ضریب = 1 − p/100", "کاهش 20% → 1 − 0,20 = **0,80**", "کاهش 30% → 1 − 0,30 = **0,70**", "کاهش 10% → 1 − 0,10 = **0,90**"],
        ["ንምጉዳል **p%**፦ ኮፊሸንት = 1 − p/100", "ምጉዳል 20% → 1 − 0,20 = **0,80**", "ምጉዳል 30% → 1 − 0,30 = **0,70**", "ምጉዳል 10% → 1 − 0,10 = **0,90**"],
        ["Для зменшення на **p%**: коефіцієнт = 1 − p/100", "Зменшення на 20% → 1 − 0,20 = **0,80**", "Зменшення на 30% → 1 − 0,30 = **0,70**", "Зменшення на 10% → 1 − 0,10 = **0,90**"],
        ["Para uma redução de **p%**: coeficiente = 1 − p/100", "Redução de 20% → 1 − 0,20 = **0,80**", "Redução de 30% → 1 − 0,30 = **0,70**", "Redução de 10% → 1 − 0,10 = **0,90**"],
        ["Hoos u dhigis **p%** ah: isku-dhuftaha = 1 − p/100", "Hoos u dhigis 20% → 1 − 0,20 = **0,80**", "Hoos u dhigis 30% → 1 − 0,30 = **0,70**", "Hoos u dhigis 10% → 1 − 0,10 = **0,90**"],
        ["**p%** düşüş için: katsayı = 1 − p/100", "20% düşüş → 1 − 0,20 = **0,80**", "30% düşüş → 1 − 0,30 = **0,70**", "10% düşüş → 1 − 0,10 = **0,90**"],
        ["د **p%** کمولو لپاره: ضريب = 1 − p/100", "20% کمول → 1 − 0,20 = **0,80**", "30% کمول → 1 − 0,30 = **0,70**", "10% کمول → 1 − 0,10 = **0,90**"]
      )
    },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Exemples de calcul", "Calculation examples", "أمثلة حسابية", "مثال‌های محاسبه", "ኣብነታት ሕሳብ", "Приклади обчислень", "Exemplos de cálculo", "Tusaalooyin xisaab", "Hesap örnekleri", "د حساب بېلګې") },
    { text: S("−30% sur 200 → 200 × 0,70 = 140", "−30% on 200 → 200 × 0.70 = 140", "−30% على 200 → 200 × 0,70 = 140", "−30% روی 200 → 200 × 0,70 = 140", "−30% ኣብ 200 → 200 × 0,70 = 140", "−30% від 200 → 200 × 0,70 = 140", "−30% sobre 200 → 200 × 0,70 = 140", "−30% oo 200 ah → 200 × 0,70 = 140", "200 üzerine −30% → 200 × 0,70 = 140", "پر 200 باندې −30% → 200 × 0,70 = 140") },
    { text: S("−20% sur 200 → 200 × 0,80 = 160", "−20% on 200 → 200 × 0.80 = 160", "−20% على 200 → 200 × 0,80 = 160", "−20% روی 200 → 200 × 0,80 = 160", "−20% ኣብ 200 → 200 × 0,80 = 160", "−20% від 200 → 200 × 0,80 = 160", "−20% sobre 200 → 200 × 0,80 = 160", "−20% oo 200 ah → 200 × 0,80 = 160", "200 üzerine −20% → 200 × 0,80 = 160", "پر 200 باندې −20% → 200 × 0,80 = 160") },
    { text: S("−25% sur 80 → 80 × 0,75 = 60", "−25% on 80 → 80 × 0.75 = 60", "−25% على 80 → 80 × 0,75 = 60", "−25% روی 80 → 80 × 0,75 = 60", "−25% ኣብ 80 → 80 × 0,75 = 60", "−25% від 80 → 80 × 0,75 = 60", "−25% sobre 80 → 80 × 0,75 = 60", "−25% oo 80 ah → 80 × 0,75 = 60", "80 üzerine −25% → 80 × 0,75 = 60", "پر 80 باندې −25% → 80 × 0,75 = 60") },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { headers: A(
      ["Réduction", "Coefficient", "Exemple (base 200)"],
      ["Decrease", "Coefficient", "Example (base 200)"],
      ["التخفيض", "المعامل", "مثال (أساس 200)"],
      ["کاهش", "ضریب", "مثال (مبنای 200)"],
      ["ምጉዳል", "ኮፊሸንት", "ኣብነት (መሰረት 200)"],
      ["Зменшення", "Коефіцієнт", "Приклад (база 200)"],
      ["Redução", "Coeficiente", "Exemplo (base 200)"],
      ["Hoos u dhigis", "Isku-dhufte", "Tusaale (saldhig 200)"],
      ["Düşüş", "Katsayı", "Örnek (taban 200)"],
      ["کمول", "ضريب", "بېلګه (بنسټ 200)"]
    ) },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Augmentation vs Réduction", "Increase vs Decrease", "الزيادة مقابل التخفيض", "افزایش در مقابل کاهش", "ምውሳኽ ምስ ምጉዳል", "Збільшення та зменшення", "Aumento vs Redução", "Kordhin vs hoos u dhigis", "Artış - Düşüş", "زياتوالی vs کمول") },
    { items: A(
      ["Augmentation de p% → coefficient **supérieur à 1** (ex: 1,20 pour +20%)", "Réduction de p% → coefficient **inférieur à 1** (ex: 0,80 pour −20%)"],
      ["Increase of p% → coefficient **greater than 1** (e.g. 1.20 for +20%)", "Decrease of p% → coefficient **less than 1** (e.g. 0.80 for −20%)"],
      ["زيادة p% → معامل **أكبر من 1** (مثال: 1,20 لـ +20%)", "تخفيض p% → معامل **أقل من 1** (مثال: 0,80 لـ −20%)"],
      ["افزایش p% → ضریب **بزرگ‌تر از 1** (مثلاً 1,20 برای +20%)", "کاهش p% → ضریب **کمتر از 1** (مثلاً 0,80 برای −20%)"],
      ["ምውሳኽ p% → ኮፊሸንት **ካብ 1 ዝዓቢ** (ኣብ +20% = 1,20)", "ምጉዳል p% → ኮፊሸንት **ካብ 1 ዝንኪ** (ኣብ −20% = 0,80)"],
      ["Збільшення на p% → коефіцієнт **більший за 1** (напр. 1,20 для +20%)", "Зменшення на p% → коефіцієнт **менший за 1** (напр. 0,80 для −20%)"],
      ["Aumento de p% → coeficiente **superior a 1** (ex: 1,20 para +20%)", "Redução de p% → coeficiente **inferior a 1** (ex: 0,80 para −20%)"],
      ["Kordhin p% → isku-dhufte **ka weyn 1** (tusaale: 1,20 +20% ah)", "Hoos u dhigis p% → isku-dhufte **ka yar 1** (tusaale: 0,80 −20% ah)"],
      ["p% artış → katsayı **1'den büyük** (örn. +20% için 1,20)", "p% düşüş → katsayı **1'den küçük** (örn. −20% için 0,80)"],
      ["p% زياتوالی → ضريب **له 1 لوی** (د مثال +20% = 1,20)", "p% کمول → ضريب **له 1 کوچنی** (د مثال −20% = 0,80)"]
    ) },
    { text: S(
      "Une réduction de 20% puis une augmentation de 20% ne redonne PAS la valeur initiale. Exemple : 100 − 20% = 80 ; 80 + 20% = 96 ≠ 100.",
      "A 20% decrease followed by a 20% increase does NOT give back the initial value. Example: 100 − 20% = 80; 80 + 20% = 96 ≠ 100.",
      "تخفيض 20% ثم زيادة 20% لا تُعيد القيمة الأصلية. مثال: 100 − 20% = 80 ؛ 80 + 20% = 96 ≠ 100.",
      "یک کاهش 20% و سپس یک افزایش 20% مقدار اولیه را بازنمی‌گرداند. مثال: 100 − 20% = 80؛ 80 + 20% = 96 ≠ 100.",
      "ምጉዳል 20% ድሕሪ ምውሳኽ 20% ናብ መጀመርታ ዋጋ ኣይምለስን። ኣብነት፦ 100 − 20% = 80 ፤ 80 + 20% = 96 ≠ 100።",
      "Зменшення на 20%, а потім збільшення на 20% НЕ повертає початкове значення. Приклад: 100 − 20% = 80; 80 + 20% = 96 ≠ 100.",
      "Uma redução de 20% seguida de um aumento de 20% NÃO devolve o valor inicial. Exemplo: 100 − 20% = 80; 80 + 20% = 96 ≠ 100.",
      "Hoos u dhigis 20% ka dib kordhin 20% KUMA soo celin qiimihii hore. Tusaale: 100 − 20% = 80; 80 + 20% = 96 ≠ 100.",
      "20% düşüş ardından 20% artış başlangıç değerini GERİ VERMİYOR. Örnek: 100 − 20% = 80; 80 + 20% = 96 ≠ 100.",
      "20% کمول او بيا 20% زياتوالی پيلنی ارزښت نه راګرزوي. بېلګه: 100 − 20% = 80; 80 + 20% = 96 ≠ 100."
    ) },
  ],
};
