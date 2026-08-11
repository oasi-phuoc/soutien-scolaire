"use client";

import { useEffect, useState } from "react";

/** Prod Vercel connue — les previews `*-….vercel.app` ont souvent le SSO Deployment Protection. */
const PRODUCTION_VERCEL_HOSTS = new Set([
  "soutien-van.vercel.app",
]);

function shouldRegisterServiceWorker(): boolean {
  if (process.env.NODE_ENV !== "production") return false;
  // Build preview Vercel : /sw.js est redirigé vers vercel.com/sso-api → SecurityError.
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") return false;

  const host = window.location.hostname;
  if (host.endsWith(".vercel.app") && !PRODUCTION_VERCEL_HOSTS.has(host)) {
    return false;
  }
  // Pages auth : ne pas enregistrer (évite les erreurs console au clic « Créer un compte »).
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (
    path === "/connexion"
    || path === "/inscription"
    || path === "/mot-de-passe-oublie"
    || path === "/reinitialiser-mot-de-passe"
    || path === "/verification-otp"
  ) {
    return false;
  }
  return true;
}

export function OfflineProvider() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);

    if ("serviceWorker" in navigator) {
      if (shouldRegisterServiceWorker()) {
        navigator.serviceWorker
          .register("/sw.js", { scope: "/", updateViaCache: "none" })
          .catch((error: unknown) => {
            const message = error instanceof Error ? error.message : String(error);
            if (/redirect|SecurityError/i.test(message)) {
              console.warn("[Offline] service worker unavailable (redirect blocked)", message);
              return;
            }
            console.error("[Offline] service worker registration failed", error);
          });
      } else {
        // Évite qu’un ancien SW de preview continue à intercepter / échouer en silence.
        void navigator.serviceWorker.getRegistrations().then((regs) => {
          regs.forEach((reg) => {
            void reg.unregister();
          });
        });
      }
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
