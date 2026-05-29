import type { VocabTheme } from "../../vocabulary-data";

export const V2_HEURE_THEME: VocabTheme = {
  slug: "v2-heure",
  code: "V2.2",
  title: "L'heure",
  section: "V2",
  words: [
    { word: "heure",      article: "l'",  gender: "f", definition: "unité de temps de 60 minutes" },
    { word: "minute",     article: "la",  gender: "f", definition: "unité de temps de 60 secondes" },
    { word: "seconde",    article: "la",  gender: "f", definition: "unité de temps la plus courte" },
    { word: "midi",       article: "le",  gender: "m", definition: "12 heures, milieu de la journée" },
    { word: "minuit",     article: "le",  gender: "m", definition: "24 heures, milieu de la nuit" },
    { word: "matin",      article: "le",  gender: "m", definition: "début de la journée" },
    { word: "après-midi", article: "l'",  gender: "m", definition: "partie de la journée après midi" },
    { word: "soir",       article: "le",  gender: "m", definition: "fin de la journée avant la nuit" },
    { word: "nuit",       article: "la",  gender: "f", definition: "période d'obscurité" },
    { word: "montre",     article: "la",  gender: "f", definition: "instrument porté au poignet pour lire l'heure" },
    { word: "réveil",     article: "le",  gender: "m", definition: "horloge qui sonne à une heure fixée" },
    { word: "retard",     article: "le",  gender: "m", definition: "arrivée après l'heure prévue" },
    { word: "horloge",    article: "l'",  gender: "f", definition: "grande pendule fixée au mur" },
    { word: "tôt",        definition: "de bonne heure, avant le moment habituel" },
    { word: "tard",       definition: "après l'heure habituelle ou prévue" },
  ],
  sentences: [
    { sentence: "Je me lève à sept heures du ___.",               answer: "matin" },
    { sentence: "Il mange toujours à ___, quand les cloches sonnent.", answer: "midi" },
    { sentence: "Mon ___ sonne à 6 h 30 chaque jour.",            answer: "réveil" },
    { sentence: "Elle arrive souvent en ___ au bureau.",           answer: "retard" },
    { sentence: "Il est ___, je dois rentrer à la maison.",        answer: "tard" },
  ],
};
