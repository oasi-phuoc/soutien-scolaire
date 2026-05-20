import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-6",
    submoduleCode: "S2.6",
    theory: {
      title: {
        fr: "Simulation et fréquences",
        en: "Simulation and Frequencies",
        ar: "المحاكاة والتكرارات",
        fa: "شبیه‌سازی و فراوانی‌ها",
        ti: "ምምስሳል ን ድርጊታት",
        uk: "Симуляція та частоти",
      },
      paragraphs: {
        fr: [
          "La simulation consiste à réaliser une expérience aléatoire un grand nombre de fois (réellement ou à l'aide d'un logiciel) pour estimer des probabilités.",
          "Fréquence relative observée : f(A) = (nombre de fois où A s'est réalisé) / (nombre total d'essais). Cette fréquence est une estimation de P(A).",
          "Loi des grands nombres : plus le nombre d'essais est grand, plus la fréquence relative se rapproche de la probabilité théorique.",
          "Exemple : on lance une pièce 100 fois et on obtient 48 fois face. La fréquence observée est 48/100 = 0,48. La probabilité théorique est 0,5 — elles sont proches.",
          "Les simulations peuvent être réalisées avec un dé, des cartes, un tableur (fonction ALEA) ou un logiciel de statistiques.",
        ],
        en: [
          "Simulation involves repeating a random experiment a large number of times (physically or with software) to estimate probabilities.",
          "Observed relative frequency: f(A) = (number of times A occurred) / (total number of trials). This frequency estimates P(A).",
          "Law of Large Numbers: the more trials, the closer the relative frequency gets to the theoretical probability.",
          "Example: flip a coin 100 times, get heads 48 times. Observed frequency = 48/100 = 0.48. Theoretical probability = 0.5 — they are close.",
          "Simulations can use dice, cards, a spreadsheet (RAND function) or statistics software.",
        ],
        ar: [
          "المحاكاة تقوم بتكرار التجربة العشوائية مرات عديدة (فعليًا أو ببرنامج) لتقدير الاحتمالات.",
          "التكرار النسبي الملاحَظ: f(A) = عدد مرات تحقق A / مجموع التجارب. هذا التكرار تقدير لـ P(A).",
          "قانون الأعداد الكبيرة: كلما زادت التجارب اقترب التكرار النسبي من الاحتمال النظري.",
          "مثال: قلب عملة 100 مرة، ظهور صورة 48 مرة. التكرار = 0,48. الاحتمال النظري = 0,5.",
          "يمكن إجراء المحاكاة بالنرد أو الأوراق أو جدول إلكتروني (دالة ALEA).",
        ],
        fa: [
          "شبیه‌سازی شامل تکرار یک آزمایش تصادفی برای تعداد زیادی بار (به صورت واقعی یا با نرم‌افزار) برای تخمین احتمال‌ها است.",
          "فراوانی نسبی مشاهده‌شده: f(A) = تعداد دفعاتی که A رخ داده / تعداد کل آزمایش‌ها. این فراوانی تخمینی از P(A) است.",
          "قانون اعداد بزرگ: هرچه تعداد آزمایش‌ها بیشتر باشد، فراوانی نسبی به احتمال نظری نزدیک‌تر می‌شود.",
          "مثال: سکه را ۱۰۰ بار می‌اندازیم و ۴۸ بار شیر می‌آید. فراوانی مشاهده‌شده = ۰٫۴۸. احتمال نظری = ۰٫۵.",
          "شبیه‌سازی‌ها می‌توانند با تاس، کارت، صفحه گسترده (تابع RAND) یا نرم‌افزار آمار انجام شوند.",
        ],
        ti: [
          "ምምስሳል ናይ ዕድል ፈተነ ብዙሕ ጊዜ ምድጋም (ኣካላዊ ወይ ብሶፍትዌር) ናይ ዕድሎ ምግምጋም ማለት እዩ።",
          "ዝተዓዘበ ዝምድናዊ ድርጊት: f(A) = ናይ A ዝካኣለ ጊዜ ቁጽሪ / ጠቅላላ ፈተናታት. እዚ ናይ P(A) ምግምጋም እዩ።",
          "ሕጊ ናይ ዓብዪ ቁጽሪ: ፈተናታት ብዝዛየዱ ዝምድናዊ ድርጊት ናብ ናይ ሓሳብ ዕድሊ ቀሪቡ ይኸይድ።",
          "ኣብነት: ሳንቲም 100 ጊዜ ምድርባይ፣ 48 ጊዜ ርእሲ ምርካብ. f = 48/100 = 0,48. ናይ ሓሳብ ዕድሊ = 0,5.",
          "ምምስሳልን ብቀለዓ፣ ካርዳት፣ ሌኪ (ALEA ተርእዮ) ወይ ናይ ስታቲስቲክስ ሶፍትዌር ክፍጸም ይኽእል።",
        ],
        uk: [
          "Симуляція полягає у багатократному повторенні випадкового досліду (реально або з програмою) для оцінки імовірностей.",
          "Спостережена відносна частота: f(A) = (кількість разів, коли A відбулась) / (загальна кількість спроб). Це оцінка P(A).",
          "Закон великих чисел: що більше спроб, то ближча відносна частота до теоретичної імовірності.",
          "Приклад: підкидаємо монету 100 разів, отримуємо орел 48 разів. f = 0,48. Теоретична імовірність = 0,5 — значення близькі.",
          "Симуляції можна проводити за допомогою кубика, карт, електронної таблиці (функція RAND) або статистичного програмного забезпечення.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-6-e1",
        promptFr: "On lance une pièce 200 fois et on obtient 94 fois pile. Quelle est la fréquence relative de 'pile' ?",
        type: "short_text",
        acceptable: ["94/200", "47/100", "0,47", "0.47"],
      },
      {
        id: "s2-6-e2",
        promptFr: "On lance un dé 600 fois et on obtient un 6 exactement 95 fois. La fréquence observée de '6' est-elle proche de la probabilité théorique 1/6 ≈ 0,167 ? Réponds par oui ou non.",
        type: "short_text",
        acceptable: ["oui", "Oui", "OUI"],
      },
      {
        id: "s2-6-e3",
        promptFr: "Après 1000 lancers d'un dé équilibré, environ combien de fois devrait-on obtenir un 3 ?",
        type: "short_text",
        acceptable: ["167", "166", "about 167", "environ 167"],
      },
      {
        id: "s2-6-e4",
        promptFr: "Qu'est-ce que la loi des grands nombres nous dit sur la fréquence relative quand le nombre d'essais augmente ?",
        type: "short_text",
        acceptable: [
          "elle se rapproche de la probabilité théorique",
          "elle converge vers la probabilité",
          "elle tend vers la probabilité",
        ],
      },
      {
        id: "s2-6-e5",
        promptFr: "On observe que sur 500 essais, la fréquence de l'événement A est 0,32. Quelle est ton estimation de P(A) ?",
        type: "short_text",
        acceptable: ["0,32", "0.32", "32%", "32 %"],
      },
    ],
  };
