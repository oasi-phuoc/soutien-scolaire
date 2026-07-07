import type { COMultiQuestion } from "./co-questions-helpers";
import { SCOLAIRE_MOYEN_ANNONCES_BOOK } from "./co-questions-scolaire-moyen-annonces";
import { SCOLAIRE_MOYEN_MESSAGES_BOOK } from "./co-questions-scolaire-moyen-messages";
import { SCOLAIRE_MOYEN_RADIOS_BOOK } from "./co-questions-scolaire-moyen-radios";

/** Pools QCM / saisie — CO moyen scolaire / A2. */

export const CO_QUESTION_POOLS_SCOLAIRE_MOYEN: Record<string, COMultiQuestion[]> = {
  ...SCOLAIRE_MOYEN_MESSAGES_BOOK,
  ...SCOLAIRE_MOYEN_ANNONCES_BOOK,
  ...SCOLAIRE_MOYEN_RADIOS_BOOK,
};
