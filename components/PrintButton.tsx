"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="min-h-12 rounded-xl bg-teal-700 px-5 text-base font-semibold text-white dark:bg-teal-600"
    >
      {label}
    </button>
  );
}
