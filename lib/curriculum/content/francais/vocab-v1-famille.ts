import type { VocabTheme } from "../../vocabulary-data";

export const V1_FAMILLE_THEME: VocabTheme = {
  slug: "v1-famille",
  code: "V1.3",
  title: "La famille",
  section: "V1",
  words: [
    { word: "père",        article: "le",  gender: "m", definition: "le parent masculin" },
    { word: "mère",        article: "la",  gender: "f", definition: "le parent féminin" },
    { word: "fils",        article: "le",  gender: "m", definition: "l'enfant masculin" },
    { word: "fille",       article: "la",  gender: "f", definition: "l'enfant féminin" },
    { word: "frère",       article: "le",  gender: "m", definition: "le fils des mêmes parents" },
    { word: "sœur",        article: "la",  gender: "f", definition: "la fille des mêmes parents" },
    { word: "grand-père",  article: "le",  gender: "m", definition: "le père du père ou de la mère" },
    { word: "grand-mère",  article: "la",  gender: "f", definition: "la mère du père ou de la mère" },
    { word: "petit-fils",  article: "le",  gender: "m", definition: "le fils du fils ou de la fille" },
    { word: "petite-fille", article: "la", gender: "f", definition: "la fille du fils ou de la fille" },
    { word: "oncle",       article: "l'",  gender: "m", definition: "le frère du père ou de la mère" },
    { word: "tante",       article: "la",  gender: "f", definition: "la sœur du père ou de la mère" },
    { word: "cousin",      article: "le",  gender: "m", definition: "le fils de l'oncle ou de la tante" },
    { word: "cousine",     article: "la",  gender: "f", definition: "la fille de l'oncle ou de la tante" },
    { word: "neveu",       article: "le",  gender: "m", definition: "le fils du frère ou de la sœur" },
    { word: "nièce",       article: "la",  gender: "f", definition: "la fille du frère ou de la sœur" },
  ],
  sentences: [
    { sentence: "Mon ___ est le père de mon père.",               answer: "grand-père" },
    { sentence: "Ma ___ est la sœur du père ou de la mère.",      answer: "tante" },
    { sentence: "Le ___ de ma sœur s'appelle Thomas.",            answer: "fils" },
    { sentence: "Mon ___ joue avec moi depuis notre enfance.",    answer: "cousin" },
    { sentence: "La ___ de mon frère a cinq ans.",                answer: "nièce" },
  ],
};
