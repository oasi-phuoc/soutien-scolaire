"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, useTransition, type ReactNode } from "react";
import {
  getExpressionTeachersAction,
  type TeacherOption,
} from "@/app/actions/expression";
import { submitOralAction, type OralDialogueLine } from "@/app/actions/oral";
import { randomOralPrompt, type OralLevel, type OralPrompt } from "@/lib/curriculum/content/communication/speaking-prompts";
import { randomOralSituation } from "@/lib/curriculum/content/communication/oral-situations";
import { randomArgumentationTopic } from "@/lib/curriculum/content/communication/argumentation-topics";
import {
  getArgumentationResponse,
  getImageDescriptionModel,
  getInterviewSuggestion,
  getSituationDialogueSuggestions,
  getThemeSuggestions,
  IMAGE_DESCRIPTION_MEMO,
} from "@/lib/curriculum/content/communication/po-correction-guide";
import {
  getPoDialogue,
  pickStudentRole,
  roleAssignmentText,
  studentLineIndices,
} from "@/lib/curriculum/content/communication/po-dialogues";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import { speak } from "@/lib/utils/speech";
import { HintLightbulbButton, TtsPlayButton } from "@/components/communication/TtsSequencePlayer";
import {
  CommunicationFinishButton,
  CommunicationIntroSection,
  CommunicationResultsExercise,
  CommunicationTeacherSubmit,
  EXPRESSION_TAB_HREF,
} from "@/components/communication/CommunicationEvalLayout";
import { useRegisterEvalGuard, useEvalNavGuard, useGuardedNavigate } from "@/components/EvalNavGuard";
import type { PlacementRunnerProps } from "@/lib/placement/runner-props";
import { placementLessonCode } from "@/lib/placement/types";
import { isRetryablePlacementSubmitError, queuePlacementSubmission } from "@/lib/placement/pending-submissions";

const ACCENT = "var(--color-accent-comm)";

type Phase = "intro" | "task1" | "task2" | "task3" | "task4" | "task5" | "review";
type TaskPhase = Exclude<Phase, "intro" | "review">;

const TASK_PHASES: TaskPhase[] = ["task1", "task2", "task3", "task4", "task5"];

function levelFromId(lessonId: string): OralLevel {
  if (lessonId === "PO-2") return "moyen";
  if (lessonId === "PO-3") return "avance";
  return "base";
}

function lessonCodeFromId(lessonId: string): string {
  if (lessonId === "PO-2") return "PO.2";
  if (lessonId === "PO-3") return "PO.3";
  return "PO.1";
}

// ——— Web Speech API helpers ———

type SpeechRecognitionInstance = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: { results: { [key: number]: { [key: number]: { transcript: string } } }; resultIndex: number }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

function getSpeechRecognition(): (new () => SpeechRecognitionInstance) | null {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

const FRENCH_QUESTION_START = /^(?:qui|que|qu['']est-ce (?:que|qui)|quoi|ou|où|quand|comment|pourquoi|combien|quel(?:le)?s?|est-ce que|(?:avez|etes|êtes|pouvez|voulez|savez|allez|devez)-vous|(?:as|es|peux|veux|sais|vas|dois)-tu|(?:a|est|peut|veut|sait|va|doit)-(?:il|elle|on)|dois-je|puis-je)\b/i;

function normalizeFrenchTranscript(raw: string): string {
  const cleaned = raw
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/([,;:!?])(?=\S)/g, "$1 ");

  if (!cleaned) return "";

  const capitalized = cleaned.replace(/\p{L}/u, (letter) => letter.toUpperCase());
  if (/[.!?…]$/.test(capitalized)) return capitalized;

  return `${capitalized}${FRENCH_QUESTION_START.test(capitalized) ? "?" : "."}`;
}

function ensureQuestionMark(text: string): string {
  const trimmed = text.trim().replace(/[.!?…]+$/, "");
  return trimmed ? `${trimmed}?` : "";
}

function formatPoTimer(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function useSpeechRecognition(onTranscript: (text: string) => void) {
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const accumulatedRef = useRef("");
  const [isListening, setIsListening] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!getSpeechRecognition()) setSupported(false);
  }, []);

  const startListening = useCallback(() => {
    const SR = getSpeechRecognition();
    if (!SR) return;
    accumulatedRef.current = "";
    const rec = new SR();
    rec.lang = "fr-CH";
    rec.continuous = true;
    rec.interimResults = false;
    rec.onresult = (event) => {
      const latest = event.results[event.resultIndex]?.[0]?.transcript ?? "";
      if (latest.trim()) {
        accumulatedRef.current = (accumulatedRef.current + " " + latest).trim();
        onTranscript(normalizeFrenchTranscript(accumulatedRef.current));
      }
    };
    rec.onerror = (event) => {
      if (event.error !== "no-speech") setIsListening(false);
    };
    rec.onend = () => setIsListening(false);
    recognitionRef.current = rec;
    rec.start();
    setIsListening(true);
  }, [onTranscript]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { isListening, supported, startListening, stopListening };
}

// ——— Grammar check ———

// ——— Mic button (hold-to-speak) ———

function MicButton({
  isListening,
  supported,
  onStart,
  onStop,
  disabled,
}: {
  isListening: boolean;
  supported: boolean;
  onStart: () => void;
  onStop: () => void;
  disabled?: boolean;
}) {
  if (!supported) {
    return (
      <p className="text-xs text-amber-600">Microphone non supporté dans ce navigateur. Utilisez Chrome ou Edge.</p>
    );
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); if (!disabled) onStart(); }}
        onPointerUp={onStop}
        onPointerLeave={onStop}
        disabled={disabled}
        className={`flex h-20 w-20 select-none touch-none items-center justify-center rounded-full shadow-md transition-all active:scale-95 disabled:opacity-40 ${
          isListening ? "animate-pulse scale-95" : "hover:opacity-90"
        }`}
        style={{ background: isListening ? "#dc2626" : ACCENT }}
        aria-label={isListening ? "Relâchez pour arrêter" : "Maintenez pour parler"}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden>
          <rect x="9" y="2" width="6" height="12" rx="3" />
          <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <p className="text-xs font-medium text-[var(--color-text-secondary)]">
        {isListening ? "Relâchez pour arrêter" : "Maintenez pour parler"}
      </p>
    </div>
  );
}

// ——— Compact mic button for task 1 items ———

function ThemeMicButton({
  isListening,
  supported,
  onStart,
  onStop,
  disabled,
}: {
  isListening: boolean;
  supported: boolean;
  onStart: () => void;
  onStop: () => void;
  disabled?: boolean;
}) {
  if (!supported) return null;
  return (
    <button
      type="button"
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); if (!disabled) onStart(); }}
      onPointerUp={onStop}
      onPointerLeave={onStop}
      disabled={disabled}
      className={`flex h-10 w-10 select-none touch-none shrink-0 items-center justify-center rounded-full shadow-md transition-all active:scale-95 disabled:opacity-40 ${
        isListening ? "animate-pulse scale-95" : "hover:opacity-90"
      }`}
      style={{ background: isListening ? "#dc2626" : ACCENT }}
      aria-label={isListening ? "Relâchez pour arrêter" : "Maintenez pour parler"}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  );
}

// ——— Speak button (like lecture) ———

