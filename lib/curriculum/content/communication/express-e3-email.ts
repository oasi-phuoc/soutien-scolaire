import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E3 — École, quotidien, travail.
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E3.1 — Aller à l'école
   ════════════════════════════════════════════════════════════════════════════ */

const E3_1_CE_EMAIL_TEXT_1 = `De : École du Lac
Objet : Rentrée scolaire

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Rentrée scolaire.
Date : lundi 26 août. Heure : 8 h.
Lieu : cour de l'école.
À apporter : cahiers et stylos. Contact : M. Dupont.

Cordialement,
École du Lac`;

const E3_1_CE_EMAIL_POOL_1 = buildExpressPool("e3-1-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Rentrée scolaire", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Rentrée",
    vfQ: "C'est Rentrée scolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Lundi 26 août", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "lundi",
    vfQ: "Date : lundi 26 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["8 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "8",
    vfQ: "Heure : 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Cour de l'école", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cour",
    vfQ: "Lieu : cour de l'école.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Cahiers et stylos", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "cahiers",
    vfQ: "Apporter : cahiers et stylos.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["M. Dupont", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Dupont",
    vfQ: "Contact : M. Dupont.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_2 = `De : Faculté de médecine
Objet : Horaires de cours

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Horaires de cours.
Date : septembre. Heure : 8 h – 17 h.
Lieu : campus principal.
À apporter : carte étudiant. Contact : Dr. Keller.

Cordialement,
Faculté de médecine`;

const E3_1_CE_EMAIL_POOL_2 = buildExpressPool("e3-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Horaires de cours", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Horaires",
    vfQ: "C'est Horaires de cours.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Septembre", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "septembre",
    vfQ: "Date : septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["8 h – 17 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "8",
    vfQ: "Heure : 8 h – 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Campus principal", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "campus",
    vfQ: "Lieu : campus principal.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Carte étudiant", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "carte",
    vfQ: "Apporter : carte étudiant.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Dr. Keller", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Keller",
    vfQ: "Contact : Dr. Keller.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_3 = `De : M. Martin
Objet : Devoir de français

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Devoir de français.
Date : vendredi 15 mars. Heure : 23 h 59.
Lieu : plateforme en ligne.
À apporter : dissertation 300 mots. Contact : Mme Martin.

Cordialement,
M. Martin`;

const E3_1_CE_EMAIL_POOL_3 = buildExpressPool("e3-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Devoir de français", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Devoir",
    vfQ: "C'est Devoir de français.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Vendredi 15 mars", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "vendredi",
    vfQ: "Date : vendredi 15 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["23 h 59", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "23 59",
    vfQ: "Heure : 23 h 59.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Plateforme en ligne", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "plateforme",
    vfQ: "Lieu : plateforme en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Dissertation 300 mots", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "dissertation",
    vfQ: "Apporter : dissertation 300 mots.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Martin", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Martin",
    vfQ: "Contact : Mme Martin.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_4 = `De : Secrétariat
Objet : Sortie scolaire

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Sortie scolaire.
Date : jeudi 20 mars. Heure : 8 h 30.
Lieu : musée d'histoire.
À apporter : pique-nique. Contact : Mme Petit.

À bientôt,
Secrétariat`;

const E3_1_CE_EMAIL_POOL_4 = buildExpressPool("e3-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Sortie scolaire", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Sortie",
    vfQ: "C'est Sortie scolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Jeudi 20 mars", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "jeudi",
    vfQ: "Date : jeudi 20 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["8 h 30", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "8 30",
    vfQ: "Heure : 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Musée d'histoire", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "musée",
    vfQ: "Lieu : musée d'histoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Pique-nique", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "pique-nique",
    vfQ: "Apporter : pique-nique.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Petit", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Petit",
    vfQ: "Contact : Mme Petit.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_5 = `De : Université de Genève
Objet : Examen partiel

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Examen partiel.
Date : mardi 8 avril. Heure : 14 h.
Lieu : amphi A.
À apporter : calculatrice. Contact : Prof. Dubois.

Cordialement,
Université de Genève`;

const E3_1_CE_EMAIL_POOL_5 = buildExpressPool("e3-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Examen partiel", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Examen",
    vfQ: "C'est Examen partiel.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mardi 8 avril", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mardi",
    vfQ: "Date : mardi 8 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["14 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "14",
    vfQ: "Heure : 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Amphi a", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "amphi",
    vfQ: "Lieu : amphi A.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Calculatrice", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "calculatrice",
    vfQ: "Apporter : calculatrice.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Prof. Dubois", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Dubois",
    vfQ: "Contact : Prof. Dubois.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_6 = `De : Bibliothèque
Objet : Horaires vacances

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Horaires vacances.
Date : juillet-août. Heure : 9 h – 17 h.
Lieu : bibliothèque centrale.
À apporter : carte membre. Contact : Mme Costa.

À bientôt,
Bibliothèque`;

const E3_1_CE_EMAIL_POOL_6 = buildExpressPool("e3-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Horaires vacances", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Horaires",
    vfQ: "C'est Horaires vacances.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Juillet-août", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "juillet-août",
    vfQ: "Date : juillet-août.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["9 h – 17 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "9",
    vfQ: "Heure : 9 h – 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Bibliothèque centrale", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bibliothèque",
    vfQ: "Lieu : bibliothèque centrale.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Carte membre", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "carte",
    vfQ: "Apporter : carte membre.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Costa", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Costa",
    vfQ: "Contact : Mme Costa.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_7 = `De : Association parents
Objet : Réunion

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Réunion.
Date : mercredi 3 avril. Heure : 19 h.
Lieu : salle polyvalente.
À apporter : questions sur le projet. Contact : M. Blanc.

Cordialement,
Association parents`;

const E3_1_CE_EMAIL_POOL_7 = buildExpressPool("e3-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Réunion", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Réunion",
    vfQ: "C'est Réunion.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mercredi 3 avril", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mercredi",
    vfQ: "Date : mercredi 3 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["19 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "19",
    vfQ: "Heure : 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle polyvalente", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Lieu : salle polyvalente.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Questions sur le projet", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "questions",
    vfQ: "Apporter : questions sur le projet.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["M. Blanc", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Blanc",
    vfQ: "Contact : M. Blanc.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_8 = `De : Service scolarité
Objet : Inscription

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Inscription.
Date : avant le 30 avril. Heure : en ligne.
Lieu : portail étudiant.
À apporter : pièces d'identité. Contact : Mme Singh.

Cordialement,
Service scolarité`;

const E3_1_CE_EMAIL_POOL_8 = buildExpressPool("e3-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Inscription", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Inscription",
    vfQ: "C'est Inscription.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Avant le 30 avril", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "avant",
    vfQ: "Date : avant le 30 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["en ligne", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "en ligne",
    vfQ: "Heure : en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Portail étudiant", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "portail",
    vfQ: "Lieu : portail étudiant.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Pièces d'identité", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "pièces",
    vfQ: "Apporter : pièces d'identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Singh", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Singh",
    vfQ: "Contact : Mme Singh.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_9 = `De : M. Weber
Objet : Exposé histoire

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Exposé histoire.
Date : lundi 10 mars. Heure : en classe.
Lieu : salle 8.
À apporter : diapositives. Contact : M. Weber.

Cordialement,
M. Weber`;

const E3_1_CE_EMAIL_POOL_9 = buildExpressPool("e3-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Exposé histoire", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Exposé",
    vfQ: "C'est Exposé histoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Lundi 10 mars", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "lundi",
    vfQ: "Date : lundi 10 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["en classe", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "en classe",
    vfQ: "Heure : en classe.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle 8", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Lieu : salle 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Diapositives", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "diapositives",
    vfQ: "Apporter : diapositives.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["M. Weber", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Weber",
    vfQ: "Contact : M. Weber.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_10 = `De : Club sport scolaire
Objet : Entraînement

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Entraînement.
Date : mardi et jeudi. Heure : 17 h.
Lieu : gymnase.
À apporter : tenue de sport. Contact : M. Antoine.

Cordialement,
Club sport scolaire`;

const E3_1_CE_EMAIL_POOL_10 = buildExpressPool("e3-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Entraînement", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Entraînement",
    vfQ: "C'est Entraînement.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mardi et jeudi", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mardi",
    vfQ: "Date : mardi et jeudi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["17 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "17",
    vfQ: "Heure : 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Gymnase", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "gymnase",
    vfQ: "Lieu : gymnase.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Tenue de sport", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "tenue",
    vfQ: "Apporter : tenue de sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["M. Antoine", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Antoine",
    vfQ: "Contact : M. Antoine.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_11 = `De : Mme Rossi
Objet : Test d'anglais

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Test d'anglais.
Date : vendredi 22 mars. Heure : 10 h.
Lieu : salle 3.
À apporter : vocabulaire unité 4. Contact : Mme Rossi.

Cordialement,
Mme Rossi`;

const E3_1_CE_EMAIL_POOL_11 = buildExpressPool("e3-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Test d'anglais", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Test",
    vfQ: "C'est Test d'anglais.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Vendredi 22 mars", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "vendredi",
    vfQ: "Date : vendredi 22 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["10 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "10",
    vfQ: "Heure : 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle 3", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Lieu : salle 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Vocabulaire unité 4", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "vocabulaire",
    vfQ: "Apporter : vocabulaire unité 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Rossi", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Rossi",
    vfQ: "Contact : Mme Rossi.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_12 = `De : Laboratoire
Objet : TP chimie

Bonjour,

Information importante pour les élèves/étudiants.
Événement : TP chimie.
Date : mercredi 17 avril. Heure : 13 h.
Lieu : labo 3.
À apporter : blouse et lunettes. Contact : Mme Hassan.

À bientôt,
Laboratoire`;

const E3_1_CE_EMAIL_POOL_12 = buildExpressPool("e3-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["TP chimie", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "TP",
    vfQ: "C'est TP chimie.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mercredi 17 avril", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mercredi",
    vfQ: "Date : mercredi 17 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["13 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "13",
    vfQ: "Heure : 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Labo 3", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "labo",
    vfQ: "Lieu : labo 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Blouse et lunettes", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "blouse",
    vfQ: "Apporter : blouse et lunettes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Hassan", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Hassan",
    vfQ: "Contact : Mme Hassan.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_13 = `De : Orientation
Objet : Conseil orientation

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Conseil orientation.
Date : jeudi 25 avril. Heure : 15 h.
Lieu : bureau 2.
À apporter : bulletins scolaires. Contact : Mme Pop.

À bientôt,
Orientation`;

const E3_1_CE_EMAIL_POOL_13 = buildExpressPool("e3-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Conseil orientation", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Conseil",
    vfQ: "C'est Conseil orientation.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Jeudi 25 avril", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "jeudi",
    vfQ: "Date : jeudi 25 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["15 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "15",
    vfQ: "Heure : 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Bureau 2", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bureau",
    vfQ: "Lieu : bureau 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Bulletins scolaires", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "bulletins",
    vfQ: "Apporter : bulletins scolaires.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Pop", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Pop",
    vfQ: "Contact : Mme Pop.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_14 = `De : Faculté droit
Objet : Conférence

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Conférence.
Date : mardi 14 mai. Heure : 18 h.
Lieu : amphi C.
À apporter : inscription gratuite. Contact : Prof. Dubois.

Cordialement,
Faculté droit`;

const E3_1_CE_EMAIL_POOL_14 = buildExpressPool("e3-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Conférence", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Conférence",
    vfQ: "C'est Conférence.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mardi 14 mai", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mardi",
    vfQ: "Date : mardi 14 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["18 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "18",
    vfQ: "Heure : 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Amphi c", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "amphi",
    vfQ: "Lieu : amphi C.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Inscription gratuite", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "inscription",
    vfQ: "Apporter : inscription gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Prof. Dubois", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Dubois",
    vfQ: "Contact : Prof. Dubois.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_15 = `De : École primaire
Objet : Goûter fin d'année

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Goûter fin d'année.
Date : mercredi 26 juin. Heure : 16 h.
Lieu : cour de l'école.
À apporter : plat à partager. Contact : Mme Martin.

Cordialement,
École primaire`;

const E3_1_CE_EMAIL_POOL_15 = buildExpressPool("e3-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Goûter fin d'année", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Goûter",
    vfQ: "C'est Goûter fin d'année.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mercredi 26 juin", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mercredi",
    vfQ: "Date : mercredi 26 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["16 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "16",
    vfQ: "Heure : 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Cour de l'école", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cour",
    vfQ: "Lieu : cour de l'école.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Plat à partager", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "plat",
    vfQ: "Apporter : plat à partager.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Martin", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Martin",
    vfQ: "Contact : Mme Martin.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_16 = `De : Portail étudiant
Objet : Devoir en ligne

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Devoir en ligne.
Date : vendredi 5 avril. Heure : minuit.
Lieu : plateforme Moodle.
À apporter : rapport de 5 pages. Contact : Mme Kim.

Cordialement,
Portail étudiant`;

const E3_1_CE_EMAIL_POOL_16 = buildExpressPool("e3-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Devoir en ligne", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Devoir",
    vfQ: "C'est Devoir en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Vendredi 5 avril", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "vendredi",
    vfQ: "Date : vendredi 5 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["minuit", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "minuit",
    vfQ: "Heure : minuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Plateforme moodle", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "plateforme",
    vfQ: "Lieu : plateforme Moodle.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Rapport de 5 pages", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "rapport",
    vfQ: "Apporter : rapport de 5 pages.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Mme Kim", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Kim",
    vfQ: "Contact : Mme Kim.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_17 = `De : Gymnase
Objet : Cours annulé

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Cours annulé.
Date : lundi 1 avril. Heure : —.
Lieu : salle musique.
À apporter : reporté à mardi. Contact : M. Rossi.

À bientôt,
Gymnase`;

const E3_1_CE_EMAIL_POOL_17 = buildExpressPool("e3-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Cours annulé", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Cours",
    vfQ: "C'est Cours annulé.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Lundi 1 avril", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "lundi",
    vfQ: "Date : lundi 1 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["—", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "—",
    vfQ: "Heure : —.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle musique", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Lieu : salle musique.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Reporté à mardi", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "reporté",
    vfQ: "Apporter : reporté à mardi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["M. Rossi", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Rossi",
    vfQ: "Contact : M. Rossi.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_18 = `De : Association étudiante
Objet : Soirée intégration

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Soirée intégration.
Date : samedi 21 septembre. Heure : 20 h.
Lieu : campus.
À apporter : boisson à apporter. Contact : Bureau AE.

Cordialement,
Association étudiante`;

const E3_1_CE_EMAIL_POOL_18 = buildExpressPool("e3-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Soirée intégration", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Soirée",
    vfQ: "C'est Soirée intégration.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Samedi 21 septembre", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "samedi",
    vfQ: "Date : samedi 21 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["20 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "20",
    vfQ: "Heure : 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Campus", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "campus",
    vfQ: "Lieu : campus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Boisson à apporter", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "boisson",
    vfQ: "Apporter : boisson à apporter.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Bureau AE", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "AE",
    vfQ: "Contact : Bureau AE.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_19 = `De : M. Garcia
Objet : Projet informatique

Bonjour,

Information importante pour les élèves/étudiants.
Événement : Projet informatique.
Date : lundi 29 avril. Heure : en groupe.
Lieu : salle info 4.
À apporter : présentation PowerPoint. Contact : M. Garcia.

Cordialement,
M. Garcia`;

const E3_1_CE_EMAIL_POOL_19 = buildExpressPool("e3-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["Projet informatique", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "Projet",
    vfQ: "C'est Projet informatique.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Lundi 29 avril", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "lundi",
    vfQ: "Date : lundi 29 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["en groupe", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "en groupe",
    vfQ: "Heure : en groupe.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle info 4", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Lieu : salle info 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Présentation powerpoint", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "présentation",
    vfQ: "Apporter : présentation PowerPoint.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["M. Garcia", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Garcia",
    vfQ: "Contact : M. Garcia.",
    vfC: 0,
  }),
]);
const E3_1_CE_EMAIL_TEXT_20 = `De : Dr. Martin
Objet : QCM biologie

Bonjour,

Information importante pour les élèves/étudiants.
Événement : QCM biologie.
Date : mercredi 15 mai. Heure : 10 h.
Lieu : amphi B.
À apporter : réviser chapitres 1-5. Contact : Dr. Martin.

Cordialement,
Dr. Martin`;

const E3_1_CE_EMAIL_POOL_20 = buildExpressPool("e3-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'événement ?",
    text: ["QCM biologie", "Un barbecue", "Un film"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Événement : _________.",
    fill: "QCM",
    vfQ: "C'est QCM biologie.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mercredi 15 mai", "Hier", "En 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mercredi",
    vfQ: "Date : mercredi 15 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["10 h", "3 h du matin", "Minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "10",
    vfQ: "Heure : 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Amphi b", "À la plage", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "amphi",
    vfQ: "Lieu : amphi B.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quoi apporter ?",
    text: ["Réviser chapitres 1-5", "Rien", "Un passeport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À apporter : _________.",
    fill: "réviser",
    vfQ: "Apporter : réviser chapitres 1-5.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui contacter ?",
    text: ["Dr. Martin", "Le facteur", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : _________.",
    fill: "Martin",
    vfQ: "Contact : Dr. Martin.",
    vfC: 0,
  }),
]);

export const E3_1_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-1-ce-email-1",
  readingText: E3_1_CE_EMAIL_TEXT_1,
  questionPool: E3_1_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-2",
  readingText: E3_1_CE_EMAIL_TEXT_2,
  questionPool: E3_1_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-3",
  readingText: E3_1_CE_EMAIL_TEXT_3,
  questionPool: E3_1_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-4",
  readingText: E3_1_CE_EMAIL_TEXT_4,
  questionPool: E3_1_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-5",
  readingText: E3_1_CE_EMAIL_TEXT_5,
  questionPool: E3_1_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-6",
  readingText: E3_1_CE_EMAIL_TEXT_6,
  questionPool: E3_1_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-7",
  readingText: E3_1_CE_EMAIL_TEXT_7,
  questionPool: E3_1_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-8",
  readingText: E3_1_CE_EMAIL_TEXT_8,
  questionPool: E3_1_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-9",
  readingText: E3_1_CE_EMAIL_TEXT_9,
  questionPool: E3_1_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-10",
  readingText: E3_1_CE_EMAIL_TEXT_10,
  questionPool: E3_1_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-11",
  readingText: E3_1_CE_EMAIL_TEXT_11,
  questionPool: E3_1_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-12",
  readingText: E3_1_CE_EMAIL_TEXT_12,
  questionPool: E3_1_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-13",
  readingText: E3_1_CE_EMAIL_TEXT_13,
  questionPool: E3_1_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-14",
  readingText: E3_1_CE_EMAIL_TEXT_14,
  questionPool: E3_1_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-15",
  readingText: E3_1_CE_EMAIL_TEXT_15,
  questionPool: E3_1_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-16",
  readingText: E3_1_CE_EMAIL_TEXT_16,
  questionPool: E3_1_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-17",
  readingText: E3_1_CE_EMAIL_TEXT_17,
  questionPool: E3_1_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-18",
  readingText: E3_1_CE_EMAIL_TEXT_18,
  questionPool: E3_1_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-19",
  readingText: E3_1_CE_EMAIL_TEXT_19,
  questionPool: E3_1_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-20",
  readingText: E3_1_CE_EMAIL_TEXT_20,
  questionPool: E3_1_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-1-pee-1",
    title: "Confirmer sa présence à la réunion",
    situation: "L'école de votre fille vous invite à la réunion des parents.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Réunion des parents",
      body: "Bonjour,\nLa réunion des parents a lieu le jeudi 12 septembre à 18 h, dans la salle 24.\nMerci de confirmer votre présence.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : confirmez votre présence, dites qui vient avec vous et posez une question sur la réunion.",
    points: ["La confirmation", "Qui vient avec vous", "Une question sur la réunion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-2",
    title: "Excuser une absence",
    situation: "Votre fils est malade et ne peut pas aller à l'école.",
    sourceMessage: {
      from: "Mme Perrin",
      subject: "Absence de votre fils",
      body: "Bonjour,\nVotre fils n'est pas en classe ce matin.\nPouvez-vous nous expliquer son absence ?\nMerci,\nMme Perrin, maîtresse de la classe",
    },
    instruction: "Répondez à la maîtresse : excusez-vous, expliquez que votre fils est malade et dites quand il revient à l'école.",
    points: ["L'excuse", "La maladie de votre fils", "Quand il revient à l'école"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-3",
    title: "Demander la liste du matériel",
    situation: "L'école vous écrit avant la rentrée.",
    sourceMessage: {
      from: "École du Lac",
      subject: "La rentrée scolaire",
      body: "Bonjour,\nLa rentrée est le lundi 26 août à 8 h 15.\nVotre enfant doit apporter son matériel scolaire.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : remerciez, demandez la liste du matériel scolaire et posez une question sur les horaires.",
    points: ["Un remerciement", "La demande de la liste du matériel", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-4",
    title: "Parler de sa nouvelle école",
    situation: "Un ami vous pose des questions sur votre école.",
    sourceMessage: {
      from: "Amir",
      subject: "Ta nouvelle école",
      body: "Salut !\nAlors, ta nouvelle école, c'est comment ?\nQu'est-ce que tu étudies ? Tu commences à quelle heure ?\nRaconte-moi !\nAmir",
    },
    instruction: "Répondez à Amir : décrivez votre école, dites quelles matières vous étudiez et donnez vos horaires.",
    points: ["Votre école", "Les matières", "Vos horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-5",
    title: "Prendre rendez-vous avec le maître",
    situation: "Le maître de votre fille veut vous voir.",
    sourceMessage: {
      from: "M. Robert",
      subject: "Rendez-vous",
      body: "Bonjour,\nJe voudrais vous parler du travail de votre fille.\nPouvez-vous venir à l'école cette semaine ?\nM. Robert, maître de la classe",
    },
    instruction: "Répondez au maître : acceptez le rendez-vous, proposez un jour et une heure et posez une question sur le travail de votre fille.",
    points: ["Votre accord", "Un jour et une heure", "Une question sur votre fille"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-6",
    title: "Inscrire son enfant à la cantine",
    situation: "L'école propose la cantine à midi.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Inscription à la cantine",
      body: "Bonjour,\nVous pouvez inscrire votre enfant à la cantine.\nQuels jours votre enfant mange-t-il à l'école ?\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : dites quels jours votre enfant mange à la cantine, demandez le prix et remerciez.",
    points: ["Les jours à la cantine", "Une question sur le prix", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-7",
    title: "Confirmer son inscription au cours",
    situation: "Vous prenez des cours de français. L'école de langue vous écrit.",
    sourceMessage: {
      from: "École de français",
      subject: "Votre inscription",
      body: "Bonjour,\nVotre cours de français commence le mardi 3 septembre à 18 h, salle 5.\nMerci de confirmer votre inscription.\nL'école de français",
    },
    instruction: "Répondez à l'école : confirmez votre inscription, posez une question sur le matériel et demandez où est la salle 5.",
    points: ["La confirmation", "Une question sur le matériel", "Une question sur la salle"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-8",
    title: "Aider une voisine",
    situation: "Votre voisine est nouvelle. Son fils va dans l'école de votre fille.",
    sourceMessage: {
      from: "Mme Silva",
      subject: "Question sur l'école",
      body: "Bonjour,\nMon fils commence l'école lundi.\nLes cours commencent à quelle heure ? Où est l'entrée ?\nMerci beaucoup,\nMme Silva",
    },
    instruction: "Répondez à Mme Silva : donnez les horaires de l'école, expliquez où est l'entrée et proposez d'y aller ensemble lundi.",
    points: ["Les horaires", "L'entrée de l'école", "La proposition d'y aller ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-9",
    title: "Autoriser une sortie scolaire",
    situation: "La classe de votre fils va au musée.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie au musée",
      body: "Bonjour,\nLa classe va au musée le vendredi 17 mai.\nLa sortie coûte dix francs. Merci de donner votre réponse.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : donnez votre accord pour la sortie, dites ce que votre fils apporte et posez une question sur le repas de midi.",
    points: ["Votre accord", "Ce que votre fils apporte", "Une question sur le repas"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-10",
    title: "Prêter un livre",
    situation: "Un camarade de classe a oublié son livre.",
    sourceMessage: {
      from: "Lucas",
      subject: "Le livre de maths",
      body: "Salut !\nJ'ai oublié mon livre de maths à l'école.\nTu peux me prêter ton livre ce soir ? On a un exercice pour demain.\nLucas",
    },
    instruction: "Répondez à Lucas : acceptez de prêter votre livre, dites où et quand vous vous retrouvez et expliquez l'exercice pour demain.",
    points: ["Votre accord", "Où et quand", "L'exercice pour demain"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-1-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-1-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E3.2 — Décrire son quotidien
   ════════════════════════════════════════════════════════════════════════════ */

const E3_2_CE_EMAIL_TEXT_1 = `De : Dr. Martin
Objet : Rendez-vous médical

Bonjour,

Information sur votre activité quotidienne.
Activité : contrôle annuel.
Date : mardi 12 mars. Heure : 10 h 30.
Lieu : cabinet médical.
Note : carte d'assurance.

Cordialement,
Dr. Martin`;

const E3_2_CE_EMAIL_POOL_1 = buildExpressPool("e3-2-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Contrôle annuel", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "contrôle",
    vfQ: "C'est contrôle annuel.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mardi 12 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mardi",
    vfQ: "Date : mardi 12 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["10 h 30", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "10 30",
    vfQ: "Heure : 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Cabinet médical", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cabinet",
    vfQ: "Lieu : cabinet médical.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Carte d'assurance", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "carte",
    vfQ: "Note : carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Rendez-vous médical", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Rendez-vous",
    vfQ: "Objet : Rendez-vous médical.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_2 = `De : Salon Élégance
Objet : Confirmation RDV

Bonjour,

Information sur votre activité quotidienne.
Activité : coupe + brushing.
Date : vendredi 8 mars. Heure : 16 h.
Lieu : salon du centre.
Note : arriver 5 min avant.

Cordialement,
Salon Élégance`;

const E3_2_CE_EMAIL_POOL_2 = buildExpressPool("e3-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Coupe + brushing", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "coupe",
    vfQ: "C'est coupe + brushing.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Vendredi 8 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "vendredi",
    vfQ: "Date : vendredi 8 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["16 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "16",
    vfQ: "Heure : 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salon du centre", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salon",
    vfQ: "Lieu : salon du centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Arriver 5 min avant", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "arriver",
    vfQ: "Note : arriver 5 min avant.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Confirmation RDV", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Confirmation",
    vfQ: "Objet : Confirmation RDV.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_3 = `De : FitPlus
Objet : Cours de yoga

Bonjour,

Information sur votre activité quotidienne.
Activité : cours débutant.
Date : lundi et mercredi. Heure : 19 h.
Lieu : salle de sport.
Note : tapis de yoga.

À bientôt,
FitPlus`;

const E3_2_CE_EMAIL_POOL_3 = buildExpressPool("e3-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Cours débutant", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "cours",
    vfQ: "C'est cours débutant.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Lundi et mercredi", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "lundi",
    vfQ: "Date : lundi et mercredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["19 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "19",
    vfQ: "Heure : 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle de sport", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Lieu : salle de sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Tapis de yoga", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "tapis",
    vfQ: "Note : tapis de yoga.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Cours de yoga", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Cours",
    vfQ: "Objet : Cours de yoga.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_4 = `De : Cinéma ABC
Objet : Réservation

Bonjour,

Information sur votre activité quotidienne.
Activité : film français.
Date : samedi 9 mars. Heure : 20 h.
Lieu : salle 3.
Note : billets en pièce jointe.

Cordialement,
Cinéma ABC`;

const E3_2_CE_EMAIL_POOL_4 = buildExpressPool("e3-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Film français", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "film",
    vfQ: "C'est film français.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Samedi 9 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "samedi",
    vfQ: "Date : samedi 9 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["20 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "20",
    vfQ: "Heure : 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle 3", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salle",
    vfQ: "Lieu : salle 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Billets en pièce jointe", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "billets",
    vfQ: "Note : billets en pièce jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réservation", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_5 = `De : Pharmacie Centrale
Objet : Médicaments prêts

Bonjour,

Information sur votre activité quotidienne.
Activité : ordonnance.
Date : aujourd'hui. Heure : toute la journée.
Lieu : pharmacie.
Note : carte d'assurance.

Cordialement,
Pharmacie Centrale`;

const E3_2_CE_EMAIL_POOL_5 = buildExpressPool("e3-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Ordonnance", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "ordonnance",
    vfQ: "C'est ordonnance.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Aujourd'hui", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "aujourd'hui",
    vfQ: "Date : aujourd'hui.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["toute la journée", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "toute la journée",
    vfQ: "Heure : toute la journée.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Pharmacie", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "pharmacie",
    vfQ: "Lieu : pharmacie.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Carte d'assurance", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "carte",
    vfQ: "Note : carte d'assurance.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Médicaments prêts", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Médicaments",
    vfQ: "Objet : Médicaments prêts.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_6 = `De : Bibliothèque
Objet : Livres en retard

Bonjour,

Information sur votre activité quotidienne.
Activité : rappel retour.
Date : avant vendredi. Heure : 17 h.
Lieu : bibliothèque.
Note : éviter pénalité.

À bientôt,
Bibliothèque`;

const E3_2_CE_EMAIL_POOL_6 = buildExpressPool("e3-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Rappel retour", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "rappel",
    vfQ: "C'est rappel retour.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Avant vendredi", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "avant",
    vfQ: "Date : avant vendredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["17 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "17",
    vfQ: "Heure : 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Bibliothèque", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "bibliothèque",
    vfQ: "Lieu : bibliothèque.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Éviter pénalité", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "éviter",
    vfQ: "Note : éviter pénalité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Livres en retard", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Livres",
    vfQ: "Objet : Livres en retard.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_7 = `De : Restaurant Le Lac
Objet : Réservation confirmée

Bonjour,

Information sur votre activité quotidienne.
Activité : dîner.
Date : samedi 16 mars. Heure : 19 h 30.
Lieu : table près de la fenêtre.
Note : menu 45 francs.

Cordialement,
Restaurant Le Lac`;

const E3_2_CE_EMAIL_POOL_7 = buildExpressPool("e3-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Dîner", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "dîner",
    vfQ: "C'est dîner.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Samedi 16 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "samedi",
    vfQ: "Date : samedi 16 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["19 h 30", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "19 30",
    vfQ: "Heure : 19 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Table près de la fenêtre", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "table",
    vfQ: "Lieu : table près de la fenêtre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Menu 45 francs", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "menu",
    vfQ: "Note : menu 45 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réservation confirmée", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation confirmée.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_8 = `De : Banque UBS
Objet : Relevé de compte

Bonjour,

Information sur votre activité quotidienne.
Activité : document mensuel.
Date : disponible. Heure : en ligne.
Lieu : portail bancaire.
Note : mot de passe.

Cordialement,
Banque UBS`;

const E3_2_CE_EMAIL_POOL_8 = buildExpressPool("e3-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Document mensuel", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "document",
    vfQ: "C'est document mensuel.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Disponible", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "disponible",
    vfQ: "Date : disponible.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["en ligne", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "en ligne",
    vfQ: "Heure : en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Portail bancaire", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "portail",
    vfQ: "Lieu : portail bancaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Mot de passe", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "mot",
    vfQ: "Note : mot de passe.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Relevé de compte", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Relevé",
    vfQ: "Objet : Relevé de compte.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_9 = `De : Club de tennis
Objet : Match amical

Bonjour,

Information sur votre activité quotidienne.
Activité : tennis double.
Date : dimanche 10 mars. Heure : 15 h.
Lieu : court n° 2.
Note : raquette.

Cordialement,
Club de tennis`;

const E3_2_CE_EMAIL_POOL_9 = buildExpressPool("e3-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Tennis double", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "tennis",
    vfQ: "C'est tennis double.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Dimanche 10 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "dimanche",
    vfQ: "Date : dimanche 10 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["15 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "15",
    vfQ: "Heure : 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Court n° 2", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "court",
    vfQ: "Lieu : court n° 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Raquette", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "raquette",
    vfQ: "Note : raquette.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Match amical", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Match",
    vfQ: "Objet : Match amical.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_10 = `De : École culinaire
Objet : Atelier pasta

Bonjour,

Information sur votre activité quotidienne.
Activité : cours cuisine.
Date : mardi 19 mars. Heure : 18 h 30.
Lieu : cuisine école.
Note : tablier.

Cordialement,
École culinaire`;

const E3_2_CE_EMAIL_POOL_10 = buildExpressPool("e3-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Cours cuisine", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "cours",
    vfQ: "C'est cours cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mardi 19 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mardi",
    vfQ: "Date : mardi 19 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["18 h 30", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "18 30",
    vfQ: "Heure : 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Cuisine école", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cuisine",
    vfQ: "Lieu : cuisine école.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Tablier", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "tablier",
    vfQ: "Note : tablier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Atelier pasta", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Atelier",
    vfQ: "Objet : Atelier pasta.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_11 = `De : Coiffeur Express
Objet : Rappel RDV

Bonjour,

Information sur votre activité quotidienne.
Activité : coloration.
Date : jeudi 21 mars. Heure : 14 h.
Lieu : salon Express.
Note : test allergie.

Cordialement,
Coiffeur Express`;

const E3_2_CE_EMAIL_POOL_11 = buildExpressPool("e3-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Coloration", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "coloration",
    vfQ: "C'est coloration.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Jeudi 21 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "jeudi",
    vfQ: "Date : jeudi 21 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["14 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "14",
    vfQ: "Heure : 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salon express", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "salon",
    vfQ: "Lieu : salon Express.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Test allergie", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "test",
    vfQ: "Note : test allergie.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Rappel RDV", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Rappel",
    vfQ: "Objet : Rappel RDV.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_12 = `De : Piscine municipale
Objet : Horaires Pâques

Bonjour,

Information sur votre activité quotidienne.
Activité : ouverture spéciale.
Date : lundi de Pâques. Heure : 9 h – 18 h.
Lieu : piscine.
Note : entrée réduite.

Cordialement,
Piscine municipale`;

const E3_2_CE_EMAIL_POOL_12 = buildExpressPool("e3-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Ouverture spéciale", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "ouverture",
    vfQ: "C'est ouverture spéciale.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Lundi de pâques", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "lundi",
    vfQ: "Date : lundi de Pâques.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["9 h – 18 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "9",
    vfQ: "Heure : 9 h – 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Piscine", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "piscine",
    vfQ: "Lieu : piscine.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Entrée réduite", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "entrée",
    vfQ: "Note : entrée réduite.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Horaires Pâques", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Horaires",
    vfQ: "Objet : Horaires Pâques.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_13 = `De : Marché
Objet : Marché bio

Bonjour,

Information sur votre activité quotidienne.
Activité : producteurs locaux.
Date : samedi. Heure : 8 h – 13 h.
Lieu : place du Marché.
Note : sac réutilisable.

À bientôt,
Marché`;

const E3_2_CE_EMAIL_POOL_13 = buildExpressPool("e3-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Producteurs locaux", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "producteurs",
    vfQ: "C'est producteurs locaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Samedi", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "samedi",
    vfQ: "Date : samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["8 h – 13 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "8",
    vfQ: "Heure : 8 h – 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Place du marché", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "place",
    vfQ: "Lieu : place du Marché.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Sac réutilisable", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "sac",
    vfQ: "Note : sac réutilisable.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Marché bio", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Marché",
    vfQ: "Objet : Marché bio.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_14 = `De : Dentiste
Objet : Rappel contrôle

Bonjour,

Information sur votre activité quotidienne.
Activité : examen dentaire.
Date : mercredi 27 mars. Heure : 9 h.
Lieu : cabinet.
Note : brosse à dents.

À bientôt,
Dentiste`;

const E3_2_CE_EMAIL_POOL_14 = buildExpressPool("e3-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Examen dentaire", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "examen",
    vfQ: "C'est examen dentaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mercredi 27 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mercredi",
    vfQ: "Date : mercredi 27 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["9 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "9",
    vfQ: "Heure : 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Cabinet", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cabinet",
    vfQ: "Lieu : cabinet.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Brosse à dents", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "brosse",
    vfQ: "Note : brosse à dents.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Rappel contrôle", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Rappel",
    vfQ: "Objet : Rappel contrôle.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_15 = `De : Café du Port
Objet : Brunch réservé

Bonjour,

Information sur votre activité quotidienne.
Activité : brunch dominical.
Date : dimanche 24 mars. Heure : 10 h.
Lieu : terrasse.
Note : réservation 2 personnes.

Cordialement,
Café du Port`;

const E3_2_CE_EMAIL_POOL_15 = buildExpressPool("e3-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Brunch dominical", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "brunch",
    vfQ: "C'est brunch dominical.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Dimanche 24 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "dimanche",
    vfQ: "Date : dimanche 24 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["10 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "10",
    vfQ: "Heure : 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Terrasse", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "terrasse",
    vfQ: "Lieu : terrasse.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Réservation 2 personnes", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "réservation",
    vfQ: "Note : réservation 2 personnes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Brunch réservé", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Brunch",
    vfQ: "Objet : Brunch réservé.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_16 = `De : Laverie
Objet : Machine disponible

Bonjour,

Information sur votre activité quotidienne.
Activité : lave-linge libre.
Date : maintenant. Heure : —.
Lieu : laverie rez-de-chaussée.
Note : pièces de 2 francs.

À bientôt,
Laverie`;

const E3_2_CE_EMAIL_POOL_16 = buildExpressPool("e3-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Lave-linge libre", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "lave-linge",
    vfQ: "C'est lave-linge libre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Maintenant", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "maintenant",
    vfQ: "Date : maintenant.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["—", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "—",
    vfQ: "Heure : —.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Laverie rez-de-chaussée", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "laverie",
    vfQ: "Lieu : laverie rez-de-chaussée.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Pièces de 2 francs", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "pièces",
    vfQ: "Note : pièces de 2 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Machine disponible", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Machine",
    vfQ: "Objet : Machine disponible.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_17 = `De : Médecin
Objet : Résultats analyses

Bonjour,

Information sur votre activité quotidienne.
Activité : documents médicaux.
Date : à retirer. Heure : 14 h – 17 h.
Lieu : secrétariat.
Note : pièce d'identité.

À bientôt,
Médecin`;

const E3_2_CE_EMAIL_POOL_17 = buildExpressPool("e3-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Documents médicaux", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "documents",
    vfQ: "C'est documents médicaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["À retirer", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "à",
    vfQ: "Date : à retirer.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["14 h – 17 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "14",
    vfQ: "Heure : 14 h – 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Secrétariat", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "secrétariat",
    vfQ: "Lieu : secrétariat.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Pièce d'identité", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "pièce",
    vfQ: "Note : pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Résultats analyses", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Résultats",
    vfQ: "Objet : Résultats analyses.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_18 = `De : Supermarché
Objet : Offre spéciale

Bonjour,

Information sur votre activité quotidienne.
Activité : promotions semaine.
Date : jusqu'à dimanche. Heure : toute la journée.
Lieu : Migros centre.
Note : carte fidélité.

À bientôt,
Supermarché`;

const E3_2_CE_EMAIL_POOL_18 = buildExpressPool("e3-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Promotions semaine", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "promotions",
    vfQ: "C'est promotions semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Jusqu'à dimanche", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "jusqu'à",
    vfQ: "Date : jusqu'à dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["toute la journée", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "toute la journée",
    vfQ: "Heure : toute la journée.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Migros centre", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Migros",
    vfQ: "Lieu : Migros centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Carte fidélité", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "carte",
    vfQ: "Note : carte fidélité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Offre spéciale", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Offre",
    vfQ: "Objet : Offre spéciale.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_19 = `De : Voisins
Objet : Fête de quartier

Bonjour,

Information sur votre activité quotidienne.
Activité : apéro collectif.
Date : samedi 30 mars. Heure : 17 h.
Lieu : cour.
Note : boisson à apporter.

À bientôt,
Voisins`;

const E3_2_CE_EMAIL_POOL_19 = buildExpressPool("e3-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Apéro collectif", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "apéro",
    vfQ: "C'est apéro collectif.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Samedi 30 mars", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "samedi",
    vfQ: "Date : samedi 30 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["17 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "17",
    vfQ: "Heure : 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Cour", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "cour",
    vfQ: "Lieu : cour.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Boisson à apporter", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "boisson",
    vfQ: "Note : boisson à apporter.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Fête de quartier", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fête",
    vfQ: "Objet : Fête de quartier.",
    vfC: 0,
  }),
]);
const E3_2_CE_EMAIL_TEXT_20 = `De : Sport club
Objet : Entraînement

Bonjour,

Information sur votre activité quotidienne.
Activité : football.
Date : mardi et jeudi. Heure : 18 h.
Lieu : stade municipal.
Note : chaussures de sport.

Cordialement,
Sport club`;

const E3_2_CE_EMAIL_POOL_20 = buildExpressPool("e3-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quelle activité ?",
    text: ["Football", "Dormir", "Voyager loin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Activité : _________.",
    fill: "football",
    vfQ: "C'est football.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle date ?",
    text: ["Mardi et jeudi", "Hier", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : _________.",
    fill: "mardi",
    vfQ: "Date : mardi et jeudi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure ?",
    text: ["18 h", "Minuit", "4 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "18",
    vfQ: "Heure : 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Stade municipal", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "stade",
    vfQ: "Lieu : stade municipal.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle note importante ?",
    text: ["Chaussures de sport", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "chaussures",
    vfQ: "Note : chaussures de sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Entraînement", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Entraînement",
    vfQ: "Objet : Entraînement.",
    vfC: 0,
  }),
]);

export const E3_2_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-2-ce-email-1",
  readingText: E3_2_CE_EMAIL_TEXT_1,
  questionPool: E3_2_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-2",
  readingText: E3_2_CE_EMAIL_TEXT_2,
  questionPool: E3_2_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-3",
  readingText: E3_2_CE_EMAIL_TEXT_3,
  questionPool: E3_2_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-4",
  readingText: E3_2_CE_EMAIL_TEXT_4,
  questionPool: E3_2_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-5",
  readingText: E3_2_CE_EMAIL_TEXT_5,
  questionPool: E3_2_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-6",
  readingText: E3_2_CE_EMAIL_TEXT_6,
  questionPool: E3_2_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-7",
  readingText: E3_2_CE_EMAIL_TEXT_7,
  questionPool: E3_2_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-8",
  readingText: E3_2_CE_EMAIL_TEXT_8,
  questionPool: E3_2_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-9",
  readingText: E3_2_CE_EMAIL_TEXT_9,
  questionPool: E3_2_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-10",
  readingText: E3_2_CE_EMAIL_TEXT_10,
  questionPool: E3_2_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-11",
  readingText: E3_2_CE_EMAIL_TEXT_11,
  questionPool: E3_2_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-12",
  readingText: E3_2_CE_EMAIL_TEXT_12,
  questionPool: E3_2_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-13",
  readingText: E3_2_CE_EMAIL_TEXT_13,
  questionPool: E3_2_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-14",
  readingText: E3_2_CE_EMAIL_TEXT_14,
  questionPool: E3_2_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-15",
  readingText: E3_2_CE_EMAIL_TEXT_15,
  questionPool: E3_2_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-16",
  readingText: E3_2_CE_EMAIL_TEXT_16,
  questionPool: E3_2_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-17",
  readingText: E3_2_CE_EMAIL_TEXT_17,
  questionPool: E3_2_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-18",
  readingText: E3_2_CE_EMAIL_TEXT_18,
  questionPool: E3_2_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-19",
  readingText: E3_2_CE_EMAIL_TEXT_19,
  questionPool: E3_2_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-20",
  readingText: E3_2_CE_EMAIL_TEXT_20,
  questionPool: E3_2_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-2-pee-1",
    title: "Raconter son week-end",
    situation: "Votre amie Marta raconte sa semaine et pose une question.",
    sourceMessage: {
      from: "Marta",
      subject: "Ma semaine",
      body: "Bonjour,\nJe me lève à 6 h 30 et je travaille toute la journée.\nLe week-end, je me repose au bord du lac.\nEt toi, qu'est-ce que tu fais le week-end ?\nMarta",
    },
    instruction: "Répondez à Marta : racontez votre week-end, dites à quelle heure vous vous levez et proposez une activité ensemble.",
    points: ["Votre week-end", "L'heure du lever", "Une activité ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-2",
    title: "Donner des nouvelles à sa famille",
    situation: "Votre grand-mère veut connaître votre vie.",
    sourceMessage: {
      from: "Mamie",
      subject: "Des nouvelles",
      body: "Bonjour,\nComment vas-tu ? Raconte-moi tes journées.\nTu manges bien ? Tu dors assez ?\nGrosses bises,\nMamie",
    },
    instruction: "Répondez à votre grand-mère : décrivez votre journée, parlez de vos repas et dites à quelle heure vous vous couchez.",
    points: ["Votre journée", "Vos repas", "L'heure du coucher"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-3",
    title: "Choisir un horaire de sport",
    situation: "Votre club de gym change ses horaires.",
    sourceMessage: {
      from: "Club de gym Tonic",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nNos cours changent d'horaire.\nVous pouvez venir le mardi à 18 h ou le samedi à 10 h.\nQuel horaire préférez-vous ?\nLe club de gym",
    },
    instruction: "Répondez au club : choisissez un horaire, expliquez pourquoi avec votre emploi du temps et remerciez.",
    points: ["L'horaire choisi", "Pourquoi cet horaire", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-4",
    title: "Trouver un moment pour se voir",
    situation: "Une amie veut vous voir cette semaine.",
    sourceMessage: {
      from: "Nadia",
      subject: "On se voit quand ?",
      body: "Coucou,\nJe veux te voir cette semaine !\nTu es libre quel jour ? Le soir ou le week-end ?\nBises,\nNadia",
    },
    instruction: "Répondez à Nadia : expliquez votre semaine, proposez un jour et une heure et proposez une activité.",
    points: ["Votre semaine", "Un jour et une heure", "Une activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-5",
    title: "Organiser les repas de la semaine",
    situation: "Votre colocataire veut organiser les repas de la semaine.",
    sourceMessage: {
      from: "Tom",
      subject: "Les repas de la semaine",
      body: "Salut,\nOn organise les repas ? Moi, je peux cuisiner le lundi et le mercredi.\nEt toi, quels soirs es-tu à la maison ?\nTom",
    },
    instruction: "Répondez à Tom : dites quels soirs vous êtes à la maison, proposez vos jours de cuisine et posez une question sur les courses.",
    points: ["Vos soirs à la maison", "Vos jours de cuisine", "Une question sur les courses"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-6",
    title: "Expliquer sa routine du matin",
    situation: "Votre cousin est toujours en retard le matin.",
    sourceMessage: {
      from: "Sami",
      subject: "Le matin, c'est dur !",
      body: "Salut,\nJe suis toujours en retard le matin !\nToi, tu arrives toujours à l'heure. Comment tu fais ?\nSami",
    },
    instruction: "Répondez à Sami : décrivez votre routine du matin, dites à quelle heure vous vous levez et donnez-lui un conseil.",
    points: ["Votre routine du matin", "L'heure du lever", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-7",
    title: "Répondre à l'école de langue",
    situation: "Votre cours de français change de jour.",
    sourceMessage: {
      from: "École de français",
      subject: "Changement d'horaire",
      body: "Bonjour,\nVotre cours de français change de jour : il a lieu maintenant le jeudi à 18 h 30.\nCet horaire vous convient-il ?\nL'école de français",
    },
    instruction: "Répondez à l'école : dites si l'horaire vous convient, expliquez votre emploi du temps du jeudi et posez une question.",
    points: ["Votre réponse", "Votre emploi du temps du jeudi", "Une question"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-8",
    title: "Décrire sa journée type",
    situation: "Votre correspondante veut connaître votre quotidien.",
    sourceMessage: {
      from: "Lena",
      subject: "Ta journée type",
      body: "Bonjour,\nDans ma ville, je me lève à 7 h et je vais à l'école à vélo.\nEt toi ? Raconte-moi ta journée type, du matin au soir.\nLena",
    },
    instruction: "Répondez à Lena : racontez votre matin, votre après-midi et votre soirée.",
    points: ["Le matin", "L'après-midi", "La soirée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-9",
    title: "Accepter une invitation à la piscine",
    situation: "Un ami vous invite dimanche matin.",
    sourceMessage: {
      from: "Karim",
      subject: "Piscine dimanche ?",
      body: "Salut,\nJe vais à la piscine dimanche matin. Tu viens avec moi ?\nElle ouvre à 9 h.\nKarim",
    },
    instruction: "Répondez à Karim : acceptez l'invitation, dites à quelle heure vous vous levez le dimanche et proposez une heure de rendez-vous.",
    points: ["Votre accord", "Votre heure de lever le dimanche", "Une heure de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-10",
    title: "Répondre à la bibliothèque",
    situation: "La bibliothèque de votre quartier change ses horaires.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Nos nouveaux horaires",
      body: "Bonjour,\nLa bibliothèque est maintenant ouverte le soir, jusqu'à 20 h.\nQuels jours venez-vous chez nous ?\nLa bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : dites quels jours vous venez, expliquez ce que vous faites à la bibliothèque et remerciez pour les nouveaux horaires.",
    points: ["Les jours de visite", "Vos activités à la bibliothèque", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-2-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-2-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E3.3 — Aller au travail
   ════════════════════════════════════════════════════════════════════════════ */

const E3_3_CE_EMAIL_TEXT_1 = `De : Marie Dubois
Objet : Réunion lundi

Bonjour,

Message professionnel de SwissTech SA.
Poste concerné : secrétaire.
Quand : lundi 9 h. Où : salle 2.
Détail : ordre du jour en pièce jointe.
Merci de confirmer votre présence.

Cordialement,
Marie Dubois`;

const E3_3_CE_EMAIL_POOL_1 = buildExpressPool("e3-3-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["SwissTech SA", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "SwissTech",
    vfQ: "C'est SwissTech SA.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Secrétaire", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "secrétaire",
    vfQ: "Poste : secrétaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Lundi 9 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "lundi",
    vfQ: "Quand : lundi 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle 2", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "salle",
    vfQ: "Où : salle 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Ordre du jour en pièce jointe", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "ordre",
    vfQ: "Détail : ordre du jour en pièce jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réunion lundi", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réunion",
    vfQ: "Objet : Réunion lundi.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_2 = `De : Dr. Keller
Objet : Briefing matinal

Bonjour,

Message professionnel de Hôpital cantonal.
Poste concerné : infirmier.
Quand : 5 h 45. Où : salle de réunion.
Détail : présence obligatoire.
Merci de confirmer votre présence.

Cordialement,
Dr. Keller`;

const E3_3_CE_EMAIL_POOL_2 = buildExpressPool("e3-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Hôpital cantonal", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Hôpital",
    vfQ: "C'est Hôpital cantonal.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Infirmier", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "infirmier",
    vfQ: "Poste : infirmier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["5 h 45", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "5",
    vfQ: "Quand : 5 h 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle de réunion", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "salle",
    vfQ: "Où : salle de réunion.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Présence obligatoire", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "présence",
    vfQ: "Détail : présence obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Briefing matinal", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Briefing",
    vfQ: "Objet : Briefing matinal.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_3 = `De : Chef Marco
Objet : Service du soir

Bonjour,

Message professionnel de Restaurant Le Sapin.
Poste concerné : serveur.
Quand : 10 h 30. Où : cuisine.
Détail : tenue impeccable.
Merci de confirmer votre présence.

Cordialement,
Chef Marco`;

const E3_3_CE_EMAIL_POOL_3 = buildExpressPool("e3-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Restaurant Le Sapin", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Le Sapin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Serveur", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "serveur",
    vfQ: "Poste : serveur.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["10 h 30", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "10",
    vfQ: "Quand : 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Cuisine", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "cuisine",
    vfQ: "Où : cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Tenue impeccable", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "tenue",
    vfQ: "Détail : tenue impeccable.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Service du soir", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Service",
    vfQ: "Objet : Service du soir.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_4 = `De : Paul Garcia
Objet : Voiture à réparer

Bonjour,

Message professionnel de Garage Central.
Poste concerné : mécanicien.
Quand : 7 h. Où : atelier.
Détail : pièces commandées.
Merci de confirmer votre présence.

Cordialement,
Paul Garcia`;

const E3_3_CE_EMAIL_POOL_4 = buildExpressPool("e3-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Garage Central", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Garage",
    vfQ: "C'est Garage Central.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Mécanicien", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "mécanicien",
    vfQ: "Poste : mécanicien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["7 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "7",
    vfQ: "Quand : 7 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Atelier", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "atelier",
    vfQ: "Où : atelier.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Pièces commandées", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "pièces",
    vfQ: "Détail : pièces commandées.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Voiture à réparer", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Voiture",
    vfQ: "Objet : Voiture à réparer.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_5 = `De : Sophie Martin
Objet : Formation

Bonjour,

Message professionnel de Banque Populaire.
Poste concerné : conseiller.
Quand : mardi 14 h. Où : salle formation.
Détail : apporter cahier.
Merci de confirmer votre présence.

Cordialement,
Sophie Martin`;

const E3_3_CE_EMAIL_POOL_5 = buildExpressPool("e3-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Banque Populaire", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Banque",
    vfQ: "C'est Banque Populaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Conseiller", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "conseiller",
    vfQ: "Poste : conseiller.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Mardi 14 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "mardi",
    vfQ: "Quand : mardi 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle formation", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "salle",
    vfQ: "Où : salle formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Apporter cahier", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "apporter",
    vfQ: "Détail : apporter cahier.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Formation", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Formation",
    vfQ: "Objet : Formation.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_6 = `De : Julie Petit
Objet : Inventaire

Bonjour,

Message professionnel de Pharmacie du Lac.
Poste concerné : pharmacien.
Quand : vendredi 18 h. Où : pharmacie.
Détail : compter les stocks.
Merci de confirmer votre présence.

Cordialement,
Julie Petit`;

const E3_3_CE_EMAIL_POOL_6 = buildExpressPool("e3-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Pharmacie du Lac", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Pharmacie",
    vfQ: "C'est Pharmacie du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Pharmacien", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "pharmacien",
    vfQ: "Poste : pharmacien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Vendredi 18 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "vendredi",
    vfQ: "Quand : vendredi 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Pharmacie", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "pharmacie",
    vfQ: "Où : pharmacie.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Compter les stocks", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "compter",
    vfQ: "Détail : compter les stocks.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Inventaire", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Inventaire",
    vfQ: "Objet : Inventaire.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_7 = `De : M. Martin
Objet : Conseil de classe

Bonjour,

Message professionnel de École primaire.
Poste concerné : professeur.
Quand : jeudi 17 h. Où : salle des profs.
Détail : bulletins à préparer.
Merci de confirmer votre présence.

Cordialement,
M. Martin`;

const E3_3_CE_EMAIL_POOL_7 = buildExpressPool("e3-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["École primaire", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "École",
    vfQ: "C'est École primaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Professeur", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "professeur",
    vfQ: "Poste : professeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Jeudi 17 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "jeudi",
    vfQ: "Quand : jeudi 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle des profs", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "salle",
    vfQ: "Où : salle des profs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Bulletins à préparer", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "bulletins",
    vfQ: "Détail : bulletins à préparer.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Conseil de classe", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Conseil",
    vfQ: "Objet : Conseil de classe.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_8 = `De : Emma Laurent
Objet : Devis client

Bonjour,

Message professionnel de Agence Voyage.
Poste concerné : vendeur.
Quand : mercredi 11 h. Où : bureau.
Détail : devis Bali en pièce jointe.
Merci de confirmer votre présence.

Cordialement,
Emma Laurent`;

const E3_3_CE_EMAIL_POOL_8 = buildExpressPool("e3-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Agence Voyage", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Agence",
    vfQ: "C'est Agence Voyage.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Vendeur", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "vendeur",
    vfQ: "Poste : vendeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Mercredi 11 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "mercredi",
    vfQ: "Quand : mercredi 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Bureau", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "bureau",
    vfQ: "Où : bureau.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Devis bali en pièce jointe", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "devis",
    vfQ: "Détail : devis Bali en pièce jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Devis client", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Devis",
    vfQ: "Objet : Devis client.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_9 = `De : Thomas Keller
Objet : Contrôle qualité

Bonjour,

Message professionnel de Boulangerie Martin.
Poste concerné : boulanger.
Quand : lundi 6 h. Où : laboratoire.
Détail : checklist à remplir.
Merci de confirmer votre présence.

Cordialement,
Thomas Keller`;

const E3_3_CE_EMAIL_POOL_9 = buildExpressPool("e3-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Boulangerie Martin", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Martin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Boulanger", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "boulanger",
    vfQ: "Poste : boulanger.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Lundi 6 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "lundi",
    vfQ: "Quand : lundi 6 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Laboratoire", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "laboratoire",
    vfQ: "Où : laboratoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Checklist à remplir", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "checklist",
    vfQ: "Détail : checklist à remplir.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Contrôle qualité", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Contrôle",
    vfQ: "Objet : Contrôle qualité.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_10 = `De : Maître Blanc
Objet : Audience

Bonjour,

Message professionnel de Cabinet d'avocats.
Poste concerné : secrétaire.
Quand : mardi 10 h. Où : tribunal.
Détail : dossier n° 45.
Merci de confirmer votre présence.

Cordialement,
Maître Blanc`;

const E3_3_CE_EMAIL_POOL_10 = buildExpressPool("e3-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Cabinet d'avocats", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Cabinet",
    vfQ: "C'est Cabinet d'avocats.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Secrétaire", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "secrétaire",
    vfQ: "Poste : secrétaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Mardi 10 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "mardi",
    vfQ: "Quand : mardi 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Tribunal", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "tribunal",
    vfQ: "Où : tribunal.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Dossier n° 45", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "dossier",
    vfQ: "Détail : dossier n° 45.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Audience", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Audience",
    vfQ: "Objet : Audience.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_11 = `De : Hugo Martin
Objet : Shift soir

Bonjour,

Message professionnel de Hôtel Bellevue.
Poste concerné : réceptionniste.
Quand : 15 h. Où : réception.
Détail : arriver 10 min avant.
Merci de confirmer votre présence.

Cordialement,
Hugo Martin`;

const E3_3_CE_EMAIL_POOL_11 = buildExpressPool("e3-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Hôtel Bellevue", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Hôtel",
    vfQ: "C'est Hôtel Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Réceptionniste", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "réceptionniste",
    vfQ: "Poste : réceptionniste.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["15 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "15",
    vfQ: "Quand : 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Réception", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "réception",
    vfQ: "Où : réception.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Arriver 10 min avant", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "arriver",
    vfQ: "Détail : arriver 10 min avant.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Shift soir", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Shift",
    vfQ: "Objet : Shift soir.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_12 = `De : Karim Ben
Objet : Sécurité chantier

Bonjour,

Message professionnel de BTP Construction.
Poste concerné : maçon.
Quand : 6 h 15. Où : chantier.
Détail : casque obligatoire.
Merci de confirmer votre présence.

Cordialement,
Karim Ben`;

const E3_3_CE_EMAIL_POOL_12 = buildExpressPool("e3-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["BTP Construction", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "BTP",
    vfQ: "C'est BTP Construction.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Maçon", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "maçon",
    vfQ: "Poste : maçon.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["6 h 15", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "6",
    vfQ: "Quand : 6 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Chantier", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "chantier",
    vfQ: "Où : chantier.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Casque obligatoire", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "casque",
    vfQ: "Détail : casque obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Sécurité chantier", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Sécurité",
    vfQ: "Objet : Sécurité chantier.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_13 = `De : Nina Costa
Objet : Réunion mensuelle

Bonjour,

Message professionnel de Librairie du Centre.
Poste concerné : libraire.
Quand : vendredi 18 h. Où : librairie.
Détail : chiffres du mois.
Merci de confirmer votre présence.

Cordialement,
Nina Costa`;

const E3_3_CE_EMAIL_POOL_13 = buildExpressPool("e3-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Librairie du Centre", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Librairie",
    vfQ: "C'est Librairie du Centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Libraire", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "libraire",
    vfQ: "Poste : libraire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Vendredi 18 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "vendredi",
    vfQ: "Quand : vendredi 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Librairie", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "librairie",
    vfQ: "Où : librairie.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Chiffres du mois", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "chiffres",
    vfQ: "Détail : chiffres du mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réunion mensuelle", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réunion",
    vfQ: "Objet : Réunion mensuelle.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_14 = `De : Clara Rossi
Objet : Nouvelle collection

Bonjour,

Message professionnel de Salon de coiffure.
Poste concerné : coiffeur.
Quand : mardi 9 h. Où : salon.
Détail : photos tendances.
Merci de confirmer votre présence.

Cordialement,
Clara Rossi`;

const E3_3_CE_EMAIL_POOL_14 = buildExpressPool("e3-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Salon de coiffure", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Salon",
    vfQ: "C'est Salon de coiffure.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Coiffeur", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "coiffeur",
    vfQ: "Poste : coiffeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Mardi 9 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "mardi",
    vfQ: "Quand : mardi 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salon", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "salon",
    vfQ: "Où : salon.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Photos tendances", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "photos",
    vfQ: "Détail : photos tendances.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Nouvelle collection", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Nouvelle",
    vfQ: "Objet : Nouvelle collection.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_15 = `De : David Kim
Objet : Audit production

Bonjour,

Message professionnel de Usine Omega.
Poste concerné : ingénieur.
Quand : jeudi 8 h. Où : usine.
Détail : rapport trimestriel.
Merci de confirmer votre présence.

Cordialement,
David Kim`;

const E3_3_CE_EMAIL_POOL_15 = buildExpressPool("e3-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Usine Omega", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Usine",
    vfQ: "C'est Usine Omega.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Ingénieur", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "ingénieur",
    vfQ: "Poste : ingénieur.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Jeudi 8 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "jeudi",
    vfQ: "Quand : jeudi 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Usine", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "usine",
    vfQ: "Où : usine.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Rapport trimestriel", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "rapport",
    vfQ: "Détail : rapport trimestriel.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Audit production", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Audit",
    vfQ: "Objet : Audit production.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_16 = `De : Dr. Martin
Objet : Réunion équipe

Bonjour,

Message professionnel de Cabinet médical.
Poste concerné : médecin.
Quand : 8 h. Où : cabinet.
Détail : planning semaine.
Merci de confirmer votre présence.

Cordialement,
Dr. Martin`;

const E3_3_CE_EMAIL_POOL_16 = buildExpressPool("e3-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Cabinet médical", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Cabinet",
    vfQ: "C'est Cabinet médical.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Médecin", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "médecin",
    vfQ: "Poste : médecin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["8 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "8",
    vfQ: "Quand : 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Cabinet", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "cabinet",
    vfQ: "Où : cabinet.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Planning semaine", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "planning",
    vfQ: "Détail : planning semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réunion équipe", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réunion",
    vfQ: "Objet : Réunion équipe.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_17 = `De : Victor Pop
Objet : Marché

Bonjour,

Message professionnel de Ferme des Alpes.
Poste concerné : agriculteur.
Quand : samedi 6 h. Où : marché de Sion.
Détail : charger le camion.
Merci de confirmer votre présence.

Cordialement,
Victor Pop`;

const E3_3_CE_EMAIL_POOL_17 = buildExpressPool("e3-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Ferme des Alpes", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Ferme",
    vfQ: "C'est Ferme des Alpes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Agriculteur", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "agriculteur",
    vfQ: "Poste : agriculteur.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Samedi 6 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "samedi",
    vfQ: "Quand : samedi 6 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Marché de sion", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "marché",
    vfQ: "Où : marché de Sion.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Charger le camion", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "charger",
    vfQ: "Détail : charger le camion.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Marché", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Marché",
    vfQ: "Objet : Marché.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_18 = `De : Antoine Blanc
Objet : Article urgent

Bonjour,

Message professionnel de Journal Le Quotidien.
Poste concerné : journaliste.
Quand : 11 h. Où : salle de rédaction.
Détail : deadline 17 h.
Merci de confirmer votre présence.

Cordialement,
Antoine Blanc`;

const E3_3_CE_EMAIL_POOL_18 = buildExpressPool("e3-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Journal Le Quotidien", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Journal",
    vfQ: "C'est Journal Le Quotidien.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Journaliste", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "journaliste",
    vfQ: "Poste : journaliste.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["11 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "11",
    vfQ: "Quand : 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Salle de rédaction", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "salle",
    vfQ: "Où : salle de rédaction.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Deadline 17 h", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "deadline",
    vfQ: "Détail : deadline 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Article urgent", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Article",
    vfQ: "Objet : Article urgent.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_19 = `De : Marc Singh
Objet : Intervention

Bonjour,

Message professionnel de Service pompiers.
Poste concerné : pompier.
Quand : immédiat. Où : caserne.
Détail : équipe Alpha.
Merci de confirmer votre présence.

Cordialement,
Marc Singh`;

const E3_3_CE_EMAIL_POOL_19 = buildExpressPool("e3-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Service pompiers", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Service",
    vfQ: "C'est Service pompiers.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Pompier", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "pompier",
    vfQ: "Poste : pompier.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Immédiat", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "immédiat",
    vfQ: "Quand : immédiat.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Caserne", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "caserne",
    vfQ: "Où : caserne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Équipe alpha", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "équipe",
    vfQ: "Détail : équipe Alpha.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Intervention", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Intervention",
    vfQ: "Objet : Intervention.",
    vfC: 0,
  }),
]);
const E3_3_CE_EMAIL_TEXT_20 = `De : Sara Alami
Objet : Réunion parents

Bonjour,

Message professionnel de Crèche Les Petits.
Poste concerné : éducatrice.
Quand : jeudi 18 h. Où : crèche.
Détail : rapport mensuel enfant.
Merci de confirmer votre présence.

Cordialement,
Sara Alami`;

const E3_3_CE_EMAIL_POOL_20 = buildExpressPool("e3-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quelle entreprise ?",
    text: ["Crèche Les Petits", "Une plage", "Un volcan"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entreprise : _________.",
    fill: "Crèche",
    vfQ: "C'est Crèche Les Petits.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel poste ?",
    text: ["Éducatrice", "Pilote de F1", "Astronaute"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Poste : _________.",
    fill: "éducatrice",
    vfQ: "Poste : éducatrice.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Jeudi 18 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "jeudi",
    vfQ: "Quand : jeudi 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où ?",
    text: ["Crèche", "En mer", "Dans l'espace"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Où : _________.",
    fill: "crèche",
    vfQ: "Où : crèche.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel détail important ?",
    text: ["Rapport mensuel enfant", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : _________.",
    fill: "rapport",
    vfQ: "Détail : rapport mensuel enfant.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réunion parents", "Une invitation à un mariage", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réunion",
    vfQ: "Objet : Réunion parents.",
    vfC: 0,
  }),
]);

export const E3_3_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-3-ce-email-1",
  readingText: E3_3_CE_EMAIL_TEXT_1,
  questionPool: E3_3_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-2",
  readingText: E3_3_CE_EMAIL_TEXT_2,
  questionPool: E3_3_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-3",
  readingText: E3_3_CE_EMAIL_TEXT_3,
  questionPool: E3_3_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-4",
  readingText: E3_3_CE_EMAIL_TEXT_4,
  questionPool: E3_3_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-5",
  readingText: E3_3_CE_EMAIL_TEXT_5,
  questionPool: E3_3_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-6",
  readingText: E3_3_CE_EMAIL_TEXT_6,
  questionPool: E3_3_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-7",
  readingText: E3_3_CE_EMAIL_TEXT_7,
  questionPool: E3_3_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-8",
  readingText: E3_3_CE_EMAIL_TEXT_8,
  questionPool: E3_3_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-9",
  readingText: E3_3_CE_EMAIL_TEXT_9,
  questionPool: E3_3_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-10",
  readingText: E3_3_CE_EMAIL_TEXT_10,
  questionPool: E3_3_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-11",
  readingText: E3_3_CE_EMAIL_TEXT_11,
  questionPool: E3_3_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-12",
  readingText: E3_3_CE_EMAIL_TEXT_12,
  questionPool: E3_3_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-13",
  readingText: E3_3_CE_EMAIL_TEXT_13,
  questionPool: E3_3_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-14",
  readingText: E3_3_CE_EMAIL_TEXT_14,
  questionPool: E3_3_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-15",
  readingText: E3_3_CE_EMAIL_TEXT_15,
  questionPool: E3_3_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-16",
  readingText: E3_3_CE_EMAIL_TEXT_16,
  questionPool: E3_3_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-17",
  readingText: E3_3_CE_EMAIL_TEXT_17,
  questionPool: E3_3_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-18",
  readingText: E3_3_CE_EMAIL_TEXT_18,
  questionPool: E3_3_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-19",
  readingText: E3_3_CE_EMAIL_TEXT_19,
  questionPool: E3_3_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-20",
  readingText: E3_3_CE_EMAIL_TEXT_20,
  questionPool: E3_3_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-3-pee-1",
    title: "Confirmer son premier jour",
    situation: "Vous commencez un nouveau travail lundi.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Votre premier jour",
      body: "Bonjour,\nVous commencez le lundi 3 février à 8 h.\nMerci de confirmer votre venue.\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : confirmez votre venue, remerciez et posez une question sur le bus ou le parking.",
    points: ["La confirmation", "Un remerciement", "Une question sur le trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-2",
    title: "Prévenir d'un retard",
    situation: "Votre bus est en retard ce matin.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Réunion de 9 h",
      body: "Bonjour,\nLa réunion d'équipe commence à 9 h dans mon bureau.\nÀ tout à l'heure,\nM. Girard",
    },
    instruction: "Répondez à M. Girard : excusez-vous, expliquez que votre bus est en retard et dites à quelle heure vous arrivez.",
    points: ["L'excuse", "Le problème de bus", "Votre heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-3",
    title: "Déjeuner avec un collègue",
    situation: "Un collègue vous propose de manger ensemble.",
    sourceMessage: {
      from: "Paulo",
      subject: "On mange ensemble ?",
      body: "Salut,\nTu es libre à midi ? On peut manger ensemble à la cafétéria.\nPaulo",
    },
    instruction: "Répondez à Paulo : acceptez, proposez une heure et posez une question sur la cafétéria.",
    points: ["Votre accord", "Une heure", "Une question sur la cafétéria"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-4",
    title: "Demander des jours de congé",
    situation: "Le service du personnel prépare le planning des vacances.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Vos vacances d'été",
      body: "Bonjour,\nNous préparons le planning de l'été.\nQuelles dates de vacances voulez-vous ?\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : donnez vos dates de vacances, expliquez pourquoi et remerciez.",
    points: ["Vos dates", "Pourquoi ces dates", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-5",
    title: "Parler de son nouveau travail",
    situation: "Une amie vous pose des questions sur votre travail.",
    sourceMessage: {
      from: "Aïcha",
      subject: "Ton nouveau travail",
      body: "Salut !\nAlors, ce nouveau travail ? Les collègues sont sympas ?\nTu fais quels horaires ? Raconte-moi tout !\nAïcha",
    },
    instruction: "Répondez à Aïcha : décrivez votre travail, parlez de vos collègues et donnez vos horaires.",
    points: ["Votre travail", "Vos collègues", "Vos horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-6",
    title: "Répondre au changement d'horaire",
    situation: "Votre entreprise change les horaires de travail.",
    sourceMessage: {
      from: "Entreprise Batimex",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nÀ partir du mois prochain, le travail commence à 7 h 30.\nCet horaire vous convient-il ?\nLa direction",
    },
    instruction: "Répondez à la direction : dites si l'horaire vous convient, expliquez pourquoi et posez une question sur la pause de midi.",
    points: ["Votre réponse", "Pourquoi", "Une question sur la pause"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-7",
    title: "Organiser un covoiturage",
    situation: "Une collègue habite près de chez vous.",
    sourceMessage: {
      from: "Elena",
      subject: "Trajet en voiture",
      body: "Bonjour,\nJ'habite près de chez toi et je viens au travail en voiture.\nTu veux venir avec moi le matin ?\nElena",
    },
    instruction: "Répondez à Elena : acceptez, dites où vous habitez et proposez une heure de départ.",
    points: ["Votre accord", "Où vous habitez", "Une heure de départ"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-8",
    title: "Prévenir de son absence",
    situation: "Vous êtes malade et vous ne pouvez pas travailler.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Où êtes-vous ?",
      body: "Bonjour,\nVous n'êtes pas au bureau ce matin. Tout va bien ?\nM. Girard",
    },
    instruction: "Répondez à M. Girard : excusez-vous, expliquez que vous êtes malade et dites quand vous revenez au travail.",
    points: ["L'excuse", "Votre maladie", "Quand vous revenez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-9",
    title: "Participer au repas d'équipe",
    situation: "Vos collègues organisent un repas.",
    sourceMessage: {
      from: "Julie",
      subject: "Repas d'équipe vendredi",
      body: "Bonjour à tous,\nOn organise un repas d'équipe vendredi à 19 h au restaurant.\nQui vient ? Merci de répondre avant mercredi.\nJulie",
    },
    instruction: "Répondez à Julie : dites que vous venez, posez une question sur le restaurant et demandez le prix du repas.",
    points: ["Votre accord", "Une question sur le restaurant", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-10",
    title: "Aller chercher son badge",
    situation: "Votre badge d'entrée est prêt.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Votre badge",
      body: "Bonjour,\nVotre badge d'entrée est prêt à l'accueil.\nVous pouvez venir le chercher cette semaine, entre 8 h et 16 h.\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : remerciez, dites quand vous venez chercher le badge et demandez s'il faut apporter un document.",
    points: ["Un remerciement", "Quand vous venez", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-3-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e3-3-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
