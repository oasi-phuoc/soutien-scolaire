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

const E4_1_CE_EMAIL_TEXT_1 = `De : H&M
Objet : une robe d'été

Bonjour,

Votre demande est notée. Information principale : 59 francs. Le détail principal est bleu.
Consigne : essayer la robe. Détail : taille M.

Cordialement`;

const E4_1_CE_EMAIL_POOL_1 = buildExpressPool("e4-1-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une robe d'été", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une robe d'été",
    vfQ: "Le texte mentionne une robe d'été.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["59 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "59 francs",
    vfQ: "Le texte mentionne 59 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["H&M", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "H&M",
    vfQ: "Le texte mentionne H&M.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bleu", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bleu",
    vfQ: "Le texte mentionne bleu.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille M", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille M",
    vfQ: "Le texte mentionne taille M.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_2 = `De : Service client
Objet : Confirmation

Bonjour,

Nous confirmons un manteau d'hiver chez vente entre particuliers.
Information : 80 francs. La note du dossier : noir.
Action demandée : contacter le vendeur. Détail : taille L.

Service client`;

const E4_1_CE_EMAIL_POOL_2 = buildExpressPool("e4-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un manteau d'hiver", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un manteau d'hiver",
    vfQ: "Le texte mentionne un manteau d'hiver.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["80 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "80 francs",
    vfQ: "Le texte mentionne 80 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["vente entre particuliers", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "vente entre particuliers",
    vfQ: "Le texte mentionne vente entre particuliers.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["noir", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "noir",
    vfQ: "Le texte mentionne noir.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille L", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille L",
    vfQ: "Le texte mentionne taille L.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_3 = `De : C&A
Objet : Rappel avant votre venue

Bonjour,

Avant de venir pour un jean slim, vérifiez gris.
Information indiquée : 69 francs. Sur place, il faudra vérifier la cabine.
taille 32.

Merci`;

const E4_1_CE_EMAIL_POOL_3 = buildExpressPool("e4-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un jean slim", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un jean slim",
    vfQ: "Le texte mentionne un jean slim.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["69 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "69 francs",
    vfQ: "Le texte mentionne 69 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["C&A", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "C&A",
    vfQ: "Le texte mentionne C&A.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["gris", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "gris",
    vfQ: "Le texte mentionne gris.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 32", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 32",
    vfQ: "Le texte mentionne taille 32.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_4 = `De : Boutique en ligne
Objet : Votre suivi

Bonjour,

Votre demande pour un pull en laine avance.
Point de retrait : Migros mode. Information : 45 francs.
Détail à confirmer : rouge. Consigne : prendre la carte client.

Boutique en ligne`;

const E4_1_CE_EMAIL_POOL_4 = buildExpressPool("e4-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un pull en laine", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un pull en laine",
    vfQ: "Le texte mentionne un pull en laine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["45 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "45 francs",
    vfQ: "Le texte mentionne 45 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Migros mode", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Migros mode",
    vfQ: "Le texte mentionne Migros mode.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["rouge", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "rouge",
    vfQ: "Le texte mentionne rouge.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille S", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille S",
    vfQ: "Le texte mentionne taille S.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_5 = `De : Zara
Objet : Offre limitée

Bonjour,

L'offre sur une chemise blanche est disponible. Information : 39 francs.
Elle concerne blanc. Pour en profiter, consigne : demander le cintre.
taille M.

À bientôt`;

const E4_1_CE_EMAIL_POOL_5 = buildExpressPool("e4-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une chemise blanche", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une chemise blanche",
    vfQ: "Le texte mentionne une chemise blanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["39 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "39 francs",
    vfQ: "Le texte mentionne 39 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Zara", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Zara",
    vfQ: "Le texte mentionne Zara.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["blanc", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "blanc",
    vfQ: "Le texte mentionne blanc.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille M", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille M",
    vfQ: "Le texte mentionne taille M.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_6 = `De : Réservation
Objet : Préparation

Bonjour,

Nous préparons des baskets de sport. Vous pouvez passer chez Decathlon. Information : 89 francs.
La fiche indique blanc et noir. Au comptoir, pensez à utiliser la carte fidélité.
taille 42.

Réservation`;

const E4_1_CE_EMAIL_POOL_6 = buildExpressPool("e4-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["des baskets de sport", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "des baskets de sport",
    vfQ: "Le texte mentionne des baskets de sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["89 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "89 francs",
    vfQ: "Le texte mentionne 89 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Decathlon", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Decathlon",
    vfQ: "Le texte mentionne Decathlon.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["blanc et noir", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "blanc et noir",
    vfQ: "Le texte mentionne blanc et noir.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 42", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 42",
    vfQ: "Le texte mentionne taille 42.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_7 = `De : Carte fidélité
Objet : Avantage du jour

Bonjour,

Votre avantage concerne un pantalon de costume.
Il est disponible chez PKZ. Information : 99 francs. Détail : bleu marine.
Pour l'activer, il faut réserver l'ourlet. Détail : taille 48.

Carte fidélité`;

const E4_1_CE_EMAIL_POOL_7 = buildExpressPool("e4-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un pantalon de costume", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un pantalon de costume",
    vfQ: "Le texte mentionne un pantalon de costume.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["99 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "99 francs",
    vfQ: "Le texte mentionne 99 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["PKZ", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "PKZ",
    vfQ: "Le texte mentionne PKZ.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bleu marine", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bleu marine",
    vfQ: "Le texte mentionne bleu marine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 48", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 48",
    vfQ: "Le texte mentionne taille 48.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_8 = `De : Boutique Soie+
Objet : Dernière vérification

Bonjour,

Nous gardons une écharpe en soie. Information : 25 francs.
La note enregistrée est vert. Consigne : passer au comptoir au moment de votre venue.
taille unique.

Cordialement`;

const E4_1_CE_EMAIL_POOL_8 = buildExpressPool("e4-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une écharpe en soie", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une écharpe en soie",
    vfQ: "Le texte mentionne une écharpe en soie.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["25 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "25 francs",
    vfQ: "Le texte mentionne 25 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boutique Soie+", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boutique Soie+",
    vfQ: "Le texte mentionne Boutique Soie+.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["vert", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "vert",
    vfQ: "Le texte mentionne vert.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille unique", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille unique",
    vfQ: "Le texte mentionne taille unique.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_9 = `De : Support
Objet : Question reçue

Bonjour,

Vous avez posé une question sur une jupe plissée.
Réponse : chez Promod, c'est possible. Information : 35 francs.
Il faut seulement garder le ticket. rose. Détail : taille 38.

Support`;

const E4_1_CE_EMAIL_POOL_9 = buildExpressPool("e4-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une jupe plissée", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une jupe plissée",
    vfQ: "Le texte mentionne une jupe plissée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["35 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "35 francs",
    vfQ: "Le texte mentionne 35 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Promod", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Promod",
    vfQ: "Le texte mentionne Promod.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["rose", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "rose",
    vfQ: "Le texte mentionne rose.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 38", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 38",
    vfQ: "Le texte mentionne taille 38.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_10 = `De : Intersport
Objet : Commande de groupe

Bonjour,

La commande pour des shorts de sport est prévue. Information : 29 francs.
Elle porte la note noir. Consigne : payer avant jeudi avant le retrait.
taille L.

Le magasin`;

const E4_1_CE_EMAIL_POOL_10 = buildExpressPool("e4-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["des shorts de sport", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "des shorts de sport",
    vfQ: "Le texte mentionne des shorts de sport.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["29 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "29 francs",
    vfQ: "Le texte mentionne 29 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Intersport", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Intersport",
    vfQ: "Le texte mentionne Intersport.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["noir", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "noir",
    vfQ: "Le texte mentionne noir.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille L", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille L",
    vfQ: "Le texte mentionne taille L.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_11 = `De : Alerte stock
Objet : Disponibilité

Bonjour,

des chaussettes est de nouveau disponible chez Coop mode.
Information : 12 francs. Le détail à vérifier est blanc.
Consigne : prendre deux packs. Détail : taille 39-42.

Alerte stock`;

const E4_1_CE_EMAIL_POOL_11 = buildExpressPool("e4-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["des chaussettes", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "des chaussettes",
    vfQ: "Le texte mentionne des chaussettes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["12 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "12 francs",
    vfQ: "Le texte mentionne 12 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Coop mode", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Coop mode",
    vfQ: "Le texte mentionne Coop mode.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["blanc", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "blanc",
    vfQ: "Le texte mentionne blanc.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 39-42", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 39-42",
    vfQ: "Le texte mentionne taille 39-42.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_12 = `De : Charles Vögele
Objet : Réponse à votre message

Bonjour,

Oui, nous avons un costume complet.
Vous pouvez passer. Information : 250 francs. Demandez la note gris foncé.
Ensuite, action simple : prendre rendez-vous. Détail : taille 50.

Merci`;

const E4_1_CE_EMAIL_POOL_12 = buildExpressPool("e4-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un costume complet", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un costume complet",
    vfQ: "Le texte mentionne un costume complet.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["250 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "250 francs",
    vfQ: "Le texte mentionne 250 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Charles Vögele", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Charles Vögele",
    vfQ: "Le texte mentionne Charles Vögele.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["gris foncé", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "gris foncé",
    vfQ: "Le texte mentionne gris foncé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 50", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 50",
    vfQ: "Le texte mentionne taille 50.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_13 = `De : Ardoise du jour
Objet : Information

Bonjour,

Aujourd'hui, nous proposons un t-shirt coton.
C'est disponible chez Ochsner. Information : 15 francs. Détail : jaune.
Action conseillée : choisir trois couleurs. Détail : taille L.

Bonne journée`;

const E4_1_CE_EMAIL_POOL_13 = buildExpressPool("e4-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un t-shirt coton", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un t-shirt coton",
    vfQ: "Le texte mentionne un t-shirt coton.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["15 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "15 francs",
    vfQ: "Le texte mentionne 15 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Ochsner", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Ochsner",
    vfQ: "Le texte mentionne Ochsner.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["jaune", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "jaune",
    vfQ: "Le texte mentionne jaune.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille L", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille L",
    vfQ: "Le texte mentionne taille L.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_14 = `De : Rappel automatique
Objet : Rendez-vous

Bonjour,

Votre rappel concerne un blouson jeans.
Rendez-vous chez Gap. Information : 55 francs. Vérifiez bleu clair.
Consigne : vérifier les manches. Détail : taille M.

Rappel automatique`;

const E4_1_CE_EMAIL_POOL_14 = buildExpressPool("e4-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un blouson jeans", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un blouson jeans",
    vfQ: "Le texte mentionne un blouson jeans.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["55 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "55 francs",
    vfQ: "Le texte mentionne 55 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Gap", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Gap",
    vfQ: "Le texte mentionne Gap.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bleu clair", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bleu clair",
    vfQ: "Le texte mentionne bleu clair.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille M", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille M",
    vfQ: "Le texte mentionne taille M.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_15 = `De : Athleta
Objet : Nouveauté

Bonjour,

La nouveauté un legging yoga arrive. Information : 32 francs.
Elle est liée à violet. Pour la réserver, vous pouvez entrer le code promo.
taille S.

À bientôt`;

const E4_1_CE_EMAIL_POOL_15 = buildExpressPool("e4-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un legging yoga", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un legging yoga",
    vfQ: "Le texte mentionne un legging yoga.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["32 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "32 francs",
    vfQ: "Le texte mentionne 32 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Athleta", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Athleta",
    vfQ: "Le texte mentionne Athleta.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["violet", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "violet",
    vfQ: "Le texte mentionne violet.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille S", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille S",
    vfQ: "Le texte mentionne taille S.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_16 = `De : Vendeur
Objet : Message noté

Bonjour,

J'ai bien noté votre demande pour des chaussures de ville.
Je vous attends chez friperie du Lac. Information : 60 francs. Je prépare noir.
Sur place, vous pourrez essayer la paire. Détail : taille 40.

Le vendeur`;

const E4_1_CE_EMAIL_POOL_16 = buildExpressPool("e4-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["des chaussures de ville", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "des chaussures de ville",
    vfQ: "Le texte mentionne des chaussures de ville.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["60 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "60 francs",
    vfQ: "Le texte mentionne 60 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["friperie du Lac", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "friperie du Lac",
    vfQ: "Le texte mentionne friperie du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["noir", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "noir",
    vfQ: "Le texte mentionne noir.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille 40", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille 40",
    vfQ: "Le texte mentionne taille 40.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_17 = `De : Programme fidélité
Objet : Votre offre

Bonjour,

Votre offre porte sur un manteau imperméable.
Elle fonctionne chez Globus; information : 110 francs. La condition est kaki.
N'oubliez pas cette action : montrer la carte bonus. Détail : taille XL.

Programme fidélité`;

const E4_1_CE_EMAIL_POOL_17 = buildExpressPool("e4-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un manteau imperméable", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un manteau imperméable",
    vfQ: "Le texte mentionne un manteau imperméable.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["110 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "110 francs",
    vfQ: "Le texte mentionne 110 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Globus", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Globus",
    vfQ: "Le texte mentionne Globus.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["kaki", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "kaki",
    vfQ: "Le texte mentionne kaki.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille XL", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille XL",
    vfQ: "Le texte mentionne taille XL.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_18 = `De : boutique homme
Objet : Fête confirmée

Bonjour,

Pour votre fête, une cravate en soie est réservé.
Information : 35 francs. La fiche indique bordeaux.
Consigne : demander un coffret. Détail : taille unique.

Cordialement`;

const E4_1_CE_EMAIL_POOL_18 = buildExpressPool("e4-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une cravate en soie", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une cravate en soie",
    vfQ: "Le texte mentionne une cravate en soie.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["35 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "35 francs",
    vfQ: "Le texte mentionne 35 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["boutique homme", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "boutique homme",
    vfQ: "Le texte mentionne boutique homme.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bordeaux", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bordeaux",
    vfQ: "Le texte mentionne bordeaux.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille unique", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille unique",
    vfQ: "Le texte mentionne taille unique.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_19 = `De : Confirmation
Objet : Retrait

Bonjour,

Votre retrait pour un pyjama coton est prêt chez Manor.
Information : 28 francs. La note est bleu marine.
Consigne : présenter le numéro. Détail : taille M.

Confirmation`;

const E4_1_CE_EMAIL_POOL_19 = buildExpressPool("e4-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["un pyjama coton", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "un pyjama coton",
    vfQ: "Le texte mentionne un pyjama coton.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["28 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "28 francs",
    vfQ: "Le texte mentionne 28 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Manor", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Manor",
    vfQ: "Le texte mentionne Manor.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["bleu marine", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "bleu marine",
    vfQ: "Le texte mentionne bleu marine.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille M", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille M",
    vfQ: "Le texte mentionne taille M.",
    vfC: 0,
  }),
]);
const E4_1_CE_EMAIL_TEXT_20 = `De : Outlet Aubonne
Objet : Idée week-end

Bonjour,

Pour ce week-end, nous conseillons une veste légère.
Information : 49 francs. Regardez beige avant de choisir.
Vous pourrez comparer deux modèles. Détail : taille L.

Bon week-end`;

const E4_1_CE_EMAIL_POOL_20 = buildExpressPool("e4-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel vêtement est mentionné ?",
    text: ["une veste légère", "un livre", "une chaise"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le vêtement est _________.",
    fill: "une veste légère",
    vfQ: "Le texte mentionne une veste légère.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quel prix est indiqué ?",
    text: ["49 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "49 francs",
    vfQ: "Le texte mentionne 49 francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Outlet Aubonne", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Outlet Aubonne",
    vfQ: "Le texte mentionne Outlet Aubonne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle couleur est mentionnée ?",
    text: ["beige", "transparent", "multicolore"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La couleur est _________.",
    fill: "beige",
    vfQ: "Le texte mentionne beige.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quelle taille est indiquée ?",
    text: ["taille L", "taille 0", "XXXL géant"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La taille est _________.",
    fill: "taille L",
    vfQ: "Le texte mentionne taille L.",
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
    title: "Montagne en hiver",
    situation: "",
    sourceMessage: {
      from: "Office du tourisme",
      subject: "Meteo du week-end",
      body: `Bonjour,
Ce week-end, il fera froid et il y aura de la neige en montagne.
Office du tourisme`,
    },
    instruction: "Écrivez un e-mail à votre ami pour l'inviter à un week-end à la montagne. Expliquez quels vêtements il doit prendre et pourquoi.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-2",
    title: "Don Croix-Rouge",
    situation: "",
    sourceMessage: {
      from: "Croix-Rouge",
      subject: "Collecte de vêtements",
      body: `Bonjour,
Nous collectons des vêtements propres et en bon etat cette semaine.
Merci pour votre aide`,
    },
    instruction: "Écrivez un e-mail à la Croix-Rouge pour proposer des vêtements et des accessoires. Décrivez les articles, les tailles, l'etat et le moment possible pour les apporter.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-3",
    title: "Valise d'ete",
    situation: "",
    sourceMessage: {
      from: "Amie",
      subject: "Valise pour la mer",
      body: `Salut,
Je pars à la mer et je ne sais pas quoi prendre. Tu peux me conseiller ?
Merci`,
    },
    instruction: "Répondez à votre amie qui demande conseil pour sa valise. Conseillez des vêtements pour la mer et expliquez vos choix.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-4",
    title: "Pluie",
    situation: "",
    sourceMessage: {
      from: "Tom",
      subject: "Week-end chez toi",
      body: `Salut,
Je viens ce week-end. Quelle est la meteo et quels vêtements je dois prendre ?
Tom`,
    },
    instruction: "Écrivez à un ami qui vient dans votre ville pluvieuse. Conseillez des chaussures, une veste et un accessoire utile.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-5",
    title: "Tenue de travail",
    situation: "",
    sourceMessage: {
      from: "Responsable",
      subject: "Premier jour",
      body: `Bonjour,
Pour lundi, venez avec une tenue correcte et confortable. N'hesitez pas si vous avez une question.
Cordialement`,
    },
    instruction: "Répondez au responsable en décrivant la tenue que vous porterez pour votre premier jour. Posez une question si une regle existe.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-6",
    title: "Echange de taille",
    situation: "",
    sourceMessage: {
      from: "Boutique Mode",
      subject: "Commande recue",
      body: `Bonjour,
Votre commande est livree. Vous pouvez demander un echange sous quinze jours.
Cordialement`,
    },
    instruction: "Écrivez au magasin pour expliquer qu'un pantalon est trop grand. Demandez un echange et donnez la taille souhaitee.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-7",
    title: "Objet perdu",
    situation: "",
    sourceMessage: {
      from: "Objets trouves",
      subject: "Demande d'information",
      body: `Bonjour,
Pour rechercher un objet perdu, merci d'envoyer une description precise.
Cordialement`,
    },
    instruction: "Écrivez au service des objets trouves pour décrire votre écharpe perdue. Donnez la couleur, la matière, le lieu et votre contact.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-8",
    title: "Fête elegante",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Tenue pour la fête",
      body: `Salut,
La fête de samedi est assez elegante. Tu sais déjà quoi porter ?
Ami`,
    },
    instruction: "Répondez à votre ami en décrivant la tenue que vous pensez porter pour une fête elegante. Demandez son avis.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-9",
    title: "Vêtements enfant",
    situation: "",
    sourceMessage: {
      from: "Association Familles",
      subject: "Dons pour enfants",
      body: `Bonjour,
Nous cherchons des vêtements d'enfant pour l'hiver et le printemps.
Merci`,
    },
    instruction: "Écrivez à une association pour donner des vêtements d'enfant. Précisez les tailles, les saisons et l'etat des articles.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-10",
    title: "Chaussures en ligne",
    situation: "",
    sourceMessage: {
      from: "Chaussures Web",
      subject: "Modele disponible",
      body: `Bonjour,
Le modele qui vous intéresse existe en plusieurs couleurs. Contactez-nous pour plus d'informations.
Service client`,
    },
    instruction: "Répondez au service client pour demander des informations sur des chaussures. Demandez la taille, la couleur disponible et la livraison.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-11",
    title: "Conseil lavage",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Pull fragile",
      body: `Salut,
J'ai achete un pull fragile et je ne sais pas comment le laver. Tu peux m'aider ?
Merci`,
    },
    instruction: "Répondez à votre ami en expliquant comment laver un pull fragile. Donnez des conseils simples pour l'eau, le sechage et le rangement.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-12",
    title: "Tenue de sport",
    situation: "",
    sourceMessage: {
      from: "Coach",
      subject: "Premier entrainement",
      body: `Bonjour,
Pour le premier entrainement, merci de venir avec une tenue adaptee.
Cordialement`,
    },
    instruction: "Écrivez à votre coach pour décrire votre tenue de sport. Dites quels vêtements et accessoires vous avez déjà.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-13",
    title: "Mariage",
    situation: "",
    sourceMessage: {
      from: "Cousine",
      subject: "Mariage de Léa",
      body: `Coucou,
Le mariage approche. Tu as choisi ta tenue ?
Bises`,
    },
    instruction: "Répondez à votre cousine en demandant conseil pour une tenue de mariage. Décrivez deux options et dites ce que vous préférez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-14",
    title: "Voyage leger",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Petit sac",
      body: `Salut,
On part seulement deux jours, donc il faut voyager leger. Tu prends quoi ?
Ami`,
    },
    instruction: "Écrivez à un ami pour expliquer quels vêtements vous prenez pour un voyage de deux jours. Justifiez votre choix avec la meteo et les activités.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-15",
    title: "Look préfère",
    situation: "",
    sourceMessage: {
      from: "Forum A1",
      subject: "Mon look",
      body: `Bonjour,
Cette semaine, décrivez votre look préfère en quelques phrases.
Le professeur`,
    },
    instruction: "Répondez au forum du cours avec une description de votre look préfère. Parlez des couleurs, des vêtements et des situations où vous le portez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-16",
    title: "Sac oublie",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Sac trouve",
      body: `Salut,
J'ai trouve un sac chez moi après la soirée. Est-ce qu'il est à toi ?
Ami`,
    },
    instruction: "Écrivez à votre ami pour décrire un sac oublie chez lui. Indiquez la couleur du sac et les vêtements à l'interieur.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-17",
    title: "Collecte au bureau",
    situation: "",
    sourceMessage: {
      from: "Responsable bureau",
      subject: "Action solidaire",
      body: `Bonjour,
Nous pouvons organiser une petite action solidaire au bureau ce mois-ci.
Cordialement`,
    },
    instruction: "Écrivez un e-mail aux collègues pour organiser une collecte de vêtements. Expliquez quels articles apporter et ou les deposer.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-18",
    title: "Hiver froid",
    situation: "",
    sourceMessage: {
      from: "Étudiant",
      subject: "Arrivée en janvier",
      body: `Bonjour,
J'arrive en France en janvier. Je ne connais pas le froid ici. Quels vêtements dois-je prendre ?
Merci`,
    },
    instruction: "Répondez à un étudiant qui arrive en hiver. Conseillez des vêtements chauds et expliquez pourquoi ils sont nécessaires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-19",
    title: "Boutique",
    situation: "",
    sourceMessage: {
      from: "Boutique Centre",
      subject: "Recherche d'article",
      body: `Bonjour,
Nous pouvons vous aider à trouver un vêtement precis si vous nous envoyez une description.
Cordialement`,
    },
    instruction: "Écrivez au vendeur pour décrire la veste que vous cherchez. Donnez la taille, la couleur, le prix souhaite et l'occasion.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-1-pee-20",
    title: "Couleurs",
    situation: "",
    sourceMessage: {
      from: "Amie",
      subject: "Conseil shopping",
      body: `Salut,
Je veux t'offrir un accessoire, mais je ne connais pas tes couleurs préfèrees.
Amie`,
    },
    instruction: "Répondez à votre amie en parlant de vos couleurs préfèrees pour les vêtements. Expliquez ce que vous aimez porter et ce que vous evitez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

/* ════════════════════════════════════════════════════════════════════════════
   E4.2 — Aller au restaurant
   ════════════════════════════════════════════════════════════════════════════ */

const E4_2_CE_EMAIL_TEXT_1 = `De : Restaurant Le Lac
Objet : salade et poisson

Bonjour,

Votre demande est notée. Information principale : à 12 h 30. Le détail principal est eau minérale.
Consigne : réserver une table. Détail : 28 francs.

Cordialement`;

const E4_2_CE_EMAIL_POOL_1 = buildExpressPool("e4-2-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["salade et poisson", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "salade et poisson",
    vfQ: "Le texte mentionne salade et poisson.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 12 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 12 h 30",
    vfQ: "Le texte mentionne à 12 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Restaurant Le Lac", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Restaurant Le Lac",
    vfQ: "Le texte mentionne Restaurant Le Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["eau minérale", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "eau minérale",
    vfQ: "Le texte mentionne eau minérale.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["28 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "28 francs",
    vfQ: "Le texte mentionne 28 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_2 = `De : Service client
Objet : Confirmation

Bonjour,

Nous confirmons une fondue moitié-moitié chez Fondue House.
Information : à 19 h. La note du dossier : vin blanc.
Action demandée : confirmer deux personnes. Détail : 35 francs.

Service client`;

const E4_2_CE_EMAIL_POOL_2 = buildExpressPool("e4-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une fondue moitié-moitié", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une fondue moitié-moitié",
    vfQ: "Le texte mentionne une fondue moitié-moitié.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 19 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 19 h",
    vfQ: "Le texte mentionne à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Fondue House", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Fondue House",
    vfQ: "Le texte mentionne Fondue House.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["vin blanc", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "vin blanc",
    vfQ: "Le texte mentionne vin blanc.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["35 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "35 francs",
    vfQ: "Le texte mentionne 35 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_3 = `De : Pizzeria Roma
Objet : Rappel avant votre venue

Bonjour,

Avant de venir pour une pizza margherita, vérifiez coca-cola.
Information indiquée : à 20 h. Sur place, il faudra payer à la livraison.
18 francs.

Merci`;

const E4_2_CE_EMAIL_POOL_3 = buildExpressPool("e4-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une pizza margherita", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une pizza margherita",
    vfQ: "Le texte mentionne une pizza margherita.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 20 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 20 h",
    vfQ: "Le texte mentionne à 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Pizzeria Roma", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Pizzeria Roma",
    vfQ: "Le texte mentionne Pizzeria Roma.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["coca-cola", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "coca-cola",
    vfQ: "Le texte mentionne coca-cola.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["18 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "18 francs",
    vfQ: "Le texte mentionne 18 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_4 = `De : Boutique en ligne
Objet : Votre suivi

Bonjour,

Votre demande pour un steak frites avance.
Point de retrait : table 8. Information : à 13 h.
Détail à confirmer : bière pression. Consigne : demander une cuisson à point.

Boutique en ligne`;

const E4_2_CE_EMAIL_POOL_4 = buildExpressPool("e4-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un steak frites", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un steak frites",
    vfQ: "Le texte mentionne un steak frites.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 13 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 13 h",
    vfQ: "Le texte mentionne à 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["table 8", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "table 8",
    vfQ: "Le texte mentionne table 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["bière pression", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "bière pression",
    vfQ: "Le texte mentionne bière pression.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["32 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "32 francs",
    vfQ: "Le texte mentionne 32 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_5 = `De : Brasserie du Centre
Objet : Offre limitée

Bonjour,

L'offre sur un risotto aux champignons est disponible. Information : à midi.
Elle concerne jus d'orange. Pour en profiter, consigne : choisir le plat végétarien.
24 francs.

À bientôt`;

const E4_2_CE_EMAIL_POOL_5 = buildExpressPool("e4-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un risotto aux champignons", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un risotto aux champignons",
    vfQ: "Le texte mentionne un risotto aux champignons.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à midi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à midi",
    vfQ: "Le texte mentionne à midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Brasserie du Centre", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Brasserie du Centre",
    vfQ: "Le texte mentionne Brasserie du Centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["jus d'orange", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "jus d'orange",
    vfQ: "Le texte mentionne jus d'orange.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["24 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "24 francs",
    vfQ: "Le texte mentionne 24 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_6 = `De : Réservation
Objet : Préparation

Bonjour,

Nous préparons un menu dégustation. Vous pouvez passer chez Restaurant Le Sapin. Information : à 20 h 30.
La fiche indique champagne. Au comptoir, pensez à préparer l'anniversaire.
65 francs.

Réservation`;

const E4_2_CE_EMAIL_POOL_6 = buildExpressPool("e4-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un menu dégustation", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un menu dégustation",
    vfQ: "Le texte mentionne un menu dégustation.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 20 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 20 h 30",
    vfQ: "Le texte mentionne à 20 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Restaurant Le Sapin", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Restaurant Le Sapin",
    vfQ: "Le texte mentionne Restaurant Le Sapin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["champagne", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "champagne",
    vfQ: "Le texte mentionne champagne.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["65 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "65 francs",
    vfQ: "Le texte mentionne 65 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_7 = `De : Carte fidélité
Objet : Avantage du jour

Bonjour,

Votre avantage concerne un burger classique.
Il est disponible chez Burger King. Information : à 18 h 30. Détail : limonade.
Pour l'activer, il faut prendre une table en terrasse. Détail : 22 francs.

Carte fidélité`;

const E4_2_CE_EMAIL_POOL_7 = buildExpressPool("e4-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un burger classique", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un burger classique",
    vfQ: "Le texte mentionne un burger classique.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 18 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 18 h 30",
    vfQ: "Le texte mentionne à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Burger King", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Burger King",
    vfQ: "Le texte mentionne Burger King.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["limonade", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "limonade",
    vfQ: "Le texte mentionne limonade.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["22 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "22 francs",
    vfQ: "Le texte mentionne 22 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_8 = `De : Café du Port
Objet : Dernière vérification

Bonjour,

Nous gardons un filet de perche. Information : ce soir.
La note enregistrée est vin du lac. Consigne : demander la vue sur le lac au moment de votre venue.
38 francs.

Cordialement`;

const E4_2_CE_EMAIL_POOL_8 = buildExpressPool("e4-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un filet de perche", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un filet de perche",
    vfQ: "Le texte mentionne un filet de perche.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["ce soir", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "ce soir",
    vfQ: "Le texte mentionne ce soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Café du Port", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Café du Port",
    vfQ: "Le texte mentionne Café du Port.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["vin du lac", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "vin du lac",
    vfQ: "Le texte mentionne vin du lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["38 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "38 francs",
    vfQ: "Le texte mentionne 38 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_9 = `De : Support
Objet : Question reçue

Bonjour,

Vous avez posé une question sur des pâtes carbonara.
Réponse : chez Restaurant Italien, c'est possible. Information : à 19 h 30.
Il faut seulement partager l'addition. eau gazeuse. Détail : 21 francs.

Support`;

const E4_2_CE_EMAIL_POOL_9 = buildExpressPool("e4-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["des pâtes carbonara", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "des pâtes carbonara",
    vfQ: "Le texte mentionne des pâtes carbonara.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 19 h 30", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 19 h 30",
    vfQ: "Le texte mentionne à 19 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Restaurant Italien", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Restaurant Italien",
    vfQ: "Le texte mentionne Restaurant Italien.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["eau gazeuse", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "eau gazeuse",
    vfQ: "Le texte mentionne eau gazeuse.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["21 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "21 francs",
    vfQ: "Le texte mentionne 21 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_10 = `De : Snack Bar
Objet : Commande de groupe

Bonjour,

La commande pour une salade César est prévue. Information : à 13 h.
Elle porte la note thé glacé. Consigne : retirer sans croûtons avant le retrait.
16 francs.

Le magasin`;

const E4_2_CE_EMAIL_POOL_10 = buildExpressPool("e4-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une salade César", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une salade César",
    vfQ: "Le texte mentionne une salade César.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 13 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 13 h",
    vfQ: "Le texte mentionne à 13 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Snack Bar", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Snack Bar",
    vfQ: "Le texte mentionne Snack Bar.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["thé glacé", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "thé glacé",
    vfQ: "Le texte mentionne thé glacé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["16 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "16 francs",
    vfQ: "Le texte mentionne 16 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_11 = `De : Alerte stock
Objet : Disponibilité

Bonjour,

un menu enfant est de nouveau disponible chez table 6.
Information : à midi. Le détail à vérifier est jus de pomme.
Consigne : demander le jouet. Détail : 12 francs.

Alerte stock`;

const E4_2_CE_EMAIL_POOL_11 = buildExpressPool("e4-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un menu enfant", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un menu enfant",
    vfQ: "Le texte mentionne un menu enfant.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à midi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à midi",
    vfQ: "Le texte mentionne à midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["table 6", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "table 6",
    vfQ: "Le texte mentionne table 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["jus de pomme", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "jus de pomme",
    vfQ: "Le texte mentionne jus de pomme.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["12 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "12 francs",
    vfQ: "Le texte mentionne 12 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_12 = `De : Café Bellevue
Objet : Réponse à votre message

Bonjour,

Oui, nous avons une tarte aux pommes.
Vous pouvez passer. Information : à 15 h. Demandez la note café.
Ensuite, action simple : prendre une part maison. Détail : 8 francs.

Merci`;

const E4_2_CE_EMAIL_POOL_12 = buildExpressPool("e4-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une tarte aux pommes", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une tarte aux pommes",
    vfQ: "Le texte mentionne une tarte aux pommes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 15 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 15 h",
    vfQ: "Le texte mentionne à 15 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Café Bellevue", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Café Bellevue",
    vfQ: "Le texte mentionne Café Bellevue.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["café", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "café",
    vfQ: "Le texte mentionne café.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["8 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "8 francs",
    vfQ: "Le texte mentionne 8 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_13 = `De : Ardoise du jour
Objet : Information

Bonjour,

Aujourd'hui, nous proposons un plateau apéro.
C'est disponible chez bar du Centre. Information : de 17 h à 19 h. Détail : spritz.
Action conseillée : venir avec trois amis. Détail : 15 francs.

Bonne journée`;

const E4_2_CE_EMAIL_POOL_13 = buildExpressPool("e4-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un plateau apéro", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un plateau apéro",
    vfQ: "Le texte mentionne un plateau apéro.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["de 17 h à 19 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "de 17 h à 19 h",
    vfQ: "Le texte mentionne de 17 h à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["bar du Centre", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "bar du Centre",
    vfQ: "Le texte mentionne bar du Centre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["spritz", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "spritz",
    vfQ: "Le texte mentionne spritz.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["15 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "15 francs",
    vfQ: "Le texte mentionne 15 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_14 = `De : Rappel automatique
Objet : Rendez-vous

Bonjour,

Votre rappel concerne une soupe du jour.
Rendez-vous chez table 10. Information : à 12 h. Vérifiez pain.
Consigne : commander une entrée chaude. Détail : 9 francs.

Rappel automatique`;

const E4_2_CE_EMAIL_POOL_14 = buildExpressPool("e4-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une soupe du jour", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une soupe du jour",
    vfQ: "Le texte mentionne une soupe du jour.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 12 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 12 h",
    vfQ: "Le texte mentionne à 12 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["table 10", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "table 10",
    vfQ: "Le texte mentionne table 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["pain", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "pain",
    vfQ: "Le texte mentionne pain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["9 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "9 francs",
    vfQ: "Le texte mentionne 9 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_15 = `De : terrasse du lac
Objet : Nouveauté

Bonjour,

La nouveauté un plateau de fruits de mer arrive. Information : à 21 h.
Elle est liée à vin blanc. Pour la réserver, vous pouvez confirmer la table.
55 francs.

À bientôt`;

const E4_2_CE_EMAIL_POOL_15 = buildExpressPool("e4-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un plateau de fruits de mer", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un plateau de fruits de mer",
    vfQ: "Le texte mentionne un plateau de fruits de mer.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 21 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 21 h",
    vfQ: "Le texte mentionne à 21 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["terrasse du lac", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "terrasse du lac",
    vfQ: "Le texte mentionne terrasse du lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["vin blanc", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "vin blanc",
    vfQ: "Le texte mentionne vin blanc.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["55 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "55 francs",
    vfQ: "Le texte mentionne 55 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_16 = `De : Vendeur
Objet : Message noté

Bonjour,

J'ai bien noté votre demande pour un poulet rôti.
Je vous attends chez table 14. Information : à 19 h. Je prépare eau.
Sur place, vous pourrez servir sans gluten. Détail : 26 francs.

Le vendeur`;

const E4_2_CE_EMAIL_POOL_16 = buildExpressPool("e4-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un poulet rôti", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un poulet rôti",
    vfQ: "Le texte mentionne un poulet rôti.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 19 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 19 h",
    vfQ: "Le texte mentionne à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["table 14", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "table 14",
    vfQ: "Le texte mentionne table 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["eau", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "eau",
    vfQ: "Le texte mentionne eau.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["26 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "26 francs",
    vfQ: "Le texte mentionne 26 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_17 = `De : Programme fidélité
Objet : Votre offre

Bonjour,

Votre offre porte sur une crêpe sucrée.
Elle fonctionne chez Crêperie Bretonne; information : à 16 h. La condition est chocolat chaud.
N'oubliez pas cette action : choisir sucre ou chocolat. Détail : 10 francs.

Programme fidélité`;

const E4_2_CE_EMAIL_POOL_17 = buildExpressPool("e4-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une crêpe sucrée", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une crêpe sucrée",
    vfQ: "Le texte mentionne une crêpe sucrée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 16 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 16 h",
    vfQ: "Le texte mentionne à 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Crêperie Bretonne", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Crêperie Bretonne",
    vfQ: "Le texte mentionne Crêperie Bretonne.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["chocolat chaud", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "chocolat chaud",
    vfQ: "Le texte mentionne chocolat chaud.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["10 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "10 francs",
    vfQ: "Le texte mentionne 10 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_18 = `De : Formule Midi
Objet : Fête confirmée

Bonjour,

Pour votre fête, un plat du jour et dessert est réservé.
Information : entre 12 h et 14 h. La fiche indique café.
Consigne : manger rapidement. Détail : 22 francs.

Cordialement`;

const E4_2_CE_EMAIL_POOL_18 = buildExpressPool("e4-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un plat du jour et dessert", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un plat du jour et dessert",
    vfQ: "Le texte mentionne un plat du jour et dessert.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["entre 12 h et 14 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "entre 12 h et 14 h",
    vfQ: "Le texte mentionne entre 12 h et 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Formule Midi", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Formule Midi",
    vfQ: "Le texte mentionne Formule Midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["café", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "café",
    vfQ: "Le texte mentionne café.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["22 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "22 francs",
    vfQ: "Le texte mentionne 22 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_19 = `De : Confirmation
Objet : Retrait

Bonjour,

Votre retrait pour une salade niçoise est prêt chez terrasse 5.
Information : à 20 h. La note est rosé.
Consigne : garder la table dehors. Détail : 19 francs.

Confirmation`;

const E4_2_CE_EMAIL_POOL_19 = buildExpressPool("e4-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["une salade niçoise", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "une salade niçoise",
    vfQ: "Le texte mentionne une salade niçoise.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 20 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 20 h",
    vfQ: "Le texte mentionne à 20 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["terrasse 5", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "terrasse 5",
    vfQ: "Le texte mentionne terrasse 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["rosé", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "rosé",
    vfQ: "Le texte mentionne rosé.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["19 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "19 francs",
    vfQ: "Le texte mentionne 19 francs.",
    vfC: 0,
  }),
]);
const E4_2_CE_EMAIL_TEXT_20 = `De : Restaurant Vert
Objet : Idée week-end

Bonjour,

Pour ce week-end, nous conseillons un menu végétalien.
Information : à 19 h. Regardez smoothie avant de choisir.
Vous pourrez demander les options bio. Détail : 25 francs.

Bon week-end`;

const E4_2_CE_EMAIL_POOL_20 = buildExpressPool("e4-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel plat est mentionné ?",
    text: ["un menu végétalien", "une voiture", "un cahier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le plat est _________.",
    fill: "un menu végétalien",
    vfQ: "Le texte mentionne un menu végétalien.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 19 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 19 h",
    vfQ: "Le texte mentionne à 19 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où cela se passe-t-il ?",
    text: ["Restaurant Vert", "à la plage", "à l'aéroport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le lieu est _________.",
    fill: "Restaurant Vert",
    vfQ: "Le texte mentionne Restaurant Vert.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle boisson est mentionnée ?",
    text: ["smoothie", "de l'essence", "du savon"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boisson est _________.",
    fill: "smoothie",
    vfQ: "Le texte mentionne smoothie.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["25 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "25 francs",
    vfQ: "Le texte mentionne 25 francs.",
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
    title: "Menu collègues",
    situation: "",
    sourceMessage: {
      from: "Equipe",
      subject: "Repas entre collègues",
      body: `Bonjour,
Nous voulons organiser un repas ensemble vendredi. Attention, plusieurs collègues sont végétariens.
L'equipe`,
    },
    instruction: "Écrivez un e-mail à vos collègues pour proposer un menu de repas. Mentionnez les végétariens et proposez une entrée, un plat, un dessert et une boisson.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-2",
    title: "Aux bons Amis",
    situation: "",
    sourceMessage: {
      from: "Aux bons Amis",
      subject: "Menu du soir",
      body: `Bonjour,
Notre restaurant propose ce soir une salade de chevre, un risotto aux legumes et une tarte aux pommes.
Le restaurant`,
    },
    instruction: "Écrivez à votre ami végétarien pour l'inviter à dîner au restaurant Aux bons Amis. Donnez l'heure, l'adresse et une idée de plat végétarien.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-3",
    title: "Réservation",
    situation: "",
    sourceMessage: {
      from: "Restaurant Le Jardin",
      subject: "Reservations",
      body: `Bonjour,
Nous prenons les reservations par e-mail pour le déjeuner et le dîner.
Cordialement`,
    },
    instruction: "Écrivez au restaurant pour réserver une table. Donnez la date, l'heure, le nombre de personnes et demandez une option végétarienne.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-4",
    title: "Commande à emporter",
    situation: "",
    sourceMessage: {
      from: "Bistrot Central",
      subject: "Commande à emporter",
      body: `Bonjour,
Vous pouvez commander avant 11 h pour un retrait à midi.
Le bistrot`,
    },
    instruction: "Répondez au restaurant avec votre commande à emporter. Donnez les plats, les boissons, l'heure de retrait et votre nom.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-5",
    title: "Allergie",
    situation: "",
    sourceMessage: {
      from: "Restaurant Bellevue",
      subject: "Votre réservation",
      body: `Bonjour,
Votre table est confirmee pour samedi à 20 h. Signalez-nous toute allergie avant votre venue.
Cordialement`,
    },
    instruction: "Écrivez au restaurant pour expliquer une allergie alimentaire. Demandez quels plats sont possibles et restez poli.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-6",
    title: "Avis restaurant",
    situation: "",
    sourceMessage: {
      from: "Avis Gourmand",
      subject: "Votre expérience",
      body: `Bonjour,
Vous avez reserve via notre site. Voulez-vous laisser un avis sur le restaurant ?
Merci`,
    },
    instruction: "Répondez au site d'avis avec un court commentaire sur votre repas. Parlez de l'accueil, du plat, du prix et de votre impression générale.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-7",
    title: "Restaurant en famille",
    situation: "",
    sourceMessage: {
      from: "Famille",
      subject: "Repas dimanche",
      body: `Bonjour,
Ou pouvons-nous manger dimanche avec les enfants ? Propose une idée.
Bises`,
    },
    instruction: "Écrivez à votre famille pour proposer un restaurant pratique. Expliquez les plats possibles, le prix et pourquoi il convient aux enfants.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-8",
    title: "Menu anniversaire",
    situation: "",
    sourceMessage: {
      from: "Organisateur",
      subject: "Anniversaire de Marc",
      body: `Bonjour,
Nous devons choisir un menu simple pour l'anniversaire de Marc au restaurant.
Merci`,
    },
    instruction: "Répondez à l'organisateur en proposant un menu d'anniversaire au restaurant. Donnez une entrée, un plat, un dessert et une option sans viande.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-9",
    title: "Table terrasse",
    situation: "",
    sourceMessage: {
      from: "Café du Marche",
      subject: "Terrasse ouverte",
      body: `Bonjour,
Notre terrasse est ouverte quand la meteo est bonne. Les reservations sont possibles.
Cordialement`,
    },
    instruction: "Écrivez au restaurant pour demander une table en terrasse. Donnez le nombre de personnes, l'heure et une demande sur le soleil ou l'ombre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-10",
    title: "Restaurant trop cher",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Restaurant chic",
      body: `Salut,
J'ai reserve un restaurant chic samedi. Le menu est à 45 euros. Ca te va ?
Ami`,
    },
    instruction: "Répondez à votre ami en proposant un restaurant moins cher. Expliquez poliment votre raison et proposez un autre lieu.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-11",
    title: "Menu enfant",
    situation: "",
    sourceMessage: {
      from: "Restaurant Familial",
      subject: "Informations pratiques",
      body: `Bonjour,
Notre restaurant accueille les familles tous les midis.
Cordialement`,
    },
    instruction: "Écrivez au restaurant pour demander s'il y a un menu enfant. Donnez le nombre d'enfants et l'heure de votre venue.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-12",
    title: "Dîner avant cinéma",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Cinéma jeudi",
      body: `Salut,
La seance commence à 20 h. On mange avant ?
Ami`,
    },
    instruction: "Répondez à votre ami pour proposer un dîner avant le cinéma. Donnez le restaurant, l'heure et un plat que vous voulez essayer.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-13",
    title: "Repas de classe",
    situation: "",
    sourceMessage: {
      from: "Classe A1",
      subject: "Sortie après le cours",
      body: `Bonjour,
Plusieurs étudiants veulent manger ensemble après le cours de vendredi.
A bientot`,
    },
    instruction: "Écrivez au groupe de classe pour proposer un restaurant après le cours. Mentionnez l'heure, le prix approximatif et les préférences alimentaires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-14",
    title: "Plat du jour",
    situation: "",
    sourceMessage: {
      from: "Collègue",
      subject: "Idée pour midi",
      body: `Salut,
Tu as vu le plat du jour au restaurant pres du bureau ? Tu me conseilles quoi ?
Merci`,
    },
    instruction: "Répondez à votre collègue et recommandez le plat du jour. Décrivez le plat, le prix et pourquoi vous le conseillez.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-15",
    title: "Service lent",
    situation: "",
    sourceMessage: {
      from: "Restaurant",
      subject: "Votre retour",
      body: `Bonjour,
Nous esperons que votre repas s'est bien passe. Vos remarques sont importantes pour nous.
Cordialement`,
    },
    instruction: "Écrivez au restaurant pour expliquer poliment que le service etait lent. Décrivez la situation et demandez un geste commercial simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-16",
    title: "Repas international",
    situation: "",
    sourceMessage: {
      from: "Groupe international",
      subject: "Dîner de bienvenue",
      body: `Bonjour,
Nous organisons un dîner de bienvenue pour les nouveaux membres du groupe.
Merci`,
    },
    instruction: "Écrivez aux invites pour présenter un repas dans un restaurant international. Demandez les préférences alimentaires et confirmez l'heure.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-17",
    title: "Choix du dessert",
    situation: "",
    sourceMessage: {
      from: "Amie",
      subject: "Dessert",
      body: `Salut,
J'hesite pour le dessert ce soir. Tu as regarde le menu ?
Amie`,
    },
    instruction: "Répondez à votre amie en décrivant deux desserts du menu. Dites lequel vous préférez et demandez son avis.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-18",
    title: "Déjeuner rapide",
    situation: "",
    sourceMessage: {
      from: "Collègue",
      subject: "Peu de temps à midi",
      body: `Salut,
J'ai seulement trente minutes pour déjeuner aujourd'hui. Une idée ?
A plus`,
    },
    instruction: "Écrivez à un collègue pour proposer un déjeuner rapide. Donnez le nom du restaurant, l'heure et une formule simple.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-19",
    title: "Végétarien",
    situation: "",
    sourceMessage: {
      from: "Restaurant La Place",
      subject: "Menu de groupe",
      body: `Bonjour,
Pour les groupes, merci de signaler les regimes alimentaires avant la venue.
Cordialement`,
    },
    instruction: "Répondez au restaurant en demandant des précisions sur les plats végétariens. Dites combien de personnes sont concernées.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-2-pee-20",
    title: "Invitation dîner",
    situation: "",
    sourceMessage: {
      from: "Guide local",
      subject: "Nouveau restaurant",
      body: `Bonjour,
Un nouveau restaurant ouvre cette semaine dans votre quartier avec une cuisine simple et locale.
Le guide`,
    },
    instruction: "Écrivez à un ami pour l'inviter à dîner au restaurant. Donnez le lieu, l'heure, le type de cuisine et une raison de votre choix.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];

