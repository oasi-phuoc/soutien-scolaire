import type { VocabTheme } from "../../vocabulary-data";

export const TEMPS_THEME: VocabTheme = {
  slug: "a1-voc-l21",
  code: "V.7",
  title: "Les expressions de temps",
  section: "A1",
  words: [
    { word: "jour",         article: "le",  gender: "m", definition: "période de 24 heures" },
    { word: "semaine",      article: "la",  gender: "f", definition: "période de 7 jours" },
    { word: "mois",         article: "le",  gender: "m", definition: "période d'environ 30 jours" },
    { word: "année",        article: "l'",  gender: "f", definition: "période de 365 jours" },
    { word: "matin",        article: "le",  gender: "m", definition: "partie du jour avant midi" },
    { word: "soir",         article: "le",  gender: "m", definition: "partie du jour après 18h" },
    { word: "week-end",     article: "le",  gender: "m", definition: "samedi et dimanche" },
    { word: "vacances",     article: "les", gender: "f", definition: "période de repos sans travail" },
    { word: "calendrier",   article: "le",  gender: "m", definition: "document qui montre les jours et mois" },
    { word: "saison",       article: "la",  gender: "f", definition: "printemps, été, automne ou hiver" },
    { word: "durée",        article: "la",  gender: "f", definition: "le temps que quelque chose prend" },
    { word: "moment",       article: "le",  gender: "m", definition: "court instant dans le temps" },
  ],
  sentences: [
    { sentence: "Je travaille du lundi au vendredi, et je me repose le ___.", answer: "week-end" },
    { sentence: "Nous sommes en été, c'est ma ___ préférée.", answer: "saison" },
    { sentence: "Le trajet en train a une ___ de 2 heures.", answer: "durée" },
    { sentence: "Je lis le ___ pour connaître les dates.", answer: "calendrier" },
    { sentence: "Les enfants ont deux ___ en été.", answer: "vacances" },
  ],
};
