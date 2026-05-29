import type { VocabTheme } from "../../vocabulary-data";

export const PRESENTER_THEME: VocabTheme = {
  slug: "a0-se-presenter",
  code: "V.1",
  title: "Se présenter",
  section: "A0",
  words: [
    { word: "prénom",       article: "le",  gender: "m", definition: "le premier nom d'une personne" },
    { word: "nom",          article: "le",  gender: "m", definition: "le nom de famille" },
    { word: "âge",          article: "l'",  gender: "m", definition: "le nombre d'années" },
    { word: "nationalité",  article: "la",  gender: "f", definition: "le pays d'origine" },
    { word: "adresse",      article: "l'",  gender: "f", definition: "lieu où on habite" },
    { word: "profession",   article: "la",  gender: "f", definition: "le métier qu'on exerce" },
    { word: "langue",       article: "la",  gender: "f", definition: "ce qu'on parle" },
    { word: "famille",      article: "la",  gender: "f", definition: "les personnes proches" },
    { word: "pays",         article: "le",  gender: "m", definition: "la nation d'origine" },
    { word: "ville",        article: "la",  gender: "f", definition: "lieu de résidence" },
    { word: "téléphone",    article: "le",  gender: "m", definition: "numéro pour appeler" },
    { word: "courriel",     article: "le",  gender: "m", definition: "adresse électronique" },
  ],
  sentences: [
    { sentence: "Mon ___ est Phuoc.", answer: "prénom" },
    { sentence: "Je parle la ___ française.", answer: "langue" },
    { sentence: "Ma ___ est vietnamienne.", answer: "nationalité" },
    { sentence: "Mon ___ est 07 12 34 56 78.", answer: "téléphone" },
    { sentence: "Mon ___ est enseignant.", answer: "profession" },
  ],
};
