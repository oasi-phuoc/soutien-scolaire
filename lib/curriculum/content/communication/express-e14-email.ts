import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E14 — Bilan A2 (achats, logement, démarches, invitations, activités, travail).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E14.1 — Bilan A2
   ════════════════════════════════════════════════════════════════════════════ */

const E14_1_CE_EMAIL_TEXT = `De : Accueil Horizon

Objet : Confirmation de rendez-vous — Bilan A2

Bonjour,

Votre rendez-vous est confirmé pour la visite d'un appartement.
Nous vous accueillerons le lundi 4 mars à 8 h 30 à l'adresse Rue des Lilas 12.
Mme Martin sera à l'entrée pour vous guider. Merci d'apporter votre dossier complet.

Merci,
Accueil Horizon`;

const E14_1_CE_EMAIL_POOL = buildExpressPool("e14-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Accueil Horizon", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Horizon",
    vfQ: "L'e-mail est envoyé par Accueil Horizon.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Confirmation de rendez-vous — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet parle de Confirmation de rendez-vous — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["visite d'un appartement", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "appartement",
    vfQ: "L'e-mail parle de visite d'un appartement.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["lundi 4 mars", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : lundi _________.",
    fill: "4",
    vfQ: "La date indiquée est lundi 4 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["8 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "8 h 30",
    fillA: ["8h30", "8 heures 30"],
    vfQ: "Le rendez-vous est à 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Rue des Lilas 12", "Garage Central", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Lilas",
    vfQ: "Le lieu indiqué est : Rue des Lilas 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre dossier complet", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "dossier",
    vfQ: "Il faut préparer votre dossier complet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_2_TEXT = `De : Mme Bernard

Objet : Documents à apporter — Bilan A2

Bonjour,

Pour préparer le rendez-vous chez le médecin, mettez votre carte d'assurance dans votre sac.
La rencontre aura lieu le mardi 12 mars à 9 h, au Cabinet Santé Plus.
Si vous avez une question, Dr Keller répond au 021 880 31 41.

Merci,
Mme Bernard`;

const E14_1_CE_EMAIL_2_POOL = buildExpressPool("e14-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Mme Bernard", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Bernard",
    vfQ: "L'e-mail est envoyé par Mme Bernard.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Documents à apporter — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Documents",
    vfQ: "L'objet parle de Documents à apporter — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rendez-vous chez le médecin", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "médecin",
    vfQ: "L'e-mail parle de rendez-vous chez le médecin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["mardi 12 mars", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : mardi _________.",
    fill: "12",
    vfQ: "La date indiquée est mardi 12 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["9 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "9 h",
    fillA: ["9h", "9 heures"],
    vfQ: "Le rendez-vous est à 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Cabinet Santé Plus", "Zoo municipal", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Santé",
    vfQ: "Le lieu indiqué est : Cabinet Santé Plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre carte d'assurance", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte d'assurance.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_3_TEXT = `De : Secrétariat Central

Objet : Changement d'horaire — Bilan A2

Bonjour,

L'horaire de la réunion des parents change légèrement.
Le nouveau rendez-vous est fixé au mercredi 20 mars à 9 h 15.
Le lieu reste École du Parc. Pensez à prévenir M. Favre si vous ne pouvez pas venir.

Merci,
Secrétariat Central`;

const E14_1_CE_EMAIL_3_POOL = buildExpressPool("e14-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Secrétariat Central", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Central",
    vfQ: "L'e-mail est envoyé par Secrétariat Central.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Changement d'horaire — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet parle de Changement d'horaire — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réunion des parents", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "parents",
    vfQ: "L'e-mail parle de réunion des parents.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["mercredi 20 mars", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : mercredi _________.",
    fill: "20",
    vfQ: "La date indiquée est mercredi 20 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["9 h 15", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "9 h 15",
    fillA: ["9h15", "9 heures 15"],
    vfQ: "Le rendez-vous est à 9 h 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["École du Parc", "Salle de sport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Parc",
    vfQ: "Le lieu indiqué est : École du Parc.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le carnet de liaison", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carnet",
    vfQ: "Il faut préparer le carnet de liaison.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_4_TEXT = `De : M. Lopez

Objet : Réponse à votre demande — Bilan A2

Bonjour,

Nous avons bien reçu votre demande concernant l'achat d'un billet de train.
Vous pouvez passer le jeudi 28 mars; l'accueil ouvrira à 10 h à la Gare de Lausanne.
Le dossier sera plus vite traité avec votre carte demi-tarif.

Merci,
M. Lopez`;

const E14_1_CE_EMAIL_4_POOL = buildExpressPool("e14-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["M. Lopez", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Lopez",
    vfQ: "L'e-mail est envoyé par M. Lopez.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Réponse à votre demande — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Réponse",
    vfQ: "L'objet parle de Réponse à votre demande — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["achat d'un billet de train", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "achat",
    vfQ: "L'e-mail parle de achat d'un billet de train.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["jeudi 28 mars", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : jeudi _________.",
    fill: "28",
    vfQ: "La date indiquée est jeudi 28 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["10 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "10 h",
    fillA: ["10h", "10 heures"],
    vfQ: "Le rendez-vous est à 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Gare de Lausanne", "Camping des Pins", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Gare",
    vfQ: "Le lieu indiqué est : Gare de Lausanne.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre carte demi-tarif", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte demi-tarif.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_5_TEXT = `De : Service administratif

Objet : Programme de la journée — Bilan A2

Bonjour,

Voici le déroulement prévu le vendredi 5 avril.
À 10 h 30, accueil à la Piscine du Lac. Ensuite, M. Nguyen présentera l'inscription au cours de natation.
La séance est courte; gardez simplement un bonnet de bain avec vous.

Merci,
Service administratif`;

const E14_1_CE_EMAIL_5_POOL = buildExpressPool("e14-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service administratif", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "administratif",
    vfQ: "L'e-mail est envoyé par Service administratif.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Programme de la journée — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Programme",
    vfQ: "L'objet parle de Programme de la journée — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["inscription au cours de natation", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "inscription",
    vfQ: "L'e-mail parle de inscription au cours de natation.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["vendredi 5 avril", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : vendredi _________.",
    fill: "5",
    vfQ: "La date indiquée est vendredi 5 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["10 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "10 h 30",
    fillA: ["10h30", "10 heures 30"],
    vfQ: "Le rendez-vous est à 10 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Piscine du Lac", "Cinéma Rex", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Piscine",
    vfQ: "Le lieu indiqué est : Piscine du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un bonnet de bain", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "bonnet",
    vfQ: "Il faut préparer un bonnet de bain.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_6_TEXT = `De : Mme Garcia

Objet : Rappel avant la visite — Bilan A2

Bonjour,

Petit rappel avant votre visite : la invitation à un anniversaire est bien prévu le samedi 13 avril.
Merci d'arriver à 11 h dans la Salle des Fêtes.
Karim vérifiera que votre dossier contient une boisson sans alcool.

Merci,
Mme Garcia`;

const E14_1_CE_EMAIL_6_POOL = buildExpressPool("e14-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Mme Garcia", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Garcia",
    vfQ: "L'e-mail est envoyé par Mme Garcia.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rappel avant la visite — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet parle de Rappel avant la visite — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["invitation à un anniversaire", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "invitation",
    vfQ: "L'e-mail parle de invitation à un anniversaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["samedi 13 avril", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : samedi _________.",
    fill: "13",
    vfQ: "La date indiquée est samedi 13 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["11 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "11 h",
    fillA: ["11h", "11 heures"],
    vfQ: "Le rendez-vous est à 11 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Salle des Fêtes", "Bureau de poste", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Fêtes",
    vfQ: "Le lieu indiqué est : Salle des Fêtes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une boisson sans alcool", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "boisson",
    vfQ: "Il faut préparer une boisson sans alcool.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_7_TEXT = `De : Bureau des inscriptions

Objet : Invitation à une réunion — Bilan A2

Bonjour,

Nous vous invitons à une réunion au sujet de le retour de livres à la bibliothèque.
Elle se tiendra le lundi 22 avril à 13 h 30, à la Bibliothèque Centrale.
Répondez avant vendredi et signalez à Mme Durand si les trois livres manque encore.

Merci,
Bureau des inscriptions`;

const E14_1_CE_EMAIL_7_POOL = buildExpressPool("e14-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Bureau des inscriptions", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "inscriptions",
    vfQ: "L'e-mail est envoyé par Bureau des inscriptions.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Invitation à une réunion — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet parle de Invitation à une réunion — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["retour de livres à la bibliothèque", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "retour",
    vfQ: "L'e-mail parle de retour de livres à la bibliothèque.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["lundi 22 avril", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : lundi _________.",
    fill: "22",
    vfQ: "La date indiquée est lundi 22 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["13 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "13 h 30",
    fillA: ["13h30", "13 heures 30"],
    vfQ: "Le rendez-vous est à 13 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Bibliothèque Centrale", "Stade Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Centrale",
    vfQ: "Le lieu indiqué est : Bibliothèque Centrale.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["les trois livres", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "trois",
    vfQ: "Il faut préparer les trois livres.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_8_TEXT = `De : M. Girard

Objet : Résultat de votre dossier — Bilan A2

Bonjour,

Votre dossier pour le tri des déchets du quartier est maintenant complet.
La prochaine étape se fera le mardi 30 avril à 14 h.
Rendez-vous à la Place du Marché; gardez un sac transparent avec vous jusqu'à la fin.

Merci,
M. Girard`;

const E14_1_CE_EMAIL_8_POOL = buildExpressPool("e14-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["M. Girard", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Girard",
    vfQ: "L'e-mail est envoyé par M. Girard.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Résultat de votre dossier — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résultat",
    vfQ: "L'objet parle de Résultat de votre dossier — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["tri des déchets du quartier", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "tri",
    vfQ: "L'e-mail parle de tri des déchets du quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["mardi 30 avril", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : mardi _________.",
    fill: "30",
    vfQ: "La date indiquée est mardi 30 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["14 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "14 h",
    fillA: ["14h", "14 heures"],
    vfQ: "Le rendez-vous est à 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Place du Marché", "Aéroport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Marché",
    vfQ: "Le lieu indiqué est : Place du Marché.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un sac transparent", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "sac",
    vfQ: "Il faut préparer un sac transparent.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_9_TEXT = `De : Service planning

Objet : Pièce manquante — Bilan A2

Bonjour,

Il manque encore votre pièce d'identité.
Vous pouvez le déposer le mercredi 8 mai à partir de 14 h 30, à la Banque Cantonale.
Demandez Mme Girard à l'accueil pour éviter une attente trop longue.

Merci,
Service planning`;

const E14_1_CE_EMAIL_9_POOL = buildExpressPool("e14-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service planning", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "planning",
    vfQ: "L'e-mail est envoyé par Service planning.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Pièce manquante — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Pièce",
    vfQ: "L'objet parle de Pièce manquante — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rendez-vous à la banque", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "à",
    vfQ: "L'e-mail parle de rendez-vous à la banque.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["mercredi 8 mai", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : mercredi _________.",
    fill: "8",
    vfQ: "La date indiquée est mercredi 8 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["14 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "14 h 30",
    fillA: ["14h30", "14 heures 30"],
    vfQ: "Le rendez-vous est à 14 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Banque Cantonale", "Musée d'art", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Banque",
    vfQ: "Le lieu indiqué est : Banque Cantonale.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre pièce d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "pièce",
    vfQ: "Il faut préparer votre pièce d'identité.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_10_TEXT = `De : Mme Nguyen

Objet : Nouveau créneau proposé — Bilan A2

Bonjour,

Le rendez-vous pour la garde d'un enfant après l'école est reporté.
Nous proposons maintenant le jeudi 16 mai à 15 h, toujours à l'Accueil Périscolaire.
Merci de confirmer votre présence à M. Lopez.

Merci,
Mme Nguyen`;

const E14_1_CE_EMAIL_10_POOL = buildExpressPool("e14-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Mme Nguyen", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Nguyen",
    vfQ: "L'e-mail est envoyé par Mme Nguyen.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Nouveau créneau proposé — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Nouveau",
    vfQ: "L'objet parle de Nouveau créneau proposé — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["garde d'un enfant après l'école", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "garde",
    vfQ: "L'e-mail parle de garde d'un enfant après l'école.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["jeudi 16 mai", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : jeudi _________.",
    fill: "16",
    vfQ: "La date indiquée est jeudi 16 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["15 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "15 h",
    fillA: ["15h", "15 heures"],
    vfQ: "Le rendez-vous est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Accueil Périscolaire", "Port de plaisance", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Périscolaire",
    vfQ: "Le lieu indiqué est : Accueil Périscolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le goûter de l'enfant", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "goûter",
    vfQ: "Il faut préparer le goûter de l'enfant.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_11_TEXT = `De : Accueil formation

Objet : Deux choix possibles — Bilan A2

Bonjour,

Deux choix étaient possibles pour le changement d'arrêt de bus.
Vous avez choisi le créneau du vendredi 24 mai à 15 h 30.
La rencontre aura lieu à l'Arrêt Pont-Neuf; apportez votre abonnement de bus.

Merci,
Accueil formation`;

const E14_1_CE_EMAIL_11_POOL = buildExpressPool("e14-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Accueil formation", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "formation",
    vfQ: "L'e-mail est envoyé par Accueil formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Deux choix possibles — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Deux",
    vfQ: "L'objet parle de Deux choix possibles — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["changement d'arrêt de bus", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "changement",
    vfQ: "L'e-mail parle de changement d'arrêt de bus.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["vendredi 24 mai", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : vendredi _________.",
    fill: "24",
    vfQ: "La date indiquée est vendredi 24 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["15 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "15 h 30",
    fillA: ["15h30", "15 heures 30"],
    vfQ: "Le rendez-vous est à 15 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Arrêt Pont-Neuf", "Garage Central", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Arrêt",
    vfQ: "Le lieu indiqué est : Arrêt Pont-Neuf.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre abonnement de bus", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "abonnement",
    vfQ: "Il faut préparer votre abonnement de bus.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_12_TEXT = `De : M. Robert

Objet : Suite à notre appel — Bilan A2

Bonjour,

Suite à notre appel, je résume les informations.
La commande à la pharmacie aura lieu le lundi 3 juin à 16 h, à la Pharmacie du Centre.
M. Bernard vous attendra avec la liste des participants.

Merci,
M. Robert`;

const E14_1_CE_EMAIL_12_POOL = buildExpressPool("e14-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["M. Robert", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Robert",
    vfQ: "L'e-mail est envoyé par M. Robert.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Suite à notre appel — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Suite",
    vfQ: "L'objet parle de Suite à notre appel — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["commande à la pharmacie", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "commande",
    vfQ: "L'e-mail parle de commande à la pharmacie.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["lundi 3 juin", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : lundi _________.",
    fill: "3",
    vfQ: "La date indiquée est lundi 3 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["16 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "16 h",
    fillA: ["16h", "16 heures"],
    vfQ: "Le rendez-vous est à 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Pharmacie du Centre", "Zoo municipal", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Pharmacie",
    vfQ: "Le lieu indiqué est : Pharmacie du Centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["l'ordonnance originale", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "ordonnance",
    vfQ: "Il faut préparer l'ordonnance originale.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_13_TEXT = `De : Service dossiers

Objet : Premier jour — Bilan A2

Bonjour,

Pour votre premier jour lié à le repas des voisins, arrivez un peu avant 16 h 30.
La date est le mardi 11 juin, et l'accueil se trouve au Jardin partagé.
Merci d'apporter un plat froid; cela facilitera l'inscription.

Merci,
Service dossiers`;

const E14_1_CE_EMAIL_13_POOL = buildExpressPool("e14-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service dossiers", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "dossiers",
    vfQ: "L'e-mail est envoyé par Service dossiers.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Premier jour — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Premier",
    vfQ: "L'objet parle de Premier jour — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["repas des voisins", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "repas",
    vfQ: "L'e-mail parle de repas des voisins.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["mardi 11 juin", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : mardi _________.",
    fill: "11",
    vfQ: "La date indiquée est mardi 11 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["16 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "16 h 30",
    fillA: ["16h30", "16 heures 30"],
    vfQ: "Le rendez-vous est à 16 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Jardin partagé", "Salle de sport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Jardin",
    vfQ: "Le lieu indiqué est : Jardin partagé.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un plat froid", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "plat",
    vfQ: "Il faut préparer un plat froid.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_14_TEXT = `De : Mme Moreau

Objet : Merci pour votre réponse — Bilan A2

Bonjour,

Merci pour votre réponse positive.
Votre place pour le cours de français du soir est gardée le mercredi 19 juin à 17 h.
Au centre horizon, Mme Perrin donnera les consignes et vérifiera votre cahier de cours.

Merci,
Mme Moreau`;

const E14_1_CE_EMAIL_14_POOL = buildExpressPool("e14-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Mme Moreau", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Moreau",
    vfQ: "L'e-mail est envoyé par Mme Moreau.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Merci pour votre réponse — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet parle de Merci pour votre réponse — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["cours de français du soir", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "français",
    vfQ: "L'e-mail parle de cours de français du soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["mercredi 19 juin", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : mercredi _________.",
    fill: "19",
    vfQ: "La date indiquée est mercredi 19 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["17 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "17 h",
    fillA: ["17h", "17 heures"],
    vfQ: "Le rendez-vous est à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Centre Horizon", "Camping des Pins", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Horizon",
    vfQ: "Le lieu indiqué est : Centre Horizon.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre cahier de cours", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "cahier",
    vfQ: "Il faut préparer votre cahier de cours.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_15_TEXT = `De : Équipe coordination

Objet : Contact à noter — Bilan A2

Bonjour,

Voici le contact à noter pour le nouvel horaire de travail : M. Robert.
Vous pouvez appeler le 021 880 44 54 seulement le matin.
La prochaine rencontre aura lieu le jeudi 27 juin à 17 h 30, au Bureau du personnel.

Merci,
Équipe coordination`;

const E14_1_CE_EMAIL_15_POOL = buildExpressPool("e14-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Équipe coordination", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "coordination",
    vfQ: "L'e-mail est envoyé par Équipe coordination.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Contact à noter — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Contact",
    vfQ: "L'objet parle de Contact à noter — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["nouvel horaire de travail", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "nouvel",
    vfQ: "L'e-mail parle de nouvel horaire de travail.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["jeudi 27 juin", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : jeudi _________.",
    fill: "27",
    vfQ: "La date indiquée est jeudi 27 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["17 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "17 h 30",
    fillA: ["17h30", "17 heures 30"],
    vfQ: "Le rendez-vous est à 17 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Bureau du personnel", "Cinéma Rex", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "personnel",
    vfQ: "Le lieu indiqué est : Bureau du personnel.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le planning signé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "planning",
    vfQ: "Il faut préparer le planning signé.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_16_TEXT = `De : M. Petit

Objet : Message au groupe — Bilan A2

Bonjour,

Message pour tout le groupe : La réparation du chauffage commence bientôt.
Soyez présent(e) le vendredi 5 juillet à 18 h, à l'Immeuble Bellevue.
Chaque personne prépare la clé de la cave; Mme Huber fera l'appel.

Merci,
M. Petit`;

const E14_1_CE_EMAIL_16_POOL = buildExpressPool("e14-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["M. Petit", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Petit",
    vfQ: "L'e-mail est envoyé par M. Petit.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Message au groupe — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet parle de Message au groupe — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réparation du chauffage", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "réparation",
    vfQ: "L'e-mail parle de réparation du chauffage.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["vendredi 5 juillet", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : vendredi _________.",
    fill: "5",
    vfQ: "La date indiquée est vendredi 5 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["18 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "18 h",
    fillA: ["18h", "18 heures"],
    vfQ: "Le rendez-vous est à 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Immeuble Bellevue", "Bureau de poste", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Immeuble",
    vfQ: "Le lieu indiqué est : Immeuble Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la clé de la cave", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "clé",
    vfQ: "Il faut préparer la clé de la cave.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_17_TEXT = `De : Service suivi

Objet : Résumé de la rencontre — Bilan A2

Bonjour,

Résumé de la rencontre : nous avons parlé de la démarche à la mairie.
Le groupe a choisi Mairie Annexe pour la suite.
La prochaine date est lundi 15 juillet à 18 h 30. À faire avant : préparer le formulaire rempli.

Merci,
Service suivi`;

const E14_1_CE_EMAIL_17_POOL = buildExpressPool("e14-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service suivi", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "suivi",
    vfQ: "L'e-mail est envoyé par Service suivi.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Résumé de la rencontre — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résumé",
    vfQ: "L'objet parle de Résumé de la rencontre — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["démarche à la mairie", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "démarche",
    vfQ: "L'e-mail parle de démarche à la mairie.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["lundi 15 juillet", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : lundi _________.",
    fill: "15",
    vfQ: "La date indiquée est lundi 15 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["18 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "18 h 30",
    fillA: ["18h30", "18 heures 30"],
    vfQ: "Le rendez-vous est à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Mairie Annexe", "Stade Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Mairie",
    vfQ: "Le lieu indiqué est : Mairie Annexe.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le formulaire rempli", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "formulaire",
    vfQ: "Il faut préparer le formulaire rempli.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_18_TEXT = `De : Mme Leroy

Objet : Rendez-vous individuel — Bilan A2

Bonjour,

Votre rendez-vous individuel avec Mme Costa est fixé.
Il concerne le marché de légumes. Venez le mardi 23 juillet à 19 h, au Marché couvert.
N'oubliez pas un sac de courses.

Merci,
Mme Leroy`;

const E14_1_CE_EMAIL_18_POOL = buildExpressPool("e14-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Mme Leroy", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Leroy",
    vfQ: "L'e-mail est envoyé par Mme Leroy.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Rendez-vous individuel — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez-vous",
    vfQ: "L'objet parle de Rendez-vous individuel — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["marché de légumes", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "marché",
    vfQ: "L'e-mail parle de marché de légumes.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["mardi 23 juillet", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : mardi _________.",
    fill: "23",
    vfQ: "La date indiquée est mardi 23 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["19 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "19 h",
    fillA: ["19h", "19 heures"],
    vfQ: "Le rendez-vous est à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Marché couvert", "Aéroport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Marché",
    vfQ: "Le lieu indiqué est : Marché couvert.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un sac de courses", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "sac",
    vfQ: "Il faut préparer un sac de courses.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_19_TEXT = `De : Accueil principal

Objet : Solution proposée — Bilan A2

Bonjour,

Nous avons trouvé une solution pour la réservation d'un week-end.
Vous pouvez passer le mercredi 31 juillet à 19 h 30 à l'Hôtel du Port.
M. Simon vous expliquera la suite; apportez aussi la confirmation de réservation.

Merci,
Accueil principal`;

const E14_1_CE_EMAIL_19_POOL = buildExpressPool("e14-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Accueil principal", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "principal",
    vfQ: "L'e-mail est envoyé par Accueil principal.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Solution proposée — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Solution",
    vfQ: "L'objet parle de Solution proposée — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réservation d'un week-end", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "réservation",
    vfQ: "L'e-mail parle de réservation d'un week-end.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["mercredi 31 juillet", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : mercredi _________.",
    fill: "31",
    vfQ: "La date indiquée est mercredi 31 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["19 h 30", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "19 h 30",
    fillA: ["19h30", "19 heures 30"],
    vfQ: "Le rendez-vous est à 19 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Hôtel du Port", "Musée d'art", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Hôtel",
    vfQ: "Le lieu indiqué est : Hôtel du Port.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la confirmation de réservation", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "confirmation",
    vfQ: "Il faut préparer la confirmation de réservation.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_20_TEXT = `De : M. Simon

Objet : Dernières informations — Bilan A2

Bonjour,

Dernières informations avant le sac perdu dans le bus.
Le rendez-vous est confirmé pour le jeudi 8 août à 20 h.
Le lieu est Service des objets trouvés, le contact est Mme Leroy, et le document à préparer est une description du sac.

Merci,
M. Simon`;

const E14_1_CE_EMAIL_20_POOL = buildExpressPool("e14-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Qui envoie l'e-mail ?",
    text: ["M. Simon", "La bibliothèque", "Un voisin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________.",
    fill: "Simon",
    vfQ: "L'e-mail est envoyé par M. Simon.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est l'objet de l'e-mail ?",
    text: ["Dernières informations — Bilan A2", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernières",
    vfQ: "L'objet parle de Dernières informations — Bilan A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["sac perdu dans le bus", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "sac",
    vfQ: "L'e-mail parle de sac perdu dans le bus.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour est indiqué ?",
    text: ["jeudi 8 août", "dimanche 1 septembre", "samedi 25 décembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Date : jeudi _________.",
    fill: "8",
    vfQ: "La date indiquée est jeudi 8 août.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["20 h", "7 h", "22 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Heure : _________.",
    fill: "20 h",
    fillA: ["20h", "20 heures"],
    vfQ: "Le rendez-vous est à 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où faut-il aller ?",
    text: ["Service des objets trouvés", "Port de plaisance", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "objets",
    vfQ: "Le lieu indiqué est : Service des objets trouvés.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une description du sac", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "description",
    vfQ: "Il faut préparer une description du sac.",
    vfC: 0,
  }),
]);

export const E14_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e14-1-ce-email",
  readingText: E14_1_CE_EMAIL_TEXT,
  questionPool: E14_1_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e14-1-ce-email-2",
  readingText: E14_1_CE_EMAIL_2_TEXT,
  questionPool: E14_1_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-3",
  readingText: E14_1_CE_EMAIL_3_TEXT,
  questionPool: E14_1_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-4",
  readingText: E14_1_CE_EMAIL_4_TEXT,
  questionPool: E14_1_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-5",
  readingText: E14_1_CE_EMAIL_5_TEXT,
  questionPool: E14_1_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-6",
  readingText: E14_1_CE_EMAIL_6_TEXT,
  questionPool: E14_1_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-7",
  readingText: E14_1_CE_EMAIL_7_TEXT,
  questionPool: E14_1_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-8",
  readingText: E14_1_CE_EMAIL_8_TEXT,
  questionPool: E14_1_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-9",
  readingText: E14_1_CE_EMAIL_9_TEXT,
  questionPool: E14_1_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-10",
  readingText: E14_1_CE_EMAIL_10_TEXT,
  questionPool: E14_1_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-11",
  readingText: E14_1_CE_EMAIL_11_TEXT,
  questionPool: E14_1_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-12",
  readingText: E14_1_CE_EMAIL_12_TEXT,
  questionPool: E14_1_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-13",
  readingText: E14_1_CE_EMAIL_13_TEXT,
  questionPool: E14_1_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-14",
  readingText: E14_1_CE_EMAIL_14_TEXT,
  questionPool: E14_1_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-15",
  readingText: E14_1_CE_EMAIL_15_TEXT,
  questionPool: E14_1_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-16",
  readingText: E14_1_CE_EMAIL_16_TEXT,
  questionPool: E14_1_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-17",
  readingText: E14_1_CE_EMAIL_17_TEXT,
  questionPool: E14_1_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-18",
  readingText: E14_1_CE_EMAIL_18_TEXT,
  questionPool: E14_1_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-19",
  readingText: E14_1_CE_EMAIL_19_TEXT,
  questionPool: E14_1_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e14-1-ce-email-20",
  readingText: E14_1_CE_EMAIL_20_TEXT,
  questionPool: E14_1_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E14_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e14-1-pee-1",
    title: "Répondre à une invitation à une crémaillère",
    situation: "Un ami vous invite à sa crémaillère.",
    sourceMessage: {
      from: "Karim",
      subject: "Crémaillère samedi 7 juin",
      body: "Bonjour,\nJ'ai déménagé à Lausanne et j'organise une crémaillère le samedi 7 juin à 18 h.\nTu peux venir ? Apporte quelque chose à boire !\nKarim",
    },
    instruction: "Répondez à Karim : acceptez l'invitation, dites ce que vous apportez et posez une question sur l'adresse ou l'étage.",
    points: ["Votre accord", "Ce que vous apportez", "Une question sur l'adresse ou l'étage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-2",
    title: "Organiser une visite d'appartement",
    situation: "Une régie immobilière vous propose deux horaires de visite.",
    sourceMessage: {
      from: "Régie Immobilière du Parc",
      subject: "Visite de l'appartement",
      body: "Bonjour,\nNous pouvons vous proposer une visite de l'appartement mercredi à 17 h ou samedi à 10 h.\nQuel horaire vous convient ?\nLa Régie du Parc",
    },
    instruction: "Répondez à la régie : choisissez un horaire, confirmez votre présence et posez deux questions sur l'appartement (loyer, charges, étage…).",
    points: ["L'horaire choisi", "La confirmation", "Deux questions sur l'appartement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-3",
    title: "Confirmer un entretien d'embauche",
    situation: "Une entreprise vous invite à un entretien.",
    sourceMessage: {
      from: "Mme Perret",
      subject: "Entretien d'embauche",
      body: "Bonjour,\nNous avons bien reçu votre candidature pour le poste de vendeur / vendeuse.\nPouvez-vous venir à un entretien lundi prochain à 14 h ?\nMme Perret",
    },
    instruction: "Répondez à Mme Perret : confirmez votre présence à l'entretien, remerciez-la et demandez quels documents il faut apporter.",
    points: ["La confirmation", "Un remerciement", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-4",
    title: "Signaler un problème de commande",
    situation: "Une boutique en ligne vous demande si votre colis est bien arrivé.",
    sourceMessage: {
      from: "Boutique Mode & Co",
      subject: "Votre commande n° 4521",
      body: "Bonjour,\nVotre colis a été livré lundi.\nÊtes-vous satisfait(e) de votre commande ?\nLa Boutique Mode & Co",
    },
    instruction: "Répondez à la boutique : expliquez le problème (par exemple une mauvaise taille), demandez un échange ou un remboursement et rappelez le numéro de commande.",
    points: ["Le problème", "L'échange ou le remboursement", "Le numéro de commande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-5",
    title: "Annoncer un changement d'adresse",
    situation: "L'administration communale vous écrit après votre déménagement.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre changement d'adresse",
      body: "Bonjour,\nPour enregistrer votre nouvelle adresse, vous devez passer au guichet avec vos documents.\nLe guichet est ouvert du lundi au vendredi, de 8 h à 16 h.\nL'Administration communale",
    },
    instruction: "Répondez à l'administration : dites quel jour vous passez au guichet, demandez quels documents il faut apporter et posez une question sur le prix.",
    points: ["Le jour de votre visite", "Une question sur les documents", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-6",
    title: "Participer à une fête surprise",
    situation: "Une amie organise une fête surprise pour un ami commun.",
    sourceMessage: {
      from: "Sophie",
      subject: "Anniversaire de Paul",
      body: "Coucou,\nSamedi prochain, j'organise une fête surprise pour les 30 ans de Paul.\nTu peux venir ? On cherche aussi une idée de cadeau commun.\nSophie",
    },
    instruction: "Répondez à Sophie : acceptez l'invitation, proposez une idée de cadeau commun et demandez l'heure et le lieu de la fête.",
    points: ["Votre accord", "Une idée de cadeau", "Une question sur l'heure et le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-7",
    title: "S'inscrire à une randonnée",
    situation: "Un club de randonnée annonce sa sortie de dimanche.",
    sourceMessage: {
      from: "Club de randonnée Les Sommets",
      subject: "Sortie de dimanche",
      body: "Bonjour,\nDimanche, nous organisons une randonnée en montagne.\nPour vous inscrire, répondez à cet e-mail avant vendredi.\nLe Club Les Sommets",
    },
    instruction: "Répondez au club : inscrivez-vous à la sortie, indiquez votre niveau de marche et posez une question sur le matériel et l'heure de départ.",
    points: ["Votre inscription", "Votre niveau", "Une question sur le matériel et l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-8",
    title: "Décrire son nouveau travail",
    situation: "Une amie veut des nouvelles de votre nouveau travail.",
    sourceMessage: {
      from: "Elif",
      subject: "Ton nouveau travail ?",
      body: "Salut,\nTu as commencé ton nouveau travail le mois dernier, non ?\nÇa se passe bien ? Raconte-moi !\nElif",
    },
    instruction: "Répondez à Elif : décrivez votre nouveau travail, parlez de vos horaires et de vos collègues, et dites ce que vous aimez le plus.",
    points: ["Le travail", "Les horaires et les collègues", "Ce que vous aimez le plus"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-9",
    title: "Aider un ami à déménager",
    situation: "Un ami déménage samedi et demande de l'aide.",
    sourceMessage: {
      from: "Marco",
      subject: "Besoin d'aide pour déménager",
      body: "Salut !\nJe déménage samedi prochain et j'ai besoin d'aide pour porter les cartons.\nTu es libre ? J'offre les pizzas le soir !\nMarco",
    },
    instruction: "Répondez à Marco : acceptez de l'aider, dites à quelle heure vous êtes disponible et proposez votre voiture ou des cartons.",
    points: ["Votre accord", "Votre disponibilité", "Votre voiture ou des cartons"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-10",
    title: "Répondre à un remerciement",
    situation: "Une amie vous remercie après votre soirée.",
    sourceMessage: {
      from: "Nour",
      subject: "Merci pour la soirée !",
      body: "Bonjour,\nMerci beaucoup pour la soirée de samedi, c'était très réussi !\nLe repas était délicieux. Il faut qu'on se revoie bientôt !\nNour",
    },
    instruction: "Répondez à Nour : dites que vous êtes content(e) de sa visite, remerciez-la pour son message et proposez une prochaine activité ensemble.",
    points: ["Votre plaisir", "Un remerciement", "Une prochaine activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-11",
    title: "Répondre — bilan A2 (11)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-12",
    title: "Répondre — bilan A2 (12)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-13",
    title: "Répondre — bilan A2 (13)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-14",
    title: "Répondre — bilan A2 (14)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-15",
    title: "Répondre — bilan A2 (15)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-16",
    title: "Répondre — bilan A2 (16)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-17",
    title: "Répondre — bilan A2 (17)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-18",
    title: "Répondre — bilan A2 (18)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-19",
    title: "Répondre — bilan A2 (19)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e14-1-pee-20",
    title: "Répondre — bilan A2 (20)",
    situation: "Vous avez reçu un e-mail concernant bilan A2.",
sourceMessage: {
  from: "Service Bilan a2",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bilan A2.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
