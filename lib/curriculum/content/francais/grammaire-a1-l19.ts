import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L19: GrammarLesson = {
  slug: "a1-gr-l19",
  code: "G3.5",
  level: "A1",
  title: "Les adjectifs possessifs",
  theory: [
    { type: "heading", text: "Les adjectifs possessifs" },
    {
      type: "plain_list",
      items: [
        "Ils expriment l'appartenance.",
        "Ils s'accordent avec le {a}nom possédé{/a} (et non avec le possesseur).",
      ],
    },
    {
      type: "grid",
      headers: ["Possesseur", "Masc. sing.", "Fém. sing.", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["{a}je{/a}", "mon", "ma", "mes"],
        ["{a}tu{/a}", "ton", "ta", "tes"],
        ["{a}il / elle / on{/a}", "son", "sa", "ses"],
        ["{a}nous{/a}", "notre", "notre", "nos"],
        ["{a}vous{/a}", "votre", "votre", "vos"],
        ["{a}ils / elles{/a}", "leur", "leur", "leurs"],
      ],
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "{a}mon{/a} père, {a}ma{/a} mère, {a}mes{/a} parents",
        "{a}son{/a} livre (à lui ou à elle), {a}sa{/a} voiture, {a}ses{/a} affaires",
        "{a}notre{/a} appartement, {a}nos{/a} voisins",
        "{a}leur{/a} maison, {a}leurs{/a} enfants",
      ],
    },
    {
      type: "highlight",
      label: "Attention : devant voyelle au féminin",
      items: [
        "ma / ta / sa + voyelle ou h muet → {a}mon / ton / son{/a}",
        "{s}ma{/s} amie → {a}mon{/a} amie",
        "{s}ta{/s} histoire → {a}ton{/a} histoire",
        "{s}sa{/s} école → {a}son{/a} école",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Son / Sa : attention à l'ambiguïté",
      items: [
        "{a}son{/a} = son (à lui) ou son (à elle) selon le contexte.",
        "Marco parle à {a}son{/a} ami. (= l'ami de Marco)",
        "Aiko parle à {a}son{/a} ami. (= l'ami d'Aiko)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
