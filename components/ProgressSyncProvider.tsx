"use client";

import { useEffect, useRef, useState } from "react";
import { loadProgress, saveProgress, MATH_PROGRESS_KEY } from "@/lib/progress/math-progress";
import { mergeProgress } from "@/lib/progress/mergeProgress";
import { loadProgressFromCloud, syncProgressToCloud, touchActivityAction } from "@/app/actions/progress";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { backupProgress, ensureProgressBackup } from "@/lib/offline/progress-backup";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

const PENDING_SYNC_KEY = "soutien-pending-cloud-sync-v1";

function restoreSubKeys(p: StoredProgressV1) {
  if (p.commProgress) {
    localStorage.setItem("soutien-comm-progress-v1", JSON.stringify(p.commProgress));
  }
  if (p.lectureProgress) {
    localStorage.setItem("soutien-lecture-v2", JSON.stringify(p.lectureProgress));
  }
}

function debounce<T extends unknown[]>(fn: (...args: T) => void, ms: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { fn(...args); timer = null; }, ms);
  };
}

function queueSync(progress: StoredProgressV1) {
  localStorage.setItem(PENDING_SYNC_KEY, JSON.stringify(progress));
  void backupProgress(progress).catch(() => {});
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

async function doSync(progress: StoredProgressV1) {
  queueSync(progress);
  if (!navigator.onLine) return false;
  try {
    const result = await syncProgressToCloud(progress);
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
  localStorage.setItem(MATH_PROGRESS_KEY, JSON.stringify(merged));
  restoreSubKeys(merged);
  return merged;
}

export function ProgressSyncProvider() {
  const syncedRef = useRef(false);
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const mirrorProgress = (event: Event) => {
      const progress = (event as CustomEvent<StoredProgressV1>).detail ?? loadProgress();
      void backupProgress(progress).catch(() => {});
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

    const initialSync = async () => {
      if (!navigator.onLine) return;
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      touchActivityAction().catch(() => {}); // update last seen immediately
      if (syncedRef.current) return;
      syncedRef.current = true;

      const cloudProgress = await loadProgressFromCloud();
      const localProgress = loadProgress();

      if (cloudProgress) {
        const merged = mergeProgress(localProgress, cloudProgress);
        saveProgress(merged);
        restoreSubKeys(merged);
        doSync(merged);
      } else {
        // First login or no cloud data yet — push local progress to cloud
        doSync(localProgress);
      }
    };
    initialSync().catch(() => {});

    // Listen for auth state changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        syncedRef.current = false; // allow re-sync on next effect
        const cloudProgress = await loadProgressFromCloud();
        const localProgress = loadProgress();
        if (cloudProgress) {
          const merged = mergeProgress(localProgress, cloudProgress);
          saveProgress(merged);
          restoreSubKeys(merged);
          doSync(merged);
        } else {
          doSync(localProgress);
        }
      }
    });

    // Debounced sync when progress is saved locally (custom event from saveProgress)
    const debouncedSync = debounce(async (e: Event) => {
      const progress = (e as CustomEvent).detail ?? loadProgress();
      queueSync(progress);
      if (!navigator.onLine) return;
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;
      const merged = await mergeWithCloudBeforeSync(progress);
      doSync(merged);
    }, 3000);

    window.addEventListener("progress-saved", debouncedSync);

    // Sync when tab regains focus or visibility (handles multi-tab + mobile background tabs)
    const handleVisible = debounce(async () => {
      if (!navigator.onLine) return;
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;
      touchActivityAction().catch(() => {});
      const localRaw = localStorage.getItem(MATH_PROGRESS_KEY);
      if (localRaw) {
        try {
          doSync(JSON.parse(localRaw) as StoredProgressV1);
        } catch { /* ignore */ }
      }
    }, 5000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") handleVisible();
    };

    const handleOnline = async () => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;
      const queued = pendingProgress();
      const merged = await mergeWithCloudBeforeSync(queued ?? loadProgress());
      await doSync(merged);
      touchActivityAction().catch(() => {});
    };

    window.addEventListener("focus", handleVisible);
    window.addEventListener("app-online", handleOnline);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("progress-saved", debouncedSync);
      window.removeEventListener("focus", handleVisible);
      window.removeEventListener("app-online", handleOnline);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [storageReady]);

  return null;
}
