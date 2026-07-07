import type { COMultiQuestion } from "./co-questions-helpers";
import { SCOLAIRE_AVANCE_ANNONCES_BOOK } from "./co-questions-scolaire-avance-annonces";
import { SCOLAIRE_AVANCE_CONVERSATIONS_BOOK } from "./co-questions-scolaire-avance-conversations";
import { SCOLAIRE_AVANCE_RADIOS_BOOK } from "./co-questions-scolaire-avance-radios";

/** Nombre de questions par audio — CO avancé scolaire / B1. */
export const CO_SCOLAIRE_AVANCE_QUESTIONS_PER_AUDIO = 15;

/** Pools QCM texte / saisie — CO avancé scolaire / B1. */
export const CO_QUESTION_POOLS_SCOLAIRE_AVANCE: Record<string, COMultiQuestion[]> = {
  ...SCOLAIRE_AVANCE_ANNONCES_BOOK,
  ...SCOLAIRE_AVANCE_CONVERSATIONS_BOOK,
  ...SCOLAIRE_AVANCE_RADIOS_BOOK,
};
