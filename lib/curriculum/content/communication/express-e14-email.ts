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

const E14_1_CE_EMAIL_TEXT = `De : Karim
Objet : Grande nouvelle : j'ai déménagé !

Bonjour,

J'ai une grande nouvelle : j'ai déménagé le mois dernier !
J'habite maintenant à Lausanne, dans un appartement de trois pièces avec un petit balcon.
Le loyer est de 1 400 francs par mois, charges comprises.
J'ai aussi changé de travail : je suis maintenant vendeur dans un magasin de sport, au centre-ville.
Je travaille du mardi au samedi et je commence à 9 h.
Pour fêter tout ça, j'organise une crémaillère le samedi 7 juin à 18 h.
Tu peux venir en bus : la ligne 12 s'arrête juste devant l'immeuble.
Apporte quelque chose à boire, moi je prépare des spécialités marocaines.
Dis-moi avant le 1er juin si tu viens, et si tu es végétarien.

À très bientôt,
Karim`;

const E14_1_CE_EMAIL_POOL = buildExpressPool("e14-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quelle est la grande nouvelle de Karim ?",
    text: ["Il a déménagé", "Il s'est marié", "Il a acheté une voiture"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'ai une grande nouvelle : j'ai _________ le mois dernier !",
    fill: "déménagé",
    fillA: ["demenage", "déménage"],
    vfQ: "Karim a déménagé le mois dernier.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Où habite Karim maintenant ?",
    text: ["À Lausanne", "À Genève", "À Berne"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'habite maintenant à Lausanne, dans un appartement de trois _________.",
    fill: "pièces",
    fillA: ["pieces"],
    vfQ: "Karim habite maintenant à Genève.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien coûte le loyer de l'appartement ?",
    text: [
      "1 400 francs par mois, charges comprises",
      "1 400 francs par mois, sans les charges",
      "1 000 francs par mois",
    ],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Le loyer est de 1 400 francs par mois, _________ comprises.",
    fill: "charges",
    vfQ: "Le loyer est de 1 400 francs par mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel est le nouveau travail de Karim ?",
    text: [
      "Vendeur dans un magasin de sport",
      "Cuisinier dans un restaurant",
      "Employé dans une banque",
    ],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je suis maintenant _________ dans un magasin de sport.",
    fill: "vendeur",
    vfQ: "Karim travaille maintenant dans un restaurant.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quels jours Karim travaille-t-il ?",
    text: ["Du mardi au samedi", "Du lundi au vendredi", "Seulement le week-end"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille du mardi au _________.",
    fill: "samedi",
    vfQ: "Karim travaille le lundi.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure Karim commence-t-il le travail ?",
    text: ["À 9 h", "À 8 h", "À 10 h"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Je travaille du mardi au samedi et je commence à _________ h.",
    fill: "9",
    fillA: ["neuf"],
    vfQ: "Karim commence le travail à 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quand a lieu la crémaillère ?",
    text: [
      "Le samedi 7 juin à 18 h",
      "Le dimanche 8 juin à 18 h",
      "Le samedi 7 juin à 20 h",
    ],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "J'organise une crémaillère le samedi 7 juin à _________ h.",
    fill: "18",
    fillA: ["dix-huit"],
    vfQ: "La crémaillère a lieu le samedi 7 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Comment peut-on venir chez Karim ?",
    text: [
      "En bus, avec la ligne 12",
      "En tram, avec la ligne 2",
      "Seulement en voiture",
    ],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "La ligne _________ s'arrête juste devant l'immeuble.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "La ligne 12 s'arrête devant l'immeuble de Karim.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qu'est-ce qu'il faut apporter à la fête ?",
    text: ["Quelque chose à boire", "Un dessert", "Rien du tout"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Apporte quelque chose à _________.",
    fill: "boire",
    vfQ: "Il faut apporter un dessert.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il répondre à Karim ?",
    text: ["Avant le 1er juin", "Avant le 7 juin", "Le jour de la fête"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Dis-moi avant le 1er _________ si tu viens.",
    fill: "juin",
    vfQ: "Il faut répondre à Karim avant le 1er juin.",
    vfC: 0,
  }),
]);


const E14_1_CE_EMAIL_2_TEXT = `Info E-mail bilan a2 — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_2_POOL = buildExpressPool("e14-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_3_TEXT = `Info E-mail bilan a2 — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_3_POOL = buildExpressPool("e14-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_4_TEXT = `Info E-mail bilan a2 — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_4_POOL = buildExpressPool("e14-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_5_TEXT = `Info E-mail bilan a2 — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_5_POOL = buildExpressPool("e14-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_6_TEXT = `Info E-mail bilan a2 — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_6_POOL = buildExpressPool("e14-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_7_TEXT = `Info E-mail bilan a2 — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_7_POOL = buildExpressPool("e14-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_8_TEXT = `Info E-mail bilan a2 — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_8_POOL = buildExpressPool("e14-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_9_TEXT = `Info E-mail bilan a2 — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_9_POOL = buildExpressPool("e14-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_10_TEXT = `Info E-mail bilan a2 — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_10_POOL = buildExpressPool("e14-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_11_TEXT = `Info E-mail bilan a2 — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_11_POOL = buildExpressPool("e14-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_12_TEXT = `Info E-mail bilan a2 — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_12_POOL = buildExpressPool("e14-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_13_TEXT = `Info E-mail bilan a2 — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_13_POOL = buildExpressPool("e14-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_14_TEXT = `Info E-mail bilan a2 — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_14_POOL = buildExpressPool("e14-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_15_TEXT = `Info E-mail bilan a2 — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_15_POOL = buildExpressPool("e14-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_16_TEXT = `Info E-mail bilan a2 — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_16_POOL = buildExpressPool("e14-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_17_TEXT = `Info E-mail bilan a2 — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_17_POOL = buildExpressPool("e14-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_18_TEXT = `Info E-mail bilan a2 — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_18_POOL = buildExpressPool("e14-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_19_TEXT = `Info E-mail bilan a2 — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_19_POOL = buildExpressPool("e14-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E14_1_CE_EMAIL_20_TEXT = `Info E-mail bilan a2 — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail bilan A2.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E14_1_CE_EMAIL_20_POOL = buildExpressPool("e14-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail bilan a2", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Les informations concernent _________ bilan A2.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail bilan A2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
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
    img: ["cuisinier", "médecin", "professeur"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E14_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e14-1-ce-email",
  readingText: E14_1_CE_EMAIL_TEXT,
  questionPool: E14_1_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e14-1-ce-email-2",
  readingText: E14_1_CE_EMAIL_2_TEXT,
  questionPool: E14_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-3",
  readingText: E14_1_CE_EMAIL_3_TEXT,
  questionPool: E14_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-4",
  readingText: E14_1_CE_EMAIL_4_TEXT,
  questionPool: E14_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-5",
  readingText: E14_1_CE_EMAIL_5_TEXT,
  questionPool: E14_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-6",
  readingText: E14_1_CE_EMAIL_6_TEXT,
  questionPool: E14_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-7",
  readingText: E14_1_CE_EMAIL_7_TEXT,
  questionPool: E14_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-8",
  readingText: E14_1_CE_EMAIL_8_TEXT,
  questionPool: E14_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-9",
  readingText: E14_1_CE_EMAIL_9_TEXT,
  questionPool: E14_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-10",
  readingText: E14_1_CE_EMAIL_10_TEXT,
  questionPool: E14_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-11",
  readingText: E14_1_CE_EMAIL_11_TEXT,
  questionPool: E14_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-12",
  readingText: E14_1_CE_EMAIL_12_TEXT,
  questionPool: E14_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-13",
  readingText: E14_1_CE_EMAIL_13_TEXT,
  questionPool: E14_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-14",
  readingText: E14_1_CE_EMAIL_14_TEXT,
  questionPool: E14_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-15",
  readingText: E14_1_CE_EMAIL_15_TEXT,
  questionPool: E14_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-16",
  readingText: E14_1_CE_EMAIL_16_TEXT,
  questionPool: E14_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-17",
  readingText: E14_1_CE_EMAIL_17_TEXT,
  questionPool: E14_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-18",
  readingText: E14_1_CE_EMAIL_18_TEXT,
  questionPool: E14_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-19",
  readingText: E14_1_CE_EMAIL_19_TEXT,
  questionPool: E14_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e14-1-ce-email-20",
  readingText: E14_1_CE_EMAIL_20_TEXT,
  questionPool: E14_1_CE_EMAIL_20_POOL
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
