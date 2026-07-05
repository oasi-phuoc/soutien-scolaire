import type { COAudioGroup } from "./co-audio";
import {
  buildCoPartQuestions,
  buildConversationMatchGrid,
  type COQuestionTask,
  type COMultiQuestion,
} from "./co-questions-helpers";
import { CO_CONVERSATION_MATCH } from "./co-questions-moyen-conversation-match";
import { buildConversationImageMatch } from "./co-conversation-image-match";
import { buildObjetPickTask } from "./co-questions-objet-pick";
import { CO_QUESTION_POOLS_BASE_MESSAGES } from "./co-questions-base-messages";
import { CO_QUESTION_POOLS_BASE_OTHER } from "./co-questions-base-other";
import { CO_QUESTION_POOLS_MOYEN } from "./co-questions-moyen";
import { CO_QUESTION_POOLS_AVANCE } from "./co-questions-avance";
import { CO_QUESTION_POOLS_AVANCE_EXTRA } from "./co-questions-avance-extra";

export type {
  COFormatType,
  COImageChoice,
  COMultiQuestion,
  COChoiceTask,
  COFillTask,
  COMatchGridTask,
  COObjectPickTask,
  COObjectPickCard,
  COQuestionTask,
  RawQ,
} from "./co-questions-helpers";

export { buildPool, buildCoPartQuestions, buildConversationMatchGrid, buildObjectPickTask, groupSlug } from "./co-questions-helpers";

export const CO_QUESTION_POOLS: Record<string, COMultiQuestion[]> = {
  ...CO_QUESTION_POOLS_BASE_MESSAGES,
  ...CO_QUESTION_POOLS_BASE_OTHER,
  ...CO_QUESTION_POOLS_MOYEN,
  ...CO_QUESTION_POOLS_AVANCE,
  ...CO_QUESTION_POOLS_AVANCE_EXTRA,
};

export function getCoPartQuestions(group: COAudioGroup, count: number, seed: string): COQuestionTask[] {
  const matchDef = CO_CONVERSATION_MATCH[group.id];
  if (matchDef) {
    // Nouvelle activité illustrée (grille d'images + listes déroulantes) quand
    // toutes les situations ont une illustration ; sinon, ancien tableau.
    const imageMatch = buildConversationImageMatch(matchDef, seed);
    if (imageMatch) return [imageMatch];
    return [buildConversationMatchGrid(matchDef.situations, matchDef.correctByDialogue, seed)];
  }
  const objetPick = buildObjetPickTask(group.id);
  if (objetPick) {
    return [objetPick];
  }
  const pool = CO_QUESTION_POOLS[group.id] ?? [];
  return buildCoPartQuestions(group, pool, count, seed);
}
