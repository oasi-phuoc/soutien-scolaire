import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E10 — Vie sociale (invitations, rencontres, événements, école, associations).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E10.1 — Inviter et être invité
   ════════════════════════════════════════════════════════════════════════════ */

const E10_1_CE_EMAIL_TEXT = `De : Service E10 1 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_POOL = buildExpressPool("e10-1-ce-email", [
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
    text: ["Service E10 1 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 1.",
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

const E10_1_CE_EMAIL_2_TEXT = `De : Service E10 1 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_2_POOL = buildExpressPool("e10-1-ce-email-2", [
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
    text: ["Service E10 1 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 2.",
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

const E10_1_CE_EMAIL_3_TEXT = `De : Service E10 1 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_3_POOL = buildExpressPool("e10-1-ce-email-3", [
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
    text: ["Service E10 1 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 3.",
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

const E10_1_CE_EMAIL_4_TEXT = `De : Service E10 1 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_4_POOL = buildExpressPool("e10-1-ce-email-4", [
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
    text: ["Service E10 1 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 4.",
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

const E10_1_CE_EMAIL_5_TEXT = `De : Service E10 1 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_5_POOL = buildExpressPool("e10-1-ce-email-5", [
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
    text: ["Service E10 1 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 5.",
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

const E10_1_CE_EMAIL_6_TEXT = `De : Service E10 1 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_6_POOL = buildExpressPool("e10-1-ce-email-6", [
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
    text: ["Service E10 1 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 6.",
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

const E10_1_CE_EMAIL_7_TEXT = `De : Service E10 1 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_7_POOL = buildExpressPool("e10-1-ce-email-7", [
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
    text: ["Service E10 1 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 7.",
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

const E10_1_CE_EMAIL_8_TEXT = `De : Service E10 1 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_8_POOL = buildExpressPool("e10-1-ce-email-8", [
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
    text: ["Service E10 1 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 8.",
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

const E10_1_CE_EMAIL_9_TEXT = `De : Service E10 1 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_9_POOL = buildExpressPool("e10-1-ce-email-9", [
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
    text: ["Service E10 1 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 9.",
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

const E10_1_CE_EMAIL_10_TEXT = `De : Service E10 1 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_10_POOL = buildExpressPool("e10-1-ce-email-10", [
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
    text: ["Service E10 1 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 10.",
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

const E10_1_CE_EMAIL_11_TEXT = `De : Service E10 1 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_11_POOL = buildExpressPool("e10-1-ce-email-11", [
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
    text: ["Service E10 1 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 11.",
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

const E10_1_CE_EMAIL_12_TEXT = `De : Service E10 1 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_12_POOL = buildExpressPool("e10-1-ce-email-12", [
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
    text: ["Service E10 1 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 12.",
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

const E10_1_CE_EMAIL_13_TEXT = `De : Service E10 1 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_13_POOL = buildExpressPool("e10-1-ce-email-13", [
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
    text: ["Service E10 1 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 13.",
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

const E10_1_CE_EMAIL_14_TEXT = `De : Service E10 1 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_14_POOL = buildExpressPool("e10-1-ce-email-14", [
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
    text: ["Service E10 1 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 14.",
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

const E10_1_CE_EMAIL_15_TEXT = `De : Service E10 1 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_15_POOL = buildExpressPool("e10-1-ce-email-15", [
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
    text: ["Service E10 1 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 15.",
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

const E10_1_CE_EMAIL_16_TEXT = `De : Service E10 1 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_16_POOL = buildExpressPool("e10-1-ce-email-16", [
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
    text: ["Service E10 1 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 16.",
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

const E10_1_CE_EMAIL_17_TEXT = `De : Service E10 1 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_17_POOL = buildExpressPool("e10-1-ce-email-17", [
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
    text: ["Service E10 1 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 17.",
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

const E10_1_CE_EMAIL_18_TEXT = `De : Service E10 1 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_18_POOL = buildExpressPool("e10-1-ce-email-18", [
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
    text: ["Service E10 1 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 18.",
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

const E10_1_CE_EMAIL_19_TEXT = `De : Service E10 1 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_19_POOL = buildExpressPool("e10-1-ce-email-19", [
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
    text: ["Service E10 1 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 19.",
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

const E10_1_CE_EMAIL_20_TEXT = `De : Service E10 1 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E10_1_CE_EMAIL_20_POOL = buildExpressPool("e10-1-ce-email-20", [
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
    text: ["Service E10 1 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 1 20.",
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

export const E10_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-1-ce-email",
  readingText: E10_1_CE_EMAIL_TEXT,
  questionPool: E10_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-1-ce-email-2",
  readingText: E10_1_CE_EMAIL_2_TEXT,
  questionPool: E10_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-3",
  readingText: E10_1_CE_EMAIL_3_TEXT,
  questionPool: E10_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-4",
  readingText: E10_1_CE_EMAIL_4_TEXT,
  questionPool: E10_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-5",
  readingText: E10_1_CE_EMAIL_5_TEXT,
  questionPool: E10_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-6",
  readingText: E10_1_CE_EMAIL_6_TEXT,
  questionPool: E10_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-7",
  readingText: E10_1_CE_EMAIL_7_TEXT,
  questionPool: E10_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-8",
  readingText: E10_1_CE_EMAIL_8_TEXT,
  questionPool: E10_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-9",
  readingText: E10_1_CE_EMAIL_9_TEXT,
  questionPool: E10_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-10",
  readingText: E10_1_CE_EMAIL_10_TEXT,
  questionPool: E10_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-11",
  readingText: E10_1_CE_EMAIL_11_TEXT,
  questionPool: E10_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-12",
  readingText: E10_1_CE_EMAIL_12_TEXT,
  questionPool: E10_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-13",
  readingText: E10_1_CE_EMAIL_13_TEXT,
  questionPool: E10_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-14",
  readingText: E10_1_CE_EMAIL_14_TEXT,
  questionPool: E10_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-15",
  readingText: E10_1_CE_EMAIL_15_TEXT,
  questionPool: E10_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-16",
  readingText: E10_1_CE_EMAIL_16_TEXT,
  questionPool: E10_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-17",
  readingText: E10_1_CE_EMAIL_17_TEXT,
  questionPool: E10_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-18",
  readingText: E10_1_CE_EMAIL_18_TEXT,
  questionPool: E10_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-19",
  readingText: E10_1_CE_EMAIL_19_TEXT,
  questionPool: E10_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e10-1-ce-email-20",
  readingText: E10_1_CE_EMAIL_20_TEXT,
  questionPool: E10_1_CE_EMAIL_20_POOL
}),
];

export const E10_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-1-pee-1",
    title: "Accepter une invitation",
    situation: "Camille vous invite à sa crémaillère.",
    sourceMessage: {
      from: "Camille",
      subject: "Invitation à notre crémaillère",
      body: "Bonjour,\nNous organisons notre crémaillère le samedi 21 juin, à partir de 18 h 30.\nTu peux venir avec une personne de ton choix.\nRéponds-moi avant le 10 juin, s'il te plaît !\nCamille",
    },
    instruction: "Répondez à Camille : acceptez l'invitation, dites avec qui vous allez venir et demandez ce que vous pouvez apporter.",
    points: ["Votre acceptation", "Avec qui vous venez", "Une question sur ce qu'il faut apporter"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-2",
    title: "Refuser poliment",
    situation: "Une amie vous invite à son anniversaire, mais vous n'êtes pas libre.",
    sourceMessage: {
      from: "Nadia",
      subject: "Mes 30 ans !",
      body: "Coucou,\nJe fête mes 30 ans le vendredi 4 juillet au restaurant du Lac, à 19 h 30.\nJ'espère vraiment que tu vas venir !\nDis-moi vite,\nNadia",
    },
    instruction: "Répondez à Nadia : refusez poliment, expliquez pourquoi vous n'êtes pas libre et proposez une autre rencontre.",
    points: ["Un refus poli", "La raison de votre absence", "Une proposition de rencontre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-3",
    title: "Répondre à une invitation de mariage",
    situation: "Des amis vous invitent à leur mariage.",
    sourceMessage: {
      from: "Julie et Marc",
      subject: "Notre mariage",
      body: "Bonjour,\nNous nous marions le samedi 6 septembre à la salle des fêtes de Morges.\nLa cérémonie commence à 15 h, puis il y a un repas le soir.\nMerci de nous dire combien de personnes viennent avec toi.\nJulie et Marc",
    },
    instruction: "Répondez à Julie et Marc : félicitez-les, dites combien de personnes viennent avec vous et posez une question sur la tenue ou le cadeau.",
    points: ["Vos félicitations", "Le nombre de personnes", "Une question sur la tenue ou le cadeau"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-4",
    title: "Un apéritif chez le voisin",
    situation: "Votre voisin vous invite à un apéritif.",
    sourceMessage: {
      from: "M. Roth",
      subject: "Petit apéritif entre voisins",
      body: "Bonjour,\nNous organisons un petit apéritif sur notre terrasse dimanche prochain.\nVous êtes les bienvenus avec toute la famille.\nBien à vous,\nM. Roth",
    },
    instruction: "Répondez à M. Roth : acceptez l'invitation, proposez d'apporter quelque chose et demandez à quelle heure il faut venir.",
    points: ["Votre acceptation", "Ce que vous proposez d'apporter", "Une question sur l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-5",
    title: "Conseiller un ami invité",
    situation: "Un ami est invité à dîner et il ne sait pas quoi apporter.",
    sourceMessage: {
      from: "Tomas",
      subject: "Petite question",
      body: "Salut,\nJe suis invité à dîner chez mes voisins samedi soir. C'est la première fois.\nQu'est-ce que je peux apporter ? Des fleurs ? Du vin ?\nMerci pour ton aide !\nTomas",
    },
    instruction: "Répondez à Tomas : donnez-lui deux idées de cadeaux, expliquez pourquoi et donnez un conseil de politesse pour la soirée.",
    points: ["Deux idées de cadeaux", "Pourquoi ces idées", "Un conseil de politesse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-6",
    title: "Pique-nique d'équipe",
    situation: "Une collègue organise un pique-nique pour toute l'équipe.",
    sourceMessage: {
      from: "Sandra",
      subject: "Pique-nique de l'équipe",
      body: "Bonjour à tous,\nJe propose un pique-nique d'équipe samedi 12 juillet à midi.\nChacun apporte quelque chose à manger ou à boire.\nQui vient ? Répondez-moi cette semaine !\nSandra",
    },
    instruction: "Répondez à Sandra : dites que vous venez, précisez ce que vous allez apporter et posez une question sur le lieu du pique-nique.",
    points: ["Votre présence", "Ce que vous apportez", "Une question sur le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-7",
    title: "Anniversaire surprise",
    situation: "Un ami organise une fête surprise pour sa femme.",
    sourceMessage: {
      from: "Léo",
      subject: "Chut, c'est une surprise !",
      body: "Salut,\nJ'organise une fête surprise pour les 40 ans d'Emma, samedi 28 juin à 19 h chez nous.\nSurtout, ne lui dis rien !\nTu peux venir ?\nLéo",
    },
    instruction: "Répondez à Léo : confirmez votre venue, promettez de garder le secret et demandez à quelle heure il faut arriver exactement.",
    points: ["Votre confirmation", "La promesse de garder le secret", "Une question sur l'heure d'arrivée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-8",
    title: "S'excuser après une absence",
    situation: "Vous n'êtes pas allé(e) à la fête d'une amie hier soir.",
    sourceMessage: {
      from: "Fatou",
      subject: "Tu n'es pas venu(e) hier ?",
      body: "Coucou,\nOn t'a attendu(e) hier soir à la fête, mais tu n'es pas venu(e).\nJ'espère que tout va bien. Qu'est-ce qui s'est passé ?\nFatou",
    },
    instruction: "Répondez à Fatou : excusez-vous, expliquez ce qui s'est passé et proposez de la voir bientôt.",
    points: ["Vos excuses", "L'explication de votre absence", "Une proposition de rencontre"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-9",
    title: "Fête reportée",
    situation: "L'hôte de la fête doit changer la date.",
    sourceMessage: {
      from: "Hugo",
      subject: "Changement de date",
      body: "Bonjour,\nMauvaise nouvelle : je suis malade, la fête de samedi est reportée au samedi suivant, le 28 juin.\nJ'espère que tu pourras venir quand même.\nHugo",
    },
    instruction: "Répondez à Hugo : souhaitez-lui un bon rétablissement, dites si la nouvelle date vous convient et proposez votre aide pour la préparation.",
    points: ["Un mot pour sa santé", "Votre réponse pour la nouvelle date", "Une proposition d'aide"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-10",
    title: "Remercier après une soirée",
    situation: "Camille vous écrit après sa crémaillère.",
    sourceMessage: {
      from: "Camille",
      subject: "Merci d'être venu(e) !",
      body: "Bonjour,\nMerci beaucoup d'être venu(e) samedi, c'était une très belle soirée !\nTon dessert a eu beaucoup de succès.\nÀ bientôt,\nCamille",
    },
    instruction: "Répondez à Camille : remerciez-la pour la soirée, dites ce que vous avez préféré et invitez-la chez vous à votre tour.",
    points: ["Un remerciement", "Ce que vous avez préféré", "Une invitation chez vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-11",
    title: "Répondre — invitations (11)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-12",
    title: "Répondre — invitations (12)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-13",
    title: "Répondre — invitations (13)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-14",
    title: "Répondre — invitations (14)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-15",
    title: "Répondre — invitations (15)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-16",
    title: "Répondre — invitations (16)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-17",
    title: "Répondre — invitations (17)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-18",
    title: "Répondre — invitations (18)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-19",
    title: "Répondre — invitations (19)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-1-pee-20",
    title: "Répondre — invitations (20)",
    situation: "Vous avez reçu un e-mail concernant invitations.",
sourceMessage: {
  from: "Service Invitations",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant invitations.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.2 — Faire des rencontres
   ════════════════════════════════════════════════════════════════════════════ */

const E10_2_CE_EMAIL_TEXT = `De : Service E10 2 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_POOL = buildExpressPool("e10-2-ce-email", [
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
    text: ["Service E10 2 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 1.",
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

const E10_2_CE_EMAIL_2_TEXT = `De : Service E10 2 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_2_POOL = buildExpressPool("e10-2-ce-email-2", [
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
    text: ["Service E10 2 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 2.",
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

const E10_2_CE_EMAIL_3_TEXT = `De : Service E10 2 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_3_POOL = buildExpressPool("e10-2-ce-email-3", [
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
    text: ["Service E10 2 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 3.",
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

const E10_2_CE_EMAIL_4_TEXT = `De : Service E10 2 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_4_POOL = buildExpressPool("e10-2-ce-email-4", [
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
    text: ["Service E10 2 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 4.",
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

const E10_2_CE_EMAIL_5_TEXT = `De : Service E10 2 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_5_POOL = buildExpressPool("e10-2-ce-email-5", [
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
    text: ["Service E10 2 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 5.",
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

const E10_2_CE_EMAIL_6_TEXT = `De : Service E10 2 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_6_POOL = buildExpressPool("e10-2-ce-email-6", [
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
    text: ["Service E10 2 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 6.",
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

const E10_2_CE_EMAIL_7_TEXT = `De : Service E10 2 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_7_POOL = buildExpressPool("e10-2-ce-email-7", [
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
    text: ["Service E10 2 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 7.",
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

const E10_2_CE_EMAIL_8_TEXT = `De : Service E10 2 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_8_POOL = buildExpressPool("e10-2-ce-email-8", [
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
    text: ["Service E10 2 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 8.",
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

const E10_2_CE_EMAIL_9_TEXT = `De : Service E10 2 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_9_POOL = buildExpressPool("e10-2-ce-email-9", [
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
    text: ["Service E10 2 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 9.",
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

const E10_2_CE_EMAIL_10_TEXT = `De : Service E10 2 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_10_POOL = buildExpressPool("e10-2-ce-email-10", [
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
    text: ["Service E10 2 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 10.",
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

const E10_2_CE_EMAIL_11_TEXT = `De : Service E10 2 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_11_POOL = buildExpressPool("e10-2-ce-email-11", [
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
    text: ["Service E10 2 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 11.",
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

const E10_2_CE_EMAIL_12_TEXT = `De : Service E10 2 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_12_POOL = buildExpressPool("e10-2-ce-email-12", [
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
    text: ["Service E10 2 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 12.",
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

const E10_2_CE_EMAIL_13_TEXT = `De : Service E10 2 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_13_POOL = buildExpressPool("e10-2-ce-email-13", [
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
    text: ["Service E10 2 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 13.",
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

const E10_2_CE_EMAIL_14_TEXT = `De : Service E10 2 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_14_POOL = buildExpressPool("e10-2-ce-email-14", [
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
    text: ["Service E10 2 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 14.",
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

const E10_2_CE_EMAIL_15_TEXT = `De : Service E10 2 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_15_POOL = buildExpressPool("e10-2-ce-email-15", [
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
    text: ["Service E10 2 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 15.",
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

const E10_2_CE_EMAIL_16_TEXT = `De : Service E10 2 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_16_POOL = buildExpressPool("e10-2-ce-email-16", [
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
    text: ["Service E10 2 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 16.",
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

const E10_2_CE_EMAIL_17_TEXT = `De : Service E10 2 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_17_POOL = buildExpressPool("e10-2-ce-email-17", [
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
    text: ["Service E10 2 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 17.",
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

const E10_2_CE_EMAIL_18_TEXT = `De : Service E10 2 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_18_POOL = buildExpressPool("e10-2-ce-email-18", [
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
    text: ["Service E10 2 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 18.",
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

const E10_2_CE_EMAIL_19_TEXT = `De : Service E10 2 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_19_POOL = buildExpressPool("e10-2-ce-email-19", [
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
    text: ["Service E10 2 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 19.",
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

const E10_2_CE_EMAIL_20_TEXT = `De : Service E10 2 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E10_2_CE_EMAIL_20_POOL = buildExpressPool("e10-2-ce-email-20", [
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
    text: ["Service E10 2 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 2 20.",
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

export const E10_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-2-ce-email",
  readingText: E10_2_CE_EMAIL_TEXT,
  questionPool: E10_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-2-ce-email-2",
  readingText: E10_2_CE_EMAIL_2_TEXT,
  questionPool: E10_2_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-3",
  readingText: E10_2_CE_EMAIL_3_TEXT,
  questionPool: E10_2_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-4",
  readingText: E10_2_CE_EMAIL_4_TEXT,
  questionPool: E10_2_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-5",
  readingText: E10_2_CE_EMAIL_5_TEXT,
  questionPool: E10_2_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-6",
  readingText: E10_2_CE_EMAIL_6_TEXT,
  questionPool: E10_2_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-7",
  readingText: E10_2_CE_EMAIL_7_TEXT,
  questionPool: E10_2_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-8",
  readingText: E10_2_CE_EMAIL_8_TEXT,
  questionPool: E10_2_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-9",
  readingText: E10_2_CE_EMAIL_9_TEXT,
  questionPool: E10_2_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-10",
  readingText: E10_2_CE_EMAIL_10_TEXT,
  questionPool: E10_2_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-11",
  readingText: E10_2_CE_EMAIL_11_TEXT,
  questionPool: E10_2_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-12",
  readingText: E10_2_CE_EMAIL_12_TEXT,
  questionPool: E10_2_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-13",
  readingText: E10_2_CE_EMAIL_13_TEXT,
  questionPool: E10_2_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-14",
  readingText: E10_2_CE_EMAIL_14_TEXT,
  questionPool: E10_2_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-15",
  readingText: E10_2_CE_EMAIL_15_TEXT,
  questionPool: E10_2_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-16",
  readingText: E10_2_CE_EMAIL_16_TEXT,
  questionPool: E10_2_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-17",
  readingText: E10_2_CE_EMAIL_17_TEXT,
  questionPool: E10_2_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-18",
  readingText: E10_2_CE_EMAIL_18_TEXT,
  questionPool: E10_2_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-19",
  readingText: E10_2_CE_EMAIL_19_TEXT,
  questionPool: E10_2_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e10-2-ce-email-20",
  readingText: E10_2_CE_EMAIL_20_TEXT,
  questionPool: E10_2_CE_EMAIL_20_POOL
}),
];

export const E10_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-2-pee-1",
    title: "Un nouveau voisin",
    situation: "Un nouveau voisin se présente et vous invite pour un café.",
    sourceMessage: {
      from: "Marco",
      subject: "Votre nouveau voisin",
      body: "Bonjour,\nJe suis Marco, votre nouveau voisin du deuxième étage. Je suis arrivé la semaine dernière.\nVous voulez passer boire un café un de ces jours ?\nBonne journée,\nMarco",
    },
    instruction: "Répondez à Marco : souhaitez-lui la bienvenue, présentez-vous en quelques mots et proposez un jour pour le café.",
    points: ["Un mot de bienvenue", "Votre présentation", "Une proposition de jour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-2",
    title: "S'inscrire au café des langues",
    situation: "Le Café des langues vous demande des informations pour votre première soirée.",
    sourceMessage: {
      from: "Café des langues",
      subject: "Votre première soirée",
      body: "Bonjour,\nMerci pour votre intérêt ! Pour préparer votre venue, dites-nous :\nquelle langue voulez-vous pratiquer, et quel est votre niveau ?\nÀ jeudi !\nL'équipe du Café des langues",
    },
    instruction: "Répondez au Café des langues : dites quelle langue vous voulez pratiquer, décrivez votre niveau et posez une question sur la soirée.",
    points: ["La langue choisie", "Votre niveau", "Une question sur la soirée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-3",
    title: "Échange linguistique",
    situation: "Une étudiante cherche un partenaire pour un tandem de langues.",
    sourceMessage: {
      from: "Elena",
      subject: "Tandem français-espagnol",
      body: "Bonjour,\nJe suis espagnole et je cherche une personne pour un échange linguistique :\nune heure en français, une heure en espagnol, une fois par semaine.\nÊtes-vous intéressé(e) ?\nElena",
    },
    instruction: "Répondez à Elena : acceptez l'échange, proposez un lieu et un horaire, et décrivez votre niveau dans les deux langues.",
    points: ["Votre accord", "Un lieu et un horaire", "Votre niveau de langue"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-4",
    title: "Refuser une activité",
    situation: "Un ami vous propose de rejoindre son club de football.",
    sourceMessage: {
      from: "David",
      subject: "Viens jouer avec nous !",
      body: "Salut,\nNotre club de football cherche des joueurs. On s'entraîne le mardi soir à 20 h.\nC'est super pour rencontrer du monde ! Tu viens ?\nDavid",
    },
    instruction: "Répondez à David : refusez poliment, expliquez pourquoi le football ne vous convient pas et proposez une autre activité ensemble.",
    points: ["Un refus poli", "La raison du refus", "Une autre activité proposée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-5",
    title: "Se donner rendez-vous",
    situation: "Une personne rencontrée au café des langues veut vous revoir.",
    sourceMessage: {
      from: "Aïcha",
      subject: "C'était sympa jeudi !",
      body: "Bonjour,\nJ'ai beaucoup aimé notre discussion au café des langues jeudi dernier.\nÇa te dit de se revoir pour continuer à parler français ?\nAïcha",
    },
    instruction: "Répondez à Aïcha : dites que vous êtes content(e) de son message, proposez un jour et un lieu de rendez-vous et posez-lui une question.",
    points: ["Votre plaisir de la revoir", "Un jour et un lieu", "Une question pour Aïcha"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-6",
    title: "La fête des voisins",
    situation: "L'association de votre immeuble organise la fête des voisins.",
    sourceMessage: {
      from: "Association des habitants",
      subject: "Fête des voisins le 23 mai",
      body: "Chers habitants,\nLa fête des voisins a lieu le vendredi 23 mai à 18 h dans la cour de l'immeuble.\nChacun apporte un plat ou une boisson.\nMerci de nous dire si vous venez.\nL'association des habitants",
    },
    instruction: "Répondez à l'association : confirmez votre présence, dites ce que vous allez apporter et demandez combien de personnes sont attendues.",
    points: ["Votre présence", "Ce que vous apportez", "Une question sur le nombre de personnes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-7",
    title: "Déjeuner avec un nouveau collègue",
    situation: "Un nouveau collègue aimerait faire connaissance.",
    sourceMessage: {
      from: "Samuel",
      subject: "On déjeune ensemble ?",
      body: "Bonjour,\nJe suis nouveau dans l'équipe et je ne connais encore personne.\nEst-ce que tu veux déjeuner avec moi cette semaine ?\nSamuel",
    },
    instruction: "Répondez à Samuel : acceptez avec plaisir, proposez un jour et un restaurant et posez-lui une question sur son travail.",
    points: ["Votre acceptation", "Un jour et un restaurant", "Une question sur son travail"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-8",
    title: "S'excuser pour un rendez-vous manqué",
    situation: "Vous avez oublié un rendez-vous avec votre partenaire de tandem.",
    sourceMessage: {
      from: "Elena",
      subject: "Je t'ai attendu(e) hier",
      body: "Bonjour,\nJe t'ai attendu(e) hier au café pendant une demi-heure, mais tu n'es pas venu(e).\nEst-ce que tout va bien ?\nElena",
    },
    instruction: "Répondez à Elena : excusez-vous, expliquez pourquoi vous n'êtes pas venu(e) et proposez un nouveau rendez-vous.",
    points: ["Vos excuses", "L'explication", "Un nouveau rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-9",
    title: "Groupe de marche",
    situation: "Un groupe de marche du quartier cherche de nouveaux membres.",
    sourceMessage: {
      from: "Simone",
      subject: "Groupe de marche du quartier",
      body: "Bonjour,\nNotre groupe de marche se retrouve chaque dimanche matin pour marcher deux heures.\nNous cherchons de nouveaux membres. Voulez-vous nous rejoindre ?\nSimone",
    },
    instruction: "Répondez à Simone : dites pourquoi cette activité vous intéresse, posez deux questions (lieu de départ, niveau) et demandez si on peut venir accompagné.",
    points: ["Pourquoi vous êtes intéressé(e)", "Deux questions pratiques", "Une question pour venir accompagné(e)"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-10",
    title: "Encourager un ami timide",
    situation: "Un ami n'ose pas aller vers les autres et vous demande conseil.",
    sourceMessage: {
      from: "Omar",
      subject: "Comment rencontrer des gens ?",
      body: "Salut,\nJe suis arrivé ici il y a deux mois et je ne connais presque personne.\nJe suis un peu timide. Comment est-ce que tu as rencontré tes amis ?\nOmar",
    },
    instruction: "Répondez à Omar : donnez-lui deux idées pour rencontrer des gens, proposez de l'accompagner une fois et encouragez-le.",
    points: ["Deux idées de rencontres", "Une proposition de l'accompagner", "Une phrase d'encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-11",
    title: "Répondre — rencontres (11)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-12",
    title: "Répondre — rencontres (12)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-13",
    title: "Répondre — rencontres (13)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-14",
    title: "Répondre — rencontres (14)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-15",
    title: "Répondre — rencontres (15)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-16",
    title: "Répondre — rencontres (16)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-17",
    title: "Répondre — rencontres (17)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-18",
    title: "Répondre — rencontres (18)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-19",
    title: "Répondre — rencontres (19)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-2-pee-20",
    title: "Répondre — rencontres (20)",
    situation: "Vous avez reçu un e-mail concernant rencontres.",
sourceMessage: {
  from: "Service Rencontres",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant rencontres.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.3 — Organiser un événement
   ════════════════════════════════════════════════════════════════════════════ */

const E10_3_CE_EMAIL_TEXT = `De : Service E10 3 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_POOL = buildExpressPool("e10-3-ce-email", [
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
    text: ["Service E10 3 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 1.",
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

const E10_3_CE_EMAIL_2_TEXT = `De : Service E10 3 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_2_POOL = buildExpressPool("e10-3-ce-email-2", [
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
    text: ["Service E10 3 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 2.",
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

const E10_3_CE_EMAIL_3_TEXT = `De : Service E10 3 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_3_POOL = buildExpressPool("e10-3-ce-email-3", [
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
    text: ["Service E10 3 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 3.",
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

const E10_3_CE_EMAIL_4_TEXT = `De : Service E10 3 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_4_POOL = buildExpressPool("e10-3-ce-email-4", [
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
    text: ["Service E10 3 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 4.",
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

const E10_3_CE_EMAIL_5_TEXT = `De : Service E10 3 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_5_POOL = buildExpressPool("e10-3-ce-email-5", [
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
    text: ["Service E10 3 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 5.",
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

const E10_3_CE_EMAIL_6_TEXT = `De : Service E10 3 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_6_POOL = buildExpressPool("e10-3-ce-email-6", [
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
    text: ["Service E10 3 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 6.",
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

const E10_3_CE_EMAIL_7_TEXT = `De : Service E10 3 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_7_POOL = buildExpressPool("e10-3-ce-email-7", [
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
    text: ["Service E10 3 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 7.",
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

const E10_3_CE_EMAIL_8_TEXT = `De : Service E10 3 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_8_POOL = buildExpressPool("e10-3-ce-email-8", [
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
    text: ["Service E10 3 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 8.",
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

const E10_3_CE_EMAIL_9_TEXT = `De : Service E10 3 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_9_POOL = buildExpressPool("e10-3-ce-email-9", [
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
    text: ["Service E10 3 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 9.",
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

const E10_3_CE_EMAIL_10_TEXT = `De : Service E10 3 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_10_POOL = buildExpressPool("e10-3-ce-email-10", [
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
    text: ["Service E10 3 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 10.",
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

const E10_3_CE_EMAIL_11_TEXT = `De : Service E10 3 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_11_POOL = buildExpressPool("e10-3-ce-email-11", [
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
    text: ["Service E10 3 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 11.",
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

const E10_3_CE_EMAIL_12_TEXT = `De : Service E10 3 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_12_POOL = buildExpressPool("e10-3-ce-email-12", [
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
    text: ["Service E10 3 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 12.",
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

const E10_3_CE_EMAIL_13_TEXT = `De : Service E10 3 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_13_POOL = buildExpressPool("e10-3-ce-email-13", [
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
    text: ["Service E10 3 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 13.",
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

const E10_3_CE_EMAIL_14_TEXT = `De : Service E10 3 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_14_POOL = buildExpressPool("e10-3-ce-email-14", [
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
    text: ["Service E10 3 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 14.",
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

const E10_3_CE_EMAIL_15_TEXT = `De : Service E10 3 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_15_POOL = buildExpressPool("e10-3-ce-email-15", [
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
    text: ["Service E10 3 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 15.",
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

const E10_3_CE_EMAIL_16_TEXT = `De : Service E10 3 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_16_POOL = buildExpressPool("e10-3-ce-email-16", [
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
    text: ["Service E10 3 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 16.",
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

const E10_3_CE_EMAIL_17_TEXT = `De : Service E10 3 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_17_POOL = buildExpressPool("e10-3-ce-email-17", [
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
    text: ["Service E10 3 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 17.",
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

const E10_3_CE_EMAIL_18_TEXT = `De : Service E10 3 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_18_POOL = buildExpressPool("e10-3-ce-email-18", [
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
    text: ["Service E10 3 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 18.",
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

const E10_3_CE_EMAIL_19_TEXT = `De : Service E10 3 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_19_POOL = buildExpressPool("e10-3-ce-email-19", [
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
    text: ["Service E10 3 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 19.",
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

const E10_3_CE_EMAIL_20_TEXT = `De : Service E10 3 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E10_3_CE_EMAIL_20_POOL = buildExpressPool("e10-3-ce-email-20", [
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
    text: ["Service E10 3 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 3 20.",
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

export const E10_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-3-ce-email",
  readingText: E10_3_CE_EMAIL_TEXT,
  questionPool: E10_3_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-3-ce-email-2",
  readingText: E10_3_CE_EMAIL_2_TEXT,
  questionPool: E10_3_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-3",
  readingText: E10_3_CE_EMAIL_3_TEXT,
  questionPool: E10_3_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-4",
  readingText: E10_3_CE_EMAIL_4_TEXT,
  questionPool: E10_3_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-5",
  readingText: E10_3_CE_EMAIL_5_TEXT,
  questionPool: E10_3_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-6",
  readingText: E10_3_CE_EMAIL_6_TEXT,
  questionPool: E10_3_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-7",
  readingText: E10_3_CE_EMAIL_7_TEXT,
  questionPool: E10_3_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-8",
  readingText: E10_3_CE_EMAIL_8_TEXT,
  questionPool: E10_3_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-9",
  readingText: E10_3_CE_EMAIL_9_TEXT,
  questionPool: E10_3_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-10",
  readingText: E10_3_CE_EMAIL_10_TEXT,
  questionPool: E10_3_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-11",
  readingText: E10_3_CE_EMAIL_11_TEXT,
  questionPool: E10_3_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-12",
  readingText: E10_3_CE_EMAIL_12_TEXT,
  questionPool: E10_3_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-13",
  readingText: E10_3_CE_EMAIL_13_TEXT,
  questionPool: E10_3_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-14",
  readingText: E10_3_CE_EMAIL_14_TEXT,
  questionPool: E10_3_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-15",
  readingText: E10_3_CE_EMAIL_15_TEXT,
  questionPool: E10_3_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-16",
  readingText: E10_3_CE_EMAIL_16_TEXT,
  questionPool: E10_3_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-17",
  readingText: E10_3_CE_EMAIL_17_TEXT,
  questionPool: E10_3_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-18",
  readingText: E10_3_CE_EMAIL_18_TEXT,
  questionPool: E10_3_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-19",
  readingText: E10_3_CE_EMAIL_19_TEXT,
  questionPool: E10_3_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e10-3-ce-email-20",
  readingText: E10_3_CE_EMAIL_20_TEXT,
  questionPool: E10_3_CE_EMAIL_20_POOL
}),
];

export const E10_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-3-pee-1",
    title: "Participer à la fête de départ",
    situation: "Sophie organise la fête de départ d'un collègue.",
    sourceMessage: {
      from: "Sophie",
      subject: "Fête de départ de Luc",
      body: "Bonjour,\nPour la fête de Luc le 12 avril, merci de me dire si tu viens.\nJe cherche aussi des volontaires pour la décoration et des personnes pour apporter à manger.\nSophie",
    },
    instruction: "Répondez à Sophie : confirmez votre venue, proposez d'apporter quelque chose et dites si vous pouvez aider pour la décoration.",
    points: ["Votre venue", "Ce que vous apportez", "Votre réponse pour la décoration"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-2",
    title: "Réserver une salle",
    situation: "L'administration communale répond à votre demande de salle.",
    sourceMessage: {
      from: "Administration communale",
      subject: "Votre demande de salle",
      body: "Bonjour,\nLa salle communale est libre le samedi 12 avril et le samedi 19 avril.\nLa location coûte 150 francs pour la soirée.\nQuelle date choisissez-vous ?\nL'administration communale",
    },
    instruction: "Répondez à l'administration : choisissez une date, demandez si les tables et les chaises sont comprises et posez une question sur les horaires.",
    points: ["La date choisie", "Une question sur les tables et les chaises", "Une question sur les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-3",
    title: "Sortie de groupe en montagne",
    situation: "Un ami organise une sortie de groupe en montagne.",
    sourceMessage: {
      from: "Karim",
      subject: "Sortie en montagne dimanche",
      body: "Salut,\nJ'organise une sortie en montagne dimanche prochain avec quelques amis.\nDépart à 8 h, retour vers 17 h. Tu veux venir ?\nKarim",
    },
    instruction: "Répondez à Karim : acceptez, demandez ce qu'il faut apporter et proposez de prendre votre voiture pour le trajet.",
    points: ["Votre acceptation", "Une question sur le matériel", "Votre proposition de voiture"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-4",
    title: "Qui apporte quoi ?",
    situation: "L'organisatrice d'un repas partagé prépare la liste des plats.",
    sourceMessage: {
      from: "Julia",
      subject: "Repas partagé de samedi",
      body: "Bonjour à tous,\nPour le repas de samedi, je prépare la liste : il manque encore des salades, des desserts et des boissons.\nQui apporte quoi ? Répondez-moi vite !\nJulia",
    },
    instruction: "Répondez à Julia : dites ce que vous allez apporter, proposez d'arriver plus tôt pour aider et demandez combien d'invités sont attendus.",
    points: ["Ce que vous apportez", "Votre proposition d'aide", "Une question sur le nombre d'invités"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-5",
    title: "Payer sa participation",
    situation: "Le trésorier de l'équipe demande la participation pour la fête.",
    sourceMessage: {
      from: "Nicolas",
      subject: "Participation de 20 francs",
      body: "Bonjour,\nPour la fête du 12 avril, chaque personne donne 20 francs.\nMerci de me donner l'argent avant la fin du mois.\nNicolas",
    },
    instruction: "Répondez à Nicolas : confirmez que vous allez payer, demandez comment payer (en espèces ou par virement) et posez une question sur le programme.",
    points: ["Votre confirmation de paiement", "Une question sur le mode de paiement", "Une question sur le programme"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-6",
    title: "Problème de salle",
    situation: "La salle réservée pour votre événement a un problème.",
    sourceMessage: {
      from: "Salle des fêtes",
      subject: "Problème de chauffage",
      body: "Bonjour,\nLe chauffage de la salle est en panne. Nous ne pouvons pas vous accueillir samedi.\nNous pouvons vous proposer la petite salle ou une autre date.\nAvec nos excuses,\nLa salle des fêtes",
    },
    instruction: "Répondez à la salle des fêtes : dites quelle solution vous choisissez, expliquez pourquoi et demandez une réduction du prix.",
    points: ["La solution choisie", "Pourquoi ce choix", "Une demande de réduction"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-7",
    title: "Idées pour la fête de quartier",
    situation: "Une voisine prépare le programme de la fête de quartier et demande des idées.",
    sourceMessage: {
      from: "Leila",
      subject: "Programme de la fête de quartier",
      body: "Bonjour,\nJe prépare le programme de la fête de quartier de juin.\nAvez-vous des idées d'activités pour les enfants et pour les adultes ?\nMerci d'avance,\nLeila",
    },
    instruction: "Répondez à Leila : proposez deux activités, suggérez un horaire pour chaque activité et dites ce que vous pouvez apporter ou organiser.",
    points: ["Deux activités proposées", "Un horaire pour chaque activité", "Ce que vous pouvez faire"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-8",
    title: "Musique pour la soirée",
    situation: "Un musicien répond à votre demande pour animer la soirée.",
    sourceMessage: {
      from: "Pascal",
      subject: "Musique pour votre soirée",
      body: "Bonjour,\nJe suis libre le samedi 12 avril. Je joue de 19 h à 23 h pour 300 francs.\nJ'apporte tout mon matériel.\nEst-ce que cela vous convient ?\nPascal",
    },
    instruction: "Répondez à Pascal : acceptez sa proposition, précisez l'adresse et l'heure d'arrivée et posez une question sur le style de musique.",
    points: ["Votre accord", "L'adresse et l'heure d'arrivée", "Une question sur la musique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-9",
    title: "Sortie d'équipe",
    situation: "Un collègue propose deux idées pour la sortie d'équipe.",
    sourceMessage: {
      from: "Marc",
      subject: "Sortie d'équipe : bowling ou cinéma ?",
      body: "Bonjour à tous,\nPour notre sortie d'équipe, j'hésite entre un bowling et un cinéma, un jeudi soir.\nQu'est-ce que vous préférez ?\nMarc",
    },
    instruction: "Répondez à Marc : dites ce que vous préférez et pourquoi, proposez une date précise et proposez de faire la réservation.",
    points: ["Votre choix et la raison", "Une date précise", "Votre proposition de réserver"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-10",
    title: "Après la fête",
    situation: "Sophie fait le bilan de la fête de départ.",
    sourceMessage: {
      from: "Sophie",
      subject: "Merci à tous !",
      body: "Bonjour à tous,\nMerci pour cette belle fête, Luc était très content !\nIl reste 40 francs dans la caisse. Qu'est-ce qu'on en fait ?\nSophie",
    },
    instruction: "Répondez à Sophie : félicitez-la pour l'organisation, dites ce que vous avez préféré pendant la fête et proposez une idée pour les 40 francs.",
    points: ["Vos félicitations", "Ce que vous avez préféré", "Une idée pour l'argent restant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-11",
    title: "Répondre — événements (11)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-12",
    title: "Répondre — événements (12)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-13",
    title: "Répondre — événements (13)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-14",
    title: "Répondre — événements (14)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-15",
    title: "Répondre — événements (15)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-16",
    title: "Répondre — événements (16)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-17",
    title: "Répondre — événements (17)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-18",
    title: "Répondre — événements (18)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-19",
    title: "Répondre — événements (19)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-3-pee-20",
    title: "Répondre — événements (20)",
    situation: "Vous avez reçu un e-mail concernant événements.",
sourceMessage: {
  from: "Service Événements",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant événements.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.4 — Participer à la vie scolaire
   ════════════════════════════════════════════════════════════════════════════ */

const E10_4_CE_EMAIL_TEXT = `De : Service E10 4 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_POOL = buildExpressPool("e10-4-ce-email", [
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
    text: ["Service E10 4 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 1.",
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

const E10_4_CE_EMAIL_2_TEXT = `De : Service E10 4 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_2_POOL = buildExpressPool("e10-4-ce-email-2", [
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
    text: ["Service E10 4 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 2.",
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

const E10_4_CE_EMAIL_3_TEXT = `De : Service E10 4 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_3_POOL = buildExpressPool("e10-4-ce-email-3", [
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
    text: ["Service E10 4 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 3.",
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

const E10_4_CE_EMAIL_4_TEXT = `De : Service E10 4 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_4_POOL = buildExpressPool("e10-4-ce-email-4", [
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
    text: ["Service E10 4 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 4.",
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

const E10_4_CE_EMAIL_5_TEXT = `De : Service E10 4 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_5_POOL = buildExpressPool("e10-4-ce-email-5", [
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
    text: ["Service E10 4 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 5.",
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

const E10_4_CE_EMAIL_6_TEXT = `De : Service E10 4 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_6_POOL = buildExpressPool("e10-4-ce-email-6", [
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
    text: ["Service E10 4 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 6.",
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

const E10_4_CE_EMAIL_7_TEXT = `De : Service E10 4 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_7_POOL = buildExpressPool("e10-4-ce-email-7", [
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
    text: ["Service E10 4 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 7.",
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

const E10_4_CE_EMAIL_8_TEXT = `De : Service E10 4 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_8_POOL = buildExpressPool("e10-4-ce-email-8", [
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
    text: ["Service E10 4 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 8.",
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

const E10_4_CE_EMAIL_9_TEXT = `De : Service E10 4 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_9_POOL = buildExpressPool("e10-4-ce-email-9", [
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
    text: ["Service E10 4 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 9.",
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

const E10_4_CE_EMAIL_10_TEXT = `De : Service E10 4 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_10_POOL = buildExpressPool("e10-4-ce-email-10", [
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
    text: ["Service E10 4 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 10.",
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

const E10_4_CE_EMAIL_11_TEXT = `De : Service E10 4 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_11_POOL = buildExpressPool("e10-4-ce-email-11", [
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
    text: ["Service E10 4 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 11.",
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

const E10_4_CE_EMAIL_12_TEXT = `De : Service E10 4 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_12_POOL = buildExpressPool("e10-4-ce-email-12", [
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
    text: ["Service E10 4 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 12.",
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

const E10_4_CE_EMAIL_13_TEXT = `De : Service E10 4 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_13_POOL = buildExpressPool("e10-4-ce-email-13", [
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
    text: ["Service E10 4 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 13.",
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

const E10_4_CE_EMAIL_14_TEXT = `De : Service E10 4 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_14_POOL = buildExpressPool("e10-4-ce-email-14", [
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
    text: ["Service E10 4 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 14.",
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

const E10_4_CE_EMAIL_15_TEXT = `De : Service E10 4 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_15_POOL = buildExpressPool("e10-4-ce-email-15", [
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
    text: ["Service E10 4 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 15.",
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

const E10_4_CE_EMAIL_16_TEXT = `De : Service E10 4 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_16_POOL = buildExpressPool("e10-4-ce-email-16", [
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
    text: ["Service E10 4 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 16.",
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

const E10_4_CE_EMAIL_17_TEXT = `De : Service E10 4 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_17_POOL = buildExpressPool("e10-4-ce-email-17", [
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
    text: ["Service E10 4 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 17.",
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

const E10_4_CE_EMAIL_18_TEXT = `De : Service E10 4 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_18_POOL = buildExpressPool("e10-4-ce-email-18", [
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
    text: ["Service E10 4 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 18.",
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

const E10_4_CE_EMAIL_19_TEXT = `De : Service E10 4 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_19_POOL = buildExpressPool("e10-4-ce-email-19", [
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
    text: ["Service E10 4 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 19.",
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

const E10_4_CE_EMAIL_20_TEXT = `De : Service E10 4 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E10_4_CE_EMAIL_20_POOL = buildExpressPool("e10-4-ce-email-20", [
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
    text: ["Service E10 4 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 4 20.",
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

export const E10_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-4-ce-email",
  readingText: E10_4_CE_EMAIL_TEXT,
  questionPool: E10_4_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-4-ce-email-2",
  readingText: E10_4_CE_EMAIL_2_TEXT,
  questionPool: E10_4_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-3",
  readingText: E10_4_CE_EMAIL_3_TEXT,
  questionPool: E10_4_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-4",
  readingText: E10_4_CE_EMAIL_4_TEXT,
  questionPool: E10_4_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-5",
  readingText: E10_4_CE_EMAIL_5_TEXT,
  questionPool: E10_4_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-6",
  readingText: E10_4_CE_EMAIL_6_TEXT,
  questionPool: E10_4_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-7",
  readingText: E10_4_CE_EMAIL_7_TEXT,
  questionPool: E10_4_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-8",
  readingText: E10_4_CE_EMAIL_8_TEXT,
  questionPool: E10_4_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-9",
  readingText: E10_4_CE_EMAIL_9_TEXT,
  questionPool: E10_4_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-10",
  readingText: E10_4_CE_EMAIL_10_TEXT,
  questionPool: E10_4_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-11",
  readingText: E10_4_CE_EMAIL_11_TEXT,
  questionPool: E10_4_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-12",
  readingText: E10_4_CE_EMAIL_12_TEXT,
  questionPool: E10_4_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-13",
  readingText: E10_4_CE_EMAIL_13_TEXT,
  questionPool: E10_4_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-14",
  readingText: E10_4_CE_EMAIL_14_TEXT,
  questionPool: E10_4_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-15",
  readingText: E10_4_CE_EMAIL_15_TEXT,
  questionPool: E10_4_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-16",
  readingText: E10_4_CE_EMAIL_16_TEXT,
  questionPool: E10_4_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-17",
  readingText: E10_4_CE_EMAIL_17_TEXT,
  questionPool: E10_4_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-18",
  readingText: E10_4_CE_EMAIL_18_TEXT,
  questionPool: E10_4_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-19",
  readingText: E10_4_CE_EMAIL_19_TEXT,
  questionPool: E10_4_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e10-4-ce-email-20",
  readingText: E10_4_CE_EMAIL_20_TEXT,
  questionPool: E10_4_CE_EMAIL_20_POOL
}),
];

export const E10_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-4-pee-1",
    title: "Autoriser la sortie scolaire",
    situation: "L'enseignante demande l'autorisation pour la sortie au musée.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Sortie scolaire du 16 mai",
      body: "Chers parents,\nLa classe fera une sortie au musée de la nature le jeudi 16 mai.\nMerci de signer l'autorisation. Nous cherchons aussi des parents accompagnateurs.\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : donnez votre autorisation, proposez d'accompagner la classe et posez une question sur la journée.",
    points: ["Votre autorisation", "Votre proposition d'accompagner", "Une question sur la journée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-2",
    title: "Réunion de parents",
    situation: "L'école vous invite à la réunion de parents.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Réunion de parents le mardi 3 juin",
      body: "Chers parents,\nLa réunion de parents a lieu le mardi 3 juin à 19 h dans la salle de classe.\nMerci de confirmer votre présence.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : confirmez votre présence, prévenez que vous arriverez un peu en retard et demandez combien de temps dure la réunion.",
    points: ["Votre confirmation", "Votre retard annoncé", "Une question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-3",
    title: "Excuser une absence",
    situation: "L'enseignante vous écrit car votre fille était absente.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Absence de votre fille",
      body: "Bonjour,\nVotre fille était absente hier et aujourd'hui.\nPouvez-vous nous expliquer la raison de cette absence ?\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : excusez-vous pour l'absence, expliquez que votre fille est malade et dites quand elle reviendra à l'école.",
    points: ["Vos excuses", "La raison de l'absence", "La date du retour"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-4",
    title: "Gâteau pour la fête de l'école",
    situation: "L'association des parents cherche des gâteaux pour la fête de l'école.",
    sourceMessage: {
      from: "Association des parents",
      subject: "Fête de l'école : appel aux gâteaux",
      body: "Chers parents,\nPour la fête de l'école du samedi 21 juin, nous cherchons des gâteaux pour le stand pâtisserie.\nQui peut en apporter un ?\nL'association des parents",
    },
    instruction: "Répondez à l'association : acceptez d'apporter un gâteau, dites lequel et demandez à quelle heure et où il faut l'apporter.",
    points: ["Votre accord", "Le gâteau choisi", "Une question sur l'heure et le lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-5",
    title: "Affaires de sport oubliées",
    situation: "L'enseignant de sport vous écrit au sujet de votre fils.",
    sourceMessage: {
      from: "M. Perret",
      subject: "Affaires de sport",
      body: "Bonjour,\nVotre fils a oublié ses affaires de sport trois fois ce mois-ci.\nIl ne peut pas participer au cours sans ses affaires.\nMerci de votre aide,\nM. Perret",
    },
    instruction: "Répondez à M. Perret : excusez-vous, expliquez la situation et dites ce que vous allez faire pour éviter ce problème.",
    points: ["Vos excuses", "Une explication", "Votre solution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-6",
    title: "Sortie reportée",
    situation: "L'école annonce que la sortie est reportée à cause de la pluie.",
    sourceMessage: {
      from: "École du Lac",
      subject: "Sortie reportée au 23 mai",
      body: "Chers parents,\nÀ cause de la forte pluie annoncée, la sortie de jeudi est reportée au jeudi 23 mai.\nLes horaires ne changent pas.\nLe secrétariat de l'école",
    },
    instruction: "Répondez à l'école : remerciez pour l'information, dites si la nouvelle date convient pour votre enfant et posez une question sur le pique-nique.",
    points: ["Un remerciement", "Votre réponse pour la nouvelle date", "Une question sur le pique-nique"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-7",
    title: "Rendez-vous avec l'enseignante",
    situation: "L'enseignante souhaite vous rencontrer.",
    sourceMessage: {
      from: "Mme Girard",
      subject: "Rendez-vous",
      body: "Bonjour,\nJe souhaite vous rencontrer pour parler des progrès de votre enfant.\nQuand êtes-vous disponible cette semaine ou la semaine prochaine ?\nMme Girard",
    },
    instruction: "Répondez à Mme Girard : remerciez-la, proposez deux dates possibles et demandez de quoi elle veut parler exactement.",
    points: ["Un remerciement", "Deux dates possibles", "Une question sur le sujet du rendez-vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-8",
    title: "Inscription à la cantine",
    situation: "La cantine scolaire prépare les inscriptions pour l'année prochaine.",
    sourceMessage: {
      from: "Cantine scolaire",
      subject: "Inscription pour l'année prochaine",
      body: "Chers parents,\nLes inscriptions à la cantine sont ouvertes.\nMerci de nous dire quels jours votre enfant mangera à la cantine et s'il a des allergies.\nLa cantine scolaire",
    },
    instruction: "Répondez à la cantine : indiquez les jours choisis, signalez une allergie ou une habitude alimentaire et posez une question sur le prix des repas.",
    points: ["Les jours choisis", "Une allergie ou une habitude", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-9",
    title: "Covoiturage pour l'école",
    situation: "Une maman d'élève propose un covoiturage.",
    sourceMessage: {
      from: "Mme Diallo",
      subject: "Covoiturage pour l'école",
      body: "Bonjour,\nNos enfants sont dans la même classe et nous habitons le même quartier.\nVoulez-vous organiser un covoiturage pour l'école ?\nMme Diallo",
    },
    instruction: "Répondez à Mme Diallo : acceptez sa proposition, expliquez vos horaires et proposez une organisation (par exemple une semaine sur deux).",
    points: ["Votre acceptation", "Vos horaires", "Votre proposition d'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-10",
    title: "Tenir un stand à la kermesse",
    situation: "Le comité de la fête de l'école cherche des bénévoles.",
    sourceMessage: {
      from: "Comité de la fête",
      subject: "Bénévoles pour la kermesse",
      body: "Chers parents,\nPour la kermesse du 21 juin, nous cherchons des bénévoles pour tenir les stands :\njeux, boissons, pâtisserie, de 10 h à 17 h.\nMerci de votre aide !\nLe comité de la fête",
    },
    instruction: "Répondez au comité : proposez votre aide, dites quel stand vous préférez et à quelles heures vous êtes disponible.",
    points: ["Votre proposition d'aide", "Le stand choisi", "Vos heures disponibles"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-11",
    title: "Répondre — vie scolaire (11)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-12",
    title: "Répondre — vie scolaire (12)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-13",
    title: "Répondre — vie scolaire (13)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-14",
    title: "Répondre — vie scolaire (14)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-15",
    title: "Répondre — vie scolaire (15)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-16",
    title: "Répondre — vie scolaire (16)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-17",
    title: "Répondre — vie scolaire (17)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-18",
    title: "Répondre — vie scolaire (18)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-19",
    title: "Répondre — vie scolaire (19)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-4-pee-20",
    title: "Répondre — vie scolaire (20)",
    situation: "Vous avez reçu un e-mail concernant vie scolaire.",
sourceMessage: {
  from: "Service Vie scolaire",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie scolaire.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E10.5 — Participer à la vie associative
   ════════════════════════════════════════════════════════════════════════════ */

const E10_5_CE_EMAIL_TEXT = `De : Service E10 5 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_POOL = buildExpressPool("e10-5-ce-email", [
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
    text: ["Service E10 5 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 1.",
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

const E10_5_CE_EMAIL_2_TEXT = `De : Service E10 5 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_2_POOL = buildExpressPool("e10-5-ce-email-2", [
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
    text: ["Service E10 5 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 2.",
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

const E10_5_CE_EMAIL_3_TEXT = `De : Service E10 5 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_3_POOL = buildExpressPool("e10-5-ce-email-3", [
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
    text: ["Service E10 5 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 3.",
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

const E10_5_CE_EMAIL_4_TEXT = `De : Service E10 5 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_4_POOL = buildExpressPool("e10-5-ce-email-4", [
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
    text: ["Service E10 5 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 4.",
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

const E10_5_CE_EMAIL_5_TEXT = `De : Service E10 5 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_5_POOL = buildExpressPool("e10-5-ce-email-5", [
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
    text: ["Service E10 5 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 5.",
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

const E10_5_CE_EMAIL_6_TEXT = `De : Service E10 5 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_6_POOL = buildExpressPool("e10-5-ce-email-6", [
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
    text: ["Service E10 5 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 6.",
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

const E10_5_CE_EMAIL_7_TEXT = `De : Service E10 5 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_7_POOL = buildExpressPool("e10-5-ce-email-7", [
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
    text: ["Service E10 5 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 7.",
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

const E10_5_CE_EMAIL_8_TEXT = `De : Service E10 5 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_8_POOL = buildExpressPool("e10-5-ce-email-8", [
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
    text: ["Service E10 5 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 8.",
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

const E10_5_CE_EMAIL_9_TEXT = `De : Service E10 5 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_9_POOL = buildExpressPool("e10-5-ce-email-9", [
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
    text: ["Service E10 5 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 9.",
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

const E10_5_CE_EMAIL_10_TEXT = `De : Service E10 5 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_10_POOL = buildExpressPool("e10-5-ce-email-10", [
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
    text: ["Service E10 5 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 10.",
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

const E10_5_CE_EMAIL_11_TEXT = `De : Service E10 5 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_11_POOL = buildExpressPool("e10-5-ce-email-11", [
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
    text: ["Service E10 5 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 11.",
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

const E10_5_CE_EMAIL_12_TEXT = `De : Service E10 5 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_12_POOL = buildExpressPool("e10-5-ce-email-12", [
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
    text: ["Service E10 5 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 12.",
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

const E10_5_CE_EMAIL_13_TEXT = `De : Service E10 5 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_13_POOL = buildExpressPool("e10-5-ce-email-13", [
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
    text: ["Service E10 5 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 13.",
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

const E10_5_CE_EMAIL_14_TEXT = `De : Service E10 5 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_14_POOL = buildExpressPool("e10-5-ce-email-14", [
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
    text: ["Service E10 5 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 14.",
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

const E10_5_CE_EMAIL_15_TEXT = `De : Service E10 5 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_15_POOL = buildExpressPool("e10-5-ce-email-15", [
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
    text: ["Service E10 5 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 15.",
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

const E10_5_CE_EMAIL_16_TEXT = `De : Service E10 5 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_16_POOL = buildExpressPool("e10-5-ce-email-16", [
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
    text: ["Service E10 5 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 16.",
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

const E10_5_CE_EMAIL_17_TEXT = `De : Service E10 5 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_17_POOL = buildExpressPool("e10-5-ce-email-17", [
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
    text: ["Service E10 5 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 17.",
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

const E10_5_CE_EMAIL_18_TEXT = `De : Service E10 5 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_18_POOL = buildExpressPool("e10-5-ce-email-18", [
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
    text: ["Service E10 5 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 18.",
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

const E10_5_CE_EMAIL_19_TEXT = `De : Service E10 5 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_19_POOL = buildExpressPool("e10-5-ce-email-19", [
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
    text: ["Service E10 5 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 19.",
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

const E10_5_CE_EMAIL_20_TEXT = `De : Service E10 5 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E10_5_CE_EMAIL_20_POOL = buildExpressPool("e10-5-ce-email-20", [
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
    text: ["Service E10 5 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E10 5 20.",
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

export const E10_5_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e10-5-ce-email",
  readingText: E10_5_CE_EMAIL_TEXT,
  questionPool: E10_5_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e10-5-ce-email-2",
  readingText: E10_5_CE_EMAIL_2_TEXT,
  questionPool: E10_5_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-3",
  readingText: E10_5_CE_EMAIL_3_TEXT,
  questionPool: E10_5_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-4",
  readingText: E10_5_CE_EMAIL_4_TEXT,
  questionPool: E10_5_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-5",
  readingText: E10_5_CE_EMAIL_5_TEXT,
  questionPool: E10_5_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-6",
  readingText: E10_5_CE_EMAIL_6_TEXT,
  questionPool: E10_5_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-7",
  readingText: E10_5_CE_EMAIL_7_TEXT,
  questionPool: E10_5_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-8",
  readingText: E10_5_CE_EMAIL_8_TEXT,
  questionPool: E10_5_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-9",
  readingText: E10_5_CE_EMAIL_9_TEXT,
  questionPool: E10_5_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-10",
  readingText: E10_5_CE_EMAIL_10_TEXT,
  questionPool: E10_5_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-11",
  readingText: E10_5_CE_EMAIL_11_TEXT,
  questionPool: E10_5_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-12",
  readingText: E10_5_CE_EMAIL_12_TEXT,
  questionPool: E10_5_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-13",
  readingText: E10_5_CE_EMAIL_13_TEXT,
  questionPool: E10_5_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-14",
  readingText: E10_5_CE_EMAIL_14_TEXT,
  questionPool: E10_5_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-15",
  readingText: E10_5_CE_EMAIL_15_TEXT,
  questionPool: E10_5_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-16",
  readingText: E10_5_CE_EMAIL_16_TEXT,
  questionPool: E10_5_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-17",
  readingText: E10_5_CE_EMAIL_17_TEXT,
  questionPool: E10_5_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-18",
  readingText: E10_5_CE_EMAIL_18_TEXT,
  questionPool: E10_5_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-19",
  readingText: E10_5_CE_EMAIL_19_TEXT,
  questionPool: E10_5_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e10-5-ce-email-20",
  readingText: E10_5_CE_EMAIL_20_TEXT,
  questionPool: E10_5_CE_EMAIL_20_POOL
}),
];

export const E10_5_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e10-5-pee-1",
    title: "Remercier l'association",
    situation: "L'association de quartier vous souhaite la bienvenue.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Bienvenue !",
      body: "Bonjour,\nBienvenue dans notre association de quartier !\nL'assemblée générale a lieu le mardi 4 février à 20 h.\nNous espérons vous y voir.\nLe comité",
    },
    instruction: "Répondez au comité : remerciez pour l'accueil, confirmez votre présence à l'assemblée et posez une question sur une activité.",
    points: ["Un remerciement", "Votre présence à l'assemblée", "Une question sur une activité"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-2",
    title: "Devenir bénévole",
    situation: "L'association cherche des bénévoles pour la fête du quartier.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Bénévoles pour la fête du quartier",
      body: "Bonjour,\nPour la fête du quartier du samedi 14 juin, nous cherchons des bénévoles\npour les stands, de 10 h à 22 h.\nPouvez-vous nous aider ?\nLe comité",
    },
    instruction: "Répondez au comité : proposez votre aide, indiquez vos heures disponibles et demandez quel stand vous pouvez tenir.",
    points: ["Votre proposition d'aide", "Vos heures disponibles", "Une question sur le stand"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-3",
    title: "Rappel de cotisation",
    situation: "La trésorière vous rappelle que la cotisation n'est pas payée.",
    sourceMessage: {
      from: "Mme Weber",
      subject: "Rappel : cotisation annuelle",
      body: "Bonjour,\nNous n'avons pas encore reçu votre cotisation de 30 francs pour cette année.\nMerci de la payer avant la fin du mois.\nMme Weber, trésorière",
    },
    instruction: "Répondez à Mme Weber : excusez-vous pour le retard, expliquez pourquoi vous avez oublié et dites quand et comment vous allez payer.",
    points: ["Vos excuses", "L'explication de l'oubli", "Quand et comment vous payez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-4",
    title: "Absent à l'assemblée",
    situation: "Le comité vous convoque à l'assemblée générale, mais vous ne pouvez pas venir.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Convocation à l'assemblée générale",
      body: "Chers membres,\nL'assemblée générale a lieu le mardi 4 février à 20 h à la maison de quartier.\nNous présenterons le programme et le budget.\nMerci de confirmer votre présence.\nLe comité",
    },
    instruction: "Répondez au comité : dites que vous ne pouvez pas venir, expliquez pourquoi et demandez le compte rendu de la réunion.",
    points: ["Votre absence", "La raison de votre absence", "Une demande de compte rendu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-5",
    title: "Renseigner un ami",
    situation: "Un ami veut des informations sur votre association.",
    sourceMessage: {
      from: "Ibrahim",
      subject: "Ton association de quartier",
      body: "Salut,\nTu m'as parlé de ton association de quartier. Ça m'intéresse !\nQu'est-ce qu'on peut y faire ? C'est cher ?\nIbrahim",
    },
    instruction: "Répondez à Ibrahim : décrivez deux activités de l'association, donnez le prix de la cotisation et proposez de l'emmener avec vous une fois.",
    points: ["Deux activités", "Le prix de la cotisation", "Une invitation à venir avec vous"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-6",
    title: "Une parcelle au jardin partagé",
    situation: "Le responsable du jardin partagé vous propose une parcelle.",
    sourceMessage: {
      from: "M. Costa",
      subject: "Une parcelle est libre",
      body: "Bonjour,\nUne parcelle est libre au jardin partagé, derrière l'église.\nVous étiez sur la liste d'attente : la voulez-vous ?\nM. Costa",
    },
    instruction: "Répondez à M. Costa : acceptez la parcelle, demandez les règles du jardin (outils, eau) et dites quand vous allez commencer.",
    points: ["Votre acceptation", "Une question sur les règles", "Quand vous commencez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-7",
    title: "Proposer une nouvelle activité",
    situation: "Le comité demande des idées d'activités pour l'année prochaine.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Appel à idées",
      body: "Chers membres,\nNous préparons le programme de l'année prochaine.\nAvez-vous des idées de nouvelles activités pour le quartier ?\nÉcrivez-nous !\nLe comité",
    },
    instruction: "Répondez au comité : proposez une nouvelle activité, indiquez un jour et un horaire possibles et dites comment vous pouvez aider à l'organiser.",
    points: ["L'activité proposée", "Un jour et un horaire", "Votre aide pour l'organisation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-8",
    title: "Vélo réparé",
    situation: "Un bénévole de l'atelier vélo vous écrit.",
    sourceMessage: {
      from: "Atelier vélo",
      subject: "Votre vélo est prêt",
      body: "Bonjour,\nNous avons réparé votre vélo : les freins et une roue.\nVous pouvez venir le chercher samedi matin, entre 9 h et 12 h.\nL'équipe de l'atelier",
    },
    instruction: "Répondez à l'atelier : remerciez l'équipe, demandez combien vous devez payer ou donner et proposez de devenir bénévole à votre tour.",
    points: ["Un remerciement", "Une question sur le prix", "Votre proposition de bénévolat"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-9",
    title: "Tenir la permanence",
    situation: "La présidente cherche quelqu'un pour la permanence du mercredi.",
    sourceMessage: {
      from: "Mme Blanc",
      subject: "Permanence du mercredi",
      body: "Bonjour,\nNous cherchons un membre pour tenir la permanence le mercredi, de 17 h à 19 h,\nune ou deux fois par mois.\nÊtes-vous intéressé(e) ?\nMme Blanc, présidente",
    },
    instruction: "Répondez à Mme Blanc : acceptez pour une fois par mois, expliquez vos disponibilités et demandez en quoi consiste exactement la permanence.",
    points: ["Votre acceptation", "Vos disponibilités", "Une question sur la permanence"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-10",
    title: "Collecte de vêtements",
    situation: "L'association organise une collecte pour des familles du quartier.",
    sourceMessage: {
      from: "Association des Tilleuls",
      subject: "Collecte de vêtements d'hiver",
      body: "Chers membres,\nNous organisons une collecte de vêtements d'hiver pour des familles du quartier.\nVous pouvez apporter vos dons à la permanence du mercredi.\nMerci pour votre générosité !\nLe comité",
    },
    instruction: "Répondez au comité : dites ce que vous allez donner, précisez quand vous apporterez vos dons et proposez votre aide pour la distribution.",
    points: ["Ce que vous donnez", "Quand vous l'apportez", "Votre aide pour la distribution"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-11",
    title: "Répondre — vie associative (11)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-12",
    title: "Répondre — vie associative (12)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-13",
    title: "Répondre — vie associative (13)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-14",
    title: "Répondre — vie associative (14)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-15",
    title: "Répondre — vie associative (15)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-16",
    title: "Répondre — vie associative (16)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-17",
    title: "Répondre — vie associative (17)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-18",
    title: "Répondre — vie associative (18)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-19",
    title: "Répondre — vie associative (19)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e10-5-pee-20",
    title: "Répondre — vie associative (20)",
    situation: "Vous avez reçu un e-mail concernant vie associative.",
sourceMessage: {
  from: "Service Vie associative",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vie associative.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
