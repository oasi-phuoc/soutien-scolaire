import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L25: GrammarLesson = {
  slug: "a1-gr-l25",
  code: "R4.8",
  level: "A1",
  title: "Savoir ou connaître ?",
  theory: [
    { type: "heading", text: "SAVOIR ou CONNAÎTRE ?" },
    {
      type: "table",
      tables: [
        {
          verb: "savoir", accentForms: true,
          rows: [
            { pronoun: "je", form: "sais" },
            { pronoun: "tu", form: "sais" },
            { pronoun: "il / elle", form: "sait" },
            { pronoun: "nous", form: "savons" },
            { pronoun: "vous", form: "savez" },
            { pronoun: "ils / elles", form: "savent" },
          ],
        },
        {
          verb: "connaître", accentForms: true,
          rows: [
            { pronoun: "je", form: "connais" },
            { pronoun: "tu", form: "connais" },
            { pronoun: "il / elle", form: "connaît" },
            { pronoun: "nous", form: "connaissons" },
            { pronoun: "vous", form: "connaissez" },
            { pronoun: "ils / elles", form: "connaissent" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Verbe", "Utilisation", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}savoir{/a}", "+ infinitif (capacité)", "Je sais nager."],
        ["{a}savoir{/a}", "+ que / si / où… (fait)", "Je sais qu'il est français."],
        ["{a}savoir{/a}", "+ nom (information)", "Tu sais l'heure ?"],
        ["{a}connaître{/a}", "+ personne", "Je connais Marco."],
        ["{a}connaître{/a}", "+ lieu / chose", "Elle connaît bien Paris."],
        ["{a}connaître{/a}", "+ œuvre / domaine", "Tu connais ce film ?"],
      ],
    },
    {
      type: "highlight",
      label: "Règle simple",
      items: [
        "{a}Savoir{/a} = un fait, une information, une capacité.",
        "{a}Connaître{/a} = être familier avec une personne, un lieu ou une chose.",
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "On ne dit pas {s}je sais Paris{/s} mais {a}je connais Paris{/a}.",
        "On ne dit pas {s}je connais nager{/s} mais {a}je sais nager{/a}.",
      ],
    },
  ],
  exercises: [],
};
