"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type EvalNavGuardApi = {
  /** True while at least one evaluation is in progress. */
  active: boolean;
  /** Register an in-progress evaluation (increments the guard count). */
  register: () => void;
  /** Unregister a previously registered evaluation. */
  unregister: () => void;
  /**
   * Run `run` immediately if no evaluation is in progress, otherwise open a
   * confirmation dialog and only run it if the user confirms leaving.
   */
  requestNavigate: (run: () => void) => void;
};

const EvalNavGuardContext = createContext<EvalNavGuardApi | null>(null);

export function useEvalNavGuard(): EvalNavGuardApi | null {
  return useContext(EvalNavGuardContext);
}

/**
 * Convenience hook for evaluation components: keeps the guard registered while
 * `active` is true (e.g. while the evaluation timer is running).
 */
export function useRegisterEvalGuard(active: boolean) {
  const guard = useEvalNavGuard();
  useEffect(() => {
    if (!active || !guard) return;
    guard.register();
    return () => guard.unregister();
  }, [active, guard]);
}

/**
 * Mount this (conditionally) while an evaluation is in progress to register the
 * navigation guard. Rendering it conditionally is safe (mount/unmount) and
 * avoids hook-ordering issues in components that have early returns.
 */
export function EvalGuardSentinel() {
  useRegisterEvalGuard(true);
  return null;
}

export function EvalNavGuardProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [pending, setPending] = useState<(() => void) | null>(null);

  const register = useCallback(() => setCount((c) => c + 1), []);
  const unregister = useCallback(() => setCount((c) => Math.max(0, c - 1)), []);

  const active = count > 0;

  const requestNavigate = useCallback((run: () => void) => {
    if (count > 0) setPending(() => run);
    else run();
  }, [count]);

  return (
    <EvalNavGuardContext.Provider value={{ active, register, unregister, requestNavigate }}>
      {children}
      {pending && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm space-y-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] p-6 shadow-xl">
            <p className="text-base font-bold text-[var(--color-text-primary)]">Quitter l&apos;évaluation ?</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Votre progression sera perdue. Vous pourrez recommencer depuis le début.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setPending(null)}
                className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
              >
                Continuer l&apos;évaluation
              </button>
              <button
                type="button"
                onClick={() => {
                  const run = pending;
                  setPending(null);
                  setCount(0);
                  run?.();
                }}
                className="flex-1 rounded-[var(--radius-lg)] bg-red-500 px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Quitter
              </button>
            </div>
          </div>
        </div>
      )}
    </EvalNavGuardContext.Provider>
  );
}
