"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HISTORY_LIMIT = 40;
const TYPING_DEBOUNCE_MS = 450;

/**
 * Historique générique Annuler / Rétablir (inspiré epcas).
 */
export function useEditorHistory<T>(initial: T, isEqual?: (a: T, b: T) => boolean) {
  const eqRef = useRef(isEqual);
  eqRef.current = isEqual;

  const [present, setPresentState] = useState(initial);
  const presentRef = useRef(present);
  presentRef.current = present;

  const pastRef = useRef<T[]>([]);
  const futureRef = useRef<T[]>([]);
  const typingBaseRef = useRef<T | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [meta, setMeta] = useState({ canUndo: false, canRedo: false, depth: 0 });

  const syncMeta = useCallback(() => {
    setMeta({
      canUndo: pastRef.current.length > 0 || typingBaseRef.current != null,
      canRedo: futureRef.current.length > 0,
      depth: pastRef.current.length + (typingBaseRef.current ? 1 : 0),
    });
  }, []);

  const clearDebounce = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
  }, []);

  const flushTyping = useCallback(() => {
    if (typingBaseRef.current != null) {
      pastRef.current = [...pastRef.current, typingBaseRef.current].slice(
        -HISTORY_LIMIT,
      );
      typingBaseRef.current = null;
      futureRef.current = [];
      syncMeta();
    }
    clearDebounce();
  }, [clearDebounce, syncMeta]);

  const setPresent = useCallback(
    (
      updater: T | ((prev: T) => T),
      opts?: { history?: "debounce" | "immediate" | "none" },
    ) => {
      const history = opts?.history ?? "debounce";
      const next =
        typeof updater === "function"
          ? (updater as (prev: T) => T)(presentRef.current)
          : updater;
      const eq =
        eqRef.current ??
        ((a: T, b: T) => JSON.stringify(a) === JSON.stringify(b));
      if (eq(next, presentRef.current)) return;

      if (history === "none") {
        presentRef.current = next;
        setPresentState(next);
        return;
      }

      if (history === "immediate") {
        flushTyping();
        pastRef.current = [...pastRef.current, presentRef.current].slice(
          -HISTORY_LIMIT,
        );
        futureRef.current = [];
        presentRef.current = next;
        setPresentState(next);
        syncMeta();
        return;
      }

      // debounce
      if (typingBaseRef.current == null) {
        typingBaseRef.current = presentRef.current;
      }
      presentRef.current = next;
      setPresentState(next);
      clearDebounce();
      debounceRef.current = setTimeout(() => {
        flushTyping();
      }, TYPING_DEBOUNCE_MS);
      syncMeta();
    },
    [clearDebounce, flushTyping, syncMeta],
  );

  const undo = useCallback(() => {
    flushTyping();
    const prev = pastRef.current.pop();
    if (prev === undefined) return;
    futureRef.current = [...futureRef.current, presentRef.current];
    presentRef.current = prev;
    setPresentState(prev);
    syncMeta();
  }, [flushTyping, syncMeta]);

  const redo = useCallback(() => {
    flushTyping();
    const next = futureRef.current.pop();
    if (next === undefined) return;
    pastRef.current = [...pastRef.current, presentRef.current].slice(
      -HISTORY_LIMIT,
    );
    presentRef.current = next;
    setPresentState(next);
    syncMeta();
  }, [flushTyping, syncMeta]);

  const reset = useCallback(
    (value: T) => {
      clearDebounce();
      typingBaseRef.current = null;
      pastRef.current = [];
      futureRef.current = [];
      presentRef.current = value;
      setPresentState(value);
      syncMeta();
    },
    [clearDebounce, syncMeta],
  );

  useEffect(() => () => clearDebounce(), [clearDebounce]);

  return {
    present,
    setPresent,
    undo,
    redo,
    reset,
    canUndo: meta.canUndo,
    canRedo: meta.canRedo,
    historyDepth: meta.depth,
    historyLimit: HISTORY_LIMIT,
  };
}
