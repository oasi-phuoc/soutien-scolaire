"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import {
  getExpressionTeachersAction,
  type TeacherOption,
} from "@/app/actions/expression";
import { submitOralAction, type OralDialogueLine, type OralGrammarMatch } from "@/app/actions/oral";
import { randomOralPrompt, type OralLevel, type OralPrompt } from "@/lib/curriculum/content/communication/speaking-prompts";
import { normalizeCommunicationProgress } from "@/lib/curriculum/communication-data";

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

// ——— Dialogue bubble ———

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
  const [currentTranscript, setCurrentTranscript] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  // Task 2: image description
  const [task2Lines, setTask2Lines] = useState<OralDialogueLine[]>([]);
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

  // ——— Progress pct ———

  const progressPct =
    phase === "intro" ? 5 :
    phase === "task1" ? 10 + Math.round((themeIndex / 3) * 25) :
    phase === "task2" ? 40 :
    phase === "task3" ? 55 + Math.round((dialogueIndex / prompt.dialoguePrompts.length) * 30) :
    95;

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
      setPhase("task2");
    }
  }

  // ——— Task 2: confirm image description ———

  async function confirmTask2() {
    if (!currentTranscript.trim() || isChecking) return;
    setIsChecking(true);
    const grammar = await checkGrammar(currentTranscript);
    setIsChecking(false);
    setTask2Lines([
      { role: "app", text: "Décrivez cette image." },
      { role: "student", text: currentTranscript, grammar },
    ]);
    setCurrentTranscript("");
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
    ...task2Lines.flatMap((l) => l.grammar ?? []),
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

  // ——— Intro content ———

  const levelLabel = level === "base" ? "Base" : level === "moyen" ? "Moyen" : "Avancé";
  const introSteps =
    level === "base"
      ? [
          "Poser une question sur 3 mots-thèmes simples.",
          "Décrire brièvement une image.",
          "Répondre à 3 questions dans un dialogue du quotidien.",
        ]
      : level === "moyen"
      ? [
          "Poser une question développée sur 3 thèmes.",
          "Décrire une image en donnant des détails.",
          "Participer à un dialogue sur un sujet familier.",
        ]
      : [
          "Formuler une question de fond sur 3 thèmes complexes.",
          "Décrire et interpréter une image.",
          "Développer vos idées dans un dialogue argumenté.",
        ];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pt-4 pb-32">
      {/* Progress bar */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex-1 overflow-hidden rounded-full bg-[var(--color-bg-secondary)] h-2">
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%`, background: ACCENT }}
          />
        </div>
        <span className="text-xs font-medium tabular-nums text-[var(--color-text-secondary)]">
          {progressPct}%
        </span>
      </div>

      {/* ——— INTRO ——— */}
      {phase === "intro" && (
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              Production orale — {levelLabel}
            </p>
            <h1 className="mt-1 text-xl font-bold text-[var(--color-text-primary)]">
              Comment ça se passe ?
            </h1>
          </div>
          <div
            className="rounded-[var(--radius-md)] border-l-2 px-4 py-3 space-y-2"
            style={{ borderColor: ACCENT, background: `color-mix(in srgb, ${ACCENT} 9%, transparent)` }}
          >
            <p className="text-sm font-bold" style={{ color: ACCENT }}>Les 3 parties</p>
            {introSteps.map((step, i) => (
              <div key={i} className="flex gap-2 text-sm text-[var(--color-text-primary)]">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ background: ACCENT }}
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
          <div className="rounded-[var(--radius-md)] border border-amber-300 bg-amber-50 px-3 py-2.5 dark:border-amber-700 dark:bg-amber-950">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Utilisez le bouton <strong>Parler</strong> pour enregistrer votre voix. Votre réponse sera retranscrite et vérifiée automatiquement.
            </p>
          </div>
          {!supported && (
            <div className="rounded-[var(--radius-md)] border border-red-300 bg-red-50 px-3 py-2.5">
              <p className="text-sm text-red-700">
                La reconnaissance vocale n'est pas disponible dans ce navigateur. Utilisez Chrome ou Edge pour une meilleure expérience. Vous pouvez quand même taper vos réponses.
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={() => setPhase("task1")}
            className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            Commencer →
          </button>
        </div>
      )}

      {/* ——— TASK 1: Questions on themes ——— */}
      {phase === "task1" && (
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              Partie 1 — Thème {themeIndex + 1} / 3
            </p>
            <h2 className="mt-1 text-lg font-bold text-[var(--color-text-primary)]">
              Posez une question sur ce mot
            </h2>
          </div>

          {/* Theme word */}
          <div
            className="flex items-center justify-center rounded-[var(--radius-md)] py-8 text-3xl font-bold text-white"
            style={{ background: ACCENT }}
          >
            {prompt.themes[themeIndex]!.word}
          </div>

          {/* Previous theme answers */}
          {task1Lines.length > 0 && (
            <div className="space-y-2">
              {task1Lines.map((line, i) => <DialogueBubble key={i} line={line} />)}
            </div>
          )}

          {/* Current transcript preview */}
          {currentTranscript && (
            <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-3 py-2">
              <p className="text-xs font-semibold text-[var(--color-text-secondary)]">Retranscription :</p>
              <p className="text-sm text-[var(--color-text-primary)]">{currentTranscript}</p>
            </div>
          )}

          {isChecking && <p className="animate-pulse text-xs text-[var(--color-text-secondary)]">Vérification grammaticale…</p>}

          {/* Text input fallback */}
          {!supported && (
            <input
              type="text"
              value={currentTranscript}
              onChange={(e) => setCurrentTranscript(e.target.value)}
              placeholder="Tapez votre question ici…"
              className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
            />
          )}

          <div className="flex items-center gap-3">
            <MicButton
              isListening={listening1}
              supported={supported}
              onStart={start1}
              onStop={stop1}
              disabled={isChecking}
            />
            <button
              type="button"
              onClick={() => void confirmTask1()}
              disabled={!currentTranscript.trim() || isChecking || listening1}
              className="flex-1 rounded-full py-2.5 text-sm font-bold text-white disabled:opacity-35"
              style={{ background: ACCENT }}
            >
              Confirmer
            </button>
          </div>

          <p className="text-xs text-[var(--color-text-secondary)]">
            Exemple : <em>{prompt.themes[themeIndex]!.example}</em>
          </p>
        </div>
      )}

      {/* ——— TASK 2: Image description ——— */}
      {phase === "task2" && (
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              Partie 2 — Description d'image
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

          {task2Lines.length > 0 && (
            <div className="space-y-2">
              {task2Lines.map((line, i) => <DialogueBubble key={i} line={line} />)}
            </div>
          )}

          {!task2Done && (
            <>
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
                  placeholder="Décrivez l'image en quelques phrases…"
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
                  onClick={() => void confirmTask2()}
                  disabled={!currentTranscript.trim() || isChecking || listening2}
                  className="flex-1 rounded-full py-2.5 text-sm font-bold text-white disabled:opacity-35"
                  style={{ background: ACCENT }}
                >
                  Confirmer
                </button>
              </div>
            </>
          )}

          {task2Done && (
            <button
              type="button"
              onClick={() => { setPhase("task3"); }}
              className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
              style={{ background: ACCENT }}
            >
              Partie 3 — Dialogue →
            </button>
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

          <div className="space-y-2">
            {task3Lines.map((line, i) => <DialogueBubble key={i} line={line} />)}
          </div>

          {!task3Done && (
            <>
              {/* Current app prompt */}
              <DialogueBubble
                line={{ role: "app", text: prompt.dialoguePrompts[dialogueIndex]! }}
              />

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
                  onClick={() => void confirmTask3()}
                  disabled={!currentTranscript.trim() || isChecking || listening3}
                  className="flex-1 rounded-full py-2.5 text-sm font-bold text-white disabled:opacity-35"
                  style={{ background: ACCENT }}
                >
                  Répondre
                </button>
              </div>
            </>
          )}

          {task3Done && (
            <button
              type="button"
              onClick={() => setPhase("review")}
              className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
              style={{ background: ACCENT }}
            >
              Voir le récapitulatif →
            </button>
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
                Aucun professeur n'est encore disponible dans la liste.
              </p>
            )}
            {sendMessage && (
              <p className={`mt-2 text-xs font-semibold ${sent ? "text-emerald-600" : "text-amber-600"}`}>
                {sendMessage}
              </p>
            )}
          </section>

          <button
            type="button"
            onClick={handleFinish}
            className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            Terminer ✓
          </button>
        </div>
      )}
    </div>
  );
}
