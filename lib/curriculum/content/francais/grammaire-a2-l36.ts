import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L36: GrammarLesson = {
  slug: "a2-gr-l36",
  code: "G.43",
  level: "A2",
  title: "Les pronoms Y et EN",
  theory: [
    { type: "heading", text: "Le pronom Y" },
    {
      type: "plain_list",
      items: [
        "{a}Y{/a} remplace un lieu ou un groupe {a}à + chose{/a} (verbes construits avec à).",
        "Il répond à la question : {a}où ?{/a} ou {a}à quoi ?{/a}",
      ],
    },
    {
      type: "grid",
      headers: ["Ce que Y remplace", "Phrase originale", "→ Avec Y"],
      boldFirstCol: true,
      rows: [
        ["Lieu ({a}à / en / dans…{/a})", "Je vais à Paris.", "J'{a}y{/a} vais."],
        ["Lieu ({a}à / en / dans…{/a})", "Il est à la maison.", "Il {a}y{/a} est."],
        ["Chose ({a}à + nom{/a})", "Je pense à ce projet.", "J'{a}y{/a} pense."],
        ["Chose ({a}à + nom{/a})", "Tu réponds à cette question ?", "Tu {a}y{/a} réponds ?"],
      ],
    },
    {
      type: "highlight",
      label: "Attention : Y ne remplace pas une personne",
      items: [
        "Je pense à Paul → Je pense {a}à lui{/a}. (pas : J'y pense)",
        "Pour les personnes, on utilise {a}à lui / à elle / à eux{/a}.",
        "Pour les choses et les lieux : {a}y{/a}.",
      ],
      noBulletItems: [0],
    },
    { type: "heading", text: "Le pronom EN", sub: true, accent: true },
    {
      type: "plain_list",
      items: [
        "{a}EN{/a} remplace un groupe {a}de + nom{/a} ou un nom avec article partitif / indéfini.",
        "Il répond à la question : {a}de quoi ? combien ?{/a}",
      ],
    },
    {
      type: "grid",
      headers: ["Ce que EN remplace", "Phrase originale", "→ Avec EN"],
      boldFirstCol: true,
      rows: [
        ["Partitif (du / de la / de l')", "Je mange du pain.", "J'{a}en{/a} mange."],
        ["Article indéfini (des / un / une)", "J'ai des amis.", "J'{a}en{/a} ai."],
        ["De + nom (verbe + de)", "J'ai besoin de temps.", "J'{a}en{/a} ai besoin."],
        ["De + lieu", "Je reviens de Paris.", "J'{a}en{/a} reviens."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Avec une quantité, on garde le {a}chiffre ou l'adverbe de quantité{/a} après le verbe.",
      ],
    },
    {
      type: "grid",
      headers: ["Phrase originale", "→ Avec EN"],
      rows: [
        ["J'ai deux chiens.", "J'{a}en{/a} ai {a}deux{/a}."],
        ["Je veux un café.", "J'{a}en{/a} veux {a}un{/a}."],
        ["Elle a beaucoup de travail.", "Elle {a}en{/a} a {a}beaucoup{/a}."],
      ],
    },
    { type: "heading", text: "Place de Y et EN", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Temps", "Exemple avec Y", "Exemple avec EN"],
      boldFirstCol: true,
      rows: [
        ["Présent", "J'{a}y{/a} vais.", "J'{a}en{/a} mange."],
        ["Passé composé", "J'{a}y{/a} suis allé.", "J'{a}en{/a} ai mangé."],
        ["Futur proche", "Je vais {a}y{/a} aller.", "Je vais {a}en{/a} manger."],
        ["Négatif", "Je n'{a}y{/a} vais pas.", "Je n'{a}en{/a} mange pas."],
        ["Impératif affirmatif", "Vas-{a}y{/a} !", "Manges-{a}en{/a} !"],
      ],
    },
  ],
  exercises: [],
};
