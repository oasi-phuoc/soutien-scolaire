import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A1_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "A1-2",
  submoduleCode: "A1.2",

  theory: {
    title: {
      fr: "Valeur positionnelle",
      en: "Reading and understanding numbers",
      ar: "قراءة الأعداد وفهمها",
      fa: "خواندن و فهمیدن اعداد",
      ti: "ኣኃዝቲ ምንባብን ምርዳእን",
      uk: "Читати й розуміти числа",
      pt: "Ler e compreender os números",
    },

    paragraphs: {
      fr: [
        "La numération est la manière d’écrire, lire et comprendre les nombres. Dans notre système décimal, chaque chiffre a une valeur selon sa position.",
        "• Dans le nombre 452, le chiffre **2** vaut deux unités (**2**).",
        "• Dans le nombre 524, le chiffre **2** vaut deux dizaines (**20**).",
        "• Dans le nombre 245, le chiffre **2** vaut deux centaines (**200**).",
        "• Dans le nombre 2453, le chiffre **2** vaut deux milliers (**2000**).",
        "On parle aussi de milliers (**M**), centaines (**C**), dizaines (**D**), unités (**U**) pour décomposer un nombre.",
      ],

      en: [
        "Numeration is how we write, read and understand numbers. In our decimal system, each digit has a value according to its place.",
        "• In 452, the digit 2 is worth two units (2).",
        "• In 524, the digit 2 is worth two tens (20).",
        "• In 245, the digit 2 is worth two hundreds (200).",
        "• In 2453, the digit 2 is worth two thousands (2000).",
        "We also break numbers down into thousands (M), hundreds (C), tens (D) and units (U).",
      ],

      ar: [
        "الترقيم هو طريقة كتابة الأعداد وقراءتها وفهمها. في النظام العشري، لكل رقم قيمة حسب مكانه.",
        "• في العدد 452، الرقم 2 يساوي وحدتين (2).",
        "• في العدد 524، الرقم 2 يساوي عشرات (20).",
        "• في العدد 245، الرقم 2 يساوي مئتين (200).",
        "• في العدد 2453، الرقم 2 يساوي ألفين (2000).",
        "نحلّل العدد أيضًا إلى آلاف (أ)، مئات (م)، عشرات (ع)، ووحدات (و).",
      ],

      fa: [
        "عددگذاری یعنی نوشتن، خواندن و فهمیدن اعداد. در دستگاه ده‌دهی، هر رقم بسته به جایگاهش ارزش دارد.",
        "• در ۴۵۲، رقم ۲ برابر دو یکی (۲) است.",
        "• در ۵۲۴، رقم ۲ برابر دو ده‌تایی (۲۰) است.",
        "• در ۲۴۵، رقم ۲ برابر دویست (۲۰۰) است.",
        "• در ۲۴۵۳، رقم ۲ برابر دو هزار (۲۰۰۰) است.",
        "عدد را به هزارها، صدها، ده‌ها و یک‌ها نیز تجزیه می‌کنیم.",
      ],

      ti: [
        "ኣኃዝቲ ምጽሓፍ፡ ምንባብን ምርዳእን ማለት እዩ። ኣብ ዴሲማል ስርዓት፡ ነፍሲ ወከፍ ኣሃዝ ብቦታኡ ዋጋ ኣለዎ።",
        "• ኣብ 452 እቲ 2 ክልተ ውልቃት (2) ማለት እዩ።",
        "• ኣብ 524 እቲ 2 ክልተ ዓሰርተታት (20) ማለት እዩ።",
        "• ኣብ 245 እቲ 2 ክልተ ሚእታት (200) ማለት እዩ።",
        "• ኣብ 2453 እቲ 2 ክልተ ሽሕታት (2000) ማለት እዩ።",
        "ኣኃዝቲ ናብ ሽሕታት፡ ሚእታት፡ ዓሰርተታት፡ ውልቃት ይፈልጹ።",
      ],

      uk: [
        "Нумерація — це спосіб записувати, читати й розуміти числа. У десятковій системі кожна цифра має значення залежно від розряду.",
        "• У числі 452 цифра 2 означає дві одиниці (2).",
        "• У числі 524 цифра 2 означає два десятки (20).",
        "• У числі 245 цифра 2 означає дві сотні (200).",
        "• У числі 2453 цифра 2 означає дві тисячі (2000).",
        "Число також розкладають на тисячі (M), сотні (C), десятки (D) та одиниці (U).",
      ],

      pt: [
        "A numeração é a maneira de escrever, ler e compreender os números. No sistema decimal, cada algarismo tem um valor conforme a sua posição.",
        "• No número 452, o algarismo 2 vale duas unidades (2).",
        "• No número 524, o algarismo 2 vale duas dezenas (20).",
        "• No número 245, o algarismo 2 vale duas centenas (200).",
        "• No número 2453, o algarismo 2 vale dois milhares (2000).",
        "Também dividimos os números em milhares (M), centenas (C), dezenas (D) e unidades (U).",
      ],
    },

    blocks: [
      {
        type: "plain",
        fr: "Chaque chiffre occupe une position précise dans un nombre.",
        pivot: {
          en: "Each digit occupies a precise position in a number.",
          ar: "كل رقم يحتل موضعاً محدداً في العدد.",
          fa: "هر رقم جایگاه مشخصی در عدد دارد.",
          ti: "ነፍሲ ወከፍ ኣሃዝ ርኡይ ቦታ ኣብ ቁጽሪ ይሕዝ።",
          uk: "Кожна цифра займає точне місце в числі.",
          pt: "Cada algarismo ocupa uma posição específica num número.",
        },
      },

      {
        type: "table",
        headersFr: ["Nombre", "M", "C", "D", "U"],
        accentHeader: true,
        rows: [
          ["452", "—", "4", "5", "2"],
          ["524", "—", "5", "2", "4"],
          ["2 453", "2", "4", "5", "3"],
          ["9 102", "9", "1", "0", "2"],
        ],
      },

      { type: "plain", fr: "" },
      { type: "plain", fr: "" },
      { type: "plain", fr: "" },

      {
        type: "heading",
        fr: "Comment lire la valeur d’un chiffre",
        black: true,
      },

      {
        type: "highlight",
        fr: "Repérer sa position",
        pivot: {
          en: "Find its position",
          ar: "حدد موضعه",
          fa: "موقعیت آن را پیدا کن",
          ti: "ቦትኡ ፈልጥ",
          uk: "Визнач позицію",
          pt: "Encontrar a sua posição",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Il faut observer la position du chiffre dans le nombre.",
          "U = ×1",
          "D = ×10",
          "C = ×100",
          "M = ×1000",
        ],
      },

      {
        type: "highlight",
        fr: "Valeur du chiffre = chiffre × valeur de sa position.",
        pivot: {
          en: "Digit value = digit × place value.",
          ar: "قيمة الرقم = الرقم × قيمة موضعه.",
          fa: "ارزش رقم = رقم × ارزش جایگاه.",
          ti: "ዋጋ ኣሃዝ = ኣሃዝ × ዋጋ ቦቱኡ።",
          uk: "Значення цифри = цифра × значення її позиції.",
          pt: "Valor do algarismo = algarismo × valor da posição.",
        },
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Dans le nombre 3 864 :",
          "Le chiffre 8 est en position C → 8 × 100 = 800.",
          "3 864 = 3 000 + 800 + 60 + 4",
        ],
      },
    ],
  },

  exercises: [

  ],
};
