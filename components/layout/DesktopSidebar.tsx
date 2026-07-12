"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getPendingTaskCountAction } from "@/app/actions/tasks";
import { getExpressionUnreadCountAction } from "@/app/actions/expression";
import { getPlacementNavVisibilityAction } from "@/app/actions/admin";
import { getContentEditorCapabilitiesAction } from "@/app/actions/content-editor";
import { useTranslation } from "@/components/TranslationProvider";
import { useEvalNavGuard } from "@/components/EvalNavGuard";
import { useContentEditor } from "@/components/content-editor/ContentEditorProvider";

type NavLink = {
  href: string;
  label: string;
  match?: (pathname: string) => boolean;
};

const mainLinks: NavLink[] = [
  { href: "/", label: "Accueil", match: (p) => p === "/" || p === "" },
  { href: "/lecture", label: "Lecture" },
  {
    href: "/francais",
    label: "Français",
    match: (p) => p.startsWith("/francais") || p.startsWith("/communication"),
  },
  { href: "/mathematiques", label: "Maths" },
];

const frenchSubs = [
  { href: "/francais?tab=vocabulaire", label: "Vocabulaire", tab: "vocabulaire" },
  { href: "/francais?tab=grammaire", label: "Grammaire", tab: "grammaire" },
  { href: "/francais?tab=communication", label: "Expression", tab: "communication" },
  { href: "/communication", label: "Parler", tab: null as string | null },
];

function isActive(pathname: string, link: NavLink) {
  if (link.match) return link.match(pathname);
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

/**
 * Menu latéral bureau (inspiré epcas) — masqué sur mobile.
 */
export function DesktopSidebar() {
  const pathname = usePathname() ?? "";
  const searchParams = useSearchParams();
  const router = useRouter();
  const evalGuard = useEvalNavGuard();
  const { showPivot, togglePivot } = useTranslation();
  const { editMode, setEditMode, capabilities } = useContentEditor();
  const [pendingTasks, setPendingTasks] = useState(0);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [placementVisible, setPlacementVisible] = useState(true);
  const [canAdmin, setCanAdmin] = useState(false);

  useEffect(() => {
    getPendingTaskCountAction().then(setPendingTasks).catch(() => {});
    getExpressionUnreadCountAction().then(setUnreadMessages).catch(() => {});
    getPlacementNavVisibilityAction()
      .then((res) => {
        if (res.ok) setPlacementVisible(res.visible);
      })
      .catch(() => {});
    getContentEditorCapabilitiesAction()
      .then((c) => setCanAdmin(c.canEdit))
      .catch(() => {});
  }, [pathname]);

  useEffect(() => {
    setCanAdmin(capabilities.canEdit);
  }, [capabilities.canEdit]);

  const badge = pendingTasks + unreadMessages;
  const frenchOpen =
    pathname.startsWith("/francais") || pathname.startsWith("/communication");
  const currentTab =
    searchParams.get("tab") ??
    (pathname.startsWith("/francais/vocabulaire")
      ? "vocabulaire"
      : pathname.startsWith("/francais/grammaire") ||
          pathname.startsWith("/francais/conjugaison")
        ? "grammaire"
        : pathname.startsWith("/communication")
          ? "communication"
          : "vocabulaire");

  function go(href: string) {
    if (evalGuard?.active) {
      evalGuard.requestNavigate(() => router.push(href));
      return;
    }
    router.push(href);
  }

  return (
    <aside
      className="print:hidden hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-[var(--sidebar-w)] lg:flex-col lg:border-r lg:border-[var(--color-border-default)] lg:bg-[color-mix(in_oklch,var(--color-bg-primary)_88%,transparent)] lg:backdrop-blur-md"
      aria-label="Navigation latérale"
    >
      <div className="border-b border-[var(--color-border-default)] px-5 py-5">
        <p className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Soutien
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">scolaire</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
        {mainLinks.map((link) => {
          const active = isActive(pathname, link);
          return (
            <div key={link.href}>
              <button
                type="button"
                onClick={() => go(link.href)}
                className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
                  active
                    ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                <span className="relative">
                  {link.label}
                  {link.href === "/" && badge > 0 && (
                    <span className="absolute -right-5 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                      {badge > 9 ? "9+" : badge}
                    </span>
                  )}
                </span>
              </button>
              {link.href === "/francais" && frenchOpen && (
                <ul className="mt-1 ml-3 space-y-0.5 border-l border-[var(--color-border-default)] pl-3">
                  {frenchSubs.map((sub) => {
                    const subActive =
                      (sub.href === "/communication" &&
                        pathname.startsWith("/communication")) ||
                      (Boolean(sub.tab) &&
                        !pathname.startsWith("/communication") &&
                        currentTab === sub.tab);
                    return (
                      <li key={sub.href}>
                        <button
                          type="button"
                          onClick={() => go(sub.href)}
                          className={`block w-full rounded-[var(--radius-sm)] px-2 py-1.5 text-left text-xs font-medium transition ${
                            subActive
                              ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                              : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                          }`}
                        >
                          {sub.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}

        {placementVisible && (
          <button
            type="button"
            onClick={() => go("/placement")}
            className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
              pathname.startsWith("/placement")
                ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
            }`}
          >
            Placement
          </button>
        )}

        <div className="my-2 border-t border-[var(--color-border-default)]" />

        <button
          type="button"
          onClick={() => go("/compte")}
          className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
            pathname.startsWith("/compte")
              ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
              : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          }`}
        >
          Réglages
        </button>

        <button
          type="button"
          onClick={togglePivot}
          className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
            showPivot
              ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
              : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          }`}
        >
          Traductions {showPivot ? "(on)" : ""}
        </button>

        {canAdmin && (
          <>
            <div className="my-2 border-t border-[var(--color-border-default)]" />
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
              Admin
            </p>
            <Link
              href="/admin"
              className={`rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition ${
                pathname === "/admin"
                  ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              }`}
            >
              Comptes
            </Link>
            <Link
              href="/admin/contenu"
              className={`rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition ${
                pathname.startsWith("/admin/contenu")
                  ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              }`}
            >
              Contenu
            </Link>
            <Link
              href="/suivi"
              className={`rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition ${
                pathname.startsWith("/suivi")
                  ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              }`}
            >
              Suivi
            </Link>
            <button
              type="button"
              onClick={() => setEditMode(!editMode)}
              className={`rounded-[var(--radius-md)] px-3 py-2 text-left text-sm font-medium transition ${
                editMode
                  ? "bg-[var(--color-correction-soft)] text-[var(--color-wrong-text)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              }`}
            >
              {editMode ? "Quitter édition" : "Mode édition"}
            </button>
          </>
        )}
      </nav>
    </aside>
  );
}
