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
    `group relative flex min-h-[3rem] w-full min-w-0 flex-col items-center justify-center gap-1 rounded-2xl px-1.5 py-1 text-[10px] font-semibold leading-tight transition-all duration-200 active:scale-95 sm:text-xs ${
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
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" />
    </svg>
  );
}

function FrIcon({ active: _active }: { active: boolean }) {
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
      <path d="M4 6h16M4 12h10M4 18h14" />
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}


function GearIcon({ active: _active }: { active: boolean }) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
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
