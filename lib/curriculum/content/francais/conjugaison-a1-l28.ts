import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L28: ConjLesson = {
  slug: "a1-conj-l28",
  code: "G4.3",
  level: "A1",
  title: "Passé récent et présent continu",
  theory: [
    { type: "heading", text: "Le passé récent : venir de + infinitif" },
    {
      type: "plain_list",
      items: [
        "Le passé récent exprime une action {a}qui vient juste de se terminer{/a}.",
        "Structure : {a}venir de{/a} (présent) + infinitif",
      ],
    },
    {
      type: "table",
      tables: [
        {
          verb: "venir de + infinitif",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "viens de" },
            { pronoun: "tu", form: "viens de" },
            { pronoun: "il / elle / on", form: "vient de" },
            { pronoun: "nous", form: "venons de" },
            { pronoun: "vous", form: "venez de" },
            { pronoun: "ils / elles", form: "viennent de" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Exemple", "Traduction"],
      rows: [
        ["Je {a}viens de{/a} manger.", "I just ate."],
        ["Elle {a}vient de{/a} partir.", "She just left."],
        ["Nous {a}venons de{/a} finir.", "We just finished."],
        ["Ils {a}viennent d'{/a}arriver.", "They just arrived."],
      ],
    },
    { type: "heading", text: "Le présent continu : être en train de + infinitif", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "Le présent continu insiste sur une action {a}en cours{/a} au moment où l'on parle.",
        "Structure : {a}être en train de{/a} + infinitif",
      ],
    },
    {
      type: "grid",
      headers: ["Exemple", "Traduction"],
      rows: [
        ["Je suis {a}en train de{/a} travailler.", "I'm working right now."],
        ["Tu es {a}en train de{/a} lire.", "You are reading right now."],
        ["Il est {a}en train de{/a} dormir.", "He is sleeping right now."],
        ["Nous sommes {a}en train de{/a} cuisiner.", "We are cooking right now."],
      ],
    },
    {
      type: "highlight",
      label: "Les 3 aspects du présent élargi",
      items: [
        "{a}Passé récent{/a} → venir de + inf. : Elle vient de téléphoner.",
        "{a}Présent simple{/a} → présent : Elle téléphone.",
        "{a}Futur proche{/a} → aller + inf. : Elle va téléphoner.",
      ],
    },
  ],
  exercises: [],
};
