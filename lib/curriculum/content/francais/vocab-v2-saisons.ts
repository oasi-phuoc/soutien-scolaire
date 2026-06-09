import type { VocabTheme } from "../../vocabulary-data";

export const V2_SAISONS_THEME: VocabTheme = {
  slug: "v2-saisons",
  code: "V2.3",
  title: "Les saisons",
  section: "V2",
  words: [
    { word: "printemps", image: "printemps.jpg",     article: "le",  gender: "m", definition: "saison entre l'hiver et l'été" },
    { word: "été", image: "ete.jpg",           article: "l'",  gender: "m", definition: "saison la plus chaude de l'année" },
    { word: "automne", image: "automne.jpg",       article: "l'",  gender: "m", definition: "saison entre l'été et l'hiver" },
    { word: "hiver", image: "hiver.jpg",         article: "l'",  gender: "m", definition: "saison la plus froide de l'année" },
    { word: "saison", image: "saison.jpg",        article: "la",  gender: "f", definition: "une des quatre périodes de l'année" },
    { word: "période", image: "periode.jpg",       article: "la",  gender: "f", definition: "espace de temps défini" },
    { word: "vacances", image: "vacances.jpg",      article: "les", gender: "f", definition: "période de repos et de détente" },
    { word: "climat", image: "climat.jpg",        article: "le",  gender: "m", definition: "conditions météo habituelles d'une région" },
    { word: "météo", image: "meteo.jpg",         article: "la",  gender: "f", definition: "prévision des conditions atmosphériques" },
    { word: "température", image: "temperature.jpg",   article: "la",  gender: "f", definition: "mesure du chaud ou du froid en degrés" },
    { word: "se réchauffer", image: "se-rechauffer.jpg",                              definition: "devenir plus chaud, augmenter en température" },
    { word: "se rafraîchir", image: "se-rafraichir.jpg",                              definition: "devenir plus frais, baisser en température" },
    { word: "froid", image: "froid.jpg",         article: "le",  gender: "m", definition: "sensation de basse température" },
  ],
  sentences: [
    { sentence: "Les fleurs poussent au ___.",                    answer: "printemps" },
    { sentence: "Il fait très chaud en ___, je vais à la plage.", answer: "été" },
    { sentence: "En ___, les feuilles tombent des arbres.",        answer: "automne" },
    { sentence: "Pendant les ___, ma famille part en montagne.",   answer: "vacances" },
    { sentence: "On écoute la ___ pour savoir s'il va pleuvoir.", answer: "météo" },
  ],
};
