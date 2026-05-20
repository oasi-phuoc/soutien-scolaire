import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-3",
    submoduleCode: "A3.3",
    theory: {
      title: {
        fr: "Division euclidienne",
        en: "Euclidean division",
        ar: "القسمة الإقليدية",
        fa: "تقسیم اقلیدسی",
        ti: "ክፍፍል ኤውክሊዳዊ",
        uk: "Ділення з остачею",
      },
      paragraphs: {
        fr: [
          "La division sert à partager ou répartir une quantité. C'est chercher combien de fois un nombre est contenu dans un autre. Le signe de la division est « ÷ » (diviser). Le nombre que l'on divise est le dividende. Le nombre par lequel on divise est le diviseur. Le résultat est le quotient.",
          "On ne peut pas échanger le dividende et le diviseur : 45 ÷ 9 = 5, mais 9 ÷ 45 ≠ 5.",
          "Division euclidienne : parfois la division n'est pas exacte et il reste un nombre appelé reste. Exemple : 361 ÷ 13 = 27 reste 10 (car 27 × 13 = 351, et 361 − 351 = 10). Le reste est toujours inférieur au diviseur.",
          "Division en colonnes : écrivez le dividende à gauche et le diviseur à droite. Prenez les chiffres du dividende de gauche à droite et divisez par le diviseur. Exemple : 327 ÷ 6 → 3 ÷ 6 impossible → 32 ÷ 6 = 5 (reste 2) → 27 ÷ 6 = 4 (reste 3) → quotient : 54 reste 3.",
        ],
        en: [
          "Division distributes a quantity equally. It asks how many times one number is contained in another. The sign is « ÷ ». The number being divided is the dividend. The number we divide by is the divisor. The result is the quotient.",
          "You cannot swap dividend and divisor: 45 ÷ 9 = 5, but 9 ÷ 45 ≠ 5.",
          "Euclidean division: sometimes the division is not exact and there is a remainder. Example: 361 ÷ 13 = 27 remainder 10. The remainder is always less than the divisor.",
          "Long division: write the dividend on the left and divisor on the right. Take digits of the dividend left to right, dividing by the divisor. Example: 327 ÷ 6 → quotient 54, remainder 3.",
        ],
        ar: [
          "القسمة تُوزّع كمية بالتساوي. تحدد كم مرة يُحتوى عدد في آخر. علامة القسمة « ÷ ». العدد المقسوم هو المقسوم. العدد المقسوم عليه هو المقسوم عليه. الناتج هو الخارج.",
          "لا يمكن تبديل المقسوم والمقسوم عليه: 45 ÷ 9 = 5، لكن 9 ÷ 45 ≠ 5.",
          "القسمة الإقليدية: أحيانًا لا تكون القسمة دقيقة وتبقى باقٍ. مثال: 361 ÷ 13 = 27 باقٍ 10. الباقي دائمًا أصغر من المقسوم عليه.",
          "القسمة في أعمدة: اكتب المقسوم يسارًا والمقسوم عليه يمينًا. خذ أرقام المقسوم من اليسار إلى اليمين واقسم على المقسوم عليه. مثال: 327 ÷ 6 → خارج 54 باقٍ 3.",
        ],
        fa: [
          "تقسیم یک مقدار را به طور مساوی توزیع می‌کند. می‌پرسد چند بار یک عدد در عدد دیگری گنجانده می‌شود. علامت « ÷ ». عدد تقسیم‌شونده مقسوم علیه نام دارد. نتیجه خارج‌قسمت نام دارد.",
          "نمی‌توان مقسوم و مقسوم‌علیه را جابجا کرد: ۴۵ ÷ ۹ = ۵، اما ۹ ÷ ۴۵ ≠ ۵.",
          "تقسیم اقلیدسی: گاهی تقسیم دقیق نیست و باقیمانده‌ای وجود دارد. مثال: ۳۶۱ ÷ ۱۳ = ۲۷ باقیمانده ۱۰. باقیمانده همیشه کمتر از مقسوم‌علیه است.",
          "تقسیم ستونی: مقسوم را در چپ و مقسوم‌علیه را در راست بنویسید. ارقام مقسوم را از چپ به راست بگیرید و تقسیم کنید. مثال: ۳۲۷ ÷ ۶ → خارج‌قسمت ۵۴ باقیمانده ۳.",
        ],
        ti: [
          "ክፍፍል ሓደ መጠን ብማዕረ ይካፍል። ሓደ ቁጽሪ ካብ ካሊእ ቁጽሪ ክንደይ ጊዜ ዝሓዘ ምርካብ ማለት እዩ። ምልክት ክፍፍል « ÷ »። ዝተካፈለ ቁጽሪ ካፋሊ ይብሃል። ዝካፍለሉ ቁጽሪ ካፋሊ ይብሃል። ውጽኢቱ ሓቅ ዘርፊ ይብሃል።",
          "ካፋሊ ምስ ካፋሊ ኣይቅየርን: 45 ÷ 9 = 5, ኮነ 9 ÷ 45 ≠ 5.",
          "ኤውክሊዳዊ ክፍፍል: ሓደ ሓደ ጊዜ ክፍፍል ቅኑዕ ኣይኮነን ዝተረፈ ቁጽሪ ይህሉ። ኣብነት: 361 ÷ 13 = 27 ተረፈ 10. ተረፈ ካብ ካፋሊ ዝሓንሰ ኩሉ ጊዜ እዩ።",
          "ኣብ ዓምዲ ክፍፍል: ካፋሊ ካብ ጸጋም ጽሓፍ ካፋሊ ካብ ቀኝ ጽሓፍ። ካብ ጸጋም ናብ ቀኝ ቁጽርታት ሒዝካ ብካፋሊ ካፍሎ። ኣብነት: 327 ÷ 6 → ሓቅ ዘርፊ 54 ተረፈ 3.",
        ],
        uk: [
          "Ділення розподіляє кількість рівно. Воно відповідає на питання: скільки разів один number міститься в іншому. Знак « ÷ ». Число, що ділиться — ділене. Число, на яке ділять — дільник. Результат — частка.",
          "Ділене і дільник не можна міняти місцями: 45 ÷ 9 = 5, але 9 ÷ 45 ≠ 5.",
          "Ділення з остачею: іноді ділення не ціле й залишається остача. Приклад: 361 ÷ 13 = 27 остача 10. Остача завжди менша за дільник.",
          "Ділення в стовпчик: пишемо ділене ліворуч, дільник праворуч. Беремо цифри діленого зліва направо і ділимо. Приклад: 327 ÷ 6 → частка 54, остача 3.",
        ],
      },
    },
    exercises: [
      { id: "a3-3-e1", promptFr: "Calculez 45 ÷ 9.", type: "number", acceptable: ["5"] },
      { id: "a3-3-e2", promptFr: "Calculez 327 ÷ 6 (donnez le quotient).", type: "number", acceptable: ["54"] },
      { id: "a3-3-e3", promptFr: "Quel est le reste de 361 ÷ 13 ?", type: "number", acceptable: ["10"] },
      { id: "a3-3-e4", promptFr: "Comment appelle-t-on le résultat d'une division ?", type: "short_text", acceptable: ["quotient", "le quotient"] },
      { id: "a3-3-e5", promptFr: "Calculez 84 ÷ 7.", type: "number", acceptable: ["12"] },
    ],
  };
