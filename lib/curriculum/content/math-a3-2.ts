import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-2",
    submoduleCode: "A3.2",
    theory: {
      title: {
        fr: "Multiplication posée",
        en: "Long multiplication",
        ar: "الضرب المطوّل",
        fa: "ضرب دستی",
        ti: "ዘርፊ ዓምዲ",
        uk: "Множення в стовпчик",
      },
      paragraphs: {
        fr: [
          "Multiplication avec un facteur inférieur à 10 (partie 1) : écrivez les nombres en alignant les unités, les dizaines, les centaines. Commencez par multiplier les unités, puis les dizaines, puis les centaines. Retenez si nécessaire.",
          "Exemple : 167 × 3 → unités : 3 × 7 = 21 (pose 1, retient 2) → dizaines : 3 × 6 = 18, + 2 = 20 (pose 0, retient 2) → centaines : 3 × 1 = 3, + 2 = 5 → résultat : 501.",
          "Multiplication avec deux facteurs supérieurs à 10 (partie 2) : on décompose en deux lignes. Ligne 1 : multiplier par les unités du 2ᵉ facteur. Ligne 2 : multiplier par les dizaines du 2ᵉ facteur (ajouter un 0 à droite). Additionner les deux lignes.",
          "Exemple : 167 × 53 → Ligne 1 : 167 × 3 = 501. Ligne 2 : 167 × 50 = 8 350. Résultat : 501 + 8 350 = 8 851.",
        ],
        en: [
          "Multiplication with one factor under 10 (part 1): write the numbers aligned. Start from the units, then tens, then hundreds. Carry if needed.",
          "Example: 167 × 3 → units: 3×7=21 (write 1, carry 2) → tens: 3×6=18+2=20 (write 0, carry 2) → hundreds: 3×1=3+2=5 → result: 501.",
          "Multiplication with two factors above 10 (part 2): split into two rows. Row 1: multiply by the units digit of the 2nd factor. Row 2: multiply by the tens digit (add a 0 on the right). Add the two rows.",
          "Example: 167 × 53 → Row 1: 167×3=501. Row 2: 167×50=8 350. Result: 501+8 350=8 851.",
        ],
        ar: [
          "الضرب مع عامل أقل من 10 (الجزء 1): اكتب الأعداد محاذيًا. ابدأ من الآحاد ثم العشرات ثم المئات. احمل إذا لزم.",
          "مثال: 167 × 3 → آحاد: 3×7=21 (اكتب 1، احمل 2) → عشرات: 3×6=18+2=20 (اكتب 0، احمل 2) → مئات: 3×1=3+2=5 → الناتج: 501.",
          "الضرب مع عاملين أكبر من 10 (الجزء 2): نقسّم إلى سطرين. السطر 1: اضرب في رقم آحاد العامل الثاني. السطر 2: اضرب في رقم عشرات العامل الثاني (أضف صفرًا يمينًا). ثم اجمع السطرين.",
          "مثال: 167 × 53 → السطر 1: 167×3=501. السطر 2: 167×50=8350. الناتج: 501+8350=8851.",
        ],
        fa: [
          "ضرب با یک عامل کمتر از ۱۰ (قسمت ۱): اعداد را تراز کنید. از یکان شروع کنید، سپس دهگان، سپس صدگان. در صورت نیاز نقل دهید.",
          "مثال: ۱۶۷ × ۳ → یکان: ۳×۷=۲۱ (بنویس ۱، نقل ۲) → دهگان: ۳×۶=۱۸+۲=۲۰ (بنویس ۰، نقل ۲) → صدگان: ۳×۱=۳+۲=۵ → نتیجه: ۵۰۱.",
          "ضرب با دو عامل بیشتر از ۱۰ (قسمت ۲): به دو ردیف تقسیم کنید. ردیف ۱: ضرب در رقم یکان عامل دوم. ردیف ۲: ضرب در رقم دهگان عامل دوم (یک ۰ به راست اضافه کنید). سپس دو ردیف را جمع کنید.",
          "مثال: ۱۶۷ × ۵۳ → ردیف ۱: ۱۶۷×۳=۵۰۱. ردیف ۲: ۱۶۷×۵۰=۸۳۵۰. نتیجه: ۵۰۱+۸۳۵۰=۸۸۵۱.",
        ],
        ti: [
          "ዘርፊ ምስ ሓደ ምቅናስ ትሕቲ 10 (ክፋል 1): ቁጽርታት ብምስልሳልና ዓምዲ ዝርዝ። ካብ ኣሃዱ ጀምር ዓሰርተ ቀጽል ሚእቲ ድሕሪ ምስዓብ።",
          "ኣብነት: 167 × 3 → ኣሃዱ: 3×7=21 (1 ጽሓፍ 2 ሃሊዝ) → ዓሰርተ: 3×6=18+2=20 (0 ጽሓፍ 2 ሃሊዝ) → ሚእቲ: 3×1=3+2=5 → ውጽኢት: 501.",
          "ዘርፊ ምስ ክልተ ምቅናስ ዝዓቢ ካብ 10 (ክፋል 2): ናብ ክልተ ሰሪ ፈናቅስ። ሰሪ 1: ብ ኣሃዱ ናይ 2ይ ምቅናስ ዘርፋ። ሰሪ 2: ብ ዓሰርተ ናይ 2ይ ምቅናስ ዘርፋ (0 ናብ ቀኝ ወስኽ)። ክልቲኦም ሰሪ ደምር።",
          "ኣብነት: 167 × 53 → ሰሪ 1: 167×3=501. ሰሪ 2: 167×50=8350. ውጽኢት: 501+8350=8851.",
        ],
        uk: [
          "Множення з одним множником менше 10 (частина 1): запишіть числа вирівнюючи стовпці. Починайте з одиниць, потім десятки, потім сотні. Переносьте якщо потрібно.",
          "Приклад: 167 × 3 → одиниці: 3×7=21 (пишемо 1, переносимо 2) → десятки: 3×6=18+2=20 (пишемо 0, переносимо 2) → сотні: 3×1=3+2=5 → результат: 501.",
          "Множення з двома множниками більше 10 (частина 2): розбиваємо на два рядки. Рядок 1: множимо на цифру одиниць 2-го множника. Рядок 2: множимо на цифру десятків (додаємо 0 праворуч). Складаємо обидва рядки.",
          "Приклад: 167 × 53 → Рядок 1: 167×3=501. Рядок 2: 167×50=8 350. Результат: 501+8 350=8 851.",
        ],
      },
    },
    exercises: [
      { id: "a3-2-e1", promptFr: "Calculez 167 × 3.", type: "number", acceptable: ["501"] },
      { id: "a3-2-e2", promptFr: "Calculez 45 × 6.", type: "number", acceptable: ["270"] },
      { id: "a3-2-e3", promptFr: "Calculez 23 × 14.", type: "number", acceptable: ["322"] },
      { id: "a3-2-e4", promptFr: "Calculez 52 × 37.", type: "number", acceptable: ["1924"] },
      { id: "a3-2-e5", promptFr: "Calculez 167 × 53.", type: "number", acceptable: ["8851"] },
    ],
  };
