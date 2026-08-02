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

const E13_1_CE_EMAIL_TEXT = `De : École de langues Horizon
Objet : Confirmation de votre inscription au cours de français

Bonjour,

Nous avons bien reçu votre inscription au cours de français de niveau A2.
Les cours commencent le lundi 8 septembre et durent douze semaines.
Ils ont lieu le lundi et le jeudi, de 18 h 30 à 20 h, dans la salle 12, au troisième étage.
Le prix de la formation est de 480 francs, à payer avant le premier cours.
Le premier jour, apportez une pièce d'identité et votre confirmation d'inscription.
À la fin de la formation, vous allez passer un test et recevoir un certificat.
Pour toute question, vous pouvez appeler le secrétariat au 021 555 78 90, du lundi au vendredi.

Avec nos meilleures salutations,
L'École de langues Horizon`;

const E13_1_CE_EMAIL_POOL = buildExpressPool("e13-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est le niveau du cours de français ?",
    text: ["A2", "B1", "A1"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Votre inscription au cours de français de niveau _________.",
    fill: "A2",
    fillA: ["a2"],
    vfQ: "Le cours de français est de niveau A2.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand commencent les cours ?",
    text: ["Le lundi 8 septembre", "Le mardi 9 septembre", "Le lundi 15 septembre"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les cours commencent le lundi 8 _________.",
    fill: "septembre",
    vfQ: "Les cours commencent le 8 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de temps dure la formation ?",
    text: ["Douze semaines", "Dix semaines", "Six mois"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les cours durent _________ semaines.",
    fill: "douze",
    fillA: ["12"],
    vfQ: "La formation dure six semaines.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels jours ont lieu les cours ?",
    text: ["Le lundi et le jeudi", "Le mardi et le vendredi", "Le mercredi seulement"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les cours ont lieu le lundi et le _________.",
    fill: "jeudi",
    vfQ: "Les cours ont lieu le mercredi.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "À quelle heure commencent les cours ?",
    text: ["À 18 h 30", "À 19 h", "À 20 h"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les cours ont lieu de 18 h 30 à _________ h.",
    fill: "20",
    fillA: ["vingt", "20 h"],
    vfQ: "Les cours finissent à 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où ont lieu les cours ?",
    text: [
      "Dans la salle 12, au troisième étage",
      "Dans la salle 3, au premier étage",
      "Dans la salle 21, au rez-de-chaussée",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Dans la salle 12, au _________ étage.",
    fill: "troisième",
    fillA: ["troisieme", "3e", "3ème", "3"],
    vfQ: "Les cours ont lieu au premier étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Combien coûte la formation ?",
    text: ["480 francs", "180 francs", "840 francs"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Le prix de la formation est de _________ francs.",
    fill: "480",
    fillA: ["quatre cent quatre-vingts"],
    vfQ: "La formation coûte 480 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Qu'est-ce qu'il faut apporter le premier jour ?",
    text: [
      "Une pièce d'identité et la confirmation d'inscription",
      "Un dictionnaire et un cahier",
      "Une photo et un certificat",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Apportez une pièce d'_________ et votre confirmation d'inscription.",
    fill: "identité",
    fillA: ["identite"],
    vfQ: "Le premier jour, il faut apporter une pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qu'est-ce qu'on reçoit à la fin de la formation ?",
    text: ["Un certificat", "Un diplôme universitaire", "Un livre de français"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Vous allez passer un test et recevoir un _________.",
    fill: "certificat",
    vfQ: "À la fin de la formation, il n'y a pas de test.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il payer la formation ?",
    text: ["Avant le premier cours", "À la fin de la formation", "Chaque semaine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Le prix est à payer avant le premier _________.",
    fill: "cours",
    vfQ: "On peut payer à la fin de la formation.",
    vfC: 1,
  }),
]);


const E13_1_CE_EMAIL_2_TEXT = `Info E-mail formation — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_2_POOL = buildExpressPool("e13-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_3_TEXT = `Info E-mail formation — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_3_POOL = buildExpressPool("e13-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_4_TEXT = `Info E-mail formation — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_4_POOL = buildExpressPool("e13-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_5_TEXT = `Info E-mail formation — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_5_POOL = buildExpressPool("e13-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_6_TEXT = `Info E-mail formation — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_6_POOL = buildExpressPool("e13-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_7_TEXT = `Info E-mail formation — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_7_POOL = buildExpressPool("e13-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_8_TEXT = `Info E-mail formation — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_8_POOL = buildExpressPool("e13-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_9_TEXT = `Info E-mail formation — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_9_POOL = buildExpressPool("e13-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_10_TEXT = `Info E-mail formation — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_10_POOL = buildExpressPool("e13-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_11_TEXT = `Info E-mail formation — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_11_POOL = buildExpressPool("e13-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_12_TEXT = `Info E-mail formation — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_12_POOL = buildExpressPool("e13-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_13_TEXT = `Info E-mail formation — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_13_POOL = buildExpressPool("e13-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_14_TEXT = `Info E-mail formation — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_14_POOL = buildExpressPool("e13-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_15_TEXT = `Info E-mail formation — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_15_POOL = buildExpressPool("e13-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_16_TEXT = `Info E-mail formation — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_16_POOL = buildExpressPool("e13-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_17_TEXT = `Info E-mail formation — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_17_POOL = buildExpressPool("e13-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_18_TEXT = `Info E-mail formation — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_18_POOL = buildExpressPool("e13-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_19_TEXT = `Info E-mail formation — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_19_POOL = buildExpressPool("e13-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_20_TEXT = `Info E-mail formation — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail formation.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_1_CE_EMAIL_20_POOL = buildExpressPool("e13-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail formation", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ formation.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail formation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E13_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-1-ce-email",
  readingText: E13_1_CE_EMAIL_TEXT,
  questionPool: E13_1_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-1-ce-email-2",
  readingText: E13_1_CE_EMAIL_2_TEXT,
  questionPool: E13_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-3",
  readingText: E13_1_CE_EMAIL_3_TEXT,
  questionPool: E13_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-4",
  readingText: E13_1_CE_EMAIL_4_TEXT,
  questionPool: E13_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-5",
  readingText: E13_1_CE_EMAIL_5_TEXT,
  questionPool: E13_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-6",
  readingText: E13_1_CE_EMAIL_6_TEXT,
  questionPool: E13_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-7",
  readingText: E13_1_CE_EMAIL_7_TEXT,
  questionPool: E13_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-8",
  readingText: E13_1_CE_EMAIL_8_TEXT,
  questionPool: E13_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-9",
  readingText: E13_1_CE_EMAIL_9_TEXT,
  questionPool: E13_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-10",
  readingText: E13_1_CE_EMAIL_10_TEXT,
  questionPool: E13_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-11",
  readingText: E13_1_CE_EMAIL_11_TEXT,
  questionPool: E13_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-12",
  readingText: E13_1_CE_EMAIL_12_TEXT,
  questionPool: E13_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-13",
  readingText: E13_1_CE_EMAIL_13_TEXT,
  questionPool: E13_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-14",
  readingText: E13_1_CE_EMAIL_14_TEXT,
  questionPool: E13_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-15",
  readingText: E13_1_CE_EMAIL_15_TEXT,
  questionPool: E13_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-16",
  readingText: E13_1_CE_EMAIL_16_TEXT,
  questionPool: E13_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-17",
  readingText: E13_1_CE_EMAIL_17_TEXT,
  questionPool: E13_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-18",
  readingText: E13_1_CE_EMAIL_18_TEXT,
  questionPool: E13_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-19",
  readingText: E13_1_CE_EMAIL_19_TEXT,
  questionPool: E13_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-20",
  readingText: E13_1_CE_EMAIL_20_TEXT,
  questionPool: E13_1_CE_EMAIL_20_POOL
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

const E13_2_CE_EMAIL_TEXT = `De : Mme Perrin, Hôtel Bellevue
Objet : Votre demande de stage

Bonjour,

Nous avons bien reçu votre candidature et nous vous remercions de votre intérêt.
Nous vous proposons un stage à la réception de l'hôtel, du 1er juin au 31 juillet, donc pendant deux mois.
Vous allez travailler du mardi au samedi, de 9 h à 17 h, avec une pause d'une heure à midi.
Le stage n'est pas payé, mais le repas de midi est offert au restaurant de l'hôtel.
Pour confirmer, envoyez-nous votre CV et une copie de votre permis de séjour avant le 15 mai.
Votre responsable est M. Duval, le chef de la réception.
Pour toute question, appelez-nous au 021 555 32 10.

Meilleures salutations,
Mme Perrin
Responsable des ressources humaines`;

const E13_2_CE_EMAIL_POOL = buildExpressPool("e13-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi Mme Perrin écrit-elle cet e-mail ?",
    text: [
      "Pour proposer un stage",
      "Pour refuser la candidature",
      "Pour annuler un rendez-vous",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Nous vous proposons un _________ à la réception de l'hôtel.",
    fill: "stage",
    vfQ: "L'hôtel propose un stage à la réception.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand commence le stage ?",
    text: ["Le 1er juin", "Le 31 juillet", "Le 15 mai"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Le stage a lieu du 1er juin au 31 _________.",
    fill: "juillet",
    vfQ: "Le stage commence le 1er juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de temps dure le stage ?",
    text: ["Deux mois", "Un mois", "Six mois"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Du 1er juin au 31 juillet, donc pendant _________ mois.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "Le stage dure deux mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quels jours faut-il travailler ?",
    text: ["Du mardi au samedi", "Du lundi au vendredi", "Le dimanche seulement"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Vous allez travailler du mardi au _________.",
    fill: "samedi",
    vfQ: "On travaille le lundi.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quels sont les horaires de travail ?",
    text: ["De 9 h à 17 h", "De 8 h à 16 h", "De 10 h à 18 h"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Vous allez travailler de 9 h à _________ h.",
    fill: "17",
    fillA: ["dix-sept", "17 h"],
    vfQ: "Le travail finit à 19 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Le stage est-il payé ?",
    text: [
      "Non, mais le repas de midi est offert",
      "Oui, 500 francs par mois",
      "Oui, mais seulement le samedi",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Le stage n'est pas payé, mais le _________ de midi est offert.",
    fill: "repas",
    vfQ: "Le stage est payé.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Quels documents faut-il envoyer ?",
    text: [
      "Le CV et une copie du permis de séjour",
      "Une photo et un diplôme",
      "Une lettre et le passeport",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Envoyez-nous votre CV et une copie de votre permis de _________.",
    fill: "séjour",
    fillA: ["sejour"],
    vfQ: "Il faut envoyer son CV pour confirmer.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Avant quelle date faut-il envoyer les documents ?",
    text: ["Avant le 15 mai", "Avant le 1er juin", "Avant le 31 juillet"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Envoyez les documents avant le _________ mai.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "On peut envoyer les documents jusqu'au 15 juin.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Qui est le responsable du stage ?",
    text: [
      "M. Duval, le chef de la réception",
      "Mme Perrin, des ressources humaines",
      "Le directeur de l'hôtel",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Votre responsable est M. Duval, le chef de la _________.",
    fill: "réception",
    fillA: ["reception"],
    vfQ: "Le responsable du stage est le chef de la réception.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Combien de temps dure la pause de midi ?",
    text: ["Une heure", "Trente minutes", "Deux heures"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Avec une pause d'une _________ à midi.",
    fill: "heure",
    vfQ: "La pause de midi dure trente minutes.",
    vfC: 1,
  }),
]);


const E13_2_CE_EMAIL_2_TEXT = `Info E-mail stage — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_2_POOL = buildExpressPool("e13-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_3_TEXT = `Info E-mail stage — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_3_POOL = buildExpressPool("e13-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_4_TEXT = `Info E-mail stage — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_4_POOL = buildExpressPool("e13-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_5_TEXT = `Info E-mail stage — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_5_POOL = buildExpressPool("e13-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_6_TEXT = `Info E-mail stage — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_6_POOL = buildExpressPool("e13-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_7_TEXT = `Info E-mail stage — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_7_POOL = buildExpressPool("e13-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_8_TEXT = `Info E-mail stage — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_8_POOL = buildExpressPool("e13-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_9_TEXT = `Info E-mail stage — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_9_POOL = buildExpressPool("e13-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_10_TEXT = `Info E-mail stage — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_10_POOL = buildExpressPool("e13-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_11_TEXT = `Info E-mail stage — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_11_POOL = buildExpressPool("e13-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_12_TEXT = `Info E-mail stage — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_12_POOL = buildExpressPool("e13-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_13_TEXT = `Info E-mail stage — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_13_POOL = buildExpressPool("e13-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_14_TEXT = `Info E-mail stage — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_14_POOL = buildExpressPool("e13-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_15_TEXT = `Info E-mail stage — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_15_POOL = buildExpressPool("e13-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_16_TEXT = `Info E-mail stage — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_16_POOL = buildExpressPool("e13-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_17_TEXT = `Info E-mail stage — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_17_POOL = buildExpressPool("e13-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_18_TEXT = `Info E-mail stage — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_18_POOL = buildExpressPool("e13-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_19_TEXT = `Info E-mail stage — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_19_POOL = buildExpressPool("e13-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_20_TEXT = `Info E-mail stage — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail stage.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_2_CE_EMAIL_20_POOL = buildExpressPool("e13-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail stage", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ stage.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail stage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E13_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-2-ce-email",
  readingText: E13_2_CE_EMAIL_TEXT,
  questionPool: E13_2_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-2-ce-email-2",
  readingText: E13_2_CE_EMAIL_2_TEXT,
  questionPool: E13_2_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-3",
  readingText: E13_2_CE_EMAIL_3_TEXT,
  questionPool: E13_2_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-4",
  readingText: E13_2_CE_EMAIL_4_TEXT,
  questionPool: E13_2_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-5",
  readingText: E13_2_CE_EMAIL_5_TEXT,
  questionPool: E13_2_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-6",
  readingText: E13_2_CE_EMAIL_6_TEXT,
  questionPool: E13_2_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-7",
  readingText: E13_2_CE_EMAIL_7_TEXT,
  questionPool: E13_2_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-8",
  readingText: E13_2_CE_EMAIL_8_TEXT,
  questionPool: E13_2_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-9",
  readingText: E13_2_CE_EMAIL_9_TEXT,
  questionPool: E13_2_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-10",
  readingText: E13_2_CE_EMAIL_10_TEXT,
  questionPool: E13_2_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-11",
  readingText: E13_2_CE_EMAIL_11_TEXT,
  questionPool: E13_2_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-12",
  readingText: E13_2_CE_EMAIL_12_TEXT,
  questionPool: E13_2_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-13",
  readingText: E13_2_CE_EMAIL_13_TEXT,
  questionPool: E13_2_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-14",
  readingText: E13_2_CE_EMAIL_14_TEXT,
  questionPool: E13_2_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-15",
  readingText: E13_2_CE_EMAIL_15_TEXT,
  questionPool: E13_2_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-16",
  readingText: E13_2_CE_EMAIL_16_TEXT,
  questionPool: E13_2_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-17",
  readingText: E13_2_CE_EMAIL_17_TEXT,
  questionPool: E13_2_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-18",
  readingText: E13_2_CE_EMAIL_18_TEXT,
  questionPool: E13_2_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-19",
  readingText: E13_2_CE_EMAIL_19_TEXT,
  questionPool: E13_2_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-20",
  readingText: E13_2_CE_EMAIL_20_TEXT,
  questionPool: E13_2_CE_EMAIL_20_POOL
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

const E13_3_CE_EMAIL_TEXT = `De : Service des ressources humaines, Supermarché Riviera
Objet : Offre d'emploi — vendeur / vendeuse

Madame, Monsieur,

Notre supermarché cherche un vendeur ou une vendeuse pour le rayon fruits et légumes.
C'est un poste à 80 %, du lundi au vendredi, à partir du 1er octobre.
Le salaire est de 3 600 francs par mois pour ce taux d'activité.
Nous demandons une première expérience dans la vente et un bon niveau de français.
Pour postuler, envoyez votre CV et une lettre de motivation avant le 20 septembre.
Les entretiens vont avoir lieu pendant la dernière semaine de septembre.
Vous pouvez poser vos questions par e-mail ou au 021 555 60 40.

Avec nos meilleures salutations,
Le service des ressources humaines`;

const E13_3_CE_EMAIL_POOL = buildExpressPool("e13-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel poste le supermarché propose-t-il ?",
    text: ["Vendeur ou vendeuse", "Cuisinier ou cuisinière", "Chauffeur ou chauffeuse"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Notre supermarché cherche un _________ ou une vendeuse.",
    fill: "vendeur",
    vfQ: "Le supermarché cherche un vendeur ou une vendeuse.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Pour quel rayon est le poste ?",
    text: ["Le rayon fruits et légumes", "Le rayon boissons", "Le rayon pain"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Pour le rayon fruits et _________.",
    fill: "légumes",
    fillA: ["legumes"],
    vfQ: "Le poste est pour le rayon boissons.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel est le taux d'activité ?",
    text: ["80 %", "100 %", "50 %"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "C'est un poste à _________ %.",
    fill: "80",
    fillA: ["quatre-vingts", "80%"],
    vfQ: "C'est un poste à plein temps.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand commence le travail ?",
    text: ["Le 1er octobre", "Le 20 septembre", "Le 1er septembre"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Le poste commence à partir du 1er _________.",
    fill: "octobre",
    vfQ: "Le poste commence le 1er octobre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est le salaire ?",
    text: [
      "3 600 francs par mois",
      "6 300 francs par mois",
      "3 600 francs par semaine",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Le salaire est de 3 600 francs par _________.",
    fill: "mois",
    vfQ: "Le salaire est de 3 600 francs par mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qu'est-ce que le supermarché demande ?",
    text: [
      "Une première expérience dans la vente",
      "Un diplôme universitaire",
      "Un permis de conduire",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Nous demandons une première _________ dans la vente.",
    fill: "expérience",
    fillA: ["experience"],
    vfQ: "Il faut avoir un diplôme universitaire.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Quels documents faut-il envoyer pour postuler ?",
    text: [
      "Un CV et une lettre de motivation",
      "Une photo et un certificat",
      "Une copie du passeport",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Envoyez votre CV et une lettre de _________.",
    fill: "motivation",
    vfQ: "Il faut envoyer un CV et une lettre de motivation.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quel est le délai pour postuler ?",
    text: ["Avant le 20 septembre", "Avant le 1er octobre", "Avant le 30 septembre"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Envoyez votre candidature avant le _________ septembre.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "On peut postuler jusqu'au 20 octobre.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Quand vont avoir lieu les entretiens ?",
    text: [
      "Pendant la dernière semaine de septembre",
      "En octobre",
      "Cette semaine",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les entretiens vont avoir lieu pendant la dernière _________ de septembre.",
    fill: "semaine",
    vfQ: "Les entretiens vont avoir lieu en décembre.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quels jours travaille-t-on ?",
    text: ["Du lundi au vendredi", "Du mardi au samedi", "Le week-end seulement"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Un poste à 80 %, du lundi au _________.",
    fill: "vendredi",
    vfQ: "On travaille du lundi au vendredi.",
    vfC: 0,
  }),
]);


const E13_3_CE_EMAIL_2_TEXT = `Info E-mail emploi — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_2_POOL = buildExpressPool("e13-3-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_3_TEXT = `Info E-mail emploi — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_3_POOL = buildExpressPool("e13-3-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_4_TEXT = `Info E-mail emploi — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_4_POOL = buildExpressPool("e13-3-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_5_TEXT = `Info E-mail emploi — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_5_POOL = buildExpressPool("e13-3-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_6_TEXT = `Info E-mail emploi — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_6_POOL = buildExpressPool("e13-3-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_7_TEXT = `Info E-mail emploi — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_7_POOL = buildExpressPool("e13-3-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_8_TEXT = `Info E-mail emploi — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_8_POOL = buildExpressPool("e13-3-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_9_TEXT = `Info E-mail emploi — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_9_POOL = buildExpressPool("e13-3-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_10_TEXT = `Info E-mail emploi — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_10_POOL = buildExpressPool("e13-3-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_11_TEXT = `Info E-mail emploi — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_11_POOL = buildExpressPool("e13-3-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_12_TEXT = `Info E-mail emploi — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_12_POOL = buildExpressPool("e13-3-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_13_TEXT = `Info E-mail emploi — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_13_POOL = buildExpressPool("e13-3-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_14_TEXT = `Info E-mail emploi — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_14_POOL = buildExpressPool("e13-3-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_15_TEXT = `Info E-mail emploi — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_15_POOL = buildExpressPool("e13-3-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_16_TEXT = `Info E-mail emploi — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_16_POOL = buildExpressPool("e13-3-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_17_TEXT = `Info E-mail emploi — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_17_POOL = buildExpressPool("e13-3-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_18_TEXT = `Info E-mail emploi — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_18_POOL = buildExpressPool("e13-3-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_19_TEXT = `Info E-mail emploi — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_19_POOL = buildExpressPool("e13-3-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_20_TEXT = `Info E-mail emploi — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail emploi.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_3_CE_EMAIL_20_POOL = buildExpressPool("e13-3-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail emploi", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ emploi.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E13_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-3-ce-email",
  readingText: E13_3_CE_EMAIL_TEXT,
  questionPool: E13_3_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-3-ce-email-2",
  readingText: E13_3_CE_EMAIL_2_TEXT,
  questionPool: E13_3_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-3",
  readingText: E13_3_CE_EMAIL_3_TEXT,
  questionPool: E13_3_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-4",
  readingText: E13_3_CE_EMAIL_4_TEXT,
  questionPool: E13_3_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-5",
  readingText: E13_3_CE_EMAIL_5_TEXT,
  questionPool: E13_3_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-6",
  readingText: E13_3_CE_EMAIL_6_TEXT,
  questionPool: E13_3_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-7",
  readingText: E13_3_CE_EMAIL_7_TEXT,
  questionPool: E13_3_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-8",
  readingText: E13_3_CE_EMAIL_8_TEXT,
  questionPool: E13_3_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-9",
  readingText: E13_3_CE_EMAIL_9_TEXT,
  questionPool: E13_3_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-10",
  readingText: E13_3_CE_EMAIL_10_TEXT,
  questionPool: E13_3_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-11",
  readingText: E13_3_CE_EMAIL_11_TEXT,
  questionPool: E13_3_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-12",
  readingText: E13_3_CE_EMAIL_12_TEXT,
  questionPool: E13_3_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-13",
  readingText: E13_3_CE_EMAIL_13_TEXT,
  questionPool: E13_3_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-14",
  readingText: E13_3_CE_EMAIL_14_TEXT,
  questionPool: E13_3_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-15",
  readingText: E13_3_CE_EMAIL_15_TEXT,
  questionPool: E13_3_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-16",
  readingText: E13_3_CE_EMAIL_16_TEXT,
  questionPool: E13_3_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-17",
  readingText: E13_3_CE_EMAIL_17_TEXT,
  questionPool: E13_3_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-18",
  readingText: E13_3_CE_EMAIL_18_TEXT,
  questionPool: E13_3_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-19",
  readingText: E13_3_CE_EMAIL_19_TEXT,
  questionPool: E13_3_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-20",
  readingText: E13_3_CE_EMAIL_20_TEXT,
  questionPool: E13_3_CE_EMAIL_20_POOL
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

const E13_4_CE_EMAIL_TEXT = `De : Mme Nguyen, Boulangerie du Pont
Objet : Convocation à un entretien

Bonjour,

Nous avons bien reçu votre candidature pour le poste de vendeuse et nous vous remercions.
Nous vous invitons à un entretien le jeudi 12 octobre à 14 h 30.
L'entretien va durer environ trente minutes ; il a lieu à la boulangerie, rue du Pont 8, au premier étage.
Vous allez d'abord rencontrer la responsable du magasin, puis visiter le laboratoire.
Merci d'apporter votre permis de séjour et vos certificats de travail.
Si vous ne pouvez pas venir, prévenez-nous au moins deux jours avant au 021 555 18 25.
Nous allons vous donner notre réponse une semaine après l'entretien.

Meilleures salutations,
Mme Nguyen`;

const E13_4_CE_EMAIL_POOL = buildExpressPool("e13-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi Mme Nguyen écrit-elle cet e-mail ?",
    text: [
      "Pour inviter à un entretien",
      "Pour refuser la candidature",
      "Pour proposer un contrat",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Nous vous invitons à un _________ le jeudi 12 octobre.",
    fill: "entretien",
    vfQ: "La boulangerie invite la candidate à un entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel jour a lieu l'entretien ?",
    text: ["Le jeudi 12 octobre", "Le mardi 12 octobre", "Le jeudi 21 octobre"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "L'entretien a lieu le jeudi 12 _________.",
    fill: "octobre",
    vfQ: "L'entretien a lieu le 12 octobre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure est l'entretien ?",
    text: ["À 14 h 30", "À 13 h 30", "À 15 h"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Un entretien le jeudi 12 octobre à 14 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "L'entretien est à 16 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Où a lieu l'entretien ?",
    text: [
      "À la boulangerie, au premier étage",
      "Au café d'en face",
      "À la mairie",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Il a lieu à la boulangerie, au _________ étage.",
    fill: "premier",
    fillA: ["1er", "1"],
    vfQ: "L'entretien a lieu au deuxième étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien de temps va durer l'entretien ?",
    text: ["Environ trente minutes", "Environ une heure", "Environ dix minutes"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "L'entretien va durer environ trente _________.",
    fill: "minutes",
    vfQ: "L'entretien va durer environ trente minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qu'est-ce qu'il faut apporter ?",
    text: [
      "Le permis de séjour et les certificats de travail",
      "Une photo et un stylo",
      "Le passeport et un diplôme",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Apportez votre permis de _________ et vos certificats de travail.",
    fill: "séjour",
    fillA: ["sejour"],
    vfQ: "Il faut apporter ses certificats de travail.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que se passe-t-il d'abord pendant l'entretien ?",
    text: [
      "On rencontre la responsable du magasin",
      "On visite le laboratoire",
      "On signe le contrat",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Vous allez d'abord rencontrer la _________ du magasin.",
    fill: "responsable",
    vfQ: "On visite d'abord le laboratoire.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Que faire si on ne peut pas venir ?",
    text: [
      "Prévenir au moins deux jours avant",
      "Ne rien faire",
      "Envoyer une lettre",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Prévenez-nous au moins deux _________ avant.",
    fill: "jours",
    vfQ: "On peut annuler une heure avant l'entretien.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Quand la boulangerie va-t-elle donner sa réponse ?",
    text: [
      "Une semaine après l'entretien",
      "Le jour de l'entretien",
      "Un mois après l'entretien",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Nous allons vous donner notre réponse une _________ après l'entretien.",
    fill: "semaine",
    vfQ: "La réponse arrive une semaine après l'entretien.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Pour quel poste est l'entretien ?",
    text: ["Vendeuse", "Boulangère", "Caissière"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Votre candidature pour le poste de _________.",
    fill: "vendeuse",
    vfQ: "L'entretien est pour un poste de boulangère.",
    vfC: 1,
  }),
]);


const E13_4_CE_EMAIL_2_TEXT = `Info E-mail entretien — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_2_POOL = buildExpressPool("e13-4-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_3_TEXT = `Info E-mail entretien — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_3_POOL = buildExpressPool("e13-4-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_4_TEXT = `Info E-mail entretien — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_4_POOL = buildExpressPool("e13-4-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_5_TEXT = `Info E-mail entretien — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_5_POOL = buildExpressPool("e13-4-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_6_TEXT = `Info E-mail entretien — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_6_POOL = buildExpressPool("e13-4-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_7_TEXT = `Info E-mail entretien — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_7_POOL = buildExpressPool("e13-4-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_8_TEXT = `Info E-mail entretien — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_8_POOL = buildExpressPool("e13-4-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_9_TEXT = `Info E-mail entretien — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_9_POOL = buildExpressPool("e13-4-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_10_TEXT = `Info E-mail entretien — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_10_POOL = buildExpressPool("e13-4-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_11_TEXT = `Info E-mail entretien — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_11_POOL = buildExpressPool("e13-4-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_12_TEXT = `Info E-mail entretien — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_12_POOL = buildExpressPool("e13-4-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_13_TEXT = `Info E-mail entretien — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_13_POOL = buildExpressPool("e13-4-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_14_TEXT = `Info E-mail entretien — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_14_POOL = buildExpressPool("e13-4-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_15_TEXT = `Info E-mail entretien — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_15_POOL = buildExpressPool("e13-4-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_16_TEXT = `Info E-mail entretien — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_16_POOL = buildExpressPool("e13-4-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_17_TEXT = `Info E-mail entretien — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_17_POOL = buildExpressPool("e13-4-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_18_TEXT = `Info E-mail entretien — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_18_POOL = buildExpressPool("e13-4-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_19_TEXT = `Info E-mail entretien — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_19_POOL = buildExpressPool("e13-4-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_20_TEXT = `Info E-mail entretien — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entretien.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_4_CE_EMAIL_20_POOL = buildExpressPool("e13-4-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entretien", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entretien.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entretien.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E13_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-4-ce-email",
  readingText: E13_4_CE_EMAIL_TEXT,
  questionPool: E13_4_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-4-ce-email-2",
  readingText: E13_4_CE_EMAIL_2_TEXT,
  questionPool: E13_4_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-3",
  readingText: E13_4_CE_EMAIL_3_TEXT,
  questionPool: E13_4_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-4",
  readingText: E13_4_CE_EMAIL_4_TEXT,
  questionPool: E13_4_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-5",
  readingText: E13_4_CE_EMAIL_5_TEXT,
  questionPool: E13_4_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-6",
  readingText: E13_4_CE_EMAIL_6_TEXT,
  questionPool: E13_4_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-7",
  readingText: E13_4_CE_EMAIL_7_TEXT,
  questionPool: E13_4_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-8",
  readingText: E13_4_CE_EMAIL_8_TEXT,
  questionPool: E13_4_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-9",
  readingText: E13_4_CE_EMAIL_9_TEXT,
  questionPool: E13_4_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-10",
  readingText: E13_4_CE_EMAIL_10_TEXT,
  questionPool: E13_4_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-11",
  readingText: E13_4_CE_EMAIL_11_TEXT,
  questionPool: E13_4_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-12",
  readingText: E13_4_CE_EMAIL_12_TEXT,
  questionPool: E13_4_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-13",
  readingText: E13_4_CE_EMAIL_13_TEXT,
  questionPool: E13_4_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-14",
  readingText: E13_4_CE_EMAIL_14_TEXT,
  questionPool: E13_4_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-15",
  readingText: E13_4_CE_EMAIL_15_TEXT,
  questionPool: E13_4_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-16",
  readingText: E13_4_CE_EMAIL_16_TEXT,
  questionPool: E13_4_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-17",
  readingText: E13_4_CE_EMAIL_17_TEXT,
  questionPool: E13_4_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-18",
  readingText: E13_4_CE_EMAIL_18_TEXT,
  questionPool: E13_4_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-19",
  readingText: E13_4_CE_EMAIL_19_TEXT,
  questionPool: E13_4_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-20",
  readingText: E13_4_CE_EMAIL_20_TEXT,
  questionPool: E13_4_CE_EMAIL_20_POOL
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

const E13_5_CE_EMAIL_TEXT = `De : Mme Rochat, Ressources humaines, Entreprise Alpina
Objet : Votre premier jour chez Alpina

Bonjour,

Nous sommes heureux de vous accueillir dans notre équipe à partir du lundi 3 novembre.
Le premier jour, présentez-vous à la réception à 8 h 15 : votre tuteur, M. Girard, va venir vous chercher.
Vous allez recevoir votre badge à la réception ; il ouvre les portes et paie les repas à la cafétéria.
Le matin, vous allez visiter l'entreprise et rencontrer vos huit collègues du service.
L'après-midi, vous allez suivre une formation interne sur la sécurité, de 13 h 30 à 16 h.
Les horaires de travail sont de 8 h 30 à 17 h 30, avec une pause d'une heure à midi.
Pour finir la journée, l'équipe vous invite à un repas de bienvenue au restaurant Le Chalet, à 18 h.

À lundi,
Mme Rochat`;

const E13_5_CE_EMAIL_POOL = buildExpressPool("e13-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand commence le nouveau travail ?",
    text: ["Le lundi 3 novembre", "Le mardi 4 novembre", "Le lundi 13 novembre"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Nous vous accueillons à partir du lundi 3 _________.",
    fill: "novembre",
    vfQ: "Le premier jour de travail est le lundi 3 novembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Où faut-il se présenter le premier jour ?",
    text: ["À la réception", "À la cafétéria", "Au parking"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Présentez-vous à la _________ à 8 h 15.",
    fill: "réception",
    fillA: ["reception"],
    vfQ: "Il faut se présenter à la cafétéria.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure faut-il arriver le premier jour ?",
    text: ["À 8 h 15", "À 8 h 30", "À 9 h"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Présentez-vous à la réception à 8 h _________.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "Il faut arriver à 8 h 15 le premier jour.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Qui va venir chercher le nouvel employé ?",
    text: ["Son tuteur, M. Girard", "La directrice", "Un client"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Votre _________, M. Girard, va venir vous chercher.",
    fill: "tuteur",
    vfQ: "Le tuteur s'appelle M. Girard.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "À quoi sert le badge ?",
    text: [
      "À ouvrir les portes et payer les repas",
      "À prendre le bus",
      "À téléphoner",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Le badge ouvre les portes et paie les repas à la _________.",
    fill: "cafétéria",
    fillA: ["cafeteria"],
    vfQ: "Le badge sert seulement à ouvrir les portes.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien de collègues travaillent dans le service ?",
    text: ["Huit", "Trois", "Vingt"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Vous allez rencontrer vos _________ collègues du service.",
    fill: "huit",
    fillA: ["8"],
    vfQ: "Il y a huit collègues dans le service.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Sur quoi porte la formation interne ?",
    text: ["Sur la sécurité", "Sur l'informatique", "Sur les langues"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Une formation interne sur la _________.",
    fill: "sécurité",
    fillA: ["securite"],
    vfQ: "La formation interne porte sur l'informatique.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "À quelle heure commence la formation de l'après-midi ?",
    text: ["À 13 h 30", "À 14 h", "À 15 h"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Une formation sur la sécurité, de 13 h 30 à _________ h.",
    fill: "16",
    fillA: ["seize", "16 h"],
    vfQ: "La formation finit à 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Quels sont les horaires de travail ?",
    text: ["De 8 h 30 à 17 h 30", "De 9 h à 18 h", "De 7 h à 16 h"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les horaires de travail sont de 8 h 30 à 17 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "On finit le travail à 19 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Où a lieu le repas de bienvenue ?",
    text: [
      "Au restaurant Le Chalet",
      "À la cafétéria",
      "Dans la salle de réunion",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "L'équipe vous invite à un repas de _________ au restaurant Le Chalet.",
    fill: "bienvenue",
    vfQ: "Le repas de bienvenue est à midi.",
    vfC: 1,
  }),
]);


const E13_5_CE_EMAIL_2_TEXT = `Info E-mail entreprise — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_2_POOL = buildExpressPool("e13-5-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_3_TEXT = `Info E-mail entreprise — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_3_POOL = buildExpressPool("e13-5-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_4_TEXT = `Info E-mail entreprise — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_4_POOL = buildExpressPool("e13-5-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_5_TEXT = `Info E-mail entreprise — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_5_POOL = buildExpressPool("e13-5-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_6_TEXT = `Info E-mail entreprise — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_6_POOL = buildExpressPool("e13-5-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_7_TEXT = `Info E-mail entreprise — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_7_POOL = buildExpressPool("e13-5-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_8_TEXT = `Info E-mail entreprise — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_8_POOL = buildExpressPool("e13-5-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_9_TEXT = `Info E-mail entreprise — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_9_POOL = buildExpressPool("e13-5-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_10_TEXT = `Info E-mail entreprise — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_10_POOL = buildExpressPool("e13-5-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_11_TEXT = `Info E-mail entreprise — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_11_POOL = buildExpressPool("e13-5-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_12_TEXT = `Info E-mail entreprise — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_12_POOL = buildExpressPool("e13-5-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_13_TEXT = `Info E-mail entreprise — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_13_POOL = buildExpressPool("e13-5-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_14_TEXT = `Info E-mail entreprise — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_14_POOL = buildExpressPool("e13-5-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_15_TEXT = `Info E-mail entreprise — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_15_POOL = buildExpressPool("e13-5-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_16_TEXT = `Info E-mail entreprise — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_16_POOL = buildExpressPool("e13-5-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_17_TEXT = `Info E-mail entreprise — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_17_POOL = buildExpressPool("e13-5-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_18_TEXT = `Info E-mail entreprise — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_18_POOL = buildExpressPool("e13-5-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_19_TEXT = `Info E-mail entreprise — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_19_POOL = buildExpressPool("e13-5-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_20_TEXT = `Info E-mail entreprise — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail entreprise.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E13_5_CE_EMAIL_20_POOL = buildExpressPool("e13-5-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail entreprise", "Le sport", "La cuisine"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Les informations concernent _________ entreprise.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail entreprise.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
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
    img: ["professeur", "vendeur", "journaliste"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E13_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-5-ce-email",
  readingText: E13_5_CE_EMAIL_TEXT,
  questionPool: E13_5_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-5-ce-email-2",
  readingText: E13_5_CE_EMAIL_2_TEXT,
  questionPool: E13_5_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-3",
  readingText: E13_5_CE_EMAIL_3_TEXT,
  questionPool: E13_5_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-4",
  readingText: E13_5_CE_EMAIL_4_TEXT,
  questionPool: E13_5_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-5",
  readingText: E13_5_CE_EMAIL_5_TEXT,
  questionPool: E13_5_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-6",
  readingText: E13_5_CE_EMAIL_6_TEXT,
  questionPool: E13_5_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-7",
  readingText: E13_5_CE_EMAIL_7_TEXT,
  questionPool: E13_5_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-8",
  readingText: E13_5_CE_EMAIL_8_TEXT,
  questionPool: E13_5_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-9",
  readingText: E13_5_CE_EMAIL_9_TEXT,
  questionPool: E13_5_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-10",
  readingText: E13_5_CE_EMAIL_10_TEXT,
  questionPool: E13_5_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-11",
  readingText: E13_5_CE_EMAIL_11_TEXT,
  questionPool: E13_5_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-12",
  readingText: E13_5_CE_EMAIL_12_TEXT,
  questionPool: E13_5_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-13",
  readingText: E13_5_CE_EMAIL_13_TEXT,
  questionPool: E13_5_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-14",
  readingText: E13_5_CE_EMAIL_14_TEXT,
  questionPool: E13_5_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-15",
  readingText: E13_5_CE_EMAIL_15_TEXT,
  questionPool: E13_5_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-16",
  readingText: E13_5_CE_EMAIL_16_TEXT,
  questionPool: E13_5_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-17",
  readingText: E13_5_CE_EMAIL_17_TEXT,
  questionPool: E13_5_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-18",
  readingText: E13_5_CE_EMAIL_18_TEXT,
  questionPool: E13_5_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-19",
  readingText: E13_5_CE_EMAIL_19_TEXT,
  questionPool: E13_5_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-20",
  readingText: E13_5_CE_EMAIL_20_TEXT,
  questionPool: E13_5_CE_EMAIL_20_POOL
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
