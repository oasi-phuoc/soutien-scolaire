"use client";

import Link from "next/link";
import type { MouseEventHandler } from "react";

/** Chevron gauche sans fond — même style que la messagerie / les leçons. */
export const PAGE_BACK_BUTTON_CLASS =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-theme-light)] hover:text-[var(--color-theme)]";

export function PageBackIcon({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

type PageBackButtonProps = {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  ariaLabel?: string;
  className?: string;
  flip?: boolean;
};

export function PageBackButton({
  href,
  onClick,
  ariaLabel = "Retour",
  className = "",
  flip = false,
}: PageBackButtonProps) {
  const cls = className ? `${PAGE_BACK_BUTTON_CLASS} ${className}` : PAGE_BACK_BUTTON_CLASS;
  const icon = <PageBackIcon flip={flip} />;

  if (href) {
    return (
      <Link href={href} onClick={onClick} aria-label={ariaLabel} className={cls}>
        {icon}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {icon}
    </button>
  );
}
