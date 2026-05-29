import type { VocabTheme } from "../../vocabulary-data";

export const VOYAGES_THEME: VocabTheme = {
  slug: "a2-voc-l01",
  code: "V.13",
  title: "Les voyages et les transports",
  section: "A2",
  words: [
    { word: "billet",         article: "le",  gender: "m", definition: "titre de transport pour voyager" },
    { word: "vol",            article: "le",  gender: "m", definition: "trajet en avion" },
    { word: "escale",         article: "l'",  gender: "f", definition: "arrêt intermédiaire pendant un voyage" },
    { word: "itinéraire",     article: "l'",  gender: "m", definition: "le plan détaillé d'un voyage" },
    { word: "embarquement",   article: "l'",  gender: "m", definition: "action de monter dans l'avion ou le bateau" },
    { word: "quai",           article: "le",  gender: "m", definition: "zone d'attente des trains en gare" },
    { word: "salle d'attente",article: "la",  gender: "f", definition: "lieu où on attend son transport" },
    { word: "aller-retour",   article: "l'",  gender: "m", definition: "billet pour partir et revenir" },
    { word: "escale",         article: "l'",  gender: "f", definition: "arrêt intermédiaire dans un vol" },
    { word: "réservation",    article: "la",  gender: "f", definition: "action de retenir une place à l'avance" },
    { word: "passeport",      article: "le",  gender: "m", definition: "document d'identité pour voyager à l'étranger" },
    { word: "bagage",         article: "le",  gender: "m", definition: "valise ou sac emporté en voyage" },
  ],
  sentences: [
    { sentence: "Je voudrais un ___ Paris–Rome, je reviens dans une semaine.", answer: "aller-retour" },
    { sentence: "Mon ___ est prêt : je pars à 9h et j'arrive à 14h.", answer: "itinéraire" },
    { sentence: "L'___ commence dans 20 minutes, dépêchez-vous.", answer: "embarquement" },
    { sentence: "Je dois présenter mon ___ au contrôle.", answer: "passeport" },
    { sentence: "J'ai fait ma ___ en ligne pour le vol Paris–Genève.", answer: "réservation" },
  ],
};
