import type { VocabTheme } from "../../vocabulary-data";

export const NATIONALITES_A1_THEME: VocabTheme = {
  slug: "a1-voc-l02",
  code: "V.1b",
  title: "Les nationalités A1",
  section: "A1",
  words: [
    { word: "France",       article: "la",  gender: "f", image: "/vocab/images/V1/france.jpg",    definition: "pays d'Europe occidentale" },
    { word: "Angleterre",   article: "l'",  gender: "f",                                       definition: "pays du Royaume-Uni" },
    { word: "Chine",        article: "la",  gender: "f", image: "/vocab/images/V1/chine.jpg",     definition: "grand pays d'Asie" },
    { word: "États-Unis",   article: "les", gender: "m",                                       definition: "grand pays d'Amérique du Nord" },
    { word: "Italie",       article: "l'",  gender: "f", image: "/vocab/images/V1/italie.jpg",    definition: "pays de la botte" },
    { word: "Brésil",       article: "le",  gender: "m",                                       definition: "plus grand pays d'Amérique du Sud" },
    { word: "Corée",        article: "la",  gender: "f",                                       definition: "pays d'Asie de l'Est" },
    { word: "Espagne",      article: "l'",  gender: "f", image: "/vocab/images/V1/espagne.jpg",   definition: "pays ibérique" },
    { word: "Allemagne",    article: "l'",  gender: "f", image: "/vocab/images/V1/allemagne.jpg", definition: "pays d'Europe centrale" },
    { word: "Suisse",       article: "la",  gender: "f", image: "/vocab/images/V1/suisse.jpg",    definition: "pays alpin neutre" },
    { word: "Belgique",     article: "la",  gender: "f", image: "/vocab/images/V1/belgique.jpg",  definition: "pays voisin de la France" },
    { word: "Russie",       article: "la",  gender: "f",                                       definition: "plus grand pays du monde" },
  ],
  sentences: [
    { sentence: "Il vient de ___, le plus grand pays du monde.", answer: "Russie" },
    { sentence: "Elle est née en ___, un pays asiatique.", answer: "Corée" },
    { sentence: "Nous habitons en ___, pays alpin neutre.", answer: "Suisse" },
    { sentence: "Il est américain, il vient des ___.", answer: "États-Unis" },
    { sentence: "La capitale de la ___ est Madrid.", answer: "Espagne" },
  ],
};
