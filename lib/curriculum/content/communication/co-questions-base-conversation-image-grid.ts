import { buildConversationImageGrid } from "./co-questions-helpers";

/**
 * Association image ↔ dialogue pour chaque activité conversation CO base.
 * Chaque entrée : 6 cartes (a–f), valeurs 1–4 = dialogue correspondant, 0 = leurre.
 * À valider visuellement avec les images et les audios.
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
