"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type ActionKind = "back" | "refresh" | "validate" | "next";
export type ActionAvailability = Record<
  ActionKind,
  { available: boolean; disabled: boolean; label?: string }
>;

export const emptyActionAvailability: ActionAvailability = {
  back: { available: false, disabled: true },
  refresh: { available: false, disabled: true },
  validate: { available: false, disabled: true },
  next: { available: false, disabled: true },
};

export function isPlacementHubPage(pathname: string) {
  return pathname === "/placement";
}

export function isMainSectionPage(pathname: string) {
  return (
    ["", "/", "/lecture", "/francais", "/mathematiques", "/communication"].includes(
      pathname,
    ) ||
    pathname.startsWith("/compte") ||
    isPlacementHubPage(pathname) ||
    pathname.startsWith("/messagerie")
  );
}

export function isLessonMode(pathname: string) {
  return (
    !isMainSectionPage(pathname) &&
    !pathname.startsWith("/admin") &&
    !pathname.startsWith("/suivi")
  );
}

function normalizedLabel(button: HTMLButtonElement) {
  return `${button.getAttribute("aria-label") ?? ""} ${button.textContent ?? ""}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function getLegacyActionButton(kind: ActionKind) {
  if (typeof document === "undefined") return undefined;
  const tests: Record<ActionKind, RegExp[]> = {
    back: [/\bretour\b/, /\bprecedent\b/],
    refresh: [/recommencer/, /reinitialiser/, /refaire/, /refresh/, /actualiser/],
    validate: [/valider/],
    next: [/suivant/, /terminer/, /imprimer/],
  };
  const candidates = Array.from(
    document.querySelectorAll<HTMLButtonElement>("button"),
  ).reverse();
  const priorityCandidates = candidates.filter((candidate) =>
    candidate.closest("[data-nav-action-priority]"),
  );
  const pool = priorityCandidates.length > 0 ? priorityCandidates : candidates;
  return pool.find((candidate) => {
    if (candidate.closest("[data-main-nav]")) return false;
    if (candidate.closest("[data-exercise-toolbar]")) return false;
    if (!candidate.closest(".hidden.fixed.bottom-0")) return false;
    if (candidate.dataset.navAction) return candidate.dataset.navAction === kind;
    return tests[kind].some((rx) => rx.test(normalizedLabel(candidate)));
  });
}

export function readActionAvailability(): ActionAvailability {
  const states = { ...emptyActionAvailability };
  (Object.keys(states) as ActionKind[]).forEach((kind) => {
    const button = getLegacyActionButton(kind);
    states[kind] = {
      available:
        !!button &&
        !button.classList.contains("invisible") &&
        !button.classList.contains("hidden"),
      disabled:
        !button ||
        button.disabled ||
        button.getAttribute("aria-disabled") === "true",
      label: button?.dataset.navLabel,
    };
  });
  return states;
}

export function triggerLegacyAction(kind: ActionKind, fallback: () => void) {
  const button = getLegacyActionButton(kind);
  if (button) {
    button.click();
    return;
  }
  fallback();
}

/** Observe les boutons legacy des runners pour la barre d'actions. */
export function useLessonActions(enabled: boolean) {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [actions, setActions] = useState<ActionAvailability>(emptyActionAvailability);

  useEffect(() => {
    if (!enabled) {
      setActions(emptyActionAvailability);
      return;
    }
    let frame = 0;
    const syncActions = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = readActionAvailability();
        setActions((current) =>
          JSON.stringify(current) === JSON.stringify(next) ? current : next,
        );
      });
    };
    syncActions();
    const observer = new MutationObserver(syncActions);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["disabled", "aria-disabled", "class", "data-nav-label"],
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [enabled, pathname]);

  return {
    actions,
    trigger: (kind: ActionKind) =>
      triggerLegacyAction(kind, () => {
        if (kind === "back") router.back();
      }),
  };
}
