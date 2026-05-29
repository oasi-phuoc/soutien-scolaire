import type { VocabTheme } from "../../vocabulary-data";

export const LOISIRS_THEME: VocabTheme = {
  slug: "a1-voc-l18",
  code: "V.12",
  title: "Les loisirs et le sport",
  section: "A1",
  words: [
    { word: "natation",   article: "la",  gender: "f", definition: "sport aquatique pratiqué en piscine" },
    { word: "tennis",     article: "le",  gender: "m", definition: "sport avec une raquette et une balle" },
    { word: "randonnée",  article: "la",  gender: "f", definition: "marche longue en pleine nature" },
    { word: "ski",        article: "le",  gender: "m", definition: "sport de glisse sur la neige" },
    { word: "vélo",       article: "le",  gender: "m", definition: "sport pratiqué à bicyclette" },
    { word: "escalade",   article: "l'",  gender: "f", definition: "sport qui consiste à grimper des rochers" },
    { word: "surf",       article: "le",  gender: "m", definition: "sport de glisse sur les vagues" },
    { word: "judo",       article: "le",  gender: "m", definition: "art martial japonais" },
    { word: "équipe",     article: "l'",  gender: "f", definition: "groupe de joueurs dans un sport collectif" },
    { word: "match",      article: "le",  gender: "m", definition: "rencontre sportive entre deux équipes" },
    { word: "médaille",   article: "la",  gender: "f", definition: "récompense sportive en métal" },
    { word: "victoire",   article: "la",  gender: "f", definition: "résultat positif d'une compétition" },
  ],
  sentences: [
    { sentence: "Elle fait de la ___ trois fois par semaine à la piscine.", answer: "natation" },
    { sentence: "Ils ont gagné le ___ hier soir, 3-0.", answer: "match" },
    { sentence: "Il pratique le ___ sur des parois rocheuses.", answer: "escalade" },
    { sentence: "Notre ___ a remporté une ___ d'or aux jeux olympiques.", answer: "équipe" },
    { sentence: "Il descend les pentes en ___ pendant l'hiver.", answer: "ski" },
  ],
};
