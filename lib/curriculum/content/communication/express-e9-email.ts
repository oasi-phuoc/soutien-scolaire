import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E9 — Vie quotidienne A2 (achats, déplacements, logement,
 * démarches administratives, actualité).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10) par leçon.
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10) par leçon.
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E9.1 — Faire des achats
   ════════════════════════════════════════════════════════════════════════════ */

const E9_1_CE_EMAIL_TEXT = `De : Magasin ÉlectroHome
Objet : Votre commande n° 4582

Bonjour,

Nous vous remercions pour votre commande n° 4582 du 3 février.
Vous avez acheté un aspirateur pendant les soldes, au prix de 149 francs au lieu de 220 francs.
La livraison à domicile est gratuite à partir de 100 francs d'achat.
Le livreur passera chez vous le jeudi 8 février, entre 14 h et 17 h.
Si l'appareil ne vous convient pas, vous pouvez le rapporter dans un délai de trente jours, avec le ticket de caisse.
L'aspirateur est garanti deux ans.
Pour toute question, notre service après-vente répond au 021 555 88 22, du lundi au vendredi.

Avec nos meilleures salutations,
Le service clients ÉlectroHome`;

const E9_1_CE_EMAIL_POOL = buildExpressPool("e9-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel numéro figure sur la commande ?",
    text: ["Le numéro 4582", "Le numéro 4285", "Le numéro 5482"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous vous remercions pour votre commande n° _________ du 3 février.",
    fill: "4582",
    vfQ: "La commande porte le numéro 4582.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Qu'est-ce que le client a acheté ?",
    text: ["Un aspirateur", "Un lave-linge", "Un téléphone"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez acheté un _________ pendant les soldes.",
    fill: "aspirateur",
    vfQ: "Le client a acheté un lave-linge.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien le client a-t-il payé l'aspirateur ?",
    text: ["149 francs", "220 francs", "100 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au prix de _________ francs au lieu de 220 francs.",
    fill: "149",
    fillA: ["cent quarante-neuf"],
    vfQ: "Pendant les soldes, l'aspirateur coûte 149 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À partir de quel montant la livraison est-elle gratuite ?",
    text: ["100 francs d'achat", "50 francs d'achat", "200 francs d'achat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La livraison à domicile est gratuite à partir de _________ francs d'achat.",
    fill: "100",
    fillA: ["cent"],
    vfQ: "La livraison est gratuite à partir de 200 francs d'achat.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel jour le livreur passe-t-il ?",
    text: ["Le jeudi 8 février", "Le mardi 6 février", "Le samedi 10 février"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le livreur passera chez vous le jeudi 8 _________.",
    fill: "février",
    fillA: ["fevrier"],
    vfQ: "Le livreur passe le jeudi 8 février.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure le livreur passe-t-il ?",
    text: ["Entre 14 h et 17 h", "Entre 8 h et 11 h", "Entre 18 h et 20 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entre 14 h et _________ h.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "Le livreur passe le matin.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Dans quel délai peut-on rapporter l'appareil ?",
    text: ["Trente jours", "Dix jours", "Une semaine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez le rapporter dans un délai de _________ jours.",
    fill: "trente",
    fillA: ["30"],
    vfQ: "On peut rapporter l'appareil pendant trente jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Que faut-il présenter pour rapporter l'appareil ?",
    text: ["Le ticket de caisse", "Le passeport", "La carte bancaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez le rapporter avec le _________ de caisse.",
    fill: "ticket",
    vfQ: "Pour rapporter l'appareil, il faut le ticket de caisse.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien de temps dure la garantie ?",
    text: ["Deux ans", "Un an", "Cinq ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'aspirateur est garanti _________ ans.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "La garantie dure cinq ans.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand le service après-vente répond-il ?",
    text: ["Du lundi au vendredi", "Tous les jours", "Seulement le samedi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Notre service après-vente répond au 021 555 88 22, du lundi au _________.",
    fill: "vendredi",
    vfQ: "Le service après-vente répond le dimanche.",
    vfC: 1,
  }),
]);


const E9_1_CE_EMAIL_2_TEXT = `De : Boutique Lina
Objet : Confirmation de commande

Bonjour,
Votre commande n° 2847 du 12 mars est confirmée.
Vous avez commandé un sac à dos à 45 €.
La livraison est prévue le 15 mars entre 10 h et 12 h.
Vous pouvez suivre votre colis sur notre site.
Merci pour votre confiance.
Boutique Lina`;
const E9_1_CE_EMAIL_2_POOL = buildExpressPool("e9-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["2847", "2748", "2487"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est confirmée.",
    fill: "2847",
    vfQ: "La commande porte le numéro 2847.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Qu'a commandé le client ?",
    text: ["Un sac à dos", "Un manteau", "Un téléphone"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez commandé un _________ à dos.",
    fill: "sac",
    vfQ: "Le client a commandé un sac à dos.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quel est le prix ?",
    text: ["45 €", "55 €", "35 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Un sac à dos à _________ €.",
    fill: "45",
    vfQ: "Le sac coûte 45 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand est la livraison ?",
    text: ["Le 15 mars", "Le 12 mars", "Le 20 mars"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La livraison est prévue le 15 _________.",
    fill: "mars",
    vfQ: "La livraison est le 15 mars.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "À quelle heure ?",
    text: ["Entre 10 h et 12 h", "Entre 14 h et 16 h", "Le soir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Entre 10 h et _________ h.",
    fill: "12",
    vfQ: "La livraison est le matin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Peut-on suivre le colis ?",
    text: ["Oui, sur le site", "Non", "Seulement par téléphone"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez _________ votre colis sur notre site.",
    fill: "suivre",
    vfQ: "On peut suivre le colis en ligne.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_3_TEXT = `De : Service Home
Objet : Votre commande n° 1002

Bonjour,
Votre commande n° 1002 du 7 avril est en cours de préparation.
Montant : 40 €. Livraison gratuite.
Délai estimé : 5 jours ouvrés.
Retour possible sous 16 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_3_POOL = buildExpressPool("e9-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1002", "1003", "1001"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1002",
    vfQ: "La commande est la n° 1002.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["40 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "40",
    vfQ: "Le montant est 40 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["5 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "5",
    vfQ: "Le délai est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["16 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "16",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_4_TEXT = `De : Service Sport
Objet : Votre commande n° 1003

Bonjour,
Votre commande n° 1003 du 8 avril est en cours de préparation.
Montant : 45 €. Livraison gratuite.
Délai estimé : 6 jours ouvrés.
Retour possible sous 17 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_4_POOL = buildExpressPool("e9-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1003", "1004", "1002"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1003",
    vfQ: "La commande est la n° 1003.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["45 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "45",
    vfQ: "Le montant est 45 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["6 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "6",
    vfQ: "Le délai est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["17 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "17",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_5_TEXT = `De : Service Bio
Objet : Votre commande n° 1004

Bonjour,
Votre commande n° 1004 du 9 avril est en cours de préparation.
Montant : 50 €. Livraison gratuite.
Délai estimé : 3 jours ouvrés.
Retour possible sous 18 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_5_POOL = buildExpressPool("e9-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1004", "1005", "1003"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1004",
    vfQ: "La commande est la n° 1004.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["50 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "50",
    vfQ: "Le montant est 50 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["3 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "3",
    vfQ: "Le délai est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["18 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "18",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_6_TEXT = `De : Service Moda
Objet : Votre commande n° 1005

Bonjour,
Votre commande n° 1005 du 10 avril est en cours de préparation.
Montant : 55 €. Livraison gratuite.
Délai estimé : 4 jours ouvrés.
Retour possible sous 19 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_6_POOL = buildExpressPool("e9-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1005", "1006", "1004"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1005",
    vfQ: "La commande est la n° 1005.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["55 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "55",
    vfQ: "Le montant est 55 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["4 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "4",
    vfQ: "Le délai est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["19 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "19",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_7_TEXT = `De : Service Tech
Objet : Votre commande n° 1006

Bonjour,
Votre commande n° 1006 du 11 avril est en cours de préparation.
Montant : 60 €. Livraison gratuite.
Délai estimé : 5 jours ouvrés.
Retour possible sous 20 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_7_POOL = buildExpressPool("e9-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1006", "1007", "1005"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1006",
    vfQ: "La commande est la n° 1006.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["60 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "60",
    vfQ: "Le montant est 60 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["5 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "5",
    vfQ: "Le délai est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["20 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "20",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_8_TEXT = `De : Service Home
Objet : Votre commande n° 1007

Bonjour,
Votre commande n° 1007 du 12 avril est en cours de préparation.
Montant : 65 €. Livraison gratuite.
Délai estimé : 6 jours ouvrés.
Retour possible sous 21 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_8_POOL = buildExpressPool("e9-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1007", "1008", "1006"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1007",
    vfQ: "La commande est la n° 1007.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["65 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "65",
    vfQ: "Le montant est 65 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["6 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "6",
    vfQ: "Le délai est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["21 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "21",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_9_TEXT = `De : Service Sport
Objet : Votre commande n° 1008

Bonjour,
Votre commande n° 1008 du 13 avril est en cours de préparation.
Montant : 70 €. Livraison gratuite.
Délai estimé : 3 jours ouvrés.
Retour possible sous 22 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_9_POOL = buildExpressPool("e9-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1008", "1009", "1007"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1008",
    vfQ: "La commande est la n° 1008.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["70 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "70",
    vfQ: "Le montant est 70 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["3 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "3",
    vfQ: "Le délai est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["22 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "22",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_10_TEXT = `De : Service Bio
Objet : Votre commande n° 1009

Bonjour,
Votre commande n° 1009 du 14 avril est en cours de préparation.
Montant : 75 €. Livraison gratuite.
Délai estimé : 4 jours ouvrés.
Retour possible sous 23 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_10_POOL = buildExpressPool("e9-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1009", "1010", "1008"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1009",
    vfQ: "La commande est la n° 1009.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["75 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "75",
    vfQ: "Le montant est 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["4 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "4",
    vfQ: "Le délai est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["23 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "23",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_11_TEXT = `De : Service Moda
Objet : Votre commande n° 1010

Bonjour,
Votre commande n° 1010 du 15 avril est en cours de préparation.
Montant : 80 €. Livraison gratuite.
Délai estimé : 5 jours ouvrés.
Retour possible sous 14 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_11_POOL = buildExpressPool("e9-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1010", "1011", "1009"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1010",
    vfQ: "La commande est la n° 1010.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["80 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "80",
    vfQ: "Le montant est 80 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["5 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "5",
    vfQ: "Le délai est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["14 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "14",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_12_TEXT = `De : Service Tech
Objet : Votre commande n° 1011

Bonjour,
Votre commande n° 1011 du 16 avril est en cours de préparation.
Montant : 85 €. Livraison gratuite.
Délai estimé : 6 jours ouvrés.
Retour possible sous 15 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_12_POOL = buildExpressPool("e9-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1011", "1012", "1010"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1011",
    vfQ: "La commande est la n° 1011.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["85 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "85",
    vfQ: "Le montant est 85 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["6 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "6",
    vfQ: "Le délai est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["15 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "15",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_13_TEXT = `De : Service Home
Objet : Votre commande n° 1012

Bonjour,
Votre commande n° 1012 du 17 avril est en cours de préparation.
Montant : 90 €. Livraison gratuite.
Délai estimé : 3 jours ouvrés.
Retour possible sous 16 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_13_POOL = buildExpressPool("e9-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1012", "1013", "1011"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1012",
    vfQ: "La commande est la n° 1012.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["90 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "90",
    vfQ: "Le montant est 90 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["3 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "3",
    vfQ: "Le délai est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["16 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "16",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_14_TEXT = `De : Service Sport
Objet : Votre commande n° 1013

Bonjour,
Votre commande n° 1013 du 18 avril est en cours de préparation.
Montant : 95 €. Livraison gratuite.
Délai estimé : 4 jours ouvrés.
Retour possible sous 17 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_14_POOL = buildExpressPool("e9-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1013", "1014", "1012"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1013",
    vfQ: "La commande est la n° 1013.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["95 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "95",
    vfQ: "Le montant est 95 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["4 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "4",
    vfQ: "Le délai est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["17 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "17",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_15_TEXT = `De : Service Bio
Objet : Votre commande n° 1014

Bonjour,
Votre commande n° 1014 du 19 avril est en cours de préparation.
Montant : 100 €. Livraison gratuite.
Délai estimé : 5 jours ouvrés.
Retour possible sous 18 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_15_POOL = buildExpressPool("e9-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1014", "1015", "1013"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1014",
    vfQ: "La commande est la n° 1014.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["100 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "100",
    vfQ: "Le montant est 100 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["5 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "5",
    vfQ: "Le délai est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["18 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "18",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_16_TEXT = `De : Service Moda
Objet : Votre commande n° 1015

Bonjour,
Votre commande n° 1015 du 20 avril est en cours de préparation.
Montant : 105 €. Livraison gratuite.
Délai estimé : 6 jours ouvrés.
Retour possible sous 19 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_16_POOL = buildExpressPool("e9-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1015", "1016", "1014"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1015",
    vfQ: "La commande est la n° 1015.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["105 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "105",
    vfQ: "Le montant est 105 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["6 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "6",
    vfQ: "Le délai est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["19 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "19",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_17_TEXT = `De : Service Tech
Objet : Votre commande n° 1016

Bonjour,
Votre commande n° 1016 du 21 avril est en cours de préparation.
Montant : 110 €. Livraison gratuite.
Délai estimé : 3 jours ouvrés.
Retour possible sous 20 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_17_POOL = buildExpressPool("e9-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1016", "1017", "1015"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1016",
    vfQ: "La commande est la n° 1016.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["110 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "110",
    vfQ: "Le montant est 110 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["3 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "3",
    vfQ: "Le délai est 3 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["20 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "20",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_18_TEXT = `De : Service Home
Objet : Votre commande n° 1017

Bonjour,
Votre commande n° 1017 du 22 avril est en cours de préparation.
Montant : 115 €. Livraison gratuite.
Délai estimé : 4 jours ouvrés.
Retour possible sous 21 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_18_POOL = buildExpressPool("e9-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1017", "1018", "1016"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1017",
    vfQ: "La commande est la n° 1017.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["115 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "115",
    vfQ: "Le montant est 115 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["4 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "4",
    vfQ: "Le délai est 4 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["21 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "21",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_19_TEXT = `De : Service Sport
Objet : Votre commande n° 1018

Bonjour,
Votre commande n° 1018 du 23 avril est en cours de préparation.
Montant : 120 €. Livraison gratuite.
Délai estimé : 5 jours ouvrés.
Retour possible sous 22 jours avec ticket.
Garantie : 1 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_19_POOL = buildExpressPool("e9-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1018", "1019", "1017"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1018",
    vfQ: "La commande est la n° 1018.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["120 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "120",
    vfQ: "Le montant est 120 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["5 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "5",
    vfQ: "Le délai est 5 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["22 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "22",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["1 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "1",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_20_TEXT = `De : Service Bio
Objet : Votre commande n° 1019

Bonjour,
Votre commande n° 1019 du 24 avril est en cours de préparation.
Montant : 125 €. Livraison gratuite.
Délai estimé : 6 jours ouvrés.
Retour possible sous 23 jours avec ticket.
Garantie : 2 an(s).
Cordialement,
Le service clients`;
const E9_1_CE_EMAIL_20_POOL = buildExpressPool("e9-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel numéro de commande ?",
    text: ["1019", "1020", "1018"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande n° _________ est en préparation.",
    fill: "1019",
    vfQ: "La commande est la n° 1019.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quel est le montant ?",
    text: ["125 €", "50 €", "100 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : _________ €.",
    fill: "125",
    vfQ: "Le montant est 125 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "La livraison est-elle gratuite ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison _________.",
    fill: "gratuite",
    vfQ: "La livraison est gratuite.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quel est le délai ?",
    text: ["6 jours ouvrés", "Un jour", "Deux semaines"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai estimé : _________ jours ouvrés.",
    fill: "6",
    vfQ: "Le délai est 6 jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Combien de temps pour un retour ?",
    text: ["23 jours", "7 jours", "60 jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Retour possible sous _________ jours.",
    fill: "23",
    vfQ: "Un retour est possible.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quelle garantie ?",
    text: ["2 an(s)", "5 ans", "Aucune"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Garantie : _________ an(s).",
    fill: "2",
    vfQ: "Il y a une garantie.",
    vfC: 0,
  }),
]);

export const E9_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-1-ce-email",
  readingText: E9_1_CE_EMAIL_TEXT,
  questionPool: E9_1_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e9-1-ce-email-2",
  readingText: E9_1_CE_EMAIL_2_TEXT,
  questionPool: E9_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-3",
  readingText: E9_1_CE_EMAIL_3_TEXT,
  questionPool: E9_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-4",
  readingText: E9_1_CE_EMAIL_4_TEXT,
  questionPool: E9_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-5",
  readingText: E9_1_CE_EMAIL_5_TEXT,
  questionPool: E9_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-6",
  readingText: E9_1_CE_EMAIL_6_TEXT,
  questionPool: E9_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-7",
  readingText: E9_1_CE_EMAIL_7_TEXT,
  questionPool: E9_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-8",
  readingText: E9_1_CE_EMAIL_8_TEXT,
  questionPool: E9_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-9",
  readingText: E9_1_CE_EMAIL_9_TEXT,
  questionPool: E9_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-10",
  readingText: E9_1_CE_EMAIL_10_TEXT,
  questionPool: E9_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-11",
  readingText: E9_1_CE_EMAIL_11_TEXT,
  questionPool: E9_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-12",
  readingText: E9_1_CE_EMAIL_12_TEXT,
  questionPool: E9_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-13",
  readingText: E9_1_CE_EMAIL_13_TEXT,
  questionPool: E9_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-14",
  readingText: E9_1_CE_EMAIL_14_TEXT,
  questionPool: E9_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-15",
  readingText: E9_1_CE_EMAIL_15_TEXT,
  questionPool: E9_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-16",
  readingText: E9_1_CE_EMAIL_16_TEXT,
  questionPool: E9_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-17",
  readingText: E9_1_CE_EMAIL_17_TEXT,
  questionPool: E9_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-18",
  readingText: E9_1_CE_EMAIL_18_TEXT,
  questionPool: E9_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-19",
  readingText: E9_1_CE_EMAIL_19_TEXT,
  questionPool: E9_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e9-1-ce-email-20",
  readingText: E9_1_CE_EMAIL_20_TEXT,
  questionPool: E9_1_CE_EMAIL_20_POOL
}),
];

export const E9_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e9-1-pee-1",
    title: "Commande en retard",
    situation: "Vous avez commandé un manteau il y a deux semaines, mais il n'est pas arrivé.",
    sourceMessage: {
      from: "Boutique ModaStyle",
      subject: "Votre commande n° 7841",
      body: "Bonjour,\nVotre commande n° 7841 a pris du retard à cause d'un problème de stock.\nNous sommes désolés pour ce contretemps.\nLe service clients",
    },
    instruction: "Répondez à la boutique : dites que vous attendez depuis deux semaines, demandez une date de livraison précise et demandez un geste commercial.",
    points: ["Votre attente depuis deux semaines", "Une date de livraison précise", "Un geste commercial"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-2",
    title: "Échanger un article",
    situation: "Vous avez acheté des chaussures en ligne, mais elles sont trop petites.",
    sourceMessage: {
      from: "Chaussures & Co",
      subject: "Merci pour votre achat",
      body: "Bonjour,\nMerci pour votre achat sur notre site.\nVotre avis compte : les chaussures vous plaisent-elles ?\nL'équipe Chaussures & Co",
    },
    instruction: "Répondez au magasin : expliquez que les chaussures sont trop petites, demandez un échange dans une autre taille et demandez comment renvoyer le colis.",
    points: ["Le problème de taille", "La demande d'échange", "Une question sur le renvoi du colis"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-3",
    title: "Signaler une panne",
    situation: "Votre aspirateur, encore sous garantie, est tombé en panne.",
    sourceMessage: {
      from: "Service après-vente ÉlectroHome",
      subject: "Votre demande de réparation",
      body: "Bonjour,\nNous avons bien reçu votre demande.\nPouvez-vous décrire le problème et nous donner la date d'achat de l'appareil ?\nLe service après-vente",
    },
    instruction: "Répondez au service après-vente : décrivez la panne, donnez la date d'achat et rappelez que l'appareil est sous garantie.",
    points: ["La description de la panne", "La date d'achat", "La garantie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-4",
    title: "Demander un remboursement",
    situation: "Vous avez reçu une lampe différente de la photo du site.",
    sourceMessage: {
      from: "Déco en Ligne",
      subject: "Votre colis est arrivé",
      body: "Bonjour,\nVotre colis a été livré hier.\nNous espérons que la lampe vous plaît !\nDéco en Ligne",
    },
    instruction: "Répondez au site : expliquez que la lampe ne correspond pas à la photo, demandez un remboursement et demandez comment renvoyer l'article.",
    points: ["Le problème (article différent)", "La demande de remboursement", "Une question sur le renvoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-5",
    title: "Conseiller une amie",
    situation: "Une amie veut acheter un canapé et vous demande conseil.",
    sourceMessage: {
      from: "Nadia",
      subject: "Ton canapé",
      body: "Salut !\nJ'ai vu ton nouveau canapé, il est super !\nTu l'as acheté où ? Il a coûté combien ? C'était les soldes ?\nNadia",
    },
    instruction: "Répondez à Nadia : dites où vous avez acheté le canapé, donnez le prix payé pendant les soldes et donnez-lui un conseil pour son achat.",
    points: ["Le magasin", "Le prix pendant les soldes", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-6",
    title: "Livraison manquée",
    situation: "Le livreur est passé pendant votre absence.",
    sourceMessage: {
      from: "TransExpress",
      subject: "Livraison impossible",
      body: "Bonjour,\nNotre livreur est passé aujourd'hui à 10 h, mais personne n'a ouvert.\nMerci de nous proposer une nouvelle date de livraison.\nTransExpress",
    },
    instruction: "Répondez au transporteur : expliquez pourquoi vous étiez absent(e), proposez deux nouvelles dates et donnez votre numéro de téléphone.",
    points: ["La raison de votre absence", "Deux nouvelles dates", "Votre numéro de téléphone"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-7",
    title: "Question sur les soldes",
    situation: "Votre magasin préféré annonce les soldes d'hiver.",
    sourceMessage: {
      from: "Magasin Le Bazar",
      subject: "Les soldes commencent !",
      body: "Bonjour,\nLes soldes d'hiver commencent lundi : jusqu'à 50 % de réduction !\nLe magasin est ouvert du lundi au samedi, de 9 h à 19 h.\nÀ bientôt,\nLe Bazar",
    },
    instruction: "Répondez au magasin : demandez si la machine à café que vous voulez est en soldes, demandez le nouveau prix et demandez si on peut la réserver.",
    points: ["Une question sur la machine à café", "Le nouveau prix", "Une question sur la réservation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-8",
    title: "Vendre son vélo",
    situation: "Vous vendez votre vélo sur un site de petites annonces. Un acheteur vous écrit.",
    sourceMessage: {
      from: "Julien",
      subject: "Votre annonce : vélo",
      body: "Bonjour,\nVotre vélo m'intéresse. Il est en bon état ?\nLe prix est-il négociable ? Quand est-ce que je peux le voir ?\nJulien",
    },
    instruction: "Répondez à Julien : décrivez l'état du vélo, dites si le prix est négociable et proposez un rendez-vous pour le voir.",
    points: ["L'état du vélo", "Le prix", "Un rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-9",
    title: "Refuser une offre",
    situation: "Le magasin vous propose une extension de garantie payante.",
    sourceMessage: {
      from: "Magasin ÉlectroHome",
      subject: "Extension de garantie",
      body: "Bonjour,\nPour 89 francs, vous pouvez prolonger la garantie de votre aspirateur de deux ans.\nÊtes-vous intéressé(e) ?\nLe service clients",
    },
    instruction: "Répondez au magasin : refusez poliment l'offre, expliquez pourquoi et posez une question sur la garantie actuelle.",
    points: ["Le refus poli", "La raison", "Une question sur la garantie actuelle"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-10",
    title: "Raconter un achat",
    situation: "Une amie veut savoir si vous êtes content(e) de votre nouveau lave-linge.",
    sourceMessage: {
      from: "Sara",
      subject: "Ton lave-linge",
      body: "Coucou,\nAlors, ce nouveau lave-linge ? Il marche bien ?\nTu l'as payé cher ? Moi aussi, je dois changer le mien.\nSara",
    },
    instruction: "Répondez à Sara : racontez votre achat, donnez le prix et dites si vous êtes content(e) de la machine.",
    points: ["L'histoire de l'achat", "Le prix", "Votre avis sur la machine"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-11",
    title: "Livraison retardée",
    situation: "Votre commande de chaussures a deux semaines de retard.",
sourceMessage: {
  from: "SportDirect",
  subject: "Retard de livraison — commande 5521",
  body: "Bonjour,\nVotre commande 5521 a pris du retard.\nNous faisons notre maximum pour l'expédier.\nSportDirect",
},    instruction: "Répondez : rappelez la date de commande, exprimez votre mécontentement et demandez une date précise.",
    points: ["La date de commande", "Votre mécontentement", "Une date de livraison"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-12",
    title: "Produit défectueux",
    situation: "Un grille-pain acheté en ligne ne fonctionne pas.",
sourceMessage: {
  from: "CuisineShop",
  subject: "Votre achat — grille-pain",
  body: "Bonjour,\nMerci pour votre achat.\nAvez-vous des questions sur votre produit ?\nCuisineShop",
},    instruction: "Répondez : décrivez le problème, demandez un remboursement ou un échange et joignez une photo si possible.",
    points: ["Le problème constaté", "Votre demande", "Votre disponibilité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-13",
    title: "Demande de facture",
    situation: "Vous avez besoin d'une facture pour un achat professionnel.",
sourceMessage: {
  from: "Bureau Plus",
  subject: "Merci pour votre visite",
  body: "Bonjour,\nMerci d'avoir visité notre magasin.\nÀ bientôt !\nBureau Plus",
},    instruction: "Répondez : rappelez l'achat, donnez vos coordonnées professionnelles et demandez la facture par e-mail.",
    points: ["La référence d'achat", "Vos coordonnées pro", "Votre demande de facture"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-14",
    title: "Annulation commande",
    situation: "Vous voulez annuler une commande passée hier.",
sourceMessage: {
  from: "TechStore",
  subject: "Confirmation commande 8812",
  body: "Bonjour,\nVotre commande 8812 est confirmée.\nExpédition prévue demain.\nTechStore",
},    instruction: "Répondez : donnez le numéro de commande, expliquez pourquoi vous annulez et demandez confirmation.",
    points: ["Le numéro de commande", "La raison d'annulation", "Demande de confirmation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-15",
    title: "Question avant achat",
    situation: "Vous hésitez à acheter un canapé sur un site.",
sourceMessage: {
  from: "Sophie M.",
  subject: "Canapé d'occasion — votre message",
  body: "Bonjour,\nMerci pour votre message sur l'annonce.\nLe canapé est toujours disponible.\nSophie",
},    instruction: "Répondez au vendeur : posez des questions sur les dimensions, l'état et la livraison.",
    points: ["Deux questions sur le canapé", "Une question sur la livraison", "Votre proposition de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-16",
    title: "Remerciement vendeur",
    situation: "Vous avez reçu un objet en très bon état.",
sourceMessage: {
  from: "Marc L.",
  subject: "Vente tablette — confirmation",
  body: "Bonjour,\nLa tablette vous a-t-elle été livrée correctement ?\nMarc",
},    instruction: "Répondez : remerciez le vendeur, confirmez que tout est correct et laissez un avis positif.",
    points: ["Votre remerciement", "Confirmation de l'état", "Votre avis positif"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-17",
    title: "Réclamation prix",
    situation: "Le prix facturé est différent du prix affiché.",
sourceMessage: {
  from: "MegaPromo",
  subject: "Votre facture n° 3340",
  body: "Bonjour,\nVeuillez trouver ci-joint votre facture.\nMegaPromo",
},    instruction: "Répondez : expliquez l'erreur, joignez une capture d'écran et demandez un remboursement de la différence.",
    points: ["L'erreur de prix", "La preuve", "Votre demande de remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-18",
    title: "Demande garantie",
    situation: "Votre appareil est en panne sous garantie.",
sourceMessage: {
  from: "ÉlectroSAV",
  subject: "Garantie — votre demande",
  body: "Bonjour,\nNous avons bien reçu votre message.\nÉlectroSAV",
},    instruction: "Répondez : rappelez la date d'achat, décrivez la panne et demandez les démarches de retour.",
    points: ["La date d'achat", "La panne", "Les démarches souhaitées"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-19",
    title: "Offre commerciale",
    situation: "Un magasin vous propose une carte de fidélité.",
sourceMessage: {
  from: "Fidélité Max",
  subject: "Découvrez notre carte avantages",
  body: "Bonjour,\nProfitez de -10 % avec notre carte fidélité.\nFidélité Max",
},    instruction: "Répondez : posez des questions sur les avantages, les conditions et dites si vous êtes intéressé(e).",
    points: ["Deux questions sur la carte", "Votre intérêt ou refus", "Une formule de politesse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-1-pee-20",
    title: "Confirmation retrait",
    situation: "Vous devez confirmer le retrait d'un colis en point relais.",
sourceMessage: {
  from: "ColisRelais",
  subject: "Votre colis est arrivé",
  body: "Bonjour,\nVotre colis vous attend au point relais.\nColisRelais",
},    instruction: "Répondez : confirmez votre passage, indiquez un créneau horaire et demandez l'adresse exacte.",
    points: ["Votre confirmation", "Le créneau horaire", "Demande d'adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.2 — Se déplacer
   ════════════════════════════════════════════════════════════════════════════ */

const E9_2_CE_EMAIL_TEXT = `De : Transports de la Ville (TVL)
Objet : Travaux sur la ligne 12

Bonjour,

À partir du lundi 4 mai, des travaux commencent sur la ligne 12 du tram.
Les travaux dureront trois semaines, jusqu'au vendredi 22 mai.
Pendant cette période, les trams ne circuleront pas entre la gare et la place du Marché.
Une navette gratuite remplacera le tram toutes les dix minutes, de 6 h à 22 h.
L'arrêt de la navette se trouve devant la poste, à la sortie nord de la gare.
Attention : le matin, comptez quinze minutes de trajet en plus.
Les abonnements restent valables dans la navette et sur toutes les autres lignes.
Pour plus d'informations, consultez notre application ou appelez le 021 555 66 77.

Avec nos meilleures salutations,
Les Transports de la Ville`;

const E9_2_CE_EMAIL_POOL = buildExpressPool("e9-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Sur quelle ligne y a-t-il des travaux ?",
    text: ["Sur la ligne 12", "Sur la ligne 2", "Sur la ligne 21"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Des travaux commencent sur la ligne _________ du tram.",
    fill: "12",
    fillA: ["douze"],
    vfQ: "Les travaux concernent la ligne 12 du tram.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quand commencent les travaux ?",
    text: ["Le lundi 4 mai", "Le vendredi 22 mai", "Le lundi 4 mars"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "À partir du lundi 4 _________, des travaux commencent.",
    fill: "mai",
    vfQ: "Les travaux commencent le lundi 4 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de temps durent les travaux ?",
    text: ["Trois semaines", "Trois jours", "Trois mois"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les travaux dureront trois _________, jusqu'au vendredi 22 mai.",
    fill: "semaines",
    vfQ: "Les travaux durent trois mois.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Qu'est-ce qui remplace le tram ?",
    text: ["Une navette gratuite", "Un train spécial", "Des taxis"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Une _________ gratuite remplacera le tram.",
    fill: "navette",
    vfQ: "La navette est payante.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "La navette passe tous les combien ?",
    text: ["Toutes les dix minutes", "Toutes les trente minutes", "Une fois par heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La navette remplacera le tram toutes les _________ minutes.",
    fill: "dix",
    fillA: ["10"],
    vfQ: "La navette passe toutes les dix minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Où se trouve l'arrêt de la navette ?",
    text: ["Devant la poste", "Devant la mairie", "Sur la place du Marché"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'arrêt de la navette se trouve devant la _________.",
    fill: "poste",
    vfQ: "L'arrêt de la navette est devant la poste.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Combien de temps de trajet faut-il compter en plus le matin ?",
    text: ["Quinze minutes", "Cinq minutes", "Une heure"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le matin, comptez _________ minutes de trajet en plus.",
    fill: "quinze",
    fillA: ["15"],
    vfQ: "Le matin, le trajet est plus court que d'habitude.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Les abonnements sont-ils valables dans la navette ?",
    text: [
      "Oui, ils restent valables",
      "Non, il faut un nouveau billet",
      "Seulement le week-end",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les abonnements restent _________ dans la navette.",
    fill: "valables",
    vfQ: "Il faut acheter un nouveau billet pour la navette.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Jusqu'à quelle heure circule la navette ?",
    text: ["Jusqu'à 22 h", "Jusqu'à 20 h", "Jusqu'à minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La navette circule de 6 h à _________ h.",
    fill: "22",
    fillA: ["vingt-deux"],
    vfQ: "La navette circule de 6 h à 22 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Entre quels arrêts le tram ne circule-t-il pas ?",
    text: [
      "Entre la gare et la place du Marché",
      "Entre la gare et l'hôpital",
      "Entre la poste et le stade",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les trams ne _________ pas entre la gare et la place du Marché.",
    fill: "circuleront",
    vfQ: "Le tram circule normalement entre la gare et la place du Marché.",
    vfC: 1,
  }),
]);


const E9_2_CE_EMAIL_2_TEXT = `Info E-mail déplacements — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_2_POOL = buildExpressPool("e9-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_3_TEXT = `Info E-mail déplacements — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_3_POOL = buildExpressPool("e9-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_4_TEXT = `Info E-mail déplacements — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_4_POOL = buildExpressPool("e9-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_5_TEXT = `Info E-mail déplacements — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_5_POOL = buildExpressPool("e9-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_6_TEXT = `Info E-mail déplacements — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_6_POOL = buildExpressPool("e9-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_7_TEXT = `Info E-mail déplacements — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_7_POOL = buildExpressPool("e9-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_8_TEXT = `Info E-mail déplacements — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_8_POOL = buildExpressPool("e9-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_9_TEXT = `Info E-mail déplacements — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_9_POOL = buildExpressPool("e9-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_10_TEXT = `Info E-mail déplacements — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_10_POOL = buildExpressPool("e9-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_11_TEXT = `Info E-mail déplacements — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_11_POOL = buildExpressPool("e9-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_12_TEXT = `Info E-mail déplacements — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_12_POOL = buildExpressPool("e9-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_13_TEXT = `Info E-mail déplacements — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_13_POOL = buildExpressPool("e9-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_14_TEXT = `Info E-mail déplacements — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_14_POOL = buildExpressPool("e9-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_15_TEXT = `Info E-mail déplacements — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_15_POOL = buildExpressPool("e9-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_16_TEXT = `Info E-mail déplacements — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_16_POOL = buildExpressPool("e9-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_17_TEXT = `Info E-mail déplacements — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_17_POOL = buildExpressPool("e9-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_18_TEXT = `Info E-mail déplacements — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_18_POOL = buildExpressPool("e9-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_19_TEXT = `Info E-mail déplacements — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_19_POOL = buildExpressPool("e9-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

const E9_2_CE_EMAIL_20_TEXT = `Info E-mail déplacements — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail déplacements.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_2_CE_EMAIL_20_POOL = buildExpressPool("e9-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail déplacements", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail déplacements.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail déplacements.",
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

export const E9_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-2-ce-email",
  readingText: E9_2_CE_EMAIL_TEXT,
  questionPool: E9_2_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e9-2-ce-email-2",
  readingText: E9_2_CE_EMAIL_2_TEXT,
  questionPool: E9_2_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-3",
  readingText: E9_2_CE_EMAIL_3_TEXT,
  questionPool: E9_2_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-4",
  readingText: E9_2_CE_EMAIL_4_TEXT,
  questionPool: E9_2_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-5",
  readingText: E9_2_CE_EMAIL_5_TEXT,
  questionPool: E9_2_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-6",
  readingText: E9_2_CE_EMAIL_6_TEXT,
  questionPool: E9_2_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-7",
  readingText: E9_2_CE_EMAIL_7_TEXT,
  questionPool: E9_2_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-8",
  readingText: E9_2_CE_EMAIL_8_TEXT,
  questionPool: E9_2_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-9",
  readingText: E9_2_CE_EMAIL_9_TEXT,
  questionPool: E9_2_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-10",
  readingText: E9_2_CE_EMAIL_10_TEXT,
  questionPool: E9_2_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-11",
  readingText: E9_2_CE_EMAIL_11_TEXT,
  questionPool: E9_2_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-12",
  readingText: E9_2_CE_EMAIL_12_TEXT,
  questionPool: E9_2_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-13",
  readingText: E9_2_CE_EMAIL_13_TEXT,
  questionPool: E9_2_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-14",
  readingText: E9_2_CE_EMAIL_14_TEXT,
  questionPool: E9_2_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-15",
  readingText: E9_2_CE_EMAIL_15_TEXT,
  questionPool: E9_2_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-16",
  readingText: E9_2_CE_EMAIL_16_TEXT,
  questionPool: E9_2_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-17",
  readingText: E9_2_CE_EMAIL_17_TEXT,
  questionPool: E9_2_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-18",
  readingText: E9_2_CE_EMAIL_18_TEXT,
  questionPool: E9_2_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-19",
  readingText: E9_2_CE_EMAIL_19_TEXT,
  questionPool: E9_2_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e9-2-ce-email-20",
  readingText: E9_2_CE_EMAIL_20_TEXT,
  questionPool: E9_2_CE_EMAIL_20_POOL
}),
];

export const E9_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e9-2-pee-1",
    title: "S'excuser pour un retard",
    situation: "Vous êtes arrivé(e) en retard au travail à cause d'un train supprimé.",
    sourceMessage: {
      from: "M. Blanc",
      subject: "Votre retard de ce matin",
      body: "Bonjour,\nVous êtes arrivé(e) à 10 h ce matin, avec une heure de retard.\nPouvez-vous m'expliquer ce qui s'est passé ?\nM. Blanc",
    },
    instruction: "Répondez à M. Blanc : excusez-vous, expliquez le problème de train et dites comment vous allez éviter ce retard à l'avenir.",
    points: ["L'excuse", "Le problème de train", "Votre solution pour l'avenir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-2",
    title: "Question sur un abonnement",
    situation: "La compagnie de transports vous propose un abonnement annuel.",
    sourceMessage: {
      from: "Transports de la Ville",
      subject: "Offre d'abonnement annuel",
      body: "Bonjour,\nL'abonnement annuel coûte 750 francs au lieu de 900 francs jusqu'à la fin du mois.\nÊtes-vous intéressé(e) ?\nLe service clients",
    },
    instruction: "Répondez à la compagnie : demandez quelles zones sont comprises, s'il existe une réduction pour les étudiants et si on peut payer en plusieurs fois.",
    points: ["Une question sur les zones", "La réduction pour les étudiants", "Le paiement en plusieurs fois"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-3",
    title: "Confirmer un covoiturage",
    situation: "Vous avez réservé un covoiturage pour aller à Berne samedi.",
    sourceMessage: {
      from: "Karim",
      subject: "Covoiturage de samedi",
      body: "Bonjour,\nJe confirme le trajet de samedi pour Berne. Départ à 8 h, place de la Gare.\nVous avez beaucoup de bagages ?\nKarim",
    },
    instruction: "Répondez à Karim : confirmez votre présence, décrivez vos bagages et posez une question sur le lieu de rendez-vous exact.",
    points: ["La confirmation", "Vos bagages", "Une question sur le lieu de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-4",
    title: "Objet perdu dans le bus",
    situation: "Vous avez oublié votre sac dans le bus. Le service des objets trouvés vous répond.",
    sourceMessage: {
      from: "Objets trouvés TVL",
      subject: "Votre demande",
      body: "Bonjour,\nNous avons bien reçu votre message.\nPouvez-vous décrire l'objet perdu et préciser la ligne, le jour et l'heure du trajet ?\nLe service des objets trouvés",
    },
    instruction: "Répondez au service : décrivez votre sac et son contenu, précisez la ligne de bus et donnez le jour et l'heure du trajet.",
    points: ["La description du sac", "La ligne de bus", "Le jour et l'heure du trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-5",
    title: "Expliquer un itinéraire",
    situation: "Un ami doit aller à l'aéroport et vous demande le meilleur trajet.",
    sourceMessage: {
      from: "Diego",
      subject: "Aéroport",
      body: "Salut,\nJe prends l'avion vendredi à 14 h. C'est quoi le plus simple pour aller à l'aéroport ?\nLe train ? Le bus ? Merci !\nDiego",
    },
    instruction: "Répondez à Diego : conseillez le meilleur moyen de transport, expliquez le trajet et donnez la durée et le prix.",
    points: ["Le moyen de transport conseillé", "Le trajet", "La durée et le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-6",
    title: "Demander un remboursement",
    situation: "Votre train a été supprimé et vous avez raté un rendez-vous important.",
    sourceMessage: {
      from: "Compagnie ferroviaire",
      subject: "Votre réclamation",
      body: "Bonjour,\nNous avons bien reçu votre réclamation.\nMerci de nous préciser la date, le numéro du train et de joindre votre billet.\nLe service clients",
    },
    instruction: "Répondez à la compagnie : donnez la date et le numéro du train, expliquez les conséquences pour vous et demandez le remboursement du billet.",
    points: ["La date et le numéro du train", "Les conséquences", "La demande de remboursement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-7",
    title: "Proposer un covoiturage",
    situation: "Une collègue se plaint des embouteillages pour venir au travail.",
    sourceMessage: {
      from: "Élodie",
      subject: "Encore les bouchons !",
      body: "Bonjour,\nCe matin, j'ai passé une heure dans les embouteillages !\nToi aussi, tu viens en voiture ? Tu pars à quelle heure ?\nÉlodie",
    },
    instruction: "Répondez à Élodie : proposez-lui un covoiturage, expliquez vos horaires et proposez de partager les frais d'essence.",
    points: ["La proposition de covoiturage", "Vos horaires", "Le partage des frais"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-8",
    title: "Contester une amende",
    situation: "Vous avez oublié votre abonnement à la maison et vous avez reçu une amende.",
    sourceMessage: {
      from: "Transports de la Ville",
      subject: "Amende n° 5520",
      body: "Bonjour,\nLors du contrôle du 3 avril, vous n'aviez pas de titre de transport valable.\nVous devez payer une amende de 90 francs dans les trente jours.\nLe service clients",
    },
    instruction: "Répondez à la compagnie : expliquez que vous avez un abonnement annuel, dites que vous l'avez oublié ce jour-là et demandez une réduction de l'amende.",
    points: ["Votre abonnement annuel", "L'oubli du 3 avril", "La demande de réduction"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-9",
    title: "Vélos en libre-service",
    situation: "La ville lance un nouveau service de vélos en libre-service.",
    sourceMessage: {
      from: "Ville de Renens",
      subject: "Nouveaux vélos en libre-service",
      body: "Bonjour,\nDès le 1er juin, 200 vélos en libre-service seront disponibles dans la ville.\nLes cent premiers inscrits recevront un mois gratuit.\nLa Ville",
    },
    instruction: "Répondez à la ville : demandez comment s'inscrire, demandez le prix de l'abonnement et demandez où se trouve la station la plus proche de chez vous.",
    points: ["Une question sur l'inscription", "Le prix de l'abonnement", "La station la plus proche"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-10",
    title: "Organiser une visite",
    situation: "Une amie vient vous voir en train samedi.",
    sourceMessage: {
      from: "Paula",
      subject: "À samedi !",
      body: "Coucou,\nJ'arrive samedi ! Je peux prendre le train de 10 h ou celui de 14 h.\nLequel est le mieux ? Tu viens me chercher à la gare ?\nPaula",
    },
    instruction: "Répondez à Paula : choisissez un train, expliquez pourquoi et dites où et quand vous l'attendez à la gare.",
    points: ["Le train choisi", "La raison", "Le lieu de rendez-vous à la gare"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-11",
    title: "Répondre — déplacements (11)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-12",
    title: "Répondre — déplacements (12)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-13",
    title: "Répondre — déplacements (13)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-14",
    title: "Répondre — déplacements (14)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-15",
    title: "Répondre — déplacements (15)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-16",
    title: "Répondre — déplacements (16)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-17",
    title: "Répondre — déplacements (17)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-18",
    title: "Répondre — déplacements (18)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-19",
    title: "Répondre — déplacements (19)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-2-pee-20",
    title: "Répondre — déplacements (20)",
    situation: "Vous avez reçu un e-mail concernant déplacements.",
sourceMessage: {
  from: "Service Déplacements",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant déplacements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.3 — Chercher un logement
   ════════════════════════════════════════════════════════════════════════════ */

const E9_3_CE_EMAIL_TEXT = `De : Régie Bellevue
Objet : Visite de l'appartement — rue des Lilas 15

Bonjour,

Nous avons bien reçu votre demande pour l'appartement de trois pièces à la rue des Lilas 15.
Le loyer est de 1 650 francs par mois, charges comprises.
L'appartement se trouve au cinquième étage et l'immeuble a un ascenseur.
Il est lumineux, avec un balcon exposé sud, et il est libre à partir du 1er juillet.
Une visite est organisée le mercredi 12 juin à 17 h 30, devant l'entrée de l'immeuble.
Si l'appartement vous intéresse, vous devez remplir un dossier de location avec une copie de votre pièce d'identité et vos trois dernières fiches de salaire.
La caution est de deux mois de loyer.
Merci de confirmer votre présence avant lundi.

Avec nos meilleures salutations,
Régie Bellevue`;

const E9_3_CE_EMAIL_POOL = buildExpressPool("e9-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Combien de pièces a l'appartement ?",
    text: ["Trois pièces", "Deux pièces", "Quatre pièces"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre demande pour l'appartement de trois _________ à la rue des Lilas 15.",
    fill: "pièces",
    fillA: ["pieces"],
    vfQ: "L'appartement a trois pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le loyer de l'appartement ?",
    text: [
      "1 650 francs, charges comprises",
      "1 650 francs, sans les charges",
      "1 850 francs, charges comprises",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le loyer est de 1 650 francs par mois, charges _________.",
    fill: "comprises",
    vfQ: "Les charges sont comprises dans le loyer.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "À quel étage se trouve l'appartement ?",
    text: ["Au cinquième étage", "Au premier étage", "Au troisième étage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'appartement se trouve au _________ étage.",
    fill: "cinquième",
    fillA: ["cinquieme", "5e", "5ème", "5"],
    vfQ: "L'appartement est au rez-de-chaussée.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Y a-t-il un ascenseur dans l'immeuble ?",
    text: [
      "Oui, l'immeuble a un ascenseur",
      "Non, il n'y a pas d'ascenseur",
      "Oui, mais il est en panne",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'immeuble a un _________.",
    fill: "ascenseur",
    vfQ: "Il n'y a pas d'ascenseur dans l'immeuble.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quand l'appartement est-il libre ?",
    text: [
      "À partir du 1er juillet",
      "À partir du 12 juin",
      "À partir du 1er juin",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Il est libre à partir du 1er _________.",
    fill: "juillet",
    vfQ: "L'appartement est libre à partir du 1er juillet.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quand a lieu la visite ?",
    text: [
      "Le mercredi 12 juin à 17 h 30",
      "Le mercredi 12 juin à 7 h 30",
      "Le lundi 10 juin à 17 h 30",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Une visite est organisée le mercredi 12 juin à 17 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "La visite a lieu le matin.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Où a lieu le rendez-vous pour la visite ?",
    text: [
      "Devant l'entrée de l'immeuble",
      "Au bureau de la régie",
      "Sur le balcon de l'appartement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le rendez-vous est devant l'_________ de l'immeuble.",
    fill: "entrée",
    fillA: ["entree"],
    vfQ: "Le rendez-vous est devant l'entrée de l'immeuble.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quels documents faut-il pour le dossier de location ?",
    text: [
      "Une pièce d'identité et trois fiches de salaire",
      "Un passeport et une photo",
      "Seulement une lettre de motivation",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vos trois dernières fiches de _________.",
    fill: "salaire",
    vfQ: "Il faut trois fiches de salaire pour le dossier.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Quel est le montant de la caution ?",
    text: ["Deux mois de loyer", "Un mois de loyer", "Trois mois de loyer"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La caution est de _________ mois de loyer.",
    fill: "deux",
    fillA: ["2"],
    vfQ: "La caution est d'un mois de loyer.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quand faut-il confirmer sa présence ?",
    text: ["Avant lundi", "Avant vendredi", "Après la visite"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de confirmer votre présence avant _________.",
    fill: "lundi",
    vfQ: "Il faut confirmer sa présence avant lundi.",
    vfC: 0,
  }),
]);


const E9_3_CE_EMAIL_2_TEXT = `Info E-mail logement — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_2_POOL = buildExpressPool("e9-3-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_3_TEXT = `Info E-mail logement — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_3_POOL = buildExpressPool("e9-3-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_4_TEXT = `Info E-mail logement — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_4_POOL = buildExpressPool("e9-3-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_5_TEXT = `Info E-mail logement — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_5_POOL = buildExpressPool("e9-3-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_6_TEXT = `Info E-mail logement — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_6_POOL = buildExpressPool("e9-3-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_7_TEXT = `Info E-mail logement — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_7_POOL = buildExpressPool("e9-3-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_8_TEXT = `Info E-mail logement — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_8_POOL = buildExpressPool("e9-3-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_9_TEXT = `Info E-mail logement — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_9_POOL = buildExpressPool("e9-3-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_10_TEXT = `Info E-mail logement — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_10_POOL = buildExpressPool("e9-3-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_11_TEXT = `Info E-mail logement — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_11_POOL = buildExpressPool("e9-3-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_12_TEXT = `Info E-mail logement — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_12_POOL = buildExpressPool("e9-3-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_13_TEXT = `Info E-mail logement — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_13_POOL = buildExpressPool("e9-3-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_14_TEXT = `Info E-mail logement — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_14_POOL = buildExpressPool("e9-3-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_15_TEXT = `Info E-mail logement — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_15_POOL = buildExpressPool("e9-3-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_16_TEXT = `Info E-mail logement — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_16_POOL = buildExpressPool("e9-3-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_17_TEXT = `Info E-mail logement — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_17_POOL = buildExpressPool("e9-3-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_18_TEXT = `Info E-mail logement — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_18_POOL = buildExpressPool("e9-3-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_19_TEXT = `Info E-mail logement — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_19_POOL = buildExpressPool("e9-3-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

const E9_3_CE_EMAIL_20_TEXT = `Info E-mail logement — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail logement.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_3_CE_EMAIL_20_POOL = buildExpressPool("e9-3-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail logement", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail logement.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail logement.",
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

export const E9_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-3-ce-email",
  readingText: E9_3_CE_EMAIL_TEXT,
  questionPool: E9_3_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e9-3-ce-email-2",
  readingText: E9_3_CE_EMAIL_2_TEXT,
  questionPool: E9_3_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-3",
  readingText: E9_3_CE_EMAIL_3_TEXT,
  questionPool: E9_3_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-4",
  readingText: E9_3_CE_EMAIL_4_TEXT,
  questionPool: E9_3_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-5",
  readingText: E9_3_CE_EMAIL_5_TEXT,
  questionPool: E9_3_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-6",
  readingText: E9_3_CE_EMAIL_6_TEXT,
  questionPool: E9_3_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-7",
  readingText: E9_3_CE_EMAIL_7_TEXT,
  questionPool: E9_3_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-8",
  readingText: E9_3_CE_EMAIL_8_TEXT,
  questionPool: E9_3_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-9",
  readingText: E9_3_CE_EMAIL_9_TEXT,
  questionPool: E9_3_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-10",
  readingText: E9_3_CE_EMAIL_10_TEXT,
  questionPool: E9_3_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-11",
  readingText: E9_3_CE_EMAIL_11_TEXT,
  questionPool: E9_3_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-12",
  readingText: E9_3_CE_EMAIL_12_TEXT,
  questionPool: E9_3_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-13",
  readingText: E9_3_CE_EMAIL_13_TEXT,
  questionPool: E9_3_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-14",
  readingText: E9_3_CE_EMAIL_14_TEXT,
  questionPool: E9_3_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-15",
  readingText: E9_3_CE_EMAIL_15_TEXT,
  questionPool: E9_3_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-16",
  readingText: E9_3_CE_EMAIL_16_TEXT,
  questionPool: E9_3_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-17",
  readingText: E9_3_CE_EMAIL_17_TEXT,
  questionPool: E9_3_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-18",
  readingText: E9_3_CE_EMAIL_18_TEXT,
  questionPool: E9_3_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-19",
  readingText: E9_3_CE_EMAIL_19_TEXT,
  questionPool: E9_3_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e9-3-ce-email-20",
  readingText: E9_3_CE_EMAIL_20_TEXT,
  questionPool: E9_3_CE_EMAIL_20_POOL
}),
];

export const E9_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e9-3-pee-1",
    title: "Répondre à une annonce",
    situation: "Vous avez vu une annonce pour un appartement de trois pièces.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "Appartement rue des Lilas 15",
      body: "Bonjour,\nMerci de votre intérêt pour l'appartement de trois pièces.\nPouvez-vous vous présenter et nous dire quand vous souhaitez visiter ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : présentez votre situation (travail, famille), dites pourquoi l'appartement vous intéresse et proposez des disponibilités pour une visite.",
    points: ["Votre situation", "Votre intérêt pour l'appartement", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-2",
    title: "Après la visite",
    situation: "Vous avez visité un appartement qui vous plaît beaucoup.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "Suite de votre visite",
      body: "Bonjour,\nMerci pour votre visite d'hier.\nÊtes-vous toujours intéressé(e) par l'appartement ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : confirmez votre intérêt, dites que vous envoyez le dossier de location et posez une question sur la caution.",
    points: ["Votre intérêt", "L'envoi du dossier", "Une question sur la caution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-3",
    title: "Refuser un appartement",
    situation: "La régie vous propose un appartement, mais le loyer est trop élevé.",
    sourceMessage: {
      from: "Régie du Parc",
      subject: "Proposition de logement",
      body: "Bonjour,\nNous pouvons vous proposer un quatre pièces au centre-ville, pour 2 400 francs par mois.\nSouhaitez-vous le visiter ?\nRégie du Parc",
    },
    instruction: "Répondez à la régie : refusez poliment, expliquez que le loyer est trop élevé et donnez votre budget maximum pour une autre proposition.",
    points: ["Le refus poli", "La raison (loyer trop élevé)", "Votre budget maximum"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-4",
    title: "Demander des précisions",
    situation: "Une annonce vous intéresse, mais il manque des informations.",
    sourceMessage: {
      from: "Régie Horizon",
      subject: "Studio à louer — quartier de la gare",
      body: "Bonjour,\nNotre studio proche de la gare est encore disponible : 980 francs par mois.\nContactez-nous pour plus d'informations.\nRégie Horizon",
    },
    instruction: "Répondez à la régie : demandez si les charges sont comprises, à quel étage se trouve le studio et s'il y a une cave ou un parking.",
    points: ["Les charges", "L'étage", "La cave ou le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-5",
    title: "Compléter son dossier",
    situation: "La régie a reçu votre dossier de location, mais il manque un document.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "Dossier incomplet",
      body: "Bonjour,\nVotre dossier de location est presque complet.\nIl manque votre dernière fiche de salaire. Pouvez-vous nous l'envoyer rapidement ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : excusez-vous, dites quand vous envoyez le document manquant et demandez quand vous aurez une réponse.",
    points: ["L'excuse", "L'envoi du document", "Une question sur la réponse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-6",
    title: "Conseiller un ami",
    situation: "Un ami cherche un logement et vous demande comment vous avez trouvé le vôtre.",
    sourceMessage: {
      from: "Omar",
      subject: "Recherche d'appartement",
      body: "Salut,\nJe cherche un deux pièces depuis deux mois, mais je ne trouve rien.\nComment tu as trouvé ton appartement ? Tu as des conseils ?\nOmar",
    },
    instruction: "Répondez à Omar : racontez comment vous avez trouvé votre appartement, conseillez-lui des sites d'annonces et expliquez ce qu'il faut préparer pour le dossier.",
    points: ["Votre recherche", "Les sites d'annonces", "Les documents du dossier"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-7",
    title: "Signaler un problème",
    situation: "Vous venez d'emménager et le chauffage ne fonctionne pas bien.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "Votre emménagement",
      body: "Bonjour,\nVous êtes installé(e) depuis une semaine dans votre nouvel appartement.\nTout se passe bien ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : signalez le problème de chauffage, demandez le passage d'un technicien et dites quand vous êtes à la maison.",
    points: ["Le problème de chauffage", "La demande de réparation", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-8",
    title: "État des lieux",
    situation: "La régie vous propose une date pour l'état des lieux d'entrée.",
    sourceMessage: {
      from: "Régie Bellevue",
      subject: "État des lieux d'entrée",
      body: "Bonjour,\nNous vous proposons l'état des lieux le mardi 28 juin à 9 h, dans l'appartement.\nCette date vous convient-elle ?\nRégie Bellevue",
    },
    instruction: "Répondez à la régie : expliquez que vous travaillez mardi matin, proposez une autre date et demandez quand vous recevrez les clés.",
    points: ["Le problème avec la date", "Une autre proposition", "Une question sur les clés"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-9",
    title: "Trouver un colocataire",
    situation: "Vous cherchez un colocataire. Une personne répond à votre annonce.",
    sourceMessage: {
      from: "Léa",
      subject: "Votre annonce de colocation",
      body: "Bonjour,\nVotre annonce de colocation m'intéresse beaucoup.\nLa chambre est encore libre ? Le loyer est de combien ?\nLéa",
    },
    instruction: "Répondez à Léa : décrivez la chambre et l'appartement, donnez le montant du loyer et des charges, et proposez une visite.",
    points: ["La description de la chambre", "Le loyer et les charges", "Une proposition de visite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-10",
    title: "Annoncer son départ",
    situation: "Vous avez trouvé un logement plus grand. Votre régie actuelle vous écrit.",
    sourceMessage: {
      from: "Régie du Lac",
      subject: "Renouvellement de votre bail",
      body: "Bonjour,\nVotre bail se termine le 30 septembre.\nSouhaitez-vous le renouveler pour une année ?\nRégie du Lac",
    },
    instruction: "Répondez à la régie : annoncez votre départ, expliquez pourquoi vous partez et posez une question sur l'état des lieux de sortie.",
    points: ["L'annonce du départ", "La raison", "Une question sur l'état des lieux"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-11",
    title: "Répondre — logement (11)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-12",
    title: "Répondre — logement (12)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-13",
    title: "Répondre — logement (13)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-14",
    title: "Répondre — logement (14)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-15",
    title: "Répondre — logement (15)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-16",
    title: "Répondre — logement (16)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-17",
    title: "Répondre — logement (17)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-18",
    title: "Répondre — logement (18)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-19",
    title: "Répondre — logement (19)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-3-pee-20",
    title: "Répondre — logement (20)",
    situation: "Vous avez reçu un e-mail concernant logement.",
sourceMessage: {
  from: "Service Logement",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant logement.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.4 — Faire des démarches administratives
   ════════════════════════════════════════════════════════════════════════════ */

const E9_4_CE_EMAIL_TEXT = `De : Administration communale de Renens
Objet : Renouvellement de votre permis de séjour

Bonjour,

Votre permis de séjour arrive à expiration le 30 septembre.
Pour le renouveler, vous devez prendre rendez-vous au bureau des habitants.
Le bureau est ouvert du lundi au vendredi, de 8 h à 11 h 30, et le jeudi aussi l'après-midi, de 14 h à 18 h.
Apportez votre passeport, une photo récente, votre contrat de travail et une attestation de votre assurance maladie.
Le renouvellement coûte 65 francs. Vous pouvez payer par carte ou en espèces.
Attention : faites votre demande au moins deux semaines avant l'expiration.
Le bureau se trouve au premier étage de la mairie, guichet 3.

Avec nos meilleures salutations,
Le bureau des habitants`;

const E9_4_CE_EMAIL_POOL = buildExpressPool("e9-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand le permis de séjour expire-t-il ?",
    text: ["Le 30 septembre", "Le 13 septembre", "Le 30 novembre"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre permis de séjour arrive à expiration le 30 _________.",
    fill: "septembre",
    vfQ: "Le permis de séjour expire le 30 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Que faut-il faire pour renouveler le permis ?",
    text: [
      "Prendre rendez-vous au bureau des habitants",
      "Envoyer une lettre à la police",
      "Aller à la banque",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous devez prendre rendez-vous au bureau des _________.",
    fill: "habitants",
    vfQ: "Il faut prendre rendez-vous à la banque.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Quels jours le bureau est-il ouvert le matin ?",
    text: ["Du lundi au vendredi", "Seulement le jeudi", "Le samedi et le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bureau est ouvert du lundi au _________, de 8 h à 11 h 30.",
    fill: "vendredi",
    vfQ: "Le bureau est ouvert le samedi matin.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel jour le bureau est-il aussi ouvert l'après-midi ?",
    text: ["Le jeudi", "Le lundi", "Le mardi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bureau est aussi ouvert le _________ après-midi, de 14 h à 18 h.",
    fill: "jeudi",
    vfQ: "Le jeudi, le bureau est ouvert l'après-midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quels documents faut-il apporter ?",
    text: [
      "Le passeport, une photo, le contrat de travail et une attestation d'assurance",
      "Seulement le passeport",
      "Le permis de conduire et une lettre",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Apportez votre passeport, une _________ récente et votre contrat de travail.",
    fill: "photo",
    vfQ: "Il faut apporter une photo récente.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Combien coûte le renouvellement ?",
    text: ["65 francs", "45 francs", "95 francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le renouvellement coûte _________ francs.",
    fill: "65",
    fillA: ["soixante-cinq"],
    vfQ: "Le renouvellement est gratuit.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Comment peut-on payer ?",
    text: [
      "Par carte ou en espèces",
      "Par virement seulement",
      "En espèces seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez payer par carte ou en _________.",
    fill: "espèces",
    fillA: ["especes"],
    vfQ: "On peut payer par carte.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand faut-il faire la demande ?",
    text: [
      "Au moins deux semaines avant l'expiration",
      "La veille de l'expiration",
      "Après l'expiration",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Faites votre demande au moins deux _________ avant l'expiration.",
    fill: "semaines",
    vfQ: "On peut faire la demande après l'expiration du permis.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Où se trouve le bureau des habitants ?",
    text: [
      "Au premier étage de la mairie",
      "Au troisième étage de la gare",
      "À la poste",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le bureau se trouve au _________ étage de la mairie.",
    fill: "premier",
    fillA: ["1er", "1"],
    vfQ: "Le bureau est au premier étage de la mairie.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "À quel guichet faut-il aller ?",
    text: ["Au guichet 3", "Au guichet 8", "Au guichet 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au premier étage de la mairie, guichet _________.",
    fill: "3",
    fillA: ["trois"],
    vfQ: "Il faut aller au guichet 5.",
    vfC: 1,
  }),
]);


const E9_4_CE_EMAIL_2_TEXT = `Info E-mail démarches administratives — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_2_POOL = buildExpressPool("e9-4-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_3_TEXT = `Info E-mail démarches administratives — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_3_POOL = buildExpressPool("e9-4-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_4_TEXT = `Info E-mail démarches administratives — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_4_POOL = buildExpressPool("e9-4-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_5_TEXT = `Info E-mail démarches administratives — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_5_POOL = buildExpressPool("e9-4-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_6_TEXT = `Info E-mail démarches administratives — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_6_POOL = buildExpressPool("e9-4-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_7_TEXT = `Info E-mail démarches administratives — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_7_POOL = buildExpressPool("e9-4-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_8_TEXT = `Info E-mail démarches administratives — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_8_POOL = buildExpressPool("e9-4-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_9_TEXT = `Info E-mail démarches administratives — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_9_POOL = buildExpressPool("e9-4-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_10_TEXT = `Info E-mail démarches administratives — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_10_POOL = buildExpressPool("e9-4-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_11_TEXT = `Info E-mail démarches administratives — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_11_POOL = buildExpressPool("e9-4-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_12_TEXT = `Info E-mail démarches administratives — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_12_POOL = buildExpressPool("e9-4-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_13_TEXT = `Info E-mail démarches administratives — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_13_POOL = buildExpressPool("e9-4-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_14_TEXT = `Info E-mail démarches administratives — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_14_POOL = buildExpressPool("e9-4-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_15_TEXT = `Info E-mail démarches administratives — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_15_POOL = buildExpressPool("e9-4-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_16_TEXT = `Info E-mail démarches administratives — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_16_POOL = buildExpressPool("e9-4-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_17_TEXT = `Info E-mail démarches administratives — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_17_POOL = buildExpressPool("e9-4-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_18_TEXT = `Info E-mail démarches administratives — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_18_POOL = buildExpressPool("e9-4-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_19_TEXT = `Info E-mail démarches administratives — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_19_POOL = buildExpressPool("e9-4-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

const E9_4_CE_EMAIL_20_TEXT = `Info E-mail démarches administratives — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail démarches administratives.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_4_CE_EMAIL_20_POOL = buildExpressPool("e9-4-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail démarches administratives", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail démarches administratives.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail démarches administratives.",
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

export const E9_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-4-ce-email",
  readingText: E9_4_CE_EMAIL_TEXT,
  questionPool: E9_4_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e9-4-ce-email-2",
  readingText: E9_4_CE_EMAIL_2_TEXT,
  questionPool: E9_4_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-3",
  readingText: E9_4_CE_EMAIL_3_TEXT,
  questionPool: E9_4_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-4",
  readingText: E9_4_CE_EMAIL_4_TEXT,
  questionPool: E9_4_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-5",
  readingText: E9_4_CE_EMAIL_5_TEXT,
  questionPool: E9_4_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-6",
  readingText: E9_4_CE_EMAIL_6_TEXT,
  questionPool: E9_4_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-7",
  readingText: E9_4_CE_EMAIL_7_TEXT,
  questionPool: E9_4_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-8",
  readingText: E9_4_CE_EMAIL_8_TEXT,
  questionPool: E9_4_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-9",
  readingText: E9_4_CE_EMAIL_9_TEXT,
  questionPool: E9_4_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-10",
  readingText: E9_4_CE_EMAIL_10_TEXT,
  questionPool: E9_4_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-11",
  readingText: E9_4_CE_EMAIL_11_TEXT,
  questionPool: E9_4_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-12",
  readingText: E9_4_CE_EMAIL_12_TEXT,
  questionPool: E9_4_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-13",
  readingText: E9_4_CE_EMAIL_13_TEXT,
  questionPool: E9_4_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-14",
  readingText: E9_4_CE_EMAIL_14_TEXT,
  questionPool: E9_4_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-15",
  readingText: E9_4_CE_EMAIL_15_TEXT,
  questionPool: E9_4_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-16",
  readingText: E9_4_CE_EMAIL_16_TEXT,
  questionPool: E9_4_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-17",
  readingText: E9_4_CE_EMAIL_17_TEXT,
  questionPool: E9_4_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-18",
  readingText: E9_4_CE_EMAIL_18_TEXT,
  questionPool: E9_4_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-19",
  readingText: E9_4_CE_EMAIL_19_TEXT,
  questionPool: E9_4_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e9-4-ce-email-20",
  readingText: E9_4_CE_EMAIL_20_TEXT,
  questionPool: E9_4_CE_EMAIL_20_POOL
}),
];

export const E9_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e9-4-pee-1",
    title: "Confirmer un rendez-vous",
    situation: "La commune vous propose un rendez-vous pour renouveler votre permis de séjour.",
    sourceMessage: {
      from: "Bureau des habitants",
      subject: "Votre rendez-vous",
      body: "Bonjour,\nNous vous proposons un rendez-vous le jeudi 12 septembre à 14 h 30, guichet 3.\nMerci de confirmer votre présence.\nLe bureau des habitants",
    },
    instruction: "Répondez au bureau : confirmez votre présence, demandez la liste des documents à apporter et demandez combien de temps dure le rendez-vous.",
    points: ["La confirmation", "La liste des documents", "La durée du rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-2",
    title: "Déplacer un rendez-vous",
    situation: "Vous avez un rendez-vous à la commune, mais vous devez travailler ce jour-là.",
    sourceMessage: {
      from: "Bureau des habitants",
      subject: "Rappel de rendez-vous",
      body: "Bonjour,\nNous vous rappelons votre rendez-vous du mardi 17 juin à 10 h.\nEn cas d'empêchement, merci de nous prévenir.\nLe bureau des habitants",
    },
    instruction: "Répondez au bureau : excusez-vous, expliquez que vous travaillez mardi matin et proposez deux autres dates possibles.",
    points: ["L'excuse", "La raison (travail)", "Deux autres dates"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-3",
    title: "Envoyer un document manquant",
    situation: "Votre demande de permis est bloquée : il manque un document.",
    sourceMessage: {
      from: "Service de la population",
      subject: "Dossier incomplet",
      body: "Bonjour,\nVotre demande de renouvellement est incomplète.\nIl manque l'attestation de votre assurance maladie. Merci de nous l'envoyer avant le 15 du mois.\nLe service de la population",
    },
    instruction: "Répondez au service : excusez-vous, expliquez que vous avez demandé l'attestation à votre assurance et dites quand vous l'enverrez.",
    points: ["L'excuse", "La démarche auprès de l'assurance", "La date d'envoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-4",
    title: "Question à l'assurance",
    situation: "Votre assurance maladie vous propose de changer de franchise pour payer moins cher.",
    sourceMessage: {
      from: "Assurance SantéPlus",
      subject: "Votre prime 2027",
      body: "Bonjour,\nVotre prime va augmenter de 20 francs par mois en janvier.\nAvec une franchise plus haute, vous pouvez payer moins cher chaque mois.\nVotre conseiller",
    },
    instruction: "Répondez à l'assurance : demandez une explication simple sur la franchise, demandez les prix des différentes options et demandez la date limite pour changer.",
    points: ["Une question sur la franchise", "Les prix des options", "La date limite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-5",
    title: "Annoncer un déménagement",
    situation: "Vous avez déménagé dans une nouvelle commune le mois dernier.",
    sourceMessage: {
      from: "Contrôle des habitants",
      subject: "Votre arrivée dans la commune",
      body: "Bonjour,\nBienvenue dans notre commune !\nPour votre inscription, merci de nous confirmer votre nouvelle adresse et la date de votre arrivée.\nLe contrôle des habitants",
    },
    instruction: "Répondez à la commune : donnez votre nouvelle adresse complète, précisez la date de votre déménagement et demandez quels documents il faut apporter pour l'inscription.",
    points: ["La nouvelle adresse", "La date du déménagement", "Les documents pour l'inscription"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-6",
    title: "Aider un ami",
    situation: "Un ami doit renouveler son permis de séjour pour la première fois.",
    sourceMessage: {
      from: "Ahmed",
      subject: "Permis de séjour",
      body: "Salut,\nMon permis de séjour se termine dans deux mois. Toi, tu as déjà fait le renouvellement, non ?\nComment ça marche ? C'est cher ?\nAhmed",
    },
    instruction: "Répondez à Ahmed : expliquez les étapes du renouvellement, donnez la liste des documents et indiquez le prix et les délais.",
    points: ["Les étapes", "Les documents", "Le prix et les délais"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-7",
    title: "Demander une attestation",
    situation: "Votre employeur a besoin d'une attestation de domicile.",
    sourceMessage: {
      from: "Service RH — Entreprise Nova",
      subject: "Document demandé",
      body: "Bonjour,\nPour compléter votre dossier, nous avons besoin d'une attestation de domicile de votre commune.\nMerci de nous l'envoyer avant la fin du mois.\nLe service RH",
    },
    instruction: "Répondez au service RH : dites que vous allez demander l'attestation à la commune, précisez quand vous pourrez l'envoyer et demandez si un document PDF suffit.",
    points: ["La démarche à la commune", "La date d'envoi", "Une question sur le format"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-8",
    title: "Refuser une offre d'assurance",
    situation: "Une assurance vous propose un contrat supplémentaire par e-mail.",
    sourceMessage: {
      from: "Assurance Protecta",
      subject: "Offre spéciale : assurance ménage",
      body: "Bonjour,\nNous vous proposons notre assurance ménage à 19 francs par mois, avec un mois gratuit.\nÊtes-vous intéressé(e) ?\nAssurance Protecta",
    },
    instruction: "Répondez à l'assurance : refusez poliment l'offre, expliquez que vous avez déjà une assurance ménage et demandez de ne plus recevoir de publicité.",
    points: ["Le refus poli", "Votre assurance actuelle", "La demande d'arrêt de la publicité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-9",
    title: "Problème avec le site de la commune",
    situation: "La commune annonce un nouveau système de rendez-vous en ligne, mais le site ne fonctionne pas chez vous.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Nouveau : rendez-vous en ligne",
      body: "Bonjour,\nVous pouvez maintenant prendre rendez-vous en ligne pour toutes vos démarches.\nEn cas de problème avec le site, écrivez-nous.\nL'administration communale",
    },
    instruction: "Répondez à la commune : expliquez que le site ne fonctionne pas, décrivez le problème et demandez un rendez-vous pour refaire votre carte d'identité.",
    points: ["Le problème avec le site", "La description du problème", "La demande de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-10",
    title: "S'excuser pour un rendez-vous manqué",
    situation: "Vous avez oublié votre rendez-vous à la commune la semaine dernière.",
    sourceMessage: {
      from: "Bureau des habitants",
      subject: "Rendez-vous manqué",
      body: "Bonjour,\nVous ne vous êtes pas présenté(e) à votre rendez-vous du lundi 3 juin.\nMerci de nous contacter pour fixer une nouvelle date.\nLe bureau des habitants",
    },
    instruction: "Répondez au bureau : excusez-vous pour votre absence, expliquez ce qui s'est passé et demandez un nouveau rendez-vous en donnant vos disponibilités.",
    points: ["L'excuse", "L'explication", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-11",
    title: "Répondre — démarches administratives (11)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-12",
    title: "Répondre — démarches administratives (12)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-13",
    title: "Répondre — démarches administratives (13)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-14",
    title: "Répondre — démarches administratives (14)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-15",
    title: "Répondre — démarches administratives (15)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-16",
    title: "Répondre — démarches administratives (16)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-17",
    title: "Répondre — démarches administratives (17)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-18",
    title: "Répondre — démarches administratives (18)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-19",
    title: "Répondre — démarches administratives (19)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-4-pee-20",
    title: "Répondre — démarches administratives (20)",
    situation: "Vous avez reçu un e-mail concernant démarches administratives.",
sourceMessage: {
  from: "Service Démarches administratives",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant démarches administratives.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E9.5 — S'informer sur l'actualité
   ════════════════════════════════════════════════════════════════════════════ */

const E9_5_CE_EMAIL_TEXT = `De : Journal de la Ville — Newsletter
Objet : Ce week-end dans votre ville

Bonjour,

Voici les informations de la semaine.
Samedi 15 juin, la fête de la musique commence à 16 h sur la place centrale.
Vingt concerts gratuits sont prévus jusqu'à minuit.
Dimanche, le marché aux puces ouvre de 9 h à 17 h au bord du lac.
Météo : samedi, il fera beau et chaud, 28 degrés. Dimanche, attention, des orages arriveront dans l'après-midi.
Circulation : le centre-ville sera fermé aux voitures samedi, de 14 h à minuit.
Prenez les transports publics : les bus seront gratuits toute la journée.
La semaine prochaine, notre journal fête ses cinquante ans : une édition spéciale paraîtra jeudi.

Bonne lecture,
La rédaction`;

const E9_5_CE_EMAIL_POOL = buildExpressPool("e9-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quand commence la fête de la musique ?",
    text: ["Samedi à 16 h", "Samedi à 18 h", "Dimanche à 16 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête de la musique commence à _________ h sur la place centrale.",
    fill: "16",
    fillA: ["seize"],
    vfQ: "La fête de la musique commence samedi à 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Où a lieu la fête de la musique ?",
    text: ["Sur la place centrale", "Au bord du lac", "Dans la gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La fête de la musique commence à 16 h sur la place _________.",
    fill: "centrale",
    vfQ: "La fête de la musique a lieu au bord du lac.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de concerts sont prévus ?",
    text: ["Vingt concerts", "Douze concerts", "Cinquante concerts"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ concerts gratuits sont prévus jusqu'à minuit.",
    fill: "vingt",
    fillA: ["20"],
    vfQ: "Les concerts sont payants.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Quand le marché aux puces est-il ouvert ?",
    text: [
      "Dimanche, de 9 h à 17 h",
      "Samedi, de 9 h à 17 h",
      "Dimanche, de 14 h à minuit",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le marché aux puces ouvre de 9 h à _________ h.",
    fill: "17",
    fillA: ["dix-sept"],
    vfQ: "Le marché aux puces a lieu dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Où se trouve le marché aux puces ?",
    text: ["Au bord du lac", "Sur la place centrale", "Devant la mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le marché aux puces ouvre au bord du _________.",
    fill: "lac",
    vfQ: "Le marché aux puces est au bord du lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel temps fera-t-il samedi ?",
    text: [
      "Beau et chaud, 28 degrés",
      "Froid et pluvieux",
      "Des orages toute la journée",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Samedi, il fera beau et chaud, _________ degrés.",
    fill: "28",
    fillA: ["vingt-huit"],
    vfQ: "Samedi, il fera 28 degrés.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Que se passera-t-il dimanche après-midi ?",
    text: ["Des orages arriveront", "Il fera très chaud", "Il neigera"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Dimanche, des _________ arriveront dans l'après-midi.",
    fill: "orages",
    vfQ: "Dimanche après-midi, le temps restera beau.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Quand le centre-ville est-il fermé aux voitures ?",
    text: [
      "Samedi, de 14 h à minuit",
      "Dimanche matin",
      "Toute la semaine",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le centre-ville sera fermé aux voitures samedi, de 14 h à _________.",
    fill: "minuit",
    vfQ: "Samedi après-midi, le centre-ville est fermé aux voitures.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien coûtent les bus samedi ?",
    text: ["Ils sont gratuits", "Deux francs le trajet", "Cinq francs la journée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les bus seront _________ toute la journée.",
    fill: "gratuits",
    vfQ: "Samedi, il faut payer le bus.",
    vfC: 1,
  }),
  q({
    id: "cem-q10",
    textQ: "Quel anniversaire le journal fête-t-il ?",
    text: ["Ses cinquante ans", "Ses quinze ans", "Ses cent ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Notre journal fête ses _________ ans.",
    fill: "cinquante",
    fillA: ["50"],
    vfQ: "Une édition spéciale paraîtra jeudi.",
    vfC: 0,
  }),
]);


const E9_5_CE_EMAIL_2_TEXT = `Info E-mail l'actualité — Message 2

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 2 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_2_POOL = buildExpressPool("e9-5-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_3_TEXT = `Info E-mail l'actualité — Message 3

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 3 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_3_POOL = buildExpressPool("e9-5-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_4_TEXT = `Info E-mail l'actualité — Message 4

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 4 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_4_POOL = buildExpressPool("e9-5-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_5_TEXT = `Info E-mail l'actualité — Message 5

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 5 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_5_POOL = buildExpressPool("e9-5-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_6_TEXT = `Info E-mail l'actualité — Message 6

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 6 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_6_POOL = buildExpressPool("e9-5-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_7_TEXT = `Info E-mail l'actualité — Message 7

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 7 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_7_POOL = buildExpressPool("e9-5-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_8_TEXT = `Info E-mail l'actualité — Message 8

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 8 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_8_POOL = buildExpressPool("e9-5-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_9_TEXT = `Info E-mail l'actualité — Message 9

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 9 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_9_POOL = buildExpressPool("e9-5-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_10_TEXT = `Info E-mail l'actualité — Message 10

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 10 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_10_POOL = buildExpressPool("e9-5-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_11_TEXT = `Info E-mail l'actualité — Message 11

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 11 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_11_POOL = buildExpressPool("e9-5-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_12_TEXT = `Info E-mail l'actualité — Message 12

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 12 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_12_POOL = buildExpressPool("e9-5-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_13_TEXT = `Info E-mail l'actualité — Message 13

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 13 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_13_POOL = buildExpressPool("e9-5-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_14_TEXT = `Info E-mail l'actualité — Message 14

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 14 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_14_POOL = buildExpressPool("e9-5-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_15_TEXT = `Info E-mail l'actualité — Message 15

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 15 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_15_POOL = buildExpressPool("e9-5-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_16_TEXT = `Info E-mail l'actualité — Message 16

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 16 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_16_POOL = buildExpressPool("e9-5-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_17_TEXT = `Info E-mail l'actualité — Message 17

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 17 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_17_POOL = buildExpressPool("e9-5-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_18_TEXT = `Info E-mail l'actualité — Message 18

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 18 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_18_POOL = buildExpressPool("e9-5-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_19_TEXT = `Info E-mail l'actualité — Message 19

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 19 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_19_POOL = buildExpressPool("e9-5-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

const E9_5_CE_EMAIL_20_TEXT = `Info E-mail l'actualité — Message 20

Chers lecteurs, voici les informations importantes pour cette semaine concernant e-mail l'actualité.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de 20 jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.`;
const E9_5_CE_EMAIL_20_POOL = buildExpressPool("e9-5-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Quel thème traite ce message ?",
    text: ["E-mail l'actualité", "Le sport", "La cuisine"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les informations concernent e-mail l'actualité.",
    fill: "e-mail",
    vfQ: "Le texte parle de e-mail l'actualité.",
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

export const E9_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e9-5-ce-email",
  readingText: E9_5_CE_EMAIL_TEXT,
  questionPool: E9_5_CE_EMAIL_POOL,
instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e9-5-ce-email-2",
  readingText: E9_5_CE_EMAIL_2_TEXT,
  questionPool: E9_5_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-3",
  readingText: E9_5_CE_EMAIL_3_TEXT,
  questionPool: E9_5_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-4",
  readingText: E9_5_CE_EMAIL_4_TEXT,
  questionPool: E9_5_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-5",
  readingText: E9_5_CE_EMAIL_5_TEXT,
  questionPool: E9_5_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-6",
  readingText: E9_5_CE_EMAIL_6_TEXT,
  questionPool: E9_5_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-7",
  readingText: E9_5_CE_EMAIL_7_TEXT,
  questionPool: E9_5_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-8",
  readingText: E9_5_CE_EMAIL_8_TEXT,
  questionPool: E9_5_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-9",
  readingText: E9_5_CE_EMAIL_9_TEXT,
  questionPool: E9_5_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-10",
  readingText: E9_5_CE_EMAIL_10_TEXT,
  questionPool: E9_5_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-11",
  readingText: E9_5_CE_EMAIL_11_TEXT,
  questionPool: E9_5_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-12",
  readingText: E9_5_CE_EMAIL_12_TEXT,
  questionPool: E9_5_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-13",
  readingText: E9_5_CE_EMAIL_13_TEXT,
  questionPool: E9_5_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-14",
  readingText: E9_5_CE_EMAIL_14_TEXT,
  questionPool: E9_5_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-15",
  readingText: E9_5_CE_EMAIL_15_TEXT,
  questionPool: E9_5_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-16",
  readingText: E9_5_CE_EMAIL_16_TEXT,
  questionPool: E9_5_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-17",
  readingText: E9_5_CE_EMAIL_17_TEXT,
  questionPool: E9_5_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-18",
  readingText: E9_5_CE_EMAIL_18_TEXT,
  questionPool: E9_5_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-19",
  readingText: E9_5_CE_EMAIL_19_TEXT,
  questionPool: E9_5_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e9-5-ce-email-20",
  readingText: E9_5_CE_EMAIL_20_TEXT,
  questionPool: E9_5_CE_EMAIL_20_POOL
}),
];

export const E9_5_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e9-5-pee-1",
    title: "S'abonner au journal",
    situation: "Le journal local vous propose un abonnement.",
    sourceMessage: {
      from: "Journal de la Ville",
      subject: "Offre d'abonnement",
      body: "Bonjour,\nAbonnez-vous à notre journal : 25 francs par mois, papier et numérique.\nLe premier mois est gratuit.\nLe service abonnements",
    },
    instruction: "Répondez au journal : dites que l'offre vous intéresse, demandez si un abonnement 100 % numérique existe et demandez comment profiter du mois gratuit.",
    points: ["Votre intérêt", "Une question sur l'offre numérique", "Le mois gratuit"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-2",
    title: "Donner son avis",
    situation: "La rédaction de la newsletter demande l'avis de ses lecteurs.",
    sourceMessage: {
      from: "Journal de la Ville — Newsletter",
      subject: "Votre avis nous intéresse",
      body: "Bonjour,\nNous voulons améliorer notre newsletter.\nQuelles rubriques lisez-vous ? Qu'est-ce qui manque ?\nLa rédaction",
    },
    instruction: "Répondez à la rédaction : dites quelles rubriques vous lisez, expliquez pourquoi et proposez une nouvelle rubrique.",
    points: ["Vos rubriques préférées", "La raison", "Une proposition de rubrique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-3",
    title: "Aller à la fête de la musique",
    situation: "Un ami vous demande si vous allez à la fête de la musique samedi.",
    sourceMessage: {
      from: "Marco",
      subject: "Fête de la musique",
      body: "Salut !\nTu as lu la newsletter ? Il y a la fête de la musique samedi !\nTu veux y aller ? On se retrouve où ?\nMarco",
    },
    instruction: "Répondez à Marco : acceptez, proposez une heure et un lieu de rendez-vous et rappelez-lui que le centre-ville est fermé aux voitures.",
    points: ["Votre réponse (oui)", "L'heure et le lieu de rendez-vous", "L'information sur la circulation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-4",
    title: "Reporter un pique-nique",
    situation: "Une amie a organisé un pique-nique dimanche, mais la météo annonce des orages.",
    sourceMessage: {
      from: "Julie",
      subject: "Pique-nique de dimanche",
      body: "Coucou,\nTout est prêt pour le pique-nique de dimanche au bord du lac !\nTu apportes le dessert ?\nJulie",
    },
    instruction: "Répondez à Julie : prévenez-la que la météo annonce des orages dimanche après-midi, proposez de reporter le pique-nique et proposez une activité de remplacement.",
    points: ["La météo de dimanche", "La proposition de report", "Une activité de remplacement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-5",
    title: "Demander le programme",
    situation: "L'office du tourisme annonce un festival, mais sans les détails.",
    sourceMessage: {
      from: "Office du tourisme",
      subject: "Festival du lac : trois jours de fête",
      body: "Bonjour,\nLe Festival du lac revient du 21 au 23 août !\nConcerts, cinéma en plein air et marché artisanal au programme.\nL'office du tourisme",
    },
    instruction: "Répondez à l'office du tourisme : demandez le programme détaillé des concerts, les prix des billets et les possibilités de parking.",
    points: ["Le programme des concerts", "Les prix des billets", "Le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-6",
    title: "Raconter un événement",
    situation: "Une amie n'a pas pu venir à la fête de la musique et veut tout savoir.",
    sourceMessage: {
      from: "Chiara",
      subject: "Alors, cette fête ?",
      body: "Salut,\nJe n'ai pas pu venir samedi, j'étais malade…\nC'était comment, la fête de la musique ? Raconte-moi tout !\nChiara",
    },
    instruction: "Répondez à Chiara : racontez la soirée, dites quel concert vous avez préféré et proposez d'y retourner ensemble l'année prochaine.",
    points: ["Le récit de la soirée", "Votre concert préféré", "Une proposition pour l'année prochaine"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-7",
    title: "Problème de newsletter",
    situation: "Vous ne recevez plus la newsletter du journal depuis trois semaines.",
    sourceMessage: {
      from: "Journal de la Ville",
      subject: "Votre abonnement à la newsletter",
      body: "Bonjour,\nVous êtes inscrit(e) à notre newsletter hebdomadaire.\nPour toute question, répondez à cet e-mail.\nLe service lecteurs",
    },
    instruction: "Répondez au journal : expliquez que vous ne recevez plus la newsletter depuis trois semaines, donnez votre adresse e-mail et demandez de vérifier votre inscription.",
    points: ["Le problème", "Votre adresse e-mail", "La demande de vérification"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-8",
    title: "Participer à un concours",
    situation: "Le journal organise un concours pour ses cinquante ans.",
    sourceMessage: {
      from: "Journal de la Ville",
      subject: "Grand concours : 50 ans !",
      body: "Bonjour,\nPour nos cinquante ans, gagnez un abonnement d'une année !\nPour participer, répondez à cette question : depuis quand lisez-vous notre journal ?\nLa rédaction",
    },
    instruction: "Répondez au journal : participez au concours, racontez depuis quand et pourquoi vous lisez le journal et posez une question sur le tirage au sort.",
    points: ["Depuis quand vous lisez le journal", "Pourquoi", "Une question sur le tirage au sort"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-9",
    title: "Conseiller un média",
    situation: "Un ami veut suivre les informations en français pour progresser.",
    sourceMessage: {
      from: "Pavel",
      subject: "Les infos en français",
      body: "Salut,\nJe veux m'informer en français, mais le journal télévisé est trop rapide pour moi.\nTu utilises quoi, toi ? Tu as des conseils ?\nPavel",
    },
    instruction: "Répondez à Pavel : expliquez comment vous vous informez en français, conseillez-lui un média facile et donnez-lui une astuce pour mieux comprendre.",
    points: ["Vos habitudes d'information", "Un média conseillé", "Une astuce"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-10",
    title: "Proposer une sortie",
    situation: "Un ami vous demande une idée de sortie pour le week-end.",
    sourceMessage: {
      from: "Louis",
      subject: "Ce week-end ?",
      body: "Salut,\nQu'est-ce qu'on fait ce week-end ? Tu as une idée ?\nJ'ai envie de sortir un peu !\nLouis",
    },
    instruction: "Répondez à Louis : proposez le cinéma en plein air annoncé dans la newsletter, donnez le jour, l'heure et le lieu, et dites ce qu'il faut apporter.",
    points: ["La proposition de sortie", "Le jour, l'heure et le lieu", "Ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-11",
    title: "Répondre — l'actualité (11)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-12",
    title: "Répondre — l'actualité (12)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-13",
    title: "Répondre — l'actualité (13)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-14",
    title: "Répondre — l'actualité (14)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-15",
    title: "Répondre — l'actualité (15)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-16",
    title: "Répondre — l'actualité (16)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-17",
    title: "Répondre — l'actualité (17)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-18",
    title: "Répondre — l'actualité (18)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-19",
    title: "Répondre — l'actualité (19)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e9-5-pee-20",
    title: "Répondre — l'actualité (20)",
    situation: "Vous avez reçu un e-mail concernant l'actualité.",
sourceMessage: {
  from: "Service L'actualité",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant l'actualité.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
