import type { VocabTheme } from "../../vocabulary-data";

export const V9_AEROPORT_THEME: VocabTheme = {
  slug: "v9-aeroport",
  code: "V9.6",
  title: "L'aéroport",
  section: "V9",
  words: [
    { word: "passeport",           article: "le",  gender: "m", definition: "document officiel d'identité pour voyager" },
    { word: "visa",                article: "le",  gender: "m", definition: "autorisation officielle pour entrer dans un pays" },
    { word: "vol",                 article: "le",  gender: "m", definition: "trajet en avion" },
    { word: "destination",         article: "la",  gender: "f", definition: "lieu où l'on se rend" },
    { word: "avion", image: "avion.jpg",               article: "l'",  gender: "m", definition: "véhicule aérien" },
    { word: "escale",              article: "l'",  gender: "f", definition: "arrêt intermédiaire lors d'un vol" },
    { word: "valise",              article: "la",  gender: "f", definition: "grand bagage pour les voyages" },
    { word: "terminal",            article: "le",  gender: "m", definition: "bâtiment principal d'un aéroport" },
    { word: "douane",              article: "la",  gender: "f", definition: "contrôle des bagages à la frontière" },
    { word: "enregistrement",      article: "l'",  gender: "m", definition: "démarche pour valider son billet avant de voler" },
    { word: "réservation",         article: "la",  gender: "f", definition: "action de réserver un vol ou un siège" },
    { word: "embarquement",        article: "l'",  gender: "m", definition: "montée dans l'avion" },
    { word: "porte",               article: "la",  gender: "f", definition: "accès à l'avion dans le terminal" },
    { word: "bagage",              article: "le",  gender: "m", definition: "valise ou sac de voyage" },
    { word: "carte d'embarquement",article: "la",  gender: "f", definition: "document remis pour monter dans l'avion" },
  ],
  sentences: [
    { sentence: "Il présente son ___ au contrôle de sécurité.",          answer: "passeport" },
    { sentence: "L'___ commence à la porte 12.",                         answer: "embarquement" },
    { sentence: "Elle fait la queue à l'___ pour enregistrer ses bagages.", answer: "enregistrement" },
    { sentence: "Sa ___ est trop lourde, elle doit payer un supplément.", answer: "valise" },
    { sentence: "Le ___ Paris-New York fait escale à Londres.",          answer: "vol" },
  ],
};
