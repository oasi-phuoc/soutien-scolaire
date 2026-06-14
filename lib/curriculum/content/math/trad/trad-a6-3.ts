import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A6_3: SubmoduleTrad = {
  submoduleId: "A6-3",
  title: S(
    "Exprimer une partie en pourcentage",
    "Express a part as a percentage",
    "التعبير عن جزء بنسبة مئوية",
    "بیان یک بخش به صورت درصد",
    "ክፋል ብሚእታዊ ምግላጽ",
    "Виразити частину у відсотках",
    "Exprimir uma parte em percentagem",
    "Qayb ku muujinta boqolley",
    "Bir parçayı yüzde olarak ifade etme",
    "يوه برخه په سلنه څرګندول"
  ),
  paragraphs: A(
    [
      "Quand on connaît la **partie** et le **total**, on peut calculer le pourcentage représenté par cette partie.",
      "La formule est : **pourcentage = (partie ÷ total) × 100**.",
      "Exemple : 30 élèves sur 120 ont réussi → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%.",
    ],
    [
      "When you know the **part** and the **total**, you can calculate the percentage represented by that part.",
      "The formula is: **percentage = (part ÷ total) × 100**.",
      "Example: 30 students out of 120 succeeded → 30 ÷ 120 = 0.25 → 0.25 × 100 = 25%.",
    ],
    [
      "عندما نعرف **الجزء** و**المجموع** يمكننا حساب النسبة التي يمثلها هذا الجزء.",
      "الصيغة هي: **النسبة المئوية = (الجزء ÷ المجموع) × 100**.",
      "مثال: نجح 30 تلميذا من 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%.",
    ],
    [
      "وقتی **بخش** و **کل** را می‌دانیم، می‌توانیم درصدی را که آن بخش نشان می‌دهد محاسبه کنیم.",
      "فرمول: **درصد = (بخش ÷ کل) × 100**.",
      "مثال: 30 دانش‌آموز از 120 نفر موفق شدند → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%.",
    ],
    [
      "**ክፋል**ን **ጠቕላላ**ን እንተፈሊጥና፣ እቲ ክፋል ዝውክሎ ሚእታዊ ክንሕስብ ንኽእል።",
      "ቀመር፦ **ሚእታዊ = (ክፋል ÷ ጠቕላላ) × 100**።",
      "ኣብነት፦ 30 ተምሃሮ ካብ 120 ተዓዊቶም → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%።",
    ],
    [
      "Коли відомі **частина** і **загальна кількість**, можна обчислити відсоток, який представляє ця частина.",
      "Формула: **відсоток = (частина ÷ загальна кількість) × 100**.",
      "Приклад: 30 учнів із 120 досягли успіху → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%.",
    ],
    [
      "Quando conhecemos a **parte** e o **total**, podemos calcular a percentagem representada por essa parte.",
      "A fórmula é: **percentagem = (parte ÷ total) × 100**.",
      "Exemplo: 30 alunos em 120 tiveram sucesso → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%.",
    ],
    [
      "Marka la yaqaan **qaybta** iyo **wadarta**, waxaa la xisaabin karaa boqolleyda ay qaybtu matalayso.",
      "Qaaciddu waa: **boqolley = (qayb ÷ wadar) × 100**.",
      "Tusaale: 30 arday oo ka mid ah 120 ayaa guulaystay → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%.",
    ],
    [
      "**Parça** ve **toplam** biliniyorsa, bu parçanın temsil ettiği yüzde hesaplanabilir.",
      "Formül: **yüzde = (parça ÷ toplam) × 100**.",
      "Örnek: 120 öğrenciden 30'u başarılı oldu → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%.",
    ],
    [
      "کله چې **برخه** او **ټول** معلوم وي، د هغې برخې سلنه محاسبه کېدای شي.",
      "فورمول: **سلنه = (برخه ÷ ټول) × 100**.",
      "بېلګه: له 120 زده کوونکو څخه 30 بريالي شول → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%.",
    ]
  ),
  blocks: [
    { text: S("Exprimer une partie en pourcentage", "Express a part as a percentage", "التعبير عن جزء بنسبة مئوية", "بیان یک بخش به صورت درصد", "ክፋል ብሚእታዊ ምግላጽ", "Виразити частину у відсотках", "Exprimir uma parte em percentagem", "Qayb ku muujinta boqolley", "Bir parçayı yüzde olarak ifade etme", "يوه برخه په سلنه څرګندول") },
    { text: S(
      "Parfois on connaît la **partie** et le **total**, et on veut savoir quel pourcentage cela représente. Par exemple : 30 élèves sur 120 ont réussi — quel est le taux de réussite ?",
      "Sometimes we know the **part** and the **total**, and we want to know what percentage it represents. For example: 30 students out of 120 succeeded — what is the success rate?",
      "أحيانا نعرف **الجزء** و**المجموع** ونريد معرفة النسبة المئوية التي يمثلها ذلك. مثلا: نجح 30 تلميذا من 120 — ما نسبة النجاح؟",
      "گاهی **بخش** و **کل** را می‌دانیم و می‌خواهیم بدانیم این چه درصدی است. مثلا: 30 دانش‌آموز از 120 نفر موفق شدند — نرخ موفقیت چند درصد است؟",
      "ሓድሓደ ግዜ **ክፋል**ን **ጠቕላላ**ን ንፈልጥ፣ እዚ ክንደይ ሚእታዊ ከምዝኾነ ንደሊ። ኣብነት፦ 30 ተምሃሮ ካብ 120 ተዓዊቶም — መጠን ዓወት ክንደይ እዩ?",
      "Іноді ми знаємо **частину** і **загальну кількість** та хочемо дізнатися, який це відсоток. Наприклад: 30 учнів із 120 досягли успіху — який відсоток успішності?",
      "Por vezes conhecemos a **parte** e o **total**, e queremos saber que percentagem isso representa. Por exemplo: 30 alunos em 120 tiveram sucesso — qual é a taxa de sucesso?",
      "Mararka qaar waxaan naqaan **qaybta** iyo **wadarta**, waxaana rabnaa inaan ogaano boqolleyda ay matalayso. Tusaale: 30 arday oo ka mid ah 120 ayaa guulaystay — waa imisa heerka guushu?",
      "Bazen **parçayı** ve **toplamı** biliriz ve bunun hangi yüzdeyi temsil ettiğini öğrenmek isteriz. Örneğin: 120 öğrenciden 30'u başarılı oldu — başarı oranı nedir?",
      "کله ناکله **برخه** او **ټول** معلوم وي او غواړو پوه شو دا څو سلنه ده. بېلګه: له 120 زده کوونکو څخه 30 بريالي شول — د بريا کچه څو ده؟"
    ) },
    { text: S("Formule", "Formula", "الصيغة", "فرمول", "ቀመር", "Формула", "Fórmula", "Qaaciddo", "Formül", "فورمول"), items: A(
      ["**Pourcentage** = (partie ÷ total) × 100", "Résultat en %"],
      ["**Percentage** = (part ÷ total) × 100", "Result in %"],
      ["**النسبة المئوية** = (الجزء ÷ المجموع) × 100", "النتيجة بـ %"],
      ["**درصد** = (بخش ÷ کل) × 100", "نتیجه با %"],
      ["**ሚእታዊ** = (ክፋል ÷ ጠቕላላ) × 100", "ውጽኢት ብ %"],
      ["**Відсоток** = (частина ÷ загальна кількість) × 100", "Результат у %"],
      ["**Percentagem** = (parte ÷ total) × 100", "Resultado em %"],
      ["**Boqolley** = (qayb ÷ wadar) × 100", "Natiijo % ah"],
      ["**Yüzde** = (parça ÷ toplam) × 100", "% olarak sonuç"],
      ["**سلنه** = (برخه ÷ ټول) × 100", "پايله په % کې"]
    ) },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Méthode pas à pas", "Step-by-step method", "الطريقة خطوة بخطوة", "روش گام‌به‌گام", "ደረጃ ብደረጃ ሜላ", "Покроковий метод", "Método passo a passo", "Hab tallaabo-tallaabo ah", "Adım adım yöntem", "ګام په ګام طريقه") },
    { label: S("Étapes", "Steps", "الخطوات", "گام‌ها", "ደረጃታት", "Кроки", "Passos", "Tallaabooyin", "Adımlar", "ګامونه"), items: A(
      ["**Étape 1** — Diviser la partie par le total", "**Étape 2** — Multiplier le résultat par 100", "**Étape 3** — Ajouter le symbole %"],
      ["**Step 1** — Divide the part by the total", "**Step 2** — Multiply the result by 100", "**Step 3** — Add the % symbol"],
      ["**الخطوة 1** — اقسم الجزء على المجموع", "**الخطوة 2** — اضرب النتيجة في 100", "**الخطوة 3** — أضف الرمز %"],
      ["**گام 1** — بخش را بر کل تقسیم کن", "**گام 2** — نتیجه را در 100 ضرب کن", "**گام 3** — نماد % را اضافه کن"],
      ["**ደረጃ 1** — ክፋል ብጠቕላላ ክፈል", "**ደረጃ 2** — ውጽኢት ብ100 በዝሕ", "**ደረጃ 3** — ምልክት % ወስኽ"],
      ["**Крок 1** — Поділити частину на загальну кількість", "**Крок 2** — Помножити результат на 100", "**Крок 3** — Додати символ %"],
      ["**Passo 1** — Dividir a parte pelo total", "**Passo 2** — Multiplicar o resultado por 100", "**Passo 3** — Acrescentar o símbolo %"],
      ["**Tallaabo 1** — Qaybta u qaybi wadarta", "**Tallaabo 2** — Natiijada ku dhufo 100", "**Tallaabo 3** — Ku dar calaamadda %"],
      ["**Adım 1** — Parçayı toplama böl", "**Adım 2** — Sonucu 100 ile çarp", "**Adım 3** — % işaretini ekle"],
      ["**ګام 1** — برخه پر ټول ووېشئ", "**ګام 2** — پايله په 100 ضرب کړئ", "**ګام 3** — د % نښه ورزیاته کړئ"]
    ) },
    { text: S("30 sur 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%", "30 out of 120 → 30 ÷ 120 = 0.25 → 0.25 × 100 = 25%", "30 من 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%", "30 از 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%", "30 ካብ 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%", "30 із 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%", "30 em 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%", "30 ka mid ah 120 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%", "120'den 30 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%", "له 120 څخه 30 → 30 ÷ 120 = 0,25 → 0,25 × 100 = 25%") },
    { text: S("18 sur 24 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%", "18 out of 24 → 18 ÷ 24 = 0.75 → 0.75 × 100 = 75%", "18 من 24 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%", "18 از 24 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%", "18 ካብ 24 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%", "18 із 24 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%", "18 em 24 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%", "18 ka mid ah 24 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%", "24'ten 18 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%", "له 24 څخه 18 → 18 ÷ 24 = 0,75 → 0,75 × 100 = 75%") },
    { text: S("7 sur 20 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%", "7 out of 20 → 7 ÷ 20 = 0.35 → 0.35 × 100 = 35%", "7 من 20 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%", "7 از 20 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%", "7 ካብ 20 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%", "7 із 20 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%", "7 em 20 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%", "7 ka mid ah 20 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%", "20'den 7 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%", "له 20 څخه 7 → 7 ÷ 20 = 0,35 → 0,35 × 100 = 35%") },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S("Exemples concrets", "Concrete examples", "أمثلة ملموسة", "مثال‌های واقعی", "ተግባራዊ ኣብነታት", "Конкретні приклади", "Exemplos concretos", "Tusaalooyin dhab ah", "Somut örnekler", "عملي بېلګې") },
    { headers: A(
      ["Situation", "Calcul", "Résultat"],
      ["Situation", "Calculation", "Result"],
      ["الوضعية", "الحساب", "النتيجة"],
      ["وضعیت", "محاسبه", "نتیجه"],
      ["ኩነታት", "ሕሳብ", "ውጽኢት"],
      ["Ситуація", "Обчислення", "Результат"],
      ["Situação", "Cálculo", "Resultado"],
      ["Xaalad", "Xisaab", "Natiijo"],
      ["Durum", "Hesap", "Sonuç"],
      ["حالت", "حساب", "پايله"]
    ) },
    { text: S("", "", "", "", "", "", "", "", "", "") },
    { text: S(
      "Le résultat est entre 0% et 100% si la partie est inférieure ou égale au total. Vérifiez que vous avez divisé la partie par le total, et non l'inverse.",
      "The result is between 0% and 100% if the part is less than or equal to the total. Check that you divided the part by the total, not the opposite.",
      "تكون النتيجة بين 0% و100% إذا كان الجزء أصغر من المجموع أو مساويا له. تأكد من أنك قسمت الجزء على المجموع، وليس العكس.",
      "اگر بخش کوچک‌تر یا برابر با کل باشد، نتیجه بین 0% و100% است. بررسی کن که بخش را بر کل تقسیم کرده‌ای، نه برعکس.",
      "ክፋል ካብ ጠቕላላ እንተነኣሰ ወይ ማዕረ እንተኾነ፣ ውጽኢት ኣብ መንጎ 0%ን 100%ን ይኸውን። ክፋል ብጠቕላላ ከምዝኸፈልካ ኣረጋግጽ።",
      "Результат лежить між 0% і 100%, якщо частина менша або дорівнює загальній кількості. Перевір, що ти поділив частину на загальну кількість, а не навпаки.",
      "O resultado fica entre 0% e 100% se a parte for menor ou igual ao total. Verifica se dividiste a parte pelo total, e não o contrário.",
      "Natiijadu waxay u dhexaysaa 0% iyo 100% haddii qaybtu ka yar tahay ama la siman tahay wadarta. Hubi inaad qaybta u qaybisay wadarta, ee aadan lidkeeda samayn.",
      "Parça toplamdan küçük veya toplama eşitse sonuç 0% ile 100% arasındadır. Parçayı toplama böldüğünü, tersini yapmadığını kontrol et.",
      "که برخه له ټول څخه کمه يا ورسره برابره وي، پايله د 0% او 100% ترمنځ وي. وګورئ چې برخه مو پر ټول وېشلې، نه برعکس."
    ) },
  ],
};
