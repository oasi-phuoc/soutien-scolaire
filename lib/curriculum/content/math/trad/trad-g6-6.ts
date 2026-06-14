import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G6_6: SubmoduleTrad = {
  submoduleId: "G6-6",
  title: {
    fr: "Isométries",
    en: "Isometries",
    ar: "التحويلات المتطابقة",
    fa: "ایزومتری‌ها",
    ti: "ናይ ዕኩል ምቅዋም",
    uk: "Ізометрії",
  },
  paragraphs: {
    fr: [
          "Une isométrie est une transformation qui conserve les distances (et donc aussi les angles et les aires). Les figures originale et image sont congruentes (superposables).",
          "Les quatre isométries du plan : translation, rotation, réflexion (symétrie axiale), symétrie glissante (composition d'une réflexion et d'une translation).",
          "Isométries directes (conservent l'orientation) : translation, rotation. Isométries indirectes (inversent l'orientation) : réflexion, symétrie glissante.",
          "L'homothétie (avec k ≠ ±1) n'est PAS une isométrie car elle modifie les distances.",
        ],
    en: [
          "An isometry preserves distances (and thus angles and areas). Original and image are congruent.",
          "Four plane isometries: translation, rotation, reflection, glide reflection.",
          "Direct (preserve orientation): translation, rotation. Indirect (reverse orientation): reflection, glide reflection.",
          "Homothety (k ≠ ±1) is NOT an isometry as it changes distances.",
        ],
    ar: [
          "الإسومتري تحافظ على المسافات (وبالتالي الزوايا والمساحات). الأصل والصورة متطابقان.",
          "أربعة إسومتريات مستوية: إزاحة، دوران، انعكاس، انعكاس انزلاقي.",
          "مباشرة (تحافظ على الاتجاه): إزاحة، دوران. غير مباشرة: انعكاس، انعكاس انزلاقي.",
          "التمثيل المتناسب (k ≠ ±1) ليس إسومتري لأنه يغير المسافات.",
        ],
    fa: [
          "ایزومتری فاصله‌ها را حفظ می‌کند. اصل و تصویر همنهاد هستند.",
          "چهار ایزومتری صفحه: انتقال، دوران، بازتاب، بازتاب لغزنده.",
          "مستقیم (جهت را حفظ می‌کند): انتقال، دوران. غیرمستقیم: بازتاب.",
          "همتایی (k ≠ ±1) ایزومتری نیست چون فاصله‌ها را تغییر می‌دهد.",
        ],
    ti: [
          "ናይ ዕኩል ምቅዋም ርሕቀት ዘቕቅብ ምቅዋም ዩ. ናህሰ ን ምስሊ ተመሳሳሊ ዩ.",
          "ሓደ ደርቢ ናይ ዕኩል ምቅዋም: ምስቅቅልዋ, ምምቕቃሉ, ምቅዋም, ናይ ምቅዋም ምስቅቅልዋ.",
          "ቀጥታ: ምስቅቅልዋ, ምምቕቃሉ. ዘይቀጥታ: ምቅዋም.",
          "ዓቢ ምኻናን ናይ ዕኩል ምቅዋም ዘይኮነ ምስ k ≠ ±1.",
        ],
    uk: [
          "Ізометрія зберігає відстані (і кути, і площі). Оригінал і образ конгруентні.",
          "Чотири ізометрії площини: паралельне перенесення, поворот, відображення, дзеркально-паралельне перенесення.",
          "Прямі (зберігають орієнтацію): перенесення, поворот. Обернені: відображення.",
          "Гомотетія (k ≠ ±1) НЕ є ізометрією, бо змінює відстані.",
        ],
  },
  consignes: {
    "g5-6-e1": { fr: "La translation est-elle une isométrie ? (oui/non)", en: "Is translation an isometry? (yes/no)" },
    "g5-6-e2": { fr: "L'homothétie de rapport 2 est-elle une isométrie ? (oui/non)", en: "Is a dilation with scale factor 2 an isometry? (yes/no)" },
    "g5-6-e3": { fr: "Cite deux isométries directes.", en: "Name two direct isometries." },
    "g5-6-e4": { fr: "Une isométrie conserve-t-elle les aires ? (oui/non)", en: "Does an isometry preserve areas? (yes/no)" },
    "g5-6-e5": { fr: "Combien d'isométries du plan existe-t-il (types fondamentaux) ?", en: "How many plane isometries are there (basic types)?" },
  },
};