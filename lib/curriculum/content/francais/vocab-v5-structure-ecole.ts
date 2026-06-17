import type { VocabTheme } from "../../vocabulary-data";

export const V5_STRUCTURE_ECOLE_THEME: VocabTheme = {
  slug: "v5-structure-ecole",
  code: "V5.3",
  title: "La structure de l'école",
  section: "V5",
  words: [
    { word: "école",        image: "ecole.jpg",        article: "l'",  gender: "f", definition: "établissement où l'on apprend" },
    { word: "classe",       image: "classe.png",       article: "la",  gender: "f", definition: "groupe d'élèves ou salle de cours" },
    { word: "salle",        image: "salle.png",        article: "la",  gender: "f", definition: "espace dans l'école pour une activité" },
    { word: "couloir",      image: "couloir.png",      article: "le",  gender: "m", definition: "passage entre les salles" },
    { word: "secrétariat",  image: "secretariat.png",  article: "le",  gender: "m", definition: "bureau administratif de l'école" },
    { word: "bibliothèque", image: "bibliotheque.png", article: "la",  gender: "f", definition: "salle avec des livres à consulter" },
    { word: "gymnase",      image: "gymnase.png",      article: "le",  gender: "m", definition: "salle pour faire du sport" },
    { word: "cour",         image: "cour.png",         article: "la",  gender: "f", definition: "espace extérieur pour jouer pendant la pause" },
    { word: "direction",    image: "direction.png",    article: "la",  gender: "f", definition: "bureau du directeur ou de la directrice" },
    { word: "sonnerie",     image: "sonnerie.png",     article: "la",  gender: "f", definition: "signal sonore marquant le début ou la fin d'un cours" },
    { word: "cantine",      image: "cantine.png",      article: "la",  gender: "f", definition: "restaurant scolaire pour les repas" },
    { word: "infirmerie",   image: "infirmerie.png",   article: "l'",  gender: "f", definition: "salle de soins dans l'école" },
    { word: "ascenseur",    image: "ascenseur.png",    article: "l'",  gender: "m", definition: "cabine pour monter et descendre les étages" },
  ],
  sentences: [
    { sentence: "Les élèves jouent dans la ___ pendant la pause.",     answer: "cour" },
    { sentence: "Je mange à la ___ avec mes camarades.",               answer: "cantine" },
    { sentence: "La ___ sonne pour annoncer la fin du cours.",         answer: "sonnerie" },
    { sentence: "Je vais à la ___ emprunter des livres.",              answer: "bibliothèque" },
    { sentence: "Le directeur travaille dans son bureau à la ___.",    answer: "direction" },
  ],
};
