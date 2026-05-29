import type { VocabTheme } from "../../vocabulary-data";

export const HEURE_THEME: VocabTheme = {
  slug: "a1-voc-heure",
  code: "V.4",
  title: "L'heure",
  section: "A1",
  words: [
    { word: "heure",       article: "l'",  gender: "f", definition: "unité de temps (60 minutes)" },
    { word: "minute",      article: "la",  gender: "f", definition: "unité de temps (60 secondes)" },
    { word: "seconde",     article: "la",  gender: "f", definition: "la plus petite unité de temps" },
    { word: "midi",        article: "le",  gender: "m", definition: "12h00, milieu de la journée" },
    { word: "minuit",      article: "le",  gender: "m", definition: "0h00, milieu de la nuit" },
    { word: "matin",       article: "le",  gender: "m", definition: "la partie du jour avant midi" },
    { word: "après-midi",  article: "l'",  gender: "m", definition: "la partie du jour après midi" },
    { word: "soir",        article: "le",  gender: "m", definition: "la partie du jour après le coucher du soleil" },
    { word: "nuit",        article: "la",  gender: "f", definition: "la période sombre de la journée" },
    { word: "montre",      article: "la",  gender: "f", definition: "instrument porté au poignet pour lire l'heure" },
    { word: "réveil",      article: "le",  gender: "m", definition: "horloge qui sonne le matin" },
    { word: "retard",      article: "le",  gender: "m", definition: "arriver après l'heure prévue" },
  ],
  sentences: [
    { sentence: "Le cours commence à ___ (12h00, milieu de la journée).", answer: "midi" },
    { sentence: "Je me lève tôt le ___.", answer: "matin" },
    { sentence: "Il est une ___ et demie.", answer: "heure" },
    { sentence: "Mon ___ sonne à 7h00 chaque jour.", answer: "réveil" },
    { sentence: "Le film commence à 20h, ne sois pas en ___.", answer: "retard" },
  ],
};
