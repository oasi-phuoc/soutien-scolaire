import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L08: ConjLesson = {
  slug: "a2-conj-l08",
  code: "R4.4",
  level: "A2",
  title: "Les verbes réguliers au futur simple",
  theory: [
    { type: "heading", text: "Le futur simple : formation", trans: { en: "The simple future: how it is formed", ar: "المستقبل البسيط: التكوين", fa: "آیندهٔ ساده: ساخت", ti: "ቀሊል መጻኢ: ኣፈጣጥራ", uk: "Futur simple: утворення" } },
    {
      type: "plain_list",
      items: [
        "Formation régulière : {a}infinitif{/a} + terminaisons du futur.",
        "Terminaisons : {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
        "Pour les verbes en -re : supprimer le -e final avant d'ajouter les terminaisons.",
      ],
      transItems: {
        en: ["Regular formation: {a}infinitive{/a} + the future endings.", "Endings: {a}-ai / -as / -a / -ons / -ez / -ont{/a}", "For verbs in -re: drop the final -e before adding the endings."],
        ar: ["التكوين المنتظم: {a}المصدر{/a} + نهايات المستقبل.", "النهايات: {a}-ai / -as / -a / -ons / -ez / -ont{/a}", "للأفعال في -re: احذف الـ -e النهائية قبل إضافة النهايات."],
        fa: ["ساخت باقاعده: {a}مصدر{/a} + پایانه‌های آینده.", "پایانه‌ها: {a}-ai / -as / -a / -ons / -ez / -ont{/a}", "برای افعال -re: پیش از افزودن پایانه‌ها، -e پایانی را حذف کنید."],
        ti: ["ስሩዕ ኣፈጣጥራ: {a}ስም-ግሲ{/a} + ናይ መጻኢ መወዳእታታት።", "መወዳእታታት: {a}-ai / -as / -a / -ons / -ez / -ont{/a}", "ንግስታት -re: መወዳእታታት ቅድሚ ምውሳኽ እቲ ናይ መወዳእታ -e ኣወግድ።"],
        uk: ["Правильне утворення: {a}інфінітив{/a} + закінчення майбутнього часу.", "Закінчення: {a}-ai / -as / -a / -ons / -ez / -ont{/a}", "Для дієслів на -re: відкиньте кінцеве -e перед додаванням закінчень."],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (futur simple)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "parlerai" },
            { pronoun: "tu", form: "parleras" },
            { pronoun: "il / elle / on", form: "parlera" },
            { pronoun: "nous", form: "parlerons" },
            { pronoun: "vous", form: "parlerez" },
            { pronoun: "ils / elles", form: "parleront" },
          ],
        },
        {
          verb: "finir (futur simple)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "finirai" },
            { pronoun: "tu", form: "finiras" },
            { pronoun: "il / elle / on", form: "finira" },
            { pronoun: "nous", form: "finirons" },
            { pronoun: "vous", form: "finirez" },
            { pronoun: "ils / elles", form: "finiront" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Particularités orthographiques",
      transLabel: { en: "Spelling particularities", ar: "خصوصيات إملائية", fa: "ویژگی‌های املایی", ti: "ናይ ኣጸሓሕፋ ፍሉያት", uk: "Орфографічні особливості" },
      items: [
        "Les verbes en -re perdent leur e final : prendre → je prendrai.",
        "Certains verbes en -eler et -eter doublent la consonne : appeler → j'appellerai ; jeter → je jetterai.",
        "D'autres prennent un accent grave : acheter → j'achèterai.",
      ],
      transItems: {
        en: ["Verbs in -re lose their final e: prendre → je prendrai.", "Some verbs in -eler and -eter double the consonant: appeler → j'appellerai; jeter → je jetterai.", "Others take a grave accent: acheter → j'achèterai."],
        ar: ["تفقد الأفعال في -re الـ e النهائية: prendre → je prendrai.", "بعض الأفعال في -eler و -eter تضاعف الحرف الساكن: appeler → j'appellerai ؛ jeter → je jetterai.", "أخرى تأخذ لكنة (accent grave): acheter → j'achèterai."],
        fa: ["افعال -re حرف e پایانی خود را از دست می‌دهند: prendre → je prendrai.", "برخی افعال -eler و -eter صامت را دو برابر می‌کنند: appeler → j'appellerai ؛ jeter → je jetterai.", "برخی دیگر آکسان گرَو می‌گیرند: acheter → j'achèterai."],
        ti: ["ግስታት -re ናይ መወዳእታ e ይስእኑ: prendre → je prendrai.", "ገሊኦም ግስታት -eler ከምኡ'ውን -eter ነቲ ተነባቢ የብዝሑ: appeler → j'appellerai ; jeter → je jetterai.", "ካልኦት ኣክሰን ግራቭ ይወስዱ: acheter → j'achèterai."],
        uk: ["Дієслова на -re втрачають кінцеве e: prendre → je prendrai.", "Деякі дієслова на -eler та -eter подвоюють приголосний: appeler → j'appellerai; jeter → je jetterai.", "Інші отримують accent grave: acheter → j'achèterai."],
      },
    },
  ],
  exercises: [],
};
