"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getPendingTaskCountAction } from "@/app/actions/tasks";
import { useTranslation } from "@/components/TranslationProvider";

type ActionKind = "back" | "refresh" | "validate" | "next";
type ActionAvailability = Record<ActionKind, { available: boolean; disabled: boolean }>;

const mainLinks = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/lecture", label: "Lecture", icon: LectureIcon },
  { href: "/francais", label: "Français", icon: FrIcon },
  { href: "/mathematiques", label: "Maths", icon: MathIcon },
];

const emptyActionAvailability: ActionAvailability = {
  back: { available: false, disabled: true },
  refresh: { available: false, disabled: true },
  validate: { available: false, disabled: true },
  next: { available: false, disabled: true },
};

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" || pathname === "" : pathname.startsWith(href);
}

function sectionColor(pathname: string) {
  if (pathname.startsWith("/lecture")) return "var(--color-accent-lecture)";
  if (pathname.startsWith("/mathematiques") || pathname.startsWith("/placement")) return "var(--color-accent-alg)";
  if (pathname.startsWith("/francais") || pathname.startsWith("/communication")) return "var(--color-accent-fr)";
  return "var(--color-theme)";
}

function isMainSectionPage(pathname: string) {
  return ["", "/", "/lecture", "/francais", "/mathematiques", "/compte", "/communication"].includes(pathname);
}

function normalizedLabel(button: HTMLButtonElement) {
  return `${button.getAttribute("aria-label") ?? ""} ${button.textContent ?? ""}`
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase();
}

function getLegacyActionButton(kind: ActionKind) {
  if (typeof document === "undefined") return undefined;
  const tests: Record<ActionKind, RegExp[]> = {
    back: [/\bretour\b/],
    refresh: [/recommencer/, /reinitialiser/, /refaire/, /refresh/, /actualiser/],
    validate: [/valider/],
    next: [/suivant/, /terminer/],
  };
  const candidates = Array.from(document.querySelectorAll<HTMLButtonElement>("button")).reverse();
  return candidates.find((candidate) => {
    if (candidate.closest("[data-main-nav]")) return false;
    if (!candidate.closest(".hidden.fixed.bottom-0")) return false;
    return tests[kind].some((rx) => rx.test(normalizedLabel(candidate)));
  });
}

function readActionAvailability(): ActionAvailability {
  const states = { ...emptyActionAvailability };
  (Object.keys(states) as ActionKind[]).forEach((kind) => {
    const button = getLegacyActionButton(kind);
    states[kind] = {
      available: !!button && !button.classList.contains("invisible") && !button.classList.contains("hidden"),
      disabled: !button || button.disabled || button.getAttribute("aria-disabled") === "true",
    };
  });
  return states;
}

function triggerLegacyAction(kind: ActionKind, fallback: () => void) {
  const button = getLegacyActionButton(kind);
  if (button) {
    button.click();
    return;
  }
  fallback();
}

