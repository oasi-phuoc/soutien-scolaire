import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-4",
    submoduleCode: "G9.4",
    theory: {
      title: {
        fr: "Diagramme en secteurs (camembert)",
        en: "Pie chart",
        ar: "مخطط دائري",
        fa: "نمودار دایره‌ای",
        ti: "ናይ ዓውዲ ሰሌዳ",
        uk: "Кругова діаграма",
      },
      paragraphs: {
        fr: [
          "Un diagramme en secteurs (camembert) représente des proportions. Chaque secteur correspond à une partie du total. La somme des angles vaut 360°.",
          "Calcul de l'angle d'un secteur : α = (valeur / total) × 360°.",
          "Exemple : sur 50 élèves, 20 aiment le foot. α = (20/50) × 360° = 144°.",
          "Utilisation : montrer des répartitions (parts de marché, emploi du temps, votes…).",
        ],
        en: [
          "A pie chart shows proportions. Each sector is part of a total. Angles sum to 360°.",
          "Sector angle: α = (value / total) × 360°.",
          "Example: 20 out of 50 like football → α = 144°.",
          "Use: show distributions (market shares, schedules, votes…).",
        ],
        ar: [
          "المخطط الدائري يمثل النسب. كل قطاع جزء من الإجمالي. مجموع الزوايا = 360°.",
          "زاوية القطاع: α = (القيمة / الإجمالي) × 360°.",
          "مثال: 20 من 50 يحبون كرة القدم → α = 144°.",
          "الاستخدام: إظهار التوزيعات.",
        ],
        fa: [
          "نمودار دایره‌ای نسبت‌ها را نشان می‌دهد. هر قطاع بخشی از کل است. مجموع زوایا = 360°.",
          "زاویه قطاع: α = (مقدار / کل) × 360°.",
          "مثال: 20 نفر از 50 فوتبال دوست دارند → α = 144°.",
          "استفاده: نمایش توزیع‌ها.",
        ],
        ti: [
          "ናይ ዓውዲ ሰሌዳ ምምቅቃሎ ዘርኢ ዩ. ነፍሲ ወከፍ ዕዮ ናይ ምሉእ ክፋሉ ዩ. ናይ ኩርናዓት ድምር = 360°.",
          "ናይ ዕዮ ኩርናዕ: α = (ዋጋ / ምሉእ) × 360°.",
          "ምሳሌ: 20 ካብ 50 ኩዑሶ ዝፈቱ → α = 144°.",
          "ኣጠቓቕማ: ምምቅቃሎ ምርኣይ.",
        ],
        uk: [
          "Кругова діаграма відображає пропорції. Кожний сектор — частина цілого. Сума кутів = 360°.",
          "Кут сектора: α = (значення / сума) × 360°.",
          "Приклад: 20 з 50 люблять футбол → α = 144°.",
          "Застосування: відображення розподілів.",
        ],
      },
    },
    exercises: [
      { id: "g9-4-e1", promptFr: "Dans un camembert de total 100, valeur 25 → angle = ?°", type: "number", acceptable: ["90"] },
      { id: "g9-4-e2", promptFr: "Dans un camembert de total 60, valeur 15 → angle = ?°", type: "number", acceptable: ["90"] },
      { id: "g9-4-e3", promptFr: "La somme de tous les angles d'un camembert vaut ?°", type: "number", acceptable: ["360"] },
      { id: "g9-4-e4", promptFr: "50% du camembert représente quel angle ?°", type: "number", acceptable: ["180"] },
      { id: "g9-4-e5", promptFr: "Un secteur de 72° représente quelle fraction du total ?", type: "short_text", acceptable: ["1/5", "20%"] },
    ],
  };
