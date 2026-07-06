import { buildConversationImageGrid } from "./co-questions-helpers";

/**
 * Association image ↔ dialogue pour chaque activité conversation CO base.
 *
 * Fichiers : public/expression/co/base/public/conversation-{activité}-{a|b|c|d|e|f}.webp
 * Audio    : public/expression/co/base/public/conversation-{activité}.mp3
 *
 * Chaque lettre (a–f) a une image fixe qui illustre un dialogue de l'audio.
 * correctByCard[i] = numéro du dialogue (1–4) ou 0 (leurre « — ») pour la lettre a+i.
 */
const CORRECT_BY_CARD: Record<string, [number, number, number, number, number, number]> = {
  "1": [1, 3, 0, 2, 4, 0],
  "2": [2, 0, 4, 1, 0, 3],
  "3": [0, 1, 3, 0, 4, 2],
  "4": [3, 0, 1, 0, 4, 2],
  "5": [4, 2, 0, 3, 1, 0],
  "6": [1, 0, 3, 4, 0, 2],
  "7": [2, 4, 1, 0, 3, 0],
  "8": [0, 3, 0, 1, 4, 2],
};

export function buildBaseConversationImageGrid(activity: string) {
  const mapping = CORRECT_BY_CARD[activity];
  if (!mapping) return null;
  return buildConversationImageGrid(activity, mapping);
}
