"use client";

import { useRef, useState } from "react";
import { uploadCurriculumImageAction } from "@/app/actions/curriculum-images";
import { resolveVocabImage } from "@/lib/curriculum/vocab-image";

type Domain = "vocab" | "lecture" | "ce" | "co";

/**
 * Champ image + upload (Supabase Storage public + GitHub public/assets).
 */
export function ImageUploadField({
  label = "Image",
  value,
  folder,
  word,
  domain = "vocab",
  onChange,
}: {
  label?: string;
  value?: string;
  folder?: string;
  word?: string;
  domain?: Domain;
  onChange: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const preview =
    value?.startsWith("http") || value?.startsWith("/assets/") || value?.startsWith("/")
      ? value
      : resolveVocabImage(value, folder);

  async function onFile(file: File | null) {
    if (!file) return;
    setBusy(true);
    setMsg(null);
    const fd = new FormData();
    fd.set("file", file);
    fd.set("domain", domain);
    if (folder) fd.set("folder", folder);
    if (word) {
      fd.set("word", word);
      fd.set("label", word);
    }
    const res = await uploadCurriculumImageAction(fd);
    setBusy(false);
    if (!res.ok) {
      setMsg(res.reason);
      return;
    }
    onChange(res.url);
    const parts = [
      res.persisted.supabase ? "Supabase" : null,
      res.persisted.git ? "Git" : null,
    ].filter(Boolean);
    setMsg(`OK (${parts.join(" + ") || "local"})${res.message ? ` — ${res.message}` : ""}`);
  }

  return (
    <div className="space-y-1.5">
      <span className="block text-xs font-semibold text-amber-950">{label}</span>
      <div className="flex flex-wrap items-center gap-2">
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt=""
            className="h-14 w-14 rounded-md border border-amber-200 object-cover bg-white"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-md border border-dashed border-amber-300 text-[10px] text-amber-800/70">
            Aucune
          </div>
        )}
        <div className="min-w-0 flex-1 space-y-1">
          <input
            type="text"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="chemin ou URL"
            className="w-full rounded-md border border-amber-200 bg-white px-2 py-1 text-xs"
          />
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              disabled={busy}
              onClick={() => inputRef.current?.click()}
              className="rounded-md bg-amber-700 px-2 py-1 text-[11px] font-bold text-white disabled:opacity-50"
            >
              {busy ? "Envoi…" : "Uploader"}
            </button>
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="rounded-md border border-red-200 px-2 py-1 text-[11px] font-semibold text-red-700"
              >
                Supprimer
              </button>
            )}
          </div>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/webp,image/png,image/jpeg,image/gif,image/svg+xml"
        className="hidden"
        onChange={(e) => void onFile(e.target.files?.[0] ?? null)}
      />
      {msg && <p className="text-[10px] text-amber-900/80">{msg}</p>}
    </div>
  );
}
