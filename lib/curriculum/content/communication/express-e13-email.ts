import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E13 — Monde professionnel (formation, stage, emploi, entretien, intégration).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E13.1 — Suivre une formation
   ════════════════════════════════════════════════════════════════════════════ */

const E13_1_CE_EMAIL_TEXT = `De : Service E13 1 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_POOL = buildExpressPool("e13-1-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 1 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 1 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 1", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 1.",
    fill: "sujet",
    vfQ: "Sujet : sujet 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 1", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 1.",
    fill: "détail",
    vfQ: "Info : détail 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 1 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 1 jours.",
    fill: "délai",
    vfQ: "Délai : délai 1 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 1", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 1.",
    fill: "action",
    vfQ: "Action : action 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 1", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 1.",
    fill: "contact",
    vfQ: "Contact : contact 1.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_2_TEXT = `De : Service E13 1 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_2_POOL = buildExpressPool("e13-1-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 2 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 2 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 2", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 2.",
    fill: "sujet",
    vfQ: "Sujet : sujet 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 2", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 2.",
    fill: "détail",
    vfQ: "Info : détail 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 2 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 2 jours.",
    fill: "délai",
    vfQ: "Délai : délai 2 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 2", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 2.",
    fill: "action",
    vfQ: "Action : action 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 2", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 2.",
    fill: "contact",
    vfQ: "Contact : contact 2.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_3_TEXT = `De : Service E13 1 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_3_POOL = buildExpressPool("e13-1-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 3 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 3 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 3", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 3.",
    fill: "sujet",
    vfQ: "Sujet : sujet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 3", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 3.",
    fill: "détail",
    vfQ: "Info : détail 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 3 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 3 jours.",
    fill: "délai",
    vfQ: "Délai : délai 3 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 3", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 3.",
    fill: "action",
    vfQ: "Action : action 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 3", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 3.",
    fill: "contact",
    vfQ: "Contact : contact 3.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_4_TEXT = `De : Service E13 1 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_4_POOL = buildExpressPool("e13-1-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 4 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 4 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 4", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 4.",
    fill: "sujet",
    vfQ: "Sujet : sujet 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 4", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 4.",
    fill: "détail",
    vfQ: "Info : détail 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 4 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 4 jours.",
    fill: "délai",
    vfQ: "Délai : délai 4 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 4", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 4.",
    fill: "action",
    vfQ: "Action : action 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 4", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 4.",
    fill: "contact",
    vfQ: "Contact : contact 4.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_5_TEXT = `De : Service E13 1 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_5_POOL = buildExpressPool("e13-1-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 5 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 5 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 5", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 5.",
    fill: "sujet",
    vfQ: "Sujet : sujet 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 5", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 5.",
    fill: "détail",
    vfQ: "Info : détail 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 5 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 5 jours.",
    fill: "délai",
    vfQ: "Délai : délai 5 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 5", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 5.",
    fill: "action",
    vfQ: "Action : action 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 5", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 5.",
    fill: "contact",
    vfQ: "Contact : contact 5.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_6_TEXT = `De : Service E13 1 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_6_POOL = buildExpressPool("e13-1-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 6 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 6 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 6", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 6.",
    fill: "sujet",
    vfQ: "Sujet : sujet 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 6", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 6.",
    fill: "détail",
    vfQ: "Info : détail 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 6 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 6 jours.",
    fill: "délai",
    vfQ: "Délai : délai 6 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 6", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 6.",
    fill: "action",
    vfQ: "Action : action 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 6", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 6.",
    fill: "contact",
    vfQ: "Contact : contact 6.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_7_TEXT = `De : Service E13 1 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_7_POOL = buildExpressPool("e13-1-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 7 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 7 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 7", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 7.",
    fill: "sujet",
    vfQ: "Sujet : sujet 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 7", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 7.",
    fill: "détail",
    vfQ: "Info : détail 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 7 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 7 jours.",
    fill: "délai",
    vfQ: "Délai : délai 7 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 7", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 7.",
    fill: "action",
    vfQ: "Action : action 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 7", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 7.",
    fill: "contact",
    vfQ: "Contact : contact 7.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_8_TEXT = `De : Service E13 1 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_8_POOL = buildExpressPool("e13-1-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 8 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 8 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 8", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 8.",
    fill: "sujet",
    vfQ: "Sujet : sujet 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 8", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 8.",
    fill: "détail",
    vfQ: "Info : détail 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 8 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 8 jours.",
    fill: "délai",
    vfQ: "Délai : délai 8 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 8", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 8.",
    fill: "action",
    vfQ: "Action : action 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 8", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 8.",
    fill: "contact",
    vfQ: "Contact : contact 8.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_9_TEXT = `De : Service E13 1 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_9_POOL = buildExpressPool("e13-1-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 9 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 9 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 9", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 9.",
    fill: "sujet",
    vfQ: "Sujet : sujet 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 9", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 9.",
    fill: "détail",
    vfQ: "Info : détail 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 9 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 9 jours.",
    fill: "délai",
    vfQ: "Délai : délai 9 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 9", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 9.",
    fill: "action",
    vfQ: "Action : action 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 9", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 9.",
    fill: "contact",
    vfQ: "Contact : contact 9.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_10_TEXT = `De : Service E13 1 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_10_POOL = buildExpressPool("e13-1-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 10 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 10 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 10", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 10.",
    fill: "sujet",
    vfQ: "Sujet : sujet 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 10", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 10.",
    fill: "détail",
    vfQ: "Info : détail 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 10 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 10 jours.",
    fill: "délai",
    vfQ: "Délai : délai 10 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 10", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 10.",
    fill: "action",
    vfQ: "Action : action 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 10", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 10.",
    fill: "contact",
    vfQ: "Contact : contact 10.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_11_TEXT = `De : Service E13 1 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_11_POOL = buildExpressPool("e13-1-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 11 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 11 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 11", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 11.",
    fill: "sujet",
    vfQ: "Sujet : sujet 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 11", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 11.",
    fill: "détail",
    vfQ: "Info : détail 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 11 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 11 jours.",
    fill: "délai",
    vfQ: "Délai : délai 11 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 11", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 11.",
    fill: "action",
    vfQ: "Action : action 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 11", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 11.",
    fill: "contact",
    vfQ: "Contact : contact 11.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_12_TEXT = `De : Service E13 1 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_12_POOL = buildExpressPool("e13-1-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 12 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 12 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 12", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 12.",
    fill: "sujet",
    vfQ: "Sujet : sujet 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 12", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 12.",
    fill: "détail",
    vfQ: "Info : détail 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 12 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 12 jours.",
    fill: "délai",
    vfQ: "Délai : délai 12 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 12", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 12.",
    fill: "action",
    vfQ: "Action : action 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 12", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 12.",
    fill: "contact",
    vfQ: "Contact : contact 12.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_13_TEXT = `De : Service E13 1 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_13_POOL = buildExpressPool("e13-1-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 13 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 13 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 13", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 13.",
    fill: "sujet",
    vfQ: "Sujet : sujet 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 13", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 13.",
    fill: "détail",
    vfQ: "Info : détail 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 13 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 13 jours.",
    fill: "délai",
    vfQ: "Délai : délai 13 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 13", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 13.",
    fill: "action",
    vfQ: "Action : action 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 13", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 13.",
    fill: "contact",
    vfQ: "Contact : contact 13.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_14_TEXT = `De : Service E13 1 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_14_POOL = buildExpressPool("e13-1-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 14 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 14 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 14", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 14.",
    fill: "sujet",
    vfQ: "Sujet : sujet 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 14", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 14.",
    fill: "détail",
    vfQ: "Info : détail 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 14 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 14 jours.",
    fill: "délai",
    vfQ: "Délai : délai 14 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 14", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 14.",
    fill: "action",
    vfQ: "Action : action 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 14", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 14.",
    fill: "contact",
    vfQ: "Contact : contact 14.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_15_TEXT = `De : Service E13 1 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_15_POOL = buildExpressPool("e13-1-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 15 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 15 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 15", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 15.",
    fill: "sujet",
    vfQ: "Sujet : sujet 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 15", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 15.",
    fill: "détail",
    vfQ: "Info : détail 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 15 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 15 jours.",
    fill: "délai",
    vfQ: "Délai : délai 15 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 15", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 15.",
    fill: "action",
    vfQ: "Action : action 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 15", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 15.",
    fill: "contact",
    vfQ: "Contact : contact 15.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_16_TEXT = `De : Service E13 1 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_16_POOL = buildExpressPool("e13-1-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 16 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 16 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 16", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 16.",
    fill: "sujet",
    vfQ: "Sujet : sujet 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 16", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 16.",
    fill: "détail",
    vfQ: "Info : détail 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 16 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 16 jours.",
    fill: "délai",
    vfQ: "Délai : délai 16 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 16", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 16.",
    fill: "action",
    vfQ: "Action : action 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 16", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 16.",
    fill: "contact",
    vfQ: "Contact : contact 16.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_17_TEXT = `De : Service E13 1 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_17_POOL = buildExpressPool("e13-1-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 17 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 17 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 17", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 17.",
    fill: "sujet",
    vfQ: "Sujet : sujet 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 17", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 17.",
    fill: "détail",
    vfQ: "Info : détail 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 17 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 17 jours.",
    fill: "délai",
    vfQ: "Délai : délai 17 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 17", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 17.",
    fill: "action",
    vfQ: "Action : action 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 17", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 17.",
    fill: "contact",
    vfQ: "Contact : contact 17.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_18_TEXT = `De : Service E13 1 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_18_POOL = buildExpressPool("e13-1-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 18 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 18 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 18", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 18.",
    fill: "sujet",
    vfQ: "Sujet : sujet 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 18", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 18.",
    fill: "détail",
    vfQ: "Info : détail 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 18 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 18 jours.",
    fill: "délai",
    vfQ: "Délai : délai 18 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 18", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 18.",
    fill: "action",
    vfQ: "Action : action 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 18", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 18.",
    fill: "contact",
    vfQ: "Contact : contact 18.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_19_TEXT = `De : Service E13 1 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_19_POOL = buildExpressPool("e13-1-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 19 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 19 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 19", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 19.",
    fill: "sujet",
    vfQ: "Sujet : sujet 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 19", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 19.",
    fill: "détail",
    vfQ: "Info : détail 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 19 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 19 jours.",
    fill: "délai",
    vfQ: "Délai : délai 19 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 19", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 19.",
    fill: "action",
    vfQ: "Action : action 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 19", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 19.",
    fill: "contact",
    vfQ: "Contact : contact 19.",
    vfC: 0,
  }),
]);

