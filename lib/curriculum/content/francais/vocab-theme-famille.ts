import type { VocabTheme } from "../../vocabulary-data";

export const FAMILLE_THEME: VocabTheme = {
  slug: "a1-voc-famille",
  code: "V.A1.F",
  title: "La famille",
  section: "A1",
  words: [
    { word: "père",       article: "le",  gender: "m", definition: "le parent masculin de la famille" },
    { word: "mère",       article: "la",  gender: "f", definition: "le parent féminin de la famille" },
    { word: "frère",      article: "le",  gender: "m", definition: "le fils des mêmes parents" },
    { word: "sœur",       article: "la",  gender: "f", definition: "la fille des mêmes parents" },
    { word: "grand-père", article: "le",  gender: "m", definition: "le père du père ou de la mère" },
    { word: "grand-mère", article: "la",  gender: "f", definition: "la mère du père ou de la mère" },
    { word: "fils",       article: "le",  gender: "m", definition: "l'enfant masculin" },
    { word: "fille",      article: "la",  gender: "f", definition: "l'enfant féminin" },
    { word: "oncle",      article: "le",  gender: "m", definition: "le frère du père ou de la mère" },
    { word: "tante",      article: "la",  gender: "f", definition: "la sœur du père ou de la mère" },
    { word: "cousin",     article: "le",  gender: "m", definition: "le fils de l'oncle ou de la tante" },
    { word: "cousine",    article: "la",  gender: "f", definition: "la fille de l'oncle ou de la tante" },
  ],
  sentences: [
    { sentence: "Mon ___ est marié avec ma mère.",              answer: "père" },
    { sentence: "Ma ___ est mariée avec mon père.",             answer: "mère" },
    { sentence: "Mon ___ est le fils de mes parents.",          answer: "frère" },
    { sentence: "Ma ___ est la fille de mes parents.",          answer: "sœur" },
    { sentence: "Mon ___ est le père de ma mère.",              answer: "grand-père" },
  ],
};
