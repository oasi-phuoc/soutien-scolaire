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
  theory: [
    {
      type: "table" as const,
      headers: ["Heure officielle", "Heure informelle", "Expression clé"],
      rows: [
        ["8h00",  "huit heures (du matin)",       "pile"],
        ["8h15",  "huit heures et quart",          "et quart"],
        ["8h30",  "huit heures et demie",          "et demie"],
        ["8h45",  "neuf heures moins le quart",    "moins le quart"],
        ["12h00", "midi",                          "—"],
        ["0h00",  "minuit",                        "—"],
      ],
    },
    {
      type: "clocks" as const,
      cols: 4,
      items: [
        { h: 8, m: 0,  label: "8h00 — pile" },
        { h: 8, m: 15, label: "8h15 — et quart" },
        { h: 8, m: 30, label: "8h30 — et demie" },
        { h: 8, m: 45, label: "8h45 — moins le quart" },
      ],
    },
    {
      type: "section" as const,
      title: "Poser et répondre à la question",
      items: [
        "Quelle heure est-il ? / Il est quelle heure ?",
        "Il est huit heures pile.",
        "Il est midi / minuit.",
        "Il est huit heures et quart.",
        "Il est huit heures et demie.",
        "Il est neuf heures moins le quart.",
      ],
    },
    {
      type: "note" as const,
      text: "Heure officielle (formelle) : 14h30 = quatorze heures trente. Heure informelle : 14h30 = deux heures et demie (de l'après-midi).",
    },
  ],
  sentences: [
    { sentence: "Le cours commence à ___ (12h00, milieu de la journée).", answer: "midi" },
    { sentence: "Je me lève tôt le ___.", answer: "matin" },
    { sentence: "Il est une ___ et demie.", answer: "heure" },
    { sentence: "Mon ___ sonne à 7h00 chaque jour.", answer: "réveil" },
    { sentence: "Le film commence à 20h, ne sois pas en ___.", answer: "retard" },
  ],
};
