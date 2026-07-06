import type { COAudioCategory, COAudioGroup, COAudioItem, COLevel } from "./co-audio";
import { CO_TRANSCRIPTS_SCOLAIRE_BASE } from "./co-transcripts-scolaire-base";
import { CO_QUESTION_POOLS_SCOLAIRE_BASE } from "./co-questions-scolaire-base";

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
    transcript: CO_TRANSCRIPTS_SCOLAIRE_BASE[stem],
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

/** Groupes audio scolaire CO base (numérotation globale des exercices). */
export const CO_AUDIO_GROUPS_SCOLAIRE_BASE: COAudioGroup[] = [
  ...scolaireGroups("base", "message", ["1", "2", "3", "4", "6", "7", "8", "9", "11", "13", "14", "15", "16", "17", "19", "20"], "message"),
  ...scolaireGroups("base", "objet", ["5", "10", "12", "18"], "objet"),
  ...scolaireGroups("base", "annonce", ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], "annonce"),
  ...scolaireGroups("base", "radio", ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40"], "radio"),
  ...scolaireGroups("base", "conversation", ["41", "42", "43", "44", "45", "46"], "conversation"),
];

/** Groupes scolaire prêts pour le tirage (questions / grilles configurées). */
export const SCOLAIRE_PLAYABLE_GROUP_IDS = new Set<string>([
  ...Object.keys(CO_QUESTION_POOLS_SCOLAIRE_BASE),
  "base-scolaire-objet-5",
  "base-scolaire-objet-10",
  "base-scolaire-objet-12",
  "base-scolaire-objet-18",
]);
