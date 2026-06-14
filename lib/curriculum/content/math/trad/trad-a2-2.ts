import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A2_2: SubmoduleTrad = {
  submoduleId: "A2-2",
  title: {
    fr: "Soustraction",
    en: "Subtraction",
    ar: "الطرح",
    fa: "تفریق",
    ti: "ምቕናስ",
    uk: "Віднімання",
    pt: "Subtração",
    so: "Kala goyn",
    tr: "Çıkarma",
    ps: "تفریق",
  },
  blocks: [
    {
      text: {
        fr: "La soustraction permet de **retirer** une quantité d'une autre.",
        en: "Subtraction lets us **take away** one quantity from another.",
        ar: "يسمح الطرح بـ **إزالة** كمية من كمية أخرى.",
        fa: "تفریق به ما اجازه می‌دهد یک مقدار را از مقدار دیگر **کم کنیم**.",
        ti: "ምቕናስ ሓደ መጠን ካብ ካልእ **ንምንካይ** ይሕግዝ።",
        uk: "Віднімання допомагає **забрати** одну кількість від іншої.",
        pt: "A subtração permite **retirar** uma quantidade de outra.",
        so: "Kala goyntu waxay noo oggolaanaysaa in aan tiro **ka saarno** tiro kale.",
        tr: "Çıkarma, bir miktarı başka bir miktardan **çıkarmayı** sağlar.",
        ps: "تفریق له یوه مقدار څخه بل مقدار **کموي**.",
      },
    },
    {
      items: {
        fr: [
          "Le signe de la soustraction est le signe « − » **moins**.",
          "Les nombres de la soustraction sont les **termes**.",
          "Le résultat de la soustraction est la **différence**.",
        ],
        en: [
          "The sign for subtraction is the « − » **minus** sign.",
          "The numbers in a subtraction are the **terms**.",
          "The result of a subtraction is the **difference**.",
        ],
        ar: [
          "رمز الطرح هو الرمز « − » **ناقص**.",
          "الأعداد في الطرح تسمى **الحدود**.",
          "نتيجة الطرح تسمى **الفرق**.",
        ],
        fa: [
          "نشانه تفریق، علامت « − » یعنی **منها** است.",
          "عددهای تفریق، **جمله‌ها** هستند.",
          "نتیجه تفریق، **اختلاف** نام دارد.",
        ],
        ti: [
          "ምልክት ምቕናስ « − » **ኣነስ** እዩ።",
          "ቁጽርታት ምቕናስ **ቃላት** ይበሃሉ።",
          "ውጽኢት ምቕናስ **ፍልልይ** ይበሃል።",
        ],
        uk: [
          "Знак віднімання — це знак « − » **мінус**.",
          "Числа у відніманні називаються **членами**.",
          "Результат віднімання називається **різницею**.",
        ],
        pt: [
          "O sinal da subtração é o sinal « − » **menos**.",
          "Os números da subtração são os **termos**.",
          "O resultado da subtração é a **diferença**.",
        ],
        so: [
          "Calaamadda kala goyntu waa « − » **laga jaray**.",
          "Tirooyinka kala goynta waa **qodobbada**.",
          "Natiijada kala goyntu waa **farqiga**.",
        ],
        tr: [
          "Çıkarma işareti « − » **eksi** işaretidir.",
          "Çıkarmadaki sayılar **terimlerdir**.",
          "Çıkarmanın sonucu **farktır**.",
        ],
        ps: [
          "د تفریق نښه « − » **منفي** ده.",
          "د تفریق عددونه **حدونه** دي.",
          "د تفریق پایله **توپیر** ده.",
        ],
      },
    },
    {
      headers: {
        fr: ["8", "−", "3", "=", "5"],
        en: ["8", "−", "3", "=", "5"],
        ar: ["8", "−", "3", "=", "5"],
        fa: ["8", "−", "3", "=", "5"],
        ti: ["8", "−", "3", "=", "5"],
        uk: ["8", "−", "3", "=", "5"],
        pt: ["8", "−", "3", "=", "5"],
        so: ["8", "−", "3", "=", "5"],
        tr: ["8", "−", "3", "=", "5"],
        ps: ["8", "−", "3", "=", "5"],
      },
    },
    {
      text: {
        fr: "Propriétés de la soustraction",
        en: "Properties of subtraction",
        ar: "خصائص الطرح",
        fa: "ویژگی‌های تفریق",
        ti: "ባህርያት ምቕናስ",
        uk: "Властивості віднімання",
        pt: "Propriedades da subtração",
        so: "Sifooyinka kala goynta",
        tr: "Çıkarmanın özellikleri",
        ps: "د تفریق ځانګړنې",
      },
    },
    {
      text: {
        fr: "Non-commutativité",
        en: "Non-commutativity",
        ar: "عدم الإبدال",
        fa: "جابه‌جایی‌ناپذیری",
        ti: "ዘይምቅይያር",
        uk: "Непереставність",
        pt: "Não comutatividade",
        so: "Aan isdhaafsanayn",
        tr: "Değişme özelliği yoktur",
        ps: "نه بدلېدونکې ځانګړنه",
      },
    },
    {
      items: {
        fr: [
          "La soustraction n'est **pas commutative**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
        en: [
          "Subtraction is **not commutative**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
        ar: [
          "الطرح **ليس إبداليا**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
        fa: [
          "تفریق **جابه‌جایی‌پذیر نیست**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
        ti: [
          "ምቕናስ **ምቅይያር ኣይቅበልን**።",
          "• 57 − 49 **≠** 49 − 57",
        ],
        uk: [
          "Віднімання **не є переставним**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
        pt: [
          "A subtração **não é comutativa**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
        so: [
          "Kala goyntu **ma aha isdhaafsanaan**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
        tr: [
          "Çıkarma **değişme özelliğine sahip değildir**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
        ps: [
          "تفریق **بدلېدونکی نه دی**.",
          "• 57 − 49 **≠** 49 − 57",
        ],
      },
    },
    {},
    {
      text: {
        fr: "Soustraction en colonnes",
        en: "Column subtraction",
        ar: "الطرح في الأعمدة",
        fa: "تفریق ستونی",
        ti: "ምቕናስ ብዓምዲ",
        uk: "Віднімання у стовпчик",
        pt: "Subtração em colunas",
        so: "Kala goynta tiirar",
        tr: "Alt alta çıkarma",
        ps: "ستوني تفریق",
      },
    },
    {
      items: {
        fr: [
          "Alignez les unités sous les unités, les dizaines sous les dizaines.",
          "Si la soustraction est impossible → faites un **emprunt** à la colonne de gauche.",
          "La colonne empruntée diminue de 1, la colonne courante gagne 10.",
        ],
        en: [
          "Align units under units and tens under tens.",
          "If the subtraction is impossible → make a **borrow** from the column on the left.",
          "The borrowed column decreases by 1, and the current column gains 10.",
        ],
        ar: [
          "ضع الآحاد تحت الآحاد والعشرات تحت العشرات.",
          "إذا كان الطرح غير ممكن ← نقوم بـ **استلاف** من العمود الأيسر.",
          "العمود الذي استلفنا منه ينقص 1، والعمود الحالي يزيد 10.",
        ],
        fa: [
          "یکان‌ها را زیر یکان‌ها و دهگان‌ها را زیر دهگان‌ها بنویس.",
          "اگر تفریق ممکن نیست ← از ستون چپ **قرض** بگیر.",
          "ستونی که از آن قرض گرفته‌ایم 1 کم می‌شود و ستون فعلی 10 اضافه می‌گیرد.",
        ],
        ti: [
          "ሓደታት ትሕቲ ሓደታት፣ ዓሰርተታት ትሕቲ ዓሰርተታት ኣሰልፍ።",
          "ምቕናስ እንተዘይተኻእለ → ካብ ዓምዲ ጸጋም **ተዋስእ**።",
          "ዝተዋሰእናሉ ዓምዲ ብ1 ይንኪ፣ እቲ ናይ ሕጂ ዓምዲ 10 ይረክብ።",
        ],
        uk: [
          "Записуй одиниці під одиницями, десятки під десятками.",
          "Якщо віднімання неможливе → зроби **позику** з колонки ліворуч.",
          "Колонка, з якої позичили, зменшується на 1, а поточна колонка отримує 10.",
        ],
        pt: [
          "Alinha as unidades por baixo das unidades e as dezenas por baixo das dezenas.",
          "Se a subtração for impossível → faz um **empréstimo** à coluna da esquerda.",
          "A coluna emprestada diminui 1, e a coluna atual ganha 10.",
        ],
        so: [
          "U dhig halalka hoosta halalka, tobannadana hoosta tobannada.",
          "Haddii kala goyntu suuragal ahayn → ka **amaaho** tiirka bidix.",
          "Tiirka laga amaahday 1 ayuu yaraadaa, tiirka hadda jirana 10 ayuu helaa.",
        ],
        tr: [
          "Birlikleri birliklerin, onlar basamağını onlar basamağının altına hizala.",
          "Çıkarma yapılamıyorsa → soldaki basamaktan **ödünç al**.",
          "Ödünç alınan sütun 1 azalır, geçerli sütun 10 kazanır.",
        ],
        ps: [
          "یوګان تر یوګانو لاندې او لسګان تر لسګانو لاندې برابر کړه.",
          "که تفریق ممکن نه وي → له کیڼ ستنې څخه **پور** واخله.",
          "هغه ستنه چې پور ترې اخیستل شوی 1 کمېږي، او اوسنۍ ستنه 10 زیاتېږي.",
        ],
      },
    },
    {},
  ],
};
