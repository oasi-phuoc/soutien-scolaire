"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import {
  getExpressionTeachersAction,
  type TeacherOption,
} from "@/app/actions/expression";
import { submitOralAction, type OralDialogueLine, type OralGrammarMatch } from "@/app/actions/oral";
import { randomOralPrompt, type OralLevel, type OralPrompt } from "@/lib/curriculum/content/communication/speaking-prompts";
import { randomOralSituation } from "@/lib/curriculum/content/communication/oral-situations";
import { normalizeCommunicationProgress } from "@/lib/curriculum/communication-data";
import { speak } from "@/lib/utils/speech";

const ACCENT = "var(--color-accent-comm)";
const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";

const IGNORED_RULES = new Set([
  "WHITESPACE_RULE",
  "FRENCH_WHITESPACE",
  "COMMA_PARENTHESIS_WHITESPACE",
  "UNPAIRED_BRACKETS",
]);

type Phase = "intro" | "task1" | "task2" | "task3" | "task4" | "review";

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

const FRENCH_QUESTION_START = /^(?:qui|que|qu['’]est-ce (?:que|qui)|quoi|ou|où|quand|comment|pourquoi|combien|quel(?:le)?s?|est-ce que|(?:avez|etes|êtes|pouvez|voulez|savez|allez|devez)-vous|(?:as|es|peux|veux|sais|vas|dois)-tu|(?:a|est|peut|veut|sait|va|doit)-(?:il|elle|on)|dois-je|puis-je)\b/i;

function normalizeFrenchTranscript(raw: string): string {
  const cleaned = raw
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/([,;:!?])(?=\S)/g, "$1 ");

  if (!cleaned) return "";

  const capitalized = cleaned.replace(/[A-Za-zÀ-ÖØ-öø-ÿ]/, (letter) => letter.toUpperCase());
  if (/[.!?…]$/.test(capitalized)) return capitalized;

  return `${capitalized}${FRENCH_QUESTION_START.test(capitalized) ? "?" : "."}`;
}

function ensureQuestionMark(text: string): string {
  const trimmed = text.trim().replace(/[.!?…]+$/, "");
  return trimmed ? `${trimmed}?` : "";
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
    rec.lang = "fr-FR";
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

async function checkGrammar(text: string): Promise<OralGrammarMatch[]> {
  try {
    const response = await fetch("/api/check-grammar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json() as { matches?: OralGrammarMatch[] };
    return (data.matches ?? []).filter((m) => !IGNORED_RULES.has(m.rule?.id ?? ""));
  } catch {
    return [];
  }
}

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
      <svg width={small ? 14 : 16} height={small ? 14 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    </button>
  );
}

// ——— Voice message bubble (WhatsApp-style for app prompts in task 3) ———

const IMAGE_GUIDE_QUESTIONS = [
  "Qu'est-ce que vous voyez sur l'image ?",
  "Où sont les personnes ?",
  "Que font les personnes ?",
  "Comment sont les personnes ?",
  "De quoi parlent les personnes ?",
  "Qu'est-ce qu'il y a en arrière-plan ?",
  "Quelle est l'ambiance générale de l'image ?",
  "Quelle est votre impression sur cette scène ?",
];

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

function waveformBars(text: string, count = 22): number[] {
  return Array.from({ length: count }, (_, i) => {
    const code = text.charCodeAt(i % Math.max(text.length, 1)) || 65;
    return 0.18 + Math.abs(Math.sin(code * 0.137 + i * 1.31)) * 0.79;
  });
}


function VoiceMessageBubble({
  text,
  hints,
  hintsOpen,
  onToggleHints,
}: {
  text: string;
  hints?: string[];
  hintsOpen?: boolean;
  onToggleHints?: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const checkRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const bars = useMemo(() => waveformBars(text), [text]);

  useEffect(() => () => {
    if (checkRef.current) clearInterval(checkRef.current);
  }, []);

  function handlePlay() {
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
      if (checkRef.current) clearInterval(checkRef.current);
      return;
    }
    setIsPlaying(true);
    speak(text);
    checkRef.current = setInterval(() => {
      if (!window.speechSynthesis?.speaking) {
        setIsPlaying(false);
        if (checkRef.current) clearInterval(checkRef.current);
      }
    }, 150);
  }

  return (
    <div className="flex justify-start">
      <div
        className="w-full max-w-[85%] rounded-2xl rounded-tl-sm px-3 py-2.5"
        style={{ background: `color-mix(in srgb, ${ACCENT} 11%, var(--color-bg-secondary))` }}
      >
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
          Interlocuteur
        </p>

        <div className="flex items-center gap-2">
          {/* Play / pause button */}
          <button
            type="button"
            onClick={handlePlay}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm active:scale-95"
            style={{ background: ACCENT }}
            aria-label={isPlaying ? "Pause" : "Écouter"}
          >
            {isPlaying ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          {/* Waveform bars */}
          <div className="flex flex-1 items-center gap-px" style={{ height: 30 }}>
            {bars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full ${isPlaying ? "animate-pulse" : ""}`}
                style={{
                  height: `${Math.round(h * 100)}%`,
                  background: ACCENT,
                  opacity: isPlaying ? 0.4 + (i % 4) * 0.15 : 0.5,
                  animationDelay: isPlaying ? `${(i % 6) * 80}ms` : undefined,
                }}
              />
            ))}
          </div>

          {/* Expand / collapse text */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold leading-none transition-colors"
            style={{
              borderColor: ACCENT,
              color: expanded ? "white" : ACCENT,
              background: expanded ? ACCENT : "transparent",
            }}
            aria-label={expanded ? "Masquer le texte" : "Afficher le texte"}
          >
            {expanded ? "−" : "+"}
          </button>
        </div>

        {expanded && (
          <p className="mt-2 border-t border-[var(--color-border-default)] pt-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
            {text}
          </p>
        )}
      </div>

      {/* Lightbulb help button */}
      {hints && hints.length > 0 && onToggleHints && (
        <div className="ml-2 flex shrink-0 flex-col items-center">
          <button
            type="button"
            onClick={onToggleHints}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors"
            style={{
              borderColor: hintsOpen ? ACCENT : "var(--color-border-default)",
              background: hintsOpen ? `color-mix(in srgb, ${ACCENT} 12%, transparent)` : "var(--color-bg-secondary)",
              color: hintsOpen ? ACCENT : "var(--color-text-secondary)",
            }}
            aria-label={hintsOpen ? "Masquer les suggestions" : "Voir des suggestions de réponse"}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M9 14a7 7 0 1 1 6 0H9z" />
              <path d="M9 14v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" />
              <line x1="12" y1="18" x2="12" y2="21" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

function HintsPanel({
  hints,
  onUseHint,
}: {
  hints: string[];
  onUseHint: (hint: string) => void;
}) {
  return (
    <div
      className="rounded-[var(--radius-md)] border px-3 py-2.5 space-y-2"
      style={{ borderColor: `color-mix(in srgb, ${ACCENT} 30%, transparent)`, background: `color-mix(in srgb, ${ACCENT} 6%, var(--color-bg-secondary))` }}
    >
      <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
        💡 Suggestions de réponse
      </p>
      <ul className="space-y-1.5">
        {hints.map((hint, i) => (
          <li key={i} className="flex items-start gap-2">
            <button
              type="button"
              onClick={() => onUseHint(hint)}
              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded text-[9px] font-bold text-white"
              style={{ background: ACCENT }}
              aria-label={`Utiliser : ${hint}`}
            >
              ↑
            </button>
            <span className="text-sm leading-snug text-[var(--color-text-primary)]">{hint}</span>
          </li>
        ))}
      </ul>
      <p className="text-[10px] text-[var(--color-text-secondary)]">
        Appuyez sur ↑ pour utiliser une suggestion, puis modifiez-la à votre façon.
      </p>
    </div>
  );
}

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

export function OralProductionRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const lessonCode = lessonCodeFromId(lessonId);

  const [prompt] = useState<OralPrompt>(() => randomOralPrompt(level));
  const [situation] = useState(() => randomOralSituation());
  const compactImage = /PO_(?:Chaussure|Cinema|Telephone)\.webp$/.test(situation.image);
  const imageWidth = compactImage ? 1402 : 1448;
  const imageHeight = compactImage ? 1122 : 1086;
  const [phase, setPhase] = useState<Phase>("intro");

  // Task 1: questions on 3 themes (all shown simultaneously)
  const [task1Transcripts, setTask1Transcripts] = useState<string[]>(["", "", ""]);
  const [task1Lines, setTask1Lines] = useState<OralDialogueLine[]>([]);
  const [task1Done, setTask1Done] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState("");
  const [isChecking, setIsChecking] = useState(false);

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
  const [task2Grammar, setTask2Grammar] = useState<OralGrammarMatch[]>([]);
  const [task2Done, setTask2Done] = useState(false);
  const [imageHelpOpen, setImageHelpOpen] = useState(false);
  const [openTranscriptIdx, setOpenTranscriptIdx] = useState<number | null>(null);
  const [playingGuideIdx, setPlayingGuideIdx] = useState<number | null>(null);
  const guideIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Task 4: dialogue
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [task4Lines, setTask4Lines] = useState<OralDialogueLine[]>([]);
  const [task4Done, setTask4Done] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);

  // Review
  const [teachers, setTeachers] = useState<TeacherOption[]>([]);
  const [teacherId, setTeacherId] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [isSending, startSending] = useTransition();

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

  const onTask4Transcript = useCallback((text: string) => {
    setCurrentTranscript(text);
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
  const { isListening: listening4, startListening: start4, stopListening: stop4 } =
    useSpeechRecognition(onTask4Transcript);

  // Reset transcript + hints on phase/dialogue index change
  useEffect(() => {
    setCurrentTranscript("");
    setHintsOpen(false);
    setImageHelpOpen(false);
  }, [phase, dialogueIndex]);

  // ——— Step index for segmented progress bar ———

  const stepIdx =
    phase === "intro" ? 0 :
    phase === "task1" ? 1 :
    phase === "task2" ? 2 : 3;

  const totalSteps = 4;

  // ——— Task 1: confirm all 3 theme questions at once ———

  async function confirmTask1() {
    const hasAny = task1Transcripts.some((t) => t.trim());
    if (!hasAny || isChecking) return;
    setIsChecking(true);
    const grammarResults = await Promise.all(
      task1Transcripts.map((text) => text.trim() ? checkGrammar(text) : Promise.resolve([]))
    );
    setIsChecking(false);
    const lines: OralDialogueLine[] = [];
    for (let i = 0; i < 3; i++) {
      const theme = prompt.themes[i]!;
      lines.push(
        { role: "app", text: `Thème : « ${theme.word} »` },
        { role: "student", text: task1Transcripts[i] || "(pas de réponse)", grammar: grammarResults[i] ?? [] },
      );
    }
    setTask1Lines(lines);
    setTask1Done(true);
  }

  // ——— Task 2: directed interview (all questions at once) ———

  async function confirmInterview() {
    const hasAny = interviewTranscripts.some((t) => t.trim());
    if (!hasAny || isChecking) return;
    setIsChecking(true);
    const grammarResults = await Promise.all(
      interviewTranscripts.map((text) => text.trim() ? checkGrammar(text) : Promise.resolve([]))
    );
    setIsChecking(false);
    const lines: OralDialogueLine[] = [];
    for (let i = 0; i < interviewQuestions.length; i++) {
      lines.push(
        { role: "app", text: interviewQuestions[i]! },
        { role: "student", text: interviewTranscripts[i] || "(pas de réponse)", grammar: grammarResults[i] ?? [] },
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

  async function validateTask2() {
    if (task2Phrases.length === 0 || isChecking) return;
    setIsChecking(true);
    const grammar = await checkGrammar(task2Phrases.join(" "));
    setIsChecking(false);
    setTask2Lines([
      { role: "app", text: "Décrivez cette image." },
      ...task2Phrases.map((phrase) => ({ role: "student" as const, text: phrase })),
    ]);
    setTask2Grammar(grammar);
    setTask2Done(true);
  }

  // ——— Task 4: dialogue responses ———

  async function confirmDialogue() {
    if (!currentTranscript.trim() || isChecking) return;
    setIsChecking(true);
    const grammar = await checkGrammar(currentTranscript);
    setIsChecking(false);
    const promptText = situation.dialoguePrompts[dialogueIndex]!;
    const newLines: OralDialogueLine[] = [
      { role: "app", text: promptText },
      { role: "student", text: currentTranscript, grammar },
    ];
    setTask4Lines((prev) => [...prev, ...newLines]);
    setCurrentTranscript("");
    if (dialogueIndex + 1 < situation.dialoguePrompts.length) {
      setDialogueIndex((i) => i + 1);
    } else {
      setTask4Done(true);
    }
  }

  // ——— All grammar matches for review ———

  const allGrammar = [
    ...task1Lines.flatMap((l) => l.grammar ?? []),
    ...interviewLines.flatMap((l) => l.grammar ?? []),
    ...task2Grammar,
    ...task4Lines.flatMap((l) => l.grammar ?? []),
  ];

  const fullDialogue = [...task1Lines, ...interviewLines, ...task2Lines, ...task4Lines];

  // ——— Save progress + finish ———

  function handleFinish() {
    try {
      const raw = localStorage.getItem(COMM_PROGRESS_KEY);
      const prev = normalizeCommunicationProgress(raw ? JSON.parse(raw) : {});
      prev[lessonId] = true;
      localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify(prev));
      const MAIN_KEY = "soutien-learning-progress-v1";
      const mainRaw = localStorage.getItem(MAIN_KEY);
      if (mainRaw) {
        const main = JSON.parse(mainRaw) as Record<string, unknown>;
        main.commProgress = prev;
        localStorage.setItem(MAIN_KEY, JSON.stringify(main));
        window.dispatchEvent(new CustomEvent("progress-saved", { detail: main }));
      }
    } catch { /* ignore */ }
    router.push("/francais?tab=communication");
  }

  function sendToTeacher() {
    if (!teacherId || sent) return;
    startSending(async () => {
      const submissionPrompt: OralPrompt = {
        ...prompt,
        id: `${prompt.id}-${situation.id}`,
        imageDescription: situation.imageDescription,
        dialogueContext: situation.dialogueContext,
        dialoguePrompts: situation.dialoguePrompts,
      };
      const result = await submitOralAction({
        teacherId,
        lessonCode,
        level,
        prompt: submissionPrompt,
        dialogue: fullDialogue,
        aiFeedback: allGrammar,
      });
      setSendMessage(result.ok ? "Dialogue envoyé au professeur." : (result.reason ?? "Envoi impossible."));
      setSent(result.ok);
    });
  }

  // ——— Nav bar logic ———

  function goBack() {
    if (phase === "intro") router.push("/francais?tab=communication");
    else if (phase === "task1") setPhase("intro");
    else if (phase === "task2") setPhase("task1");
    else if (phase === "task3") setPhase("task2");
    else if (phase === "task4") setPhase("task3");
    else setPhase("task4");
  }

  const allTasksDone = task1Done && interviewDone && task2Done && task4Done;

  function goNext() {
    if (phase === "intro") setPhase("task1");
    else if (phase === "task1") setPhase("task2");
    else if (phase === "task2") setPhase("task3");
    else if (phase === "task3") setPhase("task4");
    else if (phase === "task4") setPhase(allTasksDone ? "review" : "task1");
    else handleFinish();
  }

  function handleNavValidate() {
    if (phase === "task1") void confirmTask1();
    else if (phase === "task2") void confirmInterview();
    else if (phase === "task3") void validateTask2();
    else if (phase === "task4") void confirmDialogue();
  }

  const showValidate =
    (phase === "task1" && !task1Done) ||
    (phase === "task2" && !interviewDone) ||
    (phase === "task3" && !task2Done) ||
    (phase === "task4" && !task4Done);

  const validateDisabled =
    (phase === "task1" && (!task1Transcripts.some((t) => t.trim()) || isChecking)) ||
    (phase === "task2" && (!interviewTranscripts.some((t) => t.trim()) || isChecking)) ||
    (phase === "task3" && (task2Phrases.length === 0 || isChecking)) ||
    (phase === "task4" && (!currentTranscript.trim() || listening4 || isChecking));

  // Free navigation: Suivant never depends on validation.
  const nextDisabled = false;

  const isLastPhase = phase === "review";

  // ——— Level labels ———

  const levelLabel = level === "base" ? "Base" : level === "moyen" ? "Moyen" : "Avancé";

  // ——— Theory content per level ———

  const theoryParts: { title: string; body: string }[] =
    level === "base"
      ? [
          {
            title: "Partie 1 — Questions thématiques",
            body: "Trois mots s'affichent à l'écran. Posez une question simple sur chacun, puis validez.",
          },
          {
            title: "Partie 2 — Entretien dirigé",
            body: "Des questions vous sont posées. Écoutez les questions, puis répondez oralement en maintenant le micro.",
          },
          {
            title: "Partie 3 — Description d'image",
            body: "Une image apparaît. Décrivez l'image avec des phrases en maintenant le micro. Ajoutez des phrases pour compléter votre description. Validez quand vous avez terminé.",
          },
          {
            title: "Partie 4 — Dialogue",
            body: "Un interlocuteur vous pose des questions. Écoutez l'audio, puis répondez. Appuyez sur + pour afficher le texte si vous ne comprenez pas bien.",
          },
        ]
      : level === "moyen"
      ? [
          {
            title: "Partie 1 — Questions thématiques",
            body: "Trois mots s'affichent. Formulez une question ouverte et développée sur chacun. Évitez les questions fermées (oui/non).",
          },
          {
            title: "Partie 2 — Entretien dirigé",
            body: "Répondez aux questions posées oralement. Développez vos réponses au-delà du minimum.",
          },
          {
            title: "Partie 3 — Description d'image",
            body: "Décrivez l'image avec des détails : personnes, lieu, actions et ambiance. Ajoutez phrase par phrase, puis validez.",
          },
          {
            title: "Partie 4 — Dialogue",
            body: "Participez à un dialogue sur un sujet de la vie quotidienne. Développez vos réponses et utilisez + pour lire le texte si nécessaire.",
          },
        ]
      : [
          {
            title: "Partie 1 — Questions thématiques",
            body: "Formulez une question argumentée et nuancée sur chaque thème proposé.",
          },
          {
            title: "Partie 2 — Entretien dirigé",
            body: "Répondez de manière développée et structurée aux questions posées.",
          },
          {
            title: "Partie 3 — Description et interprétation",
            body: "Décrivez l'image en détail et interprétez son contexte ou ses symboles éventuels.",
          },
          {
            title: "Partie 4 — Dialogue argumenté",
            body: "Développez vos idées avec des arguments et des exemples. Exprimez votre opinion et réagissez aux questions.",
          },
        ];

  const tips = [
    "Parlez clairement et à un rythme naturel.",
    "Utilisez le bouton Parler pour enregistrer votre voix.",
    "Appuyez sur Valider ✓ dans la barre de navigation pour confirmer chaque réponse.",
  ];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pt-4 pb-32">
      {/* Header */}
      <header className="mb-4 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: ACCENT }}>
          Français · Production orale · {levelLabel}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/francais?tab=communication"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
            style={{ background: ACCENT }}
            aria-label="Retour au français"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {lessonCode} — Production orale
          </h1>
        </div>
      </header>

      {/* Segmented progress bar — hidden on recap page */}
      {phase !== "review" && (
        <div className="mb-6 flex gap-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i > stepIdx ? "bg-[var(--color-border-default)]" : ""}`}
              style={i <= stepIdx ? { background: ACCENT, opacity: i < stepIdx ? 1 : 0.6 } : undefined}
            />
          ))}
        </div>
      )}

      {/* ——— INTRO / THEORY ——— */}
      {phase === "intro" && (
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
            Comment se déroule la production orale ?
          </h2>

          {/* The 3 parts detail */}
          <div className="space-y-2.5">
            {theoryParts.map((part, i) => (
              <div
                key={i}
                className="rounded-[var(--radius-md)] px-4 py-3"
                style={{ background: `color-mix(in srgb, ${ACCENT} 9%, var(--color-bg-secondary))` }}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ background: ACCENT }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
                    {part.title}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                  {part.body}
                </p>
              </div>
            ))}
          </div>

          {!supported && (
            <div className="rounded-[var(--radius-md)] border border-red-300 bg-red-50 px-3 py-2.5">
              <p className="text-sm text-red-700">
                La reconnaissance vocale n&apos;est pas disponible dans ce navigateur. Utilisez Chrome ou Edge pour une meilleure expérience.
              </p>
            </div>
          )}
        </div>
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
              <div className="mt-1 text-sm text-[var(--color-text-secondary)] space-y-0.5">
                <p>Posez une question sur ces trois mots.</p>
                <p className="flex items-center gap-1.5">
                  Maintenez
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ color: ACCENT }}>
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  pour parler.
                </p>
              </div>
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
                          supported={supported}
                          onStart={onStartI}
                          onStop={onStopI}
                          disabled={isChecking}
                        />
                      )}
                    </div>
                    {transcript ? (
                      <p className="text-sm text-[var(--color-text-primary)] pl-9">{transcript}</p>
                    ) : !task1Done ? (
                      <p className="text-xs italic text-[var(--color-text-secondary)] pl-9">
                        {supported ? "Maintenez le micro pour enregistrer…" : ""}
                      </p>
                    ) : null}
                    {!task1Done && !supported && (
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

            {isChecking && <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Vérification grammaticale…</p>}

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
            <div className="mt-1 text-sm text-[var(--color-text-secondary)] space-y-0.5">
              <p>Répondez aux questions.</p>
              <p className="flex items-center gap-1.5">
                Maintenez
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ color: ACCENT }}>
                  <rect x="9" y="2" width="6" height="12" rx="3" />
                  <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                </svg>
                pour parler.
              </p>
            </div>
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
                            supported={supported}
                            onStart={iqStarters[i]!}
                            onStop={iqStoppers[i]!}
                            disabled={isChecking}
                          />
                        )}
                      </div>
                      {transcript ? (
                        <p className="text-sm text-[var(--color-text-primary)] pl-9">{transcript}</p>
                      ) : !interviewDone ? (
                        <p className="text-xs italic text-[var(--color-text-secondary)] pl-9">
                          {supported ? "Maintenez le micro pour enregistrer…" : ""}
                        </p>
                      ) : null}
                      {!interviewDone && !supported && (
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

          {isChecking && <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Vérification grammaticale…</p>}

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
              <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
                Partie 3 — Description d&apos;image
              </h2>
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
            <div className="mt-1 text-sm text-[var(--color-text-secondary)] space-y-0.5">
              <p>Décrivez cette image.</p>
              <p className="flex items-center gap-1.5">
                Maintenez
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ color: ACCENT }}>
                  <rect x="9" y="2" width="6" height="12" rx="3" />
                  <path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                </svg>
                pour ajouter une phrase.
              </p>
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
              {currentTranscript && (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2">
                  <p className="text-xs font-semibold text-[var(--color-text-secondary)]">Retranscription :</p>
                  <p className="text-sm text-[var(--color-text-primary)]">{currentTranscript}</p>
                </div>
              )}
              {isChecking && (
                <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Vérification grammaticale…</p>
              )}
              {!supported && (
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
                  supported={supported}
                  onStart={start3}
                  onStop={stop3}
                  disabled={isChecking}
                />
                <button
                  type="button"
                  onClick={addTask2Phrase}
                  disabled={!currentTranscript.trim() || isChecking || listening3}
                  className="flex-1 rounded-full py-2.5 text-sm font-bold text-white disabled:opacity-35"
                  style={{ background: ACCENT }}
                >
                  + Ajouter
                </button>
              </div>
              {task2Phrases.length === 0 && (
                <p className="text-center text-xs text-[var(--color-text-secondary)]">
                  Enregistrez autant de phrases que vous voulez, puis validez.
                </p>
              )}
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
                  Astuces — Questions guide
                </p>

                {/* 2-row table: number / audio (clicking audio shows transcript) */}
                <table className="w-full border-collapse">
                  <tbody>
                    {/* Row 1: numbers */}
                    <tr>
                      {IMAGE_GUIDE_QUESTIONS.map((_, i) => (
                        <td key={i} className="pb-2 text-center" style={{ width: "12.5%" }}>
                          <span
                            className="mx-auto flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                            style={{ background: ACCENT }}
                          >
                            {i + 1}
                          </span>
                        </td>
                      ))}
                    </tr>
                    {/* Row 2: audio buttons */}
                    <tr>
                      {IMAGE_GUIDE_QUESTIONS.map((q, i) => {
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
                    {IMAGE_GUIDE_QUESTIONS[openTranscriptIdx]}
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

      {/* ——— TASK 4: Dialogue ——— */}
      {phase === "task4" && (
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
              Partie 4 — Dialogue
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Écoutez la consigne de la situation.
            </p>
          </div>

          {/* Image with audio icon overlay */}
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

          {/* Past dialogue lines */}
          {task4Lines.length > 0 && (
            <div className="space-y-2">
              {task4Lines.map((line, i) => <DialogueBubble key={i} line={line} />)}
            </div>
          )}

          {!task4Done && (
            <>
              {/* Current app prompt — voice message style */}
              {(() => {
                const currentHints: string[] = [];
                return (
                  <>
                    <VoiceMessageBubble
                      text={situation.dialoguePrompts[dialogueIndex]!}
                      hints={currentHints}
                      hintsOpen={hintsOpen}
                      onToggleHints={() => setHintsOpen((v) => !v)}
                    />
                    {hintsOpen && currentHints && currentHints.length > 0 && (
                      <HintsPanel
                        hints={currentHints}
                        onUseHint={(hint) => { setCurrentTranscript(hint); setHintsOpen(false); }}
                      />
                    )}
                  </>
                );
              })()}

              {currentTranscript && (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2">
                  <p className="text-xs font-semibold text-[var(--color-text-secondary)]">Retranscription :</p>
                  <p className="text-sm text-[var(--color-text-primary)]">{currentTranscript}</p>
                </div>
              )}
              {isChecking && <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Vérification grammaticale…</p>}
              {!supported && (
                <input
                  type="text"
                  value={currentTranscript}
                  onChange={(e) => setCurrentTranscript(e.target.value)}
                  placeholder="Votre réponse…"
                  className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                />
              )}
              <MicButton
                isListening={listening4}
                supported={supported}
                onStart={start4}
                onStop={stop4}
                disabled={isChecking}
              />
            </>
          )}

          {task4Done && (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Dialogue terminé. Appuyez sur <strong>Suivant</strong> pour voir le récapitulatif.
            </p>
          )}
        </div>
      )}

      {/* ——— REVIEW ——— */}
      {phase === "review" && (
        <div className="flex-1 space-y-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              Récapitulatif
            </p>
            <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">
              Votre production orale
            </h2>
          </div>

          {/* Full dialogue */}
          <section>
            <h3 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">Dialogue complet</h3>
            <div className="space-y-2">
              {fullDialogue.map((line, i) => (
                <DialogueBubble key={i} line={{ ...line, grammar: undefined }} />
              ))}
            </div>
          </section>

          {/* Send to teacher */}
          <section className="rounded-[var(--radius-md)] border border-[var(--color-accent-comm)]/25 bg-[var(--color-accent-comm)]/5 p-4">
            <h3 className="font-bold text-[var(--color-text-primary)]">Envoyer à un professeur</h3>
            {teachers.length ? (
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <select
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  disabled={sent}
                  className="min-h-11 flex-1 rounded-[var(--radius-md)] border border-[var(--color-accent-comm)]/35 bg-white px-3 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                >
                  <option value="">Choisissez un professeur</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {[t.prenom, t.nom].filter(Boolean).join(" ") || "Professeur"}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={sendToTeacher}
                  disabled={!teacherId || isSending || sent}
                  className="min-h-11 rounded-[var(--radius-md)] bg-[var(--color-accent-comm)] px-5 text-sm font-bold text-white disabled:opacity-35"
                >
                  {sent ? "Envoyé" : isSending ? "Envoi…" : "Envoyer"}
                </button>
              </div>
            ) : (
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Aucun professeur n&apos;est encore disponible dans la liste.
              </p>
            )}
            {sendMessage && (
              <p className={`mt-2 text-xs font-semibold ${sent ? "text-emerald-600" : "text-amber-600"}`}>
                {sendMessage}
              </p>
            )}
          </section>
        </div>
      )}

      {/* Fixed bottom nav — picked up by MainNav */}
      <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back button */}
            <button
              type="button"
              onClick={goBack}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity"
            >
              ← Retour
            </button>

            {/* Validate (task phases only) */}
            {showValidate ? (
              <button
                type="button"
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
            <button
              type="button"
              onClick={goNext}
              disabled={nextDisabled}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
              style={{ background: ACCENT }}
            >
              {isLastPhase ? "Terminer ✓" : "Suivant →"}
            </button>
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>
    </div>
  );
}
