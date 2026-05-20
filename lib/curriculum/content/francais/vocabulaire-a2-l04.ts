import type { VocabLesson } from "../../vocabulary-data";

export const A2_VOC_L04: VocabLesson = {
  slug: "a2-voc-l04",
  code: "V.16",
  level: "A2",
  title: "Les sorties et les invitations",
  theory: [
    { type: "heading", text: "Organiser une sortie" },
    {
      type: "vocab",
      title: "Types de sorties",
      items: [
        "une soirée (party / evening out)",
        "une fête (celebration)",
        "un pique-nique",
        "un apéro / apéritif (pre-dinner drinks)",
        "une expo(sition) (exhibition)",
        "un spectacle (show)",
        "un concert",
        "un repas entre amis",
        "boire un verre (to go for a drink)",
        "un jour férié (public holiday)",
      ],
    },
    {
      type: "heading", text: "Inviter et répondre",
    },
    {
      type: "rule",
      text: "Formules pour inviter quelqu'un.",
      examples: [
        { correct: "Ça te dit de venir pique-niquer samedi ?" },
        { correct: "Tu es dispo vendredi soir ?" },
        { correct: "On organise une soirée, tu viens ?" },
        { correct: "Je t'invite à dîner chez moi." },
      ],
    },
    {
      type: "rule",
      text: "Formules pour accepter ou refuser.",
      examples: [
        { correct: "Oui, ça marche ! / Parfait, avec plaisir !" },
        { correct: "Je suis dispo, je viens avec plaisir." },
        { correct: "Désolé(e), je ne peux pas, j'ai déjà quelque chose." },
        { correct: "C'est dommage, je suis pris(e)." },
      ],
    },
    {
      type: "vocab",
      title: "Formules informelles",
      items: [
        "Ça te / vous dit de... ? (Do you fancy...?)",
        "Je suis dispo (I'm available / free)",
        "Ça marche ! (It works! / OK!)",
        "C'est sympa ! (That's nice!)",
        "À plus (tard) ! (See you later!)",
        "À bientôt ! (See you soon!)",
        "apporter à boire / à manger (to bring drinks / food)",
      ],
    },
    {
      type: "rule",
      text: "Organiser un événement : penser aux détails.",
      examples: [
        { correct: "Où est-ce qu'on se retrouve ? — On se retrouve au parc." },
        { correct: "C'est à quelle heure ? — C'est à 19h." },
        { correct: "Qu'est-ce qu'on apporte ? — Apporte une bouteille de vin." },
      ],
    },
    {
      type: "note",
      text: "L'apéro est une tradition française : boissons et petits snacks avant le repas principal. On dit souvent « Je t'invite à l'apéro ».",
    },
  ],
  exercises: [
    {
      type: "match",
      title: "Associer l'expression et sa signification",
      instruction: "Reliez chaque expression informelle à sa définition.",
      pairs: [
        { left: "Ça te dit ?", right: "Est-ce que tu veux ?" },
        { left: "Ça marche !", right: "D'accord !" },
        { left: "Je suis dispo", right: "Je suis libre" },
        { left: "À plus !", right: "À bientôt !" },
        { left: "C'est sympa", right: "C'est agréable" },
        { left: "Je suis pris(e)", right: "Je ne suis pas libre" },
      ],
    },
    {
      type: "fill",
      title: "Compléter le dialogue",
      instruction: "Complétez les phrases avec le bon mot ou expression.",
      items: [
        { sentence: "— Ça te dit de venir à mon ___  samedi soir ?", hint: "apéro", answer: "apéro" },
        { sentence: "— Oui, je suis ___ ! J'arrive vers 19h.", hint: "dispo", answer: "dispo" },
        { sentence: "— Qu'est-ce que j'___ ? Du vin ou de la bière ?", hint: "apporte", answer: "apporte" },
        { sentence: "— Apporte ce que tu veux. ___ marche !", hint: "Ça", answer: "Ça" },
        { sentence: "— Super, ___ bientôt !", hint: "à", answer: "à" },
      ],
    },
    {
      type: "qcm",
      title: "Choisir la bonne réponse",
      instruction: "Choisissez la bonne réponse pour chaque situation.",
      items: [
        { sentence: "Ton ami dit : « Ça te dit de venir au cinéma ? » Tu acceptes :", choices: ["Oui, ça marche !", "Non, je suis dispo.", "Désolé, c'est sympa.", "Je suis pris."], correctIdx: 0 },
        { sentence: "Tu veux inviter un ami à un pique-nique. Tu dis :", choices: ["Ça te dit de venir pique-niquer ?", "Tu es pris dimanche ?", "Je ne suis pas dispo.", "C'est dommage !"], correctIdx: 0 },
        { sentence: "Pour une soirée, on dit aux invités d'___.", choices: ["apporter à boire", "être pris", "ne pas venir", "rester chez eux"], correctIdx: 0 },
        { sentence: "Un ___ est un apéritif entre amis.", choices: ["apéro", "pique-nique", "spectacle", "concert"], correctIdx: 0 },
      ],
    },
  ],
};
