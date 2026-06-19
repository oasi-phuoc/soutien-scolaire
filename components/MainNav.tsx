"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getPendingTaskCountAction } from "@/app/actions/tasks";
import { useTranslation } from "@/components/TranslationProvider";

type NavIcon = ({ active }: { active: boolean }) => React.JSX.Element;
type NavItem = {
  href: string;
  label: string;
  icon: NavIcon;
  color: string;
  x: number;
  y: number;
};

const links: NavItem[] = [
  { href: "/", label: "Accueil", icon: HomeIcon, color: "var(--color-theme)", x: 0, y: -174 },
  { href: "/lecture", label: "Lecture", icon: LectureIcon, color: "var(--color-accent-lecture)", x: -94, y: -132 },
  { href: "/mathematiques", label: "Maths", icon: MathIcon, color: "var(--color-accent-alg)", x: -110, y: -46 },
  { href: "/francais", label: "Français", icon: FrIcon, color: "var(--color-accent-fr)", x: 94, y: -132 },
  { href: "/compte", label: "Réglages", icon: GearIcon, color: "var(--color-theme)", x: 0, y: -82 },
];

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" || pathname === "" : pathname.startsWith(href);
}

export function MainNav() {
  const pathname = usePathname() ?? "";
  const { showPivot, togglePivot } = useTranslation();
  const [open, setOpen] = useState(false);
  const [pendingTasks, setPendingTasks] = useState(0);

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

  const current = links.find((item) => isActivePath(pathname, item.href));
  const navColor = current?.color ?? "var(--color-theme)";

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
        className="print:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-10"
        aria-label="Navigation principale"
        style={{ "--main-nav-color": navColor } as React.CSSProperties}
      >
        <div className="relative mx-auto h-[86px] max-w-[26rem]">
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-[74%] rounded-full transition-all duration-300 ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklch, var(--main-nav-color) 18%, white) 0%, transparent 66%)",
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
            {links.map((item, index) => {
              const active = isActivePath(pathname, item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group absolute flex w-[76px] flex-col items-center gap-1 transition-all duration-300 ease-out ${
                    open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  style={{
                    "--fan-color": item.color,
                    transform: open
                      ? `translate(calc(-50% + ${item.x}px), ${item.y}px) scale(1)`
                      : "translate(-50%, 18px) scale(0.72)",
                    transitionDelay: open ? `${index * 28}ms` : "0ms",
                  } as React.CSSProperties}
                  aria-hidden={!open}
                  tabIndex={open ? 0 : -1}
                >
                  <span
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-white/80 text-[var(--fan-color)] shadow-[0_10px_24px_rgba(36,48,64,0.13)] backdrop-blur-xl transition-all duration-200 group-hover:-translate-y-1 ${
                      active
                        ? "bg-[var(--fan-color)] text-white"
                        : "bg-white/92 group-hover:bg-[color-mix(in_oklch,var(--fan-color)_14%,white)]"
                    }`}
                  >
                    <Icon active={active} />
                    {item.href === "/" && pendingTasks > 0 && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold leading-none text-white ring-2 ring-white">
                        {pendingTasks > 9 ? "9+" : pendingTasks}
                      </span>
                    )}
                  </span>
                  <span className="rounded-full bg-white/85 px-2 py-0.5 text-[11px] font-semibold text-[var(--color-text-primary)] shadow-sm">
                    {item.label}
                  </span>
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => {
                togglePivot();
                setOpen(false);
              }}
              className={`group absolute flex w-[82px] flex-col items-center gap-1 transition-all duration-300 ease-out ${
                open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
              style={{
                "--fan-color": "var(--color-theme)",
                transform: open
                  ? "translate(calc(-50% + 110px), -46px) scale(1)"
                  : "translate(-50%, 18px) scale(0.72)",
                transitionDelay: open ? "140ms" : "0ms",
              } as React.CSSProperties}
              aria-hidden={!open}
              tabIndex={open ? 0 : -1}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/80 text-[var(--fan-color)] shadow-[0_10px_24px_rgba(36,48,64,0.13)] backdrop-blur-xl transition-all duration-200 group-hover:-translate-y-1 ${
                  showPivot
                    ? "bg-[var(--fan-color)] text-white"
                    : "bg-white/92 group-hover:bg-[color-mix(in_oklch,var(--fan-color)_14%,white)]"
                }`}
              >
                <TranslateIcon active={showPivot} />
              </span>
              <span className="rounded-full bg-white/85 px-2 py-0.5 text-[11px] font-semibold text-[var(--color-text-primary)] shadow-sm">
                Traductions
              </span>
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 rounded-[32px] border border-white/80 bg-white/74 px-5 py-3 shadow-[0_12px_34px_rgba(36,48,64,0.13)] backdrop-blur-2xl">
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="group relative flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-white text-white shadow-[0_12px_28px_rgba(72,160,120,0.35)] transition-all duration-300 active:scale-95"
                style={{ background: "var(--main-nav-color)" }}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
              >
                <span
                  className={`absolute h-8 w-1 rounded-full bg-current transition-transform duration-300 ${
                    open ? "rotate-45" : "rotate-0"
                  }`}
                />
                <span
                  className={`absolute h-1 w-8 rounded-full bg-current transition-transform duration-300 ${
                    open ? "rotate-45" : "rotate-0"
                  }`}
                />
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
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
