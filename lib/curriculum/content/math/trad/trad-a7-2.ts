import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A7_2: SubmoduleTrad = {
  submoduleId: "A7-2",
  title: {
    fr: "Comparer les relatifs",
    en: "Comparing relative numbers",
    ar: "مقارنة الأعداد النسبية",
    fa: "مقایسه عددهای نسبی",
    pt: "Comparar números relativos",
    so: "Isbarbardhigga tirooyinka xiriirka leh",
    ti: "ተዛማዲ ቁጽርታት ምውድዳር",
    tr: "İşaretli sayıları karşılaştırma",
    ps: "د نسبي عددونو پرتله",
    uk: "Порівняння відносних чисел",
  },
  blocks: [
    { text: { fr: "Comparer deux nombres relatifs", en: "Compare two relative numbers", ar: "قارن عددين نسبيين", fa: "دو عدد نسبی را مقایسه کن", pt: "Comparar dois números relativos", so: "Isbarbardhig laba tiro oo xiriir leh", ti: "ክልተ ተዛማዲ ቁጽርታት ኣወዳድር", tr: "İki işaretli sayıyı karşılaştır", ps: "دوه نسبي عددونه پرتله کړه", uk: "Порівняй два відносні числа" } },
    {
      text: { fr: "", en: "", ar: "", fa: "", pt: "", so: "", ti: "", tr: "", ps: "", uk: "" },
      items: {
        fr: ["Tout nombre **négatif** est toujours plus petit qu'un nombre **positif**.", "Entre deux négatifs : le **plus grand** est le plus proche de 0."],
        en: ["Any **negative** number is always smaller than a **positive** number.", "Between two negative numbers, the **greater** one is closer to 0."],
        ar: ["كل عدد **سالب** أصغر دائما من عدد **موجب**.", "بين عددين سالبين: **الأكبر** هو الأقرب إلى 0."],
        fa: ["هر عدد **منفی** همیشه از عدد **مثبت** کوچک تر است.", "بین دو عدد منفی، عدد **بزرگ تر** به 0 نزدیک تر است."],
        pt: ["Qualquer número **negativo** é sempre menor que um número **positivo**.", "Entre dois negativos, o **maior** é o mais próximo de 0."],
        so: ["Tiro kasta oo **taban** had iyo jeer way ka yar tahay tiro **togan**.", "Labada tiro ee taban dhexdooda, tan **weyn** waa tan 0 ugu dhow."],
        ti: ["ዝኾነ **ኣሉታዊ** ቁጽሪ ካብ **ኣዎንታዊ** ቁጽሪ ኩሉ ግዜ ይንእስ።", "ኣብ መንጎ ክልተ ኣሉታዊ ቁጽርታት፡ እቲ **ዝዓቢ** ናብ 0 ዝቐረበ እዩ።"],
        tr: ["Her **negatif** sayı, her zaman **pozitif** bir sayıdan küçüktür.", "İki negatif sayı arasında **büyük** olan 0'a daha yakındır."],
        ps: ["هر **منفي** عدد تل له **مثبت** عدد څخه کوچنی وي.", "د دوو منفي عددونو ترمنځ، **لوی** عدد هغه دی چې 0 ته نږدې وي."],
        uk: ["Будь-яке **від'ємне** число завжди менше за **додатне** число.", "Між двома від'ємними числами **більше** те, що ближче до 0."],
      },
    },
    {},
    { text: { fr: "Exemples", en: "Examples", ar: "أمثلة", fa: "مثال ها", pt: "Exemplos", so: "Tusaalooyin", ti: "ኣብነታት", tr: "Örnekler", ps: "بېلګې", uk: "Приклади" } },
    { headers: { fr: ["Comparaison", "Résultat", "Raison"], en: ["Comparison", "Result", "Reason"], ar: ["المقارنة", "النتيجة", "السبب"], fa: ["مقایسه", "نتیجه", "دلیل"], pt: ["Comparação", "Resultado", "Razão"], so: ["Isbarbardhig", "Natiijo", "Sabab"], ti: ["ምውድዳር", "ውጽኢት", "ምኽንያት"], tr: ["Karşılaştırma", "Sonuç", "Sebep"], ps: ["پرتله", "پايله", "دليل"], uk: ["Порівняння", "Результат", "Причина"] } },
    {},
    { text: { fr: "Sur la droite numérique", en: "On the number line", ar: "على المستقيم العددي", fa: "روی محور اعداد", pt: "Na reta numérica", so: "Xariiqda tirooyinka dusheeda", ti: "ኣብ መስመር ቁጽሪ", tr: "Sayı doğrusu üzerinde", ps: "د عددونو پر کرښه", uk: "На числовій прямій" } },
    {
      items: {
        fr: ["Un nombre est **plus grand** que tous les nombres à sa gauche.", "Un nombre est **plus petit** que tous les nombres à sa droite."],
        en: ["A number is **greater** than all numbers to its left.", "A number is **smaller** than all numbers to its right."],
        ar: ["العدد **أكبر** من كل الأعداد الموجودة على يساره.", "العدد **أصغر** من كل الأعداد الموجودة على يمينه."],
        fa: ["یک عدد از همه عددهای سمت چپ خود **بزرگ تر** است.", "یک عدد از همه عددهای سمت راست خود **کوچک تر** است."],
        pt: ["Um número é **maior** que todos os números à sua esquerda.", "Um número é **menor** que todos os números à sua direita."],
        so: ["Tiro waxay ka **weyn** tahay dhammaan tirooyinka bidixdeeda yaal.", "Tiro waxay ka **yar** tahay dhammaan tirooyinka midigteeda yaal."],
        ti: ["ቁጽሪ ካብ ኩሎም ብጸጋሙ ዘለዉ ቁጽርታት **ይዓቢ**።", "ቁጽሪ ካብ ኩሎም ብየማኑ ዘለዉ ቁጽርታት **ይንእስ**።"],
        tr: ["Bir sayı, solundaki tüm sayılardan **büyüktür**.", "Bir sayı, sağındaki tüm sayılardan **küçüktür**."],
        ps: ["يو عدد د خپل کيڼ لوري له ټولو عددونو څخه **لوی** دی.", "يو عدد د خپل ښي لوري له ټولو عددونو څخه **کوچنی** دی."],
        uk: ["Число **більше** за всі числа ліворуч від нього.", "Число **менше** за всі числа праворуч від нього."],
      },
    },
  ],
};
