import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L05: GrammarLesson = {
  slug: "a1-gr-l05",
  code: "R3.2",
  level: "A1",
  title: "Le verbe avoir et les adjectifs possessifs",
  theory: [
    { type: "heading", text: "Le verbe AVOIR au présent" },
    {
      type: "table",
      tables: [
        {
          verb: "avoir", accentForms: true,
          rows: [
            { pronoun: "j'", form: "ai" },
            { pronoun: "tu", form: "as" },
            { pronoun: "il / elle / on", form: "a" },
            { pronoun: "nous", form: "avons" },
            { pronoun: "vous", form: "avez" },
            { pronoun: "ils / elles", form: "ont" },
          ],
        },
      ],
    },
    {
      type: "highlight",
      label: "Emplois de AVOIR",
      items: [
        "Possession : {a}J'ai{/a} un téléphone.",
        "Âge : {a}J'ai{/a} 25 ans. (jamais ÊTRE pour l'âge)",
        "Sensations : {a}Nous avons{/a} faim / soif / froid / chaud / peur / mal.",
        "Expressions : {a}Il a{/a} de la chance. / {a}Tu as{/a} raison.",
      ],
    },
    { type: "heading", text: "Les adjectifs possessifs" },
    {
      type: "plain_list",
      items: ["Ils s'accordent avec le {a}nom possédé{/a} (et non avec le possesseur)."],
    },
    {
      type: "grid",
      headers: ["Possesseur", "Masc. sing.", "Fém. sing.", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["{a}je{/a}", "mon", "ma", "mes"],
        ["{a}tu{/a}", "ton", "ta", "tes"],
        ["{a}il / elle{/a}", "son", "sa", "ses"],
        ["{a}nous{/a}", "notre", "notre", "nos"],
        ["{a}vous{/a}", "votre", "votre", "vos"],
        ["{a}ils / elles{/a}", "leur", "leur", "leurs"],
      ],
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "{a}mon{/a} frère, {a}ma{/a} sœur, {a}mes{/a} parents",
        "{a}son{/a} père, {a}sa{/a} mère, {a}ses{/a} enfants",
        "{a}notre{/a} maison, {a}nos{/a} voisins",
      ],
    },
    {
      type: "highlight",
      label: "Attention : devant voyelle au féminin",
      items: [
        "ma / ta / sa + voyelle → {a}mon / ton / son{/a}",
        "{s}ma{/s} amie → {a}mon{/a} amie",
        "{s}ta{/s} école → {a}ton{/a} école",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
