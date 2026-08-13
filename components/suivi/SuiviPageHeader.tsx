import { PageBackButton } from "@/components/ui/PageBackButton";

export function SuiviPageHeader({
  title,
  subtitle,
  backHref = "/suivi",
  backLabel = "Suivi",
  actions,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div className="flex min-w-0 items-start gap-3">
        <PageBackButton href={backHref} className="mt-0.5" ariaLabel={`Retour ${backLabel}`} />
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h1>
          {subtitle ? (
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
          ) : null}
        </div>
      </div>
      {actions ? (
        <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
}
