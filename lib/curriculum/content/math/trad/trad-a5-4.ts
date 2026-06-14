import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string, pt: string, so: string, tr: string, ps: string) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

const A = (fr: string[], en: string[], ar: string[], fa: string[], ti: string[], uk: string[], pt: string[], so: string[], tr: string[], ps: string[]) =>
  ({ fr, en, ar, fa, ti, uk, pt, so, tr, ps });

export const TRAD_A5_4: SubmoduleTrad = {
  submoduleId: "A5-4",
  title: S(
    "Addition et soustraction de décimaux",
    "Adding and subtracting decimals",
    "جمع وطرح الأعداد العشرية",
    "جمع و تفریق اعداد اعشاری",
    "ዲሲማል ቁጽርታት ምድማርን ምጉዳልን",
    "Додавання й віднімання десяткових чисел",
    "Adição e subtração de números decimais",
    "Isku darka iyo kala jarka tirooyinka tobanle",
    "Ondalık sayılarda toplama ve çıkarma",
    "د اعشاري عددونو جمع او تفریق"
  ),
  blocks: [
    { text: S(
      "Addition en colonnes : 57,9 + 2,4",
      "Column addition: 57.9 + 2.4",
      "الجمع العمودي: 57,9 + 2,4",
      "جمع ستونی: 57,9 + 2,4",
      "ዓምድ ምድማር፦ 57,9 + 2,4",
      "Додавання в стовпчик: 57,9 + 2,4",
      "Adição em coluna: 57,9 + 2,4",
      "Isku darka tiirka: 57,9 + 2,4",
      "Sütun toplamı: 57,9 + 2,4",
      "د کالم جمع: 57,9 + 2,4"
    ) },
    { text: S("1. On pose les nombres", "1. We write the numbers", "1. نكتب الأعداد", "1. اعداد را می‌نویسیم", "1. ቁጽርታት ንጽሓፍ", "1. Записуємо числа", "1. Escrevemos os números", "1. Waxaan qornaa tirada", "1. Sayıları yazıyoruz", "1. عددونه لیکو"),
      items: A(
        ["Aligner les virgules. Dixièmes sous dixièmes, unités sous unités."],
        ["Align the decimal points. Tenths under tenths, units under units."],
        ["نوازي الفواصل. أجزاء العشرة تحت أجزاء العشرة، وحدات تحت وحدات."],
        ["ویرگول‌ها را هم‌راستا کنید. دهم‌ها زیر دهم‌ها، یکان‌ها زیر یکان‌ها."],
        ["ነጥብታት ናሃሳስ። ዓሰርተኛ ትሕቲ ዓሰርተኛ፣ ሓደ ትሕቲ ሓደ።"],
        ["Вирівнюємо коми. Десяті під десятими, одиниці під одиницями."],
        ["Alinhar as vírgulas. Décimas sob décimas, unidades sob unidades."],
        ["La xarida jajabka. Tobanle hoos tobanle, midab hoos midab."],
        ["Virgülleri hizala. Ondalıklar ondalıkların altına, birler birlerin altına."],
        ["د اعشاري نقطو رديف کوئ. لسمه برخې لاندې لسمه برخو، يوونه لاندې يوونو."]
      )
    },
    { text: S("2. Dixièmes : 9 + 4 = 13", "2. Tenths: 9 + 4 = 13", "2. أجزاء العشرة: 9 + 4 = 13", "2. دهم‌ها: 9 + 4 = 13", "2. ዓሰርተኛ፦ 9 + 4 = 13", "2. Десяті: 9 + 4 = 13", "2. Décimas: 9 + 4 = 13", "2. Tobanle: 9 + 4 = 13", "2. Ondalıklar: 9 + 4 = 13", "2. لسمه برخې: 9 + 4 = 13"),
      items: A(
        ["9 + 4 = 13 → pose 3, retient 1"],
        ["9 + 4 = 13 → write 3, carry 1"],
        ["9 + 4 = 13 → نكتب 3 ونحمل 1"],
        ["9 + 4 = 13 → 3 بنویس، 1 نقل بده"],
        ["9 + 4 = 13 → 3 ጸሓፍ፣ 1 ሸቅቅ"],
        ["9 + 4 = 13 → пишемо 3, переносимо 1"],
        ["9 + 4 = 13 → escreve 3, transporta 1"],
        ["9 + 4 = 13 → qor 3, xiri 1"],
        ["9 + 4 = 13 → 3 yaz, 1 taşı"],
        ["9 + 4 = 13 → 3 وليکه، 1 لېږد کړه"]
      )
    },
    { text: S("3. Unités : 1 + 7 + 2 = 10", "3. Units: 1 + 7 + 2 = 10", "3. الوحدات: 1 + 7 + 2 = 10", "3. یکان‌ها: 1 + 7 + 2 = 10", "3. ሓደ፦ 1 + 7 + 2 = 10", "3. Одиниці: 1 + 7 + 2 = 10", "3. Unidades: 1 + 7 + 2 = 10", "3. Midab: 1 + 7 + 2 = 10", "3. Birler: 1 + 7 + 2 = 10", "3. يوونه: 1 + 7 + 2 = 10"),
      items: A(
        ["1 (retenue) + 7 + 2 = 10 → pose 0, retient 1"],
        ["1 (carry) + 7 + 2 = 10 → write 0, carry 1"],
        ["1 (محمول) + 7 + 2 = 10 → نكتب 0 ونحمل 1"],
        ["1 (نقل‌شده) + 7 + 2 = 10 → 0 بنویس، 1 نقل بده"],
        ["1 (ሸቅቅ) + 7 + 2 = 10 → 0 ጸሓፍ፣ 1 ሸቅቅ"],
        ["1 (перенос) + 7 + 2 = 10 → пишемо 0, переносимо 1"],
        ["1 (transporte) + 7 + 2 = 10 → escreve 0, transporta 1"],
        ["1 (xirashada) + 7 + 2 = 10 → qor 0, xiri 1"],
        ["1 (elde) + 7 + 2 = 10 → 0 yaz, 1 taşı"],
        ["1 (لېږد) + 7 + 2 = 10 → 0 وليکه، 1 لېږد کړه"]
      )
    },
    { text: S("4. Dizaines : 1 + 5 = 6", "4. Tens: 1 + 5 = 6", "4. العشرات: 1 + 5 = 6", "4. دهگان‌ها: 1 + 5 = 6", "4. ዓሰርተ፦ 1 + 5 = 6", "4. Десятки: 1 + 5 = 6", "4. Dezenas: 1 + 5 = 6", "4. Tobnaad: 1 + 5 = 6", "4. Onlar: 1 + 5 = 6", "4. لسگانه: 1 + 5 = 6"),
      items: A(
        ["1 (retenue) + 5 = 6 → pose 6", "Résultat : 57,9 + 2,4 = 60,3"],
        ["1 (carry) + 5 = 6 → write 6", "Result: 57.9 + 2.4 = 60.3"],
        ["1 (محمول) + 5 = 6 → نكتب 6", "النتيجة: 57,9 + 2,4 = 60,3"],
        ["1 (نقل‌شده) + 5 = 6 → 6 بنویس", "نتیجه: 57,9 + 2,4 = 60,3"],
        ["1 (ሸቅቅ) + 5 = 6 → 6 ጸሓፍ", "ውጽኢት፦ 57,9 + 2,4 = 60,3"],
        ["1 (перенос) + 5 = 6 → пишемо 6", "Результат: 57,9 + 2,4 = 60,3"],
        ["1 (transporte) + 5 = 6 → escreve 6", "Resultado: 57,9 + 2,4 = 60,3"],
        ["1 (xirashada) + 5 = 6 → qor 6", "Natiijo: 57,9 + 2,4 = 60,3"],
        ["1 (elde) + 5 = 6 → 6 yaz", "Sonuç: 57,9 + 2,4 = 60,3"],
        ["1 (لېږد) + 5 = 6 → 6 وليکه", "پايله: 57,9 + 2,4 = 60,3"]
      )
    },
    { text: S(
      "Soustraction en colonnes : 14,3 − 5,8",
      "Column subtraction: 14.3 − 5.8",
      "الطرح العمودي: 14,3 − 5,8",
      "تفریق ستونی: 14,3 − 5,8",
      "ዓምድ ምጉዳል፦ 14,3 − 5,8",
      "Віднімання в стовпчик: 14,3 − 5,8",
      "Subtração em coluna: 14,3 − 5,8",
      "Kala jarka tiirka: 14,3 − 5,8",
      "Sütun çıkarma: 14,3 − 5,8",
      "د کالم تفریق: 14,3 − 5,8"
    ) },
    { text: S("1. On pose les nombres", "1. We write the numbers", "1. نكتب الأعداد", "1. اعداد را می‌نویسیم", "1. ቁጽርታት ንጽሓፍ", "1. Записуємо числа", "1. Escrevemos os números", "1. Waxaan qornaa tirada", "1. Sayıları yazıyoruz", "1. عددونه لیکو"),
      items: A(
        ["Aligner les virgules. Dixièmes sous dixièmes, unités sous unités."],
        ["Align the decimal points. Tenths under tenths, units under units."],
        ["نوازي الفواصل. أجزاء العشرة تحت أجزاء العشرة، وحدات تحت وحدات."],
        ["ویرگول‌ها را هم‌راستا کنید. دهم‌ها زیر دهم‌ها، یکان‌ها زیر یکان‌ها."],
        ["ነጥብታት ናሃሳስ። ዓሰርተኛ ትሕቲ ዓሰርተኛ፣ ሓደ ትሕቲ ሓደ።"],
        ["Вирівнюємо коми. Десяті під десятими, одиниці під одиницями."],
        ["Alinhar as vírgulas. Décimas sob décimas, unidades sob unidades."],
        ["La xarida jajabka. Tobanle hoos tobanle, midab hoos midab."],
        ["Virgülleri hizala. Ondalıklar ondalıkların altına, birler birlerin altına."],
        ["د اعشاري نقطو رديف کوئ. لسمه برخې لاندې لسمه برخو، يوونه لاندې يوونو."]
      )
    },
    { text: S(
      "2. Dixièmes : 3 − 8 impossible → emprunter",
      "2. Tenths: 3 − 8 impossible → borrow",
      "2. أجزاء العشرة: 3 − 8 مستحيل → استعارة",
      "2. دهم‌ها: 3 − 8 ناممکن → قرض گرفتن",
      "2. ዓሰርተኛ፦ 3 − 8 ዘይከኣል → ምዕዳር",
      "2. Десяті: 3 − 8 неможливо → позичаємо",
      "2. Décimas: 3 − 8 impossível → empréstimo",
      "2. Tobanle: 3 − 8 suurtogal maaha → amaah",
      "2. Ondalıklar: 3 − 8 imkânsız → borç al",
      "2. لسمه برخې: 3 − 8 ناشونی → پور اخلو"
    ),
      items: A(
        ["3 − 8 impossible → emprunter 1 à l'unité.", "L'unité est réduite : 4 − 1 = 3. Les dixièmes deviennent **13**.", "**13** − 8 = 5 → pose 5."],
        ["3 − 8 impossible → borrow 1 from the units.", "The units decrease: 4 − 1 = 3. The tenths become **13**.", "**13** − 8 = 5 → write 5."],
        ["3 − 8 مستحيل → نستعير 1 من الوحدات.", "الوحدات تصبح: 4 − 1 = 3. أجزاء العشرة تصبح **13**.", "**13** − 8 = 5 → نكتب 5."],
        ["3 − 8 ناممکن → 1 از یکان‌ها قرض می‌گیریم.", "یکان‌ها: 4 − 1 = 3. دهم‌ها می‌شوند **13**.", "**13** − 8 = 5 → 5 بنویس."],
        ["3 − 8 ዘይከኣል → 1 ካብ ሓደ ንዕደር።", "ሓደ ይጎድል፦ 4 − 1 = 3። ዓሰርተኛ ይኸውን **13**።", "**13** − 8 = 5 → 5 ጸሓፍ።"],
        ["3 − 8 неможливо → позичаємо 1 від одиниць.", "Одиниці зменшуються: 4 − 1 = 3. Десяті стають **13**.", "**13** − 8 = 5 → пишемо 5."],
        ["3 − 8 impossível → emprestamos 1 das unidades.", "As unidades ficam: 4 − 1 = 3. As décimas tornam-se **13**.", "**13** − 8 = 5 → escreve 5."],
        ["3 − 8 suurtogal maaha → kala qaad 1 midabka.", "Midabku wuxuu noqdaa: 4 − 1 = 3. Tobanleyaashu waxay noqdaan **13**.", "**13** − 8 = 5 → qor 5."],
        ["3 − 8 imkânsız → birlerden 1 borç al.", "Birler azalır: 4 − 1 = 3. Ondalıklar **13** olur.", "**13** − 8 = 5 → 5 yaz."],
        ["3 − 8 ناشونی → له يوونو 1 پور اخلو.", "يوونه: 4 − 1 = 3. لسمه برخې **13** کېږي.", "**13** − 8 = 5 → 5 وليکه."]
      )
    },
    { text: S(
      "3. Unités : 3 − 5 impossible → emprunter",
      "3. Units: 3 − 5 impossible → borrow",
      "3. الوحدات: 3 − 5 مستحيل → استعارة",
      "3. یکان‌ها: 3 − 5 ناممکن → قرض گرفتن",
      "3. ሓደ፦ 3 − 5 ዘይከኣል → ምዕዳር",
      "3. Одиниці: 3 − 5 неможливо → позичаємо",
      "3. Unidades: 3 − 5 impossível → empréstimo",
      "3. Midab: 3 − 5 suurtogal maaha → amaah",
      "3. Birler: 3 − 5 imkânsız → borç al",
      "3. يوونه: 3 − 5 ناشونی → پور اخلو"
    ),
      items: A(
        ["(4 − 1) = 3. 3 − 5 impossible → emprunter 1 à la dizaine.", "La dizaine est réduite : 1 − 1 = 0. Les unités deviennent 13.", "13 − 5 = 8 → pose 8."],
        ["(4 − 1) = 3. 3 − 5 impossible → borrow 1 from the tens.", "The tens decrease: 1 − 1 = 0. The units become 13.", "13 − 5 = 8 → write 8."],
        ["(4 − 1) = 3. 3 − 5 مستحيل → نستعير 1 من العشرات.", "العشرات تصبح: 1 − 1 = 0. الوحدات تصبح 13.", "13 − 5 = 8 → نكتب 8."],
        ["(4 − 1) = 3. 3 − 5 ناممکن → 1 از دهگان‌ها قرض می‌گیریم.", "دهگان‌ها: 1 − 1 = 0. یکان‌ها می‌شوند 13.", "13 − 5 = 8 → 8 بنویس."],
        ["(4 − 1) = 3. 3 − 5 ዘይከኣል → 1 ካብ ዓሰርተ ንዕደር።", "ዓሰርተ ይጎድል፦ 1 − 1 = 0። ሓደ ይኸውን 13።", "13 − 5 = 8 → 8 ጸሓፍ።"],
        ["(4 − 1) = 3. 3 − 5 неможливо → позичаємо 1 від десятків.", "Десятки зменшуються: 1 − 1 = 0. Одиниці стають 13.", "13 − 5 = 8 → пишемо 8."],
        ["(4 − 1) = 3. 3 − 5 impossível → emprestamos 1 das dezenas.", "As dezenas ficam: 1 − 1 = 0. As unidades tornam-se 13.", "13 − 5 = 8 → escreve 8."],
        ["(4 − 1) = 3. 3 − 5 suurtogal maaha → kala qaad 1 tobnaadka.", "Tobnaadku wuxuu noqdaa: 1 − 1 = 0. Midabku noqdaa 13.", "13 − 5 = 8 → qor 8."],
        ["(4 − 1) = 3. 3 − 5 imkânsız → onlardan 1 borç al.", "Onlar azalır: 1 − 1 = 0. Birler 13 olur.", "13 − 5 = 8 → 8 yaz."],
        ["(4 − 1) = 3. 3 − 5 ناشونی → له لسگانو 1 پور اخلو.", "لسگانه: 1 − 1 = 0. يوونه 13 کېږي.", "13 − 5 = 8 → 8 وليکه."]
      )
    },
    { text: S("4. Dizaines : (1 − 1) − 0 = 0", "4. Tens: (1 − 1) − 0 = 0", "4. العشرات: (1 − 1) − 0 = 0", "4. دهگان‌ها: (1 − 1) − 0 = 0", "4. ዓሰርተ፦ (1 − 1) − 0 = 0", "4. Десятки: (1 − 1) − 0 = 0", "4. Dezenas: (1 − 1) − 0 = 0", "4. Tobnaad: (1 − 1) − 0 = 0", "4. Onlar: (1 − 1) − 0 = 0", "4. لسگانه: (1 − 1) − 0 = 0"),
      items: A(
        ["1 − 1 (emprunt) = 0. 0 − 0 = 0 → pose 0.", "Résultat : 14,3 − 5,8 = 8,5"],
        ["1 − 1 (borrow) = 0. 0 − 0 = 0 → write 0.", "Result: 14.3 − 5.8 = 8.5"],
        ["1 − 1 (استعارة) = 0. 0 − 0 = 0 → نكتب 0.", "النتيجة: 14,3 − 5,8 = 8,5"],
        ["1 − 1 (قرض) = 0. 0 − 0 = 0 → 0 بنویس.", "نتیجه: 14,3 − 5,8 = 8,5"],
        ["1 − 1 (ዕዳር) = 0. 0 − 0 = 0 → 0 ጸሓፍ።", "ውጽኢት፦ 14,3 − 5,8 = 8,5"],
        ["1 − 1 (позичено) = 0. 0 − 0 = 0 → пишемо 0.", "Результат: 14,3 − 5,8 = 8,5"],
        ["1 − 1 (emprestado) = 0. 0 − 0 = 0 → escreve 0.", "Resultado: 14,3 − 5,8 = 8,5"],
        ["1 − 1 (amaah) = 0. 0 − 0 = 0 → qor 0.", "Natiijo: 14,3 − 5,8 = 8,5"],
        ["1 − 1 (borç) = 0. 0 − 0 = 0 → 0 yaz.", "Sonuç: 14,3 − 5,8 = 8,5"],
        ["1 − 1 (پور) = 0. 0 − 0 = 0 → 0 وليکه.", "پايله: 14,3 − 5,8 = 8,5"]
      )
    },
  ],
};
