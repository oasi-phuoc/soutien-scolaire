import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E11 — Cuisine, activités, goûts, vacances (niveau A2).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E11.1 — Apprécier la cuisine
   ════════════════════════════════════════════════════════════════════════════ */

const E11_1_CE_EMAIL_TEXT = `De : Julie
Objet : Repas entre amis samedi soir

Bonjour,

Samedi prochain, le 18 octobre, j'organise un repas chez moi pour fêter mon nouvel appartement.
Nous serons huit personnes. Le repas commence à 19 h 30, mais tu peux arriver un peu avant pour m'aider.
Je vais préparer des lasagnes : c'est la recette italienne de ma grand-mère.
J'ai déjà acheté tous les ingrédients au marché pour trente francs.
En entrée, il y aura une soupe de courge, et Sacha apportera un gâteau au chocolat pour le dessert.
Est-ce que tu peux apporter une boisson, par exemple un jus de fruits ?
Dis-moi aussi si tu ne manges pas de viande : je peux préparer un plat végétarien.
Réponds-moi avant jeudi, s'il te plaît.

À samedi,
Julie`;

const E11_1_CE_EMAIL_POOL = buildExpressPool("e11-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Pourquoi Julie organise-t-elle un repas ?",
    text: [
      "Pour fêter son nouvel appartement",
      "Pour fêter son anniversaire",
      "Pour fêter son nouveau travail",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "J'organise un repas chez moi pour fêter mon nouvel _________.",
    fill: "appartement",
    vfQ: "Julie organise un repas pour fêter son nouvel appartement.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel jour a lieu le repas ?",
    text: ["Le samedi 18 octobre", "Le vendredi 17 octobre", "Le dimanche 19 octobre"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le repas a lieu samedi prochain, le 18 _________.",
    fill: "octobre",
    vfQ: "Le repas a lieu un dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de personnes seront au repas ?",
    text: ["Huit personnes", "Six personnes", "Dix personnes"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Nous serons _________ personnes.",
    fill: "huit",
    fillA: ["8"],
    vfQ: "Ils seront huit personnes au repas.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quelle heure commence le repas ?",
    text: ["À 19 h 30", "À 18 h 30", "À 20 h"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le repas commence à 19 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le repas commence à 20 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel plat Julie va-t-elle préparer ?",
    text: ["Des lasagnes", "Une pizza", "Un poulet rôti"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Je vais préparer des _________.",
    fill: "lasagnes",
    vfQ: "Julie va préparer des lasagnes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "De qui vient la recette des lasagnes ?",
    text: ["De sa grand-mère", "D'un livre de cuisine", "D'un restaurant italien"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "C'est la recette italienne de ma _________.",
    fill: "grand-mère",
    fillA: ["grand-mere", "grand mère", "grand mere"],
    vfQ: "La recette des lasagnes vient d'un livre de cuisine.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Combien ont coûté les ingrédients ?",
    text: ["Trente francs", "Treize francs", "Quarante francs"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "J'ai acheté tous les ingrédients au marché pour _________ francs.",
    fill: "trente",
    fillA: ["30"],
    vfQ: "Les ingrédients ont coûté trente francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Qu'est-ce que Sacha apportera ?",
    text: ["Un gâteau au chocolat", "Une boisson", "Une soupe de courge"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Sacha apportera un gâteau au _________ pour le dessert.",
    fill: "chocolat",
    vfQ: "Sacha apportera le dessert.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qu'est-ce que Julie demande d'apporter ?",
    text: ["Une boisson", "Un dessert", "Une entrée"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Est-ce que tu peux apporter une _________, par exemple un jus de fruits ?",
    fill: "boisson",
    vfQ: "Julie demande d'apporter une entrée.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il répondre à Julie ?",
    text: ["Avant jeudi", "Avant samedi", "Avant lundi"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Réponds-moi avant _________, s'il te plaît.",
    fill: "jeudi",
    vfQ: "Il faut répondre à Julie avant jeudi.",
    vfC: 0,
  }),
]);


const E11_1_CE_EMAIL_2_TEXT = `Info E-mail cuisine — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_2_POOL = buildExpressPool("e11-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_3_TEXT = `Info E-mail cuisine — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_3_POOL = buildExpressPool("e11-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_4_TEXT = `Info E-mail cuisine — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_4_POOL = buildExpressPool("e11-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_5_TEXT = `Info E-mail cuisine — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_5_POOL = buildExpressPool("e11-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_6_TEXT = `Info E-mail cuisine — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_6_POOL = buildExpressPool("e11-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_7_TEXT = `Info E-mail cuisine — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_7_POOL = buildExpressPool("e11-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_8_TEXT = `Info E-mail cuisine — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_8_POOL = buildExpressPool("e11-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_9_TEXT = `Info E-mail cuisine — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_9_POOL = buildExpressPool("e11-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_10_TEXT = `Info E-mail cuisine — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_10_POOL = buildExpressPool("e11-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_11_TEXT = `Info E-mail cuisine — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_11_POOL = buildExpressPool("e11-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_12_TEXT = `Info E-mail cuisine — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_12_POOL = buildExpressPool("e11-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_13_TEXT = `Info E-mail cuisine — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_13_POOL = buildExpressPool("e11-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_14_TEXT = `Info E-mail cuisine — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_14_POOL = buildExpressPool("e11-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_15_TEXT = `Info E-mail cuisine — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_15_POOL = buildExpressPool("e11-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_16_TEXT = `Info E-mail cuisine — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_16_POOL = buildExpressPool("e11-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_17_TEXT = `Info E-mail cuisine — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_17_POOL = buildExpressPool("e11-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_18_TEXT = `Info E-mail cuisine — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_18_POOL = buildExpressPool("e11-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_19_TEXT = `Info E-mail cuisine — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_19_POOL = buildExpressPool("e11-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_1_CE_EMAIL_20_TEXT = `Info E-mail cuisine — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail cuisine.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_1_CE_EMAIL_20_POOL = buildExpressPool("e11-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail cuisine", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ cuisine.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail cuisine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E11_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-1-ce-email",
  readingText: E11_1_CE_EMAIL_TEXT,
  questionPool: E11_1_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-1-ce-email-2",
  readingText: E11_1_CE_EMAIL_2_TEXT,
  questionPool: E11_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-3",
  readingText: E11_1_CE_EMAIL_3_TEXT,
  questionPool: E11_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-4",
  readingText: E11_1_CE_EMAIL_4_TEXT,
  questionPool: E11_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-5",
  readingText: E11_1_CE_EMAIL_5_TEXT,
  questionPool: E11_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-6",
  readingText: E11_1_CE_EMAIL_6_TEXT,
  questionPool: E11_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-7",
  readingText: E11_1_CE_EMAIL_7_TEXT,
  questionPool: E11_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-8",
  readingText: E11_1_CE_EMAIL_8_TEXT,
  questionPool: E11_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-9",
  readingText: E11_1_CE_EMAIL_9_TEXT,
  questionPool: E11_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-10",
  readingText: E11_1_CE_EMAIL_10_TEXT,
  questionPool: E11_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-11",
  readingText: E11_1_CE_EMAIL_11_TEXT,
  questionPool: E11_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-12",
  readingText: E11_1_CE_EMAIL_12_TEXT,
  questionPool: E11_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-13",
  readingText: E11_1_CE_EMAIL_13_TEXT,
  questionPool: E11_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-14",
  readingText: E11_1_CE_EMAIL_14_TEXT,
  questionPool: E11_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-15",
  readingText: E11_1_CE_EMAIL_15_TEXT,
  questionPool: E11_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-16",
  readingText: E11_1_CE_EMAIL_16_TEXT,
  questionPool: E11_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-17",
  readingText: E11_1_CE_EMAIL_17_TEXT,
  questionPool: E11_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-18",
  readingText: E11_1_CE_EMAIL_18_TEXT,
  questionPool: E11_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-19",
  readingText: E11_1_CE_EMAIL_19_TEXT,
  questionPool: E11_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-20",
  readingText: E11_1_CE_EMAIL_20_TEXT,
  questionPool: E11_1_CE_EMAIL_20_POOL
}),
];

export const E11_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-1-pee-1",
    title: "Accepter une invitation à dîner",
    situation: "Une amie vous invite à un repas chez elle.",
    sourceMessage: {
      from: "Julie",
      subject: "Repas samedi soir",
      body: "Bonjour,\nJ'organise un repas chez moi samedi soir à 19 h 30 pour fêter mon nouvel appartement.\nJe vais préparer des lasagnes. Tu peux venir ?\nJulie",
    },
    instruction: "Répondez à Julie : acceptez l'invitation, dites ce que vous apportez et posez une question sur l'adresse.",
    points: ["Votre accord", "Ce que vous apportez", "Une question sur l'adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-2",
    title: "Refuser une sortie au restaurant",
    situation: "Un ami vous propose d'aller au restaurant vendredi.",
    sourceMessage: {
      from: "Marco",
      subject: "Restaurant vendredi ?",
      body: "Salut !\nJ'ai découvert un nouveau restaurant italien près de la gare.\nÇa te dit d'y aller vendredi soir à 20 h ?\nMarco",
    },
    instruction: "Répondez à Marco : refusez poliment, expliquez pourquoi vous ne pouvez pas venir et proposez une autre date.",
    points: ["Un refus poli", "La raison", "Une autre date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-3",
    title: "Recommander un restaurant",
    situation: "Une amie cherche un restaurant pour l'anniversaire de sa mère.",
    sourceMessage: {
      from: "Aïcha",
      subject: "Un bon restaurant ?",
      body: "Coucou,\nJe cherche un bon restaurant pour l'anniversaire de ma mère, samedi prochain.\nTu connais une bonne adresse pas trop chère ?\nAïcha",
    },
    instruction: "Répondez à Aïcha : recommandez un restaurant, décrivez la cuisine et donnez une information sur les prix ou les horaires.",
    points: ["Le nom du restaurant", "La cuisine servie", "Les prix ou les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-4",
    title: "Remercier après un repas",
    situation: "Vous avez mangé hier soir chez une amie, elle vous écrit.",
    sourceMessage: {
      from: "Sonia",
      subject: "Merci d'être venu(e) !",
      body: "Bonjour,\nMerci d'être venu(e) hier soir, c'était une très bonne soirée !\nJ'espère que le repas t'a plu.\nSonia",
    },
    instruction: "Répondez à Sonia : remerciez-la pour la soirée, dites quel plat vous avez préféré et demandez-lui la recette.",
    points: ["Un remerciement", "Le plat préféré", "Une demande de recette"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-5",
    title: "Réserver une table",
    situation: "Vous avez demandé une réservation, le restaurant vous répond.",
    sourceMessage: {
      from: "Restaurant du Lac",
      subject: "Votre demande de réservation",
      body: "Bonjour,\nNous avons bien reçu votre demande de réservation.\nPouvez-vous nous préciser la date, l'heure et le nombre de personnes ?\nLe Restaurant du Lac",
    },
    instruction: "Répondez au restaurant : donnez la date et l'heure, précisez le nombre de personnes et signalez une allergie ou un régime spécial.",
    points: ["La date et l'heure", "Le nombre de personnes", "Une allergie ou un régime spécial"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-6",
    title: "S'inscrire à un cours de cuisine",
    situation: "Une école de cuisine vous envoie une offre.",
    sourceMessage: {
      from: "École de cuisine La Toque",
      subject: "Cours de cuisine italienne",
      body: "Bonjour,\nNous proposons un cours de cuisine italienne le samedi matin, de 10 h à 12 h.\nLe prix est de quarante-cinq francs par cours.\nÊtes-vous intéressé(e) ?\nL'École La Toque",
    },
    instruction: "Répondez à l'école : inscrivez-vous au cours, dites quel est votre niveau en cuisine et posez une question sur le matériel à apporter.",
    points: ["Votre inscription", "Votre niveau en cuisine", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-7",
    title: "Raconter un repas de fête",
    situation: "Votre cousine veut savoir comment était le repas de mariage.",
    sourceMessage: {
      from: "Elena",
      subject: "Alors, ce mariage ?",
      body: "Coucou,\nTu es allé(e) au mariage de Léo samedi, non ?\nComment était le repas ? Raconte-moi tout !\nElena",
    },
    instruction: "Répondez à Elena : racontez le repas de mariage, décrivez deux plats et dites ce que vous avez préféré.",
    points: ["Le récit du repas", "Deux plats", "Ce que vous avez préféré"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-8",
    title: "Parler de ses goûts culinaires",
    situation: "Un ami organise un dîner et vous pose des questions.",
    sourceMessage: {
      from: "Tom",
      subject: "Qu'est-ce que tu aimes manger ?",
      body: "Salut,\nJ'organise un dîner chez moi vendredi et je prépare le menu.\nQu'est-ce que tu aimes manger ? Tu as des allergies ?\nTom",
    },
    instruction: "Répondez à Tom : dites ce que vous aimez manger, ce que vous n'aimez pas ou ne pouvez pas manger, et remerciez-le pour l'invitation.",
    points: ["Ce que vous aimez", "Ce que vous n'aimez pas ou ne pouvez pas manger", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-9",
    title: "Présenter une spécialité de son pays",
    situation: "Une collègue organise une soirée internationale.",
    sourceMessage: {
      from: "Claire",
      subject: "Soirée internationale",
      body: "Bonjour,\nSamedi, nous organisons une soirée internationale : chaque personne apporte une spécialité de son pays.\nQu'est-ce que tu vas apporter ?\nClaire",
    },
    instruction: "Répondez à Claire : dites quel plat de votre pays vous apportez, décrivez ce plat et demandez combien de personnes viennent à la soirée.",
    points: ["Le plat choisi", "Une description du plat", "Une question sur le nombre de personnes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-10",
    title: "Donner son avis à un restaurant",
    situation: "Après votre visite, le restaurant vous demande votre avis.",
    sourceMessage: {
      from: "Restaurant Chez Paul",
      subject: "Votre avis nous intéresse",
      body: "Bonjour,\nMerci de votre visite de samedi dernier.\nComment avez-vous trouvé le repas et le service ?\nVotre avis nous aide à progresser.\nRestaurant Chez Paul",
    },
    instruction: "Répondez au restaurant : remerciez, dites ce que vous avez aimé et faites une petite suggestion pour améliorer le restaurant.",
    points: ["Un remerciement", "Ce que vous avez aimé", "Une suggestion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-11",
    title: "Répondre — cuisine (11)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-12",
    title: "Répondre — cuisine (12)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-13",
    title: "Répondre — cuisine (13)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-14",
    title: "Répondre — cuisine (14)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-15",
    title: "Répondre — cuisine (15)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-16",
    title: "Répondre — cuisine (16)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-17",
    title: "Répondre — cuisine (17)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-18",
    title: "Répondre — cuisine (18)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-19",
    title: "Répondre — cuisine (19)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-20",
    title: "Répondre — cuisine (20)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.2 — Pratiquer une activité
   ════════════════════════════════════════════════════════════════════════════ */

const E11_2_CE_EMAIL_TEXT = `De : École de musique La Clé de Sol
Objet : Confirmation de votre inscription au cours de guitare

Bonjour,

Nous avons bien reçu votre inscription au cours de guitare pour débutants.
Le cours commence le mercredi 5 février et a lieu chaque mercredi, de 18 h à 19 h, dans la salle 4, au premier étage.
Le professeur s'appelle M. Girard : il enseigne la guitare depuis quinze ans.
Le prix est de quatre-vingts francs par mois. Le premier cours d'essai est gratuit.
Vous n'avez pas besoin d'acheter une guitare : l'école peut vous en prêter une pour les trois premiers mois.
Apportez seulement un cahier de musique et un crayon.
Si vous avez une question, répondez à cet e-mail ou appelez le 021 555 78 90.

Avec nos meilleures salutations,
L'école de musique`;

const E11_2_CE_EMAIL_POOL = buildExpressPool("e11-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "À quel cours la personne s'est-elle inscrite ?",
    text: ["Au cours de guitare", "Au cours de piano", "Au cours de danse"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Nous avons bien reçu votre inscription au cours de _________.",
    fill: "guitare",
    vfQ: "L'inscription est pour un cours de piano.",
    vfC: 1,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand commence le cours ?",
    text: ["Le mercredi 5 février", "Le mardi 4 février", "Le mercredi 12 février"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le cours commence le mercredi 5 _________.",
    fill: "février",
    fillA: ["fevrier"],
    vfQ: "Le cours commence le mercredi 5 février.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure a lieu le cours ?",
    text: ["De 18 h à 19 h", "De 17 h à 18 h", "De 19 h à 20 h"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le cours a lieu chaque mercredi, de 18 h à _________ h.",
    fill: "19",
    fillA: ["dix-neuf", "19 h"],
    vfQ: "Le cours finit à 20 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Où a lieu le cours ?",
    text: [
      "Dans la salle 4, au premier étage",
      "Dans la salle 1, au quatrième étage",
      "Dans la grande salle de concert",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le cours a lieu dans la salle _________, au premier étage.",
    fill: "4",
    fillA: ["quatre"],
    vfQ: "Le cours a lieu au premier étage.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Depuis combien de temps M. Girard enseigne-t-il la guitare ?",
    text: ["Depuis quinze ans", "Depuis cinq ans", "Depuis deux ans"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Il enseigne la guitare depuis _________ ans.",
    fill: "quinze",
    fillA: ["15"],
    vfQ: "M. Girard enseigne la guitare depuis quinze ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien coûte le cours ?",
    text: [
      "Quatre-vingts francs par mois",
      "Quatre-vingts francs par semaine",
      "Dix-huit francs par mois",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le prix est de _________ francs par mois.",
    fill: "quatre-vingts",
    fillA: ["80", "quatre vingts", "quatre-vingt", "quatre vingt"],
    vfQ: "Le cours coûte quatre-vingts francs par mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Combien coûte le premier cours d'essai ?",
    text: ["Il est gratuit", "Quatre-vingts francs", "Vingt francs"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le premier cours d'essai est _________.",
    fill: "gratuit",
    vfQ: "Il faut payer le premier cours d'essai.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Faut-il acheter une guitare ?",
    text: [
      "Non, l'école peut en prêter une",
      "Oui, avant le premier cours",
      "Oui, après un mois",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "L'école peut vous en prêter une pour les trois premiers _________.",
    fill: "mois",
    vfQ: "L'école peut prêter une guitare pendant trois mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qu'est-ce qu'il faut apporter au cours ?",
    text: [
      "Un cahier de musique et un crayon",
      "Une guitare et un pupitre",
      "Rien du tout",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Apportez seulement un cahier de musique et un _________.",
    fill: "crayon",
    vfQ: "Il faut apporter sa propre guitare au premier cours.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Comment peut-on poser une question à l'école ?",
    text: [
      "Répondre à l'e-mail ou téléphoner",
      "Envoyer une lettre",
      "Passer au secrétariat seulement",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Répondez à cet e-mail ou _________ le 021 555 78 90.",
    fill: "appelez",
    fillA: ["téléphonez", "telephonez"],
    vfQ: "On peut appeler l'école pour poser une question.",
    vfC: 0,
  }),
]);


const E11_2_CE_EMAIL_2_TEXT = `Info E-mail activités — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_2_POOL = buildExpressPool("e11-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_3_TEXT = `Info E-mail activités — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_3_POOL = buildExpressPool("e11-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_4_TEXT = `Info E-mail activités — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_4_POOL = buildExpressPool("e11-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_5_TEXT = `Info E-mail activités — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_5_POOL = buildExpressPool("e11-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_6_TEXT = `Info E-mail activités — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_6_POOL = buildExpressPool("e11-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_7_TEXT = `Info E-mail activités — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_7_POOL = buildExpressPool("e11-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_8_TEXT = `Info E-mail activités — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_8_POOL = buildExpressPool("e11-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_9_TEXT = `Info E-mail activités — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_9_POOL = buildExpressPool("e11-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_10_TEXT = `Info E-mail activités — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_10_POOL = buildExpressPool("e11-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_11_TEXT = `Info E-mail activités — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_11_POOL = buildExpressPool("e11-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_12_TEXT = `Info E-mail activités — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_12_POOL = buildExpressPool("e11-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_13_TEXT = `Info E-mail activités — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_13_POOL = buildExpressPool("e11-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_14_TEXT = `Info E-mail activités — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_14_POOL = buildExpressPool("e11-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_15_TEXT = `Info E-mail activités — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_15_POOL = buildExpressPool("e11-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_16_TEXT = `Info E-mail activités — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_16_POOL = buildExpressPool("e11-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_17_TEXT = `Info E-mail activités — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_17_POOL = buildExpressPool("e11-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_18_TEXT = `Info E-mail activités — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_18_POOL = buildExpressPool("e11-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_19_TEXT = `Info E-mail activités — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_19_POOL = buildExpressPool("e11-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_2_CE_EMAIL_20_TEXT = `Info E-mail activités — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail activités.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_2_CE_EMAIL_20_POOL = buildExpressPool("e11-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail activités", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ activités.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail activités.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E11_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-2-ce-email",
  readingText: E11_2_CE_EMAIL_TEXT,
  questionPool: E11_2_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-2-ce-email-2",
  readingText: E11_2_CE_EMAIL_2_TEXT,
  questionPool: E11_2_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-3",
  readingText: E11_2_CE_EMAIL_3_TEXT,
  questionPool: E11_2_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-4",
  readingText: E11_2_CE_EMAIL_4_TEXT,
  questionPool: E11_2_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-5",
  readingText: E11_2_CE_EMAIL_5_TEXT,
  questionPool: E11_2_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-6",
  readingText: E11_2_CE_EMAIL_6_TEXT,
  questionPool: E11_2_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-7",
  readingText: E11_2_CE_EMAIL_7_TEXT,
  questionPool: E11_2_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-8",
  readingText: E11_2_CE_EMAIL_8_TEXT,
  questionPool: E11_2_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-9",
  readingText: E11_2_CE_EMAIL_9_TEXT,
  questionPool: E11_2_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-10",
  readingText: E11_2_CE_EMAIL_10_TEXT,
  questionPool: E11_2_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-11",
  readingText: E11_2_CE_EMAIL_11_TEXT,
  questionPool: E11_2_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-12",
  readingText: E11_2_CE_EMAIL_12_TEXT,
  questionPool: E11_2_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-13",
  readingText: E11_2_CE_EMAIL_13_TEXT,
  questionPool: E11_2_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-14",
  readingText: E11_2_CE_EMAIL_14_TEXT,
  questionPool: E11_2_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-15",
  readingText: E11_2_CE_EMAIL_15_TEXT,
  questionPool: E11_2_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-16",
  readingText: E11_2_CE_EMAIL_16_TEXT,
  questionPool: E11_2_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-17",
  readingText: E11_2_CE_EMAIL_17_TEXT,
  questionPool: E11_2_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-18",
  readingText: E11_2_CE_EMAIL_18_TEXT,
  questionPool: E11_2_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-19",
  readingText: E11_2_CE_EMAIL_19_TEXT,
  questionPool: E11_2_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-20",
  readingText: E11_2_CE_EMAIL_20_TEXT,
  questionPool: E11_2_CE_EMAIL_20_POOL
}),
];

export const E11_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-2-pee-1",
    title: "Accepter un cours d'essai",
    situation: "Une école de danse vous propose un cours d'essai gratuit.",
    sourceMessage: {
      from: "École de danse Tempo",
      subject: "Cours d'essai gratuit",
      body: "Bonjour,\nNous vous proposons un cours d'essai gratuit de salsa, jeudi à 19 h.\nÊtes-vous intéressé(e) ?\nL'École Tempo",
    },
    instruction: "Répondez à l'école : acceptez le cours d'essai, demandez quelle tenue il faut porter et posez une question sur le prix des cours.",
    points: ["Votre accord", "Une question sur la tenue", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-2",
    title: "Proposer un sport à un ami",
    situation: "Un ami veut faire du sport avec vous.",
    sourceMessage: {
      from: "Lucas",
      subject: "Un sport ensemble ?",
      body: "Salut !\nJe veux faire du sport, mais tout seul, c'est ennuyeux.\nTu veux faire une activité avec moi ? Laquelle ?\nLucas",
    },
    instruction: "Répondez à Lucas : proposez une activité sportive, expliquez pourquoi vous l'aimez et proposez un jour pour commencer.",
    points: ["L'activité proposée", "Pourquoi vous l'aimez", "Un jour pour commencer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-3",
    title: "Compléter une inscription",
    situation: "Un atelier de dessin vous demande des informations.",
    sourceMessage: {
      from: "Atelier de dessin Couleurs",
      subject: "Votre inscription",
      body: "Bonjour,\nMerci pour votre demande d'inscription.\nPouvez-vous nous indiquer votre niveau en dessin et vos disponibilités ?\nL'Atelier Couleurs",
    },
    instruction: "Répondez à l'atelier : donnez votre niveau en dessin, indiquez vos disponibilités et posez une question sur le matériel à acheter.",
    points: ["Votre niveau", "Vos disponibilités", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-4",
    title: "Décrire ses loisirs",
    situation: "Une amie vous demande ce que vous faites le week-end.",
    sourceMessage: {
      from: "Emma",
      subject: "Tu fais quoi le week-end ?",
      body: "Coucou,\nJe cherche une nouvelle activité pour le week-end.\nToi, qu'est-ce que tu fais comme loisirs ? C'est bien ?\nEmma",
    },
    instruction: "Répondez à Emma : décrivez vos loisirs, dites depuis quand vous les pratiquez et invitez-la à essayer avec vous.",
    points: ["Vos loisirs", "Depuis quand", "Une invitation à essayer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-5",
    title: "Répondre à un changement d'horaire",
    situation: "Votre club de natation change l'horaire du cours.",
    sourceMessage: {
      from: "Club de natation Les Dauphins",
      subject: "Changement d'horaire",
      body: "Bonjour,\nÀ partir du mois prochain, votre cours de natation du mardi à 18 h est déplacé au jeudi à 19 h.\nCet horaire vous convient-il ?\nLe Club Les Dauphins",
    },
    instruction: "Répondez au club : dites si le nouvel horaire vous convient ou non, expliquez pourquoi et posez une question sur les autres horaires possibles.",
    points: ["Votre réponse sur l'horaire", "La raison", "Une question sur les autres horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-6",
    title: "Renseigner un ami sur un cours",
    situation: "Un ami veut des informations sur votre cours de guitare.",
    sourceMessage: {
      from: "Hugo",
      subject: "Cours de guitare",
      body: "Salut,\nTu prends des cours de guitare, non ? Moi aussi, je veux commencer.\nC'est bien ? Ça coûte combien ? C'est quand ?\nHugo",
    },
    instruction: "Répondez à Hugo : racontez comment se passe votre cours, donnez le prix et les horaires, et recommandez (ou non) votre école.",
    points: ["Comment se passe le cours", "Le prix et les horaires", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-7",
    title: "Refuser une partie de badminton",
    situation: "Une amie vous propose un match samedi matin.",
    sourceMessage: {
      from: "Chloé",
      subject: "Match de badminton samedi",
      body: "Salut !\nÇa te dit un match de badminton samedi matin à 10 h ?\nJ'ai réservé un terrain à la salle de sport.\nChloé",
    },
    instruction: "Répondez à Chloé : refusez poliment, expliquez ce que vous devez faire samedi matin et proposez un autre moment pour jouer.",
    points: ["Un refus poli", "La raison", "Un autre moment"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-8",
    title: "Choisir une activité",
    situation: "Le centre de loisirs présente son nouveau programme.",
    sourceMessage: {
      from: "Centre de loisirs de la Ville",
      subject: "Activités d'automne",
      body: "Bonjour,\nCet automne, nous proposons trois nouvelles activités : yoga, théâtre et photographie.\nQuelle activité vous intéresse ?\nLe Centre de loisirs",
    },
    instruction: "Répondez au centre de loisirs : choisissez une activité, expliquez pourquoi elle vous intéresse et demandez les horaires et le prix.",
    points: ["L'activité choisie", "Pourquoi", "Une question sur les horaires et le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-9",
    title: "Raconter son premier cours",
    situation: "Votre sœur veut savoir comment était votre premier cours de danse.",
    sourceMessage: {
      from: "Mila",
      subject: "Ton premier cours de danse ?",
      body: "Coucou,\nAlors, tu as commencé la danse mardi ?\nComment était le premier cours ? Raconte !\nMila",
    },
    instruction: "Répondez à Mila : racontez votre premier cours de danse, dites ce que vous avez aimé et si vous allez continuer.",
    points: ["Le récit du premier cours", "Ce que vous avez aimé", "Si vous continuez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-10",
    title: "Louer un instrument",
    situation: "L'école de musique vous pose une question sur le matériel.",
    sourceMessage: {
      from: "École de musique La Clé de Sol",
      subject: "Matériel pour le cours",
      body: "Bonjour,\nAvez-vous déjà une guitare pour le cours ?\nSi non, nous pouvons vous en louer une pour vingt francs par mois.\nL'école de musique",
    },
    instruction: "Répondez à l'école : dites si vous avez déjà une guitare, acceptez ou refusez la location et posez une question sur le premier cours.",
    points: ["Si vous avez une guitare", "Votre décision sur la location", "Une question sur le premier cours"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-11",
    title: "Répondre — activités (11)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-12",
    title: "Répondre — activités (12)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-13",
    title: "Répondre — activités (13)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-14",
    title: "Répondre — activités (14)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-15",
    title: "Répondre — activités (15)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-16",
    title: "Répondre — activités (16)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-17",
    title: "Répondre — activités (17)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-18",
    title: "Répondre — activités (18)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-19",
    title: "Répondre — activités (19)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-20",
    title: "Répondre — activités (20)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.3 — Partager ses goûts
   ════════════════════════════════════════════════════════════════════════════ */

const E11_3_CE_EMAIL_TEXT = `De : Noé
Objet : Une série géniale et une soirée cinéma

Bonjour,

J'ai fini hier la série « Le Bureau des Mystères » : je te la recommande !
Il y a deux saisons et seize épisodes. Chaque épisode dure quarante minutes.
C'est une série policière, mais il y a aussi beaucoup d'humour.
Mon personnage préféré est l'inspectrice : elle est très drôle.
Sinon, vendredi prochain, le nouveau film de science-fiction sort au cinéma Rex.
La séance commence à 20 h 15 et la place coûte quatorze francs.
Ça te dit de venir avec moi ? Après le film, on peut manger une glace.
Réponds-moi avant mercredi pour que j'achète les billets.

À bientôt,
Noé`;

const E11_3_CE_EMAIL_POOL = buildExpressPool("e11-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Qu'est-ce que Noé recommande ?",
    text: ["Une série", "Un livre", "Un jeu vidéo"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "J'ai fini hier la _________ « Le Bureau des Mystères ».",
    fill: "série",
    fillA: ["serie"],
    vfQ: "Noé recommande une série.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien y a-t-il de saisons ?",
    text: ["Deux saisons", "Trois saisons", "Quatre saisons"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Il y a _________ saisons et seize épisodes.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "La série a quatre saisons.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de temps dure un épisode ?",
    text: ["Quarante minutes", "Trente minutes", "Une heure"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Chaque épisode dure _________ minutes.",
    fill: "quarante",
    fillA: ["40"],
    vfQ: "Un épisode dure quarante minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel est le genre de la série ?",
    text: [
      "Policière, avec beaucoup d'humour",
      "Romantique",
      "Historique",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "C'est une série _________, mais il y a aussi beaucoup d'humour.",
    fill: "policière",
    fillA: ["policiere"],
    vfQ: "C'est une série historique.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est le personnage préféré de Noé ?",
    text: ["L'inspectrice", "Le directeur", "La journaliste"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Mon personnage préféré est l'_________ : elle est très drôle.",
    fill: "inspectrice",
    vfQ: "Le personnage préféré de Noé est l'inspectrice.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel film sort vendredi au cinéma Rex ?",
    text: [
      "Un film de science-fiction",
      "Un film comique",
      "Un dessin animé",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Vendredi prochain, le nouveau film de science-_________ sort au cinéma Rex.",
    fill: "fiction",
    vfQ: "Vendredi, un film de science-fiction sort au cinéma.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "À quelle heure commence la séance ?",
    text: ["À 20 h 15", "À 19 h 45", "À 21 h"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "La séance commence à 20 h _________.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "La séance commence à 21 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Combien coûte la place de cinéma ?",
    text: ["Quatorze francs", "Quatre francs", "Vingt francs"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "La place coûte _________ francs.",
    fill: "quatorze",
    fillA: ["14"],
    vfQ: "La place de cinéma coûte quatorze francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Que propose Noé après le film ?",
    text: ["Manger une glace", "Boire un café", "Aller danser"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Après le film, on peut manger une _________.",
    fill: "glace",
    vfQ: "Après le film, Noé propose d'aller au restaurant.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il répondre à Noé ?",
    text: ["Avant mercredi", "Avant vendredi", "Avant dimanche"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Réponds-moi avant _________ pour que j'achète les billets.",
    fill: "mercredi",
    vfQ: "Il faut répondre avant mercredi.",
    vfC: 0,
  }),
]);


const E11_3_CE_EMAIL_2_TEXT = `Info E-mail goûts — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_2_POOL = buildExpressPool("e11-3-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_3_TEXT = `Info E-mail goûts — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_3_POOL = buildExpressPool("e11-3-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_4_TEXT = `Info E-mail goûts — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_4_POOL = buildExpressPool("e11-3-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_5_TEXT = `Info E-mail goûts — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_5_POOL = buildExpressPool("e11-3-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_6_TEXT = `Info E-mail goûts — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_6_POOL = buildExpressPool("e11-3-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_7_TEXT = `Info E-mail goûts — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_7_POOL = buildExpressPool("e11-3-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_8_TEXT = `Info E-mail goûts — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_8_POOL = buildExpressPool("e11-3-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_9_TEXT = `Info E-mail goûts — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_9_POOL = buildExpressPool("e11-3-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_10_TEXT = `Info E-mail goûts — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_10_POOL = buildExpressPool("e11-3-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_11_TEXT = `Info E-mail goûts — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_11_POOL = buildExpressPool("e11-3-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_12_TEXT = `Info E-mail goûts — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_12_POOL = buildExpressPool("e11-3-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_13_TEXT = `Info E-mail goûts — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_13_POOL = buildExpressPool("e11-3-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_14_TEXT = `Info E-mail goûts — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_14_POOL = buildExpressPool("e11-3-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_15_TEXT = `Info E-mail goûts — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_15_POOL = buildExpressPool("e11-3-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_16_TEXT = `Info E-mail goûts — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_16_POOL = buildExpressPool("e11-3-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_17_TEXT = `Info E-mail goûts — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_17_POOL = buildExpressPool("e11-3-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_18_TEXT = `Info E-mail goûts — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_18_POOL = buildExpressPool("e11-3-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_19_TEXT = `Info E-mail goûts — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_19_POOL = buildExpressPool("e11-3-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_3_CE_EMAIL_20_TEXT = `Info E-mail goûts — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail goûts.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_3_CE_EMAIL_20_POOL = buildExpressPool("e11-3-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail goûts", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ goûts.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail goûts.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E11_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-3-ce-email",
  readingText: E11_3_CE_EMAIL_TEXT,
  questionPool: E11_3_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-3-ce-email-2",
  readingText: E11_3_CE_EMAIL_2_TEXT,
  questionPool: E11_3_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-3",
  readingText: E11_3_CE_EMAIL_3_TEXT,
  questionPool: E11_3_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-4",
  readingText: E11_3_CE_EMAIL_4_TEXT,
  questionPool: E11_3_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-5",
  readingText: E11_3_CE_EMAIL_5_TEXT,
  questionPool: E11_3_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-6",
  readingText: E11_3_CE_EMAIL_6_TEXT,
  questionPool: E11_3_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-7",
  readingText: E11_3_CE_EMAIL_7_TEXT,
  questionPool: E11_3_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-8",
  readingText: E11_3_CE_EMAIL_8_TEXT,
  questionPool: E11_3_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-9",
  readingText: E11_3_CE_EMAIL_9_TEXT,
  questionPool: E11_3_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-10",
  readingText: E11_3_CE_EMAIL_10_TEXT,
  questionPool: E11_3_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-11",
  readingText: E11_3_CE_EMAIL_11_TEXT,
  questionPool: E11_3_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-12",
  readingText: E11_3_CE_EMAIL_12_TEXT,
  questionPool: E11_3_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-13",
  readingText: E11_3_CE_EMAIL_13_TEXT,
  questionPool: E11_3_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-14",
  readingText: E11_3_CE_EMAIL_14_TEXT,
  questionPool: E11_3_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-15",
  readingText: E11_3_CE_EMAIL_15_TEXT,
  questionPool: E11_3_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-16",
  readingText: E11_3_CE_EMAIL_16_TEXT,
  questionPool: E11_3_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-17",
  readingText: E11_3_CE_EMAIL_17_TEXT,
  questionPool: E11_3_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-18",
  readingText: E11_3_CE_EMAIL_18_TEXT,
  questionPool: E11_3_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-19",
  readingText: E11_3_CE_EMAIL_19_TEXT,
  questionPool: E11_3_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-20",
  readingText: E11_3_CE_EMAIL_20_TEXT,
  questionPool: E11_3_CE_EMAIL_20_POOL
}),
];

export const E11_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-3-pee-1",
    title: "Accepter une soirée cinéma",
    situation: "Un ami vous invite au cinéma vendredi.",
    sourceMessage: {
      from: "Noé",
      subject: "Cinéma vendredi ?",
      body: "Salut !\nLe nouveau film de science-fiction sort vendredi au cinéma Rex.\nLa séance est à 20 h 15. Tu viens avec moi ?\nNoé",
    },
    instruction: "Répondez à Noé : acceptez l'invitation, proposez un lieu de rendez-vous avant la séance et posez une question sur le film.",
    points: ["Votre accord", "Un lieu de rendez-vous", "Une question sur le film"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-2",
    title: "Recommander un livre",
    situation: "Une amie cherche un livre pour les vacances.",
    sourceMessage: {
      from: "Lina",
      subject: "Un livre pour les vacances",
      body: "Coucou,\nJe pars en vacances la semaine prochaine et je cherche un bon livre.\nTu as lu quelque chose de bien récemment ?\nLina",
    },
    instruction: "Répondez à Lina : recommandez un livre, racontez un peu l'histoire et expliquez pourquoi vous l'avez aimé.",
    points: ["Le livre recommandé", "Un résumé de l'histoire", "Pourquoi vous l'avez aimé"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-3",
    title: "S'inscrire au club de lecture",
    situation: "La bibliothèque vous invite à rejoindre son club de lecture.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Club de lecture",
      body: "Bonjour,\nNotre club de lecture se réunit le premier jeudi du mois, à 18 h 30.\nPour vous inscrire, répondez à cet e-mail et présentez votre livre préféré.\nLa Bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : inscrivez-vous au club, présentez votre livre préféré et posez une question sur la durée des réunions.",
    points: ["Votre inscription", "Votre livre préféré", "Une question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-4",
    title: "Répondre à une invitation au concert",
    situation: "Un ami a deux billets pour un concert samedi.",
    sourceMessage: {
      from: "Sami",
      subject: "Concert samedi",
      body: "Salut !\nJ'ai deux billets pour le concert de rock de samedi soir.\nTu aimes ce style de musique ? Tu veux venir ?\nSami",
    },
    instruction: "Répondez à Sami : acceptez ou refusez l'invitation, parlez de vos goûts musicaux et proposez une heure de rendez-vous ou une autre sortie.",
    points: ["Votre décision", "Vos goûts musicaux", "Un rendez-vous ou une autre sortie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-5",
    title: "Recommander une série",
    situation: "Une amie cherche une nouvelle série à regarder.",
    sourceMessage: {
      from: "Jade",
      subject: "Quelle série tu regardes ?",
      body: "Coucou,\nJ'ai fini ma série hier soir et je ne sais pas quoi regarder maintenant.\nTu as une idée pour moi ?\nJade",
    },
    instruction: "Répondez à Jade : recommandez une série, décrivez le genre et l'histoire, et dites combien il y a de saisons ou d'épisodes.",
    points: ["La série recommandée", "Le genre et l'histoire", "Le nombre de saisons ou d'épisodes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-6",
    title: "Raconter un film",
    situation: "Un ami veut savoir comment était le film que vous avez vu.",
    sourceMessage: {
      from: "Théo",
      subject: "Alors, ce film ?",
      body: "Salut,\nTu es allé(e) au cinéma hier soir, non ?\nC'était bien ? Raconte-moi !\nThéo",
    },
    instruction: "Répondez à Théo : racontez le film que vous avez vu, donnez votre avis et dites si vous le recommandez ou non.",
    points: ["Le récit du film", "Votre avis", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-7",
    title: "Donner un avis différent",
    situation: "Une amie a adoré un film, mais vous n'êtes pas d'accord.",
    sourceMessage: {
      from: "Anna",
      subject: "Tu as aimé ce film ?",
      body: "Coucou,\nJ'ai adoré le film de dimanche, c'était magnifique !\nEt toi, tu as aimé ? Dis-moi tout !\nAnna",
    },
    instruction: "Répondez à Anna : donnez poliment votre avis différent, expliquez ce que vous n'avez pas aimé et proposez-lui un autre film à voir ensemble.",
    points: ["Votre avis différent", "Ce que vous n'avez pas aimé", "Un autre film à voir ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-8",
    title: "Voter pour un film",
    situation: "Le ciné-club du quartier vous demande de choisir un film.",
    sourceMessage: {
      from: "Ciné-club du quartier",
      subject: "Programme du mois",
      body: "Bonjour,\nPour la prochaine soirée, trois films sont proposés : une comédie française, un film d'aventure et un documentaire sur la nature.\nQuel film choisissez-vous ?\nLe Ciné-club",
    },
    instruction: "Répondez au ciné-club : choisissez un film, expliquez pourquoi il vous intéresse et demandez l'heure de la séance.",
    points: ["Le film choisi", "Pourquoi", "Une question sur l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-9",
    title: "Préparer la musique d'une fête",
    situation: "Un ami prépare la musique pour une fête et vous demande vos idées.",
    sourceMessage: {
      from: "Diego",
      subject: "Playlist pour la fête",
      body: "Salut !\nJe prépare la musique pour la fête de samedi.\nQuelles chansons ou quels styles tu me conseilles ?\nDiego",
    },
    instruction: "Répondez à Diego : proposez deux styles de musique ou chansons, dites ce qu'il ne faut surtout pas mettre et souhaitez-lui une bonne préparation.",
    points: ["Deux styles ou chansons", "Ce qu'il ne faut pas mettre", "Un encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-10",
    title: "Conseiller un cadeau",
    situation: "Votre tante cherche un cadeau pour votre cousin de 14 ans.",
    sourceMessage: {
      from: "Tante Rosa",
      subject: "Un cadeau pour ton cousin",
      body: "Bonjour,\nJe cherche un cadeau pour l'anniversaire de ton cousin : un livre, une BD ou de la musique.\nQu'est-ce qu'il aime en ce moment ? Tu as une idée ?\nTante Rosa",
    },
    instruction: "Répondez à votre tante : proposez une idée de cadeau, expliquez pourquoi votre cousin va l'aimer et dites où l'acheter et à quel prix.",
    points: ["L'idée de cadeau", "Pourquoi il va l'aimer", "Où l'acheter et le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-11",
    title: "Répondre — goûts (11)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-12",
    title: "Répondre — goûts (12)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-13",
    title: "Répondre — goûts (13)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-14",
    title: "Répondre — goûts (14)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-15",
    title: "Répondre — goûts (15)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-16",
    title: "Répondre — goûts (16)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-17",
    title: "Répondre — goûts (17)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-18",
    title: "Répondre — goûts (18)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-19",
    title: "Répondre — goûts (19)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-20",
    title: "Répondre — goûts (20)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.4 — Passer des vacances
   ════════════════════════════════════════════════════════════════════════════ */

const E11_4_CE_EMAIL_TEXT = `De : Hôtel Bellevue
Objet : Confirmation de votre réservation

Bonjour,

Nous vous remercions pour votre réservation. Voici les détails de votre séjour.
Vous arrivez le samedi 12 juillet et vous partez le samedi 19 juillet, donc sept nuits.
Vous avez réservé une chambre double avec vue sur le lac, au troisième étage.
Le prix est de 120 francs par nuit, petit-déjeuner compris.
Le petit-déjeuner est servi de 7 h à 10 h dans la salle à manger.
La piscine de l'hôtel est ouverte tous les jours jusqu'à 20 h.
S'il fait beau, nous organisons une excursion en bateau le mardi.
Pour annuler sans frais, écrivez-nous au moins cinq jours avant l'arrivée.

Avec nos meilleures salutations,
La réception de l'hôtel Bellevue`;

const E11_4_CE_EMAIL_POOL = buildExpressPool("e11-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel jour les clients arrivent-ils à l'hôtel ?",
    text: ["Le samedi 12 juillet", "Le dimanche 13 juillet", "Le samedi 19 juillet"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Vous arrivez le samedi 12 _________.",
    fill: "juillet",
    vfQ: "Les clients arrivent le samedi 12 juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien de nuits dure le séjour ?",
    text: ["Sept nuits", "Cinq nuits", "Dix nuits"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Vous partez le samedi 19 juillet, donc _________ nuits.",
    fill: "sept",
    fillA: ["7"],
    vfQ: "Le séjour dure dix nuits.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle chambre est réservée ?",
    text: [
      "Une chambre double avec vue sur le lac",
      "Une chambre simple avec vue sur la montagne",
      "Une chambre double avec vue sur la rue",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Vous avez réservé une chambre double avec vue sur le _________.",
    fill: "lac",
    vfQ: "La chambre a une vue sur le lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quel étage se trouve la chambre ?",
    text: ["Au troisième étage", "Au premier étage", "Au cinquième étage"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "La chambre est au _________ étage.",
    fill: "troisième",
    fillA: ["troisieme", "3e", "3ème", "3"],
    vfQ: "La chambre est au premier étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien coûte une nuit à l'hôtel ?",
    text: ["120 francs", "100 francs", "200 francs"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le prix est de _________ francs par nuit.",
    fill: "120",
    fillA: ["cent vingt", "cent-vingt"],
    vfQ: "La nuit coûte 200 francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Qu'est-ce qui est compris dans le prix ?",
    text: ["Le petit-déjeuner", "Le dîner", "L'excursion en bateau"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le prix est de 120 francs par nuit, petit-_________ compris.",
    fill: "déjeuner",
    fillA: ["dejeuner"],
    vfQ: "Le petit-déjeuner est compris dans le prix.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "À quelle heure est servi le petit-déjeuner ?",
    text: ["De 7 h à 10 h", "De 6 h à 9 h", "De 8 h à 11 h"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Le petit-déjeuner est servi de 7 h à _________ h.",
    fill: "10",
    fillA: ["dix"],
    vfQ: "Le petit-déjeuner est servi jusqu'à 11 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Jusqu'à quelle heure la piscine est-elle ouverte ?",
    text: ["Jusqu'à 20 h", "Jusqu'à 18 h", "Jusqu'à 22 h"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "La piscine de l'hôtel est ouverte tous les jours jusqu'à _________ h.",
    fill: "20",
    fillA: ["vingt"],
    vfQ: "La piscine est ouverte tous les jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qu'est-ce que l'hôtel organise le mardi s'il fait beau ?",
    text: ["Une excursion en bateau", "Une randonnée en montagne", "Une soirée dansante"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "S'il fait beau, nous organisons une excursion en _________ le mardi.",
    fill: "bateau",
    vfQ: "L'excursion en bateau a lieu le jeudi.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il écrire pour annuler sans frais ?",
    text: [
      "Au moins cinq jours avant l'arrivée",
      "La veille de l'arrivée",
      "Deux jours avant l'arrivée",
    ],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Pour annuler sans frais, écrivez-nous au moins _________ jours avant l'arrivée.",
    fill: "cinq",
    fillA: ["5"],
    vfQ: "On peut annuler sans frais cinq jours avant l'arrivée.",
    vfC: 0,
  }),
]);


const E11_4_CE_EMAIL_2_TEXT = `Info E-mail vacances — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_2_POOL = buildExpressPool("e11-4-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_3_TEXT = `Info E-mail vacances — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_3_POOL = buildExpressPool("e11-4-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_4_TEXT = `Info E-mail vacances — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_4_POOL = buildExpressPool("e11-4-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_5_TEXT = `Info E-mail vacances — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_5_POOL = buildExpressPool("e11-4-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_6_TEXT = `Info E-mail vacances — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_6_POOL = buildExpressPool("e11-4-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_7_TEXT = `Info E-mail vacances — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_7_POOL = buildExpressPool("e11-4-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_8_TEXT = `Info E-mail vacances — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_8_POOL = buildExpressPool("e11-4-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_9_TEXT = `Info E-mail vacances — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_9_POOL = buildExpressPool("e11-4-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_10_TEXT = `Info E-mail vacances — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_10_POOL = buildExpressPool("e11-4-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_11_TEXT = `Info E-mail vacances — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_11_POOL = buildExpressPool("e11-4-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_12_TEXT = `Info E-mail vacances — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_12_POOL = buildExpressPool("e11-4-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_13_TEXT = `Info E-mail vacances — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_13_POOL = buildExpressPool("e11-4-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_14_TEXT = `Info E-mail vacances — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_14_POOL = buildExpressPool("e11-4-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_15_TEXT = `Info E-mail vacances — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_15_POOL = buildExpressPool("e11-4-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_16_TEXT = `Info E-mail vacances — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_16_POOL = buildExpressPool("e11-4-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_17_TEXT = `Info E-mail vacances — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_17_POOL = buildExpressPool("e11-4-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_18_TEXT = `Info E-mail vacances — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_18_POOL = buildExpressPool("e11-4-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_19_TEXT = `Info E-mail vacances — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_19_POOL = buildExpressPool("e11-4-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

const E11_4_CE_EMAIL_20_TEXT = `Info E-mail vacances — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail vacances.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E11_4_CE_EMAIL_20_POOL = buildExpressPool("e11-4-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail vacances", "Le sport", "La cuisine"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Les informations concernent _________ vacances.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail vacances.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quels sont les horaires d'ouverture ?",
    text: ["Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24"],
    textC: 0,
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
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
    img: ["cuisinier", "serveur", "boulanger"],
    imgC: 0,
    fillQ: "Consultez notre site _________ ou rendez-vous à l'accueil.",
    fill: "Internet",
    vfQ: "On peut consulter le site Internet.",
    vfC: 0,
  }),
]);

export const E11_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-4-ce-email",
  readingText: E11_4_CE_EMAIL_TEXT,
  questionPool: E11_4_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-4-ce-email-2",
  readingText: E11_4_CE_EMAIL_2_TEXT,
  questionPool: E11_4_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-3",
  readingText: E11_4_CE_EMAIL_3_TEXT,
  questionPool: E11_4_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-4",
  readingText: E11_4_CE_EMAIL_4_TEXT,
  questionPool: E11_4_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-5",
  readingText: E11_4_CE_EMAIL_5_TEXT,
  questionPool: E11_4_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-6",
  readingText: E11_4_CE_EMAIL_6_TEXT,
  questionPool: E11_4_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-7",
  readingText: E11_4_CE_EMAIL_7_TEXT,
  questionPool: E11_4_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-8",
  readingText: E11_4_CE_EMAIL_8_TEXT,
  questionPool: E11_4_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-9",
  readingText: E11_4_CE_EMAIL_9_TEXT,
  questionPool: E11_4_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-10",
  readingText: E11_4_CE_EMAIL_10_TEXT,
  questionPool: E11_4_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-11",
  readingText: E11_4_CE_EMAIL_11_TEXT,
  questionPool: E11_4_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-12",
  readingText: E11_4_CE_EMAIL_12_TEXT,
  questionPool: E11_4_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-13",
  readingText: E11_4_CE_EMAIL_13_TEXT,
  questionPool: E11_4_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-14",
  readingText: E11_4_CE_EMAIL_14_TEXT,
  questionPool: E11_4_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-15",
  readingText: E11_4_CE_EMAIL_15_TEXT,
  questionPool: E11_4_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-16",
  readingText: E11_4_CE_EMAIL_16_TEXT,
  questionPool: E11_4_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-17",
  readingText: E11_4_CE_EMAIL_17_TEXT,
  questionPool: E11_4_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-18",
  readingText: E11_4_CE_EMAIL_18_TEXT,
  questionPool: E11_4_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-19",
  readingText: E11_4_CE_EMAIL_19_TEXT,
  questionPool: E11_4_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-20",
  readingText: E11_4_CE_EMAIL_20_TEXT,
  questionPool: E11_4_CE_EMAIL_20_POOL
}),
];

export const E11_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-4-pee-1",
    title: "Préparer son arrivée à l'hôtel",
    situation: "L'hôtel vous demande des informations avant votre arrivée.",
    sourceMessage: {
      from: "Hôtel Bellevue",
      subject: "Votre arrivée",
      body: "Bonjour,\nNous préparons votre séjour.\nÀ quelle heure arrivez-vous samedi ? Avez-vous des demandes particulières ?\nLa réception",
    },
    instruction: "Répondez à l'hôtel : donnez votre heure d'arrivée, demandez une chambre calme et posez une question sur le parking.",
    points: ["Votre heure d'arrivée", "La demande d'une chambre calme", "Une question sur le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-2",
    title: "Décrire ses vacances idéales",
    situation: "Une agence de voyages vous demande vos préférences.",
    sourceMessage: {
      from: "Agence Vacances Soleil",
      subject: "Votre demande de séjour",
      body: "Bonjour,\nMerci pour votre message. Pour vous proposer un séjour, nous avons besoin de quelques informations.\nPréférez-vous la mer ou la montagne ? Quelles sont vos dates ? Quel est votre budget ?\nL'Agence Vacances Soleil",
    },
    instruction: "Répondez à l'agence : dites où vous voulez partir, donnez vos dates de vacances et indiquez votre budget.",
    points: ["La destination souhaitée", "Vos dates", "Votre budget"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-3",
    title: "Partir en vacances ensemble",
    situation: "Une amie vous propose de partir ensemble cet été.",
    sourceMessage: {
      from: "Camille",
      subject: "On part ensemble cet été ?",
      body: "Coucou,\nCet été, je ne veux pas partir seule.\nÇa te dit de partir en vacances avec moi ? Où est-ce qu'on pourrait aller ?\nCamille",
    },
    instruction: "Répondez à Camille : acceptez sa proposition, proposez une destination et expliquez pourquoi ce lieu vous plaît.",
    points: ["Votre accord", "Une destination", "Pourquoi ce lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-4",
    title: "Raconter ses vacances",
    situation: "Votre tante veut des nouvelles de vos vacances.",
    sourceMessage: {
      from: "Tante Marta",
      subject: "Alors, ces vacances ?",
      body: "Bonjour,\nTu es rentré(e) de vacances la semaine dernière, non ?\nC'était comment ? Il a fait beau ? Raconte-moi !\nTante Marta",
    },
    instruction: "Répondez à votre tante : racontez vos vacances, parlez de la météo et décrivez votre meilleur souvenir.",
    points: ["Le récit des vacances", "La météo", "Votre meilleur souvenir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-5",
    title: "Annuler une réservation",
    situation: "Un hôtel vous demande de confirmer votre réservation.",
    sourceMessage: {
      from: "Hôtel des Alpes",
      subject: "Confirmation demandée",
      body: "Bonjour,\nPouvez-vous confirmer votre réservation du 3 au 8 août ?\nSans réponse de votre part avant vendredi, la chambre sera libérée.\nL'Hôtel des Alpes",
    },
    instruction: "Répondez à l'hôtel : annulez poliment votre réservation, expliquez pourquoi vous ne pouvez pas venir et demandez si l'annulation est sans frais.",
    points: ["L'annulation", "La raison", "Une question sur les frais"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-6",
    title: "Donner des conseils de voyage",
    situation: "Un ami part dans une ville que vous connaissez bien.",
    sourceMessage: {
      from: "Yanis",
      subject: "Conseils pour Lisbonne",
      body: "Salut !\nJe pars à Lisbonne au mois de mai. Tu y es allé(e) l'année dernière, non ?\nQu'est-ce que je dois absolument visiter ? Il fait quel temps en mai ?\nYanis",
    },
    instruction: "Répondez à Yanis : conseillez deux visites à faire, parlez de la météo au mois de mai et recommandez un plat ou un restaurant.",
    points: ["Deux visites", "La météo en mai", "Un plat ou un restaurant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-7",
    title: "Demander des informations touristiques",
    situation: "L'office du tourisme répond à votre premier message.",
    sourceMessage: {
      from: "Office du tourisme de Montreux",
      subject: "Votre demande d'informations",
      body: "Bonjour,\nMerci pour votre message. Quelles informations souhaitez-vous recevoir ?\nNous pouvons vous envoyer le programme des activités et une liste d'hôtels.\nL'Office du tourisme",
    },
    instruction: "Répondez à l'office du tourisme : donnez les dates de votre séjour, demandez le programme des activités et posez une question sur les hôtels.",
    points: ["Les dates du séjour", "La demande du programme", "Une question sur les hôtels"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-8",
    title: "Changer de programme à cause de la météo",
    situation: "Une amie s'inquiète pour votre week-end de camping.",
    sourceMessage: {
      from: "Léa",
      subject: "Mauvaise météo ce week-end",
      body: "Coucou,\nJ'ai regardé la météo : il va pleuvoir tout le week-end !\nQu'est-ce qu'on fait pour le camping ? On annule ?\nLéa",
    },
    instruction: "Répondez à Léa : proposez un autre programme pour le week-end, expliquez votre idée et rassurez-la.",
    points: ["Un autre programme", "Une explication", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-9",
    title: "Confirmer une réservation de camping",
    situation: "Le camping vous demande des détails sur votre séjour.",
    sourceMessage: {
      from: "Camping Les Pins",
      subject: "Votre réservation d'emplacement",
      body: "Bonjour,\nNous avons bien reçu votre demande pour un emplacement en août.\nPouvez-vous confirmer vos dates, le nombre de personnes et si vous venez avec une tente ou un camping-car ?\nLe Camping Les Pins",
    },
    instruction: "Répondez au camping : confirmez vos dates, donnez le nombre de personnes et le type de matériel, puis posez une question sur la piscine ou les animaux.",
    points: ["Les dates", "Le nombre de personnes et le matériel", "Une question sur la piscine ou les animaux"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-10",
    title: "Remercier pour les photos de vacances",
    situation: "Un ami vous envoie les photos de vos vacances communes.",
    sourceMessage: {
      from: "Paulo",
      subject: "Photos des vacances",
      body: "Salut !\nJe t'envoie enfin les photos de nos vacances à la mer.\nQuelle belle semaine ! J'espère qu'elles te plaisent.\nPaulo",
    },
    instruction: "Répondez à Paulo : remerciez-le pour les photos, rappelez un bon souvenir de ces vacances et proposez de repartir ensemble l'année prochaine.",
    points: ["Un remerciement", "Un bon souvenir", "Une proposition pour l'année prochaine"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-11",
    title: "Répondre — vacances (11)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-12",
    title: "Répondre — vacances (12)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-13",
    title: "Répondre — vacances (13)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-14",
    title: "Répondre — vacances (14)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-15",
    title: "Répondre — vacances (15)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-16",
    title: "Répondre — vacances (16)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-17",
    title: "Répondre — vacances (17)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-18",
    title: "Répondre — vacances (18)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-19",
    title: "Répondre — vacances (19)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-20",
    title: "Répondre — vacances (20)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