export function MainNav() {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const { showPivot, togglePivot } = useTranslation();
  const [open, setOpen] = useState(false);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [actions, setActions] = useState<ActionAvailability>(emptyActionAvailability);

  useEffect(() => {
    getPendingTaskCountAction().then(setPendingTasks).catch(() => {});
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

  useEffect(() => {
    if (isMainSectionPage(pathname) || pathname.startsWith("/admin")) return;

    let frame = 0;
    const syncActions = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = readActionAvailability();
        setActions((current) => JSON.stringify(current) === JSON.stringify(next) ? current : next);
      });
    };
    syncActions();
    const observer = new MutationObserver(syncActions);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["disabled", "aria-disabled", "class"],
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  const navColor = sectionColor(pathname);
  const lessonMode = !isMainSectionPage(pathname) && !pathname.startsWith("/admin");

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Fermer le menu"
          className="fixed inset-0 z-40 cursor-default bg-transparent"
          onClick={() => setOpen(false)}
        />
      )}
      <nav
        className="print:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-6"
        aria-label="Navigation principale"
        data-main-nav
        style={{ "--main-nav-color": navColor } as React.CSSProperties}
      >
        {/* Extra items panel — shown above the bar when "+" is pressed */}
        <div
          className={`mb-2 flex justify-center transition-all duration-200 ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <div className="flex gap-2 rounded-2xl border border-white/80 bg-white/92 px-4 py-2.5 shadow-[0_8px_24px_rgba(36,48,64,0.12)] backdrop-blur-xl">
            <ExtraNavItem
              href="/compte"
              label="Réglages"
              active={isActivePath(pathname, "/compte")}
              navColor={navColor}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <GearIcon active={isActivePath(pathname, "/compte")} />
            </ExtraNavItem>
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => {
                togglePivot();
                setOpen(false);
              }}
              className={`flex flex-col items-center gap-1 rounded-xl px-3 py-1 transition-colors ${
                showPivot
                  ? "text-[var(--main-nav-color)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--main-nav-color)]"
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                  showPivot
                    ? "bg-[var(--main-nav-color)] text-white"
                    : "bg-[color-mix(in_oklch,var(--main-nav-color)_10%,white)] text-[var(--main-nav-color)]"
                }`}
              >
                <TranslateIcon active={showPivot} />
              </span>
              <span className="text-[10px] font-semibold leading-none">Traductions</span>
            </button>
          </div>
        </div>

        {/* Main bar */}
        <div className="mx-auto max-w-sm rounded-[28px] border border-white/80 bg-white/82 shadow-[0_12px_32px_rgba(36,48,64,0.12)] backdrop-blur-2xl">
          {lessonMode ? (
            /* Lesson mode: action buttons + center menu toggle */
            <div className="grid grid-cols-5 items-center gap-1 px-2 py-2">
              {actions.back.available ? (
                <ActionButton label="Retour" icon={<IconLeft />} disabled={actions.back.disabled} onClick={() => triggerLegacyAction("back", () => router.back())} />
              ) : <span aria-hidden />}
              {actions.refresh.available ? (
                <ActionButton label="Refaire" icon={<IconRefresh />} disabled={actions.refresh.disabled} onClick={() => triggerLegacyAction("refresh", () => {})} />
              ) : <span aria-hidden />}
              <MenuToggleButton open={open} navColor={navColor} onClick={() => setOpen((v) => !v)} />
              {actions.validate.available ? (
                <ActionButton label="Valider" icon={<IconCheck />} disabled={actions.validate.disabled} onClick={() => triggerLegacyAction("validate", () => {})} />
              ) : <span aria-hidden />}
              {actions.next.available ? (
                <ActionButton label="Suivant" icon={<IconRight />} disabled={actions.next.disabled} onClick={() => triggerLegacyAction("next", () => {})} />
              ) : <span aria-hidden />}
            </div>
          ) : (
            /* Section mode: Home | Lecture | Français | Maths | [+] */
            <div className="flex items-center justify-around px-1 py-2">
              {mainLinks.map((item) => {
                const active = isActivePath(pathname, item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-col items-center gap-0.5 rounded-2xl px-3 py-1 transition-colors ${
                      active
                        ? "text-[var(--main-nav-color)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--main-nav-color)]"
                    }`}
                    aria-label={item.label}
                  >
                    <span
                      className={`relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
                        active
                          ? "bg-[var(--main-nav-color)] text-white shadow-sm"
                          : "text-[var(--color-text-secondary)]"
                      }`}
                    >
                      <Icon active={active} />
                      {item.href === "/" && pendingTasks > 0 && (
                        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold leading-none text-white ring-2 ring-white">
                          {pendingTasks > 9 ? "9+" : pendingTasks}
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] font-semibold leading-none">{item.label}</span>
                  </Link>
                );
              })}
              <MenuToggleButton open={open} navColor={navColor} onClick={() => setOpen((v) => !v)} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

