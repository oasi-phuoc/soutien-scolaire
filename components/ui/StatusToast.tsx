"use client";

import { useEffect, useState } from "react";

/** Toast bas d’écran — message mis à jour en place (ex. « Enregistrement… » → succès). */
export function useStatusToast(durationMs = 2800) {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!message) return;
    // Ne pas auto-fermer pendant « en cours… »
    if (/en cours/i.test(message)) return;
    const t = window.setTimeout(() => setMessage(null), durationMs);
    return () => window.clearTimeout(t);
  }, [message, durationMs]);

  return {
    message,
    showToast: setMessage,
    clearToast: () => setMessage(null),
    toastEl: message ? (
      <div
        role="status"
        className="fixed bottom-24 left-1/2 z-[60] max-w-[90vw] -translate-x-1/2 whitespace-nowrap rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-xl dark:bg-zinc-100 dark:text-zinc-900"
      >
        {message}
      </div>
    ) : null,
  };
}
