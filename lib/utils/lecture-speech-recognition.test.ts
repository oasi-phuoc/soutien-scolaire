import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  abortLectureSpeech,
  getLectureSpeechRecognition,
  keepLectureRecDecision,
  patchLectureRecCell,
  startLecturePronounceListen,
} from "./lecture-speech-recognition";

class MockSpeechRecognition {
  lang = "";
  continuous = false;
  interimResults = false;
  maxAlternatives = 1;
  onstart: (() => void) | null = null;
  onresult: ((event: unknown) => void) | null = null;
  onerror: (() => void) | null = null;
  onend: (() => void) | null = null;
  started = false;
  aborted = false;

  start() {
    this.started = true;
    this.onstart?.();
  }

  abort() {
    this.aborted = true;
    this.onerror?.();
    this.onend?.();
  }
}

function resultEvent(transcripts: string[]) {
  const first: Record<number, { transcript: string }> & { length: number } = {
    length: transcripts.length,
  };
  transcripts.forEach((transcript, i) => {
    first[i] = { transcript };
  });
  return { results: [first] };
}

describe("keepLectureRecDecision", () => {
  it("verrouille un item juste et n'écrase plus correct", () => {
    expect(keepLectureRecDecision("correct", "idle")).toBe("correct");
    expect(keepLectureRecDecision("correct", "listening")).toBe("correct");
    expect(keepLectureRecDecision("correct", "wrong")).toBe("correct");
  });

  it("laisse rejouer un item faux", () => {
    expect(keepLectureRecDecision("wrong", "listening")).toBe("listening");
    expect(keepLectureRecDecision("wrong", "correct")).toBe("correct");
    expect(keepLectureRecDecision("listening", "idle")).toBe("idle");
  });

  it("ne déverrouille pas une cellule déjà juste dans un tableau", () => {
    const next = patchLectureRecCell(["correct", "listening"], 0, "idle");
    expect(next).toEqual(["correct", "listening"]);
  });
});

describe("startLecturePronounceListen", () => {
  let recRef: { current: unknown };

  beforeEach(() => {
    recRef = { current: null };
    (globalThis as unknown as { window: { SpeechRecognition: unknown } }).window = {
      SpeechRecognition: MockSpeechRecognition,
    };
  });

  afterEach(() => {
    delete (globalThis as { window?: unknown }).window;
  });

  it("expose SpeechRecognition via window", () => {
    expect(getLectureSpeechRecognition()).toBe(MockSpeechRecognition);
  });

  it("garde le succès malgré onerror/onend (Chrome aborted après un match)", () => {
    const outcomes: Array<{ matched: boolean; transcript: string }> = [];
    let cancels = 0;
    startLecturePronounceListen({
      recRef,
      match: (t) => t.toLowerCase().includes("ba"),
      onListening: () => undefined,
      onOutcome: (matched, transcript) => outcomes.push({ matched, transcript }),
      onCancel: () => {
        cancels += 1;
      },
    });

    const rec = recRef.current as MockSpeechRecognition;
    rec.onresult?.(resultEvent(["bah", "ba"]));
    rec.onerror?.();
    rec.onend?.();

    expect(outcomes).toEqual([{ matched: true, transcript: "bah" }]);
    expect(cancels).toBe(0);
  });

  it("n'annule pas un mot déjà juste quand on abort pour passer au suivant", () => {
    const outcomes: boolean[] = [];
    let cancels = 0;
    startLecturePronounceListen({
      recRef,
      match: () => true,
      onListening: () => undefined,
      onOutcome: (matched) => outcomes.push(matched),
      onCancel: () => {
        cancels += 1;
      },
    });
    const first = recRef.current as MockSpeechRecognition;
    first.onresult?.(resultEvent(["table"]));

    startLecturePronounceListen({
      recRef,
      match: () => false,
      onListening: () => undefined,
      onOutcome: () => undefined,
      onCancel: () => {
        cancels += 1;
      },
    });

    expect(first.aborted).toBe(true);
    expect(outcomes).toEqual([true]);
    expect(cancels).toBe(0);
  });

  it("annule seulement s'il n'y a pas eu de résultat", () => {
    let cancels = 0;
    startLecturePronounceListen({
      recRef,
      match: () => true,
      onListening: () => undefined,
      onOutcome: () => undefined,
      onCancel: () => {
        cancels += 1;
      },
    });
    const rec = recRef.current as MockSpeechRecognition;
    rec.onerror?.();
    rec.onend?.();
    expect(cancels).toBe(1);
  });

  it("abortLectureSpeech déclenche abort", () => {
    const rec = new MockSpeechRecognition();
    abortLectureSpeech(rec);
    expect(rec.aborted).toBe(true);
  });
});
