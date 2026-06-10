import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L20: ConjLesson = {
  slug: "a1-conj-l20",
  code: "G4.1",
  level: "A1",
  title: "Le futur proche",
  theory: [
    { type: "heading", text: "Le futur proche" },
    {
      type: "plain_list",
      items: [
        "Le futur proche exprime une action {a}prévue ou imminente{/a}.",
        "Structure : {a}aller{/a} (présent) + infinitif",
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "aller (présent)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "vais" },
            { pronoun: "tu", form: "vas" },
            { pronoun: "il / elle / on", form: "va" },
            { pronoun: "nous", form: "allons" },
            { pronoun: "vous", form: "allez" },
            { pronoun: "ils / elles", form: "vont" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Sujet", "Futur proche", "Traduction"],
      boldFirstCol: true,
      rows: [
        ["je", "Je {a}vais{/a} manger.", "I am going to eat."],
        ["tu", "Tu {a}vas{/a} partir.", "You are going to leave."],
        ["il", "Il {a}va{/a} pleuvoir.", "It is going to rain."],
        ["nous", "Nous {a}allons{/a} étudier.", "We are going to study."],
        ["vous", "Vous {a}allez{/a} voyager.", "You are going to travel."],
        ["elles", "Elles {a}vont{/a} arriver.", "They are going to arrive."],
      ],
    },
    { type: "heading", text: "Forme négative", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}ne … pas{/a} encadre le verbe {a}aller{/a}, pas l'infinitif.",
      ],
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je vais manger.", "Je {a}ne{/a} vais {a}pas{/a} manger."],
        ["Elle va venir.", "Elle {a}ne{/a} va {a}pas{/a} venir."],
        ["Ils vont sortir.", "Ils {a}ne{/a} vont {a}pas{/a} sortir."],
      ],
    },
    {
      type: "highlight",
      label: "Quand utiliser le futur proche ?",
      items: [
        "Action prévue dans un futur proche : Je vais appeler demain.",
        "Intention certaine : Nous allons déménager.",
        "Événement imminent : Attention, tu vas tomber !",
        "Programme établi : Le train va partir dans 2 minutes.",
      ],
    },
  ],
  exercises: [],
};
