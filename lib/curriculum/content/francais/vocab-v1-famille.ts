import type { VocabTheme } from "../../vocabulary-data";

export const V1_FAMILLE_THEME: VocabTheme = {
  slug: "v1-famille",
  code: "V1.3",
  title: "La famille",
  section: "V1",
  words: [
    { word: "père",       article: "le",  gender: "m", definition: "le parent masculin" },
    { word: "mère",       article: "la",  gender: "f", definition: "le parent féminin" },
    { word: "frère",      article: "le",  gender: "m", definition: "le fils des mêmes parents" },
    { word: "sœur",       article: "la",  gender: "f", definition: "la fille des mêmes parents" },
    { word: "grand-père", article: "le",  gender: "m", definition: "le père du père ou de la mère" },
    { word: "grand-mère", article: "la",  gender: "f", definition: "la mère du père ou de la mère" },
    { word: "fils",       article: "le",  gender: "m", definition: "l'enfant masculin" },
    { word: "fille",      article: "la",  gender: "f", definition: "l'enfant féminin" },
    { word: "oncle",      article: "l'",  gender: "m", definition: "le frère du père ou de la mère" },
    { word: "tante",      article: "la",  gender: "f", definition: "la sœur du père ou de la mère" },
    { word: "cousin",     article: "le",  gender: "m", definition: "le fils de l'oncle ou de la tante" },
    { word: "cousine",    article: "la",  gender: "f", definition: "la fille de l'oncle ou de la tante" },
    { word: "mari",       article: "le",  gender: "m", definition: "l'époux, le conjoint masculin" },
    { word: "femme",      article: "la",  gender: "f", definition: "l'épouse, la conjointe féminine" },
    { word: "bébé",       article: "le",  gender: "m", definition: "très jeune enfant" },
  ],
  sentences: [
    { sentence: "Mon ___ est le père de mon père.",               answer: "grand-père" },
    { sentence: "Ma ___ est la sœur du père ou de la mère.",      answer: "tante" },
    { sentence: "Mon ___ et ma femme ont trois enfants.",          answer: "mari" },
    { sentence: "Le ___ de ma sœur s'appelle Thomas.",            answer: "fils" },
    { sentence: "Mon ___ joue avec moi depuis notre enfance.",    answer: "cousin" },
  ],
};
