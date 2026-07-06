import type { COMultiQuestion } from "./co-questions-helpers";
import { SCOLAIRE_ANNONCES_BOOK, SCOLAIRE_MESSAGES_BOOK, SCOLAIRE_RADIOS_BOOK } from "./co-questions-scolaire-messages";

/** Pools QCM / saisie — CO base scolaire (questions du livre + grilles conversation). */

export const CO_QUESTION_POOLS_SCOLAIRE_BASE: Record<string, COMultiQuestion[]> = {
  ...SCOLAIRE_ANNONCES_BOOK,
  ...SCOLAIRE_MESSAGES_BOOK,
  ...SCOLAIRE_RADIOS_BOOK,
};
