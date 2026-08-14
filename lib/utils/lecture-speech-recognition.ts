/**
 * Reconnaissance vocale des exercices lecture (syllabes / mots).
 *
 * Chrome envoie souvent `onerror` (`aborted` / `no-speech`) juste après un
 * `onresult` réussi, ou quand on passe au mot suivant (`abort()`). Sans
 * verrou, l’état « correct » est écrasé et l’élève doit reprononcer.
 */

type SpeechRecLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onresult: ((event: any) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  abort?: () => void;
  stop?: () => void;
};

export type LectureRecState = "idle" | "listening" | "correct" | "wrong";

export function getLectureSpeechRecognition(): (new () => SpeechRecLike) | null {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function abortLectureSpeech(rec: unknown): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (rec as any)?.abort?.();
}

/** Une fois juste : verrouillé — l’élève n’a pas à reprononcer. Le faux reste rejouable. */
export function keepLectureRecDecision<T extends string>(current: T, next: T): T {
  if (current === "correct") return current;
  return next;
}

export function patchLectureRecCell<T extends string>(
  prev: T[],
  index: number,
  next: T,
): T[] {
  return prev.map((state, i) => (i === index ? keepLectureRecDecision(state, next) : state));
}

/**
 * Démarre une écoute unique. Si la prononciation est reconnue, `onOutcome`
 * est appelé et les événements suivants (`onerror` / `onend`) ne remettent
 * plus l’item à idle.
 */
export function startLecturePronounceListen(options: {
  recRef: { current: unknown };
  match: (transcript: string) => boolean;
  onListening: () => void;
  onOutcome: (matched: boolean, transcript: string) => void;
  onCancel: () => void;
}): boolean {
  const SR = getLectureSpeechRecognition();
  if (!SR) return false;

  abortLectureSpeech(options.recRef.current);

  const rec = new SR();
  rec.lang = "fr-CH";
  rec.continuous = false;
  rec.interimResults = false;
  rec.maxAlternatives = 3;

  let outcome: "pending" | "correct" | "wrong" | "cancelled" = "pending";

  rec.onstart = () => {
    if (outcome !== "pending") return;
    options.onListening();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rec.onresult = (event: any) => {
    const first = event.results?.[0];
    let best = first?.[0]?.transcript?.trim?.() ?? "";
    let matched = false;
    const n = first?.length ?? 0;
    for (let alt = 0; alt < n; alt++) {
      const transcript: string = first[alt].transcript.trim();
      if (options.match(transcript)) {
        best = transcript;
        matched = true;
        break;
      }
    }
    outcome = matched ? "correct" : "wrong";
    options.onOutcome(matched, best);
  };

  rec.onerror = () => {
    if (outcome !== "pending") return;
    outcome = "cancelled";
    options.onCancel();
  };

  rec.onend = () => {
    if (outcome !== "pending") return;
    outcome = "cancelled";
    options.onCancel();
  };

  options.recRef.current = rec;
  rec.start();
  return true;
}
