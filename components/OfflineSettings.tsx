"use client";

import { useEffect, useState } from "react";

type OfflineState = "idle" | "checking" | "preparing" | "ready" | "cleared" | "error" | "unsupported";

type UpdatePlan = {
  pendingCount: number;
  pendingBytes: number;
  skippedCount: number;
  totalItems: number;
  expectedBytes: number;
  hasCache: boolean;
  manifestVersion?: number | null;
  updatedAt?: number | null;
};

type OfflineSyncInfo = {
  manifestVersion: number | null;
  updatedAt: number | null;
};

type ProgressState = {
  phase: "idle" | "checking" | "downloading";
  /** Fichiers déjà traités dans la phase courante (vérif ou téléchargement). */
  completed: number;
  /** Total de la phase courante. */
  total: number;
  downloadedBytes: number;
  pendingBytes: number;
  skippedCount: number;
  /** Pourcentage affiché — uniquement croissant. */
  percent: number;
};

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(0, Math.round(bytes / 1024))} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} Mo`;
}

function formatContentVersion(version: number | null): string {
  if (!version) return "—";
  const d = new Date(version);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
}

function formatUpdateDate(ts: number | null): string {
  if (!ts) return "—";
  return new Date(ts).toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function OfflineSyncDetails({ info }: { info: OfflineSyncInfo }) {
  if (!info.updatedAt && !info.manifestVersion) return null;
  return (
    <div className="mt-2 space-y-0.5 text-xs text-[var(--color-text-secondary)]" role="status">
      <p>
        <span className="font-semibold text-[var(--color-text-primary)]">Dernière mise à jour :</span>
        {" "}
        {formatUpdateDate(info.updatedAt)}
      </p>
      <p>
        <span className="font-semibold text-[var(--color-text-primary)]">Version du contenu :</span>
        {" "}
        {formatContentVersion(info.manifestVersion)}
      </p>
    </div>
  );
}

const EMPTY_PROGRESS: ProgressState = {
  phase: "idle",
  completed: 0,
  total: 0,
  downloadedBytes: 0,
  pendingBytes: 0,
  skippedCount: 0,
  percent: 0,
};

export function OfflineSettings() {
  const [online, setOnline] = useState(true);
  const [state, setState] = useState<OfflineState>("idle");
  const [progress, setProgress] = useState<ProgressState>(EMPTY_PROGRESS);
  const [manifestSize, setManifestSize] = useState<number | null>(null);
  const [downloadedBytes, setDownloadedBytes] = useState<number | null>(null);
  const [updatePlan, setUpdatePlan] = useState<UpdatePlan | null>(null);
  const [cacheStatus, setCacheStatus] = useState<{
    cachedAssetBytes: number;
    expectedBytes: number;
    missingAssets: number;
    skippedCount: number;
  } | null>(null);
  const [hasCachedContent, setHasCachedContent] = useState(false);
  const [lastUpToDate, setLastUpToDate] = useState(false);
  const [syncInfo, setSyncInfo] = useState<OfflineSyncInfo>({ manifestVersion: null, updatedAt: null });
  const [pendingDetail, setPendingDetail] = useState<{ routesCount: number; assetsCount: number } | null>(null);

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

  const askCacheStatus = () => {
    const sw = navigator.serviceWorker?.controller;
    if (sw) sw.postMessage({ type: "GET_CACHE_STATUS" });
  };

  const askUpdatePlan = () => {
    const sw = navigator.serviceWorker?.controller;
    if (sw) sw.postMessage({ type: "GET_OFFLINE_UPDATE_PLAN" });
  };

  useEffect(() => {
    setOnline(navigator.onLine);
    void checkCachedContent();

    if (!("serviceWorker" in navigator)) {
      setState("unsupported");
      return;
    }

    const handleOnline = () => {
      setOnline(true);
      askUpdatePlan();
    };
    const handleOffline = () => setOnline(false);
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "OFFLINE_CHECK_START") {
        setState("checking");
        setLastUpToDate(false);
        setPendingDetail(null);
        setProgress({
          phase: "checking",
          completed: 0,
          total: 0,
          downloadedBytes: 0,
          pendingBytes: 0,
          skippedCount: 0,
          percent: 0,
        });
      }
      if (event.data?.type === "OFFLINE_CHECK_PROGRESS") {
        const checked = Number(event.data.checked) || 0;
        const total = Number(event.data.total) || 0;
        const percent = typeof event.data.percent === "number"
          ? event.data.percent
          : (total > 0 ? Math.min(100, Math.round((checked / total) * 100)) : 0);
        setProgress((prev) => ({
          phase: "checking",
          completed: Math.max(prev.phase === "checking" ? prev.completed : 0, checked),
          total: Math.max(prev.phase === "checking" ? prev.total : 0, total),
          downloadedBytes: 0,
          pendingBytes: prev.pendingBytes,
          skippedCount: prev.skippedCount,
          percent: Math.max(prev.phase === "checking" ? prev.percent : 0, percent),
        }));
      }
      if (event.data?.type === "OFFLINE_CHECK_DONE") {
        const pendingCount = Number(event.data.pendingCount) || 0;
        const pendingBytes = Number(event.data.pendingBytes) || 0;
        const skippedCount = Number(event.data.skippedCount) || 0;
        setPendingDetail({
          routesCount: Number(event.data.routesCount) || 0,
          assetsCount: Number(event.data.assetsCount) || 0,
        });
        setProgress({
          phase: pendingCount > 0 ? "downloading" : "idle",
          completed: 0,
          total: pendingCount,
          downloadedBytes: 0,
          pendingBytes,
          skippedCount,
          percent: 0,
        });
        setState(pendingCount > 0 ? "preparing" : "checking");
      }
      if (event.data?.type === "OFFLINE_PROGRESS") {
        const completed = Number(event.data.completed) || 0;
        const total = Number(event.data.total) || 0;
        const downloaded = Number(event.data.downloadedBytes) || 0;
        const pendingBytes = Number(event.data.pendingBytes) || 0;
        const skippedCount = Number(event.data.skippedCount) || 0;
        const filePct = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;
        const percent = typeof event.data.percent === "number"
          ? Math.min(100, Math.max(0, event.data.percent))
          : filePct;
        setProgress((prev) => ({
          phase: "downloading",
          completed: Math.max(prev.phase === "downloading" ? prev.completed : 0, completed),
          total: Math.max(prev.phase === "downloading" ? prev.total : 0, total),
          downloadedBytes: Math.max(prev.phase === "downloading" ? prev.downloadedBytes : 0, downloaded),
          pendingBytes: pendingBytes || prev.pendingBytes,
          skippedCount,
          percent: Math.max(prev.phase === "downloading" ? prev.percent : 0, percent),
        }));
        setState("preparing");
      }
      if (event.data?.type === "OFFLINE_READY") {
        setState("ready");
        setHasCachedContent(true);
        setLastUpToDate(!!event.data.upToDate);
        if (typeof event.data.downloadedBytes === "number") setDownloadedBytes(event.data.downloadedBytes);
        setProgress((prev) => ({
          ...prev,
          phase: "idle",
          percent: 100,
          completed: prev.total || prev.completed,
        }));
        setSyncInfo({
          manifestVersion: event.data.manifestVersion ?? null,
          updatedAt: event.data.updatedAt ?? null,
        });
        askCacheStatus();
        askUpdatePlan();
      }
      if (event.data?.type === "OFFLINE_CLEARED") {
        setState("cleared");
        setProgress(EMPTY_PROGRESS);
        setDownloadedBytes(null);
        setUpdatePlan(null);
        setPendingDetail(null);
        setHasCachedContent(false);
        setLastUpToDate(false);
        setSyncInfo({ manifestVersion: null, updatedAt: null });
      }
      if (event.data?.type === "OFFLINE_ERROR") {
        setState("error");
        setProgress(EMPTY_PROGRESS);
      }
      if (event.data?.type === "MANIFEST_SIZE") {
        setManifestSize(event.data.totalBytes ?? null);
      }
      if (event.data?.type === "OFFLINE_UPDATE_PLAN") {
        setUpdatePlan({
          pendingCount: event.data.pendingCount ?? 0,
          pendingBytes: event.data.pendingBytes ?? 0,
          skippedCount: event.data.skippedCount ?? 0,
          totalItems: event.data.totalItems ?? 0,
          expectedBytes: event.data.expectedBytes ?? 0,
          hasCache: !!event.data.hasCache,
          manifestVersion: event.data.manifestVersion ?? null,
          updatedAt: event.data.updatedAt ?? null,
        });
        if (event.data.updatedAt || event.data.manifestVersion) {
          setSyncInfo({
            manifestVersion: event.data.manifestVersion ?? null,
            updatedAt: event.data.updatedAt ?? null,
          });
        }
      }
      if (event.data?.type === "CACHE_STATUS") {
        setCacheStatus({
          cachedAssetBytes: event.data.cachedAssetBytes ?? 0,
          expectedBytes: event.data.expectedBytes ?? 0,
          missingAssets: event.data.missingAssets ?? 0,
          skippedCount: event.data.skippedCount ?? 0,
        });
        if (event.data.updatedAt || event.data.manifestVersion) {
          setSyncInfo({
            manifestVersion: event.data.manifestVersion ?? null,
            updatedAt: event.data.updatedAt ?? null,
          });
        }
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.serviceWorker.addEventListener("message", handleMessage);

    navigator.serviceWorker.ready.then(() => {
      askManifestSize();
      askCacheStatus();
      askUpdatePlan();
    });

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
      setState("checking");
      setLastUpToDate(false);
      setPendingDetail(null);
      setProgress({
        phase: "checking",
        completed: 0,
        total: 0,
        downloadedBytes: 0,
        pendingBytes: 0,
        skippedCount: 0,
        percent: 0,
      });
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

  const sizeLabel = manifestSize !== null ? formatBytes(manifestSize) : "~195 Mo";
  const cachedLabel = downloadedBytes !== null ? formatBytes(downloadedBytes) : null;
  const cacheExpectedBytes = cacheStatus?.expectedBytes || manifestSize || 0;
  const cachedAssetBytes = cacheStatus?.cachedAssetBytes ?? 0;
  const cacheSizeMismatch = hasCachedContent && cacheExpectedBytes > 0
    && ((cacheStatus?.missingAssets ?? 0) > 0
      || Math.abs(cachedAssetBytes - cacheExpectedBytes) > 1024);
  const statusDotClass = online
    ? "bg-emerald-500"
    : cacheSizeMismatch
      ? "bg-red-500"
      : "bg-amber-500";

  const pendingCount = updatePlan?.pendingCount ?? 0;
  const pendingBytes = updatePlan?.pendingBytes ?? 0;
  const skippedCount = updatePlan?.skippedCount ?? 0;
  const isUpToDate = hasCachedContent && pendingCount === 0;
  const busy = state === "checking" || state === "preparing";

  const downloadLabel = !hasCachedContent
    ? "Tout télécharger"
    : pendingCount === 0
      ? "Vérifier les mises à jour"
      : pendingBytes > 0
        ? `Mettre à jour (${formatBytes(pendingBytes)})`
        : `Mettre à jour (${pendingCount} fichiers)`;

  const progressTitle = progress.phase === "checking"
    ? "Vérification des fichiers…"
    : "Téléchargement…";

  const progressSubtitle = progress.phase === "checking"
    ? (progress.total > 0
      ? `${progress.completed} / ${progress.total} fichiers vérifiés`
      : "Analyse du contenu en cache…")
    : (progress.total > 0
      ? `${progress.completed} / ${progress.total} fichiers à mettre à jour`
        + (progress.downloadedBytes > 0 ? ` · ${formatBytes(progress.downloadedBytes)}` : "")
        + (progress.skippedCount > 0 ? ` · ${progress.skippedCount} déjà à jour` : "")
      : "Préparation…");

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
          className={`h-3 w-3 shrink-0 rounded-full ${statusDotClass}`}
          aria-hidden
        />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        Télécharge le contenu de l&apos;application ({sizeLabel}) pour pouvoir l&apos;utiliser sans connexion internet.
        {hasCachedContent && skippedCount > 0 && state === "idle" && (
          <> Seuls les fichiers modifiés sont retéléchargés ({skippedCount} déjà à jour).</>
        )}
      </p>

      {busy && (
        <div className="mt-4 space-y-2" role="status" aria-live="polite">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
            <span>{progressTitle}</span>
            <span className="tabular-nums font-semibold">{progress.percent}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]" aria-label="Progression">
            <div
              className="h-full rounded-full bg-[var(--color-theme)] transition-[width] duration-300 ease-out"
              style={{ width: `${progress.percent}%` }}
            />
          </div>
          <p className="text-xs text-[var(--color-text-secondary)]">{progressSubtitle}</p>
          {progress.phase === "downloading" && pendingDetail && (
            <p className="text-xs text-[var(--color-text-secondary)]">
              {pendingDetail.routesCount > 0 && `${pendingDetail.routesCount} page${pendingDetail.routesCount > 1 ? "s" : ""}`}
              {pendingDetail.routesCount > 0 && pendingDetail.assetsCount > 0 && " · "}
              {pendingDetail.assetsCount > 0 && `${pendingDetail.assetsCount} média${pendingDetail.assetsCount > 1 ? "s" : ""}`}
              {progress.pendingBytes > 0 && ` (${formatBytes(progress.pendingBytes)})`}
            </p>
          )}
        </div>
      )}

      {!busy && (
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void prepareOffline()}
            disabled={!online || state === "unsupported"}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[var(--color-theme)] px-5 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
          >
            <DownloadIcon />
            {downloadLabel}
          </button>

          {hasCachedContent && state !== "cleared" && (
            <button
              type="button"
              onClick={() => void clearOffline()}
              aria-label="Supprimer le contenu hors ligne"
              title="Supprimer le contenu hors ligne"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <TrashIcon />
            </button>
          )}
        </div>
      )}

      {state === "ready" && lastUpToDate && (
        <div className="mt-2" role="status">
          <p className="text-sm text-emerald-700">
            Contenu déjà à jour — aucun fichier retéléchargé.
          </p>
          <OfflineSyncDetails info={syncInfo} />
        </div>
      )}
      {state === "ready" && !lastUpToDate && (
        <div className="mt-2" role="status">
          <p className="text-sm text-emerald-700">
            Mise à jour terminée{downloadedBytes ? ` (${formatBytes(downloadedBytes)} téléchargés)` : ""}.
          </p>
          <OfflineSyncDetails info={syncInfo} />
        </div>
      )}
      {state === "idle" && isUpToDate && (
        <div className="mt-2" role="status">
          <p className="text-sm text-emerald-700">
            Application disponible hors connexion — tout est à jour.
          </p>
          <OfflineSyncDetails info={syncInfo} />
        </div>
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
