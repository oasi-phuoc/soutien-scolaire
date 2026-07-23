import { ceCoImageSource, isCeCoImageableLabel, isPriceRange, isSinglePrice, resolveCeCoWordImage } from "../../word-image-resolver";
import { seededShuffle as shuffleWithSeed } from "@/lib/placement/progressive-pick";
import { pickCoQuestionFormat, pickCoScolaireAvanceQuestionFormat } from "./ce-co-question-formats";
import { hasBlockedImageChoices, isExcludedCeCoQuestion } from "./ce-co-question-filters";
import type { COAudioGroup } from "./co-audio";

export type COFormatType = "text" | "image" | "fill";
export type COFillMode = "stem" | "full";

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
  /** Question identique au QCM texte. */
  prompt: string;
  answer: string;
  accept?: string[];
  /** Base : phrase amorcée avec mot manquant ; moyen : phrase complète. */
  fillMode: COFillMode;
  /** Phrase amorcée (base uniquement), ex. « Le train part à 8 h _________. » */
  stem?: string;
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

export type COImageMatchCard = {
  image: string;
  label: string;
  /** Numéro du dialogue (1–4), ou null pour une image leurre */
  correct: number | null;
};

export type COImageMatchTask = {
  kind: "image_match";
  prompt: string;
  dialogues: number;
  cards: COImageMatchCard[];
};

export type COQuestionTask =
  | COChoiceTask
  | COFillTask
  | COMatchGridTask
  | COObjectPickTask
  | COConversationImageGridTask
  | COImageMatchTask;

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
export { isProperNameAnswer, isExcludedCeCoQuestion as isExcludedNameQuestion } from "./ce-co-question-filters";

function supportsImageFormat(choices: { label: string; image: string }[]): boolean {
  if (choices.some((c) => isSinglePrice(c.label) || isPriceRange(c.label))) return false;
  if (hasBlockedImageChoices(choices.map((c) => c.label))) return false;
  return choices.every((c) => !!ceCoImageSource(c.image, c.label));
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  return shuffleWithSeed(items, seed);
}

/** Mélange les choix QCM et recalcule l’index de la bonne réponse. */
function shuffleChoiceTask<T extends { label: string; image?: string }>(
  choices: T[],
  correct: number,
  seed: string,
): { choices: T[]; correct: number } {
  const indexed = choices.map((c, i) => ({ c, i }));
  const shuffled = shuffleWithSeed(indexed, seed);
  return {
    choices: shuffled.map((x) => x.c),
    correct: shuffled.findIndex((x) => x.i === correct),
  };
}

function img(_level: string, _groupSlug: string, _qId: string, _suffix: string, label: string): COImageChoice {
  if (isCeCoImageableLabel(label)) {
    const dedicated = resolveCeCoWordImage(label);
    if (dedicated) return { label, image: dedicated };
  }
  return { label, image: "" };
}

export function buildPool(level: string, groupSlug: string, items: RawQ[]): COMultiQuestion[] {
  return items.filter((item) => !isExcludedCeCoQuestion(item)).map((item) => ({
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

function multiToTask(
  q: COMultiQuestion,
  format: COFormatType,
  fillMode: COFillMode,
  seed: string,
): COQuestionTask {
  if (format === "fill") {
    return {
      kind: "fill",
      prompt: q.textQ,
      stem: fillMode === "stem" ? q.fillQ : undefined,
      fillMode,
      answer: q.fillAnswer,
      accept: q.fillAccept,
    };
  }
  if (format === "image") {
    const withVariants = q.imageChoices.map((c, i) => ({
      label: c.label,
      image: ceCoImageSource(c.image, c.label, `${seed}-img-${i}`) ?? c.image,
    }));
    const shuffled = shuffleChoiceTask(withVariants, q.imageCorrect, `${seed}-choices`);
    return {
      kind: "choice",
      prompt: q.imageQ,
      choices: shuffled.choices,
      correct: shuffled.correct,
      image: true,
    };
  }
  const textChoices = q.textChoices.map((label) => ({ label }));
  const shuffled = shuffleChoiceTask(textChoices, q.textCorrect, `${seed}-choices`);
  return {
    kind: "choice",
    prompt: q.textQ,
    choices: shuffled.choices,
    correct: shuffled.correct,
  };
}

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

function conversationImagePath(imageDir: string, activity: string, suffix: string): string {
  return `${imageDir}/conversation-${activity}-${suffix}.webp`;
}

export function buildConversationImageGrid(
  activity: string,
  correctByCard: [number, number, number, number, number, number],
  seed: string,
  audio?: string,
  imageDir = "/assets/expression/images/scene",
): COConversationImageGridTask {
  assertConversationImageGridDef(correctByCard, activity);
  const entries = CONVERSATION_IMAGE_SUFFIXES.map((suffix, index) => ({
    suffix,
    image: conversationImagePath(imageDir, activity, suffix),
    correct: correctByCard[index]!,
  }));
  const shuffled = seededShuffle(entries, seed);
  const cardViews = shuffled.map(({ suffix, image }) => ({ suffix, image })) as COConversationImageGridTask["cards"];
  const answers = shuffled.map((entry) => entry.correct) as COConversationImageGridTask["correctByCard"];

  return {
    kind: "conversation_image_grid",
    activity,
    prompt:
      "Écoutez les 4 dialogues. Pour chaque image, choisissez le numéro du dialogue correspondant " +
      "(1, 2, 3 ou 4). Deux images ne correspondent à aucun dialogue : laissez « — ».",
    audio: audio ?? `/assets/expression/co/base/public/conversation-${activity}.mp3`,
    cards: cardViews,
    correctByCard: answers,
  };
}

export function buildImageMatchTask(cards: COImageMatchCard[], seed: string, dialogues = 4): COImageMatchTask {
  const shuffled = seededShuffle(cards, seed);
  return {
    kind: "image_match",
    prompt:
      `Vous allez entendre ${dialogues} petits dialogues. Sous chaque image, choisissez le numéro du dialogue correspondant. ` +
      `Attention : il y a ${cards.length} images, mais ${dialogues} dialogues seulement.`,
    dialogues,
    cards: shuffled,
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

function isScolaireAvanceGroup(group: COAudioGroup): boolean {
  return group.source === "scolaire" && group.level === "avance";
}

export function buildCoPartQuestions(
  group: COAudioGroup,
  pool: COMultiQuestion[],
  count: number,
  seed: string,
  fillMode: COFillMode = group.level === "moyen" ? "full" : "stem",
): COQuestionTask[] {
  if (!pool.length || count <= 0) return [];

  const scolaireAvance = isScolaireAvanceGroup(group);
  const selected = scolaireAvance
    ? pool.slice(0, Math.min(count, pool.length))
    : seededShuffle(pool, seed).slice(0, Math.min(count, pool.length));

  return selected.map((q, index) => {
    const imageable = supportsImageFormat(q.imageChoices);
    const format = scolaireAvance
      ? pickCoScolaireAvanceQuestionFormat(index)
      : pickCoQuestionFormat(index, seed, q.id, imageable);
    return multiToTask(q, format, fillMode, `${seed}-${q.id}-${index}`);
  });
}

export function groupSlug(group: COAudioGroup): string {
  return `${group.category}-${group.activity}`;
}
