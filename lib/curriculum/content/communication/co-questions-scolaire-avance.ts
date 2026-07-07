import type { COMultiQuestion } from "./co-questions-helpers";
import { SCOLAIRE_AVANCE_CONVERSATIONS_BOOK } from "./co-questions-scolaire-avance-conversations";

/** Nombre de questions par audio — CO avancé scolaire / B1. */
export const CO_SCOLAIRE_AVANCE_QUESTIONS_PER_AUDIO = 12;

/** Pools QCM texte / saisie — CO avancé scolaire / B1. */
export const CO_QUESTION_POOLS_SCOLAIRE_AVANCE: Record<string, COMultiQuestion[]> = {
  ...SCOLAIRE_AVANCE_CONVERSATIONS_BOOK,
};
