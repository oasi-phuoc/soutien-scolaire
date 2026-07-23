"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getPendingTaskCountAction } from "@/app/actions/tasks";
import { getExpressionUnreadCountAction } from "@/app/actions/expression";
import {
  getPlacementNavVisibilityAction,
  getPedagogicNavVisibilityAction,
} from "@/app/actions/admin";
import { useTranslation } from "@/components/TranslationProvider";
import { useEvalNavGuard } from "@/components/EvalNavGuard";
import {
  isLessonMode,
  useLessonActions,
} from "@/lib/hooks/useLessonActions";

type NavIcon = ({ active }: { active: boolean }) => React.JSX.Element;
type NavItem = {
  href: string;
  label: string;
  icon: NavIcon;
  x: number;
  y: number;
};

const placementItem: NavItem = {
  href: "/placement",
  label: "Placement",
  icon: PlacementIcon,
  x: 0,
  y: -100,
};

const impressionItem: NavItem = {
  href: "/admin/impression",
  label: "Impression",
  icon: ImpressionIcon,
  x: -80,
  y: -100,
};

const links: NavItem[] = [
  { href: "/", label: "Accueil", icon: HomeIcon, x: 0, y: -174 },
  { href: "/lecture", label: "Lecture", icon: LectureIcon, x: -100, y: -134 },
  { href: "/francais", label: "Français", icon: FrIcon, x: 100, y: -134 },
  { href: "/mathematiques", label: "Maths", icon: MathIcon, x: -112, y: -48 },
  { href: "/compte", label: "Réglages", icon: GearIcon, x: 0, y: -78 },
];

const translateItem: NavItem = {
  href: "#translate",
  label: "Traductions",
  icon: TranslateIcon,
  x: 112,
  y: -48,
};

const mainPrimaryItems = ["/", "/lecture", "/francais", "/mathematiques"]
  .map((href) => links.find((item) => item.href === href)!);
const settingsItem = links.find((item) => item.href === "/compte")!;

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" || pathname === "" : pathname.startsWith(href);
}

function sectionColor(_pathname: string) {
  return "var(--color-theme)";
}

