"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/TranslationProvider";
import { getPendingTaskCountAction } from "@/app/actions/tasks";

const links: { href: string; label: string; icon: ({ active }: { active: boolean }) => React.JSX.Element; color: string }[] = [
  { href: "/", label: "Accueil", icon: HomeIcon, color: "var(--color-theme)" },
  { href: "/lecture", label: "Lecture", icon: LectureIcon, color: "var(--color-accent-lecture)" },
  { href: "/francais", label: "Français", icon: FrIcon, color: "var(--color-accent-fr)" },
  { href: "/mathematiques", label: "Maths", icon: MathIcon, color: "var(--color-accent-alg)" },
  { href: "/compte", label: "Réglages", icon: GearIcon, color: "var(--color-theme)" },
];

export function MainNav() {
  const pathname = usePathname() ?? "";
  const { showPivot, togglePivot } = useTranslation();
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    getPendingTaskCountAction().then(setPendingTasks).catch(() => {});
  }, [pathname]);

  const itemClass = (active: boolean) =>
    `group relative flex min-h-[3rem] w-full min-w-0 flex-col items-center justify-center gap-1 rounded-[20px] px-1.5 py-1 text-[10px] font-semibold leading-tight transition-all duration-200 active:scale-95 sm:text-xs ${
      active
        ? "bg-[color-mix(in_oklch,var(--nav-color)_14%,white)] text-[var(--nav-color)]"
        : "text-[var(--color-text-secondary)] hover:-translate-y-0.5 hover:bg-[color-mix(in_oklch,var(--nav-color)_8%,white)] hover:text-[var(--nav-color)] dark:text-zinc-400"
    }`;

  return (
    <nav
      className="print:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2"
      aria-label="Navigation principale"
    >
      <ul className="mx-auto grid max-w-xl grid-cols-6 gap-1 rounded-[28px] border border-[var(--color-theme)]/12 bg-white/95 p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.07)] backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90">
        {links.map(({ href, label, icon: Icon, color }) => {
          const active =
            href === "/"
              ? pathname === "/" || pathname === ""
              : pathname.startsWith(href);
          return (
            <li key={href} style={{ "--nav-color": color } as React.CSSProperties}>
              <Link href={href} className={itemClass(active)}>
                <span className={`relative flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                  active
                    ? "bg-[var(--nav-color)] text-white"
                    : "bg-transparent group-hover:bg-white group-hover:text-[var(--nav-color)]"
                }`}>
                  <Icon active={active} />
                  {href === "/" && pendingTasks > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold leading-none text-white ring-1 ring-white dark:ring-zinc-950">
                      {pendingTasks > 9 ? "9+" : pendingTasks}
                    </span>
                  )}
                </span>
                <span className="truncate">{label}</span>
              </Link>
            </li>
          );
        })}
        <li style={{ "--nav-color": "var(--color-theme)" } as React.CSSProperties}>
          <button
            type="button"
            onClick={togglePivot}
            className={itemClass(showPivot)}
          >
            <span className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
              showPivot
                ? "bg-[var(--nav-color)] text-white"
                : "bg-transparent group-hover:bg-white group-hover:text-[var(--nav-color)]"
            }`}>
              <TranslateIcon active={showPivot} />
            </span>
            <span className="truncate">Traduire</span>
          </button>
        </li>
      </ul>
    </nav>
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[21px] w-[21px]" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h5" />
    </svg>
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
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="9" cy="6" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="9" cy="18" r="2.5" fill="currentColor" stroke="none" />
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
