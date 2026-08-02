import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E12 — Santé, sport, alimentation, ville, bien-être (A2).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E12.1 — S'occuper de sa santé
   ════════════════════════════════════════════════════════════════════════════ */

const E12_1_CE_EMAIL_TEXT = `De : Centre médical des Acacias
Objet : Vos résultats d'analyses et votre bilan de santé

Bonjour,

Nous avons reçu les résultats de votre prise de sang du lundi 3 juin. Tout est normal, mais votre taux de fer est un peu bas.
Le Dr Keller souhaite vous voir pour un bilan de santé le jeudi 20 juin à 14 h 15. La consultation dure environ trente minutes.
Le centre se trouve au 12, avenue des Acacias, au troisième étage.
Merci d'apporter votre carte d'assurance maladie et votre carnet de vaccination.
La consultation coûte 90 francs ; votre assurance maladie rembourse la plus grande partie.
Pour annuler, appelez-nous au moins 48 heures avant au 022 555 88 66.

Cordialement,
Le secrétariat du centre médical`;

const E12_1_CE_EMAIL_POOL = buildExpressPool("e12-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand a eu lieu la prise de sang ?",
    text: ["Le lundi 3 juin", "Le jeudi 20 juin", "Le mardi 4 juin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous avons reçu les résultats de votre prise de sang du lundi 3 _________.",
    fill: "juin",
    vfQ: "La prise de sang a eu lieu le lundi 3 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Comment sont les résultats des analyses ?",
    text: [
      "Tout est normal, mais le taux de fer est un peu bas",
      "Tous les résultats sont mauvais",
      "Les résultats ne sont pas encore arrivés",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tout est normal, mais votre taux de _________ est un peu bas.",
    fill: "fer",
    vfQ: "Les résultats de la prise de sang sont très mauvais.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel jour est le bilan de santé ?",
    text: ["Le jeudi 20 juin", "Le mercredi 19 juin", "Le vendredi 21 juin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le Dr Keller souhaite vous voir le jeudi _________ juin.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "Le bilan de santé est le jeudi 20 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure est le rendez-vous ?",
    text: ["À 14 h 15", "À 15 h 14", "À 14 h 45"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le rendez-vous est le jeudi 20 juin à 14 h _________.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "Le rendez-vous est à 16 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien de temps dure la consultation ?",
    text: ["Environ trente minutes", "Une heure", "Dix minutes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La consultation dure environ _________ minutes.",
    fill: "trente",
    fillA: ["30"],
    vfQ: "La consultation dure environ trente minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quel étage se trouve le centre médical ?",
    text: ["Au troisième étage", "Au rez-de-chaussée", "Au premier étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le centre se trouve au _________ étage.",
    fill: "troisième",
    fillA: ["troisieme", "3e", "3ème", "3"],
    vfQ: "Le centre médical est au premier étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Qu'est-ce qu'il faut apporter ?",
    text: [
      "La carte d'assurance et le carnet de vaccination",
      "Le passeport et une photo",
      "Une bouteille d'eau et un livre",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci d'apporter votre carnet de _________.",
    fill: "vaccination",
    vfQ: "Il faut apporter son carnet de vaccination.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Combien coûte la consultation ?",
    text: ["90 francs", "19 francs", "120 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La consultation coûte _________ francs.",
    fill: "90",
    fillA: ["quatre-vingt-dix"],
    vfQ: "La consultation coûte 120 francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien de temps avant faut-il annuler le rendez-vous ?",
    text: ["Au moins 48 heures avant", "La veille au soir", "Une heure avant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour annuler, appelez-nous au moins _________ heures avant.",
    fill: "48",
    fillA: ["quarante-huit"],
    vfQ: "On peut annuler une heure avant le rendez-vous.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Qui a écrit cet e-mail ?",
    text: [
      "Le secrétariat du centre médical",
      "L'assurance maladie",
      "La pharmacie",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cet e-mail vient du _________ du centre médical.",
    fill: "secrétariat",
    fillA: ["secretariat"],
    vfQ: "Cet e-mail vient du centre médical des Acacias.",
    vfC: 0,
  }),
]);


const E12_1_CE_EMAIL_2_TEXT = `Info E-mail santé — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_2_POOL = buildExpressPool("e12-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["2 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 2 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 2 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_3_TEXT = `Info E-mail santé — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_3_POOL = buildExpressPool("e12-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["3 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 3 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_4_TEXT = `Info E-mail santé — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_4_POOL = buildExpressPool("e12-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["4 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 4 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_5_TEXT = `Info E-mail santé — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_5_POOL = buildExpressPool("e12-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["5 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 5 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_6_TEXT = `Info E-mail santé — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_6_POOL = buildExpressPool("e12-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["6 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 6 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_7_TEXT = `Info E-mail santé — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_7_POOL = buildExpressPool("e12-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["7 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 7 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 7 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_8_TEXT = `Info E-mail santé — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_8_POOL = buildExpressPool("e12-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["8 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 8 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 8 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_9_TEXT = `Info E-mail santé — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_9_POOL = buildExpressPool("e12-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["9 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 9 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 9 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_10_TEXT = `Info E-mail santé — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_10_POOL = buildExpressPool("e12-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["10 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 10 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 10 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_11_TEXT = `Info E-mail santé — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_11_POOL = buildExpressPool("e12-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["11 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 11 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 11 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_12_TEXT = `Info E-mail santé — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_12_POOL = buildExpressPool("e12-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["12 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 12 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 12 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_13_TEXT = `Info E-mail santé — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_13_POOL = buildExpressPool("e12-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["13 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 13 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 13 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_14_TEXT = `Info E-mail santé — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_14_POOL = buildExpressPool("e12-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["14 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 14 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 14 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_15_TEXT = `Info E-mail santé — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_15_POOL = buildExpressPool("e12-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["15 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 15 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 15 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_16_TEXT = `Info E-mail santé — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_16_POOL = buildExpressPool("e12-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["16 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 16 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 16 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_17_TEXT = `Info E-mail santé — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_17_POOL = buildExpressPool("e12-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["17 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 17 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 17 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_18_TEXT = `Info E-mail santé — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_18_POOL = buildExpressPool("e12-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["18 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 18 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 18 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_19_TEXT = `Info E-mail santé — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_19_POOL = buildExpressPool("e12-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["19 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 19 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 19 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_1_CE_EMAIL_20_TEXT = `Info E-mail santé — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail santé.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_1_CE_EMAIL_20_POOL = buildExpressPool("e12-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail santé", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail santé.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail santé.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["20 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 20 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 20 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E12_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-1-ce-email",
  readingText: E12_1_CE_EMAIL_TEXT,
  questionPool: E12_1_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-1-ce-email-2",
  readingText: E12_1_CE_EMAIL_2_TEXT,
  questionPool: E12_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-3",
  readingText: E12_1_CE_EMAIL_3_TEXT,
  questionPool: E12_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-4",
  readingText: E12_1_CE_EMAIL_4_TEXT,
  questionPool: E12_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-5",
  readingText: E12_1_CE_EMAIL_5_TEXT,
  questionPool: E12_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-6",
  readingText: E12_1_CE_EMAIL_6_TEXT,
  questionPool: E12_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-7",
  readingText: E12_1_CE_EMAIL_7_TEXT,
  questionPool: E12_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-8",
  readingText: E12_1_CE_EMAIL_8_TEXT,
  questionPool: E12_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-9",
  readingText: E12_1_CE_EMAIL_9_TEXT,
  questionPool: E12_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-10",
  readingText: E12_1_CE_EMAIL_10_TEXT,
  questionPool: E12_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-11",
  readingText: E12_1_CE_EMAIL_11_TEXT,
  questionPool: E12_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-12",
  readingText: E12_1_CE_EMAIL_12_TEXT,
  questionPool: E12_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-13",
  readingText: E12_1_CE_EMAIL_13_TEXT,
  questionPool: E12_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-14",
  readingText: E12_1_CE_EMAIL_14_TEXT,
  questionPool: E12_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-15",
  readingText: E12_1_CE_EMAIL_15_TEXT,
  questionPool: E12_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-16",
  readingText: E12_1_CE_EMAIL_16_TEXT,
  questionPool: E12_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-17",
  readingText: E12_1_CE_EMAIL_17_TEXT,
  questionPool: E12_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-18",
  readingText: E12_1_CE_EMAIL_18_TEXT,
  questionPool: E12_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-19",
  readingText: E12_1_CE_EMAIL_19_TEXT,
  questionPool: E12_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-1-ce-email-20",
  readingText: E12_1_CE_EMAIL_20_TEXT,
  questionPool: E12_1_CE_EMAIL_20_POOL
}),
];

export const E12_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-1-pee-1",
    title: "Confirmer un bilan de santé",
    situation: "Le centre médical vous propose deux dates pour votre bilan de santé.",
    sourceMessage: {
      from: "Centre médical des Acacias",
      subject: "Votre bilan de santé",
      body: "Bonjour,\nNous pouvons vous proposer un bilan de santé le jeudi 20 juin à 14 h 15 ou le lundi 24 juin à 9 h.\nQuelle date vous convient le mieux ?\nLe secrétariat",
    },
    instruction: "Répondez au centre médical : choisissez une date, remerciez et posez une question sur les documents à apporter.",
    points: ["La date choisie", "Un remerciement", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-2",
    title: "Annuler un rendez-vous médical",
    situation: "Vous avez un empêchement le jour de votre rendez-vous chez le médecin.",
    sourceMessage: {
      from: "Cabinet du Dr Keller",
      subject: "Rappel de votre rendez-vous",
      body: "Bonjour,\nNous vous rappelons votre rendez-vous de demain, mardi, à 10 h 30.\nMerci d'arriver dix minutes en avance.\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : excusez-vous, expliquez pourquoi vous ne pouvez pas venir et proposez deux nouvelles dates.",
    points: ["L'excuse", "La raison de l'absence", "Deux nouvelles dates"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-3",
    title: "Rassurer sa sœur",
    situation: "Votre sœur sait que vous avez fait une prise de sang et elle s'inquiète.",
    sourceMessage: {
      from: "Amina",
      subject: "Tes résultats",
      body: "Salut,\nTu as reçu les résultats de ta prise de sang ?\nQu'est-ce que le médecin a dit ? J'espère que tout va bien.\nRéponds-moi vite !\nAmina",
    },
    instruction: "Répondez à votre sœur : donnez les résultats, expliquez les conseils du médecin et rassurez-la.",
    points: ["Les résultats", "Les conseils du médecin", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-4",
    title: "Répondre à l'assurance maladie",
    situation: "Votre assurance maladie met à jour votre dossier.",
    sourceMessage: {
      from: "Assurance Helvia Santé",
      subject: "Mise à jour de votre dossier",
      body: "Bonjour,\nNous mettons à jour votre dossier.\nMerci de confirmer votre numéro de téléphone et votre adresse.\nVotre assurance maladie",
    },
    instruction: "Répondez à l'assurance : confirmez votre numéro de téléphone, donnez votre nouvelle adresse et posez une question sur le remboursement de votre dernière consultation.",
    points: ["Le numéro de téléphone", "La nouvelle adresse", "Une question sur le remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-5",
    title: "Aider un ami à arrêter de fumer",
    situation: "Un ami veut arrêter de fumer et vous demande conseil, car vous avez déjà arrêté.",
    sourceMessage: {
      from: "Diego",
      subject: "J'ai besoin de tes conseils",
      body: "Salut,\nJ'ai décidé d'arrêter de fumer, mais c'est très difficile.\nToi, tu as arrêté l'année dernière, non ? Comment tu as fait ?\nMerci d'avance,\nDiego",
    },
    instruction: "Répondez à Diego : racontez comment vous avez arrêté, donnez-lui deux conseils et encouragez-le.",
    points: ["Votre expérience", "Deux conseils", "Une phrase d'encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-6",
    title: "Rappel de vaccin pour votre fille",
    situation: "Le cabinet de pédiatrie vous envoie un rappel.",
    sourceMessage: {
      from: "Cabinet de pédiatrie Arc-en-Ciel",
      subject: "Rappel de vaccin",
      body: "Bonjour,\nLe rappel de vaccin de votre fille est à faire avant la fin du mois.\nVoulez-vous prendre un rendez-vous ?\nLe secrétariat",
    },
    instruction: "Répondez au cabinet : acceptez, proposez deux dates possibles et posez une question sur le vaccin.",
    points: ["Votre accord", "Deux dates possibles", "Une question sur le vaccin"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-7",
    title: "Prévenir son chef",
    situation: "Vous avez un rendez-vous médical pendant les heures de travail.",
    sourceMessage: {
      from: "M. Rochat",
      subject: "Réunion de jeudi matin",
      body: "Bonjour,\nLa réunion d'équipe a lieu jeudi à 9 h 30.\nMerci de confirmer votre présence.\nBonne journée,\nM. Rochat",
    },
    instruction: "Répondez à votre chef : excusez-vous, expliquez que vous avez un rendez-vous médical et dites à quelle heure vous arrivez au travail.",
    points: ["L'excuse", "Le rendez-vous médical", "Votre heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-8",
    title: "Prendre rendez-vous chez le dentiste",
    situation: "Vous avez écrit au cabinet dentaire ; le secrétariat vous répond.",
    sourceMessage: {
      from: "Cabinet dentaire Sourire",
      subject: "Votre demande de rendez-vous",
      body: "Bonjour,\nNous avons bien reçu votre demande de rendez-vous.\nQuelles sont vos disponibilités cette semaine ?\nAvez-vous mal aux dents en ce moment ?\nLe secrétariat",
    },
    instruction: "Répondez au cabinet : donnez vos disponibilités, décrivez votre problème et demandez le prix d'un contrôle.",
    points: ["Vos disponibilités", "Votre problème", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-9",
    title: "Journée de prévention",
    situation: "La commune organise une journée de prévention santé gratuite.",
    sourceMessage: {
      from: "Commune de Valmont",
      subject: "Journée santé pour tous",
      body: "Bonjour,\nLa commune organise une journée de prévention le samedi 5 octobre, de 9 h à 16 h.\nAu programme : tests gratuits, conseils et ateliers.\nInscription par e-mail.\nLe service de la santé",
    },
    instruction: "Répondez à la commune : inscrivez-vous, dites pourquoi cette journée vous intéresse et demandez ce qu'il faut apporter.",
    points: ["Votre inscription", "Pourquoi cette journée vous intéresse", "Une question sur les documents à apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-10",
    title: "Donner des nouvelles à une collègue",
    situation: "Vous avez été malade cette semaine ; une collègue prend de vos nouvelles.",
    sourceMessage: {
      from: "Nadia",
      subject: "Comment vas-tu ?",
      body: "Bonjour,\nTu n'es pas venu au travail cette semaine. Comment vas-tu ?\nTu es allé chez le médecin ?\nDonne-moi de tes nouvelles.\nNadia",
    },
    instruction: "Répondez à Nadia : expliquez votre maladie, racontez la visite chez le médecin et dites quand vous revenez au travail.",
    points: ["Votre maladie", "La visite chez le médecin", "Votre retour au travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-11",
    title: "Répondre — santé (11)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-12",
    title: "Répondre — santé (12)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-13",
    title: "Répondre — santé (13)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-14",
    title: "Répondre — santé (14)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-15",
    title: "Répondre — santé (15)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-16",
    title: "Répondre — santé (16)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-17",
    title: "Répondre — santé (17)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-18",
    title: "Répondre — santé (18)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-19",
    title: "Répondre — santé (19)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-1-pee-20",
    title: "Répondre — santé (20)",
    situation: "Vous avez reçu un e-mail concernant santé.",
sourceMessage: {
  from: "Service Santé",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant santé.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.2 — Faire du sport
   ════════════════════════════════════════════════════════════════════════════ */

const E12_2_CE_EMAIL_TEXT = `De : Salle de sport Vitafit
Objet : Votre abonnement et le programme des cours

Bonjour,

Merci pour votre inscription ! Votre abonnement annuel commence le lundi 1er septembre et coûte 600 francs.
Avec cet abonnement, tous les cours collectifs sont gratuits.
Le cours de yoga a lieu le mardi à 18 h 30 et dure une heure. Le cours de zumba est le samedi matin à 10 h.
La salle est ouverte tous les jours, de 6 h à 22 h.
Pour votre premier entraînement, un coach vous accompagne pendant quarante-cinq minutes ; ce rendez-vous est gratuit.
N'oubliez pas d'apporter une serviette et des chaussures de sport propres.
Le 12 octobre, nous organisons une petite compétition amicale entre les membres.

Sportivement,
L'équipe Vitafit`;

const E12_2_CE_EMAIL_POOL = buildExpressPool("e12-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand commence l'abonnement ?",
    text: ["Le lundi 1er septembre", "Le lundi 1er octobre", "Le mardi 2 septembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre abonnement annuel commence le lundi 1er _________.",
    fill: "septembre",
    vfQ: "L'abonnement commence le lundi 1er septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien coûte l'abonnement annuel ?",
    text: ["600 francs", "160 francs", "900 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'abonnement annuel coûte _________ francs.",
    fill: "600",
    fillA: ["six cents"],
    vfQ: "L'abonnement annuel coûte 900 francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien coûtent les cours collectifs avec l'abonnement ?",
    text: ["Ils sont gratuits", "10 francs par cours", "20 francs par mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Avec cet abonnement, tous les cours collectifs sont _________.",
    fill: "gratuits",
    vfQ: "Les cours collectifs sont gratuits avec l'abonnement.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand a lieu le cours de yoga ?",
    text: ["Le mardi à 18 h 30", "Le samedi à 10 h", "Le mardi à 20 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cours de yoga a lieu le _________ à 18 h 30.",
    fill: "mardi",
    vfQ: "Le cours de yoga a lieu le jeudi.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien de temps dure le cours de yoga ?",
    text: ["Une heure", "Trente minutes", "Deux heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cours de yoga a lieu le mardi à 18 h 30 et dure une _________.",
    fill: "heure",
    vfQ: "Le cours de yoga dure une heure.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quand est le cours de zumba ?",
    text: ["Le samedi matin à 10 h", "Le dimanche matin à 10 h", "Le samedi soir à 19 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cours de zumba est le samedi matin à _________ h.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "Le cours de zumba est le samedi soir.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Quels jours la salle est-elle ouverte ?",
    text: ["Tous les jours", "Du lundi au vendredi", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La salle est ouverte tous les jours, de 6 h à _________ h.",
    fill: "22",
    fillA: ["vingt-deux", "22 h"],
    vfQ: "La salle est fermée le dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Combien de temps dure le premier entraînement avec le coach ?",
    text: ["Quarante-cinq minutes", "Quinze minutes", "Deux heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un coach vous accompagne pendant quarante-cinq _________.",
    fill: "minutes",
    vfQ: "Le premier rendez-vous avec le coach est gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qu'est-ce qu'il faut apporter ?",
    text: [
      "Une serviette et des chaussures de sport propres",
      "Un maillot de bain et un bonnet",
      "Un ballon et une raquette",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "N'oubliez pas d'apporter une _________ et des chaussures de sport propres.",
    fill: "serviette",
    vfQ: "Il faut apporter une serviette.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Que se passe-t-il le 12 octobre ?",
    text: [
      "Une compétition amicale entre les membres",
      "La fermeture de la salle",
      "Un cours de natation",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le 12 octobre, nous organisons une petite _________ amicale.",
    fill: "compétition",
    fillA: ["competition"],
    vfQ: "La compétition a lieu le 12 novembre.",
    vfC: 1,
  }),
]);


const E12_2_CE_EMAIL_2_TEXT = `Info E-mail sport — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_2_POOL = buildExpressPool("e12-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["2 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 2 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 2 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_3_TEXT = `Info E-mail sport — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_3_POOL = buildExpressPool("e12-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["3 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 3 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_4_TEXT = `Info E-mail sport — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_4_POOL = buildExpressPool("e12-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["4 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 4 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_5_TEXT = `Info E-mail sport — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_5_POOL = buildExpressPool("e12-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["5 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 5 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_6_TEXT = `Info E-mail sport — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_6_POOL = buildExpressPool("e12-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["6 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 6 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_7_TEXT = `Info E-mail sport — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_7_POOL = buildExpressPool("e12-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["7 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 7 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 7 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_8_TEXT = `Info E-mail sport — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_8_POOL = buildExpressPool("e12-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["8 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 8 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 8 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_9_TEXT = `Info E-mail sport — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_9_POOL = buildExpressPool("e12-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["9 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 9 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 9 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_10_TEXT = `Info E-mail sport — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_10_POOL = buildExpressPool("e12-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["10 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 10 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 10 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_11_TEXT = `Info E-mail sport — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_11_POOL = buildExpressPool("e12-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["11 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 11 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 11 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_12_TEXT = `Info E-mail sport — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_12_POOL = buildExpressPool("e12-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["12 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 12 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 12 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_13_TEXT = `Info E-mail sport — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_13_POOL = buildExpressPool("e12-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["13 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 13 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 13 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_14_TEXT = `Info E-mail sport — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_14_POOL = buildExpressPool("e12-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["14 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 14 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 14 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_15_TEXT = `Info E-mail sport — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_15_POOL = buildExpressPool("e12-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["15 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 15 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 15 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_16_TEXT = `Info E-mail sport — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_16_POOL = buildExpressPool("e12-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["16 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 16 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 16 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_17_TEXT = `Info E-mail sport — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_17_POOL = buildExpressPool("e12-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["17 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 17 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 17 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_18_TEXT = `Info E-mail sport — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_18_POOL = buildExpressPool("e12-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["18 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 18 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 18 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_19_TEXT = `Info E-mail sport — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_19_POOL = buildExpressPool("e12-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["19 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 19 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 19 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_2_CE_EMAIL_20_TEXT = `Info E-mail sport — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail sport.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_2_CE_EMAIL_20_POOL = buildExpressPool("e12-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail sport", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail sport.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["20 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 20 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 20 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E12_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-2-ce-email",
  readingText: E12_2_CE_EMAIL_TEXT,
  questionPool: E12_2_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-2-ce-email-2",
  readingText: E12_2_CE_EMAIL_2_TEXT,
  questionPool: E12_2_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-3",
  readingText: E12_2_CE_EMAIL_3_TEXT,
  questionPool: E12_2_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-4",
  readingText: E12_2_CE_EMAIL_4_TEXT,
  questionPool: E12_2_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-5",
  readingText: E12_2_CE_EMAIL_5_TEXT,
  questionPool: E12_2_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-6",
  readingText: E12_2_CE_EMAIL_6_TEXT,
  questionPool: E12_2_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-7",
  readingText: E12_2_CE_EMAIL_7_TEXT,
  questionPool: E12_2_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-8",
  readingText: E12_2_CE_EMAIL_8_TEXT,
  questionPool: E12_2_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-9",
  readingText: E12_2_CE_EMAIL_9_TEXT,
  questionPool: E12_2_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-10",
  readingText: E12_2_CE_EMAIL_10_TEXT,
  questionPool: E12_2_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-11",
  readingText: E12_2_CE_EMAIL_11_TEXT,
  questionPool: E12_2_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-12",
  readingText: E12_2_CE_EMAIL_12_TEXT,
  questionPool: E12_2_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-13",
  readingText: E12_2_CE_EMAIL_13_TEXT,
  questionPool: E12_2_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-14",
  readingText: E12_2_CE_EMAIL_14_TEXT,
  questionPool: E12_2_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-15",
  readingText: E12_2_CE_EMAIL_15_TEXT,
  questionPool: E12_2_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-16",
  readingText: E12_2_CE_EMAIL_16_TEXT,
  questionPool: E12_2_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-17",
  readingText: E12_2_CE_EMAIL_17_TEXT,
  questionPool: E12_2_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-18",
  readingText: E12_2_CE_EMAIL_18_TEXT,
  questionPool: E12_2_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-19",
  readingText: E12_2_CE_EMAIL_19_TEXT,
  questionPool: E12_2_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-2-ce-email-20",
  readingText: E12_2_CE_EMAIL_20_TEXT,
  questionPool: E12_2_CE_EMAIL_20_POOL
}),
];

export const E12_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-2-pee-1",
    title: "Choisir un abonnement",
    situation: "La salle de sport répond à votre demande d'informations.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Nos abonnements",
      body: "Bonjour,\nMerci pour votre message. Nous proposons deux formules :\nl'abonnement mensuel à 60 francs ou l'abonnement annuel à 600 francs.\nQuelle formule vous intéresse ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle de sport : choisissez une formule, expliquez votre choix et demandez quand vous pouvez commencer.",
    points: ["La formule choisie", "La raison de votre choix", "Une question sur la date de début"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-2",
    title: "Réserver un cours d'essai",
    situation: "La salle de sport vous propose un cours collectif d'essai gratuit.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Cours d'essai gratuit",
      body: "Bonjour,\nVous pouvez essayer gratuitement un cours collectif : yoga le mardi à 18 h 30 ou zumba le samedi à 10 h.\nQuel cours voulez-vous essayer ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle : choisissez un cours, dites quel jour vous venez et demandez ce qu'il faut apporter.",
    points: ["Le cours choisi", "Le jour de votre venue", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-3",
    title: "Excuser une absence à l'entraînement",
    situation: "Votre club vous demande de confirmer votre présence à l'entraînement.",
    sourceMessage: {
      from: "FC Les Aiglons",
      subject: "Entraînement de samedi",
      body: "Bonjour à tous,\nL'entraînement de samedi à 9 h est très important avant le match.\nMerci de confirmer votre présence avant vendredi.\nL'entraîneur",
    },
    instruction: "Répondez à l'entraîneur : excusez-vous, expliquez pourquoi vous ne pouvez pas venir et proposez de vous entraîner un autre jour.",
    points: ["L'excuse", "La raison de l'absence", "Une proposition pour un autre jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-4",
    title: "S'inscrire à la course de la ville",
    situation: "L'association sportive annonce l'ouverture des inscriptions.",
    sourceMessage: {
      from: "Association Courir Ensemble",
      subject: "Course de la ville : inscriptions ouvertes",
      body: "Bonjour,\nLes inscriptions pour la course de la ville du dimanche 15 juin sont ouvertes.\nDeux parcours : 5 km ou 10 km. Prix : 20 francs.\nPour vous inscrire, répondez à cet e-mail.\nL'association",
    },
    instruction: "Répondez à l'association : inscrivez-vous, choisissez un parcours et posez une question sur l'organisation (heure de départ, dossard…).",
    points: ["Votre inscription", "Le parcours choisi", "Une question sur l'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-5",
    title: "Motiver un ami",
    situation: "Un ami veut se remettre au sport et vous demande une idée.",
    sourceMessage: {
      from: "Jonas",
      subject: "Je veux refaire du sport",
      body: "Salut !\nJ'ai décidé de me remettre au sport, mais je ne sais pas quoi choisir.\nToi, tu fais du sport régulièrement, non ? Tu as une idée pour moi ?\nJonas",
    },
    instruction: "Répondez à Jonas : racontez votre sport, proposez-lui une activité ensemble et donnez-lui un conseil pour commencer.",
    points: ["Votre sport", "Une activité ensemble", "Un conseil pour commencer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-6",
    title: "Répondre à la coach",
    situation: "Avant votre premier entraînement, la coach vous pose des questions.",
    sourceMessage: {
      from: "Coach Sandra",
      subject: "Avant votre premier entraînement",
      body: "Bonjour,\nNotre premier rendez-vous approche.\nQuels sont vos objectifs ? Faites-vous déjà du sport ?\nAvez-vous des problèmes de santé ?\nSportivement,\nSandra",
    },
    instruction: "Répondez à la coach : donnez vos objectifs, décrivez votre activité sportive actuelle et parlez de votre santé.",
    points: ["Vos objectifs", "Votre activité sportive actuelle", "Une information sur votre santé"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-7",
    title: "Suspendre son abonnement",
    situation: "Vous êtes blessé(e) et la salle vous écrit au sujet de votre abonnement.",
    sourceMessage: {
      from: "Salle de sport Vitafit",
      subject: "Votre abonnement se termine bientôt",
      body: "Bonjour,\nVotre abonnement se termine à la fin du mois.\nVoulez-vous le renouveler pour une année ?\nL'équipe Vitafit",
    },
    instruction: "Répondez à la salle : expliquez votre blessure, demandez si vous pouvez suspendre l'abonnement et posez une question sur les conditions.",
    points: ["Votre blessure", "La demande de suspension", "Une question sur les conditions"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-8",
    title: "Entraînement d'essai pour votre fils",
    situation: "Le club de football invite votre fils à un entraînement d'essai.",
    sourceMessage: {
      from: "FC Les Aiglons",
      subject: "Entraînement d'essai",
      body: "Bonjour,\nVotre fils peut venir à un entraînement d'essai le mercredi à 17 h, au stade municipal.\nMerci de confirmer sa présence.\nLe club",
    },
    instruction: "Répondez au club : confirmez la présence de votre fils, demandez quel équipement il faut et posez une question sur le prix de la cotisation.",
    points: ["La confirmation", "Une question sur l'équipement", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-9",
    title: "Raconter sa compétition",
    situation: "Une amie vous demande des nouvelles de votre compétition.",
    sourceMessage: {
      from: "Carla",
      subject: "Ta compétition",
      body: "Coucou,\nAlors, cette compétition de samedi ? Tu as gagné ?\nRaconte-moi tout !\nCarla",
    },
    instruction: "Répondez à Carla : racontez la compétition, donnez votre résultat et dites ce que vous allez faire pour progresser.",
    points: ["Le récit de la compétition", "Votre résultat", "Vos projets pour progresser"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-10",
    title: "S'inscrire à l'aquagym",
    situation: "La piscine municipale annonce ses nouveaux cours.",
    sourceMessage: {
      from: "Piscine municipale",
      subject: "Nouveaux cours d'aquagym",
      body: "Bonjour,\nNos nouveaux cours d'aquagym commencent le lundi 3 février.\nDeux horaires : le lundi à 19 h ou le jeudi à 12 h 15.\nLes places sont limitées.\nLa piscine municipale",
    },
    instruction: "Répondez à la piscine : inscrivez-vous, choisissez un horaire et demandez le prix du cours.",
    points: ["Votre inscription", "L'horaire choisi", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-11",
    title: "Répondre — sport (11)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-12",
    title: "Répondre — sport (12)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-13",
    title: "Répondre — sport (13)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-14",
    title: "Répondre — sport (14)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-15",
    title: "Répondre — sport (15)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-16",
    title: "Répondre — sport (16)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-17",
    title: "Répondre — sport (17)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-18",
    title: "Répondre — sport (18)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-19",
    title: "Répondre — sport (19)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-2-pee-20",
    title: "Répondre — sport (20)",
    situation: "Vous avez reçu un e-mail concernant sport.",
sourceMessage: {
  from: "Service Sport",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant sport.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.3 — Manger équilibré
   ════════════════════════════════════════════════════════════════════════════ */

const E12_3_CE_EMAIL_TEXT = `De : La Ferme du Soleil
Objet : Votre panier de légumes et notre cours de cuisine

Bonjour,

Votre panier de légumes de la semaine est prêt. Il contient des carottes, des épinards, des tomates et un kilo de pommes.
Vous pouvez venir le chercher au marché, place de la Gare, le samedi de 8 h à 13 h. Notre stand est à côté de la fontaine.
Le panier coûte 25 francs. Si vous ne pouvez pas venir, écrivez-nous avant vendredi midi.
Bonne nouvelle : nous organisons un cours de cuisine diététique le mercredi 9 avril à 18 h. Une diététicienne va montrer trois recettes simples et équilibrées.
Le cours dure deux heures et coûte 40 francs. Il y a seulement douze places.

À bientôt au marché,
L'équipe de la Ferme du Soleil`;

const E12_3_CE_EMAIL_POOL = buildExpressPool("e12-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qu'est-ce qu'il y a dans le panier de la semaine ?",
    text: [
      "Des carottes, des épinards, des tomates et des pommes",
      "Du pain et du fromage",
      "Du poisson et du riz",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il contient des carottes, des épinards, des _________ et un kilo de pommes.",
    fill: "tomates",
    vfQ: "Le panier contient des carottes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle quantité de pommes y a-t-il dans le panier ?",
    text: ["Un kilo", "Deux kilos", "Cinq cents grammes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le panier contient un _________ de pommes.",
    fill: "kilo",
    vfQ: "Il y a deux kilos de pommes dans le panier.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Où peut-on venir chercher le panier ?",
    text: ["Au marché, place de la Gare", "À la ferme", "Au supermarché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez venir le chercher au _________, place de la Gare.",
    fill: "marché",
    fillA: ["marche"],
    vfQ: "On peut chercher le panier au marché.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand le marché a-t-il lieu ?",
    text: ["Le samedi, de 8 h à 13 h", "Le dimanche matin", "Le samedi après-midi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le marché a lieu le samedi, de 8 h à _________ h.",
    fill: "13",
    fillA: ["treize"],
    vfQ: "Le marché a lieu le dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Où se trouve le stand de la ferme ?",
    text: ["À côté de la fontaine", "Devant la gare", "Derrière l'église"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Notre stand est à côté de la _________.",
    fill: "fontaine",
    vfQ: "Le stand est à côté de la fontaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien coûte le panier ?",
    text: ["25 francs", "40 francs", "52 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le panier coûte _________ francs.",
    fill: "25",
    fillA: ["vingt-cinq"],
    vfQ: "Le panier coûte 40 francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Que faire si on ne peut pas venir ?",
    text: [
      "Écrire avant vendredi midi",
      "Téléphoner samedi matin",
      "Venir dimanche",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Si vous ne pouvez pas venir, écrivez-nous avant vendredi _________.",
    fill: "midi",
    vfQ: "Il faut écrire avant vendredi midi si on ne peut pas venir.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand a lieu le cours de cuisine diététique ?",
    text: [
      "Le mercredi 9 avril à 18 h",
      "Le mardi 8 avril à 19 h",
      "Le mercredi 19 avril à 18 h",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le cours de cuisine diététique a lieu le mercredi 9 avril à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "Le cours de cuisine dure trois heures.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien de recettes la diététicienne va-t-elle montrer ?",
    text: ["Trois recettes", "Dix recettes", "Une recette"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Une diététicienne va montrer _________ recettes simples et équilibrées.",
    fill: "trois",
    fillA: ["3"],
    vfQ: "La diététicienne va montrer dix recettes.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Combien y a-t-il de places pour le cours ?",
    text: ["Douze places", "Vingt places", "Deux places"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il y a seulement _________ places.",
    fill: "douze",
    fillA: ["12"],
    vfQ: "Il y a seulement douze places pour le cours.",
    vfC: 0,
  }),
]);


const E12_3_CE_EMAIL_2_TEXT = `Info E-mail alimentation — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_2_POOL = buildExpressPool("e12-3-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["2 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 2 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 2 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_3_TEXT = `Info E-mail alimentation — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_3_POOL = buildExpressPool("e12-3-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["3 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 3 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_4_TEXT = `Info E-mail alimentation — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_4_POOL = buildExpressPool("e12-3-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["4 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 4 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_5_TEXT = `Info E-mail alimentation — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_5_POOL = buildExpressPool("e12-3-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["5 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 5 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_6_TEXT = `Info E-mail alimentation — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_6_POOL = buildExpressPool("e12-3-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["6 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 6 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_7_TEXT = `Info E-mail alimentation — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_7_POOL = buildExpressPool("e12-3-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["7 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 7 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 7 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_8_TEXT = `Info E-mail alimentation — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_8_POOL = buildExpressPool("e12-3-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["8 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 8 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 8 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_9_TEXT = `Info E-mail alimentation — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_9_POOL = buildExpressPool("e12-3-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["9 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 9 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 9 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_10_TEXT = `Info E-mail alimentation — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_10_POOL = buildExpressPool("e12-3-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["10 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 10 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 10 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_11_TEXT = `Info E-mail alimentation — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_11_POOL = buildExpressPool("e12-3-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["11 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 11 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 11 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_12_TEXT = `Info E-mail alimentation — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_12_POOL = buildExpressPool("e12-3-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["12 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 12 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 12 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_13_TEXT = `Info E-mail alimentation — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_13_POOL = buildExpressPool("e12-3-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["13 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 13 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 13 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_14_TEXT = `Info E-mail alimentation — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_14_POOL = buildExpressPool("e12-3-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["14 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 14 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 14 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_15_TEXT = `Info E-mail alimentation — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_15_POOL = buildExpressPool("e12-3-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["15 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 15 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 15 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_16_TEXT = `Info E-mail alimentation — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_16_POOL = buildExpressPool("e12-3-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["16 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 16 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 16 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_17_TEXT = `Info E-mail alimentation — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_17_POOL = buildExpressPool("e12-3-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["17 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 17 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 17 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_18_TEXT = `Info E-mail alimentation — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_18_POOL = buildExpressPool("e12-3-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["18 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 18 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 18 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_19_TEXT = `Info E-mail alimentation — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_19_POOL = buildExpressPool("e12-3-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["19 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 19 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 19 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_3_CE_EMAIL_20_TEXT = `Info E-mail alimentation — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail alimentation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_3_CE_EMAIL_20_POOL = buildExpressPool("e12-3-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail alimentation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail alimentation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail alimentation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["20 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 20 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 20 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E12_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-3-ce-email",
  readingText: E12_3_CE_EMAIL_TEXT,
  questionPool: E12_3_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-3-ce-email-2",
  readingText: E12_3_CE_EMAIL_2_TEXT,
  questionPool: E12_3_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-3",
  readingText: E12_3_CE_EMAIL_3_TEXT,
  questionPool: E12_3_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-4",
  readingText: E12_3_CE_EMAIL_4_TEXT,
  questionPool: E12_3_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-5",
  readingText: E12_3_CE_EMAIL_5_TEXT,
  questionPool: E12_3_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-6",
  readingText: E12_3_CE_EMAIL_6_TEXT,
  questionPool: E12_3_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-7",
  readingText: E12_3_CE_EMAIL_7_TEXT,
  questionPool: E12_3_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-8",
  readingText: E12_3_CE_EMAIL_8_TEXT,
  questionPool: E12_3_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-9",
  readingText: E12_3_CE_EMAIL_9_TEXT,
  questionPool: E12_3_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-10",
  readingText: E12_3_CE_EMAIL_10_TEXT,
  questionPool: E12_3_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-11",
  readingText: E12_3_CE_EMAIL_11_TEXT,
  questionPool: E12_3_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-12",
  readingText: E12_3_CE_EMAIL_12_TEXT,
  questionPool: E12_3_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-13",
  readingText: E12_3_CE_EMAIL_13_TEXT,
  questionPool: E12_3_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-14",
  readingText: E12_3_CE_EMAIL_14_TEXT,
  questionPool: E12_3_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-15",
  readingText: E12_3_CE_EMAIL_15_TEXT,
  questionPool: E12_3_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-16",
  readingText: E12_3_CE_EMAIL_16_TEXT,
  questionPool: E12_3_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-17",
  readingText: E12_3_CE_EMAIL_17_TEXT,
  questionPool: E12_3_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-18",
  readingText: E12_3_CE_EMAIL_18_TEXT,
  questionPool: E12_3_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-19",
  readingText: E12_3_CE_EMAIL_19_TEXT,
  questionPool: E12_3_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-3-ce-email-20",
  readingText: E12_3_CE_EMAIL_20_TEXT,
  questionPool: E12_3_CE_EMAIL_20_POOL
}),
];

export const E12_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-3-pee-1",
    title: "Commander un panier de légumes",
    situation: "La ferme répond à votre demande d'informations sur les paniers.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Nos paniers de légumes",
      body: "Bonjour,\nMerci pour votre message. Nous proposons deux paniers :\nle petit panier à 15 francs et le grand panier à 25 francs.\nLequel voulez-vous ?\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : choisissez un panier, expliquez pour combien de personnes vous cuisinez et demandez où le chercher.",
    points: ["Le panier choisi", "Le nombre de personnes", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-2",
    title: "Annuler son panier",
    situation: "Vous partez en voyage ; la ferme vous annonce que votre panier sera prêt.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Votre panier de samedi",
      body: "Bonjour,\nVotre panier de légumes sera prêt samedi, comme d'habitude, à notre stand du marché.\nÀ samedi !\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : excusez-vous, annulez le panier de cette semaine et expliquez quand vous revenez.",
    points: ["L'excuse", "L'annulation", "La date de votre retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-3",
    title: "S'inscrire au cours de cuisine",
    situation: "La ferme organise un cours de cuisine diététique.",
    sourceMessage: {
      from: "La Ferme du Soleil",
      subject: "Cours de cuisine diététique",
      body: "Bonjour,\nIl reste des places pour notre cours de cuisine diététique du mercredi 9 avril à 18 h.\nPrix : 40 francs, ingrédients compris.\nPour vous inscrire, répondez à cet e-mail.\nL'équipe de la ferme",
    },
    instruction: "Répondez à la ferme : inscrivez-vous, dites pourquoi ce cours vous intéresse et demandez s'il faut apporter quelque chose.",
    points: ["Votre inscription", "Pourquoi ce cours vous intéresse", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-4",
    title: "Répondre à la diététicienne",
    situation: "Avant votre premier rendez-vous, la diététicienne vous pose des questions.",
    sourceMessage: {
      from: "Mme Perret, diététicienne",
      subject: "Avant notre rendez-vous",
      body: "Bonjour,\nAvant notre premier rendez-vous, pouvez-vous décrire vos repas d'une journée ?\nQu'est-ce que vous mangez au petit-déjeuner, à midi et le soir ?\nBuvez-vous assez d'eau ?\nMme Perret",
    },
    instruction: "Répondez à la diététicienne : décrivez vos repas d'une journée, parlez de ce que vous buvez et posez une question sur l'alimentation.",
    points: ["Vos repas d'une journée", "Ce que vous buvez", "Une question sur l'alimentation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-5",
    title: "Partager une recette",
    situation: "Une amie a adoré votre plat et vous demande la recette.",
    sourceMessage: {
      from: "Elena",
      subject: "Ta soupe de légumes",
      body: "Coucou,\nTa soupe de légumes de samedi était délicieuse !\nTu peux me donner la recette ? C'est difficile à faire ?\nMerci !\nElena",
    },
    instruction: "Répondez à Elena : donnez les ingrédients, expliquez les étapes de la recette et donnez un petit conseil.",
    points: ["Les ingrédients", "Les étapes de la recette", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-6",
    title: "Conseiller un ami fatigué",
    situation: "Un ami mange mal et se sent fatigué.",
    sourceMessage: {
      from: "Mehdi",
      subject: "Toujours fatigué",
      body: "Salut,\nJe suis fatigué en ce moment. Je mange souvent des pizzas et des sandwichs, et je bois beaucoup de sodas.\nToi, tu manges équilibré, non ? Tu as des conseils ?\nMehdi",
    },
    instruction: "Répondez à Mehdi : expliquez ce que vous mangez, donnez-lui deux conseils simples et proposez-lui de cuisiner ensemble.",
    points: ["Ce que vous mangez", "Deux conseils", "Une proposition de cuisiner ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-7",
    title: "Le goûter de la sortie scolaire",
    situation: "L'école de votre fille organise une sortie et vous écrit.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie de jeudi : le goûter",
      body: "Bonjour,\nPour la sortie de jeudi, chaque enfant apporte un goûter sain : fruits, pain, eau.\nPas de chips ni de sodas, merci.\nMerci de confirmer que votre enfant participe.\nLa maîtresse",
    },
    instruction: "Répondez à la maîtresse : confirmez la participation de votre fille, dites quel goûter vous préparez et posez une question sur la sortie.",
    points: ["La confirmation", "Le goûter préparé", "Une question sur la sortie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-8",
    title: "Inviter une amie au marché",
    situation: "Une amie veut manger plus de légumes, mais elle trouve le supermarché cher.",
    sourceMessage: {
      from: "Sara",
      subject: "Manger mieux",
      body: "Salut,\nJe veux manger plus de légumes, mais au supermarché, c'est cher.\nTu achètes où, toi, tes fruits et tes légumes ?\nSara",
    },
    instruction: "Répondez à Sara : parlez du marché, proposez-lui d'y aller ensemble et donnez un exemple de prix.",
    points: ["Le marché", "Une proposition d'y aller ensemble", "Un exemple de prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-9",
    title: "Raconter le cours de cuisine",
    situation: "Un ami vous demande des nouvelles de votre cours de cuisine.",
    sourceMessage: {
      from: "Tom",
      subject: "Ton cours de cuisine",
      body: "Salut !\nAlors, ce cours de cuisine diététique hier soir ? C'était comment ?\nTu as appris quoi ?\nTom",
    },
    instruction: "Répondez à Tom : racontez le cours, décrivez une recette apprise et dites si vous recommandez le cours.",
    points: ["Le récit du cours", "Une recette apprise", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-10",
    title: "Question au magasin bio",
    situation: "Un nouveau magasin bio a ouvert et vous envoie ses informations.",
    sourceMessage: {
      from: "Magasin Bio Nature",
      subject: "Bienvenue chez Bio Nature",
      body: "Bonjour,\nNotre nouveau magasin a ouvert au centre-ville.\nCette semaine, les fruits et les légumes sont à moitié prix.\nOuvert du lundi au samedi, de 8 h 30 à 19 h.\nL'équipe Bio Nature",
    },
    instruction: "Répondez au magasin : demandez si vous pouvez trouver certains produits, posez une question sur les prix et dites quand vous allez venir.",
    points: ["Les produits recherchés", "Une question sur les prix", "Le jour de votre visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-11",
    title: "Répondre — alimentation (11)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-12",
    title: "Répondre — alimentation (12)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-13",
    title: "Répondre — alimentation (13)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-14",
    title: "Répondre — alimentation (14)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-15",
    title: "Répondre — alimentation (15)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-16",
    title: "Répondre — alimentation (16)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-17",
    title: "Répondre — alimentation (17)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-18",
    title: "Répondre — alimentation (18)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-19",
    title: "Répondre — alimentation (19)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-3-pee-20",
    title: "Répondre — alimentation (20)",
    situation: "Vous avez reçu un e-mail concernant alimentation.",
sourceMessage: {
  from: "Service Alimentation",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant alimentation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.4 — Vivre en ville
   ════════════════════════════════════════════════════════════════════════════ */

const E12_4_CE_EMAIL_TEXT = `De : Administration communale
Objet : Informations de votre quartier : travaux et fête

Bonjour,

Voici les informations du mois pour votre quartier.
Des travaux commencent rue des Tilleuls le lundi 5 mai et vont durer trois semaines. Pendant les travaux, la rue est fermée aux voitures.
Le bus numéro 7 change d'itinéraire : il s'arrête maintenant devant la poste.
La bibliothèque municipale ouvre aussi le dimanche matin, de 9 h à 12 h.
Le marché du quartier a lieu tous les mercredis sur la place du Marché, de 7 h à 12 h 30.
Enfin, la fête du quartier est prévue le samedi 14 juin au parc. Le concert commence à 17 h et l'entrée est gratuite.

Avec nos cordiales salutations,
L'administration communale`;

const E12_4_CE_EMAIL_POOL = buildExpressPool("e12-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Où ont lieu les travaux ?",
    text: ["Rue des Tilleuls", "Place du Marché", "Au parc"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Des _________ commencent rue des Tilleuls le lundi 5 mai.",
    fill: "travaux",
    vfQ: "Les travaux ont lieu rue des Tilleuls.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand commencent les travaux ?",
    text: ["Le lundi 5 mai", "Le lundi 15 mai", "Le mardi 6 mai"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les travaux commencent le lundi _________ mai.",
    fill: "5",
    fillA: ["cinq"],
    vfQ: "Les travaux commencent le 5 juin.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de temps vont durer les travaux ?",
    text: ["Trois semaines", "Trois mois", "Une semaine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les travaux vont durer trois _________.",
    fill: "semaines",
    vfQ: "Les travaux vont durer trois semaines.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Que se passe-t-il pendant les travaux ?",
    text: [
      "La rue est fermée aux voitures",
      "La rue est fermée aux piétons",
      "Rien ne change",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pendant les travaux, la rue est fermée aux _________.",
    fill: "voitures",
    vfQ: "Pendant les travaux, on peut passer en voiture.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel bus change d'itinéraire ?",
    text: ["Le bus numéro 7", "Le bus numéro 17", "Le bus numéro 5"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bus numéro _________ change d'itinéraire.",
    fill: "7",
    fillA: ["sept"],
    vfQ: "Le bus numéro 7 s'arrête maintenant devant la poste.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quand la bibliothèque est-elle maintenant aussi ouverte ?",
    text: ["Le dimanche matin", "Le dimanche soir", "Le lundi matin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La bibliothèque ouvre aussi le dimanche matin, de 9 h à _________ h.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "La bibliothèque est fermée le dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand a lieu le marché du quartier ?",
    text: ["Tous les mercredis", "Tous les samedis", "Une fois par mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le marché du quartier a lieu tous les _________.",
    fill: "mercredis",
    fillA: ["mercredi"],
    vfQ: "Le marché du quartier a lieu le samedi.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Où a lieu la fête du quartier ?",
    text: ["Au parc", "Devant la poste", "À la bibliothèque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête du quartier est prévue le samedi 14 juin au _________.",
    fill: "parc",
    vfQ: "La fête du quartier a lieu au parc.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "À quelle heure commence le concert ?",
    text: ["À 17 h", "À 19 h", "À 12 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le concert commence à _________ h.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "Le concert commence à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Combien coûte l'entrée de la fête ?",
    text: ["Elle est gratuite", "10 francs", "5 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le concert commence à 17 h et l'entrée est _________.",
    fill: "gratuite",
    vfQ: "Il faut payer pour entrer à la fête.",
    vfC: 1,
  }),
]);


const E12_4_CE_EMAIL_2_TEXT = `Info E-mail la ville — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_2_POOL = buildExpressPool("e12-4-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["2 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 2 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 2 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_3_TEXT = `Info E-mail la ville — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_3_POOL = buildExpressPool("e12-4-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["3 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 3 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_4_TEXT = `Info E-mail la ville — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_4_POOL = buildExpressPool("e12-4-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["4 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 4 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_5_TEXT = `Info E-mail la ville — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_5_POOL = buildExpressPool("e12-4-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["5 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 5 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_6_TEXT = `Info E-mail la ville — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_6_POOL = buildExpressPool("e12-4-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["6 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 6 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_7_TEXT = `Info E-mail la ville — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_7_POOL = buildExpressPool("e12-4-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["7 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 7 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 7 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_8_TEXT = `Info E-mail la ville — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_8_POOL = buildExpressPool("e12-4-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["8 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 8 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 8 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_9_TEXT = `Info E-mail la ville — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_9_POOL = buildExpressPool("e12-4-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["9 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 9 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 9 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_10_TEXT = `Info E-mail la ville — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_10_POOL = buildExpressPool("e12-4-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["10 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 10 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 10 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_11_TEXT = `Info E-mail la ville — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_11_POOL = buildExpressPool("e12-4-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["11 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 11 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 11 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_12_TEXT = `Info E-mail la ville — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_12_POOL = buildExpressPool("e12-4-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["12 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 12 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 12 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_13_TEXT = `Info E-mail la ville — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_13_POOL = buildExpressPool("e12-4-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["13 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 13 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 13 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_14_TEXT = `Info E-mail la ville — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_14_POOL = buildExpressPool("e12-4-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["14 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 14 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 14 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_15_TEXT = `Info E-mail la ville — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_15_POOL = buildExpressPool("e12-4-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["15 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 15 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 15 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_16_TEXT = `Info E-mail la ville — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_16_POOL = buildExpressPool("e12-4-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["16 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 16 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 16 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_17_TEXT = `Info E-mail la ville — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_17_POOL = buildExpressPool("e12-4-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["17 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 17 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 17 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_18_TEXT = `Info E-mail la ville — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_18_POOL = buildExpressPool("e12-4-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["18 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 18 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 18 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_19_TEXT = `Info E-mail la ville — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_19_POOL = buildExpressPool("e12-4-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["19 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 19 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 19 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_4_CE_EMAIL_20_TEXT = `Info E-mail la ville — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail la ville.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_4_CE_EMAIL_20_POOL = buildExpressPool("e12-4-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail la ville", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail la ville.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail la ville.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["20 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 20 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 20 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E12_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-4-ce-email",
  readingText: E12_4_CE_EMAIL_TEXT,
  questionPool: E12_4_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-4-ce-email-2",
  readingText: E12_4_CE_EMAIL_2_TEXT,
  questionPool: E12_4_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-3",
  readingText: E12_4_CE_EMAIL_3_TEXT,
  questionPool: E12_4_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-4",
  readingText: E12_4_CE_EMAIL_4_TEXT,
  questionPool: E12_4_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-5",
  readingText: E12_4_CE_EMAIL_5_TEXT,
  questionPool: E12_4_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-6",
  readingText: E12_4_CE_EMAIL_6_TEXT,
  questionPool: E12_4_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-7",
  readingText: E12_4_CE_EMAIL_7_TEXT,
  questionPool: E12_4_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-8",
  readingText: E12_4_CE_EMAIL_8_TEXT,
  questionPool: E12_4_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-9",
  readingText: E12_4_CE_EMAIL_9_TEXT,
  questionPool: E12_4_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-10",
  readingText: E12_4_CE_EMAIL_10_TEXT,
  questionPool: E12_4_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-11",
  readingText: E12_4_CE_EMAIL_11_TEXT,
  questionPool: E12_4_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-12",
  readingText: E12_4_CE_EMAIL_12_TEXT,
  questionPool: E12_4_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-13",
  readingText: E12_4_CE_EMAIL_13_TEXT,
  questionPool: E12_4_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-14",
  readingText: E12_4_CE_EMAIL_14_TEXT,
  questionPool: E12_4_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-15",
  readingText: E12_4_CE_EMAIL_15_TEXT,
  questionPool: E12_4_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-16",
  readingText: E12_4_CE_EMAIL_16_TEXT,
  questionPool: E12_4_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-17",
  readingText: E12_4_CE_EMAIL_17_TEXT,
  questionPool: E12_4_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-18",
  readingText: E12_4_CE_EMAIL_18_TEXT,
  questionPool: E12_4_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-19",
  readingText: E12_4_CE_EMAIL_19_TEXT,
  questionPool: E12_4_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-4-ce-email-20",
  readingText: E12_4_CE_EMAIL_20_TEXT,
  questionPool: E12_4_CE_EMAIL_20_POOL
}),
];

export const E12_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-4-pee-1",
    title: "Questions sur les travaux",
    situation: "La commune annonce des travaux dans votre rue.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Travaux dans votre rue",
      body: "Bonjour,\nDes travaux commencent dans votre rue le lundi 5 mai et vont durer trois semaines.\nPendant les travaux, la rue est fermée aux voitures.\nPour toute question, répondez à cet e-mail.\nL'administration communale",
    },
    instruction: "Répondez à la commune : posez une question sur les horaires des travaux, expliquez votre problème de parking et demandez une solution.",
    points: ["Une question sur les horaires", "Votre problème de parking", "Une demande de solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-2",
    title: "Signaler un problème",
    situation: "La commune invite les habitants à signaler les problèmes du quartier.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre quartier vous écoute",
      body: "Bonjour,\nVous pouvez maintenant signaler les problèmes de votre quartier par e-mail : éclairage, propreté, routes…\nNous répondons sous trois jours.\nL'administration communale",
    },
    instruction: "Répondez à la commune : signalez un lampadaire cassé, dites où il se trouve et depuis quand il ne fonctionne plus.",
    points: ["Le problème signalé", "Le lieu exact", "Depuis quand"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-3",
    title: "Inviter un ami à la fête du quartier",
    situation: "Un ami vous demande vos projets pour le week-end du 14 juin.",
    sourceMessage: {
      from: "Ivan",
      subject: "Le week-end du 14 juin",
      body: "Salut !\nTu fais quoi le week-end du 14 juin ?\nOn peut peut-être faire quelque chose ensemble ?\nIvan",
    },
    instruction: "Répondez à Ivan : parlez de la fête du quartier, invitez-le et donnez les informations pratiques (lieu, heure, programme).",
    points: ["La fête du quartier", "L'invitation", "Les informations pratiques"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-4",
    title: "Accueillir un nouveau voisin",
    situation: "Un nouveau voisin vient d'arriver dans votre immeuble et vous pose des questions.",
    sourceMessage: {
      from: "Emre",
      subject: "Nouveaux voisins",
      body: "Bonjour,\nNous venons d'arriver dans l'immeuble, au deuxième étage.\nOù est-ce qu'on peut faire les courses dans le quartier ?\nEt quel bus va au centre-ville ?\nMerci d'avance,\nEmre",
    },
    instruction: "Répondez à Emre : souhaitez-lui la bienvenue, expliquez où faire les courses et donnez les informations sur le bus.",
    points: ["Un mot de bienvenue", "Où faire les courses", "Les informations sur le bus"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-5",
    title: "Renouveler son abonnement de bus",
    situation: "Les transports municipaux vous écrivent au sujet de votre abonnement.",
    sourceMessage: {
      from: "Transports municipaux",
      subject: "Votre abonnement se termine",
      body: "Bonjour,\nVotre abonnement de bus se termine à la fin du mois.\nVoulez-vous le renouveler ? Abonnement mensuel : 70 francs ; annuel : 700 francs.\nLes transports municipaux",
    },
    instruction: "Répondez aux transports : renouvelez votre abonnement, choisissez une formule et posez une question sur le nouvel itinéraire du bus 7.",
    points: ["Le renouvellement", "La formule choisie", "Une question sur l'itinéraire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-6",
    title: "Devenir bénévole",
    situation: "L'association de quartier cherche des bénévoles pour la fête.",
    sourceMessage: {
      from: "Association du quartier",
      subject: "Recherche de bénévoles",
      body: "Bonjour,\nNous cherchons des bénévoles pour la fête du quartier du samedi 14 juin.\nAu programme : installation, buvette, jeux pour les enfants.\nQui veut nous aider ?\nL'association du quartier",
    },
    instruction: "Répondez à l'association : proposez votre aide, dites ce que vous préférez faire et donnez vos disponibilités.",
    points: ["Votre proposition d'aide", "L'activité préférée", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-7",
    title: "Se plaindre du bruit",
    situation: "La régie de votre immeuble demande l'avis des habitants.",
    sourceMessage: {
      from: "Régie Lambert",
      subject: "Votre avis sur l'immeuble",
      body: "Bonjour,\nNous faisons le point sur la vie de l'immeuble.\nAvez-vous des remarques ou des problèmes à signaler ?\nLa régie Lambert",
    },
    instruction: "Répondez à la régie : expliquez le problème de bruit des travaux, dites à quelles heures c'est difficile et demandez une solution.",
    points: ["Le problème de bruit", "Les heures difficiles", "Une demande de solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-8",
    title: "Décrire son quartier",
    situation: "Une amie cherche un appartement dans votre ville.",
    sourceMessage: {
      from: "Lucia",
      subject: "Ton quartier",
      body: "Coucou,\nJe cherche un appartement dans ta ville.\nTon quartier est bien ? Il y a des magasins, des transports ?\nRaconte-moi !\nLucia",
    },
    instruction: "Répondez à Lucia : décrivez votre quartier, parlez des transports et des magasins, et dites ce que vous préférez dans ce quartier.",
    points: ["La description du quartier", "Les transports et les magasins", "Ce que vous préférez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-9",
    title: "S'inscrire à la bibliothèque",
    situation: "La bibliothèque municipale annonce ses nouveaux horaires.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nBonne nouvelle : la bibliothèque ouvre maintenant aussi le dimanche matin, de 9 h à 12 h.\nL'inscription est gratuite pour les habitants de la commune.\nLa bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : demandez comment s'inscrire, posez une question sur les livres pour enfants et dites quand vous voulez venir.",
    points: ["Une question sur l'inscription", "Une question sur les livres pour enfants", "Le jour de votre visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-10",
    title: "Donner son avis sur le marché",
    situation: "La commune demande l'avis des habitants sur le marché du mercredi.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre avis sur le marché",
      body: "Bonjour,\nNous préparons le programme de l'année prochaine.\nQue pensez-vous du marché du mercredi ? Qu'est-ce qu'on peut améliorer ?\nMerci pour vos réponses.\nL'administration communale",
    },
    instruction: "Répondez à la commune : donnez votre avis sur le marché, dites ce que vous y achetez et proposez une amélioration.",
    points: ["Votre avis", "Ce que vous achetez", "Une proposition d'amélioration"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-11",
    title: "Répondre — la ville (11)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-12",
    title: "Répondre — la ville (12)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-13",
    title: "Répondre — la ville (13)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-14",
    title: "Répondre — la ville (14)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-15",
    title: "Répondre — la ville (15)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-16",
    title: "Répondre — la ville (16)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-17",
    title: "Répondre — la ville (17)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-18",
    title: "Répondre — la ville (18)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-19",
    title: "Répondre — la ville (19)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-4-pee-20",
    title: "Répondre — la ville (20)",
    situation: "Vous avez reçu un e-mail concernant la ville.",
sourceMessage: {
  from: "Service La ville",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant la ville.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E12.5 — Prendre soin de soi
   ════════════════════════════════════════════════════════════════════════════ */

const E12_5_CE_EMAIL_TEXT = `De : Espace bien-être du Lac
Objet : Confirmation de votre journée détente

Bonjour,

Nous confirmons votre réservation pour la journée détente du dimanche 23 novembre.
Le programme commence à 9 h 30 par un cours de relaxation d'une heure. Ensuite, vous avez accès à la piscine et au sauna jusqu'à 17 h.
Le massage du dos est prévu à 14 h et dure vingt-cinq minutes.
Le prix de la journée est de 120 francs, repas léger compris. Vous avez déjà payé 50 francs ; le reste se paie à l'accueil.
Apportez un maillot de bain ; nous prêtons les peignoirs et les serviettes.
Notre conseil : couchez-vous tôt la veille et buvez beaucoup d'eau pendant la journée.

Belle journée,
L'équipe de l'Espace bien-être`;

const E12_5_CE_EMAIL_POOL = buildExpressPool("e12-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel jour est la journée détente ?",
    text: [
      "Le dimanche 23 novembre",
      "Le samedi 22 novembre",
      "Le dimanche 30 novembre",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous confirmons votre réservation pour le dimanche 23 _________.",
    fill: "novembre",
    vfQ: "La journée détente a lieu le dimanche 23 novembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quelle heure commence le programme ?",
    text: ["À 9 h 30", "À 8 h 30", "À 10 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le programme commence à 9 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le programme commence à 10 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Comment commence la journée ?",
    text: ["Par un cours de relaxation", "Par un massage", "Par le repas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le programme commence par un cours de _________.",
    fill: "relaxation",
    vfQ: "La journée commence par un cours de relaxation.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien de temps dure le cours de relaxation ?",
    text: ["Une heure", "Vingt-cinq minutes", "Deux heures"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le programme commence par un cours de relaxation d'une _________.",
    fill: "heure",
    vfQ: "Le cours de relaxation dure deux heures.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Jusqu'à quelle heure a-t-on accès à la piscine et au sauna ?",
    text: ["Jusqu'à 17 h", "Jusqu'à 14 h", "Jusqu'à 19 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez accès à la piscine et au sauna jusqu'à _________ h.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "On a accès au sauna jusqu'à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure est prévu le massage du dos ?",
    text: ["À 14 h", "À 15 h", "À 9 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le massage du dos est prévu à _________ h.",
    fill: "14",
    fillA: ["quatorze"],
    vfQ: "Le massage est prévu à 15 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Combien de temps dure le massage ?",
    text: ["Vingt-cinq minutes", "Une heure", "Dix minutes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le massage dure vingt-cinq _________.",
    fill: "minutes",
    vfQ: "Le massage dure vingt-cinq minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Combien coûte la journée ?",
    text: [
      "120 francs, repas léger compris",
      "50 francs, sans repas",
      "170 francs",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix de la journée est de _________ francs.",
    fill: "120",
    fillA: ["cent vingt"],
    vfQ: "Le repas n'est pas compris dans le prix.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien le client a-t-il déjà payé ?",
    text: ["50 francs", "70 francs", "120 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez déjà payé _________ francs.",
    fill: "50",
    fillA: ["cinquante"],
    vfQ: "Le reste se paie à l'accueil.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Qu'est-ce qu'il faut apporter ?",
    text: [
      "Un maillot de bain",
      "Un peignoir et des serviettes",
      "Rien du tout",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez un _________ de bain.",
    fill: "maillot",
    vfQ: "Il faut apporter son peignoir.",
    vfC: 1,
  }),
]);


const E12_5_CE_EMAIL_2_TEXT = `Info E-mail bien-être — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_2_POOL = buildExpressPool("e12-5-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["2 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 2 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 2 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_3_TEXT = `Info E-mail bien-être — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_3_POOL = buildExpressPool("e12-5-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["3 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 3 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_4_TEXT = `Info E-mail bien-être — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_4_POOL = buildExpressPool("e12-5-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["4 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 4 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_5_TEXT = `Info E-mail bien-être — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_5_POOL = buildExpressPool("e12-5-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["5 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 5 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_6_TEXT = `Info E-mail bien-être — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_6_POOL = buildExpressPool("e12-5-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["6 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 6 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_7_TEXT = `Info E-mail bien-être — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_7_POOL = buildExpressPool("e12-5-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["7 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 7 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 7 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_8_TEXT = `Info E-mail bien-être — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_8_POOL = buildExpressPool("e12-5-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["8 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 8 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 8 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_9_TEXT = `Info E-mail bien-être — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_9_POOL = buildExpressPool("e12-5-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["9 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 9 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 9 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_10_TEXT = `Info E-mail bien-être — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_10_POOL = buildExpressPool("e12-5-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["10 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 10 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 10 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_11_TEXT = `Info E-mail bien-être — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_11_POOL = buildExpressPool("e12-5-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["11 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 11 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 11 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_12_TEXT = `Info E-mail bien-être — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_12_POOL = buildExpressPool("e12-5-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["12 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 12 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 12 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_13_TEXT = `Info E-mail bien-être — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_13_POOL = buildExpressPool("e12-5-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["13 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 13 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 13 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_14_TEXT = `Info E-mail bien-être — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_14_POOL = buildExpressPool("e12-5-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["14 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 14 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 14 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_15_TEXT = `Info E-mail bien-être — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_15_POOL = buildExpressPool("e12-5-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["15 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 15 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 15 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_16_TEXT = `Info E-mail bien-être — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_16_POOL = buildExpressPool("e12-5-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["16 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 16 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 16 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_17_TEXT = `Info E-mail bien-être — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_17_POOL = buildExpressPool("e12-5-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["17 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 17 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 17 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_18_TEXT = `Info E-mail bien-être — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_18_POOL = buildExpressPool("e12-5-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["18 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 18 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 18 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_19_TEXT = `Info E-mail bien-être — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_19_POOL = buildExpressPool("e12-5-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["19 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 19 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 19 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E12_5_CE_EMAIL_20_TEXT = `Info E-mail bien-être — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bien-être.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E12_5_CE_EMAIL_20_POOL = buildExpressPool("e12-5-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bien-être", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail bien-être.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bien-être.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le service est ouvert du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service est ouvert en semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quels documents faut-il apporter ?",
    text: ["Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pensez à apporter une pièce d'_________ et un justificatif de domicile.",
    fill: "identité",
    vfQ: "Il faut une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de temps pour le traitement ?",
    text: ["20 jours ouvrés", "Un jour", "Un mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les délais sont de 20 jours _________.",
    fill: "ouvrés",
    vfQ: "Le délai moyen est 20 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Peut-on contacter le service le samedi ?",
    text: ["Oui, le matin", "Non, jamais", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un numéro spécial est disponible le _________ matin.",
    fill: "samedi",
    vfQ: "Un numéro est disponible le samedi matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où trouver plus d'informations ?",
    text: ["Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E12_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e12-5-ce-email",
  readingText: E12_5_CE_EMAIL_TEXT,
  questionPool: E12_5_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e12-5-ce-email-2",
  readingText: E12_5_CE_EMAIL_2_TEXT,
  questionPool: E12_5_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-3",
  readingText: E12_5_CE_EMAIL_3_TEXT,
  questionPool: E12_5_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-4",
  readingText: E12_5_CE_EMAIL_4_TEXT,
  questionPool: E12_5_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-5",
  readingText: E12_5_CE_EMAIL_5_TEXT,
  questionPool: E12_5_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-6",
  readingText: E12_5_CE_EMAIL_6_TEXT,
  questionPool: E12_5_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-7",
  readingText: E12_5_CE_EMAIL_7_TEXT,
  questionPool: E12_5_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-8",
  readingText: E12_5_CE_EMAIL_8_TEXT,
  questionPool: E12_5_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-9",
  readingText: E12_5_CE_EMAIL_9_TEXT,
  questionPool: E12_5_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-10",
  readingText: E12_5_CE_EMAIL_10_TEXT,
  questionPool: E12_5_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-11",
  readingText: E12_5_CE_EMAIL_11_TEXT,
  questionPool: E12_5_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-12",
  readingText: E12_5_CE_EMAIL_12_TEXT,
  questionPool: E12_5_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-13",
  readingText: E12_5_CE_EMAIL_13_TEXT,
  questionPool: E12_5_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-14",
  readingText: E12_5_CE_EMAIL_14_TEXT,
  questionPool: E12_5_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-15",
  readingText: E12_5_CE_EMAIL_15_TEXT,
  questionPool: E12_5_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-16",
  readingText: E12_5_CE_EMAIL_16_TEXT,
  questionPool: E12_5_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-17",
  readingText: E12_5_CE_EMAIL_17_TEXT,
  questionPool: E12_5_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-18",
  readingText: E12_5_CE_EMAIL_18_TEXT,
  questionPool: E12_5_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-19",
  readingText: E12_5_CE_EMAIL_19_TEXT,
  questionPool: E12_5_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e12-5-ce-email-20",
  readingText: E12_5_CE_EMAIL_20_TEXT,
  questionPool: E12_5_CE_EMAIL_20_POOL
}),
];

export const E12_5_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e12-5-pee-1",
    title: "Confirmer sa journée détente",
    situation: "L'espace bien-être vous demande de confirmer votre réservation.",
    sourceMessage: {
      from: "Espace bien-être du Lac",
      subject: "Votre réservation du 23 novembre",
      body: "Bonjour,\nMerci de confirmer votre réservation pour la journée détente du dimanche 23 novembre.\nVoulez-vous aussi réserver un massage ?\nL'équipe de l'Espace bien-être",
    },
    instruction: "Répondez à l'espace bien-être : confirmez votre venue, réservez un massage et posez une question sur ce qu'il faut apporter.",
    points: ["La confirmation", "La réservation du massage", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-2",
    title: "Prendre rendez-vous chez le coiffeur",
    situation: "Le salon de coiffure répond à votre message.",
    sourceMessage: {
      from: "Salon Coup d'Éclat",
      subject: "Votre demande de rendez-vous",
      body: "Bonjour,\nMerci pour votre message. Quand voulez-vous venir ?\nVoulez-vous une coupe simple ou aussi une couleur ?\nLe salon Coup d'Éclat",
    },
    instruction: "Répondez au salon : donnez deux disponibilités, expliquez ce que vous voulez et demandez le prix.",
    points: ["Deux disponibilités", "Ce que vous voulez", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-3",
    title: "Déplacer un rendez-vous",
    situation: "Le salon confirme votre rendez-vous, mais vous avez un empêchement.",
    sourceMessage: {
      from: "Salon Coup d'Éclat",
      subject: "Confirmation de votre rendez-vous",
      body: "Bonjour,\nNous confirmons votre rendez-vous de vendredi à 14 h pour une coupe.\nÀ vendredi !\nLe salon Coup d'Éclat",
    },
    instruction: "Répondez au salon : excusez-vous, expliquez votre empêchement et proposez un autre jour.",
    points: ["L'excuse", "L'empêchement", "Une autre proposition de date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-4",
    title: "Conseiller une amie stressée",
    situation: "Une amie dort mal et se sent stressée par son travail.",
    sourceMessage: {
      from: "Priya",
      subject: "Je suis fatiguée",
      body: "Salut,\nEn ce moment, je dors très mal et je suis stressée par mon travail.\nToi, tu as l'air en forme ! Qu'est-ce que tu fais pour te détendre ?\nPriya",
    },
    instruction: "Répondez à Priya : expliquez ce que vous faites pour vous détendre, donnez-lui deux conseils pour mieux dormir et proposez une activité ensemble.",
    points: ["Vos activités de détente", "Deux conseils pour dormir", "Une activité ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-5",
    title: "Raconter sa journée au spa",
    situation: "Un ami vous demande des nouvelles de votre journée détente.",
    sourceMessage: {
      from: "Samuel",
      subject: "Ta journée au spa",
      body: "Salut !\nAlors, cette journée détente dimanche ? C'était bien ?\nRaconte-moi !\nSamuel",
    },
    instruction: "Répondez à Samuel : racontez la journée, dites ce que vous avez préféré et recommandez (ou non) l'endroit.",
    points: ["Le récit de la journée", "Votre moment préféré", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-6",
    title: "Offrir un bon cadeau",
    situation: "Vous voulez offrir un cadeau bien-être à votre mère ; le centre vous répond.",
    sourceMessage: {
      from: "Espace bien-être du Lac",
      subject: "Nos bons cadeaux",
      body: "Bonjour,\nNous proposons des bons cadeaux : massage (80 francs) ou journée détente (120 francs).\nQue voulez-vous offrir ?\nL'équipe de l'Espace bien-être",
    },
    instruction: "Répondez au centre : choisissez un bon cadeau, expliquez pour qui c'est et demandez comment le recevoir.",
    points: ["Le bon choisi", "Pour qui c'est", "Une question sur la livraison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-7",
    title: "Le programme bien-être au travail",
    situation: "Le service des ressources humaines prépare un programme bien-être.",
    sourceMessage: {
      from: "Service RH",
      subject: "Programme bien-être des employés",
      body: "Bonjour,\nNous préparons un programme bien-être pour les employés : sport, relaxation, ateliers.\nQuelles activités vous intéressent ? À quel moment de la journée ?\nLe service RH",
    },
    instruction: "Répondez au service RH : proposez deux activités, expliquez pourquoi elles sont importantes pour vous et donnez le moment qui vous convient.",
    points: ["Deux activités", "Pourquoi c'est important", "Le moment qui vous convient"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-8",
    title: "Mieux dormir",
    situation: "La pharmacie répond à votre demande de conseils pour le sommeil.",
    sourceMessage: {
      from: "Pharmacie du Lac",
      subject: "Vos problèmes de sommeil",
      body: "Bonjour,\nVous nous avez demandé des conseils pour mieux dormir.\nPouvez-vous décrire votre sommeil ? À quelle heure vous couchez-vous ?\nBuvez-vous du café le soir ?\nVotre pharmacie",
    },
    instruction: "Répondez à la pharmacie : décrivez votre sommeil, parlez de vos habitudes du soir et posez une question sur les produits naturels.",
    points: ["Votre sommeil", "Vos habitudes du soir", "Une question sur les produits naturels"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-9",
    title: "Ralentir le rythme",
    situation: "Un ami trouve que vous travaillez trop.",
    sourceMessage: {
      from: "David",
      subject: "On ne te voit plus !",
      body: "Salut,\nTu travailles trop en ce moment ! On ne te voit plus.\nTu dois aussi penser à toi.\nOn se voit bientôt ?\nDavid",
    },
    instruction: "Répondez à David : reconnaissez que vous travaillez trop, présentez deux bonnes résolutions et proposez un rendez-vous.",
    points: ["Votre situation", "Deux bonnes résolutions", "Une proposition de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-10",
    title: "S'inscrire au cours de méditation",
    situation: "Le centre de yoga annonce ses nouveaux cours de méditation.",
    sourceMessage: {
      from: "Centre Zen et Forme",
      subject: "Nouveaux cours de méditation",
      body: "Bonjour,\nNos nouveaux cours de méditation commencent en janvier, le lundi à 19 h.\nLes débutants sont les bienvenus. Premier cours gratuit.\nLe Centre Zen et Forme",
    },
    instruction: "Répondez au centre : inscrivez-vous au cours d'essai, expliquez pourquoi vous voulez méditer et posez une question sur le prix de l'abonnement.",
    points: ["Votre inscription", "Pourquoi vous voulez méditer", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-11",
    title: "Répondre — bien-être (11)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-12",
    title: "Répondre — bien-être (12)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-13",
    title: "Répondre — bien-être (13)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-14",
    title: "Répondre — bien-être (14)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-15",
    title: "Répondre — bien-être (15)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-16",
    title: "Répondre — bien-être (16)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-17",
    title: "Répondre — bien-être (17)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-18",
    title: "Répondre — bien-être (18)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-19",
    title: "Répondre — bien-être (19)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e12-5-pee-20",
    title: "Répondre — bien-être (20)",
    situation: "Vous avez reçu un e-mail concernant bien-être.",
sourceMessage: {
  from: "Service Bien-être",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant bien-être.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
