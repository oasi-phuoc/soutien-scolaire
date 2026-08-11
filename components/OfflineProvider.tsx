"use client";

import { useEffect, useState } from "react";

export function OfflineProvider() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);

    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      // updateViaCache: "none" évite un SW obsolète ; le fetch SW ne doit jamais
      // être redirigé (middleware / SSO), sinon SecurityError.
      navigator.serviceWorker
        .register("/sw.js", { scope: "/", updateViaCache: "none" })
        .catch((error: unknown) => {
          const message = error instanceof Error ? error.message : String(error);
          // Redirection (auth middleware ou Vercel SSO) : non bloquant pour l’app.
          if (/redirect|SecurityError/i.test(message)) {
            console.warn("[Offline] service worker unavailable (redirect blocked)", message);
            return;
          }
          console.error("[Offline] service worker registration failed", error);
        });
    }

    const handleOnline = () => {
      setOnline(true);
      window.dispatchEvent(new Event("app-online"));
    };
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (online) return null;
  return (
    <div className="print:hidden fixed left-1/2 top-[max(0.75rem,env(safe-area-inset-top))] z-[70] flex -translate-x-1/2 items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur" role="status">
      <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden />
      Hors connexion
    </div>
  );
}
