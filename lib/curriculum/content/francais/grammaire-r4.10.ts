import type { ConjLesson } from "../../conjugation-data";

export const A2_CONJ_L02: ConjLesson = {
  slug: "a2-conj-l02",
  code: "R4.10",
  level: "A2",
  title: "Les verbes en -ir (2e et 3e groupes)",
  theory: [
    { type: "heading", text: "Deux groupes de verbes en -ir" },
    {
      type: "grid",
      headers: ["Groupe", "Caractéristique", "Exemples"],
      boldFirstCol: true,
      rows: [
        ["{a}2e groupe{/a}", "Radical + {a}-iss-{/a} aux formes plurielles", "finir, choisir, grandir, rougir"],
        ["{a}3e groupe{/a}", "Radical court ou irrégulier", "partir, sortir, dormir, ouvrir, venir"],
      ],
    },
    { type: "heading", text: "2e groupe : finir", sub: true, accent: true },
    {
      type: "table",
      tables: [
        {
          verb: "finir (2e groupe)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "finis" },
            { pronoun: "tu", form: "finis" },
            { pronoun: "il / elle / on", form: "finit" },
            { pronoun: "nous", form: "finissons" },
            { pronoun: "vous", form: "finissez" },
            { pronoun: "ils / elles", form: "finissent" },
          ],
        },
      ],
    },
    {
      type: "plain_list",
      items: [
        "2e groupe : ajouter {a}-iss-{/a} pour nous/vous/ils → finissons, finissez, finissent.",
        "Autres verbes 2e groupe : choisir, obéir, réussir, grandir, rougir, maigrir, grossir.",
      ],
    },
    { type: "heading", text: "3e groupe : verbes en -ir irréguliers", sub: true, accent: true },
    {
      type: "table",
      tables: [
        {
          verb: "partir (pars / partons)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "pars" },
            { pronoun: "tu", form: "pars" },
            { pronoun: "il / elle / on", form: "part" },
            { pronoun: "nous", form: "partons" },
            { pronoun: "vous", form: "partez" },
            { pronoun: "ils / elles", form: "partent" },
          ],
        },
        {
          verb: "dormir (dors / dormons)",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "dors" },
            { pronoun: "tu", form: "dors" },
            { pronoun: "il / elle / on", form: "dort" },
            { pronoun: "nous", form: "dormons" },
            { pronoun: "vous", form: "dormez" },
            { pronoun: "ils / elles", form: "dorment" },
          ],
        },
        {
          verb: "ouvrir (comme les -er !)",
          accentForms: true,
          rows: [
            { pronoun: "j'", form: "ouvre" },
            { pronoun: "tu", form: "ouvres" },
            { pronoun: "il / elle / on", form: "ouvre" },
            { pronoun: "nous", form: "ouvrons" },
            { pronoun: "vous", form: "ouvrez" },
            { pronoun: "ils / elles", form: "ouvrent" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Attention : ouvrir, couvrir, offrir, souffrir",
      items: [
        "Ces verbes en -ir se conjuguent comme des verbes en {a}-er{/a} (terminaisons -e, -es, -e…).",
        "j'ouvre, tu ouvres, il ouvre — comme je parle, tu parles, il parle.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
