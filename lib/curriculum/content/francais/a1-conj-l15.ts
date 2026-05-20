import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L15: ConjLesson = {
  slug: "a1-conj-l15",
  code: "G.12",
  level: "A1",
  title: "Vouloir, pouvoir, devoir",
  theory: [
    { type: "heading", text: "Les verbes modaux" },
    {
      type: "plain_list",
      items: [
        "Ces verbes expriment un état, une capacité ou une obligation.",
        "Ils sont toujours suivis d'un {a}infinitif{/a}.",
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "vouloir", accentForms: true,
          rows: [
            { pronoun: "je", form: "veux" },
            { pronoun: "tu", form: "veux" },
            { pronoun: "il / elle", form: "veut" },
            { pronoun: "nous", form: "voulons" },
            { pronoun: "vous", form: "voulez" },
            { pronoun: "ils / elles", form: "veulent" },
          ],
        },
        {
          verb: "pouvoir", accentForms: true,
          rows: [
            { pronoun: "je", form: "peux" },
            { pronoun: "tu", form: "peux" },
            { pronoun: "il / elle", form: "peut" },
            { pronoun: "nous", form: "pouvons" },
            { pronoun: "vous", form: "pouvez" },
            { pronoun: "ils / elles", form: "peuvent" },
          ],
        },
        {
          verb: "devoir", accentForms: true,
          rows: [
            { pronoun: "je", form: "dois" },
            { pronoun: "tu", form: "dois" },
            { pronoun: "il / elle", form: "doit" },
            { pronoun: "nous", form: "devons" },
            { pronoun: "vous", form: "devez" },
            { pronoun: "ils / elles", form: "doivent" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Verbe", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}vouloir{/a}", "désir / intention", "Je veux partir."],
        ["{a}pouvoir{/a}", "capacité / permission", "Tu peux entrer."],
        ["{a}devoir{/a}", "obligation / nécessité", "Elle doit étudier."],
      ],
    },
    { type: "heading", text: "Négation", sub: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je veux partir.", "Je {a}ne{/a} veux {a}pas{/a} partir."],
        ["Tu peux venir.", "Tu {a}ne{/a} peux {a}pas{/a} venir."],
        ["Il doit travailler.", "Il {a}ne{/a} doit {a}pas{/a} travailler."],
      ],
    },
    {
      type: "highlight",
      label: "Astuce : politesse avec vouloir",
      items: [
        "{a}Je voudrais{/a} (conditionnel) est plus poli que «je veux».",
        "Je voudrais un café, s'il vous plaît.",
        "Vous voudriez de l'aide ?",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