const E13_1_CE_EMAIL_20_TEXT = `De : Service E13 1 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E13_1_CE_EMAIL_20_POOL = buildExpressPool("e13-1-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 20 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 20 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 20", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 20.",
    fill: "sujet",
    vfQ: "Sujet : sujet 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 20", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 20.",
    fill: "détail",
    vfQ: "Info : détail 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 20 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 20 jours.",
    fill: "délai",
    vfQ: "Délai : délai 20 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 20", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 20.",
    fill: "action",
    vfQ: "Action : action 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 1 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 1 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 20", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 20.",
    fill: "contact",
    vfQ: "Contact : contact 20.",
    vfC: 0,
  }),
]);

export const E13_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-1-ce-email",
  readingText: E13_1_CE_EMAIL_TEXT,
  questionPool: E13_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-1-ce-email-2",
  readingText: E13_1_CE_EMAIL_2_TEXT,
  questionPool: E13_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-3",
  readingText: E13_1_CE_EMAIL_3_TEXT,
  questionPool: E13_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-4",
  readingText: E13_1_CE_EMAIL_4_TEXT,
  questionPool: E13_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-5",
  readingText: E13_1_CE_EMAIL_5_TEXT,
  questionPool: E13_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-6",
  readingText: E13_1_CE_EMAIL_6_TEXT,
  questionPool: E13_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-7",
  readingText: E13_1_CE_EMAIL_7_TEXT,
  questionPool: E13_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-8",
  readingText: E13_1_CE_EMAIL_8_TEXT,
  questionPool: E13_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-9",
  readingText: E13_1_CE_EMAIL_9_TEXT,
  questionPool: E13_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-10",
  readingText: E13_1_CE_EMAIL_10_TEXT,
  questionPool: E13_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-11",
  readingText: E13_1_CE_EMAIL_11_TEXT,
  questionPool: E13_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-12",
  readingText: E13_1_CE_EMAIL_12_TEXT,
  questionPool: E13_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-13",
  readingText: E13_1_CE_EMAIL_13_TEXT,
  questionPool: E13_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-14",
  readingText: E13_1_CE_EMAIL_14_TEXT,
  questionPool: E13_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-15",
  readingText: E13_1_CE_EMAIL_15_TEXT,
  questionPool: E13_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-16",
  readingText: E13_1_CE_EMAIL_16_TEXT,
  questionPool: E13_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-17",
  readingText: E13_1_CE_EMAIL_17_TEXT,
  questionPool: E13_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-18",
  readingText: E13_1_CE_EMAIL_18_TEXT,
  questionPool: E13_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-19",
  readingText: E13_1_CE_EMAIL_19_TEXT,
  questionPool: E13_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-1-ce-email-20",
  readingText: E13_1_CE_EMAIL_20_TEXT,
  questionPool: E13_1_CE_EMAIL_20_POOL
}),
];

export const E13_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-1-pee-1",
    title: "S'inscrire à un cours de français",
    situation: "L'école de langues annonce l'ouverture d'un nouveau cours.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Nouveau cours de français A2",
      body: "Bonjour,\nUn nouveau cours de français de niveau A2 ouvre le mois prochain, le soir.\nLes places sont limitées à douze personnes.\nÊtes-vous intéressé(e) ?\nL'École Horizon",
    },
    instruction: "Répondez à l'école : dites que vous voulez vous inscrire, expliquez pourquoi vous apprenez le français et posez une question sur les horaires.",
    points: ["Votre inscription", "Pourquoi vous apprenez le français", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-2",
    title: "Choisir un horaire de cours",
    situation: "L'école vous propose deux horaires possibles.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Choix de l'horaire",
      body: "Bonjour,\nPour le cours A2, deux horaires sont possibles : le mardi et le jeudi de 18 h à 19 h 30, ou le samedi matin de 9 h à 12 h.\nQuel horaire préférez-vous ?\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : choisissez un horaire, expliquez pourquoi il vous convient et posez une question sur le prix.",
    points: ["L'horaire choisi", "Pourquoi cet horaire", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-3",
    title: "Prévenir d'une absence au cours",
    situation: "Votre professeure rappelle la date du prochain test.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Test de lundi prochain",
      body: "Bonjour à tous,\nLe test du chapitre 4 a lieu lundi prochain à 18 h 30.\nMerci d'arriver à l'heure et d'apporter un stylo.\nBonne semaine,\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : excusez-vous, expliquez pourquoi vous ne pouvez pas venir lundi et demandez si vous pouvez passer le test un autre jour.",
    points: ["L'excuse", "Pourquoi vous êtes absent(e)", "Une question pour passer le test un autre jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-4",
    title: "Envoyer une attestation",
    situation: "Votre conseiller en placement demande une preuve de votre formation.",
    sourceMessage: {
      from: "M. Keller, Office régional de placement",
      subject: "Votre cours de français",
      body: "Bonjour,\nVous m'avez dit que vous suivez un cours de français.\nPouvez-vous me donner les informations sur ce cours et m'envoyer une attestation de l'école ?\nMerci d'avance,\nM. Keller",
    },
    instruction: "Répondez à M. Keller : décrivez votre cours (niveau, jours, horaires), confirmez que vous demandez l'attestation et dites quand vous allez l'envoyer.",
    points: ["La description du cours", "La demande d'attestation", "Quand vous l'envoyez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-5",
    title: "Renseigner un collègue",
    situation: "Un collègue veut aussi apprendre le français.",
    sourceMessage: {
      from: "Marco",
      subject: "Ton cours de français",
      body: "Salut !\nTu suis un cours de français, non ? Il est bien ?\nJe voudrais aussi m'inscrire. C'est où, c'est quand, et ça coûte combien ?\nMerci !\nMarco",
    },
    instruction: "Répondez à Marco : donnez votre avis sur le cours, expliquez les horaires et le prix, et dites comment s'inscrire.",
    points: ["Votre avis sur le cours", "Les horaires et le prix", "Comment s'inscrire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-6",
    title: "Reporter son inscription",
    situation: "L'école confirme votre inscription, mais vous avez un problème de dates.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Confirmation d'inscription",
      body: "Bonjour,\nNous confirmons votre inscription au cours qui commence le 8 septembre.\nMerci de payer les frais avant le premier cours.\nLe secrétariat",
    },
    instruction: "Répondez au secrétariat : excusez-vous, expliquez pourquoi vous ne pouvez pas commencer le 8 septembre et demandez les dates de la prochaine session.",
    points: ["L'excuse", "Pourquoi vous ne pouvez pas commencer", "Une question sur la prochaine session"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-7",
    title: "Question sur le certificat",
    situation: "L'école annonce la date du test final.",
    sourceMessage: {
      from: "École de langues Horizon",
      subject: "Test final et certificat",
      body: "Bonjour,\nLe test final a lieu le jeudi 5 décembre à 18 h 30.\nAprès le test, vous allez recevoir votre certificat de niveau.\nBonne préparation !\nLe secrétariat",
    },
    instruction: "Répondez à l'école : confirmez votre présence au test, posez une question sur le contenu du test et une question sur le certificat.",
    points: ["La confirmation de votre présence", "Une question sur le test", "Une question sur le certificat"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-8",
    title: "Accepter une formation professionnelle",
    situation: "Le service des ressources humaines vous propose une formation.",
    sourceMessage: {
      from: "Mme Rey, Ressources humaines",
      subject: "Formation en informatique",
      body: "Bonjour,\nNous proposons une formation en informatique à nos employés, le mercredi après-midi pendant six semaines.\nSouhaitez-vous participer ?\nMme Rey",
    },
    instruction: "Répondez à Mme Rey : acceptez la formation, remerciez-la et posez une question sur les dates ou le lieu.",
    points: ["Votre accord", "Un remerciement", "Une question sur les dates ou le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-9",
    title: "Remercier sa professeure",
    situation: "Votre professeure vous félicite à la fin du cours.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Félicitations !",
      body: "Bonjour,\nFélicitations, vous avez réussi le test final !\nVotre certificat A2 est prêt au secrétariat.\nBonne continuation,\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : remerciez-la, dites ce que vous avez appris pendant le cours et posez une question sur le cours de niveau B1.",
    points: ["Un remerciement", "Ce que vous avez appris", "Une question sur le niveau suivant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-10",
    title: "Conseiller une amie",
    situation: "Une amie cherche un cours de français.",
    sourceMessage: {
      from: "Amina",
      subject: "Cours de français",
      body: "Coucou,\nJe voudrais améliorer mon français pour trouver un travail.\nTu connais une bonne école ? Les cours sont chers ?\nBisous,\nAmina",
    },
    instruction: "Répondez à Amina : conseillez votre école, donnez les informations importantes (jours, prix) et proposez d'aller vous inscrire ensemble.",
    points: ["Votre avis sur l'école", "Les jours et le prix", "Une proposition d'y aller ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-11",
    title: "Répondre — formation (11)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-12",
    title: "Répondre — formation (12)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-13",
    title: "Répondre — formation (13)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-14",
    title: "Répondre — formation (14)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-15",
    title: "Répondre — formation (15)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-16",
    title: "Répondre — formation (16)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-17",
    title: "Répondre — formation (17)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-18",
    title: "Répondre — formation (18)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-19",
    title: "Répondre — formation (19)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-1-pee-20",
    title: "Répondre — formation (20)",
    situation: "Vous avez reçu un e-mail concernant formation.",
sourceMessage: {
  from: "Service Formation",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant formation.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E13.2 — Trouver un stage
   ════════════════════════════════════════════════════════════════════════════ */

const E13_2_CE_EMAIL_TEXT = `De : Service E13 2 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_POOL = buildExpressPool("e13-2-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 1 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 1 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 1", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 1.",
    fill: "sujet",
    vfQ: "Sujet : sujet 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 1", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 1.",
    fill: "détail",
    vfQ: "Info : détail 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 1 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 1 jours.",
    fill: "délai",
    vfQ: "Délai : délai 1 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 1", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 1.",
    fill: "action",
    vfQ: "Action : action 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 1", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 1.",
    fill: "contact",
    vfQ: "Contact : contact 1.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_2_TEXT = `De : Service E13 2 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_2_POOL = buildExpressPool("e13-2-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 2 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 2 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 2", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 2.",
    fill: "sujet",
    vfQ: "Sujet : sujet 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 2", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 2.",
    fill: "détail",
    vfQ: "Info : détail 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 2 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 2 jours.",
    fill: "délai",
    vfQ: "Délai : délai 2 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 2", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 2.",
    fill: "action",
    vfQ: "Action : action 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 2", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 2.",
    fill: "contact",
    vfQ: "Contact : contact 2.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_3_TEXT = `De : Service E13 2 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_3_POOL = buildExpressPool("e13-2-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 3 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 3 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 3", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 3.",
    fill: "sujet",
    vfQ: "Sujet : sujet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 3", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 3.",
    fill: "détail",
    vfQ: "Info : détail 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 3 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 3 jours.",
    fill: "délai",
    vfQ: "Délai : délai 3 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 3", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 3.",
    fill: "action",
    vfQ: "Action : action 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 3", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 3.",
    fill: "contact",
    vfQ: "Contact : contact 3.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_4_TEXT = `De : Service E13 2 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_4_POOL = buildExpressPool("e13-2-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 4 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 4 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 4", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 4.",
    fill: "sujet",
    vfQ: "Sujet : sujet 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 4", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 4.",
    fill: "détail",
    vfQ: "Info : détail 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 4 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 4 jours.",
    fill: "délai",
    vfQ: "Délai : délai 4 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 4", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 4.",
    fill: "action",
    vfQ: "Action : action 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 4", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 4.",
    fill: "contact",
    vfQ: "Contact : contact 4.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_5_TEXT = `De : Service E13 2 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_5_POOL = buildExpressPool("e13-2-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 5 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 5 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 5", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 5.",
    fill: "sujet",
    vfQ: "Sujet : sujet 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 5", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 5.",
    fill: "détail",
    vfQ: "Info : détail 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 5 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 5 jours.",
    fill: "délai",
    vfQ: "Délai : délai 5 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 5", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 5.",
    fill: "action",
    vfQ: "Action : action 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 5", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 5.",
    fill: "contact",
    vfQ: "Contact : contact 5.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_6_TEXT = `De : Service E13 2 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_6_POOL = buildExpressPool("e13-2-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 6 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 6 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 6", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 6.",
    fill: "sujet",
    vfQ: "Sujet : sujet 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 6", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 6.",
    fill: "détail",
    vfQ: "Info : détail 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 6 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 6 jours.",
    fill: "délai",
    vfQ: "Délai : délai 6 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 6", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 6.",
    fill: "action",
    vfQ: "Action : action 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 6", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 6.",
    fill: "contact",
    vfQ: "Contact : contact 6.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_7_TEXT = `De : Service E13 2 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_7_POOL = buildExpressPool("e13-2-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 7 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 7 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 7", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 7.",
    fill: "sujet",
    vfQ: "Sujet : sujet 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 7", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 7.",
    fill: "détail",
    vfQ: "Info : détail 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 7 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 7 jours.",
    fill: "délai",
    vfQ: "Délai : délai 7 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 7", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 7.",
    fill: "action",
    vfQ: "Action : action 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 7", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 7.",
    fill: "contact",
    vfQ: "Contact : contact 7.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_8_TEXT = `De : Service E13 2 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_8_POOL = buildExpressPool("e13-2-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 8 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 8 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 8", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 8.",
    fill: "sujet",
    vfQ: "Sujet : sujet 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 8", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 8.",
    fill: "détail",
    vfQ: "Info : détail 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 8 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 8 jours.",
    fill: "délai",
    vfQ: "Délai : délai 8 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 8", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 8.",
    fill: "action",
    vfQ: "Action : action 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 8", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 8.",
    fill: "contact",
    vfQ: "Contact : contact 8.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_9_TEXT = `De : Service E13 2 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_9_POOL = buildExpressPool("e13-2-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 9 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 9 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 9", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 9.",
    fill: "sujet",
    vfQ: "Sujet : sujet 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 9", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 9.",
    fill: "détail",
    vfQ: "Info : détail 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 9 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 9 jours.",
    fill: "délai",
    vfQ: "Délai : délai 9 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 9", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 9.",
    fill: "action",
    vfQ: "Action : action 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 9", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 9.",
    fill: "contact",
    vfQ: "Contact : contact 9.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_10_TEXT = `De : Service E13 2 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_10_POOL = buildExpressPool("e13-2-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 10 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 10 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 10", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 10.",
    fill: "sujet",
    vfQ: "Sujet : sujet 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 10", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 10.",
    fill: "détail",
    vfQ: "Info : détail 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 10 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 10 jours.",
    fill: "délai",
    vfQ: "Délai : délai 10 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 10", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 10.",
    fill: "action",
    vfQ: "Action : action 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 10", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 10.",
    fill: "contact",
    vfQ: "Contact : contact 10.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_11_TEXT = `De : Service E13 2 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_11_POOL = buildExpressPool("e13-2-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 11 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 11 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 11", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 11.",
    fill: "sujet",
    vfQ: "Sujet : sujet 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 11", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 11.",
    fill: "détail",
    vfQ: "Info : détail 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 11 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 11 jours.",
    fill: "délai",
    vfQ: "Délai : délai 11 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 11", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 11.",
    fill: "action",
    vfQ: "Action : action 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 11", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 11.",
    fill: "contact",
    vfQ: "Contact : contact 11.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_12_TEXT = `De : Service E13 2 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_12_POOL = buildExpressPool("e13-2-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 12 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 12 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 12", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 12.",
    fill: "sujet",
    vfQ: "Sujet : sujet 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 12", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 12.",
    fill: "détail",
    vfQ: "Info : détail 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 12 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 12 jours.",
    fill: "délai",
    vfQ: "Délai : délai 12 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 12", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 12.",
    fill: "action",
    vfQ: "Action : action 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 12", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 12.",
    fill: "contact",
    vfQ: "Contact : contact 12.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_13_TEXT = `De : Service E13 2 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_13_POOL = buildExpressPool("e13-2-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 13 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 13 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 13", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 13.",
    fill: "sujet",
    vfQ: "Sujet : sujet 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 13", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 13.",
    fill: "détail",
    vfQ: "Info : détail 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 13 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 13 jours.",
    fill: "délai",
    vfQ: "Délai : délai 13 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 13", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 13.",
    fill: "action",
    vfQ: "Action : action 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 13", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 13.",
    fill: "contact",
    vfQ: "Contact : contact 13.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_14_TEXT = `De : Service E13 2 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_14_POOL = buildExpressPool("e13-2-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 14 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 14 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 14", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 14.",
    fill: "sujet",
    vfQ: "Sujet : sujet 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 14", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 14.",
    fill: "détail",
    vfQ: "Info : détail 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 14 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 14 jours.",
    fill: "délai",
    vfQ: "Délai : délai 14 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 14", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 14.",
    fill: "action",
    vfQ: "Action : action 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 14", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 14.",
    fill: "contact",
    vfQ: "Contact : contact 14.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_15_TEXT = `De : Service E13 2 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_15_POOL = buildExpressPool("e13-2-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 15 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 15 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 15", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 15.",
    fill: "sujet",
    vfQ: "Sujet : sujet 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 15", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 15.",
    fill: "détail",
    vfQ: "Info : détail 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 15 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 15 jours.",
    fill: "délai",
    vfQ: "Délai : délai 15 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 15", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 15.",
    fill: "action",
    vfQ: "Action : action 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 15", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 15.",
    fill: "contact",
    vfQ: "Contact : contact 15.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_16_TEXT = `De : Service E13 2 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_16_POOL = buildExpressPool("e13-2-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 16 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 16 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 16", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 16.",
    fill: "sujet",
    vfQ: "Sujet : sujet 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 16", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 16.",
    fill: "détail",
    vfQ: "Info : détail 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 16 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 16 jours.",
    fill: "délai",
    vfQ: "Délai : délai 16 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 16", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 16.",
    fill: "action",
    vfQ: "Action : action 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 16", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 16.",
    fill: "contact",
    vfQ: "Contact : contact 16.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_17_TEXT = `De : Service E13 2 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_17_POOL = buildExpressPool("e13-2-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 17 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 17 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 17", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 17.",
    fill: "sujet",
    vfQ: "Sujet : sujet 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 17", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 17.",
    fill: "détail",
    vfQ: "Info : détail 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 17 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 17 jours.",
    fill: "délai",
    vfQ: "Délai : délai 17 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 17", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 17.",
    fill: "action",
    vfQ: "Action : action 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 17", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 17.",
    fill: "contact",
    vfQ: "Contact : contact 17.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_18_TEXT = `De : Service E13 2 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_18_POOL = buildExpressPool("e13-2-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 18 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 18 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 18", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 18.",
    fill: "sujet",
    vfQ: "Sujet : sujet 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 18", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 18.",
    fill: "détail",
    vfQ: "Info : détail 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 18 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 18 jours.",
    fill: "délai",
    vfQ: "Délai : délai 18 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 18", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 18.",
    fill: "action",
    vfQ: "Action : action 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 18", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 18.",
    fill: "contact",
    vfQ: "Contact : contact 18.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_19_TEXT = `De : Service E13 2 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_19_POOL = buildExpressPool("e13-2-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 19 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 19 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 19", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 19.",
    fill: "sujet",
    vfQ: "Sujet : sujet 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 19", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 19.",
    fill: "détail",
    vfQ: "Info : détail 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 19 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 19 jours.",
    fill: "délai",
    vfQ: "Délai : délai 19 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 19", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 19.",
    fill: "action",
    vfQ: "Action : action 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 19", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 19.",
    fill: "contact",
    vfQ: "Contact : contact 19.",
    vfC: 0,
  }),
]);

