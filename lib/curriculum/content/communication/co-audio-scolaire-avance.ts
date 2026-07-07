import type { COAudioCategory, COAudioGroup, COAudioItem, COLevel } from "./co-audio";
import { CO_TRANSCRIPTS_SCOLAIRE_AVANCE } from "./co-transcripts-scolaire-avance";
import { CO_QUESTION_POOLS_SCOLAIRE_AVANCE } from "./co-questions-scolaire-avance";

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
    transcript: CO_TRANSCRIPTS_SCOLAIRE_AVANCE[stem],
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

/** Groupes audio scolaire CO avance / B1 (numérotation globale des exercices). */
export const CO_AUDIO_GROUPS_SCOLAIRE_AVANCE: COAudioGroup[] = [
  ...scolaireGroups("avance", "annonce", ["30", "31", "32", "33", "34", "35", "36"], "annonce"),
  ...scolaireGroups(
    "avance",
    "conversation",
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    "conversation",
  ),
  ...scolaireGroups(
    "avance",
    "radio",
    ["15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
    "radio",
  ),
];

/** Groupes scolaire avance prêts pour le tirage (questions configurées). */
export const SCOLAIRE_PLAYABLE_GROUP_IDS_AVANCE = new Set<string>([
  ...Object.keys(CO_QUESTION_POOLS_SCOLAIRE_AVANCE),
]);
