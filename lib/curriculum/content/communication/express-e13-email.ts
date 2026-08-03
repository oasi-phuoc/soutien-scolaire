import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E13 — Monde professionnel (formation, stage, emploi, entretien, intégration).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E13.1 — Suivre une formation
   ════════════════════════════════════════════════════════════════════════════ */

const E13_1_CE_EMAIL_TEXT = `De : Accueil Horizon

Objet : Confirmation de rendez-vous — Suivre une formation

Bonjour,

Votre rendez-vous est confirmé pour la formation de bureautique.
Nous vous accueillerons le lundi 4 mars à 8 h 30 au Centre Horizon.
Mme Rochat sera à l'entrée pour vous guider. Merci d'apporter votre carte d'identité.

Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Merci,
Accueil Horizon`;

const E13_1_CE_EMAIL_POOL = buildExpressPool("e13-1-ce-email", [
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
    text: ["Confirmation de rendez-vous — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet parle de Confirmation de rendez-vous — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["formation de bureautique", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "bureautique",
    vfQ: "L'e-mail parle de formation de bureautique.",
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
    text: ["Centre Horizon", "Piscine municipale", "Au stade municipal"],
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
    text: ["votre carte d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte d'identité.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_2_TEXT = `De : Mme Bernard

Objet : Documents à apporter — Suivre une formation

Bonjour,

Pour préparer l'atelier de français professionnel, mettez votre CV simple dans votre sac.
La rencontre aura lieu le mardi 12 mars à 9 h, dans la Salle Jura.
Si vous avez une question, M. Diallo répond au 021 610 31 41.

Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Merci,
Mme Bernard`;

const E13_1_CE_EMAIL_2_POOL = buildExpressPool("e13-1-ce-email-2", [
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
    text: ["Documents à apporter — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Documents",
    vfQ: "L'objet parle de Documents à apporter — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier de français professionnel", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "français",
    vfQ: "L'e-mail parle de atelier de français professionnel.",
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
    text: ["Salle Jura", "Restaurant du Lac", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Jura",
    vfQ: "Le lieu indiqué est : Salle Jura.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV simple", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV simple.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_3_TEXT = `De : Secrétariat Central

Objet : Changement d'horaire — Suivre une formation

Bonjour,

L'horaire de le cours Excel débutant change légèrement.
Le nouveau rendez-vous est fixé au mercredi 20 mars à 9 h 15.
Le lieu reste Bureau CPF. Pensez à prévenir Mme Perrin si vous ne pouvez pas venir.

Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Merci,
Secrétariat Central`;

const E13_1_CE_EMAIL_3_POOL = buildExpressPool("e13-1-ce-email-3", [
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
    text: ["Changement d'horaire — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet parle de Changement d'horaire — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["cours Excel débutant", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "Excel",
    vfQ: "L'e-mail parle de cours Excel débutant.",
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
    text: ["Bureau CPF", "Cinéma Rex", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "CPF",
    vfQ: "Le lieu indiqué est : Bureau CPF.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre numéro AVS", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "numéro",
    vfQ: "Il faut préparer votre numéro AVS.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_4_TEXT = `De : M. Lopez

Objet : Réponse à votre demande — Suivre une formation

Bonjour,

Nous avons bien reçu votre demande concernant la séance sur le CPF.
Vous pouvez passer le jeudi 28 mars; l'accueil ouvrira à 10 h à l'École des Métiers.
Le dossier sera plus vite traité avec une copie du diplôme.

Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Nous restons disponibles pour vous aider.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci,
M. Lopez`;

const E13_1_CE_EMAIL_4_POOL = buildExpressPool("e13-1-ce-email-4", [
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
    text: ["Réponse à votre demande — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Réponse",
    vfQ: "L'objet parle de Réponse à votre demande — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["séance sur le CPF", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "CPF",
    vfQ: "L'e-mail parle de séance sur le CPF.",
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
    text: ["École des Métiers", "Gare routière", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Métiers",
    vfQ: "Le lieu indiqué est : École des Métiers.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une copie du diplôme", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "copie",
    vfQ: "Il faut préparer une copie du diplôme.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_5_TEXT = `De : Service administratif

Objet : Programme de la journée — Suivre une formation

Bonjour,

Voici le déroulement prévu le vendredi 5 avril.
À 10 h 30, accueil à Maison de quartier. Ensuite, Mme Rossi présentera la formation courte en cuisine.
La séance est courte; gardez simplement un stylo bleu avec vous.

Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Merci,
Service administratif`;

const E13_1_CE_EMAIL_5_POOL = buildExpressPool("e13-1-ce-email-5", [
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
    text: ["Programme de la journée — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Programme",
    vfQ: "L'objet parle de Programme de la journée — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["formation courte en cuisine", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "courte",
    vfQ: "L'e-mail parle de formation courte en cuisine.",
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
    text: ["Maison de quartier", "Stade Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Maison",
    vfQ: "Le lieu indiqué est : Maison de quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un stylo bleu", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "stylo",
    vfQ: "Il faut préparer un stylo bleu.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_6_TEXT = `De : Mme Garcia

Objet : Rappel avant la visite — Suivre une formation

Bonjour,

Petit rappel avant votre visite : le module de sécurité au travail est bien prévu le samedi 13 avril.
Merci d'arriver à 11 h dans la Salle Léman.
M. Meyer vérifiera que votre dossier contient votre attestation CPF.

C'est important pour moi, merci de lire jusqu'à la fin.
Tu peux partager ce message si besoin.
Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.
On se voit bientôt, j'ai hâte.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci,
Mme Garcia`;

const E13_1_CE_EMAIL_6_POOL = buildExpressPool("e13-1-ce-email-6", [
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
    text: ["Rappel avant la visite — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet parle de Rappel avant la visite — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["module de sécurité au travail", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "module",
    vfQ: "L'e-mail parle de module de sécurité au travail.",
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
    text: ["Salle Léman", "Piscine municipale", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Léman",
    vfQ: "Le lieu indiqué est : Salle Léman.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre attestation CPF", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "attestation",
    vfQ: "Il faut préparer votre attestation CPF.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_7_TEXT = `De : Bureau des inscriptions

Objet : Invitation à une réunion — Suivre une formation

Bonjour,

Nous vous invitons à une réunion au sujet de le cours du soir en informatique.
Elle se tiendra le lundi 22 avril à 13 h 30, au Centre Horizon.
Répondez avant vendredi et signalez à Mme Rochat si votre carte d'identité manque encore.

Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci,
Bureau des inscriptions`;

const E13_1_CE_EMAIL_7_POOL = buildExpressPool("e13-1-ce-email-7", [
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
    text: ["Invitation à une réunion — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet parle de Invitation à une réunion — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["cours du soir en informatique", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "soir",
    vfQ: "L'e-mail parle de cours du soir en informatique.",
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
    text: ["Centre Horizon", "Restaurant du Lac", "Au stade municipal"],
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
    text: ["votre carte d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte d'identité.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_8_TEXT = `De : M. Girard

Objet : Résultat de votre dossier — Suivre une formation

Bonjour,

Votre dossier pour l'atelier pour changer de métier est maintenant complet.
La prochaine étape se fera le mardi 30 avril à 14 h.
Rendez-vous dans la Salle Jura; gardez votre CV simple avec vous jusqu'à la fin.

Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Je prépare déjà tout pour que ce soit prêt.
Si tu veux, on peut faire une liste ensemble.
Le budget reste simple et raisonnable.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
Merci,
M. Girard`;

const E13_1_CE_EMAIL_8_POOL = buildExpressPool("e13-1-ce-email-8", [
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
    text: ["Résultat de votre dossier — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résultat",
    vfQ: "L'objet parle de Résultat de votre dossier — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier pour changer de métier", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "changer",
    vfQ: "L'e-mail parle de atelier pour changer de métier.",
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
    text: ["Salle Jura", "Cinéma Rex", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Jura",
    vfQ: "Le lieu indiqué est : Salle Jura.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV simple", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV simple.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_9_TEXT = `De : Service planning

Objet : Pièce manquante — Suivre une formation

Bonjour,

Il manque encore votre numéro AVS.
Vous pouvez le déposer le mercredi 8 mai à partir de 14 h 30, au Bureau CPF.
Demandez Mme Perrin à l'accueil pour éviter une attente trop longue.

Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Merci,
Service planning`;

const E13_1_CE_EMAIL_9_POOL = buildExpressPool("e13-1-ce-email-9", [
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
    text: ["Pièce manquante — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Pièce",
    vfQ: "L'objet parle de Pièce manquante — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["formation d'aide à domicile", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "aide",
    vfQ: "L'e-mail parle de formation d'aide à domicile.",
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
    text: ["Bureau CPF", "Gare routière", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "CPF",
    vfQ: "Le lieu indiqué est : Bureau CPF.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre numéro AVS", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "numéro",
    vfQ: "Il faut préparer votre numéro AVS.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_10_TEXT = `De : Mme Nguyen

Objet : Nouveau créneau proposé — Suivre une formation

Bonjour,

Le rendez-vous pour le test de niveau A2 est reporté.
Nous proposons maintenant le jeudi 16 mai à 15 h, toujours à l'École des Métiers.
Merci de confirmer votre présence à M. Favre.

Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Joignez les documents demandés si nécessaire.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci,
Mme Nguyen`;

const E13_1_CE_EMAIL_10_POOL = buildExpressPool("e13-1-ce-email-10", [
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
    text: ["Nouveau créneau proposé — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Nouveau",
    vfQ: "L'objet parle de Nouveau créneau proposé — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["test de niveau A2", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "test",
    vfQ: "L'e-mail parle de test de niveau A2.",
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
    text: ["École des Métiers", "Stade Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Métiers",
    vfQ: "Le lieu indiqué est : École des Métiers.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une copie du diplôme", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "copie",
    vfQ: "Il faut préparer une copie du diplôme.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_11_TEXT = `De : Accueil formation

Objet : Deux choix possibles — Suivre une formation

Bonjour,

Deux choix étaient possibles pour la présentation des formations gratuites.
Vous avez choisi le créneau du vendredi 24 mai à 15 h 30.
La rencontre aura lieu à Maison de quartier; apportez un stylo bleu.

Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Merci,
Accueil formation`;

const E13_1_CE_EMAIL_11_POOL = buildExpressPool("e13-1-ce-email-11", [
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
    text: ["Deux choix possibles — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Deux",
    vfQ: "L'objet parle de Deux choix possibles — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["présentation des formations gratuites", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "formations",
    vfQ: "L'e-mail parle de présentation des formations gratuites.",
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
    text: ["Maison de quartier", "Piscine municipale", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Maison",
    vfQ: "Le lieu indiqué est : Maison de quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un stylo bleu", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "stylo",
    vfQ: "Il faut préparer un stylo bleu.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_12_TEXT = `De : M. Robert

Objet : Suite à notre appel — Suivre une formation

Bonjour,

Suite à notre appel, je résume les informations.
Le cours de calcul professionnel aura lieu le lundi 3 juin à 16 h, dans la Salle Léman.
M. Meyer vous attendra avec la liste des participants.

N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Merci d'avance pour ta réponse.
Je suis disponible après 18 heures.
Passe le bonjour à tout le monde de ma part.
À très bientôt, prends soin de toi.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Merci,
M. Robert`;

const E13_1_CE_EMAIL_12_POOL = buildExpressPool("e13-1-ce-email-12", [
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
    text: ["Suite à notre appel — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Suite",
    vfQ: "L'objet parle de Suite à notre appel — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["cours de calcul professionnel", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "calcul",
    vfQ: "L'e-mail parle de cours de calcul professionnel.",
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
    text: ["Salle Léman", "Restaurant du Lac", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Léman",
    vfQ: "Le lieu indiqué est : Salle Léman.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre attestation CPF", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "attestation",
    vfQ: "Il faut préparer votre attestation CPF.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_13_TEXT = `De : Service dossiers

Objet : Premier jour — Suivre une formation

Bonjour,

Pour votre premier jour lié à l'atelier pour remplir un dossier, arrivez un peu avant 16 h 30.
La date est le mardi 11 juin, et l'accueil se trouve au Centre Horizon.
Merci d'apporter votre carte d'identité; cela facilitera l'inscription.

Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci,
Service dossiers`;

const E13_1_CE_EMAIL_13_POOL = buildExpressPool("e13-1-ce-email-13", [
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
    text: ["Premier jour — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Premier",
    vfQ: "L'objet parle de Premier jour — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier pour remplir un dossier", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "remplir",
    vfQ: "L'e-mail parle de atelier pour remplir un dossier.",
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
    text: ["Centre Horizon", "Cinéma Rex", "Au stade municipal"],
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
    text: ["votre carte d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte d'identité.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_14_TEXT = `De : Mme Moreau

Objet : Merci pour votre réponse — Suivre une formation

Bonjour,

Merci pour votre réponse positive.
Votre place pour la formation en vente est gardée le mercredi 19 juin à 17 h.
Dans la salle jura, M. Diallo donnera les consignes et vérifiera votre CV simple.

Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
Merci,
Mme Moreau`;

const E13_1_CE_EMAIL_14_POOL = buildExpressPool("e13-1-ce-email-14", [
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
    text: ["Merci pour votre réponse — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet parle de Merci pour votre réponse — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["formation en vente", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "en",
    vfQ: "L'e-mail parle de formation en vente.",
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
    text: ["Salle Jura", "Gare routière", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Jura",
    vfQ: "Le lieu indiqué est : Salle Jura.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV simple", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV simple.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_15_TEXT = `De : Équipe coordination

Objet : Contact à noter — Suivre une formation

Bonjour,

Voici le contact à noter pour la séance de conseil individuel : Mme Perrin.
Vous pouvez appeler le 021 610 44 54 seulement le matin.
La prochaine rencontre aura lieu le jeudi 27 juin à 17 h 30, au Bureau CPF.

En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Merci,
Équipe coordination`;

const E13_1_CE_EMAIL_15_POOL = buildExpressPool("e13-1-ce-email-15", [
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
    text: ["Contact à noter — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Contact",
    vfQ: "L'objet parle de Contact à noter — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["séance de conseil individuel", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "conseil",
    vfQ: "L'e-mail parle de séance de conseil individuel.",
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
    text: ["Bureau CPF", "Stade Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "CPF",
    vfQ: "Le lieu indiqué est : Bureau CPF.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre numéro AVS", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "numéro",
    vfQ: "Il faut préparer votre numéro AVS.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_16_TEXT = `De : M. Petit

Objet : Message au groupe — Suivre une formation

Bonjour,

Message pour tout le groupe : Le cours de communication au travail commence bientôt.
Soyez présent(e) le vendredi 5 juillet à 18 h, à l'École des Métiers.
Chaque personne prépare une copie du diplôme; M. Favre fera l'appel.

Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Merci,
M. Petit`;

const E13_1_CE_EMAIL_16_POOL = buildExpressPool("e13-1-ce-email-16", [
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
    text: ["Message au groupe — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet parle de Message au groupe — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["cours de communication au travail", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "communication",
    vfQ: "L'e-mail parle de cours de communication au travail.",
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
    text: ["École des Métiers", "Piscine municipale", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Métiers",
    vfQ: "Le lieu indiqué est : École des Métiers.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une copie du diplôme", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "copie",
    vfQ: "Il faut préparer une copie du diplôme.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_17_TEXT = `De : Service suivi

Objet : Résumé de la rencontre — Suivre une formation

Bonjour,

Résumé de la rencontre : nous avons parlé de le bilan avant inscription.
Le groupe a choisi Maison de quartier pour la suite.
La prochaine date est lundi 15 juillet à 18 h 30. À faire avant : préparer un stylo bleu.

Les documents se téléchargent aussi en ligne.
Le numéro d'urgence est affiché partout.
Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci,
Service suivi`;

const E13_1_CE_EMAIL_17_POOL = buildExpressPool("e13-1-ce-email-17", [
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
    text: ["Résumé de la rencontre — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résumé",
    vfQ: "L'objet parle de Résumé de la rencontre — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["bilan avant inscription", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "bilan",
    vfQ: "L'e-mail parle de bilan avant inscription.",
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
    text: ["Maison de quartier", "Restaurant du Lac", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Maison",
    vfQ: "Le lieu indiqué est : Maison de quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un stylo bleu", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "stylo",
    vfQ: "Il faut préparer un stylo bleu.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_18_TEXT = `De : Mme Leroy

Objet : Rendez-vous individuel — Suivre une formation

Bonjour,

Votre rendez-vous individuel avec M. Meyer est fixé.
Il concerne l'atelier sur les horaires de cours. Venez le mardi 23 juillet à 19 h, dans la Salle Léman.
N'oubliez pas votre attestation CPF.

Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Merci,
Mme Leroy`;

const E13_1_CE_EMAIL_18_POOL = buildExpressPool("e13-1-ce-email-18", [
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
    text: ["Rendez-vous individuel — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez-vous",
    vfQ: "L'objet parle de Rendez-vous individuel — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier sur les horaires de cours", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "horaires",
    vfQ: "L'e-mail parle de atelier sur les horaires de cours.",
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
    text: ["Salle Léman", "Cinéma Rex", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Léman",
    vfQ: "Le lieu indiqué est : Salle Léman.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre attestation CPF", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "attestation",
    vfQ: "Il faut préparer votre attestation CPF.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_19_TEXT = `De : Accueil principal

Objet : Solution proposée — Suivre une formation

Bonjour,

Nous avons trouvé une solution pour la visite du centre de formation.
Vous pouvez passer le mercredi 31 juillet à 19 h 30 au Centre Horizon.
Mme Rochat vous expliquera la suite; apportez aussi votre carte d'identité.

Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Un agent peut vous accompagner jusqu'au bon guichet.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Merci,
Accueil principal`;

const E13_1_CE_EMAIL_19_POOL = buildExpressPool("e13-1-ce-email-19", [
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
    text: ["Solution proposée — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Solution",
    vfQ: "L'objet parle de Solution proposée — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["visite du centre de formation", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "visite",
    vfQ: "L'e-mail parle de visite du centre de formation.",
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
    text: ["Centre Horizon", "Gare routière", "Au stade municipal"],
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
    text: ["votre carte d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte d'identité.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_20_TEXT = `De : M. Simon

Objet : Dernières informations — Suivre une formation

Bonjour,

Dernières informations avant le rappel avant le premier cours.
Le rendez-vous est confirmé pour le jeudi 8 août à 20 h.
Le lieu est Salle Jura, le contact est M. Diallo, et le document à préparer est votre CV simple.

Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Un agent peut vous accompagner jusqu'au bon guichet.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
Merci,
M. Simon`;

const E13_1_CE_EMAIL_20_POOL = buildExpressPool("e13-1-ce-email-20", [
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
    text: ["Dernières informations — Suivre une formation", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernières",
    vfQ: "L'objet parle de Dernières informations — Suivre une formation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rappel avant le premier cours", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "premier",
    vfQ: "L'e-mail parle de rappel avant le premier cours.",
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
    text: ["Salle Jura", "Stade Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Jura",
    vfQ: "Le lieu indiqué est : Salle Jura.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV simple", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV simple.",
    vfC: 0,
  }),
]);

export const E13_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-1-ce-email",
  readingText: E13_1_CE_EMAIL_TEXT,
  questionPool: E13_1_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-1-ce-email-2",
  readingText: E13_1_CE_EMAIL_2_TEXT,
  questionPool: E13_1_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-3",
  readingText: E13_1_CE_EMAIL_3_TEXT,
  questionPool: E13_1_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-4",
  readingText: E13_1_CE_EMAIL_4_TEXT,
  questionPool: E13_1_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-5",
  readingText: E13_1_CE_EMAIL_5_TEXT,
  questionPool: E13_1_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-6",
  readingText: E13_1_CE_EMAIL_6_TEXT,
  questionPool: E13_1_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-7",
  readingText: E13_1_CE_EMAIL_7_TEXT,
  questionPool: E13_1_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-8",
  readingText: E13_1_CE_EMAIL_8_TEXT,
  questionPool: E13_1_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-9",
  readingText: E13_1_CE_EMAIL_9_TEXT,
  questionPool: E13_1_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-10",
  readingText: E13_1_CE_EMAIL_10_TEXT,
  questionPool: E13_1_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-11",
  readingText: E13_1_CE_EMAIL_11_TEXT,
  questionPool: E13_1_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-12",
  readingText: E13_1_CE_EMAIL_12_TEXT,
  questionPool: E13_1_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-13",
  readingText: E13_1_CE_EMAIL_13_TEXT,
  questionPool: E13_1_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-14",
  readingText: E13_1_CE_EMAIL_14_TEXT,
  questionPool: E13_1_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-15",
  readingText: E13_1_CE_EMAIL_15_TEXT,
  questionPool: E13_1_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-16",
  readingText: E13_1_CE_EMAIL_16_TEXT,
  questionPool: E13_1_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-17",
  readingText: E13_1_CE_EMAIL_17_TEXT,
  questionPool: E13_1_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-18",
  readingText: E13_1_CE_EMAIL_18_TEXT,
  questionPool: E13_1_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-19",
  readingText: E13_1_CE_EMAIL_19_TEXT,
  questionPool: E13_1_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-1-ce-email-20",
  readingText: E13_1_CE_EMAIL_20_TEXT,
  questionPool: E13_1_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E13_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-1-pee-1",
    title: "S'inscrire à un cours de français",
    situation: "L'école de langues annonce l'ouverture d'un nouveau cours.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Nouveau cours de français A2",
      body: "Bonjour,\nUn nouveau cours de français de niveau A2 ouvre le mois prochain, le soir.\nLes places sont limitées à douze personnes.\nÊtes-vous intéressé(e) ?\nL'École Horizon",
    },
    instruction: "Répondez à l'école : dites que vous voulez vous inscrire, expliquez pourquoi vous apprenez le français et posez une question sur les horaires.",
    points: ["Votre inscription", "Pourquoi vous apprenez le français", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-2",
    title: "Choisir un horaire de cours",
    situation: "L'école vous propose deux horaires possibles.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Choix de l'horaire",
      body: "Bonjour,\nPour le cours A2, deux horaires sont possibles : le mardi et le jeudi de 18 h à 19 h 30, ou le samedi matin de 9 h à 12 h.\nQuel horaire préférez-vous ?\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : choisissez un horaire, expliquez pourquoi il vous convient et posez une question sur le prix.",
    points: ["L'horaire choisi", "Pourquoi cet horaire", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-3",
    title: "Prévenir d'une absence au cours",
    situation: "Votre professeure rappelle la date du prochain test.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Test de lundi prochain",
      body: "Bonjour à tous,\nLe test du chapitre 4 a lieu lundi prochain à 18 h 30.\nMerci d'arriver à l'heure et d'apporter un stylo.\nBonne semaine,\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : excusez-vous, expliquez pourquoi vous ne pouvez pas venir lundi et demandez si vous pouvez passer le test un autre jour.",
    points: ["L'excuse", "Pourquoi vous êtes absent(e)", "Une question pour passer le test un autre jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-4",
    title: "Envoyer une attestation",
    situation: "Votre conseiller en placement demande une preuve de votre formation.",
    sourceMessage: {
      from: "M. Keller, Office régional de placement",
      subject: "Votre cours de français",
      body: "Bonjour,\nVous m'avez dit que vous suivez un cours de français.\nPouvez-vous me donner les informations sur ce cours et m'envoyer une attestation de l'école ?\nMerci d'avance,\nM. Keller",
    },
    instruction: "Répondez à M. Keller : décrivez votre cours (niveau, jours, horaires), confirmez que vous demandez l'attestation et dites quand vous allez l'envoyer.",
    points: ["La description du cours", "La demande d'attestation", "Quand vous l'envoyez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-5",
    title: "Renseigner un collègue",
    situation: "Un collègue veut aussi apprendre le français.",
    sourceMessage: {
      from: "Marco",
      subject: "Ton cours de français",
      body: "Salut !\nTu suis un cours de français, non ? Il est bien ?\nJe voudrais aussi m'inscrire. C'est où, c'est quand, et ça coûte combien ?\nMerci !\nMarco",
    },
    instruction: "Répondez à Marco : donnez votre avis sur le cours, expliquez les horaires et le prix, et dites comment s'inscrire.",
    points: ["Votre avis sur le cours", "Les horaires et le prix", "Comment s'inscrire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-6",
    title: "Reporter son inscription",
    situation: "L'école confirme votre inscription, mais vous avez un problème de dates.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Confirmation d'inscription",
      body: "Bonjour,\nNous confirmons votre inscription au cours qui commence le 8 septembre.\nMerci de payer les frais avant le premier cours.\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : excusez-vous, expliquez pourquoi vous ne pouvez pas commencer le 8 septembre et demandez les dates de la prochaine session.",
    points: ["L'excuse", "Pourquoi vous ne pouvez pas commencer", "Une question sur la prochaine session"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-7",
    title: "Question sur le certificat",
    situation: "L'école annonce la date du test final.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Test final et certificat",
      body: "Bonjour,\nLe test final a lieu le jeudi 5 décembre à 18 h 30.\nAprès le test, vous allez recevoir votre certificat de niveau.\nBonne préparation !\nLe secrétariat",
    },
    instruction: "Répondez à l'école : confirmez votre présence au test, posez une question sur le contenu du test et une question sur le certificat.",
    points: ["La confirmation de votre présence", "Une question sur le test", "Une question sur le certificat"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-8",
    title: "Accepter une formation professionnelle",
    situation: "Le service des ressources humaines vous propose une formation.",
    sourceMessage: {
      from: "Mme Rey, Ressources humaines",
      subject: "Formation en informatique",
      body: "Bonjour,\nNous proposons une formation en informatique à nos employés, le mercredi après-midi pendant six semaines.\nSouhaitez-vous participer ?\nMme Rey",
    },
    instruction: "Répondez à Mme Rey : acceptez la formation, remerciez-la et posez une question sur les dates ou le lieu.",
    points: ["Votre accord", "Un remerciement", "Une question sur les dates ou le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-9",
    title: "Remercier sa professeure",
    situation: "Votre professeure vous félicite à la fin du cours.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Félicitations !",
      body: "Bonjour,\nFélicitations, vous avez réussi le test final !\nVotre certificat A2 est prêt au secrétariat.\nBonne continuation,\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : remerciez-la, dites ce que vous avez appris pendant le cours et posez une question sur le cours de niveau B1.",
    points: ["Un remerciement", "Ce que vous avez appris", "Une question sur le niveau suivant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-10",
    title: "Conseiller une amie",
    situation: "Une amie cherche un cours de français.",
    sourceMessage: {
      from: "Amina",
      subject: "Cours de français",
      body: "Coucou,\nJe voudrais améliorer mon français pour trouver un travail.\nTu connais une bonne école ? Les cours sont chers ?\nBisous,\nAmina",
    },
    instruction: "Répondez à Amina : conseillez votre école, donnez les informations importantes (jours, prix) et proposez d'aller vous inscrire ensemble.",
    points: ["Votre avis sur l'école", "Les jours et le prix", "Une proposition d'y aller ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-11",
    title: "Répondre — formation (11)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-12",
    title: "Répondre — formation (12)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-13",
    title: "Répondre — formation (13)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-14",
    title: "Répondre — formation (14)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-15",
    title: "Répondre — formation (15)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-16",
    title: "Répondre — formation (16)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-17",
    title: "Répondre — formation (17)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-18",
    title: "Répondre — formation (18)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-19",
    title: "Répondre — formation (19)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-20",
    title: "Répondre — formation (20)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E13.2 — Trouver un stage
   ════════════════════════════════════════════════════════════════════════════ */

const E13_2_CE_EMAIL_TEXT = `De : Accueil Horizon

Objet : Confirmation de rendez-vous — Trouver un stage

Bonjour,

Votre rendez-vous est confirmé pour la recherche de stage en crèche.
Nous vous accueillerons le lundi 4 mars à 8 h 30 à l'Agence Emploi Plus.
Mme Keller sera à l'entrée pour vous guider. Merci d'apporter votre convention signée.

Nous comptons sur vous.
Pensez à arriver un peu en avance.
Le trajet dure environ quinze minutes à pied.
Une carte de la zone est affichée dehors.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci,
Accueil Horizon`;

const E13_2_CE_EMAIL_POOL = buildExpressPool("e13-2-ce-email", [
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
    text: ["Confirmation de rendez-vous — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet parle de Confirmation de rendez-vous — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["recherche de stage en crèche", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "recherche",
    vfQ: "L'e-mail parle de recherche de stage en crèche.",
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
    text: ["Agence Emploi Plus", "Piscine des Pins", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Emploi",
    vfQ: "Le lieu indiqué est : Agence Emploi Plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre convention signée", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "convention",
    vfQ: "Il faut préparer votre convention signée.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_2_TEXT = `De : Mme Bernard

Objet : Documents à apporter — Trouver un stage

Bonjour,

Pour préparer l'atelier CV pour un stage, mettez un CV imprimé dans votre sac.
La rencontre aura lieu le mardi 12 mars à 9 h, dans la Salle Rhône.
Si vous avez une question, M. Benali répond au 022 420 31 41.

Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Merci,
Mme Bernard`;

const E13_2_CE_EMAIL_2_POOL = buildExpressPool("e13-2-ce-email-2", [
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
    text: ["Documents à apporter — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Documents",
    vfQ: "L'objet parle de Documents à apporter — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier CV pour un stage", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "CV",
    vfQ: "L'e-mail parle de atelier CV pour un stage.",
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
    text: ["Salle Rhône", "Cinéma Palace", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Rhône",
    vfQ: "Le lieu indiqué est : Salle Rhône.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un CV imprimé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer un CV imprimé.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_3_TEXT = `De : Secrétariat Central

Objet : Changement d'horaire — Trouver un stage

Bonjour,

L'horaire de la visite d'une entreprise locale change légèrement.
Le nouveau rendez-vous est fixé au mercredi 20 mars à 9 h 15.
Le lieu reste Crèche Les Pivoines. Pensez à prévenir Mme Arnaud si vous ne pouvez pas venir.

Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Merci,
Secrétariat Central`;

const E13_2_CE_EMAIL_3_POOL = buildExpressPool("e13-2-ce-email-3", [
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
    text: ["Changement d'horaire — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet parle de Changement d'horaire — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["visite d'une entreprise locale", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "locale",
    vfQ: "L'e-mail parle de visite d'une entreprise locale.",
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
    text: ["Crèche Les Pivoines", "Musée d'art", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Crèche",
    vfQ: "Le lieu indiqué est : Crèche Les Pivoines.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une lettre courte", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "lettre",
    vfQ: "Il faut préparer une lettre courte.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_4_TEXT = `De : M. Lopez

Objet : Réponse à votre demande — Trouver un stage

Bonjour,

Nous avons bien reçu votre demande concernant la rencontre avec une conseillère stage.
Vous pouvez passer le jeudi 28 mars; l'accueil ouvrira à 10 h à Atelier Municipal.
Le dossier sera plus vite traité avec vos disponibilités.

Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci,
M. Lopez`;

const E13_2_CE_EMAIL_4_POOL = buildExpressPool("e13-2-ce-email-4", [
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
    text: ["Réponse à votre demande — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Réponse",
    vfQ: "L'objet parle de Réponse à votre demande — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rencontre avec une conseillère stage", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "rencontre",
    vfQ: "L'e-mail parle de rencontre avec une conseillère stage.",
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
    text: ["Atelier Municipal", "Aéroport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Municipal",
    vfQ: "Le lieu indiqué est : Atelier Municipal.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos disponibilités", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "disponibilités",
    vfQ: "Il faut préparer vos disponibilités.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_5_TEXT = `De : Service administratif

Objet : Programme de la journée — Trouver un stage

Bonjour,

Voici le déroulement prévu le vendredi 5 avril.
À 10 h 30, accueil à Magasin Centre-Ville. Ensuite, Mme Costa présentera le stage découverte en logistique.
La séance est courte; gardez simplement une copie du permis avec vous.

Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Merci,
Service administratif`;

const E13_2_CE_EMAIL_5_POOL = buildExpressPool("e13-2-ce-email-5", [
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
    text: ["Programme de la journée — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Programme",
    vfQ: "L'objet parle de Programme de la journée — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["stage découverte en logistique", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "découverte",
    vfQ: "L'e-mail parle de stage découverte en logistique.",
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
    text: ["Magasin Centre-Ville", "Club de tennis", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Magasin",
    vfQ: "Le lieu indiqué est : Magasin Centre-Ville.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une copie du permis", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "copie",
    vfQ: "Il faut préparer une copie du permis.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_6_TEXT = `De : Mme Garcia

Objet : Rappel avant la visite — Trouver un stage

Bonjour,

Petit rappel avant votre visite : l'appel à candidatures pour un stage est bien prévu le samedi 13 avril.
Merci d'arriver à 11 h à la Bibliothèque Est.
M. Weber vérifiera que votre dossier contient votre carte d'identité.

À très bientôt, prends soin de toi.
Je joins les détails importants juste après.
Si le plan change, je te préviens tout de suite.
C'est important pour moi, merci de lire jusqu'à la fin.
Tu peux partager ce message si besoin.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci,
Mme Garcia`;

const E13_2_CE_EMAIL_6_POOL = buildExpressPool("e13-2-ce-email-6", [
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
    text: ["Rappel avant la visite — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet parle de Rappel avant la visite — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["appel à candidatures pour un stage", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "appel",
    vfQ: "L'e-mail parle de appel à candidatures pour un stage.",
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
    text: ["Bibliothèque Est", "Piscine des Pins", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Est",
    vfQ: "Le lieu indiqué est : Bibliothèque Est.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre carte d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte d'identité.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_7_TEXT = `De : Bureau des inscriptions

Objet : Invitation à une réunion — Trouver un stage

Bonjour,

Nous vous invitons à une réunion au sujet de la préparation d'un entretien de stage.
Elle se tiendra le lundi 22 avril à 13 h 30, à l'Agence Emploi Plus.
Répondez avant vendredi et signalez à Mme Keller si votre convention signée manque encore.

Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Merci,
Bureau des inscriptions`;

const E13_2_CE_EMAIL_7_POOL = buildExpressPool("e13-2-ce-email-7", [
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
    text: ["Invitation à une réunion — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet parle de Invitation à une réunion — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["préparation d'un entretien de stage", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "préparation",
    vfQ: "L'e-mail parle de préparation d'un entretien de stage.",
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
    text: ["Agence Emploi Plus", "Cinéma Palace", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Emploi",
    vfQ: "Le lieu indiqué est : Agence Emploi Plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre convention signée", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "convention",
    vfQ: "Il faut préparer votre convention signée.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_8_TEXT = `De : M. Girard

Objet : Résultat de votre dossier — Trouver un stage

Bonjour,

Votre dossier pour la séance sur les sites d'emploi est maintenant complet.
La prochaine étape se fera le mardi 30 avril à 14 h.
Rendez-vous dans la Salle Rhône; gardez un CV imprimé avec vous jusqu'à la fin.

Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Merci,
M. Girard`;

const E13_2_CE_EMAIL_8_POOL = buildExpressPool("e13-2-ce-email-8", [
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
    text: ["Résultat de votre dossier — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résultat",
    vfQ: "L'objet parle de Résultat de votre dossier — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["séance sur les sites d'emploi", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "sites",
    vfQ: "L'e-mail parle de séance sur les sites d'emploi.",
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
    text: ["Salle Rhône", "Musée d'art", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Rhône",
    vfQ: "Le lieu indiqué est : Salle Rhône.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un CV imprimé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer un CV imprimé.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_9_TEXT = `De : Service planning

Objet : Pièce manquante — Trouver un stage

Bonjour,

Il manque encore une lettre courte.
Vous pouvez le déposer le mercredi 8 mai à partir de 14 h 30, à Crèche Les Pivoines.
Demandez Mme Arnaud à l'accueil pour éviter une attente trop longue.

Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci,
Service planning`;

const E13_2_CE_EMAIL_9_POOL = buildExpressPool("e13-2-ce-email-9", [
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
    text: ["Pièce manquante — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Pièce",
    vfQ: "L'objet parle de Pièce manquante — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["stage en cuisine collective", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "en",
    vfQ: "L'e-mail parle de stage en cuisine collective.",
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
    text: ["Crèche Les Pivoines", "Aéroport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Crèche",
    vfQ: "Le lieu indiqué est : Crèche Les Pivoines.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une lettre courte", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "lettre",
    vfQ: "Il faut préparer une lettre courte.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_10_TEXT = `De : Mme Nguyen

Objet : Nouveau créneau proposé — Trouver un stage

Bonjour,

Le rendez-vous pour le forum des stages est reporté.
Nous proposons maintenant le jeudi 16 mai à 15 h, toujours à Atelier Municipal.
Merci de confirmer votre présence à M. Schmid.

Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Merci,
Mme Nguyen`;

const E13_2_CE_EMAIL_10_POOL = buildExpressPool("e13-2-ce-email-10", [
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
    text: ["Nouveau créneau proposé — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Nouveau",
    vfQ: "L'objet parle de Nouveau créneau proposé — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["forum des stages", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "forum",
    vfQ: "L'e-mail parle de forum des stages.",
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
    text: ["Atelier Municipal", "Club de tennis", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Municipal",
    vfQ: "Le lieu indiqué est : Atelier Municipal.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos disponibilités", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "disponibilités",
    vfQ: "Il faut préparer vos disponibilités.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_11_TEXT = `De : Accueil formation

Objet : Deux choix possibles — Trouver un stage

Bonjour,

Deux choix étaient possibles pour le dépôt de dossier de stage.
Vous avez choisi le créneau du vendredi 24 mai à 15 h 30.
La rencontre aura lieu à Magasin Centre-Ville; apportez une copie du permis.

Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Merci,
Accueil formation`;

const E13_2_CE_EMAIL_11_POOL = buildExpressPool("e13-2-ce-email-11", [
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
    text: ["Deux choix possibles — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Deux",
    vfQ: "L'objet parle de Deux choix possibles — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["dépôt de dossier de stage", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "dossier",
    vfQ: "L'e-mail parle de dépôt de dossier de stage.",
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
    text: ["Magasin Centre-Ville", "Piscine des Pins", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Magasin",
    vfQ: "Le lieu indiqué est : Magasin Centre-Ville.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une copie du permis", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "copie",
    vfQ: "Il faut préparer une copie du permis.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_12_TEXT = `De : M. Robert

Objet : Suite à notre appel — Trouver un stage

Bonjour,

Suite à notre appel, je résume les informations.
Le stage en bibliothèque aura lieu le lundi 3 juin à 16 h, à la Bibliothèque Est.
M. Weber vous attendra avec la liste des participants.

Tu peux m'appeler si c'est plus simple pour toi.
J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Merci d'avance pour ta réponse.
Je suis disponible après 18 heures.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Merci,
M. Robert`;

const E13_2_CE_EMAIL_12_POOL = buildExpressPool("e13-2-ce-email-12", [
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
    text: ["Suite à notre appel — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Suite",
    vfQ: "L'objet parle de Suite à notre appel — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["stage en bibliothèque", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "en",
    vfQ: "L'e-mail parle de stage en bibliothèque.",
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
    text: ["Bibliothèque Est", "Cinéma Palace", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Est",
    vfQ: "Le lieu indiqué est : Bibliothèque Est.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre carte d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte d'identité.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_13_TEXT = `De : Service dossiers

Objet : Premier jour — Trouver un stage

Bonjour,

Pour votre premier jour lié à le stage en maison de retraite, arrivez un peu avant 16 h 30.
La date est le mardi 11 juin, et l'accueil se trouve à l'Agence Emploi Plus.
Merci d'apporter votre convention signée; cela facilitera l'inscription.

Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
Le personnel peut répondre en français simple.
Merci,
Service dossiers`;

const E13_2_CE_EMAIL_13_POOL = buildExpressPool("e13-2-ce-email-13", [
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
    text: ["Premier jour — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Premier",
    vfQ: "L'objet parle de Premier jour — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["stage en maison de retraite", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "en",
    vfQ: "L'e-mail parle de stage en maison de retraite.",
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
    text: ["Agence Emploi Plus", "Musée d'art", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Emploi",
    vfQ: "Le lieu indiqué est : Agence Emploi Plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre convention signée", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "convention",
    vfQ: "Il faut préparer votre convention signée.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_14_TEXT = `De : Mme Moreau

Objet : Merci pour votre réponse — Trouver un stage

Bonjour,

Merci pour votre réponse positive.
Votre place pour l'atelier lettre de motivation est gardée le mercredi 19 juin à 17 h.
Dans la salle rhône, M. Benali donnera les consignes et vérifiera un CV imprimé.

Le message est aussi envoyé au groupe WhatsApp.
Si vous changez d'avis, dites-le sans attendre.
On peut décaler d'une demi-heure si besoin.
Je reste à votre disposition pour toute précision.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Merci,
Mme Moreau`;

const E13_2_CE_EMAIL_14_POOL = buildExpressPool("e13-2-ce-email-14", [
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
    text: ["Merci pour votre réponse — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet parle de Merci pour votre réponse — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier lettre de motivation", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "lettre",
    vfQ: "L'e-mail parle de atelier lettre de motivation.",
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
    text: ["Salle Rhône", "Aéroport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Rhône",
    vfQ: "Le lieu indiqué est : Salle Rhône.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un CV imprimé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer un CV imprimé.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_15_TEXT = `De : Équipe coordination

Objet : Contact à noter — Trouver un stage

Bonjour,

Voici le contact à noter pour le stage court en magasin : Mme Arnaud.
Vous pouvez appeler le 022 420 44 54 seulement le matin.
La prochaine rencontre aura lieu le jeudi 27 juin à 17 h 30, à Crèche Les Pivoines.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Nous restons disponibles pour vous aider.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Merci,
Équipe coordination`;

const E13_2_CE_EMAIL_15_POOL = buildExpressPool("e13-2-ce-email-15", [
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
    text: ["Contact à noter — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Contact",
    vfQ: "L'objet parle de Contact à noter — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["stage court en magasin", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "court",
    vfQ: "L'e-mail parle de stage court en magasin.",
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
    text: ["Crèche Les Pivoines", "Club de tennis", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Crèche",
    vfQ: "Le lieu indiqué est : Crèche Les Pivoines.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une lettre courte", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "lettre",
    vfQ: "Il faut préparer une lettre courte.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_16_TEXT = `De : M. Petit

Objet : Message au groupe — Trouver un stage

Bonjour,

Message pour tout le groupe : La permanence pôle emploi commence bientôt.
Soyez présent(e) le vendredi 5 juillet à 18 h, à Atelier Municipal.
Chaque personne prépare vos disponibilités; M. Schmid fera l'appel.

Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Merci,
M. Petit`;

const E13_2_CE_EMAIL_16_POOL = buildExpressPool("e13-2-ce-email-16", [
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
    text: ["Message au groupe — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet parle de Message au groupe — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["permanence Pôle Emploi", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "permanence",
    vfQ: "L'e-mail parle de permanence Pôle Emploi.",
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
    text: ["Atelier Municipal", "Piscine des Pins", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Municipal",
    vfQ: "Le lieu indiqué est : Atelier Municipal.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos disponibilités", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "disponibilités",
    vfQ: "Il faut préparer vos disponibilités.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_17_TEXT = `De : Service suivi

Objet : Résumé de la rencontre — Trouver un stage

Bonjour,

Résumé de la rencontre : nous avons parlé de la visite du service technique.
Le groupe a choisi Magasin Centre-Ville pour la suite.
La prochaine date est lundi 15 juillet à 18 h 30. À faire avant : préparer une copie du permis.

Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Merci,
Service suivi`;

const E13_2_CE_EMAIL_17_POOL = buildExpressPool("e13-2-ce-email-17", [
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
    text: ["Résumé de la rencontre — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résumé",
    vfQ: "L'objet parle de Résumé de la rencontre — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["visite du service technique", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "technique",
    vfQ: "L'e-mail parle de visite du service technique.",
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
    text: ["Magasin Centre-Ville", "Cinéma Palace", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Magasin",
    vfQ: "Le lieu indiqué est : Magasin Centre-Ville.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une copie du permis", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "copie",
    vfQ: "Il faut préparer une copie du permis.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_18_TEXT = `De : Mme Leroy

Objet : Rendez-vous individuel — Trouver un stage

Bonjour,

Votre rendez-vous individuel avec M. Weber est fixé.
Il concerne le stage en accueil administratif. Venez le mardi 23 juillet à 19 h, à la Bibliothèque Est.
N'oubliez pas votre carte d'identité.

Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Merci,
Mme Leroy`;

const E13_2_CE_EMAIL_18_POOL = buildExpressPool("e13-2-ce-email-18", [
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
    text: ["Rendez-vous individuel — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez-vous",
    vfQ: "L'objet parle de Rendez-vous individuel — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["stage en accueil administratif", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "en",
    vfQ: "L'e-mail parle de stage en accueil administratif.",
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
    text: ["Bibliothèque Est", "Musée d'art", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Est",
    vfQ: "Le lieu indiqué est : Bibliothèque Est.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre carte d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "carte",
    vfQ: "Il faut préparer votre carte d'identité.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_19_TEXT = `De : Accueil principal

Objet : Solution proposée — Trouver un stage

Bonjour,

Nous avons trouvé une solution pour la réunion avec les tuteurs.
Vous pouvez passer le mercredi 31 juillet à 19 h 30 à l'Agence Emploi Plus.
Mme Keller vous expliquera la suite; apportez aussi votre convention signée.

Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci,
Accueil principal`;

const E13_2_CE_EMAIL_19_POOL = buildExpressPool("e13-2-ce-email-19", [
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
    text: ["Solution proposée — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Solution",
    vfQ: "L'objet parle de Solution proposée — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réunion avec les tuteurs", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "tuteurs",
    vfQ: "L'e-mail parle de réunion avec les tuteurs.",
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
    text: ["Agence Emploi Plus", "Aéroport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Emploi",
    vfQ: "Le lieu indiqué est : Agence Emploi Plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre convention signée", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "convention",
    vfQ: "Il faut préparer votre convention signée.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_20_TEXT = `De : M. Simon

Objet : Dernières informations — Trouver un stage

Bonjour,

Dernières informations avant le rappel avant le début du stage.
Le rendez-vous est confirmé pour le jeudi 8 août à 20 h.
Le lieu est Salle Rhône, le contact est M. Benali, et le document à préparer est un CV imprimé.

Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci,
M. Simon`;

const E13_2_CE_EMAIL_20_POOL = buildExpressPool("e13-2-ce-email-20", [
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
    text: ["Dernières informations — Trouver un stage", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernières",
    vfQ: "L'objet parle de Dernières informations — Trouver un stage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rappel avant le début du stage", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "début",
    vfQ: "L'e-mail parle de rappel avant le début du stage.",
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
    text: ["Salle Rhône", "Club de tennis", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Rhône",
    vfQ: "Le lieu indiqué est : Salle Rhône.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un CV imprimé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer un CV imprimé.",
    vfC: 0,
  }),
]);

export const E13_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-2-ce-email",
  readingText: E13_2_CE_EMAIL_TEXT,
  questionPool: E13_2_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-2-ce-email-2",
  readingText: E13_2_CE_EMAIL_2_TEXT,
  questionPool: E13_2_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-3",
  readingText: E13_2_CE_EMAIL_3_TEXT,
  questionPool: E13_2_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-4",
  readingText: E13_2_CE_EMAIL_4_TEXT,
  questionPool: E13_2_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-5",
  readingText: E13_2_CE_EMAIL_5_TEXT,
  questionPool: E13_2_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-6",
  readingText: E13_2_CE_EMAIL_6_TEXT,
  questionPool: E13_2_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-7",
  readingText: E13_2_CE_EMAIL_7_TEXT,
  questionPool: E13_2_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-8",
  readingText: E13_2_CE_EMAIL_8_TEXT,
  questionPool: E13_2_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-9",
  readingText: E13_2_CE_EMAIL_9_TEXT,
  questionPool: E13_2_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-10",
  readingText: E13_2_CE_EMAIL_10_TEXT,
  questionPool: E13_2_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-11",
  readingText: E13_2_CE_EMAIL_11_TEXT,
  questionPool: E13_2_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-12",
  readingText: E13_2_CE_EMAIL_12_TEXT,
  questionPool: E13_2_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-13",
  readingText: E13_2_CE_EMAIL_13_TEXT,
  questionPool: E13_2_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-14",
  readingText: E13_2_CE_EMAIL_14_TEXT,
  questionPool: E13_2_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-15",
  readingText: E13_2_CE_EMAIL_15_TEXT,
  questionPool: E13_2_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-16",
  readingText: E13_2_CE_EMAIL_16_TEXT,
  questionPool: E13_2_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-17",
  readingText: E13_2_CE_EMAIL_17_TEXT,
  questionPool: E13_2_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-18",
  readingText: E13_2_CE_EMAIL_18_TEXT,
  questionPool: E13_2_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-19",
  readingText: E13_2_CE_EMAIL_19_TEXT,
  questionPool: E13_2_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-2-ce-email-20",
  readingText: E13_2_CE_EMAIL_20_TEXT,
  questionPool: E13_2_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E13_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-2-pee-1",
    title: "Poser sa candidature pour un stage",
    situation: "Un restaurant cherche un ou une stagiaire.",
    sourceMessage: {
      from: "Restaurant du Lac",
      subject: "Stage en cuisine",
      body: "Bonjour,\nNotre restaurant cherche un ou une stagiaire en cuisine pour cet été.\nSi vous êtes intéressé(e), présentez-vous par e-mail.\nLe chef de cuisine",
    },
    instruction: "Répondez au restaurant : présentez-vous, parlez de votre expérience en cuisine et donnez vos disponibilités.",
    points: ["Votre présentation", "Votre expérience", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-2",
    title: "Accepter une proposition de stage",
    situation: "Une boulangerie vous propose un stage.",
    sourceMessage: {
      from: "Boulangerie Blanc",
      subject: "Proposition de stage",
      body: "Bonjour,\nNous pouvons vous proposer un stage de quatre semaines à partir du lundi 5 mai.\nÊtes-vous toujours intéressé(e) ?\nMeilleures salutations,\nBoulangerie Blanc",
    },
    instruction: "Répondez à la boulangerie : acceptez la proposition, remerciez et posez une question sur les horaires de travail.",
    points: ["Votre accord", "Un remerciement", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-3",
    title: "Demander des précisions",
    situation: "Une entreprise vous propose un stage sans donner de détails.",
    sourceMessage: {
      from: "Entreprise Infotech",
      subject: "Votre candidature",
      body: "Bonjour,\nVotre candidature nous intéresse. Nous pouvons vous accueillir pour un stage au printemps.\nQu'en pensez-vous ?\nLe service des ressources humaines",
    },
    instruction: "Répondez à l'entreprise : remerciez, dites que vous êtes intéressé(e) et posez des questions sur les dates et les horaires.",
    points: ["Un remerciement", "Votre intérêt", "Des questions sur les dates et les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-4",
    title: "Refuser poliment un stage",
    situation: "Un garage vous propose un stage, mais vous avez déjà accepté une autre place.",
    sourceMessage: {
      from: "Garage Central",
      subject: "Place de stage",
      body: "Bonjour,\nNous avons une place de stage libre à l'atelier à partir du mois prochain.\nVoulez-vous venir travailler avec nous ?\nGarage Central",
    },
    instruction: "Répondez au garage : refusez poliment, expliquez que vous avez déjà trouvé un autre stage et remerciez pour la proposition.",
    points: ["Le refus poli", "L'explication", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-5",
    title: "Informer son conseiller",
    situation: "Votre conseiller en placement demande des nouvelles de votre recherche.",
    sourceMessage: {
      from: "M. Keller, Office régional de placement",
      subject: "Votre recherche de stage",
      body: "Bonjour,\nOù en êtes-vous dans votre recherche de stage ?\nAvez-vous envoyé des candidatures ce mois-ci ?\nMerci de me répondre avant vendredi.\nM. Keller",
    },
    instruction: "Répondez à M. Keller : dites où vous avez envoyé des candidatures, expliquez les réponses reçues et demandez un conseil.",
    points: ["Vos candidatures envoyées", "Les réponses reçues", "Une demande de conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-6",
    title: "Demander de commencer plus tard",
    situation: "L'hôtel confirme le début de votre stage, mais vous avez un empêchement.",
    sourceMessage: {
      from: "Mme Perrin, Hôtel Bellevue",
      subject: "Début de votre stage",
      body: "Bonjour,\nNous vous attendons le lundi 1er juin à 9 h à la réception pour le début de votre stage.\nÀ bientôt,\nMme Perrin",
    },
    instruction: "Répondez à Mme Perrin : excusez-vous, expliquez votre problème et demandez si vous pouvez commencer une semaine plus tard.",
    points: ["L'excuse", "Votre problème", "La nouvelle date proposée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-7",
    title: "Aider une amie",
    situation: "Une amie vous demande comment vous avez trouvé votre stage.",
    sourceMessage: {
      from: "Fatima",
      subject: "Ton stage",
      body: "Salut !\nJ'ai vu que tu as trouvé un stage, bravo !\nComment tu as fait ? Moi, je cherche depuis deux mois et je n'ai rien trouvé.\nFatima",
    },
    instruction: "Répondez à Fatima : racontez comment vous avez trouvé votre stage, donnez-lui deux conseils et proposez votre aide.",
    points: ["Comment vous avez trouvé le stage", "Deux conseils", "Une proposition d'aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-8",
    title: "Envoyer les documents demandés",
    situation: "L'hôtel demande des documents pour confirmer votre stage.",
    sourceMessage: {
      from: "Mme Perrin, Hôtel Bellevue",
      subject: "Documents à envoyer",
      body: "Bonjour,\nPour confirmer votre stage, merci de nous envoyer votre CV et une copie de votre permis de séjour avant le 15 mai.\nMeilleures salutations,\nMme Perrin",
    },
    instruction: "Répondez à Mme Perrin : confirmez l'envoi des documents, remerciez pour la proposition de stage et posez une question sur le premier jour.",
    points: ["L'envoi des documents", "Un remerciement", "Une question sur le premier jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-9",
    title: "Se présenter à une librairie",
    situation: "Après votre appel, la librairie demande des informations par écrit.",
    sourceMessage: {
      from: "Librairie des Arcades",
      subject: "Suite à votre appel",
      body: "Bonjour,\nMerci pour votre appel d'hier.\nPouvez-vous nous écrire qui vous êtes, quel stage vous cherchez et quand vous êtes disponible ?\nLa Librairie des Arcades",
    },
    instruction: "Répondez à la librairie : présentez-vous, expliquez quel stage vous cherchez et donnez vos disponibilités.",
    points: ["Votre présentation", "Le stage recherché", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-10",
    title: "Remercier à la fin du stage",
    situation: "Votre responsable vous écrit à la fin de votre stage.",
    sourceMessage: {
      from: "M. Duval, Hôtel Bellevue",
      subject: "Fin de votre stage",
      body: "Bonjour,\nVotre stage se termine vendredi. Toute l'équipe a été contente de travailler avec vous.\nBonne continuation !\nM. Duval",
    },
    instruction: "Répondez à M. Duval : remerciez l'équipe, dites ce que vous avez appris pendant le stage et demandez une attestation de stage.",
    points: ["Un remerciement", "Ce que vous avez appris", "La demande d'attestation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-11",
    title: "Répondre — stage (11)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-12",
    title: "Répondre — stage (12)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-13",
    title: "Répondre — stage (13)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-14",
    title: "Répondre — stage (14)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-15",
    title: "Répondre — stage (15)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-16",
    title: "Répondre — stage (16)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-17",
    title: "Répondre — stage (17)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-18",
    title: "Répondre — stage (18)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-19",
    title: "Répondre — stage (19)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-20",
    title: "Répondre — stage (20)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E13.3 — Répondre à une offre d'emploi
   ════════════════════════════════════════════════════════════════════════════ */

const E13_3_CE_EMAIL_TEXT = `De : Accueil Horizon

Objet : Confirmation de rendez-vous — Répondre à une offre d'emploi

Bonjour,

Votre rendez-vous est confirmé pour la candidature pour agent d'accueil.
Nous vous accueillerons le lundi 4 mars à 8 h 30 au Bureau Emploi.
Mme Marchand sera à l'entrée pour vous guider. Merci d'apporter votre CV à jour.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Merci,
Accueil Horizon`;

const E13_3_CE_EMAIL_POOL = buildExpressPool("e13-3-ce-email", [
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
    text: ["Confirmation de rendez-vous — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet parle de Confirmation de rendez-vous — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["candidature pour agent d'accueil", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "agent",
    vfQ: "L'e-mail parle de candidature pour agent d'accueil.",
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
    text: ["Bureau Emploi", "Salle de sport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Emploi",
    vfQ: "Le lieu indiqué est : Bureau Emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV à jour", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV à jour.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_2_TEXT = `De : Mme Bernard

Objet : Documents à apporter — Répondre à une offre d'emploi

Bonjour,

Pour préparer la réponse à une offre de vendeur, mettez une lettre signée dans votre sac.
La rencontre aura lieu le mardi 12 mars à 9 h, dans la Salle Alpes.
Si vous avez une question, M. Laurent répond au 024 730 31 41.

Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Merci,
Mme Bernard`;

const E13_3_CE_EMAIL_2_POOL = buildExpressPool("e13-3-ce-email-2", [
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
    text: ["Documents à apporter — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Documents",
    vfQ: "L'objet parle de Documents à apporter — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réponse à une offre de vendeur", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "à",
    vfQ: "L'e-mail parle de réponse à une offre de vendeur.",
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
    text: ["Salle Alpes", "Plage municipale", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Alpes",
    vfQ: "Le lieu indiqué est : Salle Alpes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une lettre signée", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "lettre",
    vfQ: "Il faut préparer une lettre signée.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_3_TEXT = `De : Secrétariat Central

Objet : Changement d'horaire — Répondre à une offre d'emploi

Bonjour,

L'horaire de l'envoi d'un CV de serveur change légèrement.
Le nouveau rendez-vous est fixé au mercredi 20 mars à 9 h 15.
Le lieu reste Entreprise Nova. Pensez à prévenir Mme Huber si vous ne pouvez pas venir.

Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Merci,
Secrétariat Central`;

const E13_3_CE_EMAIL_3_POOL = buildExpressPool("e13-3-ce-email-3", [
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
    text: ["Changement d'horaire — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet parle de Changement d'horaire — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["envoi d'un CV de serveur", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "envoi",
    vfQ: "L'e-mail parle de envoi d'un CV de serveur.",
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
    text: ["Entreprise Nova", "Marché couvert", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Nova",
    vfQ: "Le lieu indiqué est : Entreprise Nova.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos certificats de travail", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "certificats",
    vfQ: "Il faut préparer vos certificats de travail.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_4_TEXT = `De : M. Lopez

Objet : Réponse à votre demande — Répondre à une offre d'emploi

Bonjour,

Nous avons bien reçu votre demande concernant l'atelier candidature spontanée.
Vous pouvez passer le jeudi 28 mars; l'accueil ouvrira à 10 h à l'Agence Travail Direct.
Le dossier sera plus vite traité avec deux références.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Merci,
M. Lopez`;

const E13_3_CE_EMAIL_4_POOL = buildExpressPool("e13-3-ce-email-4", [
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
    text: ["Réponse à votre demande — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Réponse",
    vfQ: "L'objet parle de Réponse à votre demande — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier candidature spontanée", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "spontanée",
    vfQ: "L'e-mail parle de atelier candidature spontanée.",
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
    text: ["Agence Travail Direct", "Gare maritime", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Travail",
    vfQ: "Le lieu indiqué est : Agence Travail Direct.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["deux références", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "deux",
    vfQ: "Il faut préparer deux références.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_5_TEXT = `De : Service administratif

Objet : Programme de la journée — Répondre à une offre d'emploi

Bonjour,

Voici le déroulement prévu le vendredi 5 avril.
À 10 h 30, accueil à Espace Candidats. Ensuite, Mme Rossi présentera le dossier pour aide de cuisine.
La séance est courte; gardez simplement votre adresse e-mail avec vous.

N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Merci encore pour votre compréhension.
Merci,
Service administratif`;

const E13_3_CE_EMAIL_5_POOL = buildExpressPool("e13-3-ce-email-5", [
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
    text: ["Programme de la journée — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Programme",
    vfQ: "L'objet parle de Programme de la journée — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["dossier pour aide de cuisine", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "dossier",
    vfQ: "L'e-mail parle de dossier pour aide de cuisine.",
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
    text: ["Espace Candidats", "Centre de loisirs", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Espace",
    vfQ: "Le lieu indiqué est : Espace Candidats.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre adresse e-mail", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "adresse",
    vfQ: "Il faut préparer votre adresse e-mail.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_6_TEXT = `De : Mme Garcia

Objet : Rappel avant la visite — Répondre à une offre d'emploi

Bonjour,

Petit rappel avant votre visite : l'offre de secrétaire à temps partiel est bien prévu le samedi 13 avril.
Merci d'arriver à 11 h à Guichet 3.
M. Clerc vérifiera que votre dossier contient le numéro de l'offre.

Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Merci,
Mme Garcia`;

const E13_3_CE_EMAIL_6_POOL = buildExpressPool("e13-3-ce-email-6", [
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
    text: ["Rappel avant la visite — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet parle de Rappel avant la visite — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["offre de secrétaire à temps partiel", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "secrétaire",
    vfQ: "L'e-mail parle de offre de secrétaire à temps partiel.",
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
    text: ["Guichet 3", "Salle de sport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Guichet",
    vfQ: "Le lieu indiqué est : Guichet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le numéro de l'offre", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "numéro",
    vfQ: "Il faut préparer le numéro de l'offre.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_7_TEXT = `De : Bureau des inscriptions

Objet : Invitation à une réunion — Répondre à une offre d'emploi

Bonjour,

Nous vous invitons à une réunion au sujet de la relecture d'une lettre de motivation.
Elle se tiendra le lundi 22 avril à 13 h 30, au Bureau Emploi.
Répondez avant vendredi et signalez à Mme Marchand si votre CV à jour manque encore.

Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Merci,
Bureau des inscriptions`;

const E13_3_CE_EMAIL_7_POOL = buildExpressPool("e13-3-ce-email-7", [
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
    text: ["Invitation à une réunion — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet parle de Invitation à une réunion — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["relecture d'une lettre de motivation", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "relecture",
    vfQ: "L'e-mail parle de relecture d'une lettre de motivation.",
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
    text: ["Bureau Emploi", "Plage municipale", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Emploi",
    vfQ: "Le lieu indiqué est : Bureau Emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV à jour", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV à jour.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_8_TEXT = `De : M. Girard

Objet : Résultat de votre dossier — Répondre à une offre d'emploi

Bonjour,

Votre dossier pour la candidature en ligne est maintenant complet.
La prochaine étape se fera le mardi 30 avril à 14 h.
Rendez-vous dans la Salle Alpes; gardez une lettre signée avec vous jusqu'à la fin.

Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Merci,
M. Girard`;

const E13_3_CE_EMAIL_8_POOL = buildExpressPool("e13-3-ce-email-8", [
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
    text: ["Résultat de votre dossier — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résultat",
    vfQ: "L'objet parle de Résultat de votre dossier — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["candidature en ligne", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "en",
    vfQ: "L'e-mail parle de candidature en ligne.",
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
    text: ["Salle Alpes", "Marché couvert", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Alpes",
    vfQ: "Le lieu indiqué est : Salle Alpes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une lettre signée", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "lettre",
    vfQ: "Il faut préparer une lettre signée.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_9_TEXT = `De : Service planning

Objet : Pièce manquante — Répondre à une offre d'emploi

Bonjour,

Il manque encore vos certificats de travail.
Vous pouvez le déposer le mercredi 8 mai à partir de 14 h 30, à l'Entreprise Nova.
Demandez Mme Huber à l'accueil pour éviter une attente trop longue.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
Merci,
Service planning`;

const E13_3_CE_EMAIL_9_POOL = buildExpressPool("e13-3-ce-email-9", [
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
    text: ["Pièce manquante — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Pièce",
    vfQ: "L'objet parle de Pièce manquante — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["offre de magasinier", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "magasinier",
    vfQ: "L'e-mail parle de offre de magasinier.",
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
    text: ["Entreprise Nova", "Gare maritime", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Nova",
    vfQ: "Le lieu indiqué est : Entreprise Nova.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos certificats de travail", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "certificats",
    vfQ: "Il faut préparer vos certificats de travail.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_10_TEXT = `De : Mme Nguyen

Objet : Nouveau créneau proposé — Répondre à une offre d'emploi

Bonjour,

Le rendez-vous pour la séance sur les annonces est reporté.
Nous proposons maintenant le jeudi 16 mai à 15 h, toujours à l'Agence Travail Direct.
Merci de confirmer votre présence à M. Morel.

Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Merci,
Mme Nguyen`;

const E13_3_CE_EMAIL_10_POOL = buildExpressPool("e13-3-ce-email-10", [
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
    text: ["Nouveau créneau proposé — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Nouveau",
    vfQ: "L'objet parle de Nouveau créneau proposé — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["séance sur les annonces", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "annonces",
    vfQ: "L'e-mail parle de séance sur les annonces.",
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
    text: ["Agence Travail Direct", "Centre de loisirs", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Travail",
    vfQ: "Le lieu indiqué est : Agence Travail Direct.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["deux références", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "deux",
    vfQ: "Il faut préparer deux références.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_11_TEXT = `De : Accueil formation

Objet : Deux choix possibles — Répondre à une offre d'emploi

Bonjour,

Deux choix étaient possibles pour la préparation des références.
Vous avez choisi le créneau du vendredi 24 mai à 15 h 30.
La rencontre aura lieu à Espace Candidats; apportez votre adresse e-mail.

Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Merci,
Accueil formation`;

const E13_3_CE_EMAIL_11_POOL = buildExpressPool("e13-3-ce-email-11", [
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
    text: ["Deux choix possibles — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Deux",
    vfQ: "L'objet parle de Deux choix possibles — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["préparation des références", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "références",
    vfQ: "L'e-mail parle de préparation des références.",
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
    text: ["Espace Candidats", "Salle de sport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Espace",
    vfQ: "Le lieu indiqué est : Espace Candidats.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre adresse e-mail", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "adresse",
    vfQ: "Il faut préparer votre adresse e-mail.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_12_TEXT = `De : M. Robert

Objet : Suite à notre appel — Répondre à une offre d'emploi

Bonjour,

Suite à notre appel, je résume les informations.
Le poste d'assistant administratif aura lieu le lundi 3 juin à 16 h, à Guichet 3.
M. Clerc vous attendra avec la liste des participants.

Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Sans confirmation, la place n'est pas garantie.
Je t'écris aussi pour te donner un peu plus de nouvelles.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
Merci,
M. Robert`;

const E13_3_CE_EMAIL_12_POOL = buildExpressPool("e13-3-ce-email-12", [
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
    text: ["Suite à notre appel — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Suite",
    vfQ: "L'objet parle de Suite à notre appel — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["poste d'assistant administratif", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "poste",
    vfQ: "L'e-mail parle de poste d'assistant administratif.",
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
    text: ["Guichet 3", "Plage municipale", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Guichet",
    vfQ: "Le lieu indiqué est : Guichet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le numéro de l'offre", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "numéro",
    vfQ: "Il faut préparer le numéro de l'offre.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_13_TEXT = `De : Service dossiers

Objet : Premier jour — Répondre à une offre d'emploi

Bonjour,

Pour votre premier jour lié à l'offre de chauffeur livreur, arrivez un peu avant 16 h 30.
La date est le mardi 11 juin, et l'accueil se trouve au Bureau Emploi.
Merci d'apporter votre CV à jour; cela facilitera l'inscription.

Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Merci,
Service dossiers`;

const E13_3_CE_EMAIL_13_POOL = buildExpressPool("e13-3-ce-email-13", [
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
    text: ["Premier jour — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Premier",
    vfQ: "L'objet parle de Premier jour — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["offre de chauffeur livreur", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "chauffeur",
    vfQ: "L'e-mail parle de offre de chauffeur livreur.",
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
    text: ["Bureau Emploi", "Marché couvert", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Emploi",
    vfQ: "Le lieu indiqué est : Bureau Emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV à jour", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV à jour.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_14_TEXT = `De : Mme Moreau

Objet : Merci pour votre réponse — Répondre à une offre d'emploi

Bonjour,

Merci pour votre réponse positive.
Votre place pour le dépôt de dossier au guichet est gardée le mercredi 19 juin à 17 h.
Dans la salle alpes, M. Laurent donnera les consignes et vérifiera une lettre signée.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Merci,
Mme Moreau`;

const E13_3_CE_EMAIL_14_POOL = buildExpressPool("e13-3-ce-email-14", [
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
    text: ["Merci pour votre réponse — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet parle de Merci pour votre réponse — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["dépôt de dossier au guichet", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "dossier",
    vfQ: "L'e-mail parle de dépôt de dossier au guichet.",
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
    text: ["Salle Alpes", "Gare maritime", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Alpes",
    vfQ: "Le lieu indiqué est : Salle Alpes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une lettre signée", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "lettre",
    vfQ: "Il faut préparer une lettre signée.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_15_TEXT = `De : Équipe coordination

Objet : Contact à noter — Répondre à une offre d'emploi

Bonjour,

Voici le contact à noter pour la réponse pour un CDI : Mme Huber.
Vous pouvez appeler le 024 730 44 54 seulement le matin.
La prochaine rencontre aura lieu le jeudi 27 juin à 17 h 30, à l'Entreprise Nova.

C'est important pour moi, merci de lire jusqu'à la fin.
Tu peux partager ce message si besoin.
Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.
On se voit bientôt, j'ai hâte.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci,
Équipe coordination`;

const E13_3_CE_EMAIL_15_POOL = buildExpressPool("e13-3-ce-email-15", [
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
    text: ["Contact à noter — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Contact",
    vfQ: "L'objet parle de Contact à noter — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réponse pour un CDI", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "CDI",
    vfQ: "L'e-mail parle de réponse pour un CDI.",
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
    text: ["Entreprise Nova", "Centre de loisirs", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Nova",
    vfQ: "Le lieu indiqué est : Entreprise Nova.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos certificats de travail", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "certificats",
    vfQ: "Il faut préparer vos certificats de travail.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_16_TEXT = `De : M. Petit

Objet : Message au groupe — Répondre à une offre d'emploi

Bonjour,

Message pour tout le groupe : La réponse pour un emploi temporaire commence bientôt.
Soyez présent(e) le vendredi 5 juillet à 18 h, à l'Agence Travail Direct.
Chaque personne prépare deux références; M. Morel fera l'appel.

Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci,
M. Petit`;

const E13_3_CE_EMAIL_16_POOL = buildExpressPool("e13-3-ce-email-16", [
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
    text: ["Message au groupe — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet parle de Message au groupe — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réponse pour un emploi temporaire", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de réponse pour un emploi temporaire.",
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
    text: ["Agence Travail Direct", "Salle de sport", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Travail",
    vfQ: "Le lieu indiqué est : Agence Travail Direct.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["deux références", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "deux",
    vfQ: "Il faut préparer deux références.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_17_TEXT = `De : Service suivi

Objet : Résumé de la rencontre — Répondre à une offre d'emploi

Bonjour,

Résumé de la rencontre : nous avons parlé de l'atelier sur le profil en ligne.
Le groupe a choisi Espace Candidats pour la suite.
La prochaine date est lundi 15 juillet à 18 h 30. À faire avant : préparer votre adresse e-mail.

Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Merci,
Service suivi`;

const E13_3_CE_EMAIL_17_POOL = buildExpressPool("e13-3-ce-email-17", [
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
    text: ["Résumé de la rencontre — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résumé",
    vfQ: "L'objet parle de Résumé de la rencontre — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier sur le profil en ligne", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "profil",
    vfQ: "L'e-mail parle de atelier sur le profil en ligne.",
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
    text: ["Espace Candidats", "Plage municipale", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Espace",
    vfQ: "Le lieu indiqué est : Espace Candidats.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre adresse e-mail", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "adresse",
    vfQ: "Il faut préparer votre adresse e-mail.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_18_TEXT = `De : Mme Leroy

Objet : Rendez-vous individuel — Répondre à une offre d'emploi

Bonjour,

Votre rendez-vous individuel avec M. Clerc est fixé.
Il concerne l'appel après une candidature. Venez le mardi 23 juillet à 19 h, à Guichet 3.
N'oubliez pas le numéro de l'offre.

Sinon on peut aussi en parler demain matin.
Merci d'avance pour ta réponse.
Je suis disponible après 18 heures.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Merci,
Mme Leroy`;

const E13_3_CE_EMAIL_18_POOL = buildExpressPool("e13-3-ce-email-18", [
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
    text: ["Rendez-vous individuel — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez-vous",
    vfQ: "L'objet parle de Rendez-vous individuel — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["appel après une candidature", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "appel",
    vfQ: "L'e-mail parle de appel après une candidature.",
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
    text: ["Guichet 3", "Marché couvert", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Guichet",
    vfQ: "Le lieu indiqué est : Guichet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le numéro de l'offre", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "numéro",
    vfQ: "Il faut préparer le numéro de l'offre.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_19_TEXT = `De : Accueil principal

Objet : Solution proposée — Répondre à une offre d'emploi

Bonjour,

Nous avons trouvé une solution pour la mise à jour du CV.
Vous pouvez passer le mercredi 31 juillet à 19 h 30 au Bureau Emploi.
Mme Marchand vous expliquera la suite; apportez aussi votre CV à jour.

Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci,
Accueil principal`;

const E13_3_CE_EMAIL_19_POOL = buildExpressPool("e13-3-ce-email-19", [
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
    text: ["Solution proposée — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Solution",
    vfQ: "L'objet parle de Solution proposée — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["mise à jour du CV", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "mise",
    vfQ: "L'e-mail parle de mise à jour du CV.",
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
    text: ["Bureau Emploi", "Gare maritime", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Emploi",
    vfQ: "Le lieu indiqué est : Bureau Emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV à jour", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV à jour.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_20_TEXT = `De : M. Simon

Objet : Dernières informations — Répondre à une offre d'emploi

Bonjour,

Dernières informations avant le rappel avant envoi du dossier.
Le rendez-vous est confirmé pour le jeudi 8 août à 20 h.
Le lieu est Salle Alpes, le contact est M. Laurent, et le document à préparer est une lettre signée.

Encore merci, vraiment.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Merci,
M. Simon`;

const E13_3_CE_EMAIL_20_POOL = buildExpressPool("e13-3-ce-email-20", [
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
    text: ["Dernières informations — Répondre à une offre d'emploi", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernières",
    vfQ: "L'objet parle de Dernières informations — Répondre à une offre d'emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rappel avant envoi du dossier", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "envoi",
    vfQ: "L'e-mail parle de rappel avant envoi du dossier.",
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
    text: ["Salle Alpes", "Centre de loisirs", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Alpes",
    vfQ: "Le lieu indiqué est : Salle Alpes.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une lettre signée", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "lettre",
    vfQ: "Il faut préparer une lettre signée.",
    vfC: 0,
  }),
]);

export const E13_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-3-ce-email",
  readingText: E13_3_CE_EMAIL_TEXT,
  questionPool: E13_3_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-3-ce-email-2",
  readingText: E13_3_CE_EMAIL_2_TEXT,
  questionPool: E13_3_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-3",
  readingText: E13_3_CE_EMAIL_3_TEXT,
  questionPool: E13_3_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-4",
  readingText: E13_3_CE_EMAIL_4_TEXT,
  questionPool: E13_3_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-5",
  readingText: E13_3_CE_EMAIL_5_TEXT,
  questionPool: E13_3_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-6",
  readingText: E13_3_CE_EMAIL_6_TEXT,
  questionPool: E13_3_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-7",
  readingText: E13_3_CE_EMAIL_7_TEXT,
  questionPool: E13_3_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-8",
  readingText: E13_3_CE_EMAIL_8_TEXT,
  questionPool: E13_3_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-9",
  readingText: E13_3_CE_EMAIL_9_TEXT,
  questionPool: E13_3_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-10",
  readingText: E13_3_CE_EMAIL_10_TEXT,
  questionPool: E13_3_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-11",
  readingText: E13_3_CE_EMAIL_11_TEXT,
  questionPool: E13_3_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-12",
  readingText: E13_3_CE_EMAIL_12_TEXT,
  questionPool: E13_3_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-13",
  readingText: E13_3_CE_EMAIL_13_TEXT,
  questionPool: E13_3_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-14",
  readingText: E13_3_CE_EMAIL_14_TEXT,
  questionPool: E13_3_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-15",
  readingText: E13_3_CE_EMAIL_15_TEXT,
  questionPool: E13_3_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-16",
  readingText: E13_3_CE_EMAIL_16_TEXT,
  questionPool: E13_3_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-17",
  readingText: E13_3_CE_EMAIL_17_TEXT,
  questionPool: E13_3_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-18",
  readingText: E13_3_CE_EMAIL_18_TEXT,
  questionPool: E13_3_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-19",
  readingText: E13_3_CE_EMAIL_19_TEXT,
  questionPool: E13_3_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-3-ce-email-20",
  readingText: E13_3_CE_EMAIL_20_TEXT,
  questionPool: E13_3_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E13_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-3-pee-1",
    title: "Postuler comme vendeur / vendeuse",
    situation: "Le supermarché publie une offre d'emploi.",
    sourceMessage: {
      from: "Supermarché Riviera",
      subject: "Offre d'emploi — vendeur / vendeuse",
      body: "Madame, Monsieur,\nNous cherchons un vendeur ou une vendeuse à 80 % pour le rayon fruits et légumes.\nPour postuler, répondez à cet e-mail avec votre CV.\nLe service des ressources humaines",
    },
    instruction: "Répondez au supermarché : présentez-vous, parlez de votre expérience dans la vente et expliquez pourquoi ce poste vous intéresse.",
    points: ["Votre présentation", "Votre expérience", "Pourquoi ce poste vous intéresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-2",
    title: "Demander des précisions sur une offre",
    situation: "Un café cherche du personnel, mais l'annonce donne peu de détails.",
    sourceMessage: {
      from: "Café de la Poste",
      subject: "Nous cherchons un serveur / une serveuse",
      body: "Bonjour,\nNotre café cherche un serveur ou une serveuse pour le service du matin.\nPour plus d'informations, écrivez-nous.\nLe Café de la Poste",
    },
    instruction: "Répondez au café : dites que l'offre vous intéresse, posez une question sur le salaire et une question sur les horaires.",
    points: ["Votre intérêt", "Une question sur le salaire", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-3",
    title: "Envoyer un document manquant",
    situation: "Les ressources humaines n'ont pas reçu votre lettre de motivation.",
    sourceMessage: {
      from: "Service des ressources humaines, Supermarché Riviera",
      subject: "Document manquant",
      body: "Madame, Monsieur,\nNous avons bien reçu votre CV, mais il manque votre lettre de motivation.\nMerci de nous l'envoyer avant le 20 septembre.\nLe service des ressources humaines",
    },
    instruction: "Répondez aux ressources humaines : excusez-vous, dites que vous envoyez la lettre de motivation et confirmez votre intérêt pour le poste.",
    points: ["L'excuse", "L'envoi de la lettre", "Votre intérêt pour le poste"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-4",
    title: "Répondre à un refus",
    situation: "L'entreprise a choisi une autre personne.",
    sourceMessage: {
      from: "Entreprise Batimo",
      subject: "Votre candidature",
      body: "Madame, Monsieur,\nNous vous remercions pour votre candidature.\nMalheureusement, nous avons choisi une autre personne pour ce poste.\nNous vous souhaitons bonne chance dans vos recherches.\nEntreprise Batimo",
    },
    instruction: "Répondez à l'entreprise : remerciez pour la réponse, demandez de garder votre CV et dites que vous restez intéressé(e) par un futur poste.",
    points: ["Un remerciement", "La demande de garder votre CV", "Votre intérêt pour un futur poste"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-5",
    title: "Répondre à une conseillère",
    situation: "Une agence de placement vous envoie une offre.",
    sourceMessage: {
      from: "Mme Steiner, Agence TravailPlus",
      subject: "Offre : aide de cuisine à 60 %",
      body: "Bonjour,\nJ'ai une offre pour vous : aide de cuisine à 60 % dans un restaurant du centre-ville, du mardi au samedi.\nÊtes-vous intéressé(e) ?\nMme Steiner",
    },
    instruction: "Répondez à Mme Steiner : dites si l'offre vous intéresse, expliquez pourquoi et posez une question sur le salaire.",
    points: ["Votre réponse (oui ou non)", "Pourquoi", "Une question sur le salaire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-6",
    title: "Demander un délai",
    situation: "L'entreprise demande vos certificats de travail très vite.",
    sourceMessage: {
      from: "Service des ressources humaines, Entreprise Batimo",
      subject: "Vos certificats de travail",
      body: "Madame, Monsieur,\nPour continuer l'étude de votre candidature, il nous faut vos certificats de travail avant jeudi.\nMeilleures salutations,\nLe service des ressources humaines",
    },
    instruction: "Répondez aux ressources humaines : excusez-vous, expliquez pourquoi vous avez besoin de plus de temps et proposez une nouvelle date d'envoi.",
    points: ["L'excuse", "Pourquoi vous avez besoin de temps", "La nouvelle date d'envoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-7",
    title: "Répondre à un ami",
    situation: "Un ami vous envoie une offre d'emploi.",
    sourceMessage: {
      from: "Ali",
      subject: "Offre pour toi !",
      body: "Salut !\nJ'ai vu une offre pour toi : livreur à 100 % pour un magasin de meubles. Il faut le permis de conduire.\nTu vas postuler ?\nAli",
    },
    instruction: "Répondez à Ali : remerciez-le, dites si vous allez postuler et pourquoi, et posez une question sur l'offre.",
    points: ["Un remerciement", "Votre décision et pourquoi", "Une question sur l'offre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-8",
    title: "Donner ses disponibilités",
    situation: "L'entreprise a bien reçu votre candidature.",
    sourceMessage: {
      from: "Supermarché Riviera",
      subject: "Suite de votre candidature",
      body: "Madame, Monsieur,\nNous avons bien reçu votre dossier, merci.\nPour organiser un entretien, merci de nous donner vos disponibilités pour la semaine prochaine.\nLe service des ressources humaines",
    },
    instruction: "Répondez au supermarché : remerciez, donnez vos disponibilités pour la semaine prochaine et posez une question sur le lieu de l'entretien.",
    points: ["Un remerciement", "Vos disponibilités", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-9",
    title: "Demander un autre taux d'activité",
    situation: "L'offre est à 100 %, mais vous cherchez un temps partiel.",
    sourceMessage: {
      from: "Boutique Fleur de Lys",
      subject: "Poste de vente à 100 %",
      body: "Bonjour,\nNous cherchons une personne pour la vente à 100 %, du lundi au samedi.\nVotre profil nous intéresse.\nLa Boutique Fleur de Lys",
    },
    instruction: "Répondez à la boutique : remerciez, expliquez que vous cherchez un poste à temps partiel et demandez si un poste à 60 % est possible.",
    points: ["Un remerciement", "Votre situation (temps partiel)", "La question sur un poste à 60 %"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-10",
    title: "Compléter son dossier",
    situation: "Il manque des informations dans votre candidature.",
    sourceMessage: {
      from: "Service des ressources humaines, Clinique des Lilas",
      subject: "Dossier incomplet",
      body: "Madame, Monsieur,\nVotre dossier de candidature est incomplet : il manque votre numéro de téléphone et vos dates de disponibilité.\nMerci de nous envoyer ces informations.\nLe service des ressources humaines",
    },
    instruction: "Répondez à la clinique : donnez votre numéro de téléphone, indiquez vos dates de disponibilité et remerciez pour l'intérêt porté à votre dossier.",
    points: ["Votre numéro de téléphone", "Vos disponibilités", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-11",
    title: "Répondre — emploi (11)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-12",
    title: "Répondre — emploi (12)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-13",
    title: "Répondre — emploi (13)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-14",
    title: "Répondre — emploi (14)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-15",
    title: "Répondre — emploi (15)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-16",
    title: "Répondre — emploi (16)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-17",
    title: "Répondre — emploi (17)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-18",
    title: "Répondre — emploi (18)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-19",
    title: "Répondre — emploi (19)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-20",
    title: "Répondre — emploi (20)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E13.4 — Passer un entretien
   ════════════════════════════════════════════════════════════════════════════ */

const E13_4_CE_EMAIL_TEXT = `De : Accueil Horizon

Objet : Confirmation de rendez-vous — Passer un entretien

Bonjour,

Votre rendez-vous est confirmé pour l'entretien pour un poste d'accueil.
Nous vous accueillerons le lundi 4 mars à 8 h 30 à l'Entreprise Alpina.
Mme Duval sera à l'entrée pour vous guider. Merci d'apporter votre CV imprimé.

Une confirmation vous sera envoyée ensuite.
Merci de vérifier les informations avant de répondre.
Nous sommes ouverts du lundi au vendredi.
Cordialement, et bonne journée.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
Merci,
Accueil Horizon`;

const E13_4_CE_EMAIL_POOL = buildExpressPool("e13-4-ce-email", [
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
    text: ["Confirmation de rendez-vous — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet parle de Confirmation de rendez-vous — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["entretien pour un poste d'accueil", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "poste",
    vfQ: "L'e-mail parle de entretien pour un poste d'accueil.",
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
    text: ["Entreprise Alpina", "Piscine couverte", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Alpina",
    vfQ: "Le lieu indiqué est : Entreprise Alpina.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV imprimé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV imprimé.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_2_TEXT = `De : Mme Bernard

Objet : Documents à apporter — Passer un entretien

Bonjour,

Pour préparer la simulation d'entretien, mettez une pièce d'identité dans votre sac.
La rencontre aura lieu le mardi 12 mars à 9 h, dans la Salle Entretien.
Si vous avez une question, M. Steiner répond au 026 840 31 41.

En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
Merci,
Mme Bernard`;

const E13_4_CE_EMAIL_2_POOL = buildExpressPool("e13-4-ce-email-2", [
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
    text: ["Documents à apporter — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Documents",
    vfQ: "L'objet parle de Documents à apporter — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["simulation d'entretien", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "simulation",
    vfQ: "L'e-mail parle de simulation d'entretien.",
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
    text: ["Salle Entretien", "Café du Port", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Salle",
    vfQ: "Le lieu indiqué est : Salle Entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une pièce d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "pièce",
    vfQ: "Il faut préparer une pièce d'identité.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_3_TEXT = `De : Secrétariat Central

Objet : Changement d'horaire — Passer un entretien

Bonjour,

L'horaire de l'entretien avec les ressources humaines change légèrement.
Le nouveau rendez-vous est fixé au mercredi 20 mars à 9 h 15.
Le lieu reste Bureau RH. Pensez à prévenir Mme Chevalier si vous ne pouvez pas venir.

Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
Merci,
Secrétariat Central`;

const E13_4_CE_EMAIL_3_POOL = buildExpressPool("e13-4-ce-email-3", [
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
    text: ["Changement d'horaire — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet parle de Changement d'horaire — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["entretien avec les ressources humaines", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "ressources",
    vfQ: "L'e-mail parle de entretien avec les ressources humaines.",
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
    text: ["Bureau RH", "Salle de cinéma", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "RH",
    vfQ: "Le lieu indiqué est : Bureau RH.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la convocation", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "convocation",
    vfQ: "Il faut préparer la convocation.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_4_TEXT = `De : M. Lopez

Objet : Réponse à votre demande — Passer un entretien

Bonjour,

Nous avons bien reçu votre demande concernant la préparation des questions fermées.
Vous pouvez passer le jeudi 28 mars; l'accueil ouvrira à 10 h à l'Hôtel Central.
Le dossier sera plus vite traité avec vos certificats.

Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.
Le parking le plus proche est gratuit le soir.
Vous pouvez venir en vélo s'il fait beau.
Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci,
M. Lopez`;

const E13_4_CE_EMAIL_4_POOL = buildExpressPool("e13-4-ce-email-4", [
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
    text: ["Réponse à votre demande — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Réponse",
    vfQ: "L'objet parle de Réponse à votre demande — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["préparation des questions fermées", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "questions",
    vfQ: "L'e-mail parle de préparation des questions fermées.",
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
    text: ["Hôtel Central", "Camping Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Hôtel",
    vfQ: "Le lieu indiqué est : Hôtel Central.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos certificats", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "certificats",
    vfQ: "Il faut préparer vos certificats.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_5_TEXT = `De : Service administratif

Objet : Programme de la journée — Passer un entretien

Bonjour,

Voici le déroulement prévu le vendredi 5 avril.
À 10 h 30, accueil à l'Agence Recrutement. Ensuite, Mme Aubert présentera l'entretien pour un CDI.
La séance est courte; gardez simplement un stylo noir avec vous.

Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Une confirmation vous sera envoyée ensuite.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Merci,
Service administratif`;

const E13_4_CE_EMAIL_5_POOL = buildExpressPool("e13-4-ce-email-5", [
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
    text: ["Programme de la journée — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Programme",
    vfQ: "L'objet parle de Programme de la journée — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["entretien pour un CDI", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "CDI",
    vfQ: "L'e-mail parle de entretien pour un CDI.",
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
    text: ["Agence Recrutement", "Boutique Fleurie", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Recrutement",
    vfQ: "Le lieu indiqué est : Agence Recrutement.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un stylo noir", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "stylo",
    vfQ: "Il faut préparer un stylo noir.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_6_TEXT = `De : Mme Garcia

Objet : Rappel avant la visite — Passer un entretien

Bonjour,

Petit rappel avant votre visite : l'atelier qualités et défauts est bien prévu le samedi 13 avril.
Merci d'arriver à 11 h dans la Salle Mont-Blanc.
M. Blanc vérifiera que votre dossier contient la liste de vos questions.

Apporte ce dont tu as besoin, juste au cas où.
Encore merci, vraiment.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Merci,
Mme Garcia`;

const E13_4_CE_EMAIL_6_POOL = buildExpressPool("e13-4-ce-email-6", [
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
    text: ["Rappel avant la visite — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet parle de Rappel avant la visite — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier qualités et défauts", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "qualités",
    vfQ: "L'e-mail parle de atelier qualités et défauts.",
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
    text: ["Salle Mont-Blanc", "Piscine couverte", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Mont-Blanc",
    vfQ: "Le lieu indiqué est : Salle Mont-Blanc.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la liste de vos questions", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "liste",
    vfQ: "Il faut préparer la liste de vos questions.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_7_TEXT = `De : Bureau des inscriptions

Objet : Invitation à une réunion — Passer un entretien

Bonjour,

Nous vous invitons à une réunion au sujet de le rendez-vous avec un recruteur.
Elle se tiendra le lundi 22 avril à 13 h 30, à l'Entreprise Alpina.
Répondez avant vendredi et signalez à Mme Duval si votre CV imprimé manque encore.

Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Merci,
Bureau des inscriptions`;

const E13_4_CE_EMAIL_7_POOL = buildExpressPool("e13-4-ce-email-7", [
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
    text: ["Invitation à une réunion — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet parle de Invitation à une réunion — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rendez-vous avec un recruteur", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "recruteur",
    vfQ: "L'e-mail parle de rendez-vous avec un recruteur.",
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
    text: ["Entreprise Alpina", "Café du Port", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Alpina",
    vfQ: "Le lieu indiqué est : Entreprise Alpina.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV imprimé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV imprimé.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_8_TEXT = `De : M. Girard

Objet : Résultat de votre dossier — Passer un entretien

Bonjour,

Votre dossier pour le test oral avant entretien est maintenant complet.
La prochaine étape se fera le mardi 30 avril à 14 h.
Rendez-vous dans la Salle Entretien; gardez une pièce d'identité avec vous jusqu'à la fin.

Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Votre dossier sera mis à jour après votre réponse.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Merci,
M. Girard`;

const E13_4_CE_EMAIL_8_POOL = buildExpressPool("e13-4-ce-email-8", [
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
    text: ["Résultat de votre dossier — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résultat",
    vfQ: "L'objet parle de Résultat de votre dossier — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["test oral avant entretien", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "test",
    vfQ: "L'e-mail parle de test oral avant entretien.",
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
    text: ["Salle Entretien", "Salle de cinéma", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Salle",
    vfQ: "Le lieu indiqué est : Salle Entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une pièce d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "pièce",
    vfQ: "Il faut préparer une pièce d'identité.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_9_TEXT = `De : Service planning

Objet : Pièce manquante — Passer un entretien

Bonjour,

Il manque encore la convocation.
Vous pouvez le déposer le mercredi 8 mai à partir de 14 h 30, au Bureau RH.
Demandez Mme Chevalier à l'accueil pour éviter une attente trop longue.

N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Merci,
Service planning`;

const E13_4_CE_EMAIL_9_POOL = buildExpressPool("e13-4-ce-email-9", [
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
    text: ["Pièce manquante — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Pièce",
    vfQ: "L'objet parle de Pièce manquante — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["entretien dans un hôtel", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "hôtel",
    vfQ: "L'e-mail parle de entretien dans un hôtel.",
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
    text: ["Bureau RH", "Camping Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "RH",
    vfQ: "Le lieu indiqué est : Bureau RH.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la convocation", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "convocation",
    vfQ: "Il faut préparer la convocation.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_10_TEXT = `De : Mme Nguyen

Objet : Nouveau créneau proposé — Passer un entretien

Bonjour,

Le rendez-vous pour la séance sur la ponctualité est reporté.
Nous proposons maintenant le jeudi 16 mai à 15 h, toujours à l'Hôtel Central.
Merci de confirmer votre présence à M. Kurz.

Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
Merci,
Mme Nguyen`;

const E13_4_CE_EMAIL_10_POOL = buildExpressPool("e13-4-ce-email-10", [
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
    text: ["Nouveau créneau proposé — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Nouveau",
    vfQ: "L'objet parle de Nouveau créneau proposé — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["séance sur la ponctualité", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "ponctualité",
    vfQ: "L'e-mail parle de séance sur la ponctualité.",
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
    text: ["Hôtel Central", "Boutique Fleurie", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Hôtel",
    vfQ: "Le lieu indiqué est : Hôtel Central.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos certificats", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "certificats",
    vfQ: "Il faut préparer vos certificats.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_11_TEXT = `De : Accueil formation

Objet : Deux choix possibles — Passer un entretien

Bonjour,

Deux choix étaient possibles pour l'entretien pour un apprentissage adulte.
Vous avez choisi le créneau du vendredi 24 mai à 15 h 30.
La rencontre aura lieu à l'Agence Recrutement; apportez un stylo noir.

Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
Le service est disponible également en ligne.
Pensez à joindre les documents demandés.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Merci,
Accueil formation`;

const E13_4_CE_EMAIL_11_POOL = buildExpressPool("e13-4-ce-email-11", [
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
    text: ["Deux choix possibles — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Deux",
    vfQ: "L'objet parle de Deux choix possibles — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["entretien pour un apprentissage adulte", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "apprentissage",
    vfQ: "L'e-mail parle de entretien pour un apprentissage adulte.",
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
    text: ["Agence Recrutement", "Piscine couverte", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Recrutement",
    vfQ: "Le lieu indiqué est : Agence Recrutement.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un stylo noir", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "stylo",
    vfQ: "Il faut préparer un stylo noir.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_12_TEXT = `De : M. Robert

Objet : Suite à notre appel — Passer un entretien

Bonjour,

Suite à notre appel, je résume les informations.
La préparation de la présentation personnelle aura lieu le lundi 3 juin à 16 h, dans la Salle Mont-Blanc.
M. Blanc vous attendra avec la liste des participants.

Si le plan change, je te préviens tout de suite.
C'est important pour moi, merci de lire jusqu'à la fin.
Tu peux partager ce message si besoin.
Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.
On se voit bientôt, j'ai hâte.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci,
M. Robert`;

const E13_4_CE_EMAIL_12_POOL = buildExpressPool("e13-4-ce-email-12", [
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
    text: ["Suite à notre appel — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Suite",
    vfQ: "L'objet parle de Suite à notre appel — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["préparation de la présentation personnelle", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "personnelle",
    vfQ: "L'e-mail parle de préparation de la présentation personnelle.",
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
    text: ["Salle Mont-Blanc", "Café du Port", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Mont-Blanc",
    vfQ: "Le lieu indiqué est : Salle Mont-Blanc.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la liste de vos questions", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "liste",
    vfQ: "Il faut préparer la liste de vos questions.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_13_TEXT = `De : Service dossiers

Objet : Premier jour — Passer un entretien

Bonjour,

Pour votre premier jour lié à l'entretien téléphonique, arrivez un peu avant 16 h 30.
La date est le mardi 11 juin, et l'accueil se trouve à l'Entreprise Alpina.
Merci d'apporter votre CV imprimé; cela facilitera l'inscription.

Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci,
Service dossiers`;

const E13_4_CE_EMAIL_13_POOL = buildExpressPool("e13-4-ce-email-13", [
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
    text: ["Premier jour — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Premier",
    vfQ: "L'objet parle de Premier jour — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["entretien téléphonique", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "téléphonique",
    vfQ: "L'e-mail parle de entretien téléphonique.",
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
    text: ["Entreprise Alpina", "Salle de cinéma", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Alpina",
    vfQ: "Le lieu indiqué est : Entreprise Alpina.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV imprimé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV imprimé.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_14_TEXT = `De : Mme Moreau

Objet : Merci pour votre réponse — Passer un entretien

Bonjour,

Merci pour votre réponse positive.
Votre place pour la visite avant entretien est gardée le mercredi 19 juin à 17 h.
Dans la salle entretien, M. Steiner donnera les consignes et vérifiera une pièce d'identité.

Votre dossier sera mis à jour après votre réponse.
Nous vous souhaitons une excellente journée.
Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Merci,
Mme Moreau`;

const E13_4_CE_EMAIL_14_POOL = buildExpressPool("e13-4-ce-email-14", [
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
    text: ["Merci pour votre réponse — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet parle de Merci pour votre réponse — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["visite avant entretien", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "visite",
    vfQ: "L'e-mail parle de visite avant entretien.",
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
    text: ["Salle Entretien", "Camping Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Salle",
    vfQ: "Le lieu indiqué est : Salle Entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une pièce d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "pièce",
    vfQ: "Il faut préparer une pièce d'identité.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_15_TEXT = `De : Équipe coordination

Objet : Contact à noter — Passer un entretien

Bonjour,

Voici le contact à noter pour l'entretien pour un poste de vendeur : Mme Chevalier.
Vous pouvez appeler le 026 840 44 54 seulement le matin.
La prochaine rencontre aura lieu le jeudi 27 juin à 17 h 30, au Bureau RH.

Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Le personnel peut répondre en français simple.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Merci,
Équipe coordination`;

const E13_4_CE_EMAIL_15_POOL = buildExpressPool("e13-4-ce-email-15", [
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
    text: ["Contact à noter — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Contact",
    vfQ: "L'objet parle de Contact à noter — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["entretien pour un poste de vendeur", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "poste",
    vfQ: "L'e-mail parle de entretien pour un poste de vendeur.",
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
    text: ["Bureau RH", "Boutique Fleurie", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "RH",
    vfQ: "Le lieu indiqué est : Bureau RH.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la convocation", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "convocation",
    vfQ: "Il faut préparer la convocation.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_16_TEXT = `De : M. Petit

Objet : Message au groupe — Passer un entretien

Bonjour,

Message pour tout le groupe : L'atelier tenue professionnelle commence bientôt.
Soyez présent(e) le vendredi 5 juillet à 18 h, à l'Hôtel Central.
Chaque personne prépare vos certificats; M. Kurz fera l'appel.

Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci,
M. Petit`;

const E13_4_CE_EMAIL_16_POOL = buildExpressPool("e13-4-ce-email-16", [
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
    text: ["Message au groupe — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet parle de Message au groupe — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier tenue professionnelle", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "tenue",
    vfQ: "L'e-mail parle de atelier tenue professionnelle.",
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
    text: ["Hôtel Central", "Piscine couverte", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Hôtel",
    vfQ: "Le lieu indiqué est : Hôtel Central.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos certificats", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "certificats",
    vfQ: "Il faut préparer vos certificats.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_17_TEXT = `De : Service suivi

Objet : Résumé de la rencontre — Passer un entretien

Bonjour,

Résumé de la rencontre : nous avons parlé de le rappel des documents d'entretien.
Le groupe a choisi Agence Recrutement pour la suite.
La prochaine date est lundi 15 juillet à 18 h 30. À faire avant : préparer un stylo noir.

J'espère que tu vas bien et que tout se passe comme prévu.
N'oublie pas de me confirmer dès que tu peux.
Sinon on peut aussi en parler demain matin.
Merci d'avance pour ta réponse.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Merci,
Service suivi`;

const E13_4_CE_EMAIL_17_POOL = buildExpressPool("e13-4-ce-email-17", [
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
    text: ["Résumé de la rencontre — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résumé",
    vfQ: "L'objet parle de Résumé de la rencontre — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rappel des documents d'entretien", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "documents",
    vfQ: "L'e-mail parle de rappel des documents d'entretien.",
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
    text: ["Agence Recrutement", "Café du Port", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Recrutement",
    vfQ: "Le lieu indiqué est : Agence Recrutement.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["un stylo noir", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "stylo",
    vfQ: "Il faut préparer un stylo noir.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_18_TEXT = `De : Mme Leroy

Objet : Rendez-vous individuel — Passer un entretien

Bonjour,

Votre rendez-vous individuel avec M. Blanc est fixé.
Il concerne l'entretien avec deux responsables. Venez le mardi 23 juillet à 19 h, dans la Salle Mont-Blanc.
N'oubliez pas la liste de vos questions.

Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci,
Mme Leroy`;

const E13_4_CE_EMAIL_18_POOL = buildExpressPool("e13-4-ce-email-18", [
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
    text: ["Rendez-vous individuel — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez-vous",
    vfQ: "L'objet parle de Rendez-vous individuel — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["entretien avec deux responsables", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "deux",
    vfQ: "L'e-mail parle de entretien avec deux responsables.",
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
    text: ["Salle Mont-Blanc", "Salle de cinéma", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Mont-Blanc",
    vfQ: "Le lieu indiqué est : Salle Mont-Blanc.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la liste de vos questions", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "liste",
    vfQ: "Il faut préparer la liste de vos questions.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_19_TEXT = `De : Accueil principal

Objet : Solution proposée — Passer un entretien

Bonjour,

Nous avons trouvé une solution pour le bilan après simulation.
Vous pouvez passer le mercredi 31 juillet à 19 h 30 à l'Entreprise Alpina.
Mme Duval vous expliquera la suite; apportez aussi votre CV imprimé.

Ce document complète les informations déjà données.
Nous comptons sur vous.
Le service répond en français et en anglais.
Une version audio est disponible sur demande.
Les documents se téléchargent aussi en ligne.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci,
Accueil principal`;

const E13_4_CE_EMAIL_19_POOL = buildExpressPool("e13-4-ce-email-19", [
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
    text: ["Solution proposée — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Solution",
    vfQ: "L'objet parle de Solution proposée — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["bilan après simulation", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "bilan",
    vfQ: "L'e-mail parle de bilan après simulation.",
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
    text: ["Entreprise Alpina", "Camping Nord", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Alpina",
    vfQ: "Le lieu indiqué est : Entreprise Alpina.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre CV imprimé", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "CV",
    vfQ: "Il faut préparer votre CV imprimé.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_20_TEXT = `De : M. Simon

Objet : Dernières informations — Passer un entretien

Bonjour,

Dernières informations avant le message avant l'entretien final.
Le rendez-vous est confirmé pour le jeudi 8 août à 20 h.
Le lieu est Salle Entretien, le contact est M. Steiner, et le document à préparer est une pièce d'identité.

En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
Merci,
M. Simon`;

const E13_4_CE_EMAIL_20_POOL = buildExpressPool("e13-4-ce-email-20", [
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
    text: ["Dernières informations — Passer un entretien", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernières",
    vfQ: "L'objet parle de Dernières informations — Passer un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["message avant l'entretien final", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "message",
    vfQ: "L'e-mail parle de message avant l'entretien final.",
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
    text: ["Salle Entretien", "Boutique Fleurie", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Salle",
    vfQ: "Le lieu indiqué est : Salle Entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["une pièce d'identité", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "pièce",
    vfQ: "Il faut préparer une pièce d'identité.",
    vfC: 0,
  }),
]);

export const E13_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-4-ce-email",
  readingText: E13_4_CE_EMAIL_TEXT,
  questionPool: E13_4_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-4-ce-email-2",
  readingText: E13_4_CE_EMAIL_2_TEXT,
  questionPool: E13_4_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-3",
  readingText: E13_4_CE_EMAIL_3_TEXT,
  questionPool: E13_4_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-4",
  readingText: E13_4_CE_EMAIL_4_TEXT,
  questionPool: E13_4_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-5",
  readingText: E13_4_CE_EMAIL_5_TEXT,
  questionPool: E13_4_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-6",
  readingText: E13_4_CE_EMAIL_6_TEXT,
  questionPool: E13_4_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-7",
  readingText: E13_4_CE_EMAIL_7_TEXT,
  questionPool: E13_4_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-8",
  readingText: E13_4_CE_EMAIL_8_TEXT,
  questionPool: E13_4_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-9",
  readingText: E13_4_CE_EMAIL_9_TEXT,
  questionPool: E13_4_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-10",
  readingText: E13_4_CE_EMAIL_10_TEXT,
  questionPool: E13_4_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-11",
  readingText: E13_4_CE_EMAIL_11_TEXT,
  questionPool: E13_4_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-12",
  readingText: E13_4_CE_EMAIL_12_TEXT,
  questionPool: E13_4_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-13",
  readingText: E13_4_CE_EMAIL_13_TEXT,
  questionPool: E13_4_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-14",
  readingText: E13_4_CE_EMAIL_14_TEXT,
  questionPool: E13_4_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-15",
  readingText: E13_4_CE_EMAIL_15_TEXT,
  questionPool: E13_4_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-16",
  readingText: E13_4_CE_EMAIL_16_TEXT,
  questionPool: E13_4_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-17",
  readingText: E13_4_CE_EMAIL_17_TEXT,
  questionPool: E13_4_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-18",
  readingText: E13_4_CE_EMAIL_18_TEXT,
  questionPool: E13_4_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-19",
  readingText: E13_4_CE_EMAIL_19_TEXT,
  questionPool: E13_4_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-4-ce-email-20",
  readingText: E13_4_CE_EMAIL_20_TEXT,
  questionPool: E13_4_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E13_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-4-pee-1",
    title: "Confirmer sa présence",
    situation: "La boulangerie vous invite à un entretien.",
    sourceMessage: {
      from: "Mme Nguyen, Boulangerie du Pont",
      subject: "Convocation à un entretien",
      body: "Bonjour,\nNous vous invitons à un entretien le jeudi 12 octobre à 14 h 30 à la boulangerie.\nMerci de confirmer votre présence.\nMme Nguyen",
    },
    instruction: "Répondez à Mme Nguyen : confirmez votre présence, remerciez pour l'invitation et posez une question sur les documents à apporter.",
    points: ["La confirmation", "Un remerciement", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-2",
    title: "Déplacer un entretien",
    situation: "Le garage propose un entretien à une heure où vous travaillez.",
    sourceMessage: {
      from: "Garage Central",
      subject: "Entretien mardi à 10 h",
      body: "Bonjour,\nPouvez-vous venir à un entretien mardi prochain à 10 h à notre atelier ?\nMerci de votre réponse,\nGarage Central",
    },
    instruction: "Répondez au garage : excusez-vous, expliquez que vous travaillez à cette heure et proposez deux autres dates possibles.",
    points: ["L'excuse", "Pourquoi mardi à 10 h n'est pas possible", "Deux autres dates"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-3",
    title: "Demander le lieu exact",
    situation: "L'entreprise vous invite, mais l'adresse n'est pas claire.",
    sourceMessage: {
      from: "Entreprise Infotech",
      subject: "Invitation à un entretien",
      body: "Bonjour,\nNous vous invitons à un entretien le lundi 3 novembre à 9 h à notre siège.\nMeilleures salutations,\nEntreprise Infotech",
    },
    instruction: "Répondez à l'entreprise : confirmez la date, demandez l'adresse exacte et demandez quelle personne vous devez chercher à l'accueil.",
    points: ["La confirmation de la date", "La question sur l'adresse", "La question sur la personne à l'accueil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-4",
    title: "Remercier après l'entretien",
    situation: "Après votre entretien, l'entreprise vous écrit.",
    sourceMessage: {
      from: "Mme Nguyen, Boulangerie du Pont",
      subject: "Merci de votre visite",
      body: "Bonjour,\nMerci d'être venu(e) à l'entretien aujourd'hui.\nNous allons vous donner notre réponse la semaine prochaine.\nMme Nguyen",
    },
    instruction: "Répondez à Mme Nguyen : remerciez pour l'entretien, redites votre intérêt pour le poste et ajoutez une information que vous avez oublié de dire.",
    points: ["Un remerciement", "Votre intérêt pour le poste", "Une information oubliée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-5",
    title: "Répondre à un ami",
    situation: "Un ami vous pose des questions sur votre entretien.",
    sourceMessage: {
      from: "Sami",
      subject: "Ton entretien",
      body: "Salut !\nAlors, c'est quand ton entretien ? Tu es prêt ?\nSi tu veux, je peux t'aider à préparer les questions.\nSami",
    },
    instruction: "Répondez à Sami : dites quand a lieu l'entretien, expliquez comment vous vous préparez et répondez à sa proposition d'aide.",
    points: ["La date de l'entretien", "Votre préparation", "Votre réponse à sa proposition"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-6",
    title: "Préparer l'entretien avec une conseillère",
    situation: "Votre conseillère propose de préparer l'entretien avec vous.",
    sourceMessage: {
      from: "Mme Steiner, Agence TravailPlus",
      subject: "Préparation de votre entretien",
      body: "Bonjour,\nVotre entretien approche. Je vous propose une séance de préparation à l'agence cette semaine.\nQuel jour vous convient ?\nMme Steiner",
    },
    instruction: "Répondez à Mme Steiner : acceptez la séance, proposez un jour et une heure, et demandez ce que vous devez apporter.",
    points: ["Votre accord", "Le jour et l'heure proposés", "Une question sur les documents à apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-7",
    title: "Annuler un entretien",
    situation: "Vous avez accepté un autre travail et la boutique vous rappelle votre entretien de demain.",
    sourceMessage: {
      from: "Boutique Fleur de Lys",
      subject: "Rappel : entretien demain à 15 h",
      body: "Bonjour,\nNous vous rappelons votre entretien demain à 15 h à la boutique.\nÀ demain,\nLa Boutique Fleur de Lys",
    },
    instruction: "Répondez à la boutique : excusez-vous et annulez l'entretien, expliquez que vous avez accepté un autre poste et remerciez pour l'invitation.",
    points: ["L'excuse et l'annulation", "L'explication", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-8",
    title: "Question sur les documents",
    situation: "L'entreprise vous demande d'apporter « vos documents ».",
    sourceMessage: {
      from: "Entreprise Batimo",
      subject: "Votre entretien de vendredi",
      body: "Bonjour,\nNous vous attendons vendredi à 10 h pour votre entretien.\nMerci d'apporter vos documents.\nEntreprise Batimo",
    },
    instruction: "Répondez à l'entreprise : confirmez votre présence, demandez quels documents il faut apporter et demandez combien de temps dure l'entretien.",
    points: ["La confirmation", "La question sur les documents", "La question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-9",
    title: "Raconter son entretien",
    situation: "Votre sœur veut savoir comment s'est passé votre entretien.",
    sourceMessage: {
      from: "Nadia",
      subject: "Alors, cet entretien ?",
      body: "Salut !\nTon entretien, c'était aujourd'hui, non ? Comment ça s'est passé ?\nRaconte-moi tout !\nNadia",
    },
    instruction: "Répondez à Nadia : racontez comment l'entretien s'est passé, donnez un exemple de question posée et dites quand vous allez recevoir la réponse.",
    points: ["Comment l'entretien s'est passé", "Une question posée", "Quand arrive la réponse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-10",
    title: "Répondre à une réponse positive",
    situation: "Bonne nouvelle : vous avez le poste !",
    sourceMessage: {
      from: "Mme Nguyen, Boulangerie du Pont",
      subject: "Bonne nouvelle",
      body: "Bonjour,\nNous avons le plaisir de vous annoncer que vous avez le poste !\nPouvez-vous venir signer le contrat lundi à 10 h ?\nMme Nguyen",
    },
    instruction: "Répondez à Mme Nguyen : remerciez, confirmez le rendez-vous de lundi et posez une question sur le premier jour de travail.",
    points: ["Un remerciement", "La confirmation du rendez-vous", "Une question sur le premier jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-11",
    title: "Répondre — entretien (11)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-12",
    title: "Répondre — entretien (12)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-13",
    title: "Répondre — entretien (13)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-14",
    title: "Répondre — entretien (14)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-15",
    title: "Répondre — entretien (15)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-16",
    title: "Répondre — entretien (16)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-17",
    title: "Répondre — entretien (17)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-18",
    title: "Répondre — entretien (18)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-19",
    title: "Répondre — entretien (19)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-20",
    title: "Répondre — entretien (20)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E13.5 — S'intégrer à l'entreprise
   ════════════════════════════════════════════════════════════════════════════ */

const E13_5_CE_EMAIL_TEXT = `De : Accueil Horizon

Objet : Confirmation de rendez-vous — S'intégrer à l'entreprise

Bonjour,

Votre rendez-vous est confirmé pour l'accueil du premier jour.
Nous vous accueillerons le lundi 4 mars à 8 h 30 à l'Accueil principal.
Mme Muller sera à l'entrée pour vous guider. Merci d'apporter votre badge provisoire.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Bonne journée à toutes et à tous.
Merci encore pour votre compréhension.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
Merci,
Accueil Horizon`;

const E13_5_CE_EMAIL_POOL = buildExpressPool("e13-5-ce-email", [
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
    text: ["Confirmation de rendez-vous — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Confirmation",
    vfQ: "L'objet parle de Confirmation de rendez-vous — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["accueil du premier jour", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "premier",
    vfQ: "L'e-mail parle de accueil du premier jour.",
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
    text: ["Accueil principal", "Stade municipal", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "principal",
    vfQ: "Le lieu indiqué est : Accueil principal.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre badge provisoire", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "badge",
    vfQ: "Il faut préparer votre badge provisoire.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_2_TEXT = `De : Mme Bernard

Objet : Documents à apporter — S'intégrer à l'entreprise

Bonjour,

Pour préparer la visite des bureaux, mettez le cahier de notes dans votre sac.
La rencontre aura lieu le mardi 12 mars à 9 h, dans la Salle Équipe.
Si vous avez une question, M. Rossi répond au 027 950 31 41.

Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Pensez à arriver un peu en avance.
Merci,
Mme Bernard`;

const E13_5_CE_EMAIL_2_POOL = buildExpressPool("e13-5-ce-email-2", [
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
    text: ["Documents à apporter — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Documents",
    vfQ: "L'objet parle de Documents à apporter — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["visite des bureaux", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "bureaux",
    vfQ: "L'e-mail parle de visite des bureaux.",
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
    text: ["Salle Équipe", "Salle de danse", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Équipe",
    vfQ: "Le lieu indiqué est : Salle Équipe.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le cahier de notes", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "cahier",
    vfQ: "Il faut préparer le cahier de notes.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_3_TEXT = `De : Secrétariat Central

Objet : Changement d'horaire — S'intégrer à l'entreprise

Bonjour,

L'horaire de la réunion avec l'équipe change légèrement.
Le nouveau rendez-vous est fixé au mercredi 20 mars à 9 h 15.
Le lieu reste Bureau 204. Pensez à prévenir Mme Fontaine si vous ne pouvez pas venir.

Sans confirmation, la place n'est pas garantie.
Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Merci,
Secrétariat Central`;

const E13_5_CE_EMAIL_3_POOL = buildExpressPool("e13-5-ce-email-3", [
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
    text: ["Changement d'horaire — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Changement",
    vfQ: "L'objet parle de Changement d'horaire — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réunion avec l'équipe", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "équipe",
    vfQ: "L'e-mail parle de réunion avec l'équipe.",
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
    text: ["Bureau 204", "Musée historique", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "204",
    vfQ: "Le lieu indiqué est : Bureau 204.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre mot de passe", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "mot",
    vfQ: "Il faut préparer votre mot de passe.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_4_TEXT = `De : M. Lopez

Objet : Réponse à votre demande — S'intégrer à l'entreprise

Bonjour,

Nous avons bien reçu votre demande concernant la formation au logiciel interne.
Vous pouvez passer le jeudi 28 mars; l'accueil ouvrira à 10 h à Atelier Nord.
Le dossier sera plus vite traité avec la fiche d'urgence.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Merci,
M. Lopez`;

const E13_5_CE_EMAIL_4_POOL = buildExpressPool("e13-5-ce-email-4", [
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
    text: ["Réponse à votre demande — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Réponse",
    vfQ: "L'objet parle de Réponse à votre demande — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["formation au logiciel interne", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "logiciel",
    vfQ: "L'e-mail parle de formation au logiciel interne.",
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
    text: ["Atelier Nord", "Quai numéro 4", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Nord",
    vfQ: "Le lieu indiqué est : Atelier Nord.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la fiche d'urgence", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "fiche",
    vfQ: "Il faut préparer la fiche d'urgence.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_5_TEXT = `De : Service administratif

Objet : Programme de la journée — S'intégrer à l'entreprise

Bonjour,

Voici le déroulement prévu le vendredi 5 avril.
À 10 h 30, accueil au Service Clients. Ensuite, Mme Bonnet présentera la présentation des consignes de sécurité.
La séance est courte; gardez simplement vos horaires signés avec vous.

Sans confirmation, la place n'est pas garantie.
Je reste à votre disposition pour toute précision.
Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Merci,
Service administratif`;

const E13_5_CE_EMAIL_5_POOL = buildExpressPool("e13-5-ce-email-5", [
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
    text: ["Programme de la journée — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Programme",
    vfQ: "L'objet parle de Programme de la journée — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["présentation des consignes de sécurité", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "consignes",
    vfQ: "L'e-mail parle de présentation des consignes de sécurité.",
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
    text: ["Service Clients", "Piscine du Parc", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Clients",
    vfQ: "Le lieu indiqué est : Service Clients.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos horaires signés", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "horaires",
    vfQ: "Il faut préparer vos horaires signés.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_6_TEXT = `De : Mme Garcia

Objet : Rappel avant la visite — S'intégrer à l'entreprise

Bonjour,

Petit rappel avant votre visite : la remise du badge est bien prévu le samedi 13 avril.
Merci d'arriver à 11 h à Espace Pause.
M. Bernard vérifiera que votre dossier contient le règlement lu.

Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Je prépare déjà tout pour que ce soit prêt.
Si tu veux, on peut faire une liste ensemble.
Conservez le numéro de contact indiqué.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Merci,
Mme Garcia`;

const E13_5_CE_EMAIL_6_POOL = buildExpressPool("e13-5-ce-email-6", [
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
    text: ["Rappel avant la visite — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rappel",
    vfQ: "L'objet parle de Rappel avant la visite — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["remise du badge", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "remise",
    vfQ: "L'e-mail parle de remise du badge.",
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
    text: ["Espace Pause", "Stade municipal", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Espace",
    vfQ: "Le lieu indiqué est : Espace Pause.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le règlement lu", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "règlement",
    vfQ: "Il faut préparer le règlement lu.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_7_TEXT = `De : Bureau des inscriptions

Objet : Invitation à une réunion — S'intégrer à l'entreprise

Bonjour,

Nous vous invitons à une réunion au sujet de la pause café avec les collègues.
Elle se tiendra le lundi 22 avril à 13 h 30, à l'Accueil principal.
Répondez avant vendredi et signalez à Mme Muller si votre badge provisoire manque encore.

Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Merci,
Bureau des inscriptions`;

const E13_5_CE_EMAIL_7_POOL = buildExpressPool("e13-5-ce-email-7", [
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
    text: ["Invitation à une réunion — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Invitation",
    vfQ: "L'objet parle de Invitation à une réunion — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["pause café avec les collègues", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "pause",
    vfQ: "L'e-mail parle de pause café avec les collègues.",
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
    text: ["Accueil principal", "Salle de danse", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "principal",
    vfQ: "Le lieu indiqué est : Accueil principal.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre badge provisoire", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "badge",
    vfQ: "Il faut préparer votre badge provisoire.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_8_TEXT = `De : M. Girard

Objet : Résultat de votre dossier — S'intégrer à l'entreprise

Bonjour,

Votre dossier pour la lecture du règlement est maintenant complet.
La prochaine étape se fera le mardi 30 avril à 14 h.
Rendez-vous dans la Salle Équipe; gardez le cahier de notes avec vous jusqu'à la fin.

Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Merci de confirmer la bonne réception.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci,
M. Girard`;

const E13_5_CE_EMAIL_8_POOL = buildExpressPool("e13-5-ce-email-8", [
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
    text: ["Résultat de votre dossier — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résultat",
    vfQ: "L'objet parle de Résultat de votre dossier — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["lecture du règlement", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "lecture",
    vfQ: "L'e-mail parle de lecture du règlement.",
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
    text: ["Salle Équipe", "Musée historique", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Équipe",
    vfQ: "Le lieu indiqué est : Salle Équipe.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le cahier de notes", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "cahier",
    vfQ: "Il faut préparer le cahier de notes.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_9_TEXT = `De : Service planning

Objet : Pièce manquante — S'intégrer à l'entreprise

Bonjour,

Il manque encore votre mot de passe.
Vous pouvez le déposer le mercredi 8 mai à partir de 14 h 30, au Bureau 204.
Demandez Mme Fontaine à l'accueil pour éviter une attente trop longue.

Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Merci,
Service planning`;

const E13_5_CE_EMAIL_9_POOL = buildExpressPool("e13-5-ce-email-9", [
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
    text: ["Pièce manquante — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Pièce",
    vfQ: "L'objet parle de Pièce manquante — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["réunion avec la tutrice", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "tutrice",
    vfQ: "L'e-mail parle de réunion avec la tutrice.",
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
    text: ["Bureau 204", "Quai numéro 4", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "204",
    vfQ: "Le lieu indiqué est : Bureau 204.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre mot de passe", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "mot",
    vfQ: "Il faut préparer votre mot de passe.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_10_TEXT = `De : Mme Nguyen

Objet : Nouveau créneau proposé — S'intégrer à l'entreprise

Bonjour,

Le rendez-vous pour l'atelier sur les procédures est reporté.
Nous proposons maintenant le jeudi 16 mai à 15 h, toujours à Atelier Nord.
Merci de confirmer votre présence à M. Garcia.

N'hésitez pas à nous indiquer vos disponibilités.
Ce message contient les informations essentielles.
Nous vous remercions de votre compréhension.
Pour toute urgence, appelez-nous pendant les heures d'ouverture.
Conservez ce message pour vos dossiers.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
Merci,
Mme Nguyen`;

const E13_5_CE_EMAIL_10_POOL = buildExpressPool("e13-5-ce-email-10", [
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
    text: ["Nouveau créneau proposé — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Nouveau",
    vfQ: "L'objet parle de Nouveau créneau proposé — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["atelier sur les procédures", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "procédures",
    vfQ: "L'e-mail parle de atelier sur les procédures.",
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
    text: ["Atelier Nord", "Piscine du Parc", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Nord",
    vfQ: "Le lieu indiqué est : Atelier Nord.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la fiche d'urgence", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "fiche",
    vfQ: "Il faut préparer la fiche d'urgence.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_11_TEXT = `De : Accueil formation

Objet : Deux choix possibles — S'intégrer à l'entreprise

Bonjour,

Deux choix étaient possibles pour l'organisation de la première semaine.
Vous avez choisi le créneau du vendredi 24 mai à 15 h 30.
La rencontre aura lieu au Service Clients; apportez vos horaires signés.

Merci encore pour votre confiance.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci,
Accueil formation`;

const E13_5_CE_EMAIL_11_POOL = buildExpressPool("e13-5-ce-email-11", [
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
    text: ["Deux choix possibles — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Deux",
    vfQ: "L'objet parle de Deux choix possibles — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["organisation de la première semaine", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "organisation",
    vfQ: "L'e-mail parle de organisation de la première semaine.",
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
    text: ["Service Clients", "Stade municipal", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Clients",
    vfQ: "Le lieu indiqué est : Service Clients.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos horaires signés", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "horaires",
    vfQ: "Il faut préparer vos horaires signés.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_12_TEXT = `De : M. Robert

Objet : Suite à notre appel — S'intégrer à l'entreprise

Bonjour,

Suite à notre appel, je résume les informations.
La présentation du planning aura lieu le lundi 3 juin à 16 h, à Espace Pause.
M. Bernard vous attendra avec la liste des participants.

Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Pensez à arriver un peu en avance.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Les informations importantes sont déjà indiquées plus haut.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Le lieu est facile à trouver avec les indications.
Gardez ce texte pour vous en souvenir.
Merci,
M. Robert`;

const E13_5_CE_EMAIL_12_POOL = buildExpressPool("e13-5-ce-email-12", [
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
    text: ["Suite à notre appel — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Suite",
    vfQ: "L'objet parle de Suite à notre appel — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["présentation du planning", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "planning",
    vfQ: "L'e-mail parle de présentation du planning.",
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
    text: ["Espace Pause", "Salle de danse", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Espace",
    vfQ: "Le lieu indiqué est : Espace Pause.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le règlement lu", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "règlement",
    vfQ: "Il faut préparer le règlement lu.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_13_TEXT = `De : Service dossiers

Objet : Premier jour — S'intégrer à l'entreprise

Bonjour,

Pour votre premier jour lié à la demande d'accès informatique, arrivez un peu avant 16 h 30.
La date est le mardi 11 juin, et l'accueil se trouve à l'Accueil principal.
Merci d'apporter votre badge provisoire; cela facilitera l'inscription.

Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Merci,
Service dossiers`;

const E13_5_CE_EMAIL_13_POOL = buildExpressPool("e13-5-ce-email-13", [
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
    text: ["Premier jour — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Premier",
    vfQ: "L'objet parle de Premier jour — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["demande d'accès informatique", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "demande",
    vfQ: "L'e-mail parle de demande d'accès informatique.",
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
    text: ["Accueil principal", "Musée historique", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "principal",
    vfQ: "Le lieu indiqué est : Accueil principal.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre badge provisoire", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "badge",
    vfQ: "Il faut préparer votre badge provisoire.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_14_TEXT = `De : Mme Moreau

Objet : Merci pour votre réponse — S'intégrer à l'entreprise

Bonjour,

Merci pour votre réponse positive.
Votre place pour le point avec le chef de service est gardée le mercredi 19 juin à 17 h.
Dans la salle équipe, M. Rossi donnera les consignes et vérifiera le cahier de notes.

Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Tout est organisé pour que ce soit simple.
À bientôt, et merci de votre lecture.
Je reste près de mon téléphone aujourd'hui.
Dis-moi si tu as besoin d'autre chose.
On peut aussi en parler demain matin.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Merci,
Mme Moreau`;

const E13_5_CE_EMAIL_14_POOL = buildExpressPool("e13-5-ce-email-14", [
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
    text: ["Merci pour votre réponse — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Merci",
    vfQ: "L'objet parle de Merci pour votre réponse — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["point avec le chef de service", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "point",
    vfQ: "L'e-mail parle de point avec le chef de service.",
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
    text: ["Salle Équipe", "Quai numéro 4", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Équipe",
    vfQ: "Le lieu indiqué est : Salle Équipe.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le cahier de notes", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "cahier",
    vfQ: "Il faut préparer le cahier de notes.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_15_TEXT = `De : Équipe coordination

Objet : Contact à noter — S'intégrer à l'entreprise

Bonjour,

Voici le contact à noter pour la découverte de la cantine : Mme Fontaine.
Vous pouvez appeler le 027 950 44 54 seulement le matin.
La prochaine rencontre aura lieu le jeudi 27 juin à 17 h 30, au Bureau 204.

Bonne journée et à tout de suite !
Je reste près de mon téléphone aujourd'hui.
On se voit bientôt, j'ai hâte.
Le trajet est simple, ne t'inquiète pas.
Apporte ce dont tu as besoin, juste au cas où.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Les horaires habituels restent les mêmes.
Merci de votre attention et de votre patience.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Un plan simple est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Le personnel peut répondre en français simple.
Merci,
Équipe coordination`;

const E13_5_CE_EMAIL_15_POOL = buildExpressPool("e13-5-ce-email-15", [
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
    text: ["Contact à noter — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Contact",
    vfQ: "L'objet parle de Contact à noter — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["découverte de la cantine", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "découverte",
    vfQ: "L'e-mail parle de découverte de la cantine.",
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
    text: ["Bureau 204", "Piscine du Parc", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "204",
    vfQ: "Le lieu indiqué est : Bureau 204.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre mot de passe", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "mot",
    vfQ: "Il faut préparer votre mot de passe.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_16_TEXT = `De : M. Petit

Objet : Message au groupe — S'intégrer à l'entreprise

Bonjour,

Message pour tout le groupe : La séance sur les congés commence bientôt.
Soyez présent(e) le vendredi 5 juillet à 18 h, à Atelier Nord.
Chaque personne prépare la fiche d'urgence; M. Garcia fera l'appel.

Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Merci,
M. Petit`;

const E13_5_CE_EMAIL_16_POOL = buildExpressPool("e13-5-ce-email-16", [
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
    text: ["Message au groupe — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Message",
    vfQ: "L'objet parle de Message au groupe — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["séance sur les congés", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "congés",
    vfQ: "L'e-mail parle de séance sur les congés.",
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
    text: ["Atelier Nord", "Stade municipal", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Nord",
    vfQ: "Le lieu indiqué est : Atelier Nord.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["la fiche d'urgence", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "fiche",
    vfQ: "Il faut préparer la fiche d'urgence.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_17_TEXT = `De : Service suivi

Objet : Résumé de la rencontre — S'intégrer à l'entreprise

Bonjour,

Résumé de la rencontre : nous avons parlé de le compte rendu de réunion.
Le groupe a choisi Service Clients pour la suite.
La prochaine date est lundi 15 juillet à 18 h 30. À faire avant : préparer vos horaires signés.

Merci de confirmer la bonne réception de ce message.
Vous pouvez répondre directement à cet e-mail.
Nous traitons votre demande dans les meilleurs délais.
N'hésitez pas à nous indiquer vos disponibilités.
Joignez les documents demandés si nécessaire.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.
Les personnes à mobilité réduite sont prioritaires.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
Merci,
Service suivi`;

const E13_5_CE_EMAIL_17_POOL = buildExpressPool("e13-5-ce-email-17", [
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
    text: ["Résumé de la rencontre — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Résumé",
    vfQ: "L'objet parle de Résumé de la rencontre — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["compte rendu de réunion", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "compte",
    vfQ: "L'e-mail parle de compte rendu de réunion.",
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
    text: ["Service Clients", "Salle de danse", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Clients",
    vfQ: "Le lieu indiqué est : Service Clients.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["vos horaires signés", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "horaires",
    vfQ: "Il faut préparer vos horaires signés.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_18_TEXT = `De : Mme Leroy

Objet : Rendez-vous individuel — S'intégrer à l'entreprise

Bonjour,

Votre rendez-vous individuel avec M. Bernard est fixé.
Il concerne la formation au téléphone. Venez le mardi 23 juillet à 19 h, à Espace Pause.
N'oubliez pas le règlement lu.

Cordialement, et bonne journée.
Si une information manque, écrivez-nous rapidement.
Nous avons bien noté votre situation.
J'espère que tout se passe bien de ton côté.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Merci,
Mme Leroy`;

const E13_5_CE_EMAIL_18_POOL = buildExpressPool("e13-5-ce-email-18", [
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
    text: ["Rendez-vous individuel — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Rendez-vous",
    vfQ: "L'objet parle de Rendez-vous individuel — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["formation au téléphone", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "téléphone",
    vfQ: "L'e-mail parle de formation au téléphone.",
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
    text: ["Espace Pause", "Musée historique", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Espace",
    vfQ: "Le lieu indiqué est : Espace Pause.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le règlement lu", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "règlement",
    vfQ: "Il faut préparer le règlement lu.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_19_TEXT = `De : Accueil principal

Objet : Solution proposée — S'intégrer à l'entreprise

Bonjour,

Nous avons trouvé une solution pour le bilan après une semaine.
Vous pouvez passer le mercredi 31 juillet à 19 h 30 à l'Accueil principal.
Mme Muller vous expliquera la suite; apportez aussi votre badge provisoire.

Les informations importantes sont déjà notées plus haut.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Merci de lire ce message jusqu'à la fin.
En cas de question, vous pouvez écrire ou téléphoner.
Une confirmation sera envoyée ensuite.
Pensez à arriver un peu en avance.
Gardez ce texte pour vous en souvenir.
Nous restons disponibles pour vous aider.
Merci,
Accueil principal`;

const E13_5_CE_EMAIL_19_POOL = buildExpressPool("e13-5-ce-email-19", [
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
    text: ["Solution proposée — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Solution",
    vfQ: "L'objet parle de Solution proposée — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["bilan après une semaine", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "bilan",
    vfQ: "L'e-mail parle de bilan après une semaine.",
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
    text: ["Accueil principal", "Quai numéro 4", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "principal",
    vfQ: "Le lieu indiqué est : Accueil principal.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["votre badge provisoire", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "badge",
    vfQ: "Il faut préparer votre badge provisoire.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_20_TEXT = `De : M. Simon

Objet : Dernières informations — S'intégrer à l'entreprise

Bonjour,

Dernières informations avant le rappel des horaires d'équipe.
Le rendez-vous est confirmé pour le jeudi 8 août à 20 h.
Le lieu est Salle Équipe, le contact est M. Rossi, et le document à préparer est le cahier de notes.

Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
N'hésite pas à me répondre quand tu peux.
Je t'envoie aussi ce détail pour être clair.
Le trajet est simple, ne t'inquiète pas.
Passe le bonjour à tout le monde.
À très bientôt, prends soin de toi.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
Vous pouvez répondre directement à ce message.
Merci,
M. Simon`;

const E13_5_CE_EMAIL_20_POOL = buildExpressPool("e13-5-ce-email-20", [
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
    text: ["Dernières informations — S'intégrer à l'entreprise", "Facture d'électricité", "Invitation au cinéma"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________.",
    fill: "Dernières",
    vfQ: "L'objet parle de Dernières informations — S'intégrer à l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "De quelle activité parle l'e-mail ?",
    text: ["rappel des horaires d'équipe", "Un déménagement", "Un match de foot"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Thème principal : _________.",
    fill: "horaires",
    vfQ: "L'e-mail parle de rappel des horaires d'équipe.",
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
    text: ["Salle Équipe", "Piscine du Parc", "Au stade municipal"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "Équipe",
    vfQ: "Le lieu indiqué est : Salle Équipe.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faut-il apporter ou préparer ?",
    text: ["le cahier de notes", "un gâteau", "une serviette de plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À préparer : _________.",
    fill: "cahier",
    vfQ: "Il faut préparer le cahier de notes.",
    vfC: 0,
  }),
]);

export const E13_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-5-ce-email",
  readingText: E13_5_CE_EMAIL_TEXT,
  questionPool: E13_5_CE_EMAIL_POOL,
  questionCount: 6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-5-ce-email-2",
  readingText: E13_5_CE_EMAIL_2_TEXT,
  questionPool: E13_5_CE_EMAIL_2_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-3",
  readingText: E13_5_CE_EMAIL_3_TEXT,
  questionPool: E13_5_CE_EMAIL_3_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-4",
  readingText: E13_5_CE_EMAIL_4_TEXT,
  questionPool: E13_5_CE_EMAIL_4_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-5",
  readingText: E13_5_CE_EMAIL_5_TEXT,
  questionPool: E13_5_CE_EMAIL_5_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-6",
  readingText: E13_5_CE_EMAIL_6_TEXT,
  questionPool: E13_5_CE_EMAIL_6_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-7",
  readingText: E13_5_CE_EMAIL_7_TEXT,
  questionPool: E13_5_CE_EMAIL_7_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-8",
  readingText: E13_5_CE_EMAIL_8_TEXT,
  questionPool: E13_5_CE_EMAIL_8_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-9",
  readingText: E13_5_CE_EMAIL_9_TEXT,
  questionPool: E13_5_CE_EMAIL_9_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-10",
  readingText: E13_5_CE_EMAIL_10_TEXT,
  questionPool: E13_5_CE_EMAIL_10_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-11",
  readingText: E13_5_CE_EMAIL_11_TEXT,
  questionPool: E13_5_CE_EMAIL_11_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-12",
  readingText: E13_5_CE_EMAIL_12_TEXT,
  questionPool: E13_5_CE_EMAIL_12_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-13",
  readingText: E13_5_CE_EMAIL_13_TEXT,
  questionPool: E13_5_CE_EMAIL_13_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-14",
  readingText: E13_5_CE_EMAIL_14_TEXT,
  questionPool: E13_5_CE_EMAIL_14_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-15",
  readingText: E13_5_CE_EMAIL_15_TEXT,
  questionPool: E13_5_CE_EMAIL_15_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-16",
  readingText: E13_5_CE_EMAIL_16_TEXT,
  questionPool: E13_5_CE_EMAIL_16_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-17",
  readingText: E13_5_CE_EMAIL_17_TEXT,
  questionPool: E13_5_CE_EMAIL_17_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-18",
  readingText: E13_5_CE_EMAIL_18_TEXT,
  questionPool: E13_5_CE_EMAIL_18_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-19",
  readingText: E13_5_CE_EMAIL_19_TEXT,
  questionPool: E13_5_CE_EMAIL_19_POOL,
  questionCount: 6
}),
readingPoolExercise({
  id: "e13-5-ce-email-20",
  readingText: E13_5_CE_EMAIL_20_TEXT,
  questionPool: E13_5_CE_EMAIL_20_POOL,
  questionCount: 6
}),
];

export const E13_5_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-5-pee-1",
    title: "Répondre au message d'accueil",
    situation: "Les ressources humaines vous envoient les informations pour votre premier jour.",
    sourceMessage: {
      from: "Mme Rochat, Ressources humaines",
      subject: "Votre premier jour",
      body: "Bonjour,\nNous vous attendons lundi à 8 h 15 à la réception pour votre premier jour.\nVotre tuteur, M. Girard, va venir vous chercher.\nMme Rochat",
    },
    instruction: "Répondez à Mme Rochat : remerciez, confirmez votre présence lundi et posez une question sur le badge ou le parking.",
    points: ["Un remerciement", "La confirmation", "Une question sur le badge ou le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-2",
    title: "Se présenter à l'équipe",
    situation: "Votre tuteur vous demande de vous présenter par e-mail à l'équipe.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Présentation à l'équipe",
      body: "Bonjour,\nBienvenue chez nous ! Pouvez-vous écrire un petit message de présentation pour l'équipe ?\nParlez de vous et de votre expérience.\nM. Girard",
    },
    instruction: "Répondez à M. Girard pour l'équipe : présentez-vous, parlez de votre expérience et dites que vous êtes content(e) de rejoindre l'équipe.",
    points: ["Votre présentation", "Votre expérience", "Votre plaisir de rejoindre l'équipe"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-3",
    title: "Question sur les horaires",
    situation: "Une collègue vous explique les horaires, mais vous avez une contrainte.",
    sourceMessage: {
      from: "Julie",
      subject: "Les horaires du service",
      body: "Bonjour,\nDans notre service, on commence à 8 h 30 et on finit à 17 h 30.\nLa pause de midi dure une heure.\nBonne journée,\nJulie",
    },
    instruction: "Répondez à Julie : remerciez-la, expliquez votre contrainte (par exemple la crèche de votre enfant) et demandez s'il est possible d'adapter vos horaires.",
    points: ["Un remerciement", "Votre contrainte", "La question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-4",
    title: "Problème de badge",
    situation: "La réception vous écrit au sujet de votre badge.",
    sourceMessage: {
      from: "Réception, Entreprise Alpina",
      subject: "Votre badge",
      body: "Bonjour,\nVous n'avez pas passé votre badge ce matin à l'entrée.\nAvez-vous un problème avec votre badge ?\nLa réception",
    },
    instruction: "Répondez à la réception : excusez-vous, expliquez que vous avez oublié votre badge à la maison et demandez comment entrer aujourd'hui.",
    points: ["L'excuse", "L'explication", "La question pour entrer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-5",
    title: "Accepter le repas d'équipe",
    situation: "Une collègue organise un repas de bienvenue pour vous.",
    sourceMessage: {
      from: "Julie",
      subject: "Repas d'équipe vendredi",
      body: "Bonjour,\nPour fêter ton arrivée, l'équipe organise un repas vendredi soir au restaurant Le Chalet.\nTu peux venir ?\nJulie",
    },
    instruction: "Répondez à Julie : acceptez l'invitation, remerciez l'équipe et posez une question sur l'heure ou le lieu.",
    points: ["Votre accord", "Un remerciement", "Une question sur l'heure ou le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-6",
    title: "S'excuser pour un retard",
    situation: "Vous êtes arrivé(e) en retard et votre tuteur vous écrit.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Retard de ce matin",
      body: "Bonjour,\nVous êtes arrivé(e) à 9 h 15 ce matin. Le travail commence à 8 h 30.\nQue s'est-il passé ?\nM. Girard",
    },
    instruction: "Répondez à M. Girard : excusez-vous, expliquez la raison de votre retard (le train, le bus…) et dites ce que vous allez faire pour arriver à l'heure.",
    points: ["L'excuse", "La raison du retard", "Votre solution pour arriver à l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-7",
    title: "Demander de l'aide",
    situation: "Vous ne comprenez pas une procédure de l'entreprise.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Vos premières tâches",
      body: "Bonjour,\nVoici vos tâches de la semaine : préparer les commandes et répondre aux e-mails des clients.\nSuivez bien la procédure du service.\nM. Girard",
    },
    instruction: "Répondez à M. Girard : dites ce que vous n'avez pas compris dans la procédure, demandez un moment pour en parler et proposez une heure.",
    points: ["Ce que vous n'avez pas compris", "La demande d'un moment", "L'heure proposée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-8",
    title: "Confirmer une formation interne",
    situation: "Les ressources humaines vous inscrivent à une formation.",
    sourceMessage: {
      from: "Mme Rochat, Ressources humaines",
      subject: "Formation sécurité",
      body: "Bonjour,\nVous êtes inscrit(e) à la formation interne sur la sécurité, le jeudi 20 novembre de 13 h 30 à 16 h, en salle 4.\nMerci de confirmer,\nMme Rochat",
    },
    instruction: "Répondez à Mme Rochat : confirmez votre participation, remerciez et demandez si vous devez apporter quelque chose.",
    points: ["La confirmation", "Un remerciement", "Une question sur le matériel à apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-9",
    title: "Faire le bilan de la première semaine",
    situation: "Votre tuteur vous demande un premier bilan.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Votre première semaine",
      body: "Bonjour,\nVous avez fini votre première semaine chez nous.\nComment ça se passe ? Qu'est-ce qui est facile, qu'est-ce qui est difficile ?\nM. Girard",
    },
    instruction: "Répondez à M. Girard : dites ce qui se passe bien, expliquez une difficulté et posez une question sur le travail.",
    points: ["Ce qui se passe bien", "Une difficulté", "Une question sur le travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-10",
    title: "Remercier la directrice",
    situation: "La directrice vous souhaite la bienvenue.",
    sourceMessage: {
      from: "Mme Favre, Directrice",
      subject: "Bienvenue chez Alpina",
      body: "Bonjour,\nAu nom de toute l'entreprise, je vous souhaite la bienvenue chez Alpina.\nNous sommes heureux de vous compter dans notre équipe.\nMme Favre",
    },
    instruction: "Répondez à Mme Favre : remerciez-la, donnez vos premières impressions et dites pourquoi vous êtes motivé(e) pour ce travail.",
    points: ["Un remerciement", "Vos premières impressions", "Votre motivation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-11",
    title: "Répondre — entreprise (11)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-12",
    title: "Répondre — entreprise (12)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-13",
    title: "Répondre — entreprise (13)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-14",
    title: "Répondre — entreprise (14)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-15",
    title: "Répondre — entreprise (15)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-16",
    title: "Répondre — entreprise (16)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-17",
    title: "Répondre — entreprise (17)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-18",
    title: "Répondre — entreprise (18)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-19",
    title: "Répondre — entreprise (19)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-20",
    title: "Répondre — entreprise (20)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
