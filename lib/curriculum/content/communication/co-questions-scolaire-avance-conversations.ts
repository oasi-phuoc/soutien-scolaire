import { buildPool, type COMultiQuestion } from "./co-questions-helpers";

/** CO avancé scolaire / B1 — conversations (exercices 1 à 14). */

export const SCOLAIRE_AVANCE_CONVERSATION_1 = buildPool("avance", "scolaire-conversation-1", [
  // 1 — QCM (livre)
  {
    id: "sac1-q1",
    textQ: "Antony a changé d'établissement…",
    text: ["À la rentrée", "En cours d'année", "À la fin de l'année"],
    textC: 1,
    img: ["Rentrée", "Milieu d'année", "Fin d'année"],
    imgC: 1,
    fillQ: "Antony a déménagé en ___ d'année.",
    fill: "milieu",
    fillA: ["milieu", "cours"],
  },
  // 2 — saisie (livre, sans nom de ville)
  {
    id: "sac1-q2",
    textQ: "Quelle est la passion d'Antony ?",
    text: ["Le rap", "Le théâtre", "Le sport"],
    textC: 0,
    img: ["Rap", "Théâtre", "Sport"],
    imgC: 0,
    fillQ: "Il adore faire du ___ .",
    fill: "rap",
    fillA: ["rap", "chanter", "musique"],
  },
  // 3 — QCM (livre, ville en choix multiples seulement)
  {
    id: "sac1-q3",
    textQ: "D'où vient Antony avant de déménager ?",
    text: ["D'une grande ville en Belgique", "Du sud de la France", "D'Allemagne"],
    textC: 0,
    img: ["Belgique", "France", "Allemagne"],
    imgC: 0,
    fillQ: "Avant, il habitait en ___ .",
    fill: "Belgique",
    fillA: ["belgique"],
  },
  // 4 — saisie argumentative (livre)
  {
    id: "sac1-q4",
    textQ: "Citez deux avantages du cours de musique, d'après Lucy.",
    text: ["Des instruments variés et de vrais concerts", "Des cours théoriques et des examens", "Une salle silencieuse et des devoirs"],
    textC: 0,
    img: ["Instruments et concerts", "Cours théoriques", "Devoirs"],
    imgC: 0,
    fillQ: "Lucy cite les instruments disponibles et la possibilité de faire des ___ .",
    fill: "concerts",
    fillA: ["concert", "concerts", "instrument", "guitare", "batterie", "prof", "genial", "professeur"],
  },
  // 5 — QCM (livre)
  {
    id: "sac1-q5",
    textQ: "La radio émet…",
    text: ["Uniquement dans le lycée", "Sur Internet", "Au lycée et dans la ville"],
    textC: 2,
    img: ["Lycée seul", "Internet", "Lycée et ville"],
    imgC: 2,
    fillQ: "On peut entendre la radio au lycée et dans presque tous les ___ de la ville.",
    fill: "quartiers",
    fillA: ["quartier", "quartiers"],
  },
  // 6 — saisie (livre, métier sans nom propre)
  {
    id: "sac1-q6",
    textQ: "Quel métier exerce le père de Lucy ?",
    text: ["Professeur de musique", "Rappeur célèbre", "Directeur de lycée"],
    textC: 1,
    img: ["Professeur", "Rappeur", "Directeur"],
    imgC: 1,
    fillQ: "Le père de Lucy est un célèbre ___ .",
    fill: "rappeur",
    fillA: ["rappeur", "chanteur", "artiste"],
  },
  // 7 — QCM (livre)
  {
    id: "sac1-q7",
    textQ: "À la fin du dialogue, Antony est…",
    text: ["Déçu", "Timide", "Impressionné"],
    textC: 2,
    img: ["Déçu", "Timide", "Impressionné"],
    imgC: 2,
    fillQ: "Antony dit qu'il ne pensait pas s'inscrire dans une ___ en se levant le matin.",
    fill: "radio",
    fillA: ["radio"],
  },
  // 8 — saisie argumentative
  {
    id: "sac1-q8",
    textQ: "Pourquoi Antony a-t-il déménagé ?",
    text: ["Ses parents sont venus pour un travail", "Il voulait changer d'école", "Il cherchait un groupe de rap"],
    textC: 0,
    img: ["Travail des parents", "Changement d'école", "Groupe de rap"],
    imgC: 0,
    fillQ: "Ses parents sont venus pour un ___ et il a dû les suivre.",
    fill: "travail",
    fillA: ["travail", "emploi", "parents"],
  },
  // 9 — QCM
  {
    id: "sac1-q9",
    textQ: "Que faut-il faire avant d'émettre à la radio du lycée ?",
    text: ["Demander un créneau horaire à la direction", "Payer des droits d'auteur", "Passer un examen"],
    textC: 0,
    img: ["Créneau", "Droits", "Examen"],
    imgC: 0,
    fillQ: "Il faut demander un créneau horaire à la ___ .",
    fill: "direction",
    fillA: ["direction"],
  },
  // 10 — saisie (objets / instruments)
  {
    id: "sac1-q10",
    textQ: "Quels instruments sont disponibles dans la salle de musique ?",
    text: ["Guitare électrique et batterie", "Piano et violon seulement", "Flûte et clarinette"],
    textC: 0,
    img: ["Guitare et batterie", "Piano et violon", "Flûte et clarinette"],
    imgC: 0,
    fillQ: "Lucy cite la guitare électrique et la ___ .",
    fill: "batterie",
    fillA: ["batterie", "guitare"],
  },
  // 11 — QCM
  {
    id: "sac1-q11",
    textQ: "Pourquoi Antony n'aimait-il pas l'école au début du dialogue ?",
    text: ["Il préfère ses amis et ses passions", "Il trouve les cours trop faciles", "Il veut rentrer chez lui"],
    textC: 0,
    img: ["Amis et passions", "Cours faciles", "Rentrer chez lui"],
    imgC: 0,
    fillQ: "Il préfère rester avec ses amis et faire des choses qu'il ___ .",
    fill: "aime",
    fillA: ["aime", "adore"],
  },
  // 12 — saisie argumentative
  {
    id: "sac1-q12",
    textQ: "Pourquoi Lucy arrive-t-elle à changer l'avis d'Antony sur le cours de musique ?",
    text: ["La salle n'est pas un cours habituel et on peut y faire de vrais concerts", "Le cours est obligatoire pour tous les élèves", "Le professeur est très sévère"],
    textC: 0,
    img: ["Salle spéciale", "Cours obligatoire", "Prof sévère"],
    imgC: 0,
    fillQ: "Ce n'est pas un cours habituel : il y a des instruments et on peut faire de vrais ___ .",
    fill: "concerts",
    fillA: ["concert", "concerts", "instrument", "salle", "pas habituel", "prof", "genial"],
  },
]);

export const SCOLAIRE_AVANCE_CONVERSATIONS_BOOK: Record<string, COMultiQuestion[]> = {
  "avance-scolaire-conversation-1": SCOLAIRE_AVANCE_CONVERSATION_1,
};
