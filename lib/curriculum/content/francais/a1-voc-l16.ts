import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_L16: VocabLesson = {
  slug: "a1-voc-l16",
  code: "V.6",
  level: "A1",
  title: "La nourriture et le restaurant",
  theory: [
    { type: "heading", text: "Les repas de la journée" },
    {
      type: "vocab",
      title: "Les trois repas",
      items: [
        "le petit-déjeuner (le matin)",
        "le déjeuner (à midi)",
        "le dîner (le soir)",
      ],
    },
    {
      type: "heading", text: "Les aliments courants",
    },
    {
      type: "vocab",
      title: "Nourriture et boissons",
      items: [
        "le pain",
        "le fromage",
        "le vin",
        "l'eau (f.)",
        "le café",
        "le thé",
        "la viande",
        "le poisson",
        "les légumes (m.pl.)",
        "les fruits (m.pl.)",
        "le riz",
        "les pâtes (f.pl.)",
      ],
    },
    {
      type: "heading", text: "Au restaurant",
    },
    {
      type: "vocab",
      title: "Vocabulaire du restaurant",
      items: [
        "commander",
        "l'addition (f.)",
        "un plat (principal)",
        "une entrée",
        "un dessert",
        "un serveur / une serveuse",
        "la carte / le menu",
        "une table pour deux",
      ],
    },
    {
      type: "rule",
      text: "Pour commander, on dit : « Je voudrais... » ou « Je vais prendre... »",
      examples: [
        { correct: "Je voudrais une entrée et un plat, s'il vous plaît." },
        { correct: "Je vais prendre le menu à 15 euros." },
      ],
    },
    {
      type: "note",
      text: "L'addition = the bill. On dit : « L'addition, s'il vous plaît ! » pour demander l'addition.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'aliment et sa catégorie",
      instruction: "Reliez chaque aliment à sa catégorie.",
      pairs: [
        { left: "le pain", right: "boulangerie" },
        { left: "le fromage", right: "produit laitier" },
        { left: "le poisson", right: "protéine" },
        { left: "les carottes", right: "légume" },
        { left: "les pommes", right: "fruit" },
        { left: "le vin", right: "boisson alcoolisée" },
      ],
    },
    {
      type: "fill",
      title: "Au restaurant",
      instruction: "Complétez les phrases avec le bon mot.",
      items: [
        { sentence: "Pour demander à payer, on dit : « L'___, s'il vous plaît ! »", hint: "addition", answer: "addition" },
        { sentence: "Le ___ apporte les plats à table.", hint: "serveur", answer: "serveur" },
        { sentence: "Pour commencer, je prends une ___ : une soupe à l'oignon.", hint: "entrée", answer: "entrée" },
        { sentence: "Comme ___, je voudrais un steak frites.", hint: "plat", answer: "plat" },
        { sentence: "En France, le ___ du soir s'appelle le dîner.", hint: "repas", answer: "repas" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "Le matin, je prends le ___.", choices: ["petit-déjeuner", "dîner", "déjeuner", "goûter"], correctIdx: 0 },
        { sentence: "À midi, les Français mangent le ___.", choices: ["déjeuner", "dîner", "petit-déjeuner", "souper"], correctIdx: 0 },
        { sentence: "Pour commencer le repas, on prend une ___.", choices: ["entrée", "addition", "carte", "note"], correctIdx: 0 },
        { sentence: "Je voudrais ___ la carte, s'il vous plaît.", choices: ["voir", "prendre", "manger", "boire"], correctIdx: 0 },
      ],
    },
  ],
};
