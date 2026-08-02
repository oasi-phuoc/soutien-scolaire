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

const E4_1_CE_EMAIL_TEXT_1 = `De : Magasin Mode & Style
Objet : Les soldes commencent !

Bonjour,

Les soldes d'hiver commencent le lundi 6 janvier.
Tous les manteaux sont à moitié prix : le manteau bleu coûte maintenant quarante francs.
Les pulls sont à vingt francs et les chemises à quinze francs.
Le magasin est ouvert du lundi au samedi, de 9 h à 18 h 30.
La cabine d'essayage est au fond du magasin, à droite.
Vous pouvez échanger un article pendant trente jours, avec le ticket de caisse.
Notre magasin est à la rue du Marché 8, près de la gare.

À bientôt,
L'équipe du magasin`;

const E4_1_CE_EMAIL_POOL_1 = buildExpressPool("e4-1-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Quand commencent les soldes d'hiver ?",
    text: ["Le lundi 6 janvier", "Le samedi 4 janvier", "Le lundi 13 janvier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les soldes d'hiver commencent le lundi 6 _________.",
    fill: "janvier",
    vfQ: "Les soldes commencent le lundi 6 janvier.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien coûte le manteau bleu maintenant ?",
    text: ["Quarante francs", "Quatre-vingts francs", "Vingt francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le manteau bleu coûte maintenant _________ francs.",
    fill: "quarante",
    fillA: ["40"],
    vfQ: "Le manteau bleu coûte quatre-vingts francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien coûtent les pulls ?",
    text: ["Vingt francs", "Quinze francs", "Trente francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les pulls sont à _________ francs.",
    fill: "vingt",
    fillA: ["20"],
    vfQ: "Les pulls sont à vingt francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien coûtent les chemises ?",
    text: ["Quinze francs", "Vingt francs", "Dix francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Les chemises sont à _________ francs.",
    fill: "quinze",
    fillA: ["15"],
    vfQ: "Les chemises coûtent cinquante francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quels jours le magasin est-il ouvert ?",
    text: ["Du lundi au samedi", "Tous les jours", "Du mardi au dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le magasin est ouvert du lundi au _________.",
    fill: "samedi",
    vfQ: "Le magasin est ouvert le dimanche.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure ferme le magasin ?",
    text: ["À 18 h 30", "À 18 h", "À 19 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le magasin est ouvert de 9 h à 18 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Le magasin ferme à 18 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Où est la cabine d'essayage ?",
    text: [
      "Au fond du magasin, à droite",
      "À côté de la caisse",
      "Au premier étage",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La cabine d'essayage est au fond du magasin, à _________.",
    fill: "droite",
    vfQ: "La cabine d'essayage est à l'entrée du magasin.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Pendant combien de jours peut-on échanger un article ?",
    text: ["Trente jours", "Quinze jours", "Sept jours"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez échanger un article pendant _________ jours.",
    fill: "trente",
    fillA: ["30"],
    vfQ: "On peut échanger un article pendant trente jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Qu'est-ce qu'il faut pour échanger un article ?",
    text: ["Le ticket de caisse", "La carte d'identité", "Une photo"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous pouvez échanger un article avec le ticket de _________.",
    fill: "caisse",
    vfQ: "Il faut le ticket de caisse pour échanger un article.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Quelle est la réduction sur les manteaux ?",
    text: [
      "Ils sont à moitié prix",
      "Ils sont gratuits",
      "Il n'y a pas de réduction",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Tous les manteaux sont à _________ prix.",
    fill: "moitié",
    fillA: ["moitie"],
    vfQ: "Pendant les soldes, les manteaux coûtent le prix normal.",
    vfC: 1,
  }),

]);

const E4_1_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur mode

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de mode.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E4_1_CE_EMAIL_POOL_2 = buildExpressPool("e4-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur mode

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de mode.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E4_1_CE_EMAIL_POOL_3 = buildExpressPool("e4-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur mode

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de mode.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E4_1_CE_EMAIL_POOL_4 = buildExpressPool("e4-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur mode

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de mode.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E4_1_CE_EMAIL_POOL_5 = buildExpressPool("e4-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur mode

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de mode.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E4_1_CE_EMAIL_POOL_6 = buildExpressPool("e4-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur mode

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de mode.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E4_1_CE_EMAIL_POOL_7 = buildExpressPool("e4-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur mode

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de mode.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E4_1_CE_EMAIL_POOL_8 = buildExpressPool("e4-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur mode

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de mode.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E4_1_CE_EMAIL_POOL_9 = buildExpressPool("e4-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur mode

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de mode.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E4_1_CE_EMAIL_POOL_10 = buildExpressPool("e4-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur mode

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de mode.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E4_1_CE_EMAIL_POOL_11 = buildExpressPool("e4-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur mode

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de mode.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E4_1_CE_EMAIL_POOL_12 = buildExpressPool("e4-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur mode

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de mode.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E4_1_CE_EMAIL_POOL_13 = buildExpressPool("e4-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur mode

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de mode.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E4_1_CE_EMAIL_POOL_14 = buildExpressPool("e4-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur mode

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de mode.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E4_1_CE_EMAIL_POOL_15 = buildExpressPool("e4-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur mode

Bonjour,

Je m'appelle David. Je vous écris au sujet de mode.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E4_1_CE_EMAIL_POOL_16 = buildExpressPool("e4-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur mode

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de mode.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E4_1_CE_EMAIL_POOL_17 = buildExpressPool("e4-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur mode

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de mode.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E4_1_CE_EMAIL_POOL_18 = buildExpressPool("e4-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur mode

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de mode.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E4_1_CE_EMAIL_POOL_19 = buildExpressPool("e4-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_1_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur mode

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de mode.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E4_1_CE_EMAIL_POOL_20 = buildExpressPool("e4-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Mode", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "mode",
    vfQ: "L'e-mail parle de mode.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
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

const E4_2_CE_EMAIL_TEXT_1 = `De : Restaurant Le Petit Jardin
Objet : Confirmation de votre réservation

Bonjour,

Nous confirmons votre réservation pour le samedi 8 juin à 19 h 30, pour quatre personnes.
Votre table est au premier étage, près de la fenêtre.
Le menu du jour coûte vingt-cinq francs : entrée, plat et dessert.
Nous avons aussi des plats végétariens.
Le restaurant est ouvert du mardi au dimanche, de 11 h 30 à 23 h.
Le parking est derrière le restaurant ; il est gratuit pour nos clients.
Pour annuler, téléphonez-nous avant 17 h au 021 555 78 90.

À bientôt,
L'équipe du restaurant`;

const E4_2_CE_EMAIL_POOL_1 = buildExpressPool("e4-2-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Quel jour est la réservation ?",
    text: ["Le samedi 8 juin", "Le dimanche 9 juin", "Le samedi 15 juin"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La réservation est pour le _________ 8 juin.",
    fill: "samedi",
    vfQ: "La réservation est pour le samedi 8 juin.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quelle heure est la réservation ?",
    text: ["À 19 h 30", "À 20 h", "À 19 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La réservation est à 19 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "La réservation est à 20 h 30.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Pour combien de personnes est la réservation ?",
    text: ["Quatre personnes", "Deux personnes", "Six personnes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La réservation est pour _________ personnes.",
    fill: "quatre",
    fillA: ["4"],
    vfQ: "La réservation est pour six personnes.",
    vfC: 1,
  }),
  q({
    id: "cem-q4",
    textQ: "Où est la table ?",
    text: [
      "Au premier étage, près de la fenêtre",
      "Au rez-de-chaussée",
      "Sur la terrasse",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre table est au premier étage, près de la _________.",
    fill: "fenêtre",
    fillA: ["fenetre"],
    vfQ: "La table est près de la fenêtre.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien coûte le menu du jour ?",
    text: ["Vingt-cinq francs", "Trente-cinq francs", "Quinze francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le menu du jour coûte vingt-cinq _________.",
    fill: "francs",
    vfQ: "Le menu du jour coûte trente-cinq francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "Qu'est-ce qu'il y a dans le menu du jour ?",
    text: [
      "Une entrée, un plat et un dessert",
      "Un plat et une boisson",
      "Un dessert seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le menu du jour : entrée, plat et _________.",
    fill: "dessert",
    vfQ: "Il y a une entrée, un plat et un dessert dans le menu du jour.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Y a-t-il des plats végétariens ?",
    text: ["Oui", "Non", "Seulement le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous avons aussi des plats _________.",
    fill: "végétariens",
    fillA: ["vegetariens"],
    vfQ: "Le restaurant n'a pas de plats végétariens.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Quel jour le restaurant est-il fermé ?",
    text: ["Le lundi", "Le mardi", "Le dimanche"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le restaurant est ouvert du mardi au _________.",
    fill: "dimanche",
    vfQ: "Le restaurant est ouvert le lundi.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Où est le parking ?",
    text: [
      "Derrière le restaurant",
      "Devant le restaurant",
      "À la gare",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le parking est _________ le restaurant.",
    fill: "derrière",
    fillA: ["derriere"],
    vfQ: "Le parking est gratuit pour les clients.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Que faire pour annuler la réservation ?",
    text: [
      "Téléphoner avant 17 h",
      "Envoyer une lettre",
      "Venir au restaurant",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Pour annuler, téléphonez-nous avant _________ h.",
    fill: "17",
    fillA: ["dix-sept", "17 h"],
    vfQ: "On peut annuler par téléphone avant 17 h.",
    vfC: 0,
  }),

]);

const E4_2_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur restaurant

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E4_2_CE_EMAIL_POOL_2 = buildExpressPool("e4-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur restaurant

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E4_2_CE_EMAIL_POOL_3 = buildExpressPool("e4-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur restaurant

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E4_2_CE_EMAIL_POOL_4 = buildExpressPool("e4-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur restaurant

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E4_2_CE_EMAIL_POOL_5 = buildExpressPool("e4-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur restaurant

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E4_2_CE_EMAIL_POOL_6 = buildExpressPool("e4-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur restaurant

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E4_2_CE_EMAIL_POOL_7 = buildExpressPool("e4-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur restaurant

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E4_2_CE_EMAIL_POOL_8 = buildExpressPool("e4-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur restaurant

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E4_2_CE_EMAIL_POOL_9 = buildExpressPool("e4-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur restaurant

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E4_2_CE_EMAIL_POOL_10 = buildExpressPool("e4-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur restaurant

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E4_2_CE_EMAIL_POOL_11 = buildExpressPool("e4-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur restaurant

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E4_2_CE_EMAIL_POOL_12 = buildExpressPool("e4-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur restaurant

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E4_2_CE_EMAIL_POOL_13 = buildExpressPool("e4-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur restaurant

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E4_2_CE_EMAIL_POOL_14 = buildExpressPool("e4-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur restaurant

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E4_2_CE_EMAIL_POOL_15 = buildExpressPool("e4-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur restaurant

Bonjour,

Je m'appelle David. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E4_2_CE_EMAIL_POOL_16 = buildExpressPool("e4-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur restaurant

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E4_2_CE_EMAIL_POOL_17 = buildExpressPool("e4-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur restaurant

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E4_2_CE_EMAIL_POOL_18 = buildExpressPool("e4-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur restaurant

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E4_2_CE_EMAIL_POOL_19 = buildExpressPool("e4-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_2_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur restaurant

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de restaurant.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E4_2_CE_EMAIL_POOL_20 = buildExpressPool("e4-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Restaurant", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "restaurant",
    vfQ: "L'e-mail parle de restaurant.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
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

const E4_3_CE_EMAIL_TEXT_1 = `De : Boulangerie du Pont
Objet : Votre commande pour samedi

Bonjour,

Merci pour votre commande pour la fête de samedi.
Nous préparons trente petits sandwichs, deux tartes aux pommes et douze croissants.
La grande tarte est pour huit personnes.
Le prix total est de quatre-vingts francs. Vous payez à la boulangerie, en espèces ou par carte.
Votre commande est prête samedi à 10 h.
La boulangerie ouvre à 6 h 30 et ferme à 18 h. Elle est fermée le dimanche.
Attention : samedi, il y a beaucoup de clients. Venez avant 11 h.

Merci et à samedi,
La boulangère`;

const E4_3_CE_EMAIL_POOL_1 = buildExpressPool("e4-3-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Pour quel jour est la commande ?",
    text: ["Pour samedi", "Pour dimanche", "Pour vendredi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci pour votre commande pour la fête de _________.",
    fill: "samedi",
    vfQ: "La commande est pour samedi.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Combien de petits sandwichs sont commandés ?",
    text: ["Trente", "Vingt", "Douze"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous préparons _________ petits sandwichs.",
    fill: "trente",
    fillA: ["30"],
    vfQ: "La boulangerie prépare vingt petits sandwichs.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Combien de tartes aux pommes sont commandées ?",
    text: ["Deux", "Trois", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous préparons deux tartes aux _________.",
    fill: "pommes",
    vfQ: "Il y a deux tartes aux pommes dans la commande.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Combien de croissants sont commandés ?",
    text: ["Douze", "Dix", "Vingt"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Nous préparons _________ croissants.",
    fill: "douze",
    fillA: ["12"],
    vfQ: "Il y a six croissants dans la commande.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Pour combien de personnes est la grande tarte ?",
    text: ["Huit personnes", "Six personnes", "Quatre personnes"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La grande tarte est pour _________ personnes.",
    fill: "huit",
    fillA: ["8"],
    vfQ: "La grande tarte est pour huit personnes.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Quel est le prix total de la commande ?",
    text: ["Quatre-vingts francs", "Quarante francs", "Cent francs"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Le prix total est de quatre-vingts _________.",
    fill: "francs",
    vfQ: "Le prix total est de quarante francs.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Comment peut-on payer ?",
    text: [
      "En espèces ou par carte",
      "Par carte seulement",
      "Par virement seulement",
    ],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Vous payez à la boulangerie, en espèces ou par _________.",
    fill: "carte",
    vfQ: "On peut payer en espèces ou par carte.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "À quelle heure la commande est-elle prête ?",
    text: ["À 10 h", "À 11 h", "À 6 h 30"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Votre commande est prête samedi à _________ h.",
    fill: "10",
    fillA: ["dix", "10 h"],
    vfQ: "La commande est prête à 15 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "À quelle heure ouvre la boulangerie ?",
    text: ["À 6 h 30", "À 7 h", "À 8 h"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boulangerie ouvre à 6 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "La boulangerie ouvre à 6 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Quel jour la boulangerie est-elle fermée ?",
    text: ["Le dimanche", "Le lundi", "Le samedi"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "La boulangerie est fermée le _________.",
    fill: "dimanche",
    vfQ: "La boulangerie est ouverte le dimanche.",
    vfC: 1,
  }),

]);

const E4_3_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E4_3_CE_EMAIL_POOL_2 = buildExpressPool("e4-3-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E4_3_CE_EMAIL_POOL_3 = buildExpressPool("e4-3-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E4_3_CE_EMAIL_POOL_4 = buildExpressPool("e4-3-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E4_3_CE_EMAIL_POOL_5 = buildExpressPool("e4-3-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E4_3_CE_EMAIL_POOL_6 = buildExpressPool("e4-3-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E4_3_CE_EMAIL_POOL_7 = buildExpressPool("e4-3-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E4_3_CE_EMAIL_POOL_8 = buildExpressPool("e4-3-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E4_3_CE_EMAIL_POOL_9 = buildExpressPool("e4-3-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E4_3_CE_EMAIL_POOL_10 = buildExpressPool("e4-3-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E4_3_CE_EMAIL_POOL_11 = buildExpressPool("e4-3-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E4_3_CE_EMAIL_POOL_12 = buildExpressPool("e4-3-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E4_3_CE_EMAIL_POOL_13 = buildExpressPool("e4-3-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E4_3_CE_EMAIL_POOL_14 = buildExpressPool("e4-3-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E4_3_CE_EMAIL_POOL_15 = buildExpressPool("e4-3-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur boulangerie

Bonjour,

Je m'appelle David. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E4_3_CE_EMAIL_POOL_16 = buildExpressPool("e4-3-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E4_3_CE_EMAIL_POOL_17 = buildExpressPool("e4-3-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E4_3_CE_EMAIL_POOL_18 = buildExpressPool("e4-3-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E4_3_CE_EMAIL_POOL_19 = buildExpressPool("e4-3-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E4_3_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur boulangerie

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de boulangerie.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E4_3_CE_EMAIL_POOL_20 = buildExpressPool("e4-3-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Boulangerie", "vacances", "sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "boulangerie",
    vfQ: "L'e-mail parle de boulangerie.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "J'habite en _________.",
    fill: "Suisse",
    vfQ: "L'auteur habite en Suisse.",
    vfC: 0,
  }),
  q({
    id: "ce-q4",
    textQ: "Combien de langues sont mentionnées ?",
    text: ["Deux", "Cinq", "Une"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Je parle français et une autre _________.",
    fill: "langue",
    vfQ: "Deux langues sont mentionnées.",
    vfC: 0,
  }),
  q({
    id: "ce-q5",
    textQ: "L'e-mail est-il formel ?",
    text: ["Oui, assez formel", "Non, très familier", "En colère"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Merci de lire mon message avec _________.",
    fill: "attention",
    vfQ: "Le ton est formel.",
    vfC: 0,
  }),
  q({
    id: "ce-q6",
    textQ: "Que dit l'auteur à la fin ?",
    text: ["À bientôt", "Au revoir pour toujours", "Rien"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
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
