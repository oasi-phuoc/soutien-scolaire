import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-5",
    submoduleCode: "A3.5",
    theory: {
      title: {
        fr: "Critères de divisibilité",
        en: "Divisibility rules",
        ar: "معايير القسمة",
        fa: "قواعد بخش‌پذیری",
        ti: "ሕጊ ክፍፍል",
        uk: "Ознаки подільності",
      },
      paragraphs: {
        fr: [
          "Les critères de divisibilité permettent de savoir si un nombre est divisible par un autre sans effectuer la division.",
          "Divisible par 2 : si le chiffre des unités est pair (0, 2, 4, 6, 8). Exemple : 348 est divisible par 2 (unités = 8).",
          "Divisible par 3 : si la somme des chiffres est divisible par 3. Exemple : 123 → 1+2+3=6, et 6 est divisible par 3.",
          "Divisible par 5 : si le chiffre des unités est 0 ou 5. Divisible par 10 : si le chiffre des unités est 0.",
          "Divisible par 9 : si la somme des chiffres est divisible par 9. Divisible par 4 : si les deux derniers chiffres forment un nombre divisible par 4.",
        ],
        en: [
          "Divisibility rules help determine if a number is divisible by another without doing the full division.",
          "Divisible by 2: if the units digit is even (0, 2, 4, 6, 8). Example: 348 is divisible by 2 (units = 8).",
          "Divisible by 3: if the sum of digits is divisible by 3. Example: 123 → 1+2+3=6, and 6 is divisible by 3.",
          "Divisible by 5: if the units digit is 0 or 5. Divisible by 10: if the units digit is 0.",
          "Divisible by 9: if the sum of digits is divisible by 9. Divisible by 4: if the last two digits form a number divisible by 4.",
        ],
        ar: [
          "معايير القسمة تساعد في معرفة ما إذا كان عدد قابلًا للقسمة على آخر دون إجراء القسمة.",
          "قابل للقسمة على 2: إذا كان رقم الآحاد زوجيًا (0، 2، 4، 6، 8). مثال: 348 قابل للقسمة على 2 (الآحاد = 8).",
          "قابل للقسمة على 3: إذا كان مجموع الأرقام قابلًا للقسمة على 3. مثال: 123 → 1+2+3=6، و 6 قابل للقسمة على 3.",
          "قابل للقسمة على 5: إذا كان رقم الآحاد 0 أو 5. قابل للقسمة على 10: إذا كان رقم الآحاد 0.",
          "قابل للقسمة على 9: إذا كان مجموع الأرقام قابلًا للقسمة على 9. قابل للقسمة على 4: إذا كان الرقمان الأخيران يُشكّلان عددًا قابلًا للقسمة على 4.",
        ],
        fa: [
          "قواعد بخش‌پذیری کمک می‌کنند بدون انجام تقسیم بدانیم آیا یک عدد بر دیگری بخش‌پذیر است یا نه.",
          "بخش‌پذیر بر ۲: اگر رقم یکان زوج باشد (۰، ۲، ۴، ۶، ۸). مثال: ۳۴۸ بر ۲ بخش‌پذیر است (یکان = ۸).",
          "بخش‌پذیر بر ۳: اگر مجموع ارقام بر ۳ بخش‌پذیر باشد. مثال: ۱۲۳ → ۱+۲+۳=۶، و ۶ بر ۳ بخش‌پذیر است.",
          "بخش‌پذیر بر ۵: اگر رقم یکان ۰ یا ۵ باشد. بخش‌پذیر بر ۱۰: اگر رقم یکان ۰ باشد.",
          "بخش‌پذیر بر ۹: اگر مجموع ارقام بر ۹ بخش‌پذیر باشد. بخش‌پذیر بر ۴: اگر دو رقم آخر عددی را تشکیل دهند که بر ۴ بخش‌پذیر است.",
        ],
        ti: [
          "ሕጊ ክፍፍል ካብ ምሉእ ክፍፍል ዘይምሕሳብ ሓደ ቁጽሪ ብካሊእ ዝካፈሉ ምፍላጥ ሕግታት እዮም።",
          "ብ 2 ዝካፈሉ: ኣሃዱ ምርጫ (0, 2, 4, 6, 8) እንተኾነ። ኣብነት: 348 ብ 2 ዝካፈሉ (ኣሃዱ = 8).",
          "ብ 3 ዝካፈሉ: ናይ ቁጽሪታት ድምር ብ 3 ዝካፈሉ እንተኾነ። ኣብነት: 123 → 1+2+3=6, 6 ብ 3 ዝካፈሉ.",
          "ብ 5 ዝካፈሉ: ኣሃዱ 0 ወይ 5 እንተኾነ። ብ 10 ዝካፈሉ: ኣሃዱ 0 እንተኾነ.",
          "ብ 9 ዝካፈሉ: ናይ ቁጽሪታት ድምር ብ 9 ዝካፈሉ እንተኾነ। ብ 4 ዝካፈሉ: ናይ መወዳእታ ክልተ ቁጽርታት ብ 4 ዝካፈሉ ቁጽሪ ዝፈጥሩ እንተኾነ.",
        ],
        uk: [
          "Ознаки подільності дозволяють визначити, чи ділиться число на інше без виконання ділення.",
          "Ділиться на 2: якщо цифра одиниць парна (0, 2, 4, 6, 8). Приклад: 348 ділиться на 2 (одиниці = 8).",
          "Ділиться на 3: якщо сума цифр ділиться на 3. Приклад: 123 → 1+2+3=6, і 6 ділиться на 3.",
          "Ділиться на 5: якщо цифра одиниць 0 або 5. Ділиться на 10: якщо цифра одиниць 0.",
          "Ділиться на 9: якщо сума цифр ділиться на 9. Ділиться на 4: якщо останні дві цифри утворюють число, що ділиться на 4.",
        ],
      },
    },
    exercises: [
      { id: "a3-5-e1", promptFr: "348 est-il divisible par 2 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a3-5-e2", promptFr: "135 est-il divisible par 3 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
      { id: "a3-5-e3", promptFr: "Quel chiffre des unités garantit la divisibilité par 5 ? (deux réponses)", type: "short_text", acceptable: ["0 ou 5", "0 or 5", "5 ou 0"] },
      { id: "a3-5-e4", promptFr: "La somme des chiffres de 261 vaut ?", type: "number", acceptable: ["9"] },
      { id: "a3-5-e5", promptFr: "261 est-il divisible par 9 ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
    ],
  };
