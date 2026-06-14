import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });
const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A8_3: SubmoduleTrad = {
  submoduleId: "A8-3",
  title: S("Puissances de 10", "Powers of 10", "قوى العدد 10", "توان‌های 10", "ሓይልታት 10", "Степені числа 10", "Potências de 10", "Awoodaha 10", "10'un kuvvetleri", "د 10 توانونه"),
  blocks: [
    { text: S("Les puissances de 10", "Powers of 10", "قوى العدد 10", "توان‌های 10", "ሓይልታት 10", "Степені 10", "Potências de 10", "Awoodaha 10", "10'un kuvvetleri", "د 10 توانونه") },
    { text: S(
      "Les puissances de 10 facilitent l'écriture des grands nombres. Une puissance de 10 positive s'obtient en plaçant autant de zéros que l'exposant après le chiffre 1.",
      "Powers of 10 make large numbers easier to write. A positive power of 10 is made by placing as many zeros as the exponent after the digit 1.",
      "تسهل قوى 10 كتابة الأعداد الكبيرة. نحصل على قوة موجبة للعدد 10 بوضع عدد من الأصفار يساوي الأس بعد الرقم 1.",
      "توان‌های 10 نوشتن عددهای بزرگ را آسان می‌کنند. توان مثبت 10 با قرار دادن به تعداد نما صفر بعد از عدد 1 به دست می‌آید.",
      "ሓይልታት 10 ዓበይቲ ቁጽርታት ንምጽሓፍ የቃልሉ። ኣወንታዊ ሓይሊ 10 ድሕሪ 1 ከም ኤክስፖናንት ብዝኾነ ብዙሕ ዜሮ ብምውሳኽ ይርከብ።",
      "Степені 10 полегшують запис великих чисел. Додатний степінь 10 отримуємо, записуючи після 1 стільки нулів, скільки показує показник.",
      "As potências de 10 facilitam a escrita de números grandes. Uma potência positiva de 10 obtém-se colocando tantos zeros quanto o expoente depois do algarismo 1.",
      "Awoodaha 10 waxay fududeeyaan qorista tirooyinka waaweyn. Awood togan oo 10 ah waxaa la helaa iyadoo 1 ka dib la dhigo eberro u dhigma jibbaarka.",
      "10'un kuvvetleri büyük sayıları yazmayı kolaylaştırır. Pozitif bir 10 kuvveti, 1 rakamından sonra üs kadar sıfır yazılarak elde edilir.",
      "د 10 توانونه د لويو عددونو ليکل اسانه کوي. د 10 مثبت توان د 1 وروسته د توان په اندازه صفرونو په اېښودلو جوړېږي."
    ) },
    { headers: A(
      ["Puissance", "Valeur", "Nombre de zéros"],
      ["Power", "Value", "Number of zeros"],
      ["القوة", "القيمة", "عدد الأصفار"],
      ["توان", "مقدار", "تعداد صفرها"],
      ["ሓይሊ", "ዋጋ", "ብዝሒ ዜሮታት"],
      ["Степінь", "Значення", "Кількість нулів"],
      ["Potência", "Valor", "Número de zeros"],
      ["Awood", "Qiime", "Tirada eberrada"],
      ["Kuvvet", "Değer", "Sıfır sayısı"],
      ["توان", "ارزښت", "د صفرونو شمېر"]
    ) },
    { text: S("Puissances de 10 négatives", "Negative powers of 10", "القوى السالبة للعدد 10", "توان‌های منفی 10", "ኣሉታዊ ሓይልታት 10", "Від'ємні степені 10", "Potências negativas de 10", "Awoodaha taban ee 10", "10'un negatif kuvvetleri", "د 10 منفي توانونه") },
    { text: S(
      "Les puissances négatives de 10 donnent des nombres décimaux inférieurs à 1.",
      "Negative powers of 10 give decimal numbers less than 1.",
      "القوى السالبة للعدد 10 تعطي أعدادا عشرية أصغر من 1.",
      "توان‌های منفی 10 عددهای اعشاری کوچک‌تر از 1 می‌دهند.",
      "ኣሉታዊ ሓይልታት 10 ካብ 1 ዝንእሱ ዲሲማል ቁጽርታት ይህቡ።",
      "Від'ємні степені 10 дають десяткові числа, менші за 1.",
      "As potências negativas de 10 dão números decimais inferiores a 1.",
      "Awoodaha taban ee 10 waxay bixiyaan tirooyin jajab tobanle ah oo ka yar 1.",
      "10'un negatif kuvvetleri 1'den küçük ondalık sayılar verir.",
      "د 10 منفي توانونه له 1 څخه کوچني اعشاري عددونه ورکوي."
    ) },
    { text: S("Notation scientifique", "Scientific notation", "الكتابة العلمية", "نمادگذاری علمی", "ሳይንሳዊ ጽሕፈት", "Науковий запис", "Notação científica", "Qoris cilmiyeed", "Bilimsel gösterim", "علمي ليکنه") },
    { text: S(
      "La notation scientifique s'écrit sous la forme **a × 10ⁿ**, où **1 ≤ a < 10**. Elle permet d'exprimer les très grands et les très petits nombres.",
      "Scientific notation is written as **a × 10ⁿ**, where **1 ≤ a < 10**. It is used for very large and very small numbers.",
      "تكتب الصيغة العلمية على الشكل **a × 10ⁿ** حيث **1 ≤ a < 10**. وتستعمل للأعداد الكبيرة جدا والصغيرة جدا.",
      "نمادگذاری علمی به صورت **a × 10ⁿ** نوشته می‌شود که در آن **1 ≤ a < 10** است. برای عددهای بسیار بزرگ و بسیار کوچک به کار می‌رود.",
      "ሳይንሳዊ ጽሕፈት ብ **a × 10ⁿ** ይጽሓፍ፣ **1 ≤ a < 10** እዩ። ንኣዝዮም ዓበይትን ኣዝዮም ንኣሽቱን ቁጽርታት ይጠቅም።",
      "Науковий запис має вигляд **a × 10ⁿ**, де **1 ≤ a < 10**. Він потрібний для дуже великих і дуже малих чисел.",
      "A notação científica escreve-se na forma **a × 10ⁿ**, em que **1 ≤ a < 10**. Serve para números muito grandes e muito pequenos.",
      "Qorista cilmiyeed waxay u qoran tahay **a × 10ⁿ**, halka **1 ≤ a < 10**. Waxay ku habboon tahay tirooyin aad u waaweyn ama aad u yaryar.",
      "Bilimsel gösterim **a × 10ⁿ** biçimindedir; burada **1 ≤ a < 10**. Çok büyük ve çok küçük sayılar için kullanılır.",
      "علمي ليکنه د **a × 10ⁿ** په بڼه وي، چې **1 ≤ a < 10**. د ډېر لويو او ډېر کوچنيو عددونو لپاره کارېږي."
    ) },
    { text: S("Exemples", "Examples", "أمثلة", "مثال‌ها", "ኣብነታት", "Приклади", "Exemplos", "Tusaalooyin", "Örnekler", "بېلګې") },
    { items: A(
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"],
      ["4,700,000 = 4.7 × 10⁶", "0.000 035 = 3.5 × 10⁻⁵", "300,000 = 3 × 10⁵"],
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"],
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"],
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"],
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"],
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"],
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"],
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"],
      ["4 700 000 = 4,7 × 10⁶", "0,000 035 = 3,5 × 10⁻⁵", "300 000 = 3 × 10⁵"]
    ) },
  ],
};
