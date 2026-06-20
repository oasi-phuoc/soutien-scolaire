import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L07: ConjLesson = {
  slug: "a2-conj-l07",
  code: "R6.1",
  level: "A2",
  title: "Les verbes réguliers à l'imparfait",
  theory: [
    { type: "heading", text: "L'imparfait : formation" },
    {
      type: "plain_list",
      items: [
        "Formation : {a}base « nous »{/a} au présent + terminaisons de l'imparfait.",
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        "La même série de terminaisons s'utilise pour les verbes réguliers en -er, -ir et -re.",
      ],
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
      items: [
        "finir : nous finissons → je {a}finissais{/a}",
        "prendre : nous prenons → tu {a}prenais{/a}",
        "attendre : nous attendons → ils {a}attendaient{/a}",
      ],
    },
  ],
  exercises: [],
};
