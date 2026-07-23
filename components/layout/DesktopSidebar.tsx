"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getPendingTaskCountAction } from "@/app/actions/tasks";
import { getExpressionUnreadCountAction } from "@/app/actions/expression";
import {
  getPedagogicNavVisibilityAction,
} from "@/app/actions/admin";
import { getSuiviContextAction } from "@/app/actions/suivi";
import { useTranslation } from "@/components/TranslationProvider";
import { useEvalNavGuard } from "@/components/EvalNavGuard";
import { getMathModule } from "@/lib/curriculum/math-data";
import { getModuleIdForSubmodule } from "@/lib/curriculum/lessons-registry";

type NavLink = {
  href: string;
  label: string;
  match?: (pathname: string) => boolean;
};

type SubLink = {
  href: string;
  label: string;
  active: boolean;
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

function isActive(pathname: string, link: NavLink) {
  if (link.match) return link.match(pathname);
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

function TranslateOnIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
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
  const [pendingTasks, setPendingTasks] = useState(0);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [pedagogicNav, setPedagogicNav] = useState({
    showSection: false,
    isAdmin: false,
    hasSuiviAccess: false,
    canEditContent: false,
    canPrint: false,
  });
  const [suiviClasses, setSuiviClasses] = useState<{ label: string }[]>([]);

  const inSuiviClass = pathname.startsWith("/suivi/classes/");
  const currentClassSlug = inSuiviClass
    ? decodeURIComponent(pathname.split("/")[3] ?? "")
    : "";

  useEffect(() => {
    getPendingTaskCountAction().then(setPendingTasks).catch(() => {});
    getExpressionUnreadCountAction().then(setUnreadMessages).catch(() => {});
    getPedagogicNavVisibilityAction()
      .then((res) => {
        if (!res.ok) return;
        setPedagogicNav({
          showSection: res.showSection,
          isAdmin: res.isAdmin,
          hasSuiviAccess: res.hasSuiviAccess,
          canEditContent: res.canEditContent,
          canPrint: res.canPrint,
        });
      })
      .catch(() => {});
  }, [pathname]);

  useEffect(() => {
    if (!pedagogicNav.showSection || !inSuiviClass) {
      setSuiviClasses([]);
      return;
    }
    getSuiviContextAction()
      .then((ctx) => {
        if (!ctx?.hasAccess) {
          setSuiviClasses([]);
          return;
        }
        setSuiviClasses(
          [...ctx.classes]
            .sort((a, b) => a.label.localeCompare(b.label, "fr"))
            .map((c) => ({ label: c.label })),
        );
      })
      .catch(() => setSuiviClasses([]));
  }, [pedagogicNav.showSection, inSuiviClass, pathname]);

  const badge = pendingTasks + unreadMessages;
  const lectureOpen = pathname.startsWith("/lecture");
  const frenchOpen =
    pathname.startsWith("/francais") || pathname.startsWith("/communication");
  const mathsOpen = pathname.startsWith("/mathematiques");
  const suiviOpen = pathname.startsWith("/suivi");
  const adminOpen = pathname.startsWith("/admin");

  const frenchTab =
    searchParams.get("tab") ??
    (pathname.startsWith("/francais/vocabulaire")
      ? "vocabulaire"
      : pathname.startsWith("/francais/grammaire") ||
          pathname.startsWith("/francais/conjugaison")
        ? "grammaire"
        : pathname.startsWith("/communication")
          ? "communication"
          : "vocabulaire");

  const lectureTab =
    searchParams.get("tab") === "histoires" ||
    pathname.startsWith("/lecture/histoires")
      ? "histoires"
      : "apprendre";

  const mathTabParam = searchParams.get("tab");
  let mathsTab: "algebra" | "geometry" =
    mathTabParam === "geometry" ? "geometry" : "algebra";
  if (mathsOpen && pathname !== "/mathematiques" && !mathTabParam) {
    const upper = pathname.split("/")[2]?.toUpperCase() ?? "";
    const moduleId = getModuleIdForSubmodule(upper) ?? upper.split("-")[0] ?? upper;
    const mod = getMathModule(moduleId);
    if (mod?.branch === "geometry") mathsTab = "geometry";
  }

  const lectureSubs: SubLink[] = [
    {
      href: "/lecture?tab=apprendre",
      label: "Apprendre",
      active: lectureTab === "apprendre",
    },
    {
      href: "/lecture?tab=histoires",
      label: "Histoires",
      active: lectureTab === "histoires",
    },
  ];

  const frenchSubs: SubLink[] = [
    {
      href: "/francais?tab=vocabulaire",
      label: "Vocabulaire",
      active: !pathname.startsWith("/communication") && frenchTab === "vocabulaire",
    },
    {
      href: "/francais?tab=grammaire",
      label: "Grammaire",
      active: !pathname.startsWith("/communication") && frenchTab === "grammaire",
    },
    {
      href: "/francais?tab=communication",
      label: "Expression",
      active:
        frenchTab === "communication" || pathname.startsWith("/communication"),
    },
  ];

  const mathsSubs: SubLink[] = [
    {
      href: "/mathematiques?tab=algebra",
      label: "Algèbre",
      active: mathsTab === "algebra",
    },
    {
      href: "/mathematiques?tab=geometry",
      label: "Géométrie",
      active: mathsTab === "geometry",
    },
  ];

  const suiviSubs: SubLink[] = [
    ...(inSuiviClass
      ? suiviClasses.map((c) => ({
          href: `/suivi/classes/${encodeURIComponent(c.label)}`,
          label: c.label,
          active: c.label === currentClassSlug,
        }))
      : []),
    {
      href: "/suivi/devoirs/apercu",
      label: "Devoirs",
      active: pathname.startsWith("/suivi/devoirs/apercu"),
    },
    {
      href: "/suivi/devoirs",
      label: "Affecter devoir",
      active: pathname === "/suivi/devoirs",
    },
  ];

  function go(href: string) {
    if (evalGuard?.active) {
      evalGuard.requestNavigate(() => router.push(href));
      return;
    }
    router.push(href);
  }

  function renderSubs(subs: SubLink[]) {
    return (
      <ul className="mt-1 ml-3 space-y-0.5 border-l border-[var(--color-border-default)] pl-3">
        {subs.map((sub) => (
          <li key={sub.href}>
            <button
              type="button"
              onClick={() => go(sub.href)}
              className={`block w-full rounded-[var(--radius-sm)] px-2 py-1.5 text-left text-xs font-medium transition ${
                sub.active
                  ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              }`}
            >
              {sub.label}
            </button>
          </li>
        ))}
      </ul>
    );
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
              {link.href === "/lecture" && lectureOpen && renderSubs(lectureSubs)}
              {link.href === "/francais" && frenchOpen && renderSubs(frenchSubs)}
              {link.href === "/mathematiques" && mathsOpen && renderSubs(mathsSubs)}
            </div>
          );
        })}

        {pedagogicNav.showSection && (
          <>
            <div className="my-2 border-t border-[var(--color-border-default)]" />
            <div>
              <button
                type="button"
                onClick={() => go("/suivi")}
                className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
                  suiviOpen
                    ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                Suivi pédagogique
              </button>
              {suiviOpen && renderSubs(suiviSubs)}
            </div>
          </>
        )}

        {pedagogicNav.canPrint && (
          <button
            type="button"
            onClick={() => go("/admin/impression")}
            className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
              pathname.startsWith("/admin/impression")
                ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            Impression
          </button>
        )}

        {pedagogicNav.isAdmin && (
          <>
            <div>
              <button
                type="button"
                onClick={() => go("/admin")}
                className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
                  adminOpen && !pathname.startsWith("/admin/impression")
                    ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                }`}
              >
                Admin
              </button>
              {adminOpen &&
                !pathname.startsWith("/admin/impression") &&
                renderSubs([
                  {
                    href: "/admin/attribution-professeurs",
                    label: "Professeurs",
                    active: pathname.startsWith("/admin/attribution-professeurs"),
                  },
                  ...(pedagogicNav.canEditContent
                    ? [
                        {
                          href: "/admin/contenu",
                          label: "Édition de contenu",
                          active: pathname.startsWith("/admin/contenu"),
                        },
                      ]
                    : []),
                ])}
            </div>
          </>
        )}

        {/* Mode local sans rôle admin : accès direct à l'édition */}
        {!pedagogicNav.isAdmin && pedagogicNav.canEditContent && (
          <button
            type="button"
            onClick={() => go("/admin/contenu")}
            className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
              pathname.startsWith("/admin/contenu")
                ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
            }`}
          >
            Édition de contenu
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
          aria-pressed={showPivot}
          className={`flex w-full items-center gap-2 rounded-[var(--radius-md)] px-3 py-2.5 text-left text-sm font-medium transition ${
            showPivot
              ? "bg-[var(--color-theme-light)] text-[var(--color-theme-muted)]"
              : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          }`}
        >
          <span className="flex-1">Traductions</span>
          {showPivot && <TranslateOnIcon />}
        </button>
      </nav>
    </aside>
  );
}
