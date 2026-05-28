"use client";

import { useEffect, useRef } from "react";
import { loadProgress, saveProgress, MATH_PROGRESS_KEY } from "@/lib/progress/math-progress";
import { mergeProgress } from "@/lib/progress/mergeProgress";
import { loadProgressFromCloud, syncProgressToCloud, touchActivityAction } from "@/app/actions/progress";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import type { StoredProgressV1 } from "@/lib/curriculum/types";

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

export function ProgressSyncProvider() {
  const syncedRef = useRef(false);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    // On mount: check if user is logged in, then sync cloud ↔ local
    supabase.auth.getUser().then(async ({ data: { user } }) => {
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
        // Push merged back to cloud (silent)
        syncProgressToCloud(merged).catch(() => {});
      } else {
        // First login — push local progress to cloud
        syncProgressToCloud(localProgress).catch(() => {});
      }
    });

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
          syncProgressToCloud(merged).catch(() => {});
        } else {
          syncProgressToCloud(localProgress).catch(() => {});
        }
      }
    });

    // Debounced sync when progress is saved locally (custom event from saveProgress)
    const debouncedSync = debounce(async (e: Event) => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;
      const progress = (e as CustomEvent).detail ?? loadProgress();
      syncProgressToCloud(progress).catch(() => {});
    }, 3000);

    window.addEventListener("progress-saved", debouncedSync);

    // Sync when tab regains focus (handles multi-tab edits)
    const handleFocus = debounce(async () => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;
      const localRaw = localStorage.getItem(MATH_PROGRESS_KEY);
      if (localRaw) {
        try {
          syncProgressToCloud(JSON.parse(localRaw)).catch(() => {});
        } catch { /* ignore */ }
      }
    }, 5000);

    window.addEventListener("focus", handleFocus);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("progress-saved", debouncedSync);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}