function MenuToggleButton({ open, navColor, onClick }: { open: boolean; navColor: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Fermer" : "Plus"}
      aria-expanded={open}
      className="flex flex-col items-center gap-0.5 rounded-2xl px-3 py-1 transition-colors"
      style={{ color: open ? navColor : "var(--color-text-secondary)" }}
    >
      <span
        className="relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
        style={
          open
            ? { background: navColor, color: "white" }
            : { background: `color-mix(in oklch, ${navColor} 12%, white)`, color: navColor }
        }
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
          {open ? (
            <>
              <path d="M18 6L6 18M6 6l12 12" />
            </>
          ) : (
            <>
              <path d="M12 5v14M5 12h14" />
            </>
          )}
        </svg>
      </span>
      <span className="text-[10px] font-semibold leading-none">{open ? "Fermer" : "Plus"}</span>
    </button>
  );
}

function ExtraNavItem({
  href,
  label,
  active,
  navColor,
  tabIndex,
  onClick,
  children,
}: {
  href: string;
  label: string;
  active: boolean;
  navColor: string;
  tabIndex: number;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      tabIndex={tabIndex}
      onClick={onClick}
      className={`flex flex-col items-center gap-1 rounded-xl px-3 py-1 transition-colors ${
        active ? "text-[var(--main-nav-color)]" : "text-[var(--color-text-secondary)] hover:text-[var(--main-nav-color)]"
      }`}
      style={{ "--main-nav-color": navColor } as React.CSSProperties}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
          active
            ? "bg-[var(--main-nav-color)] text-white"
            : "bg-[color-mix(in_oklch,var(--main-nav-color)_10%,white)] text-[var(--main-nav-color)]"
        }`}
      >
        {children}
      </span>
      <span className="text-[10px] font-semibold leading-none">{label}</span>
    </Link>
  );
}

function ActionButton({
  label,
  icon,
  onClick,
  disabled = false,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group flex flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1 text-[10px] font-semibold text-[var(--main-nav-color)] transition-all duration-200 hover:bg-[color-mix(in_oklch,var(--main-nav-color)_10%,white)] active:scale-95 disabled:pointer-events-none disabled:opacity-25"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--main-nav-color)_10%,white)] text-[var(--main-nav-color)] transition-colors group-hover:bg-white">
        {icon}
      </span>
      <span className="truncate leading-none">{label}</span>
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  );
}

function GearIcon({ active: _active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z" />
      <path d="M19.4 15a1.7 1.7 0 00.34 1.88l.04.04a2 2 0 01-2.83 2.83l-.04-.04A1.7 1.7 0 0015 19.4a1.7 1.7 0 00-1 1.55V21a2 2 0 01-4 0v-.06A1.7 1.7 0 009 19.4a1.7 1.7 0 00-1.88.34l-.04.04a2 2 0 01-2.83-2.83l.04-.04A1.7 1.7 0 004.6 15a1.7 1.7 0 00-1.55-1H3a2 2 0 010-4h.06A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.34-1.88l-.04-.04a2 2 0 012.83-2.83l.04.04A1.7 1.7 0 009 4.6a1.7 1.7 0 001-1.55V3a2 2 0 014 0v.06A1.7 1.7 0 0015 4.6a1.7 1.7 0 001.88-.34l.04-.04a2 2 0 012.83 2.83l-.04.04A1.7 1.7 0 0019.4 9a1.7 1.7 0 001.55 1H21a2 2 0 010 4h-.06A1.7 1.7 0 0019.4 15z" />
    </svg>
  );
}

function TranslateIcon({ active: _active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[21px] w-[21px]" aria-hidden>
      <path d="M5 8l6 6M4 6h7M2 4h9M11 4c0 5-4 9-9 9" />
      <path d="M22 20l-5-10-5 10M13.5 16h7" />
    </svg>
  );
}
