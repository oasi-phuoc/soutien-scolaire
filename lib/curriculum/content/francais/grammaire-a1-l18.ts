import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L18: GrammarLesson = {
  slug: "a1-gr-l18",
  code: "G.17",
  level: "A1",
  title: "Les adjectifs démonstratifs",
  theory: [
    { type: "heading", text: "Les adjectifs démonstratifs" },
    {
      type: "plain_list",
      items: [
        "Ils servent à désigner ou montrer quelque chose de précis.",
        "Ils s'accordent avec le {a}nom{/a} qu'ils accompagnent.",
      ],
    },
    {
      type: "grid",
      headers: ["Genre / Nombre", "Démonstratif", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "{a}ce{/a}", "Je prends {a}ce{/a} livre."],
        ["Masculin sing. + voyelle / h", "{a}cet{/a}", "J'aime {a}cet{/a} appartement."],
        ["Féminin singulier", "{a}cette{/a}", "Regarde {a}cette{/a} voiture."],
        ["Pluriel (m. et f.)", "{a}ces{/a}", "J'aime {a}ces{/a} chaussures."],
      ],
    },
    {
      type: "highlight",
      label: "Attention : cet",
      items: [
        "{a}cet{/a} s'utilise devant un nom masculin commençant par une voyelle ou un {a}h{/a} muet.",
        "{s}ce{/s} étudiant → {a}cet{/a} étudiant",
        "{s}ce{/s} hôtel → {a}cet{/a} hôtel",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Exemples en contexte", sub: true },
    {
      type: "grid",
      headers: ["Phrase", "Remarque"],
      rows: [
        ["Tu connais {a}cette{/a} ville ?", "féminin sing."],
        ["J'aime {a}cet{/a} acteur.", "masculin + voyelle"],
        ["{a}Ces{/a} films sont excellents.", "pluriel"],
        ["Prends {a}ce{/a} bus !", "masculin sing. + consonne"],
      ],
    },
    {
      type: "highlight",
      label: "Astuce : -ci / -là",
      items: [
        "On peut ajouter {a}-ci{/a} (proche) ou {a}-là{/a} (loin) pour préciser.",
        "ce livre-{a}ci{/a} (this book here) / ce livre-{a}là{/a} (that book there)",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
