import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L11: GrammarLesson = {
  slug: "a2-gr-l11",
  code: "G4.17",
  level: "A2",
  title: "Les adjectifs — généralités",
  theory: [
    { type: "heading", text: "L'accord des adjectifs qualificatifs" },
    {
      type: "plain_list",
      items: [
        "L'adjectif s'accorde toujours en {a}genre{/a} (masculin / féminin) et en {a}nombre{/a} (singulier / pluriel) avec le nom qu'il qualifie.",
      ],
    },
    {
      type: "grid",
      headers: ["", "Singulier", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["{a}Masculin{/a}", "grand", "grand{a}s{/a}"],
        ["{a}Féminin{/a}", "grand{a}e{/a}", "grand{a}es{/a}"],
      ],
    },
    { type: "heading", text: "Formation du féminin", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Règle", "Masculin", "Féminin"],
      boldFirstCol: true,
      rows: [
        ["Règle générale : + {a}-e{/a}", "petit", "petite"],
        ["Déjà en -e : {a}invariable{/a}", "rapide", "rapide"],
        ["{a}-eux → -euse{/a}", "heureux", "heureuse"],
        ["{a}-eur → -euse{/a} (courant)", "travailleur", "travailleuse"],
        ["{a}-eur → -eure{/a} (comparatif)", "meilleur", "meilleure"],
        ["{a}-ien → -ienne{/a}", "ancien", "ancienne"],
        ["{a}-el → -elle{/a}", "naturel", "naturelle"],
        ["{a}-er → -ère{/a}", "premier", "première"],
        ["{a}-et → -ète / -ette{/a}", "secret", "secrète"],
        ["{a}-if → -ive{/a}", "actif", "active"],
        ["{a}-al → -ale{/a}", "normal", "normale"],
      ],
    },
    { type: "heading", text: "Formation du pluriel", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Règle", "Singulier", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["Règle générale : + {a}-s{/a}", "grand", "grands"],
        ["Déjà en -s ou -x : {a}invariable{/a}", "heureux", "heureux"],
        ["{a}-al → -aux{/a}", "normal", "normaux"],
        ["{a}-eau → -eaux{/a}", "beau", "beaux"],
      ],
    },
    {
      type: "highlight",
      label: "Adjectifs invariables",
      items: [
        "Les adjectifs de couleur dérivés d'un nom sont {a}invariables{/a}.",
        "une robe {a}orange{/a} / des chaussures {a}marron{/a} / des yeux {a}noisette{/a}",
        "Exception : rose, mauve, écarlate, pourpre → accordés.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
