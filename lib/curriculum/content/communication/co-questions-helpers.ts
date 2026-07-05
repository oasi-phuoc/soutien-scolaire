import { resolveWordImage, isImageableLabel } from "../../word-image-resolver";
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

export type COImageMatchCard = {
  image: string;
  label: string;
  /** Numéro du dialogue correspondant (1..N), ou null pour un leurre. */
  correct: number | null;
};

export type COImageMatchTask = {
  kind: "image_match";
  prompt: string;
  dialogues: number;
  cards: COImageMatchCard[];
};

export type COQuestionTask = COChoiceTask | COFillTask | COMatchGridTask | COObjectPickTask | COImageMatchTask;

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

function hashSeed(seed: string): number {
  let n = 0;
  for (const char of seed) n += char.charCodeAt(0);
  return n;
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  const arr = [...items];
  let h = hashSeed(seed) || 1;
  for (let i = arr.length - 1; i > 0; i--) {
    h = (h * 1664525 + 1013904223) % 2147483647;
    const j = h % (i + 1);
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

function img(level: string, groupSlug: string, qId: string, suffix: string, label: string): COImageChoice {
  return { label, image: `/expression/co/${level}/${groupSlug}/${qId}-${suffix}.png` };
}

export function buildPool(level: string, groupSlug: string, items: RawQ[]): COMultiQuestion[] {
  return items.map((item) => ({
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
    return { kind: "fill", prompt: q.fillQ, answer: q.fillAnswer, accept: q.fillAccept };
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
  // Link any card without a curated image to a matching illustration in
  // vocabulaire / lecture (falls back to the label text when none exists).
  const linked = cards.map((card) => ({
    ...card,
    image: card.image ?? resolveWordImage(card.label) ?? undefined,
  })) as typeof cards;
  return {
    kind: "object_pick",
    prompt: "Écoutez l'enregistrement. Cliquez sur les objets que vous entendez (ne cliquez pas sur les autres).",
    cards: linked,
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
    const imageable = q.imageChoices.every((c) => isImageableLabel(c.label));
    const formats = imageable ? FORMATS : FORMATS.filter((f) => f !== "image");
    const format = formats[hashSeed(`${seed}-${q.id}-${index}`) % formats.length]!;
    return multiToTask(q, format);
  });
}

export function groupSlug(group: COAudioGroup): string {
  return `${group.category}-${group.activity}`;
}
