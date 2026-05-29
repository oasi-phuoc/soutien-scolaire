import type { VocabTheme } from "../../vocabulary-data";

export const V3_ACTIVITES_SPORTIVES_THEME: VocabTheme = {
  slug: "v3-activites-sportives",
  code: "V3.2",
  title: "Les activités sportives",
  section: "V3",
  words: [
    { word: "jouer",      definition: "participer à un jeu ou un sport" },
    { word: "courir",     definition: "se déplacer rapidement à pied" },
    { word: "marcher",    definition: "se déplacer à pied à allure normale" },
    { word: "nager",      definition: "se déplacer dans l'eau" },
    { word: "sauter",     definition: "s'élever dans les airs d'un bond" },
    { word: "frapper",    definition: "donner un coup sur quelque chose" },
    { word: "lancer",     definition: "projeter quelque chose avec la main" },
    { word: "pratiquer",  definition: "exercer régulièrement une activité" },
    { word: "entraîner",  definition: "préparer quelqu'un à une compétition" },
    { word: "participer", definition: "prendre part à une activité ou compétition" },
    { word: "gagner",     definition: "remporter une victoire ou un prix" },
    { word: "perdre",     definition: "ne pas remporter une compétition" },
    { word: "s'échauffer", definition: "faire des exercices légers avant un effort" },
    { word: "sprinter",   definition: "courir à très grande vitesse sur une courte distance" },
    { word: "dribbler",   definition: "avancer avec le ballon en le faisant rebondir" },
  ],
  sentences: [
    { sentence: "Les joueurs doivent ___ avant de commencer le match.",    answer: "s'échauffer" },
    { sentence: "Il sait ___ très vite dans la piscine.",                  answer: "nager" },
    { sentence: "L'équipe veut ___ le championnat cette année.",           answer: "gagner" },
    { sentence: "Tu aimes ___ au football le week-end ?",                  answer: "jouer" },
    { sentence: "Il peut ___ le ballon très loin sur le terrain.",         answer: "lancer" },
  ],
};
