import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L07: ConjLesson = {
  slug: "a2-conj-l07",
  code: "G4.25",
  level: "A2",
  title: "L'imparfait",
  theory: [
    { type: "heading", text: "L'imparfait : formation" },
    {
      type: "plain_list",
      items: [
        "Formation : {a}base « nous »{/a} au présent + terminaisons de l'imparfait.",
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        "Seul irrégulier : {a}être{/a} → base ét- (j'étais, tu étais…)",
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
        {
          verb: "être (base : ét-)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "étais" },
            { pronoun: "tu", form: "étais" },
            { pronoun: "il / elle / on", form: "était" },
            { pronoun: "nous", form: "étions" },
            { pronoun: "vous", form: "étiez" },
            { pronoun: "ils / elles", form: "étaient" },
          ],
        },
      ],
    },
    { type: "heading", text: "Emplois de l'imparfait", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Usage", "Marqueurs", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Habitude passée", "souvent, toujours, tous les jours, avant", "Avant, je {a}mangeais{/a} au restaurant."],
        ["Description (contexte)", "il faisait, c'était, il y avait…", "Il {a}pleuvait{/a} quand je suis parti."],
        ["État mental / physique", "je voulais, j'avais peur, il semblait", "J'{a}avais{/a} très faim."],
        ["Action en cours interrompue", "quand + passé composé", "Je {a}dormais{/a} quand il a appelé."],
      ],
    },
    { type: "heading", text: "Imparfait vs Passé composé", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Imparfait", "Passé composé"],
      rows: [
        ["Action {a}habituelle{/a}", "Action {a}ponctuelle{/a}"],
        ["Arrière-plan / contexte", "Événement / action principale"],
        ["Durée indéfinie", "Moment précis ou délimité"],
        ["Avant, je {a}jouais{/a} au foot.", "Hier, j'ai {a}joué{/a} au foot."],
        ["Il {a}faisait{/a} froid.", "Il a {a}fait{/a} froid pendant 3 jours."],
      ],
    },
    {
      type: "highlight",
      label: "Marqueurs temporels de l'imparfait",
      items: [
        "avant, autrefois, à l'époque, quand j'étais petit",
        "souvent, toujours, jamais, d'habitude, en général",
        "tous les jours / semaines / ans, chaque matin",
      ],
    },
  ],
  exercises: [],
};