/* ════════════════════════════════════════════════════════════════════════════
   E4.3 — Aller à la boulangerie
   ════════════════════════════════════════════════════════════════════════════ */

const E4_3_CE_EMAIL_TEXT_1 = `De : Boulangerie Martin
Objet : une baguette tradition

Bonjour,

Votre demande est notée. Information principale : à 7 h. Le détail principal est 2 pièces.
Consigne : passer tôt. Détail : 2.80 francs.

Cordialement`;

const E4_3_CE_EMAIL_POOL_1 = buildExpressPool("e4-3-ce-email-1", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["une baguette tradition", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "une baguette tradition",
    vfQ: "Le texte mentionne une baguette tradition.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 7 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 7 h",
    vfQ: "Le texte mentionne à 7 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boulangerie Martin", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boulangerie Martin",
    vfQ: "Le texte mentionne Boulangerie Martin.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["2 pièces", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "2 pièces",
    vfQ: "Le texte mentionne 2 pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["2.80 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "2.80 francs",
    vfQ: "Le texte mentionne 2.80 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_2 = `De : Service client
Objet : Confirmation

Bonjour,

Nous confirmons des croissants au beurre chez Boulangerie du Lac.
Information : demain à 8 h. La note du dossier : 6 pièces.
Action demandée : réserver au prénom Marie. Détail : 12 francs.

Service client`;

const E4_3_CE_EMAIL_POOL_2 = buildExpressPool("e4-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["des croissants au beurre", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "des croissants au beurre",
    vfQ: "Le texte mentionne des croissants au beurre.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["demain à 8 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "demain à 8 h",
    vfQ: "Le texte mentionne demain à 8 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boulangerie du Lac", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boulangerie du Lac",
    vfQ: "Le texte mentionne Boulangerie du Lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["6 pièces", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "6 pièces",
    vfQ: "Le texte mentionne 6 pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["12 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "12 francs",
    vfQ: "Le texte mentionne 12 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_3 = `De : Pâtisserie Douceur
Objet : Rappel avant votre venue

Bonjour,

Avant de venir pour un gâteau au chocolat, vérifiez 1 gâteau.
Information indiquée : samedi à 10 h. Sur place, il faudra écrire le prénom.
35 francs.

Merci`;

const E4_3_CE_EMAIL_POOL_3 = buildExpressPool("e4-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["un gâteau au chocolat", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "un gâteau au chocolat",
    vfQ: "Le texte mentionne un gâteau au chocolat.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["samedi à 10 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi à 10 h",
    vfQ: "Le texte mentionne samedi à 10 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Pâtisserie Douceur", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Pâtisserie Douceur",
    vfQ: "Le texte mentionne Pâtisserie Douceur.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["1 gâteau", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "1 gâteau",
    vfQ: "Le texte mentionne 1 gâteau.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["35 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "35 francs",
    vfQ: "Le texte mentionne 35 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_4 = `De : Boutique en ligne
Objet : Votre suivi

Bonjour,

Votre demande pour un pain complet avance.
Point de retrait : Pain & Co. Information : ce matin.
Détail à confirmer : 1 pain. Consigne : prendre un sac.

Boutique en ligne`;

const E4_3_CE_EMAIL_POOL_4 = buildExpressPool("e4-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["un pain complet", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "un pain complet",
    vfQ: "Le texte mentionne un pain complet.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["ce matin", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "ce matin",
    vfQ: "Le texte mentionne ce matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Pain & Co", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Pain & Co",
    vfQ: "Le texte mentionne Pain & Co.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["1 pain", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "1 pain",
    vfQ: "Le texte mentionne 1 pain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["3.50 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "3.50 francs",
    vfQ: "Le texte mentionne 3.50 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_5 = `De : Boulangerie Centrale
Objet : Offre limitée

Bonjour,

L'offre sur une quiche lorraine est disponible. Information : à midi.
Elle concerne 4 parts. Pour en profiter, consigne : réchauffer cinq minutes.
18 francs.

À bientôt`;

const E4_3_CE_EMAIL_POOL_5 = buildExpressPool("e4-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["une quiche lorraine", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "une quiche lorraine",
    vfQ: "Le texte mentionne une quiche lorraine.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à midi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à midi",
    vfQ: "Le texte mentionne à midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boulangerie Centrale", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boulangerie Centrale",
    vfQ: "Le texte mentionne Boulangerie Centrale.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["4 parts", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "4 parts",
    vfQ: "Le texte mentionne 4 parts.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["18 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "18 francs",
    vfQ: "Le texte mentionne 18 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_6 = `De : Réservation
Objet : Préparation

Bonjour,

Nous préparons des viennoiseries assorties. Vous pouvez passer chez Viennoiserie Express. Information : vendredi à 7 h.
La fiche indique 12 pièces. Au comptoir, pensez à livrer à l'entreprise.
24 francs.

Réservation`;

const E4_3_CE_EMAIL_POOL_6 = buildExpressPool("e4-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["des viennoiseries assorties", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "des viennoiseries assorties",
    vfQ: "Le texte mentionne des viennoiseries assorties.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["vendredi à 7 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "vendredi à 7 h",
    vfQ: "Le texte mentionne vendredi à 7 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Viennoiserie Express", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Viennoiserie Express",
    vfQ: "Le texte mentionne Viennoiserie Express.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["12 pièces", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "12 pièces",
    vfQ: "Le texte mentionne 12 pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["24 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "24 francs",
    vfQ: "Le texte mentionne 24 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_7 = `De : Carte fidélité
Objet : Avantage du jour

Bonjour,

Votre avantage concerne du pain aux noix.
Il est disponible chez Maison du Pain. Information : à 17 h. Détail : 2 pains.
Pour l'activer, il faut couper les tranches. Détail : 7 francs.

Carte fidélité`;

const E4_3_CE_EMAIL_POOL_7 = buildExpressPool("e4-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["du pain aux noix", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "du pain aux noix",
    vfQ: "Le texte mentionne du pain aux noix.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 17 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 17 h",
    vfQ: "Le texte mentionne à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Maison du Pain", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Maison du Pain",
    vfQ: "Le texte mentionne Maison du Pain.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["2 pains", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "2 pains",
    vfQ: "Le texte mentionne 2 pains.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["7 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "7 francs",
    vfQ: "Le texte mentionne 7 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_8 = `De : Le Fournil
Objet : Dernière vérification

Bonjour,

Nous gardons des sandwichs jambon-fromage. Information : de 11 h à 14 h.
La note enregistrée est 3 sandwiches. Consigne : prendre la formule au moment de votre venue.
15 francs.

Cordialement`;

const E4_3_CE_EMAIL_POOL_8 = buildExpressPool("e4-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["des sandwichs jambon-fromage", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "des sandwichs jambon-fromage",
    vfQ: "Le texte mentionne des sandwichs jambon-fromage.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["de 11 h à 14 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "de 11 h à 14 h",
    vfQ: "Le texte mentionne de 11 h à 14 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Le Fournil", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Le Fournil",
    vfQ: "Le texte mentionne Le Fournil.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["3 sandwiches", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "3 sandwiches",
    vfQ: "Le texte mentionne 3 sandwiches.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["15 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "15 francs",
    vfQ: "Le texte mentionne 15 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_9 = `De : Support
Objet : Question reçue

Bonjour,

Vous avez posé une question sur une tarte aux pommes.
Réponse : chez Boulangerie des Alpes, c'est possible. Information : dimanche.
Il faut seulement réserver avant midi. 1 tarte. Détail : 22 francs.

Support`;

const E4_3_CE_EMAIL_POOL_9 = buildExpressPool("e4-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["une tarte aux pommes", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "une tarte aux pommes",
    vfQ: "Le texte mentionne une tarte aux pommes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["dimanche", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "dimanche",
    vfQ: "Le texte mentionne dimanche.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boulangerie des Alpes", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boulangerie des Alpes",
    vfQ: "Le texte mentionne Boulangerie des Alpes.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["1 tarte", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "1 tarte",
    vfQ: "Le texte mentionne 1 tarte.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["22 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "22 francs",
    vfQ: "Le texte mentionne 22 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_10 = `De : Boulangerie Rossi
Objet : Commande de groupe

Bonjour,

La commande pour des brioches est prévue. Information : le matin.
Elle porte la note 4 brioches. Consigne : payer ensemble avant le retrait.
8 francs.

Le magasin`;

const E4_3_CE_EMAIL_POOL_10 = buildExpressPool("e4-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["des brioches", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "des brioches",
    vfQ: "Le texte mentionne des brioches.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["le matin", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "le matin",
    vfQ: "Le texte mentionne le matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boulangerie Rossi", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boulangerie Rossi",
    vfQ: "Le texte mentionne Boulangerie Rossi.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["4 brioches", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "4 brioches",
    vfQ: "Le texte mentionne 4 brioches.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["8 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "8 francs",
    vfQ: "Le texte mentionne 8 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_11 = `De : Alerte stock
Objet : Disponibilité

Bonjour,

des éclairs au chocolat est de nouveau disponible chez Pâtisserie Fine.
Information : cet après-midi. Le détail à vérifier est 6 éclairs.
Consigne : choisir les parfums. Détail : 18 francs.

Alerte stock`;

const E4_3_CE_EMAIL_POOL_11 = buildExpressPool("e4-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["des éclairs au chocolat", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "des éclairs au chocolat",
    vfQ: "Le texte mentionne des éclairs au chocolat.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["cet après-midi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "cet après-midi",
    vfQ: "Le texte mentionne cet après-midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Pâtisserie Fine", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Pâtisserie Fine",
    vfQ: "Le texte mentionne Pâtisserie Fine.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["6 éclairs", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "6 éclairs",
    vfQ: "Le texte mentionne 6 éclairs.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["18 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "18 francs",
    vfQ: "Le texte mentionne 18 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_12 = `De : Boulangerie Nyon
Objet : Réponse à votre message

Bonjour,

Oui, nous avons une fougasse aux olives.
Vous pouvez passer. Information : à midi. Demandez la note 2 pièces.
Ensuite, action simple : demander un sachet. Détail : 9 francs.

Merci`;

const E4_3_CE_EMAIL_POOL_12 = buildExpressPool("e4-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["une fougasse aux olives", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "une fougasse aux olives",
    vfQ: "Le texte mentionne une fougasse aux olives.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à midi", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à midi",
    vfQ: "Le texte mentionne à midi.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boulangerie Nyon", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boulangerie Nyon",
    vfQ: "Le texte mentionne Boulangerie Nyon.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["2 pièces", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "2 pièces",
    vfQ: "Le texte mentionne 2 pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["9 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "9 francs",
    vfQ: "Le texte mentionne 9 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_13 = `De : Ardoise du jour
Objet : Information

Bonjour,

Aujourd'hui, nous proposons un pain de campagne.
C'est disponible chez Fournil Tradition. Information : toute la journée. Détail : 1 pain.
Action conseillée : demander la cuisson foncée. Détail : 4 francs.

Bonne journée`;

const E4_3_CE_EMAIL_POOL_13 = buildExpressPool("e4-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["un pain de campagne", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "un pain de campagne",
    vfQ: "Le texte mentionne un pain de campagne.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["toute la journée", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "toute la journée",
    vfQ: "Le texte mentionne toute la journée.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Fournil Tradition", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Fournil Tradition",
    vfQ: "Le texte mentionne Fournil Tradition.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["1 pain", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "1 pain",
    vfQ: "Le texte mentionne 1 pain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["4 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "4 francs",
    vfQ: "Le texte mentionne 4 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_14 = `De : Rappel automatique
Objet : Rendez-vous

Bonjour,

Votre rappel concerne du pain de mie.
Rendez-vous chez Coop boulangerie. Information : ce soir. Vérifiez 2 paquets.
Consigne : acheter avant fermeture. Détail : 5 francs.

Rappel automatique`;

const E4_3_CE_EMAIL_POOL_14 = buildExpressPool("e4-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["du pain de mie", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "du pain de mie",
    vfQ: "Le texte mentionne du pain de mie.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["ce soir", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "ce soir",
    vfQ: "Le texte mentionne ce soir.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Coop boulangerie", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Coop boulangerie",
    vfQ: "Le texte mentionne Coop boulangerie.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["2 paquets", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "2 paquets",
    vfQ: "Le texte mentionne 2 paquets.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["5 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "5 francs",
    vfQ: "Le texte mentionne 5 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_15 = `De : Artisan Boulanger
Objet : Nouveauté

Bonjour,

La nouveauté du pain sans gluten arrive. Information : à 7 h.
Elle est liée à 1 pain. Pour la réserver, vous pouvez réserver la veille.
5.50 francs.

À bientôt`;

const E4_3_CE_EMAIL_POOL_15 = buildExpressPool("e4-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["du pain sans gluten", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "du pain sans gluten",
    vfQ: "Le texte mentionne du pain sans gluten.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["à 7 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "à 7 h",
    vfQ: "Le texte mentionne à 7 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Artisan Boulanger", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Artisan Boulanger",
    vfQ: "Le texte mentionne Artisan Boulanger.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["1 pain", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "1 pain",
    vfQ: "Le texte mentionne 1 pain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["5.50 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "5.50 francs",
    vfQ: "Le texte mentionne 5.50 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_16 = `De : Vendeur
Objet : Message noté

Bonjour,

J'ai bien noté votre demande pour des chaussons aux pommes.
Je vous attends chez Boulangerie Soleil. Information : le matin. Je prépare 8 pièces.
Sur place, vous pourrez mettre de côté. Détail : 16 francs.

Le vendeur`;

const E4_3_CE_EMAIL_POOL_16 = buildExpressPool("e4-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["des chaussons aux pommes", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "des chaussons aux pommes",
    vfQ: "Le texte mentionne des chaussons aux pommes.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["le matin", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "le matin",
    vfQ: "Le texte mentionne le matin.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boulangerie Soleil", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boulangerie Soleil",
    vfQ: "Le texte mentionne Boulangerie Soleil.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["8 pièces", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "8 pièces",
    vfQ: "Le texte mentionne 8 pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["16 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "16 francs",
    vfQ: "Le texte mentionne 16 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_17 = `De : Programme fidélité
Objet : Votre offre

Bonjour,

Votre offre porte sur des madeleines.
Elle fonctionne chez Pains & Gourmandises; information : après l'école. La condition est 12 pièces.
N'oubliez pas cette action : montrer la carte. Détail : 10 francs.

Programme fidélité`;

const E4_3_CE_EMAIL_POOL_17 = buildExpressPool("e4-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["des madeleines", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "des madeleines",
    vfQ: "Le texte mentionne des madeleines.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["après l'école", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "après l'école",
    vfQ: "Le texte mentionne après l'école.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Pains & Gourmandises", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Pains & Gourmandises",
    vfQ: "Le texte mentionne Pains & Gourmandises.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["12 pièces", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "12 pièces",
    vfQ: "Le texte mentionne 12 pièces.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["10 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "10 francs",
    vfQ: "Le texte mentionne 10 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_18 = `De : Pâtisserie Mariage
Objet : Fête confirmée

Bonjour,

Pour votre fête, une pièce montée est réservé.
Information : samedi à 16 h. La fiche indique 3 étages.
Consigne : confirmer le prénom. Détail : 120 francs.

Cordialement`;

const E4_3_CE_EMAIL_POOL_18 = buildExpressPool("e4-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["une pièce montée", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "une pièce montée",
    vfQ: "Le texte mentionne une pièce montée.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["samedi à 16 h", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "samedi à 16 h",
    vfQ: "Le texte mentionne samedi à 16 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Pâtisserie Mariage", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Pâtisserie Mariage",
    vfQ: "Le texte mentionne Pâtisserie Mariage.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["3 étages", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "3 étages",
    vfQ: "Le texte mentionne 3 étages.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["120 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "120 francs",
    vfQ: "Le texte mentionne 120 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_19 = `De : Confirmation
Objet : Retrait

Bonjour,

Votre retrait pour un pain aux céréales est prêt chez Boulangerie Village.
Information : tous les matins. La note est 1 pain.
Consigne : présenter le numéro. Détail : 4.20 francs.

Confirmation`;

const E4_3_CE_EMAIL_POOL_19 = buildExpressPool("e4-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["un pain aux céréales", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "un pain aux céréales",
    vfQ: "Le texte mentionne un pain aux céréales.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["tous les matins", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "tous les matins",
    vfQ: "Le texte mentionne tous les matins.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Boulangerie Village", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Boulangerie Village",
    vfQ: "Le texte mentionne Boulangerie Village.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["1 pain", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "1 pain",
    vfQ: "Le texte mentionne 1 pain.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["4.20 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "4.20 francs",
    vfQ: "Le texte mentionne 4.20 francs.",
    vfC: 0,
  }),
]);
const E4_3_CE_EMAIL_TEXT_20 = `De : Pâtisserie Fine
Objet : Idée week-end

Bonjour,

Pour ce week-end, nous conseillons une boîte de macarons.
Information : 24 h avant. Regardez 12 macarons avant de choisir.
Vous pourrez choisir les parfums. Détail : 24 francs.

Bon week-end`;

const E4_3_CE_EMAIL_POOL_20 = buildExpressPool("e4-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Quel type de document est-ce ?",
    text: ["un e-mail", "une facture d'électricité", "une carte scolaire"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "un e-mail",
    vfQ: "Le texte mentionne un e-mail.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Quel produit est demandé ?",
    text: ["une boîte de macarons", "une télévision", "un vélo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le produit est _________.",
    fill: "une boîte de macarons",
    vfQ: "Le texte mentionne une boîte de macarons.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Quand cela se passe-t-il ?",
    text: ["24 h avant", "à minuit", "en 1990"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "C'est _________.",
    fill: "24 h avant",
    vfQ: "Le texte mentionne 24 h avant.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Quel commerce est mentionné ?",
    text: ["Pâtisserie Fine", "une école", "une banque"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le commerce est _________.",
    fill: "Pâtisserie Fine",
    vfQ: "Le texte mentionne Pâtisserie Fine.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Quelle quantité est indiquée ?",
    text: ["12 macarons", "mille pièces", "rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La quantité est _________.",
    fill: "12 macarons",
    vfQ: "Le texte mentionne 12 macarons.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel prix est indiqué ?",
    text: ["24 francs", "1000 francs", "gratuit toujours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix est _________.",
    fill: "24 francs",
    vfQ: "Le texte mentionne 24 francs.",
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
    title: "Commande à Ana",
    situation: "",
    sourceMessage: {
      from: "Ana",
      subject: "Boulangerie à midi",
      body: `Salut,
Je vais à la boulangerie pour le déjeuner. Tu veux quelque chose ?
Ana`,
    },
    instruction: "Répondez à Ana pour lui dire ce que vous voulez à la boulangerie pour le déjeuner. Précisez le sandwich, le dessert, la boisson et une information utile.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-2",
    title: "Livraison petit déjeuner",
    situation: "",
    sourceMessage: {
      from: "Boulangerie du Centre",
      subject: "Livraison petit déjeuner",
      body: `Bonjour,
Nous pouvons livrer des formules petit déjeuner pour les entreprises et les particuliers. Merci d'envoyer les details de votre commande.
Cordialement`,
    },
    instruction: "Écrivez un e-mail pour donner des précisions sur la livraison de votre petit déjeuner. Indiquez la formule, le nombre de personnes, l'heure et le jour.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-3",
    title: "Commande de pain",
    situation: "",
    sourceMessage: {
      from: "Boulangerie Morel",
      subject: "Commandes du jour",
      body: `Bonjour,
Les commandes de pain peuvent être reservees par e-mail avant 16 h.
Cordialement`,
    },
    instruction: "Écrivez à la boulangerie pour commander du pain pour un dîner. Donnez les quantites, l'heure de retrait et votre nom.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-4",
    title: "Petit déjeuner bureau",
    situation: "",
    sourceMessage: {
      from: "Responsable",
      subject: "Petit déjeuner equipe",
      body: `Bonjour,
Nous faisons un petit déjeuner d'equipe vendredi. Peux-tu proposer une commande à la boulangerie ?
Merci`,
    },
    instruction: "Répondez à votre responsable avec une proposition de commande pour un petit déjeuner au bureau. Indiquez les viennoiseries, les boissons et le nombre de personnes.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-5",
    title: "Sandwich spécial",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Je passe à la boulangerie",
      body: `Salut,
Je passe à la boulangerie avant de te rejoindre. Tu veux quelque chose ?
Ami`,
    },
    instruction: "Écrivez à un ami pour lui demander un sandwich sans beurre. Précisez le pain, la garniture, le dessert et la boisson.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-6",
    title: "Gateau anniversaire",
    situation: "",
    sourceMessage: {
      from: "Boulangerie Patisserie Claire",
      subject: "Gateaux sur commande",
      body: `Bonjour,
Nous preparons des gateaux d'anniversaire sur commande avec un delai de vingt-quatre heures.
Cordialement`,
    },
    instruction: "Écrivez à la boulangerie pour commander un gateau d'anniversaire. Donnez le nombre de personnes, le parfum, le texte sur le gateau et l'heure de retrait.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-7",
    title: "Baguettes dimanche",
    situation: "",
    sourceMessage: {
      from: "Boulangerie Saint-Paul",
      subject: "Réservation du dimanche",
      body: `Bonjour,
Le dimanche matin, il est conseille de réserver les baguettes avant 10 h.
Merci`,
    },
    instruction: "Répondez à la boulangerie pour réserver des baguettes dimanche matin. Donnez la quantite, l'heure et votre nom.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-8",
    title: "Pause gouter",
    situation: "",
    sourceMessage: {
      from: "Centre de loisirs",
      subject: "Gouter mercredi",
      body: `Bonjour,
Nous avons besoin d'un gouter simple pour les enfants mercredi après-midi.
Merci`,
    },
    instruction: "Écrivez un e-mail pour commander un gouter pour des enfants. Précisez les pains au chocolat, les jus, les serviettes et l'heure.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-9",
    title: "Sandwich végétarien",
    situation: "",
    sourceMessage: {
      from: "Ana",
      subject: "Commande boulangerie",
      body: `Salut,
Je peux prendre les commandes avant 11 h 30. Dis-moi exactement ce que tu veux.
Ana`,
    },
    instruction: "Répondez à Ana en demandant un sandwich végétarien. Dites les ingredients que vous voulez, ceux que vous ne voulez pas et la boisson choisie.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-10",
    title: "Disponibilite croissants",
    situation: "",
    sourceMessage: {
      from: "Boulangerie du Parc",
      subject: "Viennoiseries",
      body: `Bonjour,
Nos croissants et pains au chocolat sont disponibles sur réservation pour les grandes quantites.
Cordialement`,
    },
    instruction: "Écrivez à la boulangerie pour demander le prix et la disponibilite de croissants pour demain matin. Donnez le nombre souhaite.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-11",
    title: "Déjeuner en train",
    situation: "",
    sourceMessage: {
      from: "Ami",
      subject: "Repas avant le train",
      body: `Salut,
Je peux acheter quelque chose à la boulangerie avant notre train. Tu veux quoi ?
Ami`,
    },
    instruction: "Répondez à votre ami qui achete le repas avant le train. Précisez le sandwich, le dessert, la boisson et l'heure du depart.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-12",
    title: "Commande familiale",
    situation: "",
    sourceMessage: {
      from: "Boulangerie des Lilas",
      subject: "Commandes de groupe",
      body: `Bonjour,
Pour les commandes de groupe, merci de nous envoyer les produits et les quantites.
Cordialement`,
    },
    instruction: "Écrivez à la boulangerie pour une commande familiale de déjeuner. Indiquez les choix de chacun, les quantites et l'heure de retrait.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-13",
    title: "Pain spécial",
    situation: "",
    sourceMessage: {
      from: "Boulangerie Artisanale",
      subject: "Pains speciaux",
      body: `Bonjour,
Nous proposons plusieurs pains speciaux selon les jours de la semaine.
Cordialement`,
    },
    instruction: "Écrivez à la boulangerie pour demander s'il y a du pain complet ou du pain aux cereales. Expliquez pour quel repas vous en avez besoin.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-14",
    title: "Retrait en retard",
    situation: "",
    sourceMessage: {
      from: "Boulangerie",
      subject: "Commande prete",
      body: `Bonjour,
Votre commande est prete et vous attend à partir de 11 h.
Merci`,
    },
    instruction: "Répondez à la boulangerie pour prevenir que vous retirez votre commande plus tard. Donnez la nouvelle heure et présentez vos excuses.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-15",
    title: "Formule midi",
    situation: "",
    sourceMessage: {
      from: "Boulangerie Express",
      subject: "Formules midi",
      body: `Bonjour,
Nos formules midi comprennent un sandwich, un dessert et une boisson.
Cordialement`,
    },
    instruction: "Écrivez à la boulangerie pour choisir une formule midi. Précisez le sandwich, le dessert, la boisson, votre nom et l'heure.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-16",
    title: "Commande de classe",
    situation: "",
    sourceMessage: {
      from: "Secrétariat de l'école",
      subject: "Petit déjeuner de classe",
      body: `Bonjour,
La classe souhaite organiser un petit déjeuner vendredi matin. Il faut contacter la boulangerie.
Merci`,
    },
    instruction: "Écrivez un e-mail pour commander des viennoiseries pour une classe. Donnez le nombre d'élèves, les quantites et le moment de livraison.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-17",
    title: "Oubli de commande",
    situation: "",
    sourceMessage: {
      from: "Boulangerie Martin",
      subject: "Commandes",
      body: `Bonjour,
Les commandes se font normalement la veille, mais vous pouvez nous contacter en cas de besoin.
Cordialement`,
    },
    instruction: "Écrivez à la boulangerie pour demander si une commande tardive est encore possible. Expliquez la situation et donnez les produits souhaites.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-18",
    title: "Remerciement",
    situation: "",
    sourceMessage: {
      from: "Boulangere",
      subject: "Votre avis",
      body: `Bonjour,
Merci pour votre commande de ce matin. Votre avis nous intéressé.
La boulangere`,
    },
    instruction: "Écrivez un e-mail de remerciement à la boulangere après une bonne commande. Dites ce que vous avez aime et quand vous pensez revenir.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-19",
    title: "Autre boulangerie",
    situation: "",
    sourceMessage: {
      from: "Collègue",
      subject: "Boulangerie fermee",
      body: `Salut,
Notre boulangerie habituelle est fermee aujourd'hui. Tu connais une autre adresse ?
Merci`,
    },
    instruction: "Répondez à votre collègue en proposant une autre boulangerie parce que la boulangerie habituelle est fermee. Expliquez quoi acheter et ou elle se trouve.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e4-3-pee-20",
    title: "Commande precise",
    situation: "",
    sourceMessage: {
      from: "Boulangerie Victor",
      subject: "Commande par e-mail",
      body: `Bonjour,
Pour eviter l'attente, envoyez votre commande avec toutes les précisions nécessaires.
Cordialement`,
    },
    instruction: "Écrivez à la boulangerie avec une commande très precise. Donnez les produits, les quantites, le nom, l'heure de retrait et une demande particuliere.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
