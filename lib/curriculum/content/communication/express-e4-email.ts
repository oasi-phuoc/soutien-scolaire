import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E4 — Vêtements, restaurant, boulangerie.
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E4.1 — Acheter des vêtements
   ════════════════════════════════════════════════════════════════════════════ */

const E4_1_CE_EMAIL_TEXT_1 = `De : H&M Genève
Objet : Confirmation commande

Bonjour,

Merci pour votre intérêt chez H&M.
Articles : robe bleue taille M.
Prix : 59 francs.
Livraison/délai : livraison 3-5 jours.
Condition : retour gratuit 30 jours.

Cordialement,
H&M Genève`;

const E4_1_CE_EMAIL_POOL_1 = buildExpressPool("e4-1-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Robe bleue taille m", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "robe",
    vfQ: "Articles : robe bleue taille M.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["59 francs", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "59",
    vfQ: "Prix : 59 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Livraison 3-5 jours", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "livraison",
    vfQ: "Livraison : livraison 3-5 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Retour gratuit 30 jours", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "retour",
    vfQ: "Condition : retour gratuit 30 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Confirmation commande", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Confirmation",
    vfQ: "Objet : Confirmation commande.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["H&M", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "H&M",
    vfQ: "C'est H&M Genève.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_2 = `De : Zara Online
Objet : Votre colis est parti

Bonjour,

Merci pour votre intérêt chez Zara.
Articles : chemise blanche + pantalon.
Prix : 138 francs.
Livraison/délai : livraison demain.
Condition : suivi en pièce jointe.

Cordialement,
Zara Online`;

const E4_1_CE_EMAIL_POOL_2 = buildExpressPool("e4-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Chemise blanche + pantalon", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "chemise",
    vfQ: "Articles : chemise blanche + pantalon.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["138 francs", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "138",
    vfQ: "Prix : 138 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Livraison demain", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "livraison",
    vfQ: "Livraison : livraison demain.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Suivi en pièce jointe", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "suivi",
    vfQ: "Condition : suivi en pièce jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Votre colis est parti", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Votre",
    vfQ: "Objet : Votre colis est parti.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Zara", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Zara",
    vfQ: "C'est Zara Online.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_3 = `De : PKZ Lausanne
Objet : Soldes d'hiver

Bonjour,

Merci pour votre intérêt chez PKZ.
Articles : manteaux et pulls.
Prix : -30 à -50 %.
Livraison/délai : jusqu'au 28 février.
Condition : en magasin et en ligne.

Cordialement,
PKZ Lausanne`;

const E4_1_CE_EMAIL_POOL_3 = buildExpressPool("e4-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Manteaux et pulls", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "manteaux",
    vfQ: "Articles : manteaux et pulls.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["-30 à -50 %", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "-30",
    vfQ: "Prix : -30 à -50 %.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Jusqu'au 28 février", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "jusqu'au",
    vfQ: "Livraison : jusqu'au 28 février.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["En magasin et en ligne", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "en",
    vfQ: "Condition : en magasin et en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Soldes d'hiver", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Soldes",
    vfQ: "Objet : Soldes d'hiver.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["PKZ", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "PKZ",
    vfQ: "C'est PKZ Lausanne.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_4 = `De : Decathlon
Objet : Carte fidélité

Bonjour,

Merci pour votre intérêt chez Decathlon.
Articles : baskets et vêtements sport.
Prix : -10 % permanent.
Livraison/délai : valable 1 an.
Condition : cumulable avec promos.

À bientôt,
Decathlon`;

const E4_1_CE_EMAIL_POOL_4 = buildExpressPool("e4-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Baskets et vêtements sport", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "baskets",
    vfQ: "Articles : baskets et vêtements sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["-10 % permanent", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "-10",
    vfQ: "Prix : -10 % permanent.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Valable 1 an", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "valable",
    vfQ: "Livraison : valable 1 an.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Cumulable avec promos", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "cumulable",
    vfQ: "Condition : cumulable avec promos.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Carte fidélité", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Carte",
    vfQ: "Objet : Carte fidélité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Decathlon", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Decathlon",
    vfQ: "C'est Decathlon.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_5 = `De : Globus
Objet : Nouvelle collection

Bonjour,

Merci pour votre intérêt chez Globus.
Articles : costumes et cravates.
Prix : à partir de 199 francs.
Livraison/délai : conseiller en magasin.
Condition : essayage gratuit.

À bientôt,
Globus`;

const E4_1_CE_EMAIL_POOL_5 = buildExpressPool("e4-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Costumes et cravates", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "costumes",
    vfQ: "Articles : costumes et cravates.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["à partir de 199 francs", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "à",
    vfQ: "Prix : à partir de 199 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Conseiller en magasin", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "conseiller",
    vfQ: "Livraison : conseiller en magasin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Essayage gratuit", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "essayage",
    vfQ: "Condition : essayage gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Nouvelle collection", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Nouvelle",
    vfQ: "Objet : Nouvelle collection.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Globus", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Globus",
    vfQ: "C'est Globus.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_6 = `De : Promod
Objet : Promo spéciale

Bonjour,

Merci pour votre intérêt chez Promod.
Articles : jupes et robes.
Prix : -40 % cette semaine.
Livraison/délai : code PROMO40.
Condition : en ligne seulement.

À bientôt,
Promod`;

const E4_1_CE_EMAIL_POOL_6 = buildExpressPool("e4-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Jupes et robes", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "jupes",
    vfQ: "Articles : jupes et robes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["-40 % cette semaine", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "-40",
    vfQ: "Prix : -40 % cette semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Code promo40", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "code",
    vfQ: "Livraison : code PROMO40.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["En ligne seulement", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "en",
    vfQ: "Condition : en ligne seulement.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Promo spéciale", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Promo",
    vfQ: "Objet : Promo spéciale.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Promod", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Promod",
    vfQ: "C'est Promod.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_7 = `De : C&A
Objet : 2e article -50 %

Bonjour,

Merci pour votre intérêt chez C&A.
Articles : jeans et t-shirts.
Prix : offre limitée.
Livraison/délai : jusqu'à dimanche.
Condition : tous les magasins.

À bientôt,
C&A`;

const E4_1_CE_EMAIL_POOL_7 = buildExpressPool("e4-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Jeans et t-shirts", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "jeans",
    vfQ: "Articles : jeans et t-shirts.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["offre limitée", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "offre",
    vfQ: "Prix : offre limitée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Jusqu'à dimanche", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "jusqu'à",
    vfQ: "Livraison : jusqu'à dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Tous les magasins", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "tous",
    vfQ: "Condition : tous les magasins.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["2e article -50 %", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "2e",
    vfQ: "Objet : 2e article -50 %.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["C&A", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "C&A",
    vfQ: "C'est C&A.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_8 = `De : Manor
Objet : Bon d'achat

Bonjour,

Merci pour votre intérêt chez Manor.
Articles : vêtements maison.
Prix : 20 francs offerts.
Livraison/délai : dès 100 francs d'achat.
Condition : valable 2 semaines.

À bientôt,
Manor`;

const E4_1_CE_EMAIL_POOL_8 = buildExpressPool("e4-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Vêtements maison", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "vêtements",
    vfQ: "Articles : vêtements maison.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["20 francs offerts", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "20",
    vfQ: "Prix : 20 francs offerts.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Dès 100 francs d'achat", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "dès",
    vfQ: "Livraison : dès 100 francs d'achat.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Valable 2 semaines", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "valable",
    vfQ: "Condition : valable 2 semaines.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Bon d'achat", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Bon",
    vfQ: "Objet : Bon d'achat.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Manor", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Manor",
    vfQ: "C'est Manor.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_9 = `De : Intersport
Objet : Membre club

Bonjour,

Merci pour votre intérêt chez Intersport.
Articles : équipement sport.
Prix : -15 % sur tout.
Livraison/délai : adhésion gratuite.
Condition : points fidélité.

À bientôt,
Intersport`;

const E4_1_CE_EMAIL_POOL_9 = buildExpressPool("e4-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Équipement sport", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "équipement",
    vfQ: "Articles : équipement sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["-15 % sur tout", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "-15",
    vfQ: "Prix : -15 % sur tout.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Adhésion gratuite", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "adhésion",
    vfQ: "Livraison : adhésion gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Points fidélité", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "points",
    vfQ: "Condition : points fidélité.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Membre club", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Membre",
    vfQ: "Objet : Membre club.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Intersport", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Intersport",
    vfQ: "C'est Intersport.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_10 = `De : Ochsner
Objet : Pack t-shirts

Bonjour,

Merci pour votre intérêt chez Ochsner.
Articles : 3 t-shirts coton.
Prix : 25 francs le lot.
Livraison/délai : couleurs au choix.
Condition : en magasin.

À bientôt,
Ochsner`;

const E4_1_CE_EMAIL_POOL_10 = buildExpressPool("e4-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["3 t-shirts coton", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "3",
    vfQ: "Articles : 3 t-shirts coton.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["25 francs le lot", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "25",
    vfQ: "Prix : 25 francs le lot.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Couleurs au choix", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "couleurs",
    vfQ: "Livraison : couleurs au choix.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["En magasin", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "en",
    vfQ: "Condition : en magasin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Pack t-shirts", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pack",
    vfQ: "Objet : Pack t-shirts.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Ochsner", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Ochsner",
    vfQ: "C'est Ochsner.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_11 = `De : Boutique Soie+
Objet : Nouveautés

Bonjour,

Merci pour votre intérêt chez Boutique.
Articles : écharpes et foulards.
Prix : à partir de 25 francs.
Livraison/délai : livraison offerte.
Condition : dès 50 francs.

Cordialement,
Boutique Soie+`;

const E4_1_CE_EMAIL_POOL_11 = buildExpressPool("e4-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Écharpes et foulards", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "écharpes",
    vfQ: "Articles : écharpes et foulards.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["à partir de 25 francs", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "à",
    vfQ: "Prix : à partir de 25 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Livraison offerte", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "livraison",
    vfQ: "Livraison : livraison offerte.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Dès 50 francs", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "dès",
    vfQ: "Condition : dès 50 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Nouveautés", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Nouveautés",
    vfQ: "Objet : Nouveautés.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Boutique", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boutique",
    vfQ: "C'est Boutique Soie+.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_12 = `De : Leboncoin
Objet : Annonce validée

Bonjour,

Merci pour votre intérêt chez Leboncoin.
Articles : veste cuir marron.
Prix : 120 francs.
Livraison/délai : contact acheteurs.
Condition : photos en ligne.

À bientôt,
Leboncoin`;

const E4_1_CE_EMAIL_POOL_12 = buildExpressPool("e4-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Veste cuir marron", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "veste",
    vfQ: "Articles : veste cuir marron.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["120 francs", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "120",
    vfQ: "Prix : 120 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Contact acheteurs", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "contact",
    vfQ: "Livraison : contact acheteurs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Photos en ligne", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "photos",
    vfQ: "Condition : photos en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Annonce validée", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Annonce",
    vfQ: "Objet : Annonce validée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Leboncoin", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Leboncoin",
    vfQ: "C'est Leboncoin.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_13 = `De : Gap
Objet : Soldes finales

Bonjour,

Merci pour votre intérêt chez Gap.
Articles : blousons et jeans.
Prix : -50 %.
Livraison/délai : derniers jours.
Condition : stock limité.

À bientôt,
Gap`;

const E4_1_CE_EMAIL_POOL_13 = buildExpressPool("e4-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Blousons et jeans", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "blousons",
    vfQ: "Articles : blousons et jeans.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["-50 %", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "-50",
    vfQ: "Prix : -50 %.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Derniers jours", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "derniers",
    vfQ: "Livraison : derniers jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Stock limité", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "stock",
    vfQ: "Condition : stock limité.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Soldes finales", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Soldes",
    vfQ: "Objet : Soldes finales.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Gap", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Gap",
    vfQ: "C'est Gap.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_14 = `De : Charles Vögele
Objet : Costume sur mesure

Bonjour,

Merci pour votre intérêt chez Charles.
Articles : costume gris.
Prix : 250 francs.
Livraison/délai : retouches gratuites.
Condition : rendez-vous en magasin.

Cordialement,
Charles Vögele`;

const E4_1_CE_EMAIL_POOL_14 = buildExpressPool("e4-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Costume gris", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "costume",
    vfQ: "Articles : costume gris.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["250 francs", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "250",
    vfQ: "Prix : 250 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Retouches gratuites", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "retouches",
    vfQ: "Livraison : retouches gratuites.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Rendez-vous en magasin", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "rendez-vous",
    vfQ: "Condition : rendez-vous en magasin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Costume sur mesure", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Costume",
    vfQ: "Objet : Costume sur mesure.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Charles", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Charles",
    vfQ: "C'est Charles Vögele.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_15 = `De : Athleta
Objet : Bienvenue

Bonjour,

Merci pour votre intérêt chez Athleta.
Articles : leggings et brassières.
Prix : -20 % première commande.
Livraison/délai : code BIENVENUE20.
Condition : en ligne.

À bientôt,
Athleta`;

const E4_1_CE_EMAIL_POOL_15 = buildExpressPool("e4-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Leggings et brassières", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "leggings",
    vfQ: "Articles : leggings et brassières.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["-20 % première commande", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "-20",
    vfQ: "Prix : -20 % première commande.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Code bienvenue20", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "code",
    vfQ: "Livraison : code BIENVENUE20.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["En ligne", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "en",
    vfQ: "Condition : en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Bienvenue", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Bienvenue",
    vfQ: "Objet : Bienvenue.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Athleta", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Athleta",
    vfQ: "C'est Athleta.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_16 = `De : Coop mode
Objet : Promo chaussettes

Bonjour,

Merci pour votre intérêt chez Coop.
Articles : pack de 3 paires.
Prix : 2e pack gratuit.
Livraison/délai : jusqu'à vendredi.
Condition : en magasin.

Cordialement,
Coop mode`;

const E4_1_CE_EMAIL_POOL_16 = buildExpressPool("e4-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Pack de 3 paires", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "pack",
    vfQ: "Articles : pack de 3 paires.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["2e pack gratuit", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "2e",
    vfQ: "Prix : 2e pack gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Jusqu'à vendredi", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "jusqu'à",
    vfQ: "Livraison : jusqu'à vendredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["En magasin", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "en",
    vfQ: "Condition : en magasin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Promo chaussettes", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Promo",
    vfQ: "Objet : Promo chaussettes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Coop", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Coop",
    vfQ: "C'est Coop mode.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_17 = `De : Friperie du Lac
Objet : Nouveautés

Bonjour,

Merci pour votre intérêt chez Friperie.
Articles : vêtements seconde main.
Prix : dès 5 francs.
Livraison/délai : samedi et dimanche.
Condition : bon état garanti.

Cordialement,
Friperie du Lac`;

const E4_1_CE_EMAIL_POOL_17 = buildExpressPool("e4-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Vêtements seconde main", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "vêtements",
    vfQ: "Articles : vêtements seconde main.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["dès 5 francs", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "dès",
    vfQ: "Prix : dès 5 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Samedi et dimanche", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "samedi",
    vfQ: "Livraison : samedi et dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Bon état garanti", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "bon",
    vfQ: "Condition : bon état garanti.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Nouveautés", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Nouveautés",
    vfQ: "Objet : Nouveautés.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Friperie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Friperie",
    vfQ: "C'est Friperie du Lac.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_18 = `De : Migros mode
Objet : Pulls en laine

Bonjour,

Merci pour votre intérêt chez Migros.
Articles : collection hiver.
Prix : dès 29 francs.
Livraison/délai : -30 % soldes.
Condition : en ligne et magasin.

Cordialement,
Migros mode`;

const E4_1_CE_EMAIL_POOL_18 = buildExpressPool("e4-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Collection hiver", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "collection",
    vfQ: "Articles : collection hiver.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["dès 29 francs", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "dès",
    vfQ: "Prix : dès 29 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["-30 % soldes", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "-30",
    vfQ: "Livraison : -30 % soldes.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["En ligne et magasin", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "en",
    vfQ: "Condition : en ligne et magasin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Pulls en laine", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pulls",
    vfQ: "Objet : Pulls en laine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Migros", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Migros",
    vfQ: "C'est Migros mode.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_19 = `De : Ikea textile
Objet : Linge de maison

Bonjour,

Merci pour votre intérêt chez Ikea.
Articles : pyjamas et serviettes.
Prix : promo famille.
Livraison/délai : jusqu'au 15 mars.
Condition : magasins Ikea.

Cordialement,
Ikea textile`;

const E4_1_CE_EMAIL_POOL_19 = buildExpressPool("e4-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Pyjamas et serviettes", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "pyjamas",
    vfQ: "Articles : pyjamas et serviettes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["promo famille", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "promo",
    vfQ: "Prix : promo famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Jusqu'au 15 mars", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "jusqu'au",
    vfQ: "Livraison : jusqu'au 15 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Magasins ikea", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "magasins",
    vfQ: "Condition : magasins Ikea.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Linge de maison", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Linge",
    vfQ: "Objet : Linge de maison.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Ikea", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Ikea",
    vfQ: "C'est Ikea textile.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_20 = `De : Outlet Aubonne
Objet : Outlet village

Bonjour,

Merci pour votre intérêt chez Outlet.
Articles : marques premium.
Prix : -60 % max.
Livraison/délai : tous les jours.
Condition : navette gratuite.

Cordialement,
Outlet Aubonne`;

const E4_1_CE_EMAIL_POOL_20 = buildExpressPool("e4-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quels articles ?",
    text: ["Marques premium", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Articles : _________.",
    fill: "marques",
    vfQ: "Articles : marques premium.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["-60 % max", "1 franc", "Gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "-60",
    vfQ: "Prix : -60 % max.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quelle livraison/délai ?",
    text: ["Tous les jours", "Jamais", "En 10 ans"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Livraison : _________.",
    fill: "tous",
    vfQ: "Livraison : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle condition ?",
    text: ["Navette gratuite", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Condition : _________.",
    fill: "navette",
    vfQ: "Condition : navette gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel est l'objet ?",
    text: ["Outlet village", "Une facture d'électricité", "Un divorce"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Outlet",
    vfQ: "Objet : Outlet village.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle boutique ?",
    text: ["Outlet", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Outlet",
    vfQ: "C'est Outlet Aubonne.",
    vfC: 0,
  }),
]);

export const E4_1_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e4-1-ce-email-1",
  readingText: E4_1_CE_EMAIL_TEXT_1,
  questionPool: E4_1_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-2",
  readingText: E4_1_CE_EMAIL_TEXT_2,
  questionPool: E4_1_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-3",
  readingText: E4_1_CE_EMAIL_TEXT_3,
  questionPool: E4_1_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-4",
  readingText: E4_1_CE_EMAIL_TEXT_4,
  questionPool: E4_1_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-5",
  readingText: E4_1_CE_EMAIL_TEXT_5,
  questionPool: E4_1_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-6",
  readingText: E4_1_CE_EMAIL_TEXT_6,
  questionPool: E4_1_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-7",
  readingText: E4_1_CE_EMAIL_TEXT_7,
  questionPool: E4_1_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-8",
  readingText: E4_1_CE_EMAIL_TEXT_8,
  questionPool: E4_1_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-9",
  readingText: E4_1_CE_EMAIL_TEXT_9,
  questionPool: E4_1_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-10",
  readingText: E4_1_CE_EMAIL_TEXT_10,
  questionPool: E4_1_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-11",
  readingText: E4_1_CE_EMAIL_TEXT_11,
  questionPool: E4_1_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-12",
  readingText: E4_1_CE_EMAIL_TEXT_12,
  questionPool: E4_1_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-13",
  readingText: E4_1_CE_EMAIL_TEXT_13,
  questionPool: E4_1_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-14",
  readingText: E4_1_CE_EMAIL_TEXT_14,
  questionPool: E4_1_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-15",
  readingText: E4_1_CE_EMAIL_TEXT_15,
  questionPool: E4_1_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-16",
  readingText: E4_1_CE_EMAIL_TEXT_16,
  questionPool: E4_1_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-17",
  readingText: E4_1_CE_EMAIL_TEXT_17,
  questionPool: E4_1_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-18",
  readingText: E4_1_CE_EMAIL_TEXT_18,
  questionPool: E4_1_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-19",
  readingText: E4_1_CE_EMAIL_TEXT_19,
  questionPool: E4_1_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-1-ce-email-20",
  readingText: E4_1_CE_EMAIL_TEXT_20,
  questionPool: E4_1_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E4_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e4-1-pee-1",
    title: "Question sur les soldes",
    situation: "Le magasin de vêtements annonce les soldes.",
    sourceMessage: {
      from: "Magasin Mode & Style",
      subject: "Les soldes commencent !",
      body: "Bonjour,\nLes soldes commencent lundi : manteaux, pulls et chemises à petits prix.\nÀ bientôt dans notre magasin !\nL'équipe du magasin",
    },
    instruction: "Répondez au magasin : demandez si le manteau bleu existe dans votre taille, posez une question sur le prix et dites quand vous venez.",
    points: ["La question sur la taille", "La question sur le prix", "Quand vous venez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-2",
    title: "Échanger un pull",
    situation: "Vous avez acheté un pull trop petit.",
    sourceMessage: {
      from: "Magasin Mode & Style",
      subject: "Votre achat",
      body: "Bonjour,\nMerci pour votre achat de samedi.\nÊtes-vous content(e) de votre pull ?\nL'équipe du magasin",
    },
    instruction: "Répondez au magasin : expliquez que le pull est trop petit, demandez un échange et dites quand vous venez au magasin.",
    points: ["Le problème de taille", "La demande d'échange", "Quand vous venez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-3",
    title: "Conseiller un ami",
    situation: "Un ami cherche des vêtements pour un mariage.",
    sourceMessage: {
      from: "Diego",
      subject: "Vêtements pour un mariage",
      body: "Salut,\nJe suis invité à un mariage le mois prochain.\nQu'est-ce que je mets ? Tu connais un bon magasin ?\nDiego",
    },
    instruction: "Répondez à Diego : conseillez des vêtements, indiquez un magasin et donnez une idée de prix.",
    points: ["Les vêtements conseillés", "Le magasin", "Une idée de prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-4",
    title: "Erreur de taille dans la commande",
    situation: "Vous avez commandé une veste sur Internet.",
    sourceMessage: {
      from: "Boutique en ligne ModaShop",
      subject: "Votre commande n° 3520",
      body: "Bonjour,\nVotre commande est prête : une veste noire, taille S.\nNous l'envoyons demain.\nModaShop",
    },
    instruction: "Répondez à la boutique : expliquez l'erreur de taille, demandez la taille M et remerciez.",
    points: ["L'erreur de taille", "La bonne taille", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-5",
    title: "Un cadeau pour maman",
    situation: "Votre sœur cherche un cadeau pour votre mère.",
    sourceMessage: {
      from: "Léa",
      subject: "Cadeau pour maman",
      body: "Coucou,\nC'est bientôt l'anniversaire de maman.\nOn lui achète un vêtement ? Tu as une idée ?\nLéa",
    },
    instruction: "Répondez à Léa : proposez un vêtement et une couleur, indiquez un magasin et donnez le prix.",
    points: ["Le vêtement et la couleur", "Le magasin", "Le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-6",
    title: "La veste est arrivée",
    situation: "Le magasin a reçu la veste que vous attendez.",
    sourceMessage: {
      from: "Magasin Mode & Style",
      subject: "Votre veste est arrivée",
      body: "Bonjour,\nLa veste rouge, taille 40, est arrivée.\nNous la gardons pour vous pendant trois jours.\nL'équipe du magasin",
    },
    instruction: "Répondez au magasin : remerciez, dites quel jour vous venez et demandez comment vous pouvez payer.",
    points: ["Un remerciement", "Le jour de votre visite", "Une question sur le paiement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-7",
    title: "Refuser une sortie shopping",
    situation: "Une amie vous invite à faire les magasins samedi.",
    sourceMessage: {
      from: "Fatou",
      subject: "Shopping samedi ?",
      body: "Coucou,\nSamedi, je vais faire les magasins en ville. Tu viens avec moi ?\nIl y a des soldes partout !\nFatou",
    },
    instruction: "Répondez à Fatou : refusez poliment, expliquez pourquoi et proposez un autre jour.",
    points: ["Le refus poli", "Pourquoi", "Un autre jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-8",
    title: "Donner son avis au magasin",
    situation: "Le magasin vous demande votre avis.",
    sourceMessage: {
      from: "Magasin Mode & Style",
      subject: "Votre avis",
      body: "Bonjour,\nVous avez acheté des vêtements chez nous la semaine dernière.\nÊtes-vous satisfait(e) ? Donnez-nous votre avis !\nL'équipe du magasin",
    },
    instruction: "Répondez au magasin : dites ce que vous avez acheté, donnez votre avis et faites une petite suggestion.",
    points: ["Vos achats", "Votre avis", "Une suggestion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-9",
    title: "Vêtements de travail",
    situation: "Votre nouveau chef vous écrit avant votre premier jour.",
    sourceMessage: {
      from: "M. Weber",
      subject: "Vêtements de travail",
      body: "Bonjour,\nPour le travail, il faut un pantalon noir et une chemise blanche.\nAvez-vous ces vêtements ?\nM. Weber",
    },
    instruction: "Répondez à M. Weber : dites quels vêtements vous avez déjà, demandez où acheter le reste et donnez votre taille.",
    points: ["Les vêtements que vous avez", "Une question sur le magasin", "Votre taille"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-10",
    title: "La veste oubliée",
    situation: "Un ami a oublié sa veste chez vous.",
    sourceMessage: {
      from: "Marco",
      subject: "Ma veste",
      body: "Salut,\nJe ne trouve plus ma veste verte.\nElle est chez toi ? Je l'ai peut-être oubliée samedi.\nMarco",
    },
    instruction: "Répondez à Marco : dites que la veste est chez vous, décrivez-la et proposez un moment pour la rendre.",
    points: ["La veste est chez vous", "La description de la veste", "Un moment pour la rendre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e4-1-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-1-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e4-1",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E4.2 — Aller au restaurant
   ════════════════════════════════════════════════════════════════════════════ */

const E4_2_CE_EMAIL_TEXT_1 = `De : Restaurant Le Lac
Objet : Réservation confirmée

Bonjour,

Merci pour votre commande/réservation chez Restaurant.
Commande : table 5 à 19 h.
Prix : 2 personnes.
Quand : menu à la carte.
Note : terrasse si beau temps.

Cordialement,
Restaurant Le Lac`;

const E4_2_CE_EMAIL_POOL_1 = buildExpressPool("e4-2-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Table 5 à 19 h", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "table",
    vfQ: "Commande : table 5 à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["2 personnes", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "2",
    vfQ: "Prix : 2 personnes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Menu à la carte", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "menu",
    vfQ: "Quand : menu à la carte.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Terrasse si beau temps", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "terrasse",
    vfQ: "Note : terrasse si beau temps.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Restaurant", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Le Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réservation confirmée", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation confirmée.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_2 = `De : Pizzeria Roma
Objet : Commande livraison

Bonjour,

Merci pour votre commande/réservation chez Pizzeria.
Commande : pizza margherita + coca.
Prix : 28 francs.
Quand : livraison 30 min.
Note : paiement à la livraison.

Cordialement,
Pizzeria Roma`;

const E4_2_CE_EMAIL_POOL_2 = buildExpressPool("e4-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Pizza margherita + coca", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "pizza",
    vfQ: "Commande : pizza margherita + coca.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["28 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "28",
    vfQ: "Prix : 28 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Livraison 30 min", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "livraison",
    vfQ: "Quand : livraison 30 min.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Paiement à la livraison", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "paiement",
    vfQ: "Note : paiement à la livraison.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Pizzeria", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Pizzeria",
    vfQ: "C'est Pizzeria Roma.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Commande livraison", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Commande",
    vfQ: "Objet : Commande livraison.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_3 = `De : Brasserie du Centre
Objet : Menu du jour

Bonjour,

Merci pour votre commande/réservation chez Brasserie.
Commande : poisson + dessert.
Prix : 32 francs.
Quand : midi 12 h – 14 h.
Note : café inclus.

Cordialement,
Brasserie du Centre`;

const E4_2_CE_EMAIL_POOL_3 = buildExpressPool("e4-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Poisson + dessert", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "poisson",
    vfQ: "Commande : poisson + dessert.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["32 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "32",
    vfQ: "Prix : 32 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Midi 12 h – 14 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "midi",
    vfQ: "Quand : midi 12 h – 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Café inclus", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "café",
    vfQ: "Note : café inclus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Brasserie", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Brasserie",
    vfQ: "C'est Brasserie du Centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Menu du jour", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Menu",
    vfQ: "Objet : Menu du jour.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_4 = `De : Restaurant Le Sapin
Objet : Anniversaire

Bonjour,

Merci pour votre commande/réservation chez Restaurant.
Commande : menu dégustation 3 plats.
Prix : 65 francs/personne.
Quand : samedi 20 h 30.
Note : gâteau offert.

Cordialement,
Restaurant Le Sapin`;

const E4_2_CE_EMAIL_POOL_4 = buildExpressPool("e4-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Menu dégustation 3 plats", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "menu",
    vfQ: "Commande : menu dégustation 3 plats.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["65 francs/personne", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "65",
    vfQ: "Prix : 65 francs/personne.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Samedi 20 h 30", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "samedi",
    vfQ: "Quand : samedi 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Gâteau offert", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "gâteau",
    vfQ: "Note : gâteau offert.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Restaurant", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Le Sapin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Anniversaire", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Anniversaire",
    vfQ: "Objet : Anniversaire.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_5 = `De : Café du Port
Objet : Brunch réservé

Bonjour,

Merci pour votre commande/réservation chez Café.
Commande : brunch complet.
Prix : 28 francs.
Quand : dimanche 10 h.
Note : jus d'orange frais.

Cordialement,
Café du Port`;

const E4_2_CE_EMAIL_POOL_5 = buildExpressPool("e4-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Brunch complet", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "brunch",
    vfQ: "Commande : brunch complet.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["28 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "28",
    vfQ: "Prix : 28 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Dimanche 10 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "dimanche",
    vfQ: "Quand : dimanche 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Jus d'orange frais", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "jus",
    vfQ: "Note : jus d'orange frais.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Café", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Café",
    vfQ: "C'est Café du Port.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Brunch réservé", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Brunch",
    vfQ: "Objet : Brunch réservé.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_6 = `De : Fondue House
Objet : Réservation fondue

Bonjour,

Merci pour votre commande/réservation chez Fondue.
Commande : fondue moitié-moitié.
Prix : 35 francs/personne.
Quand : vendredi 19 h.
Note : vin blanc conseillé.

Cordialement,
Fondue House`;

const E4_2_CE_EMAIL_POOL_6 = buildExpressPool("e4-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Fondue moitié-moitié", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "fondue",
    vfQ: "Commande : fondue moitié-moitié.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["35 francs/personne", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "35",
    vfQ: "Prix : 35 francs/personne.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Vendredi 19 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "vendredi",
    vfQ: "Quand : vendredi 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Vin blanc conseillé", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "vin",
    vfQ: "Note : vin blanc conseillé.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Fondue", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Fondue",
    vfQ: "C'est Fondue House.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réservation fondue", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation fondue.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_7 = `De : Burger King
Objet : Commande en ligne

Bonjour,

Merci pour votre commande/réservation chez Burger.
Commande : menu burger + frites.
Prix : 18 francs.
Quand : retrait 15 min.
Note : code QR en pièce jointe.

Cordialement,
Burger King`;

const E4_2_CE_EMAIL_POOL_7 = buildExpressPool("e4-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Menu burger + frites", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "menu",
    vfQ: "Commande : menu burger + frites.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["18 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "18",
    vfQ: "Prix : 18 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Retrait 15 min", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "retrait",
    vfQ: "Quand : retrait 15 min.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Code qr en pièce jointe", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "code",
    vfQ: "Note : code QR en pièce jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Burger", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Burger",
    vfQ: "C'est Burger King.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Commande en ligne", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Commande",
    vfQ: "Objet : Commande en ligne.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_8 = `De : Sushi Zen
Objet : Plateau sushi

Bonjour,

Merci pour votre commande/réservation chez Sushi.
Commande : plateau 24 pièces.
Prix : 45 francs.
Quand : livraison gratuite.
Note : wasabi et gingembre inclus.

Cordialement,
Sushi Zen`;

const E4_2_CE_EMAIL_POOL_8 = buildExpressPool("e4-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Plateau 24 pièces", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "plateau",
    vfQ: "Commande : plateau 24 pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["45 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "45",
    vfQ: "Prix : 45 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Livraison gratuite", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "livraison",
    vfQ: "Quand : livraison gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Wasabi et gingembre inclus", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "wasabi",
    vfQ: "Note : wasabi et gingembre inclus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Sushi", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Sushi",
    vfQ: "C'est Sushi Zen.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Plateau sushi", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Plateau",
    vfQ: "Objet : Plateau sushi.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_9 = `De : Crêperie Bretonne
Objet : Crêpes sucrées

Bonjour,

Merci pour votre commande/réservation chez Crêperie.
Commande : 2 crêpes + boisson.
Prix : 20 francs.
Quand : après-midi.
Note : nutella ou sucre.

Cordialement,
Crêperie Bretonne`;

const E4_2_CE_EMAIL_POOL_9 = buildExpressPool("e4-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["2 crêpes + boisson", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "2",
    vfQ: "Commande : 2 crêpes + boisson.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["20 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "20",
    vfQ: "Prix : 20 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Après-midi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "après-midi",
    vfQ: "Quand : après-midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Nutella ou sucre", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "nutella",
    vfQ: "Note : nutella ou sucre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Crêperie", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Crêperie",
    vfQ: "C'est Crêperie Bretonne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Crêpes sucrées", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Crêpes",
    vfQ: "Objet : Crêpes sucrées.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_10 = `De : Restaurant Indien
Objet : Menu végétarien

Bonjour,

Merci pour votre commande/réservation chez Restaurant.
Commande : thali végétarien.
Prix : 22 francs.
Quand : ce soir 19 h.
Note : épicé niveau 2.

Cordialement,
Restaurant Indien`;

const E4_2_CE_EMAIL_POOL_10 = buildExpressPool("e4-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Thali végétarien", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "thali",
    vfQ: "Commande : thali végétarien.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["22 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "22",
    vfQ: "Prix : 22 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Ce soir 19 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "ce",
    vfQ: "Quand : ce soir 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Épicé niveau 2", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "épicé",
    vfQ: "Note : épicé niveau 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Restaurant", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Indien.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Menu végétarien", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Menu",
    vfQ: "Objet : Menu végétarien.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_11 = `De : Steakhouse
Objet : Réservation

Bonjour,

Merci pour votre commande/réservation chez Steakhouse.
Commande : steak frites.
Prix : 32 francs.
Quand : table 8 à 20 h.
Note : cuisson à point.

À bientôt,
Steakhouse`;

const E4_2_CE_EMAIL_POOL_11 = buildExpressPool("e4-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Steak frites", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "steak",
    vfQ: "Commande : steak frites.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["32 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "32",
    vfQ: "Prix : 32 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Table 8 à 20 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "table",
    vfQ: "Quand : table 8 à 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Cuisson à point", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "cuisson",
    vfQ: "Note : cuisson à point.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Steakhouse", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Steakhouse",
    vfQ: "C'est Steakhouse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Réservation", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_12 = `De : Restaurant Chinois
Objet : Menu famille

Bonjour,

Merci pour votre commande/réservation chez Restaurant.
Commande : 5 plats à partager.
Prix : 80 francs.
Quand : 4 personnes.
Note : thé offert.

Cordialement,
Restaurant Chinois`;

const E4_2_CE_EMAIL_POOL_12 = buildExpressPool("e4-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["5 plats à partager", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "5",
    vfQ: "Commande : 5 plats à partager.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["80 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "80",
    vfQ: "Prix : 80 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["4 personnes", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "4",
    vfQ: "Quand : 4 personnes.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Thé offert", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "thé",
    vfQ: "Note : thé offert.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Restaurant", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Chinois.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Menu famille", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Menu",
    vfQ: "Objet : Menu famille.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_13 = `De : Traiteur
Objet : Buffet événement

Bonjour,

Merci pour votre commande/réservation chez Traiteur.
Commande : plateau apéro 20 pers..
Prix : 150 francs.
Quand : livraison samedi.
Note : vaisselle incluse.

À bientôt,
Traiteur`;

const E4_2_CE_EMAIL_POOL_13 = buildExpressPool("e4-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Plateau apéro 20 pers.", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "plateau",
    vfQ: "Commande : plateau apéro 20 pers..",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["150 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "150",
    vfQ: "Prix : 150 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Livraison samedi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "livraison",
    vfQ: "Quand : livraison samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Vaisselle incluse", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "vaisselle",
    vfQ: "Note : vaisselle incluse.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Traiteur", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Traiteur",
    vfQ: "C'est Traiteur.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Buffet événement", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Buffet",
    vfQ: "Objet : Buffet événement.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_14 = `De : Restaurant Gastronomique
Objet : Menu étoile

Bonjour,

Merci pour votre commande/réservation chez Restaurant.
Commande : menu 5 plats.
Prix : 120 francs.
Quand : réservation obligatoire.
Note : accord mets-vins.

Cordialement,
Restaurant Gastronomique`;

const E4_2_CE_EMAIL_POOL_14 = buildExpressPool("e4-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Menu 5 plats", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "menu",
    vfQ: "Commande : menu 5 plats.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["120 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "120",
    vfQ: "Prix : 120 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Réservation obligatoire", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "réservation",
    vfQ: "Quand : réservation obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Accord mets-vins", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "accord",
    vfQ: "Note : accord mets-vins.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Restaurant", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Gastronomique.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Menu étoile", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Menu",
    vfQ: "Objet : Menu étoile.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_15 = `De : Snack Bar
Objet : Formule midi

Bonjour,

Merci pour votre commande/réservation chez Snack.
Commande : sandwich + boisson.
Prix : 12 francs.
Quand : 11 h – 15 h.
Note : rapide.

Cordialement,
Snack Bar`;

const E4_2_CE_EMAIL_POOL_15 = buildExpressPool("e4-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Sandwich + boisson", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "sandwich",
    vfQ: "Commande : sandwich + boisson.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["12 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "12",
    vfQ: "Prix : 12 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["11 h – 15 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "11",
    vfQ: "Quand : 11 h – 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Rapide", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "rapide",
    vfQ: "Note : rapide.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Snack", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Snack",
    vfQ: "C'est Snack Bar.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Formule midi", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Formule",
    vfQ: "Objet : Formule midi.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_16 = `De : Restaurant Italien
Objet : Pâtes fraîches

Bonjour,

Merci pour votre commande/réservation chez Restaurant.
Commande : carbonara maison.
Prix : 21 francs.
Quand : ce soir.
Note : parmesan inclus.

Cordialement,
Restaurant Italien`;

const E4_2_CE_EMAIL_POOL_16 = buildExpressPool("e4-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Carbonara maison", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "carbonara",
    vfQ: "Commande : carbonara maison.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["21 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "21",
    vfQ: "Prix : 21 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Ce soir", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "ce",
    vfQ: "Quand : ce soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Parmesan inclus", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "parmesan",
    vfQ: "Note : parmesan inclus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Restaurant", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Italien.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Pâtes fraîches", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pâtes",
    vfQ: "Objet : Pâtes fraîches.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_17 = `De : Bar à vin
Objet : Dégustation

Bonjour,

Merci pour votre commande/réservation chez Bar.
Commande : 5 vins + fromages.
Prix : 40 francs.
Quand : jeudi 18 h.
Note : réservation 6 personnes max.

Cordialement,
Bar à vin`;

const E4_2_CE_EMAIL_POOL_17 = buildExpressPool("e4-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["5 vins + fromages", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "5",
    vfQ: "Commande : 5 vins + fromages.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["40 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "40",
    vfQ: "Prix : 40 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Jeudi 18 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "jeudi",
    vfQ: "Quand : jeudi 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Réservation 6 personnes max", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "réservation",
    vfQ: "Note : réservation 6 personnes max.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Bar", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Bar",
    vfQ: "C'est Bar à vin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Dégustation", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Dégustation",
    vfQ: "Objet : Dégustation.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_18 = `De : Restaurant Libanais
Objet : Mezze

Bonjour,

Merci pour votre commande/réservation chez Restaurant.
Commande : assortiment mezze.
Prix : 25 francs.
Quand : partage 2 pers..
Note : houmous et falafels.

Cordialement,
Restaurant Libanais`;

const E4_2_CE_EMAIL_POOL_18 = buildExpressPool("e4-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Assortiment mezze", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "assortiment",
    vfQ: "Commande : assortiment mezze.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["25 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "25",
    vfQ: "Prix : 25 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Partage 2 pers.", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "partage",
    vfQ: "Quand : partage 2 pers..",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Houmous et falafels", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "houmous",
    vfQ: "Note : houmous et falafels.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Restaurant", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Libanais.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Mezze", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Mezze",
    vfQ: "Objet : Mezze.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_19 = `De : Crêperie
Objet : Galette salée

Bonjour,

Merci pour votre commande/réservation chez Crêperie.
Commande : galette complète.
Prix : 16 francs.
Quand : midi.
Note : cidre en option.

À bientôt,
Crêperie`;

const E4_2_CE_EMAIL_POOL_19 = buildExpressPool("e4-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Galette complète", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "galette",
    vfQ: "Commande : galette complète.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["16 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "16",
    vfQ: "Prix : 16 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Midi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "midi",
    vfQ: "Quand : midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Cidre en option", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "cidre",
    vfQ: "Note : cidre en option.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Crêperie", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Crêperie",
    vfQ: "C'est Crêperie.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Galette salée", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Galette",
    vfQ: "Objet : Galette salée.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_20 = `De : Restaurant Végétalien
Objet : Menu vert

Bonjour,

Merci pour votre commande/réservation chez Restaurant.
Commande : 3 plats vegan.
Prix : 30 francs.
Quand : mardi 19 h.
Note : produits bio.

Cordialement,
Restaurant Végétalien`;

const E4_2_CE_EMAIL_POOL_20 = buildExpressPool("e4-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["3 plats vegan", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "3",
    vfQ: "Commande : 3 plats vegan.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["30 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "30",
    vfQ: "Prix : 30 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Mardi 19 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "mardi",
    vfQ: "Quand : mardi 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Produits bio", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "produits",
    vfQ: "Note : produits bio.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel restaurant ?",
    text: ["Restaurant", "Une pharmacie", "Une école"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Restaurant",
    vfQ: "C'est Restaurant Végétalien.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Menu vert", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Menu",
    vfQ: "Objet : Menu vert.",
    vfC: 0,
  }),
]);

export const E4_2_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e4-2-ce-email-1",
  readingText: E4_2_CE_EMAIL_TEXT_1,
  questionPool: E4_2_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-2",
  readingText: E4_2_CE_EMAIL_TEXT_2,
  questionPool: E4_2_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-3",
  readingText: E4_2_CE_EMAIL_TEXT_3,
  questionPool: E4_2_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-4",
  readingText: E4_2_CE_EMAIL_TEXT_4,
  questionPool: E4_2_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-5",
  readingText: E4_2_CE_EMAIL_TEXT_5,
  questionPool: E4_2_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-6",
  readingText: E4_2_CE_EMAIL_TEXT_6,
  questionPool: E4_2_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-7",
  readingText: E4_2_CE_EMAIL_TEXT_7,
  questionPool: E4_2_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-8",
  readingText: E4_2_CE_EMAIL_TEXT_8,
  questionPool: E4_2_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-9",
  readingText: E4_2_CE_EMAIL_TEXT_9,
  questionPool: E4_2_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-10",
  readingText: E4_2_CE_EMAIL_TEXT_10,
  questionPool: E4_2_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-11",
  readingText: E4_2_CE_EMAIL_TEXT_11,
  questionPool: E4_2_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-12",
  readingText: E4_2_CE_EMAIL_TEXT_12,
  questionPool: E4_2_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-13",
  readingText: E4_2_CE_EMAIL_TEXT_13,
  questionPool: E4_2_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-14",
  readingText: E4_2_CE_EMAIL_TEXT_14,
  questionPool: E4_2_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-15",
  readingText: E4_2_CE_EMAIL_TEXT_15,
  questionPool: E4_2_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-16",
  readingText: E4_2_CE_EMAIL_TEXT_16,
  questionPool: E4_2_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-17",
  readingText: E4_2_CE_EMAIL_TEXT_17,
  questionPool: E4_2_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-18",
  readingText: E4_2_CE_EMAIL_TEXT_18,
  questionPool: E4_2_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-19",
  readingText: E4_2_CE_EMAIL_TEXT_19,
  questionPool: E4_2_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-2-ce-email-20",
  readingText: E4_2_CE_EMAIL_TEXT_20,
  questionPool: E4_2_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E4_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e4-2-pee-1",
    title: "Modifier une réservation",
    situation: "Le restaurant confirme votre réservation, mais vous avez un changement.",
    sourceMessage: {
      from: "Restaurant Le Petit Jardin",
      subject: "Confirmation de votre réservation",
      body: "Bonjour,\nNous confirmons votre table pour samedi à 19 h 30, pour quatre personnes.\nÀ bientôt,\nL'équipe du restaurant",
    },
    instruction: "Répondez au restaurant : remerciez, demandez une table pour six personnes et posez une question sur le menu.",
    points: ["Un remerciement", "Le changement : six personnes", "Une question sur le menu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-2",
    title: "Accepter une invitation",
    situation: "Une amie vous invite au restaurant.",
    sourceMessage: {
      from: "Sonia",
      subject: "Restaurant samedi soir ?",
      body: "Coucou,\nOn va au restaurant samedi soir ? Je connais une bonne pizzeria.\nTu es libre ?\nSonia",
    },
    instruction: "Répondez à Sonia : acceptez l'invitation, demandez l'heure et l'adresse et dites ce que vous aimez manger.",
    points: ["Votre accord", "L'heure et l'adresse", "Ce que vous aimez manger"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-3",
    title: "Demander les plats végétariens",
    situation: "Vous voulez dîner dans un nouveau restaurant.",
    sourceMessage: {
      from: "Restaurant Le Petit Jardin",
      subject: "Notre nouveau menu",
      body: "Bonjour,\nDécouvrez notre nouveau menu du soir : entrée, plat et dessert pour trente francs.\nRéservez vite !\nL'équipe du restaurant",
    },
    instruction: "Répondez au restaurant : demandez s'il y a des plats végétariens, réservez une table et donnez le jour et l'heure.",
    points: ["La question sur les plats végétariens", "La réservation", "Le jour et l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-4",
    title: "Annuler une réservation",
    situation: "Vous ne pouvez pas aller au restaurant ce soir.",
    sourceMessage: {
      from: "Restaurant Le Petit Jardin",
      subject: "Rappel de votre réservation",
      body: "Bonjour,\nNous vous rappelons votre réservation ce soir à 20 h, pour deux personnes.\nÀ ce soir,\nL'équipe du restaurant",
    },
    instruction: "Répondez au restaurant : excusez-vous, annulez la réservation et proposez une autre date.",
    points: ["L'excuse", "L'annulation", "Une autre date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-5",
    title: "Organiser un repas d'anniversaire",
    situation: "Vous voulez fêter un anniversaire au restaurant.",
    sourceMessage: {
      from: "Restaurant Le Petit Jardin",
      subject: "Votre demande",
      body: "Bonjour,\nMerci pour votre message. Pour votre fête, il nous faut la date et le nombre de personnes.\nL'équipe du restaurant",
    },
    instruction: "Répondez au restaurant : donnez la date, dites le nombre de personnes et posez une question sur le gâteau d'anniversaire.",
    points: ["La date", "Le nombre de personnes", "Une question sur le gâteau"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-6",
    title: "Refuser une invitation",
    situation: "Un collègue vous invite à la pizzeria ce soir.",
    sourceMessage: {
      from: "Hugo",
      subject: "Pizzeria ce soir !",
      body: "Salut,\nOn va tous à la pizzeria ce soir après le travail. Tu viens ?\nHugo",
    },
    instruction: "Répondez à Hugo : refusez poliment, expliquez pourquoi et proposez un autre jour.",
    points: ["Le refus poli", "Pourquoi", "Un autre jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-7",
    title: "Donner son avis sur le repas",
    situation: "Le restaurant vous écrit après votre visite.",
    sourceMessage: {
      from: "Restaurant Le Petit Jardin",
      subject: "Votre visite de samedi",
      body: "Bonjour,\nMerci pour votre visite de samedi.\nComment était votre repas ? Donnez-nous votre avis !\nL'équipe du restaurant",
    },
    instruction: "Répondez au restaurant : dites ce que vous avez mangé, donnez votre avis et remerciez pour la soirée.",
    points: ["Les plats mangés", "Votre avis", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-8",
    title: "Raconter un dîner",
    situation: "Une amie veut connaître le restaurant où vous êtes allé(e).",
    sourceMessage: {
      from: "Mila",
      subject: "C'était comment ?",
      body: "Coucou,\nTu étais au restaurant hier soir, non ?\nC'était comment ? Tu as mangé quoi ? C'était cher ?\nMila",
    },
    instruction: "Répondez à Mila : racontez la soirée, décrivez les plats et donnez le prix du repas.",
    points: ["La soirée", "Les plats", "Le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-9",
    title: "Trouver un restaurant pour la famille",
    situation: "Votre frère organise un repas de famille.",
    sourceMessage: {
      from: "Karim",
      subject: "Repas de famille",
      body: "Salut,\nDimanche, on fait un repas de famille. Nous sommes huit.\nTu connais un bon restaurant pas trop cher ?\nKarim",
    },
    instruction: "Répondez à Karim : proposez un restaurant, donnez les horaires et une idée de prix.",
    points: ["Le restaurant", "Les horaires", "Une idée de prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-10",
    title: "Répondre à une question du restaurant",
    situation: "Le restaurant prépare votre venue de vendredi.",
    sourceMessage: {
      from: "Restaurant Le Petit Jardin",
      subject: "Votre réservation de vendredi",
      body: "Bonjour,\nNous préparons votre venue de vendredi.\nAvez-vous une allergie ? Voulez-vous le menu du jour ?\nL'équipe du restaurant",
    },
    instruction: "Répondez au restaurant : parlez de votre allergie, choisissez le menu et remerciez pour la question.",
    points: ["Votre allergie", "Le menu choisi", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e4-2-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-2-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e4-2",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];

/* ════════════════════════════════════════════════════════════════════════════
   E4.3 — Aller à la boulangerie
   ════════════════════════════════════════════════════════════════════════════ */

const E4_3_CE_EMAIL_TEXT_1 = `De : Boulangerie Martin
Objet : Commande confirmée

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : 6 croissants + 2 baguettes.
Prix : 15.80 francs.
Quand : demain 8 h.
Note : retrait au comptoir.

Cordialement,
Boulangerie Martin`;

const E4_3_CE_EMAIL_POOL_1 = buildExpressPool("e4-3-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["6 croissants + 2 baguettes", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "6",
    vfQ: "Commande : 6 croissants + 2 baguettes.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["15.80 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "15.80",
    vfQ: "Prix : 15.80 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Demain 8 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "demain",
    vfQ: "Quand : demain 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Retrait au comptoir", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "retrait",
    vfQ: "Note : retrait au comptoir.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Martin.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Commande confirmée", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Commande",
    vfQ: "Objet : Commande confirmée.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_2 = `De : Boulangerie du Lac
Objet : Gâteau anniversaire

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : gâteau chocolat 20 parts.
Prix : 45 francs.
Quand : samedi 14 h.
Note : prénom sur le gâteau.

Cordialement,
Boulangerie du Lac`;

const E4_3_CE_EMAIL_POOL_2 = buildExpressPool("e4-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Gâteau chocolat 20 parts", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "gâteau",
    vfQ: "Commande : gâteau chocolat 20 parts.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["45 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "45",
    vfQ: "Prix : 45 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Samedi 14 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "samedi",
    vfQ: "Quand : samedi 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Prénom sur le gâteau", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "prénom",
    vfQ: "Note : prénom sur le gâteau.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Gâteau anniversaire", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Gâteau",
    vfQ: "Objet : Gâteau anniversaire.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_3 = `De : Pain & Co
Objet : Pain bio

Bonjour,

Merci pour votre commande chez Pain.
Commande : pain complet + aux noix.
Prix : 7 francs.
Quand : ce matin 7 h.
Note : farine locale.

Cordialement,
Pain & Co`;

const E4_3_CE_EMAIL_POOL_3 = buildExpressPool("e4-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Pain complet + aux noix", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "pain",
    vfQ: "Commande : pain complet + aux noix.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["7 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "7",
    vfQ: "Prix : 7 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Ce matin 7 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "ce",
    vfQ: "Quand : ce matin 7 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Farine locale", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "farine",
    vfQ: "Note : farine locale.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Pain", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Pain",
    vfQ: "C'est Pain & Co.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Pain bio", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pain",
    vfQ: "Objet : Pain bio.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_4 = `De : Viennoiserie Express
Objet : Viennoiseries bureau

Bonjour,

Merci pour votre commande chez Viennoiserie.
Commande : 20 croissants + pains chocolat.
Prix : 48 francs.
Quand : lundi 7 h 30.
Note : livraison entreprise.

Cordialement,
Viennoiserie Express`;

const E4_3_CE_EMAIL_POOL_4 = buildExpressPool("e4-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["20 croissants + pains chocolat", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "20",
    vfQ: "Commande : 20 croissants + pains chocolat.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["48 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "48",
    vfQ: "Prix : 48 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Lundi 7 h 30", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "lundi",
    vfQ: "Quand : lundi 7 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Livraison entreprise", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "livraison",
    vfQ: "Note : livraison entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Viennoiserie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Viennoiserie",
    vfQ: "C'est Viennoiserie Express.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Viennoiseries bureau", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Viennoiseries",
    vfQ: "Objet : Viennoiseries bureau.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_5 = `De : Boulangerie Centrale
Objet : Commande mariage

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : pièce montée 3 étages.
Prix : 120 francs.
Quand : samedi 16 h.
Note : dégustation prévue.

Cordialement,
Boulangerie Centrale`;

const E4_3_CE_EMAIL_POOL_5 = buildExpressPool("e4-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Pièce montée 3 étages", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "pièce",
    vfQ: "Commande : pièce montée 3 étages.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["120 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "120",
    vfQ: "Prix : 120 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Samedi 16 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "samedi",
    vfQ: "Quand : samedi 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Dégustation prévue", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "dégustation",
    vfQ: "Note : dégustation prévue.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Centrale.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Commande mariage", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Commande",
    vfQ: "Objet : Commande mariage.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_6 = `De : Artisan Boulanger
Objet : Pain sans gluten

Bonjour,

Merci pour votre commande chez Artisan.
Commande : 2 pains sans gluten.
Prix : 11 francs.
Quand : mercredi.
Note : certifié bio.

Cordialement,
Artisan Boulanger`;

const E4_3_CE_EMAIL_POOL_6 = buildExpressPool("e4-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["2 pains sans gluten", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "2",
    vfQ: "Commande : 2 pains sans gluten.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["11 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "11",
    vfQ: "Prix : 11 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Mercredi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "mercredi",
    vfQ: "Quand : mercredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Certifié bio", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "certifié",
    vfQ: "Note : certifié bio.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Artisan", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Artisan",
    vfQ: "C'est Artisan Boulanger.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Pain sans gluten", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pain",
    vfQ: "Objet : Pain sans gluten.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_7 = `De : Boulangerie des Alpes
Objet : Tarte aux fruits

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : tarte saison.
Prix : 28 francs.
Quand : dimanche midi.
Note : fruits de saison.

Cordialement,
Boulangerie des Alpes`;

const E4_3_CE_EMAIL_POOL_7 = buildExpressPool("e4-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Tarte saison", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "tarte",
    vfQ: "Commande : tarte saison.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["28 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "28",
    vfQ: "Prix : 28 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Dimanche midi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "dimanche",
    vfQ: "Quand : dimanche midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Fruits de saison", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "fruits",
    vfQ: "Note : fruits de saison.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie des Alpes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Tarte aux fruits", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Tarte",
    vfQ: "Objet : Tarte aux fruits.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_8 = `De : Le Fournil
Objet : Sandwichs traiteur

Bonjour,

Merci pour votre commande chez Le.
Commande : 10 sandwiches assortis.
Prix : 50 francs.
Quand : vendredi midi.
Note : livraison gratuite.

Cordialement,
Le Fournil`;

const E4_3_CE_EMAIL_POOL_8 = buildExpressPool("e4-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["10 sandwiches assortis", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "10",
    vfQ: "Commande : 10 sandwiches assortis.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["50 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "50",
    vfQ: "Prix : 50 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Vendredi midi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "vendredi",
    vfQ: "Quand : vendredi midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Livraison gratuite", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "livraison",
    vfQ: "Note : livraison gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Le", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Le",
    vfQ: "C'est Le Fournil.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Sandwichs traiteur", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Sandwichs",
    vfQ: "Objet : Sandwichs traiteur.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_9 = `De : Boulangerie Rossi
Objet : Brioches Pâques

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : brioches décorées.
Prix : 15 francs.
Quand : avant Pâques.
Note : commande 48 h avant.

Cordialement,
Boulangerie Rossi`;

const E4_3_CE_EMAIL_POOL_9 = buildExpressPool("e4-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Brioches décorées", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "brioches",
    vfQ: "Commande : brioches décorées.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["15 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "15",
    vfQ: "Prix : 15 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Avant pâques", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "avant",
    vfQ: "Quand : avant Pâques.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Commande 48 h avant", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "commande",
    vfQ: "Note : commande 48 h avant.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Rossi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Brioches Pâques", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Brioches",
    vfQ: "Objet : Brioches Pâques.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_10 = `De : Maison du Pain
Objet : Abonnement pain

Bonjour,

Merci pour votre commande chez Maison.
Commande : pain livré chaque jour.
Prix : 25 francs/semaine.
Quand : dès lundi.
Note : livraison matinale.

Cordialement,
Maison du Pain`;

const E4_3_CE_EMAIL_POOL_10 = buildExpressPool("e4-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Pain livré chaque jour", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "pain",
    vfQ: "Commande : pain livré chaque jour.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["25 francs/semaine", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "25",
    vfQ: "Prix : 25 francs/semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Dès lundi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "dès",
    vfQ: "Quand : dès lundi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Livraison matinale", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "livraison",
    vfQ: "Note : livraison matinale.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Maison", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Maison",
    vfQ: "C'est Maison du Pain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Abonnement pain", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Abonnement",
    vfQ: "Objet : Abonnement pain.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_11 = `De : Boulangerie Bio
Objet : Farine locale

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : pain de campagne bio.
Prix : 4.50 francs.
Quand : tous les jours.
Note : farine du moulin voisin.

Cordialement,
Boulangerie Bio`;

const E4_3_CE_EMAIL_POOL_11 = buildExpressPool("e4-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Pain de campagne bio", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "pain",
    vfQ: "Commande : pain de campagne bio.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["4.50 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "4.50",
    vfQ: "Prix : 4.50 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Tous les jours", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "tous",
    vfQ: "Quand : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Farine du moulin voisin", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "farine",
    vfQ: "Note : farine du moulin voisin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Bio.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Farine locale", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Farine",
    vfQ: "Objet : Farine locale.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_12 = `De : Pâtisserie Douceur
Objet : Éclairs assortis

Bonjour,

Merci pour votre commande chez Pâtisserie.
Commande : 12 éclairs 4 parfums.
Prix : 36 francs.
Quand : samedi.
Note : chocolat, café, vanille, pistache.

Cordialement,
Pâtisserie Douceur`;

const E4_3_CE_EMAIL_POOL_12 = buildExpressPool("e4-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["12 éclairs 4 parfums", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "12",
    vfQ: "Commande : 12 éclairs 4 parfums.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["36 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "36",
    vfQ: "Prix : 36 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Samedi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "samedi",
    vfQ: "Quand : samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Chocolat, café, vanille, pistache", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "chocolat,",
    vfQ: "Note : chocolat, café, vanille, pistache.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Pâtisserie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Pâtisserie",
    vfQ: "C'est Pâtisserie Douceur.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Éclairs assortis", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Éclairs",
    vfQ: "Objet : Éclairs assortis.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_13 = `De : Boulangerie Express
Objet : Commande rapide

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : baguette + croissant.
Prix : 4.50 francs.
Quand : dans 15 min.
Note : paiement en ligne.

Cordialement,
Boulangerie Express`;

const E4_3_CE_EMAIL_POOL_13 = buildExpressPool("e4-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Baguette + croissant", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "baguette",
    vfQ: "Commande : baguette + croissant.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["4.50 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "4.50",
    vfQ: "Prix : 4.50 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Dans 15 min", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "dans",
    vfQ: "Quand : dans 15 min.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Paiement en ligne", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "paiement",
    vfQ: "Note : paiement en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Express.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Commande rapide", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Commande",
    vfQ: "Objet : Commande rapide.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_14 = `De : Fournil Tradition
Objet : Pain au levain

Bonjour,

Merci pour votre commande chez Fournil.
Commande : pain tradition 1 kg.
Prix : 5 francs.
Quand : ce matin.
Note : levain naturel.

Cordialement,
Fournil Tradition`;

const E4_3_CE_EMAIL_POOL_14 = buildExpressPool("e4-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Pain tradition 1 kg", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "pain",
    vfQ: "Commande : pain tradition 1 kg.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["5 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "5",
    vfQ: "Prix : 5 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Ce matin", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "ce",
    vfQ: "Quand : ce matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Levain naturel", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "levain",
    vfQ: "Note : levain naturel.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Fournil", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Fournil",
    vfQ: "C'est Fournil Tradition.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Pain au levain", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pain",
    vfQ: "Objet : Pain au levain.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_15 = `De : Boulangerie Soleil
Objet : Quiche du jour

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : quiche lorraine 6 parts.
Prix : 24 francs.
Quand : midi.
Note : réchauffer 5 min.

Cordialement,
Boulangerie Soleil`;

const E4_3_CE_EMAIL_POOL_15 = buildExpressPool("e4-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Quiche lorraine 6 parts", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "quiche",
    vfQ: "Commande : quiche lorraine 6 parts.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["24 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "24",
    vfQ: "Prix : 24 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Midi", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "midi",
    vfQ: "Quand : midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Réchauffer 5 min", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "réchauffer",
    vfQ: "Note : réchauffer 5 min.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Soleil.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Quiche du jour", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Quiche",
    vfQ: "Objet : Quiche du jour.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_16 = `De : Pains & Gourmandises
Objet : Goûter enfants

Bonjour,

Merci pour votre commande chez Pains.
Commande : madeleines + jus.
Prix : 12 francs.
Quand : après l'école.
Note : sans arôme artificiel.

Cordialement,
Pains & Gourmandises`;

const E4_3_CE_EMAIL_POOL_16 = buildExpressPool("e4-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Madeleines + jus", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "madeleines",
    vfQ: "Commande : madeleines + jus.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["12 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "12",
    vfQ: "Prix : 12 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Après l'école", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "après",
    vfQ: "Quand : après l'école.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Sans arôme artificiel", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "sans",
    vfQ: "Note : sans arôme artificiel.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Pains", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Pains",
    vfQ: "C'est Pains & Gourmandises.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Goûter enfants", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Goûter",
    vfQ: "Objet : Goûter enfants.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_17 = `De : Boulangerie Nyon
Objet : Fougasse

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : fougasse olives 2 pièces.
Prix : 9 francs.
Quand : samedi matin.
Note : olives de Provence.

Cordialement,
Boulangerie Nyon`;

const E4_3_CE_EMAIL_POOL_17 = buildExpressPool("e4-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Fougasse olives 2 pièces", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "fougasse",
    vfQ: "Commande : fougasse olives 2 pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["9 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "9",
    vfQ: "Prix : 9 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Samedi matin", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "samedi",
    vfQ: "Quand : samedi matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Olives de provence", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "olives",
    vfQ: "Note : olives de Provence.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Nyon.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Fougasse", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fougasse",
    vfQ: "Objet : Fougasse.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_18 = `De : Art du Pain
Objet : Cours boulangerie

Bonjour,

Merci pour votre commande chez Art.
Commande : atelier pain maison.
Prix : 60 francs.
Quand : samedi 9 h.
Note : places limitées.

Cordialement,
Art du Pain`;

const E4_3_CE_EMAIL_POOL_18 = buildExpressPool("e4-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Atelier pain maison", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "atelier",
    vfQ: "Commande : atelier pain maison.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["60 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "60",
    vfQ: "Prix : 60 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Samedi 9 h", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "samedi",
    vfQ: "Quand : samedi 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Places limitées", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "places",
    vfQ: "Note : places limitées.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Art", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Art",
    vfQ: "C'est Art du Pain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Cours boulangerie", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Cours",
    vfQ: "Objet : Cours boulangerie.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_19 = `De : Boulangerie Village
Objet : Pain aux céréales

Bonjour,

Merci pour votre commande chez Boulangerie.
Commande : pain 5 céréales.
Prix : 4.20 francs.
Quand : tous les matins.
Note : graines de tournesol.

Cordialement,
Boulangerie Village`;

const E4_3_CE_EMAIL_POOL_19 = buildExpressPool("e4-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Pain 5 céréales", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "pain",
    vfQ: "Commande : pain 5 céréales.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["4.20 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "4.20",
    vfQ: "Prix : 4.20 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Tous les matins", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "tous",
    vfQ: "Quand : tous les matins.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Graines de tournesol", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "graines",
    vfQ: "Note : graines de tournesol.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Boulangerie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Boulangerie",
    vfQ: "C'est Boulangerie Village.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Pain aux céréales", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pain",
    vfQ: "Objet : Pain aux céréales.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_20 = `De : Pâtisserie Fine
Objet : Macarons

Bonjour,

Merci pour votre commande chez Pâtisserie.
Commande : boîte 12 macarons.
Prix : 24 francs.
Quand : commande 24 h avant.
Note : parfums au choix.

Cordialement,
Pâtisserie Fine`;

const E4_3_CE_EMAIL_POOL_20 = buildExpressPool("e4-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quelle commande ?",
    text: ["Boîte 12 macarons", "Une voiture", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Commande : _________.",
    fill: "boîte",
    vfQ: "Commande : boîte 12 macarons.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel prix ?",
    text: ["24 francs", "1 franc", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Prix : _________.",
    fill: "24",
    vfQ: "Prix : 24 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand ?",
    text: ["Commande 24 h avant", "Jamais", "En 1800"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Quand : _________.",
    fill: "commande",
    vfQ: "Quand : commande 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quelle note ?",
    text: ["Parfums au choix", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Note : _________.",
    fill: "parfums",
    vfQ: "Note : parfums au choix.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boulangerie ?",
    text: ["Pâtisserie", "Une pharmacie", "Une gare"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "chez _________.",
    fill: "Pâtisserie",
    vfQ: "C'est Pâtisserie Fine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est l'objet ?",
    text: ["Macarons", "Une facture d'électricité", "Un examen"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Macarons",
    vfQ: "Objet : Macarons.",
    vfC: 0,
  }),
]);

export const E4_3_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e4-3-ce-email-1",
  readingText: E4_3_CE_EMAIL_TEXT_1,
  questionPool: E4_3_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-2",
  readingText: E4_3_CE_EMAIL_TEXT_2,
  questionPool: E4_3_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-3",
  readingText: E4_3_CE_EMAIL_TEXT_3,
  questionPool: E4_3_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-4",
  readingText: E4_3_CE_EMAIL_TEXT_4,
  questionPool: E4_3_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-5",
  readingText: E4_3_CE_EMAIL_TEXT_5,
  questionPool: E4_3_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-6",
  readingText: E4_3_CE_EMAIL_TEXT_6,
  questionPool: E4_3_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-7",
  readingText: E4_3_CE_EMAIL_TEXT_7,
  questionPool: E4_3_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-8",
  readingText: E4_3_CE_EMAIL_TEXT_8,
  questionPool: E4_3_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-9",
  readingText: E4_3_CE_EMAIL_TEXT_9,
  questionPool: E4_3_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-10",
  readingText: E4_3_CE_EMAIL_TEXT_10,
  questionPool: E4_3_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-11",
  readingText: E4_3_CE_EMAIL_TEXT_11,
  questionPool: E4_3_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-12",
  readingText: E4_3_CE_EMAIL_TEXT_12,
  questionPool: E4_3_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-13",
  readingText: E4_3_CE_EMAIL_TEXT_13,
  questionPool: E4_3_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-14",
  readingText: E4_3_CE_EMAIL_TEXT_14,
  questionPool: E4_3_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-15",
  readingText: E4_3_CE_EMAIL_TEXT_15,
  questionPool: E4_3_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-16",
  readingText: E4_3_CE_EMAIL_TEXT_16,
  questionPool: E4_3_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-17",
  readingText: E4_3_CE_EMAIL_TEXT_17,
  questionPool: E4_3_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-18",
  readingText: E4_3_CE_EMAIL_TEXT_18,
  questionPool: E4_3_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-19",
  readingText: E4_3_CE_EMAIL_TEXT_19,
  questionPool: E4_3_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e4-3-ce-email-20",
  readingText: E4_3_CE_EMAIL_TEXT_20,
  questionPool: E4_3_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E4_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e4-3-pee-1",
    title: "Confirmer sa commande",
    situation: "La boulangerie confirme votre commande pour samedi.",
    sourceMessage: {
      from: "Boulangerie du Pont",
      subject: "Votre commande pour samedi",
      body: "Bonjour,\nVotre commande est prête samedi à 10 h : deux tartes et douze croissants.\nMerci de confirmer.\nLa boulangère",
    },
    instruction: "Répondez à la boulangerie : confirmez la commande, dites à quelle heure vous venez et posez une question sur le prix.",
    points: ["La confirmation", "Votre heure d'arrivée", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-2",
    title: "Commander pour une fête",
    situation: "Vous organisez une fête. La boulangerie vous répond.",
    sourceMessage: {
      from: "Boulangerie du Pont",
      subject: "Votre demande",
      body: "Bonjour,\nMerci pour votre message. Pour votre fête, dites-nous la date, les produits et les quantités.\nLa boulangère",
    },
    instruction: "Répondez à la boulangerie : donnez la date de la fête, commandez les produits avec les quantités et demandez le prix total.",
    points: ["La date", "Les produits et quantités", "Le prix total"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-3",
    title: "Rendre un petit service",
    situation: "Une amie vous demande d'acheter du pain.",
    sourceMessage: {
      from: "Nour",
      subject: "Petit service",
      body: "Coucou,\nJe rentre tard ce soir. Tu peux acheter du pain à la boulangerie ?\nMerci beaucoup !\nNour",
    },
    instruction: "Répondez à Nour : acceptez, demandez ce qu'il faut acheter exactement et dites à quelle heure vous passez à la boulangerie.",
    points: ["Votre accord", "Une question sur les produits", "L'heure de votre passage"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-4",
    title: "Un gâteau pour un collègue",
    situation: "Une collègue organise une fête au bureau.",
    sourceMessage: {
      from: "Julie",
      subject: "Gâteau pour David",
      body: "Bonjour,\nVendredi, on fête le départ de David au bureau.\nTu connais une bonne boulangerie pour le gâteau ?\nJulie",
    },
    instruction: "Répondez à Julie : proposez une boulangerie, conseillez un gâteau et dites qui va le chercher vendredi.",
    points: ["La boulangerie", "Le gâteau conseillé", "Qui va le chercher"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-5",
    title: "Modifier une commande",
    situation: "Vous voulez changer votre commande de croissants.",
    sourceMessage: {
      from: "Boulangerie du Pont",
      subject: "Confirmation de commande",
      body: "Bonjour,\nNous confirmons votre commande : dix croissants pour samedi à 9 h.\nLa boulangère",
    },
    instruction: "Répondez à la boulangerie : excusez-vous, demandez douze croissants et deux baguettes et remerciez.",
    points: ["L'excuse", "La nouvelle commande", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-6",
    title: "Un problème avec la commande",
    situation: "La boulangerie a un problème avec votre tarte.",
    sourceMessage: {
      from: "Boulangerie du Pont",
      subject: "Petit problème",
      body: "Bonjour,\nNous n'avons plus de pommes pour votre tarte.\nNous pouvons faire une tarte au citron. Êtes-vous d'accord ?\nLa boulangère",
    },
    instruction: "Répondez à la boulangerie : acceptez ou refusez la tarte au citron, expliquez pourquoi et posez une question sur le prix.",
    points: ["Votre décision", "Pourquoi", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-7",
    title: "La fête de l'école",
    situation: "L'école demande un goûter aux parents.",
    sourceMessage: {
      from: "École des Vergers",
      subject: "Fête de l'école",
      body: "Bonjour,\nPour la fête de l'école samedi, chaque famille apporte quelque chose à manger.\nQu'apportez-vous ?\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : dites ce que vous apportez de la boulangerie, donnez la quantité et posez une question sur l'heure de la fête.",
    points: ["Ce que vous apportez", "La quantité", "Une question sur l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-8",
    title: "Conseiller une boulangerie",
    situation: "Un nouveau voisin cherche une bonne boulangerie.",
    sourceMessage: {
      from: "Ivan",
      subject: "Une bonne boulangerie ?",
      body: "Bonjour,\nJe suis nouveau dans le quartier.\nVous connaissez une bonne boulangerie près d'ici ?\nIvan",
    },
    instruction: "Répondez à Ivan : conseillez votre boulangerie, expliquez où elle est et donnez ses horaires.",
    points: ["La boulangerie conseillée", "Où elle est", "Les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-9",
    title: "Les horaires de décembre",
    situation: "La boulangerie annonce ses horaires de fêtes.",
    sourceMessage: {
      from: "Boulangerie du Pont",
      subject: "Nos horaires de décembre",
      body: "Bonjour,\nEn décembre, la boulangerie ouvre tous les jours à 6 h 30.\nPensez à commander pour les fêtes !\nLa boulangère",
    },
    instruction: "Répondez à la boulangerie : commandez pour le réveillon, demandez l'heure de fermeture le 24 décembre et remerciez.",
    points: ["La commande pour le réveillon", "La question sur le 24 décembre", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-10",
    title: "Merci pour la fête",
    situation: "Une amie a adoré la tarte de votre fête.",
    sourceMessage: {
      from: "Amina",
      subject: "Merci pour la fête !",
      body: "Coucou,\nMerci pour la fête de samedi, c'était super !\nLa tarte aux pommes était délicieuse. Elle vient d'où ?\nAmina",
    },
    instruction: "Répondez à Amina : remerciez, donnez le nom et l'adresse de la boulangerie et proposez d'y aller ensemble.",
    points: ["Un remerciement", "La boulangerie et son adresse", "La proposition d'y aller ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e4-3-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 11",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 12",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 13",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 14",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 15",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 16",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 17",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 18",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 19",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
},
{
  id: "e4-3-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e4-3",
    body: "Bonjour,\nJ'ai une question pour vous. Pouvez-vous me répondre ?\nMerci,\nContact 20",
  },
  instruction: "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
  points: [
    "Un remerciement",
    "Votre réponse",
    "Une question",
  ],
  minWords: PE_MIN,
  maxWords: PE_MAX,
}
];
