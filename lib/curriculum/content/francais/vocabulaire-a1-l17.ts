import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_L17: VocabLesson = {
  slug: "a1-voc-l17",
  code: "V.10",
  level: "A1",
  title: "Le logement",
  theory: [
    { type: "heading", text: "Les pièces de la maison" },
    {
      type: "vocab",
      title: "Les pièces",
      items: [
        "un salon (living room)",
        "une cuisine (kitchen)",
        "une chambre (bedroom)",
        "une salle de bain (bathroom)",
        "des toilettes / les WC (toilet)",
        "une salle à manger (dining room)",
        "un couloir (hallway)",
        "un balcon / une terrasse",
        "un garage",
        "une cave (cellar)",
      ],
    },
    {
      type: "heading", text: "Les meubles et équipements",
    },
    {
      type: "vocab",
      title: "Dans le salon",
      items: [
        "un canapé (sofa)",
        "une table basse (coffee table)",
        "un fauteuil (armchair)",
        "une télévision",
        "une étagère (shelf)",
      ],
    },
    {
      type: "vocab",
      title: "Dans la cuisine",
      items: [
        "un frigo / un réfrigérateur",
        "une plaque de cuisson (hob)",
        "un four (oven)",
        "un lave-vaisselle (dishwasher)",
        "un micro-ondes (microwave)",
      ],
    },
    {
      type: "vocab",
      title: "Dans la chambre",
      items: [
        "un lit",
        "une armoire (wardrobe)",
        "une commode (chest of drawers)",
        "une lampe de chevet",
      ],
    },
    {
      type: "heading", text: "Location et déménagement",
    },
    {
      type: "vocab",
      title: "Vocabulaire de la location",
      items: [
        "louer (to rent)",
        "un appartement",
        "une maison",
        "un studio (bedsit)",
        "le loyer (rent)",
        "les charges (utilities)",
        "déménager (to move house)",
        "emménager (to move in)",
        "un propriétaire / un locataire",
      ],
    },
    {
      type: "note",
      text: "Un studio = un seul espace de vie + une salle de bain. Un appartement T2 = une chambre séparée.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le meuble et la pièce",
      instruction: "Reliez chaque meuble à la pièce où on le trouve habituellement.",
      pairs: [
        { left: "un canapé", right: "le salon" },
        { left: "un lit", right: "la chambre" },
        { left: "un frigo", right: "la cuisine" },
        { left: "une baignoire", right: "la salle de bain" },
        { left: "une table à manger", right: "la salle à manger" },
        { left: "une armoire", right: "la chambre" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases sur le logement",
      instruction: "Complétez chaque phrase avec le mot correct.",
      items: [
        { sentence: "Je cherche un ___ : juste une pièce avec une kitchenette.", hint: "studio", answer: "studio" },
        { sentence: "Le ___ mensuel est de 850 euros.", hint: "loyer", answer: "loyer" },
        { sentence: "Nous allons ___ le mois prochain dans notre nouvel appartement.", hint: "emménager", answer: "emménager" },
        { sentence: "On regarde les films dans le ___.", hint: "salon", answer: "salon" },
        { sentence: "La ___ est à côté de la chambre principale.", hint: "salle de bain", answer: "salle de bain" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon mot",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "On fait la cuisine dans ___.", choices: ["la cuisine", "le salon", "la chambre", "le couloir"], correctIdx: 0 },
        { sentence: "Pour dormir, on va dans ___.", choices: ["la chambre", "la salle de bain", "le salon", "la cave"], correctIdx: 0 },
        { sentence: "Je ___ mon appartement 900 euros par mois.", choices: ["loue", "vends", "achète", "donne"], correctIdx: 0 },
        { sentence: "Le ___ conserve les aliments au froid.", choices: ["frigo", "four", "micro-ondes", "lave-vaisselle"], correctIdx: 0 },
      ],
    },
  ],
};
