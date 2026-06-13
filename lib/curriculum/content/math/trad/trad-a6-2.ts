import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A6_2: SubmoduleTrad = {
  submoduleId: "A6-2",
  title: S(
    "Pourcentage d'un nombre",
    "Percentage of a number",
    "النسبة المئوية من عدد",
    "درصدی از یک عدد",
    "ሚእታዊ ናይ ቁጽሪ",
    "Відсоток від числа",
    "Percentagem de um número",
    "Boqolley ka mid ah tiro",
    "Bir sayının yüzdesi",
    "د يو عدد سلنه"
  ),
  paragraphs: A(
    [
      "Pour calculer **p%** d'un nombre **N**, on multiplie **N** par **p/100**.",
      "On peut aussi convertir le pourcentage en nombre décimal : 20% = 0,20.",
      "Exemple : 20% de 150 = 150 × 20/100 = 150 × 0,20 = 30.",
    ],
    [
      "To calculate **p%** of a number **N**, multiply **N** by **p/100**.",
      "You can also convert the percentage into a decimal: 20% = 0.20.",
      "Example: 20% of 150 = 150 × 20/100 = 150 × 0.20 = 30.",
    ],
    [
      "لحساب **p%** من عدد **N** نضرب **N** في **p/100**.",
      "يمكننا أيضا تحويل النسبة المئوية إلى عدد عشري: 20% = 0,20.",
      "مثال: 20% من 150 = 150 × 20/100 = 150 × 0,20 = 30.",
    ],
    [
      "برای محاسبه **p%** از عدد **N**، عدد **N** را در **p/100** ضرب می‌کنیم.",
      "همچنین می‌توان درصد را به عدد اعشاری تبدیل کرد: 20% = 0,20.",
      "مثال: 20% از 150 = 150 × 20/100 = 150 × 0,20 = 30.",
    ],
    [
      "**p%** ናይ **N** ንምሕሳብ፣ **N** ብ **p/100** ንበዝሖ።",
      "ሚእታዊ ናብ ዲሲማል ክንቕይሮ ንኽእል፦ 20% = 0,20።",
      "ኣብነት፦ 20% ናይ 150 = 150 × 20/100 = 150 × 0,20 = 30።",
    ],
    [
      "Щоб обчислити **p%** від числа **N**, множимо **N** на **p/100**.",
      "Також можна перетворити відсоток у десяткове число: 20% = 0,20.",
      "Приклад: 20% від 150 = 150 × 20/100 = 150 × 0,20 = 30.",
    ],
    [
      "Para calcular **p%** de um número **N**, multiplica-se **N** por **p/100**.",
      "Também se pode converter a percentagem num decimal: 20% = 0,20.",
      "Exemplo: 20% de 150 = 150 × 20/100 = 150 × 0,20 = 30.",
    ],
    [
      "Si loo xisaabiyo **p%** oo ka mid ah tiro **N**, **N** waxaa lagu dhuftaa **p/100**.",
      "Boqolleyda sidoo kale waxaa loo rogi karaa tiro jajab tobanle ah: 20% = 0,20.",
      "Tusaale: 20% oo ka mid ah 150 = 150 × 20/100 = 150 × 0,20 = 30.",
    ],
    [
      "Bir **N** sayısının **p%**'sini bulmak için **N** sayısını **p/100** ile çarparız.",
      "Yüzdeyi ondalık sayıya da çevirebiliriz: 20% = 0,20.",
      "Örnek: 150'nin 20%'si = 150 × 20/100 = 150 × 0,20 = 30.",
    ],
    [
      "د **N** عدد **p%** د موندلو لپاره **N** په **p/100** ضربوو.",
      "سلنه اعشاري عدد ته هم اړول کېدای شي: 20% = 0,20.",
      "بېلګه: د 150، 20% = 150 × 20/100 = 150 × 0,20 = 30.",
    ]
  ),
  blocks: [
    { text: S("Calculer un pourcentage d'une quantité", "Calculate a percentage of a quantity", "حساب نسبة مئوية من كمية", "محاسبه درصدی از یک مقدار", "ሚእታዊ ናይ መጠን ምሕሳብ", "Обчислити відсоток від величини", "Calcular uma percentagem de uma quantidade", "Xisaabinta boqolley ka mid ah qaddar", "Bir miktarın yüzdesini hesaplama", "د يو مقدار سلنه محاسبه کول") },
    { text: S(
      "Pour trouver **p%** d'un nombre **N**, on multiplie ce nombre par le pourcentage converti en décimal. C'est utile pour les promotions, les taxes et les intérêts.",
      "To find **p%** of a number **N**, multiply the number by the percentage converted into a decimal. This is useful for discounts, taxes, and interest.",
      "لإيجاد **p%** من عدد **N** نضرب العدد في النسبة بعد تحويلها إلى عدد عشري. هذا مفيد في التخفيضات والضرائب والفوائد.",
      "برای یافتن **p%** از عدد **N**، عدد را در درصد تبدیل‌شده به اعشار ضرب می‌کنیم. این کار برای تخفیف، مالیات و بهره مفید است.",
      "**p%** ናይ **N** ንምርካብ፣ ነቲ ቁጽሪ ብዲሲማል ዝተቐየረ ሚእታዊ ንበዝሖ። ንቅናሽ፣ ቀረጽን ወለድን ይጠቅም።",
      "Щоб знайти **p%** від числа **N**, множимо це число на відсоток, перетворений у десяткове число. Це корисно для знижок, податків і відсотків.",
      "Para encontrar **p%** de um número **N**, multiplica-se o número pela percentagem convertida em decimal. Isto é útil para promoções, impostos e juros.",
      "Si loo helo **p%** oo ka mid ah tiro **N**, tirada waxaa lagu dhuftaa boqolleyda loo beddelay jajab tobanle. Tani waxay waxtar u leedahay qiimo-dhimis, canshuur iyo dulsaar.",
      "Bir **N** sayısının **p%**'sini bulmak için sayıyı ondalığa çevrilmiş yüzde ile çarparız. Bu indirim, vergi ve faizlerde işe yarar.",
      "د **N** عدد **p%** د موندلو لپاره عدد د اعشاري شوې سلنې سره ضربوو. دا د تخفیف، مالیې او ګټې لپاره ګټور دی."
    ) },
    { text: S("Formule", "Formula", "الصيغة", "فرمول", "ቀመር", "Формула", "Fórmula", "Qaaciddo", "Formül", "فورمول"), items: A(
      ["**p% de N** = N × p ÷ 100", "Équivalent : N × (p/100) ou N × le décimal correspondant"],
      ["**p% of N** = N × p ÷ 100", "Equivalent: N × (p/100) or N × the matching decimal"],
      ["**p% من N** = N × p ÷ 100", "المكافئ: N × (p/100) أو N × العدد العشري الموافق"],
      ["**p% از N** = N × p ÷ 100", "معادل: N × (p/100) یا N × عدد اعشاری متناظر"],
      ["**p% ናይ N** = N × p ÷ 100", "ተመሳሳሊ፦ N × (p/100) ወይ N × ዝምልከት ዲሲማል"],
      ["**p% від N** = N × p ÷ 100", "Еквівалент: N × (p/100) або N × відповідне десяткове число"],
      ["**p% de N** = N × p ÷ 100", "Equivalente: N × (p/100) ou N × o decimal correspondente"],
      ["**p% ee N** = N × p ÷ 100", "U dhiganta: N × (p/100) ama N × jajabka tobanle ee ku habboon"],
      ["**N'nin p%**'si = N × p ÷ 100", "Eşdeğer: N × (p/100) veya N × uygun ondalık"],
      ["**د N، p%** = N × p ÷ 100", "معادل: N × (p/100) يا N × اړوند اعشاري عدد"]
    ) },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Méthode pas à pas", "Step-by-step method", "الطريقة خطوة بخطوة", "روش گام‌به‌گام", "ደረጃ ብደረጃ ሜላ", "Покроковий метод", "Método passo a passo", "Hab tallaabo-tallaabo ah", "Adım adım yöntem", "ګام په ګام طريقه") },
    { label: S("Étapes", "Steps", "الخطوات", "گام‌ها", "ደረጃታት", "Кроки", "Passos", "Tallaabooyin", "Adımlar", "ګامونه"), items: A(
      ["**Étape 1** — Convertir le pourcentage en décimal : diviser par 100", "**Étape 2** — Multiplier le nombre par ce décimal"],
      ["**Step 1** — Convert the percentage into a decimal: divide by 100", "**Step 2** — Multiply the number by this decimal"],
      ["**الخطوة 1** — حوّل النسبة إلى عدد عشري: اقسم على 100", "**الخطوة 2** — اضرب العدد في هذا العدد العشري"],
      ["**گام 1** — درصد را به اعشار تبدیل کن: تقسیم بر 100", "**گام 2** — عدد را در این اعشار ضرب کن"],
      ["**ደረጃ 1** — ሚእታዊ ናብ ዲሲማል ቀይር፦ ብ100 ክፈል", "**ደረጃ 2** — ቁጽሪ በዚ ዲሲማል በዝሕ"],
      ["**Крок 1** — Перетворити відсоток у десяткове число: поділити на 100", "**Крок 2** — Помножити число на це десяткове число"],
      ["**Passo 1** — Converter a percentagem em decimal: dividir por 100", "**Passo 2** — Multiplicar o número por esse decimal"],
      ["**Tallaabo 1** — Boqolleyda u beddel jajab tobanle: u qaybi 100", "**Tallaabo 2** — Tirada ku dhufo jajabkaas tobanle"],
      ["**Adım 1** — Yüzdeyi ondalığa çevir: 100'e böl", "**Adım 2** — Sayıyı bu ondalıkla çarp"],
      ["**ګام 1** — سلنه اعشاري عدد ته واړوئ: پر 100 يې ووېشئ", "**ګام 2** — عدد په دې اعشاري عدد ضرب کړئ"]
    ) },
    { text: S("20% de 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30", "20% of 150 → 20 ÷ 100 = 0.20 → 150 × 0.20 = 30", "20% من 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30", "20% از 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30", "20% ናይ 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30", "20% від 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30", "20% de 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30", "20% ee 150 → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30", "150'nin 20%'si → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30", "د 150، 20% → 20 ÷ 100 = 0,20 → 150 × 0,20 = 30") },
    { text: S("15% de 80 → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12", "15% of 80 → 15 ÷ 100 = 0.15 → 80 × 0.15 = 12", "15% من 80 → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12", "15% از 80 → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12", "15% ናይ 80 → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12", "15% від 80 → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12", "15% de 80 → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12", "15% ee 80 → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12", "80'in 15%'i → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12", "د 80، 15% → 15 ÷ 100 = 0,15 → 80 × 0,15 = 12") },
    { text: S("5% de 60 → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3", "5% of 60 → 5 ÷ 100 = 0.05 → 60 × 0.05 = 3", "5% من 60 → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3", "5% از 60 → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3", "5% ናይ 60 → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3", "5% від 60 → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3", "5% de 60 → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3", "5% ee 60 → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3", "60'ın 5%'i → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3", "د 60، 5% → 5 ÷ 100 = 0,05 → 60 × 0,05 = 3") },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Astuces de calcul mental", "Mental calculation tips", "حيل للحساب الذهني", "نکته‌های محاسبه ذهنی", "ምኽሪ ናይ ኣእምሮ ሕሳብ", "Поради для усного рахунку", "Dicas de cálculo mental", "Talooyin xisaab maskaxeed", "Zihinden hesaplama ipuçları", "د ذهني حساب لارښوونې") },
    { label: S("Raccourcis utiles", "Useful shortcuts", "اختصارات مفيدة", "میان‌برهای مفید", "ጠቓሚ ሓጺር መንገድታት", "Корисні скорочення", "Atalhos úteis", "Habab gaagaaban oo waxtar leh", "Yararlı kısa yollar", "ګټور لنډې لارې"), items: A(
      ["**10%** d'un nombre → diviser par 10", "**5%** d'un nombre → prendre 10%, puis diviser par 2", "**25%** d'un nombre → diviser par 4", "**50%** d'un nombre → diviser par 2", "**1%** d'un nombre → diviser par 100"],
      ["**10%** of a number → divide by 10", "**5%** of a number → take 10%, then divide by 2", "**25%** of a number → divide by 4", "**50%** of a number → divide by 2", "**1%** of a number → divide by 100"],
      ["**10%** من عدد → اقسم على 10", "**5%** من عدد → خذ 10% ثم اقسم على 2", "**25%** من عدد → اقسم على 4", "**50%** من عدد → اقسم على 2", "**1%** من عدد → اقسم على 100"],
      ["**10%** از یک عدد → تقسیم بر 10", "**5%** از یک عدد → 10% را بگیر، سپس تقسیم بر 2", "**25%** از یک عدد → تقسیم بر 4", "**50%** از یک عدد → تقسیم بر 2", "**1%** از یک عدد → تقسیم بر 100"],
      ["**10%** ናይ ቁጽሪ → ብ10 ክፈል", "**5%** ናይ ቁጽሪ → 10% ውሰድ፣ ብድሕሪኡ ብ2 ክፈል", "**25%** ናይ ቁጽሪ → ብ4 ክፈል", "**50%** ናይ ቁጽሪ → ብ2 ክፈል", "**1%** ናይ ቁጽሪ → ብ100 ክፈል"],
      ["**10%** від числа → поділити на 10", "**5%** від числа → взяти 10%, потім поділити на 2", "**25%** від числа → поділити на 4", "**50%** від числа → поділити на 2", "**1%** від числа → поділити на 100"],
      ["**10%** de um número → dividir por 10", "**5%** de um número → calcular 10%, depois dividir por 2", "**25%** de um número → dividir por 4", "**50%** de um número → dividir por 2", "**1%** de um número → dividir por 100"],
      ["**10%** tiro → u qaybi 10", "**5%** tiro → qaado 10%, ka dib u qaybi 2", "**25%** tiro → u qaybi 4", "**50%** tiro → u qaybi 2", "**1%** tiro → u qaybi 100"],
      ["Bir sayının **10%**'u → 10'a böl", "Bir sayının **5%**'i → 10%'u al, sonra 2'ye böl", "Bir sayının **25%**'i → 4'e böl", "Bir sayının **50%**'si → 2'ye böl", "Bir sayının **1%**'i → 100'e böl"],
      ["د عدد **10%** → پر 10 وېشل", "د عدد **5%** → 10% واخلئ، بيا پر 2 ووېشئ", "د عدد **25%** → پر 4 وېشل", "د عدد **50%** → پر 2 وېشل", "د عدد **1%** → پر 100 وېشل"]
    ) },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { headers: A(
      ["Calcul", "Astuce rapide", "Résultat"],
      ["Calculation", "Quick tip", "Result"],
      ["الحساب", "حيلة سريعة", "النتيجة"],
      ["محاسبه", "نکته سریع", "نتیجه"],
      ["ሕሳብ", "ቅልጡፍ ምኽሪ", "ውጽኢት"],
      ["Обчислення", "Швидка порада", "Результат"],
      ["Cálculo", "Dica rápida", "Resultado"],
      ["Xisaab", "Talo degdeg ah", "Natiijo"],
      ["Hesap", "Hızlı ipucu", "Sonuç"],
      ["حساب", "چټکه لارښوونه", "پايله"]
    ) },
    { text: S(
      "Vérification : si le pourcentage est inférieur à 100%, le résultat doit être plus petit que le nombre de départ.",
      "Check: if the percentage is less than 100%, the result must be smaller than the starting number.",
      "تحقق: إذا كانت النسبة أقل من 100% فيجب أن تكون النتيجة أصغر من العدد الأصلي.",
      "بررسی: اگر درصد کمتر از 100% باشد، نتیجه باید از عدد اولیه کوچک‌تر باشد.",
      "ምርግጋጽ፦ ሚእታዊ ካብ 100% እንተነኣሰ፣ ውጽኢት ካብ መጀመርታ ቁጽሪ ክንእስ ኣለዎ።",
      "Перевірка: якщо відсоток менший за 100%, результат має бути меншим за початкове число.",
      "Verificação: se a percentagem for inferior a 100%, o resultado deve ser menor do que o número inicial.",
      "Hubin: haddii boqolleydu ka yar tahay 100%, natiijadu waa inay ka yaraataa tiradii bilowga ahayd.",
      "Kontrol: yüzde 100%'den küçükse sonuç başlangıç sayısından küçük olmalıdır.",
      "کتنه: که سلنه له 100% کمه وي، پايله بايد له پيلني عدد څخه کمه وي."
    ) },
  ],
};
