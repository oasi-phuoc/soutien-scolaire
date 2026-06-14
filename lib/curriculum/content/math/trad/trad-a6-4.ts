import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A6_4: SubmoduleTrad = {
  submoduleId: "A6-4",
  title: S(
    "Augmentation",
    "Increase",
    "الزيادة",
    "افزایش",
    "ምውሳኽ",
    "Збільшення",
    "Aumento",
    "Kordhin",
    "Artış",
    "زياتوالی"
  ),
  paragraphs: A(
    [
      "Augmenter une valeur de **p%** signifie ajouter **p%** de cette valeur à elle-même.",
      "On peut faire le calcul en une étape avec un **coefficient multiplicateur** supérieur à 1.",
      "Formule : nouvelle valeur = valeur initiale × (1 + p/100).",
    ],
    [
      "Increasing a value by **p%** means adding **p%** of that value to itself.",
      "The calculation can be done in one step with a **multiplying coefficient** greater than 1.",
      "Formula: new value = initial value × (1 + p/100).",
    ],
    [
      "زيادة قيمة بنسبة **p%** تعني إضافة **p%** من هذه القيمة إليها.",
      "يمكن إجراء الحساب في خطوة واحدة باستعمال **معامل ضرب** أكبر من 1.",
      "الصيغة: القيمة الجديدة = القيمة الأصلية × (1 + p/100).",
    ],
    [
      "افزایش یک مقدار به اندازه **p%** یعنی افزودن **p%** از همان مقدار به خودش.",
      "می‌توان محاسبه را در یک مرحله با **ضریب ضربی** بزرگ‌تر از 1 انجام داد.",
      "فرمول: مقدار جدید = مقدار اولیه × (1 + p/100).",
    ],
    [
      "ዋጋ ብ **p%** ምውሳኽ ማለት **p%** ናይቲ ዋጋ ናብኡ ምውሳኽ እዩ።",
      "እቲ ሕሳብ ብሓደ ደረጃ ብ **መባዝሒ ኮፊሸንት** ካብ 1 ዝዓቢ ክግበር ይኽእል።",
      "ቀመር፦ ሓድሽ ዋጋ = መጀመርታ ዋጋ × (1 + p/100)።",
    ],
    [
      "Збільшити значення на **p%** означає додати до нього **p%** від цього значення.",
      "Обчислення можна виконати за один крок за допомогою **множного коефіцієнта**, більшого за 1.",
      "Формула: нове значення = початкове значення × (1 + p/100).",
    ],
    [
      "Aumentar um valor de **p%** significa acrescentar **p%** desse valor a ele próprio.",
      "O cálculo pode ser feito numa etapa com um **coeficiente multiplicador** superior a 1.",
      "Fórmula: novo valor = valor inicial × (1 + p/100).",
    ],
    [
      "In qiime lagu kordhiyo **p%** waxay ka dhigan tahay in lagu daro **p%** oo ka mid ah qiimahaas.",
      "Xisaabta hal tallaabo ayaa lagu samayn karaa iyadoo la adeegsanayo **isku-dhuftaha** ka weyn 1.",
      "Qaaciddo: qiimaha cusub = qiimaha hore × (1 + p/100).",
    ],
    [
      "Bir değeri **p%** artırmak, o değere kendi değerinin **p%**'sini eklemek demektir.",
      "Hesap, 1'den büyük bir **çarpan katsayısı** ile tek adımda yapılabilir.",
      "Formül: yeni değer = başlangıç değeri × (1 + p/100).",
    ],
    [
      "يو ارزښت په **p%** زياتول يعنې د هغه ارزښت **p%** ورسره زياتول.",
      "حساب په يو ګام کې د 1 څخه لوی **ضربي ضريب** سره کېدای شي.",
      "فورمول: نوی ارزښت = پيلنی ارزښت × (1 + p/100).",
    ]
  ),
  blocks: [
    { text: S("Augmentation en pourcentage", "Percentage increase", "الزيادة بالنسبة المئوية", "افزایش درصدی", "ምውሳኽ ብሚእታዊ", "Відсоткове збільшення", "Aumento percentual", "Kordhin boqolley ah", "Yüzde artışı", "سلنيز زياتوالی") },
    { text: S(
      "Augmenter une valeur de **p%** signifie qu'on lui ajoute p% de sa propre valeur. Le **coefficient multiplicateur** est supérieur à 1.",
      "Increasing a value by **p%** means adding p% of its own value. The **multiplying coefficient** is greater than 1.",
      "زيادة قيمة بنسبة **p%** تعني أننا نضيف إليها p% من قيمتها نفسها. **معامل الضرب** أكبر من 1.",
      "افزایش یک مقدار به اندازه **p%** یعنی p% از مقدار خودش را به آن اضافه می‌کنیم. **ضریب ضربی** بزرگ‌تر از 1 است.",
      "ዋጋ ብ **p%** ምውሳኽ ማለት p% ናይቲ ዋጋ ናብኡ ምውሳኽ እዩ። **መባዝሒ ኮፊሸንት** ካብ 1 ይዓቢ።",
      "Збільшити значення на **p%** означає додати p% від його власного значення. **Множний коефіцієнт** більший за 1.",
      "Aumentar um valor de **p%** significa acrescentar p% do seu próprio valor. O **coeficiente multiplicador** é superior a 1.",
      "In qiime lagu kordhiyo **p%** waxay ka dhigan tahay in lagu daro p% oo ka mid ah qiimihiisa. **Isku-dhuftuhu** wuu ka weyn yahay 1.",
      "Bir değeri **p%** artırmak, ona kendi değerinin p%'sini eklemek demektir. **Çarpan katsayısı** 1'den büyüktür.",
      "يو ارزښت په **p%** زياتول يعنې د هغه خپل ارزښت p% ورسره زياتول. **ضربي ضريب** له 1 څخه لوی وي."
    ) },
    { text: S("Formule — Augmentation", "Formula — Increase", "الصيغة — الزيادة", "فرمول — افزایش", "ቀመር — ምውሳኽ", "Формула — збільшення", "Fórmula — aumento", "Qaaciddo — kordhin", "Formül — artış", "فورمول — زياتوالی"), items: A(
      ["Nouvelle valeur = valeur initiale × (1 + p/100)", "Exemple : +20% sur 80 → 80 × 1,20 = 96"],
      ["New value = initial value × (1 + p/100)", "Example: +20% on 80 → 80 × 1.20 = 96"],
      ["القيمة الجديدة = القيمة الأصلية × (1 + p/100)", "مثال: +20% على 80 → 80 × 1,20 = 96"],
      ["مقدار جدید = مقدار اولیه × (1 + p/100)", "مثال: +20% روی 80 → 80 × 1,20 = 96"],
      ["ሓድሽ ዋጋ = መጀመርታ ዋጋ × (1 + p/100)", "ኣብነት፦ +20% ኣብ 80 → 80 × 1,20 = 96"],
      ["Нове значення = початкове значення × (1 + p/100)", "Приклад: +20% від 80 → 80 × 1,20 = 96"],
      ["Novo valor = valor inicial × (1 + p/100)", "Exemplo: +20% sobre 80 → 80 × 1,20 = 96"],
      ["Qiimaha cusub = qiimaha hore × (1 + p/100)", "Tusaale: +20% oo 80 ah → 80 × 1,20 = 96"],
      ["Yeni değer = başlangıç değeri × (1 + p/100)", "Örnek: 80 üzerine +20% → 80 × 1,20 = 96"],
      ["نوی ارزښت = پيلنی ارزښت × (1 + p/100)", "بېلګه: پر 80 باندې +20% → 80 × 1,20 = 96"]
    ) },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Le coefficient multiplicateur", "The multiplying coefficient", "معامل الضرب", "ضریب ضربی", "መባዝሒ ኮፊሸንት", "Множний коефіцієнт", "O coeficiente multiplicador", "Isku-dhuftaha", "Çarpan katsayısı", "ضربي ضريب") },
    { label: S("Comment trouver le coefficient", "How to find the coefficient", "كيف نجد المعامل", "چگونه ضریب را پیدا کنیم", "ኮፊሸንት ከመይ ንረኽቦ", "Як знайти коефіцієнт", "Como encontrar o coeficiente", "Sida loo helo isku-dhuftaha", "Katsayı nasıl bulunur", "ضريب څنګه موندل کېږي"), items: A(
      ["Pour une augmentation de **p%** : coefficient = 1 + p/100", "Augmentation de 15% → 1 + 0,15 = **1,15**", "Augmentation de 100% → 1 + 1,00 = **2,00** (le double)"],
      ["For an increase of **p%**: coefficient = 1 + p/100", "Increase of 15% → 1 + 0.15 = **1.15**", "Increase of 100% → 1 + 1.00 = **2.00** (double)"],
      ["لزيادة قدرها **p%**: المعامل = 1 + p/100", "زيادة 15% → 1 + 0,15 = **1,15**", "زيادة 100% → 1 + 1,00 = **2,00** (الضعف)"],
      ["برای افزایش **p%**: ضریب = 1 + p/100", "افزایش 15% → 1 + 0,15 = **1,15**", "افزایش 100% → 1 + 1,00 = **2,00** (دو برابر)"],
      ["ንምውሳኽ **p%**፦ ኮፊሸንት = 1 + p/100", "ምውሳኽ 15% → 1 + 0,15 = **1,15**", "ምውሳኽ 100% → 1 + 1,00 = **2,00** (ዕጽፊ)"],
      ["Для збільшення на **p%**: коефіцієнт = 1 + p/100", "Збільшення на 15% → 1 + 0,15 = **1,15**", "Збільшення на 100% → 1 + 1,00 = **2,00** (удвічі)"],
      ["Para um aumento de **p%**: coeficiente = 1 + p/100", "Aumento de 15% → 1 + 0,15 = **1,15**", "Aumento de 100% → 1 + 1,00 = **2,00** (o dobro)"],
      ["Kordhin **p%** ah: isku-dhuftaha = 1 + p/100", "Kordhin 15% → 1 + 0,15 = **1,15**", "Kordhin 100% → 1 + 1,00 = **2,00** (laba jibbaar)"],
      ["**p%** artış için: katsayı = 1 + p/100", "15% artış → 1 + 0,15 = **1,15**", "100% artış → 1 + 1,00 = **2,00** (iki kat)"],
      ["د **p%** زياتوالي لپاره: ضريب = 1 + p/100", "15% زياتوالی → 1 + 0,15 = **1,15**", "100% زياتوالی → 1 + 1,00 = **2,00** (دوه چنده)"]
    ) },
    { text: S("Exemples de calcul", "Calculation examples", "أمثلة حسابية", "مثال‌های محاسبه", "ኣብነታት ሕሳብ", "Приклади обчислень", "Exemplos de cálculo", "Tusaalooyin xisaab", "Hesap örnekleri", "د حساب بېلګې") },
    { text: S("+20% sur 80 → 80 × 1,20 = 96", "+20% on 80 → 80 × 1.20 = 96", "+20% على 80 → 80 × 1,20 = 96", "+20% روی 80 → 80 × 1,20 = 96", "+20% ኣብ 80 → 80 × 1,20 = 96", "+20% від 80 → 80 × 1,20 = 96", "+20% sobre 80 → 80 × 1,20 = 96", "+20% oo 80 ah → 80 × 1,20 = 96", "80 üzerine +20% → 80 × 1,20 = 96", "پر 80 باندې +20% → 80 × 1,20 = 96") },
    { text: S("+15% sur 200 → 200 × 1,15 = 230", "+15% on 200 → 200 × 1.15 = 230", "+15% على 200 → 200 × 1,15 = 230", "+15% روی 200 → 200 × 1,15 = 230", "+15% ኣብ 200 → 200 × 1,15 = 230", "+15% від 200 → 200 × 1,15 = 230", "+15% sobre 200 → 200 × 1,15 = 230", "+15% oo 200 ah → 200 × 1,15 = 230", "200 üzerine +15% → 200 × 1,15 = 230", "پر 200 باندې +15% → 200 × 1,15 = 230") },
    { text: S("+5% sur 3 200 → 3 200 × 1,05 = 3 360", "+5% on 3,200 → 3,200 × 1.05 = 3,360", "+5% على 3 200 → 3 200 × 1,05 = 3 360", "+5% روی 3 200 → 3 200 × 1,05 = 3 360", "+5% ኣብ 3 200 → 3 200 × 1,05 = 3 360", "+5% від 3 200 → 3 200 × 1,05 = 3 360", "+5% sobre 3 200 → 3 200 × 1,05 = 3 360", "+5% oo 3 200 ah → 3 200 × 1,05 = 3 360", "3 200 üzerine +5% → 3 200 × 1,05 = 3 360", "پر 3 200 باندې +5% → 3 200 × 1,05 = 3 360") },
    { text: S(
      "Astuce : on peut aussi calculer d'abord le montant de l'augmentation, puis l'ajouter à la valeur initiale. Les deux méthodes donnent le même résultat.",
      "Tip: you can also first calculate the amount of the increase, then add it to the initial value. Both methods give the same result.",
      "نصيحة: يمكن أيضا حساب مقدار الزيادة أولا ثم إضافته إلى القيمة الأصلية. الطريقتان تعطيان النتيجة نفسها.",
      "نکته: می‌توان ابتدا مقدار افزایش را حساب کرد و سپس آن را به مقدار اولیه افزود. هر دو روش نتیجه یکسان می‌دهند.",
      "ምኽሪ፦ መጀመርታ መጠን ምውሳኽ ሓሲብካ፣ ድሕሪኡ ናብ መጀመርታ ዋጋ ክትውስኾ ትኽእል። ክልቲኡ ሜላ ተመሳሳሊ ውጽኢት ይህብ።",
      "Порада: можна спочатку обчислити величину збільшення, а потім додати її до початкового значення. Обидва методи дають однаковий результат.",
      "Dica: também se pode calcular primeiro o valor do aumento e depois acrescentá-lo ao valor inicial. Os dois métodos dão o mesmo resultado.",
      "Talo: waxaa kale oo marka hore la xisaabin karaa qadarka kordhinta, ka dibna lagu dari karaa qiimihii hore. Labada habba natiijo isku mid ah ayay bixiyaan.",
      "İpucu: önce artış miktarını hesaplayıp sonra başlangıç değerine ekleyebilirsin. İki yöntem de aynı sonucu verir.",
      "لارښوونه: لومړی د زياتوالي اندازه محاسبه کولای شئ، بيا يې پيلني ارزښت ته ورزیاته کړئ. دواړه لارې يو شان پايله ورکوي."
    ) },
    { headers: A(
      ["Coefficient", "Exemple (base 100)"],
      ["Coefficient", "Example (base 100)"],
      ["المعامل", "مثال (أساس 100)"],
      ["ضریب", "مثال (مبنای 100)"],
      ["ኮፊሸንት", "ኣብነት (መሰረት 100)"],
      ["Коефіцієнт", "Приклад (база 100)"],
      ["Coeficiente", "Exemplo (base 100)"],
      ["Isku-dhufte", "Tusaale (saldhig 100)"],
      ["Katsayı", "Örnek (taban 100)"],
      ["ضريب", "بېلګه (بنسټ 100)"]
    ) },
  ],
  consignes: {
    "a6-4-e1": { fr: "Offre A : −20% sur 150 CHF. Prix final ?", en: "Offer A: −20% on 150 CHF. Final price?" },
    "a6-4-e2": { fr: "Offre B : −15% sur 130 CHF. Prix final ?", en: "Offer B: −15% on 130 CHF. Final price?" },
    "a6-4-e3": { fr: "Classe A : 18 sur 24. Taux de réussite ?", en: "Class A: 18 out of 24. Success rate?" },
    "a6-4-e4": { fr: "Classe B : 21 sur 30. Taux de réussite ?", en: "Class B: 21 out of 30. Success rate?" },
    "a6-4-e5": { fr: "Veste Magasin C : 220 CHF − 30%. Prix final ?", en: "Jacket at Store C: 220 CHF − 30%. Final price?" },
  },
};