const E13_2_CE_EMAIL_20_TEXT = `De : Service E13 2 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E13_2_CE_EMAIL_20_POOL = buildExpressPool("e13-2-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 20 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 20 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 20", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 20.",
    fill: "sujet",
    vfQ: "Sujet : sujet 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 20", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 20.",
    fill: "détail",
    vfQ: "Info : détail 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 20 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 20 jours.",
    fill: "délai",
    vfQ: "Délai : délai 20 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 20", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 20.",
    fill: "action",
    vfQ: "Action : action 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 2 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 2 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 20", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 20.",
    fill: "contact",
    vfQ: "Contact : contact 20.",
    vfC: 0,
  }),
]);

export const E13_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-2-ce-email",
  readingText: E13_2_CE_EMAIL_TEXT,
  questionPool: E13_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-2-ce-email-2",
  readingText: E13_2_CE_EMAIL_2_TEXT,
  questionPool: E13_2_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-3",
  readingText: E13_2_CE_EMAIL_3_TEXT,
  questionPool: E13_2_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-4",
  readingText: E13_2_CE_EMAIL_4_TEXT,
  questionPool: E13_2_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-5",
  readingText: E13_2_CE_EMAIL_5_TEXT,
  questionPool: E13_2_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-6",
  readingText: E13_2_CE_EMAIL_6_TEXT,
  questionPool: E13_2_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-7",
  readingText: E13_2_CE_EMAIL_7_TEXT,
  questionPool: E13_2_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-8",
  readingText: E13_2_CE_EMAIL_8_TEXT,
  questionPool: E13_2_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-9",
  readingText: E13_2_CE_EMAIL_9_TEXT,
  questionPool: E13_2_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-10",
  readingText: E13_2_CE_EMAIL_10_TEXT,
  questionPool: E13_2_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-11",
  readingText: E13_2_CE_EMAIL_11_TEXT,
  questionPool: E13_2_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-12",
  readingText: E13_2_CE_EMAIL_12_TEXT,
  questionPool: E13_2_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-13",
  readingText: E13_2_CE_EMAIL_13_TEXT,
  questionPool: E13_2_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-14",
  readingText: E13_2_CE_EMAIL_14_TEXT,
  questionPool: E13_2_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-15",
  readingText: E13_2_CE_EMAIL_15_TEXT,
  questionPool: E13_2_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-16",
  readingText: E13_2_CE_EMAIL_16_TEXT,
  questionPool: E13_2_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-17",
  readingText: E13_2_CE_EMAIL_17_TEXT,
  questionPool: E13_2_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-18",
  readingText: E13_2_CE_EMAIL_18_TEXT,
  questionPool: E13_2_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-19",
  readingText: E13_2_CE_EMAIL_19_TEXT,
  questionPool: E13_2_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-2-ce-email-20",
  readingText: E13_2_CE_EMAIL_20_TEXT,
  questionPool: E13_2_CE_EMAIL_20_POOL
}),
];

export const E13_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-2-pee-1",
    title: "Poser sa candidature pour un stage",
    situation: "Un restaurant cherche un ou une stagiaire.",
    sourceMessage: {
      from: "Restaurant du Lac",
      subject: "Stage en cuisine",
      body: "Bonjour,\nNotre restaurant cherche un ou une stagiaire en cuisine pour cet été.\nSi vous êtes intéressé(e), présentez-vous par e-mail.\nLe chef de cuisine",
    },
    instruction: "Répondez au restaurant : présentez-vous, parlez de votre expérience en cuisine et donnez vos disponibilités.",
    points: ["Votre présentation", "Votre expérience", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-2",
    title: "Accepter une proposition de stage",
    situation: "Une boulangerie vous propose un stage.",
    sourceMessage: {
      from: "Boulangerie Blanc",
      subject: "Proposition de stage",
      body: "Bonjour,\nNous pouvons vous proposer un stage de quatre semaines à partir du lundi 5 mai.\nÊtes-vous toujours intéressé(e) ?\nMeilleures salutations,\nBoulangerie Blanc",
    },
    instruction: "Répondez à la boulangerie : acceptez la proposition, remerciez et posez une question sur les horaires de travail.",
    points: ["Votre accord", "Un remerciement", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-3",
    title: "Demander des précisions",
    situation: "Une entreprise vous propose un stage sans donner de détails.",
    sourceMessage: {
      from: "Entreprise Infotech",
      subject: "Votre candidature",
      body: "Bonjour,\nVotre candidature nous intéresse. Nous pouvons vous accueillir pour un stage au printemps.\nQu'en pensez-vous ?\nLe service des ressources humaines",
    },
    instruction: "Répondez à l'entreprise : remerciez, dites que vous êtes intéressé(e) et posez des questions sur les dates et les horaires.",
    points: ["Un remerciement", "Votre intérêt", "Des questions sur les dates et les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-4",
    title: "Refuser poliment un stage",
    situation: "Un garage vous propose un stage, mais vous avez déjà accepté une autre place.",
    sourceMessage: {
      from: "Garage Central",
      subject: "Place de stage",
      body: "Bonjour,\nNous avons une place de stage libre à l'atelier à partir du mois prochain.\nVoulez-vous venir travailler avec nous ?\nGarage Central",
    },
    instruction: "Répondez au garage : refusez poliment, expliquez que vous avez déjà trouvé un autre stage et remerciez pour la proposition.",
    points: ["Le refus poli", "L'explication", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-5",
    title: "Informer son conseiller",
    situation: "Votre conseiller en placement demande des nouvelles de votre recherche.",
    sourceMessage: {
      from: "M. Keller, Office régional de placement",
      subject: "Votre recherche de stage",
      body: "Bonjour,\nOù en êtes-vous dans votre recherche de stage ?\nAvez-vous envoyé des candidatures ce mois-ci ?\nMerci de me répondre avant vendredi.\nM. Keller",
    },
    instruction: "Répondez à M. Keller : dites où vous avez envoyé des candidatures, expliquez les réponses reçues et demandez un conseil.",
    points: ["Vos candidatures envoyées", "Les réponses reçues", "Une demande de conseil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-6",
    title: "Demander de commencer plus tard",
    situation: "L'hôtel confirme le début de votre stage, mais vous avez un empêchement.",
    sourceMessage: {
      from: "Mme Perrin, Hôtel Bellevue",
      subject: "Début de votre stage",
      body: "Bonjour,\nNous vous attendons le lundi 1er juin à 9 h à la réception pour le début de votre stage.\nÀ bientôt,\nMme Perrin",
    },
    instruction: "Répondez à Mme Perrin : excusez-vous, expliquez votre problème et demandez si vous pouvez commencer une semaine plus tard.",
    points: ["L'excuse", "Votre problème", "La nouvelle date proposée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-7",
    title: "Aider une amie",
    situation: "Une amie vous demande comment vous avez trouvé votre stage.",
    sourceMessage: {
      from: "Fatima",
      subject: "Ton stage",
      body: "Salut !\nJ'ai vu que tu as trouvé un stage, bravo !\nComment tu as fait ? Moi, je cherche depuis deux mois et je n'ai rien trouvé.\nFatima",
    },
    instruction: "Répondez à Fatima : racontez comment vous avez trouvé votre stage, donnez-lui deux conseils et proposez votre aide.",
    points: ["Comment vous avez trouvé le stage", "Deux conseils", "Une proposition d'aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-8",
    title: "Envoyer les documents demandés",
    situation: "L'hôtel demande des documents pour confirmer votre stage.",
    sourceMessage: {
      from: "Mme Perrin, Hôtel Bellevue",
      subject: "Documents à envoyer",
      body: "Bonjour,\nPour confirmer votre stage, merci de nous envoyer votre CV et une copie de votre permis de séjour avant le 15 mai.\nMeilleures salutations,\nMme Perrin",
    },
    instruction: "Répondez à Mme Perrin : confirmez l'envoi des documents, remerciez pour la proposition de stage et posez une question sur le premier jour.",
    points: ["L'envoi des documents", "Un remerciement", "Une question sur le premier jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-9",
    title: "Se présenter à une librairie",
    situation: "Après votre appel, la librairie demande des informations par écrit.",
    sourceMessage: {
      from: "Librairie des Arcades",
      subject: "Suite à votre appel",
      body: "Bonjour,\nMerci pour votre appel d'hier.\nPouvez-vous nous écrire qui vous êtes, quel stage vous cherchez et quand vous êtes disponible ?\nLa Librairie des Arcades",
    },
    instruction: "Répondez à la librairie : présentez-vous, expliquez quel stage vous cherchez et donnez vos disponibilités.",
    points: ["Votre présentation", "Le stage recherché", "Vos disponibilités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-10",
    title: "Remercier à la fin du stage",
    situation: "Votre responsable vous écrit à la fin de votre stage.",
    sourceMessage: {
      from: "M. Duval, Hôtel Bellevue",
      subject: "Fin de votre stage",
      body: "Bonjour,\nVotre stage se termine vendredi. Toute l'équipe a été contente de travailler avec vous.\nBonne continuation !\nM. Duval",
    },
    instruction: "Répondez à M. Duval : remerciez l'équipe, dites ce que vous avez appris pendant le stage et demandez une attestation de stage.",
    points: ["Un remerciement", "Ce que vous avez appris", "La demande d'attestation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-11",
    title: "Répondre — stage (11)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-12",
    title: "Répondre — stage (12)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-13",
    title: "Répondre — stage (13)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-14",
    title: "Répondre — stage (14)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-15",
    title: "Répondre — stage (15)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-16",
    title: "Répondre — stage (16)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-17",
    title: "Répondre — stage (17)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-18",
    title: "Répondre — stage (18)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-19",
    title: "Répondre — stage (19)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-2-pee-20",
    title: "Répondre — stage (20)",
    situation: "Vous avez reçu un e-mail concernant stage.",
sourceMessage: {
  from: "Service Stage",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant stage.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E13.3 — Répondre à une offre d'emploi
   ════════════════════════════════════════════════════════════════════════════ */

const E13_3_CE_EMAIL_TEXT = `De : Service E13 3 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_POOL = buildExpressPool("e13-3-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 1 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 1 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 1", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 1.",
    fill: "sujet",
    vfQ: "Sujet : sujet 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 1", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 1.",
    fill: "détail",
    vfQ: "Info : détail 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 1 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 1 jours.",
    fill: "délai",
    vfQ: "Délai : délai 1 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 1", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 1.",
    fill: "action",
    vfQ: "Action : action 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 1", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 1.",
    fill: "contact",
    vfQ: "Contact : contact 1.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_2_TEXT = `De : Service E13 3 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_2_POOL = buildExpressPool("e13-3-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 2 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 2 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 2", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 2.",
    fill: "sujet",
    vfQ: "Sujet : sujet 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 2", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 2.",
    fill: "détail",
    vfQ: "Info : détail 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 2 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 2 jours.",
    fill: "délai",
    vfQ: "Délai : délai 2 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 2", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 2.",
    fill: "action",
    vfQ: "Action : action 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 2", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 2.",
    fill: "contact",
    vfQ: "Contact : contact 2.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_3_TEXT = `De : Service E13 3 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_3_POOL = buildExpressPool("e13-3-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 3 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 3 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 3", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 3.",
    fill: "sujet",
    vfQ: "Sujet : sujet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 3", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 3.",
    fill: "détail",
    vfQ: "Info : détail 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 3 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 3 jours.",
    fill: "délai",
    vfQ: "Délai : délai 3 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 3", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 3.",
    fill: "action",
    vfQ: "Action : action 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 3", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 3.",
    fill: "contact",
    vfQ: "Contact : contact 3.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_4_TEXT = `De : Service E13 3 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_4_POOL = buildExpressPool("e13-3-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 4 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 4 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 4", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 4.",
    fill: "sujet",
    vfQ: "Sujet : sujet 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 4", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 4.",
    fill: "détail",
    vfQ: "Info : détail 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 4 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 4 jours.",
    fill: "délai",
    vfQ: "Délai : délai 4 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 4", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 4.",
    fill: "action",
    vfQ: "Action : action 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 4", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 4.",
    fill: "contact",
    vfQ: "Contact : contact 4.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_5_TEXT = `De : Service E13 3 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_5_POOL = buildExpressPool("e13-3-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 5 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 5 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 5", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 5.",
    fill: "sujet",
    vfQ: "Sujet : sujet 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 5", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 5.",
    fill: "détail",
    vfQ: "Info : détail 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 5 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 5 jours.",
    fill: "délai",
    vfQ: "Délai : délai 5 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 5", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 5.",
    fill: "action",
    vfQ: "Action : action 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 5", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 5.",
    fill: "contact",
    vfQ: "Contact : contact 5.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_6_TEXT = `De : Service E13 3 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_6_POOL = buildExpressPool("e13-3-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 6 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 6 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 6", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 6.",
    fill: "sujet",
    vfQ: "Sujet : sujet 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 6", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 6.",
    fill: "détail",
    vfQ: "Info : détail 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 6 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 6 jours.",
    fill: "délai",
    vfQ: "Délai : délai 6 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 6", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 6.",
    fill: "action",
    vfQ: "Action : action 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 6", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 6.",
    fill: "contact",
    vfQ: "Contact : contact 6.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_7_TEXT = `De : Service E13 3 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_7_POOL = buildExpressPool("e13-3-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 7 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 7 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 7", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 7.",
    fill: "sujet",
    vfQ: "Sujet : sujet 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 7", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 7.",
    fill: "détail",
    vfQ: "Info : détail 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 7 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 7 jours.",
    fill: "délai",
    vfQ: "Délai : délai 7 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 7", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 7.",
    fill: "action",
    vfQ: "Action : action 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 7", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 7.",
    fill: "contact",
    vfQ: "Contact : contact 7.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_8_TEXT = `De : Service E13 3 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_8_POOL = buildExpressPool("e13-3-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 8 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 8 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 8", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 8.",
    fill: "sujet",
    vfQ: "Sujet : sujet 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 8", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 8.",
    fill: "détail",
    vfQ: "Info : détail 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 8 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 8 jours.",
    fill: "délai",
    vfQ: "Délai : délai 8 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 8", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 8.",
    fill: "action",
    vfQ: "Action : action 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 8", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 8.",
    fill: "contact",
    vfQ: "Contact : contact 8.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_9_TEXT = `De : Service E13 3 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_9_POOL = buildExpressPool("e13-3-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 9 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 9 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 9", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 9.",
    fill: "sujet",
    vfQ: "Sujet : sujet 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 9", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 9.",
    fill: "détail",
    vfQ: "Info : détail 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 9 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 9 jours.",
    fill: "délai",
    vfQ: "Délai : délai 9 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 9", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 9.",
    fill: "action",
    vfQ: "Action : action 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 9", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 9.",
    fill: "contact",
    vfQ: "Contact : contact 9.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_10_TEXT = `De : Service E13 3 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_10_POOL = buildExpressPool("e13-3-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 10 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 10 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 10", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 10.",
    fill: "sujet",
    vfQ: "Sujet : sujet 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 10", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 10.",
    fill: "détail",
    vfQ: "Info : détail 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 10 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 10 jours.",
    fill: "délai",
    vfQ: "Délai : délai 10 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 10", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 10.",
    fill: "action",
    vfQ: "Action : action 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 10", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 10.",
    fill: "contact",
    vfQ: "Contact : contact 10.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_11_TEXT = `De : Service E13 3 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_11_POOL = buildExpressPool("e13-3-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 11 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 11 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 11", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 11.",
    fill: "sujet",
    vfQ: "Sujet : sujet 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 11", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 11.",
    fill: "détail",
    vfQ: "Info : détail 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 11 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 11 jours.",
    fill: "délai",
    vfQ: "Délai : délai 11 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 11", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 11.",
    fill: "action",
    vfQ: "Action : action 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 11", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 11.",
    fill: "contact",
    vfQ: "Contact : contact 11.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_12_TEXT = `De : Service E13 3 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_12_POOL = buildExpressPool("e13-3-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 12 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 12 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 12", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 12.",
    fill: "sujet",
    vfQ: "Sujet : sujet 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 12", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 12.",
    fill: "détail",
    vfQ: "Info : détail 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 12 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 12 jours.",
    fill: "délai",
    vfQ: "Délai : délai 12 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 12", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 12.",
    fill: "action",
    vfQ: "Action : action 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 12", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 12.",
    fill: "contact",
    vfQ: "Contact : contact 12.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_13_TEXT = `De : Service E13 3 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_13_POOL = buildExpressPool("e13-3-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 13 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 13 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 13", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 13.",
    fill: "sujet",
    vfQ: "Sujet : sujet 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 13", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 13.",
    fill: "détail",
    vfQ: "Info : détail 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 13 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 13 jours.",
    fill: "délai",
    vfQ: "Délai : délai 13 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 13", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 13.",
    fill: "action",
    vfQ: "Action : action 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 13", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 13.",
    fill: "contact",
    vfQ: "Contact : contact 13.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_14_TEXT = `De : Service E13 3 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_14_POOL = buildExpressPool("e13-3-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 14 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 14 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 14", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 14.",
    fill: "sujet",
    vfQ: "Sujet : sujet 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 14", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 14.",
    fill: "détail",
    vfQ: "Info : détail 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 14 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 14 jours.",
    fill: "délai",
    vfQ: "Délai : délai 14 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 14", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 14.",
    fill: "action",
    vfQ: "Action : action 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 14", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 14.",
    fill: "contact",
    vfQ: "Contact : contact 14.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_15_TEXT = `De : Service E13 3 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_15_POOL = buildExpressPool("e13-3-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 15 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 15 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 15", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 15.",
    fill: "sujet",
    vfQ: "Sujet : sujet 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 15", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 15.",
    fill: "détail",
    vfQ: "Info : détail 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 15 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 15 jours.",
    fill: "délai",
    vfQ: "Délai : délai 15 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 15", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 15.",
    fill: "action",
    vfQ: "Action : action 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 15", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 15.",
    fill: "contact",
    vfQ: "Contact : contact 15.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_16_TEXT = `De : Service E13 3 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_16_POOL = buildExpressPool("e13-3-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 16 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 16 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 16", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 16.",
    fill: "sujet",
    vfQ: "Sujet : sujet 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 16", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 16.",
    fill: "détail",
    vfQ: "Info : détail 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 16 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 16 jours.",
    fill: "délai",
    vfQ: "Délai : délai 16 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 16", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 16.",
    fill: "action",
    vfQ: "Action : action 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 16", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 16.",
    fill: "contact",
    vfQ: "Contact : contact 16.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_17_TEXT = `De : Service E13 3 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_17_POOL = buildExpressPool("e13-3-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 17 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 17 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 17", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 17.",
    fill: "sujet",
    vfQ: "Sujet : sujet 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 17", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 17.",
    fill: "détail",
    vfQ: "Info : détail 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 17 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 17 jours.",
    fill: "délai",
    vfQ: "Délai : délai 17 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 17", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 17.",
    fill: "action",
    vfQ: "Action : action 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 17", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 17.",
    fill: "contact",
    vfQ: "Contact : contact 17.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_18_TEXT = `De : Service E13 3 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_18_POOL = buildExpressPool("e13-3-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 18 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 18 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 18", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 18.",
    fill: "sujet",
    vfQ: "Sujet : sujet 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 18", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 18.",
    fill: "détail",
    vfQ: "Info : détail 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 18 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 18 jours.",
    fill: "délai",
    vfQ: "Délai : délai 18 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 18", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 18.",
    fill: "action",
    vfQ: "Action : action 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 18", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 18.",
    fill: "contact",
    vfQ: "Contact : contact 18.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_19_TEXT = `De : Service E13 3 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_19_POOL = buildExpressPool("e13-3-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 19 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 19 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 19", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 19.",
    fill: "sujet",
    vfQ: "Sujet : sujet 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 19", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 19.",
    fill: "détail",
    vfQ: "Info : détail 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 19 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 19 jours.",
    fill: "délai",
    vfQ: "Délai : délai 19 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 19", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 19.",
    fill: "action",
    vfQ: "Action : action 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 19", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 19.",
    fill: "contact",
    vfQ: "Contact : contact 19.",
    vfC: 0,
  }),
]);

