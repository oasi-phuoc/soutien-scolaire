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

/* ── Compréhension écrite — E2.3 Le règlement de l'immeuble ── */

const CE_TEXT_1 = `Affichage hall d'entrée

Règlement de l'immeuble — Article 3
Le silence est obligatoire après 22 h.
Sanction : avertissement écrit.
Horaires concernés : 22 h – 7 h.
Pour toute question : le gardien.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Sans confirmation, la place n'est pas garantie.
Un plan simple est disponible à l'accueil.`;

const CE_POOL_1 = buildExpressPool("e2-3-1", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 3", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "3",
    vfQ: "C'est l'article 3.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Le silence est obligatoire après 22 h", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Le",
    vfQ: "Règle : Le silence est obligatoire après 22 h....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Avertissement écrit", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Sanction : avertissement écrit.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["22 h – 7 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "22",
    vfQ: "Horaires : 22 h – 7 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["le gardien", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "le",
    vfQ: "Contact : le gardien.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_2 = `Note syndic

Règlement de l'immeuble — Article 7
Les animaux doivent être tenus en laisse.
Sanction : amende de 50 francs.
Horaires concernés : tous les jours.
Pour toute question : syndic@copro.ch.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Nous restons disponibles pour vous aider.`;

const CE_POOL_2 = buildExpressPool("e2-3-2", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 7", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "7",
    vfQ: "C'est l'article 7.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Les animaux doivent être tenus en laisse", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Les",
    vfQ: "Règle : Les animaux doivent être tenus en laisse...",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 50 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 50 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["syndic@copro.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "syndic@copro.ch",
    vfQ: "Contact : syndic@copro.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_3 = `Rappel locataires

Règlement de l'immeuble — Article 12
Interdiction de fumer dans les parties communes.
Sanction : amende de 100 francs.
Horaires concernés : 24 h/24.
Pour toute question : la régie.
C'est important pour moi, merci beaucoup.
Bonne journée à toutes et à tous.
Ce document complète les informations déjà données.
Nous comptons sur vous.
J'ai noté votre numéro dans mon téléphone.
Le message est aussi envoyé au groupe WhatsApp.`;

const CE_POOL_3 = buildExpressPool("e2-3-3", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 12", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "12",
    vfQ: "C'est l'article 12.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Interdiction de fumer dans les parties communes", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Interdiction",
    vfQ: "Règle : Interdiction de fumer dans les parties c...",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 100 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 100 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["24 h/24", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "24",
    vfQ: "Horaires : 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["la régie", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "la",
    vfQ: "Contact : la régie.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_4 = `Message groupe immeuble

Règlement de l'immeuble — Article 5
Le linge ne doit pas sécher sur les balcons.
Sanction : avertissement.
Horaires concernés : 8 h – 20 h.
Pour toute question : le concierge.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const CE_POOL_4 = buildExpressPool("e2-3-4", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 5", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "5",
    vfQ: "C'est l'article 5.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Le linge ne doit pas sécher sur les balcons", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Le",
    vfQ: "Règle : Le linge ne doit pas sécher sur les balc...",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Avertissement", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Sanction : avertissement.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["8 h – 20 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "8",
    vfQ: "Horaires : 8 h – 20 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["le concierge", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "le",
    vfQ: "Contact : le concierge.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_5 = `Avis ascenseur

Règlement de l'immeuble — Article 9
Maximum 4 personnes dans l'ascenseur.
Sanction : interdiction d'usage.
Horaires concernés : tous les jours.
Pour toute question : 079 111 22 33.
Nous sommes là pour vous aider.
Gardez ce texte pour vous en souvenir.
Les horaires habituels restent les mêmes.
Une question ? Écrivez ou téléphonez.
Merci encore, et à bientôt.`;

const CE_POOL_5 = buildExpressPool("e2-3-5", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 9", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "9",
    vfQ: "C'est l'article 9.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Maximum 4 personnes dans l'ascenseur", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Maximum",
    vfQ: "Règle : Maximum 4 personnes dans l'ascenseur....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Interdiction d'usage", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "interdiction",
    vfQ: "Sanction : interdiction d'usage.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["079 111 22 33", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "079",
    vfQ: "Contact : 079 111 22 33.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "interdiction",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_6 = `Règlement piscine

Règlement de l'immeuble — Article 15
Douche obligatoire avant la baignade.
Sanction : exclusion temporaire.
Horaires concernés : 7 h – 21 h.
Pour toute question : piscine@immeuble.ch.
Si tu veux, on peut faire une liste ensemble.
Le budget reste simple et raisonnable.
On pourra aussi inviter une autre personne.
N'hésite pas à me répondre quand tu peux.
Merci de lire attentivement toutes les informations.
En cas de doute, demandez de l'aide à l'accueil.`;

const CE_POOL_6 = buildExpressPool("e2-3-6", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 15", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "15",
    vfQ: "C'est l'article 15.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Douche obligatoire avant la baignade", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Douche",
    vfQ: "Règle : Douche obligatoire avant la baignade....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Exclusion temporaire", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "exclusion",
    vfQ: "Sanction : exclusion temporaire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["7 h – 21 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "7",
    vfQ: "Horaires : 7 h – 21 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["piscine@immeuble.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "piscine@immeuble.ch",
    vfQ: "Contact : piscine@immeuble.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "exclusion",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_7 = `Note parking

Règlement de l'immeuble — Article 8
Une place par appartement seulement.
Sanction : amende de 80 francs.
Horaires concernés : 24 h/24.
Pour toute question : le gardien.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
C'est important pour moi, merci beaucoup.`;

const CE_POOL_7 = buildExpressPool("e2-3-7", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 8", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "8",
    vfQ: "C'est l'article 8.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Une place par appartement seulement", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Une",
    vfQ: "Règle : Une place par appartement seulement....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 80 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 80 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["24 h/24", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "24",
    vfQ: "Horaires : 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["le gardien", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "le",
    vfQ: "Contact : le gardien.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_8 = `Affichage cave

Règlement de l'immeuble — Article 11
Interdiction de stocker des produits inflammables.
Sanction : retrait immédiat.
Horaires concernés : tous les jours.
Pour toute question : syndic@copro.ch.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Joignez les documents demandés si nécessaire.
Merci de votre attention et de votre patience.`;

const CE_POOL_8 = buildExpressPool("e2-3-8", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 11", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "11",
    vfQ: "C'est l'article 11.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Interdiction de stocker des produits inflammables", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Interdiction",
    vfQ: "Règle : Interdiction de stocker des produits inf...",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Retrait immédiat", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "retrait",
    vfQ: "Sanction : retrait immédiat.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["syndic@copro.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "syndic@copro.ch",
    vfQ: "Contact : syndic@copro.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "retrait",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_9 = `Rappel bruit

Règlement de l'immeuble — Article 2
Pas de musique forte après 20 h.
Sanction : amende de 200 francs.
Horaires concernés : 20 h – 8 h.
Pour toute question : voisins@immeuble.ch.
Je joins les détails importants juste après.
Si le plan change, je te préviens tout de suite.
C'est important pour moi, merci de lire jusqu'à la fin.
Tu peux partager ce message si besoin.
Pensez à arriver un peu en avance.
Bonne journée et à tout de suite !`;

const CE_POOL_9 = buildExpressPool("e2-3-9", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 2", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "2",
    vfQ: "C'est l'article 2.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Pas de musique forte après 20 h", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Pas",
    vfQ: "Règle : Pas de musique forte après 20 h....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 200 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 200 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["20 h – 8 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "20",
    vfQ: "Horaires : 20 h – 8 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["voisins@immeuble.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "voisins@immeuble.ch",
    vfQ: "Contact : voisins@immeuble.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_10 = `Règlement jardin

Règlement de l'immeuble — Article 18
Le jardin ferme à 21 h.
Sanction : exclusion.
Horaires concernés : 7 h – 21 h.
Pour toute question : le jardinier.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Pensez à arriver un peu en avance.
Merci de votre attention et de votre patience.`;

const CE_POOL_10 = buildExpressPool("e2-3-10", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 18", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "18",
    vfQ: "C'est l'article 18.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Le jardin ferme à 21 h", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Le",
    vfQ: "Règle : Le jardin ferme à 21 h....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Exclusion", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "exclusion",
    vfQ: "Sanction : exclusion.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["7 h – 21 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "7",
    vfQ: "Horaires : 7 h – 21 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["le jardinier", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "le",
    vfQ: "Contact : le jardinier.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "exclusion",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_11 = `Note poubelles

Règlement de l'immeuble — Article 6
Les poubelles doivent être sorties le lundi matin.
Sanction : frais de nettoyage.
Horaires concernés : 6 h – 8 h.
Pour toute question : concierge@mail.ch.
Les animaux ne sont pas autorisés, sauf chiens guides.
Photographies autorisées sans flash.
Un point d'eau potable est gratuit près de l'entrée.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Nous restons disponibles pour vous aider.`;

const CE_POOL_11 = buildExpressPool("e2-3-11", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 6", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "6",
    vfQ: "C'est l'article 6.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Les poubelles doivent être sorties le lundi matin", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Les",
    vfQ: "Règle : Les poubelles doivent être sorties le lu...",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Frais de nettoyage", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "frais",
    vfQ: "Sanction : frais de nettoyage.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["6 h – 8 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "6",
    vfQ: "Horaires : 6 h – 8 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["concierge@mail.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "concierge@mail.ch",
    vfQ: "Contact : concierge@mail.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "frais",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_12 = `Avis vélo

Règlement de l'immeuble — Article 14
Les vélos ne doivent pas bloquer l'entrée.
Sanction : mise en fourrière.
Horaires concernés : 24 h/24.
Pour toute question : le gardien.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Bonne journée à toutes et à tous.`;

const CE_POOL_12 = buildExpressPool("e2-3-12", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 14", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "14",
    vfQ: "C'est l'article 14.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Les vélos ne doivent pas bloquer l'entrée", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Les",
    vfQ: "Règle : Les vélos ne doivent pas bloquer l'entré...",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Mise en fourrière", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "mise",
    vfQ: "Sanction : mise en fourrière.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["24 h/24", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "24",
    vfQ: "Horaires : 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["le gardien", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "le",
    vfQ: "Contact : le gardien.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "mise",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_13 = `Règlement visiteurs

Règlement de l'immeuble — Article 10
Les visiteurs doivent annoncer leur arrivée.
Sanction : refus d'accès.
Horaires concernés : 8 h – 22 h.
Pour toute question : interphone.
Les toilettes se trouvent au fond du couloir.
Une version en plusieurs langues est disponible à l'accueil.
Les informations importantes sont déjà indiquées plus haut.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.`;

const CE_POOL_13 = buildExpressPool("e2-3-13", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 10", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "10",
    vfQ: "C'est l'article 10.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Les visiteurs doivent annoncer leur arrivée", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Les",
    vfQ: "Règle : Les visiteurs doivent annoncer leur arri...",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Refus d'accès", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "refus",
    vfQ: "Sanction : refus d'accès.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["8 h – 22 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "8",
    vfQ: "Horaires : 8 h – 22 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["interphone", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "interphone",
    vfQ: "Contact : interphone.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "refus",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_14 = `Affichage laverie

Règlement de l'immeuble — Article 16
Une machine à la fois par foyer.
Sanction : interdiction 1 semaine.
Horaires concernés : 7 h – 22 h.
Pour toute question : laverie@immeuble.ch.
Un point d'eau potable est gratuit près de l'entrée.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Les horaires habituels restent les mêmes.`;

const CE_POOL_14 = buildExpressPool("e2-3-14", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 16", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "16",
    vfQ: "C'est l'article 16.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Une machine à la fois par foyer", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Une",
    vfQ: "Règle : Une machine à la fois par foyer....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Interdiction 1 semaine", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "interdiction",
    vfQ: "Sanction : interdiction 1 semaine.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["7 h – 22 h", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "7",
    vfQ: "Horaires : 7 h – 22 h.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["laverie@immeuble.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "laverie@immeuble.ch",
    vfQ: "Contact : laverie@immeuble.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "interdiction",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_15 = `Note déménagement

Règlement de l'immeuble — Article 4
Déménagement uniquement en semaine.
Sanction : amende de 150 francs.
Horaires concernés : lundi – vendredi.
Pour toute question : régie@immo.ch.
Nous comptons sur vous.
Après cela, vous recevrez un petit rappel.
Gardez une copie papier si possible.
Le cachet de la date est important.
Sans confirmation, la place n'est pas garantie.
Passe le bonjour à tout le monde.`;

const CE_POOL_15 = buildExpressPool("e2-3-15", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 4", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "4",
    vfQ: "C'est l'article 4.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Déménagement uniquement en semaine", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Déménagement",
    vfQ: "Règle : Déménagement uniquement en semaine....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 150 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 150 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["Lundi – vendredi", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "lundi",
    vfQ: "Horaires : lundi – vendredi.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["régie@immo.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "régie@immo.ch",
    vfQ: "Contact : régie@immo.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_16 = `Rappel animaux

Règlement de l'immeuble — Article 13
Maximum un animal par appartement.
Sanction : avertissement.
Horaires concernés : tous les jours.
Pour toute question : syndic@copro.ch.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
Vous pouvez demander de l'aide si besoin.
Les informations importantes sont déjà notées plus haut.
Merci de confirmer la bonne réception.
Merci de votre attention et de votre patience.`;

const CE_POOL_16 = buildExpressPool("e2-3-16", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 13", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "13",
    vfQ: "C'est l'article 13.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Maximum un animal par appartement", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Maximum",
    vfQ: "Règle : Maximum un animal par appartement....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Avertissement", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Sanction : avertissement.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["syndic@copro.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "syndic@copro.ch",
    vfQ: "Contact : syndic@copro.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_17 = `Règlement barbecue

Règlement de l'immeuble — Article 19
Barbecue interdit sur les balcons.
Sanction : amende de 100 francs.
Horaires concernés : été seulement.
Pour toute question : le syndic.
Les animaux ne sont pas autorisés, sauf chiens guides.
Photographies autorisées sans flash.
Un point d'eau potable est gratuit près de l'entrée.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Vous pouvez répondre directement à ce message.`;

const CE_POOL_17 = buildExpressPool("e2-3-17", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 19", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "19",
    vfQ: "C'est l'article 19.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Barbecue interdit sur les balcons", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Barbecue",
    vfQ: "Règle : Barbecue interdit sur les balcons....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Amende de 100 francs", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Sanction : amende de 100 francs.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["Été seulement", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "été",
    vfQ: "Horaires : été seulement.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["le syndic", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "le",
    vfQ: "Contact : le syndic.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "amende",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_18 = `Avis interphone

Règlement de l'immeuble — Article 17
Ne pas laisser entrer des inconnus.
Sanction : responsabilité locataire.
Horaires concernés : 24 h/24.
Pour toute question : la sécurité.
Les toilettes se trouvent au fond du couloir.
Une version en plusieurs langues est disponible à l'accueil.
C'est important pour moi, merci beaucoup.
Merci de ne pas bloquer les issues de secours.
Le personnel porte un badge visible.
Les animaux ne sont pas autorisés, sauf chiens guides.`;

const CE_POOL_18 = buildExpressPool("e2-3-18", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 17", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "17",
    vfQ: "C'est l'article 17.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Ne pas laisser entrer des inconnus", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Ne",
    vfQ: "Règle : Ne pas laisser entrer des inconnus....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Responsabilité locataire", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "responsabilité",
    vfQ: "Sanction : responsabilité locataire.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["24 h/24", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "24",
    vfQ: "Horaires : 24 h/24.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["la sécurité", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "la",
    vfQ: "Contact : la sécurité.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "responsabilité",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_19 = `Note parties communes

Règlement de l'immeuble — Article 1
Respecter la propreté des lieux.
Sanction : frais de nettoyage.
Horaires concernés : tous les jours.
Pour toute question : le concierge.
En cas de perte d'objet, passez à l'accueil.
Le service client répond aussi par téléphone.
Bonne visite et merci de votre attention.
Voici quelques détails utiles pour la suite.
Lisez bien jusqu'à la fin, s'il vous plaît.
En cas de question, vous pouvez écrire ou téléphoner.`;

const CE_POOL_19 = buildExpressPool("e2-3-19", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 1", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "1",
    vfQ: "C'est l'article 1.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Respecter la propreté des lieux", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Respecter",
    vfQ: "Règle : Respecter la propreté des lieux....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Frais de nettoyage", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "frais",
    vfQ: "Sanction : frais de nettoyage.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["Tous les jours", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "tous",
    vfQ: "Horaires : tous les jours.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["le concierge", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "le",
    vfQ: "Contact : le concierge.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "frais",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);
const CE_TEXT_20 = `Règlement chauffage

Règlement de l'immeuble — Article 20
Ne pas couvrir les radiateurs.
Sanction : avertissement.
Horaires concernés : hiver.
Pour toute question : technicien@chauffage.ch.
En cas de doute, demandez de l'aide à l'accueil.
Les horaires peuvent changer en cas d'urgence.
Gardez votre ticket ou votre confirmation avec vous.
Les enfants doivent rester accompagnés d'un adulte.
Respectez la file d'attente, s'il vous plaît.
Pensez à arriver un peu en avance.`;

const CE_POOL_20 = buildExpressPool("e2-3-20", [
  q({
    id: "ce-q1",
    textQ: "Quel article du règlement ?",
    text: ["Article 20", "Article 99", "Article 1"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Article _________.",
    fill: "20",
    vfQ: "C'est l'article 20.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "Quelle est la règle ?",
    text: ["Ne pas couvrir les radiateurs", "Faire la fête", "Casser les murs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________ .",
    fill: "Ne",
    vfQ: "Règle : Ne pas couvrir les radiateurs....",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Quelle sanction ?",
    text: ["Avertissement", "Rien", "Un cadeau"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Sanction : avertissement.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Quels horaires ?",
    text: ["Hiver", "Toute la nuit", "Jamais"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Horaires : _________.",
    fill: "hiver",
    vfQ: "Horaires : hiver.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "Qui contacter ?",
    text: ["technicien@chauffage.ch", "Le facteur", "Un ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "question : _________.",
    fill: "technicien@chauffage.ch",
    vfQ: "Contact : technicien@chauffage.ch.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Quel type de document ?",
    text: ["Règlement d'immeuble", "Une facture", "Un menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Règlement de _________",
    fill: "l'immeuble",
    vfQ: "C'est une facture.",
    vfC: 1,
  }),
  q({
    id: "ce-q7",
    textQ: "Y a-t-il une sanction prévue ?",
    text: ["Oui", "Non", "On ne sait pas"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Sanction : _________.",
    fill: "avertissement",
    vfQ: "Il y a une sanction.",
    vfC: 0,
  }),
]);

export const E2_3_CE: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e2-3-1",
  readingText: CE_TEXT_1,
  questionPool: CE_POOL_1
}),
  readingPoolExercise({
  id: "e2-3-2",
  readingText: CE_TEXT_2,
  questionPool: CE_POOL_2
}),
  readingPoolExercise({
  id: "e2-3-3",
  readingText: CE_TEXT_3,
  questionPool: CE_POOL_3
}),
  readingPoolExercise({
  id: "e2-3-4",
  readingText: CE_TEXT_4,
  questionPool: CE_POOL_4
}),
  readingPoolExercise({
  id: "e2-3-5",
  readingText: CE_TEXT_5,
  questionPool: CE_POOL_5
}),
  readingPoolExercise({
  id: "e2-3-6",
  readingText: CE_TEXT_6,
  questionPool: CE_POOL_6
}),
  readingPoolExercise({
  id: "e2-3-7",
  readingText: CE_TEXT_7,
  questionPool: CE_POOL_7
}),
  readingPoolExercise({
  id: "e2-3-8",
  readingText: CE_TEXT_8,
  questionPool: CE_POOL_8
}),
  readingPoolExercise({
  id: "e2-3-9",
  readingText: CE_TEXT_9,
  questionPool: CE_POOL_9
}),
  readingPoolExercise({
  id: "e2-3-10",
  readingText: CE_TEXT_10,
  questionPool: CE_POOL_10
}),
  readingPoolExercise({
  id: "e2-3-11",
  readingText: CE_TEXT_11,
  questionPool: CE_POOL_11
}),
  readingPoolExercise({
  id: "e2-3-12",
  readingText: CE_TEXT_12,
  questionPool: CE_POOL_12
}),
  readingPoolExercise({
  id: "e2-3-13",
  readingText: CE_TEXT_13,
  questionPool: CE_POOL_13
}),
  readingPoolExercise({
  id: "e2-3-14",
  readingText: CE_TEXT_14,
  questionPool: CE_POOL_14
}),
  readingPoolExercise({
  id: "e2-3-15",
  readingText: CE_TEXT_15,
  questionPool: CE_POOL_15
}),
  readingPoolExercise({
  id: "e2-3-16",
  readingText: CE_TEXT_16,
  questionPool: CE_POOL_16
}),
  readingPoolExercise({
  id: "e2-3-17",
  readingText: CE_TEXT_17,
  questionPool: CE_POOL_17
}),
  readingPoolExercise({
  id: "e2-3-18",
  readingText: CE_TEXT_18,
  questionPool: CE_POOL_18
}),
  readingPoolExercise({
  id: "e2-3-19",
  readingText: CE_TEXT_19,
  questionPool: CE_POOL_19
}),
  readingPoolExercise({
  id: "e2-3-20",
  readingText: CE_TEXT_20,
  questionPool: CE_POOL_20
}),
];

/* ── Production orale — dialogues à jouer (thème règlement) ────────────────── */

const VOISIN = { title: "Le voisin", vous: "le voisin / la voisine" };
const HABITANT = { title: "L'habitant", vous: "l'habitant / l'habitante" };
const VOUS = { title: "Vous", vous: "vous-même" };

export const E2_3_PO: ExpressPoDialogue[] = [
  {
    id: "e2-3-po-1",
    title: "Accueillir un nouveau voisin",
    context: "Vous êtes nouveau dans l'immeuble et un voisin vous explique les règles.",
    roleA: VOISIN,
    roleB: { title: "Le nouveau voisin", vous: "le nouveau voisin / la nouvelle voisine" },
    lines: [
      { role: "A", text: "Bonjour ! Vous êtes nouveau dans l'immeuble ?" },
      { role: "B", text: "Oui, bonjour ! J'habite au 2e étage depuis lundi." },
      { role: "A", text: "Bienvenue ! Vous avez lu le règlement ?" },
      { role: "B", text: "Non, pas encore. Où est-il ?" },
      { role: "A", text: "Dans le hall d'entrée, à côté des boîtes aux lettres." },
      { role: "B", text: "Merci ! Et où je peux ranger mon vélo ?" },
      { role: "A", text: "Dans le local à vélos, à côté du garage." },
      { role: "B", text: "Parfait, merci pour votre aide !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-2",
    title: "Le chien sans laisse",
    context: "La gardienne vous rappelle que les chiens doivent être en laisse.",
    roleA: { title: "La gardienne", vous: "le gardien / la gardienne" },
    roleB: HABITANT,
    lines: [
      { role: "A", text: "Bonjour ! Excusez-moi, votre chien n'est pas en laisse." },
      { role: "B", text: "Ah, pardon ! Il est gentil, vous savez." },
      { role: "A", text: "Oui, mais le règlement demande la laisse dans l'immeuble." },
      { role: "B", text: "Vous avez raison, je la mets tout de suite." },
      { role: "A", text: "Merci. C'est important pour les autres habitants." },
      { role: "B", text: "Bien sûr, je comprends. Promis, je fais attention." },
      { role: "A", text: "Merci beaucoup ! Bonne journée !" },
      { role: "B", text: "Bonne journée à vous aussi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-3",
    title: "Trop de bruit le soir",
    context: "Il est tard et votre voisin vient vous parler de votre musique.",
    roleA: VOISIN,
    roleB: VOUS,
    lines: [
      { role: "A", text: "Bonsoir, excusez-moi, votre musique est très forte." },
      { role: "B", text: "Oh, bonsoir ! Vraiment ? Je suis désolé." },
      { role: "A", text: "Oui, il est 23 heures et je travaille demain matin." },
      { role: "B", text: "Pardon, je baisse la musique tout de suite." },
      { role: "A", text: "Merci. Le règlement dit : pas de bruit après 22 heures." },
      { role: "B", text: "Vous avez raison. Ça n'arrivera plus." },
      { role: "A", text: "Merci beaucoup, bonne soirée !" },
      { role: "B", text: "Bonne soirée, et encore pardon !" },
      { role: "A", text: "On se voit après la pause ?" },
      { role: "B", text: "Oui, avec plaisir !" },
],
  },
  {
    id: "e2-3-po-4",
    title: "La poubelle dans le couloir",
    context: "Une voisine vous parle de votre poubelle laissée dans le couloir.",
    roleA: { title: "La voisine", vous: "le voisin / la voisine" },
    roleB: HABITANT,
    lines: [
      { role: "A", text: "Bonjour ! Il y a une poubelle dans le couloir, elle est à vous ?" },
      { role: "B", text: "Euh… oui, je descends au local à poubelles ce soir." },
      { role: "A", text: "D'accord, mais ça sent mauvais dans le couloir." },
      { role: "B", text: "Vous avez raison, je suis désolé." },
      { role: "A", text: "Le local à poubelles est ouvert toute la journée, vous savez." },
      { role: "B", text: "Oui, oui. Je descends la poubelle maintenant." },
      { role: "A", text: "Merci beaucoup ! Le couloir doit rester propre." },
      { role: "B", text: "Bien sûr. Ça ne va pas se répéter !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-5",
    title: "Où ranger son vélo ?",
    context: "Vous demandez au gardien où ranger votre vélo et votre voiture.",
    roleA: { title: "Le gardien", vous: "le gardien / la gardienne" },
    roleB: { title: "L'habitante", vous: "l'habitant / l'habitante" },
    lines: [
      { role: "A", text: "Bonjour madame ! Je peux vous aider ?" },
      { role: "B", text: "Oui, bonjour. Où je peux ranger mon vélo ?" },
      { role: "A", text: "Dans le local à vélos, derrière l'immeuble." },
      { role: "B", text: "Il faut une clé pour entrer ?" },
      { role: "A", text: "Oui, la clé du hall ouvre aussi le local." },
      { role: "B", text: "Super ! Et pour ma voiture ?" },
      { role: "A", text: "Vous avez une place au garage, la place numéro 8." },
      { role: "B", text: "Merci beaucoup, c'est très clair !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-6",
    title: "La réunion des habitants",
    context: "Une voisine vous invite à la réunion des habitants de l'immeuble.",
    roleA: { title: "La voisine", vous: "le voisin / la voisine" },
    roleB: VOUS,
    lines: [
      { role: "A", text: "Vous venez à la réunion des habitants jeudi soir ?" },
      { role: "B", text: "Oui ! On parle de quoi ?" },
      { role: "A", text: "Du règlement : il y a trop de bruit le soir." },
      { role: "B", text: "C'est vrai. Et les vélos dans le hall, c'est un problème aussi." },
      { role: "A", text: "Oui ! Il faut ranger les vélos dans le local." },
      { role: "B", text: "Et on peut parler des poubelles ?" },
      { role: "A", text: "Bien sûr, chacun peut poser ses questions." },
      { role: "B", text: "Très bien, alors à jeudi !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-7",
    title: "Fumer dans les couloirs",
    context: "Un voisin fume dans le couloir et vous lui rappelez le règlement.",
    roleA: VOUS,
    roleB: VOISIN,
    lines: [
      { role: "A", text: "Excusez-moi, on ne peut pas fumer dans le couloir." },
      { role: "B", text: "Ah bon ? Je ne savais pas, pardon." },
      { role: "A", text: "Oui, c'est écrit dans le règlement, dans le hall." },
      { role: "B", text: "D'accord. Où est-ce que je peux fumer alors ?" },
      { role: "A", text: "Dehors, dans la cour, ou sur votre balcon." },
      { role: "B", text: "Très bien, je vais sur mon balcon." },
      { role: "A", text: "Merci ! C'est mieux pour tout le monde." },
      { role: "B", text: "Oui, vous avez raison. Bonne journée !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-8",
    title: "Le nom sur la boîte aux lettres",
    context: "Le facteur ne trouve pas votre nom sur les boîtes aux lettres.",
    roleA: { title: "Le facteur", vous: "le facteur / la factrice" },
    roleB: { title: "Le nouvel habitant", vous: "le nouvel habitant / la nouvelle habitante" },
    lines: [
      { role: "A", text: "Bonjour ! Vous habitez ici ? Je ne trouve pas votre nom." },
      { role: "B", text: "Oui, j'habite au 4e étage depuis une semaine." },
      { role: "A", text: "Votre nom n'est pas sur la boîte aux lettres." },
      { role: "B", text: "Ah, c'est vrai ! Qu'est-ce que je dois faire ?" },
      { role: "A", text: "Mettez une étiquette avec votre nom sur la boîte." },
      { role: "B", text: "D'accord, je fais ça aujourd'hui." },
      { role: "A", text: "Merci ! Comme ça, vous recevez bien votre courrier." },
      { role: "B", text: "Merci pour l'information, au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
  {
    id: "e2-3-po-9",
    title: "Expliquer le règlement à un ami",
    context: "Un ami vous pose des questions sur le règlement de votre immeuble.",
    roleA: { title: "L'ami", vous: "l'ami / l'amie" },
    roleB: VOUS,
    lines: [
      { role: "A", text: "Il y a beaucoup de règles dans ton immeuble ?" },
      { role: "B", text: "Oui, il y a un règlement dans le hall d'entrée." },
      { role: "A", text: "Qu'est-ce qu'il dit ?" },
      { role: "B", text: "Pas de bruit après 22 heures et pas de fumée dans les couloirs." },
      { role: "A", text: "Et pour les animaux ?" },
      { role: "B", text: "Les chiens doivent être en laisse dans l'immeuble." },
      { role: "A", text: "C'est strict ! Et tu respectes tout ?" },
      { role: "B", text: "Oui, et mes voisins sont très gentils avec moi." },
      { role: "A", text: "Enchanté(e) de te connaître !" },
      { role: "B", text: "Moi aussi. À tout à l'heure !" },
],
  },
  {
    id: "e2-3-po-10",
    title: "Appeler la gérance",
    context: "Les escaliers de votre immeuble ne sont pas propres. Vous appelez la gérance.",
    roleA: { title: "L'employé de la gérance", vous: "l'employé / l'employée de la gérance" },
    roleB: { title: "L'habitante", vous: "l'habitant / l'habitante" },
    lines: [
      { role: "A", text: "Gérance Immo Plus, bonjour !" },
      { role: "B", text: "Bonjour, j'appelle pour un problème dans mon immeuble." },
      { role: "A", text: "Oui, je vous écoute." },
      { role: "B", text: "Il y a des bouteilles et des sacs dans les escaliers." },
      { role: "A", text: "Depuis quand ?" },
      { role: "B", text: "Depuis samedi. Ce n'est pas propre et ça sent mauvais." },
      { role: "A", text: "D'accord, nous envoyons quelqu'un demain matin." },
      { role: "B", text: "Merci beaucoup ! Au revoir !" },
      { role: "A", text: "Ravi(e) de faire votre connaissance." },
      { role: "B", text: "Moi aussi. À bientôt !" },
],
  },
{
  id: "e2-3-po-11",
  title: "Demander une information sur une démarche administrative",
  context: "Vous voulez renouveler une carte de séjour.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je peux vous renseigner ?" },
    { role: "B", text: "Bonjour, je voudrais savoir comment faire pour renouveler une carte de séjour." },
    { role: "A", text: "Bien sûr. Le formulaire se remplit en ligne." },
    { role: "B", text: "D'accord. Est-ce qu'il faut réserver avant ?" },
    { role: "A", text: "Oui. Il faut aussi une photo récente." },
    { role: "B", text: "Très bien. Je peux le faire aujourd'hui ?" },
    { role: "A", text: "Oui, si vous avez quelques minutes." },
    { role: "B", text: "Parfait, je commence tout de suite." },
    { role: "A", text: "Je reste disponible si vous avez une question." },
    { role: "B", text: "Merci beaucoup pour votre aide." },
  ],
},
{
  id: "e2-3-po-12",
  title: "Expliquer un problème avec une démarche administrative",
  context: "Vous expliquez un problème : je n'arrive pas à ouvrir mon compte en ligne.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, qu'est-ce qui se passe ?" },
    { role: "B", text: "Bonjour, j'ai un problème : je n'arrive pas à ouvrir mon compte en ligne." },
    { role: "A", text: "Je comprends. Le code arrive par SMS." },
    { role: "B", text: "Merci. Est-ce possible de régler ça maintenant ?" },
    { role: "A", text: "Nous pouvons le renvoyer maintenant." },
    { role: "B", text: "Très bien, merci." },
    { role: "A", text: "Je m'en occupe tout de suite." },
    { role: "B", text: "C'est gentil, je vous remercie." },
    { role: "A", text: "Je vous en prie." },
    { role: "B", text: "Merci, bonne journée." },
  ],
},
{
  id: "e2-3-po-13",
  title: "Prendre rendez-vous pour une démarche administrative",
  context: "Vous voulez prendre rendez-vous pour un rendez-vous pour déposer un dossier.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous souhaitez un rendez-vous ?" },
    { role: "B", text: "Oui, je voudrais un rendez-vous pour déposer un dossier." },
    { role: "A", text: "Je peux vous proposer lundi à 9 h 30." },
    { role: "B", text: "Oui, ce créneau me convient." },
    { role: "A", text: "Prenez tous les originaux." },
    { role: "B", text: "D'accord, je le note." },
    { role: "A", text: "Je vous envoie une confirmation par message." },
    { role: "B", text: "Merci. Vous avez mon numéro ?" },
    { role: "A", text: "Oui, il est noté ici." },
    { role: "B", text: "Parfait, à bientôt." },
  ],
},
{
  id: "e2-3-po-14",
  title: "Confirmer un rendez-vous",
  context: "Vous confirmez ceci : mon rendez-vous à la mairie.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous appelez pour confirmer ?" },
    { role: "B", text: "Oui, je confirme mon rendez-vous à la mairie." },
    { role: "A", text: "Très bien. C'est bien mercredi à 14 heures ?" },
    { role: "B", text: "Oui, c'est exact." },
    { role: "A", text: "Parfait, c'est noté." },
    { role: "B", text: "Je confirme ma présence." },
    { role: "A", text: "Oui, aucun problème." },
    { role: "B", text: "Merci, c'est très clair." },
    { role: "A", text: "Parfait, à ce moment-là." },
    { role: "B", text: "Merci, à bientôt." },
  ],
},
{
  id: "e2-3-po-15",
  title: "Demander conseil sur une démarche administrative",
  context: "Vous demandez conseil pour préparer les papiers pour la commune.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous voulez un conseil ?" },
    { role: "B", text: "Oui, j'hésite pour préparer les papiers pour la commune." },
    { role: "A", text: "Faites des copies avant de venir." },
    { role: "B", text: "C'est vrai, mais je veux aussi quelque chose de pratique." },
    { role: "A", text: "Gardez aussi les originaux." },
    { role: "B", text: "Je comprends mieux la différence." },
    { role: "A", text: "Choisissez ce qui vous simplifie la vie." },
    { role: "B", text: "Vous avez raison. Je vais y réfléchir ce soir." },
    { role: "A", text: "Revenez me voir si vous voulez en reparler." },
    { role: "B", text: "Merci pour votre conseil." },
  ],
},
{
  id: "e2-3-po-16",
  title: "Signaler un retard",
  context: "Vous signalez un retard : mon rendez-vous administratif.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, je vous écoute." },
    { role: "B", text: "Bonjour, je vous préviens : mon rendez-vous administratif." },
    { role: "A", text: "Merci de nous prévenir. Que se passe-t-il ?" },
    { role: "B", text: "Mon tram est arrêté." },
    { role: "A", text: "D'accord, ce n'est pas grave." },
    { role: "B", text: "Je serai là dans vingt minutes." },
    { role: "A", text: "Très bien, nous vous attendons." },
    { role: "B", text: "Merci pour votre compréhension." },
    { role: "A", text: "À tout à l'heure." },
    { role: "B", text: "À tout à l'heure." },
  ],
},
{
  id: "e2-3-po-17",
  title: "Faire une réclamation polie",
  context: "Vous faites une réclamation : une erreur sur mon nom dans le courrier.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, comment puis-je vous aider ?" },
    { role: "B", text: "Bonjour, je voudrais signaler un problème : une erreur sur mon nom dans le courrier." },
    { role: "A", text: "Je suis désolé pour cela." },
    { role: "B", text: "La lettre indique deux dates différentes." },
    { role: "A", text: "Je comprends. Quelle solution souhaitez-vous ?" },
    { role: "B", text: "Je demande une correction." },
    { role: "A", text: "D'accord, je vais transmettre votre demande." },
    { role: "B", text: "Merci. J'aimerais être informé rapidement." },
    { role: "A", text: "Je vous réponds dès que possible." },
    { role: "B", text: "Très bien, merci." },
  ],
},
{
  id: "e2-3-po-18",
  title: "Demander une aide urgente",
  context: "Vous devez demander une aide urgente : un document pour commencer le travail.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, c'est urgent ?" },
    { role: "B", text: "Oui, j'ai besoin d'aide pour un document pour commencer le travail." },
    { role: "A", text: "L'attestation peut être imprimée aujourd'hui." },
    { role: "B", text: "D'accord, je fais ça tout de suite." },
    { role: "A", text: "Revenez au guichet 3." },
    { role: "B", text: "Merci. Est-ce que je dois rappeler ?" },
    { role: "A", text: "Non, venez directement si besoin." },
    { role: "B", text: "Très bien, je pars maintenant." },
    { role: "A", text: "Bon courage." },
    { role: "B", text: "Merci beaucoup." },
  ],
},
{
  id: "e2-3-po-19",
  title: "Comparer deux possibilités",
  context: "Vous devez comparer deux possibilités : faire la démarche en ligne ou au guichet.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Vous hésitez entre deux possibilités ?" },
    { role: "B", text: "Oui, je compare faire la démarche en ligne ou au guichet." },
    { role: "A", text: "En ligne c'est plus rapide." },
    { role: "B", text: "Et l'autre possibilité ?" },
    { role: "A", text: "Au guichet on vous aide directement." },
    { role: "B", text: "Je vois. Je cherche surtout quelque chose de pratique." },
    { role: "A", text: "Dans ce cas, la première option est peut-être meilleure." },
    { role: "B", text: "D'accord, je vais choisir celle-là." },
    { role: "A", text: "Très bien, je vous prépare ça." },
    { role: "B", text: "Merci pour vos conseils." },
  ],
},
{
  id: "e2-3-po-20",
  title: "Remercier pour une aide",
  context: "Vous remerciez pour une aide : votre aide pour le formulaire.",
  roleA: { title: "L'agent d'accueil", vous: "l'agent / l'agente d'accueil" },
  roleB: { title: "Vous", vous: "la personne qui parle" },
  lines: [
    { role: "A", text: "Bonjour, vous vouliez me parler ?" },
    { role: "B", text: "Oui, je voulais vous remercier pour votre aide pour le formulaire." },
    { role: "A", text: "C'est gentil, merci." },
    { role: "B", text: "Je comprends mieux les étapes." },
    { role: "A", text: "Je suis content que cela vous ait aidé." },
    { role: "B", text: "Je vais finir le dossier ce soir." },
    { role: "A", text: "N'hésitez pas à revenir si besoin." },
    { role: "B", text: "Oui, je le ferai." },
    { role: "A", text: "Bonne continuation !" },
    { role: "B", text: "Merci, à vous aussi." },
  ],
}
];

/* ── Production écrite — consignes (A1 : 50 mots minimum) ─────────────────── */

const PE_MIN = 50;
const PE_MAX = 120;

export const E2_3_PE: ExpressPePrompt[] = [
  {
    id: "e2-3-pe-1",
    title: "Mot au voisin",
    situation: "",
    instruction: "Votre voisin ne respecte pas le règlement de l'immeuble. Vous lui écrivez un mot poli pour expliquer le problème et demander un changement.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-2",
    title: "Propreté de l'immeuble",
    situation: "",
    instruction: "Donnez quatre idées pour respecter la propreté d'un immeuble. Rédigez un court texte en phrases complètes pour expliquer ces gestes.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-3",
    title: "Bruit le soir",
    situation: "",
    instruction: "Un voisin fait du bruit tard le soir. Écrivez un message respectueux pour rappeler les horaires de calme et proposer d'en parler.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-4",
    title: "Local poubelles",
    situation: "",
    instruction: "Des sacs restent devant le local poubelles. Écrivez un mot aux habitants pour rappeler comment garder cet espace propre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-5",
    title: "Ascenseur propre",
    situation: "",
    instruction: "L'ascenseur est souvent sale. Écrivez un message aux voisins pour demander de faire attention et de nettoyer si nécessaire.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-6",
    title: "Velo dans l'entree",
    situation: "",
    instruction: "Un velo bloque l'entree de l'immeuble. Écrivez un mot pour demander de le ranger dans l'espace autorise.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-7",
    title: "Animal dans l'immeuble",
    situation: "",
    instruction: "Un chien aboie souvent dans l'immeuble. Écrivez un message au proprietaire pour expliquer le problème avec politesse.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-8",
    title: "Fumee dans le couloir",
    situation: "",
    instruction: "Vous sentez souvent de la fumee dans le couloir. Écrivez un mot pour rappeler la regle et demander le respect des voisins.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-9",
    title: "Affiche de regles",
    situation: "",
    instruction: "Rédigez une petite affiche pour les nouveaux habitants. Expliquez en phrases simples trois regles importantes de l'immeuble.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-10",
    title: "Tri des dechets",
    situation: "",
    instruction: "Écrivez un message aux voisins pour encourager le tri des dechets. Expliquez ou mettre le papier, le verre et les ordures.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-11",
    title: "Cour interieure",
    situation: "",
    instruction: "Des enfants jouent dans la cour tard le soir. Écrivez un mot aux parents pour rappeler le règlement et proposer un horaire plus calme.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-12",
    title: "Porte d'entree",
    situation: "",
    instruction: "La porte d'entree reste souvent ouverte. Écrivez un message aux habitants pour expliquer le risque et demander de bien fermer.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-13",
    title: "Travaux bruyants",
    situation: "",
    instruction: "Votre voisin fait des travaux le dimanche matin. Écrivez-lui un mot pour rappeler les horaires autorises et demander une solution.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-14",
    title: "Reunion d'immeuble",
    situation: "",
    instruction: "Vous proposez une reunion d'immeuble pour parler du règlement. Écrivez un message avec le sujet, la date et le lieu.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-15",
    title: "Objets dans le couloir",
    situation: "",
    instruction: "Des objets restent dans le couloir commun. Écrivez un mot pour expliquer pourquoi cela gene et demander de les enlever.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-16",
    title: "Jardin partage",
    situation: "",
    instruction: "Écrivez un message aux voisins pour proposer des regles simples dans le jardin partage. Parlez de la propreté, du bruit et des horaires.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-17",
    title: "Nouvel habitant",
    situation: "",
    instruction: "Vous accueillez un nouvel habitant. Écrivez un mot pour lui présenter les regles principales de l'immeuble de facon amicale.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-18",
    title: "Linge au balcon",
    situation: "",
    instruction: "Un voisin laisse du linge sur le balcon toute la semaine. Écrivez un message poli pour rappeler la regle de la residence.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-19",
    title: "Cave commune",
    situation: "",
    instruction: "La cave commune est mal rangee. Écrivez un message aux habitants pour demander de ranger les objets et de laisser le passage libre.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e2-3-pe-20",
    title: "Merci aux voisins",
    situation: "",
    instruction: "Les voisins ont respecte une nouvelle regle de propreté. Écrivez un mot pour les remercier et encourager à continuer.",
    points: [],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },

];
