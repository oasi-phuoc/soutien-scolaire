import {
  readingPoolExercise,
  type CommunicationExercise,
  type ExpressPePrompt,
} from "./express-types";
import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";

/**
 * E-mails E11 — Cuisine, activités, goûts, vacances (niveau A2).
 * CE e-mail : un e-mail à lire + pool de questions (≥ 10).
 * PE e-mail : pool d'e-mails reçus auxquels répondre (≥ 10).
 */

function q(item: ExpressRawQ): ExpressRawQ {
  return item;
}

const PE_MIN = 80;
const PE_MAX = 180;

/* ════════════════════════════════════════════════════════════════════════════
   E11.1 — Apprécier la cuisine
   ════════════════════════════════════════════════════════════════════════════ */

const E11_1_CE_EMAIL_TEXT = `De : Service E11 1 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_POOL = buildExpressPool("e11-1-ce-email", [
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
    text: ["Service E11 1 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 1.",
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

const E11_1_CE_EMAIL_2_TEXT = `De : Service E11 1 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_2_POOL = buildExpressPool("e11-1-ce-email-2", [
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
    text: ["Service E11 1 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 2.",
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

const E11_1_CE_EMAIL_3_TEXT = `De : Service E11 1 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_3_POOL = buildExpressPool("e11-1-ce-email-3", [
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
    text: ["Service E11 1 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 3.",
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

const E11_1_CE_EMAIL_4_TEXT = `De : Service E11 1 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_4_POOL = buildExpressPool("e11-1-ce-email-4", [
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
    text: ["Service E11 1 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 4.",
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

const E11_1_CE_EMAIL_5_TEXT = `De : Service E11 1 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_5_POOL = buildExpressPool("e11-1-ce-email-5", [
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
    text: ["Service E11 1 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 5.",
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

const E11_1_CE_EMAIL_6_TEXT = `De : Service E11 1 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_6_POOL = buildExpressPool("e11-1-ce-email-6", [
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
    text: ["Service E11 1 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 6.",
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

const E11_1_CE_EMAIL_7_TEXT = `De : Service E11 1 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_7_POOL = buildExpressPool("e11-1-ce-email-7", [
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
    text: ["Service E11 1 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 7.",
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

const E11_1_CE_EMAIL_8_TEXT = `De : Service E11 1 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_8_POOL = buildExpressPool("e11-1-ce-email-8", [
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
    text: ["Service E11 1 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 8.",
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

const E11_1_CE_EMAIL_9_TEXT = `De : Service E11 1 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_9_POOL = buildExpressPool("e11-1-ce-email-9", [
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
    text: ["Service E11 1 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 9.",
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

const E11_1_CE_EMAIL_10_TEXT = `De : Service E11 1 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_10_POOL = buildExpressPool("e11-1-ce-email-10", [
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
    text: ["Service E11 1 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 10.",
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

const E11_1_CE_EMAIL_11_TEXT = `De : Service E11 1 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_11_POOL = buildExpressPool("e11-1-ce-email-11", [
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
    text: ["Service E11 1 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 11.",
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

const E11_1_CE_EMAIL_12_TEXT = `De : Service E11 1 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_12_POOL = buildExpressPool("e11-1-ce-email-12", [
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
    text: ["Service E11 1 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 12.",
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

const E11_1_CE_EMAIL_13_TEXT = `De : Service E11 1 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_13_POOL = buildExpressPool("e11-1-ce-email-13", [
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
    text: ["Service E11 1 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 13.",
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

const E11_1_CE_EMAIL_14_TEXT = `De : Service E11 1 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_14_POOL = buildExpressPool("e11-1-ce-email-14", [
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
    text: ["Service E11 1 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 14.",
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

const E11_1_CE_EMAIL_15_TEXT = `De : Service E11 1 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_15_POOL = buildExpressPool("e11-1-ce-email-15", [
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
    text: ["Service E11 1 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 15.",
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

const E11_1_CE_EMAIL_16_TEXT = `De : Service E11 1 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_16_POOL = buildExpressPool("e11-1-ce-email-16", [
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
    text: ["Service E11 1 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 16.",
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

const E11_1_CE_EMAIL_17_TEXT = `De : Service E11 1 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_17_POOL = buildExpressPool("e11-1-ce-email-17", [
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
    text: ["Service E11 1 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 17.",
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

const E11_1_CE_EMAIL_18_TEXT = `De : Service E11 1 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_18_POOL = buildExpressPool("e11-1-ce-email-18", [
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
    text: ["Service E11 1 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 18.",
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

const E11_1_CE_EMAIL_19_TEXT = `De : Service E11 1 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_19_POOL = buildExpressPool("e11-1-ce-email-19", [
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
    text: ["Service E11 1 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 19.",
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

const E11_1_CE_EMAIL_20_TEXT = `De : Service E11 1 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E11_1_CE_EMAIL_20_POOL = buildExpressPool("e11-1-ce-email-20", [
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
    text: ["Service E11 1 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 1 20.",
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

export const E11_1_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-1-ce-email",
  readingText: E11_1_CE_EMAIL_TEXT,
  questionPool: E11_1_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-1-ce-email-2",
  readingText: E11_1_CE_EMAIL_2_TEXT,
  questionPool: E11_1_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-3",
  readingText: E11_1_CE_EMAIL_3_TEXT,
  questionPool: E11_1_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-4",
  readingText: E11_1_CE_EMAIL_4_TEXT,
  questionPool: E11_1_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-5",
  readingText: E11_1_CE_EMAIL_5_TEXT,
  questionPool: E11_1_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-6",
  readingText: E11_1_CE_EMAIL_6_TEXT,
  questionPool: E11_1_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-7",
  readingText: E11_1_CE_EMAIL_7_TEXT,
  questionPool: E11_1_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-8",
  readingText: E11_1_CE_EMAIL_8_TEXT,
  questionPool: E11_1_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-9",
  readingText: E11_1_CE_EMAIL_9_TEXT,
  questionPool: E11_1_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-10",
  readingText: E11_1_CE_EMAIL_10_TEXT,
  questionPool: E11_1_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-11",
  readingText: E11_1_CE_EMAIL_11_TEXT,
  questionPool: E11_1_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-12",
  readingText: E11_1_CE_EMAIL_12_TEXT,
  questionPool: E11_1_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-13",
  readingText: E11_1_CE_EMAIL_13_TEXT,
  questionPool: E11_1_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-14",
  readingText: E11_1_CE_EMAIL_14_TEXT,
  questionPool: E11_1_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-15",
  readingText: E11_1_CE_EMAIL_15_TEXT,
  questionPool: E11_1_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-16",
  readingText: E11_1_CE_EMAIL_16_TEXT,
  questionPool: E11_1_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-17",
  readingText: E11_1_CE_EMAIL_17_TEXT,
  questionPool: E11_1_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-18",
  readingText: E11_1_CE_EMAIL_18_TEXT,
  questionPool: E11_1_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-19",
  readingText: E11_1_CE_EMAIL_19_TEXT,
  questionPool: E11_1_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e11-1-ce-email-20",
  readingText: E11_1_CE_EMAIL_20_TEXT,
  questionPool: E11_1_CE_EMAIL_20_POOL
}),
];

export const E11_1_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-1-pee-1",
    title: "Accepter une invitation à dîner",
    situation: "Une amie vous invite à un repas chez elle.",
    sourceMessage: {
      from: "Julie",
      subject: "Repas samedi soir",
      body: "Bonjour,\nJ'organise un repas chez moi samedi soir à 19 h 30 pour fêter mon nouvel appartement.\nJe vais préparer des lasagnes. Tu peux venir ?\nJulie",
    },
    instruction: "Répondez à Julie : acceptez l'invitation, dites ce que vous apportez et posez une question sur l'adresse.",
    points: ["Votre accord", "Ce que vous apportez", "Une question sur l'adresse"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-2",
    title: "Refuser une sortie au restaurant",
    situation: "Un ami vous propose d'aller au restaurant vendredi.",
    sourceMessage: {
      from: "Marco",
      subject: "Restaurant vendredi ?",
      body: "Salut !\nJ'ai découvert un nouveau restaurant italien près de la gare.\nÇa te dit d'y aller vendredi soir à 20 h ?\nMarco",
    },
    instruction: "Répondez à Marco : refusez poliment, expliquez pourquoi vous ne pouvez pas venir et proposez une autre date.",
    points: ["Un refus poli", "La raison", "Une autre date"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-3",
    title: "Recommander un restaurant",
    situation: "Une amie cherche un restaurant pour l'anniversaire de sa mère.",
    sourceMessage: {
      from: "Aïcha",
      subject: "Un bon restaurant ?",
      body: "Coucou,\nJe cherche un bon restaurant pour l'anniversaire de ma mère, samedi prochain.\nTu connais une bonne adresse pas trop chère ?\nAïcha",
    },
    instruction: "Répondez à Aïcha : recommandez un restaurant, décrivez la cuisine et donnez une information sur les prix ou les horaires.",
    points: ["Le nom du restaurant", "La cuisine servie", "Les prix ou les horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-4",
    title: "Remercier après un repas",
    situation: "Vous avez mangé hier soir chez une amie, elle vous écrit.",
    sourceMessage: {
      from: "Sonia",
      subject: "Merci d'être venu(e) !",
      body: "Bonjour,\nMerci d'être venu(e) hier soir, c'était une très bonne soirée !\nJ'espère que le repas t'a plu.\nSonia",
    },
    instruction: "Répondez à Sonia : remerciez-la pour la soirée, dites quel plat vous avez préféré et demandez-lui la recette.",
    points: ["Un remerciement", "Le plat préféré", "Une demande de recette"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-5",
    title: "Réserver une table",
    situation: "Vous avez demandé une réservation, le restaurant vous répond.",
    sourceMessage: {
      from: "Restaurant du Lac",
      subject: "Votre demande de réservation",
      body: "Bonjour,\nNous avons bien reçu votre demande de réservation.\nPouvez-vous nous préciser la date, l'heure et le nombre de personnes ?\nLe Restaurant du Lac",
    },
    instruction: "Répondez au restaurant : donnez la date et l'heure, précisez le nombre de personnes et signalez une allergie ou un régime spécial.",
    points: ["La date et l'heure", "Le nombre de personnes", "Une allergie ou un régime spécial"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-6",
    title: "S'inscrire à un cours de cuisine",
    situation: "Une école de cuisine vous envoie une offre.",
    sourceMessage: {
      from: "École de cuisine La Toque",
      subject: "Cours de cuisine italienne",
      body: "Bonjour,\nNous proposons un cours de cuisine italienne le samedi matin, de 10 h à 12 h.\nLe prix est de quarante-cinq francs par cours.\nÊtes-vous intéressé(e) ?\nL'École La Toque",
    },
    instruction: "Répondez à l'école : inscrivez-vous au cours, dites quel est votre niveau en cuisine et posez une question sur le matériel à apporter.",
    points: ["Votre inscription", "Votre niveau en cuisine", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-7",
    title: "Raconter un repas de fête",
    situation: "Votre cousine veut savoir comment était le repas de mariage.",
    sourceMessage: {
      from: "Elena",
      subject: "Alors, ce mariage ?",
      body: "Coucou,\nTu es allé(e) au mariage de Léo samedi, non ?\nComment était le repas ? Raconte-moi tout !\nElena",
    },
    instruction: "Répondez à Elena : racontez le repas de mariage, décrivez deux plats et dites ce que vous avez préféré.",
    points: ["Le récit du repas", "Deux plats", "Ce que vous avez préféré"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-8",
    title: "Parler de ses goûts culinaires",
    situation: "Un ami organise un dîner et vous pose des questions.",
    sourceMessage: {
      from: "Tom",
      subject: "Qu'est-ce que tu aimes manger ?",
      body: "Salut,\nJ'organise un dîner chez moi vendredi et je prépare le menu.\nQu'est-ce que tu aimes manger ? Tu as des allergies ?\nTom",
    },
    instruction: "Répondez à Tom : dites ce que vous aimez manger, ce que vous n'aimez pas ou ne pouvez pas manger, et remerciez-le pour l'invitation.",
    points: ["Ce que vous aimez", "Ce que vous n'aimez pas ou ne pouvez pas manger", "Un remerciement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-9",
    title: "Présenter une spécialité de son pays",
    situation: "Une collègue organise une soirée internationale.",
    sourceMessage: {
      from: "Claire",
      subject: "Soirée internationale",
      body: "Bonjour,\nSamedi, nous organisons une soirée internationale : chaque personne apporte une spécialité de son pays.\nQu'est-ce que tu vas apporter ?\nClaire",
    },
    instruction: "Répondez à Claire : dites quel plat de votre pays vous apportez, décrivez ce plat et demandez combien de personnes viennent à la soirée.",
    points: ["Le plat choisi", "Une description du plat", "Une question sur le nombre de personnes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-10",
    title: "Donner son avis à un restaurant",
    situation: "Après votre visite, le restaurant vous demande votre avis.",
    sourceMessage: {
      from: "Restaurant Chez Paul",
      subject: "Votre avis nous intéresse",
      body: "Bonjour,\nMerci de votre visite de samedi dernier.\nComment avez-vous trouvé le repas et le service ?\nVotre avis nous aide à progresser.\nRestaurant Chez Paul",
    },
    instruction: "Répondez au restaurant : remerciez, dites ce que vous avez aimé et faites une petite suggestion pour améliorer le restaurant.",
    points: ["Un remerciement", "Ce que vous avez aimé", "Une suggestion"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-11",
    title: "Répondre — cuisine (11)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-12",
    title: "Répondre — cuisine (12)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-13",
    title: "Répondre — cuisine (13)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-14",
    title: "Répondre — cuisine (14)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-15",
    title: "Répondre — cuisine (15)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-16",
    title: "Répondre — cuisine (16)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-17",
    title: "Répondre — cuisine (17)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-18",
    title: "Répondre — cuisine (18)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-19",
    title: "Répondre — cuisine (19)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-1-pee-20",
    title: "Répondre — cuisine (20)",
    situation: "Vous avez reçu un e-mail concernant cuisine.",
sourceMessage: {
  from: "Service Cuisine",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant cuisine.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.2 — Pratiquer une activité
   ════════════════════════════════════════════════════════════════════════════ */

const E11_2_CE_EMAIL_TEXT = `De : Service E11 2 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_POOL = buildExpressPool("e11-2-ce-email", [
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
    text: ["Service E11 2 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 1.",
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

const E11_2_CE_EMAIL_2_TEXT = `De : Service E11 2 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_2_POOL = buildExpressPool("e11-2-ce-email-2", [
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
    text: ["Service E11 2 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 2.",
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

const E11_2_CE_EMAIL_3_TEXT = `De : Service E11 2 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_3_POOL = buildExpressPool("e11-2-ce-email-3", [
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
    text: ["Service E11 2 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 3.",
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

const E11_2_CE_EMAIL_4_TEXT = `De : Service E11 2 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_4_POOL = buildExpressPool("e11-2-ce-email-4", [
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
    text: ["Service E11 2 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 4.",
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

const E11_2_CE_EMAIL_5_TEXT = `De : Service E11 2 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_5_POOL = buildExpressPool("e11-2-ce-email-5", [
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
    text: ["Service E11 2 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 5.",
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

const E11_2_CE_EMAIL_6_TEXT = `De : Service E11 2 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_6_POOL = buildExpressPool("e11-2-ce-email-6", [
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
    text: ["Service E11 2 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 6.",
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

const E11_2_CE_EMAIL_7_TEXT = `De : Service E11 2 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_7_POOL = buildExpressPool("e11-2-ce-email-7", [
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
    text: ["Service E11 2 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 7.",
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

const E11_2_CE_EMAIL_8_TEXT = `De : Service E11 2 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_8_POOL = buildExpressPool("e11-2-ce-email-8", [
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
    text: ["Service E11 2 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 8.",
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

const E11_2_CE_EMAIL_9_TEXT = `De : Service E11 2 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_9_POOL = buildExpressPool("e11-2-ce-email-9", [
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
    text: ["Service E11 2 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 9.",
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

const E11_2_CE_EMAIL_10_TEXT = `De : Service E11 2 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_10_POOL = buildExpressPool("e11-2-ce-email-10", [
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
    text: ["Service E11 2 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 10.",
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

const E11_2_CE_EMAIL_11_TEXT = `De : Service E11 2 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_11_POOL = buildExpressPool("e11-2-ce-email-11", [
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
    text: ["Service E11 2 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 11.",
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

const E11_2_CE_EMAIL_12_TEXT = `De : Service E11 2 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_12_POOL = buildExpressPool("e11-2-ce-email-12", [
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
    text: ["Service E11 2 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 12.",
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

const E11_2_CE_EMAIL_13_TEXT = `De : Service E11 2 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_13_POOL = buildExpressPool("e11-2-ce-email-13", [
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
    text: ["Service E11 2 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 13.",
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

const E11_2_CE_EMAIL_14_TEXT = `De : Service E11 2 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_14_POOL = buildExpressPool("e11-2-ce-email-14", [
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
    text: ["Service E11 2 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 14.",
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

const E11_2_CE_EMAIL_15_TEXT = `De : Service E11 2 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_15_POOL = buildExpressPool("e11-2-ce-email-15", [
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
    text: ["Service E11 2 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 15.",
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

const E11_2_CE_EMAIL_16_TEXT = `De : Service E11 2 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_16_POOL = buildExpressPool("e11-2-ce-email-16", [
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
    text: ["Service E11 2 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 16.",
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

const E11_2_CE_EMAIL_17_TEXT = `De : Service E11 2 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_17_POOL = buildExpressPool("e11-2-ce-email-17", [
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
    text: ["Service E11 2 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 17.",
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

const E11_2_CE_EMAIL_18_TEXT = `De : Service E11 2 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_18_POOL = buildExpressPool("e11-2-ce-email-18", [
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
    text: ["Service E11 2 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 18.",
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

const E11_2_CE_EMAIL_19_TEXT = `De : Service E11 2 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_19_POOL = buildExpressPool("e11-2-ce-email-19", [
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
    text: ["Service E11 2 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 19.",
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

const E11_2_CE_EMAIL_20_TEXT = `De : Service E11 2 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E11_2_CE_EMAIL_20_POOL = buildExpressPool("e11-2-ce-email-20", [
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
    text: ["Service E11 2 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 2 20.",
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

export const E11_2_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-2-ce-email",
  readingText: E11_2_CE_EMAIL_TEXT,
  questionPool: E11_2_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-2-ce-email-2",
  readingText: E11_2_CE_EMAIL_2_TEXT,
  questionPool: E11_2_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-3",
  readingText: E11_2_CE_EMAIL_3_TEXT,
  questionPool: E11_2_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-4",
  readingText: E11_2_CE_EMAIL_4_TEXT,
  questionPool: E11_2_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-5",
  readingText: E11_2_CE_EMAIL_5_TEXT,
  questionPool: E11_2_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-6",
  readingText: E11_2_CE_EMAIL_6_TEXT,
  questionPool: E11_2_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-7",
  readingText: E11_2_CE_EMAIL_7_TEXT,
  questionPool: E11_2_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-8",
  readingText: E11_2_CE_EMAIL_8_TEXT,
  questionPool: E11_2_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-9",
  readingText: E11_2_CE_EMAIL_9_TEXT,
  questionPool: E11_2_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-10",
  readingText: E11_2_CE_EMAIL_10_TEXT,
  questionPool: E11_2_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-11",
  readingText: E11_2_CE_EMAIL_11_TEXT,
  questionPool: E11_2_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-12",
  readingText: E11_2_CE_EMAIL_12_TEXT,
  questionPool: E11_2_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-13",
  readingText: E11_2_CE_EMAIL_13_TEXT,
  questionPool: E11_2_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-14",
  readingText: E11_2_CE_EMAIL_14_TEXT,
  questionPool: E11_2_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-15",
  readingText: E11_2_CE_EMAIL_15_TEXT,
  questionPool: E11_2_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-16",
  readingText: E11_2_CE_EMAIL_16_TEXT,
  questionPool: E11_2_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-17",
  readingText: E11_2_CE_EMAIL_17_TEXT,
  questionPool: E11_2_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-18",
  readingText: E11_2_CE_EMAIL_18_TEXT,
  questionPool: E11_2_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-19",
  readingText: E11_2_CE_EMAIL_19_TEXT,
  questionPool: E11_2_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e11-2-ce-email-20",
  readingText: E11_2_CE_EMAIL_20_TEXT,
  questionPool: E11_2_CE_EMAIL_20_POOL
}),
];

export const E11_2_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-2-pee-1",
    title: "Accepter un cours d'essai",
    situation: "Une école de danse vous propose un cours d'essai gratuit.",
    sourceMessage: {
      from: "École de danse Tempo",
      subject: "Cours d'essai gratuit",
      body: "Bonjour,\nNous vous proposons un cours d'essai gratuit de salsa, jeudi à 19 h.\nÊtes-vous intéressé(e) ?\nL'École Tempo",
    },
    instruction: "Répondez à l'école : acceptez le cours d'essai, demandez quelle tenue il faut porter et posez une question sur le prix des cours.",
    points: ["Votre accord", "Une question sur la tenue", "Une question sur le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-2",
    title: "Proposer un sport à un ami",
    situation: "Un ami veut faire du sport avec vous.",
    sourceMessage: {
      from: "Lucas",
      subject: "Un sport ensemble ?",
      body: "Salut !\nJe veux faire du sport, mais tout seul, c'est ennuyeux.\nTu veux faire une activité avec moi ? Laquelle ?\nLucas",
    },
    instruction: "Répondez à Lucas : proposez une activité sportive, expliquez pourquoi vous l'aimez et proposez un jour pour commencer.",
    points: ["L'activité proposée", "Pourquoi vous l'aimez", "Un jour pour commencer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-3",
    title: "Compléter une inscription",
    situation: "Un atelier de dessin vous demande des informations.",
    sourceMessage: {
      from: "Atelier de dessin Couleurs",
      subject: "Votre inscription",
      body: "Bonjour,\nMerci pour votre demande d'inscription.\nPouvez-vous nous indiquer votre niveau en dessin et vos disponibilités ?\nL'Atelier Couleurs",
    },
    instruction: "Répondez à l'atelier : donnez votre niveau en dessin, indiquez vos disponibilités et posez une question sur le matériel à acheter.",
    points: ["Votre niveau", "Vos disponibilités", "Une question sur le matériel"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-4",
    title: "Décrire ses loisirs",
    situation: "Une amie vous demande ce que vous faites le week-end.",
    sourceMessage: {
      from: "Emma",
      subject: "Tu fais quoi le week-end ?",
      body: "Coucou,\nJe cherche une nouvelle activité pour le week-end.\nToi, qu'est-ce que tu fais comme loisirs ? C'est bien ?\nEmma",
    },
    instruction: "Répondez à Emma : décrivez vos loisirs, dites depuis quand vous les pratiquez et invitez-la à essayer avec vous.",
    points: ["Vos loisirs", "Depuis quand", "Une invitation à essayer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-5",
    title: "Répondre à un changement d'horaire",
    situation: "Votre club de natation change l'horaire du cours.",
    sourceMessage: {
      from: "Club de natation Les Dauphins",
      subject: "Changement d'horaire",
      body: "Bonjour,\nÀ partir du mois prochain, votre cours de natation du mardi à 18 h est déplacé au jeudi à 19 h.\nCet horaire vous convient-il ?\nLe Club Les Dauphins",
    },
    instruction: "Répondez au club : dites si le nouvel horaire vous convient ou non, expliquez pourquoi et posez une question sur les autres horaires possibles.",
    points: ["Votre réponse sur l'horaire", "La raison", "Une question sur les autres horaires"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-6",
    title: "Renseigner un ami sur un cours",
    situation: "Un ami veut des informations sur votre cours de guitare.",
    sourceMessage: {
      from: "Hugo",
      subject: "Cours de guitare",
      body: "Salut,\nTu prends des cours de guitare, non ? Moi aussi, je veux commencer.\nC'est bien ? Ça coûte combien ? C'est quand ?\nHugo",
    },
    instruction: "Répondez à Hugo : racontez comment se passe votre cours, donnez le prix et les horaires, et recommandez (ou non) votre école.",
    points: ["Comment se passe le cours", "Le prix et les horaires", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-7",
    title: "Refuser une partie de badminton",
    situation: "Une amie vous propose un match samedi matin.",
    sourceMessage: {
      from: "Chloé",
      subject: "Match de badminton samedi",
      body: "Salut !\nÇa te dit un match de badminton samedi matin à 10 h ?\nJ'ai réservé un terrain à la salle de sport.\nChloé",
    },
    instruction: "Répondez à Chloé : refusez poliment, expliquez ce que vous devez faire samedi matin et proposez un autre moment pour jouer.",
    points: ["Un refus poli", "La raison", "Un autre moment"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-8",
    title: "Choisir une activité",
    situation: "Le centre de loisirs présente son nouveau programme.",
    sourceMessage: {
      from: "Centre de loisirs de la Ville",
      subject: "Activités d'automne",
      body: "Bonjour,\nCet automne, nous proposons trois nouvelles activités : yoga, théâtre et photographie.\nQuelle activité vous intéresse ?\nLe Centre de loisirs",
    },
    instruction: "Répondez au centre de loisirs : choisissez une activité, expliquez pourquoi elle vous intéresse et demandez les horaires et le prix.",
    points: ["L'activité choisie", "Pourquoi", "Une question sur les horaires et le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-9",
    title: "Raconter son premier cours",
    situation: "Votre sœur veut savoir comment était votre premier cours de danse.",
    sourceMessage: {
      from: "Mila",
      subject: "Ton premier cours de danse ?",
      body: "Coucou,\nAlors, tu as commencé la danse mardi ?\nComment était le premier cours ? Raconte !\nMila",
    },
    instruction: "Répondez à Mila : racontez votre premier cours de danse, dites ce que vous avez aimé et si vous allez continuer.",
    points: ["Le récit du premier cours", "Ce que vous avez aimé", "Si vous continuez"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-10",
    title: "Louer un instrument",
    situation: "L'école de musique vous pose une question sur le matériel.",
    sourceMessage: {
      from: "École de musique La Clé de Sol",
      subject: "Matériel pour le cours",
      body: "Bonjour,\nAvez-vous déjà une guitare pour le cours ?\nSi non, nous pouvons vous en louer une pour vingt francs par mois.\nL'école de musique",
    },
    instruction: "Répondez à l'école : dites si vous avez déjà une guitare, acceptez ou refusez la location et posez une question sur le premier cours.",
    points: ["Si vous avez une guitare", "Votre décision sur la location", "Une question sur le premier cours"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-11",
    title: "Répondre — activités (11)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-12",
    title: "Répondre — activités (12)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-13",
    title: "Répondre — activités (13)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-14",
    title: "Répondre — activités (14)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-15",
    title: "Répondre — activités (15)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-16",
    title: "Répondre — activités (16)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-17",
    title: "Répondre — activités (17)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-18",
    title: "Répondre — activités (18)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-19",
    title: "Répondre — activités (19)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-2-pee-20",
    title: "Répondre — activités (20)",
    situation: "Vous avez reçu un e-mail concernant activités.",
sourceMessage: {
  from: "Service Activités",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant activités.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.3 — Partager ses goûts
   ════════════════════════════════════════════════════════════════════════════ */

const E11_3_CE_EMAIL_TEXT = `De : Service E11 3 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_POOL = buildExpressPool("e11-3-ce-email", [
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
    text: ["Service E11 3 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 1.",
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

const E11_3_CE_EMAIL_2_TEXT = `De : Service E11 3 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_2_POOL = buildExpressPool("e11-3-ce-email-2", [
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
    text: ["Service E11 3 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 2.",
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

const E11_3_CE_EMAIL_3_TEXT = `De : Service E11 3 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_3_POOL = buildExpressPool("e11-3-ce-email-3", [
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
    text: ["Service E11 3 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 3.",
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

const E11_3_CE_EMAIL_4_TEXT = `De : Service E11 3 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_4_POOL = buildExpressPool("e11-3-ce-email-4", [
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
    text: ["Service E11 3 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 4.",
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

const E11_3_CE_EMAIL_5_TEXT = `De : Service E11 3 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_5_POOL = buildExpressPool("e11-3-ce-email-5", [
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
    text: ["Service E11 3 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 5.",
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

const E11_3_CE_EMAIL_6_TEXT = `De : Service E11 3 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_6_POOL = buildExpressPool("e11-3-ce-email-6", [
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
    text: ["Service E11 3 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 6.",
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

const E11_3_CE_EMAIL_7_TEXT = `De : Service E11 3 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_7_POOL = buildExpressPool("e11-3-ce-email-7", [
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
    text: ["Service E11 3 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 7.",
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

const E11_3_CE_EMAIL_8_TEXT = `De : Service E11 3 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_8_POOL = buildExpressPool("e11-3-ce-email-8", [
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
    text: ["Service E11 3 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 8.",
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

const E11_3_CE_EMAIL_9_TEXT = `De : Service E11 3 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_9_POOL = buildExpressPool("e11-3-ce-email-9", [
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
    text: ["Service E11 3 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 9.",
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

const E11_3_CE_EMAIL_10_TEXT = `De : Service E11 3 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_10_POOL = buildExpressPool("e11-3-ce-email-10", [
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
    text: ["Service E11 3 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 10.",
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

const E11_3_CE_EMAIL_11_TEXT = `De : Service E11 3 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_11_POOL = buildExpressPool("e11-3-ce-email-11", [
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
    text: ["Service E11 3 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 11.",
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

const E11_3_CE_EMAIL_12_TEXT = `De : Service E11 3 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_12_POOL = buildExpressPool("e11-3-ce-email-12", [
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
    text: ["Service E11 3 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 12.",
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

const E11_3_CE_EMAIL_13_TEXT = `De : Service E11 3 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_13_POOL = buildExpressPool("e11-3-ce-email-13", [
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
    text: ["Service E11 3 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 13.",
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

const E11_3_CE_EMAIL_14_TEXT = `De : Service E11 3 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_14_POOL = buildExpressPool("e11-3-ce-email-14", [
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
    text: ["Service E11 3 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 14.",
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

const E11_3_CE_EMAIL_15_TEXT = `De : Service E11 3 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_15_POOL = buildExpressPool("e11-3-ce-email-15", [
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
    text: ["Service E11 3 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 15.",
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

const E11_3_CE_EMAIL_16_TEXT = `De : Service E11 3 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_16_POOL = buildExpressPool("e11-3-ce-email-16", [
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
    text: ["Service E11 3 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 16.",
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

const E11_3_CE_EMAIL_17_TEXT = `De : Service E11 3 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_17_POOL = buildExpressPool("e11-3-ce-email-17", [
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
    text: ["Service E11 3 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 17.",
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

const E11_3_CE_EMAIL_18_TEXT = `De : Service E11 3 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_18_POOL = buildExpressPool("e11-3-ce-email-18", [
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
    text: ["Service E11 3 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 18.",
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

const E11_3_CE_EMAIL_19_TEXT = `De : Service E11 3 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_19_POOL = buildExpressPool("e11-3-ce-email-19", [
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
    text: ["Service E11 3 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 19.",
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

const E11_3_CE_EMAIL_20_TEXT = `De : Service E11 3 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E11_3_CE_EMAIL_20_POOL = buildExpressPool("e11-3-ce-email-20", [
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
    text: ["Service E11 3 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 3 20.",
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

export const E11_3_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-3-ce-email",
  readingText: E11_3_CE_EMAIL_TEXT,
  questionPool: E11_3_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-3-ce-email-2",
  readingText: E11_3_CE_EMAIL_2_TEXT,
  questionPool: E11_3_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-3",
  readingText: E11_3_CE_EMAIL_3_TEXT,
  questionPool: E11_3_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-4",
  readingText: E11_3_CE_EMAIL_4_TEXT,
  questionPool: E11_3_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-5",
  readingText: E11_3_CE_EMAIL_5_TEXT,
  questionPool: E11_3_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-6",
  readingText: E11_3_CE_EMAIL_6_TEXT,
  questionPool: E11_3_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-7",
  readingText: E11_3_CE_EMAIL_7_TEXT,
  questionPool: E11_3_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-8",
  readingText: E11_3_CE_EMAIL_8_TEXT,
  questionPool: E11_3_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-9",
  readingText: E11_3_CE_EMAIL_9_TEXT,
  questionPool: E11_3_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-10",
  readingText: E11_3_CE_EMAIL_10_TEXT,
  questionPool: E11_3_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-11",
  readingText: E11_3_CE_EMAIL_11_TEXT,
  questionPool: E11_3_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-12",
  readingText: E11_3_CE_EMAIL_12_TEXT,
  questionPool: E11_3_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-13",
  readingText: E11_3_CE_EMAIL_13_TEXT,
  questionPool: E11_3_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-14",
  readingText: E11_3_CE_EMAIL_14_TEXT,
  questionPool: E11_3_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-15",
  readingText: E11_3_CE_EMAIL_15_TEXT,
  questionPool: E11_3_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-16",
  readingText: E11_3_CE_EMAIL_16_TEXT,
  questionPool: E11_3_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-17",
  readingText: E11_3_CE_EMAIL_17_TEXT,
  questionPool: E11_3_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-18",
  readingText: E11_3_CE_EMAIL_18_TEXT,
  questionPool: E11_3_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-19",
  readingText: E11_3_CE_EMAIL_19_TEXT,
  questionPool: E11_3_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e11-3-ce-email-20",
  readingText: E11_3_CE_EMAIL_20_TEXT,
  questionPool: E11_3_CE_EMAIL_20_POOL
}),
];

export const E11_3_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-3-pee-1",
    title: "Accepter une soirée cinéma",
    situation: "Un ami vous invite au cinéma vendredi.",
    sourceMessage: {
      from: "Noé",
      subject: "Cinéma vendredi ?",
      body: "Salut !\nLe nouveau film de science-fiction sort vendredi au cinéma Rex.\nLa séance est à 20 h 15. Tu viens avec moi ?\nNoé",
    },
    instruction: "Répondez à Noé : acceptez l'invitation, proposez un lieu de rendez-vous avant la séance et posez une question sur le film.",
    points: ["Votre accord", "Un lieu de rendez-vous", "Une question sur le film"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-2",
    title: "Recommander un livre",
    situation: "Une amie cherche un livre pour les vacances.",
    sourceMessage: {
      from: "Lina",
      subject: "Un livre pour les vacances",
      body: "Coucou,\nJe pars en vacances la semaine prochaine et je cherche un bon livre.\nTu as lu quelque chose de bien récemment ?\nLina",
    },
    instruction: "Répondez à Lina : recommandez un livre, racontez un peu l'histoire et expliquez pourquoi vous l'avez aimé.",
    points: ["Le livre recommandé", "Un résumé de l'histoire", "Pourquoi vous l'avez aimé"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-3",
    title: "S'inscrire au club de lecture",
    situation: "La bibliothèque vous invite à rejoindre son club de lecture.",
    sourceMessage: {
      from: "Bibliothèque municipale",
      subject: "Club de lecture",
      body: "Bonjour,\nNotre club de lecture se réunit le premier jeudi du mois, à 18 h 30.\nPour vous inscrire, répondez à cet e-mail et présentez votre livre préféré.\nLa Bibliothèque municipale",
    },
    instruction: "Répondez à la bibliothèque : inscrivez-vous au club, présentez votre livre préféré et posez une question sur la durée des réunions.",
    points: ["Votre inscription", "Votre livre préféré", "Une question sur la durée"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-4",
    title: "Répondre à une invitation au concert",
    situation: "Un ami a deux billets pour un concert samedi.",
    sourceMessage: {
      from: "Sami",
      subject: "Concert samedi",
      body: "Salut !\nJ'ai deux billets pour le concert de rock de samedi soir.\nTu aimes ce style de musique ? Tu veux venir ?\nSami",
    },
    instruction: "Répondez à Sami : acceptez ou refusez l'invitation, parlez de vos goûts musicaux et proposez une heure de rendez-vous ou une autre sortie.",
    points: ["Votre décision", "Vos goûts musicaux", "Un rendez-vous ou une autre sortie"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-5",
    title: "Recommander une série",
    situation: "Une amie cherche une nouvelle série à regarder.",
    sourceMessage: {
      from: "Jade",
      subject: "Quelle série tu regardes ?",
      body: "Coucou,\nJ'ai fini ma série hier soir et je ne sais pas quoi regarder maintenant.\nTu as une idée pour moi ?\nJade",
    },
    instruction: "Répondez à Jade : recommandez une série, décrivez le genre et l'histoire, et dites combien il y a de saisons ou d'épisodes.",
    points: ["La série recommandée", "Le genre et l'histoire", "Le nombre de saisons ou d'épisodes"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-6",
    title: "Raconter un film",
    situation: "Un ami veut savoir comment était le film que vous avez vu.",
    sourceMessage: {
      from: "Théo",
      subject: "Alors, ce film ?",
      body: "Salut,\nTu es allé(e) au cinéma hier soir, non ?\nC'était bien ? Raconte-moi !\nThéo",
    },
    instruction: "Répondez à Théo : racontez le film que vous avez vu, donnez votre avis et dites si vous le recommandez ou non.",
    points: ["Le récit du film", "Votre avis", "Votre recommandation"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-7",
    title: "Donner un avis différent",
    situation: "Une amie a adoré un film, mais vous n'êtes pas d'accord.",
    sourceMessage: {
      from: "Anna",
      subject: "Tu as aimé ce film ?",
      body: "Coucou,\nJ'ai adoré le film de dimanche, c'était magnifique !\nEt toi, tu as aimé ? Dis-moi tout !\nAnna",
    },
    instruction: "Répondez à Anna : donnez poliment votre avis différent, expliquez ce que vous n'avez pas aimé et proposez-lui un autre film à voir ensemble.",
    points: ["Votre avis différent", "Ce que vous n'avez pas aimé", "Un autre film à voir ensemble"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-8",
    title: "Voter pour un film",
    situation: "Le ciné-club du quartier vous demande de choisir un film.",
    sourceMessage: {
      from: "Ciné-club du quartier",
      subject: "Programme du mois",
      body: "Bonjour,\nPour la prochaine soirée, trois films sont proposés : une comédie française, un film d'aventure et un documentaire sur la nature.\nQuel film choisissez-vous ?\nLe Ciné-club",
    },
    instruction: "Répondez au ciné-club : choisissez un film, expliquez pourquoi il vous intéresse et demandez l'heure de la séance.",
    points: ["Le film choisi", "Pourquoi", "Une question sur l'heure"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-9",
    title: "Préparer la musique d'une fête",
    situation: "Un ami prépare la musique pour une fête et vous demande vos idées.",
    sourceMessage: {
      from: "Diego",
      subject: "Playlist pour la fête",
      body: "Salut !\nJe prépare la musique pour la fête de samedi.\nQuelles chansons ou quels styles tu me conseilles ?\nDiego",
    },
    instruction: "Répondez à Diego : proposez deux styles de musique ou chansons, dites ce qu'il ne faut surtout pas mettre et souhaitez-lui une bonne préparation.",
    points: ["Deux styles ou chansons", "Ce qu'il ne faut pas mettre", "Un encouragement"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-10",
    title: "Conseiller un cadeau",
    situation: "Votre tante cherche un cadeau pour votre cousin de 14 ans.",
    sourceMessage: {
      from: "Tante Rosa",
      subject: "Un cadeau pour ton cousin",
      body: "Bonjour,\nJe cherche un cadeau pour l'anniversaire de ton cousin : un livre, une BD ou de la musique.\nQu'est-ce qu'il aime en ce moment ? Tu as une idée ?\nTante Rosa",
    },
    instruction: "Répondez à votre tante : proposez une idée de cadeau, expliquez pourquoi votre cousin va l'aimer et dites où l'acheter et à quel prix.",
    points: ["L'idée de cadeau", "Pourquoi il va l'aimer", "Où l'acheter et le prix"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-11",
    title: "Répondre — goûts (11)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-12",
    title: "Répondre — goûts (12)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-13",
    title: "Répondre — goûts (13)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-14",
    title: "Répondre — goûts (14)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-15",
    title: "Répondre — goûts (15)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-16",
    title: "Répondre — goûts (16)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-17",
    title: "Répondre — goûts (17)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-18",
    title: "Répondre — goûts (18)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-19",
    title: "Répondre — goûts (19)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-3-pee-20",
    title: "Répondre — goûts (20)",
    situation: "Vous avez reçu un e-mail concernant goûts.",
sourceMessage: {
  from: "Service Goûts",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant goûts.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];

/* ════════════════════════════════════════════════════════════════════════════
   E11.4 — Passer des vacances
   ════════════════════════════════════════════════════════════════════════════ */

const E11_4_CE_EMAIL_TEXT = `De : Service E11 4 1

Objet : Message 1 — information

Bonjour,

Concernant sujet 1 : détail 1.

Délai : délai 1 jours. Action : action 1.

Contact : contact 1. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_POOL = buildExpressPool("e11-4-ce-email", [
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
    text: ["Service E11 4 1", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 1.",
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

const E11_4_CE_EMAIL_2_TEXT = `De : Service E11 4 2

Objet : Message 2 — information

Bonjour,

Concernant sujet 2 : détail 2.

Délai : délai 2 jours. Action : action 2.

Contact : contact 2. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_2_POOL = buildExpressPool("e11-4-ce-email-2", [
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
    text: ["Service E11 4 2", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 2.",
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

const E11_4_CE_EMAIL_3_TEXT = `De : Service E11 4 3

Objet : Message 3 — information

Bonjour,

Concernant sujet 3 : détail 3.

Délai : délai 3 jours. Action : action 3.

Contact : contact 3. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_3_POOL = buildExpressPool("e11-4-ce-email-3", [
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
    text: ["Service E11 4 3", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 3.",
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

const E11_4_CE_EMAIL_4_TEXT = `De : Service E11 4 4

Objet : Message 4 — information

Bonjour,

Concernant sujet 4 : détail 4.

Délai : délai 4 jours. Action : action 4.

Contact : contact 4. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_4_POOL = buildExpressPool("e11-4-ce-email-4", [
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
    text: ["Service E11 4 4", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 4.",
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

const E11_4_CE_EMAIL_5_TEXT = `De : Service E11 4 5

Objet : Message 5 — information

Bonjour,

Concernant sujet 5 : détail 5.

Délai : délai 5 jours. Action : action 5.

Contact : contact 5. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_5_POOL = buildExpressPool("e11-4-ce-email-5", [
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
    text: ["Service E11 4 5", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 5.",
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

const E11_4_CE_EMAIL_6_TEXT = `De : Service E11 4 6

Objet : Message 6 — information

Bonjour,

Concernant sujet 6 : détail 6.

Délai : délai 6 jours. Action : action 6.

Contact : contact 6. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_6_POOL = buildExpressPool("e11-4-ce-email-6", [
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
    text: ["Service E11 4 6", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 6.",
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

const E11_4_CE_EMAIL_7_TEXT = `De : Service E11 4 7

Objet : Message 7 — information

Bonjour,

Concernant sujet 7 : détail 7.

Délai : délai 7 jours. Action : action 7.

Contact : contact 7. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_7_POOL = buildExpressPool("e11-4-ce-email-7", [
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
    text: ["Service E11 4 7", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 7.",
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

const E11_4_CE_EMAIL_8_TEXT = `De : Service E11 4 8

Objet : Message 8 — information

Bonjour,

Concernant sujet 8 : détail 8.

Délai : délai 8 jours. Action : action 8.

Contact : contact 8. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_8_POOL = buildExpressPool("e11-4-ce-email-8", [
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
    text: ["Service E11 4 8", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 8.",
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

const E11_4_CE_EMAIL_9_TEXT = `De : Service E11 4 9

Objet : Message 9 — information

Bonjour,

Concernant sujet 9 : détail 9.

Délai : délai 9 jours. Action : action 9.

Contact : contact 9. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_9_POOL = buildExpressPool("e11-4-ce-email-9", [
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
    text: ["Service E11 4 9", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 9.",
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

const E11_4_CE_EMAIL_10_TEXT = `De : Service E11 4 10

Objet : Message 10 — information

Bonjour,

Concernant sujet 10 : détail 10.

Délai : délai 10 jours. Action : action 10.

Contact : contact 10. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_10_POOL = buildExpressPool("e11-4-ce-email-10", [
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
    text: ["Service E11 4 10", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 10.",
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

const E11_4_CE_EMAIL_11_TEXT = `De : Service E11 4 11

Objet : Message 11 — information

Bonjour,

Concernant sujet 11 : détail 11.

Délai : délai 11 jours. Action : action 11.

Contact : contact 11. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_11_POOL = buildExpressPool("e11-4-ce-email-11", [
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
    text: ["Service E11 4 11", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 11.",
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

const E11_4_CE_EMAIL_12_TEXT = `De : Service E11 4 12

Objet : Message 12 — information

Bonjour,

Concernant sujet 12 : détail 12.

Délai : délai 12 jours. Action : action 12.

Contact : contact 12. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_12_POOL = buildExpressPool("e11-4-ce-email-12", [
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
    text: ["Service E11 4 12", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 12.",
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

const E11_4_CE_EMAIL_13_TEXT = `De : Service E11 4 13

Objet : Message 13 — information

Bonjour,

Concernant sujet 13 : détail 13.

Délai : délai 13 jours. Action : action 13.

Contact : contact 13. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_13_POOL = buildExpressPool("e11-4-ce-email-13", [
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
    text: ["Service E11 4 13", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 13.",
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

const E11_4_CE_EMAIL_14_TEXT = `De : Service E11 4 14

Objet : Message 14 — information

Bonjour,

Concernant sujet 14 : détail 14.

Délai : délai 14 jours. Action : action 14.

Contact : contact 14. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_14_POOL = buildExpressPool("e11-4-ce-email-14", [
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
    text: ["Service E11 4 14", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 14.",
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

const E11_4_CE_EMAIL_15_TEXT = `De : Service E11 4 15

Objet : Message 15 — information

Bonjour,

Concernant sujet 15 : détail 15.

Délai : délai 15 jours. Action : action 15.

Contact : contact 15. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_15_POOL = buildExpressPool("e11-4-ce-email-15", [
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
    text: ["Service E11 4 15", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 15.",
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

const E11_4_CE_EMAIL_16_TEXT = `De : Service E11 4 16

Objet : Message 16 — information

Bonjour,

Concernant sujet 16 : détail 16.

Délai : délai 16 jours. Action : action 16.

Contact : contact 16. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_16_POOL = buildExpressPool("e11-4-ce-email-16", [
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
    text: ["Service E11 4 16", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 16.",
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

const E11_4_CE_EMAIL_17_TEXT = `De : Service E11 4 17

Objet : Message 17 — information

Bonjour,

Concernant sujet 17 : détail 17.

Délai : délai 17 jours. Action : action 17.

Contact : contact 17. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_17_POOL = buildExpressPool("e11-4-ce-email-17", [
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
    text: ["Service E11 4 17", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 17.",
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

const E11_4_CE_EMAIL_18_TEXT = `De : Service E11 4 18

Objet : Message 18 — information

Bonjour,

Concernant sujet 18 : détail 18.

Délai : délai 18 jours. Action : action 18.

Contact : contact 18. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_18_POOL = buildExpressPool("e11-4-ce-email-18", [
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
    text: ["Service E11 4 18", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 18.",
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

const E11_4_CE_EMAIL_19_TEXT = `De : Service E11 4 19

Objet : Message 19 — information

Bonjour,

Concernant sujet 19 : détail 19.

Délai : délai 19 jours. Action : action 19.

Contact : contact 19. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_19_POOL = buildExpressPool("e11-4-ce-email-19", [
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
    text: ["Service E11 4 19", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 19.",
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

const E11_4_CE_EMAIL_20_TEXT = `De : Service E11 4 20

Objet : Message 20 — information

Bonjour,

Concernant sujet 20 : détail 20.

Délai : délai 20 jours. Action : action 20.

Contact : contact 20. Merci.

Cordialement,

Service`;

const E11_4_CE_EMAIL_20_POOL = buildExpressPool("e11-4-ce-email-20", [
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
    text: ["Service E11 4 20", "Facteur", "Ami"],
    textC: 0,
    img: ["", "", ""],
    imgC: 0,
    fillQ: "De : _________",
    fill: "Service",
    vfQ: "Expéditeur : Service E11 4 20.",
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

export const E11_4_CE_EMAIL: CommunicationExercise[] = [
readingPoolExercise({
  id: "e11-4-ce-email",
  readingText: E11_4_CE_EMAIL_TEXT,
  questionPool: E11_4_CE_EMAIL_POOL,
  instruction: "Lisez l'e-mail et répondez aux questions."
}),
readingPoolExercise({
  id: "e11-4-ce-email-2",
  readingText: E11_4_CE_EMAIL_2_TEXT,
  questionPool: E11_4_CE_EMAIL_2_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-3",
  readingText: E11_4_CE_EMAIL_3_TEXT,
  questionPool: E11_4_CE_EMAIL_3_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-4",
  readingText: E11_4_CE_EMAIL_4_TEXT,
  questionPool: E11_4_CE_EMAIL_4_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-5",
  readingText: E11_4_CE_EMAIL_5_TEXT,
  questionPool: E11_4_CE_EMAIL_5_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-6",
  readingText: E11_4_CE_EMAIL_6_TEXT,
  questionPool: E11_4_CE_EMAIL_6_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-7",
  readingText: E11_4_CE_EMAIL_7_TEXT,
  questionPool: E11_4_CE_EMAIL_7_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-8",
  readingText: E11_4_CE_EMAIL_8_TEXT,
  questionPool: E11_4_CE_EMAIL_8_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-9",
  readingText: E11_4_CE_EMAIL_9_TEXT,
  questionPool: E11_4_CE_EMAIL_9_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-10",
  readingText: E11_4_CE_EMAIL_10_TEXT,
  questionPool: E11_4_CE_EMAIL_10_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-11",
  readingText: E11_4_CE_EMAIL_11_TEXT,
  questionPool: E11_4_CE_EMAIL_11_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-12",
  readingText: E11_4_CE_EMAIL_12_TEXT,
  questionPool: E11_4_CE_EMAIL_12_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-13",
  readingText: E11_4_CE_EMAIL_13_TEXT,
  questionPool: E11_4_CE_EMAIL_13_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-14",
  readingText: E11_4_CE_EMAIL_14_TEXT,
  questionPool: E11_4_CE_EMAIL_14_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-15",
  readingText: E11_4_CE_EMAIL_15_TEXT,
  questionPool: E11_4_CE_EMAIL_15_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-16",
  readingText: E11_4_CE_EMAIL_16_TEXT,
  questionPool: E11_4_CE_EMAIL_16_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-17",
  readingText: E11_4_CE_EMAIL_17_TEXT,
  questionPool: E11_4_CE_EMAIL_17_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-18",
  readingText: E11_4_CE_EMAIL_18_TEXT,
  questionPool: E11_4_CE_EMAIL_18_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-19",
  readingText: E11_4_CE_EMAIL_19_TEXT,
  questionPool: E11_4_CE_EMAIL_19_POOL
}),
readingPoolExercise({
  id: "e11-4-ce-email-20",
  readingText: E11_4_CE_EMAIL_20_TEXT,
  questionPool: E11_4_CE_EMAIL_20_POOL
}),
];

export const E11_4_PE_EMAIL: ExpressPePrompt[] = [

  {
    id: "e11-4-pee-1",
    title: "Préparer son arrivée à l'hôtel",
    situation: "L'hôtel vous demande des informations avant votre arrivée.",
    sourceMessage: {
      from: "Hôtel Bellevue",
      subject: "Votre arrivée",
      body: "Bonjour,\nNous préparons votre séjour.\nÀ quelle heure arrivez-vous samedi ? Avez-vous des demandes particulières ?\nLa réception",
    },
    instruction: "Répondez à l'hôtel : donnez votre heure d'arrivée, demandez une chambre calme et posez une question sur le parking.",
    points: ["Votre heure d'arrivée", "La demande d'une chambre calme", "Une question sur le parking"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-2",
    title: "Décrire ses vacances idéales",
    situation: "Une agence de voyages vous demande vos préférences.",
    sourceMessage: {
      from: "Agence Vacances Soleil",
      subject: "Votre demande de séjour",
      body: "Bonjour,\nMerci pour votre message. Pour vous proposer un séjour, nous avons besoin de quelques informations.\nPréférez-vous la mer ou la montagne ? Quelles sont vos dates ? Quel est votre budget ?\nL'Agence Vacances Soleil",
    },
    instruction: "Répondez à l'agence : dites où vous voulez partir, donnez vos dates de vacances et indiquez votre budget.",
    points: ["La destination souhaitée", "Vos dates", "Votre budget"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-3",
    title: "Partir en vacances ensemble",
    situation: "Une amie vous propose de partir ensemble cet été.",
    sourceMessage: {
      from: "Camille",
      subject: "On part ensemble cet été ?",
      body: "Coucou,\nCet été, je ne veux pas partir seule.\nÇa te dit de partir en vacances avec moi ? Où est-ce qu'on pourrait aller ?\nCamille",
    },
    instruction: "Répondez à Camille : acceptez sa proposition, proposez une destination et expliquez pourquoi ce lieu vous plaît.",
    points: ["Votre accord", "Une destination", "Pourquoi ce lieu"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-4",
    title: "Raconter ses vacances",
    situation: "Votre tante veut des nouvelles de vos vacances.",
    sourceMessage: {
      from: "Tante Marta",
      subject: "Alors, ces vacances ?",
      body: "Bonjour,\nTu es rentré(e) de vacances la semaine dernière, non ?\nC'était comment ? Il a fait beau ? Raconte-moi !\nTante Marta",
    },
    instruction: "Répondez à votre tante : racontez vos vacances, parlez de la météo et décrivez votre meilleur souvenir.",
    points: ["Le récit des vacances", "La météo", "Votre meilleur souvenir"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-5",
    title: "Annuler une réservation",
    situation: "Un hôtel vous demande de confirmer votre réservation.",
    sourceMessage: {
      from: "Hôtel des Alpes",
      subject: "Confirmation demandée",
      body: "Bonjour,\nPouvez-vous confirmer votre réservation du 3 au 8 août ?\nSans réponse de votre part avant vendredi, la chambre sera libérée.\nL'Hôtel des Alpes",
    },
    instruction: "Répondez à l'hôtel : annulez poliment votre réservation, expliquez pourquoi vous ne pouvez pas venir et demandez si l'annulation est sans frais.",
    points: ["L'annulation", "La raison", "Une question sur les frais"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-6",
    title: "Donner des conseils de voyage",
    situation: "Un ami part dans une ville que vous connaissez bien.",
    sourceMessage: {
      from: "Yanis",
      subject: "Conseils pour Lisbonne",
      body: "Salut !\nJe pars à Lisbonne au mois de mai. Tu y es allé(e) l'année dernière, non ?\nQu'est-ce que je dois absolument visiter ? Il fait quel temps en mai ?\nYanis",
    },
    instruction: "Répondez à Yanis : conseillez deux visites à faire, parlez de la météo au mois de mai et recommandez un plat ou un restaurant.",
    points: ["Deux visites", "La météo en mai", "Un plat ou un restaurant"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-7",
    title: "Demander des informations touristiques",
    situation: "L'office du tourisme répond à votre premier message.",
    sourceMessage: {
      from: "Office du tourisme de Montreux",
      subject: "Votre demande d'informations",
      body: "Bonjour,\nMerci pour votre message. Quelles informations souhaitez-vous recevoir ?\nNous pouvons vous envoyer le programme des activités et une liste d'hôtels.\nL'Office du tourisme",
    },
    instruction: "Répondez à l'office du tourisme : donnez les dates de votre séjour, demandez le programme des activités et posez une question sur les hôtels.",
    points: ["Les dates du séjour", "La demande du programme", "Une question sur les hôtels"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-8",
    title: "Changer de programme à cause de la météo",
    situation: "Une amie s'inquiète pour votre week-end de camping.",
    sourceMessage: {
      from: "Léa",
      subject: "Mauvaise météo ce week-end",
      body: "Coucou,\nJ'ai regardé la météo : il va pleuvoir tout le week-end !\nQu'est-ce qu'on fait pour le camping ? On annule ?\nLéa",
    },
    instruction: "Répondez à Léa : proposez un autre programme pour le week-end, expliquez votre idée et rassurez-la.",
    points: ["Un autre programme", "Une explication", "Une phrase pour rassurer"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-9",
    title: "Confirmer une réservation de camping",
    situation: "Le camping vous demande des détails sur votre séjour.",
    sourceMessage: {
      from: "Camping Les Pins",
      subject: "Votre réservation d'emplacement",
      body: "Bonjour,\nNous avons bien reçu votre demande pour un emplacement en août.\nPouvez-vous confirmer vos dates, le nombre de personnes et si vous venez avec une tente ou un camping-car ?\nLe Camping Les Pins",
    },
    instruction: "Répondez au camping : confirmez vos dates, donnez le nombre de personnes et le type de matériel, puis posez une question sur la piscine ou les animaux.",
    points: ["Les dates", "Le nombre de personnes et le matériel", "Une question sur la piscine ou les animaux"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-10",
    title: "Remercier pour les photos de vacances",
    situation: "Un ami vous envoie les photos de vos vacances communes.",
    sourceMessage: {
      from: "Paulo",
      subject: "Photos des vacances",
      body: "Salut !\nJe t'envoie enfin les photos de nos vacances à la mer.\nQuelle belle semaine ! J'espère qu'elles te plaisent.\nPaulo",
    },
    instruction: "Répondez à Paulo : remerciez-le pour les photos, rappelez un bon souvenir de ces vacances et proposez de repartir ensemble l'année prochaine.",
    points: ["Un remerciement", "Un bon souvenir", "Une proposition pour l'année prochaine"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-11",
    title: "Répondre — vacances (11)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1100",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-12",
    title: "Répondre — vacances (12)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1200",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-13",
    title: "Répondre — vacances (13)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1300",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-14",
    title: "Répondre — vacances (14)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1400",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-15",
    title: "Répondre — vacances (15)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1500",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-16",
    title: "Répondre — vacances (16)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1600",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-17",
    title: "Répondre — vacances (17)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1700",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-18",
    title: "Répondre — vacances (18)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1800",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-19",
    title: "Répondre — vacances (19)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 1900",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  },
  {
    id: "e11-4-pee-20",
    title: "Répondre — vacances (20)",
    situation: "Vous avez reçu un e-mail concernant vacances.",
sourceMessage: {
  from: "Service Vacances",
  subject: "Votre demande — référence 2000",
  body: "Bonjour,\nNous avons bien reçu votre message concernant vacances.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
},    instruction: "Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
    points: ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
    minWords: PE_MIN,
    maxWords: PE_MAX,
  }
];
