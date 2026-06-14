import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A7_5: SubmoduleTrad = {
  submoduleId: "A7-5",
  title: S(
    "Valeur absolue",
    "Absolute value",
    "القيمة المطلقة",
    "قدر مطلق",
    "ፍጹም ዋጋ",
    "Абсолютне значення",
    "Valor absoluto",
    "Qiimaha mutlaq",
    "Mutlak değer",
    "مطلق ارزښت",
  ),
  blocks: [
    // 0 — heading "La valeur absolue" black:true
    {
      text: S(
        "La valeur absolue",
        "Absolute value",
        "القيمة المطلقة",
        "قدر مطلق",
        "ፍጹም ዋጋ",
        "Абсолютне значення",
        "O valor absoluto",
        "Qiimaha mutlaq",
        "Mutlak değer",
        "مطلق ارزښت",
      ),
    },

    // 1 — highlight "Définition"
    {
      text: S(
        "Définition",
        "Definition",
        "تعريف",
        "تعریف",
        "ትርጉም",
        "Визначення",
        "Definição",
        "Qeexid",
        "Tanım",
        "تعریف",
      ),
    },

    // 2 — section labelFr:"", 3 items about absolute value definition
    {
      label: S("", "", "", "", "", "", "", "", "", ""),
      items: A(
        [
          "La valeur absolue d'un nombre est sa **distance à 0** sur la droite numérique.",
          "Elle est **toujours positive** ou nulle.",
          "Notation : |a| (barres verticales autour du nombre).",
        ],
        [
          "The absolute value of a number is its **distance from 0** on the number line.",
          "It is **always positive** or zero.",
          "Notation: |a| (vertical bars around the number).",
        ],
        [
          "القيمة المطلقة لعدد هي **مسافته عن 0** على المستقيم العددي.",
          "هي **دائما موجبة** أو تساوي صفرا.",
          "الكتابة: |a| (خطّان عموديان حول العدد).",
        ],
        [
          "قدر مطلق یک عدد **فاصله آن تا 0** روی محور اعداد است.",
          "همیشه **مثبت** یا صفر است.",
          "نمادگذاری: |a| (دو خط عمودی دور عدد).",
        ],
        [
          "ፍጹም ዋጋ ናይ ቁጽሪ ኣብ መስመር ቁጽሪ **ርሕቀቱ ካብ 0** እዩ።",
          "ኩሉ ግዜ **ኣዎንታዊ** ወይ ዜሮ እዩ።",
          "ምልክት: |a| (ቀጥታዊ መስመራት ኣብ ዙርያ ቁጽሪ).",
        ],
        [
          "Абсолютне значення числа — це його **відстань від 0** на числовій прямій.",
          "Воно **завжди додатне** або дорівнює нулю.",
          "Позначення: |a| (вертикальні риски навколо числа).",
        ],
        [
          "O valor absoluto de um número é a sua **distância até 0** na reta numérica.",
          "É **sempre positivo** ou zero.",
          "Notação: |a| (barras verticais à volta do número).",
        ],
        [
          "Qiimaha mutlaq ee tiro waa **masaafaddeeda ilaa 0** ee xariiqda tirooyinka.",
          "Had iyo jeer waa **togan** ama eber.",
          "Qoraal: |a| (xariiqyo toosan oo ku wareegsan tirada).",
        ],
        [
          "Bir sayının mutlak değeri, sayı doğrusunda **0'a uzaklığıdır**.",
          "**Her zaman pozitiftir** veya sıfırdır.",
          "Gösterim: |a| (sayının etrafındaki dikey çizgiler).",
        ],
        [
          "د يو عدد مطلق ارزښت د عددونو پر کرښه له 0 څخه د هغه **واټن** دی.",
          "دا تل **مثبت** يا صفر وي.",
          "نښه: |a| (د عدد شاوخوا عمودي کرښې).",
        ],
      ),
    },

    // 3 — plain fr:"" — spacer
    {},

    // 4 — heading "Exemples" (no black)
    {
      text: S(
        "Exemples",
        "Examples",
        "أمثلة",
        "مثال‌ها",
        "ኣብነታት",
        "Приклади",
        "Exemplos",
        "Tusaalooyin",
        "Örnekler",
        "بېلګې",
      ),
    },

    // 5 — table headers:["Nombre","Valeur absolue","Explication"], rows with French "distance à 0" text
    {
      headers: {
        fr: ["Nombre", "Valeur absolue", "Explication"],
        en: ["Number", "Absolute value", "Explanation"],
        ar: ["العدد", "القيمة المطلقة", "الشرح"],
        fa: ["عدد", "قدر مطلق", "توضیح"],
        ti: ["ቁጽሪ", "ፍጹም ዋጋ", "መብርሂ"],
        uk: ["Число", "Абсолютне значення", "Пояснення"],
        pt: ["Número", "Valor absoluto", "Explicação"],
        so: ["Tiro", "Qiime mutlaq", "Sharaxaad"],
        tr: ["Sayı", "Mutlak değer", "Açıklama"],
        ps: ["عدد", "مطلق ارزښت", "تشريح"],
      },
      items: A(
        [
          "**−**5 | |**−**5| = 5 | distance à 0 = 5",
          "**+**5 | |**+**5| = 5 | distance à 0 = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | distance à 0 = 3,7",
          "0 | |0| = 0 | distance à 0 = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | distance from 0 = 5",
          "**+**5 | |**+**5| = 5 | distance from 0 = 5",
          "**−**3.7 | |**−**3.7| = 3.7 | distance from 0 = 3.7",
          "0 | |0| = 0 | distance from 0 = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | المسافة إلى 0 = 5",
          "**+**5 | |**+**5| = 5 | المسافة إلى 0 = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | المسافة إلى 0 = 3,7",
          "0 | |0| = 0 | المسافة إلى 0 = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | فاصله تا 0 = 5",
          "**+**5 | |**+**5| = 5 | فاصله تا 0 = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | فاصله تا 0 = 3,7",
          "0 | |0| = 0 | فاصله تا 0 = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | ርሕቀት ካብ 0 = 5",
          "**+**5 | |**+**5| = 5 | ርሕቀት ካብ 0 = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | ርሕቀት ካብ 0 = 3,7",
          "0 | |0| = 0 | ርሕቀት ካብ 0 = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | відстань від 0 = 5",
          "**+**5 | |**+**5| = 5 | відстань від 0 = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | відстань від 0 = 3,7",
          "0 | |0| = 0 | відстань від 0 = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | distância até 0 = 5",
          "**+**5 | |**+**5| = 5 | distância até 0 = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | distância até 0 = 3,7",
          "0 | |0| = 0 | distância até 0 = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | masaafada ilaa 0 = 5",
          "**+**5 | |**+**5| = 5 | masaafada ilaa 0 = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | masaafada ilaa 0 = 3,7",
          "0 | |0| = 0 | masaafada ilaa 0 = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | 0'a uzaklık = 5",
          "**+**5 | |**+**5| = 5 | 0'a uzaklık = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | 0'a uzaklık = 3,7",
          "0 | |0| = 0 | 0'a uzaklık = 0",
        ],
        [
          "**−**5 | |**−**5| = 5 | له 0 واټن = 5",
          "**+**5 | |**+**5| = 5 | له 0 واټن = 5",
          "**−**3,7 | |**−**3,7| = 3,7 | له 0 واټن = 3,7",
          "0 | |0| = 0 | له 0 واټن = 0",
        ],
      ),
    },

    // 6 — plain fr:"" — spacer
    {},

    // 7 — note "−8 et +8 ont la même valeur absolue (8)..."
    {
      text: S(
        "−8 et +8 ont la même valeur absolue (8) : ils sont à égale distance de 0. Ce sont des opposés.",
        "−8 and +8 have the same absolute value (8): they are at the same distance from 0. They are opposites.",
        "−8 و +8 لهما القيمة المطلقة نفسها (8): هما على المسافة نفسها من 0. إنهما عددان متعاكسان.",
        "−8 و +8 قدر مطلق یکسانی دارند (8): از 0 فاصله برابر دارند. آن‌ها قرینه هم هستند.",
        "−8 እና +8 ሓደ ዓይነት ፍጹም ዋጋ (8) ኣለዎም፡ ካብ 0 ማዕረ ርሕቀት ኣለዎም። ተጻራሪ ቁጽርታት እዮም።",
        "−8 і +8 мають однакове абсолютне значення (8): вони на однаковій відстані від 0. Це протилежні числа.",
        "−8 e +8 têm o mesmo valor absoluto (8): estão à mesma distância de 0. São opostos.",
        "−8 iyo +8 waxay leeyihiin qiime mutlaq isku mid ah (8): waxay 0 uga jiraan masaafad isku mid ah. Waa laba tiro oo is lid ah.",
        "−8 ve +8 aynı mutlak değere (8) sahiptir: 0'a eşit uzaklıktadırlar. Bunlar ters sayılardır.",
        "−8 او +8 يو شان مطلق ارزښت لري (8): له 0 څخه برابر واټن لري. دا مقابل عددونه دي.",
      ),
    },
  ],
};
