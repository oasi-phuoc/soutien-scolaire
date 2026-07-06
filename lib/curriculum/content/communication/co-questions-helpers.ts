import { ceCoImageSource, isImageableLabel, resolveWordImage } from "../../word-image-resolver";
import { hashSeedString, seededShuffle as shuffleWithSeed } from "@/lib/placement/progressive-pick";
import type { COAudioGroup } from "./co-audio";

export type COFormatType = "text" | "image" | "fill";

export type COImageChoice = { label: string; image: string };

export type COMultiQuestion = {
  id: string;
  textQ: string;
  textChoices: [string, string, string];
  textCorrect: number;
  imageQ: string;
  imageChoices: [COImageChoice, COImageChoice, COImageChoice];
  imageCorrect: number;
  fillQ: string;
  fillAnswer: string;
  fillAccept?: string[];
};

export type COChoiceTask = {
  kind: "choice";
  prompt: string;
  choices: { label: string; image?: string }[];
  correct: number;
  image?: boolean;
};

export type COFillTask = {
  kind: "fill";
  prompt: string;
  answer: string;
  accept?: string[];
};

export type COMatchGridTask = {
  kind: "match_grid";
  prompt: string;
  situations: string[];
  columnLabels: [string, string, string, string];
  weights: [number, number, number, number];
  correctByColumn: [number, number, number, number];
};

export type COObjectPickCard = {
  label: string;
  image?: string;
  /** L'objet est-il mentionné dans l'audio ? */
  heard: boolean;
};

export type COObjectPickTask = {
  kind: "object_pick";
  prompt: string;
  cards: [COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard];
};

export type COConversationImageGridCard = {
  suffix: "a" | "b" | "c" | "d" | "e" | "f";
  image: string;
};

export type COConversationImageGridTask = {
  kind: "conversation_image_grid";
  activity: string;
  prompt: string;
  audio: string;
  cards: [
    COConversationImageGridCard,
    COConversationImageGridCard,
    COConversationImageGridCard,
    COConversationImageGridCard,
    COConversationImageGridCard,
    COConversationImageGridCard,
  ];
  /** 0 = leurre (aucun dialogue), 1–4 = numéro du dialogue */
  correctByCard: [number, number, number, number, number, number];
};

export type COQuestionTask =
  | COChoiceTask
  | COFillTask
  | COMatchGridTask
  | COObjectPickTask
  | COConversationImageGridTask;

export type RawQ = {
  id: string;
  textQ: string;
  text: [string, string, string];
  textC: number;
  imgQ?: string;
  img: [string, string, string];
  imgC: number;
  fillQ: string;
  fill: string;
  fillA?: string[];
};

