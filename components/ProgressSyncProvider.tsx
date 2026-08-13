"use client";

import { useEffect, useRef, useState } from "react";
import {
  loadProgress,
  MATH_PROGRESS_KEY,
  createInitialProgress,
} from "@/lib/progress/math-progress";
import { mergeProgress } from "@/lib/progress/mergeProgress";
import { loadProgressFromCloud, syncProgressToCloud, touchActivityAction } from "@/app/actions/progress";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { backupProgress, ensureProgressBackup } from "@/lib/offline/progress-backup";
import type { StoredProgressV1 } from "@/lib/curriculum/types";
import {
  applyCloudProgress,
  applyFreshProgress,
  applySnapshot,
  applySnapshotExtras,
  getActiveProgressUser,
  loadUserSnapshot,
  PENDING_SYNC_KEY,
  progressFromSnapshot,
  setActiveProgressUser,
  snapshotWorkingCopy,
} from "@/lib/progress/device-isolation";

function debounce<T extends unknown[]>(fn: (...args: T) => void, ms: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { fn(...args); timer = null; }, ms);
  };
}

function queueSync(progress: StoredProgressV1) {
  localStorage.setItem(PENDING_SYNC_KEY, JSON.stringify(progress));
  void backupProgress(progress, getActiveProgressUser()).catch(() => {});
  window.dispatchEvent(new CustomEvent("progress-sync-state", { detail: "pending" }));
}

function pendingProgress(): StoredProgressV1 | null {
  try {
    const raw = localStorage.getItem(PENDING_SYNC_KEY);
    return raw ? JSON.parse(raw) as StoredProgressV1 : null;
  } catch {
    return null;
  }
}

async function doSync(progress: StoredProgressV1, expectedUserId: string | null) {
  if (expectedUserId && getActiveProgressUser() !== expectedUserId) return false;
  queueSync(progress);
  if (!navigator.onLine) return false;
  try {
    const result = await syncProgressToCloud(progress);
    if (expectedUserId && getActiveProgressUser() !== expectedUserId) return false;
    if (!result.ok) {
      console.error("[ProgressSync] sync failed:", result.error);
      return false;
    }
    localStorage.removeItem(PENDING_SYNC_KEY);
    window.dispatchEvent(new CustomEvent("progress-sync-state", { detail: "synced" }));
    return true;
  } catch (error) {
    console.error("[ProgressSync] network unavailable:", error);
    return false;
  }
}

async function mergeWithCloudBeforeSync(localProgress: StoredProgressV1) {
  const cloudProgress = await loadProgressFromCloud();
  if (!cloudProgress) return localProgress;
  const merged = mergeProgress(localProgress, cloudProgress);
  applyCloudProgress(merged);
  return merged;
}

/**
 * Charge la progression de `userId` sans jamais fusionner celle d'un autre compte.
 * @returns true si la working copy a changé et qu'un reload est nécessaire.
 */
let hydrateChain: Promise<unknown> = Promise.resolve();

function withHydrateLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = hydrateChain.then(fn, fn);
  hydrateChain = run.then(() => undefined, () => undefined);
  return run;
}

async function hydrateAccount(
  userId: string,
  source: "session" | "signin",
): Promise<boolean> {
  const previous = getActiveProgressUser();

  if (previous && previous !== userId) {
    snapshotWorkingCopy(previous);
  }

  if (previous === userId) {
    return false;
  }

  const scoped = loadUserSnapshot(userId);
  const cloudProgress = await loadProgressFromCloud();

  if (cloudProgress) {
    const localForUser = scoped ? progressFromSnapshot(scoped) : createInitialProgress();
    const merged = mergeProgress(localForUser, cloudProgress);
    applyCloudProgress(merged);
    applySnapshotExtras(scoped);
    setActiveProgressUser(userId);
    snapshotWorkingCopy(userId);
    return previous !== null || source === "signin";
  }

  if (scoped) {
    applySnapshot(scoped);
    setActiveProgressUser(userId);
    snapshotWorkingCopy(userId);
    return true;
  }

  // Première exécution de ce code alors que le compte est déjà connecté :
  // la working copy actuelle lui appartient — on la lie, on ne l'écrase pas.
  if (source === "session" && !previous) {
    setActiveProgressUser(userId);
    snapshotWorkingCopy(userId);
    return false;
  }

  applyFreshProgress();
  setActiveProgressUser(userId);
  snapshotWorkingCopy(userId);
  return true;
}

