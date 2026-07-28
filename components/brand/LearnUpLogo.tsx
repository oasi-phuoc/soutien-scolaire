import Link from "next/link";

type LearnUpLogoProps = {
  href?: string | null;
  className?: string;
  /** Affiche le tagline sous le lockup. */
  showTagline?: boolean;
  /** Taille de l’icône cercle (px). */
  iconSize?: number;
  /** Centre le bloc (ex. page connexion). */
  centered?: boolean;
};

/**
 * Logo LearnUp — navy = texte primaire, vert = `--color-theme` (#6fafa0).
 */
export function LearnUpLogo({
  href = "/",
  className = "",
  showTagline = true,
  iconSize = 36,
  centered = false,
}: LearnUpLogoProps) {
  const content = (
    <span
      className={`inline-flex flex-col gap-1.5 ${centered ? "items-center text-center" : "items-start"} ${className}`.trim()}
    >
      <span className="inline-flex items-center gap-2.5">
        <LearnUpMark size={iconSize} />
        <span className="text-[1.35rem] font-bold leading-none tracking-tight">
          <span className="text-[var(--color-text-primary)]">Learn</span>
          <span className="text-[var(--color-theme)]">Up</span>
        </span>
      </span>
      {showTagline && (
        <span className="max-w-full text-[0.62rem] font-medium leading-tight tracking-wide text-[var(--color-text-primary)]">
          Apprendre · Comprendre · Progresser
        </span>
      )}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="block outline-none transition-opacity hover:opacity-90 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-[var(--color-theme)]"
      aria-label="LearnUp — Accueil"
    >
      {content}
    </Link>
  );
}

export function LearnUpMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`.trim()}
      aria-hidden
    >
      <circle cx="24" cy="24" r="24" fill="var(--color-text-primary)" />
      <path fill="#fff" d="M10 36h8v-6h8v-6h8v-6h4v22H10z" />
      <rect x="10" y="34" width="8" height="2" fill="var(--color-theme)" />
      <path
        fill="var(--color-theme)"
        d="M34 10.5l1.15 2.45 2.7.35-1.98 1.85.52 2.65L34 16.5l-2.39 1.3.52-2.65-1.98-1.85 2.7-.35L34 10.5z"
      />
    </svg>
  );
}
