import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPoDialogue,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}


/* ── Compréhension écrite — E7.1 Aller à l'hôtel ── */

const E7_1_CE_TEXT_1 = `Hôtel Bellevue — Informations pour les clients

L'hôtel Bellevue se trouve à côté de la plage.
Il est entre la piscine et le parc.
La chambre double coûte 85 € la nuit.
Le petit déjeuner coûte 9 € par personne.
La demi-pension coûte 110 €.
La demi-pension comprend le petit déjeuner et le repas du soir.
Le repas du soir est au restaurant de l'hôtel.
La piscine est ouverte du 1er juin au 15 septembre.
La réception est ouverte de 7 h à 22 h.
Pour réserver, téléphonez à la réception ou envoyez un e-mail.
Attention : l'hôtel est complet en août. Réservez tôt !`;

const E7_1_CE_POOL_1 = buildExpressPool("e7-1-ce-1", [
q({
    id: "ce-q1",
    textQ: "Où se trouve l'hôtel Bellevue ?",
    text: ["À côté de la plage", "À la montagne", "Au bord du lac"],
    textC: 0,
    img: ["plage", "montagne", "lac"],
    imgC: 0,
    fillQ: "L'hôtel Bellevue se trouve à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel Bellevue se trouve entre la piscine et le parc.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Combien coûte la chambre double pour une nuit ?",
    text: ["85 €", "58 €", "95 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La chambre double coûte _________ € la nuit.",
    fill: "85",
    fillA: ["quatre-vingt-cinq"],
    vfQ: "La chambre double coûte 95 € la nuit.",
    vfC: 1,
  }),
  q({
    id: "ce-q3",
    textQ: "Qu'est-ce que la demi-pension comprend ?",
    text: [
      "Le petit déjeuner et le repas du soir",
      "Le déjeuner seulement",
      "Tous les repas de la journée",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La demi-pension comprend le petit déjeuner et le repas du _________.",
    fill: "soir",
    vfQ: "Le restaurant de l'hôtel est ouvert à midi.",
    vfC: 2,
  }),
  q({
    id: "ce-q4",
    textQ: "Quand la piscine est-elle ouverte ?",
    text: ["Du 1er juin au 15 septembre", "Toute l'année", "Du 1er mai au 30 août"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La piscine est ouverte du 1er juin au 15 _________.",
    fill: "septembre",
    vfQ: "La piscine est ouverte toute l'année.",
    vfC: 1,
  }),
  q({
    id: "ce-q5",
    textQ: "Comment peut-on réserver une chambre ?",
    text: ["Par téléphone ou par e-mail", "Seulement sur place", "Par courrier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour réserver, téléphonez à la _________ ou envoyez un e-mail.",
    fill: "réception",
    fillA: ["reception"],
    vfQ: "On peut réserver une chambre par e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "À quelle heure la réception ferme-t-elle ?",
    text: ["À 22 h", "À 20 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La réception est ouverte de 7 h à _________ h.",
    fill: "22",
    fillA: ["vingt-deux"],
    vfQ: "L'hôtel a des chambres libres en août.",
    vfC: 1,
  }),
]);

const E7_1_CE_TEXT_2 = `Hôtel du Lac — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_2 = buildExpressPool("e7-1-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_3 = `Hôtel Bellevue — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_3 = buildExpressPool("e7-1-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_4 = `Hôtel Central — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_4 = buildExpressPool("e7-1-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_5 = `Hôtel Riviera — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_5 = buildExpressPool("e7-1-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_6 = `Hôtel Mont-Blanc — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_6 = buildExpressPool("e7-1-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_7 = `Hôtel des Alpes — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_7 = buildExpressPool("e7-1-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_8 = `Hôtel Soleil — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_8 = buildExpressPool("e7-1-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_9 = `Hôtel Paradis — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_9 = buildExpressPool("e7-1-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_10 = `Hôtel Étoile — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_10 = buildExpressPool("e7-1-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_11 = `Hôtel Jardin — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_11 = buildExpressPool("e7-1-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_12 = `Hôtel Plage — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_12 = buildExpressPool("e7-1-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_13 = `Hôtel Forêt — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_13 = buildExpressPool("e7-1-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_14 = `Hôtel Village — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_14 = buildExpressPool("e7-1-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_15 = `Hôtel Gare — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_15 = buildExpressPool("e7-1-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_16 = `Hôtel Parc — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_16 = buildExpressPool("e7-1-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_17 = `Hôtel Royal — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_17 = buildExpressPool("e7-1-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_18 = `Hôtel Moderne — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_18 = buildExpressPool("e7-1-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_19 = `Hôtel Classique — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_19 = buildExpressPool("e7-1-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

const E7_1_CE_TEXT_20 = `Hôtel Confort — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.`;

const E7_1_CE_POOL_20 = buildExpressPool("e7-1-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Quel type de chambres ?",
    text: ["Simple, double et familiale", "Seulement simple", "Seulement luxe"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Chambres : simple, double et _________.",
    fill: "familiale",
    vfQ: "Il y a des chambres familiales.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Prix chambre double ?",
    text: ["75 € la nuit", "100 €", "50 €"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________ € la nuit.",
    fill: "75",
    vfQ: "La chambre double coûte 75 €.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Le petit déjeuner est-il inclus ?",
    text: ["Oui", "Non", "Seulement le week-end"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit déjeuner _________.",
    fill: "inclus",
    vfQ: "Le petit déjeuner est inclus.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Heure du check-in ?",
    text: ["À partir de 15 h", "À 10 h", "À minuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in à partir de _________ h.",
    fill: "15",
    vfQ: "Le check-in est à 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Le Wi-Fi est-il gratuit ?",
    text: ["Oui", "Non", "Payant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Wi-Fi _________ dans tout l'hôtel.",
    fill: "gratuit",
    vfQ: "Le Wi-Fi est gratuit.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Où est l'hôtel ?",
    text: ["À côté de la plage", "En montagne", "À l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "L'hôtel est à côté de la _________.",
    fill: "plage",
    vfQ: "L'hôtel est près de la plage.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Les animaux sont-ils acceptés ?",
    text: ["Oui, 15 € par nuit", "Non, jamais", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Animaux acceptés : _________ € par nuit.",
    fill: "15",
    vfQ: "Les animaux coûtent 15 € par nuit.",
    vfC: 0,
  }),
]);

export const E7_1_CE: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e7-1-ce-1",
    readingText: E7_1_CE_TEXT_1,
    questionPool: E7_1_CE_POOL_1,
  }),
  readingPoolExercise({
    id: "e7-1-ce-2",
    readingText: E7_1_CE_TEXT_2,
    questionPool: E7_1_CE_POOL_2,
  }),
  readingPoolExercise({
    id: "e7-1-ce-3",
    readingText: E7_1_CE_TEXT_3,
    questionPool: E7_1_CE_POOL_3,
  }),
  readingPoolExercise({
    id: "e7-1-ce-4",
    readingText: E7_1_CE_TEXT_4,
    questionPool: E7_1_CE_POOL_4,
  }),
  readingPoolExercise({
    id: "e7-1-ce-5",
    readingText: E7_1_CE_TEXT_5,
    questionPool: E7_1_CE_POOL_5,
  }),
  readingPoolExercise({
    id: "e7-1-ce-6",
    readingText: E7_1_CE_TEXT_6,
    questionPool: E7_1_CE_POOL_6,
  }),
  readingPoolExercise({
    id: "e7-1-ce-7",
    readingText: E7_1_CE_TEXT_7,
    questionPool: E7_1_CE_POOL_7,
  }),
  readingPoolExercise({
    id: "e7-1-ce-8",
    readingText: E7_1_CE_TEXT_8,
    questionPool: E7_1_CE_POOL_8,
  }),
  readingPoolExercise({
    id: "e7-1-ce-9",
    readingText: E7_1_CE_TEXT_9,
    questionPool: E7_1_CE_POOL_9,
  }),
  readingPoolExercise({
    id: "e7-1-ce-10",
    readingText: E7_1_CE_TEXT_10,
    questionPool: E7_1_CE_POOL_10,
  }),
  readingPoolExercise({
    id: "e7-1-ce-11",
    readingText: E7_1_CE_TEXT_11,
    questionPool: E7_1_CE_POOL_11,
  }),
  readingPoolExercise({
    id: "e7-1-ce-12",
    readingText: E7_1_CE_TEXT_12,
    questionPool: E7_1_CE_POOL_12,
  }),
  readingPoolExercise({
    id: "e7-1-ce-13",
    readingText: E7_1_CE_TEXT_13,
    questionPool: E7_1_CE_POOL_13,
  }),
  readingPoolExercise({
    id: "e7-1-ce-14",
    readingText: E7_1_CE_TEXT_14,
    questionPool: E7_1_CE_POOL_14,
  }),
  readingPoolExercise({
    id: "e7-1-ce-15",
    readingText: E7_1_CE_TEXT_15,
    questionPool: E7_1_CE_POOL_15,
  }),
  readingPoolExercise({
    id: "e7-1-ce-16",
    readingText: E7_1_CE_TEXT_16,
    questionPool: E7_1_CE_POOL_16,
  }),
  readingPoolExercise({
    id: "e7-1-ce-17",
    readingText: E7_1_CE_TEXT_17,
    questionPool: E7_1_CE_POOL_17,
  }),
  readingPoolExercise({
    id: "e7-1-ce-18",
    readingText: E7_1_CE_TEXT_18,
    questionPool: E7_1_CE_POOL_18,
  }),
  readingPoolExercise({
    id: "e7-1-ce-19",
    readingText: E7_1_CE_TEXT_19,
    questionPool: E7_1_CE_POOL_19,
  }),
  readingPoolExercise({
    id: "e7-1-ce-20",
    readingText: E7_1_CE_TEXT_20,
    questionPool: E7_1_CE_POOL_20,
  }),
];

/* ── Production orale — dialogues à jouer ──────────────────────────────────── */


const RECEPTIONNISTE = { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };
const AMI_1 = { title: "Le premier ami", vous: "le premier ami / la première amie" };
const AMI_2 = { title: "Le deuxième ami", vous: "le deuxième ami / la deuxième amie" };


export const E7_1_PO: ExpressPoDialogue[] = [
{
    id: "e7-1-po-1",
    title: "Réserver une chambre par téléphone",
    context: "Vous téléphonez à l'hôtel pour réserver une chambre pour deux personnes.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Hôtel Bellevue, bonjour !" },
      { role: "B", text: "Bonjour, je voudrais réserver une chambre pour deux personnes, s'il vous plaît." },
      { role: "A", text: "Oui, pour quelles dates ?" },
      { role: "B", text: "Du 11 au 13 mai, pour deux nuits." },
      { role: "A", text: "J'ai une chambre avec un grand lit à 85 € la nuit. Ça vous va ?" },
      { role: "B", text: "Oui, très bien. Le petit déjeuner est compris ?" },
      { role: "A", text: "Non, il coûte 9 € par personne. C'est à quel nom ?" },
      { role: "B", text: "Au nom de Martin. Merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-2",
    title: "L'arrivée à l'hôtel",
    context: "Vous arrivez à l'hôtel. Vous avez une réservation.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonsoir, bienvenue à l'hôtel ! Vous avez une réservation ?" },
      { role: "B", text: "Oui, une chambre double pour deux nuits." },
      { role: "A", text: "Très bien. Voici votre clé, chambre 12, au premier étage." },
      { role: "B", text: "Merci. Le petit déjeuner est à quelle heure ?" },
      { role: "A", text: "De 7 h à 10 h, dans la salle à côté de la réception." },
      { role: "B", text: "Parfait. Et il y a le wifi dans la chambre ?" },
      { role: "A", text: "Oui, le code est écrit sur la carte de la clé. Bonne soirée !" },
      { role: "B", text: "Merci, bonne soirée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-3",
    title: "L'hôtel est complet",
    context: "Vous demandez une chambre, mais l'hôtel est complet.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, je peux vous aider ?" },
      { role: "B", text: "Bonjour, vous avez une chambre disponible pour ce soir ?" },
      { role: "A", text: "Je suis désolé, l'hôtel est complet ce soir." },
      { role: "B", text: "Ah non… Vous connaissez un autre hôtel ?" },
      { role: "A", text: "Oui, l'hôtel de la Gare a souvent des chambres libres." },
      { role: "B", text: "Il est loin d'ici ?" },
      { role: "A", text: "Non, il est à côté de la gare, à dix minutes à pied." },
      { role: "B", text: "Merci beaucoup pour votre aide !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-4",
    title: "Une place au camping",
    context: "Vous arrivez au camping avec votre famille et votre tente.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, bienvenue au camping des Pins !" },
      { role: "B", text: "Bonjour, on voudrait une place pour notre tente, pour trois nuits." },
      { role: "A", text: "Vous préférez une place devant la rivière ou à côté de la piscine ?" },
      { role: "B", text: "Devant la rivière, s'il vous plaît. C'est plus calme." },
      { role: "A", text: "Très bien. C'est 20 € la nuit pour la place." },
      { role: "B", text: "D'accord. Il y a un restaurant au camping ?" },
      { role: "A", text: "Oui, il est ouvert le soir, derrière l'accueil." },
      { role: "B", text: "Parfait, merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-5",
    title: "Demi-pension ou petit déjeuner ?",
    context: "Vous demandez des informations sur les repas de l'hôtel.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, vous proposez la pension complète ?" },
      { role: "A", text: "Non, nous proposons le petit déjeuner ou la demi-pension." },
      { role: "B", text: "Qu'est-ce qui est compris dans la demi-pension ?" },
      { role: "A", text: "Le petit déjeuner et le repas du soir au restaurant." },
      { role: "B", text: "Et c'est combien ?" },
      { role: "A", text: "110 € par personne, avec la chambre." },
      { role: "B", text: "Très bien, je prends la demi-pension." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-6",
    title: "Où est situé l'hôtel ?",
    context: "Vous téléphonez pour savoir où se trouve l'hôtel et comment y aller.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Hôtel de la Plage, bonjour !" },
      { role: "B", text: "Bonjour, où est situé votre hôtel, s'il vous plaît ?" },
      { role: "A", text: "Nous sommes à côté de la plage, entre le port et le parc." },
      { role: "B", text: "C'est loin de la gare ?" },
      { role: "A", text: "Non, à quinze minutes à pied. Vous pouvez aussi prendre le bus 3." },
      { role: "B", text: "Super. Il y a un parking pour la voiture ?" },
      { role: "A", text: "Oui, un parking gratuit derrière l'hôtel." },
      { role: "B", text: "Merci beaucoup, à demain !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-7",
    title: "Un problème dans la chambre",
    context: "Vous appelez la réception : il y a un problème dans votre chambre.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Réception, bonjour. Je vous écoute." },
      { role: "B", text: "Bonjour, il n'y a pas d'eau chaude dans ma salle de bain." },
      { role: "A", text: "Ah, je suis désolé. Vous êtes dans quelle chambre ?" },
      { role: "B", text: "Dans la chambre 25, au deuxième étage." },
      { role: "A", text: "Un technicien arrive dans dix minutes." },
      { role: "B", text: "Merci. Et ma chambre est très bruyante, à côté de l'ascenseur…" },
      { role: "A", text: "Demain, je peux vous donner une chambre plus calme." },
      { role: "B", text: "C'est très gentil, merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-8",
    title: "Choisir un bungalow",
    context: "Vous voulez louer un bungalow pour quatre personnes au camping.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce que je peux faire pour vous ?" },
      { role: "B", text: "Bonjour, vous avez un bungalow pour quatre personnes ?" },
      { role: "A", text: "Oui, il me reste deux bungalows : un devant la rivière et un à droite de la forêt." },
      { role: "B", text: "Je préfère celui devant la rivière. C'est combien ?" },
      { role: "A", text: "80 € la nuit. Vous restez combien de nuits ?" },
      { role: "B", text: "Deux nuits, s'il vous plaît." },
      { role: "A", text: "Très bien, ça fait 160 €. Voici la clé, c'est le bungalow n° 7." },
      { role: "B", text: "Merci, bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-9",
    title: "Le départ de l'hôtel",
    context: "C'est le matin du départ. Vous payez et vous rendez la clé.",
    roleA: RECEPTIONNISTE,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous partez aujourd'hui ?" },
      { role: "B", text: "Oui, voici la clé de la chambre 12." },
      { role: "A", text: "Merci. Alors, deux nuits et deux petits déjeuners… ça fait 188 €." },
      { role: "B", text: "Je peux payer par carte ?" },
      { role: "A", text: "Bien sûr. Voilà votre ticket." },
      { role: "B", text: "Merci. Vous pouvez appeler un taxi pour la gare ?" },
      { role: "A", text: "Oui, il arrive dans cinq minutes. Bon voyage !" },
      { role: "B", text: "Merci pour tout, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-1-po-10",
    title: "Hôtel ou camping ?",
    context: "Vous préparez les vacances avec un ami : hôtel ou camping ?",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Alors, pour les vacances, on prend un hôtel ou un camping ?" },
      { role: "B", text: "Je préfère le camping, c'est moins cher !" },
      { role: "A", text: "Oui, mais à l'hôtel, il y a une vraie salle de bain…" },
      { role: "B", text: "Au camping des Pins, il y a des bungalows avec douche." },
      { role: "A", text: "C'est vrai ? Et il est où, ce camping ?" },
      { role: "B", text: "À côté de la plage, entre la mer et la forêt." },
      { role: "A", text: "Bon, d'accord pour le camping. On réserve un bungalow ?" },
      { role: "B", text: "Oui ! Je téléphone demain matin." },
      { role: "A", text: "D'accord, je vous appelle si besoin." },
      { role: "B", text: "Très bien. Au revoir !" },
],
  },
  {
    id: "e7-1-po-11",
    title: "Réserver par téléphone",
    context: "Vous réservez une chambre.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, Hôtel du Lac." },
      { role: "B", text: "Bonjour, une chambre double pour samedi ?" },
      { role: "A", text: "Pour combien de nuits ?" },
      { role: "B", text: "Deux nuits." },
      { role: "A", text: "75 € par nuit. Je réserve ?" },
      { role: "B", text: "Oui, merci." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-12",
    title: "Arrivée à l'hôtel",
    context: "Vous arrivez à l'hôtel.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Bonjour, j'ai une réservation." },
      { role: "B", text: "Nom, s'il vous plaît ?" },
      { role: "A", text: "Martin." },
      { role: "B", text: "Chambre 204, 2e étage." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "Bon séjour !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-13",
    title: "Problème chambre",
    context: "La climatisation ne marche pas.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "La clim ne marche pas." },
      { role: "B", text: "Désolé. On envoie quelqu'un." },
      { role: "A", text: "Merci." },
      { role: "B", text: "Chambre 204, dans dix minutes." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-14",
    title: "Hôtel complet",
    context: "L'hôtel est complet.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Une chambre ce soir ?" },
      { role: "B", text: "Désolé, complet." },
      { role: "A", text: "Un autre hôtel ?" },
      { role: "B", text: "L'Hôtel Central, à côté." },
      { role: "A", text: "Merci." },
      { role: "B", text: "Bonne soirée." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-15",
    title: "Camping",
    context: "Vous cherchez une place au camping.",
    roleA: { title: "L'employé", vous: "l'employé / l'employée" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Une place pour deux nuits ?" },
      { role: "B", text: "Oui, emplacement 15." },
      { role: "A", text: "Prix ?" },
      { role: "B", text: "30 € par nuit." },
      { role: "A", text: "Je prends." },
      { role: "B", text: "Voici la clé." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-16",
    title: "Départ",
    context: "Vous quittez l'hôtel.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Je pars." },
      { role: "B", text: "Chambre 204 ?" },
      { role: "A", text: "Oui. La clé." },
      { role: "B", text: "Tout est en ordre. Au revoir !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-17",
    title: "Demi-pension",
    context: "Vous demandez la demi-pension.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Demi-pension ?" },
      { role: "B", text: "Petit déjeuner et dîner, 25 € de plus." },
      { role: "A", text: "D'accord." },
      { role: "B", text: "C'est noté." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-18",
    title: "Où est l'hôtel",
    context: "Vous demandez le chemin.",
    roleA: { title: "Le client", vous: "le client / la cliente" },
    roleB: { title: "Le passant", vous: "le passant / la passante" },
    lines: [
      { role: "A", text: "L'Hôtel du Lac ?" },
      { role: "B", text: "Tout droit, à côté de la plage." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "De rien." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-19",
    title: "Hôtel ou camping",
    context: "Vous hésitez.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: { title: "L'amie", vous: "l'ami / l'amie" },
    lines: [
      { role: "A", text: "Hôtel ou camping ?" },
      { role: "B", text: "Camping, c'est moins cher." },
      { role: "A", text: "D'accord." },
      { role: "B", text: "Et plus sympa !" },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
  {
    id: "e7-1-po-20",
    title: "Wi-Fi",
    context: "Le Wi-Fi ne marche pas.",
    roleA: { title: "Le réceptionniste", vous: "le réceptionniste / la réceptionniste" },
    roleB: { title: "Le client", vous: "le client / la cliente" },
    lines: [
      { role: "A", text: "Le Wi-Fi ne marche pas." },
      { role: "B", text: "Mot de passe : hotel2024." },
      { role: "A", text: "Merci !" },
      { role: "B", text: "De rien." },
      { role: "A", text: "Très bien." },
      { role: "B", text: "Merci beaucoup." },
      { role: "A", text: "Je vous en prie." },
      { role: "B", text: "Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
    ],
  },
];


/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E7_1_PE: ExpressPePrompt[] = [
{
    id: "e7-1-pe-1",
    title: "E-mail de réservation",
    situation: "Vous voulez passer trois nuits à l'hôtel Bellevue au mois de juillet.",
    instruction: "Écrivez un e-mail à l'hôtel : présentez-vous, donnez les dates et le type de chambre, et posez une question sur le prix.",
    points: ["Les dates du séjour", "Le type de chambre", "Une question sur le prix ou le petit déjeuner"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-2",
    title: "Raconter son séjour",
    situation: "Vous rentrez de vacances. Vous avez passé une semaine dans un petit hôtel.",
    instruction: "Racontez votre séjour à un ami : où était l'hôtel, comment était la chambre et ce que vous avez aimé.",
    points: ["La situation de l'hôtel", "La description de la chambre", "Ce que vous avez aimé"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-3",
    title: "Annuler une réservation",
    situation: "Vous êtes malade et vous ne pouvez pas partir en week-end.",
    instruction: "Écrivez un message à l'hôtel : excusez-vous, expliquez le problème et demandez d'annuler votre réservation.",
    points: ["L'excuse", "La raison de l'annulation", "Les dates de la réservation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-4",
    title: "Carte postale du camping",
    situation: "Vous êtes en vacances au camping, à côté de la plage.",
    instruction: "Écrivez une carte postale à votre famille : décrivez le camping, le paysage autour et une activité que vous faites.",
    points: ["Le camping et le bungalow", "Le paysage (plage, forêt, rivière…)", "Une activité que vous faites"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-5",
    title: "Questions avant de réserver",
    situation: "Vous hésitez entre deux hôtels pour vos vacances.",
    instruction: "Écrivez un e-mail à un hôtel : posez trois questions sur la piscine, les repas et la situation de l'hôtel.",
    points: ["Une question sur la piscine", "Une question sur les repas", "Une question sur la situation de l'hôtel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-6",
    title: "Hôtel ou camping ?",
    situation: "Un ami prépare ses vacances et hésite entre l'hôtel et le camping.",
    instruction: "Expliquez la différence : les avantages de l'hôtel, les avantages du camping et votre préférence.",
    points: ["Les avantages de l'hôtel", "Les avantages du camping", "Votre préférence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-7",
    title: "Avis sur internet",
    situation: "Vous avez passé deux nuits dans un hôtel et vous écrivez un avis sur internet.",
    instruction: "Écrivez votre avis : la chambre, le petit déjeuner et une phrase sur l'équipe de l'hôtel.",
    points: ["La chambre", "Le petit déjeuner", "L'équipe de l'hôtel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-8",
    title: "Message de réclamation",
    situation: "Votre chambre est bruyante et la douche ne marche pas.",
    instruction: "Écrivez un message à la réception : décrivez les deux problèmes et demandez une autre chambre.",
    points: ["Le premier problème", "Le deuxième problème", "Votre demande"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-9",
    title: "L'hôtel de mes rêves",
    situation: "Un magazine de voyage demande : « Comment est l'hôtel de vos rêves ? »",
    instruction: "Décrivez l'hôtel de vos rêves : où il se trouve, comment sont les chambres et ce qu'il y a autour.",
    points: ["La situation (mer, montagne…)", "Les chambres", "Ce qu'il y a autour de l'hôtel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-10",
    title: "Expliquer le chemin",
    situation: "Un ami vient vous voir à votre hôtel de vacances.",
    instruction: "Écrivez un message : expliquez où est l'hôtel avec des prépositions de lieu (devant, derrière, à côté de, entre).",
    points: ["Le point de départ (gare, arrêt de bus…)", "Deux prépositions de lieu", "Un lieu connu à côté de l'hôtel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-11",
    title: "Réservation hôtel",
    situation: "Vous écrivez pour réserver.",
    instruction: "Demandez une chambre : dates, type et questions.",
    points: ["Dates", "Type de chambre", "Questions"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-12",
    title: "Carte postale",
    situation: "Vous êtes en vacances.",
    instruction: "Écrivez une carte postale : lieu, hôtel et activités.",
    points: ["Le lieu", "L'hôtel", "Activités"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-13",
    title: "Réclamation",
    situation: "Problème dans la chambre.",
    instruction: "Décrivez le problème et demandez une solution.",
    points: ["Le problème", "Depuis quand", "Votre demande"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-14",
    title: "Comparer hôtel et camping",
    situation: "Pour les vacances.",
    instruction: "Comparez les deux options.",
    points: ["L'hôtel", "Le camping", "Votre choix"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-15",
    title: "Mon séjour idéal",
    situation: "Décrivez vos vacances idéales.",
    instruction: "Où, dans quel hébergement et quelles activités.",
    points: ["Le lieu", "L'hébergement", "Activités"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-16",
    title: "Annuler réservation",
    situation: "Vous devez annuler.",
    instruction: "Expliquez pourquoi et demandez confirmation.",
    points: ["L'annulation", "La raison", "Confirmation"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-17",
    title: "Avis hôtel",
    situation: "Vous écrivez un avis.",
    instruction: "Décrivez les points positifs et négatifs.",
    points: ["Positif", "Négatif", "Note"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-18",
    title: "Inviter un ami",
    situation: "Vous invitez un ami.",
    instruction: "Proposez de partager une chambre d'hôtel.",
    points: ["L'invitation", "Les dates", "Le prix"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-19",
    title: "Premier jour",
    situation: "Racontez votre arrivée.",
    instruction: "Décrivez l'arrivée à l'hôtel.",
    points: ["Le trajet", "L'accueil", "La chambre"],
    minWords: 50,
    maxWords: 120,
  },
  {
    id: "e7-1-pe-20",
    title: "Budget vacances",
    situation: "Planifiez votre budget.",
    instruction: "Listez les dépenses : hébergement, nourriture, activités.",
    points: ["Hébergement", "Nourriture", "Activités"],
    minWords: 50,
    maxWords: 120,
  },
];
