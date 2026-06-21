"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import {
  getExpressionTeachersAction,
  type TeacherOption,
} from "@/app/actions/expression";
import { submitOralAction, type OralDialogueLine, type OralGrammarMatch } from "@/app/actions/oral";
import { randomOralPrompt, type OralLevel, type OralPrompt } from "@/lib/curriculum/content/communication/speaking-prompts";
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

type Phase = "intro" | "task1" | "task2" | "task3" | "review";

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

function useSpeechRecognition(onTranscript: (text: string) => void) {
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!getSpeechRecognition()) setSupported(false);
  }, []);

  const startListening = useCallback(() => {
    const SR = getSpeechRecognition();
    if (!SR) return;
    const rec = new SR();
    rec.lang = "fr-FR";
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (event) => {
      const transcript = event.results[event.resultIndex]?.[0]?.transcript ?? "";
      if (transcript.trim()) onTranscript(transcript.trim());
    };
    rec.onerror = () => setIsListening(false);
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

// ——— Mic button ———

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
    <button
      type="button"
      onClick={isListening ? onStop : onStart}
      disabled={disabled}
      className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow transition-all active:scale-95 disabled:opacity-40"
      style={{ background: isListening ? "#dc2626" : ACCENT }}
      aria-label={isListening ? "Arrêter l'enregistrement" : "Commencer à parler"}
    >
      <span className={`h-3 w-3 rounded-full ${isListening ? "animate-pulse bg-white" : "bg-white/80"}`} />
      {isListening ? "Arrêter" : "Parler"}
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

function waveformBars(text: string, count = 22): number[] {
  return Array.from({ length: count }, (_, i) => {
    const code = text.charCodeAt(i % Math.max(text.length, 1)) || 65;
    return 0.18 + Math.abs(Math.sin(code * 0.137 + i * 1.31)) * 0.79;
  });
}

function VoiceMessageBubble({ text }: { text: string }) {
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
    </div>
  );
}

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
        {line.grammar && line.grammar.length > 0 && (
          <ul className="mt-1.5 space-y-0.5 border-t border-white/20 pt-1">
            {line.grammar.map((g, i) => (
              <li key={i} className="text-[10px] leading-snug text-amber-200">
                {g.shortMessage || g.message}
                {g.replacements?.length ? ` → ${g.replacements.slice(0, 2).map((r) => r.value).join(" / ")}` : ""}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ——— Grammar corrections panel ———

function GrammarPanel({ matches }: { matches: OralGrammarMatch[] }) {
  if (matches.length === 0) return (
    <p className="text-sm text-[var(--color-text-secondary)]">Aucune erreur évidente détectée.</p>
  );
  return (
    <ul className="space-y-2">
      {matches.map((m, i) => (
        <li key={i} className="text-sm text-[var(--color-text-primary)]">
          <span className="font-semibold text-amber-600">{m.shortMessage || m.message}</span>
          {m.replacements?.length ? (
            <span className="ml-1 text-[var(--color-text-secondary)]">
              → {m.replacements.slice(0, 3).map((r) => r.value).join(" / ")}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

// ——— Main component ———

export function OralProductionRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const lessonCode = lessonCodeFromId(lessonId);

  const [prompt] = useState<OralPrompt>(() => randomOralPrompt(level));
  const [phase, setPhase] = useState<Phase>("intro");

  // Task 1: questions on 3 themes
  const [themeIndex, setThemeIndex] = useState(0);
  const [task1Lines, setTask1Lines] = useState<OralDialogueLine[]>([]);
  const [task1Done, setTask1Done] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  // Task 2: image description (multi-phrase)
  const [task2Phrases, setTask2Phrases] = useState<string[]>([]);
  const [task2Lines, setTask2Lines] = useState<OralDialogueLine[]>([]);
  const [task2Grammar, setTask2Grammar] = useState<OralGrammarMatch[]>([]);
  const [task2Done, setTask2Done] = useState(false);

  // Task 3: dialogue
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [task3Lines, setTask3Lines] = useState<OralDialogueLine[]>([]);
  const [task3Done, setTask3Done] = useState(false);

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

  const onTask1Transcript = useCallback((text: string) => {
    setCurrentTranscript(text);
  }, []);

  const onTask2Transcript = useCallback((text: string) => {
    setCurrentTranscript(text);
  }, []);

  const onTask3Transcript = useCallback((text: string) => {
    setCurrentTranscript(text);
  }, []);

  const { isListening: listening1, supported, startListening: start1, stopListening: stop1 } =
    useSpeechRecognition(onTask1Transcript);
  const { isListening: listening2, startListening: start2, stopListening: stop2 } =
    useSpeechRecognition(onTask2Transcript);
  const { isListening: listening3, startListening: start3, stopListening: stop3 } =
    useSpeechRecognition(onTask3Transcript);

  // Reset transcript on phase/index change
  useEffect(() => { setCurrentTranscript(""); }, [phase, themeIndex, dialogueIndex]);

  // ——— Step index for segmented progress bar ———

  const stepIdx =
    phase === "intro" ? 0 :
    phase === "task1" ? 1 :
    phase === "task2" ? 2 : 3;

  const totalSteps = 4;

  // ——— Task 1: confirm a theme question ———

  async function confirmTask1() {
    if (!currentTranscript.trim() || isChecking) return;
    setIsChecking(true);
    const grammar = await checkGrammar(currentTranscript);
    setIsChecking(false);
    const theme = prompt.themes[themeIndex]!;
    const newLines: OralDialogueLine[] = [
      { role: "app", text: `Thème : « ${theme.word} »` },
      { role: "student", text: currentTranscript, grammar },
    ];
    setTask1Lines((prev) => [...prev, ...newLines]);
    setCurrentTranscript("");
    if (themeIndex + 1 < 3) {
      setThemeIndex((i) => i + 1);
    } else {
      setTask1Done(true);
    }
  }

  // ——— Task 2: accumulate phrases then validate all at once ———

  function addTask2Phrase() {
    if (!currentTranscript.trim() || listening2) return;
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

  // ——— Task 3: dialogue responses ———

  async function confirmTask3() {
    if (!currentTranscript.trim() || isChecking) return;
    setIsChecking(true);
    const grammar = await checkGrammar(currentTranscript);
    setIsChecking(false);
    const promptText = prompt.dialoguePrompts[dialogueIndex]!;
    const newLines: OralDialogueLine[] = [
      { role: "app", text: promptText },
      { role: "student", text: currentTranscript, grammar },
    ];
    setTask3Lines((prev) => [...prev, ...newLines]);
    setCurrentTranscript("");
    if (dialogueIndex + 1 < prompt.dialoguePrompts.length) {
      setDialogueIndex((i) => i + 1);
    } else {
      setTask3Done(true);
    }
  }

  // ——— All grammar matches for review ———

  const allGrammar = [
    ...task1Lines.flatMap((l) => l.grammar ?? []),
    ...task2Grammar,
    ...task3Lines.flatMap((l) => l.grammar ?? []),
  ];

  const fullDialogue = [...task1Lines, ...task2Lines, ...task3Lines];

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
      const result = await submitOralAction({
        teacherId,
        lessonCode,
        level,
        prompt,
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
    else setPhase("task3");
  }

  function goNext() {
    if (phase === "intro") setPhase("task1");
    else if (phase === "task1") setPhase("task2");
    else if (phase === "task2") setPhase("task3");
    else if (phase === "task3") setPhase("review");
    else handleFinish();
  }

  function handleNavValidate() {
    if (phase === "task1") void confirmTask1();
    else if (phase === "task2") void validateTask2();
    else if (phase === "task3") void confirmTask3();
  }

  const showValidate =
    (phase === "task1" && !task1Done) ||
    (phase === "task2" && !task2Done) ||
    (phase === "task3" && !task3Done);

  const validateDisabled =
    (phase === "task1" && (!currentTranscript.trim() || listening1 || isChecking)) ||
    (phase === "task2" && (task2Phrases.length === 0 || isChecking)) ||
    (phase === "task3" && (!currentTranscript.trim() || listening3 || isChecking));

  const nextDisabled =
    (phase === "task1" && !task1Done) ||
    (phase === "task2" && !task2Done) ||
    (phase === "task3" && !task3Done);

  const isLastPhase = phase === "review";

  // ——— Level labels ———

  const levelLabel = level === "base" ? "Base" : level === "moyen" ? "Moyen" : "Avancé";

  // ——— Theory content per level ———

  const theoryParts: { title: string; body: string }[] =
    level === "base"
      ? [
          {
            title: "Partie 1 — Questions thématiques",
            body: "Un mot s'affiche à l'écran. Posez une question simple en rapport avec ce thème, puis confirmez. Vous passerez ainsi 3 mots différents.",
          },
          {
            title: "Partie 2 — Description d'image",
            body: "Une image est présentée. Décrivez-la phrase par phrase : enregistrez une phrase, ajoutez-en d'autres si vous le souhaitez, puis validez en une seule fois.",
          },
          {
            title: "Partie 3 — Dialogue",
            body: "Un interlocuteur vous pose des questions. Écoutez l'audio, puis répondez. Appuyez sur + pour afficher le texte si vous ne comprenez pas bien.",
          },
        ]
      : level === "moyen"
      ? [
          {
            title: "Partie 1 — Questions thématiques",
            body: "Un mot-thème est affiché. Formulez une question ouverte et développée sur ce sujet. Évitez les questions fermées (oui/non).",
          },
          {
            title: "Partie 2 — Description d'image",
            body: "Décrivez l'image avec des détails : les personnes, le lieu, les actions, l'ambiance. Enregistrez phrase par phrase, puis validez.",
          },
          {
            title: "Partie 3 — Dialogue",
            body: "Participez à un dialogue sur un sujet de la vie quotidienne. Développez vos réponses au-delà de la question posée. Utilisez + pour afficher le texte de l'interlocuteur si nécessaire.",
          },
        ]
      : [
          {
            title: "Partie 1 — Questions thématiques",
            body: "Formulez une question argumentée et nuancée sur le thème proposé. Montrez votre capacité à aborder des sujets complexes.",
          },
          {
            title: "Partie 2 — Description et interprétation",
            body: "Décrivez l'image en détail, puis interprétez-la : quel sens, quel contexte, quels symboles éventuels ? Enregistrez vos observations phrase par phrase.",
          },
          {
            title: "Partie 3 — Dialogue argumenté",
            body: "Développez vos idées avec des arguments et des exemples. Exprimez votre opinion et réagissez aux questions. Utilisez + pour afficher le texte si nécessaire.",
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

          {/* Tips */}
          <div className="rounded-[var(--radius-md)] border border-amber-300 bg-amber-50 px-3 py-3 dark:border-amber-700 dark:bg-amber-950">
            <p className="mb-1.5 text-xs font-bold text-amber-700 dark:text-amber-300">Conseils</p>
            <ul className="space-y-1">
              {tips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-sm text-amber-800 dark:text-amber-200">
                  <span className="mt-0.5 shrink-0 text-amber-500">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
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
      {phase === "task1" && (
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              Partie 1 — Thème {Math.min(themeIndex + 1, 3)} / 3
            </p>
            <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">
              {task1Done ? "Questions terminées" : "Posez une question sur ce mot"}
            </h2>
          </div>

          {/* Theme word */}
          {!task1Done && (
            <div
              className="relative flex items-center justify-center rounded-[var(--radius-md)] py-8 text-3xl font-bold text-white"
              style={{ background: ACCENT }}
            >
              {prompt.themes[themeIndex]!.word}
              <span className="absolute right-3 top-3">
                <SpeakButton text={prompt.themes[themeIndex]!.word} small onLight />
              </span>
            </div>
          )}

          {/* Previous theme answers */}
          {task1Lines.length > 0 && (
            <div className="space-y-2">
              {task1Lines.map((line, i) => <DialogueBubble key={i} line={line} />)}
            </div>
          )}

          {/* Current transcript preview */}
          {!task1Done && currentTranscript && (
            <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2">
              <p className="text-xs font-semibold text-[var(--color-text-secondary)]">Retranscription :</p>
              <p className="text-sm text-[var(--color-text-primary)]">{currentTranscript}</p>
            </div>
          )}

          {isChecking && <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Vérification grammaticale…</p>}

          {!supported && !task1Done && (
            <input
              type="text"
              value={currentTranscript}
              onChange={(e) => setCurrentTranscript(e.target.value)}
              placeholder="Tapez votre question ici…"
              className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
            />
          )}

          {!task1Done && (
            <>
              <MicButton
                isListening={listening1}
                supported={supported}
                onStart={start1}
                onStop={stop1}
                disabled={isChecking}
              />
              <p className="text-xs text-[var(--color-text-secondary)]">
                Exemple : <em>{prompt.themes[themeIndex]!.example}</em>
              </p>
            </>
          )}

          {task1Done && (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Toutes vos questions ont été enregistrées. Appuyez sur <strong>Suivant</strong> pour continuer.
            </p>
          )}
        </div>
      )}

      {/* ——— TASK 2: Image description (multi-phrase) ——— */}
      {phase === "task2" && (
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              Partie 2 — Description d&apos;image
            </p>
            <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">
              Décrivez cette image
            </h2>
          </div>

          {/* Image placeholder */}
          <div
            className="flex flex-col items-center justify-center gap-2 rounded-[var(--radius-md)] border-2 border-dashed py-10 text-center"
            style={{ borderColor: ACCENT }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: ACCENT }} aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p className="text-sm font-semibold" style={{ color: ACCENT }}>Image à venir</p>
            <p className="mx-4 text-sm text-[var(--color-text-secondary)]">{prompt.imageDescription}</p>
          </div>

          {/* Accumulated phrases */}
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

          {/* Grammar feedback after validation */}
          {task2Done && (
            <div className="rounded-[var(--radius-md)] border border-amber-300 bg-amber-50 p-3 dark:border-amber-700 dark:bg-amber-950/30">
              <p className="mb-1.5 text-xs font-bold text-amber-700 dark:text-amber-300">Pistes de correction :</p>
              <GrammarPanel matches={task2Grammar} />
            </div>
          )}

          {task2Done && (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              Description enregistrée. Appuyez sur <strong>Suivant</strong> pour continuer.
            </p>
          )}

          {!task2Done && (
            <>
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
                  onChange={(e) => setCurrentTranscript(e.target.value)}
                  placeholder="Tapez une phrase sur l'image…"
                  className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                />
              )}
              <div className="flex items-center gap-3">
                <MicButton
                  isListening={listening2}
                  supported={supported}
                  onStart={start2}
                  onStop={stop2}
                  disabled={isChecking}
                />
                <button
                  type="button"
                  onClick={addTask2Phrase}
                  disabled={!currentTranscript.trim() || isChecking || listening2}
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
            </>
          )}
        </div>
      )}

      {/* ——— TASK 3: Dialogue ——— */}
      {phase === "task3" && (
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              Partie 3 — Dialogue
            </p>
            <h2 className="mt-1 text-base font-bold text-[var(--color-text-primary)]">
              {prompt.dialogueContext}
            </h2>
          </div>

          {/* Past dialogue lines (text always visible) */}
          {task3Lines.length > 0 && (
            <div className="space-y-2">
              {task3Lines.map((line, i) => <DialogueBubble key={i} line={line} />)}
            </div>
          )}

          {!task3Done && (
            <>
              {/* Current app prompt — voice message style */}
              <VoiceMessageBubble text={prompt.dialoguePrompts[dialogueIndex]!} />

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
                isListening={listening3}
                supported={supported}
                onStart={start3}
                onStop={stop3}
                disabled={isChecking}
              />
            </>
          )}

          {task3Done && (
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

          {/* Grammar corrections */}
          <section className="rounded-[var(--radius-md)] border border-amber-300 bg-white/75 p-4">
            <h3 className="mb-2 font-bold text-amber-600">Pistes de correction</h3>
            <GrammarPanel matches={allGrammar} />
            <p className="mt-3 text-xs text-[var(--color-text-secondary)]">
              La correction automatique est une aide. Le professeur peut compléter et expliquer les corrections.
            </p>
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
