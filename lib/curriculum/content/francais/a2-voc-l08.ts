import type { VocabLesson } from "../../vocabulary-data";

export const A2_VOC_L08: VocabLesson = {
  slug: "a2-voc-l08",
  code: "V.20",
  level: "A2",
  title: "La ville et les services",
  theory: [
    { type: "heading", text: "Les services publics" },
    {
      type: "vocab",
      title: "Services et administrations",
      items: [
        "une mairie (town hall)",
        "une préfecture (prefecture)",
        "La Poste (post office)",
        "une banque (bank)",
        "une bibliothèque (library)",
        "un hôpital",
        "une école / un lycée / une université",
        "un commissariat (police station)",
        "un tribunal (court)",
      ],
    },
    {
      type: "heading", text: "Les commerces",
    },
    {
      type: "vocab",
      title: "Magasins et boutiques",
      items: [
        "une boulangerie (bakery)",
        "une pharmacie (pharmacy)",
        "un supermarché / une grande surface",
        "un magasin de vêtements (clothes shop)",
        "une librairie (bookshop)",
        "une épicerie (grocery store)",
        "un marché (market)",
        "un coiffeur / une coiffeuse (hairdresser)",
        "une banque (bank)",
      ],
    },
    {
      type: "heading", text: "S'orienter dans la ville",
    },
    {
      type: "rule",
      text: "Donner et comprendre des directions.",
      examples: [
        { correct: "Tournez à droite au feu rouge." },
        { correct: "Allez tout droit jusqu'au carrefour." },
        { correct: "Traversez la rue et prenez la deuxième rue à gauche." },
        { correct: "C'est à 5 minutes à pied." },
        { correct: "Prenez le bus numéro 12, descendez à l'arrêt « Mairie »." },
      ],
    },
    {
      type: "vocab",
      title: "Vocabulaire de l'orientation",
      items: [
        "tourner à droite / à gauche (to turn right / left)",
        "aller tout droit (to go straight on)",
        "traverser (to cross)",
        "continuer (to continue)",
        "prendre la rue... (to take ... street)",
        "au carrefour (at the crossroads)",
        "au coin de (at the corner of)",
        "au feu rouge (at the traffic lights)",
        "à l'arrêt de bus (at the bus stop)",
        "à 5 minutes à pied (5 minutes' walk away)",
      ],
    },
    {
      type: "heading", text: "Les pronoms Y et EN",
    },
    {
      type: "rule",
      text: "Y remplace un lieu ou un complément introduit par À. EN remplace un complément introduit par DE.",
      examples: [
        { correct: "Tu vas à la banque ? — Oui, j'y vais. (y = à la banque)" },
        { correct: "Il y a une pharmacie ici ? (il y a = there is/are)" },
        { correct: "Tu viens de la mairie ? — Oui, j'en viens. (en = de la mairie)" },
        { correct: "Tu as besoin d'aide ? — Oui, j'en ai besoin. (en = d'aide)" },
      ],
    },
    {
      type: "note",
      text: "Attention : librairie = bookshop (NOT library). Bibliothèque = library.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le lieu et le service",
      instruction: "Reliez chaque lieu à ce qu'on y fait.",
      pairs: [
        { left: "La Poste", right: "envoyer des lettres et des colis" },
        { left: "une mairie", right: "déclarer une naissance, se marier" },
        { left: "une pharmacie", right: "acheter des médicaments" },
        { left: "une bibliothèque", right: "emprunter des livres" },
        { left: "une boulangerie", right: "acheter du pain frais" },
        { left: "un commissariat", right: "signaler une perte ou un vol" },
      ],
    },
    {
      type: "fill",
      title: "S'orienter dans la ville",
      instruction: "Complétez les phrases avec le bon mot ou expression.",
      items: [
        { sentence: "Allez tout ___ et tournez à gauche.", hint: "droit", answer: "droit" },
        { sentence: "La pharmacie est au ___ de la rue et du boulevard.", hint: "coin", answer: "coin" },
        { sentence: "___ la rue et continuez jusqu'à la mairie.", hint: "Traversez", answer: "Traversez" },
        { sentence: "La bibliothèque est ___ 10 minutes à pied d'ici.", hint: "à", answer: "à" },
        { sentence: "Tu vas à la poste ? — Oui, j'___ vais maintenant.", hint: "y", answer: "y" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon pronom ou le bon lieu",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "Pour acheter un roman, je vais à ___.", choices: ["la librairie", "la bibliothèque", "la pharmacie", "la mairie"], correctIdx: 0 },
        { sentence: "Il revient de la banque : il ___ vient.", choices: ["en", "y", "le", "la"], correctIdx: 0 },
        { sentence: "Pour aller à la gare, tournez à droite au ___ rouge.", choices: ["feu", "coin", "carrefour", "arrêt"], correctIdx: 0 },
        { sentence: "Vous allez à la mairie ? — Oui, nous ___ allons.", choices: ["y", "en", "le", "lui"], correctIdx: 0 },
      ],
    },
  ],
};