const E13_3_CE_EMAIL_20_TEXT = `De : Service E13 3 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E13_3_CE_EMAIL_20_POOL = buildExpressPool("e13-3-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 20 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 20 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 20", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 20.",
    fill: "sujet",
    vfQ: "Sujet : sujet 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 20", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 20.",
    fill: "détail",
    vfQ: "Info : détail 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 20 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 20 jours.",
    fill: "délai",
    vfQ: "Délai : délai 20 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 20", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 20.",
    fill: "action",
    vfQ: "Action : action 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 3 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 3 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 20", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 20.",
    fill: "contact",
    vfQ: "Contact : contact 20.",
    vfC: 0,
  }),
]);

export const E13_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-3-ce-email",
  readingText: E13_3_CE_EMAIL_TEXT,
  questionPool: E13_3_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-3-ce-email-2",
  readingText: E13_3_CE_EMAIL_2_TEXT,
  questionPool: E13_3_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-3",
  readingText: E13_3_CE_EMAIL_3_TEXT,
  questionPool: E13_3_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-4",
  readingText: E13_3_CE_EMAIL_4_TEXT,
  questionPool: E13_3_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-5",
  readingText: E13_3_CE_EMAIL_5_TEXT,
  questionPool: E13_3_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-6",
  readingText: E13_3_CE_EMAIL_6_TEXT,
  questionPool: E13_3_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-7",
  readingText: E13_3_CE_EMAIL_7_TEXT,
  questionPool: E13_3_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-8",
  readingText: E13_3_CE_EMAIL_8_TEXT,
  questionPool: E13_3_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-9",
  readingText: E13_3_CE_EMAIL_9_TEXT,
  questionPool: E13_3_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-10",
  readingText: E13_3_CE_EMAIL_10_TEXT,
  questionPool: E13_3_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-11",
  readingText: E13_3_CE_EMAIL_11_TEXT,
  questionPool: E13_3_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-12",
  readingText: E13_3_CE_EMAIL_12_TEXT,
  questionPool: E13_3_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-13",
  readingText: E13_3_CE_EMAIL_13_TEXT,
  questionPool: E13_3_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-14",
  readingText: E13_3_CE_EMAIL_14_TEXT,
  questionPool: E13_3_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-15",
  readingText: E13_3_CE_EMAIL_15_TEXT,
  questionPool: E13_3_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-16",
  readingText: E13_3_CE_EMAIL_16_TEXT,
  questionPool: E13_3_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-17",
  readingText: E13_3_CE_EMAIL_17_TEXT,
  questionPool: E13_3_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-18",
  readingText: E13_3_CE_EMAIL_18_TEXT,
  questionPool: E13_3_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-19",
  readingText: E13_3_CE_EMAIL_19_TEXT,
  questionPool: E13_3_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-3-ce-email-20",
  readingText: E13_3_CE_EMAIL_20_TEXT,
  questionPool: E13_3_CE_EMAIL_20_POOL
}),
];

export const E13_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-3-pee-1",
    title: "Postuler comme vendeur / vendeuse",
    situation: "Le supermarché publie une offre d'emploi.",
    sourceMessage: {
      from: "Supermarché Riviera",
      subject: "Offre d'emploi — vendeur / vendeuse",
      body: "Madame, Monsieur,\nNous cherchons un vendeur ou une vendeuse à 80 % pour le rayon fruits et légumes.\nPour postuler, répondez à cet e-mail avec votre CV.\nLe service des ressources humaines",
    },
    instruction: "Répondez au supermarché : présentez-vous, parlez de votre expérience dans la vente et expliquez pourquoi ce poste vous intéresse.",
    points: ["Votre présentation", "Votre expérience", "Pourquoi ce poste vous intéresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-2",
    title: "Demander des précisions sur une offre",
    situation: "Un café cherche du personnel, mais l'annonce donne peu de détails.",
    sourceMessage: {
      from: "Café de la Poste",
      subject: "Nous cherchons un serveur / une serveuse",
      body: "Bonjour,\nNotre café cherche un serveur ou une serveuse pour le service du matin.\nPour plus d'informations, écrivez-nous.\nLe Café de la Poste",
    },
    instruction: "Répondez au café : dites que l'offre vous intéresse, posez une question sur le salaire et une question sur les horaires.",
    points: ["Votre intérêt", "Une question sur le salaire", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-3",
    title: "Envoyer un document manquant",
    situation: "Les ressources humaines n'ont pas reçu votre lettre de motivation.",
    sourceMessage: {
      from: "Service des ressources humaines, Supermarché Riviera",
      subject: "Document manquant",
      body: "Madame, Monsieur,\nNous avons bien reçu votre CV, mais il manque votre lettre de motivation.\nMerci de nous l'envoyer avant le 20 septembre.\nLe service des ressources humaines",
    },
    instruction: "Répondez aux ressources humaines : excusez-vous, dites que vous envoyez la lettre de motivation et confirmez votre intérêt pour le poste.",
    points: ["L'excuse", "L'envoi de la lettre", "Votre intérêt pour le poste"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-4",
    title: "Répondre à un refus",
    situation: "L'entreprise a choisi une autre personne.",
    sourceMessage: {
      from: "Entreprise Batimo",
      subject: "Votre candidature",
      body: "Madame, Monsieur,\nNous vous remercions pour votre candidature.\nMalheureusement, nous avons choisi une autre personne pour ce poste.\nNous vous souhaitons bonne chance dans vos recherches.\nEntreprise Batimo",
    },
    instruction: "Répondez à l'entreprise : remerciez pour la réponse, demandez de garder votre CV et dites que vous restez intéressé(e) par un futur poste.",
    points: ["Un remerciement", "La demande de garder votre CV", "Votre intérêt pour un futur poste"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-5",
    title: "Répondre à une conseillère",
    situation: "Une agence de placement vous envoie une offre.",
    sourceMessage: {
      from: "Mme Steiner, Agence TravailPlus",
      subject: "Offre : aide de cuisine à 60 %",
      body: "Bonjour,\nJ'ai une offre pour vous : aide de cuisine à 60 % dans un restaurant du centre-ville, du mardi au samedi.\nÊtes-vous intéressé(e) ?\nMme Steiner",
    },
    instruction: "Répondez à Mme Steiner : dites si l'offre vous intéresse, expliquez pourquoi et posez une question sur le salaire.",
    points: ["Votre réponse (oui ou non)", "Pourquoi", "Une question sur le salaire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-6",
    title: "Demander un délai",
    situation: "L'entreprise demande vos certificats de travail très vite.",
    sourceMessage: {
      from: "Service des ressources humaines, Entreprise Batimo",
      subject: "Vos certificats de travail",
      body: "Madame, Monsieur,\nPour continuer l'étude de votre candidature, il nous faut vos certificats de travail avant jeudi.\nMeilleures salutations,\nLe service des ressources humaines",
    },
    instruction: "Répondez aux ressources humaines : excusez-vous, expliquez pourquoi vous avez besoin de plus de temps et proposez une nouvelle date d'envoi.",
    points: ["L'excuse", "Pourquoi vous avez besoin de temps", "La nouvelle date d'envoi"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-7",
    title: "Répondre à un ami",
    situation: "Un ami vous envoie une offre d'emploi.",
    sourceMessage: {
      from: "Ali",
      subject: "Offre pour toi !",
      body: "Salut !\nJ'ai vu une offre pour toi : livreur à 100 % pour un magasin de meubles. Il faut le permis de conduire.\nTu vas postuler ?\nAli",
    },
    instruction: "Répondez à Ali : remerciez-le, dites si vous allez postuler et pourquoi, et posez une question sur l'offre.",
    points: ["Un remerciement", "Votre décision et pourquoi", "Une question sur l'offre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-8",
    title: "Donner ses disponibilités",
    situation: "L'entreprise a bien reçu votre candidature.",
    sourceMessage: {
      from: "Supermarché Riviera",
      subject: "Suite de votre candidature",
      body: "Madame, Monsieur,\nNous avons bien reçu votre dossier, merci.\nPour organiser un entretien, merci de nous donner vos disponibilités pour la semaine prochaine.\nLe service des ressources humaines",
    },
    instruction: "Répondez au supermarché : remerciez, donnez vos disponibilités pour la semaine prochaine et posez une question sur le lieu de l'entretien.",
    points: ["Un remerciement", "Vos disponibilités", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-9",
    title: "Demander un autre taux d'activité",
    situation: "L'offre est à 100 %, mais vous cherchez un temps partiel.",
    sourceMessage: {
      from: "Boutique Fleur de Lys",
      subject: "Poste de vente à 100 %",
      body: "Bonjour,\nNous cherchons une personne pour la vente à 100 %, du lundi au samedi.\nVotre profil nous intéresse.\nLa Boutique Fleur de Lys",
    },
    instruction: "Répondez à la boutique : remerciez, expliquez que vous cherchez un poste à temps partiel et demandez si un poste à 60 % est possible.",
    points: ["Un remerciement", "Votre situation (temps partiel)", "La question sur un poste à 60 %"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-10",
    title: "Compléter son dossier",
    situation: "Il manque des informations dans votre candidature.",
    sourceMessage: {
      from: "Service des ressources humaines, Clinique des Lilas",
      subject: "Dossier incomplet",
      body: "Madame, Monsieur,\nVotre dossier de candidature est incomplet : il manque votre numéro de téléphone et vos dates de disponibilité.\nMerci de nous envoyer ces informations.\nLe service des ressources humaines",
    },
    instruction: "Répondez à la clinique : donnez votre numéro de téléphone, indiquez vos dates de disponibilité et remerciez pour l'intérêt porté à votre dossier.",
    points: ["Votre numéro de téléphone", "Vos disponibilités", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-11",
    title: "Répondre — emploi (11)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-12",
    title: "Répondre — emploi (12)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-13",
    title: "Répondre — emploi (13)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-14",
    title: "Répondre — emploi (14)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-15",
    title: "Répondre — emploi (15)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-16",
    title: "Répondre — emploi (16)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-17",
    title: "Répondre — emploi (17)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-18",
    title: "Répondre — emploi (18)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-19",
    title: "Répondre — emploi (19)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-3-pee-20",
    title: "Répondre — emploi (20)",
    situation: "Vous avez reçu un e-mail concernant emploi.",
sourceMessage: {
  from: "Service Emploi",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant emploi.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E13.4 — Passer un entretien
   ════════════════════════════════════════════════════════════════════════════ */

const E13_4_CE_EMAIL_TEXT = `De : Service E13 4 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_POOL = buildExpressPool("e13-4-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 1 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 1 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 1", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 1.",
    fill: "sujet",
    vfQ: "Sujet : sujet 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 1", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 1.",
    fill: "détail",
    vfQ: "Info : détail 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 1 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 1 jours.",
    fill: "délai",
    vfQ: "Délai : délai 1 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 1", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 1.",
    fill: "action",
    vfQ: "Action : action 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 1", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 1.",
    fill: "contact",
    vfQ: "Contact : contact 1.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_2_TEXT = `De : Service E13 4 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_2_POOL = buildExpressPool("e13-4-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 2 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 2 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 2", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 2.",
    fill: "sujet",
    vfQ: "Sujet : sujet 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 2", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 2.",
    fill: "détail",
    vfQ: "Info : détail 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 2 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 2 jours.",
    fill: "délai",
    vfQ: "Délai : délai 2 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 2", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 2.",
    fill: "action",
    vfQ: "Action : action 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 2", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 2.",
    fill: "contact",
    vfQ: "Contact : contact 2.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_3_TEXT = `De : Service E13 4 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_3_POOL = buildExpressPool("e13-4-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 3 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 3 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 3", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 3.",
    fill: "sujet",
    vfQ: "Sujet : sujet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 3", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 3.",
    fill: "détail",
    vfQ: "Info : détail 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 3 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 3 jours.",
    fill: "délai",
    vfQ: "Délai : délai 3 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 3", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 3.",
    fill: "action",
    vfQ: "Action : action 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 3", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 3.",
    fill: "contact",
    vfQ: "Contact : contact 3.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_4_TEXT = `De : Service E13 4 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_4_POOL = buildExpressPool("e13-4-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 4 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 4 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 4", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 4.",
    fill: "sujet",
    vfQ: "Sujet : sujet 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 4", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 4.",
    fill: "détail",
    vfQ: "Info : détail 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 4 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 4 jours.",
    fill: "délai",
    vfQ: "Délai : délai 4 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 4", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 4.",
    fill: "action",
    vfQ: "Action : action 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 4", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 4.",
    fill: "contact",
    vfQ: "Contact : contact 4.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_5_TEXT = `De : Service E13 4 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_5_POOL = buildExpressPool("e13-4-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 5 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 5 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 5", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 5.",
    fill: "sujet",
    vfQ: "Sujet : sujet 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 5", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 5.",
    fill: "détail",
    vfQ: "Info : détail 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 5 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 5 jours.",
    fill: "délai",
    vfQ: "Délai : délai 5 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 5", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 5.",
    fill: "action",
    vfQ: "Action : action 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 5", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 5.",
    fill: "contact",
    vfQ: "Contact : contact 5.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_6_TEXT = `De : Service E13 4 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_6_POOL = buildExpressPool("e13-4-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 6 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 6 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 6", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 6.",
    fill: "sujet",
    vfQ: "Sujet : sujet 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 6", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 6.",
    fill: "détail",
    vfQ: "Info : détail 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 6 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 6 jours.",
    fill: "délai",
    vfQ: "Délai : délai 6 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 6", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 6.",
    fill: "action",
    vfQ: "Action : action 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 6", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 6.",
    fill: "contact",
    vfQ: "Contact : contact 6.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_7_TEXT = `De : Service E13 4 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_7_POOL = buildExpressPool("e13-4-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 7 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 7 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 7", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 7.",
    fill: "sujet",
    vfQ: "Sujet : sujet 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 7", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 7.",
    fill: "détail",
    vfQ: "Info : détail 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 7 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 7 jours.",
    fill: "délai",
    vfQ: "Délai : délai 7 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 7", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 7.",
    fill: "action",
    vfQ: "Action : action 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 7", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 7.",
    fill: "contact",
    vfQ: "Contact : contact 7.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_8_TEXT = `De : Service E13 4 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_8_POOL = buildExpressPool("e13-4-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 8 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 8 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 8", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 8.",
    fill: "sujet",
    vfQ: "Sujet : sujet 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 8", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 8.",
    fill: "détail",
    vfQ: "Info : détail 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 8 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 8 jours.",
    fill: "délai",
    vfQ: "Délai : délai 8 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 8", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 8.",
    fill: "action",
    vfQ: "Action : action 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 8", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 8.",
    fill: "contact",
    vfQ: "Contact : contact 8.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_9_TEXT = `De : Service E13 4 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_9_POOL = buildExpressPool("e13-4-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 9 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 9 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 9", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 9.",
    fill: "sujet",
    vfQ: "Sujet : sujet 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 9", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 9.",
    fill: "détail",
    vfQ: "Info : détail 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 9 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 9 jours.",
    fill: "délai",
    vfQ: "Délai : délai 9 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 9", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 9.",
    fill: "action",
    vfQ: "Action : action 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 9", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 9.",
    fill: "contact",
    vfQ: "Contact : contact 9.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_10_TEXT = `De : Service E13 4 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_10_POOL = buildExpressPool("e13-4-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 10 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 10 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 10", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 10.",
    fill: "sujet",
    vfQ: "Sujet : sujet 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 10", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 10.",
    fill: "détail",
    vfQ: "Info : détail 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 10 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 10 jours.",
    fill: "délai",
    vfQ: "Délai : délai 10 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 10", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 10.",
    fill: "action",
    vfQ: "Action : action 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 10", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 10.",
    fill: "contact",
    vfQ: "Contact : contact 10.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_11_TEXT = `De : Service E13 4 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_11_POOL = buildExpressPool("e13-4-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 11 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 11 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 11", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 11.",
    fill: "sujet",
    vfQ: "Sujet : sujet 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 11", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 11.",
    fill: "détail",
    vfQ: "Info : détail 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 11 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 11 jours.",
    fill: "délai",
    vfQ: "Délai : délai 11 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 11", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 11.",
    fill: "action",
    vfQ: "Action : action 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 11", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 11.",
    fill: "contact",
    vfQ: "Contact : contact 11.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_12_TEXT = `De : Service E13 4 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_12_POOL = buildExpressPool("e13-4-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 12 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 12 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 12", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 12.",
    fill: "sujet",
    vfQ: "Sujet : sujet 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 12", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 12.",
    fill: "détail",
    vfQ: "Info : détail 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 12 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 12 jours.",
    fill: "délai",
    vfQ: "Délai : délai 12 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 12", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 12.",
    fill: "action",
    vfQ: "Action : action 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 12", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 12.",
    fill: "contact",
    vfQ: "Contact : contact 12.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_13_TEXT = `De : Service E13 4 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_13_POOL = buildExpressPool("e13-4-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 13 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 13 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 13", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 13.",
    fill: "sujet",
    vfQ: "Sujet : sujet 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 13", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 13.",
    fill: "détail",
    vfQ: "Info : détail 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 13 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 13 jours.",
    fill: "délai",
    vfQ: "Délai : délai 13 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 13", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 13.",
    fill: "action",
    vfQ: "Action : action 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 13", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 13.",
    fill: "contact",
    vfQ: "Contact : contact 13.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_14_TEXT = `De : Service E13 4 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_14_POOL = buildExpressPool("e13-4-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 14 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 14 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 14", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 14.",
    fill: "sujet",
    vfQ: "Sujet : sujet 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 14", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 14.",
    fill: "détail",
    vfQ: "Info : détail 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 14 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 14 jours.",
    fill: "délai",
    vfQ: "Délai : délai 14 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 14", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 14.",
    fill: "action",
    vfQ: "Action : action 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 14", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 14.",
    fill: "contact",
    vfQ: "Contact : contact 14.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_15_TEXT = `De : Service E13 4 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_15_POOL = buildExpressPool("e13-4-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 15 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 15 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 15", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 15.",
    fill: "sujet",
    vfQ: "Sujet : sujet 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 15", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 15.",
    fill: "détail",
    vfQ: "Info : détail 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 15 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 15 jours.",
    fill: "délai",
    vfQ: "Délai : délai 15 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 15", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 15.",
    fill: "action",
    vfQ: "Action : action 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 15", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 15.",
    fill: "contact",
    vfQ: "Contact : contact 15.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_16_TEXT = `De : Service E13 4 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_16_POOL = buildExpressPool("e13-4-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 16 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 16 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 16", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 16.",
    fill: "sujet",
    vfQ: "Sujet : sujet 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 16", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 16.",
    fill: "détail",
    vfQ: "Info : détail 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 16 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 16 jours.",
    fill: "délai",
    vfQ: "Délai : délai 16 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 16", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 16.",
    fill: "action",
    vfQ: "Action : action 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 16", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 16.",
    fill: "contact",
    vfQ: "Contact : contact 16.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_17_TEXT = `De : Service E13 4 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_17_POOL = buildExpressPool("e13-4-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 17 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 17 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 17", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 17.",
    fill: "sujet",
    vfQ: "Sujet : sujet 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 17", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 17.",
    fill: "détail",
    vfQ: "Info : détail 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 17 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 17 jours.",
    fill: "délai",
    vfQ: "Délai : délai 17 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 17", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 17.",
    fill: "action",
    vfQ: "Action : action 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 17", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 17.",
    fill: "contact",
    vfQ: "Contact : contact 17.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_18_TEXT = `De : Service E13 4 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_18_POOL = buildExpressPool("e13-4-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 18 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 18 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 18", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 18.",
    fill: "sujet",
    vfQ: "Sujet : sujet 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 18", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 18.",
    fill: "détail",
    vfQ: "Info : détail 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 18 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 18 jours.",
    fill: "délai",
    vfQ: "Délai : délai 18 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 18", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 18.",
    fill: "action",
    vfQ: "Action : action 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 18", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 18.",
    fill: "contact",
    vfQ: "Contact : contact 18.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_19_TEXT = `De : Service E13 4 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_19_POOL = buildExpressPool("e13-4-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 19 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 19 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 19", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 19.",
    fill: "sujet",
    vfQ: "Sujet : sujet 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 19", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 19.",
    fill: "détail",
    vfQ: "Info : détail 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 19 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 19 jours.",
    fill: "délai",
    vfQ: "Délai : délai 19 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 19", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 19.",
    fill: "action",
    vfQ: "Action : action 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 19", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 19.",
    fill: "contact",
    vfQ: "Contact : contact 19.",
    vfC: 0,
  }),
]);

