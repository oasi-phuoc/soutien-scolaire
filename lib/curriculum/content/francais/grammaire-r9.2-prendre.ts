import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_PRENDRE_FAMILLE: GrammarLesson = {
  slug: "a2-gr-prendre-apprendre-comprendre",
  code: "R9.2",
  level: "A2",
  title: "Prendre, apprendre et comprendre au présent",
  theory: [
    { type: "heading", text: "La famille du verbe prendre" },
    {
      type: "plain_list",
      items: [
        "Prendre, apprendre et comprendre suivent le même modèle au présent.",
        "Au pluriel, le radical devient pren- ; à la 3e personne du pluriel, le n est doublé : prennent.",
      ],
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
