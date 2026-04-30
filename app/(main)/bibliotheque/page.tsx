import { Suspense } from "react";
import { AppHeader } from "@/components/AppHeader";
import { LibraryView } from "@/components/LibraryView";

function LibraryFallback() {
  return (
    <div className="space-y-3 py-4" aria-busy="true">
      <div className="h-12 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-10 w-2/3 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-24 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-24 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}

export default function BibliothequePage() {
  return (
    <>
      <AppHeader title="Bibliothèque" />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6">
        <Suspense fallback={<LibraryFallback />}>
          <LibraryView />
        </Suspense>
      </main>
    </>
  );
}
