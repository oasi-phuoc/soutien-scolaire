import type { VocabTheme } from "../../vocabulary-data";

export const V2_SAISONS_THEME: VocabTheme = {
  slug: "v2-saisons",
  code: "V2.3",
  title: "Les saisons",
  section: "V2",
  words: [
    { word: "printemps", article: "le",  gender: "m", definition: "saison entre l'hiver et l'été" },
    { word: "été",       article: "l'",  gender: "m", definition: "saison la plus chaude de l'année" },
    { word: "automne",   article: "l'",  gender: "m", definition: "saison entre l'été et l'hiver" },
    { word: "hiver",     article: "l'",  gender: "m", definition: "saison la plus froide de l'année" },
    { word: "saison",    article: "la",  gender: "f", definition: "une des quatre périodes de l'année" },
    { word: "période",   article: "la",  gender: "f", definition: "espace de temps défini" },
    { word: "année",     article: "l'",  gender: "f", definition: "durée de 12 mois" },
    { word: "mois",      article: "le",  gender: "m", definition: "division de l'année en 12 parties" },
    { word: "semaine",   article: "la",  gender: "f", definition: "période de 7 jours" },
    { word: "jour",      article: "le",  gender: "m", definition: "période de 24 heures" },
    { word: "vacances",  article: "les", gender: "f", definition: "période de repos et de détente" },
    { word: "climat",    article: "le",  gender: "m", definition: "conditions météo habituelles d'une région" },
    { word: "beau temps",               definition: "temps ensoleillé sans pluie" },
    { word: "mauvais temps",            definition: "temps pluvieux ou orageux" },
    { word: "chaleur",   article: "la", gender: "f", definition: "sensation de température élevée" },
  ],
  sentences: [
    { sentence: "Les fleurs poussent au ___.",                   answer: "printemps" },
    { sentence: "Il fait très chaud en ___, je vais à la plage.", answer: "été" },
    { sentence: "En ___, les feuilles tombent des arbres.",       answer: "automne" },
    { sentence: "Pendant les ___, ma famille part en montagne.",  answer: "vacances" },
    { sentence: "Je préfère le ___ quand il y a du soleil.",      answer: "beau temps" },
  ],
};
