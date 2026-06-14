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
    { word: "saison", image: "saison.png",        article: "la",  gender: "f", definition: "une des quatre périodes de l'année" },
    { word: "climat", image: "climat.png",        article: "le",  gender: "m", definition: "conditions météo habituelles d'une région" },
    { word: "météo", image: "meteo.png",         article: "la",  gender: "f", definition: "prévision des conditions atmosphériques" },
    { word: "température", image: "temperature.png",   article: "la",  gender: "f", definition: "mesure du chaud ou du froid en degrés" },
    { word: "se réchauffer", image: "se-rechauffer.png",                              definition: "devenir plus chaud, augmenter en température" },
    { word: "se rafraîchir", image: "se-rafraichir.png",                              definition: "devenir plus frais, baisser en température" },
  ],
  sentences: [
    { sentence: "Les fleurs poussent au ___.",                    answer: "printemps" },
    { sentence: "Il fait très chaud en ___, je vais à la plage.", answer: "été" },
    { sentence: "En ___, les feuilles tombent des arbres.",        answer: "automne" },
    { sentence: "On écoute la ___ pour savoir s'il va pleuvoir.", answer: "météo" },
  ],
};
