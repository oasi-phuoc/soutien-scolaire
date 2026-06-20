import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L07: ConjLesson = {
  slug: "a2-conj-l07",
  code: "R5.8",
  level: "A2",
  title: "Les verbes réguliers à l'imparfait",
  theory: [
    { type: "heading", text: "L'imparfait : formation", trans: { en: "The imparfait: how it is formed", ar: "الماضي الناقص: التكوين", fa: "ماضی استمراری: ساخت", ti: "ኢምፓርፌ: ኣፈጣጥራ", uk: "Imparfait: утворення" } },
    {
      type: "plain_list",
      items: [
        "Formation : {a}base « nous »{/a} au présent + terminaisons de l'imparfait.",
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        "La même série de terminaisons s'utilise pour les verbes réguliers en -er, -ir et -re.",
      ],
      transItems: {
        en: ["Formation: the {a}\"nous\" stem{/a} in the present + the imparfait endings.", "Endings: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}", "The same set of endings is used for regular verbs in -er, -ir and -re."],
        ar: ["التكوين: {a}جذع « nous »{/a} في المضارع + نهايات الماضي الناقص.", "النهايات: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}", "تُستعمل المجموعة نفسها من النهايات للأفعال المنتظمة في -er و -ir و -re."],
        fa: ["ساخت: {a}ریشهٔ « nous »{/a} در زمان حال + پایانه‌های ماضی استمراری.", "پایانه‌ها: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}", "همین مجموعه پایانه‌ها برای افعال باقاعدهٔ -er و -ir و -re به کار می‌رود."],
        ti: ["ኣፈጣጥራ: ኣብ ህሉው {a}መሰረት « nous »{/a} + ናይ ኢምፓርፌ መወዳእታታት።", "መወዳእታታት: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}", "እዚ ሓደ ዓይነት መወዳእታታት ንስሩዓት ግስታት -er ከምኡ'ውን -ir ከምኡ'ውን -re ይጥቀም።"],
        uk: ["Утворення: {a}основа « nous »{/a} в теперішньому часі + закінчення imparfait.", "Закінчення: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}", "Той самий набір закінчень використовується для правильних дієслів на -er, -ir та -re."],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (base : nous parlons → parl-)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "parlais" },
            { pronoun: "tu", form: "parlais" },
            { pronoun: "il / elle / on", form: "parlait" },
            { pronoun: "nous", form: "parlions" },
            { pronoun: "vous", form: "parliez" },
            { pronoun: "ils / elles", form: "parlaient" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Exemples de bases régulières",
      transLabel: { en: "Examples of regular stems", ar: "أمثلة على الجذوع المنتظمة", fa: "نمونه‌های ریشهٔ باقاعده", ti: "ኣብነታት ስሩዓት መሰረታት", uk: "Приклади правильних основ" },
      items: [
        "finir : nous finissons → je {a}finissais{/a}",
        "prendre : nous prenons → tu {a}prenais{/a}",
        "attendre : nous attendons → ils {a}attendaient{/a}",
      ],
      transItems: {
        en: ["finir: nous finissons → je {a}finissais{/a}", "prendre: nous prenons → tu {a}prenais{/a}", "attendre: nous attendons → ils {a}attendaient{/a}"],
        ar: ["finir: nous finissons → je {a}finissais{/a}", "prendre: nous prenons → tu {a}prenais{/a}", "attendre: nous attendons → ils {a}attendaient{/a}"],
        fa: ["finir: nous finissons → je {a}finissais{/a}", "prendre: nous prenons → tu {a}prenais{/a}", "attendre: nous attendons → ils {a}attendaient{/a}"],
        ti: ["finir: nous finissons → je {a}finissais{/a}", "prendre: nous prenons → tu {a}prenais{/a}", "attendre: nous attendons → ils {a}attendaient{/a}"],
        uk: ["finir: nous finissons → je {a}finissais{/a}", "prendre: nous prenons → tu {a}prenais{/a}", "attendre: nous attendons → ils {a}attendaient{/a}"],
      },
    },
  ],
  exercises: [],
};
