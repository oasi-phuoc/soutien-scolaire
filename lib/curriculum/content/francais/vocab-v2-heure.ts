import type { VocabTheme } from "../../vocabulary-data";

export const V2_HEURE_THEME: VocabTheme = {
  slug: "v2-heure",
  code: "V2.2",
  title: "L'heure",
  section: "V2",
  words: [
    { word: "heure", image: "heure.jpg",      article: "l'",  gender: "f", definition: "unité de temps de 60 minutes" },
    { word: "minute", image: "minute.jpg",     article: "la",  gender: "f", definition: "unité de temps de 60 secondes" },
    { word: "seconde", image: "seconde.jpg",    article: "la",  gender: "f", definition: "unité de temps la plus courte" },
    { word: "matin", image: "matin.jpg",      article: "le",  gender: "m", definition: "début de la journée" },
    { word: "midi", image: "midi.jpg",       article: "le",  gender: "m", definition: "12 heures, milieu de la journée" },
    { word: "après-midi", image: "après-midi.jpg", article: "l'",  gender: "m", definition: "partie de la journée après midi" },
    { word: "soir", image: "soir.jpg",       article: "le",  gender: "m", definition: "fin de la journée avant la nuit" },
    { word: "nuit", image: "nuit.jpg",       article: "la",  gender: "f", definition: "période d'obscurité" },
    { word: "minuit", image: "minuit.jpg",     article: "le",  gender: "m", definition: "24 heures, milieu de la nuit" },
    { word: "horloge", image: "horloge.jpg",    article: "l'",  gender: "f", definition: "grande pendule fixée au mur" },
    { word: "montre", image: "montre.jpg",     article: "la",  gender: "f", definition: "instrument porté au poignet pour lire l'heure" },
    { word: "réveil", image: "réveil.jpg",     article: "le",  gender: "m", definition: "horloge qui sonne à une heure fixée" },
    { word: "en retard", image: "en-retard.jpg",  definition: "arrivée après l'heure prévue" },
    { word: "en avance", image: "en-avance.jpg",  definition: "arrivée avant l'heure prévue" },
    { word: "tôt", image: "tôt.jpg",        definition: "de bonne heure, avant le moment habituel" },
    { word: "tard", image: "tard.jpg",       definition: "après l'heure habituelle ou prévue" },
  ],
  theory: [
    {
      type: "section",
      title: "Comment lire l'heure",
      items: [
        "Pour demander l'heure : Quelle heure est-il ? / Il est quelle heure ?",
        "Pour répondre : Il est + heure.",
      ],
    },
    {
      type: "table",
      headers: ["Heure officielle", "Heure informelle", "Expression clé"],
      rows: [
        ["8h00",  "huit heures (du matin)",      "pile"],
        ["8h15",  "huit heures et quart",         "et quart"],
        ["8h30",  "huit heures et demie",         "et demie"],
        ["8h45",  "neuf heures moins le quart",   "moins le quart"],
        ["12h00", "midi",                          "—"],
        ["0h00",  "minuit",                        "—"],
      ],
    },
    {
      type: "clocks",
      cols: 4,
      items: [
        { h: 8,  m: 0,  label: "8h00 — pile" },
        { h: 8,  m: 15, label: "8h15 — et quart" },
        { h: 8,  m: 30, label: "8h30 — et demie" },
        { h: 8,  m: 45, label: "8h45 — moins le quart" },
      ],
    },
    {
      type: "note",
      text: "Heure officielle (formelle) : 14h30 = quatorze heures trente. Heure informelle : 14h30 = deux heures et demie de l'après-midi.",
    },
  ],
  sentences: [
    { sentence: "Je me lève à sept heures du ___.",                     answer: "matin" },
    { sentence: "Il mange toujours à ___, quand les cloches sonnent.",   answer: "midi" },
    { sentence: "Mon ___ sonne à 6 h 30 chaque jour.",                  answer: "réveil" },
    { sentence: "Elle arrive souvent ___ au bureau.",                    answer: "en retard" },
    { sentence: "Il est ___, je dois rentrer à la maison.",              answer: "tard" },
  ],
};
