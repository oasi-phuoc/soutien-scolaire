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
  const [progress, setProgress] = useState({ completed: 0, total: 0, downloadedBytes: 0, totalBytes: 0 });
  const [manifestSize, setManifestSize] = useState<number | null>(null);
  const [downloadedBytes, setDownloadedBytes] = useState<number | null>(null);
  const [hasCachedContent, setHasCachedContent] = useState(false);

  const checkCachedContent = async () => {
    try {
      const keys = await caches.keys();
      const hasCache = keys.some((k) => k.startsWith("learnup-offline-") && k.endsWith("-core"));
      setHasCachedContent(hasCache);
    } catch {
      // ignore
    }
  };

  const askManifestSize = () => {
    const sw = navigator.serviceWorker?.controller;
    if (sw) sw.postMessage({ type: "GET_MANIFEST_SIZE" });
  };

  useEffect(() => {
    setOnline(navigator.onLine);
    void checkCachedContent();

    if (!("serviceWorker" in navigator)) {
      setState("unsupported");
      return;
    }

    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "OFFLINE_PROGRESS") {
        setProgress({
          completed: event.data.completed,
          total: event.data.total,
          downloadedBytes: event.data.downloadedBytes ?? 0,
          totalBytes: event.data.totalBytes ?? 0,
        });
      }
      if (event.data?.type === "OFFLINE_READY") {
        setState("ready");
        setHasCachedContent(true);
        if (event.data.downloadedBytes) setDownloadedBytes(event.data.downloadedBytes);
      }
      if (event.data?.type === "OFFLINE_CLEARED") {
        setState("cleared");
        setProgress({ completed: 0, total: 0, downloadedBytes: 0, totalBytes: 0 });
        setDownloadedBytes(null);
        setHasCachedContent(false);
      }
      if (event.data?.type === "OFFLINE_ERROR") {
        setState("error");
      }
      if (event.data?.type === "MANIFEST_SIZE") {
        setManifestSize(event.data.totalBytes ?? null);
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.serviceWorker.addEventListener("message", handleMessage);

    // Ask SW for manifest size once it's ready
    navigator.serviceWorker.ready.then(() => askManifestSize());

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      navigator.serviceWorker.removeEventListener("message", handleMessage);
    };
  }, []);

  const prepareOffline = async () => {
    try {
      if (!("serviceWorker" in navigator)) { setState("unsupported"); return; }
      if (!navigator.onLine) { setState("error"); return; }
      setState("preparing");
      setProgress({ completed: 0, total: 0, downloadedBytes: 0, totalBytes: 0 });
      if (navigator.storage?.persist) await navigator.storage.persist().catch(() => false);
      const registration = await navigator.serviceWorker.ready;
      const worker = registration.active ?? navigator.serviceWorker.controller;
      if (!worker) throw new Error("service_worker_unavailable");
      worker.postMessage({ type: "PREPARE_OFFLINE" });
    } catch {
      setState("error");
    }
  };

  const clearOffline = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const worker = registration.active ?? navigator.serviceWorker.controller;
      if (!worker) return;
      worker.postMessage({ type: "CLEAR_OFFLINE" });
    } catch {
      // ignore
    }
  };

  const pct = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;
  const bytesPct = progress.totalBytes > 0 ? Math.round((progress.downloadedBytes / progress.totalBytes) * 100) : pct;
  const sizeLabel = manifestSize !== null ? formatBytes(manifestSize) : "~27 Mo";
  const cachedLabel = downloadedBytes !== null ? formatBytes(downloadedBytes) : null;

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Mode hors connexion</h2>
          <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
            {online ? "Connecté" : "Hors connexion"}
            {cachedLabel ? ` · ${cachedLabel} en cache` : ""}
          </p>
        </div>
        <span
          className={`h-3 w-3 shrink-0 rounded-full ${online ? "bg-emerald-500" : "bg-amber-500"}`}
          aria-hidden
        />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        Télécharge le contenu de l&apos;application ({sizeLabel}) pour pouvoir l&apos;utiliser sans connexion internet, même en déplacement ou sans Wi-Fi.
      </p>

      {/* Progress bar during download */}
      {state === "preparing" && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
            <span>
              Téléchargement en cours…
              {progress.downloadedBytes > 0 && ` (${formatBytes(progress.downloadedBytes)})`}
            </span>
            <span>{bytesPct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]" aria-label="Progression">
            <div
              className="h-full rounded-full bg-[var(--color-theme)] transition-[width] duration-300"
              style={{ width: `${bytesPct}%` }}
            />
          </div>
          {progress.total > 0 && (
            <p className="text-xs text-[var(--color-text-secondary)]">
              {progress.completed} / {progress.total} fichiers
            </p>
          )}
        </div>
      )}

      {/* Action buttons */}
      {state !== "preparing" && (
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void prepareOffline()}
            disabled={!online || state === "unsupported"}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[var(--color-theme)] px-5 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
          >
            <DownloadIcon />
            {hasCachedContent ? "Mettre à jour" : "Tout télécharger"}
          </button>

          {hasCachedContent && state !== "cleared" && (
            <button
              type="button"
              onClick={() => void clearOffline()}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <TrashIcon />
              Supprimer
            </button>
          )}
        </div>
      )}

      {state === "ready" && (
        <p className="mt-2 text-sm text-emerald-700" role="status">
          Application disponible hors connexion.
        </p>
      )}
      {state === "cleared" && (
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]" role="status">
          Contenu hors connexion supprimé.
        </p>
      )}
      {state === "error" && (
        <p className="mt-2 text-sm text-amber-700" role="status">
          Reconnecte-toi au réseau puis réessaie.
        </p>
      )}
      {state === "unsupported" && (
        <p className="mt-2 text-sm text-amber-700" role="status">
          Le stockage hors connexion n&apos;est pas disponible sur cet appareil.
        </p>
      )}
    </>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 6h18" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M8 6V4h8v2" />
    </svg>
  );
}
