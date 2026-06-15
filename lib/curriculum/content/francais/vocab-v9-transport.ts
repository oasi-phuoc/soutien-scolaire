import type { VocabTheme } from "../../vocabulary-data";

export const V9_TRANSPORT_THEME: VocabTheme = {
  slug: "v9-transport",
  code: "V9.2",
  title: "Le transport",
  section: "V9",
  words: [
    { word: "bus", image: "bus.jpg",     article: "le",  gender: "m", definition: "transport collectif urbain sur route" },
    { word: "mÃ©tro", image: "metro.jpg",   article: "le",  gender: "m", definition: "train souterrain en ville" },
    { word: "tram", image: "tram.jpg",    article: "le",  gender: "m", definition: "transport sur rails en surface" },
    { word: "train", image: "train.jpg",   article: "le",  gender: "m", definition: "transport ferroviaire longue distance" },
    { word: "voiture", image: "voiture.jpg", article: "la",  gender: "f", definition: "vÃ©hicule personnel Ã  moteur" },
    { word: "vÃ©lo", image: "/vocab/images/V3/velo.png",    article: "le",  gender: "m", definition: "vÃ©hicule Ã  deux roues sans moteur" },
    { word: "taxi", image: "taxi.jpg",    article: "le",  gender: "m", definition: "voiture avec chauffeur payant" },
    { word: "moto", image: "moto.jpg",    article: "la",  gender: "f", definition: "vÃ©hicule motorisÃ© Ã  deux roues" },
    { word: "avion", image: "avion.jpg",   article: "l'",  gender: "m", definition: "vÃ©hicule aÃ©rien pour voyager loin" },
    { word: "bateau", image: "bateau.jpg",  article: "le",  gender: "m", definition: "vÃ©hicule pour voyager sur l'eau" },
    { word: "camion", image: "camion.jpg",  article: "le",  gender: "m", definition: "grand vÃ©hicule pour transporter des marchandises" },
    { word: "scooter", image: "scooter.jpg", article: "le",  gender: "m", definition: "petit vÃ©hicule motorisÃ© Ã  deux roues" },
    { word: "arrÃªt", image: "arret.jpg",   article: "l'",  gender: "m", definition: "point d'arrÃªt pour le bus ou tram" },
    { word: "ticket", image: "ticket.jpg",  article: "le",  gender: "m", definition: "billet pour un trajet en transport commun" },
    { word: "billet", image: "billet.jpg",  article: "le",  gender: "m", definition: "titre de transport pour le train ou avion" },
  ],
  sentences: [
    { sentence: "Il prend le ___ chaque matin pour aller au travail.",   answer: "mÃ©tro" },
    { sentence: "Elle a achetÃ© un ___ de train pour Lyon.",              answer: "billet" },
    { sentence: "L'___ est en retard de dix minutes.",                   answer: "avion" },
    { sentence: "Ils attendent le ___ Ã  l'arrÃªt de bus.",                answer: "bus" },
    { sentence: "Il prÃ©fÃ¨re le ___ pour Ã©viter les embouteillages.",     answer: "vÃ©lo" },
  ],
};
