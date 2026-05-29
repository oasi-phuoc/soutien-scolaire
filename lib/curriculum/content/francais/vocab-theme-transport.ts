import type { VocabTheme } from "../../vocabulary-data";

export const TRANSPORT_THEME: VocabTheme = {
  slug: "a1-voc-l13",
  code: "V.5",
  title: "Les moyens de transport",
  section: "A1",
  words: [
    { word: "voiture",   article: "la",  gender: "f", definition: "véhicule à 4 roues motorisé" },
    { word: "vélo",      article: "le",  gender: "m", definition: "véhicule à 2 roues non motorisé" },
    { word: "avion",     article: "l'",  gender: "m", definition: "transport aérien" },
    { word: "train",     article: "le",  gender: "m", definition: "transport sur rails" },
    { word: "bus",       article: "le",  gender: "m", definition: "grand véhicule de transport en commun" },
    { word: "métro",     article: "le",  gender: "m", definition: "transport souterrain en ville" },
    { word: "tramway",   article: "le",  gender: "m", definition: "transport en commun sur rails en ville" },
    { word: "taxi",      article: "le",  gender: "m", definition: "voiture avec chauffeur payant" },
    { word: "bateau",    article: "le",  gender: "m", definition: "transport sur l'eau" },
    { word: "moto",      article: "la",  gender: "f", definition: "véhicule à 2 roues motorisé" },
    { word: "gare",      article: "la",  gender: "f", definition: "lieu d'arrivée et de départ des trains" },
    { word: "aéroport",  article: "l'",  gender: "m", definition: "lieu d'arrivée et de départ des avions" },
  ],
  sentences: [
    { sentence: "Je prends le ___ pour aller de Lyon à Paris.", answer: "train" },
    { sentence: "Elle va à l'école à ___ car c'est près de chez elle.", answer: "vélo" },
    { sentence: "Nous partons en ___ pour traverser l'Atlantique.", answer: "avion" },
    { sentence: "Le ___ passe toutes les 5 minutes dans cette ville.", answer: "métro" },
    { sentence: "L'___ de Paris est très grand.", answer: "aéroport" },
  ],
};
