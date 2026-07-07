import type { COAudioCategory, COAudioGroup, COAudioItem, COLevel } from "./co-audio";
import { CO_TRANSCRIPTS_SCOLAIRE_MOYEN } from "./co-transcripts-scolaire-moyen";
import { CO_QUESTION_POOLS_SCOLAIRE_MOYEN } from "./co-questions-scolaire-moyen";
import { CO_CONVERSATION_MATCH_SCOLAIRE_MOYEN } from "./co-questions-scolaire-moyen-conversation-match";

function scolaireItem(
  level: COLevel,
  category: COAudioCategory,
  activity: string,
  filename: string,
): COAudioItem {
  const stem = filename.replace(/\.mp3$/, "");
  return {
    id: `${level}-scolaire-${category}-${activity}`,
    level,
    category,
    activity,
    source: "scolaire",
    audio: `/assets/expression/co/${level}/scolaire/${filename}`,
    transcript: CO_TRANSCRIPTS_SCOLAIRE_MOYEN[stem],
  };
}

function scolaireGroup(
  level: COLevel,
  category: COAudioCategory,
  activity: string,
  filename: string,
): COAudioGroup {
  return {
    id: `${level}-scolaire-${category}-${activity}`,
    level,
    category,
    activity,
    source: "scolaire",
    items: [scolaireItem(level, category, activity, filename)],
  };
}

function scolaireGroups(
  level: COLevel,
  category: COAudioCategory,
  nums: string[],
  prefix: string,
): COAudioGroup[] {
  return nums.map((n) => scolaireGroup(level, category, n, `${prefix}-${n}.mp3`));
}

/** Groupes audio scolaire CO moyen / A2 (numérotation globale des exercices). */
export const CO_AUDIO_GROUPS_SCOLAIRE_MOYEN: COAudioGroup[] = [
  ...scolaireGroups("moyen", "message", ["41", "42", "43", "44", "45", "47", "48", "49"], "message"),
  ...scolaireGroups("moyen", "annonce", ["36", "37", "38", "39", "40", "46"], "annonce"),
  ...scolaireGroups("moyen", "radio", ["34", "35", "50", "51", "52", "53", "54", "55"], "radio"),
  ...scolaireGroups(
    "moyen",
    "conversation",
    ["1", "6", "8", "12", "15", "18", "20", "22", "25", "29", "30", "32", "33"],
    "conversation",
  ),
];

/** Groupes scolaire moyen prêts pour le tirage (questions configurées). */
export const SCOLAIRE_PLAYABLE_GROUP_IDS_MOYEN = new Set<string>([
  ...Object.keys(CO_QUESTION_POOLS_SCOLAIRE_MOYEN),
  ...Object.keys(CO_CONVERSATION_MATCH_SCOLAIRE_MOYEN),
]);
