"use client";

import { useEffect } from "react";
import { flushPlacementPendingSubmissions } from "@/lib/placement/pending-submissions";
import { syncPlacementFromCloud } from "@/lib/placement/sync-from-cloud";

export function PlacementPendingSync() {
  useEffect(() => {
    async function flush() {
      await flushPlacementPendingSubmissions();
      await syncPlacementFromCloud();
    }
    void flush();
    const onOnline = () => { void flush(); };
    window.addEventListener("app-online", onOnline);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("app-online", onOnline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  return null;
}
