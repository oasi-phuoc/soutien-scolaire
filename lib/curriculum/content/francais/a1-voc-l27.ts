import type { VocabLesson } from "../../vocabulary-data";

export const A1_VOC_L27: VocabLesson = {
  slug: "a1-voc-l27",
  code: "V.11",
  level: "A1",
  title: "Les vêtements et les achats",
  theory: [
    { type: "heading", text: "Les vêtements" },
    {
      type: "vocab",
      title: "Vêtements féminins et mixtes",
      items: [
        "une robe (dress)",
        "une jupe (skirt)",
        "un pantalon (trousers)",
        "un jean",
        "un pull / un pullover (sweater)",
        "un t-shirt",
        "une chemise (shirt)",
        "une veste (jacket)",
        "un manteau (coat)",
        "une écharpe (scarf)",
        "un chapeau (hat)",
        "des chaussures (f.pl.) (shoes)",
        "des chaussettes (f.pl.) (socks)",
        "un sac (bag)",
        "des lunettes (f.pl.) (glasses)",
      ],
    },
    {
      type: "heading", text: "Les verbes pour les achats",
    },
    {
      type: "rule",
      text: "Verbes importants pour faire du shopping.",
      examples: [
        { correct: "J'achète une robe bleue." },
        { correct: "Elle porte un jean et un pull rouge." },
        { correct: "Tu peux essayer ce manteau ?" },
        { correct: "Vous faites quelle taille ?" },
      ],
    },
    {
      type: "vocab",
      title: "Verbes utiles",
      items: [
        "acheter (to buy)",
        "porter (to wear)",
        "essayer (to try on)",
        "choisir (to choose)",
        "payer (to pay)",
        "faire quelle taille ? (what size?)",
      ],
    },
    {
      type: "heading", text: "Adjectifs pour décrire les vêtements",
    },
    {
      type: "vocab",
      title: "Adjectifs courants",
      items: [
        "cher / chère (expensive)",
        "bon marché / pas cher (cheap)",
        "joli(e) (pretty)",
        "élégant(e)",
        "grand(e) / petit(e)",
        "court(e) / long(ue)",
        "serré(e) (tight) / ample (loose)",
      ],
    },
    {
      type: "rule",
      text: "Pour demander la taille : « Vous faites quelle taille ? » — Réponse : « Je fais du 38 / du M. »",
      examples: [
        { correct: "— Vous faites quelle taille ? — Je fais du 42." },
        { correct: "— Ce manteau est trop grand. Vous avez du 38 ?" },
      ],
    },
    {
      type: "note",
      text: "En France, les tailles pour les vêtements féminins vont de 34 à 48 ; pour les hommes de 38 à 60.",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer le vêtement et sa description",
      instruction: "Reliez chaque vêtement à sa définition.",
      pairs: [
        { left: "une robe", right: "vêtement féminin une seule pièce" },
        { left: "un manteau", right: "vêtement chaud pour l'extérieur" },
        { left: "une écharpe", right: "on la porte autour du cou" },
        { left: "des chaussettes", right: "on les porte dans les chaussures" },
        { left: "une veste", right: "vêtement court sur la chemise" },
        { left: "un jean", right: "pantalon en denim" },
      ],
    },
    {
      type: "fill",
      title: "Compléter les phrases",
      instruction: "Complétez chaque phrase avec le bon verbe ou mot.",
      items: [
        { sentence: "Je voudrais ___ cette robe avant de l'acheter.", hint: "essayer", answer: "essayer" },
        { sentence: "Elle ___ toujours des vêtements élégants au bureau.", hint: "porte", answer: "porte" },
        { sentence: "Ce manteau est trop cher ! Je cherche quelque chose de moins ___.", hint: "cher", answer: "cher" },
        { sentence: "Tu fais quelle ___ ? Du 40 ou du 42 ?", hint: "taille", answer: "taille" },
        { sentence: "J'___ une nouvelle veste pour l'hiver.", hint: "achète", answer: "achète" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir le bon vêtement",
      instruction: "Choisissez le mot correct pour compléter la phrase.",
      items: [
        { sentence: "En hiver, je mets toujours un ___ pour avoir chaud.", choices: ["manteau", "t-shirt", "short", "maillot"], correctIdx: 0 },
        { sentence: "Pour une occasion formelle, elle porte une ___.", choices: ["robe", "écharpe", "chaussette", "casquette"], correctIdx: 0 },
        { sentence: "Le vendeur demande : « Vous faites quelle ___ ? »", choices: ["taille", "couleur", "marque", "pointure"], correctIdx: 0 },
        { sentence: "Ces chaussures sont très ___ : elles coûtent 200 euros.", choices: ["chères", "jolies", "petites", "amples"], correctIdx: 0 },
      ],
    },
  ],
};
