import { Suspense } from "react";
import { ModuleScopeView } from "@/components/ModuleScopeView";

export const metadata = { title: "Français" };

function ModulesFallback() {
  return (
    <div className="space-y-3 py-4" aria-busy="true">
      <div className="h-12 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-10 w-2/3 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-24 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-24 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}

export default function FrancaisPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 bg-white px-4 py-6 dark:bg-zinc-950">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Français</h1>
      <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
        Littératie et thèmes du quotidien (FLE). Choisis un module puis fais le mini-test.
      </p>
      <Suspense fallback={<ModulesFallback />}>
        <ModuleScopeView scope="francais" />
      </Suspense>
    </main>
  );
}
