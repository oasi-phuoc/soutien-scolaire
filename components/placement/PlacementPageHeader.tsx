"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useEvalNavGuard } from "@/components/EvalNavGuard";
import { PageBackButton } from "@/components/ui/PageBackButton";

export function PlacementBackButton({
  href = "/placement",
  onClick,
  ariaLabel = "Retour",
}: {
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const router = useRouter();
  const evalGuard = useEvalNavGuard();
  const runLeave = () => {
    if (onClick) onClick();
    else router.push(href);
  };

  return (
    <PageBackButton
      ariaLabel={ariaLabel}
      onClick={() => {
        if (evalGuard?.active) evalGuard.requestNavigate(runLeave);
        else runLeave();
      }}
    />
  );
}

export function PlacementPageHeader({
  label,
  title,
  subtitle,
  backHref = "/placement",
  onBack,
}: {
  label?: string;
  title: string;
  subtitle?: ReactNode;
  backHref?: string;
  onBack?: () => void;
}) {
  return (
    <header className="space-y-2">
      {label && (
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-quiz)]">
          {label}
        </p>
      )}
      <div className="flex items-center gap-2">
        <PlacementBackButton href={backHref} onClick={onBack} />
        <h1 className="min-w-0 flex-1 text-2xl font-bold text-[var(--color-text-primary)]">{title}</h1>
      </div>
      {subtitle && (
        <div className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{subtitle}</div>
      )}
    </header>
  );
}
