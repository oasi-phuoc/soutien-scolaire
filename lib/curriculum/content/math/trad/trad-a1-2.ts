import type { SubmoduleTrad } from "./trad-types";

export const TRAD_A1_2: SubmoduleTrad = {
  submoduleId: "A1-2",
  title: {
    fr: "Valeur positionnelle",
    en: "Reading and understanding numbers",
    ar: "قراءة الأعداد وفهمها",
    fa: "خواندن و فهمیدن اعداد",
    ti: "ኣኃዝቲ ምንባብን ምርዳእን",
    uk: "Читати й розуміти числа",
    pt: "Ler e compreender os números",
  },
  blocks: [
    // 0: plain "Chaque chiffre occupe une position précise dans un nombre."
    {
      text: {
        fr: "Chaque chiffre occupe une position précise dans un nombre.",
        en: "Each digit occupies a precise position in a number.",
        ar: "كل رقم يحتل موضعاً محدداً في العدد.",
        fa: "هر رقم جایگاه مشخصی در عدد دارد.",
        ti: "ነፍሲ ወከፍ ኣሃዝ ርኡይ ቦታ ኣብ ቁጽሪ ይሕዝ።",
        uk: "Кожна цифра займає точне місце в числі.",
        pt: "Cada algarismo ocupa uma posição específica num número.",
      },
    },
    // 1: table headers ["Nombre", "M", "C", "D", "U"]
    {
      headers: {
        fr: ["Nombre", "M", "C", "D", "U"],
        en: ["Number", "Th", "H", "T", "U"],
        ar: ["العدد", "أ", "م", "ع", "و"],
        fa: ["عدد", "ه", "ص", "د", "ی"],
        ti: ["ቁጽሪ", "ሽ", "ሚ", "ዓ", "ሓ"],
        uk: ["Число", "Т", "С", "Д", "О"],
        pt: ["Número", "Mi", "C", "D", "U"],
      },
    },
    // 2: plain " " (spacer) — no translation
    {},
    // 3: heading "Comment lire la valeur d'un chiffre"
    {
      text: {
        fr: "Comment lire la valeur d'un chiffre",
        en: "How to read the value of a digit",
        ar: "كيف تقرأ قيمة رقم",
        fa: "چگونه مقدار یک رقم را بخوانیم",
        ti: "ዋጋ ኣሃዝ ብኸመይ ምንባብ",
        uk: "Як читати значення цифри",
        pt: "Como ler o valor de um algarismo",
      },
    },
    // 4: highlight "Repérer sa position"
    {
      text: {
        fr: "Repérer sa position",
        en: "Find its position",
        ar: "حدد موضعه",
        fa: "موقعیت آن را پیدا کن",
        ti: "ቦትኡ ፈልጥ",
        uk: "Визнач позицію",
        pt: "Encontrar a sua posição",
      },
    },
    // 5: section — items about position values
    {
      items: {
        fr: [
          "Il faut observer la position du chiffre dans le nombre.",
          "U = × 1",
          "D = × 10",
          "C = × 100",
          "M = × 1000",
        ],
        en: [
          "Observe the position of the digit in the number.",
          "U = × 1",
          "T = × 10",
          "H = × 100",
          "Th = × 1 000",
        ],
        ar: [
          "لاحظ موضع الرقم في العدد.",
          "و = × 1",
          "ع = × 10",
          "م = × 100",
          "أ = × 1 000",
        ],
        fa: [
          "جایگاه رقم در عدد را مشاهده کنید.",
          "ی = × 1",
          "د = × 10",
          "ص = × 100",
          "ه = × 1 000",
        ],
        ti: [
          "ቦታ ኣሃዝ ኣብ ቁጽሪ ተዓዘብ።",
          "ሓ = × 1",
          "ዓ = × 10",
          "ሚ = × 100",
          "ሽ = × 1 000",
        ],
        uk: [
          "Спостерігай за позицією цифри в числі.",
          "О = × 1",
          "Д = × 10",
          "С = × 100",
          "Т = × 1 000",
        ],
        pt: [
          "Observe a posição do algarismo no número.",
          "U = × 1",
          "D = × 10",
          "C = × 100",
          "Mi = × 1 000",
        ],
      },
    },
    // 6: highlight "Valeur du chiffre"
    {
      text: {
        fr: "Valeur du chiffre",
        en: "Digit value = digit × place value.",
        ar: "قيمة الرقم = الرقم × قيمة موضعه.",
        fa: "ارزش رقم = رقم × ارزش جایگاه.",
        ti: "ዋጋ ኣሃዝ = ኣሃዝ × ዋጋ ቦቱኡ።",
        uk: "Значення цифри = цифра × значення її позиції.",
        pt: "Valor do algarismo = algarismo × valor da posição.",
      },
    },
    // 7: plain "Dans le nombre 3 864 :"
    {
      text: {
        fr: "Dans le nombre 3 864 :",
        en: "In the number 3 864:",
        ar: "في العدد 3 864:",
        fa: "در عدد 3 864:",
        ti: "ኣብ ቁጽሪ 3 864:",
        uk: "У числі 3 864:",
        pt: "No número 3 864:",
      },
    },
    // 8: section — items about reading 3864
    {
      items: {
        fr: [
          "Le chiffre 8 est en position C",
          "Donc on fait 8 × 100 = 800.",
          "3 864 = 3 000 + 800 + 60 + 4",
        ],
        en: [
          "The digit 8 is in position H (hundreds)",
          "So we do 8 × 100 = 800.",
          "3 864 = 3 000 + 800 + 60 + 4",
        ],
        ar: [
          "الرقم 8 في موضع المئات",
          "إذن نحسب 8 × 100 = 800.",
          "3 864 = 3 000 + 800 + 60 + 4",
        ],
        fa: [
          "رقم 8 در جایگاه صدگان است",
          "پس محاسبه می‌کنیم 8 × 100 = 800.",
          "3 864 = 3 000 + 800 + 60 + 4",
        ],
        ti: [
          "ኣሃዝ 8 ኣብ ቦታ ሚእቲ ይርከብ",
          "ስለዚ 8 × 100 = 800 ንሰርሕ።",
          "3 864 = 3 000 + 800 + 60 + 4",
        ],
        uk: [
          "Цифра 8 знаходиться в позиції сотень",
          "Тому обчислюємо 8 × 100 = 800.",
          "3 864 = 3 000 + 800 + 60 + 4",
        ],
        pt: [
          "O algarismo 8 está na posição das centenas",
          "Portanto, fazemos 8 × 100 = 800.",
          "3 864 = 3 000 + 800 + 60 + 4",
        ],
      },
    },
  ],
};
