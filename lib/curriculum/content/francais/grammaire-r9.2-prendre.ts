import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_PRENDRE_FAMILLE: GrammarLesson = {
  slug: "a2-gr-prendre-apprendre-comprendre",
  code: "R9.2",
  level: "A2",
  title: "Prendre, apprendre et comprendre au présent",
  theory: [
    { type: "heading", text: "La famille du verbe prendre", trans: { en: "The «prendre» verb family", ar: "عائلة الفعل «prendre»", fa: "خانواده‌ی فعل «prendre»", ti: "ስድራ ናይ ግሲ «prendre»", uk: "Родина дієслова «prendre»" } },
    {
      type: "plain_list",
      items: [
        "Prendre, apprendre et comprendre suivent le même modèle au présent.",
        "Au pluriel, le radical devient pren- ; à la 3e personne du pluriel, le n est doublé : prennent.",
      ],
      transItems: {
        en: ["Prendre (to take), apprendre (to learn) and comprendre (to understand) follow the same pattern in the present.", "In the plural, the stem becomes pren-; in the 3rd person plural the n is doubled: prennent."],
        ar: ["prendre (يأخذ) و apprendre (يتعلّم) و comprendre (يفهم) تتبع النموذج نفسه في المضارع.", "في الجمع، يصبح الجذر pren- ؛ في جمع الغائب يُضاعف الحرف n: prennent."],
        fa: ["prendre (گرفتن)، apprendre (یاد گرفتن) و comprendre (فهمیدن) در حال از یک الگو پیروی می‌کنند.", "در جمع، ریشه pren- می‌شود؛ در سوم‌شخص جمع حرف n دوتا می‌شود: prennent."],
        ti: ["prendre (ምውሳድ)፣ apprendre (ምምሃር) ን comprendre (ምርዳእ) ኣብ ህሉው ሓደ ዓይነት ኣገባብ ይስዕቡ።", "ኣብ ብዙሕ፣ እቲ መሰረት pren- ይኸውን፤ ኣብ 3ይ ኣካል ብዙሕ እቲ n ይድረብ፦ prennent።"],
        uk: ["Prendre (брати), apprendre (вчитися) і comprendre (розуміти) мають однакову модель у теперішньому часі.", "У множині основа стає pren-; у 3-й особі множини n подвоюється: prennent."],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "prendre",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "prends" }, { pronoun: "tu", form: "prends" },
            { pronoun: "il / elle / on", form: "prend" }, { pronoun: "nous", form: "prenons" },
            { pronoun: "vous", form: "prenez" }, { pronoun: "ils / elles", form: "prennent" },
          ],
        },
        {
          verb: "apprendre",
          accentForms: true,
          rows: [
            { pronoun: "j'", form: "apprends" }, { pronoun: "tu", form: "apprends" },
            { pronoun: "il / elle / on", form: "apprend" }, { pronoun: "nous", form: "apprenons" },
            { pronoun: "vous", form: "apprenez" }, { pronoun: "ils / elles", form: "apprennent" },
          ],
        },
        {
          verb: "comprendre",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "comprends" }, { pronoun: "tu", form: "comprends" },
            { pronoun: "il / elle / on", form: "comprend" }, { pronoun: "nous", form: "comprenons" },
            { pronoun: "vous", form: "comprenez" }, { pronoun: "ils / elles", form: "comprennent" },
          ],
        },
      ],
    },
  ],
  exercises: [],
};
