import type { COAudioGroup } from "./co-audio";
import {
  buildCoPartQuestions,
  buildConversationMatchGrid,
  type COQuestionTask,
  type COMultiQuestion,
} from "./co-questions-helpers";
import { buildBaseConversationImageGrid } from "./co-questions-base-conversation-image-grid";
import { buildScolaireConversationImageGrid } from "./co-questions-scolaire-conversation-image-grid";
import { CO_CONVERSATION_MATCH } from "./co-questions-moyen-conversation-match";
import { CO_CONVERSATION_MATCH_SCOLAIRE_MOYEN } from "./co-questions-scolaire-moyen-conversation-match";
import { buildObjetPickTask } from "./co-questions-objet-pick";
import { CO_QUESTION_POOLS_BASE_MESSAGES } from "./co-questions-base-messages";
import { CO_QUESTION_POOLS_BASE_OTHER } from "./co-questions-base-other";
import { CO_QUESTION_POOLS_MOYEN } from "./co-questions-moyen";
import { CO_QUESTION_POOLS_AVANCE } from "./co-questions-avance";
import { CO_QUESTION_POOLS_AVANCE_EXTRA } from "./co-questions-avance-extra";
import { CO_QUESTION_POOLS_SCOLAIRE_BASE } from "./co-questions-scolaire-base";
import { CO_QUESTION_POOLS_SCOLAIRE_MOYEN } from "./co-questions-scolaire-moyen";

export type {
  COFormatType,
  COImageChoice,
  COMultiQuestion,
  COChoiceTask,
  COFillTask,
  COMatchGridTask,
  COObjectPickTask,
  COObjectPickCard,
  COConversationImageGridTask,
  COQuestionTask,
  RawQ,
} from "./co-questions-helpers";

export { buildPool, buildCoPartQuestions, buildConversationMatchGrid, buildConversationImageGrid, buildObjectPickTask, groupSlug } from "./co-questions-helpers";

export const CO_QUESTION_POOLS: Record<string, COMultiQuestion[]> = {
  ...CO_QUESTION_POOLS_BASE_MESSAGES,
  ...CO_QUESTION_POOLS_BASE_OTHER,
  ...CO_QUESTION_POOLS_MOYEN,
  ...CO_QUESTION_POOLS_AVANCE,
  ...CO_QUESTION_POOLS_AVANCE_EXTRA,
  ...CO_QUESTION_POOLS_SCOLAIRE_BASE,
  ...CO_QUESTION_POOLS_SCOLAIRE_MOYEN,
};

export function getCoPartQuestions(group: COAudioGroup, count: number, seed: string): COQuestionTask[] {
  if (group.level === "base" && group.category === "conversation" && group.source === "public") {
    const grid = buildBaseConversationImageGrid(group.activity, seed, group.items[0]?.audio);
    if (grid) return [grid];
  }
  if (group.level === "base" && group.category === "conversation" && group.source === "scolaire") {
    const grid = buildScolaireConversationImageGrid(group.activity, seed, group.items[0]?.audio);
    if (grid) return [grid];
  }
  const matchDef = CO_CONVERSATION_MATCH[group.id] ?? CO_CONVERSATION_MATCH_SCOLAIRE_MOYEN[group.id];
  if (matchDef) {
    return [buildConversationMatchGrid(matchDef.situations, matchDef.correctByDialogue, seed)];
  }
  const objetPick = buildObjetPickTask(group.id);
  if (objetPick) {
    return [objetPick];
  }
  const pool = CO_QUESTION_POOLS[group.id] ?? [];
  return buildCoPartQuestions(group, pool, count, seed);
}