const E13_4_CE_EMAIL_20_TEXT = `De : Service E13 4 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E13_4_CE_EMAIL_20_POOL = buildExpressPool("e13-4-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 20 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 20 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 20", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 20.",
    fill: "sujet",
    vfQ: "Sujet : sujet 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 20", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 20.",
    fill: "détail",
    vfQ: "Info : détail 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 20 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 20 jours.",
    fill: "délai",
    vfQ: "Délai : délai 20 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 20", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 20.",
    fill: "action",
    vfQ: "Action : action 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 4 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 4 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 20", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 20.",
    fill: "contact",
    vfQ: "Contact : contact 20.",
    vfC: 0,
  }),
]);

export const E13_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-4-ce-email",
  readingText: E13_4_CE_EMAIL_TEXT,
  questionPool: E13_4_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-4-ce-email-2",
  readingText: E13_4_CE_EMAIL_2_TEXT,
  questionPool: E13_4_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-3",
  readingText: E13_4_CE_EMAIL_3_TEXT,
  questionPool: E13_4_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-4",
  readingText: E13_4_CE_EMAIL_4_TEXT,
  questionPool: E13_4_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-5",
  readingText: E13_4_CE_EMAIL_5_TEXT,
  questionPool: E13_4_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-6",
  readingText: E13_4_CE_EMAIL_6_TEXT,
  questionPool: E13_4_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-7",
  readingText: E13_4_CE_EMAIL_7_TEXT,
  questionPool: E13_4_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-8",
  readingText: E13_4_CE_EMAIL_8_TEXT,
  questionPool: E13_4_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-9",
  readingText: E13_4_CE_EMAIL_9_TEXT,
  questionPool: E13_4_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-10",
  readingText: E13_4_CE_EMAIL_10_TEXT,
  questionPool: E13_4_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-11",
  readingText: E13_4_CE_EMAIL_11_TEXT,
  questionPool: E13_4_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-12",
  readingText: E13_4_CE_EMAIL_12_TEXT,
  questionPool: E13_4_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-13",
  readingText: E13_4_CE_EMAIL_13_TEXT,
  questionPool: E13_4_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-14",
  readingText: E13_4_CE_EMAIL_14_TEXT,
  questionPool: E13_4_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-15",
  readingText: E13_4_CE_EMAIL_15_TEXT,
  questionPool: E13_4_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-16",
  readingText: E13_4_CE_EMAIL_16_TEXT,
  questionPool: E13_4_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-17",
  readingText: E13_4_CE_EMAIL_17_TEXT,
  questionPool: E13_4_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-18",
  readingText: E13_4_CE_EMAIL_18_TEXT,
  questionPool: E13_4_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-19",
  readingText: E13_4_CE_EMAIL_19_TEXT,
  questionPool: E13_4_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-4-ce-email-20",
  readingText: E13_4_CE_EMAIL_20_TEXT,
  questionPool: E13_4_CE_EMAIL_20_POOL
}),
];

export const E13_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-4-pee-1",
    title: "Confirmer sa présence",
    situation: "La boulangerie vous invite à un entretien.",
    sourceMessage: {
      from: "Mme Nguyen, Boulangerie du Pont",
      subject: "Convocation à un entretien",
      body: "Bonjour,\nNous vous invitons à un entretien le jeudi 12 octobre à 14 h 30 à la boulangerie.\nMerci de confirmer votre présence.\nMme Nguyen",
    },
    instruction: "Répondez à Mme Nguyen : confirmez votre présence, remerciez pour l'invitation et posez une question sur les documents à apporter.",
    points: ["La confirmation", "Un remerciement", "Une question sur les documents"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-2",
    title: "Déplacer un entretien",
    situation: "Le garage propose un entretien à une heure où vous travaillez.",
    sourceMessage: {
      from: "Garage Central",
      subject: "Entretien mardi à 10 h",
      body: "Bonjour,\nPouvez-vous venir à un entretien mardi prochain à 10 h à notre atelier ?\nMerci de votre réponse,\nGarage Central",
    },
    instruction: "Répondez au garage : excusez-vous, expliquez que vous travaillez à cette heure et proposez deux autres dates possibles.",
    points: ["L'excuse", "Pourquoi mardi à 10 h n'est pas possible", "Deux autres dates"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-3",
    title: "Demander le lieu exact",
    situation: "L'entreprise vous invite, mais l'adresse n'est pas claire.",
    sourceMessage: {
      from: "Entreprise Infotech",
      subject: "Invitation à un entretien",
      body: "Bonjour,\nNous vous invitons à un entretien le lundi 3 novembre à 9 h à notre siège.\nMeilleures salutations,\nEntreprise Infotech",
    },
    instruction: "Répondez à l'entreprise : confirmez la date, demandez l'adresse exacte et demandez quelle personne vous devez chercher à l'accueil.",
    points: ["La confirmation de la date", "La question sur l'adresse", "La question sur la personne à l'accueil"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-4",
    title: "Remercier après l'entretien",
    situation: "Après votre entretien, l'entreprise vous écrit.",
    sourceMessage: {
      from: "Mme Nguyen, Boulangerie du Pont",
      subject: "Merci de votre visite",
      body: "Bonjour,\nMerci d'être venu(e) à l'entretien aujourd'hui.\nNous allons vous donner notre réponse la semaine prochaine.\nMme Nguyen",
    },
    instruction: "Répondez à Mme Nguyen : remerciez pour l'entretien, redites votre intérêt pour le poste et ajoutez une information que vous avez oublié de dire.",
    points: ["Un remerciement", "Votre intérêt pour le poste", "Une information oubliée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-5",
    title: "Répondre à un ami",
    situation: "Un ami vous pose des questions sur votre entretien.",
    sourceMessage: {
      from: "Sami",
      subject: "Ton entretien",
      body: "Salut !\nAlors, c'est quand ton entretien ? Tu es prêt ?\nSi tu veux, je peux t'aider à préparer les questions.\nSami",
    },
    instruction: "Répondez à Sami : dites quand a lieu l'entretien, expliquez comment vous vous préparez et répondez à sa proposition d'aide.",
    points: ["La date de l'entretien", "Votre préparation", "Votre réponse à sa proposition"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-6",
    title: "Préparer l'entretien avec une conseillère",
    situation: "Votre conseillère propose de préparer l'entretien avec vous.",
    sourceMessage: {
      from: "Mme Steiner, Agence TravailPlus",
      subject: "Préparation de votre entretien",
      body: "Bonjour,\nVotre entretien approche. Je vous propose une séance de préparation à l'agence cette semaine.\nQuel jour vous convient ?\nMme Steiner",
    },
    instruction: "Répondez à Mme Steiner : acceptez la séance, proposez un jour et une heure, et demandez ce que vous devez apporter.",
    points: ["Votre accord", "Le jour et l'heure proposés", "Une question sur les documents à apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-7",
    title: "Annuler un entretien",
    situation: "Vous avez accepté un autre travail et la boutique vous rappelle votre entretien de demain.",
    sourceMessage: {
      from: "Boutique Fleur de Lys",
      subject: "Rappel : entretien demain à 15 h",
      body: "Bonjour,\nNous vous rappelons votre entretien demain à 15 h à la boutique.\nÀ demain,\nLa Boutique Fleur de Lys",
    },
    instruction: "Répondez à la boutique : excusez-vous et annulez l'entretien, expliquez que vous avez accepté un autre poste et remerciez pour l'invitation.",
    points: ["L'excuse et l'annulation", "L'explication", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-8",
    title: "Question sur les documents",
    situation: "L'entreprise vous demande d'apporter « vos documents ».",
    sourceMessage: {
      from: "Entreprise Batimo",
      subject: "Votre entretien de vendredi",
      body: "Bonjour,\nNous vous attendons vendredi à 10 h pour votre entretien.\nMerci d'apporter vos documents.\nEntreprise Batimo",
    },
    instruction: "Répondez à l'entreprise : confirmez votre présence, demandez quels documents il faut apporter et demandez combien de temps dure l'entretien.",
    points: ["La confirmation", "La question sur les documents", "La question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-9",
    title: "Raconter son entretien",
    situation: "Votre sœur veut savoir comment s'est passé votre entretien.",
    sourceMessage: {
      from: "Nadia",
      subject: "Alors, cet entretien ?",
      body: "Salut !\nTon entretien, c'était aujourd'hui, non ? Comment ça s'est passé ?\nRaconte-moi tout !\nNadia",
    },
    instruction: "Répondez à Nadia : racontez comment l'entretien s'est passé, donnez un exemple de question posée et dites quand vous allez recevoir la réponse.",
    points: ["Comment l'entretien s'est passé", "Une question posée", "Quand arrive la réponse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-10",
    title: "Répondre à une réponse positive",
    situation: "Bonne nouvelle : vous avez le poste !",
    sourceMessage: {
      from: "Mme Nguyen, Boulangerie du Pont",
      subject: "Bonne nouvelle",
      body: "Bonjour,\nNous avons le plaisir de vous annoncer que vous avez le poste !\nPouvez-vous venir signer le contrat lundi à 10 h ?\nMme Nguyen",
    },
    instruction: "Répondez à Mme Nguyen : remerciez, confirmez le rendez-vous de lundi et posez une question sur le premier jour de travail.",
    points: ["Un remerciement", "La confirmation du rendez-vous", "Une question sur le premier jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-11",
    title: "Répondre — entretien (11)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-12",
    title: "Répondre — entretien (12)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-13",
    title: "Répondre — entretien (13)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-14",
    title: "Répondre — entretien (14)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-15",
    title: "Répondre — entretien (15)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-16",
    title: "Répondre — entretien (16)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-17",
    title: "Répondre — entretien (17)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-18",
    title: "Répondre — entretien (18)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-19",
    title: "Répondre — entretien (19)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-4-pee-20",
    title: "Répondre — entretien (20)",
    situation: "Vous avez reçu un e-mail concernant entretien.",
sourceMessage: {
  from: "Service Entretien",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entretien.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E13.5 — S'intégrer à l'entreprise
   ════════════════════════════════════════════════════════════════════════════ */

const E13_5_CE_EMAIL_TEXT = `De : Service E13 5 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_POOL = buildExpressPool("e13-5-ce-email", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 1 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 1 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 1", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 1.",
    fill: "sujet",
    vfQ: "Sujet : sujet 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 1", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 1.",
    fill: "détail",
    vfQ: "Info : détail 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 1 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 1 jours.",
    fill: "délai",
    vfQ: "Délai : délai 1 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 1", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 1.",
    fill: "action",
    vfQ: "Action : action 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 1.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 1", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 1.",
    fill: "contact",
    vfQ: "Contact : contact 1.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_2_TEXT = `De : Service E13 5 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_2_POOL = buildExpressPool("e13-5-ce-email-2", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 2 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 2 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 2", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 2.",
    fill: "sujet",
    vfQ: "Sujet : sujet 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 2", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 2.",
    fill: "détail",
    vfQ: "Info : détail 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 2 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 2 jours.",
    fill: "délai",
    vfQ: "Délai : délai 2 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 2", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 2.",
    fill: "action",
    vfQ: "Action : action 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 2.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 2", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 2.",
    fill: "contact",
    vfQ: "Contact : contact 2.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_3_TEXT = `De : Service E13 5 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_3_POOL = buildExpressPool("e13-5-ce-email-3", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 3 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 3 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 3", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 3.",
    fill: "sujet",
    vfQ: "Sujet : sujet 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 3", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 3.",
    fill: "détail",
    vfQ: "Info : détail 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 3 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 3 jours.",
    fill: "délai",
    vfQ: "Délai : délai 3 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 3", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 3.",
    fill: "action",
    vfQ: "Action : action 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 3.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 3", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 3.",
    fill: "contact",
    vfQ: "Contact : contact 3.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_4_TEXT = `De : Service E13 5 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_4_POOL = buildExpressPool("e13-5-ce-email-4", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 4 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 4 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 4", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 4.",
    fill: "sujet",
    vfQ: "Sujet : sujet 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 4", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 4.",
    fill: "détail",
    vfQ: "Info : détail 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 4 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 4 jours.",
    fill: "délai",
    vfQ: "Délai : délai 4 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 4", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 4.",
    fill: "action",
    vfQ: "Action : action 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 4.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 4", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 4.",
    fill: "contact",
    vfQ: "Contact : contact 4.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_5_TEXT = `De : Service E13 5 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_5_POOL = buildExpressPool("e13-5-ce-email-5", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 5 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 5 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 5", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 5.",
    fill: "sujet",
    vfQ: "Sujet : sujet 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 5", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 5.",
    fill: "détail",
    vfQ: "Info : détail 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 5 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 5 jours.",
    fill: "délai",
    vfQ: "Délai : délai 5 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 5", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 5.",
    fill: "action",
    vfQ: "Action : action 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 5.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 5", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 5.",
    fill: "contact",
    vfQ: "Contact : contact 5.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_6_TEXT = `De : Service E13 5 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_6_POOL = buildExpressPool("e13-5-ce-email-6", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 6 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 6 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 6", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 6.",
    fill: "sujet",
    vfQ: "Sujet : sujet 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 6", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 6.",
    fill: "détail",
    vfQ: "Info : détail 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 6 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 6 jours.",
    fill: "délai",
    vfQ: "Délai : délai 6 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 6", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 6.",
    fill: "action",
    vfQ: "Action : action 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 6.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 6", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 6.",
    fill: "contact",
    vfQ: "Contact : contact 6.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_7_TEXT = `De : Service E13 5 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_7_POOL = buildExpressPool("e13-5-ce-email-7", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 7 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 7 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 7", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 7.",
    fill: "sujet",
    vfQ: "Sujet : sujet 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 7", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 7.",
    fill: "détail",
    vfQ: "Info : détail 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 7 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 7 jours.",
    fill: "délai",
    vfQ: "Délai : délai 7 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 7", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 7.",
    fill: "action",
    vfQ: "Action : action 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 7.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 7", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 7.",
    fill: "contact",
    vfQ: "Contact : contact 7.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_8_TEXT = `De : Service E13 5 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_8_POOL = buildExpressPool("e13-5-ce-email-8", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 8 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 8 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 8", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 8.",
    fill: "sujet",
    vfQ: "Sujet : sujet 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 8", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 8.",
    fill: "détail",
    vfQ: "Info : détail 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 8 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 8 jours.",
    fill: "délai",
    vfQ: "Délai : délai 8 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 8", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 8.",
    fill: "action",
    vfQ: "Action : action 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 8.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 8", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 8.",
    fill: "contact",
    vfQ: "Contact : contact 8.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_9_TEXT = `De : Service E13 5 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_9_POOL = buildExpressPool("e13-5-ce-email-9", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 9 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 9 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 9", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 9.",
    fill: "sujet",
    vfQ: "Sujet : sujet 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 9", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 9.",
    fill: "détail",
    vfQ: "Info : détail 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 9 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 9 jours.",
    fill: "délai",
    vfQ: "Délai : délai 9 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 9", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 9.",
    fill: "action",
    vfQ: "Action : action 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 9.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 9", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 9.",
    fill: "contact",
    vfQ: "Contact : contact 9.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_10_TEXT = `De : Service E13 5 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_10_POOL = buildExpressPool("e13-5-ce-email-10", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 10 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 10 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 10", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 10.",
    fill: "sujet",
    vfQ: "Sujet : sujet 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 10", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 10.",
    fill: "détail",
    vfQ: "Info : détail 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 10 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 10 jours.",
    fill: "délai",
    vfQ: "Délai : délai 10 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 10", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 10.",
    fill: "action",
    vfQ: "Action : action 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 10.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 10", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 10.",
    fill: "contact",
    vfQ: "Contact : contact 10.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_11_TEXT = `De : Service E13 5 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_11_POOL = buildExpressPool("e13-5-ce-email-11", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 11 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 11 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 11", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 11.",
    fill: "sujet",
    vfQ: "Sujet : sujet 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 11", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 11.",
    fill: "détail",
    vfQ: "Info : détail 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 11 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 11 jours.",
    fill: "délai",
    vfQ: "Délai : délai 11 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 11", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 11.",
    fill: "action",
    vfQ: "Action : action 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 11.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 11", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 11.",
    fill: "contact",
    vfQ: "Contact : contact 11.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_12_TEXT = `De : Service E13 5 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_12_POOL = buildExpressPool("e13-5-ce-email-12", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 12 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 12 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 12", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 12.",
    fill: "sujet",
    vfQ: "Sujet : sujet 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 12", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 12.",
    fill: "détail",
    vfQ: "Info : détail 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 12 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 12 jours.",
    fill: "délai",
    vfQ: "Délai : délai 12 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 12", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 12.",
    fill: "action",
    vfQ: "Action : action 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 12.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 12", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 12.",
    fill: "contact",
    vfQ: "Contact : contact 12.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_13_TEXT = `De : Service E13 5 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_13_POOL = buildExpressPool("e13-5-ce-email-13", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 13 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 13 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 13", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 13.",
    fill: "sujet",
    vfQ: "Sujet : sujet 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 13", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 13.",
    fill: "détail",
    vfQ: "Info : détail 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 13 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 13 jours.",
    fill: "délai",
    vfQ: "Délai : délai 13 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 13", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 13.",
    fill: "action",
    vfQ: "Action : action 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 13.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 13", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 13.",
    fill: "contact",
    vfQ: "Contact : contact 13.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_14_TEXT = `De : Service E13 5 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_14_POOL = buildExpressPool("e13-5-ce-email-14", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 14 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 14 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 14", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 14.",
    fill: "sujet",
    vfQ: "Sujet : sujet 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 14", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 14.",
    fill: "détail",
    vfQ: "Info : détail 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 14 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 14 jours.",
    fill: "délai",
    vfQ: "Délai : délai 14 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 14", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 14.",
    fill: "action",
    vfQ: "Action : action 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 14.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 14", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 14.",
    fill: "contact",
    vfQ: "Contact : contact 14.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_15_TEXT = `De : Service E13 5 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_15_POOL = buildExpressPool("e13-5-ce-email-15", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 15 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 15 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 15", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 15.",
    fill: "sujet",
    vfQ: "Sujet : sujet 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 15", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 15.",
    fill: "détail",
    vfQ: "Info : détail 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 15 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 15 jours.",
    fill: "délai",
    vfQ: "Délai : délai 15 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 15", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 15.",
    fill: "action",
    vfQ: "Action : action 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 15.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 15", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 15.",
    fill: "contact",
    vfQ: "Contact : contact 15.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_16_TEXT = `De : Service E13 5 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_16_POOL = buildExpressPool("e13-5-ce-email-16", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 16 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 16 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 16", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 16.",
    fill: "sujet",
    vfQ: "Sujet : sujet 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 16", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 16.",
    fill: "détail",
    vfQ: "Info : détail 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 16 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 16 jours.",
    fill: "délai",
    vfQ: "Délai : délai 16 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 16", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 16.",
    fill: "action",
    vfQ: "Action : action 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 16.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 16", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 16.",
    fill: "contact",
    vfQ: "Contact : contact 16.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_17_TEXT = `De : Service E13 5 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_17_POOL = buildExpressPool("e13-5-ce-email-17", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 17 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 17 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 17", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 17.",
    fill: "sujet",
    vfQ: "Sujet : sujet 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 17", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 17.",
    fill: "détail",
    vfQ: "Info : détail 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 17 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 17 jours.",
    fill: "délai",
    vfQ: "Délai : délai 17 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 17", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 17.",
    fill: "action",
    vfQ: "Action : action 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 17.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 17", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 17.",
    fill: "contact",
    vfQ: "Contact : contact 17.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_18_TEXT = `De : Service E13 5 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_18_POOL = buildExpressPool("e13-5-ce-email-18", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 18 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 18 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 18", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 18.",
    fill: "sujet",
    vfQ: "Sujet : sujet 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 18", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 18.",
    fill: "détail",
    vfQ: "Info : détail 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 18 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 18 jours.",
    fill: "délai",
    vfQ: "Délai : délai 18 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 18", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 18.",
    fill: "action",
    vfQ: "Action : action 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 18.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 18", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 18.",
    fill: "contact",
    vfQ: "Contact : contact 18.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_19_TEXT = `De : Service E13 5 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_19_POOL = buildExpressPool("e13-5-ce-email-19", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 19 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 19 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 19", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 19.",
    fill: "sujet",
    vfQ: "Sujet : sujet 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 19", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 19.",
    fill: "détail",
    vfQ: "Info : détail 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 19 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 19 jours.",
    fill: "délai",
    vfQ: "Délai : délai 19 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 19", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 19.",
    fill: "action",
    vfQ: "Action : action 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 19.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 19", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 19.",
    fill: "contact",
    vfQ: "Contact : contact 19.",
    vfC: 0,
  }),
]);

