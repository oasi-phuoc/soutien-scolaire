import type { GrammarLesson } from "../../grammar-data";

/** Unité 48 — La comparaison avec un nom ou un verbe (G4.18) */
export const A1_GR_COMPARAISON_NOM_VERBE: GrammarLesson = {
  slug: "a1-gr-comparaison-nom-verbe",
  code: "G4.18",
  level: "A1",
  title: "La comparaison avec un nom ou un verbe",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Pour comparer des quantités, on utilise des noms ou des verbes.",
        "Exemple : À Paris, il y a moins de lignes de métro que de bus, mais le métro transporte plus de voyageurs. On dit que le métro ne pollue pas autant que les bus.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes avec un nom",
    },
    {
      type: "grid",
      headers: ["", "Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        [">", "plus de… que", "Le métro transporte plus de voyageurs que les bus."],
        ["<", "moins de… que (de)", "Il y a moins de bus que de voitures."],
        ["=", "autant de… que", "Les métros font autant de bruit que les trains."],
      ],
    },
    {
      type: "note",
      text: "Pour l'identité : {a}le / la / les même(s){/a}. → Je prends le même bus que ma voisine. ; On a les mêmes tickets dans le métro et dans le bus.",
    },
    {
      type: "heading",
      text: "Formes avec un verbe",
    },
    {
      type: "grid",
      headers: ["", "Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        [">", "plus que", "Les voitures polluent plus que le métro."],
        ["<", "moins que", "Le métro pollue moins que les bus."],
        ["=", "autant que", "Les métros polluent autant que les trains."],
      ],
    },
    {
      type: "note",
      text: "Égalité aussi avec {a}comme{/a}. → Il fait comme moi.",
    },
    {
      type: "note",
      text: "Avec des personnes : pronom tonique. → Je déteste le métro autant que toi.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "text",
      items: [
        "En français courant, on prononce généralement le {a}s{/a} de {a}plus{/a} dans ces emplois. → Ça pollue plus. ; Les voitures polluent plus que le métro.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Comparaison nom / verbe",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il y a ___ lignes de métro que de bus.", choices: ["moins de", "moins", "autant"], correctIdx: 0 },
        { sentence: "Le métro transporte ___ voyageurs.", choices: ["plus de", "plus", "autant"], correctIdx: 0 },
        { sentence: "Le métro ne pollue pas ___ les bus.", choices: ["autant que", "autant de", "plus de"], correctIdx: 0 },
        { sentence: "Les métros font ___ bruit que les trains.", choices: ["autant de", "autant", "plus"], correctIdx: 0 },
        { sentence: "Je prends le ___ bus que ma voisine.", choices: ["même", "mêmes", "plus"], correctIdx: 0 },
        { sentence: "Les voitures polluent ___ que le métro.", choices: ["plus", "plus de", "autant de"], correctIdx: 0 },
        { sentence: "Le métro pollue ___ que les bus.", choices: ["moins", "moins de", "autant de"], correctIdx: 0 },
        { sentence: "Il fait ___ moi.", choices: ["comme", "autant de", "plus de"], correctIdx: 0 },
        { sentence: "Je déteste le métro autant que ___ .", choices: ["toi", "tu", "te"], correctIdx: 0 },
        { sentence: "On a ___ tickets.", choices: ["les mêmes", "le même", "autant"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez plus de, moins de, autant de, plus, moins, autant, même ou comme.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il y a ___ bus que de voitures.", hint: "< + nom", answer: "moins de" },
        { sentence: "Le métro transporte ___ voyageurs que les bus.", hint: "> + nom", answer: "plus de" },
        { sentence: "Ils font ___ bruit que les trains.", hint: "= + nom", answer: "autant de" },
        { sentence: "Les voitures polluent ___ que le métro.", hint: "> + verbe", answer: "plus" },
        { sentence: "Le métro pollue ___ que les bus.", hint: "< + verbe", answer: "moins" },
        { sentence: "Les trains polluent ___ que les métros.", hint: "= + verbe", answer: "autant" },
        { sentence: "Je prends le ___ bus qu'elle.", hint: "identité", answer: "même" },
        { sentence: "Il fait ___ moi.", hint: "égalité", answer: "comme" },
        { sentence: "Je le déteste autant que ___ .", hint: "pronom", answer: "toi" },
        { sentence: "Il y a moins de métros ___ bus.", hint: "que de", answer: "que de" },
      ],
    },
  ],
};
