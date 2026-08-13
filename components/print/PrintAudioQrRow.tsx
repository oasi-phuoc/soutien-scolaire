"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export type PrintAudioQrItem = {
  id: string;
  /** Chemin public absolu, ex. `/assets/expression/co/base/public/message-1.mp3` */
  audio: string;
  label: string;
  /** Texte lu en voix de synthèse si le mp3 n'existe pas (mots lecture). */
  tts?: string;
};

function listenUrl(audioPath: string, label: string, tts?: string): string {
  const origin =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "";
  const params = new URLSearchParams({
    src: audioPath,
    label,
  });
  if (tts) params.set("tts", tts);
  return `${origin}/ecoute?${params.toString()}`;
}

/** QR seul (sans libellé) pointant vers la page /ecoute d'un audio. */
export function AudioQrImage({
  audio,
  label,
  tts,
  size = 72,
}: {
  audio: string;
  label: string;
  tts?: string;
  size?: number;
}) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = listenUrl(audio, label, tts);
    void QRCode.toDataURL(url, {
      margin: 1,
      width: 160,
      errorCorrectionLevel: "M",
      color: { dark: "#111111", light: "#ffffff" },
    }).then((value: string) => {
      if (!cancelled) setDataUrl(value);
    });
    return () => {
      cancelled = true;
    };
  }, [audio, label, tts]);

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded border border-zinc-300 bg-white p-0.5"
      style={{ width: size, height: size }}
    >
      {dataUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={dataUrl} alt={`QR ${label}`} className="h-full w-full" />
      ) : (
        <span className="text-[9px] text-zinc-400">QR…</span>
      )}
    </div>
  );
}

function QrCell({ item, size = 72 }: { item: PrintAudioQrItem; size?: number }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-0.5">
      <AudioQrImage audio={item.audio} label={item.label} tts={item.tts} size={size} />
      <span className="max-w-[4.5rem] text-center text-[9px] font-semibold leading-tight text-zinc-800">
        {item.label}
      </span>
    </div>
  );
}

/**
 * QR audio flottant à droite, aligné sur la ligne du titre « Exercice N »
 * (style image flottante Word) : le texte de l'exercice passe à gauche,
 * le libellé s'affiche sous le QR.
 */
export function PrintAudioQrFloat({
  items,
  size = 72,
}: {
  items: PrintAudioQrItem[];
  size?: number;
}) {
  if (!items.length) return null;
  return (
    <div
      className="relative z-10 float-right mb-1 ml-3 flex flex-col items-center gap-1.5"
      style={{ marginTop: "-30px" }}
    >
      {items.map((item) => (
        <QrCell key={item.id} item={item} size={size} />
      ))}
    </div>
  );
}

/** Rangée de QR codes (un par audio) pour l'impression CO. */
export function PrintAudioQrRow({
  items,
  caption,
  size = 72,
}: {
  items: PrintAudioQrItem[];
  /** Légende optionnelle au-dessus des QR (vide par défaut). */
  caption?: string;
  size?: number;
}) {
  if (!items.length) return null;

  return (
    <div className="print:break-inside-avoid">
      {caption ? (
        <p className="mb-1.5 text-center text-[11px] font-semibold text-zinc-600">{caption}</p>
      ) : null}
      <div className="flex flex-row flex-wrap items-start justify-start gap-1.5">
        {items.map((item) => (
          <QrCell key={item.id} item={item} size={size} />
        ))}
      </div>
    </div>
  );
}

export function coAudioQrItems(
  items: Array<{ id: string; audio: string; activity: string }>,
): PrintAudioQrItem[] {
  const multi = items.length > 1;
  return items.map((item, index) => ({
    id: item.id,
    audio: item.audio,
    label: multi ? `Audio ${index + 1}` : `Audio ${item.activity}`,
  }));
}
