import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E3 — École, quotidien, travail.
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 50;
const PE_MAX = 120;

/* ════════════════════════════════════════════════════════════════════════════
   E3.1 — Aller à l'école
   ════════════════════════════════════════════════════════════════════════════ */

const E3_1_CE_EMAIL_TEXT_1 = `De : École du Lac
Objet : Réunion des parents

Bonjour,

Nous vous invitons à la réunion des parents le jeudi 12 septembre à 18 h.
La réunion a lieu dans la salle 24, au premier étage. Elle dure une heure.
La maîtresse présente les horaires et les matières de l'année.
Les cours commencent chaque matin à 8 h 15.
Votre enfant a besoin d'un cahier, d'une trousse et de crayons de couleur.
Les livres de classe coûtent vingt francs.
Si vous avez des questions, téléphonez au secrétariat au 021 555 12 34.

Cordialement,
Le secrétariat de l'école`;

const E3_1_CE_EMAIL_POOL_1 = buildExpressPool("e3-1-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Quel jour est la réunion des parents ?",
    text: ["Le jeudi 12 septembre", "Le mardi 10 septembre", "Le vendredi 13 septembre"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "La réunion des parents est le _________ 12 septembre.",
    fill: "jeudi",
    vfQ: "La réunion est le jeudi 12 septembre.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quelle heure commence la réunion ?",
    text: ["À 18 h", "À 17 h", "À 19 h"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "La réunion des parents est à _________ h.",
    fill: "18",
    fillA: ["dix-huit", "18 h"],
    vfQ: "La réunion commence à 19 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Où a lieu la réunion ?",
    text: ["Dans la salle 24", "Dans la salle 12", "Dans la cour"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "La réunion a lieu dans la salle _________.",
    fill: "24",
    fillA: ["vingt-quatre"],
    vfQ: "La réunion a lieu dans la salle 24.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "À quel étage est la salle 24 ?",
    text: ["Au premier étage", "Au deuxième étage", "Au rez-de-chaussée"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "La salle 24 est au _________ étage.",
    fill: "premier",
    fillA: ["1er", "1"],
    vfQ: "La salle est au deuxième étage.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Combien de temps dure la réunion ?",
    text: ["Une heure", "Deux heures", "Trente minutes"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "La réunion dure une _________.",
    fill: "heure",
    vfQ: "La réunion dure une heure.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Que présente la maîtresse ?",
    text: [
      "Les horaires et les matières",
      "Les notes des élèves",
      "Le menu de la cantine",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "La maîtresse présente les horaires et les _________ de l'année.",
    fill: "matières",
    fillA: ["matieres"],
    vfQ: "La maîtresse présente le menu de la cantine.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "À quelle heure commencent les cours le matin ?",
    text: ["À 8 h 15", "À 8 h 30", "À 9 h"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Les cours commencent chaque matin à 8 h _________.",
    fill: "15",
    fillA: ["quinze"],
    vfQ: "Les cours commencent à 9 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "De quoi l'enfant a-t-il besoin ?",
    text: [
      "D'un cahier, d'une trousse et de crayons",
      "D'un ballon et d'un sac de sport",
      "D'un ordinateur",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Votre enfant a besoin d'un cahier et d'une _________.",
    fill: "trousse",
    vfQ: "L'enfant a besoin d'un ordinateur.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Combien coûtent les livres de classe ?",
    text: ["Vingt francs", "Douze francs", "Trente francs"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Les livres de classe coûtent _________ francs.",
    fill: "vingt",
    fillA: ["20"],
    vfQ: "Les livres de classe coûtent vingt francs.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Que faire si on a des questions ?",
    text: [
      "Téléphoner au secrétariat",
      "Écrire une lettre",
      "Aller à la mairie",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Si vous avez des questions, téléphonez au _________.",
    fill: "secrétariat",
    fillA: ["secretariat"],
    vfQ: "On peut téléphoner au secrétariat pour poser une question.",
    vfC: 0,
  }),

]);

const E3_1_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur école

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de école.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E3_1_CE_EMAIL_POOL_2 = buildExpressPool("e3-1-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur école

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de école.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E3_1_CE_EMAIL_POOL_3 = buildExpressPool("e3-1-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur école

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de école.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E3_1_CE_EMAIL_POOL_4 = buildExpressPool("e3-1-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "10 ans"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur école

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de école.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E3_1_CE_EMAIL_POOL_5 = buildExpressPool("e3-1-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur école

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de école.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E3_1_CE_EMAIL_POOL_6 = buildExpressPool("e3-1-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur école

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de école.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E3_1_CE_EMAIL_POOL_7 = buildExpressPool("e3-1-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur école

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de école.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E3_1_CE_EMAIL_POOL_8 = buildExpressPool("e3-1-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur école

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de école.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E3_1_CE_EMAIL_POOL_9 = buildExpressPool("e3-1-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur école

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de école.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E3_1_CE_EMAIL_POOL_10 = buildExpressPool("e3-1-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur école

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de école.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E3_1_CE_EMAIL_POOL_11 = buildExpressPool("e3-1-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur école

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de école.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E3_1_CE_EMAIL_POOL_12 = buildExpressPool("e3-1-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur école

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de école.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E3_1_CE_EMAIL_POOL_13 = buildExpressPool("e3-1-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur école

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de école.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E3_1_CE_EMAIL_POOL_14 = buildExpressPool("e3-1-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur école

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de école.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E3_1_CE_EMAIL_POOL_15 = buildExpressPool("e3-1-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur école

Bonjour,

Je m'appelle David. Je vous écris au sujet de école.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E3_1_CE_EMAIL_POOL_16 = buildExpressPool("e3-1-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur école

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de école.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E3_1_CE_EMAIL_POOL_17 = buildExpressPool("e3-1-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur école

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de école.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E3_1_CE_EMAIL_POOL_18 = buildExpressPool("e3-1-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur école

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de école.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E3_1_CE_EMAIL_POOL_19 = buildExpressPool("e3-1-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_1_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur école

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de école.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E3_1_CE_EMAIL_POOL_20 = buildExpressPool("e3-1-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["École", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "école",
    vfQ: "L'e-mail parle de école.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E3_1_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-1-ce-email-1",
  readingText: E3_1_CE_EMAIL_TEXT_1,
  questionPool: E3_1_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-2",
  readingText: E3_1_CE_EMAIL_TEXT_2,
  questionPool: E3_1_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-3",
  readingText: E3_1_CE_EMAIL_TEXT_3,
  questionPool: E3_1_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-4",
  readingText: E3_1_CE_EMAIL_TEXT_4,
  questionPool: E3_1_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-5",
  readingText: E3_1_CE_EMAIL_TEXT_5,
  questionPool: E3_1_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-6",
  readingText: E3_1_CE_EMAIL_TEXT_6,
  questionPool: E3_1_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-7",
  readingText: E3_1_CE_EMAIL_TEXT_7,
  questionPool: E3_1_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-8",
  readingText: E3_1_CE_EMAIL_TEXT_8,
  questionPool: E3_1_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-9",
  readingText: E3_1_CE_EMAIL_TEXT_9,
  questionPool: E3_1_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-10",
  readingText: E3_1_CE_EMAIL_TEXT_10,
  questionPool: E3_1_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-11",
  readingText: E3_1_CE_EMAIL_TEXT_11,
  questionPool: E3_1_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-12",
  readingText: E3_1_CE_EMAIL_TEXT_12,
  questionPool: E3_1_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-13",
  readingText: E3_1_CE_EMAIL_TEXT_13,
  questionPool: E3_1_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-14",
  readingText: E3_1_CE_EMAIL_TEXT_14,
  questionPool: E3_1_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-15",
  readingText: E3_1_CE_EMAIL_TEXT_15,
  questionPool: E3_1_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-16",
  readingText: E3_1_CE_EMAIL_TEXT_16,
  questionPool: E3_1_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-17",
  readingText: E3_1_CE_EMAIL_TEXT_17,
  questionPool: E3_1_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-18",
  readingText: E3_1_CE_EMAIL_TEXT_18,
  questionPool: E3_1_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-19",
  readingText: E3_1_CE_EMAIL_TEXT_19,
  questionPool: E3_1_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-1-ce-email-20",
  readingText: E3_1_CE_EMAIL_TEXT_20,
  questionPool: E3_1_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_1_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-1-pee-1",
    title: "Confirmer sa présence à la réunion",
    situation: "L'école de votre fille vous invite à la réunion des parents.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Réunion des parents",
      body: "Bonjour,\nLa réunion des parents a lieu le jeudi 12 septembre à 18 h, dans la salle 24.\nMerci de confirmer votre présence.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : confirmez votre présence, dites qui vient avec vous et posez une question sur la réunion.",
    points: ["La confirmation", "Qui vient avec vous", "Une question sur la réunion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-2",
    title: "Excuser une absence",
    situation: "Votre fils est malade et ne peut pas aller à l'école.",
    sourceMessage: {
      from: "Mme Perrin",
      subject: "Absence de votre fils",
      body: "Bonjour,\nVotre fils n'est pas en classe ce matin.\nPouvez-vous nous expliquer son absence ?\nMerci,\nMme Perrin, maîtresse de la classe",
    },
    instruction: "Répondez à la maîtresse : excusez-vous, expliquez que votre fils est malade et dites quand il revient à l'école.",
    points: ["L'excuse", "La maladie de votre fils", "Quand il revient à l'école"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-3",
    title: "Demander la liste du matériel",
    situation: "L'école vous écrit avant la rentrée.",
    sourceMessage: {
      from: "École du Lac",
      subject: "La rentrée scolaire",
      body: "Bonjour,\nLa rentrée est le lundi 26 août à 8 h 15.\nVotre enfant doit apporter son matériel scolaire.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : remerciez, demandez la liste du matériel scolaire et posez une question sur les horaires.",
    points: ["Un remerciement", "La demande de la liste du matériel", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-4",
    title: "Parler de sa nouvelle école",
    situation: "Un ami vous pose des questions sur votre école.",
    sourceMessage: {
      from: "Amir",
      subject: "Ta nouvelle école",
      body: "Salut !\nAlors, ta nouvelle école, c'est comment ?\nQu'est-ce que tu étudies ? Tu commences à quelle heure ?\nRaconte-moi !\nAmir",
    },
    instruction: "Répondez à Amir : décrivez votre école, dites quelles matières vous étudiez et donnez vos horaires.",
    points: ["Votre école", "Les matières", "Vos horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-5",
    title: "Prendre rendez-vous avec le maître",
    situation: "Le maître de votre fille veut vous voir.",
    sourceMessage: {
      from: "M. Robert",
      subject: "Rendez-vous",
      body: "Bonjour,\nJe voudrais vous parler du travail de votre fille.\nPouvez-vous venir à l'école cette semaine ?\nM. Robert, maître de la classe",
    },
    instruction: "Répondez au maître : acceptez le rendez-vous, proposez un jour et une heure et posez une question sur le travail de votre fille.",
    points: ["Votre accord", "Un jour et une heure", "Une question sur votre fille"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-6",
    title: "Inscrire son enfant à la cantine",
    situation: "L'école propose la cantine à midi.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Inscription à la cantine",
      body: "Bonjour,\nVous pouvez inscrire votre enfant à la cantine.\nQuels jours votre enfant mange-t-il à l'école ?\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : dites quels jours votre enfant mange à la cantine, demandez le prix et remerciez.",
    points: ["Les jours à la cantine", "Une question sur le prix", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-7",
    title: "Confirmer son inscription au cours",
    situation: "Vous prenez des cours de français. L'école de langue vous écrit.",
    sourceMessage: {
      from: "École de français",
      subject: "Votre inscription",
      body: "Bonjour,\nVotre cours de français commence le mardi 3 septembre à 18 h, salle 5.\nMerci de confirmer votre inscription.\nL'école de français",
    },
    instruction: "Répondez à l'école : confirmez votre inscription, posez une question sur le matériel et demandez où est la salle 5.",
    points: ["La confirmation", "Une question sur le matériel", "Une question sur la salle"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-8",
    title: "Aider une voisine",
    situation: "Votre voisine est nouvelle. Son fils va dans l'école de votre fille.",
    sourceMessage: {
      from: "Mme Silva",
      subject: "Question sur l'école",
      body: "Bonjour,\nMon fils commence l'école lundi.\nLes cours commencent à quelle heure ? Où est l'entrée ?\nMerci beaucoup,\nMme Silva",
    },
    instruction: "Répondez à Mme Silva : donnez les horaires de l'école, expliquez où est l'entrée et proposez d'y aller ensemble lundi.",
    points: ["Les horaires", "L'entrée de l'école", "La proposition d'y aller ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-9",
    title: "Autoriser une sortie scolaire",
    situation: "La classe de votre fils va au musée.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie au musée",
      body: "Bonjour,\nLa classe va au musée le vendredi 17 mai.\nLa sortie coûte dix francs. Merci de donner votre réponse.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : donnez votre accord pour la sortie, dites ce que votre fils apporte et posez une question sur le repas de midi.",
    points: ["Votre accord", "Ce que votre fils apporte", "Une question sur le repas"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-1-pee-10",
    title: "Prêter un livre",
    situation: "Un camarade de classe a oublié son livre.",
    sourceMessage: {
      from: "Lucas",
      subject: "Le livre de maths",
      body: "Salut !\nJ'ai oublié mon livre de maths à l'école.\nTu peux me prêter ton livre ce soir ? On a un exercice pour demain.\nLucas",
    },
    instruction: "Répondez à Lucas : acceptez de prêter votre livre, dites où et quand vous vous retrouvez et expliquez l'exercice pour demain.",
    points: ["Votre accord", "Où et quand", "L'exercice pour demain"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-1-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-1",
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
  id: "e3-1-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-1",
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
   E3.2 — Décrire son quotidien
   ════════════════════════════════════════════════════════════════════════════ */

const E3_2_CE_EMAIL_TEXT_1 = `De : Marta
Objet : Ma semaine

Bonjour,

Merci pour ton message ! Je te raconte ma semaine.
Je me lève à 6 h 30 et je prends mon petit-déjeuner à 7 h.
Je commence le travail à 8 h 30. À midi, je mange à la cafétéria avec une collègue.
Le soir, je rentre à la maison à 18 h et je prépare le repas.
Le mardi, je vais à la piscine. Le jeudi, j'ai un cours de français.
Le week-end, je me repose et je me promène au bord du lac.
Je me couche à 22 h 30.
Et toi, qu'est-ce que tu fais le week-end ?

À bientôt,
Marta`;

const E3_2_CE_EMAIL_POOL_1 = buildExpressPool("e3-2-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "À quelle heure Marta se lève-t-elle ?",
    text: ["À 6 h 30", "À 7 h 30", "À 8 h"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je me lève à 6 h _________.",
    fill: "30",
    fillA: ["trente"],
    vfQ: "Marta se lève à 6 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quelle heure prend-elle son petit-déjeuner ?",
    text: ["À 7 h", "À 6 h", "À 8 h 30"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je prends mon petit-déjeuner à _________ h.",
    fill: "7",
    fillA: ["sept", "7 h"],
    vfQ: "Marta prend son petit-déjeuner à 8 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "À quelle heure commence-t-elle le travail ?",
    text: ["À 8 h 30", "À 9 h", "À 8 h"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je commence le _________ à 8 h 30.",
    fill: "travail",
    vfQ: "Elle commence le travail à 8 h 30.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Où mange-t-elle à midi ?",
    text: ["À la cafétéria", "À la maison", "Au restaurant"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "À midi, je mange à la _________ avec une collègue.",
    fill: "cafétéria",
    fillA: ["cafeteria"],
    vfQ: "À midi, elle mange à la maison.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Avec qui mange-t-elle à midi ?",
    text: ["Avec une collègue", "Avec sa sœur", "Toute seule"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je mange à la cafétéria avec une _________.",
    fill: "collègue",
    fillA: ["collegue"],
    vfQ: "Elle mange à midi avec une collègue.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure rentre-t-elle à la maison ?",
    text: ["À 18 h", "À 17 h", "À 19 h 30"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Le soir, je rentre à la maison à _________ h.",
    fill: "18",
    fillA: ["dix-huit", "18 h"],
    vfQ: "Elle rentre à la maison à 19 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q7",
    textQ: "Que fait-elle le mardi ?",
    text: [
      "Elle va à la piscine",
      "Elle a un cours de français",
      "Elle va au cinéma",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Le mardi, je vais à la _________.",
    fill: "piscine",
    vfQ: "Le mardi, elle va à la piscine.",
    vfC: 0,
  }),
  q({
    id: "cem-q8",
    textQ: "Quel jour a-t-elle un cours de français ?",
    text: ["Le jeudi", "Le mardi", "Le samedi"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Le _________, j'ai un cours de français.",
    fill: "jeudi",
    vfQ: "Elle a un cours de français le lundi.",
    vfC: 1,
  }),
  q({
    id: "cem-q9",
    textQ: "Que fait-elle le week-end ?",
    text: [
      "Elle se repose et elle se promène",
      "Elle travaille",
      "Elle fait les courses",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Le week-end, je me promène au bord du _________.",
    fill: "lac",
    vfQ: "Le week-end, elle se promène au bord du lac.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "À quelle heure se couche-t-elle ?",
    text: ["À 22 h 30", "À 23 h", "À 21 h"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je me couche à _________ h 30.",
    fill: "22",
    fillA: ["vingt-deux"],
    vfQ: "Elle se couche à minuit.",
    vfC: 1,
  }),

]);

const E3_2_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur quotidien

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E3_2_CE_EMAIL_POOL_2 = buildExpressPool("e3-2-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur quotidien

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E3_2_CE_EMAIL_POOL_3 = buildExpressPool("e3-2-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur quotidien

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E3_2_CE_EMAIL_POOL_4 = buildExpressPool("e3-2-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "10 ans"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur quotidien

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E3_2_CE_EMAIL_POOL_5 = buildExpressPool("e3-2-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur quotidien

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E3_2_CE_EMAIL_POOL_6 = buildExpressPool("e3-2-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur quotidien

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E3_2_CE_EMAIL_POOL_7 = buildExpressPool("e3-2-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur quotidien

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E3_2_CE_EMAIL_POOL_8 = buildExpressPool("e3-2-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur quotidien

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E3_2_CE_EMAIL_POOL_9 = buildExpressPool("e3-2-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur quotidien

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E3_2_CE_EMAIL_POOL_10 = buildExpressPool("e3-2-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur quotidien

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E3_2_CE_EMAIL_POOL_11 = buildExpressPool("e3-2-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur quotidien

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E3_2_CE_EMAIL_POOL_12 = buildExpressPool("e3-2-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur quotidien

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E3_2_CE_EMAIL_POOL_13 = buildExpressPool("e3-2-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur quotidien

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E3_2_CE_EMAIL_POOL_14 = buildExpressPool("e3-2-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur quotidien

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E3_2_CE_EMAIL_POOL_15 = buildExpressPool("e3-2-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur quotidien

Bonjour,

Je m'appelle David. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E3_2_CE_EMAIL_POOL_16 = buildExpressPool("e3-2-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur quotidien

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E3_2_CE_EMAIL_POOL_17 = buildExpressPool("e3-2-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur quotidien

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E3_2_CE_EMAIL_POOL_18 = buildExpressPool("e3-2-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur quotidien

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E3_2_CE_EMAIL_POOL_19 = buildExpressPool("e3-2-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_2_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur quotidien

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de quotidien.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E3_2_CE_EMAIL_POOL_20 = buildExpressPool("e3-2-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Quotidien", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "quotidien",
    vfQ: "L'e-mail parle de quotidien.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E3_2_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-2-ce-email-1",
  readingText: E3_2_CE_EMAIL_TEXT_1,
  questionPool: E3_2_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-2",
  readingText: E3_2_CE_EMAIL_TEXT_2,
  questionPool: E3_2_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-3",
  readingText: E3_2_CE_EMAIL_TEXT_3,
  questionPool: E3_2_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-4",
  readingText: E3_2_CE_EMAIL_TEXT_4,
  questionPool: E3_2_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-5",
  readingText: E3_2_CE_EMAIL_TEXT_5,
  questionPool: E3_2_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-6",
  readingText: E3_2_CE_EMAIL_TEXT_6,
  questionPool: E3_2_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-7",
  readingText: E3_2_CE_EMAIL_TEXT_7,
  questionPool: E3_2_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-8",
  readingText: E3_2_CE_EMAIL_TEXT_8,
  questionPool: E3_2_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-9",
  readingText: E3_2_CE_EMAIL_TEXT_9,
  questionPool: E3_2_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-10",
  readingText: E3_2_CE_EMAIL_TEXT_10,
  questionPool: E3_2_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-11",
  readingText: E3_2_CE_EMAIL_TEXT_11,
  questionPool: E3_2_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-12",
  readingText: E3_2_CE_EMAIL_TEXT_12,
  questionPool: E3_2_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-13",
  readingText: E3_2_CE_EMAIL_TEXT_13,
  questionPool: E3_2_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-14",
  readingText: E3_2_CE_EMAIL_TEXT_14,
  questionPool: E3_2_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-15",
  readingText: E3_2_CE_EMAIL_TEXT_15,
  questionPool: E3_2_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-16",
  readingText: E3_2_CE_EMAIL_TEXT_16,
  questionPool: E3_2_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-17",
  readingText: E3_2_CE_EMAIL_TEXT_17,
  questionPool: E3_2_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-18",
  readingText: E3_2_CE_EMAIL_TEXT_18,
  questionPool: E3_2_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-19",
  readingText: E3_2_CE_EMAIL_TEXT_19,
  questionPool: E3_2_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-2-ce-email-20",
  readingText: E3_2_CE_EMAIL_TEXT_20,
  questionPool: E3_2_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_2_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-2-pee-1",
    title: "Raconter son week-end",
    situation: "Votre amie Marta raconte sa semaine et pose une question.",
    sourceMessage: {
      from: "Marta",
      subject: "Ma semaine",
      body: "Bonjour,\nJe me lève à 6 h 30 et je travaille toute la journée.\nLe week-end, je me repose au bord du lac.\nEt toi, qu'est-ce que tu fais le week-end ?\nMarta",
    },
    instruction: "Répondez à Marta : racontez votre week-end, dites à quelle heure vous vous levez et proposez une activité ensemble.",
    points: ["Votre week-end", "L'heure du lever", "Une activité ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-2",
    title: "Donner des nouvelles à sa famille",
    situation: "Votre grand-mère veut connaître votre vie.",
    sourceMessage: {
      from: "Mamie",
      subject: "Des nouvelles",
      body: "Bonjour,\nComment vas-tu ? Raconte-moi tes journées.\nTu manges bien ? Tu dors assez ?\nGrosses bises,\nMamie",
    },
    instruction: "Répondez à votre grand-mère : décrivez votre journée, parlez de vos repas et dites à quelle heure vous vous couchez.",
    points: ["Votre journée", "Vos repas", "L'heure du coucher"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-3",
    title: "Choisir un horaire de sport",
    situation: "Votre club de gym change ses horaires.",
    sourceMessage: {
      from: "Club de gym Tonic",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nNos cours changent d'horaire.\nVous pouvez venir le mardi à 18 h ou le samedi à 10 h.\nQuel horaire préférez-vous ?\nLe club de gym",
    },
    instruction: "Répondez au club : choisissez un horaire, expliquez pourquoi avec votre emploi du temps et remerciez.",
    points: ["L'horaire choisi", "Pourquoi cet horaire", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-4",
    title: "Trouver un moment pour se voir",
    situation: "Une amie veut vous voir cette semaine.",
    sourceMessage: {
      from: "Nadia",
      subject: "On se voit quand ?",
      body: "Coucou,\nJe veux te voir cette semaine !\nTu es libre quel jour ? Le soir ou le week-end ?\nBises,\nNadia",
    },
    instruction: "Répondez à Nadia : expliquez votre semaine, proposez un jour et une heure et proposez une activité.",
    points: ["Votre semaine", "Un jour et une heure", "Une activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-5",
    title: "Organiser les repas de la semaine",
    situation: "Votre colocataire veut organiser les repas de la semaine.",
    sourceMessage: {
      from: "Tom",
      subject: "Les repas de la semaine",
      body: "Salut,\nOn organise les repas ? Moi, je peux cuisiner le lundi et le mercredi.\nEt toi, quels soirs es-tu à la maison ?\nTom",
    },
    instruction: "Répondez à Tom : dites quels soirs vous êtes à la maison, proposez vos jours de cuisine et posez une question sur les courses.",
    points: ["Vos soirs à la maison", "Vos jours de cuisine", "Une question sur les courses"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-6",
    title: "Expliquer sa routine du matin",
    situation: "Votre cousin est toujours en retard le matin.",
    sourceMessage: {
      from: "Sami",
      subject: "Le matin, c'est dur !",
      body: "Salut,\nJe suis toujours en retard le matin !\nToi, tu arrives toujours à l'heure. Comment tu fais ?\nSami",
    },
    instruction: "Répondez à Sami : décrivez votre routine du matin, dites à quelle heure vous vous levez et donnez-lui un conseil.",
    points: ["Votre routine du matin", "L'heure du lever", "Un conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-7",
    title: "Répondre à l'école de langue",
    situation: "Votre cours de français change de jour.",
    sourceMessage: {
      from: "École de français",
      subject: "Changement d'horaire",
      body: "Bonjour,\nVotre cours de français change de jour : il a lieu maintenant le jeudi à 18 h 30.\nCet horaire vous convient-il ?\nL'école de français",
    },
    instruction: "Répondez à l'école : dites si l'horaire vous convient, expliquez votre emploi du temps du jeudi et posez une question.",
    points: ["Votre réponse", "Votre emploi du temps du jeudi", "Une question"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-8",
    title: "Décrire sa journée type",
    situation: "Votre correspondante veut connaître votre quotidien.",
    sourceMessage: {
      from: "Lena",
      subject: "Ta journée type",
      body: "Bonjour,\nDans ma ville, je me lève à 7 h et je vais à l'école à vélo.\nEt toi ? Raconte-moi ta journée type, du matin au soir.\nLena",
    },
    instruction: "Répondez à Lena : racontez votre matin, votre après-midi et votre soirée.",
    points: ["Le matin", "L'après-midi", "La soirée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-9",
    title: "Accepter une invitation à la piscine",
    situation: "Un ami vous invite dimanche matin.",
    sourceMessage: {
      from: "Karim",
      subject: "Piscine dimanche ?",
      body: "Salut,\nJe vais à la piscine dimanche matin. Tu viens avec moi ?\nElle ouvre à 9 h.\nKarim",
    },
    instruction: "Répondez à Karim : acceptez l'invitation, dites à quelle heure vous vous levez le dimanche et proposez une heure de rendez-vous.",
    points: ["Votre accord", "Votre heure de lever le dimanche", "Une heure de rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-2-pee-10",
    title: "Répondre à la bibliothèque",
    situation: "La bibliothèque de votre quartier change ses horaires.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Nos nouveaux horaires",
      body: "Bonjour,\nLa bibliothèque est maintenant ouverte le soir, jusqu'à 20 h.\nQuels jours venez-vous chez nous ?\nLa bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : dites quels jours vous venez, expliquez ce que vous faites à la bibliothèque et remerciez pour les nouveaux horaires.",
    points: ["Les jours de visite", "Vos activités à la bibliothèque", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-2-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-2",
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
  id: "e3-2-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-2",
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
   E3.3 — Aller au travail
   ════════════════════════════════════════════════════════════════════════════ */

const E3_3_CE_EMAIL_TEXT_1 = `De : Entreprise Batimex
Objet : Votre premier jour de travail

Bonjour,

Bienvenue dans notre équipe ! Vous commencez le lundi 3 février à 8 h.
Le bureau est au troisième étage, à côté de l'accueil.
Votre collègue vous montre le travail pendant la première semaine.
Vous travaillez du lundi au vendredi, de 8 h à 17 h.
La pause de midi dure une heure, de 12 h à 13 h. Il y a une cafétéria au rez-de-chaussée.
Le parking est petit : venez en bus, l'arrêt est devant l'entreprise.
Le premier jour, apportez votre carte d'identité et votre contrat.

Cordialement,
Le service du personnel`;

const E3_3_CE_EMAIL_POOL_1 = buildExpressPool("e3-3-ce-email-1", [

  q({
    id: "cem-q1",
    textQ: "Quel jour commence le travail ?",
    text: ["Le lundi 3 février", "Le mardi 4 février", "Le lundi 10 février"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Vous commencez le _________ 3 février.",
    fill: "lundi",
    vfQ: "Le travail commence le lundi 3 février.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "À quelle heure commence le travail le matin ?",
    text: ["À 8 h", "À 9 h", "À 7 h 30"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Vous commencez le lundi 3 février à _________ h.",
    fill: "8",
    fillA: ["huit", "8 h"],
    vfQ: "Le travail commence à 9 h.",
    vfC: 1,
  }),
  q({
    id: "cem-q3",
    textQ: "Où est le bureau ?",
    text: ["Au troisième étage", "Au premier étage", "Au rez-de-chaussée"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Le bureau est au _________ étage.",
    fill: "troisième",
    fillA: ["troisieme", "3e", "3"],
    vfQ: "Le bureau est au troisième étage, à côté de l'accueil.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Qui montre le travail la première semaine ?",
    text: ["Un collègue", "Le directeur", "Personne"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Votre _________ vous montre le travail pendant la première semaine.",
    fill: "collègue",
    fillA: ["collegue"],
    vfQ: "Le directeur montre le travail la première semaine.",
    vfC: 1,
  }),
  q({
    id: "cem-q5",
    textQ: "Quels jours travaille-t-on ?",
    text: ["Du lundi au vendredi", "Du lundi au samedi", "Tous les jours"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Vous travaillez du lundi au _________.",
    fill: "vendredi",
    vfQ: "On travaille le samedi.",
    vfC: 1,
  }),
  q({
    id: "cem-q6",
    textQ: "À quelle heure finit le travail ?",
    text: ["À 17 h", "À 18 h", "À 16 h 30"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Vous travaillez de 8 h à _________ h.",
    fill: "17",
    fillA: ["dix-sept", "17 h"],
    vfQ: "Le travail finit à 17 h.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Combien de temps dure la pause de midi ?",
    text: ["Une heure", "Trente minutes", "Deux heures"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "La pause de midi dure une _________.",
    fill: "heure",
    vfQ: "La pause de midi dure deux heures.",
    vfC: 1,
  }),
  q({
    id: "cem-q8",
    textQ: "Où est la cafétéria ?",
    text: [
      "Au rez-de-chaussée",
      "Au troisième étage",
      "En face de l'entreprise",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Il y a une _________ au rez-de-chaussée.",
    fill: "cafétéria",
    fillA: ["cafeteria"],
    vfQ: "Il y a une cafétéria au rez-de-chaussée.",
    vfC: 0,
  }),
  q({
    id: "cem-q9",
    textQ: "Comment faut-il venir au travail ?",
    text: ["En bus", "En voiture", "À vélo"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Le parking est petit : venez en _________.",
    fill: "bus",
    vfQ: "L'arrêt de bus est devant l'entreprise.",
    vfC: 0,
  }),
  q({
    id: "cem-q10",
    textQ: "Qu'est-ce qu'il faut apporter le premier jour ?",
    text: [
      "La carte d'identité et le contrat",
      "Le passeport et une photo",
      "Un ordinateur",
    ],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Apportez votre carte d'identité et votre _________.",
    fill: "contrat",
    vfQ: "Il faut apporter un ordinateur le premier jour.",
    vfC: 1,
  }),

]);

const E3_3_CE_EMAIL_TEXT_2 = `De : Lucas
Objet : Message sur emploi

Bonjour,

Je m'appelle Lucas. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 2 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Lucas`;

const E3_3_CE_EMAIL_POOL_2 = buildExpressPool("e3-3-ce-email-2", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Lucas", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Lucas",
    vfQ: "Lucas écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_3 = `De : Nina
Objet : Message sur emploi

Bonjour,

Je m'appelle Nina. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 3 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Nina`;

const E3_3_CE_EMAIL_POOL_3 = buildExpressPool("e3-3-ce-email-3", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Nina", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Nina",
    vfQ: "Nina écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_4 = `De : Paul
Objet : Message sur emploi

Bonjour,

Je m'appelle Paul. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 4 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Paul`;

const E3_3_CE_EMAIL_POOL_4 = buildExpressPool("e3-3-ce-email-4", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Paul", "Marie", "10 ans"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Paul",
    vfQ: "Paul écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_5 = `De : Sara
Objet : Message sur emploi

Bonjour,

Je m'appelle Sara. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 5 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Sara`;

const E3_3_CE_EMAIL_POOL_5 = buildExpressPool("e3-3-ce-email-5", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Sara", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Sara",
    vfQ: "Sara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_6 = `De : Tom
Objet : Message sur emploi

Bonjour,

Je m'appelle Tom. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 6 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Tom`;

const E3_3_CE_EMAIL_POOL_6 = buildExpressPool("e3-3-ce-email-6", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Tom", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Tom",
    vfQ: "Tom écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_7 = `De : Emma
Objet : Message sur emploi

Bonjour,

Je m'appelle Emma. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 7 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Emma`;

const E3_3_CE_EMAIL_POOL_7 = buildExpressPool("e3-3-ce-email-7", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Emma", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Emma",
    vfQ: "Emma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_8 = `De : Hugo
Objet : Message sur emploi

Bonjour,

Je m'appelle Hugo. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 8 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Hugo`;

const E3_3_CE_EMAIL_POOL_8 = buildExpressPool("e3-3-ce-email-8", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Hugo", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Hugo",
    vfQ: "Hugo écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_9 = `De : Léa
Objet : Message sur emploi

Bonjour,

Je m'appelle Léa. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 9 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Léa`;

const E3_3_CE_EMAIL_POOL_9 = buildExpressPool("e3-3-ce-email-9", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Léa", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Léa",
    vfQ: "Léa écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_10 = `De : Marc
Objet : Message sur emploi

Bonjour,

Je m'appelle Marc. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 10 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Marc`;

const E3_3_CE_EMAIL_POOL_10 = buildExpressPool("e3-3-ce-email-10", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Marc", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Marc",
    vfQ: "Marc écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_11 = `De : Julie
Objet : Message sur emploi

Bonjour,

Je m'appelle Julie. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 11 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Julie`;

const E3_3_CE_EMAIL_POOL_11 = buildExpressPool("e3-3-ce-email-11", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Julie", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Julie",
    vfQ: "Julie écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_12 = `De : Omar
Objet : Message sur emploi

Bonjour,

Je m'appelle Omar. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 12 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Omar`;

const E3_3_CE_EMAIL_POOL_12 = buildExpressPool("e3-3-ce-email-12", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Omar", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Omar",
    vfQ: "Omar écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_13 = `De : Clara
Objet : Message sur emploi

Bonjour,

Je m'appelle Clara. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 13 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Clara`;

const E3_3_CE_EMAIL_POOL_13 = buildExpressPool("e3-3-ce-email-13", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Clara", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Clara",
    vfQ: "Clara écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_14 = `De : Yann
Objet : Message sur emploi

Bonjour,

Je m'appelle Yann. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 14 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Yann`;

const E3_3_CE_EMAIL_POOL_14 = buildExpressPool("e3-3-ce-email-14", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Yann", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Yann",
    vfQ: "Yann écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_15 = `De : Inès
Objet : Message sur emploi

Bonjour,

Je m'appelle Inès. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 15 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Inès`;

const E3_3_CE_EMAIL_POOL_15 = buildExpressPool("e3-3-ce-email-15", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Inès", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Inès",
    vfQ: "Inès écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_16 = `De : David
Objet : Message sur emploi

Bonjour,

Je m'appelle David. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 16 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
David`;

const E3_3_CE_EMAIL_POOL_16 = buildExpressPool("e3-3-ce-email-16", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["David", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "David",
    vfQ: "David écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_17 = `De : Maya
Objet : Message sur emploi

Bonjour,

Je m'appelle Maya. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 17 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Maya`;

const E3_3_CE_EMAIL_POOL_17 = buildExpressPool("e3-3-ce-email-17", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Maya", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Maya",
    vfQ: "Maya écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_18 = `De : Antoine
Objet : Message sur emploi

Bonjour,

Je m'appelle Antoine. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 18 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Antoine`;

const E3_3_CE_EMAIL_POOL_18 = buildExpressPool("e3-3-ce-email-18", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Antoine", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Antoine",
    vfQ: "Antoine écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_19 = `De : Salma
Objet : Message sur emploi

Bonjour,

Je m'appelle Salma. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 19 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Salma`;

const E3_3_CE_EMAIL_POOL_19 = buildExpressPool("e3-3-ce-email-19", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Salma", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Salma",
    vfQ: "Salma écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

const E3_3_CE_EMAIL_TEXT_20 = `De : Victor
Objet : Message sur emploi

Bonjour,

Je m'appelle Victor. Je vous écris au sujet de emploi.
J'habite en Suisse depuis 20 ans. Je parle français et une autre langue.
Merci de lire mon message avec attention.
À bientôt,
Victor`;

const E3_3_CE_EMAIL_POOL_20 = buildExpressPool("e3-3-ce-email-20", [
  q({
    id: "ce-q1",
    textQ: "Qui écrit cet e-mail ?",
    text: ["Victor", "Marie", "Paul"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Je m'appelle _________.",
    fill: "Victor",
    vfQ: "Victor écrit l'e-mail.",
    vfC: 0,
  }),
  q({
    id: "ce-q2",
    textQ: "De quoi parle l'e-mail ?",
    text: ["Emploi", "vacances", "sport"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "Au sujet de _________.",
    fill: "emploi",
    vfQ: "L'e-mail parle de emploi.",
    vfC: 0,
  }),
  q({
    id: "ce-q3",
    textQ: "Où habite l'auteur ?",
    text: ["En Suisse", "En France", "En Italie"],
    textC: 0,
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
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
    img: ["professeur", "vendeur", "serveur"],
    imgC: 0,
    fillQ: "_________,",
    fill: "À bientôt",
    vfQ: "L'auteur dit à bientôt.",
    vfC: 0,
  }),
]);

export const E3_3_CE_EMAIL: CommunicationExercise[] = [
  readingPoolExercise({
  id: "e3-3-ce-email-1",
  readingText: E3_3_CE_EMAIL_TEXT_1,
  questionPool: E3_3_CE_EMAIL_POOL_1,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-2",
  readingText: E3_3_CE_EMAIL_TEXT_2,
  questionPool: E3_3_CE_EMAIL_POOL_2,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-3",
  readingText: E3_3_CE_EMAIL_TEXT_3,
  questionPool: E3_3_CE_EMAIL_POOL_3,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-4",
  readingText: E3_3_CE_EMAIL_TEXT_4,
  questionPool: E3_3_CE_EMAIL_POOL_4,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-5",
  readingText: E3_3_CE_EMAIL_TEXT_5,
  questionPool: E3_3_CE_EMAIL_POOL_5,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-6",
  readingText: E3_3_CE_EMAIL_TEXT_6,
  questionPool: E3_3_CE_EMAIL_POOL_6,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-7",
  readingText: E3_3_CE_EMAIL_TEXT_7,
  questionPool: E3_3_CE_EMAIL_POOL_7,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-8",
  readingText: E3_3_CE_EMAIL_TEXT_8,
  questionPool: E3_3_CE_EMAIL_POOL_8,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-9",
  readingText: E3_3_CE_EMAIL_TEXT_9,
  questionPool: E3_3_CE_EMAIL_POOL_9,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-10",
  readingText: E3_3_CE_EMAIL_TEXT_10,
  questionPool: E3_3_CE_EMAIL_POOL_10,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-11",
  readingText: E3_3_CE_EMAIL_TEXT_11,
  questionPool: E3_3_CE_EMAIL_POOL_11,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-12",
  readingText: E3_3_CE_EMAIL_TEXT_12,
  questionPool: E3_3_CE_EMAIL_POOL_12,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-13",
  readingText: E3_3_CE_EMAIL_TEXT_13,
  questionPool: E3_3_CE_EMAIL_POOL_13,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-14",
  readingText: E3_3_CE_EMAIL_TEXT_14,
  questionPool: E3_3_CE_EMAIL_POOL_14,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-15",
  readingText: E3_3_CE_EMAIL_TEXT_15,
  questionPool: E3_3_CE_EMAIL_POOL_15,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-16",
  readingText: E3_3_CE_EMAIL_TEXT_16,
  questionPool: E3_3_CE_EMAIL_POOL_16,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-17",
  readingText: E3_3_CE_EMAIL_TEXT_17,
  questionPool: E3_3_CE_EMAIL_POOL_17,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-18",
  readingText: E3_3_CE_EMAIL_TEXT_18,
  questionPool: E3_3_CE_EMAIL_POOL_18,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-19",
  readingText: E3_3_CE_EMAIL_TEXT_19,
  questionPool: E3_3_CE_EMAIL_POOL_19,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
  readingPoolExercise({
  id: "e3-3-ce-email-20",
  readingText: E3_3_CE_EMAIL_TEXT_20,
  questionPool: E3_3_CE_EMAIL_POOL_20,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
];

export const E3_3_PE_EMAIL: ExpressPePrompt[] = [
  {
    id: "e3-3-pee-1",
    title: "Confirmer son premier jour",
    situation: "Vous commencez un nouveau travail lundi.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Votre premier jour",
      body: "Bonjour,\nVous commencez le lundi 3 février à 8 h.\nMerci de confirmer votre venue.\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : confirmez votre venue, remerciez et posez une question sur le bus ou le parking.",
    points: ["La confirmation", "Un remerciement", "Une question sur le trajet"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-2",
    title: "Prévenir d'un retard",
    situation: "Votre bus est en retard ce matin.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Réunion de 9 h",
      body: "Bonjour,\nLa réunion d'équipe commence à 9 h dans mon bureau.\nÀ tout à l'heure,\nM. Girard",
    },
    instruction: "Répondez à M. Girard : excusez-vous, expliquez que votre bus est en retard et dites à quelle heure vous arrivez.",
    points: ["L'excuse", "Le problème de bus", "Votre heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-3",
    title: "Déjeuner avec un collègue",
    situation: "Un collègue vous propose de manger ensemble.",
    sourceMessage: {
      from: "Paulo",
      subject: "On mange ensemble ?",
      body: "Salut,\nTu es libre à midi ? On peut manger ensemble à la cafétéria.\nPaulo",
    },
    instruction: "Répondez à Paulo : acceptez, proposez une heure et posez une question sur la cafétéria.",
    points: ["Votre accord", "Une heure", "Une question sur la cafétéria"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-4",
    title: "Demander des jours de congé",
    situation: "Le service du personnel prépare le planning des vacances.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Vos vacances d'été",
      body: "Bonjour,\nNous préparons le planning de l'été.\nQuelles dates de vacances voulez-vous ?\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : donnez vos dates de vacances, expliquez pourquoi et remerciez.",
    points: ["Vos dates", "Pourquoi ces dates", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-5",
    title: "Parler de son nouveau travail",
    situation: "Une amie vous pose des questions sur votre travail.",
    sourceMessage: {
      from: "Aïcha",
      subject: "Ton nouveau travail",
      body: "Salut !\nAlors, ce nouveau travail ? Les collègues sont sympas ?\nTu fais quels horaires ? Raconte-moi tout !\nAïcha",
    },
    instruction: "Répondez à Aïcha : décrivez votre travail, parlez de vos collègues et donnez vos horaires.",
    points: ["Votre travail", "Vos collègues", "Vos horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-6",
    title: "Répondre au changement d'horaire",
    situation: "Votre entreprise change les horaires de travail.",
    sourceMessage: {
      from: "Entreprise Batimex",
      subject: "Nouveaux horaires",
      body: "Bonjour,\nÀ partir du mois prochain, le travail commence à 7 h 30.\nCet horaire vous convient-il ?\nLa direction",
    },
    instruction: "Répondez à la direction : dites si l'horaire vous convient, expliquez pourquoi et posez une question sur la pause de midi.",
    points: ["Votre réponse", "Pourquoi", "Une question sur la pause"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-7",
    title: "Organiser un covoiturage",
    situation: "Une collègue habite près de chez vous.",
    sourceMessage: {
      from: "Elena",
      subject: "Trajet en voiture",
      body: "Bonjour,\nJ'habite près de chez toi et je viens au travail en voiture.\nTu veux venir avec moi le matin ?\nElena",
    },
    instruction: "Répondez à Elena : acceptez, dites où vous habitez et proposez une heure de départ.",
    points: ["Votre accord", "Où vous habitez", "Une heure de départ"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-8",
    title: "Prévenir de son absence",
    situation: "Vous êtes malade et vous ne pouvez pas travailler.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Où êtes-vous ?",
      body: "Bonjour,\nVous n'êtes pas au bureau ce matin. Tout va bien ?\nM. Girard",
    },
    instruction: "Répondez à M. Girard : excusez-vous, expliquez que vous êtes malade et dites quand vous revenez au travail.",
    points: ["L'excuse", "Votre maladie", "Quand vous revenez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-9",
    title: "Participer au repas d'équipe",
    situation: "Vos collègues organisent un repas.",
    sourceMessage: {
      from: "Julie",
      subject: "Repas d'équipe vendredi",
      body: "Bonjour à tous,\nOn organise un repas d'équipe vendredi à 19 h au restaurant.\nQui vient ? Merci de répondre avant mercredi.\nJulie",
    },
    instruction: "Répondez à Julie : dites que vous venez, posez une question sur le restaurant et demandez le prix du repas.",
    points: ["Votre accord", "Une question sur le restaurant", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e3-3-pee-10",
    title: "Aller chercher son badge",
    situation: "Votre badge d'entrée est prêt.",
    sourceMessage: {
      from: "Service du personnel",
      subject: "Votre badge",
      body: "Bonjour,\nVotre badge d'entrée est prêt à l'accueil.\nVous pouvez venir le chercher cette semaine, entre 8 h et 16 h.\nLe service du personnel",
    },
    instruction: "Répondez au service du personnel : remerciez, dites quand vous venez chercher le badge et demandez s'il faut apporter un document.",
    points: ["Un remerciement", "Quand vous venez", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
{
  id: "e3-3-pee-11",
  title: "Répondre à un e-mail — variante 11",
  situation: "Vous recevez un e-mail de Contact 11.",
  sourceMessage: {
    from: "Contact 11",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-12",
  title: "Répondre à un e-mail — variante 12",
  situation: "Vous recevez un e-mail de Contact 12.",
  sourceMessage: {
    from: "Contact 12",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-13",
  title: "Répondre à un e-mail — variante 13",
  situation: "Vous recevez un e-mail de Contact 13.",
  sourceMessage: {
    from: "Contact 13",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-14",
  title: "Répondre à un e-mail — variante 14",
  situation: "Vous recevez un e-mail de Contact 14.",
  sourceMessage: {
    from: "Contact 14",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-15",
  title: "Répondre à un e-mail — variante 15",
  situation: "Vous recevez un e-mail de Contact 15.",
  sourceMessage: {
    from: "Contact 15",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-16",
  title: "Répondre à un e-mail — variante 16",
  situation: "Vous recevez un e-mail de Contact 16.",
  sourceMessage: {
    from: "Contact 16",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-17",
  title: "Répondre à un e-mail — variante 17",
  situation: "Vous recevez un e-mail de Contact 17.",
  sourceMessage: {
    from: "Contact 17",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-18",
  title: "Répondre à un e-mail — variante 18",
  situation: "Vous recevez un e-mail de Contact 18.",
  sourceMessage: {
    from: "Contact 18",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-19",
  title: "Répondre à un e-mail — variante 19",
  situation: "Vous recevez un e-mail de Contact 19.",
  sourceMessage: {
    from: "Contact 19",
    subject: "Question sur e3-3",
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
  id: "e3-3-pee-20",
  title: "Répondre à un e-mail — variante 20",
  situation: "Vous recevez un e-mail de Contact 20.",
  sourceMessage: {
    from: "Contact 20",
    subject: "Question sur e3-3",
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
