import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });
const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A8_4: SubmoduleTrad = {
  submoduleId: "A8-4",
  title: S("Racine carrée", "Square root", "الجذر التربيعي", "ریشه مربع", "ሱር ካሬ", "Квадратний корінь", "Raiz quadrada", "Xidid laba jibbaaran", "Karekök", "مربع ريښه"),
  blocks: [
    { text: S("Qu'est-ce que la racine carrée ?", "What is a square root?", "ما هو الجذر التربيعي؟", "ریشه مربع چیست؟", "ሱር ካሬ እንታይ እዩ?", "Що таке квадратний корінь?", "O que é a raiz quadrada?", "Waa maxay xidid laba jibbaaran?", "Karekök nedir?", "مربع ريښه څه ده؟") },
    { text: S(
      "La racine carrée est l'opération inverse de la puissance 2. **√a** est le nombre positif dont le carré vaut **a**.",
      "The square root is the inverse operation of power 2. **√a** is the positive number whose square equals **a**.",
      "الجذر التربيعي هو العملية العكسية للقوة 2. **√a** هو العدد الموجب الذي مربعه يساوي **a**.",
      "ریشه مربع عمل وارون توان 2 است. **√a** عدد مثبتی است که مربع آن برابر **a** می‌شود.",
      "ሱር ካሬ ተጻራሪ ስርሒት ናይ ሓይሊ 2 እዩ። **√a** እቲ ካሬኡ **a** ዝኸውን ኣወንታዊ ቁጽሪ እዩ።",
      "Квадратний корінь — це обернена дія до піднесення до степеня 2. **√a** — це додатне число, квадрат якого дорівнює **a**.",
      "A raiz quadrada é a operação inversa da potência 2. **√a** é o número positivo cujo quadrado é **a**.",
      "Xididka laba jibbaaran waa hawsha ka soo horjeedda awoodda 2. **√a** waa tirada togan ee labajibbaarkeedu yahay **a**.",
      "Karekök, 2. kuvvetin ters işlemidir. **√a**, karesi **a** olan pozitif sayıdır.",
      "مربع ريښه د 2 توان برعکس عمل دی. **√a** هغه مثبت عدد دی چې مربع يې **a** وي."
    ) },
    { text: S("Question clé", "Key question", "السؤال الأساسي", "پرسش اصلی", "ቁልፊ ሕቶ", "Ключове питання", "Pergunta-chave", "Su'aasha muhiimka ah", "Temel soru", "اصلي پوښتنه") },
    { text: S(
      "Quel nombre, multiplié par lui-même, donne ce résultat ?",
      "Which number, multiplied by itself, gives this result?",
      "أي عدد إذا ضرب في نفسه يعطي هذه النتيجة؟",
      "کدام عدد وقتی در خودش ضرب شود این نتیجه را می‌دهد؟",
      "እንታይ ቁጽሪ ብርእሱ እንተተባዚሑ ነዚ ውጽኢት ይህብ?",
      "Яке число, помножене саме на себе, дає цей результат?",
      "Que número, multiplicado por ele próprio, dá este resultado?",
      "Tirodee, marka iyada lafteeda lagu dhufto, natiijadan bixisa?",
      "Hangi sayı kendisiyle çarpıldığında bu sonucu verir?",
      "کوم عدد چې په خپل ځان ضرب شي دا پايله ورکوي؟"
    ) },
    { text: S("Carrés parfaits à connaître", "Perfect squares to know", "مربعات كاملة يجب معرفتها", "مربع‌های کامل برای دانستن", "ፍጹማት ካሬታት ክፍለጡ ዘለዎም", "Повні квадрати, які треба знати", "Quadrados perfeitos a conhecer", "Labajibbaarro dhammaystiran oo la ogaado", "Bilinmesi gereken tam kareler", "بشپړ مربعونه چې بايد وپېژندل شي") },
    { items: A(
      ["√9 = 3 car 3 × 3 = 9", "√25 = 5 car 5 × 5 = 25", "√36 = 6 car 6 × 6 = 36"],
      ["√9 = 3 because 3 × 3 = 9", "√25 = 5 because 5 × 5 = 25", "√36 = 6 because 6 × 6 = 36"],
      ["√9 = 3 لأن 3 × 3 = 9", "√25 = 5 لأن 5 × 5 = 25", "√36 = 6 لأن 6 × 6 = 36"],
      ["√9 = 3 چون 3 × 3 = 9", "√25 = 5 چون 5 × 5 = 25", "√36 = 6 چون 6 × 6 = 36"],
      ["√9 = 3 ምኽንያቱ 3 × 3 = 9", "√25 = 5 ምኽንያቱ 5 × 5 = 25", "√36 = 6 ምኽንያቱ 6 × 6 = 36"],
      ["√9 = 3, бо 3 × 3 = 9", "√25 = 5, бо 5 × 5 = 25", "√36 = 6, бо 6 × 6 = 36"],
      ["√9 = 3 porque 3 × 3 = 9", "√25 = 5 porque 5 × 5 = 25", "√36 = 6 porque 6 × 6 = 36"],
      ["√9 = 3 sababtoo ah 3 × 3 = 9", "√25 = 5 sababtoo ah 5 × 5 = 25", "√36 = 6 sababtoo ah 6 × 6 = 36"],
      ["√9 = 3 çünkü 3 × 3 = 9", "√25 = 5 çünkü 5 × 5 = 25", "√36 = 6 çünkü 6 × 6 = 36"],
      ["√9 = 3 ځکه 3 × 3 = 9", "√25 = 5 ځکه 5 × 5 = 25", "√36 = 6 ځکه 6 × 6 = 36"]
    ) },
    { headers: A(
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"],
      ["n", "n²", "√(n²)"]
    ) },
    { text: S("Propriété de la racine carrée", "Property of the square root", "خاصية الجذر التربيعي", "ویژگی ریشه مربع", "ባህሪ ሱር ካሬ", "Властивість квадратного кореня", "Propriedade da raiz quadrada", "Sifada xididka laba jibbaaran", "Karekök özelliği", "د مربع ريښې ځانګړنه") },
    { text: S("√(a × b) = √a × √b", "√(a × b) = √a × √b", "√(a × b) = √a × √b", "√(a × b) = √a × √b", "√(a × b) = √a × √b", "√(a × b) = √a × √b", "√(a × b) = √a × √b", "√(a × b) = √a × √b", "√(a × b) = √a × √b", "√(a × b) = √a × √b") },
    { text: S("√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6", "√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6") },
  ],
};
