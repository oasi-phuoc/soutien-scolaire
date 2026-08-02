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

const E9_1_CE_EMAIL_TEXT = `De : Boutique Lina

Objet : Confirmation commande n° 2847

Bonjour,

Nous vous informons concernant commande n° 2847 du 12 mars.

Vous avez concerné : un sac à dos. Montant ou détail : 45 €.

Délai ou date : 15 mars entre 10 h et 12 h. Information complémentaire : suivre votre colis sur notre site.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Boutique`;

const E9_1_CE_EMAIL_POOL = buildExpressPool("e9-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Confirmation commande n° 2847", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Confirmation",
    vfQ: "L'objet est Confirmation commande n° 2847.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Commande n° 2847 du 12 mars", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant commande n° 2847 du 12 mars.",
    fill: "commande",
    vfQ: "Sujet : commande n° 2847 du 12 mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Un sac à dos", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : un sac à dos.",
    fill: "dos",
    vfQ: "Élément : un sac à dos.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["45 €", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : 45 €.",
    fill: "45",
    vfQ: "Détail : 45 €.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["15 mars entre 10 h et 12 h", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : 15 mars entre 10 h et 12 h.",
    fill: "15",
    vfQ: "Délai : 15 mars entre 10 h et 12 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Boutique Lina", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Boutique",
    vfQ: "L'expéditeur est Boutique Lina.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_2_TEXT = `De : ÉlectroHome

Objet : Votre commande n° 4582

Bonjour,

Nous vous informons concernant commande n° 4582 du 3 février.

Vous avez concerné : un aspirateur. Montant ou détail : 149 francs.

Délai ou date : jeudi 8 février entre 14 h et 17 h. Information complémentaire : rapporter dans un délai de trente jours.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

ÉlectroHome`;

const E9_1_CE_EMAIL_2_POOL = buildExpressPool("e9-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Votre commande n° 4582", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Votre",
    vfQ: "L'objet est Votre commande n° 4582.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Commande n° 4582 du 3 février", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant commande n° 4582 du 3 février.",
    fill: "commande",
    vfQ: "Sujet : commande n° 4582 du 3 février.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Un aspirateur", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : un aspirateur.",
    fill: "aspirateur",
    vfQ: "Élément : un aspirateur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["149 francs", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : 149 francs.",
    fill: "149",
    vfQ: "Détail : 149 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Jeudi 8 février entre 14 h et 17 h", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : jeudi 8 février entre 14 h et 17 h.",
    fill: "jeudi",
    vfQ: "Délai : jeudi 8 février entre 14 h et 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["ÉlectroHome", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "ÉlectroHome",
    vfQ: "L'expéditeur est ÉlectroHome.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_3_TEXT = `De : Mode Élégance

Objet : Retard de livraison

Bonjour,

Nous vous informons concernant commande n° 9921.

Vous avez concerné : un manteau. Montant ou détail : 189 €.

Délai ou date : cinq jours supplémentaires. Information complémentaire : bon d'achat de vingt francs.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Mode`;

const E9_1_CE_EMAIL_3_POOL = buildExpressPool("e9-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Retard de livraison", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Retard",
    vfQ: "L'objet est Retard de livraison.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Commande n° 9921", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant commande n° 9921.",
    fill: "commande",
    vfQ: "Sujet : commande n° 9921.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Un manteau", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : un manteau.",
    fill: "manteau",
    vfQ: "Élément : un manteau.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["189 €", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : 189 €.",
    fill: "189",
    vfQ: "Détail : 189 €.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Cinq jours supplémentaires", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : cinq jours supplémentaires.",
    fill: "cinq",
    vfQ: "Délai : cinq jours supplémentaires.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Mode Élégance", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Mode",
    vfQ: "L'expéditeur est Mode Élégance.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_4_TEXT = `De : TechShop

Objet : Produit endommagé

Bonjour,

Nous vous informons concernant colis n° 7734.

Vous avez concerné : un écran. Montant ou détail : remplacement gratuit.

Délai ou date : photo du dommage. Information complémentaire : enquête sous quarante-huit heures.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

TechShop`;

const E9_1_CE_EMAIL_4_POOL = buildExpressPool("e9-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Produit endommagé", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Produit",
    vfQ: "L'objet est Produit endommagé.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Colis n° 7734", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant colis n° 7734.",
    fill: "colis",
    vfQ: "Sujet : colis n° 7734.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Un écran", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : un écran.",
    fill: "écran",
    vfQ: "Élément : un écran.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Remplacement gratuit", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : remplacement gratuit.",
    fill: "remplacement",
    vfQ: "Détail : remplacement gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Photo du dommage", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : photo du dommage.",
    fill: "photo",
    vfQ: "Délai : photo du dommage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["TechShop", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "TechShop",
    vfQ: "L'expéditeur est TechShop.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_5_TEXT = `De : Fidélité Max

Objet : Votre carte avantages

Bonjour,

Nous vous informons concernant carte fidélité.

Vous avez concerné : moins dix pour cent. Montant ou détail : gratuite.

Délai ou date : magasins partenaires. Information complémentaire : application mobile.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Fidélité`;

const E9_1_CE_EMAIL_5_POOL = buildExpressPool("e9-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Votre carte avantages", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Votre",
    vfQ: "L'objet est Votre carte avantages.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Carte fidélité", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant carte fidélité.",
    fill: "carte",
    vfQ: "Sujet : carte fidélité.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Moins dix pour cent", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : moins dix pour cent.",
    fill: "cent",
    vfQ: "Élément : moins dix pour cent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Gratuite", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : gratuite.",
    fill: "gratuite",
    vfQ: "Détail : gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Magasins partenaires", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : magasins partenaires.",
    fill: "magasins",
    vfQ: "Délai : magasins partenaires.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Fidélité Max", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Fidélité",
    vfQ: "L'expéditeur est Fidélité Max.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_6_TEXT = `De : Panier Vert

Objet : Vous avez oublié des articles

Bonjour,

Nous vous informons concernant trois articles.

Vous avez concerné : panier en ligne. Montant ou détail : vingt-quatre heures.

Délai ou date : livraison gratuite. Information complémentaire : code promo BIENVENUE.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Panier`;

const E9_1_CE_EMAIL_6_POOL = buildExpressPool("e9-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Vous avez oublié des articles", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Vous",
    vfQ: "L'objet est Vous avez oublié des articles.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Trois articles", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant trois articles.",
    fill: "trois",
    vfQ: "Sujet : trois articles.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Panier en ligne", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : panier en ligne.",
    fill: "ligne",
    vfQ: "Élément : panier en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Vingt-quatre heures", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : vingt-quatre heures.",
    fill: "vingt-quatre",
    vfQ: "Détail : vingt-quatre heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Livraison gratuite", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : livraison gratuite.",
    fill: "livraison",
    vfQ: "Délai : livraison gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Panier Vert", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Panier",
    vfQ: "L'expéditeur est Panier Vert.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_7_TEXT = `De : Avis Plus

Objet : Donnez votre avis

Bonjour,

Nous vous informons concernant aspirateur acheté.

Vous avez concerné : cinq étoiles. Montant ou détail : cinq minutes.

Délai ou date : bon de dix francs. Information complémentaire : modération sous sept jours.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Avis`;

const E9_1_CE_EMAIL_7_POOL = buildExpressPool("e9-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Donnez votre avis", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Donnez",
    vfQ: "L'objet est Donnez votre avis.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Aspirateur acheté", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant aspirateur acheté.",
    fill: "aspirateur",
    vfQ: "Sujet : aspirateur acheté.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Cinq étoiles", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : cinq étoiles.",
    fill: "étoiles",
    vfQ: "Élément : cinq étoiles.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Cinq minutes", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : cinq minutes.",
    fill: "cinq",
    vfQ: "Détail : cinq minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Bon de dix francs", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : bon de dix francs.",
    fill: "bon",
    vfQ: "Délai : bon de dix francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Avis Plus", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Avis",
    vfQ: "L'expéditeur est Avis Plus.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_8_TEXT = `De : Remboursement Rapide

Objet : Remboursement effectué

Bonjour,

Nous vous informons concernant commande n° 5512.

Vous avez concerné : soixante-douze francs. Montant ou détail : trois jours ouvrés.

Délai ou date : compte bancaire. Information complémentaire : ticket de caisse.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Remboursement`;

const E9_1_CE_EMAIL_8_POOL = buildExpressPool("e9-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Remboursement effectué", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Remboursement",
    vfQ: "L'objet est Remboursement effectué.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Commande n° 5512", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant commande n° 5512.",
    fill: "commande",
    vfQ: "Sujet : commande n° 5512.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Soixante-douze francs", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : soixante-douze francs.",
    fill: "francs",
    vfQ: "Élément : soixante-douze francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Trois jours ouvrés", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : trois jours ouvrés.",
    fill: "trois",
    vfQ: "Détail : trois jours ouvrés.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Compte bancaire", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : compte bancaire.",
    fill: "compte",
    vfQ: "Délai : compte bancaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Remboursement Rapide", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Remboursement",
    vfQ: "L'expéditeur est Remboursement Rapide.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_9_TEXT = `De : Taille Parfaite

Objet : Échange de taille

Bonjour,

Nous vous informons concernant pantalon taille 40.

Vous avez concerné : taille 42. Montant ou détail : gratuit.

Délai ou date : étiquette d'expédition. Information complémentaire : point relais.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Taille`;

const E9_1_CE_EMAIL_9_POOL = buildExpressPool("e9-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Échange de taille", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Échange",
    vfQ: "L'objet est Échange de taille.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Pantalon taille 40", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant pantalon taille 40.",
    fill: "pantalon",
    vfQ: "Sujet : pantalon taille 40.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Taille 42", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : taille 42.",
    fill: "42",
    vfQ: "Élément : taille 42.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Gratuit", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : gratuit.",
    fill: "gratuit",
    vfQ: "Détail : gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Étiquette d'expédition", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : étiquette d'expédition.",
    fill: "étiquette",
    vfQ: "Délai : étiquette d'expédition.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Taille Parfaite", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Taille",
    vfQ: "L'expéditeur est Taille Parfaite.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_10_TEXT = `De : Réserve & Go

Objet : Article disponible en magasin

Bonjour,

Nous vous informons concernant réfrigérateur.

Vous avez concerné : magasin de Lausanne. Montant ou détail : quarante-huit heures.

Délai ou date : pièce d'identité. Information complémentaire : paiement sur place.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Réserve`;

const E9_1_CE_EMAIL_10_POOL = buildExpressPool("e9-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Article disponible en magasin", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Article",
    vfQ: "L'objet est Article disponible en magasin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Réfrigérateur", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant réfrigérateur.",
    fill: "réfrigérateur",
    vfQ: "Sujet : réfrigérateur.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Magasin de lausanne", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : magasin de Lausanne.",
    fill: "Lausanne",
    vfQ: "Élément : magasin de Lausanne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Quarante-huit heures", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : quarante-huit heures.",
    fill: "quarante-huit",
    vfQ: "Détail : quarante-huit heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Pièce d'identité", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : pièce d'identité.",
    fill: "pièce",
    vfQ: "Délai : pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Réserve & Go", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Réserve",
    vfQ: "L'expéditeur est Réserve & Go.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_11_TEXT = `De : Promo Perso

Objet : Offre personnalisée

Bonjour,

Nous vous informons concernant moins vingt-cinq pour cent.

Vous avez concerné : chaussures de sport. Montant ou détail : dimanche minuit.

Délai ou date : code SPORT25. Information complémentaire : non cumulable.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Promo`;

const E9_1_CE_EMAIL_11_POOL = buildExpressPool("e9-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Offre personnalisée", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Offre",
    vfQ: "L'objet est Offre personnalisée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Moins vingt-cinq pour cent", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant moins vingt-cinq pour cent.",
    fill: "moins",
    vfQ: "Sujet : moins vingt-cinq pour cent.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Chaussures de sport", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : chaussures de sport.",
    fill: "sport",
    vfQ: "Élément : chaussures de sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Dimanche minuit", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : dimanche minuit.",
    fill: "dimanche",
    vfQ: "Détail : dimanche minuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Code sport25", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : code SPORT25.",
    fill: "code",
    vfQ: "Délai : code SPORT25.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Promo Perso", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Promo",
    vfQ: "L'expéditeur est Promo Perso.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_12_TEXT = `De : Facture Express

Objet : Votre facture demandée

Bonjour,

Nous vous informons concernant facture n° 8821.

Vous avez concerné : pièce jointe PDF. Montant ou détail : comptabilité.

Délai ou date : TVA incluse. Information complémentaire : archivage deux ans.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Facture`;

const E9_1_CE_EMAIL_12_POOL = buildExpressPool("e9-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Votre facture demandée", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Votre",
    vfQ: "L'objet est Votre facture demandée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Facture n° 8821", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant facture n° 8821.",
    fill: "facture",
    vfQ: "Sujet : facture n° 8821.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Pièce jointe pdf", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : pièce jointe PDF.",
    fill: "PDF",
    vfQ: "Élément : pièce jointe PDF.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Comptabilité", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : comptabilité.",
    fill: "comptabilité",
    vfQ: "Détail : comptabilité.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Tva incluse", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : TVA incluse.",
    fill: "TVA",
    vfQ: "Délai : TVA incluse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Facture Express", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Facture",
    vfQ: "L'expéditeur est Facture Express.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_13_TEXT = `De : Garantie Plus

Objet : Extension de garantie

Bonjour,

Nous vous informons concernant deux ans supplémentaires.

Vous avez concerné : trente-neuf francs. Montant ou détail : lave-linge.

Délai ou date : sans engagement. Information complémentaire : activation en ligne.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Garantie`;

const E9_1_CE_EMAIL_13_POOL = buildExpressPool("e9-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Extension de garantie", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Extension",
    vfQ: "L'objet est Extension de garantie.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Deux ans supplémentaires", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant deux ans supplémentaires.",
    fill: "deux",
    vfQ: "Sujet : deux ans supplémentaires.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Trente-neuf francs", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : trente-neuf francs.",
    fill: "francs",
    vfQ: "Élément : trente-neuf francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Lave-linge", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : lave-linge.",
    fill: "lave-linge",
    vfQ: "Détail : lave-linge.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Sans engagement", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : sans engagement.",
    fill: "sans",
    vfQ: "Délai : sans engagement.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Garantie Plus", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Garantie",
    vfQ: "L'expéditeur est Garantie Plus.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_14_TEXT = `De : Stock Alert

Objet : Produit de nouveau disponible

Bonjour,

Nous vous informons concernant robot cuisine.

Vous avez concerné : cinq exemplaires. Montant ou détail : réservation prioritaire.

Délai ou date : notification SMS. Information complémentaire : délai quarante-huit heures.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Stock`;

const E9_1_CE_EMAIL_14_POOL = buildExpressPool("e9-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Produit de nouveau disponible", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Produit",
    vfQ: "L'objet est Produit de nouveau disponible.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Robot cuisine", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant robot cuisine.",
    fill: "robot",
    vfQ: "Sujet : robot cuisine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Cinq exemplaires", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : cinq exemplaires.",
    fill: "exemplaires",
    vfQ: "Élément : cinq exemplaires.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Réservation prioritaire", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : réservation prioritaire.",
    fill: "réservation",
    vfQ: "Détail : réservation prioritaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Notification sms", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : notification SMS.",
    fill: "notification",
    vfQ: "Délai : notification SMS.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Stock Alert", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Stock",
    vfQ: "L'expéditeur est Stock Alert.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_15_TEXT = `De : Événement Magasin

Objet : Invitation soirée VIP

Bonjour,

Nous vous informons concernant jeudi 18 h.

Vous avez concerné : nouvelle collection. Montant ou détail : cocktail.

Délai ou date : réservation obligatoire. Information complémentaire : places limitées.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Événement`;

const E9_1_CE_EMAIL_15_POOL = buildExpressPool("e9-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Invitation soirée VIP", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Invitation",
    vfQ: "L'objet est Invitation soirée VIP.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Jeudi 18 h", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant jeudi 18 h.",
    fill: "jeudi",
    vfQ: "Sujet : jeudi 18 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Nouvelle collection", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : nouvelle collection.",
    fill: "collection",
    vfQ: "Élément : nouvelle collection.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Cocktail", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : cocktail.",
    fill: "cocktail",
    vfQ: "Détail : cocktail.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Réservation obligatoire", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : réservation obligatoire.",
    fill: "réservation",
    vfQ: "Délai : réservation obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Événement Magasin", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Événement",
    vfQ: "L'expéditeur est Événement Magasin.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_16_TEXT = `De : Correction Prix

Objet : Erreur de prix corrigée

Bonjour,

Nous vous informons concernant téléphone.

Vous avez concerné : soixante-neuf francs au lieu de cent. Montant ou détail : remboursement différence.

Délai ou date : excuses. Information complémentaire : confirmation sous vingt-quatre heures.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Correction`;

const E9_1_CE_EMAIL_16_POOL = buildExpressPool("e9-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Erreur de prix corrigée", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Erreur",
    vfQ: "L'objet est Erreur de prix corrigée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Téléphone", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant téléphone.",
    fill: "téléphone",
    vfQ: "Sujet : téléphone.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Soixante-neuf francs au lieu de cent", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : soixante-neuf francs au lieu de cent.",
    fill: "cent",
    vfQ: "Élément : soixante-neuf francs au lieu de cent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Remboursement différence", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : remboursement différence.",
    fill: "remboursement",
    vfQ: "Détail : remboursement différence.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Excuses", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : excuses.",
    fill: "excuses",
    vfQ: "Délai : excuses.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Correction Prix", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Correction",
    vfQ: "L'expéditeur est Correction Prix.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_17_TEXT = `De : Point Relais

Objet : Colis disponible

Bonjour,

Nous vous informons concernant colis n° 3399.

Vous avez concerné : bureau de tabac. Montant ou détail : sept jours.

Délai ou date : pièce d'identité. Information complémentaire : code confidentiel.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Point`;

const E9_1_CE_EMAIL_17_POOL = buildExpressPool("e9-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Colis disponible", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Colis",
    vfQ: "L'objet est Colis disponible.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Colis n° 3399", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant colis n° 3399.",
    fill: "colis",
    vfQ: "Sujet : colis n° 3399.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Bureau de tabac", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : bureau de tabac.",
    fill: "tabac",
    vfQ: "Élément : bureau de tabac.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Sept jours", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : sept jours.",
    fill: "sept",
    vfQ: "Détail : sept jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Pièce d'identité", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : pièce d'identité.",
    fill: "pièce",
    vfQ: "Délai : pièce d'identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Point Relais", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Point",
    vfQ: "L'expéditeur est Point Relais.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_18_TEXT = `De : Service SAV

Objet : Ticket ouvert n° 4412

Bonjour,

Nous vous informons concernant réparation.

Vous avez concerné : délai cinq jours. Montant ou détail : devis gratuit.

Délai ou date : bon de retour. Information complémentaire : suivi en ligne.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Service`;

const E9_1_CE_EMAIL_18_POOL = buildExpressPool("e9-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Ticket ouvert n° 4412", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Ticket",
    vfQ: "L'objet est Ticket ouvert n° 4412.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Réparation", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant réparation.",
    fill: "réparation",
    vfQ: "Sujet : réparation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Délai cinq jours", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : délai cinq jours.",
    fill: "jours",
    vfQ: "Élément : délai cinq jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Devis gratuit", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : devis gratuit.",
    fill: "devis",
    vfQ: "Détail : devis gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Bon de retour", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : bon de retour.",
    fill: "bon",
    vfQ: "Délai : bon de retour.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Service SAV", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "L'expéditeur est Service SAV.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_19_TEXT = `De : Anniversaire Club

Objet : Joyeux anniversaire !

Bonjour,

Nous vous informons concernant code ANNI2025.

Vous avez concerné : moins quinze pour cent. Montant ou détail : valable trente jours.

Délai ou date : tout le site. Information complémentaire : cadeau surprise.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Anniversaire`;

const E9_1_CE_EMAIL_19_POOL = buildExpressPool("e9-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Joyeux anniversaire !", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Joyeux",
    vfQ: "L'objet est Joyeux anniversaire !.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Code anni2025", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant code ANNI2025.",
    fill: "code",
    vfQ: "Sujet : code ANNI2025.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Moins quinze pour cent", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : moins quinze pour cent.",
    fill: "cent",
    vfQ: "Élément : moins quinze pour cent.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Valable trente jours", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : valable trente jours.",
    fill: "valable",
    vfQ: "Détail : valable trente jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Tout le site", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : tout le site.",
    fill: "tout",
    vfQ: "Délai : tout le site.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Anniversaire Club", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Anniversaire",
    vfQ: "L'expéditeur est Anniversaire Club.",
    vfC: 0,
  }),
]);

const E9_1_CE_EMAIL_20_TEXT = `De : Alerte Sécurité

Objet : Tentative de connexion suspecte

Bonjour,

Nous vous informons concernant compte client.

Vous avez concerné : changer mot de passe. Montant ou détail : support client.

Délai ou date : vérification identité. Information complémentaire : signalement immédiat.

Action requise : information. Contact : information.

Merci pour votre confiance.

Cordialement,

Alerte`;

const E9_1_CE_EMAIL_20_POOL = buildExpressPool("e9-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Tentative de connexion suspecte", "Une facture d'électricité", "Un horaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Tentative",
    vfQ: "L'objet est Tentative de connexion suspecte.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel est le sujet principal ?",
    text: ["Compte client", "Rien", "Un voyage"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "concernant compte client.",
    fill: "compte",
    vfQ: "Sujet : compte client.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel produit ou élément ?",
    text: ["Changer mot de passe", "Un chat", "Une maison"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous avez concerné : changer mot de passe.",
    fill: "passe",
    vfQ: "Élément : changer mot de passe.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ou détail ?",
    text: ["Support client", "Gratuit", "Mille euros"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant ou détail : support client.",
    fill: "support",
    vfQ: "Détail : support client.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quel délai ou date ?",
    text: ["Vérification identité", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai ou date : vérification identité.",
    fill: "vérification",
    vfQ: "Délai : vérification identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle action requise ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action requise : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Qui envoie l'e-mail ?",
    text: ["Alerte Sécurité", "Le facteur", "La mairie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Alerte",
    vfQ: "L'expéditeur est Alerte Sécurité.",
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

const E9_2_CE_EMAIL_TEXT = `De : CFF Info

Objet : Retard de votre train IC 5

Bonjour,

Information : quarante-cinq minutes. Détail : correspondance Genève.

Date ou délai : remboursement partiel. Montant : application CFF.

Action : prochain départ quatorze heures. Contact : information.

Merci de votre compréhension.

Cordialement,

CFF`;

const E9_2_CE_EMAIL_POOL = buildExpressPool("e9-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Retard de votre train IC 5", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Retard",
    vfQ: "Objet : Retard de votre train IC 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Quarante-cinq minutes", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : quarante-cinq minutes.",
    fill: "quarante-cinq",
    vfQ: "Info : quarante-cinq minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Correspondance genève", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : correspondance Genève.",
    fill: "correspondance",
    vfQ: "Détail : correspondance Genève.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Application cff", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : application CFF.",
    fill: "application",
    vfQ: "Montant : application CFF.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Prochain départ quatorze heures", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : prochain départ quatorze heures.",
    fill: "prochain",
    vfQ: "Action : prochain départ quatorze heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["CFF Info", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "CFF",
    vfQ: "Expéditeur : CFF Info.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_2_TEXT = `De : EasyJet

Objet : Confirmation vol EZS 218

Bonjour,

Information : Genève–Lisbonne. Détail : embarquement porte A7.

Date ou délai : jeudi 6 juin. Montant : bagage cabine dix kilos.

Action : enregistrement en ligne. Contact : information.

Merci de votre compréhension.

Cordialement,

EasyJet`;

const E9_2_CE_EMAIL_2_POOL = buildExpressPool("e9-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Confirmation vol EZS 218", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Confirmation",
    vfQ: "Objet : Confirmation vol EZS 218.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Genève–lisbonne", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : Genève–Lisbonne.",
    fill: "Genève–Lisbonne",
    vfQ: "Info : Genève–Lisbonne.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Embarquement porte a7", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : embarquement porte A7.",
    fill: "embarquement",
    vfQ: "Détail : embarquement porte A7.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Bagage cabine dix kilos", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : bagage cabine dix kilos.",
    fill: "bagage",
    vfQ: "Montant : bagage cabine dix kilos.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Enregistrement en ligne", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : enregistrement en ligne.",
    fill: "enregistrement",
    vfQ: "Action : enregistrement en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["EasyJet", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "EasyJet",
    vfQ: "Expéditeur : EasyJet.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_3_TEXT = `De : TPG Abonnement

Objet : Renouvellement Mobilis

Bonjour,

Information : échéance 30 avril. Détail : soixante-quinze francs.

Date ou délai : paiement automatique. Montant : carte nouvelle.

Action : zones 110-111. Contact : information.

Merci de votre compréhension.

Cordialement,

TPG`;

const E9_2_CE_EMAIL_3_POOL = buildExpressPool("e9-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Renouvellement Mobilis", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Renouvellement",
    vfQ: "Objet : Renouvellement Mobilis.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Échéance 30 avril", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : échéance 30 avril.",
    fill: "échéance",
    vfQ: "Info : échéance 30 avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Soixante-quinze francs", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : soixante-quinze francs.",
    fill: "soixante-quinze",
    vfQ: "Détail : soixante-quinze francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Carte nouvelle", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : carte nouvelle.",
    fill: "carte",
    vfQ: "Montant : carte nouvelle.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Zones 110-111", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : zones 110-111.",
    fill: "zones",
    vfQ: "Action : zones 110-111.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["TPG Abonnement", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "TPG",
    vfQ: "Expéditeur : TPG Abonnement.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_4_TEXT = `De : Mobility

Objet : Réservation confirmée

Bonjour,

Information : véhicule type B. Détail : samedi 9 h.

Date ou délai : Place du Marché. Montant : carburant inclus.

Action : prolongation possible. Contact : information.

Merci de votre compréhension.

Cordialement,

Mobility`;

const E9_2_CE_EMAIL_4_POOL = buildExpressPool("e9-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Réservation confirmée", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation confirmée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Véhicule type b", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : véhicule type B.",
    fill: "véhicule",
    vfQ: "Info : véhicule type B.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Samedi 9 h", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : samedi 9 h.",
    fill: "samedi",
    vfQ: "Détail : samedi 9 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Carburant inclus", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : carburant inclus.",
    fill: "carburant",
    vfQ: "Montant : carburant inclus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Prolongation possible", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : prolongation possible.",
    fill: "prolongation",
    vfQ: "Action : prolongation possible.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Mobility", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Mobility",
    vfQ: "Expéditeur : Mobility.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_5_TEXT = `De : Parking Aéroport

Objet : Réservation parking P1

Bonjour,

Information : du 12 au 19 mai. Détail : cent vingt-six francs.

Date ou délai : navette gratuite. Montant : étage 3.

Action : modification en ligne. Contact : information.

Merci de votre compréhension.

Cordialement,

Parking`;

const E9_2_CE_EMAIL_5_POOL = buildExpressPool("e9-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Réservation parking P1", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation parking P1.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Du 12 au 19 mai", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : du 12 au 19 mai.",
    fill: "du",
    vfQ: "Info : du 12 au 19 mai.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Cent vingt-six francs", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : cent vingt-six francs.",
    fill: "cent",
    vfQ: "Détail : cent vingt-six francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Étage 3", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : étage 3.",
    fill: "étage",
    vfQ: "Montant : étage 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Modification en ligne", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : modification en ligne.",
    fill: "modification",
    vfQ: "Action : modification en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Parking Aéroport", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Parking",
    vfQ: "Expéditeur : Parking Aéroport.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_6_TEXT = `De : FlixBus

Objet : Billet Genève–Milan

Bonjour,

Information : référence FB8821. Détail : départ huit heures trente.

Date ou délai : quai 4. Montant : e-billet en pièce jointe.

Action : annulation vingt-quatre heures. Contact : information.

Merci de votre compréhension.

Cordialement,

FlixBus`;

const E9_2_CE_EMAIL_6_POOL = buildExpressPool("e9-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Billet Genève–Milan", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Billet",
    vfQ: "Objet : Billet Genève–Milan.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Référence fb8821", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : référence FB8821.",
    fill: "référence",
    vfQ: "Info : référence FB8821.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Départ huit heures trente", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : départ huit heures trente.",
    fill: "départ",
    vfQ: "Détail : départ huit heures trente.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["E-billet en pièce jointe", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : e-billet en pièce jointe.",
    fill: "e-billet",
    vfQ: "Montant : e-billet en pièce jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Annulation vingt-quatre heures", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : annulation vingt-quatre heures.",
    fill: "annulation",
    vfQ: "Action : annulation vingt-quatre heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["FlixBus", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "FlixBus",
    vfQ: "Expéditeur : FlixBus.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_7_TEXT = `De : Taxi Central

Objet : Course confirmée

Bonjour,

Information : aéroport vers centre. Détail : mercredi minuit.

Date ou délai : trente-cinq francs forfait. Montant : chauffeur Ahmed.

Action : paiement carte. Contact : information.

Merci de votre compréhension.

Cordialement,

Taxi`;

const E9_2_CE_EMAIL_7_POOL = buildExpressPool("e9-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Course confirmée", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Course",
    vfQ: "Objet : Course confirmée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Aéroport vers centre", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : aéroport vers centre.",
    fill: "aéroport",
    vfQ: "Info : aéroport vers centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Mercredi minuit", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : mercredi minuit.",
    fill: "mercredi",
    vfQ: "Détail : mercredi minuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Chauffeur ahmed", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : chauffeur Ahmed.",
    fill: "chauffeur",
    vfQ: "Montant : chauffeur Ahmed.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Paiement carte", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : paiement carte.",
    fill: "paiement",
    vfQ: "Action : paiement carte.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Taxi Central", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Taxi",
    vfQ: "Expéditeur : Taxi Central.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_8_TEXT = `De : VéloCité

Objet : Contrat location vélo

Bonjour,

Information : trois mois minimum. Détail : quarante-neuf francs par mois.

Date ou délai : livraison lundi. Montant : antivol inclus.

Action : atelier partenaire. Contact : information.

Merci de votre compréhension.

Cordialement,

VéloCité`;

const E9_2_CE_EMAIL_8_POOL = buildExpressPool("e9-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Contrat location vélo", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Contrat",
    vfQ: "Objet : Contrat location vélo.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Trois mois minimum", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : trois mois minimum.",
    fill: "trois",
    vfQ: "Info : trois mois minimum.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Quarante-neuf francs par mois", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : quarante-neuf francs par mois.",
    fill: "quarante-neuf",
    vfQ: "Détail : quarante-neuf francs par mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Antivol inclus", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : antivol inclus.",
    fill: "antivol",
    vfQ: "Montant : antivol inclus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Atelier partenaire", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : atelier partenaire.",
    fill: "atelier",
    vfQ: "Action : atelier partenaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["VéloCité", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "VéloCité",
    vfQ: "Expéditeur : VéloCité.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_9_TEXT = `De : CGN Bateaux

Objet : Billet Lausanne–Évian

Bonjour,

Information : aller simple. Détail : dix-huit francs.

Date ou délai : départ quinze heures. Montant : pont supérieur.

Action : vélo supplément cinq francs. Contact : information.

Merci de votre compréhension.

Cordialement,

CGN`;

const E9_2_CE_EMAIL_9_POOL = buildExpressPool("e9-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Billet Lausanne–Évian", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Billet",
    vfQ: "Objet : Billet Lausanne–Évian.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Aller simple", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : aller simple.",
    fill: "aller",
    vfQ: "Info : aller simple.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Dix-huit francs", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : dix-huit francs.",
    fill: "dix-huit",
    vfQ: "Détail : dix-huit francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Pont supérieur", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : pont supérieur.",
    fill: "pont",
    vfQ: "Montant : pont supérieur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Vélo supplément cinq francs", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : vélo supplément cinq francs.",
    fill: "vélo",
    vfQ: "Action : vélo supplément cinq francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["CGN Bateaux", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "CGN",
    vfQ: "Expéditeur : CGN Bateaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_10_TEXT = `De : SBB Carte

Objet : Demande demi-tarif reçue

Bonjour,

Information : traitement dix jours. Détail : photo requise.

Date ou délai : cent quatre-vingt-cinq francs. Montant : envoi par courrier.

Action : validité un an. Contact : information.

Merci de votre compréhension.

Cordialement,

SBB`;

const E9_2_CE_EMAIL_10_POOL = buildExpressPool("e9-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Demande demi-tarif reçue", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Demande",
    vfQ: "Objet : Demande demi-tarif reçue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Traitement dix jours", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : traitement dix jours.",
    fill: "traitement",
    vfQ: "Info : traitement dix jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Photo requise", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : photo requise.",
    fill: "photo",
    vfQ: "Détail : photo requise.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Envoi par courrier", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : envoi par courrier.",
    fill: "envoi",
    vfQ: "Montant : envoi par courrier.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Validité un an", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : validité un an.",
    fill: "validité",
    vfQ: "Action : validité un an.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["SBB Carte", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "SBB",
    vfQ: "Expéditeur : SBB Carte.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_11_TEXT = `De : Alerte Trafic

Objet : Déviation bus ligne 12

Bonjour,

Information : travaux rue du Stand. Détail : arrêt provisoire Place Neuve.

Date ou délai : jusqu'au 20 mai. Montant : bus de remplacement.

Action : info temps réel. Contact : information.

Merci de votre compréhension.

Cordialement,

Alerte`;

const E9_2_CE_EMAIL_11_POOL = buildExpressPool("e9-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Déviation bus ligne 12", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Déviation",
    vfQ: "Objet : Déviation bus ligne 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Travaux rue du stand", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : travaux rue du Stand.",
    fill: "travaux",
    vfQ: "Info : travaux rue du Stand.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Arrêt provisoire place neuve", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : arrêt provisoire Place Neuve.",
    fill: "arrêt",
    vfQ: "Détail : arrêt provisoire Place Neuve.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Bus de remplacement", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : bus de remplacement.",
    fill: "bus",
    vfQ: "Montant : bus de remplacement.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Info temps réel", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : info temps réel.",
    fill: "info",
    vfQ: "Action : info temps réel.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Alerte Trafic", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Alerte",
    vfQ: "Expéditeur : Alerte Trafic.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_12_TEXT = `De : Navette Entreprise

Objet : Réservation place navette

Bonjour,

Information : lundi matin. Détail : huit heures Parking P3.

Date ou délai : confirmation requise. Montant : cinquante places.

Action : badge entreprise. Contact : information.

Merci de votre compréhension.

Cordialement,

Navette`;

const E9_2_CE_EMAIL_12_POOL = buildExpressPool("e9-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Réservation place navette", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation place navette.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Lundi matin", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : lundi matin.",
    fill: "lundi",
    vfQ: "Info : lundi matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Huit heures parking p3", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : huit heures Parking P3.",
    fill: "huit",
    vfQ: "Détail : huit heures Parking P3.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Cinquante places", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : cinquante places.",
    fill: "cinquante",
    vfQ: "Montant : cinquante places.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Badge entreprise", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : badge entreprise.",
    fill: "badge",
    vfQ: "Action : badge entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Navette Entreprise", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Navette",
    vfQ: "Expéditeur : Navette Entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_13_TEXT = `De : Location Van

Objet : Confirmation location

Bonjour,

Information : samedi-dimanche. Détail : quatre-vingt-dix-neuf francs.

Date ou délai : caution cinq cents francs. Montant : permis B.

Action : carburant plein. Contact : information.

Merci de votre compréhension.

Cordialement,

Location`;

const E9_2_CE_EMAIL_13_POOL = buildExpressPool("e9-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Confirmation location", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Confirmation",
    vfQ: "Objet : Confirmation location.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Samedi-dimanche", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : samedi-dimanche.",
    fill: "samedi-dimanche",
    vfQ: "Info : samedi-dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Quatre-vingt-dix-neuf francs", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : quatre-vingt-dix-neuf francs.",
    fill: "quatre-vingt-dix-neuf",
    vfQ: "Détail : quatre-vingt-dix-neuf francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Permis b", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : permis B.",
    fill: "permis",
    vfQ: "Montant : permis B.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Carburant plein", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : carburant plein.",
    fill: "carburant",
    vfQ: "Action : carburant plein.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Location Van", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Location",
    vfQ: "Expéditeur : Location Van.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_14_TEXT = `De : Lime Support

Objet : Fin de course signalée

Bonjour,

Information : durée douze minutes. Détail : coût cinq francs cinquante.

Date ou délai : photo stationnement. Montant : facture en pièce jointe.

Action : signalement possible. Contact : information.

Merci de votre compréhension.

Cordialement,

Lime`;

const E9_2_CE_EMAIL_14_POOL = buildExpressPool("e9-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Fin de course signalée", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fin",
    vfQ: "Objet : Fin de course signalée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Durée douze minutes", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : durée douze minutes.",
    fill: "durée",
    vfQ: "Info : durée douze minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Coût cinq francs cinquante", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : coût cinq francs cinquante.",
    fill: "coût",
    vfQ: "Détail : coût cinq francs cinquante.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Facture en pièce jointe", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : facture en pièce jointe.",
    fill: "facture",
    vfQ: "Montant : facture en pièce jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Signalement possible", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : signalement possible.",
    fill: "signalement",
    vfQ: "Action : signalement possible.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Lime Support", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Lime",
    vfQ: "Expéditeur : Lime Support.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_15_TEXT = `De : Train Nuit

Objet : Billet couchette Paris

Bonjour,

Information : compartiment quatre places. Détail : quatre-vingt-neuf euros.

Date ou délai : départ vingt-et-une heures. Montant : petit-déjeuner option.

Action : annulation payante. Contact : information.

Merci de votre compréhension.

Cordialement,

Train`;

const E9_2_CE_EMAIL_15_POOL = buildExpressPool("e9-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Billet couchette Paris", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Billet",
    vfQ: "Objet : Billet couchette Paris.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Compartiment quatre places", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : compartiment quatre places.",
    fill: "compartiment",
    vfQ: "Info : compartiment quatre places.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Quatre-vingt-neuf euros", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : quatre-vingt-neuf euros.",
    fill: "quatre-vingt-neuf",
    vfQ: "Détail : quatre-vingt-neuf euros.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Petit-déjeuner option", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : petit-déjeuner option.",
    fill: "petit-déjeuner",
    vfQ: "Montant : petit-déjeuner option.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Annulation payante", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : annulation payante.",
    fill: "annulation",
    vfQ: "Action : annulation payante.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Train Nuit", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Train",
    vfQ: "Expéditeur : Train Nuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_16_TEXT = `De : Autopartage

Objet : Place libérée

Bonjour,

Information : quartier Pâquis. Détail : disponible immédiatement.

Date ou délai : réservation une heure. Montant : véhicule compact.

Action : nettoyage signalé. Contact : information.

Merci de votre compréhension.

Cordialement,

Autopartage`;

const E9_2_CE_EMAIL_16_POOL = buildExpressPool("e9-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Place libérée", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Place",
    vfQ: "Objet : Place libérée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Quartier pâquis", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : quartier Pâquis.",
    fill: "quartier",
    vfQ: "Info : quartier Pâquis.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Disponible immédiatement", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : disponible immédiatement.",
    fill: "disponible",
    vfQ: "Détail : disponible immédiatement.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Véhicule compact", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : véhicule compact.",
    fill: "véhicule",
    vfQ: "Montant : véhicule compact.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Nettoyage signalé", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : nettoyage signalé.",
    fill: "nettoyage",
    vfQ: "Action : nettoyage signalé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Autopartage", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Autopartage",
    vfQ: "Expéditeur : Autopartage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_17_TEXT = `De : Info Mairie

Objet : Changement sens rue

Bonjour,

Information : rue du Rhône. Détail : trois semaines.

Date ou délai : trottoir alterné. Montant : horaires travaux.

Action : accessibilité maintenue. Contact : information.

Merci de votre compréhension.

Cordialement,

Info`;

const E9_2_CE_EMAIL_17_POOL = buildExpressPool("e9-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Changement sens rue", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Changement",
    vfQ: "Objet : Changement sens rue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Rue du rhône", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : rue du Rhône.",
    fill: "rue",
    vfQ: "Info : rue du Rhône.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Trois semaines", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : trois semaines.",
    fill: "trois",
    vfQ: "Détail : trois semaines.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Horaires travaux", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : horaires travaux.",
    fill: "horaires",
    vfQ: "Montant : horaires travaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Accessibilité maintenue", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : accessibilité maintenue.",
    fill: "accessibilité",
    vfQ: "Action : accessibilité maintenue.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Info Mairie", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Info",
    vfQ: "Expéditeur : Info Mairie.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_18_TEXT = `De : CFF Réclamation

Objet : Remboursement accepté

Bonjour,

Information : retard IC 5. Détail : quinze francs.

Date ou délai : crédit sous sept jours. Montant : numéro dossier 8821.

Action : excuses. Contact : information.

Merci de votre compréhension.

Cordialement,

CFF`;

const E9_2_CE_EMAIL_18_POOL = buildExpressPool("e9-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Remboursement accepté", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Remboursement",
    vfQ: "Objet : Remboursement accepté.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Retard ic 5", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : retard IC 5.",
    fill: "retard",
    vfQ: "Info : retard IC 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Quinze francs", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : quinze francs.",
    fill: "quinze",
    vfQ: "Détail : quinze francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Numéro dossier 8821", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : numéro dossier 8821.",
    fill: "numéro",
    vfQ: "Montant : numéro dossier 8821.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Excuses", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : excuses.",
    fill: "excuses",
    vfQ: "Action : excuses.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["CFF Réclamation", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "CFF",
    vfQ: "Expéditeur : CFF Réclamation.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_19_TEXT = `De : EasyJet Retard

Objet : Vol retardé deux heures

Bonjour,

Information : nouveau départ seize heures. Détail : bon repas quinze euros.

Date ou délai : compensation possible. Montant : suivi en ligne.

Action : assistance aéroport. Contact : information.

Merci de votre compréhension.

Cordialement,

EasyJet`;

const E9_2_CE_EMAIL_19_POOL = buildExpressPool("e9-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Vol retardé deux heures", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Vol",
    vfQ: "Objet : Vol retardé deux heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Nouveau départ seize heures", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : nouveau départ seize heures.",
    fill: "nouveau",
    vfQ: "Info : nouveau départ seize heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Bon repas quinze euros", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : bon repas quinze euros.",
    fill: "bon",
    vfQ: "Détail : bon repas quinze euros.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Suivi en ligne", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : suivi en ligne.",
    fill: "suivi",
    vfQ: "Montant : suivi en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Assistance aéroport", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : assistance aéroport.",
    fill: "assistance",
    vfQ: "Action : assistance aéroport.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["EasyJet Retard", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "EasyJet",
    vfQ: "Expéditeur : EasyJet Retard.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_2_CE_EMAIL_20_TEXT = `De : Mobility Facture

Objet : Facture mois d'avril

Bonjour,

Information : trois locations. Détail : quatre-vingt-sept francs.

Date ou délai : détail en pièce jointe. Montant : prélèvement automatique.

Action : service client. Contact : information.

Merci de votre compréhension.

Cordialement,

Mobility`;

const E9_2_CE_EMAIL_20_POOL = buildExpressPool("e9-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel est l'objet ?",
    text: ["Facture mois d'avril", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Facture",
    vfQ: "Objet : Facture mois d'avril.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quelle information principale ?",
    text: ["Trois locations", "Rien", "Un chat"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Information : trois locations.",
    fill: "trois",
    vfQ: "Info : trois locations.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel détail ?",
    text: ["Quatre-vingt-sept francs", "Aucun", "Un secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Détail : quatre-vingt-sept francs.",
    fill: "quatre-vingt-sept",
    vfQ: "Détail : quatre-vingt-sept francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel montant ?",
    text: ["Prélèvement automatique", "Mille euros", "Gratuit"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Montant : prélèvement automatique.",
    fill: "prélèvement",
    vfQ: "Montant : prélèvement automatique.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle action ?",
    text: ["Service client", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : service client.",
    fill: "service",
    vfQ: "Action : service client.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Qui écrit ?",
    text: ["Mobility Facture", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Mobility",
    vfQ: "Expéditeur : Mobility Facture.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Quel contact ?",
    text: ["Information", "Personne", "L'étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
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

const E9_3_CE_EMAIL_TEXT = `De : Régie du Lac

Objet : Candidature reçue

Bonjour,

Concernant appartement trois pièces : dossier complet.

Délai : réponse sous dix jours. Action : visite possible.

Contact : Agence du Parc. Merci.

Cordialement,

Régie`;

const E9_3_CE_EMAIL_POOL = buildExpressPool("e9-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Candidature reçue", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Candidature",
    vfQ: "Objet : Candidature reçue.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Appartement trois pièces", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant appartement trois pièces.",
    fill: "appartement",
    vfQ: "Sujet : appartement trois pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Dossier complet", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dossier complet.",
    fill: "dossier",
    vfQ: "Info : dossier complet.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Réponse sous dix jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : réponse sous dix jours.",
    fill: "réponse",
    vfQ: "Délai : réponse sous dix jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Visite possible", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : visite possible.",
    fill: "visite",
    vfQ: "Action : visite possible.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Régie du Lac", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "Expéditeur : Régie du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Agence du parc", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : Agence du Parc.",
    fill: "Agence",
    vfQ: "Contact : Agence du Parc.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_2_TEXT = `De : Propriétaire M. Dubois

Objet : Confirmation visite

Bonjour,

Concernant samedi quatorze heures : rue des Alpes 12.

Délai : apporter pièce identité. Action : durée trente minutes.

Contact : information. Merci.

Cordialement,

Propriétaire`;

const E9_3_CE_EMAIL_2_POOL = buildExpressPool("e9-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Confirmation visite", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Confirmation",
    vfQ: "Objet : Confirmation visite.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Samedi quatorze heures", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant samedi quatorze heures.",
    fill: "samedi",
    vfQ: "Sujet : samedi quatorze heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Rue des alpes 12", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "rue des Alpes 12.",
    fill: "rue",
    vfQ: "Info : rue des Alpes 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Apporter pièce identité", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : apporter pièce identité.",
    fill: "apporter",
    vfQ: "Délai : apporter pièce identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Durée trente minutes", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : durée trente minutes.",
    fill: "durée",
    vfQ: "Action : durée trente minutes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Propriétaire M. Dubois", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Propriétaire",
    vfQ: "Expéditeur : Propriétaire M. Dubois.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_3_TEXT = `De : Coloc Étudiants

Objet : Chambre disponible

Bonjour,

Concernant septembre : six cent cinquante francs.

Délai : cuisine partagée. Action : dossier demandé.

Contact : information. Merci.

Cordialement,

Coloc`;

const E9_3_CE_EMAIL_3_POOL = buildExpressPool("e9-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Chambre disponible", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Chambre",
    vfQ: "Objet : Chambre disponible.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Septembre", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant septembre.",
    fill: "septembre",
    vfQ: "Sujet : septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Six cent cinquante francs", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "six cent cinquante francs.",
    fill: "six",
    vfQ: "Info : six cent cinquante francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Cuisine partagée", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : cuisine partagée.",
    fill: "cuisine",
    vfQ: "Délai : cuisine partagée.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Dossier demandé", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : dossier demandé.",
    fill: "dossier",
    vfQ: "Action : dossier demandé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Coloc Étudiants", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Coloc",
    vfQ: "Expéditeur : Coloc Étudiants.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_4_TEXT = `De : Assurance Habitation

Objet : Attestation envoyée

Bonjour,

Concernant responsabilité civile : quarante-cinq francs.

Délai : validité un an. Action : PDF joint.

Contact : information. Merci.

Cordialement,

Assurance`;

const E9_3_CE_EMAIL_4_POOL = buildExpressPool("e9-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Attestation envoyée", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Attestation",
    vfQ: "Objet : Attestation envoyée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Responsabilité civile", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant responsabilité civile.",
    fill: "responsabilité",
    vfQ: "Sujet : responsabilité civile.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Quarante-cinq francs", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "quarante-cinq francs.",
    fill: "quarante-cinq",
    vfQ: "Info : quarante-cinq francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Validité un an", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : validité un an.",
    fill: "validité",
    vfQ: "Délai : validité un an.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Pdf joint", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : PDF joint.",
    fill: "PDF",
    vfQ: "Action : PDF joint.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Assurance Habitation", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Assurance",
    vfQ: "Expéditeur : Assurance Habitation.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_5_TEXT = `De : Régie Centrale

Objet : État des lieux entrée

Bonjour,

Concernant premier octobre dix heures : présence obligatoire.

Délai : clés remises. Action : procès-verbal.

Contact : information. Merci.

Cordialement,

Régie`;

const E9_3_CE_EMAIL_5_POOL = buildExpressPool("e9-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["État des lieux entrée", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "État",
    vfQ: "Objet : État des lieux entrée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Premier octobre dix heures", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant premier octobre dix heures.",
    fill: "premier",
    vfQ: "Sujet : premier octobre dix heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Présence obligatoire", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "présence obligatoire.",
    fill: "présence",
    vfQ: "Info : présence obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Clés remises", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : clés remises.",
    fill: "clés",
    vfQ: "Délai : clés remises.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Procès-verbal", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : procès-verbal.",
    fill: "procès-verbal",
    vfQ: "Action : procès-verbal.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Régie Centrale", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Régie",
    vfQ: "Expéditeur : Régie Centrale.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_6_TEXT = `De : Service Logement

Objet : Subvention accordée

Bonjour,

Concernant complément loyer : cent quatre-vingts francs.

Délai : versement mensuel. Action : renouvellement annuel.

Contact : information. Merci.

Cordialement,

Service`;

const E9_3_CE_EMAIL_6_POOL = buildExpressPool("e9-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Subvention accordée", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Subvention",
    vfQ: "Objet : Subvention accordée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Complément loyer", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant complément loyer.",
    fill: "complément",
    vfQ: "Sujet : complément loyer.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Cent quatre-vingts francs", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "cent quatre-vingts francs.",
    fill: "cent",
    vfQ: "Info : cent quatre-vingts francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Versement mensuel", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : versement mensuel.",
    fill: "versement",
    vfQ: "Délai : versement mensuel.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Renouvellement annuel", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : renouvellement annuel.",
    fill: "renouvellement",
    vfQ: "Action : renouvellement annuel.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service Logement", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service Logement.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_7_TEXT = `De : Agence ImmoPlus

Objet : Bail à signer

Bonjour,

Concernant studio meublé : loyer mille cent francs.

Délai : caution trois mois. Action : rendez-vous mercredi.

Contact : information. Merci.

Cordialement,

Agence`;

const E9_3_CE_EMAIL_7_POOL = buildExpressPool("e9-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Bail à signer", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Bail",
    vfQ: "Objet : Bail à signer.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Studio meublé", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant studio meublé.",
    fill: "studio",
    vfQ: "Sujet : studio meublé.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Loyer mille cent francs", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "loyer mille cent francs.",
    fill: "loyer",
    vfQ: "Info : loyer mille cent francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Caution trois mois", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : caution trois mois.",
    fill: "caution",
    vfQ: "Délai : caution trois mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Rendez-vous mercredi", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : rendez-vous mercredi.",
    fill: "rendez-vous",
    vfQ: "Action : rendez-vous mercredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Agence ImmoPlus", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Agence",
    vfQ: "Expéditeur : Agence ImmoPlus.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_8_TEXT = `De : Copropriété Les Tilleuls

Objet : Travaux façade

Bonjour,

Concernant juin à septembre : nuisances possibles.

Délai : ascenseur maintenu. Action : réunion info.

Contact : information. Merci.

Cordialement,

Copropriété`;

const E9_3_CE_EMAIL_8_POOL = buildExpressPool("e9-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Travaux façade", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Travaux",
    vfQ: "Objet : Travaux façade.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Juin à septembre", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant juin à septembre.",
    fill: "juin",
    vfQ: "Sujet : juin à septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Nuisances possibles", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "nuisances possibles.",
    fill: "nuisances",
    vfQ: "Info : nuisances possibles.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Ascenseur maintenu", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : ascenseur maintenu.",
    fill: "ascenseur",
    vfQ: "Délai : ascenseur maintenu.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Réunion info", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : réunion info.",
    fill: "réunion",
    vfQ: "Action : réunion info.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Copropriété Les Tilleuls", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Copropriété",
    vfQ: "Expéditeur : Copropriété Les Tilleuls.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_9_TEXT = `De : Hôtel Résidence

Objet : Confirmation séjour

Bonjour,

Concernant sept nuits minimum : quatre-vingt-dix francs par nuit.

Délai : studio équipé. Action : ménage inclus.

Contact : information. Merci.

Cordialement,

Hôtel`;

const E9_3_CE_EMAIL_9_POOL = buildExpressPool("e9-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Confirmation séjour", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Confirmation",
    vfQ: "Objet : Confirmation séjour.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sept nuits minimum", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sept nuits minimum.",
    fill: "sept",
    vfQ: "Sujet : sept nuits minimum.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Quatre-vingt-dix francs par nuit", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "quatre-vingt-dix francs par nuit.",
    fill: "quatre-vingt-dix",
    vfQ: "Info : quatre-vingt-dix francs par nuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Studio équipé", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : studio équipé.",
    fill: "studio",
    vfQ: "Délai : studio équipé.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Ménage inclus", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : ménage inclus.",
    fill: "ménage",
    vfQ: "Action : ménage inclus.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Hôtel Résidence", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Hôtel",
    vfQ: "Expéditeur : Hôtel Résidence.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_10_TEXT = `De : Cautionnement.ch

Objet : Garantie acceptée

Bonjour,

Concernant caution solidaire : dossier validé.

Délai : attestation envoyée. Action : propriétaire informé.

Contact : information. Merci.

Cordialement,

Cautionnement.ch`;

const E9_3_CE_EMAIL_10_POOL = buildExpressPool("e9-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Garantie acceptée", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Garantie",
    vfQ: "Objet : Garantie acceptée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Caution solidaire", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant caution solidaire.",
    fill: "caution",
    vfQ: "Sujet : caution solidaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Dossier validé", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dossier validé.",
    fill: "dossier",
    vfQ: "Info : dossier validé.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Attestation envoyée", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : attestation envoyée.",
    fill: "attestation",
    vfQ: "Délai : attestation envoyée.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Propriétaire informé", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : propriétaire informé.",
    fill: "propriétaire",
    vfQ: "Action : propriétaire informé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Cautionnement.ch", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Cautionnement.ch",
    vfQ: "Expéditeur : Cautionnement.ch.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_11_TEXT = `De : Déménagement Express

Objet : Réservation ascenseur

Bonjour,

Concernant samedi huit heures : caution deux cents francs.

Délai : protection sols. Action : gardien prévenu.

Contact : information. Merci.

Cordialement,

Déménagement`;

const E9_3_CE_EMAIL_11_POOL = buildExpressPool("e9-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Réservation ascenseur", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réservation",
    vfQ: "Objet : Réservation ascenseur.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Samedi huit heures", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant samedi huit heures.",
    fill: "samedi",
    vfQ: "Sujet : samedi huit heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Caution deux cents francs", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "caution deux cents francs.",
    fill: "caution",
    vfQ: "Info : caution deux cents francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Protection sols", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : protection sols.",
    fill: "protection",
    vfQ: "Délai : protection sols.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Gardien prévenu", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : gardien prévenu.",
    fill: "gardien",
    vfQ: "Action : gardien prévenu.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Déménagement Express", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Déménagement",
    vfQ: "Expéditeur : Déménagement Express.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_12_TEXT = `De : Diagnostic Pro

Objet : Rapport énergétique

Bonjour,

Concernant classe C : travaux recommandés.

Délai : validité dix ans. Action : PDF joint.

Contact : information. Merci.

Cordialement,

Diagnostic`;

const E9_3_CE_EMAIL_12_POOL = buildExpressPool("e9-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Rapport énergétique", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Rapport",
    vfQ: "Objet : Rapport énergétique.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Classe c", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant classe C.",
    fill: "classe",
    vfQ: "Sujet : classe C.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Travaux recommandés", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "travaux recommandés.",
    fill: "travaux",
    vfQ: "Info : travaux recommandés.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Validité dix ans", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : validité dix ans.",
    fill: "validité",
    vfQ: "Délai : validité dix ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Pdf joint", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : PDF joint.",
    fill: "PDF",
    vfQ: "Action : PDF joint.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Diagnostic Pro", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Diagnostic",
    vfQ: "Expéditeur : Diagnostic Pro.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_13_TEXT = `De : Airbnb Support

Objet : Règlement quartier

Bonjour,

Concernant locations courtes : autorisation requise.

Délai : nuisances interdites. Action : amende possible.

Contact : information. Merci.

Cordialement,

Airbnb`;

const E9_3_CE_EMAIL_13_POOL = buildExpressPool("e9-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Règlement quartier", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Règlement",
    vfQ: "Objet : Règlement quartier.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Locations courtes", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant locations courtes.",
    fill: "locations",
    vfQ: "Sujet : locations courtes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Autorisation requise", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "autorisation requise.",
    fill: "autorisation",
    vfQ: "Info : autorisation requise.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Nuisances interdites", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : nuisances interdites.",
    fill: "nuisances",
    vfQ: "Délai : nuisances interdites.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Amende possible", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : amende possible.",
    fill: "amende",
    vfQ: "Action : amende possible.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Airbnb Support", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Airbnb",
    vfQ: "Expéditeur : Airbnb Support.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_14_TEXT = `De : Garage Sécurisé

Objet : Location confirmée

Bonjour,

Concernant quinze mètres carrés : cent quatre-vingts francs.

Délai : badge accès. Action : bail un an.

Contact : information. Merci.

Cordialement,

Garage`;

const E9_3_CE_EMAIL_14_POOL = buildExpressPool("e9-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Location confirmée", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Location",
    vfQ: "Objet : Location confirmée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Quinze mètres carrés", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant quinze mètres carrés.",
    fill: "quinze",
    vfQ: "Sujet : quinze mètres carrés.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Cent quatre-vingts francs", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "cent quatre-vingts francs.",
    fill: "cent",
    vfQ: "Info : cent quatre-vingts francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Badge accès", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : badge accès.",
    fill: "badge",
    vfQ: "Délai : badge accès.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Bail un an", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : bail un an.",
    fill: "bail",
    vfQ: "Action : bail un an.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Garage Sécurisé", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Garage",
    vfQ: "Expéditeur : Garage Sécurisé.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_15_TEXT = `De : Quittance Online

Objet : Quittance mars

Bonjour,

Concernant loyer payé : preuve envoyée.

Délai : format PDF. Action : archivage.

Contact : information. Merci.

Cordialement,

Quittance`;

const E9_3_CE_EMAIL_15_POOL = buildExpressPool("e9-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Quittance mars", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Quittance",
    vfQ: "Objet : Quittance mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Loyer payé", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant loyer payé.",
    fill: "loyer",
    vfQ: "Sujet : loyer payé.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Preuve envoyée", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "preuve envoyée.",
    fill: "preuve",
    vfQ: "Info : preuve envoyée.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Format pdf", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : format PDF.",
    fill: "format",
    vfQ: "Délai : format PDF.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Archivage", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : archivage.",
    fill: "archivage",
    vfQ: "Action : archivage.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Quittance Online", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Quittance",
    vfQ: "Expéditeur : Quittance Online.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_16_TEXT = `De : Résiliation Service

Objet : Préavis enregistré

Bonjour,

Concernant trois mois : fin juin.

Délai : état des lieux prévu. Action : caution restituée.

Contact : information. Merci.

Cordialement,

Résiliation`;

const E9_3_CE_EMAIL_16_POOL = buildExpressPool("e9-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Préavis enregistré", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Préavis",
    vfQ: "Objet : Préavis enregistré.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Trois mois", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant trois mois.",
    fill: "trois",
    vfQ: "Sujet : trois mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Fin juin", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "fin juin.",
    fill: "fin",
    vfQ: "Info : fin juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["État des lieux prévu", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : état des lieux prévu.",
    fill: "état",
    vfQ: "Délai : état des lieux prévu.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Caution restituée", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : caution restituée.",
    fill: "caution",
    vfQ: "Action : caution restituée.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Résiliation Service", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Résiliation",
    vfQ: "Expéditeur : Résiliation Service.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_17_TEXT = `De : Visite Virtuelle

Objet : Lien vidéo appartement

Bonjour,

Concernant trois pièces : candidature en ligne.

Délai : réponse une semaine. Action : priorité premier arrivé.

Contact : information. Merci.

Cordialement,

Visite`;

const E9_3_CE_EMAIL_17_POOL = buildExpressPool("e9-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Lien vidéo appartement", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Lien",
    vfQ: "Objet : Lien vidéo appartement.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Trois pièces", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant trois pièces.",
    fill: "trois",
    vfQ: "Sujet : trois pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Candidature en ligne", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "candidature en ligne.",
    fill: "candidature",
    vfQ: "Info : candidature en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Réponse une semaine", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : réponse une semaine.",
    fill: "réponse",
    vfQ: "Délai : réponse une semaine.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Priorité premier arrivé", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : priorité premier arrivé.",
    fill: "priorité",
    vfQ: "Action : priorité premier arrivé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Visite Virtuelle", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Visite",
    vfQ: "Expéditeur : Visite Virtuelle.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_18_TEXT = `De : Logement Social

Objet : Dossier reçu

Bonjour,

Concernant candidature enregistrée : délai six mois.

Délai : priorité familles. Action : visite si attribution.

Contact : information. Merci.

Cordialement,

Logement`;

const E9_3_CE_EMAIL_18_POOL = buildExpressPool("e9-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Dossier reçu", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Dossier",
    vfQ: "Objet : Dossier reçu.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Candidature enregistrée", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant candidature enregistrée.",
    fill: "candidature",
    vfQ: "Sujet : candidature enregistrée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Délai six mois", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "délai six mois.",
    fill: "délai",
    vfQ: "Info : délai six mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Priorité familles", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : priorité familles.",
    fill: "priorité",
    vfQ: "Délai : priorité familles.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Visite si attribution", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : visite si attribution.",
    fill: "visite",
    vfQ: "Action : visite si attribution.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Logement Social", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Logement",
    vfQ: "Expéditeur : Logement Social.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_19_TEXT = `De : Sous-location Été

Objet : Confirmation juillet-août

Bonjour,

Concernant mille cinq cents par mois : meublé.

Délai : contrat écrit. Action : proche lac.

Contact : information. Merci.

Cordialement,

Sous-location`;

const E9_3_CE_EMAIL_19_POOL = buildExpressPool("e9-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Confirmation juillet-août", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Confirmation",
    vfQ: "Objet : Confirmation juillet-août.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Mille cinq cents par mois", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant mille cinq cents par mois.",
    fill: "mille",
    vfQ: "Sujet : mille cinq cents par mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Meublé", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "meublé.",
    fill: "meublé",
    vfQ: "Info : meublé.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Contrat écrit", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : contrat écrit.",
    fill: "contrat",
    vfQ: "Délai : contrat écrit.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Proche lac", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : proche lac.",
    fill: "proche",
    vfQ: "Action : proche lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Sous-location Été", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Sous-location",
    vfQ: "Expéditeur : Sous-location Été.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_3_CE_EMAIL_20_TEXT = `De : Charges Régie

Objet : Régularisation annuelle

Bonjour,

Concernant provision deux cent vingt francs : remboursement quarante francs.

Délai : compteur individuel. Action : facture jointe.

Contact : information. Merci.

Cordialement,

Charges`;

const E9_3_CE_EMAIL_20_POOL = buildExpressPool("e9-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Régularisation annuelle", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Régularisation",
    vfQ: "Objet : Régularisation annuelle.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Provision deux cent vingt francs", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant provision deux cent vingt francs.",
    fill: "provision",
    vfQ: "Sujet : provision deux cent vingt francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Remboursement quarante francs", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "remboursement quarante francs.",
    fill: "remboursement",
    vfQ: "Info : remboursement quarante francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Compteur individuel", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : compteur individuel.",
    fill: "compteur",
    vfQ: "Délai : compteur individuel.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Facture jointe", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : facture jointe.",
    fill: "facture",
    vfQ: "Action : facture jointe.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Charges Régie", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Charges",
    vfQ: "Expéditeur : Charges Régie.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
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

const E9_4_CE_EMAIL_TEXT = `De : Préfecture

Objet : Convocation renouvellement

Bonjour,

Concernant titre de séjour : mercredi quatorze heures.

Délai : dossier complet. Action : bureau 204.

Contact : information. Merci.

Cordialement,

Préfecture`;

const E9_4_CE_EMAIL_POOL = buildExpressPool("e9-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Convocation renouvellement", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Convocation",
    vfQ: "Objet : Convocation renouvellement.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Titre de séjour", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant titre de séjour.",
    fill: "titre",
    vfQ: "Sujet : titre de séjour.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Mercredi quatorze heures", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "mercredi quatorze heures.",
    fill: "mercredi",
    vfQ: "Info : mercredi quatorze heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Dossier complet", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : dossier complet.",
    fill: "dossier",
    vfQ: "Délai : dossier complet.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Bureau 204", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : bureau 204.",
    fill: "bureau",
    vfQ: "Action : bureau 204.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Préfecture", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Préfecture",
    vfQ: "Expéditeur : Préfecture.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_2_TEXT = `De : Mairie de Sion

Objet : Inscription électorale

Bonjour,

Concernant liste électorale : carte électorale.

Délai : avant trente et un mars. Action : bureau vote.

Contact : information. Merci.

Cordialement,

Mairie`;

const E9_4_CE_EMAIL_2_POOL = buildExpressPool("e9-4-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Inscription électorale", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Inscription",
    vfQ: "Objet : Inscription électorale.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Liste électorale", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant liste électorale.",
    fill: "liste",
    vfQ: "Sujet : liste électorale.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Carte électorale", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "carte électorale.",
    fill: "carte",
    vfQ: "Info : carte électorale.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Avant trente et un mars", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : avant trente et un mars.",
    fill: "avant",
    vfQ: "Délai : avant trente et un mars.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Bureau vote", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : bureau vote.",
    fill: "bureau",
    vfQ: "Action : bureau vote.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Mairie de Sion", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Mairie",
    vfQ: "Expéditeur : Mairie de Sion.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_3_TEXT = `De : CAF

Objet : Dossier aide logement

Bonjour,

Concernant traitement six semaines : versement mensuel.

Délai : documents reçus. Action : espace en ligne.

Contact : information. Merci.

Cordialement,

CAF`;

const E9_4_CE_EMAIL_3_POOL = buildExpressPool("e9-4-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Dossier aide logement", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Dossier",
    vfQ: "Objet : Dossier aide logement.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Traitement six semaines", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant traitement six semaines.",
    fill: "traitement",
    vfQ: "Sujet : traitement six semaines.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Versement mensuel", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "versement mensuel.",
    fill: "versement",
    vfQ: "Info : versement mensuel.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Documents reçus", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : documents reçus.",
    fill: "documents",
    vfQ: "Délai : documents reçus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Espace en ligne", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : espace en ligne.",
    fill: "espace",
    vfQ: "Action : espace en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["CAF", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "CAF",
    vfQ: "Expéditeur : CAF.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_4_TEXT = `De : Impôts

Objet : Avis imposition disponible

Bonjour,

Concernant déclaration validée : remboursement deux cents euros.

Délai : virement sous quinze jours. Action : espace impots.gouv.

Contact : information. Merci.

Cordialement,

Impôts`;

const E9_4_CE_EMAIL_4_POOL = buildExpressPool("e9-4-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Avis imposition disponible", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Avis",
    vfQ: "Objet : Avis imposition disponible.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Déclaration validée", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant déclaration validée.",
    fill: "déclaration",
    vfQ: "Sujet : déclaration validée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Remboursement deux cents euros", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "remboursement deux cents euros.",
    fill: "remboursement",
    vfQ: "Info : remboursement deux cents euros.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Virement sous quinze jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : virement sous quinze jours.",
    fill: "virement",
    vfQ: "Délai : virement sous quinze jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Espace impots.gouv", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : espace impots.gouv.",
    fill: "espace",
    vfQ: "Action : espace impots.gouv.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Impôts", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Impôts",
    vfQ: "Expéditeur : Impôts.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_5_TEXT = `De : Pôle Emploi

Objet : Rappel actualisation

Bonjour,

Concernant mensuelle obligatoire : avant fin du mois.

Délai : Internet ou téléphone. Action : indemnisation.

Contact : information. Merci.

Cordialement,

Pôle`;

const E9_4_CE_EMAIL_5_POOL = buildExpressPool("e9-4-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Rappel actualisation", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Rappel",
    vfQ: "Objet : Rappel actualisation.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Mensuelle obligatoire", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant mensuelle obligatoire.",
    fill: "mensuelle",
    vfQ: "Sujet : mensuelle obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Avant fin du mois", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "avant fin du mois.",
    fill: "avant",
    vfQ: "Info : avant fin du mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Internet ou téléphone", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : Internet ou téléphone.",
    fill: "Internet",
    vfQ: "Délai : Internet ou téléphone.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Indemnisation", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : indemnisation.",
    fill: "indemnisation",
    vfQ: "Action : indemnisation.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Pôle Emploi", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Pôle",
    vfQ: "Expéditeur : Pôle Emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_6_TEXT = `De : Ameli

Objet : Carte Vitale mise à jour

Bonjour,

Concernant nouvelle adresse : délai quinze jours.

Délai : envoi automatique. Action : espace ameli.

Contact : information. Merci.

Cordialement,

Ameli`;

const E9_4_CE_EMAIL_6_POOL = buildExpressPool("e9-4-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Carte Vitale mise à jour", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Carte",
    vfQ: "Objet : Carte Vitale mise à jour.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Nouvelle adresse", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant nouvelle adresse.",
    fill: "nouvelle",
    vfQ: "Sujet : nouvelle adresse.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Délai quinze jours", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "délai quinze jours.",
    fill: "délai",
    vfQ: "Info : délai quinze jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Envoi automatique", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : envoi automatique.",
    fill: "envoi",
    vfQ: "Délai : envoi automatique.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Espace ameli", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : espace ameli.",
    fill: "espace",
    vfQ: "Action : espace ameli.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Ameli", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Ameli",
    vfQ: "Expéditeur : Ameli.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_7_TEXT = `De : Consulat

Objet : Passeport prêt

Bonjour,

Concernant retrait sur place : lundi à vendredi.

Délai : pièce identité. Action : délai six semaines.

Contact : information. Merci.

Cordialement,

Consulat`;

const E9_4_CE_EMAIL_7_POOL = buildExpressPool("e9-4-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Passeport prêt", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Passeport",
    vfQ: "Objet : Passeport prêt.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Retrait sur place", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant retrait sur place.",
    fill: "retrait",
    vfQ: "Sujet : retrait sur place.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Lundi à vendredi", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "lundi à vendredi.",
    fill: "lundi",
    vfQ: "Info : lundi à vendredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Pièce identité", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : pièce identité.",
    fill: "pièce",
    vfQ: "Délai : pièce identité.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Délai six semaines", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : délai six semaines.",
    fill: "délai",
    vfQ: "Action : délai six semaines.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Consulat", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Consulat",
    vfQ: "Expéditeur : Consulat.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_8_TEXT = `De : La Poste

Objet : Redirection courrier activée

Bonjour,

Concernant six mois : nouvelle adresse.

Délai : confirmation. Action : gratuit.

Contact : information. Merci.

Cordialement,

La`;

const E9_4_CE_EMAIL_8_POOL = buildExpressPool("e9-4-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Redirection courrier activée", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Redirection",
    vfQ: "Objet : Redirection courrier activée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Six mois", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant six mois.",
    fill: "six",
    vfQ: "Sujet : six mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Nouvelle adresse", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "nouvelle adresse.",
    fill: "nouvelle",
    vfQ: "Info : nouvelle adresse.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Confirmation", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : confirmation.",
    fill: "confirmation",
    vfQ: "Délai : confirmation.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Gratuit", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : gratuit.",
    fill: "gratuit",
    vfQ: "Action : gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["La Poste", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "La",
    vfQ: "Expéditeur : La Poste.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_9_TEXT = `De : Banque Populaire

Objet : Compte ouvert

Bonjour,

Concernant carte sous dix jours : application mobile.

Délai : RIB joint. Action : rendez-vous conseiller.

Contact : information. Merci.

Cordialement,

Banque`;

const E9_4_CE_EMAIL_9_POOL = buildExpressPool("e9-4-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Compte ouvert", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Compte",
    vfQ: "Objet : Compte ouvert.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Carte sous dix jours", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant carte sous dix jours.",
    fill: "carte",
    vfQ: "Sujet : carte sous dix jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Application mobile", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "application mobile.",
    fill: "application",
    vfQ: "Info : application mobile.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Rib joint", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : RIB joint.",
    fill: "RIB",
    vfQ: "Délai : RIB joint.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Rendez-vous conseiller", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : rendez-vous conseiller.",
    fill: "rendez-vous",
    vfQ: "Action : rendez-vous conseiller.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Banque Populaire", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Banque",
    vfQ: "Expéditeur : Banque Populaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_10_TEXT = `De : CPAM

Objet : Affiliation confirmée

Bonjour,

Concernant droits ouverts : carte Vitale.

Délai : médecin traitant. Action : remboursements.

Contact : information. Merci.

Cordialement,

CPAM`;

const E9_4_CE_EMAIL_10_POOL = buildExpressPool("e9-4-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Affiliation confirmée", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Affiliation",
    vfQ: "Objet : Affiliation confirmée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Droits ouverts", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant droits ouverts.",
    fill: "droits",
    vfQ: "Sujet : droits ouverts.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Carte vitale", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "carte Vitale.",
    fill: "carte",
    vfQ: "Info : carte Vitale.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Médecin traitant", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : médecin traitant.",
    fill: "médecin",
    vfQ: "Délai : médecin traitant.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Remboursements", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : remboursements.",
    fill: "remboursements",
    vfQ: "Action : remboursements.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["CPAM", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "CPAM",
    vfQ: "Expéditeur : CPAM.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_11_TEXT = `De : Préfecture Permis

Objet : Échange permis accepté

Bonjour,

Concernant retrait dans deux mois : visite médicale validée.

Délai : frais quatre-vingt-six euros. Action : information.

Contact : information. Merci.

Cordialement,

Préfecture`;

const E9_4_CE_EMAIL_11_POOL = buildExpressPool("e9-4-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Échange permis accepté", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Échange",
    vfQ: "Objet : Échange permis accepté.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Retrait dans deux mois", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant retrait dans deux mois.",
    fill: "retrait",
    vfQ: "Sujet : retrait dans deux mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Visite médicale validée", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "visite médicale validée.",
    fill: "visite",
    vfQ: "Info : visite médicale validée.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Frais quatre-vingt-six euros", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : frais quatre-vingt-six euros.",
    fill: "frais",
    vfQ: "Délai : frais quatre-vingt-six euros.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Préfecture Permis", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Préfecture",
    vfQ: "Expéditeur : Préfecture Permis.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_12_TEXT = `De : École Communale

Objet : Inscription confirmée

Bonjour,

Concernant rentrée septembre : affectation école.

Délai : liste fournitures. Action : réunion parents.

Contact : information. Merci.

Cordialement,

École`;

const E9_4_CE_EMAIL_12_POOL = buildExpressPool("e9-4-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Inscription confirmée", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Inscription",
    vfQ: "Objet : Inscription confirmée.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Rentrée septembre", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant rentrée septembre.",
    fill: "rentrée",
    vfQ: "Sujet : rentrée septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Affectation école", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "affectation école.",
    fill: "affectation",
    vfQ: "Info : affectation école.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Liste fournitures", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : liste fournitures.",
    fill: "liste",
    vfQ: "Délai : liste fournitures.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Réunion parents", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : réunion parents.",
    fill: "réunion",
    vfQ: "Action : réunion parents.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["École Communale", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "École",
    vfQ: "Expéditeur : École Communale.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_13_TEXT = `De : CAF Famille

Objet : Allocations accordées

Bonjour,

Concernant versement trimestriel : enfants à charge.

Délai : renouvellement annuel. Action : information.

Contact : information. Merci.

Cordialement,

CAF`;

const E9_4_CE_EMAIL_13_POOL = buildExpressPool("e9-4-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Allocations accordées", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Allocations",
    vfQ: "Objet : Allocations accordées.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Versement trimestriel", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant versement trimestriel.",
    fill: "versement",
    vfQ: "Sujet : versement trimestriel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Enfants à charge", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "enfants à charge.",
    fill: "enfants",
    vfQ: "Info : enfants à charge.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Renouvellement annuel", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : renouvellement annuel.",
    fill: "renouvellement",
    vfQ: "Délai : renouvellement annuel.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["CAF Famille", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "CAF",
    vfQ: "Expéditeur : CAF Famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_14_TEXT = `De : MDPH

Objet : Dossier handicap reçu

Bonjour,

Concernant entretien programmé : délai quatre mois.

Délai : droits possibles. Action : information.

Contact : information. Merci.

Cordialement,

MDPH`;

const E9_4_CE_EMAIL_14_POOL = buildExpressPool("e9-4-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Dossier handicap reçu", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Dossier",
    vfQ: "Objet : Dossier handicap reçu.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Entretien programmé", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant entretien programmé.",
    fill: "entretien",
    vfQ: "Sujet : entretien programmé.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Délai quatre mois", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "délai quatre mois.",
    fill: "délai",
    vfQ: "Info : délai quatre mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Droits possibles", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : droits possibles.",
    fill: "droits",
    vfQ: "Délai : droits possibles.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["MDPH", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "MDPH",
    vfQ: "Expéditeur : MDPH.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_15_TEXT = `De : Service Naturalisation

Objet : Dossier complet

Bonjour,

Concernant test langue programmé : entretien civique.

Délai : délai dix-huit mois. Action : information.

Contact : information. Merci.

Cordialement,

Service`;

const E9_4_CE_EMAIL_15_POOL = buildExpressPool("e9-4-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Dossier complet", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Dossier",
    vfQ: "Objet : Dossier complet.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Test langue programmé", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant test langue programmé.",
    fill: "test",
    vfQ: "Sujet : test langue programmé.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Entretien civique", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "entretien civique.",
    fill: "entretien",
    vfQ: "Info : entretien civique.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai dix-huit mois", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai dix-huit mois.",
    fill: "délai",
    vfQ: "Délai : délai dix-huit mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service Naturalisation", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service Naturalisation.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_16_TEXT = `De : État Civil

Objet : Acte naissance délivré

Bonjour,

Concernant livret famille : gratuit.

Délai : retrait mairie. Action : trois jours délai.

Contact : information. Merci.

Cordialement,

État`;

const E9_4_CE_EMAIL_16_POOL = buildExpressPool("e9-4-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Acte naissance délivré", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Acte",
    vfQ: "Objet : Acte naissance délivré.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Livret famille", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant livret famille.",
    fill: "livret",
    vfQ: "Sujet : livret famille.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Gratuit", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "gratuit.",
    fill: "gratuit",
    vfQ: "Info : gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Retrait mairie", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : retrait mairie.",
    fill: "retrait",
    vfQ: "Délai : retrait mairie.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Trois jours délai", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : trois jours délai.",
    fill: "trois",
    vfQ: "Action : trois jours délai.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["État Civil", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "État",
    vfQ: "Expéditeur : État Civil.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_17_TEXT = `De : Mairie Mariage

Objet : Publication bans

Bonjour,

Concernant cérémonie programmée : dossier validé.

Délai : témoins confirmés. Action : information.

Contact : information. Merci.

Cordialement,

Mairie`;

const E9_4_CE_EMAIL_17_POOL = buildExpressPool("e9-4-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Publication bans", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Publication",
    vfQ: "Objet : Publication bans.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Cérémonie programmée", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant cérémonie programmée.",
    fill: "cérémonie",
    vfQ: "Sujet : cérémonie programmée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Dossier validé", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "dossier validé.",
    fill: "dossier",
    vfQ: "Info : dossier validé.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Témoins confirmés", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : témoins confirmés.",
    fill: "témoins",
    vfQ: "Délai : témoins confirmés.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Mairie Mariage", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Mairie",
    vfQ: "Expéditeur : Mairie Mariage.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_18_TEXT = `De : JDC Service

Objet : Convocation recensement

Bonjour,

Concernant journée défense : formulaire joint.

Délai : obligatoire. Action : information.

Contact : information. Merci.

Cordialement,

JDC`;

const E9_4_CE_EMAIL_18_POOL = buildExpressPool("e9-4-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Convocation recensement", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Convocation",
    vfQ: "Objet : Convocation recensement.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Journée défense", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant journée défense.",
    fill: "journée",
    vfQ: "Sujet : journée défense.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Formulaire joint", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "formulaire joint.",
    fill: "formulaire",
    vfQ: "Info : formulaire joint.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Obligatoire", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : obligatoire.",
    fill: "obligatoire",
    vfQ: "Délai : obligatoire.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["JDC Service", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "JDC",
    vfQ: "Expéditeur : JDC Service.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_19_TEXT = `De : Casier Judiciaire

Objet : Bulletin n°3 disponible

Bonjour,

Concernant PDF sécurisé : téléchargement vingt-quatre heures.

Délai : gratuit. Action : information.

Contact : information. Merci.

Cordialement,

Casier`;

const E9_4_CE_EMAIL_19_POOL = buildExpressPool("e9-4-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Bulletin n°3 disponible", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Bulletin",
    vfQ: "Objet : Bulletin n°3 disponible.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Pdf sécurisé", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant PDF sécurisé.",
    fill: "PDF",
    vfQ: "Sujet : PDF sécurisé.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Téléchargement vingt-quatre heures", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "téléchargement vingt-quatre heures.",
    fill: "téléchargement",
    vfQ: "Info : téléchargement vingt-quatre heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Gratuit", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : gratuit.",
    fill: "gratuit",
    vfQ: "Délai : gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Casier Judiciaire", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Casier",
    vfQ: "Expéditeur : Casier Judiciaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_4_CE_EMAIL_20_TEXT = `De : Hébergement Attestation

Objet : Modèle validé

Bonjour,

Concernant signature hébergeur : validité trois mois.

Délai : démarches possibles. Action : information.

Contact : information. Merci.

Cordialement,

Hébergement`;

const E9_4_CE_EMAIL_20_POOL = buildExpressPool("e9-4-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Modèle validé", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Modèle",
    vfQ: "Objet : Modèle validé.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Signature hébergeur", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant signature hébergeur.",
    fill: "signature",
    vfQ: "Sujet : signature hébergeur.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Validité trois mois", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "validité trois mois.",
    fill: "validité",
    vfQ: "Info : validité trois mois.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Démarches possibles", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : démarches possibles.",
    fill: "démarches",
    vfQ: "Délai : démarches possibles.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Hébergement Attestation", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Hébergement",
    vfQ: "Expéditeur : Hébergement Attestation.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
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

const E9_5_CE_EMAIL_TEXT = `De : La Tribune

Objet : Newsletter municipales

Bonjour,

Concernant élection dimanche : cinq candidats.

Délai : débat jeudi. Action : bureaux ouverts.

Contact : information. Merci.

Cordialement,

La`;

const E9_5_CE_EMAIL_POOL = buildExpressPool("e9-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Newsletter municipales", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Newsletter",
    vfQ: "Objet : Newsletter municipales.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Élection dimanche", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant élection dimanche.",
    fill: "élection",
    vfQ: "Sujet : élection dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Cinq candidats", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "cinq candidats.",
    fill: "cinq",
    vfQ: "Info : cinq candidats.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Débat jeudi", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : débat jeudi.",
    fill: "débat",
    vfQ: "Délai : débat jeudi.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Bureaux ouverts", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : bureaux ouverts.",
    fill: "bureaux",
    vfQ: "Action : bureaux ouverts.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["La Tribune", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "La",
    vfQ: "Expéditeur : La Tribune.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_2_TEXT = `De : Météo Alert

Objet : Vigilance orange

Bonjour,

Concernant orages vendredi : éviter déplacements.

Délai : mise à jour seize heures. Action : information.

Contact : information. Merci.

Cordialement,

Météo`;

const E9_5_CE_EMAIL_2_POOL = buildExpressPool("e9-5-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Vigilance orange", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Vigilance",
    vfQ: "Objet : Vigilance orange.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Orages vendredi", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant orages vendredi.",
    fill: "orages",
    vfQ: "Sujet : orages vendredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Éviter déplacements", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "éviter déplacements.",
    fill: "éviter",
    vfQ: "Info : éviter déplacements.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Mise à jour seize heures", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : mise à jour seize heures.",
    fill: "mise",
    vfQ: "Délai : mise à jour seize heures.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Météo Alert", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Météo",
    vfQ: "Expéditeur : Météo Alert.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_3_TEXT = `De : Festival Musique

Objet : Billets en vente

Bonjour,

Concernant juillet trois jours : camping sur place.

Délai : programme site. Action : information.

Contact : information. Merci.

Cordialement,

Festival`;

const E9_5_CE_EMAIL_3_POOL = buildExpressPool("e9-5-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Billets en vente", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Billets",
    vfQ: "Objet : Billets en vente.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Juillet trois jours", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant juillet trois jours.",
    fill: "juillet",
    vfQ: "Sujet : juillet trois jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Camping sur place", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "camping sur place.",
    fill: "camping",
    vfQ: "Info : camping sur place.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Programme site", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : programme site.",
    fill: "programme",
    vfQ: "Délai : programme site.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Festival Musique", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Festival",
    vfQ: "Expéditeur : Festival Musique.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_4_TEXT = `De : Info Trafic

Objet : Grève mardi

Bonjour,

Concernant bus tramways perturbés : télétravail conseillé.

Délai : reprise mercredi. Action : information.

Contact : information. Merci.

Cordialement,

Info`;

const E9_5_CE_EMAIL_4_POOL = buildExpressPool("e9-5-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Grève mardi", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Grève",
    vfQ: "Objet : Grève mardi.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Bus tramways perturbés", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant bus tramways perturbés.",
    fill: "bus",
    vfQ: "Sujet : bus tramways perturbés.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Télétravail conseillé", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "télétravail conseillé.",
    fill: "télétravail",
    vfQ: "Info : télétravail conseillé.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Reprise mercredi", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : reprise mercredi.",
    fill: "reprise",
    vfQ: "Délai : reprise mercredi.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Info Trafic", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Info",
    vfQ: "Expéditeur : Info Trafic.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_5_TEXT = `De : TV Locale

Objet : Reportage agriculture

Bonjour,

Concernant producteurs locaux : marché hebdomadaire.

Délai : interview. Action : information.

Contact : information. Merci.

Cordialement,

TV`;

const E9_5_CE_EMAIL_5_POOL = buildExpressPool("e9-5-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Reportage agriculture", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Reportage",
    vfQ: "Objet : Reportage agriculture.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Producteurs locaux", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant producteurs locaux.",
    fill: "producteurs",
    vfQ: "Sujet : producteurs locaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Marché hebdomadaire", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "marché hebdomadaire.",
    fill: "marché",
    vfQ: "Info : marché hebdomadaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Interview", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : interview.",
    fill: "interview",
    vfQ: "Délai : interview.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["TV Locale", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "TV",
    vfQ: "Expéditeur : TV Locale.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_6_TEXT = `De : Blog Vélo

Objet : Piste cyclable

Bonjour,

Concernant douze kilomètres : fin automne.

Délai : réunion publique. Action : information.

Contact : information. Merci.

Cordialement,

Blog`;

const E9_5_CE_EMAIL_6_POOL = buildExpressPool("e9-5-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Piste cyclable", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Piste",
    vfQ: "Objet : Piste cyclable.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Douze kilomètres", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant douze kilomètres.",
    fill: "douze",
    vfQ: "Sujet : douze kilomètres.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Fin automne", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "fin automne.",
    fill: "fin",
    vfQ: "Info : fin automne.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Réunion publique", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : réunion publique.",
    fill: "réunion",
    vfQ: "Délai : réunion publique.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Blog Vélo", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Blog",
    vfQ: "Expéditeur : Blog Vélo.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_7_TEXT = `De : Agence Éco

Objet : Chômage baisse

Bonjour,

Concernant taux cinq pour cent : créations emploi.

Délai : prévisions positives. Action : information.

Contact : information. Merci.

Cordialement,

Agence`;

const E9_5_CE_EMAIL_7_POOL = buildExpressPool("e9-5-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Chômage baisse", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Chômage",
    vfQ: "Objet : Chômage baisse.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Taux cinq pour cent", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant taux cinq pour cent.",
    fill: "taux",
    vfQ: "Sujet : taux cinq pour cent.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Créations emploi", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "créations emploi.",
    fill: "créations",
    vfQ: "Info : créations emploi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Prévisions positives", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : prévisions positives.",
    fill: "prévisions",
    vfQ: "Délai : prévisions positives.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Agence Éco", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Agence",
    vfQ: "Expéditeur : Agence Éco.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_8_TEXT = `De : Santé Publique

Objet : Campagne vaccination

Bonjour,

Concernant grippe saisonnière : gratuit plus soixante-cinq ans.

Délai : rendez-vous en ligne. Action : information.

Contact : information. Merci.

Cordialement,

Santé`;

const E9_5_CE_EMAIL_8_POOL = buildExpressPool("e9-5-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Campagne vaccination", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Campagne",
    vfQ: "Objet : Campagne vaccination.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Grippe saisonnière", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant grippe saisonnière.",
    fill: "grippe",
    vfQ: "Sujet : grippe saisonnière.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Gratuit plus soixante-cinq ans", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "gratuit plus soixante-cinq ans.",
    fill: "gratuit",
    vfQ: "Info : gratuit plus soixante-cinq ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Rendez-vous en ligne", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : rendez-vous en ligne.",
    fill: "rendez-vous",
    vfQ: "Délai : rendez-vous en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Santé Publique", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Santé",
    vfQ: "Expéditeur : Santé Publique.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_9_TEXT = `De : Podcast Éducation

Objet : Réforme scolaire

Bonjour,

Concernant numérique classe : déploiement trois ans.

Délai : expert interviewé. Action : information.

Contact : information. Merci.

Cordialement,

Podcast`;

const E9_5_CE_EMAIL_9_POOL = buildExpressPool("e9-5-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Réforme scolaire", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Réforme",
    vfQ: "Objet : Réforme scolaire.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Numérique classe", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant numérique classe.",
    fill: "numérique",
    vfQ: "Sujet : numérique classe.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Déploiement trois ans", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "déploiement trois ans.",
    fill: "déploiement",
    vfQ: "Info : déploiement trois ans.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Expert interviewé", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : expert interviewé.",
    fill: "expert",
    vfQ: "Délai : expert interviewé.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Podcast Éducation", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Podcast",
    vfQ: "Expéditeur : Podcast Éducation.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_10_TEXT = `De : Flash Route

Objet : Accident A9

Bonjour,

Concernant bouchon cinq kilomètres : circulation alternée.

Délai : éviter secteur. Action : information.

Contact : information. Merci.

Cordialement,

Flash`;

const E9_5_CE_EMAIL_10_POOL = buildExpressPool("e9-5-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Accident A9", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Accident",
    vfQ: "Objet : Accident A9.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Bouchon cinq kilomètres", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant bouchon cinq kilomètres.",
    fill: "bouchon",
    vfQ: "Sujet : bouchon cinq kilomètres.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Circulation alternée", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "circulation alternée.",
    fill: "circulation",
    vfQ: "Info : circulation alternée.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Éviter secteur", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : éviter secteur.",
    fill: "éviter",
    vfQ: "Délai : éviter secteur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Flash Route", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Flash",
    vfQ: "Expéditeur : Flash Route.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_11_TEXT = `De : Enquête Env

Objet : Soixante-dix pour cent préoccupés

Bonjour,

Concernant recyclage : transports publics.

Délai : résultats. Action : information.

Contact : information. Merci.

Cordialement,

Enquête`;

const E9_5_CE_EMAIL_11_POOL = buildExpressPool("e9-5-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Soixante-dix pour cent préoccupés", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Soixante-dix",
    vfQ: "Objet : Soixante-dix pour cent préoccupés.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Recyclage", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant recyclage.",
    fill: "recyclage",
    vfQ: "Sujet : recyclage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Transports publics", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "transports publics.",
    fill: "transports",
    vfQ: "Info : transports publics.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Résultats", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : résultats.",
    fill: "résultats",
    vfQ: "Délai : résultats.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Enquête Env", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Enquête",
    vfQ: "Expéditeur : Enquête Env.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_12_TEXT = `De : Culture Plus

Objet : Exposition art

Bonjour,

Concernant entrée gratuite dimanche : jusqu'au trente juin.

Délai : réservation. Action : information.

Contact : information. Merci.

Cordialement,

Culture`;

const E9_5_CE_EMAIL_12_POOL = buildExpressPool("e9-5-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Exposition art", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Exposition",
    vfQ: "Objet : Exposition art.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Entrée gratuite dimanche", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant entrée gratuite dimanche.",
    fill: "entrée",
    vfQ: "Sujet : entrée gratuite dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Jusqu'au trente juin", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "jusqu'au trente juin.",
    fill: "jusqu'au",
    vfQ: "Info : jusqu'au trente juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Réservation", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : réservation.",
    fill: "réservation",
    vfQ: "Délai : réservation.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Culture Plus", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Culture",
    vfQ: "Expéditeur : Culture Plus.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_13_TEXT = `De : Sport Hebdo

Objet : Marathon dimanche

Bonjour,

Concernant dix mille participants : inscriptions complètes.

Délai : huit heures départ. Action : information.

Contact : information. Merci.

Cordialement,

Sport`;

const E9_5_CE_EMAIL_13_POOL = buildExpressPool("e9-5-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Marathon dimanche", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Marathon",
    vfQ: "Objet : Marathon dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Dix mille participants", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant dix mille participants.",
    fill: "dix",
    vfQ: "Sujet : dix mille participants.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Inscriptions complètes", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "inscriptions complètes.",
    fill: "inscriptions",
    vfQ: "Info : inscriptions complètes.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Huit heures départ", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : huit heures départ.",
    fill: "huit",
    vfQ: "Délai : huit heures départ.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Sport Hebdo", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Sport",
    vfQ: "Expéditeur : Sport Hebdo.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_14_TEXT = `De : Tech News

Objet : Fibre optique

Bonjour,

Concernant quatre-vingts pour cent foyers : installation gratuite.

Délai : inscription en ligne. Action : information.

Contact : information. Merci.

Cordialement,

Tech`;

const E9_5_CE_EMAIL_14_POOL = buildExpressPool("e9-5-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Fibre optique", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Fibre",
    vfQ: "Objet : Fibre optique.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Quatre-vingts pour cent foyers", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant quatre-vingts pour cent foyers.",
    fill: "quatre-vingts",
    vfQ: "Sujet : quatre-vingts pour cent foyers.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Installation gratuite", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "installation gratuite.",
    fill: "installation",
    vfQ: "Info : installation gratuite.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Inscription en ligne", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : inscription en ligne.",
    fill: "inscription",
    vfQ: "Délai : inscription en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Tech News", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Tech",
    vfQ: "Expéditeur : Tech News.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_15_TEXT = `De : Société Logement

Objet : Pénurie chambres étudiant

Bonjour,

Concernant prix hausse : aides étudiants.

Délai : témoignages. Action : information.

Contact : information. Merci.

Cordialement,

Société`;

const E9_5_CE_EMAIL_15_POOL = buildExpressPool("e9-5-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Pénurie chambres étudiant", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Pénurie",
    vfQ: "Objet : Pénurie chambres étudiant.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Prix hausse", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant prix hausse.",
    fill: "prix",
    vfQ: "Sujet : prix hausse.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Aides étudiants", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "aides étudiants.",
    fill: "aides",
    vfQ: "Info : aides étudiants.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Témoignages", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : témoignages.",
    fill: "témoignages",
    vfQ: "Délai : témoignages.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Société Logement", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Société",
    vfQ: "Expéditeur : Société Logement.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_16_TEXT = `De : Info International

Objet : Sommet climat

Bonjour,

Concernant accord partiel : manifestations.

Délai : analyse expert. Action : information.

Contact : information. Merci.

Cordialement,

Info`;

const E9_5_CE_EMAIL_16_POOL = buildExpressPool("e9-5-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Sommet climat", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Sommet",
    vfQ: "Objet : Sommet climat.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Accord partiel", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant accord partiel.",
    fill: "accord",
    vfQ: "Sujet : accord partiel.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Manifestations", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "manifestations.",
    fill: "manifestations",
    vfQ: "Info : manifestations.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Analyse expert", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : analyse expert.",
    fill: "analyse",
    vfQ: "Délai : analyse expert.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Info International", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Info",
    vfQ: "Expéditeur : Info International.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_17_TEXT = `De : Faits Divers

Objet : Vol vélo campus

Bonjour,

Concernant caméras surveillance : plainte déposée.

Délai : conseils sécurité. Action : information.

Contact : information. Merci.

Cordialement,

Faits`;

const E9_5_CE_EMAIL_17_POOL = buildExpressPool("e9-5-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Vol vélo campus", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Vol",
    vfQ: "Objet : Vol vélo campus.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Caméras surveillance", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant caméras surveillance.",
    fill: "caméras",
    vfQ: "Sujet : caméras surveillance.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Plainte déposée", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "plainte déposée.",
    fill: "plainte",
    vfQ: "Info : plainte déposée.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Conseils sécurité", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : conseils sécurité.",
    fill: "conseils",
    vfQ: "Délai : conseils sécurité.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Faits Divers", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Faits",
    vfQ: "Expéditeur : Faits Divers.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_18_TEXT = `De : Économie Locale

Objet : Ouverture magasin

Bonjour,

Concernant cent cinquante emplois : samedi inauguration.

Délai : promotions. Action : information.

Contact : information. Merci.

Cordialement,

Économie`;

const E9_5_CE_EMAIL_18_POOL = buildExpressPool("e9-5-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Ouverture magasin", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Ouverture",
    vfQ: "Objet : Ouverture magasin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Cent cinquante emplois", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant cent cinquante emplois.",
    fill: "cent",
    vfQ: "Sujet : cent cinquante emplois.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Samedi inauguration", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "samedi inauguration.",
    fill: "samedi",
    vfQ: "Info : samedi inauguration.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Promotions", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : promotions.",
    fill: "promotions",
    vfQ: "Délai : promotions.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Économie Locale", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Économie",
    vfQ: "Expéditeur : Économie Locale.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_19_TEXT = `De : Santé Canicule

Objet : Températures trente-cinq degrés

Bonjour,

Concernant recommandations préfecture : îlots fraîcheur.

Délai : information. Action : information.

Contact : information. Merci.

Cordialement,

Santé`;

const E9_5_CE_EMAIL_19_POOL = buildExpressPool("e9-5-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Températures trente-cinq degrés", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Températures",
    vfQ: "Objet : Températures trente-cinq degrés.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Recommandations préfecture", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant recommandations préfecture.",
    fill: "recommandations",
    vfQ: "Sujet : recommandations préfecture.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Îlots fraîcheur", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "îlots fraîcheur.",
    fill: "îlots",
    vfQ: "Info : îlots fraîcheur.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Information", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : information.",
    fill: "information",
    vfQ: "Délai : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Santé Canicule", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Santé",
    vfQ: "Expéditeur : Santé Canicule.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
    vfC: 0,
  }),
]);

const E9_5_CE_EMAIL_20_TEXT = `De : Médias Local

Objet : Nouveau journal

Bonjour,

Concernant lancement septembre : gratuit.

Délai : version en ligne. Action : information.

Contact : information. Merci.

Cordialement,

Médias`;

const E9_5_CE_EMAIL_20_POOL = buildExpressPool("e9-5-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Nouveau journal", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Nouveau",
    vfQ: "Objet : Nouveau journal.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Lancement septembre", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant lancement septembre.",
    fill: "lancement",
    vfQ: "Sujet : lancement septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Gratuit", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "gratuit.",
    fill: "gratuit",
    vfQ: "Info : gratuit.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Version en ligne", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : version en ligne.",
    fill: "version",
    vfQ: "Délai : version en ligne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Information", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : information.",
    fill: "information",
    vfQ: "Action : information.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Médias Local", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Médias",
    vfQ: "Expéditeur : Médias Local.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Information", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : information.",
    fill: "information",
    vfQ: "Contact : information.",
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
