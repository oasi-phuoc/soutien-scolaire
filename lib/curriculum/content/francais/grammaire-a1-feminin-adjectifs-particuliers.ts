import type { GrammarLesson } from "../../grammar-data";

/** Unité 16 — Le féminin des adjectifs : cas particuliers (G2.6) */
export const A1_GR_FEMININ_ADJ_PART: GrammarLesson = {
  slug: "a1-gr-feminin-adjectifs-particuliers",
  code: "G2.6",
  level: "A1",
  title: "Le féminin des adjectifs : cas particuliers",
  theory: [
    {
      type: "plain_list",
      items: [
        "Certains adjectifs ont des terminaisons différentes au masculin et au féminin. Souvent, la prononciation change.",
        "Exemple : un pull {a}violet{/a} → une robe {a}violette{/a}.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "heading",
      text: "Formation du féminin",
    },
    {
      type: "grid",
      headers: ["Changement", "Masculin", "Féminin"],
      boldFirstCol: true,
      rows: [
        ["-en → -enne", "Le meuble est ancien.", "La table est ancienne."],
        ["-on → -onne", "Le café est bon.", "La tarte est bonne."],
        ["-el → -elle", "Le parfum est naturel.", "La fleur est naturelle."],
        ["-er → -ère", "Il est étranger. / Il est cher.", "Elle est étrangère. / Elle est chère."],
        ["-et → -ète / -ette", "L'hôtel est complet. / Le pull est violet.", "La salle est complète. / La robe est violette."],
        ["-eux / -eur → -euse", "Il est heureux. / Il est travailleur.", "Elle est heureuse. / Elle est travailleuse."],
        ["-f → -ve", "Le sac est neuf.", "La voiture est neuve."],
        ["-eau → -elle", "Le dessin est beau.", "La peinture est belle."],
      ],
    },
    {
      type: "heading",
      text: "Adjectifs irréguliers",
    },
    {
      type: "note",
      text: "Certains adjectifs sont très irréguliers pour la formation du féminin.",
    },
    {
      type: "grid",
      headers: ["Masculin", "Féminin", "Masculin", "Féminin"],
      rows: [
        ["bas", "basse", "blanc", "blanche"],
        ["doux", "douce", "épais", "épaisse"],
        ["faux", "fausse", "fou", "folle"],
        ["frais", "fraîche", "gentil", "gentille"],
        ["grec", "grecque", "gros", "grosse"],
        ["jaloux", "jalouse", "long", "longue"],
        ["nul", "nulle", "public", "publique"],
        ["roux", "rousse", "sec", "sèche"],
        ["turc", "turque", "vieux", "vieille"],
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Féminin des adjectifs",
      instruction: "Choisissez la forme féminine correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "ancien → ___", choices: ["ancienne", "anciene", "anciènne", "ancièn"], correctIdx: 0 },
        { sentence: "bon → ___", choices: ["bonne", "bone", "bonn", "bonnes"], correctIdx: 0 },
        { sentence: "naturel → ___", choices: ["naturelle", "naturele", "naturell", "naturelles"], correctIdx: 0 },
        { sentence: "étranger → ___", choices: ["étrangère", "étrangere", "étrangèr", "étrangères"], correctIdx: 0 },
        { sentence: "complet → ___", choices: ["complète", "complete", "complette", "complet"], correctIdx: 0 },
        { sentence: "violet → ___", choices: ["violette", "violete", "violett", "violet"], correctIdx: 0 },
        { sentence: "heureux → ___", choices: ["heureuse", "heureus", "heureusee", "heureux"], correctIdx: 0 },
        { sentence: "neuf → ___", choices: ["neuve", "neufe", "neuvee", "neufs"], correctIdx: 0 },
        { sentence: "beau → ___", choices: ["belle", "beaue", "bellee", "beaux"], correctIdx: 0 },
        { sentence: "vieux → ___", choices: ["vieille", "vieuse", "vieil", "vieilles"], correctIdx: 0 },
        { sentence: "blanc → ___", choices: ["blanche", "blance", "blanque", "blancs"], correctIdx: 0 },
        { sentence: "long → ___", choices: ["longue", "longe", "longgue", "longs"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Écrivez le féminin",
      instruction: "Donnez la forme féminine de l'adjectif.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "ancien → ___", hint: "-en → -enne", answer: "ancienne" },
        { sentence: "bon → ___", hint: "-on → -onne", answer: "bonne" },
        { sentence: "cher → ___", hint: "-er → -ère", answer: "chère" },
        { sentence: "violet → ___", hint: "-et → -ette", answer: "violette" },
        { sentence: "heureux → ___", hint: "-eux → -euse", answer: "heureuse" },
        { sentence: "neuf → ___", hint: "-f → -ve", answer: "neuve" },
        { sentence: "beau → ___", hint: "-eau → -elle", answer: "belle" },
        { sentence: "blanc → ___", hint: "irrégulier", answer: "blanche" },
        { sentence: "vieux → ___", hint: "irrégulier", answer: "vieille" },
        { sentence: "sec → ___", hint: "irrégulier", answer: "sèche" },
      ],
    },
  ],
};
