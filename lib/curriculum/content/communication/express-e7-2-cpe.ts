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


/* ── Compréhension écrite — E7.2 Pratiquer une activité sportive ── */

const E7_2_CE_TEXT_1 = `Affiche — Salle Fit+

Ouvert 6 h–22 h lun–sam.
Cours : yoga mardi 18 h, aquagym jeudi 19 h.
Essai gratuit : 1 jour.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Il y a une fontaine d'eau près de l'entrée principale.
Les places assises sont limitées le week-end.
Un agent peut vous accompagner jusqu'au bon guichet.
Le bâtiment est ouvert dès 8 heures.
En cas de perte d'objet, passez à l'accueil.`;

const E7_2_CE_POOL_1 = buildExpressPool("e7-2-ce-1", [
  q({
    id: "ce-q1",
    textQ: "Nom salle ?",
    text: ["Salle Fit+", "Pharmacie", "Gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Fit+",
    vfQ: "Salle Fit+.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires ?",
    text: ["6 h–22 h lun–sam", "Nuit", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ouvert _________.",
    fill: "h",
    vfQ: "Horaires : 6 h–22 h lun–sam.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier cours ?",
    text: ["yoga mardi 18 h", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours : _________.",
    fill: "yoga",
    vfQ: "Cours : yoga mardi 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Deuxième cours ?",
    text: ["aquagym jeudi 19 h", "Dormir", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "aquagym jeudi 19 h.",
    fill: "aquagym",
    vfQ: "aquagym jeudi 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Essai ?",
    text: ["1 jour", "50 fr", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Essai gratuit : _________.",
    fill: "1",
    vfQ: "Essai : 1 jour.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type lieu ?",
    text: ["Salle de sport", "Musée", "Banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "sport",
    vfQ: "Sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Inscription nécessaire ?",
    text: ["Probable", "Non jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours sur _________.",
    fill: "affiche",
    vfQ: "Voir affiche.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_2 = `Affiche — Gym Center

Ouvert 5 h 30–23 h.
Cours : spinning lundi 19 h, pilates mercredi 17 h.
Essai gratuit : 1 séance.
Les documents se téléchargent aussi en ligne.
Le numéro d'urgence est affiché partout.
Merci encore pour votre compréhension.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.
Les horaires peuvent changer en cas d'urgence.
Gardez votre ticket ou votre confirmation avec vous.`;

const E7_2_CE_POOL_2 = buildExpressPool("e7-2-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Nom salle ?",
    text: ["Gym Center", "Pharmacie", "Gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Center",
    vfQ: "Gym Center.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires ?",
    text: ["5 h 30–23 h", "Nuit", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ouvert _________.",
    fill: "30",
    vfQ: "Horaires : 5 h 30–23 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier cours ?",
    text: ["spinning lundi 19 h", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours : _________.",
    fill: "spinning",
    vfQ: "Cours : spinning lundi 19 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Deuxième cours ?",
    text: ["pilates mercredi 17 h", "Dormir", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "pilates mercredi 17 h.",
    fill: "pilates",
    vfQ: "pilates mercredi 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Essai ?",
    text: ["1 séance", "50 fr", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Essai gratuit : _________.",
    fill: "1",
    vfQ: "Essai : 1 séance.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type lieu ?",
    text: ["Salle de sport", "Musée", "Banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "sport",
    vfQ: "Sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Inscription nécessaire ?",
    text: ["Probable", "Non jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours sur _________.",
    fill: "affiche",
    vfQ: "Voir affiche.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_3 = `Affiche — Sport Club Morges

Ouvert 7 h–21 h.
Cours : musculation tous les jours, crossfit vendredi 18 h.
Essai gratuit : 1 semaine.
Les enfants doivent rester accompagnés d'un adulte.
Respectez la file d'attente, s'il vous plaît.
Un plan simple est affiché juste à côté.
Les personnes à mobilité réduite sont prioritaires.
Pour plus d'infos, scannez le QR code ou demandez au guichet.
Nous vous remercions de votre patience.
J'espère que tout se passe bien de ton côté.`;

const E7_2_CE_POOL_3 = buildExpressPool("e7-2-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Nom salle ?",
    text: ["Sport Club Morges", "Pharmacie", "Gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Morges",
    vfQ: "Sport Club Morges.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires ?",
    text: ["7 h–21 h", "Nuit", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ouvert _________.",
    fill: "h",
    vfQ: "Horaires : 7 h–21 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier cours ?",
    text: ["musculation tous les jours", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours : _________.",
    fill: "musculation",
    vfQ: "Cours : musculation tous les jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Deuxième cours ?",
    text: ["crossfit vendredi 18 h", "Dormir", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "crossfit vendredi 18 h.",
    fill: "crossfit",
    vfQ: "crossfit vendredi 18 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Essai ?",
    text: ["1 semaine", "50 fr", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Essai gratuit : _________.",
    fill: "1",
    vfQ: "Essai : 1 semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type lieu ?",
    text: ["Salle de sport", "Musée", "Banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "sport",
    vfQ: "Sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Inscription nécessaire ?",
    text: ["Probable", "Non jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours sur _________.",
    fill: "affiche",
    vfQ: "Voir affiche.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_4 = `Affiche — Piscine Lausanne

Ouvert 12 h–20 h mer–dim.
Cours : natation enfants mardi 16 h, aquagym samedi 10 h.
Essai gratuit : 1 entrée.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
En cas de question, vous pouvez écrire ou téléphoner.`;

const E7_2_CE_POOL_4 = buildExpressPool("e7-2-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Nom salle ?",
    text: ["Piscine Lausanne", "Pharmacie", "Gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Lausanne",
    vfQ: "Piscine Lausanne.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires ?",
    text: ["12 h–20 h mer–dim", "Nuit", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ouvert _________.",
    fill: "h",
    vfQ: "Horaires : 12 h–20 h mer–dim.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier cours ?",
    text: ["natation enfants mardi 16 h", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours : _________.",
    fill: "natation",
    vfQ: "Cours : natation enfants mardi 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Deuxième cours ?",
    text: ["aquagym samedi 10 h", "Dormir", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "aquagym samedi 10 h.",
    fill: "aquagym",
    vfQ: "aquagym samedi 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Essai ?",
    text: ["1 entrée", "50 fr", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Essai gratuit : _________.",
    fill: "1",
    vfQ: "Essai : 1 entrée.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type lieu ?",
    text: ["Salle de sport", "Musée", "Banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "sport",
    vfQ: "Sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Inscription nécessaire ?",
    text: ["Probable", "Non jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours sur _________.",
    fill: "affiche",
    vfQ: "Voir affiche.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_5 = `Affiche — Tennis Club

Ouvert 8 h–22 h.
Cours : cours débutant lundi 17 h, tournoi dimanche.
Essai gratuit : 1 cours.
Sans confirmation, la place n'est pas garantie.
Le service est également disponible en ligne.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.
Les horaires peuvent changer en cas d'urgence.
Gardez votre ticket ou votre confirmation avec vous.
Les enfants doivent rester accompagnés d'un adulte.`;

const E7_2_CE_POOL_5 = buildExpressPool("e7-2-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Nom salle ?",
    text: ["Tennis Club", "Pharmacie", "Gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Club",
    vfQ: "Tennis Club.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Horaires ?",
    text: ["8 h–22 h", "Nuit", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Ouvert _________.",
    fill: "h",
    vfQ: "Horaires : 8 h–22 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier cours ?",
    text: ["cours débutant lundi 17 h", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours : _________.",
    fill: "cours",
    vfQ: "Cours : cours débutant lundi 17 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Deuxième cours ?",
    text: ["tournoi dimanche", "Dormir", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tournoi dimanche.",
    fill: "tournoi",
    vfQ: "tournoi dimanche.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Essai ?",
    text: ["1 cours", "50 fr", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Essai gratuit : _________.",
    fill: "1",
    vfQ: "Essai : 1 cours.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Type lieu ?",
    text: ["Salle de sport", "Musée", "Banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "sport",
    vfQ: "Sport.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Inscription nécessaire ?",
    text: ["Probable", "Non jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Cours sur _________.",
    fill: "affiche",
    vfQ: "Voir affiche.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_6 = `Flyer — Football club

Cours foot lundi et mercredi 17 h.
Inscription au bureau.
Tenue de sport obligatoire.
Premier cours gratuit.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Le lieu est facile à trouver avec les indications.`;

const E7_2_CE_POOL_6 = buildExpressPool("e7-2-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Football", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Football",
    vfQ: "Football.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Au bureau ou en ligne", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "bureau",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Obligatoire", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "obligatoire",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Gratuit", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "gratuit",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_7 = `Flyer — Club running

Sortie running samedi 8 h parc.
Tous niveaux.
Inscription gratuite en ligne.
Les horaires peuvent changer en cas d'urgence.
Gardez votre ticket ou votre confirmation avec vous.
Les enfants doivent rester accompagnés d'un adulte.
Respectez la file d'attente, s'il vous plaît.
Un plan simple est affiché juste à côté.
Les personnes à mobilité réduite sont prioritaires.
Le lieu est facile à trouver avec les indications.`;

const E7_2_CE_POOL_7 = buildExpressPool("e7-2-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Club", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Club",
    vfQ: "Club.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Au bureau ou en ligne", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Gratuit", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "gratuit",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_8 = `Flyer — Escalade indoor

Mur 15 m. Ouvert 10 h–22 h.
Chaussons location 5 fr.
Cours initiation samedi.
Gardez votre ticket ou votre confirmation avec vous.
Les enfants doivent rester accompagnés d'un adulte.
Respectez la file d'attente, s'il vous plaît.
Un plan simple est affiché juste à côté.
Les personnes à mobilité réduite sont prioritaires.
Merci de lire ce message jusqu'à la fin.`;

const E7_2_CE_POOL_8 = buildExpressPool("e7-2-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Escalade", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Escalade",
    vfQ: "Escalade.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_9 = `Flyer — Danse studio

Salsa mardi 19 h, bachata jeudi 20 h.
Partenaire non obligatoire.
Essai 10 fr.
Nous comptons sur vous.
Pensez à arriver un peu en avance.
Le trajet dure environ quinze minutes à pied.
Une carte de la zone est affichée dehors.
Les ascenseurs se trouvent à gauche de l'entrée.
Nous vous souhaitons une excellente journée.
Le service est également disponible en ligne.
Respectez la file d'attente, s'il vous plaît.`;

const E7_2_CE_POOL_9 = buildExpressPool("e7-2-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Danse", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Danse",
    vfQ: "Danse.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Obligatoire", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "obligatoire",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_10 = `Flyer — Badminton hall

Terrains réservation en ligne.
Raquettes location 3 fr.
Tournoi mensuel.
Respectez la file d'attente, s'il vous plaît.
Un plan simple est affiché juste à côté.
Les personnes à mobilité réduite sont prioritaires.
Pour plus d'infos, scannez le QR code ou demandez au guichet.
Nous vous remercions de votre patience.
Les toilettes se trouvent au fond du couloir.
Je reste près de mon téléphone aujourd'hui.`;

const E7_2_CE_POOL_10 = buildExpressPool("e7-2-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Badminton", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Badminton",
    vfQ: "Badminton.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_11 = `Flyer — Vélo club

Balade dimanche 9 h gare.
Casque obligatoire.
Parcours 30 km.
Une version en plusieurs langues est disponible à l'accueil.
Dis-moi si tu as besoin d'autre chose.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.
Photographies autorisées sans flash.
Un point d'eau potable est gratuit près de l'entrée.`;

const E7_2_CE_POOL_11 = buildExpressPool("e7-2-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Vélo", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Vélo",
    vfQ: "Vélo.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Obligatoire", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "obligatoire",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_12 = `Flyer — Natation masters

Entraînement lun/mer/ven 7 h.
Piscine 50 m.
Licence annuelle 80 fr.
Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.
Les consignes de sécurité sont affichées en rouge.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.`;

const E7_2_CE_POOL_12 = buildExpressPool("e7-2-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Natation", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Natation",
    vfQ: "Natation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_13 = `Flyer — Yoga parc

Cours gratuit été 18 h parc.
Tapis fourni.
Tous niveaux bienvenus.
Respectez la file d'attente, s'il vous plaît.
Un plan simple est affiché juste à côté.
Les personnes à mobilité réduite sont prioritaires.
Pour plus d'infos, scannez le QR code ou demandez au guichet.
Nous vous remercions de votre patience.
Les toilettes se trouvent au fond du couloir.
Le service client répond aussi par téléphone.`;

const E7_2_CE_POOL_13 = buildExpressPool("e7-2-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Yoga", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Yoga",
    vfQ: "Yoga.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Gratuit", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "gratuit",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_14 = `Flyer — Musculation

Salle 24 h avec badge.
Coach lundi 18 h gratuit.
Douche et casiers.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const E7_2_CE_POOL_14 = buildExpressPool("e7-2-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Musculation", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Musculation",
    vfQ: "Musculation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Gratuit", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "gratuit",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_15 = `Flyer — Basket club

Match amical samedi 15 h.
Gymnase municipal.
Inscription 20 fr.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Conservez le numéro de contact indiqué.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.`;

const E7_2_CE_POOL_15 = buildExpressPool("e7-2-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Basket", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Basket",
    vfQ: "Basket.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Au bureau ou en ligne", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_16 = `Flyer — Ski club

Sortie ski 6 h bus parking.
Forfait non inclus.
Réunion info jeudi 19 h.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Gardez ce texte pour vous en souvenir.`;

const E7_2_CE_POOL_16 = buildExpressPool("e7-2-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Ski", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Ski",
    vfQ: "Ski.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_17 = `Flyer — Volley plage

Terrain sable juin–août.
Cours mer 17 h.
Équipe 6 joueurs.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E7_2_CE_POOL_17 = buildExpressPool("e7-2-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Volley", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Volley",
    vfQ: "Volley.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_18 = `Flyer — Golf initiation

Cours samedi 10 h practice.
Clubs prêtés.
10 balles incluses.
Nous vous remercions de votre patience.
Les toilettes se trouvent au fond du couloir.
Une version en plusieurs langues est disponible à l'accueil.
N'oubliez pas de vérifier la date et l'heure.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.`;

const E7_2_CE_POOL_18 = buildExpressPool("e7-2-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Golf", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Golf",
    vfQ: "Golf.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_19 = `Flyer — Boxe fitness

Cours cardio boxe mardi 18 h 30.
Gants fournis.
Réservation obligatoire.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.`;

const E7_2_CE_POOL_19 = buildExpressPool("e7-2-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Boxe", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Boxe",
    vfQ: "Boxe.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Obligatoire", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "obligatoire",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);
const E7_2_CE_TEXT_20 = `Flyer — Patinage

Patinoire oct–mars 14 h–21 h.
Location patins 8 fr.
Cours enfants samedi.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Passe le bonjour à tout le monde.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Pensez à arriver un peu en avance.`;

const E7_2_CE_POOL_20 = buildExpressPool("e7-2-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Sport ?",
    text: ["Patinage", "Cuisine", "Lecture"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer — _________.",
    fill: "Patinage",
    vfQ: "Patinage.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Type document ?",
    text: ["Flyer sport", "Menu", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Flyer _________.",
    fill: "sport",
    vfQ: "Flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Inscription ?",
    text: ["Voir texte", "Jamais", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Inscription _________.",
    fill: "ligne",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Tenue sport ?",
    text: ["Non précisé", "Interdite", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "tenue _________.",
    fill: "sport",
    vfQ: "Voir texte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Premier cours ?",
    text: ["Payant", "1000 fr", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "premier cours _________.",
    fill: "payant",
    vfQ: "Voir flyer.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Lieu sport ?",
    text: ["Club ou salle", "Pharmacie", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Lieu : _________.",
    fill: "club",
    vfQ: "Club/salle.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Texte court ?",
    text: ["Oui", "Non", "Long"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Texte _________.",
    fill: "court",
    vfQ: "Court A1.",
    vfC: 0,
  }),
]);

export const E7_2_CE: CommunicationExercise[] = [
  readingPoolExercise({
    id: "e7-2-ce-1",
    readingText: E7_2_CE_TEXT_1,
    questionPool: E7_2_CE_POOL_1,
  }),
  readingPoolExercise({
    id: "e7-2-ce-2",
    readingText: E7_2_CE_TEXT_2,
    questionPool: E7_2_CE_POOL_2,
  }),
  readingPoolExercise({
    id: "e7-2-ce-3",
    readingText: E7_2_CE_TEXT_3,
    questionPool: E7_2_CE_POOL_3,
  }),
  readingPoolExercise({
    id: "e7-2-ce-4",
    readingText: E7_2_CE_TEXT_4,
    questionPool: E7_2_CE_POOL_4,
  }),
  readingPoolExercise({
    id: "e7-2-ce-5",
    readingText: E7_2_CE_TEXT_5,
    questionPool: E7_2_CE_POOL_5,
  }),
  readingPoolExercise({
    id: "e7-2-ce-6",
    readingText: E7_2_CE_TEXT_6,
    questionPool: E7_2_CE_POOL_6,
  }),
  readingPoolExercise({
    id: "e7-2-ce-7",
    readingText: E7_2_CE_TEXT_7,
    questionPool: E7_2_CE_POOL_7,
  }),
  readingPoolExercise({
    id: "e7-2-ce-8",
    readingText: E7_2_CE_TEXT_8,
    questionPool: E7_2_CE_POOL_8,
  }),
  readingPoolExercise({
    id: "e7-2-ce-9",
    readingText: E7_2_CE_TEXT_9,
    questionPool: E7_2_CE_POOL_9,
  }),
  readingPoolExercise({
    id: "e7-2-ce-10",
    readingText: E7_2_CE_TEXT_10,
    questionPool: E7_2_CE_POOL_10,
  }),
  readingPoolExercise({
    id: "e7-2-ce-11",
    readingText: E7_2_CE_TEXT_11,
    questionPool: E7_2_CE_POOL_11,
  }),
  readingPoolExercise({
    id: "e7-2-ce-12",
    readingText: E7_2_CE_TEXT_12,
    questionPool: E7_2_CE_POOL_12,
  }),
  readingPoolExercise({
    id: "e7-2-ce-13",
    readingText: E7_2_CE_TEXT_13,
    questionPool: E7_2_CE_POOL_13,
  }),
  readingPoolExercise({
    id: "e7-2-ce-14",
    readingText: E7_2_CE_TEXT_14,
    questionPool: E7_2_CE_POOL_14,
  }),
  readingPoolExercise({
    id: "e7-2-ce-15",
    readingText: E7_2_CE_TEXT_15,
    questionPool: E7_2_CE_POOL_15,
  }),
  readingPoolExercise({
    id: "e7-2-ce-16",
    readingText: E7_2_CE_TEXT_16,
    questionPool: E7_2_CE_POOL_16,
  }),
  readingPoolExercise({
    id: "e7-2-ce-17",
    readingText: E7_2_CE_TEXT_17,
    questionPool: E7_2_CE_POOL_17,
  }),
  readingPoolExercise({
    id: "e7-2-ce-18",
    readingText: E7_2_CE_TEXT_18,
    questionPool: E7_2_CE_POOL_18,
  }),
  readingPoolExercise({
    id: "e7-2-ce-19",
    readingText: E7_2_CE_TEXT_19,
    questionPool: E7_2_CE_POOL_19,
  }),
  readingPoolExercise({
    id: "e7-2-ce-20",
    readingText: E7_2_CE_TEXT_20,
    questionPool: E7_2_CE_POOL_20,
  }),
];

/* ── Production orale — dialogues à jouer ──────────────────────────────────── */


const MONITEUR = { title: "Le moniteur", vous: "le moniteur / la monitrice" };
const CLIENT = { title: "Le client", vous: "le client / la cliente" };
const AMI_1 = { title: "Le premier ami", vous: "le premier ami / la première amie" };
const AMI_2 = { title: "Le deuxième ami", vous: "le deuxième ami / la deuxième amie" };


export const E7_2_PO: ExpressPoDialogue[] = [
{
    id: "e7-2-po-1",
    title: "S'inscrire à un cours de voile",
    context: "Vous êtes à la base de loisirs. Vous voulez apprendre la voile.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Je peux vous aider ?" },
      { role: "B", text: "Bonjour, je voudrais prendre des cours de voile." },
      { role: "A", text: "Vous savez déjà faire de la voile ?" },
      { role: "B", text: "Non, je suis débutant." },
      { role: "A", text: "Les cours pour les débutants sont le mardi et le jeudi à 10 h." },
      { role: "B", text: "Très bien. Un cours dure combien de temps ?" },
      { role: "A", text: "Deux heures. C'est 25 € le cours." },
      { role: "B", text: "Parfait, je m'inscris pour mardi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-2",
    title: "Louer un VTT",
    context: "Vous voulez louer un vélo pour la journée.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, je voudrais louer un VTT, s'il vous plaît." },
      { role: "A", text: "Pour la journée ou la demi-journée ?" },
      { role: "B", text: "Pour la journée. C'est combien ?" },
      { role: "A", text: "15 € la journée, avec le casque." },
      { role: "B", text: "Très bien. Il y a de beaux chemins pour le vélo ici ?" },
      { role: "A", text: "Oui, il y a un joli chemin dans la forêt, derrière le lac." },
      { role: "B", text: "Super, merci beaucoup !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-3",
    title: "Choisir un sport ensemble",
    context: "Il fait beau. Vous choisissez une activité avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Il fait beau aujourd'hui ! On joue au tennis ?" },
      { role: "B", text: "Ah non, je déteste le tennis. On peut faire du VTT ?" },
      { role: "A", text: "Il fait trop chaud pour le vélo…" },
      { role: "B", text: "Alors on fait du canoé-kayak sur le lac ?" },
      { role: "A", text: "Bonne idée ! J'adore le canoé-kayak." },
      { role: "B", text: "On peut louer un canoé à la base de loisirs." },
      { role: "A", text: "D'accord. On y va à quelle heure ?" },
      { role: "B", text: "À 14 h, après le déjeuner !" },
      { role: "A", text: "Parfait, j'ai toutes les infos." },
      { role: "B", text: "Super. À bientôt !" },
],
  },
  {
    id: "e7-2-po-4",
    title: "La météo et l'activité",
    context: "Vous téléphonez à la base de loisirs : vous voulez savoir si votre cours a lieu.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Base de loisirs du Lac, bonjour !" },
      { role: "B", text: "Bonjour, j'ai un cours de voile à 11 h. Il a lieu aujourd'hui ?" },
      { role: "A", text: "Il y a beaucoup de vent ce matin, le cours est annulé." },
      { role: "B", text: "Ah dommage… Et demain ?" },
      { role: "A", text: "Demain, il fait beau. Le cours est à 11 h, comme d'habitude." },
      { role: "B", text: "Parfait. Je dois apporter quelque chose ?" },
      { role: "A", text: "Non, nous prêtons tout le matériel." },
      { role: "B", text: "Merci, à demain !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-5",
    title: "Apprendre à nager",
    context: "Vous ne savez pas nager et vous voulez prendre des cours.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Qu'est-ce que je peux faire pour vous ?" },
      { role: "B", text: "Bonjour, je ne sais pas nager et je voudrais apprendre." },
      { role: "A", text: "Pas de problème ! Il y a des cours pour les adultes débutants." },
      { role: "B", text: "C'est quand ?" },
      { role: "A", text: "Le mardi soir à 18 h, à la piscine." },
      { role: "B", text: "Et le cours coûte combien ?" },
      { role: "A", text: "12 € le cours, ou 100 € pour dix cours." },
      { role: "B", text: "Je prends dix cours. Merci !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-6",
    title: "Une sortie en canoé-kayak",
    context: "Vous réservez une sortie en canoé-kayak pour deux personnes.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour, vous désirez ?" },
      { role: "B", text: "Bonjour, on peut faire du canoé-kayak aujourd'hui ?" },
      { role: "A", text: "Oui, il y a une sortie à 10 h. Vous êtes combien ?" },
      { role: "B", text: "Deux personnes. La sortie dure combien de temps ?" },
      { role: "A", text: "Deux heures, sur le lac et sur la rivière." },
      { role: "B", text: "Il faut savoir nager ?" },
      { role: "A", text: "Oui, et vous portez un gilet de sauvetage." },
      { role: "B", text: "D'accord, on réserve pour 10 h !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-7",
    title: "Le sport de chacun",
    context: "Vous parlez des sports que vous pratiquez avec un collègue.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu fais du sport, toi ?" },
      { role: "B", text: "Oui, je fais de la natation le lundi et du vélo le week-end. Et toi ?" },
      { role: "A", text: "Moi, je fais de l'escalade avec mon frère." },
      { role: "B", text: "L'escalade ? Ce n'est pas dangereux ?" },
      { role: "A", text: "Non, on grimpe avec un casque et une corde." },
      { role: "B", text: "Et tu en fais où ?" },
      { role: "A", text: "En salle en hiver, et en montagne en été." },
      { role: "B", text: "Super ! Je veux bien essayer un jour." },
      { role: "A", text: "Merci pour votre aide." },
      { role: "B", text: "Je vous en prie. Bonne journée !" },
],
  },
  {
    id: "e7-2-po-8",
    title: "Le cours d'escalade",
    context: "Vous demandez des informations sur le cours d'escalade.",
    roleA: MONITEUR,
    roleB: CLIENT,
    lines: [
      { role: "A", text: "Bonjour ! Vous avez une question ?" },
      { role: "B", text: "Oui, je voudrais essayer l'escalade. Il y a un cours aujourd'hui ?" },
      { role: "A", text: "Oui, à 11 h. Il dure deux heures." },
      { role: "B", text: "Je n'ai jamais fait d'escalade. C'est un problème ?" },
      { role: "A", text: "Non, c'est un cours pour les débutants." },
      { role: "B", text: "Qu'est-ce qu'il faut apporter ?" },
      { role: "A", text: "Des baskets et une bouteille d'eau. Nous prêtons le casque." },
      { role: "B", text: "Parfait, je m'inscris !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e7-2-po-9",
    title: "Un week-end au ski",
    context: "Vous préparez un week-end à la montagne avec un ami.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu viens à la montagne ce week-end ? Les pistes ouvrent samedi !" },
      { role: "B", text: "Oui ! Mais je ne sais pas faire du ski…" },
      { role: "A", text: "Tu peux prendre un cours de ski débutant le samedi matin." },
      { role: "B", text: "Bonne idée. Et toi, tu skies ?" },
      { role: "A", text: "Oui, mais je voudrais essayer le surf cette année." },
      { role: "B", text: "Il fait quel temps ce week-end ?" },
      { role: "A", text: "Il neige vendredi et il fait beau samedi. C'est parfait !" },
      { role: "B", text: "Super, on part vendredi soir !" },
      { role: "A", text: "Merci pour le cours !" },
      { role: "B", text: "De rien. À la prochaine !" },
],
  },
  {
    id: "e7-2-po-10",
    title: "Un match de tennis",
    context: "Vous proposez un match de tennis à un collègue.",
    roleA: AMI_1,
    roleB: AMI_2,
    lines: [
      { role: "A", text: "Tu joues au tennis, non ?" },
      { role: "B", text: "Oui, je joue le samedi matin. Pourquoi ?" },
      { role: "A", text: "On fait un match ensemble ce week-end ?" },
      { role: "B", text: "D'accord ! On joue où ?" },
      { role: "A", text: "Au stade, il y a des courts de tennis. C'est 10 € l'heure." },
      { role: "B", text: "Très bien. Samedi à 9 h, ça te va ?" },
      { role: "A", text: "Parfait. J'apporte les balles." },
      { role: "B", text: "Et moi, je te prête une raquette si tu veux !" },
      { role: "A", text: "Bon courage pour la suite !" },
      { role: "B", text: "Merci, toi aussi !" },
],
  },
  {
  id: "e7-2-po-11",
  title: "Demander une information sur une activité",
  context: "Vous parlez en français simple. Vous devez demander une information sur une activité : un atelier de peinture pour adultes.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour un atelier de peinture pour adultes." },
    { role: "A", text: "Bien sûr. Il a lieu le mardi soir." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui. Le matériel est inclus." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
  {
  id: "e7-2-po-12",
  title: "Expliquer un problème avec une activité",
  context: "Vous parlez en français simple. Vous devez expliquer un problème avec une activité : je ne peux pas venir au cours aujourd'hui.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : je ne peux pas venir au cours aujourd'hui." },
    { role: "A", text: "Je comprends. Prévenez simplement par message." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Vous pourrez rattraper samedi." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
  {
  id: "e7-2-po-13",
  title: "Prendre rendez-vous pour une activité",
  context: "Vous parlez en français simple. Vous devez prendre rendez-vous pour une activité : essayer le cours de danse.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais essayer le cours de danse." },
    { role: "A", text: "Je peux vous proposer jeudi à 18 heures." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Je veux voir le niveau." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
  {
  id: "e7-2-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous parlez en français simple. Vous devez confirmer un rendez-vous : mon inscription à l'atelier photo.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme mon inscription à l'atelier photo." },
    { role: "A", text: "Très bien. C'est bien samedi matin ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "J'apporte mon appareil." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
  {
  id: "e7-2-po-15",
  title: "Demander conseil sur une activité",
  context: "Vous parlez en français simple. Vous devez demander conseil sur une activité : choisir une activité calme.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour choisir une activité calme." },
    { role: "A", text: "Le dessin est très agréable." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "La chorale est plus sociale." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
  {
  id: "e7-2-po-16",
  title: "Signaler un retard",
  context: "Vous parlez en français simple. Vous devez signaler un retard : j'arrive en retard au club.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : j'arrive en retard au club." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Mon rendez-vous a fini tard." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Commencez sans moi." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
  {
  id: "e7-2-po-17",
  title: "Faire une réclamation polie",
  context: "Vous parlez en français simple. Vous devez faire une réclamation polie : la salle était fermée hier.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : la salle était fermée hier." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "Personne n'a prévenu le groupe." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Pouvez-vous envoyer un message la prochaine fois ?" },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
  {
  id: "e7-2-po-18",
  title: "Demander une aide urgente",
  context: "Vous parlez en français simple. Vous devez demander une aide urgente : savoir si le cours est maintenu ce soir.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour savoir si le cours est maintenu ce soir." },
    { role: "A", text: "Oui, mais dans la salle B." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Venez dix minutes avant." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
  {
  id: "e7-2-po-19",
  title: "Comparer deux possibilités",
  context: "Vous parlez en français simple. Vous devez comparer deux possibilités : le yoga et la danse.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare le yoga et la danse." },
    { role: "A", text: "Le yoga est plus calme." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "La danse bouge beaucoup plus." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
  {
  id: "e7-2-po-20",
  title: "Remercier pour une aide",
  context: "Vous parlez en français simple. Vous devez remercier pour une aide : l'accueil au club.",
  roleA: { title: "L'animateur", vous: "l'animateur / l'animatrice" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour l'accueil au club." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Je me suis tout de suite senti bien." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je reviens la semaine prochaine." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
},
];


/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E7_2_PE: ExpressPePrompt[] = [
  {
    id: "e7-2-pe-1",
    title: "Sports d'hiver",
    situation: "",
    instruction: "Vous êtes en vacances d'hiver. Vous écrivez un message à un(e) ami(e) et vous lui racontez quels sports vous faites.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-2",
    title: "Goûts sportifs",
    situation: "",
    instruction: "Dites quels sports vous aimez, quels sports vous n'aimez pas et quels sports vous détestez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-3",
    title: "Cours de ski",
    situation: "",
    instruction: "Vous racontez votre premier cours de ski à un(e) ami(e) en parlant du professeur, de la piste, de vos progrès et de vos difficultés.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-4",
    title: "Match de football",
    situation: "",
    instruction: "Vous écrivez un message après un match de football pour dire avec qui vous avez joué, le score et ce que vous avez ressenti.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-5",
    title: "Nouvelle activité",
    situation: "",
    instruction: "Vous voulez essayer un nouveau sport et vous écrivez à un(e) ami(e) pour proposer l'activité, le lieu, le prix et l'heure.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-6",
    title: "Sport à l'école",
    situation: "",
    instruction: "Vous décrivez votre cours de sport à l'école, les exercices faits, votre équipe et ce que vous aimez pendant cette leçon.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-7",
    title: "Blessure légère",
    situation: "",
    instruction: "Vous vous êtes blessé(e) pendant le sport et vous écrivez à un(e) ami(e) pour expliquer ce qui s'est passé et dire si vous continuez l'entraînement.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-8",
    title: "Salle de sport",
    situation: "",
    instruction: "Vous écrivez à un club de sport pour demander les horaires, les prix, les cours disponibles et la possibilité de faire un essai.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-9",
    title: "Randonnée",
    situation: "",
    instruction: "Vous racontez une randonnée en montagne avec le départ, la météo, le paysage et votre fatigue à la fin.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-10",
    title: "Natation",
    situation: "",
    instruction: "Vous écrivez à un(e) ami(e) pour l'inviter à la piscine, donner l'heure du rendez-vous et dire ce qu'il faut apporter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-11",
    title: "Sport préféré",
    situation: "",
    instruction: "Vous présentez votre sport préféré en expliquant quand vous le pratiquez, avec qui, où et pourquoi il vous plaît.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-12",
    title: "Tournoi du week-end",
    situation: "",
    instruction: "Vous participez à un tournoi ce week-end et vous écrivez à votre famille pour présenter l'organisation, les adversaires et vos espoirs.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-13",
    title: "Équipement de sport",
    situation: "",
    instruction: "Vous écrivez à un(e) ami(e) pour demander de vous prêter du matériel de sport et expliquer pourquoi vous en avez besoin.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-14",
    title: "Vacances actives",
    situation: "",
    instruction: "Vous décrivez une semaine de vacances très sportive avec les activités de chaque jour et ce que vous avez préféré.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-15",
    title: "Sport en famille",
    situation: "",
    instruction: "Vous racontez une sortie sportive en famille en parlant du lieu, des participants, du temps et du moment le plus drôle.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-16",
    title: "Invitation à courir",
    situation: "",
    instruction: "Vous invitez un(e) ami(e) à courir avec vous demain matin et vous expliquez le parcours, la durée et le rythme prévu.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-17",
    title: "Sport à la télévision",
    situation: "",
    instruction: "Vous expliquez si vous préférez faire du sport ou regarder le sport à la télévision, avec des exemples simples.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-18",
    title: "Après l'entraînement",
    situation: "",
    instruction: "Vous écrivez un message après l'entraînement pour dire que vous êtes fatigué(e), ce que vous avez réussi et ce que vous voulez améliorer.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-19",
    title: "Sport et santé",
    situation: "",
    instruction: "Vous écrivez un court texte pour expliquer pourquoi le sport est bon pour la santé et comment vous pouvez bouger chaque semaine.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-2-pe-20",
    title: "Compétition gagnée",
    situation: "",
    instruction: "Vous annoncez à un(e) ami(e) que vous avez gagné une petite compétition et vous racontez la préparation, le résultat et la fête après.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
