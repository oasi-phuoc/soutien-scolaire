import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A4-6",
    submoduleCode: "A4.6",
    theory: {
      title: { fr: "Addition/soustraction dénominateurs différents (PPCM)", en: "Add/subtract different denominators (LCM)", ar: "الجمع والطرح بمقامين مختلفين", fa: "جمع/تفریق با مخرج‌های مختلف", ti: "ምደማር/ምቅናስ ዝተፈላለየ ሚዛን", uk: "Різні знаменники (НСК)" },
      paragraphs: {
        fr: [
          "Pour additionner ou soustraire des fractions avec des dénominateurs différents, il faut d'abord trouver un dénominateur commun (idéalement le PPCM des dénominateurs).",
          "Étapes : 1) Trouver le PPCM des dénominateurs. 2) Transformer chaque fraction en fraction équivalente avec ce dénominateur. 3) Additionner ou soustraire les numérateurs. 4) Simplifier si possible.",
          "Exemple : 1/3 + 1/4 → PPCM(3,4) = 12 → 1/3 = 4/12 et 1/4 = 3/12 → 4/12 + 3/12 = 7/12.",
        ],
        en: [
          "To add or subtract fractions with different denominators, first find a common denominator (ideally the LCM).",
          "Steps: 1) Find LCM of denominators. 2) Convert each fraction to equivalent fraction with that denominator. 3) Add or subtract numerators. 4) Simplify if possible.",
          "Example: 1/3 + 1/4 → LCM(3,4)=12 → 4/12 + 3/12 = 7/12.",
        ],
        ar: [
          "لجمع أو طرح كسور بمقامات مختلفة، ابحث أولًا عن مقام مشترك (م.م.أ للمقامين).",
          "الخطوات: 1) إيجاد م.م.أ. 2) تحويل كل كسر إلى كسر مكافئ بذلك المقام. 3) جمع أو طرح البسطين. 4) تبسيط إن أمكن.",
          "مثال: 1/3 + 1/4 → م.م.أ(3,4)=12 → 4/12 + 3/12 = 7/12.",
        ],
        fa: [
          "برای جمع یا تفریق کسرها با مخرج‌های متفاوت، ابتدا مخرج مشترک پیدا کنید (به طور ایده‌آل ک.م.م).",
          "مراحل: ۱) ک.م.م مخرج‌ها را بیابید. ۲) هر کسر را به کسر معادل با آن مخرج تبدیل کنید. ۳) صورت‌ها را جمع یا تفریق کنید. ۴) در صورت امکان ساده کنید.",
          "مثال: ۱/۳ + ۱/۴ → ک.م.م(۳،۴)=۱۲ → ۴/۱۲ + ۳/۱۲ = ۷/۱۲.",
        ],
        ti: [
          "ዝተፈላለየ ሚዛን ናይ ዘለዎም ፍርቂ ምደማር ወይ ምቅናስ ቅድሚ ሓባራዊ ሚዛን ምርካብ (ዝበለጸ PPCM) ይሓትት።",
          "ስጉምቲ: 1) PPCM ናይ ሚዛን ቁጽርታት ረኽቦ. 2) ነፍሲ ዱ ፍርቂ ናብ ሓደ ሚዛን ማዕረ ፍርቂ ቀይሮ. 3) ናይ ዝለዓለ ቁጽርታት ደምር ወይ ቀንስ. 4) ቅጸ ዝሓሸ ተኻኢሉ.",
          "ኣብነት: 1/3 + 1/4 → PPCM(3,4)=12 → 4/12 + 3/12 = 7/12.",
        ],
        uk: [
          "Щоб додати або відняти дроби з різними знаменниками, спочатку знайдіть спільний знаменник (НСК).",
          "Кроки: 1) Знайти НСК знаменників. 2) Перетворити кожен дріб у рівноцінний з цим знаменником. 3) Додати або відняти чисельники. 4) Спростити якщо можливо.",
          "Приклад: 1/3 + 1/4 → НСК(3,4)=12 → 4/12 + 3/12 = 7/12.",
        ],
      },
    },
    exercises: [
      { id: "a4-6-e1", promptFr: "Calculez 1/3 + 1/4.", type: "short_text", acceptable: ["7/12"] },
      { id: "a4-6-e2", promptFr: "Calculez 1/2 + 1/3.", type: "short_text", acceptable: ["5/6"] },
      { id: "a4-6-e3", promptFr: "Calculez 3/4 − 1/3.", type: "short_text", acceptable: ["5/12"] },
      { id: "a4-6-e4", promptFr: "Calculez 2/5 + 3/10.", type: "short_text", acceptable: ["7/10"] },
      { id: "a4-6-e5", promptFr: "Calculez 5/6 − 1/4.", type: "short_text", acceptable: ["7/12"] },
    ],
  };
