"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export type PrintAudioQrItem = {
  id: string;
  /** Chemin public absolu, ex. `/assets/expression/co/base/public/message-1.mp3` */
  audio: string;
  label: string;
};

function listenUrl(audioPath: string, label: string): string {
  const origin =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "";
  const params = new URLSearchParams({
    src: audioPath,
    label,
  });
  return `${origin}/ecoute?${params.toString()}`;
}

function QrCell({ item }: { item: PrintAudioQrItem }) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = listenUrl(item.audio, item.label);
    void QRCode.toDataURL(url, {
      margin: 1,
      width: 160,
      errorCorrectionLevel: "M",
      color: { dark: "#111111", light: "#ffffff" },
    }).then((value) => {
      if (!cancelled) setDataUrl(value);
    });
    return () => {
      cancelled = true;
    };
  }, [item.audio, item.label]);

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center gap-1">
      <div className="flex h-[88px] w-[88px] items-center justify-center rounded border border-zinc-300 bg-white p-1">
        {dataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={dataUrl} alt={`QR ${item.label}`} className="h-full w-full" />
        ) : (
          <span className="text-[9px] text-zinc-400">QR…</span>
        )}
      </div>
      <span className="max-w-[6.5rem] text-center text-[10px] font-semibold leading-tight text-zinc-800">
        {item.label}
      </span>
    </div>
  );
}

/** Rangée de QR codes (un par audio) pour l'impression CO. */
export function PrintAudioQrRow({
  items,
  caption = "Scannez pour écouter l'audio",
}: {
  items: PrintAudioQrItem[];
  caption?: string;
}) {
  if (!items.length) return null;

  return (
    <div className="rounded border border-zinc-300 bg-zinc-50/80 px-2 py-2 print:break-inside-avoid">
      <p className="mb-2 text-center text-[11px] font-semibold text-zinc-600">{caption}</p>
      <div className="flex flex-row flex-wrap items-start justify-center gap-2">
        {items.map((item) => (
          <QrCell key={item.id} item={item} />
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
