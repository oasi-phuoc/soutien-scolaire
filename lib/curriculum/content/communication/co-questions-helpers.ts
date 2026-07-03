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

export type COQuestionTask = COChoiceTask | COFillTask;

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
    const format = FORMATS[hashSeed(`${seed}-${q.id}-${index}`) % FORMATS.length]!;
    return multiToTask(q, format);
  });
}

export function groupSlug(group: COAudioGroup): string {
  return `${group.category}-${group.activity}`;
}
