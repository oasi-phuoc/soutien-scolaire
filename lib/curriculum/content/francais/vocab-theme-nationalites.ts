import type { VocabTheme } from "../../vocabulary-data";

export const NATIONALITES_THEME: VocabTheme = {
  slug: "a0-voc-nationalites",
  code: "V.0",
  title: "Les nationalités",
  section: "A0",
  words: [
    { word: "France",       article: "la",  gender: "f", image: "france.jpg",       definition: "pays d'Europe occidentale" },
    { word: "Allemagne",    article: "l'",  gender: "f", image: "allemagne.jpg",    definition: "pays d'Europe centrale" },
    { word: "Italie",       article: "l'",  gender: "f", image: "italie.jpg",       definition: "pays en forme de botte" },
    { word: "Espagne",      article: "l'",  gender: "f", image: "espagne.jpg",      definition: "pays de la péninsule ibérique" },
    { word: "Maroc",        article: "le",  gender: "m",                                          definition: "pays d'Afrique du Nord" },
    { word: "Chine",        article: "la",  gender: "f", image: "chine.jpg",        definition: "grand pays d'Asie" },
    { word: "Japon",        article: "le",  gender: "m", image: "japon.jpg",        definition: "pays insulaire d'Asie" },
    { word: "Brésil",       article: "le",  gender: "m",                                          definition: "grand pays d'Amérique du Sud" },
    { word: "Vietnam",      article: "le",  gender: "m", image: "vietnam.jpg",      definition: "pays d'Asie du Sud-Est" },
    { word: "Suisse",       article: "la",  gender: "f", image: "suisse.jpg",       definition: "pays au cœur de l'Europe" },
    { word: "Belgique",     article: "la",  gender: "f", image: "belgique.jpg",     definition: "pays voisin de la France" },
    { word: "Portugal",     article: "le",  gender: "m", image: "portugal.jpg",     definition: "pays de la péninsule ibérique" },
    { word: "Afghanistan",  article: "l'",  gender: "m", image: "afghanistan.jpg",  definition: "pays d'Asie centrale" },
    { word: "Autriche",     article: "l'",  gender: "f", image: "autriche.jpg",     definition: "pays d'Europe centrale" },
    { word: "Érythrée",     article: "l'",  gender: "f", image: "erythree.jpg",     definition: "pays d'Afrique de l'Est" },
    { word: "Turquie",      article: "la",  gender: "f", image: "turquie.jpg",      definition: "pays entre Europe et Asie" },
    { word: "Ukraine",      article: "l'",  gender: "f", image: "ukraine.jpg",      definition: "pays d'Europe de l'Est" },
  ],
  sentences: [
    { sentence: "Je viens de ___ (féminin, Europe occidentale).", answer: "France" },
    { sentence: "Elle est née au ___, un pays d'Afrique du Nord.", answer: "Maroc" },
    { sentence: "Il habite au ___, en Asie du Sud-Est.", answer: "Vietnam" },
    { sentence: "Nous venons du ___, le plus grand pays d'Amérique du Sud.", answer: "Brésil" },
    { sentence: "La capitale de la ___ est Berne.", answer: "Suisse" },
  ],
};
