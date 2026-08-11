"use client";

import type { ButtonHTMLAttributes } from "react";

export function IconSaveDisk({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

export function IconKeyReset({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  );
}

function Spinner({ size = 17 }: { size?: number }) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

type IconBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  pending?: boolean;
  variant?: "primary" | "secondary";
};

export function SaveIconButton({
  label,
  pending = false,
  variant = "primary",
  className = "",
  disabled,
  children,
  ...rest
}: IconBtnProps) {
  const base =
    variant === "primary"
      ? "bg-[var(--color-theme)] text-white hover:opacity-90"
      : "bg-[var(--color-theme-light)] text-[var(--color-theme)] hover:opacity-90 dark:bg-[var(--color-theme)]/20 dark:text-[var(--color-theme-muted)]";

  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      {...rest}
      disabled={disabled || pending}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-opacity disabled:cursor-not-allowed disabled:opacity-50 ${base} ${className}`}
    >
      {pending ? <Spinner /> : children ?? <IconSaveDisk />}
    </button>
  );
}
