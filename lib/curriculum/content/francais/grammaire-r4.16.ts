import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L18: GrammarLesson = {
  slug: "a2-gr-l18",
  code: "R4.16",
  level: "A2",
  title: "Les prépositions de lieu",
  theory: [
    { type: "heading", text: "Les prépositions de lieu" },
    {
      type: "grid",
      headers: ["Préposition", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}dans{/a}", "à l'intérieur", "Le chat est {a}dans{/a} la boîte."],
        ["{a}sur{/a}", "en contact avec la surface", "Le livre est {a}sur{/a} la table."],
        ["{a}sous{/a}", "en dessous", "Les clés sont {a}sous{/a} le canapé."],
        ["{a}devant{/a}", "en avant de", "Il attend {a}devant{/a} l'entrée."],
        ["{a}derrière{/a}", "en arrière de", "Le jardin est {a}derrière{/a} la maison."],
        ["{a}entre{/a}", "au milieu de deux éléments", "La banque est {a}entre{/a} la boulangerie et la pharmacie."],
        ["{a}en face de{/a}", "vis-à-vis", "La mairie est {a}en face de{/a} l'église."],
        ["{a}à côté de{/a}", "à proximité immédiate", "L'arrêt est {a}à côté de{/a} la gare."],
        ["{a}près de{/a}", "à courte distance", "L'hôtel est {a}près de{/a} la plage."],
        ["{a}loin de{/a}", "à grande distance", "La gare est {a}loin du{/a} centre."],
        ["{a}au-dessus de{/a}", "plus haut que", "L'appartement est {a}au-dessus de{/a} la boulangerie."],
        ["{a}au-dessous de{/a}", "plus bas que", "La cave est {a}au-dessous de{/a} l'appartement."],
      ],
    },
    {
      type: "highlight",
      label: "Contractions obligatoires avec de",
      items: [
        "{a}de + le{/a} → {a}du{/a} : loin {a}du{/a} centre (pas de le)",
        "{a}de + les{/a} → {a}des{/a} : près {a}des{/a} magasins (pas de les)",
        "{a}de + la{/a} → de la : à côté {a}de la{/a} gare (pas de contraction)",
        "{a}de + l'{/a} → de l' : en face {a}de l'{/a}école (pas de contraction)",
      ],
    },
    { type: "heading", text: "Prépositions avec les villes et pays", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Type", "Préposition", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Ville", "{a}à{/a}", "Je suis {a}à{/a} Paris."],
        ["Pays féminin", "{a}en{/a}", "Je suis {a}en{/a} France."],
        ["Pays masculin", "{a}au{/a}", "Je suis {a}au{/a} Maroc."],
        ["Pays pluriel", "{a}aux{/a}", "Je suis {a}aux{/a} États-Unis."],
        ["Île / région", "{a}à / en{/a}", "à Madagascar / en Corse"],
      ],
    },
  ],
  exercises: [],
};