function SpeakButton({ text, small, onLight }: { text: string; small?: boolean; onLight?: boolean }) {
  return (
    <button
      type="button"
      aria-label="Écouter"
      onClick={() => speak(text)}
      className={`flex shrink-0 items-center justify-center rounded-full shadow-sm active:opacity-80 ${small ? "h-8 w-8" : "h-10 w-10"} text-white`}
      style={onLight ? { background: "rgba(255,255,255,0.25)" } : { background: ACCENT }}
    >
      <svg width={small ? 14 : 16} height={small ? 14 : 16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6 4l14 8-14 8V4z" />
      </svg>
    </button>
  );
}

// ——— Voice message bubble (WhatsApp-style for app prompts in task 3) ———

function CorrectionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-3 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2.5">
      <p className="mb-1.5 text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>{title}</p>
      <div className="space-y-1.5 text-sm leading-relaxed text-[var(--color-text-primary)]">{children}</div>
    </div>
  );
}

function SampleParagraphs({ text }: { text: string }) {
  return (
    <div className="space-y-3">
      {text.split(/\n\n+/).filter(Boolean).map((paragraph, index) => (
        <p key={index} className="leading-relaxed">{paragraph}</p>
      ))}
    </div>
  );
}

const DIRECTED_INTERVIEW_BASE = [
  "Quel est votre nom ?",
  "Quel est votre prénom ?",
  "Où habitez-vous ?",
  "Quelles langues parlez-vous ?",
  "Qu'avez-vous fait ce week-end ?",
];

const DIRECTED_INTERVIEW_GROUPS = [
  [
    "Est-ce que vous faites du sport ?",
    "Depuis combien de temps pratiquez-vous ce sport ?",
    "Combien de fois par semaine faites-vous ce sport ?",
  ],
  [
    "Quel est votre plat préféré ?",
    "De quoi est-il fait ?",
    "Savez-vous le préparer ?",
  ],
  [
    "Quel genre de films ou de séries aimez-vous regarder ?",
    "Pourquoi aimez-vous ce genre ?",
    "Quel est votre film ou votre série préféré ?",
  ],
  [
    "Qui fait les courses chez vous ?",
    "Aimez-vous faire les courses et pourquoi ?",
    "Où allez-vous faire les courses et pourquoi ?",
  ],
  [
    "Quel moyen de transport utilisez-vous le plus ?",
    "Aimez-vous vous déplacer avec ce moyen de transport et pourquoi ?",
    "Quel moyen de transport n'aimez-vous pas et pourquoi ?",
  ],
];


// ——— Guide question bubble (audio-only, for task 2 image description) ———

// ——— Dialogue bubble (for past lines) ———

function DialogueBubble({ line }: { line: OralDialogueLine }) {
  const isApp = line.role === "app";
  return (
    <div className={`flex ${isApp ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm ${
          isApp
            ? "rounded-tl-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
            : "rounded-tr-sm text-white"
        }`}
        style={!isApp ? { background: ACCENT } : undefined}
      >
        <p
          className={`mb-0.5 text-[10px] font-semibold uppercase tracking-wide ${isApp ? "" : "text-white/80"}`}
          style={isApp ? { color: ACCENT } : undefined}
        >
          {isApp ? "Interlocuteur" : "Vous"}
        </p>
        <p className="leading-snug">{line.text}</p>
      </div>
    </div>
  );
}

// ——— Grammar corrections panel ———

// ——— Main component ———

