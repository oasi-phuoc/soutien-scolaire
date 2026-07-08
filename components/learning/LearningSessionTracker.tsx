"use client";

import { useEffect, useRef } from "react";
import { endLearningSessionAction, startLearningSessionAction } from "@/app/actions/sessions";

type SessionMeta = {
  subject: string;
  moduleId?: string;
  lessonId?: string;
  lessonPath?: string;
};

const HEARTBEAT_MS = 60_000;

export function useLearningSession(meta: SessionMeta | null) {
  const sessionIdRef = useRef<string | null>(null);
  const startedRef = useRef<number | null>(null);

  useEffect(() => {
    if (!meta?.subject) return;

    let cancelled = false;

    void (async () => {
      const res = await startLearningSessionAction(meta);
      if (!cancelled && res.ok && res.sessionId) {
        sessionIdRef.current = res.sessionId;
        startedRef.current = Date.now();
      }
    })();

    const heartbeat = window.setInterval(() => {
      const id = sessionIdRef.current;
      const started = startedRef.current;
      if (!id || !started) return;
      const durationSec = Math.round((Date.now() - started) / 1000);
      void endLearningSessionAction(id, durationSec, false);
    }, HEARTBEAT_MS);

    const end = () => {
      const id = sessionIdRef.current;
      const started = startedRef.current;
      if (!id || !started) return;
      const durationSec = Math.max(1, Math.round((Date.now() - started) / 1000));
      void endLearningSessionAction(id, durationSec, true);
      sessionIdRef.current = null;
      startedRef.current = null;
    };

    window.addEventListener("pagehide", end);
    window.addEventListener("beforeunload", end);

    return () => {
      cancelled = true;
      window.clearInterval(heartbeat);
      window.removeEventListener("pagehide", end);
      window.removeEventListener("beforeunload", end);
      end();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- meta fields tracked individually
  }, [meta?.subject, meta?.moduleId, meta?.lessonId, meta?.lessonPath]);
}
