"use client";

import { parseCOTranscript } from "@/lib/co-transcript-format";

const EM_DASH = "—";

export function COTranscriptView({
  transcript,
  accent,
  audioLabel,
}: {
  transcript: string;
  accent: string;
  /** Libellé optionnel au-dessus (ex. « Audio 42 »). */
  audioLabel?: string;
}) {
  const blocks = parseCOTranscript(transcript);

  return (
    <div
      className="border-l-2 py-2 pl-4 text-sm leading-relaxed text-[var(--color-text-primary)]"
      style={{ borderColor: accent }}
    >
      {audioLabel && (
        <p className="mb-2 font-bold" style={{ color: accent }}>
          {audioLabel}
        </p>
      )}
      <div className="space-y-4">
        {blocks.map((block, i) => {
          if (block.kind === "preamble") {
            return (
              <p key={i} className="text-justify text-[var(--color-text-secondary)]">
                {block.text}
              </p>
            );
          }
          if (block.kind === "paragraph") {
            return (
              <p key={i} className="text-justify">
                {block.text}
              </p>
            );
          }
          return (
            <div key={i} className="space-y-2">
              <p className="font-semibold text-[var(--color-text-primary)]">{block.title}</p>
              <div className="space-y-1.5 pl-1">
                {block.lines.map((line, j) => (
                  <p key={j} className="text-justify">
                    <span className="mr-1.5 shrink-0 font-medium text-[var(--color-text-secondary)]">
                      {EM_DASH}
                    </span>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
