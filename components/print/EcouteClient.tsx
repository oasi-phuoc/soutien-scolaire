"use client";

import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { speak } from "@/lib/utils/speech";

const ALLOWED_PREFIXES = [
  "/assets/expression/co/",
  "/assets/expression/communication/",
  "/assets/words/son_f/",
  "/assets/words/son_m/",
  "/assets/letters/son/",
];

function sanitizeAudioSrc(raw: string | null): string | null {
  if (!raw) return null;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    decoded = raw;
  }
  if (!ALLOWED_PREFIXES.some((prefix) => decoded.startsWith(prefix))) return null;
  if (decoded.includes("..") || decoded.includes("//", 1)) return null;
  if (!/\.mp3$/i.test(decoded)) return null;
  return decoded;
}

export function EcouteClient() {
  const params = useSearchParams();
  const src = useMemo(() => sanitizeAudioSrc(params.get("src")), [params]);
  const label = params.get("label")?.trim() || "Audio";
  /** Texte à lire en voix de synthèse quand le mp3 n'existe pas (mots lecture). */
  const ttsText = params.get("tts")?.trim() || null;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  if (!src) {
    return (
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
        <p className="text-base font-bold text-zinc-900">Audio introuvable</p>
        <p className="mt-2 text-sm text-zinc-500">
          Ce lien d&apos;écoute n&apos;est pas valide. Rescannez le QR code de la feuille.
        </p>
      </div>
    );
  }

  const ttsFallback = error && ttsText;

  return (
    <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Écoute seule</p>
      <h1 className="mt-1 text-lg font-bold text-zinc-900">{label}</h1>
      <p className="mt-1 text-sm text-zinc-500">Aucun texte · audio de l&apos;exercice uniquement</p>

      {!ttsFallback ? (
        <audio
          ref={audioRef}
          src={src}
          preload="auto"
          className="mt-5 w-full"
          controls
          autoPlay
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setError("Impossible de charger l'audio.")}
        />
      ) : null}

      {ttsFallback ? (
        <button
          type="button"
          onClick={() => speak(ttsText, "fr-CH", 0.85, "f")}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none" />
          </svg>
          Écouter
        </button>
      ) : error ? (
        <p className="mt-3 text-sm font-semibold text-amber-700">{error}</p>
      ) : (
        <p className="mt-3 text-xs text-zinc-500">
          {playing ? "Lecture en cours…" : "Appuyez sur lecture si l'audio ne démarre pas."}
        </p>
      )}
    </div>
  );
}
