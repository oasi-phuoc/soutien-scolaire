"use client";

import { useState } from "react";
import { useFrenchSpeechRecognition } from "@/lib/hooks/useFrenchSpeechRecognition";
import { speak } from "@/lib/utils/speech";
import type { ExpressPoDialogue } from "@/lib/curriculum/content/communication/express-types";

const ACCENT = "var(--color-accent-comm)";

function TtsButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      onClick={() => speak(text)}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors hover:bg-[var(--color-bg-primary)]"
      style={{ borderColor: ACCENT, color: ACCENT }}
      aria-label="Écouter la réplique"
      title="Écouter"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M11 5 6 9H2v6h4l5 4V5Z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      </svg>
    </button>
  );
}

function HintButton({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors"
      style={{
        borderColor: ACCENT,
        color: ACCENT,
        background: active ? `color-mix(in srgb, ${ACCENT} 15%, transparent)` : "transparent",
      }}
      aria-label="Afficher ou masquer l'aide"
      title="Aide : réplique proposée"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.5 1 2.5h6c0-1 .4-2 1-2.5A6 6 0 0 0 12 3Z" />
      </svg>
    </button>
  );
}

function MicButton({
  isListening,
  supported,
  onStart,
  onStop,
}: {
  isListening: boolean;
  supported: boolean;
  onStart: () => void;
  onStop: () => void;
}) {
  if (!supported) return null;
  return (
    <button
      type="button"
      onClick={isListening ? onStop : onStart}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-transform active:scale-90 ${
        isListening ? "animate-pulse bg-red-500" : ""
      }`}
      style={isListening ? undefined : { background: ACCENT }}
      aria-label={isListening ? "Arrêter le micro" : "Parler"}
      title={isListening ? "Arrêter" : "Parler"}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0M12 17v4" />
      </svg>
    </button>
  );
}

/**
 * Exercice de production orale — dialogue à jouer (style PO du test de
 * placement) : les répliques de l'interlocuteur sont affichées / écoutables,
 * l'élève joue son rôle au micro (ou au clavier si non supporté), avec une
 * ampoule d'aide qui révèle la réplique proposée.
 */
export function ExpressPoDialogueExercise({
  dialogue,
  studentRole,
  exNum,
  validated,
  transcripts,
  onTranscriptsChange,
}: {
  dialogue: ExpressPoDialogue;
  /** Rôle joué par l'élève ("A" ou "B"). */
  studentRole: "A" | "B";
  exNum: number;
  validated: boolean;
  transcripts: string[];
  onTranscriptsChange: (next: string[]) => void;
}) {
  const [openHint, setOpenHint] = useState<number | null>(null);
  const [activeTurn, setActiveTurn] = useState<number | null>(null);
  const { isListening, supported, startListening, stopListening } = useFrenchSpeechRecognition(
    (text) => {
      if (activeTurn === null) return;
      const next = [...transcripts];
      next[activeTurn] = text;
      onTranscriptsChange(next);
    },
  );

  const studentTitle = studentRole === "A" ? dialogue.roleA : dialogue.roleB;
  let studentTurnIdx = -1;

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">
        Exercice {exNum} — Production orale
      </h2>
      <p className="mb-1 text-sm text-[var(--color-text-secondary)]">
        Jouez le dialogue : vous êtes <strong>{studentTitle.vous}</strong>. Écoutez votre
        interlocuteur, puis répondez à voix haute (ou au clavier). L&apos;ampoule montre une
        réplique proposée.
      </p>
      <div className="mb-4 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] px-4 py-3">
        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
          {dialogue.title}
        </p>
        <p className="mt-1 text-sm text-[var(--color-text-primary)]">{dialogue.context}</p>
      </div>

      <div className="space-y-3">
        {dialogue.lines.map((line, lineIdx) => {
          const isStudent = line.role === studentRole;
          const hintOpen = openHint === lineIdx;
          if (!isStudent) {
            const interlocutor = line.role === "A" ? dialogue.roleA : dialogue.roleB;
            return (
              <div
                key={lineIdx}
                className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
                    {interlocutor.title}
                  </span>
                  <TtsButton text={line.text} />
                  <div className="flex-1" />
                  <HintButton active={hintOpen} onClick={() => setOpenHint(hintOpen ? null : lineIdx)} />
                </div>
                {(hintOpen || validated) && (
                  <p className="mt-2 text-sm text-[var(--color-text-primary)]">{line.text}</p>
                )}
              </div>
            );
          }

          studentTurnIdx += 1;
          const turnIdx = studentTurnIdx;
          const value = transcripts[turnIdx] ?? "";
          return (
            <div
              key={lineIdx}
              className="space-y-2 rounded-[var(--radius-md)] border-2 bg-[var(--color-bg-primary)] px-4 py-3"
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
                  Votre réplique
                </span>
                {!validated && (
                  <MicButton
                    isListening={isListening && activeTurn === turnIdx}
                    supported={supported}
                    onStart={() => {
                      setActiveTurn(turnIdx);
                      startListening();
                    }}
                    onStop={stopListening}
                  />
                )}
                <HintButton active={hintOpen} onClick={() => setOpenHint(hintOpen ? null : lineIdx)} />
              </div>
              {(hintOpen || validated) && (
                <p className="pl-9 text-sm italic text-[var(--color-text-secondary)]">{line.text}</p>
              )}
              {!validated ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => {
                    const next = [...transcripts];
                    next[turnIdx] = e.target.value;
                    onTranscriptsChange(next);
                  }}
                  placeholder={supported ? "Parlez au micro ou écrivez votre réponse…" : "Votre réponse…"}
                  className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-comm)]/40 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-accent-comm)]"
                />
              ) : value ? (
                <p className="pl-9 text-sm text-[var(--color-text-primary)]">{value}</p>
              ) : null}
            </div>
          );
        })}
      </div>

      {validated && (
        <p className="mt-4 text-center text-sm text-[var(--color-text-secondary)]">
          Dialogue terminé. Appuyez sur <strong>Suivant</strong> pour continuer.
        </p>
      )}
    </div>
  );
}
