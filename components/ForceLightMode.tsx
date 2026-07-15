"use client";

import { useEffect } from "react";

/** Verrouille le thème clair — bureau (navigateur) et mobile (WebView Capacitor). */
function applyLightMode() {
  const root = document.documentElement;
  root.style.colorScheme = "light";
  root.classList.remove("dark");
}

export function ForceLightMode() {
  useEffect(() => {
    applyLightMode();

    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
      }
      if (document.documentElement.style.colorScheme !== "light") {
        document.documentElement.style.colorScheme = "light";
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSchemeChange = () => applyLightMode();
    mq.addEventListener("change", onSchemeChange);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", onSchemeChange);
    };
  }, []);

  return null;
}

export const FORCE_LIGHT_MODE_SCRIPT = `(function(){var r=document.documentElement;r.style.colorScheme='light';r.classList.remove('dark');})();`;
