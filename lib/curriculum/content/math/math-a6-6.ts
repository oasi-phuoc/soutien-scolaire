import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-6",
    submoduleCode: "A6.6",
    theory: {
      title: { fr: "Règle de trois", en: "Rule of three", ar: "قاعدة الثلاثة", fa: "قانون سه", ti: "ሕጊ ሰለስተ", uk: "Правило трьох" },
      paragraphs: {
        fr: [
          "La règle de trois (ou produit en croix) permet de trouver une valeur inconnue dans une proportion. Si a/b = c/x, alors x = (b × c) / a.",
          "Étapes : 1) Identifiez les 3 valeurs connues et la valeur x inconnue. 2) Écrivez la proportion. 3) Multipliez en croix. 4) Divisez par le nombre restant.",
          "Exemple : Si 2 pommes coûtent 4 CHF, combien coûtent 6 pommes ? → 2/4 = 6/x → x = (4 × 6) / 2 = 24 / 2 = 12 CHF.",
        ],
        en: [
          "The rule of three (cross multiplication) finds an unknown value in a proportion. If a/b = c/x, then x = (b × c) / a.",
          "Steps: 1) Identify the 3 known values and unknown x. 2) Write the proportion. 3) Cross-multiply. 4) Divide by the remaining number.",
          "Example: 2 apples cost 4 CHF, how much for 6? → x = (4 × 6) / 2 = 12 CHF.",
        ],
        ar: [
          "قاعدة الثلاثة (الضرب المتقاطع) تجد قيمة مجهولة في تناسب. إذا a/b = c/x فـ x = (b × c) / a.",
          "الخطوات: 1) حدّد القيم الثلاث المعروفة والمجهول x. 2) اكتب التناسب. 3) اضرب تقاطعيًا. 4) اقسم على العدد المتبقي.",
          "مثال: 2 تفاحات بـ 4 فرنك، كم تكلف 6؟ → x = (4 × 6) / 2 = 12 فرنك.",
        ],
        fa: [
          "قانون سه (ضربدر) مقدار مجهول در یک تناسب را می‌یابد. اگر a/b = c/x پس x = (b × c) / a.",
          "مراحل: ۱) سه مقدار معلوم و مجهول x را شناسایی کنید. ۲) تناسب را بنویسید. ۳) ضربدر بزنید. ۴) بر عدد باقیمانده تقسیم کنید.",
          "مثال: ۲ سیب ۴ فرانک، ۶ سیب چند؟ → x = (۴ × ۶) / ۲ = ۱۲ فرانک.",
        ],
        ti: [
          "ሕጊ ሰለስተ (ናይ ሳጻሊ ዘርፊ) ናይ ዘይፍለጥ ዋጋ ምቅዳድ ምርካብ ዘፍቅድ ሕጊ እዩ። a/b = c/x ምስ ዝኾነ x = (b × c) / a.",
          "ስጉምቲ: 1) ሰለስተ ዝፍለጡ ዋጋ ምስ x ዘይፍለጥ ዋጋ ርኸቦ. 2) ምቅዳድ ጽሓፍ. 3) ናይ ሳጻሊ ዘርፍ. 4) ዝተረፈ ቁጽሪ ብምካፋፍ.",
          "ኣብነት: 2 ፖም 4 CHF ዋጋ ዘለዎ 6 ፖም ክንደይ? → x = (4 × 6) / 2 = 12 CHF.",
        ],
        uk: [
          "Правило трьох (перехресне множення) знаходить невідоме значення в пропорції. Якщо a/b = c/x, то x = (b × c) / a.",
          "Кроки: 1) Визначте три відомих і невідоме x. 2) Запишіть пропорцію. 3) Перехресно помножте. 4) Поділіть на число, що залишилось.",
          "Приклад: 2 яблука коштують 4 CHF, 6 яблук — скільки? → x = (4 × 6) / 2 = 12 CHF.",
        ],
      },
    },
    exercises: [
      { id: "a6-6-e1", promptFr: "2 pommes coûtent 4 CHF. Combien coûtent 6 pommes ?", type: "number", acceptable: ["12"] },
      { id: "a6-6-e2", promptFr: "5 livres pèsent 2 kg. Combien pèsent 15 livres ?", type: "number", acceptable: ["6"] },
      { id: "a6-6-e3", promptFr: "Un train roule 150 km en 2h. En 5h, quelle distance ?", type: "number", acceptable: ["375"] },
      { id: "a6-6-e4", promptFr: "3 chemises coûtent 45 CHF. Combien pour 7 chemises ?", type: "number", acceptable: ["105"] },
      { id: "a6-6-e5", promptFr: "4 ouvriers font un travail en 6 jours. Combien de jours pour 8 ouvriers ?", type: "number", acceptable: ["3"] },
    ],
  };
