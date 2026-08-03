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

const E7_1_CE_TEXT_1 = `Carte bienvenue — Hôtel du Lac

Bienvenue ! WiFi : Lac2024. Mot de passe : accueil123.
Petit-déjeuner 7 h–10 h salle Riviera.
Réception 24 h/24.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
Le personnel peut répondre en français simple.
Merci de respecter le calme des autres personnes.`;

const E7_1_CE_POOL_1 = buildExpressPool("e7-1-ce-1", [
  q({
    id: "ce-q1",
    textQ: "Nom hôtel ?",
    text: ["Hôtel du Lac", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte bienvenue — _________.",
    fill: "Lac",
    vfQ: "Hôtel Hôtel du Lac.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "WiFi réseau ?",
    text: ["Lac2024", "Bus_12", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "WiFi : _________.",
    fill: "Lac2024",
    vfQ: "WiFi Lac2024.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Mot de passe WiFi ?",
    text: ["accueil123", "12345", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot de passe : _________.",
    fill: "accueil123",
    vfQ: "MDP : accueil123.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Horaires petit-déjeuner ?",
    text: ["7 h–10 h", "20 h–23 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit-déjeuner _________.",
    fill: "h",
    vfQ: "PDJ : 7 h–10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Salle petit-déjeuner ?",
    text: ["Riviera", "Gare", "Rue"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "salle _________.",
    fill: "Riviera",
    vfQ: "Salle Riviera.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Réception ?",
    text: ["24 h/24", "8 h–18 h", "Fermée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "24 h",
    vfQ: "Réception 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type document ?",
    text: ["Carte bienvenue hôtel", "Billet train", "Menu bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte _________.",
    fill: "bienvenue",
    vfQ: "Carte bienvenue.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_2 = `Carte bienvenue — Hôtel Bellevue

Bienvenue ! WiFi : Bellevue_Guest. Mot de passe : lac2025.
Petit-déjeuner 6 h 30–10 h 30 salle Alpes.
Réception 24 h/24.
Vous pouvez répondre directement à ce message.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.`;

const E7_1_CE_POOL_2 = buildExpressPool("e7-1-ce-2", [
  q({
    id: "ce-q1",
    textQ: "Nom hôtel ?",
    text: ["Hôtel Bellevue", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte bienvenue — _________.",
    fill: "Bellevue",
    vfQ: "Hôtel Hôtel Bellevue.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "WiFi réseau ?",
    text: ["Bellevue_Guest", "Bus_12", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "WiFi : _________.",
    fill: "Bellevue_Guest",
    vfQ: "WiFi Bellevue_Guest.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Mot de passe WiFi ?",
    text: ["lac2025", "12345", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot de passe : _________.",
    fill: "lac2025",
    vfQ: "MDP : lac2025.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Horaires petit-déjeuner ?",
    text: ["6 h 30–10 h 30", "20 h–23 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit-déjeuner _________.",
    fill: "30",
    vfQ: "PDJ : 6 h 30–10 h 30.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Salle petit-déjeuner ?",
    text: ["Alpes", "Gare", "Rue"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "salle _________.",
    fill: "Alpes",
    vfQ: "Salle Alpes.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Réception ?",
    text: ["24 h/24", "8 h–18 h", "Fermée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "24 h",
    vfQ: "Réception 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type document ?",
    text: ["Carte bienvenue hôtel", "Billet train", "Menu bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte _________.",
    fill: "bienvenue",
    vfQ: "Carte bienvenue.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_3 = `Carte bienvenue — Hôtel Central

Bienvenue ! WiFi : Central_WiFi. Mot de passe : welcome99.
Petit-déjeuner 7 h–11 h salle Jardin.
Réception 6 h–23 h.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.
En cas d'annulation, prévenez-nous rapidement.
Le règlement est simple et affiché à l'entrée.
À très bientôt, prends soin de toi.`;

const E7_1_CE_POOL_3 = buildExpressPool("e7-1-ce-3", [
  q({
    id: "ce-q1",
    textQ: "Nom hôtel ?",
    text: ["Hôtel Central", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte bienvenue — _________.",
    fill: "Central",
    vfQ: "Hôtel Hôtel Central.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "WiFi réseau ?",
    text: ["Central_WiFi", "Bus_12", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "WiFi : _________.",
    fill: "Central_WiFi",
    vfQ: "WiFi Central_WiFi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Mot de passe WiFi ?",
    text: ["welcome99", "12345", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot de passe : _________.",
    fill: "welcome99",
    vfQ: "MDP : welcome99.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Horaires petit-déjeuner ?",
    text: ["7 h–11 h", "20 h–23 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit-déjeuner _________.",
    fill: "h",
    vfQ: "PDJ : 7 h–11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Salle petit-déjeuner ?",
    text: ["Jardin", "Gare", "Rue"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "salle _________.",
    fill: "Jardin",
    vfQ: "Salle Jardin.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Réception ?",
    text: ["6 h–23 h", "8 h–18 h", "Fermée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "6 h–23 h",
    vfQ: "Réception 6 h–23 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type document ?",
    text: ["Carte bienvenue hôtel", "Billet train", "Menu bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte _________.",
    fill: "bienvenue",
    vfQ: "Carte bienvenue.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_4 = `Carte bienvenue — Hôtel Mont-Blanc

Bienvenue ! WiFi : MontBlanc. Mot de passe : hotel2024.
Petit-déjeuner 7 h–10 h salle Panorama.
Réception 24 h/24.
Tout est organisé pour que ce soit simple.
Merci de parler doucement dans les couloirs.
Les sacs volumineux se déposent à l'accueil.
Un vestiaire gratuit est disponible.
Les consignes de sécurité sont affichées en rouge.`;

const E7_1_CE_POOL_4 = buildExpressPool("e7-1-ce-4", [
  q({
    id: "ce-q1",
    textQ: "Nom hôtel ?",
    text: ["Hôtel Mont-Blanc", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte bienvenue — _________.",
    fill: "Mont-Blanc",
    vfQ: "Hôtel Hôtel Mont-Blanc.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "WiFi réseau ?",
    text: ["MontBlanc", "Bus_12", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "WiFi : _________.",
    fill: "MontBlanc",
    vfQ: "WiFi MontBlanc.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Mot de passe WiFi ?",
    text: ["hotel2024", "12345", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot de passe : _________.",
    fill: "hotel2024",
    vfQ: "MDP : hotel2024.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Horaires petit-déjeuner ?",
    text: ["7 h–10 h", "20 h–23 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit-déjeuner _________.",
    fill: "h",
    vfQ: "PDJ : 7 h–10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Salle petit-déjeuner ?",
    text: ["Panorama", "Gare", "Rue"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "salle _________.",
    fill: "Panorama",
    vfQ: "Salle Panorama.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Réception ?",
    text: ["24 h/24", "8 h–18 h", "Fermée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "24 h",
    vfQ: "Réception 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type document ?",
    text: ["Carte bienvenue hôtel", "Billet train", "Menu bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte _________.",
    fill: "bienvenue",
    vfQ: "Carte bienvenue.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_5 = `Carte bienvenue — Auberge du Port

Bienvenue ! WiFi : Port_Free. Mot de passe : bateau12.
Petit-déjeuner 8 h–10 h salle Marina.
Réception 7 h–22 h.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Le service client répond aussi par téléphone.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.`;

const E7_1_CE_POOL_5 = buildExpressPool("e7-1-ce-5", [
  q({
    id: "ce-q1",
    textQ: "Nom hôtel ?",
    text: ["Auberge du Port", "Gare", "Port"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte bienvenue — _________.",
    fill: "Port",
    vfQ: "Hôtel Auberge du Port.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "WiFi réseau ?",
    text: ["Port_Free", "Bus_12", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "WiFi : _________.",
    fill: "Port_Free",
    vfQ: "WiFi Port_Free.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Mot de passe WiFi ?",
    text: ["bateau12", "12345", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot de passe : _________.",
    fill: "bateau12",
    vfQ: "MDP : bateau12.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Horaires petit-déjeuner ?",
    text: ["8 h–10 h", "20 h–23 h", "Fermé"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Petit-déjeuner _________.",
    fill: "h",
    vfQ: "PDJ : 8 h–10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Salle petit-déjeuner ?",
    text: ["Marina", "Gare", "Rue"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "salle _________.",
    fill: "Marina",
    vfQ: "Salle Marina.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Réception ?",
    text: ["7 h–22 h", "8 h–18 h", "Fermée"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "7 h–22 h",
    vfQ: "Réception 7 h–22 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Type document ?",
    text: ["Carte bienvenue hôtel", "Billet train", "Menu bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Carte _________.",
    fill: "bienvenue",
    vfQ: "Carte bienvenue.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_6 = `Affiche — Réception hôtel

Check-in 15 h. Check-out 11 h.
Passeport ou carte d'identité obligatoire.
Caution : carte bancaire.
Les horaires peuvent changer en cas d'urgence.
Gardez votre ticket ou votre confirmation avec vous.
Les enfants doivent rester accompagnés d'un adulte.
Respectez la file d'attente, s'il vous plaît.
Un plan simple est affiché juste à côté.
Vous pouvez répondre directement à ce message.`;

const E7_1_CE_POOL_6 = buildExpressPool("e7-1-ce-6", [
  q({
    id: "ce-q1",
    textQ: "Check-in ?",
    text: ["15 h", "11 h", "8 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in _________.",
    fill: "15",
    vfQ: "Check-in 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Check-out ?",
    text: ["11 h", "15 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-out _________.",
    fill: "11",
    vfQ: "Check-out 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Document obligatoire ?",
    text: ["Passeport ou carte d'identité", "Rien", "Chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ obligatoire.",
    fill: "Passeport",
    vfQ: "Passeport ou carte d'identité obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Caution ?",
    text: ["carte bancaire", "Gratuit", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Caution : _________.",
    fill: "carte",
    vfQ: "Caution : carte bancaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Type affiche ?",
    text: ["Réception hôtel", "Gare", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Réception",
    vfQ: "Affiche réception.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Check-in avant midi ?",
    text: ["Non, 15 h", "Oui 8 h", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in 15 h.",
    fill: "15",
    vfQ: "Check-in 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu ?",
    text: ["Hôtel", "Aéroport", "École"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_7 = `Affiche — Réception hôtel

Check-in 14 h. Check-out 10 h.
Pièce d'identité obligatoire.
Caution : carte bancaire ou espèces.
Gardez ce texte pour vous en souvenir.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.
Prenez votre temps pour comprendre le message.
En cas de changement, un nouvel avis sera publié.`;

const E7_1_CE_POOL_7 = buildExpressPool("e7-1-ce-7", [
  q({
    id: "ce-q1",
    textQ: "Check-in ?",
    text: ["14 h", "10 h", "8 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in _________.",
    fill: "14",
    vfQ: "Check-in 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Check-out ?",
    text: ["10 h", "14 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-out _________.",
    fill: "10",
    vfQ: "Check-out 10 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Document obligatoire ?",
    text: ["Pièce d'identité", "Rien", "Chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ obligatoire.",
    fill: "Pièce",
    vfQ: "Pièce d'identité obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Caution ?",
    text: ["carte bancaire ou espèces", "Gratuit", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Caution : _________.",
    fill: "carte",
    vfQ: "Caution : carte bancaire ou espèces.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Type affiche ?",
    text: ["Réception hôtel", "Gare", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Réception",
    vfQ: "Affiche réception.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Check-in avant midi ?",
    text: ["Non, 15 h", "Oui 8 h", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in 14 h.",
    fill: "14",
    vfQ: "Check-in 14 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu ?",
    text: ["Hôtel", "Aéroport", "École"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_8 = `Affiche — Réception hôtel

Check-in 15 h. Check-out 11 h.
Passeport obligatoire.
Caution : empreinte carte.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Pensez à arriver un peu en avance.
Merci de votre attention et de votre patience.`;

const E7_1_CE_POOL_8 = buildExpressPool("e7-1-ce-8", [
  q({
    id: "ce-q1",
    textQ: "Check-in ?",
    text: ["15 h", "11 h", "8 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in _________.",
    fill: "15",
    vfQ: "Check-in 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Check-out ?",
    text: ["11 h", "15 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-out _________.",
    fill: "11",
    vfQ: "Check-out 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Document obligatoire ?",
    text: ["Passeport", "Rien", "Chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ obligatoire.",
    fill: "Passeport",
    vfQ: "Passeport obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Caution ?",
    text: ["empreinte carte", "Gratuit", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Caution : _________.",
    fill: "empreinte",
    vfQ: "Caution : empreinte carte.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Type affiche ?",
    text: ["Réception hôtel", "Gare", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Réception",
    vfQ: "Affiche réception.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Check-in avant midi ?",
    text: ["Non, 15 h", "Oui 8 h", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in 15 h.",
    fill: "15",
    vfQ: "Check-in 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu ?",
    text: ["Hôtel", "Aéroport", "École"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_9 = `Affiche — Réception hôtel

Check-in 16 h. Check-out 12 h.
Carte d'identité obligatoire.
Caution : carte bancaire.
Les toilettes se trouvent au fond du couloir.
Une version en plusieurs langues est disponible à l'accueil.
Je reste près de mon téléphone aujourd'hui.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.`;

const E7_1_CE_POOL_9 = buildExpressPool("e7-1-ce-9", [
  q({
    id: "ce-q1",
    textQ: "Check-in ?",
    text: ["16 h", "12 h", "8 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in _________.",
    fill: "16",
    vfQ: "Check-in 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Check-out ?",
    text: ["12 h", "16 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-out _________.",
    fill: "12",
    vfQ: "Check-out 12 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Document obligatoire ?",
    text: ["Carte d'identité", "Rien", "Chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ obligatoire.",
    fill: "Carte",
    vfQ: "Carte d'identité obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Caution ?",
    text: ["carte bancaire", "Gratuit", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Caution : _________.",
    fill: "carte",
    vfQ: "Caution : carte bancaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Type affiche ?",
    text: ["Réception hôtel", "Gare", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Réception",
    vfQ: "Affiche réception.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Check-in avant midi ?",
    text: ["Non, 15 h", "Oui 8 h", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in 16 h.",
    fill: "16",
    vfQ: "Check-in 16 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu ?",
    text: ["Hôtel", "Aéroport", "École"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_10 = `Affiche — Réception hôtel

Check-in 15 h. Check-out 11 h.
Passeport ou permis obligatoire.
Caution : carte bancaire.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Vous pouvez venir accompagné(e) si vous le souhaitez.
Merci de votre attention et de votre patience.
Une confirmation arrivera ensuite.
Le lieu est facile à trouver.`;

const E7_1_CE_POOL_10 = buildExpressPool("e7-1-ce-10", [
  q({
    id: "ce-q1",
    textQ: "Check-in ?",
    text: ["15 h", "11 h", "8 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in _________.",
    fill: "15",
    vfQ: "Check-in 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Check-out ?",
    text: ["11 h", "15 h", "23 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-out _________.",
    fill: "11",
    vfQ: "Check-out 11 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Document obligatoire ?",
    text: ["Passeport ou permis", "Rien", "Chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ obligatoire.",
    fill: "Passeport",
    vfQ: "Passeport ou permis obligatoire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Caution ?",
    text: ["carte bancaire", "Gratuit", "Interdit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Caution : _________.",
    fill: "carte",
    vfQ: "Caution : carte bancaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Type affiche ?",
    text: ["Réception hôtel", "Gare", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Affiche — _________.",
    fill: "Réception",
    vfQ: "Affiche réception.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Check-in avant midi ?",
    text: ["Non, 15 h", "Oui 8 h", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Check-in 15 h.",
    fill: "15",
    vfQ: "Check-in 15 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q7",
    textQ: "Lieu ?",
    text: ["Hôtel", "Aéroport", "École"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Réception _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
]);
const E7_1_CE_TEXT_11 = `Note — Règlement intérieur

Silence après 22 h.
Animaux interdits.
Fumer interdit dans les chambres.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
Merci de votre attention et de votre patience.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.
Conservez le numéro de contact indiqué.`;

const E7_1_CE_POOL_11 = buildExpressPool("e7-1-ce-11", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Règlement intérieur", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Règlement",
    vfQ: "Sujet : Règlement intérieur.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Silence", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Silence",
    vfQ: "Silence.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note règlement intérieur", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_12 = `Note — Mini-bar

Mini-bar : eau 5 fr, jus 6 fr, bière 8 fr.
Facturation à la chambre.
Remplissage quotidien.
N'oubliez pas de vérifier la date.
Une confirmation sera envoyée ensuite.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
Le temps est beau, alors tout devrait bien se passer.
Prenez un pull, au cas où il ferait plus frais.`;

const E7_1_CE_POOL_12 = buildExpressPool("e7-1-ce-12", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Mini-bar", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Mini-bar",
    vfQ: "Sujet : Mini-bar.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Mini-bar", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Mini-bar",
    vfQ: "Mini-bar.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note mini-bar", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_13 = `Note — Service chambre

Room service 7 h–22 h.
Menu sur la télévision.
Commande au poste 0.
En cas de changement, un nouvel avis sera publié.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const E7_1_CE_POOL_13 = buildExpressPool("e7-1-ce-13", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Service chambre", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Service",
    vfQ: "Sujet : Service chambre.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Room", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Room",
    vfQ: "Room.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note service chambre", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_14 = `Note — Parking

Parking souterrain 25 fr/nuit.
Places limitées.
Réservation à la réception.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.`;

const E7_1_CE_POOL_14 = buildExpressPool("e7-1-ce-14", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Parking", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Parking",
    vfQ: "Sujet : Parking.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Parking", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Parking",
    vfQ: "Parking.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note parking", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_15 = `Note — Piscine

Piscine 7 h–21 h.
Bonnet obligatoire.
Enfants accompagnés.
Les documents se téléchargent aussi en ligne.
Le numéro d'urgence est affiché partout.
Nous restons disponibles pour vous aider.
Merci de garder ce document avec vous.
Les informations sont valables pour cette semaine.
Si quelque chose n'est pas clair, posez la question.
Pensez à vérifier la date et le lieu.`;

const E7_1_CE_POOL_15 = buildExpressPool("e7-1-ce-15", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Piscine", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Piscine",
    vfQ: "Sujet : Piscine.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Piscine", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Piscine",
    vfQ: "Piscine.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note piscine", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_16 = `Note — Blanchisserie

Service blanchisserie express.
Dépôt avant 9 h, retour 18 h.
Tarif : 15 fr/kg.
Nous vous attendons avec plaisir.
Les places sont limitées, merci de confirmer.
En cas d'annulation, prévenez-nous rapidement.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
Pensez à arriver un peu en avance.`;

const E7_1_CE_POOL_16 = buildExpressPool("e7-1-ce-16", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Blanchisserie", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Blanchisserie",
    vfQ: "Sujet : Blanchisserie.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Service", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Service",
    vfQ: "Service.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note blanchisserie", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_17 = `Note — Réveil

Réveil téléphonique sur demande.
Composer 0 pour réception.
Gratuit.
Si quelque chose n'est pas clair, posez la question.
Pensez à vérifier la date et le lieu.
Une réponse rapide nous aide beaucoup.
Vous pouvez venir avec un ami ou un membre de la famille.
Apportez une pièce d'identité si possible.
Le lieu est accessible en bus et à pied.
En cas de changement, un nouvel avis sera publié.
Bonne journée à toutes et à tous.`;

const E7_1_CE_POOL_17 = buildExpressPool("e7-1-ce-17", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Réveil", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Réveil",
    vfQ: "Sujet : Réveil.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Réveil", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Réveil",
    vfQ: "Réveil.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note réveil", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_18 = `Note — Consigne

Consigne bagages gratuite.
Accès 24 h avec carte chambre.
Rez-de-chaussée.
En cas d'annulation, prévenez-nous rapidement.
Le règlement est simple et affiché à l'entrée.
Un goûter ou une boisson est parfois offert.
Les photos peuvent être prises pour le souvenir.
N'oubliez pas de vérifier la date et l'heure.
Merci de respecter le calme des autres personnes.
Le personnel peut vous aider en français simple.`;

const E7_1_CE_POOL_18 = buildExpressPool("e7-1-ce-18", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Consigne", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Consigne",
    vfQ: "Sujet : Consigne.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Consigne", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Consigne",
    vfQ: "Consigne.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note consigne", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_19 = `Note — Ascenseur

Ascenseur panne : utiliser escalier B.
Réparation prévue demain 10 h.
Excuses.
Tout le monde est le bienvenu.
C'est important pour moi, merci beaucoup.
Nous traitons votre demande rapidement.
À bientôt, et merci de votre lecture.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.`;

const E7_1_CE_POOL_19 = buildExpressPool("e7-1-ce-19", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Ascenseur", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Ascenseur",
    vfQ: "Sujet : Ascenseur.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Ascenseur", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Ascenseur",
    vfQ: "Ascenseur.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note ascenseur", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
const E7_1_CE_TEXT_20 = `Note — Climatisation

Climatisation : télécommande murale.
Température 20–24 °C.
Fenêtre fermée.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.
Tout est organisé pour que ce soit simple.
Le contact est indiqué dans le message.
N'oubliez pas de vérifier la date.
Bonne journée à toutes et à tous.`;

const E7_1_CE_POOL_20 = buildExpressPool("e7-1-ce-20", [
  q({
    id: "ce-q1",
    textQ: "Sujet ?",
    text: ["Climatisation", "Bus", "Train"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note — _________.",
    fill: "Climatisation",
    vfQ: "Sujet : Climatisation.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Lieu ?",
    text: ["Hôtel", "Gare", "Plage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note _________.",
    fill: "hôtel",
    vfQ: "Hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Premier mot du corps ?",
    text: ["Climatisation", "Zéro", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Mot : _________.",
    fill: "Climatisation",
    vfQ: "Climatisation.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Type document ?",
    text: ["Note climatisation", "Roman", "Bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Type : _________.",
    fill: "Note",
    vfQ: "Note hôtel.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Info pratique ?",
    text: ["Oui", "Non", "?"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Info _________.",
    fill: "pratique",
    vfQ: "Oui.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Pour client hôtel ?",
    text: ["Oui", "Non", "Conducteur bus"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour _________.",
    fill: "client",
    vfQ: "Oui.",
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
    title: "Hôtel ou camping",
    situation: "",
    instruction: "Vous expliquez pourquoi vous choisissez l'hôtel ou le camping pour les vacances.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-2",
    title: "Réservation pour quatre",
    situation: "",
    instruction: "Vous téléphonez à un hôtel pour réserver une chambre pour quatre personnes et vous écrivez le contenu de votre appel avec les informations sur les heures d'arrivée, les repas et le prix.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-3",
    title: "Demande de chambre",
    situation: "",
    instruction: "Vous écrivez à un hôtel pour demander une chambre calme, préciser les dates, le nombre de personnes et le type de petit déjeuner souhaité.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-4",
    title: "Arrivée tardive",
    situation: "",
    instruction: "Vous prévenez l'hôtel que vous arrivez tard le soir et vous demandez si la réception est ouverte et où récupérer la clé.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-5",
    title: "Camping au lac",
    situation: "",
    instruction: "Vous racontez à un(e) ami(e) vos vacances au camping près du lac, votre tente, les sanitaires et les activités disponibles.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-6",
    title: "Avis sur un hôtel",
    situation: "",
    instruction: "Vous écrivez un court avis sur un hôtel après votre séjour en parlant de la chambre, de l'accueil, du prix et de ce que vous avez aimé.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-7",
    title: "Problème de chambre",
    situation: "",
    instruction: "Votre chambre d'hôtel est trop bruyante et vous écrivez à la réception pour expliquer le problème et demander une autre chambre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-8",
    title: "Vacances en famille",
    situation: "",
    instruction: "Vous organisez des vacances en famille et vous écrivez à vos parents pour proposer un logement, expliquer les avantages et donner le budget.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-9",
    title: "Petit déjeuner",
    situation: "",
    instruction: "Vous écrivez à l'hôtel pour demander les horaires du petit déjeuner, les aliments proposés et la possibilité de manger très tôt.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-10",
    title: "Réservation annulée",
    situation: "",
    instruction: "Vous devez annuler votre réservation et vous écrivez un message poli à l'hôtel pour vous excuser, expliquer la raison et demander les conditions.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-11",
    title: "Choix du quartier",
    situation: "",
    instruction: "Vous expliquez à un(e) ami(e) pourquoi vous choisissez un hôtel au centre-ville ou un camping à la campagne pour votre séjour.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-12",
    title: "Services de l'hôtel",
    situation: "",
    instruction: "Vous demandez à l'hôtel s'il y a un parking, une connexion Internet, une piscine et un restaurant ouvert le soir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-13",
    title: "Nuit en auberge",
    situation: "",
    instruction: "Vous racontez votre première nuit dans une auberge de jeunesse en décrivant la chambre, les autres voyageurs et l'ambiance.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-14",
    title: "Bagages à la réception",
    situation: "",
    instruction: "Vous écrivez à la réception pour demander si vous pouvez laisser vos bagages avant l'arrivée et après le départ.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-15",
    title: "Séjour romantique",
    situation: "",
    instruction: "Vous réservez un séjour pour deux personnes et vous écrivez à l'hôtel pour demander une chambre avec vue et une table au restaurant.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-16",
    title: "Camping sous la pluie",
    situation: "",
    instruction: "Il pleut pendant vos vacances au camping et vous écrivez à un(e) ami(e) pour raconter la situation et dire comment vous vous organisez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-17",
    title: "Accueil des animaux",
    situation: "",
    instruction: "Vous écrivez à un hôtel pour demander si les chiens sont acceptés, préciser la taille de votre animal et demander le supplément.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-18",
    title: "Départ de l'hôtel",
    situation: "",
    instruction: "Vous demandez à la réception l'heure de départ, la facture, un taxi et la possibilité de prendre un café avant de partir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-19",
    title: "Logement économique",
    situation: "",
    instruction: "Vous cherchez un logement pas cher pour les vacances et vous écrivez à un(e) ami(e) pour comparer l'hôtel, le camping et l'auberge.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e7-1-pe-20",
    title: "Clé perdue",
    situation: "",
    instruction: "Vous avez perdu la clé de votre chambre et vous écrivez à la réception pour expliquer où vous étiez, vous excuser et demander une solution.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
