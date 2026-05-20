import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_L12: VocabLesson = {
  slug: "a1-voc-l12",
  code: "V.9",
  level: "A1",
  title: "La ville et les lieux",
  theory: [
    { type: "heading", text: "Les lieux en ville" },
    {
      type: "vocab",
      title: "Lieux culturels et de loisirs",
      items: [
        "un cinéma",
        "un musée",
        "un théâtre",
        "une bibliothèque",
        "un parc",
        "une piscine",
      ],
    },
    {
      type: "vocab",
      title: "Commerces et services",
      items: [
        "un restaurant",
        "une boulangerie",
        "un café / un bar",
        "un supermarché",
        "une pharmacie",
        "un marché",
        "un hôtel",
      ],
    },
    {
      type: "vocab",
      title: "Institutions et espaces publics",
      items: [
        "une mairie",
        "une église",
        "une mosquée",
        "une place (publique)",
        "une rue",
        "un boulevard",
        "une gare",
      ],
    },
    {
      type: "heading", text: "Prépositions de localisation",
    },
    {
      type: "rule",
      text: "Localiser un endroit avec des prépositions.",
      examples: [
        { correct: "La boulangerie est à côté de la banque." },
        { correct: "Le musée est en face de la mairie." },
        { correct: "La pharmacie est près de l'hôpital." },
        { correct: "L'église est entre la place et la rue principale." },
        { correct: "Le café est à droite de la boulangerie." },
        { correct: "Le parking est derrière le supermarché." },
      ],
    },
    {
      type: "vocab",
      title: "Prépositions de lieu",
      items: [
        "à côté de (next to)",
        "près de (near)",
        "loin de (far from)",
        "en face de (opposite)",
        "devant (in front of)",
        "derrière (behind)",
        "entre (between)",
        "à droite de (to the right of)",
        "à gauche de (to the left of)",
      ],
    },
    {
      type: "note",
      text: "Attention : à côté de + le → à côté du. À côté de + les → à côté des.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le lieu et sa description",
      instruction: "Reliez chaque lieu à sa description.",
      pairs: [
        { left: "une boulangerie", right: "on achète du pain" },
        { left: "une pharmacie", right: "on achète des médicaments" },
        { left: "une mairie", right: "services administratifs municipaux" },
        { left: "un musée", right: "on regarde des œuvres d'art" },
        { left: "une piscine", right: "on fait de la natation" },
        { left: "une bibliothèque", right: "on emprunte des livres" },
      ],
    },
    {
      type: "fill",
      title: "Décrire la localisation",
      instruction: "Complétez avec la bonne préposition de lieu.",
      items: [
        { sentence: "La banque est ___ ___ la boulangerie et la pharmacie.", hint: "entre", answer: "entre" },
        { sentence: "Le café est ___ ___ (opposite) la poste.", hint: "en face de", answer: "en face de" },
        { sentence: "Le parc est ___ ___ (near) du musée.", hint: "près", answer: "près" },
        { sentence: "La mairie est ___ (behind) l'église.", hint: "derrière", answer: "derrière" },
        { sentence: "La boulangerie est à ___ ___ du café.", hint: "côté", answer: "côté" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon lieu",
      instruction: "Choisissez le bon endroit selon la description.",
      items: [
        { sentence: "On achète une baguette et des croissants à ___.", choices: ["la boulangerie", "la pharmacie", "la mairie", "la piscine"], correctIdx: 0 },
        { sentence: "Pour nager, on va à ___.", choices: ["la piscine", "la bibliothèque", "la place", "la gare"], correctIdx: 0 },
        { sentence: "Pour emprunter des livres gratuitement, on va à ___.", choices: ["la bibliothèque", "la librairie", "le cinéma", "le musée"], correctIdx: 0 },
        { sentence: "Le train arrive à ___.", choices: ["la gare", "la mairie", "l'église", "la pharmacie"], correctIdx: 0 },
      ],
    },
  ],
};
