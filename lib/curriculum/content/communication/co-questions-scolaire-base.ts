import { buildPool, type COMultiQuestion } from "./co-questions-helpers";
import { SCOLAIRE_ANNONCES_BOOK, SCOLAIRE_MESSAGES_BOOK, SCOLAIRE_RADIOS_BOOK } from "./co-questions-scolaire-messages";

/** Pools QCM / saisie — CO base scolaire (généré depuis transcriptions). */

const SCOLAIRE_RADIO_39 = buildPool("base", "scolaire-radio-39", [
  {
    id: "sr39-r", textQ: "Parle-t-on de nourriture ?", text: ["Oui", "Non", "De transport"], textC: 0,
    img: ["Oui", "Non", "De transport"], imgC: 0,
    fillQ: "Réponse : ___", fill: "oui", fillA: ["oui"],
  },
  {
    id: "sr39-p", textQ: "Quel prix est mentionné ?", text: ["5 euros", "50 euros", "12 euros"], textC: 2,
    img: ["5 euros", "50 euros", "12 euros"], imgC: 2,
    fillQ: "Prix : ___", fill: "12", fillA: ["12"],
  },
  {
    id: "sr39-g", textQ: "Il s'agit d'une émission de…", text: ["Télévision", "Cinéma", "Radio"], textC: 2,
    img: ["Télévision", "Cinéma", "Radio"], imgC: 2,
    fillQ: "C'est à la ___ .", fill: "radio", fillA: ["radio"],
  }
]);

export const CO_QUESTION_POOLS_SCOLAIRE_BASE: Record<string, COMultiQuestion[]> = {
  ...SCOLAIRE_ANNONCES_BOOK,
  ...SCOLAIRE_MESSAGES_BOOK,
  ...SCOLAIRE_RADIOS_BOOK,
  "base-scolaire-radio-39": SCOLAIRE_RADIO_39,
};
