import type { ButtonHTMLAttributes } from "react";

export type ActionKind = "valider" | "controler" | "recommencer" | "commencer";

function ValidateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ControlIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
    </svg>
  );
}

function RestartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const config: Record<ActionKind, { label: string; className: string; Icon: () => React.JSX.Element }> = {
  valider: {
    label: "Valider",
    className: "bg-green-500 hover:bg-green-600 text-white shadow-sm shadow-green-200 dark:shadow-green-900",
    Icon: ValidateIcon,
  },
  controler: {
    label: "Contrôler",
    className: "bg-[var(--color-accent-alg)] hover:opacity-90 text-white shadow-sm shadow-blue-200 dark:shadow-blue-900",
    Icon: ControlIcon,
  },
  recommencer: {
    label: "Recommencer",
    className: "bg-zinc-100 hover:bg-zinc-200 text-zinc-500 shadow-sm dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-300",
    Icon: RestartIcon,
  },
  commencer: {
    label: "Commencer",
    className: "bg-green-500 hover:bg-green-600 text-white shadow-sm shadow-green-200 dark:shadow-green-900",
    Icon: PlayIcon,
  },
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  action: ActionKind;
};

export function ActionIconButton({ action, className = "", ...rest }: Props) {
  const { label, className: base, Icon } = config[action];
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      {...rest}
      className={`flex h-12 w-12 items-center justify-center rounded-full transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-40 ${base} ${className}`}
    >
      <Icon />
    </button>
  );
}