const E13_5_CE_EMAIL_20_TEXT = `De : Service E13 5 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E13_5_CE_EMAIL_20_POOL = buildExpressPool("e13-5-ce-email-20", [
  q({
    id: "cem-q1",
    textQ: "Objet ?",
    text: ["Message 20 — information", "Facture", "Menu"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Objet : _________",
    fill: "Message",
    vfQ: "Objet : Message 20 — information.",
    vfC: 0,
  }),
  q({
    id: "cem-q2",
    textQ: "Sujet ?",
    text: ["Sujet 20", "Rien", "Sport"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Concernant sujet 20.",
    fill: "sujet",
    vfQ: "Sujet : sujet 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q3",
    textQ: "Information ?",
    text: ["Détail 20", "Aucune", "Secret"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "détail 20.",
    fill: "détail",
    vfQ: "Info : détail 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q4",
    textQ: "Délai ?",
    text: ["Délai 20 jours", "Jamais", "Hier"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Délai : délai 20 jours.",
    fill: "délai",
    vfQ: "Délai : délai 20 jours.",
    vfC: 0,
  }),
  q({
    id: "cem-q5",
    textQ: "Action ?",
    text: ["Action 20", "Rien", "Dormir"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Action : action 20.",
    fill: "action",
    vfQ: "Action : action 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q6",
    textQ: "Expéditeur ?",
    text: ["Service E13 5 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E13 5 20.",
    vfC: 0,
  }),
  q({
    id: "cem-q7",
    textQ: "Contact ?",
    text: ["Contact 20", "Personne", "Étranger"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "Contact : contact 20.",
    fill: "contact",
    vfQ: "Contact : contact 20.",
    vfC: 0,
  }),
]);

export const E13_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e13-5-ce-email",
  readingText: E13_5_CE_EMAIL_TEXT,
  questionPool: E13_5_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e13-5-ce-email-2",
  readingText: E13_5_CE_EMAIL_2_TEXT,
  questionPool: E13_5_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-3",
  readingText: E13_5_CE_EMAIL_3_TEXT,
  questionPool: E13_5_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-4",
  readingText: E13_5_CE_EMAIL_4_TEXT,
  questionPool: E13_5_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-5",
  readingText: E13_5_CE_EMAIL_5_TEXT,
  questionPool: E13_5_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-6",
  readingText: E13_5_CE_EMAIL_6_TEXT,
  questionPool: E13_5_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-7",
  readingText: E13_5_CE_EMAIL_7_TEXT,
  questionPool: E13_5_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-8",
  readingText: E13_5_CE_EMAIL_8_TEXT,
  questionPool: E13_5_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-9",
  readingText: E13_5_CE_EMAIL_9_TEXT,
  questionPool: E13_5_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-10",
  readingText: E13_5_CE_EMAIL_10_TEXT,
  questionPool: E13_5_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-11",
  readingText: E13_5_CE_EMAIL_11_TEXT,
  questionPool: E13_5_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-12",
  readingText: E13_5_CE_EMAIL_12_TEXT,
  questionPool: E13_5_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-13",
  readingText: E13_5_CE_EMAIL_13_TEXT,
  questionPool: E13_5_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-14",
  readingText: E13_5_CE_EMAIL_14_TEXT,
  questionPool: E13_5_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-15",
  readingText: E13_5_CE_EMAIL_15_TEXT,
  questionPool: E13_5_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-16",
  readingText: E13_5_CE_EMAIL_16_TEXT,
  questionPool: E13_5_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-17",
  readingText: E13_5_CE_EMAIL_17_TEXT,
  questionPool: E13_5_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-18",
  readingText: E13_5_CE_EMAIL_18_TEXT,
  questionPool: E13_5_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-19",
  readingText: E13_5_CE_EMAIL_19_TEXT,
  questionPool: E13_5_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e13-5-ce-email-20",
  readingText: E13_5_CE_EMAIL_20_TEXT,
  questionPool: E13_5_CE_EMAIL_20_POOL
}),
];

export const E13_5_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e13-5-pee-1",
    title: "Répondre au message d'accueil",
    situation: "Les ressources humaines vous envoient les informations pour votre premier jour.",
    sourceMessage: {
      from: "Mme Rochat, Ressources humaines",
      subject: "Votre premier jour",
      body: "Bonjour,\nNous vous attendons lundi à 8 h 15 à la réception pour votre premier jour.\nVotre tuteur, M. Girard, va venir vous chercher.\nMme Rochat",
    },
    instruction: "Répondez à Mme Rochat : remerciez, confirmez votre présence lundi et posez une question sur le badge ou le parking.",
    points: ["Un remerciement", "La confirmation", "Une question sur le badge ou le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-2",
    title: "Se présenter à l'équipe",
    situation: "Votre tuteur vous demande de vous présenter par e-mail à l'équipe.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Présentation à l'équipe",
      body: "Bonjour,\nBienvenue chez nous ! Pouvez-vous écrire un petit message de présentation pour l'équipe ?\nParlez de vous et de votre expérience.\nM. Girard",
    },
    instruction: "Répondez à M. Girard pour l'équipe : présentez-vous, parlez de votre expérience et dites que vous êtes content(e) de rejoindre l'équipe.",
    points: ["Votre présentation", "Votre expérience", "Votre plaisir de rejoindre l'équipe"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-3",
    title: "Question sur les horaires",
    situation: "Une collègue vous explique les horaires, mais vous avez une contrainte.",
    sourceMessage: {
      from: "Julie",
      subject: "Les horaires du service",
      body: "Bonjour,\nDans notre service, on commence à 8 h 30 et on finit à 17 h 30.\nLa pause de midi dure une heure.\nBonne journée,\nJulie",
    },
    instruction: "Répondez à Julie : remerciez-la, expliquez votre contrainte (par exemple la crèche de votre enfant) et demandez s'il est possible d'adapter vos horaires.",
    points: ["Un remerciement", "Votre contrainte", "La question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-4",
    title: "Problème de badge",
    situation: "La réception vous écrit au sujet de votre badge.",
    sourceMessage: {
      from: "Réception, Entreprise Alpina",
      subject: "Votre badge",
      body: "Bonjour,\nVous n'avez pas passé votre badge ce matin à l'entrée.\nAvez-vous un problème avec votre badge ?\nLa réception",
    },
    instruction: "Répondez à la réception : excusez-vous, expliquez que vous avez oublié votre badge à la maison et demandez comment entrer aujourd'hui.",
    points: ["L'excuse", "L'explication", "La question pour entrer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-5",
    title: "Accepter le repas d'équipe",
    situation: "Une collègue organise un repas de bienvenue pour vous.",
    sourceMessage: {
      from: "Julie",
      subject: "Repas d'équipe vendredi",
      body: "Bonjour,\nPour fêter ton arrivée, l'équipe organise un repas vendredi soir au restaurant Le Chalet.\nTu peux venir ?\nJulie",
    },
    instruction: "Répondez à Julie : acceptez l'invitation, remerciez l'équipe et posez une question sur l'heure ou le lieu.",
    points: ["Votre accord", "Un remerciement", "Une question sur l'heure ou le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-6",
    title: "S'excuser pour un retard",
    situation: "Vous êtes arrivé(e) en retard et votre tuteur vous écrit.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Retard de ce matin",
      body: "Bonjour,\nVous êtes arrivé(e) à 9 h 15 ce matin. Le travail commence à 8 h 30.\nQue s'est-il passé ?\nM. Girard",
    },
    instruction: "Répondez à M. Girard : excusez-vous, expliquez la raison de votre retard (le train, le bus…) et dites ce que vous allez faire pour arriver à l'heure.",
    points: ["L'excuse", "La raison du retard", "Votre solution pour arriver à l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-7",
    title: "Demander de l'aide",
    situation: "Vous ne comprenez pas une procédure de l'entreprise.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Vos premières tâches",
      body: "Bonjour,\nVoici vos tâches de la semaine : préparer les commandes et répondre aux e-mails des clients.\nSuivez bien la procédure du service.\nM. Girard",
    },
    instruction: "Répondez à M. Girard : dites ce que vous n'avez pas compris dans la procédure, demandez un moment pour en parler et proposez une heure.",
    points: ["Ce que vous n'avez pas compris", "La demande d'un moment", "L'heure proposée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-8",
    title: "Confirmer une formation interne",
    situation: "Les ressources humaines vous inscrivent à une formation.",
    sourceMessage: {
      from: "Mme Rochat, Ressources humaines",
      subject: "Formation sécurité",
      body: "Bonjour,\nVous êtes inscrit(e) à la formation interne sur la sécurité, le jeudi 20 novembre de 13 h 30 à 16 h, en salle 4.\nMerci de confirmer,\nMme Rochat",
    },
    instruction: "Répondez à Mme Rochat : confirmez votre participation, remerciez et demandez si vous devez apporter quelque chose.",
    points: ["La confirmation", "Un remerciement", "Une question sur le matériel à apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-9",
    title: "Faire le bilan de la première semaine",
    situation: "Votre tuteur vous demande un premier bilan.",
    sourceMessage: {
      from: "M. Girard",
      subject: "Votre première semaine",
      body: "Bonjour,\nVous avez fini votre première semaine chez nous.\nComment ça se passe ? Qu'est-ce qui est facile, qu'est-ce qui est difficile ?\nM. Girard",
    },
    instruction: "Répondez à M. Girard : dites ce qui se passe bien, expliquez une difficulté et posez une question sur le travail.",
    points: ["Ce qui se passe bien", "Une difficulté", "Une question sur le travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-10",
    title: "Remercier la directrice",
    situation: "La directrice vous souhaite la bienvenue.",
    sourceMessage: {
      from: "Mme Favre, Directrice",
      subject: "Bienvenue chez Alpina",
      body: "Bonjour,\nAu nom de toute l'entreprise, je vous souhaite la bienvenue chez Alpina.\nNous sommes heureux de vous compter dans notre équipe.\nMme Favre",
    },
    instruction: "Répondez à Mme Favre : remerciez-la, donnez vos premières impressions et dites pourquoi vous êtes motivé(e) pour ce travail.",
    points: ["Un remerciement", "Vos premières impressions", "Votre motivation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-11",
    title: "Répondre — entreprise (11)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-12",
    title: "Répondre — entreprise (12)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-13",
    title: "Répondre — entreprise (13)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-14",
    title: "Répondre — entreprise (14)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-15",
    title: "Répondre — entreprise (15)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-16",
    title: "Répondre — entreprise (16)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-17",
    title: "Répondre — entreprise (17)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-18",
    title: "Répondre — entreprise (18)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-19",
    title: "Répondre — entreprise (19)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e13-5-pee-20",
    title: "Répondre — entreprise (20)",
    situation: "Vous avez reçu un e-mail concernant entreprise.",
sourceMessage: {
  from: "Service Entreprise",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant entreprise.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
