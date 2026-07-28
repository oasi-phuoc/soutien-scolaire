import type { ReactNode } from "react";

type ScrollableTableProps = {
  /** Contenu `<tr>…</tr>` de l’en-tête (hors zone scroll). */
  head: ReactNode;
  /** Contenu du `<tbody>` (lignes de données). */
  body: ReactNode;
  /** `<colgroup>` partagé pour aligner en-tête et corps. */
  colgroup?: ReactNode;
  className?: string;
  tableClassName?: string;
  bodyClassName?: string;
  maxHeightClassName?: string;
};

/**
 * Tableau à en-tête fixe : la barre de défilement commence sous l’en-tête
 * et n’a pas de flèches (classe `.app-table-scroll`).
 */
export function ScrollableTable({
  head,
  body,
  colgroup,
  className = "",
  tableClassName = "w-full text-sm",
  bodyClassName = "divide-y divide-zinc-100 dark:divide-zinc-800",
  maxHeightClassName = "max-h-[calc(100dvh-14rem)] lg:max-h-[calc(100dvh-12rem)]",
}: ScrollableTableProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden ${maxHeightClassName} ${className}`.trim()}
    >
      <div className="app-table-scroll shrink-0 overflow-y-auto [scrollbar-gutter:stable]">
        <table className={tableClassName}>
          {colgroup}
          <thead>{head}</thead>
        </table>
      </div>
      <div className="app-table-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden [scrollbar-gutter:stable]">
        <table className={tableClassName}>
          {colgroup}
          <tbody className={bodyClassName}>{body}</tbody>
        </table>
      </div>
    </div>
  );
}
