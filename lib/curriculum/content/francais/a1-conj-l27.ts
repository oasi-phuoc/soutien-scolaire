import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L27: ConjLesson = {
  slug: "a1-conj-l27",
  code: "G.23",
  level: "A1",
  title: "Pronominaux réfléchis et réciproques",
  theory: [
    { type: "heading", text: "Les verbes pronominaux" },
    {
      type: "plain_list",
      items: [
        "Un verbe pronominal s'utilise avec un {a}pronom réfléchi{/a} (me, te, se, nous, vous, se).",
        "Le pronom réfléchi change selon le sujet.",
        "À l'infinitif : {a}se{/a} laver, {a}se{/a} lever, {a}s'{/a}appeler…",
      ],
    },
    { type: "heading", text: "Conjugaison : se laver", sub: true, accent: true },
    {
      type: "table",
      tables: [
        {
          verb: "se laver",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "me lave" },
            { pronoun: "tu", form: "te laves" },
            { pronoun: "il / elle / on", form: "se lave" },
            { pronoun: "nous", form: "nous lavons" },
            { pronoun: "vous", form: "vous lavez" },
            { pronoun: "ils / elles", form: "se lavent" },
          ],
        },
        {
          verb: "s'appeler",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "m'appelle" },
            { pronoun: "tu", form: "t'appelles" },
            { pronoun: "il / elle / on", form: "s'appelle" },
            { pronoun: "nous", form: "nous appelons" },
            { pronoun: "vous", form: "vous appelez" },
            { pronoun: "ils / elles", form: "s'appellent" },
          ],
        },
      ],
    },
    { type: "heading", text: "Réfléchis vs réciproques", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Type", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Réfléchi", "Le sujet agit sur lui-même.", "Je {a}me{/a} regarde dans le miroir."],
        ["Réciproque", "Les sujets agissent l'un sur l'autre.", "Nous {a}nous{/a} regardons. (each other)"],
      ],
    },
    {
      type: "highlight",
      label: "Verbes pronominaux courants",
      items: [
        "se lever — se coucher — se réveiller (routine quotidienne)",
        "se laver — se coiffer — s'habiller (hygiène)",
        "se souvenir — s'ennuyer — se sentir (état)",
        "se parler — se voir — s'écrire (réciproques)",
      ],
    },
    { type: "heading", text: "Forme négative", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je me lève.", "Je {a}ne{/a} me lève {a}pas{/a}."],
        ["Il se rase.", "Il {a}ne{/a} se rase {a}pas{/a}."],
        ["Nous nous voyons.", "Nous {a}ne{/a} nous voyons {a}pas{/a}."],
      ],
    },
  ],
  exercises: [],
};
