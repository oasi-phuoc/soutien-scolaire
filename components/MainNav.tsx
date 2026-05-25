"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/TranslationProvider";

const links = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/lecture", label: "Lecture", icon: LectureIcon },
  { href: "/francais", label: "Français", icon: FrIcon },
  { href: "/mathematiques", label: "Maths", icon: MathIcon },
  { href: "/communication", label: "Comm.", icon: CommIcon },
] as const;

export function MainNav() {
  const pathname = usePathname() ?? "";
  const { showPivot, togglePivot } = useTranslation();
  return (
    <nav
      className="print:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95"
      aria-label="Navigation principale"
    >
      <ul className="mx-auto flex max-w-lg justify-around px-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/" || pathname === ""
              : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex min-h-12 min-w-[3.5rem] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 text-[10px] font-medium leading-tight transition-colors sm:text-xs ${
                  active
                    ? "text-[var(--color-theme)]"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                <Icon active={active} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={togglePivot}
            className={`flex min-h-12 min-w-[3.5rem] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 text-[10px] font-medium leading-tight transition-colors sm:text-xs ${
              showPivot
                ? "text-[var(--color-theme)]"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            <TranslateIcon active={showPivot} />
            <span>Traduire</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : undefined}
      aria-hidden
    >
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" />
    </svg>
  );
}

function FrIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : undefined}
      aria-hidden
    >
      <path d="M4 6h16M4 12h10M4 18h14" />
    </svg>
  );
}

function MathIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : undefined}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8v8M12 8v8M16 8v8M8 12h8" />
    </svg>
  );
}

function LectureIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : undefined}
      aria-hidden
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function GearIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : undefined}
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function CommIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-accent-comm)]" : undefined}
      aria-hidden
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function TranslateIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-[var(--color-theme)]" : undefined}
      aria-hidden
    >
      <path d="M5 8l6 6M4 6h7M2 4h9M11 4c0 5-4 9-9 9" />
      <path d="M22 20l-5-10-5 10M13.5 16h7" />
    </svg>
  );
}
