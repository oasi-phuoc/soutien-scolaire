import type { VocabTheme } from "../../vocabulary-data";

export const V2_JOURS_MOIS_DATES_THEME: VocabTheme = {
  slug: "v2-jours-mois-dates",
  code: "V2.1",
  title: "Jours, Mois et Dates",
  section: "V2",
  words: [
    { word: "lundi",    definition: "premier jour de la semaine" },
    { word: "mardi",    definition: "deuxième jour de la semaine" },
    { word: "mercredi", definition: "troisième jour de la semaine" },
    { word: "jeudi",    definition: "quatrième jour de la semaine" },
    { word: "vendredi", definition: "cinquième jour de la semaine" },
    { word: "samedi",   definition: "sixième jour de la semaine" },
    { word: "dimanche", definition: "septième jour de la semaine" },
    { word: "janvier",  definition: "premier mois de l'année" },
    { word: "février",  definition: "deuxième mois de l'année" },
    { word: "mars",     definition: "troisième mois de l'année" },
    { word: "avril",    definition: "quatrième mois de l'année" },
    { word: "mai",      definition: "cinquième mois de l'année" },
    { word: "juin",     definition: "sixième mois de l'année" },
    { word: "juillet",  definition: "septième mois de l'année" },
    { word: "août",     definition: "huitième mois de l'année" },
  ],
  sentences: [
    { sentence: "Nous avons cours de sport le ___.",               answer: "mercredi" },
    { sentence: "Mon anniversaire est en ___.",                    answer: "juin" },
    { sentence: "Le ___ est le dernier jour du week-end.",         answer: "dimanche" },
    { sentence: "Les vacances d'été commencent en ___.",           answer: "juillet" },
    { sentence: "Nous commençons la semaine le ___.",              answer: "lundi" },
  ],
};
