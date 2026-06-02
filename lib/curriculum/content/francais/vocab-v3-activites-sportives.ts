import type { VocabTheme } from "../../vocabulary-data";

export const V3_ACTIVITES_SPORTIVES_THEME: VocabTheme = {
  slug: "v3-activites-sportives",
  code: "V3.2",
  title: "Les activités sportives",
  section: "V3",
  words: [
    { word: "jouer", image: "jouer.jpg",      definition: "participer à un jeu ou un sport" },
    { word: "courir", image: "courir.jpg",     definition: "se déplacer rapidement à pied" },
    { word: "marcher", image: "marcher.jpg",    definition: "se déplacer à pied à allure normale" },
    { word: "nager", image: "nager.jpg",      definition: "se déplacer dans l'eau" },
    { word: "sauter", image: "sauter.jpg",     definition: "s'élever dans les airs d'un bond" },
    { word: "frapper", image: "frapper.jpg",    definition: "donner un coup sur quelque chose" },
    { word: "lancer", image: "lancer.jpg",     definition: "projeter quelque chose avec la main" },
    { word: "pratiquer", image: "pratiquer.jpg",  definition: "exercer régulièrement une activité" },
    { word: "entraîner", image: "entraîner.jpg",  definition: "préparer quelqu'un à une compétition" },
    { word: "participer", image: "participer.jpg", definition: "prendre part à une activité ou compétition" },
    { word: "gagner", image: "gagner.jpg",     definition: "remporter une victoire ou un prix" },
    { word: "perdre", image: "perdre.jpg",     definition: "ne pas remporter une compétition" },
    { word: "s'échauffer", image: "s-échauffer.jpg", definition: "faire des exercices légers avant un effort" },
    { word: "sprinter", image: "sprinter.jpg",   definition: "courir à très grande vitesse sur une courte distance" },
    { word: "dribbler", image: "dribbler.jpg",   definition: "avancer avec le ballon en le faisant rebondir" },
  ],
  sentences: [
    { sentence: "Les joueurs doivent ___ avant de commencer le match.",    answer: "s'échauffer" },
    { sentence: "Il sait ___ très vite dans la piscine.",                  answer: "nager" },
    { sentence: "L'équipe veut ___ le championnat cette année.",           answer: "gagner" },
    { sentence: "Tu aimes ___ au football le week-end ?",                  answer: "jouer" },
    { sentence: "Il peut ___ le ballon très loin sur le terrain.",         answer: "lancer" },
  ],
};
