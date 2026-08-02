import {
  listeningPoolExercise,
  type CommunicationLesson,
  type CommunicationTheoryBlock,
  type ExpressTrans,
} from "./express-types";
import {
  buildExpressPool,
  type ExpressMultiQuestion,
  type ExpressRawQ,
} from "./express-listening-helpers";

export type ExpressListeningAudio = {
  id: string;
  audioSrc: string;
  audioLabel: string;
  transcript: string;
  instruction: string;
  pool: ExpressMultiQuestion[];
  questionCount: number;
};

export const A1 = (n: string | number) =>
  `/assets/expression/communication/A1/${String(n).padStart(3, "0")}.mp3`;
export const A2 = (n: string | number) =>
  `/assets/expression/communication/A2/${String(n).padStart(3, "0")}.mp3`;

/** Formate une transcription : chaque réplique `- …` sur sa ligne. */
export function formatDialogueTranscript(raw: string): string {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/\s*-\s+/g, "\n- ")
    .replace(/^\n+/, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export type FixedQ = {
  id: string;
  textQ: string;
  text: [string, string, string];
  textC?: 0 | 1 | 2;
  /** Question affichée pour le QCM image (défaut : textQ). */
  imgQ?: string;
  /** Labels illustrables (résolus via scène/lecture). Omis = jamais en QCM image. */
  img?: [string, string, string];
  imgC?: 0 | 1 | 2;
  /** Phrase à trou (doit contenir `_________`). */
  fillQ?: string;
  fill?: string;
  fillA?: string[];
  /** Affirmation vrai/faux (pas une question). */
  vfQ?: string;
  /** 0 = Oui, 1 = Non, 2 = On ne sait pas */
  vfC?: 0 | 1 | 2;
};

export function fixedQ(item: FixedQ): ExpressRawQ {
  return {
    id: item.id,
    textQ: item.textQ,
    text: item.text,
    textC: item.textC ?? 0,
    imgQ: item.imgQ,
    img: item.img ?? ["", "", ""],
    imgC: item.imgC ?? 0,
    fillQ: item.fillQ ?? "",
    fill: item.fill ?? "",
    fillA: item.fillA,
    vfQ: item.vfQ,
    vfC: item.vfC,
  };
}

export function buildListeningAudio(spec: {
  id: string;
  level: "A1" | "A2";
  num: number;
  transcript: string;
  questions: FixedQ[];
  questionCount?: number;
  instruction?: string;
}): ExpressListeningAudio {
  const src = spec.level === "A1" ? A1(spec.num) : A2(spec.num);
  return {
    id: spec.id,
    audioSrc: src,
    audioLabel: `Audio ${String(spec.num).padStart(3, "0")}`,
    transcript: formatDialogueTranscript(spec.transcript),
    instruction: spec.instruction ?? "Écoutez l'enregistrement et répondez aux questions.",
    pool: buildExpressPool(spec.id, spec.questions.map(fixedQ)),
    questionCount: spec.questionCount ?? 5,
  };
}

export function lessonFromListening(spec: {
  id: string;
  code: string;
  title: string;
  prerequisiteFrenchSlugs?: string[];
  prerequisiteCommIds?: string[];
  theory: CommunicationTheoryBlock[];
  training: ExpressListeningAudio[];
  evalAudios: ExpressListeningAudio[];
  ceExercise?: CommunicationLesson["ceExercise"];
  ceExercises?: CommunicationLesson["ceExercises"];
  ceEmailExercise?: CommunicationLesson["ceEmailExercise"];
  ceEmailExercises?: CommunicationLesson["ceEmailExercises"];
  poDialogues?: CommunicationLesson["poDialogues"];
  pePrompts?: CommunicationLesson["pePrompts"];
  peEmailPrompts?: CommunicationLesson["peEmailPrompts"];
}): CommunicationLesson {
  return {
    id: spec.id,
    code: spec.code,
    title: spec.title,
    prerequisiteFrenchSlugs: spec.prerequisiteFrenchSlugs,
    prerequisiteCommIds: spec.prerequisiteCommIds,
    theory: spec.theory,
    exerciseCount: spec.training.length,
    exercises: spec.training.map((a) =>
      listeningPoolExercise({
        id: a.id,
        audioSrc: a.audioSrc,
        audioLabel: a.audioLabel,
        instruction: a.instruction,
        transcript: a.transcript,
        questionPool: a.pool,
        questionCount: a.questionCount,
      }),
    ),
    evalExercises: spec.evalAudios.map((a) =>
      listeningPoolExercise({
        id: a.id,
        audioSrc: a.audioSrc,
        audioLabel: a.audioLabel,
        instruction: a.instruction,
        transcript: a.transcript,
        questionPool: a.pool,
        questionCount: a.questionCount,
      }),
    ),
    ceExercise: spec.ceExercise,
    ceExercises: spec.ceExercises,
    ceEmailExercise: spec.ceEmailExercise,
    ceEmailExercises: spec.ceEmailExercises,
    poDialogues: spec.poDialogues,
    pePrompts: spec.pePrompts,
    peEmailPrompts: spec.peEmailPrompts,
  };
}

export function t(en: string): ExpressTrans {
  return { en };
}

export function prereqItems(
  items: Array<{ code: string; title: string; href: string }>,
): CommunicationTheoryBlock {
  return { type: "prerequisites", items };
}

export function dialogueBlock(
  audioSrc: string,
  audioLabel: string,
  lines: Array<{ role: "A" | "B"; text: string; translation?: string }>,
): CommunicationTheoryBlock {
  return { type: "dialogue", audioSrc, audioLabel, lines };
}

/** Convertit un bank de phrases en lignes A/B alternées. */
export function phraseBankToDialogue(
  phrases: string[],
): Array<{ role: "A" | "B"; text: string }> {
  return phrases
    .map((p) => p.replace(/^[-–—]\s*/, "").trim())
    .filter(Boolean)
    .map((text, i) => ({ role: (i % 2 === 0 ? "A" : "B") as "A" | "B", text }));
}
