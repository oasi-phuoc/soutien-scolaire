import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-6",
    submoduleCode: "A13.6",
    theory: {
      title: {
        fr: "Pente et ordonnée à l'origine",
        en: "Slope and y-intercept",
        ar: "الميل ونقطة القطع مع المحور y",
        fa: "شیب و عرض از مبدأ",
        ti: "ሃፍን ናይ y ሕርሚ ምቁራጽን",
        uk: "Кутовий коефіцієнт і початкова ордината",
      },
      paragraphs: {
        fr: [
          "La pente (ou coefficient directeur) a d'une droite mesure sa variation : pour chaque unité de déplacement vers la droite, y augmente de a. a = Δy/Δx = (y₂ − y₁)/(x₂ − x₁).",
          "Exemple : si la droite passe par A(1, 3) et B(3, 7) : a = (7−3)/(3−1) = 4/2 = 2.",
          "L'ordonnée à l'origine b est la valeur de y lorsque x = 0. Elle se lit directement sur le graphique (point d'intersection avec l'axe y).",
          "Pente positive → droite croissante. Pente négative → droite décroissante. Pente nulle → droite horizontale.",
        ],
        en: [
          "The slope a measures how steep the line is: for each unit right, y increases by a. a = (y₂ − y₁)/(x₂ − x₁).",
          "Example: line through A(1,3) and B(3,7): a = (7−3)/(3−1) = 2.",
          "The y-intercept b is the y-value when x = 0, read directly from the graph.",
          "Positive slope → increasing line. Negative → decreasing. Zero → horizontal.",
        ],
        ar: [
          "الميل a يقيس انحدار الخط: لكل وحدة يميناً y يتغير بـ a. a = (y₂ − y₁)/(x₂ − x₁).",
          "مثال: خط يمر بـ A(1,3) وB(3,7): a = 2.",
          "b هو قيمة y عند x = 0، يُقرأ من الرسم.",
          "ميل موجب → خط صاعد. سالب → نازل. صفر → أفقي.",
        ],
        fa: [
          "شیب a شیب خط را اندازه می‌گیرد: برای هر واحد حرکت به راست، y به اندازه a تغییر می‌کند. a = (y₂ − y₁)/(x₂ − x₁).",
          "مثال: خط از A(1,3) و B(3,7): a = 2.",
          "b مقدار y در x = 0 است که از نمودار خوانده می‌شود.",
          "شیب مثبت → خط صعودی. منفی → نزولی. صفر → افقی.",
        ],
        ti: [
          "ሃፍ a ናይ ሕርሚ ምቑጻር ዝውስን ዩ: ሓደ ናብ የምን ምቅሻሽ x ናብ y ብ a ዝቕይር. a = (y₂ − y₁)/(x₂ − x₁).",
          "ምሳሌ: A(1,3) ን B(3,7) ዝሓልፍ ሕርሚ: a = 2.",
          "b ምስ x = 0 ናይ y ዋጋ ዩ ካብ ስዕሊ ዝንበብ.",
          "ኣወንታዊ ሃፍ → ዕሊ ሕርሚ. ኣሉታዊ → ኣፍ ታሕቲ. ዜሮ → ቀጥታ ኣፍ ደርቢ.",
        ],
        uk: [
          "Кутовий коефіцієнт a вимірює нахил прямої: на кожну одиницю вправо y змінюється на a. a = (y₂ − y₁)/(x₂ − x₁).",
          "Приклад: пряма через A(1,3) і B(3,7): a = (7−3)/(3−1) = 2.",
          "Початкова ордината b — значення y при x = 0, читається з графіка.",
          "Додатній нахил → зростаюча пряма. Від'ємний → спадна. Нульовий → горизонтальна.",
        ],
      },
    },
    exercises: [
      { id: "a13-6-e1", promptFr: "Calcule la pente d'une droite passant par (0,1) et (2,5).", type: "number", acceptable: ["2"] },
      { id: "a13-6-e2", promptFr: "Calcule la pente passant par (1,3) et (4,9).", type: "number", acceptable: ["2"] },
      { id: "a13-6-e3", promptFr: "Quelle est l'ordonnée à l'origine de la droite passant par (0,4) et (3,7) ?", type: "number", acceptable: ["4"] },
      { id: "a13-6-e4", promptFr: "Une droite a une pente de −3 et passe par (0, 5). En x = 2, y = ?", type: "number", acceptable: ["-1", "−1"] },
      { id: "a13-6-e5", promptFr: "La pente d'une droite horizontale vaut combien ?", type: "number", acceptable: ["0"] },
    ],
  };
