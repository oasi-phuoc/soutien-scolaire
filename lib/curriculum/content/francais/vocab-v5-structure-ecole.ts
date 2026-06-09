import type { VocabTheme } from "../../vocabulary-data";

export const V5_STRUCTURE_ECOLE_THEME: VocabTheme = {
  slug: "v5-structure-ecole",
  code: "V5.3",
  title: "La structure de l'école",
  section: "V5",
  words: [
    { word: "école", image: "ecole.jpg",          article: "l'",  gender: "f", definition: "établissement où l'on apprend" },
    { word: "classe", image: "classe.jpg",         article: "la",  gender: "f", definition: "groupe d'élèves ou salle de cours" },
    { word: "salle", image: "salle.jpg",          article: "la",  gender: "f", definition: "espace dans l'école pour une activité" },
    { word: "couloir", image: "couloir.jpg",        article: "le",  gender: "m", definition: "passage entre les salles" },
    { word: "secrétariat", image: "secretariat.jpg",    article: "le",  gender: "m", definition: "bureau administratif de l'école" },
    { word: "bibliothèque", image: "bibliotheque.jpg",   article: "la",  gender: "f", definition: "salle avec des livres à consulter" },
    { word: "cafétéria", image: "cafeteria.jpg",      article: "la",  gender: "f", definition: "espace pour manger à l'école" },
    { word: "gymnase", image: "gymnase.jpg",        article: "le",  gender: "m", definition: "salle pour faire du sport" },
    { word: "cour", image: "cour.jpg",           article: "la",  gender: "f", definition: "espace extérieur pour la récréation" },
    { word: "direction", image: "direction.jpg",      article: "la",  gender: "f", definition: "bureau du directeur ou de la directrice" },
    { word: "récréation", image: "recreation.jpg",     article: "la",  gender: "f", definition: "pause entre les cours" },
    { word: "sonnerie", image: "sonnerie.jpg",       article: "la",  gender: "f", definition: "signal sonore marquant le début ou la fin d'un cours" },
    { word: "emploi du temps", image: "emploi-du-temps.jpg",article: "l'",  gender: "m", definition: "planning hebdomadaire des cours" },
    { word: "cantine", image: "cantine.jpg",        article: "la",  gender: "f", definition: "restaurant scolaire pour les repas" },
    { word: "bulletin", image: "bulletin.jpg",       article: "le",  gender: "m", definition: "document avec les notes de l'élève" },
  ],
  sentences: [
    { sentence: "Les élèves jouent dans la ___ pendant la récréation.",  answer: "cour" },
    { sentence: "Je mange à la ___ avec mes camarades.",                 answer: "cantine" },
    { sentence: "La ___ sonne pour annoncer la fin du cours.",           answer: "sonnerie" },
    { sentence: "Mon ___ indique que j'ai maths le lundi matin.",        answer: "emploi du temps" },
    { sentence: "Les parents reçoivent le ___ scolaire chaque trimestre.", answer: "bulletin" },
  ],
};