export function OralProductionRunner({
  lessonId,
  mode = "module",
  placementSessionId,
  onPlacementComplete,
}: { lessonId: string } & PlacementRunnerProps) {
  const router = useRouter();
  const evalGuard = useEvalNavGuard();
  const guardedNavigate = useGuardedNavigate();
  const leaveHref = mode === "placement" ? "/placement" : "/francais?tab=communication";
  const headerAccent = mode === "placement" ? "var(--color-accent-quiz)" : ACCENT;
  const level = levelFromId(lessonId);
  const lessonCode = lessonCodeFromId(lessonId);

  const [prompt] = useState<OralPrompt>(() => randomOralPrompt(level));
  const [situation] = useState(() => randomOralSituation(level));
  const [argumentationTopic] = useState(() => randomArgumentationTopic(level));
  const [dialogueState] = useState(() => {
    const script = getPoDialogue(situation.id);
    const studentRole = pickStudentRole();
    return {
      script,
      studentRole,
      studentTurns: studentLineIndices(script, studentRole),
      roleText: roleAssignmentText(script, studentRole),
    };
  });
  const compactImage = /PO_(?:Chaussure|Cinema|Telephone)\.webp$/.test(situation.image);
  const imageWidth = compactImage ? 1402 : 1448;
  const imageHeight = compactImage ? 1122 : 1086;
  const [phase, setPhase] = useState<Phase>("intro");
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());

  // Task 1: questions on 3 themes (all shown simultaneously)
  const [task1Transcripts, setTask1Transcripts] = useState<string[]>(["", "", ""]);
  const [task1Lines, setTask1Lines] = useState<OralDialogueLine[]>([]);
  const [task1Done, setTask1Done] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState("");
  const isChecking = false;

  // Task 2: directed interview (all questions shown at once)
  const [interviewQuestions] = useState<string[]>(() => {
    const group = DIRECTED_INTERVIEW_GROUPS[Math.floor(Math.random() * DIRECTED_INTERVIEW_GROUPS.length)]!;
    return [...DIRECTED_INTERVIEW_BASE, ...group];
  });
  const [interviewTranscripts, setInterviewTranscripts] = useState<string[]>(() => Array(8).fill(""));
  const [interviewLines, setInterviewLines] = useState<OralDialogueLine[]>([]);
  const [interviewDone, setInterviewDone] = useState(false);
  const [task2Phrases, setTask2Phrases] = useState<string[]>([]);
  const [task2Lines, setTask2Lines] = useState<OralDialogueLine[]>([]);
  const [task2Done, setTask2Done] = useState(false);
  const [imageHelpOpen, setImageHelpOpen] = useState(false);
  const [openTranscriptIdx, setOpenTranscriptIdx] = useState<number | null>(null);
  const [playingGuideIdx, setPlayingGuideIdx] = useState<number | null>(null);
  const guideIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Task 4: structured dialogue
  const studentTurnCount = dialogueState.studentTurns.length;
  const [task4Transcripts, setTask4Transcripts] = useState<string[]>(() => Array(studentTurnCount).fill(""));
  const [task4ActiveTurn, setTask4ActiveTurn] = useState(0);
  const task4ActiveTurnRef = useRef(0);
  const [task4Lines, setTask4Lines] = useState<OralDialogueLine[]>([]);
  const [task4Done, setTask4Done] = useState(false);
  const [openDialogueHint, setOpenDialogueHint] = useState<number | null>(null);

  // Task 5: argumentation (multi-phrase)
  const [argumentationTranscript, setArgumentationTranscript] = useState("");
  const [task5Phrases, setTask5Phrases] = useState<string[]>([]);
  const [task5Lines, setTask5Lines] = useState<OralDialogueLine[]>([]);
  const [task5Done, setTask5Done] = useState(false);

  // Mic toggle
  const [micBlocked, setMicBlocked] = useState(false);

  // Review
  const [teachers, setTeachers] = useState<TeacherOption[]>([]);
  const [teacherId, setTeacherId] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [openReview, setOpenReview] = useState<number | null>(1);
  const [isSending, startSending] = useTransition();

  useRegisterEvalGuard(mode === "placement" && phase !== "intro" && !(phase === "review" && sent));

  useEffect(() => {
    void getExpressionTeachersAction().then(setTeachers);
  }, []);

  // ——— Speech recognition per phase ———

  const onT0 = useCallback((t: string) => {
    setTask1Transcripts((prev) => { const n = [...prev]; n[0] = lessonId === "PO-1" ? ensureQuestionMark(t) : t; return n; });
  }, [lessonId]);
  const onT1 = useCallback((t: string) => {
    setTask1Transcripts((prev) => { const n = [...prev]; n[1] = lessonId === "PO-1" ? ensureQuestionMark(t) : t; return n; });
  }, [lessonId]);
  const onT2 = useCallback((t: string) => {
    setTask1Transcripts((prev) => { const n = [...prev]; n[2] = lessonId === "PO-1" ? ensureQuestionMark(t) : t; return n; });
  }, [lessonId]);

  const setIQ = useCallback((i: number, t: string) =>
    setInterviewTranscripts((prev) => { const n = [...prev]; n[i] = t; return n; }), []);
  const onIQ0 = useCallback((t: string) => setIQ(0, t), [setIQ]);
  const onIQ1 = useCallback((t: string) => setIQ(1, t), [setIQ]);
  const onIQ2 = useCallback((t: string) => setIQ(2, t), [setIQ]);
  const onIQ3 = useCallback((t: string) => setIQ(3, t), [setIQ]);
  const onIQ4 = useCallback((t: string) => setIQ(4, t), [setIQ]);
  const onIQ5 = useCallback((t: string) => setIQ(5, t), [setIQ]);
  const onIQ6 = useCallback((t: string) => setIQ(6, t), [setIQ]);
  const onIQ7 = useCallback((t: string) => setIQ(7, t), [setIQ]);

  const onTask3Transcript = useCallback((text: string) => {
    setCurrentTranscript(text);
  }, []);

  const setTDP = useCallback((turnIdx: number, t: string) =>
    setTask4Transcripts((prev) => { const n = [...prev]; n[turnIdx] = t; return n; }), []);

  const onTask4Speech = useCallback((text: string) => {
    const turnIdx = task4ActiveTurnRef.current;
    setTDP(turnIdx, text);
  }, [setTDP]);

  const { isListening: listenTask4, startListening: startTask4, stopListening: stopTask4 } =
    useSpeechRecognition(onTask4Speech);

  const onTask5Transcript = useCallback((text: string) => {
    setArgumentationTranscript(text);
  }, []);

  const { isListening: listenT0, supported, startListening: startT0, stopListening: stopT0 } =
    useSpeechRecognition(onT0);
  const { isListening: listenT1, startListening: startT1, stopListening: stopT1 } =
    useSpeechRecognition(onT1);
  const { isListening: listenT2, startListening: startT2, stopListening: stopT2 } =
    useSpeechRecognition(onT2);
  const { isListening: listenIQ0, startListening: startIQ0, stopListening: stopIQ0 } = useSpeechRecognition(onIQ0);
  const { isListening: listenIQ1, startListening: startIQ1, stopListening: stopIQ1 } = useSpeechRecognition(onIQ1);
  const { isListening: listenIQ2, startListening: startIQ2, stopListening: stopIQ2 } = useSpeechRecognition(onIQ2);
  const { isListening: listenIQ3, startListening: startIQ3, stopListening: stopIQ3 } = useSpeechRecognition(onIQ3);
  const { isListening: listenIQ4, startListening: startIQ4, stopListening: stopIQ4 } = useSpeechRecognition(onIQ4);
  const { isListening: listenIQ5, startListening: startIQ5, stopListening: stopIQ5 } = useSpeechRecognition(onIQ5);
  const { isListening: listenIQ6, startListening: startIQ6, stopListening: stopIQ6 } = useSpeechRecognition(onIQ6);
  const { isListening: listenIQ7, startListening: startIQ7, stopListening: stopIQ7 } = useSpeechRecognition(onIQ7);
  const { isListening: listening3, startListening: start3, stopListening: stop3 } =
    useSpeechRecognition(onTask3Transcript);
  const { isListening: listening5, startListening: start5, stopListening: stop5 } =
    useSpeechRecognition(onTask5Transcript);

  // Reset transcript + hints on phase change
  useEffect(() => {
    setCurrentTranscript("");
    setImageHelpOpen(false);
    setOpenDialogueHint(null);
  }, [phase]);

  useEffect(() => {
    if (!startedAt || phase === "intro" || phase === "review") return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [phase, startedAt]);

  // ——— Step index for segmented progress bar ———

  function isTaskDone(task: TaskPhase) {
    if (task === "task1") return task1Done;
    if (task === "task2") return interviewDone;
    if (task === "task3") return task2Done;
    if (task === "task4") return task4Done;
    return task5Done;
  }

  const activeTaskPhases = TASK_PHASES.filter((task) => !isTaskDone(task));
  const currentActiveIndex = Math.max(0, activeTaskPhases.indexOf(phase as TaskPhase));
  const stepIdx = currentActiveIndex;
  const totalSteps = Math.max(1, activeTaskPhases.length);
  const remainingMs = startedAt ? 15 * 60 * 1000 - (now - startedAt) : 15 * 60 * 1000;

  // ——— Task 1: confirm all 3 theme questions at once ———

  function confirmTask1() {
    const lines: OralDialogueLine[] = [];
    for (let i = 0; i < 3; i++) {
      const theme = prompt.themes[i]!;
      lines.push(
        { role: "app", text: `Thème : « ${theme.word} »` },
        { role: "student", text: task1Transcripts[i] || "(pas de réponse)" },
      );
    }
    setTask1Lines(lines);
    setTask1Done(true);
  }

  // ——— Task 2: directed interview (all questions at once) ———

  function confirmInterview() {
    const lines: OralDialogueLine[] = [];
    for (let i = 0; i < interviewQuestions.length; i++) {
      lines.push(
        { role: "app", text: interviewQuestions[i]! },
        { role: "student", text: interviewTranscripts[i] || "(pas de réponse)" },
      );
    }
    setInterviewLines(lines);
    setInterviewDone(true);
  }

  function addTask2Phrase() {
    if (!currentTranscript.trim() || listening3) return;
    setTask2Phrases((prev) => [...prev, currentTranscript.trim()]);
    setCurrentTranscript("");
  }

  function validateTask2() {
    setTask2Lines([
      { role: "app", text: "Décrivez cette image." },
      ...(task2Phrases.length > 0
        ? task2Phrases.map((phrase) => ({ role: "student" as const, text: phrase }))
        : [{ role: "student" as const, text: "(pas de réponse)" }]),
    ]);
    setTask2Done(true);
  }

  // ——— Task 4: dialogue responses (all at once) ———

  function confirmTask4() {
    const { script, studentRole } = dialogueState;
    const lines: OralDialogueLine[] = [];
    let studentTurnIdx = 0;
    for (const line of script.lines) {
      const isStudent = line.role === studentRole;
      if (isStudent) {
        const text = (task4Transcripts[studentTurnIdx] ?? "").trim();
        lines.push({ role: "student", text: text || "(pas de réponse)" });
        studentTurnIdx++;
      } else {
        lines.push({ role: "app", text: line.text });
      }
    }
    setTask4Lines(lines);
    setTask4Done(true);
  }

  // ——— Task 5: argumentation (multi-phrase) ———

  function addTask5Phrase() {
    if (!argumentationTranscript.trim() || listening5) return;
    setTask5Phrases((prev) => [...prev, argumentationTranscript.trim()]);
    setArgumentationTranscript("");
  }

  function validateTask5() {
    const lines: OralDialogueLine[] = [{ role: "app", text: argumentationTopic.prompt }];
    if (task5Phrases.length === 0) {
      lines.push({ role: "student", text: "(pas de réponse)" });
    } else {
      for (const phrase of task5Phrases) {
        lines.push({ role: "student", text: phrase });
      }
    }
    setTask5Lines(lines);
    setTask5Done(true);
  }

  // ——— All grammar matches for review ———

  const imageDescriptionModel = useMemo(
    () => getImageDescriptionModel(situation.id),
    [situation.id],
  );

  const argumentationResponse = useMemo(
    () => getArgumentationResponse(argumentationTopic.theme, argumentationTopic.prompt),
    [argumentationTopic.prompt, argumentationTopic.theme],
  );

  const dialogueSuggestions = useMemo(
    () => getSituationDialogueSuggestions(situation.id),
    [situation.id],
  );

  const allGrammar: [] = [];

  const fullDialogue = [...task1Lines, ...interviewLines, ...task2Lines, ...task4Lines, ...task5Lines];

  // ——— Save progress + finish ———

  function handleFinish() {
    if (mode === "placement") {
      onPlacementComplete?.({
        skill: "po",
        points: 0,
        maxPoints: 25,
        pendingTeacher: true,
        sent: true,
      });
      return;
    }
    try {
      markCommunicationLessonComplete(lessonId);
    } catch { /* ignore */ }
    router.push(EXPRESSION_TAB_HREF);
  }

  function sendToTeacher() {
    if (!teacherId || sent) return;
    const placementCode = mode === "placement" ? placementLessonCode("po", level) : lessonCode;
    const submissionPrompt: OralPrompt = {
      ...prompt,
      id: `${prompt.id}-${situation.id}`,
      imageDescription: situation.imageDescription,
      dialogueContext: situation.dialogueContext,
      dialoguePrompts: [...situation.dialoguePrompts, argumentationTopic.prompt],
    };

    if (mode === "placement" && placementSessionId && !navigator.onLine) {
      queuePlacementSubmission({
        kind: "po",
        id: `po-${placementSessionId}-${Date.now()}`,
        sessionId: placementSessionId,
        teacherId,
        lessonCode: placementCode,
        level,
        prompt: {
          id: submissionPrompt.id,
          level: submissionPrompt.level,
          themes: submissionPrompt.themes.map((t) => ({ word: t.word, example: t.example })),
          imageDescription: submissionPrompt.imageDescription,
          dialogueContext: submissionPrompt.dialogueContext,
          dialoguePrompts: submissionPrompt.dialoguePrompts,
        },
        dialogue: fullDialogue,
        aiFeedback: allGrammar,
        createdAt: new Date().toISOString(),
      });
      setSendMessage("Production enregistrée — envoi au professeur dès la reconnexion.");
      setSent(true);
      return;
    }

    startSending(async () => {
      const result = await submitOralAction({
        teacherId,
        lessonCode: placementCode,
        level,
        prompt: submissionPrompt,
        dialogue: fullDialogue,
        aiFeedback: allGrammar,
        placementSessionId: mode === "placement" ? placementSessionId : undefined,
      });
      if (mode === "placement" && !result.ok && placementSessionId && isRetryablePlacementSubmitError(result.reason)) {
        queuePlacementSubmission({
          kind: "po",
          id: `po-${placementSessionId}-${Date.now()}`,
          sessionId: placementSessionId,
          teacherId,
          lessonCode: placementCode,
          level,
          prompt: {
            id: submissionPrompt.id,
            level: submissionPrompt.level,
            themes: submissionPrompt.themes.map((t) => ({ word: t.word, example: t.example })),
            imageDescription: submissionPrompt.imageDescription,
            dialogueContext: submissionPrompt.dialogueContext,
            dialoguePrompts: submissionPrompt.dialoguePrompts,
          },
          dialogue: fullDialogue,
          aiFeedback: allGrammar,
          createdAt: new Date().toISOString(),
        });
        setSendMessage("Production enregistrée — envoi au professeur dès la reconnexion.");
        setSent(true);
        return;
      }
      setSendMessage(result.ok ? "Dialogue envoyé au professeur." : (result.reason ?? "Envoi impossible."));
      setSent(result.ok);
    });
  }

  // ——— Nav bar logic ———

  function goBack() {
    if (phase === "intro") {
      if (mode === "placement") return;
      router.push(EXPRESSION_TAB_HREF);
    }
    else if (phase === "review") setPhase(activeTaskPhases[activeTaskPhases.length - 1] ?? "task5");
    else if (activeTaskPhases.length > 0) {
      const index = activeTaskPhases.indexOf(phase as TaskPhase);
      setPhase(activeTaskPhases[(index - 1 + activeTaskPhases.length) % activeTaskPhases.length] ?? "task1");
    }
  }

  const allTasksDone = task1Done && interviewDone && task2Done && task4Done && task5Done;

  function goNext() {
    if (phase === "intro") {
      const start = Date.now();
      setStartedAt(start);
      setNow(start);
      setPhase("task1");
    }
    else if (phase === "task1" || phase === "task2" || phase === "task3" || phase === "task4" || phase === "task5") {
      if (activeTaskPhases.length === 0 || allTasksDone) {
        setPhase("review");
        return;
      }
      const index = activeTaskPhases.indexOf(phase as TaskPhase);
      setPhase(activeTaskPhases[(index + 1) % activeTaskPhases.length] ?? activeTaskPhases[0] ?? "review");
    }
    else handleFinish();
  }

  function handleNavValidate() {
    const currentTask = phase as TaskPhase;
    if (phase === "task1") confirmTask1();
    else if (phase === "task2") confirmInterview();
    else if (phase === "task3") validateTask2();
    else if (phase === "task4") confirmTask4();
    else if (phase === "task5") validateTask5();

    if (TASK_PHASES.includes(currentTask)) {
      const remaining = activeTaskPhases.filter((task) => task !== currentTask);
      if (remaining.length === 0) setPhase("review");
      else setPhase(remaining[Math.min(currentActiveIndex, remaining.length - 1)] ?? remaining[0]!);
    }
  }

  const showValidate =
    (phase === "task1" && !task1Done) ||
    (phase === "task2" && !interviewDone) ||
    (phase === "task3" && !task2Done) ||
    (phase === "task4" && !task4Done) ||
    (phase === "task5" && !task5Done);

  const validateDisabled = false;

  // Free navigation: Suivant never depends on validation.
  const nextDisabled = false;

  const isLastPhase = phase === "review";

  // ——— Level labels ———

  const levelLabel = level === "base" ? "Base" : level === "moyen" ? "Moyen" : "Avancé";

  const introRows = [
    ["1", "Questions thématiques", "3 pts"],
    ["2", "Entretien dirigé", "4 pts"],
    ["3", "Description d'image", "5 pts"],
    ["4", "Dialogue", "6 pts"],
    ["5", "Argumentation", "7 pts"],
  ];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pt-4 pb-32">
      <header className="mb-4 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: headerAccent }}>
          {mode === "placement" ? "Test de placement · PO" : "Français · Production orale"} · {levelLabel}
        </p>
        <div className="flex items-center gap-2">
          {mode === "placement" ? (
            <button
              type="button"
              onClick={() => guardedNavigate(() => router.push(leaveHref))}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
              style={{ background: headerAccent }}
              aria-label="Retour au placement"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          ) : (
            <Link
              href={leaveHref}
              onClick={(event) => {
                if (evalGuard?.active) {
                  event.preventDefault();
                  evalGuard.requestNavigate(() => router.push(leaveHref));
                }
              }}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
              style={{ background: headerAccent }}
              aria-label="Retour au français"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
          )}
          <h1 className="flex-1 text-xl font-bold text-[var(--color-text-primary)]">
            {phase === "review" ? (sent ? "En attente de correction" : "Envoi au professeur") : `${lessonCode} — Production orale`}
          </h1>
          {supported && (
            <button
              type="button"
              onClick={() => setMicBlocked((v) => !v)}
              title={micBlocked ? "Réactiver le microphone" : "Désactiver le microphone (saisie texte)"}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${micBlocked ? "border-red-400 bg-red-50 text-red-500" : "border-[var(--color-border-default)] text-[var(--color-text-secondary)]"}`}
              aria-label={micBlocked ? "Microphone bloqué — cliquer pour réactiver" : "Cliquer pour bloquer le micro"}
            >
              {micBlocked ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                  <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <rect x="9" y="2" width="6" height="12" rx="3" />
                  <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>
          )}
        </div>
      </header>

      {phase !== "intro" && phase !== "review" && (
        <div className="mb-6">
          <div className="mb-1.5 flex items-center justify-between">
            <p className="text-xs font-bold tabular-nums" style={{ color: ACCENT }}>
              {Math.min(stepIdx + 1, totalSteps)} / {totalSteps}
            </p>
            <div className="flex items-center gap-3">
              <span className="rounded-full px-2 py-0.5 text-xs font-bold tabular-nums" style={{ background: `color-mix(in srgb, ${ACCENT} 12%, white)`, color: ACCENT }}>
                {formatPoTimer(remainingMs)}
              </span>
              <p className="text-xs text-[var(--color-text-secondary)]">{activeTaskPhases.length} exercice{activeTaskPhases.length !== 1 ? "s" : ""} restant{activeTaskPhases.length !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <div className="flex gap-0.5">
            {activeTaskPhases.map((task, i) => (
              <button
                key={task}
                type="button"
                onClick={() => setPhase(task)}
                className="h-2 min-w-8 flex-1 rounded-full transition-colors"
                style={{ background: i === stepIdx ? ACCENT : "var(--color-border-default, var(--color-border))" }}
                aria-label={`Aller à l'exercice ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* INTRO */}
      {phase === "intro" && (
        <CommunicationIntroSection
          bullets={[
            { strong: "5 exercices", text: " de production orale" },
            { strong: "15 minutes", text: " pour compléter l'évaluation" },
            { text: "Validez chaque exercice individuellement" },
            { text: "Vous pouvez naviguer librement en cliquant sur la barre de progression en haut." },
            { before: "Score maximum : ", strong: "25 points", text: "" },
          ]}
          rows={introRows.map(([num, title, pts]) => ({ num, title, points: pts }))}
          tips={(
            <>
              <p>Parlez clairement et faites des phrases complètes, même si elles sont simples.</p>
              <p>Répondez à la question, puis ajoutez une raison ou un exemple.</p>
              <p>Si vous ne trouvez pas un mot, expliquez avec d&apos;autres mots.</p>
            </>
          )}
          onStart={goNext}
          footer={!supported ? (
            <div className="rounded-[var(--radius-md)] border border-red-300 bg-red-50 px-3 py-2.5">
              <p className="text-sm text-red-700">
                La reconnaissance vocale n&apos;est pas disponible dans ce navigateur. Utilisez Chrome ou Edge pour une meilleure expérience.
              </p>
            </div>
          ) : undefined}
        />
      )}
      {/* ——— TASK 1: Questions on themes ——— */}
      {phase === "task1" && (() => {
        const listenersT = [listenT0, listenT1, listenT2];
        const startersT = [startT0, startT1, startT2];
        const stoppersT = [stopT0, stopT1, stopT2];
        return (
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
                Partie 1 — Questions thématiques
              </h2>
            </div>

            <div className="space-y-3">
              {prompt.themes.map((theme, i) => {
                const transcript = task1Transcripts[i] ?? "";
                const isListeningI = listenersT[i]!;
                const onStartI = startersT[i]!;
                const onStopI = stoppersT[i]!;
                return (
                  <div
                    key={i}
                    className="rounded-[var(--radius-md)] border-2 px-4 py-3 space-y-2 bg-[var(--color-bg-primary)]"
                    style={{ borderColor: ACCENT }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ background: ACCENT }}
                      >
                        {i + 1}
                      </span>
                      <span className="flex-1 text-xl font-bold text-[var(--color-text-primary)]">{theme.word}</span>
                      <SpeakButton text={theme.word} small />
                      {!task1Done && (
                        <ThemeMicButton
                          isListening={isListeningI}
                          supported={supported && !micBlocked}
                          onStart={onStartI}
                          onStop={onStopI}
                        />
                      )}
                    </div>
                    {transcript && (supported && !micBlocked || task1Done) ? (
                      <p className="text-sm text-[var(--color-text-primary)] pl-9">{transcript}</p>
                    ) : !task1Done ? (
                      <p className="text-xs italic text-[var(--color-text-secondary)] pl-9">
                        {(supported && !micBlocked) ? "Maintenez le micro pour enregistrer…" : ""}
                      </p>
                    ) : null}
                    {!task1Done && (!supported || micBlocked) && (
                      <input
                        type="text"
                        value={transcript}
                        onChange={(e) => {
                          const val = e.target.value;
                          setTask1Transcripts((prev) => { const n = [...prev]; n[i] = val; return n; });
                        }}
                        placeholder="Tapez votre question ici…"
                        className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {task1Done && (
              <p className="text-center text-sm text-[var(--color-text-secondary)]">
                Questions enregistrées. Appuyez sur <strong>Suivant</strong> pour continuer.
              </p>
            )}
          </div>
        );
      })()}

      {/* ——— TASK 2: Directed interview ——— */}
      {phase === "task2" && (
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
              Partie 2 — Entretien dirigé
            </h2>
          </div>

          {/* All questions shown simultaneously */}
          {(() => {
            const iqListeners = [listenIQ0, listenIQ1, listenIQ2, listenIQ3, listenIQ4, listenIQ5, listenIQ6, listenIQ7];
            const iqStarters  = [startIQ0, startIQ1, startIQ2, startIQ3, startIQ4, startIQ5, startIQ6, startIQ7];
            const iqStoppers  = [stopIQ0,  stopIQ1,  stopIQ2,  stopIQ3,  stopIQ4,  stopIQ5,  stopIQ6,  stopIQ7];
            return (
              <div className="space-y-3">
                {interviewQuestions.map((question, i) => {
                  const transcript = interviewTranscripts[i] ?? "";
                  return (
                    <div
                      key={i}
                      className="rounded-[var(--radius-md)] border-2 px-4 py-3 space-y-2 bg-[var(--color-bg-primary)]"
                      style={{ borderColor: ACCENT }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                          style={{ background: ACCENT }}
                        >
                          {i + 1}
                        </span>
                        <span className="flex-1 text-sm font-medium text-[var(--color-text-primary)]">{question}</span>
                        <SpeakButton text={question} small />
                        {!interviewDone && (
                          <ThemeMicButton
                            isListening={iqListeners[i]!}
                            supported={supported && !micBlocked}
                            onStart={iqStarters[i]!}
                            onStop={iqStoppers[i]!}
                          />
                        )}
                      </div>
                      {transcript && (supported && !micBlocked || interviewDone) ? (
                        <p className="text-sm text-[var(--color-text-primary)] pl-9">{transcript}</p>
                      ) : !interviewDone ? (
                        <p className="text-xs italic text-[var(--color-text-secondary)] pl-9">
                          {(supported && !micBlocked) ? "Maintenez le micro pour enregistrer…" : ""}
                        </p>
                      ) : null}
                      {!interviewDone && (!supported || micBlocked) && (
                        <input
                          type="text"
                          value={transcript}
                          onChange={(e) => {
                            const val = e.target.value;
                            setInterviewTranscripts((prev) => { const n = [...prev]; n[i] = val; return n; });
                          }}
                          placeholder="Votre réponse…"
                          className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {interviewDone && (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Entretien terminé. Appuyez sur <strong>Suivant</strong> pour continuer.
            </p>
          )}
        </div>
      )}

      {/* ——— TASK 3: Image description ——— */}
      {phase === "task3" && (
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
                  Partie 3 — Description d&apos;image
                </h2>
                <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                  Enregistrez autant de phrases que vous voulez, puis validez.
                </p>
              </div>
              <button
                type="button"
                onClick={() => { setImageHelpOpen(true); setOpenTranscriptIdx(null); }}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:opacity-80"
                style={{ color: ACCENT }}
                aria-label="Astuces"
                title="Astuces"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M8.5 14.5A7 7 0 1 1 15.5 14.5C14.5 15.2 14 16 14 18h-4c0-2-.5-2.8-1.5-3.5Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white">
            <Image
              src={situation.image}
              alt={situation.alt}
              width={imageWidth}
              height={imageHeight}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          {!task2Done && (
            <div className="space-y-3">
              {currentTranscript && supported && !micBlocked && (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2">
                  <p className="text-xs font-semibold text-[var(--color-text-secondary)]">Retranscription :</p>
                  <p className="text-sm text-[var(--color-text-primary)]">{currentTranscript}</p>
                </div>
              )}
              {(!supported || micBlocked) && (
                <input
                  type="text"
                  value={currentTranscript}
                  onChange={(event) => setCurrentTranscript(event.target.value)}
                  placeholder="Tapez une phrase sur l'image…"
                  className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                />
              )}
              <div className="flex items-center gap-3">
                <MicButton
                  isListening={listening3}
                  supported={supported && !micBlocked}
                  onStart={start3}
                  onStop={stop3}
                />
                <button
                  type="button"
                  onClick={addTask2Phrase}
                  disabled={!currentTranscript.trim() || listening3}
                  className="flex-1 rounded-full py-2.5 text-sm font-bold text-white disabled:opacity-35"
                  style={{ background: ACCENT }}
                >
                  + Ajouter
                </button>
              </div>
            </div>
          )}

          {/* Astuce modal — centered overlay */}
          {imageHelpOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background: "rgba(0,0,0,0.5)" }}
              onClick={() => {
                window.speechSynthesis?.cancel();
                if (guideIntervalRef.current) clearInterval(guideIntervalRef.current);
                setPlayingGuideIdx(null);
                setOpenTranscriptIdx(null);
                setImageHelpOpen(false);
              }}
            >
              <div
                className="relative w-full max-w-sm rounded-2xl bg-[var(--color-bg-primary)] p-5 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  type="button"
                  onClick={() => {
                    window.speechSynthesis?.cancel();
                    if (guideIntervalRef.current) clearInterval(guideIntervalRef.current);
                    setPlayingGuideIdx(null);
                    setOpenTranscriptIdx(null);
                    setImageHelpOpen(false);
                  }}
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                  aria-label="Fermer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <p className="mb-4 pr-6 text-sm font-bold" style={{ color: ACCENT }}>
                  Structure à mémoriser
                </p>

                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      {IMAGE_DESCRIPTION_MEMO.map((_, i) => (
                        <td key={i} className="pb-2 text-center">
                          <span
                            className="mx-auto flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                            style={{ background: ACCENT }}
                          >
                            {i + 1}
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {IMAGE_DESCRIPTION_MEMO.map((q, i) => {
                        const isPlaying = playingGuideIdx === i;
                        return (
                          <td key={i} className="text-center" style={{ width: "12.5%" }}>
                            <button
                              type="button"
                              onClick={() => {
                                window.speechSynthesis?.cancel();
                                if (guideIntervalRef.current) clearInterval(guideIntervalRef.current);
                                if (isPlaying) {
                                  setPlayingGuideIdx(null);
                                  setOpenTranscriptIdx(null);
                                  return;
                                }
                                setPlayingGuideIdx(i);
                                setOpenTranscriptIdx(i);
                                speak(q);
                                guideIntervalRef.current = setInterval(() => {
                                  if (!window.speechSynthesis?.speaking) {
                                    setPlayingGuideIdx(null);
                                    if (guideIntervalRef.current) clearInterval(guideIntervalRef.current);
                                  }
                                }, 150);
                              }}
                              className="mx-auto flex h-7 w-7 items-center justify-center rounded-full text-white shadow-sm transition-all active:scale-95"
                              style={{ background: isPlaying ? "#dc2626" : ACCENT }}
                              aria-label={isPlaying ? "Arrêter" : "Écouter"}
                            >
                              {isPlaying ? (
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                  <rect x="6" y="4" width="4" height="16" rx="1" />
                                  <rect x="14" y="4" width="4" height="16" rx="1" />
                                </svg>
                              ) : (
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                  <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                              )}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>

                {/* Transcript shown below table when an audio is active */}
                {openTranscriptIdx !== null && (
                  <p className="mt-3 border-t border-[var(--color-border-default)] pt-3 text-sm italic leading-relaxed text-[var(--color-text-primary)]">
                    {IMAGE_DESCRIPTION_MEMO[openTranscriptIdx]}
                  </p>
                )}
              </div>
            </div>
          )}

          {task2Phrases.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
                {task2Done ? "Vos phrases :" : `${task2Phrases.length} phrase${task2Phrases.length > 1 ? "s" : ""} enregistrée${task2Phrases.length > 1 ? "s" : ""} :`}
              </p>
              {task2Phrases.map((phrase, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-[var(--radius-md)] px-3 py-2"
                  style={{ background: `color-mix(in srgb, ${ACCENT} 10%, transparent)` }}
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ background: ACCENT }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm text-[var(--color-text-primary)]">{phrase}</p>
                </div>
              ))}
            </div>
          )}

          {task2Done && (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Description enregistrée. Appuyez sur <strong>Suivant</strong> pour continuer.
            </p>
          )}
        </div>
      )}

      {/* ——— TASK 4: Dialogue (structured script) ——— */}
      {phase === "task4" && (
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
              Partie 4 — Dialogue
            </h2>
            <p className="mt-1 text-sm font-medium" style={{ color: ACCENT }}>
              {dialogueState.roleText}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white">
            <Image
              src={situation.image}
              alt={situation.alt}
              width={imageWidth}
              height={imageHeight}
              className="block h-auto w-full"
            />
            <div className="absolute right-3 top-3">
              <SpeakButton text={situation.dialogueContext} onLight />
            </div>
          </div>

          {!task4Done && (() => {
            const { script, studentRole, studentTurns } = dialogueState;
            let studentTurnIdx = 0;
            return (
              <div className="space-y-3">
                {script.lines.map((line, lineIdx) => {
                  const isStudent = line.role === studentRole;
                  const hintOpen = openDialogueHint === lineIdx;
                  if (!isStudent) {
                    const interlocutor = line.role === "A" ? script.roleA : script.roleB;
                    return (
                      <div
                        key={lineIdx}
                        className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
                            {interlocutor.title}
                          </span>
                          <TtsPlayButton text={line.text} small />
                          <div className="flex-1" />
                          <HintLightbulbButton
                            active={hintOpen}
                            onClick={() => setOpenDialogueHint(hintOpen ? null : lineIdx)}
                          />
                        </div>
                        {hintOpen && (
                          <p className="mt-2 text-sm text-[var(--color-text-primary)]">{line.text}</p>
                        )}
                      </div>
                    );
                  }
                  const turnIdx = studentTurnIdx++;
                  const transcript = task4Transcripts[turnIdx] ?? "";
                  const isActiveMic = task4ActiveTurn === turnIdx && listenTask4;
                  return (
                    <div
                      key={lineIdx}
                      className="rounded-[var(--radius-md)] border-2 px-4 py-3 space-y-2 bg-[var(--color-bg-primary)]"
                      style={{ borderColor: ACCENT }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                          style={{ background: ACCENT }}
                        >
                          {turnIdx + 1}
                        </span>
                        <span className="flex-1 text-sm font-medium text-[var(--color-text-primary)]">
                          Votre réplique ({studentTurns.length > 1 ? `${turnIdx + 1}/${studentTurns.length}` : "vous"})
                        </span>
                        {!task4Done && (
                          <ThemeMicButton
                            isListening={isActiveMic}
                            supported={supported && !micBlocked}
                            onStart={() => {
                              setTask4ActiveTurn(turnIdx);
                              task4ActiveTurnRef.current = turnIdx;
                              startTask4();
                            }}
                            onStop={stopTask4}
                          />
                        )}
                        <HintLightbulbButton
                          active={hintOpen}
                          onClick={() => setOpenDialogueHint(hintOpen ? null : lineIdx)}
                        />
                      </div>
                      {hintOpen && (
                        <p className="text-sm italic text-[var(--color-text-secondary)] pl-9">{line.text}</p>
                      )}
                      {transcript && (supported && !micBlocked || task4Done) ? (
                        <p className="text-sm text-[var(--color-text-primary)] pl-9">{transcript}</p>
                      ) : !task4Done && !hintOpen ? (
                        <p className="text-xs italic text-[var(--color-text-secondary)] pl-9">
                          {(supported && !micBlocked) ? "Maintenez le micro pour répondre…" : ""}
                        </p>
                      ) : null}
                      {!task4Done && (!supported || micBlocked) && (
                        <input
                          type="text"
                          value={transcript}
                          onChange={(e) => setTDP(turnIdx, e.target.value)}
                          placeholder="Votre réponse…"
                          className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {task4Done && (
            <div className="space-y-2">
              {task4Lines.map((line, i) => <DialogueBubble key={i} line={line} />)}
            </div>
          )}

          {task4Done && (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Dialogue terminé. Appuyez sur <strong>Suivant</strong> pour continuer.
            </p>
          )}
        </div>
      )}
      {/* ——— TASK 5: Argumentation (multi-phrase like Task 3) ——— */}
      {phase === "task5" && (
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
              Partie 5 — Argumentation
            </h2>
            <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
              Enregistrez autant de phrases que vous voulez, puis validez.
            </p>
          </div>

          <section className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
                  Thème : {argumentationTopic.theme}
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {argumentationTopic.prompt}
                </p>
              </div>
              <SpeakButton text={argumentationTopic.prompt} />
            </div>
          </section>

          {!task5Done && (
            <div className="space-y-3">
              {(!supported || micBlocked) && (
                <input
                  type="text"
                  value={argumentationTranscript}
                  onChange={(e) => setArgumentationTranscript(e.target.value)}
                  placeholder="Tapez une phrase…"
                  className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                />
              )}
              {argumentationTranscript && (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2">
                  <p className="text-xs font-semibold text-[var(--color-text-secondary)]">Retranscription :</p>
                  <p className="text-sm text-[var(--color-text-primary)]">{argumentationTranscript}</p>
                </div>
              )}
              <div className="flex items-center gap-3">
                <MicButton
                  isListening={listening5}
                  supported={supported && !micBlocked}
                  onStart={start5}
                  onStop={stop5}
                />
                <button
                  type="button"
                  onClick={addTask5Phrase}
                  disabled={!argumentationTranscript.trim() || listening5}
                  className="flex-1 rounded-full py-2.5 text-sm font-bold text-white disabled:opacity-35"
                  style={{ background: ACCENT }}
                >
                  + Ajouter
                </button>
              </div>
            </div>
          )}

          {task5Phrases.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
                {task5Done ? "Votre argumentation :" : `${task5Phrases.length} phrase${task5Phrases.length > 1 ? "s" : ""} enregistrée${task5Phrases.length > 1 ? "s" : ""} :`}
              </p>
              {task5Phrases.map((phrase, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-[var(--radius-md)] px-3 py-2"
                  style={{ background: `color-mix(in srgb, ${ACCENT} 10%, transparent)` }}
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ background: ACCENT }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm text-[var(--color-text-primary)]">{phrase}</p>
                </div>
              ))}
            </div>
          )}

          {task5Done && (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Argumentation enregistrée. Appuyez sur <strong>Suivant</strong> pour continuer.
            </p>
          )}
        </div>
      )}


      {/* ——— REVIEW ——— */}
      {phase === "review" && (
        sent ? (
          <div className="flex-1 space-y-5">
            <section className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-accent-comm)]/25 bg-[var(--color-accent-comm)]/10 p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent-comm)]">Envoyé au professeur</p>
              <h2 className="mt-3 text-xl font-bold text-[var(--color-text-primary)]">
                Votre production orale est en attente de notation.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                Le professeur attribuera les points sur 25 et le résultat final. Vous les verrez dans la messagerie après correction.
              </p>
              {sendMessage && <p className="mt-4 text-sm font-semibold text-[var(--color-accent-comm)]">{sendMessage}</p>}
            </section>
            <button
              type="button"
              onClick={() => (mode === "placement" ? handleFinish() : router.push("/messagerie"))}
              className="mt-5 w-full rounded-[var(--radius-lg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}
            >
              {mode === "placement" ? "Terminer" : "Aller à la messagerie"}
            </button>
            {mode !== "placement" && <CommunicationFinishButton onClick={handleFinish} />}
          </div>
        ) : (
        <div className="flex-1 space-y-5">
          <section className="rounded-[var(--radius-lg)] border border-amber-200 bg-amber-50/80 p-5 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Correction professeur requise</p>
            <h2 className="mt-2 text-lg font-bold text-[var(--color-text-primary)]">Aucun résultat n&apos;est calculé automatiquement.</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
              Choisissez un professeur pour envoyer votre production. Les points et le résultat final seront attribués par le professeur.
            </p>
          </section>
          <p className="text-center text-sm text-[var(--color-text-secondary)]">Vous pouvez relire vos réponses avant l&apos;envoi.</p>
          <div className="space-y-3">
            {[
              { num: 1, label: "Questions thématiques", points: 3, lines: task1Lines },
              { num: 2, label: "Entretien dirigé", points: 4, lines: interviewLines },
              { num: 3, label: "Description d'image", points: 5, lines: task2Lines },
              { num: 4, label: "Dialogue", points: 6, lines: task4Lines },
              { num: 5, label: "Argumentation", points: 7, lines: task5Lines },
            ].map(({ num, label, points, lines }) => {
              const isOpen = openReview === num;
              return (
                <CommunicationResultsExercise
                  key={num}
                  index={num - 1}
                  title={label}
                  scoreLabel={`${points} pts`}
                  open={isOpen}
                  onToggle={() => setOpenReview(isOpen ? null : num)}
                >
                  {lines.length ? (
                    lines.map((line, i) => <DialogueBubble key={i} line={{ ...line }} />)
                  ) : (
                    <p className="text-sm text-[var(--color-text-secondary)]">Aucune production enregistrée.</p>
                  )}

                  {num === 1 && (
                    <CorrectionBlock title="Propositions de questions">
                      {prompt.themes.map((theme) => (
                        <div key={theme.word}>
                          <p className="font-semibold">{theme.word}</p>
                          <ul className="ml-4 list-disc text-[var(--color-text-secondary)]">
                            {getThemeSuggestions(theme.word).map((q) => (
                              <li key={q}>{q}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CorrectionBlock>
                  )}

                  {num === 2 && (
                    <CorrectionBlock title="Réponses modèles (Phuoc Van, Aproz)">
                      {interviewQuestions.map((question) => (
                        <p key={question}>
                          <span className="font-semibold">{question}</span>
                          <br />
                          <span className="text-[var(--color-text-secondary)]">
                            {getInterviewSuggestion(question) ?? "—"}
                          </span>
                        </p>
                      ))}
                    </CorrectionBlock>
                  )}

                  {num === 3 && imageDescriptionModel && (
                    <CorrectionBlock title="Description modèle">
                      <p className="mb-2 text-xs font-semibold text-[var(--color-text-secondary)]">Structure à mémoriser :</p>
                      <ul className="mb-3 ml-4 list-disc text-[var(--color-text-secondary)]">
                        {IMAGE_DESCRIPTION_MEMO.map((starter) => (
                          <li key={starter}>{starter}</li>
                        ))}
                      </ul>
                      <p>{imageDescriptionModel.formatted}</p>
                    </CorrectionBlock>
                  )}

                  {num === 4 && (
                    <CorrectionBlock title="Réponses proposées pour cette situation">
                      <p className="mb-2 font-medium">{dialogueState.roleText}</p>
                      <p className="mb-3 text-xs text-[var(--color-text-secondary)]">
                        Niveau {level === "base" ? "PO.1 (base)" : level === "moyen" ? "PO.2 (moyen)" : "PO.3 (avancé)"} — situation : {situation.alt}
                      </p>
                      {([
                        { role: "A" as const, data: dialogueSuggestions.roleA },
                        { role: "B" as const, data: dialogueSuggestions.roleB },
                      ]).map(({ role, data }) => {
                        const isYourRole = role === dialogueState.studentRole;
                        return (
                          <div key={role} className="mb-3">
                            <p className="font-semibold">
                              Si vous êtes {data.title}
                              {isYourRole ? " (votre rôle)" : ""} :
                            </p>
                            <ol className="ml-4 mt-1 list-decimal space-y-1 text-[var(--color-text-secondary)]">
                              {data.responses.map((response, i) => (
                                <li key={i} className={isYourRole ? "text-[var(--color-text-primary)]" : ""}>
                                  {response}
                                </li>
                              ))}
                            </ol>
                          </div>
                        );
                      })}
                      <p className="mt-2 text-xs font-semibold text-[var(--color-text-secondary)]">Dialogue complet :</p>
                      {dialogueState.script.lines.map((line, i) => {
                        const speaker = line.role === "A" ? dialogueState.script.roleA : dialogueState.script.roleB;
                        const isStudent = line.role === dialogueState.studentRole;
                        return (
                          <p key={i} className="text-sm">
                            <span className="font-semibold">{isStudent ? "Vous" : speaker.title} :</span>{" "}
                            <span className={isStudent ? "" : "text-[var(--color-text-secondary)]"}>{line.text}</span>
                          </p>
                        );
                      })}
                    </CorrectionBlock>
                  )}

                  {num === 5 && argumentationResponse && (
                    <CorrectionBlock title="Proposition de réponse">
                      <SampleParagraphs text={argumentationResponse} />
                    </CorrectionBlock>
                  )}
                </CommunicationResultsExercise>
              );
            })}
          </div>
          <CommunicationTeacherSubmit
            teachers={teachers}
            teacherId={teacherId}
            onTeacherChange={setTeacherId}
            onSend={sendToTeacher}
            sent={sent}
            isSending={isSending}
            sendMessage={sendMessage}
          />
          {mode !== "placement" && <CommunicationFinishButton onClick={handleFinish} />}
        </div>
        )
      )}

      {/* Fixed bottom nav — picked up by MainNav */}
      <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back button */}
            <button
              type="button"
              data-nav-action="back"
              onClick={goBack}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity"
            >
              ← Précédent
            </button>

            {/* Validate (task phases only) */}
            {showValidate ? (
              <button
                type="button"
                data-nav-action="validate"
                onClick={handleNavValidate}
                disabled={validateDisabled}
                className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90 disabled:opacity-30"
                style={{ background: ACCENT }}
                aria-label="Valider"
              >
                {isChecking ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-spin" aria-hidden>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            ) : (
              <span />
            )}

            {/* Next / Finish button */}
            {!(mode === "placement" && phase === "review") && (
              <button
                type="button"
                data-nav-action="next"
                data-nav-label={isLastPhase ? "Terminer" : "Suivant"}
                onClick={goNext}
                disabled={nextDisabled}
                className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
                style={{ background: ACCENT }}
              >
                {isLastPhase ? "Terminer ✓" : "Suivant →"}
              </button>
            )}
            {mode === "placement" && phase === "review" && <span className="min-w-[90px]" />}
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>
    </div>
  );
}