export function MainNav() {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const { showPivot, togglePivot } = useTranslation();
  const evalGuard = useEvalNavGuard();
  const [open, setOpen] = useState(false);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [placementVisible, setPlacementVisible] = useState(true);
  const [impressionVisible, setImpressionVisible] = useState(false);
  const lessonMode = isLessonMode(pathname);
  const { actions, trigger } = useLessonActions(lessonMode);

  useEffect(() => {
    getPendingTaskCountAction().then(setPendingTasks).catch(() => {});
    getExpressionUnreadCountAction().then(setUnreadMessages).catch(() => {});
    getPlacementNavVisibilityAction().then((res) => {
      if (res.ok) setPlacementVisible(res.visible);
    }).catch(() => {});
    getPedagogicNavVisibilityAction().then((res) => {
      if (res.ok) setImpressionVisible(res.isAdmin);
    }).catch(() => {});
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const navColor = sectionColor(pathname);
  // En mode exercice (mobile), Placement et Impression tropent la rangée — restés sur les hubs.
  const menuItems = [
    ...links,
    translateItem,
  ];

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Fermer le menu principal"
          className="fixed inset-0 z-40 cursor-default bg-transparent"
          onClick={() => setOpen(false)}
        />
      )}
      <nav
        className={
          lessonMode
            ? "print:hidden fixed bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-10 left-0 right-0 lg:left-[var(--sidebar-w)]"
            : "print:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-10 lg:hidden"
        }
        aria-label="Navigation principale"
        data-main-nav
        style={{ "--main-nav-color": navColor } as React.CSSProperties}
      >
        <div className={`relative mx-auto ${lessonMode ? "h-[64px] max-w-[26rem]" : "h-[68px] max-w-[28rem]"}`}>
          {lessonMode ? (
            <div
              className={`absolute inset-x-0 bottom-[68px] flex items-center justify-center gap-2 transition-all duration-250 ${
                open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
              }`}
              aria-hidden={!open}
            >
              {menuItems.flatMap((item, index) => {
                const Icon = item.icon;
                const isTranslate = item.href === translateItem.href;
                const isSettings = item.href === "/compte";
                const selected = isTranslate && showPivot;
                const icon = (
                  <span
                    className={`relative flex h-11 w-11 items-center justify-center rounded-full border border-white/90 shadow-[0_8px_20px_rgba(36,48,64,0.13)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 ${
                      selected
                        ? "bg-[var(--main-nav-color)] text-white"
                        : "bg-white/92 text-[var(--main-nav-color)] hover:bg-[color-mix(in_oklch,var(--main-nav-color)_14%,white)]"
                    }`}
                  >
                    <Icon active={selected} />
                    {item.href === "/" && (pendingTasks + unreadMessages) > 0 && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold leading-none text-white ring-2 ring-white">
                        {(pendingTasks + unreadMessages) > 9 ? "9+" : (pendingTasks + unreadMessages)}
                      </span>
                    )}
                  </span>
                );

                const navEl = isTranslate ? (
                  <button
                    key={item.href}
                    type="button"
                    aria-label={item.label}
                    title={item.label}
                    tabIndex={open ? 0 : -1}
                    onClick={() => {
                      togglePivot();
                      setOpen(false);
                    }}
                    style={{ transitionDelay: open ? `${index * 24}ms` : "0ms" }}
                  >
                    {icon}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-label={item.label}
                    title={item.label}
                    tabIndex={open ? 0 : -1}
                    onClick={(e) => {
                      if (evalGuard?.active) {
                        e.preventDefault();
                        setOpen(false);
                        evalGuard.requestNavigate(() => router.push(item.href));
                      }
                    }}
                    style={{ transitionDelay: open ? `${index * 24}ms` : "0ms" }}
                  >
                    {icon}
                  </Link>
                );

                return isSettings
                  ? [<span key="__nav-sep__" className="w-6" aria-hidden />, navEl]
                  : [navEl];
              })}
            </div>
          ) : (
            <div
              className={`absolute inset-x-0 bottom-[72px] flex items-center justify-center gap-4 transition-all duration-300 ${
                open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
              }`}
              aria-hidden={!open}
            >
              {placementVisible && <SecondaryMenuLink item={placementItem} open={open} />}
              {impressionVisible && <SecondaryMenuLink item={impressionItem} open={open} />}
              <SecondaryMenuLink item={settingsItem} open={open} />
              <button
                type="button"
                aria-label={translateItem.label}
                title={translateItem.label}
                tabIndex={open ? 0 : -1}
                onClick={() => {
                  togglePivot();
                  setOpen(false);
                }}
                className="group flex items-center justify-center"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/90 shadow-[0_8px_20px_rgba(36,48,64,0.13)] backdrop-blur-xl transition-transform group-hover:-translate-y-1 ${showPivot ? "bg-[var(--main-nav-color)] text-white" : "bg-white/95 text-[var(--main-nav-color)]"}`}>
                  <TranslateIcon active={showPivot} />
                </span>
              </button>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 rounded-[22px] border border-white/80 bg-white/78 px-3 py-2 shadow-[0_12px_34px_rgba(36,48,64,0.13)] backdrop-blur-2xl">
            <div className="grid grid-cols-5 items-center gap-2">
              {lessonMode ? (
                <>
                  {actions.back.available ? (
                    <ActionButton label="Retour" icon={<IconLeft />} disabled={actions.back.disabled} onClick={() => trigger("back")} />
                  ) : <span aria-hidden />}
                  {actions.refresh.available ? (
                    <ActionButton label="Refresh" icon={<IconRefresh />} disabled={actions.refresh.disabled} onClick={() => trigger("refresh")} />
                  ) : <span aria-hidden />}
                </>
              ) : (
                <>
                  <MainSectionButton item={mainPrimaryItems[0]} pathname={pathname} pendingTasks={pendingTasks} unreadMessages={unreadMessages} />
                  <MainSectionButton item={mainPrimaryItems[1]} pathname={pathname} />
                </>
              )}
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="group relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-white text-white shadow-[0_8px_20px_rgba(72,160,120,0.35)] transition-all duration-300 active:scale-95"
                style={{ background: "var(--main-nav-color)" }}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
              >
                <span
                  className={`absolute h-6 w-1 rounded-full bg-current transition-transform duration-300 ${
                    open ? "rotate-45" : "rotate-0"
                  }`}
                />
                <span
                  className={`absolute h-1 w-6 rounded-full bg-current transition-transform duration-300 ${
                    open ? "rotate-45" : "rotate-0"
                  }`}
                />
                <span className="sr-only">Menu</span>
              </button>
              {lessonMode ? (
                <>
                  {actions.validate.available ? (
                    <ActionButton
                      label={actions.validate.label ?? "Valider"}
                      icon={actions.validate.label === "Imprimer" ? <IconPrint /> : <IconCheck />}
                      disabled={actions.validate.disabled}
                      onClick={() => trigger("validate")}
                    />
                  ) : <span aria-hidden />}
                  {actions.next.available ? (
                    <ActionButton
                      label={actions.next.label ?? "Suivant"}
                      icon={actions.next.label === "Imprimer" ? <IconPrint /> : <IconRight />}
                      disabled={actions.next.disabled}
                      onClick={() => trigger("next")}
                    />
                  ) : <span aria-hidden />}
                </>
              ) : (
                <>
                  <MainSectionButton item={mainPrimaryItems[2]} pathname={pathname} />
                  <MainSectionButton item={mainPrimaryItems[3]} pathname={pathname} />
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function MainSectionButton({ item, pathname, pendingTasks = 0, unreadMessages = 0 }: { item: NavItem; pathname: string; pendingTasks?: number; unreadMessages?: number }) {
  const Icon = item.icon;
  const active = isActivePath(pathname, item.href)
    || (item.href === "/francais" && pathname.startsWith("/communication"));
  const totalBadge = pendingTasks + unreadMessages;
  return (
    <Link
      href={item.href}
      aria-label={item.label}
      title={item.label}
      className="group flex min-w-0 items-center justify-center rounded-2xl px-1 py-1 text-[var(--main-nav-color)] transition-transform hover:-translate-y-0.5 active:scale-95"
    >
      <span className={`relative flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-colors ${active ? "bg-[var(--main-nav-color)] text-white" : "bg-[color-mix(in_oklch,var(--main-nav-color)_12%,white)] text-[var(--main-nav-color)] group-hover:bg-white"}`}>
        <Icon active={active} />
        {item.href === "/" && totalBadge > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold leading-none text-white ring-2 ring-white">
            {totalBadge > 9 ? "9+" : totalBadge}
          </span>
        )}
      </span>
    </Link>
  );
}

function SecondaryMenuLink({ item, open }: { item: NavItem; open: boolean }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      aria-label={item.label}
      title={item.label}
      tabIndex={open ? 0 : -1}
      className="group flex items-center justify-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/90 bg-white/95 text-[var(--main-nav-color)] shadow-[0_8px_20px_rgba(36,48,64,0.13)] backdrop-blur-xl transition-transform group-hover:-translate-y-1">
        <Icon active={false} />
      </span>
    </Link>
  );
}

function ActionButton({ label, icon, onClick, disabled = false }: { label: string; icon: React.ReactNode; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="group flex min-w-0 items-center justify-center rounded-2xl px-1 py-1 text-[var(--main-nav-color)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklch,var(--main-nav-color)_12%,white)] active:scale-95 disabled:pointer-events-none disabled:opacity-25"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--main-nav-color)_12%,white)] text-[var(--main-nav-color)] shadow-sm transition-colors group-hover:bg-white">
        {icon}
      </span>
    </button>
  );
}

function IconLeft() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconRight() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconPrint() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9V2h12v7" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 11a8 8 0 10-2.34 5.66" />
      <path d="M20 4v7h-7" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function HomeIcon({ active: _active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[21px] w-[21px]" aria-hidden>
      <path d="M3 11L12 3l9 8" />
      <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
    </svg>
  );
}

function FrIcon({ active: _active }: { active: boolean }) {
  return (
    <span className="text-[15px] font-black leading-none" aria-hidden>
      FR
    </span>
  );
}

function MathIcon({ active: _active }: { active: boolean }) {
  return (
    <span className="flex h-[21px] w-[21px] flex-col items-center justify-center gap-[1px]" aria-hidden>
      <span className="flex gap-[2px] text-[9px] font-bold leading-none"><span>+</span><span>×</span></span>
      <span className="flex gap-[2px] text-[9px] font-bold leading-none"><span>−</span><span>÷</span></span>
    </span>
  );
}

function LectureIcon({ active: _active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[21px] w-[21px]" aria-hidden>
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  );
}

function GearIcon({ active: _active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[21px] w-[21px]" aria-hidden>
      <path d="M12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z" />
      <path d="M19.4 15a1.7 1.7 0 00.34 1.88l.04.04a2 2 0 01-2.83 2.83l-.04-.04A1.7 1.7 0 0015 19.4a1.7 1.7 0 00-1 1.55V21a2 2 0 01-4 0v-.06A1.7 1.7 0 009 19.4a1.7 1.7 0 00-1.88.34l-.04.04a2 2 0 01-2.83-2.83l.04-.04A1.7 1.7 0 004.6 15a1.7 1.7 0 00-1.55-1H3a2 2 0 010-4h.06A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.34-1.88l-.04-.04a2 2 0 012.83-2.83l.04.04A1.7 1.7 0 009 4.6a1.7 1.7 0 001-1.55V3a2 2 0 014 0v.06A1.7 1.7 0 0015 4.6a1.7 1.7 0 001.88-.34l.04-.04a2 2 0 012.83 2.83l-.04.04A1.7 1.7 0 0019.4 9a1.7 1.7 0 001.55 1H21a2 2 0 010 4h-.06A1.7 1.7 0 0019.4 15z" />
    </svg>
  );
}

function PlacementIcon({ active: _active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  );
}

function ImpressionIcon({ active: _active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9V2h12v7" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
      <circle cx="18" cy="13" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TranslateIcon({ active: _active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-[21px] w-[21px]"
      aria-hidden
    >
      <path d="M5 8l6 6M4 6h7M2 4h9M11 4c0 5-4 9-9 9" />
      <path d="M22 20l-5-10-5 10M13.5 16h7" />
    </svg>
  );
}
