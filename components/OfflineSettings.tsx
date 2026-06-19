"use client";

import { useEffect, useState } from "react";

type OfflineState = "idle" | "preparing" | "ready" | "cleared" | "error" | "unsupported";

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(0, Math.round(bytes / 1024))} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} Mo`;
}

export function OfflineSettings() {
  const [online, setOnline] = useState(true);
  const [state, setState] = useState<OfflineState>("idle");
  const [progress, setProgress] = useState({ completed: 0, total: 0 });
  const [usage, setUsage] = useState<number | null>(null);

  const refreshUsage = async () => {
    if (!navigator.storage?.estimate) return;
    const estimate = await navigator.storage.estimate();
    setUsage(estimate.usage ?? null);
  };

  useEffect(() => {
    setOnline(navigator.onLine);
    void refreshUsage();

    if (!("serviceWorker" in navigator)) setState("unsupported");
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "OFFLINE_PROGRESS") {
        setProgress({ completed: event.data.completed, total: event.data.total });
      }
      if (event.data?.type === "OFFLINE_READY") {
        setState("ready");
        void refreshUsage();
      }
      if (event.data?.type === "OFFLINE_CLEARED") {
        setState("cleared");
        setProgress({ completed: 0, total: 0 });
        void refreshUsage();
      }
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.serviceWorker?.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      navigator.serviceWorker?.removeEventListener("message", handleMessage);
    };
  }, []);

  const sendMessage = async (type: "PREPARE_OFFLINE" | "CLEAR_OFFLINE") => {
    try {
      if (!("serviceWorker" in navigator)) {
        setState("unsupported");
        return;
      }
      if (type === "PREPARE_OFFLINE" && !navigator.onLine) {
        setState("error");
        return;
      }
      setState(type === "PREPARE_OFFLINE" ? "preparing" : "idle");
      if (type === "PREPARE_OFFLINE" && navigator.storage?.persist) {
        await navigator.storage.persist().catch(() => false);
      }
      const registration = await navigator.serviceWorker.ready;
      const worker = registration.active ?? navigator.serviceWorker.controller;
      if (!worker) throw new Error("service_worker_unavailable");
      worker.postMessage({ type });
    } catch {
      setState("error");
    }
  };

  return (
    <section aria-labelledby="offline-heading">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 id="offline-heading" className="text-base font-semibold text-zinc-900">Mode hors connexion</h2>
          <p className="mt-1 text-sm text-zinc-600">
            {online ? "Connecté" : "Hors connexion"}{usage !== null ? ` · ${formatBytes(usage)} utilisés` : ""}
          </p>
        </div>
        <span className={`h-3 w-3 shrink-0 rounded-full ${online ? "bg-emerald-500" : "bg-amber-500"}`} aria-hidden />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
        Les pages et médias consultés sont conservés automatiquement. Préparez les pages principales avant de quitter le réseau.
      </p>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => void sendMessage("PREPARE_OFFLINE")}
          disabled={!online || state === "preparing" || state === "unsupported"}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[var(--color-theme)] px-4 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
        >
          <DownloadIcon />
          {state === "preparing" ? "Préparation…" : "Préparer"}
        </button>
        <button
          type="button"
          onClick={() => void sendMessage("CLEAR_OFFLINE")}
          disabled={state === "preparing" || state === "unsupported"}
          aria-label="Effacer le contenu hors connexion"
          title="Effacer le contenu hors connexion"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-300 text-zinc-600 transition-colors hover:bg-white disabled:opacity-40"
        >
          <ArchiveIcon />
        </button>
      </div>

      {state === "preparing" && progress.total > 0 && (
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-200" aria-label="Progression de la préparation">
          <div className="h-full rounded-full bg-[var(--color-theme)] transition-[width]" style={{ width: `${Math.round(progress.completed / progress.total * 100)}%` }} />
        </div>
      )}
      {state === "ready" && <p className="mt-2 text-sm text-emerald-700" role="status">Pages principales disponibles hors connexion.</p>}
      {state === "cleared" && <p className="mt-2 text-sm text-zinc-600" role="status">Contenu hors connexion effacé.</p>}
      {state === "error" && <p className="mt-2 text-sm text-amber-700" role="status">Reconnectez-vous puis réessayez.</p>}
      {state === "unsupported" && <p className="mt-2 text-sm text-amber-700" role="status">Le stockage hors connexion n’est pas disponible sur cet appareil.</p>}
    </section>
  );
}

function DownloadIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>;
}

function ArchiveIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M3 6h18"/><path d="M5 6v14h14V6"/><path d="M9 10h6"/><path d="M4 3h16v3H4z"/></svg>;
}
