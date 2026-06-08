"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/TranslationProvider";

const links = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/lecture", label: "Lecture", icon: LectureIcon },
  { href: "/francais", label: "Français", icon: FrIcon },
  { href: "/mathematiques", label: "Maths", icon: MathIcon },
  { href: "/compte", label: "Réglages", icon: GearIcon },
] as const;

export function MainNav() {
  const pathname = usePathname() ?? "";
  const { showPivot, togglePivot } = useTranslation();

  const itemClass = (active: boolean) =>
    `group relative flex min-h-[3rem] w-full min-w-0 flex-col items-center justify-center gap-1 rounded-[24px] px-1.5 py-1 text-[10px] font-semibold leading-tight transition-all duration-200 active:scale-95 sm:text-xs ${
      active
        ? "bg-[var(--color-theme)]/14 text-[var(--color-theme)] shadow-sm ring-1 ring-[var(--color-theme)]/18"
        : "text-zinc-500 hover:-translate-y-0.5 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-100"
    }`;

  return (
    <nav
      className="print:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2"
      aria-label="Navigation principale"
    >
      <ul className="mx-auto grid max-w-xl grid-cols-6 gap-1 rounded-[28px] border border-zinc-200/80 bg-white/90 p-1 shadow-[0_14px_40px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90 dark:shadow-black/35">
        {links.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/" || pathname === ""
              : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={itemClass(active)}
              >
                <span className={`flex h-6 w-6 items-center justify-center rounded-xl transition-colors ${
                  active
                    ? "bg-[var(--color-theme)] text-white"
                    : "bg-transparent group-hover:bg-white group-hover:text-[var(--color-theme)] dark:group-hover:bg-zinc-950"
                }`}>
                  <Icon active={active} />
                </span>
                <span className="truncate">{label}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={togglePivot}
            className={itemClass(showPivot)}
          >
            <span className={`flex h-6 w-6 items-center justify-center rounded-xl transition-colors ${
              showPivot
                ? "bg-[var(--color-theme)] text-white"
                : "bg-transparent group-hover:bg-white group-hover:text-[var(--color-theme)] dark:group-hover:bg-zinc-950"
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
    <span className="flex h-[21px] w-[21px] items-center justify-center text-[11px] font-bold leading-none" aria-hidden>
      +−×÷
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
