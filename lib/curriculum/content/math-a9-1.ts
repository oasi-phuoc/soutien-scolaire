import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-1",
    submoduleCode: "A9.1",
    theory: {
      title: {
        fr: "Variable et inconnue",
        en: "Variable and unknown",
        ar: "المتغير والمجهول",
        fa: "متغیر و مجهول",
        ti: "ተለዋዋጢ ቁጽርን ዘይፍለጥ ቁጽርን",
        uk: "Змінна і невідома",
      },
      paragraphs: {
        fr: [
          "En algèbre, une lettre peut représenter un nombre. On l'appelle une variable ou une inconnue selon le contexte.",
          "Une variable représente un nombre qui peut changer (ex. : x désigne la longueur d'un rectangle). Une inconnue est un nombre fixe mais inconnu à trouver.",
          "Exemple : dans l'expression 3x + 5, x est la variable. Si on cherche x tel que 3x + 5 = 20, x est une inconnue.",
          "Convention : on utilise souvent les lettres x, y, z pour les variables et a, b, c pour les constantes.",
        ],
        en: [
          "In algebra, a letter can represent a number. It is called a variable or an unknown depending on context.",
          "A variable is a number that can change (e.g., x is the length of a rectangle). An unknown is a fixed but unknown number to find.",
          "Example: in 3x + 5, x is the variable. If we look for x such that 3x + 5 = 20, x is an unknown.",
          "Convention: x, y, z are used for variables; a, b, c for constants.",
        ],
        ar: [
          "في الجبر، تُمثل الحرف عدداً. يُسمى متغيراً أو مجهولاً حسب السياق.",
          "المتغير عدد يمكن أن يتغير. المجهول عدد ثابت لكن غير معروف.",
          "مثال: في 3x + 5، x متغير. إذا بحثنا عن x بحيث 3x + 5 = 20، فـ x مجهول.",
          "اصطلاح: x, y, z للمتغيرات؛ a, b, c للثوابت.",
        ],
        fa: [
          "در جبر، یک حرف می‌تواند نشان‌دهنده یک عدد باشد. بسته به موقعیت متغیر یا مجهول نامیده می‌شود.",
          "متغیر عددی است که می‌تواند تغییر کند. مجهول عددی ثابت اما ناشناخته است.",
          "مثال: در 3x + 5، x متغیر است. اگر دنبال x بگردیم که 3x + 5 = 20، x مجهول است.",
          "قرارداد: x, y, z برای متغیرها؛ a, b, c برای ثابت‌ها.",
        ],
        ti: [
          "ኣልጀብራ ሓደ ፊደል ቁጽሪ ዘርኢ ክኸውን ይኽእል ዩ. ሰምዩ ተለዋዋጢ ወይ ዘይፍለጥ ይብሃሉ.",
          "ተለዋዋጢ ዝለዋወጥ ቁጽሪ ዩ. ዘይፍለጥ ቁጽሪ ወሰን ዘለዎ ግን ዘይፍለጥ ቁጽሪ ዩ.",
          "ምሳሌ: 3x + 5 ዘሎ x ተለዋዋጢ ዩ. 3x + 5 = 20 ምስ ዝኸውን x ዘይፍለጥ ዩ.",
          "ስምምዕ: x, y, z ንተለዋዋጢ; a, b, c ንቋሚ.",
        ],
        uk: [
          "В алгебрі буква може позначати число. Залежно від контексту її називають змінною або невідомою.",
          "Змінна — число, що може змінюватися. Невідома — фіксоване, але невідоме число.",
          "Приклад: у виразі 3x + 5, x — змінна. Якщо шукаємо x таке, що 3x + 5 = 20, x — невідома.",
          "Угода: x, y, z для змінних; a, b, c для сталих.",
        ],
      },
    },
    exercises: [
      { id: "a9-1-e1", promptFr: "Dans 2y + 7, quelle est la variable ?", type: "short_text", acceptable: ["y"] },
      { id: "a9-1-e2", promptFr: "Si a = 4, calcule 3a.", type: "number", acceptable: ["12"] },
      { id: "a9-1-e3", promptFr: "Si x = 5, calcule 2x + 1.", type: "number", acceptable: ["11"] },
      { id: "a9-1-e4", promptFr: "Dans l'équation 4x = 20, x est-il une variable ou une inconnue ? (réponse : 'variable' ou 'inconnue')", type: "short_text", acceptable: ["inconnue"] },
      { id: "a9-1-e5", promptFr: "Si n = 3, calcule n² − 1.", type: "number", acceptable: ["8"] },
    ],
  };
