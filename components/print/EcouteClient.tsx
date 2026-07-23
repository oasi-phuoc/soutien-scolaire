"use client";

import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const ALLOWED_PREFIX = "/assets/expression/co/";

function sanitizeAudioSrc(raw: string | null): string | null {
  if (!raw) return null;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    decoded = raw;
  }
  if (!decoded.startsWith(ALLOWED_PREFIX)) return null;
  if (decoded.includes("..") || decoded.includes("//", 1)) return null;
  if (!/\.mp3$/i.test(decoded)) return null;
  return decoded;
}

export function EcouteClient() {
  const params = useSearchParams();
  const src = useMemo(() => sanitizeAudioSrc(params.get("src")), [params]);
  const label = params.get("label")?.trim() || "Audio";
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

  return (
    <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Écoute seule</p>
      <h1 className="mt-1 text-lg font-bold text-zinc-900">{label}</h1>
      <p className="mt-1 text-sm text-zinc-500">Aucun texte · audio de l&apos;exercice uniquement</p>

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

      {error ? (
        <p className="mt-3 text-sm font-semibold text-amber-700">{error}</p>
      ) : (
        <p className="mt-3 text-xs text-zinc-500">
          {playing ? "Lecture en cours…" : "Appuyez sur lecture si l'audio ne démarre pas."}
        </p>
      )}
    </div>
  );
}
