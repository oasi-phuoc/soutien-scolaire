"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import { speak } from "@/lib/utils/speech";

const ACCENT = "var(--color-accent-comm)";

type SpeechRecognitionResult = {
  readonly isFinal: boolean;
  readonly 0: { readonly transcript: string };
};

type SpeechRecognitionEventLike = Event & {
  readonly results: {
    readonly length: number;
    readonly [index: number]: SpeechRecognitionResult;
  };
};

type SpeechRecognitionErrorEventLike = Event & {
  readonly error?: string;
};

type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
  correction?: string;
  suggestion?: string;
};

type Scenario = {
  id: string;
  title: string;
  prompt: string;
  firstMessage: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: "presentation",
    title: "Se présenter",
    prompt: "Tu aides l'élève à se présenter: nom, âge, pays, ville, profession ou école.",
    firstMessage: "Bonjour ! Comment vous appelez-vous ?",
  },
  {
    id: "shop",
    title: "Faire un achat",
    prompt: "Tu joues un vendeur dans un magasin. Tu poses des questions simples sur ce que l'élève veut acheter.",
    firstMessage: "Bonjour ! Qu'est-ce que vous cherchez aujourd'hui ?",
  },
  {
    id: "direction",
    title: "Demander son chemin",
    prompt: "Tu aides l'élève à demander et comprendre un chemin simple en ville.",
    firstMessage: "Bonjour ! Où voulez-vous aller ?",
  },
];

function getSpeechRecognitionConstructor(): SpeechRecognitionConstructor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

function markCompleted() {
  try {
    markCommunicationLessonComplete("AI-1");
  } catch {
    /* ignore */
  }
}

export function CommunicationAiPractice() {
  const router = useRouter();
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const [scenarioId, setScenarioId] = useState(SCENARIOS[0]!.id);
  const scenario = useMemo(() => SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0]!, [scenarioId]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: SCENARIOS[0]!.firstMessage },
  ]);
  const [input, setInput] = useState("");
  const [interim, setInterim] = useState("");
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supported = typeof window !== "undefined" && !!getSpeechRecognitionConstructor();

  useEffect(() => {
    setMessages([{ role: "assistant", text: scenario.firstMessage }]);
    setInput("");
    setInterim("");
    setError(null);
    speak(scenario.firstMessage, "fr-CH", 0.86);
  }, [scenario]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
      window.speechSynthesis.cancel();
    };
  }, []);

  function startListening() {
    setError(null);
    const Recognition = getSpeechRecognitionConstructor();
    if (!Recognition) {
      setError("La reconnaissance vocale n'est pas disponible sur ce navigateur.");
      return;
    }

    recognitionRef.current?.abort();
    const recognition = new Recognition();
    recognition.lang = "fr-CH";
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = (event) => {
      setListening(false);
      setError(event.error === "not-allowed" ? "Autorisez le micro pour parler." : "Je n'ai pas réussi à écouter. Réessayez.");
    };
    recognition.onresult = (event) => {
      let finalText = "";
      let interimText = "";
      for (let i = 0; i < event.results.length; i += 1) {
        const result = event.results[i]!;
        if (result.isFinal) finalText += result[0].transcript;
        else interimText += result[0].transcript;
      }
      if (finalText.trim()) {
        setInput((prev) => `${prev}${prev ? " " : ""}${finalText.trim()}`);
        setInterim("");
      } else {
        setInterim(interimText.trim());
      }
    };
    recognitionRef.current = recognition;
    recognition.start();
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setLoading(true);
    setError(null);
    setInput("");
    setInterim("");
    const nextMessages: ChatMessage[] = [...messages, { role: "user", text }];
    setMessages(nextMessages);

    try {
      const res = await fetch("/api/communication/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          scenario: scenario.prompt,
          history: nextMessages.slice(-8).map((m) => ({ role: m.role, text: m.text })),
        }),
      });
      const data = (await res.json()) as { reply?: string; correction?: string; suggestion?: string };
      const reply = data.reply?.trim() || "Très bien. Pouvez-vous préciser votre réponse ?";
      const assistantMessage: ChatMessage = {
        role: "assistant",
        text: reply,
        correction: data.correction?.trim() || undefined,
        suggestion: data.suggestion?.trim() || undefined,
      };
      setMessages([...nextMessages, assistantMessage]);
      speak(reply, "fr-CH", 0.86);
    } catch {
      setError("La réponse n'a pas pu être générée.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pt-4 pb-32">
      <header className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => router.push("/communication")}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: ACCENT }}
          aria-label="Retour"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>Expression orale</p>
          <h1 className="truncate text-2xl font-bold text-[var(--color-text-primary)]">Conversation IA</h1>
        </div>
      </header>

      <div className="mb-4 grid grid-cols-3 gap-2">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setScenarioId(s.id)}
            className="min-h-11 rounded-lg border px-2 text-xs font-semibold transition-colors"
            style={
              scenario.id === s.id
                ? { borderColor: ACCENT, background: "color-mix(in srgb, var(--color-accent-comm) 14%, white)", color: ACCENT }
                : undefined
            }
          >
            {s.title}
          </button>
        ))}
      </div>

      <section className="flex-1 space-y-3 overflow-y-auto rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-3">
        {messages.map((message, index) => {
          const isUser = message.role === "user";
          return (
            <div key={`${message.role}-${index}`} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[86%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  isUser
                    ? "rounded-tr-sm text-white"
                    : "rounded-tl-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
                }`}
                style={isUser ? { background: ACCENT } : undefined}
              >
                <p>{message.text}</p>
                {!isUser && message.correction && (
                  <p className="mt-2 border-t border-[var(--color-border-default)] pt-2 text-xs text-amber-700">
                    {message.correction}
                  </p>
                )}
                {!isUser && message.suggestion && (
                  <button
                    type="button"
                    onClick={() => setInput(message.suggestion ?? "")}
                    className="mt-2 rounded-full border border-amber-300 px-2 py-1 text-xs font-semibold text-amber-700"
                  >
                    {message.suggestion}
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {loading && (
          <div className="text-sm text-[var(--color-text-secondary)]">L&apos;IA prépare une réponse...</div>
        )}
      </section>

      {error && <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">{error}</p>}
      {!supported && (
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">
          La reconnaissance vocale fonctionne surtout avec Chrome ou Edge. Vous pouvez écrire votre réponse au clavier.
        </p>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto flex max-w-xl flex-col gap-2 px-4 py-3">
          {(interim || input) && (
            <div className="rounded-lg bg-[var(--color-bg-secondary)] px-3 py-2 text-sm text-[var(--color-text-primary)]">
              {input}
              {interim && <span className="text-[var(--color-text-secondary)]"> {interim}</span>}
            </div>
          )}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={listening ? stopListening : startListening}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-transform active:scale-95 disabled:opacity-40"
              style={{ background: listening ? "#ef4444" : ACCENT }}
              disabled={!supported}
              aria-label={listening ? "Arrêter" : "Parler"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden>
                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <path d="M12 19v3" />
              </svg>
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") void sendMessage();
              }}
              className="min-h-12 flex-1 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-3 text-sm outline-none focus:border-[var(--color-accent-comm)]"
              placeholder="Répondez en français..."
            />
            <button
              type="button"
              onClick={() => {
                markCompleted();
                void sendMessage();
              }}
              disabled={!input.trim() || loading}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-opacity disabled:opacity-35"
              style={{ background: ACCENT }}
              aria-label="Envoyer"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden>
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>
    </div>
  );
}