/** Réponses attendues qui sont un prénom, nom de famille, ville, commerce, etc. */
function isProperNameAnswer(value: string): boolean {
  const answer = value.trim();
  if (/^(Le |La |Les |L'|Un |Une |Des |Du |De la )/i.test(answer)) return false;
  if (/^[A-ZÀ-Ü][a-zà-ü]+ [A-ZÀ-Ü][a-zà-ü]/.test(answer)) return true;
  if (/^[A-ZÀ-Ü][a-zà-üéèêëïîôùûüç\-']+$/.test(answer)) {
    const notNames = new Set([
      "Midi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Nouveau",
      "Document",
    ]);
    if (!notNames.has(answer)) return true;
  }
  return false;
}

/** Questions demandant un nom de personne, ville, commerce, etc. — exclues de CE/CO. */
export function isExcludedNameQuestion(item: Pick<RawQ, "textQ" | "text" | "textC" | "fill">): boolean {
  const textQ = item.textQ;
  const correctChoice = item.text[item.textC] ?? "";
  const fillAnswer = item.fill;

  if (/^comment s['']appelle/i.test(textQ)) {
    return isProperNameAnswer(fillAnswer) || isProperNameAnswer(correctChoice);
  }
  if (/^quelle ville/i.test(textQ)) return true;
  if (/^d['']où revient/i.test(textQ)) return true;
  if (/^qui (laisse|appelle)\b/i.test(textQ)) return true;
  if (/^qui /i.test(textQ)) {
    if (isProperNameAnswer(correctChoice) || isProperNameAnswer(fillAnswer)) return true;
    if (item.text.length > 0 && item.text.every(isProperNameAnswer)) return true;
  }
  return false;
}

function hashSeed(seed: string): number {
  return hashSeedString(seed) || 1;
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  return shuffleWithSeed(items, seed);
}

function img(_level: string, _groupSlug: string, _qId: string, _suffix: string, label: string): COImageChoice {
  if (isImageableLabel(label)) {
    const dedicated = resolveWordImage(label);
    if (dedicated) return { label, image: dedicated };
  }
  return { label, image: "" };
}

export function buildPool(level: string, groupSlug: string, items: RawQ[]): COMultiQuestion[] {
  return items.filter((item) => !isExcludedNameQuestion(item)).map((item) => ({
    id: item.id,
    textQ: item.textQ,
    textChoices: item.text,
    textCorrect: item.textC,
    imageQ: item.imgQ ?? item.textQ,
    imageChoices: [
      img(level, groupSlug, item.id, "a", item.img[0]),
      img(level, groupSlug, item.id, "b", item.img[1]),
      img(level, groupSlug, item.id, "c", item.img[2]),
    ],
    imageCorrect: item.imgC,
    fillQ: item.fillQ,
    fillAnswer: item.fill,
    fillAccept: item.fillA,
  }));
}

function multiToTask(q: COMultiQuestion, format: COFormatType): COQuestionTask {
  if (format === "fill") {
    return { kind: "fill", prompt: q.textQ, answer: q.fillAnswer, accept: q.fillAccept };
  }
  if (format === "image") {
    return {
      kind: "choice",
      prompt: q.imageQ,
      choices: q.imageChoices.map((c) => ({ label: c.label, image: c.image })),
      correct: q.imageCorrect,
      image: true,
    };
  }
  return {
    kind: "choice",
    prompt: q.textQ,
    choices: q.textChoices.map((label) => ({ label })),
    correct: q.textCorrect,
  };
}

const FORMATS: COFormatType[] = ["text", "image", "fill"];

export function assertConversationMatchDef(
  situations: readonly string[],
  correctByDialogue: readonly string[],
  id?: string,
) {
  const prefix = id ? `match grid (${id})` : "match grid";
  if (situations.length !== 6) {
    throw new Error(`${prefix}: attendu 6 situations, trouvé ${situations.length}`);
  }
  if (correctByDialogue.length !== 4) {
    throw new Error(`${prefix}: attendu 4 réponses, trouvé ${correctByDialogue.length}`);
  }
  const used = new Set(correctByDialogue);
  if (used.size !== 4) {
    throw new Error(`${prefix}: les 4 dialogues doivent correspondre à 4 situations distinctes`);
  }
  if (correctByDialogue.some((label) => !situations.includes(label))) {
    throw new Error(`${prefix}: une réponse correcte n'est pas dans la liste des situations`);
  }
  const distractorCount = situations.filter((label) => !used.has(label)).length;
  if (distractorCount !== 2) {
    throw new Error(`${prefix}: attendu 2 situations leurre, trouvé ${distractorCount}`);
  }
}

export function buildConversationMatchGrid(
  situations: [string, string, string, string, string, string],
  correctByDialogue: [string, string, string, string],
  seed: string,
): COMatchGridTask {
  assertConversationMatchDef(situations, correctByDialogue);

  const shuffled = seededShuffle(
    situations.map((label, index) => ({ label, index })),
    seed,
  );
  const shuffledLabels = shuffled.map((entry) => entry.label);
  const correctByColumn = correctByDialogue.map((label) => shuffledLabels.indexOf(label)) as [
    number,
    number,
    number,
    number,
  ];

  return {
    kind: "match_grid",
    prompt:
      "Vous écoutez 4 dialogues. Cochez pour associer chaque dialogue à la situation correspondante. " +
      "Attention : il y a 6 situations, mais seulement 4 dialogues.",
    situations: shuffledLabels,
    columnLabels: ["1", "2", "3", "4"],
    weights: [1.5, 1.5, 2, 2],
    correctByColumn,
  };
}

const CONVERSATION_IMAGE_SUFFIXES = ["a", "b", "c", "d", "e", "f"] as const;

export function assertConversationImageGridDef(
  correctByCard: readonly number[],
  id?: string,
) {
  const prefix = id ? `conversation image grid (${id})` : "conversation image grid";
  if (correctByCard.length !== 6) {
    throw new Error(`${prefix}: attendu 6 cartes, trouvé ${correctByCard.length}`);
  }
  const used = correctByCard.filter((value) => value > 0);
  if (used.length !== 4) {
    throw new Error(`${prefix}: attendu 4 dialogues associés, trouvé ${used.length}`);
  }
  if (new Set(used).size !== 4) {
    throw new Error(`${prefix}: chaque dialogue 1–4 doit être utilisé une seule fois`);
  }
  if (![1, 2, 3, 4].every((dialogue) => used.includes(dialogue))) {
    throw new Error(`${prefix}: les dialogues 1, 2, 3 et 4 doivent tous être présents`);
  }
  if (correctByCard.filter((value) => value === 0).length !== 2) {
    throw new Error(`${prefix}: attendu 2 images leurre, trouvé ${correctByCard.filter((value) => value === 0).length}`);
  }
}

export function buildConversationImageGrid(
  activity: string,
  correctByCard: [number, number, number, number, number, number],
): COConversationImageGridTask {
  assertConversationImageGridDef(correctByCard, activity);
  const cards = CONVERSATION_IMAGE_SUFFIXES.map((suffix, index) => ({
    suffix,
    image: `/expression/co/base/public/conversation-${activity}-${suffix}.webp`,
    correct: correctByCard[index]!,
  }));
  const cardViews = cards.map(({ suffix, image }) => ({ suffix, image })) as COConversationImageGridTask["cards"];
  const answers = cards.map((entry) => entry.correct) as COConversationImageGridTask["correctByCard"];

  return {
    kind: "conversation_image_grid",
    activity,
    prompt:
      "Écoutez les 4 dialogues. Pour chaque image, choisissez le numéro du dialogue correspondant " +
      "(1, 2, 3 ou 4). Deux images ne correspondent à aucun dialogue : laissez « — ».",
    audio: `/expression/co/base/public/conversation-${activity}.mp3`,
    cards: cardViews,
    correctByCard: answers,
  };
}

export function buildObjectPickTask(
  cards: [COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard, COObjectPickCard],
): COObjectPickTask {
  if (cards.length !== 5) {
    throw new Error("object pick: attendu 5 cartes");
  }
  return {
    kind: "object_pick",
    prompt: "Écoutez l'enregistrement. Cliquez sur les objets que vous entendez (ne cliquez pas sur les autres).",
    cards,
  };
}

export function buildCoPartQuestions(
  group: COAudioGroup,
  pool: COMultiQuestion[],
  count: number,
  seed: string,
): COQuestionTask[] {
  if (!pool.length || count <= 0) return [];

  const shuffled = seededShuffle(pool, seed);
  const selected = shuffled.slice(0, Math.min(count, pool.length));

  return selected.map((q, index) => {
    // The "QCM image" format is only offered when the 3 options are genuinely
    // illustrable (object, clock/time or price). Otherwise (prénoms, villes,
    // pays, nombres, dates…) only text and fill formats are used.
    const imageable = q.imageChoices.every((c) => !!ceCoImageSource(c.image, c.label));
    const formats = imageable ? FORMATS : FORMATS.filter((f) => f !== "image");
    const format = formats[hashSeed(`${seed}-${q.id}-${index}`) % formats.length]!;
    return multiToTask(q, format);
  });
}

export function groupSlug(group: COAudioGroup): string {
  return `${group.category}-${group.activity}`;
}
