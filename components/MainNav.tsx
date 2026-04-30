"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/bibliotheque", label: "Bibliothèque", icon: LibraryIcon },
  { href: "/compte", label: "Réglages", icon: GearIcon },
] as const;

export function MainNav() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      className="print:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95"
      aria-label="Navigation principale"
    >
      <ul className="mx-auto flex max-w-lg justify-around px-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/" || pathname === ""
              : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex min-h-12 min-w-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-1 text-xs font-medium transition-colors ${
                  active
                    ? "text-teal-700 dark:text-teal-400"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                <Icon active={active} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
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
      className={active ? "text-teal-600 dark:text-teal-400" : undefined}
      aria-hidden
    >
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" />
    </svg>
  );
}

function LibraryIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={active ? "text-teal-600 dark:text-teal-400" : undefined}
      aria-hidden
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
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
      className={active ? "text-teal-600 dark:text-teal-400" : undefined}
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}
