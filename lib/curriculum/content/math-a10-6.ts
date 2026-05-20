import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-6",
    submoduleCode: "A10.6",
    theory: {
      title: {
        fr: "Problèmes concrets (mise en équation)",
        en: "Concrete problems (setting up equations)",
        ar: "مسائل ملموسة (إنشاء المعادلة)",
        fa: "مسائل ملموس (تشکیل معادله)",
        ti: "ናይ ሓቂ ዓለም ጸገማት (ምዕርርያ ምትእትታው)",
        uk: "Прикладні задачі (складання рівняння)",
      },
      paragraphs: {
        fr: [
          "Mise en équation : (1) nommer l'inconnue (ex. : soit x l'âge de Marc) ; (2) traduire l'énoncé en équation ; (3) résoudre ; (4) répondre à la question.",
          "Exemple : « Lucie a 8 ans de plus que son frère. La somme de leurs âges est 30. Quel est l'âge du frère ? » → Frère : x, Lucie : x + 8 → x + (x + 8) = 30 → 2x + 8 = 30 → x = 11.",
          "Exemple périmètre : « Un rectangle a un périmètre de 36 cm. La longueur est le double de la largeur. Trouve la largeur. » → largeur = x, longueur = 2x → 2(x + 2x) = 36 → 6x = 36 → x = 6 cm.",
          "Relire l'énoncé après avoir résolu pour vérifier la cohérence de la réponse.",
        ],
        en: [
          "Setting up: (1) name the unknown; (2) translate the statement into an equation; (3) solve; (4) answer the question.",
          "Example: 'Lucie is 8 years older than her brother. Their ages sum to 30.' → x + (x+8)=30 → x=11.",
          "Perimeter example: 'Length is twice the width, perimeter is 36 cm.' → 2(x+2x)=36 → x=6 cm.",
          "Re-read the problem after solving to check the answer makes sense.",
        ],
        ar: [
          "إنشاء المعادلة: (1) تسمية المجهول؛ (2) ترجمة النص؛ (3) الحل؛ (4) الإجابة.",
          "مثال: «لوسي أكبر من أخيها بـ8 سنوات. مجموع أعمارهما 30.» → x + (x+8) = 30 → x = 11.",
          "مثال المحيط: «طول المستطيل ضعف عرضه، محيطه 36 سم.» → 6x = 36 → x = 6 سم.",
          "أعد قراءة النص بعد الحل للتحقق من المنطقية.",
        ],
        fa: [
          "تشکیل معادله: (1) مجهول را نام‌گذاری کن؛ (2) جمله را به معادله ترجمه کن؛ (3) حل کن؛ (4) جواب بده.",
          "مثال: «لوسی 8 سال از برادرش بزرگ‌تر است. مجموع سنشان 30 است.» → x + (x+8) = 30 → x = 11.",
          "مثال محیط: «طول دو برابر عرض، محیط 36 سانتیمتر.» → 6x = 36 → x = 6 سانتیمتر.",
          "بعد از حل مسئله را مجدداً بخوان تا منطقی بودن جواب را تأیید کنی.",
        ],
        ti: [
          "ምትእትታው: (1) ዘይፍለጥ ምስማዩ; (2) ቃል ናብ ምዕርርያ ምትርጓም; (3) ምፍታሕ; (4) ናብ ሕቶ ምምላስ.",
          "ምሳሌ: «ሉሲ ካብ ሓዋ 8 ዓመት ዓቢ ዩ. ዕድሚኦም ጠቅላሊ 30 ዩ.» → x + (x+8) = 30 → x = 11.",
          "ናይ ዙሪያ ምሳሌ: «ቁመት ናይ ወርሓ ካልኦቲ ዩ ዙሪያ 36 ሰም.» → 6x = 36 → x = 6 ሰም.",
          "ምፍትሒ ምስ ርኸብካ ናይ ቃል ሕቶ ደጊምካ ኣንብቦ.",
        ],
        uk: [
          "Складання рівняння: (1) назвати невідому; (2) перекласти умову на мову рівняння; (3) розв'язати; (4) відповісти на запитання.",
          "Приклад: «Люсі на 8 років старша за брата. Сума їх віків 30.» → x + (x+8) = 30 → x = 11.",
          "Задача про периметр: «Довжина вдвічі більша за ширину, периметр 36 см.» → 6x = 36 → x = 6 см.",
          "Після розв'язання перечитати умову, щоб перевірити відповідь.",
        ],
      },
    },
    exercises: [
      { id: "a10-6-e1", promptFr: "Un nombre augmenté de 7 donne 23. Quel est ce nombre ?", type: "number", acceptable: ["16"] },
      { id: "a10-6-e2", promptFr: "Deux fois un nombre plus 3 égale 15. Quel est ce nombre ?", type: "number", acceptable: ["6"] },
      { id: "a10-6-e3", promptFr: "Léa a 5 ans de moins que Marc. Ensemble ils ont 31 ans. Quel est l'âge de Léa ?", type: "number", acceptable: ["13"] },
      { id: "a10-6-e4", promptFr: "Un rectangle a pour longueur le triple de la largeur. Périmètre = 40 cm. Trouve la largeur.", type: "number", acceptable: ["5"] },
      { id: "a10-6-e5", promptFr: "3 stylos coûtent autant que 2 stylos + 4 €. Quel est le prix d'un stylo ?", type: "number", acceptable: ["4"] },
    ],
  };
