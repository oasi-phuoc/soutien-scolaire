import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L12: GrammarLesson = {
  slug: "a2-gr-l12",
  code: "R4.18",
  level: "A2",
  title: "Les adjectifs — cas particuliers et place",
  theory: [
    { type: "heading", text: "Adjectifs à trois formes masculines" },
    {
      type: "plain_list",
      items: [
        "Certains adjectifs ont une forme masculine spéciale devant une {a}voyelle ou h muet{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Masculin devant cons.", "Masculin devant voyelle/h muet", "Féminin", "Pluriel masc."],
      rows: [
        ["{a}beau{/a}", "{a}bel{/a}", "belle", "beaux"],
        ["{a}nouveau{/a}", "{a}nouvel{/a}", "nouvelle", "nouveaux"],
        ["{a}vieux{/a}", "{a}vieil{/a}", "vieille", "vieux"],
        ["{a}fou{/a}", "{a}fol{/a}", "folle", "fous"],
        ["{a}mou{/a}", "{a}mol{/a}", "molle", "mous"],
      ],
    },
    {
      type: "grid",
      headers: ["Devant consonne", "Devant voyelle / h muet"],
      rows: [
        ["un {a}beau{/a} film", "un {a}bel{/a} homme"],
        ["un {a}nouveau{/a} livre", "un {a}nouvel{/a} appartement"],
        ["un {a}vieux{/a} bâtiment", "un {a}vieil{/a} arbre"],
      ],
    },
    { type: "heading", text: "La place des adjectifs", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "En français, la majorité des adjectifs se placent {a}après{/a} le nom.",
        "Mais un groupe d'adjectifs courants se placent {a}avant{/a} le nom.",
      ],
    },
    {
      type: "grid",
      headers: ["Place", "Catégorie", "Adjectifs"],
      boldFirstCol: true,
      rows: [
        ["{a}Avant{/a} le nom", "beauté / âge / bien / mal / taille", "beau, joli, jeune, vieux, bon, mauvais, grand, petit, gros"],
        ["{a}Après{/a} le nom", "nationalité, couleur, forme, religion", "français, bleu, rond, catholique"],
        ["{a}Après{/a} le nom", "adjectifs longs (participiaux…)", "intéressant, fatigant, extraordinaire"],
      ],
    },
    {
      type: "highlight",
      label: "Adjectifs qui changent de sens selon la place",
      items: [
        "{a}ancien{/a} : un {a}ancien{/a} collègue (= ex-) / un bâtiment {a}ancien{/a} (= vieux)",
        "{a}cher{/a} : un {a}cher{/a} ami (= bien-aimé) / un restaurant {a}cher{/a} (= coûteux)",
        "{a}grand{/a} : un {a}grand{/a} homme (= illustre) / un homme {a}grand{/a} (= de haute taille)",
        "{a}propre{/a} : ma {a}propre{/a} voiture (= à moi) / une voiture {a}propre{/a} (= clean)",
        "{a}pauvre{/a} : ce {a}pauvre{/a} garçon (= à plaindre) / un garçon {a}pauvre{/a} (= sans argent)",
      ],
    },
  ],
  exercises: [],
};