async function syncLocalWithCloud(userId: string) {
  if (!navigator.onLine) return;
  const cloudProgress = await loadProgressFromCloud();
  const localProgress = loadProgress();
  if (getActiveProgressUser() !== userId) return;
  if (cloudProgress) {
    const merged = mergeProgress(localProgress, cloudProgress);
    applyCloudProgress(merged);
    snapshotWorkingCopy(userId);
    await doSync(merged, userId);
  } else {
    await doSync(localProgress, userId);
  }
}

function handleSignedOut() {
  const previous = getActiveProgressUser();
  if (previous) snapshotWorkingCopy(previous);
  applyFreshProgress();
  setActiveProgressUser(null);
}

export function ProgressSyncProvider() {
  const switchingRef = useRef(false);
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const mirrorProgress = (event: Event) => {
      const progress = (event as CustomEvent<StoredProgressV1>).detail ?? loadProgress();
      void backupProgress(progress, getActiveProgressUser()).catch(() => {});
    };
    window.addEventListener("progress-saved", mirrorProgress);
    ensureProgressBackup().then((restored) => {
      if (cancelled) return;
      if (restored) {
        window.location.reload();
        return;
      }
      setStorageReady(true);
    }).catch(() => setStorageReady(true));
    return () => {
      cancelled = true;
      window.removeEventListener("progress-saved", mirrorProgress);
    };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    const runHydrate = async (userId: string, source: "session" | "signin") => {
      switchingRef.current = true;
      const changed = await withHydrateLock(() => hydrateAccount(userId, source));
      switchingRef.current = false;
      if (changed) {
        window.location.reload();
        return;
      }
      await syncLocalWithCloud(userId);
    };

    const persistActiveSnapshot = () => {
      const id = getActiveProgressUser();
      if (id) snapshotWorkingCopy(id);
    };
    window.addEventListener("pagehide", persistActiveSnapshot);

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // setTimeout : éviter un deadlock GoTrue si on rappelle Supabase dans le callback.
      window.setTimeout(() => {
        if (event === "INITIAL_SESSION" && session?.user) {
          touchActivityAction().catch(() => {});
          void runHydrate(session.user.id, "session");
        } else if (event === "SIGNED_IN" && session?.user) {
          touchActivityAction().catch(() => {});
          void runHydrate(session.user.id, "signin");
        } else if (event === "SIGNED_OUT") {
          switchingRef.current = true;
          handleSignedOut();
          switchingRef.current = false;
          window.location.reload();
        }
      }, 0);
    });

    const debouncedSync = debounce(async (e: Event) => {
      if (switchingRef.current) return;
      const progress = (e as CustomEvent).detail ?? loadProgress();
      queueSync(progress);
      if (!navigator.onLine) return;
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;
      if (getActiveProgressUser() !== user.id) return;
      const merged = await mergeWithCloudBeforeSync(progress);
      if (getActiveProgressUser() !== user.id) return;
      doSync(merged, user.id);
    }, 3000);

    window.addEventListener("progress-saved", debouncedSync);

    const handleVisible = debounce(async () => {
      if (switchingRef.current) return;
      if (!navigator.onLine) return;
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;
      if (getActiveProgressUser() !== user.id) return;
      touchActivityAction().catch(() => {});
      const localRaw = localStorage.getItem(MATH_PROGRESS_KEY);
      if (localRaw) {
        try {
          doSync(JSON.parse(localRaw) as StoredProgressV1, user.id);
        } catch { /* ignore */ }
      }
    }, 5000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") handleVisible();
    };

    const handleOnline = async () => {
      if (switchingRef.current) return;
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;
      if (getActiveProgressUser() !== user.id) return;
      const queued = pendingProgress();
      const merged = await mergeWithCloudBeforeSync(queued ?? loadProgress());
      if (getActiveProgressUser() !== user.id) return;
      await doSync(merged, user.id);
      touchActivityAction().catch(() => {});
    };

    window.addEventListener("focus", handleVisible);
    window.addEventListener("app-online", handleOnline);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("pagehide", persistActiveSnapshot);
      window.removeEventListener("progress-saved", debouncedSync);
      window.removeEventListener("focus", handleVisible);
      window.removeEventListener("app-online", handleOnline);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [storageReady]);

  return null;
}
