import type { MathSubmoduleLesson } from "./math-a1-types";
import { A1_COMPTER_EN_FRANCAIS_ROWS } from "./math-a1-readaloud-rows";

export const MATH_A1_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A1-1",
    submoduleCode: "A1.1",
    theory: {
      title: {
        fr: "Compter en français",
        en: "Counting in French",
        ar: "العد بالفرنسية",
        fa: "شمارش به فرانسوی",
        ti: "ምቑጻር ብፈረንሳይ",
        uk: "Лічба французькою",
      },
      paragraphs: {
        fr: [
          "Un nombre entier s’écrit avec des chiffres (0 à 9).",
          "En français, on sépare souvent les milliers par une espace fine : 125 000.",
          "En Suisse romande, on utilise souvent septante, huitante et nonante pour 70, 80 et 90.",
        ],
        ar: [
          "نكتب العدد الصحيح بأرقام من 0 إلى 9.",
          "في الفرنسية، نفصل الآلاف أحيانًا بمسافة رفيعة : 125 000.",
          "في الروماندي السويسري يقال غالبًا septante وhuitante وnonante لـ 70 و80 و90.",
        ],
        fa: [
          "عدد صحیح را با ارقام ۰ تا ۹ می‌نویسیم.",
          "در فرانسوی، هزارگان را گاه با فاصلهٔ ظریف جدا می‌کنند: ۱۲۵ ۰۰۰.",
          "در سوئیس رماند معمولاً برای ۷۰ و ۸۰ و ۹۰ می‌گویند septante، huitante، nonante.",
        ],
        ti: [
          "ኣኃዝቲ ብኣሃዝቲ 0-9 ይጽዓን።",
          "ኣብ ፈረንሳይ ሽሕታት ብልዝብ ክፈልጹ ይኽእሉ።",
          "ኣብ ስዊዘርላንድ ብ 70-80-90 septante ፡ huitante ፡ nonante ይበሃሉ ።",
        ],
        uk: [
          "Ціле число записують цифрами від 0 до 9.",
          "У французькій тисячі часто відокремлюють тонким пробілом: 125 000.",
          "У романській Швейцарії для 70, 80 і 90 часто кажуть septante, huitante, nonante.",
        ],
        en: [
          "A whole number is written with digits (0 to 9).",
          "In French, thousands are often separated by a thin space: 125 000.",
          "In French-speaking Switzerland, people often say septante, huitante and nonante for 70, 80 and 90.",
        ],
      },
      readAloud: {
        headingFr: "Enregistrement",
        legendFr: [
          {
            swatch: "red", labelFr: "Rouge : un seul son",
            labelPivot: {
              en: "Red: one sound", ar: "أحمر: صوت واحد",
              fa: "قرمز: یک صدا", uk: "Червоний: один звук", ti: "ቀይሕ: ሓደ ድምጺ",
            },
          },
          {
            swatch: "text", labelFr: "Noir : son",
            labelPivot: {
              en: "Black: sound", ar: "أسود: صوت",
              fa: "سیاه: صدا", uk: "Чорний: звук", ti: "ጸሊም: ድምጺ",
            },
          },
          {
            swatch: "gray", labelFr: "Gris : pas de son",
            labelPivot: {
              en: "Gray: silent", ar: "رمادي: بدون صوت",
              fa: "خاکستری: بی‌صدا", uk: "Сірий: без звуку", ti: "ሕምብርቲ: ድምጺ የብሉን",
            },
          },
        ],
        rows: A1_COMPTER_EN_FRANCAIS_ROWS,
        audioSrc: "/audio/a1-1-compter-fr.m4a",
      },
    },
    exercises: [
      {
        id: "a11-1",
        promptFr: "Écris en chiffres : trois cent quarante-sept.",
        promptPivot: {
          en: "Write in digits: three hundred forty-seven.",
          ar: "اكتب بالأرقام: ثلاثمئة وسبعة وأربعون.",
          fa: "به رقم بنویس: سیصد و چهل و هفت.",
          uk: "Запиши цифрами: триста сорок сім.",
        },
        type: "number",
        acceptable: ["347"],
      },
      {
        id: "a11-2",
        promptFr: "Écris en lettres (en un seul mot en français) : 508",
        promptPivot: {
          en: "Write in words as a single French word: 508",
          ar: "اكتب بالحروف (بالفرنسية): 508",
          fa: "به حروف (فرانسوی، یک کلمه): ۵۰۸",
          uk: "Одним словом французькою: 508",
        },
        type: "short_text",
        acceptable: ["cinqcenthuit", "cinqcentuit"],
      },
      {
        id: "a11-3",
        promptFr: "Combien y a-t-il d’unités dans 60 ?",
        promptPivot: {
          en: "How many units are in 60?",
          ar: "كم وحدة في العدد 60؟",
          fa: "در ۶۰ چند یکی وجود دارد؟",
          uk: "Скільки одиниць у числі 60?",
        },
        type: "number",
        acceptable: ["0"],
      },
      {
        id: "a11-4",
        promptFr: "Quel est le plus grand : 892 ou 928 ? (écris le nombre gagnant)",
        promptPivot: {
          en: "Which is greater: 892 or 928? (write the larger number)",
          ar: "أيهما أكبر: 892 أم 928؟ (اكتب العدد الأكبر)",
          fa: "کدام بزرگ‌تر است: ۸۹۲ یا ۹۲۸؟ (عدد بزرگ‌تر را بنویس)",
          uk: "Що більше: 892 чи 928? (запиши більше)",
        },
        type: "number",
        acceptable: ["928"],
      },
    ],
  };
