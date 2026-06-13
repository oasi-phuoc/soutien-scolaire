import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });
const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A8_1: SubmoduleTrad = {
  submoduleId: "A8-1",
  title: S("Notion et représentation", "Concept and representation", "المفهوم والتمثيل", "مفهوم و نمایش", "ሓሳብን ውክልናን", "Поняття і запис", "Noção e representação", "Fikrad iyo matalaad", "Kavram ve gösterim", "مفهوم او ښودنه"),
  blocks: [
    { text: S("Qu'est-ce qu'une puissance ?", "What is a power?", "ما هو الأس؟", "توان چیست؟", "ሓይሊ እንታይ እዩ?", "Що таке степінь?", "O que é uma potência?", "Waa maxay awood?", "Üs nedir?", "توان څه شی دی؟") },
    { text: S(
      "Une puissance est une façon rapide d'écrire une multiplication répétée. Elle est composée de deux éléments : la **base** et l'**exposant**.",
      "A power is a quick way to write a repeated multiplication. It has two parts: the **base** and the **exponent**.",
      "الأس طريقة سريعة لكتابة ضرب متكرر. يتكوّن من عنصرين: **الأساس** و**الأس**.",
      "توان راهی سریع برای نوشتن ضرب تکراری است. دو بخش دارد: **پایه** و **نما**.",
      "ሓይሊ ተደጋጋሚ ምብዛሕ ብቕልጡፍ ንምጽሓፍ ዝጠቅም መንገዲ እዩ። ክልተ ክፋላት ኣለውዎ፦ **መሰረት**ን **ኤክስፖናንት**ን።",
      "Степінь — це швидкий спосіб записати повторене множення. Він має дві частини: **основу** і **показник**.",
      "Uma potência é uma forma rápida de escrever uma multiplicação repetida. Tem dois elementos: a **base** e o **expoente**.",
      "Awooddu waa hab degdeg ah oo lagu qoro isku-dhufasho soo noqnoqota. Waxay leedahay laba qaybood: **saldhig** iyo **jibbaar**.",
      "Üs, tekrarlı çarpmayı hızlı yazmanın bir yoludur. İki bölümden oluşur: **taban** ve **üs**.",
      "توان د تکراري ضرب د ليکلو چټکه لاره ده. دوه برخې لري: **بنسټ** او **توان**."
    ) },
    { text: S("Notation puissance", "Power notation", "كتابة الأس", "نمایش توان", "ምልክት ሓይሊ", "Запис степеня", "Notação de potência", "Qorista awoodda", "Üslü gösterim", "د توان ليکنه"), items: A(
      ["aⁿ = a × a × a × … × a (n fois)", "**Base** = le nombre qu'on répète", "**Exposant** = le nombre de fois qu'on multiplie la base par elle-même"],
      ["aⁿ = a × a × a × … × a (n times)", "**Base** = the number repeated", "**Exponent** = how many times the base is multiplied by itself"],
      ["aⁿ = a × a × a × … × a (عدد n من المرات)", "**الأساس** = العدد الذي نكرره", "**الأس** = عدد مرات ضرب الأساس في نفسه"],
      ["aⁿ = a × a × a × … × a (n بار)", "**پایه** = عددی که تکرار می‌شود", "**نما** = تعداد دفعات ضرب پایه در خودش"],
      ["aⁿ = a × a × a × … × a (n ግዜ)", "**መሰረት** = ዝድገም ቁጽሪ", "**ኤክስፖናንት** = መሰረት ብርእሱ ክንደይ ግዜ ከምዝበዝሕ"],
      ["aⁿ = a × a × a × … × a (n разів)", "**Основа** = число, яке повторюється", "**Показник** = скільки разів основу множать саму на себе"],
      ["aⁿ = a × a × a × … × a (n vezes)", "**Base** = o número que se repete", "**Expoente** = quantas vezes se multiplica a base por ela própria"],
      ["aⁿ = a × a × a × … × a (n jeer)", "**Saldhig** = tirada la celceliyo", "**Jibbaar** = inta jeer ee saldhigga la isku dhufto"],
      ["aⁿ = a × a × a × … × a (n kez)", "**Taban** = tekrarlanan sayı", "**Üs** = tabanın kendisiyle kaç kez çarpıldığı"],
      ["aⁿ = a × a × a × … × a (n ځله)", "**بنسټ** = تکرارېدونکی عدد", "**توان** = بنسټ څو ځله په خپل ځان ضربېږي"]
    ) },
    { text: S("2³ = 2 × 2 × 2 = 8\nOn lit : « 2 exposant 3 » ou « 2 à la puissance 3 »", "2³ = 2 × 2 × 2 = 8\nRead: “2 exponent 3” or “2 to the power of 3”", "2³ = 2 × 2 × 2 = 8\nنقرأ: «2 أس 3»", "2³ = 2 × 2 × 2 = 8\nمی‌خوانیم: «2 به توان 3»", "2³ = 2 × 2 × 2 = 8\nንብሎ፦ «2 ኤክስፖናንት 3»", "2³ = 2 × 2 × 2 = 8\nЧитаємо: «2 у степені 3»", "2³ = 2 × 2 × 2 = 8\nLê-se: «2 elevado a 3»", "2³ = 2 × 2 × 2 = 8\nWaxaa la akhriyaa: “2 awoodda 3”", "2³ = 2 × 2 × 2 = 8\n“2 üzeri 3” diye okunur", "2³ = 2 × 2 × 2 = 8\nلوستل کېږي: «2 د 3 توان»") },
    { text: S("Cas particuliers importants", "Important special cases", "حالات خاصة مهمة", "حالت‌های ویژه مهم", "ፍሉያት ኣገደስቲ ኩነታት", "Важливі особливі випадки", "Casos particulares importantes", "Xaalado gaar ah oo muhiim ah", "Önemli özel durumlar", "مهم ځانګړي حالتونه") },
    { label: S("À retenir", "Remember", "للتذكر", "به خاطر بسپار", "ክትዝክሮ", "Запам'ятати", "A reter", "Xusuusnow", "Akılda tut", "په ياد ولرئ"), items: A(
      ["Tout nombre à la puissance 1 est lui-même : 5¹ = 5", "Tout nombre non nul à la puissance 0 vaut 1 : 7⁰ = 1"],
      ["Any number to the power of 1 is itself: 5¹ = 5", "Any non-zero number to the power of 0 equals 1: 7⁰ = 1"],
      ["أي عدد أسه 1 يساوي نفسه: 5¹ = 5", "أي عدد غير صفر أسه 0 يساوي 1: 7⁰ = 1"],
      ["هر عدد به توان 1 خودش است: 5¹ = 5", "هر عدد غیر صفر به توان 0 برابر 1 است: 7⁰ = 1"],
      ["ዝኾነ ቁጽሪ ብሓይሊ 1 ርእሱ እዩ፦ 5¹ = 5", "ዜሮ ዘይኮነ ቁጽሪ ብሓይሊ 0 ማዕረ 1 እዩ፦ 7⁰ = 1"],
      ["Будь-яке число в степені 1 дорівнює самому собі: 5¹ = 5", "Будь-яке ненульове число в степені 0 дорівнює 1: 7⁰ = 1"],
      ["Qualquer número elevado a 1 é ele próprio: 5¹ = 5", "Qualquer número não nulo elevado a 0 vale 1: 7⁰ = 1"],
      ["Tiro kasta oo awooddeedu tahay 1 waa tiradaas lafteeda: 5¹ = 5", "Tiro kasta oo aan eber ahayn awoodda 0 waxay noqotaa 1: 7⁰ = 1"],
      ["1. kuvvetteki her sayı kendisidir: 5¹ = 5", "Sıfır olmayan her sayının 0. kuvveti 1'dir: 7⁰ = 1"],
      ["هر عدد د 1 توان سره خپل ځان دی: 5¹ = 5", "هر غير صفر عدد د 0 توان سره 1 دی: 7⁰ = 1"]
    ) },
    { text: S("Attention : 2³ ≠ 2 × 3. La puissance est une multiplication répétée, pas une multiplication simple.", "Careful: 2³ ≠ 2 × 3. A power is repeated multiplication, not simple multiplication.", "انتبه: 2³ ≠ 2 × 3. الأس ضرب متكرر وليس ضربا بسيطا.", "دقت کن: 2³ ≠ 2 × 3. توان ضرب تکراری است، نه ضرب ساده.", "ተጠንቀቕ፦ 2³ ≠ 2 × 3። ሓይሊ ተደጋጋሚ ምብዛሕ እዩ፣ ቀሊል ምብዛሕ ኣይኮነን።", "Увага: 2³ ≠ 2 × 3. Степінь — це повторене множення, а не звичайне множення.", "Atenção: 2³ ≠ 2 × 3. Uma potência é uma multiplicação repetida, não uma multiplicação simples.", "Taxaddar: 2³ ≠ 2 × 3. Awooddu waa isku-dhufasho soo noqnoqota, ma aha isku-dhufasho fudud.", "Dikkat: 2³ ≠ 2 × 3. Üs, tekrarlı çarpmadır; basit çarpma değildir.", "پام: 2³ ≠ 2 × 3. توان تکراري ضرب دی، ساده ضرب نه دی.") },
    { headers: A(
      ["Expression", "Développement", "Résultat"],
      ["Expression", "Expanded form", "Result"],
      ["العبارة", "النشر", "النتيجة"],
      ["عبارت", "گسترش", "نتیجه"],
      ["ሓረግ", "ምዝርጋሕ", "ውጽኢት"],
      ["Вираз", "Розклад", "Результат"],
      ["Expressão", "Desenvolvimento", "Resultado"],
      ["Weedh", "Fidinta", "Natiijo"],
      ["İfade", "Açılım", "Sonuç"],
      ["عبارت", "پراختيا", "پايله"]
    ) },
    { text: S("Table des puissances (exposants 1 à 5)", "Table of powers (exponents 1 to 5)", "جدول القوى (الأسس من 1 إلى 5)", "جدول توان‌ها (نماهای 1 تا 5)", "ሰንጠረዥ ሓይልታት (ኤክስፖናንት 1 ክሳብ 5)", "Таблиця степенів (показники від 1 до 5)", "Tabela de potências (expoentes 1 a 5)", "Jadwalka awoodaha (jibbaarada 1 ilaa 5)", "Üs tablosu (1'den 5'e)", "د توانونو جدول (له 1 تر 5)") },
  ],
};
