import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L08: ConjLesson = {
  slug: "a2-conj-l08",
  code: "R7.1",
  level: "A2",
  title: "Les verbes réguliers au futur simple",
  theory: [
    { type: "heading", text: "Le futur simple : formation" },
    {
      type: "plain_list",
      items: [
        "Formation régulière : {a}infinitif{/a} + terminaisons du futur.",
        "Terminaisons : {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
        "Pour les verbes en -re : supprimer le -e final avant d'ajouter les terminaisons.",
      ],
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
      items: [
        "Les verbes en -re perdent leur e final : prendre → je prendrai.",
        "Certains verbes en -eler et -eter doublent la consonne : appeler → j'appellerai ; jeter → je jetterai.",
        "D'autres prennent un accent grave : acheter → j'achèterai.",
      ],
    },
  ],
  exercises: [],
};
