import type { VocabTheme } from "../../vocabulary-data";

export const V9_TRANSPORT_THEME: VocabTheme = {
  slug: "v9-transport",
  code: "V9.2",
  title: "Le transport",
  section: "V9",
  words: [
    { word: "bus",     article: "le",  gender: "m", definition: "transport collectif urbain sur route" },
    { word: "métro",   article: "le",  gender: "m", definition: "train souterrain en ville" },
    { word: "tram",    article: "le",  gender: "m", definition: "transport sur rails en surface" },
    { word: "train", image: "train.jpg",   article: "le",  gender: "m", definition: "transport ferroviaire longue distance" },
    { word: "voiture", article: "la",  gender: "f", definition: "véhicule personnel à moteur" },
    { word: "vélo",    article: "le",  gender: "m", definition: "véhicule à deux roues sans moteur" },
    { word: "taxi",    article: "le",  gender: "m", definition: "voiture avec chauffeur payant" },
    { word: "moto", image: "moto.jpg",    article: "la",  gender: "f", definition: "véhicule motorisé à deux roues" },
    { word: "avion", image: "avion.jpg",   article: "l'",  gender: "m", definition: "véhicule aérien pour voyager loin" },
    { word: "bateau", image: "bateau.jpg",  article: "le",  gender: "m", definition: "véhicule pour voyager sur l'eau" },
    { word: "camion",  article: "le",  gender: "m", definition: "grand véhicule pour transporter des marchandises" },
    { word: "scooter", article: "le",  gender: "m", definition: "petit véhicule motorisé à deux roues" },
    { word: "arrêt",   article: "l'",  gender: "m", definition: "point d'arrêt pour le bus ou tram" },
    { word: "ticket",  article: "le",  gender: "m", definition: "billet pour un trajet en transport commun" },
    { word: "billet",  article: "le",  gender: "m", definition: "titre de transport pour le train ou avion" },
  ],
  sentences: [
    { sentence: "Il prend le ___ chaque matin pour aller au travail.",   answer: "métro" },
    { sentence: "Elle a acheté un ___ de train pour Lyon.",              answer: "billet" },
    { sentence: "L'___ est en retard de dix minutes.",                   answer: "avion" },
    { sentence: "Ils attendent le ___ à l'arrêt de bus.",                answer: "bus" },
    { sentence: "Il préfère le ___ pour éviter les embouteillages.",     answer: "vélo" },
  ],
};
