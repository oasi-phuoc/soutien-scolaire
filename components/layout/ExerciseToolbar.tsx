"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  isLessonMode,
  useLessonActions,
  type ActionKind,
} from "@/lib/hooks/useLessonActions";

/**
 * Barre d'actions bureau pour les exercices / leçons
 * (Retour · Refresh · Valider · Suivant) — complémentaire à la sidebar.
 */
export function ExerciseToolbar() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const lesson = isLessonMode(pathname);
  const { actions, trigger } = useLessonActions(lesson);

  if (!lesson) return null;

  const items: {
    kind: ActionKind;
    label: string;
    fallbackLabel: string;
  }[] = [
    { kind: "back", label: actions.back.label ?? "Retour", fallbackLabel: "Retour" },
    {
      kind: "refresh",
      label: actions.refresh.label ?? "Refresh",
      fallbackLabel: "Refresh",
    },
    {
      kind: "validate",
      label: actions.validate.label ?? "Valider",
      fallbackLabel: "Valider",
    },
    {
      kind: "next",
      label: actions.next.label ?? "Suivant",
      fallbackLabel: "Suivant",
    },
  ];

  return (
    <div
      data-exercise-toolbar
      className="print:hidden sticky top-0 z-30 hidden border-b border-[var(--color-border-default)] bg-[color-mix(in_oklch,var(--color-bg-primary)_92%,transparent)] backdrop-blur-md lg:block"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-6 py-2.5">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-lg px-2 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
        >
          ← Sortir
        </button>
        <div className="mx-2 h-5 w-px bg-[var(--color-border-default)]" />
        <div className="flex flex-1 flex-wrap items-center justify-end gap-1.5">
          {items.map((item) => {
            const state = actions[item.kind];
            if (!state.available && item.kind !== "back") return null;
            return (
              <button
                key={item.kind}
                type="button"
                disabled={item.kind === "back" ? false : state.disabled}
                onClick={() => {
                  if (item.kind === "back" && !state.available) {
                    router.back();
                    return;
                  }
                  trigger(item.kind);
                }}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  item.kind === "validate"
                    ? "bg-[var(--color-theme)] text-white hover:opacity-90 disabled:opacity-40"
                    : "border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-theme-light)] disabled:opacity-40"
                }`}
              >
                {state.available ? item.label : item.fallbackLabel}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
