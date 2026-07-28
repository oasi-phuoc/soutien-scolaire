/** Quadrillage d'écriture pour feuilles d'impression (5 mm × 5 mm). */
export function PrintWorkGrid({ rows = 5 }: { rows?: number }) {
  const n = Math.max(1, Math.min(20, rows));
  return (
    <div
      className="print-work-grid"
      style={{ ["--print-grid-rows" as string]: n }}
      aria-hidden
    />
  );
}

/** Sous-modules « problèmes » : quadrillage sous la consigne à l'impression. */
export const PRINT_WORK_GRID_SUBMODULES = new Set([
  "A2-4",
  "A3-7",
  "A4-8",
  "A5-7",
  "A6-5",
]);
