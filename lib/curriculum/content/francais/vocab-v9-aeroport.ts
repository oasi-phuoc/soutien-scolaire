import type { VocabTheme } from "../../vocabulary-data";

export const V9_AEROPORT_THEME: VocabTheme = {
  slug: "v9-aeroport",
  code: "V9.6",
  title: "L'aéroport",
  section: "V9",
  words: [
    { word: "passeport", image: "passeport.jpg",           article: "le",  gender: "m", definition: "document officiel d'identité pour voyager" },
    { word: "visa", image: "visa.jpg",                article: "le",  gender: "m", definition: "autorisation officielle pour entrer dans un pays" },
    { word: "vol", image: "vol.jpg",                 article: "le",  gender: "m", definition: "trajet en avion" },
    { word: "destination", image: "destination.jpg",         article: "la",  gender: "f", definition: "lieu où l'on se rend" },
    { word: "avion", image: "avion.jpg",               article: "l'",  gender: "m", definition: "véhicule aérien" },
    { word: "escale", image: "escale.jpg",              article: "l'",  gender: "f", definition: "arrêt intermédiaire lors d'un vol" },
    { word: "valise", image: "valise.jpg",              article: "la",  gender: "f", definition: "grand bagage pour les voyages" },
    { word: "terminal", image: "terminal.jpg",            article: "le",  gender: "m", definition: "bâtiment principal d'un aéroport" },
    { word: "douane", image: "douane.jpg",              article: "la",  gender: "f", definition: "contrôle des bagages à la frontière" },
    { word: "enregistrement", image: "enregistrement.jpg",      article: "l'",  gender: "m", definition: "démarche pour valider son billet avant de voler" },
    { word: "réservation", image: "reservation.jpg",         article: "la",  gender: "f", definition: "action de réserver un vol ou un siège" },
    { word: "embarquement", image: "embarquement.jpg",        article: "l'",  gender: "m", definition: "montée dans l'avion" },
    { word: "porte", image: "porte.jpg",               article: "la",  gender: "f", definition: "accès à l'avion dans le terminal" },
    { word: "bagage", image: "bagage.jpg",              article: "le",  gender: "m", definition: "valise ou sac de voyage" },
    { word: "carte d'embarquement", image: "carte-d-embarquement.jpg",article: "la",  gender: "f", definition: "document remis pour monter dans l'avion" },
  ],
  sentences: [
    { sentence: "Il présente son ___ au contrôle de sécurité.",          answer: "passeport" },
    { sentence: "L'___ commence à la porte 12.",                         answer: "embarquement" },
    { sentence: "Elle fait la queue à l'___ pour enregistrer ses bagages.", answer: "enregistrement" },
    { sentence: "Sa ___ est trop lourde, elle doit payer un supplément.", answer: "valise" },
    { sentence: "Le ___ Paris-New York fait escale à Londres.",          answer: "vol" },
  ],
};
